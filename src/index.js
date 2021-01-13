// ARCHIVO PRINCIPAL DE NUESTRA APLICACION
import './styles.css';
import {TaskClass} from './classes/Task.class.js';
import {ToDoList} from './classes/ToDoList.class.js'

const tasksList = new ToDoList();
const t1=new TaskClass("ir al baño");
const t2=new TaskClass("ir a la tienda");
const t3=new TaskClass("ir al super");

tasksList.addTask(t1);
tasksList.addTask(t2);
tasksList.addTask(t3);
tasksList.markAsComplete(t1.id);
tasksList.markAsComplete(t2.id);
tasksList.markAsComplete(t3.id);

console.log(tasksList);

tasksList.eraseCompleted();

console.log(tasksList);

