// generated: 2015-07-05T23:01:01.996
require("../../../../exploded");

var compareResourceESE = require("../../parser/BaseParserTest").compareResourceESE;

exports.testAutoDowncast = function(test) {
	compareResourceESE(test, "cast/autoDowncast.pec");
};

exports.testCastChild = function(test) {
	compareResourceESE(test, "cast/castChild.pec");
};

exports.testIsAChild = function(test) {
	compareResourceESE(test, "cast/isAChild.pec");
};

exports.testIsAText = function(test) {
	compareResourceESE(test, "cast/isAText.pec");
};
