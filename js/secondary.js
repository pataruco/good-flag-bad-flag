// Responsive Navigation and slider - just getting it functional for now
$(document).ready(function(){

     
	$('.nav-icon').on('click', function(){
		$('.site-nav ul').slideToggle();
		// this slideToggle is part of the effect library in jQuery library - has lots of things you can do
	});

	$(window).on('resize', function(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		// this is checking for the width of the window, so that on resize, we will be checking for when the icon/nav is hidden.
		// if the width is greater than a certain number, we need to show/hide the nav - because it's gotten lost based on slideToggle
		console.log(windowWidth);
		console.log(windowHeight);
		// this is being printed in the Console


		// this is showing or hiding each element depending on whether the viewport is above or below a certain width
		if ( windowWidth > 200 ) {
			$('.site-nav ul').show();
			$('.nav-icon').hide();
		}	else {
			$('.site-nav ul').hide();
			$('.nav-icon').show();
		}
	});




// We retrieve our drop cap elements using a class selector...
    var dropcaps = document.querySelectorAll(".dropcap"); 
    // ...then give them a height of three lines. 
    // By default, the drop cap's baseline will also be the third paragraph line.
    window.Dropcap.layout(dropcaps,4); 


}); 
// this is closing the ready method
