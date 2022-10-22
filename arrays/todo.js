 const todo = [{
    text:"eat my food",
    completed: true
 },{
    text:"play football",
    completed: false
 },{
    text:"read some books",
    completed: false
 },{
    text:"Go to church",
    completed: true
 },{
    text:"wash the plate",
    completed: false
 }]





 let sortTodo = function(todo){
   todo.sort(function(a,b){
      if(!a.completed && b.completed ){
         return -1
      } else if(!b.completed < a.completed ){
         return 1}else{
            return 0
         }
      
   })
   
 }
 sortTodo(todo)
 console.log(todo)



// let getThingTodo = function(todo){
//  return  todo.filter(function(todo){
//    return todo.completed === false;
//    })
// }

// console.log(getThingTodo(todo))


// let deletetodo = function(todo, todoText){
//    let index = todo.findIndex(function(todo, index){
//         return todo.text.toLowerCase() === todoText.toLowerCase()

//     })
     
//     if(index>-1){
//       return todo.splice(index,1)}
   //  }else{console.log("no item to delete")}
    
   
// }


// deletetodo(todo,"iiiread some books")
// console.log(todo)















//  let check = todo.forEach(function(item,index){
//     console.log(`${index +1}. ${item.text}`)

// })



// for (count=0; count < todo.length; count++){
//     console.log(`${todo[count]}`)

// }



// //  todo.splice(2,1)
// // todo.push("eat pizza")
// // todo.shift()
// // todo.unshift("read the bible")
// // todo[0]="my first new note"

//   console.log(`you have ${todo.length} things to do`)
//  console.log(`todo:${todo[0]}`)
//  console.log(`todo: ${todo[1]}`)
//  console.log(`todo: ${todo}`)
