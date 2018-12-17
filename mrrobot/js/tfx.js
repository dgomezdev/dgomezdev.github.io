var title = $('#title').text();
var subtitle = $('#subtitle').text();
var formation = $('li').html();

//==================================================
//              Preloader
//==================================================


$('.preloader img').mouseup(function () {

    $('.preloader img').css('border',' white 12px solid');

    setTimeout(() => {
        $('.preloader').addClass('preloaderA');
    }, 1200);

});



//==================================================
//              Title Fx
//==================================================
function titleFX() {

    title = title.replace(/a/g, "4");
    title = title.replace(/e/g, "3");
    title = title.replace(/i/g, "1");
    title = title.replace(/o/g, "0");
    title = title.replace(/u/g, "X");
    $('#title').text(title)
}

function cTitleFX() {
    title = title.replace(/4/g, "a");
    title = title.replace(/3/g, "e");
    title = title.replace(/1/g, "i");
    title = title.replace(/0/g, "o");
    title = title.replace(/X/g, "u");
    $('#title').text(title)
}

//==================================================
//              Subtitle Fx
//==================================================

function subtitleFX() {

    subtitle = subtitle.replace(/a/g, "4");
    subtitle = subtitle.replace(/e/g, "3");
    subtitle = subtitle.replace(/i/g, "1");
    subtitle = subtitle.replace(/o/g, "0");
    subtitle = subtitle.replace(/u/g, "X");
    $('#subtitle').text(subtitle);
}

function csubTitleFX() {
    subtitle = subtitle.replace(/4/g, "a");
    subtitle = subtitle.replace(/3/g, "e");
    subtitle = subtitle.replace(/1/g, "i");
    subtitle = subtitle.replace(/0/g, "o");
    subtitle = subtitle.replace(/X/g, "u");
    $('#subtitle').text(subtitle);
}

//==================================================
//             List Fx
//==================================================

var list = document.getElementsByTagName('li');

function liTextFx() {
    for (let i = 0; i < list.length; i++) {
        let ddd = list[i];
        ddd = $(ddd).text().replace(/a/g, "4");
        ddd = ddd.replace(/e/g, "3");
        ddd = ddd.replace(/i/g, "1");
        ddd = ddd.replace(/o/g, "0");
        ddd = ddd.replace(/u/g, "x");
        $(list[i]).text(ddd);
    }
}

function cliTextFx() {
    for (let i = 0; i < list.length; i++) {
        let ddd = list[i];
        ddd = $(ddd).text().replace(/4/g, "a");
        ddd = ddd.replace(/3/g, "e");
        ddd = ddd.replace(/1/g, "i");
        ddd = ddd.replace(/0/g, "o");
        ddd = ddd.replace(/X/g, "u");
        $(list[i]).text(ddd);
    }
}

//==================================================
//              open & close menu
//==================================================

$('.menu-foot').mouseup(function () {
    $('.menu').addClass('move-menu');
});

$('.menu-close').mouseup(function () {
    $('.menu').removeClass('move-menu');
});

$('#formation').mouseup(function () {
    $('.modal').addClass('modal-appear');
    $('.logo-foot').css('display', 'none');
    $('.menu-foot').css('display', 'none');
    $('.wrapper').css('justifyContent', 'center');
    $('.back').css('opacity', '1');
});

$('.back').mouseup(function () {
    $('.modal').removeClass('modal-appear');
    $('.logo-foot').css('display', 'inherit');
    $('.menu-foot').css('display', 'inherit');
    $('.wrapper').css('justifyContent', 'space-between');
    $('.back').css('opacity', '0');
});


/* function close(){
    
} */


//==================================================
//              toogle the l33t
//==================================================

var leetCounter = 0;

function l33t() {
    if (leetCounter === 0) {
        leetCounter += 1;
        titleFX();
        subtitleFX();
        liTextFx();
    } else {
        leetCounter -= 1;
        cTitleFX();
        csubTitleFX();
        cliTextFx();
    }

}

$('.logo-foot').mouseup(function () {
    l33t()
});

/* setInterval(() => {
    titleFX();
    subtitleFX();
    liTextFx();
}, 1000);

setInterval(() => {
    cTitleFX();
    csubTitleFX();
    cliTextFx();
}, 2400);
 */