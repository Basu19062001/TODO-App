let todoLists = ['Buy Milk','Go to college'];
displayItems();

function addTODO(){
    let inputElement = document.querySelector('#todo-input');
    let todoItem = inputElement.value; 
    todoLists.push(todoItem);
    inputElement.value = '';
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for(let i=0; i<todoLists.length; i++){
        newHtml += `
        <div>
        <span>${todoLists[i]}</span>
        <button onClick="todoLists.splice(${i}, 1);
        displayItems();">Delete</button>
        </div>
        `;
    }
    containerElement.innerHTML = newHtml;
    
    
}

