const questionsAndAnswer = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the smallest prime number?",
    choices: ["1", "2", "3", "5"],
    correctAnswer: "2",
  },
  {
    question: "Which element is represented by the symbol 'O'?",
    choices: ["Gold", "Oxygen", "Hydrogen", "Iron"],
    correctAnswer: "Oxygen",
  },
  {
    question: "Which country is known as the land of the rising sun?",
    choices: ["China", "Australia", "Japan", "India"],
    correctAnswer: "Japan",
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent Van Gogh",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "In which year did the Titanic sink?",
    choices: ["1912", "1923", "1910", "1905"],
    correctAnswer: "1912",
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Nitrogen",
  },
];

const totalQuestions = questionsAndAnswer.length;
let scoreCard = 0;
let questionCounter = 0;
let questionsNum = document.getElementById("questions_no");
let scores = document.getElementById("score");
let questions = document.getElementById("questions");
let nextbtn = document.getElementById("next_btn");
let options = document.getElementsByClassName("options");
let choices = document.getElementsByClassName("choice");
function initialising() {
  score.innerHTML = scoreCard;

  questionsNum.textContent = `${questionCounter + 1} / ${totalQuestions}`;
  questions.innerHTML = questionsAndAnswer[questionCounter].question;
  console.log(questionsAndAnswer[questionCounter].question);

  for (let i = 0; i < options.length; i++) {
    options[i].innerHTML = questionsAndAnswer[questionCounter].choices[i];
  }
}

nextbtn.addEventListener("click", () => {
  if (questionCounter < questionsAndAnswer.length - 1) {
    questionCounter++;
    questionSwitching();
  } else {
    nextbtn.style.backgroundColor = "#000000c4";
    nextbtn.style.opacity = "0.9";
    alert("Quiz is completed!");
    restart();
  }
});

const questionSwitching = () => {
  resetChoiceStyles();
  let currentQuestion = questionsAndAnswer[questionCounter].question;
  let CurrentQuestionNumber = questionCounter;
  questionsNum.textContent = `${CurrentQuestionNumber + 1} / ${totalQuestions}`;
  questions.innerHTML = currentQuestion;
  for (let i = 0; i < options.length; i++) {
    options[i].innerHTML = questionsAndAnswer[questionCounter].choices[i];
  }
};

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function (event) {
    const selectedOption = event.target.textContent;
    console.log(selectedOption);
    const correctAnswer = questionsAndAnswer[questionCounter].correctAnswer;
    if (selectedOption.trim() === correctAnswer.trim()) {
      scoreCard++;
      scores.innerHTML = scoreCard;
      choices[i].style.backgroundColor = "green";
      choices[i].style.color = "white";
    } else {
      choices[i].style.backgroundColor = "red";
      choices[i].style.color = "white";
    }

    // Move to the next question
    setTimeout(() => {
      if (questionCounter < questionsAndAnswer.length - 1) {
        questionCounter++;
        questionSwitching();
      } else {
        nextbtn.style.backgroundColor = "#000000c4";
        nextbtn.style.opacity = "0.9";
        const result = "Quiz Completed!\n" + "Your Score is " + scoreCard;
        alert(result);
        restart();
      }
    }, 1000);
  });
}

const resetChoiceStyles = () => {
  for (let i = 0; i < choices.length; i++) {
    choices[i].style.backgroundColor = ""; // Reset background color to default
    choices[i].style.color = ""; // Reset text color to default
  }
};

initialising();

function restart() {
  resetChoiceStyles();
  scoreCard = 0;
  questionCounter = 0;
  nextbtn.style.backgroundColor = "";
  nextbtn.style.opacity = "1";
  initialising();
}
