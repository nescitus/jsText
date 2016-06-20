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

txt = reduce_useless(txt);
txt = add_spaces(txt); // solve missing spaces
txt = solve_misspellings(txt);
txt = unwind_verbs(txt);

// American ortography

txt = txt.rep_all(" colour "," color ");
txt = txt.rep_all(" favourite "," favorite ");
txt = txt.rep_all(" fav "," favorite ");

// solve chat abbreviations

txt = txt.rep_all(" do u ", " do you ");
txt = txt.rep_all(" to u ", " to you ");
txt = txt.rep_all(" r u ", " are you ");
txt = txt.rep_all(" are u ", " are you ");
txt = txt.rep_all(" can u ", " can you ");
txt = txt.rep_all(" ur ", " your ");
txt = txt.rep_all(" not u ", " not you ");
txt = txt.rep_all(" pls ", " please ");

txt = txt.rep_all(" yeah "," yes ");
txt = txt.rep_all(" yea "," yes ");
txt = txt.rep_all(" nope "," no ");
txt = txt.rep_all(" I think not "," no ");

txt = txt.rep_all(" o k "," ok ");
txt = txt.rep_all(" o. k. "," ok ");
txt = txt.rep_all(" o.k. "," ok ");

// delete useless adverbs

txt = txt.rep_all(" i absolutely "," i ");
txt = txt.rep_all(" i accidentally "," i ");
txt = txt.rep_all(" i actually "," i ");
txt = txt.rep_all(" i already "," i ");
txt = txt.rep_all(" i almost "," i ");

// solve colloquial forms

txt = txt.rep_all(" gonna ", " going to ");

// use easier dictionary
// (note lack of spaces to deal with 3rd person)
// (we're dealing with rare words, so wrong
// match is unlikely)

txt = txt.rep_all("recollect", "remember");
txt = txt.rep_all("recollect", "remember");
txt = txt.rep_all("recall", "remember");
txt = txt.rep_all("adore"," love");
txt = txt.rep_all(" may i "," can i ");

// solve long-winded constructions

txt = txt.rep_all(" may i have ", " i want ");
txt = txt.rep_all(" can i have ", " i want ");
txt = txt.rep_all(" please tell me ", " tell me ");
txt = txt.rep_all(" tell me please ", " tell me ");
txt = txt.rep_all(" tell me how ", " how ");
txt = txt.rep_all(" tell me what ", " what ");
txt = txt.rep_all(" i thought i was ", " i am ");
txt = txt.rep_all(" absolutely necessary ", " necessary ");
txt = txt.rep_all(" absolutely essential ", " essential ");
txt = txt.rep_all(" advance forward ", " advance ");
txt = txt.rep_all(" alternative choice ", " choice ");
txt = txt.rep_all(" as being ", " as ");
txt = txt.replace(" have to be ", " must be ");
txt = txt.replace(" has to be ", " must be ");

// standartise greeting

txt = txt.rep_all(" hello ", " hi ");
txt = txt.rep_all(" hullo ", " hi ");
txt = txt.rep_all(" aloha ", " hi ");
txt = txt.rep_all(" hiya ", " hi ");

// phrases to tags

txt = txt.rep_all(" what is your name ", "BOT_NAME");
txt = txt.rep_all(" tell me your name ", "BOT_NAME");
txt = txt.rep_all(" how do they call you ", "BOT_NAME");

txt = txt.rep_all(" hi nobot ", "HI_USER");
txt = txt.rep_all(" hi bot ", "HI_USER");
txt = txt.rep_all(" hi there ", "HI_USER");
txt = txt.rep_all(" hi ", "HI_USER");

txt = txt.rep_all(" how are you feeling ", "HOW_ARE_YOU");
txt = txt.rep_all(" how are you doing ", "HOW_ARE_YOU");
txt = txt.rep_all(" how are you ", "HOW_ARE_YOU");
txt = txt.rep_all(" how do you feel ", "HOW_ARE_YOU");
txt = txt.rep_all(" how is it going ", "HOW_ARE_YOU");
txt = txt.rep_all(" how have you been ", "HOW_ARE_YOU");

txt = txt.rep_all(" are you smart ", "RU_SMART");
txt = txt.rep_all(" are you clever ", "RU_SMART");
txt = txt.rep_all(" are you intelligent ", "RU_SMART");
txt = txt.rep_all(" what is up", "WHATS_UP")

// foul language detection

if(txt.contains("fuck")) txt = "USER_SWEARS";
if(txt.contains("cunt")) txt = "USER_SWEARS";

return postprocess_input(txt);
}