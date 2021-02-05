let num1 = 0;   //Randomly generated number
let num2 = 0;   //Randomly generated number
let numberCorrect = 0;  //Counter for number correct
let problemsDone = 0;   //Counter for total problems done
const nextButton = document.getElementById('nextButton'); //next button
const checkButton = document.getElementById('checkButton'); //check button
const resetButton = document.getElementById('resetButton'); //reset button
const feedback =  document.getElementById('feedback'); //feedback
const problemBox = document.getElementById('problemBox'); //problembox
const answer = document.getElementById('answer'); //answer



//Keeps cursor active in the input field
function SetFocus () {
    let input = answer;
    input.focus ();
}

//Generates problem to be solved and displays it on the screen    
function generateMultiplicationProblem () {
    nextButton.disabled = true;
    checkButton.disabled = false;
    resetButton.disabled = true;

    num1 = Math.floor(Math.random() * 10 +1);
    num2 = Math.floor(Math.random() * 10 +1);
    problemBox.innerHTML = `<p>${num1} x ${num2} =  ?</p>`;
    answer.value = "";
    feedback.innerHTML = `<p></p>`;  
    SetFocus();    
    
}

//Gets answer from user after button click and calls checkAnswer
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = answer.value;
    inputVal = +inputVal;
    checkMultiplicationAnswer(num1, num2, inputVal);
}

//Checks Answer and displays feedback
function checkMultiplicationAnswer  (num1, num2, inputVal) {
    let total = num1 * num2;
    if (total == inputVal) {
        numberCorrect += 1;
        feedback.innerHTML = `<p>CORRECT!</p>`; 
    } else {
        feedback.innerHTML = `<p>Sorry, that's incorrect.  The answer is ${total}.</p>`; 
    }
    
    nextButton.disabled = false;
    checkButton.disabled = true;
    problemsDone++;

    if (problemsDone === 10) {
        feedback.innerHTML = `<p>You got ${numberCorrect} out of 10.  Click EXIT to quit or RESET to play again.</p>`;
        nextButton.disabled = true;
        resetButton.disabled = false;
    }
} 

function resetProgram () {
    numberCorrect = 0;
    problemsDone = 0;
    generateMultiplicationProblem();
}

function exitProgram () {
    window.close();
}

generateMultiplicationProblem();




