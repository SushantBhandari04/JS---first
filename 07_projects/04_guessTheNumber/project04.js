let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guess');
const submit = document.querySelector('#submitGuess');
const lowOrHigh = document.querySelector('.lowOrHi')
const remaining = document.querySelector('.lastResult')
const guessSlot = document.querySelector('.guesses')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let noOfGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number.')
    }else if(guess<1){
        alert('Please enter a valid number greater than or equal to 1.')
    }else if(isNaN(guess>100)){
        alert('Please enter a valid number less than or equal to 100.')
    }else{
        prevGuess.push(guess);

        if(noOfGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

    function checkGuess(guess){
        if(guess === randomNumber){
            displayMessage(`You guessed it right!`)
            endGame();
        }
        else if(guess<randomNumber){
            displayMessage(`Guess is too low!`)
        }
        else{
            displayMessage(`Guess is too high!`)
        }
    }

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess }, `;
    noOfGuess++;
    remaining.innerHTML = `${11-noOfGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame" style="  background-color:rgb(32, 67, 109);font-size:24px; display: block; margin:0 auto; padding: 12px; color: white; border: solid black 1px; border-radius: 50px;" >New Game</button>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        noOfGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-noOfGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHigh.innerHTML = '';
        playGame = true;
    })
}
