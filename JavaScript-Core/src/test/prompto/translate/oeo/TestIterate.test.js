var compareResourceOEO = require("../../parser/BaseParserTest").compareResourceOEO;

test('ForEachExpression', () => {
	compareResourceOEO('iterate/forEachExpression.poc');
});

test('ForEachIntegerList', () => {
	compareResourceOEO('iterate/forEachIntegerList.poc');
});
