var compareResourceEOE = require("../../parser/BaseParserTest").compareResourceEOE;

test('Attribute', () => {
	compareResourceEOE('singleton/attribute.pec');
});

test('Member', () => {
	compareResourceEOE('singleton/member.pec');
});

