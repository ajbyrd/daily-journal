 
export default {   

newEntry () {
    
    return {
    "id":  "",
    "date": `${document.querySelector("date-input").value}`,
    "concept": `${document.querySelector("concept-input").value}`,
    "entry": `${document.querySelector("entry-input").value}`,
    "mood": `${document.querySelector("mood-input").value}`
    }  
},


updateAPI () {
console.log(newEntry)
}

 }