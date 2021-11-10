// Your code here
const url = "http://localhost:3000";

const getCharDetails = (character) => {
  return fetch(url+`/characters/${character.id}`)
  .then(res => res.json())
  .then(data => {
    console.log("getCharDetails has been invoked!");
    console.log("DATA",data);
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

document.addEventListener('DOMContentLoaded', () => {
  //GET characters
  return fetch(url+"/characters")
  .then(response => response.json())
  .then(characters => {
    //loop through characters array and create <span></span> for each character.
    characters.forEach(character => {
      //Add each character to charBar.
      let charNode = document.createElement("span");
      charNode.innerText = character.name;
      document.querySelector("div#character-bar").appendChild(charNode);

      //Add event listener to each character so it shows character details when clicked
      charNode.addEventListener("click", () => {
        console.log("Character has been clicked!");
        getCharDetails(character);
      });
    
    });
  });
});

//when vote is added, accumulate total votes
// document.getElementById("#votes-form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   alert("I VOTED")
// });