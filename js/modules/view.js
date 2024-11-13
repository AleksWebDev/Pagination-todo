const elements = {
    input: document.querySelector('.input__task'),
    buttonAdd: document.querySelector('.add__task'),
    taskContainer: document.querySelector('.task__list'),
    pagination: document.querySelector('.pagination__bullets'),
}

let taskCount = 7;
let currentPage = 1;


function render(data, page = null){
    elements.taskContainer.innerHTML = '';

    if(page !== null){
        currentPage = page;
    }

    let startIndex = taskCount * currentPage - taskCount;
    let lastIndex = startIndex + taskCount;
    let taskToRender = data.slice(startIndex, lastIndex);

    console.log(taskToRender);

    taskToRender.forEach(task => {
        elements.taskContainer.innerHTML += fillHTML(task);
    });

}

function fillHTML(task){
    return `
        <li class="task__item" data-id="${task.id}">
                        <span class="task-id">${task.id}</span>
                        <span class="task__name">${task.name}</span>
                        <button type="button" class="delete">Trash</button>
                        <input type="checkbox" class="checkbox" name="isChecked" id="checkbox">
        </li>
    `
}

function resetInput(){
    elements.input.value = '';
} 

function renderPagination(tasks){

    elements.pagination.innerHTML += '';

    const pageCount = Math.ceil(tasks.length / taskCount);
    
    console.log(pageCount);

    for(let i = 1; i < pageCount; i++){
        elements.pagination.innerHTML += renderBtn(i);
    }
}

function renderBtn(count){
    return `
        <li class="bullet">${count}</li>
    `
}

function updatePagination(data, target){

    currentPage = parseInt(target.textContent);
    render(data, currentPage);

}



export default {elements, resetInput, render, renderPagination, updatePagination};