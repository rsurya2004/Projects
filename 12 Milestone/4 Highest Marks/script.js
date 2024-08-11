// Highest Marks (using Ternary Operator)

const marks = [45, 56, 33, 95, 78];

let highestMarks = marks[0];

for(let i=0; i < marks.length; i++){
    highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
}

console.log("Highest Marks :- " + highestMarks);
