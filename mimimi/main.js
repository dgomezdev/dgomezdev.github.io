

//Prealoader

function iniciar(){
    $('#preloader').css('marginTop','-100%');
    setTimeout(() => {
        $('#preloader').hide();
    }, 1000);
}

var formato = '<span class="originales">'
var formatox = '</span></br><p id="textOut" class="bg hide">'
var cerrarFormato = '</p>'

function reemplazar() {
    var originales =  document.getElementById('textoInicial').value;

    //obtener el valor de cada letra en el text area
    var todasLasPalabras = document.getElementById('textoInicial').value.split('');

    //definiendo la variable donde se guardará todo el texto
    var salida = '';

    // ciclo con if para cerificar si la letra es vocal y luego reemplazar por una i
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


    // output el nuevo texto en un parrafo <p>
    $('#cont').append(formato + originales + formatox + salida + cerrarFormato);


    setTimeout(() => {
        $('.hide').removeClass('hide');
        // Scroll to bottom cada vez que se agregue una traducción nueva
        $(function () {
            $("html, body").animate({
                scrollTop: $('html, body').get(0).scrollHeight
            }, 1000);
        });
    }, 200);

}
//Activar con la tecla enter
$('#textoInicial').keydown(function (event) {
    if (event.which == 13) {
        reemplazar();
        event.preventDefault();
    }
});