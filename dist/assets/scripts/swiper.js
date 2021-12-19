"use strict";

// options
//  effect: 'slide',
//  slidesPerView: '1',
//  loop: true,
//  loopAdditionalSlides: 1,
//  touchEventsTarget: true,
//  centeredSlides: true,
//  spaceBetween: 10,
var elmIndexSwiper = document.querySelectorAll('.js-index-slider');
var elmIndexScroll = document.querySelectorAll('.js-slider-scrollbar');

if (elmIndexSwiper.length > 0) {
  for (var i = 0; i < elmIndexSwiper.length; i++) {
    elmIndexSwiper[i].className += i;
    elmIndexScroll[i].className += i;
    var indexSwiper = new Swiper('.js-index-slider' + i, {
      slidesPerView: 'auto',
      grabCursor: true,
      touchEventsTarget: true,
      //  freeMode: true,
      scrollbar: {
        el: '.js-slider-scrollbar' + i,
        hide: false,
        // ユーザー操作後にスクロールバーを非表示にしない
        draggable: true,
        // ドラッグ操作を可能にする
        dragClass: 'drag',
        // ドラッグ可能なクラスの指定
        dragSize: 19,
        // ドラッグのサイズ指定
        snapOnRelease: false // スクロールバーを離したときにスライダーの位置を固定しないようにする

      }
    });
  }
}

var heroSwiper = new Swiper('.p-hero__slider', {
  slidesPerView: 1,
  effect: "fade",
  allowTouchMove: false,
  speed: 800,
  autoplay: {
    delay: 5200,
    disableOnInteraction: false
  },
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.p-hero__slidePager',
    type: 'bullets',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + ' p-hero__slideBullet"><span class="p-hero__slideBulletLine"></span></span>';
    }
  }
});
var flowSwiper = new Swiper('.p-flow__slider', {
  slidesPerView: 1,
  effect: "fade",
  // speed: 800,
  // autoplay: {
  //   delay: 5200,
  //   disableOnInteraction: false
  // },
  fadeEffect: {
    crossFade: true
  }
});