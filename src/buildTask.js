


let taskList = [];

//Factory function for tasks
const newTask = (title, priority, dueDate, Description, projectId) => {

    return{title, priority, dueDate, Description, projectId};
}


//Function creates new task
function createTask(){
    //Dom selector gets values from for goes here

    const task = newTask();
    taskList.push(task);
}