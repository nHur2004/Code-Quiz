var highScores = [];

// create variables from IDs
var startButton = document.getElementById("startButton");
var mainContainer = document.getElementById("mainContainer");

// questions array
const questionsArray = [
    [
        question = "What does JS stand for?",
        answer = "Javascript",
        choices = [
            option1 = "Javascript",
            option2 = "JavaSipped",
            option3 = "Jelly Sandwich",
            option4 = "All of the Around"
        ]
    ],
    [
        question = "How do you pronounce SCSS?",
        answer = "Sass",
        choices = [
            option1 = "Skss",
            option2 = "Sass",
            option3 = "Ssss",
            option4 = "Salamander"
        ]
    ],
    [
        question = "How can plain HTML be styled?",
        answer = "All of the above",
        choices = [
            option1 = "CSS",
            option2 = "A Style Attribute",
            option3 = "JS",
            option4 = "All of the above"
        ]
    ],
    [
        question = "How are these answers stored?",
        answer = "In a JS Array",
        choices = [
            option1 = "Made via JS.",
            option2 = "In a JS Array",
            option3 = "Imported Array",
            option4 = "Hidden HTML displays"
        ]
    ],
    [
        question = "If you get a question wrong, how many milliseconds will this clock go down?",
        answer = "100000ms",
        choices = [
            option1 = "1000ms",
            option2 = "10000ms",
            option3 = "100000ms",
            option4 = "1000000ms"
        ]
    ]
]

var startQuiz = function () {
    mainContainer.textContent = "";

}

startButton.addEventListener("click", startQuiz())
