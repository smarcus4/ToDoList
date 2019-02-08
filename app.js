let startButton = document.getElementById("startApp");
let container = document.querySelector(".todo");
let items = document.querySelector(".itemHolder")


startButton.addEventListener("click", function (i) {
    container.removeChild(startButton);
    container.removeChild(container.childNodes[1]);
    let createItem = document.createElement("button");
    let userinput = document.createElement("input");
    userinput.type = "text";
    userinput.classList = "inputClass";
    createItem.classList = "buttonClass";
    createItem.innerHTML = "Add Item";
    userinput.placeholder = "Enter your item here";
    container.appendChild(userinput);
    container.appendChild(createItem);
    addItem(createItem);
    
})

function addItem(button) {
    button.addEventListener("click", function (e) {
        let getItems = document.getElementsByClassName("inputClass")[0].value;
        if (getItems===" "){
            alert("You must enter an item!!!");
        } else {
            createList(getItems);
            document.getElementsByClassName("inputClass")[0].value= " "
        }

    })
}


function createList(addedItem) {
    let listItem = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Item";
    deleteBtn.classList = "deleteClass";
    listItem.classList = "listClass";
    items.appendChild(listItem);
    listItem.innerHTML = addedItem
    listItem.appendChild(deleteBtn);
    markingList(listItem);
    deleteItem(deleteBtn, listItem);
    
}


function markingList(newestItem) {
    newestItem.addEventListener("click", function (e) {
        if (newestItem.classList.contains("removed")) {
            this.classList.remove("removed");
        } else {
            this.classList.add("removed");
        }

    })
}



function deleteItem(deletethis, theItem) {
    
    deletethis.addEventListener("click", function (e) {
        e.currentTarget.parentNode.remove();
    })
}

