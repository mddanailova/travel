//www.w3schools.com/howto/howto_js_todolist.asp -->

// Gives permission to the container which contains to-do-list items //
const toDoItems = document.getElementsByClassName
("to-do-items")[0];

// Gives acces to the input box and deleteIcon //
const input = document.getElementById("input");
const deleteIcon = document.getElementById("delete");

// Adding EventListener to input box so the user can press the 'enter-key' and add item //

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
     addItem();
})

// Making function and creating item-class //
// divParrent = the whole item box //
// divChild =  the icons within the box//

function addItem(){
    var divParrent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var deleteIcon = document.createElement("i");

    divParrent.className = "item";
    divParrent.innerHTML = '<div>' +input.value+ '</div>';

// Creating the two icons in the div //

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "#AAB9BF";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "limegreen";
    })

// Placing icon within div //

    divChild.appendChild(checkIcon);

    deleteIcon.className = "fas fa-trash";
    deleteIcon.style.color = "#AAB9BF";
    deleteIcon.addEventListener("click", function(){
        divParrent.remove();
    })

// Placing icon within div //

    divChild.appendChild(deleteIcon);

    divParrent.appendChild(divChild);

// Placing divParrent inside the container //

    toDoItems.appendChild(divParrent);

// Clear the input field //

    input.value = '';

}