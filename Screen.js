var a = document.getElementById("screen");
function screenSpecifics(){
    document.getElementById("screen1").innerHTML =
        "Screen color depth is " + screen.colorDepth;
    document.getElementById("screen2").innerHTML =
        "Screen Pixel Depth: " + screen.pixelDepth;
    document.getElementById("screen3").innerHTML =
        "Screen Width: " + screen.width;
    document.getElementById("screen4").innerHTML =
        "Screen Height: " + screen.height;
    document.getElementById("screen5").innerHTML =
        "Screen Color Depth: " + screen.colorDepth;
}