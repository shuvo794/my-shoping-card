function updateNumber(product, price, isIncriseing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncriseing) {
        productNumber = parseInt(productInput.value) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update Total
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price;
    calculateTotal();
}

function getInput(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = productInput.value;
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInput('phone') * 1278;
    const caseTotal = getInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update total on html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total').innerText = totalPrice;
}

// use handelar PhoneIncrise decrice
document.getElementById('phone-pluse').addEventListener('click', function() {

    updateNumber('phone', 1219, true)
});
document.getElementById('phone-minuse').addEventListener('click', function() {
        updateNumber('phone', 1219, false)
    })
    // use handelar caseIncrise decrice
document.getElementById('Case-Pluse').addEventListener('click', function() {

    updateNumber('case', 59, true);

});
document.getElementById('Case-minus').addEventListener('click', function() {
    updateNumber('case', 59, false);

})