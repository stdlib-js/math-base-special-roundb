/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var PI = require( '@stdlib/constants-float64-pi' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var pow = require( '@stdlib/math-base-special-pow' );
var abs = require( '@stdlib/math-base-special-abs' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var roundb = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( roundb instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof roundb, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v;

	v = roundb( NaN, -2, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided `b <= 0`', opts, function test( t ) {
	var v;

	v = roundb( PI, 5, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = roundb( PI, 5, -1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', opts, function test( t ) {
	var v = roundb( PINF, 5, 10 );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', opts, function test( t ) {
	var v = roundb( NINF, -3, 10 );
	t.strictEqual( v, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', opts, function test( t ) {
	var v;

	v = roundb( -0.0, 0, 10 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = roundb( -0.0, -2, 10 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = roundb( -0.0, 2, 10 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if provided `+0`', opts, function test( t ) {
	var v;

	v = roundb( 0.0, 0, 10 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = roundb( +0.0, -2, 10 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = roundb( +0.0, 2, 10 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports rounding a numeric value to a desired number of decimals', opts, function test( t ) {
	t.strictEqual( roundb( PI, -2, 10 ), 3.14, 'returns expected value' );
	t.strictEqual( roundb( -PI, -2, 10 ), -3.14, 'returns expected value' );
	t.strictEqual( roundb( 9.99999, -2, 10 ), 10.0, 'returns expected value' );
	t.strictEqual( roundb( -9.99999, -2, 10 ), -10.0, 'returns expected value' );
	t.strictEqual( roundb( 0.0, 2, 10 ), 0.0, 'returns expected value' );
	t.strictEqual( roundb( 12368.0, -3, 10 ), 12368.0, 'returns expected value' );
	t.strictEqual( roundb( -12368.0, -3, 10 ), -12368.0, 'returns expected value' );
	t.end();
});

tape( 'due to floating-point rounding error, rounding a numeric value can result in unexpected behavior', opts, function test( t ) {
	var x;

	x = 0.2 + 0.1; // => 0.30000000000000004
	t.strictEqual( roundb( x, -16, 10 ), 0.3000000000000001, 'equals 0.3000000000000001 and not 0.3' );

	x = 24.616838129811768;
	t.strictEqual( roundb( x, 2, 7 ), 48.99999999999999, 'equals 48.99999999999999 and not 49' );

	t.end();
});

tape( 'the function supports rounding a numeric value to a desired number of digits', opts, function test( t ) {
	t.strictEqual( roundb( PI, 3, 10 ), 0.0, 'returns expected value' );
	t.strictEqual( roundb( 12368.0, 3, 10 ), 12000.0, 'returns expected value' );
	t.strictEqual( roundb( 12368.0, 1, 10 ), 12370.0, 'returns expected value' );
	t.strictEqual( isNegativeZero( roundb( -PI, 3, 10 ) ), true, 'returns expected value' );
	t.strictEqual( roundb( -12368.0, 3, 10 ), -12000.0, 'returns expected value' );
	t.strictEqual( roundb( -12368.0, 1, 10 ), -12370.0, 'returns expected value' );
	t.end();
});

tape( 'if `x` is too large a double to have decimals and `n < 0`, the input value is returned', opts, function test( t ) {
	var sign;
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		sign = ( randu()<0.5 ) ? -1.0 : 1.0;
		exp = 54 + round( randu()*254.0 );
		x = sign * (1.0+randu()) * pow( 10.0, exp );
		n = -( round( randu()*324.0) );
		v = roundb( x, n, 10 );
		t.strictEqual( x, v, ' returns input value when provided x='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if `b^n` is too large, the function returns `+-0` (sign preserving)', opts, function test( t ) {
	var sign;
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		sign = ( randu()<0.5 ) ? -1.0 : 1.0;
		exp = round( randu()*307.0 );
		x = sign * (1.0+randu()) * pow( 10.0, exp );
		n = round( randu()*100.0 ) + 309;
		v = roundb( x, n, 10 );
		if ( sign === -1.0 ) {
			t.strictEqual( isNegativeZero( v ), true, ' returns expected value when provided x='+x+', n='+n+'.' );
		} else {
			t.strictEqual( isPositiveZero( v ), true, ' returns expected value when provided x='+x+', n='+n+'.' );
		}
	}
	t.end();
});

tape( 'the function supports rounding very small numbers (including subnormals)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var n;
	var v;
	var i;

	x = 3.1468234343023397 * pow( 10.0, -308 );

	n = [];
	for ( i = -308; i > -325; i-- ) {
		n.push( i );
	}
	expected = [
		3e-308,
		3.1e-308,
		3.15e-308,
		3.147e-308,
		3.1468e-308,
		3.14682e-308,
		3.146823e-308,
		3.1468234e-308,
		3.14682343e-308,
		3.146823434e-308,
		3.1468234343e-308,
		3.14682343430e-308,
		3.146823434302e-308,
		3.1468234343023e-308,
		3.14682343430234e-308,
		3.146823434302340e-308,
		3.1468234343023397e-308
	];

	for ( i = 0; i < n.length; i++ ) {
		v = roundb( x, n[i], 10 );
		if ( v === expected[i] ) {
			t.strictEqual( v, expected[ i ], 'returns '+expected[i]+' when provided x='+x+' and n='+n[i]+'.' );
		} else {
			delta = abs( v - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'x: '+x+'. n: '+n[i]+'. v: '+v+'. expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'if the function encounters overflow, the function returns the input value', opts, function test( t ) {
	var x;
	var v;

	x = 3.1468234343023397;
	v = roundb( x, -314, 10 );
	t.strictEqual( v, x, 'returns the input value' );

	x = -3.1468234343023397;
	v = roundb( x, -314, 10 );
	t.strictEqual( v, x, 'returns the input value' );

	x = 9007199254740000;
	v = roundb( x, -300, 10 );
	t.strictEqual( v, x, 'returns the input value' );

	x = -9007199254740000;
	v = roundb( x, -300, 10 );
	t.strictEqual( v, x, 'returns the input value' );

	t.end();
});

tape( 'if `n = 0`, the function exhibits standard round behavior', opts, function test( t ) {
	var x;
	var v;
	var i;

	for ( i = 0; i < 200; i++ ) {
		x = (randu()*1000.0) - 500.0;
		v = roundb( x, 0, 2 );
		t.strictEqual( v, round( x ), 'returns expected value' );
	}
	t.end();
});

tape( 'if `b = 1`, the function exhibits standard round behavior', opts, function test( t ) {
	var x;
	var v;
	var i;

	for ( i = 0; i < 200; i++ ) {
		x = (randu()*1000.0) - 500.0;
		v = roundb( x, 100, 1 );
		t.strictEqual( v, round( x ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports arbitrary rounding', opts, function test( t ) {
	t.strictEqual( roundb( 5.0, 1, 2 ), 6.0, 'returns expected value' );
	t.strictEqual( roundb( 38.5, 1, 6 ), 36.0, 'returns expected value' );
	t.strictEqual( roundb( 0.425, -2, 2 ), 0.5, 'returns expected value' );
	t.strictEqual( roundb( 60.0, 1, 40.0 ), 80.0, 'returns expected value' );
	t.strictEqual( roundb( -21.54, -1, 5 ), -21.6, 'returns expected value' );
	t.strictEqual( roundb( 35.037, -4, 2 ), 35.0625, 'returns expected value' );
	t.end();
});

tape( 'if the function overflows, the function returns the input value', opts, function test( t ) {
	var x;
	var v;

	x = 12.5;
	v = roundb( x, -308, 10 );
	t.strictEqual( v, x, 'returns expected value' );

	x = 12.5;
	v = roundb( x, -1022, 2 );
	t.strictEqual( v, x, 'returns expected value' );

	x = 12.5;
	v = roundb( x, -1074, 2 );
	t.strictEqual( v, x, 'returns expected value' );

	t.end();
});
