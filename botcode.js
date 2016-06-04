var phatic = new LineGetter();
var botname = new LineGetter();
var dont_repeat = new LineGetter();
var empty_input = new LineGetter();

var repetition = [];

phatic.feed("this is interesting, please tell me more");
phatic.feed("i'm all ears");
phatic.feed("carry on, please");
phatic.feed("you have your way with words");
phatic.feed("this sounds like a good story");
phatic.feed("please continue");

botname.feed("my name is Nobot");
botname.feed("they call me Nobot");
botname.feed("i go by the name of Nobot");

dont_repeat.feed("do you have to repeat yourself?");
dont_repeat.feed("this is going nowhere");
dont_repeat.feed("it seems boring to repeat the same thing all over again");
dont_repeat.feed("are you a bot? bots tend to repeat themselves");

empty_input.feed("i must admit that i'm confused");
empty_input.feed("please say something meaningful");
empty_input.feed("we're supposed to talk, aren't we?");
empty_input.feed("is there a connection problem?");

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
// this is not too imaginative, but works well.

if (txt == "BOT_NAME")    reply = botname.pick_new();
if (reply == "NO_ANSWER") reply = phatic.pick_new();
if (reply == "PROTEST_REPETITION") reply = dont_repeat.pick_new();
if (reply == "EMPTY_INPUT") reply = empty_input.pick_new();

el.innerHTML = el.innerHTML + "<br><b>" + reply + "</b>";
}