matrix();

$(window).bind("load", function() {
    $('#preloader').fadeOut(1000);
    $('main').removeClass('hide-on-load');
    $('#header').removeClass('hide-on-load');
    $('aside').removeClass('hide-on-load');
    
 });
 

 
//========================================================================
//      BOTON CONTACTO MOBILE
//========================================================================
const contactar = $('#contactar');
const wa = $('#whatsapp');
const gmail = $('gmail');
const telegram = $('telegram');
let counter = 'open';


function cantactoMobile(x) {
    x.classList.toggle("change");
}

//========================================================================
//     LLUVIA MATRIX
//========================================================================

function matrix() {
    var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var letraD = "D";
//converting the string into an array of single characters
letraD = letraD.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#131314"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//a random letraD character to print
		var text = letraD[Math.floor(Math.random()*letraD.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 50);

}



//========================================================================
//    SMOOTH SCROLL
//========================================================================


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
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
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//========================================================================