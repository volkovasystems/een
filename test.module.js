"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "een",
			"path": "een/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/een.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"een": "een"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const een = require( "./een.js" );
const eqe = require( "eqe" );
//: @end-server

//: @client:
const een = require( "./een.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "een", ( ) => {

	describe( "`een( [ 1, 2, 3 ], 2 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( een( [ 1, 2, 3 ], 2 ), true );
		} );
	} );

	describe( "`!een( [ 1, 2, 3 ], 4 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( !een( [ 1, 2, 3 ], 4 ), true );
		} );
	} );

	describe( "`een with value and comparator`", ( ) => {
		it( "should return true", ( ) => {

			let source = [ 1, 2, 3, 7 ];
			let target = [ 1, 2, 3, 4, 5, 6 ];

			source.forEach( ( value ) => {
				!een( target, value, ( element, value ) => eqe( element, value ) ) &&
				target.push( value );
			} );

			assert.deepEqual( een( target, 7 ), true );
		} );
	} );

	describe( "`een( [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( een( [ ] ), false );
		} );
	} );

	describe( "`een( 'hello', 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( een( "hello", "hello" ), true );
		} );
	} );

	describe( "`een( 'hello', 'world' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( een( "hello", "world" ), false );
		} );
	} );

} );

//: @end-server

//: @client:

describe( "een", ( ) => {

	describe( "`een( [ 1, 2, 3 ], 2 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( een( [ 1, 2, 3 ], 2 ), true );
		} );
	} );

	describe( "`!een( [ 1, 2, 3 ], 4 )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( !een( [ 1, 2, 3 ], 4 ), true );
		} );
	} );

	describe( "`een with value and comparator`", ( ) => {
		it( "should return true", ( ) => {

			let source = [ 1, 2, 3, 7 ];
			let target = [ 1, 2, 3, 4, 5, 6 ];

			source.forEach( ( value ) => {
				!een( target, value, ( element, value ) => eqe( element, value ) ) &&
				target.push( value );
			} );

			assert.deepEqual( een( target, 7 ), true );
		} );
	} );

	describe( "`een( [ ] )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( een( [ ] ), false );
		} );
	} );

	describe( "`een( 'hello', 'hello' )`", ( ) => {
		it( "should be equal to true", ( ) => {
			assert.equal( een( "hello", "hello" ), true );
		} );
	} );

	describe( "`een( 'hello', 'world' )`", ( ) => {
		it( "should be equal to false", ( ) => {
			assert.equal( een( "hello", "world" ), false );
		} );
	} );

} );

//: @end-client

//: @bridge:

describe( "een", ( ) => {

	const testBridge = path.resolve(__dirname, "bridge.html");
	const bridgeURL = "file://" + testBridge;

	describe( "een", ( ) => {

		describe( "`een( [ 1, 2, 3 ], 2 )`", ( ) => {
			it( "should be equal to true", ( ) => {
				let result = browser.url( bridgeURL ).execute( ( ) => een( [ 1, 2, 3 ], 2 ) );
				assert.equal( result.value, true );
			} );
		} );

		describe( "`!een( [ 1, 2, 3 ], 4 )`", ( ) => {
			it( "should be equal to true", ( ) => {
				let result = browser.url( bridgeURL ).execute( ( ) => !een( [ 1, 2, 3 ], 4 ) );
				assert.equal( result.value, true );
			} );
		} );

		describe( "`een( [ ] )`", ( ) => {
			it( "should be equal to false", ( ) => {
				let result = browser.url( bridgeURL ).execute( ( ) => een( [ ] ) );
				assert.equal( result.value, false );
			} );
		} );

		describe( "`een( 'hello', 'hello' )`", ( ) => {
			it( "should be equal to true", ( ) => {
				let result = browser.url( bridgeURL ).execute( ( ) => een( "hello", "hello" ) );
				assert.equal( result.value, true );
			} );
		} );

		describe( "`een( 'hello', 'world' )`", ( ) => {
			it( "should be equal to false", ( ) => {
				let result = browser.url( bridgeURL ).execute( ( ) => een( "hello", "world" ) );
				assert.equal( result.value, false );
			} );
		} );

	} );

} );

//: @end-bridge
