require("../../../../exploded");

var compareResourceESE = require("../../parser/BaseParserTest").compareResourceESE;

exports.testAttribute = function(test) {
	compareResourceESE(test, "native/attribute.pec");
};

exports.testCategory = function(test) {
	compareResourceESE(test, "native/category.pec");
};

exports.testMethod = function(test) {
	compareResourceESE(test, "native/method.pec");
};

exports.testPrinter = function(test) {
	compareResourceESE(test, "native/printer.pec");
};

exports.testReturn = function(test) {
	compareResourceESE(test, "native/return.pec");
};

