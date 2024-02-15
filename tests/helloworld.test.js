import hello from "../utils/helloworld.js";

it("Should say Luke",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Luke")
})