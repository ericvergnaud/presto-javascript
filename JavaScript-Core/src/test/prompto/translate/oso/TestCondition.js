// generated: 2015-07-05T23:01:02.016
require("../../../../exploded");

var compareResourceOSO = require("../../parser/BaseParserTest").compareResourceOSO;

exports.testComplexIf = function(test) {
	compareResourceOSO(test, "condition/complexIf.poc");
};

exports.testElseIf = function(test) {
	compareResourceOSO(test, "condition/elseIf.poc");
};

exports.testReturnIf = function(test) {
	compareResourceOSO(test, "condition/returnIf.poc");
};

exports.testSimpleIf = function(test) {
	compareResourceOSO(test, "condition/simpleIf.poc");
};

exports.testSwitch = function(test) {
	compareResourceOSO(test, "condition/switch.poc");
};

exports.testTernary = function(test) {
	compareResourceOSO(test, "condition/ternary.poc");
};
