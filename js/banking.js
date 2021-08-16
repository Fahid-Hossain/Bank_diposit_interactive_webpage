// get Input function 
function getInputId(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  const inputValueConverted = parseFloat(inputValue);
  inputField.value = "";
  return inputValueConverted;
}

// get update and display diposit and withdraw function

function getDisplayId(displayId, inputAmount) {
  const displayAmount = document.getElementById(displayId);
  const displayAmountText = displayAmount.innerText;
  const displayAmountConverted = parseFloat(displayAmountText);
  displayAmount.innerText = displayAmountConverted + inputAmount;
}
  // my balance limit check for withdraw 
  function totalBalanceCheck() {
    // debugger;
    const balanceAmountDisplay = document.getElementById("balance_amount_display");
    const balanceAmountText = balanceAmountDisplay.innerText;
    const balanceAmountConverted = parseFloat(balanceAmountText);
    return balanceAmountConverted;
  }

//get balance update for deposit and withdraw 
function balanceUpdate(AmountConverted, isAdd) {
  const balanceAmountDisplay = document.getElementById("balance_amount_display");
    const balanceAmountConverted  = totalBalanceCheck();

  if (isAdd == true) {
    const totalBalance = balanceAmountConverted + AmountConverted;
    balanceAmountDisplay.innerText = totalBalance;
  }
  else {
    const totalBalance = balanceAmountConverted - AmountConverted;
    balanceAmountDisplay.innerText = totalBalance;
  }

}


// \\\\\\\\===========-Diposit >> get diposit ----------//-- 
document.getElementById("diposit_btn").addEventListener("click", function () {

  ///---------///---------Balance update for diposit---------///--------///
  // get balance amount
  const dipositAmountConverted = getInputId("diposit_input");
  if (dipositAmountConverted > 0) {

    getDisplayId("diposit_amount_display", dipositAmountConverted);
    balanceUpdate(dipositAmountConverted, true);
  }

})

// ---============ withdraw >> get withdraw ----//----

document.getElementById("withdraw_btn").addEventListener("click", function () {

  ///---------///---------Balance update for withdraw---------///--------///
  // get balance amount

  const withdrawAmountConverted = getInputId("withdraw_input");
  const currentBalance = totalBalanceCheck();
  if (withdrawAmountConverted > 0 && withdrawAmountConverted < currentBalance) {

    getDisplayId("withdraw_amount_display", withdrawAmountConverted);
    balanceUpdate(withdrawAmountConverted, false);
  }
  else {
    console.log("unsufficient balance")
  }
})