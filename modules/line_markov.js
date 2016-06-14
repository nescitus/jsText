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

// helper function that picks random element from array

var pick_one = function (a) {
    var i = Math.floor(a.length * Math.random());
    return a[i];
};

// helper function that clears the content of a given element

var clear = function (el_name) {
	var el = document.getElementById(el_name);
	el.innerHTML = "";	
}

// cleanup special characters from a string
// (used to get rid of markup that's needed for text generation)

var cleanup_txt = function(txt) {
	var res = txt.replace(/_/g, ""); 
	return res;
}

// MarkovByLine() usage requires (in that precise order)
// - feeding several lines of text (the more the merrier)
// - running init_tables()

function MarkovByLine() {
	this.separator = "<br>";
	this.lines = [];
	this.terminals = {};
    this.startwords = [];
    this.wordstats = {};
	this.ln_const = 7;
    this.ln_rand = 3;
	this.ln_cnt = 0; // counting emited lines is necessary to break poem into stanzas
	this.ln_br_after = 0;
	this.emit_debug = 0;
}

	function replace_all(txt, _old, _new) {
	   var reg = new RegExp(_old, "g");
	   return txt.replace(reg, _new);
	};

MarkovByLine.prototype = {

	preprocess: function(txt) {
	
    txt = replace_all(txt, " tell me ", " tell_me ");
	
	return txt;
	},
	
	feed: function(txt) {
	   txt = this.preprocess(txt);
       this.lines.push(txt);
	},
	
	init_tables: function(){
		
		for (var i = 0; i < this.lines.length; i++) {
        var words = this.lines[i].split(' ');
        this.terminals[words[words.length-1]] = true;
        this.startwords.push(words[0]);
	
        for (var j = 0; j < words.length - 1; j++) {
            if (this.wordstats.hasOwnProperty(words[j])) {
                this.wordstats[words[j]].push(words[j+1]);
            } else {
                this.wordstats[words[j]] = [words[j+1]];
            }
        }
      }
	},
	
	reset_internals: function() {
	  this.ln_cnt = 0;
	},
	
    make_line: function (min_length) {
      word = pick_one(this.startwords);
      var line = [word];
      while (this.wordstats.hasOwnProperty(word)) {
        var next_words = this.wordstats[word];
        word = pick_one(next_words);
        line.push(word);
        if (line.length > min_length && this.terminals.hasOwnProperty(word)) break;
      }
      if (line.length < min_length) return this.make_line(min_length);
	   
	  var out_txt = line.join(' ');
	  
	  // cleanup of special characters
	  
	  if (!this.emit_debug) {
		 out_txt = cleanup_txt(out_txt);  
	  }
	  
      return out_txt;
    },
	
	append_word(el_name) {
		var el = document.getElementById(el_name);
		var txt = el.innerHTML;
		var words = txt.split(' ');
		var prev_word = words[words.length-1];
	    var next_words = this.wordstats[prev_word];
        var new_word = pick_one(next_words);
		el.innerHTML = txt + ' ' + new_word;
		
	},
	
	change_line(txt) {
		
	// split into words, get position of the word
	
	var words = txt.split(' ');
	var position = Math.floor(words.length * Math.random());
	if (position == 0) position++;
	var prev_word = words[position-1];
	var next_words = this.wordstats[prev_word];
    var new_word = pick_one(next_words);
	words[position] = new_word;
	var out_text =words.join(' ');
	return out_text;
		
	},
	
	add: function(el_name) {
		var txt = this.make_line(this.ln_const + Math.floor(this.ln_rand * Math.random()));
		var el = document.getElementById(el_name);
		el.innerHTML = el.innerHTML + this.separator + txt;
	},
	
    prepend: function(el_name) {
		var txt = this.make_line(this.ln_const + Math.floor(this.ln_rand * Math.random()));
		var el = document.getElementById(el_name);
		el.innerHTML = txt + this.separator + el.innerHTML;
	}
}
