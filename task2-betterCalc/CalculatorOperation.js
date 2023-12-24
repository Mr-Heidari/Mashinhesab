const display = document.getElementById("display");
const prevDisplay = document.getElementById("prevDisplay");
const EnterInputs = "Enter";
const numbers = "1234567890.";
const operations = "+-*/p";
const selectedOperator = document.getElementById("selectedOperator");
let displayHasValue = false;
let prevDisplayHasValue = false;
let displayValue = display.value;
let y = 0;
const operators = {
  "+": function plus() {
    prevDisplayHasValue = true;
    inputs = "+";
    selectedOperator.innerText = inputs;
    prevDisplay.value = Number(prevDisplay.value) + Number(displayValue);
    display.value = null;
    displayHasValue = false;
  },
  "-": function mines() {
    prevDisplayHasValue = true;
    inputs = "-";
    selectedOperator.innerText = inputs;
    prevDisplay.value = Number(prevDisplay.value) - Number(displayValue);
    display.value = null;
    displayHasValue = false;
  },
  "*": function multiply() {
    inputs = "*";
    selectedOperator.innerText = inputs;
    console.log(displayHasValue);
    if (displayHasValue === true && prevDisplayHasValue === true) {
      console.log(display.value);
      prevDisplay.value = Number(prevDisplay.value) * Number(displayValue);
      display.value = null;
      displayHasValue = false;
    } else if (displayHasValue === true) {
      console.log("fak");
      prevDisplayHasValue = true;
      prevDisplay.value = display.value;
      display.value = null;
      displayHasValue = false;
    }
  },
  "/": function divide() {
    inputs = "/";
    selectedOperator.innerText = inputs;
    if (displayHasValue === true && prevDisplayHasValue === true) {
      prevDisplay.value = Number(prevDisplay.value) / Number(displayValue);
      display.value = null;
      displayHasValue = false;
    } else if (displayHasValue === true) {
      console.log("fak");
      prevDisplayHasValue = true;
      prevDisplay.value = display.value;
      display.value = null;
      displayHasValue = false;
    }
  },
  p: function pow() {
    inputs = "p";
    selectedOperator.innerText = inputs;
    console.log(displayHasValue);
    if (displayHasValue === true && prevDisplayHasValue === true) {
      prevDisplay.value = Number(prevDisplay.value) ** Number(displayValue);
      display.value = null;
      displayHasValue = false;
    } else if (displayHasValue === true) {
      prevDisplayHasValue = true;
      prevDisplay.value = display.value;
      display.value = null;
      displayHasValue = false;
    }
  },
  Enter: function equal() {
    operators[`${selectedOperator.innerText}`]();
  },
};
const wichButtonsClicked = {
  one: (document.getElementById("one").onclick = (event) => {
    y = document.getElementById("one").innerText;
  }),
  two: (document.getElementById("two").onclick = (event) => {
    y = document.getElementById("two").innerText;
  }),
  three: (document.getElementById("three").onclick = (event) => {
    y = document.getElementById("three").innerText;
  }),
  four: (document.getElementById("four").onclick = (event) => {
    y = document.getElementById("four").innerText;
  }),
  five: (document.getElementById("five").onclick = (event) => {
    y = document.getElementById("five").innerText;
  }),
  six: (document.getElementById("six").onclick = (event) => {
    y = document.getElementById("six").innerText;
  }),
  seven: (document.getElementById("seven").onclick = (event) => {
    y = document.getElementById("seven").innerText;
  }),
  eight: (document.getElementById("eight").onclick = (event) => {
    y = document.getElementById("eight").innerText;
  }),
  nine: (document.getElementById("nine").onclick = (event) => {
    y = document.getElementById("nine").innerText;
  }),
  zero: (document.getElementById("zero").onclick = (event) => {
    y = document.getElementById("zero").innerText;
  }),
  plus: (document.getElementById("operatorPlus").onclick = (event) => {
    y = document.getElementById("operatorPlus").innerText;
  }),
  mines: (document.getElementById("operatorMines").onclick = (event) => {
    y = document.getElementById("operatorMines").innerText;
  }),
  multiply: (document.getElementById("operatorMultiply").onclick = (
    event
  ) => {
    y = document.getElementById("operatorMultiply").innerText;
  }),
  divide: (document.getElementById("operatorDivide").onclick = (event) => {
    y = document.getElementById("operatorDivide").innerText;
  }),
  pow: (document.getElementById("operatorPow").onclick = (event) => {
    y ="p";
  }),
  point: (document.getElementById("point").onclick = (event) => {
    y = document.getElementById("point").innerText;
  }),
  equal: (document.getElementById("operatorEqual").onclick = (event) => {
    y = "Enter";
  }),
};
const inputsValidation=(inputs)=>{
  for (let i = 0; i < 16; i++) {
    if (inputs === numbers[i]) {
      display.value += inputs;
      displayValue = display.value;
      displayHasValue = true;
      console.log(displayHasValue);
    } else if (inputs === operations[i] || inputs === EnterInputs) {
      operators[`${inputs}`]();
      break;
    }
  }
}
const displayControls = (event) => {
  document.onclick = (event) => {
    let inputs = y;
    inputsValidation(inputs);
  };
  document.onkeydown = (event) => {
    let inputs = event.key;
    inputsValidation(inputs);
  };
};
displayControls();
