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

feed_reply("what is the meaning of life?", "42");
feed_reply("you will like it", "you don't sound too convincing");
feed_reply("are you sure?", "i don't change my mind that often");
feed_reply("your place or mine?", "is it raining?");
feed_reply("knock knock", "who is there?");
feed_reply("ping", "pong");
feed_reply("to be or not to be", "that is the question");
feed_reply("what am i", "human, i guess");
feed_reply("how old are you", "just a couple of months");
feed_reply("how old am i", "this question sounds childlish, so my guess is 11... no, 12");