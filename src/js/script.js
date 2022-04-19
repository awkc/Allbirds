(function($) {
$(function() {
  
  $('ul.favorites__tabs').on('click', 'li:not(.favorites__tab_active)', function() {
    $(this)
      .addClass('favorites__tab_active').siblings().removeClass('favorites__tab_active')
      .closest('div.container').find('div.favorites__content')
      .removeClass('favorites__content_active').eq($(this).index()).addClass('favorites__content_active');
  });
  
});
})(jQuery);

$(document).ready(function(){
  $('.collections__carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/left.svg"></button>',
    nextArrow: '<button type="button" class="nextArrow"><img src="../icons/slider/right.svg"></button>',
  });
});
 