// Manage Customer Accounts and Transactions


let accountDetails = { name: "Surya", balance: 5000 };


// Deposits
function deposit(account, amount){
    
    if(amount>0){
        account.balance += amount;
        console.log(amount + " Deposited. " + "New Balance :- " + account.balance);
    }
    else{
        console.log("Deposit Amount must be greater than 0.");
    }
}


// Withdrawal
function withdrawal(account, amount){

    if(amount>0){
        if(amount < account.balance){
            account.balance -= amount;
            console.log(amount + " Withdrawed. " + "New Balance :- " + account.balance);
        }
        else{
            console.log("Balance Insufficient");
        }
    }
    else{
        console.log("Withdrawal Amount must be greater than 0.");
    }
}


deposit(accountDetails, 5000);
withdrawal(accountDetails, 5000);
withdrawal(accountDetails, 7000);