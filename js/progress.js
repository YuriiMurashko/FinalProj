$(window).scroll (function () {
    var ratio = $(document).scrollTop () / (($(document).height () - $(window).height ()) / 100);
    $("#progressbarline").width (ratio + "%"); 
});