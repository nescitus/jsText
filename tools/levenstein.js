/**************************************************************************
*   This file is a part of jsText project - a set of tools designed       *
*   for natural language processing, creating chat bots and writing       *
*   generative poetry.                                                    *
*                                                                         * 
*   functions levenstein() and _distance() have been                      *
*   lifted from https://github.com/Glench/fuzzyset.js                     *
*   javascript port of python code by Mike Axiak <mike@axiak.net>         *
*   performed by Glen Chiacchieri (http://glench.com)                     *
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

    var levenshtein = function(str1, str2) {
        var current = [], prev, value;

        for (var i = 0; i <= str2.length; i++)
            for (var j = 0; j <= str1.length; j++) {
            if (i && j)
                if (str1.charAt(j - 1) === str2.charAt(i - 1))
                value = prev;
                else
                value = Math.min(current[j], current[j - 1], prev) + 1;
            else
                value = i + j;

            prev = current[j];
            current[j] = value;
            }

        return current.pop();
    };

    // return an edit distance from 0 to 1
    var _distance = function(str1, str2) {
        if (str1 === null && str2 === null) throw 'Trying to compare two null values';
        if (str1 === null || str2 === null) return 0;
        str1 = String(str1); str2 = String(str2);

        var distance = levenshtein(str1, str2);
        if (str1.length > str2.length) {
            return 1 - distance / str1.length;
        } else {
            return 1 - distance / str2.length;
        }
    };
	
function randomString(string_length) {
	var chars = " 0123456789 ABCDEFG HIJKLMN OPQRST UVWXTZ abcdefg hiklmn opqrst uvwxyz ";
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	return randomstring;
}

function modifyString(aim, old) {

	var chars = " aąbcćdeęfghijklłmnńoópqrsśtuwxyzżź,.: ";
	var randomstring = '';
	var length = old.length;
	var loc = Math.floor(Math.random() * length);
	var rnum = Math.floor(Math.random() * chars.length);
	var new_char = chars.substring(rnum,rnum+1);
	
	if (aim.charAt(loc) != old.charAt(loc))
	randomstring = old.replaceAt(loc, new_char);

	return randomstring;
	
}