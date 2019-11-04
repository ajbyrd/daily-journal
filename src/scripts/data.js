import newEntry from "./saveName.js"

export default {

  getJournalEntries() {
    return fetch("http://localhost:3000/entries")
      .then(response => response.json())
  },

  postJournalEntry (newEntry) {
    return fetch("http://localhost:3000/entries", { // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    })
  }
}