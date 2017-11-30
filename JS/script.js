$(function() {

  var carouselList = $("#carousel ul");
  var interval = setInterval(changeSlide, 3000)

  function changeSlide() {
    carouselList.animate({
      'marginLeft': -400
    }, 500, moveSlide);
  };

  changeSlide.left = 'left'
  changeSlide.right = 'right'

  function moveSlide(direction) {

    var lastItem, firstItem

    if (direction === changeSlide.left) {
      lastItem = carouselList.find("li:first");
      firstItem = carouselList.find("li:last");

      lastItem.before(firstItem);
    } else {
      lastItem = carouselList.find("li:last");
      firstItem = carouselList.find("li:first");

      lastItem.after(firstItem);
    }

    carouselList.css({
      marginLeft: 0
    });

  };

  $('#left').click(function() {
    moveSlide(changeSlide.left)
    clearInterval(interval)
  })

  $('#right').click(function() {
    moveSlide(changeSlide.right)
    clearInterval(interval)
  })

});