require("../../../../exploded");

var Out = require("../utils/Out").Out;
var checkInterpretedOutput = require("../../parser/BaseOParserTest").checkInterpretedOutput;

var checkTranspiledOutput = require("../../parser/BaseOParserTest").checkTranspiledOutput;

exports.setUp = function(done) {
	Out.init();
	done();
};

exports.tearDown = function(done) {
	Out.restore();
	done();
};

exports.testInterpretedForEachExpression = function(test) {
	checkInterpretedOutput(test, "iterate/forEachExpression.poc");
};

exports.testTranspiledForEachExpression = function(test) {
	checkTranspiledOutput(test, "iterate/forEachExpression.poc");
};

exports.testInterpretedForEachIntegerList = function(test) {
	checkInterpretedOutput(test, "iterate/forEachIntegerList.poc");
};

exports.testTranspiledForEachIntegerList = function(test) {
	checkTranspiledOutput(test, "iterate/forEachIntegerList.poc");
};

