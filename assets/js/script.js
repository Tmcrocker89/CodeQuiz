let timeRemaining = document.getElementById("timeRemaining");
let question = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let result = document.getElementById("result");
let startQuizBtn = document.getElementById("startQuizBtn");
let questionNumber = 0;
let timerValue = 75;
let questions = 
[
    {
        question:"Which of the following is not a javascript data type",
        Option1: "1: Number",
        Option2: "2: String",
        Option3: "3: Object",
        Option4: "4: Dictonary",
        Answer: "Option4"
    },
    {
        question:"What are variables used for in JavaScript Programs?",
        Option1: "1: Storing numbers, dates, or other values",
        Option2: "2: Varying randomly",
        Option3: "3: Causing high-school algebra flashbacks",
        Option4: "4: None of the above",
        Answer: "Option1"
    },
    {
        question:"What is the correct JavaScript syntax to write 'Hello World'?",
        Option1: "1: System.out.println('Hello World')",
        Option2: "2: println ('Hello World')",
        Option3: "3: document.write('Hello World')",
        Option4: "4: response.write('Hello World')",
        Answer: "Option3"
    },
    {
        question:"Inside which HTML element do we put the JavaScript?",
        Option1: "1: <js>",
        Option2: "2: <scripting>",
        Option3: "3: <script>",
        Option4: "4: <javascript>",
        Answer: "Option3"
    }

];





function updateQuestion()
{
    if(questionNumber < questions.length)
    {
        question.innerText = questions[questionNumber].question;
        answer1.innerText = questions[questionNumber].Option1;
        answer2.innerText = questions[questionNumber].Option2;
        answer3.innerText = questions[questionNumber].Option3;
        answer4.innerText = questions[questionNumber].Option4;
        let delayReset = setInterval(function (){
            result.innerText = "";
            clearInterval(delayReset);
        },2000)
        
    }
    else
    {
        question.innerText = "Congratulations you completed the test with " + timerValue + " seconds remaining!";
        answer1.innerText = "";
        answer2.innerText = "";
        answer3.innerText = "";
        answer4.innerText = "";
        timeRemaining.innerText = "";
        let delayReset = setInterval(function (){
            result.innerText = "";
            clearInterval(delayReset);
        },2000)
    }
    

}


function startQuiz()
{
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timerValue > 1 && questionNumber < questions.length) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timeRemaining.textContent = "Time:" + timerValue;
          // Decrement `timeLeft` by 1
          timerValue--;
        } else {
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
        }
      }, 1000);

    if(questionNumber < questions.length)
    {
        question.innerText = questions[questionNumber].question;
        answer1.innerText = questions[questionNumber].Option1;
        answer2.innerText = questions[questionNumber].Option2;
        answer3.innerText = questions[questionNumber].Option3;
        answer4.innerText = questions[questionNumber].Option4;
    }
    function checkAnswer(answer)
    {
        let divId = answer.srcElement.id;
        console.log(divId);
        let divSelected = document.getElementById(divId);
        console.log(divSelected);
        if(divSelected.innerText === questions[questionNumber][`${questions[questionNumber].Answer}`])
        {

            result.innerText = "Correct!";
            questionNumber++
            updateQuestion()
        }
        else
        {
            result.innerText = "Incorrect!";
            timerValue -= 10;
            questionNumber++
            updateQuestion()
        } 
    }

    answer1.onclick = function(event)
    {
        checkAnswer(event);

    }
    answer2.onclick = function(event)
    {
        checkAnswer(event);

    }
    answer3.onclick = function(event)
    {
        checkAnswer(event);

    }

    answer4.onclick = function(event)
    {
        checkAnswer(event);

    }
}

startQuizBtn.onclick = function(){
    startQuiz();
}
