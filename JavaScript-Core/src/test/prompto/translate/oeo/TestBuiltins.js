require("../../../../exploded");

var compareResourceOEO = require("../../parser/BaseParserTest").compareResourceOEO;

exports.testDateDayOfMonth = function(test) {
	compareResourceOEO(test, "builtins/dateDayOfMonth.poc");
};

exports.testDateDayOfYear = function(test) {
	compareResourceOEO(test, "builtins/dateDayOfYear.poc");
};

exports.testDateMonth = function(test) {
	compareResourceOEO(test, "builtins/dateMonth.poc");
};

exports.testDateTimeDayOfMonth = function(test) {
	compareResourceOEO(test, "builtins/dateTimeDayOfMonth.poc");
};

exports.testDateTimeDayOfYear = function(test) {
	compareResourceOEO(test, "builtins/dateTimeDayOfYear.poc");
};

exports.testDateTimeHour = function(test) {
	compareResourceOEO(test, "builtins/dateTimeHour.poc");
};

exports.testDateTimeMinute = function(test) {
	compareResourceOEO(test, "builtins/dateTimeMinute.poc");
};

exports.testDateTimeMonth = function(test) {
	compareResourceOEO(test, "builtins/dateTimeMonth.poc");
};

exports.testDateTimeSecond = function(test) {
	compareResourceOEO(test, "builtins/dateTimeSecond.poc");
};

exports.testDateTimeTZName = function(test) {
	compareResourceOEO(test, "builtins/dateTimeTZName.poc");
};

exports.testDateTimeTZOffset = function(test) {
	compareResourceOEO(test, "builtins/dateTimeTZOffset.poc");
};

exports.testDateTimeYear = function(test) {
	compareResourceOEO(test, "builtins/dateTimeYear.poc");
};

exports.testDateYear = function(test) {
	compareResourceOEO(test, "builtins/dateYear.poc");
};

exports.testDictCount = function(test) {
	compareResourceOEO(test, "builtins/dictCount.poc");
};

exports.testEnumName = function(test) {
	compareResourceOEO(test, "builtins/enumName.poc");
};

exports.testEnumSymbols = function(test) {
	compareResourceOEO(test, "builtins/enumSymbols.poc");
};

exports.testEnumValue = function(test) {
	compareResourceOEO(test, "builtins/enumValue.poc");
};

exports.testListCount = function(test) {
	compareResourceOEO(test, "builtins/listCount.poc");
};

exports.testSetCount = function(test) {
	compareResourceOEO(test, "builtins/setCount.poc");
};

exports.testTextCount = function(test) {
	compareResourceOEO(test, "builtins/textCount.poc");
};

exports.testTimeHour = function(test) {
	compareResourceOEO(test, "builtins/timeHour.poc");
};

exports.testTimeMinute = function(test) {
	compareResourceOEO(test, "builtins/timeMinute.poc");
};

exports.testTimeSecond = function(test) {
	compareResourceOEO(test, "builtins/timeSecond.poc");
};

exports.testTupleCount = function(test) {
	compareResourceOEO(test, "builtins/tupleCount.poc");
};

