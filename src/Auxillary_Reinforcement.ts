
export class Auxillary_Reinforcement {
    private name: string;
    private readonly mean: number;
    private accumulatedprobability: number;
    private lastoccurance: number;

    constructor(name : string, mean : number){
        this.name = name;
        this.mean = mean; // how many times do you want to use this A.R. per 5 sessions.
        this.lastoccurance = 0; // number of sessions ago
        this.accumulatedprobability = 0.0; //
    }


    probability_of_reinforcement(){
        let stdev = 1;
        let denominator = stdev*Math.sqrt(2*Math.PI);
        let power = -0.5* ( (this.lastoccurance - this.mean) / stdev )**2;
        return denominator * Math.exp(power);
        
    }

    update_accumulated_prob(){
        let probability_at_this_time = this.probability_of_reinforcement();
        this.accumulatedprobability += probability_at_this_time;

    }

    to_reward_or_not() {
        let random_val = Math.random();
        return (random_val >= this.accumulatedprobability);
    }

    update(){
        this.update_accumulated_prob();
        if (this.to_reward_or_not()){
            this.lastoccurance = 0;
            this.accumulatedprobability = 0.0;

        } else{
            this.lastoccurance += 1;
        }
    }
}
