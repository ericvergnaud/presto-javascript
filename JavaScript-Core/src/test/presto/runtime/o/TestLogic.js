require("../../../../exploded");

var Out = require("../utils/Out").Out;
var checkOutput = require("../../parser/BaseOParserTest").checkOutput;

exports.setUp = function(done) {
	Out.init();
	done();
};

exports.tearDown = function(done) {
	Out.restore();
	done();
};

exports.testAndBoolean = function(test) {
	checkOutput(test, "logic/andBoolean.o");
};

exports.testNotBoolean = function(test) {
	checkOutput(test, "logic/notBoolean.o");
};

exports.testOrBoolean = function(test) {
	checkOutput(test, "logic/orBoolean.o");
};

