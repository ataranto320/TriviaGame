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

//grades

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// var gradedQuiz = //submission button .on('click'), function() {

// }
for (var i = 0; i < 3; i++) {
    if //correct answer for all three question {
        correctAnswers++;
    } else {
        wrongAnswers++;
    };

};

//sections
var quizContent = document.getElementById('quiz');
var resultsContent = document.getElementById('results');

//timer


