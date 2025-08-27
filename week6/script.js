const topHeading = document.querySelector("h1");
console.log(topHeading);
console.log(topHeading.textContent);
// changes content
topHeading.textContent = "This is my New Heading";
// change color
topHeading.style.color = "navy";

const firstPara = document.querySelector("p");
console.log(firstPara);
console.log(firstPara.textContent);
// changes content
firstPara.textContent =
  "This is my new paragraph that I have changed through JavaScript";
firstPara.innerHTML += "<span> New Element </span>";

const mySection = document.querySelector("section");
console.log(mySection);
let myNewContent = `
<h2>this is an image of cat</h2>
<p> appreciate it or no?</p>`;
mySection.innerHTML += myNewContent;

// can use tag/id/class name
const h2Heading = document.querySelector("#second-heading");
console.log(h2Heading);
console.log(h2Heading.textContent);
h2Heading.style.color = "maroon";

// querySelectorALL finds PLURAL things with the same tag
// querySelector find SINGULAR
const allPara = document.querySelectorAll("p");
console.log(allPara);
// use ForLoop to find text-content for multiple items
for (let i = 0; i < allPara.length; i++) {
  console.log("Para", i + 1, ":", allPara[i].textContent);

  //   allPara[i].textContent =
  //     "this changes the content in all the paragraphs LMAO";

  //   allPara[i].style.backgroundColor="cyan"
  allPara[i].style.color = "black";
  //   java + css combo
  allPara[i].classList.add("para-style");
}

const allAnothers = document.querySelectorAll(".another");
console.log(allAnothers);
for (let i = 0; i < allAnothers.length; i++) {
  console.log(
    "elements with class another",
    i + 1,
    ":",
    allAnothers[i].textContent
  );
}

function toggleMe() {
  const myImg = document.querySelector("img");
  console.log(myImg);
  myImg.classList.toggle("round");
}

// Event Listeners - function makes img turn round when mouse cursor hover over image
const myImg = document.querySelector("img");
console.log(myImg);
// "addMe" is the name of the function, can be changed to custom
myImg.addEventListener("mouseenter", addMe);
myImg.addEventListener("mouseleave", removeMe);
myImg.addEventListener("click", handleClick);

function handleClick() {
  console.log("thats pretty rude of you to click an innocent WHITE cat");
  //   on click -> changes heading to "h1"
  topHeading.textContent = "My Furry White Cat";
}

function addMe() {
  myImg.classList.add("round");
}

function removeMe() {
  myImg.classList.remove("round");
}
