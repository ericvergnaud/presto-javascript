var compareResourceOMO = require("../../parser/BaseParserTest").compareResourceOMO;

test('ReactWidgetProps1', () => {
	compareResourceOMO('annotations/ReactWidgetProps1.poc');
});

test('ReactWidgetProps2', () => {
	compareResourceOMO('annotations/ReactWidgetProps2.poc');
});

test('WidgetField', () => {
	compareResourceOMO('annotations/WidgetField.poc');
});

test('WidgetProps1', () => {
	compareResourceOMO('annotations/WidgetProps1.poc');
});

test('WidgetProps2', () => {
	compareResourceOMO('annotations/WidgetProps2.poc');
});

test('Callback', () => {
	compareResourceOMO('annotations/callback.poc');
});

test('Category', () => {
	compareResourceOMO('annotations/category.poc');
});

