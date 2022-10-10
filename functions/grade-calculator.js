let calculator = function ( score, total){
    let percent = (score/total)* 100
    let letterGrade = ""


    if (percent >=90 ){
          
     letterGrade = "A"
         
    }else if(percent >= 80){
       letterGrade ="B"
    }else if(percent >= 70){
         letterGrade = "C" 
    }else if(percent >= 60){
       letterGrade = "D"
    }else{
       letterGrade = "F"
    }

 return `You got an ${letterGrade} (${percent}%)`
}

let result= calculator(40, 100)
console.log(result)




