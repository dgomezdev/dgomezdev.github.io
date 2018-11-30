//Prealoader

function iniciar() {
    $('#preloader').css({'marginTop': '-100%','transition':'1.2s'});
    setTimeout(() => {
        $('#preloader').hide();
    }, 1300);
}

var formato = '<span class="originales">'
var formatox = '</span></br><p id="textOut" class="bg hide">'
var cerrarFormato = '</p>'

function reemplazar() {


    var originales = document.getElementById('textoInicial').value;

    //obtener el valor de cada letra en el text area
    var todasLasPalabras = document.getElementById('textoInicial').value.split('');

    //definiendo la variable donde se guardará todo el texto
    var salida = '';

    // ciclo con if para verificar si la letra es vocal o no y luego reemplazar por una i
    for (let index = 0; index < todasLasPalabras.length; index++) {
        todasLasPalabras[index] = todasLasPalabras[index].toLowerCase();
        //Identificando las vocales sin tilde
        if (
            todasLasPalabras[index] === 'a' ||
            todasLasPalabras[index] === 'e' ||
            todasLasPalabras[index] === 'i' ||
            todasLasPalabras[index] === 'o' ||
            todasLasPalabras[index] === 'u'
        ) {
            //Reemplazando las vocales por la letra "i"
            todasLasPalabras[index] = 'i';
        }
        //Identificando las vocales con tilde
        else if (
            todasLasPalabras[index] === 'á' ||
            todasLasPalabras[index] === 'é' ||
            todasLasPalabras[index] === 'í' ||
            todasLasPalabras[index] === 'ó' ||
            todasLasPalabras[index] === 'ú'
        ) {
            //Reemplazando las vocales por la letra "i" con tilde
            todasLasPalabras[index] = 'í';
        }
        //Guardando cada letra de nuevo para dar salida
        salida += todasLasPalabras[index];
    }
    // excepciones

    salida = salida.replace(/qii/g, "qui");
    salida = salida.replace(/ica/g, "qui");
    salida = salida.replace(/ico/g, "qui");
    salida = salida.replace(/cu/g, "qui");
    salida = salida.replace(/ci/g, "qui");
    salida = salida.replace(/gii/g, "gui");
    salida = salida.replace(/cú/g, "quí");
    salida = salida.replace(/cí/g, "quí");
    salida = salida.replace(/gií/g, "guí");


    //agregando botón para compartir como un tuit

    var tuit = '<a class="tuitear" href="https://twitter.com/intent/tweet?text=';

    contenidoTuit = salida.replace(/ /g, "%20");
    /* Aprendiendo % 20 a % 20 crear % 20 un % 20 enlace % 20 para % 20 compartir % 20 en % 20 Twitter */

    var postTuit = '&url=https%3A%2F%2Fdgomezdev.github.io%2Fmimimi&hashtags=mimimi" target="_blank">';

    var endTuit = '</a> ';

    var share = tuit + contenidoTuit + postTuit + 'Tuitear Traducción' + endTuit;

    // output el nuevo texto en un parrafo <p>
    $('#cont').append(formato + originales + share + formatox + salida + cerrarFormato);

    //esconder el texto guia
    $('.bg-text').css('opacity', '0');


    setTimeout(() => {
        $('.hide').removeClass('hide');
        // Scroll to bottom cada vez que se agregue una traducción nueva
        $(function () {
            $("html, body").animate({
                scrollTop: $('html, body').get(0).scrollHeight
            }, 1000);
        });
    }, 200);

    //limpiar el input
    document.getElementById('textoInicial').value = ''



}
//Activar con la tecla enter
$('#textoInicial').keydown(function (event) {
    if (event.which == 13) {
        reemplazar();
        event.preventDefault();
    }
});