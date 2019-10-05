var a = document.getElementById("screen");
function screenSpecifics(){
    document.getElementById("screen1").innerHTML =
        "Screen color depth is " + screen.colorDepth +
        "<br> Screen Pixel Depth: " + screen.pixelDepth +
        "<br> Screen Width: " + screen.width +
        "<br> Screen Height " + screen.height +
        "<br> Screen Color Depth: " + screen.colorDepth;
}