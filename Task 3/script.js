// List of questions and their answers 
const questions = [
    {
        question:"Captain who won all 3 ICC Tournaments.",
        answers:[
            {text:"MS Dhoni",correct:true},
            {text:"Ricky Pointing",correct:false},
            {text:"Virat Kohli",correct:false},
            {text:"Ben Stokes",correct:false}
        ]
    },
    {
        question:"Who scored most number of 200s in international cricket?",
        answers:[
            {text:"Virat Kohli",correct:false},
            {text:"Rohit Sharma",correct:true},
            {text:"Shubhman Gill",correct:false},
            {text:"Chris Gayle",correct:false}
        ]
    },
    {
        question:"#1 Test bowler in 2023.",
        answers:[
            {text:"Nathan Lyon",correct:false},
            {text:"Pat Cummins",correct:false},
            {text:"James Anderson",correct:false},
            {text:"Ravichandran Ashwin",correct:true}
        ]
    },{
        question:"Which team has all the ICC Trophies?",
        answers:[
            {text:"India",correct:false},
            {text:"England",correct:false},
            {text:"New Zealand",correct:false},
            {text:"Australia",correct:true}
        ]
    },
    {
        question:"Who won IPL 2023 Edition?",
        answers:[
            {text:"Gujrat Titans",correct:false},
            {text:"Royal Challengers Bangalore",correct:false},
            {text:"Chennai Super King",correct:true},
            {text:"Mumbai Indians",correct:false}
        ]
    }
];


const quesElement = document.getElementById("question");
const ansButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-ques");
let currentQuesIndex =0;
let score = 0;

// main function to start the quiz 
function startQuiz(){
    currentQuesIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// displaying questions to the users 
function showQuestion(){
    resetState();
    let currQuestion = questions[currentQuesIndex];
    let QuestionNumber = currentQuesIndex + 1;
    quesElement.innerHTML = QuestionNumber + ". " + currQuestion.question;

    currQuestion.answers.forEach(answer=>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click",selectAnswer);
    });
}

//resetting the quiz
function resetState(){
    nextButton.style.display = "none";
    while(ansButton.firstChild){
        ansButton.removeChild(ansButton.firstChild);
    }
}

// displaying whether user selected correct answer or not 
function selectAnswer(Select){
    const select = Select.target;
    const isCorrect = select.dataset.correct==="true";
    if(isCorrect){
        select.classList.add("correct");
        score++;
    }
    else{
        select.classList.add("incorrect");
    }

    Array.from(ansButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";

}

// for showing total score 
function showScore(){
    resetState();
    quesElement.innerHTML = "Your Score  is " + score + "/" + questions.length;
    nextButton.innerHTML = "Try Again!!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuesIndex++;
    if(currentQuesIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuesIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

// to start the quiz 
startQuiz();



