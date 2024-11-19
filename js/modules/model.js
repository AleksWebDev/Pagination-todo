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

function filterTabs(target){

    let modifiedTasks;

    switch(target){
        case 'all' :
            return tasks;
        case 'active' :
            return modifiedTasks = tasks.filter(item => item.isChecked === false);
        case 'complited' :
            return modifiedTasks = tasks.filter(item => item.isChecked === true);
        default:
            modifiedTasks = tasks;
    }

    return modifiedTasks;
}

function search(target){

    const searchFilteredTasks = tasks.filter(item => item.name.toLowerCase().includes(target.toLowerCase()));

    return searchFilteredTasks;
}

export default {generateData, tasks, findItem, deleteItem, filterCheckbox, filterTabs, search};