// убирает перезапуск страницы с сылки

document.querySelector('a')
addEventListener('click', function(e){e.preventDefault()})

// button to top

function goTop() {
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.footer_btn-up');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  }
  goTop();

  // ------------------------------------------------------------------------------------

// const sectionName = document.querySelector('h1')

// window.addEventListener('scroll', () =>{
//   const current = window.scrollY
//   sectionName.style.fontSize = `clamp(5rem,${current}rem, 3.75rem)`

// })




  // $(function() {

  //   $(window).scroll(function() {
  
  //     var mass = Math.min(20, 1+0.005*$(this).scrollTop());
  
  //     $('#font_size').css('transform', 'scale(' + mass + ')');
  //   });
  // });


  // window.addEventListener('scroll',function(){
  //   document.getElementById("font_size").style.fontSize=((document.body.scrollTop*.05)+14)+'px';
  // });

// уменьшение текста при скролле 

// document.addEventListener('DOMContentLoaded', updateDivFontSize);
// window.addEventListener('scroll', updateDivFontSize);

// function updateDivFontSize() {
//     var increase = document.getElementById("js--increase"),
//         divScrollCoef = getScrollCoef(increase);

//     increase.style.fontSize = divScrollCoef / 20 + 1 + 'vw';
// }

// function getScrollCoef(element) {
//     var elementRect = element.getBoundingClientRect(),
//         elementOffsetTop = elementRect.top,
//         elementOffsetBottom = elementRect.bottom,
//         windowOffsetBottom = document.documentElement.clientHeight,
//         coef;

//     if (windowOffsetBottom < elementOffsetTop) {
//         coef = 0;
//     } else if (windowOffsetBottom > elementOffsetBottom) {
//         coef = 1;
//     } else {
//         coef = (windowOffsetBottom - elementOffsetTop) / (elementOffsetBottom - elementOffsetTop);
//     }

//     return coef;
// }