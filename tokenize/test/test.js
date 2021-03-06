/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/* eslint-disable no-new-wrappers */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isArray = require( '@stdlib/assert/is-array' );
var tokenize = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof tokenize, 'function', 'main export is a function' );
	t.end();
});

tape( 'if the first argument is not a string primitive, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		new String( 'beep' ),
		5,
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tokenize( value );
		};
	}
});

tape( 'if the second argument is not a boolean primitive, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		new String( 'beep' ),
		5,
		null,
		'abc',
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tokenize( 'beep Boop', value );
		};
	}
});

tape( 'the function tokenizes a string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello World!';
	expected = [ 'Hello', 'World', '!' ];
	actual = tokenize( str );
	t.deepEqual( actual, expected, 'returns an array of tokens' );

	str = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.';
	expected = [
		'Lorem',
		'ipsum',
		'dolor',
		'sit',
		'amet',
		',',
		'consetetur',
		'sadipscing',
		'elitr',
		',',
		'sed',
		'diam',
		'nonumy',
		'eirmod',
		'.'
	];
	actual = tokenize( str );
	t.deepEqual( actual, expected, 'returns an array of tokens' );

	str = 'Hello Mrs. Maple, could you call me back?';
	expected = [ 'Hello', 'Mrs.', 'Maple', ',', 'could', 'you', 'call', 'me', 'back', '?' ];
	actual = tokenize( str );
	t.deepEqual( actual, expected, 'returns an array of tokens' );

	str = 'William Shakespeare (04/26/1564 (baptised) ??? 04/23/1616)';
	expected = [ 'William', 'Shakespeare', '(', '04/26/1564', '(', 'baptised', ')', '???', '04/23/1616', ')' ];
	actual = tokenize( str );
	t.deepEqual( actual, expected, 'returns an array of tokens' );

	t.end();
});

tape( 'the function tokenizes a string (preserving whitespace)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello World!';
	expected = [ 'Hello', ' ', 'World', '!' ];
	actual = tokenize( str, true );
	t.deepEqual( actual, expected, 'returns an array of tokens' );

	str = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\nsed diam nonumy eirmod.';
	expected = [
		'Lorem',
		' ',
		'ipsum',
		' ',
		'dolor',
		' ',
		'sit',
		' ',
		'amet',
		',',
		' ',
		'consetetur',
		' ',
		'sadipscing',
		' ',
		'elitr',
		',',
		'\n',
		'sed',
		' ',
		'diam',
		' ',
		'nonumy',
		' ',
		'eirmod',
		'.'
	];
	actual = tokenize( str, true );
	t.deepEqual( actual, expected, 'returns an array of tokens' );

	str = 'Hello Mrs. Maple, could you call me back?';
	expected = [ 'Hello', ' ', 'Mrs.', ' ', 'Maple', ',', ' ', 'could', ' ', 'you', ' ', 'call', ' ', 'me', ' ', 'back', '?' ];
	actual = tokenize( str, true );
	t.deepEqual( actual, expected, 'returns an array of tokens' );

	str = 'William Shakespeare (04/26/1564 (baptised) ??? 04/23/1616)';
	expected = [
		'William',
		' ',
		'Shakespeare',
		' ',
		'(',
		'04/26/1564',
		' ',
		'(',
		'baptised',
		')',
		' ',
		'???',
		' ',
		'04/23/1616',
		')'
	];
	actual = tokenize( str, true );
	t.deepEqual( actual, expected, 'returns an array of tokens' );

	t.end();
});

tape( 'the function returns an emptry array if provided an empty string', function test( t ) {
	var out = tokenize( '' );
	t.equal( isArray( out ), true, 'returns an array' );
	t.equal( out.length, 0, 'array length is zero' );
	t.end();
});
