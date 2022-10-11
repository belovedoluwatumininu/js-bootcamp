 const todo = ["eat my food","play football","read some books","Go to church","wash the plate"]


 todo.splice(2,1)
todo.push("eat pizza")
todo.shift()
todo.unshift("read the bible")

  console.log(`you have ${todo.length} things to do`)
 console.log(`todo:${todo[0]}`)
 console.log(`todo: ${todo[1]}`)
 console.log(`todo: ${todo}`)
