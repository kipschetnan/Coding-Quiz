var startScreenEl = document.getElementById('startScreen');
var sectionEL = document.getElementById('section');
var q1El = document.getElementById('q1');
var q2El = document.getElementById('q2');
var q3El = document.getElementById('q3');
var q4El = document.getElementById('q4');
var q5El = document.getElementById('q5');
var endScreenEl = document.getElementById('endScreen');
var result1El = document.getElementById('result1');
var result2El = document.getElementById('result2');
var result3El = document.getElementById('result3');
var result4El = document.getElementById('result4');
var result5El = document.getElementById('result5');
var timeEl = document.getElementById('time');
var startQuizEl = document.getElementById('startQuiz');
var outOfTimeEl = document.getElementById('outOfTime');
var q1Btn1El = document.getElementById('q1Btn-1');
var q1Btn2El = document.getElementById('q1Btn-2');
var q1Btn3El = document.getElementById('q1Btn-3');
var q1Btn4El = document.getElementById('q1Btn-4');
var q2Btn1El = document.getElementById('q2Btn-1');
var q2Btn2El = document.getElementById('q2Btn-2');
var q2Btn3El = document.getElementById('q2Btn-3');
var q2Btn4El = document.getElementById('q2Btn-4');
var q3Btn1El = document.getElementById('q3Btn-1');
var q3Btn2El = document.getElementById('q3Btn-2');
var q3Btn3El = document.getElementById('q3Btn-3');
var q3Btn4El = document.getElementById('q3Btn-4');
var q4Btn1El = document.getElementById('q4Btn-1');
var q4Btn2El = document.getElementById('q4Btn-2');
var q4Btn3El = document.getElementById('q4Btn-3');
var q4Btn4El = document.getElementById('q4Btn-4');
var q5Btn1El = document.getElementById('q5Btn-1');
var q5Btn2El = document.getElementById('q5Btn-2');
var q5Btn3El = document.getElementById('q5Btn-3');
var q5Btn4El = document.getElementById('q5Btn-4');
var submitEl = document.getElementById('submit');
var highscoresEl = document.getElementById('highscores');
var goBackEl = document.getElementById('goBack');
var clearEl = document.getElementById('clear');

var inputEl = document.getElementById('input');
var scoreEl = document.getElementById('score');
var initialsEl = document.getElementById('initials');
let answer = false;
let score = 0;
let secondsLeft = 75;
qCount = 0;
let scores = [];


function startQuiz() {
    // timeEl.textContent('');
    startScreenEl.setAttribute('style', 'display: block;');
    startQuizEl.addEventListener('click', function() {
        startScreenEl.setAttribute('style', 'display: none;');
        quiz();
    });
}

function q1Btn1() {
    q1El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question2();
}
function q1Btn2() {
    q1El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question2();
}
function q1Btn3() {
    q1El.setAttribute('style', 'display: none;');
    answer = true;
    score += 3;
    question2();
}
function q1Btn4() {
    q1El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question2();
}
function q2Btn1() {
    q2El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question3();
}
function q2Btn2() {
    q2El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question3();
}
function q2Btn3() {
    q2El.setAttribute('style', 'display: none;');
    answer = true;
    score += 3;
    question3();
}
function q2Btn4() {
    q2El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question3();
}
function q3Btn1() {
    q3El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question4();
}
function q3Btn2() {
    q3El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question4();
}
function q3Btn3() {
    q3El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question4();
}
function q3Btn4() {
    q3El.setAttribute('style', 'display: none;');
    answer = true;
    score += 3;
    question4();
}
function q4Btn1() {
    q4El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question5();
}
function q4Btn2() {
    q4El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question5();
}
function q4Btn3() {
    q4El.setAttribute('style', 'display: none;');
    answer = true;
    score += 3;
    question5();
}
function q4Btn4() {
    q4El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    question5();
}
function q5Btn1() {
    q5El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    endScreen();
}
function q5Btn2() {
    q5El.setAttribute('style', 'display: none;');
    secondsLeft -= 15;
    endScreen();
}
function q5Btn3() {
    q5El.setAttribute('style', 'display: none;');
    endScreen();
}
function q5Btn4() {
    q5El.setAttribute('style', 'display: none;');
    answer = true;
    score += 3;
    endScreen();
}
function clearBtn() {
    scores = [];
    initialsEl.innerHTML = '';
}
function goBackBtn() {
    highscoresEl.setAttribute('style', 'display: none;');
    score = 0;
    startQuiz();
}
function submitBtn() {
        
    endScreenEl.setAttribute('style', 'display: none;');
    highscores();
    
}


function question1() {
    qCount += 1;
    q1El.setAttribute('style', 'display: block;');

    q1Btn1El.removeEventListener('click', q1Btn1);
    q1Btn1El.addEventListener('click', q1Btn1);

    q1Btn2El.removeEventListener('click', q1Btn2);
    q1Btn2El.addEventListener('click', q1Btn2);

    q1Btn3El.removeEventListener('click', q1Btn3);
    q1Btn3El.addEventListener('click', q1Btn3);

    q1Btn4El.removeEventListener('click', q1Btn4);
    q1Btn4El.addEventListener('click', q1Btn4);
}

function question2() {
    qCount += 1
    if(answer === true) {
        result1El.innerHTML = 'Correct!';
    } else if(answer === false) {
        result1El.innerHTML = 'Incorrect!';
    }

    answer = false;

    q2El.setAttribute('style', 'display: block;');

    q2Btn1El.removeEventListener('click', q2Btn1);
    q2Btn1El.addEventListener('click', q2Btn1);

    q2Btn2El.removeEventListener('click', q2Btn2);
    q2Btn2El.addEventListener('click', q2Btn2);

    q2Btn3El.removeEventListener('click', q2Btn3);
    q2Btn3El.addEventListener('click', q2Btn3);

    q2Btn4El.removeEventListener('click', q2Btn4);
    q2Btn4El.addEventListener('click', q2Btn4);
}

function question3() {
    qCount += 1;
    if(answer === true) {
        result2El.innerHTML = 'Correct!';
    } else if(answer === false) {
        result2El.innerHTML = 'Incorrect!';
    }

    answer = false;

    q3El.setAttribute('style', 'display: block;');

    q2Btn1El.removeEventListener('click', q3Btn1);
    q3Btn1El.addEventListener('click', q3Btn1);

    q3Btn2El.removeEventListener('click', q3Btn2);
    q3Btn2El.addEventListener('click', q3Btn2);

    q2Btn3El.removeEventListener('click', q3Btn3);
    q3Btn3El.addEventListener('click', q3Btn3);

    q2Btn4El.removeEventListener('click', q3Btn4);
    q3Btn4El.addEventListener('click', q3Btn4);
}

function question4() {
    qCount += 1;
    if(answer === true) {
        result3El.innerHTML = 'Correct!';
    } else if(answer === false) {
        result3El.innerHTML = 'Incorrect!';
    }

    answer = false;

    q4El.setAttribute('style', 'display: block;');

    q4Btn1El.removeEventListener('click', q4Btn1);
    q4Btn1El.addEventListener('click', q4Btn1);

    q4Btn2El.removeEventListener('click', q4Btn2);
    q4Btn2El.addEventListener('click', q4Btn2);

    q4Btn3El.removeEventListener('click', q4Btn3);
    q4Btn3El.addEventListener('click', q4Btn3);

    q4Btn4El.removeEventListener('click', q4Btn4);
    q4Btn4El.addEventListener('click', q4Btn4);
}

function question5() {
    qCount += 1;
    if(answer === true) {
        result4El.innerHTML = 'Correct!';
    } else if(answer === false) {
        result4El.innerHTML = 'Incorrect!';
    }

    answer = false;

    q5El.setAttribute('style', 'display: block;');

    q5Btn1El.removeEventListener('click', q5Btn1);
    q5Btn1El.addEventListener('click', q5Btn1);

    q5Btn2El.removeEventListener('click', q5Btn2);
    q5Btn2El.addEventListener('click', q5Btn2);

    q5Btn3El.removeEventListener('click', q5Btn3);
    q5Btn3El.addEventListener('click', q5Btn3);

    q5Btn4El.removeEventListener('click', q5Btn4);
    q5Btn4El.addEventListener('click', q5Btn4);
}

function endScreen() {
    // timeEl.textContent('');
    qCount += 1;
    if(answer === true) {
        result5El.innerHTML = 'Correct!';
    } else if(answer === false) {
        result5El.innerHTML = 'Incorrect!';
    }

    endScreenEl.setAttribute('style', 'display: block;');

    scoreEl.innerHTML = score;
    submitEl.removeEventListener('click', submitBtn);
    submitEl.addEventListener('click', submitBtn);


}

function highscores() {
    console.log('here')
   
    var li = document.createElement("li");

    highscoresEl.setAttribute('style', 'display: block;');

    const theScore = {
        initials: inputEl.value,
        score1: score
    };

    scores.push(theScore);

    console.log("We have ", scores.length);

    for(var i = 0; i < scores.length; i++) {
        const score = scores[i];
        
        li.innerHTML = `${i+1}. ${score.initials} - ${score.score1}`;
        initialsEl.appendChild(li);
        //initialsEl.innerHTML = `${i+1}. ${score.initials} - ${score.score}`;
    }
    clearEl.removeEventListener('click', clearBtn);
    clearEl.addEventListener('click', clearBtn);

    goBackEl.removeEventListener('click', goBackBtn);
    goBackEl.addEventListener('click', goBackBtn);

    

}

function quiz () {
    secondsLeft = 75;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if(secondsLeft <= 0 && qCount <= 5)  {
            secondsLeft = 0;
            timeEl.textContent = secondsLeft;
            clearInterval(timerInterval);
            
            q1El.setAttribute('style', 'display: none;');
            q2El.setAttribute('style', 'display: none;');
            q3El.setAttribute('style', 'display: none;');
            q4El.setAttribute('style', 'display: none;');
            q5El.setAttribute('style', 'display: none;');

            outOfTimeEl.setAttribute('style', 'display: block;');

            setTimeout(function() {
                outOfTimeEl.setAttribute('style', 'display: none;');
            },2000);

            setTimeout(function() {
                qCount = 0;
                startQuiz();
            },2000);
        }
        
    }, 1000);
    
    question1();
    if (answer === true) {
        result1El.textContent('Correct!')
        q2El.setAttribute('style', 'display: block;');
    }
}

startQuiz();
