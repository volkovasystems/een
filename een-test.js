
const assert = require( "assert" );
const een = require( "./een.js" );
const eqe = require( "eqe" );

assert.equal( een( [ 1, 2, 3 ], 2 ), true, "should be true" );

assert.equal( !een( [ 1, 2, 3 ], 4 ), true, "should be true" );

assert.equal( !een( [ 1, 2, 3, [ 4 ] ], [ 4 ] ), true, "should be true" );

let source = [ 1, 2, 3, 7 ];
let target = [ 1, 2, 3, 4, 5, 6 ];

source.forEach( ( value ) => {
	!een( target, value, ( element, value ) => eqe( element, value ) ) &&
	target.push( value );
} );

assert.deepEqual( target, [ 1, 2, 3, 4, 5, 6, 7 ], "should be equal" );

assert.equal( een( [ ] ), false, "should be false" );

console.log( "ok" );
