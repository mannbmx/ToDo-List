import {projectSwitch} from './utl';

//Function adds new projects to dom
function addProjectToDom(name){
    const projectList = document.querySelector('.projectsList');
    const newListItem = document.createElement('li');
    newListItem.classList.add('projectListItem');
    newListItem.textContent = name;
    projectList.appendChild(newListItem);

    //Adds event listener
    newListItem.addEventListener('click', function(){projectSwitch(name)})
}

//Funtion adds task to dom
function addTaskToDom(task){
    const taskCont = document.querySelector('.taskCont')

     //Create div for task
    const newTaskDiv = document.createElement('div');
    newTaskDiv.classList.add('task');
    taskCont.appendChild(newTaskDiv);

    //Adds priority color
    const newPriorityDiv = document.createElement('div');
    if(task.priority === 'high'){
        newPriorityDiv.classList.add('highPriority');
    }else if(task.priority === 'medium'){
        newPriorityDiv.classList.add('mediumPriority');
    }else{
        newPriorityDiv.classList.add('lowPriority');
    };
    newTaskDiv.appendChild(newPriorityDiv);

    //Adds Title
    const newTaskTitle = document.createElement('h4');
    newTaskTitle.textContent = task.title;
    newTaskDiv.appendChild(newTaskTitle);

    //Adds Date
    const newTaskDate = document.createElement('h5');
    newTaskDate.textContent = task.dueDate;
    newTaskDiv.appendChild(newTaskDate);

    
}   
   

    




export{addProjectToDom, addTaskToDom}