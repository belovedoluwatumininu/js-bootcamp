const notes = [{
    title:"My next trip",
    body:" I sould love to go to spain"
},{
   title:"habbits to work on",
   body:"Exercising, Eating better"
},{
   title:"office modification",
   body:"Get a new seat"
}]








let sortNote = function(note){
   note.sort(function(a, b){
      if (a.title.toLowerCase() < b.title.toLowerCase()){
         return -1
      }else if(b.title.toLowerCase() < a.title.toLowerCase()){
         return 1
      }else{
         return 0
      }
   })
       

   
}

sortNote(notes)

console.log(notes)



// let findNote = function(notes, query){
//    return notes.filter(function(note,index){
//       const noteTitle = note.title.toLowerCase().includes(query.toLowerCase())
//       const noteBody = note.body.toLowerCase().includes(query.toLowerCase())
//       return noteTitle || noteBody
//    })
  
// }


// console.log(findNote(notes, "ne"))






// let find = function(notes , noteTitle){
//    let result = notes.findIndex(function(note){
//         return note.title === noteTitle
//     })
//     return notes[result]
// }

// let titleSearch = find(notes,"office modification" )
// console.log(titleSearch)



// let result = note.findIndex(function(note, index){
//     return note.title === note
// })



// console.log(result)









// note.splice(1,1,"this is my new note")
// note.pop()
// note.push("new note")2

// console.log(note.length)
// console.log(note)



// for(let count = 0; count<=100; count+=3){
//     console.log(count)

// }