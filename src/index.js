// Your code here
const url = "http://localhost:3000";
const charName = document.getElementById("name");
const charImg = document.getElementById("image");
const charVotes = document.getElementById("vote-count");

const getCharDetails = (character) => {
  return fetch(url+`/characters/${character.id}`)
  .then(res => res.json())
  .then(charObj => {// charObj gives us one character
    console.log("getCharDetails has been invoked!");

    //add Character name, image and vote count to detail
    charName.innerText = charObj.name;
    charImg.src = charObj.image;
    charVotes.innerText = charObj.votes;
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
  fetch(url+"/characters")
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





//----------------------------------REVIEW NOTES w MARC BELOW--------------------------------------//
/*

// move <script> tag up and added defer keyword in index.html

const characterAPI  = "http://localhost:3000/characters";
const characterBar = document.getElementbyId('character-bar');
const detailedInfo = document.getElementById("detailed-info");
const namePar = document.getElementById("name");
const image = document.getElementById("image");
const voteCount = document.getElementByID("vote-count");
const voteForm = document.getElementById("vote-form");

let currentChar; //creating this variable and everything associated w it is not the best.
//handle votes
voteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // ONE WAY TO GET FORM INPUT VALUE: e.target.votes.value
  currentChar.votes += e.target.votes.value;
  showInfo(currentCharacter)
})

//GET characters
fetch(characterAPI)
  .then(res => res.json()) //returns arr of character objects
  .then(renderCharacters);

  function renderCharacters(characters) {
    characters.forEach(renderCharacter);
  }

  function renderCharacter(character) {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character.name;
    characterBar.append(characterSpan);

    characterSpan.addEventListener("click", () => {
      // console.log(character.name); //prints character name in console
      currentCharacter = character;
      showInfo(character);
    })
  }


function showInfo(character) {
  namePar.innerText = character.name;
  image.src = character.image;
  voteCount.innerText = character.votes;
}






*/