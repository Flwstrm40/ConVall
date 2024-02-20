document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
    const resultLabel = document.getElementById("resultLabel");
    const errorMessage = document.getElementById("error-message");



    inputElement.style.border = "none";

    function clearResult() {
        resultElement.value = "";
    }

    // BINARY CONVERTER
    document.getElementById("btn-decimal").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Decimal";
        if (/^-?[01]+$/.test(inputValue)) {
            const decimalValue = parseInt(inputValue, 2);
            resultElement.value = decimalValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Binary!";
            clearResult();
        }
    });

    document.getElementById("btn-hexadecimal").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Hexadecimal";
        if (/^-?[01]+$/.test(inputValue)) {
            const hexadecimalValue = parseInt(inputValue, 2).toString(16).toUpperCase();
            resultElement.value = hexadecimalValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Binary!";
            clearResult();
        }
    });

    document.getElementById("btn-octal").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Octal";
        if (/^-?[01]+$/.test(inputValue)) {
            const octalValue = parseInt(inputValue, 2).toString(8);
            resultElement.value = octalValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Binary!";
            clearResult();
        }
    });

});