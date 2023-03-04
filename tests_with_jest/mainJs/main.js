import operations from "./calc.js";

var firstNum = "";
var secondNum = "";
var operation = "";
var isAnswer = false;

const operationInput = (e) => {
  const displayValue = document.querySelector(".Display__firstBlock");
  const displayValue2 = document.querySelector(".Display__secBlock");
  const operationsSymbols = "/-x+";

  if (
    operationsSymbols.includes(e.value) &&
    displayValue.value != "" &&
    displayValue2.value == ""
  ) {
    operation = e.id;
    displayValue2.value = `${firstNum} ${e.value}`;
    displayValue.value = "";
    displayValue2.classList.add("Display__secBlock--answer");
  } else if(firstNum != '') {
    if (operation != "" && e.value !== "=" && displayValue.value=='') {
      displayValue2.value = `${firstNum} ${e.value}`;
      operation = e.id;
    } else {
      if (e.value !== "=") {
        displayValue2.value = `${operations[operation](firstNum, secondNum)} ${
          e.value
        }`;
        displayValue.value = "";
        operation = e.id;
        firstNum = operations[operation](firstNum, secondNum);
        secondNum = "";
      } else if(secondNum!='') {
        isAnswer = true;
        displayValue.value = firstNum = operations[operation](
          firstNum,
          secondNum
        );
        secondNum = '';
        displayValue2.value = "";
        displayValue2.classList.remove("Display__secBlock--answer");
        operation = "";
      }
    }
    
    
  }
};

const numberInput = (e) => {
  const displayValue = document.querySelector(".Display__firstBlock");

  if (e.value.match(/^[0-9]*$/)) {
    if (isAnswer) {
      displayValue.value = e.value;
      isAnswer = false;
      if (operation == "") {
        firstNum = parseFloat(displayValue.value.replace(",", "."));
      } else {
        secondNum = parseFloat(displayValue.value.replace(",", "."));
      }
    } else {
      displayValue.value += e.value;
      if (operation == "") {
        firstNum = parseFloat(displayValue.value.replace(",", "."));
      } else {
        secondNum = parseFloat(displayValue.value.replace(",", "."));
      }
    }
  } else if (!displayValue.value.match(",")) {
    if (isAnswer) {
      displayValue.value = e.value;
      isAnswer = false;
    } else {
      displayValue.value += e.value;
      if (operation == "") {
        console.log("first");
        firstNum = parseFloat(displayValue.value.replace(",", "."));
      } else {
        console.log("second");
        secondNum = parseFloat(displayValue.value.replace(",", "."));
      }
    }
  }
};

const handleClick = (elem) => {
  const type = elem.classList.value;
  if (type == "numericButton__content") {
    numberInput(elem);
  } else {
    operationInput(elem);
  }
};

document.addEventListener("keydown", (e) => {
  var correctKey = e.key == "Enter" ? "=" : e.key;
  correctKey = e.key == "*" ? "x" : correctKey;
  correctKey = e.key == "." ? "," : correctKey;

  const Numbers = "0123456789,";
  const Operations = "-+=/x";

  if (Numbers.includes(correctKey)) {
    const keyElement = document.querySelector(`input[value="${correctKey}"]`);
    numberInput(keyElement);
  } else if (Operations.includes(correctKey)) {
    const keyElement = document.querySelector(`input[value="${correctKey}"]`);
    operationInput(keyElement);
  }
});

document.addEventListener("click", (e) => {
  const classVal = e.target.classList.value;
  if (
    classVal == "numericButton__content" ||
    classVal == "operationButton__content"
  ) {
    handleClick(e.target);
  }
});
