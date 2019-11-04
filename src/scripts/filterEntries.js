
import API from "./data.js"
import renderDOM from "./entriesDOM.js"

const moodFilter = () => {

    const radioButton = document.getElementsByName("moodButton")

    radioButton.forEach(button => {


        button.addEventListener("click", () => {

            const mood = event.target.value

            if (mood === "amazing") {
            

                API.getJournalEntries()
                    .then(response => {
                       const filteredResponse = response.filter(entry => entry["mood"] === "Amazing")
                        renderDOM.renderJournalEntries(filteredResponse)
                    })
            }

            if (mood === "great") {
                API.getJournalEntries()
                    .then(response => {
                       const filteredResponse = response.filter(entry => entry["mood"] === "Great")
                        renderDOM.renderJournalEntries(filteredResponse)
                    })
            }

            if (mood === "ok") {
                API.getJournalEntries()
                    .then(response => {
                       const filteredResponse = response.filter(entry => entry["mood"] === "Ok")
                        renderDOM.renderJournalEntries(filteredResponse)
                    })
            }

            if (mood === "all") {
                API.getJournalEntries()
                .then(response => renderDom.renderJournalEntries(response))

            }

            // API.getJournalEntries()
            //     .then(filteredResponse => filteredResponse.filter
            //         (mood => {
            //             let isMoodAmazing = false

            //             if (entries["mood"] === "amazing") {

            //                 isMoodAmazing = true
            //             }

            //             return isMoodAmazing

            //         }),



            // console.log("mood button working")



            //     then(renderDOM.renderJournalEntries(filteredResponse))
            //     )
        })

    })

}

export default moodFilter