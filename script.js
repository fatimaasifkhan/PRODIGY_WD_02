let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}.${formattedMS}`;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").innerHTML = timeToString(elapsedTime);
    }, 10);
}

function stop() {
    clearInterval(timerInterval);
}

function startStop() {
    if (!running) {
        start();
        document.getElementById("startStopBtn").textContent = "Pause";
    } else {
        stop();
        document.getElementById("startStopBtn").textContent = "Start";
    }
    running = !running;
}

function reset() {
    stop();
    elapsedTime = 0;
    document.getElementById("display").innerHTML = "00:00:00.00";
    document.getElementById("startStopBtn").textContent = "Start";
    running = false;
    document.getElementById("lapsList").innerHTML = "";
}

function recordLap() {
    if (running) {
        const lapTime = timeToString(elapsedTime);
        const lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        document.getElementById("lapsList").appendChild(lapItem);
    }
}
