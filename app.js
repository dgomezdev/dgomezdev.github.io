//Posicion inicial
$('#sobrepoligonos').hide();
$('#equis').hide();
console.log('1 POSICION INICIAL');

// INIT ANIMATION

function initAnimation() {
    setTimeout(function(){
        console.log('2 INICIA EL PROCESO');
        $('#outside')
        .hide()
        .hide(4500)
        .show(5000)
        .hide(50)
        .show(50)
        .hide(50);

        $('#main')
        .hide()
        .hide()
        .show(6000)
        .hide(50)
        .show(50)
        .hide(50);

        $('#inside')
        .hide()
        .hide(4500)
        .show(5000)
        .hide(50)
        .show(50)

        $('#figura')
        .hide();

        $('#equis')
        .hide()
        .show(2500)
        .hide(50)
        .show(50)
        .hide(50);

        $('#siri')
        .hide()
        .fadeIn(500)
        ;
        //secuencia de arranque
        $('#sobrantes')
        .fadeOut(550)
        .show(50)
        .hide(50)
        .show(50)
        .hide(50)
        .show(50)
        .hide(50);

        $('#puntaDerecha, #puntaIzquierda')
        .fadeOut(550)
        .show(50)
        .hide(50)
        .show(50)
        .hide(50)
        .show(50)
        .hide(50)
        .show(1000);

        $('#quintalineaderecha, #quintalineaizquierda')
        .hide(1450)
        .show(3650)
        .show(5000)
        .hide(50)
        .show(50)
        .hide(50);
        ;
        $('#cuartalineaderecha, #cuartalineaizquierda')
        .hide(1500)
        .show(3600)
        .show(5000)
        .hide(50)
        .show(50)
        .hide(50);
        ;

        $('#terceralineaderecha, #terceralineaizquierda')
        .hide(1550)
        .show(3570)
        .show(5000)
        .hide(50)
        .show(50)
        .hide(50);
        ;

        $('#segundalineaderecha, #segundalineaizquierda')
        .hide(1600)
        .show(3550)
        .show(5000)
        .hide(50)
        .show(50)
        .hide(50);
        ;

        $('#primeralineaderecha, #primeralineaizquierda')
        .hide(1620)
        .show(3555)
        .show(5000)
        .hide(50)
        .show(50)
        .hide(50);
        ;

        $('#middleline')
        .hide(1650)
        .show(3500)
        .show(5000)
        .hide(50)
        .show(50)
        .hide(50);
        ;

        $('#puntas').hide();

        $('#siri').addClass('siri');
        $('#sobrepoligonos').show();

     }, 1500);
}


initAnimation();

function addcss() {
    setTimeout(function(){
        $('#middle').addClass("rotate");
        console.log('Working');
        $('#inside').addClass("insidei");
     }, 7000);
}

addcss();
// EMPIEZA A ESCRIBIR

var textA= document.createElement('audio');
textA.src = 'text.mp3';
textA.addEventListener('ended', function(){
    
 });
function textSound() { 
    textA.play();
}

function type() {
    setTimeout(function(){
        textSound();
        var typed = new Typed("#typed", {
            stringsElement: '#typed-strings',
            typeSpeed: 50,
            backSpeed: 1,
        }
        );
        
     }, 8000);

}

type();

// Hacer división de pantalla

function dividirPantalla(){
    $('#fila').addClass('row');
    $('#izquierda').addClass('col');
    $('#derechas').addClass('col');
}


// quitar división de pantalla

function desdividir(){
    $('#fila').removeClass('row');
    $('#izquierda').removeClass('col');
    $('#derechas').removeClass('col');
}



