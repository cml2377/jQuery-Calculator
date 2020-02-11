$(document).ready(function () {
    // start with default values in variables.
    var firstNumber = 0;
    var secNumber = 0;
    var operator = "";
    var result = 0;
    var isOperatorClicked = false;
    var isCalculated = false;

    // Function that clears calculator of any values when cleared. The variable firstNumber and secondNumber will be an empty string that will populate with the user's input.

    function initCalculator() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorClicked = false;
        isCalculated = false;
        $("#first-number, #second-number, #operator, #result").empty();
    }

    $(".number").on("click", function () {

        // Check if we've already run a calculation
        if (isCalculated) {
            return false;
        }

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        if (isOperatorClicked) {
            secondNumber += $(this).val();
            $("#second-number").text(secondNumber);

        }
        else {
            firstNumber += $(this).val();
            $("#first-number").text(firstNumber);
        }

    });
    $(".operator").on("click", function () {

        // Check if a first number has already been selected
        if (!firstNumber || isCalculated) {
            return false;
        }

        // Set isOperatorClicked to true so we start writing to secondNumber
        isOperatorClicked = true;

        // Store off the operator
        operator = $(this).val();

        // Set the HTML of the #operator to the text of what was clicked
        $("#operator").text($(this).text());

    });
    $(".equal").on("click", function () {

        // If we already clicked equal, don't do the calculation again
        if (isCalculated) {
            return false;
        }

        // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
        isCalculated = true;

        // Use parseInt to convert our string representation of numbers into actual integers
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        // Based on the operator that was chosen.
        // Then run the operation and set the HTML of the result of that operation
        if (operator === "plus") {
            result = firstNumber + secondNumber;
        }

        else if (operator === "minus") {
            result = firstNumber - secondNumber;
        }

        else if (operator === "times") {
            result = firstNumber * secondNumber;
        }

        else if (operator === "divide") {
            result = firstNumber / secondNumber;
        }

        else if (operator === "power") {
            result = Math.pow(firstNumber, secondNumber);
        }

        $("#result").text(result);

    });
    $(".clear").on("click", function () {

        // Call initializeCalculater so we can reset the state of our app
        initCalculator();

    });

    // Call initializeCalculater so we can set the state of our app
    initCalculator();
});
