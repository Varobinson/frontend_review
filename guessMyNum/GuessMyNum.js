
let secretNumber = Math.ceil(Math.random()*20);
let score = 20;
let HighScore = Number(document.querySelector('.highscore').textContent);

const displayMessage = (message) =>{
    document.querySelector('.message').textContent = message;
}
const setSecretNumber =(value)=>{
    document.querySelector('.number').textContent = value;
}
const setBackground = (color)=>{
    document.querySelector('body').style.backgroundColor = color;
}
const resetGuess =()=>{
    document.querySelector('.guess').value = null;
}
const updateHighScore =()=>{
    document.querySelector('.highscore').textContent = score;
}
const setScore = (value) =>{
    document.querySelector('.score').textContent = value;
}

const checkClick = () =>{
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) displayMessage('No Input');
    if(score > 1){
        if(guess === secretNumber){
            displayMessage('You Won!!');
            setBackground('#60b347');
            setSecretNumber(secretNumber);
            if(score > HighScore) updateHighScore();
        }
        else if(guess !== secretNumber){
            displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
            resetGuess();
            score --;
        }
    }else{
        displayMessage('You Lost');
        setBackground('red');
        setSecretNumber(secretNumber);
        score = 0;
    }
    setScore(score);
}
//listens for enter button or check click
document.querySelector('.check').addEventListener('click',checkClick);
document.querySelector('.guess').addEventListener('keydown',(e)=>{
    if(e.code === 'Enter') checkClick(e);
});
//resets game to original state
const reset = () =>{
    secretNumber = Math.ceil(Math.random()*20);
    setScore('20');
    setBackground('#222');
    displayMessage('Start guessing...');
    updateHighScore();
    setSecretNumber('?');
    score = 20;
    resetGuess();
}
// listens for again button to reset game
document.querySelector('.again').addEventListener('click', reset);