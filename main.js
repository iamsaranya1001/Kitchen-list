let kitchenInput = document.getElementById("kitchen-input")
let addBtn = document.getElementById("add-btn")
let kitchenItemsList = document.getElementById("kitchen-items-list")
//step2
let kitchenItems = [];
//Add kitchen items
function addKitchenItems(){
    let kitchenInputData = kitchenInput.value;
    //creat Dom elements now
    let li = document.createElement('li')

    let spanE1 = document.createElement('span')
    li.appendChild(spanE1)
    spanE1.innerText = kitchenInputData;

    li.innerText = kitchenInputData;
    kitchenItemsList.appendChild(li)
    kitchenInput.value = ''
    kitchenInput.focus();
    kitchenItems.push(kitchenInputData);
    console.log(kitchenItems);
    //creat Trash button

    let trashBtn = document.createElement("i");
    trashBtn.classList.add("fas","fa-trash");
    li.appendChild(trashBtn);

    //creat edit button

    let editBtn = document.createElement("i");
    editBtn.classList.add("fas","fa-edit");
    li.appendChild(editBtn);
}


//Delete item from the kitchen list
function deleteKtchenItems(event){
   
    if(event.target.classList[1] === "fa-trash"){
        let item = event.target.parentElement;
        item.classList.add("slideOut");
        item.addEventListener("transitionend",function(){
        console.log("Animation has been completed");
        item.remove();
    });
     
    }
}

//Edit kitchen items
function editKitchenItems(event){
    if(event.target.classList[1] === "fa-edit"){
        let editedValue = prompt("Please add new text");
        let item = event.target.parentElement;
        let spanE1 = item.querySelector("span");
        spanE1.innerText=editedValue;
    }
}
//step 1
//add an event listner to the button
addBtn.addEventListener('click',addKitchenItems)
kitchenItemsList.addEventListener("click", deleteKtchenItems);
kitchenItemsList.addEventListener("click", editKitchenItems);


















