require("../../../../exploded");

var compareResourceEME = require("../../parser/BaseParserTest").compareResourceEME;

exports.testCallback = function(test) {
	compareResourceEME(test, "annotations/callback.pec");
};

exports.testCategory = function(test) {
	compareResourceEME(test, "annotations/category.pec");
};

