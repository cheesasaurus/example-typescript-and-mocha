import { expect } from "chai";
import { mock, when, instance } from "ts-mockito";
import { simpleGreeting, targetedGreeting } from "../../src/greetings";
import { MyComplicatedDomainModel } from "../../src/MyComplicatedDomainModel";


describe('simpleGreeting', function() {

    it('should say hello', function() {
        expect(simpleGreeting()).to.equal('hello');
    });

});


describe('targetedGreeting', function() {

    it(`should say hello and use the entity's name`, function() {
        let MockedClass:MyComplicatedDomainModel = mock(MyComplicatedDomainModel);
        when(MockedClass.name()).thenReturn('Bobby');

        let bobby = instance(MockedClass);

        expect(targetedGreeting(bobby)).to.equal('Hello, Bobby!');
    });

});