import view  from "./view.js";
import model from './model.js';


view.elements.buttonAdd.addEventListener('click', function(){
    model.generateData(view.elements.input.value);
    view.resetInput();
    view.render(model.tasks);
})


window.addEventListener('DOMContentLoaded', function(){
    view.render(model.tasks);
})