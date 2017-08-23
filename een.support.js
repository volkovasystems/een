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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVlbi5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImVxZSIsInJlcXVpcmUiLCJyYXplIiwidHJ1bHkiLCJlZW4iLCJhcnJheSIsInZhbHVlIiwiY29tcGFyYXRvciIsIkVycm9yIiwiZWxlbWVudCIsInNvbWUiLCJpbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REEsSUFBTUEsTUFBTUMsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1HLE1BQU0sU0FBU0EsR0FBVCxDQUFjQyxLQUFkLEVBQXFCQyxLQUFyQixFQUE0QkMsVUFBNUIsRUFBd0M7QUFDbkQ7Ozs7Ozs7Ozs7QUFVQSxLQUFJSixNQUFPSSxVQUFQLEtBQXVCLE9BQU9BLFVBQVAsSUFBcUIsVUFBaEQsRUFBNEQ7QUFDM0QsUUFBTSxJQUFJQyxLQUFKLENBQVcsb0JBQVgsQ0FBTjtBQUNBOztBQUVESCxTQUFRSCxLQUFNRyxLQUFOLENBQVI7O0FBRUFFLGNBQWFBLGNBQWdCLFVBQUVFLE9BQUYsRUFBV0gsS0FBWCxVQUFzQk4sSUFBS1MsT0FBTCxFQUFjSCxLQUFkLENBQXRCLEVBQTdCOztBQUVBLFFBQU9ELE1BQU1LLElBQU4sQ0FBWSxVQUFFRCxPQUFGLEVBQVdFLEtBQVgsVUFBc0JKLFdBQVlFLE9BQVosRUFBcUJILEtBQXJCLEVBQTRCSyxLQUE1QixDQUF0QixFQUFaLENBQVA7QUFDQSxDQXBCRDs7QUFzQkFDLE9BQU9DLE9BQVAsR0FBaUJULEdBQWpCIiwiZmlsZSI6ImVlbi5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlZW5cIixcblx0XHRcdFwicGF0aFwiOiBcImVlbi9lZW4uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImVlbi5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlZW5cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Vlbi5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVlbi10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENoZWNrcyBpZiBhcnJheSBjb250YWlucyB0aGUgZ2l2ZW4gdmFsdWUuXG5cblx0XHREZWZhdWx0IGNvbXBhcmF0b3IgZG9lcyBzaGFsbG93IGNvbXBhcmlzb24gb25seS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBlcWUgPSByZXF1aXJlKCBcImVxZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5cbmNvbnN0IGVlbiA9IGZ1bmN0aW9uIGVlbiggYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiYXJyYXk6cmVxdWlyZWRcIjogQXJyYXksXG5cdFx0XHRcdFwidmFsdWU6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFwiY29tcGFyYXRvclwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0cnVseSggY29tcGFyYXRvciApICYmIHR5cGVvZiBjb21wYXJhdG9yICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNvbXBhcmF0b3JcIiApO1xuXHR9XG5cblx0YXJyYXkgPSByYXplKCBhcnJheSApO1xuXG5cdGNvbXBhcmF0b3IgPSBjb21wYXJhdG9yIHx8ICggKCBlbGVtZW50LCB2YWx1ZSApID0+IGVxZSggZWxlbWVudCwgdmFsdWUgKSApO1xuXG5cdHJldHVybiBhcnJheS5zb21lKCAoIGVsZW1lbnQsIGluZGV4ICkgPT4gY29tcGFyYXRvciggZWxlbWVudCwgdmFsdWUsIGluZGV4ICkgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZWVuO1xuIl19
//# sourceMappingURL=een.support.js.map
