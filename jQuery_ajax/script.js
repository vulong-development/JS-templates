$('#btn').on('click', function () {    //Нажатие на кнопку
  $.ajax({
    url: 'script.php',               //Путь к запрашиваемому файлу
    success: function (data) {
      alert('Success')
    }
  });
})