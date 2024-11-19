const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function generateData(value){


    let id = 1;


    if(tasks.length > 0){
        let lastItem = tasks[tasks.length - 1].id + 1;
        id = lastItem;
    }

    const task = {
        id: id,
        name: value,
        isChecked: false,
    }


    tasks.push(task);
    saveToLs();
    
}

function findItem(target){
    return tasks.findIndex(item => item.id === target);
}
 
function deleteItem(target){
    tasks.splice(target, 1);
    saveToLs();

    return tasks;
}

function filterCheckbox(id){
    const targetId = tasks.findIndex(item => {
        if(item.id === id){
            return true;
        }
    })


    tasks[targetId].isChecked = !tasks[targetId].isChecked;

    saveToLs();
    return tasks;
}

function saveToLs(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default {generateData, tasks, findItem, deleteItem, filterCheckbox};