

$(document).ready(function(){
    $(".section").css({"height":$(window).height()});
    $.scrollify({
        section : ".section"
    });

    $(".nav-arrow").click(function(e) {
		e.preventDefault();

		$.scrollify.next();
	});

    /*$("#footer").css({"padding-top":$(window).height()-100});*/

});