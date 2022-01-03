//Для работы необходима библиотек jQuery и плагин jquery-cookie

// Если нет куки HideModal
if (!$.cookie('HideModal')) {
  // Покажем окно с id="popup-first-visit" через 300000 миллисекунд
  setTimeout("document.getElementById('popup-first-visit').style.display='block'", 300000);
  // Установим куки HideModal, не показывать окно в течении 365 дней
  $.cookie('HideModal', true, { expires: 365, path: '/' });
}
