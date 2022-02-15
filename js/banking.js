//Function
function getTransaction(transaction, isAddition) {
    //get ransaction input
    const transactionInput = document.getElementById(transaction + '-input');
    const transactionAmount = transactionInput.value; 
    //get transaction total
    const showTransaction = document.getElementById(transaction + '-total');
    const prevTransaction = showTransaction.innerText;
    //get new transaction total
    const newTransaction = parseFloat(prevTransaction) + parseFloat(transactionAmount);
    //update transaction total
    showTransaction.innerText = newTransaction;
    //update account balance
    const accountBalance = document.getElementById('balance-total');
    const prevBalance = accountBalance.innerText;
    if(isAddition == true) {
        const newBalance =  parseFloat(prevBalance) + parseFloat(transactionAmount);
        accountBalance.innerText = newBalance;
    } else if(isAddition == false){
        const newBalance =  parseFloat(prevBalance) - parseFloat(transactionAmount);
        accountBalance.innerText = newBalance;
    }
    //clear transaction input
    transactionInput.value = '';
}

//Deposite
document.getElementById('deposit-button').addEventListener('click', function() {
    // //get deposit input
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmount = depositInput.value; 
    // //get deposit total
    // const showDeposit = document.getElementById('deposit-total');
    // const prevDeposit = showDeposit.innerText;
    // //get new deposit total
    // const newDeposit = parseFloat(prevDeposit) + parseFloat(depositAmount);
    // //update deposit total
    // showDeposit.innerText = newDeposit;
    // //clear deposit input
    // depositInput.value = '';
    getTransaction('deposit', true);
});

//Withdraw
document.getElementById('withdraw-button').addEventListener('click', function() {
    // //get withdraw input
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmount = withdrawInput.value;
    // //get withdraw total
    // const showWithdraw = document.getElementById('withdraw-total');
    // const prevWithdraw = showWithdraw.innerText;
    // //get new withdraw total
    // const newWithdraw = parseFloat(prevWithdraw) + parseFloat(withdrawAmount);
    // //update withdraw total
    // showWithdraw.innerText = newWithdraw;
    // //clear withdraw input
    // withdrawInput.value = '';
    getTransaction('withdraw', false);
});

