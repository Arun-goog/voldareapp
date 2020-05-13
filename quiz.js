// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qnsnumb = document.getElementById("qnsnumb");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("lotus");
const choiceB = document.getElementById("dog");
const choiceC = document.getElementById("cow");
const choiceD = document.getElementById("kapila");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


// create our questions
let questions = [
    {
        question : "ഇന്ത്യയിൽ ഓക്സിജൻ പാർലർ ആരംഭിച്ച റയിൽവേ സ്റ്റേഷൻ ? ",
        qnsnum : "QNS 1",
        choiceA : "പാറ്റ്ന  ",
        choiceB : "അഹമ്മദാബാദ്",
        choiceC : "ഡൽഹി",
        choiceD : "നാസിക്",
        correct : "kapila"
    },{
        question : "2019 ൽ വലയ സൂര്യഗ്രഹണം ദൃശ്യമായ ദിവസം ?",
        qnsnum : "QNS 2",
        choiceA : "ഡിസംബർ 25   ",
        choiceB : "ഡിസംബർ 26",
        choiceC : "നവംബർ 25 ",
        choiceD : "നവംബർ 26",
        correct : "dog"
    },{
        question : "Gandhi Citizenship Education Prize ഏർപ്പെടുത്തിയ രാജ്യം ?",
        qnsnum : "QNS 3",
        choiceA : "ഇറ്റലി",
        choiceB : "റഷ്യ ",
        choiceC : "പോർച്ചുഗൽ",
        choiceD : "അമേരിക്ക ",
        correct : "cow"
    },{
        question : "സി കെ നായിഡു ആജീവനാന്ത  പുരസ്‌കാരം 2019 ൽ നേടിയത് ?",
        qnsnum : "QNS 4",
        choiceA : "കെ ശ്രീകാന്ത്",
        choiceB : "കപിൽ ദേവ്",
        choiceC : "സുനിൽ ഗാവസ്‌കർ",
        choiceD : "സച്ചിൻ",
        correct : "lotus"
    },{
        question : " വിവാഹിതരാവുന്ന യുവതികൾക്ക് 10gm സ്വർണം സമ്മാനമായി നൽകാൻ തീരുമാനിച്ച സംസ്ഥാനം ",
        qnsnum : "QNS 5",
        choiceA : "തെലുങ്കാന",
        choiceB : "അസം",
        choiceC : "ഗുജറാത്ത്‌",
        choiceD : "മധ്യപ്രദേശ്",
        correct : "dog"
    },
    {
        question : "80-മത്  ചരിത്ര കോൺഗ്രസിന് വേദിയായത് ? ",
        qnsnum : "QNS 6",
        choiceA : "കണ്ണൂർ",
        choiceB : "കോഴിക്കോട്",
        choiceC : "പാലക്കാട്‌ ",
        choiceD : "കാസർഗോഡ്",
        correct : "lotus"
    },
    {
        question : "Sustainable Development Goals ഇന്ത്യ 2019 പ്രകാരം Composite SDGs Index ൽ ഒന്നാം റാങ്ക് നേടിയ സംസ്ഥാനം ? ",
        qnsnum : "QNS 7",
        choiceA : "മഹാരാഷ്ട്ര",
        choiceB : "അരുണാചൽപ്രദേശ്",
        choiceC : "തെലുങ്കാന",
        choiceD : "കേരളം",
        correct : "kapila"
    },{
        question : " 107-മത്  ഇന്ത്യൻ സയൻസ് കോൺഗ്രസ്‌ 2020 ൽ വേദി ആകുന്നത് ? ",
        qnsnum : "QNS 8",
        choiceA : "ഹൈദരാബാദ്",
        choiceB : "ചെന്നൈ",
        choiceC : "ബാംഗ്ലൂർ",
        choiceD : "ഡൽഹി",
        correct : "cow"
    },{
        question : "Rabung Bridge ഏത് സംസ്ഥാനത്താണ് ? ",
        qnsnum : "QNS 9",
        choiceA : "അരുണാചൽ",
        choiceB : "സിക്കിം",
        choiceC : "ആസ്സാം",
        choiceD : "ബംഗാൾ ",
        correct : "lotus"
    },{
        question : "അന്താരാഷ്ട്ര സസ്യരോഗ്യ വർഷമായി ആചരിക്കുന്നത് ? ",
        qnsnum : "QNS 10",
        choiceA : "2020",
        choiceB : "2021",
        choiceC : "2022",
        choiceD : "2023",
        correct : "lotus"
    }
    
    
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
   // qImg.innerHTML = "<img src="+ q.imgSrc +">";
    qnsnumb.innerHTML= q.qnsnum;

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    login.style.display = "none";
    start.style.display = "none";
    vold.style.display  = "none";
    var userName = document.getElementById("psw").value;
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    scoreDiv.innerHTML += "<p>"+ userName +"</p>";
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}



