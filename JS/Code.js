
var x, started = false, s, m, sec, min, stopS, stopM, workSec, workMin, breakSec, breakMin;
function done() {
    var select = document.getElementById("timeOpt");
    var text = select.options[select.selectedIndex].text;
    console.log(text);
    if (text === "25/5") {
        workSec = 0;
        workMin = 25;
        breakSec = 10;
        breakMin = 0;
    }
    else {
        workSec = 0;
        workMin = 50;
        breakSec = 0;
        breakMin = 10;
    }
}
function workTime() {
    console.log("Work", "sec = ", sec, "min = ", min);
    clearInterval(x);
    s = workSec;
    m = workMin;
    stopS = workSec;
    stopM = workMin;
    sec = workSec;
    min = workMin;
    console.log("Work", "sec = ", sec, "min = ", min);
}
function breakTime() {
    console.log("Break", "sec = ", sec, "min = ", min);
    clearInterval(x);
    s = breakSec;
    m = breakMin;
    stopS = breakSec;
    stopM = breakMin;
    sec = breakSec;
    min = breakMin;
    console.log("Break", "sec = ", sec, "min = ", min);
}
function start() {
    console.log(s, m, stopS, stopM, typeof s);
    started = true;
    clearInterval(x);
    s = stopS;
    m = stopM;
    x = setInterval(function () {
        if (s == 0) {
            m--;
            s = 59;
        }
        if (m < 0) {
            document.getElementById('xyz').play();
            clearInterval(x);
            m = '00';
            s = '00';
            alert("Thank you!");
        }
        document.getElementById("timer")
            .innerHTML = (m) + ':' + (s--);
    }, 1000);
}

function reset() {
    console.log(started);
    if (started) {
        clearInterval(x);
        stopS = sec;
        stopM = min;
        start();
    }
}

function stop() {
    clearInterval(x);
    stopS = s;
    stopM = m;
}