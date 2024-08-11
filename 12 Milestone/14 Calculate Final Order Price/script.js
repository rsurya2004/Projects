let costOfEachUnit = [20, 35, 25, 50, 40];
let quantityOfEachUnit = [5, 6, 2, 5, 4];


let totalCost = (cost, quantity) => {

    let totalCost = 0;

    for(let i=0; i<cost.length; i++){
        totalCost += cost[i] * quantity[i];
    }

    console.log("Total Cost :- " + totalCost);
}

totalCost(costOfEachUnit, quantityOfEachUnit);
