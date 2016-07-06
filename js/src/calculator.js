function Calculator() {
    this.isCorrect = function (expression) {

        // check if inserted incorrect dots. For example, 2.4.3
        var regexDots = /(\d+\.){2,}/g;

        // checks if math expression is correct
        var reg = /^((\+|\-|sqrt)?(\d+|(\d+\.\d+)))([+-\/\*](sqrt)?(\d+|(\d+\.\d+)))+/g;


        if (!regexDots.test(expression)) {
            return expression.match(reg) == expression;
        } else {
            return false;
        }

    };

    this.parse = function (expression) {
        var reg = /(sqrt)(\d+|\d+\.\d+)/g;
        return expression.replace(reg, 'Math.sqrt($2)');
    };

    this.calc = function (correctAndParsedExpression) {
        return eval(correctAndParsedExpression);
    };

    this.process = function (expression) {
        return this.calc(this.parse(expression));
    };

}
