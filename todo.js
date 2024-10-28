let todoLists = [
    {
        item: 'Buy Milk', 
        dueDate: '28/10/2024',
    },
    {
        item: 'Go to college',
        dueDate: '28/10/2024',
    },
    ];
displayItems();

function addTODO(){
    let inputElement = document.querySelector('#todo-input');
    let todoItem = inputElement.value; 
    
    let dateElement = document.querySelector('#todo-date');
    let todoDate = dateElement.value;

    todoLists.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for(let i=0; i<todoLists.length; i++){
        // let item = todoLists[i].item;
        // let dueDate = todoLists[i].dueDate; / instead we can use
        let {item,dueDate} = todoLists[i];
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onClick="todoLists.splice(${i}, 1);
        displayItems();">Delete</button>
        
        `;
    }
    containerElement.innerHTML = newHtml;
    
    
}

