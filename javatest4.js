function getNumbers() {
  let a = +prompt('Введите число №1');
  let b = +prompt('Введите число №2');
  const intervalId = setInterval(function(num1,num2){
    for (let i = 1; i <= (num2); i++) {
      if (num2 >= num1) {
        console.log(num1);
      num1++;}
      }}, 1000, a, b);
  };

 getNumbers();
