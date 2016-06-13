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

// There are parts of the sentence that mean nothing
// (or their meaning is too subtle for a bot).
// if we reduce them, we can answer to many more phrases.

var reduce_useless = function(txt) {
   txt = "BEGIN_" + txt + "_END";
   
   txt = txt.replace("BEGIN_ but what", "BEGIN_ what");
   txt = txt.replace("BEGIN_ and what", "BEGIN_ what");
   txt = txt.replace("BEGIN_ but who", "BEGIN_ who");
   txt = txt.replace("BEGIN_ and who", "BEGIN_ who");
   txt = txt.replace("BEGIN_ but how", "BEGIN_ how");
   txt = txt.replace("BEGIN_ and how", "BEGIN_ how");
   
   txt = txt.replace("BEGIN_ all things being equal", "BEGIN_ ");
   txt = txt.replace("BEGIN_ as a matter of fact", "BEGIN_ ");
   txt = txt.replace("BEGIN_ all in all", "BEGIN_ ");
   txt = txt.replace("BEGIN_ in a sense", "BEGIN_ ");
   txt = txt.replace("BEGIN_ in my opinion", "BEGIN_ ");
   txt = txt.replace("BEGIN_ in my humble opinion", "BEGIN_ ");
   txt = txt.replace("BEGIN_ as you know", "BEGIN_ ");
   txt = txt.replace("BEGIN_ as we know", "BEGIN_ ");
   txt = txt.replace("BEGIN_ as we all know", "BEGIN_ ");
   txt = txt.replace("BEGIN_ as far as i am concerned", "BEGIN_ ");
   txt = txt.replace("BEGIN_ at the end of the day", "BEGIN_ ");
   txt = txt.replace("BEGIN_ for all intents and purposes", "BEGIN_ ");
   txt = txt.replace("BEGIN_ for the most part", "BEGIN_ ");
   
   txt = txt.replace(" i must add _END", " _END");
   
   txt = txt.replace("BEGIN_", "");
   txt = txt.replace("_END", "");
   
   return txt;
}