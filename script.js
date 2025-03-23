const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;
let cardDiv = document.getElementById('flashcard')
let text = document.getElementById("card-content")

// Start with this function to simply display the card
function displayCard() {
    let currCard = flashcards[currentIndex]
    let front = currCard.term

    text.innerText = front
    cardDiv.appendChild(text)
    showingTerm = true
}

// The rest of the code you will write is apart of event listeners
function flipCard() {
    
    if (showingTerm === true) {
        showingTerm = false;
        text.innerText = flashcards[currentIndex].definition
        
    } else {
        showingTerm = true;
        text.innerText = flashcards[currentIndex].term
    }

}

function next() {
    if (++currentIndex >= flashcards.length) {
        currentIndex = 0
    }
    displayCard();
}

function prev() {
    if (--currentIndex < 0) {
        currentIndex = flashcards.length - 1
    }
    displayCard();
}

function addCard() {
    flashcards.push({
        term: document.getElementById("new-term").value,
        definition: document.getElementById("new-definition").value
    });
    document.getElementById("new-term").value = ""
    document.getElementById("new-definition").value = ""
}

// This line will display the card when the page is refreshed
window.onload = displayCard;
cardDiv.addEventListener('click', ()=> flipCard())
document.getElementById("next-btn").addEventListener('click', ()=> next())
document.getElementById("prev-btn").addEventListener('click', ()=> prev())
document.getElementById("add-card-btn").addEventListener('click', ()=> addCard())
