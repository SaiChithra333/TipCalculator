function calculateTip() {
    var billAmountInput = document.getElementById("billAmount");
    var tipPercentageInput = document.getElementById("tipPercentage");
    var resultContainer = document.getElementById("result");

    var billAmount = parseFloat(billAmountInput.value);
    var tipPercentage = parseFloat(tipPercentageInput.value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
        resultContainer.textContent = "Please enter valid values.";
        return;
    }

    var tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
    var totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

    resultContainer.innerHTML = `<p>Tip Amount: $${tipAmount}</p><p>Total Amount: $${totalAmount}</p>`;
}
