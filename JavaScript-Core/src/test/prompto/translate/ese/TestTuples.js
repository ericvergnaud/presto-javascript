// generated: 2015-07-05T23:01:02.224
require("../../../../exploded");

var compareResourceESE = require("../../parser/BaseParserTest").compareResourceESE;

exports.testMultiAssignment = function(test) {
	compareResourceESE(test, "tuples/multiAssignment.pec");
};

exports.testSingleAssignment = function(test) {
	compareResourceESE(test, "tuples/singleAssignment.pec");
};

exports.testTupleElement = function(test) {
	compareResourceESE(test, "tuples/tupleElement.pec");
};
