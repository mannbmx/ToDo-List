import {addProjectToDom} from "./dom";


let projectList = [];


//Project factory function
const newProject = (name) => {
    return{name};
};


//Function creates new projects
function createProject(){
    //Dom selector for project name value from form goes here
    const projectTitle = document.querySelector('.projectTitle')

    const project = newProject(projectTitle.value)
    projectList.push(project);
    addProjectToDom(project.name)
    closeForm()
}

function closeForm(){
    document.querySelector('.projectFormCont').style.display = 'none';
}

export{newProject, createProject, projectList}