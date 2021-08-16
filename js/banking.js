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

// get balance update for deposit and withdraw 
function balanceUpdate(AmountConverted, isAdd) {
  const balanceAmountDisplay = document.getElementById("balance_amount_display");
/*   const balanceAmountText = balanceAmountDisplay.innerText;
  const balanceAmountConverted = parseFloat(balanceAmountText); */
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


// ----Diposit >> get diposit ----------//-- 
document.getElementById("diposit_btn").addEventListener("click", function () {
  // get diposit input 
  /*     const dipositInput = document.getElementById("diposit_input");
      const dipositAmount = dipositInput.value;
      const dipositAmountConverted = parseFloat(dipositAmount);
      // console.log(dipositAmountConverted);
      //clear diposit input value
      dipositInput.value = ""; */

  // diposit amount display 
  /*     const dipositAmountDisplay = document.getElementById("diposit_amount_display");
      const dipositAmountText = dipositAmountDisplay.innerText;
      const dipositAmountDisplayConverted = parseFloat(dipositAmountText);
      // console.log(dipositAmountDisplayConverted);
  
      // (diposit input amount + diposit previous amount) 
      const dipositTotal = dipositAmountDisplayConverted + dipositAmountConverted ;
      
         // add to display diposit amount 
         dipositAmountDisplay.innerText = dipositTotal; */




  ///---------///---------Balance update for diposit---------///--------///
  // get balance amount
  /*      const balanceAmountDisplay = document.getElementById("balance_amount_display");
      const balanceAmountText = balanceAmountDisplay.innerText;
      const balanceAmountConverted = parseFloat(balanceAmountText);
     //  console.log(balanceAmountConverted);
 
     const totalBalance = balanceAmountConverted + dipositAmountConverted ;
     balanceAmountDisplay.innerText = totalBalance; */
  const dipositAmountConverted = getInputId("diposit_input");
  if (dipositAmountConverted > 0) {

    getDisplayId("diposit_amount_display", dipositAmountConverted);
    balanceUpdate(dipositAmountConverted, true);
  }

})

// --- withdraw >> get withdraw ----//----

document.getElementById("withdraw_btn").addEventListener("click", function () {
  // get withdraw input 
  /*     const withdrawInput = document.getElementById("withdraw_input");
      const withdrawAmountText = withdrawInput.value;
      const withdrawAmountConverted = parseFloat(withdrawAmountText);
      // console.log(withdrawAmountConverted);
  
      // clear withdraw input value
      withdrawInput.value = ""; */



  // get withdraw Amount
  /*   const withdrawAmountDisplay = document.getElementById("withdraw_amount_display");
    const withdrawAmountDisplayText = withdrawAmountDisplay.innerText;
    const withdrawAmountDisplayConverted = parseFloat(withdrawAmountDisplayText);
    // console.log(withdrawAmountDisplayConverted);

    // (withdraw input amount + withdraw previous amount)
    const totalWithdraw = withdrawAmountDisplayConverted + withdrawAmountConverted; */



  // withdraw Amount Display 
  // withdrawAmountDisplay.innerText = totalWithdraw;


  ///---------///---------Balance update for withdraw---------///--------///

  // get balance amount
  /*   const balanceAmountDisplay = document.getElementById("balance_amount_display");
    const balanceAmountText = balanceAmountDisplay.innerText;
    const balanceAmountConverted = parseFloat(balanceAmountText);
  
    const totalBalance = balanceAmountConverted - withdrawAmountConverted;
      balanceAmountDisplay.innerText = totalBalance; */

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