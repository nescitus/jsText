function Reply() {

// Find HTML elements that we need

var el = document.getElementById("target");
var debug = document.getElementById("debug");
debug.innerHTML = ''; // clear debug window

// Record user input before it gets transformed

var txt = document.getElementById('chat').value;
var old_txt = txt;

el.innerHTML = el.innerHTML + "<br>" + old_txt;

var reply = "NO_ANSWER";

if (reply == "NO_ANSWER") {
   reply = "Carry on, please";
}

el.innerHTML = el.innerHTML + "<br><b>" + reply + "</b>";
}