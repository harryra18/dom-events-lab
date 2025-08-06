/*-------------------------------- Constants --------------------------------*/
const operators = ['+', '-', '*', '/'];
const clearButton = 'C';
const initialDisplay = '0';
const errorMessage = 'Error';


/*-------------------------------- Variables --------------------------------*/
let firstNumber = '';
let operator = '';
let secondNumber = '';

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log(event.target.innerText);
    
  
    if (event.target.classList.contains('number')) {
      handleNumber(event.target.innerText);
    }
    
 
    if (event.target.classList.contains('operator')) {
      handleOperator(event.target.innerText);
    }
    
    
    if (event.target.classList.contains('equals')) {
      handleEquals();
    }
    
    updateDisplay();
  });
});

/*-------------------------------- Functions --------------------------------*/
display.textContent = initialDisplay;


const handleNumber = (num) => {
  if (operator === '') {
    firstNumber = firstNumber + num;
  } else {
    secondNumber = secondNumber + num;
  }
};

const handleOperator = (op) => {
  if (op === clearButton) {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    display.textContent = initialDisplay;
  } else {
    if (firstNumber !== '') {
      operator = op;
    }
  }
};


const handleEquals = () => {
  if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
    const num1 = +firstNumber;
    const num2 = +secondNumber;
    let result = 0;
    
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = num1 / num2;
    }
    
    display.textContent = result;
    
    firstNumber = result.toString();
    operator = '';
    secondNumber = '';
  }
};

const updateDisplay = () => {
  if (secondNumber !== '') {
    display.textContent = secondNumber;
  } else if (firstNumber !== '') {
    display.textContent = firstNumber;
  }
};

// Hey Justin, I struggled on the Event Listerner part so I used a little help. Im confused when writing the evvent and dot notation.