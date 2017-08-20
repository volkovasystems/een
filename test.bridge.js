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





//: @bridge:
var path = require("path");
//: @end-bridge





//: @bridge:

describe("een", function () {

	var testBridge = path.resolve(__dirname, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("een", function () {

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

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJlZW4iLCJlcXVhbCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7QUFNQTs7QUFFQUUsU0FBVSxLQUFWLEVBQWlCLFlBQU87O0FBRXZCLEtBQU1DLGFBQWFGLEtBQUtHLE9BQUwsQ0FBYUMsU0FBYixFQUF3QixhQUF4QixDQUFuQjtBQUNBLEtBQU1DLFlBQVksWUFBWUgsVUFBOUI7O0FBRUFELFVBQVUsS0FBVixFQUFpQixZQUFPOztBQUV2QkEsV0FBVSx5QkFBVixFQUFxQyxZQUFPO0FBQzNDSyxNQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckMsUUFBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsSUFBSyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFMLEVBQWtCLENBQWxCLENBQVAsRUFBbEMsQ0FBYjtBQUNBYixXQUFPYyxLQUFQLENBQWNMLE9BQU9NLEtBQXJCLEVBQTRCLElBQTVCO0FBQ0EsSUFIRDtBQUlBLEdBTEQ7O0FBT0FaLFdBQVUsMEJBQVYsRUFBc0MsWUFBTztBQUM1Q0ssTUFBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDLFFBQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekIsQ0FBa0Msb0JBQU8sQ0FBQ0MsSUFBSyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUFMLEVBQWtCLENBQWxCLENBQVIsRUFBbEMsQ0FBYjtBQUNBYixXQUFPYyxLQUFQLENBQWNMLE9BQU9NLEtBQXJCLEVBQTRCLElBQTVCO0FBQ0EsSUFIRDtBQUlBLEdBTEQ7O0FBT0FaLFdBQVUsY0FBVixFQUEwQixZQUFPO0FBQ2hDSyxNQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdEMsUUFBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsSUFBSyxFQUFMLENBQVAsRUFBbEMsQ0FBYjtBQUNBYixXQUFPYyxLQUFQLENBQWNMLE9BQU9NLEtBQXJCLEVBQTRCLEtBQTVCO0FBQ0EsSUFIRDtBQUlBLEdBTEQ7O0FBT0FaLFdBQVUsMkJBQVYsRUFBdUMsWUFBTztBQUM3Q0ssTUFBSSx5QkFBSixFQUErQixZQUFPO0FBQ3JDLFFBQUlDLFNBQVNDLFFBQVFDLEdBQVIsQ0FBYUosU0FBYixFQUF5QkssT0FBekIsQ0FBa0Msb0JBQU9DLElBQUssT0FBTCxFQUFjLE9BQWQsQ0FBUCxFQUFsQyxDQUFiO0FBQ0FiLFdBQU9jLEtBQVAsQ0FBY0wsT0FBT00sS0FBckIsRUFBNEIsSUFBNUI7QUFDQSxJQUhEO0FBSUEsR0FMRDs7QUFPQVosV0FBVSwyQkFBVixFQUF1QyxZQUFPO0FBQzdDSyxNQUFJLDBCQUFKLEVBQWdDLFlBQU87QUFDdEMsUUFBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsSUFBSyxPQUFMLEVBQWMsT0FBZCxDQUFQLEVBQWxDLENBQWI7QUFDQWIsV0FBT2MsS0FBUCxDQUFjTCxPQUFPTSxLQUFyQixFQUE0QixLQUE1QjtBQUNBLElBSEQ7QUFJQSxHQUxEOztBQU9BLEVBckNEOztBQXVDQSxDQTVDRDs7QUE4Q0EiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWVuXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImVlbi90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWVuLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwiZWVuXCI6IFwiZWVuXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5cclxuZGVzY3JpYmUoIFwiZWVuXCIsICggKSA9PiB7XHJcblxyXG5cdGNvbnN0IHRlc3RCcmlkZ2UgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIpO1xyXG5cdGNvbnN0IGJyaWRnZVVSTCA9IFwiZmlsZTovL1wiICsgdGVzdEJyaWRnZTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiZWVuXCIsICggKSA9PiB7XHJcblxyXG5cdFx0ZGVzY3JpYmUoIFwiYGVlbiggWyAxLCAyLCAzIF0sIDIgKWBcIiwgKCApID0+IHtcclxuXHRcdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcclxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBlZW4oIFsgMSwgMiwgMyBdLCAyICkgKTtcclxuXHRcdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC52YWx1ZSwgdHJ1ZSApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0ZGVzY3JpYmUoIFwiYCFlZW4oIFsgMSwgMiwgMyBdLCA0IClgXCIsICggKSA9PiB7XHJcblx0XHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gIWVlbiggWyAxLCAyLCAzIF0sIDQgKSApO1xyXG5cdFx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XHJcblx0XHRcdH0gKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRkZXNjcmliZSggXCJgZWVuKCBbIF0gKWBcIiwgKCApID0+IHtcclxuXHRcdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XHJcblx0XHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZWVuKCBbIF0gKSApO1xyXG5cdFx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0ZGVzY3JpYmUoIFwiYGVlbiggJ2hlbGxvJywgJ2hlbGxvJyApYFwiLCAoICkgPT4ge1xyXG5cdFx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVlbiggXCJoZWxsb1wiLCBcImhlbGxvXCIgKSApO1xyXG5cdFx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCB0cnVlICk7XHJcblx0XHRcdH0gKTtcclxuXHRcdH0gKTtcclxuXHJcblx0XHRkZXNjcmliZSggXCJgZWVuKCAnaGVsbG8nLCAnd29ybGQnIClgXCIsICggKSA9PiB7XHJcblx0XHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGVlbiggXCJoZWxsb1wiLCBcIndvcmxkXCIgKSApO1xyXG5cdFx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LnZhbHVlLCBmYWxzZSApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdH0gKTtcclxuXHJcbn0gKTtcclxuXHJcbi8vOiBAZW5kLWJyaWRnZVxyXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
