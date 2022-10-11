let makeGuess = function (guess){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() *(max-min) + min)
    console.log(randomNum)
    if (randomNum === guess){
        return true
    }else{
        return false}

}

console.log(makeGuess(1))