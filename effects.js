$(window).scroll(function(){
    $(".stars").css("opacity", 1 - $(window).scrollTop() / 1900);
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});
