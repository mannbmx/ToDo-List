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

export{projectSwitch}