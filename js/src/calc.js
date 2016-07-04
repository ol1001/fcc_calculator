$(document).ready(function () {

    var output = $("div.outputContainer p"),
        inputKey = $("span.operationKey, span.numberKey"),
        resultKey = $("span.resultKey"),
        resetKey = $("span.resetKey"),
        result = 0,
        calc = new Calculator();

    inputKey.click(function () {
        var currentValue = this.textContent;

        output.append(currentValue);
    });

    resultKey.click(function () {
        var insertedExpression = output[0].innerHTML;
        if (calc.parse(insertedExpression)) {
            output.text(calc.process());
        } else {
            displayWarning(output);
        }
    });

    resetKey.click(function () {
        output.text("");
    });

});

function Calculator() {
    this.parse = function (expression) {
        this.expression = expression;

        var regex = /((\+|\-)?\d+(\+|\-|\/|\*|\.){1}\d+)+/g;
        var result = regex.test(expression);

        console.log(result);

        return result;
    };

    this.process = function () {
        return eval(this.expression);
    };

}

function displayWarning(element) {
    element.css('color', '#FF6347');
    setInterval(blinker, 500);

    function blinker() {
        element.fadeOut(300);
        element.fadeIn(300);
    }

}






