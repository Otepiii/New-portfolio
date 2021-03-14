var form = document.querySelector(".my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.querySelector(".thanks");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Thanks for your Message! Glad to hear from you";
        status.classList.add("success");
        form.reset()
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        status.classList.add("error");
    });
}
form.addEventListener("submit", handleSubmit)