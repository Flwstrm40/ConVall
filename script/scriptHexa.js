document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
    const resultLabel = document.getElementById("resultLabel");
    const errorMessage = document.getElementById("error-message");


  

    inputElement.style.border = "none";

    function clearResult() {
        resultElement.value = "";
    }

    // HEXADECIMAL CONVERTER
    document.getElementById("btn-binary").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Binary";
        if (/^-?[0-9A-F]+$/.test(inputValue)) {
            const binaryValue = (parseInt(inputValue, 16).toString(2));
            // const binaryValue = convertToBinary(decimalValue);
            resultElement.value = binaryValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Hexadecimal!";
            clearResult();
        }
    });

    document.getElementById("btn-decimal").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Decimal";
        if (/^-?[0-9A-F]+$/.test(inputValue)) {
            const decimalValue = parseInt(inputValue, 16).toString(10);
            // const hexadecimalValue = convertToHexadecimal(decimalValue);
            resultElement.value = decimalValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Hexadecimal!";
            clearResult();
        }
    });

    document.getElementById("btn-octal").addEventListener("click", function () {
        const inputValue = inputElement.value;
        resultLabel.textContent = "Result in Octal";
        if (/^-?[0-9A-F]+$/.test(inputValue)) {
            const octalValue = parseInt(inputValue, 16).toString(8);
            resultElement.value = octalValue;
            inputElement.style.border = "none";
            errorMessage.textContent = "";
        } else {
            inputElement.style.border = "2px solid red";
            errorMessage.textContent = "Invalid Hexadecimal!";
            clearResult();
        }
    });

});