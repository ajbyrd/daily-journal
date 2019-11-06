/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import renderDOM from "./entriesDOM.js"
import API from "./data.js"
import newEntry from "./saveName.js"
import moodFilter from "./filterEntries.js"

API.getJournalEntries()
.then(response => renderDOM.renderJournalEntries(response))

newEntry()

moodFilter()
