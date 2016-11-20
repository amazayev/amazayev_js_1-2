
  var arr = [];

  for (var i = 0; i < 5; i++) {
    var a = prompt ("Введите имя пользователя");
    arr.push(a);
  }
  console.log(arr);

  var a = prompt ("Введите ваше имя");

  for (var i = 0; i <= arr.length; i++) {
    if (a == arr[i]) {
      alert (a + ', Вы успешно вошли');
      break; }
    else if (i==arr.length) {
        alert ('Ошибка входа');
       }
    }
