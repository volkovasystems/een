
const assert = require( "assert" );
const een = require( "./een.js" );

assert.equal( een( [ 1, 2, 3 ], 2 ), true, "should be true" );
assert.equal( een( [ null, 1 ], null ), true, "should be true" );
assert.equal( een( [ 1, "" ], "" ), true, "should be true" );

assert.equal( een( [ ] ), false, "should be false" );
assert.equal( een( [ ], 1 ), false, "should be false" );
assert.equal( een( [ 1, { } ], { } ), false, "should be false" );
assert.equal( een( [ 1, 2, 3, [ 4 ] ], 4 ), false, "should be false" );
assert.equal( een( [ 1, 2, 3, [ 4 ] ], [ 4 ] ), false, "should be false" );
assert.equal( een( [ 1, 2, 3 ], 4 ), false, "should be false" );
assert.equal( een( [ null, undefined ], "" ), false, "should be false" );

console.log( "ok" );
