export class TaskClass {
    constructor (task){
        this.state=0; // 0 pending | 1 complete
        this.id=new Date().getTime()+Math.floor(Math.random() * 100);
        this.task=task;
        this.date = new Date();
    }
}