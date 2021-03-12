var guesses = 1;
console.log(`Guess at the beginning of the program: ${guesses}`)
const numberToGuess = Math.floor(Math.random() * 20 + 1);
console.log(numberToGuess);
let result = document.getElementById('result');
function playGame(event) {
    event.preventDefault();
    // Grab user input
    let guessedNumber = document.getElementById('guessedNumber').value;
    if (guessedNumber >= 0 && guessedNumber <= 20) {
        // console.log(guessedNumber);
        if (guesses <= 5) {
            if (guessedNumber == '') {
                // console.log('Please enter a number to play...');
                result.innerHTML = '<p>Please enter a number to play...</p>';
                result.classList.add('errorMessageBorder');
            } else if (guessedNumber == numberToGuess) {
                // console.log(`Congratulations! The number is indeed ${numberToGuess}`);
                result.innerHTML = '<p>Congrats, you guessed the right number which was ' + numberToGuess + ' in ' + guesses + ' attempts.</p>';
                if (result.classList.contains('errorMessageBorder')) {
                    result.classList.remove('errorMessageBorder');
                }
                result.classList.add('correctMessageBorder');
                return;
            } else {
                // console.log(`Incorrect guess! Please try again...`);
                result.innerHTML = '<p>Oops, wrong guess. Please try again...</p>';
                result.classList.add('errorMessageBorder');
            }
            guesses++;
            console.log(guesses);

        } else {
            // Re-initialize everything
            // console.log(`Oh, you've reached your guess limit!`);
            guesses = 1;
            console.log(`Guesses at the end of the program: ${guesses}`);
            result.innerHTML = '<p>Ooh, you\'ve reached the your guess limit!</p>';
            result.classList.add('errorMessageBorder');
        }

    } else {
        result.innerHTML = '<p>Please Enter a number between 0 and 20</p>';
        result.classList.add('errorMessageBorder');
        return;
    }
}

function openGame() {
    let playerName = document.getElementById('playerName');
    let viewGame = document.getElementById('viewGame');
    let welcome = document.getElementById('welcome');
    let form = document.getElementsByTagName('form');
    if (playerName.value == '') {
        // alert('Input field cannot be empty!');
        welcome.innerHTML = '<p class="errorMessageBorder mb-4">Input field cannot be empty</p>';
    } else {
        // alert(`Hi, ${playerName}! `);

        welcome.innerHTML = '<p>Hi, ' + playerName.value + '. You are now ready to play! </p>';
        if (form[0].classList.contains('hidden')) {
            form[0].classList.remove('hidden');
        }
        playerName.classList.add('hidden');
        viewGame.classList.add('hidden');
    }
}
