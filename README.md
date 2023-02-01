<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Natural Language Processing

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Natural language processing (NLP).



<section class="usage">

## Usage

```javascript
import nlp from 'https://cdn.jsdelivr.net/gh/stdlib-js/nlp@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { expandAcronyms, expandContractions, lda, ordinalize, porterStemmer, tokenize } from 'https://cdn.jsdelivr.net/gh/stdlib-js/nlp@deno/mod.js';
```

#### nlp

Namespace containing natural language processing (NLP) functionality.

```javascript
var fcns = nlp;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`expandAcronyms( str )`][@stdlib/nlp/expand-acronyms]</span><span class="delimiter">: </span><span class="description">expand acronyms.</span>
-   <span class="signature">[`expandContractions( str )`][@stdlib/nlp/expand-contractions]</span><span class="delimiter">: </span><span class="description">expand all contractions to their formal equivalents.</span>
-   <span class="signature">[`lda( docs, K[, options] )`][@stdlib/nlp/lda]</span><span class="delimiter">: </span><span class="description">latent Dirichlet Allocation via collapsed Gibbs sampling.</span>
-   <span class="signature">[`ordinalize( value )`][@stdlib/nlp/ordinalize]</span><span class="delimiter">: </span><span class="description">convert an integer to an ordinal string (e.g., `1st`, `2nd`, etc.).</span>
-   <span class="signature">[`porterStemmer( word )`][@stdlib/nlp/porter-stemmer]</span><span class="delimiter">: </span><span class="description">extract the stem of a given word.</span>
-   <span class="signature">[`tokenize( str[, keepWhitespace] )`][@stdlib/nlp/tokenize]</span><span class="delimiter">: </span><span class="description">tokenize a string.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@deno/mod.js';
import nlp from 'https://cdn.jsdelivr.net/gh/stdlib-js/nlp@deno/mod.js';

console.log( objectKeys( nlp ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/nlp.svg
[npm-url]: https://npmjs.org/package/@stdlib/nlp

[test-image]: https://github.com/stdlib-js/nlp/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/nlp/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/nlp/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/nlp?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/nlp.svg
[dependencies-url]: https://david-dm.org/stdlib-js/nlp/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/nlp/tree/deno
[umd-url]: https://github.com/stdlib-js/nlp/tree/umd
[esm-url]: https://github.com/stdlib-js/nlp/tree/esm
[branches-url]: https://github.com/stdlib-js/nlp/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/nlp/main/LICENSE

<!-- <toc-links> -->

[@stdlib/nlp/expand-acronyms]: https://github.com/stdlib-js/nlp/tree/main/expand-acronyms

[@stdlib/nlp/expand-contractions]: https://github.com/stdlib-js/nlp/tree/main/expand-contractions

[@stdlib/nlp/lda]: https://github.com/stdlib-js/nlp/tree/main/lda

[@stdlib/nlp/ordinalize]: https://github.com/stdlib-js/nlp/tree/main/ordinalize

[@stdlib/nlp/porter-stemmer]: https://github.com/stdlib-js/nlp/tree/main/porter-stemmer

[@stdlib/nlp/tokenize]: https://github.com/stdlib-js/nlp/tree/main/tokenize

<!-- </toc-links> -->

</section>

<!-- /.links -->
