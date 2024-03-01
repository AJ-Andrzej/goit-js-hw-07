const body = document.querySelector("body")
const button = document.querySelector(".change-color")
const colorDiscription = document.querySelector(".color")

button.addEventListener("click", changeColor)


function changeColor(event) {
    event.preventDefault();
    const changedColor = getRandomHexColor()

    body.style = `background-color: ${changedColor}`
    colorDiscription.textContent = `${changedColor}`
    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

