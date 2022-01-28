const quizDB =[
    {
        question: "Q1: What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Makeup Language",
        d:"HyperText markup Language",
        ans:"ans4"
    },
    {
        question: "Q2: What is the full form Of CSS?",
        a:"Cascading Style Sheet",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheet",
        d:"Cascading Super Sheet",
        ans:"ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a:"HyperText Transfer Product",
        b:"HyperText Test Protocol",
        c:"Hey Transfer Product",
        d:"HyperText Transfer Protocol",
        ans:"ans4"
    },
    {
        question: "Q4: What is the full form of Js?",
        a:"javaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShop",
        ans:"ans1"
    },
    {
        question: "Q5: What is the full form of DSA?",
        a:"Data Structured Area",
        b:"Data suffient algorithm",
        c:"Data Squerry area",
        d:"Data Structure Algorithm",
        ans:"ans4"
    },
    
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount=0;
let score=0;
const loadQuestion =() => {
    const questionList=quizDB[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();

const getChechAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer =curAnsElem.id;
        }
        
    })
    return answer;
};
 const deselectAll = () => {
     answers.forEach((curAnsElem) => curAnsElem.checked=false);
 }

submit.addEventListener('click',() =>{
    const checkAnswer =getChechAnswer();
    console.log(checkAnswer);
    if(checkAnswer==quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();

    }else{
        showScore.innerHTML = `<h3>You Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea')
    }
});