function browserSpecifics(){
    var txt = "";
    // txt += "<br>Browser CodeName: " + navigator.appCodeName + "</br>";
    txt += "Browser Name: " + navigator.appName;
    txt += "<br>Browser Version: " + navigator.product;
    // txt += "<br>Browser Version: " + navigator.appVersion + "</br>";
    // txt += "<br>Cookies Enabled: " + navigator.cookieEnabled + "</br>";
    txt += "<br>Browser Language: " + navigator.language;
    // txt += "<br>Browser Online: " + navigator.onLine + "</br>";
    txt += "<br>Platform: " + navigator.platform;
    // txt += "<br>User-agent header: " + navigator.userAgent + "</br>";
    txt += "<br>Language: " + navigator.language;
    var a = document.getElementById("browse").innerHTML = txt;
    x.innerHTML
}