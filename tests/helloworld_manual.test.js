import hello from "../utils/hello.mjs";
import assert from 'assert';

it("Tests Hello World",()=>{

    const hello=sayHello();
    

    assert.equal(hello,"hello")
})