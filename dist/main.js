(()=>{"use strict";let e=[];function t(t){document.querySelector(".taskCont").innerHTML="",n=t;for(const n of e)n.projectId===t&&o(n)}function o(e){const t=document.querySelector(".taskCont"),o=document.createElement("div");o.classList.add("task"),t.appendChild(o);const n=document.createElement("div");"high"===e.priority?n.classList.add("highPriority"):"medium"===e.priority?n.classList.add("mediumPriority"):n.classList.add("lowPriority"),o.appendChild(n);const c=document.createElement("h4");c.textContent=e.title,o.appendChild(c);const r=document.createElement("h5");r.textContent=e.dueDate,o.appendChild(r)}let n,c=[];console.log(c),document.querySelector(".taskButton").addEventListener("click",(function(){!function(){const t=document.querySelector(".taskTitle"),c=document.querySelector("#priority"),r=document.querySelector(".dueDate"),i=document.querySelector(".description"),d={title:t.value,priority:c.value,dueDate:r.value,Description:i.value,projectId:n};e.push(d),o(d),console.log(e),document.querySelector(".taskFormCont").style.display="none"}()})),document.querySelector(".projectButton").addEventListener("click",(function(){!function(){const e=document.querySelector(".projectTitle");n=e.value;const o={name:e.value};c.push(o),function(e){const o=document.querySelector(".projectsList"),n=document.createElement("li");n.classList.add("projectListItem"),n.textContent=e,o.appendChild(n),n.addEventListener("click",(function(){t(e)}))}(o.name),t(n),document.querySelector(".projectFormCont").style.display="none"}()})),document.querySelector(".newTodoButton").addEventListener("click",(function(){document.querySelector(".taskFormCont").style.display="grid"})),document.querySelector(".newProjectButton").addEventListener("click",(function(){document.querySelector(".projectFormCont").style.display="grid"}))})();