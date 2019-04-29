var compareResourceEME = require("../../parser/BaseParserTest").compareResourceEME;

test('ReadResource', () => {
	compareResourceEME('resource/readResource.pec');
});

test('ReadWithResource', () => {
	compareResourceEME('resource/readWithResource.pec');
});

test('WriteResource', () => {
	compareResourceEME('resource/writeResource.pec');
});

test('WriteWithResource', () => {
	compareResourceEME('resource/writeWithResource.pec');
});

