// Capitalize First Letter (using Ternary Opertor)

btn.addEventListener("click", capitalized);


function capitalized(){

    let userName = document.getElementById("userName").value;

    let capitalizedName = document.getElementById("capitalizedName");

    // Charater present at 0
    let result = (userName.charAt(0) === userName.charAt(0).toLowerCase())  ? (userName.charAt(0).toUpperCase()) + userName.slice(1, ) :(userName)  // slice(2nd letter to end)

    capitalizedName.innerText = "Capitalized Name :- " + result;

}


