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

let currentQuestion = 3;


function init(){
    document.getElementById('length').innerText = questions.length;
    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionHeader').innerText = question['question'];
    document.getElementById('answer_1').innerText = question['answer_1'];
    document.getElementById('answer_2').innerText = question['answer_2'];
    document.getElementById('answer_3').innerText = question['answer_3'];
    document.getElementById('answer_4').innerText = question['answer_4'];
    document.getElementById('currentQuest').innerText = currentQuestion + 1 ;
}


function answer(selection){
    let question = questions[currentQuestion];
    console.log('Right answer: ', question['right_answer']);
    let selectedQuestionNumber = selection.slice(-1);
    if(question['right_answer'] == selectedQuestionNumber){
        document.getElementById(selection).parentNode.classList.add('bg-success')
    }
    else{
        document.getElementById(selection).parentNode.classList.add('bg-danger')
    }
}