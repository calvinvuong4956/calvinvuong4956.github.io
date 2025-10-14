const packImage = document.querySelector(".val-pack");
console.log(packImage);

// Animation for the background colour change when hovering over the pack-cover-image
packImage.addEventListener("mouseenter", () => {
  document.body.classList.add("glow");
});
packImage.addEventListener("mouseleave", () => {
  document.body.classList.remove("glow");
});

// Random Number Generator, code sourced from https://www.youtube.com/watch?v=TlXi8vd1kNw
function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// When clicking on the pack-cover-image, a sound-effect will play, the cards will be pre-determined by the RNG and then will direct user to the "openPack.html" page
packImage.addEventListener("click", function () {
  // Audio was sourced from 2 YouTube videos:
  // "https://www.youtube.com/watch?v=Qh1svR-kSpk" and "https://www.youtube.com/watch?v=tJxPNJyJfFI"
  // and edited together by me in Reaper
  const packOpenSound = new Audio("OpenPack.mp3");
  packOpenSound.play();

  let selectedCards = [];
  // i<5 because there are 5 cards in one pack
  for (let i = 0; i < 5; i++) {
    let num;
    // the last card (i=4) will be rare, chosen from the "rare-card" pool between 1-36
    if (i == 4) {
      num = randomNumber(0, 36);
    } else {
      num = randomNumber(37, 80);
    }
    selectedCards.push(num);
  }

  // Save cards to localStorage so when your refresh the "openpack" page, it will re-load the same cards that were opened and not be refreshed with new cards
  localStorage.setItem("currentPack", JSON.stringify(selectedCards));
  //  500ms delay before the webpage directs to openPack.html page to allow the openPack sound effect to fully play
  setTimeout(() => {
    location.href = "openpack.html";
  }, 500);
});
