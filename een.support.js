"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "een",
              			"path": "een/een.js",
              			"file": "een.js",
              			"module": "een",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/een.git",
              			"test": "een-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Checks if array contains the given value.
              
              		Default comparator does shallow comparison only.
              	@end-module-documentation
              
              	@include:
              		{
              			"eqe": "eqe",
              			"raze": "raze",
              			"truly": "truly"
              		}
              	@end-include
              */

var eqe = require("eqe");
var raze = require("raze");
var truly = require("truly");

var een = function een(array, value, comparator) {
	/*;
                                                  	@meta-configuration:
                                                  		{
                                                  			"array:required": Array,
                                                  			"value:required": "*",
                                                  			"comparator": "function"
                                                  		}
                                                  	@end-meta-configuration
                                                  */

	if (truly(comparator) && typeof comparator != "function") {
		throw new Error("invalid comparator");
	}

	array = raze(array);

	comparator = comparator || function (element, value) {return eqe(element, value);};

	return array.some(function (element, index) {return comparator(element, value, index);});
};

module.exports = een;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVlbi5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImVxZSIsInJlcXVpcmUiLCJyYXplIiwidHJ1bHkiLCJlZW4iLCJhcnJheSIsInZhbHVlIiwiY29tcGFyYXRvciIsIkVycm9yIiwiZWxlbWVudCIsInNvbWUiLCJpbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsSUFBTUEsTUFBTUMsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1HLE1BQU0sU0FBU0EsR0FBVCxDQUFjQyxLQUFkLEVBQXFCQyxLQUFyQixFQUE0QkMsVUFBNUIsRUFBd0M7QUFDbkQ7Ozs7Ozs7Ozs7QUFVQSxLQUFJSixNQUFPSSxVQUFQLEtBQXVCLE9BQU9BLFVBQVAsSUFBcUIsVUFBaEQsRUFBNEQ7QUFDM0QsUUFBTSxJQUFJQyxLQUFKLENBQVcsb0JBQVgsQ0FBTjtBQUNBOztBQUVESCxTQUFRSCxLQUFNRyxLQUFOLENBQVI7O0FBRUFFLGNBQWFBLGNBQWdCLFVBQUVFLE9BQUYsRUFBV0gsS0FBWCxVQUFzQk4sSUFBS1MsT0FBTCxFQUFjSCxLQUFkLENBQXRCLEVBQTdCOztBQUVBLFFBQU9ELE1BQU1LLElBQU4sQ0FBWSxVQUFFRCxPQUFGLEVBQVdFLEtBQVgsVUFBc0JKLFdBQVlFLE9BQVosRUFBcUJILEtBQXJCLEVBQTRCSyxLQUE1QixDQUF0QixFQUFaLENBQVA7QUFDQSxDQXBCRDs7QUFzQkFDLE9BQU9DLE9BQVAsR0FBaUJULEdBQWpCIiwiZmlsZSI6ImVlbi5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImVlblwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJlZW4vZWVuLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcImVlbi5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVlblwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9lZW4uZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcImVlbi10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdENoZWNrcyBpZiBhcnJheSBjb250YWlucyB0aGUgZ2l2ZW4gdmFsdWUuXHJcblxyXG5cdFx0RGVmYXVsdCBjb21wYXJhdG9yIGRvZXMgc2hhbGxvdyBjb21wYXJpc29uIG9ubHkuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJlcWVcIjogXCJlcWVcIixcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZXFlID0gcmVxdWlyZSggXCJlcWVcIiApO1xyXG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcclxuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcclxuXHJcbmNvbnN0IGVlbiA9IGZ1bmN0aW9uIGVlbiggYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJhcnJheTpyZXF1aXJlZFwiOiBBcnJheSxcclxuXHRcdFx0XHRcInZhbHVlOnJlcXVpcmVkXCI6IFwiKlwiLFxyXG5cdFx0XHRcdFwiY29tcGFyYXRvclwiOiBcImZ1bmN0aW9uXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggdHJ1bHkoIGNvbXBhcmF0b3IgKSAmJiB0eXBlb2YgY29tcGFyYXRvciAhPSBcImZ1bmN0aW9uXCIgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNvbXBhcmF0b3JcIiApO1xyXG5cdH1cclxuXHJcblx0YXJyYXkgPSByYXplKCBhcnJheSApO1xyXG5cclxuXHRjb21wYXJhdG9yID0gY29tcGFyYXRvciB8fCAoICggZWxlbWVudCwgdmFsdWUgKSA9PiBlcWUoIGVsZW1lbnQsIHZhbHVlICkgKTtcclxuXHJcblx0cmV0dXJuIGFycmF5LnNvbWUoICggZWxlbWVudCwgaW5kZXggKSA9PiBjb21wYXJhdG9yKCBlbGVtZW50LCB2YWx1ZSwgaW5kZXggKSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBlZW47XHJcbiJdfQ==
//# sourceMappingURL=een.support.js.map
