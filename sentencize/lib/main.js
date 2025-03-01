/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var tokenize = require( './../../tokenize' );
var trim = require( '@stdlib/string/base/trim' );


// VARIABLES //

var RE_LOWERCASE = /^[a-z]+$/;
var RE_CAPITALIZED = /^[A-Z][a-z]{0,4}$/;
var RE_CAPITALIZED_PERIOD = /^([A-Z]\.)*[A-Z]$/;
var RE_NUMBER = /^[0-9]$/;
var RE_PREFIXES = /^[{[(<:;"'”`]/;
var RE_SUFFIXES = /[})\]>:;"'”`]$/;
var RE_QUOTES = /^["'`]$/;


// FUNCTIONS //

/**
* Checks whether the token at a specified index is an end-of-sentence token.
*
* ## Notes
*
* -   The function uses a set of heuristics to determine whether a token is an end-of-sentence token.
* -   Periods (`.`), exclamation points (`!`), and question marks (`?`). are treated as possible end-of-sentence tokens.
* -   The function expects that the input array of tokens has been tokenized using the `@stdlib/nlp/tokenize` function, which tokenizes a string into an array of tokens and handles titles (`Dr.`, etc.), abbreviations such as `e.g.`, and the like, keeping them as single tokens. For example, the string `Dr. Smith is a professor at MIT.` is tokenized as `['Dr.', 'Smith', 'is', 'a', 'professor', 'at', 'MIT', '.']`. This function henceforth only considers standalone characters as possible end-of-sentence tokens, and does not consider them as end-of-sentence tokens if they are part of a larger token.
*
* @private
* @param {StringArray} tokens - array of tokens
* @param {NonNegativeInteger} i - index
* @returns {boolean} boolean indicating whether the token at a specified index is an end-of-sentence token
*/
function isEndOfSentence( tokens, i ) {
	var nextToken;
	var token;
	var im1 = i - 1;
	var ip1 = i + 1;

	token = tokens[ i ];

	// Handle quoted text with punctuation...
	if (
		RE_QUOTES.test( token ) &&
		i > 0 &&
		( tokens[ im1 ] === '.' || tokens[ im1 ] === '!' || tokens[ im1 ] === '?' )
	) {
		// Look ahead to see if sentence continues:
		ip1 = i + 1;
		if ( ip1 < tokens.length ) {
			// Skip spaces...
			while ( ip1 < tokens.length && tokens[ ip1 ] === ' ' ) {
				ip1 += 1;
			}
			// If next non-space token is lowercase, we assume the sentence continues:
			if ( ip1 < tokens.length ) {
				nextToken = tokens[ ip1 ];
				if ( RE_LOWERCASE.test( nextToken ) ) {
					return false;
				}
			}
		}
		return true;
	}

	// Regular sentence ending punctuation...
	if (
		token === '.' &&
		!RE_CAPITALIZED.test( tokens[ im1 ] ) && // for other short abbreviations and bullet points
		!RE_CAPITALIZED_PERIOD.test( tokens[ im1 ] ) && // acronyms of the form A.B.C.
		!RE_NUMBER.test( tokens[ im1 ] ) && // numbered list items
		!RE_PREFIXES.test( tokens[ im1 ] ) &&
		!RE_SUFFIXES.test( tokens[ ip1 ] )
	) {
		return true;
	}
	if (
		( token === '!' || token === '?' ) &&
		!RE_PREFIXES.test( tokens[ im1 ] ) &&
		!RE_SUFFIXES.test( tokens[ ip1 ] ) &&
		( tokens[ ip1 ] !== '!' && tokens[ ip1 ] !== '?' )
	) {
		return true;
	}
	return false;
}


// MAIN //

/**
* Splits a string into an array of sentences.
*
* @param {string} str - input string
* @throws {TypeError} must provide a string
* @returns {StringArray} array of sentences
*
* @example
* var str = 'Hello World! How are you?';
* var out = sentencize( str );
* // returns [ 'Hello World!', 'How are you?' ]
*
* @example
* var str = '';
* var out = sentencize( str );
* // returns []
*
* @example
* var str = 'Hello Mrs. Maple, could you call me back?';
* var out = sentencize( str );
* // returns [ 'Hello Mrs. Maple, could you call me back?' ]
*/
function sentencize( str ) {
	var current;
	var tokens;
	var out;
	var i;

	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. Must provide a string. Value: `' + str + '`.' );
	}
	tokens = tokenize( str, true );
	current = '';
	out = [];
	for ( i = 0; i < tokens.length; i++ ) {
		current += tokens[ i ];
		if ( isEndOfSentence( tokens, i ) ) {
			out.push( trim( current ) );
			current = '';
		}
	}
	if ( current !== '' ) {
		out.push( trim( current ) );
	}
	return out;
}


// EXPORTS //

module.exports = sentencize;
