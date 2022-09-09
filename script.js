"use strict";
const score = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const guessingText = document.querySelector(".start-guess");
const numberScreen = document.querySelector(".number-screen");
const input = document.querySelector(".input-number");
const check = document.querySelector(".check");
const reStart = document.querySelector(".restart");

let SECRET_NUMBER=Math.trunc(Math.random()*21);
let SCORE=20;
let HIGH_SCORE=0;

function displayGuessingText(text){
  guessingText.textContent=text;
}
check.addEventListener("click",function(){
  const inputNumber=Number(input.value); //convert to numeric
  if (!inputNumber) displayGuessingText("Input a valid number !");

  else if(inputNumber===SECRET_NUMBER){ //When wins
  displayGuessingText("Correct ans!");
  numberScreen.textContent=SECRET_NUMBER;
  numberScreen.style.backgroundColor="lightgreen";
  numberScreen.style.color="#000000";
  if(SCORE>HIGH_SCORE){
    HIGH_SCORE=SCORE;
    highScore.textContent=HIGH_SCORE;
  }  
}

else if (inputNumber!==SECRET_NUMBER){
  if(SCORE>1 && SCORE<21){
    displayGuessingText(inputNumber > SECRET_NUMBER ? "Too high!" : "Too low");
    SCORE--;
    score.textContent = SCORE;
  }
  else{
    displayGuessingText("Game over!");
      score.textContent = 0;
  }}});

reStart.addEventListener("click",function(){
  SCORE =20;
  SECRET_NUMBER=Math.trunc(Math.random()*21);
  displayGuessingText("Start Guessing...");
  document.getElementsByClassName("number-window").style.backgroundColor="green";
  numberScreen.style.backgroundColor="black";
  numberScreen.textContent="?";
  score.textContent=SCORE;
  input.value="";
})
