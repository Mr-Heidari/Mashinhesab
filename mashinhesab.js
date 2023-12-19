//step 1 : select inputs and OUTPUT

const FIRST_NUMBER = document.getElementById("FIRST_NUMBER"); //select FIRST_NUMBER input by id
const SECOND_NUMBER = document.getElementById("SECOND_NUMBER"); //select SECOND_NUMBER input by id
const OUTPUT = document.getElementById("OUTPUT"); //select OUTPUT by id

//end of step 1

//Step 2 : Create a Variable for save operatorsbuttonsvalue

let OperatorValue = null;

//end of step 2

//Step 3 : OPERATOR_PLUS

//Step 3.1 : Select OPERATOR_PLUS by id and save in Const

const OPERATOR_PLUS = document.getElementById("operator+");

//Step 3.2 : Use onclick property and save OPERATOR_PLUS.innertext inside OperatorValue

OPERATOR_PLUS.onclick = (event) => {
  OperatorValue = OPERATOR_PLUS.innerText;
};

//Step 3.3 : Create a function for computing OUTPUTvalue if OperatorValue==="+"

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

//Step 4.1 : Select opeatormines by id and save in const

const OPERATOR_MINES = document.getElementById("operator-"); //select - operator by id

//Step 4.2 : Use onclick property ands save OPERATOR_MINES.innertext inside OperatorValue

OPERATOR_MINES.onclick = (event) => {
  OperatorValue = OPERATOR_MINES.innerText;
};

//Step 4.3 : Create a function for computing OUTPUTvalue if OperatorValue==="-"

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

//Step 5.1 : Select OPERATOR_MULTIPLY by id and save in const

const OPERATOR_MULTIPLY = document.getElementById("operator*");

//step 5.2 : Use onclick property and save OPERATOR_MULTIPLY.innertext inside OperatorValue

OPERATOR_MULTIPLY.onclick = (event) => {
  OperatorValue = OPERATOR_MULTIPLY.innerText;
};

//Step 5.3 : Create function for computing OUTPUTvale if OperatorValue==="*"

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

//Step 6.1 : Select OPERATOR_DIVIDEbutton by id and save in const

const OPERATOR_DIVIDE = document.getElementById("operator/");

//Step 6.2 : Use onclick property and save OPERATOR_DIVIDE.innertext inside OperatorValue

OPERATOR_DIVIDE.onclick = (event) => {
  OperatorValue = OPERATOR_DIVIDE.innerText;
};

//Step 6.3 : Create function for computing OUTPUTvalue if OperatorValue==="/"

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

//Step 7 : Operatorqual

//Step 7.1 : Select operatoqualbutton by id and save in const

const EQUAL = document.getElementById("equal");

//Step 7.2 : Use onclick property and call all operators functions

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

//Step 8.1 : Select Resetbutton by id and save in const

const RESET = document.getElementById("reset");

//Step 8.2 : Use onclick property and Set inputs and OUTPUTs value to null

RESET.onclick = (event) => {
  FIRST_NUMBER.value = null;
  SECOND_NUMBER.value = null;
  OUTPUT.value = null;
};

//end of step 8
