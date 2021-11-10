// Your code here
const url = "http://localhost:3000";

const getCharDetails = (character) => {
  return fetch(url+`/characters/${character.id}`)
  .then(res => res.json())
  .then(charObj => {
    console.log("getCharDetails has been invoked!");
    console.log("DATA",charObj);
    //add Character name, image and vote count to detail
    const name = charObj.name;
    const img = charObj.image;
    const votes = charObj.votes;

    //reassign name
    document.getElementById("#name").innerText = name;

    //reassign img
    const imgSrc = document.getElemetnById();
    imgSrc.src = img;

    //reassign votes
    document.getElementById("#voteCount").innerText = votes;
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
document.getElementById("#votes-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("I VOTED")
});