import view  from "./view.js";
import model from './model.js';


view.elements.buttonAdd.addEventListener('click', function(){
    model.generateData(view.elements.input.value);
    view.resetInput();
    view.render(model.tasks);
    view.elements.pagination.innerHTML = '';
    view.renderPagination(model.tasks);
})

window.addEventListener('DOMContentLoaded', function(){
    view.render(model.tasks);
    view.renderPagination(model.tasks);
})

view.elements.pagination.addEventListener('click', function(e){
    if(e.target.classList.contains('bullet')){
        view.updatePagination(model.tasks, e.target);
    }
})

view.elements.taskContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('delete')){
        const target = parseInt(e.target.parentNode.dataset.id);
        const targetToDelete = model.findItem(target);
        const updatedTasksList = model.deleteItem(targetToDelete);
        view.render(updatedTasksList);
        view.elements.pagination.innerHTML = '';
        view.renderPagination(model.tasks);
    }

    if(e.target.classList.contains('checkbox')){
        const id = parseInt(e.target.parentNode.dataset.id);
        const parentElem = e.target.parentNode;
        const checkedTasks = model.filterCheckbox(id, parentElem);
        view.render(checkedTasks);
    }
})

view.elements.tabs.addEventListener('click', function(e){
    if(e.target.classList.contains('tabs__item')){
        const tabsFilter = e.target.dataset.value;
        const filteredTasks = model.filterTabs(tabsFilter);
        view.render(filteredTasks);
        view.elements.pagination.innerHTML = '';
        view.renderPagination(filteredTasks);
    }
})

view.elements.search.addEventListener('input', function(e){
    const target = e.target.value;
    const searchedTasks = model.search(target);
    view.render(searchedTasks);
    view.elements.pagination.innerHTML = '';
    view.renderPagination(filteredTasks);
})

