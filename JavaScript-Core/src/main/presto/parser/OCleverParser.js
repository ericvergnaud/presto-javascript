var fs = require("fs");
var antlr4 = require("antlr4");
var ONamingLexer = require("./ONamingLexer").ONamingLexer;
var OParser = require("./OParser").OParser;
var OopsPrestoBuilder = require("./OPrestoBuilder").OPrestoBuilder;

function createInput(input) {
	if(typeof(input)==='string' || input instanceof String) {
		if(fs.existsSync(input)) {
			input = new antlr4.FileStream(input);
		} else {
			input = new antlr4.InputStream(input);
		}
	}
	if(input instanceof antlr4.InputStream) {
		input = new ONamingLexer(input);
	}
	if(input instanceof antlr4.Lexer) {
		input = new antlr4.CommonTokenStream(input);
	}
	return input;
}

function OCleverParser(input) {
	OParser.call(this,createInput(input));
	this.path = "";
	return this;
}

OCleverParser.prototype = Object.create(OParser.prototype);
OCleverParser.prototype.constructor = OCleverParser;

OCleverParser.prototype.parse = function() {
	return this.parse_declaration_list();
};

OCleverParser.prototype.parse_declaration_list = function() {
	var tree = this.declaration_list();
	var builder = new OopsPrestoBuilder(this);
	var walker = new antlr4.tree.ParseTreeWalker();
	walker.walk(builder, tree);
	return builder.getNodeValue(tree);
};

OCleverParser.prototype.equalToken = function() {
	return OParser.EQUAL;
};

exports.OCleverParser = OCleverParser;