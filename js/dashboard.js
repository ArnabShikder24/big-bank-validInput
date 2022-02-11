// get value from input
function getInputValue(inputValue) {
    const inValue = document.getElementById(inputValue);
    const inValueNum = parseFloat(inValue.value)
    // clear input Field
    inValue.value = '';

    return inValueNum;
}
// get value from deposit inner tag
function getInnerTextToNum(innerValue, depositInputValue) {
    const innerToValue = document.getElementById(innerValue);
    const innerToValueNum = parseFloat(innerToValue.innerText);

    innerToValue.innerText = innerToValueNum + depositInputValue;
}
function getCurrentBalance() {
    const mainValue = document.getElementById('main-balance');
    const mainValueNum = parseFloat(mainValue.innerText);
    return mainValueNum;
}
// for main balance value
function mainBalance(inputValue, isAdd) {
    const mainValue = document.getElementById('main-balance');
    const mainValueNum = getCurrentBalance(); 
    if(isAdd == true) {
        mainValue.innerText = mainValueNum + inputValue;
    }
    else {
        mainValue.innerText = mainValueNum - inputValue;
    }
}
// for deposit 
document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositInputValue = getInputValue('deposit-input');
    if(depositInputValue > 0) {
        getInnerTextToNum('deposit', depositInputValue);
        mainBalance(depositInputValue, true);
    }   
});

// for withdraw
document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawInputValue = getInputValue('withdraw-input');
    const mainValueNum = getCurrentBalance(); 
    if(withdrawInputValue > 0 && withdrawInputValue <= mainValueNum) {
        getInnerTextToNum('withdraw', withdrawInputValue);
        mainBalance(withdrawInputValue, false);
    }
});