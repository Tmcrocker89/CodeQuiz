let highScoreUL = document.getElementById("highScoreList");
let scores = JSON.parse(localStorage.getItem("scores"));;
let clearScore = document.getElementById("clearScore");



function loadScores()
{
    if(scores !== null)
    {
        highScoreUL.innerHTML = "";
        for(let i =0; i < scores.length; i++)
        {
        var score = scores[i];

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);
        highScoreUL.appendChild(li);
        }
    }
}

function init()
{
    loadScores();
}

init();

clearScore.addEventListener("click", function()
{
    scores = [];
    console.log(scores);
    localStorage.setItem("scores", JSON.stringify(scores));
    loadScores();

})