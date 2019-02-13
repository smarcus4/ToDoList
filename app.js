let startButton = document.getElementById("startApp");
let container = document.querySelector(".todo");
let items = document.querySelector(".itemHolder");
let output = document.querySelector("#output");
output.style.visibility = "hidden";

items.addEventListener("click", function (e) {
    if (e.target.classList.contains("listClass")) {
        if (!(e.target.classList.contains("removed"))) {
            e.target.classList.add("removed");
        } else {
            e.target.classList.remove("removed");
        }
        console.log(e.target);
    } else if (e.target.classList.contains("deleteClass")) {
        e.target.parentNode.remove();
        
    }
    storeItems();
})


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
    displayValues();
    
})

function addItem(button) {
    button.addEventListener("click", function (e) {
        let getItems = document.getElementsByClassName("inputClass")[0].value;
        console.log(getItems);
        if (getItems.length<=0 || getItems==null || getItems=="          "){
            output.style.visibility = "visible";
            e.preventDefault;
        } else {
            createList(getItems);
            document.getElementsByClassName("inputClass")[0].value = ""
            output.style.visibility = "hidden";

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
    //markingList(listItem);
    //deleteItem(deleteBtn, listItem);
    storeItems();
}


//function markingList(newestItem) {
//    newestItem.addEventListener("click", function (e) {
//        if (newestItem.classList.contains("removed")) {
//            this.classList.remove("removed");
//        } else {
//            this.classList.add("removed");
//        }
//        storeItems()

//    })
//}



//function deleteItem(deletethis, theItem) {
    
//    deletethis.addEventListener("click", function (e) {
//        e.currentTarget.parentNode.remove();

//        storeItems();
//    },false)
//}



function storeItems() {

    window.localStorage.myitems = items.innerHTML;

}

function displayValues() {
    let storedVals = window.localStorage.myitems;

    if (!storedVals) {
        return false;
    } else {
        items.innerHTML = storedVals;
    }

}


displayValues();

