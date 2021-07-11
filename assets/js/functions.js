var tableA=['a1','a2','a3'];
var tableB=['b1','b2','b3'];
var joinLetters=['j1','j2','j3','j4','j5','j6'];
var words={
			text:['word 1','word 2','word 3','word 4','word 5','word 6',],
			sound:['w1','w2','w3','w4','w5','w6'],
		};
var sentences={
			text:['sentence <strong></strong> 1','<strong></strong> sentence 2','sentence 3 <strong></strong>','sentence <strong></strong> 4','<strong></strong> sentence 5','sentence 6 <strong></strong>',],
			sound:['s1','s2','s3','s4','s5','s6']
		};

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
var sentence = document.getElementById('sentence');

var arrow1 = document.getElementById('arrow-1');
var arrow2 = document.getElementById('arrow-2');
var arrow3 = document.getElementById('arrow-3');

var i=0; //increament for left table element;
var j=0; //increament for right table element;
var l=0; //increament for join letters;
var w=0; //increament for words;
var s=0; //increament for sentences;

var subTag;

if(i==0 || j==0){
  makeActive(tableA[i]);
  makeActive(tableB[j]);
}

function main(id) {
	playSound(id);
	moveToFly(id);
	setTimeout(function(){
	    resetLetterPosition(id); // move letter to original position
	}, 1000);
}

function resetLetterPosition(id) {
	var letter = document.getElementById(id);

    if (tableA[i]==id) {
    	resultLeft.innerHTML=letter.innerHTML;
    	resultLeft.classList.remove('invisible');
    	resultLeft.classList.add('visible');
    	makeInactive(id); // table a, current letter inactive
    	showJoinLetters();
	}
	if (tableB[j]==id) {

		resultRight.innerHTML=letter.innerHTML;
		resultRight.classList.remove('invisible');
		resultRight.classList.add('visible');
		makeInactive(id); // table b, current letter inactive
		// makeActive(tableB[j]); //table B next letter will be active
		sectionEnable();
		showJoinLetters();
		displayWords();
		displaySentence();
	}
}


function showJoinLetters() {
	resultJoined.innerHTML = resultLeft.innerHTML+resultRight.innerHTML;
	var att = document.createAttribute("onclick");
	att.value = "playSound('"+joinLetters[l]+"')";
	resultJoined.setAttributeNode(att);
	resultJoined.classList.add('pointer');
}

function displayWords() {
	resultWords.innerHTML = words.text[w];
	var att = document.createAttribute("onclick");
	att.value = "playSound('"+words.sound[w]+"')";
	resultWords.setAttributeNode(att);
	resultWords.classList.add('pointer');
}

function displaySentence() {
	resultSentence.innerHTML = sentences.text[s];
	var word = resultSentence.getElementsByTagName('strong')[0];
	word.innerHTML = words.text[w];
	word.classList.add('text-green');
	var att = document.createAttribute("onclick");
	att.value = "playSound('"+sentences.sound[s]+"')";
	resultSentence.setAttributeNode(att);
	resultSentence.classList.add('pointer');
}

function sectionEnable() {
	resultDot.classList.remove('visible');
	resultDot.classList.add('invisible');
	arrow1.classList.remove('invisible');
  arrow1.classList.add('visible');
	resultOrange.classList.remove('invisible');
	resultOrange.classList.add('visible');
	arrow2.classList.remove('invisible');
	arrow2.classList.add('visible');
  resultGreen.classList.remove('invisible');
	resultGreen.classList.add('visible');
	arrow3.classList.remove('invisible');
	arrow3.classList.add('visible');
	sentence.classList.remove('invisible');
	sentence.classList.add('visible');
}

function sectionDisable() {
	arrow1.classList.remove('visible');
    arrow1.classList.add('invisible');
	resultOrange.classList.remove('visible');
	resultOrange.classList.add('invisible');
	arrow2.classList.remove('visible');
	arrow2.classList.add('invisible');
    resultGreen.classList.remove('visible');
	resultGreen.classList.add('invisible');
	arrow2.classList.remove('visible');
	arrow2.classList.add('invisible');
}

function next(){
	j++; // increment for next element in right table
	l++; // increment for next joined letters
	w++; // increment for next words 
	s++; // increment for next sentence 
	if (j==tableB.length) {
		j=0;
		i++;
		if (i==tableA.length) {
			// lesson completed
			var help = document.getElementById('help');
			var subtitle = document.getElementById('subtitle');
			help.classList.add('d-none'); 
			subtitle.classList.remove('d-none','invisible');
			resetTable(tableA); // reset table A;
			resetTable(tableB);  // reset table B;
		}
		else{
			makeActive(tableA[i]); // table A next letter will be active
			resetTable(tableB); // reset table B;
		}
	    
	}
	makeActive(tableB[j]);
}

function moveToFly(id){
	if (tableA[i]==id) {
		var dest = resultLeft.getBoundingClientRect();
	}
	if (tableB[j]==id) {
		var dest = resultRight.getBoundingClientRect();
	}
	var letter = document.getElementById(id);
    var src = letter.getBoundingClientRect();
    var left = src.x;
    var top = src.y;
    letter.style.transition = 'all 1s ease-in-out';
    letter.style.transform = 'translate('+(dest.x-left)+'px,'+(dest.y-src.y)+'px)';
}

// Function for character play sound
function playSound(id) {
	var audio = document.getElementById('audio');
	if (tableA[i]==id) {
		audio.src = 'assets/audio/tableA/'+id+'.mp3';
		audio.play();
	}
	if (tableB[j]==id) {
		audio.src = 'assets/audio/tableB/'+id+'.mp3';
		audio.play();
	}
	if (joinLetters[l]==id) {
		audio.src = 'assets/audio/joinLetters/'+id+'.mp3';
		audio.play();
	}
	if (words.sound[w]==id) {
		audio.src = 'assets/audio/words/'+id+'.mp3';
		audio.play();
	}
	if (sentences.sound[s]==id) {
		audio.src = 'assets/audio/sentences/'+id+'.mp3';
		audio.play();
	}

}

function makeActive(id){
	var h1 = document.getElementById(id);
	var att = document.createAttribute("onclick");
	att.value = "main('"+id+"')";
	h1.setAttributeNode(att);
	h1.classList.add('text-green','pointer');
	subTag = h1.getElementsByTagName('sub')[0];
	subTag.classList.add('text-white');
}

function makeInactive(id){
	var letter = document.getElementById(id);
	letter.classList.remove('visible');
    letter.classList.add('invisible'); 
    letter.removeAttribute('style');
    letter.classList.remove('pointer');
    letter.removeAttribute("onclick");
}

function resetTable(table){
	for (var i = 0; i < table.length; i++) {
		var reset = document.getElementById(table[i]);
		subTag = reset.getElementsByTagName('sub')[0];
		subTag.classList.remove('text-white');
		reset.classList.remove('invisible','text-green');
		reset.classList.add('visible',);
	}
	makeActive(table[0]);
}

// function for stop video on close modal
function stopVideo(video){
	var video = document.getElementById(video);
	video.pause();
}

function data() {
	var i = 0;
	for(i=0; i<570; i++){
	  document.write("\'sentence "+i+"\',");
	}
	window.location.reload();
}