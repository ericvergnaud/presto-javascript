var path = require("path");
var prompto = require("../index"); // prompto
var antlr4 = require("antlr4");
var Out = require("../runtime/utils/Out").Out;
var fs = require("fs");

function getResourcesFolder() {
	var prompto = module.filename;
	while(path.basename(prompto).indexOf("prompto-")!=0) {
		var parent = path.dirname(prompto);
        if(parent==prompto)
            throw "Could not find prompto root!";
        prompto = parent;
	}
    prompto = path.dirname(prompto);
	return path.normalize(prompto + path.sep + "prompto-tests" + path.sep + "Tests" + path.sep + "resources");
}

var resourcesFolder = getResourcesFolder();

exports.getResource = function(fileName) {
	fileName = fileName.replace("/", path.sep);
	fileName = path.normalize(resourcesFolder + path.sep + fileName);
	return new antlr4.FileStream(fileName);
};

function getResourceAsString(fileName) {
    fileName = fileName.replace("/", path.sep);
    fileName = path.normalize(resourcesFolder + path.sep + fileName);
    return fs.readFileSync(fileName).toString();
}

function readExpected(fileName) {
	var idx = fileName.lastIndexOf('.');
	fileName = fileName.substring(0, idx) + ".txt";
	fileName = fileName.replace("/", path.sep);
	fileName = path.normalize(resourcesFolder + path.sep + fileName);
	var all = fs.readFileSync(fileName).toString();
	return all.split("\n");
}

exports.checkSameOutput = function(test, resource) {
	var read = Out.read();
	var expected = readExpected(resource);
	if(expected.length===1) {
		test.equal(read, expected[0]);
	} else {
		for(var idx=0;idx<expected.length;idx++) {
			if(read===expected[idx])
				return;
		}
		test.equal(read, expected[0]); // to get a display
	}
};

function parseEString(input) {
    var parser = new prompto.parser.ECleverParser(input);
    return parser.parse();
}

function parseOString(input) {
    var parser = new prompto.parser.OCleverParser(input);
    return parser.parse();
}

function parseSString(input) {
    var parser = new prompto.parser.SCleverParser(input);
    return parser.parse();
}

function assertEquivalent(test, expected, actual) {
    expected = removeWhitespace(expected).replace("modulo","%");
    actual = removeWhitespace(actual).replace("modulo","%");
    test.equal(actual, expected);
}

function removeWhitespace(s) {
    s = replaceAll(s, "\n", "");
    s = replaceAll(s, "\t", "")
    s = replaceAll(s, " ", "");
    return s;
}

function replaceAll(s, a, b) {
    return s.split(a).join(b);
}

exports.compareResourceEOE = function(test, resourceName) {
    var expected = getResourceAsString(resourceName);
    // console.log(expected);
    // parse e source code
    var dle = parseEString(expected);
    var context = prompto.runtime.Context.newGlobalContext();
    dle.register(context);
    // rewrite as o
    var writer = new prompto.utils.CodeWriter(prompto.parser.Dialect.O, context);
    dle.toDialect(writer);
    var o = writer.toString();
    // console.log(o);
    // parse o source code
    var dlo = parseOString(o);
    context = prompto.runtime.Context.newGlobalContext();
    dlo.register(context);
    // rewrite as e
    writer = new prompto.utils.CodeWriter(prompto.parser.Dialect.E, context);
    dlo.toDialect(writer);
    var actual = writer.toString();
    // console.log(actual);
    // ensure equivalent
    assertEquivalent(test, expected, actual);
    test.done();
};

exports.compareResourceESE = function(test, resourceName) {
    var expected = getResourceAsString(resourceName);
    // console.log(expected);
    // parse e source code
    var dle = parseEString(expected);
    var context = prompto.runtime.Context.newGlobalContext();
    dle.register(context);
    // rewrite as o
    var writer = new prompto.utils.CodeWriter(prompto.parser.Dialect.S, context);
    dle.toDialect(writer);
    var p = writer.toString();
    // console.log(p);
    // parse p source code
    var dlp = parseSString(p);
    context = prompto.runtime.Context.newGlobalContext();
    dlp.register(context);
    // rewrite as e
    writer = new prompto.utils.CodeWriter(prompto.parser.Dialect.E, context);
    dlp.toDialect(writer);
    var actual = writer.toString();
    // console.log(actual);
    // ensure equivalent
    assertEquivalent(test, expected, actual);
    test.done();
};

exports.compareResourceOEO = function(test, resourceName) {
    var expected = getResourceAsString(resourceName);
    // console.log(expected);
    // parse o source code
    var dlo = parseOString(expected);
    var context = prompto.runtime.Context.newGlobalContext();
    dlo.register(context);
    // rewrite as e
    var writer = new prompto.utils.CodeWriter(prompto.parser.Dialect.E, context);
    dlo.toDialect(writer);
    var e = writer.toString();
    // console.log(e);
    // parse e source code
    var dle = parseEString(e);
    context = prompto.runtime.Context.newGlobalContext();
    dle.register(context);
    // rewrite as o
    writer = new prompto.utils.CodeWriter(prompto.parser.Dialect.O, context);
    dle.toDialect(writer);
    var actual = writer.toString();
    // console.log(actual);
    // ensure equivalent
    assertEquivalent(test, expected, actual);
    test.done();
};


exports.compareResourceOSO = function(test, resourceName) {
    var expected = getResourceAsString(resourceName);
    // console.log(expected);
    // parse o source code
    var dlo = parseOString(expected);
    var context = prompto.runtime.Context.newGlobalContext();
    dlo.register(context);
    // rewrite as p
    var writer = new prompto.utils.CodeWriter(prompto.parser.Dialect.S, context);
    dlo.toDialect(writer);
    var p = writer.toString();
    // console.log(p);
    // parse p source code
    var dlp = parseSString(p);
    context = prompto.runtime.Context.newGlobalContext();
    dlp.register(context);
    // rewrite as o
    writer = new prompto.utils.CodeWriter(prompto.parser.Dialect.O, context);
    dlp.toDialect(writer);
    var actual = writer.toString();
    // console.log(actual);
    // ensure equivalent
    assertEquivalent(test, expected, actual);
    test.done();
};