const pics = ["🌬️", "🌬️", "🐦‍🔥", "🐦‍🔥", "🌊", "🌊", "🌴", "🌴", "🏔️", "🏔️", "🌨️", "🌨️", "🌵", "🌵", "🪽", "🪽"];
const shuffle = pics.sort(() => Math.random() - 0.5); // Shuffling the array

const gameContainer = document.querySelector('.game');
let attempts = 0; // Counter for attempts

const attemptsDisplay = document.createElement('div');
attemptsDisplay.style.marginTop = "20px";
attemptsDisplay.style.fontSize = "1.5em";
attemptsDisplay.style.color = "#fff";
attemptsDisplay.textContent = `Attempts: ${attempts}`;
document.querySelector('.container').appendChild(attemptsDisplay);

// Function to check matches
function checkMatch() {
    const openCards = document.querySelectorAll('.boxOpen');
    if (openCards.length === 2) {
        attempts++; // Increment attempts on every two card flips
        attemptsDisplay.textContent = `Attempts: ${attempts}`;

        if (openCards[0].innerHTML === openCards[1].innerHTML) {
            openCards[0].classList.add('boxMatch');
            openCards[1].classList.add('boxMatch');
        }

        setTimeout(() => {
            openCards.forEach((card) => card.classList.remove('boxOpen'));
        }, 500);

        // Check for win condition
        if (document.querySelectorAll('.boxMatch').length === pics.length) {
            setTimeout(() => alert(`You won in ${attempts} attempts!`), 500);
        }
    }
}

// Create the game grid
shuffle.forEach((pic) => {
    const box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = pic; 
    box.style.transform = "rotateY(180deg)"; 

    box.addEventListener('click', () => {
        if (box.classList.contains('boxOpen') || box.classList.contains('boxMatch')) {
            return; // Ignore if the card is already open or matched
        }

        box.classList.add('boxOpen');
        checkMatch();
    });

    gameContainer.appendChild(box); 
});
