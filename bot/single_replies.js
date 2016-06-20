/***************************************************************************
*   Copyright (C) 2016, Pawel Koziol                                      *
*                                                                         *
*   This program is free software; you can redistribute it and/or modify  *
*   it under the terms of the GNU General Public License as published by  *
*   the Free Software Foundation; either version 2 of the License, or     *
*   (at your option) any later version.                                   *
*                                                                         *
*   This program is distributed in the hope that it will be useful,       *
*   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
*   GNU General Public License for more details.                          *
*                                                                         *
*   You should have received a copy of the GNU General Public License     *
*   along with this program; if not, write to the                         *
*   Free Software Foundation, Inc.,                                       *
*   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
***************************************************************************/

var resp_to = [];
var resp_by = [];

function feed_reply(to, by) {
  resp_to.push(to);
  resp_by.push(by);
}

function find_reply(to) {
  var length = resp_to.length;
  for (var i = 0; i < length; i++) {

     // fuzzy match using Levenstein distance
	 
	 var dist = _distance(to, resp_to[i]);

     if (dist > 0.90) {
		 return resp_by[i];
	 }
  }

  return "NO_ANSWER";
}

feed_reply("are you a murderer", "no");
feed_reply("a e i o u", "do you like vowels?");
feed_reply("aeiou", "do you like vowels?");
feed_reply("argh", "what made you so angry?");
feed_reply("am i stupid", "a truly stupid person wouldn't even ask this question");
feed_reply("am i perfect", "it would be sad not being able to improve");
feed_reply("am i evil", "it's up to you to pick sides, young padawan");
feed_reply("are you real", "not really. and you don't see what i'm texting, do you?");
feed_reply("zero", "none?");
feed_reply("shut up", "why? am i not supposed to chat?");
feed_reply("life sucks", "like a vacuum cleaner");
feed_reply("e", "f");
feed_reply("i do not care", "but why?");
feed_reply("what is the meaning of life?", "the meaning of life is dead");
feed_reply("you will like it", "you don't sound too convincing");
feed_reply("are you sure?", "i don't change my mind that often");
feed_reply("your place or mine?", "is it raining?");
feed_reply("knock knock", "who is there?");
feed_reply("ping", "pong");
feed_reply("to be or not to be", "that is the question");
feed_reply("what am i", "human, i guess");
feed_reply("i see", "said the blind man stepping over the cliff. i'd prefer longer answers on your part");
feed_reply("how old are you", "just a couple of months");
feed_reply("how old am i", "this question sounds childlish, so my guess is 11... no, 12");