import {expect} from "chai";
import {Recurrent_Task} from "../src/Recurrent_Task";
import {Auxillary_Reinforcement} from "../src/Auxillary_Reinforcement";



describe("Recurrent Task", function() {

    describe("Test constructor", function () {
        it("Should test constructor", function () {
            const rtk = new Recurrent_Task("Work out");
            expect(rtk).to.have.property('name', 'Work out');
            expect(rtk).to.have.property('auxreinfs').empty;
        });

    });

    describe("Test manipulation with auxillary reinforcements", function () {
        it("Should test add_reinforcement", function () {
            const rtk = new Recurrent_Task("Work out");
            expect(rtk).to.have.property('name', 'Work out');
            expect(rtk).to.have.property('auxreinfs').empty;
            rtk.add_reinforcement("music", 3);
            expect(rtk).to.have.property('auxreinfs').not.empty;
            const rnf = new Auxillary_Reinforcement("music", 3);
            expect(rtk).to.have.property('auxreinfs').to.deep.include(rnf);
        });

        it("Should test delete_reinforcement", function () {
            const rtk = new Recurrent_Task("Work out");
            expect(rtk).to.have.property('name', 'Work out');
            expect(rtk).to.have.property('auxreinfs').empty;
            rtk.add_reinforcement("music", 3);
            rtk.add_reinforcement("fun", 3);
            expect(rtk).to.have.property('auxreinfs').not.empty;
            rtk.delete_reinforcement("music");
            expect(rtk).to.have.property('auxreinfs').have.length(1);
            rtk.delete_reinforcement("fun");
            expect(rtk).to.have.property('auxreinfs').empty;
        });

        it("Should list reinforcement allowed to use this time", function () {
            const rtk = new Recurrent_Task("Work out");
            rtk.add_reinforcement("music", 3);
            rtk.auxreinfs[0].update_accumulated_prob();// TODO: that's a mess -> make another method for this. go back to private
            rtk.auxreinfs[0].update_accumulated_prob();
            rtk.auxreinfs[0].update_accumulated_prob();
            rtk.auxreinfs[0].update_accumulated_prob();
            rtk.auxreinfs[0].update_accumulated_prob();
            rtk.auxreinfs[0].update_accumulated_prob();
            rtk.add_reinforcement("youtube", 7);
            rtk.add_reinforcement("podcast", 7);

            const rnf = new Auxillary_Reinforcement("music", 3);
            const list_ref = [];
            list_ref.push(rnf);
            expect(rtk.list_allowed_reinforcements()).to.eql(list_ref);
        });


    });


});
