// Catching Buttons
const decre = document.getElementById("decrement");
console.log(decre);

const incre = document.getElementById("increment");
console.log(incre);

const resetValue = document.getElementById("resetValue");
console.log(resetValue);

const value = document.getElementById("value");
console.log(parseInt(value.innerText));     // To get number, instead of string


// Decrement Btn Function
function decrementBy1(){
    const result = parseInt(value.innerText);
    if(result > 0){
        value.innerText = result-1;
    }
    else{
        alert("Negative Value not allowed")   // alert = used to alert the user
    }
}
decre.addEventListener("click", decrementBy1);


// Increment Btn Function
function incrementBy1(){
    const result = Number(value.innerText);   // To get number, instead of String
    if(result >= 10){
        alert("Value more than 10 not allowed");
    }
    else{
        value.innerText = result+1 ;
    }
}
incre.addEventListener("click", incrementBy1);



// ResetValue Btn Function  (using Arrow Function)
resetValue.addEventListener("click", () => {
    const result = parseInt(value.innerText);
    if(result == 0){
        alert("Already Reset")
    }
    else{
        value.innerText = 0;
    }
})



