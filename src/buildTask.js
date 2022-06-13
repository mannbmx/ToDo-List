export const buildTask = (name, priority, description, due, projectId) => {
  return{name, priority, description, due, projectId}
}


import { buildTask } from "./buildTask";
import {buildProject} from "./buildProject";

const projectsArr = [];



//Adds new projects to the dom
function addProjectToDom(name){
    const projectList = document.querySelector('.projectsList');
    const newListItem = document.createElement('li');
    newListItem.classList.add('projectListItem');
    newListItem.textContent = name;
    projectList.appendChild(newListItem);
}




const newTask = buildTask("take out trash", 'high', 'Put trashcan outside', "April 15", "1");

console.log(newTask.name)

const newProject = buildProject(zephin);
addProjectToDom(zephin.name);
