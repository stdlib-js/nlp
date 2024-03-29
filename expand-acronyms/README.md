<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Expand Acronyms

> Expand acronyms.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var expandAcronyms = require( '@stdlib/nlp/expand-acronyms' );
```

#### expandAcronyms( str )

Expands acronyms in a string.

```javascript
var str = 'TLDR, the article is too long...';
var out = expandAcronyms( str );
// returns 'too long did not read, the article is too long...'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This expansion is done via a simple table look-up. Hence, it is not able to replace acronyms for which there are multiple possible expansions.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var expandAcronyms = require( '@stdlib/nlp/expand-acronyms' );

var str = 'LOL, this is fun. I am ROFL.';
var out = expandAcronyms( str );
// returns 'laughing out loud, this is fun. I am rolling on the floor laughing.'

str = 'brb, I need to check my mail. thx!';
out = expandAcronyms( str );
// returns 'be right back, I need to check my mail. thanks!'

str = 'OTOH, there are some drawbacks to this approach imho.';
out = expandAcronyms( str );
// returns 'on the other hand, there are some drawbacks to this approach in my humble opinion.'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/nlp/expand-contractions`][@stdlib/nlp/expand-contractions]</span><span class="delimiter">: </span><span class="description">expand contractions.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/nlp/expand-contractions]: https://github.com/stdlib-js/nlp/tree/main/expand-contractions

<!-- </related-links> -->

</section>

<!-- /.links -->
