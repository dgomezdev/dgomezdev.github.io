/* $(window).scroll(function(){
    //more then or equals to
    if($(window).scrollTop() >= 500 ){
        $( ".logocont" ).css( "background", "#172a48" );
   
    //less then 100px from top
    } else {
       
   $( ".logocont" ).css( "background", "none" );
    }
  });

  var ancho = screen.width;
 */

//========================================================================
//    slider
//========================================================================
var sliderbtnh = $('.slider-btn-cont').height();
var fsliderbtnh = sliderbtnh;
sliderbtnh += 24;
var nsliderbtnh = sliderbtnh * -1;

$('.slider-btn-cont').css(
    'marginTop', nsliderbtnh
);

var v = 4000;
var v2 = v;
var v3 = v2 + v;
var v4 = v3 + v;
var v5 = v4 + v;
var v6 = v5 + v;
var v7 = v6 + v;
slider();

function slider() {
    setTimeout(function () {
        slide1()
    }, 0);
    setTimeout(function () {
        slide2()
    }, v2);
    setTimeout(function () {
        slide3()
    }, v3);
    setTimeout(function () {
        slide4()
    }, v4);
    setTimeout(function () {
        slide5()
    }, v5);
    setTimeout(function () {
        slide6()
    }, v6);
    setTimeout(function () {
        slider()
    }, v7);
}

function slide1() {
    $('#slide6').removeClass('btn-slider-y');
    $('#slide').removeClass('slide6');
    $('#slide').addClass('slide1');
    $('#slide1').addClass('btn-slider-y');
}

function slide2() {
    $('#slide').removeClass('slide1');
    $('#slide1').removeClass('btn-slider-y');
    $('#slide').addClass('slide2');
    $('#slide2').addClass('btn-slider-y');
}

function slide3() {
    $('#slide').removeClass('slide2');
    $('#slide2').removeClass('btn-slider-y');
    $('#slide').addClass('slide3');
    $('#slide3').addClass('btn-slider-y');
}

function slide4() {
    $('#slide').removeClass('slide3');
    $('#slide3').removeClass('btn-slider-y');
    $('#slide').addClass('slide4');
    $('#slide4').addClass('btn-slider-y');
}

function slide5() {
    $('#slide').removeClass('slide4');
    $('#slide4').removeClass('btn-slider-y');
    $('#slide').addClass('slide5');
    $('#slide5').addClass('btn-slider-y');
}

function slide6() {
    $('#slide').removeClass('slide5');
    $('#slide5').removeClass('btn-slider-y');
    $('#slide').addClass('slide6');
    $('#slide6').addClass('btn-slider-y');
}

//========================================================================
//    anchos automaticos
//========================================================================
var w = window.innerWidth;
var h = window.innerHeight;
// obtener alto y ancho del texto
var hLaFirma = $('#la-firma .izquierda').height();
var wLaFirma = $('#la-firma .izquierda').width();
var hns = $('#esp .izquierda').height();
var wns = $('#esp .izquierda').width();

if (w >= 1024) {
    // hacer la imagen del mismo tamaño que el texto en pantallas mayores a 1024px
    $('.autohw').css({
        'height': hLaFirma,
        'width': wLaFirma,
        'backgroundSize': 'cover'
    });
    $('.autons').css({
        'height': hns,
        'width': wns,
        'backgroundSize': 'cover'
    });
} else if (w <= 1023) {
    // hacer la imagen del mismo tamaño que el texto en pantallas menores a 1024px
    $('.autohw').css({
        'height': hLaFirma,
        'width': w,
        'backgroundSize': 'cover'
    });
    $('.autons').css({
        'height': hns,
        'width': w,
        'backgroundSize': 'cover'
    });
}




//========================================================================
//    MENU MOBILE
//========================================================================



//========================================================================
//    SMOOTH SCROLL
//========================================================================


// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    /* // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }; */
                });
            }
        }
    });

//========================================================================