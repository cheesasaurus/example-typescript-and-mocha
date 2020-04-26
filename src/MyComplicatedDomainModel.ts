import { INamed } from "./INamed";

export class MyComplicatedDomainModel implements INamed {

    constructor(private a, private b, private c) {
        // stuff
    }

    name(): string {
        return this.a.magic(this.b, this.c);
    }
    
}