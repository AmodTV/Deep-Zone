
var x, s = 0, m = 25, stopS = 0, stopM = 25, started = false;
function start() {
    started = true;
    clearInterval(x);
    s = stopS;
    m = stopM;
    x = setInterval(function () {
        if (s == 0) {
            m--;
            s = 59;
        }
        if (m == 0 && s == 0) {
            window.alert("Time up!!");
        }
        document.getElementById("timer")
            .innerHTML = (m) + ':' + (s--);
        console.log(a);
    }, 1000);
}

function reset() {
    if (started) {
        clearInterval(x);
        stopS = 0;
        stopM = 25;
        start();
    }
}

function stop() {
    clearInterval(x);
    stopS = s;
    stopM = m;
}