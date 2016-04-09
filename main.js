$(window).scroll(function(){
    $(".stars").css("opacity", 1 - $(window).scrollTop() / 1900);
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
