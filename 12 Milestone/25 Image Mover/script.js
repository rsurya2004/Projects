let image = document.getElementById("image");

// Set initial position variables
let posX = 50; // X-axis position
let posY = 50; // Y-axis position


document.addEventListener("keydown", moveImage);

function moveImage(event){

    switch(event.keyCode){

        case 37: // Left arrow key
            posX -= 30;
            break;

        case 38: // Up arrow key
            posY -= 30;
            break;

        case 39: // Right arrow key
            posX += 30;
            break;

        case 40: // Down arrow key
            posY += 30;
            break;
    }

    // Update the image position
    image.style.left = posX + "px";
    image.style.top = posY + "px";

}

