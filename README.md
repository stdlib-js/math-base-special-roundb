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

# roundb

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a numeric value to the nearest multiple of b^n on a linear scale.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-roundb
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var roundb = require( '@stdlib/math-base-special-roundb' );
```

#### roundb( x, n, b )

Rounds a `numeric` value to the nearest multiple of `b^n` on a linear scale.

```javascript
// Round a value to 2 decimal places:
var v = roundb( 3.141592653589793, -2, 10 );
// returns 3.14

// If n = 0 or b = 1, `roundb` behaves like `round`:
v = roundb( 3.141592653589793, 0, 2 );
// returns 3.0

// Round a value to the nearest multiple of two:
v = roundb( 5.0, 1, 2 );
// returns 6.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Due to rounding error in [floating-point numbers][ieee754], rounding may **not** be exact. For example,

    ```javascript
    var x = 0.2 + 0.1;
    // returns 0.30000000000000004

    // Should round to 0.3...
    var v = roundb( x, -16, 10 );
    // returns 0.3000000000000001
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var pow = require( '@stdlib/math-base-special-pow' );
var roundb = require( '@stdlib/math-base-special-roundb' );

var x;
var n;
var b;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = round( (randu()*10.0) - 5.0 );
    b = round( randu()*10.0 );
    v = roundb( x, n, b );
    console.log( 'x: %d. %d^%d: %d. Rounded: %d.', x, b, n, pow( b, n ), v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ceilb`][@stdlib/math/base/special/ceilb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floorb`][@stdlib/math/base/special/floorb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/round`][@stdlib/math/base/special/round]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest integer.</span>
-   <span class="package-name">[`@stdlib/math/base/special/roundn`][@stdlib/math/base/special/roundn]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of 10^n.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-roundb.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-roundb

[test-image]: https://github.com/stdlib-js/math-base-special-roundb/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-roundb/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-roundb/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-roundb?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-roundb.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-roundb/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-roundb/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-roundb/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-roundb/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-roundb/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-roundb/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/ceilb]: https://github.com/stdlib-js/math-base-special-ceilb

[@stdlib/math/base/special/floorb]: https://github.com/stdlib-js/math-base-special-floorb

[@stdlib/math/base/special/round]: https://github.com/stdlib-js/math-base-special-round

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn

<!-- </related-links> -->

</section>

<!-- /.links -->
