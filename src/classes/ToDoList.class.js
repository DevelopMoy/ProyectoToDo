import {addTaskToDocument} from '../js/utilities.js'


export class ToDoList {

    constructor() {
        this.tasks = [];
    }

    addTask(task){
        this.tasks.unshift(task); // INSERT IN THE BEGGINING OF THE ARRAY
        addTaskToDocument(task);

        // ADDING EVENT TO MARK TASK AS COMPLETED
        const taskCheckBox = document.querySelector(`#ch${task.id}`);
        const liItem =document.querySelector(`#c${task.id}`);
        const itemListHTML =document.querySelector(".todo-list");

        taskCheckBox.addEventListener("click",()=>{
            if (taskCheckBox.checked){
                this.markAsComplete(task.id);
                liItem.className="completed";
            }else{
                this.markAsPending(task.id);
                liItem.className="view";
            }

        });

        //ADDING EVENT TO ERASE TASK

        const taskDestroyBtn = document.querySelector(`#dt${task.id}`);
        taskDestroyBtn.addEventListener("click",()=>{
            this.eraseTask(task.id);
            itemListHTML.removeChild(liItem.parentElement);
            console.log(this);
        })

    }

    markAsComplete (taskId){
        for (let x of this.tasks){
            if (x.id===taskId){
                x.state=1;

                break;
            }
        }



    }

    markAsPending (taskId){
        for (let x of this.tasks){
            if (x.id===taskId){
                x.state=0;
                break;
            }
        }
    }

    eraseCompleted (){
        this.tasks=this.tasks.filter (task => task.state===0);
    }

    eraseTask (taskId){
        this.tasks=this.tasks.filter (task => task.id!==taskId);
    }

}