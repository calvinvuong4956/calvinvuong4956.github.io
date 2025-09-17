// Access to the video
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// --------------------------------------------------------------

// PLAY-PAUSE
// Access to play/pause button
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// - addEventListener to code "CLICK" to button
playPauseButton.addEventListener("click", toggleVideo);

// - write callback function required for PLAY/PAUSE function
// - change play/pause icon
function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

// --------------------------------------------------------------

// MUTE/UNMUTE
// Access to mute/unmute button
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

// - addEventListener to code "CLICK" to button
muteUnmuteButton.addEventListener("click", toggleAudio);

// - write callback function required for MUTE/UNMUTE function
// - change mute/unmute icon
function toggleAudio() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

// --------------------------------------------------------------

// FAST-FORWARD
// Access to fast-forward button
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

const fastForwardImg = document.querySelector("#fast-forward-img");
console.log(fastForwardImg);

// - addEventListener to code "CLICK" to button
fastForwardButton.addEventListener("click", toggleSpeed);

// - write callback function required for FAST/FORWARD function
function toggleSpeed() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}

// --------------------------------------------------------------

// MID-VIDEO
// Access to Mid-Video Buttons (seconds)
const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

// - addEventListener to code "CLICK" to buttons
step1Button.addEventListener("click", goToStep1);
step2Button.addEventListener("click", goToStep2);

// - write callback function required for Step 1/2
function goToStep1() {
  myVideo.currentTime = 17;
}

function goToStep2() {
  myVideo.currentTime = 50;
}

// --------------------------------------------------------------

// HEARTS BUTTON
// Access to heart button
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

// get access to text area and number counter
let likes = 0;
const likesText = document.querySelector("#likes");
console.log(likesText);

// - addEventListener to code "CLICK" to button
heartButton.addEventListener("click", displayLikes);

// - write callback function required for hearts
function displayLikes() {
  likes++;
  likesText.textContent = likes;
}

// --------------------------------------------------------------

// PROGRESS BAR - timeUpdate Event
// Access to progress bar
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

// - addEventListener to code Progress Bar
myVideo.addEventListener("timeupdate", updateProgress);

// - write function for timeUpdate
function updateProgress() {
  let duration = (myVideo.currentTime / myVideo.duration) * 100;
  //   console.log(duration);
  progressBar.style.width = duration + "%";
}

// --------------------------------------------------------------

// FULL SCREEN
// Access to Full Screen Button
const fullScreenButton = document.querySelector("#fullscreen-button");
console.log(fullScreenButton);

// - addEventListener to code Full Screen Button
fullScreenButton.addEventListener("click", goFullScreen);
// - double-click full-screen - "dblclick"
myVideo.addEventListener("dblclick", goFullScreen);

// - write function for Full Screen
function goFullScreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// --------------------------------------------------------------

// PLAYLIST
const videoList = [
  { id: 1, src: "stardust-1.mp4" },
  { id: 2, src: "zenscape-1.mp4" },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
];

// Access to Playlist Buttons
const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);
const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);
const musicVideoButton = document.querySelector("#musicvideo-vid-button");
console.log(musicVideoButton);

// - addEventListener to code Playlist Buttons (inline functions)
stardustButton.addEventListener("click", function () {
  chooseVideo(0);
});

zenscapeButton.addEventListener("click", function () {
  chooseVideo(1);
});

musicVideoButton.addEventListener("click", function () {
  chooseVideo(2);
});

// - write function for Full Screen (no = number)
function chooseVideo(no) {
  let currentVideo = videoList[no].src;
  console.log(currentVideo);
  myVideo.src = currentVideo;
  myVideo.load();
  myVideo.play();
}
