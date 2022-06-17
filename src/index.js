import {newProject, createProject, projectList, defaultProject} from "./buildProject";
import {createTask, taskList} from "./buildTask";





console.log(projectList)


const newTaskButton = document.querySelector('.taskButton');
newTaskButton.addEventListener('click', function(){createTask()});

const newProjectButton = document.querySelector('.projectButton');
newProjectButton.addEventListener('click', function(){createProject()})







function openForm(){
    document.querySelector('.taskFormCont').style.display = 'grid'
}

function openFormTwo(){
    document.querySelector('.projectFormCont').style.display = 'grid'
}

const openFormButton = document.querySelector('.newTodoButton');
openFormButton.addEventListener('click', function(){openForm()})

const openButtonProject = document.querySelector('.newProjectButton');
openButtonProject.addEventListener('click', function(){openFormTwo()});

