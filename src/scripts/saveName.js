
/* let date = document.querySelector("#dateField").value
let concept = document.querySelector("#conceptField").value
let entry = document.querySelector("#entryField").value
let mood = document.querySelector("#moodField").value
 

     
const journalObj = factoryFunction (date, concept, entry, mood) 

     newEntry = {
            "date": date,
            "concept": concept,
            "entry": entry,
            "mood": mood
        }


export default journalObj */


import API from "./data.js"
import renderDOM from "./entriesDOM.js"


const newEntry = () => {
      document.getElementById("journalButton").addEventListener("click", () => {

        const date = document.querySelector("#dateField").value
        const concept = document.querySelector("#conceptField").value
        const entry = document.querySelector("#entryField").value
        const mood = document.querySelector("#moodField").value

        const journalObj = {date, concept, entry, mood}

        
        API.postJournalEntry(journalObj)
            .then(API.getJournalEntries)
            .then(renderDOM.renderJournalEntries)
      })
  }

  export default newEntry
