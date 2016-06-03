/**************************************************************************
*   This file is a part of jsText project - a set of tools designed       *
*   for natural language processing, creating chat bots and writing       *
*   generative poetry.                                                    *
*                                                                         * 
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

// does a string contain a substring?

String.prototype.contains = function(query) {
    if (this.indexOf(query) != -1) return 1;
	return 0;
}

// replace all occurences of a substring

String.prototype.rep_all = function(_old, _new) {
	var reg = new RegExp(_old, "g");
    return this.replace(reg, _new);   
}

// start a string with a capital letter

String.prototype.capitalize_first = function()
{
    return this && this[0].toUpperCase() + this.slice(1);
}