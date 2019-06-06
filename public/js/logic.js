$(document).ready(() => {
  M.AutoInit();

  $('ul.right li').on('click', () => {
    var clicked = $(this);
    $('ul.right li').each(() => {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      }
    });
    $(this).addClass('active');
  });
});