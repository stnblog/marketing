'use strict';

var $body = $("body");

$(document).ready(function () {

  $("a[href*='http://']:not([href*='" + location.hostname + "']),[href*='https://']:not([href*='" + location.hostname + "'])").attr('target', '_blank').addClass('blank');


  $('a[href^="#"]').on('click', function () {
    var href = $(this).attr('href');
    var position = $(href).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
    return false;
  })

  $('.js-draw__trigger').on('click', function () {
    $('.js-draw__trigger').toggleClass('is-active');
    $('.js-draw__content').toggleClass('is-active');
    $('body').toggleClass('is-lock');
  })


  $('.js-acc__trigger').on('click', function () {
    $('.js-acc__trigger').not(this).removeClass('is-open');
    $('.js-acc__trigger').not(this).next().stop().slideUp(300);
    $(this).toggleClass('is-open');
    $(this).toggleClass('is-open');
    $(this).next().stop().slideToggle(300);
  })

  $(function () {
    $('.js-modal-open').each(function () {
      $(this).on('click', function () {
        $('.l-modal').fadeIn();
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        $(modal).fadeIn();
        $('body').addClass('is-lock');


      });
    });
    $('.js-modal-close').on('click', function () {


      $('.l-modal').fadeOut();
      $('.js-modal').fadeOut();
      $('body').removeClass('is-lock');

    });
  });

  $(function () {
    var e = document.querySelectorAll(".js-rellax");
    Array.prototype.slice.call(e).forEach(function (e) {
      var r = new Rellax(e, {
        relativeToWrapper: !0,
        wrapper: e.parentElement
      });
      window.addEventListener("scroll", function () {
        r.refresh()
      })
    })
  });



  // matchHeight
  $(function () {
    $('.p-course__list .p-course__item .p-course__list--detail').matchHeight();
    $('.p-plan__list--table table thead tr th dl dt').matchHeight();
  });

});


document.addEventListener('DOMContentLoaded', function () {

  {
    const el = document.querySelectorAll('.inview');
    const els = Array.prototype.slice.call(el);

    const cb = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-anim');
        } else {
          // entry.target.classList.remove('is-anim');
        }
      });
    }

    const options = {
      root: null,
      rootMargin: '-20% 0px',
      threshold: 0
    };
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
  }

  {
    const el = document.querySelectorAll('.js-first-view');
    const els = Array.prototype.slice.call(el);
    const header = document.getElementById('js-header');

    const options = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };
    const observer = new IntersectionObserver(callback, options);
    els.forEach((el) => {
      observer.observe(el);
    });

    function callback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.classList.add('is-active');
        } else {
          header.classList.remove('is-active');
        }
      });
    }

  }

  {
    const el = document.querySelectorAll('.animate-heading');
    const els = Array.prototype.slice.call(el);

    const cb = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.classList.add('inview');
          // setTimeout(() => {
          // }, 600);
        } else {
          // entry.target.classList.remove('inview');
        }
      });
    }

    const options = {
      root: null,
    };

    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));

    for (let el of els) {
      const chars = el.innerHTML.trim().split("");

      el.innerHTML = chars.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
      }, "");
    }
  }
});
