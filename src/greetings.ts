import { INamed } from "./INamed";


export const simpleGreeting = () => 'hello';


export const targetedGreeting = function(entity: INamed) {
    return `Hello, ${entity.name()}!`;
};
