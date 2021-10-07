import {Recurrent_Task} from "./Recurrent_Task";


export class User {
    public id: number;
    private email: string;
    private recurrent_tasks: Recurrent_Task[];

    constructor(id : number, email : string ) {
        this.id = id;
        this.email = email;
        this.recurrent_tasks = []
    }

    add_recurrent_task(task: Recurrent_Task){
        let findind = this.recurrent_tasks.findIndex(item => item.name == task.name);
        if (findind == undefined){
            this.recurrent_tasks.push(task);
        }else{
            console.log("This task exists in the list: Delete it before adding ")
        }

    }

    delete_recurrent_task(task_name: string){
        this.recurrent_tasks = this.recurrent_tasks.filter((item) => item.name != task_name);

    }
    toString() {
        const that = this;
        return JSON.stringify(that);
    }

    
}