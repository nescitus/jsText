// to work we need:
//<script src="tools/mystring.js"></script>
//<script src="modules/line_getter.js"></script>
//<script src="bot/transform_input.js"></script>
//<script src="bot/alt_replies.js"></script>

var repetition = [];
var all_topics = [];
var chat_history = [];

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
chat_history.push(old_txt);

// tags

var tag = "TAG_UNKNOWN";
if (txt.contains("?")) {
   tag = "QUESTION_UNKNOWN";
   txt = txt.replace("?","");
}

txt = simplify_user_sentence(txt);
debug.innerHTML = txt + ' ' + tag;

// set the array of words
// that will be needed for more precise parsing

var words = txt.split(" ");
var topic = [];

// feeble attempt at detecting topic

if (tag == "TAG_UNKNOWN") {
   for (var i = 0; i < words.length; i++) {
	  if (nounOnList(words[i])) {
		  topic.push(words[i]);
		  all_topics.push(words[i]);
		  debug.innerHTML = debug.innerHTML + ' TOPIC: ' + topic[topic.length -1];
	  }
   }
}

var reply = "NO_ANSWER";

// do we have a reply in memory?

reply = find_reply(txt);

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
   if (txt == "HOW_ARE_YOU") reply = i_feel.pick_new();
   if (txt == "RU_SMART")    reply = smart.pick_new();
   if (txt == "USER_SWEARS") reply = user_swears.pick_new();
}

// special case code for undesired user behaviour

if (reply == "PROTEST_REPETITION") reply = dont_repeat.pick_new();
if (reply == "EMPTY_INPUT") reply = empty_input.pick_new();

if (reply == "NO_ANSWER") {
   var markov = new MarkovByLine();
   
   markov.feed("this must start with a sentence containing plenty of repetitions, this will not work otherwise, this does not work at all, this is an error, this is a wrong algorithm");
   
   for (var i = 0; i < chat_history.length; i++) {
      markov.feed(chat_history[i]);
   }  

   markov.init_tables();   
   
   // we give our bot two chances to generate
   // a sentence on the current topic and one
   // chance to refer to the topics from the past 
   // conversation
   
   var markov_reply = markov.make_line(10);
   alert(markov_reply);
   
   for (var i = 0; i < topic.length; i++) {
	   if (markov_reply.contains(topic[i])) 
		   reply = markov_reply;
   }
   
   if (reply == "NO_ANSWER") {
   markov_reply = markov.make_line(10);
   alert(markov_reply);
   
   for (var i = 0; i < topic.length; i++) {
	   if (markov_reply.contains(topic[i])) 
		   reply = markov_reply;
   }
   
   for (var i = 0; i < all_topics.length; i++) {
	   if (markov_reply.contains(all_topics[i])) 
		   reply = markov_reply;
   }
   }
}

// TODO: (long term plan) generate several replies using 
// different algorithms, stack them in an array, grade them,
// pick the most approppriate

// bailout: we have absolutely nothing to say

if (reply == "NO_ANSWER") { 
   if (tag == "QUESTION_UNKNOWN")
	  reply = hard_question.pick_new();
   else reply = phatic.pick_new();
}

el.innerHTML = el.innerHTML + "<br><b>" + reply + "</b>";
}