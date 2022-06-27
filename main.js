function tab(name, uri){
let iframe = "<h1>"+name+"</h1><iframe src='";
if (uri.startsWith("rail://")) {
switch (uri) {
default: iframe += "data:text/html,%3Ch1%3E404%3C%2Fh1%3E%3Cp%3Enot%20a%20site%20or%20has%20been%20removed%3C%2Fp%3E"; break;
}
}
else {
iframe += uri;
}
iframe += "' id='"+name+"' height='"+screen.height+"' width='"+screen.width+"'></iframe>";
const h1 = document.getElementById("start");
h1.insertAdjacentHTML("afterend", iframe);

}
