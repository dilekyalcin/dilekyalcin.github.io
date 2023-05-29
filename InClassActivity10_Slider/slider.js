$(document).ready(function () {
  $("#slider").bxSlider({
    auto: true,
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 250,
    slideMargin: 10,
    randomStart: true,
    moveSlides: 1,
    captions: true,
    pause: 3000,
    pagerCustom: "#pager",
    pagerType: "short",
  });
});
