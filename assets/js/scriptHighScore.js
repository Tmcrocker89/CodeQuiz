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
        let newItem = i+1 + " " + score[0] + ":" + score[1]

        var li = document.createElement("li");
        li.textContent = newItem;
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