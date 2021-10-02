import {Auxillary_Reinforcement} from "./Auxillary_Reinforcement";


export class Recurrent_Task {
    public name: string;
    private auxreinfs: Auxillary_Reinforcement[];
    // add list with auxillary reinforcements
    constructor(name: string) {
        this.name = name;
        this.auxreinfs = [];
    }
    add_reinforcement(name: string, mean: number){
        const new_reinforcement = new Auxillary_Reinforcement(name, mean);
        this.auxreinfs.push(new_reinforcement);
    }

    delete_reinforcement(name: string){
        try{
            this.auxreinfs.filter((item) => item.name != name);
        }catch{
            console.log("no deletion allowed for some reason");
        }
    }


}