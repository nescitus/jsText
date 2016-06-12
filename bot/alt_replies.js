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

var hello = new LineGetter();
var phatic = new LineGetter();
var hard_question = new LineGetter();
var botname = new LineGetter();
var dont_repeat = new LineGetter();
var empty_input = new LineGetter();
var user_swears = new LineGetter();
var i_feel = new LineGetter();
var smart = new LineGetter();

hello.feed("hi there");
hello.feed("hello human");
hello.feed("nice to meet you, user");

phatic.feed("this is interesting, please tell me more");
phatic.feed("i'm all ears");
phatic.feed("carry on, please");
phatic.feed("you have your way with words, please go on");
phatic.feed("this sounds like a good story");
phatic.feed("please continue, i am listening");

hard_question.feed("i'm afraid i am unable to answer that");
hard_question.feed("can you simplify it, please?");
hard_question.feed("i'm just a stupid bot who doesn't know the answer");
hard_question.feed("try asking an easier question, i'm out of my depth");
hard_question.feed("sorry, i wasn't programmed to answer that");

botname.feed("my name is Nobot");
botname.feed("they call me Nobot");
botname.feed("i go by the name of Nobot");

dont_repeat.feed("do you have to repeat yourself?");
dont_repeat.feed("this is going nowhere");
dont_repeat.feed("it seems boring to repeat the same thing all over again");
dont_repeat.feed("are you a bot? bots tend to repeat themselves");

empty_input.feed("i must admit that i'm confused");
empty_input.feed("please say something meaningful");
empty_input.feed("we're supposed to talk, aren't we?");
empty_input.feed("is there a connection problem?");

user_swears.feed("can you put it into different words, please?");
user_swears.feed("feeling better now?");
user_swears.feed("we aren't going to talk like that");
user_swears.feed("strong language betrays weak self-control");
user_swears.feed("your reply seems quite emotional");

i_feel.feed("fine, thanks");
i_feel.feed("i'm feeling very well today. and you?");
i_feel.feed("i feel great");
i_feel.feed("i feel really good");
i_feel.feed("i'm doing great. what about you?");

smart.feed("i am only as smart as my programmer made me");
smart.feed("and what's your opinion?");
smart.feed("that's not a part of my job description");