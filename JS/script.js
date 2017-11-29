$(function(){
	//this code will execute after the DOM is loaded
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 3000);
	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	};
	function moveFirstSlide() {

		var lastItem = carouselList.find("li:last"),
			firstItem = carouselList.find("li:first");

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

});