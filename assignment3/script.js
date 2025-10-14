const packImage = document.querySelector(".val-pack");
console.log(packImage);

packImage.addEventListener("mouseenter", () => {
  document.body.classList.add("glow");
});
packImage.addEventListener("mouseleave", () => {
  document.body.classList.remove("glow");
});

// Random Number Generator
function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

packImage.addEventListener("click", function () {
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
  location.href = "openpack.html";
});
