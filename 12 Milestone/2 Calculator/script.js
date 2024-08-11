btn.addEventListener("click", operation);


function operation() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let resultBox = document.getElementById("result");
    var result;

    switch(operator){

        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;

        case "/":
            if(num2 == 0){
                result = "Division by 0 is not allowed";
            }
            else{
                result = num1 / num2;
            }
            break;

        default:
            alert("Error! Use allowed operators (+, -, *, /)");

    }

    resultBox.innerText = "Result :-  " + result;

}


