let questions;
fetch("./questions.json")
  .then(function (u) {
    return u.json();
  })
  .then(function (json) {
    questions = json;
  });

const stb = document.getElementById("start");
const container = document.querySelector(".container");
const ques = document.querySelector(".ques");
const options = document.querySelector(".options");
const nxb = document.getElementById("next");
let current = document.getElementById("current");
let score = document.getElementById("score");
let shuffled, index, sc;
stb.addEventListener("click", startGame);
nxb.addEventListener("click", () => {
  index++;
  nextQues();
});

function startGame() {
  stb.classList.add("hide");
  index = 0;
  sc = 0;
  score.innerText = 0;
  shuffled = questions.sort(() => Math.random() - 0.5).slice(0, 10);
  container.classList.remove("hide");
  nextQues();
}

function nextQues() {
  resetQues();
  showQuestion(shuffled[index]);
}

function resetQues() {
  nxb.classList.add("hide");
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}

function showQuestion(question) {
  ques.innerText = question.question;
  current.innerText = index + 1 + "/10";
  answers = [
    question.optionA,
    question.optionB,
    question.optionC,
    question.optionD,
  ];
  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.onclick = null;
    button.innerText = answer;
    button.classList.add("ans");
    button.classList.onclick();
    if (question.answer === answer) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", selectAns);
    options.appendChild(button);
  });
}
var element = document.getElementById("elem");
element.onclick = function (event) {
  console.log(event);
};
function selectAns(e) {
  const selected = e.target;
  const correct = selected.dataset.correct;
  setStatus(selected, correct);
  Array.from(options.children).forEach((button) => {
    setStatus(button, button.dataset.correct);
  });
  if (shuffled.length > index + 1) {
    nxb.classList.remove("hide");
  } else {
    stb.innerText = "Restart Quiz";
    container.classList.add("hide");
    nxb.classList.add("hide");
    stb.classList.remove("hide");
  }
  nxb.classList.remove("hide");
  if (correct) sc++;
  score.innerText = sc;
}

function setStatus(element, correct) {
  clearStatus(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatus(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
