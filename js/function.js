
var x = +prompt ('Введите число');
var n = +prompt ('Введите степень');

function pow (a, b) {
   var result = x;

   for (var i = 1; i < n; i++) {
      result *= x;
   }

return result;
}

alert('Результат возведения в степень = ' + pow (x, n) );
