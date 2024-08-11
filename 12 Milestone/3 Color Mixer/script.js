mix.addEventListener("click" , mixer);


function mixer(){

    let color1 = document.getElementById("color1").value.toLowerCase();
    let color2 = document.getElementById("color2").value.toLowerCase();

    let resultBox = document.getElementById("result");
    let result;


    switch(true){   // Both colors given.

        case(color1 === "red"  && color2 === "blue") || (color1 === "blue"  && color2 === "red"):
            result = "purple";
            break;

        case(color1 === "red"  && color2 === "yellow") || (color1 === "yellow"  && color2 === "red"):
            result = "orange";
            break;

        case(color1 === "yellow"  && color2 === "blue") || (color1 === "blue"  && color2 === "yellow"):
            result = "green";
            break;

        default:
            result = "Invalid Color Combination";
            break;
    }

    resultBox.innerText = "Mixed Color :- " + result;


}



