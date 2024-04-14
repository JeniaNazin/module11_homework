function getSum(x) {
  return function(y) {
    return console.log(x+y);
  }
}
const entry1 = prompt('Число №1');
const entry2 = prompt('Число №2');
let sum1=+entry1;
let sum2=+entry2;
getSum(sum1)(sum2);
