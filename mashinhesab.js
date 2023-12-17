//step 1 : select inputs and output

const firstNumber = document.getElementById("firstnumber"); //select firstnumber input by id
const secondNumber = document.getElementById("secondnumber"); //select secondnumber input by id
const output = document.getElementById("output"); //select output by id

//end of step 1

//step 2 : select operators buttons

const operatorplus = document.getElementById("operator+"); //select + operator by id
const operatormines = document.getElementById("operator-"); //select - operator by id
const operatormultiple = document.getElementById("operator*"); //select * operator by id
const operatordivide = document.getElementById("operator/"); //select / operator by id
const equal = document.getElementById("equal"); //select equal button

//end of step 2.

//step 3 : select reset button

const reset = document.getElementById("reset");

//end of step 3

//step 4 : define a variable for save operator text

let operatorValue = null;

//end of step 4

//step 5 : use onclick property on all operators buttons and save operators inner text in operatorvalue

operatorplus.onclick = (event) => {
  //operatorplus
  operatorValue = operatorplus.innerText;
};

operatormines.onclick = (event) => {
  //operatormines
  operatorValue = operatormines.innerText;
};

operatormultiple.onclick = (event) => {
  //operatormultiple
  operatorValue = operatormultiple.innerText;
};

operatordivide.onclick = (event) => {
  //operatordivide
  operatorValue = operatordivide.innerText;
};

//end of step 5

//step 6 : use onclick property on reset button and set all inputs and output value to null

reset.onclick = (event) => {
  //reset
  firstNumber.value = null;
  secondNumber.value = null;
  output.value = null;
};

//end of step 6

//step 7 : define a fucntion for calculating and show on output

function outputshow() {
  if (operatorValue === "+") {
    //if operatorValue was eqaual +
    output.value =
      firstNumber.value +
      "+" +
      secondNumber.value +
      "=" +
      `${+firstNumber.value + +secondNumber.value}`;
    firstNumber.value = null;
    secondNumber.value = null;
  } else if (operatorValue === "-") {
    //if operatorValue was equal -
    output.value =
      firstNumber.value +
      "-" +
      secondNumber.value +
      "=" +
      `${+firstNumber.value - +secondNumber.value}`;
    firstNumber.value = null;
    secondNumber.value = null;
  } else if (operatorValue === "*") {
    //if operatorValue was equal *
    output.value =
      firstNumber.value +
      "*" +
      secondNumber.value +
      "=" +
      `${+firstNumber.value * +secondNumber.value}`;
    firstNumber.value = null;
    secondNumber.value = null;
  } else if (operatorValue === "/") {
    //if opeeratorValue was equal /
    output.value =
      firstNumber.value +
      "/" +
      secondNumber.value +
      "=" +
      `${+firstNumber.value / +secondNumber.value}`;
    firstNumber.value = null;
    secondNumber.value = null;
  } else {
    //if operator value was out of 4 our conditions
    output.value = "please enter two number and select your operator";
  }
}

//end of step 7

//step 8 : use onclick property and declare outputshow funtion

equal.onclick = (event) => {
  outputshow();
};

//end of step 8
