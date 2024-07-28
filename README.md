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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# roundb

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a numeric value to the nearest multiple of b^n on a linear scale.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-roundb
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

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

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/roundb.h"
```

#### stdlib_base_roundb( x, n, b )

Rounds a `numeric` value to the nearest multiple of `b^n` on a linear scale.

```c
double out = stdlib_base_roundb( 3.141592653589793, -2, 10 );
// returns 3.14
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **n**: `[in] int32_t` power.
-   **b**: `[in] int32_t` base.

```c
double stdlib_base_roundb( const double x, const int32_t n, const int32_t b );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/roundb.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };
    const int32_t n[] = { -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 };
    const int32_t b[] = { 20, 19, 18, 17, 16, 15, 14, 13, 12, 11 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_roundb( x[ i ], n[ i ], b[ i ] );
        printf( "roundb(%lf, %d, %d) = %lf\n", x[ i ], n[ i ], b[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/ceilb`][@stdlib/math/base/special/ceilb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/floorb`][@stdlib/math/base/special/floorb]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest multiple of b^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math-base/special/round`][@stdlib/math/base/special/round]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest integer.</span>
-   <span class="package-name">[`@stdlib/math-base/special/roundn`][@stdlib/math/base/special/roundn]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number to the nearest multiple of 10^n.</span>

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-roundb.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-roundb

[test-image]: https://github.com/stdlib-js/math-base-special-roundb/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/math-base-special-roundb/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-roundb/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-roundb?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-roundb.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-roundb/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-roundb/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-roundb/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-roundb/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-roundb/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-roundb/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-roundb/blob/esm/README.md
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
