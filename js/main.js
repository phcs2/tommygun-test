'use strict';

$(document).ready(function(){
  initCarousel();
  initCount();
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

function initCount() {
  var input = document.querySelector('.product__count-input');
  var minusBtn = document.querySelector('.product__count-minus');
  var plusBtn = document.querySelector('.product__count-plus');
  minusBtn.addEventListener('click', decreaseCount);
  plusBtn.addEventListener('click', increaseCount);
  input.addEventListener('input', validateCount);
  input.addEventListener('blur', checkEmptyCount);

  function decreaseCount() {
    if (input.value < 2) return;
    input.value = +input.value - 1;
  }

  function increaseCount() {
    input.value = +input.value + 1;
  }

  function validateCount() {
    input.value = input.value.match(/[1-9]\d{0,2}/);
  }

  function checkEmptyCount() {
    if (!input.value) input.value = 1;
  }
}