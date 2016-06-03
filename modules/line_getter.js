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

function LineGetter(name) {
  this.lines = [];
  this.old ='';
  this.separator = '';
}

// Prototype

LineGetter.prototype = {
	
  feed: function(txt) {
    this.lines.push(txt);
  },
  
  pick: function() {
    var i = Math.floor(this.lines.length * Math.random());
	return this.lines[i];
  },
  
  pick_new: function() {
	  
    // get random line
		
    var txt = this.pick();
		
    // discourage immediate repetition
    // (primitive hack, not foolproof but close enough)
		
    if (this.old == txt)
      txt = this.pick();
    if (this.old == txt)
      txt = this.pick();
		
    // save the old line
		
    this.old = txt;
	
	return txt;
	  
  },

  add_instead: function(el_name) {
		
    var txt = this.pick_new();
		
    // overwrite element's inner html with the new text
		
    var el = document.getElementById(el_name);
    el.innerHTML = txt;
	
  },
  
  add_after: function(el_name) {
		
    // get random text
		
    var txt = pick_new();
	
	// append it to element's html
	
	var el = document.getElementById(el_name);
    el.innerHTML = el.innerHTML + txt + this.separator;	      
  },
  
  add_before: function(el_name) {
    var txt = pick_new();
    var el = document.getElementById(el_name);
    el.innerHTML = txt + this.separator + el.innerHTML;		
  }  
};