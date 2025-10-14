window.onload = function () {
  var pack = document.getElementById("val-pack");
  pack.addEventListener("click", openPack);
};

function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// FUNCTION TO OPEN PACK + DISPLAY CARDS
function openPack() {
  // ALERT = Pop-up message at the top of website
  // alert("card pack opened");

  //   Everytime you click on pack, will remove prior cards
  let cardOpened = document.getElementById("val-cards-opened");
  while (cardOpened.firstChild) {
    cardOpened.firstChild.remove();
  }

  // i=5 because there are 5 cards in one pack
  for (let i = 0; i < 5; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("val-card");

    let cardImg = document.createElement("img");
    cardImg.id = i;

    // the last card (i=4) will be rare, chosen from the "rare-card" pool between 1-36
    let num = 1;
    if (i == 4) {
      num = randomNumber(1, 36);
    } else {
      num = randomNumber(37, 80);
    }
    cardImg.src = "./Val Cards/val cards (" + num.toString() + ").png";

    cardDiv.appendChild(cardImg);
    document.getElementById("val-cards-opened").appendChild(cardDiv);
  }
}
