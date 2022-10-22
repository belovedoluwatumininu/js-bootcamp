let noteTitle1 = document.querySelector("#noteTitle")
let noteBody1 = document.querySelector("#noteBody")
let removeButton = document.querySelector("#removeButton")
let save = document.querySelector("#savenot")
const noteId = location.hash.substring(1)
const notes = getSavedNotes()

const note = notes.find(function(note){
    return noteId === note.id
})
if (note === undefined){
  location.assign("index.html")
}

noteTitle1.value = note.title

noteBody1.value = note.body
noteTitle1.addEventListener("input", function(e){
   note.title = e.target.value
   saveNotes(notes)
  })
noteBody1.addEventListener("input",function(e){
    note.body = e.target.value
    saveNotes(notes)
  })

  removeButton.addEventListener("click", function(){
    removeNote(note.id)
    saveNotes(notes)
    location.assign("index.html")
  }) 
  save.addEventListener("click", function(){
    saveNotes(notes)
    location.assign("index.html")
    renderNotes()

  })