


const entryManager = {

  makeJournalEntryComponent(journalObj) {
    // Create your own HTML structure for a journal entry
    return `
      <section>
        <h3>${journalObj.concept}</h3>
        <p>${journalObj.entry}</p>
        <p>${journalObj.mood}</p>
        <p>${journalObj.date}</p>
        
      </section>
    `
  }
}


export default entryManager