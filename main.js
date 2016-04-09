$(window).scroll(function(){
    $(".galaxy").css("opacity", 1 - $(window).scrollTop() / 1900);
});
