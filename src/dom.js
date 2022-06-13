//Function adds new projects to dom
function addProjectToDom(name){
    const projectList = document.querySelector('.projectsList');
    const newListItem = document.createElement('li');
    newListItem.classList.add('projectListItem');
    newListItem.textContent = name;
    projectList.appendChild(newListItem);
}

export{addProjectToDom}