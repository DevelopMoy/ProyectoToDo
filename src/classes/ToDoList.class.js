import {addTaskToDocument} from '../js/utilities.js'
import {addTaskListToHTML} from "../js/utilities";
import {TaskClass} from "./Task.class";

export class ToDoList {

    constructor() {
        this.loadTasks();
    }

    saveTasksToLocalSt (){
        localStorage.setItem("taskData",JSON.stringify(this.tasks));
    }

    loadTasks (){
        const taskData = localStorage.getItem("taskData")
        if (taskData){
            const auxArray=JSON.parse(taskData);
            this.tasks=auxArray.map(task => {
                return new TaskClass(task.task,{
                    state: task.state,
                    id: task.id,
                    date: task.date,
                })
            });
        }else{
            this.tasks=[];
        }
    }

    addAllTasksToHTML (){
        addTaskListToHTML(this.tasks);
    }

    addMarkCompleteEvent (task){
        // ADDING EVENT TO MARK TASK AS COMPLETED
        const taskCheckBox = document.querySelector(`#ch${task.id}`);
        const liItem =document.querySelector(`#c${task.id}`);

        taskCheckBox.addEventListener("click",()=>{
            if (taskCheckBox.checked){
                this.markAsComplete(task.id);
                liItem.className="completed";
            }else{
                this.markAsPending(task.id);
                liItem.className="view";
            }
            console.log(this);
        });
    }

    addEraseTaskEvent(task){
        //ADDING EVENT TO ERASE TASK
        const taskDestroyBtn = document.querySelector(`#dt${task.id}`);
        taskDestroyBtn.addEventListener("click",()=>{
            if (task.state===1){
                ToDoList.eraseTaskFromHTML(task);
            }else{
                this.eraseTask(task.id);
                ToDoList.eraseTaskFromHTML(task);
            }
        });
    }

    initEvents (){
        this.tasks.forEach(task => {
            this.addMarkCompleteEvent(task);
            this.addEraseTaskEvent(task);
        } );
    }

    addTask(task){
        this.tasks.unshift(task); // INSERT IN THE BEGGINING OF THE ARRAY
        addTaskToDocument(task);
        this.addMarkCompleteEvent(task);//
        this.addEraseTaskEvent(task);//
        this.saveTasksToLocalSt();
    }

    static eraseTaskFromHTML (task){
        const liItem =document.querySelector(`#c${task.id}`);
        const itemListHTML =document.querySelector(".todo-list");

        itemListHTML.removeChild(liItem.parentElement);
    }

    markAsComplete (taskId){
        for (let x of this.tasks){
            if (x.id===taskId){
                x.state=1;

                break;
            }
        }
        this.saveTasksToLocalSt();
    }

    markAsPending (taskId){
        for (let x of this.tasks){
            if (x.id===taskId){
                x.state=0;
                break;
            }
        }
        this.saveTasksToLocalSt();
    }

    eraseCompleted (){
        for (let i=0;i<this.tasks.length;i++){
            if (this.tasks[i].state===1&&this.existsOnHTML(this.tasks[i].id)){
                ToDoList.eraseTaskFromHTML(this.tasks[i]);
            }
        }
        this.saveTasksToLocalSt();
    }

    existsOnHTML (taskID){
        return !!document.querySelector(`#c${taskID}`);
    }

    eraseTask (taskId){
        this.tasks=this.tasks.filter (task => task.id!==taskId);
        this.saveTasksToLocalSt();
    }

}