
/**
 * funcion para encontrar en un array el numero mayor y el numero menor
 * @param arrNumbers
 * @returns array
 */
function minAndMaxArr(arrNumbers) {

  // valores iniciales
  let MinNumber = parseInt(arrNumbers[0])
  let MaxNumber = 0
  for (let index = 0; index < arrNumbers.length; index++) {
    // numero que estamos interando
    let currentNumber = parseInt(arrNumbers[index]);

    // validacion para valor minimo
    if (currentNumber < MinNumber) {

      MinNumber = currentNumber;
    }

    // validacion para valor maximo
    if (currentNumber > MaxNumber) {

      MaxNumber = currentNumber;
    }
  }

  return [MinNumber, MaxNumber]
}

minAndMaxArr([5, 3, 6, 8, 1, 7, 9, 4, 2])
minAndMaxArr([900, 350, 40, 80, 700, 235])