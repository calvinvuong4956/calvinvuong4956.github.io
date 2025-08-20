function checkWeather() {
  // queryselector = searching within files to find "myTemp"
  const body = document.querySelector("body");
  const temp = document.querySelector("#myTemp");

  console.log(temp);
  const t = temp.value;
  console.log(t);
  if (t > 40) {
    console.log("I'm not going outside");
    body.style.backgroundColor = "red";
  } else if (t <= 40 && t > 30) {
    console.log("it's HOT");
    body.style.backgroundColor = "orange";
  } else if (t <= 30 && t > 18) {
    console.log("perfect weather");
    body.style.backgroundColor = "yellow";
  } else if (t <= 18 && t > 8) {
    console.log("damn it's cold bruh");
    body.style.backgroundColor = "cyan";
  } else if (t < 8) {
    console.log("this mf cold as a bi-");
    body.style.backgroundColor = "grey";
  }
}
