"use strict";

const een = require( "./een.js" );

console.log( een( [ 1, 2, 3 ], 2 ) );
console.log( een( [ 1, 2, 3 ], 4 ) );
console.log( een( [ null, undefined ], "" ) );
