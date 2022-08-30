const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const winScore = document.querySelector('#winScore');
const btnAddScore1 = document.querySelector('#addScore1');
const btnAddScore2 = document.querySelector('#addScore2');
const btnReset = document.querySelector('#reset');

score1.value = 2;

btnAddScore1.addEventListener('click', () => { AddScore(1); });
btnAddScore2.addEventListener('click', () => { AddScore(2); });
btnReset.addEventListener('click', Reset);


function AddScore(playerNum) {
	console.dir(score1);
	console.dir(score2);
	console.dir(winScore);
	if (playerNum == 1) { 
		score1.innerText = Number(score1.innerText) + 1; 
		if (score1.innerText == winScore.value) 
			setTimeout(() => {
				alert("PLAYER 1 WON!!!");
				Reset()
			},0);
	}
	if (playerNum == 2) {
		score2.innerText = Number(score2.innerText) + 1; 
		if (score2.innerText == winScore.value)
			setTimeout(() => {
				alert("PLAYER 2 WON!!!");
				Reset()
			},0);
	}
}

function Reset() {
	score1.innerText = '0';
	score2.innerText = '0';
	winScore.value = '5';
}