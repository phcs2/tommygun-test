'use strict';

$(document).ready(function(){
  initCarousel();
});

function initCarousel() {
  $('.carousel__gallery').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.carousel__thumbs'
  });
  $('.carousel__thumbs').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.carousel__gallery',
    centerMode: true,
    focusOnSelect: true
  });
}