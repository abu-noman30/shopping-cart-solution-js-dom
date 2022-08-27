function mobileItemsInCartUpdate(isIncrease) {

    let targetMobileInput = document.querySelector('#input-mobile-field');
    let mobileInputValue = targetMobileInput.value;

    let preMobileInputValue = parseInt(mobileInputValue) ;
    // console.log(preMobileInputValue);

    if(isIncrease === true){
        let newMobileInputValue = preMobileInputValue + 1;
            targetMobileInput.value = newMobileInputValue;
            return newMobileInputValue;
    
    }else{
        let newMobileInputValue = preMobileInputValue - 1;
            targetMobileInput.value = newMobileInputValue;
            return newMobileInputValue;
    }
}

function uppdateMobileTotalPrice(newMobileInputValue){
    let totalMobilePriceValue =  newMobileInputValue * 1219; // Price will bw set by default at object value

    let targetMobilePrice = document.querySelector('#mobile-price');
        targetMobilePrice.innerText = totalMobilePriceValue;

}

function getCasePriceById(elementId){

    let targetPhoneTotalPrice =  document.querySelector(elementId);
    let phoneTotalPrice = parseInt(targetPhoneTotalPrice.innerText);
    return phoneTotalPrice;
}

function calculateSubTotalPrice(){

    let currentMobilePrice = getCasePriceById('#mobile-price');
    let currentCasePrice = getCasePriceById('#case-price')

    let subTotalPrice = currentMobilePrice + currentCasePrice;

    let taxAmount = subTotalPrice * 0.1; // Tax is 10% of sub total price
    let totalPrice = subTotalPrice + taxAmount;

    let targetSubTotalPrice = document.querySelector('#sub-total-price');
        targetSubTotalPrice.innerText = subTotalPrice;

    let targetTotalPrice = document.querySelector('#total-price');
        targetTotalPrice.innerText = totalPrice;
}


document.querySelector('#btn-mobile-plus').addEventListener('click', function() {

    let newMobileInputValue = mobileItemsInCartUpdate(true)
    console.log(newMobileInputValue);

    uppdateMobileTotalPrice(newMobileInputValue);

    calculateSubTotalPrice()

    

})


document.querySelector('#btn-mobile-minus').addEventListener('click', function() {

    let newMobileInputValue = mobileItemsInCartUpdate(false);
    console.log(newMobileInputValue);

    uppdateMobileTotalPrice(newMobileInputValue);

    calculateSubTotalPrice()


})

