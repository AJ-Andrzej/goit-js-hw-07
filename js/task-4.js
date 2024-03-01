const form = document.querySelector(".login-form")
form.addEventListener("submit", loginSubmit)

function loginSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements

    if (elements.email.value === "" || elements.password.value === "") {
        alert("All form fields must be filled in")
        return
    }

    const info = {
        email: elements.email.value,
        password: elements.password.value
    }
        console.log(info)

  
    event.currentTarget.reset()
}