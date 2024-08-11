button.addEventListener("click", addItems);


function addItems(){

    let items = document.querySelector("#items").value.trim();  // Trim whitespaces
    let todo = document.querySelector("#todo")

    if(items !== ""){
        
        let list = document.createElement("li");
        list.textContent = items;

        todo.appendChild(list);
        items.value = " ";
    }

    else{
        alert("First Enter a To-Do Item")
    }
    
}


