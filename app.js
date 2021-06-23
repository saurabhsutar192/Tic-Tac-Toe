let box = document.querySelectorAll(".box");
let restartBtn = document.querySelector(".restart");
let playerX = document.querySelector(".playerX");
let playerO = document.querySelector(".playerO");
let switcher = false;
let pX = [];
let pO = [];

let handleClick = (e) => {
  switcher = !switcher;

  let clickedBox = e.target;
  if (switcher) {
    clickedBox.innerHTML = "X";
  } else {
    clickedBox.innerHTML = "O";
  }
  clickedBox.removeEventListener("click", handleClick);

  setTimeout(compare, 100);
};

let compare = () => {
  let a1 = box[0].innerHTML;

  let a2 = box[1].innerHTML;
  let a3 = box[2].innerHTML;
  let b1 = box[3].innerHTML;
  let b2 = box[4].innerHTML;
  let b3 = box[5].innerHTML;
  let c1 = box[6].innerHTML;
  let c2 = box[7].innerHTML;
  let c3 = box[8].innerHTML;

  if (a1 === a2 && a1 === a3 && a1 !== "") {
    if (a1 === "X") {
      playerX_wins();
    } else {
      playerO_wins();
    }
    restart();
  } else if (b1 === b2 && b1 === b3 && b1 !== "") {
    if (b1 === "X") {
      playerX_wins();
    } else {
      playerO_wins();
    }
    restart();
  } else if (c1 === c2 && c1 === c3 && c1 !== "") {
    if (c1 === "X") {
      playerX_wins();
    } else {
      playerO_wins();
    }
    restart();
  } else if (a1 === b1 && a1 === c1 && a1 !== "") {
    if (a1 === "X") {
      playerX_wins();
    } else {
      playerO_wins();
    }
    restart();
  } else if (a2 === b2 && a2 === c2 && a2 !== "") {
    if (a2 === "X") {
      playerX_wins();
    } else {
      playerO_wins();
    }
    restart();
  } else if (a3 === b3 && a3 === c3 && a3 !== "") {
    if (a3 === "X") {
      playerX_wins();
    } else {
      playerO_wins();
    }
    restart();
  } else if (a1 === b2 && a1 === c3 && a1 !== "") {
    if (a1 === "X") {
      playerX_wins();
    } else {
      playerO_wins();
    }
    restart();
  } else if (a3 === b2 && a3 === c1 && a3 !== "") {
    if (a3 === "X") {
      playerX_wins();
    } else {
      playerO_wins();
    }
    restart();
  } else if (
    a1 !== "" &&
    b1 !== "" &&
    c1 !== "" &&
    a2 !== "" &&
    b2 !== "" &&
    c2 !== "" &&
    a3 !== "" &&
    b3 !== "" &&
    c3 !== ""
  ) {
    window.alert("tied");
    restart();
  }
};

let restart = () => {
  switcher = false;
  box.forEach((box) => {
    box.innerHTML = "";
    box.addEventListener("click", handleClick);
  });
};

let playerX_wins = () => {
  window.alert("X wins the round!");
  pX.push("O");
  playerX.innerHTML = "";
  pX.forEach((arr) => {
    playerX.innerHTML += arr;
  });
  if (pX.length === 10) {
    window.alert("X wins the Match!");
    location.reload();
  } else if (pO.length === 10) {
    window.alert("O wins the Match");
    location.reload();
  }
};

let playerO_wins = () => {
  window.alert("O wins the Round!");
  pO.push("O");
  playerO.innerHTML = "";
  pO.forEach((arr) => {
    playerO.innerHTML += arr;
  });
  if (pX.length === 10) {
    window.alert("X wins the Match!");
    location.reload();
  } else if (pO.length === 10) {
    window.alert("O wins the Match");
    location.reload();
  }
};

box.forEach((box) => {
  box.addEventListener("click", handleClick);
});

restartBtn.addEventListener("click", restart);
