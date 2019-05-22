// questions
var myQuestions = [
    {
        question: "Who shot first?",
        answers: {
            a: 'Greedo',
            b: 'Han Solo',
            c: 'Boba Fett'
        },
        correctAnswer: 'b'
    },

    {
        question: "What year is Avengers Endgame set in?",
        answers: {
            a: '2014',
            b: '2019',
            c: '2023'
        },
        correctAnswer: 'c'
    },

    {
        question: "Where is Forrest Gump from?",
        answers: {
            a: 'Alabama',
            b: 'South Carolina',
            c: 'Georgia'
        },
        correctAnswer: 'a'
    }
];

//radio buttons for answer selection
//form action
//type="radio"

//variables

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;
var output = [];
var answers;

//start game

function startGame() {
    unAnswered = 3
    answers = " "
    correctAnswers = 0
    wrongAnswers = 0
    timer = 0
    document.getElementById("right").innerHTML = ("Right") + correctAnswers;
    document.getElementById("wrong").innerHTML = ("Wrong") + wrongAnswers;
    document.getElementById("unanswered").innerHTML = ("Didn't Answer") + unAnswered;
    // startGame("#start").on('click')
    // need start button function
};

//gardes

function gradedQuiz () {
    $("#submit-button").on('click')
    // myQuestions + quizAnswers === userAnswers;
}
for (var i = 0; i < myQuestions.length; i++) {
    if (myQuestions[i] === true) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    };

};

//countdown timer

var countDown = thirty (":30").getTime();
var timer = setInterval (function(){
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    document.getElementById("timer").innerHTML = seconds + "s";
    if (timer < 0) {
        clearInterval("timer");
        document.getElementById("timer").innerHTML = "Finished";
    }
}, 1000);

//sections
// var quizQuestions = document.getElementById('quiz');
// var quizAnswers = document.getElementById('answers');

// function quizQuestions()



// for (var j = 0; j < myQuestions.length; i++) {
//     answers = [];
//     for (letter in myQuestions[j].answers) {
//         answers.push();
//     }
//     output.push();
// }

// gradedQuiz.innerHTML = output.join(' ');
// function quizAnswers()

//timer



// function timer(duration, display) {
//     var countDown = duration, minute, seconds;
//     setInterval(function(){
//         minute = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var oneMinute = 60 * 1,
//     display = $('#time');
//     timer(oneMinute, display);
// }



// when a user clicks the submit button we want to get the answers 
// go through loop answers and see if they are correct or not