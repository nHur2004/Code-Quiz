import questionsArray from './array';

var startButton = document.getElementById("startButton");
var mainContainer = document.getElementById("mainContainer");


var startQuiz = function () {
    mainContainer.textContent = "";

}

startButton.addEventListener("click", startQuiz())
