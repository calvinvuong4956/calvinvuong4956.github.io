window.onload = function () {
  // Get card from localStorage
  const packData = localStorage.getItem("currentPack");
  console.log(packData);

  if (!packData) {
    // If it doesn't pick up any Card Data, then it will re-direct back to the home-page
    window.location.href = "index.html";
    return;
  }

  const cardNumbers = JSON.parse(packData);
  console.log(cardNumbers);
  const container = document.getElementById("cards-container");
  console.log(container);

  cardNumbers.forEach((num, index) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    cardContainer.innerHTML = `
      <div class="card">
        <div class="card-face card-back">
          <img src="BACK Val Card.png" alt="Card Back">
        </div>
        <div class="card-face card-front">
          <img src="./Val Cards/val cards (${num}).png" alt="Card ${index + 1}">
        </div>
      </div>
    `;

    cardContainer.addEventListener("click", function () {
      const flipSound = new Audio("FlipCards.mp3");
      flipSound.play();

      this.querySelector(".card").classList.toggle("flipped");
    });

    container.appendChild(cardContainer);
  });
};

const newPackButton = document.querySelector("#newPack");
console.log(newPackButton);
const flipAllButton = document.querySelector("#flipAll");
console.log(flipAllButton);
const openAnotherButton = document.querySelector("#openAnother");
console.log(openAnotherButton);

newPackButton.addEventListener("click", function () {
  location.href = "index.html";
});

flipAllButton.addEventListener("click", function () {
  const flipSound = new Audio("FlipCards.mp3");
  flipSound.play();

  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.classList.add("flipped");
  });
});

openAnotherButton.addEventListener("click", function () {
  function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  let selectedCards = [];
  for (let i = 0; i < 5; i++) {
    let num;
    if (i == 4) {
      num = randomNumber(0, 36);
    } else {
      num = randomNumber(37, 80);
    }
    selectedCards.push(num);
  }

  localStorage.setItem("currentPack", JSON.stringify(selectedCards));
  location.reload();
});
