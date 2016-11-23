
  var arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push(arr[i] = prompt ("Введите имя пользователя"));
  }

  var a = prompt ("Введите ваше имя");

  for (var i = 0; i <= arr.length; i++) {
    if (a == arr[i]) {
      alert (a + ', Вы успешно вошли');
      break; }
    else if (i==arr.length) {
        alert ('Ошибка входа');
       }
    }
