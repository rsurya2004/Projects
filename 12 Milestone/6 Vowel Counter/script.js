btn.addEventListener("click" , vowelCounter);


function vowelCounter(){

    let name = document.getElementById("name").value.toLowerCase();
    let result = document.getElementById("result");

    const vowels = "aeiou";

    let vowelCount = 0;

    for(let i=0; i<name.length; i++){
        if(vowels.includes(name[i])){       // includes the letters or not, can't check using ===, bez. too many letters in vowelCount
            vowelCount++;
        }
    }

    result.innerText = "Total Vowels :- " + vowelCount;

}






