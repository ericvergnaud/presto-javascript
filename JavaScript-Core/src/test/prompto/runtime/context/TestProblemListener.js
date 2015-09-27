require("../../../../exploded");
var checkProblems = require("../../parser/BaseEParserTest").checkProblems;

exports.testNoError = function(test) {
    var code = "define name as: Text attribute\n";
    checkProblems(test, code);
};

exports.testSyntaxError = function(test) {
    var code = "define id as: Text attribute\n" +
               "define name as";
    checkProblems(test, code, "no viable alternative at input 'define name as<EOF>'");
};

exports.testDuplicateAttribute = function(test) {
    var code = "define name as: Text attribute\n" +
        "define name as: Text attribute\n";
    checkProblems(test, code, "Duplicate name: name");
};

exports.testDuplicateCategory = function(test) {
    var code = "define name as: Text attribute\n" +
        "define Person as: category with attribute: name\n" +
        "define Person as: category with attribute: name\n";
    checkProblems(test, code, "Duplicate name: Person");
};

exports.testDuplicateTest = function(test) {
    var code = "define \"find id\" as: test method doing:\n" +
                "\ta = 0\n" +
                "and expecting:\n" +
                "\ta = 0\n" +
                "define \"find id\" as: test method doing:\n" +
                "\ta = 0\n" +
                "and expecting:\n" +
                "\ta = 0\n";
    checkProblems(test, code, "Duplicate name: \"find id\"");
};


exports.testDuplicateMethod = function(test) {
    var code = "define print as: method doing:\n" +
            "\treturn 0\n" +
            "define print as: method doing:\n" +
            "\treturn 0\n";
    checkProblems(test, code, "Duplicate name: print");
};

exports.testNonDuplicateMethod = function(test) {
    var code = "define print as: method doing:\n" +
        "\treturn 0\n" +
        "define print as: method receiving: Text t doing:\n" +
        "\treturn 0\n";
    checkProblems(test, code);
};

exports.testUnknownCategory = function(test) {
    var code = "define customer as: Customer attribute\n";
    checkProblems(test, code, "Unknown category: Customer");
};

exports.testKnownCategory = function(test) {
    var code = "define customer as: Text attribute\n";
    checkProblems(test, code);
};

exports.testUnknownAttribute = function(test) {
    var code = "define Customer as: category with attribute: cool\n";
    checkProblems(test, code, "Unknown attribute: cool");
};

exports.testKnownAttribute = function(test) {
    var code = "define name as: Text attribute\n" +
        "define Customer as: category with attribute: name\n";
    checkProblems(test, code);
};

exports.testUnknownMethod = function(test) {
    var code = "define m as: method doing:\n" +
        "\tprint \"abc\"\n";
    checkProblems(test, code, "Unknown method: print");
};

exports.testKnownMethod = function(test) {
    var code = "define print as: method receiving: Text value doing:\n" +
        "\ta = 3\n" +
        "define m as: method doing:\n" +
        "\tprint \"abc\"\n";
    checkProblems(test, code);
};

exports.testNoMatchingPrototype = function(test) {
    var code = "define print as: method receiving: Text value doing:\n" +
        "\ta = 3\n" +
        "define m2 as: method doing:\n" +
        "\tprint 22\n";
    checkProblems(test, code, "No matching prototype for: print 22");
};

exports.testNoMatchingPrototype2 = function(test) {
    var code = "define name as: Text attribute\n" +
        "define Customer as: category with attribute: name\n" +
        "define print as: method receiving: Text value doing:\n" +
        "\ta = 3\n" +
        "define printCustomer as: method receiving: Customer c doing:\n" +
        "\tprint c\n";
    checkProblems(test, code, "No matching prototype for: print c");
};

exports.testMatchingPrototype = function(test) {
    var code = "define print as: method receiving: Text value doing:\n" +
        "\ta = 3\n" +
        "define m2 as: method doing:\n" +
        "\tprint \"abc\"\n";
    checkProblems(test, code);
};