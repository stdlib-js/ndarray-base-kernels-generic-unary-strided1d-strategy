/** @license Apache-2.0 */

'use strict';

/**
* Return an object containing methods for reshaping an ndarray as a one-dimensional strided array view.
*
* @module @stdlib/ndarray-base-kernels-generic-unary-strided1d-strategy
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var strategy = require( '@stdlib/ndarray-base-kernels-generic-unary-strided1d-strategy' );
*
* var x = {
*     'dtype': 'float64',
*     'data': new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] ),
*     'shape': [ 1 ],
*     'strides': [ 1 ],
*     'offset': 0,
*     'order': 'row-major'
* };
*
* var out = strategy( x );
* // returns {...}
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
