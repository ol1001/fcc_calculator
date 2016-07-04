describe("Calculator", function () {
    var calc;

    beforeEach(function () {
        calc = new Calculator();
    });

    describe("when calculator created", function () {


        it("should be able to check an expression", function () {
            expect(calc.parse("76/2+7*6")).toBe(true);
            expect(calc.parse("*1")).toBe(false);
            expect(calc.parse("--2+6")).toBe(false);
            expect(calc.parse("-2+6")).toBe(true);
            expect(calc.parse(".3")).toBe(false);
            expect(calc.parse("34..6")).toBe(false);
            expect(calc.parse("34.6")).toBe(true);
        });

        it("should be able to process correct expression", function () {
            var expression = "2+3/2*10";
                calc.parse(expression);
                expect(calc.process()).toEqual(17);
        });

    });

});
