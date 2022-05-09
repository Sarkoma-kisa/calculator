const display = document.getElementById('display')
const numbersBtn = document.querySelectorAll('[data-number]')
const operatorsBtn = document.querySelectorAll('[data-operator]')
const equalsBtn = document.querySelector('[data-equals]')

let firstNum
let secondNum
let mathOperator

numbersBtn.forEach(number => number.addEventListener('click', () => {
  secondNum = Number(display.textContent += number.textContent)
}))

operatorsBtn.forEach(operator => operator.addEventListener('click', () => {
  
  if(mathOperator !== undefined) {
    display.textContent = operate(firstNum, secondNum, mathOperator)
    mathOperator = operator.textContent
  } 

  firstNum = Number(display.textContent)
  secondNum = undefined
  display.textContent = ''
  
  mathOperator = operator.textContent
    
}))

equalsBtn.addEventListener('click', () => operate(firstNum, secondNum, mathOperator))

function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function devide (a, b) {
  return a / b
}

function operate (a, b, operator) {
  switch (operator) {
    case '+':
      return display.textContent = add(a, b)
      break
    case '-':
      return display.textContent = subtract(a, b)
      break
    case '*':
      return display.textContent = multiply(a, b)
      break
    case '/':
      return display.textContent = devide(a, b)
      break
    default:
      return display.textContent = 'ERROR'
      break
  }
}