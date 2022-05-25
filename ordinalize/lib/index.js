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

/**
* Turn an integer into an ordinal string (e.g., `1st`, `2nd`, etc.).
*
* @module @stdlib/nlp/ordinalize
*
* @example
* var ordinalize = require( '@stdlib/nlp/ordinalize' );
*
* var out = ordinalize( '2' );
* // returns '2nd'
*
* out = ordinalize( '12' );
* // returns '12th'
*
* out = ordinalize( '7', {
*     'suffixOnly': true
* });
* // returns 'th'
*
* out = ordinalize( '3', {
*     'lang': 'de'
* });
* // returns '3.'
*/

// MODULES //

var ordinalize = require( './main.js' );


// EXPORTS //

module.exports = ordinalize;
