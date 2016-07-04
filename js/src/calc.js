$(document).ready(function () {

    var output = $("div.outputContainer p"),
        inputKey = $("span.operationKey, span.numberKey"),
        resultKey = $("span.resultKey"),
        resetKey = $("span.resetKey"),
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
        history.go(0);
    });

});

function Calculator() {
    this.parse = function (expression) {
        this.expression = expression;

        var regexDots = /(\d+\.){2,}/g;
        var regexExpression = /^((\+|\-)?\d+)((\+|\-|\/|\*|%|\.){1}\d+)+/g;

        if (! regexDots.test(expression)) {
            var matchedString = expression.match(regexExpression);
            return matchedString == expression;
        } else {
            return false;
        }
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






