const resultClass = "result";
const warningClass = "warningColor";

$(document).ready(function () {
    var expression = "";
    var output = $("input#outputExpression"),
        inputKey = $("span.operationKey, span.numberKey"),
        resultKey = $("span.resultKey"),
        resetKey = $("span.resetKey"),
        calculator = new Calculator();

    inputKey.click(function () {
        var currentValue = $(this).attr("data-value"),
            inputType = $(this).attr("class");

        if (isWarningShown(output)) {
            refreshOutputField(output);
        } else if (isResultShown(output) && inputType == "operationKey") {
            expression = output.val();
            output.removeClass(resultClass);
        }

        if (currentValue == "sqrt") {
            output.val(function (i, currentExpression) {
                return currentExpression + String.fromCodePoint(0x221A);
            });
            expression += "sqrt";
        } else {
            output.val(function (i, currentExpression) {
                return currentExpression + currentValue;
            });
            expression += currentValue;
        }
    });

    output.keypress(function (e) {
        var pressedKey = e.which,
            symbol = String.fromCharCode(pressedKey);

        if (isResultShown(output) && symbol.match(/\+|-|\/|\*/)) {
            expression = output.val();
            output.removeClass(resultClass);
        }

        if (symbol.match(/[0-9]|\+|-|\/|\*|\./)) {
            expression += symbol;
        } else {
            setWarning(output);
        }

    });

    resultKey.click(function () {
        if (calculator.isCorrect(expression)) {
            var result = calculator.process(expression);
            output.val(result);
            output.addClass(resultClass);
        } else {
            setWarning(output);
        }

        expression = "";
    });

    resetKey.click(function () {
        refreshOutputField(output);
    });
});

function isResultShown(element) {
    return element.hasClass(resultClass);
}

function isWarningShown(element) {
    return element.hasClass(warningClass);
}

function setWarning(element) {
    element.addClass(warningClass);
}

function refreshOutputField(element) {
    element.removeClass();
    element.val(' ');
}