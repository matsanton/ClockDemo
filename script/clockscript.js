
function printTime() {

    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    

    var clockDiv = document.getElementById("topRightClock");
    // if hours <= 9 add a "0" to the digit else keep as is
    clockDiv.innerHTML = (hours <=9 ? "0" + hours : hours)  + ":" +
                         (mins  <=9 ? "0" + mins  : mins )  + ":" +
                         (secs  <=9 ? "0" + secs  : secs );
}

setInterval(printTime, 1000);