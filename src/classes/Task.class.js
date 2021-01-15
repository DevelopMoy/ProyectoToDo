export class TaskClass {
    constructor (task,a){
        if (a==='undefined'){
            this.state=0; // 0 pending | 1 complete
            this.id=new Date().getTime()+Math.floor(Math.random() * 100);
            this.task=task;
            this.date = new Date();
        }else{
            this.state=a.state;
            this.id=a.id;
            this.task=task;
            this.date= a.date;
        }
    }
}