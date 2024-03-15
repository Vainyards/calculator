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

let displayValue = '';
        let firstNumber = '';
        let operator = '';
        
        function appendToDisplay(value) {
            displayValue += value;
            document.getElementById('display').value = displayValue;
        }
        
        function setOperator(op) {
            if (displayValue !== '') {
                firstNumber = displayValue;
                operator = op;
                displayValue = '';
            }
        }
        
        function calculate() {
            let result;
            const secondNumber = displayValue;
            if (operator === '+') {
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
            } else if (operator === '-') {
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
            } else if (operator === '*') {
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
            } else if (operator === '/') {
                if (parseFloat(secondNumber) !== 0) {
                    result = parseFloat(firstNumber) / parseFloat(secondNumber);
                } else {
                    document.getElementById('display').value = "Error: Division by zero";
                    return;
                }
            }
            document.getElementById('display').value = Math.round(result * 100) / 100; // Round to 2 decimal places
            displayValue = '';
            firstNumber = '';
            operator = '';
        }
        
        function clearDisplay() {
            displayValue = '';
            firstNumber = '';
            operator = '';
            document.getElementById('display').value = '';
        }
