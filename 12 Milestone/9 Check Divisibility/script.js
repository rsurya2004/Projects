// Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2. Use a for loop and continue statement.


let numbersArray = [23, 21, 6, 18, 33, 31];


function checkDivisibility(arr){


    for(let i=0; i<arr.length; i++){

        let check = arr[i];

        if(check % 2 === 0 ){     //  % = Remainder
            continue;   // to next statement
        }

        else if(check % 3 === 0){
            console.log(check);
        }

        else{
            continue;
        }
    }
    
}


checkDivisibility(numbersArray);
