// ARCHIVO PRINCIPAL DE NUESTRA APLICACION
import './styles.css';
import {TaskClass} from './classes/Task.class.js';
import {ToDoList} from './classes/ToDoList.class.js'

const tasksList = new ToDoList(); // LIST OF TASKS
const inputTask = document.querySelector(".new-todo");

inputTask.addEventListener("keypress",(e)=>{
    if (e.key=='Enter'){
        if (inputTask.value){
            tasksList.addTask(new TaskClass(inputTask.value));
            inputTask.value="";
        }
    }
})


