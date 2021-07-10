// left table element ID list:
//var letterIdA=['a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14','a15','a16','a17','a18','a19','a20','a21','a22','a23','a24','a25','a26','a27','a28','a29','a30'];

// right table element ID list:
// var letterIdB=['b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19'];
var letterIdA=['a1','a2','a3'];
var letterIdB=['b1','b2','b3'];


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
var arrow1 = document.getElementById('arrow-1');
var arrow2 = document.getElementById('arrow-2');
var arrow3 = document.getElementById('arrow-2');

var i=0; //increament for left table element;
var j=0; //increament for right table element;

var nextLetter; // next letter element selection;
var subTagA; // left table element sub tag;
var subTagB; // right table element sub tag;
var reset;

	if(i==0 && j==0){
	  var a1 = document.getElementById(letterIdA[i]);
	  var b1 = document.getElementById(letterIdB[j]);
	  
	  makeOnclickAtt(letterIdA[i]);
	  makeOnclickAtt(letterIdB[j]);

	  subTagB = b1.getElementsByTagName('sub')[0];
	  a1.classList.add('text-green','pointer');
	  b1.classList.add('text-green','pointer');

	  subTagB.classList.add('text-white');
	}

function makeOnclickAtt(id){
	var h1 = document.getElementById(id);
	var att = document.createAttribute("onclick");
	att.value = "letterSound('"+id+"')";
	h1.setAttributeNode(att);
}

// Function for character play sound
function letterSound(id) {
	letter=document.getElementById(id);

	if (letterIdA[i]==id) {
		audio.src = 'assets/audio/a/'+id+'.mp3';
		audio.play();
	}
	if (letterIdB[j]==id) {
		audio.src = 'assets/audio/b/'+id+'.mp3';
		audio.play();
	}
	moveTo(letter,id);
}
function moveTo(element,id){
	if (letterIdA[i]==id) {
		var dest = resultLeft.getBoundingClientRect();
	}
	if (letterIdB[j]==id) {
		var dest = resultRight.getBoundingClientRect();
	}
    var src = letter.getBoundingClientRect();
    var left = src.x;
    var top = src.y;
    letter.style.transition = 'all 1s ease-in-out';
    letter.style.transform = 'translate('+(dest.x-left)+'px,'+(dest.y-src.y)+'px)';

    setTimeout(function(){
        resetLetterPosition(letter,id); // move letter to original position
      }, 1000);
}

function resetLetterPosition(letter,id) {
    if (letterIdA[i]==id) {
    	resultLeft.innerHTML=letter.innerHTML;
    	resultLeft.classList.remove('invisible');
    	resultLeft.classList.add('visible');
    	
    	letter.classList.remove('visible');
	    letter.classList.add('invisible'); 
	    letter.removeAttribute('style');
	    letter.classList.remove('pointer');
	    letter.removeAttribute("onclick");
	}
	if (letterIdB[j]==id) {
		j++;

		resultRight.innerHTML=letter.innerHTML;
		resultRight.classList.remove('invisible');
		resultRight.classList.add('visible');
		
		letter.classList.remove('visible');
	    letter.classList.add('invisible'); 
	    letter.removeAttribute('style');
	    letter.classList.remove('pointer');
	    letter.removeAttribute("onclick");
	    if (j==letterIdB.length) {
			i++;
			if (i==letterIdA.length) {
				var help = document.getElementById('help');
				var subtitle = document.getElementById('subtitle');
				help.classList.add('d-none'); 
				subtitle.classList.remove('d-none','invisible');
			}
		    makeOnclickAtt(letterIdA[i]);
		    nextLetter = document.getElementById(letterIdA[i]);
		    subTagA = nextLetter.getElementsByTagName('sub')[0];
			nextLetter.classList.add('text-green','pointer'); 
			subTagA.classList.add('text-white');
			
			for (j = 0; j < letterIdB.length; j++) {
				reset = document.getElementById(letterIdB[j]);
				subTagB = reset.getElementsByTagName('sub')[0];
				subTagB.classList.remove('text-white');
				reset.classList.remove('invisible','text-green');
				reset.classList.add('visible',);
			}
			j=0;
		}

		makeOnclickAtt(letterIdB[j]);
	    nextLetter = document.getElementById(letterIdB[j]);
	    subTagB = nextLetter.getElementsByTagName('sub')[0];
		nextLetter.classList.add('text-green','pointer'); 
		subTagB.classList.add('text-white');
		arrow1.classList.remove('invisible');
		arrow1.classList.add('visible');
	}	     
}

// function for stop video on close modal
function stopVideo(video){
	var video = document.getElementById(video);
	video.pause();
}

