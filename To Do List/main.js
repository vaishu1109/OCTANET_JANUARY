const A =document.getElementById('task-area');
const B =document.getElementById('single-task');
const C =document.getElementById('tasks');

function addTask(event){
    event.preventDefault();
    if(B.value=='') return;
    const task=createTask(B.value);
    C.appendChild(task);
    B.value = '';
}
function createTask(taskName){
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML =`
        <input type="checkbox">
        <label>${taskName}</label>
        <span class ="delete">&times;</span>
    `;

    const deleteButtom= task.querySelector('.delete');
    deleteButtom.addEventListener('click',deleteTask);
    return task;
}
function deleteTask(event){
    event.target.parentElement.remove();
}
A.addEventListener('submit',addTask);