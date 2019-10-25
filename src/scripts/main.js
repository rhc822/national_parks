const parksListOnDom = document.querySelector(".parksListEmptyHolderOnIndex");

/* createVisitedParksTemplateOnDom function takes each individual park object from the fetch call, takes only the park name and state, formats that info as a string, and puts that info in the holding place on the DOM. */

function createVisitedParksTemplateOnDom(parkObject) {
    parksListOnDom.innerHTML += `
        <article class="visited">
        <h3>${parkObject.name}</h3>
        <p>${parkObject.state}</p>
        </article>
    `
}

function createNotVisitedParksTemplateOnDom(parkObject) {
    parksListOnDom.innerHTML += `
        <article class="not_visited">
        <h3>${parkObject.name}</h3>
        <p>${parkObject.state}</p>
        </article>
    `
}

/* This fetch takes the info from the "API", parses it, and loops through each park running the createVisitedParksTemplateOnDom function each time. */

fetch("http://localhost:8088/parks") //Get API info
    .then(parks => parks.json()) //parse the data
    .then(parsedParks => {
        parsedParks.forEach(parkObject => { //Run a loop for each object
            if (parkObject.visited === true) {
                createVisitedParksTemplateOnDom(parkObject) //that runs this function
            } else {
                createNotVisitedParksTemplateOnDom(parkObject)
            }
            
        })

    })