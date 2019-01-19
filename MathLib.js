// example for course, in production use the JavaScript Math 
export { PI, E }
const PI = 3.1415;

// The mathematical constant e. 
// This is Euler's number, the base of natural logarithms.
const E = 2.71828;



export function abs(candidateNumber) {
  //returns the absolute value of a number

  return (candidateNumber < 0 ? -candidateNumber : candidateNumber);

}


export function min(firstNumber, secondNumber) {
  // returns the smaller of a set of supplied numeric expressions.

  if (firstNumber < secondNumber) {
    return firstNumber;

  }
  else {

    return secondNumber;
  }

}
export function max(firstNumber, secondNumber) {
  //  Returns the larger of a set of supplied numeric expressions.
  if (firstNumber > secondNumber) {
    return firstNumber;

  }
  else {

    return secondNumber;
  }
}

e