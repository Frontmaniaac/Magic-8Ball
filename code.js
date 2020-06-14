const ball = document.querySelector("img");
const answerText = document.querySelector(".answer");
const errorText = document.querySelector(".error");
const inputQuestion = document.querySelector(".question");
const answerArray = ['Yes!', 'No!','Definitely','Without a doubt','It is certain', 'Signs point to yes', 'Very doubtful', 'My sources say no', 'Ask again later', 'Mayby', "You don't wanna know", 'Not really', 'For sure', 'Are you really asking that?'];

const animateMe = () =>{
    answerText.textContent = ' '
    ball.classList.add("shake");
    setTimeout(checkInput,1000)
 }
const checkInput = () =>{
    
    ball.classList.remove("shake")
    if(inputQuestion.value !== ""){
        generateAnswer()
        errorText.textContent = ' '
    }
    else{
        errorText.innerHTML = 'Please state a question!'
        answerText.textContent = ' '
        
    }
}

const generateAnswer = () =>{
    const numb = Math.floor(Math.random()* 14);
    console.log(numb)
    answerText.innerHTML = `<span>Answer:</span> ${answerArray[numb]}`
}

ball.addEventListener("click",animateMe);
    
