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
        let firstNumber = null;
        let operator = '';
        let resultDisplayed = false; // To track if the result is already displayed

        function appendToDisplay(value) {
            if (resultDisplayed) {
                // If result is already displayed, start fresh with a new calculation
                clearDisplay();
            }
            displayValue += value;
            document.getElementById('display').value = displayValue;
        }
        
        function setOperator(op) {
            if (displayValue !== '') {
                if (firstNumber !== null && operator !== '') {
                    // If both first number and operator are already set, perform the calculation
                    operate();
                }
                if (!isNaN(parseFloat(displayValue))) { // Check if the displayValue is a valid number
                    firstNumber = parseFloat(displayValue);
                }
                operator = op;
                displayValue = '';
            }
        }
        
        function operate() {
            const secondNumber = parseFloat(displayValue); // Convert displayValue to float
            if (!isNaN(firstNumber) && !isNaN(secondNumber)) { // Check if both firstNumber and secondNumber are valid numbers
                let result;
                switch (operator) {
                    case '+':
                        result = firstNumber + secondNumber;
                        break;
                    case '-':
                        result = firstNumber - secondNumber;
                        break;
                    case '*':
                        result = firstNumber * secondNumber;
                        break;
                    case '/':
                        if (secondNumber !== 0) {
                            result = firstNumber / secondNumber;
                        } else {
                            document.getElementById('display').value = "Error: Division by zero";
                            clearDisplay();
                            return;
                        }
                        break;
                    default:
                        return;
                }
                document.getElementById('display').value = Math.round(result * 100) / 100; // Round to 2 decimal places
                firstNumber = result; // Update first number with the result as a number
                operator = '';
                resultDisplayed = true; // Mark that result is displayed
            } else {
                clearDisplay();
                document.getElementById('display').value = "Error: Invalid input";
            }
        }
        
        function clearDisplay() {
            displayValue = '';
            firstNumber = null;
            operator = '';
            resultDisplayed = false;
            document.getElementById('display').value = '';
        }