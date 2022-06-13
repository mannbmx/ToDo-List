import {addProjectToDom} from "./dom";


let projectList = [];


//Project factory function
const newProject = (name) => {
    return{name};
};


//Function creates new projects
function createProject(test){
    //Dom selector for project name value from form goes here

    const project = newProject(test)
    projectList.push(project);
    addProjectToDom(project.name)
}

export{newProject, createProject, projectList}