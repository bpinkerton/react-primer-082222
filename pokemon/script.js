//      We need to grab the text in our input field onClick of the submit button
//      we need perform a get request to the pokemon API using fetch
//      we need to parse the results
//      we need to create elements for the results and bind them to the DOM


document.getElementById("submit-button").addEventListener("click", () => {searchPokemon()});

const API_BASE_URL = 'https://pokeapi.co/api/v2/'
const ENDPOINT = "pokemon/"

const resultsSection = document.getElementById("results")

// Call this on click of the submit button
const searchPokemon = () => {
    // locate the input element
    const input = document.getElementById("pokemon-input");
    const value = input.value;

    input.value = null;
    // value may be empty
    if(!value) {
        alert("Input must not be empty!!")
        return;
    }

    // call to the api
    //      fetch(url)
    //      fetch(url, requestOptions)
    
    fetch(`${API_BASE_URL}${ENDPOINT}${value}`)
        .then((response) => response.json()).then(data => handleResponse(data))
        .catch((response) => alert(`Error: ${response.status}`))
    // What is a Promise??? -> A guarantee that eventually a result will be present
    //      when the promise returns a value, it is a called a resolution
    //      Promise Resolution Methods
    //          .then()         : takes a callback, the callback will be invoked upon resolution of the promise
    //          .catch()        : takes a callback, the callback will be invoked upon unsuccessful resolution
    //          .finally()      : takes a callback, the callback will be invoked regardless
}

const handleResponse = (data) => {
    const {id, name, sprites: {front_shiny}, types, abilities} = data
    // <h2>ID: id  name of pokemon </h2>
    // <img> image </img>
    // <ul> types </ul>
    // <ul> abilities </ul>

    const nameAndIdElement = document.createElement("h2")
    nameAndIdElement.innerText = `ID: ${data.id} Name: ${data.name}`

    const imageElement = document.createElement("img")
    imageElement.setAttribute("src", data.sprites.front_shiny)
    // adjust the size of the image

    const typeListHeadingElement = document.createElement("h3")
    typeListHeadingElement.innerText = "Types: "
    const typesListElement = document.createElement("ul");
    types.forEach((type) => {
        const typeListItem = document.createElement("li")
        typeListItem.innerText = type.type.name
        typesListElement.appendChild(typeListItem)
    });
    
    const abilitiesListHeadingElement = document.createElement("h3")
    abilitiesListHeadingElement.innerText = "Abilities: "
    const abilitiesListElement = document.createElement("ul")
    abilities.forEach((ability) => {
        const abilityListItem = document.createElement("li")
        abilityListItem.innerText = ability.ability.name
        abilitiesListElement.appendChild(abilityListItem)
    })

    resultsSection.appendChild(nameAndIdElement)
    resultsSection.appendChild(imageElement)
    resultsSection.appendChild(typeListHeadingElement)
    resultsSection.appendChild(typesListElement)
    resultsSection.appendChild(abilitiesListHeadingElement)
    resultsSection.appendChild(abilitiesListElement)
}