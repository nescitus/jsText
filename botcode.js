// to work we need:
//<script src="tools/mystring.js"></script>
//<script src="modules/line_getter.js"></script>
//<script src="bot/transform_input.js"></script>
//<script src="bot/alt_replies.js"></script>

var repetition = [];

function Reply() {

// Find HTML elements that we need

var el = document.getElementById("target");
var debug = document.getElementById("debug");

// Clear debug window

debug.innerHTML = ''; 

// Record user input before it gets transformed

var txt = document.getElementById('chat').value;
var old_txt = txt;

el.innerHTML = el.innerHTML + "<br>" + old_txt;

txt = simplify_user_sentence(txt);
debug.innerHTML = txt;

var reply = "NO_ANSWER";

// detect null input

if (txt=='') reply = "EMPTY_INPUT";

// detect repetitions (of transformed text)

if (reply == "NO_ANSWER") {
   repetition.push(txt);
   var length = repetition.length;

   if (length > 2) {
      if (repetition[length-2] == repetition[length-1])
         reply = "PROTEST_REPETITION";
   }
}

// pick a reply from one of the response lists.
// this is still not too imaginative, but works well.

if (reply == "NO_ANSWER") {
   if (txt == "BOT_NAME")    reply = botname.pick_new();
   if (txt == "HI_USER")     reply = hello.pick_new();
   if (txt == "USER_SWEARS") reply = user_swears.pick_new();
}

// special case code for undesired user behaviour

if (reply == "PROTEST_REPETITION") reply = dont_repeat.pick_new();
if (reply == "EMPTY_INPUT") reply = empty_input.pick_new();

// TODO: (long term plan) generate several replies using 
// different algorithms, stack them in an array, grade them,
// pick the most approppriate

if (reply == "NO_ANSWER") reply = phatic.pick_new();

el.innerHTML = el.innerHTML + "<br><b>" + reply + "</b>";
}