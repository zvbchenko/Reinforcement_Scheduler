
export class Auxillary_Reinforcement {
    public name: string;
    private readonly mean: number;
    private accumulatedprobability: number;
    private lastoccurence: number;
    private stdev:number;

    constructor(name : string, mean : number){
        this.name = name;
        this.mean = mean; // how many times do you want to use this A.R. per 5 sessions.
        this.stdev = 1;
        this.lastoccurence = 0; // number of sessions ago
        this.accumulatedprobability = 0.0; //

    }

    // Using to sample normal distribution
    // IDEA: Sample 1000, using BM - transform turn into a normal distribution(0, 1).
    // Transform into normal distribution(\mu, \stdev^2) by Y= mu + stdev*X

    GenerateGaussianDistribution(n: number, mean: number, stdev:number){
        let random_nums = Array.from({length: 1000}, () => Math.random());
        let U1 = random_nums.slice(0, 500);
        let U2 = random_nums.slice(500);
        let X1 = [];
        let X2 = [];
        for(let i=0; i< U1.length; i++) {
             X1.push(Math.sqrt(-2*Math.log(U1[i]))*Math.cos(2*Math.PI*U2[i]));
             X2.push(Math.sqrt(-2*Math.log(U1[i]))*Math.sin(2*Math.PI*U2[i]));
        }
        let distribution = X1.concat(X2);

        function shiftdist(num:number) {
            return mean + num * stdev;
        }
        return distribution.map(shiftdist);

    }
    to_reward_or_not() {
        let random_val = Math.random();
        return (random_val <= this.accumulatedprobability);
    }

    update_accumulated_prob(){
        let Y = this.GenerateGaussianDistribution( 1000, this.mean, this.stdev);
        let count = 0;
        let i;
        for (i = 0; i < Y.length; i++ ){
            if (Y[i] < this.lastoccurence){
                count +=1;
            }
        }
        this.accumulatedprobability = count/1000;
        this.lastoccurence += 1;
    }


    update(){
        this.update_accumulated_prob();
        if (this.to_reward_or_not()){
            // RESET the values
            this.lastoccurence = 0;
            this.accumulatedprobability = 0.0;
            return true;
        }
        return false;
    }
}
