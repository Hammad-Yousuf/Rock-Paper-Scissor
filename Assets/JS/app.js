let userScore = 0;
let computerScore = 0;
var userScore_span = document.getElementById('user-score');
var computerScore_span = document.getElementById('computer-score');
var result_p = document.querySelector('.result > p');
var rock = document.getElementById('r');
var paper = document.getElementById('p');
var scissor = document.getElementById('s');

function convertLetter(letter) {
    if(letter === 'r'){return 'Rock'};
    if(letter === 'p'){return 'Paper'};
    if(letter === 's'){return 'Scissor'};
}

function getComputerChoice() {
    let moves = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random()*3);
    return moves[randomNumber];
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'pr':
        case 'sp':
        case 'rs':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'pr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice, computerChoice);
    }
}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    let smallUser = ('User===>').fontsize('5px').sub();
    let smallComp = ('Computer===>').fontsize('5px').sub();
    result_p.innerHTML= smallUser + convertLetter(userChoice) +"&nbsp;&nbsp;&nbsp;"+ smallComp + convertLetter(computerChoice) + "&nbsp;&nbsp;&nbsp;" + '. User Win';
    document.getElementById(userChoice).classList.add('green');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green')}, 400 );
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    let smallUser = ('User===>').fontsize('5px').sub();
    let smallComp = ('Computer===>').fontsize('5px').sub();
    result_p.innerHTML= smallUser + convertLetter(userChoice) +"&nbsp;&nbsp;&nbsp;"+ smallComp + convertLetter(computerChoice) + "&nbsp;&nbsp;&nbsp;" + '. User Lose';
    document.getElementById(userChoice).classList.add('red');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red')}, 400 );
}
function draw(userChoice, computerChoice) {
    result_p.innerHTML = "It's a Draw";
    document.getElementById(userChoice).classList.add('gray');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray')}, 400 );
}
function getUserChoice() {
    rock.addEventListener('click',function() {
        game('r');
    });
    paper.addEventListener('click', function() {
        game('p');
    });
    scissor.addEventListener('click', function() {
        game('s');
    })
}
getUserChoice();