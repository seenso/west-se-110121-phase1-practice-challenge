// Your code here
const url = "http://localhost:3000";

//GET characters
const getCharacters = () => {
  return fetch(url+"/characters")
  .then(response => response.json())
  .then(characters => {
    //loop through characters array and create <span></span> for each character.
    characters.forEach(character => {
      let name = character.name;
      //Add each character to charBar.
      document.querySelector("div#character-bar").innerHTML += `<span>${name}</span>`;
    });

    console.log("CHARBAR", document.querySelector("div#character-bar").innerHTML);
  });
};

const handleVote = () => {
  return fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
  });
};

document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  getCharacters();
});