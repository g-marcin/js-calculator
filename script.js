let display = document.getElementById("display");

// let buttons = document.getElementsByClassName("numBtn");

// window.onload = init();
let operation = {
  first: 0,
  second: 0,
  res: 0,
  mode: "",
  sign: "",

  clear: function () {
    display.innerHTML = "";
  },

  read: function () {
    return parseFloat(display.innerHTML);
  },
};

function checkChar(word, char) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) return true;
  }
  return false;
}

// function init() {
//   document.getElementById("main_wrapper").style.background = "crimson";
//   let numbers = document.getElementsByClassName("numBtn");
//   numbers.console.log(numbers);
// }

function clickDigitBtn(digit) {
  switch (digit) {
    case "dot":
      display.innerHTML == ""
        ? operation.clear()
        : checkChar(display.innerHTML, ".")
        ? null
        : (display.innerHTML += ".");
      operation.mode = "typing";
      break;
    case "percent":
      display.innerHTML == ""
        ? operation.clear()
        : (display.innerHTML = (operation.read() * 0.01).toFixed(2));
      break;
    case "AC":
      display.innerHTML = "";
      operation.result = 0;
      operation.first = 0;
      operation.second = 0;
      operation.mode = "";
      operation.sign = "";
      break;
    case "0":
      operation.mode == "result" ? operation.clear() : null;
      display.innerHTML == digit ? null : (display.innerHTML += digit);
      break;
    default:
      operation.mode == "result" ? operation.clear() : null;
      display.innerHTML == toString(digit)
        ? (display.innerHTML = digit)
        : (display.innerHTML += digit);
  }
}

function clickOperatorBtn(operator) {
  operation.mode = "typing";
  operation.first = operation.read();
  operation.clear();
  operation.sign = operator;
}

function _result() {
  if (operation.mode == "result") {
    operation.result = eval(
      `operation.result${operation.sign}operation.second`
    );
  }
  if (operation.mode == "typing") {
    if (display.innerHTML != "") {
      operation.second = operation.read();
      operation.result = eval(
        `${operation.first} ${operation.sign} ${operation.second}`
      );
      operation.mode = "result";
    } else null;
  }

  display.innerHTML != "" ? (display.innerHTML = operation.result) : null;
}
