export class ToDoList {

    constructor() {
        this.tasks = [];
    }

    addTask(task){
        this.tasks.unshift(task); // INSERT IN THE BEGGINING OF THE ARRAY
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
        for (let i=0;i<this.tasks.length;i++){
            if (this.tasks[i].state===1){
                this.tasks.splice(i,1);
                i--;
            }
        }
    }

}