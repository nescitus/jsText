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

// solve missing spaces

txt = txt.rep_all(" aman ", " am an ");
txt = txt.rep_all(" amfine ", " am fine ");
txt = txt.rep_all(" amleaving ", " am leaving ");
txt = txt.rep_all(" iamasking "," I am asking ");
txt = txt.rep_all(" iamdoing "," I am doing ");
txt = txt.rep_all(" iamfrom "," I am from ");
txt = txt.rep_all(" iamin "," I am in ");
txt = txt.rep_all(" iamok "," I am ok ");
txt = txt.rep_all(" iamsorry "," I am sorry ");
txt = txt.rep_all(" iamtalking "," I am talking ");
txt = txt.rep_all(" iamtired "," I am tired ");
txt = txt.rep_all(" iamusing "," I am using ");

// solve misspellings

txt = txt.rep_all(" becasue "," because ");
txt = txt.rep_all(" becouse "," because ");
txt = txt.rep_all(" becuase "," because ");
txt = txt.rep_all(" becuse "," because ");
txt = txt.rep_all(" hellp "," help ");
txt = txt.rep_all(" waht "," what ");

// American ortography

txt = txt.rep_all(" colour "," color ");
txt = txt.rep_all(" favourite "," favorite ");

// solve apostrophes and negations

txt = txt.rep_all(" amnot ", " am not ");

txt = txt.rep_all(" aint ", " is not ");
txt = txt.rep_all(" ain't ", " is not ");
txt = txt.rep_all(" ain t ", " is not ");
txt = txt.rep_all(" ain.t ", " is not ");

txt = txt.rep_all(" i is ", " i am "); // followup to I ain't

txt = txt.rep_all(" arent "," are not ");
txt = txt.rep_all(" aren t "," are not ");
txt = txt.rep_all(" aren't "," are not ");
txt = txt.rep_all(" aren.t "," are not ");

txt = txt.rep_all(" can t "," can not ");
txt = txt.rep_all(" can.t "," can not ");
txt = txt.rep_all(" cannot "," can not ");
txt = txt.rep_all(" cant "," can not ");
txt = txt.rep_all(" can't "," can not ");

txt = txt.rep_all(" couldn t "," could not ");
txt = txt.rep_all(" couldn.t "," could not ");
txt = txt.rep_all(" couldn't "," could not ");
txt = txt.rep_all(" could've "," could have ");

txt = txt.rep_all(" didn t "," did not ");
txt = txt.rep_all(" didnt "," did not ");
txt = txt.rep_all(" didn't "," did not ");
txt = txt.rep_all(" did'nt "," did not ");

txt = txt.rep_all(" do nt "," do not ");
txt = txt.rep_all(" doesn t "," does not ");
txt = txt.rep_all(" doesn.t "," does not ");
txt = txt.rep_all(" doesnt "," does not ");
txt = txt.rep_all(" doesn't "," does not ");
txt = txt.rep_all(" don t "," do not ");
txt = txt.rep_all(" don.t "," do not ");
txt = txt.rep_all(" dont "," do not ");
txt = txt.rep_all(" don't "," do not ");
txt = txt.rep_all(" do'nt "," do not ");

txt = txt.rep_all(" hadn t "," had not ");
txt = txt.rep_all(" hadn.t "," had not ");
txt = txt.rep_all(" hadn't "," had not ");

txt = txt.rep_all(" hasn t "," has not ");
txt = txt.rep_all(" hasn't "," has not ");
txt = txt.rep_all(" havent "," have not ");
txt = txt.rep_all(" haven't "," have not ");

txt = txt.rep_all(" he d "," he would ");
txt = txt.rep_all(" he ll "," he will ");
txt = txt.rep_all(" he s "," he is ");
txt = txt.rep_all(" he.ll "," he will ");
txt = txt.rep_all(" he.s "," he is ");
txt = txt.rep_all(" hed "," he would ");
txt = txt.rep_all(" he'd "," he would ");
txt = txt.rep_all(" he'll "," he will ");
txt = txt.rep_all(" he's "," he is ");

txt = txt.rep_all(" how d "," how did ");
txt = txt.rep_all(" how s "," how is ");
txt = txt.rep_all(" how'd "," how did ");
txt = txt.rep_all(" how'd "," how would ");
txt = txt.rep_all(" hows "," how is ");
txt = txt.rep_all(" how's "," how is ");

txt = txt.rep_all(" i m "," i am ");
txt = txt.rep_all(" i ve "," i have ");
txt = txt.rep_all(" i."," i ");
txt = txt.rep_all(" i.d "," i would ");
txt = txt.rep_all(" i.ll "," i will ");
txt = txt.rep_all(" i.m "," i am ");
txt = txt.rep_all(" i.ve "," i have ");
txt = txt.rep_all(" iam "," i am ");
txt = txt.rep_all(" iama "," i am a ");
txt = txt.rep_all(" im ", " i am ");
txt = txt.rep_all(" i'm ", " i am ");
txt = txt.rep_all(" i'll ", " i will ");
txt = txt.rep_all(" i'd "," I would ");
txt = txt.rep_all(" i'll "," I will ");
txt = txt.rep_all(" i'm "," I am ");
txt = txt.rep_all(" isn t "," is not ");
txt = txt.rep_all(" isn.t "," is not ");
txt = txt.rep_all(" isnt "," is not ");
txt = txt.rep_all(" isn't "," is not ");
txt = txt.rep_all(" it s "," it is ");
txt = txt.rep_all(" it.ll "," it will ");
txt = txt.rep_all(" it.s "," it is ");
txt = txt.rep_all(" it'd "," it would ");
txt = txt.rep_all(" it'll "," it will ");
txt = txt.rep_all(" it's "," it is ");
txt = txt.rep_all(" its a "," it is a ");
txt = txt.rep_all(" ive "," I have ");
txt = txt.rep_all(" i've "," I have ");

txt = txt.rep_all(" let s "," let us ");
txt = txt.rep_all(" let.s "," let us ");
txt = txt.rep_all(" let's "," let us ");

txt = txt.rep_all(" might've "," might have ");
txt = txt.rep_all(" name's "," name is ");

txt = txt.rep_all(" o k "," ok ");
txt = txt.rep_all(" o. k. "," ok ");
txt = txt.rep_all(" o.k. "," ok ");

txt = txt.rep_all(" she d "," she would ");
txt = txt.rep_all(" she s "," she is ");
txt = txt.rep_all(" she.ll "," she will ");
txt = txt.rep_all(" she.s "," she is ");
txt = txt.rep_all(" she'd "," she would ");
txt = txt.rep_all(" she'll "," she will ");
txt = txt.rep_all(" shes "," she is ");
txt = txt.rep_all(" she's "," she is ");

txt = txt.rep_all(" shouldn.t "," should not ");
txt = txt.rep_all(" shouldnt "," should not ");
txt = txt.rep_all(" shouldn't "," should not ");

txt = txt.rep_all(" that ll "," that will ");
txt = txt.rep_all(" that s "," that is ");
txt = txt.rep_all(" that.s "," that is ");
txt = txt.rep_all(" that'd "," that did ");
txt = txt.rep_all(" that'll "," that will ");
txt = txt.rep_all(" thats "," that is ");
txt = txt.rep_all(" that's "," that is ");
txt = txt.rep_all(" there s "," there is ");
txt = txt.rep_all(" there.s "," there is ");
txt = txt.rep_all(" there'll "," there will ");
txt = txt.rep_all(" theres "," there is ");
txt = txt.rep_all(" there's "," there is ");

txt = txt.rep_all(" they re "," they are ");
txt = txt.rep_all(" they.ll "," they will ");
txt = txt.rep_all(" they.re "," they are ");
txt = txt.rep_all(" they'd "," they would ");
txt = txt.rep_all(" they'll "," they will ");
txt = txt.rep_all(" they're "," they are ");
txt = txt.rep_all(" they've "," they have ");
txt = txt.rep_all(" this'll "," this will ");

txt = txt.rep_all(" wanna "," want to ");
txt = txt.rep_all(" wasn t "," was not ");
txt = txt.rep_all(" wasnt "," was not ");
txt = txt.rep_all(" wasn't "," was not ");

txt = txt.rep_all(" we ll "," we will ");
txt = txt.rep_all(" we re "," we are ");
txt = txt.rep_all(" we ve "," we have ");
txt = txt.rep_all(" we.d "," we would ");
txt = txt.rep_all(" we.ll "," we will ");
txt = txt.rep_all(" we.re "," we are ");
txt = txt.rep_all(" we.ve "," we have ");
txt = txt.rep_all(" we'd "," we would ");
txt = txt.rep_all(" we'll "," we will ");
txt = txt.rep_all(" we're "," we are ");

txt = txt.rep_all(" weren t "," were not ");
txt = txt.rep_all(" weren.t "," were not ");
txt = txt.rep_all(" werent "," were not ");
txt = txt.rep_all(" weren't "," were not ");
txt = txt.rep_all(" we've "," we have ");
txt = txt.rep_all(" what s "," what is ");
txt = txt.rep_all(" what.s "," what is ");
txt = txt.rep_all(" what'd "," what did ");
txt = txt.rep_all(" whatis."," whatis dot ");
txt = txt.rep_all(" what'll "," what will ");
txt = txt.rep_all(" whats "," what is ");
txt = txt.rep_all(" what's "," what is ");
txt = txt.rep_all(" where s "," where is ");
txt = txt.rep_all(" where.s "," where is ");
txt = txt.rep_all(" where's "," where is ");
txt = txt.rep_all(" who s "," who is ");
txt = txt.rep_all(" who.s "," who is ");
txt = txt.rep_all(" whos "," who is ");
txt = txt.rep_all(" who's "," who is ");
txt = txt.rep_all(" why.s "," why is ");
txt = txt.rep_all(" why's "," why is ");
txt = txt.rep_all(" won t "," will not ");
txt = txt.rep_all(" won.t "," will not ");
txt = txt.rep_all(" wont "," will not ");
txt = txt.rep_all(" won't "," will not ");
txt = txt.rep_all(" wouldn t "," would not ");
txt = txt.rep_all(" wouldn.t "," would not ");
txt = txt.rep_all(" wouldnt "," would not ");
txt = txt.rep_all(" wouldn't "," would not ");
txt = txt.rep_all(" would've "," would have ");

txt = txt.rep_all(" what's ", " what is ");
txt = txt.rep_all(" that's ", " that is ");

txt = txt.rep_all(" it's ", " it is ");
txt = txt.rep_all(" she's ", " she is ");
txt = txt.rep_all(" he's ", " he is ");
txt = txt.rep_all(" wont ", " will not ");
txt = txt.rep_all(" wouldn't ", " would not ");
txt = txt.rep_all(" shouldn't ", " should not ");
txt = txt.rep_all(" couldn't ", " could not ");

// solve chat abbreviations

txt = txt.rep_all(" do u ", " do you ");
txt = txt.rep_all(" to u ", " to you ");
txt = txt.rep_all(" r u ", " are you ");
txt = txt.rep_all(" are u ", " are you ");
txt = txt.rep_all(" can u ", " can you ");
txt = txt.rep_all(" ur ", " your ");
txt = txt.rep_all(" not u ", " not you ");

txt = txt.rep_all(" you ll "," you will ");
txt = txt.rep_all(" you r "," you are ");
txt = txt.rep_all(" you re "," you are ");
txt = txt.rep_all(" you ve "," you have ");
txt = txt.rep_all(" you.d "," you had ");
txt = txt.rep_all(" you.ll "," you will ");
txt = txt.rep_all(" you.re "," you are ");
txt = txt.rep_all(" you.ve "," you have ");
txt = txt.rep_all(" you'd "," you had ");
txt = txt.rep_all(" you'd "," you would ");
txt = txt.rep_all(" you'll "," you will ");
txt = txt.rep_all(" youre "," you are ");
txt = txt.rep_all(" you're "," you are ");
txt = txt.rep_all(" you've "," you have ");
txt = txt.rep_all(" yuo "," you ");

// solve colloquial forms

txt = txt.rep_all(" wanna ", " want to ");
txt = txt.rep_all(" gonna ", " going to ");

// solve long-winded constructions

txt = txt.rep_all(" may i have ", " i want ");
txt = txt.rep_all(" can i have ", " i want ");
txt = txt.rep_all(" please tell me ", " tell me ");
txt = txt.rep_all(" tell me please ", " tell me ");
txt = txt.rep_all(" tell me how ", " how ");
txt = txt.rep_all(" tell me what ", " what ");

// standartise greeting

txt = txt.rep_all(" hello ", " hi ");
txt = txt.rep_all(" hullo ", " hi ");
txt = txt.rep_all(" aloha ", " hi ");

// phrases to tags

txt = txt.rep_all(" what is your name ", "BOT_NAME");
txt = txt.rep_all(" tell me your name ", "BOT_NAME");
txt = txt.rep_all(" how do they call you ", "BOT_NAME");

txt = txt.rep_all(" hi nobot ", "HI_USER");
txt = txt.rep_all(" hi bot ", "HI_USER");
txt = txt.rep_all(" hi there ", "HI_USER");
txt = txt.rep_all(" hi ", "HI_USER");

txt = txt.rep_all(" how are you ", "HOW_ARE_YOU");
txt = txt.rep_all(" how are you feeling ", "HOW_ARE_YOU");
txt = txt.rep_all(" how are you doing ", "HOW_ARE_YOU");
txt = txt.rep_all(" how do you feel ", "HOW_ARE_YOU");

txt = txt.rep_all(" are you smart ", "RU_SMART");
txt = txt.rep_all(" are you clever ", "RU_SMART");
txt = txt.rep_all(" are you intelligent ", "RU_SMART");

// foul language detection

if(txt.contains("fuck")) txt = "USER_SWEARS";
if(txt.contains("cunt")) txt = "USER_SWEARS";

return postprocess_input(txt);
}