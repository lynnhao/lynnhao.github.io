

$(document).ready(function(){
    $(".section").css({"height":$(window).height()});
    $.scrollify({
        section : ".section"
    });
    $("#footer").css({"padding-top":$(window).height()-100});
});

