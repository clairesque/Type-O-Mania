var temp = document.querySelector('.time');
var temp2 = document.querySelector('.time2');
var temp3 = document.querySelector('.time3');
var button = document.querySelector("button");
var box = document.querySelector(".box");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var words = document.querySelector(".words");
var words1 = document.querySelector("#words1");
var words2 = document.querySelector("#words2");
var words3 = document.querySelector("#words3");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var score3 = document.querySelector("#score3");
var highScore = 0;
var timerDiv = document.querySelector(".time");
var scoreDiv = document.querySelector(".score");
var outer = document.querySelector(".outerWrap");
var outer2 = document.querySelector(".outerWrap2");
var outer3 = document.querySelector(".outerWrap3");
var man = document.getElementById("man");
var man2 = document.getElementById("man2");
var secman = document.getElementById("sec-man");
var secman2 = document.getElementById("sec-man2");
var trdman = document.getElementById("trd-man");
var trdman2 = document.getElementById("trd-man2");
let points = 0;
var spans;
var loseGame = document.querySelector(".loseGame");
var winGame = document.querySelector(".winGame");
var login= document.querySelector(".loginMsg");
var typed;
var theTime = document.querySelector(".theTime");
var theTime2 = document.querySelector(".theTime2");
var theTime3 = document.querySelector(".theTime3");
var time, totaltime;
var timestatus = document.querySelector(".timestatus");
var timestatus3 = document.querySelector(".timestatus3");
var timestatus2 = document.querySelector(".timestatus2");
var timewrap = document.querySelector(".timeWrap");
var timewrap2 = document.querySelector(".timeWrap2");
var timewrap3 = document.querySelector(".timeWrap3");
var modal = document.querySelector(".modal");
var next = document.querySelector(".next");
var again = document.querySelector(".tryAgain");
var background = document.querySelector("#animatedBackground");
var level;

// Declaring and initialising an array of objects
let timemodes = [{levelNumber: 1, seconds: 20, timemode: 10}, 
                 {levelNumber: 2, seconds: 25, timemode: 5},
                 {levelNumber: 3, seconds: 30, timemode: 3} 
                ];

// An array which has multiple position variables
let pos = [-130, 0, 0, -130, 0, 120, 0, 0];


// When the window loads
window.onload = function loader() {
   
    if (sessionStorage['loggedIn'] == "True"){
    outer.style.display = 'none';
    loseGame.style.display = "none";
    modal.style.display = "block";
   login.style.display = "block";
    words1.innerHTML = "";
    words2.innerHTML = "";
    background.style.backgroundImage = "url(./images/city.jpg)";
    words3.innerHTML = "";
    }
    else {
    outer.style.display = 'none';
    loseGame.style.display = "none";
    modal.style.display = "block"; // changed login details for changing PHP to HTML
    login.style.display="none";
    words1.innerHTML = "";
    words2.innerHTML = "";
    background.style.backgroundImage = "url(./images/city.jpg)";
    words3.innerHTML = "";
    }
  
}

// Second level
function levelTwo() {
    level = 2;
    words1.innerHTML = "";
    background.style.backgroundImage = "url(./images/city2.jpg)";
    secman.style.display = 'block';
    secman2.style.display = 'block';
    outer2.style.display = 'block';
    outer.style.display = 'none';
    outer3.style.display = 'none';
    temp2.style.display = 'block';
    theTime2.style.display = 'block';
    temp.style.display = 'none';
    theTime.style.display = 'none';
    score1.style.display = 'none';
    score2.style.display = 'block';
    man.style.display = 'none';
    man2.style.display = 'none';
    timestatus.style.display = 'none';
    timestatus2.style.display = 'block';
    timewrap.style.display = 'none';
    timewrap2.style.display = 'block';
    timewrap3.style.display = 'none';
    timestatus3.style.display = 'none';
    var m4 = setInterval(moveRight2, 80);

    function moveRight2() {
        pos[3] = pos[3] + 10;
        secman.style.left = pos[3] + 'px'; 
        if (pos[3] > 120) {
            clearInterval(m4);
            random2();
            box2.style.display = 'block';
            timestatus.style.display = 'block';
            countdown2();
            invTimer2();

            theTime2.innerText = time;
        }
    }
}

function levelThree() {
    level = 3;
    background.style.backgroundImage = "url(./images/city3.jpg)";
    trdman.style.display = 'block';
    trdman2.style.display = 'block';
    outer2.style.display = 'none';
    temp2.style.display = 'none';
    outer3.style.display = 'block';
    temp3.style.display = 'block';
    theTime2.style.display = 'none';
    theTime3.style.display = 'block';
    temp.style.display = 'none';
    theTime.style.display = 'none';
    score1.style.display = 'none';
    score2.style.display = 'none';
    score3.style.display = 'block';
    man.style.display = 'none';
    man2.style.display = 'none';
    secman.style.display = 'none';
    secman2.style.display = 'none';
    timestatus.style.display = 'none';
    timestatus2.style.display = 'none';
    timestatus3.style.display = 'block';
    timewrap.style.display = 'none';
    timewrap2.style.display = 'none';
    timewrap3.style.display = 'block';
    var m6 = setInterval(moveRight3, 80);

    function moveRight3() {
        pos[6] = pos[6] + 10;
        trdman.style.left = pos[6] + 'px'; 
        if (pos[6] > 120) {
            clearInterval(m6);
            random3();
            box3.style.display = 'block';
            timestatus.style.display = 'block';
            countdown3();
            invTimer3();
            theTime3.innerText = time;
        }
    }
}

// Timer for first level
function countdown() {
    level = 1;
    points = 0;
    background.style.display = "block";

    var timer = setInterval(function () {
        timemodes[0].seconds--;
        temp.innerHTML =timemodes[0].seconds;
        // when the first level gets over
        if (timemodes[0].seconds === 0) {
            clearInterval(cd);
            words1.innerHTML = "";
            var m = setInterval(move, 60);
            var m2 = setInterval(move2, 60);
            // moves the man to the next level
            function move() {
                box.style.visibility = 'hidden';
                pos[0] = pos[0] + 10;
                man.style.left = pos[0] + 'px';
                if (pos[0] > 900) {
                    clearInterval(m);
                    clearInterval(m2);
                    // Move to the second level
                    levelTwo();
                }
            }
            clearInterval(timer);
        }
    }, 1000);
}

// timer for second level
function countdown2() {
    words1.innerHTML = "";
    score1.innerHTML = points;
    var timer = setInterval(function () {
        timemodes[1].seconds--;
        temp2.innerHTML = timemodes[1].seconds;
        // when the first level gets over
        if (timemodes[1].seconds === 0) {
            clearInterval(cd);
            words2.innerHTML = "";
            var m6 = setInterval(move6, 60);
            var m7 = setInterval(move7, 60);
            // moves the man to the next level
            function move6() {
                box2.style.visibility = 'hidden';
                pos[5] = pos[5] + 10;
                secman.style.left = pos[5] + 'px';
                if (pos[5] > 900) {
                    clearInterval(m6);
                    clearInterval(m7);
                    // second level
                    levelThree();
                }
                clearInterval(timer);
            }
        }
    }, 1000);
}

// timer for third level
function countdown3() {
    score1.innerHTML = points;
    box2.style.visibility = 'hidden';

    var timer = setInterval(function () {
        timemodes[2].seconds--;
        temp3.innerHTML = timemodes[2].seconds;
        // when the first level gets over
        if (timemodes[2].seconds === 0) {
            winGame.style.display = "block";
            clearInterval(cd);
            scoreDiv.innerHTML = "0";
            words.innerHTML = "";
            highScore=points;

for (var i = 0, len = localStorage.length; i < len; i++) {
        var scores = {};
        var score = highScore;

        var key = localStorage.key(i);
        var value = localStorage[key];
        scores.score = highScore;
        scores.username = sessionStorage['username'];
        var abc = JSON.parse(localStorage.getItem(key));
        scores.email = abc.email;
        scores.password = abc.password;

        localStorage[scores.username] = JSON.stringify(scores);

        localStorage.setItem("score", score);
    }
            clearInterval(timer);
        }
    }, 1000);
}

// Getting a random word from the list
function random() {
    words1.innerHTML = "";
    var random = Math.floor(Math.random() * list.length);
    var wordArray = list[random].split("");
    for (var i = 0; i < wordArray.length; i++) { // Building the words with spans around the letters
        var span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = wordArray[i];
        words1.appendChild(span);
    }
    spans = document.querySelectorAll(".span");
    totaltime = timemodes[0].timemode;
    if (totaltime == 0) {
        totaltime = timemodes[0].timemode;
    }
}

function random2() {
    words2.innerHTML = "";
    var random2 = Math.floor(Math.random() * list.length);
    var wordArray = list[random2].split("");
    for (var i = 0; i < wordArray.length; i++) { // Building the words with spans around the letters
        var span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = wordArray[i];
        words2.appendChild(span);
    }
    spans = document.querySelectorAll(".span");
    totaltime = timemodes[1].timemode;
    if (totaltime == 0) {
        totaltime = timemodes[1].timemode;
    }
}

function random3() {
    words3.innerHTML = "";
    var random3 = Math.floor(Math.random() * list.length);
    var wordArray = list[random3].split("");
    for (var i = 0; i < wordArray.length; i++) { // Building the words with spans around the letters
        var span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = wordArray[i];
        words3.appendChild(span);
    }
    spans = document.querySelectorAll(".span");
    totaltime = timemodes[2].timemode;
    if (totaltime == 0) {
        totaltime = timemodes[2].timemode;
    }
}

// An array which has the entire list of words used in the game
const list = ['EXERCISE', 'EXERTION', 'EXERCISING', 'READJUSTMENT', 'SMACK', 
'CORRECTION', 'SLIDE', 'SOLO', 'SPECULATION', 'SPIRIT', 'SPORTS', 'SPORTSMANSHIP', 
'SQUAD', 'PRACTICE', 'GYM', 'TRAINING', 'TRAINER', 'MUSCLE', 'MEETING', 'ADJUST', 
'ADJUSTING', 'ADJUSTMENT', 'RESTRUCTURING', 'MOVEMENT', 'CRANKING', 'RESTRUCTURE', 
'REGULATION', 'SQUAT', 'STABILITY', 'STAMINA', 'STATISTICS', 'STEPPER', 'STRATEGY', 
'STREAK', 'STRENGTH', 'STRETCHING', 'STRIDE', 'STRONG', 'SUPINATION', 'SUPPORT', 
'SUSPENSION', 'SWIMMING', 'SYMPTOMS', 'TACKLE', 'TARGETS', 'TEAM', 'TEAMMATE', 
'TECHNICAL', 'TENNIS', 'TEST', 'THERAPEUTIC', 'THERAPY', 'TIMEOUT', 'TIMING', 
'TONE', 'TORSO', 'TOURNAMENT', 'TRAINER', 'TRAINING', 'TRANSFORM', 'TRANSFORMATION', 
'TREADMILL', 'UNBELIEVABLE', 'UNUSUAL', 'USUAL', 'VACCINATION', 'VALIANT', 'VICTORY', 
'VIOLATION', 'VITAMINS'];


// When the start button is clicked, the game begins
button.addEventListener("click", function (e) {
    outer.style.display = 'block';
    outer2.style.display = 'none';
    outer3.style.display = 'none';
    var i = setInterval(moveRight, 80);
    function moveRight() {
        man.style.display = 'block';
        pos[0] = pos[0] + 10;
        if (pos[0] > 120) {
            clearInterval(i);
            box.style.display = 'block';
            timestatus.style.display = 'block';
            countdown();
            invTimer();
            theTime.innerText = time;
        }
        man.style.left = pos[0] + 'px'; 
    }
    var modal = document.querySelector(".modal");
    modal.style.display = 'none';
    random();
});

// Timer for each word
function invTimer() {
    time = totaltime;
    cd = setInterval(function () {
        if (time > 0) {
            time--;
            theTime.innerText = time;
        } else if (time === 0) {
           
            loseGame.style.display = "block";
highScore=points;

// This section of code adds the high score to the leaderboard
for (var i = 0, len = localStorage.length; i < len; i++) {
        var scores = {};
        var score = highScore;

        var key = localStorage.key(i);
        var value = localStorage[key];
        scores.score = highScore;
        scores.username = sessionStorage['username'];
        var abc = JSON.parse(localStorage.getItem(key));
        scores.email = abc.email;
        scores.password = abc.password;

        localStorage[scores.username] = JSON.stringify(scores);

        localStorage.setItem("score", score);
    }
            var m3 = setInterval(move3, 40);

            function move3() {
                box.style.visibility = 'hidden';
                pos[2] = pos[2] + 10;
                man2.style.left = pos[2] + 'px';
                if (pos[2] > 1000) {
                    clearInterval(m3);
                }
            }
            outer.style.display = "none";

            time = totaltime + 1;
        } else {
            clearInterval(cd);
        }
    }, 1000);
}



function invTimer2() {
    time = totaltime;
    cd = setInterval(function () {
        if (time > 0) {
            time--;
            theTime2.innerText = time;
        } else if (time == 0) {
            highScore=points;
loseGame.style.display = "block";
for (var i = 0, len = localStorage.length; i < len; i++) {
        var scores = {};
        var score = highScore;

        var key = localStorage.key(i);
        var value = localStorage[key];
        scores.score = highScore;
        scores.username = sessionStorage['username'];
        var abc = JSON.parse(localStorage.getItem(key));
        scores.email = abc.email;
        scores.password = abc.password;

        localStorage[scores.username] = JSON.stringify(scores);

        localStorage.setItem("score", score);
    }
            
            var m5 = setInterval(move5, 40);

            function move5() {
                box2.style.visibility = 'hidden';
                pos[4] = pos[4] + 10;
                secman.style.left = pos[4] + 'px';
                if (pos[4] > 1000) {
                    clearInterval(m5);
                }
            }
            outer2.style.display = "none";
            time = totaltime + 1;
        } else {
            clearInterval(cd);
        }
    }, 1000);
}


function invTimer3() {
    time = totaltime;
    cd = setInterval(function () {
        if (time > 0) {
            time--;
            theTime3.innerText = time;
        } else if (time == 0) {
highScore=points;
loseGame.style.display = "block";
for (var i = 0, len = localStorage.length; i < len; i++) {
        var scores = {};
        var score = highScore;

        var key = localStorage.key(i);
        var value = localStorage[key];
        scores.score = highScore;
        scores.username = sessionStorage['username'];
        var abc = JSON.parse(localStorage.getItem(key));
        scores.email = abc.email;
        scores.password = abc.password;

        localStorage[scores.username] = JSON.stringify(scores);

        localStorage.setItem("score", score);
    }
            
            outer3.style.display = "none";
            time = totaltime + 1;
        } else {
            clearInterval(cd);
        }
    }, 1000);
}

function move2() {
    box.style.visibility = 'hidden';
    pos[1] = pos[1] + 10;
    man2.style.left = pos[1] + 'px';
}
function move7() {
    box.style.visibility = 'hidden';
    pos[7] = pos[7] + 10;
    secman2.style.left = pos[7] + 'px';
}
//Show time and check time = 0 to random new word


if (pos[0] < 120) {
    function typing(e) {
        typed = String.fromCharCode(e.which);
        for (var i = 0; i < spans.length; i++) {
            if (spans[i].innerHTML === typed) { 
                if (spans[i].classList.contains("bg")) { 
                    continue;
                } else if (spans[i].classList.contains("bg") === false && spans[i - 1] === undefined || spans[i - 1].classList.contains("bg") !== false) { // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
                    spans[i].classList.add("bg");
                    break;
                }
            }
        }
        var checker = 0;
        for (var j = 0; j < spans.length; j++) { 
            if (spans[j].className === "span bg") {
                checker++;
            }
            if (checker === spans.length) {


                setTimeout(display, 100);
                function display() {
                    box.style.display = 'none';

                }
                points++; 
                scoreDiv.innerHTML = points; //add points to the points div
                document.removeEventListener("keydown", typing, false);
                setTimeout(function () {
                    if (level == 1) {

                        words1.className = "words"; // restart the classes
                        random(); // give another word
                    }
                    else if (level == 2) {
                        score2.innerHTML = points; //add points to the points div
                        words2.className = "words"; // restart the classes
                        random2();
                    }

                    else if (level == 3) {
                        score3.innerHTML = points; //add points to the points div
                        words3.className = "words"; // restart the classes
                        random3();
                    }


                    time = totaltime + 1;
                    box.style.display = 'block';

                    document.addEventListener("keydown", typing, false);
                }, 200);
            }
        }

    }
}



document.addEventListener("keydown", typing, false);

