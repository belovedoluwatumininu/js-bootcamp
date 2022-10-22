
let todos = []

fetchTodo(todos)
console.log(todos)
const filter = {
   searchText: '',
   hideCompleted: false
}
 
// filtertext.forEach(function(todo){
//     if (!todo.completed){
//         let text = document.createElement("p")
//         text.textContent = `${todo.text}`
//         document.querySelector("body").appendChild(text)
//     }
// })
   
 
 filtered(todos,filter)


document.querySelector("#add-todo").addEventListener("input",function(e){
   filter.searchText=e.target.value 
   filtered(todos, filter)
})


   document.querySelector("#input").addEventListener("submit", function(e){
      let id = uuidv4()
      e.preventDefault()
      todos.push({
         id:id,
         text: e.target.elements.firstName.value,
         completed: false
      }) 
     
      saveTodo(todos)
      filtered(todos,filter)
      location.assign(`edit.html#${id}`)
      e.target.elements.value = ""
   })
   document.querySelector("#hide-completed").addEventListener("change", function(e){
      filter.hideCompleted = e.target.checked
      filtered(todos, filter)
   })

 
    console.log(todos)