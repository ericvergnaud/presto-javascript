import { ATN, CharStream, DFA, Lexer } from "antlr4";
export default class ELexer extends Lexer {
    static readonly INDENT = 1;
    static readonly DEDENT = 2;
    static readonly LF_TAB = 3;
    static readonly LF_MORE = 4;
    static readonly LF = 5;
    static readonly TAB = 6;
    static readonly WS = 7;
    static readonly COMMENT = 8;
    static readonly JAVA = 9;
    static readonly CSHARP = 10;
    static readonly PYTHON2 = 11;
    static readonly PYTHON3 = 12;
    static readonly JAVASCRIPT = 13;
    static readonly SWIFT = 14;
    static readonly COLON = 15;
    static readonly SEMI = 16;
    static readonly COMMA = 17;
    static readonly RANGE = 18;
    static readonly DOT = 19;
    static readonly LPAR = 20;
    static readonly RPAR = 21;
    static readonly LBRAK = 22;
    static readonly RBRAK = 23;
    static readonly LCURL = 24;
    static readonly RCURL = 25;
    static readonly QMARK = 26;
    static readonly XMARK = 27;
    static readonly AMP = 28;
    static readonly AMP2 = 29;
    static readonly PIPE = 30;
    static readonly PIPE2 = 31;
    static readonly PLUS = 32;
    static readonly MINUS = 33;
    static readonly STAR = 34;
    static readonly SLASH = 35;
    static readonly BSLASH = 36;
    static readonly PERCENT = 37;
    static readonly SHARP = 38;
    static readonly GT = 39;
    static readonly GTE = 40;
    static readonly LT = 41;
    static readonly LTE = 42;
    static readonly LTGT = 43;
    static readonly LTCOLONGT = 44;
    static readonly EQ = 45;
    static readonly XEQ = 46;
    static readonly EQ2 = 47;
    static readonly TEQ = 48;
    static readonly TILDE = 49;
    static readonly LARROW = 50;
    static readonly RARROW = 51;
    static readonly EGT = 52;
    static readonly BOOLEAN = 53;
    static readonly CSS = 54;
    static readonly CHARACTER = 55;
    static readonly TEXT = 56;
    static readonly INTEGER = 57;
    static readonly DECIMAL = 58;
    static readonly DATE = 59;
    static readonly TIME = 60;
    static readonly DATETIME = 61;
    static readonly PERIOD = 62;
    static readonly VERSION = 63;
    static readonly METHOD_COLON = 64;
    static readonly CODE = 65;
    static readonly DOCUMENT = 66;
    static readonly BLOB = 67;
    static readonly IMAGE = 68;
    static readonly UUID = 69;
    static readonly DBID = 70;
    static readonly ITERATOR = 71;
    static readonly CURSOR = 72;
    static readonly HTML = 73;
    static readonly TYPE = 74;
    static readonly ABSTRACT = 75;
    static readonly ALL = 76;
    static readonly ALWAYS = 77;
    static readonly AND = 78;
    static readonly ANY = 79;
    static readonly AS = 80;
    static readonly ASC = 81;
    static readonly ATTR = 82;
    static readonly ATTRIBUTE = 83;
    static readonly ATTRIBUTES = 84;
    static readonly BINDINGS = 85;
    static readonly BREAK = 86;
    static readonly BY = 87;
    static readonly CASE = 88;
    static readonly CATCH = 89;
    static readonly CATEGORY = 90;
    static readonly CLASS = 91;
    static readonly CONTAINS = 92;
    static readonly DEF = 93;
    static readonly DEFAULT = 94;
    static readonly DEFINE = 95;
    static readonly DELETE = 96;
    static readonly DESC = 97;
    static readonly DO = 98;
    static readonly DOING = 99;
    static readonly EACH = 100;
    static readonly ELSE = 101;
    static readonly ENUM = 102;
    static readonly ENUMERATED = 103;
    static readonly EXCEPT = 104;
    static readonly EXECUTE = 105;
    static readonly EXPECTING = 106;
    static readonly EXTENDS = 107;
    static readonly FETCH = 108;
    static readonly FILTERED = 109;
    static readonly FINALLY = 110;
    static readonly FLUSH = 111;
    static readonly FOR = 112;
    static readonly FROM = 113;
    static readonly GETTER = 114;
    static readonly HAS = 115;
    static readonly IF = 116;
    static readonly IN = 117;
    static readonly INCLUDE = 118;
    static readonly INDEX = 119;
    static readonly INVOKE_COLON = 120;
    static readonly IS = 121;
    static readonly MATCHING = 122;
    static readonly METHOD = 123;
    static readonly METHODS = 124;
    static readonly MODULO = 125;
    static readonly MUTABLE = 126;
    static readonly NATIVE = 127;
    static readonly NONE = 128;
    static readonly NOT = 129;
    static readonly NOTHING = 130;
    static readonly NULL = 131;
    static readonly ON = 132;
    static readonly ONE = 133;
    static readonly OPERATOR = 134;
    static readonly OR = 135;
    static readonly ORDER = 136;
    static readonly OTHERWISE = 137;
    static readonly PASS = 138;
    static readonly RAISE = 139;
    static readonly READ = 140;
    static readonly RECEIVING = 141;
    static readonly RESOURCE = 142;
    static readonly RETURN = 143;
    static readonly RETURNING = 144;
    static readonly ROWS = 145;
    static readonly SELF = 146;
    static readonly SETTER = 147;
    static readonly SINGLETON = 148;
    static readonly SORTED = 149;
    static readonly STORABLE = 150;
    static readonly STORE = 151;
    static readonly SUPER = 152;
    static readonly SWITCH = 153;
    static readonly TEST = 154;
    static readonly THEN = 155;
    static readonly THIS = 156;
    static readonly THROW = 157;
    static readonly TO = 158;
    static readonly TRY = 159;
    static readonly VERIFYING = 160;
    static readonly WIDGET = 161;
    static readonly WITH = 162;
    static readonly WHEN = 163;
    static readonly WHERE = 164;
    static readonly WHILE = 165;
    static readonly WRITE = 166;
    static readonly BOOLEAN_LITERAL = 167;
    static readonly CHAR_LITERAL = 168;
    static readonly MIN_INTEGER = 169;
    static readonly MAX_INTEGER = 170;
    static readonly SYMBOL_IDENTIFIER = 171;
    static readonly TYPE_IDENTIFIER = 172;
    static readonly VARIABLE_IDENTIFIER = 173;
    static readonly NATIVE_IDENTIFIER = 174;
    static readonly DOLLAR_IDENTIFIER = 175;
    static readonly ARONDBASE_IDENTIFIER = 176;
    static readonly TEXT_LITERAL = 177;
    static readonly UUID_LITERAL = 178;
    static readonly VERSION_LITERAL = 179;
    static readonly INTEGER_LITERAL = 180;
    static readonly HEXA_LITERAL = 181;
    static readonly DECIMAL_LITERAL = 182;
    static readonly DATETIME_LITERAL = 183;
    static readonly TIME_LITERAL = 184;
    static readonly DATE_LITERAL = 185;
    static readonly PERIOD_LITERAL = 186;
    static readonly JSX_TEXT = 187;
    static readonly EOF: number;
    static readonly channelNames: string[];
    static readonly literalNames: string[];
    static readonly symbolicNames: string[];
    static readonly modeNames: string[];
    static readonly ruleNames: string[];
    constructor(input: CharStream);
    get grammarFileName(): string;
    get literalNames(): (string | null)[];
    get symbolicNames(): (string | null)[];
    get ruleNames(): string[];
    get serializedATN(): number[];
    get channelNames(): string[];
    get modeNames(): string[];
    static readonly _serializedATN: number[];
    private static __ATN;
    static get _ATN(): ATN;
    static DecisionsToDFA: DFA[];
}
