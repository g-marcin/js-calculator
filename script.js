let display = document.getElementById("display");

// let buttons = document.getElementsByClassName("numBtn");

// window.onload = init();
function Operation(){
  this.first=0;
  this.second=0;
  this.result=0;
  this.mode="";
  this.sign="";
  this.clearDisplay =   () => {display.innerHTML = "";};
  this.read = () => {return parseFloat(display.innerHTML)};
}

let operation = new Operation();

// // window.onload = setDisplay(5);
// function getDisplayInnerHTML() {
//   let display = document.getElementById("display");
//   return display.innerHTML;
// }

// function init() {
//   document.getElementById("main_wrapper").style.background = "crimson";
//   let numbers = document.getElementsByClassName("numBtn");
//   numbers.console.log(numbers);
// }

window.addEventListener("keydown", (event)=>{
let key = event.key;
let regexp1 = /[0-9]/
if (regexp1.test(key)){
  clickDigitBtn(key)
}else {null}
let regexp2 = /^[\/*|\-*|\+*|\**]$/;
if (regexp2.test(key)){
  clickOperatorBtn(key)
}

if (event.key=="c"){
  clickDigitBtn("AC");
}

if(event.key=="Enter"){
  clickResultBtn()
}

if(event.key=="Backspace"){
  let view = display.innerText;
  length = view.length;
  display.innerHTML=view.slice(0,length-1);
  console.log("bs");
}

if(event.key=="%"){
  clickDigitBtn("percent");
}
if(event.key=="."){
  clickDigitBtn("dot");
}




});


function clickDigitBtn(digit) {
  switch (digit) {
    case "dot":
      if (display.innerHTML == "") {
        operation.clearDisplay();
      } else if (!display.innerHTML.includes(".")) {
        display.innerHTML += ".";
      } 
      operation.mode = "typing";
      break;
    case "percent":
      display.innerHTML == "" ? operation.clearDisplay() : (display.innerHTML = (operation.read() * 0.01).toFixed(2));
      break;
    case "AC":
      operation = new Operation();
      operation.clearDisplay();
      break;
    case "0":
      operation.mode == "result" ? operation.clearDisplay() : null;
      display.innerHTML == digit ? null : (display.innerHTML += digit);
      break;
    default:
      operation.mode == "result" ? operation.clearDisplay() : null;
      display.innerHTML == toString(digit) ? (display.innerHTML = digit) : (display.innerHTML += digit);
  }
}

function clickOperatorBtn(operator) {
  if (display.innerHTML) operation.first = operation.read();
  operation.mode = "typing";
  operation.clearDisplay();
  operation.sign = operator;
}

function clickResultBtn() {
  if (operation.mode == "result") {
    operation.result = eval(`operation.result${operation.sign}operation.second`);
  }
  if (operation.mode == "typing") {
    if (display.innerHTML != "") {
      operation.second = operation.read();
      operation.result = eval(`${operation.first} ${operation.sign} ${operation.second}`);
      operation.mode = "result";
    } else null;
  }

  display.innerHTML != "" ? (display.innerHTML = operation.result) : null;
}
