//Add Task in To-Do list
let addBtn = document.getElementById('add-task')
addBtn.addEventListener('click', addNew)
let parentList = document.getElementById('parentList');
function addNew(e){
    if(parentList.children[0].className == "noTask"){
        parentList.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling
    let taskName = currentInput.value
    // Create new li i.e new task
    let newLi = document.createElement('li')
    newLi.classList.add('list-group-item')
    newLi.innerHTML = `<span>${taskName}</span> 
    <button onclick="editTask(this)">Edit</button>
    <button onclick="removeTask(this)">Delete</button>`
    
    parentList.appendChild(newLi)
    // location.reload()
    currentInput.value="";      /* its is used to clear input after add button */
    
}

// Delete Task from List
function removeTask(currElement){
    console.log(currElement.parentElement.remove())
    if(parentList.children.length <= 0){
        let emptyMsg = document.createElement("span")
        emptyMsg.classList.add("noTask")
        emptyMsg.textContent = "Nothing is here...Please add Task!!"
        parentList.appendChild(emptyMsg)
    }
}

// Edit Task
function editTask(currElement){
    if(currElement.textContent == "Save"){
        // For save edited task
        currElement.textContent = "Edit"
        let currTaskName = currElement.previousElementSibling.value
        let currHeading = document.createElement('span');
        currHeading.textContent = currTaskName
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)
    }else{
    currElement.textContent = "Save"
    let currTaskName = currElement.previousElementSibling.textContent
    let currInput = document.createElement('input');
    currInput.type = "text"
    currInput.placeholder = "To-Do Task"
    currInput.className = "form-control"
    currInput.value = currTaskName

    currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }
}
