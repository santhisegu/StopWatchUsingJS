var hours = 0 ;
var minutes = 0 ;
var seconds = 0 ;
var milliseconds = 0 ;

var startTimer = function() {
    millisecInt = setInterval(function(){
        milliseconds = ( milliseconds > 1000 ) ? 1 : ( milliseconds + 1 ) ;
        setTimeToHTML(hours, minutes, seconds, milliseconds);
    },1);
    secondsInt = setInterval(function() {
        seconds = ( seconds > 59 ) ? 1 : ( seconds + 1 ) ;
    },1000);
    minutesInt = setInterval(function(){
        minutes = (minutes > 59 ) ? 1 : ( minutes + 1 ) ;
    }, 1000 * 60);
    hoursInt = setInterval(function(){
        hours = ( hours > 59 ) ? 1 : ( hours + 1 ) ;
    },1000 * 60 * 60);
    document.getElementById('start').style.display='none';
     document.getElementById('lap').style.display='initial';
    document.getElementById('lap').style.margin='110% 14% 162% 62%';
    document.getElementById('stop').style.display='initial';
    document.getElementById('stop').style.margin='110% 14% 162%';
    document.getElementById('reset').style.display='initial';
    document.getElementById('reset').style.margin='110% 14% 162%';   

}

var stopTimer = function() {
    clearInterval(millisecInt); clearInterval(secondsInt); clearInterval(minutesInt); clearInterval(hoursInt);
    document.getElementById('start').style.display='initial';
    document.getElementById('start').style.margin='235px 134%';
    document.getElementById('lap').style.display='none';
    document.getElementById('stop').style.display='none';
    document.getElementById('reset').style.display='initial';
    document.getElementById('reset').style.margin='235px -81%';  
}

var resetTimer = function() {
    stopTimer();
    hours = 0 ; minutes = 0 ; seconds = 0 ; milliseconds = 0 ;
    setTimeToHTML(hours, minutes, seconds, milliseconds);
    document.getElementById('start').style.display='initial';
    document.getElementById('lap').style.display='none';
    document.getElementById('stop').style.display='none';
    document.getElementById('reset').style.display='none'; 
    document.getElementById('start').style.margin='315% 334%'; 
}
var clearLaps=function(){
    document.getElementById("laps").innerHTML = "";
    document.getElementById("start").disabled = false;
}
var setTimeToHTML = function(hours, minutes, seconds, milliseconds) {
    document.getElementById("hours").innerText = (hours.toString().length == 1) ? ("0" + hours) : hours ;
    document.getElementById("minutes").innerText = (minutes.toString().length == 1) ? ("0" + minutes) : minutes ;
    document.getElementById("seconds").innerText = (seconds.toString().length == 1) ? ("0" + seconds) : seconds ;
    document.getElementById("milliseconds").innerText = milliseconds;
}

var lap = function() {
    var p = document.createElement("p") ;
    var count=0;
    var timer = document.getElementById("hours").innerText + " : " + document.getElementById("minutes").innerText + " : " + document.getElementById("seconds").innerText + " : " + document.getElementById("milliseconds").innerText ;
    var ptext = document.createTextNode(timer);
    p.appendChild(ptext);
    var laps = document.getElementById("laps");
    laps.appendChild(p);
    document.getElementById('laps').scrollTop = 9999999;
}
