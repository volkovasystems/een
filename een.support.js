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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/een.git",
              			"test": "een-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Checks if array contains the given value.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"kein": "kein",
              			"protype": "protype",
              			"stringe": "stringe",
              			"truly": "truly"
              		}
              	@end-include
              */

var doubt = require("doubt");
var kein = require("kein");
var protype = require("protype");
var stringe = require("stringe");
var truly = require("truly");


//: @reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Array.prototype.some = Array.prototype.some || function (evaluator, thisArg) {"use strict";
	if (!this) throw new TypeError("Array.prototype.some called on null or undefined");
	if ("function" != typeof evaluator) {if ("string" != typeof evaluator) throw new TypeError();
		if (!(evaluator = eval(evaluator))) throw new TypeError();}var i;
	if (void 0 === thisArg) {for (i in this) {if (evaluator(this[i], i, this)) return !0;}return !1;}
	for (i in this) {if (evaluator.call(thisArg, this[i], i, this)) return !0;}return !1;};


var een = function een(array, value, comparator) {
	/*;
                                                  	@meta-configuration:
                                                  		{
                                                  			"array:required": "Array",
                                                  			"value:required": "*",
                                                  			"comparator": "function"
                                                  		}
                                                  	@end-meta-configuration
                                                  */

	if (!doubt(array, AS_ARRAY)) {
		throw new Error("invalid array");
	}

	if (truly(comparator) && !protype(comparator, FUNCTION)) {
		throw new Error("invalid comparator");
	}

	comparator = comparator || function comparator(item, value) {
		if (protype(item, OBJECT) && kein("toString", item) && kein("toString", value)) {
			return stringe(item) === stringe(value) || item === value;
		}

		return item === value;
	};

	return array.some(function (item, index) {
		return comparator(item, value, index);
	});
};

module.exports = een;

//# sourceMappingURL=een.support.js.map