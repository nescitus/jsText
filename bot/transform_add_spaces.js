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

var add_spaces = function(txt) {
	
   txt = txt.rep_all(" aman ", " am an ");
   txt = txt.rep_all(" amfine ", " am fine ");
   txt = txt.rep_all(" amleaving ", " am leaving ");
   txt = txt.rep_all(" iamasking "," i am asking ");
   txt = txt.rep_all(" iamdoing "," i am doing ");
   txt = txt.rep_all(" iamfrom "," i am from ");
   txt = txt.rep_all(" iamin "," i am in ");
   txt = txt.rep_all(" iamok "," i am ok ");
   txt = txt.rep_all(" iamsorry "," i am sorry ");
   txt = txt.rep_all(" iamtalking "," i am talking ");
   txt = txt.rep_all(" iamtired "," i am tired ");
   txt = txt.rep_all(" iamusing "," i am using ");

   return txt;	
}