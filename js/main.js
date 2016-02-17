
$(document).ready(function(){
  var controller = new ScrollMagic.Controller();

  function sceneMaker(
    sceneName,
    triggerElement,
    duration,
    triggerHook,
    reverse,
    setClassToggle1,
    setClassToggle2,
    setClassToggle3,
    setClassToggle4,
    setPin) {
        sceneName = new ScrollMagic.Scene({
        triggerElement: triggerElement,
        duration: duration,
        triggerHook: triggerHook,
        reverse: reverse
      })
      .setClassToggle(setClassToggle1, setClassToggle2)
      .setClassToggle(setClassToggle3, setClassToggle4)
      .setPin(setPin)

      return controller.addScene(sceneName);
  }

  var scene1 = new ScrollMagic.Scene({
    triggerElement: trigger1,
    duration: "0%",
    triggerHook: -10,
    reverse: true
  })
  .setClassToggle('#navslide1', 'active')
  .setPin(pin1)

  controller.addScene(scene1);

  var scene2 = new ScrollMagic.Scene({});
  sceneMaker(scene2, trigger2, "0%", 0, true, "#navslide1", 'arrow', '#navslide2', 'active', pin2);

  var scene3 = new ScrollMagic.Scene({});
  sceneMaker(scene3, trigger3, "0%", 0, true, "#trigger3", "active", "#navslide3", "active", pin3);

  var scene4 = new ScrollMagic.Scene({});
  sceneMaker(scene4, trigger4, "0%", 0, true, "#trigger4", "active", "#navslide4", "arrow_active", pin4);

  var scene5 = new ScrollMagic.Scene({});
  sceneMaker(scene5, trigger5, "0%", 0, true, "#trigger5", "active", "#navslide5", "arrow_active", pin5);

  var scene6 = new ScrollMagic.Scene({});
  sceneMaker(scene6, trigger6, "0%", 0, true, "#trigger6", "active", "#navslide6", "arrow_active", pin6);

  var scene7 = new ScrollMagic.Scene({});
  sceneMaker(scene7, trigger7, "0%", 0, true, "#trigger7", "active", "#navslide7", "arrow_active", pin7);

  var scene8 = new ScrollMagic.Scene({});
  sceneMaker(scene8, trigger8, "0%", 0, true, "#trigger8", "active", "#navslide8", "arrow_active", pin8);

  var scene9 = new ScrollMagic.Scene({});
  sceneMaker(scene9, trigger9, "0%", 0, true, "#trigger9", "active", "#navslide9", "arrow_active", pin9);

  var scene10 = new ScrollMagic.Scene({});
  sceneMaker(scene10, trigger10, "0%", 0, true, "#trigger10", "active", "#navslide10", "arrow_active", pin10);

  var country_code = 0,
      flag_position_in_array = 0,
      guess = 0,
      answerposition = 0,
      guessnumber = 0,
      score = 0,
      flag_to_print = 0,
      countryflag = 0,
      image_file = 0,
      playlabel = 'Get Started!',
      animation = 0,
      endanimation = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      startcount = 0;

  $(window).on('load', setQuiz);
  $('#play').on('click', getCountry);
  $('#showprinciples').on('click', hideFlag);
  $('#backtoflagfromprinciplesbutton').on('click', BacktoFlagFromPrinciples);
  $('#good').on('click', getAnswerGood);
  $('#bad').on('click', getAnswerBad);
  $('#mapinfo').on('click', printMap);

  // Runs once at page load to set up the quiz area and show first flag
  function setQuiz () {
    $('#playdisplay').text(playlabel);
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
    animation="animated bounceOutRight";
    $("#rules").addClass(animation).one(endanimation,
    function(){
      $(this).removeClass(animation);
      $("#rules").removeClass('on');
    });
    flag_position_in_array = Math.floor(Math.random()*196)
    if (flag_position_in_array != 'undefined') {
      flag_to_print = flags_list[flag_position_in_array];
      countryflag = country_names[flag_position_in_array];
      printCountryName();
      hidePlayButton();
      hideFeedbackandScore ()
    } else {
      getCountry();
    }
  };

  function printCountryName (){
    var cnanimation="animated bounceInDown";
    $("#countrytitle").addClass(cnanimation).one(endanimation,
    function(){
      $(this).removeClass(cnanimation);
    });
    $('#result').text(countryflag);
    showMapInfoButton();
    getFlag();
  }

  function showMapInfoButton () {
    $('#mapinfo').addClass('on');
  }

  function getFlag () {
    image_file = "flags-normal/" + flag_to_print + ".png";
    $('#flag').attr('src', image_file);
    printFlag();
  };

  function printFlag () {
    $("#flag").addClass('on');
    var flanimation="animated bounceInUp";
    $("#flag").addClass(flanimation).on(endanimation,
    function(){
      $(this).removeClass(flanimation);
    });
    introGuessControls();
  }

  function introGuessControls (){
    $('#answer_buttons').addClass("visible");
  }

  function hidePlayButton () {
    $('#play').fadeOut(500).removeClass('on');
    // $('#play').fadeOut(500);
    // $('#play').removeClass('on');
    showPrinciplesButton();
  }

  function showPrinciplesButton () {
    $('#showprinciples').addClass('on').fadeIn(2000).removeClass("fadeIn");
  }
  // END OF GROUP 1 FUNCTIONS document.getElementById('play').onclick

  // START GROUP 2 FUNCTIONS document.getElementById('showprinciples').onclick = hideFlag;
  function hideFlag () {
    $('#flag').removeClass('on');
    hideGuessControls();
    hideMapInfoButton();
    hidePrinciplesButton();
    displayPrinciples();
  }

  function hideGuessControls (){
    animation="animated fadeOut";
    $("#answer_buttons").addClass(animation).on(endanimation,
    function(){
      $(this).removeClass(animation);
      $('#answer_buttons').removeClass('visible');
    });
  }

  function hidePrinciplesButton () {
    $('#showprinciples').fadeOut(1000).removeClass('on');
  }

  function displayPrinciples () {
    $('#principles_panel').removeClass().attr("class", "principles_hint on")
    showBacktoFlagFromPrinciplesButton ();
  }

  function showBacktoFlagFromPrinciplesButton () {
    $('#backtoflagfromprinciplesbutton').addClass('on');
  }
  // END GROUP 2 FUNCTIONS document.getElementById('showprinciples').onclick = hideFlag;
  // START GROUP 3 FUNCTIONS document.getElementById('backtoflagfromprinciplesbutton').onclick = BacktoFlagFromPrinciples;
  function BacktoFlagFromPrinciples () {
    animation="animated fadeOut";
    $('#backtoflagfromprinciplesbutton').addClass(animation).on(endanimation,
    function(){
      $(this).removeClass(animation);
      $('#backtoflagfromprinciplesbutton').removeClass('on');
    });
    hidePrinciples();
    hideMap();
    showMapInfoButton()
  }

  function hidePrinciples () {
    $('#principles_panel').removeClass();
    $('#principles_panel').attr("class", "principles_hint");
    printFlag();
  }
  // END GROUP 3 FUNCTIONS document.getElementById('backtoflagfromprinciplesbutton').onclick = BacktoFlagFromPrinciples;

  // START GROUP 4 FUNCTIONS document.getElementById('good').onclick = getAnswerGood;
  function getAnswerGood (){
    var quizResponse = $('#quizresponse');
    guess = 'good';
    answerposition = flag_position_in_array + 1;
    answer = answer_codes[answerposition];
    if (answer === guess) {
      quizResponse.text('You got it!')
      // document.getElementById('quizresponse').innerText = 'You got it!'
      score = score + 1;
    } else {
      quizResponse.text("No, sorry, it's not great...");
      // document.getElementById('quizresponse').innerText = "No, sorry, it's not great..."
    }
    hideMapInfoButton();
    hidePrinciplesButton();
    showFeedback();
    showPlay();
    updateScore();
  };

  function hideMapInfoButton () {
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
    $('#play').fadeIn(1000).delay(2000).addClass('on');
    // $('#play').addClass('on');
    relabelPlay();
  }

  function relabelPlay () {
    // playlabel = 'Play Again';
    $('#playdisplay').text('Play Again');
    // document.getElementById('playdisplay').innerText = playlabel;
  }
  // END GROUP 4 FUNCTIONS document.getElementById('good').onclick = getAnswerGood;




  // START GROUP 5 FUNCTIONS document.getElementById('good').onclick = getAnswerBad;
  function getAnswerBad (){
    var quizResponse = $('#quizresponse');
    guess = 'bad';
    answerposition = flag_position_in_array + 1;
    answer = answer_codes[answerposition];
    if (answer === guess) {
      quizResponse.text('You Got it!')
    // document.getElementById('quizresponse').innerText = 'You Got it!'
    score = score + 1;
    } else {
      quizResponse.text('No, sorry you are wrong.')
    // document.getElementById('quizresponse').innerText = 'No, sorry you are wrong.'
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
    guessnumber ++;
    // guessnumber = guessnumber + 1;
    $('#scoreboard').addClass('visible');
    $('#yourscore').text(score);
    $('#totalscore').text('/' + guessnumber);
    animateScore ();
  };

  function animateScore() {
    animation = "animated bounceInLeft";
    $("#yourscore").addClass(animation).on(endanimation,
    function(){
      $(this).removeClass(animation);
    });
    animation = "animated bounceInUp";
    $("#totalscore").addClass(animation).on(endanimation,
    function(){
      $(this).removeClass(animation);
    });
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
    var map="https://www.google.com/maps/embed/v1/search?key=AIzaSyA00nFCVfgsnGqEIEpmO-sjelodI3op1MI&q="+countryflag;
    $('#map').attr('src', map);
    // document.getElementById('map').src=map;
    $('#principles_panel').removeClass();
    $('#principles_panel').attr("class", "principles_hint");
    $('#map').addClass('on');
    mapanimation="animated flipInX";
    $("#map").addClass(mapanimation).on(endanimation,
    function(){
      $('#map').removeClass("animated flipInX");
    });
    hideFlag ();
  };

  function hideMap () {
    $('#map').removeClass('on');
  }

  // END GROUP 8 FUNCTIONS document.getElementById('mapinfo').onclick = printMap;

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
  };


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
