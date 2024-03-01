const body = document.querySelector("body")
const button = document.querySelector(".change-color")
const colorDescription = document.querySelector(".color")

button.addEventListener("click", changeColor)


function changeColor(event) {
    const changedColor = getRandomHexColor()

    body.style = `background-color: ${changedColor}`
    colorDescription.textContent = `${changedColor}`
    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

