const entry = prompt ('введите число от 0 до 1000');
let a = +entry;
function isNumSimple(num) {
  if (num > 1 && num <= 1000) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return alert('Составное число');
      }
      else {return alert('Простое число')}
    }
  }
  else if (num == 0 || num == 1 || num > 1000) {
    return alert('Данные введены неверно');
  }
}

isNumSimple(entry);
