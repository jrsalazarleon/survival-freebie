const slide = document.getElementById("#slide");
let slideElement = document.querySelectorAll(".slide-img");
let slideElementLast = slideElement[slideElement.length -1];
const buttonNext = document.getElementById("button-next");
const buttonPrev = document.getElementById("button-prev")

slide.insertAdjacentElement("afterbegin", slideElementLast)

