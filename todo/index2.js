const fetchTodo = function(){
    let storedTodos = localStorage.getItem("todos")
    return todos =  JSON.parse(storedTodos)
   
}
const saveTodo =function(todos){
    let todoJSON = JSON.stringify(todos)
      localStorage.setItem("todos",todoJSON)
      filtered(todos, filter)
     
}
  //toggle the copleted value for a given todo 
 let toggleTodo = function(id){
   const toggle= todos.forEach(function(todo){
      if (todo.id ===id){
      todo.completed =!todo.completed
      }
   }
   ) }
   let toggle = function(id){
      
   }
 
   // let untoggleTodo = function(id){
   //    const toggle= todos.forEach(function(todo){
   //       if (todo.id ===id){
   //          return todo.completed = false
   //       }
   //    }
   //    ) }

// const removeBtn = function (id) {
//    const todoIndex = todos.findIndex(function (todo) {
//        return todo.id === id
//    })

//    if (todoIndex > -1) {
//        todos.splice(todoIndex, 1)
//    }
// }


const removeBtn = function (id) {
   const todoIndex = todos.findIndex(function (todo) {
       return todo.id === id
   })

   if (todoIndex > -1) {
       todos.splice(todoIndex, 1)
   }
}


//add the DOM element to the page
  const getDom = function(todo){
    const noteEl = document.createElement('div')
      // set up the checkbox for the to do app
       const  checkBox = document.createElement("input")
      checkBox.setAttribute("type", "checkBox")
      noteEl.appendChild(checkBox) 
      checkBox.checked = todo.completed
      checkBox.addEventListener("change", function(checkBox){
         toggleTodo(todo.id)
         saveTodo(todos)
         filtered(todos, filter)    
      })
      
      

      // setup and append  the text for the todo app
      const textEl =document.createElement("a")
      textEl.textContent = todo.text
      textEl.setAttribute("href",`edit.html#${todo.id}`)
      noteEl.appendChild(textEl)
       const removeButton = document.createElement("button")
      removeButton.textContent ="X"
  

   
      
      noteEl.appendChild(removeButton)
      removeButton.addEventListener("click", function(){
         removeBtn(todo.id)
         saveTodo(todos) 
         filtered(todos,filter)
      })


       return noteEl
}
const getSummaryDOM = function(incompleteTodos){
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    return summary
}

const filtered =function(todos,filter){
   let filtertext = todos.filter(function(todo){
      return todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
        
   })
   filtertext = filtertext.filter(function(todo){
      if(filter.hideCompleted){
         return !todo.completed
   } else{
      return true}
   })

   document.querySelector("#todos").innerHTML =""
   filtertext.forEach(function (todo) {
     
      document.querySelector('#todos').appendChild(getDom(todo))
  })
  const incompleteTodos = filtertext.filter(function(todo){
   return !todo.completed
})
 
getSummaryDOM(incompleteTodos)

}
 