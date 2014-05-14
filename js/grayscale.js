//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    var scrolled = $(window).scrollTop();
    $('#1').css('background-position-y' , (-(scrolled*0.15)+100)+'px');

    if (scrolled > 300){
        addAnimation("#1-2","animated bounceInLeft");
        addAnimation("#1-3","animated bounceInRight");
        addAnimation("#1-4","animated bounceInLeft");
    }

    if (scrolled == 0){
        removeAnimation("#1-2");
        removeAnimation("#1-3");
        removeAnimation("#1-4");
    }
});

function addAnimation(id, classes) {
    var $elem = $(id);
    $elem.addClass(classes);
}
function removeAnimation(id){
    $(id).removeClass();
}

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

