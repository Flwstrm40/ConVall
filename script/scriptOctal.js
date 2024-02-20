document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
    const resultLabel = document.getElementById("resultLabel");
    const errorMessage = document.getElementById("error-message");



    inputElement.style.border = "none";

    function clearResult() {
        resultElement.value = "";
    }

    // OCTAL CONVERTER
    document.getElementById("btn-decimal").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Decimal";
        if (/^-?[0-7]+$/.test(inputValue)) {
            const decimalValue = parseInt(inputValue, 8);
            resultElement.value = decimalValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Octal!";
            clearResult();
        }
    });

    document.getElementById("btn-hexadecimal").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Hexadecimal";
        if (/^-?[0-7]+$/.test(inputValue)) {
            const hexadecimalValue = parseInt(inputValue, 8).toString(16).toUpperCase();
            resultElement.value = hexadecimalValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Octal!";
            clearResult();
        }
    });

    document.getElementById("btn-binary").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Binary";
        if (/^-?[0-7]+$/.test(inputValue)) {
            const binaryValue = parseInt(inputValue, 8).toString(2);
            resultElement.value = binaryValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Octal!";
            clearResult();
        }
    });

});