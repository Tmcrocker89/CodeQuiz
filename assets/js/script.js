let timeRemaining = document.getElementById("timeRemaining");
let question = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let result = document.getElementById("result");
let answersDiv = document.getElementById("answers");
let startQuizBtn = document.getElementById("startQuizBtn");
let initials = document.getElementById("textBox");
let questionNumber = 0;
let timerValue = 75;
let scores = [];
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

        question.textContent = questions[questionNumber].question;
        answer1.textContent = questions[questionNumber].Option1;
        answer2.textContent = questions[questionNumber].Option2;
        answer3.textContent = questions[questionNumber].Option3;
        answer4.textContent = questions[questionNumber].Option4;
        let delayReset = setInterval(function (){
            result.textContent = "";
            clearInterval(delayReset);
        },2000)
        
    }
    else
    {
        question.innerHTML = "<p>Congratulations you completed the test with " + timerValue + " seconds remaining!</p>" + '<form><input type="text" id ="textBox" placeholder="Enter Initals"> <input type="button" onclick="saveScoreLocal()" id="saveScore" value="Save High Score!"></form>';
        answersDiv.style.visibility = "hidden";
        answer1.textContent = "";
        answer2.textContent = "";
        answer3.textContent = "";
        answer4.textContent = "";
        timeRemaining.textContent = "";
        saveScore = document.getElementById("saveScore");
        let delayReset = setInterval(function (){
            result.textContent = "";
            clearInterval(delayReset);
        },2000)
    }
    

}


function startQuiz()
{
    answersDiv.style.visibility = "visible";
    var timeInterval = setInterval(function () {
        if (timerValue > 1 && questionNumber < questions.length) {
          timeRemaining.textContent = "Time:" + timerValue;
          timerValue--;
        } else {
          clearInterval(timeInterval);
        }
      }, 1000);

    startQuizBtn.style.visibility = "hidden";

    if(questionNumber < questions.length)
    {
        question.textContent = questions[questionNumber].question;
        answer1.textContent = questions[questionNumber].Option1;
        answer2.textContent = questions[questionNumber].Option2;
        answer3.textContent = questions[questionNumber].Option3;
        answer4.textContent = questions[questionNumber].Option4;
    }
    function checkAnswer(answer)
    {
        let divId = answer.srcElement.id;
        let divSelected = document.getElementById(divId);
        if(divSelected.textContent === questions[questionNumber][`${questions[questionNumber].Answer}`])
        {

            result.textContent = "Correct!";
            questionNumber++
            updateQuestion()
        }
        else
        {
            result.textContent = "Incorrect!";
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

startQuizBtn.onclick = function()
{
    startQuiz();
}

function saveScoreLocal()
{
    if(scores.length > 0)
    {
        scores = JSON.parse(localStorage.getItem("scores"));
    }
    let initals = document.getElementById("textBox").value;
    console.log("saved");
    scores.push([initals, timerValue])
    localStorage.setItem("scores", JSON.stringify(scores));
}


