var a = document.getElementById("location");
function hostName() {
    var x = location.hostname;
    var y = location.pathname;
    var z = location.protocol;
    document.getElementById("location").innerHTML = x;
    document.getElementById("location").innerHTML = y;
    document.getElementById("location").innerHTML = z;
    a.innerHTML = "Hostname " + x + "<br>Pathname " + y + "<br>Protocol " + z;
}