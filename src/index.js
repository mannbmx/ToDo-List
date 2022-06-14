import {newProject, createProject, projectList} from "./buildProject";
import {createTask, taskList} from "./buildTask";



let temp = createProject('z')
console.log(projectList)


const newTaskButton = document.querySelector('.taskButton');
newTaskButton.addEventListener('click', function(){createTask()});



function openForm(){
    document.querySelector('.taskFormCont').style.display = 'grid'
}

const openFormButton = document.querySelector('.newTodoButton');
openFormButton.addEventListener('click', function(){openForm()})

