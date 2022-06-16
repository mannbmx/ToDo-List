import { activeProject } from './buildProject';
import {taskList} from './buildTask';
import {addTaskToDom} from './dom';

function projectSwitch(name){
   
    //Clears the dom
    const taskCont = document.querySelector('.taskCont');
    taskCont.innerHTML = '';

    //Switch activeProject
    activeProject = name;


   //Adds tasks with proper projectId to the dom
    for(const task of taskList){
        if(task.projectId === name){
            addTaskToDom(task);
        }
    }
}


//Function to delete tasks from arr and dom
function deleteTask(task, child){


    const index = taskList.indexOf(task);
    if(index > -1){
        taskList.splice(index, 1)
    };

    const taskCont = document.querySelector('.taskCont');
    taskCont.removeChild(child);
};

export{projectSwitch, deleteTask}