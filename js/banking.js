// ----Diposit >> get diposit ----------//-- 
document.getElementById("diposit_btn").addEventListener("click",function(){
    // get diposit input 
    const dipositInput = document.getElementById("diposit_input");
    const dipositAmount = dipositInput.value;
    const dipositAmountConverted = parseFloat(dipositAmount);
    // console.log(dipositAmountConverted);
    //clear diposit input value
    dipositInput.value = "";

    // diposit amount display 
    const dipositAmountDisplay = document.getElementById("diposit_amount_display");
    const dipositAmountText = dipositAmountDisplay.innerText;
    const dipositAmountDisplayConverted = parseFloat(dipositAmountText);
    // console.log(dipositAmountDisplayConverted);

    // (diposit input amount + diposit previous amount) 
    const dipositTotal = dipositAmountDisplayConverted + dipositAmountConverted ;
    
       // add to display diposit amount 
       dipositAmountDisplay.innerText = dipositTotal;


     ///---------///---------Balance update for diposit---------///--------///
    // get balance amount
     const balanceAmountDisplay = document.getElementById("balance_amount_display");
     const balanceAmountText = balanceAmountDisplay.innerText;
     const balanceAmountConverted = parseFloat(balanceAmountText);
    //  console.log(balanceAmountConverted);

    const totalBalance = balanceAmountConverted + dipositAmountConverted ;
    balanceAmountDisplay.innerText = totalBalance;

})

// --- withdraw >> get withdraw ----//----

document.getElementById("withdraw_btn").addEventListener("click",function(){
    // get withdraw input 
    const withdrawInput = document.getElementById("withdraw_input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmountConverted = parseFloat(withdrawAmountText);
    // console.log(withdrawAmountConverted);

    // clear withdraw input value
    withdrawInput.value = "";

    // get withdraw Amount
    const withdrawAmountDisplay = document.getElementById("withdraw_amount_display");
    const withdrawAmountDisplayText = withdrawAmountDisplay.innerText;
    const withdrawAmountDisplayConverted = parseFloat(withdrawAmountDisplayText);
    // console.log(withdrawAmountDisplayConverted);

    // (withdraw input amount + withdraw previous amount)
    const totalWithdraw = withdrawAmountDisplayConverted + withdrawAmountConverted;

    // withdraw Amount Display 
    withdrawAmountDisplay.innerText = totalWithdraw;


     ///---------///---------Balance update for withdraw---------///--------///
     
  // get balance amount
  const balanceAmountDisplay = document.getElementById("balance_amount_display");
  const balanceAmountText = balanceAmountDisplay.innerText;
  const balanceAmountConverted = parseFloat(balanceAmountText);

  const totalBalance = balanceAmountConverted - withdrawAmountConverted;
    balanceAmountDisplay.innerText = totalBalance;
})