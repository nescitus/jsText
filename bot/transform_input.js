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

// solve apostrophes

txt = txt.rep_all(" what's ", " what is ");
txt = txt.rep_all(" that's ", " that is ");
txt = txt.rep_all(" it's ", " it is ");
txt = txt.rep_all(" she's ", " she is ");
txt = txt.rep_all(" he's ", " he is ");
txt = txt.rep_all(" im ", " i am ");
txt = txt.rep_all(" i'm ", " i am ");
txt = txt.rep_all(" i'll ", " i will ");
txt = txt.rep_all(" wont ", " will not ");
txt = txt.rep_all(" wouldn't ", " would not ");
txt = txt.rep_all(" shouldn't ", " should not ");
txt = txt.rep_all(" couldn't ", " could not ");
txt = txt.rep_all(" doesn't ", " does not ");
txt = txt.rep_all(" don't ", " do not ");
txt = txt.rep_all(" didn't ", " did not ");

// solve chat abbreviations

txt = txt.rep_all(" do u ", " do you ");
txt = txt.rep_all(" to u ", " to you ");
txt = txt.rep_all(" r u ", " are you ");
txt = txt.rep_all(" are u ", " are you ");
txt = txt.rep_all(" can u ", " can you ");
txt = txt.rep_all(" ur ", " your ");
txt = txt.rep_all(" not u ", " not you ");

txt = txt.rep_all(" wanna ", " want to ");
txt = txt.rep_all(" gonna ", " going to ");

txt = txt.rep_all(" may i have ", " i want ");
txt = txt.rep_all(" can i have ", " i want ");

txt = txt.rep_all(" what is your name ", "BOT_NAME");
txt = txt.rep_all(" what is your name? ", "BOT_NAME");
txt = txt.rep_all(" tell me your name ", "BOT_NAME");

return postprocess_input(txt);
}