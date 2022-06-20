import {addTaskToDom} from './dom';
import {activeProject} from './buildProject';


let taskList = [];
let i = 0;

//Factory function for tasks
const newTask = (title, priority, dueDate, Description, projectId, taskId) => {

    return{title, priority, dueDate, Description, projectId, taskId};
}




//Function creates new task
function createTask(){
    //Dom selector gets values from for goes here
    const taskTitle = document.querySelector('.taskTitle');
    const taskPriority = document.querySelector('#priority');
    const taskDueDate = document.querySelector('.dueDate');
    const taskDescription = document.querySelector('.description');

    let taskId = i;


    const task = newTask(taskTitle.value, taskPriority.value, taskDueDate.value, taskDescription.value, activeProject, taskId);
    taskList.push(task);

    addTaskToDom(task);

    console.log(taskList);
    closeForm();
}

function closeForm(){
    document.querySelector('.taskFormCont').style.display = 'none';
}

export{createTask, taskList, newTask}