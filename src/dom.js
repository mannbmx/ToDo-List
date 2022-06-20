import {projectSwitch, deleteTask, editTask, openFullTask} from './utl';

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


    newTaskDiv.addEventListener('click', function(){openFullTask(task)})

    //Divs for flex box
    const taskDiv1 = document.createElement('div');
    taskDiv1.classList.add('taskDiv1');
    newTaskDiv.appendChild(taskDiv1);
    const taskDiv2 = document.createElement('div');
    newTaskDiv.appendChild(taskDiv2);

    //Adds priority color
    const newPriorityDiv = document.createElement('div');
    if(task.priority === 'high'){
        newPriorityDiv.classList.add('highPriority');
    }else if(task.priority === 'medium'){
        newPriorityDiv.classList.add('mediumPriority');
    }else{
        newPriorityDiv.classList.add('lowPriority');
    };
    taskDiv1.appendChild(newPriorityDiv);

    //Adds Title
    const newTaskTitle = document.createElement('h4');
    newTaskTitle.textContent = task.title;
    taskDiv1.appendChild(newTaskTitle);

    //Adds Date
    const newTaskDate = document.createElement('h5');
    newTaskDate.textContent = task.dueDate;
    taskDiv1.appendChild(newTaskDate);

    // Adds btns
    const newTaskTrash = document.createElement('button');
    newTaskTrash.classList.add('iconBtn');
    taskDiv2.appendChild(newTaskTrash);
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash-can', 'fa-xl');
    newTaskTrash.appendChild(trashIcon);

    // Trash event listener
    newTaskTrash.addEventListener('click', function(){deleteTask(task, newTaskDiv)})



    const newTaskEdit = document.createElement('button');
    newTaskEdit.classList.add('iconBtn');
    taskDiv2.appendChild(newTaskEdit);
    const editIcon = document.createElement('i');
    editIcon.classList.add("fa-solid", "fa-ellipsis-vertical", 'fa-xl');
    newTaskEdit.appendChild(editIcon);

    // Edit event listener
    newTaskEdit.addEventListener('click', function(){
        document.querySelector('.editTaskFormCont').style.display = 'grid';
    });

    const editTaskBtn = document.querySelector('.editTaskButton');
    editTaskBtn.addEventListener('click', function(){editTask(task, newTaskDiv)})

    
}   
   

    




export{addProjectToDom, addTaskToDom}