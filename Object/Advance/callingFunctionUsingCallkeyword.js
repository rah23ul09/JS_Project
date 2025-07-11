/*
    Call a constructor without 'call' keyword
*/

let account = {
    name : "Ganpath",
    account : 12345,
    balance : 100,
    addAmount : function() {
        this.balance += 100
    }
}

let accountManager = {
    name : "Chirkut",
    managingAccount : account.name,
    addAmount : account.addAmount
}

accountManager.addAmount.call(account)
console.log(account)
console.log(accountManager)