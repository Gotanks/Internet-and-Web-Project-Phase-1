var x = document.getElementById("window");
function myWindow() {
    var txt = "";
    txt += "Inner Width: " + window.innerWidth;
    txt += "<br>Inner Height: " + window.innerHeight;
    document.getElementById("window").innerHTML = txt;
    // var w = window.innerWidth ||
    //     document.documentElement.clientWidth ||
    //     document.body.clientWidth;
    // var h = window.innerHeight ||
    //     document.documentElement.clientHeight ||
    //     document.body.clientHeight;
    // var x = document.getElementById("demo");
    // x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";
}