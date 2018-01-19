window.onload = function () {
  $('#tabNav li').click(function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active').siblings().removeClass('active');
      $('#industryContent div[name=' + $(this).attr('to') + ']').show().siblings().hide();
    }
  });
}