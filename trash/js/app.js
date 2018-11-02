//Posicion inicial
$('#sobrepoligonos').hide();
$('#equis').hide();
$('#buttonContainer').hide();
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

function addparpadeo() {
    setTimeout(function(){
        $('#middlepoint').addClass('middlepoint');
    }, 7500)
}

addparpadeo();
// EMPIEZA A ESCRIBIR

var textA= document.createElement('audio');
textA.src = '/sound/text.mp3';
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

// Insertar botones

function mostrarBotones(){
    $('#buttonContainer').show('slow');
    console.log("corriendo insertar botones");
    $('#saltarIntro').hide();
    console.log("escondiendo el saltar intro");
}

function tempoMostrarBotones() {
    setTimeout(function(){
        mostrarBotones();
     }, 29000);

}

tempoMostrarBotones();

// Hacer división de pantalla

    // para proyectos 
    // Card dynamic
        var message = '';
        var skill;

        for (var i = 0; i < proyectos.length; i += 1) {
            skill = proyectos[i];
            message += '<a href="#" target="_blank"><div id="cardContainer" class="card"><div class="container"><div id="tarjeta" class="row">'
            message += '<div id="cardImg">'+ skill.imagen + '</div>';
            message += '<div id="cardInfo" class="cardInfo col">';
            message += '<p class="cardT"><strong>' + skill.titulo + '</strong></p>';
            message += '<p class="parrafo">' + skill.descripcion + '</p>';
            message += '<p id="categorias">' + skill.lenguaje + '</p>'; 
            message += '</div></div></div></div></a>';
        }

        function dividirPantallaProyectos(){
            $('#tarjetas').html('<div></div>');
            $('#fila').addClass('row');
            $('#izquierda').addClass('col');
            $('#derechas').addClass('col');
            $('#tarjetas').html(message);
            $('#izquierda').css('opacity', '.4');
            standBy();
            $('#derechas').mouseleave(function(){
                desdividir();
            });
        }
    
    
    // para contacto 
    function dividirPantallaContacto(){
        $('#tarjetas').html('<div></div>');
        $('#fila').addClass('row');
        $('#izquierda').addClass('col');
        $('#derechas').addClass('col');
        $('#izquierda').css('opacity', '.4');
        standBy();
            $('#derechas').mouseleave(function(){
                desdividir();
            });
    }

    // para saber mas
    function dividirPantallaSaberMas(){
        $('#tarjetas').html('<div></div>');
        $('#fila').addClass('row');
        $('#izquierda').addClass('col');
        $('#derechas').addClass('col');
        $('#tarjetas').html(profile);
        $('#izquierda').css('opacity', '.4');
        standBy();
            $('#derechas').mouseleave(function(){
                desdividir();
            });
    }


// quitar división de pantalla

function desdividir(){
    $('#fila').removeClass('row');
    $('#izquierda').removeClass('col');
    $('#derechas').removeClass('col');
    $('#tarjetas').html('<div></div>');
    $('#izquierda').css('opacity', '1');
    $('#inside').addClass("insidei");
    $('#inside').removeClass('standBy');
    $('#siri').addClass('siri');
    $('#typed').hide();
    $('#recurrente').show();
    $('#recurrente').text('Selecciona una opción para continuar');
}


//ANIMACION STND BY MIENTRAS DIVIDIR PANTALLA ESTA ACTIVADO

function standBy(){
    $('#middle').removeClass("rotate");
    console.log('ANIMACION STND BY MIENTRAS DIVIDIR PANTALLA ESTA ACTIVADO');
    $('#inside').removeClass("insidei");
    $('#inside').addClass('standBy');
    $('.siri').removeClass('siri');
    $('#typed').hide();
    $('#recurrente').hide();

}


//ACCION CUANDO SE QUIERE CERRAR LA PÁGINA

/* function calma() {
    setTimeout(function(){
        $('mensajeSeVa').hide();
        type();
     }, 4000);

}

function botonCalma() {
    setTimeout(function(){
        $('#mensajeSeVa').html('<button class="" type="button" onclick="calma()">Saludar</button>');
     }, 4000);

}


function seEstaYendo(){
    $('#middle').removeClass("rotate");
    $('#inside').removeClass("insidei");
    $('#inside').addClass('seva');
    $('#typed').hide();
    $('#mensajeSeVa').text('TE VAS SIN SALUDAR?!?!?!!');
    botonCalma();

} */





$('body').mouseleave(function(){
    seEstaYendo();
});

