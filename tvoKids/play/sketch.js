let board;
let players = ["Yellow", "Blue"];
let DS;
let B;
let cPlayer;
let empty;
let resultP;

function preload() {
  DS = loadImage("../images/yellow.svg");
  B = loadImage("../images/blue.svg");
}

const cellSize = {
  width: 0,
  height: 0,
};

function container() {
  board = [
    /// creating the board as array of containing arrays of string 3x3
    ["", "", ""], /// top
    ["", "", ""], /// mid
    ["", "", ""], ///bottom
  ];
  empty = [];
  if (!resultP) {
    resultP = createP("");
  }
  resultP.style("font-size", "18pt");
  resultP.style("font-family", "sans-serif");
  cellSize.width = width / board.length;
  cellSize.height = height / board[0].length;
  cPlayer = floor(random(players.length));
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      empty.push(`${i}_${j}`);
    }
  }
}

function setup() {
  let canvas = createCanvas(windowWidth / 2, windowWidth / 2);
  canvas.id("ticTacCanvas");
  container();
}

function equals(a, b, c) {
  return a == b && b == c && a != "";
}

function checkWinner() {
  let winner = null;

  // rows
  for (let i = 0; i < 3; i++) {
    if (equals(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // columns
  for (let i = 0; i < 3; i++) {
    if (equals(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // cross
  /// first diagonal
  if (equals(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  /// other digonal
  if (equals(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  if (winner == null && empty.length == 0) {
    return "tie";
  } else {
    return winner;
  }
}

function nextTurn(i, j) {
  let index = empty.indexOf(`${i}_${j}`);
  let locate = empty.splice(index, 1)[0]; // remove the used location from the array
  board[i][j] = players[cPlayer];
  cPlayer = (cPlayer + 1) % players.length;
}

function emptyCells(i, j) {
  return empty.indexOf(`${i}_${j}`) !== -1;
}

function mousePressed() {
  const i = Math.floor(mouseX / cellSize.width);
  const j = Math.floor(mouseY / cellSize.height);
  if (!checkWinner() && emptyCells(i, j)) {
    nextTurn(i, j);
  }
}

function keyPressed() {
  //reset game
  if (checkWinner() !== null && key == "r") {
    container();
  }
}

function draw() {
  background("#763188");
  let w = width / 3;
  let h = height / 3;
  stroke(255);
  strokeWeight(5);

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = w * j + w / 2;
      let y = h * i + h / 2;
      let locate = board[j][i];
      textSize(18);
      if (locate == players[1]) {
        noFill();
        image(B, x - 25, y - 25, 50, 50);
      } else if (locate == players[0]) {
        image(DS, x - 25, y - 25, 50, 50);
      }
    }
  }

  let result = checkWinner();

  if (result != null) {
    if (result == "tie") {
      resultP.html("Tie!");
    } else {
      resultP.html(`${result} wins! Press "R" to restart`);
    }
  } else {
    resultP.html(`Turn of ${players[cPlayer]}`);
  }
}
