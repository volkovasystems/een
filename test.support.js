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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var een = require("./een.support.js");
//: @end-client





//: @client:

describe("een", function () {

	describe("`een( [ 1, 2, 3, 'hello' ], 'hello' )`", function () {
		it("should be equal to true", function () {
			assert.equal(een([1, 2, 3, "hello"], "hello"), true);
		});
	});

	describe("`een( [ 1, 2, 3, true ], true )`", function () {
		it("should be equal to true", function () {
			assert.equal(een([1, 2, 3, true], true), true);
		});
	});

	describe("`een( [ 1, 2, 3 ], 2 )`", function () {
		it("should be equal to true", function () {
			assert.equal(een([1, 2, 3], 2), true);
		});
	});

	describe("`!een( [ 1, 2, 3 ], 4 )`", function () {
		it("should be equal to true", function () {
			assert.equal(!een([1, 2, 3], 4), true);
		});
	});

	describe("`een( [ 1, 2, 3, Symbol.for( 'hello' ) ], Symbol.for( 'hello' ) )`", function () {
		it("should be equal to true", function () {
			assert.equal(een([1, 2, 3, (0, _for2.default)("hello")], (0, _for2.default)("hello")), true);
		});
	});

	describe("`een( [ 1, 2, 3, function hello( ){ } ], function hello( ){ } )`", function () {
		it("should be equal to true", function () {
			assert.equal(een([1, 2, 3, function hello() {}], function hello() {}), true);
		});
	});

	describe("`een with value and comparator`", function () {
		it("should be equal to true", function () {

			var source = [1, 2, 3, 7];
			var target = [1, 2, 3, 4, 5, 6];

			source.forEach(function (value) {
				!een(target, value, function (element, value) {return eqe(element, value);}) &&
				target.push(value);
			});

			assert.deepEqual(een(target, 7), true);
		});
	});

	describe("`een( [ ] )`", function () {
		it("should be equal to false", function () {
			assert.equal(een([]), false);
		});
	});

	describe("`een( 'hello', 'hello' )`", function () {
		it("should be equal to true", function () {
			assert.equal(een("hello", "hello"), true);
		});
	});

	describe("`een( 'hello', 'world' )`", function () {
		it("should be equal to false", function () {
			assert.equal(een("hello", "world"), false);
		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZWVuIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwiaGVsbG8iLCJzb3VyY2UiLCJ0YXJnZXQiLCJmb3JFYWNoIiwidmFsdWUiLCJlbGVtZW50IiwiZXFlIiwicHVzaCIsImRlZXBFcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxvQkFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxNQUFNRCxRQUFTLGtCQUFULENBQVo7QUFDQTs7Ozs7O0FBTUE7O0FBRUFFLFNBQVUsS0FBVixFQUFpQixZQUFPOztBQUV2QkEsVUFBVSx3Q0FBVixFQUFvRCxZQUFPO0FBQzFEQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLE9BQVgsQ0FBTCxFQUEyQixPQUEzQixDQUFkLEVBQW9ELElBQXBEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsa0NBQVYsRUFBOEMsWUFBTztBQUNwREMsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILElBQUssQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxJQUFYLENBQUwsRUFBd0IsSUFBeEIsQ0FBZCxFQUE4QyxJQUE5QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLHlCQUFWLEVBQXFDLFlBQU87QUFDM0NDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxJQUFLLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQUwsRUFBa0IsQ0FBbEIsQ0FBZCxFQUFxQyxJQUFyQztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLDBCQUFWLEVBQXNDLFlBQU87QUFDNUNDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjLENBQUNILElBQUssQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBTCxFQUFrQixDQUFsQixDQUFmLEVBQXNDLElBQXRDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsb0VBQVYsRUFBZ0YsWUFBTztBQUN0RkMsS0FBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDSixVQUFPSyxLQUFQLENBQWNILElBQUssQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxtQkFBWSxPQUFaLENBQVgsQ0FBTCxFQUF5QyxtQkFBWSxPQUFaLENBQXpDLENBQWQsRUFBZ0YsSUFBaEY7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSxrRUFBVixFQUE4RSxZQUFPO0FBQ3BGQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLFNBQVNJLEtBQVQsR0FBaUIsQ0FBRyxDQUEvQixDQUFMLEVBQXdDLFNBQVNBLEtBQVQsR0FBaUIsQ0FBRyxDQUE1RCxDQUFkLEVBQThFLElBQTlFO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFILFVBQVUsaUNBQVYsRUFBNkMsWUFBTztBQUNuREMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJRyxTQUFTLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFiO0FBQ0EsT0FBSUMsU0FBUyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLENBQWI7O0FBRUFELFVBQU9FLE9BQVAsQ0FBZ0IsVUFBRUMsS0FBRixFQUFhO0FBQzVCLEtBQUNSLElBQUtNLE1BQUwsRUFBYUUsS0FBYixFQUFvQixVQUFFQyxPQUFGLEVBQVdELEtBQVgsVUFBc0JFLElBQUtELE9BQUwsRUFBY0QsS0FBZCxDQUF0QixFQUFwQixDQUFEO0FBQ0FGLFdBQU9LLElBQVAsQ0FBYUgsS0FBYixDQURBO0FBRUEsSUFIRDs7QUFLQVYsVUFBT2MsU0FBUCxDQUFrQlosSUFBS00sTUFBTCxFQUFhLENBQWIsQ0FBbEIsRUFBb0MsSUFBcEM7QUFDQSxHQVhEO0FBWUEsRUFiRDs7QUFlQUwsVUFBVSxjQUFWLEVBQTBCLFlBQU87QUFDaENDLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0Q0osVUFBT0ssS0FBUCxDQUFjSCxJQUFLLEVBQUwsQ0FBZCxFQUEwQixLQUExQjtBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLDJCQUFWLEVBQXVDLFlBQU87QUFDN0NDLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQ0osVUFBT0ssS0FBUCxDQUFjSCxJQUFLLE9BQUwsRUFBYyxPQUFkLENBQWQsRUFBdUMsSUFBdkM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSwyQkFBVixFQUF1QyxZQUFPO0FBQzdDQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxPQUFMLEVBQWMsT0FBZCxDQUFkLEVBQXVDLEtBQXZDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUEsQ0F2RUQ7O0FBeUVBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWVuXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlZW4vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Vlbi5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGQvYXMtZnVuY3Rpb25cIixcblx0XHRcdFwiZWVuXCI6IFwiZWVuXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBlZW4gPSByZXF1aXJlKCBcIi4vZWVuLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcImVlblwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBlZW4oIFsgMSwgMiwgMywgJ2hlbGxvJyBdLCAnaGVsbG8nIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggZWVuKCBbIDEsIDIsIDMsIFwiaGVsbG9cIiBdLCBcImhlbGxvXCIgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlZW4oIFsgMSwgMiwgMywgdHJ1ZSBdLCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggZWVuKCBbIDEsIDIsIDMsIHRydWUgXSwgdHJ1ZSApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVlbiggWyAxLCAyLCAzIF0sIDIgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlZW4oIFsgMSwgMiwgMyBdLCAyICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgIWVlbiggWyAxLCAyLCAzIF0sIDQgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCAhZWVuKCBbIDEsIDIsIDMgXSwgNCApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVlbiggWyAxLCAyLCAzLCBTeW1ib2wuZm9yKCAnaGVsbG8nICkgXSwgU3ltYm9sLmZvciggJ2hlbGxvJyApIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggZWVuKCBbIDEsIDIsIDMsIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIF0sIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWVuKCBbIDEsIDIsIDMsIGZ1bmN0aW9uIGhlbGxvKCApeyB9IF0sIGZ1bmN0aW9uIGhlbGxvKCApeyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggZWVuKCBbIDEsIDIsIDMsIGZ1bmN0aW9uIGhlbGxvKCApeyB9IF0sIGZ1bmN0aW9uIGhlbGxvKCApeyB9ICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZWVuIHdpdGggdmFsdWUgYW5kIGNvbXBhcmF0b3JgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHNvdXJjZSA9IFsgMSwgMiwgMywgNyBdO1xuXHRcdFx0bGV0IHRhcmdldCA9IFsgMSwgMiwgMywgNCwgNSwgNiBdO1xuXG5cdFx0XHRzb3VyY2UuZm9yRWFjaCggKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0IWVlbiggdGFyZ2V0LCB2YWx1ZSwgKCBlbGVtZW50LCB2YWx1ZSApID0+IGVxZSggZWxlbWVudCwgdmFsdWUgKSApICYmXG5cdFx0XHRcdHRhcmdldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBlZW4oIHRhcmdldCwgNyApLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVlbiggWyBdIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVlbiggWyBdICksIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGVlbiggJ2hlbGxvJywgJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVlbiggXCJoZWxsb1wiLCBcImhlbGxvXCIgKSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBlZW4oICdoZWxsbycsICd3b3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggZWVuKCBcImhlbGxvXCIsIFwid29ybGRcIiApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
