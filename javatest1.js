let array = [1, 4, 2, 0, 'a', 0];
var even = 0;
var uneven = 0;
var notnumber = 0;
function getArrayAnalysis() {for (let i = 0; i < array.length; i = i+1) {
  if (typeof(array[i])=='number' && array[i]!=0 && array[i]%2===0) {
    even = even + 1;
  }
  else if (typeof(array[i])=='number' && array[i]!=0 && array[i]%2!=0) {
    uneven = uneven+1;
  }
  else if (array[i]==0 || typeof(array[i])!='number') {
    notnumber = notnumber+1;
  }
}}
getArrayAnalysis();
console.log(`четных чисел в массиве: ${even}, нечетных чисел в массиве: ${uneven}, нулей и прочих знаков: ${notnumber}`);
