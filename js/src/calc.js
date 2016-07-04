$(document).ready(function () {

    var outputField = $(".outputField"),
        inputElement = $(".operationsField span, .numbersField span"),
        resultKey = $(".result span"),
        result = 0,
        calc = new Calculator();

    inputElement.click(function () {
        var currentValue = this.textContent;

        outputField.append(currentValue);
    });

    resultKey.click(function () {
        var insertedExpression = outputField[0].innerHTML;
        if (calc.parse(insertedExpression)) {
            outputField.text(calc.process());
        }
    });

});

function Calculator() {
    this.parse = function (expression) {
        this.expression = expression;
        return true;
    };
    this.process = function () {
        return eval(this.expression);
    };

    this.setUser = function (user) {
        this.user = user;
    };

}
