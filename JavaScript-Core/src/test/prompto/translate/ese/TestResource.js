require("../../../../exploded");

var compareResourceESE = require("../../parser/BaseParserTest").compareResourceESE;

exports.testReadResource = function(test) {
	compareResourceESE(test, "resource/readResource.pec");
};

exports.testReadWithResource = function(test) {
	compareResourceESE(test, "resource/readWithResource.pec");
};

exports.testWriteResource = function(test) {
	compareResourceESE(test, "resource/writeResource.pec");
};

exports.testWriteWithResource = function(test) {
	compareResourceESE(test, "resource/writeWithResource.pec");
};

