let qurSell = (x) => document.querySelector(x);

$(function () {
  //First slider
  $('.first-slider').slick({
    infinite: true,
    appendArrows: $('.first-slider__btn'),
    asNavFor: '.second-slider',
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: false,
        }
      }
    ]
  });
  //Second slider
  $('.second-slider').slick({
    infinite: false,
    vertical: true,
    asNavFor: '.first-slider',
    slidesToShow: 4,
    focusOnSelect: true,
    slidesToScroll: 1,
    verticalSwiping: true,


  });
  //Third slider
  $('.third-slider').slick({
    infinite: false,
    appendArrows: $('.third-slider__btn'),
    adaptiveHeight: true,
    swipe: true,
  })

});

//Function Button scroll top
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {

  if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
    document.getElementById('btn-top').style.display = "block";
  } else {
    document.getElementById('btn-top').style.display = "none";
  }

}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
