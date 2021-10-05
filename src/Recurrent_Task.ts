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
        // TODO: ovewrite the ones with the same name
        const new_reinforcement = new Auxillary_Reinforcement(name, mean);
        this.auxreinfs.push(new_reinforcement);
    }

    delete_reinforcement(name: string){
       this.auxreinfs = this.auxreinfs.filter((item) => item.name != name);
    }

    list_allowed_reinforcements(){
        // Lists reinforcements that got scheduled for this time
        let allowedreinfs = [];
        for (let reinf of this.auxreinfs){
            if (reinf.update()){
                allowedreinfs.push(reinf);
            }
        }
        return allowedreinfs;
    }

    update_accumulated_prob(name:string, times:number){
        // updates cdf of a specific reinforcement for testing
        function checkName(item:Auxillary_Reinforcement){
            return item.name == name;
        }
        let rnf = this.auxreinfs.find(checkName);
        let i = 0;
        if (rnf != undefined){
            while(i < times){
                rnf.update_accumulated_prob();
                i++;
            }
        } else{

            console.log("Reinforcement not in a list");
        }
    }

    toString() {
        const that = this;
        return JSON.stringify(that);
    }






}