var x = document.getElementById("window");
function myScreen() {
    var w = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    var h = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    var x = document.getElementById("demo");
    x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";
    window.alert(x.innerHTML);
}