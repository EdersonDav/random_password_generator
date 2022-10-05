const objVariables = {
  lower_letters: 'abcdefghijklmnopqrstuvwxyz',
  upper_letters: 'abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase(),
  symbols: '!@#$%&*()-_/*+-,{}[]?|',
  numbersString: '0123456789',
}

const variables = ['lower_letters', 'lower_letters', 'lower_letters', 'upper_letters','upper_letters', 'symbols', 'numbersString','numbersString'] // password length = 8

let password = ''

while(variables.length){
  const variable = variables[Math.floor(Math.random() * variables.length)]
  password += objVariables[variable][Math.floor(Math.random() * objVariables[variable].length)]
  variables.splice(variables.indexOf(variable), 1);
}

console.log(password);

