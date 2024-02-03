module.exports = {get_time_campanal, get_time_campanal_tradicional, get_time_reloche, get_text_hora};

// Sistema campanal tradicional
function get_time_campanal_tradicional(hour, minute) {

    if (minute > 6)
        hour = hour + 1;

    if (minute == 0) return get_article(hour) + " " + get_hour(hour) + " en punto";
    if (minute == 1) return get_article(hour) + " " + get_hour(hour);
    if (minute == 2 || minute == 3 || minute == 4) return get_article(hour) + " " + get_hour(hour) + " " + get_tocades(hour);
    if (minute == 5 || minute == 6) return get_article(hour) + " " + get_hour(hour) + " ben " + get_tocades(hour);
    if (minute == 7 || minute == 8) return "Mig quart " + get_de(hour) + get_hour(hour);
    if (minute == 9 || minute == 10 || minute == 11) return "Mig quart passat " + get_de(hour) + get_hour(hour);
    if (minute == 12 || minute == 13) return "Mig quart ben passat " + get_de(hour) + get_hour(hour);
    if (minute == 14 || minute == 15 || minute == 16) return "Un quart " + get_de(hour) + get_hour(hour);

    if (minute == 17 || minute == 18 || minute == 19) return "Un quart tocat " + get_de(hour) + get_hour(hour);
    if (minute == 20 || minute == 21) return "Un quart ben tocat " + get_de(hour) + get_hour(hour);
    if (minute == 22 || minute == 23) return "Un quart i mig " + get_de(hour) + get_hour(hour);
    if (minute == 24 || minute == 25 || minute == 26) return "Un quart i mig passat " + get_de(hour) + get_hour(hour);
    if (minute == 27 || minute == 28) return "Un quart i mig ben passat " + get_de(hour) + get_hour(hour);
    if (minute == 29 || minute == 30 || minute == 31) return "Dos quarts " + get_de(hour) + get_hour(hour);

    if (minute == 32 || minute == 33 || minute == 34) return "La meya pasada " + get_de(hour) + get_hour(hour);
    if (minute == 35 || minute == 36) return "La meya bien pasada " + get_de(hour) + get_hour(hour);
    if (minute == 37 || minute == 38) return "Dos quarts i mig " + get_de(hour) + get_hour(hour);
    if (minute == 39 || minute == 40 || minute == 41) return "Dos quarts i mig passats " + get_de(hour) + get_hour(hour);
    if (minute == 42 || minute == 43) return "Dos quarts i mig ben passats " + get_de(hour) + get_hour(hour);
    if (minute == 44 || minute == 45 || minute == 46) return "Tres quarts " + get_de(hour) + get_hour(hour);

    if (minute == 47 || minute == 48 || minute == 49) return "Tres quarts tocats " + get_de(hour) + get_hour(hour);
    if (minute == 50 || minute == 51) return "Tres quarts ben tocats " + get_de(hour) + get_hour(hour);
    if (minute == 52 || minute == 53) return "Tres quarts i mig " + get_de(hour) + get_hour(hour);
    if (minute == 54 || minute == 55 || minute == 56) return "Tres quarts i mig passats " + get_de(hour) + get_hour(hour);
    if (minute == 57 || minute == 58) return "Tres quarts i mig ben passats " + get_de(hour) + get_hour(hour);
    if (minute == 59) return get_article(hour) + " " + get_hour(hour)

    return "no ho sé";
}



// Sistema campanal tal com està definit a la Gramàtica Essencial de la llengua catalana
// https://geiec.iec.cat/capitol_veure.asp?id_gelc=337&capitol=28
function get_time_campanal(hour, minute) {

    if (minute > 14 || minute == 7 || minute == 8)
        hour = hour + 1;

    if (minute == 0) return get_article(hour) + " " + get_hour(hour) + " en punto";
    if (minute == 1) return get_article(hour) + " " + get_hour(hour) + " y un (minuto)";
    if (minute == 2) return get_article(hour) + " " + get_hour(hour) + " y dos (minutos)";
    if (minute == 3) return get_article(hour) + " " + get_hour(hour) + " y tres (minutos)";
    if (minute == 4) return get_article(hour) + " " + get_hour(hour) + " y cuatre (minutos)";
    if (minute == 5) return get_article(hour) + " " + get_hour(hour) + " y cinco (minutos)";
    if (minute == 6) return get_article(hour) + " " + get_hour(hour) + " y seis (minutos)";
    if (minute == 7) return "Mig quart " + get_de(hour) + get_hour(hour);
    if (minute == 8) return "Mig quart " + get_de(hour) + get_hour(hour);
    if (minute == 9) return  get_article(hour) + " " + get_hour(hour) + " y nueu (minutos)";
    if (minute == 10) return get_article(hour) + " " + get_hour(hour) + " y diez (minutos)";
    if (minute == 11) return get_article(hour) + " " + get_hour(hour) + " y once (minutos)";
    if (minute == 12) return get_article(hour) + " " + get_hour(hour) + " y doce (minutos)";
    if (minute == 13) return get_article(hour) + " " + get_hour(hour) + " y trece (minutos)";
    if (minute == 14) return get_article(hour) + " " + get_hour(hour) + " y catorce (minutos)";
    if (minute == 15) return "Un quart " + get_de(hour) + get_hour(hour);

    if (minute == 16) return "Un quart i un (minut) " + get_de(hour) + get_hour(hour);
    if (minute == 17) return "Un quart i dos (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 18) return "Un quart i tres (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 19) return "Un quart i quatre (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 20) return "Un quart i cinc (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 21) return "Un quart i sis (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 22) return "Un quart i mig " + get_de(hour) + get_hour(hour);
    if (minute == 23) return "Un quart i mig " + get_de(hour) + get_hour(hour);
    if (minute == 24) return "Un quart i nou (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 25) return "Un quart i deu (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 26) return "Un quart i onze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 27) return "Un quart i dotze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 28) return "Un quart i tretze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 29) return "Un quart i catorze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 30) return "Dos quarts " + get_de(hour) + get_hour(hour);

    if (minute == 31) return "Dos quarts i un (minut) " + get_de(hour) + get_hour(hour);
    if (minute == 32) return "Dos quarts i dos (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 33) return "Dos quarts i tres (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 34) return "Dos quarts i quatre (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 35) return "Dos quarts i cinc (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 36) return "Dos quarts i sis (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 37) return "Dos quarts i mig " + get_de(hour) + get_hour(hour);
    if (minute == 38) return "Dos quarts i mig " + get_de(hour) + get_hour(hour);
    if (minute == 39) return "Dos quarts i nou (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 40) return "Dos quarts i deu (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 41) return "Dos quarts i onze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 42) return "Dos quarts i dotze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 43) return "Dos quarts i tretze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 44) return "Dos quarts i catorze (minuts) " + get_de(hour) + get_hour(hour);

    if (minute == 45) return "Tres quarts " + get_de(hour) + get_hour(hour);
    if (minute == 46) return "Tres quarts i un (minut) " + get_de(hour) + get_hour(hour);
    if (minute == 47) return "Tres quarts i dos (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 48) return "Tres quarts i tres (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 49) return "Tres quarts i quatre (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 50) return "Tres quarts i cinc (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 51) return "Tres quarts i sis (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 52) return "Tres quarts i mig " + get_de(hour) + get_hour(hour);
    if (minute == 53) return "Tres quarts i mig " + get_de(hour) + get_hour(hour);
    if (minute == 54) return "Tres quarts i nou (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 55) return "Tres quarts i deu (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 56) return "Tres quarts i onze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 57) return "Tres quarts i dotze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 58) return "Tres quarts i tretze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 59) return "Tres quarts i catorze (minuts) " + get_de(hour) + get_hour(hour);

    return "no ho sé";
}

function get_time_reloche(hour, minute) {

    if (minute > 30)
        hour = hour + 1;


    if (minute == 0) return get_article(hour) + " " + get_hour(hour) + " en punto";
    if (minute == 1) return get_article(hour) + " " + get_hour(hour) + " y un (minuto)";
    if (minute == 2) return get_article(hour) + " " + get_hour(hour) + " y dos (minutos)";
    if (minute == 3) return get_article(hour) + " " + get_hour(hour) + " y tres (minutos)";
    if (minute == 4) return get_article(hour) + " " + get_hour(hour) + " y cuatre (minutos)";
    if (minute == 5) return get_article(hour) + " " + get_hour(hour) + " y cinco (minutos)";
    if (minute == 6) return get_article(hour) + " " + get_hour(hour) + " y seis (minutos)";
    if (minute == 7) return get_article(hour) + " " + get_hour(hour) + " y seet (minutos)";
    if (minute == 8) return get_article(hour) + " " + get_hour(hour) + " y ueito (minutos)";
    if (minute == 9) return  get_article(hour) + " " + get_hour(hour) + " y nueu (minutos)";
    if (minute == 10) return get_article(hour) + " " + get_hour(hour) + " y diez (minutos)";
    if (minute == 11) return get_article(hour) + " " + get_hour(hour) + " y once (minutos)";
    if (minute == 12) return get_article(hour) + " " + get_hour(hour) + " y doce (minutos)";
    if (minute == 13) return get_article(hour) + " " + get_hour(hour) + " y trece (minutos)";
    if (minute == 14) return get_article(hour) + " " + get_hour(hour) + " y catorce (minutos)";
    if (minute == 15) return get_article(hour) + " " + get_hour(hour) + " y cuarto";

    if (minute == 16) return get_article(hour) + " " + get_hour(hour) + " y deciseis/sece (minutos)";
    if (minute == 17) return get_article(hour) + " " + get_hour(hour) + " y decisiet (minuts)";
    if (minute == 18) return get_article(hour) + " " + get_hour(hour) + " y deciueito (minuts)";
    if (minute == 19) return get_article(hour) + " " + get_hour(hour) + " y decinueu (minuts)";
    if (minute == 20) return get_article(hour) + " " + get_hour(hour) + " y vinte (minuts)";
    if (minute == 21) return get_article(hour) + " " + get_hour(hour) + " y vintiun (minuts)";
    if (minute == 22) return get_article(hour) + " " + get_hour(hour) + " y vintidós (minuts)";
    if (minute == 23) return get_article(hour) + " " + get_hour(hour) + " y vintitrés (minuts)";
    if (minute == 24) return  get_article(hour) + " " + get_hour(hour) + " y vinticuatre (minuts)";
    if (minute == 25) return get_article(hour) + " " + get_hour(hour) + " y vinticinco (minuts)";
    if (minute == 26) return get_article(hour) + " " + get_hour(hour) + " y vintiseis (minuts)";
    if (minute == 27) return get_article(hour) + " " + get_hour(hour) + " y vintisiet (minuts)";
    if (minute == 28) return get_article(hour) + " " + get_hour(hour) + " y vintiueito (minuts)";
    if (minute == 29) return get_article(hour) + " " + get_hour(hour) + " y vintinueu (minuts)";
    if (minute == 30) return get_article(hour) + " " + get_hour(hour) + " y meya";

    if (minute == 31) return get_article(hour) + " " + get_hour(hour) + " menos vintinueu (minuts)";
    if (minute == 32) return get_article(hour) + " " + get_hour(hour) + " menos vintiueito (minuts)";
    if (minute == 33) return get_article(hour) + " " + get_hour(hour) + " menos vintisiet (minuts)";
    if (minute == 34) return get_article(hour) + " " + get_hour(hour) + " menos vintiseis (minuts)";
    if (minute == 35) return get_article(hour) + " " + get_hour(hour) + " menos vinticinco (minuts)";
    if (minute == 36) return get_article(hour) + " " + get_hour(hour) + " menos vinticuatre (minuts)";
    if (minute == 37) return get_article(hour) + " " + get_hour(hour) + " menos vintitrés (minuts)";
    if (minute == 38) return get_article(hour) + " " + get_hour(hour) + " menos vintidós (minuts)";
    if (minute == 39) return get_article(hour) + " " + get_hour(hour) + " menos vintiun (minuts)";
    if (minute == 40) return get_article(hour) + " " + get_hour(hour) + " menos vinte (minuts)";
    if (minute == 41) return get_article(hour) + " " + get_hour(hour) + " menos decinueu (minuts)";
    if (minute == 42) return get_article(hour) + " " + get_hour(hour) + " menos deciueito (minuts)";
    if (minute == 43) return get_article(hour) + " " + get_hour(hour) + " menos decisiet (minuts)";
    if (minute == 44) return get_article(hour) + " " + get_hour(hour) + " menos deciseis/sece (minuts)";
    if (minute == 45) return get_article(hour) + " " + get_hour(hour) + " menos cuarto";

    if (minute == 46) return get_article(hour) + " " + get_hour(hour) + " menos catorce (minuts)";
    if (minute == 47) return get_article(hour) + " " + get_hour(hour) + " menos trece (minuts)";
    if (minute == 48) return get_article(hour) + " " + get_hour(hour) + " menos doce (minuts)";
    if (minute == 49) return get_article(hour) + " " + get_hour(hour) + " menos once (minuts)";
    if (minute == 50) return get_article(hour) + " " + get_hour(hour) + " menos diez (minuts)";
    if (minute == 51) return get_article(hour) + " " + get_hour(hour) + " menos nueu (minuts)";
    if (minute == 52) return get_article(hour) + " " + get_hour(hour) + " menos ueito (minuts)";
    if (minute == 53) return get_article(hour) + " " + get_hour(hour) + " menos siet (minuts)";
    if (minute == 54) return get_article(hour) + " " + get_hour(hour) + " menos seis (minuts)";
    if (minute == 55) return get_article(hour) + " " + get_hour(hour) + " menos cinco (minuts)";
    if (minute == 56) return get_article(hour) + " " + get_hour(hour) + " menos cuatre (minuts)";
    if (minute == 57) return get_article(hour) + " " + get_hour(hour) + " menos tres (minuts)";
    if (minute == 58) return get_article(hour) + " " + get_hour(hour) + " menos dos (minuts)";
    if (minute == 59) return get_article(hour) + " " + get_hour(hour) + " menos un (minut)";


    return "no lo sé";
}


function get_de(hour) {

    if (hour == 1 || hour == 13 ||
        hour == 11 || hour == 23)
        return "d'";

    return "de ";
}


function get_article(hour) {

    if (hour == 1 || hour == 13)
        return "La";

    return "Las";
}


function get_tocades(hour) {

    if (hour == 1 || hour == 13)
        return "pasada";

    return "pasadas";
}

function get_article_lower(hour) {

    var s = get_article(hour);
    return s.charAt(0).toLowerCase() + s.slice(1)
}


function get_hour(hour) {

    if (hour == 1 || hour == 13) return "una";
    if (hour == 2 || hour == 14) return "dos";
    if (hour == 3 || hour == 15) return "tres";
    if (hour == 4 || hour == 16) return "cuatre";
    if (hour == 5 || hour == 17) return "cinco";
    if (hour == 6 || hour == 18) return "seis";
    if (hour == 7 || hour == 19) return "siet";
    if (hour == 8 || hour == 20) return "ueito";
    if (hour == 9 || hour == 21) return "nueu";
    if (hour == 10 || hour == 22) return "diez";
    if (hour == 11 || hour == 23) return "once";
    if (hour == 12 || hour == 24 || hour == 0) return "doce"

    return "nino, no lo sé"
}

function get_text_hora(hours, minutes, seconds) {
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds;
}

function get_all_times(hours, min, sistema) {

    var list = "";
    for (min = 0; min <= 59; min++) {
        if (min < 10) {
            var m = "0" + min;
        }
        else {
            var m = min;
        }

        var text;

        if (sistema == 'campanal')
            text = get_time_campanal(hours, min);

        if (sistema == 'campanal_tradicional')
            text = get_time_campanal_tradicional(hours, min);
        else
            text = get_time_reloche(hours, min);

        list += hours + ":" + m + " > " + text  + "<br>";
    }
    return list;
}

function show_timer() {

    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    show_hour(hours, minutes, seconds);
}

function show_hour(hours, minutes, seconds) {

    var text = get_time_campanal(hours, minutes);
    var element = document.getElementById("hora");

    element.innerHTML = get_text_hora(hours, minutes, seconds);

    element = document.getElementById("text_campanal");
    element.innerHTML = text;
    //element.innerHTML += "<p>Depuració</p>" + get_all_times(hours, minutes, 'campanal');

    text = get_time_reloche(hours, minutes);
    element = document.getElementById("text_reloche");
    element.innerHTML = text;
    //element.innerHTML += "<p>Depuració</p>" + get_all_times(hours, minutes, 'reloche');

    text = get_time_campanal_tradicional(hours, minutes);
    element = document.getElementById("text_campanal_tradicional");
    element.innerHTML = text;
    //element.innerHTML += "<p>Depuració</p>" + get_all_times(hours, minutes, 'campanal_tradicional');
}


function show_requested_time(text_hours, text_minutes) {

    var hours = parseInt(text_hours);
    var minutes = parseInt(text_minutes);

    if ((isNaN(hours) || hours < 0 || hours > 23) || (isNaN(minutes) || minutes < 0  || minutes > 59))
    {
        return;
    }

    stop_timer();
    show_hour(hours, minutes, 0);
}

var time_timer_id = null;

function speak_text(id, element) {

    text = document.getElementById(id).innerHTML;
    hash = md5(text).substring(0, 8);
    
    document.getElementById(element).disabled = true;
    url = `https://api.softcatala.org/tts-service/v1/speak/?text=${text}&token=${hash}`;
    aud = new Audio(url)

    aud.onended = function() {
        document.getElementById(element).disabled = false;
    }; 

    aud.play();

}

function start_timer() {
    show_timer();
    
    time_timer_id = setInterval(function() {
            show_timer();
         }, 1000);
}

function stop_timer() {
    clearInterval(time_timer_id);
    time_timer_id = null;
}

