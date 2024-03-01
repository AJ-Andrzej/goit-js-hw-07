const boxes = document.querySelector("#boxes");
const createButton = document.querySelector("button[data-create]")
const removeButton = document.querySelector("button[data-destroy]")
const input = document.querySelector("input")


createButton.addEventListener("click", createEl)
removeButton.addEventListener("click", removeEl)



function createBoxes(amount) {
    const elementsArr = []
    let width = 20;
    let height = 20;
    if (amount < Number(input.min) || amount > Number(input.max)) return 
    for (let i = 1; i <= amount; i += 1) {
        let color = getRandomHexColor()
        width += 10;
        height += 10;
        const divEl = `<div style="background-color: ${color}; width: ${width}px; height: ${height}px"></div>
        `
        elementsArr.push(divEl)
    }
    boxes.innerHTML = elemetsArr.join("")
    
}

function createEl(event) {
    event.preventDefault();
    const value = Number(input.value);
    createBoxes(value)
    input.value = ""
    
}
function removeEl(event) {
    event.preventDefault();
    boxes.innerHTML = ""
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}