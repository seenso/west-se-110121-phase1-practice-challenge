// Your code here
const url = "http://localhost:3000";

//GET characters
const getCharacters = () => {
  return fetch(url+"/characters")
  .then(response => response.json())
  .then(characters => {
    //loop through characters array and create <span></span> for each character.
    characters.forEach(character => {
      //Add each character to charBar.
      document.querySelector("div#character-bar").innerHTML += `<span class="characters" id="${character.id}">${character.name}</span>`;
    });
  });
};

const getCharDetails = () => {
  return fetch(url)
  .then(res => res.json(0))
  .then(character);
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
  //when character is clicked, show character's details.
  document.querySelector("span").addEventListener("click", () => {
    alert("CLICK")
  });
});