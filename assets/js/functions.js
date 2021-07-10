charA=['a','b','c','d'];
charB=['w','x','y','z'];
idA=['a1','a2','a3','a4'];
idB=['b1','b2','b3','b4'];
a=0;
b=0;

var resultBox = document.getElementById('result-box');
var resultYellow = document.getElementById('result-yellow');
var resultLetters = document.getElementById('result-letters');
var resultDot = document.getElementById('result-dot');
var resultLeft = document.getElementById('result-left');
var resultRight = document.getElementById('result-right');
var resultOrange = document.getElementById('result-orange');
var resultJoined = document.getElementById('result-joined');
var resultGreen = document.getElementById('result-green');
var resultWords = document.getElementById('result-words');
var resultSentence = document.getElementById('result-sentence');

// Function for character play sound
function letterSound(id,char) {
	letter=document.getElementById(id);

	if (idA[a]==id || idB[b]==id) {
		audio.src = 'assets/audio/'+id+'.mp3';
		audio.play();
	}
	moveTo(letter,id);
	
}
function moveTo(element,id){
	if (idA[a]==id) {
		var dest = resultLeft.getBoundingClientRect();
	}
	if (idB[b]==id) {
		var dest = resultRight.getBoundingClientRect();
	}
    var src = letter.getBoundingClientRect();
    var left = src.x;
    var top = src.y;
    letter.style.transition = 'all 1s ease-in-out';
    letter.style.transform = 'translate('+(dest.x-left)+'px,'+(dest.y-src.y)+'px)';
    letter.style.padding = 0;
    letter.style.margin = 0;
    letter.style.fontSize = '45px';
    console.log(left);
    setTimeout(function(){
        resetTo(letter,id); // move letter to original position
        
      }, 1000);
}

function resetTo(letter,id) {
    if (idA[a]==id) {
    	resultLeft.innerHTML=letter.innerHTML;
    	resultLeft.classList.remove('invisible');
    	resultLeft.classList.add('visible'); 
    	a++;
	}
	if (idB[b]==id) {
		resultRight.innerHTML=letter.innerHTML;
		resultRight.classList.remove('invisible');
		resultRight.classList.add('visible');
		b++;
	}	
    letter.classList.remove('visible');
    letter.classList.add('invisible'); 
    letter.removeAttribute('style');
    letter.classList.remove('pointer');
    letter.removeAttribute("onclick"); 

    
}

// function for stop video on close modal
function stopVideo(video){
	video.pause();
}

