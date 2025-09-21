// Array used for songs and their respective album covers as its a music player and the songs will be frequently called upon.
const songs = [
  {
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/erokia_ambient-wave-56-msfxp7-78.mp3",
    cover:
      "https://images.stockcake.com/public/0/d/f/0df9e740-854f-422d-b01a-37baf403883a_large/silhouette-meditation-outdoors-stockcake.jpg",
    alt: "meditation album cover",
  },
  {
    src: "jazz.mp3",
    // Ref: https://youtu.be/IpdJ8lcZ2CA?si=cd9rJf2X7MnczVLy
    cover:
      "https://images.stockcake.com/public/6/d/2/6d2f5c4c-6c93-4822-a589-40b1989563ce_large/ambient-jazz-night-stockcake.jpg",
    alt: "jazz album cover",
  },
  {
    src: "lofi.mp3",
    // Ref: https://youtu.be/Tio8r3Zf70M?si=IiwGgK6HkWySfA7z
    cover: "https://f4.bcbits.com/img/a1435058381_16.jpg",
    alt: "lofi album cover",
  },
];

let currentSongIndex = 0;

// access to needed elements
const audioM = document.querySelector("#meditation");
console.log(audioM);
const musicCover = document.querySelector(".music-cover");
console.log(musicCover);
const musicCoverContainer = document.querySelector(".music-cover-container");
console.log(musicCoverContainer);
const progressBar = document.querySelector("#progress-bar-fill");
console.log(progressBar);

musicCover.addEventListener("click", togglePlayPause);

// progress-bar update (replace "video" with "audio" since I'm working with audio files)
audioM.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  if (audioM.duration) {
    const value = (audioM.currentTime / audioM.duration) * 100;
    progressBar.style.width = value + "%";
  }
}

// Add other functionalities here
// PAUSE Overlay
const pauseOverlay = document.createElement("div");
console.log(pauseOverlay);

pauseOverlay.classList.add("pause-overlay");
pauseOverlay.innerHTML = `<img src="https://img.icons8.com/ios-glyphs/64/pause--v1.png" alt="PAUSE" class="pause-icon"> 
`;
pauseOverlay.style.display = "flex";

// pause overlay appear over music-cover-container
// I wanted to do this because of a design-choice. I didn't want to have a normal, quite boring dedicated play and pause button. Instead, I wanted the album cover to also act as the play/pause button.
// Since there is no dedicated play/pause button, the action of pausing the song solely relies on user's intuition.
musicCoverContainer.style.position = "relative";
musicCoverContainer.appendChild(pauseOverlay);

// function for pause icon appearing/disappearing
// I wanted only the pause button to appear, as its pretty intuitive what the absence of the pause button would mean.
function showPauseIcon() {
  pauseOverlay.style.display = "flex";
}

function hidePauseIcon() {
  pauseOverlay.style.display = "none";
}

function togglePlayPause() {
  if (audioM.paused || audioM.ended) {
    audioM.play();
    hidePauseIcon();
  } else {
    audioM.pause();
    showPauseIcon();
  }
}

// Mute/Unmute
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

// this code makes it so the volume and its icon is UNMUTED upon initial startup of the website
// I replaced the controls with white transparent versions as I believe it fits better with the colour theme of my media player.
// I simply downloaded the original images, photoshopped them to change them from black to white, then uploaded it to imgur (a free image sharing website), so that users on other devices can also see the control icons.
audioM.muted = false;
muteUnmuteImg.src = "https://i.imgur.com/K0D8yBr.png";

// - addEventListener to code "CLICK" to button
muteUnmuteButton.addEventListener("click", toggleAudio);

// - write callback function required for MUTE/UNMUTE function
// - change mute/unmute icon
function toggleAudio() {
  if (audioM.muted) {
    audioM.muted = false;
    muteUnmuteImg.src = "https://i.imgur.com/K0D8yBr.png";
  } else {
    audioM.muted = true;
    muteUnmuteImg.src = "https://i.imgur.com/9MC2Fz0.png";
  }
}

// Song Music Cover Change
// Code for when the song changes, its respective album cover follows it.
function loadSong(index) {
  const song = songs[index];
  audioM.src = song.src;
  musicCover.src = song.cover;
  musicCover.alt = song.alt;

  progressBar.style.width = "0%";
  showPauseIcon();
}

// Next-Previous Buttons
const nextButton = document.querySelector("#next");
console.log(nextButton);
const previousButton = document.querySelector("#previous");
console.log(previousButton);

nextButton.addEventListener("click", nextSong);
previousButton.addEventListener("click", previousSong);

// Code ensures that songs will loop in a cycle if the next or previous buttons are pressed when the song, at the end of playlist, is playing.
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
}

function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
}

// Interactive Navigation List
const jazzNav = document.querySelector("#jazz-nav");
const meditationNav = document.querySelector("#meditation-nav");
const lofiNav = document.querySelector("#lofi-nav");

function playListSong(songIndex) {
  currentSongIndex = songIndex;
  loadSong(currentSongIndex);
}

jazzNav.addEventListener("click", (e) => {
  playListSong(1);
});

meditationNav.addEventListener("click", (e) => {
  playListSong(0);
});

lofiNav.addEventListener("click", (e) => {
  playListSong(2);
});
