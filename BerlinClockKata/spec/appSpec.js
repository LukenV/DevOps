const Main = require("../src/app");

const main = new Main();

describe("phase", function() {

    it("phase 1",function() {
    let result = main.simpleMinutes(1);

        expect(result).toBe("j");
    });

    it("phase 2", function(){
        let result = main.simpleMinutes(2);

        expect(result).toBe("jj");
    });

    it("phase 3", function(){
        let result = main.simpleMinutes(3);

        expect(result).toBe("jjj");
    });

});
