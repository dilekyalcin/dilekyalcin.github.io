$(document).ready(function () {
  // Initialize the Slick carousel on the elements with the class "trend-furnitures"
  $(".trend-furnitures").slick({
    dots: true, // Display navigation dots
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 800, // Autoplay speed in milliseconds
  });
});
