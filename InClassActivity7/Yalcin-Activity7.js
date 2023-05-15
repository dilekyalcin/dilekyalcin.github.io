var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function displayResults()
{
	var average = 0;
	var highestScore = 0;
	var highestScoreName = "";
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
		if (scores[i] > highestScore) {
			highestScore = scores[i];
			highestScoreName = names[i];
		}
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2>Average score is "+average + "<br />Highest score= " + highestScoreName  + " with a score of "+ highestScore;
}

function addScore() {
	var nameInput = $("name");
	var scoreInput = $("score");
	var name = nameInput.value;
	var score = parseInt(scoreInput.value);
	
	if (name === "" || isNaN(score) || score < 0 || score > 100) {
		alert("You must enter a name and a valid score");
		return;
	}else{
		names.push(name);
	    scores.push(score);

	}	
	
	nameInput.value = "";
	scoreInput.value = "";
	nameInput.focus();
}
function displayScores() {
	var score_table = $("scores_table");
	score_table.innerHTML = "<h2> Scores </h2><tr><th>Name</th><th>Score</th></tr>";

	for (var i = 0; i < names.length; i++) {
		var row = score_table.insertRow();
		var name = row.insertCell();
		var score = row.insertCell();
		name.innerHTML = names[i];
		score.innerHTML = scores[i];
	}
}







