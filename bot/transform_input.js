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

// remove string control characters (like line-breaks '\r\n', leading / trailing spaces etc.)

var clean_string_formatting = function(txt){
    var clean = txt.replace(/\r\n/gi, '');
    clean = clean.replace(/^\s*/, '');
    clean = clean.replace(/\s*$/,'');

    return clean;
}

var preprocess_input = function(txt) {
	
	// TODO: "START " and " END" tags instead of spaces
	
    var new_txt = txt.toLowerCase();            // normalize text size to lowercase
    new_txt = clean_string_formatting(new_txt); // get rid of double spaces etc. 
    return ' ' + new_txt + ' ';	
	
    return new_txt;
}

var postprocess_input = function(txt) {
	
    return clean_string_formatting(txt);
}

var simplify_user_sentence = function(txt) {

txt = preprocess_input(txt);

txt = txt.rep_all(" is ur ", " is your ");
txt = txt.rep_all(" what's ", " what is ");

txt = txt.rep_all(" what is your name ", "BOT_NAME");
txt = txt.rep_all(" what is your name? ", "BOT_NAME");

return postprocess_input(txt);
}