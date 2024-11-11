const elements = {
    input: document.querySelector('.input__task'),
    buttonAdd: document.querySelector('.add__task'),
    taskContainer: document.querySelector('.task__list'),
}

function render(data){
    elements.taskContainer.innerHTML = '';
    data.forEach(task => {
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

export default {elements, resetInput, render};