/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var objectKeys = require( '@stdlib/utils/keys' );
var isUppercase = require( '@stdlib/assert/is-uppercase' );
var lowercase = require( '@stdlib/string/lowercase' );
var tokenize = require( './../../tokenize' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var format = require( '@stdlib/string/format' );
var ACRONYMS = require( './acronyms.json' );


// VARIABLES //

var KEYS = objectKeys( ACRONYMS );


// MAIN //

/**
* Expands acronyms in a string.
*
* @param {string} str - string to convert
* @throws {TypeError} must provide a string
* @returns {string} string with expanded acronyms
*
* @example
* var str = 'LOL, this is fun. I am ROFL.';
* var out = expandAcronyms( str );
* // returns 'laughing out loud, this is fun. I am rolling on the floor laughing.'
*
* @example
* var str = 'brb, I need to check my mail. thx!';
* var out = expandAcronyms( str );
* // returns 'be right back, I need to check my mail. thanks!'
*/
function expandAcronyms( str ) {
	var tokens;
	var token;
	var out;
	var key;
	var i;
	var j;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', str ) );
	}
	out = '';
	tokens = tokenize( str, true );
	for ( i = 0; i < tokens.length; i++ ) {
		token = tokens[ i ];
		if ( isUppercase( token ) ) {
			for ( j = 0; j < KEYS.length; j++ ) {
				key = KEYS[ j ];
				if ( lowercase( token ) === key ) {
					token = ACRONYMS[ key ];
					break;
				}
			}
		} else {
			for ( j = 0; j < KEYS.length; j++ ) {
				key = KEYS[ j ];
				if ( token === key ) {
					token = ACRONYMS[ key ];
					break;
				}
			}
		}
		out += token;
	}
	return out;
}


// EXPORTS //

module.exports = expandAcronyms;
