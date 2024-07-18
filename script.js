let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim-Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wie sieht ein korrektes JSON-Objekt aus?",
        "answer_1": "{\"name\": \"John\", \"age\": 30}",
        "answer_2": "{name: \"John\", age: 30}",
        "answer_3": "{\"name\" = \"John\", \"age\" = 30}",
        "answer_4": "(\"name\": \"John\", \"age\": 30)",
        "right_answer": 1
    },
    {
        "question": "Wie ändert man die Hintergrundfarbe eines Elements in CSS?",
        "answer_1": "background-color: blue;",
        "answer_2": "color: blue;",
        "answer_3": "bg-color: blue;",
        "answer_4": "background: bleu;",
        "right_answer": 1
    },
    {
        "question": "Wie zeigt man ein Alert-Fenster in JavaScript an?",
        "answer_1": "display(\"Hello World\");",
        "answer_2": "show(\"Hello World\");",
        "answer_3": "alert(\"Hello World\");",
        "answer_4": "notify(\"Hello World\");",
        "right_answer": 3
    },
    {
        "question": "Welcher Datentyp ist in JSON nicht erlaubt?",
        "answer_1": "String",
        "answer_2": "Number",
        "answer_3": "Function",
        "answer_4": "Boolean",
        "right_answer": 3
    },
    {
        "question": "Wie definiert man eine Arrow Function in JavaScript, die zwei Parameter nimmt und deren Summe zurückgibt?",
        "answer_1": "(a, b) => { return a + b; }",
        "answer_2": "function(a, b) => { return a + b; }",
        "answer_3": "a, b => { return a + b; }",
        "answer_4": "(a, b) { return a + b; }",
        "right_answer": 1
    },
    {
        "question": "Wie kann man einen JSON-String in ein JavaScript-Objekt umwandeln?",
        "answer_1": "JSON.stringify()",
        "answer_2": "JSON.parse()",
        "answer_3": "JSON.convert()",
        "answer_4": "JSON.transform()",
        "right_answer": 2
    }
];

let currentQuestion = 0;
let correctAnswers = 0;

let AUDIO_SUCCESS = new Audio('sounds/success.mp3');
let AUDIO_FAIL = new Audio('sounds/fail.mp3');

function init(){
    document.getElementById('length').innerText = questions.length;
    
    showQuestion();
}


function showQuestion() {
    let percent = currentQuestion / questions.length * 100;
    let percentInteger = percent.toFixed(0);
    let question = questions[currentQuestion];
    
    if(gameIsOver())
      { 
        showEndScreen();
      }else{
        updateToNextQuestion();
        updateProgressBar();
}
}

function gameIsOver(){
  return currentQuestion >= questions.length
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let rightAnswer = 'answer_' + question['right_answer']
    
    if(rightAnswerSelected(selectedQuestionNumber, question)){
        document.getElementById(selection).parentNode.classList.add('bg-success')
        document.getElementById('button').disabled = false;
        AUDIO_SUCCESS.play();
        correctAnswers++;
    }
    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(rightAnswer).parentNode.classList.add('bg-success')
        document.getElementById('button').disabled = false;
        AUDIO_FAIL.play();
    }
}


function rightAnswerSelected(selectedQuestionNumber, question){

  return selectedQuestionNumber == question['right_answer'];
}


function nextQuestion(){
     
        currentQuestion++;
        document.getElementById('button').disabled = true;
        removeBackground()
        showQuestion();
        
}


function removeBackground(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function finishContent(){
    return  `   <div id="quizCard" class="card quizcard finish">
                    <img src="img/gameover.jpg" class="card-img-top" alt="Quiz" />
                    <div class="progress">
                        <div id="progress-bar-finished" class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>
                    <div class="card-body text-center">
                        <h5 id="questionHeader" class="card-title">Quiz beendet</h5>
                        <button onclick="restartGame()" id="buttonRestart" type="button"class="btn btn-primary">Erneut spielen</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span id="questionHeader" class="card-title span-center-mb">Du hast <b>${correctAnswers}</b> von <b>${questions.length}</b> Fragen richtig beantwortet.</span> 
                    </div>
                </div>
            `
}


function restartGame(){
    currentQuestion = 0;
    document.body.innerHTML = startContent()
    init();
}


function startContent(){
    return `
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">QuizApp</span>
      </div>
    </nav>
    <div class="container">
     
        <div id="quizCard" class="card quizcard">
        <img src="img/quizy.jpg" class="card-img-top" alt="Quiz" />
 
      <div class="progress">
        <div id="progress-bar" class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
      </div>
        
        <div class="card-body">
          <h5 id="questionHeader" class="card-title">Frage</h5>

          <div class="card quiz-answer-card mb-2" onclick="answer('answer_1')">
            <div id="answer_1" class="card-body">Antwort</div>
          </div>
          <div class="card quiz-answer-card mb-2" onclick="answer('answer_2')">
            <div id="answer_2" class="card-body">Antwort</div>
          </div>
          <div class="card quiz-answer-card mb-2" onclick="answer('answer_3')">
            <div id="answer_3" class="card-body">Antwort</div>
          </div>
          <div class="card quiz-answer-card mb-2" onclick="answer('answer_4')">
            <div id="answer_4" class="card-body">Antwort</div>
          </div>

          <div class="question-footer">
            <span><b id="currentQuest">1</b> von <b id="length">5</b> Fragen</span>
            <button onclick="nextQuestion()" id="button" type="button" disabled class="btn btn-primary">Nächste Frage</button>
          </div>
    
        </div>
      </div>
    </div>
    ` 
}


function showEndScreen(){
  
    let percent = currentQuestion / questions.length * 100;
    let percentInteger = percent.toFixed(0);
    document.getElementById('quizCard').innerHTML= '';
    document.getElementById('quizCard').innerHTML= finishContent();
    document.getElementById('progress-bar-finished').style.width = `${percentInteger}%`;
    document.getElementById('progress-bar-finished').innerText = `${percentInteger} %`;
}


function updateToNextQuestion(){
  
    let question = questions[currentQuestion];
    document.getElementById('questionHeader').innerText = question['question'];
    document.getElementById('answer_1').innerText = question['answer_1'];
    document.getElementById('answer_2').innerText = question['answer_2'];
    document.getElementById('answer_3').innerText = question['answer_3'];
    document.getElementById('answer_4').innerText = question['answer_4'];
    document.getElementById('currentQuest').innerText = currentQuestion + 1 ;
   
}


function updateProgressBar(){
    let percent = currentQuestion / questions.length * 100;
    let percentInteger = percent.toFixed(0);

    document.getElementById('progress-bar').style.width = `${percentInteger}%`;
    document.getElementById('progress-bar').innerText = `${percentInteger} %`;
}