const elements = {
    input: document.querySelector('.input__task'),
    buttonAdd: document.querySelector('.add__task'),
    taskContainer: document.querySelector('.task__list'),
    pagination: document.querySelector('.pagination__bullets'),
}

console.log(elements.taskItem);

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

    const pageCount = Math.ceil(tasks.length / taskCount);
    const ceil = tasks.length / taskCount;

    for(let i = 1; i < pageCount; i++){
        if(ceil !== pageCount){
            let li = renderBtn(i);
            elements.pagination.append(li);
        }
    }

}

function renderBtn(count){
    const li = document.createElement('li');
    li.className = 'bullet';
    li.textContent = count;
    return li;
}

function updatePagination(data, target){

    currentPage = parseInt(target.textContent);
    render(data, currentPage);

}



export default {elements, resetInput, render, renderPagination, updatePagination};