const display = document.getElementById("display");
/*
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate () {
    try {
    display.value = eval(display.value)
    }
    catch {
        display.value = "error"
    }
}
*/
let currentNumber = '';
let previousNumber = '';
let operator = '';
let resultDisplayed = false;
let ongoingCalculation = false;
let calculatedResult = 0;

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    if (ongoingCalculation) {
        clearDisplay();
        ongoingCalculation = false;
    }
    currentNumber += value;
    document.getElementById('display').value = currentNumber;
}

function setOperator(op) {
    if (currentNumber !== '') {
        if (operator !== '') {
            calculate();
            ongoingCalculation = true;
        } else {
            calculatedResult = parseFloat(currentNumber);
        }
        operator = op;
        previousNumber = currentNumber;
        currentNumber = '';
    }
}

function calculate() {
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            calculatedResult = num1 + num2;
            break;
        case '-':
            calculatedResult = num1 - num2;
            break;
        case '*':
            calculatedResult = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                calculatedResult = num1 / num2;
            } else {
                calculatedResult = 'Error: Division by zero';
            }
            break;
        default:
            calculatedResult = parseFloat(currentNumber);
    }

    document.getElementById('display').value = calculatedResult;
    currentNumber = calculatedResult.toString();
    previousNumber = currentNumber;
    operator = '';
    resultDisplayed = true;
}

function clearDisplay() {
    currentNumber = '';
    document.getElementById('display').value = '';
    resultDisplayed = false;
}