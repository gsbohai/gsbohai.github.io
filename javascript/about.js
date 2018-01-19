window.onload = function () {
  $('#tabNav li').click(function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active').siblings().removeClass('active');
      $('#aboutContent div[name=' + $(this).attr('to') + ']').show().siblings().hide();
    }
  });
  
  new Swiper('.honorSwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true
    }
  });

  new Swiper('.creditSwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true
    }
  });

  $('#aboutContent > div').hide();
  $('#aboutContent > div:first').show();
}