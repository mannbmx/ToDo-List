import {addProjectToDom} from "./dom";
import {projectSwitch} from './utl';

let projectList = [];
let activeProject;


//Project factory function
const newProject = (name) => {
    return{name};
};


//Function creates new projects
function createProject(){
    //Dom selector for project name value from form goes here
    const projectTitle = document.querySelector('.projectTitle');
    activeProject = projectTitle.value;
    const project = newProject(projectTitle.value);
    projectList.push(project);
    addProjectToDom(project.name);
    projectSwitch(activeProject);
    closeForm();
}


function defaultProject(){
    //Dom selector for project name value from form goes here
    const project = 'All Tasks';
    projectList.push(project);
    addProjectToDom(project);
};

console.log(defaultProject());

function closeForm(){
    document.querySelector('.projectFormCont').style.display = 'none';
}

export{newProject, createProject, projectList, activeProject, defaultProject}