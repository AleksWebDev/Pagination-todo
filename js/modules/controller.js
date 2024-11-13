import view  from "./view.js";
import model from './model.js';


view.elements.buttonAdd.addEventListener('click', function(){
    model.generateData(view.elements.input.value);
    view.resetInput();
    view.render(model.tasks);
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

