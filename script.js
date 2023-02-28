"use strict";

let name = prompt("Stop! You've violated the law! It's been too long since I've seen a good brawl! I'm just warming up, you pathetic worm! HURRR! REMEMBER THE EMPEROR! I suppose I can let you in.. What is your name?");
alert(`Welcome to the site, rebel ${name}. The bots will be watching you...`);

function submitQuiz() {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;
  const q4 = document.getElementById("q4").value;
  const q5 = document.getElementById("q5").value;

  const answers = ["Kaydee Kelly", "July", "Yes", "Character Design", "Creative Writing"];
  const userAnswers = [q1, q2, q3, q4, q5];

  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (userAnswers[i].toLowerCase() === answers[i].toLowerCase()) {
      score++;
    }
  }

  alert(`You got ${score} out of 5 questions correct!`);
}

let correctAnswer = "6"

function submitQ6() {
  let userAns = document.getElementById("q6").value;
  if (userAns > correctAnswer) {
    alert(`Number is too high!`);
  }
  else if (userAns < correctAnswer) {
    alert(`Number is too low!`)
  }
  else if (userAns = correctAnswer)
  alert(`You guessed right!`)
}


function checkUA(userinput, correctanwsers) {
  let userWC = false;
  let x = 0;
  while (x < correctanwsers.length) {
    if (correctanwsers[x] == userinput) {
      userWC = true
    }
    x += 1
  }
  if (userWC == true) {
    return true
  }
  if (userWC == false) {
    return false
  }

}


let userAns2 = "";
let correctAnswer2 = ["arylic", "oil", "digital", "watercolor"];
let retry = 6
function submitQ7() {

  if (retry > 0) {


    let userAns2 = document.getElementById("q7").value;
    let userWC = checkUA(userAns2, correctAnswer2)

    if (userWC == true) {
      alert("yay")
    }
    if (userWC == false) {
      alert("nope")
    }

    retry -= 1
  }
  else {
    alert(`You're out of tries.`)
  }
}



let ansYN1 = "yes"

function submitYN1() {
  let userAns3 = document.getElementById("yn1").value;
  if (userAns3 == ansYN1) {
    alert(`Thats right!`); 
  }
  else if (userAns3 == "no") {
    alert(`Try again.`)
  }
}

let ansYN2 = "no"

function submitYN2() {
  let userAns3 = document.getElementById("yn2").value;
  if (userAns3 == ansYN2) {
    alert(`Thats right!`); 
  }
  else if (userAns3 == "yes") {
    alert(`Try again.`)
  }
}

let ansYN3 = "no"

function submitYN3() {
  let userAns3 = document.getElementById("yn3").value;
  if (userAns3 == ansYN3) {
    alert(`Thats right!`); 
  }
  else if (userAns3 == "yes") {
    alert(`Try again.`)
  }
}

