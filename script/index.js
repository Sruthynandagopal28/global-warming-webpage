$(document).ready(function(){
    function onePlanet(){
        var scrollValue = $(window).scrollTop();
        var elementPosition = $('.plastic').offset().top;
        if( elementPosition <= scrollValue ){
            $('.earth-image .div-layout').css("display","block");
        }
        else{
            $('.earth-image .div-layout').css("display","none");
        }
    }
    $(window).on('scroll', onePlanet);
});