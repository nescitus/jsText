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

var unwind_verbs = function(txt) {
	
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

txt = txt.rep_all(" shall "," will ");
txt = txt.rep_all(" shan't "," will not");
txt = txt.rep_all(" shan t "," will not ");
txt = txt.rep_all(" shan.t "," will not");

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

txt = txt.rep_all(" that's ", " that is ");

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

   return txt;	
}