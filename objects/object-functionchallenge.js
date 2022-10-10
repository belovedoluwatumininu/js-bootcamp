let convertTemp =function(fahreheit){
    return{
        fahreheit: fahreheit,
        celcius:(fahreheit - 32) * (5/9),
        kelvin : (fahreheit - 32) * (5/9) + 273
    }
}

let temperature = convertTemp(30)

console.log(temperature.celcius)