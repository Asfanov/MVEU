let tail = 0;

function russianMultiplication(num1, num2) {
  if (num1 % 2 !== 0) {
    tail += num2;
    num1 -= 1;
    num1 /= 2;
    num2 *= 2;
  } else if (num1 % 2 === 0) {
    num1 /= 2;
    num2 *= 2;
  }

  if (num1 === 1) {
    console.log('');
    console.log(num2 + tail, 'result');
    return num2 + tail;
  }
  return russianMultiplication(num1, num2);
}
russianMultiplication(15, 10);
// изменяйте значенмя функции, при повторном вызове tail не обнулится.
