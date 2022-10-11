let isvalidpassword = function (password){
    return password.length > 8 && !password.includes("password")
}

console.log(isvalidpassword("bffuijogokok002i2i0"))


// let isValidPassword = function (password) {
//     return password.length > 8 && !password.includes('password')
// }

// console.log(isValidPassword('asdfp'))