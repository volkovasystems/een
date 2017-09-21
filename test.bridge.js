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
              			"assert": "should/as-function",
              			"een": "een"
              		}
              	@end-include
              */

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge





//: @bridge:

describe("een", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`een( [ 1, 2, 3, 'hello' ], 'hello' )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return een([1, 2, 3, "hello"], "hello");
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`een( [ 1, 2, 3, true ], true )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(

			function () {
				return een([1, 2, 3, true], true);
			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`een( [ 1, 2, 3 ], 2 )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return een([1, 2, 3], 2);});
			assert.equal(result.value, true);

		});
	});

	describe("`!een( [ 1, 2, 3 ], 4 )`", function () {
		it("should be equal to true", function () {
			var result = browser.url(bridgeURL).execute(function () {return !een([1, 2, 3], 4);});
			assert.equal(result.value, true);

		});
	});

	describe("`een( [ 1, 2, 3, Symbol.for( 'hello' ) ], Symbol.for( 'hello' ) )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return een( [ 1, 2, 3, Symbol.for( "hello" ) ], Symbol.for( "hello" ) );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

	describe("`een( [ 1, 2, 3, function hello( ){ } ], function hello( ){ } )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return een( [ 1, 2, 3, function hello( ){ } ], function hello( ){ } );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`een with value and comparator`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(

			function () {

				var source = [1, 2, 3, 7];
				var target = [1, 2, 3, 4, 5, 6];
				//: @ignore:
    					source.forEach( ( value ) => {
    						!een( target, value, ( element, value ) => eqe( element, value ) ) &&
    						target.push( value );
    					} );
    					//: @end-ignore
				return een(target, 7);

			}).

			value;

			assert.equal(result, true);

		});
	});

	describe("`een( [ ] )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(function () {return een([]);});
			assert.equal(result.value, false);

		});
	});

	describe("`een( 'hello', 'hello' )`", function () {
		it("should be equal to true", function () {

			var result = browser.url(bridgeURL).execute(function () {return een("hello", "hello");});
			assert.equal(result.value, true);

		});
	});

	describe("`een( 'hello', 'world' )`", function () {
		it("should be equal to false", function () {

			var result = browser.url(bridgeURL).execute(function () {return een("hello", "world");});
			assert.equal(result.value, false);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJyZXN1bHQiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImVlbiIsInZhbHVlIiwiZXF1YWwiLCJzb3VyY2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7QUFNQTs7QUFFQUUsU0FBVSxLQUFWLEVBQWlCLFlBQU87O0FBRXZCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLHdDQUFWLEVBQW9ELFlBQU87QUFDMURJLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQyxPQUFJQyxTQUFTQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCOztBQUVaLGVBQVc7QUFDVixXQUFPQyxJQUFLLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsT0FBWCxDQUFMLEVBQTJCLE9BQTNCLENBQVA7QUFDQSxJQUpXOztBQU1YQyxRQU5GOztBQVFBYixVQUFPYyxLQUFQLENBQWNOLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FYRDtBQVlBLEVBYkQ7O0FBZUFMLFVBQVUsa0NBQVYsRUFBOEMsWUFBTztBQUNwREksS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekI7O0FBRVosZUFBVztBQUNWLFdBQU9DLElBQUssQ0FBRSxDQUFGLEVBQUssQ0FB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O0FBTUEsRUFQRDs7QUFTQVYsVUFBVSwyQkFBVixFQUF1QyxZQUFPO0FBQzdDSSxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDLE9BQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYU4sU0FBYixFQUF5Qk8sT0FBekIsQ0FBa0Msb0JBQU9DLElBQUssT0FBTCxFQUFjLE9BQWQsQ0FBUCxFQUFsQyxDQUFiO0FBQ0FaLFVBQU9jLEtBQVAsQ0FBY04sT0FBT0ssS0FBckIsRUFBNEIsS0FBNUI7O0FBRUEsR0FMRDtBQU1BLEVBUEQ7O0FBU0EsQ0EvSUQ7O0FBaUpBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlZW5cIixcblx0XHRcdFwicGF0aFwiOiBcImVlbi90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWVuLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZC9hcy1mdW5jdGlvblwiLFxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZC9hcy1mdW5jdGlvblwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJlZW5cIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYGVlbiggWyAxLCAyLCAzLCAnaGVsbG8nIF0sICdoZWxsbycgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdHJldHVybiBlZW4oIFsgMSwgMiwgMywgXCJoZWxsb1wiIF0sIFwiaGVsbG9cIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWVuKCBbIDEsIDIsIDMsIHRydWUgXSwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGVlbiggWyAxLCAyLCAzLCB0cnVlIF0sIHRydWUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVlbiggWyAxLCAyLCAzIF0sIDIgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlZW4oIFsgMSwgMiwgMyBdLCAyICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgIWVlbiggWyAxLCAyLCAzIF0sIDQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gIWVlbiggWyAxLCAyLCAzIF0sIDQgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlZW4oIFsgMSwgMiwgMywgU3ltYm9sLmZvciggJ2hlbGxvJyApIF0sIFN5bWJvbC5mb3IoICdoZWxsbycgKSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGVlbiggWyAxLCAyLCAzLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdLCBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVlbiggWyAxLCAyLCAzLCBmdW5jdGlvbiBoZWxsbyggKXsgfSBdLCBmdW5jdGlvbiBoZWxsbyggKXsgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0cmV0dXJuIGVlbiggWyAxLCAyLCAzLCBmdW5jdGlvbiBoZWxsbyggKXsgfSBdLCBmdW5jdGlvbiBoZWxsbyggKXsgfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWVuIHdpdGggdmFsdWUgYW5kIGNvbXBhcmF0b3JgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IHNvdXJjZSA9IFsgMSwgMiwgMywgNyBdO1xuXHRcdFx0XHRcdGxldCB0YXJnZXQgPSBbIDEsIDIsIDMsIDQsIDUsIDYgXTtcblx0XHRcdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRcdFx0c291cmNlLmZvckVhY2goICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHQhZWVuKCB0YXJnZXQsIHZhbHVlLCAoIGVsZW1lbnQsIHZhbHVlICkgPT4gZXFlKCBlbGVtZW50LCB2YWx1ZSApICkgJiZcblx0XHRcdFx0XHRcdHRhcmdldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRcdFx0cmV0dXJuIGVlbiggdGFyZ2V0LCA3ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVlbiggWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVlbiggWyBdICkgKTtcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVlbiggJ2hlbGxvJywgJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVlbiggXCJoZWxsb1wiLCBcImhlbGxvXCIgKSApO1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQudmFsdWUsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlZW4oICdoZWxsbycsICd3b3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZWVuKCBcImhlbGxvXCIsIFwid29ybGRcIiApICk7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
