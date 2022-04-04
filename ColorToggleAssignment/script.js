const setBackground = document.querySelector("body");
const changeColorToDefault = document.querySelector("li:nth-child(1)");
const changeColorToRed = document.querySelector("li:nth-child(2)");
const changeColorToOrange = document.querySelector("li:nth-child(3)");
const changeColorToPurple = document.querySelector("li:nth-child(4)");
const changeColorToGreen = document.querySelector("li:nth-child(5)");
const selectMenuContent = document.querySelector(".dropdown-content");
const hoverHamburger = document.getElementsByTagName("img")[0];
let changeTextToColorName = document.querySelector(".text");

changeColorToDefault.addEventListener("click", function () {
  setBackground.classList.add("default-background");
  setBackground.classList.remove("red-background");
  setBackground.classList.remove("orange-background");
  setBackground.classList.remove("purple-background");
  setBackground.classList.remove("green-background");
  changeTextToColorName.textContent = "Default-Color";
});

changeColorToRed.addEventListener("click", function () {
  setBackground.classList.add("red-background");
  setBackground.classList.remove("orange-background");
  setBackground.classList.remove("purple-background");
  setBackground.classList.remove("green-background");
  setBackground.classList.remove("default-background");
  changeTextToColorName.textContent = "RED";
});

changeColorToOrange.addEventListener("click", function () {
  setBackground.classList.add("orange-background");
  setBackground.classList.remove("red-background");
  setBackground.classList.remove("purple-background");
  setBackground.classList.remove("green-background");
  setBackground.classList.remove("default-background");
  changeTextToColorName.textContent = "ORANGE";
});

changeColorToPurple.addEventListener("click", function () {
  setBackground.classList.add("purple-background");
  setBackground.classList.remove("red-background");
  setBackground.classList.remove("orange-background");
  setBackground.classList.remove("green-background");
  setBackground.classList.remove("default-background");
  changeTextToColorName.textContent = "PURPLE";
});

changeColorToGreen.addEventListener("click", function () {
  setBackground.classList.add("green-background");
  setBackground.classList.remove("red-background");
  setBackground.classList.remove("orange-background");
  setBackground.classList.remove("purple-background");
  setBackground.classList.remove("default-background");
  changeTextToColorName.textContent = "GREEN";
});

hoverHamburger.addEventListener("mouseover", () => {
  selectMenuContent.classList.remove("menu-closed");
});

selectMenuContent.addEventListener("click", () => {
  selectMenuContent.classList.add("menu-closed");
});
