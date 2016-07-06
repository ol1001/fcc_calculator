describe("Calculator", function () {
    var calc;

    beforeEach(function () {
        calc = new Calculator();
    });

    describe("when calculator created", function () {


        it("should return true if expression is correct", function () {
            expect(calc.isCorrect("76/2+7*6")).toBe(true);
            expect(calc.isCorrect("-2+6")).toBe(true);
            expect(calc.isCorrect("34.6")).toBe(true);
        });

        it("should return false if expression is incorrect", function () {
            expect(calc.isCorrect("*1")).toBe(false);
            expect(calc.isCorrect("--2+6")).toBe(false);
            expect(calc.isCorrect(".3")).toBe(false);
            expect(calc.isCorrect("34..6")).toBe(false);
        });
        
        it("should be to parse an expression", function () {
            expect(calc.parse("sqrt9")).toBe("Math.sqrt(9)");
        });

        it("should be to parse an expression", function () {
            expect(calc.parse("9*3")).toBe("9*3");
        });

        it("should calculate an expression", function () {
            expect(calc.calc("9*3")).toBe(27);
        });

    });

});
