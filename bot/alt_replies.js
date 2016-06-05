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
var botname = new LineGetter();
var dont_repeat = new LineGetter();
var empty_input = new LineGetter();

hello.feed("hi there");
hello.feed("hello human");
hello.feed("nice to meet you, user");

phatic.feed("this is interesting, please tell me more");
phatic.feed("i'm all ears");
phatic.feed("carry on, please");
phatic.feed("you have your way with words");
phatic.feed("this sounds like a good story");
phatic.feed("please continue");

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