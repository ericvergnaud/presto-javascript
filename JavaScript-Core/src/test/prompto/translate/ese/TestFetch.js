require("../../../../exploded");

var compareResourceESE = require("../../parser/BaseParserTest").compareResourceESE;

exports.testFetchFromList = function(test) {
	compareResourceESE(test, "fetch/fetchFromList.pec");
};

exports.testFetchFromSet = function(test) {
	compareResourceESE(test, "fetch/fetchFromSet.pec");
};

