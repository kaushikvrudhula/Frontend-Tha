const frame = document.querySelector(".grid-card");
let last = [];
let temp = 0;
let moves = 0;
let scores = 0;
let emojiArray = [
  "🐱‍💻",
  "👺",
  "👾",
  "🤖",
  "🤡",
  "🥶",
  "🐱‍💻",
  "👺",
  "👾",
  "🤖",
  "🤡",
  "🥶",
  "🥭",
  "🍟",
  "🥭",
  "🍟",
];
shuffle(emojiArray);

for (i = 0; i < 16; i++) {
  let div = document.createElement("div");
  let front = document.createElement("div");
  let rear = document.createElement("div");
  front.className = "front";
  rear.className = "rear";
  div.className = "box";
  front.innerHTML = "<p>♦</p>";
  rear.innerHTML = `<p>${emojiArray[i]}</p>`;
  rear.id = `${i}`;

  div.appendChild(front);
  div.appendChild(rear);
  frame.appendChild(div);
}
const moveDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let random = function (e) {
  if (!e.target.classList.contains("spin") && temp < 2) {
    e.target.classList.add("spin");
    temp += 1;
    let rear = e.target.childNodes[1];
    if (last.length > 0) {
      if (
        rear.childNodes[0].innerHTML === last[1].childNodes[0].innerHTML &&
        last[1].id != rear.id
      ) {
        e.target.classList.add("disabled");
        last[0].classList.add("disabled");
        scores += 1;
        temp = 0;
        scoreDiv.innerText = `Score: ${scores}`;
        last = [];
      } else {
        removeSpin(e, last[0]);
        last = [];
      }
    } else {
      last = [e.target, rear];
    }

    moves += 1;
    moveDiv.innerText = `Moves: ${moves}`;
    if (scores >= 18) {
      gameOver();
    }
  }
};
frame.addEventListener("click", random);

// Fishers Algorithm From
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function removeSpin(e, passedLast) {
  setTimeout(() => {
    e.target.classList.remove("spin");
    passedLast.classList.remove("spin");
    temp = 0;
  }, 1500);
}
function gameOver() {
  grid.innerHTML = "<h1>Game Over You Won!</h1>";
  let button = document.createElement("button");
  button.classList.add("end-btn");
  grid.removeEventListener("click", random);
  button.addEventListener("click", () => {
    location.reload();
    return false;
  });

  button.innerText = "reload";
  frame.appendChild(button);
  frame.classList.add("game-over");
}
