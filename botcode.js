var phatic = new LineGetter();

phatic.feed("this is interesting, please tell me more");
phatic.feed("i'm all ears");
phatic.feed("carry on, please");
phatic.feed("you have your way with words");
phatic.feed("this sounds like a good story");
phatic.feed("please continue");

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
   reply = phatic.pick_new();
}

el.innerHTML = el.innerHTML + "<br><b>" + reply + "</b>";
}