
function caseItemsInCartUpdate(isIncrease) {

    let targetCaseInput = document.querySelector('#input-case-field');
    let caseInputValue = targetCaseInput.value;

    let preCaseInputValue = parseInt(caseInputValue) ;
    // console.log(preMobileInputValue);

    if(isIncrease === true){
        let newCaseInputValue = preCaseInputValue + 1;
            targetCaseInput.value = newCaseInputValue;
            return newCaseInputValue;
    
    }else{
        let newCaseInputValue = preCaseInputValue - 1;
            targetCaseInput.value = newCaseInputValue;
            return newCaseInputValue;
    }
}

function uppdateCaseTotalPrice(newCaseInputValue){
    let totalCasePriceValue =  newCaseInputValue * 59; // Price will bw set by default at object value

    let targetCasePrice = document.querySelector('#case-price');
        targetCasePrice.innerText = totalCasePriceValue;

}

function getPhonePriceById(elementId){

    let targetPhoneTotalPrice =  document.querySelector(elementId);
    let phoneTotalPrice = parseInt(targetPhoneTotalPrice.innerText);
    return phoneTotalPrice;
}


function calculateSubTotalPrice(){

    let currentMobilePrice = getPhonePriceById('#mobile-price');
    let currentCasePrice = getPhonePriceById('#case-price')

    let subTotalPrice = currentMobilePrice + currentCasePrice;

    let targetSubTotalPrice = document.querySelector('#sub-total-price');
        targetSubTotalPrice.innerText = subTotalPrice;

    let taxAmount = subTotalPrice * 0.1; // Tax is 10% of sub total price
    let totalPrice = subTotalPrice + taxAmount;

    let targetTotalPrice = document.querySelector('#total-price');
        targetTotalPrice.innerText = totalPrice;

}



document.querySelector('#btn-case-plus').addEventListener('click', function() {

    let newCaseInputValue = caseItemsInCartUpdate(true)
    console.log(newCaseInputValue);

    uppdateCaseTotalPrice(newCaseInputValue);

    calculateSubTotalPrice()
})


document.querySelector('#btn-case-minus').addEventListener('click', function() {

    let newCaseInputValue = caseItemsInCartUpdate(false);
    console.log(newCaseInputValue);

    uppdateCaseTotalPrice(newCaseInputValue);

    calculateSubTotalPrice()


})