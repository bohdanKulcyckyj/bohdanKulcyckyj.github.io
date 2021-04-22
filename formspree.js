var form = document.getElementById("contact-form");

const messageP = document.querySelector("#my-form-status");
let opacity = 1;

const displayMessage = () => {
    messageP.style.opacity = `${opacity}`;
    messageP.style.transition = "all 0.6s ease";


    console.log(opacity);
    
    if(opacity <= 0) {
        opacity = 1;
        messageP.innerHTML = 'I usually respond due the week';
        return;
    }

    opacity -= 0.1;
    setTimeout(displayMessage, 500);
    return;
}
    
async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  console.log(data);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    messageP.innerHTML = 'Your message was successfully sent';
    displayMessage();
    form.reset();
  }).catch(error => {
    messageP.innerHTML = "Oops! There was a problem submitting your form";
    displayMessage();
    form.reset();
  });
}
form.addEventListener("submit", handleSubmit);