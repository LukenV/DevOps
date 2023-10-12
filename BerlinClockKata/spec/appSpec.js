const Main = require("../src/app") ;

const main = new Main();

describe("phrase", function() {

    it("phrase 2",function() {
    let result = main.simpleMinutes(1);

        expect(result).toBe("j");
    });

});
