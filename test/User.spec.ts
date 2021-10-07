import {expect} from "chai";
import {User} from "../src/User";
import {Recurrent_Task} from "../src/Recurrent_Task";


describe("User", function() {

    describe("Test constructor", function () {
        it("Should test constructor", function () {
            const user = new User(0, "zubara@inbox.ru");
            expect(user).to.have.property('id', 0);
            expect(user).to.have.property('email', "zubara@inbox.ru");
            expect(user).to.have.property('recurrent_tasks').empty;
        });
    });

    describe("Test constructor json", function () {
        it("Should test json", function () {
            const user = new User(0, "zubara@inbox.ru");
            const example1 = "{\"id\":0,\"email\":\"zubara@inbox.ru\",\"recurrent_tasks\":[]}";
            expect(user.toString()).to.equal(example1);
        });
    });

});