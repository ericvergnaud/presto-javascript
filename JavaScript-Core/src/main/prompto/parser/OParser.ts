// Generated from OParser.g4 by ANTLR 4.11.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import OParserListener from "./OParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import AbstractParser from './AbstractParser';

export default class OParser extends AbstractParser {
	public static readonly SPACE = 1;
	public static readonly WS = 2;
	public static readonly LF = 3;
	public static readonly COMMENT = 4;
	public static readonly JAVA = 5;
	public static readonly CSHARP = 6;
	public static readonly PYTHON2 = 7;
	public static readonly PYTHON3 = 8;
	public static readonly JAVASCRIPT = 9;
	public static readonly SWIFT = 10;
	public static readonly COLON = 11;
	public static readonly SEMI = 12;
	public static readonly COMMA = 13;
	public static readonly RANGE = 14;
	public static readonly DOT = 15;
	public static readonly LPAR = 16;
	public static readonly RPAR = 17;
	public static readonly LBRAK = 18;
	public static readonly RBRAK = 19;
	public static readonly LCURL = 20;
	public static readonly RCURL = 21;
	public static readonly QMARK = 22;
	public static readonly XMARK = 23;
	public static readonly AMP = 24;
	public static readonly AMP2 = 25;
	public static readonly PIPE = 26;
	public static readonly PIPE2 = 27;
	public static readonly PLUS = 28;
	public static readonly MINUS = 29;
	public static readonly STAR = 30;
	public static readonly SLASH = 31;
	public static readonly BSLASH = 32;
	public static readonly PERCENT = 33;
	public static readonly SHARP = 34;
	public static readonly GT = 35;
	public static readonly GTE = 36;
	public static readonly LT = 37;
	public static readonly LTE = 38;
	public static readonly LTGT = 39;
	public static readonly LTCOLONGT = 40;
	public static readonly EQ = 41;
	public static readonly XEQ = 42;
	public static readonly EQ2 = 43;
	public static readonly TEQ = 44;
	public static readonly TILDE = 45;
	public static readonly LARROW = 46;
	public static readonly RARROW = 47;
	public static readonly EGT = 48;
	public static readonly BOOLEAN = 49;
	public static readonly CSS = 50;
	public static readonly CHARACTER = 51;
	public static readonly TEXT = 52;
	public static readonly INTEGER = 53;
	public static readonly DECIMAL = 54;
	public static readonly DATE = 55;
	public static readonly TIME = 56;
	public static readonly DATETIME = 57;
	public static readonly PERIOD = 58;
	public static readonly VERSION = 59;
	public static readonly METHOD_COLON = 60;
	public static readonly CODE = 61;
	public static readonly DOCUMENT = 62;
	public static readonly BLOB = 63;
	public static readonly IMAGE = 64;
	public static readonly UUID = 65;
	public static readonly DBID = 66;
	public static readonly ITERATOR = 67;
	public static readonly CURSOR = 68;
	public static readonly HTML = 69;
	public static readonly TYPE = 70;
	public static readonly ABSTRACT = 71;
	public static readonly ALL = 72;
	public static readonly ALWAYS = 73;
	public static readonly AND = 74;
	public static readonly ANY = 75;
	public static readonly AS = 76;
	public static readonly ASC = 77;
	public static readonly ATTR = 78;
	public static readonly ATTRIBUTE = 79;
	public static readonly ATTRIBUTES = 80;
	public static readonly BINDINGS = 81;
	public static readonly BREAK = 82;
	public static readonly BY = 83;
	public static readonly CASE = 84;
	public static readonly CATCH = 85;
	public static readonly CATEGORY = 86;
	public static readonly CLASS = 87;
	public static readonly CONTAINS = 88;
	public static readonly DEF = 89;
	public static readonly DEFAULT = 90;
	public static readonly DEFINE = 91;
	public static readonly DELETE = 92;
	public static readonly DESC = 93;
	public static readonly DO = 94;
	public static readonly DOING = 95;
	public static readonly EACH = 96;
	public static readonly ELSE = 97;
	public static readonly ENUM = 98;
	public static readonly ENUMERATED = 99;
	public static readonly EXCEPT = 100;
	public static readonly EXECUTE = 101;
	public static readonly EXPECTING = 102;
	public static readonly EXTENDS = 103;
	public static readonly FETCH = 104;
	public static readonly FILTERED = 105;
	public static readonly FINALLY = 106;
	public static readonly FLUSH = 107;
	public static readonly FOR = 108;
	public static readonly FROM = 109;
	public static readonly GETTER = 110;
	public static readonly HAS = 111;
	public static readonly IF = 112;
	public static readonly IN = 113;
	public static readonly INCLUDE = 114;
	public static readonly INDEX = 115;
	public static readonly INVOKE_COLON = 116;
	public static readonly IS = 117;
	public static readonly MATCHING = 118;
	public static readonly METHOD = 119;
	public static readonly METHODS = 120;
	public static readonly MODULO = 121;
	public static readonly MUTABLE = 122;
	public static readonly NATIVE = 123;
	public static readonly NONE = 124;
	public static readonly NOT = 125;
	public static readonly NOTHING = 126;
	public static readonly NULL = 127;
	public static readonly ON = 128;
	public static readonly ONE = 129;
	public static readonly OPERATOR = 130;
	public static readonly OR = 131;
	public static readonly ORDER = 132;
	public static readonly OTHERWISE = 133;
	public static readonly PASS = 134;
	public static readonly RAISE = 135;
	public static readonly READ = 136;
	public static readonly RECEIVING = 137;
	public static readonly RESOURCE = 138;
	public static readonly RETURN = 139;
	public static readonly RETURNING = 140;
	public static readonly ROWS = 141;
	public static readonly SELF = 142;
	public static readonly SETTER = 143;
	public static readonly SINGLETON = 144;
	public static readonly SORTED = 145;
	public static readonly STORABLE = 146;
	public static readonly STORE = 147;
	public static readonly SUPER = 148;
	public static readonly SWITCH = 149;
	public static readonly TEST = 150;
	public static readonly THEN = 151;
	public static readonly THIS = 152;
	public static readonly THROW = 153;
	public static readonly TO = 154;
	public static readonly TRY = 155;
	public static readonly VERIFYING = 156;
	public static readonly WIDGET = 157;
	public static readonly WITH = 158;
	public static readonly WHEN = 159;
	public static readonly WHERE = 160;
	public static readonly WHILE = 161;
	public static readonly WRITE = 162;
	public static readonly BOOLEAN_LITERAL = 163;
	public static readonly CHAR_LITERAL = 164;
	public static readonly MIN_INTEGER = 165;
	public static readonly MAX_INTEGER = 166;
	public static readonly SYMBOL_IDENTIFIER = 167;
	public static readonly TYPE_IDENTIFIER = 168;
	public static readonly VARIABLE_IDENTIFIER = 169;
	public static readonly NATIVE_IDENTIFIER = 170;
	public static readonly DOLLAR_IDENTIFIER = 171;
	public static readonly ARONDBASE_IDENTIFIER = 172;
	public static readonly TEXT_LITERAL = 173;
	public static readonly UUID_LITERAL = 174;
	public static readonly VERSION_LITERAL = 175;
	public static readonly INTEGER_LITERAL = 176;
	public static readonly HEXA_LITERAL = 177;
	public static readonly DECIMAL_LITERAL = 178;
	public static readonly DATETIME_LITERAL = 179;
	public static readonly TIME_LITERAL = 180;
	public static readonly DATE_LITERAL = 181;
	public static readonly PERIOD_LITERAL = 182;
	public static readonly JSX_TEXT = 183;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_enum_category_declaration = 0;
	public static readonly RULE_enum_native_declaration = 1;
	public static readonly RULE_category_symbol = 2;
	public static readonly RULE_native_symbol = 3;
	public static readonly RULE_attribute_declaration = 4;
	public static readonly RULE_concrete_widget_declaration = 5;
	public static readonly RULE_native_widget_declaration = 6;
	public static readonly RULE_concrete_category_declaration = 7;
	public static readonly RULE_singleton_category_declaration = 8;
	public static readonly RULE_derived_list = 9;
	public static readonly RULE_category_method_list = 10;
	public static readonly RULE_operator_method_declaration = 11;
	public static readonly RULE_setter_method_declaration = 12;
	public static readonly RULE_native_setter_declaration = 13;
	public static readonly RULE_getter_method_declaration = 14;
	public static readonly RULE_native_getter_declaration = 15;
	public static readonly RULE_native_resource_declaration = 16;
	public static readonly RULE_native_category_declaration = 17;
	public static readonly RULE_native_category_bindings = 18;
	public static readonly RULE_native_category_binding_list = 19;
	public static readonly RULE_abstract_global_method_declaration = 20;
	public static readonly RULE_abstract_member_method_declaration = 21;
	public static readonly RULE_concrete_method_declaration = 22;
	public static readonly RULE_native_method_declaration = 23;
	public static readonly RULE_test_method_declaration = 24;
	public static readonly RULE_assertion = 25;
	public static readonly RULE_typed_argument = 26;
	public static readonly RULE_statement_or_list = 27;
	public static readonly RULE_statement = 28;
	public static readonly RULE_flush_statement = 29;
	public static readonly RULE_store_statement = 30;
	public static readonly RULE_with_resource_statement = 31;
	public static readonly RULE_with_singleton_statement = 32;
	public static readonly RULE_switch_statement = 33;
	public static readonly RULE_switch_case_statement = 34;
	public static readonly RULE_for_each_statement = 35;
	public static readonly RULE_do_while_statement = 36;
	public static readonly RULE_while_statement = 37;
	public static readonly RULE_if_statement = 38;
	public static readonly RULE_else_if_statement_list = 39;
	public static readonly RULE_raise_statement = 40;
	public static readonly RULE_try_statement = 41;
	public static readonly RULE_catch_statement = 42;
	public static readonly RULE_break_statement = 43;
	public static readonly RULE_return_statement = 44;
	public static readonly RULE_method_call_expression = 45;
	public static readonly RULE_method_call_statement = 46;
	public static readonly RULE_x_expression = 47;
	public static readonly RULE_expression = 48;
	public static readonly RULE_filter_expression = 49;
	public static readonly RULE_an_expression = 50;
	public static readonly RULE_type_expression = 51;
	public static readonly RULE_selectable_expression = 52;
	public static readonly RULE_instance_expression = 53;
	public static readonly RULE_mutable_instance_expression = 54;
	public static readonly RULE_method_expression = 55;
	public static readonly RULE_blob_expression = 56;
	public static readonly RULE_document_expression = 57;
	public static readonly RULE_write_statement = 58;
	public static readonly RULE_filtered_list_expression = 59;
	public static readonly RULE_fetch_expression = 60;
	public static readonly RULE_fetch_statement = 61;
	public static readonly RULE_then = 62;
	public static readonly RULE_read_statement = 63;
	public static readonly RULE_sorted_expression = 64;
	public static readonly RULE_instance_selector = 65;
	public static readonly RULE_constructor_expression = 66;
	public static readonly RULE_copy_from = 67;
	public static readonly RULE_argument_assignment_list = 68;
	public static readonly RULE_argument_assignment = 69;
	public static readonly RULE_assign_instance_statement = 70;
	public static readonly RULE_child_instance = 71;
	public static readonly RULE_assign_tuple_statement = 72;
	public static readonly RULE_type_literal = 73;
	public static readonly RULE_null_literal = 74;
	public static readonly RULE_ws_plus = 75;
	public static readonly RULE_repl = 76;
	public static readonly RULE_declaration_list = 77;
	public static readonly RULE_declarations = 78;
	public static readonly RULE_declaration = 79;
	public static readonly RULE_annotation_constructor = 80;
	public static readonly RULE_annotation_identifier = 81;
	public static readonly RULE_annotation_argument = 82;
	public static readonly RULE_annotation_argument_name = 83;
	public static readonly RULE_annotation_argument_value = 84;
	public static readonly RULE_resource_declaration = 85;
	public static readonly RULE_enum_declaration = 86;
	public static readonly RULE_native_symbol_list = 87;
	public static readonly RULE_category_symbol_list = 88;
	public static readonly RULE_symbol_list = 89;
	public static readonly RULE_attribute_constraint = 90;
	public static readonly RULE_list_literal = 91;
	public static readonly RULE_set_literal = 92;
	public static readonly RULE_expression_list = 93;
	public static readonly RULE_range_literal = 94;
	public static readonly RULE_typedef = 95;
	public static readonly RULE_primary_type = 96;
	public static readonly RULE_native_type = 97;
	public static readonly RULE_category_type = 98;
	public static readonly RULE_mutable_category_type = 99;
	public static readonly RULE_code_type = 100;
	public static readonly RULE_category_declaration = 101;
	public static readonly RULE_widget_declaration = 102;
	public static readonly RULE_type_identifier_list = 103;
	public static readonly RULE_method_identifier = 104;
	public static readonly RULE_identifier_or_keyword = 105;
	public static readonly RULE_nospace_hyphen_identifier_or_keyword = 106;
	public static readonly RULE_nospace_identifier_or_keyword = 107;
	public static readonly RULE_identifier = 108;
	public static readonly RULE_member_identifier = 109;
	public static readonly RULE_variable_identifier = 110;
	public static readonly RULE_attribute_identifier = 111;
	public static readonly RULE_type_identifier = 112;
	public static readonly RULE_symbol_identifier = 113;
	public static readonly RULE_argument_list = 114;
	public static readonly RULE_argument = 115;
	public static readonly RULE_operator_argument = 116;
	public static readonly RULE_named_argument = 117;
	public static readonly RULE_code_argument = 118;
	public static readonly RULE_category_or_any_type = 119;
	public static readonly RULE_any_type = 120;
	public static readonly RULE_member_method_declaration_list = 121;
	public static readonly RULE_member_method_declaration = 122;
	public static readonly RULE_native_member_method_declaration_list = 123;
	public static readonly RULE_native_member_method_declaration = 124;
	public static readonly RULE_native_category_binding = 125;
	public static readonly RULE_python_category_binding = 126;
	public static readonly RULE_python_module = 127;
	public static readonly RULE_javascript_category_binding = 128;
	public static readonly RULE_javascript_module = 129;
	public static readonly RULE_variable_identifier_list = 130;
	public static readonly RULE_attribute_identifier_list = 131;
	public static readonly RULE_method_declaration = 132;
	public static readonly RULE_comment_statement = 133;
	public static readonly RULE_native_statement_list = 134;
	public static readonly RULE_native_statement = 135;
	public static readonly RULE_python_native_statement = 136;
	public static readonly RULE_javascript_native_statement = 137;
	public static readonly RULE_statement_list = 138;
	public static readonly RULE_assertion_list = 139;
	public static readonly RULE_switch_case_statement_list = 140;
	public static readonly RULE_catch_statement_list = 141;
	public static readonly RULE_literal_collection = 142;
	public static readonly RULE_atomic_literal = 143;
	public static readonly RULE_literal_list_literal = 144;
	public static readonly RULE_this_expression = 145;
	public static readonly RULE_super_expression = 146;
	public static readonly RULE_parenthesis_expression = 147;
	public static readonly RULE_literal_expression = 148;
	public static readonly RULE_collection_literal = 149;
	public static readonly RULE_tuple_literal = 150;
	public static readonly RULE_dict_literal = 151;
	public static readonly RULE_document_literal = 152;
	public static readonly RULE_expression_tuple = 153;
	public static readonly RULE_doc_entry_list = 154;
	public static readonly RULE_doc_entry = 155;
	public static readonly RULE_doc_key = 156;
	public static readonly RULE_dict_entry_list = 157;
	public static readonly RULE_dict_entry = 158;
	public static readonly RULE_dict_key = 159;
	public static readonly RULE_slice_arguments = 160;
	public static readonly RULE_assign_variable_statement = 161;
	public static readonly RULE_assignable_instance = 162;
	public static readonly RULE_is_expression = 163;
	public static readonly RULE_metadata = 164;
	public static readonly RULE_arrow_expression = 165;
	public static readonly RULE_arrow_prefix = 166;
	public static readonly RULE_arrow_args = 167;
	public static readonly RULE_sorted_key = 168;
	public static readonly RULE_read_blob_expression = 169;
	public static readonly RULE_read_all_expression = 170;
	public static readonly RULE_read_one_expression = 171;
	public static readonly RULE_order_by_list = 172;
	public static readonly RULE_order_by = 173;
	public static readonly RULE_include_list = 174;
	public static readonly RULE_operator = 175;
	public static readonly RULE_keyword = 176;
	public static readonly RULE_new_token = 177;
	public static readonly RULE_key_token = 178;
	public static readonly RULE_module_token = 179;
	public static readonly RULE_value_token = 180;
	public static readonly RULE_symbols_token = 181;
	public static readonly RULE_assign = 182;
	public static readonly RULE_multiply = 183;
	public static readonly RULE_divide = 184;
	public static readonly RULE_idivide = 185;
	public static readonly RULE_modulo = 186;
	public static readonly RULE_lfs = 187;
	public static readonly RULE_lfp = 188;
	public static readonly RULE_javascript_statement = 189;
	public static readonly RULE_javascript_expression = 190;
	public static readonly RULE_javascript_primary_expression = 191;
	public static readonly RULE_javascript_this_expression = 192;
	public static readonly RULE_javascript_new_expression = 193;
	public static readonly RULE_javascript_selector_expression = 194;
	public static readonly RULE_javascript_method_expression = 195;
	public static readonly RULE_javascript_arguments = 196;
	public static readonly RULE_javascript_item_expression = 197;
	public static readonly RULE_javascript_parenthesis_expression = 198;
	public static readonly RULE_javascript_identifier_expression = 199;
	public static readonly RULE_javascript_literal_expression = 200;
	public static readonly RULE_javascript_identifier = 201;
	public static readonly RULE_python_statement = 202;
	public static readonly RULE_python_expression = 203;
	public static readonly RULE_python_primary_expression = 204;
	public static readonly RULE_python_self_expression = 205;
	public static readonly RULE_python_selector_expression = 206;
	public static readonly RULE_python_method_expression = 207;
	public static readonly RULE_python_argument_list = 208;
	public static readonly RULE_python_ordinal_argument_list = 209;
	public static readonly RULE_python_named_argument_list = 210;
	public static readonly RULE_python_parenthesis_expression = 211;
	public static readonly RULE_python_identifier_expression = 212;
	public static readonly RULE_python_literal_expression = 213;
	public static readonly RULE_python_identifier = 214;
	public static readonly RULE_java_statement = 215;
	public static readonly RULE_java_expression = 216;
	public static readonly RULE_java_primary_expression = 217;
	public static readonly RULE_java_this_expression = 218;
	public static readonly RULE_java_new_expression = 219;
	public static readonly RULE_java_selector_expression = 220;
	public static readonly RULE_java_method_expression = 221;
	public static readonly RULE_java_arguments = 222;
	public static readonly RULE_java_item_expression = 223;
	public static readonly RULE_java_parenthesis_expression = 224;
	public static readonly RULE_java_identifier_expression = 225;
	public static readonly RULE_java_class_identifier_expression = 226;
	public static readonly RULE_java_literal_expression = 227;
	public static readonly RULE_java_identifier = 228;
	public static readonly RULE_csharp_statement = 229;
	public static readonly RULE_csharp_expression = 230;
	public static readonly RULE_csharp_primary_expression = 231;
	public static readonly RULE_csharp_this_expression = 232;
	public static readonly RULE_csharp_new_expression = 233;
	public static readonly RULE_csharp_selector_expression = 234;
	public static readonly RULE_csharp_method_expression = 235;
	public static readonly RULE_csharp_arguments = 236;
	public static readonly RULE_csharp_item_expression = 237;
	public static readonly RULE_csharp_parenthesis_expression = 238;
	public static readonly RULE_csharp_identifier_expression = 239;
	public static readonly RULE_csharp_literal_expression = 240;
	public static readonly RULE_csharp_identifier = 241;
	public static readonly RULE_jsx_expression = 242;
	public static readonly RULE_jsx_element = 243;
	public static readonly RULE_jsx_fragment = 244;
	public static readonly RULE_jsx_fragment_start = 245;
	public static readonly RULE_jsx_fragment_end = 246;
	public static readonly RULE_jsx_self_closing = 247;
	public static readonly RULE_jsx_opening = 248;
	public static readonly RULE_jsx_closing = 249;
	public static readonly RULE_jsx_element_name = 250;
	public static readonly RULE_jsx_identifier = 251;
	public static readonly RULE_jsx_attribute = 252;
	public static readonly RULE_jsx_attribute_value = 253;
	public static readonly RULE_jsx_children = 254;
	public static readonly RULE_jsx_child = 255;
	public static readonly RULE_jsx_text = 256;
	public static readonly RULE_jsx_char = 257;
	public static readonly RULE_css_expression = 258;
	public static readonly RULE_css_field = 259;
	public static readonly RULE_css_identifier = 260;
	public static readonly RULE_css_value = 261;
	public static readonly RULE_css_text = 262;
	public static readonly literalNames: string[] = [ null, "' '", null, null, 
                                                   null, "'Java:'", "'C#:'", 
                                                   "'Python2:'", "'Python3:'", 
                                                   "'JavaScript:'", "'Swift:'", 
                                                   "':'", "';'", null, "'..'", 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   "'!'", "'&'", "'&&'", 
                                                   "'|'", "'||'", null, 
                                                   "'-'", "'*'", "'/'", 
                                                   "'\\'", "'%'", "'#'", 
                                                   "'>'", "'>='", "'<'", 
                                                   "'<='", "'<>'", "'<:>'", 
                                                   "'='", "'!='", "'=='", 
                                                   "'~='", "'~'", "'<-'", 
                                                   "'->'", "'=>'", "'Boolean'", 
                                                   "'Css'", "'Character'", 
                                                   "'Text'", "'Integer'", 
                                                   "'Decimal'", "'Date'", 
                                                   "'Time'", "'DateTime'", 
                                                   "'Period'", "'Version'", 
                                                   "'Method:'", "'Code'", 
                                                   "'Document'", "'Blob'", 
                                                   "'Image'", "'Uuid'", 
                                                   "'DbId'", "'Iterator'", 
                                                   "'Cursor'", "'Html'", 
                                                   "'Type'", "'abstract'", 
                                                   "'all'", "'always'", 
                                                   "'and'", "'any'", "'as'", 
                                                   null, "'attr'", "'attribute'", 
                                                   "'attributes'", "'bindings'", 
                                                   "'break'", "'by'", "'case'", 
                                                   "'catch'", "'category'", 
                                                   "'class'", "'contains'", 
                                                   "'def'", "'default'", 
                                                   "'define'", "'delete'", 
                                                   null, "'do'", "'doing'", 
                                                   "'each'", "'else'", "'enum'", 
                                                   "'enumerated'", "'except'", 
                                                   "'execute'", "'expecting'", 
                                                   "'extends'", "'fetch'", 
                                                   "'filtered'", "'finally'", 
                                                   "'flush'", "'for'", "'from'", 
                                                   "'getter'", "'has'", 
                                                   "'if'", "'in'", "'include'", 
                                                   "'index'", "'invoke:'", 
                                                   "'is'", "'matching'", 
                                                   "'method'", "'methods'", 
                                                   "'modulo'", "'mutable'", 
                                                   "'native'", "'None'", 
                                                   "'not'", null, "'null'", 
                                                   "'on'", "'one'", "'operator'", 
                                                   "'or'", "'order'", "'otherwise'", 
                                                   "'pass'", "'raise'", 
                                                   "'read'", "'receiving'", 
                                                   "'resource'", "'return'", 
                                                   "'returning'", "'rows'", 
                                                   "'self'", "'setter'", 
                                                   "'singleton'", "'sorted'", 
                                                   "'storable'", "'store'", 
                                                   "'super'", "'switch'", 
                                                   "'test'", "'then'", "'this'", 
                                                   "'throw'", "'to'", "'try'", 
                                                   "'verifying'", "'widget'", 
                                                   "'with'", "'when'", "'where'", 
                                                   "'while'", "'write'", 
                                                   null, null, "'MIN_INTEGER'", 
                                                   "'MAX_INTEGER'" ];
	public static readonly symbolicNames: string[] = [ null, "SPACE", "WS", 
                                                    "LF", "COMMENT", "JAVA", 
                                                    "CSHARP", "PYTHON2", 
                                                    "PYTHON3", "JAVASCRIPT", 
                                                    "SWIFT", "COLON", "SEMI", 
                                                    "COMMA", "RANGE", "DOT", 
                                                    "LPAR", "RPAR", "LBRAK", 
                                                    "RBRAK", "LCURL", "RCURL", 
                                                    "QMARK", "XMARK", "AMP", 
                                                    "AMP2", "PIPE", "PIPE2", 
                                                    "PLUS", "MINUS", "STAR", 
                                                    "SLASH", "BSLASH", "PERCENT", 
                                                    "SHARP", "GT", "GTE", 
                                                    "LT", "LTE", "LTGT", 
                                                    "LTCOLONGT", "EQ", "XEQ", 
                                                    "EQ2", "TEQ", "TILDE", 
                                                    "LARROW", "RARROW", 
                                                    "EGT", "BOOLEAN", "CSS", 
                                                    "CHARACTER", "TEXT", 
                                                    "INTEGER", "DECIMAL", 
                                                    "DATE", "TIME", "DATETIME", 
                                                    "PERIOD", "VERSION", 
                                                    "METHOD_COLON", "CODE", 
                                                    "DOCUMENT", "BLOB", 
                                                    "IMAGE", "UUID", "DBID", 
                                                    "ITERATOR", "CURSOR", 
                                                    "HTML", "TYPE", "ABSTRACT", 
                                                    "ALL", "ALWAYS", "AND", 
                                                    "ANY", "AS", "ASC", 
                                                    "ATTR", "ATTRIBUTE", 
                                                    "ATTRIBUTES", "BINDINGS", 
                                                    "BREAK", "BY", "CASE", 
                                                    "CATCH", "CATEGORY", 
                                                    "CLASS", "CONTAINS", 
                                                    "DEF", "DEFAULT", "DEFINE", 
                                                    "DELETE", "DESC", "DO", 
                                                    "DOING", "EACH", "ELSE", 
                                                    "ENUM", "ENUMERATED", 
                                                    "EXCEPT", "EXECUTE", 
                                                    "EXPECTING", "EXTENDS", 
                                                    "FETCH", "FILTERED", 
                                                    "FINALLY", "FLUSH", 
                                                    "FOR", "FROM", "GETTER", 
                                                    "HAS", "IF", "IN", "INCLUDE", 
                                                    "INDEX", "INVOKE_COLON", 
                                                    "IS", "MATCHING", "METHOD", 
                                                    "METHODS", "MODULO", 
                                                    "MUTABLE", "NATIVE", 
                                                    "NONE", "NOT", "NOTHING", 
                                                    "NULL", "ON", "ONE", 
                                                    "OPERATOR", "OR", "ORDER", 
                                                    "OTHERWISE", "PASS", 
                                                    "RAISE", "READ", "RECEIVING", 
                                                    "RESOURCE", "RETURN", 
                                                    "RETURNING", "ROWS", 
                                                    "SELF", "SETTER", "SINGLETON", 
                                                    "SORTED", "STORABLE", 
                                                    "STORE", "SUPER", "SWITCH", 
                                                    "TEST", "THEN", "THIS", 
                                                    "THROW", "TO", "TRY", 
                                                    "VERIFYING", "WIDGET", 
                                                    "WITH", "WHEN", "WHERE", 
                                                    "WHILE", "WRITE", "BOOLEAN_LITERAL", 
                                                    "CHAR_LITERAL", "MIN_INTEGER", 
                                                    "MAX_INTEGER", "SYMBOL_IDENTIFIER", 
                                                    "TYPE_IDENTIFIER", "VARIABLE_IDENTIFIER", 
                                                    "NATIVE_IDENTIFIER", 
                                                    "DOLLAR_IDENTIFIER", 
                                                    "ARONDBASE_IDENTIFIER", 
                                                    "TEXT_LITERAL", "UUID_LITERAL", 
                                                    "VERSION_LITERAL", "INTEGER_LITERAL", 
                                                    "HEXA_LITERAL", "DECIMAL_LITERAL", 
                                                    "DATETIME_LITERAL", 
                                                    "TIME_LITERAL", "DATE_LITERAL", 
                                                    "PERIOD_LITERAL", "JSX_TEXT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"enum_category_declaration", "enum_native_declaration", "category_symbol", 
		"native_symbol", "attribute_declaration", "concrete_widget_declaration", 
		"native_widget_declaration", "concrete_category_declaration", "singleton_category_declaration", 
		"derived_list", "category_method_list", "operator_method_declaration", 
		"setter_method_declaration", "native_setter_declaration", "getter_method_declaration", 
		"native_getter_declaration", "native_resource_declaration", "native_category_declaration", 
		"native_category_bindings", "native_category_binding_list", "abstract_global_method_declaration", 
		"abstract_member_method_declaration", "concrete_method_declaration", "native_method_declaration", 
		"test_method_declaration", "assertion", "typed_argument", "statement_or_list", 
		"statement", "flush_statement", "store_statement", "with_resource_statement", 
		"with_singleton_statement", "switch_statement", "switch_case_statement", 
		"for_each_statement", "do_while_statement", "while_statement", "if_statement", 
		"else_if_statement_list", "raise_statement", "try_statement", "catch_statement", 
		"break_statement", "return_statement", "method_call_expression", "method_call_statement", 
		"x_expression", "expression", "filter_expression", "an_expression", "type_expression", 
		"selectable_expression", "instance_expression", "mutable_instance_expression", 
		"method_expression", "blob_expression", "document_expression", "write_statement", 
		"filtered_list_expression", "fetch_expression", "fetch_statement", "then", 
		"read_statement", "sorted_expression", "instance_selector", "constructor_expression", 
		"copy_from", "argument_assignment_list", "argument_assignment", "assign_instance_statement", 
		"child_instance", "assign_tuple_statement", "type_literal", "null_literal", 
		"ws_plus", "repl", "declaration_list", "declarations", "declaration", 
		"annotation_constructor", "annotation_identifier", "annotation_argument", 
		"annotation_argument_name", "annotation_argument_value", "resource_declaration", 
		"enum_declaration", "native_symbol_list", "category_symbol_list", "symbol_list", 
		"attribute_constraint", "list_literal", "set_literal", "expression_list", 
		"range_literal", "typedef", "primary_type", "native_type", "category_type", 
		"mutable_category_type", "code_type", "category_declaration", "widget_declaration", 
		"type_identifier_list", "method_identifier", "identifier_or_keyword", 
		"nospace_hyphen_identifier_or_keyword", "nospace_identifier_or_keyword", 
		"identifier", "member_identifier", "variable_identifier", "attribute_identifier", 
		"type_identifier", "symbol_identifier", "argument_list", "argument", "operator_argument", 
		"named_argument", "code_argument", "category_or_any_type", "any_type", 
		"member_method_declaration_list", "member_method_declaration", "native_member_method_declaration_list", 
		"native_member_method_declaration", "native_category_binding", "python_category_binding", 
		"python_module", "javascript_category_binding", "javascript_module", "variable_identifier_list", 
		"attribute_identifier_list", "method_declaration", "comment_statement", 
		"native_statement_list", "native_statement", "python_native_statement", 
		"javascript_native_statement", "statement_list", "assertion_list", "switch_case_statement_list", 
		"catch_statement_list", "literal_collection", "atomic_literal", "literal_list_literal", 
		"this_expression", "super_expression", "parenthesis_expression", "literal_expression", 
		"collection_literal", "tuple_literal", "dict_literal", "document_literal", 
		"expression_tuple", "doc_entry_list", "doc_entry", "doc_key", "dict_entry_list", 
		"dict_entry", "dict_key", "slice_arguments", "assign_variable_statement", 
		"assignable_instance", "is_expression", "metadata", "arrow_expression", 
		"arrow_prefix", "arrow_args", "sorted_key", "read_blob_expression", "read_all_expression", 
		"read_one_expression", "order_by_list", "order_by", "include_list", "operator", 
		"keyword", "new_token", "key_token", "module_token", "value_token", "symbols_token", 
		"assign", "multiply", "divide", "idivide", "modulo", "lfs", "lfp", "javascript_statement", 
		"javascript_expression", "javascript_primary_expression", "javascript_this_expression", 
		"javascript_new_expression", "javascript_selector_expression", "javascript_method_expression", 
		"javascript_arguments", "javascript_item_expression", "javascript_parenthesis_expression", 
		"javascript_identifier_expression", "javascript_literal_expression", "javascript_identifier", 
		"python_statement", "python_expression", "python_primary_expression", 
		"python_self_expression", "python_selector_expression", "python_method_expression", 
		"python_argument_list", "python_ordinal_argument_list", "python_named_argument_list", 
		"python_parenthesis_expression", "python_identifier_expression", "python_literal_expression", 
		"python_identifier", "java_statement", "java_expression", "java_primary_expression", 
		"java_this_expression", "java_new_expression", "java_selector_expression", 
		"java_method_expression", "java_arguments", "java_item_expression", "java_parenthesis_expression", 
		"java_identifier_expression", "java_class_identifier_expression", "java_literal_expression", 
		"java_identifier", "csharp_statement", "csharp_expression", "csharp_primary_expression", 
		"csharp_this_expression", "csharp_new_expression", "csharp_selector_expression", 
		"csharp_method_expression", "csharp_arguments", "csharp_item_expression", 
		"csharp_parenthesis_expression", "csharp_identifier_expression", "csharp_literal_expression", 
		"csharp_identifier", "jsx_expression", "jsx_element", "jsx_fragment", 
		"jsx_fragment_start", "jsx_fragment_end", "jsx_self_closing", "jsx_opening", 
		"jsx_closing", "jsx_element_name", "jsx_identifier", "jsx_attribute", 
		"jsx_attribute_value", "jsx_children", "jsx_child", "jsx_text", "jsx_char", 
		"css_expression", "css_field", "css_identifier", "css_value", "css_text",
	];
	public get grammarFileName(): string { return "OParser.g4"; }
	public get literalNames(): (string | null)[] { return OParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return OParser.symbolicNames; }
	public get ruleNames(): string[] { return OParser.ruleNames; }
	public get serializedATN(): number[] { return OParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, OParser._ATN, OParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public enum_category_declaration(): Enum_category_declarationContext {
		let localctx: Enum_category_declarationContext = new Enum_category_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, OParser.RULE_enum_category_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 526;
			this.match(OParser.ENUMERATED);
			this.state = 527;
			this.match(OParser.CATEGORY);
			this.state = 528;
			localctx._name = this.type_identifier();
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 529;
				this.match(OParser.LPAR);
				this.state = 530;
				localctx._attrs = this.attribute_identifier_list();
				this.state = 531;
				this.match(OParser.RPAR);
				}
			}

			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===103) {
				{
				this.state = 535;
				this.match(OParser.EXTENDS);
				this.state = 536;
				localctx._derived = this.type_identifier();
				}
			}

			this.state = 539;
			this.match(OParser.LCURL);
			this.state = 540;
			localctx._symbols = this.category_symbol_list();
			this.state = 541;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enum_native_declaration(): Enum_native_declarationContext {
		let localctx: Enum_native_declarationContext = new Enum_native_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, OParser.RULE_enum_native_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 543;
			this.match(OParser.ENUMERATED);
			this.state = 544;
			localctx._name = this.type_identifier();
			this.state = 545;
			this.match(OParser.LPAR);
			this.state = 546;
			localctx._typ = this.native_type();
			this.state = 547;
			this.match(OParser.RPAR);
			this.state = 548;
			this.match(OParser.LCURL);
			this.state = 549;
			localctx._symbols = this.native_symbol_list();
			this.state = 550;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public category_symbol(): Category_symbolContext {
		let localctx: Category_symbolContext = new Category_symbolContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, OParser.RULE_category_symbol);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 552;
			localctx._name = this.symbol_identifier();
			this.state = 553;
			this.match(OParser.LPAR);
			this.state = 554;
			localctx._args = this.argument_assignment_list(0);
			this.state = 555;
			this.match(OParser.RPAR);
			this.state = 556;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_symbol(): Native_symbolContext {
		let localctx: Native_symbolContext = new Native_symbolContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, OParser.RULE_native_symbol);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 558;
			localctx._name = this.symbol_identifier();
			this.state = 559;
			this.match(OParser.EQ);
			this.state = 560;
			localctx._exp = this.expression(0);
			this.state = 561;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute_declaration(): Attribute_declarationContext {
		let localctx: Attribute_declarationContext = new Attribute_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, OParser.RULE_attribute_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 564;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===146) {
				{
				this.state = 563;
				this.match(OParser.STORABLE);
				}
			}

			this.state = 566;
			this.match(OParser.ATTRIBUTE);
			this.state = 567;
			localctx._name = this.attribute_identifier();
			this.state = 568;
			this.match(OParser.COLON);
			this.state = 569;
			localctx._typ = this.typedef(0);
			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===113 || _la===118) {
				{
				this.state = 570;
				localctx._match = this.attribute_constraint();
				}
			}

			this.state = 581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===158) {
				{
				this.state = 573;
				this.match(OParser.WITH);
				this.state = 574;
				this.match(OParser.INDEX);
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 575;
					this.match(OParser.LPAR);
					this.state = 576;
					localctx._indices = this.variable_identifier_list();
					this.state = 577;
					this.match(OParser.RPAR);
					}
				}

				}
			}

			this.state = 583;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public concrete_widget_declaration(): Concrete_widget_declarationContext {
		let localctx: Concrete_widget_declarationContext = new Concrete_widget_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, OParser.RULE_concrete_widget_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 585;
			this.match(OParser.WIDGET);
			this.state = 586;
			localctx._name = this.type_identifier();
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===103) {
				{
				this.state = 587;
				this.match(OParser.EXTENDS);
				this.state = 588;
				localctx._derived = this.type_identifier();
				}
			}

			this.state = 591;
			localctx._methods = this.category_method_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_widget_declaration(): Native_widget_declarationContext {
		let localctx: Native_widget_declarationContext = new Native_widget_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, OParser.RULE_native_widget_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 593;
			this.match(OParser.NATIVE);
			this.state = 594;
			this.match(OParser.WIDGET);
			this.state = 595;
			localctx._name = this.type_identifier();
			this.state = 596;
			this.match(OParser.LCURL);
			this.state = 597;
			localctx._bindings = this.native_category_bindings();
			this.state = 598;
			localctx._methods = this.native_member_method_declaration_list();
			this.state = 599;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public concrete_category_declaration(): Concrete_category_declarationContext {
		let localctx: Concrete_category_declarationContext = new Concrete_category_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, OParser.RULE_concrete_category_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===146) {
				{
				this.state = 601;
				this.match(OParser.STORABLE);
				}
			}

			this.state = 604;
			this.match(OParser.CATEGORY);
			this.state = 605;
			localctx._name = this.type_identifier();
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 606;
				this.match(OParser.LPAR);
				this.state = 607;
				localctx._attrs = this.attribute_identifier_list();
				this.state = 608;
				this.match(OParser.RPAR);
				}
			}

			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===103) {
				{
				this.state = 612;
				this.match(OParser.EXTENDS);
				this.state = 613;
				localctx._derived = this.derived_list(0);
				}
			}

			this.state = 616;
			localctx._methods = this.category_method_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public singleton_category_declaration(): Singleton_category_declarationContext {
		let localctx: Singleton_category_declarationContext = new Singleton_category_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, OParser.RULE_singleton_category_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 618;
			this.match(OParser.SINGLETON);
			this.state = 619;
			localctx._name = this.type_identifier();
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 620;
				this.match(OParser.LPAR);
				this.state = 621;
				localctx._attrs = this.attribute_identifier_list();
				this.state = 622;
				this.match(OParser.RPAR);
				}
			}

			this.state = 626;
			localctx._methods = this.category_method_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public derived_list(): Derived_listContext;
	public derived_list(_p: number): Derived_listContext;
	// @RuleVersion(0)
	public derived_list(_p?: number): Derived_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Derived_listContext = new Derived_listContext(this, this._ctx, _parentState);
		let _prevctx: Derived_listContext = localctx;
		let _startState: number = 18;
		this.enterRecursionRule(localctx, 18, OParser.RULE_derived_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new DerivedListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 629;
			(localctx as DerivedListContext)._item = this.type_identifier();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 636;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new DerivedListItemContext(this, new Derived_listContext(this, _parentctx, _parentState));
					(localctx as DerivedListItemContext)._items = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_derived_list);
					this.state = 631;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 632;
					this.match(OParser.COMMA);
					this.state = 633;
					(localctx as DerivedListItemContext)._item = this.type_identifier();
					}
					}
				}
				this.state = 638;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public category_method_list(): Category_method_listContext {
		let localctx: Category_method_listContext = new Category_method_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, OParser.RULE_category_method_list);
		let _la: number;
		try {
			this.state = 645;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				localctx = new EmptyCategoryMethodListContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 639;
				this.match(OParser.SEMI);
				}
				break;
			case 20:
				localctx = new CurlyCategoryMethodListContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 640;
				this.match(OParser.LCURL);
				this.state = 642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===4 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 8386559) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1053185) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 570425345) !== 0)) {
					{
					this.state = 641;
					(localctx as CurlyCategoryMethodListContext)._items = this.member_method_declaration_list();
					}
				}

				this.state = 644;
				this.match(OParser.RCURL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public operator_method_declaration(): Operator_method_declarationContext {
		let localctx: Operator_method_declarationContext = new Operator_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, OParser.RULE_operator_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4192255) !== 0) || _la===168) {
				{
				this.state = 647;
				localctx._typ = this.typedef(0);
				}
			}

			this.state = 650;
			this.match(OParser.OPERATOR);
			this.state = 651;
			localctx._op = this.operator();
			this.state = 652;
			this.match(OParser.LPAR);
			this.state = 653;
			localctx._arg = this.operator_argument();
			this.state = 654;
			this.match(OParser.RPAR);
			this.state = 655;
			this.match(OParser.LCURL);
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
				{
				this.state = 656;
				localctx._stmts = this.statement_list();
				}
			}

			this.state = 659;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setter_method_declaration(): Setter_method_declarationContext {
		let localctx: Setter_method_declarationContext = new Setter_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, OParser.RULE_setter_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 661;
			this.match(OParser.SETTER);
			this.state = 662;
			localctx._name = this.variable_identifier();
			this.state = 663;
			this.match(OParser.LCURL);
			this.state = 665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
				{
				this.state = 664;
				localctx._stmts = this.statement_list();
				}
			}

			this.state = 667;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_setter_declaration(): Native_setter_declarationContext {
		let localctx: Native_setter_declarationContext = new Native_setter_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, OParser.RULE_native_setter_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 670;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===123) {
				{
				this.state = 669;
				this.match(OParser.NATIVE);
				}
			}

			this.state = 672;
			this.match(OParser.SETTER);
			this.state = 673;
			localctx._name = this.variable_identifier();
			this.state = 674;
			this.match(OParser.LCURL);
			this.state = 676;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 992) !== 0)) {
				{
				this.state = 675;
				localctx._stmts = this.native_statement_list();
				}
			}

			this.state = 678;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public getter_method_declaration(): Getter_method_declarationContext {
		let localctx: Getter_method_declarationContext = new Getter_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, OParser.RULE_getter_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 680;
			this.match(OParser.GETTER);
			this.state = 681;
			localctx._name = this.variable_identifier();
			this.state = 682;
			this.match(OParser.LCURL);
			this.state = 684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
				{
				this.state = 683;
				localctx._stmts = this.statement_list();
				}
			}

			this.state = 686;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_getter_declaration(): Native_getter_declarationContext {
		let localctx: Native_getter_declarationContext = new Native_getter_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, OParser.RULE_native_getter_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===123) {
				{
				this.state = 688;
				this.match(OParser.NATIVE);
				}
			}

			this.state = 691;
			this.match(OParser.GETTER);
			this.state = 692;
			localctx._name = this.variable_identifier();
			this.state = 693;
			this.match(OParser.LCURL);
			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 992) !== 0)) {
				{
				this.state = 694;
				localctx._stmts = this.native_statement_list();
				}
			}

			this.state = 697;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_resource_declaration(): Native_resource_declarationContext {
		let localctx: Native_resource_declarationContext = new Native_resource_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, OParser.RULE_native_resource_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===146) {
				{
				this.state = 699;
				this.match(OParser.STORABLE);
				}
			}

			this.state = 702;
			this.match(OParser.NATIVE);
			this.state = 703;
			this.match(OParser.RESOURCE);
			this.state = 704;
			localctx._name = this.type_identifier();
			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 705;
				this.match(OParser.LPAR);
				this.state = 706;
				localctx._attrs = this.attribute_identifier_list();
				this.state = 707;
				this.match(OParser.RPAR);
				}
			}

			this.state = 711;
			this.match(OParser.LCURL);
			this.state = 712;
			localctx._bindings = this.native_category_bindings();
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 8705) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 570425345) !== 0)) {
				{
				this.state = 713;
				localctx._methods = this.native_member_method_declaration_list();
				}
			}

			this.state = 716;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_category_declaration(): Native_category_declarationContext {
		let localctx: Native_category_declarationContext = new Native_category_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, OParser.RULE_native_category_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===146) {
				{
				this.state = 718;
				this.match(OParser.STORABLE);
				}
			}

			this.state = 721;
			this.match(OParser.NATIVE);
			this.state = 722;
			this.match(OParser.CATEGORY);
			this.state = 723;
			localctx._name = this.type_identifier();
			this.state = 728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 724;
				this.match(OParser.LPAR);
				this.state = 725;
				localctx._attrs = this.attribute_identifier_list();
				this.state = 726;
				this.match(OParser.RPAR);
				}
			}

			this.state = 730;
			this.match(OParser.LCURL);
			this.state = 731;
			localctx._bindings = this.native_category_bindings();
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 8705) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 570425345) !== 0)) {
				{
				this.state = 732;
				localctx._methods = this.native_member_method_declaration_list();
				}
			}

			this.state = 735;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_category_bindings(): Native_category_bindingsContext {
		let localctx: Native_category_bindingsContext = new Native_category_bindingsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, OParser.RULE_native_category_bindings);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 737;
			this.match(OParser.CATEGORY);
			this.state = 738;
			this.match(OParser.BINDINGS);
			this.state = 739;
			this.match(OParser.LCURL);
			this.state = 740;
			localctx._items = this.native_category_binding_list(0);
			this.state = 741;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public native_category_binding_list(): Native_category_binding_listContext;
	public native_category_binding_list(_p: number): Native_category_binding_listContext;
	// @RuleVersion(0)
	public native_category_binding_list(_p?: number): Native_category_binding_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Native_category_binding_listContext = new Native_category_binding_listContext(this, this._ctx, _parentState);
		let _prevctx: Native_category_binding_listContext = localctx;
		let _startState: number = 38;
		this.enterRecursionRule(localctx, 38, OParser.RULE_native_category_binding_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new NativeCategoryBindingListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 744;
			(localctx as NativeCategoryBindingListContext)._item = this.native_category_binding();
			this.state = 745;
			this.match(OParser.SEMI);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 753;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new NativeCategoryBindingListItemContext(this, new Native_category_binding_listContext(this, _parentctx, _parentState));
					(localctx as NativeCategoryBindingListItemContext)._items = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_native_category_binding_list);
					this.state = 747;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 748;
					(localctx as NativeCategoryBindingListItemContext)._item = this.native_category_binding();
					this.state = 749;
					this.match(OParser.SEMI);
					}
					}
				}
				this.state = 755;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public abstract_global_method_declaration(): Abstract_global_method_declarationContext {
		let localctx: Abstract_global_method_declarationContext = new Abstract_global_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, OParser.RULE_abstract_global_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 756;
			this.match(OParser.ABSTRACT);
			this.state = 761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4192255) !== 0) || _la===122 || _la===168) {
				{
				this.state = 758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===122) {
					{
					this.state = 757;
					this.match(OParser.MUTABLE);
					}
				}

				this.state = 760;
				localctx._typ = this.typedef(0);
				}
			}

			this.state = 763;
			this.match(OParser.METHOD);
			this.state = 764;
			localctx._name = this.type_identifier();
			this.state = 765;
			this.match(OParser.LPAR);
			this.state = 767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || _la===86 || _la===122 || _la===138 || _la===168 || _la===169) {
				{
				this.state = 766;
				localctx._args = this.argument_list();
				}
			}

			this.state = 769;
			this.match(OParser.RPAR);
			this.state = 770;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public abstract_member_method_declaration(): Abstract_member_method_declarationContext {
		let localctx: Abstract_member_method_declarationContext = new Abstract_member_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, OParser.RULE_abstract_member_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 772;
			this.match(OParser.ABSTRACT);
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4192255) !== 0) || _la===122 || _la===168) {
				{
				this.state = 774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===122) {
					{
					this.state = 773;
					this.match(OParser.MUTABLE);
					}
				}

				this.state = 776;
				localctx._typ = this.typedef(0);
				}
			}

			this.state = 779;
			this.match(OParser.METHOD);
			this.state = 780;
			localctx._name = this.method_identifier();
			this.state = 781;
			this.match(OParser.LPAR);
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || _la===86 || _la===122 || _la===138 || _la===168 || _la===169) {
				{
				this.state = 782;
				localctx._args = this.argument_list();
				}
			}

			this.state = 785;
			this.match(OParser.RPAR);
			this.state = 786;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public concrete_method_declaration(): Concrete_method_declarationContext {
		let localctx: Concrete_method_declarationContext = new Concrete_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, OParser.RULE_concrete_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4192255) !== 0) || _la===122 || _la===168) {
				{
				this.state = 789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===122) {
					{
					this.state = 788;
					this.match(OParser.MUTABLE);
					}
				}

				this.state = 791;
				localctx._typ = this.typedef(0);
				}
			}

			this.state = 794;
			this.match(OParser.METHOD);
			this.state = 795;
			localctx._name = this.method_identifier();
			this.state = 796;
			this.match(OParser.LPAR);
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || _la===86 || _la===122 || _la===138 || _la===168 || _la===169) {
				{
				this.state = 797;
				localctx._args = this.argument_list();
				}
			}

			this.state = 800;
			this.match(OParser.RPAR);
			this.state = 801;
			this.match(OParser.LCURL);
			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
				{
				this.state = 802;
				localctx._stmts = this.statement_list();
				}
			}

			this.state = 805;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_method_declaration(): Native_method_declarationContext {
		let localctx: Native_method_declarationContext = new Native_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, OParser.RULE_native_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || _la===168) {
				{
				this.state = 807;
				localctx._typ = this.category_or_any_type();
				}
			}

			this.state = 811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===123) {
				{
				this.state = 810;
				this.match(OParser.NATIVE);
				}
			}

			this.state = 813;
			this.match(OParser.METHOD);
			this.state = 814;
			localctx._name = this.method_identifier();
			this.state = 815;
			this.match(OParser.LPAR);
			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || _la===86 || _la===122 || _la===138 || _la===168 || _la===169) {
				{
				this.state = 816;
				localctx._args = this.argument_list();
				}
			}

			this.state = 819;
			this.match(OParser.RPAR);
			this.state = 820;
			this.match(OParser.LCURL);
			this.state = 821;
			localctx._stmts = this.native_statement_list();
			this.state = 822;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public test_method_declaration(): Test_method_declarationContext {
		let localctx: Test_method_declarationContext = new Test_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, OParser.RULE_test_method_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 824;
			this.match(OParser.TEST);
			this.state = 825;
			this.match(OParser.METHOD);
			this.state = 826;
			localctx._name = this.match(OParser.TEXT_LITERAL);
			this.state = 827;
			this.match(OParser.LPAR);
			this.state = 828;
			this.match(OParser.RPAR);
			this.state = 829;
			this.match(OParser.LCURL);
			this.state = 830;
			localctx._stmts = this.statement_list();
			this.state = 831;
			this.match(OParser.RCURL);
			this.state = 832;
			this.match(OParser.VERIFYING);
			this.state = 840;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				{
				{
				this.state = 833;
				this.match(OParser.LCURL);
				this.state = 834;
				localctx._exps = this.assertion_list();
				this.state = 835;
				this.match(OParser.RCURL);
				}
				}
				break;
			case 167:
				{
				{
				this.state = 837;
				localctx._error = this.symbol_identifier();
				this.state = 838;
				this.match(OParser.SEMI);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assertion(): AssertionContext {
		let localctx: AssertionContext = new AssertionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, OParser.RULE_assertion);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 842;
			localctx._exp = this.expression(0);
			this.state = 843;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typed_argument(): Typed_argumentContext {
		let localctx: Typed_argumentContext = new Typed_argumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, OParser.RULE_typed_argument);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 845;
			localctx._typ = this.category_or_any_type();
			this.state = 850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 846;
				this.match(OParser.LPAR);
				this.state = 847;
				localctx._attrs = this.attribute_identifier_list();
				this.state = 848;
				this.match(OParser.RPAR);
				}
			}

			this.state = 852;
			localctx._name = this.variable_identifier();
			this.state = 855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 853;
				this.match(OParser.EQ);
				this.state = 854;
				localctx._value = this.literal_expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement_or_list(): Statement_or_listContext {
		let localctx: Statement_or_listContext = new Statement_or_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, OParser.RULE_statement_or_list);
		try {
			this.state = 864;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				localctx = new SingleStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 857;
				(localctx as SingleStatementContext)._stmt = this.statement();
				}
				break;
			case 2:
				localctx = new CurlyStatementListContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 858;
				this.match(OParser.LCURL);
				this.state = 862;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 859;
					(localctx as CurlyStatementListContext)._items = this.statement_list();
					this.state = 860;
					this.match(OParser.RCURL);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, OParser.RULE_statement);
		try {
			this.state = 887;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				localctx = new MethodCallStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 866;
				(localctx as MethodCallStatementContext)._stmt = this.method_call_statement();
				}
				break;
			case 2:
				localctx = new AssignInstanceStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 867;
				(localctx as AssignInstanceStatementContext)._stmt = this.assign_instance_statement();
				}
				break;
			case 3:
				localctx = new AssignTupleStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 868;
				(localctx as AssignTupleStatementContext)._stmt = this.assign_tuple_statement();
				}
				break;
			case 4:
				localctx = new StoreStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 869;
				(localctx as StoreStatementContext)._stmt = this.store_statement();
				}
				break;
			case 5:
				localctx = new FetchStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 870;
				(localctx as FetchStatementContext)._stmt = this.fetch_statement();
				}
				break;
			case 6:
				localctx = new ReadStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 871;
				(localctx as ReadStatementContext)._stmt = this.read_statement();
				}
				break;
			case 7:
				localctx = new FlushStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 872;
				(localctx as FlushStatementContext)._stmt = this.flush_statement();
				}
				break;
			case 8:
				localctx = new BreakStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 873;
				(localctx as BreakStatementContext)._stmt = this.break_statement();
				}
				break;
			case 9:
				localctx = new ReturnStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 874;
				(localctx as ReturnStatementContext)._stmt = this.return_statement();
				}
				break;
			case 10:
				localctx = new IfStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 875;
				(localctx as IfStatementContext)._stmt = this.if_statement();
				}
				break;
			case 11:
				localctx = new SwitchStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 876;
				(localctx as SwitchStatementContext)._stmt = this.switch_statement();
				}
				break;
			case 12:
				localctx = new ForEachStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 877;
				(localctx as ForEachStatementContext)._stmt = this.for_each_statement();
				}
				break;
			case 13:
				localctx = new WhileStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 878;
				(localctx as WhileStatementContext)._stmt = this.while_statement();
				}
				break;
			case 14:
				localctx = new DoWhileStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 879;
				(localctx as DoWhileStatementContext)._stmt = this.do_while_statement();
				}
				break;
			case 15:
				localctx = new TryStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 880;
				(localctx as TryStatementContext)._stmt = this.try_statement();
				}
				break;
			case 16:
				localctx = new RaiseStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 881;
				(localctx as RaiseStatementContext)._stmt = this.raise_statement();
				}
				break;
			case 17:
				localctx = new WriteStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 882;
				(localctx as WriteStatementContext)._stmt = this.write_statement();
				}
				break;
			case 18:
				localctx = new WithResourceStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 883;
				(localctx as WithResourceStatementContext)._stmt = this.with_resource_statement();
				}
				break;
			case 19:
				localctx = new WithSingletonStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 884;
				(localctx as WithSingletonStatementContext)._stmt = this.with_singleton_statement();
				}
				break;
			case 20:
				localctx = new ClosureStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 885;
				(localctx as ClosureStatementContext)._decl = this.concrete_method_declaration();
				}
				break;
			case 21:
				localctx = new CommentStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 886;
				(localctx as CommentStatementContext)._decl = this.comment_statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public flush_statement(): Flush_statementContext {
		let localctx: Flush_statementContext = new Flush_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, OParser.RULE_flush_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 889;
			this.match(OParser.FLUSH);
			this.state = 890;
			this.match(OParser.LPAR);
			this.state = 891;
			this.match(OParser.RPAR);
			this.state = 892;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public store_statement(): Store_statementContext {
		let localctx: Store_statementContext = new Store_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, OParser.RULE_store_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 911;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 92:
				{
				this.state = 894;
				this.match(OParser.DELETE);
				this.state = 895;
				this.match(OParser.LPAR);
				this.state = 896;
				localctx._to_del = this.expression_list();
				this.state = 897;
				this.match(OParser.RPAR);
				this.state = 904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===74) {
					{
					this.state = 898;
					this.match(OParser.AND);
					this.state = 899;
					this.match(OParser.STORE);
					this.state = 900;
					this.match(OParser.LPAR);
					this.state = 901;
					localctx._to_add = this.expression_list();
					this.state = 902;
					this.match(OParser.RPAR);
					}
				}

				}
				break;
			case 147:
				{
				this.state = 906;
				this.match(OParser.STORE);
				this.state = 907;
				this.match(OParser.LPAR);
				this.state = 908;
				localctx._to_add = this.expression_list();
				this.state = 909;
				this.match(OParser.RPAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 919;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===158) {
				{
				this.state = 913;
				this.match(OParser.WITH);
				this.state = 914;
				this.metadata();
				this.state = 915;
				this.match(OParser.LPAR);
				this.state = 916;
				localctx._with_meta = this.expression(0);
				this.state = 917;
				this.match(OParser.RPAR);
				}
			}

			this.state = 927;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 151:
				{
				{
				this.state = 921;
				this.match(OParser.THEN);
				this.state = 922;
				this.match(OParser.LCURL);
				this.state = 923;
				localctx._stmts = this.statement_list();
				this.state = 924;
				this.match(OParser.RCURL);
				}
				}
				break;
			case 12:
				{
				this.state = 926;
				this.match(OParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public with_resource_statement(): With_resource_statementContext {
		let localctx: With_resource_statementContext = new With_resource_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, OParser.RULE_with_resource_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 929;
			this.match(OParser.WITH);
			this.state = 930;
			this.match(OParser.LPAR);
			this.state = 931;
			localctx._stmt = this.assign_variable_statement();
			this.state = 932;
			this.match(OParser.RPAR);
			this.state = 933;
			localctx._stmts = this.statement_or_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public with_singleton_statement(): With_singleton_statementContext {
		let localctx: With_singleton_statementContext = new With_singleton_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, OParser.RULE_with_singleton_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 935;
			this.match(OParser.WITH);
			this.state = 936;
			this.match(OParser.LPAR);
			this.state = 937;
			localctx._typ = this.type_identifier();
			this.state = 938;
			this.match(OParser.RPAR);
			this.state = 939;
			localctx._stmts = this.statement_or_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switch_statement(): Switch_statementContext {
		let localctx: Switch_statementContext = new Switch_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, OParser.RULE_switch_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 941;
			this.match(OParser.SWITCH);
			this.state = 942;
			this.match(OParser.LPAR);
			this.state = 943;
			localctx._exp = this.expression(0);
			this.state = 944;
			this.match(OParser.RPAR);
			this.state = 945;
			this.match(OParser.LCURL);
			this.state = 946;
			localctx._cases = this.switch_case_statement_list();
			this.state = 952;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===90) {
				{
				this.state = 947;
				this.match(OParser.DEFAULT);
				this.state = 948;
				this.match(OParser.COLON);
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
					{
					this.state = 949;
					localctx._stmts = this.statement_list();
					}
				}

				}
			}

			this.state = 954;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switch_case_statement(): Switch_case_statementContext {
		let localctx: Switch_case_statementContext = new Switch_case_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, OParser.RULE_switch_case_statement);
		try {
			this.state = 967;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				localctx = new AtomicSwitchCaseContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 956;
				this.match(OParser.CASE);
				this.state = 957;
				(localctx as AtomicSwitchCaseContext)._exp = this.atomic_literal();
				this.state = 958;
				this.match(OParser.COLON);
				this.state = 959;
				(localctx as AtomicSwitchCaseContext)._stmts = this.statement_list();
				}
				break;
			case 2:
				localctx = new CollectionSwitchCaseContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 961;
				this.match(OParser.CASE);
				this.state = 962;
				this.match(OParser.IN);
				this.state = 963;
				(localctx as CollectionSwitchCaseContext)._exp = this.literal_collection();
				this.state = 964;
				this.match(OParser.COLON);
				this.state = 965;
				(localctx as CollectionSwitchCaseContext)._stmts = this.statement_list();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public for_each_statement(): For_each_statementContext {
		let localctx: For_each_statementContext = new For_each_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, OParser.RULE_for_each_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 969;
			this.match(OParser.FOR);
			this.state = 970;
			this.match(OParser.EACH);
			this.state = 971;
			this.match(OParser.LPAR);
			this.state = 972;
			localctx._name1 = this.variable_identifier();
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 973;
				this.match(OParser.COMMA);
				this.state = 974;
				localctx._name2 = this.variable_identifier();
				}
			}

			this.state = 977;
			this.match(OParser.IN);
			this.state = 978;
			localctx._source = this.expression(0);
			this.state = 979;
			this.match(OParser.RPAR);
			this.state = 980;
			localctx._stmts = this.statement_or_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public do_while_statement(): Do_while_statementContext {
		let localctx: Do_while_statementContext = new Do_while_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, OParser.RULE_do_while_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 982;
			this.match(OParser.DO);
			this.state = 983;
			this.match(OParser.LCURL);
			this.state = 985;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
				{
				this.state = 984;
				localctx._stmts = this.statement_list();
				}
			}

			this.state = 987;
			this.match(OParser.RCURL);
			this.state = 988;
			this.match(OParser.WHILE);
			this.state = 989;
			this.match(OParser.LPAR);
			this.state = 990;
			localctx._exp = this.expression(0);
			this.state = 991;
			this.match(OParser.RPAR);
			this.state = 992;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public while_statement(): While_statementContext {
		let localctx: While_statementContext = new While_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, OParser.RULE_while_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 994;
			this.match(OParser.WHILE);
			this.state = 995;
			this.match(OParser.LPAR);
			this.state = 996;
			localctx._exp = this.expression(0);
			this.state = 997;
			this.match(OParser.RPAR);
			this.state = 998;
			localctx._stmts = this.statement_or_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public if_statement(): If_statementContext {
		let localctx: If_statementContext = new If_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, OParser.RULE_if_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1000;
			this.match(OParser.IF);
			this.state = 1001;
			this.match(OParser.LPAR);
			this.state = 1002;
			localctx._exp = this.expression(0);
			this.state = 1003;
			this.match(OParser.RPAR);
			this.state = 1004;
			localctx._stmts = this.statement_or_list();
			this.state = 1006;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 1005;
				localctx._elseIfs = this.else_if_statement_list(0);
				}
				break;
			}
			this.state = 1010;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 1008;
				this.match(OParser.ELSE);
				this.state = 1009;
				localctx._elseStmts = this.statement_or_list();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public else_if_statement_list(): Else_if_statement_listContext;
	public else_if_statement_list(_p: number): Else_if_statement_listContext;
	// @RuleVersion(0)
	public else_if_statement_list(_p?: number): Else_if_statement_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Else_if_statement_listContext = new Else_if_statement_listContext(this, this._ctx, _parentState);
		let _prevctx: Else_if_statement_listContext = localctx;
		let _startState: number = 78;
		this.enterRecursionRule(localctx, 78, OParser.RULE_else_if_statement_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new ElseIfStatementListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1013;
			this.match(OParser.ELSE);
			this.state = 1014;
			this.match(OParser.IF);
			this.state = 1015;
			this.match(OParser.LPAR);
			this.state = 1016;
			(localctx as ElseIfStatementListContext)._exp = this.expression(0);
			this.state = 1017;
			this.match(OParser.RPAR);
			this.state = 1018;
			(localctx as ElseIfStatementListContext)._stmts = this.statement_or_list();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1030;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ElseIfStatementListItemContext(this, new Else_if_statement_listContext(this, _parentctx, _parentState));
					(localctx as ElseIfStatementListItemContext)._items = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_else_if_statement_list);
					this.state = 1020;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1021;
					this.match(OParser.ELSE);
					this.state = 1022;
					this.match(OParser.IF);
					this.state = 1023;
					this.match(OParser.LPAR);
					this.state = 1024;
					(localctx as ElseIfStatementListItemContext)._exp = this.expression(0);
					this.state = 1025;
					this.match(OParser.RPAR);
					this.state = 1026;
					(localctx as ElseIfStatementListItemContext)._stmts = this.statement_or_list();
					}
					}
				}
				this.state = 1032;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public raise_statement(): Raise_statementContext {
		let localctx: Raise_statementContext = new Raise_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, OParser.RULE_raise_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1033;
			this.match(OParser.THROW);
			this.state = 1034;
			localctx._exp = this.expression(0);
			this.state = 1035;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public try_statement(): Try_statementContext {
		let localctx: Try_statementContext = new Try_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, OParser.RULE_try_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1037;
			this.match(OParser.TRY);
			this.state = 1038;
			this.match(OParser.LPAR);
			this.state = 1039;
			localctx._name = this.variable_identifier();
			this.state = 1040;
			this.match(OParser.RPAR);
			this.state = 1041;
			this.match(OParser.LCURL);
			this.state = 1043;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
				{
				this.state = 1042;
				localctx._stmts = this.statement_list();
				}
			}

			this.state = 1045;
			this.match(OParser.RCURL);
			this.state = 1047;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 1046;
				localctx._handlers = this.catch_statement_list();
				}
				break;
			}
			this.state = 1058;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 1049;
				this.match(OParser.CATCH);
				this.state = 1050;
				this.match(OParser.LPAR);
				this.state = 1051;
				this.match(OParser.ANY);
				this.state = 1052;
				this.match(OParser.RPAR);
				this.state = 1053;
				this.match(OParser.LCURL);
				this.state = 1055;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
					{
					this.state = 1054;
					localctx._anyStmts = this.statement_list();
					}
				}

				this.state = 1057;
				this.match(OParser.RCURL);
				}
				break;
			}
			this.state = 1066;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 1060;
				this.match(OParser.FINALLY);
				this.state = 1061;
				this.match(OParser.LCURL);
				this.state = 1063;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
					{
					this.state = 1062;
					localctx._finalStmts = this.statement_list();
					}
				}

				this.state = 1065;
				this.match(OParser.RCURL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catch_statement(): Catch_statementContext {
		let localctx: Catch_statementContext = new Catch_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, OParser.RULE_catch_statement);
		let _la: number;
		try {
			this.state = 1089;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				localctx = new CatchAtomicStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1068;
				this.match(OParser.CATCH);
				this.state = 1069;
				this.match(OParser.LPAR);
				this.state = 1070;
				(localctx as CatchAtomicStatementContext)._name = this.symbol_identifier();
				this.state = 1071;
				this.match(OParser.RPAR);
				this.state = 1072;
				this.match(OParser.LCURL);
				this.state = 1074;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
					{
					this.state = 1073;
					(localctx as CatchAtomicStatementContext)._stmts = this.statement_list();
					}
				}

				this.state = 1076;
				this.match(OParser.RCURL);
				}
				break;
			case 2:
				localctx = new CatchCollectionStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1078;
				this.match(OParser.CATCH);
				this.state = 1079;
				this.match(OParser.IN);
				this.state = 1080;
				this.match(OParser.LPAR);
				this.state = 1081;
				(localctx as CatchCollectionStatementContext)._exp = this.symbol_list();
				this.state = 1082;
				this.match(OParser.RPAR);
				this.state = 1083;
				this.match(OParser.LCURL);
				this.state = 1085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
					{
					this.state = 1084;
					(localctx as CatchCollectionStatementContext)._stmts = this.statement_list();
					}
				}

				this.state = 1087;
				this.match(OParser.RCURL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public break_statement(): Break_statementContext {
		let localctx: Break_statementContext = new Break_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, OParser.RULE_break_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1091;
			this.match(OParser.BREAK);
			this.state = 1092;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public return_statement(): Return_statementContext {
		let localctx: Return_statementContext = new Return_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, OParser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1094;
			this.match(OParser.RETURN);
			this.state = 1096;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 27271317) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 819201) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 1150369825) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1047679) !== 0)) {
				{
				this.state = 1095;
				localctx._exp = this.expression(0);
				}
			}

			this.state = 1098;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public method_call_expression(): Method_call_expressionContext {
		let localctx: Method_call_expressionContext = new Method_call_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, OParser.RULE_method_call_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1100;
			localctx._name = this.method_identifier();
			this.state = 1101;
			this.match(OParser.LPAR);
			this.state = 1103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 27271317) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 819201) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 1150369825) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1047679) !== 0)) {
				{
				this.state = 1102;
				localctx._args = this.argument_assignment_list(0);
				}
			}

			this.state = 1105;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public method_call_statement(): Method_call_statementContext {
		let localctx: Method_call_statementContext = new Method_call_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, OParser.RULE_method_call_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1110;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 1107;
				localctx._parent = this.instance_expression(0);
				this.state = 1108;
				this.match(OParser.DOT);
				}
				break;
			}
			this.state = 1112;
			localctx._method = this.method_call_expression();
			this.state = 1123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 151:
				{
				{
				this.state = 1113;
				this.match(OParser.THEN);
				this.state = 1116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===158) {
					{
					this.state = 1114;
					this.match(OParser.WITH);
					this.state = 1115;
					localctx._name = this.variable_identifier();
					}
				}

				this.state = 1118;
				this.match(OParser.LCURL);
				this.state = 1119;
				localctx._stmts = this.statement_list();
				this.state = 1120;
				this.match(OParser.RCURL);
				}
				}
				break;
			case 12:
				{
				this.state = 1122;
				this.match(OParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public x_expression(): X_expressionContext {
		let localctx: X_expressionContext = new X_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, OParser.RULE_x_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1125;
			this.css_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 96;
		this.enterRecursionRule(localctx, 96, OParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1156;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				localctx = new CssExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1128;
				(localctx as CssExpressionContext)._exp = this.css_expression();
				}
				break;
			case 2:
				{
				localctx = new JsxExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1129;
				(localctx as JsxExpressionContext)._exp = this.jsx_expression();
				}
				break;
			case 3:
				{
				localctx = new InstanceExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1130;
				(localctx as InstanceExpressionContext)._exp = this.instance_expression(0);
				}
				break;
			case 4:
				{
				localctx = new MutableInstanceExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1131;
				(localctx as MutableInstanceExpressionContext)._exp = this.mutable_instance_expression(0);
				}
				break;
			case 5:
				{
				localctx = new ArrowExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1132;
				(localctx as ArrowExpressionContext)._exp = this.arrow_expression();
				}
				break;
			case 6:
				{
				localctx = new MinusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1133;
				this.match(OParser.MINUS);
				this.state = 1134;
				(localctx as MinusExpressionContext)._exp = this.expression(24);
				}
				break;
			case 7:
				{
				localctx = new NotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1135;
				this.match(OParser.XMARK);
				this.state = 1136;
				(localctx as NotExpressionContext)._exp = this.expression(23);
				}
				break;
			case 8:
				{
				localctx = new CastExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1137;
				this.match(OParser.LPAR);
				this.state = 1139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===122) {
					{
					this.state = 1138;
					this.match(OParser.MUTABLE);
					}
				}

				this.state = 1141;
				(localctx as CastExpressionContext)._right = this.category_or_any_type();
				this.state = 1142;
				this.match(OParser.RPAR);
				this.state = 1143;
				(localctx as CastExpressionContext)._left = this.expression(22);
				}
				break;
			case 9:
				{
				localctx = new CodeExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1145;
				this.match(OParser.CODE);
				this.state = 1146;
				this.match(OParser.LPAR);
				this.state = 1147;
				(localctx as CodeExpressionContext)._exp = this.expression(0);
				this.state = 1148;
				this.match(OParser.RPAR);
				}
				break;
			case 10:
				{
				localctx = new ExecuteExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1150;
				this.match(OParser.EXECUTE);
				this.state = 1151;
				this.match(OParser.LPAR);
				this.state = 1152;
				(localctx as ExecuteExpressionContext)._name = this.variable_identifier();
				this.state = 1153;
				this.match(OParser.RPAR);
				}
				break;
			case 11:
				{
				localctx = new TypeExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1155;
				(localctx as TypeExpressionContext)._exp = this.type_expression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1250;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1248;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 83, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MultiplyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1158;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 1159;
						this.multiply();
						this.state = 1160;
						(localctx as MultiplyExpressionContext)._right = this.expression(22);
						}
						break;
					case 2:
						{
						localctx = new DivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as DivideExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1162;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 1163;
						this.divide();
						this.state = 1164;
						(localctx as DivideExpressionContext)._right = this.expression(21);
						}
						break;
					case 3:
						{
						localctx = new ModuloExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ModuloExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1166;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 1167;
						this.modulo();
						this.state = 1168;
						(localctx as ModuloExpressionContext)._right = this.expression(20);
						}
						break;
					case 4:
						{
						localctx = new IntDivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as IntDivideExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1170;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 1171;
						this.idivide();
						this.state = 1172;
						(localctx as IntDivideExpressionContext)._right = this.expression(19);
						}
						break;
					case 5:
						{
						localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AddExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1174;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1175;
						(localctx as AddExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===28 || _la===29)) {
						    (localctx as AddExpressionContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1176;
						(localctx as AddExpressionContext)._right = this.expression(18);
						}
						break;
					case 6:
						{
						localctx = new CompareExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CompareExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1177;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 1178;
						(localctx as CompareExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 15) !== 0))) {
						    (localctx as CompareExpressionContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1179;
						(localctx as CompareExpressionContext)._right = this.expression(17);
						}
						break;
					case 7:
						{
						localctx = new IsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as IsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1180;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1181;
						this.match(OParser.IS);
						this.state = 1183;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1182;
							this.match(OParser.NOT);
							}
						}

						this.state = 1185;
						(localctx as IsExpressionContext)._right = this.expression(15);
						}
						break;
					case 8:
						{
						localctx = new EqualsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as EqualsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1186;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1187;
						(localctx as EqualsExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 7) !== 0))) {
						    (localctx as EqualsExpressionContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1188;
						(localctx as EqualsExpressionContext)._right = this.expression(14);
						}
						break;
					case 9:
						{
						localctx = new ContainsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ContainsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1189;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1191;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1190;
							this.match(OParser.NOT);
							}
						}

						this.state = 1193;
						this.match(OParser.CONTAINS);
						this.state = 1194;
						(localctx as ContainsExpressionContext)._right = this.expression(13);
						}
						break;
					case 10:
						{
						localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1195;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1197;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1196;
							this.match(OParser.NOT);
							}
						}

						this.state = 1199;
						this.match(OParser.IN);
						this.state = 1200;
						(localctx as InExpressionContext)._right = this.expression(12);
						}
						break;
					case 11:
						{
						localctx = new HasExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as HasExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1201;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1203;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1202;
							this.match(OParser.NOT);
							}
						}

						this.state = 1205;
						this.match(OParser.HAS);
						this.state = 1206;
						(localctx as HasExpressionContext)._right = this.expression(11);
						}
						break;
					case 12:
						{
						localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as OrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1207;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1208;
						this.match(OParser.PIPE2);
						this.state = 1209;
						(localctx as OrExpressionContext)._right = this.expression(8);
						}
						break;
					case 13:
						{
						localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1210;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1211;
						this.match(OParser.AMP2);
						this.state = 1212;
						(localctx as AndExpressionContext)._right = this.expression(7);
						}
						break;
					case 14:
						{
						localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as TernaryExpressionContext)._test = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1213;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1214;
						this.match(OParser.QMARK);
						this.state = 1215;
						(localctx as TernaryExpressionContext)._ifTrue = this.expression(0);
						this.state = 1216;
						this.match(OParser.COLON);
						this.state = 1217;
						(localctx as TernaryExpressionContext)._ifFalse = this.expression(6);
						}
						break;
					case 15:
						{
						localctx = new IsAnExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as IsAnExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1219;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1220;
						this.match(OParser.IS);
						this.state = 1222;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
						case 1:
							{
							this.state = 1221;
							this.match(OParser.NOT);
							}
							break;
						}
						this.state = 1224;
						(localctx as IsAnExpressionContext)._right = this.an_expression();
						}
						break;
					case 16:
						{
						localctx = new HasAllExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as HasAllExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1225;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1227;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1226;
							this.match(OParser.NOT);
							}
						}

						this.state = 1229;
						this.match(OParser.HAS);
						this.state = 1230;
						this.match(OParser.ALL);
						this.state = 1231;
						(localctx as HasAllExpressionContext)._right = this.filter_expression();
						}
						break;
					case 17:
						{
						localctx = new HasAnyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as HasAnyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1232;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1234;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1233;
							this.match(OParser.NOT);
							}
						}

						this.state = 1236;
						this.match(OParser.HAS);
						this.state = 1237;
						this.match(OParser.ANY);
						this.state = 1238;
						(localctx as HasAnyExpressionContext)._right = this.filter_expression();
						}
						break;
					case 18:
						{
						localctx = new IteratorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as IteratorExpressionContext)._exp = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_expression);
						this.state = 1239;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1240;
						this.match(OParser.FOR);
						this.state = 1241;
						this.match(OParser.EACH);
						this.state = 1242;
						this.match(OParser.LPAR);
						this.state = 1243;
						(localctx as IteratorExpressionContext)._name = this.variable_identifier();
						this.state = 1244;
						this.match(OParser.IN);
						this.state = 1245;
						(localctx as IteratorExpressionContext)._source = this.expression(0);
						this.state = 1246;
						this.match(OParser.RPAR);
						}
						break;
					}
					}
				}
				this.state = 1252;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filter_expression(): Filter_expressionContext {
		let localctx: Filter_expressionContext = new Filter_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, OParser.RULE_filter_expression);
		try {
			this.state = 1267;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				localctx = new ArrowFilterExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1253;
				this.match(OParser.WHERE);
				this.state = 1254;
				this.match(OParser.LPAR);
				this.state = 1255;
				this.arrow_expression();
				this.state = 1256;
				this.match(OParser.RPAR);
				}
				break;
			case 2:
				localctx = new ExplicitFilterExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1258;
				this.match(OParser.LPAR);
				this.state = 1259;
				this.variable_identifier();
				this.state = 1260;
				this.match(OParser.RPAR);
				this.state = 1261;
				this.match(OParser.WHERE);
				this.state = 1262;
				this.match(OParser.LPAR);
				this.state = 1263;
				this.expression(0);
				this.state = 1264;
				this.match(OParser.RPAR);
				}
				break;
			case 3:
				localctx = new OtherFilterExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1266;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public an_expression(): An_expressionContext {
		let localctx: An_expressionContext = new An_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, OParser.RULE_an_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1269;
			if (!(this.willBeAOrAn())) {
				throw this.createFailedPredicateException("$parser.willBeAOrAn()");
			}
			this.state = 1270;
			this.match(OParser.VARIABLE_IDENTIFIER);
			this.state = 1271;
			localctx._typ = this.category_or_any_type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_expression(): Type_expressionContext {
		let localctx: Type_expressionContext = new Type_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, OParser.RULE_type_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1273;
			localctx._name = this.type_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public selectable_expression(): Selectable_expressionContext {
		let localctx: Selectable_expressionContext = new Selectable_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, OParser.RULE_selectable_expression);
		try {
			this.state = 1281;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				localctx = new MethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1275;
				(localctx as MethodExpressionContext)._exp = this.method_expression();
				}
				break;
			case 2:
				localctx = new ParenthesisExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1276;
				(localctx as ParenthesisExpressionContext)._exp = this.parenthesis_expression();
				}
				break;
			case 3:
				localctx = new LiteralExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1277;
				(localctx as LiteralExpressionContext)._exp = this.literal_expression();
				}
				break;
			case 4:
				localctx = new IdentifierExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1278;
				(localctx as IdentifierExpressionContext)._exp = this.identifier();
				}
				break;
			case 5:
				localctx = new ThisExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1279;
				(localctx as ThisExpressionContext)._exp = this.this_expression();
				}
				break;
			case 6:
				localctx = new SuperExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1280;
				(localctx as SuperExpressionContext)._exp = this.super_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public instance_expression(): Instance_expressionContext;
	public instance_expression(_p: number): Instance_expressionContext;
	// @RuleVersion(0)
	public instance_expression(_p?: number): Instance_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Instance_expressionContext = new Instance_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Instance_expressionContext = localctx;
		let _startState: number = 106;
		this.enterRecursionRule(localctx, 106, OParser.RULE_instance_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new SelectableExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1284;
			(localctx as SelectableExpressionContext)._parent = this.selectable_expression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1290;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new SelectorExpressionContext(this, new Instance_expressionContext(this, _parentctx, _parentState));
					(localctx as SelectorExpressionContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_instance_expression);
					this.state = 1286;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1287;
					(localctx as SelectorExpressionContext)._selector = this.instance_selector();
					}
					}
				}
				this.state = 1292;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 87, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public mutable_instance_expression(): Mutable_instance_expressionContext;
	public mutable_instance_expression(_p: number): Mutable_instance_expressionContext;
	// @RuleVersion(0)
	public mutable_instance_expression(_p?: number): Mutable_instance_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Mutable_instance_expressionContext = new Mutable_instance_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Mutable_instance_expressionContext = localctx;
		let _startState: number = 108;
		this.enterRecursionRule(localctx, 108, OParser.RULE_mutable_instance_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new MutableSelectableExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1294;
			this.match(OParser.MUTABLE);
			this.state = 1295;
			(localctx as MutableSelectableExpressionContext)._exp = this.identifier();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1301;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 88, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new MutableSelectorExpressionContext(this, new Mutable_instance_expressionContext(this, _parentctx, _parentState));
					(localctx as MutableSelectorExpressionContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_mutable_instance_expression);
					this.state = 1297;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1298;
					(localctx as MutableSelectorExpressionContext)._selector = this.instance_selector();
					}
					}
				}
				this.state = 1303;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 88, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public method_expression(): Method_expressionContext {
		let localctx: Method_expressionContext = new Method_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, OParser.RULE_method_expression);
		try {
			this.state = 1314;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1304;
				this.blob_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1305;
				this.document_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1306;
				this.filtered_list_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1307;
				this.fetch_expression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1308;
				this.read_blob_expression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1309;
				this.read_all_expression();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1310;
				this.read_one_expression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1311;
				this.sorted_expression();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1312;
				this.method_call_expression();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1313;
				this.constructor_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blob_expression(): Blob_expressionContext {
		let localctx: Blob_expressionContext = new Blob_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, OParser.RULE_blob_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1316;
			this.match(OParser.BLOB);
			this.state = 1317;
			this.match(OParser.LPAR);
			this.state = 1318;
			this.expression(0);
			this.state = 1319;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public document_expression(): Document_expressionContext {
		let localctx: Document_expressionContext = new Document_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, OParser.RULE_document_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1321;
			this.match(OParser.DOCUMENT);
			this.state = 1322;
			this.match(OParser.LPAR);
			this.state = 1326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===109) {
				{
				this.state = 1323;
				this.match(OParser.FROM);
				this.state = 1324;
				this.match(OParser.EQ);
				this.state = 1325;
				localctx._exp = this.expression(0);
				}
			}

			this.state = 1328;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public write_statement(): Write_statementContext {
		let localctx: Write_statementContext = new Write_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, OParser.RULE_write_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1330;
			this.match(OParser.WRITE);
			this.state = 1331;
			this.match(OParser.LPAR);
			this.state = 1332;
			localctx._what = this.expression(0);
			this.state = 1333;
			this.match(OParser.RPAR);
			this.state = 1334;
			this.match(OParser.TO);
			this.state = 1335;
			localctx._target = this.expression(0);
			this.state = 1338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 151:
				{
				this.state = 1336;
				this.then();
				}
				break;
			case 12:
				{
				this.state = 1337;
				this.match(OParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public filtered_list_expression(): Filtered_list_expressionContext {
		let localctx: Filtered_list_expressionContext = new Filtered_list_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, OParser.RULE_filtered_list_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1340;
			this.match(OParser.FILTERED);
			this.state = 1341;
			this.match(OParser.LPAR);
			this.state = 1342;
			localctx._source = this.expression(0);
			this.state = 1343;
			this.match(OParser.RPAR);
			this.state = 1349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===158) {
				{
				this.state = 1344;
				this.match(OParser.WITH);
				this.state = 1345;
				this.match(OParser.LPAR);
				this.state = 1346;
				localctx._name = this.variable_identifier();
				this.state = 1347;
				this.match(OParser.RPAR);
				}
			}

			this.state = 1351;
			this.match(OParser.WHERE);
			this.state = 1352;
			this.match(OParser.LPAR);
			this.state = 1353;
			localctx._predicate = this.expression(0);
			this.state = 1354;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fetch_expression(): Fetch_expressionContext {
		let localctx: Fetch_expressionContext = new Fetch_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, OParser.RULE_fetch_expression);
		let _la: number;
		try {
			this.state = 1420;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				localctx = new FetchOneContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1356;
				this.match(OParser.FETCH);
				this.state = 1357;
				this.match(OParser.ONE);
				this.state = 1362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 1358;
					this.match(OParser.LPAR);
					this.state = 1359;
					(localctx as FetchOneContext)._typ = this.mutable_category_type();
					this.state = 1360;
					this.match(OParser.RPAR);
					}
				}

				this.state = 1364;
				this.match(OParser.WHERE);
				this.state = 1365;
				this.match(OParser.LPAR);
				this.state = 1366;
				(localctx as FetchOneContext)._predicate = this.expression(0);
				this.state = 1367;
				this.match(OParser.RPAR);
				this.state = 1373;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 1368;
					this.match(OParser.INCLUDE);
					this.state = 1369;
					this.match(OParser.LPAR);
					this.state = 1370;
					(localctx as FetchOneContext)._include = this.include_list();
					this.state = 1371;
					this.match(OParser.RPAR);
					}
					break;
				}
				}
				break;
			case 2:
				localctx = new FetchManyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1375;
				this.match(OParser.FETCH);
				this.state = 1396;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 72:
					{
					{
					this.state = 1376;
					this.match(OParser.ALL);
					this.state = 1381;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
					case 1:
						{
						this.state = 1377;
						this.match(OParser.LPAR);
						this.state = 1378;
						(localctx as FetchManyContext)._typ = this.mutable_category_type();
						this.state = 1379;
						this.match(OParser.RPAR);
						}
						break;
					}
					}
					}
					break;
				case 16:
				case 141:
					{
					{
					this.state = 1387;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===16) {
						{
						this.state = 1383;
						this.match(OParser.LPAR);
						this.state = 1384;
						(localctx as FetchManyContext)._typ = this.mutable_category_type();
						this.state = 1385;
						this.match(OParser.RPAR);
						}
					}

					this.state = 1389;
					this.match(OParser.ROWS);
					this.state = 1390;
					this.match(OParser.LPAR);
					this.state = 1391;
					(localctx as FetchManyContext)._xstart = this.expression(0);
					this.state = 1392;
					this.match(OParser.TO);
					this.state = 1393;
					(localctx as FetchManyContext)._xstop = this.expression(0);
					this.state = 1394;
					this.match(OParser.RPAR);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1403;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
				case 1:
					{
					this.state = 1398;
					this.match(OParser.WHERE);
					this.state = 1399;
					this.match(OParser.LPAR);
					this.state = 1400;
					(localctx as FetchManyContext)._predicate = this.expression(0);
					this.state = 1401;
					this.match(OParser.RPAR);
					}
					break;
				}
				this.state = 1410;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 1405;
					this.match(OParser.INCLUDE);
					this.state = 1406;
					this.match(OParser.LPAR);
					this.state = 1407;
					(localctx as FetchManyContext)._include = this.include_list();
					this.state = 1408;
					this.match(OParser.RPAR);
					}
					break;
				}
				this.state = 1418;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
				case 1:
					{
					this.state = 1412;
					this.match(OParser.ORDER);
					this.state = 1413;
					this.match(OParser.BY);
					this.state = 1414;
					this.match(OParser.LPAR);
					this.state = 1415;
					(localctx as FetchManyContext)._orderby = this.order_by_list();
					this.state = 1416;
					this.match(OParser.RPAR);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fetch_statement(): Fetch_statementContext {
		let localctx: Fetch_statementContext = new Fetch_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, OParser.RULE_fetch_statement);
		let _la: number;
		try {
			this.state = 1489;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				localctx = new FetchOneAsyncContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1422;
				this.match(OParser.FETCH);
				this.state = 1423;
				this.match(OParser.ONE);
				this.state = 1428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===16) {
					{
					this.state = 1424;
					this.match(OParser.LPAR);
					this.state = 1425;
					(localctx as FetchOneAsyncContext)._typ = this.mutable_category_type();
					this.state = 1426;
					this.match(OParser.RPAR);
					}
				}

				this.state = 1430;
				this.match(OParser.WHERE);
				this.state = 1431;
				this.match(OParser.LPAR);
				this.state = 1432;
				(localctx as FetchOneAsyncContext)._predicate = this.expression(0);
				this.state = 1433;
				this.match(OParser.RPAR);
				this.state = 1439;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===114) {
					{
					this.state = 1434;
					this.match(OParser.INCLUDE);
					this.state = 1435;
					this.match(OParser.LPAR);
					this.state = 1436;
					(localctx as FetchOneAsyncContext)._include = this.include_list();
					this.state = 1437;
					this.match(OParser.RPAR);
					}
				}

				this.state = 1441;
				this.then();
				}
				break;
			case 2:
				localctx = new FetchManyAsyncContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1443;
				this.match(OParser.FETCH);
				this.state = 1464;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 72:
					{
					{
					this.state = 1444;
					this.match(OParser.ALL);
					this.state = 1449;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===16) {
						{
						this.state = 1445;
						this.match(OParser.LPAR);
						this.state = 1446;
						(localctx as FetchManyAsyncContext)._typ = this.mutable_category_type();
						this.state = 1447;
						this.match(OParser.RPAR);
						}
					}

					}
					}
					break;
				case 16:
				case 141:
					{
					{
					this.state = 1455;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===16) {
						{
						this.state = 1451;
						this.match(OParser.LPAR);
						this.state = 1452;
						(localctx as FetchManyAsyncContext)._typ = this.mutable_category_type();
						this.state = 1453;
						this.match(OParser.RPAR);
						}
					}

					this.state = 1457;
					this.match(OParser.ROWS);
					this.state = 1458;
					this.match(OParser.LPAR);
					this.state = 1459;
					(localctx as FetchManyAsyncContext)._xstart = this.expression(0);
					this.state = 1460;
					this.match(OParser.TO);
					this.state = 1461;
					(localctx as FetchManyAsyncContext)._xstop = this.expression(0);
					this.state = 1462;
					this.match(OParser.RPAR);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===160) {
					{
					this.state = 1466;
					this.match(OParser.WHERE);
					this.state = 1467;
					this.match(OParser.LPAR);
					this.state = 1468;
					(localctx as FetchManyAsyncContext)._predicate = this.expression(0);
					this.state = 1469;
					this.match(OParser.RPAR);
					}
				}

				this.state = 1478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===114) {
					{
					this.state = 1473;
					this.match(OParser.INCLUDE);
					this.state = 1474;
					this.match(OParser.LPAR);
					this.state = 1475;
					(localctx as FetchManyAsyncContext)._include = this.include_list();
					this.state = 1476;
					this.match(OParser.RPAR);
					}
				}

				this.state = 1486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===132) {
					{
					this.state = 1480;
					this.match(OParser.ORDER);
					this.state = 1481;
					this.match(OParser.BY);
					this.state = 1482;
					this.match(OParser.LPAR);
					this.state = 1483;
					(localctx as FetchManyAsyncContext)._orderby = this.order_by_list();
					this.state = 1484;
					this.match(OParser.RPAR);
					}
				}

				this.state = 1488;
				this.then();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public then(): ThenContext {
		let localctx: ThenContext = new ThenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, OParser.RULE_then);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1491;
			this.match(OParser.THEN);
			this.state = 1492;
			this.match(OParser.WITH);
			this.state = 1493;
			localctx._name = this.variable_identifier();
			this.state = 1494;
			this.match(OParser.LCURL);
			this.state = 1495;
			localctx._stmts = this.statement_list();
			this.state = 1496;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public read_statement(): Read_statementContext {
		let localctx: Read_statementContext = new Read_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, OParser.RULE_read_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1498;
			this.match(OParser.READ);
			this.state = 1499;
			this.match(OParser.ALL);
			this.state = 1500;
			this.match(OParser.FROM);
			this.state = 1501;
			localctx._source = this.expression(0);
			this.state = 1502;
			this.then();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sorted_expression(): Sorted_expressionContext {
		let localctx: Sorted_expressionContext = new Sorted_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, OParser.RULE_sorted_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1504;
			this.match(OParser.SORTED);
			this.state = 1506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===93) {
				{
				this.state = 1505;
				this.match(OParser.DESC);
				}
			}

			this.state = 1508;
			this.match(OParser.LPAR);
			this.state = 1509;
			localctx._source = this.instance_expression(0);
			this.state = 1515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 1510;
				this.match(OParser.COMMA);
				this.state = 1511;
				this.key_token();
				this.state = 1512;
				this.match(OParser.EQ);
				this.state = 1513;
				localctx._key = this.sorted_key();
				}
			}

			this.state = 1517;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public instance_selector(): Instance_selectorContext {
		let localctx: Instance_selectorContext = new Instance_selectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, OParser.RULE_instance_selector);
		try {
			this.state = 1531;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				localctx = new MemberSelectorContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1519;
				this.match(OParser.DOT);
				this.state = 1520;
				(localctx as MemberSelectorContext)._name = this.member_identifier();
				}
				break;
			case 2:
				localctx = new MethodSelectorContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1521;
				this.match(OParser.DOT);
				this.state = 1522;
				(localctx as MethodSelectorContext)._method = this.method_call_expression();
				}
				break;
			case 3:
				localctx = new ItemSelectorContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1523;
				this.match(OParser.LBRAK);
				this.state = 1524;
				(localctx as ItemSelectorContext)._exp = this.expression(0);
				this.state = 1525;
				this.match(OParser.RBRAK);
				}
				break;
			case 4:
				localctx = new SliceSelectorContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1527;
				this.match(OParser.LBRAK);
				this.state = 1528;
				(localctx as SliceSelectorContext)._xslice = this.slice_arguments();
				this.state = 1529;
				this.match(OParser.RBRAK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructor_expression(): Constructor_expressionContext {
		let localctx: Constructor_expressionContext = new Constructor_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, OParser.RULE_constructor_expression);
		let _la: number;
		try {
			this.state = 1549;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				localctx = new ConstructorFromContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1533;
				(localctx as ConstructorFromContext)._typ = this.mutable_category_type();
				this.state = 1534;
				this.match(OParser.LPAR);
				this.state = 1535;
				(localctx as ConstructorFromContext)._copyExp = this.copy_from();
				this.state = 1538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13) {
					{
					this.state = 1536;
					this.match(OParser.COMMA);
					this.state = 1537;
					(localctx as ConstructorFromContext)._args = this.argument_assignment_list(0);
					}
				}

				this.state = 1540;
				this.match(OParser.RPAR);
				}
				break;
			case 2:
				localctx = new ConstructorNoFromContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1542;
				(localctx as ConstructorNoFromContext)._typ = this.mutable_category_type();
				this.state = 1543;
				this.match(OParser.LPAR);
				this.state = 1545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 27271317) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 819201) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 1150369825) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1047679) !== 0)) {
					{
					this.state = 1544;
					(localctx as ConstructorNoFromContext)._args = this.argument_assignment_list(0);
					}
				}

				this.state = 1547;
				this.match(OParser.RPAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public copy_from(): Copy_fromContext {
		let localctx: Copy_fromContext = new Copy_fromContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, OParser.RULE_copy_from);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1551;
			this.match(OParser.FROM);
			this.state = 1552;
			this.assign();
			this.state = 1553;
			localctx._exp = this.expression(0);
			this.state = 1554;
			if (!(this.willNotBe(this.equalToken()))) {
				throw this.createFailedPredicateException("$parser.willNotBe($parser.equalToken())");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public argument_assignment_list(): Argument_assignment_listContext;
	public argument_assignment_list(_p: number): Argument_assignment_listContext;
	// @RuleVersion(0)
	public argument_assignment_list(_p?: number): Argument_assignment_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Argument_assignment_listContext = new Argument_assignment_listContext(this, this._ctx, _parentState);
		let _prevctx: Argument_assignment_listContext = localctx;
		let _startState: number = 136;
		this.enterRecursionRule(localctx, 136, OParser.RULE_argument_assignment_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1561;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				localctx = new ExpressionAssignmentListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1557;
				(localctx as ExpressionAssignmentListContext)._exp = this.expression(0);
				this.state = 1558;
				if (!(this.willNotBe(this.equalToken()))) {
					throw this.createFailedPredicateException("$parser.willNotBe($parser.equalToken())");
				}
				}
				break;
			case 2:
				{
				localctx = new ArgumentAssignmentListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1560;
				(localctx as ArgumentAssignmentListContext)._item = this.argument_assignment();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1568;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 118, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ArgumentAssignmentListItemContext(this, new Argument_assignment_listContext(this, _parentctx, _parentState));
					(localctx as ArgumentAssignmentListItemContext)._items = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_argument_assignment_list);
					this.state = 1563;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1564;
					this.match(OParser.COMMA);
					this.state = 1565;
					(localctx as ArgumentAssignmentListItemContext)._item = this.argument_assignment();
					}
					}
				}
				this.state = 1570;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 118, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argument_assignment(): Argument_assignmentContext {
		let localctx: Argument_assignmentContext = new Argument_assignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, OParser.RULE_argument_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1571;
			localctx._name = this.variable_identifier();
			this.state = 1575;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1572;
				this.assign();
				this.state = 1573;
				localctx._exp = this.expression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assign_instance_statement(): Assign_instance_statementContext {
		let localctx: Assign_instance_statementContext = new Assign_instance_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, OParser.RULE_assign_instance_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1577;
			localctx._inst = this.assignable_instance(0);
			this.state = 1578;
			this.assign();
			this.state = 1579;
			localctx._exp = this.expression(0);
			this.state = 1580;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public child_instance(): Child_instanceContext {
		let localctx: Child_instanceContext = new Child_instanceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, OParser.RULE_child_instance);
		try {
			this.state = 1588;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				localctx = new MemberInstanceContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1582;
				this.match(OParser.DOT);
				this.state = 1583;
				(localctx as MemberInstanceContext)._name = this.variable_identifier();
				}
				break;
			case 18:
				localctx = new ItemInstanceContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1584;
				this.match(OParser.LBRAK);
				this.state = 1585;
				(localctx as ItemInstanceContext)._exp = this.expression(0);
				this.state = 1586;
				this.match(OParser.RBRAK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assign_tuple_statement(): Assign_tuple_statementContext {
		let localctx: Assign_tuple_statementContext = new Assign_tuple_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, OParser.RULE_assign_tuple_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1590;
			localctx._items = this.variable_identifier_list();
			this.state = 1591;
			this.assign();
			this.state = 1592;
			localctx._exp = this.expression(0);
			this.state = 1593;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_literal(): Type_literalContext {
		let localctx: Type_literalContext = new Type_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, OParser.RULE_type_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1595;
			this.category_or_any_type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public null_literal(): Null_literalContext {
		let localctx: Null_literalContext = new Null_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, OParser.RULE_null_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1597;
			this.match(OParser.NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ws_plus(): Ws_plusContext {
		let localctx: Ws_plusContext = new Ws_plusContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, OParser.RULE_ws_plus);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1602;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1599;
					_la = this._input.LA(1);
					if(!(_la===2 || _la===3)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 1604;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public repl(): ReplContext {
		let localctx: ReplContext = new ReplContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, OParser.RULE_repl);
		try {
			this.state = 1608;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1605;
				this.declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1606;
				this.statement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1607;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration_list(): Declaration_listContext {
		let localctx: Declaration_listContext = new Declaration_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, OParser.RULE_declaration_list);
		let _la: number;
		try {
			localctx = new FullDeclarationListContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1610;
			this.lfs();
			this.state = 1612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 1149237247) !== 0) || _la===86 || _la===99 || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 2315255833) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & 34817) !== 0)) {
				{
				this.state = 1611;
				this.declarations();
				}
			}

			this.state = 1614;
			this.lfs();
			this.state = 1615;
			this.match(OParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declarations(): DeclarationsContext {
		let localctx: DeclarationsContext = new DeclarationsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, OParser.RULE_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1617;
			this.declaration();
			this.state = 1623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 1149237247) !== 0) || _la===86 || _la===99 || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 2315255833) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & 34817) !== 0)) {
				{
				{
				this.state = 1618;
				this.lfp();
				this.state = 1619;
				this.declaration();
				}
				}
				this.state = 1625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, OParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1626;
				this.comment_statement();
				this.state = 1627;
				this.lfp();
				}
				}
				this.state = 1633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===172) {
				{
				{
				this.state = 1634;
				this.annotation_constructor();
				this.state = 1635;
				this.lfp();
				}
				}
				this.state = 1641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1648;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				{
				this.state = 1642;
				this.attribute_declaration();
				}
				break;
			case 2:
				{
				this.state = 1643;
				this.category_declaration();
				}
				break;
			case 3:
				{
				this.state = 1644;
				this.resource_declaration();
				}
				break;
			case 4:
				{
				this.state = 1645;
				this.enum_declaration();
				}
				break;
			case 5:
				{
				this.state = 1646;
				this.widget_declaration();
				}
				break;
			case 6:
				{
				this.state = 1647;
				this.method_declaration();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation_constructor(): Annotation_constructorContext {
		let localctx: Annotation_constructorContext = new Annotation_constructorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, OParser.RULE_annotation_constructor);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1650;
			localctx._name = this.annotation_identifier();
			this.state = 1665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 1651;
				this.match(OParser.LPAR);
				this.state = 1661;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 16:
				case 18:
				case 20:
				case 29:
				case 37:
				case 40:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				case 58:
				case 59:
				case 61:
				case 62:
				case 63:
				case 64:
				case 65:
				case 66:
				case 67:
				case 68:
				case 69:
				case 70:
				case 75:
				case 122:
				case 127:
				case 163:
				case 164:
				case 165:
				case 166:
				case 167:
				case 168:
				case 173:
				case 174:
				case 175:
				case 176:
				case 177:
				case 178:
				case 179:
				case 180:
				case 181:
				case 182:
					{
					this.state = 1652;
					localctx._exp = this.annotation_argument_value();
					}
					break;
				case 110:
				case 143:
				case 169:
					{
					{
					this.state = 1653;
					this.annotation_argument();
					this.state = 1658;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===13) {
						{
						{
						this.state = 1654;
						this.match(OParser.COMMA);
						this.state = 1655;
						this.annotation_argument();
						}
						}
						this.state = 1660;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1663;
				this.match(OParser.RPAR);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation_identifier(): Annotation_identifierContext {
		let localctx: Annotation_identifierContext = new Annotation_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, OParser.RULE_annotation_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1667;
			this.match(OParser.ARONDBASE_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation_argument(): Annotation_argumentContext {
		let localctx: Annotation_argumentContext = new Annotation_argumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, OParser.RULE_annotation_argument);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1669;
			localctx._name = this.annotation_argument_name();
			this.state = 1670;
			this.match(OParser.EQ);
			this.state = 1671;
			localctx._exp = this.annotation_argument_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation_argument_name(): Annotation_argument_nameContext {
		let localctx: Annotation_argument_nameContext = new Annotation_argument_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, OParser.RULE_annotation_argument_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1673;
			_la = this._input.LA(1);
			if(!(_la===110 || _la===143 || _la===169)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation_argument_value(): Annotation_argument_valueContext {
		let localctx: Annotation_argument_valueContext = new Annotation_argument_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, OParser.RULE_annotation_argument_value);
		try {
			this.state = 1677;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				localctx = new AnnotationLiteralValueContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1675;
				(localctx as AnnotationLiteralValueContext)._exp = this.literal_expression();
				}
				break;
			case 2:
				localctx = new AnnotationTypeValueContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1676;
				(localctx as AnnotationTypeValueContext)._typ = this.primary_type();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public resource_declaration(): Resource_declarationContext {
		let localctx: Resource_declarationContext = new Resource_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, OParser.RULE_resource_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1679;
			this.native_resource_declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enum_declaration(): Enum_declarationContext {
		let localctx: Enum_declarationContext = new Enum_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, OParser.RULE_enum_declaration);
		try {
			this.state = 1683;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1681;
				this.enum_category_declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1682;
				this.enum_native_declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_symbol_list(): Native_symbol_listContext {
		let localctx: Native_symbol_listContext = new Native_symbol_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, OParser.RULE_native_symbol_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1685;
			this.native_symbol();
			this.state = 1691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===167) {
				{
				{
				this.state = 1686;
				this.lfp();
				this.state = 1687;
				this.native_symbol();
				}
				}
				this.state = 1693;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public category_symbol_list(): Category_symbol_listContext {
		let localctx: Category_symbol_listContext = new Category_symbol_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, OParser.RULE_category_symbol_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1694;
			this.category_symbol();
			this.state = 1700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===167) {
				{
				{
				this.state = 1695;
				this.lfp();
				this.state = 1696;
				this.category_symbol();
				}
				}
				this.state = 1702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbol_list(): Symbol_listContext {
		let localctx: Symbol_listContext = new Symbol_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, OParser.RULE_symbol_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1703;
			this.symbol_identifier();
			this.state = 1708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 1704;
				this.match(OParser.COMMA);
				this.state = 1705;
				this.symbol_identifier();
				}
				}
				this.state = 1710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute_constraint(): Attribute_constraintContext {
		let localctx: Attribute_constraintContext = new Attribute_constraintContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, OParser.RULE_attribute_constraint);
		try {
			this.state = 1721;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				localctx = new MatchingListContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1711;
				this.match(OParser.IN);
				this.state = 1712;
				(localctx as MatchingListContext)._source = this.list_literal();
				}
				break;
			case 2:
				localctx = new MatchingSetContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1713;
				this.match(OParser.IN);
				this.state = 1714;
				(localctx as MatchingSetContext)._source = this.set_literal();
				}
				break;
			case 3:
				localctx = new MatchingRangeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1715;
				this.match(OParser.IN);
				this.state = 1716;
				(localctx as MatchingRangeContext)._source = this.range_literal();
				}
				break;
			case 4:
				localctx = new MatchingPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1717;
				this.match(OParser.MATCHING);
				this.state = 1718;
				(localctx as MatchingPatternContext)._text = this.match(OParser.TEXT_LITERAL);
				}
				break;
			case 5:
				localctx = new MatchingExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1719;
				this.match(OParser.MATCHING);
				this.state = 1720;
				(localctx as MatchingExpressionContext)._exp = this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public list_literal(): List_literalContext {
		let localctx: List_literalContext = new List_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, OParser.RULE_list_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===122) {
				{
				this.state = 1723;
				this.match(OParser.MUTABLE);
				}
			}

			this.state = 1726;
			this.match(OParser.LBRAK);
			this.state = 1728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 27271317) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 819201) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 1150369825) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1047679) !== 0)) {
				{
				this.state = 1727;
				this.expression_list();
				}
			}

			this.state = 1730;
			this.match(OParser.RBRAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public set_literal(): Set_literalContext {
		let localctx: Set_literalContext = new Set_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, OParser.RULE_set_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===122) {
				{
				this.state = 1732;
				this.match(OParser.MUTABLE);
				}
			}

			this.state = 1735;
			this.match(OParser.LT);
			this.state = 1737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 27271317) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 819201) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 1150369825) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1047679) !== 0)) {
				{
				this.state = 1736;
				this.expression_list();
				}
			}

			this.state = 1739;
			this.match(OParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression_list(): Expression_listContext {
		let localctx: Expression_listContext = new Expression_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, OParser.RULE_expression_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1741;
			this.expression(0);
			this.state = 1746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 1742;
				this.match(OParser.COMMA);
				this.state = 1743;
				this.expression(0);
				}
				}
				this.state = 1748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public range_literal(): Range_literalContext {
		let localctx: Range_literalContext = new Range_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, OParser.RULE_range_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1749;
			this.match(OParser.LBRAK);
			this.state = 1750;
			localctx._low = this.expression(0);
			this.state = 1751;
			this.match(OParser.RANGE);
			this.state = 1752;
			localctx._high = this.expression(0);
			this.state = 1753;
			this.match(OParser.RBRAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public typedef(): TypedefContext;
	public typedef(_p: number): TypedefContext;
	// @RuleVersion(0)
	public typedef(_p?: number): TypedefContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: TypedefContext = new TypedefContext(this, this._ctx, _parentState);
		let _prevctx: TypedefContext = localctx;
		let _startState: number = 190;
		this.enterRecursionRule(localctx, 190, OParser.RULE_typedef, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1772;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 69:
			case 168:
				{
				localctx = new PrimaryTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1756;
				(localctx as PrimaryTypeContext)._p = this.primary_type();
				}
				break;
			case 68:
				{
				localctx = new CursorTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1757;
				this.match(OParser.CURSOR);
				this.state = 1758;
				this.match(OParser.LT);
				this.state = 1759;
				(localctx as CursorTypeContext)._c = this.typedef(0);
				this.state = 1760;
				this.match(OParser.GT);
				}
				break;
			case 67:
				{
				localctx = new IteratorTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1762;
				this.match(OParser.ITERATOR);
				this.state = 1763;
				this.match(OParser.LT);
				this.state = 1764;
				(localctx as IteratorTypeContext)._i = this.typedef(0);
				this.state = 1765;
				this.match(OParser.GT);
				}
				break;
			case 70:
				{
				localctx = new TypeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1767;
				this.match(OParser.TYPE);
				this.state = 1768;
				this.match(OParser.LT);
				this.state = 1769;
				(localctx as TypeTypeContext)._t = this.typedef(0);
				this.state = 1770;
				this.match(OParser.GT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1783;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 144, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1781;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 143, this._ctx) ) {
					case 1:
						{
						localctx = new SetTypeContext(this, new TypedefContext(this, _parentctx, _parentState));
						(localctx as SetTypeContext)._s = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_typedef);
						this.state = 1774;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1775;
						this.match(OParser.LTGT);
						}
						break;
					case 2:
						{
						localctx = new ListTypeContext(this, new TypedefContext(this, _parentctx, _parentState));
						(localctx as ListTypeContext)._l = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_typedef);
						this.state = 1776;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1777;
						this.match(OParser.LBRAK);
						this.state = 1778;
						this.match(OParser.RBRAK);
						}
						break;
					case 3:
						{
						localctx = new DictTypeContext(this, new TypedefContext(this, _parentctx, _parentState));
						(localctx as DictTypeContext)._d = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_typedef);
						this.state = 1779;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1780;
						this.match(OParser.LTCOLONGT);
						}
						break;
					}
					}
				}
				this.state = 1785;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 144, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primary_type(): Primary_typeContext {
		let localctx: Primary_typeContext = new Primary_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, OParser.RULE_primary_type);
		try {
			this.state = 1788;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 69:
				localctx = new NativeTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1786;
				(localctx as NativeTypeContext)._n = this.native_type();
				}
				break;
			case 168:
				localctx = new CategoryTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1787;
				(localctx as CategoryTypeContext)._c = this.category_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_type(): Native_typeContext {
		let localctx: Native_typeContext = new Native_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, OParser.RULE_native_type);
		try {
			this.state = 1808;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
				localctx = new BooleanTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1790;
				this.match(OParser.BOOLEAN);
				}
				break;
			case 50:
				localctx = new CssTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1791;
				this.match(OParser.CSS);
				}
				break;
			case 51:
				localctx = new CharacterTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1792;
				this.match(OParser.CHARACTER);
				}
				break;
			case 52:
				localctx = new TextTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1793;
				this.match(OParser.TEXT);
				}
				break;
			case 64:
				localctx = new ImageTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1794;
				this.match(OParser.IMAGE);
				}
				break;
			case 53:
				localctx = new IntegerTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1795;
				this.match(OParser.INTEGER);
				}
				break;
			case 54:
				localctx = new DecimalTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1796;
				this.match(OParser.DECIMAL);
				}
				break;
			case 62:
				localctx = new DocumentTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1797;
				this.match(OParser.DOCUMENT);
				}
				break;
			case 55:
				localctx = new DateTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1798;
				this.match(OParser.DATE);
				}
				break;
			case 57:
				localctx = new DateTimeTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1799;
				this.match(OParser.DATETIME);
				}
				break;
			case 56:
				localctx = new TimeTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1800;
				this.match(OParser.TIME);
				}
				break;
			case 58:
				localctx = new PeriodTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1801;
				this.match(OParser.PERIOD);
				}
				break;
			case 59:
				localctx = new VersionTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 1802;
				this.match(OParser.VERSION);
				}
				break;
			case 61:
				localctx = new CodeTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 1803;
				this.match(OParser.CODE);
				}
				break;
			case 63:
				localctx = new BlobTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 1804;
				this.match(OParser.BLOB);
				}
				break;
			case 65:
				localctx = new UUIDTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 1805;
				this.match(OParser.UUID);
				}
				break;
			case 66:
				localctx = new DbIdTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 1806;
				this.match(OParser.DBID);
				}
				break;
			case 69:
				localctx = new HtmlTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 1807;
				this.match(OParser.HTML);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public category_type(): Category_typeContext {
		let localctx: Category_typeContext = new Category_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, OParser.RULE_category_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1810;
			localctx._t1 = this.match(OParser.TYPE_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mutable_category_type(): Mutable_category_typeContext {
		let localctx: Mutable_category_typeContext = new Mutable_category_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, OParser.RULE_mutable_category_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===122) {
				{
				this.state = 1812;
				this.match(OParser.MUTABLE);
				}
			}

			this.state = 1815;
			this.category_type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public code_type(): Code_typeContext {
		let localctx: Code_typeContext = new Code_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, OParser.RULE_code_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1817;
			localctx._t1 = this.match(OParser.CODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public category_declaration(): Category_declarationContext {
		let localctx: Category_declarationContext = new Category_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, OParser.RULE_category_declaration);
		try {
			this.state = 1822;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				localctx = new ConcreteCategoryDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1819;
				(localctx as ConcreteCategoryDeclarationContext)._decl = this.concrete_category_declaration();
				}
				break;
			case 2:
				localctx = new NativeCategoryDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1820;
				(localctx as NativeCategoryDeclarationContext)._decl = this.native_category_declaration();
				}
				break;
			case 3:
				localctx = new SingletonCategoryDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1821;
				(localctx as SingletonCategoryDeclarationContext)._decl = this.singleton_category_declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public widget_declaration(): Widget_declarationContext {
		let localctx: Widget_declarationContext = new Widget_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, OParser.RULE_widget_declaration);
		try {
			this.state = 1826;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 157:
				localctx = new ConcreteWidgetDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1824;
				(localctx as ConcreteWidgetDeclarationContext)._decl = this.concrete_widget_declaration();
				}
				break;
			case 123:
				localctx = new NativeWidgetDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1825;
				(localctx as NativeWidgetDeclarationContext)._decl = this.native_widget_declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_identifier_list(): Type_identifier_listContext {
		let localctx: Type_identifier_listContext = new Type_identifier_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, OParser.RULE_type_identifier_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1828;
			this.type_identifier();
			this.state = 1833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 1829;
				this.match(OParser.COMMA);
				this.state = 1830;
				this.type_identifier();
				}
				}
				this.state = 1835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public method_identifier(): Method_identifierContext {
		let localctx: Method_identifierContext = new Method_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, OParser.RULE_method_identifier);
		try {
			this.state = 1838;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
			case 138:
			case 169:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1836;
				this.variable_identifier();
				}
				break;
			case 168:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1837;
				this.type_identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier_or_keyword(): Identifier_or_keywordContext {
		let localctx: Identifier_or_keywordContext = new Identifier_or_keywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, OParser.RULE_identifier_or_keyword);
		try {
			this.state = 1842;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1840;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1841;
				this.keyword();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nospace_hyphen_identifier_or_keyword(): Nospace_hyphen_identifier_or_keywordContext {
		let localctx: Nospace_hyphen_identifier_or_keywordContext = new Nospace_hyphen_identifier_or_keywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, OParser.RULE_nospace_hyphen_identifier_or_keyword);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1844;
			if (!(this.wasNotWhiteSpace())) {
				throw this.createFailedPredicateException("$parser.wasNotWhiteSpace()");
			}
			this.state = 1845;
			this.match(OParser.MINUS);
			this.state = 1846;
			this.nospace_identifier_or_keyword();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nospace_identifier_or_keyword(): Nospace_identifier_or_keywordContext {
		let localctx: Nospace_identifier_or_keywordContext = new Nospace_identifier_or_keywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, OParser.RULE_nospace_identifier_or_keyword);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1848;
			if (!(this.wasNotWhiteSpace())) {
				throw this.createFailedPredicateException("$parser.wasNotWhiteSpace()");
			}
			this.state = 1849;
			this.identifier_or_keyword();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, OParser.RULE_identifier);
		try {
			this.state = 1854;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
			case 138:
			case 169:
				localctx = new VariableIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1851;
				this.variable_identifier();
				}
				break;
			case 168:
				localctx = new TypeIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1852;
				this.type_identifier();
				}
				break;
			case 167:
				localctx = new SymbolIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1853;
				this.symbol_identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public member_identifier(): Member_identifierContext {
		let localctx: Member_identifierContext = new Member_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, OParser.RULE_member_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1856;
			_la = this._input.LA(1);
			if(!(_la===86 || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 16842753) !== 0) || _la===169)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variable_identifier(): Variable_identifierContext {
		let localctx: Variable_identifierContext = new Variable_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, OParser.RULE_variable_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1858;
			_la = this._input.LA(1);
			if(!(_la===86 || _la===138 || _la===169)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute_identifier(): Attribute_identifierContext {
		let localctx: Attribute_identifierContext = new Attribute_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, OParser.RULE_attribute_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1860;
			_la = this._input.LA(1);
			if(!(((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & 2147483905) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_identifier(): Type_identifierContext {
		let localctx: Type_identifierContext = new Type_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, OParser.RULE_type_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1862;
			this.match(OParser.TYPE_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbol_identifier(): Symbol_identifierContext {
		let localctx: Symbol_identifierContext = new Symbol_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, OParser.RULE_symbol_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1864;
			this.match(OParser.SYMBOL_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argument_list(): Argument_listContext {
		let localctx: Argument_listContext = new Argument_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, OParser.RULE_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1866;
			this.argument();
			this.state = 1871;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 1867;
				this.match(OParser.COMMA);
				this.state = 1868;
				this.argument();
				}
				}
				this.state = 1873;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let localctx: ArgumentContext = new ArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, OParser.RULE_argument);
		let _la: number;
		try {
			this.state = 1879;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				localctx = new CodeArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1874;
				(localctx as CodeArgumentContext)._arg = this.code_argument();
				}
				break;
			case 2:
				localctx = new OperatorArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===122) {
					{
					this.state = 1875;
					this.match(OParser.MUTABLE);
					}
				}

				this.state = 1878;
				(localctx as OperatorArgumentContext)._arg = this.operator_argument();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public operator_argument(): Operator_argumentContext {
		let localctx: Operator_argumentContext = new Operator_argumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, OParser.RULE_operator_argument);
		try {
			this.state = 1883;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
			case 138:
			case 169:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1881;
				this.named_argument();
				}
				break;
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 75:
			case 168:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1882;
				this.typed_argument();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public named_argument(): Named_argumentContext {
		let localctx: Named_argumentContext = new Named_argumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, OParser.RULE_named_argument);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1885;
			this.variable_identifier();
			this.state = 1888;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 1886;
				this.match(OParser.EQ);
				this.state = 1887;
				this.literal_expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public code_argument(): Code_argumentContext {
		let localctx: Code_argumentContext = new Code_argumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, OParser.RULE_code_argument);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1890;
			this.code_type();
			this.state = 1891;
			localctx._name = this.variable_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public category_or_any_type(): Category_or_any_typeContext {
		let localctx: Category_or_any_typeContext = new Category_or_any_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, OParser.RULE_category_or_any_type);
		try {
			this.state = 1895;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 168:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1893;
				this.typedef(0);
				}
				break;
			case 75:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1894;
				this.any_type(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public any_type(): Any_typeContext;
	public any_type(_p: number): Any_typeContext;
	// @RuleVersion(0)
	public any_type(_p?: number): Any_typeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Any_typeContext = new Any_typeContext(this, this._ctx, _parentState);
		let _prevctx: Any_typeContext = localctx;
		let _startState: number = 240;
		this.enterRecursionRule(localctx, 240, OParser.RULE_any_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new AnyTypeContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1898;
			this.match(OParser.ANY);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1908;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1906;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
					case 1:
						{
						localctx = new AnyListTypeContext(this, new Any_typeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_any_type);
						this.state = 1900;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1901;
						this.match(OParser.LBRAK);
						this.state = 1902;
						this.match(OParser.RBRAK);
						}
						break;
					case 2:
						{
						localctx = new AnyDictTypeContext(this, new Any_typeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, OParser.RULE_any_type);
						this.state = 1903;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1904;
						this.match(OParser.LCURL);
						this.state = 1905;
						this.match(OParser.RCURL);
						}
						break;
					}
					}
				}
				this.state = 1910;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 161, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public member_method_declaration_list(): Member_method_declaration_listContext {
		let localctx: Member_method_declaration_listContext = new Member_method_declaration_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, OParser.RULE_member_method_declaration_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1911;
			this.member_method_declaration();
			this.state = 1917;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 8386559) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1053185) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 570425345) !== 0)) {
				{
				{
				this.state = 1912;
				this.lfp();
				this.state = 1913;
				this.member_method_declaration();
				}
				}
				this.state = 1919;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public member_method_declaration(): Member_method_declarationContext {
		let localctx: Member_method_declarationContext = new Member_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, OParser.RULE_member_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1920;
				this.comment_statement();
				this.state = 1921;
				this.lfp();
				}
				}
				this.state = 1927;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1933;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===172) {
				{
				{
				this.state = 1928;
				this.annotation_constructor();
				this.state = 1929;
				this.lfp();
				}
				}
				this.state = 1935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1941;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
			case 1:
				{
				this.state = 1936;
				this.setter_method_declaration();
				}
				break;
			case 2:
				{
				this.state = 1937;
				this.getter_method_declaration();
				}
				break;
			case 3:
				{
				this.state = 1938;
				this.concrete_method_declaration();
				}
				break;
			case 4:
				{
				this.state = 1939;
				this.abstract_member_method_declaration();
				}
				break;
			case 5:
				{
				this.state = 1940;
				this.operator_method_declaration();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_member_method_declaration_list(): Native_member_method_declaration_listContext {
		let localctx: Native_member_method_declaration_listContext = new Native_member_method_declaration_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, OParser.RULE_native_member_method_declaration_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1943;
			this.native_member_method_declaration();
			this.state = 1949;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4 || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 8705) !== 0) || ((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 570425345) !== 0)) {
				{
				{
				this.state = 1944;
				this.lfp();
				this.state = 1945;
				this.native_member_method_declaration();
				}
				}
				this.state = 1951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_member_method_declaration(): Native_member_method_declarationContext {
		let localctx: Native_member_method_declarationContext = new Native_member_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, OParser.RULE_native_member_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1957;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1952;
				this.comment_statement();
				this.state = 1953;
				this.lfp();
				}
				}
				this.state = 1959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1965;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===172) {
				{
				{
				this.state = 1960;
				this.annotation_constructor();
				this.state = 1961;
				this.lfp();
				}
				}
				this.state = 1967;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1971;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				{
				this.state = 1968;
				this.native_getter_declaration();
				}
				break;
			case 2:
				{
				this.state = 1969;
				this.native_setter_declaration();
				}
				break;
			case 3:
				{
				this.state = 1970;
				this.native_method_declaration();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_category_binding(): Native_category_bindingContext {
		let localctx: Native_category_bindingContext = new Native_category_bindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, OParser.RULE_native_category_binding);
		try {
			this.state = 1983;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				localctx = new JavaCategoryBindingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1973;
				this.match(OParser.JAVA);
				this.state = 1974;
				(localctx as JavaCategoryBindingContext)._binding = this.java_class_identifier_expression(0);
				}
				break;
			case 6:
				localctx = new CSharpCategoryBindingContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1975;
				this.match(OParser.CSHARP);
				this.state = 1976;
				(localctx as CSharpCategoryBindingContext)._binding = this.csharp_identifier_expression(0);
				}
				break;
			case 7:
				localctx = new Python2CategoryBindingContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1977;
				this.match(OParser.PYTHON2);
				this.state = 1978;
				(localctx as Python2CategoryBindingContext)._binding = this.python_category_binding();
				}
				break;
			case 8:
				localctx = new Python3CategoryBindingContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1979;
				this.match(OParser.PYTHON3);
				this.state = 1980;
				(localctx as Python3CategoryBindingContext)._binding = this.python_category_binding();
				}
				break;
			case 9:
				localctx = new JavascriptCategoryBindingContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1981;
				this.match(OParser.JAVASCRIPT);
				this.state = 1982;
				(localctx as JavascriptCategoryBindingContext)._binding = this.javascript_category_binding();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_category_binding(): Python_category_bindingContext {
		let localctx: Python_category_bindingContext = new Python_category_bindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, OParser.RULE_python_category_binding);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1985;
			this.identifier();
			this.state = 1987;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===109) {
				{
				this.state = 1986;
				this.python_module();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_module(): Python_moduleContext {
		let localctx: Python_moduleContext = new Python_moduleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, OParser.RULE_python_module);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1989;
			this.match(OParser.FROM);
			this.state = 1990;
			this.module_token();
			this.state = 1991;
			this.match(OParser.COLON);
			this.state = 1992;
			this.python_identifier();
			this.state = 1997;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 1993;
				this.match(OParser.DOT);
				this.state = 1994;
				this.python_identifier();
				}
				}
				this.state = 1999;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_category_binding(): Javascript_category_bindingContext {
		let localctx: Javascript_category_bindingContext = new Javascript_category_bindingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, OParser.RULE_javascript_category_binding);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2000;
			this.javascript_identifier();
			this.state = 2005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 2001;
				this.match(OParser.DOT);
				this.state = 2002;
				this.javascript_identifier();
				}
				}
				this.state = 2007;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2009;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===109) {
				{
				this.state = 2008;
				this.javascript_module();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_module(): Javascript_moduleContext {
		let localctx: Javascript_moduleContext = new Javascript_moduleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, OParser.RULE_javascript_module);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2011;
			this.match(OParser.FROM);
			this.state = 2012;
			this.module_token();
			this.state = 2013;
			this.match(OParser.COLON);
			this.state = 2015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 2014;
				this.match(OParser.SLASH);
				}
			}

			this.state = 2017;
			this.javascript_identifier();
			this.state = 2022;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 2018;
				this.match(OParser.SLASH);
				this.state = 2019;
				this.javascript_identifier();
				}
				}
				this.state = 2024;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2027;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 2025;
				this.match(OParser.DOT);
				this.state = 2026;
				this.javascript_identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variable_identifier_list(): Variable_identifier_listContext {
		let localctx: Variable_identifier_listContext = new Variable_identifier_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 260, OParser.RULE_variable_identifier_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2029;
			this.variable_identifier();
			this.state = 2034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 2030;
				this.match(OParser.COMMA);
				this.state = 2031;
				this.variable_identifier();
				}
				}
				this.state = 2036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute_identifier_list(): Attribute_identifier_listContext {
		let localctx: Attribute_identifier_listContext = new Attribute_identifier_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, OParser.RULE_attribute_identifier_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2037;
			this.attribute_identifier();
			this.state = 2042;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 2038;
				this.match(OParser.COMMA);
				this.state = 2039;
				this.attribute_identifier();
				}
				}
				this.state = 2044;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public method_declaration(): Method_declarationContext {
		let localctx: Method_declarationContext = new Method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, OParser.RULE_method_declaration);
		try {
			this.state = 2049;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2045;
				this.abstract_global_method_declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2046;
				this.concrete_method_declaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2047;
				this.native_method_declaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2048;
				this.test_method_declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comment_statement(): Comment_statementContext {
		let localctx: Comment_statementContext = new Comment_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 266, OParser.RULE_comment_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2051;
			this.match(OParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_statement_list(): Native_statement_listContext {
		let localctx: Native_statement_listContext = new Native_statement_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 268, OParser.RULE_native_statement_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2053;
			this.native_statement();
			this.state = 2059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 992) !== 0)) {
				{
				{
				this.state = 2054;
				this.lfp();
				this.state = 2055;
				this.native_statement();
				}
				}
				this.state = 2061;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_statement(): Native_statementContext {
		let localctx: Native_statementContext = new Native_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, OParser.RULE_native_statement);
		try {
			this.state = 2072;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				localctx = new JavaNativeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2062;
				this.match(OParser.JAVA);
				this.state = 2063;
				this.java_statement();
				}
				break;
			case 6:
				localctx = new CSharpNativeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2064;
				this.match(OParser.CSHARP);
				this.state = 2065;
				this.csharp_statement();
				}
				break;
			case 7:
				localctx = new Python2NativeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2066;
				this.match(OParser.PYTHON2);
				this.state = 2067;
				this.python_native_statement();
				}
				break;
			case 8:
				localctx = new Python3NativeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2068;
				this.match(OParser.PYTHON3);
				this.state = 2069;
				this.python_native_statement();
				}
				break;
			case 9:
				localctx = new JavascriptNativeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2070;
				this.match(OParser.JAVASCRIPT);
				this.state = 2071;
				this.javascript_native_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_native_statement(): Python_native_statementContext {
		let localctx: Python_native_statementContext = new Python_native_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 272, OParser.RULE_python_native_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2074;
			this.python_statement();
			this.state = 2076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 2075;
				this.match(OParser.SEMI);
				}
			}

			this.state = 2079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===109) {
				{
				this.state = 2078;
				this.python_module();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_native_statement(): Javascript_native_statementContext {
		let localctx: Javascript_native_statementContext = new Javascript_native_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 274, OParser.RULE_javascript_native_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2081;
			this.javascript_statement();
			this.state = 2083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 2082;
				this.match(OParser.SEMI);
				}
			}

			this.state = 2086;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===109) {
				{
				this.state = 2085;
				this.javascript_module();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement_list(): Statement_listContext {
		let localctx: Statement_listContext = new Statement_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 276, OParser.RULE_statement_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2088;
			this.statement();
			this.state = 2094;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 538247184) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4286574601) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 42082371) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 8683803) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 4266342989) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 32739) !== 0)) {
				{
				{
				this.state = 2089;
				this.lfp();
				this.state = 2090;
				this.statement();
				}
				}
				this.state = 2096;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assertion_list(): Assertion_listContext {
		let localctx: Assertion_listContext = new Assertion_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 278, OParser.RULE_assertion_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2097;
			this.assertion();
			this.state = 2103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 27271317) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 819201) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 1150369825) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1047679) !== 0)) {
				{
				{
				this.state = 2098;
				this.lfp();
				this.state = 2099;
				this.assertion();
				}
				}
				this.state = 2105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switch_case_statement_list(): Switch_case_statement_listContext {
		let localctx: Switch_case_statement_listContext = new Switch_case_statement_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 280, OParser.RULE_switch_case_statement_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2106;
			this.switch_case_statement();
			this.state = 2112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===84) {
				{
				{
				this.state = 2107;
				this.lfp();
				this.state = 2108;
				this.switch_case_statement();
				}
				}
				this.state = 2114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catch_statement_list(): Catch_statement_listContext {
		let localctx: Catch_statement_listContext = new Catch_statement_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 282, OParser.RULE_catch_statement_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2115;
			this.catch_statement();
			this.state = 2121;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 190, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2116;
					this.lfp();
					this.state = 2117;
					this.catch_statement();
					}
					}
				}
				this.state = 2123;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 190, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal_collection(): Literal_collectionContext {
		let localctx: Literal_collectionContext = new Literal_collectionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 284, OParser.RULE_literal_collection);
		try {
			this.state = 2138;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				localctx = new LiteralRangeLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2124;
				this.match(OParser.LBRAK);
				this.state = 2125;
				(localctx as LiteralRangeLiteralContext)._low = this.atomic_literal();
				this.state = 2126;
				this.match(OParser.RANGE);
				this.state = 2127;
				(localctx as LiteralRangeLiteralContext)._high = this.atomic_literal();
				this.state = 2128;
				this.match(OParser.RBRAK);
				}
				break;
			case 2:
				localctx = new LiteralListLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2130;
				this.match(OParser.LBRAK);
				this.state = 2131;
				this.literal_list_literal();
				this.state = 2132;
				this.match(OParser.RBRAK);
				}
				break;
			case 3:
				localctx = new LiteralSetLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2134;
				this.match(OParser.LT);
				this.state = 2135;
				this.literal_list_literal();
				this.state = 2136;
				this.match(OParser.GT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atomic_literal(): Atomic_literalContext {
		let localctx: Atomic_literalContext = new Atomic_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 286, OParser.RULE_atomic_literal);
		let _la: number;
		try {
			this.state = 2163;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				localctx = new MinIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2140;
				this.match(OParser.MIN_INTEGER);
				}
				break;
			case 2:
				localctx = new MaxIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2141;
				this.match(OParser.MAX_INTEGER);
				}
				break;
			case 3:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===29) {
					{
					this.state = 2142;
					this.match(OParser.MINUS);
					}
				}

				this.state = 2145;
				this.match(OParser.INTEGER_LITERAL);
				}
				break;
			case 4:
				localctx = new HexadecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2146;
				this.match(OParser.HEXA_LITERAL);
				}
				break;
			case 5:
				localctx = new CharacterLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2147;
				this.match(OParser.CHAR_LITERAL);
				}
				break;
			case 6:
				localctx = new DateLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2148;
				this.match(OParser.DATE_LITERAL);
				}
				break;
			case 7:
				localctx = new TimeLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2149;
				this.match(OParser.TIME_LITERAL);
				}
				break;
			case 8:
				localctx = new TextLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2150;
				this.match(OParser.TEXT_LITERAL);
				}
				break;
			case 9:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 2152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===29) {
					{
					this.state = 2151;
					this.match(OParser.MINUS);
					}
				}

				this.state = 2154;
				this.match(OParser.DECIMAL_LITERAL);
				}
				break;
			case 10:
				localctx = new DateTimeLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 2155;
				this.match(OParser.DATETIME_LITERAL);
				}
				break;
			case 11:
				localctx = new BooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 2156;
				this.match(OParser.BOOLEAN_LITERAL);
				}
				break;
			case 12:
				localctx = new PeriodLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 2157;
				this.match(OParser.PERIOD_LITERAL);
				}
				break;
			case 13:
				localctx = new VersionLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 2158;
				this.match(OParser.VERSION_LITERAL);
				}
				break;
			case 14:
				localctx = new UUIDLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 2159;
				this.match(OParser.UUID_LITERAL);
				}
				break;
			case 15:
				localctx = new SymbolLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 2160;
				this.symbol_identifier();
				}
				break;
			case 16:
				localctx = new TypeLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 2161;
				this.type_literal();
				}
				break;
			case 17:
				localctx = new NullLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 2162;
				this.null_literal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal_list_literal(): Literal_list_literalContext {
		let localctx: Literal_list_literalContext = new Literal_list_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 288, OParser.RULE_literal_list_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2165;
			this.atomic_literal();
			this.state = 2170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 2166;
				this.match(OParser.COMMA);
				this.state = 2167;
				this.atomic_literal();
				}
				}
				this.state = 2172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public this_expression(): This_expressionContext {
		let localctx: This_expressionContext = new This_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 290, OParser.RULE_this_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2173;
			_la = this._input.LA(1);
			if(!(_la===142 || _la===152)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public super_expression(): Super_expressionContext {
		let localctx: Super_expressionContext = new Super_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 292, OParser.RULE_super_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===168) {
				{
				this.state = 2175;
				this.category_type();
				this.state = 2176;
				this.match(OParser.DOT);
				}
			}

			this.state = 2180;
			this.match(OParser.SUPER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parenthesis_expression(): Parenthesis_expressionContext {
		let localctx: Parenthesis_expressionContext = new Parenthesis_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 294, OParser.RULE_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2182;
			this.match(OParser.LPAR);
			this.state = 2183;
			this.expression(0);
			this.state = 2184;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal_expression(): Literal_expressionContext {
		let localctx: Literal_expressionContext = new Literal_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 296, OParser.RULE_literal_expression);
		try {
			this.state = 2188;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 29:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 75:
			case 127:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2186;
				this.atomic_literal();
				}
				break;
			case 16:
			case 18:
			case 20:
			case 37:
			case 40:
			case 122:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2187;
				this.collection_literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public collection_literal(): Collection_literalContext {
		let localctx: Collection_literalContext = new Collection_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 298, OParser.RULE_collection_literal);
		try {
			this.state = 2196;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2190;
				this.range_literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2191;
				this.list_literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2192;
				this.set_literal();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2193;
				this.dict_literal();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2194;
				this.document_literal();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2195;
				this.tuple_literal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tuple_literal(): Tuple_literalContext {
		let localctx: Tuple_literalContext = new Tuple_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 300, OParser.RULE_tuple_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===122) {
				{
				this.state = 2198;
				this.match(OParser.MUTABLE);
				}
			}

			this.state = 2201;
			this.match(OParser.LPAR);
			this.state = 2203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 27271317) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 819201) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 1150369825) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1047679) !== 0)) {
				{
				this.state = 2202;
				this.expression_tuple();
				}
			}

			this.state = 2205;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dict_literal(): Dict_literalContext {
		let localctx: Dict_literalContext = new Dict_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 302, OParser.RULE_dict_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===122) {
				{
				this.state = 2207;
				this.match(OParser.MUTABLE);
				}
			}

			this.state = 2218;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				{
				{
				this.state = 2210;
				this.match(OParser.LT);
				this.state = 2211;
				this.dict_entry_list();
				this.state = 2212;
				this.match(OParser.GT);
				}
				}
				break;
			case 2:
				{
				this.state = 2214;
				this.match(OParser.LTCOLONGT);
				}
				break;
			case 3:
				{
				{
				this.state = 2215;
				this.match(OParser.LT);
				this.state = 2216;
				this.match(OParser.COLON);
				this.state = 2217;
				this.match(OParser.GT);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public document_literal(): Document_literalContext {
		let localctx: Document_literalContext = new Document_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 304, OParser.RULE_document_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2220;
			this.match(OParser.LCURL);
			this.state = 2222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2016) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4292868093) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294967295) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4294967285) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 298057663) !== 0)) {
				{
				this.state = 2221;
				this.doc_entry_list();
				}
			}

			this.state = 2224;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression_tuple(): Expression_tupleContext {
		let localctx: Expression_tupleContext = new Expression_tupleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 306, OParser.RULE_expression_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2226;
			this.expression(0);
			this.state = 2227;
			this.match(OParser.COMMA);
			this.state = 2236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 27271317) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 819201) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 1150369825) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1047679) !== 0)) {
				{
				this.state = 2228;
				this.expression(0);
				this.state = 2233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===13) {
					{
					{
					this.state = 2229;
					this.match(OParser.COMMA);
					this.state = 2230;
					this.expression(0);
					}
					}
					this.state = 2235;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doc_entry_list(): Doc_entry_listContext {
		let localctx: Doc_entry_listContext = new Doc_entry_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 308, OParser.RULE_doc_entry_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2238;
			this.doc_entry();
			this.state = 2243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 2239;
				this.match(OParser.COMMA);
				this.state = 2240;
				this.doc_entry();
				}
				}
				this.state = 2245;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doc_entry(): Doc_entryContext {
		let localctx: Doc_entryContext = new Doc_entryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 310, OParser.RULE_doc_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2246;
			localctx._key = this.doc_key();
			this.state = 2247;
			this.match(OParser.COLON);
			this.state = 2248;
			localctx._value = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public doc_key(): Doc_keyContext {
		let localctx: Doc_keyContext = new Doc_keyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 312, OParser.RULE_doc_key);
		try {
			this.state = 2252;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 49:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 167:
			case 168:
			case 169:
				localctx = new DocKeyIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2250;
				(localctx as DocKeyIdentifierContext)._name = this.identifier_or_keyword();
				}
				break;
			case 173:
				localctx = new DocKeyTextContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2251;
				(localctx as DocKeyTextContext)._name = this.match(OParser.TEXT_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dict_entry_list(): Dict_entry_listContext {
		let localctx: Dict_entry_listContext = new Dict_entry_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 314, OParser.RULE_dict_entry_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2254;
			this.dict_entry();
			this.state = 2259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 2255;
				this.match(OParser.COMMA);
				this.state = 2256;
				this.dict_entry();
				}
				}
				this.state = 2261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dict_entry(): Dict_entryContext {
		let localctx: Dict_entryContext = new Dict_entryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 316, OParser.RULE_dict_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2262;
			localctx._key = this.dict_key();
			this.state = 2263;
			this.match(OParser.COLON);
			this.state = 2264;
			localctx._value = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dict_key(): Dict_keyContext {
		let localctx: Dict_keyContext = new Dict_keyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 318, OParser.RULE_dict_key);
		try {
			this.state = 2268;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 49:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 167:
			case 168:
			case 169:
				localctx = new DictKeyIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2266;
				(localctx as DictKeyIdentifierContext)._name = this.identifier_or_keyword();
				}
				break;
			case 173:
				localctx = new DictKeyTextContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2267;
				(localctx as DictKeyTextContext)._name = this.match(OParser.TEXT_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public slice_arguments(): Slice_argumentsContext {
		let localctx: Slice_argumentsContext = new Slice_argumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 320, OParser.RULE_slice_arguments);
		try {
			this.state = 2279;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				localctx = new SliceFirstAndLastContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2270;
				(localctx as SliceFirstAndLastContext)._first = this.expression(0);
				this.state = 2271;
				this.match(OParser.COLON);
				this.state = 2272;
				(localctx as SliceFirstAndLastContext)._last = this.expression(0);
				}
				break;
			case 2:
				localctx = new SliceFirstOnlyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2274;
				(localctx as SliceFirstOnlyContext)._first = this.expression(0);
				this.state = 2275;
				this.match(OParser.COLON);
				}
				break;
			case 3:
				localctx = new SliceLastOnlyContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2277;
				this.match(OParser.COLON);
				this.state = 2278;
				(localctx as SliceLastOnlyContext)._last = this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assign_variable_statement(): Assign_variable_statementContext {
		let localctx: Assign_variable_statementContext = new Assign_variable_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 322, OParser.RULE_assign_variable_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2281;
			this.variable_identifier();
			this.state = 2282;
			this.assign();
			this.state = 2283;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public assignable_instance(): Assignable_instanceContext;
	public assignable_instance(_p: number): Assignable_instanceContext;
	// @RuleVersion(0)
	public assignable_instance(_p?: number): Assignable_instanceContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Assignable_instanceContext = new Assignable_instanceContext(this, this._ctx, _parentState);
		let _prevctx: Assignable_instanceContext = localctx;
		let _startState: number = 324;
		this.enterRecursionRule(localctx, 324, OParser.RULE_assignable_instance, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new RootInstanceContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2286;
			this.variable_identifier();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2292;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 211, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ChildInstanceContext(this, new Assignable_instanceContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_assignable_instance);
					this.state = 2288;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2289;
					this.child_instance();
					}
					}
				}
				this.state = 2294;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 211, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public is_expression(): Is_expressionContext {
		let localctx: Is_expressionContext = new Is_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 326, OParser.RULE_is_expression);
		try {
			this.state = 2299;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				localctx = new IsATypeExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2295;
				if (!(this.willBeAOrAn())) {
					throw this.createFailedPredicateException("$parser.willBeAOrAn()");
				}
				this.state = 2296;
				this.match(OParser.VARIABLE_IDENTIFIER);
				this.state = 2297;
				this.category_or_any_type();
				}
				break;
			case 2:
				localctx = new IsOtherExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2298;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public metadata(): MetadataContext {
		let localctx: MetadataContext = new MetadataContext(this, this._ctx, this.state);
		this.enterRule(localctx, 328, OParser.RULE_metadata);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2301;
			if (!(this.willBeText("metadata"))) {
				throw this.createFailedPredicateException("$parser.willBeText(\"metadata\")");
			}
			this.state = 2302;
			this.match(OParser.VARIABLE_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrow_expression(): Arrow_expressionContext {
		let localctx: Arrow_expressionContext = new Arrow_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 330, OParser.RULE_arrow_expression);
		try {
			this.state = 2312;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				localctx = new ArrowExpressionBodyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2304;
				this.arrow_prefix();
				this.state = 2305;
				this.expression(0);
				}
				break;
			case 2:
				localctx = new ArrowStatementsBodyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2307;
				this.arrow_prefix();
				this.state = 2308;
				this.match(OParser.LCURL);
				this.state = 2309;
				this.statement_list();
				this.state = 2310;
				this.match(OParser.RCURL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrow_prefix(): Arrow_prefixContext {
		let localctx: Arrow_prefixContext = new Arrow_prefixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 332, OParser.RULE_arrow_prefix);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2314;
			this.arrow_args();
			this.state = 2315;
			localctx._s1 = this.ws_plus();
			this.state = 2316;
			this.match(OParser.EGT);
			this.state = 2317;
			localctx._s2 = this.ws_plus();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrow_args(): Arrow_argsContext {
		let localctx: Arrow_argsContext = new Arrow_argsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 334, OParser.RULE_arrow_args);
		let _la: number;
		try {
			this.state = 2325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 86:
			case 138:
			case 169:
				localctx = new ArrowSingleArgContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2319;
				this.variable_identifier();
				}
				break;
			case 16:
				localctx = new ArrowListArgContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2320;
				this.match(OParser.LPAR);
				this.state = 2322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===86 || _la===138 || _la===169) {
					{
					this.state = 2321;
					this.variable_identifier_list();
					}
				}

				this.state = 2324;
				this.match(OParser.RPAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sorted_key(): Sorted_keyContext {
		let localctx: Sorted_keyContext = new Sorted_keyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 336, OParser.RULE_sorted_key);
		try {
			this.state = 2329;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2327;
				this.instance_expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2328;
				this.arrow_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public read_blob_expression(): Read_blob_expressionContext {
		let localctx: Read_blob_expressionContext = new Read_blob_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 338, OParser.RULE_read_blob_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2331;
			this.match(OParser.READ);
			this.state = 2332;
			this.match(OParser.BLOB);
			this.state = 2333;
			this.match(OParser.FROM);
			this.state = 2334;
			localctx._source = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public read_all_expression(): Read_all_expressionContext {
		let localctx: Read_all_expressionContext = new Read_all_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 340, OParser.RULE_read_all_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2336;
			this.match(OParser.READ);
			this.state = 2337;
			this.match(OParser.ALL);
			this.state = 2338;
			this.match(OParser.FROM);
			this.state = 2339;
			localctx._source = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public read_one_expression(): Read_one_expressionContext {
		let localctx: Read_one_expressionContext = new Read_one_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 342, OParser.RULE_read_one_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2341;
			this.match(OParser.READ);
			this.state = 2342;
			this.match(OParser.ONE);
			this.state = 2343;
			this.match(OParser.FROM);
			this.state = 2344;
			localctx._source = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public order_by_list(): Order_by_listContext {
		let localctx: Order_by_listContext = new Order_by_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 344, OParser.RULE_order_by_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2346;
			this.order_by();
			this.state = 2351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 2347;
				this.match(OParser.COMMA);
				this.state = 2348;
				this.order_by();
				}
				}
				this.state = 2353;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public order_by(): Order_byContext {
		let localctx: Order_byContext = new Order_byContext(this, this._ctx, this.state);
		this.enterRule(localctx, 346, OParser.RULE_order_by);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2354;
			this.variable_identifier();
			this.state = 2359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 2355;
				this.match(OParser.DOT);
				this.state = 2356;
				this.variable_identifier();
				}
				}
				this.state = 2361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===77 || _la===93) {
				{
				this.state = 2362;
				_la = this._input.LA(1);
				if(!(_la===77 || _la===93)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public include_list(): Include_listContext {
		let localctx: Include_listContext = new Include_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 348, OParser.RULE_include_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2365;
			this.variable_identifier();
			this.state = 2370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 2366;
				this.match(OParser.COMMA);
				this.state = 2367;
				this.variable_identifier();
				}
				}
				this.state = 2372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let localctx: OperatorContext = new OperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 350, OParser.RULE_operator);
		try {
			this.state = 2379;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				localctx = new OperatorPlusContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2373;
				this.match(OParser.PLUS);
				}
				break;
			case 29:
				localctx = new OperatorMinusContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2374;
				this.match(OParser.MINUS);
				}
				break;
			case 30:
				localctx = new OperatorMultiplyContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2375;
				this.multiply();
				}
				break;
			case 31:
				localctx = new OperatorDivideContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2376;
				this.divide();
				}
				break;
			case 32:
				localctx = new OperatorIDivideContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2377;
				this.idivide();
				}
				break;
			case 33:
			case 121:
				localctx = new OperatorModuloContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2378;
				this.modulo();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let localctx: KeywordContext = new KeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 352, OParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2381;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2016) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4292868093) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294967295) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4294967285) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 262079) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public new_token(): New_tokenContext {
		let localctx: New_tokenContext = new New_tokenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 354, OParser.RULE_new_token);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2383;
			localctx._i1 = this.match(OParser.VARIABLE_IDENTIFIER);
			this.state = 2384;
			if (!(this.isText(localctx._i1,"new"))) {
				throw this.createFailedPredicateException("$parser.isText($i1,\"new\")");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public key_token(): Key_tokenContext {
		let localctx: Key_tokenContext = new Key_tokenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 356, OParser.RULE_key_token);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2386;
			localctx._i1 = this.match(OParser.VARIABLE_IDENTIFIER);
			this.state = 2387;
			if (!(this.isText(localctx._i1,"key"))) {
				throw this.createFailedPredicateException("$parser.isText($i1,\"key\")");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public module_token(): Module_tokenContext {
		let localctx: Module_tokenContext = new Module_tokenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 358, OParser.RULE_module_token);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2389;
			localctx._i1 = this.match(OParser.VARIABLE_IDENTIFIER);
			this.state = 2390;
			if (!(this.isText(localctx._i1,"module"))) {
				throw this.createFailedPredicateException("$parser.isText($i1,\"module\")");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value_token(): Value_tokenContext {
		let localctx: Value_tokenContext = new Value_tokenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 360, OParser.RULE_value_token);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2392;
			localctx._i1 = this.match(OParser.VARIABLE_IDENTIFIER);
			this.state = 2393;
			if (!(this.isText(localctx._i1,"value"))) {
				throw this.createFailedPredicateException("$parser.isText($i1,\"value\")");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public symbols_token(): Symbols_tokenContext {
		let localctx: Symbols_tokenContext = new Symbols_tokenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 362, OParser.RULE_symbols_token);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2395;
			localctx._i1 = this.match(OParser.VARIABLE_IDENTIFIER);
			this.state = 2396;
			if (!(this.isText(localctx._i1,"symbols"))) {
				throw this.createFailedPredicateException("$parser.isText($i1,\"symbols\")");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let localctx: AssignContext = new AssignContext(this, this._ctx, this.state);
		this.enterRule(localctx, 364, OParser.RULE_assign);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2398;
			this.match(OParser.EQ);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiply(): MultiplyContext {
		let localctx: MultiplyContext = new MultiplyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 366, OParser.RULE_multiply);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2400;
			this.match(OParser.STAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public divide(): DivideContext {
		let localctx: DivideContext = new DivideContext(this, this._ctx, this.state);
		this.enterRule(localctx, 368, OParser.RULE_divide);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2402;
			this.match(OParser.SLASH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public idivide(): IdivideContext {
		let localctx: IdivideContext = new IdivideContext(this, this._ctx, this.state);
		this.enterRule(localctx, 370, OParser.RULE_idivide);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2404;
			this.match(OParser.BSLASH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public modulo(): ModuloContext {
		let localctx: ModuloContext = new ModuloContext(this, this._ctx, this.state);
		this.enterRule(localctx, 372, OParser.RULE_modulo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2406;
			_la = this._input.LA(1);
			if(!(_la===33 || _la===121)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lfs(): LfsContext {
		let localctx: LfsContext = new LfsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 374, OParser.RULE_lfs);
		try {
			this.enterOuterAlt(localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lfp(): LfpContext {
		let localctx: LfpContext = new LfpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 376, OParser.RULE_lfp);
		try {
			this.enterOuterAlt(localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_statement(): Javascript_statementContext {
		let localctx: Javascript_statementContext = new Javascript_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 378, OParser.RULE_javascript_statement);
		try {
			this.state = 2419;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				localctx = new JavascriptReturnStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2412;
				this.match(OParser.RETURN);
				this.state = 2413;
				(localctx as JavascriptReturnStatementContext)._exp = this.javascript_expression(0);
				this.state = 2414;
				this.match(OParser.SEMI);
				}
				break;
			case 2:
				localctx = new JavascriptStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2416;
				(localctx as JavascriptStatementContext)._exp = this.javascript_expression(0);
				this.state = 2417;
				this.match(OParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public javascript_expression(): Javascript_expressionContext;
	public javascript_expression(_p: number): Javascript_expressionContext;
	// @RuleVersion(0)
	public javascript_expression(_p?: number): Javascript_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Javascript_expressionContext = new Javascript_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Javascript_expressionContext = localctx;
		let _startState: number = 380;
		this.enterRecursionRule(localctx, 380, OParser.RULE_javascript_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavascriptPrimaryExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2422;
			(localctx as JavascriptPrimaryExpressionContext)._exp = this.javascript_primary_expression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2428;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 223, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new JavascriptSelectorExpressionContext(this, new Javascript_expressionContext(this, _parentctx, _parentState));
					(localctx as JavascriptSelectorExpressionContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_javascript_expression);
					this.state = 2424;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2425;
					(localctx as JavascriptSelectorExpressionContext)._child = this.javascript_selector_expression();
					}
					}
				}
				this.state = 2430;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 223, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_primary_expression(): Javascript_primary_expressionContext {
		let localctx: Javascript_primary_expressionContext = new Javascript_primary_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 382, OParser.RULE_javascript_primary_expression);
		try {
			this.state = 2438;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2431;
				this.javascript_this_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2432;
				this.javascript_new_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2433;
				this.javascript_parenthesis_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2434;
				this.javascript_identifier_expression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2435;
				this.javascript_literal_expression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2436;
				this.javascript_method_expression();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2437;
				this.javascript_item_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_this_expression(): Javascript_this_expressionContext {
		let localctx: Javascript_this_expressionContext = new Javascript_this_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 384, OParser.RULE_javascript_this_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2440;
			this.this_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_new_expression(): Javascript_new_expressionContext {
		let localctx: Javascript_new_expressionContext = new Javascript_new_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 386, OParser.RULE_javascript_new_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2442;
			this.new_token();
			this.state = 2443;
			this.javascript_method_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_selector_expression(): Javascript_selector_expressionContext {
		let localctx: Javascript_selector_expressionContext = new Javascript_selector_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 388, OParser.RULE_javascript_selector_expression);
		try {
			this.state = 2450;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				localctx = new JavascriptMethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2445;
				this.match(OParser.DOT);
				this.state = 2446;
				(localctx as JavascriptMethodExpressionContext)._method = this.javascript_method_expression();
				}
				break;
			case 2:
				localctx = new JavascriptMemberExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2447;
				this.match(OParser.DOT);
				this.state = 2448;
				(localctx as JavascriptMemberExpressionContext)._name = this.javascript_identifier();
				}
				break;
			case 3:
				localctx = new JavascriptItemExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2449;
				(localctx as JavascriptItemExpressionContext)._exp = this.javascript_item_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_method_expression(): Javascript_method_expressionContext {
		let localctx: Javascript_method_expressionContext = new Javascript_method_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 390, OParser.RULE_javascript_method_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2452;
			localctx._name = this.javascript_identifier();
			this.state = 2453;
			this.match(OParser.LPAR);
			this.state = 2455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 329696) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4292868093) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294967295) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4294967285) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 2513436607) !== 0) || _la===178) {
				{
				this.state = 2454;
				localctx._args = this.javascript_arguments(0);
				}
			}

			this.state = 2457;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public javascript_arguments(): Javascript_argumentsContext;
	public javascript_arguments(_p: number): Javascript_argumentsContext;
	// @RuleVersion(0)
	public javascript_arguments(_p?: number): Javascript_argumentsContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Javascript_argumentsContext = new Javascript_argumentsContext(this, this._ctx, _parentState);
		let _prevctx: Javascript_argumentsContext = localctx;
		let _startState: number = 392;
		this.enterRecursionRule(localctx, 392, OParser.RULE_javascript_arguments, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavascriptArgumentListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2460;
			(localctx as JavascriptArgumentListContext)._item = this.javascript_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2467;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 227, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new JavascriptArgumentListItemContext(this, new Javascript_argumentsContext(this, _parentctx, _parentState));
					(localctx as JavascriptArgumentListItemContext)._items = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_javascript_arguments);
					this.state = 2462;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2463;
					this.match(OParser.COMMA);
					this.state = 2464;
					(localctx as JavascriptArgumentListItemContext)._item = this.javascript_expression(0);
					}
					}
				}
				this.state = 2469;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 227, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_item_expression(): Javascript_item_expressionContext {
		let localctx: Javascript_item_expressionContext = new Javascript_item_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 394, OParser.RULE_javascript_item_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2470;
			this.match(OParser.LBRAK);
			this.state = 2471;
			localctx._exp = this.javascript_expression(0);
			this.state = 2472;
			this.match(OParser.RBRAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_parenthesis_expression(): Javascript_parenthesis_expressionContext {
		let localctx: Javascript_parenthesis_expressionContext = new Javascript_parenthesis_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 396, OParser.RULE_javascript_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2474;
			this.match(OParser.LPAR);
			this.state = 2475;
			localctx._exp = this.javascript_expression(0);
			this.state = 2476;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_identifier_expression(): Javascript_identifier_expressionContext {
		let localctx: Javascript_identifier_expressionContext = new Javascript_identifier_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 398, OParser.RULE_javascript_identifier_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2478;
			localctx._name = this.javascript_identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_literal_expression(): Javascript_literal_expressionContext {
		let localctx: Javascript_literal_expressionContext = new Javascript_literal_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 400, OParser.RULE_javascript_literal_expression);
		try {
			this.state = 2485;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 176:
				localctx = new JavascriptIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2480;
				(localctx as JavascriptIntegerLiteralContext)._t = this.match(OParser.INTEGER_LITERAL);
				}
				break;
			case 178:
				localctx = new JavascriptDecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2481;
				(localctx as JavascriptDecimalLiteralContext)._t = this.match(OParser.DECIMAL_LITERAL);
				}
				break;
			case 173:
				localctx = new JavascriptTextLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2482;
				(localctx as JavascriptTextLiteralContext)._t = this.match(OParser.TEXT_LITERAL);
				}
				break;
			case 163:
				localctx = new JavascriptBooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2483;
				(localctx as JavascriptBooleanLiteralContext)._t = this.match(OParser.BOOLEAN_LITERAL);
				}
				break;
			case 164:
				localctx = new JavascriptCharacterLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2484;
				(localctx as JavascriptCharacterLiteralContext)._t = this.match(OParser.CHAR_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public javascript_identifier(): Javascript_identifierContext {
		let localctx: Javascript_identifierContext = new Javascript_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 402, OParser.RULE_javascript_identifier);
		try {
			this.state = 2492;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 169:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2487;
				this.match(OParser.VARIABLE_IDENTIFIER);
				}
				break;
			case 167:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2488;
				this.match(OParser.SYMBOL_IDENTIFIER);
				}
				break;
			case 171:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2489;
				this.match(OParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 168:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2490;
				this.match(OParser.TYPE_IDENTIFIER);
				}
				break;
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 49:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2491;
				this.keyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_statement(): Python_statementContext {
		let localctx: Python_statementContext = new Python_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 404, OParser.RULE_python_statement);
		try {
			this.state = 2497;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				localctx = new PythonReturnStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2494;
				this.match(OParser.RETURN);
				this.state = 2495;
				(localctx as PythonReturnStatementContext)._exp = this.python_expression(0);
				}
				break;
			case 2:
				localctx = new PythonStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2496;
				(localctx as PythonStatementContext)._exp = this.python_expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public python_expression(): Python_expressionContext;
	public python_expression(_p: number): Python_expressionContext;
	// @RuleVersion(0)
	public python_expression(_p?: number): Python_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Python_expressionContext = new Python_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Python_expressionContext = localctx;
		let _startState: number = 406;
		this.enterRecursionRule(localctx, 406, OParser.RULE_python_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new PythonPrimaryExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2500;
			(localctx as PythonPrimaryExpressionContext)._exp = this.python_primary_expression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2506;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 231, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new PythonSelectorExpressionContext(this, new Python_expressionContext(this, _parentctx, _parentState));
					(localctx as PythonSelectorExpressionContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_python_expression);
					this.state = 2502;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2503;
					(localctx as PythonSelectorExpressionContext)._child = this.python_selector_expression();
					}
					}
				}
				this.state = 2508;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 231, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_primary_expression(): Python_primary_expressionContext {
		let localctx: Python_primary_expressionContext = new Python_primary_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 408, OParser.RULE_python_primary_expression);
		try {
			this.state = 2514;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
			case 1:
				localctx = new PythonSelfExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2509;
				(localctx as PythonSelfExpressionContext)._exp = this.python_self_expression();
				}
				break;
			case 2:
				localctx = new PythonParenthesisExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2510;
				(localctx as PythonParenthesisExpressionContext)._exp = this.python_parenthesis_expression();
				}
				break;
			case 3:
				localctx = new PythonIdentifierExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2511;
				(localctx as PythonIdentifierExpressionContext)._exp = this.python_identifier_expression(0);
				}
				break;
			case 4:
				localctx = new PythonLiteralExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2512;
				(localctx as PythonLiteralExpressionContext)._exp = this.python_literal_expression();
				}
				break;
			case 5:
				localctx = new PythonGlobalMethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2513;
				(localctx as PythonGlobalMethodExpressionContext)._exp = this.python_method_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_self_expression(): Python_self_expressionContext {
		let localctx: Python_self_expressionContext = new Python_self_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 410, OParser.RULE_python_self_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2516;
			this.this_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_selector_expression(): Python_selector_expressionContext {
		let localctx: Python_selector_expressionContext = new Python_selector_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 412, OParser.RULE_python_selector_expression);
		try {
			this.state = 2524;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				localctx = new PythonMethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2518;
				this.match(OParser.DOT);
				this.state = 2519;
				(localctx as PythonMethodExpressionContext)._exp = this.python_method_expression();
				}
				break;
			case 18:
				localctx = new PythonItemExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2520;
				this.match(OParser.LBRAK);
				this.state = 2521;
				(localctx as PythonItemExpressionContext)._exp = this.python_expression(0);
				this.state = 2522;
				this.match(OParser.RBRAK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_method_expression(): Python_method_expressionContext {
		let localctx: Python_method_expressionContext = new Python_method_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 414, OParser.RULE_python_method_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2526;
			localctx._name = this.python_identifier();
			this.state = 2527;
			this.match(OParser.LPAR);
			this.state = 2529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67552) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4292868093) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294967295) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4294967285) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 2513436607) !== 0) || _la===178) {
				{
				this.state = 2528;
				localctx._args = this.python_argument_list();
				}
			}

			this.state = 2531;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_argument_list(): Python_argument_listContext {
		let localctx: Python_argument_listContext = new Python_argument_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 416, OParser.RULE_python_argument_list);
		try {
			this.state = 2539;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
			case 1:
				localctx = new PythonOrdinalOnlyArgumentListContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2533;
				(localctx as PythonOrdinalOnlyArgumentListContext)._ordinal = this.python_ordinal_argument_list(0);
				}
				break;
			case 2:
				localctx = new PythonNamedOnlyArgumentListContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2534;
				(localctx as PythonNamedOnlyArgumentListContext)._named = this.python_named_argument_list(0);
				}
				break;
			case 3:
				localctx = new PythonArgumentListContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2535;
				(localctx as PythonArgumentListContext)._ordinal = this.python_ordinal_argument_list(0);
				this.state = 2536;
				this.match(OParser.COMMA);
				this.state = 2537;
				(localctx as PythonArgumentListContext)._named = this.python_named_argument_list(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public python_ordinal_argument_list(): Python_ordinal_argument_listContext;
	public python_ordinal_argument_list(_p: number): Python_ordinal_argument_listContext;
	// @RuleVersion(0)
	public python_ordinal_argument_list(_p?: number): Python_ordinal_argument_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Python_ordinal_argument_listContext = new Python_ordinal_argument_listContext(this, this._ctx, _parentState);
		let _prevctx: Python_ordinal_argument_listContext = localctx;
		let _startState: number = 418;
		this.enterRecursionRule(localctx, 418, OParser.RULE_python_ordinal_argument_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new PythonOrdinalArgumentListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2542;
			(localctx as PythonOrdinalArgumentListContext)._item = this.python_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2549;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 236, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new PythonOrdinalArgumentListItemContext(this, new Python_ordinal_argument_listContext(this, _parentctx, _parentState));
					(localctx as PythonOrdinalArgumentListItemContext)._items = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_python_ordinal_argument_list);
					this.state = 2544;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2545;
					this.match(OParser.COMMA);
					this.state = 2546;
					(localctx as PythonOrdinalArgumentListItemContext)._item = this.python_expression(0);
					}
					}
				}
				this.state = 2551;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 236, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public python_named_argument_list(): Python_named_argument_listContext;
	public python_named_argument_list(_p: number): Python_named_argument_listContext;
	// @RuleVersion(0)
	public python_named_argument_list(_p?: number): Python_named_argument_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Python_named_argument_listContext = new Python_named_argument_listContext(this, this._ctx, _parentState);
		let _prevctx: Python_named_argument_listContext = localctx;
		let _startState: number = 420;
		this.enterRecursionRule(localctx, 420, OParser.RULE_python_named_argument_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new PythonNamedArgumentListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2553;
			(localctx as PythonNamedArgumentListContext)._name = this.python_identifier();
			this.state = 2554;
			this.match(OParser.EQ);
			this.state = 2555;
			(localctx as PythonNamedArgumentListContext)._exp = this.python_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2565;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new PythonNamedArgumentListItemContext(this, new Python_named_argument_listContext(this, _parentctx, _parentState));
					(localctx as PythonNamedArgumentListItemContext)._items = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_python_named_argument_list);
					this.state = 2557;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2558;
					this.match(OParser.COMMA);
					this.state = 2559;
					(localctx as PythonNamedArgumentListItemContext)._name = this.python_identifier();
					this.state = 2560;
					this.match(OParser.EQ);
					this.state = 2561;
					(localctx as PythonNamedArgumentListItemContext)._exp = this.python_expression(0);
					}
					}
				}
				this.state = 2567;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 237, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_parenthesis_expression(): Python_parenthesis_expressionContext {
		let localctx: Python_parenthesis_expressionContext = new Python_parenthesis_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 422, OParser.RULE_python_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2568;
			this.match(OParser.LPAR);
			this.state = 2569;
			localctx._exp = this.python_expression(0);
			this.state = 2570;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public python_identifier_expression(): Python_identifier_expressionContext;
	public python_identifier_expression(_p: number): Python_identifier_expressionContext;
	// @RuleVersion(0)
	public python_identifier_expression(_p?: number): Python_identifier_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Python_identifier_expressionContext = new Python_identifier_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Python_identifier_expressionContext = localctx;
		let _startState: number = 424;
		this.enterRecursionRule(localctx, 424, OParser.RULE_python_identifier_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2575;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 238, this._ctx) ) {
			case 1:
				{
				localctx = new PythonPromptoIdentifierContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 2573;
				this.match(OParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 2:
				{
				localctx = new PythonIdentifierContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2574;
				(localctx as PythonIdentifierContext)._name = this.python_identifier();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2582;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 239, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new PythonChildIdentifierContext(this, new Python_identifier_expressionContext(this, _parentctx, _parentState));
					(localctx as PythonChildIdentifierContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_python_identifier_expression);
					this.state = 2577;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2578;
					this.match(OParser.DOT);
					this.state = 2579;
					(localctx as PythonChildIdentifierContext)._name = this.python_identifier();
					}
					}
				}
				this.state = 2584;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 239, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_literal_expression(): Python_literal_expressionContext {
		let localctx: Python_literal_expressionContext = new Python_literal_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 426, OParser.RULE_python_literal_expression);
		try {
			this.state = 2590;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 176:
				localctx = new PythonIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2585;
				(localctx as PythonIntegerLiteralContext)._t = this.match(OParser.INTEGER_LITERAL);
				}
				break;
			case 178:
				localctx = new PythonDecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2586;
				(localctx as PythonDecimalLiteralContext)._t = this.match(OParser.DECIMAL_LITERAL);
				}
				break;
			case 173:
				localctx = new PythonTextLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2587;
				(localctx as PythonTextLiteralContext)._t = this.match(OParser.TEXT_LITERAL);
				}
				break;
			case 163:
				localctx = new PythonBooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2588;
				(localctx as PythonBooleanLiteralContext)._t = this.match(OParser.BOOLEAN_LITERAL);
				}
				break;
			case 164:
				localctx = new PythonCharacterLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2589;
				(localctx as PythonCharacterLiteralContext)._t = this.match(OParser.CHAR_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public python_identifier(): Python_identifierContext {
		let localctx: Python_identifierContext = new Python_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 428, OParser.RULE_python_identifier);
		try {
			this.state = 2597;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 169:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2592;
				this.match(OParser.VARIABLE_IDENTIFIER);
				}
				break;
			case 167:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2593;
				this.match(OParser.SYMBOL_IDENTIFIER);
				}
				break;
			case 171:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2594;
				this.match(OParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 168:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2595;
				this.match(OParser.TYPE_IDENTIFIER);
				}
				break;
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 49:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2596;
				this.keyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public java_statement(): Java_statementContext {
		let localctx: Java_statementContext = new Java_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 430, OParser.RULE_java_statement);
		try {
			this.state = 2606;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				localctx = new JavaReturnStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2599;
				this.match(OParser.RETURN);
				this.state = 2600;
				(localctx as JavaReturnStatementContext)._exp = this.java_expression(0);
				this.state = 2601;
				this.match(OParser.SEMI);
				}
				break;
			case 2:
				localctx = new JavaStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2603;
				(localctx as JavaStatementContext)._exp = this.java_expression(0);
				this.state = 2604;
				this.match(OParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public java_expression(): Java_expressionContext;
	public java_expression(_p: number): Java_expressionContext;
	// @RuleVersion(0)
	public java_expression(_p?: number): Java_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Java_expressionContext = new Java_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Java_expressionContext = localctx;
		let _startState: number = 432;
		this.enterRecursionRule(localctx, 432, OParser.RULE_java_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavaPrimaryExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2609;
			(localctx as JavaPrimaryExpressionContext)._exp = this.java_primary_expression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2615;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 243, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new JavaSelectorExpressionContext(this, new Java_expressionContext(this, _parentctx, _parentState));
					(localctx as JavaSelectorExpressionContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_java_expression);
					this.state = 2611;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2612;
					(localctx as JavaSelectorExpressionContext)._child = this.java_selector_expression();
					}
					}
				}
				this.state = 2617;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 243, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public java_primary_expression(): Java_primary_expressionContext {
		let localctx: Java_primary_expressionContext = new Java_primary_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 434, OParser.RULE_java_primary_expression);
		try {
			this.state = 2623;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2618;
				this.java_this_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2619;
				this.java_new_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2620;
				this.java_parenthesis_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2621;
				this.java_identifier_expression(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2622;
				this.java_literal_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public java_this_expression(): Java_this_expressionContext {
		let localctx: Java_this_expressionContext = new Java_this_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 436, OParser.RULE_java_this_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2625;
			this.this_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public java_new_expression(): Java_new_expressionContext {
		let localctx: Java_new_expressionContext = new Java_new_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 438, OParser.RULE_java_new_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2627;
			this.new_token();
			this.state = 2628;
			this.java_method_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public java_selector_expression(): Java_selector_expressionContext {
		let localctx: Java_selector_expressionContext = new Java_selector_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 440, OParser.RULE_java_selector_expression);
		try {
			this.state = 2633;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				localctx = new JavaMethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2630;
				this.match(OParser.DOT);
				this.state = 2631;
				(localctx as JavaMethodExpressionContext)._exp = this.java_method_expression();
				}
				break;
			case 18:
				localctx = new JavaItemExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2632;
				(localctx as JavaItemExpressionContext)._exp = this.java_item_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public java_method_expression(): Java_method_expressionContext {
		let localctx: Java_method_expressionContext = new Java_method_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 442, OParser.RULE_java_method_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2635;
			localctx._name = this.java_identifier();
			this.state = 2636;
			this.match(OParser.LPAR);
			this.state = 2638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67552) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4292868093) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294967295) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4294967285) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 2513436607) !== 0) || _la===178) {
				{
				this.state = 2637;
				localctx._args = this.java_arguments(0);
				}
			}

			this.state = 2640;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public java_arguments(): Java_argumentsContext;
	public java_arguments(_p: number): Java_argumentsContext;
	// @RuleVersion(0)
	public java_arguments(_p?: number): Java_argumentsContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Java_argumentsContext = new Java_argumentsContext(this, this._ctx, _parentState);
		let _prevctx: Java_argumentsContext = localctx;
		let _startState: number = 444;
		this.enterRecursionRule(localctx, 444, OParser.RULE_java_arguments, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavaArgumentListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2643;
			(localctx as JavaArgumentListContext)._item = this.java_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2650;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 247, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new JavaArgumentListItemContext(this, new Java_argumentsContext(this, _parentctx, _parentState));
					(localctx as JavaArgumentListItemContext)._items = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_java_arguments);
					this.state = 2645;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2646;
					this.match(OParser.COMMA);
					this.state = 2647;
					(localctx as JavaArgumentListItemContext)._item = this.java_expression(0);
					}
					}
				}
				this.state = 2652;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 247, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public java_item_expression(): Java_item_expressionContext {
		let localctx: Java_item_expressionContext = new Java_item_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 446, OParser.RULE_java_item_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2653;
			this.match(OParser.LBRAK);
			this.state = 2654;
			localctx._exp = this.java_expression(0);
			this.state = 2655;
			this.match(OParser.RBRAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public java_parenthesis_expression(): Java_parenthesis_expressionContext {
		let localctx: Java_parenthesis_expressionContext = new Java_parenthesis_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 448, OParser.RULE_java_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2657;
			this.match(OParser.LPAR);
			this.state = 2658;
			localctx._exp = this.java_expression(0);
			this.state = 2659;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public java_identifier_expression(): Java_identifier_expressionContext;
	public java_identifier_expression(_p: number): Java_identifier_expressionContext;
	// @RuleVersion(0)
	public java_identifier_expression(_p?: number): Java_identifier_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Java_identifier_expressionContext = new Java_identifier_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Java_identifier_expressionContext = localctx;
		let _startState: number = 450;
		this.enterRecursionRule(localctx, 450, OParser.RULE_java_identifier_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavaIdentifierContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2662;
			(localctx as JavaIdentifierContext)._name = this.java_identifier();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2669;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 248, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new JavaChildIdentifierContext(this, new Java_identifier_expressionContext(this, _parentctx, _parentState));
					(localctx as JavaChildIdentifierContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_java_identifier_expression);
					this.state = 2664;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2665;
					this.match(OParser.DOT);
					this.state = 2666;
					(localctx as JavaChildIdentifierContext)._name = this.java_identifier();
					}
					}
				}
				this.state = 2671;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 248, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public java_class_identifier_expression(): Java_class_identifier_expressionContext;
	public java_class_identifier_expression(_p: number): Java_class_identifier_expressionContext;
	// @RuleVersion(0)
	public java_class_identifier_expression(_p?: number): Java_class_identifier_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Java_class_identifier_expressionContext = new Java_class_identifier_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Java_class_identifier_expressionContext = localctx;
		let _startState: number = 452;
		this.enterRecursionRule(localctx, 452, OParser.RULE_java_class_identifier_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavaClassIdentifierContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2673;
			(localctx as JavaClassIdentifierContext)._klass = this.java_identifier_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2679;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new JavaChildClassIdentifierContext(this, new Java_class_identifier_expressionContext(this, _parentctx, _parentState));
					(localctx as JavaChildClassIdentifierContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_java_class_identifier_expression);
					this.state = 2675;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2676;
					(localctx as JavaChildClassIdentifierContext)._name = this.match(OParser.DOLLAR_IDENTIFIER);
					}
					}
				}
				this.state = 2681;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public java_literal_expression(): Java_literal_expressionContext {
		let localctx: Java_literal_expressionContext = new Java_literal_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 454, OParser.RULE_java_literal_expression);
		try {
			this.state = 2687;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 176:
				localctx = new JavaIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2682;
				(localctx as JavaIntegerLiteralContext)._t = this.match(OParser.INTEGER_LITERAL);
				}
				break;
			case 178:
				localctx = new JavaDecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2683;
				(localctx as JavaDecimalLiteralContext)._t = this.match(OParser.DECIMAL_LITERAL);
				}
				break;
			case 173:
				localctx = new JavaTextLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2684;
				(localctx as JavaTextLiteralContext)._t = this.match(OParser.TEXT_LITERAL);
				}
				break;
			case 163:
				localctx = new JavaBooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2685;
				(localctx as JavaBooleanLiteralContext)._t = this.match(OParser.BOOLEAN_LITERAL);
				}
				break;
			case 164:
				localctx = new JavaCharacterLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2686;
				(localctx as JavaCharacterLiteralContext)._t = this.match(OParser.CHAR_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public java_identifier(): Java_identifierContext {
		let localctx: Java_identifierContext = new Java_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 456, OParser.RULE_java_identifier);
		try {
			this.state = 2694;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 169:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2689;
				this.match(OParser.VARIABLE_IDENTIFIER);
				}
				break;
			case 167:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2690;
				this.match(OParser.SYMBOL_IDENTIFIER);
				}
				break;
			case 171:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2691;
				this.match(OParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 168:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2692;
				this.match(OParser.TYPE_IDENTIFIER);
				}
				break;
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 49:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2693;
				this.keyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public csharp_statement(): Csharp_statementContext {
		let localctx: Csharp_statementContext = new Csharp_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 458, OParser.RULE_csharp_statement);
		try {
			this.state = 2703;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
			case 1:
				localctx = new CSharpReturnStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2696;
				this.match(OParser.RETURN);
				this.state = 2697;
				(localctx as CSharpReturnStatementContext)._exp = this.csharp_expression(0);
				this.state = 2698;
				this.match(OParser.SEMI);
				}
				break;
			case 2:
				localctx = new CSharpStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2700;
				(localctx as CSharpStatementContext)._exp = this.csharp_expression(0);
				this.state = 2701;
				this.match(OParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public csharp_expression(): Csharp_expressionContext;
	public csharp_expression(_p: number): Csharp_expressionContext;
	// @RuleVersion(0)
	public csharp_expression(_p?: number): Csharp_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Csharp_expressionContext = new Csharp_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Csharp_expressionContext = localctx;
		let _startState: number = 460;
		this.enterRecursionRule(localctx, 460, OParser.RULE_csharp_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new CSharpPrimaryExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2706;
			(localctx as CSharpPrimaryExpressionContext)._exp = this.csharp_primary_expression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2712;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 253, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new CSharpSelectorExpressionContext(this, new Csharp_expressionContext(this, _parentctx, _parentState));
					(localctx as CSharpSelectorExpressionContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_csharp_expression);
					this.state = 2708;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2709;
					(localctx as CSharpSelectorExpressionContext)._child = this.csharp_selector_expression();
					}
					}
				}
				this.state = 2714;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 253, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public csharp_primary_expression(): Csharp_primary_expressionContext {
		let localctx: Csharp_primary_expressionContext = new Csharp_primary_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 462, OParser.RULE_csharp_primary_expression);
		try {
			this.state = 2720;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2715;
				this.csharp_this_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2716;
				this.csharp_new_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2717;
				this.csharp_parenthesis_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2718;
				this.csharp_identifier_expression(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2719;
				this.csharp_literal_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public csharp_this_expression(): Csharp_this_expressionContext {
		let localctx: Csharp_this_expressionContext = new Csharp_this_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 464, OParser.RULE_csharp_this_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2722;
			this.this_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public csharp_new_expression(): Csharp_new_expressionContext {
		let localctx: Csharp_new_expressionContext = new Csharp_new_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 466, OParser.RULE_csharp_new_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2724;
			this.new_token();
			this.state = 2725;
			this.csharp_method_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public csharp_selector_expression(): Csharp_selector_expressionContext {
		let localctx: Csharp_selector_expressionContext = new Csharp_selector_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 468, OParser.RULE_csharp_selector_expression);
		try {
			this.state = 2730;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				localctx = new CSharpMethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2727;
				this.match(OParser.DOT);
				this.state = 2728;
				(localctx as CSharpMethodExpressionContext)._exp = this.csharp_method_expression();
				}
				break;
			case 18:
				localctx = new CSharpItemExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2729;
				(localctx as CSharpItemExpressionContext)._exp = this.csharp_item_expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public csharp_method_expression(): Csharp_method_expressionContext {
		let localctx: Csharp_method_expressionContext = new Csharp_method_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 470, OParser.RULE_csharp_method_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2732;
			localctx._name = this.csharp_identifier();
			this.state = 2733;
			this.match(OParser.LPAR);
			this.state = 2735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 67552) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4292868093) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294967295) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4294967285) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 2513436607) !== 0) || _la===178) {
				{
				this.state = 2734;
				localctx._args = this.csharp_arguments(0);
				}
			}

			this.state = 2737;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public csharp_arguments(): Csharp_argumentsContext;
	public csharp_arguments(_p: number): Csharp_argumentsContext;
	// @RuleVersion(0)
	public csharp_arguments(_p?: number): Csharp_argumentsContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Csharp_argumentsContext = new Csharp_argumentsContext(this, this._ctx, _parentState);
		let _prevctx: Csharp_argumentsContext = localctx;
		let _startState: number = 472;
		this.enterRecursionRule(localctx, 472, OParser.RULE_csharp_arguments, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new CSharpArgumentListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2740;
			(localctx as CSharpArgumentListContext)._item = this.csharp_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2747;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 257, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new CSharpArgumentListItemContext(this, new Csharp_argumentsContext(this, _parentctx, _parentState));
					(localctx as CSharpArgumentListItemContext)._items = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_csharp_arguments);
					this.state = 2742;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2743;
					this.match(OParser.COMMA);
					this.state = 2744;
					(localctx as CSharpArgumentListItemContext)._item = this.csharp_expression(0);
					}
					}
				}
				this.state = 2749;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 257, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public csharp_item_expression(): Csharp_item_expressionContext {
		let localctx: Csharp_item_expressionContext = new Csharp_item_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 474, OParser.RULE_csharp_item_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2750;
			this.match(OParser.LBRAK);
			this.state = 2751;
			localctx._exp = this.csharp_expression(0);
			this.state = 2752;
			this.match(OParser.RBRAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public csharp_parenthesis_expression(): Csharp_parenthesis_expressionContext {
		let localctx: Csharp_parenthesis_expressionContext = new Csharp_parenthesis_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 476, OParser.RULE_csharp_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2754;
			this.match(OParser.LPAR);
			this.state = 2755;
			localctx._exp = this.csharp_expression(0);
			this.state = 2756;
			this.match(OParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public csharp_identifier_expression(): Csharp_identifier_expressionContext;
	public csharp_identifier_expression(_p: number): Csharp_identifier_expressionContext;
	// @RuleVersion(0)
	public csharp_identifier_expression(_p?: number): Csharp_identifier_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Csharp_identifier_expressionContext = new Csharp_identifier_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Csharp_identifier_expressionContext = localctx;
		let _startState: number = 478;
		this.enterRecursionRule(localctx, 478, OParser.RULE_csharp_identifier_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2761;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				{
				localctx = new CSharpPromptoIdentifierContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 2759;
				this.match(OParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 2:
				{
				localctx = new CSharpIdentifierContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2760;
				(localctx as CSharpIdentifierContext)._name = this.csharp_identifier();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2768;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 259, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new CSharpChildIdentifierContext(this, new Csharp_identifier_expressionContext(this, _parentctx, _parentState));
					(localctx as CSharpChildIdentifierContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_csharp_identifier_expression);
					this.state = 2763;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2764;
					this.match(OParser.DOT);
					this.state = 2765;
					(localctx as CSharpChildIdentifierContext)._name = this.csharp_identifier();
					}
					}
				}
				this.state = 2770;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 259, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public csharp_literal_expression(): Csharp_literal_expressionContext {
		let localctx: Csharp_literal_expressionContext = new Csharp_literal_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 480, OParser.RULE_csharp_literal_expression);
		try {
			this.state = 2776;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 176:
				localctx = new CSharpIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2771;
				this.match(OParser.INTEGER_LITERAL);
				}
				break;
			case 178:
				localctx = new CSharpDecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2772;
				this.match(OParser.DECIMAL_LITERAL);
				}
				break;
			case 173:
				localctx = new CSharpTextLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2773;
				this.match(OParser.TEXT_LITERAL);
				}
				break;
			case 163:
				localctx = new CSharpBooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2774;
				this.match(OParser.BOOLEAN_LITERAL);
				}
				break;
			case 164:
				localctx = new CSharpCharacterLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2775;
				this.match(OParser.CHAR_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public csharp_identifier(): Csharp_identifierContext {
		let localctx: Csharp_identifierContext = new Csharp_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 482, OParser.RULE_csharp_identifier);
		try {
			this.state = 2783;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 169:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2778;
				this.match(OParser.VARIABLE_IDENTIFIER);
				}
				break;
			case 167:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2779;
				this.match(OParser.SYMBOL_IDENTIFIER);
				}
				break;
			case 171:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2780;
				this.match(OParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 168:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2781;
				this.match(OParser.TYPE_IDENTIFIER);
				}
				break;
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 49:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2782;
				this.keyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_expression(): Jsx_expressionContext {
		let localctx: Jsx_expressionContext = new Jsx_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 484, OParser.RULE_jsx_expression);
		try {
			this.state = 2787;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2785;
				this.jsx_element();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2786;
				this.jsx_fragment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_element(): Jsx_elementContext {
		let localctx: Jsx_elementContext = new Jsx_elementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 486, OParser.RULE_jsx_element);
		try {
			this.state = 2796;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 264, this._ctx) ) {
			case 1:
				localctx = new JsxSelfClosingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2789;
				(localctx as JsxSelfClosingContext)._jsx = this.jsx_self_closing();
				}
				break;
			case 2:
				localctx = new JsxElementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2790;
				(localctx as JsxElementContext)._opening = this.jsx_opening();
				this.state = 2792;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 263, this._ctx) ) {
				case 1:
					{
					this.state = 2791;
					(localctx as JsxElementContext)._children_ = this.jsx_children();
					}
					break;
				}
				this.state = 2794;
				(localctx as JsxElementContext)._closing = this.jsx_closing();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_fragment(): Jsx_fragmentContext {
		let localctx: Jsx_fragmentContext = new Jsx_fragmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 488, OParser.RULE_jsx_fragment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2798;
			this.jsx_fragment_start();
			this.state = 2799;
			this.ws_plus();
			this.state = 2801;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 265, this._ctx) ) {
			case 1:
				{
				this.state = 2800;
				localctx._children_ = this.jsx_children();
				}
				break;
			}
			this.state = 2803;
			this.ws_plus();
			this.state = 2804;
			this.jsx_fragment_end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_fragment_start(): Jsx_fragment_startContext {
		let localctx: Jsx_fragment_startContext = new Jsx_fragment_startContext(this, this._ctx, this.state);
		this.enterRule(localctx, 490, OParser.RULE_jsx_fragment_start);
		try {
			this.state = 2809;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 37:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2806;
				this.match(OParser.LT);
				this.state = 2807;
				this.match(OParser.GT);
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2808;
				this.match(OParser.LTGT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_fragment_end(): Jsx_fragment_endContext {
		let localctx: Jsx_fragment_endContext = new Jsx_fragment_endContext(this, this._ctx, this.state);
		this.enterRule(localctx, 492, OParser.RULE_jsx_fragment_end);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2811;
			this.match(OParser.LT);
			this.state = 2812;
			this.match(OParser.SLASH);
			this.state = 2813;
			this.match(OParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_self_closing(): Jsx_self_closingContext {
		let localctx: Jsx_self_closingContext = new Jsx_self_closingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 494, OParser.RULE_jsx_self_closing);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2815;
			this.match(OParser.LT);
			this.state = 2816;
			localctx._name = this.jsx_element_name();
			this.state = 2817;
			this.ws_plus();
			this.state = 2821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2016) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4292868093) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294967295) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4294967285) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 29622207) !== 0)) {
				{
				{
				this.state = 2818;
				localctx._attributes = this.jsx_attribute();
				}
				}
				this.state = 2823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2824;
			this.match(OParser.SLASH);
			this.state = 2825;
			this.match(OParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_opening(): Jsx_openingContext {
		let localctx: Jsx_openingContext = new Jsx_openingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 496, OParser.RULE_jsx_opening);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2827;
			this.match(OParser.LT);
			this.state = 2828;
			localctx._name = this.jsx_element_name();
			this.state = 2829;
			this.ws_plus();
			this.state = 2833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2016) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4292868093) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294967295) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4294967285) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 29622207) !== 0)) {
				{
				{
				this.state = 2830;
				localctx._attributes = this.jsx_attribute();
				}
				}
				this.state = 2835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2836;
			this.match(OParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_closing(): Jsx_closingContext {
		let localctx: Jsx_closingContext = new Jsx_closingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 498, OParser.RULE_jsx_closing);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2838;
			this.match(OParser.LT);
			this.state = 2839;
			this.match(OParser.SLASH);
			this.state = 2840;
			localctx._name = this.jsx_element_name();
			this.state = 2841;
			this.match(OParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_element_name(): Jsx_element_nameContext {
		let localctx: Jsx_element_nameContext = new Jsx_element_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 500, OParser.RULE_jsx_element_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2843;
			this.jsx_identifier();
			this.state = 2848;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15) {
				{
				{
				this.state = 2844;
				this.match(OParser.DOT);
				this.state = 2845;
				this.jsx_identifier();
				}
				}
				this.state = 2850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_identifier(): Jsx_identifierContext {
		let localctx: Jsx_identifierContext = new Jsx_identifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 502, OParser.RULE_jsx_identifier);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2851;
			this.identifier_or_keyword();
			this.state = 2855;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 270, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2852;
					this.nospace_hyphen_identifier_or_keyword();
					}
					}
				}
				this.state = 2857;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 270, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_attribute(): Jsx_attributeContext {
		let localctx: Jsx_attributeContext = new Jsx_attributeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 504, OParser.RULE_jsx_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2858;
			localctx._name = this.jsx_identifier();
			this.state = 2861;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 2859;
				this.match(OParser.EQ);
				this.state = 2860;
				localctx._value = this.jsx_attribute_value();
				}
			}

			this.state = 2863;
			this.ws_plus();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_attribute_value(): Jsx_attribute_valueContext {
		let localctx: Jsx_attribute_valueContext = new Jsx_attribute_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 506, OParser.RULE_jsx_attribute_value);
		let _la: number;
		try {
			this.state = 2871;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 173:
				localctx = new JsxLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2865;
				this.match(OParser.TEXT_LITERAL);
				}
				break;
			case 20:
				localctx = new JsxValueContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2866;
				this.match(OParser.LCURL);
				this.state = 2868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 27271317) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 819201) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 1150369825) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1047679) !== 0)) {
					{
					this.state = 2867;
					(localctx as JsxValueContext)._exp = this.expression(0);
					}
				}

				this.state = 2870;
				this.match(OParser.RCURL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_children(): Jsx_childrenContext {
		let localctx: Jsx_childrenContext = new Jsx_childrenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 508, OParser.RULE_jsx_children);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2874;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2873;
					this.jsx_child();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2876;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 274, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_child(): Jsx_childContext {
		let localctx: Jsx_childContext = new Jsx_childContext(this, this._ctx, this.state);
		this.enterRule(localctx, 510, OParser.RULE_jsx_child);
		let _la: number;
		try {
			this.state = 2885;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 36:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
				localctx = new JsxTextContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2878;
				(localctx as JsxTextContext)._text = this.jsx_text();
				}
				break;
			case 37:
				localctx = new JsxChildContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2879;
				(localctx as JsxChildContext)._jsx = this.jsx_element();
				}
				break;
			case 20:
				localctx = new JsxCodeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2880;
				this.match(OParser.LCURL);
				this.state = 2882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 16)) & ~0x1F) === 0 && ((1 << (_la - 16)) & 27271317) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 71301119) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 819201) !== 0) || ((((_la - 122)) & ~0x1F) === 0 && ((1 << (_la - 122)) & 1150369825) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1047679) !== 0)) {
					{
					this.state = 2881;
					(localctx as JsxCodeContext)._exp = this.expression(0);
					}
				}

				this.state = 2884;
				this.match(OParser.RCURL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_text(): Jsx_textContext {
		let localctx: Jsx_textContext = new Jsx_textContext(this, this._ctx, this.state);
		this.enterRule(localctx, 512, OParser.RULE_jsx_text);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2888;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2887;
					this.jsx_char();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2890;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 277, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public jsx_char(): Jsx_charContext {
		let localctx: Jsx_charContext = new Jsx_charContext(this, this._ctx, this.state);
		this.enterRule(localctx, 514, OParser.RULE_jsx_char);
		let _la: number;
		try {
			this.state = 2894;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2892;
				_la = this._input.LA(1);
				if(_la<=0 || ((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & 163843) !== 0)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2893;
				this.match(OParser.JSX_TEXT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public css_expression(): Css_expressionContext {
		let localctx: Css_expressionContext = new Css_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 516, OParser.RULE_css_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2896;
			this.match(OParser.LCURL);
			this.state = 2898;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2897;
				localctx._field = this.css_field();
				}
				}
				this.state = 2900;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536872928) !== 0) || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 4292868093) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4294967295) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 4294967285) !== 0) || ((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 29622207) !== 0));
			this.state = 2902;
			this.match(OParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public css_field(): Css_fieldContext {
		let localctx: Css_fieldContext = new Css_fieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 518, OParser.RULE_css_field);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2904;
			localctx._name = this.css_identifier(0);
			this.state = 2905;
			this.match(OParser.COLON);
			this.state = 2907;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2906;
				localctx._values = this.css_value();
				}
				}
				this.state = 2909;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4292866046) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 16777215) !== 0));
			this.state = 2911;
			this.match(OParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public css_identifier(): Css_identifierContext;
	public css_identifier(_p: number): Css_identifierContext;
	// @RuleVersion(0)
	public css_identifier(_p?: number): Css_identifierContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Css_identifierContext = new Css_identifierContext(this, this._ctx, _parentState);
		let _prevctx: Css_identifierContext = localctx;
		let _startState: number = 520;
		this.enterRecursionRule(localctx, 520, OParser.RULE_css_identifier, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2917;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 49:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 115:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 167:
			case 168:
			case 169:
				{
				this.state = 2914;
				this.identifier_or_keyword();
				}
				break;
			case 29:
				{
				this.state = 2915;
				this.match(OParser.MINUS);
				this.state = 2916;
				this.nospace_identifier_or_keyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2927;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 283, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Css_identifierContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, OParser.RULE_css_identifier);
					this.state = 2919;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2921;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 2920;
							this.nospace_hyphen_identifier_or_keyword();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 2923;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 282, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
				}
				this.state = 2929;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 283, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public css_value(): Css_valueContext {
		let localctx: Css_valueContext = new Css_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 522, OParser.RULE_css_value);
		try {
			this.state = 2935;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				localctx = new CssValueContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2930;
				this.match(OParser.LCURL);
				this.state = 2931;
				(localctx as CssValueContext)._exp = this.expression(0);
				this.state = 2932;
				this.match(OParser.RCURL);
				}
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
			case 121:
			case 122:
			case 123:
			case 124:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
				localctx = new CssTextContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2934;
				(localctx as CssTextContext)._text = this.css_text();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public css_text(): Css_textContext {
		let localctx: Css_textContext = new Css_textContext(this, this._ctx, this.state);
		this.enterRule(localctx, 524, OParser.RULE_css_text);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2938;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2937;
					_la = this._input.LA(1);
					if(_la<=0 || (((_la) & ~0x1F) === 0 && ((1 << _la) & 3149824) !== 0)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2940;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 285, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.derived_list_sempred(localctx as Derived_listContext, predIndex);
		case 19:
			return this.native_category_binding_list_sempred(localctx as Native_category_binding_listContext, predIndex);
		case 39:
			return this.else_if_statement_list_sempred(localctx as Else_if_statement_listContext, predIndex);
		case 48:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		case 50:
			return this.an_expression_sempred(localctx as An_expressionContext, predIndex);
		case 53:
			return this.instance_expression_sempred(localctx as Instance_expressionContext, predIndex);
		case 54:
			return this.mutable_instance_expression_sempred(localctx as Mutable_instance_expressionContext, predIndex);
		case 67:
			return this.copy_from_sempred(localctx as Copy_fromContext, predIndex);
		case 68:
			return this.argument_assignment_list_sempred(localctx as Argument_assignment_listContext, predIndex);
		case 95:
			return this.typedef_sempred(localctx as TypedefContext, predIndex);
		case 106:
			return this.nospace_hyphen_identifier_or_keyword_sempred(localctx as Nospace_hyphen_identifier_or_keywordContext, predIndex);
		case 107:
			return this.nospace_identifier_or_keyword_sempred(localctx as Nospace_identifier_or_keywordContext, predIndex);
		case 120:
			return this.any_type_sempred(localctx as Any_typeContext, predIndex);
		case 162:
			return this.assignable_instance_sempred(localctx as Assignable_instanceContext, predIndex);
		case 163:
			return this.is_expression_sempred(localctx as Is_expressionContext, predIndex);
		case 164:
			return this.metadata_sempred(localctx as MetadataContext, predIndex);
		case 177:
			return this.new_token_sempred(localctx as New_tokenContext, predIndex);
		case 178:
			return this.key_token_sempred(localctx as Key_tokenContext, predIndex);
		case 179:
			return this.module_token_sempred(localctx as Module_tokenContext, predIndex);
		case 180:
			return this.value_token_sempred(localctx as Value_tokenContext, predIndex);
		case 181:
			return this.symbols_token_sempred(localctx as Symbols_tokenContext, predIndex);
		case 190:
			return this.javascript_expression_sempred(localctx as Javascript_expressionContext, predIndex);
		case 196:
			return this.javascript_arguments_sempred(localctx as Javascript_argumentsContext, predIndex);
		case 203:
			return this.python_expression_sempred(localctx as Python_expressionContext, predIndex);
		case 209:
			return this.python_ordinal_argument_list_sempred(localctx as Python_ordinal_argument_listContext, predIndex);
		case 210:
			return this.python_named_argument_list_sempred(localctx as Python_named_argument_listContext, predIndex);
		case 212:
			return this.python_identifier_expression_sempred(localctx as Python_identifier_expressionContext, predIndex);
		case 216:
			return this.java_expression_sempred(localctx as Java_expressionContext, predIndex);
		case 222:
			return this.java_arguments_sempred(localctx as Java_argumentsContext, predIndex);
		case 225:
			return this.java_identifier_expression_sempred(localctx as Java_identifier_expressionContext, predIndex);
		case 226:
			return this.java_class_identifier_expression_sempred(localctx as Java_class_identifier_expressionContext, predIndex);
		case 230:
			return this.csharp_expression_sempred(localctx as Csharp_expressionContext, predIndex);
		case 236:
			return this.csharp_arguments_sempred(localctx as Csharp_argumentsContext, predIndex);
		case 239:
			return this.csharp_identifier_expression_sempred(localctx as Csharp_identifier_expressionContext, predIndex);
		case 260:
			return this.css_identifier_sempred(localctx as Css_identifierContext, predIndex);
		}
		return true;
	}
	private derived_list_sempred(localctx: Derived_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private native_category_binding_list_sempred(localctx: Native_category_binding_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private else_if_statement_list_sempred(localctx: Else_if_statement_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 21);
		case 4:
			return this.precpred(this._ctx, 20);
		case 5:
			return this.precpred(this._ctx, 19);
		case 6:
			return this.precpred(this._ctx, 18);
		case 7:
			return this.precpred(this._ctx, 17);
		case 8:
			return this.precpred(this._ctx, 16);
		case 9:
			return this.precpred(this._ctx, 14);
		case 10:
			return this.precpred(this._ctx, 13);
		case 11:
			return this.precpred(this._ctx, 12);
		case 12:
			return this.precpred(this._ctx, 11);
		case 13:
			return this.precpred(this._ctx, 10);
		case 14:
			return this.precpred(this._ctx, 7);
		case 15:
			return this.precpred(this._ctx, 6);
		case 16:
			return this.precpred(this._ctx, 5);
		case 17:
			return this.precpred(this._ctx, 15);
		case 18:
			return this.precpred(this._ctx, 9);
		case 19:
			return this.precpred(this._ctx, 8);
		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private an_expression_sempred(localctx: An_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.willBeAOrAn();
		}
		return true;
	}
	private instance_expression_sempred(localctx: Instance_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private mutable_instance_expression_sempred(localctx: Mutable_instance_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private copy_from_sempred(localctx: Copy_fromContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.willNotBe(this.equalToken());
		}
		return true;
	}
	private argument_assignment_list_sempred(localctx: Argument_assignment_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return this.willNotBe(this.equalToken());
		case 26:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private typedef_sempred(localctx: TypedefContext, predIndex: number): boolean {
		switch (predIndex) {
		case 27:
			return this.precpred(this._ctx, 6);
		case 28:
			return this.precpred(this._ctx, 5);
		case 29:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private nospace_hyphen_identifier_or_keyword_sempred(localctx: Nospace_hyphen_identifier_or_keywordContext, predIndex: number): boolean {
		switch (predIndex) {
		case 30:
			return this.wasNotWhiteSpace();
		}
		return true;
	}
	private nospace_identifier_or_keyword_sempred(localctx: Nospace_identifier_or_keywordContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.wasNotWhiteSpace();
		}
		return true;
	}
	private any_type_sempred(localctx: Any_typeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return this.precpred(this._ctx, 2);
		case 33:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private assignable_instance_sempred(localctx: Assignable_instanceContext, predIndex: number): boolean {
		switch (predIndex) {
		case 34:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private is_expression_sempred(localctx: Is_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return this.willBeAOrAn();
		}
		return true;
	}
	private metadata_sempred(localctx: MetadataContext, predIndex: number): boolean {
		switch (predIndex) {
		case 36:
			return this.willBeText("metadata");
		}
		return true;
	}
	private new_token_sempred(localctx: New_tokenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 37:
			return this.isText(localctx._i1,"new");
		}
		return true;
	}
	private key_token_sempred(localctx: Key_tokenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 38:
			return this.isText(localctx._i1,"key");
		}
		return true;
	}
	private module_token_sempred(localctx: Module_tokenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 39:
			return this.isText(localctx._i1,"module");
		}
		return true;
	}
	private value_token_sempred(localctx: Value_tokenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 40:
			return this.isText(localctx._i1,"value");
		}
		return true;
	}
	private symbols_token_sempred(localctx: Symbols_tokenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 41:
			return this.isText(localctx._i1,"symbols");
		}
		return true;
	}
	private javascript_expression_sempred(localctx: Javascript_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 42:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private javascript_arguments_sempred(localctx: Javascript_argumentsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 43:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private python_expression_sempred(localctx: Python_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 44:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private python_ordinal_argument_list_sempred(localctx: Python_ordinal_argument_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 45:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private python_named_argument_list_sempred(localctx: Python_named_argument_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 46:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private python_identifier_expression_sempred(localctx: Python_identifier_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 47:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private java_expression_sempred(localctx: Java_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 48:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private java_arguments_sempred(localctx: Java_argumentsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 49:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private java_identifier_expression_sempred(localctx: Java_identifier_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 50:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private java_class_identifier_expression_sempred(localctx: Java_class_identifier_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 51:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private csharp_expression_sempred(localctx: Csharp_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 52:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private csharp_arguments_sempred(localctx: Csharp_argumentsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 53:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private csharp_identifier_expression_sempred(localctx: Csharp_identifier_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 54:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private css_identifier_sempred(localctx: Css_identifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 55:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,183,2943,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,
	7,133,2,134,7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,
	7,139,2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
	7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,
	7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,
	7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,
	7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
	7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
	7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,2,181,
	7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,2,186,7,186,2,187,
	7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,7,191,2,192,7,192,2,193,
	7,193,2,194,7,194,2,195,7,195,2,196,7,196,2,197,7,197,2,198,7,198,2,199,
	7,199,2,200,7,200,2,201,7,201,2,202,7,202,2,203,7,203,2,204,7,204,2,205,
	7,205,2,206,7,206,2,207,7,207,2,208,7,208,2,209,7,209,2,210,7,210,2,211,
	7,211,2,212,7,212,2,213,7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,
	7,217,2,218,7,218,2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,
	7,223,2,224,7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,
	7,229,2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
	7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,2,241,
	7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,7,246,2,247,
	7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,2,252,7,252,2,253,
	7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,7,257,2,258,7,258,2,259,
	7,259,2,260,7,260,2,261,7,261,2,262,7,262,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,
	0,534,8,0,1,0,1,0,3,0,538,8,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,3,4,565,8,4,1,
	4,1,4,1,4,1,4,1,4,3,4,572,8,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,580,8,4,3,4,582,
	8,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,590,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,
	1,6,1,6,1,7,3,7,603,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,611,8,7,1,7,1,7,3,7,
	615,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,625,8,8,1,8,1,8,1,9,1,9,1,9,
	1,9,1,9,1,9,5,9,635,8,9,10,9,12,9,638,9,9,1,10,1,10,1,10,3,10,643,8,10,
	1,10,3,10,646,8,10,1,11,3,11,649,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
	3,11,658,8,11,1,11,1,11,1,12,1,12,1,12,1,12,3,12,666,8,12,1,12,1,12,1,13,
	3,13,671,8,13,1,13,1,13,1,13,1,13,3,13,677,8,13,1,13,1,13,1,14,1,14,1,14,
	1,14,3,14,685,8,14,1,14,1,14,1,15,3,15,690,8,15,1,15,1,15,1,15,1,15,3,15,
	696,8,15,1,15,1,15,1,16,3,16,701,8,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
	3,16,710,8,16,1,16,1,16,1,16,3,16,715,8,16,1,16,1,16,1,17,3,17,720,8,17,
	1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,729,8,17,1,17,1,17,1,17,3,17,734,
	8,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,
	19,1,19,1,19,5,19,752,8,19,10,19,12,19,755,9,19,1,20,1,20,3,20,759,8,20,
	1,20,3,20,762,8,20,1,20,1,20,1,20,1,20,3,20,768,8,20,1,20,1,20,1,20,1,21,
	1,21,3,21,775,8,21,1,21,3,21,778,8,21,1,21,1,21,1,21,1,21,3,21,784,8,21,
	1,21,1,21,1,21,1,22,3,22,790,8,22,1,22,3,22,793,8,22,1,22,1,22,1,22,1,22,
	3,22,799,8,22,1,22,1,22,1,22,3,22,804,8,22,1,22,1,22,1,23,3,23,809,8,23,
	1,23,3,23,812,8,23,1,23,1,23,1,23,1,23,3,23,818,8,23,1,23,1,23,1,23,1,23,
	1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,
	24,1,24,1,24,3,24,841,8,24,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,3,26,
	851,8,26,1,26,1,26,1,26,3,26,856,8,26,1,27,1,27,1,27,1,27,1,27,3,27,863,
	8,27,3,27,865,8,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
	28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,888,8,28,1,29,
	1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,
	30,905,8,30,1,30,1,30,1,30,1,30,1,30,3,30,912,8,30,1,30,1,30,1,30,1,30,
	1,30,1,30,3,30,920,8,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,928,8,30,1,31,
	1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,
	33,1,33,1,33,1,33,1,33,1,33,3,33,951,8,33,3,33,953,8,33,1,33,1,33,1,34,
	1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,968,8,34,1,35,1,
	35,1,35,1,35,1,35,1,35,3,35,976,8,35,1,35,1,35,1,35,1,35,1,35,1,36,1,36,
	1,36,3,36,986,8,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,
	37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,3,38,1007,8,38,1,38,1,38,3,38,
	1011,8,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,
	39,1,39,1,39,1,39,5,39,1029,8,39,10,39,12,39,1032,9,39,1,40,1,40,1,40,1,
	40,1,41,1,41,1,41,1,41,1,41,1,41,3,41,1044,8,41,1,41,1,41,3,41,1048,8,41,
	1,41,1,41,1,41,1,41,1,41,1,41,3,41,1056,8,41,1,41,3,41,1059,8,41,1,41,1,
	41,1,41,3,41,1064,8,41,1,41,3,41,1067,8,41,1,42,1,42,1,42,1,42,1,42,1,42,
	3,42,1075,8,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,1086,8,
	42,1,42,1,42,3,42,1090,8,42,1,43,1,43,1,43,1,44,1,44,3,44,1097,8,44,1,44,
	1,44,1,45,1,45,1,45,3,45,1104,8,45,1,45,1,45,1,46,1,46,1,46,3,46,1111,8,
	46,1,46,1,46,1,46,1,46,3,46,1117,8,46,1,46,1,46,1,46,1,46,1,46,3,46,1124,
	8,46,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,3,48,1140,8,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
	1,48,1,48,1,48,1,48,3,48,1157,8,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
	1,48,1,48,1,48,3,48,1184,8,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,1192,8,
	48,1,48,1,48,1,48,1,48,3,48,1198,8,48,1,48,1,48,1,48,1,48,3,48,1204,8,48,
	1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,3,48,1223,8,48,1,48,1,48,1,48,3,48,1228,8,48,1,48,1,48,1,48,
	1,48,1,48,3,48,1235,8,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,
	48,1,48,1,48,5,48,1249,8,48,10,48,12,48,1252,9,48,1,49,1,49,1,49,1,49,1,
	49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1268,8,49,1,50,1,50,
	1,50,1,50,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,3,52,1282,8,52,1,53,1,
	53,1,53,1,53,1,53,5,53,1289,8,53,10,53,12,53,1292,9,53,1,54,1,54,1,54,1,
	54,1,54,1,54,5,54,1300,8,54,10,54,12,54,1303,9,54,1,55,1,55,1,55,1,55,1,
	55,1,55,1,55,1,55,1,55,1,55,3,55,1315,8,55,1,56,1,56,1,56,1,56,1,56,1,57,
	1,57,1,57,1,57,1,57,3,57,1327,8,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,
	58,1,58,1,58,3,58,1339,8,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,
	3,59,1350,8,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,60,1,60,3,
	60,1363,8,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,1374,8,60,
	1,60,1,60,1,60,1,60,1,60,1,60,3,60,1382,8,60,1,60,1,60,1,60,1,60,3,60,1388,
	8,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,1397,8,60,1,60,1,60,1,60,1,
	60,1,60,3,60,1404,8,60,1,60,1,60,1,60,1,60,1,60,3,60,1411,8,60,1,60,1,60,
	1,60,1,60,1,60,1,60,3,60,1419,8,60,3,60,1421,8,60,1,61,1,61,1,61,1,61,1,
	61,1,61,3,61,1429,8,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,
	1440,8,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,1450,8,61,1,61,1,
	61,1,61,1,61,3,61,1456,8,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,1465,
	8,61,1,61,1,61,1,61,1,61,1,61,3,61,1472,8,61,1,61,1,61,1,61,1,61,1,61,3,
	61,1479,8,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,1487,8,61,1,61,3,61,1490,
	8,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,63,1,
	64,1,64,3,64,1507,8,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,3,64,1516,8,64,
	1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,
	65,1532,8,65,1,66,1,66,1,66,1,66,1,66,3,66,1539,8,66,1,66,1,66,1,66,1,66,
	1,66,3,66,1546,8,66,1,66,1,66,3,66,1550,8,66,1,67,1,67,1,67,1,67,1,67,1,
	68,1,68,1,68,1,68,1,68,3,68,1562,8,68,1,68,1,68,1,68,5,68,1567,8,68,10,
	68,12,68,1570,9,68,1,69,1,69,1,69,1,69,3,69,1576,8,69,1,70,1,70,1,70,1,
	70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,3,71,1589,8,71,1,72,1,72,1,72,1,72,
	1,72,1,73,1,73,1,74,1,74,1,75,5,75,1601,8,75,10,75,12,75,1604,9,75,1,76,
	1,76,1,76,3,76,1609,8,76,1,77,1,77,3,77,1613,8,77,1,77,1,77,1,77,1,78,1,
	78,1,78,1,78,5,78,1622,8,78,10,78,12,78,1625,9,78,1,79,1,79,1,79,5,79,1630,
	8,79,10,79,12,79,1633,9,79,1,79,1,79,1,79,5,79,1638,8,79,10,79,12,79,1641,
	9,79,1,79,1,79,1,79,1,79,1,79,1,79,3,79,1649,8,79,1,80,1,80,1,80,1,80,1,
	80,1,80,5,80,1657,8,80,10,80,12,80,1660,9,80,3,80,1662,8,80,1,80,1,80,3,
	80,1666,8,80,1,81,1,81,1,82,1,82,1,82,1,82,1,83,1,83,1,84,1,84,3,84,1678,
	8,84,1,85,1,85,1,86,1,86,3,86,1684,8,86,1,87,1,87,1,87,1,87,5,87,1690,8,
	87,10,87,12,87,1693,9,87,1,88,1,88,1,88,1,88,5,88,1699,8,88,10,88,12,88,
	1702,9,88,1,89,1,89,1,89,5,89,1707,8,89,10,89,12,89,1710,9,89,1,90,1,90,
	1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,90,3,90,1722,8,90,1,91,3,91,1725,8,
	91,1,91,1,91,3,91,1729,8,91,1,91,1,91,1,92,3,92,1734,8,92,1,92,1,92,3,92,
	1738,8,92,1,92,1,92,1,93,1,93,1,93,5,93,1745,8,93,10,93,12,93,1748,9,93,
	1,94,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,
	95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,3,95,1773,8,95,1,95,1,95,1,95,
	1,95,1,95,1,95,1,95,5,95,1782,8,95,10,95,12,95,1785,9,95,1,96,1,96,3,96,
	1789,8,96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,
	97,1,97,1,97,1,97,1,97,1,97,3,97,1809,8,97,1,98,1,98,1,99,3,99,1814,8,99,
	1,99,1,99,1,100,1,100,1,101,1,101,1,101,3,101,1823,8,101,1,102,1,102,3,
	102,1827,8,102,1,103,1,103,1,103,5,103,1832,8,103,10,103,12,103,1835,9,
	103,1,104,1,104,3,104,1839,8,104,1,105,1,105,3,105,1843,8,105,1,106,1,106,
	1,106,1,106,1,107,1,107,1,107,1,108,1,108,1,108,3,108,1855,8,108,1,109,
	1,109,1,110,1,110,1,111,1,111,1,112,1,112,1,113,1,113,1,114,1,114,1,114,
	5,114,1870,8,114,10,114,12,114,1873,9,114,1,115,1,115,3,115,1877,8,115,
	1,115,3,115,1880,8,115,1,116,1,116,3,116,1884,8,116,1,117,1,117,1,117,3,
	117,1889,8,117,1,118,1,118,1,118,1,119,1,119,3,119,1896,8,119,1,120,1,120,
	1,120,1,120,1,120,1,120,1,120,1,120,1,120,5,120,1907,8,120,10,120,12,120,
	1910,9,120,1,121,1,121,1,121,1,121,5,121,1916,8,121,10,121,12,121,1919,
	9,121,1,122,1,122,1,122,5,122,1924,8,122,10,122,12,122,1927,9,122,1,122,
	1,122,1,122,5,122,1932,8,122,10,122,12,122,1935,9,122,1,122,1,122,1,122,
	1,122,1,122,3,122,1942,8,122,1,123,1,123,1,123,1,123,5,123,1948,8,123,10,
	123,12,123,1951,9,123,1,124,1,124,1,124,5,124,1956,8,124,10,124,12,124,
	1959,9,124,1,124,1,124,1,124,5,124,1964,8,124,10,124,12,124,1967,9,124,
	1,124,1,124,1,124,3,124,1972,8,124,1,125,1,125,1,125,1,125,1,125,1,125,
	1,125,1,125,1,125,1,125,3,125,1984,8,125,1,126,1,126,3,126,1988,8,126,1,
	127,1,127,1,127,1,127,1,127,1,127,5,127,1996,8,127,10,127,12,127,1999,9,
	127,1,128,1,128,1,128,5,128,2004,8,128,10,128,12,128,2007,9,128,1,128,3,
	128,2010,8,128,1,129,1,129,1,129,1,129,3,129,2016,8,129,1,129,1,129,1,129,
	5,129,2021,8,129,10,129,12,129,2024,9,129,1,129,1,129,3,129,2028,8,129,
	1,130,1,130,1,130,5,130,2033,8,130,10,130,12,130,2036,9,130,1,131,1,131,
	1,131,5,131,2041,8,131,10,131,12,131,2044,9,131,1,132,1,132,1,132,1,132,
	3,132,2050,8,132,1,133,1,133,1,134,1,134,1,134,1,134,5,134,2058,8,134,10,
	134,12,134,2061,9,134,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,
	135,1,135,3,135,2073,8,135,1,136,1,136,3,136,2077,8,136,1,136,3,136,2080,
	8,136,1,137,1,137,3,137,2084,8,137,1,137,3,137,2087,8,137,1,138,1,138,1,
	138,1,138,5,138,2093,8,138,10,138,12,138,2096,9,138,1,139,1,139,1,139,1,
	139,5,139,2102,8,139,10,139,12,139,2105,9,139,1,140,1,140,1,140,1,140,5,
	140,2111,8,140,10,140,12,140,2114,9,140,1,141,1,141,1,141,1,141,5,141,2120,
	8,141,10,141,12,141,2123,9,141,1,142,1,142,1,142,1,142,1,142,1,142,1,142,
	1,142,1,142,1,142,1,142,1,142,1,142,1,142,3,142,2139,8,142,1,143,1,143,
	1,143,3,143,2144,8,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,3,143,
	2153,8,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,3,143,
	2164,8,143,1,144,1,144,1,144,5,144,2169,8,144,10,144,12,144,2172,9,144,
	1,145,1,145,1,146,1,146,1,146,3,146,2179,8,146,1,146,1,146,1,147,1,147,
	1,147,1,147,1,148,1,148,3,148,2189,8,148,1,149,1,149,1,149,1,149,1,149,
	1,149,3,149,2197,8,149,1,150,3,150,2200,8,150,1,150,1,150,3,150,2204,8,
	150,1,150,1,150,1,151,3,151,2209,8,151,1,151,1,151,1,151,1,151,1,151,1,
	151,1,151,1,151,3,151,2219,8,151,1,152,1,152,3,152,2223,8,152,1,152,1,152,
	1,153,1,153,1,153,1,153,1,153,5,153,2232,8,153,10,153,12,153,2235,9,153,
	3,153,2237,8,153,1,154,1,154,1,154,5,154,2242,8,154,10,154,12,154,2245,
	9,154,1,155,1,155,1,155,1,155,1,156,1,156,3,156,2253,8,156,1,157,1,157,
	1,157,5,157,2258,8,157,10,157,12,157,2261,9,157,1,158,1,158,1,158,1,158,
	1,159,1,159,3,159,2269,8,159,1,160,1,160,1,160,1,160,1,160,1,160,1,160,
	1,160,1,160,3,160,2280,8,160,1,161,1,161,1,161,1,161,1,162,1,162,1,162,
	1,162,1,162,5,162,2291,8,162,10,162,12,162,2294,9,162,1,163,1,163,1,163,
	1,163,3,163,2300,8,163,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,
	1,165,1,165,1,165,3,165,2313,8,165,1,166,1,166,1,166,1,166,1,166,1,167,
	1,167,1,167,3,167,2323,8,167,1,167,3,167,2326,8,167,1,168,1,168,3,168,2330,
	8,168,1,169,1,169,1,169,1,169,1,169,1,170,1,170,1,170,1,170,1,170,1,171,
	1,171,1,171,1,171,1,171,1,172,1,172,1,172,5,172,2350,8,172,10,172,12,172,
	2353,9,172,1,173,1,173,1,173,5,173,2358,8,173,10,173,12,173,2361,9,173,
	1,173,3,173,2364,8,173,1,174,1,174,1,174,5,174,2369,8,174,10,174,12,174,
	2372,9,174,1,175,1,175,1,175,1,175,1,175,1,175,3,175,2380,8,175,1,176,1,
	176,1,177,1,177,1,177,1,178,1,178,1,178,1,179,1,179,1,179,1,180,1,180,1,
	180,1,181,1,181,1,181,1,182,1,182,1,183,1,183,1,184,1,184,1,185,1,185,1,
	186,1,186,1,187,1,187,1,188,1,188,1,189,1,189,1,189,1,189,1,189,1,189,1,
	189,3,189,2420,8,189,1,190,1,190,1,190,1,190,1,190,5,190,2427,8,190,10,
	190,12,190,2430,9,190,1,191,1,191,1,191,1,191,1,191,1,191,1,191,3,191,2439,
	8,191,1,192,1,192,1,193,1,193,1,193,1,194,1,194,1,194,1,194,1,194,3,194,
	2451,8,194,1,195,1,195,1,195,3,195,2456,8,195,1,195,1,195,1,196,1,196,1,
	196,1,196,1,196,1,196,5,196,2466,8,196,10,196,12,196,2469,9,196,1,197,1,
	197,1,197,1,197,1,198,1,198,1,198,1,198,1,199,1,199,1,200,1,200,1,200,1,
	200,1,200,3,200,2486,8,200,1,201,1,201,1,201,1,201,1,201,3,201,2493,8,201,
	1,202,1,202,1,202,3,202,2498,8,202,1,203,1,203,1,203,1,203,1,203,5,203,
	2505,8,203,10,203,12,203,2508,9,203,1,204,1,204,1,204,1,204,1,204,3,204,
	2515,8,204,1,205,1,205,1,206,1,206,1,206,1,206,1,206,1,206,3,206,2525,8,
	206,1,207,1,207,1,207,3,207,2530,8,207,1,207,1,207,1,208,1,208,1,208,1,
	208,1,208,1,208,3,208,2540,8,208,1,209,1,209,1,209,1,209,1,209,1,209,5,
	209,2548,8,209,10,209,12,209,2551,9,209,1,210,1,210,1,210,1,210,1,210,1,
	210,1,210,1,210,1,210,1,210,1,210,5,210,2564,8,210,10,210,12,210,2567,9,
	210,1,211,1,211,1,211,1,211,1,212,1,212,1,212,3,212,2576,8,212,1,212,1,
	212,1,212,5,212,2581,8,212,10,212,12,212,2584,9,212,1,213,1,213,1,213,1,
	213,1,213,3,213,2591,8,213,1,214,1,214,1,214,1,214,1,214,3,214,2598,8,214,
	1,215,1,215,1,215,1,215,1,215,1,215,1,215,3,215,2607,8,215,1,216,1,216,
	1,216,1,216,1,216,5,216,2614,8,216,10,216,12,216,2617,9,216,1,217,1,217,
	1,217,1,217,1,217,3,217,2624,8,217,1,218,1,218,1,219,1,219,1,219,1,220,
	1,220,1,220,3,220,2634,8,220,1,221,1,221,1,221,3,221,2639,8,221,1,221,1,
	221,1,222,1,222,1,222,1,222,1,222,1,222,5,222,2649,8,222,10,222,12,222,
	2652,9,222,1,223,1,223,1,223,1,223,1,224,1,224,1,224,1,224,1,225,1,225,
	1,225,1,225,1,225,1,225,5,225,2668,8,225,10,225,12,225,2671,9,225,1,226,
	1,226,1,226,1,226,1,226,5,226,2678,8,226,10,226,12,226,2681,9,226,1,227,
	1,227,1,227,1,227,1,227,3,227,2688,8,227,1,228,1,228,1,228,1,228,1,228,
	3,228,2695,8,228,1,229,1,229,1,229,1,229,1,229,1,229,1,229,3,229,2704,8,
	229,1,230,1,230,1,230,1,230,1,230,5,230,2711,8,230,10,230,12,230,2714,9,
	230,1,231,1,231,1,231,1,231,1,231,3,231,2721,8,231,1,232,1,232,1,233,1,
	233,1,233,1,234,1,234,1,234,3,234,2731,8,234,1,235,1,235,1,235,3,235,2736,
	8,235,1,235,1,235,1,236,1,236,1,236,1,236,1,236,1,236,5,236,2746,8,236,
	10,236,12,236,2749,9,236,1,237,1,237,1,237,1,237,1,238,1,238,1,238,1,238,
	1,239,1,239,1,239,3,239,2762,8,239,1,239,1,239,1,239,5,239,2767,8,239,10,
	239,12,239,2770,9,239,1,240,1,240,1,240,1,240,1,240,3,240,2777,8,240,1,
	241,1,241,1,241,1,241,1,241,3,241,2784,8,241,1,242,1,242,3,242,2788,8,242,
	1,243,1,243,1,243,3,243,2793,8,243,1,243,1,243,3,243,2797,8,243,1,244,1,
	244,1,244,3,244,2802,8,244,1,244,1,244,1,244,1,245,1,245,1,245,3,245,2810,
	8,245,1,246,1,246,1,246,1,246,1,247,1,247,1,247,1,247,5,247,2820,8,247,
	10,247,12,247,2823,9,247,1,247,1,247,1,247,1,248,1,248,1,248,1,248,5,248,
	2832,8,248,10,248,12,248,2835,9,248,1,248,1,248,1,249,1,249,1,249,1,249,
	1,249,1,250,1,250,1,250,5,250,2847,8,250,10,250,12,250,2850,9,250,1,251,
	1,251,5,251,2854,8,251,10,251,12,251,2857,9,251,1,252,1,252,1,252,3,252,
	2862,8,252,1,252,1,252,1,253,1,253,1,253,3,253,2869,8,253,1,253,3,253,2872,
	8,253,1,254,4,254,2875,8,254,11,254,12,254,2876,1,255,1,255,1,255,1,255,
	3,255,2883,8,255,1,255,3,255,2886,8,255,1,256,4,256,2889,8,256,11,256,12,
	256,2890,1,257,1,257,3,257,2895,8,257,1,258,1,258,4,258,2899,8,258,11,258,
	12,258,2900,1,258,1,258,1,259,1,259,1,259,4,259,2908,8,259,11,259,12,259,
	2909,1,259,1,259,1,260,1,260,1,260,1,260,3,260,2918,8,260,1,260,1,260,4,
	260,2922,8,260,11,260,12,260,2923,5,260,2926,8,260,10,260,12,260,2929,9,
	260,1,261,1,261,1,261,1,261,1,261,3,261,2936,8,261,1,262,4,262,2939,8,262,
	11,262,12,262,2940,1,262,0,24,18,38,78,96,106,108,136,190,240,324,380,392,
	406,418,420,424,432,444,450,452,460,472,478,520,263,0,2,4,6,8,10,12,14,
	16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
	64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,
	110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,
	146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,
	182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,
	218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,
	254,256,258,260,262,264,266,268,270,272,274,276,278,280,282,284,286,288,
	290,292,294,296,298,300,302,304,306,308,310,312,314,316,318,320,322,324,
	326,328,330,332,334,336,338,340,342,344,346,348,350,352,354,356,358,360,
	362,364,366,368,370,372,374,376,378,380,382,384,386,388,390,392,394,396,
	398,400,402,404,406,408,410,412,414,416,418,420,422,424,426,428,430,432,
	434,436,438,440,442,444,446,448,450,452,454,456,458,460,462,464,466,468,
	470,472,474,476,478,480,482,484,486,488,490,492,494,496,498,500,502,504,
	506,508,510,512,514,516,518,520,522,524,0,14,1,0,28,29,1,0,35,38,1,0,42,
	44,1,0,2,3,3,0,110,110,143,143,169,169,5,0,86,86,122,122,138,138,146,146,
	169,169,3,0,86,86,138,138,169,169,3,0,138,138,146,146,169,169,2,0,142,142,
	152,152,2,0,77,77,93,93,8,0,5,10,49,49,51,59,61,69,71,113,115,115,117,150,
	152,162,2,0,33,33,121,121,3,0,20,21,35,35,37,37,2,0,12,12,20,21,3132,0,
	526,1,0,0,0,2,543,1,0,0,0,4,552,1,0,0,0,6,558,1,0,0,0,8,564,1,0,0,0,10,
	585,1,0,0,0,12,593,1,0,0,0,14,602,1,0,0,0,16,618,1,0,0,0,18,628,1,0,0,0,
	20,645,1,0,0,0,22,648,1,0,0,0,24,661,1,0,0,0,26,670,1,0,0,0,28,680,1,0,
	0,0,30,689,1,0,0,0,32,700,1,0,0,0,34,719,1,0,0,0,36,737,1,0,0,0,38,743,
	1,0,0,0,40,756,1,0,0,0,42,772,1,0,0,0,44,792,1,0,0,0,46,808,1,0,0,0,48,
	824,1,0,0,0,50,842,1,0,0,0,52,845,1,0,0,0,54,864,1,0,0,0,56,887,1,0,0,0,
	58,889,1,0,0,0,60,911,1,0,0,0,62,929,1,0,0,0,64,935,1,0,0,0,66,941,1,0,
	0,0,68,967,1,0,0,0,70,969,1,0,0,0,72,982,1,0,0,0,74,994,1,0,0,0,76,1000,
	1,0,0,0,78,1012,1,0,0,0,80,1033,1,0,0,0,82,1037,1,0,0,0,84,1089,1,0,0,0,
	86,1091,1,0,0,0,88,1094,1,0,0,0,90,1100,1,0,0,0,92,1110,1,0,0,0,94,1125,
	1,0,0,0,96,1156,1,0,0,0,98,1267,1,0,0,0,100,1269,1,0,0,0,102,1273,1,0,0,
	0,104,1281,1,0,0,0,106,1283,1,0,0,0,108,1293,1,0,0,0,110,1314,1,0,0,0,112,
	1316,1,0,0,0,114,1321,1,0,0,0,116,1330,1,0,0,0,118,1340,1,0,0,0,120,1420,
	1,0,0,0,122,1489,1,0,0,0,124,1491,1,0,0,0,126,1498,1,0,0,0,128,1504,1,0,
	0,0,130,1531,1,0,0,0,132,1549,1,0,0,0,134,1551,1,0,0,0,136,1561,1,0,0,0,
	138,1571,1,0,0,0,140,1577,1,0,0,0,142,1588,1,0,0,0,144,1590,1,0,0,0,146,
	1595,1,0,0,0,148,1597,1,0,0,0,150,1602,1,0,0,0,152,1608,1,0,0,0,154,1610,
	1,0,0,0,156,1617,1,0,0,0,158,1631,1,0,0,0,160,1650,1,0,0,0,162,1667,1,0,
	0,0,164,1669,1,0,0,0,166,1673,1,0,0,0,168,1677,1,0,0,0,170,1679,1,0,0,0,
	172,1683,1,0,0,0,174,1685,1,0,0,0,176,1694,1,0,0,0,178,1703,1,0,0,0,180,
	1721,1,0,0,0,182,1724,1,0,0,0,184,1733,1,0,0,0,186,1741,1,0,0,0,188,1749,
	1,0,0,0,190,1772,1,0,0,0,192,1788,1,0,0,0,194,1808,1,0,0,0,196,1810,1,0,
	0,0,198,1813,1,0,0,0,200,1817,1,0,0,0,202,1822,1,0,0,0,204,1826,1,0,0,0,
	206,1828,1,0,0,0,208,1838,1,0,0,0,210,1842,1,0,0,0,212,1844,1,0,0,0,214,
	1848,1,0,0,0,216,1854,1,0,0,0,218,1856,1,0,0,0,220,1858,1,0,0,0,222,1860,
	1,0,0,0,224,1862,1,0,0,0,226,1864,1,0,0,0,228,1866,1,0,0,0,230,1879,1,0,
	0,0,232,1883,1,0,0,0,234,1885,1,0,0,0,236,1890,1,0,0,0,238,1895,1,0,0,0,
	240,1897,1,0,0,0,242,1911,1,0,0,0,244,1925,1,0,0,0,246,1943,1,0,0,0,248,
	1957,1,0,0,0,250,1983,1,0,0,0,252,1985,1,0,0,0,254,1989,1,0,0,0,256,2000,
	1,0,0,0,258,2011,1,0,0,0,260,2029,1,0,0,0,262,2037,1,0,0,0,264,2049,1,0,
	0,0,266,2051,1,0,0,0,268,2053,1,0,0,0,270,2072,1,0,0,0,272,2074,1,0,0,0,
	274,2081,1,0,0,0,276,2088,1,0,0,0,278,2097,1,0,0,0,280,2106,1,0,0,0,282,
	2115,1,0,0,0,284,2138,1,0,0,0,286,2163,1,0,0,0,288,2165,1,0,0,0,290,2173,
	1,0,0,0,292,2178,1,0,0,0,294,2182,1,0,0,0,296,2188,1,0,0,0,298,2196,1,0,
	0,0,300,2199,1,0,0,0,302,2208,1,0,0,0,304,2220,1,0,0,0,306,2226,1,0,0,0,
	308,2238,1,0,0,0,310,2246,1,0,0,0,312,2252,1,0,0,0,314,2254,1,0,0,0,316,
	2262,1,0,0,0,318,2268,1,0,0,0,320,2279,1,0,0,0,322,2281,1,0,0,0,324,2285,
	1,0,0,0,326,2299,1,0,0,0,328,2301,1,0,0,0,330,2312,1,0,0,0,332,2314,1,0,
	0,0,334,2325,1,0,0,0,336,2329,1,0,0,0,338,2331,1,0,0,0,340,2336,1,0,0,0,
	342,2341,1,0,0,0,344,2346,1,0,0,0,346,2354,1,0,0,0,348,2365,1,0,0,0,350,
	2379,1,0,0,0,352,2381,1,0,0,0,354,2383,1,0,0,0,356,2386,1,0,0,0,358,2389,
	1,0,0,0,360,2392,1,0,0,0,362,2395,1,0,0,0,364,2398,1,0,0,0,366,2400,1,0,
	0,0,368,2402,1,0,0,0,370,2404,1,0,0,0,372,2406,1,0,0,0,374,2408,1,0,0,0,
	376,2410,1,0,0,0,378,2419,1,0,0,0,380,2421,1,0,0,0,382,2438,1,0,0,0,384,
	2440,1,0,0,0,386,2442,1,0,0,0,388,2450,1,0,0,0,390,2452,1,0,0,0,392,2459,
	1,0,0,0,394,2470,1,0,0,0,396,2474,1,0,0,0,398,2478,1,0,0,0,400,2485,1,0,
	0,0,402,2492,1,0,0,0,404,2497,1,0,0,0,406,2499,1,0,0,0,408,2514,1,0,0,0,
	410,2516,1,0,0,0,412,2524,1,0,0,0,414,2526,1,0,0,0,416,2539,1,0,0,0,418,
	2541,1,0,0,0,420,2552,1,0,0,0,422,2568,1,0,0,0,424,2575,1,0,0,0,426,2590,
	1,0,0,0,428,2597,1,0,0,0,430,2606,1,0,0,0,432,2608,1,0,0,0,434,2623,1,0,
	0,0,436,2625,1,0,0,0,438,2627,1,0,0,0,440,2633,1,0,0,0,442,2635,1,0,0,0,
	444,2642,1,0,0,0,446,2653,1,0,0,0,448,2657,1,0,0,0,450,2661,1,0,0,0,452,
	2672,1,0,0,0,454,2687,1,0,0,0,456,2694,1,0,0,0,458,2703,1,0,0,0,460,2705,
	1,0,0,0,462,2720,1,0,0,0,464,2722,1,0,0,0,466,2724,1,0,0,0,468,2730,1,0,
	0,0,470,2732,1,0,0,0,472,2739,1,0,0,0,474,2750,1,0,0,0,476,2754,1,0,0,0,
	478,2761,1,0,0,0,480,2776,1,0,0,0,482,2783,1,0,0,0,484,2787,1,0,0,0,486,
	2796,1,0,0,0,488,2798,1,0,0,0,490,2809,1,0,0,0,492,2811,1,0,0,0,494,2815,
	1,0,0,0,496,2827,1,0,0,0,498,2838,1,0,0,0,500,2843,1,0,0,0,502,2851,1,0,
	0,0,504,2858,1,0,0,0,506,2871,1,0,0,0,508,2874,1,0,0,0,510,2885,1,0,0,0,
	512,2888,1,0,0,0,514,2894,1,0,0,0,516,2896,1,0,0,0,518,2904,1,0,0,0,520,
	2917,1,0,0,0,522,2935,1,0,0,0,524,2938,1,0,0,0,526,527,5,99,0,0,527,528,
	5,86,0,0,528,533,3,224,112,0,529,530,5,16,0,0,530,531,3,262,131,0,531,532,
	5,17,0,0,532,534,1,0,0,0,533,529,1,0,0,0,533,534,1,0,0,0,534,537,1,0,0,
	0,535,536,5,103,0,0,536,538,3,224,112,0,537,535,1,0,0,0,537,538,1,0,0,0,
	538,539,1,0,0,0,539,540,5,20,0,0,540,541,3,176,88,0,541,542,5,21,0,0,542,
	1,1,0,0,0,543,544,5,99,0,0,544,545,3,224,112,0,545,546,5,16,0,0,546,547,
	3,194,97,0,547,548,5,17,0,0,548,549,5,20,0,0,549,550,3,174,87,0,550,551,
	5,21,0,0,551,3,1,0,0,0,552,553,3,226,113,0,553,554,5,16,0,0,554,555,3,136,
	68,0,555,556,5,17,0,0,556,557,5,12,0,0,557,5,1,0,0,0,558,559,3,226,113,
	0,559,560,5,41,0,0,560,561,3,96,48,0,561,562,5,12,0,0,562,7,1,0,0,0,563,
	565,5,146,0,0,564,563,1,0,0,0,564,565,1,0,0,0,565,566,1,0,0,0,566,567,5,
	79,0,0,567,568,3,222,111,0,568,569,5,11,0,0,569,571,3,190,95,0,570,572,
	3,180,90,0,571,570,1,0,0,0,571,572,1,0,0,0,572,581,1,0,0,0,573,574,5,158,
	0,0,574,579,5,115,0,0,575,576,5,16,0,0,576,577,3,260,130,0,577,578,5,17,
	0,0,578,580,1,0,0,0,579,575,1,0,0,0,579,580,1,0,0,0,580,582,1,0,0,0,581,
	573,1,0,0,0,581,582,1,0,0,0,582,583,1,0,0,0,583,584,5,12,0,0,584,9,1,0,
	0,0,585,586,5,157,0,0,586,589,3,224,112,0,587,588,5,103,0,0,588,590,3,224,
	112,0,589,587,1,0,0,0,589,590,1,0,0,0,590,591,1,0,0,0,591,592,3,20,10,0,
	592,11,1,0,0,0,593,594,5,123,0,0,594,595,5,157,0,0,595,596,3,224,112,0,
	596,597,5,20,0,0,597,598,3,36,18,0,598,599,3,246,123,0,599,600,5,21,0,0,
	600,13,1,0,0,0,601,603,5,146,0,0,602,601,1,0,0,0,602,603,1,0,0,0,603,604,
	1,0,0,0,604,605,5,86,0,0,605,610,3,224,112,0,606,607,5,16,0,0,607,608,3,
	262,131,0,608,609,5,17,0,0,609,611,1,0,0,0,610,606,1,0,0,0,610,611,1,0,
	0,0,611,614,1,0,0,0,612,613,5,103,0,0,613,615,3,18,9,0,614,612,1,0,0,0,
	614,615,1,0,0,0,615,616,1,0,0,0,616,617,3,20,10,0,617,15,1,0,0,0,618,619,
	5,144,0,0,619,624,3,224,112,0,620,621,5,16,0,0,621,622,3,262,131,0,622,
	623,5,17,0,0,623,625,1,0,0,0,624,620,1,0,0,0,624,625,1,0,0,0,625,626,1,
	0,0,0,626,627,3,20,10,0,627,17,1,0,0,0,628,629,6,9,-1,0,629,630,3,224,112,
	0,630,636,1,0,0,0,631,632,10,1,0,0,632,633,5,13,0,0,633,635,3,224,112,0,
	634,631,1,0,0,0,635,638,1,0,0,0,636,634,1,0,0,0,636,637,1,0,0,0,637,19,
	1,0,0,0,638,636,1,0,0,0,639,646,5,12,0,0,640,642,5,20,0,0,641,643,3,242,
	121,0,642,641,1,0,0,0,642,643,1,0,0,0,643,644,1,0,0,0,644,646,5,21,0,0,
	645,639,1,0,0,0,645,640,1,0,0,0,646,21,1,0,0,0,647,649,3,190,95,0,648,647,
	1,0,0,0,648,649,1,0,0,0,649,650,1,0,0,0,650,651,5,130,0,0,651,652,3,350,
	175,0,652,653,5,16,0,0,653,654,3,232,116,0,654,655,5,17,0,0,655,657,5,20,
	0,0,656,658,3,276,138,0,657,656,1,0,0,0,657,658,1,0,0,0,658,659,1,0,0,0,
	659,660,5,21,0,0,660,23,1,0,0,0,661,662,5,143,0,0,662,663,3,220,110,0,663,
	665,5,20,0,0,664,666,3,276,138,0,665,664,1,0,0,0,665,666,1,0,0,0,666,667,
	1,0,0,0,667,668,5,21,0,0,668,25,1,0,0,0,669,671,5,123,0,0,670,669,1,0,0,
	0,670,671,1,0,0,0,671,672,1,0,0,0,672,673,5,143,0,0,673,674,3,220,110,0,
	674,676,5,20,0,0,675,677,3,268,134,0,676,675,1,0,0,0,676,677,1,0,0,0,677,
	678,1,0,0,0,678,679,5,21,0,0,679,27,1,0,0,0,680,681,5,110,0,0,681,682,3,
	220,110,0,682,684,5,20,0,0,683,685,3,276,138,0,684,683,1,0,0,0,684,685,
	1,0,0,0,685,686,1,0,0,0,686,687,5,21,0,0,687,29,1,0,0,0,688,690,5,123,0,
	0,689,688,1,0,0,0,689,690,1,0,0,0,690,691,1,0,0,0,691,692,5,110,0,0,692,
	693,3,220,110,0,693,695,5,20,0,0,694,696,3,268,134,0,695,694,1,0,0,0,695,
	696,1,0,0,0,696,697,1,0,0,0,697,698,5,21,0,0,698,31,1,0,0,0,699,701,5,146,
	0,0,700,699,1,0,0,0,700,701,1,0,0,0,701,702,1,0,0,0,702,703,5,123,0,0,703,
	704,5,138,0,0,704,709,3,224,112,0,705,706,5,16,0,0,706,707,3,262,131,0,
	707,708,5,17,0,0,708,710,1,0,0,0,709,705,1,0,0,0,709,710,1,0,0,0,710,711,
	1,0,0,0,711,712,5,20,0,0,712,714,3,36,18,0,713,715,3,246,123,0,714,713,
	1,0,0,0,714,715,1,0,0,0,715,716,1,0,0,0,716,717,5,21,0,0,717,33,1,0,0,0,
	718,720,5,146,0,0,719,718,1,0,0,0,719,720,1,0,0,0,720,721,1,0,0,0,721,722,
	5,123,0,0,722,723,5,86,0,0,723,728,3,224,112,0,724,725,5,16,0,0,725,726,
	3,262,131,0,726,727,5,17,0,0,727,729,1,0,0,0,728,724,1,0,0,0,728,729,1,
	0,0,0,729,730,1,0,0,0,730,731,5,20,0,0,731,733,3,36,18,0,732,734,3,246,
	123,0,733,732,1,0,0,0,733,734,1,0,0,0,734,735,1,0,0,0,735,736,5,21,0,0,
	736,35,1,0,0,0,737,738,5,86,0,0,738,739,5,81,0,0,739,740,5,20,0,0,740,741,
	3,38,19,0,741,742,5,21,0,0,742,37,1,0,0,0,743,744,6,19,-1,0,744,745,3,250,
	125,0,745,746,5,12,0,0,746,753,1,0,0,0,747,748,10,1,0,0,748,749,3,250,125,
	0,749,750,5,12,0,0,750,752,1,0,0,0,751,747,1,0,0,0,752,755,1,0,0,0,753,
	751,1,0,0,0,753,754,1,0,0,0,754,39,1,0,0,0,755,753,1,0,0,0,756,761,5,71,
	0,0,757,759,5,122,0,0,758,757,1,0,0,0,758,759,1,0,0,0,759,760,1,0,0,0,760,
	762,3,190,95,0,761,758,1,0,0,0,761,762,1,0,0,0,762,763,1,0,0,0,763,764,
	5,119,0,0,764,765,3,224,112,0,765,767,5,16,0,0,766,768,3,228,114,0,767,
	766,1,0,0,0,767,768,1,0,0,0,768,769,1,0,0,0,769,770,5,17,0,0,770,771,5,
	12,0,0,771,41,1,0,0,0,772,777,5,71,0,0,773,775,5,122,0,0,774,773,1,0,0,
	0,774,775,1,0,0,0,775,776,1,0,0,0,776,778,3,190,95,0,777,774,1,0,0,0,777,
	778,1,0,0,0,778,779,1,0,0,0,779,780,5,119,0,0,780,781,3,208,104,0,781,783,
	5,16,0,0,782,784,3,228,114,0,783,782,1,0,0,0,783,784,1,0,0,0,784,785,1,
	0,0,0,785,786,5,17,0,0,786,787,5,12,0,0,787,43,1,0,0,0,788,790,5,122,0,
	0,789,788,1,0,0,0,789,790,1,0,0,0,790,791,1,0,0,0,791,793,3,190,95,0,792,
	789,1,0,0,0,792,793,1,0,0,0,793,794,1,0,0,0,794,795,5,119,0,0,795,796,3,
	208,104,0,796,798,5,16,0,0,797,799,3,228,114,0,798,797,1,0,0,0,798,799,
	1,0,0,0,799,800,1,0,0,0,800,801,5,17,0,0,801,803,5,20,0,0,802,804,3,276,
	138,0,803,802,1,0,0,0,803,804,1,0,0,0,804,805,1,0,0,0,805,806,5,21,0,0,
	806,45,1,0,0,0,807,809,3,238,119,0,808,807,1,0,0,0,808,809,1,0,0,0,809,
	811,1,0,0,0,810,812,5,123,0,0,811,810,1,0,0,0,811,812,1,0,0,0,812,813,1,
	0,0,0,813,814,5,119,0,0,814,815,3,208,104,0,815,817,5,16,0,0,816,818,3,
	228,114,0,817,816,1,0,0,0,817,818,1,0,0,0,818,819,1,0,0,0,819,820,5,17,
	0,0,820,821,5,20,0,0,821,822,3,268,134,0,822,823,5,21,0,0,823,47,1,0,0,
	0,824,825,5,150,0,0,825,826,5,119,0,0,826,827,5,173,0,0,827,828,5,16,0,
	0,828,829,5,17,0,0,829,830,5,20,0,0,830,831,3,276,138,0,831,832,5,21,0,
	0,832,840,5,156,0,0,833,834,5,20,0,0,834,835,3,278,139,0,835,836,5,21,0,
	0,836,841,1,0,0,0,837,838,3,226,113,0,838,839,5,12,0,0,839,841,1,0,0,0,
	840,833,1,0,0,0,840,837,1,0,0,0,841,49,1,0,0,0,842,843,3,96,48,0,843,844,
	5,12,0,0,844,51,1,0,0,0,845,850,3,238,119,0,846,847,5,16,0,0,847,848,3,
	262,131,0,848,849,5,17,0,0,849,851,1,0,0,0,850,846,1,0,0,0,850,851,1,0,
	0,0,851,852,1,0,0,0,852,855,3,220,110,0,853,854,5,41,0,0,854,856,3,296,
	148,0,855,853,1,0,0,0,855,856,1,0,0,0,856,53,1,0,0,0,857,865,3,56,28,0,
	858,862,5,20,0,0,859,860,3,276,138,0,860,861,5,21,0,0,861,863,1,0,0,0,862,
	859,1,0,0,0,862,863,1,0,0,0,863,865,1,0,0,0,864,857,1,0,0,0,864,858,1,0,
	0,0,865,55,1,0,0,0,866,888,3,92,46,0,867,888,3,140,70,0,868,888,3,144,72,
	0,869,888,3,60,30,0,870,888,3,122,61,0,871,888,3,126,63,0,872,888,3,58,
	29,0,873,888,3,86,43,0,874,888,3,88,44,0,875,888,3,76,38,0,876,888,3,66,
	33,0,877,888,3,70,35,0,878,888,3,74,37,0,879,888,3,72,36,0,880,888,3,82,
	41,0,881,888,3,80,40,0,882,888,3,116,58,0,883,888,3,62,31,0,884,888,3,64,
	32,0,885,888,3,44,22,0,886,888,3,266,133,0,887,866,1,0,0,0,887,867,1,0,
	0,0,887,868,1,0,0,0,887,869,1,0,0,0,887,870,1,0,0,0,887,871,1,0,0,0,887,
	872,1,0,0,0,887,873,1,0,0,0,887,874,1,0,0,0,887,875,1,0,0,0,887,876,1,0,
	0,0,887,877,1,0,0,0,887,878,1,0,0,0,887,879,1,0,0,0,887,880,1,0,0,0,887,
	881,1,0,0,0,887,882,1,0,0,0,887,883,1,0,0,0,887,884,1,0,0,0,887,885,1,0,
	0,0,887,886,1,0,0,0,888,57,1,0,0,0,889,890,5,107,0,0,890,891,5,16,0,0,891,
	892,5,17,0,0,892,893,5,12,0,0,893,59,1,0,0,0,894,895,5,92,0,0,895,896,5,
	16,0,0,896,897,3,186,93,0,897,904,5,17,0,0,898,899,5,74,0,0,899,900,5,147,
	0,0,900,901,5,16,0,0,901,902,3,186,93,0,902,903,5,17,0,0,903,905,1,0,0,
	0,904,898,1,0,0,0,904,905,1,0,0,0,905,912,1,0,0,0,906,907,5,147,0,0,907,
	908,5,16,0,0,908,909,3,186,93,0,909,910,5,17,0,0,910,912,1,0,0,0,911,894,
	1,0,0,0,911,906,1,0,0,0,912,919,1,0,0,0,913,914,5,158,0,0,914,915,3,328,
	164,0,915,916,5,16,0,0,916,917,3,96,48,0,917,918,5,17,0,0,918,920,1,0,0,
	0,919,913,1,0,0,0,919,920,1,0,0,0,920,927,1,0,0,0,921,922,5,151,0,0,922,
	923,5,20,0,0,923,924,3,276,138,0,924,925,5,21,0,0,925,928,1,0,0,0,926,928,
	5,12,0,0,927,921,1,0,0,0,927,926,1,0,0,0,928,61,1,0,0,0,929,930,5,158,0,
	0,930,931,5,16,0,0,931,932,3,322,161,0,932,933,5,17,0,0,933,934,3,54,27,
	0,934,63,1,0,0,0,935,936,5,158,0,0,936,937,5,16,0,0,937,938,3,224,112,0,
	938,939,5,17,0,0,939,940,3,54,27,0,940,65,1,0,0,0,941,942,5,149,0,0,942,
	943,5,16,0,0,943,944,3,96,48,0,944,945,5,17,0,0,945,946,5,20,0,0,946,952,
	3,280,140,0,947,948,5,90,0,0,948,950,5,11,0,0,949,951,3,276,138,0,950,949,
	1,0,0,0,950,951,1,0,0,0,951,953,1,0,0,0,952,947,1,0,0,0,952,953,1,0,0,0,
	953,954,1,0,0,0,954,955,5,21,0,0,955,67,1,0,0,0,956,957,5,84,0,0,957,958,
	3,286,143,0,958,959,5,11,0,0,959,960,3,276,138,0,960,968,1,0,0,0,961,962,
	5,84,0,0,962,963,5,113,0,0,963,964,3,284,142,0,964,965,5,11,0,0,965,966,
	3,276,138,0,966,968,1,0,0,0,967,956,1,0,0,0,967,961,1,0,0,0,968,69,1,0,
	0,0,969,970,5,108,0,0,970,971,5,96,0,0,971,972,5,16,0,0,972,975,3,220,110,
	0,973,974,5,13,0,0,974,976,3,220,110,0,975,973,1,0,0,0,975,976,1,0,0,0,
	976,977,1,0,0,0,977,978,5,113,0,0,978,979,3,96,48,0,979,980,5,17,0,0,980,
	981,3,54,27,0,981,71,1,0,0,0,982,983,5,94,0,0,983,985,5,20,0,0,984,986,
	3,276,138,0,985,984,1,0,0,0,985,986,1,0,0,0,986,987,1,0,0,0,987,988,5,21,
	0,0,988,989,5,161,0,0,989,990,5,16,0,0,990,991,3,96,48,0,991,992,5,17,0,
	0,992,993,5,12,0,0,993,73,1,0,0,0,994,995,5,161,0,0,995,996,5,16,0,0,996,
	997,3,96,48,0,997,998,5,17,0,0,998,999,3,54,27,0,999,75,1,0,0,0,1000,1001,
	5,112,0,0,1001,1002,5,16,0,0,1002,1003,3,96,48,0,1003,1004,5,17,0,0,1004,
	1006,3,54,27,0,1005,1007,3,78,39,0,1006,1005,1,0,0,0,1006,1007,1,0,0,0,
	1007,1010,1,0,0,0,1008,1009,5,97,0,0,1009,1011,3,54,27,0,1010,1008,1,0,
	0,0,1010,1011,1,0,0,0,1011,77,1,0,0,0,1012,1013,6,39,-1,0,1013,1014,5,97,
	0,0,1014,1015,5,112,0,0,1015,1016,5,16,0,0,1016,1017,3,96,48,0,1017,1018,
	5,17,0,0,1018,1019,3,54,27,0,1019,1030,1,0,0,0,1020,1021,10,1,0,0,1021,
	1022,5,97,0,0,1022,1023,5,112,0,0,1023,1024,5,16,0,0,1024,1025,3,96,48,
	0,1025,1026,5,17,0,0,1026,1027,3,54,27,0,1027,1029,1,0,0,0,1028,1020,1,
	0,0,0,1029,1032,1,0,0,0,1030,1028,1,0,0,0,1030,1031,1,0,0,0,1031,79,1,0,
	0,0,1032,1030,1,0,0,0,1033,1034,5,153,0,0,1034,1035,3,96,48,0,1035,1036,
	5,12,0,0,1036,81,1,0,0,0,1037,1038,5,155,0,0,1038,1039,5,16,0,0,1039,1040,
	3,220,110,0,1040,1041,5,17,0,0,1041,1043,5,20,0,0,1042,1044,3,276,138,0,
	1043,1042,1,0,0,0,1043,1044,1,0,0,0,1044,1045,1,0,0,0,1045,1047,5,21,0,
	0,1046,1048,3,282,141,0,1047,1046,1,0,0,0,1047,1048,1,0,0,0,1048,1058,1,
	0,0,0,1049,1050,5,85,0,0,1050,1051,5,16,0,0,1051,1052,5,75,0,0,1052,1053,
	5,17,0,0,1053,1055,5,20,0,0,1054,1056,3,276,138,0,1055,1054,1,0,0,0,1055,
	1056,1,0,0,0,1056,1057,1,0,0,0,1057,1059,5,21,0,0,1058,1049,1,0,0,0,1058,
	1059,1,0,0,0,1059,1066,1,0,0,0,1060,1061,5,106,0,0,1061,1063,5,20,0,0,1062,
	1064,3,276,138,0,1063,1062,1,0,0,0,1063,1064,1,0,0,0,1064,1065,1,0,0,0,
	1065,1067,5,21,0,0,1066,1060,1,0,0,0,1066,1067,1,0,0,0,1067,83,1,0,0,0,
	1068,1069,5,85,0,0,1069,1070,5,16,0,0,1070,1071,3,226,113,0,1071,1072,5,
	17,0,0,1072,1074,5,20,0,0,1073,1075,3,276,138,0,1074,1073,1,0,0,0,1074,
	1075,1,0,0,0,1075,1076,1,0,0,0,1076,1077,5,21,0,0,1077,1090,1,0,0,0,1078,
	1079,5,85,0,0,1079,1080,5,113,0,0,1080,1081,5,16,0,0,1081,1082,3,178,89,
	0,1082,1083,5,17,0,0,1083,1085,5,20,0,0,1084,1086,3,276,138,0,1085,1084,
	1,0,0,0,1085,1086,1,0,0,0,1086,1087,1,0,0,0,1087,1088,5,21,0,0,1088,1090,
	1,0,0,0,1089,1068,1,0,0,0,1089,1078,1,0,0,0,1090,85,1,0,0,0,1091,1092,5,
	82,0,0,1092,1093,5,12,0,0,1093,87,1,0,0,0,1094,1096,5,139,0,0,1095,1097,
	3,96,48,0,1096,1095,1,0,0,0,1096,1097,1,0,0,0,1097,1098,1,0,0,0,1098,1099,
	5,12,0,0,1099,89,1,0,0,0,1100,1101,3,208,104,0,1101,1103,5,16,0,0,1102,
	1104,3,136,68,0,1103,1102,1,0,0,0,1103,1104,1,0,0,0,1104,1105,1,0,0,0,1105,
	1106,5,17,0,0,1106,91,1,0,0,0,1107,1108,3,106,53,0,1108,1109,5,15,0,0,1109,
	1111,1,0,0,0,1110,1107,1,0,0,0,1110,1111,1,0,0,0,1111,1112,1,0,0,0,1112,
	1123,3,90,45,0,1113,1116,5,151,0,0,1114,1115,5,158,0,0,1115,1117,3,220,
	110,0,1116,1114,1,0,0,0,1116,1117,1,0,0,0,1117,1118,1,0,0,0,1118,1119,5,
	20,0,0,1119,1120,3,276,138,0,1120,1121,5,21,0,0,1121,1124,1,0,0,0,1122,
	1124,5,12,0,0,1123,1113,1,0,0,0,1123,1122,1,0,0,0,1124,93,1,0,0,0,1125,
	1126,3,516,258,0,1126,95,1,0,0,0,1127,1128,6,48,-1,0,1128,1157,3,516,258,
	0,1129,1157,3,484,242,0,1130,1157,3,106,53,0,1131,1157,3,108,54,0,1132,
	1157,3,330,165,0,1133,1134,5,29,0,0,1134,1157,3,96,48,24,1135,1136,5,23,
	0,0,1136,1157,3,96,48,23,1137,1139,5,16,0,0,1138,1140,5,122,0,0,1139,1138,
	1,0,0,0,1139,1140,1,0,0,0,1140,1141,1,0,0,0,1141,1142,3,238,119,0,1142,
	1143,5,17,0,0,1143,1144,3,96,48,22,1144,1157,1,0,0,0,1145,1146,5,61,0,0,
	1146,1147,5,16,0,0,1147,1148,3,96,48,0,1148,1149,5,17,0,0,1149,1157,1,0,
	0,0,1150,1151,5,101,0,0,1151,1152,5,16,0,0,1152,1153,3,220,110,0,1153,1154,
	5,17,0,0,1154,1157,1,0,0,0,1155,1157,3,102,51,0,1156,1127,1,0,0,0,1156,
	1129,1,0,0,0,1156,1130,1,0,0,0,1156,1131,1,0,0,0,1156,1132,1,0,0,0,1156,
	1133,1,0,0,0,1156,1135,1,0,0,0,1156,1137,1,0,0,0,1156,1145,1,0,0,0,1156,
	1150,1,0,0,0,1156,1155,1,0,0,0,1157,1250,1,0,0,0,1158,1159,10,21,0,0,1159,
	1160,3,366,183,0,1160,1161,3,96,48,22,1161,1249,1,0,0,0,1162,1163,10,20,
	0,0,1163,1164,3,368,184,0,1164,1165,3,96,48,21,1165,1249,1,0,0,0,1166,1167,
	10,19,0,0,1167,1168,3,372,186,0,1168,1169,3,96,48,20,1169,1249,1,0,0,0,
	1170,1171,10,18,0,0,1171,1172,3,370,185,0,1172,1173,3,96,48,19,1173,1249,
	1,0,0,0,1174,1175,10,17,0,0,1175,1176,7,0,0,0,1176,1249,3,96,48,18,1177,
	1178,10,16,0,0,1178,1179,7,1,0,0,1179,1249,3,96,48,17,1180,1181,10,14,0,
	0,1181,1183,5,117,0,0,1182,1184,5,125,0,0,1183,1182,1,0,0,0,1183,1184,1,
	0,0,0,1184,1185,1,0,0,0,1185,1249,3,96,48,15,1186,1187,10,13,0,0,1187,1188,
	7,2,0,0,1188,1249,3,96,48,14,1189,1191,10,12,0,0,1190,1192,5,125,0,0,1191,
	1190,1,0,0,0,1191,1192,1,0,0,0,1192,1193,1,0,0,0,1193,1194,5,88,0,0,1194,
	1249,3,96,48,13,1195,1197,10,11,0,0,1196,1198,5,125,0,0,1197,1196,1,0,0,
	0,1197,1198,1,0,0,0,1198,1199,1,0,0,0,1199,1200,5,113,0,0,1200,1249,3,96,
	48,12,1201,1203,10,10,0,0,1202,1204,5,125,0,0,1203,1202,1,0,0,0,1203,1204,
	1,0,0,0,1204,1205,1,0,0,0,1205,1206,5,111,0,0,1206,1249,3,96,48,11,1207,
	1208,10,7,0,0,1208,1209,5,27,0,0,1209,1249,3,96,48,8,1210,1211,10,6,0,0,
	1211,1212,5,25,0,0,1212,1249,3,96,48,7,1213,1214,10,5,0,0,1214,1215,5,22,
	0,0,1215,1216,3,96,48,0,1216,1217,5,11,0,0,1217,1218,3,96,48,6,1218,1249,
	1,0,0,0,1219,1220,10,15,0,0,1220,1222,5,117,0,0,1221,1223,5,125,0,0,1222,
	1221,1,0,0,0,1222,1223,1,0,0,0,1223,1224,1,0,0,0,1224,1249,3,100,50,0,1225,
	1227,10,9,0,0,1226,1228,5,125,0,0,1227,1226,1,0,0,0,1227,1228,1,0,0,0,1228,
	1229,1,0,0,0,1229,1230,5,111,0,0,1230,1231,5,72,0,0,1231,1249,3,98,49,0,
	1232,1234,10,8,0,0,1233,1235,5,125,0,0,1234,1233,1,0,0,0,1234,1235,1,0,
	0,0,1235,1236,1,0,0,0,1236,1237,5,111,0,0,1237,1238,5,75,0,0,1238,1249,
	3,98,49,0,1239,1240,10,1,0,0,1240,1241,5,108,0,0,1241,1242,5,96,0,0,1242,
	1243,5,16,0,0,1243,1244,3,220,110,0,1244,1245,5,113,0,0,1245,1246,3,96,
	48,0,1246,1247,5,17,0,0,1247,1249,1,0,0,0,1248,1158,1,0,0,0,1248,1162,1,
	0,0,0,1248,1166,1,0,0,0,1248,1170,1,0,0,0,1248,1174,1,0,0,0,1248,1177,1,
	0,0,0,1248,1180,1,0,0,0,1248,1186,1,0,0,0,1248,1189,1,0,0,0,1248,1195,1,
	0,0,0,1248,1201,1,0,0,0,1248,1207,1,0,0,0,1248,1210,1,0,0,0,1248,1213,1,
	0,0,0,1248,1219,1,0,0,0,1248,1225,1,0,0,0,1248,1232,1,0,0,0,1248,1239,1,
	0,0,0,1249,1252,1,0,0,0,1250,1248,1,0,0,0,1250,1251,1,0,0,0,1251,97,1,0,
	0,0,1252,1250,1,0,0,0,1253,1254,5,160,0,0,1254,1255,5,16,0,0,1255,1256,
	3,330,165,0,1256,1257,5,17,0,0,1257,1268,1,0,0,0,1258,1259,5,16,0,0,1259,
	1260,3,220,110,0,1260,1261,5,17,0,0,1261,1262,5,160,0,0,1262,1263,5,16,
	0,0,1263,1264,3,96,48,0,1264,1265,5,17,0,0,1265,1268,1,0,0,0,1266,1268,
	3,96,48,0,1267,1253,1,0,0,0,1267,1258,1,0,0,0,1267,1266,1,0,0,0,1268,99,
	1,0,0,0,1269,1270,4,50,21,1,1270,1271,5,169,0,0,1271,1272,3,238,119,0,1272,
	101,1,0,0,0,1273,1274,3,224,112,0,1274,103,1,0,0,0,1275,1282,3,110,55,0,
	1276,1282,3,294,147,0,1277,1282,3,296,148,0,1278,1282,3,216,108,0,1279,
	1282,3,290,145,0,1280,1282,3,292,146,0,1281,1275,1,0,0,0,1281,1276,1,0,
	0,0,1281,1277,1,0,0,0,1281,1278,1,0,0,0,1281,1279,1,0,0,0,1281,1280,1,0,
	0,0,1282,105,1,0,0,0,1283,1284,6,53,-1,0,1284,1285,3,104,52,0,1285,1290,
	1,0,0,0,1286,1287,10,1,0,0,1287,1289,3,130,65,0,1288,1286,1,0,0,0,1289,
	1292,1,0,0,0,1290,1288,1,0,0,0,1290,1291,1,0,0,0,1291,107,1,0,0,0,1292,
	1290,1,0,0,0,1293,1294,6,54,-1,0,1294,1295,5,122,0,0,1295,1296,3,216,108,
	0,1296,1301,1,0,0,0,1297,1298,10,1,0,0,1298,1300,3,130,65,0,1299,1297,1,
	0,0,0,1300,1303,1,0,0,0,1301,1299,1,0,0,0,1301,1302,1,0,0,0,1302,109,1,
	0,0,0,1303,1301,1,0,0,0,1304,1315,3,112,56,0,1305,1315,3,114,57,0,1306,
	1315,3,118,59,0,1307,1315,3,120,60,0,1308,1315,3,338,169,0,1309,1315,3,
	340,170,0,1310,1315,3,342,171,0,1311,1315,3,128,64,0,1312,1315,3,90,45,
	0,1313,1315,3,132,66,0,1314,1304,1,0,0,0,1314,1305,1,0,0,0,1314,1306,1,
	0,0,0,1314,1307,1,0,0,0,1314,1308,1,0,0,0,1314,1309,1,0,0,0,1314,1310,1,
	0,0,0,1314,1311,1,0,0,0,1314,1312,1,0,0,0,1314,1313,1,0,0,0,1315,111,1,
	0,0,0,1316,1317,5,63,0,0,1317,1318,5,16,0,0,1318,1319,3,96,48,0,1319,1320,
	5,17,0,0,1320,113,1,0,0,0,1321,1322,5,62,0,0,1322,1326,5,16,0,0,1323,1324,
	5,109,0,0,1324,1325,5,41,0,0,1325,1327,3,96,48,0,1326,1323,1,0,0,0,1326,
	1327,1,0,0,0,1327,1328,1,0,0,0,1328,1329,5,17,0,0,1329,115,1,0,0,0,1330,
	1331,5,162,0,0,1331,1332,5,16,0,0,1332,1333,3,96,48,0,1333,1334,5,17,0,
	0,1334,1335,5,154,0,0,1335,1338,3,96,48,0,1336,1339,3,124,62,0,1337,1339,
	5,12,0,0,1338,1336,1,0,0,0,1338,1337,1,0,0,0,1339,117,1,0,0,0,1340,1341,
	5,105,0,0,1341,1342,5,16,0,0,1342,1343,3,96,48,0,1343,1349,5,17,0,0,1344,
	1345,5,158,0,0,1345,1346,5,16,0,0,1346,1347,3,220,110,0,1347,1348,5,17,
	0,0,1348,1350,1,0,0,0,1349,1344,1,0,0,0,1349,1350,1,0,0,0,1350,1351,1,0,
	0,0,1351,1352,5,160,0,0,1352,1353,5,16,0,0,1353,1354,3,96,48,0,1354,1355,
	5,17,0,0,1355,119,1,0,0,0,1356,1357,5,104,0,0,1357,1362,5,129,0,0,1358,
	1359,5,16,0,0,1359,1360,3,198,99,0,1360,1361,5,17,0,0,1361,1363,1,0,0,0,
	1362,1358,1,0,0,0,1362,1363,1,0,0,0,1363,1364,1,0,0,0,1364,1365,5,160,0,
	0,1365,1366,5,16,0,0,1366,1367,3,96,48,0,1367,1373,5,17,0,0,1368,1369,5,
	114,0,0,1369,1370,5,16,0,0,1370,1371,3,348,174,0,1371,1372,5,17,0,0,1372,
	1374,1,0,0,0,1373,1368,1,0,0,0,1373,1374,1,0,0,0,1374,1421,1,0,0,0,1375,
	1396,5,104,0,0,1376,1381,5,72,0,0,1377,1378,5,16,0,0,1378,1379,3,198,99,
	0,1379,1380,5,17,0,0,1380,1382,1,0,0,0,1381,1377,1,0,0,0,1381,1382,1,0,
	0,0,1382,1397,1,0,0,0,1383,1384,5,16,0,0,1384,1385,3,198,99,0,1385,1386,
	5,17,0,0,1386,1388,1,0,0,0,1387,1383,1,0,0,0,1387,1388,1,0,0,0,1388,1389,
	1,0,0,0,1389,1390,5,141,0,0,1390,1391,5,16,0,0,1391,1392,3,96,48,0,1392,
	1393,5,154,0,0,1393,1394,3,96,48,0,1394,1395,5,17,0,0,1395,1397,1,0,0,0,
	1396,1376,1,0,0,0,1396,1387,1,0,0,0,1397,1403,1,0,0,0,1398,1399,5,160,0,
	0,1399,1400,5,16,0,0,1400,1401,3,96,48,0,1401,1402,5,17,0,0,1402,1404,1,
	0,0,0,1403,1398,1,0,0,0,1403,1404,1,0,0,0,1404,1410,1,0,0,0,1405,1406,5,
	114,0,0,1406,1407,5,16,0,0,1407,1408,3,348,174,0,1408,1409,5,17,0,0,1409,
	1411,1,0,0,0,1410,1405,1,0,0,0,1410,1411,1,0,0,0,1411,1418,1,0,0,0,1412,
	1413,5,132,0,0,1413,1414,5,83,0,0,1414,1415,5,16,0,0,1415,1416,3,344,172,
	0,1416,1417,5,17,0,0,1417,1419,1,0,0,0,1418,1412,1,0,0,0,1418,1419,1,0,
	0,0,1419,1421,1,0,0,0,1420,1356,1,0,0,0,1420,1375,1,0,0,0,1421,121,1,0,
	0,0,1422,1423,5,104,0,0,1423,1428,5,129,0,0,1424,1425,5,16,0,0,1425,1426,
	3,198,99,0,1426,1427,5,17,0,0,1427,1429,1,0,0,0,1428,1424,1,0,0,0,1428,
	1429,1,0,0,0,1429,1430,1,0,0,0,1430,1431,5,160,0,0,1431,1432,5,16,0,0,1432,
	1433,3,96,48,0,1433,1439,5,17,0,0,1434,1435,5,114,0,0,1435,1436,5,16,0,
	0,1436,1437,3,348,174,0,1437,1438,5,17,0,0,1438,1440,1,0,0,0,1439,1434,
	1,0,0,0,1439,1440,1,0,0,0,1440,1441,1,0,0,0,1441,1442,3,124,62,0,1442,1490,
	1,0,0,0,1443,1464,5,104,0,0,1444,1449,5,72,0,0,1445,1446,5,16,0,0,1446,
	1447,3,198,99,0,1447,1448,5,17,0,0,1448,1450,1,0,0,0,1449,1445,1,0,0,0,
	1449,1450,1,0,0,0,1450,1465,1,0,0,0,1451,1452,5,16,0,0,1452,1453,3,198,
	99,0,1453,1454,5,17,0,0,1454,1456,1,0,0,0,1455,1451,1,0,0,0,1455,1456,1,
	0,0,0,1456,1457,1,0,0,0,1457,1458,5,141,0,0,1458,1459,5,16,0,0,1459,1460,
	3,96,48,0,1460,1461,5,154,0,0,1461,1462,3,96,48,0,1462,1463,5,17,0,0,1463,
	1465,1,0,0,0,1464,1444,1,0,0,0,1464,1455,1,0,0,0,1465,1471,1,0,0,0,1466,
	1467,5,160,0,0,1467,1468,5,16,0,0,1468,1469,3,96,48,0,1469,1470,5,17,0,
	0,1470,1472,1,0,0,0,1471,1466,1,0,0,0,1471,1472,1,0,0,0,1472,1478,1,0,0,
	0,1473,1474,5,114,0,0,1474,1475,5,16,0,0,1475,1476,3,348,174,0,1476,1477,
	5,17,0,0,1477,1479,1,0,0,0,1478,1473,1,0,0,0,1478,1479,1,0,0,0,1479,1486,
	1,0,0,0,1480,1481,5,132,0,0,1481,1482,5,83,0,0,1482,1483,5,16,0,0,1483,
	1484,3,344,172,0,1484,1485,5,17,0,0,1485,1487,1,0,0,0,1486,1480,1,0,0,0,
	1486,1487,1,0,0,0,1487,1488,1,0,0,0,1488,1490,3,124,62,0,1489,1422,1,0,
	0,0,1489,1443,1,0,0,0,1490,123,1,0,0,0,1491,1492,5,151,0,0,1492,1493,5,
	158,0,0,1493,1494,3,220,110,0,1494,1495,5,20,0,0,1495,1496,3,276,138,0,
	1496,1497,5,21,0,0,1497,125,1,0,0,0,1498,1499,5,136,0,0,1499,1500,5,72,
	0,0,1500,1501,5,109,0,0,1501,1502,3,96,48,0,1502,1503,3,124,62,0,1503,127,
	1,0,0,0,1504,1506,5,145,0,0,1505,1507,5,93,0,0,1506,1505,1,0,0,0,1506,1507,
	1,0,0,0,1507,1508,1,0,0,0,1508,1509,5,16,0,0,1509,1515,3,106,53,0,1510,
	1511,5,13,0,0,1511,1512,3,356,178,0,1512,1513,5,41,0,0,1513,1514,3,336,
	168,0,1514,1516,1,0,0,0,1515,1510,1,0,0,0,1515,1516,1,0,0,0,1516,1517,1,
	0,0,0,1517,1518,5,17,0,0,1518,129,1,0,0,0,1519,1520,5,15,0,0,1520,1532,
	3,218,109,0,1521,1522,5,15,0,0,1522,1532,3,90,45,0,1523,1524,5,18,0,0,1524,
	1525,3,96,48,0,1525,1526,5,19,0,0,1526,1532,1,0,0,0,1527,1528,5,18,0,0,
	1528,1529,3,320,160,0,1529,1530,5,19,0,0,1530,1532,1,0,0,0,1531,1519,1,
	0,0,0,1531,1521,1,0,0,0,1531,1523,1,0,0,0,1531,1527,1,0,0,0,1532,131,1,
	0,0,0,1533,1534,3,198,99,0,1534,1535,5,16,0,0,1535,1538,3,134,67,0,1536,
	1537,5,13,0,0,1537,1539,3,136,68,0,1538,1536,1,0,0,0,1538,1539,1,0,0,0,
	1539,1540,1,0,0,0,1540,1541,5,17,0,0,1541,1550,1,0,0,0,1542,1543,3,198,
	99,0,1543,1545,5,16,0,0,1544,1546,3,136,68,0,1545,1544,1,0,0,0,1545,1546,
	1,0,0,0,1546,1547,1,0,0,0,1547,1548,5,17,0,0,1548,1550,1,0,0,0,1549,1533,
	1,0,0,0,1549,1542,1,0,0,0,1550,133,1,0,0,0,1551,1552,5,109,0,0,1552,1553,
	3,364,182,0,1553,1554,3,96,48,0,1554,1555,4,67,24,1,1555,135,1,0,0,0,1556,
	1557,6,68,-1,0,1557,1558,3,96,48,0,1558,1559,4,68,25,1,1559,1562,1,0,0,
	0,1560,1562,3,138,69,0,1561,1556,1,0,0,0,1561,1560,1,0,0,0,1562,1568,1,
	0,0,0,1563,1564,10,1,0,0,1564,1565,5,13,0,0,1565,1567,3,138,69,0,1566,1563,
	1,0,0,0,1567,1570,1,0,0,0,1568,1566,1,0,0,0,1568,1569,1,0,0,0,1569,137,
	1,0,0,0,1570,1568,1,0,0,0,1571,1575,3,220,110,0,1572,1573,3,364,182,0,1573,
	1574,3,96,48,0,1574,1576,1,0,0,0,1575,1572,1,0,0,0,1575,1576,1,0,0,0,1576,
	139,1,0,0,0,1577,1578,3,324,162,0,1578,1579,3,364,182,0,1579,1580,3,96,
	48,0,1580,1581,5,12,0,0,1581,141,1,0,0,0,1582,1583,5,15,0,0,1583,1589,3,
	220,110,0,1584,1585,5,18,0,0,1585,1586,3,96,48,0,1586,1587,5,19,0,0,1587,
	1589,1,0,0,0,1588,1582,1,0,0,0,1588,1584,1,0,0,0,1589,143,1,0,0,0,1590,
	1591,3,260,130,0,1591,1592,3,364,182,0,1592,1593,3,96,48,0,1593,1594,5,
	12,0,0,1594,145,1,0,0,0,1595,1596,3,238,119,0,1596,147,1,0,0,0,1597,1598,
	5,127,0,0,1598,149,1,0,0,0,1599,1601,7,3,0,0,1600,1599,1,0,0,0,1601,1604,
	1,0,0,0,1602,1600,1,0,0,0,1602,1603,1,0,0,0,1603,151,1,0,0,0,1604,1602,
	1,0,0,0,1605,1609,3,158,79,0,1606,1609,3,56,28,0,1607,1609,3,96,48,0,1608,
	1605,1,0,0,0,1608,1606,1,0,0,0,1608,1607,1,0,0,0,1609,153,1,0,0,0,1610,
	1612,3,374,187,0,1611,1613,3,156,78,0,1612,1611,1,0,0,0,1612,1613,1,0,0,
	0,1613,1614,1,0,0,0,1614,1615,3,374,187,0,1615,1616,5,0,0,1,1616,155,1,
	0,0,0,1617,1623,3,158,79,0,1618,1619,3,376,188,0,1619,1620,3,158,79,0,1620,
	1622,1,0,0,0,1621,1618,1,0,0,0,1622,1625,1,0,0,0,1623,1621,1,0,0,0,1623,
	1624,1,0,0,0,1624,157,1,0,0,0,1625,1623,1,0,0,0,1626,1627,3,266,133,0,1627,
	1628,3,376,188,0,1628,1630,1,0,0,0,1629,1626,1,0,0,0,1630,1633,1,0,0,0,
	1631,1629,1,0,0,0,1631,1632,1,0,0,0,1632,1639,1,0,0,0,1633,1631,1,0,0,0,
	1634,1635,3,160,80,0,1635,1636,3,376,188,0,1636,1638,1,0,0,0,1637,1634,
	1,0,0,0,1638,1641,1,0,0,0,1639,1637,1,0,0,0,1639,1640,1,0,0,0,1640,1648,
	1,0,0,0,1641,1639,1,0,0,0,1642,1649,3,8,4,0,1643,1649,3,202,101,0,1644,
	1649,3,170,85,0,1645,1649,3,172,86,0,1646,1649,3,204,102,0,1647,1649,3,
	264,132,0,1648,1642,1,0,0,0,1648,1643,1,0,0,0,1648,1644,1,0,0,0,1648,1645,
	1,0,0,0,1648,1646,1,0,0,0,1648,1647,1,0,0,0,1649,159,1,0,0,0,1650,1665,
	3,162,81,0,1651,1661,5,16,0,0,1652,1662,3,168,84,0,1653,1658,3,164,82,0,
	1654,1655,5,13,0,0,1655,1657,3,164,82,0,1656,1654,1,0,0,0,1657,1660,1,0,
	0,0,1658,1656,1,0,0,0,1658,1659,1,0,0,0,1659,1662,1,0,0,0,1660,1658,1,0,
	0,0,1661,1652,1,0,0,0,1661,1653,1,0,0,0,1662,1663,1,0,0,0,1663,1664,5,17,
	0,0,1664,1666,1,0,0,0,1665,1651,1,0,0,0,1665,1666,1,0,0,0,1666,161,1,0,
	0,0,1667,1668,5,172,0,0,1668,163,1,0,0,0,1669,1670,3,166,83,0,1670,1671,
	5,41,0,0,1671,1672,3,168,84,0,1672,165,1,0,0,0,1673,1674,7,4,0,0,1674,167,
	1,0,0,0,1675,1678,3,296,148,0,1676,1678,3,192,96,0,1677,1675,1,0,0,0,1677,
	1676,1,0,0,0,1678,169,1,0,0,0,1679,1680,3,32,16,0,1680,171,1,0,0,0,1681,
	1684,3,0,0,0,1682,1684,3,2,1,0,1683,1681,1,0,0,0,1683,1682,1,0,0,0,1684,
	173,1,0,0,0,1685,1691,3,6,3,0,1686,1687,3,376,188,0,1687,1688,3,6,3,0,1688,
	1690,1,0,0,0,1689,1686,1,0,0,0,1690,1693,1,0,0,0,1691,1689,1,0,0,0,1691,
	1692,1,0,0,0,1692,175,1,0,0,0,1693,1691,1,0,0,0,1694,1700,3,4,2,0,1695,
	1696,3,376,188,0,1696,1697,3,4,2,0,1697,1699,1,0,0,0,1698,1695,1,0,0,0,
	1699,1702,1,0,0,0,1700,1698,1,0,0,0,1700,1701,1,0,0,0,1701,177,1,0,0,0,
	1702,1700,1,0,0,0,1703,1708,3,226,113,0,1704,1705,5,13,0,0,1705,1707,3,
	226,113,0,1706,1704,1,0,0,0,1707,1710,1,0,0,0,1708,1706,1,0,0,0,1708,1709,
	1,0,0,0,1709,179,1,0,0,0,1710,1708,1,0,0,0,1711,1712,5,113,0,0,1712,1722,
	3,182,91,0,1713,1714,5,113,0,0,1714,1722,3,184,92,0,1715,1716,5,113,0,0,
	1716,1722,3,188,94,0,1717,1718,5,118,0,0,1718,1722,5,173,0,0,1719,1720,
	5,118,0,0,1720,1722,3,96,48,0,1721,1711,1,0,0,0,1721,1713,1,0,0,0,1721,
	1715,1,0,0,0,1721,1717,1,0,0,0,1721,1719,1,0,0,0,1722,181,1,0,0,0,1723,
	1725,5,122,0,0,1724,1723,1,0,0,0,1724,1725,1,0,0,0,1725,1726,1,0,0,0,1726,
	1728,5,18,0,0,1727,1729,3,186,93,0,1728,1727,1,0,0,0,1728,1729,1,0,0,0,
	1729,1730,1,0,0,0,1730,1731,5,19,0,0,1731,183,1,0,0,0,1732,1734,5,122,0,
	0,1733,1732,1,0,0,0,1733,1734,1,0,0,0,1734,1735,1,0,0,0,1735,1737,5,37,
	0,0,1736,1738,3,186,93,0,1737,1736,1,0,0,0,1737,1738,1,0,0,0,1738,1739,
	1,0,0,0,1739,1740,5,35,0,0,1740,185,1,0,0,0,1741,1746,3,96,48,0,1742,1743,
	5,13,0,0,1743,1745,3,96,48,0,1744,1742,1,0,0,0,1745,1748,1,0,0,0,1746,1744,
	1,0,0,0,1746,1747,1,0,0,0,1747,187,1,0,0,0,1748,1746,1,0,0,0,1749,1750,
	5,18,0,0,1750,1751,3,96,48,0,1751,1752,5,14,0,0,1752,1753,3,96,48,0,1753,
	1754,5,19,0,0,1754,189,1,0,0,0,1755,1756,6,95,-1,0,1756,1773,3,192,96,0,
	1757,1758,5,68,0,0,1758,1759,5,37,0,0,1759,1760,3,190,95,0,1760,1761,5,
	35,0,0,1761,1773,1,0,0,0,1762,1763,5,67,0,0,1763,1764,5,37,0,0,1764,1765,
	3,190,95,0,1765,1766,5,35,0,0,1766,1773,1,0,0,0,1767,1768,5,70,0,0,1768,
	1769,5,37,0,0,1769,1770,3,190,95,0,1770,1771,5,35,0,0,1771,1773,1,0,0,0,
	1772,1755,1,0,0,0,1772,1757,1,0,0,0,1772,1762,1,0,0,0,1772,1767,1,0,0,0,
	1773,1783,1,0,0,0,1774,1775,10,6,0,0,1775,1782,5,39,0,0,1776,1777,10,5,
	0,0,1777,1778,5,18,0,0,1778,1782,5,19,0,0,1779,1780,10,4,0,0,1780,1782,
	5,40,0,0,1781,1774,1,0,0,0,1781,1776,1,0,0,0,1781,1779,1,0,0,0,1782,1785,
	1,0,0,0,1783,1781,1,0,0,0,1783,1784,1,0,0,0,1784,191,1,0,0,0,1785,1783,
	1,0,0,0,1786,1789,3,194,97,0,1787,1789,3,196,98,0,1788,1786,1,0,0,0,1788,
	1787,1,0,0,0,1789,193,1,0,0,0,1790,1809,5,49,0,0,1791,1809,5,50,0,0,1792,
	1809,5,51,0,0,1793,1809,5,52,0,0,1794,1809,5,64,0,0,1795,1809,5,53,0,0,
	1796,1809,5,54,0,0,1797,1809,5,62,0,0,1798,1809,5,55,0,0,1799,1809,5,57,
	0,0,1800,1809,5,56,0,0,1801,1809,5,58,0,0,1802,1809,5,59,0,0,1803,1809,
	5,61,0,0,1804,1809,5,63,0,0,1805,1809,5,65,0,0,1806,1809,5,66,0,0,1807,
	1809,5,69,0,0,1808,1790,1,0,0,0,1808,1791,1,0,0,0,1808,1792,1,0,0,0,1808,
	1793,1,0,0,0,1808,1794,1,0,0,0,1808,1795,1,0,0,0,1808,1796,1,0,0,0,1808,
	1797,1,0,0,0,1808,1798,1,0,0,0,1808,1799,1,0,0,0,1808,1800,1,0,0,0,1808,
	1801,1,0,0,0,1808,1802,1,0,0,0,1808,1803,1,0,0,0,1808,1804,1,0,0,0,1808,
	1805,1,0,0,0,1808,1806,1,0,0,0,1808,1807,1,0,0,0,1809,195,1,0,0,0,1810,
	1811,5,168,0,0,1811,197,1,0,0,0,1812,1814,5,122,0,0,1813,1812,1,0,0,0,1813,
	1814,1,0,0,0,1814,1815,1,0,0,0,1815,1816,3,196,98,0,1816,199,1,0,0,0,1817,
	1818,5,61,0,0,1818,201,1,0,0,0,1819,1823,3,14,7,0,1820,1823,3,34,17,0,1821,
	1823,3,16,8,0,1822,1819,1,0,0,0,1822,1820,1,0,0,0,1822,1821,1,0,0,0,1823,
	203,1,0,0,0,1824,1827,3,10,5,0,1825,1827,3,12,6,0,1826,1824,1,0,0,0,1826,
	1825,1,0,0,0,1827,205,1,0,0,0,1828,1833,3,224,112,0,1829,1830,5,13,0,0,
	1830,1832,3,224,112,0,1831,1829,1,0,0,0,1832,1835,1,0,0,0,1833,1831,1,0,
	0,0,1833,1834,1,0,0,0,1834,207,1,0,0,0,1835,1833,1,0,0,0,1836,1839,3,220,
	110,0,1837,1839,3,224,112,0,1838,1836,1,0,0,0,1838,1837,1,0,0,0,1839,209,
	1,0,0,0,1840,1843,3,216,108,0,1841,1843,3,352,176,0,1842,1840,1,0,0,0,1842,
	1841,1,0,0,0,1843,211,1,0,0,0,1844,1845,4,106,30,1,1845,1846,5,29,0,0,1846,
	1847,3,214,107,0,1847,213,1,0,0,0,1848,1849,4,107,31,1,1849,1850,3,210,
	105,0,1850,215,1,0,0,0,1851,1855,3,220,110,0,1852,1855,3,224,112,0,1853,
	1855,3,226,113,0,1854,1851,1,0,0,0,1854,1852,1,0,0,0,1854,1853,1,0,0,0,
	1855,217,1,0,0,0,1856,1857,7,5,0,0,1857,219,1,0,0,0,1858,1859,7,6,0,0,1859,
	221,1,0,0,0,1860,1861,7,7,0,0,1861,223,1,0,0,0,1862,1863,5,168,0,0,1863,
	225,1,0,0,0,1864,1865,5,167,0,0,1865,227,1,0,0,0,1866,1871,3,230,115,0,
	1867,1868,5,13,0,0,1868,1870,3,230,115,0,1869,1867,1,0,0,0,1870,1873,1,
	0,0,0,1871,1869,1,0,0,0,1871,1872,1,0,0,0,1872,229,1,0,0,0,1873,1871,1,
	0,0,0,1874,1880,3,236,118,0,1875,1877,5,122,0,0,1876,1875,1,0,0,0,1876,
	1877,1,0,0,0,1877,1878,1,0,0,0,1878,1880,3,232,116,0,1879,1874,1,0,0,0,
	1879,1876,1,0,0,0,1880,231,1,0,0,0,1881,1884,3,234,117,0,1882,1884,3,52,
	26,0,1883,1881,1,0,0,0,1883,1882,1,0,0,0,1884,233,1,0,0,0,1885,1888,3,220,
	110,0,1886,1887,5,41,0,0,1887,1889,3,296,148,0,1888,1886,1,0,0,0,1888,1889,
	1,0,0,0,1889,235,1,0,0,0,1890,1891,3,200,100,0,1891,1892,3,220,110,0,1892,
	237,1,0,0,0,1893,1896,3,190,95,0,1894,1896,3,240,120,0,1895,1893,1,0,0,
	0,1895,1894,1,0,0,0,1896,239,1,0,0,0,1897,1898,6,120,-1,0,1898,1899,5,75,
	0,0,1899,1908,1,0,0,0,1900,1901,10,2,0,0,1901,1902,5,18,0,0,1902,1907,5,
	19,0,0,1903,1904,10,1,0,0,1904,1905,5,20,0,0,1905,1907,5,21,0,0,1906,1900,
	1,0,0,0,1906,1903,1,0,0,0,1907,1910,1,0,0,0,1908,1906,1,0,0,0,1908,1909,
	1,0,0,0,1909,241,1,0,0,0,1910,1908,1,0,0,0,1911,1917,3,244,122,0,1912,1913,
	3,376,188,0,1913,1914,3,244,122,0,1914,1916,1,0,0,0,1915,1912,1,0,0,0,1916,
	1919,1,0,0,0,1917,1915,1,0,0,0,1917,1918,1,0,0,0,1918,243,1,0,0,0,1919,
	1917,1,0,0,0,1920,1921,3,266,133,0,1921,1922,3,376,188,0,1922,1924,1,0,
	0,0,1923,1920,1,0,0,0,1924,1927,1,0,0,0,1925,1923,1,0,0,0,1925,1926,1,0,
	0,0,1926,1933,1,0,0,0,1927,1925,1,0,0,0,1928,1929,3,160,80,0,1929,1930,
	3,376,188,0,1930,1932,1,0,0,0,1931,1928,1,0,0,0,1932,1935,1,0,0,0,1933,
	1931,1,0,0,0,1933,1934,1,0,0,0,1934,1941,1,0,0,0,1935,1933,1,0,0,0,1936,
	1942,3,24,12,0,1937,1942,3,28,14,0,1938,1942,3,44,22,0,1939,1942,3,42,21,
	0,1940,1942,3,22,11,0,1941,1936,1,0,0,0,1941,1937,1,0,0,0,1941,1938,1,0,
	0,0,1941,1939,1,0,0,0,1941,1940,1,0,0,0,1942,245,1,0,0,0,1943,1949,3,248,
	124,0,1944,1945,3,376,188,0,1945,1946,3,248,124,0,1946,1948,1,0,0,0,1947,
	1944,1,0,0,0,1948,1951,1,0,0,0,1949,1947,1,0,0,0,1949,1950,1,0,0,0,1950,
	247,1,0,0,0,1951,1949,1,0,0,0,1952,1953,3,266,133,0,1953,1954,3,376,188,
	0,1954,1956,1,0,0,0,1955,1952,1,0,0,0,1956,1959,1,0,0,0,1957,1955,1,0,0,
	0,1957,1958,1,0,0,0,1958,1965,1,0,0,0,1959,1957,1,0,0,0,1960,1961,3,160,
	80,0,1961,1962,3,376,188,0,1962,1964,1,0,0,0,1963,1960,1,0,0,0,1964,1967,
	1,0,0,0,1965,1963,1,0,0,0,1965,1966,1,0,0,0,1966,1971,1,0,0,0,1967,1965,
	1,0,0,0,1968,1972,3,30,15,0,1969,1972,3,26,13,0,1970,1972,3,46,23,0,1971,
	1968,1,0,0,0,1971,1969,1,0,0,0,1971,1970,1,0,0,0,1972,249,1,0,0,0,1973,
	1974,5,5,0,0,1974,1984,3,452,226,0,1975,1976,5,6,0,0,1976,1984,3,478,239,
	0,1977,1978,5,7,0,0,1978,1984,3,252,126,0,1979,1980,5,8,0,0,1980,1984,3,
	252,126,0,1981,1982,5,9,0,0,1982,1984,3,256,128,0,1983,1973,1,0,0,0,1983,
	1975,1,0,0,0,1983,1977,1,0,0,0,1983,1979,1,0,0,0,1983,1981,1,0,0,0,1984,
	251,1,0,0,0,1985,1987,3,216,108,0,1986,1988,3,254,127,0,1987,1986,1,0,0,
	0,1987,1988,1,0,0,0,1988,253,1,0,0,0,1989,1990,5,109,0,0,1990,1991,3,358,
	179,0,1991,1992,5,11,0,0,1992,1997,3,428,214,0,1993,1994,5,15,0,0,1994,
	1996,3,428,214,0,1995,1993,1,0,0,0,1996,1999,1,0,0,0,1997,1995,1,0,0,0,
	1997,1998,1,0,0,0,1998,255,1,0,0,0,1999,1997,1,0,0,0,2000,2005,3,402,201,
	0,2001,2002,5,15,0,0,2002,2004,3,402,201,0,2003,2001,1,0,0,0,2004,2007,
	1,0,0,0,2005,2003,1,0,0,0,2005,2006,1,0,0,0,2006,2009,1,0,0,0,2007,2005,
	1,0,0,0,2008,2010,3,258,129,0,2009,2008,1,0,0,0,2009,2010,1,0,0,0,2010,
	257,1,0,0,0,2011,2012,5,109,0,0,2012,2013,3,358,179,0,2013,2015,5,11,0,
	0,2014,2016,5,31,0,0,2015,2014,1,0,0,0,2015,2016,1,0,0,0,2016,2017,1,0,
	0,0,2017,2022,3,402,201,0,2018,2019,5,31,0,0,2019,2021,3,402,201,0,2020,
	2018,1,0,0,0,2021,2024,1,0,0,0,2022,2020,1,0,0,0,2022,2023,1,0,0,0,2023,
	2027,1,0,0,0,2024,2022,1,0,0,0,2025,2026,5,15,0,0,2026,2028,3,402,201,0,
	2027,2025,1,0,0,0,2027,2028,1,0,0,0,2028,259,1,0,0,0,2029,2034,3,220,110,
	0,2030,2031,5,13,0,0,2031,2033,3,220,110,0,2032,2030,1,0,0,0,2033,2036,
	1,0,0,0,2034,2032,1,0,0,0,2034,2035,1,0,0,0,2035,261,1,0,0,0,2036,2034,
	1,0,0,0,2037,2042,3,222,111,0,2038,2039,5,13,0,0,2039,2041,3,222,111,0,
	2040,2038,1,0,0,0,2041,2044,1,0,0,0,2042,2040,1,0,0,0,2042,2043,1,0,0,0,
	2043,263,1,0,0,0,2044,2042,1,0,0,0,2045,2050,3,40,20,0,2046,2050,3,44,22,
	0,2047,2050,3,46,23,0,2048,2050,3,48,24,0,2049,2045,1,0,0,0,2049,2046,1,
	0,0,0,2049,2047,1,0,0,0,2049,2048,1,0,0,0,2050,265,1,0,0,0,2051,2052,5,
	4,0,0,2052,267,1,0,0,0,2053,2059,3,270,135,0,2054,2055,3,376,188,0,2055,
	2056,3,270,135,0,2056,2058,1,0,0,0,2057,2054,1,0,0,0,2058,2061,1,0,0,0,
	2059,2057,1,0,0,0,2059,2060,1,0,0,0,2060,269,1,0,0,0,2061,2059,1,0,0,0,
	2062,2063,5,5,0,0,2063,2073,3,430,215,0,2064,2065,5,6,0,0,2065,2073,3,458,
	229,0,2066,2067,5,7,0,0,2067,2073,3,272,136,0,2068,2069,5,8,0,0,2069,2073,
	3,272,136,0,2070,2071,5,9,0,0,2071,2073,3,274,137,0,2072,2062,1,0,0,0,2072,
	2064,1,0,0,0,2072,2066,1,0,0,0,2072,2068,1,0,0,0,2072,2070,1,0,0,0,2073,
	271,1,0,0,0,2074,2076,3,404,202,0,2075,2077,5,12,0,0,2076,2075,1,0,0,0,
	2076,2077,1,0,0,0,2077,2079,1,0,0,0,2078,2080,3,254,127,0,2079,2078,1,0,
	0,0,2079,2080,1,0,0,0,2080,273,1,0,0,0,2081,2083,3,378,189,0,2082,2084,
	5,12,0,0,2083,2082,1,0,0,0,2083,2084,1,0,0,0,2084,2086,1,0,0,0,2085,2087,
	3,258,129,0,2086,2085,1,0,0,0,2086,2087,1,0,0,0,2087,275,1,0,0,0,2088,2094,
	3,56,28,0,2089,2090,3,376,188,0,2090,2091,3,56,28,0,2091,2093,1,0,0,0,2092,
	2089,1,0,0,0,2093,2096,1,0,0,0,2094,2092,1,0,0,0,2094,2095,1,0,0,0,2095,
	277,1,0,0,0,2096,2094,1,0,0,0,2097,2103,3,50,25,0,2098,2099,3,376,188,0,
	2099,2100,3,50,25,0,2100,2102,1,0,0,0,2101,2098,1,0,0,0,2102,2105,1,0,0,
	0,2103,2101,1,0,0,0,2103,2104,1,0,0,0,2104,279,1,0,0,0,2105,2103,1,0,0,
	0,2106,2112,3,68,34,0,2107,2108,3,376,188,0,2108,2109,3,68,34,0,2109,2111,
	1,0,0,0,2110,2107,1,0,0,0,2111,2114,1,0,0,0,2112,2110,1,0,0,0,2112,2113,
	1,0,0,0,2113,281,1,0,0,0,2114,2112,1,0,0,0,2115,2121,3,84,42,0,2116,2117,
	3,376,188,0,2117,2118,3,84,42,0,2118,2120,1,0,0,0,2119,2116,1,0,0,0,2120,
	2123,1,0,0,0,2121,2119,1,0,0,0,2121,2122,1,0,0,0,2122,283,1,0,0,0,2123,
	2121,1,0,0,0,2124,2125,5,18,0,0,2125,2126,3,286,143,0,2126,2127,5,14,0,
	0,2127,2128,3,286,143,0,2128,2129,5,19,0,0,2129,2139,1,0,0,0,2130,2131,
	5,18,0,0,2131,2132,3,288,144,0,2132,2133,5,19,0,0,2133,2139,1,0,0,0,2134,
	2135,5,37,0,0,2135,2136,3,288,144,0,2136,2137,5,35,0,0,2137,2139,1,0,0,
	0,2138,2124,1,0,0,0,2138,2130,1,0,0,0,2138,2134,1,0,0,0,2139,285,1,0,0,
	0,2140,2164,5,165,0,0,2141,2164,5,166,0,0,2142,2144,5,29,0,0,2143,2142,
	1,0,0,0,2143,2144,1,0,0,0,2144,2145,1,0,0,0,2145,2164,5,176,0,0,2146,2164,
	5,177,0,0,2147,2164,5,164,0,0,2148,2164,5,181,0,0,2149,2164,5,180,0,0,2150,
	2164,5,173,0,0,2151,2153,5,29,0,0,2152,2151,1,0,0,0,2152,2153,1,0,0,0,2153,
	2154,1,0,0,0,2154,2164,5,178,0,0,2155,2164,5,179,0,0,2156,2164,5,163,0,
	0,2157,2164,5,182,0,0,2158,2164,5,175,0,0,2159,2164,5,174,0,0,2160,2164,
	3,226,113,0,2161,2164,3,146,73,0,2162,2164,3,148,74,0,2163,2140,1,0,0,0,
	2163,2141,1,0,0,0,2163,2143,1,0,0,0,2163,2146,1,0,0,0,2163,2147,1,0,0,0,
	2163,2148,1,0,0,0,2163,2149,1,0,0,0,2163,2150,1,0,0,0,2163,2152,1,0,0,0,
	2163,2155,1,0,0,0,2163,2156,1,0,0,0,2163,2157,1,0,0,0,2163,2158,1,0,0,0,
	2163,2159,1,0,0,0,2163,2160,1,0,0,0,2163,2161,1,0,0,0,2163,2162,1,0,0,0,
	2164,287,1,0,0,0,2165,2170,3,286,143,0,2166,2167,5,13,0,0,2167,2169,3,286,
	143,0,2168,2166,1,0,0,0,2169,2172,1,0,0,0,2170,2168,1,0,0,0,2170,2171,1,
	0,0,0,2171,289,1,0,0,0,2172,2170,1,0,0,0,2173,2174,7,8,0,0,2174,291,1,0,
	0,0,2175,2176,3,196,98,0,2176,2177,5,15,0,0,2177,2179,1,0,0,0,2178,2175,
	1,0,0,0,2178,2179,1,0,0,0,2179,2180,1,0,0,0,2180,2181,5,148,0,0,2181,293,
	1,0,0,0,2182,2183,5,16,0,0,2183,2184,3,96,48,0,2184,2185,5,17,0,0,2185,
	295,1,0,0,0,2186,2189,3,286,143,0,2187,2189,3,298,149,0,2188,2186,1,0,0,
	0,2188,2187,1,0,0,0,2189,297,1,0,0,0,2190,2197,3,188,94,0,2191,2197,3,182,
	91,0,2192,2197,3,184,92,0,2193,2197,3,302,151,0,2194,2197,3,304,152,0,2195,
	2197,3,300,150,0,2196,2190,1,0,0,0,2196,2191,1,0,0,0,2196,2192,1,0,0,0,
	2196,2193,1,0,0,0,2196,2194,1,0,0,0,2196,2195,1,0,0,0,2197,299,1,0,0,0,
	2198,2200,5,122,0,0,2199,2198,1,0,0,0,2199,2200,1,0,0,0,2200,2201,1,0,0,
	0,2201,2203,5,16,0,0,2202,2204,3,306,153,0,2203,2202,1,0,0,0,2203,2204,
	1,0,0,0,2204,2205,1,0,0,0,2205,2206,5,17,0,0,2206,301,1,0,0,0,2207,2209,
	5,122,0,0,2208,2207,1,0,0,0,2208,2209,1,0,0,0,2209,2218,1,0,0,0,2210,2211,
	5,37,0,0,2211,2212,3,314,157,0,2212,2213,5,35,0,0,2213,2219,1,0,0,0,2214,
	2219,5,40,0,0,2215,2216,5,37,0,0,2216,2217,5,11,0,0,2217,2219,5,35,0,0,
	2218,2210,1,0,0,0,2218,2214,1,0,0,0,2218,2215,1,0,0,0,2219,303,1,0,0,0,
	2220,2222,5,20,0,0,2221,2223,3,308,154,0,2222,2221,1,0,0,0,2222,2223,1,
	0,0,0,2223,2224,1,0,0,0,2224,2225,5,21,0,0,2225,305,1,0,0,0,2226,2227,3,
	96,48,0,2227,2236,5,13,0,0,2228,2233,3,96,48,0,2229,2230,5,13,0,0,2230,
	2232,3,96,48,0,2231,2229,1,0,0,0,2232,2235,1,0,0,0,2233,2231,1,0,0,0,2233,
	2234,1,0,0,0,2234,2237,1,0,0,0,2235,2233,1,0,0,0,2236,2228,1,0,0,0,2236,
	2237,1,0,0,0,2237,307,1,0,0,0,2238,2243,3,310,155,0,2239,2240,5,13,0,0,
	2240,2242,3,310,155,0,2241,2239,1,0,0,0,2242,2245,1,0,0,0,2243,2241,1,0,
	0,0,2243,2244,1,0,0,0,2244,309,1,0,0,0,2245,2243,1,0,0,0,2246,2247,3,312,
	156,0,2247,2248,5,11,0,0,2248,2249,3,96,48,0,2249,311,1,0,0,0,2250,2253,
	3,210,105,0,2251,2253,5,173,0,0,2252,2250,1,0,0,0,2252,2251,1,0,0,0,2253,
	313,1,0,0,0,2254,2259,3,316,158,0,2255,2256,5,13,0,0,2256,2258,3,316,158,
	0,2257,2255,1,0,0,0,2258,2261,1,0,0,0,2259,2257,1,0,0,0,2259,2260,1,0,0,
	0,2260,315,1,0,0,0,2261,2259,1,0,0,0,2262,2263,3,318,159,0,2263,2264,5,
	11,0,0,2264,2265,3,96,48,0,2265,317,1,0,0,0,2266,2269,3,210,105,0,2267,
	2269,5,173,0,0,2268,2266,1,0,0,0,2268,2267,1,0,0,0,2269,319,1,0,0,0,2270,
	2271,3,96,48,0,2271,2272,5,11,0,0,2272,2273,3,96,48,0,2273,2280,1,0,0,0,
	2274,2275,3,96,48,0,2275,2276,5,11,0,0,2276,2280,1,0,0,0,2277,2278,5,11,
	0,0,2278,2280,3,96,48,0,2279,2270,1,0,0,0,2279,2274,1,0,0,0,2279,2277,1,
	0,0,0,2280,321,1,0,0,0,2281,2282,3,220,110,0,2282,2283,3,364,182,0,2283,
	2284,3,96,48,0,2284,323,1,0,0,0,2285,2286,6,162,-1,0,2286,2287,3,220,110,
	0,2287,2292,1,0,0,0,2288,2289,10,1,0,0,2289,2291,3,142,71,0,2290,2288,1,
	0,0,0,2291,2294,1,0,0,0,2292,2290,1,0,0,0,2292,2293,1,0,0,0,2293,325,1,
	0,0,0,2294,2292,1,0,0,0,2295,2296,4,163,35,1,2296,2297,5,169,0,0,2297,2300,
	3,238,119,0,2298,2300,3,96,48,0,2299,2295,1,0,0,0,2299,2298,1,0,0,0,2300,
	327,1,0,0,0,2301,2302,4,164,36,1,2302,2303,5,169,0,0,2303,329,1,0,0,0,2304,
	2305,3,332,166,0,2305,2306,3,96,48,0,2306,2313,1,0,0,0,2307,2308,3,332,
	166,0,2308,2309,5,20,0,0,2309,2310,3,276,138,0,2310,2311,5,21,0,0,2311,
	2313,1,0,0,0,2312,2304,1,0,0,0,2312,2307,1,0,0,0,2313,331,1,0,0,0,2314,
	2315,3,334,167,0,2315,2316,3,150,75,0,2316,2317,5,48,0,0,2317,2318,3,150,
	75,0,2318,333,1,0,0,0,2319,2326,3,220,110,0,2320,2322,5,16,0,0,2321,2323,
	3,260,130,0,2322,2321,1,0,0,0,2322,2323,1,0,0,0,2323,2324,1,0,0,0,2324,
	2326,5,17,0,0,2325,2319,1,0,0,0,2325,2320,1,0,0,0,2326,335,1,0,0,0,2327,
	2330,3,106,53,0,2328,2330,3,330,165,0,2329,2327,1,0,0,0,2329,2328,1,0,0,
	0,2330,337,1,0,0,0,2331,2332,5,136,0,0,2332,2333,5,63,0,0,2333,2334,5,109,
	0,0,2334,2335,3,96,48,0,2335,339,1,0,0,0,2336,2337,5,136,0,0,2337,2338,
	5,72,0,0,2338,2339,5,109,0,0,2339,2340,3,96,48,0,2340,341,1,0,0,0,2341,
	2342,5,136,0,0,2342,2343,5,129,0,0,2343,2344,5,109,0,0,2344,2345,3,96,48,
	0,2345,343,1,0,0,0,2346,2351,3,346,173,0,2347,2348,5,13,0,0,2348,2350,3,
	346,173,0,2349,2347,1,0,0,0,2350,2353,1,0,0,0,2351,2349,1,0,0,0,2351,2352,
	1,0,0,0,2352,345,1,0,0,0,2353,2351,1,0,0,0,2354,2359,3,220,110,0,2355,2356,
	5,15,0,0,2356,2358,3,220,110,0,2357,2355,1,0,0,0,2358,2361,1,0,0,0,2359,
	2357,1,0,0,0,2359,2360,1,0,0,0,2360,2363,1,0,0,0,2361,2359,1,0,0,0,2362,
	2364,7,9,0,0,2363,2362,1,0,0,0,2363,2364,1,0,0,0,2364,347,1,0,0,0,2365,
	2370,3,220,110,0,2366,2367,5,13,0,0,2367,2369,3,220,110,0,2368,2366,1,0,
	0,0,2369,2372,1,0,0,0,2370,2368,1,0,0,0,2370,2371,1,0,0,0,2371,349,1,0,
	0,0,2372,2370,1,0,0,0,2373,2380,5,28,0,0,2374,2380,5,29,0,0,2375,2380,3,
	366,183,0,2376,2380,3,368,184,0,2377,2380,3,370,185,0,2378,2380,3,372,186,
	0,2379,2373,1,0,0,0,2379,2374,1,0,0,0,2379,2375,1,0,0,0,2379,2376,1,0,0,
	0,2379,2377,1,0,0,0,2379,2378,1,0,0,0,2380,351,1,0,0,0,2381,2382,7,10,0,
	0,2382,353,1,0,0,0,2383,2384,5,169,0,0,2384,2385,4,177,37,1,2385,355,1,
	0,0,0,2386,2387,5,169,0,0,2387,2388,4,178,38,1,2388,357,1,0,0,0,2389,2390,
	5,169,0,0,2390,2391,4,179,39,1,2391,359,1,0,0,0,2392,2393,5,169,0,0,2393,
	2394,4,180,40,1,2394,361,1,0,0,0,2395,2396,5,169,0,0,2396,2397,4,181,41,
	1,2397,363,1,0,0,0,2398,2399,5,41,0,0,2399,365,1,0,0,0,2400,2401,5,30,0,
	0,2401,367,1,0,0,0,2402,2403,5,31,0,0,2403,369,1,0,0,0,2404,2405,5,32,0,
	0,2405,371,1,0,0,0,2406,2407,7,11,0,0,2407,373,1,0,0,0,2408,2409,1,0,0,
	0,2409,375,1,0,0,0,2410,2411,1,0,0,0,2411,377,1,0,0,0,2412,2413,5,139,0,
	0,2413,2414,3,380,190,0,2414,2415,5,12,0,0,2415,2420,1,0,0,0,2416,2417,
	3,380,190,0,2417,2418,5,12,0,0,2418,2420,1,0,0,0,2419,2412,1,0,0,0,2419,
	2416,1,0,0,0,2420,379,1,0,0,0,2421,2422,6,190,-1,0,2422,2423,3,382,191,
	0,2423,2428,1,0,0,0,2424,2425,10,1,0,0,2425,2427,3,388,194,0,2426,2424,
	1,0,0,0,2427,2430,1,0,0,0,2428,2426,1,0,0,0,2428,2429,1,0,0,0,2429,381,
	1,0,0,0,2430,2428,1,0,0,0,2431,2439,3,384,192,0,2432,2439,3,386,193,0,2433,
	2439,3,396,198,0,2434,2439,3,398,199,0,2435,2439,3,400,200,0,2436,2439,
	3,390,195,0,2437,2439,3,394,197,0,2438,2431,1,0,0,0,2438,2432,1,0,0,0,2438,
	2433,1,0,0,0,2438,2434,1,0,0,0,2438,2435,1,0,0,0,2438,2436,1,0,0,0,2438,
	2437,1,0,0,0,2439,383,1,0,0,0,2440,2441,3,290,145,0,2441,385,1,0,0,0,2442,
	2443,3,354,177,0,2443,2444,3,390,195,0,2444,387,1,0,0,0,2445,2446,5,15,
	0,0,2446,2451,3,390,195,0,2447,2448,5,15,0,0,2448,2451,3,402,201,0,2449,
	2451,3,394,197,0,2450,2445,1,0,0,0,2450,2447,1,0,0,0,2450,2449,1,0,0,0,
	2451,389,1,0,0,0,2452,2453,3,402,201,0,2453,2455,5,16,0,0,2454,2456,3,392,
	196,0,2455,2454,1,0,0,0,2455,2456,1,0,0,0,2456,2457,1,0,0,0,2457,2458,5,
	17,0,0,2458,391,1,0,0,0,2459,2460,6,196,-1,0,2460,2461,3,380,190,0,2461,
	2467,1,0,0,0,2462,2463,10,1,0,0,2463,2464,5,13,0,0,2464,2466,3,380,190,
	0,2465,2462,1,0,0,0,2466,2469,1,0,0,0,2467,2465,1,0,0,0,2467,2468,1,0,0,
	0,2468,393,1,0,0,0,2469,2467,1,0,0,0,2470,2471,5,18,0,0,2471,2472,3,380,
	190,0,2472,2473,5,19,0,0,2473,395,1,0,0,0,2474,2475,5,16,0,0,2475,2476,
	3,380,190,0,2476,2477,5,17,0,0,2477,397,1,0,0,0,2478,2479,3,402,201,0,2479,
	399,1,0,0,0,2480,2486,5,176,0,0,2481,2486,5,178,0,0,2482,2486,5,173,0,0,
	2483,2486,5,163,0,0,2484,2486,5,164,0,0,2485,2480,1,0,0,0,2485,2481,1,0,
	0,0,2485,2482,1,0,0,0,2485,2483,1,0,0,0,2485,2484,1,0,0,0,2486,401,1,0,
	0,0,2487,2493,5,169,0,0,2488,2493,5,167,0,0,2489,2493,5,171,0,0,2490,2493,
	5,168,0,0,2491,2493,3,352,176,0,2492,2487,1,0,0,0,2492,2488,1,0,0,0,2492,
	2489,1,0,0,0,2492,2490,1,0,0,0,2492,2491,1,0,0,0,2493,403,1,0,0,0,2494,
	2495,5,139,0,0,2495,2498,3,406,203,0,2496,2498,3,406,203,0,2497,2494,1,
	0,0,0,2497,2496,1,0,0,0,2498,405,1,0,0,0,2499,2500,6,203,-1,0,2500,2501,
	3,408,204,0,2501,2506,1,0,0,0,2502,2503,10,1,0,0,2503,2505,3,412,206,0,
	2504,2502,1,0,0,0,2505,2508,1,0,0,0,2506,2504,1,0,0,0,2506,2507,1,0,0,0,
	2507,407,1,0,0,0,2508,2506,1,0,0,0,2509,2515,3,410,205,0,2510,2515,3,422,
	211,0,2511,2515,3,424,212,0,2512,2515,3,426,213,0,2513,2515,3,414,207,0,
	2514,2509,1,0,0,0,2514,2510,1,0,0,0,2514,2511,1,0,0,0,2514,2512,1,0,0,0,
	2514,2513,1,0,0,0,2515,409,1,0,0,0,2516,2517,3,290,145,0,2517,411,1,0,0,
	0,2518,2519,5,15,0,0,2519,2525,3,414,207,0,2520,2521,5,18,0,0,2521,2522,
	3,406,203,0,2522,2523,5,19,0,0,2523,2525,1,0,0,0,2524,2518,1,0,0,0,2524,
	2520,1,0,0,0,2525,413,1,0,0,0,2526,2527,3,428,214,0,2527,2529,5,16,0,0,
	2528,2530,3,416,208,0,2529,2528,1,0,0,0,2529,2530,1,0,0,0,2530,2531,1,0,
	0,0,2531,2532,5,17,0,0,2532,415,1,0,0,0,2533,2540,3,418,209,0,2534,2540,
	3,420,210,0,2535,2536,3,418,209,0,2536,2537,5,13,0,0,2537,2538,3,420,210,
	0,2538,2540,1,0,0,0,2539,2533,1,0,0,0,2539,2534,1,0,0,0,2539,2535,1,0,0,
	0,2540,417,1,0,0,0,2541,2542,6,209,-1,0,2542,2543,3,406,203,0,2543,2549,
	1,0,0,0,2544,2545,10,1,0,0,2545,2546,5,13,0,0,2546,2548,3,406,203,0,2547,
	2544,1,0,0,0,2548,2551,1,0,0,0,2549,2547,1,0,0,0,2549,2550,1,0,0,0,2550,
	419,1,0,0,0,2551,2549,1,0,0,0,2552,2553,6,210,-1,0,2553,2554,3,428,214,
	0,2554,2555,5,41,0,0,2555,2556,3,406,203,0,2556,2565,1,0,0,0,2557,2558,
	10,1,0,0,2558,2559,5,13,0,0,2559,2560,3,428,214,0,2560,2561,5,41,0,0,2561,
	2562,3,406,203,0,2562,2564,1,0,0,0,2563,2557,1,0,0,0,2564,2567,1,0,0,0,
	2565,2563,1,0,0,0,2565,2566,1,0,0,0,2566,421,1,0,0,0,2567,2565,1,0,0,0,
	2568,2569,5,16,0,0,2569,2570,3,406,203,0,2570,2571,5,17,0,0,2571,423,1,
	0,0,0,2572,2573,6,212,-1,0,2573,2576,5,171,0,0,2574,2576,3,428,214,0,2575,
	2572,1,0,0,0,2575,2574,1,0,0,0,2576,2582,1,0,0,0,2577,2578,10,1,0,0,2578,
	2579,5,15,0,0,2579,2581,3,428,214,0,2580,2577,1,0,0,0,2581,2584,1,0,0,0,
	2582,2580,1,0,0,0,2582,2583,1,0,0,0,2583,425,1,0,0,0,2584,2582,1,0,0,0,
	2585,2591,5,176,0,0,2586,2591,5,178,0,0,2587,2591,5,173,0,0,2588,2591,5,
	163,0,0,2589,2591,5,164,0,0,2590,2585,1,0,0,0,2590,2586,1,0,0,0,2590,2587,
	1,0,0,0,2590,2588,1,0,0,0,2590,2589,1,0,0,0,2591,427,1,0,0,0,2592,2598,
	5,169,0,0,2593,2598,5,167,0,0,2594,2598,5,171,0,0,2595,2598,5,168,0,0,2596,
	2598,3,352,176,0,2597,2592,1,0,0,0,2597,2593,1,0,0,0,2597,2594,1,0,0,0,
	2597,2595,1,0,0,0,2597,2596,1,0,0,0,2598,429,1,0,0,0,2599,2600,5,139,0,
	0,2600,2601,3,432,216,0,2601,2602,5,12,0,0,2602,2607,1,0,0,0,2603,2604,
	3,432,216,0,2604,2605,5,12,0,0,2605,2607,1,0,0,0,2606,2599,1,0,0,0,2606,
	2603,1,0,0,0,2607,431,1,0,0,0,2608,2609,6,216,-1,0,2609,2610,3,434,217,
	0,2610,2615,1,0,0,0,2611,2612,10,1,0,0,2612,2614,3,440,220,0,2613,2611,
	1,0,0,0,2614,2617,1,0,0,0,2615,2613,1,0,0,0,2615,2616,1,0,0,0,2616,433,
	1,0,0,0,2617,2615,1,0,0,0,2618,2624,3,436,218,0,2619,2624,3,438,219,0,2620,
	2624,3,448,224,0,2621,2624,3,450,225,0,2622,2624,3,454,227,0,2623,2618,
	1,0,0,0,2623,2619,1,0,0,0,2623,2620,1,0,0,0,2623,2621,1,0,0,0,2623,2622,
	1,0,0,0,2624,435,1,0,0,0,2625,2626,3,290,145,0,2626,437,1,0,0,0,2627,2628,
	3,354,177,0,2628,2629,3,442,221,0,2629,439,1,0,0,0,2630,2631,5,15,0,0,2631,
	2634,3,442,221,0,2632,2634,3,446,223,0,2633,2630,1,0,0,0,2633,2632,1,0,
	0,0,2634,441,1,0,0,0,2635,2636,3,456,228,0,2636,2638,5,16,0,0,2637,2639,
	3,444,222,0,2638,2637,1,0,0,0,2638,2639,1,0,0,0,2639,2640,1,0,0,0,2640,
	2641,5,17,0,0,2641,443,1,0,0,0,2642,2643,6,222,-1,0,2643,2644,3,432,216,
	0,2644,2650,1,0,0,0,2645,2646,10,1,0,0,2646,2647,5,13,0,0,2647,2649,3,432,
	216,0,2648,2645,1,0,0,0,2649,2652,1,0,0,0,2650,2648,1,0,0,0,2650,2651,1,
	0,0,0,2651,445,1,0,0,0,2652,2650,1,0,0,0,2653,2654,5,18,0,0,2654,2655,3,
	432,216,0,2655,2656,5,19,0,0,2656,447,1,0,0,0,2657,2658,5,16,0,0,2658,2659,
	3,432,216,0,2659,2660,5,17,0,0,2660,449,1,0,0,0,2661,2662,6,225,-1,0,2662,
	2663,3,456,228,0,2663,2669,1,0,0,0,2664,2665,10,1,0,0,2665,2666,5,15,0,
	0,2666,2668,3,456,228,0,2667,2664,1,0,0,0,2668,2671,1,0,0,0,2669,2667,1,
	0,0,0,2669,2670,1,0,0,0,2670,451,1,0,0,0,2671,2669,1,0,0,0,2672,2673,6,
	226,-1,0,2673,2674,3,450,225,0,2674,2679,1,0,0,0,2675,2676,10,1,0,0,2676,
	2678,5,171,0,0,2677,2675,1,0,0,0,2678,2681,1,0,0,0,2679,2677,1,0,0,0,2679,
	2680,1,0,0,0,2680,453,1,0,0,0,2681,2679,1,0,0,0,2682,2688,5,176,0,0,2683,
	2688,5,178,0,0,2684,2688,5,173,0,0,2685,2688,5,163,0,0,2686,2688,5,164,
	0,0,2687,2682,1,0,0,0,2687,2683,1,0,0,0,2687,2684,1,0,0,0,2687,2685,1,0,
	0,0,2687,2686,1,0,0,0,2688,455,1,0,0,0,2689,2695,5,169,0,0,2690,2695,5,
	167,0,0,2691,2695,5,171,0,0,2692,2695,5,168,0,0,2693,2695,3,352,176,0,2694,
	2689,1,0,0,0,2694,2690,1,0,0,0,2694,2691,1,0,0,0,2694,2692,1,0,0,0,2694,
	2693,1,0,0,0,2695,457,1,0,0,0,2696,2697,5,139,0,0,2697,2698,3,460,230,0,
	2698,2699,5,12,0,0,2699,2704,1,0,0,0,2700,2701,3,460,230,0,2701,2702,5,
	12,0,0,2702,2704,1,0,0,0,2703,2696,1,0,0,0,2703,2700,1,0,0,0,2704,459,1,
	0,0,0,2705,2706,6,230,-1,0,2706,2707,3,462,231,0,2707,2712,1,0,0,0,2708,
	2709,10,1,0,0,2709,2711,3,468,234,0,2710,2708,1,0,0,0,2711,2714,1,0,0,0,
	2712,2710,1,0,0,0,2712,2713,1,0,0,0,2713,461,1,0,0,0,2714,2712,1,0,0,0,
	2715,2721,3,464,232,0,2716,2721,3,466,233,0,2717,2721,3,476,238,0,2718,
	2721,3,478,239,0,2719,2721,3,480,240,0,2720,2715,1,0,0,0,2720,2716,1,0,
	0,0,2720,2717,1,0,0,0,2720,2718,1,0,0,0,2720,2719,1,0,0,0,2721,463,1,0,
	0,0,2722,2723,3,290,145,0,2723,465,1,0,0,0,2724,2725,3,354,177,0,2725,2726,
	3,470,235,0,2726,467,1,0,0,0,2727,2728,5,15,0,0,2728,2731,3,470,235,0,2729,
	2731,3,474,237,0,2730,2727,1,0,0,0,2730,2729,1,0,0,0,2731,469,1,0,0,0,2732,
	2733,3,482,241,0,2733,2735,5,16,0,0,2734,2736,3,472,236,0,2735,2734,1,0,
	0,0,2735,2736,1,0,0,0,2736,2737,1,0,0,0,2737,2738,5,17,0,0,2738,471,1,0,
	0,0,2739,2740,6,236,-1,0,2740,2741,3,460,230,0,2741,2747,1,0,0,0,2742,2743,
	10,1,0,0,2743,2744,5,13,0,0,2744,2746,3,460,230,0,2745,2742,1,0,0,0,2746,
	2749,1,0,0,0,2747,2745,1,0,0,0,2747,2748,1,0,0,0,2748,473,1,0,0,0,2749,
	2747,1,0,0,0,2750,2751,5,18,0,0,2751,2752,3,460,230,0,2752,2753,5,19,0,
	0,2753,475,1,0,0,0,2754,2755,5,16,0,0,2755,2756,3,460,230,0,2756,2757,5,
	17,0,0,2757,477,1,0,0,0,2758,2759,6,239,-1,0,2759,2762,5,171,0,0,2760,2762,
	3,482,241,0,2761,2758,1,0,0,0,2761,2760,1,0,0,0,2762,2768,1,0,0,0,2763,
	2764,10,1,0,0,2764,2765,5,15,0,0,2765,2767,3,482,241,0,2766,2763,1,0,0,
	0,2767,2770,1,0,0,0,2768,2766,1,0,0,0,2768,2769,1,0,0,0,2769,479,1,0,0,
	0,2770,2768,1,0,0,0,2771,2777,5,176,0,0,2772,2777,5,178,0,0,2773,2777,5,
	173,0,0,2774,2777,5,163,0,0,2775,2777,5,164,0,0,2776,2771,1,0,0,0,2776,
	2772,1,0,0,0,2776,2773,1,0,0,0,2776,2774,1,0,0,0,2776,2775,1,0,0,0,2777,
	481,1,0,0,0,2778,2784,5,169,0,0,2779,2784,5,167,0,0,2780,2784,5,171,0,0,
	2781,2784,5,168,0,0,2782,2784,3,352,176,0,2783,2778,1,0,0,0,2783,2779,1,
	0,0,0,2783,2780,1,0,0,0,2783,2781,1,0,0,0,2783,2782,1,0,0,0,2784,483,1,
	0,0,0,2785,2788,3,486,243,0,2786,2788,3,488,244,0,2787,2785,1,0,0,0,2787,
	2786,1,0,0,0,2788,485,1,0,0,0,2789,2797,3,494,247,0,2790,2792,3,496,248,
	0,2791,2793,3,508,254,0,2792,2791,1,0,0,0,2792,2793,1,0,0,0,2793,2794,1,
	0,0,0,2794,2795,3,498,249,0,2795,2797,1,0,0,0,2796,2789,1,0,0,0,2796,2790,
	1,0,0,0,2797,487,1,0,0,0,2798,2799,3,490,245,0,2799,2801,3,150,75,0,2800,
	2802,3,508,254,0,2801,2800,1,0,0,0,2801,2802,1,0,0,0,2802,2803,1,0,0,0,
	2803,2804,3,150,75,0,2804,2805,3,492,246,0,2805,489,1,0,0,0,2806,2807,5,
	37,0,0,2807,2810,5,35,0,0,2808,2810,5,39,0,0,2809,2806,1,0,0,0,2809,2808,
	1,0,0,0,2810,491,1,0,0,0,2811,2812,5,37,0,0,2812,2813,5,31,0,0,2813,2814,
	5,35,0,0,2814,493,1,0,0,0,2815,2816,5,37,0,0,2816,2817,3,500,250,0,2817,
	2821,3,150,75,0,2818,2820,3,504,252,0,2819,2818,1,0,0,0,2820,2823,1,0,0,
	0,2821,2819,1,0,0,0,2821,2822,1,0,0,0,2822,2824,1,0,0,0,2823,2821,1,0,0,
	0,2824,2825,5,31,0,0,2825,2826,5,35,0,0,2826,495,1,0,0,0,2827,2828,5,37,
	0,0,2828,2829,3,500,250,0,2829,2833,3,150,75,0,2830,2832,3,504,252,0,2831,
	2830,1,0,0,0,2832,2835,1,0,0,0,2833,2831,1,0,0,0,2833,2834,1,0,0,0,2834,
	2836,1,0,0,0,2835,2833,1,0,0,0,2836,2837,5,35,0,0,2837,497,1,0,0,0,2838,
	2839,5,37,0,0,2839,2840,5,31,0,0,2840,2841,3,500,250,0,2841,2842,5,35,0,
	0,2842,499,1,0,0,0,2843,2848,3,502,251,0,2844,2845,5,15,0,0,2845,2847,3,
	502,251,0,2846,2844,1,0,0,0,2847,2850,1,0,0,0,2848,2846,1,0,0,0,2848,2849,
	1,0,0,0,2849,501,1,0,0,0,2850,2848,1,0,0,0,2851,2855,3,210,105,0,2852,2854,
	3,212,106,0,2853,2852,1,0,0,0,2854,2857,1,0,0,0,2855,2853,1,0,0,0,2855,
	2856,1,0,0,0,2856,503,1,0,0,0,2857,2855,1,0,0,0,2858,2861,3,502,251,0,2859,
	2860,5,41,0,0,2860,2862,3,506,253,0,2861,2859,1,0,0,0,2861,2862,1,0,0,0,
	2862,2863,1,0,0,0,2863,2864,3,150,75,0,2864,505,1,0,0,0,2865,2872,5,173,
	0,0,2866,2868,5,20,0,0,2867,2869,3,96,48,0,2868,2867,1,0,0,0,2868,2869,
	1,0,0,0,2869,2870,1,0,0,0,2870,2872,5,21,0,0,2871,2865,1,0,0,0,2871,2866,
	1,0,0,0,2872,507,1,0,0,0,2873,2875,3,510,255,0,2874,2873,1,0,0,0,2875,2876,
	1,0,0,0,2876,2874,1,0,0,0,2876,2877,1,0,0,0,2877,509,1,0,0,0,2878,2886,
	3,512,256,0,2879,2886,3,486,243,0,2880,2882,5,20,0,0,2881,2883,3,96,48,
	0,2882,2881,1,0,0,0,2882,2883,1,0,0,0,2883,2884,1,0,0,0,2884,2886,5,21,
	0,0,2885,2878,1,0,0,0,2885,2879,1,0,0,0,2885,2880,1,0,0,0,2886,511,1,0,
	0,0,2887,2889,3,514,257,0,2888,2887,1,0,0,0,2889,2890,1,0,0,0,2890,2888,
	1,0,0,0,2890,2891,1,0,0,0,2891,513,1,0,0,0,2892,2895,8,12,0,0,2893,2895,
	5,183,0,0,2894,2892,1,0,0,0,2894,2893,1,0,0,0,2895,515,1,0,0,0,2896,2898,
	5,20,0,0,2897,2899,3,518,259,0,2898,2897,1,0,0,0,2899,2900,1,0,0,0,2900,
	2898,1,0,0,0,2900,2901,1,0,0,0,2901,2902,1,0,0,0,2902,2903,5,21,0,0,2903,
	517,1,0,0,0,2904,2905,3,520,260,0,2905,2907,5,11,0,0,2906,2908,3,522,261,
	0,2907,2906,1,0,0,0,2908,2909,1,0,0,0,2909,2907,1,0,0,0,2909,2910,1,0,0,
	0,2910,2911,1,0,0,0,2911,2912,5,12,0,0,2912,519,1,0,0,0,2913,2914,6,260,
	-1,0,2914,2918,3,210,105,0,2915,2916,5,29,0,0,2916,2918,3,214,107,0,2917,
	2913,1,0,0,0,2917,2915,1,0,0,0,2918,2927,1,0,0,0,2919,2921,10,1,0,0,2920,
	2922,3,212,106,0,2921,2920,1,0,0,0,2922,2923,1,0,0,0,2923,2921,1,0,0,0,
	2923,2924,1,0,0,0,2924,2926,1,0,0,0,2925,2919,1,0,0,0,2926,2929,1,0,0,0,
	2927,2925,1,0,0,0,2927,2928,1,0,0,0,2928,521,1,0,0,0,2929,2927,1,0,0,0,
	2930,2931,5,20,0,0,2931,2932,3,96,48,0,2932,2933,5,21,0,0,2933,2936,1,0,
	0,0,2934,2936,3,524,262,0,2935,2930,1,0,0,0,2935,2934,1,0,0,0,2936,523,
	1,0,0,0,2937,2939,8,13,0,0,2938,2937,1,0,0,0,2939,2940,1,0,0,0,2940,2938,
	1,0,0,0,2940,2941,1,0,0,0,2941,525,1,0,0,0,286,533,537,564,571,579,581,
	589,602,610,614,624,636,642,645,648,657,665,670,676,684,689,695,700,709,
	714,719,728,733,753,758,761,767,774,777,783,789,792,798,803,808,811,817,
	840,850,855,862,864,887,904,911,919,927,950,952,967,975,985,1006,1010,1030,
	1043,1047,1055,1058,1063,1066,1074,1085,1089,1096,1103,1110,1116,1123,1139,
	1156,1183,1191,1197,1203,1222,1227,1234,1248,1250,1267,1281,1290,1301,1314,
	1326,1338,1349,1362,1373,1381,1387,1396,1403,1410,1418,1420,1428,1439,1449,
	1455,1464,1471,1478,1486,1489,1506,1515,1531,1538,1545,1549,1561,1568,1575,
	1588,1602,1608,1612,1623,1631,1639,1648,1658,1661,1665,1677,1683,1691,1700,
	1708,1721,1724,1728,1733,1737,1746,1772,1781,1783,1788,1808,1813,1822,1826,
	1833,1838,1842,1854,1871,1876,1879,1883,1888,1895,1906,1908,1917,1925,1933,
	1941,1949,1957,1965,1971,1983,1987,1997,2005,2009,2015,2022,2027,2034,2042,
	2049,2059,2072,2076,2079,2083,2086,2094,2103,2112,2121,2138,2143,2152,2163,
	2170,2178,2188,2196,2199,2203,2208,2218,2222,2233,2236,2243,2252,2259,2268,
	2279,2292,2299,2312,2322,2325,2329,2351,2359,2363,2370,2379,2419,2428,2438,
	2450,2455,2467,2485,2492,2497,2506,2514,2524,2529,2539,2549,2565,2575,2582,
	2590,2597,2606,2615,2623,2633,2638,2650,2669,2679,2687,2694,2703,2712,2720,
	2730,2735,2747,2761,2768,2776,2783,2787,2792,2796,2801,2809,2821,2833,2848,
	2855,2861,2868,2871,2876,2882,2885,2890,2894,2900,2909,2917,2923,2927,2935,
	2940];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!OParser.__ATN) {
			OParser.__ATN = new ATNDeserializer().deserialize(OParser._serializedATN);
		}

		return OParser.__ATN;
	}


	static DecisionsToDFA = OParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Enum_category_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _attrs!: Attribute_identifier_listContext;
	public _derived!: Type_identifierContext;
	public _symbols!: Category_symbol_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUMERATED(): TerminalNode {
		return this.getToken(OParser.ENUMERATED, 0);
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(OParser.CATEGORY, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public type_identifier_list(): Type_identifierContext[] {
		return this.getTypedRuleContexts(Type_identifierContext) as Type_identifierContext[];
	}
	public type_identifier(i: number): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, i) as Type_identifierContext;
	}
	public category_symbol_list(): Category_symbol_listContext {
		return this.getTypedRuleContext(Category_symbol_listContext, 0) as Category_symbol_listContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(OParser.EXTENDS, 0);
	}
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_enum_category_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterEnum_category_declaration) {
	 		listener.enterEnum_category_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitEnum_category_declaration) {
	 		listener.exitEnum_category_declaration(this);
		}
	}
}


export class Enum_native_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _typ!: Native_typeContext;
	public _symbols!: Native_symbol_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUMERATED(): TerminalNode {
		return this.getToken(OParser.ENUMERATED, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public native_type(): Native_typeContext {
		return this.getTypedRuleContext(Native_typeContext, 0) as Native_typeContext;
	}
	public native_symbol_list(): Native_symbol_listContext {
		return this.getTypedRuleContext(Native_symbol_listContext, 0) as Native_symbol_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_enum_native_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterEnum_native_declaration) {
	 		listener.enterEnum_native_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitEnum_native_declaration) {
	 		listener.exitEnum_native_declaration(this);
		}
	}
}


export class Category_symbolContext extends ParserRuleContext {
	public _name!: Symbol_identifierContext;
	public _args!: Argument_assignment_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
	public argument_assignment_list(): Argument_assignment_listContext {
		return this.getTypedRuleContext(Argument_assignment_listContext, 0) as Argument_assignment_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_category_symbol;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCategory_symbol) {
	 		listener.enterCategory_symbol(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCategory_symbol) {
	 		listener.exitCategory_symbol(this);
		}
	}
}


export class Native_symbolContext extends ParserRuleContext {
	public _name!: Symbol_identifierContext;
	public _exp!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(OParser.EQ, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_symbol;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_symbol) {
	 		listener.enterNative_symbol(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_symbol) {
	 		listener.exitNative_symbol(this);
		}
	}
}


export class Attribute_declarationContext extends ParserRuleContext {
	public _name!: Attribute_identifierContext;
	public _typ!: TypedefContext;
	public _match!: Attribute_constraintContext;
	public _indices!: Variable_identifier_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTRIBUTE(): TerminalNode {
		return this.getToken(OParser.ATTRIBUTE, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public attribute_identifier(): Attribute_identifierContext {
		return this.getTypedRuleContext(Attribute_identifierContext, 0) as Attribute_identifierContext;
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public STORABLE(): TerminalNode {
		return this.getToken(OParser.STORABLE, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(OParser.WITH, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(OParser.INDEX, 0);
	}
	public attribute_constraint(): Attribute_constraintContext {
		return this.getTypedRuleContext(Attribute_constraintContext, 0) as Attribute_constraintContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public variable_identifier_list(): Variable_identifier_listContext {
		return this.getTypedRuleContext(Variable_identifier_listContext, 0) as Variable_identifier_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_attribute_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAttribute_declaration) {
	 		listener.enterAttribute_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAttribute_declaration) {
	 		listener.exitAttribute_declaration(this);
		}
	}
}


export class Concrete_widget_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _derived!: Type_identifierContext;
	public _methods!: Category_method_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WIDGET(): TerminalNode {
		return this.getToken(OParser.WIDGET, 0);
	}
	public type_identifier_list(): Type_identifierContext[] {
		return this.getTypedRuleContexts(Type_identifierContext) as Type_identifierContext[];
	}
	public type_identifier(i: number): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, i) as Type_identifierContext;
	}
	public category_method_list(): Category_method_listContext {
		return this.getTypedRuleContext(Category_method_listContext, 0) as Category_method_listContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(OParser.EXTENDS, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_concrete_widget_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterConcrete_widget_declaration) {
	 		listener.enterConcrete_widget_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitConcrete_widget_declaration) {
	 		listener.exitConcrete_widget_declaration(this);
		}
	}
}


export class Native_widget_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _bindings!: Native_category_bindingsContext;
	public _methods!: Native_member_method_declaration_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(OParser.NATIVE, 0);
	}
	public WIDGET(): TerminalNode {
		return this.getToken(OParser.WIDGET, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public native_category_bindings(): Native_category_bindingsContext {
		return this.getTypedRuleContext(Native_category_bindingsContext, 0) as Native_category_bindingsContext;
	}
	public native_member_method_declaration_list(): Native_member_method_declaration_listContext {
		return this.getTypedRuleContext(Native_member_method_declaration_listContext, 0) as Native_member_method_declaration_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_widget_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_widget_declaration) {
	 		listener.enterNative_widget_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_widget_declaration) {
	 		listener.exitNative_widget_declaration(this);
		}
	}
}


export class Concrete_category_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _attrs!: Attribute_identifier_listContext;
	public _derived!: Derived_listContext;
	public _methods!: Category_method_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(OParser.CATEGORY, 0);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public category_method_list(): Category_method_listContext {
		return this.getTypedRuleContext(Category_method_listContext, 0) as Category_method_listContext;
	}
	public STORABLE(): TerminalNode {
		return this.getToken(OParser.STORABLE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(OParser.EXTENDS, 0);
	}
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
	public derived_list(): Derived_listContext {
		return this.getTypedRuleContext(Derived_listContext, 0) as Derived_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_concrete_category_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterConcrete_category_declaration) {
	 		listener.enterConcrete_category_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitConcrete_category_declaration) {
	 		listener.exitConcrete_category_declaration(this);
		}
	}
}


export class Singleton_category_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _attrs!: Attribute_identifier_listContext;
	public _methods!: Category_method_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SINGLETON(): TerminalNode {
		return this.getToken(OParser.SINGLETON, 0);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public category_method_list(): Category_method_listContext {
		return this.getTypedRuleContext(Category_method_listContext, 0) as Category_method_listContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_singleton_category_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSingleton_category_declaration) {
	 		listener.enterSingleton_category_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSingleton_category_declaration) {
	 		listener.exitSingleton_category_declaration(this);
		}
	}
}


export class Derived_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_derived_list;
	}
	public copyFrom(ctx: Derived_listContext): void {
		super.copyFrom(ctx);
	}
}
export class DerivedListItemContext extends Derived_listContext {
	public _items!: Derived_listContext;
	public _item!: Type_identifierContext;
	constructor(parser: OParser, ctx: Derived_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(OParser.COMMA, 0);
	}
	public derived_list(): Derived_listContext {
		return this.getTypedRuleContext(Derived_listContext, 0) as Derived_listContext;
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDerivedListItem) {
	 		listener.enterDerivedListItem(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDerivedListItem) {
	 		listener.exitDerivedListItem(this);
		}
	}
}
export class DerivedListContext extends Derived_listContext {
	public _item!: Type_identifierContext;
	constructor(parser: OParser, ctx: Derived_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDerivedList) {
	 		listener.enterDerivedList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDerivedList) {
	 		listener.exitDerivedList(this);
		}
	}
}


export class Category_method_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_category_method_list;
	}
	public copyFrom(ctx: Category_method_listContext): void {
		super.copyFrom(ctx);
	}
}
export class EmptyCategoryMethodListContext extends Category_method_listContext {
	constructor(parser: OParser, ctx: Category_method_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterEmptyCategoryMethodList) {
	 		listener.enterEmptyCategoryMethodList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitEmptyCategoryMethodList) {
	 		listener.exitEmptyCategoryMethodList(this);
		}
	}
}
export class CurlyCategoryMethodListContext extends Category_method_listContext {
	public _items!: Member_method_declaration_listContext;
	constructor(parser: OParser, ctx: Category_method_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public member_method_declaration_list(): Member_method_declaration_listContext {
		return this.getTypedRuleContext(Member_method_declaration_listContext, 0) as Member_method_declaration_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCurlyCategoryMethodList) {
	 		listener.enterCurlyCategoryMethodList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCurlyCategoryMethodList) {
	 		listener.exitCurlyCategoryMethodList(this);
		}
	}
}


export class Operator_method_declarationContext extends ParserRuleContext {
	public _typ!: TypedefContext;
	public _op!: OperatorContext;
	public _arg!: Operator_argumentContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPERATOR(): TerminalNode {
		return this.getToken(OParser.OPERATOR, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public operator(): OperatorContext {
		return this.getTypedRuleContext(OperatorContext, 0) as OperatorContext;
	}
	public operator_argument(): Operator_argumentContext {
		return this.getTypedRuleContext(Operator_argumentContext, 0) as Operator_argumentContext;
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_operator_method_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOperator_method_declaration) {
	 		listener.enterOperator_method_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOperator_method_declaration) {
	 		listener.exitOperator_method_declaration(this);
		}
	}
}


export class Setter_method_declarationContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SETTER(): TerminalNode {
		return this.getToken(OParser.SETTER, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_setter_method_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSetter_method_declaration) {
	 		listener.enterSetter_method_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSetter_method_declaration) {
	 		listener.exitSetter_method_declaration(this);
		}
	}
}


export class Native_setter_declarationContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _stmts!: Native_statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SETTER(): TerminalNode {
		return this.getToken(OParser.SETTER, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(OParser.NATIVE, 0);
	}
	public native_statement_list(): Native_statement_listContext {
		return this.getTypedRuleContext(Native_statement_listContext, 0) as Native_statement_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_setter_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_setter_declaration) {
	 		listener.enterNative_setter_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_setter_declaration) {
	 		listener.exitNative_setter_declaration(this);
		}
	}
}


export class Getter_method_declarationContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GETTER(): TerminalNode {
		return this.getToken(OParser.GETTER, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_getter_method_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterGetter_method_declaration) {
	 		listener.enterGetter_method_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitGetter_method_declaration) {
	 		listener.exitGetter_method_declaration(this);
		}
	}
}


export class Native_getter_declarationContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _stmts!: Native_statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GETTER(): TerminalNode {
		return this.getToken(OParser.GETTER, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(OParser.NATIVE, 0);
	}
	public native_statement_list(): Native_statement_listContext {
		return this.getTypedRuleContext(Native_statement_listContext, 0) as Native_statement_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_getter_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_getter_declaration) {
	 		listener.enterNative_getter_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_getter_declaration) {
	 		listener.exitNative_getter_declaration(this);
		}
	}
}


export class Native_resource_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _attrs!: Attribute_identifier_listContext;
	public _bindings!: Native_category_bindingsContext;
	public _methods!: Native_member_method_declaration_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(OParser.NATIVE, 0);
	}
	public RESOURCE(): TerminalNode {
		return this.getToken(OParser.RESOURCE, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public native_category_bindings(): Native_category_bindingsContext {
		return this.getTypedRuleContext(Native_category_bindingsContext, 0) as Native_category_bindingsContext;
	}
	public STORABLE(): TerminalNode {
		return this.getToken(OParser.STORABLE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
	public native_member_method_declaration_list(): Native_member_method_declaration_listContext {
		return this.getTypedRuleContext(Native_member_method_declaration_listContext, 0) as Native_member_method_declaration_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_resource_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_resource_declaration) {
	 		listener.enterNative_resource_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_resource_declaration) {
	 		listener.exitNative_resource_declaration(this);
		}
	}
}


export class Native_category_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _attrs!: Attribute_identifier_listContext;
	public _bindings!: Native_category_bindingsContext;
	public _methods!: Native_member_method_declaration_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(OParser.NATIVE, 0);
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(OParser.CATEGORY, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public native_category_bindings(): Native_category_bindingsContext {
		return this.getTypedRuleContext(Native_category_bindingsContext, 0) as Native_category_bindingsContext;
	}
	public STORABLE(): TerminalNode {
		return this.getToken(OParser.STORABLE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
	public native_member_method_declaration_list(): Native_member_method_declaration_listContext {
		return this.getTypedRuleContext(Native_member_method_declaration_listContext, 0) as Native_member_method_declaration_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_category_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_category_declaration) {
	 		listener.enterNative_category_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_category_declaration) {
	 		listener.exitNative_category_declaration(this);
		}
	}
}


export class Native_category_bindingsContext extends ParserRuleContext {
	public _items!: Native_category_binding_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(OParser.CATEGORY, 0);
	}
	public BINDINGS(): TerminalNode {
		return this.getToken(OParser.BINDINGS, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public native_category_binding_list(): Native_category_binding_listContext {
		return this.getTypedRuleContext(Native_category_binding_listContext, 0) as Native_category_binding_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_category_bindings;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_category_bindings) {
	 		listener.enterNative_category_bindings(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_category_bindings) {
	 		listener.exitNative_category_bindings(this);
		}
	}
}


export class Native_category_binding_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_category_binding_list;
	}
	public copyFrom(ctx: Native_category_binding_listContext): void {
		super.copyFrom(ctx);
	}
}
export class NativeCategoryBindingListItemContext extends Native_category_binding_listContext {
	public _items!: Native_category_binding_listContext;
	public _item!: Native_category_bindingContext;
	constructor(parser: OParser, ctx: Native_category_binding_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public native_category_binding_list(): Native_category_binding_listContext {
		return this.getTypedRuleContext(Native_category_binding_listContext, 0) as Native_category_binding_listContext;
	}
	public native_category_binding(): Native_category_bindingContext {
		return this.getTypedRuleContext(Native_category_bindingContext, 0) as Native_category_bindingContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNativeCategoryBindingListItem) {
	 		listener.enterNativeCategoryBindingListItem(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNativeCategoryBindingListItem) {
	 		listener.exitNativeCategoryBindingListItem(this);
		}
	}
}
export class NativeCategoryBindingListContext extends Native_category_binding_listContext {
	public _item!: Native_category_bindingContext;
	constructor(parser: OParser, ctx: Native_category_binding_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public native_category_binding(): Native_category_bindingContext {
		return this.getTypedRuleContext(Native_category_bindingContext, 0) as Native_category_bindingContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNativeCategoryBindingList) {
	 		listener.enterNativeCategoryBindingList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNativeCategoryBindingList) {
	 		listener.exitNativeCategoryBindingList(this);
		}
	}
}


export class Abstract_global_method_declarationContext extends ParserRuleContext {
	public _typ!: TypedefContext;
	public _name!: Type_identifierContext;
	public _args!: Argument_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(OParser.ABSTRACT, 0);
	}
	public METHOD(): TerminalNode {
		return this.getToken(OParser.METHOD, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public argument_list(): Argument_listContext {
		return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_abstract_global_method_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAbstract_global_method_declaration) {
	 		listener.enterAbstract_global_method_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAbstract_global_method_declaration) {
	 		listener.exitAbstract_global_method_declaration(this);
		}
	}
}


export class Abstract_member_method_declarationContext extends ParserRuleContext {
	public _typ!: TypedefContext;
	public _name!: Method_identifierContext;
	public _args!: Argument_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(OParser.ABSTRACT, 0);
	}
	public METHOD(): TerminalNode {
		return this.getToken(OParser.METHOD, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public method_identifier(): Method_identifierContext {
		return this.getTypedRuleContext(Method_identifierContext, 0) as Method_identifierContext;
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public argument_list(): Argument_listContext {
		return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_abstract_member_method_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAbstract_member_method_declaration) {
	 		listener.enterAbstract_member_method_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAbstract_member_method_declaration) {
	 		listener.exitAbstract_member_method_declaration(this);
		}
	}
}


export class Concrete_method_declarationContext extends ParserRuleContext {
	public _typ!: TypedefContext;
	public _name!: Method_identifierContext;
	public _args!: Argument_listContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public METHOD(): TerminalNode {
		return this.getToken(OParser.METHOD, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public method_identifier(): Method_identifierContext {
		return this.getTypedRuleContext(Method_identifierContext, 0) as Method_identifierContext;
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public argument_list(): Argument_listContext {
		return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_concrete_method_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterConcrete_method_declaration) {
	 		listener.enterConcrete_method_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitConcrete_method_declaration) {
	 		listener.exitConcrete_method_declaration(this);
		}
	}
}


export class Native_method_declarationContext extends ParserRuleContext {
	public _typ!: Category_or_any_typeContext;
	public _name!: Method_identifierContext;
	public _args!: Argument_listContext;
	public _stmts!: Native_statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public METHOD(): TerminalNode {
		return this.getToken(OParser.METHOD, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public method_identifier(): Method_identifierContext {
		return this.getTypedRuleContext(Method_identifierContext, 0) as Method_identifierContext;
	}
	public native_statement_list(): Native_statement_listContext {
		return this.getTypedRuleContext(Native_statement_listContext, 0) as Native_statement_listContext;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(OParser.NATIVE, 0);
	}
	public category_or_any_type(): Category_or_any_typeContext {
		return this.getTypedRuleContext(Category_or_any_typeContext, 0) as Category_or_any_typeContext;
	}
	public argument_list(): Argument_listContext {
		return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_method_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_method_declaration) {
	 		listener.enterNative_method_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_method_declaration) {
	 		listener.exitNative_method_declaration(this);
		}
	}
}


export class Test_method_declarationContext extends ParserRuleContext {
	public _name!: Token;
	public _stmts!: Statement_listContext;
	public _exps!: Assertion_listContext;
	public _error!: Symbol_identifierContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TEST(): TerminalNode {
		return this.getToken(OParser.TEST, 0);
	}
	public METHOD(): TerminalNode {
		return this.getToken(OParser.METHOD, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public LCURL_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LCURL);
	}
	public LCURL(i: number): TerminalNode {
		return this.getToken(OParser.LCURL, i);
	}
	public RCURL_list(): TerminalNode[] {
	    	return this.getTokens(OParser.RCURL);
	}
	public RCURL(i: number): TerminalNode {
		return this.getToken(OParser.RCURL, i);
	}
	public VERIFYING(): TerminalNode {
		return this.getToken(OParser.VERIFYING, 0);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(OParser.TEXT_LITERAL, 0);
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public assertion_list(): Assertion_listContext {
		return this.getTypedRuleContext(Assertion_listContext, 0) as Assertion_listContext;
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_test_method_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTest_method_declaration) {
	 		listener.enterTest_method_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTest_method_declaration) {
	 		listener.exitTest_method_declaration(this);
		}
	}
}


export class AssertionContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_assertion;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAssertion) {
	 		listener.enterAssertion(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAssertion) {
	 		listener.exitAssertion(this);
		}
	}
}


export class Typed_argumentContext extends ParserRuleContext {
	public _typ!: Category_or_any_typeContext;
	public _attrs!: Attribute_identifier_listContext;
	public _name!: Variable_identifierContext;
	public _value!: Literal_expressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public category_or_any_type(): Category_or_any_typeContext {
		return this.getTypedRuleContext(Category_or_any_typeContext, 0) as Category_or_any_typeContext;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(OParser.EQ, 0);
	}
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_typed_argument;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTyped_argument) {
	 		listener.enterTyped_argument(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTyped_argument) {
	 		listener.exitTyped_argument(this);
		}
	}
}


export class Statement_or_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_statement_or_list;
	}
	public copyFrom(ctx: Statement_or_listContext): void {
		super.copyFrom(ctx);
	}
}
export class CurlyStatementListContext extends Statement_or_listContext {
	public _items!: Statement_listContext;
	constructor(parser: OParser, ctx: Statement_or_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCurlyStatementList) {
	 		listener.enterCurlyStatementList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCurlyStatementList) {
	 		listener.exitCurlyStatementList(this);
		}
	}
}
export class SingleStatementContext extends Statement_or_listContext {
	public _stmt!: StatementContext;
	constructor(parser: OParser, ctx: Statement_or_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSingleStatement) {
	 		listener.enterSingleStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSingleStatement) {
	 		listener.exitSingleStatement(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_statement;
	}
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class CommentStatementContext extends StatementContext {
	public _decl!: Comment_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comment_statement(): Comment_statementContext {
		return this.getTypedRuleContext(Comment_statementContext, 0) as Comment_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCommentStatement) {
	 		listener.enterCommentStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCommentStatement) {
	 		listener.exitCommentStatement(this);
		}
	}
}
export class StoreStatementContext extends StatementContext {
	public _stmt!: Store_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public store_statement(): Store_statementContext {
		return this.getTypedRuleContext(Store_statementContext, 0) as Store_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterStoreStatement) {
	 		listener.enterStoreStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitStoreStatement) {
	 		listener.exitStoreStatement(this);
		}
	}
}
export class WithSingletonStatementContext extends StatementContext {
	public _stmt!: With_singleton_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public with_singleton_statement(): With_singleton_statementContext {
		return this.getTypedRuleContext(With_singleton_statementContext, 0) as With_singleton_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterWithSingletonStatement) {
	 		listener.enterWithSingletonStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitWithSingletonStatement) {
	 		listener.exitWithSingletonStatement(this);
		}
	}
}
export class WriteStatementContext extends StatementContext {
	public _stmt!: Write_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public write_statement(): Write_statementContext {
		return this.getTypedRuleContext(Write_statementContext, 0) as Write_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterWriteStatement) {
	 		listener.enterWriteStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitWriteStatement) {
	 		listener.exitWriteStatement(this);
		}
	}
}
export class WhileStatementContext extends StatementContext {
	public _stmt!: While_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public while_statement(): While_statementContext {
		return this.getTypedRuleContext(While_statementContext, 0) as While_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitWhileStatement) {
	 		listener.exitWhileStatement(this);
		}
	}
}
export class WithResourceStatementContext extends StatementContext {
	public _stmt!: With_resource_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public with_resource_statement(): With_resource_statementContext {
		return this.getTypedRuleContext(With_resource_statementContext, 0) as With_resource_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterWithResourceStatement) {
	 		listener.enterWithResourceStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitWithResourceStatement) {
	 		listener.exitWithResourceStatement(this);
		}
	}
}
export class RaiseStatementContext extends StatementContext {
	public _stmt!: Raise_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public raise_statement(): Raise_statementContext {
		return this.getTypedRuleContext(Raise_statementContext, 0) as Raise_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterRaiseStatement) {
	 		listener.enterRaiseStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitRaiseStatement) {
	 		listener.exitRaiseStatement(this);
		}
	}
}
export class FetchStatementContext extends StatementContext {
	public _stmt!: Fetch_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public fetch_statement(): Fetch_statementContext {
		return this.getTypedRuleContext(Fetch_statementContext, 0) as Fetch_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterFetchStatement) {
	 		listener.enterFetchStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitFetchStatement) {
	 		listener.exitFetchStatement(this);
		}
	}
}
export class BreakStatementContext extends StatementContext {
	public _stmt!: Break_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public break_statement(): Break_statementContext {
		return this.getTypedRuleContext(Break_statementContext, 0) as Break_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterBreakStatement) {
	 		listener.enterBreakStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitBreakStatement) {
	 		listener.exitBreakStatement(this);
		}
	}
}
export class AssignInstanceStatementContext extends StatementContext {
	public _stmt!: Assign_instance_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public assign_instance_statement(): Assign_instance_statementContext {
		return this.getTypedRuleContext(Assign_instance_statementContext, 0) as Assign_instance_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAssignInstanceStatement) {
	 		listener.enterAssignInstanceStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAssignInstanceStatement) {
	 		listener.exitAssignInstanceStatement(this);
		}
	}
}
export class IfStatementContext extends StatementContext {
	public _stmt!: If_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public if_statement(): If_statementContext {
		return this.getTypedRuleContext(If_statementContext, 0) as If_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
}
export class SwitchStatementContext extends StatementContext {
	public _stmt!: Switch_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public switch_statement(): Switch_statementContext {
		return this.getTypedRuleContext(Switch_statementContext, 0) as Switch_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSwitchStatement) {
	 		listener.enterSwitchStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSwitchStatement) {
	 		listener.exitSwitchStatement(this);
		}
	}
}
export class TryStatementContext extends StatementContext {
	public _stmt!: Try_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public try_statement(): Try_statementContext {
		return this.getTypedRuleContext(Try_statementContext, 0) as Try_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTryStatement) {
	 		listener.enterTryStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTryStatement) {
	 		listener.exitTryStatement(this);
		}
	}
}
export class ReadStatementContext extends StatementContext {
	public _stmt!: Read_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public read_statement(): Read_statementContext {
		return this.getTypedRuleContext(Read_statementContext, 0) as Read_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterReadStatement) {
	 		listener.enterReadStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitReadStatement) {
	 		listener.exitReadStatement(this);
		}
	}
}
export class MethodCallStatementContext extends StatementContext {
	public _stmt!: Method_call_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public method_call_statement(): Method_call_statementContext {
		return this.getTypedRuleContext(Method_call_statementContext, 0) as Method_call_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMethodCallStatement) {
	 		listener.enterMethodCallStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMethodCallStatement) {
	 		listener.exitMethodCallStatement(this);
		}
	}
}
export class ReturnStatementContext extends StatementContext {
	public _stmt!: Return_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public return_statement(): Return_statementContext {
		return this.getTypedRuleContext(Return_statementContext, 0) as Return_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
}
export class AssignTupleStatementContext extends StatementContext {
	public _stmt!: Assign_tuple_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public assign_tuple_statement(): Assign_tuple_statementContext {
		return this.getTypedRuleContext(Assign_tuple_statementContext, 0) as Assign_tuple_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAssignTupleStatement) {
	 		listener.enterAssignTupleStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAssignTupleStatement) {
	 		listener.exitAssignTupleStatement(this);
		}
	}
}
export class ClosureStatementContext extends StatementContext {
	public _decl!: Concrete_method_declarationContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public concrete_method_declaration(): Concrete_method_declarationContext {
		return this.getTypedRuleContext(Concrete_method_declarationContext, 0) as Concrete_method_declarationContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterClosureStatement) {
	 		listener.enterClosureStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitClosureStatement) {
	 		listener.exitClosureStatement(this);
		}
	}
}
export class FlushStatementContext extends StatementContext {
	public _stmt!: Flush_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public flush_statement(): Flush_statementContext {
		return this.getTypedRuleContext(Flush_statementContext, 0) as Flush_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterFlushStatement) {
	 		listener.enterFlushStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitFlushStatement) {
	 		listener.exitFlushStatement(this);
		}
	}
}
export class DoWhileStatementContext extends StatementContext {
	public _stmt!: Do_while_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public do_while_statement(): Do_while_statementContext {
		return this.getTypedRuleContext(Do_while_statementContext, 0) as Do_while_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDoWhileStatement) {
	 		listener.enterDoWhileStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDoWhileStatement) {
	 		listener.exitDoWhileStatement(this);
		}
	}
}
export class ForEachStatementContext extends StatementContext {
	public _stmt!: For_each_statementContext;
	constructor(parser: OParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public for_each_statement(): For_each_statementContext {
		return this.getTypedRuleContext(For_each_statementContext, 0) as For_each_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterForEachStatement) {
	 		listener.enterForEachStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitForEachStatement) {
	 		listener.exitForEachStatement(this);
		}
	}
}


export class Flush_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLUSH(): TerminalNode {
		return this.getToken(OParser.FLUSH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_flush_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterFlush_statement) {
	 		listener.enterFlush_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitFlush_statement) {
	 		listener.exitFlush_statement(this);
		}
	}
}


export class Store_statementContext extends ParserRuleContext {
	public _to_del!: Expression_listContext;
	public _to_add!: Expression_listContext;
	public _with_meta!: ExpressionContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELETE(): TerminalNode {
		return this.getToken(OParser.DELETE, 0);
	}
	public LPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LPAR);
	}
	public LPAR(i: number): TerminalNode {
		return this.getToken(OParser.LPAR, i);
	}
	public RPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.RPAR);
	}
	public RPAR(i: number): TerminalNode {
		return this.getToken(OParser.RPAR, i);
	}
	public STORE(): TerminalNode {
		return this.getToken(OParser.STORE, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public expression_list_list(): Expression_listContext[] {
		return this.getTypedRuleContexts(Expression_listContext) as Expression_listContext[];
	}
	public expression_list(i: number): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, i) as Expression_listContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(OParser.WITH, 0);
	}
	public metadata(): MetadataContext {
		return this.getTypedRuleContext(MetadataContext, 0) as MetadataContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(OParser.THEN, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(OParser.AND, 0);
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_store_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterStore_statement) {
	 		listener.enterStore_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitStore_statement) {
	 		listener.exitStore_statement(this);
		}
	}
}


export class With_resource_statementContext extends ParserRuleContext {
	public _stmt!: Assign_variable_statementContext;
	public _stmts!: Statement_or_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(OParser.WITH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public assign_variable_statement(): Assign_variable_statementContext {
		return this.getTypedRuleContext(Assign_variable_statementContext, 0) as Assign_variable_statementContext;
	}
	public statement_or_list(): Statement_or_listContext {
		return this.getTypedRuleContext(Statement_or_listContext, 0) as Statement_or_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_with_resource_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterWith_resource_statement) {
	 		listener.enterWith_resource_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitWith_resource_statement) {
	 		listener.exitWith_resource_statement(this);
		}
	}
}


export class With_singleton_statementContext extends ParserRuleContext {
	public _typ!: Type_identifierContext;
	public _stmts!: Statement_or_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(OParser.WITH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public statement_or_list(): Statement_or_listContext {
		return this.getTypedRuleContext(Statement_or_listContext, 0) as Statement_or_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_with_singleton_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterWith_singleton_statement) {
	 		listener.enterWith_singleton_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitWith_singleton_statement) {
	 		listener.exitWith_singleton_statement(this);
		}
	}
}


export class Switch_statementContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	public _cases!: Switch_case_statement_listContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SWITCH(): TerminalNode {
		return this.getToken(OParser.SWITCH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public switch_case_statement_list(): Switch_case_statement_listContext {
		return this.getTypedRuleContext(Switch_case_statement_listContext, 0) as Switch_case_statement_listContext;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(OParser.DEFAULT, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_switch_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSwitch_statement) {
	 		listener.enterSwitch_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSwitch_statement) {
	 		listener.exitSwitch_statement(this);
		}
	}
}


export class Switch_case_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_switch_case_statement;
	}
	public copyFrom(ctx: Switch_case_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class AtomicSwitchCaseContext extends Switch_case_statementContext {
	public _exp!: Atomic_literalContext;
	public _stmts!: Statement_listContext;
	constructor(parser: OParser, ctx: Switch_case_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE(): TerminalNode {
		return this.getToken(OParser.CASE, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public atomic_literal(): Atomic_literalContext {
		return this.getTypedRuleContext(Atomic_literalContext, 0) as Atomic_literalContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAtomicSwitchCase) {
	 		listener.enterAtomicSwitchCase(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAtomicSwitchCase) {
	 		listener.exitAtomicSwitchCase(this);
		}
	}
}
export class CollectionSwitchCaseContext extends Switch_case_statementContext {
	public _exp!: Literal_collectionContext;
	public _stmts!: Statement_listContext;
	constructor(parser: OParser, ctx: Switch_case_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CASE(): TerminalNode {
		return this.getToken(OParser.CASE, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(OParser.IN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public literal_collection(): Literal_collectionContext {
		return this.getTypedRuleContext(Literal_collectionContext, 0) as Literal_collectionContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCollectionSwitchCase) {
	 		listener.enterCollectionSwitchCase(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCollectionSwitchCase) {
	 		listener.exitCollectionSwitchCase(this);
		}
	}
}


export class For_each_statementContext extends ParserRuleContext {
	public _name1!: Variable_identifierContext;
	public _name2!: Variable_identifierContext;
	public _source!: ExpressionContext;
	public _stmts!: Statement_or_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(OParser.FOR, 0);
	}
	public EACH(): TerminalNode {
		return this.getToken(OParser.EACH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(OParser.IN, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public variable_identifier_list(): Variable_identifierContext[] {
		return this.getTypedRuleContexts(Variable_identifierContext) as Variable_identifierContext[];
	}
	public variable_identifier(i: number): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, i) as Variable_identifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_or_list(): Statement_or_listContext {
		return this.getTypedRuleContext(Statement_or_listContext, 0) as Statement_or_listContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(OParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_for_each_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterFor_each_statement) {
	 		listener.enterFor_each_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitFor_each_statement) {
	 		listener.exitFor_each_statement(this);
		}
	}
}


export class Do_while_statementContext extends ParserRuleContext {
	public _stmts!: Statement_listContext;
	public _exp!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DO(): TerminalNode {
		return this.getToken(OParser.DO, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public WHILE(): TerminalNode {
		return this.getToken(OParser.WHILE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_do_while_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDo_while_statement) {
	 		listener.enterDo_while_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDo_while_statement) {
	 		listener.exitDo_while_statement(this);
		}
	}
}


export class While_statementContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	public _stmts!: Statement_or_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(OParser.WHILE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_or_list(): Statement_or_listContext {
		return this.getTypedRuleContext(Statement_or_listContext, 0) as Statement_or_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_while_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterWhile_statement) {
	 		listener.enterWhile_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitWhile_statement) {
	 		listener.exitWhile_statement(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	public _stmts!: Statement_or_listContext;
	public _elseIfs!: Else_if_statement_listContext;
	public _elseStmts!: Statement_or_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(OParser.IF, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_or_list_list(): Statement_or_listContext[] {
		return this.getTypedRuleContexts(Statement_or_listContext) as Statement_or_listContext[];
	}
	public statement_or_list(i: number): Statement_or_listContext {
		return this.getTypedRuleContext(Statement_or_listContext, i) as Statement_or_listContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(OParser.ELSE, 0);
	}
	public else_if_statement_list(): Else_if_statement_listContext {
		return this.getTypedRuleContext(Else_if_statement_listContext, 0) as Else_if_statement_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_if_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIf_statement) {
	 		listener.enterIf_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIf_statement) {
	 		listener.exitIf_statement(this);
		}
	}
}


export class Else_if_statement_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_else_if_statement_list;
	}
	public copyFrom(ctx: Else_if_statement_listContext): void {
		super.copyFrom(ctx);
	}
}
export class ElseIfStatementListContext extends Else_if_statement_listContext {
	public _exp!: ExpressionContext;
	public _stmts!: Statement_or_listContext;
	constructor(parser: OParser, ctx: Else_if_statement_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ELSE(): TerminalNode {
		return this.getToken(OParser.ELSE, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(OParser.IF, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_or_list(): Statement_or_listContext {
		return this.getTypedRuleContext(Statement_or_listContext, 0) as Statement_or_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterElseIfStatementList) {
	 		listener.enterElseIfStatementList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitElseIfStatementList) {
	 		listener.exitElseIfStatementList(this);
		}
	}
}
export class ElseIfStatementListItemContext extends Else_if_statement_listContext {
	public _items!: Else_if_statement_listContext;
	public _exp!: ExpressionContext;
	public _stmts!: Statement_or_listContext;
	constructor(parser: OParser, ctx: Else_if_statement_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ELSE(): TerminalNode {
		return this.getToken(OParser.ELSE, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(OParser.IF, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public else_if_statement_list(): Else_if_statement_listContext {
		return this.getTypedRuleContext(Else_if_statement_listContext, 0) as Else_if_statement_listContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_or_list(): Statement_or_listContext {
		return this.getTypedRuleContext(Statement_or_listContext, 0) as Statement_or_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterElseIfStatementListItem) {
	 		listener.enterElseIfStatementListItem(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitElseIfStatementListItem) {
	 		listener.exitElseIfStatementListItem(this);
		}
	}
}


export class Raise_statementContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public THROW(): TerminalNode {
		return this.getToken(OParser.THROW, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_raise_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterRaise_statement) {
	 		listener.enterRaise_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitRaise_statement) {
	 		listener.exitRaise_statement(this);
		}
	}
}


export class Try_statementContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _stmts!: Statement_listContext;
	public _handlers!: Catch_statement_listContext;
	public _anyStmts!: Statement_listContext;
	public _finalStmts!: Statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(OParser.TRY, 0);
	}
	public LPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LPAR);
	}
	public LPAR(i: number): TerminalNode {
		return this.getToken(OParser.LPAR, i);
	}
	public RPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.RPAR);
	}
	public RPAR(i: number): TerminalNode {
		return this.getToken(OParser.RPAR, i);
	}
	public LCURL_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LCURL);
	}
	public LCURL(i: number): TerminalNode {
		return this.getToken(OParser.LCURL, i);
	}
	public RCURL_list(): TerminalNode[] {
	    	return this.getTokens(OParser.RCURL);
	}
	public RCURL(i: number): TerminalNode {
		return this.getToken(OParser.RCURL, i);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public CATCH(): TerminalNode {
		return this.getToken(OParser.CATCH, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(OParser.ANY, 0);
	}
	public FINALLY(): TerminalNode {
		return this.getToken(OParser.FINALLY, 0);
	}
	public statement_list_list(): Statement_listContext[] {
		return this.getTypedRuleContexts(Statement_listContext) as Statement_listContext[];
	}
	public statement_list(i: number): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, i) as Statement_listContext;
	}
	public catch_statement_list(): Catch_statement_listContext {
		return this.getTypedRuleContext(Catch_statement_listContext, 0) as Catch_statement_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_try_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTry_statement) {
	 		listener.enterTry_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTry_statement) {
	 		listener.exitTry_statement(this);
		}
	}
}


export class Catch_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_catch_statement;
	}
	public copyFrom(ctx: Catch_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class CatchAtomicStatementContext extends Catch_statementContext {
	public _name!: Symbol_identifierContext;
	public _stmts!: Statement_listContext;
	constructor(parser: OParser, ctx: Catch_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CATCH(): TerminalNode {
		return this.getToken(OParser.CATCH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCatchAtomicStatement) {
	 		listener.enterCatchAtomicStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCatchAtomicStatement) {
	 		listener.exitCatchAtomicStatement(this);
		}
	}
}
export class CatchCollectionStatementContext extends Catch_statementContext {
	public _exp!: Symbol_listContext;
	public _stmts!: Statement_listContext;
	constructor(parser: OParser, ctx: Catch_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CATCH(): TerminalNode {
		return this.getToken(OParser.CATCH, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(OParser.IN, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public symbol_list(): Symbol_listContext {
		return this.getTypedRuleContext(Symbol_listContext, 0) as Symbol_listContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCatchCollectionStatement) {
	 		listener.enterCatchCollectionStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCatchCollectionStatement) {
	 		listener.exitCatchCollectionStatement(this);
		}
	}
}


export class Break_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(OParser.BREAK, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_break_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterBreak_statement) {
	 		listener.enterBreak_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitBreak_statement) {
	 		listener.exitBreak_statement(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(OParser.RETURN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_return_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterReturn_statement) {
	 		listener.enterReturn_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitReturn_statement) {
	 		listener.exitReturn_statement(this);
		}
	}
}


export class Method_call_expressionContext extends ParserRuleContext {
	public _name!: Method_identifierContext;
	public _args!: Argument_assignment_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public method_identifier(): Method_identifierContext {
		return this.getTypedRuleContext(Method_identifierContext, 0) as Method_identifierContext;
	}
	public argument_assignment_list(): Argument_assignment_listContext {
		return this.getTypedRuleContext(Argument_assignment_listContext, 0) as Argument_assignment_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_method_call_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMethod_call_expression) {
	 		listener.enterMethod_call_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMethod_call_expression) {
	 		listener.exitMethod_call_expression(this);
		}
	}
}


export class Method_call_statementContext extends ParserRuleContext {
	public _parent!: Instance_expressionContext;
	public _method!: Method_call_expressionContext;
	public _name!: Variable_identifierContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public method_call_expression(): Method_call_expressionContext {
		return this.getTypedRuleContext(Method_call_expressionContext, 0) as Method_call_expressionContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public instance_expression(): Instance_expressionContext {
		return this.getTypedRuleContext(Instance_expressionContext, 0) as Instance_expressionContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(OParser.THEN, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(OParser.WITH, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_method_call_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMethod_call_statement) {
	 		listener.enterMethod_call_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMethod_call_statement) {
	 		listener.exitMethod_call_statement(this);
		}
	}
}


export class X_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public css_expression(): Css_expressionContext {
		return this.getTypedRuleContext(Css_expressionContext, 0) as Css_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_x_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterX_expression) {
	 		listener.enterX_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitX_expression) {
	 		listener.exitX_expression(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_expression;
	}
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IntDivideExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public idivide(): IdivideContext {
		return this.getTypedRuleContext(IdivideContext, 0) as IdivideContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIntDivideExpression) {
	 		listener.enterIntDivideExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIntDivideExpression) {
	 		listener.exitIntDivideExpression(this);
		}
	}
}
export class HasAnyExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: Filter_expressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HAS(): TerminalNode {
		return this.getToken(OParser.HAS, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(OParser.ANY, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public filter_expression(): Filter_expressionContext {
		return this.getTypedRuleContext(Filter_expressionContext, 0) as Filter_expressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(OParser.NOT, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterHasAnyExpression) {
	 		listener.enterHasAnyExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitHasAnyExpression) {
	 		listener.exitHasAnyExpression(this);
		}
	}
}
export class HasExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HAS(): TerminalNode {
		return this.getToken(OParser.HAS, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(OParser.NOT, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterHasExpression) {
	 		listener.enterHasExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitHasExpression) {
	 		listener.exitHasExpression(this);
		}
	}
}
export class TernaryExpressionContext extends ExpressionContext {
	public _test!: ExpressionContext;
	public _ifTrue!: ExpressionContext;
	public _ifFalse!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QMARK(): TerminalNode {
		return this.getToken(OParser.QMARK, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTernaryExpression) {
	 		listener.enterTernaryExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTernaryExpression) {
	 		listener.exitTernaryExpression(this);
		}
	}
}
export class InExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(OParser.IN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(OParser.NOT, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterInExpression) {
	 		listener.enterInExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitInExpression) {
	 		listener.exitInExpression(this);
		}
	}
}
export class IsAnExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: An_expressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IS(): TerminalNode {
		return this.getToken(OParser.IS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public an_expression(): An_expressionContext {
		return this.getTypedRuleContext(An_expressionContext, 0) as An_expressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(OParser.NOT, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIsAnExpression) {
	 		listener.enterIsAnExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIsAnExpression) {
	 		listener.exitIsAnExpression(this);
		}
	}
}
export class JsxExpressionContext extends ExpressionContext {
	public _exp!: Jsx_expressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public jsx_expression(): Jsx_expressionContext {
		return this.getTypedRuleContext(Jsx_expressionContext, 0) as Jsx_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsxExpression) {
	 		listener.enterJsxExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsxExpression) {
	 		listener.exitJsxExpression(this);
		}
	}
}
export class NotExpressionContext extends ExpressionContext {
	public _exp!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public XMARK(): TerminalNode {
		return this.getToken(OParser.XMARK, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNotExpression) {
	 		listener.enterNotExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNotExpression) {
	 		listener.exitNotExpression(this);
		}
	}
}
export class CompareExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public LTE(): TerminalNode {
		return this.getToken(OParser.LTE, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public GTE(): TerminalNode {
		return this.getToken(OParser.GTE, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCompareExpression) {
	 		listener.enterCompareExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCompareExpression) {
	 		listener.exitCompareExpression(this);
		}
	}
}
export class OrExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PIPE2(): TerminalNode {
		return this.getToken(OParser.PIPE2, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOrExpression) {
	 		listener.enterOrExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOrExpression) {
	 		listener.exitOrExpression(this);
		}
	}
}
export class CodeExpressionContext extends ExpressionContext {
	public _exp!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CODE(): TerminalNode {
		return this.getToken(OParser.CODE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCodeExpression) {
	 		listener.enterCodeExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCodeExpression) {
	 		listener.exitCodeExpression(this);
		}
	}
}
export class AndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AMP2(): TerminalNode {
		return this.getToken(OParser.AMP2, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAndExpression) {
	 		listener.enterAndExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAndExpression) {
	 		listener.exitAndExpression(this);
		}
	}
}
export class ArrowExpressionContext extends ExpressionContext {
	public _exp!: Arrow_expressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public arrow_expression(): Arrow_expressionContext {
		return this.getTypedRuleContext(Arrow_expressionContext, 0) as Arrow_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterArrowExpression) {
	 		listener.enterArrowExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitArrowExpression) {
	 		listener.exitArrowExpression(this);
		}
	}
}
export class ContainsExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONTAINS(): TerminalNode {
		return this.getToken(OParser.CONTAINS, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(OParser.NOT, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterContainsExpression) {
	 		listener.enterContainsExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitContainsExpression) {
	 		listener.exitContainsExpression(this);
		}
	}
}
export class TypeExpressionContext extends ExpressionContext {
	public _exp!: Type_expressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_expression(): Type_expressionContext {
		return this.getTypedRuleContext(Type_expressionContext, 0) as Type_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTypeExpression) {
	 		listener.enterTypeExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTypeExpression) {
	 		listener.exitTypeExpression(this);
		}
	}
}
export class MultiplyExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public multiply(): MultiplyContext {
		return this.getTypedRuleContext(MultiplyContext, 0) as MultiplyContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMultiplyExpression) {
	 		listener.enterMultiplyExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMultiplyExpression) {
	 		listener.exitMultiplyExpression(this);
		}
	}
}
export class ExecuteExpressionContext extends ExpressionContext {
	public _name!: Variable_identifierContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXECUTE(): TerminalNode {
		return this.getToken(OParser.EXECUTE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterExecuteExpression) {
	 		listener.enterExecuteExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitExecuteExpression) {
	 		listener.exitExecuteExpression(this);
		}
	}
}
export class IteratorExpressionContext extends ExpressionContext {
	public _exp!: ExpressionContext;
	public _name!: Variable_identifierContext;
	public _source!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FOR(): TerminalNode {
		return this.getToken(OParser.FOR, 0);
	}
	public EACH(): TerminalNode {
		return this.getToken(OParser.EACH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(OParser.IN, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIteratorExpression) {
	 		listener.enterIteratorExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIteratorExpression) {
	 		listener.exitIteratorExpression(this);
		}
	}
}
export class DivideExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public divide(): DivideContext {
		return this.getTypedRuleContext(DivideContext, 0) as DivideContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDivideExpression) {
	 		listener.enterDivideExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDivideExpression) {
	 		listener.exitDivideExpression(this);
		}
	}
}
export class IsExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IS(): TerminalNode {
		return this.getToken(OParser.IS, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(OParser.NOT, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIsExpression) {
	 		listener.enterIsExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIsExpression) {
	 		listener.exitIsExpression(this);
		}
	}
}
export class MinusExpressionContext extends ExpressionContext {
	public _exp!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MINUS(): TerminalNode {
		return this.getToken(OParser.MINUS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMinusExpression) {
	 		listener.enterMinusExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMinusExpression) {
	 		listener.exitMinusExpression(this);
		}
	}
}
export class AddExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(OParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(OParser.MINUS, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAddExpression) {
	 		listener.enterAddExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAddExpression) {
	 		listener.exitAddExpression(this);
		}
	}
}
export class HasAllExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: Filter_expressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HAS(): TerminalNode {
		return this.getToken(OParser.HAS, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(OParser.ALL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public filter_expression(): Filter_expressionContext {
		return this.getTypedRuleContext(Filter_expressionContext, 0) as Filter_expressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(OParser.NOT, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterHasAllExpression) {
	 		listener.enterHasAllExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitHasAllExpression) {
	 		listener.exitHasAllExpression(this);
		}
	}
}
export class InstanceExpressionContext extends ExpressionContext {
	public _exp!: Instance_expressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public instance_expression(): Instance_expressionContext {
		return this.getTypedRuleContext(Instance_expressionContext, 0) as Instance_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterInstanceExpression) {
	 		listener.enterInstanceExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitInstanceExpression) {
	 		listener.exitInstanceExpression(this);
		}
	}
}
export class MutableInstanceExpressionContext extends ExpressionContext {
	public _exp!: Mutable_instance_expressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public mutable_instance_expression(): Mutable_instance_expressionContext {
		return this.getTypedRuleContext(Mutable_instance_expressionContext, 0) as Mutable_instance_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMutableInstanceExpression) {
	 		listener.enterMutableInstanceExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMutableInstanceExpression) {
	 		listener.exitMutableInstanceExpression(this);
		}
	}
}
export class CssExpressionContext extends ExpressionContext {
	public _exp!: Css_expressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public css_expression(): Css_expressionContext {
		return this.getTypedRuleContext(Css_expressionContext, 0) as Css_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCssExpression) {
	 		listener.enterCssExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCssExpression) {
	 		listener.exitCssExpression(this);
		}
	}
}
export class CastExpressionContext extends ExpressionContext {
	public _right!: Category_or_any_typeContext;
	public _left!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public category_or_any_type(): Category_or_any_typeContext {
		return this.getTypedRuleContext(Category_or_any_typeContext, 0) as Category_or_any_typeContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCastExpression) {
	 		listener.enterCastExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCastExpression) {
	 		listener.exitCastExpression(this);
		}
	}
}
export class ModuloExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public modulo(): ModuloContext {
		return this.getTypedRuleContext(ModuloContext, 0) as ModuloContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterModuloExpression) {
	 		listener.enterModuloExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitModuloExpression) {
	 		listener.exitModuloExpression(this);
		}
	}
}
export class EqualsExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: OParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public EQ2(): TerminalNode {
		return this.getToken(OParser.EQ2, 0);
	}
	public XEQ(): TerminalNode {
		return this.getToken(OParser.XEQ, 0);
	}
	public TEQ(): TerminalNode {
		return this.getToken(OParser.TEQ, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterEqualsExpression) {
	 		listener.enterEqualsExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitEqualsExpression) {
	 		listener.exitEqualsExpression(this);
		}
	}
}


export class Filter_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_filter_expression;
	}
	public copyFrom(ctx: Filter_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExplicitFilterExpressionContext extends Filter_expressionContext {
	constructor(parser: OParser, ctx: Filter_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LPAR);
	}
	public LPAR(i: number): TerminalNode {
		return this.getToken(OParser.LPAR, i);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public RPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.RPAR);
	}
	public RPAR(i: number): TerminalNode {
		return this.getToken(OParser.RPAR, i);
	}
	public WHERE(): TerminalNode {
		return this.getToken(OParser.WHERE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterExplicitFilterExpression) {
	 		listener.enterExplicitFilterExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitExplicitFilterExpression) {
	 		listener.exitExplicitFilterExpression(this);
		}
	}
}
export class OtherFilterExpressionContext extends Filter_expressionContext {
	constructor(parser: OParser, ctx: Filter_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOtherFilterExpression) {
	 		listener.enterOtherFilterExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOtherFilterExpression) {
	 		listener.exitOtherFilterExpression(this);
		}
	}
}
export class ArrowFilterExpressionContext extends Filter_expressionContext {
	constructor(parser: OParser, ctx: Filter_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHERE(): TerminalNode {
		return this.getToken(OParser.WHERE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public arrow_expression(): Arrow_expressionContext {
		return this.getTypedRuleContext(Arrow_expressionContext, 0) as Arrow_expressionContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterArrowFilterExpression) {
	 		listener.enterArrowFilterExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitArrowFilterExpression) {
	 		listener.exitArrowFilterExpression(this);
		}
	}
}


export class An_expressionContext extends ParserRuleContext {
	public _typ!: Category_or_any_typeContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
	public category_or_any_type(): Category_or_any_typeContext {
		return this.getTypedRuleContext(Category_or_any_typeContext, 0) as Category_or_any_typeContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_an_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAn_expression) {
	 		listener.enterAn_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAn_expression) {
	 		listener.exitAn_expression(this);
		}
	}
}


export class Type_expressionContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_type_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterType_expression) {
	 		listener.enterType_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitType_expression) {
	 		listener.exitType_expression(this);
		}
	}
}


export class Selectable_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_selectable_expression;
	}
	public copyFrom(ctx: Selectable_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ThisExpressionContext extends Selectable_expressionContext {
	public _exp!: This_expressionContext;
	constructor(parser: OParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public this_expression(): This_expressionContext {
		return this.getTypedRuleContext(This_expressionContext, 0) as This_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterThisExpression) {
	 		listener.enterThisExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitThisExpression) {
	 		listener.exitThisExpression(this);
		}
	}
}
export class ParenthesisExpressionContext extends Selectable_expressionContext {
	public _exp!: Parenthesis_expressionContext;
	constructor(parser: OParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public parenthesis_expression(): Parenthesis_expressionContext {
		return this.getTypedRuleContext(Parenthesis_expressionContext, 0) as Parenthesis_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterParenthesisExpression) {
	 		listener.enterParenthesisExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitParenthesisExpression) {
	 		listener.exitParenthesisExpression(this);
		}
	}
}
export class LiteralExpressionContext extends Selectable_expressionContext {
	public _exp!: Literal_expressionContext;
	constructor(parser: OParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterLiteralExpression) {
	 		listener.enterLiteralExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitLiteralExpression) {
	 		listener.exitLiteralExpression(this);
		}
	}
}
export class MethodExpressionContext extends Selectable_expressionContext {
	public _exp!: Method_expressionContext;
	constructor(parser: OParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public method_expression(): Method_expressionContext {
		return this.getTypedRuleContext(Method_expressionContext, 0) as Method_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMethodExpression) {
	 		listener.enterMethodExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMethodExpression) {
	 		listener.exitMethodExpression(this);
		}
	}
}
export class SuperExpressionContext extends Selectable_expressionContext {
	public _exp!: Super_expressionContext;
	constructor(parser: OParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public super_expression(): Super_expressionContext {
		return this.getTypedRuleContext(Super_expressionContext, 0) as Super_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSuperExpression) {
	 		listener.enterSuperExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSuperExpression) {
	 		listener.exitSuperExpression(this);
		}
	}
}
export class IdentifierExpressionContext extends Selectable_expressionContext {
	public _exp!: IdentifierContext;
	constructor(parser: OParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIdentifierExpression) {
	 		listener.enterIdentifierExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIdentifierExpression) {
	 		listener.exitIdentifierExpression(this);
		}
	}
}


export class Instance_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_instance_expression;
	}
	public copyFrom(ctx: Instance_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectorExpressionContext extends Instance_expressionContext {
	public _parent!: Instance_expressionContext;
	public _selector!: Instance_selectorContext;
	constructor(parser: OParser, ctx: Instance_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public instance_expression(): Instance_expressionContext {
		return this.getTypedRuleContext(Instance_expressionContext, 0) as Instance_expressionContext;
	}
	public instance_selector(): Instance_selectorContext {
		return this.getTypedRuleContext(Instance_selectorContext, 0) as Instance_selectorContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSelectorExpression) {
	 		listener.enterSelectorExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSelectorExpression) {
	 		listener.exitSelectorExpression(this);
		}
	}
}
export class SelectableExpressionContext extends Instance_expressionContext {
	public _parent!: Selectable_expressionContext;
	constructor(parser: OParser, ctx: Instance_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public selectable_expression(): Selectable_expressionContext {
		return this.getTypedRuleContext(Selectable_expressionContext, 0) as Selectable_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSelectableExpression) {
	 		listener.enterSelectableExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSelectableExpression) {
	 		listener.exitSelectableExpression(this);
		}
	}
}


export class Mutable_instance_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_mutable_instance_expression;
	}
	public copyFrom(ctx: Mutable_instance_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MutableSelectableExpressionContext extends Mutable_instance_expressionContext {
	public _exp!: IdentifierContext;
	constructor(parser: OParser, ctx: Mutable_instance_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMutableSelectableExpression) {
	 		listener.enterMutableSelectableExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMutableSelectableExpression) {
	 		listener.exitMutableSelectableExpression(this);
		}
	}
}
export class MutableSelectorExpressionContext extends Mutable_instance_expressionContext {
	public _parent!: Mutable_instance_expressionContext;
	public _selector!: Instance_selectorContext;
	constructor(parser: OParser, ctx: Mutable_instance_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public mutable_instance_expression(): Mutable_instance_expressionContext {
		return this.getTypedRuleContext(Mutable_instance_expressionContext, 0) as Mutable_instance_expressionContext;
	}
	public instance_selector(): Instance_selectorContext {
		return this.getTypedRuleContext(Instance_selectorContext, 0) as Instance_selectorContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMutableSelectorExpression) {
	 		listener.enterMutableSelectorExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMutableSelectorExpression) {
	 		listener.exitMutableSelectorExpression(this);
		}
	}
}


export class Method_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blob_expression(): Blob_expressionContext {
		return this.getTypedRuleContext(Blob_expressionContext, 0) as Blob_expressionContext;
	}
	public document_expression(): Document_expressionContext {
		return this.getTypedRuleContext(Document_expressionContext, 0) as Document_expressionContext;
	}
	public filtered_list_expression(): Filtered_list_expressionContext {
		return this.getTypedRuleContext(Filtered_list_expressionContext, 0) as Filtered_list_expressionContext;
	}
	public fetch_expression(): Fetch_expressionContext {
		return this.getTypedRuleContext(Fetch_expressionContext, 0) as Fetch_expressionContext;
	}
	public read_blob_expression(): Read_blob_expressionContext {
		return this.getTypedRuleContext(Read_blob_expressionContext, 0) as Read_blob_expressionContext;
	}
	public read_all_expression(): Read_all_expressionContext {
		return this.getTypedRuleContext(Read_all_expressionContext, 0) as Read_all_expressionContext;
	}
	public read_one_expression(): Read_one_expressionContext {
		return this.getTypedRuleContext(Read_one_expressionContext, 0) as Read_one_expressionContext;
	}
	public sorted_expression(): Sorted_expressionContext {
		return this.getTypedRuleContext(Sorted_expressionContext, 0) as Sorted_expressionContext;
	}
	public method_call_expression(): Method_call_expressionContext {
		return this.getTypedRuleContext(Method_call_expressionContext, 0) as Method_call_expressionContext;
	}
	public constructor_expression(): Constructor_expressionContext {
		return this.getTypedRuleContext(Constructor_expressionContext, 0) as Constructor_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_method_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMethod_expression) {
	 		listener.enterMethod_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMethod_expression) {
	 		listener.exitMethod_expression(this);
		}
	}
}


export class Blob_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BLOB(): TerminalNode {
		return this.getToken(OParser.BLOB, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_blob_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterBlob_expression) {
	 		listener.enterBlob_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitBlob_expression) {
	 		listener.exitBlob_expression(this);
		}
	}
}


export class Document_expressionContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOCUMENT(): TerminalNode {
		return this.getToken(OParser.DOCUMENT, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(OParser.FROM, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(OParser.EQ, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_document_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDocument_expression) {
	 		listener.enterDocument_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDocument_expression) {
	 		listener.exitDocument_expression(this);
		}
	}
}


export class Write_statementContext extends ParserRuleContext {
	public _what!: ExpressionContext;
	public _target!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WRITE(): TerminalNode {
		return this.getToken(OParser.WRITE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(OParser.TO, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public then(): ThenContext {
		return this.getTypedRuleContext(ThenContext, 0) as ThenContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_write_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterWrite_statement) {
	 		listener.enterWrite_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitWrite_statement) {
	 		listener.exitWrite_statement(this);
		}
	}
}


export class Filtered_list_expressionContext extends ParserRuleContext {
	public _source!: ExpressionContext;
	public _name!: Variable_identifierContext;
	public _predicate!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FILTERED(): TerminalNode {
		return this.getToken(OParser.FILTERED, 0);
	}
	public LPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LPAR);
	}
	public LPAR(i: number): TerminalNode {
		return this.getToken(OParser.LPAR, i);
	}
	public RPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.RPAR);
	}
	public RPAR(i: number): TerminalNode {
		return this.getToken(OParser.RPAR, i);
	}
	public WHERE(): TerminalNode {
		return this.getToken(OParser.WHERE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(OParser.WITH, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_filtered_list_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterFiltered_list_expression) {
	 		listener.enterFiltered_list_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitFiltered_list_expression) {
	 		listener.exitFiltered_list_expression(this);
		}
	}
}


export class Fetch_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_fetch_expression;
	}
	public copyFrom(ctx: Fetch_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FetchOneContext extends Fetch_expressionContext {
	public _typ!: Mutable_category_typeContext;
	public _predicate!: ExpressionContext;
	public _include!: Include_listContext;
	constructor(parser: OParser, ctx: Fetch_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FETCH(): TerminalNode {
		return this.getToken(OParser.FETCH, 0);
	}
	public ONE(): TerminalNode {
		return this.getToken(OParser.ONE, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(OParser.WHERE, 0);
	}
	public LPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LPAR);
	}
	public LPAR(i: number): TerminalNode {
		return this.getToken(OParser.LPAR, i);
	}
	public RPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.RPAR);
	}
	public RPAR(i: number): TerminalNode {
		return this.getToken(OParser.RPAR, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public INCLUDE(): TerminalNode {
		return this.getToken(OParser.INCLUDE, 0);
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public include_list(): Include_listContext {
		return this.getTypedRuleContext(Include_listContext, 0) as Include_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterFetchOne) {
	 		listener.enterFetchOne(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitFetchOne) {
	 		listener.exitFetchOne(this);
		}
	}
}
export class FetchManyContext extends Fetch_expressionContext {
	public _typ!: Mutable_category_typeContext;
	public _xstart!: ExpressionContext;
	public _xstop!: ExpressionContext;
	public _predicate!: ExpressionContext;
	public _include!: Include_listContext;
	public _orderby!: Order_by_listContext;
	constructor(parser: OParser, ctx: Fetch_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FETCH(): TerminalNode {
		return this.getToken(OParser.FETCH, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(OParser.WHERE, 0);
	}
	public LPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LPAR);
	}
	public LPAR(i: number): TerminalNode {
		return this.getToken(OParser.LPAR, i);
	}
	public RPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.RPAR);
	}
	public RPAR(i: number): TerminalNode {
		return this.getToken(OParser.RPAR, i);
	}
	public INCLUDE(): TerminalNode {
		return this.getToken(OParser.INCLUDE, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(OParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(OParser.BY, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(OParser.ALL, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(OParser.ROWS, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(OParser.TO, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public include_list(): Include_listContext {
		return this.getTypedRuleContext(Include_listContext, 0) as Include_listContext;
	}
	public order_by_list(): Order_by_listContext {
		return this.getTypedRuleContext(Order_by_listContext, 0) as Order_by_listContext;
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterFetchMany) {
	 		listener.enterFetchMany(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitFetchMany) {
	 		listener.exitFetchMany(this);
		}
	}
}


export class Fetch_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_fetch_statement;
	}
	public copyFrom(ctx: Fetch_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class FetchManyAsyncContext extends Fetch_statementContext {
	public _typ!: Mutable_category_typeContext;
	public _xstart!: ExpressionContext;
	public _xstop!: ExpressionContext;
	public _predicate!: ExpressionContext;
	public _include!: Include_listContext;
	public _orderby!: Order_by_listContext;
	constructor(parser: OParser, ctx: Fetch_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FETCH(): TerminalNode {
		return this.getToken(OParser.FETCH, 0);
	}
	public then(): ThenContext {
		return this.getTypedRuleContext(ThenContext, 0) as ThenContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(OParser.WHERE, 0);
	}
	public LPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LPAR);
	}
	public LPAR(i: number): TerminalNode {
		return this.getToken(OParser.LPAR, i);
	}
	public RPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.RPAR);
	}
	public RPAR(i: number): TerminalNode {
		return this.getToken(OParser.RPAR, i);
	}
	public INCLUDE(): TerminalNode {
		return this.getToken(OParser.INCLUDE, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(OParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(OParser.BY, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(OParser.ALL, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(OParser.ROWS, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(OParser.TO, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public include_list(): Include_listContext {
		return this.getTypedRuleContext(Include_listContext, 0) as Include_listContext;
	}
	public order_by_list(): Order_by_listContext {
		return this.getTypedRuleContext(Order_by_listContext, 0) as Order_by_listContext;
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterFetchManyAsync) {
	 		listener.enterFetchManyAsync(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitFetchManyAsync) {
	 		listener.exitFetchManyAsync(this);
		}
	}
}
export class FetchOneAsyncContext extends Fetch_statementContext {
	public _typ!: Mutable_category_typeContext;
	public _predicate!: ExpressionContext;
	public _include!: Include_listContext;
	constructor(parser: OParser, ctx: Fetch_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FETCH(): TerminalNode {
		return this.getToken(OParser.FETCH, 0);
	}
	public ONE(): TerminalNode {
		return this.getToken(OParser.ONE, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(OParser.WHERE, 0);
	}
	public LPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LPAR);
	}
	public LPAR(i: number): TerminalNode {
		return this.getToken(OParser.LPAR, i);
	}
	public RPAR_list(): TerminalNode[] {
	    	return this.getTokens(OParser.RPAR);
	}
	public RPAR(i: number): TerminalNode {
		return this.getToken(OParser.RPAR, i);
	}
	public then(): ThenContext {
		return this.getTypedRuleContext(ThenContext, 0) as ThenContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public INCLUDE(): TerminalNode {
		return this.getToken(OParser.INCLUDE, 0);
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public include_list(): Include_listContext {
		return this.getTypedRuleContext(Include_listContext, 0) as Include_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterFetchOneAsync) {
	 		listener.enterFetchOneAsync(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitFetchOneAsync) {
	 		listener.exitFetchOneAsync(this);
		}
	}
}


export class ThenContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public THEN(): TerminalNode {
		return this.getToken(OParser.THEN, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(OParser.WITH, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_then;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterThen) {
	 		listener.enterThen(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitThen) {
	 		listener.exitThen(this);
		}
	}
}


export class Read_statementContext extends ParserRuleContext {
	public _source!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public READ(): TerminalNode {
		return this.getToken(OParser.READ, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(OParser.ALL, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(OParser.FROM, 0);
	}
	public then(): ThenContext {
		return this.getTypedRuleContext(ThenContext, 0) as ThenContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_read_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterRead_statement) {
	 		listener.enterRead_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitRead_statement) {
	 		listener.exitRead_statement(this);
		}
	}
}


export class Sorted_expressionContext extends ParserRuleContext {
	public _source!: Instance_expressionContext;
	public _key!: Sorted_keyContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SORTED(): TerminalNode {
		return this.getToken(OParser.SORTED, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public instance_expression(): Instance_expressionContext {
		return this.getTypedRuleContext(Instance_expressionContext, 0) as Instance_expressionContext;
	}
	public DESC(): TerminalNode {
		return this.getToken(OParser.DESC, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(OParser.COMMA, 0);
	}
	public key_token(): Key_tokenContext {
		return this.getTypedRuleContext(Key_tokenContext, 0) as Key_tokenContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(OParser.EQ, 0);
	}
	public sorted_key(): Sorted_keyContext {
		return this.getTypedRuleContext(Sorted_keyContext, 0) as Sorted_keyContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_sorted_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSorted_expression) {
	 		listener.enterSorted_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSorted_expression) {
	 		listener.exitSorted_expression(this);
		}
	}
}


export class Instance_selectorContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_instance_selector;
	}
	public copyFrom(ctx: Instance_selectorContext): void {
		super.copyFrom(ctx);
	}
}
export class SliceSelectorContext extends Instance_selectorContext {
	public _xslice!: Slice_argumentsContext;
	constructor(parser: OParser, ctx: Instance_selectorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public slice_arguments(): Slice_argumentsContext {
		return this.getTypedRuleContext(Slice_argumentsContext, 0) as Slice_argumentsContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSliceSelector) {
	 		listener.enterSliceSelector(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSliceSelector) {
	 		listener.exitSliceSelector(this);
		}
	}
}
export class MethodSelectorContext extends Instance_selectorContext {
	public _method!: Method_call_expressionContext;
	constructor(parser: OParser, ctx: Instance_selectorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public method_call_expression(): Method_call_expressionContext {
		return this.getTypedRuleContext(Method_call_expressionContext, 0) as Method_call_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMethodSelector) {
	 		listener.enterMethodSelector(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMethodSelector) {
	 		listener.exitMethodSelector(this);
		}
	}
}
export class MemberSelectorContext extends Instance_selectorContext {
	public _name!: Member_identifierContext;
	constructor(parser: OParser, ctx: Instance_selectorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public member_identifier(): Member_identifierContext {
		return this.getTypedRuleContext(Member_identifierContext, 0) as Member_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMemberSelector) {
	 		listener.enterMemberSelector(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMemberSelector) {
	 		listener.exitMemberSelector(this);
		}
	}
}
export class ItemSelectorContext extends Instance_selectorContext {
	public _exp!: ExpressionContext;
	constructor(parser: OParser, ctx: Instance_selectorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterItemSelector) {
	 		listener.enterItemSelector(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitItemSelector) {
	 		listener.exitItemSelector(this);
		}
	}
}


export class Constructor_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_constructor_expression;
	}
	public copyFrom(ctx: Constructor_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ConstructorFromContext extends Constructor_expressionContext {
	public _typ!: Mutable_category_typeContext;
	public _copyExp!: Copy_fromContext;
	public _args!: Argument_assignment_listContext;
	constructor(parser: OParser, ctx: Constructor_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public copy_from(): Copy_fromContext {
		return this.getTypedRuleContext(Copy_fromContext, 0) as Copy_fromContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(OParser.COMMA, 0);
	}
	public argument_assignment_list(): Argument_assignment_listContext {
		return this.getTypedRuleContext(Argument_assignment_listContext, 0) as Argument_assignment_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterConstructorFrom) {
	 		listener.enterConstructorFrom(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitConstructorFrom) {
	 		listener.exitConstructorFrom(this);
		}
	}
}
export class ConstructorNoFromContext extends Constructor_expressionContext {
	public _typ!: Mutable_category_typeContext;
	public _args!: Argument_assignment_listContext;
	constructor(parser: OParser, ctx: Constructor_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public argument_assignment_list(): Argument_assignment_listContext {
		return this.getTypedRuleContext(Argument_assignment_listContext, 0) as Argument_assignment_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterConstructorNoFrom) {
	 		listener.enterConstructorNoFrom(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitConstructorNoFrom) {
	 		listener.exitConstructorNoFrom(this);
		}
	}
}


export class Copy_fromContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(OParser.FROM, 0);
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_copy_from;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCopy_from) {
	 		listener.enterCopy_from(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCopy_from) {
	 		listener.exitCopy_from(this);
		}
	}
}


export class Argument_assignment_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_argument_assignment_list;
	}
	public copyFrom(ctx: Argument_assignment_listContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionAssignmentListContext extends Argument_assignment_listContext {
	public _exp!: ExpressionContext;
	constructor(parser: OParser, ctx: Argument_assignment_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterExpressionAssignmentList) {
	 		listener.enterExpressionAssignmentList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitExpressionAssignmentList) {
	 		listener.exitExpressionAssignmentList(this);
		}
	}
}
export class ArgumentAssignmentListContext extends Argument_assignment_listContext {
	public _item!: Argument_assignmentContext;
	constructor(parser: OParser, ctx: Argument_assignment_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public argument_assignment(): Argument_assignmentContext {
		return this.getTypedRuleContext(Argument_assignmentContext, 0) as Argument_assignmentContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterArgumentAssignmentList) {
	 		listener.enterArgumentAssignmentList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitArgumentAssignmentList) {
	 		listener.exitArgumentAssignmentList(this);
		}
	}
}
export class ArgumentAssignmentListItemContext extends Argument_assignment_listContext {
	public _items!: Argument_assignment_listContext;
	public _item!: Argument_assignmentContext;
	constructor(parser: OParser, ctx: Argument_assignment_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(OParser.COMMA, 0);
	}
	public argument_assignment_list(): Argument_assignment_listContext {
		return this.getTypedRuleContext(Argument_assignment_listContext, 0) as Argument_assignment_listContext;
	}
	public argument_assignment(): Argument_assignmentContext {
		return this.getTypedRuleContext(Argument_assignmentContext, 0) as Argument_assignmentContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterArgumentAssignmentListItem) {
	 		listener.enterArgumentAssignmentListItem(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitArgumentAssignmentListItem) {
	 		listener.exitArgumentAssignmentListItem(this);
		}
	}
}


export class Argument_assignmentContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _exp!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_argument_assignment;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterArgument_assignment) {
	 		listener.enterArgument_assignment(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitArgument_assignment) {
	 		listener.exitArgument_assignment(this);
		}
	}
}


export class Assign_instance_statementContext extends ParserRuleContext {
	public _inst!: Assignable_instanceContext;
	public _exp!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public assignable_instance(): Assignable_instanceContext {
		return this.getTypedRuleContext(Assignable_instanceContext, 0) as Assignable_instanceContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_assign_instance_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAssign_instance_statement) {
	 		listener.enterAssign_instance_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAssign_instance_statement) {
	 		listener.exitAssign_instance_statement(this);
		}
	}
}


export class Child_instanceContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_child_instance;
	}
	public copyFrom(ctx: Child_instanceContext): void {
		super.copyFrom(ctx);
	}
}
export class MemberInstanceContext extends Child_instanceContext {
	public _name!: Variable_identifierContext;
	constructor(parser: OParser, ctx: Child_instanceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMemberInstance) {
	 		listener.enterMemberInstance(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMemberInstance) {
	 		listener.exitMemberInstance(this);
		}
	}
}
export class ItemInstanceContext extends Child_instanceContext {
	public _exp!: ExpressionContext;
	constructor(parser: OParser, ctx: Child_instanceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterItemInstance) {
	 		listener.enterItemInstance(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitItemInstance) {
	 		listener.exitItemInstance(this);
		}
	}
}


export class Assign_tuple_statementContext extends ParserRuleContext {
	public _items!: Variable_identifier_listContext;
	public _exp!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public variable_identifier_list(): Variable_identifier_listContext {
		return this.getTypedRuleContext(Variable_identifier_listContext, 0) as Variable_identifier_listContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_assign_tuple_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAssign_tuple_statement) {
	 		listener.enterAssign_tuple_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAssign_tuple_statement) {
	 		listener.exitAssign_tuple_statement(this);
		}
	}
}


export class Type_literalContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public category_or_any_type(): Category_or_any_typeContext {
		return this.getTypedRuleContext(Category_or_any_typeContext, 0) as Category_or_any_typeContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_type_literal;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterType_literal) {
	 		listener.enterType_literal(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitType_literal) {
	 		listener.exitType_literal(this);
		}
	}
}


export class Null_literalContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULL(): TerminalNode {
		return this.getToken(OParser.NULL, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_null_literal;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNull_literal) {
	 		listener.enterNull_literal(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNull_literal) {
	 		listener.exitNull_literal(this);
		}
	}
}


export class Ws_plusContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LF_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LF);
	}
	public LF(i: number): TerminalNode {
		return this.getToken(OParser.LF, i);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(OParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(OParser.WS, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_ws_plus;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterWs_plus) {
	 		listener.enterWs_plus(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitWs_plus) {
	 		listener.exitWs_plus(this);
		}
	}
}


export class ReplContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_repl;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterRepl) {
	 		listener.enterRepl(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitRepl) {
	 		listener.exitRepl(this);
		}
	}
}


export class Declaration_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_declaration_list;
	}
	public copyFrom(ctx: Declaration_listContext): void {
		super.copyFrom(ctx);
	}
}
export class FullDeclarationListContext extends Declaration_listContext {
	constructor(parser: OParser, ctx: Declaration_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lfs_list(): LfsContext[] {
		return this.getTypedRuleContexts(LfsContext) as LfsContext[];
	}
	public lfs(i: number): LfsContext {
		return this.getTypedRuleContext(LfsContext, i) as LfsContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(OParser.EOF, 0);
	}
	public declarations(): DeclarationsContext {
		return this.getTypedRuleContext(DeclarationsContext, 0) as DeclarationsContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterFullDeclarationList) {
	 		listener.enterFullDeclarationList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitFullDeclarationList) {
	 		listener.exitFullDeclarationList(this);
		}
	}
}


export class DeclarationsContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaration_list(): DeclarationContext[] {
		return this.getTypedRuleContexts(DeclarationContext) as DeclarationContext[];
	}
	public declaration(i: number): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, i) as DeclarationContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_declarations;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDeclarations) {
	 		listener.enterDeclarations(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDeclarations) {
	 		listener.exitDeclarations(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attribute_declaration(): Attribute_declarationContext {
		return this.getTypedRuleContext(Attribute_declarationContext, 0) as Attribute_declarationContext;
	}
	public category_declaration(): Category_declarationContext {
		return this.getTypedRuleContext(Category_declarationContext, 0) as Category_declarationContext;
	}
	public resource_declaration(): Resource_declarationContext {
		return this.getTypedRuleContext(Resource_declarationContext, 0) as Resource_declarationContext;
	}
	public enum_declaration(): Enum_declarationContext {
		return this.getTypedRuleContext(Enum_declarationContext, 0) as Enum_declarationContext;
	}
	public widget_declaration(): Widget_declarationContext {
		return this.getTypedRuleContext(Widget_declarationContext, 0) as Widget_declarationContext;
	}
	public method_declaration(): Method_declarationContext {
		return this.getTypedRuleContext(Method_declarationContext, 0) as Method_declarationContext;
	}
	public comment_statement_list(): Comment_statementContext[] {
		return this.getTypedRuleContexts(Comment_statementContext) as Comment_statementContext[];
	}
	public comment_statement(i: number): Comment_statementContext {
		return this.getTypedRuleContext(Comment_statementContext, i) as Comment_statementContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
	public annotation_constructor_list(): Annotation_constructorContext[] {
		return this.getTypedRuleContexts(Annotation_constructorContext) as Annotation_constructorContext[];
	}
	public annotation_constructor(i: number): Annotation_constructorContext {
		return this.getTypedRuleContext(Annotation_constructorContext, i) as Annotation_constructorContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDeclaration) {
	 		listener.enterDeclaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDeclaration) {
	 		listener.exitDeclaration(this);
		}
	}
}


export class Annotation_constructorContext extends ParserRuleContext {
	public _name!: Annotation_identifierContext;
	public _exp!: Annotation_argument_valueContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation_identifier(): Annotation_identifierContext {
		return this.getTypedRuleContext(Annotation_identifierContext, 0) as Annotation_identifierContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public annotation_argument_value(): Annotation_argument_valueContext {
		return this.getTypedRuleContext(Annotation_argument_valueContext, 0) as Annotation_argument_valueContext;
	}
	public annotation_argument_list(): Annotation_argumentContext[] {
		return this.getTypedRuleContexts(Annotation_argumentContext) as Annotation_argumentContext[];
	}
	public annotation_argument(i: number): Annotation_argumentContext {
		return this.getTypedRuleContext(Annotation_argumentContext, i) as Annotation_argumentContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_annotation_constructor;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAnnotation_constructor) {
	 		listener.enterAnnotation_constructor(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAnnotation_constructor) {
	 		listener.exitAnnotation_constructor(this);
		}
	}
}


export class Annotation_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ARONDBASE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.ARONDBASE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_annotation_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAnnotation_identifier) {
	 		listener.enterAnnotation_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAnnotation_identifier) {
	 		listener.exitAnnotation_identifier(this);
		}
	}
}


export class Annotation_argumentContext extends ParserRuleContext {
	public _name!: Annotation_argument_nameContext;
	public _exp!: Annotation_argument_valueContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(OParser.EQ, 0);
	}
	public annotation_argument_name(): Annotation_argument_nameContext {
		return this.getTypedRuleContext(Annotation_argument_nameContext, 0) as Annotation_argument_nameContext;
	}
	public annotation_argument_value(): Annotation_argument_valueContext {
		return this.getTypedRuleContext(Annotation_argument_valueContext, 0) as Annotation_argument_valueContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_annotation_argument;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAnnotation_argument) {
	 		listener.enterAnnotation_argument(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAnnotation_argument) {
	 		listener.exitAnnotation_argument(this);
		}
	}
}


export class Annotation_argument_nameContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
	public GETTER(): TerminalNode {
		return this.getToken(OParser.GETTER, 0);
	}
	public SETTER(): TerminalNode {
		return this.getToken(OParser.SETTER, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_annotation_argument_name;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAnnotation_argument_name) {
	 		listener.enterAnnotation_argument_name(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAnnotation_argument_name) {
	 		listener.exitAnnotation_argument_name(this);
		}
	}
}


export class Annotation_argument_valueContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_annotation_argument_value;
	}
	public copyFrom(ctx: Annotation_argument_valueContext): void {
		super.copyFrom(ctx);
	}
}
export class AnnotationLiteralValueContext extends Annotation_argument_valueContext {
	public _exp!: Literal_expressionContext;
	constructor(parser: OParser, ctx: Annotation_argument_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAnnotationLiteralValue) {
	 		listener.enterAnnotationLiteralValue(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAnnotationLiteralValue) {
	 		listener.exitAnnotationLiteralValue(this);
		}
	}
}
export class AnnotationTypeValueContext extends Annotation_argument_valueContext {
	public _typ!: Primary_typeContext;
	constructor(parser: OParser, ctx: Annotation_argument_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primary_type(): Primary_typeContext {
		return this.getTypedRuleContext(Primary_typeContext, 0) as Primary_typeContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAnnotationTypeValue) {
	 		listener.enterAnnotationTypeValue(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAnnotationTypeValue) {
	 		listener.exitAnnotationTypeValue(this);
		}
	}
}


export class Resource_declarationContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public native_resource_declaration(): Native_resource_declarationContext {
		return this.getTypedRuleContext(Native_resource_declarationContext, 0) as Native_resource_declarationContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_resource_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterResource_declaration) {
	 		listener.enterResource_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitResource_declaration) {
	 		listener.exitResource_declaration(this);
		}
	}
}


export class Enum_declarationContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enum_category_declaration(): Enum_category_declarationContext {
		return this.getTypedRuleContext(Enum_category_declarationContext, 0) as Enum_category_declarationContext;
	}
	public enum_native_declaration(): Enum_native_declarationContext {
		return this.getTypedRuleContext(Enum_native_declarationContext, 0) as Enum_native_declarationContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_enum_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterEnum_declaration) {
	 		listener.enterEnum_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitEnum_declaration) {
	 		listener.exitEnum_declaration(this);
		}
	}
}


export class Native_symbol_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public native_symbol_list(): Native_symbolContext[] {
		return this.getTypedRuleContexts(Native_symbolContext) as Native_symbolContext[];
	}
	public native_symbol(i: number): Native_symbolContext {
		return this.getTypedRuleContext(Native_symbolContext, i) as Native_symbolContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_symbol_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_symbol_list) {
	 		listener.enterNative_symbol_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_symbol_list) {
	 		listener.exitNative_symbol_list(this);
		}
	}
}


export class Category_symbol_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public category_symbol_list(): Category_symbolContext[] {
		return this.getTypedRuleContexts(Category_symbolContext) as Category_symbolContext[];
	}
	public category_symbol(i: number): Category_symbolContext {
		return this.getTypedRuleContext(Category_symbolContext, i) as Category_symbolContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_category_symbol_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCategory_symbol_list) {
	 		listener.enterCategory_symbol_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCategory_symbol_list) {
	 		listener.exitCategory_symbol_list(this);
		}
	}
}


export class Symbol_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public symbol_identifier_list(): Symbol_identifierContext[] {
		return this.getTypedRuleContexts(Symbol_identifierContext) as Symbol_identifierContext[];
	}
	public symbol_identifier(i: number): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, i) as Symbol_identifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_symbol_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSymbol_list) {
	 		listener.enterSymbol_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSymbol_list) {
	 		listener.exitSymbol_list(this);
		}
	}
}


export class Attribute_constraintContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_attribute_constraint;
	}
	public copyFrom(ctx: Attribute_constraintContext): void {
		super.copyFrom(ctx);
	}
}
export class MatchingSetContext extends Attribute_constraintContext {
	public _source!: Set_literalContext;
	constructor(parser: OParser, ctx: Attribute_constraintContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(OParser.IN, 0);
	}
	public set_literal(): Set_literalContext {
		return this.getTypedRuleContext(Set_literalContext, 0) as Set_literalContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMatchingSet) {
	 		listener.enterMatchingSet(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMatchingSet) {
	 		listener.exitMatchingSet(this);
		}
	}
}
export class MatchingPatternContext extends Attribute_constraintContext {
	public _text!: Token;
	constructor(parser: OParser, ctx: Attribute_constraintContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MATCHING(): TerminalNode {
		return this.getToken(OParser.MATCHING, 0);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(OParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMatchingPattern) {
	 		listener.enterMatchingPattern(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMatchingPattern) {
	 		listener.exitMatchingPattern(this);
		}
	}
}
export class MatchingListContext extends Attribute_constraintContext {
	public _source!: List_literalContext;
	constructor(parser: OParser, ctx: Attribute_constraintContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(OParser.IN, 0);
	}
	public list_literal(): List_literalContext {
		return this.getTypedRuleContext(List_literalContext, 0) as List_literalContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMatchingList) {
	 		listener.enterMatchingList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMatchingList) {
	 		listener.exitMatchingList(this);
		}
	}
}
export class MatchingRangeContext extends Attribute_constraintContext {
	public _source!: Range_literalContext;
	constructor(parser: OParser, ctx: Attribute_constraintContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(OParser.IN, 0);
	}
	public range_literal(): Range_literalContext {
		return this.getTypedRuleContext(Range_literalContext, 0) as Range_literalContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMatchingRange) {
	 		listener.enterMatchingRange(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMatchingRange) {
	 		listener.exitMatchingRange(this);
		}
	}
}
export class MatchingExpressionContext extends Attribute_constraintContext {
	public _exp!: ExpressionContext;
	constructor(parser: OParser, ctx: Attribute_constraintContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MATCHING(): TerminalNode {
		return this.getToken(OParser.MATCHING, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMatchingExpression) {
	 		listener.enterMatchingExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMatchingExpression) {
	 		listener.exitMatchingExpression(this);
		}
	}
}


export class List_literalContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
	public expression_list(): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_list_literal;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterList_literal) {
	 		listener.enterList_literal(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitList_literal) {
	 		listener.exitList_literal(this);
		}
	}
}


export class Set_literalContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
	public expression_list(): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_set_literal;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSet_literal) {
	 		listener.enterSet_literal(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSet_literal) {
	 		listener.exitSet_literal(this);
		}
	}
}


export class Expression_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_expression_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterExpression_list) {
	 		listener.enterExpression_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitExpression_list) {
	 		listener.exitExpression_list(this);
		}
	}
}


export class Range_literalContext extends ParserRuleContext {
	public _low!: ExpressionContext;
	public _high!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(OParser.RANGE, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_range_literal;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterRange_literal) {
	 		listener.enterRange_literal(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitRange_literal) {
	 		listener.exitRange_literal(this);
		}
	}
}


export class TypedefContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_typedef;
	}
	public copyFrom(ctx: TypedefContext): void {
		super.copyFrom(ctx);
	}
}
export class IteratorTypeContext extends TypedefContext {
	public _i!: TypedefContext;
	constructor(parser: OParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ITERATOR(): TerminalNode {
		return this.getToken(OParser.ITERATOR, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIteratorType) {
	 		listener.enterIteratorType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIteratorType) {
	 		listener.exitIteratorType(this);
		}
	}
}
export class SetTypeContext extends TypedefContext {
	public _s!: TypedefContext;
	constructor(parser: OParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LTGT(): TerminalNode {
		return this.getToken(OParser.LTGT, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSetType) {
	 		listener.enterSetType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSetType) {
	 		listener.exitSetType(this);
		}
	}
}
export class ListTypeContext extends TypedefContext {
	public _l!: TypedefContext;
	constructor(parser: OParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterListType) {
	 		listener.enterListType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitListType) {
	 		listener.exitListType(this);
		}
	}
}
export class DictTypeContext extends TypedefContext {
	public _d!: TypedefContext;
	constructor(parser: OParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LTCOLONGT(): TerminalNode {
		return this.getToken(OParser.LTCOLONGT, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDictType) {
	 		listener.enterDictType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDictType) {
	 		listener.exitDictType(this);
		}
	}
}
export class CursorTypeContext extends TypedefContext {
	public _c!: TypedefContext;
	constructor(parser: OParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURSOR(): TerminalNode {
		return this.getToken(OParser.CURSOR, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCursorType) {
	 		listener.enterCursorType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCursorType) {
	 		listener.exitCursorType(this);
		}
	}
}
export class TypeTypeContext extends TypedefContext {
	public _t!: TypedefContext;
	constructor(parser: OParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPE(): TerminalNode {
		return this.getToken(OParser.TYPE, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTypeType) {
	 		listener.enterTypeType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTypeType) {
	 		listener.exitTypeType(this);
		}
	}
}
export class PrimaryTypeContext extends TypedefContext {
	public _p!: Primary_typeContext;
	constructor(parser: OParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primary_type(): Primary_typeContext {
		return this.getTypedRuleContext(Primary_typeContext, 0) as Primary_typeContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPrimaryType) {
	 		listener.enterPrimaryType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPrimaryType) {
	 		listener.exitPrimaryType(this);
		}
	}
}


export class Primary_typeContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_primary_type;
	}
	public copyFrom(ctx: Primary_typeContext): void {
		super.copyFrom(ctx);
	}
}
export class NativeTypeContext extends Primary_typeContext {
	public _n!: Native_typeContext;
	constructor(parser: OParser, ctx: Primary_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public native_type(): Native_typeContext {
		return this.getTypedRuleContext(Native_typeContext, 0) as Native_typeContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNativeType) {
	 		listener.enterNativeType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNativeType) {
	 		listener.exitNativeType(this);
		}
	}
}
export class CategoryTypeContext extends Primary_typeContext {
	public _c!: Category_typeContext;
	constructor(parser: OParser, ctx: Primary_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public category_type(): Category_typeContext {
		return this.getTypedRuleContext(Category_typeContext, 0) as Category_typeContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCategoryType) {
	 		listener.enterCategoryType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCategoryType) {
	 		listener.exitCategoryType(this);
		}
	}
}


export class Native_typeContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_type;
	}
	public copyFrom(ctx: Native_typeContext): void {
		super.copyFrom(ctx);
	}
}
export class PeriodTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PERIOD(): TerminalNode {
		return this.getToken(OParser.PERIOD, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPeriodType) {
	 		listener.enterPeriodType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPeriodType) {
	 		listener.exitPeriodType(this);
		}
	}
}
export class HtmlTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HTML(): TerminalNode {
		return this.getToken(OParser.HTML, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterHtmlType) {
	 		listener.enterHtmlType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitHtmlType) {
	 		listener.exitHtmlType(this);
		}
	}
}
export class CssTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CSS(): TerminalNode {
		return this.getToken(OParser.CSS, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCssType) {
	 		listener.enterCssType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCssType) {
	 		listener.exitCssType(this);
		}
	}
}
export class BooleanTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(OParser.BOOLEAN, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterBooleanType) {
	 		listener.enterBooleanType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitBooleanType) {
	 		listener.exitBooleanType(this);
		}
	}
}
export class DocumentTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOCUMENT(): TerminalNode {
		return this.getToken(OParser.DOCUMENT, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDocumentType) {
	 		listener.enterDocumentType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDocumentType) {
	 		listener.exitDocumentType(this);
		}
	}
}
export class CharacterTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHARACTER(): TerminalNode {
		return this.getToken(OParser.CHARACTER, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCharacterType) {
	 		listener.enterCharacterType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCharacterType) {
	 		listener.exitCharacterType(this);
		}
	}
}
export class VersionTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VERSION(): TerminalNode {
		return this.getToken(OParser.VERSION, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterVersionType) {
	 		listener.enterVersionType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitVersionType) {
	 		listener.exitVersionType(this);
		}
	}
}
export class TextTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT(): TerminalNode {
		return this.getToken(OParser.TEXT, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTextType) {
	 		listener.enterTextType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTextType) {
	 		listener.exitTextType(this);
		}
	}
}
export class ImageTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IMAGE(): TerminalNode {
		return this.getToken(OParser.IMAGE, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterImageType) {
	 		listener.enterImageType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitImageType) {
	 		listener.exitImageType(this);
		}
	}
}
export class TimeTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIME(): TerminalNode {
		return this.getToken(OParser.TIME, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTimeType) {
	 		listener.enterTimeType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTimeType) {
	 		listener.exitTimeType(this);
		}
	}
}
export class IntegerTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(OParser.INTEGER, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIntegerType) {
	 		listener.enterIntegerType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIntegerType) {
	 		listener.exitIntegerType(this);
		}
	}
}
export class DateTimeTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATETIME(): TerminalNode {
		return this.getToken(OParser.DATETIME, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDateTimeType) {
	 		listener.enterDateTimeType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDateTimeType) {
	 		listener.exitDateTimeType(this);
		}
	}
}
export class BlobTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BLOB(): TerminalNode {
		return this.getToken(OParser.BLOB, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterBlobType) {
	 		listener.enterBlobType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitBlobType) {
	 		listener.exitBlobType(this);
		}
	}
}
export class UUIDTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UUID(): TerminalNode {
		return this.getToken(OParser.UUID, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterUUIDType) {
	 		listener.enterUUIDType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitUUIDType) {
	 		listener.exitUUIDType(this);
		}
	}
}
export class DecimalTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(OParser.DECIMAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDecimalType) {
	 		listener.enterDecimalType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDecimalType) {
	 		listener.exitDecimalType(this);
		}
	}
}
export class CodeTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CODE(): TerminalNode {
		return this.getToken(OParser.CODE, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCodeType) {
	 		listener.enterCodeType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCodeType) {
	 		listener.exitCodeType(this);
		}
	}
}
export class DateTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATE(): TerminalNode {
		return this.getToken(OParser.DATE, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDateType) {
	 		listener.enterDateType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDateType) {
	 		listener.exitDateType(this);
		}
	}
}
export class DbIdTypeContext extends Native_typeContext {
	constructor(parser: OParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DBID(): TerminalNode {
		return this.getToken(OParser.DBID, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDbIdType) {
	 		listener.enterDbIdType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDbIdType) {
	 		listener.exitDbIdType(this);
		}
	}
}


export class Category_typeContext extends ParserRuleContext {
	public _t1!: Token;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.TYPE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_category_type;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCategory_type) {
	 		listener.enterCategory_type(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCategory_type) {
	 		listener.exitCategory_type(this);
		}
	}
}


export class Mutable_category_typeContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public category_type(): Category_typeContext {
		return this.getTypedRuleContext(Category_typeContext, 0) as Category_typeContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_mutable_category_type;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMutable_category_type) {
	 		listener.enterMutable_category_type(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMutable_category_type) {
	 		listener.exitMutable_category_type(this);
		}
	}
}


export class Code_typeContext extends ParserRuleContext {
	public _t1!: Token;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CODE(): TerminalNode {
		return this.getToken(OParser.CODE, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_code_type;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCode_type) {
	 		listener.enterCode_type(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCode_type) {
	 		listener.exitCode_type(this);
		}
	}
}


export class Category_declarationContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_category_declaration;
	}
	public copyFrom(ctx: Category_declarationContext): void {
		super.copyFrom(ctx);
	}
}
export class ConcreteCategoryDeclarationContext extends Category_declarationContext {
	public _decl!: Concrete_category_declarationContext;
	constructor(parser: OParser, ctx: Category_declarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public concrete_category_declaration(): Concrete_category_declarationContext {
		return this.getTypedRuleContext(Concrete_category_declarationContext, 0) as Concrete_category_declarationContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterConcreteCategoryDeclaration) {
	 		listener.enterConcreteCategoryDeclaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitConcreteCategoryDeclaration) {
	 		listener.exitConcreteCategoryDeclaration(this);
		}
	}
}
export class NativeCategoryDeclarationContext extends Category_declarationContext {
	public _decl!: Native_category_declarationContext;
	constructor(parser: OParser, ctx: Category_declarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public native_category_declaration(): Native_category_declarationContext {
		return this.getTypedRuleContext(Native_category_declarationContext, 0) as Native_category_declarationContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNativeCategoryDeclaration) {
	 		listener.enterNativeCategoryDeclaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNativeCategoryDeclaration) {
	 		listener.exitNativeCategoryDeclaration(this);
		}
	}
}
export class SingletonCategoryDeclarationContext extends Category_declarationContext {
	public _decl!: Singleton_category_declarationContext;
	constructor(parser: OParser, ctx: Category_declarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleton_category_declaration(): Singleton_category_declarationContext {
		return this.getTypedRuleContext(Singleton_category_declarationContext, 0) as Singleton_category_declarationContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSingletonCategoryDeclaration) {
	 		listener.enterSingletonCategoryDeclaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSingletonCategoryDeclaration) {
	 		listener.exitSingletonCategoryDeclaration(this);
		}
	}
}


export class Widget_declarationContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_widget_declaration;
	}
	public copyFrom(ctx: Widget_declarationContext): void {
		super.copyFrom(ctx);
	}
}
export class ConcreteWidgetDeclarationContext extends Widget_declarationContext {
	public _decl!: Concrete_widget_declarationContext;
	constructor(parser: OParser, ctx: Widget_declarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public concrete_widget_declaration(): Concrete_widget_declarationContext {
		return this.getTypedRuleContext(Concrete_widget_declarationContext, 0) as Concrete_widget_declarationContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterConcreteWidgetDeclaration) {
	 		listener.enterConcreteWidgetDeclaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitConcreteWidgetDeclaration) {
	 		listener.exitConcreteWidgetDeclaration(this);
		}
	}
}
export class NativeWidgetDeclarationContext extends Widget_declarationContext {
	public _decl!: Native_widget_declarationContext;
	constructor(parser: OParser, ctx: Widget_declarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public native_widget_declaration(): Native_widget_declarationContext {
		return this.getTypedRuleContext(Native_widget_declarationContext, 0) as Native_widget_declarationContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNativeWidgetDeclaration) {
	 		listener.enterNativeWidgetDeclaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNativeWidgetDeclaration) {
	 		listener.exitNativeWidgetDeclaration(this);
		}
	}
}


export class Type_identifier_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_identifier_list(): Type_identifierContext[] {
		return this.getTypedRuleContexts(Type_identifierContext) as Type_identifierContext[];
	}
	public type_identifier(i: number): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, i) as Type_identifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_type_identifier_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterType_identifier_list) {
	 		listener.enterType_identifier_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitType_identifier_list) {
	 		listener.exitType_identifier_list(this);
		}
	}
}


export class Method_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_method_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMethod_identifier) {
	 		listener.enterMethod_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMethod_identifier) {
	 		listener.exitMethod_identifier(this);
		}
	}
}


export class Identifier_or_keywordContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_identifier_or_keyword;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIdentifier_or_keyword) {
	 		listener.enterIdentifier_or_keyword(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIdentifier_or_keyword) {
	 		listener.exitIdentifier_or_keyword(this);
		}
	}
}


export class Nospace_hyphen_identifier_or_keywordContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(OParser.MINUS, 0);
	}
	public nospace_identifier_or_keyword(): Nospace_identifier_or_keywordContext {
		return this.getTypedRuleContext(Nospace_identifier_or_keywordContext, 0) as Nospace_identifier_or_keywordContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_nospace_hyphen_identifier_or_keyword;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNospace_hyphen_identifier_or_keyword) {
	 		listener.enterNospace_hyphen_identifier_or_keyword(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNospace_hyphen_identifier_or_keyword) {
	 		listener.exitNospace_hyphen_identifier_or_keyword(this);
		}
	}
}


export class Nospace_identifier_or_keywordContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_or_keyword(): Identifier_or_keywordContext {
		return this.getTypedRuleContext(Identifier_or_keywordContext, 0) as Identifier_or_keywordContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_nospace_identifier_or_keyword;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNospace_identifier_or_keyword) {
	 		listener.enterNospace_identifier_or_keyword(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNospace_identifier_or_keyword) {
	 		listener.exitNospace_identifier_or_keyword(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_identifier;
	}
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeIdentifierContext extends IdentifierContext {
	constructor(parser: OParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTypeIdentifier) {
	 		listener.enterTypeIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTypeIdentifier) {
	 		listener.exitTypeIdentifier(this);
		}
	}
}
export class SymbolIdentifierContext extends IdentifierContext {
	constructor(parser: OParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSymbolIdentifier) {
	 		listener.enterSymbolIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSymbolIdentifier) {
	 		listener.exitSymbolIdentifier(this);
		}
	}
}
export class VariableIdentifierContext extends IdentifierContext {
	constructor(parser: OParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterVariableIdentifier) {
	 		listener.enterVariableIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitVariableIdentifier) {
	 		listener.exitVariableIdentifier(this);
		}
	}
}


export class Member_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(OParser.CATEGORY, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
	public STORABLE(): TerminalNode {
		return this.getToken(OParser.STORABLE, 0);
	}
	public RESOURCE(): TerminalNode {
		return this.getToken(OParser.RESOURCE, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_member_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMember_identifier) {
	 		listener.enterMember_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMember_identifier) {
	 		listener.exitMember_identifier(this);
		}
	}
}


export class Variable_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(OParser.CATEGORY, 0);
	}
	public RESOURCE(): TerminalNode {
		return this.getToken(OParser.RESOURCE, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_variable_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterVariable_identifier) {
	 		listener.enterVariable_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitVariable_identifier) {
	 		listener.exitVariable_identifier(this);
		}
	}
}


export class Attribute_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
	public STORABLE(): TerminalNode {
		return this.getToken(OParser.STORABLE, 0);
	}
	public RESOURCE(): TerminalNode {
		return this.getToken(OParser.RESOURCE, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_attribute_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAttribute_identifier) {
	 		listener.enterAttribute_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAttribute_identifier) {
	 		listener.exitAttribute_identifier(this);
		}
	}
}


export class Type_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.TYPE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_type_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterType_identifier) {
	 		listener.enterType_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitType_identifier) {
	 		listener.exitType_identifier(this);
		}
	}
}


export class Symbol_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYMBOL_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.SYMBOL_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_symbol_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSymbol_identifier) {
	 		listener.enterSymbol_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSymbol_identifier) {
	 		listener.exitSymbol_identifier(this);
		}
	}
}


export class Argument_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public argument_list(): ArgumentContext[] {
		return this.getTypedRuleContexts(ArgumentContext) as ArgumentContext[];
	}
	public argument(i: number): ArgumentContext {
		return this.getTypedRuleContext(ArgumentContext, i) as ArgumentContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_argument_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterArgument_list) {
	 		listener.enterArgument_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitArgument_list) {
	 		listener.exitArgument_list(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_argument;
	}
	public copyFrom(ctx: ArgumentContext): void {
		super.copyFrom(ctx);
	}
}
export class OperatorArgumentContext extends ArgumentContext {
	public _arg!: Operator_argumentContext;
	constructor(parser: OParser, ctx: ArgumentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public operator_argument(): Operator_argumentContext {
		return this.getTypedRuleContext(Operator_argumentContext, 0) as Operator_argumentContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOperatorArgument) {
	 		listener.enterOperatorArgument(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOperatorArgument) {
	 		listener.exitOperatorArgument(this);
		}
	}
}
export class CodeArgumentContext extends ArgumentContext {
	public _arg!: Code_argumentContext;
	constructor(parser: OParser, ctx: ArgumentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public code_argument(): Code_argumentContext {
		return this.getTypedRuleContext(Code_argumentContext, 0) as Code_argumentContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCodeArgument) {
	 		listener.enterCodeArgument(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCodeArgument) {
	 		listener.exitCodeArgument(this);
		}
	}
}


export class Operator_argumentContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public named_argument(): Named_argumentContext {
		return this.getTypedRuleContext(Named_argumentContext, 0) as Named_argumentContext;
	}
	public typed_argument(): Typed_argumentContext {
		return this.getTypedRuleContext(Typed_argumentContext, 0) as Typed_argumentContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_operator_argument;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOperator_argument) {
	 		listener.enterOperator_argument(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOperator_argument) {
	 		listener.exitOperator_argument(this);
		}
	}
}


export class Named_argumentContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(OParser.EQ, 0);
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_named_argument;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNamed_argument) {
	 		listener.enterNamed_argument(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNamed_argument) {
	 		listener.exitNamed_argument(this);
		}
	}
}


export class Code_argumentContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public code_type(): Code_typeContext {
		return this.getTypedRuleContext(Code_typeContext, 0) as Code_typeContext;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_code_argument;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCode_argument) {
	 		listener.enterCode_argument(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCode_argument) {
	 		listener.exitCode_argument(this);
		}
	}
}


export class Category_or_any_typeContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public any_type(): Any_typeContext {
		return this.getTypedRuleContext(Any_typeContext, 0) as Any_typeContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_category_or_any_type;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCategory_or_any_type) {
	 		listener.enterCategory_or_any_type(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCategory_or_any_type) {
	 		listener.exitCategory_or_any_type(this);
		}
	}
}


export class Any_typeContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_any_type;
	}
	public copyFrom(ctx: Any_typeContext): void {
		super.copyFrom(ctx);
	}
}
export class AnyListTypeContext extends Any_typeContext {
	constructor(parser: OParser, ctx: Any_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public any_type(): Any_typeContext {
		return this.getTypedRuleContext(Any_typeContext, 0) as Any_typeContext;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAnyListType) {
	 		listener.enterAnyListType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAnyListType) {
	 		listener.exitAnyListType(this);
		}
	}
}
export class AnyTypeContext extends Any_typeContext {
	constructor(parser: OParser, ctx: Any_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ANY(): TerminalNode {
		return this.getToken(OParser.ANY, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAnyType) {
	 		listener.enterAnyType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAnyType) {
	 		listener.exitAnyType(this);
		}
	}
}
export class AnyDictTypeContext extends Any_typeContext {
	constructor(parser: OParser, ctx: Any_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public any_type(): Any_typeContext {
		return this.getTypedRuleContext(Any_typeContext, 0) as Any_typeContext;
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAnyDictType) {
	 		listener.enterAnyDictType(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAnyDictType) {
	 		listener.exitAnyDictType(this);
		}
	}
}


export class Member_method_declaration_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public member_method_declaration_list(): Member_method_declarationContext[] {
		return this.getTypedRuleContexts(Member_method_declarationContext) as Member_method_declarationContext[];
	}
	public member_method_declaration(i: number): Member_method_declarationContext {
		return this.getTypedRuleContext(Member_method_declarationContext, i) as Member_method_declarationContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_member_method_declaration_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMember_method_declaration_list) {
	 		listener.enterMember_method_declaration_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMember_method_declaration_list) {
	 		listener.exitMember_method_declaration_list(this);
		}
	}
}


export class Member_method_declarationContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public setter_method_declaration(): Setter_method_declarationContext {
		return this.getTypedRuleContext(Setter_method_declarationContext, 0) as Setter_method_declarationContext;
	}
	public getter_method_declaration(): Getter_method_declarationContext {
		return this.getTypedRuleContext(Getter_method_declarationContext, 0) as Getter_method_declarationContext;
	}
	public concrete_method_declaration(): Concrete_method_declarationContext {
		return this.getTypedRuleContext(Concrete_method_declarationContext, 0) as Concrete_method_declarationContext;
	}
	public abstract_member_method_declaration(): Abstract_member_method_declarationContext {
		return this.getTypedRuleContext(Abstract_member_method_declarationContext, 0) as Abstract_member_method_declarationContext;
	}
	public operator_method_declaration(): Operator_method_declarationContext {
		return this.getTypedRuleContext(Operator_method_declarationContext, 0) as Operator_method_declarationContext;
	}
	public comment_statement_list(): Comment_statementContext[] {
		return this.getTypedRuleContexts(Comment_statementContext) as Comment_statementContext[];
	}
	public comment_statement(i: number): Comment_statementContext {
		return this.getTypedRuleContext(Comment_statementContext, i) as Comment_statementContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
	public annotation_constructor_list(): Annotation_constructorContext[] {
		return this.getTypedRuleContexts(Annotation_constructorContext) as Annotation_constructorContext[];
	}
	public annotation_constructor(i: number): Annotation_constructorContext {
		return this.getTypedRuleContext(Annotation_constructorContext, i) as Annotation_constructorContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_member_method_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMember_method_declaration) {
	 		listener.enterMember_method_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMember_method_declaration) {
	 		listener.exitMember_method_declaration(this);
		}
	}
}


export class Native_member_method_declaration_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public native_member_method_declaration_list(): Native_member_method_declarationContext[] {
		return this.getTypedRuleContexts(Native_member_method_declarationContext) as Native_member_method_declarationContext[];
	}
	public native_member_method_declaration(i: number): Native_member_method_declarationContext {
		return this.getTypedRuleContext(Native_member_method_declarationContext, i) as Native_member_method_declarationContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_member_method_declaration_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_member_method_declaration_list) {
	 		listener.enterNative_member_method_declaration_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_member_method_declaration_list) {
	 		listener.exitNative_member_method_declaration_list(this);
		}
	}
}


export class Native_member_method_declarationContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public native_getter_declaration(): Native_getter_declarationContext {
		return this.getTypedRuleContext(Native_getter_declarationContext, 0) as Native_getter_declarationContext;
	}
	public native_setter_declaration(): Native_setter_declarationContext {
		return this.getTypedRuleContext(Native_setter_declarationContext, 0) as Native_setter_declarationContext;
	}
	public native_method_declaration(): Native_method_declarationContext {
		return this.getTypedRuleContext(Native_method_declarationContext, 0) as Native_method_declarationContext;
	}
	public comment_statement_list(): Comment_statementContext[] {
		return this.getTypedRuleContexts(Comment_statementContext) as Comment_statementContext[];
	}
	public comment_statement(i: number): Comment_statementContext {
		return this.getTypedRuleContext(Comment_statementContext, i) as Comment_statementContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
	public annotation_constructor_list(): Annotation_constructorContext[] {
		return this.getTypedRuleContexts(Annotation_constructorContext) as Annotation_constructorContext[];
	}
	public annotation_constructor(i: number): Annotation_constructorContext {
		return this.getTypedRuleContext(Annotation_constructorContext, i) as Annotation_constructorContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_member_method_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_member_method_declaration) {
	 		listener.enterNative_member_method_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_member_method_declaration) {
	 		listener.exitNative_member_method_declaration(this);
		}
	}
}


export class Native_category_bindingContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_category_binding;
	}
	public copyFrom(ctx: Native_category_bindingContext): void {
		super.copyFrom(ctx);
	}
}
export class Python2CategoryBindingContext extends Native_category_bindingContext {
	public _binding!: Python_category_bindingContext;
	constructor(parser: OParser, ctx: Native_category_bindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PYTHON2(): TerminalNode {
		return this.getToken(OParser.PYTHON2, 0);
	}
	public python_category_binding(): Python_category_bindingContext {
		return this.getTypedRuleContext(Python_category_bindingContext, 0) as Python_category_bindingContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPython2CategoryBinding) {
	 		listener.enterPython2CategoryBinding(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPython2CategoryBinding) {
	 		listener.exitPython2CategoryBinding(this);
		}
	}
}
export class Python3CategoryBindingContext extends Native_category_bindingContext {
	public _binding!: Python_category_bindingContext;
	constructor(parser: OParser, ctx: Native_category_bindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PYTHON3(): TerminalNode {
		return this.getToken(OParser.PYTHON3, 0);
	}
	public python_category_binding(): Python_category_bindingContext {
		return this.getTypedRuleContext(Python_category_bindingContext, 0) as Python_category_bindingContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPython3CategoryBinding) {
	 		listener.enterPython3CategoryBinding(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPython3CategoryBinding) {
	 		listener.exitPython3CategoryBinding(this);
		}
	}
}
export class JavaCategoryBindingContext extends Native_category_bindingContext {
	public _binding!: Java_class_identifier_expressionContext;
	constructor(parser: OParser, ctx: Native_category_bindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JAVA(): TerminalNode {
		return this.getToken(OParser.JAVA, 0);
	}
	public java_class_identifier_expression(): Java_class_identifier_expressionContext {
		return this.getTypedRuleContext(Java_class_identifier_expressionContext, 0) as Java_class_identifier_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaCategoryBinding) {
	 		listener.enterJavaCategoryBinding(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaCategoryBinding) {
	 		listener.exitJavaCategoryBinding(this);
		}
	}
}
export class CSharpCategoryBindingContext extends Native_category_bindingContext {
	public _binding!: Csharp_identifier_expressionContext;
	constructor(parser: OParser, ctx: Native_category_bindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CSHARP(): TerminalNode {
		return this.getToken(OParser.CSHARP, 0);
	}
	public csharp_identifier_expression(): Csharp_identifier_expressionContext {
		return this.getTypedRuleContext(Csharp_identifier_expressionContext, 0) as Csharp_identifier_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpCategoryBinding) {
	 		listener.enterCSharpCategoryBinding(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpCategoryBinding) {
	 		listener.exitCSharpCategoryBinding(this);
		}
	}
}
export class JavascriptCategoryBindingContext extends Native_category_bindingContext {
	public _binding!: Javascript_category_bindingContext;
	constructor(parser: OParser, ctx: Native_category_bindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JAVASCRIPT(): TerminalNode {
		return this.getToken(OParser.JAVASCRIPT, 0);
	}
	public javascript_category_binding(): Javascript_category_bindingContext {
		return this.getTypedRuleContext(Javascript_category_bindingContext, 0) as Javascript_category_bindingContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptCategoryBinding) {
	 		listener.enterJavascriptCategoryBinding(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptCategoryBinding) {
	 		listener.exitJavascriptCategoryBinding(this);
		}
	}
}


export class Python_category_bindingContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public python_module(): Python_moduleContext {
		return this.getTypedRuleContext(Python_moduleContext, 0) as Python_moduleContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_category_binding;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPython_category_binding) {
	 		listener.enterPython_category_binding(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPython_category_binding) {
	 		listener.exitPython_category_binding(this);
		}
	}
}


export class Python_moduleContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(OParser.FROM, 0);
	}
	public module_token(): Module_tokenContext {
		return this.getTypedRuleContext(Module_tokenContext, 0) as Module_tokenContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public python_identifier_list(): Python_identifierContext[] {
		return this.getTypedRuleContexts(Python_identifierContext) as Python_identifierContext[];
	}
	public python_identifier(i: number): Python_identifierContext {
		return this.getTypedRuleContext(Python_identifierContext, i) as Python_identifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(OParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(OParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_module;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPython_module) {
	 		listener.enterPython_module(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPython_module) {
	 		listener.exitPython_module(this);
		}
	}
}


export class Javascript_category_bindingContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public javascript_identifier_list(): Javascript_identifierContext[] {
		return this.getTypedRuleContexts(Javascript_identifierContext) as Javascript_identifierContext[];
	}
	public javascript_identifier(i: number): Javascript_identifierContext {
		return this.getTypedRuleContext(Javascript_identifierContext, i) as Javascript_identifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(OParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(OParser.DOT, i);
	}
	public javascript_module(): Javascript_moduleContext {
		return this.getTypedRuleContext(Javascript_moduleContext, 0) as Javascript_moduleContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_category_binding;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascript_category_binding) {
	 		listener.enterJavascript_category_binding(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascript_category_binding) {
	 		listener.exitJavascript_category_binding(this);
		}
	}
}


export class Javascript_moduleContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(OParser.FROM, 0);
	}
	public module_token(): Module_tokenContext {
		return this.getTypedRuleContext(Module_tokenContext, 0) as Module_tokenContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public javascript_identifier_list(): Javascript_identifierContext[] {
		return this.getTypedRuleContexts(Javascript_identifierContext) as Javascript_identifierContext[];
	}
	public javascript_identifier(i: number): Javascript_identifierContext {
		return this.getTypedRuleContext(Javascript_identifierContext, i) as Javascript_identifierContext;
	}
	public SLASH_list(): TerminalNode[] {
	    	return this.getTokens(OParser.SLASH);
	}
	public SLASH(i: number): TerminalNode {
		return this.getToken(OParser.SLASH, i);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_module;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascript_module) {
	 		listener.enterJavascript_module(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascript_module) {
	 		listener.exitJavascript_module(this);
		}
	}
}


export class Variable_identifier_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable_identifier_list(): Variable_identifierContext[] {
		return this.getTypedRuleContexts(Variable_identifierContext) as Variable_identifierContext[];
	}
	public variable_identifier(i: number): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, i) as Variable_identifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_variable_identifier_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterVariable_identifier_list) {
	 		listener.enterVariable_identifier_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitVariable_identifier_list) {
	 		listener.exitVariable_identifier_list(this);
		}
	}
}


export class Attribute_identifier_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attribute_identifier_list(): Attribute_identifierContext[] {
		return this.getTypedRuleContexts(Attribute_identifierContext) as Attribute_identifierContext[];
	}
	public attribute_identifier(i: number): Attribute_identifierContext {
		return this.getTypedRuleContext(Attribute_identifierContext, i) as Attribute_identifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_attribute_identifier_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAttribute_identifier_list) {
	 		listener.enterAttribute_identifier_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAttribute_identifier_list) {
	 		listener.exitAttribute_identifier_list(this);
		}
	}
}


export class Method_declarationContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public abstract_global_method_declaration(): Abstract_global_method_declarationContext {
		return this.getTypedRuleContext(Abstract_global_method_declarationContext, 0) as Abstract_global_method_declarationContext;
	}
	public concrete_method_declaration(): Concrete_method_declarationContext {
		return this.getTypedRuleContext(Concrete_method_declarationContext, 0) as Concrete_method_declarationContext;
	}
	public native_method_declaration(): Native_method_declarationContext {
		return this.getTypedRuleContext(Native_method_declarationContext, 0) as Native_method_declarationContext;
	}
	public test_method_declaration(): Test_method_declarationContext {
		return this.getTypedRuleContext(Test_method_declarationContext, 0) as Test_method_declarationContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_method_declaration;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMethod_declaration) {
	 		listener.enterMethod_declaration(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMethod_declaration) {
	 		listener.exitMethod_declaration(this);
		}
	}
}


export class Comment_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMENT(): TerminalNode {
		return this.getToken(OParser.COMMENT, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_comment_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterComment_statement) {
	 		listener.enterComment_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitComment_statement) {
	 		listener.exitComment_statement(this);
		}
	}
}


export class Native_statement_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public native_statement_list(): Native_statementContext[] {
		return this.getTypedRuleContexts(Native_statementContext) as Native_statementContext[];
	}
	public native_statement(i: number): Native_statementContext {
		return this.getTypedRuleContext(Native_statementContext, i) as Native_statementContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_statement_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNative_statement_list) {
	 		listener.enterNative_statement_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNative_statement_list) {
	 		listener.exitNative_statement_list(this);
		}
	}
}


export class Native_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_native_statement;
	}
	public copyFrom(ctx: Native_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpNativeStatementContext extends Native_statementContext {
	constructor(parser: OParser, ctx: Native_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CSHARP(): TerminalNode {
		return this.getToken(OParser.CSHARP, 0);
	}
	public csharp_statement(): Csharp_statementContext {
		return this.getTypedRuleContext(Csharp_statementContext, 0) as Csharp_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpNativeStatement) {
	 		listener.enterCSharpNativeStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpNativeStatement) {
	 		listener.exitCSharpNativeStatement(this);
		}
	}
}
export class JavaNativeStatementContext extends Native_statementContext {
	constructor(parser: OParser, ctx: Native_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JAVA(): TerminalNode {
		return this.getToken(OParser.JAVA, 0);
	}
	public java_statement(): Java_statementContext {
		return this.getTypedRuleContext(Java_statementContext, 0) as Java_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaNativeStatement) {
	 		listener.enterJavaNativeStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaNativeStatement) {
	 		listener.exitJavaNativeStatement(this);
		}
	}
}
export class JavascriptNativeStatementContext extends Native_statementContext {
	constructor(parser: OParser, ctx: Native_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JAVASCRIPT(): TerminalNode {
		return this.getToken(OParser.JAVASCRIPT, 0);
	}
	public javascript_native_statement(): Javascript_native_statementContext {
		return this.getTypedRuleContext(Javascript_native_statementContext, 0) as Javascript_native_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptNativeStatement) {
	 		listener.enterJavascriptNativeStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptNativeStatement) {
	 		listener.exitJavascriptNativeStatement(this);
		}
	}
}
export class Python2NativeStatementContext extends Native_statementContext {
	constructor(parser: OParser, ctx: Native_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PYTHON2(): TerminalNode {
		return this.getToken(OParser.PYTHON2, 0);
	}
	public python_native_statement(): Python_native_statementContext {
		return this.getTypedRuleContext(Python_native_statementContext, 0) as Python_native_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPython2NativeStatement) {
	 		listener.enterPython2NativeStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPython2NativeStatement) {
	 		listener.exitPython2NativeStatement(this);
		}
	}
}
export class Python3NativeStatementContext extends Native_statementContext {
	constructor(parser: OParser, ctx: Native_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PYTHON3(): TerminalNode {
		return this.getToken(OParser.PYTHON3, 0);
	}
	public python_native_statement(): Python_native_statementContext {
		return this.getTypedRuleContext(Python_native_statementContext, 0) as Python_native_statementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPython3NativeStatement) {
	 		listener.enterPython3NativeStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPython3NativeStatement) {
	 		listener.exitPython3NativeStatement(this);
		}
	}
}


export class Python_native_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public python_statement(): Python_statementContext {
		return this.getTypedRuleContext(Python_statementContext, 0) as Python_statementContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public python_module(): Python_moduleContext {
		return this.getTypedRuleContext(Python_moduleContext, 0) as Python_moduleContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_native_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPython_native_statement) {
	 		listener.enterPython_native_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPython_native_statement) {
	 		listener.exitPython_native_statement(this);
		}
	}
}


export class Javascript_native_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public javascript_statement(): Javascript_statementContext {
		return this.getTypedRuleContext(Javascript_statementContext, 0) as Javascript_statementContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public javascript_module(): Javascript_moduleContext {
		return this.getTypedRuleContext(Javascript_moduleContext, 0) as Javascript_moduleContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_native_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascript_native_statement) {
	 		listener.enterJavascript_native_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascript_native_statement) {
	 		listener.exitJavascript_native_statement(this);
		}
	}
}


export class Statement_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_statement_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterStatement_list) {
	 		listener.enterStatement_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitStatement_list) {
	 		listener.exitStatement_list(this);
		}
	}
}


export class Assertion_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assertion_list(): AssertionContext[] {
		return this.getTypedRuleContexts(AssertionContext) as AssertionContext[];
	}
	public assertion(i: number): AssertionContext {
		return this.getTypedRuleContext(AssertionContext, i) as AssertionContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_assertion_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAssertion_list) {
	 		listener.enterAssertion_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAssertion_list) {
	 		listener.exitAssertion_list(this);
		}
	}
}


export class Switch_case_statement_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public switch_case_statement_list(): Switch_case_statementContext[] {
		return this.getTypedRuleContexts(Switch_case_statementContext) as Switch_case_statementContext[];
	}
	public switch_case_statement(i: number): Switch_case_statementContext {
		return this.getTypedRuleContext(Switch_case_statementContext, i) as Switch_case_statementContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_switch_case_statement_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSwitch_case_statement_list) {
	 		listener.enterSwitch_case_statement_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSwitch_case_statement_list) {
	 		listener.exitSwitch_case_statement_list(this);
		}
	}
}


export class Catch_statement_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public catch_statement_list(): Catch_statementContext[] {
		return this.getTypedRuleContexts(Catch_statementContext) as Catch_statementContext[];
	}
	public catch_statement(i: number): Catch_statementContext {
		return this.getTypedRuleContext(Catch_statementContext, i) as Catch_statementContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_catch_statement_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCatch_statement_list) {
	 		listener.enterCatch_statement_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCatch_statement_list) {
	 		listener.exitCatch_statement_list(this);
		}
	}
}


export class Literal_collectionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_literal_collection;
	}
	public copyFrom(ctx: Literal_collectionContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralListLiteralContext extends Literal_collectionContext {
	constructor(parser: OParser, ctx: Literal_collectionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public literal_list_literal(): Literal_list_literalContext {
		return this.getTypedRuleContext(Literal_list_literalContext, 0) as Literal_list_literalContext;
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterLiteralListLiteral) {
	 		listener.enterLiteralListLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitLiteralListLiteral) {
	 		listener.exitLiteralListLiteral(this);
		}
	}
}
export class LiteralRangeLiteralContext extends Literal_collectionContext {
	public _low!: Atomic_literalContext;
	public _high!: Atomic_literalContext;
	constructor(parser: OParser, ctx: Literal_collectionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(OParser.RANGE, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public atomic_literal_list(): Atomic_literalContext[] {
		return this.getTypedRuleContexts(Atomic_literalContext) as Atomic_literalContext[];
	}
	public atomic_literal(i: number): Atomic_literalContext {
		return this.getTypedRuleContext(Atomic_literalContext, i) as Atomic_literalContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterLiteralRangeLiteral) {
	 		listener.enterLiteralRangeLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitLiteralRangeLiteral) {
	 		listener.exitLiteralRangeLiteral(this);
		}
	}
}
export class LiteralSetLiteralContext extends Literal_collectionContext {
	constructor(parser: OParser, ctx: Literal_collectionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public literal_list_literal(): Literal_list_literalContext {
		return this.getTypedRuleContext(Literal_list_literalContext, 0) as Literal_list_literalContext;
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterLiteralSetLiteral) {
	 		listener.enterLiteralSetLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitLiteralSetLiteral) {
	 		listener.exitLiteralSetLiteral(this);
		}
	}
}


export class Atomic_literalContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_atomic_literal;
	}
	public copyFrom(ctx: Atomic_literalContext): void {
		super.copyFrom(ctx);
	}
}
export class MinIntegerLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MIN_INTEGER(): TerminalNode {
		return this.getToken(OParser.MIN_INTEGER, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMinIntegerLiteral) {
	 		listener.enterMinIntegerLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMinIntegerLiteral) {
	 		listener.exitMinIntegerLiteral(this);
		}
	}
}
export class DateLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATE_LITERAL(): TerminalNode {
		return this.getToken(OParser.DATE_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDateLiteral) {
	 		listener.enterDateLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDateLiteral) {
	 		listener.exitDateLiteral(this);
		}
	}
}
export class SymbolLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSymbolLiteral) {
	 		listener.enterSymbolLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSymbolLiteral) {
	 		listener.exitSymbolLiteral(this);
		}
	}
}
export class BooleanLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(OParser.BOOLEAN_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
}
export class VersionLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VERSION_LITERAL(): TerminalNode {
		return this.getToken(OParser.VERSION_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterVersionLiteral) {
	 		listener.enterVersionLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitVersionLiteral) {
	 		listener.exitVersionLiteral(this);
		}
	}
}
export class HexadecimalLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HEXA_LITERAL(): TerminalNode {
		return this.getToken(OParser.HEXA_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterHexadecimalLiteral) {
	 		listener.enterHexadecimalLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitHexadecimalLiteral) {
	 		listener.exitHexadecimalLiteral(this);
		}
	}
}
export class UUIDLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UUID_LITERAL(): TerminalNode {
		return this.getToken(OParser.UUID_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterUUIDLiteral) {
	 		listener.enterUUIDLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitUUIDLiteral) {
	 		listener.exitUUIDLiteral(this);
		}
	}
}
export class MaxIntegerLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MAX_INTEGER(): TerminalNode {
		return this.getToken(OParser.MAX_INTEGER, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMaxIntegerLiteral) {
	 		listener.enterMaxIntegerLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMaxIntegerLiteral) {
	 		listener.exitMaxIntegerLiteral(this);
		}
	}
}
export class TypeLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_literal(): Type_literalContext {
		return this.getTypedRuleContext(Type_literalContext, 0) as Type_literalContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTypeLiteral) {
	 		listener.enterTypeLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTypeLiteral) {
	 		listener.exitTypeLiteral(this);
		}
	}
}
export class DateTimeLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATETIME_LITERAL(): TerminalNode {
		return this.getToken(OParser.DATETIME_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDateTimeLiteral) {
	 		listener.enterDateTimeLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDateTimeLiteral) {
	 		listener.exitDateTimeLiteral(this);
		}
	}
}
export class PeriodLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PERIOD_LITERAL(): TerminalNode {
		return this.getToken(OParser.PERIOD_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPeriodLiteral) {
	 		listener.enterPeriodLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPeriodLiteral) {
	 		listener.exitPeriodLiteral(this);
		}
	}
}
export class DecimalLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(OParser.DECIMAL_LITERAL, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(OParser.MINUS, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDecimalLiteral) {
	 		listener.enterDecimalLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDecimalLiteral) {
	 		listener.exitDecimalLiteral(this);
		}
	}
}
export class TextLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(OParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTextLiteral) {
	 		listener.enterTextLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTextLiteral) {
	 		listener.exitTextLiteral(this);
		}
	}
}
export class NullLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public null_literal(): Null_literalContext {
		return this.getTypedRuleContext(Null_literalContext, 0) as Null_literalContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNullLiteral) {
	 		listener.enterNullLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNullLiteral) {
	 		listener.exitNullLiteral(this);
		}
	}
}
export class IntegerLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(OParser.INTEGER_LITERAL, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(OParser.MINUS, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
}
export class TimeLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIME_LITERAL(): TerminalNode {
		return this.getToken(OParser.TIME_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTimeLiteral) {
	 		listener.enterTimeLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTimeLiteral) {
	 		listener.exitTimeLiteral(this);
		}
	}
}
export class CharacterLiteralContext extends Atomic_literalContext {
	constructor(parser: OParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(OParser.CHAR_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCharacterLiteral) {
	 		listener.enterCharacterLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCharacterLiteral) {
	 		listener.exitCharacterLiteral(this);
		}
	}
}


export class Literal_list_literalContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atomic_literal_list(): Atomic_literalContext[] {
		return this.getTypedRuleContexts(Atomic_literalContext) as Atomic_literalContext[];
	}
	public atomic_literal(i: number): Atomic_literalContext {
		return this.getTypedRuleContext(Atomic_literalContext, i) as Atomic_literalContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_literal_list_literal;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterLiteral_list_literal) {
	 		listener.enterLiteral_list_literal(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitLiteral_list_literal) {
	 		listener.exitLiteral_list_literal(this);
		}
	}
}


export class This_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELF(): TerminalNode {
		return this.getToken(OParser.SELF, 0);
	}
	public THIS(): TerminalNode {
		return this.getToken(OParser.THIS, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_this_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterThis_expression) {
	 		listener.enterThis_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitThis_expression) {
	 		listener.exitThis_expression(this);
		}
	}
}


export class Super_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SUPER(): TerminalNode {
		return this.getToken(OParser.SUPER, 0);
	}
	public category_type(): Category_typeContext {
		return this.getTypedRuleContext(Category_typeContext, 0) as Category_typeContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_super_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSuper_expression) {
	 		listener.enterSuper_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSuper_expression) {
	 		listener.exitSuper_expression(this);
		}
	}
}


export class Parenthesis_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_parenthesis_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterParenthesis_expression) {
	 		listener.enterParenthesis_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitParenthesis_expression) {
	 		listener.exitParenthesis_expression(this);
		}
	}
}


export class Literal_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atomic_literal(): Atomic_literalContext {
		return this.getTypedRuleContext(Atomic_literalContext, 0) as Atomic_literalContext;
	}
	public collection_literal(): Collection_literalContext {
		return this.getTypedRuleContext(Collection_literalContext, 0) as Collection_literalContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_literal_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterLiteral_expression) {
	 		listener.enterLiteral_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitLiteral_expression) {
	 		listener.exitLiteral_expression(this);
		}
	}
}


export class Collection_literalContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public range_literal(): Range_literalContext {
		return this.getTypedRuleContext(Range_literalContext, 0) as Range_literalContext;
	}
	public list_literal(): List_literalContext {
		return this.getTypedRuleContext(List_literalContext, 0) as List_literalContext;
	}
	public set_literal(): Set_literalContext {
		return this.getTypedRuleContext(Set_literalContext, 0) as Set_literalContext;
	}
	public dict_literal(): Dict_literalContext {
		return this.getTypedRuleContext(Dict_literalContext, 0) as Dict_literalContext;
	}
	public document_literal(): Document_literalContext {
		return this.getTypedRuleContext(Document_literalContext, 0) as Document_literalContext;
	}
	public tuple_literal(): Tuple_literalContext {
		return this.getTypedRuleContext(Tuple_literalContext, 0) as Tuple_literalContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_collection_literal;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCollection_literal) {
	 		listener.enterCollection_literal(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCollection_literal) {
	 		listener.exitCollection_literal(this);
		}
	}
}


export class Tuple_literalContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
	public expression_tuple(): Expression_tupleContext {
		return this.getTypedRuleContext(Expression_tupleContext, 0) as Expression_tupleContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_tuple_literal;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterTuple_literal) {
	 		listener.enterTuple_literal(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitTuple_literal) {
	 		listener.exitTuple_literal(this);
		}
	}
}


export class Dict_literalContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LTCOLONGT(): TerminalNode {
		return this.getToken(OParser.LTCOLONGT, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public dict_entry_list(): Dict_entry_listContext {
		return this.getTypedRuleContext(Dict_entry_listContext, 0) as Dict_entry_listContext;
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_dict_literal;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDict_literal) {
	 		listener.enterDict_literal(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDict_literal) {
	 		listener.exitDict_literal(this);
		}
	}
}


export class Document_literalContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public doc_entry_list(): Doc_entry_listContext {
		return this.getTypedRuleContext(Doc_entry_listContext, 0) as Doc_entry_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_document_literal;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDocument_literal) {
	 		listener.enterDocument_literal(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDocument_literal) {
	 		listener.exitDocument_literal(this);
		}
	}
}


export class Expression_tupleContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_expression_tuple;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterExpression_tuple) {
	 		listener.enterExpression_tuple(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitExpression_tuple) {
	 		listener.exitExpression_tuple(this);
		}
	}
}


export class Doc_entry_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public doc_entry_list(): Doc_entryContext[] {
		return this.getTypedRuleContexts(Doc_entryContext) as Doc_entryContext[];
	}
	public doc_entry(i: number): Doc_entryContext {
		return this.getTypedRuleContext(Doc_entryContext, i) as Doc_entryContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_doc_entry_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDoc_entry_list) {
	 		listener.enterDoc_entry_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDoc_entry_list) {
	 		listener.exitDoc_entry_list(this);
		}
	}
}


export class Doc_entryContext extends ParserRuleContext {
	public _key!: Doc_keyContext;
	public _value!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public doc_key(): Doc_keyContext {
		return this.getTypedRuleContext(Doc_keyContext, 0) as Doc_keyContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_doc_entry;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDoc_entry) {
	 		listener.enterDoc_entry(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDoc_entry) {
	 		listener.exitDoc_entry(this);
		}
	}
}


export class Doc_keyContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_doc_key;
	}
	public copyFrom(ctx: Doc_keyContext): void {
		super.copyFrom(ctx);
	}
}
export class DocKeyIdentifierContext extends Doc_keyContext {
	public _name!: Identifier_or_keywordContext;
	constructor(parser: OParser, ctx: Doc_keyContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier_or_keyword(): Identifier_or_keywordContext {
		return this.getTypedRuleContext(Identifier_or_keywordContext, 0) as Identifier_or_keywordContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDocKeyIdentifier) {
	 		listener.enterDocKeyIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDocKeyIdentifier) {
	 		listener.exitDocKeyIdentifier(this);
		}
	}
}
export class DocKeyTextContext extends Doc_keyContext {
	public _name!: Token;
	constructor(parser: OParser, ctx: Doc_keyContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(OParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDocKeyText) {
	 		listener.enterDocKeyText(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDocKeyText) {
	 		listener.exitDocKeyText(this);
		}
	}
}


export class Dict_entry_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dict_entry_list(): Dict_entryContext[] {
		return this.getTypedRuleContexts(Dict_entryContext) as Dict_entryContext[];
	}
	public dict_entry(i: number): Dict_entryContext {
		return this.getTypedRuleContext(Dict_entryContext, i) as Dict_entryContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_dict_entry_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDict_entry_list) {
	 		listener.enterDict_entry_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDict_entry_list) {
	 		listener.exitDict_entry_list(this);
		}
	}
}


export class Dict_entryContext extends ParserRuleContext {
	public _key!: Dict_keyContext;
	public _value!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public dict_key(): Dict_keyContext {
		return this.getTypedRuleContext(Dict_keyContext, 0) as Dict_keyContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_dict_entry;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDict_entry) {
	 		listener.enterDict_entry(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDict_entry) {
	 		listener.exitDict_entry(this);
		}
	}
}


export class Dict_keyContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_dict_key;
	}
	public copyFrom(ctx: Dict_keyContext): void {
		super.copyFrom(ctx);
	}
}
export class DictKeyIdentifierContext extends Dict_keyContext {
	public _name!: Identifier_or_keywordContext;
	constructor(parser: OParser, ctx: Dict_keyContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier_or_keyword(): Identifier_or_keywordContext {
		return this.getTypedRuleContext(Identifier_or_keywordContext, 0) as Identifier_or_keywordContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDictKeyIdentifier) {
	 		listener.enterDictKeyIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDictKeyIdentifier) {
	 		listener.exitDictKeyIdentifier(this);
		}
	}
}
export class DictKeyTextContext extends Dict_keyContext {
	public _name!: Token;
	constructor(parser: OParser, ctx: Dict_keyContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(OParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDictKeyText) {
	 		listener.enterDictKeyText(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDictKeyText) {
	 		listener.exitDictKeyText(this);
		}
	}
}


export class Slice_argumentsContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_slice_arguments;
	}
	public copyFrom(ctx: Slice_argumentsContext): void {
		super.copyFrom(ctx);
	}
}
export class SliceFirstAndLastContext extends Slice_argumentsContext {
	public _first!: ExpressionContext;
	public _last!: ExpressionContext;
	constructor(parser: OParser, ctx: Slice_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSliceFirstAndLast) {
	 		listener.enterSliceFirstAndLast(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSliceFirstAndLast) {
	 		listener.exitSliceFirstAndLast(this);
		}
	}
}
export class SliceLastOnlyContext extends Slice_argumentsContext {
	public _last!: ExpressionContext;
	constructor(parser: OParser, ctx: Slice_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSliceLastOnly) {
	 		listener.enterSliceLastOnly(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSliceLastOnly) {
	 		listener.exitSliceLastOnly(this);
		}
	}
}
export class SliceFirstOnlyContext extends Slice_argumentsContext {
	public _first!: ExpressionContext;
	constructor(parser: OParser, ctx: Slice_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSliceFirstOnly) {
	 		listener.enterSliceFirstOnly(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSliceFirstOnly) {
	 		listener.exitSliceFirstOnly(this);
		}
	}
}


export class Assign_variable_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_assign_variable_statement;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAssign_variable_statement) {
	 		listener.enterAssign_variable_statement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAssign_variable_statement) {
	 		listener.exitAssign_variable_statement(this);
		}
	}
}


export class Assignable_instanceContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_assignable_instance;
	}
	public copyFrom(ctx: Assignable_instanceContext): void {
		super.copyFrom(ctx);
	}
}
export class ChildInstanceContext extends Assignable_instanceContext {
	constructor(parser: OParser, ctx: Assignable_instanceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public assignable_instance(): Assignable_instanceContext {
		return this.getTypedRuleContext(Assignable_instanceContext, 0) as Assignable_instanceContext;
	}
	public child_instance(): Child_instanceContext {
		return this.getTypedRuleContext(Child_instanceContext, 0) as Child_instanceContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterChildInstance) {
	 		listener.enterChildInstance(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitChildInstance) {
	 		listener.exitChildInstance(this);
		}
	}
}
export class RootInstanceContext extends Assignable_instanceContext {
	constructor(parser: OParser, ctx: Assignable_instanceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterRootInstance) {
	 		listener.enterRootInstance(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitRootInstance) {
	 		listener.exitRootInstance(this);
		}
	}
}


export class Is_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_is_expression;
	}
	public copyFrom(ctx: Is_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IsATypeExpressionContext extends Is_expressionContext {
	constructor(parser: OParser, ctx: Is_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
	public category_or_any_type(): Category_or_any_typeContext {
		return this.getTypedRuleContext(Category_or_any_typeContext, 0) as Category_or_any_typeContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIsATypeExpression) {
	 		listener.enterIsATypeExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIsATypeExpression) {
	 		listener.exitIsATypeExpression(this);
		}
	}
}
export class IsOtherExpressionContext extends Is_expressionContext {
	constructor(parser: OParser, ctx: Is_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIsOtherExpression) {
	 		listener.enterIsOtherExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIsOtherExpression) {
	 		listener.exitIsOtherExpression(this);
		}
	}
}


export class MetadataContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_metadata;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMetadata) {
	 		listener.enterMetadata(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMetadata) {
	 		listener.exitMetadata(this);
		}
	}
}


export class Arrow_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_arrow_expression;
	}
	public copyFrom(ctx: Arrow_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrowExpressionBodyContext extends Arrow_expressionContext {
	constructor(parser: OParser, ctx: Arrow_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public arrow_prefix(): Arrow_prefixContext {
		return this.getTypedRuleContext(Arrow_prefixContext, 0) as Arrow_prefixContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterArrowExpressionBody) {
	 		listener.enterArrowExpressionBody(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitArrowExpressionBody) {
	 		listener.exitArrowExpressionBody(this);
		}
	}
}
export class ArrowStatementsBodyContext extends Arrow_expressionContext {
	constructor(parser: OParser, ctx: Arrow_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public arrow_prefix(): Arrow_prefixContext {
		return this.getTypedRuleContext(Arrow_prefixContext, 0) as Arrow_prefixContext;
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterArrowStatementsBody) {
	 		listener.enterArrowStatementsBody(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitArrowStatementsBody) {
	 		listener.exitArrowStatementsBody(this);
		}
	}
}


export class Arrow_prefixContext extends ParserRuleContext {
	public _s1!: Ws_plusContext;
	public _s2!: Ws_plusContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arrow_args(): Arrow_argsContext {
		return this.getTypedRuleContext(Arrow_argsContext, 0) as Arrow_argsContext;
	}
	public EGT(): TerminalNode {
		return this.getToken(OParser.EGT, 0);
	}
	public ws_plus_list(): Ws_plusContext[] {
		return this.getTypedRuleContexts(Ws_plusContext) as Ws_plusContext[];
	}
	public ws_plus(i: number): Ws_plusContext {
		return this.getTypedRuleContext(Ws_plusContext, i) as Ws_plusContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_arrow_prefix;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterArrow_prefix) {
	 		listener.enterArrow_prefix(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitArrow_prefix) {
	 		listener.exitArrow_prefix(this);
		}
	}
}


export class Arrow_argsContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_arrow_args;
	}
	public copyFrom(ctx: Arrow_argsContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrowListArgContext extends Arrow_argsContext {
	constructor(parser: OParser, ctx: Arrow_argsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public variable_identifier_list(): Variable_identifier_listContext {
		return this.getTypedRuleContext(Variable_identifier_listContext, 0) as Variable_identifier_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterArrowListArg) {
	 		listener.enterArrowListArg(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitArrowListArg) {
	 		listener.exitArrowListArg(this);
		}
	}
}
export class ArrowSingleArgContext extends Arrow_argsContext {
	constructor(parser: OParser, ctx: Arrow_argsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterArrowSingleArg) {
	 		listener.enterArrowSingleArg(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitArrowSingleArg) {
	 		listener.exitArrowSingleArg(this);
		}
	}
}


export class Sorted_keyContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public instance_expression(): Instance_expressionContext {
		return this.getTypedRuleContext(Instance_expressionContext, 0) as Instance_expressionContext;
	}
	public arrow_expression(): Arrow_expressionContext {
		return this.getTypedRuleContext(Arrow_expressionContext, 0) as Arrow_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_sorted_key;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSorted_key) {
	 		listener.enterSorted_key(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSorted_key) {
	 		listener.exitSorted_key(this);
		}
	}
}


export class Read_blob_expressionContext extends ParserRuleContext {
	public _source!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public READ(): TerminalNode {
		return this.getToken(OParser.READ, 0);
	}
	public BLOB(): TerminalNode {
		return this.getToken(OParser.BLOB, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(OParser.FROM, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_read_blob_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterRead_blob_expression) {
	 		listener.enterRead_blob_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitRead_blob_expression) {
	 		listener.exitRead_blob_expression(this);
		}
	}
}


export class Read_all_expressionContext extends ParserRuleContext {
	public _source!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public READ(): TerminalNode {
		return this.getToken(OParser.READ, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(OParser.ALL, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(OParser.FROM, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_read_all_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterRead_all_expression) {
	 		listener.enterRead_all_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitRead_all_expression) {
	 		listener.exitRead_all_expression(this);
		}
	}
}


export class Read_one_expressionContext extends ParserRuleContext {
	public _source!: ExpressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public READ(): TerminalNode {
		return this.getToken(OParser.READ, 0);
	}
	public ONE(): TerminalNode {
		return this.getToken(OParser.ONE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(OParser.FROM, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_read_one_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterRead_one_expression) {
	 		listener.enterRead_one_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitRead_one_expression) {
	 		listener.exitRead_one_expression(this);
		}
	}
}


export class Order_by_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public order_by_list(): Order_byContext[] {
		return this.getTypedRuleContexts(Order_byContext) as Order_byContext[];
	}
	public order_by(i: number): Order_byContext {
		return this.getTypedRuleContext(Order_byContext, i) as Order_byContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_order_by_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOrder_by_list) {
	 		listener.enterOrder_by_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOrder_by_list) {
	 		listener.exitOrder_by_list(this);
		}
	}
}


export class Order_byContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable_identifier_list(): Variable_identifierContext[] {
		return this.getTypedRuleContexts(Variable_identifierContext) as Variable_identifierContext[];
	}
	public variable_identifier(i: number): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, i) as Variable_identifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(OParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(OParser.DOT, i);
	}
	public ASC(): TerminalNode {
		return this.getToken(OParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(OParser.DESC, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_order_by;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOrder_by) {
	 		listener.enterOrder_by(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOrder_by) {
	 		listener.exitOrder_by(this);
		}
	}
}


export class Include_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable_identifier_list(): Variable_identifierContext[] {
		return this.getTypedRuleContexts(Variable_identifierContext) as Variable_identifierContext[];
	}
	public variable_identifier(i: number): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, i) as Variable_identifierContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(OParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(OParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_include_list;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterInclude_list) {
	 		listener.enterInclude_list(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitInclude_list) {
	 		listener.exitInclude_list(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_operator;
	}
	public copyFrom(ctx: OperatorContext): void {
		super.copyFrom(ctx);
	}
}
export class OperatorPlusContext extends OperatorContext {
	constructor(parser: OParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PLUS(): TerminalNode {
		return this.getToken(OParser.PLUS, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOperatorPlus) {
	 		listener.enterOperatorPlus(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOperatorPlus) {
	 		listener.exitOperatorPlus(this);
		}
	}
}
export class OperatorDivideContext extends OperatorContext {
	constructor(parser: OParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public divide(): DivideContext {
		return this.getTypedRuleContext(DivideContext, 0) as DivideContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOperatorDivide) {
	 		listener.enterOperatorDivide(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOperatorDivide) {
	 		listener.exitOperatorDivide(this);
		}
	}
}
export class OperatorIDivideContext extends OperatorContext {
	constructor(parser: OParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public idivide(): IdivideContext {
		return this.getTypedRuleContext(IdivideContext, 0) as IdivideContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOperatorIDivide) {
	 		listener.enterOperatorIDivide(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOperatorIDivide) {
	 		listener.exitOperatorIDivide(this);
		}
	}
}
export class OperatorMultiplyContext extends OperatorContext {
	constructor(parser: OParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public multiply(): MultiplyContext {
		return this.getTypedRuleContext(MultiplyContext, 0) as MultiplyContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOperatorMultiply) {
	 		listener.enterOperatorMultiply(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOperatorMultiply) {
	 		listener.exitOperatorMultiply(this);
		}
	}
}
export class OperatorMinusContext extends OperatorContext {
	constructor(parser: OParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MINUS(): TerminalNode {
		return this.getToken(OParser.MINUS, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOperatorMinus) {
	 		listener.enterOperatorMinus(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOperatorMinus) {
	 		listener.exitOperatorMinus(this);
		}
	}
}
export class OperatorModuloContext extends OperatorContext {
	constructor(parser: OParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public modulo(): ModuloContext {
		return this.getTypedRuleContext(ModuloContext, 0) as ModuloContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterOperatorModulo) {
	 		listener.enterOperatorModulo(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitOperatorModulo) {
	 		listener.exitOperatorModulo(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public JAVA(): TerminalNode {
		return this.getToken(OParser.JAVA, 0);
	}
	public CSHARP(): TerminalNode {
		return this.getToken(OParser.CSHARP, 0);
	}
	public PYTHON2(): TerminalNode {
		return this.getToken(OParser.PYTHON2, 0);
	}
	public PYTHON3(): TerminalNode {
		return this.getToken(OParser.PYTHON3, 0);
	}
	public JAVASCRIPT(): TerminalNode {
		return this.getToken(OParser.JAVASCRIPT, 0);
	}
	public SWIFT(): TerminalNode {
		return this.getToken(OParser.SWIFT, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(OParser.BOOLEAN, 0);
	}
	public CHARACTER(): TerminalNode {
		return this.getToken(OParser.CHARACTER, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(OParser.TEXT, 0);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(OParser.INTEGER, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(OParser.DECIMAL, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(OParser.DATE, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(OParser.TIME, 0);
	}
	public DATETIME(): TerminalNode {
		return this.getToken(OParser.DATETIME, 0);
	}
	public PERIOD(): TerminalNode {
		return this.getToken(OParser.PERIOD, 0);
	}
	public VERSION(): TerminalNode {
		return this.getToken(OParser.VERSION, 0);
	}
	public CODE(): TerminalNode {
		return this.getToken(OParser.CODE, 0);
	}
	public DOCUMENT(): TerminalNode {
		return this.getToken(OParser.DOCUMENT, 0);
	}
	public BLOB(): TerminalNode {
		return this.getToken(OParser.BLOB, 0);
	}
	public IMAGE(): TerminalNode {
		return this.getToken(OParser.IMAGE, 0);
	}
	public DBID(): TerminalNode {
		return this.getToken(OParser.DBID, 0);
	}
	public UUID(): TerminalNode {
		return this.getToken(OParser.UUID, 0);
	}
	public ITERATOR(): TerminalNode {
		return this.getToken(OParser.ITERATOR, 0);
	}
	public CURSOR(): TerminalNode {
		return this.getToken(OParser.CURSOR, 0);
	}
	public HTML(): TerminalNode {
		return this.getToken(OParser.HTML, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(OParser.ABSTRACT, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(OParser.ALL, 0);
	}
	public ALWAYS(): TerminalNode {
		return this.getToken(OParser.ALWAYS, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(OParser.AND, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(OParser.ANY, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(OParser.AS, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(OParser.ASC, 0);
	}
	public ATTR(): TerminalNode {
		return this.getToken(OParser.ATTR, 0);
	}
	public ATTRIBUTE(): TerminalNode {
		return this.getToken(OParser.ATTRIBUTE, 0);
	}
	public ATTRIBUTES(): TerminalNode {
		return this.getToken(OParser.ATTRIBUTES, 0);
	}
	public BINDINGS(): TerminalNode {
		return this.getToken(OParser.BINDINGS, 0);
	}
	public BREAK(): TerminalNode {
		return this.getToken(OParser.BREAK, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(OParser.BY, 0);
	}
	public CASE(): TerminalNode {
		return this.getToken(OParser.CASE, 0);
	}
	public CATCH(): TerminalNode {
		return this.getToken(OParser.CATCH, 0);
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(OParser.CATEGORY, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(OParser.CLASS, 0);
	}
	public CONTAINS(): TerminalNode {
		return this.getToken(OParser.CONTAINS, 0);
	}
	public DEF(): TerminalNode {
		return this.getToken(OParser.DEF, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(OParser.DEFAULT, 0);
	}
	public DEFINE(): TerminalNode {
		return this.getToken(OParser.DEFINE, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(OParser.DELETE, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(OParser.DESC, 0);
	}
	public DO(): TerminalNode {
		return this.getToken(OParser.DO, 0);
	}
	public DOING(): TerminalNode {
		return this.getToken(OParser.DOING, 0);
	}
	public EACH(): TerminalNode {
		return this.getToken(OParser.EACH, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(OParser.ELSE, 0);
	}
	public ENUM(): TerminalNode {
		return this.getToken(OParser.ENUM, 0);
	}
	public ENUMERATED(): TerminalNode {
		return this.getToken(OParser.ENUMERATED, 0);
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(OParser.EXCEPT, 0);
	}
	public EXECUTE(): TerminalNode {
		return this.getToken(OParser.EXECUTE, 0);
	}
	public EXPECTING(): TerminalNode {
		return this.getToken(OParser.EXPECTING, 0);
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(OParser.EXTENDS, 0);
	}
	public FETCH(): TerminalNode {
		return this.getToken(OParser.FETCH, 0);
	}
	public FILTERED(): TerminalNode {
		return this.getToken(OParser.FILTERED, 0);
	}
	public FINALLY(): TerminalNode {
		return this.getToken(OParser.FINALLY, 0);
	}
	public FLUSH(): TerminalNode {
		return this.getToken(OParser.FLUSH, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(OParser.FOR, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(OParser.FROM, 0);
	}
	public GETTER(): TerminalNode {
		return this.getToken(OParser.GETTER, 0);
	}
	public HAS(): TerminalNode {
		return this.getToken(OParser.HAS, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(OParser.IF, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(OParser.IN, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(OParser.INDEX, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(OParser.IS, 0);
	}
	public MATCHING(): TerminalNode {
		return this.getToken(OParser.MATCHING, 0);
	}
	public METHOD(): TerminalNode {
		return this.getToken(OParser.METHOD, 0);
	}
	public METHODS(): TerminalNode {
		return this.getToken(OParser.METHODS, 0);
	}
	public MODULO(): TerminalNode {
		return this.getToken(OParser.MODULO, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(OParser.MUTABLE, 0);
	}
	public NATIVE(): TerminalNode {
		return this.getToken(OParser.NATIVE, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(OParser.NONE, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(OParser.NOT, 0);
	}
	public NOTHING(): TerminalNode {
		return this.getToken(OParser.NOTHING, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(OParser.NULL, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(OParser.ON, 0);
	}
	public ONE(): TerminalNode {
		return this.getToken(OParser.ONE, 0);
	}
	public OPERATOR(): TerminalNode {
		return this.getToken(OParser.OPERATOR, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(OParser.OR, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(OParser.ORDER, 0);
	}
	public OTHERWISE(): TerminalNode {
		return this.getToken(OParser.OTHERWISE, 0);
	}
	public PASS(): TerminalNode {
		return this.getToken(OParser.PASS, 0);
	}
	public RAISE(): TerminalNode {
		return this.getToken(OParser.RAISE, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(OParser.READ, 0);
	}
	public RECEIVING(): TerminalNode {
		return this.getToken(OParser.RECEIVING, 0);
	}
	public RESOURCE(): TerminalNode {
		return this.getToken(OParser.RESOURCE, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(OParser.RETURN, 0);
	}
	public RETURNING(): TerminalNode {
		return this.getToken(OParser.RETURNING, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(OParser.ROWS, 0);
	}
	public SELF(): TerminalNode {
		return this.getToken(OParser.SELF, 0);
	}
	public SETTER(): TerminalNode {
		return this.getToken(OParser.SETTER, 0);
	}
	public SINGLETON(): TerminalNode {
		return this.getToken(OParser.SINGLETON, 0);
	}
	public SORTED(): TerminalNode {
		return this.getToken(OParser.SORTED, 0);
	}
	public SUPER(): TerminalNode {
		return this.getToken(OParser.SUPER, 0);
	}
	public STORABLE(): TerminalNode {
		return this.getToken(OParser.STORABLE, 0);
	}
	public STORE(): TerminalNode {
		return this.getToken(OParser.STORE, 0);
	}
	public SWITCH(): TerminalNode {
		return this.getToken(OParser.SWITCH, 0);
	}
	public TEST(): TerminalNode {
		return this.getToken(OParser.TEST, 0);
	}
	public THIS(): TerminalNode {
		return this.getToken(OParser.THIS, 0);
	}
	public THROW(): TerminalNode {
		return this.getToken(OParser.THROW, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(OParser.TO, 0);
	}
	public TRY(): TerminalNode {
		return this.getToken(OParser.TRY, 0);
	}
	public VERIFYING(): TerminalNode {
		return this.getToken(OParser.VERIFYING, 0);
	}
	public WIDGET(): TerminalNode {
		return this.getToken(OParser.WIDGET, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(OParser.WITH, 0);
	}
	public WHEN(): TerminalNode {
		return this.getToken(OParser.WHEN, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(OParser.WHERE, 0);
	}
	public WHILE(): TerminalNode {
		return this.getToken(OParser.WHILE, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(OParser.WRITE, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_keyword;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterKeyword) {
	 		listener.enterKeyword(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitKeyword) {
	 		listener.exitKeyword(this);
		}
	}
}


export class New_tokenContext extends ParserRuleContext {
	public _i1!: Token;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_new_token;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterNew_token) {
	 		listener.enterNew_token(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitNew_token) {
	 		listener.exitNew_token(this);
		}
	}
}


export class Key_tokenContext extends ParserRuleContext {
	public _i1!: Token;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_key_token;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterKey_token) {
	 		listener.enterKey_token(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitKey_token) {
	 		listener.exitKey_token(this);
		}
	}
}


export class Module_tokenContext extends ParserRuleContext {
	public _i1!: Token;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_module_token;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterModule_token) {
	 		listener.enterModule_token(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitModule_token) {
	 		listener.exitModule_token(this);
		}
	}
}


export class Value_tokenContext extends ParserRuleContext {
	public _i1!: Token;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_value_token;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterValue_token) {
	 		listener.enterValue_token(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitValue_token) {
	 		listener.exitValue_token(this);
		}
	}
}


export class Symbols_tokenContext extends ParserRuleContext {
	public _i1!: Token;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_symbols_token;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterSymbols_token) {
	 		listener.enterSymbols_token(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitSymbols_token) {
	 		listener.exitSymbols_token(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(OParser.EQ, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_assign;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterAssign) {
	 		listener.enterAssign(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitAssign) {
	 		listener.exitAssign(this);
		}
	}
}


export class MultiplyContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(OParser.STAR, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_multiply;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterMultiply) {
	 		listener.enterMultiply(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitMultiply) {
	 		listener.exitMultiply(this);
		}
	}
}


export class DivideContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SLASH(): TerminalNode {
		return this.getToken(OParser.SLASH, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_divide;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterDivide) {
	 		listener.enterDivide(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitDivide) {
	 		listener.exitDivide(this);
		}
	}
}


export class IdivideContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BSLASH(): TerminalNode {
		return this.getToken(OParser.BSLASH, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_idivide;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterIdivide) {
	 		listener.enterIdivide(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitIdivide) {
	 		listener.exitIdivide(this);
		}
	}
}


export class ModuloContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PERCENT(): TerminalNode {
		return this.getToken(OParser.PERCENT, 0);
	}
	public MODULO(): TerminalNode {
		return this.getToken(OParser.MODULO, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_modulo;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterModulo) {
	 		listener.enterModulo(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitModulo) {
	 		listener.exitModulo(this);
		}
	}
}


export class LfsContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_lfs;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterLfs) {
	 		listener.enterLfs(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitLfs) {
	 		listener.exitLfs(this);
		}
	}
}


export class LfpContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_lfp;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterLfp) {
	 		listener.enterLfp(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitLfp) {
	 		listener.exitLfp(this);
		}
	}
}


export class Javascript_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_statement;
	}
	public copyFrom(ctx: Javascript_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class JavascriptStatementContext extends Javascript_statementContext {
	public _exp!: Javascript_expressionContext;
	constructor(parser: OParser, ctx: Javascript_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptStatement) {
	 		listener.enterJavascriptStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptStatement) {
	 		listener.exitJavascriptStatement(this);
		}
	}
}
export class JavascriptReturnStatementContext extends Javascript_statementContext {
	public _exp!: Javascript_expressionContext;
	constructor(parser: OParser, ctx: Javascript_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RETURN(): TerminalNode {
		return this.getToken(OParser.RETURN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptReturnStatement) {
	 		listener.enterJavascriptReturnStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptReturnStatement) {
	 		listener.exitJavascriptReturnStatement(this);
		}
	}
}


export class Javascript_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_expression;
	}
	public copyFrom(ctx: Javascript_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavascriptSelectorExpressionContext extends Javascript_expressionContext {
	public _parent!: Javascript_expressionContext;
	public _child!: Javascript_selector_expressionContext;
	constructor(parser: OParser, ctx: Javascript_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
	public javascript_selector_expression(): Javascript_selector_expressionContext {
		return this.getTypedRuleContext(Javascript_selector_expressionContext, 0) as Javascript_selector_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptSelectorExpression) {
	 		listener.enterJavascriptSelectorExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptSelectorExpression) {
	 		listener.exitJavascriptSelectorExpression(this);
		}
	}
}
export class JavascriptPrimaryExpressionContext extends Javascript_expressionContext {
	public _exp!: Javascript_primary_expressionContext;
	constructor(parser: OParser, ctx: Javascript_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public javascript_primary_expression(): Javascript_primary_expressionContext {
		return this.getTypedRuleContext(Javascript_primary_expressionContext, 0) as Javascript_primary_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptPrimaryExpression) {
	 		listener.enterJavascriptPrimaryExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptPrimaryExpression) {
	 		listener.exitJavascriptPrimaryExpression(this);
		}
	}
}


export class Javascript_primary_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public javascript_this_expression(): Javascript_this_expressionContext {
		return this.getTypedRuleContext(Javascript_this_expressionContext, 0) as Javascript_this_expressionContext;
	}
	public javascript_new_expression(): Javascript_new_expressionContext {
		return this.getTypedRuleContext(Javascript_new_expressionContext, 0) as Javascript_new_expressionContext;
	}
	public javascript_parenthesis_expression(): Javascript_parenthesis_expressionContext {
		return this.getTypedRuleContext(Javascript_parenthesis_expressionContext, 0) as Javascript_parenthesis_expressionContext;
	}
	public javascript_identifier_expression(): Javascript_identifier_expressionContext {
		return this.getTypedRuleContext(Javascript_identifier_expressionContext, 0) as Javascript_identifier_expressionContext;
	}
	public javascript_literal_expression(): Javascript_literal_expressionContext {
		return this.getTypedRuleContext(Javascript_literal_expressionContext, 0) as Javascript_literal_expressionContext;
	}
	public javascript_method_expression(): Javascript_method_expressionContext {
		return this.getTypedRuleContext(Javascript_method_expressionContext, 0) as Javascript_method_expressionContext;
	}
	public javascript_item_expression(): Javascript_item_expressionContext {
		return this.getTypedRuleContext(Javascript_item_expressionContext, 0) as Javascript_item_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_primary_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascript_primary_expression) {
	 		listener.enterJavascript_primary_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascript_primary_expression) {
	 		listener.exitJavascript_primary_expression(this);
		}
	}
}


export class Javascript_this_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public this_expression(): This_expressionContext {
		return this.getTypedRuleContext(This_expressionContext, 0) as This_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_this_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascript_this_expression) {
	 		listener.enterJavascript_this_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascript_this_expression) {
	 		listener.exitJavascript_this_expression(this);
		}
	}
}


export class Javascript_new_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public new_token(): New_tokenContext {
		return this.getTypedRuleContext(New_tokenContext, 0) as New_tokenContext;
	}
	public javascript_method_expression(): Javascript_method_expressionContext {
		return this.getTypedRuleContext(Javascript_method_expressionContext, 0) as Javascript_method_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_new_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascript_new_expression) {
	 		listener.enterJavascript_new_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascript_new_expression) {
	 		listener.exitJavascript_new_expression(this);
		}
	}
}


export class Javascript_selector_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_selector_expression;
	}
	public copyFrom(ctx: Javascript_selector_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavascriptMemberExpressionContext extends Javascript_selector_expressionContext {
	public _name!: Javascript_identifierContext;
	constructor(parser: OParser, ctx: Javascript_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public javascript_identifier(): Javascript_identifierContext {
		return this.getTypedRuleContext(Javascript_identifierContext, 0) as Javascript_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptMemberExpression) {
	 		listener.enterJavascriptMemberExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptMemberExpression) {
	 		listener.exitJavascriptMemberExpression(this);
		}
	}
}
export class JavascriptItemExpressionContext extends Javascript_selector_expressionContext {
	public _exp!: Javascript_item_expressionContext;
	constructor(parser: OParser, ctx: Javascript_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public javascript_item_expression(): Javascript_item_expressionContext {
		return this.getTypedRuleContext(Javascript_item_expressionContext, 0) as Javascript_item_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptItemExpression) {
	 		listener.enterJavascriptItemExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptItemExpression) {
	 		listener.exitJavascriptItemExpression(this);
		}
	}
}
export class JavascriptMethodExpressionContext extends Javascript_selector_expressionContext {
	public _method!: Javascript_method_expressionContext;
	constructor(parser: OParser, ctx: Javascript_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public javascript_method_expression(): Javascript_method_expressionContext {
		return this.getTypedRuleContext(Javascript_method_expressionContext, 0) as Javascript_method_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptMethodExpression) {
	 		listener.enterJavascriptMethodExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptMethodExpression) {
	 		listener.exitJavascriptMethodExpression(this);
		}
	}
}


export class Javascript_method_expressionContext extends ParserRuleContext {
	public _name!: Javascript_identifierContext;
	public _args!: Javascript_argumentsContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public javascript_identifier(): Javascript_identifierContext {
		return this.getTypedRuleContext(Javascript_identifierContext, 0) as Javascript_identifierContext;
	}
	public javascript_arguments(): Javascript_argumentsContext {
		return this.getTypedRuleContext(Javascript_argumentsContext, 0) as Javascript_argumentsContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_method_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascript_method_expression) {
	 		listener.enterJavascript_method_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascript_method_expression) {
	 		listener.exitJavascript_method_expression(this);
		}
	}
}


export class Javascript_argumentsContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_arguments;
	}
	public copyFrom(ctx: Javascript_argumentsContext): void {
		super.copyFrom(ctx);
	}
}
export class JavascriptArgumentListContext extends Javascript_argumentsContext {
	public _item!: Javascript_expressionContext;
	constructor(parser: OParser, ctx: Javascript_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptArgumentList) {
	 		listener.enterJavascriptArgumentList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptArgumentList) {
	 		listener.exitJavascriptArgumentList(this);
		}
	}
}
export class JavascriptArgumentListItemContext extends Javascript_argumentsContext {
	public _items!: Javascript_argumentsContext;
	public _item!: Javascript_expressionContext;
	constructor(parser: OParser, ctx: Javascript_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(OParser.COMMA, 0);
	}
	public javascript_arguments(): Javascript_argumentsContext {
		return this.getTypedRuleContext(Javascript_argumentsContext, 0) as Javascript_argumentsContext;
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptArgumentListItem) {
	 		listener.enterJavascriptArgumentListItem(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptArgumentListItem) {
	 		listener.exitJavascriptArgumentListItem(this);
		}
	}
}


export class Javascript_item_expressionContext extends ParserRuleContext {
	public _exp!: Javascript_expressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_item_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascript_item_expression) {
	 		listener.enterJavascript_item_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascript_item_expression) {
	 		listener.exitJavascript_item_expression(this);
		}
	}
}


export class Javascript_parenthesis_expressionContext extends ParserRuleContext {
	public _exp!: Javascript_expressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_parenthesis_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascript_parenthesis_expression) {
	 		listener.enterJavascript_parenthesis_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascript_parenthesis_expression) {
	 		listener.exitJavascript_parenthesis_expression(this);
		}
	}
}


export class Javascript_identifier_expressionContext extends ParserRuleContext {
	public _name!: Javascript_identifierContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public javascript_identifier(): Javascript_identifierContext {
		return this.getTypedRuleContext(Javascript_identifierContext, 0) as Javascript_identifierContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_identifier_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascript_identifier_expression) {
	 		listener.enterJavascript_identifier_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascript_identifier_expression) {
	 		listener.exitJavascript_identifier_expression(this);
		}
	}
}


export class Javascript_literal_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_literal_expression;
	}
	public copyFrom(ctx: Javascript_literal_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavascriptIntegerLiteralContext extends Javascript_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Javascript_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(OParser.INTEGER_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptIntegerLiteral) {
	 		listener.enterJavascriptIntegerLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptIntegerLiteral) {
	 		listener.exitJavascriptIntegerLiteral(this);
		}
	}
}
export class JavascriptBooleanLiteralContext extends Javascript_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Javascript_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(OParser.BOOLEAN_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptBooleanLiteral) {
	 		listener.enterJavascriptBooleanLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptBooleanLiteral) {
	 		listener.exitJavascriptBooleanLiteral(this);
		}
	}
}
export class JavascriptCharacterLiteralContext extends Javascript_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Javascript_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(OParser.CHAR_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptCharacterLiteral) {
	 		listener.enterJavascriptCharacterLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptCharacterLiteral) {
	 		listener.exitJavascriptCharacterLiteral(this);
		}
	}
}
export class JavascriptTextLiteralContext extends Javascript_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Javascript_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(OParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptTextLiteral) {
	 		listener.enterJavascriptTextLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptTextLiteral) {
	 		listener.exitJavascriptTextLiteral(this);
		}
	}
}
export class JavascriptDecimalLiteralContext extends Javascript_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Javascript_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(OParser.DECIMAL_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascriptDecimalLiteral) {
	 		listener.enterJavascriptDecimalLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascriptDecimalLiteral) {
	 		listener.exitJavascriptDecimalLiteral(this);
		}
	}
}


export class Javascript_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
	public SYMBOL_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.SYMBOL_IDENTIFIER, 0);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.DOLLAR_IDENTIFIER, 0);
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.TYPE_IDENTIFIER, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_javascript_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavascript_identifier) {
	 		listener.enterJavascript_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavascript_identifier) {
	 		listener.exitJavascript_identifier(this);
		}
	}
}


export class Python_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_statement;
	}
	public copyFrom(ctx: Python_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonStatementContext extends Python_statementContext {
	public _exp!: Python_expressionContext;
	constructor(parser: OParser, ctx: Python_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonStatement) {
	 		listener.enterPythonStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonStatement) {
	 		listener.exitPythonStatement(this);
		}
	}
}
export class PythonReturnStatementContext extends Python_statementContext {
	public _exp!: Python_expressionContext;
	constructor(parser: OParser, ctx: Python_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RETURN(): TerminalNode {
		return this.getToken(OParser.RETURN, 0);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonReturnStatement) {
	 		listener.enterPythonReturnStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonReturnStatement) {
	 		listener.exitPythonReturnStatement(this);
		}
	}
}


export class Python_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_expression;
	}
	public copyFrom(ctx: Python_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonSelectorExpressionContext extends Python_expressionContext {
	public _parent!: Python_expressionContext;
	public _child!: Python_selector_expressionContext;
	constructor(parser: OParser, ctx: Python_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public python_selector_expression(): Python_selector_expressionContext {
		return this.getTypedRuleContext(Python_selector_expressionContext, 0) as Python_selector_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonSelectorExpression) {
	 		listener.enterPythonSelectorExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonSelectorExpression) {
	 		listener.exitPythonSelectorExpression(this);
		}
	}
}
export class PythonPrimaryExpressionContext extends Python_expressionContext {
	public _exp!: Python_primary_expressionContext;
	constructor(parser: OParser, ctx: Python_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_primary_expression(): Python_primary_expressionContext {
		return this.getTypedRuleContext(Python_primary_expressionContext, 0) as Python_primary_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonPrimaryExpression) {
	 		listener.enterPythonPrimaryExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonPrimaryExpression) {
	 		listener.exitPythonPrimaryExpression(this);
		}
	}
}


export class Python_primary_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_primary_expression;
	}
	public copyFrom(ctx: Python_primary_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonParenthesisExpressionContext extends Python_primary_expressionContext {
	public _exp!: Python_parenthesis_expressionContext;
	constructor(parser: OParser, ctx: Python_primary_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_parenthesis_expression(): Python_parenthesis_expressionContext {
		return this.getTypedRuleContext(Python_parenthesis_expressionContext, 0) as Python_parenthesis_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonParenthesisExpression) {
	 		listener.enterPythonParenthesisExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonParenthesisExpression) {
	 		listener.exitPythonParenthesisExpression(this);
		}
	}
}
export class PythonIdentifierExpressionContext extends Python_primary_expressionContext {
	public _exp!: Python_identifier_expressionContext;
	constructor(parser: OParser, ctx: Python_primary_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_identifier_expression(): Python_identifier_expressionContext {
		return this.getTypedRuleContext(Python_identifier_expressionContext, 0) as Python_identifier_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonIdentifierExpression) {
	 		listener.enterPythonIdentifierExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonIdentifierExpression) {
	 		listener.exitPythonIdentifierExpression(this);
		}
	}
}
export class PythonSelfExpressionContext extends Python_primary_expressionContext {
	public _exp!: Python_self_expressionContext;
	constructor(parser: OParser, ctx: Python_primary_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_self_expression(): Python_self_expressionContext {
		return this.getTypedRuleContext(Python_self_expressionContext, 0) as Python_self_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonSelfExpression) {
	 		listener.enterPythonSelfExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonSelfExpression) {
	 		listener.exitPythonSelfExpression(this);
		}
	}
}
export class PythonLiteralExpressionContext extends Python_primary_expressionContext {
	public _exp!: Python_literal_expressionContext;
	constructor(parser: OParser, ctx: Python_primary_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_literal_expression(): Python_literal_expressionContext {
		return this.getTypedRuleContext(Python_literal_expressionContext, 0) as Python_literal_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonLiteralExpression) {
	 		listener.enterPythonLiteralExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonLiteralExpression) {
	 		listener.exitPythonLiteralExpression(this);
		}
	}
}
export class PythonGlobalMethodExpressionContext extends Python_primary_expressionContext {
	public _exp!: Python_method_expressionContext;
	constructor(parser: OParser, ctx: Python_primary_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_method_expression(): Python_method_expressionContext {
		return this.getTypedRuleContext(Python_method_expressionContext, 0) as Python_method_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonGlobalMethodExpression) {
	 		listener.enterPythonGlobalMethodExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonGlobalMethodExpression) {
	 		listener.exitPythonGlobalMethodExpression(this);
		}
	}
}


export class Python_self_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public this_expression(): This_expressionContext {
		return this.getTypedRuleContext(This_expressionContext, 0) as This_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_self_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPython_self_expression) {
	 		listener.enterPython_self_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPython_self_expression) {
	 		listener.exitPython_self_expression(this);
		}
	}
}


export class Python_selector_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_selector_expression;
	}
	public copyFrom(ctx: Python_selector_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonMethodExpressionContext extends Python_selector_expressionContext {
	public _exp!: Python_method_expressionContext;
	constructor(parser: OParser, ctx: Python_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public python_method_expression(): Python_method_expressionContext {
		return this.getTypedRuleContext(Python_method_expressionContext, 0) as Python_method_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonMethodExpression) {
	 		listener.enterPythonMethodExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonMethodExpression) {
	 		listener.exitPythonMethodExpression(this);
		}
	}
}
export class PythonItemExpressionContext extends Python_selector_expressionContext {
	public _exp!: Python_expressionContext;
	constructor(parser: OParser, ctx: Python_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonItemExpression) {
	 		listener.enterPythonItemExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonItemExpression) {
	 		listener.exitPythonItemExpression(this);
		}
	}
}


export class Python_method_expressionContext extends ParserRuleContext {
	public _name!: Python_identifierContext;
	public _args!: Python_argument_listContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public python_identifier(): Python_identifierContext {
		return this.getTypedRuleContext(Python_identifierContext, 0) as Python_identifierContext;
	}
	public python_argument_list(): Python_argument_listContext {
		return this.getTypedRuleContext(Python_argument_listContext, 0) as Python_argument_listContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_method_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPython_method_expression) {
	 		listener.enterPython_method_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPython_method_expression) {
	 		listener.exitPython_method_expression(this);
		}
	}
}


export class Python_argument_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_argument_list;
	}
	public copyFrom(ctx: Python_argument_listContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonOrdinalOnlyArgumentListContext extends Python_argument_listContext {
	public _ordinal!: Python_ordinal_argument_listContext;
	constructor(parser: OParser, ctx: Python_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_ordinal_argument_list(): Python_ordinal_argument_listContext {
		return this.getTypedRuleContext(Python_ordinal_argument_listContext, 0) as Python_ordinal_argument_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonOrdinalOnlyArgumentList) {
	 		listener.enterPythonOrdinalOnlyArgumentList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonOrdinalOnlyArgumentList) {
	 		listener.exitPythonOrdinalOnlyArgumentList(this);
		}
	}
}
export class PythonNamedOnlyArgumentListContext extends Python_argument_listContext {
	public _named!: Python_named_argument_listContext;
	constructor(parser: OParser, ctx: Python_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_named_argument_list(): Python_named_argument_listContext {
		return this.getTypedRuleContext(Python_named_argument_listContext, 0) as Python_named_argument_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonNamedOnlyArgumentList) {
	 		listener.enterPythonNamedOnlyArgumentList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonNamedOnlyArgumentList) {
	 		listener.exitPythonNamedOnlyArgumentList(this);
		}
	}
}
export class PythonArgumentListContext extends Python_argument_listContext {
	public _ordinal!: Python_ordinal_argument_listContext;
	public _named!: Python_named_argument_listContext;
	constructor(parser: OParser, ctx: Python_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(OParser.COMMA, 0);
	}
	public python_ordinal_argument_list(): Python_ordinal_argument_listContext {
		return this.getTypedRuleContext(Python_ordinal_argument_listContext, 0) as Python_ordinal_argument_listContext;
	}
	public python_named_argument_list(): Python_named_argument_listContext {
		return this.getTypedRuleContext(Python_named_argument_listContext, 0) as Python_named_argument_listContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonArgumentList) {
	 		listener.enterPythonArgumentList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonArgumentList) {
	 		listener.exitPythonArgumentList(this);
		}
	}
}


export class Python_ordinal_argument_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_ordinal_argument_list;
	}
	public copyFrom(ctx: Python_ordinal_argument_listContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonOrdinalArgumentListContext extends Python_ordinal_argument_listContext {
	public _item!: Python_expressionContext;
	constructor(parser: OParser, ctx: Python_ordinal_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonOrdinalArgumentList) {
	 		listener.enterPythonOrdinalArgumentList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonOrdinalArgumentList) {
	 		listener.exitPythonOrdinalArgumentList(this);
		}
	}
}
export class PythonOrdinalArgumentListItemContext extends Python_ordinal_argument_listContext {
	public _items!: Python_ordinal_argument_listContext;
	public _item!: Python_expressionContext;
	constructor(parser: OParser, ctx: Python_ordinal_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(OParser.COMMA, 0);
	}
	public python_ordinal_argument_list(): Python_ordinal_argument_listContext {
		return this.getTypedRuleContext(Python_ordinal_argument_listContext, 0) as Python_ordinal_argument_listContext;
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonOrdinalArgumentListItem) {
	 		listener.enterPythonOrdinalArgumentListItem(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonOrdinalArgumentListItem) {
	 		listener.exitPythonOrdinalArgumentListItem(this);
		}
	}
}


export class Python_named_argument_listContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_named_argument_list;
	}
	public copyFrom(ctx: Python_named_argument_listContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonNamedArgumentListContext extends Python_named_argument_listContext {
	public _name!: Python_identifierContext;
	public _exp!: Python_expressionContext;
	constructor(parser: OParser, ctx: Python_named_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EQ(): TerminalNode {
		return this.getToken(OParser.EQ, 0);
	}
	public python_identifier(): Python_identifierContext {
		return this.getTypedRuleContext(Python_identifierContext, 0) as Python_identifierContext;
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonNamedArgumentList) {
	 		listener.enterPythonNamedArgumentList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonNamedArgumentList) {
	 		listener.exitPythonNamedArgumentList(this);
		}
	}
}
export class PythonNamedArgumentListItemContext extends Python_named_argument_listContext {
	public _items!: Python_named_argument_listContext;
	public _name!: Python_identifierContext;
	public _exp!: Python_expressionContext;
	constructor(parser: OParser, ctx: Python_named_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(OParser.COMMA, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(OParser.EQ, 0);
	}
	public python_named_argument_list(): Python_named_argument_listContext {
		return this.getTypedRuleContext(Python_named_argument_listContext, 0) as Python_named_argument_listContext;
	}
	public python_identifier(): Python_identifierContext {
		return this.getTypedRuleContext(Python_identifierContext, 0) as Python_identifierContext;
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonNamedArgumentListItem) {
	 		listener.enterPythonNamedArgumentListItem(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonNamedArgumentListItem) {
	 		listener.exitPythonNamedArgumentListItem(this);
		}
	}
}


export class Python_parenthesis_expressionContext extends ParserRuleContext {
	public _exp!: Python_expressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_parenthesis_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPython_parenthesis_expression) {
	 		listener.enterPython_parenthesis_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPython_parenthesis_expression) {
	 		listener.exitPython_parenthesis_expression(this);
		}
	}
}


export class Python_identifier_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_identifier_expression;
	}
	public copyFrom(ctx: Python_identifier_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonChildIdentifierContext extends Python_identifier_expressionContext {
	public _parent!: Python_identifier_expressionContext;
	public _name!: Python_identifierContext;
	constructor(parser: OParser, ctx: Python_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public python_identifier_expression(): Python_identifier_expressionContext {
		return this.getTypedRuleContext(Python_identifier_expressionContext, 0) as Python_identifier_expressionContext;
	}
	public python_identifier(): Python_identifierContext {
		return this.getTypedRuleContext(Python_identifierContext, 0) as Python_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonChildIdentifier) {
	 		listener.enterPythonChildIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonChildIdentifier) {
	 		listener.exitPythonChildIdentifier(this);
		}
	}
}
export class PythonPromptoIdentifierContext extends Python_identifier_expressionContext {
	constructor(parser: OParser, ctx: Python_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.DOLLAR_IDENTIFIER, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonPromptoIdentifier) {
	 		listener.enterPythonPromptoIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonPromptoIdentifier) {
	 		listener.exitPythonPromptoIdentifier(this);
		}
	}
}
export class PythonIdentifierContext extends Python_identifier_expressionContext {
	public _name!: Python_identifierContext;
	constructor(parser: OParser, ctx: Python_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_identifier(): Python_identifierContext {
		return this.getTypedRuleContext(Python_identifierContext, 0) as Python_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonIdentifier) {
	 		listener.enterPythonIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonIdentifier) {
	 		listener.exitPythonIdentifier(this);
		}
	}
}


export class Python_literal_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_literal_expression;
	}
	public copyFrom(ctx: Python_literal_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonIntegerLiteralContext extends Python_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Python_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(OParser.INTEGER_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonIntegerLiteral) {
	 		listener.enterPythonIntegerLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonIntegerLiteral) {
	 		listener.exitPythonIntegerLiteral(this);
		}
	}
}
export class PythonBooleanLiteralContext extends Python_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Python_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(OParser.BOOLEAN_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonBooleanLiteral) {
	 		listener.enterPythonBooleanLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonBooleanLiteral) {
	 		listener.exitPythonBooleanLiteral(this);
		}
	}
}
export class PythonCharacterLiteralContext extends Python_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Python_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(OParser.CHAR_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonCharacterLiteral) {
	 		listener.enterPythonCharacterLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonCharacterLiteral) {
	 		listener.exitPythonCharacterLiteral(this);
		}
	}
}
export class PythonTextLiteralContext extends Python_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Python_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(OParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonTextLiteral) {
	 		listener.enterPythonTextLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonTextLiteral) {
	 		listener.exitPythonTextLiteral(this);
		}
	}
}
export class PythonDecimalLiteralContext extends Python_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Python_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(OParser.DECIMAL_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPythonDecimalLiteral) {
	 		listener.enterPythonDecimalLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPythonDecimalLiteral) {
	 		listener.exitPythonDecimalLiteral(this);
		}
	}
}


export class Python_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
	public SYMBOL_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.SYMBOL_IDENTIFIER, 0);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.DOLLAR_IDENTIFIER, 0);
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.TYPE_IDENTIFIER, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_python_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterPython_identifier) {
	 		listener.enterPython_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitPython_identifier) {
	 		listener.exitPython_identifier(this);
		}
	}
}


export class Java_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_statement;
	}
	public copyFrom(ctx: Java_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaReturnStatementContext extends Java_statementContext {
	public _exp!: Java_expressionContext;
	constructor(parser: OParser, ctx: Java_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RETURN(): TerminalNode {
		return this.getToken(OParser.RETURN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaReturnStatement) {
	 		listener.enterJavaReturnStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaReturnStatement) {
	 		listener.exitJavaReturnStatement(this);
		}
	}
}
export class JavaStatementContext extends Java_statementContext {
	public _exp!: Java_expressionContext;
	constructor(parser: OParser, ctx: Java_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaStatement) {
	 		listener.enterJavaStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaStatement) {
	 		listener.exitJavaStatement(this);
		}
	}
}


export class Java_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_expression;
	}
	public copyFrom(ctx: Java_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaSelectorExpressionContext extends Java_expressionContext {
	public _parent!: Java_expressionContext;
	public _child!: Java_selector_expressionContext;
	constructor(parser: OParser, ctx: Java_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
	public java_selector_expression(): Java_selector_expressionContext {
		return this.getTypedRuleContext(Java_selector_expressionContext, 0) as Java_selector_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaSelectorExpression) {
	 		listener.enterJavaSelectorExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaSelectorExpression) {
	 		listener.exitJavaSelectorExpression(this);
		}
	}
}
export class JavaPrimaryExpressionContext extends Java_expressionContext {
	public _exp!: Java_primary_expressionContext;
	constructor(parser: OParser, ctx: Java_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_primary_expression(): Java_primary_expressionContext {
		return this.getTypedRuleContext(Java_primary_expressionContext, 0) as Java_primary_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaPrimaryExpression) {
	 		listener.enterJavaPrimaryExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaPrimaryExpression) {
	 		listener.exitJavaPrimaryExpression(this);
		}
	}
}


export class Java_primary_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public java_this_expression(): Java_this_expressionContext {
		return this.getTypedRuleContext(Java_this_expressionContext, 0) as Java_this_expressionContext;
	}
	public java_new_expression(): Java_new_expressionContext {
		return this.getTypedRuleContext(Java_new_expressionContext, 0) as Java_new_expressionContext;
	}
	public java_parenthesis_expression(): Java_parenthesis_expressionContext {
		return this.getTypedRuleContext(Java_parenthesis_expressionContext, 0) as Java_parenthesis_expressionContext;
	}
	public java_identifier_expression(): Java_identifier_expressionContext {
		return this.getTypedRuleContext(Java_identifier_expressionContext, 0) as Java_identifier_expressionContext;
	}
	public java_literal_expression(): Java_literal_expressionContext {
		return this.getTypedRuleContext(Java_literal_expressionContext, 0) as Java_literal_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_primary_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJava_primary_expression) {
	 		listener.enterJava_primary_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJava_primary_expression) {
	 		listener.exitJava_primary_expression(this);
		}
	}
}


export class Java_this_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public this_expression(): This_expressionContext {
		return this.getTypedRuleContext(This_expressionContext, 0) as This_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_this_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJava_this_expression) {
	 		listener.enterJava_this_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJava_this_expression) {
	 		listener.exitJava_this_expression(this);
		}
	}
}


export class Java_new_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public new_token(): New_tokenContext {
		return this.getTypedRuleContext(New_tokenContext, 0) as New_tokenContext;
	}
	public java_method_expression(): Java_method_expressionContext {
		return this.getTypedRuleContext(Java_method_expressionContext, 0) as Java_method_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_new_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJava_new_expression) {
	 		listener.enterJava_new_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJava_new_expression) {
	 		listener.exitJava_new_expression(this);
		}
	}
}


export class Java_selector_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_selector_expression;
	}
	public copyFrom(ctx: Java_selector_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaItemExpressionContext extends Java_selector_expressionContext {
	public _exp!: Java_item_expressionContext;
	constructor(parser: OParser, ctx: Java_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_item_expression(): Java_item_expressionContext {
		return this.getTypedRuleContext(Java_item_expressionContext, 0) as Java_item_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaItemExpression) {
	 		listener.enterJavaItemExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaItemExpression) {
	 		listener.exitJavaItemExpression(this);
		}
	}
}
export class JavaMethodExpressionContext extends Java_selector_expressionContext {
	public _exp!: Java_method_expressionContext;
	constructor(parser: OParser, ctx: Java_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public java_method_expression(): Java_method_expressionContext {
		return this.getTypedRuleContext(Java_method_expressionContext, 0) as Java_method_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaMethodExpression) {
	 		listener.enterJavaMethodExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaMethodExpression) {
	 		listener.exitJavaMethodExpression(this);
		}
	}
}


export class Java_method_expressionContext extends ParserRuleContext {
	public _name!: Java_identifierContext;
	public _args!: Java_argumentsContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public java_identifier(): Java_identifierContext {
		return this.getTypedRuleContext(Java_identifierContext, 0) as Java_identifierContext;
	}
	public java_arguments(): Java_argumentsContext {
		return this.getTypedRuleContext(Java_argumentsContext, 0) as Java_argumentsContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_method_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJava_method_expression) {
	 		listener.enterJava_method_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJava_method_expression) {
	 		listener.exitJava_method_expression(this);
		}
	}
}


export class Java_argumentsContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_arguments;
	}
	public copyFrom(ctx: Java_argumentsContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaArgumentListItemContext extends Java_argumentsContext {
	public _items!: Java_argumentsContext;
	public _item!: Java_expressionContext;
	constructor(parser: OParser, ctx: Java_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(OParser.COMMA, 0);
	}
	public java_arguments(): Java_argumentsContext {
		return this.getTypedRuleContext(Java_argumentsContext, 0) as Java_argumentsContext;
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaArgumentListItem) {
	 		listener.enterJavaArgumentListItem(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaArgumentListItem) {
	 		listener.exitJavaArgumentListItem(this);
		}
	}
}
export class JavaArgumentListContext extends Java_argumentsContext {
	public _item!: Java_expressionContext;
	constructor(parser: OParser, ctx: Java_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaArgumentList) {
	 		listener.enterJavaArgumentList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaArgumentList) {
	 		listener.exitJavaArgumentList(this);
		}
	}
}


export class Java_item_expressionContext extends ParserRuleContext {
	public _exp!: Java_expressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_item_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJava_item_expression) {
	 		listener.enterJava_item_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJava_item_expression) {
	 		listener.exitJava_item_expression(this);
		}
	}
}


export class Java_parenthesis_expressionContext extends ParserRuleContext {
	public _exp!: Java_expressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_parenthesis_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJava_parenthesis_expression) {
	 		listener.enterJava_parenthesis_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJava_parenthesis_expression) {
	 		listener.exitJava_parenthesis_expression(this);
		}
	}
}


export class Java_identifier_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_identifier_expression;
	}
	public copyFrom(ctx: Java_identifier_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaIdentifierContext extends Java_identifier_expressionContext {
	public _name!: Java_identifierContext;
	constructor(parser: OParser, ctx: Java_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_identifier(): Java_identifierContext {
		return this.getTypedRuleContext(Java_identifierContext, 0) as Java_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaIdentifier) {
	 		listener.enterJavaIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaIdentifier) {
	 		listener.exitJavaIdentifier(this);
		}
	}
}
export class JavaChildIdentifierContext extends Java_identifier_expressionContext {
	public _parent!: Java_identifier_expressionContext;
	public _name!: Java_identifierContext;
	constructor(parser: OParser, ctx: Java_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public java_identifier_expression(): Java_identifier_expressionContext {
		return this.getTypedRuleContext(Java_identifier_expressionContext, 0) as Java_identifier_expressionContext;
	}
	public java_identifier(): Java_identifierContext {
		return this.getTypedRuleContext(Java_identifierContext, 0) as Java_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaChildIdentifier) {
	 		listener.enterJavaChildIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaChildIdentifier) {
	 		listener.exitJavaChildIdentifier(this);
		}
	}
}


export class Java_class_identifier_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_class_identifier_expression;
	}
	public copyFrom(ctx: Java_class_identifier_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaClassIdentifierContext extends Java_class_identifier_expressionContext {
	public _klass!: Java_identifier_expressionContext;
	constructor(parser: OParser, ctx: Java_class_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_identifier_expression(): Java_identifier_expressionContext {
		return this.getTypedRuleContext(Java_identifier_expressionContext, 0) as Java_identifier_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaClassIdentifier) {
	 		listener.enterJavaClassIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaClassIdentifier) {
	 		listener.exitJavaClassIdentifier(this);
		}
	}
}
export class JavaChildClassIdentifierContext extends Java_class_identifier_expressionContext {
	public _parent!: Java_class_identifier_expressionContext;
	public _name!: Token;
	constructor(parser: OParser, ctx: Java_class_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_class_identifier_expression(): Java_class_identifier_expressionContext {
		return this.getTypedRuleContext(Java_class_identifier_expressionContext, 0) as Java_class_identifier_expressionContext;
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.DOLLAR_IDENTIFIER, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaChildClassIdentifier) {
	 		listener.enterJavaChildClassIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaChildClassIdentifier) {
	 		listener.exitJavaChildClassIdentifier(this);
		}
	}
}


export class Java_literal_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_literal_expression;
	}
	public copyFrom(ctx: Java_literal_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaBooleanLiteralContext extends Java_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Java_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(OParser.BOOLEAN_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaBooleanLiteral) {
	 		listener.enterJavaBooleanLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaBooleanLiteral) {
	 		listener.exitJavaBooleanLiteral(this);
		}
	}
}
export class JavaCharacterLiteralContext extends Java_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Java_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(OParser.CHAR_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaCharacterLiteral) {
	 		listener.enterJavaCharacterLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaCharacterLiteral) {
	 		listener.exitJavaCharacterLiteral(this);
		}
	}
}
export class JavaIntegerLiteralContext extends Java_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Java_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(OParser.INTEGER_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaIntegerLiteral) {
	 		listener.enterJavaIntegerLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaIntegerLiteral) {
	 		listener.exitJavaIntegerLiteral(this);
		}
	}
}
export class JavaTextLiteralContext extends Java_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Java_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(OParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaTextLiteral) {
	 		listener.enterJavaTextLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaTextLiteral) {
	 		listener.exitJavaTextLiteral(this);
		}
	}
}
export class JavaDecimalLiteralContext extends Java_literal_expressionContext {
	public _t!: Token;
	constructor(parser: OParser, ctx: Java_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(OParser.DECIMAL_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJavaDecimalLiteral) {
	 		listener.enterJavaDecimalLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJavaDecimalLiteral) {
	 		listener.exitJavaDecimalLiteral(this);
		}
	}
}


export class Java_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
	public SYMBOL_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.SYMBOL_IDENTIFIER, 0);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.DOLLAR_IDENTIFIER, 0);
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.TYPE_IDENTIFIER, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_java_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJava_identifier) {
	 		listener.enterJava_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJava_identifier) {
	 		listener.exitJava_identifier(this);
		}
	}
}


export class Csharp_statementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_statement;
	}
	public copyFrom(ctx: Csharp_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpReturnStatementContext extends Csharp_statementContext {
	public _exp!: Csharp_expressionContext;
	constructor(parser: OParser, ctx: Csharp_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RETURN(): TerminalNode {
		return this.getToken(OParser.RETURN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpReturnStatement) {
	 		listener.enterCSharpReturnStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpReturnStatement) {
	 		listener.exitCSharpReturnStatement(this);
		}
	}
}
export class CSharpStatementContext extends Csharp_statementContext {
	public _exp!: Csharp_expressionContext;
	constructor(parser: OParser, ctx: Csharp_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpStatement) {
	 		listener.enterCSharpStatement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpStatement) {
	 		listener.exitCSharpStatement(this);
		}
	}
}


export class Csharp_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_expression;
	}
	public copyFrom(ctx: Csharp_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpSelectorExpressionContext extends Csharp_expressionContext {
	public _parent!: Csharp_expressionContext;
	public _child!: Csharp_selector_expressionContext;
	constructor(parser: OParser, ctx: Csharp_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
	public csharp_selector_expression(): Csharp_selector_expressionContext {
		return this.getTypedRuleContext(Csharp_selector_expressionContext, 0) as Csharp_selector_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpSelectorExpression) {
	 		listener.enterCSharpSelectorExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpSelectorExpression) {
	 		listener.exitCSharpSelectorExpression(this);
		}
	}
}
export class CSharpPrimaryExpressionContext extends Csharp_expressionContext {
	public _exp!: Csharp_primary_expressionContext;
	constructor(parser: OParser, ctx: Csharp_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public csharp_primary_expression(): Csharp_primary_expressionContext {
		return this.getTypedRuleContext(Csharp_primary_expressionContext, 0) as Csharp_primary_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpPrimaryExpression) {
	 		listener.enterCSharpPrimaryExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpPrimaryExpression) {
	 		listener.exitCSharpPrimaryExpression(this);
		}
	}
}


export class Csharp_primary_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public csharp_this_expression(): Csharp_this_expressionContext {
		return this.getTypedRuleContext(Csharp_this_expressionContext, 0) as Csharp_this_expressionContext;
	}
	public csharp_new_expression(): Csharp_new_expressionContext {
		return this.getTypedRuleContext(Csharp_new_expressionContext, 0) as Csharp_new_expressionContext;
	}
	public csharp_parenthesis_expression(): Csharp_parenthesis_expressionContext {
		return this.getTypedRuleContext(Csharp_parenthesis_expressionContext, 0) as Csharp_parenthesis_expressionContext;
	}
	public csharp_identifier_expression(): Csharp_identifier_expressionContext {
		return this.getTypedRuleContext(Csharp_identifier_expressionContext, 0) as Csharp_identifier_expressionContext;
	}
	public csharp_literal_expression(): Csharp_literal_expressionContext {
		return this.getTypedRuleContext(Csharp_literal_expressionContext, 0) as Csharp_literal_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_primary_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCsharp_primary_expression) {
	 		listener.enterCsharp_primary_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCsharp_primary_expression) {
	 		listener.exitCsharp_primary_expression(this);
		}
	}
}


export class Csharp_this_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public this_expression(): This_expressionContext {
		return this.getTypedRuleContext(This_expressionContext, 0) as This_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_this_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCsharp_this_expression) {
	 		listener.enterCsharp_this_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCsharp_this_expression) {
	 		listener.exitCsharp_this_expression(this);
		}
	}
}


export class Csharp_new_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public new_token(): New_tokenContext {
		return this.getTypedRuleContext(New_tokenContext, 0) as New_tokenContext;
	}
	public csharp_method_expression(): Csharp_method_expressionContext {
		return this.getTypedRuleContext(Csharp_method_expressionContext, 0) as Csharp_method_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_new_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCsharp_new_expression) {
	 		listener.enterCsharp_new_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCsharp_new_expression) {
	 		listener.exitCsharp_new_expression(this);
		}
	}
}


export class Csharp_selector_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_selector_expression;
	}
	public copyFrom(ctx: Csharp_selector_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpMethodExpressionContext extends Csharp_selector_expressionContext {
	public _exp!: Csharp_method_expressionContext;
	constructor(parser: OParser, ctx: Csharp_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public csharp_method_expression(): Csharp_method_expressionContext {
		return this.getTypedRuleContext(Csharp_method_expressionContext, 0) as Csharp_method_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpMethodExpression) {
	 		listener.enterCSharpMethodExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpMethodExpression) {
	 		listener.exitCSharpMethodExpression(this);
		}
	}
}
export class CSharpItemExpressionContext extends Csharp_selector_expressionContext {
	public _exp!: Csharp_item_expressionContext;
	constructor(parser: OParser, ctx: Csharp_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public csharp_item_expression(): Csharp_item_expressionContext {
		return this.getTypedRuleContext(Csharp_item_expressionContext, 0) as Csharp_item_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpItemExpression) {
	 		listener.enterCSharpItemExpression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpItemExpression) {
	 		listener.exitCSharpItemExpression(this);
		}
	}
}


export class Csharp_method_expressionContext extends ParserRuleContext {
	public _name!: Csharp_identifierContext;
	public _args!: Csharp_argumentsContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public csharp_identifier(): Csharp_identifierContext {
		return this.getTypedRuleContext(Csharp_identifierContext, 0) as Csharp_identifierContext;
	}
	public csharp_arguments(): Csharp_argumentsContext {
		return this.getTypedRuleContext(Csharp_argumentsContext, 0) as Csharp_argumentsContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_method_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCsharp_method_expression) {
	 		listener.enterCsharp_method_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCsharp_method_expression) {
	 		listener.exitCsharp_method_expression(this);
		}
	}
}


export class Csharp_argumentsContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_arguments;
	}
	public copyFrom(ctx: Csharp_argumentsContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpArgumentListContext extends Csharp_argumentsContext {
	public _item!: Csharp_expressionContext;
	constructor(parser: OParser, ctx: Csharp_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpArgumentList) {
	 		listener.enterCSharpArgumentList(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpArgumentList) {
	 		listener.exitCSharpArgumentList(this);
		}
	}
}
export class CSharpArgumentListItemContext extends Csharp_argumentsContext {
	public _items!: Csharp_argumentsContext;
	public _item!: Csharp_expressionContext;
	constructor(parser: OParser, ctx: Csharp_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(OParser.COMMA, 0);
	}
	public csharp_arguments(): Csharp_argumentsContext {
		return this.getTypedRuleContext(Csharp_argumentsContext, 0) as Csharp_argumentsContext;
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpArgumentListItem) {
	 		listener.enterCSharpArgumentListItem(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpArgumentListItem) {
	 		listener.exitCSharpArgumentListItem(this);
		}
	}
}


export class Csharp_item_expressionContext extends ParserRuleContext {
	public _exp!: Csharp_expressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(OParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(OParser.RBRAK, 0);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_item_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCsharp_item_expression) {
	 		listener.enterCsharp_item_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCsharp_item_expression) {
	 		listener.exitCsharp_item_expression(this);
		}
	}
}


export class Csharp_parenthesis_expressionContext extends ParserRuleContext {
	public _exp!: Csharp_expressionContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(OParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(OParser.RPAR, 0);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_parenthesis_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCsharp_parenthesis_expression) {
	 		listener.enterCsharp_parenthesis_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCsharp_parenthesis_expression) {
	 		listener.exitCsharp_parenthesis_expression(this);
		}
	}
}


export class Csharp_identifier_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_identifier_expression;
	}
	public copyFrom(ctx: Csharp_identifier_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpIdentifierContext extends Csharp_identifier_expressionContext {
	public _name!: Csharp_identifierContext;
	constructor(parser: OParser, ctx: Csharp_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public csharp_identifier(): Csharp_identifierContext {
		return this.getTypedRuleContext(Csharp_identifierContext, 0) as Csharp_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpIdentifier) {
	 		listener.enterCSharpIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpIdentifier) {
	 		listener.exitCSharpIdentifier(this);
		}
	}
}
export class CSharpChildIdentifierContext extends Csharp_identifier_expressionContext {
	public _parent!: Csharp_identifier_expressionContext;
	public _name!: Csharp_identifierContext;
	constructor(parser: OParser, ctx: Csharp_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(OParser.DOT, 0);
	}
	public csharp_identifier_expression(): Csharp_identifier_expressionContext {
		return this.getTypedRuleContext(Csharp_identifier_expressionContext, 0) as Csharp_identifier_expressionContext;
	}
	public csharp_identifier(): Csharp_identifierContext {
		return this.getTypedRuleContext(Csharp_identifierContext, 0) as Csharp_identifierContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpChildIdentifier) {
	 		listener.enterCSharpChildIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpChildIdentifier) {
	 		listener.exitCSharpChildIdentifier(this);
		}
	}
}
export class CSharpPromptoIdentifierContext extends Csharp_identifier_expressionContext {
	constructor(parser: OParser, ctx: Csharp_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.DOLLAR_IDENTIFIER, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpPromptoIdentifier) {
	 		listener.enterCSharpPromptoIdentifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpPromptoIdentifier) {
	 		listener.exitCSharpPromptoIdentifier(this);
		}
	}
}


export class Csharp_literal_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_literal_expression;
	}
	public copyFrom(ctx: Csharp_literal_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpBooleanLiteralContext extends Csharp_literal_expressionContext {
	constructor(parser: OParser, ctx: Csharp_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(OParser.BOOLEAN_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpBooleanLiteral) {
	 		listener.enterCSharpBooleanLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpBooleanLiteral) {
	 		listener.exitCSharpBooleanLiteral(this);
		}
	}
}
export class CSharpIntegerLiteralContext extends Csharp_literal_expressionContext {
	constructor(parser: OParser, ctx: Csharp_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(OParser.INTEGER_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpIntegerLiteral) {
	 		listener.enterCSharpIntegerLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpIntegerLiteral) {
	 		listener.exitCSharpIntegerLiteral(this);
		}
	}
}
export class CSharpDecimalLiteralContext extends Csharp_literal_expressionContext {
	constructor(parser: OParser, ctx: Csharp_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(OParser.DECIMAL_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpDecimalLiteral) {
	 		listener.enterCSharpDecimalLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpDecimalLiteral) {
	 		listener.exitCSharpDecimalLiteral(this);
		}
	}
}
export class CSharpCharacterLiteralContext extends Csharp_literal_expressionContext {
	constructor(parser: OParser, ctx: Csharp_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(OParser.CHAR_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpCharacterLiteral) {
	 		listener.enterCSharpCharacterLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpCharacterLiteral) {
	 		listener.exitCSharpCharacterLiteral(this);
		}
	}
}
export class CSharpTextLiteralContext extends Csharp_literal_expressionContext {
	constructor(parser: OParser, ctx: Csharp_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(OParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCSharpTextLiteral) {
	 		listener.enterCSharpTextLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCSharpTextLiteral) {
	 		listener.exitCSharpTextLiteral(this);
		}
	}
}


export class Csharp_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.VARIABLE_IDENTIFIER, 0);
	}
	public SYMBOL_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.SYMBOL_IDENTIFIER, 0);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.DOLLAR_IDENTIFIER, 0);
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(OParser.TYPE_IDENTIFIER, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_csharp_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCsharp_identifier) {
	 		listener.enterCsharp_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCsharp_identifier) {
	 		listener.exitCsharp_identifier(this);
		}
	}
}


export class Jsx_expressionContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsx_element(): Jsx_elementContext {
		return this.getTypedRuleContext(Jsx_elementContext, 0) as Jsx_elementContext;
	}
	public jsx_fragment(): Jsx_fragmentContext {
		return this.getTypedRuleContext(Jsx_fragmentContext, 0) as Jsx_fragmentContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_expression) {
	 		listener.enterJsx_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_expression) {
	 		listener.exitJsx_expression(this);
		}
	}
}


export class Jsx_elementContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_element;
	}
	public copyFrom(ctx: Jsx_elementContext): void {
		super.copyFrom(ctx);
	}
}
export class JsxSelfClosingContext extends Jsx_elementContext {
	public _jsx!: Jsx_self_closingContext;
	constructor(parser: OParser, ctx: Jsx_elementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public jsx_self_closing(): Jsx_self_closingContext {
		return this.getTypedRuleContext(Jsx_self_closingContext, 0) as Jsx_self_closingContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsxSelfClosing) {
	 		listener.enterJsxSelfClosing(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsxSelfClosing) {
	 		listener.exitJsxSelfClosing(this);
		}
	}
}
export class JsxElementContext extends Jsx_elementContext {
	public _opening!: Jsx_openingContext;
	public _children_!: Jsx_childrenContext;
	public _closing!: Jsx_closingContext;
	constructor(parser: OParser, ctx: Jsx_elementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public jsx_opening(): Jsx_openingContext {
		return this.getTypedRuleContext(Jsx_openingContext, 0) as Jsx_openingContext;
	}
	public jsx_closing(): Jsx_closingContext {
		return this.getTypedRuleContext(Jsx_closingContext, 0) as Jsx_closingContext;
	}
	public jsx_children(): Jsx_childrenContext {
		return this.getTypedRuleContext(Jsx_childrenContext, 0) as Jsx_childrenContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsxElement) {
	 		listener.enterJsxElement(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsxElement) {
	 		listener.exitJsxElement(this);
		}
	}
}


export class Jsx_fragmentContext extends ParserRuleContext {
	public _children_!: Jsx_childrenContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsx_fragment_start(): Jsx_fragment_startContext {
		return this.getTypedRuleContext(Jsx_fragment_startContext, 0) as Jsx_fragment_startContext;
	}
	public ws_plus_list(): Ws_plusContext[] {
		return this.getTypedRuleContexts(Ws_plusContext) as Ws_plusContext[];
	}
	public ws_plus(i: number): Ws_plusContext {
		return this.getTypedRuleContext(Ws_plusContext, i) as Ws_plusContext;
	}
	public jsx_fragment_end(): Jsx_fragment_endContext {
		return this.getTypedRuleContext(Jsx_fragment_endContext, 0) as Jsx_fragment_endContext;
	}
	public jsx_children(): Jsx_childrenContext {
		return this.getTypedRuleContext(Jsx_childrenContext, 0) as Jsx_childrenContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_fragment;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_fragment) {
	 		listener.enterJsx_fragment(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_fragment) {
	 		listener.exitJsx_fragment(this);
		}
	}
}


export class Jsx_fragment_startContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public LTGT(): TerminalNode {
		return this.getToken(OParser.LTGT, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_fragment_start;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_fragment_start) {
	 		listener.enterJsx_fragment_start(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_fragment_start) {
	 		listener.exitJsx_fragment_start(this);
		}
	}
}


export class Jsx_fragment_endContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(OParser.SLASH, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_fragment_end;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_fragment_end) {
	 		listener.enterJsx_fragment_end(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_fragment_end) {
	 		listener.exitJsx_fragment_end(this);
		}
	}
}


export class Jsx_self_closingContext extends ParserRuleContext {
	public _name!: Jsx_element_nameContext;
	public _attributes!: Jsx_attributeContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public ws_plus(): Ws_plusContext {
		return this.getTypedRuleContext(Ws_plusContext, 0) as Ws_plusContext;
	}
	public SLASH(): TerminalNode {
		return this.getToken(OParser.SLASH, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public jsx_element_name(): Jsx_element_nameContext {
		return this.getTypedRuleContext(Jsx_element_nameContext, 0) as Jsx_element_nameContext;
	}
	public jsx_attribute_list(): Jsx_attributeContext[] {
		return this.getTypedRuleContexts(Jsx_attributeContext) as Jsx_attributeContext[];
	}
	public jsx_attribute(i: number): Jsx_attributeContext {
		return this.getTypedRuleContext(Jsx_attributeContext, i) as Jsx_attributeContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_self_closing;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_self_closing) {
	 		listener.enterJsx_self_closing(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_self_closing) {
	 		listener.exitJsx_self_closing(this);
		}
	}
}


export class Jsx_openingContext extends ParserRuleContext {
	public _name!: Jsx_element_nameContext;
	public _attributes!: Jsx_attributeContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public ws_plus(): Ws_plusContext {
		return this.getTypedRuleContext(Ws_plusContext, 0) as Ws_plusContext;
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public jsx_element_name(): Jsx_element_nameContext {
		return this.getTypedRuleContext(Jsx_element_nameContext, 0) as Jsx_element_nameContext;
	}
	public jsx_attribute_list(): Jsx_attributeContext[] {
		return this.getTypedRuleContexts(Jsx_attributeContext) as Jsx_attributeContext[];
	}
	public jsx_attribute(i: number): Jsx_attributeContext {
		return this.getTypedRuleContext(Jsx_attributeContext, i) as Jsx_attributeContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_opening;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_opening) {
	 		listener.enterJsx_opening(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_opening) {
	 		listener.exitJsx_opening(this);
		}
	}
}


export class Jsx_closingContext extends ParserRuleContext {
	public _name!: Jsx_element_nameContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(OParser.SLASH, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public jsx_element_name(): Jsx_element_nameContext {
		return this.getTypedRuleContext(Jsx_element_nameContext, 0) as Jsx_element_nameContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_closing;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_closing) {
	 		listener.enterJsx_closing(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_closing) {
	 		listener.exitJsx_closing(this);
		}
	}
}


export class Jsx_element_nameContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsx_identifier_list(): Jsx_identifierContext[] {
		return this.getTypedRuleContexts(Jsx_identifierContext) as Jsx_identifierContext[];
	}
	public jsx_identifier(i: number): Jsx_identifierContext {
		return this.getTypedRuleContext(Jsx_identifierContext, i) as Jsx_identifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(OParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(OParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_element_name;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_element_name) {
	 		listener.enterJsx_element_name(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_element_name) {
	 		listener.exitJsx_element_name(this);
		}
	}
}


export class Jsx_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_or_keyword(): Identifier_or_keywordContext {
		return this.getTypedRuleContext(Identifier_or_keywordContext, 0) as Identifier_or_keywordContext;
	}
	public nospace_hyphen_identifier_or_keyword_list(): Nospace_hyphen_identifier_or_keywordContext[] {
		return this.getTypedRuleContexts(Nospace_hyphen_identifier_or_keywordContext) as Nospace_hyphen_identifier_or_keywordContext[];
	}
	public nospace_hyphen_identifier_or_keyword(i: number): Nospace_hyphen_identifier_or_keywordContext {
		return this.getTypedRuleContext(Nospace_hyphen_identifier_or_keywordContext, i) as Nospace_hyphen_identifier_or_keywordContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_identifier) {
	 		listener.enterJsx_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_identifier) {
	 		listener.exitJsx_identifier(this);
		}
	}
}


export class Jsx_attributeContext extends ParserRuleContext {
	public _name!: Jsx_identifierContext;
	public _value!: Jsx_attribute_valueContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ws_plus(): Ws_plusContext {
		return this.getTypedRuleContext(Ws_plusContext, 0) as Ws_plusContext;
	}
	public jsx_identifier(): Jsx_identifierContext {
		return this.getTypedRuleContext(Jsx_identifierContext, 0) as Jsx_identifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(OParser.EQ, 0);
	}
	public jsx_attribute_value(): Jsx_attribute_valueContext {
		return this.getTypedRuleContext(Jsx_attribute_valueContext, 0) as Jsx_attribute_valueContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_attribute;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_attribute) {
	 		listener.enterJsx_attribute(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_attribute) {
	 		listener.exitJsx_attribute(this);
		}
	}
}


export class Jsx_attribute_valueContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_attribute_value;
	}
	public copyFrom(ctx: Jsx_attribute_valueContext): void {
		super.copyFrom(ctx);
	}
}
export class JsxValueContext extends Jsx_attribute_valueContext {
	public _exp!: ExpressionContext;
	constructor(parser: OParser, ctx: Jsx_attribute_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsxValue) {
	 		listener.enterJsxValue(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsxValue) {
	 		listener.exitJsxValue(this);
		}
	}
}
export class JsxLiteralContext extends Jsx_attribute_valueContext {
	constructor(parser: OParser, ctx: Jsx_attribute_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(OParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsxLiteral) {
	 		listener.enterJsxLiteral(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsxLiteral) {
	 		listener.exitJsxLiteral(this);
		}
	}
}


export class Jsx_childrenContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsx_child_list(): Jsx_childContext[] {
		return this.getTypedRuleContexts(Jsx_childContext) as Jsx_childContext[];
	}
	public jsx_child(i: number): Jsx_childContext {
		return this.getTypedRuleContext(Jsx_childContext, i) as Jsx_childContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_children;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_children) {
	 		listener.enterJsx_children(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_children) {
	 		listener.exitJsx_children(this);
		}
	}
}


export class Jsx_childContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_child;
	}
	public copyFrom(ctx: Jsx_childContext): void {
		super.copyFrom(ctx);
	}
}
export class JsxTextContext extends Jsx_childContext {
	public _text!: Jsx_textContext;
	constructor(parser: OParser, ctx: Jsx_childContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public jsx_text(): Jsx_textContext {
		return this.getTypedRuleContext(Jsx_textContext, 0) as Jsx_textContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsxText) {
	 		listener.enterJsxText(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsxText) {
	 		listener.exitJsxText(this);
		}
	}
}
export class JsxChildContext extends Jsx_childContext {
	public _jsx!: Jsx_elementContext;
	constructor(parser: OParser, ctx: Jsx_childContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public jsx_element(): Jsx_elementContext {
		return this.getTypedRuleContext(Jsx_elementContext, 0) as Jsx_elementContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsxChild) {
	 		listener.enterJsxChild(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsxChild) {
	 		listener.exitJsxChild(this);
		}
	}
}
export class JsxCodeContext extends Jsx_childContext {
	public _exp!: ExpressionContext;
	constructor(parser: OParser, ctx: Jsx_childContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsxCode) {
	 		listener.enterJsxCode(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsxCode) {
	 		listener.exitJsxCode(this);
		}
	}
}


export class Jsx_textContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public jsx_char_list(): Jsx_charContext[] {
		return this.getTypedRuleContexts(Jsx_charContext) as Jsx_charContext[];
	}
	public jsx_char(i: number): Jsx_charContext {
		return this.getTypedRuleContext(Jsx_charContext, i) as Jsx_charContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_text;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_text) {
	 		listener.enterJsx_text(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_text) {
	 		listener.exitJsx_text(this);
		}
	}
}


export class Jsx_charContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(OParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(OParser.GT, 0);
	}
	public JSX_TEXT(): TerminalNode {
		return this.getToken(OParser.JSX_TEXT, 0);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_jsx_char;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterJsx_char) {
	 		listener.enterJsx_char(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitJsx_char) {
	 		listener.exitJsx_char(this);
		}
	}
}


export class Css_expressionContext extends ParserRuleContext {
	public _field!: Css_fieldContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public css_field_list(): Css_fieldContext[] {
		return this.getTypedRuleContexts(Css_fieldContext) as Css_fieldContext[];
	}
	public css_field(i: number): Css_fieldContext {
		return this.getTypedRuleContext(Css_fieldContext, i) as Css_fieldContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_css_expression;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCss_expression) {
	 		listener.enterCss_expression(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCss_expression) {
	 		listener.exitCss_expression(this);
		}
	}
}


export class Css_fieldContext extends ParserRuleContext {
	public _name!: Css_identifierContext;
	public _values!: Css_valueContext;
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(OParser.COLON, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(OParser.SEMI, 0);
	}
	public css_identifier(): Css_identifierContext {
		return this.getTypedRuleContext(Css_identifierContext, 0) as Css_identifierContext;
	}
	public css_value_list(): Css_valueContext[] {
		return this.getTypedRuleContexts(Css_valueContext) as Css_valueContext[];
	}
	public css_value(i: number): Css_valueContext {
		return this.getTypedRuleContext(Css_valueContext, i) as Css_valueContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_css_field;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCss_field) {
	 		listener.enterCss_field(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCss_field) {
	 		listener.exitCss_field(this);
		}
	}
}


export class Css_identifierContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_or_keyword(): Identifier_or_keywordContext {
		return this.getTypedRuleContext(Identifier_or_keywordContext, 0) as Identifier_or_keywordContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(OParser.MINUS, 0);
	}
	public nospace_identifier_or_keyword(): Nospace_identifier_or_keywordContext {
		return this.getTypedRuleContext(Nospace_identifier_or_keywordContext, 0) as Nospace_identifier_or_keywordContext;
	}
	public css_identifier(): Css_identifierContext {
		return this.getTypedRuleContext(Css_identifierContext, 0) as Css_identifierContext;
	}
	public nospace_hyphen_identifier_or_keyword_list(): Nospace_hyphen_identifier_or_keywordContext[] {
		return this.getTypedRuleContexts(Nospace_hyphen_identifier_or_keywordContext) as Nospace_hyphen_identifier_or_keywordContext[];
	}
	public nospace_hyphen_identifier_or_keyword(i: number): Nospace_hyphen_identifier_or_keywordContext {
		return this.getTypedRuleContext(Nospace_hyphen_identifier_or_keywordContext, i) as Nospace_hyphen_identifier_or_keywordContext;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_css_identifier;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCss_identifier) {
	 		listener.enterCss_identifier(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCss_identifier) {
	 		listener.exitCss_identifier(this);
		}
	}
}


export class Css_valueContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return OParser.RULE_css_value;
	}
	public copyFrom(ctx: Css_valueContext): void {
		super.copyFrom(ctx);
	}
}
export class CssTextContext extends Css_valueContext {
	public _text!: Css_textContext;
	constructor(parser: OParser, ctx: Css_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public css_text(): Css_textContext {
		return this.getTypedRuleContext(Css_textContext, 0) as Css_textContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCssText) {
	 		listener.enterCssText(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCssText) {
	 		listener.exitCssText(this);
		}
	}
}
export class CssValueContext extends Css_valueContext {
	public _exp!: ExpressionContext;
	constructor(parser: OParser, ctx: Css_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURL(): TerminalNode {
		return this.getToken(OParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(OParser.RCURL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCssValue) {
	 		listener.enterCssValue(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCssValue) {
	 		listener.exitCssValue(this);
		}
	}
}


export class Css_textContext extends ParserRuleContext {
	constructor(parser?: OParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(OParser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(OParser.SEMI, i);
	}
	public LCURL_list(): TerminalNode[] {
	    	return this.getTokens(OParser.LCURL);
	}
	public LCURL(i: number): TerminalNode {
		return this.getToken(OParser.LCURL, i);
	}
	public RCURL_list(): TerminalNode[] {
	    	return this.getTokens(OParser.RCURL);
	}
	public RCURL(i: number): TerminalNode {
		return this.getToken(OParser.RCURL, i);
	}
    public get ruleIndex(): number {
    	return OParser.RULE_css_text;
	}
	public enterRule(listener: OParserListener): void {
	    if(listener.enterCss_text) {
	 		listener.enterCss_text(this);
		}
	}
	public exitRule(listener: OParserListener): void {
	    if(listener.exitCss_text) {
	 		listener.exitCss_text(this);
		}
	}
}
