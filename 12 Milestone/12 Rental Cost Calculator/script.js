// Car Rental Company


function cost(perDay , carType){

    let totalCost = 0;
    
    carType = carType.toLowerCase();

    if(carType === "economy"){
        totalCost = 4000 * perDay;
    }
    else if(carType === "midsize"){
        totalCost = 10000 * perDay;
    }
    else if(carType === "luxury"){
        totalCost = 20000 * perDay;
    }
    else{
        console.log("Invalid Car Type");
        return;
    }

    return totalCost;

}


let numberOfDays = 20;
let car = "Luxury";

let amount = cost(numberOfDays, car);
console.log("Amount to be Paid :- " + amount);

