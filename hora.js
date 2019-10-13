

// Sistema campanar tal com està definit a la Gramàtica Essencial de la llengua catalan
// https://geiec.iec.cat/capitol_veure.asp?id_gelc=337&capitol=28
function get_time(hour, minute) {

    if (minute > 14)
        hour = hour + 1;

    if (minute == 0) return get_article(hour) + " " + get_hour(hour) + " en punt";
    if (minute == 1) return get_article(hour) + " " + get_hour(hour) + " i un (minut)";
    if (minute == 2) return get_article(hour) + " " + get_hour(hour) + " i dos (minuts)";
    if (minute == 3) return get_article(hour) + " " + get_hour(hour) + " i tres (minuts)";
    if (minute == 4) return get_article(hour) + " " + get_hour(hour) + " i quatre (minuts)";
    if (minute == 5) return get_article(hour) + " " + get_hour(hour) + " i cinc (minuts)";
    if (minute == 6) return get_article(hour) + " " + get_hour(hour) + " i sis (minuts)";
    if (minute == 7) return get_article(hour) + " " + get_hour(hour) + " i set (minuts)";
    if (minute == 8) return get_article(hour) + " " + get_hour(hour) + " i vuit (minuts)";
    if (minute == 9) return  get_article(hour) + " " + get_hour(hour) + " i nou (minuts)";
    if (minute == 10) return get_article(hour) + " " + get_hour(hour) + " i deu (minuts)";
    if (minute == 11) return get_article(hour) + " " + get_hour(hour) + " i onze (minuts)";
    if (minute == 12) return get_article(hour) + " " + get_hour(hour) + " i dotze (minuts)";
    if (minute == 13) return get_article(hour) + " " + get_hour(hour) + " i tretze (minuts)";
    if (minute == 14) return get_article(hour) + " " + get_hour(hour) + " i catorze (minuts)";
    if (minute == 15) return "Un quart " + get_de(hour) + get_hour(hour);

    if (minute == 16) return "Un quart i un (minut) " + get_de(hour) + get_hour(hour);
    if (minute == 17) return "Un quart i dos (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 18) return "Un quart i tres (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 19) return "Un quart i quatre (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 20) return "Un quart i cinc (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 21) return "Un quart i sis (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 22) return "Un quart i set (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 23) return "Un quart i vuit (minuts) " + get_de(hour) + get_hour(hour);
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
    if (minute == 37) return "Dos quarts i set (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 38) return "Dos quarts i vuit (minuts) " + get_de(hour) + get_hour(hour);
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
    if (minute == 52) return "Tres quarts i set (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 53) return "Tres quarts i vuit (minut) " + get_de(hour) + get_hour(hour);
    if (minute == 54) return "Tres quarts i nou (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 55) return "Tres quarts i deu (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 56) return "Tres quarts i onze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 57) return "Tres quarts i dotze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 58) return "Tres quarts i tretze (minuts) " + get_de(hour) + get_hour(hour);
    if (minute == 59) return "Tres quarts i catorze (minuts) " + get_de(hour) + get_hour(hour);

    return "i molt de temps";
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

    return "Les";
}

function get_article_lower(hour) {

    var s = get_article(hour);
    return s.charAt(0).toLowerCase() + s.slice(1)
}


function get_hour(hour) {

    if (hour == 1 || hour == 13) return "una";
    if (hour == 2 || hour == 14) return "dues";
    if (hour == 3 || hour == 15) return "tres";
    if (hour == 4 || hour == 16) return "quatre";
    if (hour == 5 || hour == 17) return "cinc";
    if (hour == 6 || hour == 18) return "sis";
    if (hour == 7 || hour == 19) return "set";
    if (hour == 8 || hour == 20) return "vuit";
    if (hour == 9 || hour == 21) return "nou";
    if (hour == 10 || hour == 22) return "deu";
    if (hour == 11 || hour == 23) return "onze";
    if (hour == 12 || hour == 24 || hour == 0) return "dotze"

    return "no sé noi"
}

function get_text_hora(hours, minutes, seconds) {
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds;
}

function get_all_times(hours, min) {

    var list = "";
    for (min = 0; min <= 59; min++) {
        if (min < 10) {
            var m = "0" + min;
        }
        else {
            var m = min;
        }
        list += hours + ":" + m + " > " + get_time(hours, min) + "<br>";
    }
    return list;
}


function start_timer() {
    
    const interval = setInterval(function() {

            var today = new Date();
            var hours = today.getHours();
            var minutes = today.getMinutes();
            var seconds = today.getSeconds();

            var text = get_time(hours, minutes) + (" (sistema campanar)");
            var element = document.getElementById("hora");
            element.innerHTML = get_text_hora(hours, minutes, seconds);

            element = document.getElementById("text");
            element.innerHTML = text;
            element.innerHTML += "<p>Depuració</p>" + get_all_times(hours, minutes);

         }, 1000);
}

