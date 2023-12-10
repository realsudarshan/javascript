const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
let index=0;
let right=0;
let wrong=0;
let total=quizData.length;
const quesBox=document.getElementById("questionBox")
let allInputs = document.querySelectorAll("input[type='radio']")
const LoadQuestion=()=>{
    if(index===total){
        return endQuiz();
    }
    {
        reset();
    const data = quizData[index]
    quesBox.innerHTML=`${index+1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText=data.a;
    allInputs[1].nextElementSibling.innerText=data.b;
    allInputs[2].nextElementSibling.innerText=data.c;
    allInputs[3].nextElementSibling.innerText=data.d;
}
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
    const ans=getAnswer()
    console.log(ans)
    console.log(data.correct)
    if(ans===data.correct){
    right++;
    }
    else{
    wrong++;
    }
    index++;
    LoadQuestion();
    return;
}
)
const getAnswer=()=>{
    let answer;
    allInputs.forEach(
        (input)=>{
            if(input.checked){
            answer=input.value
            }
        }
    )
    return answer;
}


const reset=()=>{
    allInputs.forEach((input)=>{
        input.checked=false;
    }
    )
}
const endQuiz=()=>{
    document.getElementById("container").innerHTML=`<h2 style="text-align:center">Thanks for playing.</h2>
    <br>
    <h3 style="text-align:center">Correct=${right}.<h3><br>
    <h3 style="text-align:center">InCorrect=${wrong}.<h3><br>
    <h3 style="text-align:center">Total questions=${total}.<h3><br>`
}
LoadQuestion();



