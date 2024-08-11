form.addEventListener("submit", validateForm);

function validateForm(event){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let text = document.getElementById("text");


    // Preventing Submit of Form, before checking
    event.preventDefault();


    // Conditions
    if(email.includes("@") && password.length >= 8){
        text.innerText = "Valid Email and Password !";
        text.style.color = "green";
    }
    else{
        text.innerText = "Invalid Email or Password !";
        text.style.color = "red";
    }

}


