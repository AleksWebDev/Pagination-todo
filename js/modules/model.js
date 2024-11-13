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


function saveToLs(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


export default {generateData, tasks};