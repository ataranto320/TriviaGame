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

//grades

var correctAnswer = 0;
var wrongAnswers = 0;
var unAnswered = 0;

var gradedQuiz = $("#submit-button").on('click'), function() {
    myQuestions + quizAnswers === total;
}
for (var i = 0; i < myQuestions.length; i++) {
    if (myQuestions[i] === true) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    };

};

//sections
var quizQuestions = document.getElementById('quiz');
var quizAnswers = document.getElementById('answers');

function quizQuestions()

var output = [];
var answers;

for (var j = 0; j < myQuestions.length; i++) {
    answers = [];
    for (letter in myQuestions[j].answers) {
        answers.push();
    }
    output.push();
}

gradedQuiz.innerHTML = output.join(' ');
function quizAnswers()

//timer

var countDown 


// when a user clicks the submit button we want to get the answers 
// go through loop answers and see if they are correct or not