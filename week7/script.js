// 1. access audio/video file

const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// 2. access play button

const playButton = document.querySelector("#play-button");
console.log(playButton);

// 3. add click-event-listener so audio/video will play when play-button is pressed

playButton.addEventListener("click", playAudio);

function playAudio() {
  //   myAudio.play();
  myVideo.play();
}

// PAUSE BUTTON
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  //   myAudio.pause();
  myVideo.pause();
}

// ---------------------------------------------------------------------
// Pop Sound Effect
// 1. access Pop Audio
const popSound = document.querySelector("#pop-sound");
console.log(popSound);

// 2. access pop button
const popButton = document.querySelector("#pop-button");
console.log(popButton);

// 3. fucntion, add pop sound when clicking on pop-button
// "popAudio" is new name given to the sound effect"
popButton.addEventListener("click", popAudio);

function popAudio() {
  popSound.play();
}
// ---------------------------------------------------------------------
