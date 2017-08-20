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

var assert = require("should");



//: @client:
var een = require("./een.support.js");
//: @end-client





//: @client:

describe("een", function () {

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

	describe("`een with value and comparator`", function () {
		it("should return true", function () {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZWVuIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIiwic291cmNlIiwidGFyZ2V0IiwiZm9yRWFjaCIsInZhbHVlIiwiZWxlbWVudCIsImVxZSIsInB1c2giLCJkZWVwRXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxNQUFNRCxRQUFTLGtCQUFULENBQVo7QUFDQTs7Ozs7O0FBTUE7O0FBRUFFLFNBQVUsS0FBVixFQUFpQixZQUFPOztBQUV2QkEsVUFBVSx5QkFBVixFQUFxQyxZQUFPO0FBQzNDQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFMLEVBQWtCLENBQWxCLENBQWQsRUFBcUMsSUFBckM7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSwwQkFBVixFQUFzQyxZQUFPO0FBQzVDQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBYyxDQUFDSCxJQUFLLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQUwsRUFBa0IsQ0FBbEIsQ0FBZixFQUFzQyxJQUF0QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BQyxVQUFVLGlDQUFWLEVBQTZDLFlBQU87QUFDbkRDLEtBQUksb0JBQUosRUFBMEIsWUFBTzs7QUFFaEMsT0FBSUUsU0FBUyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBYjtBQUNBLE9BQUlDLFNBQVMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUFiOztBQUVBRCxVQUFPRSxPQUFQLENBQWdCLFVBQUVDLEtBQUYsRUFBYTtBQUM1QixLQUFDUCxJQUFLSyxNQUFMLEVBQWFFLEtBQWIsRUFBb0IsVUFBRUMsT0FBRixFQUFXRCxLQUFYLFVBQXNCRSxJQUFLRCxPQUFMLEVBQWNELEtBQWQsQ0FBdEIsRUFBcEIsQ0FBRDtBQUNBRixXQUFPSyxJQUFQLENBQWFILEtBQWIsQ0FEQTtBQUVBLElBSEQ7O0FBS0FULFVBQU9hLFNBQVAsQ0FBa0JYLElBQUtLLE1BQUwsRUFBYSxDQUFiLENBQWxCLEVBQW9DLElBQXBDO0FBQ0EsR0FYRDtBQVlBLEVBYkQ7O0FBZUFKLFVBQVUsY0FBVixFQUEwQixZQUFPO0FBQ2hDQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdENKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxFQUFMLENBQWQsRUFBMEIsS0FBMUI7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQUMsVUFBVSwyQkFBVixFQUF1QyxZQUFPO0FBQzdDQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckNKLFVBQU9LLEtBQVAsQ0FBY0gsSUFBSyxPQUFMLEVBQWMsT0FBZCxDQUFkLEVBQXVDLElBQXZDO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUFDLFVBQVUsMkJBQVYsRUFBdUMsWUFBTztBQUM3Q0MsS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDSixVQUFPSyxLQUFQLENBQWNILElBQUssT0FBTCxFQUFjLE9BQWQsQ0FBZCxFQUF1QyxLQUF2QztBQUNBLEdBRkQ7QUFHQSxFQUpEOztBQU1BLENBL0NEOztBQWlEQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWVuXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImVlbi90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWVuLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwiZWVuXCI6IFwiZWVuXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiLi9lZW4uc3VwcG9ydC5qc1wiICk7XHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5cclxuZGVzY3JpYmUoIFwiZWVuXCIsICggKSA9PiB7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBlZW4oIFsgMSwgMiwgMyBdLCAyIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVlbiggWyAxLCAyLCAzIF0sIDIgKSwgdHJ1ZSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYCFlZW4oIFsgMSwgMiwgMyBdLCA0IClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoICFlZW4oIFsgMSwgMiwgMyBdLCA0ICksIHRydWUgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBlZW4gd2l0aCB2YWx1ZSBhbmQgY29tcGFyYXRvcmBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHNvdXJjZSA9IFsgMSwgMiwgMywgNyBdO1xyXG5cdFx0XHRsZXQgdGFyZ2V0ID0gWyAxLCAyLCAzLCA0LCA1LCA2IF07XHJcblxyXG5cdFx0XHRzb3VyY2UuZm9yRWFjaCggKCB2YWx1ZSApID0+IHtcclxuXHRcdFx0XHQhZWVuKCB0YXJnZXQsIHZhbHVlLCAoIGVsZW1lbnQsIHZhbHVlICkgPT4gZXFlKCBlbGVtZW50LCB2YWx1ZSApICkgJiZcclxuXHRcdFx0XHR0YXJnZXQucHVzaCggdmFsdWUgKTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggZWVuKCB0YXJnZXQsIDcgKSwgdHJ1ZSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGVlbiggWyBdIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlZW4oIFsgXSApLCBmYWxzZSApO1xyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGVlbiggJ2hlbGxvJywgJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBlZW4oIFwiaGVsbG9cIiwgXCJoZWxsb1wiICksIHRydWUgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBlZW4oICdoZWxsbycsICd3b3JsZCcgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGVlbiggXCJoZWxsb1wiLCBcIndvcmxkXCIgKSwgZmFsc2UgKTtcclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG59ICk7XHJcblxyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG4iXX0=
//# sourceMappingURL=test.support.js.map
