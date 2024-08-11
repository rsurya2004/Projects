let cart = ["Apple", "Banana", "Bat", "Ball", "Apple", "Bat", "Juice"];   // Cart

function removeDuplicates(){

    // Set = used to automatically remove duplicates, as Sets do not allow duplicate values
    let uniqueItems = new Set(cart);

    // Converting the Set back into an array
    return Array.from(uniqueItems);
}

let newCart = removeDuplicates(cart);


console.log("New Cart :- ", newCart );


