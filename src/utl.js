import { activeProject } from './buildProject';
import {taskList, newTask} from './buildTask';
import {addTaskToDom} from './dom';



//Function to switch between diffrent projects
function projectSwitch(name){
   
    //Clears the dom
    const taskCont = document.querySelector('.taskCont');
    taskCont.innerHTML = '';

    //Switch activeProject
    if(name != 'All Tasks'){
        activeProject = name;
    }
    


   //Adds tasks with proper projectId to the dom
   if(name === 'All Tasks'){
    for(const task of taskList){
        addTaskToDom(task);
    };
   } else{
        for(const task of taskList){
            if(task.projectId === name){
                addTaskToDom(task);
            }
        }
   }
   
   
}


//Function to delete tasks from arr and dom
function deleteTask(task, child){


    const index = taskList.indexOf(task);
    if(index > -1){
        taskList.splice(index, 1)
    };

    const taskCont = document.querySelector('.taskCont');
    taskCont.removeChild(child);
};


//Function that allows you to edit tasks
function editTask(task, child){


        //Dom selector gets values from for goes here
        const taskTitle = document.querySelector('.editTaskTitle');
        const taskPriority = document.querySelector('#editPriority');
        const taskDueDate = document.querySelector('.editDueDate');
        const taskDescription = document.querySelector('.editDescription');
        const index = taskList.indexOf(task);


        if(task.taskId === index){
            task.title = taskTitle.value;
            task.priority = taskPriority.value;
            task.dueDate = taskDueDate.value;
            task.Description = taskDescription.value;
            
            const taskCont = document.querySelector('.taskCont');
            taskCont.removeChild(child);
        
            // deleteTask(task, child)
        
            // const editedTask = newTask(taskTitle.value, taskPriority.value, taskDueDate.value, taskDescription.value, activeProject);
            // taskList.slice(index, 0, editedTask);
        
            addTaskToDom(task);
        
            console.log(taskList);
            closeEditForm();
        }

        //Changes objects properties
        
}

function closeEditForm(){
    document.querySelector('.editTaskFormCont').style.display = 'none';
}


function openFullTask(task){

    const body = document.querySelector('body');
    const fullTaskCont = document.createElement('div');
    fullTaskCont.classList.add('fullTaskCont');
    body.appendChild(fullTaskCont);

    const fullTaskTitle = document.createElement('h1');
    fullTaskTitle.classList.add('fullTaskTitle');
    fullTaskTitle.textContent = task.title;
    fullTaskCont.appendChild(fullTaskTitle)

    const fullTaskDueDate = document.createElement('h3');
    fullTaskDueDate.classList.add('fullTaskDueDate');
    fullTaskDueDate.textContent = 'Due: ' + task.dueDate;
    fullTaskCont.appendChild(fullTaskDueDate);

    const fullTaskDescription = document.createElement('p');
    fullTaskDescription.classList.add('fullTaskDescription');
    fullTaskDescription.textContent = task.Description;
    fullTaskCont.appendChild(fullTaskDescription);

}


export{projectSwitch, deleteTask, editTask, openFullTask}