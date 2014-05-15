
setTimeout(checkDemensions, 10);
var scrolled = $(window).scrollTop();
scrollContent(scrolled);
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    var scrolled = $(window).scrollTop();
    console.log("Scroll: " + scrolled);
    $('#1').css('background-position-y' , (-(scrolled*0.15)+100)+'px');

   scrollContent(scrolled);

    if (scrolled > $("#intro").outerHeight() - 25){
        addAnimation("#1-2","animated duration-2 bounceInLeft deley-P2 ");
        addAnimation("#1-3","animated duration-2 bounceInRight deley-P2");
        addAnimation("#1-4","animated duration-2 bounceInLeft deley-P2");
        $("#1").removeClass("hide-text");
    }

    if (scrolled == 0){
        removeAnimation("#1-2");
        removeAnimation("#1-3");
        removeAnimation("#1-4");
    }
});
function scrollContent(s) {
    //get hiehgts
    var introHeight = $("#intro").outerHeight();
    var oneHeight = $("#1").outerHeight() + introHeight;
    var twoHeight = $("#2").outerHeight() + oneHeight;
    var threeHeight = $("#3").outerHeight() + twoHeight;
    var fourHeight = $("#4").outerHeight() + threeHeight;
    var fiveHeight = $("#5").outerHeight() + fourHeight;


    //move text accordingly
    var scrollModifier = 2;
    $('#intro-T').css('margin-left' , (-(s*scrollModifier))+'px');
    $('#1-T').css('margin-left' , (-((s-introHeight)*scrollModifier))+'px');
    $('#2-T').css('margin-left' , (-((s-oneHeight)*scrollModifier))+'px');
    $('#3-T').css('margin-left' , (-((s-twoHeight)*scrollModifier))+'px');
    $('#4-T').css('margin-left' , (-((s-threeHeight)*scrollModifier))+'px');
    $('#5-T').css('margin-left' , (-((s-fourHeight)*scrollModifier))+'px');
    
    //move bg images
    // $('#intro').css('background-position-x' , (-((s)*0.15))+'px');
    // $('#1').css('background-position-x' , (-((s-introHeight)*0.15))+'px');
    // $('#2').css('background-position-x' , (-((s-oneHeight)*0.15))+'px');
    // $('#3').css('background-position-x' , (-((s-twoHeight)*0.15))+'px');
    // $('#4').css('background-position-x' , (-((s-threeHeight)*0.15))+'px');
    // $('#5').css('background-position-x' , (-((s-fourHeight)*0.15))+'px');

}
function checkDemensions(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    $('.side-paralax').css('width' , width+'px');
    $('#1').css('width' , width+'px');
    $('#2').css('width' , width+'px');
    $('.intro').css('height' , height+'px');
    setTimeout(checkDemensions, 1000);
}
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

