import { expect } from "chai";
import { simpleGreeting } from "../../src/greetings";


describe('simpleGreeting', function() {

    it('should say hello', function() {
        expect(simpleGreeting()).to.equal('hello');
    });

});