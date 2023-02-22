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