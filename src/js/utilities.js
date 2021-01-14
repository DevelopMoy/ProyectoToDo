/* MODULO DE NUESTRA APLICACION */
import {TaskClass} from '../classes/Task.class.js';
const listArea = document.querySelector('.todo-list');

export const addTaskToDocument = (task)=>{
    const mainDiv = document.createElement("div");
    mainDiv.innerHTML=`
        <li class="view" data-id="${task.id}">
            <div class="view">
                <input class="toggle" type="checkbox">
                <label>${task.task}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;

    listArea.append(mainDiv);
}