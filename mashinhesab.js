//step 1 : select inputs and output

const firstNumber = document.getElementById("firstnumber"); //select firstnumber input by id
const secondNumber = document.getElementById("secondnumber"); //select secondnumber input by id
const output = document.getElementById("output"); //select output by id

//end of step 1

//Step 2 : Create a Variable for save operatorsbuttonsvalue 

let operatorValue = null;

//end of step 2

//Step 3 : Operatorplus

//Step 3.1 : Select Operatorplus by id and save in Const 

const operatorplus = document.getElementById("operator+");

//Step 3.2 : Use onclick property and save Operatorplus.innertext inside operatorvalue

operatorplus.onclick = (event) => {
  operatorValue = operatorplus.innerText;
};

//Step 3.3 : Create a function for computing outputvalue if operatorvalue==="+"

const Operator_plus_calculat=event=>{
  if (operatorValue === "+") {
    output.value =
      firstNumber.value +
      "+" +
      secondNumber.value +
      "=" +
      `${+firstNumber.value + +secondNumber.value}`;
      firstNumber.value = null;
      secondNumber.value = null;
    }
  }
    //end of step 3
    
//Step 4 : Operatormines

//Step 4.1 : Select opeatormines by id and save in const

const operatormines = document.getElementById("operator-"); //select - operator by id

//Step 4.2 : Use onclick property ands save operatormines.innertext inside operatorvalue

operatormines.onclick = (event) => {
  operatorValue = operatormines.innerText;
};

//Step 4.3 : Create a function for computing outputvalue if operatorvalue==="-"

const Operator_mines_calculate=event=>{
  if(operatorValue === "-"){
  output.value =
    firstNumber.value +
    "-" +
    secondNumber.value +
    "=" +
    `${+firstNumber.value - +secondNumber.value}`;
  firstNumber.value = null;
  secondNumber.value = null;
  }
}

//end of step 4

//Step 5 : Operatormultiply

//Step 5.1 : Select operatormultiple by id and save in const

const operatormultiple = document.getElementById("operator*"); 

//step 5.2 : Use onclick property and save operatormultiple.innertext inside operatorvalue

operatormultiple.onclick = (event) => {
  operatorValue = operatormultiple.innerText;
};

//Step 5.3 : Create function for computing outputvale if operatorvalue==="*"

const Operator_multiply_calculate=event=>{
  if (operatorValue === "*") {
    output.value =
      firstNumber.value +
      "*" +
      secondNumber.value +
      "=" +
      `${+firstNumber.value * +secondNumber.value}`;
    firstNumber.value = null;
    secondNumber.value = null;
}
}
//end of step 5

//Step 6 : Operatordivide 

//Step 6.1 : Select operatordividebutton by id and save in const

const operatordivide = document.getElementById("operator/"); 

//Step 6.2 : Use onclick property and save operatordivide.innertext inside operatorvalue

operatordivide.onclick = (event) => {
  operatorValue = operatordivide.innerText;
};

//Step 6.3 : Create function for computing outputvalue if operatorvalue==="/"

const Operator_divide_calculate=event=>{
  if (operatorValue === "/") {
    output.value =
      firstNumber.value +
      "/" +
      secondNumber.value +
      "=" +
      `${+firstNumber.value / +secondNumber.value}`;
    firstNumber.value = null;
    secondNumber.value = null;
  }
}

//end of step 6

//Step 7 : Operatorqual

//Step 7.1 : Select operatoqualbutton by id and save in const

const equal = document.getElementById("equal");

//Step 7.2 : Use onclick property and call all operators functions

equal.onclick = (event) => {
  Operator_plus_calculat
  Operator_mines_calculate
  Operator_multiply_calculate
  Operator_divide_calculate
  if(operatorValue===null){
    output.value = "please enter two number and select your operator";
  }
};

//end of step 7

//Step 8 : Reset

//Step 8.1 : Select Resetbutton by id and save in const

const reset = document.getElementById("reset");

//Step 8.2 : Use onclick property and Set inputs and outputs value to null

reset.onclick = (event) => {
  firstNumber.value = null;
  secondNumber.value = null;
  output.value = null;
};

//end of step 8





