let result = "";

function appendNumber(number) {
    result += number;
    document.getElementById("result").value = result;
}

function appendOperator(operator) {
    result += operator;
    document.getElementById("result").value = result;
}

function clearResult() {
    result = "";
    document.getElementById("result").value = "";
}

function calculate() {
    try {
        if (result.includes("/0")) {
            throw "Division by zero";
        }
        let binaryResult = eval(parseInt(result, 2)).toString(2);
        document.getElementById("result").value = binaryResult;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
