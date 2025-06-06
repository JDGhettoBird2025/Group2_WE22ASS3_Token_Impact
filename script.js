let score = 0;

//Memes and their correct answers
const memes = [
    {
        image: 'images/Meme1.png',
        options: [
            'Electricity', 
            'Jacob Zuma', 
            'Eet Lepel', 
            'Entertainment'],
        correct: 0 
    },
    {
        image: 'images/Meme2.jpg',
        options: [
            'Bafana Bafana', 
            'When you come home from outside and your mom says you cant play outside anymore', 
            'Durban Curry is the best', 
            'Bobotie takes the top spot for the best foods in South Africa'],
        correct: 1    
    },
    {
        image: 'images/Meme3.jpg',
        options: [
            'When you realize South Africa still has no loadshedding schedule.', 
            'When you get out after writing the worst exam ever.', 
            'When youve been standing in the queue for 2 hours', 
            'When you see your friend talking to your crush.'],
        correct: 1
    },
    {
        image: 'images/Meme4.jpg',
        options: [
            'When you get your paycheck and forget you have bills.', 
            'When the teacher says "class dismissed" 10 minutes early.', 
            'When Eskom actually brings the power back.', 
            'When its Friday and youre finally free.'],
        correct: 3 
    },
    {
        image: 'images/Meme5.jpg',
        options: [
            'When you forget your homework and the teacher starts checking.', 
            'Waiting for Eskom to bring back the power.', 
            'Hiding from your responsibilities.', 
            'When your mom says "Im not angry, just disappointed."'],
        correct: 0 
    },
];

let lastMeme = null;   

//Loading the memes in a randomized pattern aswell as not to show same meme back to back
function loadNewMeme() {
    let randomMeme;

    do {
        randomMeme = memes[Math.floor(Math.random() * memes.length)];
    } while (randomMeme === lastMeme);

    lastMeme = randomMeme;
    
    console.log(randomMeme);

    document.getElementById('meme-image').src = randomMeme.image;
    const options = document.querySelectorAll('.option');
    randomMeme.options.forEach((option, index) => {
        options[index].textContent = option;
    });

    window.correctAnswer = randomMeme.correct;
}


function checkAnswer(selected) {
    selected = Number(selected);
    const feedbackText = document.getElementById('feedback-text');
    const scoreDisplay = document.getElementById('score');

    if (selected === window.correctAnswer) {
        score++;
        feedbackText.textContent = 'Correct!';
        feedbackText.style.color = 'green';
    } else {
        feedbackText.textContent = 'Wrong! Try again.';
        feedbackText.style.color = 'red';
    }

    scoreDisplay.textContent = 'Score: ' + score;
    setTimeout(loadNewMeme, 1000);
}

// Add tokens when the game ends
function rewardPlayerWithTokens(earnedTokens) {
    let tokens = parseInt(localStorage.getItem("tokens")) || 0;
    tokens += earnedTokens;
    localStorage.setItem("tokens", tokens);
}


function startGame() {
    score = 0;
    document.getElementById('score').textContent = 'Score: 0';
    document.getElementById('start-btn').style.display = 'none';
    loadNewMeme();
}

window.onload = function() {
    document.getElementById('start-btn').style.display = 'block';
};
