// let person ={
//     name: "pelumi",
//     age: 22,
//     location: "Nigeria"
// }

// let person2 ={
//     name: "pelumi",
//     age: 22,
//     location: "Nigeria"
// }

// let human = function(personName){
//     return{
//         summary:`${personName.name} is ${personName.age} `,
//         summary2:`${personName.name} lives in ${personName.location}`
//     }
// }

// let result = human(person)
// console.log(result)


let convertTemp = function(fahreheit){
       let celcius = (fahreheit - 32) * (5/9)
       let = kelvin = celcius + 273

       return {
          tempFahr: fahreheit,
          tempcelcius: celcius,
          tempkelvin: kelvin
         }
}

let temperature = convertTemp(40)
console.log(temperature.tempcelcius)