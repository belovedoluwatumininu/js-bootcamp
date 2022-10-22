const paragragh = document.createElement("p")
paragragh.textContent = "This is a new text from javascript."
document.querySelector("body").appendChild(paragragh)


let notes =[]


let note = function(notes){
    
    document.querySelector("#new-note").addEventListener("submit", function(e){
        e.preventDefault()
       
        let newNote = document.createElement("p")
        newNote.textContent = e.target.elements.notte.value
        document.querySelector("#created-note").appendChild(newNote)
        notes.push(newNote)
        console.log(notes)
    })



        



}

note(notes)



// document.querySelector("button").addEventListener("click", function(button){
//     button.target.textContent="this button has been clicked"
// })


