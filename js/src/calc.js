$(document).ready(function () {

    var output = $("div.outputContainer p"),
        inputElement = $("span.operationKey, span.numberKey"),
        resultKey = $("span.resultKey"),
        resetKey = $("span.resetKey"),
        result = 0,
        calc = new Calculator();

    inputElement.click(function () {
        var currentValue = this.textContent;

        output.append(currentValue);
    });

    resultKey.click(function () {
        var insertedExpression = output[0].innerHTML;
        if (calc.parse(insertedExpression)) {
            output.text(calc.process());
        }
    });

    resetKey.click(function (){
       output.text("");
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

}
