import {addProjectToDom} from "./dom";

//Project factory function
let projectList = [];

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