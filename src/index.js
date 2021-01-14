// ARCHIVO PRINCIPAL DE NUESTRA APLICACION
import './styles.css';
import {TaskClass} from './classes/Task.class.js';
import {ToDoList} from './classes/ToDoList.class.js'
import {addEvents} from "./js/addEvents";

const tasksList = new ToDoList(); // LIST OF TASKS
addEvents(tasksList);






