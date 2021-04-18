$(document).ready(function(){

    var mixer = mixitup('.wrapper');

});




//bottom to top

// fadeIn fadeOut

$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

//bottom to top

$('.scrollup').click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 100);
    return false;
});
