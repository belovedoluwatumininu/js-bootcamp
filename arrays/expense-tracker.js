const account ={
    name: "andrew",
    expenses: [],
    addexpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })    

    },
    getsummary: function( account){
        let sum = 0
        let totalIncome = 0
        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount
        })
        let total = this.expenses.forEach(function(expense, amount){
           return sum += expense.amount
        })
        let balance = totalIncome -sum
       return `${this.name} has an balance of ${balance} and income of $${totalIncome} and his expenses is ${sum}`
    },
    addincome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    }

    // PrintIndividual: function(account){
    //     this.expenses.forEach(function(expense, index){
    //         console.log(`${expense}`)
    //     })
    // }
 
    
}

account.income = []


account.addexpense("rent", 1000)

account.addexpense("food", 2000)
account.addincome("job",2000)
console.log(account)
console.log(account.getsummary(account))
// account.PrintIndividual(account)
