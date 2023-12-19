//step 1 : We get our firstnumber and second number and we want control our output value

const FIRST_NUMBER = document.getElementById("FIRST_NUMBER"); //select FIRST_NUMBER input by id
const SECOND_NUMBER = document.getElementById("SECOND_NUMBER"); //select SECOND_NUMBER input by id
const OUTPUT = document.getElementById("OUTPUT"); //select OUTPUT by id

//end of step 1

//Step 2 : we want to save all OperatorButtons text

let OperatorValue = null;

//end of step 2

//Step 3 : OPERATOR_PLUS

//Step 3.1 : we want save buttonplus.text when get clicked

const OPERATOR_PLUS = document.getElementById("operator+");

//Step 3.2 : save buttonplus text

OPERATOR_PLUS.onclick = (event) => {
  OperatorValue = OPERATOR_PLUS.innerText;
};

//Step 3.3 : plus funtion for computing output

const OPERATOR_PLUS_CALCULATE = (event) => {
  if (OperatorValue === "+") {
    OUTPUT.value =
      FIRST_NUMBER.value +
      "+" +
      SECOND_NUMBER.value +
      "=" +
      `${+FIRST_NUMBER.value + +SECOND_NUMBER.value}`;
    FIRST_NUMBER.value = null;
    SECOND_NUMBER.value = null;
  }
};
//end of step 3

//Step 4 : OPERATOR_MINES

//Step 4.1 : we want save buttonmines.text when get clicked

const OPERATOR_MINES = document.getElementById("operator-"); //select - operator by id

//Step 4.2 : save buttonmines text

OPERATOR_MINES.onclick = (event) => {
  OperatorValue = OPERATOR_MINES.innerText;
};

//Step 4.3 : mines function for computing output 

const OPERATOR_MINES_CALCULATE = (event) => {
  if (OperatorValue === "-") {
    OUTPUT.value =
      FIRST_NUMBER.value +
      "-" +
      SECOND_NUMBER.value +
      "=" +
      `${+FIRST_NUMBER.value - +SECOND_NUMBER.value}`;
    FIRST_NUMBER.value = null;
    SECOND_NUMBER.value = null;
  }
};

//end of step 4

//Step 5 : Operatormultiply

//Step 5.1 :  we want save buttonmultiply.text when get clicked

const OPERATOR_MULTIPLY = document.getElementById("operator*");

//step 5.2 : save buttonmultiply text

OPERATOR_MULTIPLY.onclick = (event) => {
  OperatorValue = OPERATOR_MULTIPLY.innerText;
};

//Step 5.3 : Multiply function for computing output

const OPERATOR_MULTIPLY_CALCULATE = (event) => {
  if (OperatorValue === "*") {
    OUTPUT.value =
      FIRST_NUMBER.value +
      "*" +
      SECOND_NUMBER.value +
      "=" +
      `${+FIRST_NUMBER.value * +SECOND_NUMBER.value}`;
    FIRST_NUMBER.value = null;
    SECOND_NUMBER.value = null;
  }
};
//end of step 5

//Step 6 : OPERATOR_DIVIDE

//Step 6.1 : we want save buttondivide.text when get clicked

const OPERATOR_DIVIDE = document.getElementById("operator/");

//Step 6.2 : save buttondivide text

OPERATOR_DIVIDE.onclick = (event) => {
  OperatorValue = OPERATOR_DIVIDE.innerText;
};

//Step 6.3 : Divide function for computing output

const OPERATOR_DIVIDE_CALCULATE = (event) => {
  if (OperatorValue === "/") {
    OUTPUT.value =
      FIRST_NUMBER.value +
      "/" +
      SECOND_NUMBER.value +
      "=" +
      `${+FIRST_NUMBER.value / +SECOND_NUMBER.value}`;
    FIRST_NUMBER.value = null;
    SECOND_NUMBER.value = null;
  }
};

//end of step 6

//Step 7 : Operatorequal

//Step 7.1 : we want run all of our operator functions we made when  button equal get clicked

const EQUAL = document.getElementById("equal");

//Step 7.2 : call all of out operator functions

EQUAL.onclick = (event) => {
  OPERATOR_PLUS_CALCULATE();
  OPERATOR_MINES_CALCULATE();
  OPERATOR_MULTIPLY_CALCULATE();
  OPERATOR_DIVIDE_CALCULATE();
  if (OperatorValue === null) {
    OUTPUT.value = "please enter two number and select your operator";
  }
};

//end of step 7

//Step 8 : Reset

//Step 8.1 : we need clear all of our input and output value to null when reset get clicked

const RESET = document.getElementById("reset");

//Step 8.2 : reset button change all of our input and output value to null

RESET.onclick = (event) => {
  FIRST_NUMBER.value = null;
  SECOND_NUMBER.value = null;
  OUTPUT.value = null;
};

//end of step 8
