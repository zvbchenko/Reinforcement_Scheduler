import {expect} from "chai";
import {Auxillary_Reinforcement} from "../src/Auxillary_Reinforcement";

describe("Auxillary_Reinforcement", function(){

    describe("Test constructor", function (){
        it("Should test constructor",function(){

            const rnf = new Auxillary_Reinforcement("music", 3);

            expect(rnf).to.have.property('name', 'music');
            expect(rnf).to.have.property('mean', 3);
            expect(rnf).to.have.property('accumulatedprobability', 0);
            expect(rnf).to.have.property('lastoccurance', 0)

        });

    });

    it("Should test updates",function(){

        // add testing here
        expect(3).to.equal(3);
    });

});