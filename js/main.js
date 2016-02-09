
$(document).ready(function(){


var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
  triggerElement: trigger1,
  duration: "0%",
  triggerHook: -10,
  reverse: true,
})
.setClassToggle('#navslide1', 'active')
// .setClassToggle('#pin1', 'cardcolor1')
.setPin(pin1) 

controller.addScene(scene1);


var controller = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
  triggerElement: trigger2, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#navslide1", 'arrow')
.setClassToggle('#navslide2', 'active')
// .setClassToggle('#arrowdown', 'hidden');
// .setClassToggle('#pin2', 'cardcolor2')
.setPin(pin2)

controller.addScene(scene2);


var controller = new ScrollMagic.Controller();
var scene3 = new ScrollMagic.Scene({
  triggerElement: trigger3, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger3", "active")
.setClassToggle("#navslide3", "active")
.setPin(pin3)

controller.addScene(scene3);


var controller = new ScrollMagic.Controller();
var scene4 = new ScrollMagic.Scene({
  triggerElement: trigger4, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger4", "active")
.setClassToggle("#navslide4", "arrow_active")

.setPin(pin4)

controller.addScene(scene4);

var controller = new ScrollMagic.Controller();
var scene5 = new ScrollMagic.Scene({
  triggerElement: trigger5, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger5", "active")
.setClassToggle("#navslide5", "arrow_active")
.setPin(pin5)

controller.addScene(scene5);

var controller = new ScrollMagic.Controller();
var scene6 = new ScrollMagic.Scene({
  triggerElement: trigger6, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger6", "active")
.setClassToggle("#navslide6", "arrow_active")
.setPin(pin6)

controller.addScene(scene6);

var controller = new ScrollMagic.Controller();
var scene7 = new ScrollMagic.Scene({
  triggerElement: trigger7, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger7", "active")
.setClassToggle("#navslide7", "arrow_active")
.setPin(pin7)

controller.addScene(scene7);

var controller = new ScrollMagic.Controller();
var scene8 = new ScrollMagic.Scene({
  triggerElement: trigger8, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger8", "active")
.setClassToggle("#navslide8", "arrow_active")
.setPin(pin8)

controller.addScene(scene8);

var controller = new ScrollMagic.Controller();
var scene9 = new ScrollMagic.Scene({
  triggerElement: trigger9, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger9", "active")
.setClassToggle("#navslide9", "arrow_active")
.setPin(pin9)

controller.addScene(scene9);


var controller = new ScrollMagic.Controller();
var scene10 = new ScrollMagic.Scene({
  triggerElement: trigger10, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger10", "active")
.setClassToggle("#navslide10", "arrow_active")
.setPin(pin10)

controller.addScene(scene9);





































var country_code = 0;
var flag_position_in_array = 0;
var guess = 0;
var answerposition = 0;
var guessnumber = 0;
var score = 0;
var flag_to_print = 0;
var countryflag = 0;
var image_file = 0;
var playlabel = 'Get Started!';
var animation = 0;
var endanimation = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
var startcount = 0;

window.onload = setQuiz;
document.getElementById('play').onclick = getCountry;
document.getElementById('showprinciples').onclick = hideFlag;
document.getElementById('backtoflagfromprinciplesbutton').onclick = BacktoFlagFromPrinciples;
document.getElementById('good').onclick = getAnswerGood;
document.getElementById('bad').onclick = getAnswerBad;
document.getElementById('mapinfo').onclick = printMap;

// document.getElementById('backtoflagfrommapbutton').onclick = hideBacktoFlagButton;



// Runs once at page load to set up the quiz area and show first flag
function setQuiz () {
	document.getElementById('playdisplay').innerText = playlabel;
	$('#mapinfo').addClass('off');
	$('#rules').addClass('on');
	$('#play').addClass('on');
	var playanimation = "animated bounceInUp";
	$("#play").addClass(playanimation).one(endanimation,
		function(){
			$(this).removeClass(playanimation);
		});
};

// Returns a random number which is used to call an index in an array of country codes
// this will determine what flag and flag labels display
function getCountry () {
	console.log('getCountry is on')
	animation="animated bounceOutRight";
	$("#rules").addClass(animation).one(endanimation,
		function(){
			$(this).removeClass(animation);
			$("#rules").removeClass('on');
		});
	flag_position_in_array = Math.floor(Math.random()*196)
	console.log(flag_position_in_array);
	if (flag_position_in_array != 'undefined') {
		flag_to_print = flags_list[flag_position_in_array];
		countryflag = country_names[flag_position_in_array];
		console.log(flag_to_print);
		console.log(countryflag);
		printCountryName();
		hidePlayButton();
		hideFeedbackandScore ()
	} else {
		getCountry();
	}
};

function printCountryName (){
	console.log('printCountryName is firing');
	var cnanimation="animated bounceInDown";
	$("#countrytitle").addClass(cnanimation).one(endanimation,
		function(){
			$(this).removeClass(cnanimation);
		});
	document.getElementById('result').innerText = countryflag;
	showMapInfoButton();
	getFlag();
}

function showMapInfoButton () {
	console.log('showMapInfoButton is on')
	$('#mapinfo').addClass('on');
}

function getFlag () {
	console.log('getFlag is firing');
	image_file = "flags-normal/"+flag_to_print+".png"
	document.getElementById('flag').src=image_file;
	printFlag();
		
	// $('#play_panel').addClass('off');
	// $('#play').addClass('off');
	
	// $('#good').removeClass('hidden');
	// $('#bad').removeClass('hidden');
	// $('#mapinfo').removeClass('hidden');
	// $('#mapinfo').addClass('visible');
	// $('#specificfeedback').removeClass('on');
};

function printFlag () {
	console.log('printFlag is on')
	$("#flag").addClass('on');
	var flanimation="animated bounceInUp";
	$("#flag").addClass(flanimation).on(endanimation,
		function(){
			$(this).removeClass(flanimation);
		})
	introGuessControls();
}

function introGuessControls (){
	console.log('introGuessControlsIn: loading controls on first screen')
	
	// var gcanimation="animated bounceInLeft";
	// $("#good").addClass(gcanimation).one(endanimation,
	// 	function(){
	// 		$("#good").removeClass();
	// 		$("#good").addClass("button guess");
	// 	});
	// var bcanimation="animated bounceInRight";
	// $("#bad").addClass(bcanimation).one(endanimation,
	// 	function(){
	// 		$("#bad").removeClass();
	// 		$("#bad").addClass("button guess");
	// 	});
	// $('#answer_buttons').removeClass();
	$('#answer_buttons').addClass("visible")
}

function hidePlayButton () {
	console.log('hidePlayButton is on')
	$('#play').fadeOut(500);
	// animation="animated fadeOut";
	// $("#play").addClass(animation).on(endanimation,
	// 	function(){
	// 		$(this).removeClass(animation);
			$('#play').removeClass('on');
			showPrinciplesButton();
		// });
}

function showPrinciplesButton () {
	console.log('showPrinciplesButton is on')
	$('#showprinciples').addClass('on');
	$('#showprinciples').fadeIn(2000);
	$('#showprinciples').removeClass("fadeIn");
	// animation="animated bounceInUp";
	// $('#showprinciples').addClass(animation).on(endanimation,
	// 	function(){
	// 		$(this).removeClass(animation);
	// 	});
}
// END OF GROUP 1 FUNCTIONS document.getElementById('play').onclick






// START GROUP 2 FUNCTIONS document.getElementById('showprinciples').onclick = hideFlag;
function hideFlag () {
	console.log('hideFlag is on')
	// animation="animated bounceOutDown";
	// $('#flag').addClass(animation).on(endanimation,
	// 		function(){
 // 				$(this).removeClass(animation);
 				$('#flag').removeClass('on');
 			// 	displayPrinciples ();
 			// });
 	hideGuessControls ();
 	hideMapInfoButton ();
 	hidePrinciplesButton ();
 	displayPrinciples();
}

function hideGuessControls (){
	console.log('hide GuessControls')
	animation="animated fadeOut";
	$("#answer_buttons").addClass(animation).on(endanimation,
	 	function(){
	 		$(this).removeClass(animation);
			$('#answer_buttons').removeClass('visible');
			// $('#answer_buttons').removeClass("animated fadeOut");
	});
}

function hidePrinciplesButton () {
	console.log('hidePrinciplesButton firing')
	$('#showprinciples').fadeOut(1000);
	// var prince_button_animation="animated fadeOut";
	// $('#showprinciples').addClass(prince_button_animation).on(endanimation,
	// 	function(){
	// 		$(this).removeClass(prince_button_animation);
			$('#showprinciples').removeClass('on');
		// });
}

function displayPrinciples () {
	console.log('displayPrinciples is on')
	$('#principles_panel').removeClass();
	$('#principles_panel').attr("class", "principles_hint on");
	// $('#principles_panel').removeClass('hidden');
	// animation="animated bounceInDown";
	// $('#principles_panel').addClass(animation).on(endanimation,
	// 		function(){
	// 		$('#principles_panel').removeClass(animation);
			showBacktoFlagFromPrinciplesButton ();
			// });	
}

function showBacktoFlagFromPrinciplesButton () {
	console.log('showBacktoFlagFromPrinciplesButton firing')
	$('#backtoflagfromprinciplesbutton').addClass('on');
}
// END GROUP 2 FUNCTIONS document.getElementById('showprinciples').onclick = hideFlag;



// START GROUP 3 FUNCTIONS document.getElementById('backtoflagfromprinciplesbutton').onclick = BacktoFlagFromPrinciples;
function BacktoFlagFromPrinciples () {
	console.log('BacktoFlagFromPrinciples firing')
	animation="animated fadeOut";
	$('#backtoflagfromprinciplesbutton').addClass(animation).on(endanimation,
		function(){
			$(this).removeClass(animation);
			$('#backtoflagfromprinciplesbutton').removeClass('on');
		});
	hidePrinciples ();
	hideMap ();
	showMapInfoButton ()
	// introGuessControls ();
}

function hidePrinciples () {
	console.log('hidePrinciples is on')
	// $('#principles_panel').attr("class", "principles_hint");
	// var principlesoutanimation="animated bounceOutUp";
	// $('#principles_panel').addClass(principlesoutanimation).on(endanimation,
	// 	function(){
	// 		$('#principles_panel').removeClass(principlesoutanimation);
	$('#principles_panel').removeClass();
	$('#principles_panel').attr("class", "principles_hint");
	printFlag();
	// 	});
}
// END GROUP 3 FUNCTIONS document.getElementById('backtoflagfromprinciplesbutton').onclick = BacktoFlagFromPrinciples;


// START GROUP 4 FUNCTIONS document.getElementById('good').onclick = getAnswerGood;
function getAnswerGood (){
	console.log('getAnswerGood is now firing');
	guess = 'good';
	answerposition = flag_position_in_array + 1;
	console.log('the guess is ' + guess);
	console.log('answerposition is '+ answerposition);
	answer = answer_codes[answerposition];
	console.log('the answer from the file is '+ answer);
	if (answer === guess) {
		document.getElementById('quizresponse').innerText = 'You got it!'
		score = score + 1;
	} else {
		document.getElementById('quizresponse').innerText = "No, sorry, it's not great..."
	}
	hideMapInfoButton();
	hidePrinciplesButton();
	showFeedback();
	showPlay();
	updateScore();
	// $('#hintpanel').removeClass('on');
	// $('#hintbutton').addClass('off');
	// $('#play').removeClass('off');
	// $('#play').addClass('on');
	// $('#bad').addClass('hidden');
	// $('#mapinfo').removeClass('visible');
	// $('#mapinfo').addClass('hidden');
	// $('#specificfeedback').addClass('on');
	
	// showFlag();
};

function hideMapInfoButton () {
	console.log('hideMapInfoButton is on')
	$('#mapinfo').removeClass('on');
}

function showFeedback() {
	$('#specificfeedback').addClass('on');
	animation="animated bounceInLeft";
	$("#specificfeedback").addClass(animation).on(endanimation,
		function(){
			$(this).removeClass(animation);
		});
}

function showPlay () {
	$('#play').fadeIn(1000).delay(2000);
	$('#play').addClass('on');
	relabelPlay();
}

function relabelPlay () {
	console.log('relabelPlay is on')
	playlabel = 'Play Again';
	document.getElementById('playdisplay').innerText = playlabel;
}
// END GROUP 4 FUNCTIONS document.getElementById('good').onclick = getAnswerGood;




// START GROUP 5 FUNCTIONS document.getElementById('good').onclick = getAnswerBad;
function getAnswerBad (){
	console.log('getAnswerBad is now firing');
	guess = 'bad';
	answerposition = flag_position_in_array + 1;
	console.log(guess);
	console.log('answerposition is '+ answerposition);
	answer = answer_codes[answerposition];
	console.log('the answer from the file is '+ answer);
	if (answer === guess) {
		document.getElementById('quizresponse').innerText = 'You Got it!'
		score = score + 1;
	} else {
		document.getElementById('quizresponse').innerText = 'No, sorry you are wrong.'
	}
	hideMapInfoButton ();
	hidePrinciplesButton();
	showFeedback();
	showPlay();
	updateScore();
};
// END GROUP 5 FUNCTIONS document.getElementById('bad').onclick = getAnswerBad;


// START GROUP 6 FUNCTION SPECIAL - UPDATE SCORE
function updateScore(){
	guessnumber = guessnumber + 1;
	console.log('the score is ' + score);
	console.log('the total number of guesses is ' + guessnumber);
	$('#scoreboard').addClass('visible');
	document.getElementById('yourscore').innerText = score
	document.getElementById('totalscore').innerText = '/' + guessnumber
	animateScore ();	
};

function animateScore() {
	animation = "animated bounceInLeft";
	$("#yourscore").addClass(animation).on(endanimation,
		function(){
			$(this).removeClass(animation);
		})
	animation = "animated bounceInUp";
	$("#totalscore").addClass(animation).on(endanimation,
		function(){
			$(this).removeClass(animation);
		})
	animation="animated bounceInRight";
	$("#scoreboard").addClass(animation).on(endanimation,
		function(){
			$(this).removeClass(animation);
		});
}
// END GROUP 6 FUNCTION SPECIAL - UPDATE SCORE



// START GROUP 7 FUNCTIONS TO SET THE BOARD AGAIN FROM THE SECOND ROUND
function hideFeedbackandScore () {
	$('#scoreboard').removeClass('visible');
	$('#specificfeedback').removeClass('on');
}

// END GROUP 7 FUNCTIONS TO SET THE BOARD AGAIN FROM THE SECOND ROUND



// START GROUP 8 FUNCTIONS document.getElementById('mapinfo').onclick = printMap;
function printMap () {
	// $('#principles_panel').removeClass();
	// $('#principles_panel').addClass("on");
	var map="https://www.google.com/maps/embed/v1/search?key=AIzaSyA00nFCVfgsnGqEIEpmO-sjelodI3op1MI&q="+countryflag;
	document.getElementById('map').src=map;

	$('#principles_panel').removeClass();
	$('#principles_panel').attr("class", "principles_hint");

	$('#map').addClass('on');
	mapanimation="animated flipInX";
	$("#map").addClass(mapanimation).on(endanimation,
		function(){
			$('#map').removeClass("animated flipInX");
		});
	hideFlag ();
	
	// $('#flagbutton').removeClass('off');
	// $('#flagbutton').addClass('on');
	// $('#answer_buttons').removeClass('visible');
	// $('#hintbutton').removeClass('on');
	// $('#hintbutton').addClass('off');
	// $('#play').removeClass('on');
	// $('#play').addClass('off');
};

function hideMap () {
	console.log('hideMap is on')
	// animation="animated bounceOutRight";
	// $('#map').addClass(animation).on(endanimation,
	// 	function(){
	// 		$(this).removeClass(animation);
	// $('#map').fadeOut(1000);
			$('#map').removeClass('on');
		// 	printFlag ();
		// });
}

// END GROUP 8 FUNCTIONS document.getElementById('mapinfo').onclick = printMap;
















// function hideFlag_displayPrinciples () {
// 	console.log('hideFlag_displayPrinciples is on')
// 	var flaganimation="animated bounceOutDown";
// 	$('#flag').addClass(flaganimation).on(endanimation,
// 		function(){
// 			$(this).removeClass(flaganimation);
// 			$('#flag').removeClass('on');
// 			console.log('displayPrinciples firing')
// 			
// 					showBacktoFlagButton();
// 				
// 		});
// 	hidePrinciplesButton();
// 	hideGuessControls();
	
// }








































































// Returns a flag image from directory
// Also relabels the 'Play' button to 'Hints', so the same button can be used to call another
// function to display hints re flag design principles




function showFlag () {
	animation="animated bounceOutUp";
	$("#hintpanel").addClass(animation).on(endanimation,
		function(){
			$(this).removeClass(animation);
			$('#hintpanel').removeClass('on');
			$('#flag').removeClass('off');

			animation="animated bounceInDown";
			$("#flag").addClass(animation).on(endanimation,
				function(){
				$(this).removeClass(animation);
				animation="animated fadeOut";
				$("#flagbutton").addClass(animation).on(endanimation,
					function(){
						$(this).removeClass(animation);
						$('#flagbutton').removeClass('on');
					});
				});

			$('#answer_buttons').addClass('visible');
			animation="animated bounceInLeft";
			$("#good").addClass(animation).on(endanimation,
				function(){
					$(this).removeClass(animation);
				});
			animation="animated bounceInRight";
			$("#bad").addClass(animation).on(endanimation,
				function(){
					$(this).removeClass(animation);
				});			
		});


	animation="animated bounceOutRight";
	$("#map").addClass(animation).on(endanimation,
		function(){
			$(this).removeClass(animation);
			$('#map').removeClass('on');
			$('#flag').removeClass('off');

			animation="animated bounceInDown";
			$("#flag").addClass(animation).on(endanimation,
				function(){
				$(this).removeClass(animation);
				animation="animated fadeOut";
				$("#flagbutton").addClass(animation).on(endanimation,
					function(){
						$(this).removeClass(animation);
						$('#flagbutton').removeClass('on');
					});
				});

			$('#answer_buttons').addClass('visible');
			animation="animated bounceInLeft";
			$("#good").addClass(animation).on(endanimation,
				function(){
					$(this).removeClass(animation);
				});
			animation="animated bounceInRight";
			$("#bad").addClass(animation).on(endanimation,
				function(){
					$(this).removeClass(animation);
				});			
		});


				
	

	$('#map').removeClass('on');
			
			
			
	// $('#good').removeClass('hidden');
	// $('#bad').removeClass('hidden');
	// $('#hintbutton').removeClass('off');
};

// function getHints () {
// 	animation="animated bounceOutUp";
// 	$("#flag").addClass(animation).on(endanimation,
// 		function(){
// 			$(this).removeClass(animation);
// 			console.log('getHints firing');
// 			$('#hintpanel').addClass('on');
// 			animation="animated bounceInDown";
// 			$("#hintpanel").addClass(animation).on(endanimation,
// 				function(){
// 					$(this).removeClass(animation);
// 				});
// 			animation="animated fadeOut";
// 			$("#good").addClass(animation).on(endanimation,
// 				function(){
// 					$(this).removeClass(animation);
// 					$('#answer_buttons').removeClass('visible');
// 				});
// 			$("#bad").addClass(animation).on(endanimation,
// 				function(){
// 					$(this).removeClass(animation);
// 				});
// 			$('#flag').addClass('off');
// 			$('#map').addClass('off');
// 			$('#hintbutton').addClass('off');
// 			$('#flagbutton').removeClass('off');
// 			$('#flagbutton').addClass('on');
// 		});	
// };


// We retrieve our drop cap elements using a class selector...
    var dropcaps = document.querySelectorAll(".dropcap"); 
    // ...then give them a height of three lines. 
    // By default, the drop cap's baseline will also be the third paragraph line.
    window.Dropcap.layout(dropcaps,4); 




var flags_list = [
		"AD", 
		"AE",	
		"AF",
		"AG",
		"AL",
		"AM",
		"AO",
		"AR",
		"AT",
		"AU",
		"AZ",
		"BA",
		"BB",
		"BD",
		"BE",
		"BF",
		"BG",
		"BH",
		"BI",
		"BJ",
		"BN",
		"BO",
		"BR",
		"BS",
		"BT",
		"BW",
		"BY",
		"BZ",
		"CA",
		"CD",
		"CF",
		"CG",
		"CH",
		"CI",
		"CL",
		"CM",
		"CN",
		"CO",
		"CR",
		"CU",
		"CV",
		"CY",
		"CZ",
		"DE",
		"DJ",
		"DK",
		"DM",
		"DO",
		"DZ",
		"EC",
		"EE",
		"EG",
		"EH",
		"ER",
		"ES",
		"ET",
		"FI",
		"FJ",
		"FM",
		"FR",
		"GA",
		"GB",
		"GD",
		"GE",
		"GH",
		"GM",
		"GN",
		"GQ",
		"GR",
		"GT",
		"GW",
		"GY",
		"HN",
		"HR",
		"HT",
		"HU",
		"ID",
		"IE",
		"IL",
		"IN",
		"IQ",
		"IR",
		"IS",
		"IT",
		"JM",
		"JO",
		"JP",
		"KE",
		"KG",
		"KH",
		"KI",
		"KM",
		"KN",
		"KP",
		"KR",
		"KS",
		"KW",
		"KZ",
		"LA",
		"LB",
		"LC",
		"LI",
		"LK",
		"LR",
		"LS",
		"LT",
		"LU",
		"LV",
		"LY",
		"MA",
		"MC",
		"MD",
		"ME",
		"MG",
		"MH",
		"MK",
		"ML",
		"MM",
		"MN",
		"MR",
		"MT",
		"MU",
		"MV",
		"MW",
		"MX",
		"MY",
		"MZ",
		"NA",
		"NE",
		"NG",
		"NI",
		"NL",
		"NO",
		"NP",
		"NR",
		"NZ",
		"OM",
		"PA",
		"PE",
		"PG",
		"PH",
		"PK",
		"PL",
		"PT",
		"PW",
		"PY",
		"QA",
		"RO",
		"RS",
		"RU",
		"RW",
		"SA",
		"SB",
		"SC",
		"SD",
		"SE",
		"SG",
		"SI",
		"SK",
		"SL",
		"SM",
		"SN",
		"SO",
		"SR",
		"ST",
		"SV",
		"SY",
		"SZ",
		"TD",
		"TG",
		"TH",
		"TJ",
		"TL",
		"TM",
		"TN",
		"TO",
		"TR",
		"TT",
		"TV",
		"TW",
		"TZ",
		"UA",
		"UG",
		"US",
		"UY",
		"UZ",
		"VA",
		"VC",
		"VE",
		"VN",
		"VU",
		"WS",
		"YE",
		"ZA",
		"ZM",
		"ZW"
]









var answer_codes = [
		"AD", "bad",
		"AE", "good",		
		"AF",
		"AG",
		"AL",
		"AM",
		"AO",
		"AR",
		"AT",
		"AU",
		"AZ",
		"BA",
		"BB",
		"BD",
		"BE",
		"BF",
		"BG",
		"BH",
		"BI",
		"BJ",
		"BN",
		"BO",
		"BR",
		"BS",
		"BT",
		"BW",
		"BY",
		"BZ",
		"CA",
		"CD",
		"CF",
		"CG",
		"CH",
		"CI",
		"CL",
		"CM",
		"CN",
		"CO",
		"CR",
		"CU",
		"CV",
		"CY",
		"CZ",
		"DE",
		"DJ",
		"DK",
		"DM",
		"DO",
		"DZ",
		"EC",
		"EE",
		"EG",
		"EH",
		"ER",
		"ES",
		"ET",
		"FI",
		"FJ",
		"FM",
		"FR",
		"GA",
		"GB",
		"GD",
		"GE",
		"GH",
		"GM",
		"GN",
		"GQ",
		"GR",
		"GT",
		"GW",
		"GY",
		"HN",
		"HR",
		"HT",
		"HU",
		"ID",
		"IE",
		"IL",
		"IN",
		"IQ",
		"IR",
		"IS",
		"IT",
		"JM",
		"JO",
		"JP",
		"KE",
		"KG",
		"KH",
		"KI",
		"KM",
		"KN",
		"KP",
		"KR",
		"KS",
		"KW",
		"KZ",
		"LA",
		"LB",
		"LC",
		"LI",
		"LK",
		"LR",
		"LS",
		"LT",
		"LU",
		"LV",
		"LY",
		"MA",
		"MC",
		"MD",
		"ME",
		"MG",
		"MH",
		"MK",
		"ML",
		"MM",
		"MN",
		"MR",
		"MT",
		"MU",
		"MV",
		"MW",
		"MX",
		"MY",
		"MZ",
		"NA",
		"NE",
		"NG",
		"NI",
		"NL",
		"NO",
		"NP",
		"NR",
		"NZ",
		"OM",
		"PA",
		"PE",
		"PG",
		"PH",
		"PK",
		"PL",
		"PT",
		"PW",
		"PY",
		"QA",
		"RO",
		"RS",
		"RU",
		"RW",
		"SA",
		"SB",
		"SC",
		"SD",
		"SE",
		"SG",
		"SI",
		"SK",
		"SL",
		"SM",
		"SN",
		"SO",
		"SR",
		"ST",
		"SV",
		"SY",
		"SZ",
		"TD",
		"TG",
		"TH",
		"TJ",
		"TL",
		"TM",
		"TN",
		"TO",
		"TR",
		"TT",
		"TV",
		"TW",
		"TZ",
		"UA",
		"UG",
		"US",
		"UY",
		"UZ",
		"VA",
		"VC",
		"VE",
		"VN",
		"VU",
		"WS",
		"YE",
		"ZA",
		"ZM",
		"ZW"
];

var country_names = [
		"Andorra",
		"United Arab Emirates",
		"Afghanistan",
		"Antigua and Barbuda",
		"Albania",
		"Armenia",
		"Angola",
		"Argentina",
		"Austria",
		"Australia",
		"Azerbaijan",
		"Bosnia and Herzegovina",
		"Barbados",
		"Bangladesh",
		"Belgium",
		"Burkina Faso",
		"Bulgaria",
		"Bahrain",
		"Burundi",
		"Benin",
		"Brunei Darussalam",
		"Bolivia",
		"Brazil",
		"Bahamas",
		"Bhutan",
		"Botswana",
		"Belarus",
		"Belize",
		"Canada",
		"Congo",
		"Central African Republic",
		"Congo",
		"Switzerland",
		"Cote d’Ivoire",
		"Chile",
		"Cameroon",
		"China",
		"Colombia",
		"Costa Rica",
		"Cuba",
		"Cape Verde",
		"Cyprus",
		"Czech Republic",
		"Germany",
		"Djibouti",
		"Denmark",
		"Dominica",
		"Dominican Republic",
		"Algeria",
		"Ecuador",
		"Estonia",
		"Egypt",
		"Western Sahara",
		"Eritrea",
		"Spain",
		"Ethiopia",
		"Finland",
		"Fiji",
		"Micronesia",
		"France",
		"Gabon",
		"United Kingdom",
		"Grenada",
		"Georgia Republic",
		"Ghana",
		"Gambia",
		"Guinea",
		"Equatorial Guinea",
		"Greece",
		"Guatemala",
		"Guinea-Bissau",
		"Guyana",
		"Honduras",
		"Croatia",
		"Haiti",
		"Hungary",
		"Indonesia",
		"Ireland",
		"Israel",
		"India",
		"Iraq",
		"Iran",
		"Iceland",
		"Italy",
		"Jamaica",
		"Jordan",
		"Japan",
		"Kenya",
		"Kyrgyzstan",
		"Cambodia",
		"Kiribati",
		"Comoros",
		"Saint Kitts and Nevis",
		"North Korea",
		"South Korea",
		"Kosovo",
		"Kuwait",
		"Kazakhstan",
		"Laos",
		"Lebanon",
		"Saint Lucia",
		"Liechtenstein",
		"Sri Lanka",
		"Liberia",
		"Lesotho",
		"Lithuania",
		"Luxembourg",
		"Latvia",
		"Libya",
		"Morocco",
		"Monaco",
		"Moldova",
		"Montenegro",
		"Madagascar",
		"Marshall Islands",
		"Macedonia",
		"Mali",
		"Myanmar",
		"Mongolia",
		"Mauritania",
		"Malta",
		"Mauritius",
		"Maldives",
		"Malawi",
		"Mexico",
		"Malaysia",
		"Mozambique",
		"Namibia",
		"Niger",
		"Nigeria",
		"Nicaragua",
		"Netherlands",
		"Norway",
		"Nepal",
		"Nauru",
		"New Zealand",
		"Oman",
		"Panama",
		"Peru",
		"Papua New Guinea",
		"Philippines",
		"Pakistan",
		"Poland",
		"Portugal",
		"Palau",
		"Paraguay",
		"Qatar",
		"Romania",
		"Serbia",
		"Russia",
		"Rwanda",
		"Saudi Arabia",
		"Solomon Islands",
		"Seychelles",
		"Sudan",
		"Sweden",
		"Singapore",
		"Slovenia",
		"Slovakia",
		"Sierra Leone",
		"San Marino",
		"Senegal",
		"Somalia",
		"Suriname",
		"Sao Tome & Principe",
		"El Salvador",
		"Syria",
		"Swaziland",
		"Chad",
		"Togo",
		"Thailand",
		"Tajikistan",
		"Timor-Leste",
		"Turkmenistan",
		"Tunisia",
		"Tonga",
		"Turkey",
		"Trinidad and Tobago",
		"Tuvalu",
		"Taiwan",
		"Tanzania",
		"Ukraine",
		"Uganda",
		"United States",
		"Uruguay",
		"Uzbekistan",
		"Holy See (Vatican City State)",
		"Saint Vincent and the Grenadines",
		"Venezuela",
		"Viet Nam",
		"Vanuatu",
		"Samoa",
		"Yemen",
		"South Africa",
		"Zambia",
		"Zimbabwe"
	]


}); 
// this is closing the ready method
