import {TaskClass} from "../classes/Task.class";

export const addEvents = (tasksList)=>{

    const inputTask = document.querySelector(".new-todo");

    inputTask.addEventListener("keypress",(e)=>{ //
        if (e.key=='Enter'){
            if (inputTask.value){
                tasksList.addTask(new TaskClass(inputTask.value));
                inputTask.value="";
            }
        }
    });

    document.querySelector(".clear-completed").addEventListener("click",()=>{
        tasksList.eraseCompleted();
        console.log(tasksList);
    });

}
