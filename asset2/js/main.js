$(window).scroll(function(){
    //more then or equals to
    if($(window).scrollTop() >= 500 ){
        $( ".logocont" ).css( "background", "#172a48" );
   
    //less then 100px from top
    } else {
       
   $( ".logocont" ).css( "background", "none" );
    }
  });

  $('body').css('width', screen.width)

//========================================================================
//    MENU MOBILE
//========================================================================

function openmenu(){
    $('.menu-m').css('marginTop', '0');
    $('body').css('overflow', 'hidden');
}

function closemenu(){
    $('.menu-m').css('marginTop', '-100vh');
    $('body').css('overflow', 'inherit');
}

  
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