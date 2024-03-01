const input = document.querySelector("#name-input")
const greetingName = document.querySelector("#name-output")

input.addEventListener("input", greeting)

function greeting(event) {
    const guestName = event.currentTarget.value
    if (guestName === "" || guestName.trim() === "") {
        greetingName.textContent = "Anonymous"
    }
    else {
        greetingName.textContent = guestName.trim();
    }
   
    
}