document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
    const resultLabel = document.getElementById("resultLabel");
    const errorMessage = document.getElementById("error-message");


    function convertToBinary(decimal) {
        return decimal.toString(2);
    }

    function convertToHexadecimal(decimal) {
        return decimal.toString(16).toUpperCase();
    }

    function convertToOctal(decimal) {
        return decimal.toString(8);
    }

    inputElement.style.border = "none";

    function clearResult() {
        resultElement.value = "";
    }

    // DECIMAL CONVERTER
    document.getElementById("btn-binary").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Binary";
        if (/^-?[0-9]+$/.test(inputValue)) {
            const decimalValue = parseInt(inputValue, 10);
            const binaryValue = convertToBinary(decimalValue);
            resultElement.value = binaryValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Decimal!";
            clearResult();
        }
    });

    document.getElementById("btn-hexadecimal").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Hexadecimal";
        if (/^-?[0-9]+$/.test(inputValue)) {
            const decimalValue = parseInt(inputValue, 10);
            const hexadecimalValue = convertToHexadecimal(decimalValue);
            resultElement.value = hexadecimalValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Decimal!";
            clearResult();
        }
    });

    document.getElementById("btn-octal").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Octal";
        if (/^-?[0-9]+$/.test(inputValue)) {
            const decimalValue = parseInt(inputValue, 10);
            const octalValue = convertToOctal(decimalValue);
            resultElement.value = octalValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Decimal!";
            clearResult();
        }
    });

});