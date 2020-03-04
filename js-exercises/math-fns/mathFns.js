
// Don't change the export values.
// You can use the function in the Math module
const sqrt = (givenSquaredValue) => {
  if(givenSquaredValue == 0 || givenSquaredValue == 1)  return givenSquaredValue
  
  let sqrtNumber = 1
  let computedSquaredValue = 0
  while(computedSquaredValue <= givenSquaredValue){
    sqrtNumber++;
    computedSquaredValue = sqrtNumber * sqrtNumber 
  }

  return sqrtNumber - 1;
}

const power = (base, exponent) => {
  if(exponent == 1) return base
  return base * power(base, exponent - 1)
}

const round = (decimalNumber) => {
  let isNegative = decimalNumber < 0
  let wholeNumber = parseInt(decimalNumber.toString().split('.')[0])
  let fractionValue = parseInt(decimalNumber.toString().split('.')[1])/10
  
  if(fractionValue < 0.5){
    return wholeNumber
  } else {
    return wholeNumber + 1
  }
}


export {
  sqrt,
  power,
  round,
};
