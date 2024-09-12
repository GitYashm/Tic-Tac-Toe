let boxes = document.querySelectorAll(".box");
let turnX = true;
let winnerStatus = document.querySelector(".winner");
let newGameBtn = document.querySelector(".newGame");

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button clicked");
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }

    checkWinner();
    box.disabled = true;
  });
});
const checkWinner = () => {
  for (let patterns of winPattern) {
    const win1 = boxes[patterns[0]].innerText;
    const win2 = boxes[patterns[1]].innerText;
    const win3 = boxes[patterns[2]].innerText;
    if (win1 != "" && win2 != "" && win3 != "") {
      if (win1 === win2 && win2 === win3) {
        winnerStatus.innerText = `congratulations, winner is ${win1}`;
        disabled();
      }
    }
  }
};
const disabled = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
newGameBtn.addEventListener("click", () => {
  turnX = true;
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    winnerStatus.innerText = "";
  }
});
