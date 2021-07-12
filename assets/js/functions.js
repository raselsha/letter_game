var tableA=['a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14','a15','a16','a17','a18','a19','a20','a21','a22','a23','a24','a25','a26','a27','a28','a29','a30'];
var tableB=['b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19'];
var joinLetters=['j1','j2','j3','j4','j5','j6','j7','j8','j9','j10','j11','j12','j13','j14','j15','j16','j17','j18','j19','j20','j21','j22','j23','j24','j25','j26','j27','j28','j29','j30','j31','j32','j33','j34','j35','j36','j37','j38','j39','j40','j41','j42','j43','j44','j45','j46','j47','j48','j49','j50','j51','j52','j53','j54','j55','j56','j57','j58','j59','j60','j61','j62','j63','j64','j65','j66','j67','j68','j69','j70','j71','j72','j73','j74','j75','j76','j77','j78','j79','j80','j81','j82','j83','j84','j85','j86','j87','j88','j89','j90','j91','j92','j93','j94','j95','j96','j97','j98','j99','j100','j101','j102','j103','j104','j105','j106','j107','j108','j109','j110','j111','j112','j113','j114','j115','j116','j117','j118','j119','j120','j121','j122','j123','j124','j125','j126','j127','j128','j129','j130','j131','j132','j133','j134','j135','j136','j137','j138','j139','j140','j141','j142','j143','j144','j145','j146','j147','j148','j149','j150','j151','j152','j153','j154','j155','j156','j157','j158','j159','j160','j161','j162','j163','j164','j165','j166','j167','j168','j169','j170','j171','j172','j173','j174','j175','j176','j177','j178','j179','j180','j181','j182','j183','j184','j185','j186','j187','j188','j189','j190','j191','j192','j193','j194','j195','j196','j197','j198','j199','j200','j201','j202','j203','j204','j205','j206','j207','j208','j209','j210','j211','j212','j213','j214','j215','j216','j217','j218','j219','j220','j221','j222','j223','j224','j225','j226','j227','j228','j229','j230','j231','j232','j233','j234','j235','j236','j237','j238','j239','j240','j241','j242','j243','j244','j245','j246','j247','j248','j249','j250','j251','j252','j253','j254','j255','j256','j257','j258','j259','j260','j261','j262','j263','j264','j265','j266','j267','j268','j269','j270','j271','j272','j273','j274','j275','j276','j277','j278','j279','j280','j281','j282','j283','j284','j285','j286','j287','j288','j289','j290','j291','j292','j293','j294','j295','j296','j297','j298','j299','j300','j301','j302','j303','j304','j305','j306','j307','j308','j309','j310','j311','j312','j313','j314','j315','j316','j317','j318','j319','j320','j321','j322','j323','j324','j325','j326','j327','j328','j329','j330','j331','j332','j333','j334','j335','j336','j337','j338','j339','j340','j341','j342','j343','j344','j345','j346','j347','j348','j349','j350','j351','j352','j353','j354','j355','j356','j357','j358','j359','j360','j361','j362','j363','j364','j365','j366','j367','j368','j369','j370','j371','j372','j373','j374','j375','j376','j377','j378','j379','j380','j381','j382','j383','j384','j385','j386','j387','j388','j389','j390','j391','j392','j393','j394','j395','j396','j397','j398','j399','j400','j401','j402','j403','j404','j405','j406','j407','j408','j409','j410','j411','j412','j413','j414','j415','j416','j417','j418','j419','j420','j421','j422','j423','j424','j425','j426','j427','j428','j429','j430','j431','j432','j433','j434','j435','j436','j437','j438','j439','j440','j441','j442','j443','j444','j445','j446','j447','j448','j449','j450','j451','j452','j453','j454','j455','j456','j457','j458','j459','j460','j461','j462','j463','j464','j465','j466','j467','j468','j469','j470','j471','j472','j473','j474','j475','j476','j477','j478','j479','j480','j481','j482','j483','j484','j485','j486','j487','j488','j489','j490','j491','j492','j493','j494','j495','j496','j497','j498','j499','j500','j501','j502','j503','j504','j505','j506','j507','j508','j509','j510','j511','j512','j513','j514','j515','j516','j517','j518','j519','j520','j521','j522','j523','j524','j525','j526','j527','j528','j529','j530','j531','j532','j533','j534','j535','j536','j537','j538','j539','j540','j541','j542','j543','j544','j545','j546','j547','j548','j549','j550','j551','j552','j553','j554','j555','j556','j557','j558','j559','j560','j561','j562','j563','j564','j565','j566','j567','j568','j569','j570'];

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
    	resultDot.classList.remove('visible');
    	resultDot.classList.add('invisible');
    	resultLeft.innerHTML=letter.innerHTML;
    	resultLeft.classList.remove('invisible');
    	resultLeft.classList.add('visible');
    	makeInactive(id); // table a, current letter inactive
    	showJoinLetters();
    	rePlay(resultLeft.id,id);
    	makeActive(tableB[j]);
		}
	if (tableB[j]==id) {

		resultRight.innerHTML=letter.innerHTML;
		resultRight.classList.remove('invisible');
		resultRight.classList.add('visible');
		makeInactive(id); // table b, current letter inactive
		rePlay(resultRight.id,id);
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
	var word = resultSentence.getElementsByTagName('b')[0];
	word.innerHTML = words.text[w];
	word.classList.add('text-green');
	var att = document.createAttribute("onclick");
	att.value = "playSound('"+sentences.sound[s]+"')";
	resultSentence.setAttributeNode(att);
	resultSentence.classList.add('pointer');
}

function sectionEnable() {
	
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
  resultGreen.classList.remove('visible');
	resultGreen.classList.add('invisible');
	arrow2.classList.remove('visible');
	arrow2.classList.add('invisible');
	arrow3.classList.remove('visible');
	arrow3.classList.add('invisible');
	sentence.classList.remove('visible');
	sentence.classList.add('invisible');
	resultDot.classList.remove('invisible');
	resultDot.classList.add('visible');
}

function next(){
	playSound('next');
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
	resultLeft.classList.remove('visible');
  resultLeft.classList.add('invisible');
  resultRight.classList.remove('visible');
  resultRight.classList.add('invisible');
  sectionDisable();
  makeActive(tableA[i]);

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
	if ('next'==id) {
		audio.src = 'assets/audio/'+id+'.mp3';
		audio.play();
	}

}

function rePlay(result,id){
	var h1 = document.getElementById(result);
	var att = document.createAttribute("onclick");
	att.value = "playSound('"+id+"')";
	h1.setAttributeNode(att);
	h1.classList.add('text-green','pointer');
	subTag = h1.getElementsByTagName('sub')[0];
	subTag.classList.add('text-white');
}

function makeActive(id){
	var h1 = document.getElementById(id);
	var att = document.createAttribute("onclick");
	att.value = "main('"+id+"')";
	h1.setAttributeNode(att);
	h1.classList.remove('invisible');
	h1.classList.add('text-green','pointer','visible');
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
	
}

// function for stop video on close modal
function stopVideo(video){
	var video = document.getElementById(video);
	video.pause();
}


