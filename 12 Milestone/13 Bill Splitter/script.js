let costOfEachDish = [400, 500, 620, 765, 325, 450, 670];
let totalNumberOfPeople = 5;


function costSplit(cost, people){

    let totalCost = 0;
    let splitCost = 0;

    // Total Cost
    for(let i=0; i<cost.length; i++){
        totalCost += cost[i];
    }
    console.log("Total Cost :- " + totalCost);

    splitCost = totalCost / people;
    console.log("Each Person has to pay :- " + splitCost);

}

costSplit(costOfEachDish, totalNumberOfPeople);


