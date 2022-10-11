let myaccount = {
    name: "andrew",
    expenses:0,
    income:0
}
let otheraccount= {
    name:"mark",
    expenses: 20,
    income:10


}

let addexpense =function(account,expenses ,income){
    account.expenses = account.expenses + expenses
    account.income = account.income + income
    balance = account.income - account.expenses
    getaccountsummary =`Account for ${account.name} has ${balance}.  ${account.income} in income and ${account.expenses} expenses `
    console.log(getaccountsummary)
}
let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
    balance = account.income - account.expenses
    getaccountsummary =`Account for ${account.name} has ${balance}.  ${account.income} in income and ${account.expenses} expenses `
    console.log(getaccountsummary)
}





addexpense(otheraccount,50,40 )
addexpense(myaccount,20,30)
console.log(myaccount)
resetAccount(myaccount)
console.log(myaccount)

console.log(myaccount.income)