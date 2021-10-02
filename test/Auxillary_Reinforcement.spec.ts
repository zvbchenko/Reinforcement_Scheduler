import {expect} from "chai";
import {Auxillary_Reinforcement} from "../src/Auxillary_Reinforcement";


describe("Auxillary_Reinforcement", function(){

    describe("Test constructor", function (){
        it("Should test constructor",function(){
            const rnf = new Auxillary_Reinforcement("music", 3);
            expect(rnf).to.have.property('name', 'music');
            expect(rnf).to.have.property('mean', 3);
            expect(rnf).to.have.property('accumulatedprobability', 0);
            expect(rnf).to.have.property('lastoccurence', 0)
        });

    });

    describe("Test probability function of reinforcement", function (){
        it("Should test cumulative probability function",function(){
            const rnf = new Auxillary_Reinforcement("music", 3);
            rnf.update_accumulated_prob(); // 0
            rnf.update_accumulated_prob();
            rnf.update_accumulated_prob();
            expect(rnf).to.have.property('accumulatedprobability').to.be.approximately(0.1587, 0.2);
        });

    });

    describe("Test update function", function (){
        it("Should reset the values whenever reward is awarded",function(){
            const rnf = new Auxillary_Reinforcement("music", 3);
            rnf.update_accumulated_prob(); // 0
            rnf.update_accumulated_prob();
            rnf.update_accumulated_prob();
            rnf.update_accumulated_prob();
            rnf.update_accumulated_prob();
            rnf.update_accumulated_prob();
            rnf.update_accumulated_prob();
            rnf.update_accumulated_prob();
            expect(rnf).to.have.property('accumulatedprobability').to.be.approximately(1.0, 0.1);
            expect(rnf.to_reward_or_not()).equal(true);
            rnf.update();
            expect(rnf).to.have.property('accumulatedprobability').to.be.approximately(0.0, 0.0);
            expect(rnf).to.have.property('lastoccurence').to.be.approximately(0.0, 0.0);


        });

    });

});