var timerEl = document.getElementById("countdown");
var startButton = document.getElementById("start-quiz");
var sectionStart = document.getElementById("quizText");
var sectionQuestion = document.getElementById("questions");
var sectionResult = document.getElementById("results");

var timeLeft = 10;
var timeInterval;

// Timer that counts down from 10
function countdown() {
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "";

      // Game over
      endQuiz();
    }
  }, 1000);
}

function startQuiz() {
  //hide the start screeen
  sectionStart.style.display = "none";
  //show the question screen
  sectionQuestion.style.display = "block";
  //start my clock
  countdown();
  //display nextQuiz Question
  //displayQuestion();
}

function endQuiz() {
  // Use `clearInterval()` to stop the timer
  clearInterval(timeInterval);
  //hide the question section
  sectionQuestion.style.display = "none";
  //show the result section
  sectionResult.style.display = "block";
  //alert message game over
  alert("Game Over!");
}
//add event listiner
startButton.addEventListener("click", startQuiz);
