/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import expandAcronyms = require( './../../expand-acronyms' );
import expandContractions = require( './../../expand-contractions' );
import lda = require( './../../lda' );
import ordinalize = require( './../../ordinalize' );
import porterStemmer = require( './../../porter-stemmer' );
import sentencize = require( './../../sentencize' );
import tokenize = require( './../../tokenize' );

/**
* Interface describing the `nlp` namespace.
*/
interface Namespace {
	/**
	* Expands acronyms in a string.
	*
	* @param str - string to convert
	* @returns string with expanded acronyms
	*
	* @example
	* var str = 'LOL, this is fun. I am ROFL.';
	* var out = ns.expandAcronyms( str );
	* // returns 'laughing out loud, this is fun. I am rolling on the floor laughing.'
	*
	* @example
	* var str = 'brb, I need to check my mail. thx!';
	* var out = ns.expandAcronyms( str );
	* // returns 'be right back, I need to check my mail. thanks!'
	*/
	expandAcronyms: typeof expandAcronyms;

	/**
	* Expands all contractions to their formal equivalents.
	*
	* @param str - string to convert
	* @returns string with expanded contractions
	*
	* @example
	* var str = 'I won\'t be able to get y\'all out of this one.';
	* var out = ns.expandContractions( str );
	* // returns 'I will not be able to get you all out of this one.'
	*
	* @example
	* var str = 'It oughtn\'t to be my fault, because, you know, I didn\'t know';
	* var out = ns.expandContractions( str );
	* // returns 'It ought not to be my fault, because, you know, I did not know'
	*/
	expandContractions: typeof expandContractions;

	/**
	* Latent Dirichlet Allocation via collapsed Gibbs sampling.
	*
	* @param documents - document corpus
	* @param K - number of topics
	* @param options - options object
	* @param options.alpha - Dirichlet hyper-parameter of topic vector theta
	* @param options.beta - Dirichlet hyper-parameter for word vector phi
	* @throws second argument must be a positive integer
	* @throws must provide valid options
	* @returns model object
	*/
	lda: typeof lda;

	/**
	* Converts an integer to an ordinal string (e.g., `1st`, `2nd`, etc.).
	*
	* @param value - string or number to convert
	* @param options - options
	* @param options.suffixOnly - boolean indicating whether to return only the suffix (default: false)
	* @param options.lang - language code (default: 'en')
	* @param options.gender - grammatical gender (used if applicable; either 'masculine' or 'feminine'; default: 'masculine')
	* @returns ordinal string or suffix
	*
	* @example
	* var out = ns.ordinalize( '1' );
	* // returns '1st'
	*
	* @example
	* var out = ns.ordinalize( '2' );
	* // returns '2nd'
	*
	* @example
	* var out = ns.ordinalize( '21' );
	* // returns '21st'
	*
	* @example
	* var out = ns.ordinalize( '1', { 'lang': 'de' } );
	* // returns '1.'
	*
	* @example
	* var out = ns.ordinalize( '7', { 'lang': 'es' } );
	* // returns '7ª'
	*/
	ordinalize: typeof ordinalize;

	/**
	* Extracts the stem of a given word.
	*
	* @param word - input word
	* @returns word stem
	*
	* @example
	* var out = ns.porterStemmer( 'walking' );
	* // returns 'walk'
	*
	* @example
	* var out = ns.porterStemmer( 'walked' );
	* // returns 'walk'
	*
	* @example
	* var out = ns.porterStemmer( 'walks' );
	* // returns 'walk'
	*
	* @example
	* var out = ns.porterStemmer( 'worldwide' );
	* // returns 'worldwid'
	*
	* @example
	* var out = ns.porterStemmer( '' );
	* // returns ''
	*/
	porterStemmer: typeof porterStemmer;

	/**
	* Splits a string into an array of sentences.
	*
	* @param str - input string
	* @returns array of sentences
	*
	* @example
	* var str = 'Hello World! How are you?';
	* var out = ns.sentencize( str );
	* // returns [ 'Hello World!', 'How are you?' ]
	*
	* @example
	* var str = '';
	* var out = ns.sentencize( str );
	* // returns []
	*
	* @example
	* var str = 'Hello Mrs. Maple, could you call me back?';
	* var out = ns.sentencize( str );
	* // returns [ 'Hello Mrs. Maple, could you call me back?' ]
	*/
	sentencize: typeof sentencize;

	/**
	* Tokenize a string.
	*
	* @param str - input string
	* @param keepWhitespace - boolean indicating whether whitespace characters should be returned as part of the token array (default: false)
	* @returns array of tokens
	*
	* @example
	* var str = 'Hello World!';
	* var out = ns.tokenize( str );
	* // returns [ 'Hello', 'World', '!' ]
	*
	* @example
	* var str = '';
	* var out = ns.tokenize( str );
	* // returns []
	*
	* @example
	* var str = 'Hello Mrs. Maple, could you call me back?';
	* var out = ns.tokenize( str );
	* // returns [ 'Hello', 'Mrs.', 'Maple', ',', 'could', 'you', 'call', 'me', 'back', '?' ]
	*/
	tokenize: typeof tokenize;
}

/**
* Natural language processing.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
