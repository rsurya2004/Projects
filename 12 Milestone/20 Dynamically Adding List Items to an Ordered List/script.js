// Pre-existing Array of Items
const items = ["HTML", "CSS", "JS", "MongoDB", "React", "Tailwind"];

// Current Index
let i = 0;

button.addEventListener("click", addItems);


function addItems(){

    if(i < items.length){
        
        const itemList = document.getElementById("itemList");

        // Creating new list
        const list = document.createElement("li");
        list.textContent = items[i];

        itemList.appendChild(list); // Storing to main list
         
        i++;
    }

    else{
        document.getElementById("message").innerText = "All Items have been added.";

        // Disabling Button after use
        button.disabled = true;
    }

}


