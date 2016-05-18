require("../../../../exploded");

var Out = require("../utils/Out").Out;
var checkOutput = require("../../parser/BaseEParserTest").checkOutput;

exports.setUp = function(done) {
	Out.init();
	done();
};

exports.tearDown = function(done) {
	Out.restore();
	done();
};

exports.testFlush = function(test) {
	checkOutput(test, "store/flush.pec");
};

exports.testListRecords = function(test) {
	checkOutput(test, "store/listRecords.pec");
};

exports.testManyRecords = function(test) {
	checkOutput(test, "store/manyRecords.pec");
};

exports.testSimpleRecord = function(test) {
	checkOutput(test, "store/simpleRecord.pec");
};

exports.testSlicedRecords = function(test) {
	checkOutput(test, "store/slicedRecords.pec");
};

exports.testSortedRecords = function(test) {
	checkOutput(test, "store/sortedRecords.pec");
};

exports.testSubRecord = function(test) {
	checkOutput(test, "store/subRecord.pec");
};

