var Out = require("../utils/Out").Out;
var checkInterpretedOutput = require("../../parser/BaseOParserTest").checkInterpretedOutput;
var checkTranspiledOutput = require("../../parser/BaseOParserTest").checkTranspiledOutput;

beforeEach( () => {
	Out.init();
});

afterEach( () => {
	Out.restore();
});

test('Interpreted CopyFromAscendant', () => {
	checkInterpretedOutput('categories/copyFromAscendant.poc');
});

test('Transpiled CopyFromAscendant', () => {
	checkTranspiledOutput('categories/copyFromAscendant.poc');
});

test('Interpreted CopyFromAscendantWithOverride', () => {
	checkInterpretedOutput('categories/copyFromAscendantWithOverride.poc');
});

test('Transpiled CopyFromAscendantWithOverride', () => {
	checkTranspiledOutput('categories/copyFromAscendantWithOverride.poc');
});

test('Interpreted CopyFromDescendant', () => {
	checkInterpretedOutput('categories/copyFromDescendant.poc');
});

test('Transpiled CopyFromDescendant', () => {
	checkTranspiledOutput('categories/copyFromDescendant.poc');
});

test('Interpreted CopyFromDescendantWithOverride', () => {
	checkInterpretedOutput('categories/copyFromDescendantWithOverride.poc');
});

test('Transpiled CopyFromDescendantWithOverride', () => {
	checkTranspiledOutput('categories/copyFromDescendantWithOverride.poc');
});

test('Interpreted CopyFromDocument', () => {
	checkInterpretedOutput('categories/copyFromDocument.poc');
});

test('Transpiled CopyFromDocument', () => {
	checkTranspiledOutput('categories/copyFromDocument.poc');
});

test('Interpreted CopyFromStored', () => {
	checkInterpretedOutput('categories/copyFromStored.poc');
});

test('Transpiled CopyFromStored', () => {
	checkTranspiledOutput('categories/copyFromStored.poc');
});
