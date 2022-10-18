// Generated from MParser.g4 by ANTLR 4.11.1
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
import MParserListener from "./MParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import AbstractParser from './AbstractParser';

export default class MParser extends AbstractParser {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly LF_TAB = 3;
	public static readonly LF_MORE = 4;
	public static readonly LF = 5;
	public static readonly TAB = 6;
	public static readonly WS = 7;
	public static readonly CSS_DATA = 8;
	public static readonly COMMENT = 9;
	public static readonly JAVA = 10;
	public static readonly CSHARP = 11;
	public static readonly PYTHON2 = 12;
	public static readonly PYTHON3 = 13;
	public static readonly JAVASCRIPT = 14;
	public static readonly SWIFT = 15;
	public static readonly COLON = 16;
	public static readonly SEMI = 17;
	public static readonly COMMA = 18;
	public static readonly RANGE = 19;
	public static readonly DOT = 20;
	public static readonly LPAR = 21;
	public static readonly RPAR = 22;
	public static readonly LBRAK = 23;
	public static readonly RBRAK = 24;
	public static readonly LCURL = 25;
	public static readonly RCURL = 26;
	public static readonly QMARK = 27;
	public static readonly XMARK = 28;
	public static readonly AMP = 29;
	public static readonly AMP2 = 30;
	public static readonly PIPE = 31;
	public static readonly PIPE2 = 32;
	public static readonly PLUS = 33;
	public static readonly MINUS = 34;
	public static readonly STAR = 35;
	public static readonly SLASH = 36;
	public static readonly BSLASH = 37;
	public static readonly PERCENT = 38;
	public static readonly SHARP = 39;
	public static readonly GT = 40;
	public static readonly GTE = 41;
	public static readonly LT = 42;
	public static readonly LTE = 43;
	public static readonly LTGT = 44;
	public static readonly LTCOLONGT = 45;
	public static readonly EQ = 46;
	public static readonly XEQ = 47;
	public static readonly EQ2 = 48;
	public static readonly TEQ = 49;
	public static readonly TILDE = 50;
	public static readonly LARROW = 51;
	public static readonly RARROW = 52;
	public static readonly EGT = 53;
	public static readonly BOOLEAN = 54;
	public static readonly CSS = 55;
	public static readonly CHARACTER = 56;
	public static readonly TEXT = 57;
	public static readonly INTEGER = 58;
	public static readonly DECIMAL = 59;
	public static readonly DATE = 60;
	public static readonly TIME = 61;
	public static readonly DATETIME = 62;
	public static readonly PERIOD = 63;
	public static readonly VERSION = 64;
	public static readonly METHOD_COLON = 65;
	public static readonly CODE = 66;
	public static readonly DOCUMENT = 67;
	public static readonly BLOB = 68;
	public static readonly IMAGE = 69;
	public static readonly UUID = 70;
	public static readonly DBID = 71;
	public static readonly ITERATOR = 72;
	public static readonly CURSOR = 73;
	public static readonly HTML = 74;
	public static readonly TYPE = 75;
	public static readonly ABSTRACT = 76;
	public static readonly ALL = 77;
	public static readonly ALWAYS = 78;
	public static readonly AND = 79;
	public static readonly ANY = 80;
	public static readonly AS = 81;
	public static readonly ASC = 82;
	public static readonly ATTR = 83;
	public static readonly ATTRIBUTE = 84;
	public static readonly ATTRIBUTES = 85;
	public static readonly BINDINGS = 86;
	public static readonly BREAK = 87;
	public static readonly BY = 88;
	public static readonly CASE = 89;
	public static readonly CATCH = 90;
	public static readonly CATEGORY = 91;
	public static readonly CLASS = 92;
	public static readonly CONTAINS = 93;
	public static readonly DEF = 94;
	public static readonly DEFAULT = 95;
	public static readonly DEFINE = 96;
	public static readonly DELETE = 97;
	public static readonly DESC = 98;
	public static readonly DO = 99;
	public static readonly DOING = 100;
	public static readonly EACH = 101;
	public static readonly ELSE = 102;
	public static readonly ENUM = 103;
	public static readonly ENUMERATED = 104;
	public static readonly EXCEPT = 105;
	public static readonly EXECUTE = 106;
	public static readonly EXPECTING = 107;
	public static readonly EXTENDS = 108;
	public static readonly FETCH = 109;
	public static readonly FILTERED = 110;
	public static readonly FINALLY = 111;
	public static readonly FLUSH = 112;
	public static readonly FOR = 113;
	public static readonly FROM = 114;
	public static readonly GETTER = 115;
	public static readonly HAS = 116;
	public static readonly IF = 117;
	public static readonly IN = 118;
	public static readonly INCLUDE = 119;
	public static readonly INDEX = 120;
	public static readonly INVOKE_COLON = 121;
	public static readonly IS = 122;
	public static readonly MATCHING = 123;
	public static readonly METHOD = 124;
	public static readonly METHODS = 125;
	public static readonly MODULO = 126;
	public static readonly MUTABLE = 127;
	public static readonly NATIVE = 128;
	public static readonly NONE = 129;
	public static readonly NOT = 130;
	public static readonly NOTHING = 131;
	public static readonly NULL = 132;
	public static readonly ON = 133;
	public static readonly ONE = 134;
	public static readonly OPERATOR = 135;
	public static readonly OR = 136;
	public static readonly ORDER = 137;
	public static readonly OTHERWISE = 138;
	public static readonly PASS = 139;
	public static readonly RAISE = 140;
	public static readonly READ = 141;
	public static readonly RECEIVING = 142;
	public static readonly RESOURCE = 143;
	public static readonly RETURN = 144;
	public static readonly RETURNING = 145;
	public static readonly ROWS = 146;
	public static readonly SELF = 147;
	public static readonly SETTER = 148;
	public static readonly SINGLETON = 149;
	public static readonly SORTED = 150;
	public static readonly STORABLE = 151;
	public static readonly STORE = 152;
	public static readonly SUPER = 153;
	public static readonly SWITCH = 154;
	public static readonly TEST = 155;
	public static readonly THEN = 156;
	public static readonly THIS = 157;
	public static readonly THROW = 158;
	public static readonly TO = 159;
	public static readonly TRY = 160;
	public static readonly VERIFYING = 161;
	public static readonly WIDGET = 162;
	public static readonly WITH = 163;
	public static readonly WHEN = 164;
	public static readonly WHERE = 165;
	public static readonly WHILE = 166;
	public static readonly WRITE = 167;
	public static readonly BOOLEAN_LITERAL = 168;
	public static readonly CHAR_LITERAL = 169;
	public static readonly MIN_INTEGER = 170;
	public static readonly MAX_INTEGER = 171;
	public static readonly SYMBOL_IDENTIFIER = 172;
	public static readonly TYPE_IDENTIFIER = 173;
	public static readonly VARIABLE_IDENTIFIER = 174;
	public static readonly NATIVE_IDENTIFIER = 175;
	public static readonly DOLLAR_IDENTIFIER = 176;
	public static readonly ARONDBASE_IDENTIFIER = 177;
	public static readonly TEXT_LITERAL = 178;
	public static readonly UUID_LITERAL = 179;
	public static readonly VERSION_LITERAL = 180;
	public static readonly INTEGER_LITERAL = 181;
	public static readonly HEXA_LITERAL = 182;
	public static readonly DECIMAL_LITERAL = 183;
	public static readonly DATETIME_LITERAL = 184;
	public static readonly TIME_LITERAL = 185;
	public static readonly DATE_LITERAL = 186;
	public static readonly PERIOD_LITERAL = 187;
	public static readonly JSX_TEXT = 188;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_enum_category_declaration = 0;
	public static readonly RULE_enum_native_declaration = 1;
	public static readonly RULE_native_symbol = 2;
	public static readonly RULE_category_symbol = 3;
	public static readonly RULE_attribute_declaration = 4;
	public static readonly RULE_index_clause = 5;
	public static readonly RULE_concrete_widget_declaration = 6;
	public static readonly RULE_native_widget_declaration = 7;
	public static readonly RULE_concrete_category_declaration = 8;
	public static readonly RULE_singleton_category_declaration = 9;
	public static readonly RULE_derived_list = 10;
	public static readonly RULE_operator_method_declaration = 11;
	public static readonly RULE_setter_method_declaration = 12;
	public static readonly RULE_native_setter_declaration = 13;
	public static readonly RULE_getter_method_declaration = 14;
	public static readonly RULE_native_getter_declaration = 15;
	public static readonly RULE_native_category_declaration = 16;
	public static readonly RULE_native_resource_declaration = 17;
	public static readonly RULE_native_category_bindings = 18;
	public static readonly RULE_native_category_binding_list = 19;
	public static readonly RULE_abstract_global_method_declaration = 20;
	public static readonly RULE_abstract_member_method_declaration = 21;
	public static readonly RULE_concrete_method_declaration = 22;
	public static readonly RULE_native_method_declaration = 23;
	public static readonly RULE_test_method_declaration = 24;
	public static readonly RULE_assertion = 25;
	public static readonly RULE_typed_argument = 26;
	public static readonly RULE_statement = 27;
	public static readonly RULE_flush_statement = 28;
	public static readonly RULE_store_statement = 29;
	public static readonly RULE_method_call_expression = 30;
	public static readonly RULE_method_call_statement = 31;
	public static readonly RULE_with_resource_statement = 32;
	public static readonly RULE_with_singleton_statement = 33;
	public static readonly RULE_switch_statement = 34;
	public static readonly RULE_switch_case_statement = 35;
	public static readonly RULE_for_each_statement = 36;
	public static readonly RULE_do_while_statement = 37;
	public static readonly RULE_while_statement = 38;
	public static readonly RULE_if_statement = 39;
	public static readonly RULE_else_if_statement_list = 40;
	public static readonly RULE_raise_statement = 41;
	public static readonly RULE_try_statement = 42;
	public static readonly RULE_catch_statement = 43;
	public static readonly RULE_break_statement = 44;
	public static readonly RULE_return_statement = 45;
	public static readonly RULE_expression = 46;
	public static readonly RULE_filter_expression = 47;
	public static readonly RULE_type_expression = 48;
	public static readonly RULE_selectable_expression = 49;
	public static readonly RULE_instance_expression = 50;
	public static readonly RULE_mutable_instance_expression = 51;
	public static readonly RULE_method_expression = 52;
	public static readonly RULE_instance_selector = 53;
	public static readonly RULE_blob_expression = 54;
	public static readonly RULE_document_expression = 55;
	public static readonly RULE_constructor_expression = 56;
	public static readonly RULE_copy_from = 57;
	public static readonly RULE_argument_assignment_list = 58;
	public static readonly RULE_argument_assignment = 59;
	public static readonly RULE_write_statement = 60;
	public static readonly RULE_filtered_list_suffix = 61;
	public static readonly RULE_fetch_expression = 62;
	public static readonly RULE_fetch_statement = 63;
	public static readonly RULE_then = 64;
	public static readonly RULE_read_statement = 65;
	public static readonly RULE_sorted_expression = 66;
	public static readonly RULE_assign_instance_statement = 67;
	public static readonly RULE_child_instance = 68;
	public static readonly RULE_assign_tuple_statement = 69;
	public static readonly RULE_lfs = 70;
	public static readonly RULE_lfp = 71;
	public static readonly RULE_ws_plus = 72;
	public static readonly RULE_indent = 73;
	public static readonly RULE_dedent = 74;
	public static readonly RULE_type_literal = 75;
	public static readonly RULE_null_literal = 76;
	public static readonly RULE_comment_statement = 77;
	public static readonly RULE_repl = 78;
	public static readonly RULE_declaration_list = 79;
	public static readonly RULE_declarations = 80;
	public static readonly RULE_declaration = 81;
	public static readonly RULE_annotation_constructor = 82;
	public static readonly RULE_annotation_identifier = 83;
	public static readonly RULE_annotation_argument = 84;
	public static readonly RULE_annotation_argument_name = 85;
	public static readonly RULE_annotation_argument_value = 86;
	public static readonly RULE_resource_declaration = 87;
	public static readonly RULE_enum_declaration = 88;
	public static readonly RULE_native_symbol_list = 89;
	public static readonly RULE_category_symbol_list = 90;
	public static readonly RULE_symbol_list = 91;
	public static readonly RULE_attribute_constraint = 92;
	public static readonly RULE_list_literal = 93;
	public static readonly RULE_set_literal = 94;
	public static readonly RULE_expression_list = 95;
	public static readonly RULE_range_literal = 96;
	public static readonly RULE_typedef = 97;
	public static readonly RULE_primary_type = 98;
	public static readonly RULE_native_type = 99;
	public static readonly RULE_category_type = 100;
	public static readonly RULE_mutable_category_type = 101;
	public static readonly RULE_code_type = 102;
	public static readonly RULE_category_declaration = 103;
	public static readonly RULE_widget_declaration = 104;
	public static readonly RULE_type_identifier_list = 105;
	public static readonly RULE_method_identifier = 106;
	public static readonly RULE_identifier_or_keyword = 107;
	public static readonly RULE_nospace_hyphen_identifier_or_keyword = 108;
	public static readonly RULE_nospace_identifier_or_keyword = 109;
	public static readonly RULE_identifier = 110;
	public static readonly RULE_member_identifier = 111;
	public static readonly RULE_variable_identifier = 112;
	public static readonly RULE_attribute_identifier = 113;
	public static readonly RULE_type_identifier = 114;
	public static readonly RULE_symbol_identifier = 115;
	public static readonly RULE_argument_list = 116;
	public static readonly RULE_argument = 117;
	public static readonly RULE_operator_argument = 118;
	public static readonly RULE_named_argument = 119;
	public static readonly RULE_code_argument = 120;
	public static readonly RULE_category_or_any_type = 121;
	public static readonly RULE_any_type = 122;
	public static readonly RULE_member_method_declaration_list = 123;
	public static readonly RULE_member_method_declaration = 124;
	public static readonly RULE_native_member_method_declaration_list = 125;
	public static readonly RULE_native_member_method_declaration = 126;
	public static readonly RULE_native_category_binding = 127;
	public static readonly RULE_python_category_binding = 128;
	public static readonly RULE_python_module = 129;
	public static readonly RULE_javascript_category_binding = 130;
	public static readonly RULE_javascript_module = 131;
	public static readonly RULE_variable_identifier_list = 132;
	public static readonly RULE_attribute_identifier_list = 133;
	public static readonly RULE_method_declaration = 134;
	public static readonly RULE_native_statement_list = 135;
	public static readonly RULE_native_statement = 136;
	public static readonly RULE_python_native_statement = 137;
	public static readonly RULE_javascript_native_statement = 138;
	public static readonly RULE_statement_list = 139;
	public static readonly RULE_assertion_list = 140;
	public static readonly RULE_switch_case_statement_list = 141;
	public static readonly RULE_catch_statement_list = 142;
	public static readonly RULE_literal_collection = 143;
	public static readonly RULE_atomic_literal = 144;
	public static readonly RULE_literal_list_literal = 145;
	public static readonly RULE_this_expression = 146;
	public static readonly RULE_super_expression = 147;
	public static readonly RULE_parenthesis_expression = 148;
	public static readonly RULE_literal_expression = 149;
	public static readonly RULE_collection_literal = 150;
	public static readonly RULE_tuple_literal = 151;
	public static readonly RULE_dict_literal = 152;
	public static readonly RULE_document_literal = 153;
	public static readonly RULE_expression_tuple = 154;
	public static readonly RULE_doc_entry_list = 155;
	public static readonly RULE_doc_entry = 156;
	public static readonly RULE_doc_key = 157;
	public static readonly RULE_dict_entry_list = 158;
	public static readonly RULE_dict_entry = 159;
	public static readonly RULE_dict_key = 160;
	public static readonly RULE_slice_arguments = 161;
	public static readonly RULE_assign_variable_statement = 162;
	public static readonly RULE_assignable_instance = 163;
	public static readonly RULE_is_expression = 164;
	public static readonly RULE_metadata = 165;
	public static readonly RULE_arrow_expression = 166;
	public static readonly RULE_arrow_prefix = 167;
	public static readonly RULE_arrow_args = 168;
	public static readonly RULE_sorted_key = 169;
	public static readonly RULE_read_blob_expression = 170;
	public static readonly RULE_read_all_expression = 171;
	public static readonly RULE_read_one_expression = 172;
	public static readonly RULE_order_by_list = 173;
	public static readonly RULE_order_by = 174;
	public static readonly RULE_include_list = 175;
	public static readonly RULE_operator = 176;
	public static readonly RULE_keyword = 177;
	public static readonly RULE_new_token = 178;
	public static readonly RULE_key_token = 179;
	public static readonly RULE_module_token = 180;
	public static readonly RULE_value_token = 181;
	public static readonly RULE_symbols_token = 182;
	public static readonly RULE_assign = 183;
	public static readonly RULE_multiply = 184;
	public static readonly RULE_divide = 185;
	public static readonly RULE_idivide = 186;
	public static readonly RULE_modulo = 187;
	public static readonly RULE_javascript_statement = 188;
	public static readonly RULE_javascript_expression = 189;
	public static readonly RULE_javascript_primary_expression = 190;
	public static readonly RULE_javascript_this_expression = 191;
	public static readonly RULE_javascript_new_expression = 192;
	public static readonly RULE_javascript_selector_expression = 193;
	public static readonly RULE_javascript_method_expression = 194;
	public static readonly RULE_javascript_arguments = 195;
	public static readonly RULE_javascript_item_expression = 196;
	public static readonly RULE_javascript_parenthesis_expression = 197;
	public static readonly RULE_javascript_identifier_expression = 198;
	public static readonly RULE_javascript_literal_expression = 199;
	public static readonly RULE_javascript_identifier = 200;
	public static readonly RULE_python_statement = 201;
	public static readonly RULE_python_expression = 202;
	public static readonly RULE_python_primary_expression = 203;
	public static readonly RULE_python_self_expression = 204;
	public static readonly RULE_python_selector_expression = 205;
	public static readonly RULE_python_method_expression = 206;
	public static readonly RULE_python_argument_list = 207;
	public static readonly RULE_python_ordinal_argument_list = 208;
	public static readonly RULE_python_named_argument_list = 209;
	public static readonly RULE_python_parenthesis_expression = 210;
	public static readonly RULE_python_identifier_expression = 211;
	public static readonly RULE_python_literal_expression = 212;
	public static readonly RULE_python_identifier = 213;
	public static readonly RULE_java_statement = 214;
	public static readonly RULE_java_expression = 215;
	public static readonly RULE_java_primary_expression = 216;
	public static readonly RULE_java_this_expression = 217;
	public static readonly RULE_java_new_expression = 218;
	public static readonly RULE_java_selector_expression = 219;
	public static readonly RULE_java_method_expression = 220;
	public static readonly RULE_java_arguments = 221;
	public static readonly RULE_java_item_expression = 222;
	public static readonly RULE_java_parenthesis_expression = 223;
	public static readonly RULE_java_identifier_expression = 224;
	public static readonly RULE_java_class_identifier_expression = 225;
	public static readonly RULE_java_literal_expression = 226;
	public static readonly RULE_java_identifier = 227;
	public static readonly RULE_csharp_statement = 228;
	public static readonly RULE_csharp_expression = 229;
	public static readonly RULE_csharp_primary_expression = 230;
	public static readonly RULE_csharp_this_expression = 231;
	public static readonly RULE_csharp_new_expression = 232;
	public static readonly RULE_csharp_selector_expression = 233;
	public static readonly RULE_csharp_method_expression = 234;
	public static readonly RULE_csharp_arguments = 235;
	public static readonly RULE_csharp_item_expression = 236;
	public static readonly RULE_csharp_parenthesis_expression = 237;
	public static readonly RULE_csharp_identifier_expression = 238;
	public static readonly RULE_csharp_literal_expression = 239;
	public static readonly RULE_csharp_identifier = 240;
	public static readonly RULE_jsx_expression = 241;
	public static readonly RULE_jsx_element = 242;
	public static readonly RULE_jsx_fragment = 243;
	public static readonly RULE_jsx_fragment_start = 244;
	public static readonly RULE_jsx_fragment_end = 245;
	public static readonly RULE_jsx_self_closing = 246;
	public static readonly RULE_jsx_opening = 247;
	public static readonly RULE_jsx_closing = 248;
	public static readonly RULE_jsx_element_name = 249;
	public static readonly RULE_jsx_identifier = 250;
	public static readonly RULE_jsx_attribute = 251;
	public static readonly RULE_jsx_attribute_value = 252;
	public static readonly RULE_jsx_children = 253;
	public static readonly RULE_jsx_child = 254;
	public static readonly RULE_jsx_text = 255;
	public static readonly RULE_jsx_char = 256;
	public static readonly RULE_css_expression = 257;
	public static readonly RULE_css_field = 258;
	public static readonly RULE_css_identifier = 259;
	public static readonly RULE_css_value = 260;
	public static readonly RULE_css_text = 261;
	public static readonly literalNames: string[] = [ null, null, null, null, 
                                                   null, null, "'\\t'", 
                                                   "' '", null, null, "'Java:'", 
                                                   "'C#:'", "'Python2:'", 
                                                   "'Python3:'", "'JavaScript:'", 
                                                   "'Swift:'", "':'", "';'", 
                                                   null, "'..'", null, null, 
                                                   null, null, null, null, 
                                                   null, null, "'!'", "'&'", 
                                                   "'&&'", "'|'", "'||'", 
                                                   null, "'-'", "'*'", "'/'", 
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
	public static readonly symbolicNames: string[] = [ null, "INDENT", "DEDENT", 
                                                    "LF_TAB", "LF_MORE", 
                                                    "LF", "TAB", "WS", "CSS_DATA", 
                                                    "COMMENT", "JAVA", "CSHARP", 
                                                    "PYTHON2", "PYTHON3", 
                                                    "JAVASCRIPT", "SWIFT", 
                                                    "COLON", "SEMI", "COMMA", 
                                                    "RANGE", "DOT", "LPAR", 
                                                    "RPAR", "LBRAK", "RBRAK", 
                                                    "LCURL", "RCURL", "QMARK", 
                                                    "XMARK", "AMP", "AMP2", 
                                                    "PIPE", "PIPE2", "PLUS", 
                                                    "MINUS", "STAR", "SLASH", 
                                                    "BSLASH", "PERCENT", 
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
		"enum_category_declaration", "enum_native_declaration", "native_symbol", 
		"category_symbol", "attribute_declaration", "index_clause", "concrete_widget_declaration", 
		"native_widget_declaration", "concrete_category_declaration", "singleton_category_declaration", 
		"derived_list", "operator_method_declaration", "setter_method_declaration", 
		"native_setter_declaration", "getter_method_declaration", "native_getter_declaration", 
		"native_category_declaration", "native_resource_declaration", "native_category_bindings", 
		"native_category_binding_list", "abstract_global_method_declaration", 
		"abstract_member_method_declaration", "concrete_method_declaration", "native_method_declaration", 
		"test_method_declaration", "assertion", "typed_argument", "statement", 
		"flush_statement", "store_statement", "method_call_expression", "method_call_statement", 
		"with_resource_statement", "with_singleton_statement", "switch_statement", 
		"switch_case_statement", "for_each_statement", "do_while_statement", "while_statement", 
		"if_statement", "else_if_statement_list", "raise_statement", "try_statement", 
		"catch_statement", "break_statement", "return_statement", "expression", 
		"filter_expression", "type_expression", "selectable_expression", "instance_expression", 
		"mutable_instance_expression", "method_expression", "instance_selector", 
		"blob_expression", "document_expression", "constructor_expression", "copy_from", 
		"argument_assignment_list", "argument_assignment", "write_statement", 
		"filtered_list_suffix", "fetch_expression", "fetch_statement", "then", 
		"read_statement", "sorted_expression", "assign_instance_statement", "child_instance", 
		"assign_tuple_statement", "lfs", "lfp", "ws_plus", "indent", "dedent", 
		"type_literal", "null_literal", "comment_statement", "repl", "declaration_list", 
		"declarations", "declaration", "annotation_constructor", "annotation_identifier", 
		"annotation_argument", "annotation_argument_name", "annotation_argument_value", 
		"resource_declaration", "enum_declaration", "native_symbol_list", "category_symbol_list", 
		"symbol_list", "attribute_constraint", "list_literal", "set_literal", 
		"expression_list", "range_literal", "typedef", "primary_type", "native_type", 
		"category_type", "mutable_category_type", "code_type", "category_declaration", 
		"widget_declaration", "type_identifier_list", "method_identifier", "identifier_or_keyword", 
		"nospace_hyphen_identifier_or_keyword", "nospace_identifier_or_keyword", 
		"identifier", "member_identifier", "variable_identifier", "attribute_identifier", 
		"type_identifier", "symbol_identifier", "argument_list", "argument", "operator_argument", 
		"named_argument", "code_argument", "category_or_any_type", "any_type", 
		"member_method_declaration_list", "member_method_declaration", "native_member_method_declaration_list", 
		"native_member_method_declaration", "native_category_binding", "python_category_binding", 
		"python_module", "javascript_category_binding", "javascript_module", "variable_identifier_list", 
		"attribute_identifier_list", "method_declaration", "native_statement_list", 
		"native_statement", "python_native_statement", "javascript_native_statement", 
		"statement_list", "assertion_list", "switch_case_statement_list", "catch_statement_list", 
		"literal_collection", "atomic_literal", "literal_list_literal", "this_expression", 
		"super_expression", "parenthesis_expression", "literal_expression", "collection_literal", 
		"tuple_literal", "dict_literal", "document_literal", "expression_tuple", 
		"doc_entry_list", "doc_entry", "doc_key", "dict_entry_list", "dict_entry", 
		"dict_key", "slice_arguments", "assign_variable_statement", "assignable_instance", 
		"is_expression", "metadata", "arrow_expression", "arrow_prefix", "arrow_args", 
		"sorted_key", "read_blob_expression", "read_all_expression", "read_one_expression", 
		"order_by_list", "order_by", "include_list", "operator", "keyword", "new_token", 
		"key_token", "module_token", "value_token", "symbols_token", "assign", 
		"multiply", "divide", "idivide", "modulo", "javascript_statement", "javascript_expression", 
		"javascript_primary_expression", "javascript_this_expression", "javascript_new_expression", 
		"javascript_selector_expression", "javascript_method_expression", "javascript_arguments", 
		"javascript_item_expression", "javascript_parenthesis_expression", "javascript_identifier_expression", 
		"javascript_literal_expression", "javascript_identifier", "python_statement", 
		"python_expression", "python_primary_expression", "python_self_expression", 
		"python_selector_expression", "python_method_expression", "python_argument_list", 
		"python_ordinal_argument_list", "python_named_argument_list", "python_parenthesis_expression", 
		"python_identifier_expression", "python_literal_expression", "python_identifier", 
		"java_statement", "java_expression", "java_primary_expression", "java_this_expression", 
		"java_new_expression", "java_selector_expression", "java_method_expression", 
		"java_arguments", "java_item_expression", "java_parenthesis_expression", 
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
	public get grammarFileName(): string { return "MParser.g4"; }
	public get literalNames(): (string | null)[] { return MParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MParser.symbolicNames; }
	public get ruleNames(): string[] { return MParser.ruleNames; }
	public get serializedATN(): number[] { return MParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MParser._ATN, MParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public enum_category_declaration(): Enum_category_declarationContext {
		let localctx: Enum_category_declarationContext = new Enum_category_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MParser.RULE_enum_category_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 524;
			this.match(MParser.ENUM);
			this.state = 525;
			localctx._name = this.type_identifier();
			this.state = 526;
			this.match(MParser.LPAR);
			this.state = 533;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 173:
				{
				this.state = 527;
				localctx._derived = this.type_identifier();
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18) {
					{
					this.state = 528;
					this.match(MParser.COMMA);
					this.state = 529;
					localctx._attrs = this.attribute_identifier_list();
					}
				}

				}
				break;
			case 143:
			case 151:
			case 174:
				{
				this.state = 532;
				localctx._attrs = this.attribute_identifier_list();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 535;
			this.match(MParser.RPAR);
			this.state = 536;
			this.match(MParser.COLON);
			this.state = 537;
			this.indent();
			this.state = 538;
			localctx._symbols = this.category_symbol_list();
			this.state = 539;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 2, MParser.RULE_enum_native_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 541;
			this.match(MParser.ENUM);
			this.state = 542;
			localctx._name = this.type_identifier();
			this.state = 543;
			this.match(MParser.LPAR);
			this.state = 544;
			localctx._typ = this.native_type();
			this.state = 545;
			this.match(MParser.RPAR);
			this.state = 546;
			this.match(MParser.COLON);
			this.state = 547;
			this.indent();
			this.state = 548;
			localctx._symbols = this.native_symbol_list();
			this.state = 549;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 4, MParser.RULE_native_symbol);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 551;
			localctx._name = this.symbol_identifier();
			this.state = 552;
			this.match(MParser.EQ);
			this.state = 553;
			localctx._exp = this.expression(0);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 6, MParser.RULE_category_symbol);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 555;
			localctx._name = this.symbol_identifier();
			this.state = 556;
			this.match(MParser.LPAR);
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 27271189) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 71301119) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 294913) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 1150369805) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 1047679) !== 0)) {
				{
				this.state = 557;
				localctx._args = this.argument_assignment_list(0);
				}
			}

			this.state = 560;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 8, MParser.RULE_attribute_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===151) {
				{
				this.state = 562;
				this.match(MParser.STORABLE);
				}
			}

			this.state = 565;
			this.match(MParser.ATTR);
			this.state = 566;
			localctx._name = this.attribute_identifier();
			this.state = 567;
			this.match(MParser.LPAR);
			this.state = 568;
			localctx._typ = this.typedef(0);
			this.state = 569;
			this.match(MParser.RPAR);
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 570;
				this.match(MParser.COLON);
				this.state = 571;
				this.indent();
				this.state = 587;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 139:
					{
					this.state = 572;
					this.match(MParser.PASS);
					}
					break;
				case 118:
				case 120:
				case 123:
					{
					this.state = 585;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 118:
					case 123:
						{
						this.state = 573;
						localctx._match = this.attribute_constraint();
						this.state = 577;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
						case 1:
							{
							this.state = 574;
							this.lfp();
							this.state = 575;
							localctx._indices = this.index_clause();
							}
							break;
						}
						}
						break;
					case 120:
						{
						this.state = 579;
						localctx._indices = this.index_clause();
						this.state = 583;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
						case 1:
							{
							this.state = 580;
							this.lfp();
							this.state = 581;
							localctx._match = this.attribute_constraint();
							}
							break;
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 589;
				this.dedent();
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
	public index_clause(): Index_clauseContext {
		let localctx: Index_clauseContext = new Index_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MParser.RULE_index_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 593;
			this.match(MParser.INDEX);
			this.state = 594;
			this.match(MParser.LPAR);
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===91 || _la===143 || _la===174) {
				{
				this.state = 595;
				localctx._indices = this.variable_identifier_list();
				}
			}

			this.state = 598;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 12, MParser.RULE_concrete_widget_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 600;
			this.match(MParser.WIDGET);
			this.state = 601;
			localctx._name = this.type_identifier();
			this.state = 602;
			this.match(MParser.LPAR);
			this.state = 604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===173) {
				{
				this.state = 603;
				localctx._derived = this.type_identifier();
				}
			}

			this.state = 606;
			this.match(MParser.RPAR);
			this.state = 607;
			this.match(MParser.COLON);
			this.state = 608;
			this.indent();
			this.state = 611;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
			case 9:
			case 76:
			case 94:
			case 177:
				{
				this.state = 609;
				localctx._methods = this.member_method_declaration_list();
				}
				break;
			case 139:
				{
				this.state = 610;
				this.match(MParser.PASS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 613;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 14, MParser.RULE_native_widget_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 615;
			this.match(MParser.NATIVE);
			this.state = 616;
			this.match(MParser.WIDGET);
			this.state = 617;
			localctx._name = this.type_identifier();
			this.state = 618;
			this.match(MParser.LPAR);
			this.state = 619;
			this.match(MParser.RPAR);
			this.state = 620;
			this.match(MParser.COLON);
			this.state = 621;
			this.indent();
			this.state = 622;
			localctx._bindings = this.native_category_bindings();
			this.state = 623;
			this.lfp();
			this.state = 624;
			localctx._methods = this.native_member_method_declaration_list();
			this.state = 625;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 16, MParser.RULE_concrete_category_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===151) {
				{
				this.state = 627;
				this.match(MParser.STORABLE);
				}
			}

			this.state = 630;
			_la = this._input.LA(1);
			if(!(_la===91 || _la===92)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 631;
			localctx._name = this.type_identifier();
			this.state = 632;
			this.match(MParser.LPAR);
			this.state = 639;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 633;
				localctx._derived = this.derived_list();
				}
				break;
			case 2:
				{
				this.state = 634;
				localctx._attrs = this.attribute_identifier_list();
				}
				break;
			case 3:
				{
				this.state = 635;
				localctx._derived = this.derived_list();
				this.state = 636;
				this.match(MParser.COMMA);
				this.state = 637;
				localctx._attrs = this.attribute_identifier_list();
				}
				break;
			}
			this.state = 641;
			this.match(MParser.RPAR);
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 642;
				this.match(MParser.COLON);
				this.state = 643;
				this.indent();
				this.state = 646;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 8:
				case 9:
				case 76:
				case 94:
				case 177:
					{
					this.state = 644;
					localctx._methods = this.member_method_declaration_list();
					}
					break;
				case 139:
					{
					this.state = 645;
					this.match(MParser.PASS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 648;
				this.dedent();
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
	public singleton_category_declaration(): Singleton_category_declarationContext {
		let localctx: Singleton_category_declarationContext = new Singleton_category_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, MParser.RULE_singleton_category_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 652;
			this.match(MParser.SINGLETON);
			this.state = 653;
			localctx._name = this.type_identifier();
			this.state = 654;
			this.match(MParser.LPAR);
			this.state = 655;
			localctx._attrs = this.attribute_identifier_list();
			this.state = 656;
			this.match(MParser.RPAR);
			this.state = 657;
			this.match(MParser.COLON);
			this.state = 658;
			this.indent();
			this.state = 661;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
			case 9:
			case 76:
			case 94:
			case 177:
				{
				this.state = 659;
				localctx._methods = this.member_method_declaration_list();
				}
				break;
			case 139:
				{
				this.state = 660;
				this.match(MParser.PASS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 663;
			this.dedent();
			}
		}
		catch (re) {
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
	public derived_list(): Derived_listContext {
		let localctx: Derived_listContext = new Derived_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MParser.RULE_derived_list);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 665;
			localctx._items = this.type_identifier_list();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 22, MParser.RULE_operator_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 667;
			this.match(MParser.DEF);
			this.state = 668;
			this.match(MParser.OPERATOR);
			this.state = 669;
			localctx._op = this.operator();
			this.state = 670;
			this.match(MParser.LPAR);
			this.state = 671;
			localctx._arg = this.operator_argument();
			this.state = 672;
			this.match(MParser.RPAR);
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 673;
				this.match(MParser.RARROW);
				this.state = 674;
				localctx._typ = this.typedef(0);
				}
			}

			this.state = 677;
			this.match(MParser.COLON);
			this.state = 678;
			this.indent();
			this.state = 679;
			localctx._stmts = this.statement_list();
			this.state = 680;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 24, MParser.RULE_setter_method_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 682;
			this.match(MParser.DEF);
			this.state = 683;
			localctx._name = this.variable_identifier();
			this.state = 684;
			this.match(MParser.SETTER);
			this.state = 685;
			this.match(MParser.LPAR);
			this.state = 686;
			this.match(MParser.RPAR);
			this.state = 687;
			this.match(MParser.COLON);
			this.state = 688;
			this.indent();
			this.state = 689;
			localctx._stmts = this.statement_list();
			this.state = 690;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 26, MParser.RULE_native_setter_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 692;
			this.match(MParser.DEF);
			this.state = 693;
			localctx._name = this.variable_identifier();
			this.state = 695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 694;
				this.match(MParser.NATIVE);
				}
			}

			this.state = 697;
			this.match(MParser.SETTER);
			this.state = 698;
			this.match(MParser.LPAR);
			this.state = 699;
			this.match(MParser.RPAR);
			this.state = 700;
			this.match(MParser.COLON);
			this.state = 701;
			this.indent();
			this.state = 702;
			localctx._stmts = this.native_statement_list();
			this.state = 703;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 28, MParser.RULE_getter_method_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 705;
			this.match(MParser.DEF);
			this.state = 706;
			localctx._name = this.variable_identifier();
			this.state = 707;
			this.match(MParser.GETTER);
			this.state = 708;
			this.match(MParser.LPAR);
			this.state = 709;
			this.match(MParser.RPAR);
			this.state = 710;
			this.match(MParser.COLON);
			this.state = 711;
			this.indent();
			this.state = 712;
			localctx._stmts = this.statement_list();
			this.state = 713;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 30, MParser.RULE_native_getter_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 715;
			this.match(MParser.DEF);
			this.state = 716;
			localctx._name = this.variable_identifier();
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 717;
				this.match(MParser.NATIVE);
				}
			}

			this.state = 720;
			this.match(MParser.GETTER);
			this.state = 721;
			this.match(MParser.LPAR);
			this.state = 722;
			this.match(MParser.RPAR);
			this.state = 723;
			this.match(MParser.COLON);
			this.state = 724;
			this.indent();
			this.state = 725;
			localctx._stmts = this.native_statement_list();
			this.state = 726;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 32, MParser.RULE_native_category_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===151) {
				{
				this.state = 728;
				this.match(MParser.STORABLE);
				}
			}

			this.state = 731;
			this.match(MParser.NATIVE);
			this.state = 732;
			_la = this._input.LA(1);
			if(!(_la===91 || _la===92)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 733;
			localctx._name = this.type_identifier();
			this.state = 734;
			this.match(MParser.LPAR);
			this.state = 736;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 2147483905) !== 0)) {
				{
				this.state = 735;
				localctx._attrs = this.attribute_identifier_list();
				}
			}

			this.state = 738;
			this.match(MParser.RPAR);
			this.state = 739;
			this.match(MParser.COLON);
			this.state = 740;
			this.indent();
			this.state = 741;
			localctx._bindings = this.native_category_bindings();
			this.state = 745;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 742;
				this.lfp();
				this.state = 743;
				localctx._methods = this.native_member_method_declaration_list();
				}
				break;
			}
			this.state = 747;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 34, MParser.RULE_native_resource_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===151) {
				{
				this.state = 749;
				this.match(MParser.STORABLE);
				}
			}

			this.state = 752;
			this.match(MParser.NATIVE);
			this.state = 753;
			this.match(MParser.RESOURCE);
			this.state = 754;
			localctx._name = this.type_identifier();
			this.state = 755;
			this.match(MParser.LPAR);
			this.state = 757;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 2147483905) !== 0)) {
				{
				this.state = 756;
				localctx._attrs = this.attribute_identifier_list();
				}
			}

			this.state = 759;
			this.match(MParser.RPAR);
			this.state = 760;
			this.match(MParser.COLON);
			this.state = 761;
			this.indent();
			this.state = 762;
			localctx._bindings = this.native_category_bindings();
			this.state = 766;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 763;
				this.lfp();
				this.state = 764;
				localctx._methods = this.native_member_method_declaration_list();
				}
				break;
			}
			this.state = 768;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 36, MParser.RULE_native_category_bindings);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 770;
			this.match(MParser.DEF);
			this.state = 771;
			_la = this._input.LA(1);
			if(!(_la===91 || _la===92)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 772;
			this.match(MParser.BINDINGS);
			this.state = 773;
			this.match(MParser.COLON);
			this.state = 774;
			this.indent();
			this.state = 775;
			localctx._items = this.native_category_binding_list(0);
			this.state = 776;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRecursionRule(localctx, 38, MParser.RULE_native_category_binding_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new NativeCategoryBindingListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 779;
			(localctx as NativeCategoryBindingListContext)._item = this.native_category_binding();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 787;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_native_category_binding_list);
					this.state = 781;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 782;
					this.lfp();
					this.state = 783;
					(localctx as NativeCategoryBindingListItemContext)._item = this.native_category_binding();
					}
					}
				}
				this.state = 789;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
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
		this.enterRule(localctx, 40, MParser.RULE_abstract_global_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 790;
			this.match(MParser.ABSTRACT);
			this.state = 791;
			this.match(MParser.DEF);
			this.state = 792;
			localctx._name = this.type_identifier();
			this.state = 793;
			this.match(MParser.LPAR);
			this.state = 795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===66 || _la===91 || _la===127 || _la===143 || _la===174) {
				{
				this.state = 794;
				localctx._args = this.argument_list();
				}
			}

			this.state = 797;
			this.match(MParser.RPAR);
			this.state = 803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 798;
				this.match(MParser.RARROW);
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===127) {
					{
					this.state = 799;
					this.match(MParser.MUTABLE);
					}
				}

				this.state = 802;
				localctx._typ = this.typedef(0);
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
	public abstract_member_method_declaration(): Abstract_member_method_declarationContext {
		let localctx: Abstract_member_method_declarationContext = new Abstract_member_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, MParser.RULE_abstract_member_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 805;
			this.match(MParser.ABSTRACT);
			this.state = 806;
			this.match(MParser.DEF);
			this.state = 807;
			localctx._name = this.method_identifier();
			this.state = 808;
			this.match(MParser.LPAR);
			this.state = 810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===66 || _la===91 || _la===127 || _la===143 || _la===174) {
				{
				this.state = 809;
				localctx._args = this.argument_list();
				}
			}

			this.state = 812;
			this.match(MParser.RPAR);
			this.state = 818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 813;
				this.match(MParser.RARROW);
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===127) {
					{
					this.state = 814;
					this.match(MParser.MUTABLE);
					}
				}

				this.state = 817;
				localctx._typ = this.typedef(0);
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
	public concrete_method_declaration(): Concrete_method_declarationContext {
		let localctx: Concrete_method_declarationContext = new Concrete_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, MParser.RULE_concrete_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 820;
			this.match(MParser.DEF);
			this.state = 821;
			localctx._name = this.method_identifier();
			this.state = 822;
			this.match(MParser.LPAR);
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===66 || _la===91 || _la===127 || _la===143 || _la===174) {
				{
				this.state = 823;
				localctx._args = this.argument_list();
				}
			}

			this.state = 826;
			this.match(MParser.RPAR);
			this.state = 832;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 827;
				this.match(MParser.RARROW);
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===127) {
					{
					this.state = 828;
					this.match(MParser.MUTABLE);
					}
				}

				this.state = 831;
				localctx._typ = this.typedef(0);
				}
			}

			this.state = 834;
			this.match(MParser.COLON);
			this.state = 835;
			this.indent();
			this.state = 838;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
			case 9:
			case 21:
			case 23:
			case 25:
			case 34:
			case 42:
			case 45:
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
			case 80:
			case 87:
			case 91:
			case 94:
			case 97:
			case 99:
			case 109:
			case 112:
			case 113:
			case 117:
			case 127:
			case 129:
			case 140:
			case 141:
			case 143:
			case 144:
			case 147:
			case 150:
			case 152:
			case 153:
			case 154:
			case 157:
			case 160:
			case 163:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
				{
				this.state = 836;
				localctx._stmts = this.statement_list();
				}
				break;
			case 139:
				{
				this.state = 837;
				this.match(MParser.PASS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 840;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 46, MParser.RULE_native_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 842;
			this.match(MParser.DEF);
			this.state = 844;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===128) {
				{
				this.state = 843;
				this.match(MParser.NATIVE);
				}
			}

			this.state = 846;
			localctx._name = this.method_identifier();
			this.state = 847;
			this.match(MParser.LPAR);
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===66 || _la===91 || _la===127 || _la===143 || _la===174) {
				{
				this.state = 848;
				localctx._args = this.argument_list();
				}
			}

			this.state = 851;
			this.match(MParser.RPAR);
			this.state = 854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 852;
				this.match(MParser.RARROW);
				this.state = 853;
				localctx._typ = this.category_or_any_type();
				}
			}

			this.state = 856;
			this.match(MParser.COLON);
			this.state = 857;
			this.indent();
			this.state = 858;
			localctx._stmts = this.native_statement_list();
			this.state = 859;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 48, MParser.RULE_test_method_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 861;
			this.match(MParser.DEF);
			this.state = 862;
			this.match(MParser.TEST);
			this.state = 863;
			localctx._name = this.match(MParser.TEXT_LITERAL);
			this.state = 864;
			this.match(MParser.LPAR);
			this.state = 865;
			this.match(MParser.RPAR);
			this.state = 866;
			this.match(MParser.COLON);
			this.state = 867;
			this.indent();
			this.state = 868;
			localctx._stmts = this.statement_list();
			this.state = 869;
			this.dedent();
			this.state = 870;
			this.lfp();
			this.state = 871;
			this.match(MParser.VERIFYING);
			this.state = 872;
			this.match(MParser.COLON);
			this.state = 878;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				{
				{
				this.state = 873;
				this.indent();
				this.state = 874;
				localctx._exps = this.assertion_list();
				this.state = 875;
				this.dedent();
				}
				}
				break;
			case 172:
				{
				{
				this.state = 877;
				localctx._error = this.symbol_identifier();
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
		this.enterRule(localctx, 50, MParser.RULE_assertion);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 880;
			localctx._exp = this.expression(0);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 52, MParser.RULE_typed_argument);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 882;
			localctx._name = this.variable_identifier();
			this.state = 883;
			this.match(MParser.COLON);
			this.state = 884;
			localctx._typ = this.category_or_any_type();
			this.state = 889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 885;
				this.match(MParser.LPAR);
				this.state = 886;
				localctx._attrs = this.attribute_identifier_list();
				this.state = 887;
				this.match(MParser.RPAR);
				}
			}

			this.state = 893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
				{
				this.state = 891;
				this.match(MParser.EQ);
				this.state = 892;
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
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, MParser.RULE_statement);
		try {
			this.state = 916;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				localctx = new MethodCallStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 895;
				(localctx as MethodCallStatementContext)._stmt = this.method_call_statement();
				}
				break;
			case 2:
				localctx = new AssignInstanceStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 896;
				(localctx as AssignInstanceStatementContext)._stmt = this.assign_instance_statement();
				}
				break;
			case 3:
				localctx = new AssignTupleStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 897;
				(localctx as AssignTupleStatementContext)._stmt = this.assign_tuple_statement();
				}
				break;
			case 4:
				localctx = new StoreStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 898;
				(localctx as StoreStatementContext)._stmt = this.store_statement();
				}
				break;
			case 5:
				localctx = new FetchStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 899;
				(localctx as FetchStatementContext)._stmt = this.fetch_statement();
				}
				break;
			case 6:
				localctx = new ReadStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 900;
				(localctx as ReadStatementContext)._stmt = this.read_statement();
				}
				break;
			case 7:
				localctx = new FlushStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 901;
				(localctx as FlushStatementContext)._stmt = this.flush_statement();
				}
				break;
			case 8:
				localctx = new BreakStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 902;
				(localctx as BreakStatementContext)._stmt = this.break_statement();
				}
				break;
			case 9:
				localctx = new ReturnStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 903;
				(localctx as ReturnStatementContext)._stmt = this.return_statement();
				}
				break;
			case 10:
				localctx = new IfStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 904;
				(localctx as IfStatementContext)._stmt = this.if_statement();
				}
				break;
			case 11:
				localctx = new SwitchStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 905;
				(localctx as SwitchStatementContext)._stmt = this.switch_statement();
				}
				break;
			case 12:
				localctx = new ForEachStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 906;
				(localctx as ForEachStatementContext)._stmt = this.for_each_statement();
				}
				break;
			case 13:
				localctx = new WhileStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 907;
				(localctx as WhileStatementContext)._stmt = this.while_statement();
				}
				break;
			case 14:
				localctx = new DoWhileStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 908;
				(localctx as DoWhileStatementContext)._stmt = this.do_while_statement();
				}
				break;
			case 15:
				localctx = new RaiseStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 909;
				(localctx as RaiseStatementContext)._stmt = this.raise_statement();
				}
				break;
			case 16:
				localctx = new TryStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 910;
				(localctx as TryStatementContext)._stmt = this.try_statement();
				}
				break;
			case 17:
				localctx = new WriteStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 911;
				(localctx as WriteStatementContext)._stmt = this.write_statement();
				}
				break;
			case 18:
				localctx = new WithResourceStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 912;
				(localctx as WithResourceStatementContext)._stmt = this.with_resource_statement();
				}
				break;
			case 19:
				localctx = new WithSingletonStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 913;
				(localctx as WithSingletonStatementContext)._stmt = this.with_singleton_statement();
				}
				break;
			case 20:
				localctx = new ClosureStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 914;
				(localctx as ClosureStatementContext)._decl = this.concrete_method_declaration();
				}
				break;
			case 21:
				localctx = new CommentStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 915;
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
		this.enterRule(localctx, 56, MParser.RULE_flush_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 918;
			this.match(MParser.FLUSH);
			this.state = 919;
			this.match(MParser.LPAR);
			this.state = 920;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 58, MParser.RULE_store_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 939;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 97:
				{
				this.state = 922;
				this.match(MParser.DELETE);
				this.state = 923;
				this.match(MParser.LPAR);
				this.state = 924;
				localctx._to_del = this.expression_list();
				this.state = 925;
				this.match(MParser.RPAR);
				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===79) {
					{
					this.state = 926;
					this.match(MParser.AND);
					this.state = 927;
					this.match(MParser.STORE);
					this.state = 928;
					this.match(MParser.LPAR);
					this.state = 929;
					localctx._to_add = this.expression_list();
					this.state = 930;
					this.match(MParser.RPAR);
					}
				}

				}
				break;
			case 152:
				{
				this.state = 934;
				this.match(MParser.STORE);
				this.state = 935;
				this.match(MParser.LPAR);
				this.state = 936;
				localctx._to_add = this.expression_list();
				this.state = 937;
				this.match(MParser.RPAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 947;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===163) {
				{
				this.state = 941;
				this.match(MParser.WITH);
				this.state = 942;
				this.metadata();
				this.state = 943;
				this.match(MParser.LPAR);
				this.state = 944;
				localctx._with_meta = this.expression(0);
				this.state = 945;
				this.match(MParser.RPAR);
				}
			}

			this.state = 955;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===156) {
				{
				this.state = 949;
				this.match(MParser.THEN);
				this.state = 950;
				this.match(MParser.COLON);
				this.state = 951;
				this.indent();
				this.state = 952;
				localctx._stmts = this.statement_list();
				this.state = 953;
				this.dedent();
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
	public method_call_expression(): Method_call_expressionContext {
		let localctx: Method_call_expressionContext = new Method_call_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, MParser.RULE_method_call_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 957;
			localctx._name = this.method_identifier();
			this.state = 958;
			this.match(MParser.LPAR);
			this.state = 960;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 27271189) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 71301119) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 294913) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 1150369805) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 1047679) !== 0)) {
				{
				this.state = 959;
				localctx._args = this.argument_assignment_list(0);
				}
			}

			this.state = 962;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 62, MParser.RULE_method_call_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 967;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 964;
				localctx._parent = this.instance_expression(0);
				this.state = 965;
				this.match(MParser.DOT);
				}
				break;
			}
			this.state = 969;
			localctx._method = this.method_call_expression();
			this.state = 980;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===156) {
				{
				this.state = 970;
				this.match(MParser.THEN);
				this.state = 973;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===163) {
					{
					this.state = 971;
					this.match(MParser.WITH);
					this.state = 972;
					localctx._name = this.variable_identifier();
					}
				}

				this.state = 975;
				this.match(MParser.COLON);
				this.state = 976;
				this.indent();
				this.state = 977;
				localctx._stmts = this.statement_list();
				this.state = 978;
				this.dedent();
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
	public with_resource_statement(): With_resource_statementContext {
		let localctx: With_resource_statementContext = new With_resource_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, MParser.RULE_with_resource_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 982;
			this.match(MParser.WITH);
			this.state = 983;
			localctx._stmt = this.assign_variable_statement();
			this.state = 984;
			this.match(MParser.COLON);
			this.state = 985;
			this.indent();
			this.state = 986;
			localctx._stmts = this.statement_list();
			this.state = 987;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 66, MParser.RULE_with_singleton_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 989;
			this.match(MParser.WITH);
			this.state = 990;
			localctx._typ = this.type_identifier();
			this.state = 991;
			this.match(MParser.COLON);
			this.state = 992;
			this.indent();
			this.state = 993;
			localctx._stmts = this.statement_list();
			this.state = 994;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 68, MParser.RULE_switch_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 996;
			this.match(MParser.SWITCH);
			this.state = 997;
			this.match(MParser.ON);
			this.state = 998;
			localctx._exp = this.expression(0);
			this.state = 999;
			this.match(MParser.COLON);
			this.state = 1000;
			this.indent();
			this.state = 1001;
			localctx._cases = this.switch_case_statement_list();
			this.state = 1009;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 1002;
				this.lfp();
				this.state = 1003;
				this.match(MParser.OTHERWISE);
				this.state = 1004;
				this.match(MParser.COLON);
				this.state = 1005;
				this.indent();
				this.state = 1006;
				localctx._stmts = this.statement_list();
				this.state = 1007;
				this.dedent();
				}
				break;
			}
			this.state = 1011;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 70, MParser.RULE_switch_case_statement);
		try {
			this.state = 1028;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				localctx = new AtomicSwitchCaseContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1013;
				this.match(MParser.WHEN);
				this.state = 1014;
				(localctx as AtomicSwitchCaseContext)._exp = this.atomic_literal();
				this.state = 1015;
				this.match(MParser.COLON);
				this.state = 1016;
				this.indent();
				this.state = 1017;
				(localctx as AtomicSwitchCaseContext)._stmts = this.statement_list();
				this.state = 1018;
				this.dedent();
				}
				break;
			case 2:
				localctx = new CollectionSwitchCaseContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1020;
				this.match(MParser.WHEN);
				this.state = 1021;
				this.match(MParser.IN);
				this.state = 1022;
				(localctx as CollectionSwitchCaseContext)._exp = this.literal_collection();
				this.state = 1023;
				this.match(MParser.COLON);
				this.state = 1024;
				this.indent();
				this.state = 1025;
				(localctx as CollectionSwitchCaseContext)._stmts = this.statement_list();
				this.state = 1026;
				this.dedent();
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
		this.enterRule(localctx, 72, MParser.RULE_for_each_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1030;
			this.match(MParser.FOR);
			this.state = 1031;
			localctx._name1 = this.variable_identifier();
			this.state = 1034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 1032;
				this.match(MParser.COMMA);
				this.state = 1033;
				localctx._name2 = this.variable_identifier();
				}
			}

			this.state = 1036;
			this.match(MParser.IN);
			this.state = 1037;
			localctx._source = this.expression(0);
			this.state = 1038;
			this.match(MParser.COLON);
			this.state = 1039;
			this.indent();
			this.state = 1040;
			localctx._stmts = this.statement_list();
			this.state = 1041;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 74, MParser.RULE_do_while_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1043;
			this.match(MParser.DO);
			this.state = 1044;
			this.match(MParser.COLON);
			this.state = 1045;
			this.indent();
			this.state = 1046;
			localctx._stmts = this.statement_list();
			this.state = 1047;
			this.dedent();
			this.state = 1048;
			this.lfp();
			this.state = 1049;
			this.match(MParser.WHILE);
			this.state = 1050;
			localctx._exp = this.expression(0);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 76, MParser.RULE_while_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1052;
			this.match(MParser.WHILE);
			this.state = 1053;
			localctx._exp = this.expression(0);
			this.state = 1054;
			this.match(MParser.COLON);
			this.state = 1055;
			this.indent();
			this.state = 1056;
			localctx._stmts = this.statement_list();
			this.state = 1057;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 78, MParser.RULE_if_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1059;
			this.match(MParser.IF);
			this.state = 1060;
			localctx._exp = this.expression(0);
			this.state = 1061;
			this.match(MParser.COLON);
			this.state = 1062;
			this.indent();
			this.state = 1063;
			localctx._stmts = this.statement_list();
			this.state = 1064;
			this.dedent();
			this.state = 1068;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 1065;
				this.lfp();
				this.state = 1066;
				localctx._elseIfs = this.else_if_statement_list(0);
				}
				break;
			}
			this.state = 1077;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 1070;
				this.lfp();
				this.state = 1071;
				this.match(MParser.ELSE);
				this.state = 1072;
				this.match(MParser.COLON);
				this.state = 1073;
				this.indent();
				this.state = 1074;
				localctx._elseStmts = this.statement_list();
				this.state = 1075;
				this.dedent();
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
		let _startState: number = 80;
		this.enterRecursionRule(localctx, 80, MParser.RULE_else_if_statement_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new ElseIfStatementListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1080;
			this.match(MParser.ELSE);
			this.state = 1081;
			this.match(MParser.IF);
			this.state = 1082;
			(localctx as ElseIfStatementListContext)._exp = this.expression(0);
			this.state = 1083;
			this.match(MParser.COLON);
			this.state = 1084;
			this.indent();
			this.state = 1085;
			(localctx as ElseIfStatementListContext)._stmts = this.statement_list();
			this.state = 1086;
			this.dedent();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1100;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_else_if_statement_list);
					this.state = 1088;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1089;
					this.lfp();
					this.state = 1090;
					this.match(MParser.ELSE);
					this.state = 1091;
					this.match(MParser.IF);
					this.state = 1092;
					(localctx as ElseIfStatementListItemContext)._exp = this.expression(0);
					this.state = 1093;
					this.match(MParser.COLON);
					this.state = 1094;
					this.indent();
					this.state = 1095;
					(localctx as ElseIfStatementListItemContext)._stmts = this.statement_list();
					this.state = 1096;
					this.dedent();
					}
					}
				}
				this.state = 1102;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
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
		this.enterRule(localctx, 82, MParser.RULE_raise_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1103;
			this.match(MParser.RAISE);
			this.state = 1104;
			localctx._exp = this.expression(0);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 84, MParser.RULE_try_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1106;
			this.match(MParser.TRY);
			this.state = 1107;
			localctx._name = this.variable_identifier();
			this.state = 1108;
			this.match(MParser.COLON);
			this.state = 1109;
			this.indent();
			this.state = 1110;
			localctx._stmts = this.statement_list();
			this.state = 1111;
			this.dedent();
			this.state = 1112;
			this.lfs();
			this.state = 1114;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 1113;
				localctx._handlers = this.catch_statement_list();
				}
				break;
			}
			this.state = 1123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===105) {
				{
				this.state = 1116;
				this.match(MParser.EXCEPT);
				this.state = 1117;
				this.match(MParser.COLON);
				this.state = 1118;
				this.indent();
				this.state = 1119;
				localctx._anyStmts = this.statement_list();
				this.state = 1120;
				this.dedent();
				this.state = 1121;
				this.lfs();
				}
			}

			this.state = 1132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===111) {
				{
				this.state = 1125;
				this.match(MParser.FINALLY);
				this.state = 1126;
				this.match(MParser.COLON);
				this.state = 1127;
				this.indent();
				this.state = 1128;
				localctx._finalStmts = this.statement_list();
				this.state = 1129;
				this.dedent();
				this.state = 1130;
				this.lfs();
				}
			}

			this.state = 1134;
			this.lfs();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 86, MParser.RULE_catch_statement);
		try {
			this.state = 1155;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				localctx = new CatchAtomicStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1136;
				this.match(MParser.EXCEPT);
				this.state = 1137;
				(localctx as CatchAtomicStatementContext)._name = this.symbol_identifier();
				this.state = 1138;
				this.match(MParser.COLON);
				this.state = 1139;
				this.indent();
				this.state = 1140;
				(localctx as CatchAtomicStatementContext)._stmts = this.statement_list();
				this.state = 1141;
				this.dedent();
				this.state = 1142;
				this.lfs();
				}
				break;
			case 2:
				localctx = new CatchCollectionStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1144;
				this.match(MParser.EXCEPT);
				this.state = 1145;
				this.match(MParser.IN);
				this.state = 1146;
				this.match(MParser.LBRAK);
				this.state = 1147;
				(localctx as CatchCollectionStatementContext)._exp = this.symbol_list();
				this.state = 1148;
				this.match(MParser.RBRAK);
				this.state = 1149;
				this.match(MParser.COLON);
				this.state = 1150;
				this.indent();
				this.state = 1151;
				(localctx as CatchCollectionStatementContext)._stmts = this.statement_list();
				this.state = 1152;
				this.dedent();
				this.state = 1153;
				this.lfs();
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
		this.enterRule(localctx, 88, MParser.RULE_break_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1157;
			this.match(MParser.BREAK);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 90, MParser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1159;
			this.match(MParser.RETURN);
			this.state = 1161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 27271189) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 71301119) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 294913) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 1150369805) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 1047679) !== 0)) {
				{
				this.state = 1160;
				localctx._exp = this.expression(0);
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
		let _startState: number = 92;
		this.enterRecursionRule(localctx, 92, MParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1184;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				localctx = new CssExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1164;
				(localctx as CssExpressionContext)._exp = this.css_expression();
				}
				break;
			case 2:
				{
				localctx = new JsxExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1165;
				(localctx as JsxExpressionContext)._exp = this.jsx_expression();
				}
				break;
			case 3:
				{
				localctx = new InstanceExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1166;
				(localctx as InstanceExpressionContext)._exp = this.instance_expression(0);
				}
				break;
			case 4:
				{
				localctx = new MutableInstanceExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1167;
				(localctx as MutableInstanceExpressionContext)._exp = this.mutable_instance_expression(0);
				}
				break;
			case 5:
				{
				localctx = new ArrowExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1168;
				(localctx as ArrowExpressionContext)._exp = this.arrow_expression();
				}
				break;
			case 6:
				{
				localctx = new MinusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1169;
				this.match(MParser.MINUS);
				this.state = 1170;
				(localctx as MinusExpressionContext)._exp = this.expression(23);
				}
				break;
			case 7:
				{
				localctx = new NotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1171;
				this.match(MParser.NOT);
				this.state = 1172;
				(localctx as NotExpressionContext)._exp = this.expression(22);
				}
				break;
			case 8:
				{
				localctx = new CodeExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1173;
				this.match(MParser.CODE);
				this.state = 1174;
				this.match(MParser.LPAR);
				this.state = 1175;
				(localctx as CodeExpressionContext)._exp = this.expression(0);
				this.state = 1176;
				this.match(MParser.RPAR);
				}
				break;
			case 9:
				{
				localctx = new ExecuteExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1178;
				this.match(MParser.EXECUTE);
				this.state = 1179;
				this.match(MParser.LPAR);
				this.state = 1180;
				(localctx as ExecuteExpressionContext)._name = this.variable_identifier();
				this.state = 1181;
				this.match(MParser.RPAR);
				}
				break;
			case 10:
				{
				localctx = new TypeExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1183;
				(localctx as TypeExpressionContext)._exp = this.type_expression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1278;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1276;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MultiplyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1186;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 1187;
						this.multiply();
						this.state = 1188;
						(localctx as MultiplyExpressionContext)._right = this.expression(21);
						}
						break;
					case 2:
						{
						localctx = new DivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as DivideExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1190;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 1191;
						this.divide();
						this.state = 1192;
						(localctx as DivideExpressionContext)._right = this.expression(20);
						}
						break;
					case 3:
						{
						localctx = new ModuloExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ModuloExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1194;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 1195;
						this.modulo();
						this.state = 1196;
						(localctx as ModuloExpressionContext)._right = this.expression(19);
						}
						break;
					case 4:
						{
						localctx = new IntDivideExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as IntDivideExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1198;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 1199;
						this.idivide();
						this.state = 1200;
						(localctx as IntDivideExpressionContext)._right = this.expression(18);
						}
						break;
					case 5:
						{
						localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AddExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1202;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 1203;
						(localctx as AddExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===33 || _la===34)) {
						    (localctx as AddExpressionContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1204;
						(localctx as AddExpressionContext)._right = this.expression(17);
						}
						break;
					case 6:
						{
						localctx = new CompareExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CompareExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1205;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1206;
						(localctx as CompareExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 15) !== 0))) {
						    (localctx as CompareExpressionContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1207;
						(localctx as CompareExpressionContext)._right = this.expression(16);
						}
						break;
					case 7:
						{
						localctx = new EqualsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as EqualsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1208;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1209;
						(localctx as EqualsExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 7) !== 0))) {
						    (localctx as EqualsExpressionContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1210;
						(localctx as EqualsExpressionContext)._right = this.expression(14);
						}
						break;
					case 8:
						{
						localctx = new ContainsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ContainsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1211;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1213;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===130) {
							{
							this.state = 1212;
							this.match(MParser.NOT);
							}
						}

						this.state = 1215;
						this.match(MParser.CONTAINS);
						this.state = 1216;
						(localctx as ContainsExpressionContext)._right = this.expression(13);
						}
						break;
					case 9:
						{
						localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1217;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1219;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===130) {
							{
							this.state = 1218;
							this.match(MParser.NOT);
							}
						}

						this.state = 1221;
						this.match(MParser.IN);
						this.state = 1222;
						(localctx as InExpressionContext)._right = this.expression(12);
						}
						break;
					case 10:
						{
						localctx = new HasExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as HasExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1223;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1225;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===130) {
							{
							this.state = 1224;
							this.match(MParser.NOT);
							}
						}

						this.state = 1227;
						this.match(MParser.HAS);
						this.state = 1228;
						(localctx as HasExpressionContext)._right = this.expression(11);
						}
						break;
					case 11:
						{
						localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as OrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1229;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1230;
						this.match(MParser.OR);
						this.state = 1231;
						(localctx as OrExpressionContext)._right = this.expression(8);
						}
						break;
					case 12:
						{
						localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1232;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1233;
						this.match(MParser.AND);
						this.state = 1234;
						(localctx as AndExpressionContext)._right = this.expression(7);
						}
						break;
					case 13:
						{
						localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as TernaryExpressionContext)._ifTrue = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1235;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1236;
						this.match(MParser.IF);
						this.state = 1237;
						(localctx as TernaryExpressionContext)._test = this.expression(0);
						this.state = 1238;
						this.match(MParser.ELSE);
						this.state = 1239;
						(localctx as TernaryExpressionContext)._ifFalse = this.expression(6);
						}
						break;
					case 14:
						{
						localctx = new IteratorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as IteratorExpressionContext)._exp = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1241;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1242;
						this.match(MParser.FOR);
						this.state = 1243;
						this.match(MParser.EACH);
						this.state = 1244;
						(localctx as IteratorExpressionContext)._name = this.variable_identifier();
						this.state = 1245;
						this.match(MParser.IN);
						this.state = 1246;
						(localctx as IteratorExpressionContext)._source = this.expression(2);
						}
						break;
					case 15:
						{
						localctx = new FilteredListExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as FilteredListExpressionContext)._src = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1248;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 1249;
						this.filtered_list_suffix();
						}
						break;
					case 16:
						{
						localctx = new CastExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CastExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1250;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 1251;
						this.match(MParser.AS);
						this.state = 1253;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===127) {
							{
							this.state = 1252;
							this.match(MParser.MUTABLE);
							}
						}

						this.state = 1255;
						(localctx as CastExpressionContext)._right = this.category_or_any_type();
						}
						break;
					case 17:
						{
						localctx = new IsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as IsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1256;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1257;
						this.match(MParser.IS);
						this.state = 1259;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
						case 1:
							{
							this.state = 1258;
							this.match(MParser.NOT);
							}
							break;
						}
						this.state = 1261;
						(localctx as IsExpressionContext)._right = this.is_expression();
						}
						break;
					case 18:
						{
						localctx = new HasAllExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as HasAllExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1262;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1264;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===130) {
							{
							this.state = 1263;
							this.match(MParser.NOT);
							}
						}

						this.state = 1266;
						this.match(MParser.HAS);
						this.state = 1267;
						this.match(MParser.ALL);
						this.state = 1268;
						(localctx as HasAllExpressionContext)._right = this.filter_expression();
						}
						break;
					case 19:
						{
						localctx = new HasAnyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as HasAnyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_expression);
						this.state = 1269;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1271;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===130) {
							{
							this.state = 1270;
							this.match(MParser.NOT);
							}
						}

						this.state = 1273;
						this.match(MParser.HAS);
						this.state = 1274;
						this.match(MParser.ANY);
						this.state = 1275;
						(localctx as HasAnyExpressionContext)._right = this.filter_expression();
						}
						break;
					}
					}
				}
				this.state = 1280;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 72, this._ctx);
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
		this.enterRule(localctx, 94, MParser.RULE_filter_expression);
		try {
			this.state = 1288;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				localctx = new ArrowFilterExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1281;
				this.match(MParser.WHERE);
				this.state = 1282;
				this.arrow_expression();
				}
				break;
			case 2:
				localctx = new ExplicitFilterExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1283;
				this.variable_identifier();
				this.state = 1284;
				this.match(MParser.WHERE);
				this.state = 1285;
				this.expression(0);
				}
				break;
			case 3:
				localctx = new OtherFilterExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1287;
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
	public type_expression(): Type_expressionContext {
		let localctx: Type_expressionContext = new Type_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, MParser.RULE_type_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1290;
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
		this.enterRule(localctx, 98, MParser.RULE_selectable_expression);
		try {
			this.state = 1298;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				localctx = new MethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1292;
				(localctx as MethodExpressionContext)._exp = this.method_expression();
				}
				break;
			case 2:
				localctx = new ParenthesisExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1293;
				(localctx as ParenthesisExpressionContext)._exp = this.parenthesis_expression();
				}
				break;
			case 3:
				localctx = new LiteralExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1294;
				(localctx as LiteralExpressionContext)._exp = this.literal_expression();
				}
				break;
			case 4:
				localctx = new IdentifierExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1295;
				(localctx as IdentifierExpressionContext)._exp = this.identifier();
				}
				break;
			case 5:
				localctx = new ThisExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1296;
				(localctx as ThisExpressionContext)._exp = this.this_expression();
				}
				break;
			case 6:
				localctx = new SuperExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1297;
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
		let _startState: number = 100;
		this.enterRecursionRule(localctx, 100, MParser.RULE_instance_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new SelectableExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1301;
			(localctx as SelectableExpressionContext)._parent = this.selectable_expression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1307;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 75, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_instance_expression);
					this.state = 1303;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1304;
					(localctx as SelectorExpressionContext)._selector = this.instance_selector();
					}
					}
				}
				this.state = 1309;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 75, this._ctx);
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
		let _startState: number = 102;
		this.enterRecursionRule(localctx, 102, MParser.RULE_mutable_instance_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new MutableSelectableExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1311;
			this.match(MParser.MUTABLE);
			this.state = 1312;
			(localctx as MutableSelectableExpressionContext)._exp = this.identifier();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1318;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 76, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_mutable_instance_expression);
					this.state = 1314;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1315;
					(localctx as MutableSelectorExpressionContext)._selector = this.instance_selector();
					}
					}
				}
				this.state = 1320;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 76, this._ctx);
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
		this.enterRule(localctx, 104, MParser.RULE_method_expression);
		try {
			this.state = 1330;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1321;
				this.blob_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1322;
				this.document_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1323;
				this.fetch_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1324;
				this.read_blob_expression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1325;
				this.read_all_expression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1326;
				this.read_one_expression();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1327;
				this.sorted_expression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1328;
				this.method_call_expression();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1329;
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
	public instance_selector(): Instance_selectorContext {
		let localctx: Instance_selectorContext = new Instance_selectorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, MParser.RULE_instance_selector);
		try {
			this.state = 1344;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				localctx = new MemberSelectorContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1332;
				this.match(MParser.DOT);
				this.state = 1333;
				(localctx as MemberSelectorContext)._name = this.member_identifier();
				}
				break;
			case 2:
				localctx = new MethodSelectorContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1334;
				this.match(MParser.DOT);
				this.state = 1335;
				(localctx as MethodSelectorContext)._method = this.method_call_expression();
				}
				break;
			case 3:
				localctx = new SliceSelectorContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1336;
				this.match(MParser.LBRAK);
				this.state = 1337;
				(localctx as SliceSelectorContext)._xslice = this.slice_arguments();
				this.state = 1338;
				this.match(MParser.RBRAK);
				}
				break;
			case 4:
				localctx = new ItemSelectorContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1340;
				this.match(MParser.LBRAK);
				this.state = 1341;
				(localctx as ItemSelectorContext)._exp = this.expression(0);
				this.state = 1342;
				this.match(MParser.RBRAK);
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
		this.enterRule(localctx, 108, MParser.RULE_blob_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1346;
			this.match(MParser.BLOB);
			this.state = 1347;
			this.match(MParser.LPAR);
			this.state = 1349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 27271189) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 71301119) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 294913) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 1150369805) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 1047679) !== 0)) {
				{
				this.state = 1348;
				this.expression(0);
				}
			}

			this.state = 1351;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 110, MParser.RULE_document_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1353;
			this.match(MParser.DOCUMENT);
			this.state = 1354;
			this.match(MParser.LPAR);
			this.state = 1358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===114) {
				{
				this.state = 1355;
				this.match(MParser.FROM);
				this.state = 1356;
				this.match(MParser.EQ);
				this.state = 1357;
				localctx._exp = this.expression(0);
				}
			}

			this.state = 1360;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 112, MParser.RULE_constructor_expression);
		let _la: number;
		try {
			this.state = 1378;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				localctx = new ConstructorFromContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1362;
				(localctx as ConstructorFromContext)._typ = this.mutable_category_type();
				this.state = 1363;
				this.match(MParser.LPAR);
				this.state = 1364;
				(localctx as ConstructorFromContext)._copyExp = this.copy_from();
				this.state = 1367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18) {
					{
					this.state = 1365;
					this.match(MParser.COMMA);
					this.state = 1366;
					(localctx as ConstructorFromContext)._args = this.argument_assignment_list(0);
					}
				}

				this.state = 1369;
				this.match(MParser.RPAR);
				}
				break;
			case 2:
				localctx = new ConstructorNoFromContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1371;
				(localctx as ConstructorNoFromContext)._typ = this.mutable_category_type();
				this.state = 1372;
				this.match(MParser.LPAR);
				this.state = 1374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 27271189) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 71301119) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 294913) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 1150369805) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 1047679) !== 0)) {
					{
					this.state = 1373;
					(localctx as ConstructorNoFromContext)._args = this.argument_assignment_list(0);
					}
				}

				this.state = 1376;
				this.match(MParser.RPAR);
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
		this.enterRule(localctx, 114, MParser.RULE_copy_from);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1380;
			this.match(MParser.FROM);
			this.state = 1381;
			this.assign();
			this.state = 1382;
			localctx._exp = this.expression(0);
			this.state = 1383;
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
		let _startState: number = 116;
		this.enterRecursionRule(localctx, 116, MParser.RULE_argument_assignment_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1390;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				localctx = new ExpressionAssignmentListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1386;
				(localctx as ExpressionAssignmentListContext)._exp = this.expression(0);
				this.state = 1387;
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
				this.state = 1389;
				(localctx as ArgumentAssignmentListContext)._item = this.argument_assignment();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1397;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 85, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_argument_assignment_list);
					this.state = 1392;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 1393;
					this.match(MParser.COMMA);
					this.state = 1394;
					(localctx as ArgumentAssignmentListItemContext)._item = this.argument_assignment();
					}
					}
				}
				this.state = 1399;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 85, this._ctx);
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
		this.enterRule(localctx, 118, MParser.RULE_argument_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1400;
			localctx._name = this.variable_identifier();
			this.state = 1404;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 1401;
				this.assign();
				this.state = 1402;
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
	public write_statement(): Write_statementContext {
		let localctx: Write_statementContext = new Write_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, MParser.RULE_write_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1406;
			this.match(MParser.WRITE);
			this.state = 1407;
			localctx._what = this.expression(0);
			this.state = 1408;
			this.match(MParser.TO);
			this.state = 1409;
			localctx._target = this.expression(0);
			this.state = 1411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===156) {
				{
				this.state = 1410;
				this.then();
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
	public filtered_list_suffix(): Filtered_list_suffixContext {
		let localctx: Filtered_list_suffixContext = new Filtered_list_suffixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, MParser.RULE_filtered_list_suffix);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1413;
			this.match(MParser.FILTERED);
			this.state = 1416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===163) {
				{
				this.state = 1414;
				this.match(MParser.WITH);
				this.state = 1415;
				localctx._name = this.variable_identifier();
				}
			}

			this.state = 1418;
			this.match(MParser.WHERE);
			this.state = 1419;
			localctx._predicate = this.expression(0);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 124, MParser.RULE_fetch_expression);
		let _la: number;
		try {
			this.state = 1459;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				localctx = new FetchOneContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1421;
				this.match(MParser.FETCH);
				this.state = 1422;
				this.match(MParser.ONE);
				this.state = 1424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===127 || _la===173) {
					{
					this.state = 1423;
					(localctx as FetchOneContext)._typ = this.mutable_category_type();
					}
				}

				this.state = 1426;
				this.match(MParser.WHERE);
				this.state = 1427;
				(localctx as FetchOneContext)._predicate = this.expression(0);
				this.state = 1430;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 1428;
					this.match(MParser.INCLUDE);
					this.state = 1429;
					(localctx as FetchOneContext)._include = this.include_list();
					}
					break;
				}
				}
				break;
			case 2:
				localctx = new FetchManyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1432;
				this.match(MParser.FETCH);
				this.state = 1439;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 77:
					{
					this.state = 1433;
					this.match(MParser.ALL);
					}
					break;
				case 146:
					{
					this.state = 1434;
					this.match(MParser.ROWS);
					this.state = 1435;
					(localctx as FetchManyContext)._xstart = this.expression(0);
					this.state = 1436;
					this.match(MParser.TO);
					this.state = 1437;
					(localctx as FetchManyContext)._xstop = this.expression(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1441;
				this.match(MParser.LPAR);
				this.state = 1443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===127 || _la===173) {
					{
					this.state = 1442;
					(localctx as FetchManyContext)._typ = this.mutable_category_type();
					}
				}

				this.state = 1445;
				this.match(MParser.RPAR);
				this.state = 1448;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
				case 1:
					{
					this.state = 1446;
					this.match(MParser.WHERE);
					this.state = 1447;
					(localctx as FetchManyContext)._predicate = this.expression(0);
					}
					break;
				}
				this.state = 1452;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 94, this._ctx) ) {
				case 1:
					{
					this.state = 1450;
					this.match(MParser.INCLUDE);
					this.state = 1451;
					(localctx as FetchManyContext)._include = this.include_list();
					}
					break;
				}
				this.state = 1457;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
				case 1:
					{
					this.state = 1454;
					this.match(MParser.ORDER);
					this.state = 1455;
					this.match(MParser.BY);
					this.state = 1456;
					(localctx as FetchManyContext)._orderby = this.order_by_list();
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
		this.enterRule(localctx, 126, MParser.RULE_fetch_statement);
		let _la: number;
		try {
			this.state = 1502;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				localctx = new FetchOneAsyncContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1461;
				this.match(MParser.FETCH);
				this.state = 1462;
				this.match(MParser.ONE);
				this.state = 1464;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===127 || _la===173) {
					{
					this.state = 1463;
					(localctx as FetchOneAsyncContext)._typ = this.mutable_category_type();
					}
				}

				this.state = 1466;
				this.match(MParser.WHERE);
				this.state = 1467;
				(localctx as FetchOneAsyncContext)._predicate = this.expression(0);
				this.state = 1470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===119) {
					{
					this.state = 1468;
					this.match(MParser.INCLUDE);
					this.state = 1469;
					(localctx as FetchOneAsyncContext)._include = this.include_list();
					}
				}

				this.state = 1472;
				this.then();
				}
				break;
			case 2:
				localctx = new FetchManyAsyncContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1474;
				this.match(MParser.FETCH);
				this.state = 1481;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 77:
					{
					this.state = 1475;
					this.match(MParser.ALL);
					}
					break;
				case 146:
					{
					this.state = 1476;
					this.match(MParser.ROWS);
					this.state = 1477;
					(localctx as FetchManyAsyncContext)._xstart = this.expression(0);
					this.state = 1478;
					this.match(MParser.TO);
					this.state = 1479;
					(localctx as FetchManyAsyncContext)._xstop = this.expression(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1483;
				this.match(MParser.LPAR);
				this.state = 1485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===127 || _la===173) {
					{
					this.state = 1484;
					(localctx as FetchManyAsyncContext)._typ = this.mutable_category_type();
					}
				}

				this.state = 1487;
				this.match(MParser.RPAR);
				this.state = 1490;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===165) {
					{
					this.state = 1488;
					this.match(MParser.WHERE);
					this.state = 1489;
					(localctx as FetchManyAsyncContext)._predicate = this.expression(0);
					}
				}

				this.state = 1494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===119) {
					{
					this.state = 1492;
					this.match(MParser.INCLUDE);
					this.state = 1493;
					(localctx as FetchManyAsyncContext)._include = this.include_list();
					}
				}

				this.state = 1499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===137) {
					{
					this.state = 1496;
					this.match(MParser.ORDER);
					this.state = 1497;
					this.match(MParser.BY);
					this.state = 1498;
					(localctx as FetchManyAsyncContext)._orderby = this.order_by_list();
					}
				}

				this.state = 1501;
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
		this.enterRule(localctx, 128, MParser.RULE_then);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1504;
			this.match(MParser.THEN);
			this.state = 1505;
			this.match(MParser.WITH);
			this.state = 1506;
			localctx._name = this.variable_identifier();
			this.state = 1507;
			this.match(MParser.COLON);
			this.state = 1508;
			this.indent();
			this.state = 1509;
			localctx._stmts = this.statement_list();
			this.state = 1510;
			this.dedent();
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 130, MParser.RULE_read_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1512;
			this.match(MParser.READ);
			this.state = 1513;
			this.match(MParser.ALL);
			this.state = 1514;
			this.match(MParser.FROM);
			this.state = 1515;
			localctx._source = this.expression(0);
			this.state = 1516;
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
		this.enterRule(localctx, 132, MParser.RULE_sorted_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1518;
			this.match(MParser.SORTED);
			this.state = 1520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===98) {
				{
				this.state = 1519;
				this.match(MParser.DESC);
				}
			}

			this.state = 1522;
			this.match(MParser.LPAR);
			this.state = 1523;
			localctx._source = this.instance_expression(0);
			this.state = 1529;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 1524;
				this.match(MParser.COMMA);
				this.state = 1525;
				this.key_token();
				this.state = 1526;
				this.match(MParser.EQ);
				this.state = 1527;
				localctx._key = this.sorted_key();
				}
			}

			this.state = 1531;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 134, MParser.RULE_assign_instance_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1533;
			localctx._inst = this.assignable_instance(0);
			this.state = 1534;
			this.assign();
			this.state = 1535;
			localctx._exp = this.expression(0);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 136, MParser.RULE_child_instance);
		try {
			this.state = 1545;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				localctx = new MemberInstanceContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1537;
				if (!(this.wasNot(MParser.WS))) {
					throw this.createFailedPredicateException("$parser.wasNot(MParser.WS)");
				}
				this.state = 1538;
				this.match(MParser.DOT);
				this.state = 1539;
				(localctx as MemberInstanceContext)._name = this.variable_identifier();
				}
				break;
			case 2:
				localctx = new ItemInstanceContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1540;
				if (!(this.wasNot(MParser.WS))) {
					throw this.createFailedPredicateException("$parser.wasNot(MParser.WS)");
				}
				this.state = 1541;
				this.match(MParser.LBRAK);
				this.state = 1542;
				(localctx as ItemInstanceContext)._exp = this.expression(0);
				this.state = 1543;
				this.match(MParser.RBRAK);
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
	public assign_tuple_statement(): Assign_tuple_statementContext {
		let localctx: Assign_tuple_statementContext = new Assign_tuple_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, MParser.RULE_assign_tuple_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1547;
			localctx._items = this.variable_identifier_list();
			this.state = 1548;
			this.assign();
			this.state = 1549;
			localctx._exp = this.expression(0);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 140, MParser.RULE_lfs);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1554;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 108, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1551;
					this.match(MParser.LF);
					}
					}
				}
				this.state = 1556;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 108, this._ctx);
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
	public lfp(): LfpContext {
		let localctx: LfpContext = new LfpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, MParser.RULE_lfp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1557;
				this.match(MParser.LF);
				}
				}
				this.state = 1560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===5);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 144, MParser.RULE_ws_plus);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1565;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1562;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 226) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 1567;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
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
	public indent(): IndentContext {
		let localctx: IndentContext = new IndentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, MParser.RULE_indent);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1568;
				this.match(MParser.LF);
				}
				}
				this.state = 1571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===5);
			this.state = 1573;
			this.match(MParser.INDENT);
			}
		}
		catch (re) {
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
	public dedent(): DedentContext {
		let localctx: DedentContext = new DedentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, MParser.RULE_dedent);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 1575;
				this.match(MParser.LF);
				}
				}
				this.state = 1580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1581;
			this.match(MParser.DEDENT);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 150, MParser.RULE_type_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1583;
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
		this.enterRule(localctx, 152, MParser.RULE_null_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1585;
			this.match(MParser.NONE);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 154, MParser.RULE_comment_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1587;
			_la = this._input.LA(1);
			if(!(_la===8 || _la===9)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 1589;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 1588;
					this.matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1591;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 113, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 156, MParser.RULE_repl);
		try {
			this.state = 1596;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1593;
				this.declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1594;
				this.statement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1595;
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
		this.enterRule(localctx, 158, MParser.RULE_declaration_list);
		let _la: number;
		try {
			localctx = new FullDeclarationListContext(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1598;
			this.lfs();
			this.state = 1600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===8 || _la===9 || ((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & 134578305) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 10485761) !== 0) || _la===162 || _la===177) {
				{
				this.state = 1599;
				this.declarations();
				}
			}

			this.state = 1602;
			this.lfs();
			this.state = 1603;
			this.match(MParser.EOF);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 160, MParser.RULE_declarations);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1605;
			this.declaration();
			this.state = 1611;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1606;
					this.lfp();
					this.state = 1607;
					this.declaration();
					}
					}
				}
				this.state = 1613;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 116, this._ctx);
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
		this.enterRule(localctx, 162, MParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8 || _la===9) {
				{
				{
				this.state = 1614;
				this.comment_statement();
				this.state = 1615;
				this.lfp();
				}
				}
				this.state = 1621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===177) {
				{
				{
				this.state = 1622;
				this.annotation_constructor();
				this.state = 1623;
				this.lfp();
				}
				}
				this.state = 1629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1636;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1630;
				this.attribute_declaration();
				}
				break;
			case 2:
				{
				this.state = 1631;
				this.category_declaration();
				}
				break;
			case 3:
				{
				this.state = 1632;
				this.resource_declaration();
				}
				break;
			case 4:
				{
				this.state = 1633;
				this.enum_declaration();
				}
				break;
			case 5:
				{
				this.state = 1634;
				this.widget_declaration();
				}
				break;
			case 6:
				{
				this.state = 1635;
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
		this.enterRule(localctx, 164, MParser.RULE_annotation_constructor);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1638;
			localctx._name = this.annotation_identifier();
			this.state = 1653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 1639;
				this.match(MParser.LPAR);
				this.state = 1649;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 21:
				case 23:
				case 25:
				case 34:
				case 42:
				case 45:
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
				case 80:
				case 127:
				case 129:
				case 168:
				case 169:
				case 170:
				case 171:
				case 172:
				case 173:
				case 178:
				case 179:
				case 180:
				case 181:
				case 182:
				case 183:
				case 184:
				case 185:
				case 186:
				case 187:
					{
					this.state = 1640;
					localctx._exp = this.annotation_argument_value();
					}
					break;
				case 115:
				case 148:
				case 174:
					{
					{
					this.state = 1641;
					this.annotation_argument();
					this.state = 1646;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===18) {
						{
						{
						this.state = 1642;
						this.match(MParser.COMMA);
						this.state = 1643;
						this.annotation_argument();
						}
						}
						this.state = 1648;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1651;
				this.match(MParser.RPAR);
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
		this.enterRule(localctx, 166, MParser.RULE_annotation_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1655;
			this.match(MParser.ARONDBASE_IDENTIFIER);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 168, MParser.RULE_annotation_argument);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1657;
			localctx._name = this.annotation_argument_name();
			this.state = 1658;
			this.match(MParser.EQ);
			this.state = 1659;
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
		this.enterRule(localctx, 170, MParser.RULE_annotation_argument_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1661;
			_la = this._input.LA(1);
			if(!(_la===115 || _la===148 || _la===174)) {
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
		this.enterRule(localctx, 172, MParser.RULE_annotation_argument_value);
		try {
			this.state = 1665;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				localctx = new AnnotationLiteralValueContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1663;
				(localctx as AnnotationLiteralValueContext)._exp = this.literal_expression();
				}
				break;
			case 2:
				localctx = new AnnotationTypeValueContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1664;
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
		this.enterRule(localctx, 174, MParser.RULE_resource_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1667;
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
		this.enterRule(localctx, 176, MParser.RULE_enum_declaration);
		try {
			this.state = 1671;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1669;
				this.enum_category_declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1670;
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
		this.enterRule(localctx, 178, MParser.RULE_native_symbol_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1673;
			this.native_symbol();
			this.state = 1679;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1674;
					this.lfp();
					this.state = 1675;
					this.native_symbol();
					}
					}
				}
				this.state = 1681;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 125, this._ctx);
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
		this.enterRule(localctx, 180, MParser.RULE_category_symbol_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1682;
			this.category_symbol();
			this.state = 1688;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1683;
					this.lfp();
					this.state = 1684;
					this.category_symbol();
					}
					}
				}
				this.state = 1690;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
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
		this.enterRule(localctx, 182, MParser.RULE_symbol_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1691;
			this.symbol_identifier();
			this.state = 1696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 1692;
				this.match(MParser.COMMA);
				this.state = 1693;
				this.symbol_identifier();
				}
				}
				this.state = 1698;
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
		this.enterRule(localctx, 184, MParser.RULE_attribute_constraint);
		try {
			this.state = 1709;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				localctx = new MatchingListContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1699;
				this.match(MParser.IN);
				this.state = 1700;
				(localctx as MatchingListContext)._source = this.list_literal();
				}
				break;
			case 2:
				localctx = new MatchingSetContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1701;
				this.match(MParser.IN);
				this.state = 1702;
				(localctx as MatchingSetContext)._source = this.set_literal();
				}
				break;
			case 3:
				localctx = new MatchingRangeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1703;
				this.match(MParser.IN);
				this.state = 1704;
				(localctx as MatchingRangeContext)._source = this.range_literal();
				}
				break;
			case 4:
				localctx = new MatchingPatternContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1705;
				this.match(MParser.MATCHING);
				this.state = 1706;
				(localctx as MatchingPatternContext)._text = this.match(MParser.TEXT_LITERAL);
				}
				break;
			case 5:
				localctx = new MatchingExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1707;
				this.match(MParser.MATCHING);
				this.state = 1708;
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
		this.enterRule(localctx, 186, MParser.RULE_list_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 1711;
				this.match(MParser.MUTABLE);
				}
			}

			this.state = 1714;
			this.match(MParser.LBRAK);
			this.state = 1716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 27271189) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 71301119) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 294913) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 1150369805) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 1047679) !== 0)) {
				{
				this.state = 1715;
				this.expression_list();
				}
			}

			this.state = 1718;
			this.match(MParser.RBRAK);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 188, MParser.RULE_set_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 1720;
				this.match(MParser.MUTABLE);
				}
			}

			this.state = 1723;
			this.match(MParser.LT);
			this.state = 1725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 27271189) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 71301119) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 294913) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 1150369805) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 1047679) !== 0)) {
				{
				this.state = 1724;
				this.expression_list();
				}
			}

			this.state = 1727;
			this.match(MParser.GT);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 190, MParser.RULE_expression_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1729;
			this.expression(0);
			this.state = 1734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 1730;
				this.match(MParser.COMMA);
				this.state = 1731;
				this.expression(0);
				}
				}
				this.state = 1736;
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
		this.enterRule(localctx, 192, MParser.RULE_range_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1737;
			this.match(MParser.LBRAK);
			this.state = 1738;
			localctx._low = this.expression(0);
			this.state = 1739;
			this.match(MParser.RANGE);
			this.state = 1740;
			localctx._high = this.expression(0);
			this.state = 1741;
			this.match(MParser.RBRAK);
			}
		}
		catch (re) {
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
		let _startState: number = 194;
		this.enterRecursionRule(localctx, 194, MParser.RULE_typedef, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
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
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 74:
			case 173:
				{
				localctx = new PrimaryTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 1744;
				(localctx as PrimaryTypeContext)._p = this.primary_type();
				}
				break;
			case 73:
				{
				localctx = new CursorTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1745;
				this.match(MParser.CURSOR);
				this.state = 1746;
				this.match(MParser.LT);
				this.state = 1747;
				(localctx as CursorTypeContext)._c = this.typedef(0);
				this.state = 1748;
				this.match(MParser.GT);
				}
				break;
			case 72:
				{
				localctx = new IteratorTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1750;
				this.match(MParser.ITERATOR);
				this.state = 1751;
				this.match(MParser.LT);
				this.state = 1752;
				(localctx as IteratorTypeContext)._i = this.typedef(0);
				this.state = 1753;
				this.match(MParser.GT);
				}
				break;
			case 75:
				{
				localctx = new TypeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 1755;
				this.match(MParser.TYPE);
				this.state = 1756;
				this.match(MParser.LT);
				this.state = 1757;
				(localctx as TypeTypeContext)._t = this.typedef(0);
				this.state = 1758;
				this.match(MParser.GT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1771;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1769;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 135, this._ctx) ) {
					case 1:
						{
						localctx = new SetTypeContext(this, new TypedefContext(this, _parentctx, _parentState));
						(localctx as SetTypeContext)._s = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_typedef);
						this.state = 1762;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1763;
						this.match(MParser.LTGT);
						}
						break;
					case 2:
						{
						localctx = new ListTypeContext(this, new TypedefContext(this, _parentctx, _parentState));
						(localctx as ListTypeContext)._l = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_typedef);
						this.state = 1764;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1765;
						this.match(MParser.LBRAK);
						this.state = 1766;
						this.match(MParser.RBRAK);
						}
						break;
					case 3:
						{
						localctx = new DictTypeContext(this, new TypedefContext(this, _parentctx, _parentState));
						(localctx as DictTypeContext)._d = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_typedef);
						this.state = 1767;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1768;
						this.match(MParser.LTCOLONGT);
						}
						break;
					}
					}
				}
				this.state = 1773;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
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
		this.enterRule(localctx, 196, MParser.RULE_primary_type);
		try {
			this.state = 1776;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
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
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 74:
				localctx = new NativeTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1774;
				(localctx as NativeTypeContext)._n = this.native_type();
				}
				break;
			case 173:
				localctx = new CategoryTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1775;
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
		this.enterRule(localctx, 198, MParser.RULE_native_type);
		try {
			this.state = 1796;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 54:
				localctx = new BooleanTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1778;
				this.match(MParser.BOOLEAN);
				}
				break;
			case 55:
				localctx = new CssTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1779;
				this.match(MParser.CSS);
				}
				break;
			case 56:
				localctx = new CharacterTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1780;
				this.match(MParser.CHARACTER);
				}
				break;
			case 57:
				localctx = new TextTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1781;
				this.match(MParser.TEXT);
				}
				break;
			case 69:
				localctx = new ImageTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1782;
				this.match(MParser.IMAGE);
				}
				break;
			case 58:
				localctx = new IntegerTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1783;
				this.match(MParser.INTEGER);
				}
				break;
			case 59:
				localctx = new DecimalTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1784;
				this.match(MParser.DECIMAL);
				}
				break;
			case 67:
				localctx = new DocumentTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1785;
				this.match(MParser.DOCUMENT);
				}
				break;
			case 60:
				localctx = new DateTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1786;
				this.match(MParser.DATE);
				}
				break;
			case 62:
				localctx = new DateTimeTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1787;
				this.match(MParser.DATETIME);
				}
				break;
			case 61:
				localctx = new TimeTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1788;
				this.match(MParser.TIME);
				}
				break;
			case 63:
				localctx = new PeriodTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1789;
				this.match(MParser.PERIOD);
				}
				break;
			case 64:
				localctx = new VersionTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 1790;
				this.match(MParser.VERSION);
				}
				break;
			case 66:
				localctx = new CodeTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 1791;
				this.match(MParser.CODE);
				}
				break;
			case 68:
				localctx = new BlobTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 1792;
				this.match(MParser.BLOB);
				}
				break;
			case 70:
				localctx = new UUIDTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 1793;
				this.match(MParser.UUID);
				}
				break;
			case 71:
				localctx = new DbIdTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 1794;
				this.match(MParser.DBID);
				}
				break;
			case 74:
				localctx = new HtmlTypeContext(this, localctx);
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 1795;
				this.match(MParser.HTML);
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
		this.enterRule(localctx, 200, MParser.RULE_category_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1798;
			localctx._t1 = this.match(MParser.TYPE_IDENTIFIER);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 202, MParser.RULE_mutable_category_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 1800;
				this.match(MParser.MUTABLE);
				}
			}

			this.state = 1803;
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
		this.enterRule(localctx, 204, MParser.RULE_code_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1805;
			localctx._t1 = this.match(MParser.CODE);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 206, MParser.RULE_category_declaration);
		try {
			this.state = 1810;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 140, this._ctx) ) {
			case 1:
				localctx = new ConcreteCategoryDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1807;
				(localctx as ConcreteCategoryDeclarationContext)._decl = this.concrete_category_declaration();
				}
				break;
			case 2:
				localctx = new NativeCategoryDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1808;
				(localctx as NativeCategoryDeclarationContext)._decl = this.native_category_declaration();
				}
				break;
			case 3:
				localctx = new SingletonCategoryDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1809;
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
		this.enterRule(localctx, 208, MParser.RULE_widget_declaration);
		try {
			this.state = 1814;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 162:
				localctx = new ConcreteWidgetDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1812;
				(localctx as ConcreteWidgetDeclarationContext)._decl = this.concrete_widget_declaration();
				}
				break;
			case 128:
				localctx = new NativeWidgetDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1813;
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
		this.enterRule(localctx, 210, MParser.RULE_type_identifier_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1816;
			this.type_identifier();
			this.state = 1821;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 142, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1817;
					this.match(MParser.COMMA);
					this.state = 1818;
					this.type_identifier();
					}
					}
				}
				this.state = 1823;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 142, this._ctx);
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
		this.enterRule(localctx, 212, MParser.RULE_method_identifier);
		try {
			this.state = 1826;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 91:
			case 143:
			case 174:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1824;
				this.variable_identifier();
				}
				break;
			case 173:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1825;
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
		this.enterRule(localctx, 214, MParser.RULE_identifier_or_keyword);
		try {
			this.state = 1830;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1828;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1829;
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
		this.enterRule(localctx, 216, MParser.RULE_nospace_hyphen_identifier_or_keyword);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1832;
			if (!(this.wasNotWhiteSpace())) {
				throw this.createFailedPredicateException("$parser.wasNotWhiteSpace()");
			}
			this.state = 1833;
			this.match(MParser.MINUS);
			this.state = 1834;
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
		this.enterRule(localctx, 218, MParser.RULE_nospace_identifier_or_keyword);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1836;
			if (!(this.wasNotWhiteSpace())) {
				throw this.createFailedPredicateException("$parser.wasNotWhiteSpace()");
			}
			this.state = 1837;
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
		this.enterRule(localctx, 220, MParser.RULE_identifier);
		try {
			this.state = 1842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 91:
			case 143:
			case 174:
				localctx = new VariableIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1839;
				this.variable_identifier();
				}
				break;
			case 173:
				localctx = new TypeIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1840;
				this.type_identifier();
				}
				break;
			case 172:
				localctx = new SymbolIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1841;
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
		this.enterRule(localctx, 222, MParser.RULE_member_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1844;
			_la = this._input.LA(1);
			if(!(_la===91 || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 16842753) !== 0) || _la===174)) {
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
		this.enterRule(localctx, 224, MParser.RULE_variable_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1846;
			_la = this._input.LA(1);
			if(!(_la===91 || _la===143 || _la===174)) {
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
		this.enterRule(localctx, 226, MParser.RULE_attribute_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1848;
			_la = this._input.LA(1);
			if(!(((((_la - 143)) & ~0x1F) === 0 && ((1 << (_la - 143)) & 2147483905) !== 0))) {
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
		this.enterRule(localctx, 228, MParser.RULE_type_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1850;
			this.match(MParser.TYPE_IDENTIFIER);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 230, MParser.RULE_symbol_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1852;
			this.match(MParser.SYMBOL_IDENTIFIER);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 232, MParser.RULE_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1854;
			this.argument();
			this.state = 1859;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 1855;
				this.match(MParser.COMMA);
				this.state = 1856;
				this.argument();
				}
				}
				this.state = 1861;
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
		this.enterRule(localctx, 234, MParser.RULE_argument);
		let _la: number;
		try {
			this.state = 1867;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 66:
				localctx = new CodeArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1862;
				(localctx as CodeArgumentContext)._arg = this.code_argument();
				}
				break;
			case 91:
			case 127:
			case 143:
			case 174:
				localctx = new OperatorArgumentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===127) {
					{
					this.state = 1863;
					this.match(MParser.MUTABLE);
					}
				}

				this.state = 1866;
				(localctx as OperatorArgumentContext)._arg = this.operator_argument();
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
	public operator_argument(): Operator_argumentContext {
		let localctx: Operator_argumentContext = new Operator_argumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, MParser.RULE_operator_argument);
		try {
			this.state = 1871;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1869;
				this.named_argument();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1870;
				this.typed_argument();
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
	public named_argument(): Named_argumentContext {
		let localctx: Named_argumentContext = new Named_argumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, MParser.RULE_named_argument);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1873;
			this.variable_identifier();
			this.state = 1876;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
				{
				this.state = 1874;
				this.match(MParser.EQ);
				this.state = 1875;
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
		this.enterRule(localctx, 240, MParser.RULE_code_argument);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1878;
			this.code_type();
			this.state = 1879;
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
		this.enterRule(localctx, 242, MParser.RULE_category_or_any_type);
		try {
			this.state = 1883;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
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
			case 173:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1881;
				this.typedef(0);
				}
				break;
			case 80:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1882;
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
		let _startState: number = 244;
		this.enterRecursionRule(localctx, 244, MParser.RULE_any_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new AnyTypeContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 1886;
			this.match(MParser.ANY);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1896;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1894;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 152, this._ctx) ) {
					case 1:
						{
						localctx = new AnyListTypeContext(this, new Any_typeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_any_type);
						this.state = 1888;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1889;
						this.match(MParser.LBRAK);
						this.state = 1890;
						this.match(MParser.RBRAK);
						}
						break;
					case 2:
						{
						localctx = new AnyDictTypeContext(this, new Any_typeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, MParser.RULE_any_type);
						this.state = 1891;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1892;
						this.match(MParser.LCURL);
						this.state = 1893;
						this.match(MParser.RCURL);
						}
						break;
					}
					}
				}
				this.state = 1898;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
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
		this.enterRule(localctx, 246, MParser.RULE_member_method_declaration_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1899;
			this.member_method_declaration();
			this.state = 1905;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 154, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1900;
					this.lfp();
					this.state = 1901;
					this.member_method_declaration();
					}
					}
				}
				this.state = 1907;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 154, this._ctx);
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
		this.enterRule(localctx, 248, MParser.RULE_member_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1913;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8 || _la===9) {
				{
				{
				this.state = 1908;
				this.comment_statement();
				this.state = 1909;
				this.lfp();
				}
				}
				this.state = 1915;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===177) {
				{
				{
				this.state = 1916;
				this.annotation_constructor();
				this.state = 1917;
				this.lfp();
				}
				}
				this.state = 1923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1929;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				{
				this.state = 1924;
				this.setter_method_declaration();
				}
				break;
			case 2:
				{
				this.state = 1925;
				this.getter_method_declaration();
				}
				break;
			case 3:
				{
				this.state = 1926;
				this.concrete_method_declaration();
				}
				break;
			case 4:
				{
				this.state = 1927;
				this.abstract_member_method_declaration();
				}
				break;
			case 5:
				{
				this.state = 1928;
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
		this.enterRule(localctx, 250, MParser.RULE_native_member_method_declaration_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1931;
			this.native_member_method_declaration();
			this.state = 1937;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1932;
					this.lfp();
					this.state = 1933;
					this.native_member_method_declaration();
					}
					}
				}
				this.state = 1939;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 158, this._ctx);
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
		this.enterRule(localctx, 252, MParser.RULE_native_member_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8 || _la===9) {
				{
				{
				this.state = 1940;
				this.comment_statement();
				this.state = 1941;
				this.lfp();
				}
				}
				this.state = 1947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1953;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===177) {
				{
				{
				this.state = 1948;
				this.annotation_constructor();
				this.state = 1949;
				this.lfp();
				}
				}
				this.state = 1955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1959;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				{
				this.state = 1956;
				this.native_getter_declaration();
				}
				break;
			case 2:
				{
				this.state = 1957;
				this.native_setter_declaration();
				}
				break;
			case 3:
				{
				this.state = 1958;
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
		this.enterRule(localctx, 254, MParser.RULE_native_category_binding);
		try {
			this.state = 1971;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				localctx = new JavaCategoryBindingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1961;
				this.match(MParser.JAVA);
				this.state = 1962;
				(localctx as JavaCategoryBindingContext)._binding = this.java_class_identifier_expression(0);
				}
				break;
			case 11:
				localctx = new CSharpCategoryBindingContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1963;
				this.match(MParser.CSHARP);
				this.state = 1964;
				(localctx as CSharpCategoryBindingContext)._binding = this.csharp_identifier_expression(0);
				}
				break;
			case 12:
				localctx = new Python2CategoryBindingContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1965;
				this.match(MParser.PYTHON2);
				this.state = 1966;
				(localctx as Python2CategoryBindingContext)._binding = this.python_category_binding();
				}
				break;
			case 13:
				localctx = new Python3CategoryBindingContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1967;
				this.match(MParser.PYTHON3);
				this.state = 1968;
				(localctx as Python3CategoryBindingContext)._binding = this.python_category_binding();
				}
				break;
			case 14:
				localctx = new JavascriptCategoryBindingContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1969;
				this.match(MParser.JAVASCRIPT);
				this.state = 1970;
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
		this.enterRule(localctx, 256, MParser.RULE_python_category_binding);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1973;
			this.identifier();
			this.state = 1975;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 163, this._ctx) ) {
			case 1:
				{
				this.state = 1974;
				this.python_module();
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
	public python_module(): Python_moduleContext {
		let localctx: Python_moduleContext = new Python_moduleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 258, MParser.RULE_python_module);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1977;
			this.match(MParser.FROM);
			this.state = 1978;
			this.module_token();
			this.state = 1979;
			this.match(MParser.COLON);
			this.state = 1980;
			this.python_identifier();
			this.state = 1985;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1981;
					this.match(MParser.DOT);
					this.state = 1982;
					this.python_identifier();
					}
					}
				}
				this.state = 1987;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 164, this._ctx);
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
		this.enterRule(localctx, 260, MParser.RULE_javascript_category_binding);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1988;
			this.javascript_identifier();
			this.state = 1993;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 165, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1989;
					this.match(MParser.DOT);
					this.state = 1990;
					this.javascript_identifier();
					}
					}
				}
				this.state = 1995;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 165, this._ctx);
			}
			this.state = 1997;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				{
				this.state = 1996;
				this.javascript_module();
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
	public javascript_module(): Javascript_moduleContext {
		let localctx: Javascript_moduleContext = new Javascript_moduleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 262, MParser.RULE_javascript_module);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1999;
			this.match(MParser.FROM);
			this.state = 2000;
			this.module_token();
			this.state = 2001;
			this.match(MParser.COLON);
			this.state = 2003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 2002;
				this.match(MParser.SLASH);
				}
			}

			this.state = 2005;
			this.javascript_identifier();
			this.state = 2010;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 168, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2006;
					this.match(MParser.SLASH);
					this.state = 2007;
					this.javascript_identifier();
					}
					}
				}
				this.state = 2012;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 168, this._ctx);
			}
			this.state = 2015;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				{
				this.state = 2013;
				this.match(MParser.DOT);
				this.state = 2014;
				this.javascript_identifier();
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
	public variable_identifier_list(): Variable_identifier_listContext {
		let localctx: Variable_identifier_listContext = new Variable_identifier_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 264, MParser.RULE_variable_identifier_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2017;
			this.variable_identifier();
			this.state = 2022;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 2018;
				this.match(MParser.COMMA);
				this.state = 2019;
				this.variable_identifier();
				}
				}
				this.state = 2024;
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
		this.enterRule(localctx, 266, MParser.RULE_attribute_identifier_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2025;
			this.attribute_identifier();
			this.state = 2030;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 2026;
				this.match(MParser.COMMA);
				this.state = 2027;
				this.attribute_identifier();
				}
				}
				this.state = 2032;
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
		this.enterRule(localctx, 268, MParser.RULE_method_declaration);
		try {
			this.state = 2037;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2033;
				this.abstract_global_method_declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2034;
				this.concrete_method_declaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2035;
				this.native_method_declaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2036;
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
	public native_statement_list(): Native_statement_listContext {
		let localctx: Native_statement_listContext = new Native_statement_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 270, MParser.RULE_native_statement_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2039;
			this.native_statement();
			this.state = 2045;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 173, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2040;
					this.lfp();
					this.state = 2041;
					this.native_statement();
					}
					}
				}
				this.state = 2047;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 173, this._ctx);
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
		this.enterRule(localctx, 272, MParser.RULE_native_statement);
		try {
			this.state = 2058;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				localctx = new JavaNativeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2048;
				this.match(MParser.JAVA);
				this.state = 2049;
				this.java_statement();
				}
				break;
			case 11:
				localctx = new CSharpNativeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2050;
				this.match(MParser.CSHARP);
				this.state = 2051;
				this.csharp_statement();
				}
				break;
			case 12:
				localctx = new Python2NativeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2052;
				this.match(MParser.PYTHON2);
				this.state = 2053;
				this.python_native_statement();
				}
				break;
			case 13:
				localctx = new Python3NativeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2054;
				this.match(MParser.PYTHON3);
				this.state = 2055;
				this.python_native_statement();
				}
				break;
			case 14:
				localctx = new JavascriptNativeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2056;
				this.match(MParser.JAVASCRIPT);
				this.state = 2057;
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
		this.enterRule(localctx, 274, MParser.RULE_python_native_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2060;
			this.python_statement();
			this.state = 2062;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 2061;
				this.match(MParser.SEMI);
				}
			}

			this.state = 2065;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===114) {
				{
				this.state = 2064;
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
		this.enterRule(localctx, 276, MParser.RULE_javascript_native_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2067;
			this.javascript_statement();
			this.state = 2069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 2068;
				this.match(MParser.SEMI);
				}
			}

			this.state = 2072;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===114) {
				{
				this.state = 2071;
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
		this.enterRule(localctx, 278, MParser.RULE_statement_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2074;
			this.statement();
			this.state = 2080;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2075;
					this.lfp();
					this.state = 2076;
					this.statement();
					}
					}
				}
				this.state = 2082;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 179, this._ctx);
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
		this.enterRule(localctx, 280, MParser.RULE_assertion_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2083;
			this.assertion();
			this.state = 2089;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 180, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2084;
					this.lfp();
					this.state = 2085;
					this.assertion();
					}
					}
				}
				this.state = 2091;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 180, this._ctx);
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
		this.enterRule(localctx, 282, MParser.RULE_switch_case_statement_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2092;
			this.switch_case_statement();
			this.state = 2098;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 181, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2093;
					this.lfp();
					this.state = 2094;
					this.switch_case_statement();
					}
					}
				}
				this.state = 2100;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 181, this._ctx);
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
		this.enterRule(localctx, 284, MParser.RULE_catch_statement_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2101;
			this.catch_statement();
			this.state = 2107;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2102;
					this.lfp();
					this.state = 2103;
					this.catch_statement();
					}
					}
				}
				this.state = 2109;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 182, this._ctx);
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
		this.enterRule(localctx, 286, MParser.RULE_literal_collection);
		try {
			this.state = 2124;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
			case 1:
				localctx = new LiteralRangeLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2110;
				this.match(MParser.LBRAK);
				this.state = 2111;
				(localctx as LiteralRangeLiteralContext)._low = this.atomic_literal();
				this.state = 2112;
				this.match(MParser.RANGE);
				this.state = 2113;
				(localctx as LiteralRangeLiteralContext)._high = this.atomic_literal();
				this.state = 2114;
				this.match(MParser.RBRAK);
				}
				break;
			case 2:
				localctx = new LiteralListLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2116;
				this.match(MParser.LBRAK);
				this.state = 2117;
				this.literal_list_literal();
				this.state = 2118;
				this.match(MParser.RBRAK);
				}
				break;
			case 3:
				localctx = new LiteralSetLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2120;
				this.match(MParser.LT);
				this.state = 2121;
				this.literal_list_literal();
				this.state = 2122;
				this.match(MParser.GT);
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
		this.enterRule(localctx, 288, MParser.RULE_atomic_literal);
		let _la: number;
		try {
			this.state = 2149;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
			case 1:
				localctx = new MinIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2126;
				this.match(MParser.MIN_INTEGER);
				}
				break;
			case 2:
				localctx = new MaxIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2127;
				this.match(MParser.MAX_INTEGER);
				}
				break;
			case 3:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===34) {
					{
					this.state = 2128;
					this.match(MParser.MINUS);
					}
				}

				this.state = 2131;
				this.match(MParser.INTEGER_LITERAL);
				}
				break;
			case 4:
				localctx = new HexadecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2132;
				this.match(MParser.HEXA_LITERAL);
				}
				break;
			case 5:
				localctx = new CharacterLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2133;
				this.match(MParser.CHAR_LITERAL);
				}
				break;
			case 6:
				localctx = new DateLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2134;
				this.match(MParser.DATE_LITERAL);
				}
				break;
			case 7:
				localctx = new TimeLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2135;
				this.match(MParser.TIME_LITERAL);
				}
				break;
			case 8:
				localctx = new TextLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 2136;
				this.match(MParser.TEXT_LITERAL);
				}
				break;
			case 9:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 2138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===34) {
					{
					this.state = 2137;
					this.match(MParser.MINUS);
					}
				}

				this.state = 2140;
				this.match(MParser.DECIMAL_LITERAL);
				}
				break;
			case 10:
				localctx = new DateTimeLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 2141;
				this.match(MParser.DATETIME_LITERAL);
				}
				break;
			case 11:
				localctx = new BooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 2142;
				this.match(MParser.BOOLEAN_LITERAL);
				}
				break;
			case 12:
				localctx = new PeriodLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 2143;
				this.match(MParser.PERIOD_LITERAL);
				}
				break;
			case 13:
				localctx = new VersionLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 2144;
				this.match(MParser.VERSION_LITERAL);
				}
				break;
			case 14:
				localctx = new UUIDLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 2145;
				this.match(MParser.UUID_LITERAL);
				}
				break;
			case 15:
				localctx = new SymbolLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 2146;
				this.symbol_identifier();
				}
				break;
			case 16:
				localctx = new TypeLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 2147;
				this.type_literal();
				}
				break;
			case 17:
				localctx = new NullLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 2148;
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
		this.enterRule(localctx, 290, MParser.RULE_literal_list_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2151;
			this.atomic_literal();
			this.state = 2156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 2152;
				this.match(MParser.COMMA);
				this.state = 2153;
				this.atomic_literal();
				}
				}
				this.state = 2158;
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
		this.enterRule(localctx, 292, MParser.RULE_this_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2159;
			_la = this._input.LA(1);
			if(!(_la===147 || _la===157)) {
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
		this.enterRule(localctx, 294, MParser.RULE_super_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===173) {
				{
				this.state = 2161;
				this.category_type();
				this.state = 2162;
				this.match(MParser.DOT);
				}
			}

			this.state = 2166;
			this.match(MParser.SUPER);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 296, MParser.RULE_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2168;
			this.match(MParser.LPAR);
			this.state = 2169;
			this.expression(0);
			this.state = 2170;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 298, MParser.RULE_literal_expression);
		try {
			this.state = 2174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 34:
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
			case 80:
			case 129:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2172;
				this.atomic_literal();
				}
				break;
			case 21:
			case 23:
			case 25:
			case 42:
			case 45:
			case 127:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2173;
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
		this.enterRule(localctx, 300, MParser.RULE_collection_literal);
		try {
			this.state = 2182;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2176;
				this.range_literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2177;
				this.list_literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2178;
				this.set_literal();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2179;
				this.dict_literal();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2180;
				this.document_literal();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2181;
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
		this.enterRule(localctx, 302, MParser.RULE_tuple_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 2184;
				this.match(MParser.MUTABLE);
				}
			}

			this.state = 2187;
			this.match(MParser.LPAR);
			this.state = 2189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 27271189) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 71301119) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 294913) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 1150369805) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 1047679) !== 0)) {
				{
				this.state = 2188;
				this.expression_tuple();
				}
			}

			this.state = 2191;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 304, MParser.RULE_dict_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===127) {
				{
				this.state = 2193;
				this.match(MParser.MUTABLE);
				}
			}

			this.state = 2204;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				{
				{
				this.state = 2196;
				this.match(MParser.LT);
				this.state = 2197;
				this.dict_entry_list();
				this.state = 2198;
				this.match(MParser.GT);
				}
				}
				break;
			case 2:
				{
				this.state = 2200;
				this.match(MParser.LTCOLONGT);
				}
				break;
			case 3:
				{
				{
				this.state = 2201;
				this.match(MParser.LT);
				this.state = 2202;
				this.match(MParser.COLON);
				this.state = 2203;
				this.match(MParser.GT);
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
		this.enterRule(localctx, 306, MParser.RULE_document_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2206;
			this.match(MParser.LCURL);
			this.state = 2208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 64512) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4292868093) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967285) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 298057663) !== 0)) {
				{
				this.state = 2207;
				this.doc_entry_list();
				}
			}

			this.state = 2210;
			this.match(MParser.RCURL);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 308, MParser.RULE_expression_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2212;
			this.expression(0);
			this.state = 2213;
			this.match(MParser.COMMA);
			this.state = 2222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 27271189) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 71301119) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 294913) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 1150369805) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 1047679) !== 0)) {
				{
				this.state = 2214;
				this.expression(0);
				this.state = 2219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===18) {
					{
					{
					this.state = 2215;
					this.match(MParser.COMMA);
					this.state = 2216;
					this.expression(0);
					}
					}
					this.state = 2221;
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
		this.enterRule(localctx, 310, MParser.RULE_doc_entry_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2224;
			this.doc_entry();
			this.state = 2229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 2225;
				this.match(MParser.COMMA);
				this.state = 2226;
				this.doc_entry();
				}
				}
				this.state = 2231;
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
		this.enterRule(localctx, 312, MParser.RULE_doc_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2232;
			localctx._key = this.doc_key();
			this.state = 2233;
			this.match(MParser.COLON);
			this.state = 2234;
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
		this.enterRule(localctx, 314, MParser.RULE_doc_key);
		try {
			this.state = 2238;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 54:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
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
			case 120:
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
			case 172:
			case 173:
			case 174:
				localctx = new DocKeyIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2236;
				(localctx as DocKeyIdentifierContext)._name = this.identifier_or_keyword();
				}
				break;
			case 178:
				localctx = new DocKeyTextContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2237;
				(localctx as DocKeyTextContext)._name = this.match(MParser.TEXT_LITERAL);
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
		this.enterRule(localctx, 316, MParser.RULE_dict_entry_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2240;
			this.dict_entry();
			this.state = 2245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 2241;
				this.match(MParser.COMMA);
				this.state = 2242;
				this.dict_entry();
				}
				}
				this.state = 2247;
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
		this.enterRule(localctx, 318, MParser.RULE_dict_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2248;
			localctx._key = this.dict_key();
			this.state = 2249;
			this.match(MParser.COLON);
			this.state = 2250;
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
		this.enterRule(localctx, 320, MParser.RULE_dict_key);
		try {
			this.state = 2254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 54:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
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
			case 120:
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
			case 172:
			case 173:
			case 174:
				localctx = new DictKeyIdentifierContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2252;
				(localctx as DictKeyIdentifierContext)._name = this.identifier_or_keyword();
				}
				break;
			case 178:
				localctx = new DictKeyTextContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2253;
				(localctx as DictKeyTextContext)._name = this.match(MParser.TEXT_LITERAL);
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
		this.enterRule(localctx, 322, MParser.RULE_slice_arguments);
		try {
			this.state = 2265;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				localctx = new SliceFirstAndLastContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2256;
				(localctx as SliceFirstAndLastContext)._first = this.expression(0);
				this.state = 2257;
				this.match(MParser.COLON);
				this.state = 2258;
				(localctx as SliceFirstAndLastContext)._last = this.expression(0);
				}
				break;
			case 2:
				localctx = new SliceFirstOnlyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2260;
				(localctx as SliceFirstOnlyContext)._first = this.expression(0);
				this.state = 2261;
				this.match(MParser.COLON);
				}
				break;
			case 3:
				localctx = new SliceLastOnlyContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2263;
				this.match(MParser.COLON);
				this.state = 2264;
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
		this.enterRule(localctx, 324, MParser.RULE_assign_variable_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2267;
			this.variable_identifier();
			this.state = 2268;
			this.assign();
			this.state = 2269;
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
		let _startState: number = 326;
		this.enterRecursionRule(localctx, 326, MParser.RULE_assignable_instance, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new RootInstanceContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2272;
			this.variable_identifier();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2278;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new ChildInstanceContext(this, new Assignable_instanceContext(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_assignable_instance);
					this.state = 2274;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2275;
					this.child_instance();
					}
					}
				}
				this.state = 2280;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
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
		this.enterRule(localctx, 328, MParser.RULE_is_expression);
		try {
			this.state = 2285;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				localctx = new IsATypeExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2281;
				if (!(this.willBeAOrAn())) {
					throw this.createFailedPredicateException("$parser.willBeAOrAn()");
				}
				this.state = 2282;
				this.match(MParser.VARIABLE_IDENTIFIER);
				this.state = 2283;
				this.category_or_any_type();
				}
				break;
			case 2:
				localctx = new IsOtherExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2284;
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
		this.enterRule(localctx, 330, MParser.RULE_metadata);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2287;
			if (!(this.willBeText("metadata"))) {
				throw this.createFailedPredicateException("$parser.willBeText(\"metadata\")");
			}
			this.state = 2288;
			this.match(MParser.VARIABLE_IDENTIFIER);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 332, MParser.RULE_arrow_expression);
		try {
			this.state = 2298;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				localctx = new ArrowExpressionBodyContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2290;
				this.arrow_prefix();
				this.state = 2291;
				this.expression(0);
				}
				break;
			case 2:
				localctx = new ArrowStatementsBodyContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2293;
				this.arrow_prefix();
				this.state = 2294;
				this.match(MParser.LCURL);
				this.state = 2295;
				this.statement_list();
				this.state = 2296;
				this.match(MParser.RCURL);
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
		this.enterRule(localctx, 334, MParser.RULE_arrow_prefix);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2300;
			this.arrow_args();
			this.state = 2301;
			localctx._s1 = this.ws_plus();
			this.state = 2302;
			this.match(MParser.EGT);
			this.state = 2303;
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
		this.enterRule(localctx, 336, MParser.RULE_arrow_args);
		let _la: number;
		try {
			this.state = 2311;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 91:
			case 143:
			case 174:
				localctx = new ArrowSingleArgContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2305;
				this.variable_identifier();
				}
				break;
			case 21:
				localctx = new ArrowListArgContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2306;
				this.match(MParser.LPAR);
				this.state = 2308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===91 || _la===143 || _la===174) {
					{
					this.state = 2307;
					this.variable_identifier_list();
					}
				}

				this.state = 2310;
				this.match(MParser.RPAR);
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
		this.enterRule(localctx, 338, MParser.RULE_sorted_key);
		try {
			this.state = 2315;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2313;
				this.instance_expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2314;
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
		this.enterRule(localctx, 340, MParser.RULE_read_blob_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2317;
			this.match(MParser.READ);
			this.state = 2318;
			this.match(MParser.BLOB);
			this.state = 2319;
			this.match(MParser.FROM);
			this.state = 2320;
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
		this.enterRule(localctx, 342, MParser.RULE_read_all_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2322;
			this.match(MParser.READ);
			this.state = 2323;
			this.match(MParser.ALL);
			this.state = 2324;
			this.match(MParser.FROM);
			this.state = 2325;
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
		this.enterRule(localctx, 344, MParser.RULE_read_one_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2327;
			this.match(MParser.READ);
			this.state = 2328;
			this.match(MParser.ONE);
			this.state = 2329;
			this.match(MParser.FROM);
			this.state = 2330;
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
		this.enterRule(localctx, 346, MParser.RULE_order_by_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2332;
			this.order_by();
			this.state = 2337;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 209, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2333;
					this.match(MParser.COMMA);
					this.state = 2334;
					this.order_by();
					}
					}
				}
				this.state = 2339;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 209, this._ctx);
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
		this.enterRule(localctx, 348, MParser.RULE_order_by);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2340;
			this.variable_identifier();
			this.state = 2345;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 210, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2341;
					this.match(MParser.DOT);
					this.state = 2342;
					this.variable_identifier();
					}
					}
				}
				this.state = 2347;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 210, this._ctx);
			}
			this.state = 2349;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 2348;
				_la = this._input.LA(1);
				if(!(_la===82 || _la===98)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
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
	public include_list(): Include_listContext {
		let localctx: Include_listContext = new Include_listContext(this, this._ctx, this.state);
		this.enterRule(localctx, 350, MParser.RULE_include_list);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2351;
			this.variable_identifier();
			this.state = 2356;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2352;
					this.match(MParser.COMMA);
					this.state = 2353;
					this.variable_identifier();
					}
					}
				}
				this.state = 2358;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
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
		this.enterRule(localctx, 352, MParser.RULE_operator);
		try {
			this.state = 2365;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 33:
				localctx = new OperatorPlusContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2359;
				this.match(MParser.PLUS);
				}
				break;
			case 34:
				localctx = new OperatorMinusContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2360;
				this.match(MParser.MINUS);
				}
				break;
			case 35:
				localctx = new OperatorMultiplyContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2361;
				this.multiply();
				}
				break;
			case 36:
				localctx = new OperatorDivideContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2362;
				this.divide();
				}
				break;
			case 37:
				localctx = new OperatorIDivideContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2363;
				this.idivide();
				}
				break;
			case 38:
			case 126:
				localctx = new OperatorModuloContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2364;
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
		this.enterRule(localctx, 354, MParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2367;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 64512) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4292868093) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967285) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 262079) !== 0))) {
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
		this.enterRule(localctx, 356, MParser.RULE_new_token);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2369;
			localctx._i1 = this.match(MParser.VARIABLE_IDENTIFIER);
			this.state = 2370;
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
		this.enterRule(localctx, 358, MParser.RULE_key_token);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2372;
			localctx._i1 = this.match(MParser.VARIABLE_IDENTIFIER);
			this.state = 2373;
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
		this.enterRule(localctx, 360, MParser.RULE_module_token);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2375;
			localctx._i1 = this.match(MParser.VARIABLE_IDENTIFIER);
			this.state = 2376;
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
		this.enterRule(localctx, 362, MParser.RULE_value_token);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2378;
			localctx._i1 = this.match(MParser.VARIABLE_IDENTIFIER);
			this.state = 2379;
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
		this.enterRule(localctx, 364, MParser.RULE_symbols_token);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2381;
			localctx._i1 = this.match(MParser.VARIABLE_IDENTIFIER);
			this.state = 2382;
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
		this.enterRule(localctx, 366, MParser.RULE_assign);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2384;
			this.match(MParser.EQ);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 368, MParser.RULE_multiply);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2386;
			this.match(MParser.STAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 370, MParser.RULE_divide);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2388;
			this.match(MParser.SLASH);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 372, MParser.RULE_idivide);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2390;
			this.match(MParser.BSLASH);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 374, MParser.RULE_modulo);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2392;
			_la = this._input.LA(1);
			if(!(_la===38 || _la===126)) {
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
	public javascript_statement(): Javascript_statementContext {
		let localctx: Javascript_statementContext = new Javascript_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 376, MParser.RULE_javascript_statement);
		try {
			this.state = 2401;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 214, this._ctx) ) {
			case 1:
				localctx = new JavascriptReturnStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2394;
				this.match(MParser.RETURN);
				this.state = 2395;
				(localctx as JavascriptReturnStatementContext)._exp = this.javascript_expression(0);
				this.state = 2396;
				this.match(MParser.SEMI);
				}
				break;
			case 2:
				localctx = new JavascriptStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2398;
				(localctx as JavascriptStatementContext)._exp = this.javascript_expression(0);
				this.state = 2399;
				this.match(MParser.SEMI);
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
		let _startState: number = 378;
		this.enterRecursionRule(localctx, 378, MParser.RULE_javascript_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavascriptPrimaryExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2404;
			(localctx as JavascriptPrimaryExpressionContext)._exp = this.javascript_primary_expression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2410;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 215, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_javascript_expression);
					this.state = 2406;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2407;
					(localctx as JavascriptSelectorExpressionContext)._child = this.javascript_selector_expression();
					}
					}
				}
				this.state = 2412;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 215, this._ctx);
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
		this.enterRule(localctx, 380, MParser.RULE_javascript_primary_expression);
		try {
			this.state = 2420;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2413;
				this.javascript_this_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2414;
				this.javascript_new_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2415;
				this.javascript_parenthesis_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2416;
				this.javascript_identifier_expression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2417;
				this.javascript_literal_expression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 2418;
				this.javascript_method_expression();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 2419;
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
		this.enterRule(localctx, 382, MParser.RULE_javascript_this_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2422;
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
		this.enterRule(localctx, 384, MParser.RULE_javascript_new_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2424;
			this.new_token();
			this.state = 2425;
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
		this.enterRule(localctx, 386, MParser.RULE_javascript_selector_expression);
		try {
			this.state = 2432;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
			case 1:
				localctx = new JavascriptMethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2427;
				this.match(MParser.DOT);
				this.state = 2428;
				(localctx as JavascriptMethodExpressionContext)._method = this.javascript_method_expression();
				}
				break;
			case 2:
				localctx = new JavascriptMemberExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2429;
				this.match(MParser.DOT);
				this.state = 2430;
				(localctx as JavascriptMemberExpressionContext)._name = this.javascript_identifier();
				}
				break;
			case 3:
				localctx = new JavascriptItemExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2431;
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
		this.enterRule(localctx, 388, MParser.RULE_javascript_method_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2434;
			localctx._name = this.javascript_identifier();
			this.state = 2435;
			this.match(MParser.LPAR);
			this.state = 2437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 10550272) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4292868093) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967285) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 2513436607) !== 0) || _la===183) {
				{
				this.state = 2436;
				localctx._args = this.javascript_arguments(0);
				}
			}

			this.state = 2439;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		let _startState: number = 390;
		this.enterRecursionRule(localctx, 390, MParser.RULE_javascript_arguments, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavascriptArgumentListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2442;
			(localctx as JavascriptArgumentListContext)._item = this.javascript_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2449;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_javascript_arguments);
					this.state = 2444;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2445;
					this.match(MParser.COMMA);
					this.state = 2446;
					(localctx as JavascriptArgumentListItemContext)._item = this.javascript_expression(0);
					}
					}
				}
				this.state = 2451;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
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
		this.enterRule(localctx, 392, MParser.RULE_javascript_item_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2452;
			this.match(MParser.LBRAK);
			this.state = 2453;
			localctx._exp = this.javascript_expression(0);
			this.state = 2454;
			this.match(MParser.RBRAK);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 394, MParser.RULE_javascript_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2456;
			this.match(MParser.LPAR);
			this.state = 2457;
			localctx._exp = this.javascript_expression(0);
			this.state = 2458;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 396, MParser.RULE_javascript_identifier_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2460;
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
		this.enterRule(localctx, 398, MParser.RULE_javascript_literal_expression);
		try {
			this.state = 2467;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 181:
				localctx = new JavascriptIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2462;
				(localctx as JavascriptIntegerLiteralContext)._t = this.match(MParser.INTEGER_LITERAL);
				}
				break;
			case 183:
				localctx = new JavascriptDecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2463;
				(localctx as JavascriptDecimalLiteralContext)._t = this.match(MParser.DECIMAL_LITERAL);
				}
				break;
			case 178:
				localctx = new JavascriptTextLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2464;
				(localctx as JavascriptTextLiteralContext)._t = this.match(MParser.TEXT_LITERAL);
				}
				break;
			case 168:
				localctx = new JavascriptBooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2465;
				(localctx as JavascriptBooleanLiteralContext)._t = this.match(MParser.BOOLEAN_LITERAL);
				}
				break;
			case 169:
				localctx = new JavascriptCharacterLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2466;
				(localctx as JavascriptCharacterLiteralContext)._t = this.match(MParser.CHAR_LITERAL);
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
		this.enterRule(localctx, 400, MParser.RULE_javascript_identifier);
		try {
			this.state = 2474;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 174:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2469;
				this.match(MParser.VARIABLE_IDENTIFIER);
				}
				break;
			case 172:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2470;
				this.match(MParser.SYMBOL_IDENTIFIER);
				}
				break;
			case 176:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2471;
				this.match(MParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 173:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2472;
				this.match(MParser.TYPE_IDENTIFIER);
				}
				break;
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 54:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
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
			case 120:
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
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2473;
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
		this.enterRule(localctx, 402, MParser.RULE_python_statement);
		try {
			this.state = 2479;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 222, this._ctx) ) {
			case 1:
				localctx = new PythonReturnStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2476;
				this.match(MParser.RETURN);
				this.state = 2477;
				(localctx as PythonReturnStatementContext)._exp = this.python_expression(0);
				}
				break;
			case 2:
				localctx = new PythonStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2478;
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
		let _startState: number = 404;
		this.enterRecursionRule(localctx, 404, MParser.RULE_python_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new PythonPrimaryExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2482;
			(localctx as PythonPrimaryExpressionContext)._exp = this.python_primary_expression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2488;
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
					localctx = new PythonSelectorExpressionContext(this, new Python_expressionContext(this, _parentctx, _parentState));
					(localctx as PythonSelectorExpressionContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_python_expression);
					this.state = 2484;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2485;
					(localctx as PythonSelectorExpressionContext)._child = this.python_selector_expression();
					}
					}
				}
				this.state = 2490;
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
	public python_primary_expression(): Python_primary_expressionContext {
		let localctx: Python_primary_expressionContext = new Python_primary_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 406, MParser.RULE_python_primary_expression);
		try {
			this.state = 2496;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 224, this._ctx) ) {
			case 1:
				localctx = new PythonSelfExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2491;
				(localctx as PythonSelfExpressionContext)._exp = this.python_self_expression();
				}
				break;
			case 2:
				localctx = new PythonParenthesisExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2492;
				(localctx as PythonParenthesisExpressionContext)._exp = this.python_parenthesis_expression();
				}
				break;
			case 3:
				localctx = new PythonIdentifierExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2493;
				(localctx as PythonIdentifierExpressionContext)._exp = this.python_identifier_expression(0);
				}
				break;
			case 4:
				localctx = new PythonLiteralExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2494;
				(localctx as PythonLiteralExpressionContext)._exp = this.python_literal_expression();
				}
				break;
			case 5:
				localctx = new PythonGlobalMethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2495;
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
		this.enterRule(localctx, 408, MParser.RULE_python_self_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2498;
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
		this.enterRule(localctx, 410, MParser.RULE_python_selector_expression);
		try {
			this.state = 2506;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				localctx = new PythonMethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2500;
				this.match(MParser.DOT);
				this.state = 2501;
				(localctx as PythonMethodExpressionContext)._exp = this.python_method_expression();
				}
				break;
			case 23:
				localctx = new PythonItemExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2502;
				this.match(MParser.LBRAK);
				this.state = 2503;
				(localctx as PythonItemExpressionContext)._exp = this.python_expression(0);
				this.state = 2504;
				this.match(MParser.RBRAK);
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
		this.enterRule(localctx, 412, MParser.RULE_python_method_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2508;
			localctx._name = this.python_identifier();
			this.state = 2509;
			this.match(MParser.LPAR);
			this.state = 2511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2161664) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4292868093) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967285) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 2513436607) !== 0) || _la===183) {
				{
				this.state = 2510;
				localctx._args = this.python_argument_list();
				}
			}

			this.state = 2513;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 414, MParser.RULE_python_argument_list);
		try {
			this.state = 2521;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 227, this._ctx) ) {
			case 1:
				localctx = new PythonOrdinalOnlyArgumentListContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2515;
				(localctx as PythonOrdinalOnlyArgumentListContext)._ordinal = this.python_ordinal_argument_list(0);
				}
				break;
			case 2:
				localctx = new PythonNamedOnlyArgumentListContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2516;
				(localctx as PythonNamedOnlyArgumentListContext)._named = this.python_named_argument_list(0);
				}
				break;
			case 3:
				localctx = new PythonArgumentListContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2517;
				(localctx as PythonArgumentListContext)._ordinal = this.python_ordinal_argument_list(0);
				this.state = 2518;
				this.match(MParser.COMMA);
				this.state = 2519;
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
		let _startState: number = 416;
		this.enterRecursionRule(localctx, 416, MParser.RULE_python_ordinal_argument_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new PythonOrdinalArgumentListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2524;
			(localctx as PythonOrdinalArgumentListContext)._item = this.python_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2531;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 228, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_python_ordinal_argument_list);
					this.state = 2526;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2527;
					this.match(MParser.COMMA);
					this.state = 2528;
					(localctx as PythonOrdinalArgumentListItemContext)._item = this.python_expression(0);
					}
					}
				}
				this.state = 2533;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 228, this._ctx);
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
		let _startState: number = 418;
		this.enterRecursionRule(localctx, 418, MParser.RULE_python_named_argument_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new PythonNamedArgumentListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2535;
			(localctx as PythonNamedArgumentListContext)._name = this.python_identifier();
			this.state = 2536;
			this.match(MParser.EQ);
			this.state = 2537;
			(localctx as PythonNamedArgumentListContext)._exp = this.python_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2547;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 229, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_python_named_argument_list);
					this.state = 2539;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2540;
					this.match(MParser.COMMA);
					this.state = 2541;
					(localctx as PythonNamedArgumentListItemContext)._name = this.python_identifier();
					this.state = 2542;
					this.match(MParser.EQ);
					this.state = 2543;
					(localctx as PythonNamedArgumentListItemContext)._exp = this.python_expression(0);
					}
					}
				}
				this.state = 2549;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 229, this._ctx);
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
		this.enterRule(localctx, 420, MParser.RULE_python_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2550;
			this.match(MParser.LPAR);
			this.state = 2551;
			localctx._exp = this.python_expression(0);
			this.state = 2552;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		let _startState: number = 422;
		this.enterRecursionRule(localctx, 422, MParser.RULE_python_identifier_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2557;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				{
				localctx = new PythonPromptoIdentifierContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 2555;
				this.match(MParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 2:
				{
				localctx = new PythonIdentifierContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2556;
				(localctx as PythonIdentifierContext)._name = this.python_identifier();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2564;
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
					localctx = new PythonChildIdentifierContext(this, new Python_identifier_expressionContext(this, _parentctx, _parentState));
					(localctx as PythonChildIdentifierContext)._parent = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_python_identifier_expression);
					this.state = 2559;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2560;
					this.match(MParser.DOT);
					this.state = 2561;
					(localctx as PythonChildIdentifierContext)._name = this.python_identifier();
					}
					}
				}
				this.state = 2566;
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
	public python_literal_expression(): Python_literal_expressionContext {
		let localctx: Python_literal_expressionContext = new Python_literal_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 424, MParser.RULE_python_literal_expression);
		try {
			this.state = 2572;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 181:
				localctx = new PythonIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2567;
				(localctx as PythonIntegerLiteralContext)._t = this.match(MParser.INTEGER_LITERAL);
				}
				break;
			case 183:
				localctx = new PythonDecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2568;
				(localctx as PythonDecimalLiteralContext)._t = this.match(MParser.DECIMAL_LITERAL);
				}
				break;
			case 178:
				localctx = new PythonTextLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2569;
				(localctx as PythonTextLiteralContext)._t = this.match(MParser.TEXT_LITERAL);
				}
				break;
			case 168:
				localctx = new PythonBooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2570;
				(localctx as PythonBooleanLiteralContext)._t = this.match(MParser.BOOLEAN_LITERAL);
				}
				break;
			case 169:
				localctx = new PythonCharacterLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2571;
				(localctx as PythonCharacterLiteralContext)._t = this.match(MParser.CHAR_LITERAL);
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
		this.enterRule(localctx, 426, MParser.RULE_python_identifier);
		try {
			this.state = 2579;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 174:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2574;
				this.match(MParser.VARIABLE_IDENTIFIER);
				}
				break;
			case 172:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2575;
				this.match(MParser.SYMBOL_IDENTIFIER);
				}
				break;
			case 176:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2576;
				this.match(MParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 173:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2577;
				this.match(MParser.TYPE_IDENTIFIER);
				}
				break;
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 54:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
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
			case 120:
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
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2578;
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
		this.enterRule(localctx, 428, MParser.RULE_java_statement);
		try {
			this.state = 2588;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
			case 1:
				localctx = new JavaReturnStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2581;
				this.match(MParser.RETURN);
				this.state = 2582;
				(localctx as JavaReturnStatementContext)._exp = this.java_expression(0);
				this.state = 2583;
				this.match(MParser.SEMI);
				}
				break;
			case 2:
				localctx = new JavaStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2585;
				(localctx as JavaStatementContext)._exp = this.java_expression(0);
				this.state = 2586;
				this.match(MParser.SEMI);
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
		let _startState: number = 430;
		this.enterRecursionRule(localctx, 430, MParser.RULE_java_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavaPrimaryExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2591;
			(localctx as JavaPrimaryExpressionContext)._exp = this.java_primary_expression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2597;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 235, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_java_expression);
					this.state = 2593;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2594;
					(localctx as JavaSelectorExpressionContext)._child = this.java_selector_expression();
					}
					}
				}
				this.state = 2599;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 235, this._ctx);
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
		this.enterRule(localctx, 432, MParser.RULE_java_primary_expression);
		try {
			this.state = 2605;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2600;
				this.java_this_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2601;
				this.java_new_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2602;
				this.java_parenthesis_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2603;
				this.java_identifier_expression(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2604;
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
		this.enterRule(localctx, 434, MParser.RULE_java_this_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2607;
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
		this.enterRule(localctx, 436, MParser.RULE_java_new_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2609;
			this.new_token();
			this.state = 2610;
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
		this.enterRule(localctx, 438, MParser.RULE_java_selector_expression);
		try {
			this.state = 2615;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				localctx = new JavaMethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2612;
				this.match(MParser.DOT);
				this.state = 2613;
				(localctx as JavaMethodExpressionContext)._exp = this.java_method_expression();
				}
				break;
			case 23:
				localctx = new JavaItemExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2614;
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
		this.enterRule(localctx, 440, MParser.RULE_java_method_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2617;
			localctx._name = this.java_identifier();
			this.state = 2618;
			this.match(MParser.LPAR);
			this.state = 2620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2161664) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4292868093) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967285) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 2513436607) !== 0) || _la===183) {
				{
				this.state = 2619;
				localctx._args = this.java_arguments(0);
				}
			}

			this.state = 2622;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		let _startState: number = 442;
		this.enterRecursionRule(localctx, 442, MParser.RULE_java_arguments, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavaArgumentListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2625;
			(localctx as JavaArgumentListContext)._item = this.java_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2632;
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
					localctx = new JavaArgumentListItemContext(this, new Java_argumentsContext(this, _parentctx, _parentState));
					(localctx as JavaArgumentListItemContext)._items = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_java_arguments);
					this.state = 2627;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2628;
					this.match(MParser.COMMA);
					this.state = 2629;
					(localctx as JavaArgumentListItemContext)._item = this.java_expression(0);
					}
					}
				}
				this.state = 2634;
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
	public java_item_expression(): Java_item_expressionContext {
		let localctx: Java_item_expressionContext = new Java_item_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 444, MParser.RULE_java_item_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2635;
			this.match(MParser.LBRAK);
			this.state = 2636;
			localctx._exp = this.java_expression(0);
			this.state = 2637;
			this.match(MParser.RBRAK);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 446, MParser.RULE_java_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2639;
			this.match(MParser.LPAR);
			this.state = 2640;
			localctx._exp = this.java_expression(0);
			this.state = 2641;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		let _startState: number = 448;
		this.enterRecursionRule(localctx, 448, MParser.RULE_java_identifier_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavaIdentifierContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2644;
			(localctx as JavaIdentifierContext)._name = this.java_identifier();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2651;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 240, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_java_identifier_expression);
					this.state = 2646;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2647;
					this.match(MParser.DOT);
					this.state = 2648;
					(localctx as JavaChildIdentifierContext)._name = this.java_identifier();
					}
					}
				}
				this.state = 2653;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 240, this._ctx);
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
		let _startState: number = 450;
		this.enterRecursionRule(localctx, 450, MParser.RULE_java_class_identifier_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new JavaClassIdentifierContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2655;
			(localctx as JavaClassIdentifierContext)._klass = this.java_identifier_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2661;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_java_class_identifier_expression);
					this.state = 2657;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2658;
					(localctx as JavaChildClassIdentifierContext)._name = this.match(MParser.DOLLAR_IDENTIFIER);
					}
					}
				}
				this.state = 2663;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 241, this._ctx);
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
		this.enterRule(localctx, 452, MParser.RULE_java_literal_expression);
		try {
			this.state = 2669;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 181:
				localctx = new JavaIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2664;
				(localctx as JavaIntegerLiteralContext)._t = this.match(MParser.INTEGER_LITERAL);
				}
				break;
			case 183:
				localctx = new JavaDecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2665;
				(localctx as JavaDecimalLiteralContext)._t = this.match(MParser.DECIMAL_LITERAL);
				}
				break;
			case 178:
				localctx = new JavaTextLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2666;
				(localctx as JavaTextLiteralContext)._t = this.match(MParser.TEXT_LITERAL);
				}
				break;
			case 168:
				localctx = new JavaBooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2667;
				(localctx as JavaBooleanLiteralContext)._t = this.match(MParser.BOOLEAN_LITERAL);
				}
				break;
			case 169:
				localctx = new JavaCharacterLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2668;
				(localctx as JavaCharacterLiteralContext)._t = this.match(MParser.CHAR_LITERAL);
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
		this.enterRule(localctx, 454, MParser.RULE_java_identifier);
		try {
			this.state = 2676;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 174:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2671;
				this.match(MParser.VARIABLE_IDENTIFIER);
				}
				break;
			case 172:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2672;
				this.match(MParser.SYMBOL_IDENTIFIER);
				}
				break;
			case 176:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2673;
				this.match(MParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 173:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2674;
				this.match(MParser.TYPE_IDENTIFIER);
				}
				break;
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 54:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
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
			case 120:
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
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2675;
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
		this.enterRule(localctx, 456, MParser.RULE_csharp_statement);
		try {
			this.state = 2685;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				localctx = new CSharpReturnStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2678;
				this.match(MParser.RETURN);
				this.state = 2679;
				(localctx as CSharpReturnStatementContext)._exp = this.csharp_expression(0);
				this.state = 2680;
				this.match(MParser.SEMI);
				}
				break;
			case 2:
				localctx = new CSharpStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2682;
				(localctx as CSharpStatementContext)._exp = this.csharp_expression(0);
				this.state = 2683;
				this.match(MParser.SEMI);
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
		let _startState: number = 458;
		this.enterRecursionRule(localctx, 458, MParser.RULE_csharp_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new CSharpPrimaryExpressionContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2688;
			(localctx as CSharpPrimaryExpressionContext)._exp = this.csharp_primary_expression();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2694;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 245, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_csharp_expression);
					this.state = 2690;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2691;
					(localctx as CSharpSelectorExpressionContext)._child = this.csharp_selector_expression();
					}
					}
				}
				this.state = 2696;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 245, this._ctx);
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
		this.enterRule(localctx, 460, MParser.RULE_csharp_primary_expression);
		try {
			this.state = 2702;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 246, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2697;
				this.csharp_this_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2698;
				this.csharp_new_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2699;
				this.csharp_parenthesis_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2700;
				this.csharp_identifier_expression(0);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2701;
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
		this.enterRule(localctx, 462, MParser.RULE_csharp_this_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2704;
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
		this.enterRule(localctx, 464, MParser.RULE_csharp_new_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2706;
			this.new_token();
			this.state = 2707;
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
		this.enterRule(localctx, 466, MParser.RULE_csharp_selector_expression);
		try {
			this.state = 2712;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				localctx = new CSharpMethodExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2709;
				this.match(MParser.DOT);
				this.state = 2710;
				(localctx as CSharpMethodExpressionContext)._exp = this.csharp_method_expression();
				}
				break;
			case 23:
				localctx = new CSharpItemExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2711;
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
		this.enterRule(localctx, 468, MParser.RULE_csharp_method_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2714;
			localctx._name = this.csharp_identifier();
			this.state = 2715;
			this.match(MParser.LPAR);
			this.state = 2717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2161664) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4292868093) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967285) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 2513436607) !== 0) || _la===183) {
				{
				this.state = 2716;
				localctx._args = this.csharp_arguments(0);
				}
			}

			this.state = 2719;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		let _startState: number = 470;
		this.enterRecursionRule(localctx, 470, MParser.RULE_csharp_arguments, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new CSharpArgumentListContext(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 2722;
			(localctx as CSharpArgumentListContext)._item = this.csharp_expression(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2729;
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
					localctx = new CSharpArgumentListItemContext(this, new Csharp_argumentsContext(this, _parentctx, _parentState));
					(localctx as CSharpArgumentListItemContext)._items = _prevctx;
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_csharp_arguments);
					this.state = 2724;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2725;
					this.match(MParser.COMMA);
					this.state = 2726;
					(localctx as CSharpArgumentListItemContext)._item = this.csharp_expression(0);
					}
					}
				}
				this.state = 2731;
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
	public csharp_item_expression(): Csharp_item_expressionContext {
		let localctx: Csharp_item_expressionContext = new Csharp_item_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 472, MParser.RULE_csharp_item_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2732;
			this.match(MParser.LBRAK);
			this.state = 2733;
			localctx._exp = this.csharp_expression(0);
			this.state = 2734;
			this.match(MParser.RBRAK);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 474, MParser.RULE_csharp_parenthesis_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2736;
			this.match(MParser.LPAR);
			this.state = 2737;
			localctx._exp = this.csharp_expression(0);
			this.state = 2738;
			this.match(MParser.RPAR);
			}
		}
		catch (re) {
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
		let _startState: number = 476;
		this.enterRecursionRule(localctx, 476, MParser.RULE_csharp_identifier_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2743;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 250, this._ctx) ) {
			case 1:
				{
				localctx = new CSharpPromptoIdentifierContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 2741;
				this.match(MParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 2:
				{
				localctx = new CSharpIdentifierContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 2742;
				(localctx as CSharpIdentifierContext)._name = this.csharp_identifier();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2750;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
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
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_csharp_identifier_expression);
					this.state = 2745;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2746;
					this.match(MParser.DOT);
					this.state = 2747;
					(localctx as CSharpChildIdentifierContext)._name = this.csharp_identifier();
					}
					}
				}
				this.state = 2752;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 251, this._ctx);
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
		this.enterRule(localctx, 478, MParser.RULE_csharp_literal_expression);
		try {
			this.state = 2758;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 181:
				localctx = new CSharpIntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2753;
				this.match(MParser.INTEGER_LITERAL);
				}
				break;
			case 183:
				localctx = new CSharpDecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2754;
				this.match(MParser.DECIMAL_LITERAL);
				}
				break;
			case 178:
				localctx = new CSharpTextLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2755;
				this.match(MParser.TEXT_LITERAL);
				}
				break;
			case 168:
				localctx = new CSharpBooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2756;
				this.match(MParser.BOOLEAN_LITERAL);
				}
				break;
			case 169:
				localctx = new CSharpCharacterLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2757;
				this.match(MParser.CHAR_LITERAL);
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
		this.enterRule(localctx, 480, MParser.RULE_csharp_identifier);
		try {
			this.state = 2765;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 174:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2760;
				this.match(MParser.VARIABLE_IDENTIFIER);
				}
				break;
			case 172:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2761;
				this.match(MParser.SYMBOL_IDENTIFIER);
				}
				break;
			case 176:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2762;
				this.match(MParser.DOLLAR_IDENTIFIER);
				}
				break;
			case 173:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 2763;
				this.match(MParser.TYPE_IDENTIFIER);
				}
				break;
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 54:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
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
			case 120:
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
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 2764;
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
		this.enterRule(localctx, 482, MParser.RULE_jsx_expression);
		try {
			this.state = 2769;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2767;
				this.jsx_element();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2768;
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
		this.enterRule(localctx, 484, MParser.RULE_jsx_element);
		try {
			this.state = 2778;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 256, this._ctx) ) {
			case 1:
				localctx = new JsxSelfClosingContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2771;
				(localctx as JsxSelfClosingContext)._jsx = this.jsx_self_closing();
				}
				break;
			case 2:
				localctx = new JsxElementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2772;
				(localctx as JsxElementContext)._opening = this.jsx_opening();
				this.state = 2774;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
				case 1:
					{
					this.state = 2773;
					(localctx as JsxElementContext)._children_ = this.jsx_children();
					}
					break;
				}
				this.state = 2776;
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
		this.enterRule(localctx, 486, MParser.RULE_jsx_fragment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2780;
			this.jsx_fragment_start();
			this.state = 2781;
			this.ws_plus();
			this.state = 2783;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				{
				this.state = 2782;
				localctx._children_ = this.jsx_children();
				}
				break;
			}
			this.state = 2785;
			this.ws_plus();
			this.state = 2786;
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
		this.enterRule(localctx, 488, MParser.RULE_jsx_fragment_start);
		try {
			this.state = 2791;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 42:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2788;
				this.match(MParser.LT);
				this.state = 2789;
				this.match(MParser.GT);
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2790;
				this.match(MParser.LTGT);
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
		this.enterRule(localctx, 490, MParser.RULE_jsx_fragment_end);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2793;
			this.match(MParser.LT);
			this.state = 2794;
			this.match(MParser.SLASH);
			this.state = 2795;
			this.match(MParser.GT);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 492, MParser.RULE_jsx_self_closing);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2797;
			this.match(MParser.LT);
			this.state = 2798;
			localctx._name = this.jsx_element_name();
			this.state = 2799;
			this.ws_plus();
			this.state = 2803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 64512) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4292868093) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967285) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 29622207) !== 0)) {
				{
				{
				this.state = 2800;
				localctx._attributes = this.jsx_attribute();
				}
				}
				this.state = 2805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2806;
			this.match(MParser.SLASH);
			this.state = 2807;
			this.match(MParser.GT);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 494, MParser.RULE_jsx_opening);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2809;
			this.match(MParser.LT);
			this.state = 2810;
			localctx._name = this.jsx_element_name();
			this.state = 2811;
			this.ws_plus();
			this.state = 2815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 64512) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4292868093) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967285) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 29622207) !== 0)) {
				{
				{
				this.state = 2812;
				localctx._attributes = this.jsx_attribute();
				}
				}
				this.state = 2817;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2818;
			this.match(MParser.GT);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 496, MParser.RULE_jsx_closing);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2820;
			this.match(MParser.LT);
			this.state = 2821;
			this.match(MParser.SLASH);
			this.state = 2822;
			localctx._name = this.jsx_element_name();
			this.state = 2823;
			this.match(MParser.GT);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 498, MParser.RULE_jsx_element_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2825;
			this.jsx_identifier();
			this.state = 2830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===20) {
				{
				{
				this.state = 2826;
				this.match(MParser.DOT);
				this.state = 2827;
				this.jsx_identifier();
				}
				}
				this.state = 2832;
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
		this.enterRule(localctx, 500, MParser.RULE_jsx_identifier);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2833;
			this.identifier_or_keyword();
			this.state = 2837;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 262, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2834;
					this.nospace_hyphen_identifier_or_keyword();
					}
					}
				}
				this.state = 2839;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 262, this._ctx);
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
		this.enterRule(localctx, 502, MParser.RULE_jsx_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2840;
			localctx._name = this.jsx_identifier();
			this.state = 2843;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
				{
				this.state = 2841;
				this.match(MParser.EQ);
				this.state = 2842;
				localctx._value = this.jsx_attribute_value();
				}
			}

			this.state = 2845;
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
		this.enterRule(localctx, 504, MParser.RULE_jsx_attribute_value);
		let _la: number;
		try {
			this.state = 2853;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 178:
				localctx = new JsxLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2847;
				this.match(MParser.TEXT_LITERAL);
				}
				break;
			case 25:
				localctx = new JsxValueContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2848;
				this.match(MParser.LCURL);
				this.state = 2850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 27271189) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 71301119) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 294913) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 1150369805) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 1047679) !== 0)) {
					{
					this.state = 2849;
					(localctx as JsxValueContext)._exp = this.expression(0);
					}
				}

				this.state = 2852;
				this.match(MParser.RCURL);
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
		this.enterRule(localctx, 506, MParser.RULE_jsx_children);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2856;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2855;
					this.jsx_child();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2858;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 266, this._ctx);
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
		this.enterRule(localctx, 508, MParser.RULE_jsx_child);
		let _la: number;
		try {
			this.state = 2867;
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
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
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
			case 41:
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
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
				localctx = new JsxTextContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2860;
				(localctx as JsxTextContext)._text = this.jsx_text();
				}
				break;
			case 42:
				localctx = new JsxChildContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2861;
				(localctx as JsxChildContext)._jsx = this.jsx_element();
				}
				break;
			case 25:
				localctx = new JsxCodeContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 2862;
				this.match(MParser.LCURL);
				this.state = 2864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 21)) & ~0x1F) === 0 && ((1 << (_la - 21)) & 27271189) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 71301119) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 294913) !== 0) || ((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & 1150369805) !== 0) || ((((_la - 168)) & ~0x1F) === 0 && ((1 << (_la - 168)) & 1047679) !== 0)) {
					{
					this.state = 2863;
					(localctx as JsxCodeContext)._exp = this.expression(0);
					}
				}

				this.state = 2866;
				this.match(MParser.RCURL);
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
		this.enterRule(localctx, 510, MParser.RULE_jsx_text);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2870;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2869;
					this.jsx_char();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2872;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 269, this._ctx);
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
		this.enterRule(localctx, 512, MParser.RULE_jsx_char);
		let _la: number;
		try {
			this.state = 2876;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2874;
				_la = this._input.LA(1);
				if(_la<=0 || ((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 163843) !== 0)) {
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
				this.state = 2875;
				this.match(MParser.JSX_TEXT);
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
		this.enterRule(localctx, 514, MParser.RULE_css_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2878;
			this.match(MParser.LCURL);
			this.state = 2880;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2879;
				localctx._field = this.css_field();
				}
				}
				this.state = 2882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & 16777279) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 4292868093) !== 0) || ((((_la - 86)) & ~0x1F) === 0 && ((1 << (_la - 86)) & 4294967295) !== 0) || ((((_la - 118)) & ~0x1F) === 0 && ((1 << (_la - 118)) & 4294967285) !== 0) || ((((_la - 150)) & ~0x1F) === 0 && ((1 << (_la - 150)) & 29622207) !== 0));
			this.state = 2884;
			this.match(MParser.RCURL);
			}
		}
		catch (re) {
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
		this.enterRule(localctx, 516, MParser.RULE_css_field);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2886;
			localctx._name = this.css_identifier(0);
			this.state = 2887;
			this.match(MParser.COLON);
			this.state = 2889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2888;
				localctx._values = this.css_value();
				}
				}
				this.state = 2891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4227727358) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 536870911) !== 0));
			this.state = 2893;
			this.match(MParser.SEMI);
			}
		}
		catch (re) {
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
		let _startState: number = 518;
		this.enterRecursionRule(localctx, 518, MParser.RULE_css_identifier, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2899;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 54:
			case 56:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
			case 62:
			case 63:
			case 64:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
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
			case 120:
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
			case 172:
			case 173:
			case 174:
				{
				this.state = 2896;
				this.identifier_or_keyword();
				}
				break;
			case 34:
				{
				this.state = 2897;
				this.match(MParser.MINUS);
				this.state = 2898;
				this.nospace_identifier_or_keyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 2909;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 275, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Css_identifierContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, MParser.RULE_css_identifier);
					this.state = 2901;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 2903;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 2902;
							this.nospace_hyphen_identifier_or_keyword();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 2905;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 274, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
				}
				this.state = 2911;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 275, this._ctx);
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
		this.enterRule(localctx, 520, MParser.RULE_css_value);
		try {
			this.state = 2917;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
				localctx = new CssValueContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 2912;
				this.match(MParser.LCURL);
				this.state = 2913;
				(localctx as CssValueContext)._exp = this.expression(0);
				this.state = 2914;
				this.match(MParser.RCURL);
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
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 18:
			case 19:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
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
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
				localctx = new CssTextContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 2916;
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
		this.enterRule(localctx, 522, MParser.RULE_css_text);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 2920;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2919;
					_la = this._input.LA(1);
					if(_la<=0 || (((_la) & ~0x1F) === 0 && ((1 << _la) & 100794368) !== 0)) {
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
				this.state = 2922;
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 19:
			return this.native_category_binding_list_sempred(localctx as Native_category_binding_listContext, predIndex);
		case 40:
			return this.else_if_statement_list_sempred(localctx as Else_if_statement_listContext, predIndex);
		case 46:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		case 50:
			return this.instance_expression_sempred(localctx as Instance_expressionContext, predIndex);
		case 51:
			return this.mutable_instance_expression_sempred(localctx as Mutable_instance_expressionContext, predIndex);
		case 57:
			return this.copy_from_sempred(localctx as Copy_fromContext, predIndex);
		case 58:
			return this.argument_assignment_list_sempred(localctx as Argument_assignment_listContext, predIndex);
		case 68:
			return this.child_instance_sempred(localctx as Child_instanceContext, predIndex);
		case 97:
			return this.typedef_sempred(localctx as TypedefContext, predIndex);
		case 108:
			return this.nospace_hyphen_identifier_or_keyword_sempred(localctx as Nospace_hyphen_identifier_or_keywordContext, predIndex);
		case 109:
			return this.nospace_identifier_or_keyword_sempred(localctx as Nospace_identifier_or_keywordContext, predIndex);
		case 122:
			return this.any_type_sempred(localctx as Any_typeContext, predIndex);
		case 163:
			return this.assignable_instance_sempred(localctx as Assignable_instanceContext, predIndex);
		case 164:
			return this.is_expression_sempred(localctx as Is_expressionContext, predIndex);
		case 165:
			return this.metadata_sempred(localctx as MetadataContext, predIndex);
		case 178:
			return this.new_token_sempred(localctx as New_tokenContext, predIndex);
		case 179:
			return this.key_token_sempred(localctx as Key_tokenContext, predIndex);
		case 180:
			return this.module_token_sempred(localctx as Module_tokenContext, predIndex);
		case 181:
			return this.value_token_sempred(localctx as Value_tokenContext, predIndex);
		case 182:
			return this.symbols_token_sempred(localctx as Symbols_tokenContext, predIndex);
		case 189:
			return this.javascript_expression_sempred(localctx as Javascript_expressionContext, predIndex);
		case 195:
			return this.javascript_arguments_sempred(localctx as Javascript_argumentsContext, predIndex);
		case 202:
			return this.python_expression_sempred(localctx as Python_expressionContext, predIndex);
		case 208:
			return this.python_ordinal_argument_list_sempred(localctx as Python_ordinal_argument_listContext, predIndex);
		case 209:
			return this.python_named_argument_list_sempred(localctx as Python_named_argument_listContext, predIndex);
		case 211:
			return this.python_identifier_expression_sempred(localctx as Python_identifier_expressionContext, predIndex);
		case 215:
			return this.java_expression_sempred(localctx as Java_expressionContext, predIndex);
		case 221:
			return this.java_arguments_sempred(localctx as Java_argumentsContext, predIndex);
		case 224:
			return this.java_identifier_expression_sempred(localctx as Java_identifier_expressionContext, predIndex);
		case 225:
			return this.java_class_identifier_expression_sempred(localctx as Java_class_identifier_expressionContext, predIndex);
		case 229:
			return this.csharp_expression_sempred(localctx as Csharp_expressionContext, predIndex);
		case 235:
			return this.csharp_arguments_sempred(localctx as Csharp_argumentsContext, predIndex);
		case 238:
			return this.csharp_identifier_expression_sempred(localctx as Csharp_identifier_expressionContext, predIndex);
		case 259:
			return this.css_identifier_sempred(localctx as Css_identifierContext, predIndex);
		}
		return true;
	}
	private native_category_binding_list_sempred(localctx: Native_category_binding_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private else_if_statement_list_sempred(localctx: Else_if_statement_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 20);
		case 3:
			return this.precpred(this._ctx, 19);
		case 4:
			return this.precpred(this._ctx, 18);
		case 5:
			return this.precpred(this._ctx, 17);
		case 6:
			return this.precpred(this._ctx, 16);
		case 7:
			return this.precpred(this._ctx, 15);
		case 8:
			return this.precpred(this._ctx, 13);
		case 9:
			return this.precpred(this._ctx, 12);
		case 10:
			return this.precpred(this._ctx, 11);
		case 11:
			return this.precpred(this._ctx, 10);
		case 12:
			return this.precpred(this._ctx, 7);
		case 13:
			return this.precpred(this._ctx, 6);
		case 14:
			return this.precpred(this._ctx, 5);
		case 15:
			return this.precpred(this._ctx, 1);
		case 16:
			return this.precpred(this._ctx, 24);
		case 17:
			return this.precpred(this._ctx, 21);
		case 18:
			return this.precpred(this._ctx, 14);
		case 19:
			return this.precpred(this._ctx, 9);
		case 20:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}
	private instance_expression_sempred(localctx: Instance_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private mutable_instance_expression_sempred(localctx: Mutable_instance_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private copy_from_sempred(localctx: Copy_fromContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return this.willNotBe(this.equalToken());
		}
		return true;
	}
	private argument_assignment_list_sempred(localctx: Argument_assignment_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.willNotBe(this.equalToken());
		case 25:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private child_instance_sempred(localctx: Child_instanceContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return this.wasNot(MParser.WS);
		case 27:
			return this.wasNot(MParser.WS);
		}
		return true;
	}
	private typedef_sempred(localctx: TypedefContext, predIndex: number): boolean {
		switch (predIndex) {
		case 28:
			return this.precpred(this._ctx, 6);
		case 29:
			return this.precpred(this._ctx, 5);
		case 30:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private nospace_hyphen_identifier_or_keyword_sempred(localctx: Nospace_hyphen_identifier_or_keywordContext, predIndex: number): boolean {
		switch (predIndex) {
		case 31:
			return this.wasNotWhiteSpace();
		}
		return true;
	}
	private nospace_identifier_or_keyword_sempred(localctx: Nospace_identifier_or_keywordContext, predIndex: number): boolean {
		switch (predIndex) {
		case 32:
			return this.wasNotWhiteSpace();
		}
		return true;
	}
	private any_type_sempred(localctx: Any_typeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 33:
			return this.precpred(this._ctx, 2);
		case 34:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private assignable_instance_sempred(localctx: Assignable_instanceContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private is_expression_sempred(localctx: Is_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 36:
			return this.willBeAOrAn();
		}
		return true;
	}
	private metadata_sempred(localctx: MetadataContext, predIndex: number): boolean {
		switch (predIndex) {
		case 37:
			return this.willBeText("metadata");
		}
		return true;
	}
	private new_token_sempred(localctx: New_tokenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 38:
			return this.isText(localctx._i1,"new");
		}
		return true;
	}
	private key_token_sempred(localctx: Key_tokenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 39:
			return this.isText(localctx._i1,"key");
		}
		return true;
	}
	private module_token_sempred(localctx: Module_tokenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 40:
			return this.isText(localctx._i1,"module");
		}
		return true;
	}
	private value_token_sempred(localctx: Value_tokenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 41:
			return this.isText(localctx._i1,"value");
		}
		return true;
	}
	private symbols_token_sempred(localctx: Symbols_tokenContext, predIndex: number): boolean {
		switch (predIndex) {
		case 42:
			return this.isText(localctx._i1,"symbols");
		}
		return true;
	}
	private javascript_expression_sempred(localctx: Javascript_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 43:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private javascript_arguments_sempred(localctx: Javascript_argumentsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 44:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private python_expression_sempred(localctx: Python_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 45:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private python_ordinal_argument_list_sempred(localctx: Python_ordinal_argument_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 46:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private python_named_argument_list_sempred(localctx: Python_named_argument_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 47:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private python_identifier_expression_sempred(localctx: Python_identifier_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 48:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private java_expression_sempred(localctx: Java_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 49:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private java_arguments_sempred(localctx: Java_argumentsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 50:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private java_identifier_expression_sempred(localctx: Java_identifier_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 51:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private java_class_identifier_expression_sempred(localctx: Java_class_identifier_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 52:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private csharp_expression_sempred(localctx: Csharp_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 53:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private csharp_arguments_sempred(localctx: Csharp_argumentsContext, predIndex: number): boolean {
		switch (predIndex) {
		case 54:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private csharp_identifier_expression_sempred(localctx: Csharp_identifier_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 55:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private css_identifier_sempred(localctx: Css_identifierContext, predIndex: number): boolean {
		switch (predIndex) {
		case 56:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,188,2925,2,0,7,0,
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
	7,259,2,260,7,260,2,261,7,261,1,0,1,0,1,0,1,0,1,0,1,0,3,0,531,8,0,1,0,3,
	0,534,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,559,8,3,1,3,1,3,1,4,3,4,564,8,4,1,4,1,
	4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,578,8,4,1,4,1,4,1,4,1,4,3,
	4,584,8,4,3,4,586,8,4,3,4,588,8,4,1,4,1,4,3,4,592,8,4,1,5,1,5,1,5,3,5,597,
	8,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,605,8,6,1,6,1,6,1,6,1,6,1,6,3,6,612,8,6,
	1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,3,8,629,8,8,
	1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,640,8,8,1,8,1,8,1,8,1,8,1,8,3,8,
	647,8,8,1,8,1,8,3,8,651,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,662,
	8,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,676,
	8,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
	12,1,12,1,13,1,13,1,13,3,13,696,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
	1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,3,
	15,719,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,3,16,730,8,16,
	1,16,1,16,1,16,1,16,1,16,3,16,737,8,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
	16,3,16,746,8,16,1,16,1,16,1,17,3,17,751,8,17,1,17,1,17,1,17,1,17,1,17,
	3,17,758,8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,767,8,17,1,17,1,17,
	1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,5,19,786,8,19,10,19,12,19,789,9,19,1,20,1,20,1,20,1,20,1,20,3,20,796,
	8,20,1,20,1,20,1,20,3,20,801,8,20,1,20,3,20,804,8,20,1,21,1,21,1,21,1,21,
	1,21,3,21,811,8,21,1,21,1,21,1,21,3,21,816,8,21,1,21,3,21,819,8,21,1,22,
	1,22,1,22,1,22,3,22,825,8,22,1,22,1,22,1,22,3,22,830,8,22,1,22,3,22,833,
	8,22,1,22,1,22,1,22,1,22,3,22,839,8,22,1,22,1,22,1,23,1,23,3,23,845,8,23,
	1,23,1,23,1,23,3,23,850,8,23,1,23,1,23,1,23,3,23,855,8,23,1,23,1,23,1,23,
	1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,
	24,1,24,1,24,1,24,1,24,3,24,879,8,24,1,25,1,25,1,26,1,26,1,26,1,26,1,26,
	1,26,1,26,3,26,890,8,26,1,26,1,26,3,26,894,8,26,1,27,1,27,1,27,1,27,1,27,
	1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,3,27,917,8,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,
	1,29,1,29,1,29,1,29,3,29,933,8,29,1,29,1,29,1,29,1,29,1,29,3,29,940,8,29,
	1,29,1,29,1,29,1,29,1,29,1,29,3,29,948,8,29,1,29,1,29,1,29,1,29,1,29,1,
	29,3,29,956,8,29,1,30,1,30,1,30,3,30,961,8,30,1,30,1,30,1,31,1,31,1,31,
	3,31,968,8,31,1,31,1,31,1,31,1,31,3,31,974,8,31,1,31,1,31,1,31,1,31,1,31,
	3,31,981,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,
	33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,
	1,34,3,34,1010,8,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
	35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,1029,8,35,1,36,1,36,1,36,1,36,3,36,
	1035,8,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,
	37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,
	1,39,1,39,1,39,1,39,1,39,3,39,1069,8,39,1,39,1,39,1,39,1,39,1,39,1,39,1,
	39,3,39,1078,8,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,
	1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,5,40,1099,8,40,10,40,12,40,1102,
	9,40,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,1115,8,
	42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,1124,8,42,1,42,1,42,1,42,1,42,
	1,42,1,42,1,42,3,42,1133,8,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,
	43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,1156,
	8,43,1,44,1,44,1,45,1,45,3,45,1162,8,45,1,46,1,46,1,46,1,46,1,46,1,46,1,
	46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
	3,46,1185,8,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
	46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
	1,46,3,46,1214,8,46,1,46,1,46,1,46,1,46,3,46,1220,8,46,1,46,1,46,1,46,1,
	46,3,46,1226,8,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
	1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
	46,3,46,1254,8,46,1,46,1,46,1,46,1,46,3,46,1260,8,46,1,46,1,46,1,46,3,46,
	1265,8,46,1,46,1,46,1,46,1,46,1,46,3,46,1272,8,46,1,46,1,46,1,46,5,46,1277,
	8,46,10,46,12,46,1280,9,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,1289,
	8,47,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,3,49,1299,8,49,1,50,1,50,1,
	50,1,50,1,50,5,50,1306,8,50,10,50,12,50,1309,9,50,1,51,1,51,1,51,1,51,1,
	51,1,51,5,51,1317,8,51,10,51,12,51,1320,9,51,1,52,1,52,1,52,1,52,1,52,1,
	52,1,52,1,52,1,52,3,52,1331,8,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,
	1,53,1,53,1,53,1,53,3,53,1345,8,53,1,54,1,54,1,54,3,54,1350,8,54,1,54,1,
	54,1,55,1,55,1,55,1,55,1,55,3,55,1359,8,55,1,55,1,55,1,56,1,56,1,56,1,56,
	1,56,3,56,1368,8,56,1,56,1,56,1,56,1,56,1,56,3,56,1375,8,56,1,56,1,56,3,
	56,1379,8,56,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,3,58,1391,
	8,58,1,58,1,58,1,58,5,58,1396,8,58,10,58,12,58,1399,9,58,1,59,1,59,1,59,
	1,59,3,59,1405,8,59,1,60,1,60,1,60,1,60,1,60,3,60,1412,8,60,1,61,1,61,1,
	61,3,61,1417,8,61,1,61,1,61,1,61,1,62,1,62,1,62,3,62,1425,8,62,1,62,1,62,
	1,62,1,62,3,62,1431,8,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,3,62,1440,8,
	62,1,62,1,62,3,62,1444,8,62,1,62,1,62,1,62,3,62,1449,8,62,1,62,1,62,3,62,
	1453,8,62,1,62,1,62,1,62,3,62,1458,8,62,3,62,1460,8,62,1,63,1,63,1,63,3,
	63,1465,8,63,1,63,1,63,1,63,1,63,3,63,1471,8,63,1,63,1,63,1,63,1,63,1,63,
	1,63,1,63,1,63,1,63,3,63,1482,8,63,1,63,1,63,3,63,1486,8,63,1,63,1,63,1,
	63,3,63,1491,8,63,1,63,1,63,3,63,1495,8,63,1,63,1,63,1,63,3,63,1500,8,63,
	1,63,3,63,1503,8,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,
	65,1,65,1,65,1,65,1,66,1,66,3,66,1521,8,66,1,66,1,66,1,66,1,66,1,66,1,66,
	1,66,3,66,1530,8,66,1,66,1,66,1,67,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,
	68,1,68,1,68,1,68,3,68,1546,8,68,1,69,1,69,1,69,1,69,1,70,5,70,1553,8,70,
	10,70,12,70,1556,9,70,1,71,4,71,1559,8,71,11,71,12,71,1560,1,72,5,72,1564,
	8,72,10,72,12,72,1567,9,72,1,73,4,73,1570,8,73,11,73,12,73,1571,1,73,1,
	73,1,74,5,74,1577,8,74,10,74,12,74,1580,9,74,1,74,1,74,1,75,1,75,1,76,1,
	76,1,77,1,77,4,77,1590,8,77,11,77,12,77,1591,1,78,1,78,1,78,3,78,1597,8,
	78,1,79,1,79,3,79,1601,8,79,1,79,1,79,1,79,1,80,1,80,1,80,1,80,5,80,1610,
	8,80,10,80,12,80,1613,9,80,1,81,1,81,1,81,5,81,1618,8,81,10,81,12,81,1621,
	9,81,1,81,1,81,1,81,5,81,1626,8,81,10,81,12,81,1629,9,81,1,81,1,81,1,81,
	1,81,1,81,1,81,3,81,1637,8,81,1,82,1,82,1,82,1,82,1,82,1,82,5,82,1645,8,
	82,10,82,12,82,1648,9,82,3,82,1650,8,82,1,82,1,82,3,82,1654,8,82,1,83,1,
	83,1,84,1,84,1,84,1,84,1,85,1,85,1,86,1,86,3,86,1666,8,86,1,87,1,87,1,88,
	1,88,3,88,1672,8,88,1,89,1,89,1,89,1,89,5,89,1678,8,89,10,89,12,89,1681,
	9,89,1,90,1,90,1,90,1,90,5,90,1687,8,90,10,90,12,90,1690,9,90,1,91,1,91,
	1,91,5,91,1695,8,91,10,91,12,91,1698,9,91,1,92,1,92,1,92,1,92,1,92,1,92,
	1,92,1,92,1,92,1,92,3,92,1710,8,92,1,93,3,93,1713,8,93,1,93,1,93,3,93,1717,
	8,93,1,93,1,93,1,94,3,94,1722,8,94,1,94,1,94,3,94,1726,8,94,1,94,1,94,1,
	95,1,95,1,95,5,95,1733,8,95,10,95,12,95,1736,9,95,1,96,1,96,1,96,1,96,1,
	96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,
	1,97,1,97,1,97,1,97,3,97,1761,8,97,1,97,1,97,1,97,1,97,1,97,1,97,1,97,5,
	97,1770,8,97,10,97,12,97,1773,9,97,1,98,1,98,3,98,1777,8,98,1,99,1,99,1,
	99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
	1,99,3,99,1797,8,99,1,100,1,100,1,101,3,101,1802,8,101,1,101,1,101,1,102,
	1,102,1,103,1,103,1,103,3,103,1811,8,103,1,104,1,104,3,104,1815,8,104,1,
	105,1,105,1,105,5,105,1820,8,105,10,105,12,105,1823,9,105,1,106,1,106,3,
	106,1827,8,106,1,107,1,107,3,107,1831,8,107,1,108,1,108,1,108,1,108,1,109,
	1,109,1,109,1,110,1,110,1,110,3,110,1843,8,110,1,111,1,111,1,112,1,112,
	1,113,1,113,1,114,1,114,1,115,1,115,1,116,1,116,1,116,5,116,1858,8,116,
	10,116,12,116,1861,9,116,1,117,1,117,3,117,1865,8,117,1,117,3,117,1868,
	8,117,1,118,1,118,3,118,1872,8,118,1,119,1,119,1,119,3,119,1877,8,119,1,
	120,1,120,1,120,1,121,1,121,3,121,1884,8,121,1,122,1,122,1,122,1,122,1,
	122,1,122,1,122,1,122,1,122,5,122,1895,8,122,10,122,12,122,1898,9,122,1,
	123,1,123,1,123,1,123,5,123,1904,8,123,10,123,12,123,1907,9,123,1,124,1,
	124,1,124,5,124,1912,8,124,10,124,12,124,1915,9,124,1,124,1,124,1,124,5,
	124,1920,8,124,10,124,12,124,1923,9,124,1,124,1,124,1,124,1,124,1,124,3,
	124,1930,8,124,1,125,1,125,1,125,1,125,5,125,1936,8,125,10,125,12,125,1939,
	9,125,1,126,1,126,1,126,5,126,1944,8,126,10,126,12,126,1947,9,126,1,126,
	1,126,1,126,5,126,1952,8,126,10,126,12,126,1955,9,126,1,126,1,126,1,126,
	3,126,1960,8,126,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,1,127,
	1,127,3,127,1972,8,127,1,128,1,128,3,128,1976,8,128,1,129,1,129,1,129,1,
	129,1,129,1,129,5,129,1984,8,129,10,129,12,129,1987,9,129,1,130,1,130,1,
	130,5,130,1992,8,130,10,130,12,130,1995,9,130,1,130,3,130,1998,8,130,1,
	131,1,131,1,131,1,131,3,131,2004,8,131,1,131,1,131,1,131,5,131,2009,8,131,
	10,131,12,131,2012,9,131,1,131,1,131,3,131,2016,8,131,1,132,1,132,1,132,
	5,132,2021,8,132,10,132,12,132,2024,9,132,1,133,1,133,1,133,5,133,2029,
	8,133,10,133,12,133,2032,9,133,1,134,1,134,1,134,1,134,3,134,2038,8,134,
	1,135,1,135,1,135,1,135,5,135,2044,8,135,10,135,12,135,2047,9,135,1,136,
	1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,3,136,2059,8,136,
	1,137,1,137,3,137,2063,8,137,1,137,3,137,2066,8,137,1,138,1,138,3,138,2070,
	8,138,1,138,3,138,2073,8,138,1,139,1,139,1,139,1,139,5,139,2079,8,139,10,
	139,12,139,2082,9,139,1,140,1,140,1,140,1,140,5,140,2088,8,140,10,140,12,
	140,2091,9,140,1,141,1,141,1,141,1,141,5,141,2097,8,141,10,141,12,141,2100,
	9,141,1,142,1,142,1,142,1,142,5,142,2106,8,142,10,142,12,142,2109,9,142,
	1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,
	1,143,1,143,3,143,2125,8,143,1,144,1,144,1,144,3,144,2130,8,144,1,144,1,
	144,1,144,1,144,1,144,1,144,1,144,3,144,2139,8,144,1,144,1,144,1,144,1,
	144,1,144,1,144,1,144,1,144,1,144,3,144,2150,8,144,1,145,1,145,1,145,5,
	145,2155,8,145,10,145,12,145,2158,9,145,1,146,1,146,1,147,1,147,1,147,3,
	147,2165,8,147,1,147,1,147,1,148,1,148,1,148,1,148,1,149,1,149,3,149,2175,
	8,149,1,150,1,150,1,150,1,150,1,150,1,150,3,150,2183,8,150,1,151,3,151,
	2186,8,151,1,151,1,151,3,151,2190,8,151,1,151,1,151,1,152,3,152,2195,8,
	152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,3,152,2205,8,152,1,
	153,1,153,3,153,2209,8,153,1,153,1,153,1,154,1,154,1,154,1,154,1,154,5,
	154,2218,8,154,10,154,12,154,2221,9,154,3,154,2223,8,154,1,155,1,155,1,
	155,5,155,2228,8,155,10,155,12,155,2231,9,155,1,156,1,156,1,156,1,156,1,
	157,1,157,3,157,2239,8,157,1,158,1,158,1,158,5,158,2244,8,158,10,158,12,
	158,2247,9,158,1,159,1,159,1,159,1,159,1,160,1,160,3,160,2255,8,160,1,161,
	1,161,1,161,1,161,1,161,1,161,1,161,1,161,1,161,3,161,2266,8,161,1,162,
	1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,163,5,163,2277,8,163,10,163,
	12,163,2280,9,163,1,164,1,164,1,164,1,164,3,164,2286,8,164,1,165,1,165,
	1,165,1,166,1,166,1,166,1,166,1,166,1,166,1,166,1,166,3,166,2299,8,166,
	1,167,1,167,1,167,1,167,1,167,1,168,1,168,1,168,3,168,2309,8,168,1,168,
	3,168,2312,8,168,1,169,1,169,3,169,2316,8,169,1,170,1,170,1,170,1,170,1,
	170,1,171,1,171,1,171,1,171,1,171,1,172,1,172,1,172,1,172,1,172,1,173,1,
	173,1,173,5,173,2336,8,173,10,173,12,173,2339,9,173,1,174,1,174,1,174,5,
	174,2344,8,174,10,174,12,174,2347,9,174,1,174,3,174,2350,8,174,1,175,1,
	175,1,175,5,175,2355,8,175,10,175,12,175,2358,9,175,1,176,1,176,1,176,1,
	176,1,176,1,176,3,176,2366,8,176,1,177,1,177,1,178,1,178,1,178,1,179,1,
	179,1,179,1,180,1,180,1,180,1,181,1,181,1,181,1,182,1,182,1,182,1,183,1,
	183,1,184,1,184,1,185,1,185,1,186,1,186,1,187,1,187,1,188,1,188,1,188,1,
	188,1,188,1,188,1,188,3,188,2402,8,188,1,189,1,189,1,189,1,189,1,189,5,
	189,2409,8,189,10,189,12,189,2412,9,189,1,190,1,190,1,190,1,190,1,190,1,
	190,1,190,3,190,2421,8,190,1,191,1,191,1,192,1,192,1,192,1,193,1,193,1,
	193,1,193,1,193,3,193,2433,8,193,1,194,1,194,1,194,3,194,2438,8,194,1,194,
	1,194,1,195,1,195,1,195,1,195,1,195,1,195,5,195,2448,8,195,10,195,12,195,
	2451,9,195,1,196,1,196,1,196,1,196,1,197,1,197,1,197,1,197,1,198,1,198,
	1,199,1,199,1,199,1,199,1,199,3,199,2468,8,199,1,200,1,200,1,200,1,200,
	1,200,3,200,2475,8,200,1,201,1,201,1,201,3,201,2480,8,201,1,202,1,202,1,
	202,1,202,1,202,5,202,2487,8,202,10,202,12,202,2490,9,202,1,203,1,203,1,
	203,1,203,1,203,3,203,2497,8,203,1,204,1,204,1,205,1,205,1,205,1,205,1,
	205,1,205,3,205,2507,8,205,1,206,1,206,1,206,3,206,2512,8,206,1,206,1,206,
	1,207,1,207,1,207,1,207,1,207,1,207,3,207,2522,8,207,1,208,1,208,1,208,
	1,208,1,208,1,208,5,208,2530,8,208,10,208,12,208,2533,9,208,1,209,1,209,
	1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,1,209,5,209,2546,8,209,
	10,209,12,209,2549,9,209,1,210,1,210,1,210,1,210,1,211,1,211,1,211,3,211,
	2558,8,211,1,211,1,211,1,211,5,211,2563,8,211,10,211,12,211,2566,9,211,
	1,212,1,212,1,212,1,212,1,212,3,212,2573,8,212,1,213,1,213,1,213,1,213,
	1,213,3,213,2580,8,213,1,214,1,214,1,214,1,214,1,214,1,214,1,214,3,214,
	2589,8,214,1,215,1,215,1,215,1,215,1,215,5,215,2596,8,215,10,215,12,215,
	2599,9,215,1,216,1,216,1,216,1,216,1,216,3,216,2606,8,216,1,217,1,217,1,
	218,1,218,1,218,1,219,1,219,1,219,3,219,2616,8,219,1,220,1,220,1,220,3,
	220,2621,8,220,1,220,1,220,1,221,1,221,1,221,1,221,1,221,1,221,5,221,2631,
	8,221,10,221,12,221,2634,9,221,1,222,1,222,1,222,1,222,1,223,1,223,1,223,
	1,223,1,224,1,224,1,224,1,224,1,224,1,224,5,224,2650,8,224,10,224,12,224,
	2653,9,224,1,225,1,225,1,225,1,225,1,225,5,225,2660,8,225,10,225,12,225,
	2663,9,225,1,226,1,226,1,226,1,226,1,226,3,226,2670,8,226,1,227,1,227,1,
	227,1,227,1,227,3,227,2677,8,227,1,228,1,228,1,228,1,228,1,228,1,228,1,
	228,3,228,2686,8,228,1,229,1,229,1,229,1,229,1,229,5,229,2693,8,229,10,
	229,12,229,2696,9,229,1,230,1,230,1,230,1,230,1,230,3,230,2703,8,230,1,
	231,1,231,1,232,1,232,1,232,1,233,1,233,1,233,3,233,2713,8,233,1,234,1,
	234,1,234,3,234,2718,8,234,1,234,1,234,1,235,1,235,1,235,1,235,1,235,1,
	235,5,235,2728,8,235,10,235,12,235,2731,9,235,1,236,1,236,1,236,1,236,1,
	237,1,237,1,237,1,237,1,238,1,238,1,238,3,238,2744,8,238,1,238,1,238,1,
	238,5,238,2749,8,238,10,238,12,238,2752,9,238,1,239,1,239,1,239,1,239,1,
	239,3,239,2759,8,239,1,240,1,240,1,240,1,240,1,240,3,240,2766,8,240,1,241,
	1,241,3,241,2770,8,241,1,242,1,242,1,242,3,242,2775,8,242,1,242,1,242,3,
	242,2779,8,242,1,243,1,243,1,243,3,243,2784,8,243,1,243,1,243,1,243,1,244,
	1,244,1,244,3,244,2792,8,244,1,245,1,245,1,245,1,245,1,246,1,246,1,246,
	1,246,5,246,2802,8,246,10,246,12,246,2805,9,246,1,246,1,246,1,246,1,247,
	1,247,1,247,1,247,5,247,2814,8,247,10,247,12,247,2817,9,247,1,247,1,247,
	1,248,1,248,1,248,1,248,1,248,1,249,1,249,1,249,5,249,2829,8,249,10,249,
	12,249,2832,9,249,1,250,1,250,5,250,2836,8,250,10,250,12,250,2839,9,250,
	1,251,1,251,1,251,3,251,2844,8,251,1,251,1,251,1,252,1,252,1,252,3,252,
	2851,8,252,1,252,3,252,2854,8,252,1,253,4,253,2857,8,253,11,253,12,253,
	2858,1,254,1,254,1,254,1,254,3,254,2865,8,254,1,254,3,254,2868,8,254,1,
	255,4,255,2871,8,255,11,255,12,255,2872,1,256,1,256,3,256,2877,8,256,1,
	257,1,257,4,257,2881,8,257,11,257,12,257,2882,1,257,1,257,1,258,1,258,1,
	258,4,258,2890,8,258,11,258,12,258,2891,1,258,1,258,1,259,1,259,1,259,1,
	259,3,259,2900,8,259,1,259,1,259,4,259,2904,8,259,11,259,12,259,2905,5,
	259,2908,8,259,10,259,12,259,2911,9,259,1,260,1,260,1,260,1,260,1,260,3,
	260,2918,8,260,1,261,4,261,2921,8,261,11,261,12,261,2922,1,261,1,1591,23,
	38,80,92,100,102,116,194,244,326,378,390,404,416,418,422,430,442,448,450,
	458,470,476,518,262,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
	38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
	86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
	126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,
	162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,
	198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,
	234,236,238,240,242,244,246,248,250,252,254,256,258,260,262,264,266,268,
	270,272,274,276,278,280,282,284,286,288,290,292,294,296,298,300,302,304,
	306,308,310,312,314,316,318,320,322,324,326,328,330,332,334,336,338,340,
	342,344,346,348,350,352,354,356,358,360,362,364,366,368,370,372,374,376,
	378,380,382,384,386,388,390,392,394,396,398,400,402,404,406,408,410,412,
	414,416,418,420,422,424,426,428,430,432,434,436,438,440,442,444,446,448,
	450,452,454,456,458,460,462,464,466,468,470,472,474,476,478,480,482,484,
	486,488,490,492,494,496,498,500,502,504,506,508,510,512,514,516,518,520,
	522,0,16,1,0,91,92,1,0,33,34,1,0,40,43,1,0,47,49,2,0,1,1,5,7,1,0,8,9,3,
	0,115,115,148,148,174,174,5,0,91,91,127,127,143,143,151,151,174,174,3,0,
	91,91,143,143,174,174,3,0,143,143,151,151,174,174,2,0,147,147,157,157,2,
	0,82,82,98,98,8,0,10,15,54,54,56,64,66,74,76,118,120,120,122,155,157,167,
	2,0,38,38,126,126,3,0,25,26,40,40,42,42,2,0,17,17,25,26,3108,0,524,1,0,
	0,0,2,541,1,0,0,0,4,551,1,0,0,0,6,555,1,0,0,0,8,563,1,0,0,0,10,593,1,0,
	0,0,12,600,1,0,0,0,14,615,1,0,0,0,16,628,1,0,0,0,18,652,1,0,0,0,20,665,
	1,0,0,0,22,667,1,0,0,0,24,682,1,0,0,0,26,692,1,0,0,0,28,705,1,0,0,0,30,
	715,1,0,0,0,32,729,1,0,0,0,34,750,1,0,0,0,36,770,1,0,0,0,38,778,1,0,0,0,
	40,790,1,0,0,0,42,805,1,0,0,0,44,820,1,0,0,0,46,842,1,0,0,0,48,861,1,0,
	0,0,50,880,1,0,0,0,52,882,1,0,0,0,54,916,1,0,0,0,56,918,1,0,0,0,58,939,
	1,0,0,0,60,957,1,0,0,0,62,967,1,0,0,0,64,982,1,0,0,0,66,989,1,0,0,0,68,
	996,1,0,0,0,70,1028,1,0,0,0,72,1030,1,0,0,0,74,1043,1,0,0,0,76,1052,1,0,
	0,0,78,1059,1,0,0,0,80,1079,1,0,0,0,82,1103,1,0,0,0,84,1106,1,0,0,0,86,
	1155,1,0,0,0,88,1157,1,0,0,0,90,1159,1,0,0,0,92,1184,1,0,0,0,94,1288,1,
	0,0,0,96,1290,1,0,0,0,98,1298,1,0,0,0,100,1300,1,0,0,0,102,1310,1,0,0,0,
	104,1330,1,0,0,0,106,1344,1,0,0,0,108,1346,1,0,0,0,110,1353,1,0,0,0,112,
	1378,1,0,0,0,114,1380,1,0,0,0,116,1390,1,0,0,0,118,1400,1,0,0,0,120,1406,
	1,0,0,0,122,1413,1,0,0,0,124,1459,1,0,0,0,126,1502,1,0,0,0,128,1504,1,0,
	0,0,130,1512,1,0,0,0,132,1518,1,0,0,0,134,1533,1,0,0,0,136,1545,1,0,0,0,
	138,1547,1,0,0,0,140,1554,1,0,0,0,142,1558,1,0,0,0,144,1565,1,0,0,0,146,
	1569,1,0,0,0,148,1578,1,0,0,0,150,1583,1,0,0,0,152,1585,1,0,0,0,154,1587,
	1,0,0,0,156,1596,1,0,0,0,158,1598,1,0,0,0,160,1605,1,0,0,0,162,1619,1,0,
	0,0,164,1638,1,0,0,0,166,1655,1,0,0,0,168,1657,1,0,0,0,170,1661,1,0,0,0,
	172,1665,1,0,0,0,174,1667,1,0,0,0,176,1671,1,0,0,0,178,1673,1,0,0,0,180,
	1682,1,0,0,0,182,1691,1,0,0,0,184,1709,1,0,0,0,186,1712,1,0,0,0,188,1721,
	1,0,0,0,190,1729,1,0,0,0,192,1737,1,0,0,0,194,1760,1,0,0,0,196,1776,1,0,
	0,0,198,1796,1,0,0,0,200,1798,1,0,0,0,202,1801,1,0,0,0,204,1805,1,0,0,0,
	206,1810,1,0,0,0,208,1814,1,0,0,0,210,1816,1,0,0,0,212,1826,1,0,0,0,214,
	1830,1,0,0,0,216,1832,1,0,0,0,218,1836,1,0,0,0,220,1842,1,0,0,0,222,1844,
	1,0,0,0,224,1846,1,0,0,0,226,1848,1,0,0,0,228,1850,1,0,0,0,230,1852,1,0,
	0,0,232,1854,1,0,0,0,234,1867,1,0,0,0,236,1871,1,0,0,0,238,1873,1,0,0,0,
	240,1878,1,0,0,0,242,1883,1,0,0,0,244,1885,1,0,0,0,246,1899,1,0,0,0,248,
	1913,1,0,0,0,250,1931,1,0,0,0,252,1945,1,0,0,0,254,1971,1,0,0,0,256,1973,
	1,0,0,0,258,1977,1,0,0,0,260,1988,1,0,0,0,262,1999,1,0,0,0,264,2017,1,0,
	0,0,266,2025,1,0,0,0,268,2037,1,0,0,0,270,2039,1,0,0,0,272,2058,1,0,0,0,
	274,2060,1,0,0,0,276,2067,1,0,0,0,278,2074,1,0,0,0,280,2083,1,0,0,0,282,
	2092,1,0,0,0,284,2101,1,0,0,0,286,2124,1,0,0,0,288,2149,1,0,0,0,290,2151,
	1,0,0,0,292,2159,1,0,0,0,294,2164,1,0,0,0,296,2168,1,0,0,0,298,2174,1,0,
	0,0,300,2182,1,0,0,0,302,2185,1,0,0,0,304,2194,1,0,0,0,306,2206,1,0,0,0,
	308,2212,1,0,0,0,310,2224,1,0,0,0,312,2232,1,0,0,0,314,2238,1,0,0,0,316,
	2240,1,0,0,0,318,2248,1,0,0,0,320,2254,1,0,0,0,322,2265,1,0,0,0,324,2267,
	1,0,0,0,326,2271,1,0,0,0,328,2285,1,0,0,0,330,2287,1,0,0,0,332,2298,1,0,
	0,0,334,2300,1,0,0,0,336,2311,1,0,0,0,338,2315,1,0,0,0,340,2317,1,0,0,0,
	342,2322,1,0,0,0,344,2327,1,0,0,0,346,2332,1,0,0,0,348,2340,1,0,0,0,350,
	2351,1,0,0,0,352,2365,1,0,0,0,354,2367,1,0,0,0,356,2369,1,0,0,0,358,2372,
	1,0,0,0,360,2375,1,0,0,0,362,2378,1,0,0,0,364,2381,1,0,0,0,366,2384,1,0,
	0,0,368,2386,1,0,0,0,370,2388,1,0,0,0,372,2390,1,0,0,0,374,2392,1,0,0,0,
	376,2401,1,0,0,0,378,2403,1,0,0,0,380,2420,1,0,0,0,382,2422,1,0,0,0,384,
	2424,1,0,0,0,386,2432,1,0,0,0,388,2434,1,0,0,0,390,2441,1,0,0,0,392,2452,
	1,0,0,0,394,2456,1,0,0,0,396,2460,1,0,0,0,398,2467,1,0,0,0,400,2474,1,0,
	0,0,402,2479,1,0,0,0,404,2481,1,0,0,0,406,2496,1,0,0,0,408,2498,1,0,0,0,
	410,2506,1,0,0,0,412,2508,1,0,0,0,414,2521,1,0,0,0,416,2523,1,0,0,0,418,
	2534,1,0,0,0,420,2550,1,0,0,0,422,2557,1,0,0,0,424,2572,1,0,0,0,426,2579,
	1,0,0,0,428,2588,1,0,0,0,430,2590,1,0,0,0,432,2605,1,0,0,0,434,2607,1,0,
	0,0,436,2609,1,0,0,0,438,2615,1,0,0,0,440,2617,1,0,0,0,442,2624,1,0,0,0,
	444,2635,1,0,0,0,446,2639,1,0,0,0,448,2643,1,0,0,0,450,2654,1,0,0,0,452,
	2669,1,0,0,0,454,2676,1,0,0,0,456,2685,1,0,0,0,458,2687,1,0,0,0,460,2702,
	1,0,0,0,462,2704,1,0,0,0,464,2706,1,0,0,0,466,2712,1,0,0,0,468,2714,1,0,
	0,0,470,2721,1,0,0,0,472,2732,1,0,0,0,474,2736,1,0,0,0,476,2743,1,0,0,0,
	478,2758,1,0,0,0,480,2765,1,0,0,0,482,2769,1,0,0,0,484,2778,1,0,0,0,486,
	2780,1,0,0,0,488,2791,1,0,0,0,490,2793,1,0,0,0,492,2797,1,0,0,0,494,2809,
	1,0,0,0,496,2820,1,0,0,0,498,2825,1,0,0,0,500,2833,1,0,0,0,502,2840,1,0,
	0,0,504,2853,1,0,0,0,506,2856,1,0,0,0,508,2867,1,0,0,0,510,2870,1,0,0,0,
	512,2876,1,0,0,0,514,2878,1,0,0,0,516,2886,1,0,0,0,518,2899,1,0,0,0,520,
	2917,1,0,0,0,522,2920,1,0,0,0,524,525,5,103,0,0,525,526,3,228,114,0,526,
	533,5,21,0,0,527,530,3,228,114,0,528,529,5,18,0,0,529,531,3,266,133,0,530,
	528,1,0,0,0,530,531,1,0,0,0,531,534,1,0,0,0,532,534,3,266,133,0,533,527,
	1,0,0,0,533,532,1,0,0,0,534,535,1,0,0,0,535,536,5,22,0,0,536,537,5,16,0,
	0,537,538,3,146,73,0,538,539,3,180,90,0,539,540,3,148,74,0,540,1,1,0,0,
	0,541,542,5,103,0,0,542,543,3,228,114,0,543,544,5,21,0,0,544,545,3,198,
	99,0,545,546,5,22,0,0,546,547,5,16,0,0,547,548,3,146,73,0,548,549,3,178,
	89,0,549,550,3,148,74,0,550,3,1,0,0,0,551,552,3,230,115,0,552,553,5,46,
	0,0,553,554,3,92,46,0,554,5,1,0,0,0,555,556,3,230,115,0,556,558,5,21,0,
	0,557,559,3,116,58,0,558,557,1,0,0,0,558,559,1,0,0,0,559,560,1,0,0,0,560,
	561,5,22,0,0,561,7,1,0,0,0,562,564,5,151,0,0,563,562,1,0,0,0,563,564,1,
	0,0,0,564,565,1,0,0,0,565,566,5,83,0,0,566,567,3,226,113,0,567,568,5,21,
	0,0,568,569,3,194,97,0,569,591,5,22,0,0,570,571,5,16,0,0,571,587,3,146,
	73,0,572,588,5,139,0,0,573,577,3,184,92,0,574,575,3,142,71,0,575,576,3,
	10,5,0,576,578,1,0,0,0,577,574,1,0,0,0,577,578,1,0,0,0,578,586,1,0,0,0,
	579,583,3,10,5,0,580,581,3,142,71,0,581,582,3,184,92,0,582,584,1,0,0,0,
	583,580,1,0,0,0,583,584,1,0,0,0,584,586,1,0,0,0,585,573,1,0,0,0,585,579,
	1,0,0,0,586,588,1,0,0,0,587,572,1,0,0,0,587,585,1,0,0,0,588,589,1,0,0,0,
	589,590,3,148,74,0,590,592,1,0,0,0,591,570,1,0,0,0,591,592,1,0,0,0,592,
	9,1,0,0,0,593,594,5,120,0,0,594,596,5,21,0,0,595,597,3,264,132,0,596,595,
	1,0,0,0,596,597,1,0,0,0,597,598,1,0,0,0,598,599,5,22,0,0,599,11,1,0,0,0,
	600,601,5,162,0,0,601,602,3,228,114,0,602,604,5,21,0,0,603,605,3,228,114,
	0,604,603,1,0,0,0,604,605,1,0,0,0,605,606,1,0,0,0,606,607,5,22,0,0,607,
	608,5,16,0,0,608,611,3,146,73,0,609,612,3,246,123,0,610,612,5,139,0,0,611,
	609,1,0,0,0,611,610,1,0,0,0,612,613,1,0,0,0,613,614,3,148,74,0,614,13,1,
	0,0,0,615,616,5,128,0,0,616,617,5,162,0,0,617,618,3,228,114,0,618,619,5,
	21,0,0,619,620,5,22,0,0,620,621,5,16,0,0,621,622,3,146,73,0,622,623,3,36,
	18,0,623,624,3,142,71,0,624,625,3,250,125,0,625,626,3,148,74,0,626,15,1,
	0,0,0,627,629,5,151,0,0,628,627,1,0,0,0,628,629,1,0,0,0,629,630,1,0,0,0,
	630,631,7,0,0,0,631,632,3,228,114,0,632,639,5,21,0,0,633,640,3,20,10,0,
	634,640,3,266,133,0,635,636,3,20,10,0,636,637,5,18,0,0,637,638,3,266,133,
	0,638,640,1,0,0,0,639,633,1,0,0,0,639,634,1,0,0,0,639,635,1,0,0,0,639,640,
	1,0,0,0,640,641,1,0,0,0,641,650,5,22,0,0,642,643,5,16,0,0,643,646,3,146,
	73,0,644,647,3,246,123,0,645,647,5,139,0,0,646,644,1,0,0,0,646,645,1,0,
	0,0,647,648,1,0,0,0,648,649,3,148,74,0,649,651,1,0,0,0,650,642,1,0,0,0,
	650,651,1,0,0,0,651,17,1,0,0,0,652,653,5,149,0,0,653,654,3,228,114,0,654,
	655,5,21,0,0,655,656,3,266,133,0,656,657,5,22,0,0,657,658,5,16,0,0,658,
	661,3,146,73,0,659,662,3,246,123,0,660,662,5,139,0,0,661,659,1,0,0,0,661,
	660,1,0,0,0,662,663,1,0,0,0,663,664,3,148,74,0,664,19,1,0,0,0,665,666,3,
	210,105,0,666,21,1,0,0,0,667,668,5,94,0,0,668,669,5,135,0,0,669,670,3,352,
	176,0,670,671,5,21,0,0,671,672,3,236,118,0,672,675,5,22,0,0,673,674,5,52,
	0,0,674,676,3,194,97,0,675,673,1,0,0,0,675,676,1,0,0,0,676,677,1,0,0,0,
	677,678,5,16,0,0,678,679,3,146,73,0,679,680,3,278,139,0,680,681,3,148,74,
	0,681,23,1,0,0,0,682,683,5,94,0,0,683,684,3,224,112,0,684,685,5,148,0,0,
	685,686,5,21,0,0,686,687,5,22,0,0,687,688,5,16,0,0,688,689,3,146,73,0,689,
	690,3,278,139,0,690,691,3,148,74,0,691,25,1,0,0,0,692,693,5,94,0,0,693,
	695,3,224,112,0,694,696,5,128,0,0,695,694,1,0,0,0,695,696,1,0,0,0,696,697,
	1,0,0,0,697,698,5,148,0,0,698,699,5,21,0,0,699,700,5,22,0,0,700,701,5,16,
	0,0,701,702,3,146,73,0,702,703,3,270,135,0,703,704,3,148,74,0,704,27,1,
	0,0,0,705,706,5,94,0,0,706,707,3,224,112,0,707,708,5,115,0,0,708,709,5,
	21,0,0,709,710,5,22,0,0,710,711,5,16,0,0,711,712,3,146,73,0,712,713,3,278,
	139,0,713,714,3,148,74,0,714,29,1,0,0,0,715,716,5,94,0,0,716,718,3,224,
	112,0,717,719,5,128,0,0,718,717,1,0,0,0,718,719,1,0,0,0,719,720,1,0,0,0,
	720,721,5,115,0,0,721,722,5,21,0,0,722,723,5,22,0,0,723,724,5,16,0,0,724,
	725,3,146,73,0,725,726,3,270,135,0,726,727,3,148,74,0,727,31,1,0,0,0,728,
	730,5,151,0,0,729,728,1,0,0,0,729,730,1,0,0,0,730,731,1,0,0,0,731,732,5,
	128,0,0,732,733,7,0,0,0,733,734,3,228,114,0,734,736,5,21,0,0,735,737,3,
	266,133,0,736,735,1,0,0,0,736,737,1,0,0,0,737,738,1,0,0,0,738,739,5,22,
	0,0,739,740,5,16,0,0,740,741,3,146,73,0,741,745,3,36,18,0,742,743,3,142,
	71,0,743,744,3,250,125,0,744,746,1,0,0,0,745,742,1,0,0,0,745,746,1,0,0,
	0,746,747,1,0,0,0,747,748,3,148,74,0,748,33,1,0,0,0,749,751,5,151,0,0,750,
	749,1,0,0,0,750,751,1,0,0,0,751,752,1,0,0,0,752,753,5,128,0,0,753,754,5,
	143,0,0,754,755,3,228,114,0,755,757,5,21,0,0,756,758,3,266,133,0,757,756,
	1,0,0,0,757,758,1,0,0,0,758,759,1,0,0,0,759,760,5,22,0,0,760,761,5,16,0,
	0,761,762,3,146,73,0,762,766,3,36,18,0,763,764,3,142,71,0,764,765,3,250,
	125,0,765,767,1,0,0,0,766,763,1,0,0,0,766,767,1,0,0,0,767,768,1,0,0,0,768,
	769,3,148,74,0,769,35,1,0,0,0,770,771,5,94,0,0,771,772,7,0,0,0,772,773,
	5,86,0,0,773,774,5,16,0,0,774,775,3,146,73,0,775,776,3,38,19,0,776,777,
	3,148,74,0,777,37,1,0,0,0,778,779,6,19,-1,0,779,780,3,254,127,0,780,787,
	1,0,0,0,781,782,10,1,0,0,782,783,3,142,71,0,783,784,3,254,127,0,784,786,
	1,0,0,0,785,781,1,0,0,0,786,789,1,0,0,0,787,785,1,0,0,0,787,788,1,0,0,0,
	788,39,1,0,0,0,789,787,1,0,0,0,790,791,5,76,0,0,791,792,5,94,0,0,792,793,
	3,228,114,0,793,795,5,21,0,0,794,796,3,232,116,0,795,794,1,0,0,0,795,796,
	1,0,0,0,796,797,1,0,0,0,797,803,5,22,0,0,798,800,5,52,0,0,799,801,5,127,
	0,0,800,799,1,0,0,0,800,801,1,0,0,0,801,802,1,0,0,0,802,804,3,194,97,0,
	803,798,1,0,0,0,803,804,1,0,0,0,804,41,1,0,0,0,805,806,5,76,0,0,806,807,
	5,94,0,0,807,808,3,212,106,0,808,810,5,21,0,0,809,811,3,232,116,0,810,809,
	1,0,0,0,810,811,1,0,0,0,811,812,1,0,0,0,812,818,5,22,0,0,813,815,5,52,0,
	0,814,816,5,127,0,0,815,814,1,0,0,0,815,816,1,0,0,0,816,817,1,0,0,0,817,
	819,3,194,97,0,818,813,1,0,0,0,818,819,1,0,0,0,819,43,1,0,0,0,820,821,5,
	94,0,0,821,822,3,212,106,0,822,824,5,21,0,0,823,825,3,232,116,0,824,823,
	1,0,0,0,824,825,1,0,0,0,825,826,1,0,0,0,826,832,5,22,0,0,827,829,5,52,0,
	0,828,830,5,127,0,0,829,828,1,0,0,0,829,830,1,0,0,0,830,831,1,0,0,0,831,
	833,3,194,97,0,832,827,1,0,0,0,832,833,1,0,0,0,833,834,1,0,0,0,834,835,
	5,16,0,0,835,838,3,146,73,0,836,839,3,278,139,0,837,839,5,139,0,0,838,836,
	1,0,0,0,838,837,1,0,0,0,839,840,1,0,0,0,840,841,3,148,74,0,841,45,1,0,0,
	0,842,844,5,94,0,0,843,845,5,128,0,0,844,843,1,0,0,0,844,845,1,0,0,0,845,
	846,1,0,0,0,846,847,3,212,106,0,847,849,5,21,0,0,848,850,3,232,116,0,849,
	848,1,0,0,0,849,850,1,0,0,0,850,851,1,0,0,0,851,854,5,22,0,0,852,853,5,
	52,0,0,853,855,3,242,121,0,854,852,1,0,0,0,854,855,1,0,0,0,855,856,1,0,
	0,0,856,857,5,16,0,0,857,858,3,146,73,0,858,859,3,270,135,0,859,860,3,148,
	74,0,860,47,1,0,0,0,861,862,5,94,0,0,862,863,5,155,0,0,863,864,5,178,0,
	0,864,865,5,21,0,0,865,866,5,22,0,0,866,867,5,16,0,0,867,868,3,146,73,0,
	868,869,3,278,139,0,869,870,3,148,74,0,870,871,3,142,71,0,871,872,5,161,
	0,0,872,878,5,16,0,0,873,874,3,146,73,0,874,875,3,280,140,0,875,876,3,148,
	74,0,876,879,1,0,0,0,877,879,3,230,115,0,878,873,1,0,0,0,878,877,1,0,0,
	0,879,49,1,0,0,0,880,881,3,92,46,0,881,51,1,0,0,0,882,883,3,224,112,0,883,
	884,5,16,0,0,884,889,3,242,121,0,885,886,5,21,0,0,886,887,3,266,133,0,887,
	888,5,22,0,0,888,890,1,0,0,0,889,885,1,0,0,0,889,890,1,0,0,0,890,893,1,
	0,0,0,891,892,5,46,0,0,892,894,3,298,149,0,893,891,1,0,0,0,893,894,1,0,
	0,0,894,53,1,0,0,0,895,917,3,62,31,0,896,917,3,134,67,0,897,917,3,138,69,
	0,898,917,3,58,29,0,899,917,3,126,63,0,900,917,3,130,65,0,901,917,3,56,
	28,0,902,917,3,88,44,0,903,917,3,90,45,0,904,917,3,78,39,0,905,917,3,68,
	34,0,906,917,3,72,36,0,907,917,3,76,38,0,908,917,3,74,37,0,909,917,3,82,
	41,0,910,917,3,84,42,0,911,917,3,120,60,0,912,917,3,64,32,0,913,917,3,66,
	33,0,914,917,3,44,22,0,915,917,3,154,77,0,916,895,1,0,0,0,916,896,1,0,0,
	0,916,897,1,0,0,0,916,898,1,0,0,0,916,899,1,0,0,0,916,900,1,0,0,0,916,901,
	1,0,0,0,916,902,1,0,0,0,916,903,1,0,0,0,916,904,1,0,0,0,916,905,1,0,0,0,
	916,906,1,0,0,0,916,907,1,0,0,0,916,908,1,0,0,0,916,909,1,0,0,0,916,910,
	1,0,0,0,916,911,1,0,0,0,916,912,1,0,0,0,916,913,1,0,0,0,916,914,1,0,0,0,
	916,915,1,0,0,0,917,55,1,0,0,0,918,919,5,112,0,0,919,920,5,21,0,0,920,921,
	5,22,0,0,921,57,1,0,0,0,922,923,5,97,0,0,923,924,5,21,0,0,924,925,3,190,
	95,0,925,932,5,22,0,0,926,927,5,79,0,0,927,928,5,152,0,0,928,929,5,21,0,
	0,929,930,3,190,95,0,930,931,5,22,0,0,931,933,1,0,0,0,932,926,1,0,0,0,932,
	933,1,0,0,0,933,940,1,0,0,0,934,935,5,152,0,0,935,936,5,21,0,0,936,937,
	3,190,95,0,937,938,5,22,0,0,938,940,1,0,0,0,939,922,1,0,0,0,939,934,1,0,
	0,0,940,947,1,0,0,0,941,942,5,163,0,0,942,943,3,330,165,0,943,944,5,21,
	0,0,944,945,3,92,46,0,945,946,5,22,0,0,946,948,1,0,0,0,947,941,1,0,0,0,
	947,948,1,0,0,0,948,955,1,0,0,0,949,950,5,156,0,0,950,951,5,16,0,0,951,
	952,3,146,73,0,952,953,3,278,139,0,953,954,3,148,74,0,954,956,1,0,0,0,955,
	949,1,0,0,0,955,956,1,0,0,0,956,59,1,0,0,0,957,958,3,212,106,0,958,960,
	5,21,0,0,959,961,3,116,58,0,960,959,1,0,0,0,960,961,1,0,0,0,961,962,1,0,
	0,0,962,963,5,22,0,0,963,61,1,0,0,0,964,965,3,100,50,0,965,966,5,20,0,0,
	966,968,1,0,0,0,967,964,1,0,0,0,967,968,1,0,0,0,968,969,1,0,0,0,969,980,
	3,60,30,0,970,973,5,156,0,0,971,972,5,163,0,0,972,974,3,224,112,0,973,971,
	1,0,0,0,973,974,1,0,0,0,974,975,1,0,0,0,975,976,5,16,0,0,976,977,3,146,
	73,0,977,978,3,278,139,0,978,979,3,148,74,0,979,981,1,0,0,0,980,970,1,0,
	0,0,980,981,1,0,0,0,981,63,1,0,0,0,982,983,5,163,0,0,983,984,3,324,162,
	0,984,985,5,16,0,0,985,986,3,146,73,0,986,987,3,278,139,0,987,988,3,148,
	74,0,988,65,1,0,0,0,989,990,5,163,0,0,990,991,3,228,114,0,991,992,5,16,
	0,0,992,993,3,146,73,0,993,994,3,278,139,0,994,995,3,148,74,0,995,67,1,
	0,0,0,996,997,5,154,0,0,997,998,5,133,0,0,998,999,3,92,46,0,999,1000,5,
	16,0,0,1000,1001,3,146,73,0,1001,1009,3,282,141,0,1002,1003,3,142,71,0,
	1003,1004,5,138,0,0,1004,1005,5,16,0,0,1005,1006,3,146,73,0,1006,1007,3,
	278,139,0,1007,1008,3,148,74,0,1008,1010,1,0,0,0,1009,1002,1,0,0,0,1009,
	1010,1,0,0,0,1010,1011,1,0,0,0,1011,1012,3,148,74,0,1012,69,1,0,0,0,1013,
	1014,5,164,0,0,1014,1015,3,288,144,0,1015,1016,5,16,0,0,1016,1017,3,146,
	73,0,1017,1018,3,278,139,0,1018,1019,3,148,74,0,1019,1029,1,0,0,0,1020,
	1021,5,164,0,0,1021,1022,5,118,0,0,1022,1023,3,286,143,0,1023,1024,5,16,
	0,0,1024,1025,3,146,73,0,1025,1026,3,278,139,0,1026,1027,3,148,74,0,1027,
	1029,1,0,0,0,1028,1013,1,0,0,0,1028,1020,1,0,0,0,1029,71,1,0,0,0,1030,1031,
	5,113,0,0,1031,1034,3,224,112,0,1032,1033,5,18,0,0,1033,1035,3,224,112,
	0,1034,1032,1,0,0,0,1034,1035,1,0,0,0,1035,1036,1,0,0,0,1036,1037,5,118,
	0,0,1037,1038,3,92,46,0,1038,1039,5,16,0,0,1039,1040,3,146,73,0,1040,1041,
	3,278,139,0,1041,1042,3,148,74,0,1042,73,1,0,0,0,1043,1044,5,99,0,0,1044,
	1045,5,16,0,0,1045,1046,3,146,73,0,1046,1047,3,278,139,0,1047,1048,3,148,
	74,0,1048,1049,3,142,71,0,1049,1050,5,166,0,0,1050,1051,3,92,46,0,1051,
	75,1,0,0,0,1052,1053,5,166,0,0,1053,1054,3,92,46,0,1054,1055,5,16,0,0,1055,
	1056,3,146,73,0,1056,1057,3,278,139,0,1057,1058,3,148,74,0,1058,77,1,0,
	0,0,1059,1060,5,117,0,0,1060,1061,3,92,46,0,1061,1062,5,16,0,0,1062,1063,
	3,146,73,0,1063,1064,3,278,139,0,1064,1068,3,148,74,0,1065,1066,3,142,71,
	0,1066,1067,3,80,40,0,1067,1069,1,0,0,0,1068,1065,1,0,0,0,1068,1069,1,0,
	0,0,1069,1077,1,0,0,0,1070,1071,3,142,71,0,1071,1072,5,102,0,0,1072,1073,
	5,16,0,0,1073,1074,3,146,73,0,1074,1075,3,278,139,0,1075,1076,3,148,74,
	0,1076,1078,1,0,0,0,1077,1070,1,0,0,0,1077,1078,1,0,0,0,1078,79,1,0,0,0,
	1079,1080,6,40,-1,0,1080,1081,5,102,0,0,1081,1082,5,117,0,0,1082,1083,3,
	92,46,0,1083,1084,5,16,0,0,1084,1085,3,146,73,0,1085,1086,3,278,139,0,1086,
	1087,3,148,74,0,1087,1100,1,0,0,0,1088,1089,10,1,0,0,1089,1090,3,142,71,
	0,1090,1091,5,102,0,0,1091,1092,5,117,0,0,1092,1093,3,92,46,0,1093,1094,
	5,16,0,0,1094,1095,3,146,73,0,1095,1096,3,278,139,0,1096,1097,3,148,74,
	0,1097,1099,1,0,0,0,1098,1088,1,0,0,0,1099,1102,1,0,0,0,1100,1098,1,0,0,
	0,1100,1101,1,0,0,0,1101,81,1,0,0,0,1102,1100,1,0,0,0,1103,1104,5,140,0,
	0,1104,1105,3,92,46,0,1105,83,1,0,0,0,1106,1107,5,160,0,0,1107,1108,3,224,
	112,0,1108,1109,5,16,0,0,1109,1110,3,146,73,0,1110,1111,3,278,139,0,1111,
	1112,3,148,74,0,1112,1114,3,140,70,0,1113,1115,3,284,142,0,1114,1113,1,
	0,0,0,1114,1115,1,0,0,0,1115,1123,1,0,0,0,1116,1117,5,105,0,0,1117,1118,
	5,16,0,0,1118,1119,3,146,73,0,1119,1120,3,278,139,0,1120,1121,3,148,74,
	0,1121,1122,3,140,70,0,1122,1124,1,0,0,0,1123,1116,1,0,0,0,1123,1124,1,
	0,0,0,1124,1132,1,0,0,0,1125,1126,5,111,0,0,1126,1127,5,16,0,0,1127,1128,
	3,146,73,0,1128,1129,3,278,139,0,1129,1130,3,148,74,0,1130,1131,3,140,70,
	0,1131,1133,1,0,0,0,1132,1125,1,0,0,0,1132,1133,1,0,0,0,1133,1134,1,0,0,
	0,1134,1135,3,140,70,0,1135,85,1,0,0,0,1136,1137,5,105,0,0,1137,1138,3,
	230,115,0,1138,1139,5,16,0,0,1139,1140,3,146,73,0,1140,1141,3,278,139,0,
	1141,1142,3,148,74,0,1142,1143,3,140,70,0,1143,1156,1,0,0,0,1144,1145,5,
	105,0,0,1145,1146,5,118,0,0,1146,1147,5,23,0,0,1147,1148,3,182,91,0,1148,
	1149,5,24,0,0,1149,1150,5,16,0,0,1150,1151,3,146,73,0,1151,1152,3,278,139,
	0,1152,1153,3,148,74,0,1153,1154,3,140,70,0,1154,1156,1,0,0,0,1155,1136,
	1,0,0,0,1155,1144,1,0,0,0,1156,87,1,0,0,0,1157,1158,5,87,0,0,1158,89,1,
	0,0,0,1159,1161,5,144,0,0,1160,1162,3,92,46,0,1161,1160,1,0,0,0,1161,1162,
	1,0,0,0,1162,91,1,0,0,0,1163,1164,6,46,-1,0,1164,1185,3,514,257,0,1165,
	1185,3,482,241,0,1166,1185,3,100,50,0,1167,1185,3,102,51,0,1168,1185,3,
	332,166,0,1169,1170,5,34,0,0,1170,1185,3,92,46,23,1171,1172,5,130,0,0,1172,
	1185,3,92,46,22,1173,1174,5,66,0,0,1174,1175,5,21,0,0,1175,1176,3,92,46,
	0,1176,1177,5,22,0,0,1177,1185,1,0,0,0,1178,1179,5,106,0,0,1179,1180,5,
	21,0,0,1180,1181,3,224,112,0,1181,1182,5,22,0,0,1182,1185,1,0,0,0,1183,
	1185,3,96,48,0,1184,1163,1,0,0,0,1184,1165,1,0,0,0,1184,1166,1,0,0,0,1184,
	1167,1,0,0,0,1184,1168,1,0,0,0,1184,1169,1,0,0,0,1184,1171,1,0,0,0,1184,
	1173,1,0,0,0,1184,1178,1,0,0,0,1184,1183,1,0,0,0,1185,1278,1,0,0,0,1186,
	1187,10,20,0,0,1187,1188,3,368,184,0,1188,1189,3,92,46,21,1189,1277,1,0,
	0,0,1190,1191,10,19,0,0,1191,1192,3,370,185,0,1192,1193,3,92,46,20,1193,
	1277,1,0,0,0,1194,1195,10,18,0,0,1195,1196,3,374,187,0,1196,1197,3,92,46,
	19,1197,1277,1,0,0,0,1198,1199,10,17,0,0,1199,1200,3,372,186,0,1200,1201,
	3,92,46,18,1201,1277,1,0,0,0,1202,1203,10,16,0,0,1203,1204,7,1,0,0,1204,
	1277,3,92,46,17,1205,1206,10,15,0,0,1206,1207,7,2,0,0,1207,1277,3,92,46,
	16,1208,1209,10,13,0,0,1209,1210,7,3,0,0,1210,1277,3,92,46,14,1211,1213,
	10,12,0,0,1212,1214,5,130,0,0,1213,1212,1,0,0,0,1213,1214,1,0,0,0,1214,
	1215,1,0,0,0,1215,1216,5,93,0,0,1216,1277,3,92,46,13,1217,1219,10,11,0,
	0,1218,1220,5,130,0,0,1219,1218,1,0,0,0,1219,1220,1,0,0,0,1220,1221,1,0,
	0,0,1221,1222,5,118,0,0,1222,1277,3,92,46,12,1223,1225,10,10,0,0,1224,1226,
	5,130,0,0,1225,1224,1,0,0,0,1225,1226,1,0,0,0,1226,1227,1,0,0,0,1227,1228,
	5,116,0,0,1228,1277,3,92,46,11,1229,1230,10,7,0,0,1230,1231,5,136,0,0,1231,
	1277,3,92,46,8,1232,1233,10,6,0,0,1233,1234,5,79,0,0,1234,1277,3,92,46,
	7,1235,1236,10,5,0,0,1236,1237,5,117,0,0,1237,1238,3,92,46,0,1238,1239,
	5,102,0,0,1239,1240,3,92,46,6,1240,1277,1,0,0,0,1241,1242,10,1,0,0,1242,
	1243,5,113,0,0,1243,1244,5,101,0,0,1244,1245,3,224,112,0,1245,1246,5,118,
	0,0,1246,1247,3,92,46,2,1247,1277,1,0,0,0,1248,1249,10,24,0,0,1249,1277,
	3,122,61,0,1250,1251,10,21,0,0,1251,1253,5,81,0,0,1252,1254,5,127,0,0,1253,
	1252,1,0,0,0,1253,1254,1,0,0,0,1254,1255,1,0,0,0,1255,1277,3,242,121,0,
	1256,1257,10,14,0,0,1257,1259,5,122,0,0,1258,1260,5,130,0,0,1259,1258,1,
	0,0,0,1259,1260,1,0,0,0,1260,1261,1,0,0,0,1261,1277,3,328,164,0,1262,1264,
	10,9,0,0,1263,1265,5,130,0,0,1264,1263,1,0,0,0,1264,1265,1,0,0,0,1265,1266,
	1,0,0,0,1266,1267,5,116,0,0,1267,1268,5,77,0,0,1268,1277,3,94,47,0,1269,
	1271,10,8,0,0,1270,1272,5,130,0,0,1271,1270,1,0,0,0,1271,1272,1,0,0,0,1272,
	1273,1,0,0,0,1273,1274,5,116,0,0,1274,1275,5,80,0,0,1275,1277,3,94,47,0,
	1276,1186,1,0,0,0,1276,1190,1,0,0,0,1276,1194,1,0,0,0,1276,1198,1,0,0,0,
	1276,1202,1,0,0,0,1276,1205,1,0,0,0,1276,1208,1,0,0,0,1276,1211,1,0,0,0,
	1276,1217,1,0,0,0,1276,1223,1,0,0,0,1276,1229,1,0,0,0,1276,1232,1,0,0,0,
	1276,1235,1,0,0,0,1276,1241,1,0,0,0,1276,1248,1,0,0,0,1276,1250,1,0,0,0,
	1276,1256,1,0,0,0,1276,1262,1,0,0,0,1276,1269,1,0,0,0,1277,1280,1,0,0,0,
	1278,1276,1,0,0,0,1278,1279,1,0,0,0,1279,93,1,0,0,0,1280,1278,1,0,0,0,1281,
	1282,5,165,0,0,1282,1289,3,332,166,0,1283,1284,3,224,112,0,1284,1285,5,
	165,0,0,1285,1286,3,92,46,0,1286,1289,1,0,0,0,1287,1289,3,92,46,0,1288,
	1281,1,0,0,0,1288,1283,1,0,0,0,1288,1287,1,0,0,0,1289,95,1,0,0,0,1290,1291,
	3,228,114,0,1291,97,1,0,0,0,1292,1299,3,104,52,0,1293,1299,3,296,148,0,
	1294,1299,3,298,149,0,1295,1299,3,220,110,0,1296,1299,3,292,146,0,1297,
	1299,3,294,147,0,1298,1292,1,0,0,0,1298,1293,1,0,0,0,1298,1294,1,0,0,0,
	1298,1295,1,0,0,0,1298,1296,1,0,0,0,1298,1297,1,0,0,0,1299,99,1,0,0,0,1300,
	1301,6,50,-1,0,1301,1302,3,98,49,0,1302,1307,1,0,0,0,1303,1304,10,1,0,0,
	1304,1306,3,106,53,0,1305,1303,1,0,0,0,1306,1309,1,0,0,0,1307,1305,1,0,
	0,0,1307,1308,1,0,0,0,1308,101,1,0,0,0,1309,1307,1,0,0,0,1310,1311,6,51,
	-1,0,1311,1312,5,127,0,0,1312,1313,3,220,110,0,1313,1318,1,0,0,0,1314,1315,
	10,1,0,0,1315,1317,3,106,53,0,1316,1314,1,0,0,0,1317,1320,1,0,0,0,1318,
	1316,1,0,0,0,1318,1319,1,0,0,0,1319,103,1,0,0,0,1320,1318,1,0,0,0,1321,
	1331,3,108,54,0,1322,1331,3,110,55,0,1323,1331,3,124,62,0,1324,1331,3,340,
	170,0,1325,1331,3,342,171,0,1326,1331,3,344,172,0,1327,1331,3,132,66,0,
	1328,1331,3,60,30,0,1329,1331,3,112,56,0,1330,1321,1,0,0,0,1330,1322,1,
	0,0,0,1330,1323,1,0,0,0,1330,1324,1,0,0,0,1330,1325,1,0,0,0,1330,1326,1,
	0,0,0,1330,1327,1,0,0,0,1330,1328,1,0,0,0,1330,1329,1,0,0,0,1331,105,1,
	0,0,0,1332,1333,5,20,0,0,1333,1345,3,222,111,0,1334,1335,5,20,0,0,1335,
	1345,3,60,30,0,1336,1337,5,23,0,0,1337,1338,3,322,161,0,1338,1339,5,24,
	0,0,1339,1345,1,0,0,0,1340,1341,5,23,0,0,1341,1342,3,92,46,0,1342,1343,
	5,24,0,0,1343,1345,1,0,0,0,1344,1332,1,0,0,0,1344,1334,1,0,0,0,1344,1336,
	1,0,0,0,1344,1340,1,0,0,0,1345,107,1,0,0,0,1346,1347,5,68,0,0,1347,1349,
	5,21,0,0,1348,1350,3,92,46,0,1349,1348,1,0,0,0,1349,1350,1,0,0,0,1350,1351,
	1,0,0,0,1351,1352,5,22,0,0,1352,109,1,0,0,0,1353,1354,5,67,0,0,1354,1358,
	5,21,0,0,1355,1356,5,114,0,0,1356,1357,5,46,0,0,1357,1359,3,92,46,0,1358,
	1355,1,0,0,0,1358,1359,1,0,0,0,1359,1360,1,0,0,0,1360,1361,5,22,0,0,1361,
	111,1,0,0,0,1362,1363,3,202,101,0,1363,1364,5,21,0,0,1364,1367,3,114,57,
	0,1365,1366,5,18,0,0,1366,1368,3,116,58,0,1367,1365,1,0,0,0,1367,1368,1,
	0,0,0,1368,1369,1,0,0,0,1369,1370,5,22,0,0,1370,1379,1,0,0,0,1371,1372,
	3,202,101,0,1372,1374,5,21,0,0,1373,1375,3,116,58,0,1374,1373,1,0,0,0,1374,
	1375,1,0,0,0,1375,1376,1,0,0,0,1376,1377,5,22,0,0,1377,1379,1,0,0,0,1378,
	1362,1,0,0,0,1378,1371,1,0,0,0,1379,113,1,0,0,0,1380,1381,5,114,0,0,1381,
	1382,3,366,183,0,1382,1383,3,92,46,0,1383,1384,4,57,23,1,1384,115,1,0,0,
	0,1385,1386,6,58,-1,0,1386,1387,3,92,46,0,1387,1388,4,58,24,1,1388,1391,
	1,0,0,0,1389,1391,3,118,59,0,1390,1385,1,0,0,0,1390,1389,1,0,0,0,1391,1397,
	1,0,0,0,1392,1393,10,1,0,0,1393,1394,5,18,0,0,1394,1396,3,118,59,0,1395,
	1392,1,0,0,0,1396,1399,1,0,0,0,1397,1395,1,0,0,0,1397,1398,1,0,0,0,1398,
	117,1,0,0,0,1399,1397,1,0,0,0,1400,1404,3,224,112,0,1401,1402,3,366,183,
	0,1402,1403,3,92,46,0,1403,1405,1,0,0,0,1404,1401,1,0,0,0,1404,1405,1,0,
	0,0,1405,119,1,0,0,0,1406,1407,5,167,0,0,1407,1408,3,92,46,0,1408,1409,
	5,159,0,0,1409,1411,3,92,46,0,1410,1412,3,128,64,0,1411,1410,1,0,0,0,1411,
	1412,1,0,0,0,1412,121,1,0,0,0,1413,1416,5,110,0,0,1414,1415,5,163,0,0,1415,
	1417,3,224,112,0,1416,1414,1,0,0,0,1416,1417,1,0,0,0,1417,1418,1,0,0,0,
	1418,1419,5,165,0,0,1419,1420,3,92,46,0,1420,123,1,0,0,0,1421,1422,5,109,
	0,0,1422,1424,5,134,0,0,1423,1425,3,202,101,0,1424,1423,1,0,0,0,1424,1425,
	1,0,0,0,1425,1426,1,0,0,0,1426,1427,5,165,0,0,1427,1430,3,92,46,0,1428,
	1429,5,119,0,0,1429,1431,3,350,175,0,1430,1428,1,0,0,0,1430,1431,1,0,0,
	0,1431,1460,1,0,0,0,1432,1439,5,109,0,0,1433,1440,5,77,0,0,1434,1435,5,
	146,0,0,1435,1436,3,92,46,0,1436,1437,5,159,0,0,1437,1438,3,92,46,0,1438,
	1440,1,0,0,0,1439,1433,1,0,0,0,1439,1434,1,0,0,0,1440,1441,1,0,0,0,1441,
	1443,5,21,0,0,1442,1444,3,202,101,0,1443,1442,1,0,0,0,1443,1444,1,0,0,0,
	1444,1445,1,0,0,0,1445,1448,5,22,0,0,1446,1447,5,165,0,0,1447,1449,3,92,
	46,0,1448,1446,1,0,0,0,1448,1449,1,0,0,0,1449,1452,1,0,0,0,1450,1451,5,
	119,0,0,1451,1453,3,350,175,0,1452,1450,1,0,0,0,1452,1453,1,0,0,0,1453,
	1457,1,0,0,0,1454,1455,5,137,0,0,1455,1456,5,88,0,0,1456,1458,3,346,173,
	0,1457,1454,1,0,0,0,1457,1458,1,0,0,0,1458,1460,1,0,0,0,1459,1421,1,0,0,
	0,1459,1432,1,0,0,0,1460,125,1,0,0,0,1461,1462,5,109,0,0,1462,1464,5,134,
	0,0,1463,1465,3,202,101,0,1464,1463,1,0,0,0,1464,1465,1,0,0,0,1465,1466,
	1,0,0,0,1466,1467,5,165,0,0,1467,1470,3,92,46,0,1468,1469,5,119,0,0,1469,
	1471,3,350,175,0,1470,1468,1,0,0,0,1470,1471,1,0,0,0,1471,1472,1,0,0,0,
	1472,1473,3,128,64,0,1473,1503,1,0,0,0,1474,1481,5,109,0,0,1475,1482,5,
	77,0,0,1476,1477,5,146,0,0,1477,1478,3,92,46,0,1478,1479,5,159,0,0,1479,
	1480,3,92,46,0,1480,1482,1,0,0,0,1481,1475,1,0,0,0,1481,1476,1,0,0,0,1482,
	1483,1,0,0,0,1483,1485,5,21,0,0,1484,1486,3,202,101,0,1485,1484,1,0,0,0,
	1485,1486,1,0,0,0,1486,1487,1,0,0,0,1487,1490,5,22,0,0,1488,1489,5,165,
	0,0,1489,1491,3,92,46,0,1490,1488,1,0,0,0,1490,1491,1,0,0,0,1491,1494,1,
	0,0,0,1492,1493,5,119,0,0,1493,1495,3,350,175,0,1494,1492,1,0,0,0,1494,
	1495,1,0,0,0,1495,1499,1,0,0,0,1496,1497,5,137,0,0,1497,1498,5,88,0,0,1498,
	1500,3,346,173,0,1499,1496,1,0,0,0,1499,1500,1,0,0,0,1500,1501,1,0,0,0,
	1501,1503,3,128,64,0,1502,1461,1,0,0,0,1502,1474,1,0,0,0,1503,127,1,0,0,
	0,1504,1505,5,156,0,0,1505,1506,5,163,0,0,1506,1507,3,224,112,0,1507,1508,
	5,16,0,0,1508,1509,3,146,73,0,1509,1510,3,278,139,0,1510,1511,3,148,74,
	0,1511,129,1,0,0,0,1512,1513,5,141,0,0,1513,1514,5,77,0,0,1514,1515,5,114,
	0,0,1515,1516,3,92,46,0,1516,1517,3,128,64,0,1517,131,1,0,0,0,1518,1520,
	5,150,0,0,1519,1521,5,98,0,0,1520,1519,1,0,0,0,1520,1521,1,0,0,0,1521,1522,
	1,0,0,0,1522,1523,5,21,0,0,1523,1529,3,100,50,0,1524,1525,5,18,0,0,1525,
	1526,3,358,179,0,1526,1527,5,46,0,0,1527,1528,3,338,169,0,1528,1530,1,0,
	0,0,1529,1524,1,0,0,0,1529,1530,1,0,0,0,1530,1531,1,0,0,0,1531,1532,5,22,
	0,0,1532,133,1,0,0,0,1533,1534,3,326,163,0,1534,1535,3,366,183,0,1535,1536,
	3,92,46,0,1536,135,1,0,0,0,1537,1538,4,68,26,1,1538,1539,5,20,0,0,1539,
	1546,3,224,112,0,1540,1541,4,68,27,1,1541,1542,5,23,0,0,1542,1543,3,92,
	46,0,1543,1544,5,24,0,0,1544,1546,1,0,0,0,1545,1537,1,0,0,0,1545,1540,1,
	0,0,0,1546,137,1,0,0,0,1547,1548,3,264,132,0,1548,1549,3,366,183,0,1549,
	1550,3,92,46,0,1550,139,1,0,0,0,1551,1553,5,5,0,0,1552,1551,1,0,0,0,1553,
	1556,1,0,0,0,1554,1552,1,0,0,0,1554,1555,1,0,0,0,1555,141,1,0,0,0,1556,
	1554,1,0,0,0,1557,1559,5,5,0,0,1558,1557,1,0,0,0,1559,1560,1,0,0,0,1560,
	1558,1,0,0,0,1560,1561,1,0,0,0,1561,143,1,0,0,0,1562,1564,7,4,0,0,1563,
	1562,1,0,0,0,1564,1567,1,0,0,0,1565,1563,1,0,0,0,1565,1566,1,0,0,0,1566,
	145,1,0,0,0,1567,1565,1,0,0,0,1568,1570,5,5,0,0,1569,1568,1,0,0,0,1570,
	1571,1,0,0,0,1571,1569,1,0,0,0,1571,1572,1,0,0,0,1572,1573,1,0,0,0,1573,
	1574,5,1,0,0,1574,147,1,0,0,0,1575,1577,5,5,0,0,1576,1575,1,0,0,0,1577,
	1580,1,0,0,0,1578,1576,1,0,0,0,1578,1579,1,0,0,0,1579,1581,1,0,0,0,1580,
	1578,1,0,0,0,1581,1582,5,2,0,0,1582,149,1,0,0,0,1583,1584,3,242,121,0,1584,
	151,1,0,0,0,1585,1586,5,129,0,0,1586,153,1,0,0,0,1587,1589,7,5,0,0,1588,
	1590,9,0,0,0,1589,1588,1,0,0,0,1590,1591,1,0,0,0,1591,1592,1,0,0,0,1591,
	1589,1,0,0,0,1592,155,1,0,0,0,1593,1597,3,162,81,0,1594,1597,3,54,27,0,
	1595,1597,3,92,46,0,1596,1593,1,0,0,0,1596,1594,1,0,0,0,1596,1595,1,0,0,
	0,1597,157,1,0,0,0,1598,1600,3,140,70,0,1599,1601,3,160,80,0,1600,1599,
	1,0,0,0,1600,1601,1,0,0,0,1601,1602,1,0,0,0,1602,1603,3,140,70,0,1603,1604,
	5,0,0,1,1604,159,1,0,0,0,1605,1611,3,162,81,0,1606,1607,3,142,71,0,1607,
	1608,3,162,81,0,1608,1610,1,0,0,0,1609,1606,1,0,0,0,1610,1613,1,0,0,0,1611,
	1609,1,0,0,0,1611,1612,1,0,0,0,1612,161,1,0,0,0,1613,1611,1,0,0,0,1614,
	1615,3,154,77,0,1615,1616,3,142,71,0,1616,1618,1,0,0,0,1617,1614,1,0,0,
	0,1618,1621,1,0,0,0,1619,1617,1,0,0,0,1619,1620,1,0,0,0,1620,1627,1,0,0,
	0,1621,1619,1,0,0,0,1622,1623,3,164,82,0,1623,1624,3,142,71,0,1624,1626,
	1,0,0,0,1625,1622,1,0,0,0,1626,1629,1,0,0,0,1627,1625,1,0,0,0,1627,1628,
	1,0,0,0,1628,1636,1,0,0,0,1629,1627,1,0,0,0,1630,1637,3,8,4,0,1631,1637,
	3,206,103,0,1632,1637,3,174,87,0,1633,1637,3,176,88,0,1634,1637,3,208,104,
	0,1635,1637,3,268,134,0,1636,1630,1,0,0,0,1636,1631,1,0,0,0,1636,1632,1,
	0,0,0,1636,1633,1,0,0,0,1636,1634,1,0,0,0,1636,1635,1,0,0,0,1637,163,1,
	0,0,0,1638,1653,3,166,83,0,1639,1649,5,21,0,0,1640,1650,3,172,86,0,1641,
	1646,3,168,84,0,1642,1643,5,18,0,0,1643,1645,3,168,84,0,1644,1642,1,0,0,
	0,1645,1648,1,0,0,0,1646,1644,1,0,0,0,1646,1647,1,0,0,0,1647,1650,1,0,0,
	0,1648,1646,1,0,0,0,1649,1640,1,0,0,0,1649,1641,1,0,0,0,1650,1651,1,0,0,
	0,1651,1652,5,22,0,0,1652,1654,1,0,0,0,1653,1639,1,0,0,0,1653,1654,1,0,
	0,0,1654,165,1,0,0,0,1655,1656,5,177,0,0,1656,167,1,0,0,0,1657,1658,3,170,
	85,0,1658,1659,5,46,0,0,1659,1660,3,172,86,0,1660,169,1,0,0,0,1661,1662,
	7,6,0,0,1662,171,1,0,0,0,1663,1666,3,298,149,0,1664,1666,3,196,98,0,1665,
	1663,1,0,0,0,1665,1664,1,0,0,0,1666,173,1,0,0,0,1667,1668,3,34,17,0,1668,
	175,1,0,0,0,1669,1672,3,0,0,0,1670,1672,3,2,1,0,1671,1669,1,0,0,0,1671,
	1670,1,0,0,0,1672,177,1,0,0,0,1673,1679,3,4,2,0,1674,1675,3,142,71,0,1675,
	1676,3,4,2,0,1676,1678,1,0,0,0,1677,1674,1,0,0,0,1678,1681,1,0,0,0,1679,
	1677,1,0,0,0,1679,1680,1,0,0,0,1680,179,1,0,0,0,1681,1679,1,0,0,0,1682,
	1688,3,6,3,0,1683,1684,3,142,71,0,1684,1685,3,6,3,0,1685,1687,1,0,0,0,1686,
	1683,1,0,0,0,1687,1690,1,0,0,0,1688,1686,1,0,0,0,1688,1689,1,0,0,0,1689,
	181,1,0,0,0,1690,1688,1,0,0,0,1691,1696,3,230,115,0,1692,1693,5,18,0,0,
	1693,1695,3,230,115,0,1694,1692,1,0,0,0,1695,1698,1,0,0,0,1696,1694,1,0,
	0,0,1696,1697,1,0,0,0,1697,183,1,0,0,0,1698,1696,1,0,0,0,1699,1700,5,118,
	0,0,1700,1710,3,186,93,0,1701,1702,5,118,0,0,1702,1710,3,188,94,0,1703,
	1704,5,118,0,0,1704,1710,3,192,96,0,1705,1706,5,123,0,0,1706,1710,5,178,
	0,0,1707,1708,5,123,0,0,1708,1710,3,92,46,0,1709,1699,1,0,0,0,1709,1701,
	1,0,0,0,1709,1703,1,0,0,0,1709,1705,1,0,0,0,1709,1707,1,0,0,0,1710,185,
	1,0,0,0,1711,1713,5,127,0,0,1712,1711,1,0,0,0,1712,1713,1,0,0,0,1713,1714,
	1,0,0,0,1714,1716,5,23,0,0,1715,1717,3,190,95,0,1716,1715,1,0,0,0,1716,
	1717,1,0,0,0,1717,1718,1,0,0,0,1718,1719,5,24,0,0,1719,187,1,0,0,0,1720,
	1722,5,127,0,0,1721,1720,1,0,0,0,1721,1722,1,0,0,0,1722,1723,1,0,0,0,1723,
	1725,5,42,0,0,1724,1726,3,190,95,0,1725,1724,1,0,0,0,1725,1726,1,0,0,0,
	1726,1727,1,0,0,0,1727,1728,5,40,0,0,1728,189,1,0,0,0,1729,1734,3,92,46,
	0,1730,1731,5,18,0,0,1731,1733,3,92,46,0,1732,1730,1,0,0,0,1733,1736,1,
	0,0,0,1734,1732,1,0,0,0,1734,1735,1,0,0,0,1735,191,1,0,0,0,1736,1734,1,
	0,0,0,1737,1738,5,23,0,0,1738,1739,3,92,46,0,1739,1740,5,19,0,0,1740,1741,
	3,92,46,0,1741,1742,5,24,0,0,1742,193,1,0,0,0,1743,1744,6,97,-1,0,1744,
	1761,3,196,98,0,1745,1746,5,73,0,0,1746,1747,5,42,0,0,1747,1748,3,194,97,
	0,1748,1749,5,40,0,0,1749,1761,1,0,0,0,1750,1751,5,72,0,0,1751,1752,5,42,
	0,0,1752,1753,3,194,97,0,1753,1754,5,40,0,0,1754,1761,1,0,0,0,1755,1756,
	5,75,0,0,1756,1757,5,42,0,0,1757,1758,3,194,97,0,1758,1759,5,40,0,0,1759,
	1761,1,0,0,0,1760,1743,1,0,0,0,1760,1745,1,0,0,0,1760,1750,1,0,0,0,1760,
	1755,1,0,0,0,1761,1771,1,0,0,0,1762,1763,10,6,0,0,1763,1770,5,44,0,0,1764,
	1765,10,5,0,0,1765,1766,5,23,0,0,1766,1770,5,24,0,0,1767,1768,10,4,0,0,
	1768,1770,5,45,0,0,1769,1762,1,0,0,0,1769,1764,1,0,0,0,1769,1767,1,0,0,
	0,1770,1773,1,0,0,0,1771,1769,1,0,0,0,1771,1772,1,0,0,0,1772,195,1,0,0,
	0,1773,1771,1,0,0,0,1774,1777,3,198,99,0,1775,1777,3,200,100,0,1776,1774,
	1,0,0,0,1776,1775,1,0,0,0,1777,197,1,0,0,0,1778,1797,5,54,0,0,1779,1797,
	5,55,0,0,1780,1797,5,56,0,0,1781,1797,5,57,0,0,1782,1797,5,69,0,0,1783,
	1797,5,58,0,0,1784,1797,5,59,0,0,1785,1797,5,67,0,0,1786,1797,5,60,0,0,
	1787,1797,5,62,0,0,1788,1797,5,61,0,0,1789,1797,5,63,0,0,1790,1797,5,64,
	0,0,1791,1797,5,66,0,0,1792,1797,5,68,0,0,1793,1797,5,70,0,0,1794,1797,
	5,71,0,0,1795,1797,5,74,0,0,1796,1778,1,0,0,0,1796,1779,1,0,0,0,1796,1780,
	1,0,0,0,1796,1781,1,0,0,0,1796,1782,1,0,0,0,1796,1783,1,0,0,0,1796,1784,
	1,0,0,0,1796,1785,1,0,0,0,1796,1786,1,0,0,0,1796,1787,1,0,0,0,1796,1788,
	1,0,0,0,1796,1789,1,0,0,0,1796,1790,1,0,0,0,1796,1791,1,0,0,0,1796,1792,
	1,0,0,0,1796,1793,1,0,0,0,1796,1794,1,0,0,0,1796,1795,1,0,0,0,1797,199,
	1,0,0,0,1798,1799,5,173,0,0,1799,201,1,0,0,0,1800,1802,5,127,0,0,1801,1800,
	1,0,0,0,1801,1802,1,0,0,0,1802,1803,1,0,0,0,1803,1804,3,200,100,0,1804,
	203,1,0,0,0,1805,1806,5,66,0,0,1806,205,1,0,0,0,1807,1811,3,16,8,0,1808,
	1811,3,32,16,0,1809,1811,3,18,9,0,1810,1807,1,0,0,0,1810,1808,1,0,0,0,1810,
	1809,1,0,0,0,1811,207,1,0,0,0,1812,1815,3,12,6,0,1813,1815,3,14,7,0,1814,
	1812,1,0,0,0,1814,1813,1,0,0,0,1815,209,1,0,0,0,1816,1821,3,228,114,0,1817,
	1818,5,18,0,0,1818,1820,3,228,114,0,1819,1817,1,0,0,0,1820,1823,1,0,0,0,
	1821,1819,1,0,0,0,1821,1822,1,0,0,0,1822,211,1,0,0,0,1823,1821,1,0,0,0,
	1824,1827,3,224,112,0,1825,1827,3,228,114,0,1826,1824,1,0,0,0,1826,1825,
	1,0,0,0,1827,213,1,0,0,0,1828,1831,3,220,110,0,1829,1831,3,354,177,0,1830,
	1828,1,0,0,0,1830,1829,1,0,0,0,1831,215,1,0,0,0,1832,1833,4,108,31,1,1833,
	1834,5,34,0,0,1834,1835,3,218,109,0,1835,217,1,0,0,0,1836,1837,4,109,32,
	1,1837,1838,3,214,107,0,1838,219,1,0,0,0,1839,1843,3,224,112,0,1840,1843,
	3,228,114,0,1841,1843,3,230,115,0,1842,1839,1,0,0,0,1842,1840,1,0,0,0,1842,
	1841,1,0,0,0,1843,221,1,0,0,0,1844,1845,7,7,0,0,1845,223,1,0,0,0,1846,1847,
	7,8,0,0,1847,225,1,0,0,0,1848,1849,7,9,0,0,1849,227,1,0,0,0,1850,1851,5,
	173,0,0,1851,229,1,0,0,0,1852,1853,5,172,0,0,1853,231,1,0,0,0,1854,1859,
	3,234,117,0,1855,1856,5,18,0,0,1856,1858,3,234,117,0,1857,1855,1,0,0,0,
	1858,1861,1,0,0,0,1859,1857,1,0,0,0,1859,1860,1,0,0,0,1860,233,1,0,0,0,
	1861,1859,1,0,0,0,1862,1868,3,240,120,0,1863,1865,5,127,0,0,1864,1863,1,
	0,0,0,1864,1865,1,0,0,0,1865,1866,1,0,0,0,1866,1868,3,236,118,0,1867,1862,
	1,0,0,0,1867,1864,1,0,0,0,1868,235,1,0,0,0,1869,1872,3,238,119,0,1870,1872,
	3,52,26,0,1871,1869,1,0,0,0,1871,1870,1,0,0,0,1872,237,1,0,0,0,1873,1876,
	3,224,112,0,1874,1875,5,46,0,0,1875,1877,3,298,149,0,1876,1874,1,0,0,0,
	1876,1877,1,0,0,0,1877,239,1,0,0,0,1878,1879,3,204,102,0,1879,1880,3,224,
	112,0,1880,241,1,0,0,0,1881,1884,3,194,97,0,1882,1884,3,244,122,0,1883,
	1881,1,0,0,0,1883,1882,1,0,0,0,1884,243,1,0,0,0,1885,1886,6,122,-1,0,1886,
	1887,5,80,0,0,1887,1896,1,0,0,0,1888,1889,10,2,0,0,1889,1890,5,23,0,0,1890,
	1895,5,24,0,0,1891,1892,10,1,0,0,1892,1893,5,25,0,0,1893,1895,5,26,0,0,
	1894,1888,1,0,0,0,1894,1891,1,0,0,0,1895,1898,1,0,0,0,1896,1894,1,0,0,0,
	1896,1897,1,0,0,0,1897,245,1,0,0,0,1898,1896,1,0,0,0,1899,1905,3,248,124,
	0,1900,1901,3,142,71,0,1901,1902,3,248,124,0,1902,1904,1,0,0,0,1903,1900,
	1,0,0,0,1904,1907,1,0,0,0,1905,1903,1,0,0,0,1905,1906,1,0,0,0,1906,247,
	1,0,0,0,1907,1905,1,0,0,0,1908,1909,3,154,77,0,1909,1910,3,142,71,0,1910,
	1912,1,0,0,0,1911,1908,1,0,0,0,1912,1915,1,0,0,0,1913,1911,1,0,0,0,1913,
	1914,1,0,0,0,1914,1921,1,0,0,0,1915,1913,1,0,0,0,1916,1917,3,164,82,0,1917,
	1918,3,142,71,0,1918,1920,1,0,0,0,1919,1916,1,0,0,0,1920,1923,1,0,0,0,1921,
	1919,1,0,0,0,1921,1922,1,0,0,0,1922,1929,1,0,0,0,1923,1921,1,0,0,0,1924,
	1930,3,24,12,0,1925,1930,3,28,14,0,1926,1930,3,44,22,0,1927,1930,3,42,21,
	0,1928,1930,3,22,11,0,1929,1924,1,0,0,0,1929,1925,1,0,0,0,1929,1926,1,0,
	0,0,1929,1927,1,0,0,0,1929,1928,1,0,0,0,1930,249,1,0,0,0,1931,1937,3,252,
	126,0,1932,1933,3,142,71,0,1933,1934,3,252,126,0,1934,1936,1,0,0,0,1935,
	1932,1,0,0,0,1936,1939,1,0,0,0,1937,1935,1,0,0,0,1937,1938,1,0,0,0,1938,
	251,1,0,0,0,1939,1937,1,0,0,0,1940,1941,3,154,77,0,1941,1942,3,142,71,0,
	1942,1944,1,0,0,0,1943,1940,1,0,0,0,1944,1947,1,0,0,0,1945,1943,1,0,0,0,
	1945,1946,1,0,0,0,1946,1953,1,0,0,0,1947,1945,1,0,0,0,1948,1949,3,164,82,
	0,1949,1950,3,142,71,0,1950,1952,1,0,0,0,1951,1948,1,0,0,0,1952,1955,1,
	0,0,0,1953,1951,1,0,0,0,1953,1954,1,0,0,0,1954,1959,1,0,0,0,1955,1953,1,
	0,0,0,1956,1960,3,30,15,0,1957,1960,3,26,13,0,1958,1960,3,46,23,0,1959,
	1956,1,0,0,0,1959,1957,1,0,0,0,1959,1958,1,0,0,0,1960,253,1,0,0,0,1961,
	1962,5,10,0,0,1962,1972,3,450,225,0,1963,1964,5,11,0,0,1964,1972,3,476,
	238,0,1965,1966,5,12,0,0,1966,1972,3,256,128,0,1967,1968,5,13,0,0,1968,
	1972,3,256,128,0,1969,1970,5,14,0,0,1970,1972,3,260,130,0,1971,1961,1,0,
	0,0,1971,1963,1,0,0,0,1971,1965,1,0,0,0,1971,1967,1,0,0,0,1971,1969,1,0,
	0,0,1972,255,1,0,0,0,1973,1975,3,220,110,0,1974,1976,3,258,129,0,1975,1974,
	1,0,0,0,1975,1976,1,0,0,0,1976,257,1,0,0,0,1977,1978,5,114,0,0,1978,1979,
	3,360,180,0,1979,1980,5,16,0,0,1980,1985,3,426,213,0,1981,1982,5,20,0,0,
	1982,1984,3,426,213,0,1983,1981,1,0,0,0,1984,1987,1,0,0,0,1985,1983,1,0,
	0,0,1985,1986,1,0,0,0,1986,259,1,0,0,0,1987,1985,1,0,0,0,1988,1993,3,400,
	200,0,1989,1990,5,20,0,0,1990,1992,3,400,200,0,1991,1989,1,0,0,0,1992,1995,
	1,0,0,0,1993,1991,1,0,0,0,1993,1994,1,0,0,0,1994,1997,1,0,0,0,1995,1993,
	1,0,0,0,1996,1998,3,262,131,0,1997,1996,1,0,0,0,1997,1998,1,0,0,0,1998,
	261,1,0,0,0,1999,2000,5,114,0,0,2000,2001,3,360,180,0,2001,2003,5,16,0,
	0,2002,2004,5,36,0,0,2003,2002,1,0,0,0,2003,2004,1,0,0,0,2004,2005,1,0,
	0,0,2005,2010,3,400,200,0,2006,2007,5,36,0,0,2007,2009,3,400,200,0,2008,
	2006,1,0,0,0,2009,2012,1,0,0,0,2010,2008,1,0,0,0,2010,2011,1,0,0,0,2011,
	2015,1,0,0,0,2012,2010,1,0,0,0,2013,2014,5,20,0,0,2014,2016,3,400,200,0,
	2015,2013,1,0,0,0,2015,2016,1,0,0,0,2016,263,1,0,0,0,2017,2022,3,224,112,
	0,2018,2019,5,18,0,0,2019,2021,3,224,112,0,2020,2018,1,0,0,0,2021,2024,
	1,0,0,0,2022,2020,1,0,0,0,2022,2023,1,0,0,0,2023,265,1,0,0,0,2024,2022,
	1,0,0,0,2025,2030,3,226,113,0,2026,2027,5,18,0,0,2027,2029,3,226,113,0,
	2028,2026,1,0,0,0,2029,2032,1,0,0,0,2030,2028,1,0,0,0,2030,2031,1,0,0,0,
	2031,267,1,0,0,0,2032,2030,1,0,0,0,2033,2038,3,40,20,0,2034,2038,3,44,22,
	0,2035,2038,3,46,23,0,2036,2038,3,48,24,0,2037,2033,1,0,0,0,2037,2034,1,
	0,0,0,2037,2035,1,0,0,0,2037,2036,1,0,0,0,2038,269,1,0,0,0,2039,2045,3,
	272,136,0,2040,2041,3,142,71,0,2041,2042,3,272,136,0,2042,2044,1,0,0,0,
	2043,2040,1,0,0,0,2044,2047,1,0,0,0,2045,2043,1,0,0,0,2045,2046,1,0,0,0,
	2046,271,1,0,0,0,2047,2045,1,0,0,0,2048,2049,5,10,0,0,2049,2059,3,428,214,
	0,2050,2051,5,11,0,0,2051,2059,3,456,228,0,2052,2053,5,12,0,0,2053,2059,
	3,274,137,0,2054,2055,5,13,0,0,2055,2059,3,274,137,0,2056,2057,5,14,0,0,
	2057,2059,3,276,138,0,2058,2048,1,0,0,0,2058,2050,1,0,0,0,2058,2052,1,0,
	0,0,2058,2054,1,0,0,0,2058,2056,1,0,0,0,2059,273,1,0,0,0,2060,2062,3,402,
	201,0,2061,2063,5,17,0,0,2062,2061,1,0,0,0,2062,2063,1,0,0,0,2063,2065,
	1,0,0,0,2064,2066,3,258,129,0,2065,2064,1,0,0,0,2065,2066,1,0,0,0,2066,
	275,1,0,0,0,2067,2069,3,376,188,0,2068,2070,5,17,0,0,2069,2068,1,0,0,0,
	2069,2070,1,0,0,0,2070,2072,1,0,0,0,2071,2073,3,262,131,0,2072,2071,1,0,
	0,0,2072,2073,1,0,0,0,2073,277,1,0,0,0,2074,2080,3,54,27,0,2075,2076,3,
	142,71,0,2076,2077,3,54,27,0,2077,2079,1,0,0,0,2078,2075,1,0,0,0,2079,2082,
	1,0,0,0,2080,2078,1,0,0,0,2080,2081,1,0,0,0,2081,279,1,0,0,0,2082,2080,
	1,0,0,0,2083,2089,3,50,25,0,2084,2085,3,142,71,0,2085,2086,3,50,25,0,2086,
	2088,1,0,0,0,2087,2084,1,0,0,0,2088,2091,1,0,0,0,2089,2087,1,0,0,0,2089,
	2090,1,0,0,0,2090,281,1,0,0,0,2091,2089,1,0,0,0,2092,2098,3,70,35,0,2093,
	2094,3,142,71,0,2094,2095,3,70,35,0,2095,2097,1,0,0,0,2096,2093,1,0,0,0,
	2097,2100,1,0,0,0,2098,2096,1,0,0,0,2098,2099,1,0,0,0,2099,283,1,0,0,0,
	2100,2098,1,0,0,0,2101,2107,3,86,43,0,2102,2103,3,142,71,0,2103,2104,3,
	86,43,0,2104,2106,1,0,0,0,2105,2102,1,0,0,0,2106,2109,1,0,0,0,2107,2105,
	1,0,0,0,2107,2108,1,0,0,0,2108,285,1,0,0,0,2109,2107,1,0,0,0,2110,2111,
	5,23,0,0,2111,2112,3,288,144,0,2112,2113,5,19,0,0,2113,2114,3,288,144,0,
	2114,2115,5,24,0,0,2115,2125,1,0,0,0,2116,2117,5,23,0,0,2117,2118,3,290,
	145,0,2118,2119,5,24,0,0,2119,2125,1,0,0,0,2120,2121,5,42,0,0,2121,2122,
	3,290,145,0,2122,2123,5,40,0,0,2123,2125,1,0,0,0,2124,2110,1,0,0,0,2124,
	2116,1,0,0,0,2124,2120,1,0,0,0,2125,287,1,0,0,0,2126,2150,5,170,0,0,2127,
	2150,5,171,0,0,2128,2130,5,34,0,0,2129,2128,1,0,0,0,2129,2130,1,0,0,0,2130,
	2131,1,0,0,0,2131,2150,5,181,0,0,2132,2150,5,182,0,0,2133,2150,5,169,0,
	0,2134,2150,5,186,0,0,2135,2150,5,185,0,0,2136,2150,5,178,0,0,2137,2139,
	5,34,0,0,2138,2137,1,0,0,0,2138,2139,1,0,0,0,2139,2140,1,0,0,0,2140,2150,
	5,183,0,0,2141,2150,5,184,0,0,2142,2150,5,168,0,0,2143,2150,5,187,0,0,2144,
	2150,5,180,0,0,2145,2150,5,179,0,0,2146,2150,3,230,115,0,2147,2150,3,150,
	75,0,2148,2150,3,152,76,0,2149,2126,1,0,0,0,2149,2127,1,0,0,0,2149,2129,
	1,0,0,0,2149,2132,1,0,0,0,2149,2133,1,0,0,0,2149,2134,1,0,0,0,2149,2135,
	1,0,0,0,2149,2136,1,0,0,0,2149,2138,1,0,0,0,2149,2141,1,0,0,0,2149,2142,
	1,0,0,0,2149,2143,1,0,0,0,2149,2144,1,0,0,0,2149,2145,1,0,0,0,2149,2146,
	1,0,0,0,2149,2147,1,0,0,0,2149,2148,1,0,0,0,2150,289,1,0,0,0,2151,2156,
	3,288,144,0,2152,2153,5,18,0,0,2153,2155,3,288,144,0,2154,2152,1,0,0,0,
	2155,2158,1,0,0,0,2156,2154,1,0,0,0,2156,2157,1,0,0,0,2157,291,1,0,0,0,
	2158,2156,1,0,0,0,2159,2160,7,10,0,0,2160,293,1,0,0,0,2161,2162,3,200,100,
	0,2162,2163,5,20,0,0,2163,2165,1,0,0,0,2164,2161,1,0,0,0,2164,2165,1,0,
	0,0,2165,2166,1,0,0,0,2166,2167,5,153,0,0,2167,295,1,0,0,0,2168,2169,5,
	21,0,0,2169,2170,3,92,46,0,2170,2171,5,22,0,0,2171,297,1,0,0,0,2172,2175,
	3,288,144,0,2173,2175,3,300,150,0,2174,2172,1,0,0,0,2174,2173,1,0,0,0,2175,
	299,1,0,0,0,2176,2183,3,192,96,0,2177,2183,3,186,93,0,2178,2183,3,188,94,
	0,2179,2183,3,304,152,0,2180,2183,3,306,153,0,2181,2183,3,302,151,0,2182,
	2176,1,0,0,0,2182,2177,1,0,0,0,2182,2178,1,0,0,0,2182,2179,1,0,0,0,2182,
	2180,1,0,0,0,2182,2181,1,0,0,0,2183,301,1,0,0,0,2184,2186,5,127,0,0,2185,
	2184,1,0,0,0,2185,2186,1,0,0,0,2186,2187,1,0,0,0,2187,2189,5,21,0,0,2188,
	2190,3,308,154,0,2189,2188,1,0,0,0,2189,2190,1,0,0,0,2190,2191,1,0,0,0,
	2191,2192,5,22,0,0,2192,303,1,0,0,0,2193,2195,5,127,0,0,2194,2193,1,0,0,
	0,2194,2195,1,0,0,0,2195,2204,1,0,0,0,2196,2197,5,42,0,0,2197,2198,3,316,
	158,0,2198,2199,5,40,0,0,2199,2205,1,0,0,0,2200,2205,5,45,0,0,2201,2202,
	5,42,0,0,2202,2203,5,16,0,0,2203,2205,5,40,0,0,2204,2196,1,0,0,0,2204,2200,
	1,0,0,0,2204,2201,1,0,0,0,2205,305,1,0,0,0,2206,2208,5,25,0,0,2207,2209,
	3,310,155,0,2208,2207,1,0,0,0,2208,2209,1,0,0,0,2209,2210,1,0,0,0,2210,
	2211,5,26,0,0,2211,307,1,0,0,0,2212,2213,3,92,46,0,2213,2222,5,18,0,0,2214,
	2219,3,92,46,0,2215,2216,5,18,0,0,2216,2218,3,92,46,0,2217,2215,1,0,0,0,
	2218,2221,1,0,0,0,2219,2217,1,0,0,0,2219,2220,1,0,0,0,2220,2223,1,0,0,0,
	2221,2219,1,0,0,0,2222,2214,1,0,0,0,2222,2223,1,0,0,0,2223,309,1,0,0,0,
	2224,2229,3,312,156,0,2225,2226,5,18,0,0,2226,2228,3,312,156,0,2227,2225,
	1,0,0,0,2228,2231,1,0,0,0,2229,2227,1,0,0,0,2229,2230,1,0,0,0,2230,311,
	1,0,0,0,2231,2229,1,0,0,0,2232,2233,3,314,157,0,2233,2234,5,16,0,0,2234,
	2235,3,92,46,0,2235,313,1,0,0,0,2236,2239,3,214,107,0,2237,2239,5,178,0,
	0,2238,2236,1,0,0,0,2238,2237,1,0,0,0,2239,315,1,0,0,0,2240,2245,3,318,
	159,0,2241,2242,5,18,0,0,2242,2244,3,318,159,0,2243,2241,1,0,0,0,2244,2247,
	1,0,0,0,2245,2243,1,0,0,0,2245,2246,1,0,0,0,2246,317,1,0,0,0,2247,2245,
	1,0,0,0,2248,2249,3,320,160,0,2249,2250,5,16,0,0,2250,2251,3,92,46,0,2251,
	319,1,0,0,0,2252,2255,3,214,107,0,2253,2255,5,178,0,0,2254,2252,1,0,0,0,
	2254,2253,1,0,0,0,2255,321,1,0,0,0,2256,2257,3,92,46,0,2257,2258,5,16,0,
	0,2258,2259,3,92,46,0,2259,2266,1,0,0,0,2260,2261,3,92,46,0,2261,2262,5,
	16,0,0,2262,2266,1,0,0,0,2263,2264,5,16,0,0,2264,2266,3,92,46,0,2265,2256,
	1,0,0,0,2265,2260,1,0,0,0,2265,2263,1,0,0,0,2266,323,1,0,0,0,2267,2268,
	3,224,112,0,2268,2269,3,366,183,0,2269,2270,3,92,46,0,2270,325,1,0,0,0,
	2271,2272,6,163,-1,0,2272,2273,3,224,112,0,2273,2278,1,0,0,0,2274,2275,
	10,1,0,0,2275,2277,3,136,68,0,2276,2274,1,0,0,0,2277,2280,1,0,0,0,2278,
	2276,1,0,0,0,2278,2279,1,0,0,0,2279,327,1,0,0,0,2280,2278,1,0,0,0,2281,
	2282,4,164,36,1,2282,2283,5,174,0,0,2283,2286,3,242,121,0,2284,2286,3,92,
	46,0,2285,2281,1,0,0,0,2285,2284,1,0,0,0,2286,329,1,0,0,0,2287,2288,4,165,
	37,1,2288,2289,5,174,0,0,2289,331,1,0,0,0,2290,2291,3,334,167,0,2291,2292,
	3,92,46,0,2292,2299,1,0,0,0,2293,2294,3,334,167,0,2294,2295,5,25,0,0,2295,
	2296,3,278,139,0,2296,2297,5,26,0,0,2297,2299,1,0,0,0,2298,2290,1,0,0,0,
	2298,2293,1,0,0,0,2299,333,1,0,0,0,2300,2301,3,336,168,0,2301,2302,3,144,
	72,0,2302,2303,5,53,0,0,2303,2304,3,144,72,0,2304,335,1,0,0,0,2305,2312,
	3,224,112,0,2306,2308,5,21,0,0,2307,2309,3,264,132,0,2308,2307,1,0,0,0,
	2308,2309,1,0,0,0,2309,2310,1,0,0,0,2310,2312,5,22,0,0,2311,2305,1,0,0,
	0,2311,2306,1,0,0,0,2312,337,1,0,0,0,2313,2316,3,100,50,0,2314,2316,3,332,
	166,0,2315,2313,1,0,0,0,2315,2314,1,0,0,0,2316,339,1,0,0,0,2317,2318,5,
	141,0,0,2318,2319,5,68,0,0,2319,2320,5,114,0,0,2320,2321,3,92,46,0,2321,
	341,1,0,0,0,2322,2323,5,141,0,0,2323,2324,5,77,0,0,2324,2325,5,114,0,0,
	2325,2326,3,92,46,0,2326,343,1,0,0,0,2327,2328,5,141,0,0,2328,2329,5,134,
	0,0,2329,2330,5,114,0,0,2330,2331,3,92,46,0,2331,345,1,0,0,0,2332,2337,
	3,348,174,0,2333,2334,5,18,0,0,2334,2336,3,348,174,0,2335,2333,1,0,0,0,
	2336,2339,1,0,0,0,2337,2335,1,0,0,0,2337,2338,1,0,0,0,2338,347,1,0,0,0,
	2339,2337,1,0,0,0,2340,2345,3,224,112,0,2341,2342,5,20,0,0,2342,2344,3,
	224,112,0,2343,2341,1,0,0,0,2344,2347,1,0,0,0,2345,2343,1,0,0,0,2345,2346,
	1,0,0,0,2346,2349,1,0,0,0,2347,2345,1,0,0,0,2348,2350,7,11,0,0,2349,2348,
	1,0,0,0,2349,2350,1,0,0,0,2350,349,1,0,0,0,2351,2356,3,224,112,0,2352,2353,
	5,18,0,0,2353,2355,3,224,112,0,2354,2352,1,0,0,0,2355,2358,1,0,0,0,2356,
	2354,1,0,0,0,2356,2357,1,0,0,0,2357,351,1,0,0,0,2358,2356,1,0,0,0,2359,
	2366,5,33,0,0,2360,2366,5,34,0,0,2361,2366,3,368,184,0,2362,2366,3,370,
	185,0,2363,2366,3,372,186,0,2364,2366,3,374,187,0,2365,2359,1,0,0,0,2365,
	2360,1,0,0,0,2365,2361,1,0,0,0,2365,2362,1,0,0,0,2365,2363,1,0,0,0,2365,
	2364,1,0,0,0,2366,353,1,0,0,0,2367,2368,7,12,0,0,2368,355,1,0,0,0,2369,
	2370,5,174,0,0,2370,2371,4,178,38,1,2371,357,1,0,0,0,2372,2373,5,174,0,
	0,2373,2374,4,179,39,1,2374,359,1,0,0,0,2375,2376,5,174,0,0,2376,2377,4,
	180,40,1,2377,361,1,0,0,0,2378,2379,5,174,0,0,2379,2380,4,181,41,1,2380,
	363,1,0,0,0,2381,2382,5,174,0,0,2382,2383,4,182,42,1,2383,365,1,0,0,0,2384,
	2385,5,46,0,0,2385,367,1,0,0,0,2386,2387,5,35,0,0,2387,369,1,0,0,0,2388,
	2389,5,36,0,0,2389,371,1,0,0,0,2390,2391,5,37,0,0,2391,373,1,0,0,0,2392,
	2393,7,13,0,0,2393,375,1,0,0,0,2394,2395,5,144,0,0,2395,2396,3,378,189,
	0,2396,2397,5,17,0,0,2397,2402,1,0,0,0,2398,2399,3,378,189,0,2399,2400,
	5,17,0,0,2400,2402,1,0,0,0,2401,2394,1,0,0,0,2401,2398,1,0,0,0,2402,377,
	1,0,0,0,2403,2404,6,189,-1,0,2404,2405,3,380,190,0,2405,2410,1,0,0,0,2406,
	2407,10,1,0,0,2407,2409,3,386,193,0,2408,2406,1,0,0,0,2409,2412,1,0,0,0,
	2410,2408,1,0,0,0,2410,2411,1,0,0,0,2411,379,1,0,0,0,2412,2410,1,0,0,0,
	2413,2421,3,382,191,0,2414,2421,3,384,192,0,2415,2421,3,394,197,0,2416,
	2421,3,396,198,0,2417,2421,3,398,199,0,2418,2421,3,388,194,0,2419,2421,
	3,392,196,0,2420,2413,1,0,0,0,2420,2414,1,0,0,0,2420,2415,1,0,0,0,2420,
	2416,1,0,0,0,2420,2417,1,0,0,0,2420,2418,1,0,0,0,2420,2419,1,0,0,0,2421,
	381,1,0,0,0,2422,2423,3,292,146,0,2423,383,1,0,0,0,2424,2425,3,356,178,
	0,2425,2426,3,388,194,0,2426,385,1,0,0,0,2427,2428,5,20,0,0,2428,2433,3,
	388,194,0,2429,2430,5,20,0,0,2430,2433,3,400,200,0,2431,2433,3,392,196,
	0,2432,2427,1,0,0,0,2432,2429,1,0,0,0,2432,2431,1,0,0,0,2433,387,1,0,0,
	0,2434,2435,3,400,200,0,2435,2437,5,21,0,0,2436,2438,3,390,195,0,2437,2436,
	1,0,0,0,2437,2438,1,0,0,0,2438,2439,1,0,0,0,2439,2440,5,22,0,0,2440,389,
	1,0,0,0,2441,2442,6,195,-1,0,2442,2443,3,378,189,0,2443,2449,1,0,0,0,2444,
	2445,10,1,0,0,2445,2446,5,18,0,0,2446,2448,3,378,189,0,2447,2444,1,0,0,
	0,2448,2451,1,0,0,0,2449,2447,1,0,0,0,2449,2450,1,0,0,0,2450,391,1,0,0,
	0,2451,2449,1,0,0,0,2452,2453,5,23,0,0,2453,2454,3,378,189,0,2454,2455,
	5,24,0,0,2455,393,1,0,0,0,2456,2457,5,21,0,0,2457,2458,3,378,189,0,2458,
	2459,5,22,0,0,2459,395,1,0,0,0,2460,2461,3,400,200,0,2461,397,1,0,0,0,2462,
	2468,5,181,0,0,2463,2468,5,183,0,0,2464,2468,5,178,0,0,2465,2468,5,168,
	0,0,2466,2468,5,169,0,0,2467,2462,1,0,0,0,2467,2463,1,0,0,0,2467,2464,1,
	0,0,0,2467,2465,1,0,0,0,2467,2466,1,0,0,0,2468,399,1,0,0,0,2469,2475,5,
	174,0,0,2470,2475,5,172,0,0,2471,2475,5,176,0,0,2472,2475,5,173,0,0,2473,
	2475,3,354,177,0,2474,2469,1,0,0,0,2474,2470,1,0,0,0,2474,2471,1,0,0,0,
	2474,2472,1,0,0,0,2474,2473,1,0,0,0,2475,401,1,0,0,0,2476,2477,5,144,0,
	0,2477,2480,3,404,202,0,2478,2480,3,404,202,0,2479,2476,1,0,0,0,2479,2478,
	1,0,0,0,2480,403,1,0,0,0,2481,2482,6,202,-1,0,2482,2483,3,406,203,0,2483,
	2488,1,0,0,0,2484,2485,10,1,0,0,2485,2487,3,410,205,0,2486,2484,1,0,0,0,
	2487,2490,1,0,0,0,2488,2486,1,0,0,0,2488,2489,1,0,0,0,2489,405,1,0,0,0,
	2490,2488,1,0,0,0,2491,2497,3,408,204,0,2492,2497,3,420,210,0,2493,2497,
	3,422,211,0,2494,2497,3,424,212,0,2495,2497,3,412,206,0,2496,2491,1,0,0,
	0,2496,2492,1,0,0,0,2496,2493,1,0,0,0,2496,2494,1,0,0,0,2496,2495,1,0,0,
	0,2497,407,1,0,0,0,2498,2499,3,292,146,0,2499,409,1,0,0,0,2500,2501,5,20,
	0,0,2501,2507,3,412,206,0,2502,2503,5,23,0,0,2503,2504,3,404,202,0,2504,
	2505,5,24,0,0,2505,2507,1,0,0,0,2506,2500,1,0,0,0,2506,2502,1,0,0,0,2507,
	411,1,0,0,0,2508,2509,3,426,213,0,2509,2511,5,21,0,0,2510,2512,3,414,207,
	0,2511,2510,1,0,0,0,2511,2512,1,0,0,0,2512,2513,1,0,0,0,2513,2514,5,22,
	0,0,2514,413,1,0,0,0,2515,2522,3,416,208,0,2516,2522,3,418,209,0,2517,2518,
	3,416,208,0,2518,2519,5,18,0,0,2519,2520,3,418,209,0,2520,2522,1,0,0,0,
	2521,2515,1,0,0,0,2521,2516,1,0,0,0,2521,2517,1,0,0,0,2522,415,1,0,0,0,
	2523,2524,6,208,-1,0,2524,2525,3,404,202,0,2525,2531,1,0,0,0,2526,2527,
	10,1,0,0,2527,2528,5,18,0,0,2528,2530,3,404,202,0,2529,2526,1,0,0,0,2530,
	2533,1,0,0,0,2531,2529,1,0,0,0,2531,2532,1,0,0,0,2532,417,1,0,0,0,2533,
	2531,1,0,0,0,2534,2535,6,209,-1,0,2535,2536,3,426,213,0,2536,2537,5,46,
	0,0,2537,2538,3,404,202,0,2538,2547,1,0,0,0,2539,2540,10,1,0,0,2540,2541,
	5,18,0,0,2541,2542,3,426,213,0,2542,2543,5,46,0,0,2543,2544,3,404,202,0,
	2544,2546,1,0,0,0,2545,2539,1,0,0,0,2546,2549,1,0,0,0,2547,2545,1,0,0,0,
	2547,2548,1,0,0,0,2548,419,1,0,0,0,2549,2547,1,0,0,0,2550,2551,5,21,0,0,
	2551,2552,3,404,202,0,2552,2553,5,22,0,0,2553,421,1,0,0,0,2554,2555,6,211,
	-1,0,2555,2558,5,176,0,0,2556,2558,3,426,213,0,2557,2554,1,0,0,0,2557,2556,
	1,0,0,0,2558,2564,1,0,0,0,2559,2560,10,1,0,0,2560,2561,5,20,0,0,2561,2563,
	3,426,213,0,2562,2559,1,0,0,0,2563,2566,1,0,0,0,2564,2562,1,0,0,0,2564,
	2565,1,0,0,0,2565,423,1,0,0,0,2566,2564,1,0,0,0,2567,2573,5,181,0,0,2568,
	2573,5,183,0,0,2569,2573,5,178,0,0,2570,2573,5,168,0,0,2571,2573,5,169,
	0,0,2572,2567,1,0,0,0,2572,2568,1,0,0,0,2572,2569,1,0,0,0,2572,2570,1,0,
	0,0,2572,2571,1,0,0,0,2573,425,1,0,0,0,2574,2580,5,174,0,0,2575,2580,5,
	172,0,0,2576,2580,5,176,0,0,2577,2580,5,173,0,0,2578,2580,3,354,177,0,2579,
	2574,1,0,0,0,2579,2575,1,0,0,0,2579,2576,1,0,0,0,2579,2577,1,0,0,0,2579,
	2578,1,0,0,0,2580,427,1,0,0,0,2581,2582,5,144,0,0,2582,2583,3,430,215,0,
	2583,2584,5,17,0,0,2584,2589,1,0,0,0,2585,2586,3,430,215,0,2586,2587,5,
	17,0,0,2587,2589,1,0,0,0,2588,2581,1,0,0,0,2588,2585,1,0,0,0,2589,429,1,
	0,0,0,2590,2591,6,215,-1,0,2591,2592,3,432,216,0,2592,2597,1,0,0,0,2593,
	2594,10,1,0,0,2594,2596,3,438,219,0,2595,2593,1,0,0,0,2596,2599,1,0,0,0,
	2597,2595,1,0,0,0,2597,2598,1,0,0,0,2598,431,1,0,0,0,2599,2597,1,0,0,0,
	2600,2606,3,434,217,0,2601,2606,3,436,218,0,2602,2606,3,446,223,0,2603,
	2606,3,448,224,0,2604,2606,3,452,226,0,2605,2600,1,0,0,0,2605,2601,1,0,
	0,0,2605,2602,1,0,0,0,2605,2603,1,0,0,0,2605,2604,1,0,0,0,2606,433,1,0,
	0,0,2607,2608,3,292,146,0,2608,435,1,0,0,0,2609,2610,3,356,178,0,2610,2611,
	3,440,220,0,2611,437,1,0,0,0,2612,2613,5,20,0,0,2613,2616,3,440,220,0,2614,
	2616,3,444,222,0,2615,2612,1,0,0,0,2615,2614,1,0,0,0,2616,439,1,0,0,0,2617,
	2618,3,454,227,0,2618,2620,5,21,0,0,2619,2621,3,442,221,0,2620,2619,1,0,
	0,0,2620,2621,1,0,0,0,2621,2622,1,0,0,0,2622,2623,5,22,0,0,2623,441,1,0,
	0,0,2624,2625,6,221,-1,0,2625,2626,3,430,215,0,2626,2632,1,0,0,0,2627,2628,
	10,1,0,0,2628,2629,5,18,0,0,2629,2631,3,430,215,0,2630,2627,1,0,0,0,2631,
	2634,1,0,0,0,2632,2630,1,0,0,0,2632,2633,1,0,0,0,2633,443,1,0,0,0,2634,
	2632,1,0,0,0,2635,2636,5,23,0,0,2636,2637,3,430,215,0,2637,2638,5,24,0,
	0,2638,445,1,0,0,0,2639,2640,5,21,0,0,2640,2641,3,430,215,0,2641,2642,5,
	22,0,0,2642,447,1,0,0,0,2643,2644,6,224,-1,0,2644,2645,3,454,227,0,2645,
	2651,1,0,0,0,2646,2647,10,1,0,0,2647,2648,5,20,0,0,2648,2650,3,454,227,
	0,2649,2646,1,0,0,0,2650,2653,1,0,0,0,2651,2649,1,0,0,0,2651,2652,1,0,0,
	0,2652,449,1,0,0,0,2653,2651,1,0,0,0,2654,2655,6,225,-1,0,2655,2656,3,448,
	224,0,2656,2661,1,0,0,0,2657,2658,10,1,0,0,2658,2660,5,176,0,0,2659,2657,
	1,0,0,0,2660,2663,1,0,0,0,2661,2659,1,0,0,0,2661,2662,1,0,0,0,2662,451,
	1,0,0,0,2663,2661,1,0,0,0,2664,2670,5,181,0,0,2665,2670,5,183,0,0,2666,
	2670,5,178,0,0,2667,2670,5,168,0,0,2668,2670,5,169,0,0,2669,2664,1,0,0,
	0,2669,2665,1,0,0,0,2669,2666,1,0,0,0,2669,2667,1,0,0,0,2669,2668,1,0,0,
	0,2670,453,1,0,0,0,2671,2677,5,174,0,0,2672,2677,5,172,0,0,2673,2677,5,
	176,0,0,2674,2677,5,173,0,0,2675,2677,3,354,177,0,2676,2671,1,0,0,0,2676,
	2672,1,0,0,0,2676,2673,1,0,0,0,2676,2674,1,0,0,0,2676,2675,1,0,0,0,2677,
	455,1,0,0,0,2678,2679,5,144,0,0,2679,2680,3,458,229,0,2680,2681,5,17,0,
	0,2681,2686,1,0,0,0,2682,2683,3,458,229,0,2683,2684,5,17,0,0,2684,2686,
	1,0,0,0,2685,2678,1,0,0,0,2685,2682,1,0,0,0,2686,457,1,0,0,0,2687,2688,
	6,229,-1,0,2688,2689,3,460,230,0,2689,2694,1,0,0,0,2690,2691,10,1,0,0,2691,
	2693,3,466,233,0,2692,2690,1,0,0,0,2693,2696,1,0,0,0,2694,2692,1,0,0,0,
	2694,2695,1,0,0,0,2695,459,1,0,0,0,2696,2694,1,0,0,0,2697,2703,3,462,231,
	0,2698,2703,3,464,232,0,2699,2703,3,474,237,0,2700,2703,3,476,238,0,2701,
	2703,3,478,239,0,2702,2697,1,0,0,0,2702,2698,1,0,0,0,2702,2699,1,0,0,0,
	2702,2700,1,0,0,0,2702,2701,1,0,0,0,2703,461,1,0,0,0,2704,2705,3,292,146,
	0,2705,463,1,0,0,0,2706,2707,3,356,178,0,2707,2708,3,468,234,0,2708,465,
	1,0,0,0,2709,2710,5,20,0,0,2710,2713,3,468,234,0,2711,2713,3,472,236,0,
	2712,2709,1,0,0,0,2712,2711,1,0,0,0,2713,467,1,0,0,0,2714,2715,3,480,240,
	0,2715,2717,5,21,0,0,2716,2718,3,470,235,0,2717,2716,1,0,0,0,2717,2718,
	1,0,0,0,2718,2719,1,0,0,0,2719,2720,5,22,0,0,2720,469,1,0,0,0,2721,2722,
	6,235,-1,0,2722,2723,3,458,229,0,2723,2729,1,0,0,0,2724,2725,10,1,0,0,2725,
	2726,5,18,0,0,2726,2728,3,458,229,0,2727,2724,1,0,0,0,2728,2731,1,0,0,0,
	2729,2727,1,0,0,0,2729,2730,1,0,0,0,2730,471,1,0,0,0,2731,2729,1,0,0,0,
	2732,2733,5,23,0,0,2733,2734,3,458,229,0,2734,2735,5,24,0,0,2735,473,1,
	0,0,0,2736,2737,5,21,0,0,2737,2738,3,458,229,0,2738,2739,5,22,0,0,2739,
	475,1,0,0,0,2740,2741,6,238,-1,0,2741,2744,5,176,0,0,2742,2744,3,480,240,
	0,2743,2740,1,0,0,0,2743,2742,1,0,0,0,2744,2750,1,0,0,0,2745,2746,10,1,
	0,0,2746,2747,5,20,0,0,2747,2749,3,480,240,0,2748,2745,1,0,0,0,2749,2752,
	1,0,0,0,2750,2748,1,0,0,0,2750,2751,1,0,0,0,2751,477,1,0,0,0,2752,2750,
	1,0,0,0,2753,2759,5,181,0,0,2754,2759,5,183,0,0,2755,2759,5,178,0,0,2756,
	2759,5,168,0,0,2757,2759,5,169,0,0,2758,2753,1,0,0,0,2758,2754,1,0,0,0,
	2758,2755,1,0,0,0,2758,2756,1,0,0,0,2758,2757,1,0,0,0,2759,479,1,0,0,0,
	2760,2766,5,174,0,0,2761,2766,5,172,0,0,2762,2766,5,176,0,0,2763,2766,5,
	173,0,0,2764,2766,3,354,177,0,2765,2760,1,0,0,0,2765,2761,1,0,0,0,2765,
	2762,1,0,0,0,2765,2763,1,0,0,0,2765,2764,1,0,0,0,2766,481,1,0,0,0,2767,
	2770,3,484,242,0,2768,2770,3,486,243,0,2769,2767,1,0,0,0,2769,2768,1,0,
	0,0,2770,483,1,0,0,0,2771,2779,3,492,246,0,2772,2774,3,494,247,0,2773,2775,
	3,506,253,0,2774,2773,1,0,0,0,2774,2775,1,0,0,0,2775,2776,1,0,0,0,2776,
	2777,3,496,248,0,2777,2779,1,0,0,0,2778,2771,1,0,0,0,2778,2772,1,0,0,0,
	2779,485,1,0,0,0,2780,2781,3,488,244,0,2781,2783,3,144,72,0,2782,2784,3,
	506,253,0,2783,2782,1,0,0,0,2783,2784,1,0,0,0,2784,2785,1,0,0,0,2785,2786,
	3,144,72,0,2786,2787,3,490,245,0,2787,487,1,0,0,0,2788,2789,5,42,0,0,2789,
	2792,5,40,0,0,2790,2792,5,44,0,0,2791,2788,1,0,0,0,2791,2790,1,0,0,0,2792,
	489,1,0,0,0,2793,2794,5,42,0,0,2794,2795,5,36,0,0,2795,2796,5,40,0,0,2796,
	491,1,0,0,0,2797,2798,5,42,0,0,2798,2799,3,498,249,0,2799,2803,3,144,72,
	0,2800,2802,3,502,251,0,2801,2800,1,0,0,0,2802,2805,1,0,0,0,2803,2801,1,
	0,0,0,2803,2804,1,0,0,0,2804,2806,1,0,0,0,2805,2803,1,0,0,0,2806,2807,5,
	36,0,0,2807,2808,5,40,0,0,2808,493,1,0,0,0,2809,2810,5,42,0,0,2810,2811,
	3,498,249,0,2811,2815,3,144,72,0,2812,2814,3,502,251,0,2813,2812,1,0,0,
	0,2814,2817,1,0,0,0,2815,2813,1,0,0,0,2815,2816,1,0,0,0,2816,2818,1,0,0,
	0,2817,2815,1,0,0,0,2818,2819,5,40,0,0,2819,495,1,0,0,0,2820,2821,5,42,
	0,0,2821,2822,5,36,0,0,2822,2823,3,498,249,0,2823,2824,5,40,0,0,2824,497,
	1,0,0,0,2825,2830,3,500,250,0,2826,2827,5,20,0,0,2827,2829,3,500,250,0,
	2828,2826,1,0,0,0,2829,2832,1,0,0,0,2830,2828,1,0,0,0,2830,2831,1,0,0,0,
	2831,499,1,0,0,0,2832,2830,1,0,0,0,2833,2837,3,214,107,0,2834,2836,3,216,
	108,0,2835,2834,1,0,0,0,2836,2839,1,0,0,0,2837,2835,1,0,0,0,2837,2838,1,
	0,0,0,2838,501,1,0,0,0,2839,2837,1,0,0,0,2840,2843,3,500,250,0,2841,2842,
	5,46,0,0,2842,2844,3,504,252,0,2843,2841,1,0,0,0,2843,2844,1,0,0,0,2844,
	2845,1,0,0,0,2845,2846,3,144,72,0,2846,503,1,0,0,0,2847,2854,5,178,0,0,
	2848,2850,5,25,0,0,2849,2851,3,92,46,0,2850,2849,1,0,0,0,2850,2851,1,0,
	0,0,2851,2852,1,0,0,0,2852,2854,5,26,0,0,2853,2847,1,0,0,0,2853,2848,1,
	0,0,0,2854,505,1,0,0,0,2855,2857,3,508,254,0,2856,2855,1,0,0,0,2857,2858,
	1,0,0,0,2858,2856,1,0,0,0,2858,2859,1,0,0,0,2859,507,1,0,0,0,2860,2868,
	3,510,255,0,2861,2868,3,484,242,0,2862,2864,5,25,0,0,2863,2865,3,92,46,
	0,2864,2863,1,0,0,0,2864,2865,1,0,0,0,2865,2866,1,0,0,0,2866,2868,5,26,
	0,0,2867,2860,1,0,0,0,2867,2861,1,0,0,0,2867,2862,1,0,0,0,2868,509,1,0,
	0,0,2869,2871,3,512,256,0,2870,2869,1,0,0,0,2871,2872,1,0,0,0,2872,2870,
	1,0,0,0,2872,2873,1,0,0,0,2873,511,1,0,0,0,2874,2877,8,14,0,0,2875,2877,
	5,188,0,0,2876,2874,1,0,0,0,2876,2875,1,0,0,0,2877,513,1,0,0,0,2878,2880,
	5,25,0,0,2879,2881,3,516,258,0,2880,2879,1,0,0,0,2881,2882,1,0,0,0,2882,
	2880,1,0,0,0,2882,2883,1,0,0,0,2883,2884,1,0,0,0,2884,2885,5,26,0,0,2885,
	515,1,0,0,0,2886,2887,3,518,259,0,2887,2889,5,16,0,0,2888,2890,3,520,260,
	0,2889,2888,1,0,0,0,2890,2891,1,0,0,0,2891,2889,1,0,0,0,2891,2892,1,0,0,
	0,2892,2893,1,0,0,0,2893,2894,5,17,0,0,2894,517,1,0,0,0,2895,2896,6,259,
	-1,0,2896,2900,3,214,107,0,2897,2898,5,34,0,0,2898,2900,3,218,109,0,2899,
	2895,1,0,0,0,2899,2897,1,0,0,0,2900,2909,1,0,0,0,2901,2903,10,1,0,0,2902,
	2904,3,216,108,0,2903,2902,1,0,0,0,2904,2905,1,0,0,0,2905,2903,1,0,0,0,
	2905,2906,1,0,0,0,2906,2908,1,0,0,0,2907,2901,1,0,0,0,2908,2911,1,0,0,0,
	2909,2907,1,0,0,0,2909,2910,1,0,0,0,2910,519,1,0,0,0,2911,2909,1,0,0,0,
	2912,2913,5,25,0,0,2913,2914,3,92,46,0,2914,2915,5,26,0,0,2915,2918,1,0,
	0,0,2916,2918,3,522,261,0,2917,2912,1,0,0,0,2917,2916,1,0,0,0,2918,521,
	1,0,0,0,2919,2921,8,15,0,0,2920,2919,1,0,0,0,2921,2922,1,0,0,0,2922,2920,
	1,0,0,0,2922,2923,1,0,0,0,2923,523,1,0,0,0,278,530,533,558,563,577,583,
	585,587,591,596,604,611,628,639,646,650,661,675,695,718,729,736,745,750,
	757,766,787,795,800,803,810,815,818,824,829,832,838,844,849,854,878,889,
	893,916,932,939,947,955,960,967,973,980,1009,1028,1034,1068,1077,1100,1114,
	1123,1132,1155,1161,1184,1213,1219,1225,1253,1259,1264,1271,1276,1278,1288,
	1298,1307,1318,1330,1344,1349,1358,1367,1374,1378,1390,1397,1404,1411,1416,
	1424,1430,1439,1443,1448,1452,1457,1459,1464,1470,1481,1485,1490,1494,1499,
	1502,1520,1529,1545,1554,1560,1565,1571,1578,1591,1596,1600,1611,1619,1627,
	1636,1646,1649,1653,1665,1671,1679,1688,1696,1709,1712,1716,1721,1725,1734,
	1760,1769,1771,1776,1796,1801,1810,1814,1821,1826,1830,1842,1859,1864,1867,
	1871,1876,1883,1894,1896,1905,1913,1921,1929,1937,1945,1953,1959,1971,1975,
	1985,1993,1997,2003,2010,2015,2022,2030,2037,2045,2058,2062,2065,2069,2072,
	2080,2089,2098,2107,2124,2129,2138,2149,2156,2164,2174,2182,2185,2189,2194,
	2204,2208,2219,2222,2229,2238,2245,2254,2265,2278,2285,2298,2308,2311,2315,
	2337,2345,2349,2356,2365,2401,2410,2420,2432,2437,2449,2467,2474,2479,2488,
	2496,2506,2511,2521,2531,2547,2557,2564,2572,2579,2588,2597,2605,2615,2620,
	2632,2651,2661,2669,2676,2685,2694,2702,2712,2717,2729,2743,2750,2758,2765,
	2769,2774,2778,2783,2791,2803,2815,2830,2837,2843,2850,2853,2858,2864,2867,
	2872,2876,2882,2891,2899,2905,2909,2917,2922];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MParser.__ATN) {
			MParser.__ATN = new ATNDeserializer().deserialize(MParser._serializedATN);
		}

		return MParser.__ATN;
	}


	static DecisionsToDFA = MParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Enum_category_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _derived!: Type_identifierContext;
	public _attrs!: Attribute_identifier_listContext;
	public _symbols!: Category_symbol_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(MParser.ENUM, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
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
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_enum_category_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterEnum_category_declaration) {
	 		listener.enterEnum_category_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitEnum_category_declaration) {
	 		listener.exitEnum_category_declaration(this);
		}
	}
}


export class Enum_native_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _typ!: Native_typeContext;
	public _symbols!: Native_symbol_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(MParser.ENUM, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
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
    	return MParser.RULE_enum_native_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterEnum_native_declaration) {
	 		listener.enterEnum_native_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitEnum_native_declaration) {
	 		listener.exitEnum_native_declaration(this);
		}
	}
}


export class Native_symbolContext extends ParserRuleContext {
	public _name!: Symbol_identifierContext;
	public _exp!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(MParser.EQ, 0);
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_native_symbol;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_symbol) {
	 		listener.enterNative_symbol(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNative_symbol) {
	 		listener.exitNative_symbol(this);
		}
	}
}


export class Category_symbolContext extends ParserRuleContext {
	public _name!: Symbol_identifierContext;
	public _args!: Argument_assignment_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
	public argument_assignment_list(): Argument_assignment_listContext {
		return this.getTypedRuleContext(Argument_assignment_listContext, 0) as Argument_assignment_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_category_symbol;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCategory_symbol) {
	 		listener.enterCategory_symbol(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCategory_symbol) {
	 		listener.exitCategory_symbol(this);
		}
	}
}


export class Attribute_declarationContext extends ParserRuleContext {
	public _name!: Attribute_identifierContext;
	public _typ!: TypedefContext;
	public _match!: Attribute_constraintContext;
	public _indices!: Index_clauseContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTR(): TerminalNode {
		return this.getToken(MParser.ATTR, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public attribute_identifier(): Attribute_identifierContext {
		return this.getTypedRuleContext(Attribute_identifierContext, 0) as Attribute_identifierContext;
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public STORABLE(): TerminalNode {
		return this.getToken(MParser.STORABLE, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public PASS(): TerminalNode {
		return this.getToken(MParser.PASS, 0);
	}
	public attribute_constraint(): Attribute_constraintContext {
		return this.getTypedRuleContext(Attribute_constraintContext, 0) as Attribute_constraintContext;
	}
	public index_clause(): Index_clauseContext {
		return this.getTypedRuleContext(Index_clauseContext, 0) as Index_clauseContext;
	}
	public lfp(): LfpContext {
		return this.getTypedRuleContext(LfpContext, 0) as LfpContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_attribute_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAttribute_declaration) {
	 		listener.enterAttribute_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAttribute_declaration) {
	 		listener.exitAttribute_declaration(this);
		}
	}
}


export class Index_clauseContext extends ParserRuleContext {
	public _indices!: Variable_identifier_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INDEX(): TerminalNode {
		return this.getToken(MParser.INDEX, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public variable_identifier_list(): Variable_identifier_listContext {
		return this.getTypedRuleContext(Variable_identifier_listContext, 0) as Variable_identifier_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_index_clause;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIndex_clause) {
	 		listener.enterIndex_clause(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIndex_clause) {
	 		listener.exitIndex_clause(this);
		}
	}
}


export class Concrete_widget_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _derived!: Type_identifierContext;
	public _methods!: Member_method_declaration_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WIDGET(): TerminalNode {
		return this.getToken(MParser.WIDGET, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public type_identifier_list(): Type_identifierContext[] {
		return this.getTypedRuleContexts(Type_identifierContext) as Type_identifierContext[];
	}
	public type_identifier(i: number): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, i) as Type_identifierContext;
	}
	public PASS(): TerminalNode {
		return this.getToken(MParser.PASS, 0);
	}
	public member_method_declaration_list(): Member_method_declaration_listContext {
		return this.getTypedRuleContext(Member_method_declaration_listContext, 0) as Member_method_declaration_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_concrete_widget_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterConcrete_widget_declaration) {
	 		listener.enterConcrete_widget_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitConcrete_widget_declaration) {
	 		listener.exitConcrete_widget_declaration(this);
		}
	}
}


export class Native_widget_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _bindings!: Native_category_bindingsContext;
	public _methods!: Native_member_method_declaration_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(MParser.NATIVE, 0);
	}
	public WIDGET(): TerminalNode {
		return this.getToken(MParser.WIDGET, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public lfp(): LfpContext {
		return this.getTypedRuleContext(LfpContext, 0) as LfpContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
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
    	return MParser.RULE_native_widget_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_widget_declaration) {
	 		listener.enterNative_widget_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNative_widget_declaration) {
	 		listener.exitNative_widget_declaration(this);
		}
	}
}


export class Concrete_category_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _derived!: Derived_listContext;
	public _attrs!: Attribute_identifier_listContext;
	public _methods!: Member_method_declaration_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(MParser.CLASS, 0);
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(MParser.CATEGORY, 0);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public STORABLE(): TerminalNode {
		return this.getToken(MParser.STORABLE, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public derived_list(): Derived_listContext {
		return this.getTypedRuleContext(Derived_listContext, 0) as Derived_listContext;
	}
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
	public PASS(): TerminalNode {
		return this.getToken(MParser.PASS, 0);
	}
	public member_method_declaration_list(): Member_method_declaration_listContext {
		return this.getTypedRuleContext(Member_method_declaration_listContext, 0) as Member_method_declaration_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_concrete_category_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterConcrete_category_declaration) {
	 		listener.enterConcrete_category_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitConcrete_category_declaration) {
	 		listener.exitConcrete_category_declaration(this);
		}
	}
}


export class Singleton_category_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _attrs!: Attribute_identifier_listContext;
	public _methods!: Member_method_declaration_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SINGLETON(): TerminalNode {
		return this.getToken(MParser.SINGLETON, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
	public PASS(): TerminalNode {
		return this.getToken(MParser.PASS, 0);
	}
	public member_method_declaration_list(): Member_method_declaration_listContext {
		return this.getTypedRuleContext(Member_method_declaration_listContext, 0) as Member_method_declaration_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_singleton_category_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSingleton_category_declaration) {
	 		listener.enterSingleton_category_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSingleton_category_declaration) {
	 		listener.exitSingleton_category_declaration(this);
		}
	}
}


export class Derived_listContext extends ParserRuleContext {
	public _items!: Type_identifier_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_identifier_list(): Type_identifier_listContext {
		return this.getTypedRuleContext(Type_identifier_listContext, 0) as Type_identifier_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_derived_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDerived_list) {
	 		listener.enterDerived_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDerived_list) {
	 		listener.exitDerived_list(this);
		}
	}
}


export class Operator_method_declarationContext extends ParserRuleContext {
	public _op!: OperatorContext;
	public _arg!: Operator_argumentContext;
	public _typ!: TypedefContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public OPERATOR(): TerminalNode {
		return this.getToken(MParser.OPERATOR, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public operator(): OperatorContext {
		return this.getTypedRuleContext(OperatorContext, 0) as OperatorContext;
	}
	public operator_argument(): Operator_argumentContext {
		return this.getTypedRuleContext(Operator_argumentContext, 0) as Operator_argumentContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public RARROW(): TerminalNode {
		return this.getToken(MParser.RARROW, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_operator_method_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOperator_method_declaration) {
	 		listener.enterOperator_method_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOperator_method_declaration) {
	 		listener.exitOperator_method_declaration(this);
		}
	}
}


export class Setter_method_declarationContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public SETTER(): TerminalNode {
		return this.getToken(MParser.SETTER, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_setter_method_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSetter_method_declaration) {
	 		listener.enterSetter_method_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSetter_method_declaration) {
	 		listener.exitSetter_method_declaration(this);
		}
	}
}


export class Native_setter_declarationContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _stmts!: Native_statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public SETTER(): TerminalNode {
		return this.getToken(MParser.SETTER, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public native_statement_list(): Native_statement_listContext {
		return this.getTypedRuleContext(Native_statement_listContext, 0) as Native_statement_listContext;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(MParser.NATIVE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_native_setter_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_setter_declaration) {
	 		listener.enterNative_setter_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNative_setter_declaration) {
	 		listener.exitNative_setter_declaration(this);
		}
	}
}


export class Getter_method_declarationContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public GETTER(): TerminalNode {
		return this.getToken(MParser.GETTER, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_getter_method_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterGetter_method_declaration) {
	 		listener.enterGetter_method_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitGetter_method_declaration) {
	 		listener.exitGetter_method_declaration(this);
		}
	}
}


export class Native_getter_declarationContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _stmts!: Native_statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public GETTER(): TerminalNode {
		return this.getToken(MParser.GETTER, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public native_statement_list(): Native_statement_listContext {
		return this.getTypedRuleContext(Native_statement_listContext, 0) as Native_statement_listContext;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(MParser.NATIVE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_native_getter_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_getter_declaration) {
	 		listener.enterNative_getter_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNative_getter_declaration) {
	 		listener.exitNative_getter_declaration(this);
		}
	}
}


export class Native_category_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _attrs!: Attribute_identifier_listContext;
	public _bindings!: Native_category_bindingsContext;
	public _methods!: Native_member_method_declaration_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(MParser.NATIVE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public CLASS(): TerminalNode {
		return this.getToken(MParser.CLASS, 0);
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(MParser.CATEGORY, 0);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public native_category_bindings(): Native_category_bindingsContext {
		return this.getTypedRuleContext(Native_category_bindingsContext, 0) as Native_category_bindingsContext;
	}
	public STORABLE(): TerminalNode {
		return this.getToken(MParser.STORABLE, 0);
	}
	public lfp(): LfpContext {
		return this.getTypedRuleContext(LfpContext, 0) as LfpContext;
	}
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
	public native_member_method_declaration_list(): Native_member_method_declaration_listContext {
		return this.getTypedRuleContext(Native_member_method_declaration_listContext, 0) as Native_member_method_declaration_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_native_category_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_category_declaration) {
	 		listener.enterNative_category_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNative_category_declaration) {
	 		listener.exitNative_category_declaration(this);
		}
	}
}


export class Native_resource_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _attrs!: Attribute_identifier_listContext;
	public _bindings!: Native_category_bindingsContext;
	public _methods!: Native_member_method_declaration_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(MParser.NATIVE, 0);
	}
	public RESOURCE(): TerminalNode {
		return this.getToken(MParser.RESOURCE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public native_category_bindings(): Native_category_bindingsContext {
		return this.getTypedRuleContext(Native_category_bindingsContext, 0) as Native_category_bindingsContext;
	}
	public STORABLE(): TerminalNode {
		return this.getToken(MParser.STORABLE, 0);
	}
	public lfp(): LfpContext {
		return this.getTypedRuleContext(LfpContext, 0) as LfpContext;
	}
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
	public native_member_method_declaration_list(): Native_member_method_declaration_listContext {
		return this.getTypedRuleContext(Native_member_method_declaration_listContext, 0) as Native_member_method_declaration_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_native_resource_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_resource_declaration) {
	 		listener.enterNative_resource_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNative_resource_declaration) {
	 		listener.exitNative_resource_declaration(this);
		}
	}
}


export class Native_category_bindingsContext extends ParserRuleContext {
	public _items!: Native_category_binding_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public BINDINGS(): TerminalNode {
		return this.getToken(MParser.BINDINGS, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public CLASS(): TerminalNode {
		return this.getToken(MParser.CLASS, 0);
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(MParser.CATEGORY, 0);
	}
	public native_category_binding_list(): Native_category_binding_listContext {
		return this.getTypedRuleContext(Native_category_binding_listContext, 0) as Native_category_binding_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_native_category_bindings;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_category_bindings) {
	 		listener.enterNative_category_bindings(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNative_category_bindings) {
	 		listener.exitNative_category_bindings(this);
		}
	}
}


export class Native_category_binding_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_native_category_binding_list;
	}
	public copyFrom(ctx: Native_category_binding_listContext): void {
		super.copyFrom(ctx);
	}
}
export class NativeCategoryBindingListItemContext extends Native_category_binding_listContext {
	public _items!: Native_category_binding_listContext;
	public _item!: Native_category_bindingContext;
	constructor(parser: MParser, ctx: Native_category_binding_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lfp(): LfpContext {
		return this.getTypedRuleContext(LfpContext, 0) as LfpContext;
	}
	public native_category_binding_list(): Native_category_binding_listContext {
		return this.getTypedRuleContext(Native_category_binding_listContext, 0) as Native_category_binding_listContext;
	}
	public native_category_binding(): Native_category_bindingContext {
		return this.getTypedRuleContext(Native_category_bindingContext, 0) as Native_category_bindingContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNativeCategoryBindingListItem) {
	 		listener.enterNativeCategoryBindingListItem(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNativeCategoryBindingListItem) {
	 		listener.exitNativeCategoryBindingListItem(this);
		}
	}
}
export class NativeCategoryBindingListContext extends Native_category_binding_listContext {
	public _item!: Native_category_bindingContext;
	constructor(parser: MParser, ctx: Native_category_binding_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public native_category_binding(): Native_category_bindingContext {
		return this.getTypedRuleContext(Native_category_bindingContext, 0) as Native_category_bindingContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNativeCategoryBindingList) {
	 		listener.enterNativeCategoryBindingList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNativeCategoryBindingList) {
	 		listener.exitNativeCategoryBindingList(this);
		}
	}
}


export class Abstract_global_method_declarationContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	public _args!: Argument_listContext;
	public _typ!: TypedefContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(MParser.ABSTRACT, 0);
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public RARROW(): TerminalNode {
		return this.getToken(MParser.RARROW, 0);
	}
	public argument_list(): Argument_listContext {
		return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_abstract_global_method_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAbstract_global_method_declaration) {
	 		listener.enterAbstract_global_method_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAbstract_global_method_declaration) {
	 		listener.exitAbstract_global_method_declaration(this);
		}
	}
}


export class Abstract_member_method_declarationContext extends ParserRuleContext {
	public _name!: Method_identifierContext;
	public _args!: Argument_listContext;
	public _typ!: TypedefContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(MParser.ABSTRACT, 0);
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public method_identifier(): Method_identifierContext {
		return this.getTypedRuleContext(Method_identifierContext, 0) as Method_identifierContext;
	}
	public RARROW(): TerminalNode {
		return this.getToken(MParser.RARROW, 0);
	}
	public argument_list(): Argument_listContext {
		return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_abstract_member_method_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAbstract_member_method_declaration) {
	 		listener.enterAbstract_member_method_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAbstract_member_method_declaration) {
	 		listener.exitAbstract_member_method_declaration(this);
		}
	}
}


export class Concrete_method_declarationContext extends ParserRuleContext {
	public _name!: Method_identifierContext;
	public _args!: Argument_listContext;
	public _typ!: TypedefContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public method_identifier(): Method_identifierContext {
		return this.getTypedRuleContext(Method_identifierContext, 0) as Method_identifierContext;
	}
	public PASS(): TerminalNode {
		return this.getToken(MParser.PASS, 0);
	}
	public RARROW(): TerminalNode {
		return this.getToken(MParser.RARROW, 0);
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public argument_list(): Argument_listContext {
		return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_concrete_method_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterConcrete_method_declaration) {
	 		listener.enterConcrete_method_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitConcrete_method_declaration) {
	 		listener.exitConcrete_method_declaration(this);
		}
	}
}


export class Native_method_declarationContext extends ParserRuleContext {
	public _name!: Method_identifierContext;
	public _args!: Argument_listContext;
	public _typ!: Category_or_any_typeContext;
	public _stmts!: Native_statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public method_identifier(): Method_identifierContext {
		return this.getTypedRuleContext(Method_identifierContext, 0) as Method_identifierContext;
	}
	public native_statement_list(): Native_statement_listContext {
		return this.getTypedRuleContext(Native_statement_listContext, 0) as Native_statement_listContext;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(MParser.NATIVE, 0);
	}
	public RARROW(): TerminalNode {
		return this.getToken(MParser.RARROW, 0);
	}
	public argument_list(): Argument_listContext {
		return this.getTypedRuleContext(Argument_listContext, 0) as Argument_listContext;
	}
	public category_or_any_type(): Category_or_any_typeContext {
		return this.getTypedRuleContext(Category_or_any_typeContext, 0) as Category_or_any_typeContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_native_method_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_method_declaration) {
	 		listener.enterNative_method_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
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
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public TEST(): TerminalNode {
		return this.getToken(MParser.TEST, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(MParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(MParser.COLON, i);
	}
	public indent_list(): IndentContext[] {
		return this.getTypedRuleContexts(IndentContext) as IndentContext[];
	}
	public indent(i: number): IndentContext {
		return this.getTypedRuleContext(IndentContext, i) as IndentContext;
	}
	public dedent_list(): DedentContext[] {
		return this.getTypedRuleContexts(DedentContext) as DedentContext[];
	}
	public dedent(i: number): DedentContext {
		return this.getTypedRuleContext(DedentContext, i) as DedentContext;
	}
	public lfp(): LfpContext {
		return this.getTypedRuleContext(LfpContext, 0) as LfpContext;
	}
	public VERIFYING(): TerminalNode {
		return this.getToken(MParser.VERIFYING, 0);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(MParser.TEXT_LITERAL, 0);
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public assertion_list(): Assertion_listContext {
		return this.getTypedRuleContext(Assertion_listContext, 0) as Assertion_listContext;
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_test_method_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTest_method_declaration) {
	 		listener.enterTest_method_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTest_method_declaration) {
	 		listener.exitTest_method_declaration(this);
		}
	}
}


export class AssertionContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_assertion;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAssertion) {
	 		listener.enterAssertion(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAssertion) {
	 		listener.exitAssertion(this);
		}
	}
}


export class Typed_argumentContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _typ!: Category_or_any_typeContext;
	public _attrs!: Attribute_identifier_listContext;
	public _value!: Literal_expressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public category_or_any_type(): Category_or_any_typeContext {
		return this.getTypedRuleContext(Category_or_any_typeContext, 0) as Category_or_any_typeContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(MParser.EQ, 0);
	}
	public attribute_identifier_list(): Attribute_identifier_listContext {
		return this.getTypedRuleContext(Attribute_identifier_listContext, 0) as Attribute_identifier_listContext;
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_typed_argument;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTyped_argument) {
	 		listener.enterTyped_argument(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTyped_argument) {
	 		listener.exitTyped_argument(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_statement;
	}
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class CommentStatementContext extends StatementContext {
	public _decl!: Comment_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public comment_statement(): Comment_statementContext {
		return this.getTypedRuleContext(Comment_statementContext, 0) as Comment_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCommentStatement) {
	 		listener.enterCommentStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCommentStatement) {
	 		listener.exitCommentStatement(this);
		}
	}
}
export class StoreStatementContext extends StatementContext {
	public _stmt!: Store_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public store_statement(): Store_statementContext {
		return this.getTypedRuleContext(Store_statementContext, 0) as Store_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterStoreStatement) {
	 		listener.enterStoreStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitStoreStatement) {
	 		listener.exitStoreStatement(this);
		}
	}
}
export class WithSingletonStatementContext extends StatementContext {
	public _stmt!: With_singleton_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public with_singleton_statement(): With_singleton_statementContext {
		return this.getTypedRuleContext(With_singleton_statementContext, 0) as With_singleton_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterWithSingletonStatement) {
	 		listener.enterWithSingletonStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitWithSingletonStatement) {
	 		listener.exitWithSingletonStatement(this);
		}
	}
}
export class WriteStatementContext extends StatementContext {
	public _stmt!: Write_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public write_statement(): Write_statementContext {
		return this.getTypedRuleContext(Write_statementContext, 0) as Write_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterWriteStatement) {
	 		listener.enterWriteStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitWriteStatement) {
	 		listener.exitWriteStatement(this);
		}
	}
}
export class WhileStatementContext extends StatementContext {
	public _stmt!: While_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public while_statement(): While_statementContext {
		return this.getTypedRuleContext(While_statementContext, 0) as While_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitWhileStatement) {
	 		listener.exitWhileStatement(this);
		}
	}
}
export class WithResourceStatementContext extends StatementContext {
	public _stmt!: With_resource_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public with_resource_statement(): With_resource_statementContext {
		return this.getTypedRuleContext(With_resource_statementContext, 0) as With_resource_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterWithResourceStatement) {
	 		listener.enterWithResourceStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitWithResourceStatement) {
	 		listener.exitWithResourceStatement(this);
		}
	}
}
export class RaiseStatementContext extends StatementContext {
	public _stmt!: Raise_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public raise_statement(): Raise_statementContext {
		return this.getTypedRuleContext(Raise_statementContext, 0) as Raise_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterRaiseStatement) {
	 		listener.enterRaiseStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitRaiseStatement) {
	 		listener.exitRaiseStatement(this);
		}
	}
}
export class FetchStatementContext extends StatementContext {
	public _stmt!: Fetch_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public fetch_statement(): Fetch_statementContext {
		return this.getTypedRuleContext(Fetch_statementContext, 0) as Fetch_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterFetchStatement) {
	 		listener.enterFetchStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitFetchStatement) {
	 		listener.exitFetchStatement(this);
		}
	}
}
export class BreakStatementContext extends StatementContext {
	public _stmt!: Break_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public break_statement(): Break_statementContext {
		return this.getTypedRuleContext(Break_statementContext, 0) as Break_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterBreakStatement) {
	 		listener.enterBreakStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitBreakStatement) {
	 		listener.exitBreakStatement(this);
		}
	}
}
export class AssignInstanceStatementContext extends StatementContext {
	public _stmt!: Assign_instance_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public assign_instance_statement(): Assign_instance_statementContext {
		return this.getTypedRuleContext(Assign_instance_statementContext, 0) as Assign_instance_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAssignInstanceStatement) {
	 		listener.enterAssignInstanceStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAssignInstanceStatement) {
	 		listener.exitAssignInstanceStatement(this);
		}
	}
}
export class IfStatementContext extends StatementContext {
	public _stmt!: If_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public if_statement(): If_statementContext {
		return this.getTypedRuleContext(If_statementContext, 0) as If_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
}
export class SwitchStatementContext extends StatementContext {
	public _stmt!: Switch_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public switch_statement(): Switch_statementContext {
		return this.getTypedRuleContext(Switch_statementContext, 0) as Switch_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSwitchStatement) {
	 		listener.enterSwitchStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSwitchStatement) {
	 		listener.exitSwitchStatement(this);
		}
	}
}
export class TryStatementContext extends StatementContext {
	public _stmt!: Try_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public try_statement(): Try_statementContext {
		return this.getTypedRuleContext(Try_statementContext, 0) as Try_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTryStatement) {
	 		listener.enterTryStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTryStatement) {
	 		listener.exitTryStatement(this);
		}
	}
}
export class ReadStatementContext extends StatementContext {
	public _stmt!: Read_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public read_statement(): Read_statementContext {
		return this.getTypedRuleContext(Read_statementContext, 0) as Read_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterReadStatement) {
	 		listener.enterReadStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitReadStatement) {
	 		listener.exitReadStatement(this);
		}
	}
}
export class MethodCallStatementContext extends StatementContext {
	public _stmt!: Method_call_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public method_call_statement(): Method_call_statementContext {
		return this.getTypedRuleContext(Method_call_statementContext, 0) as Method_call_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMethodCallStatement) {
	 		listener.enterMethodCallStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMethodCallStatement) {
	 		listener.exitMethodCallStatement(this);
		}
	}
}
export class ReturnStatementContext extends StatementContext {
	public _stmt!: Return_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public return_statement(): Return_statementContext {
		return this.getTypedRuleContext(Return_statementContext, 0) as Return_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitReturnStatement) {
	 		listener.exitReturnStatement(this);
		}
	}
}
export class AssignTupleStatementContext extends StatementContext {
	public _stmt!: Assign_tuple_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public assign_tuple_statement(): Assign_tuple_statementContext {
		return this.getTypedRuleContext(Assign_tuple_statementContext, 0) as Assign_tuple_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAssignTupleStatement) {
	 		listener.enterAssignTupleStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAssignTupleStatement) {
	 		listener.exitAssignTupleStatement(this);
		}
	}
}
export class ClosureStatementContext extends StatementContext {
	public _decl!: Concrete_method_declarationContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public concrete_method_declaration(): Concrete_method_declarationContext {
		return this.getTypedRuleContext(Concrete_method_declarationContext, 0) as Concrete_method_declarationContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterClosureStatement) {
	 		listener.enterClosureStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitClosureStatement) {
	 		listener.exitClosureStatement(this);
		}
	}
}
export class FlushStatementContext extends StatementContext {
	public _stmt!: Flush_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public flush_statement(): Flush_statementContext {
		return this.getTypedRuleContext(Flush_statementContext, 0) as Flush_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterFlushStatement) {
	 		listener.enterFlushStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitFlushStatement) {
	 		listener.exitFlushStatement(this);
		}
	}
}
export class DoWhileStatementContext extends StatementContext {
	public _stmt!: Do_while_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public do_while_statement(): Do_while_statementContext {
		return this.getTypedRuleContext(Do_while_statementContext, 0) as Do_while_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDoWhileStatement) {
	 		listener.enterDoWhileStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDoWhileStatement) {
	 		listener.exitDoWhileStatement(this);
		}
	}
}
export class ForEachStatementContext extends StatementContext {
	public _stmt!: For_each_statementContext;
	constructor(parser: MParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public for_each_statement(): For_each_statementContext {
		return this.getTypedRuleContext(For_each_statementContext, 0) as For_each_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterForEachStatement) {
	 		listener.enterForEachStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitForEachStatement) {
	 		listener.exitForEachStatement(this);
		}
	}
}


export class Flush_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FLUSH(): TerminalNode {
		return this.getToken(MParser.FLUSH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_flush_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterFlush_statement) {
	 		listener.enterFlush_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
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
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELETE(): TerminalNode {
		return this.getToken(MParser.DELETE, 0);
	}
	public LPAR_list(): TerminalNode[] {
	    	return this.getTokens(MParser.LPAR);
	}
	public LPAR(i: number): TerminalNode {
		return this.getToken(MParser.LPAR, i);
	}
	public RPAR_list(): TerminalNode[] {
	    	return this.getTokens(MParser.RPAR);
	}
	public RPAR(i: number): TerminalNode {
		return this.getToken(MParser.RPAR, i);
	}
	public STORE(): TerminalNode {
		return this.getToken(MParser.STORE, 0);
	}
	public expression_list_list(): Expression_listContext[] {
		return this.getTypedRuleContexts(Expression_listContext) as Expression_listContext[];
	}
	public expression_list(i: number): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, i) as Expression_listContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(MParser.WITH, 0);
	}
	public metadata(): MetadataContext {
		return this.getTypedRuleContext(MetadataContext, 0) as MetadataContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(MParser.THEN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public AND(): TerminalNode {
		return this.getToken(MParser.AND, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_store_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterStore_statement) {
	 		listener.enterStore_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitStore_statement) {
	 		listener.exitStore_statement(this);
		}
	}
}


export class Method_call_expressionContext extends ParserRuleContext {
	public _name!: Method_identifierContext;
	public _args!: Argument_assignment_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public method_identifier(): Method_identifierContext {
		return this.getTypedRuleContext(Method_identifierContext, 0) as Method_identifierContext;
	}
	public argument_assignment_list(): Argument_assignment_listContext {
		return this.getTypedRuleContext(Argument_assignment_listContext, 0) as Argument_assignment_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_method_call_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMethod_call_expression) {
	 		listener.enterMethod_call_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
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
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public method_call_expression(): Method_call_expressionContext {
		return this.getTypedRuleContext(Method_call_expressionContext, 0) as Method_call_expressionContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(MParser.THEN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public instance_expression(): Instance_expressionContext {
		return this.getTypedRuleContext(Instance_expressionContext, 0) as Instance_expressionContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(MParser.WITH, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_method_call_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMethod_call_statement) {
	 		listener.enterMethod_call_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMethod_call_statement) {
	 		listener.exitMethod_call_statement(this);
		}
	}
}


export class With_resource_statementContext extends ParserRuleContext {
	public _stmt!: Assign_variable_statementContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(MParser.WITH, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public assign_variable_statement(): Assign_variable_statementContext {
		return this.getTypedRuleContext(Assign_variable_statementContext, 0) as Assign_variable_statementContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_with_resource_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterWith_resource_statement) {
	 		listener.enterWith_resource_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitWith_resource_statement) {
	 		listener.exitWith_resource_statement(this);
		}
	}
}


export class With_singleton_statementContext extends ParserRuleContext {
	public _typ!: Type_identifierContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(MParser.WITH, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_with_singleton_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterWith_singleton_statement) {
	 		listener.enterWith_singleton_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitWith_singleton_statement) {
	 		listener.exitWith_singleton_statement(this);
		}
	}
}


export class Switch_statementContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	public _cases!: Switch_case_statement_listContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SWITCH(): TerminalNode {
		return this.getToken(MParser.SWITCH, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(MParser.ON, 0);
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(MParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(MParser.COLON, i);
	}
	public indent_list(): IndentContext[] {
		return this.getTypedRuleContexts(IndentContext) as IndentContext[];
	}
	public indent(i: number): IndentContext {
		return this.getTypedRuleContext(IndentContext, i) as IndentContext;
	}
	public dedent_list(): DedentContext[] {
		return this.getTypedRuleContexts(DedentContext) as DedentContext[];
	}
	public dedent(i: number): DedentContext {
		return this.getTypedRuleContext(DedentContext, i) as DedentContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public switch_case_statement_list(): Switch_case_statement_listContext {
		return this.getTypedRuleContext(Switch_case_statement_listContext, 0) as Switch_case_statement_listContext;
	}
	public lfp(): LfpContext {
		return this.getTypedRuleContext(LfpContext, 0) as LfpContext;
	}
	public OTHERWISE(): TerminalNode {
		return this.getToken(MParser.OTHERWISE, 0);
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_switch_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSwitch_statement) {
	 		listener.enterSwitch_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSwitch_statement) {
	 		listener.exitSwitch_statement(this);
		}
	}
}


export class Switch_case_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_switch_case_statement;
	}
	public copyFrom(ctx: Switch_case_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class AtomicSwitchCaseContext extends Switch_case_statementContext {
	public _exp!: Atomic_literalContext;
	public _stmts!: Statement_listContext;
	constructor(parser: MParser, ctx: Switch_case_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHEN(): TerminalNode {
		return this.getToken(MParser.WHEN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public atomic_literal(): Atomic_literalContext {
		return this.getTypedRuleContext(Atomic_literalContext, 0) as Atomic_literalContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAtomicSwitchCase) {
	 		listener.enterAtomicSwitchCase(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAtomicSwitchCase) {
	 		listener.exitAtomicSwitchCase(this);
		}
	}
}
export class CollectionSwitchCaseContext extends Switch_case_statementContext {
	public _exp!: Literal_collectionContext;
	public _stmts!: Statement_listContext;
	constructor(parser: MParser, ctx: Switch_case_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHEN(): TerminalNode {
		return this.getToken(MParser.WHEN, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(MParser.IN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public literal_collection(): Literal_collectionContext {
		return this.getTypedRuleContext(Literal_collectionContext, 0) as Literal_collectionContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCollectionSwitchCase) {
	 		listener.enterCollectionSwitchCase(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCollectionSwitchCase) {
	 		listener.exitCollectionSwitchCase(this);
		}
	}
}


export class For_each_statementContext extends ParserRuleContext {
	public _name1!: Variable_identifierContext;
	public _name2!: Variable_identifierContext;
	public _source!: ExpressionContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(MParser.FOR, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(MParser.IN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
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
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_for_each_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterFor_each_statement) {
	 		listener.enterFor_each_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitFor_each_statement) {
	 		listener.exitFor_each_statement(this);
		}
	}
}


export class Do_while_statementContext extends ParserRuleContext {
	public _stmts!: Statement_listContext;
	public _exp!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DO(): TerminalNode {
		return this.getToken(MParser.DO, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public lfp(): LfpContext {
		return this.getTypedRuleContext(LfpContext, 0) as LfpContext;
	}
	public WHILE(): TerminalNode {
		return this.getToken(MParser.WHILE, 0);
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_do_while_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDo_while_statement) {
	 		listener.enterDo_while_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDo_while_statement) {
	 		listener.exitDo_while_statement(this);
		}
	}
}


export class While_statementContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(MParser.WHILE, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_while_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterWhile_statement) {
	 		listener.enterWhile_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitWhile_statement) {
	 		listener.exitWhile_statement(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	public _stmts!: Statement_listContext;
	public _elseIfs!: Else_if_statement_listContext;
	public _elseStmts!: Statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(MParser.IF, 0);
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(MParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(MParser.COLON, i);
	}
	public indent_list(): IndentContext[] {
		return this.getTypedRuleContexts(IndentContext) as IndentContext[];
	}
	public indent(i: number): IndentContext {
		return this.getTypedRuleContext(IndentContext, i) as IndentContext;
	}
	public dedent_list(): DedentContext[] {
		return this.getTypedRuleContexts(DedentContext) as DedentContext[];
	}
	public dedent(i: number): DedentContext {
		return this.getTypedRuleContext(DedentContext, i) as DedentContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_list_list(): Statement_listContext[] {
		return this.getTypedRuleContexts(Statement_listContext) as Statement_listContext[];
	}
	public statement_list(i: number): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, i) as Statement_listContext;
	}
	public lfp_list(): LfpContext[] {
		return this.getTypedRuleContexts(LfpContext) as LfpContext[];
	}
	public lfp(i: number): LfpContext {
		return this.getTypedRuleContext(LfpContext, i) as LfpContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(MParser.ELSE, 0);
	}
	public else_if_statement_list(): Else_if_statement_listContext {
		return this.getTypedRuleContext(Else_if_statement_listContext, 0) as Else_if_statement_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_if_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIf_statement) {
	 		listener.enterIf_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIf_statement) {
	 		listener.exitIf_statement(this);
		}
	}
}


export class Else_if_statement_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_else_if_statement_list;
	}
	public copyFrom(ctx: Else_if_statement_listContext): void {
		super.copyFrom(ctx);
	}
}
export class ElseIfStatementListContext extends Else_if_statement_listContext {
	public _exp!: ExpressionContext;
	public _stmts!: Statement_listContext;
	constructor(parser: MParser, ctx: Else_if_statement_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ELSE(): TerminalNode {
		return this.getToken(MParser.ELSE, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(MParser.IF, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterElseIfStatementList) {
	 		listener.enterElseIfStatementList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitElseIfStatementList) {
	 		listener.exitElseIfStatementList(this);
		}
	}
}
export class ElseIfStatementListItemContext extends Else_if_statement_listContext {
	public _items!: Else_if_statement_listContext;
	public _exp!: ExpressionContext;
	public _stmts!: Statement_listContext;
	constructor(parser: MParser, ctx: Else_if_statement_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lfp(): LfpContext {
		return this.getTypedRuleContext(LfpContext, 0) as LfpContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(MParser.ELSE, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(MParser.IF, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public else_if_statement_list(): Else_if_statement_listContext {
		return this.getTypedRuleContext(Else_if_statement_listContext, 0) as Else_if_statement_listContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterElseIfStatementListItem) {
	 		listener.enterElseIfStatementListItem(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitElseIfStatementListItem) {
	 		listener.exitElseIfStatementListItem(this);
		}
	}
}


export class Raise_statementContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RAISE(): TerminalNode {
		return this.getToken(MParser.RAISE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_raise_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterRaise_statement) {
	 		listener.enterRaise_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
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
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(MParser.TRY, 0);
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(MParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(MParser.COLON, i);
	}
	public indent_list(): IndentContext[] {
		return this.getTypedRuleContexts(IndentContext) as IndentContext[];
	}
	public indent(i: number): IndentContext {
		return this.getTypedRuleContext(IndentContext, i) as IndentContext;
	}
	public dedent_list(): DedentContext[] {
		return this.getTypedRuleContexts(DedentContext) as DedentContext[];
	}
	public dedent(i: number): DedentContext {
		return this.getTypedRuleContext(DedentContext, i) as DedentContext;
	}
	public lfs_list(): LfsContext[] {
		return this.getTypedRuleContexts(LfsContext) as LfsContext[];
	}
	public lfs(i: number): LfsContext {
		return this.getTypedRuleContext(LfsContext, i) as LfsContext;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public statement_list_list(): Statement_listContext[] {
		return this.getTypedRuleContexts(Statement_listContext) as Statement_listContext[];
	}
	public statement_list(i: number): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, i) as Statement_listContext;
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(MParser.EXCEPT, 0);
	}
	public FINALLY(): TerminalNode {
		return this.getToken(MParser.FINALLY, 0);
	}
	public catch_statement_list(): Catch_statement_listContext {
		return this.getTypedRuleContext(Catch_statement_listContext, 0) as Catch_statement_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_try_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTry_statement) {
	 		listener.enterTry_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTry_statement) {
	 		listener.exitTry_statement(this);
		}
	}
}


export class Catch_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_catch_statement;
	}
	public copyFrom(ctx: Catch_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class CatchAtomicStatementContext extends Catch_statementContext {
	public _name!: Symbol_identifierContext;
	public _stmts!: Statement_listContext;
	constructor(parser: MParser, ctx: Catch_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(MParser.EXCEPT, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public lfs(): LfsContext {
		return this.getTypedRuleContext(LfsContext, 0) as LfsContext;
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCatchAtomicStatement) {
	 		listener.enterCatchAtomicStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCatchAtomicStatement) {
	 		listener.exitCatchAtomicStatement(this);
		}
	}
}
export class CatchCollectionStatementContext extends Catch_statementContext {
	public _exp!: Symbol_listContext;
	public _stmts!: Statement_listContext;
	constructor(parser: MParser, ctx: Catch_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(MParser.EXCEPT, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(MParser.IN, 0);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public lfs(): LfsContext {
		return this.getTypedRuleContext(LfsContext, 0) as LfsContext;
	}
	public symbol_list(): Symbol_listContext {
		return this.getTypedRuleContext(Symbol_listContext, 0) as Symbol_listContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCatchCollectionStatement) {
	 		listener.enterCatchCollectionStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCatchCollectionStatement) {
	 		listener.exitCatchCollectionStatement(this);
		}
	}
}


export class Break_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(MParser.BREAK, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_break_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterBreak_statement) {
	 		listener.enterBreak_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitBreak_statement) {
	 		listener.exitBreak_statement(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(MParser.RETURN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_return_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterReturn_statement) {
	 		listener.enterReturn_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitReturn_statement) {
	 		listener.exitReturn_statement(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_expression;
	}
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IntDivideExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
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
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIntDivideExpression) {
	 		listener.enterIntDivideExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIntDivideExpression) {
	 		listener.exitIntDivideExpression(this);
		}
	}
}
export class HasAnyExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: Filter_expressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HAS(): TerminalNode {
		return this.getToken(MParser.HAS, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(MParser.ANY, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public filter_expression(): Filter_expressionContext {
		return this.getTypedRuleContext(Filter_expressionContext, 0) as Filter_expressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(MParser.NOT, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterHasAnyExpression) {
	 		listener.enterHasAnyExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitHasAnyExpression) {
	 		listener.exitHasAnyExpression(this);
		}
	}
}
export class HasExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HAS(): TerminalNode {
		return this.getToken(MParser.HAS, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(MParser.NOT, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterHasExpression) {
	 		listener.enterHasExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitHasExpression) {
	 		listener.exitHasExpression(this);
		}
	}
}
export class TernaryExpressionContext extends ExpressionContext {
	public _ifTrue!: ExpressionContext;
	public _test!: ExpressionContext;
	public _ifFalse!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IF(): TerminalNode {
		return this.getToken(MParser.IF, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(MParser.ELSE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTernaryExpression) {
	 		listener.enterTernaryExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTernaryExpression) {
	 		listener.exitTernaryExpression(this);
		}
	}
}
export class InExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(MParser.IN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(MParser.NOT, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterInExpression) {
	 		listener.enterInExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitInExpression) {
	 		listener.exitInExpression(this);
		}
	}
}
export class JsxExpressionContext extends ExpressionContext {
	public _exp!: Jsx_expressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public jsx_expression(): Jsx_expressionContext {
		return this.getTypedRuleContext(Jsx_expressionContext, 0) as Jsx_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsxExpression) {
	 		listener.enterJsxExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsxExpression) {
	 		listener.exitJsxExpression(this);
		}
	}
}
export class NotExpressionContext extends ExpressionContext {
	public _exp!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(MParser.NOT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNotExpression) {
	 		listener.enterNotExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNotExpression) {
	 		listener.exitNotExpression(this);
		}
	}
}
export class CompareExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
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
		return this.getToken(MParser.LT, 0);
	}
	public LTE(): TerminalNode {
		return this.getToken(MParser.LTE, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
	}
	public GTE(): TerminalNode {
		return this.getToken(MParser.GTE, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCompareExpression) {
	 		listener.enterCompareExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCompareExpression) {
	 		listener.exitCompareExpression(this);
		}
	}
}
export class OrExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OR(): TerminalNode {
		return this.getToken(MParser.OR, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOrExpression) {
	 		listener.enterOrExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOrExpression) {
	 		listener.exitOrExpression(this);
		}
	}
}
export class CodeExpressionContext extends ExpressionContext {
	public _exp!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CODE(): TerminalNode {
		return this.getToken(MParser.CODE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCodeExpression) {
	 		listener.enterCodeExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCodeExpression) {
	 		listener.exitCodeExpression(this);
		}
	}
}
export class AndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AND(): TerminalNode {
		return this.getToken(MParser.AND, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAndExpression) {
	 		listener.enterAndExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAndExpression) {
	 		listener.exitAndExpression(this);
		}
	}
}
export class ArrowExpressionContext extends ExpressionContext {
	public _exp!: Arrow_expressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public arrow_expression(): Arrow_expressionContext {
		return this.getTypedRuleContext(Arrow_expressionContext, 0) as Arrow_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterArrowExpression) {
	 		listener.enterArrowExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitArrowExpression) {
	 		listener.exitArrowExpression(this);
		}
	}
}
export class ContainsExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CONTAINS(): TerminalNode {
		return this.getToken(MParser.CONTAINS, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(MParser.NOT, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterContainsExpression) {
	 		listener.enterContainsExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitContainsExpression) {
	 		listener.exitContainsExpression(this);
		}
	}
}
export class FilteredListExpressionContext extends ExpressionContext {
	public _src!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public filtered_list_suffix(): Filtered_list_suffixContext {
		return this.getTypedRuleContext(Filtered_list_suffixContext, 0) as Filtered_list_suffixContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterFilteredListExpression) {
	 		listener.enterFilteredListExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitFilteredListExpression) {
	 		listener.exitFilteredListExpression(this);
		}
	}
}
export class TypeExpressionContext extends ExpressionContext {
	public _exp!: Type_expressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_expression(): Type_expressionContext {
		return this.getTypedRuleContext(Type_expressionContext, 0) as Type_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTypeExpression) {
	 		listener.enterTypeExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTypeExpression) {
	 		listener.exitTypeExpression(this);
		}
	}
}
export class MultiplyExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
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
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMultiplyExpression) {
	 		listener.enterMultiplyExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMultiplyExpression) {
	 		listener.exitMultiplyExpression(this);
		}
	}
}
export class ExecuteExpressionContext extends ExpressionContext {
	public _name!: Variable_identifierContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EXECUTE(): TerminalNode {
		return this.getToken(MParser.EXECUTE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterExecuteExpression) {
	 		listener.enterExecuteExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitExecuteExpression) {
	 		listener.exitExecuteExpression(this);
		}
	}
}
export class IteratorExpressionContext extends ExpressionContext {
	public _exp!: ExpressionContext;
	public _name!: Variable_identifierContext;
	public _source!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FOR(): TerminalNode {
		return this.getToken(MParser.FOR, 0);
	}
	public EACH(): TerminalNode {
		return this.getToken(MParser.EACH, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(MParser.IN, 0);
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
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIteratorExpression) {
	 		listener.enterIteratorExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIteratorExpression) {
	 		listener.exitIteratorExpression(this);
		}
	}
}
export class DivideExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
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
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDivideExpression) {
	 		listener.enterDivideExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDivideExpression) {
	 		listener.exitDivideExpression(this);
		}
	}
}
export class IsExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: Is_expressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IS(): TerminalNode {
		return this.getToken(MParser.IS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public is_expression(): Is_expressionContext {
		return this.getTypedRuleContext(Is_expressionContext, 0) as Is_expressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(MParser.NOT, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIsExpression) {
	 		listener.enterIsExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIsExpression) {
	 		listener.exitIsExpression(this);
		}
	}
}
export class MinusExpressionContext extends ExpressionContext {
	public _exp!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MParser.MINUS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMinusExpression) {
	 		listener.enterMinusExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMinusExpression) {
	 		listener.exitMinusExpression(this);
		}
	}
}
export class AddExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
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
		return this.getToken(MParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MParser.MINUS, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAddExpression) {
	 		listener.enterAddExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAddExpression) {
	 		listener.exitAddExpression(this);
		}
	}
}
export class HasAllExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: Filter_expressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HAS(): TerminalNode {
		return this.getToken(MParser.HAS, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(MParser.ALL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public filter_expression(): Filter_expressionContext {
		return this.getTypedRuleContext(Filter_expressionContext, 0) as Filter_expressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(MParser.NOT, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterHasAllExpression) {
	 		listener.enterHasAllExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitHasAllExpression) {
	 		listener.exitHasAllExpression(this);
		}
	}
}
export class InstanceExpressionContext extends ExpressionContext {
	public _exp!: Instance_expressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public instance_expression(): Instance_expressionContext {
		return this.getTypedRuleContext(Instance_expressionContext, 0) as Instance_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterInstanceExpression) {
	 		listener.enterInstanceExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitInstanceExpression) {
	 		listener.exitInstanceExpression(this);
		}
	}
}
export class MutableInstanceExpressionContext extends ExpressionContext {
	public _exp!: Mutable_instance_expressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public mutable_instance_expression(): Mutable_instance_expressionContext {
		return this.getTypedRuleContext(Mutable_instance_expressionContext, 0) as Mutable_instance_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMutableInstanceExpression) {
	 		listener.enterMutableInstanceExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMutableInstanceExpression) {
	 		listener.exitMutableInstanceExpression(this);
		}
	}
}
export class CssExpressionContext extends ExpressionContext {
	public _exp!: Css_expressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public css_expression(): Css_expressionContext {
		return this.getTypedRuleContext(Css_expressionContext, 0) as Css_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCssExpression) {
	 		listener.enterCssExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCssExpression) {
	 		listener.exitCssExpression(this);
		}
	}
}
export class CastExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: Category_or_any_typeContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AS(): TerminalNode {
		return this.getToken(MParser.AS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public category_or_any_type(): Category_or_any_typeContext {
		return this.getTypedRuleContext(Category_or_any_typeContext, 0) as Category_or_any_typeContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCastExpression) {
	 		listener.enterCastExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCastExpression) {
	 		listener.exitCastExpression(this);
		}
	}
}
export class ModuloExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
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
	public enterRule(listener: MParserListener): void {
	    if(listener.enterModuloExpression) {
	 		listener.enterModuloExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitModuloExpression) {
	 		listener.exitModuloExpression(this);
		}
	}
}
export class EqualsExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: MParser, ctx: ExpressionContext) {
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
		return this.getToken(MParser.EQ2, 0);
	}
	public XEQ(): TerminalNode {
		return this.getToken(MParser.XEQ, 0);
	}
	public TEQ(): TerminalNode {
		return this.getToken(MParser.TEQ, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterEqualsExpression) {
	 		listener.enterEqualsExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitEqualsExpression) {
	 		listener.exitEqualsExpression(this);
		}
	}
}


export class Filter_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_filter_expression;
	}
	public copyFrom(ctx: Filter_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExplicitFilterExpressionContext extends Filter_expressionContext {
	constructor(parser: MParser, ctx: Filter_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(MParser.WHERE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterExplicitFilterExpression) {
	 		listener.enterExplicitFilterExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitExplicitFilterExpression) {
	 		listener.exitExplicitFilterExpression(this);
		}
	}
}
export class OtherFilterExpressionContext extends Filter_expressionContext {
	constructor(parser: MParser, ctx: Filter_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOtherFilterExpression) {
	 		listener.enterOtherFilterExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOtherFilterExpression) {
	 		listener.exitOtherFilterExpression(this);
		}
	}
}
export class ArrowFilterExpressionContext extends Filter_expressionContext {
	constructor(parser: MParser, ctx: Filter_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public WHERE(): TerminalNode {
		return this.getToken(MParser.WHERE, 0);
	}
	public arrow_expression(): Arrow_expressionContext {
		return this.getTypedRuleContext(Arrow_expressionContext, 0) as Arrow_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterArrowFilterExpression) {
	 		listener.enterArrowFilterExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitArrowFilterExpression) {
	 		listener.exitArrowFilterExpression(this);
		}
	}
}


export class Type_expressionContext extends ParserRuleContext {
	public _name!: Type_identifierContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_type_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterType_expression) {
	 		listener.enterType_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitType_expression) {
	 		listener.exitType_expression(this);
		}
	}
}


export class Selectable_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_selectable_expression;
	}
	public copyFrom(ctx: Selectable_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ThisExpressionContext extends Selectable_expressionContext {
	public _exp!: This_expressionContext;
	constructor(parser: MParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public this_expression(): This_expressionContext {
		return this.getTypedRuleContext(This_expressionContext, 0) as This_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterThisExpression) {
	 		listener.enterThisExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitThisExpression) {
	 		listener.exitThisExpression(this);
		}
	}
}
export class ParenthesisExpressionContext extends Selectable_expressionContext {
	public _exp!: Parenthesis_expressionContext;
	constructor(parser: MParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public parenthesis_expression(): Parenthesis_expressionContext {
		return this.getTypedRuleContext(Parenthesis_expressionContext, 0) as Parenthesis_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterParenthesisExpression) {
	 		listener.enterParenthesisExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitParenthesisExpression) {
	 		listener.exitParenthesisExpression(this);
		}
	}
}
export class LiteralExpressionContext extends Selectable_expressionContext {
	public _exp!: Literal_expressionContext;
	constructor(parser: MParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterLiteralExpression) {
	 		listener.enterLiteralExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitLiteralExpression) {
	 		listener.exitLiteralExpression(this);
		}
	}
}
export class MethodExpressionContext extends Selectable_expressionContext {
	public _exp!: Method_expressionContext;
	constructor(parser: MParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public method_expression(): Method_expressionContext {
		return this.getTypedRuleContext(Method_expressionContext, 0) as Method_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMethodExpression) {
	 		listener.enterMethodExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMethodExpression) {
	 		listener.exitMethodExpression(this);
		}
	}
}
export class SuperExpressionContext extends Selectable_expressionContext {
	public _exp!: Super_expressionContext;
	constructor(parser: MParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public super_expression(): Super_expressionContext {
		return this.getTypedRuleContext(Super_expressionContext, 0) as Super_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSuperExpression) {
	 		listener.enterSuperExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSuperExpression) {
	 		listener.exitSuperExpression(this);
		}
	}
}
export class IdentifierExpressionContext extends Selectable_expressionContext {
	public _exp!: IdentifierContext;
	constructor(parser: MParser, ctx: Selectable_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIdentifierExpression) {
	 		listener.enterIdentifierExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIdentifierExpression) {
	 		listener.exitIdentifierExpression(this);
		}
	}
}


export class Instance_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_instance_expression;
	}
	public copyFrom(ctx: Instance_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SelectorExpressionContext extends Instance_expressionContext {
	public _parent!: Instance_expressionContext;
	public _selector!: Instance_selectorContext;
	constructor(parser: MParser, ctx: Instance_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public instance_expression(): Instance_expressionContext {
		return this.getTypedRuleContext(Instance_expressionContext, 0) as Instance_expressionContext;
	}
	public instance_selector(): Instance_selectorContext {
		return this.getTypedRuleContext(Instance_selectorContext, 0) as Instance_selectorContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSelectorExpression) {
	 		listener.enterSelectorExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSelectorExpression) {
	 		listener.exitSelectorExpression(this);
		}
	}
}
export class SelectableExpressionContext extends Instance_expressionContext {
	public _parent!: Selectable_expressionContext;
	constructor(parser: MParser, ctx: Instance_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public selectable_expression(): Selectable_expressionContext {
		return this.getTypedRuleContext(Selectable_expressionContext, 0) as Selectable_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSelectableExpression) {
	 		listener.enterSelectableExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSelectableExpression) {
	 		listener.exitSelectableExpression(this);
		}
	}
}


export class Mutable_instance_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_mutable_instance_expression;
	}
	public copyFrom(ctx: Mutable_instance_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MutableSelectableExpressionContext extends Mutable_instance_expressionContext {
	public _exp!: IdentifierContext;
	constructor(parser: MParser, ctx: Mutable_instance_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMutableSelectableExpression) {
	 		listener.enterMutableSelectableExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMutableSelectableExpression) {
	 		listener.exitMutableSelectableExpression(this);
		}
	}
}
export class MutableSelectorExpressionContext extends Mutable_instance_expressionContext {
	public _parent!: Mutable_instance_expressionContext;
	public _selector!: Instance_selectorContext;
	constructor(parser: MParser, ctx: Mutable_instance_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public mutable_instance_expression(): Mutable_instance_expressionContext {
		return this.getTypedRuleContext(Mutable_instance_expressionContext, 0) as Mutable_instance_expressionContext;
	}
	public instance_selector(): Instance_selectorContext {
		return this.getTypedRuleContext(Instance_selectorContext, 0) as Instance_selectorContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMutableSelectorExpression) {
	 		listener.enterMutableSelectorExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMutableSelectorExpression) {
	 		listener.exitMutableSelectorExpression(this);
		}
	}
}


export class Method_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blob_expression(): Blob_expressionContext {
		return this.getTypedRuleContext(Blob_expressionContext, 0) as Blob_expressionContext;
	}
	public document_expression(): Document_expressionContext {
		return this.getTypedRuleContext(Document_expressionContext, 0) as Document_expressionContext;
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
    	return MParser.RULE_method_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMethod_expression) {
	 		listener.enterMethod_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMethod_expression) {
	 		listener.exitMethod_expression(this);
		}
	}
}


export class Instance_selectorContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_instance_selector;
	}
	public copyFrom(ctx: Instance_selectorContext): void {
		super.copyFrom(ctx);
	}
}
export class SliceSelectorContext extends Instance_selectorContext {
	public _xslice!: Slice_argumentsContext;
	constructor(parser: MParser, ctx: Instance_selectorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public slice_arguments(): Slice_argumentsContext {
		return this.getTypedRuleContext(Slice_argumentsContext, 0) as Slice_argumentsContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSliceSelector) {
	 		listener.enterSliceSelector(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSliceSelector) {
	 		listener.exitSliceSelector(this);
		}
	}
}
export class MethodSelectorContext extends Instance_selectorContext {
	public _method!: Method_call_expressionContext;
	constructor(parser: MParser, ctx: Instance_selectorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public method_call_expression(): Method_call_expressionContext {
		return this.getTypedRuleContext(Method_call_expressionContext, 0) as Method_call_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMethodSelector) {
	 		listener.enterMethodSelector(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMethodSelector) {
	 		listener.exitMethodSelector(this);
		}
	}
}
export class MemberSelectorContext extends Instance_selectorContext {
	public _name!: Member_identifierContext;
	constructor(parser: MParser, ctx: Instance_selectorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public member_identifier(): Member_identifierContext {
		return this.getTypedRuleContext(Member_identifierContext, 0) as Member_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMemberSelector) {
	 		listener.enterMemberSelector(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMemberSelector) {
	 		listener.exitMemberSelector(this);
		}
	}
}
export class ItemSelectorContext extends Instance_selectorContext {
	public _exp!: ExpressionContext;
	constructor(parser: MParser, ctx: Instance_selectorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterItemSelector) {
	 		listener.enterItemSelector(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitItemSelector) {
	 		listener.exitItemSelector(this);
		}
	}
}


export class Blob_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BLOB(): TerminalNode {
		return this.getToken(MParser.BLOB, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_blob_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterBlob_expression) {
	 		listener.enterBlob_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitBlob_expression) {
	 		listener.exitBlob_expression(this);
		}
	}
}


export class Document_expressionContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOCUMENT(): TerminalNode {
		return this.getToken(MParser.DOCUMENT, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(MParser.FROM, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(MParser.EQ, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_document_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDocument_expression) {
	 		listener.enterDocument_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDocument_expression) {
	 		listener.exitDocument_expression(this);
		}
	}
}


export class Constructor_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_constructor_expression;
	}
	public copyFrom(ctx: Constructor_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ConstructorFromContext extends Constructor_expressionContext {
	public _typ!: Mutable_category_typeContext;
	public _copyExp!: Copy_fromContext;
	public _args!: Argument_assignment_listContext;
	constructor(parser: MParser, ctx: Constructor_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public copy_from(): Copy_fromContext {
		return this.getTypedRuleContext(Copy_fromContext, 0) as Copy_fromContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
	public argument_assignment_list(): Argument_assignment_listContext {
		return this.getTypedRuleContext(Argument_assignment_listContext, 0) as Argument_assignment_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterConstructorFrom) {
	 		listener.enterConstructorFrom(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitConstructorFrom) {
	 		listener.exitConstructorFrom(this);
		}
	}
}
export class ConstructorNoFromContext extends Constructor_expressionContext {
	public _typ!: Mutable_category_typeContext;
	public _args!: Argument_assignment_listContext;
	constructor(parser: MParser, ctx: Constructor_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public argument_assignment_list(): Argument_assignment_listContext {
		return this.getTypedRuleContext(Argument_assignment_listContext, 0) as Argument_assignment_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterConstructorNoFrom) {
	 		listener.enterConstructorNoFrom(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitConstructorNoFrom) {
	 		listener.exitConstructorNoFrom(this);
		}
	}
}


export class Copy_fromContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(MParser.FROM, 0);
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_copy_from;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCopy_from) {
	 		listener.enterCopy_from(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCopy_from) {
	 		listener.exitCopy_from(this);
		}
	}
}


export class Argument_assignment_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_argument_assignment_list;
	}
	public copyFrom(ctx: Argument_assignment_listContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionAssignmentListContext extends Argument_assignment_listContext {
	public _exp!: ExpressionContext;
	constructor(parser: MParser, ctx: Argument_assignment_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterExpressionAssignmentList) {
	 		listener.enterExpressionAssignmentList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitExpressionAssignmentList) {
	 		listener.exitExpressionAssignmentList(this);
		}
	}
}
export class ArgumentAssignmentListContext extends Argument_assignment_listContext {
	public _item!: Argument_assignmentContext;
	constructor(parser: MParser, ctx: Argument_assignment_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public argument_assignment(): Argument_assignmentContext {
		return this.getTypedRuleContext(Argument_assignmentContext, 0) as Argument_assignmentContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterArgumentAssignmentList) {
	 		listener.enterArgumentAssignmentList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitArgumentAssignmentList) {
	 		listener.exitArgumentAssignmentList(this);
		}
	}
}
export class ArgumentAssignmentListItemContext extends Argument_assignment_listContext {
	public _items!: Argument_assignment_listContext;
	public _item!: Argument_assignmentContext;
	constructor(parser: MParser, ctx: Argument_assignment_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
	public argument_assignment_list(): Argument_assignment_listContext {
		return this.getTypedRuleContext(Argument_assignment_listContext, 0) as Argument_assignment_listContext;
	}
	public argument_assignment(): Argument_assignmentContext {
		return this.getTypedRuleContext(Argument_assignmentContext, 0) as Argument_assignmentContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterArgumentAssignmentListItem) {
	 		listener.enterArgumentAssignmentListItem(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitArgumentAssignmentListItem) {
	 		listener.exitArgumentAssignmentListItem(this);
		}
	}
}


export class Argument_assignmentContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _exp!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_argument_assignment;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterArgument_assignment) {
	 		listener.enterArgument_assignment(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitArgument_assignment) {
	 		listener.exitArgument_assignment(this);
		}
	}
}


export class Write_statementContext extends ParserRuleContext {
	public _what!: ExpressionContext;
	public _target!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WRITE(): TerminalNode {
		return this.getToken(MParser.WRITE, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(MParser.TO, 0);
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
    public get ruleIndex(): number {
    	return MParser.RULE_write_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterWrite_statement) {
	 		listener.enterWrite_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitWrite_statement) {
	 		listener.exitWrite_statement(this);
		}
	}
}


export class Filtered_list_suffixContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _predicate!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FILTERED(): TerminalNode {
		return this.getToken(MParser.FILTERED, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(MParser.WHERE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public WITH(): TerminalNode {
		return this.getToken(MParser.WITH, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_filtered_list_suffix;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterFiltered_list_suffix) {
	 		listener.enterFiltered_list_suffix(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitFiltered_list_suffix) {
	 		listener.exitFiltered_list_suffix(this);
		}
	}
}


export class Fetch_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_fetch_expression;
	}
	public copyFrom(ctx: Fetch_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class FetchOneContext extends Fetch_expressionContext {
	public _typ!: Mutable_category_typeContext;
	public _predicate!: ExpressionContext;
	public _include!: Include_listContext;
	constructor(parser: MParser, ctx: Fetch_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FETCH(): TerminalNode {
		return this.getToken(MParser.FETCH, 0);
	}
	public ONE(): TerminalNode {
		return this.getToken(MParser.ONE, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(MParser.WHERE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public INCLUDE(): TerminalNode {
		return this.getToken(MParser.INCLUDE, 0);
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public include_list(): Include_listContext {
		return this.getTypedRuleContext(Include_listContext, 0) as Include_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterFetchOne) {
	 		listener.enterFetchOne(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitFetchOne) {
	 		listener.exitFetchOne(this);
		}
	}
}
export class FetchManyContext extends Fetch_expressionContext {
	public _xstart!: ExpressionContext;
	public _xstop!: ExpressionContext;
	public _typ!: Mutable_category_typeContext;
	public _predicate!: ExpressionContext;
	public _include!: Include_listContext;
	public _orderby!: Order_by_listContext;
	constructor(parser: MParser, ctx: Fetch_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FETCH(): TerminalNode {
		return this.getToken(MParser.FETCH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(MParser.ALL, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(MParser.ROWS, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(MParser.TO, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(MParser.WHERE, 0);
	}
	public INCLUDE(): TerminalNode {
		return this.getToken(MParser.INCLUDE, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(MParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(MParser.BY, 0);
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public include_list(): Include_listContext {
		return this.getTypedRuleContext(Include_listContext, 0) as Include_listContext;
	}
	public order_by_list(): Order_by_listContext {
		return this.getTypedRuleContext(Order_by_listContext, 0) as Order_by_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterFetchMany) {
	 		listener.enterFetchMany(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitFetchMany) {
	 		listener.exitFetchMany(this);
		}
	}
}


export class Fetch_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_fetch_statement;
	}
	public copyFrom(ctx: Fetch_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class FetchManyAsyncContext extends Fetch_statementContext {
	public _xstart!: ExpressionContext;
	public _xstop!: ExpressionContext;
	public _typ!: Mutable_category_typeContext;
	public _predicate!: ExpressionContext;
	public _include!: Include_listContext;
	public _orderby!: Order_by_listContext;
	constructor(parser: MParser, ctx: Fetch_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FETCH(): TerminalNode {
		return this.getToken(MParser.FETCH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public then(): ThenContext {
		return this.getTypedRuleContext(ThenContext, 0) as ThenContext;
	}
	public ALL(): TerminalNode {
		return this.getToken(MParser.ALL, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(MParser.ROWS, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(MParser.TO, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public WHERE(): TerminalNode {
		return this.getToken(MParser.WHERE, 0);
	}
	public INCLUDE(): TerminalNode {
		return this.getToken(MParser.INCLUDE, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(MParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(MParser.BY, 0);
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public include_list(): Include_listContext {
		return this.getTypedRuleContext(Include_listContext, 0) as Include_listContext;
	}
	public order_by_list(): Order_by_listContext {
		return this.getTypedRuleContext(Order_by_listContext, 0) as Order_by_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterFetchManyAsync) {
	 		listener.enterFetchManyAsync(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitFetchManyAsync) {
	 		listener.exitFetchManyAsync(this);
		}
	}
}
export class FetchOneAsyncContext extends Fetch_statementContext {
	public _typ!: Mutable_category_typeContext;
	public _predicate!: ExpressionContext;
	public _include!: Include_listContext;
	constructor(parser: MParser, ctx: Fetch_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public FETCH(): TerminalNode {
		return this.getToken(MParser.FETCH, 0);
	}
	public ONE(): TerminalNode {
		return this.getToken(MParser.ONE, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(MParser.WHERE, 0);
	}
	public then(): ThenContext {
		return this.getTypedRuleContext(ThenContext, 0) as ThenContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public INCLUDE(): TerminalNode {
		return this.getToken(MParser.INCLUDE, 0);
	}
	public mutable_category_type(): Mutable_category_typeContext {
		return this.getTypedRuleContext(Mutable_category_typeContext, 0) as Mutable_category_typeContext;
	}
	public include_list(): Include_listContext {
		return this.getTypedRuleContext(Include_listContext, 0) as Include_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterFetchOneAsync) {
	 		listener.enterFetchOneAsync(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitFetchOneAsync) {
	 		listener.exitFetchOneAsync(this);
		}
	}
}


export class ThenContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	public _stmts!: Statement_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public THEN(): TerminalNode {
		return this.getToken(MParser.THEN, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(MParser.WITH, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public indent(): IndentContext {
		return this.getTypedRuleContext(IndentContext, 0) as IndentContext;
	}
	public dedent(): DedentContext {
		return this.getTypedRuleContext(DedentContext, 0) as DedentContext;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_then;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterThen) {
	 		listener.enterThen(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitThen) {
	 		listener.exitThen(this);
		}
	}
}


export class Read_statementContext extends ParserRuleContext {
	public _source!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public READ(): TerminalNode {
		return this.getToken(MParser.READ, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(MParser.ALL, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(MParser.FROM, 0);
	}
	public then(): ThenContext {
		return this.getTypedRuleContext(ThenContext, 0) as ThenContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_read_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterRead_statement) {
	 		listener.enterRead_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitRead_statement) {
	 		listener.exitRead_statement(this);
		}
	}
}


export class Sorted_expressionContext extends ParserRuleContext {
	public _source!: Instance_expressionContext;
	public _key!: Sorted_keyContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SORTED(): TerminalNode {
		return this.getToken(MParser.SORTED, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public instance_expression(): Instance_expressionContext {
		return this.getTypedRuleContext(Instance_expressionContext, 0) as Instance_expressionContext;
	}
	public DESC(): TerminalNode {
		return this.getToken(MParser.DESC, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
	public key_token(): Key_tokenContext {
		return this.getTypedRuleContext(Key_tokenContext, 0) as Key_tokenContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(MParser.EQ, 0);
	}
	public sorted_key(): Sorted_keyContext {
		return this.getTypedRuleContext(Sorted_keyContext, 0) as Sorted_keyContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_sorted_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSorted_expression) {
	 		listener.enterSorted_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSorted_expression) {
	 		listener.exitSorted_expression(this);
		}
	}
}


export class Assign_instance_statementContext extends ParserRuleContext {
	public _inst!: Assignable_instanceContext;
	public _exp!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public assignable_instance(): Assignable_instanceContext {
		return this.getTypedRuleContext(Assignable_instanceContext, 0) as Assignable_instanceContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_assign_instance_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAssign_instance_statement) {
	 		listener.enterAssign_instance_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAssign_instance_statement) {
	 		listener.exitAssign_instance_statement(this);
		}
	}
}


export class Child_instanceContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_child_instance;
	}
	public copyFrom(ctx: Child_instanceContext): void {
		super.copyFrom(ctx);
	}
}
export class MemberInstanceContext extends Child_instanceContext {
	public _name!: Variable_identifierContext;
	constructor(parser: MParser, ctx: Child_instanceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMemberInstance) {
	 		listener.enterMemberInstance(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMemberInstance) {
	 		listener.exitMemberInstance(this);
		}
	}
}
export class ItemInstanceContext extends Child_instanceContext {
	public _exp!: ExpressionContext;
	constructor(parser: MParser, ctx: Child_instanceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterItemInstance) {
	 		listener.enterItemInstance(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitItemInstance) {
	 		listener.exitItemInstance(this);
		}
	}
}


export class Assign_tuple_statementContext extends ParserRuleContext {
	public _items!: Variable_identifier_listContext;
	public _exp!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assign(): AssignContext {
		return this.getTypedRuleContext(AssignContext, 0) as AssignContext;
	}
	public variable_identifier_list(): Variable_identifier_listContext {
		return this.getTypedRuleContext(Variable_identifier_listContext, 0) as Variable_identifier_listContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_assign_tuple_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAssign_tuple_statement) {
	 		listener.enterAssign_tuple_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAssign_tuple_statement) {
	 		listener.exitAssign_tuple_statement(this);
		}
	}
}


export class LfsContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LF_list(): TerminalNode[] {
	    	return this.getTokens(MParser.LF);
	}
	public LF(i: number): TerminalNode {
		return this.getToken(MParser.LF, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_lfs;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterLfs) {
	 		listener.enterLfs(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitLfs) {
	 		listener.exitLfs(this);
		}
	}
}


export class LfpContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LF_list(): TerminalNode[] {
	    	return this.getTokens(MParser.LF);
	}
	public LF(i: number): TerminalNode {
		return this.getToken(MParser.LF, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_lfp;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterLfp) {
	 		listener.enterLfp(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitLfp) {
	 		listener.exitLfp(this);
		}
	}
}


export class Ws_plusContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LF_list(): TerminalNode[] {
	    	return this.getTokens(MParser.LF);
	}
	public LF(i: number): TerminalNode {
		return this.getToken(MParser.LF, i);
	}
	public TAB_list(): TerminalNode[] {
	    	return this.getTokens(MParser.TAB);
	}
	public TAB(i: number): TerminalNode {
		return this.getToken(MParser.TAB, i);
	}
	public WS_list(): TerminalNode[] {
	    	return this.getTokens(MParser.WS);
	}
	public WS(i: number): TerminalNode {
		return this.getToken(MParser.WS, i);
	}
	public INDENT_list(): TerminalNode[] {
	    	return this.getTokens(MParser.INDENT);
	}
	public INDENT(i: number): TerminalNode {
		return this.getToken(MParser.INDENT, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_ws_plus;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterWs_plus) {
	 		listener.enterWs_plus(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitWs_plus) {
	 		listener.exitWs_plus(this);
		}
	}
}


export class IndentContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INDENT(): TerminalNode {
		return this.getToken(MParser.INDENT, 0);
	}
	public LF_list(): TerminalNode[] {
	    	return this.getTokens(MParser.LF);
	}
	public LF(i: number): TerminalNode {
		return this.getToken(MParser.LF, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_indent;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIndent) {
	 		listener.enterIndent(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIndent) {
	 		listener.exitIndent(this);
		}
	}
}


export class DedentContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEDENT(): TerminalNode {
		return this.getToken(MParser.DEDENT, 0);
	}
	public LF_list(): TerminalNode[] {
	    	return this.getTokens(MParser.LF);
	}
	public LF(i: number): TerminalNode {
		return this.getToken(MParser.LF, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_dedent;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDedent) {
	 		listener.enterDedent(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDedent) {
	 		listener.exitDedent(this);
		}
	}
}


export class Type_literalContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public category_or_any_type(): Category_or_any_typeContext {
		return this.getTypedRuleContext(Category_or_any_typeContext, 0) as Category_or_any_typeContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_type_literal;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterType_literal) {
	 		listener.enterType_literal(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitType_literal) {
	 		listener.exitType_literal(this);
		}
	}
}


export class Null_literalContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NONE(): TerminalNode {
		return this.getToken(MParser.NONE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_null_literal;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNull_literal) {
	 		listener.enterNull_literal(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNull_literal) {
	 		listener.exitNull_literal(this);
		}
	}
}


export class Comment_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMENT(): TerminalNode {
		return this.getToken(MParser.COMMENT, 0);
	}
	public CSS_DATA(): TerminalNode {
		return this.getToken(MParser.CSS_DATA, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_comment_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterComment_statement) {
	 		listener.enterComment_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitComment_statement) {
	 		listener.exitComment_statement(this);
		}
	}
}


export class ReplContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_repl;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterRepl) {
	 		listener.enterRepl(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitRepl) {
	 		listener.exitRepl(this);
		}
	}
}


export class Declaration_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_declaration_list;
	}
	public copyFrom(ctx: Declaration_listContext): void {
		super.copyFrom(ctx);
	}
}
export class FullDeclarationListContext extends Declaration_listContext {
	constructor(parser: MParser, ctx: Declaration_listContext) {
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
		return this.getToken(MParser.EOF, 0);
	}
	public declarations(): DeclarationsContext {
		return this.getTypedRuleContext(DeclarationsContext, 0) as DeclarationsContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterFullDeclarationList) {
	 		listener.enterFullDeclarationList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitFullDeclarationList) {
	 		listener.exitFullDeclarationList(this);
		}
	}
}


export class DeclarationsContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_declarations;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDeclarations) {
	 		listener.enterDeclarations(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDeclarations) {
	 		listener.exitDeclarations(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDeclaration) {
	 		listener.enterDeclaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDeclaration) {
	 		listener.exitDeclaration(this);
		}
	}
}


export class Annotation_constructorContext extends ParserRuleContext {
	public _name!: Annotation_identifierContext;
	public _exp!: Annotation_argument_valueContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public annotation_identifier(): Annotation_identifierContext {
		return this.getTypedRuleContext(Annotation_identifierContext, 0) as Annotation_identifierContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_annotation_constructor;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAnnotation_constructor) {
	 		listener.enterAnnotation_constructor(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAnnotation_constructor) {
	 		listener.exitAnnotation_constructor(this);
		}
	}
}


export class Annotation_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ARONDBASE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.ARONDBASE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_annotation_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAnnotation_identifier) {
	 		listener.enterAnnotation_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAnnotation_identifier) {
	 		listener.exitAnnotation_identifier(this);
		}
	}
}


export class Annotation_argumentContext extends ParserRuleContext {
	public _name!: Annotation_argument_nameContext;
	public _exp!: Annotation_argument_valueContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(MParser.EQ, 0);
	}
	public annotation_argument_name(): Annotation_argument_nameContext {
		return this.getTypedRuleContext(Annotation_argument_nameContext, 0) as Annotation_argument_nameContext;
	}
	public annotation_argument_value(): Annotation_argument_valueContext {
		return this.getTypedRuleContext(Annotation_argument_valueContext, 0) as Annotation_argument_valueContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_annotation_argument;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAnnotation_argument) {
	 		listener.enterAnnotation_argument(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAnnotation_argument) {
	 		listener.exitAnnotation_argument(this);
		}
	}
}


export class Annotation_argument_nameContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
	public GETTER(): TerminalNode {
		return this.getToken(MParser.GETTER, 0);
	}
	public SETTER(): TerminalNode {
		return this.getToken(MParser.SETTER, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_annotation_argument_name;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAnnotation_argument_name) {
	 		listener.enterAnnotation_argument_name(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAnnotation_argument_name) {
	 		listener.exitAnnotation_argument_name(this);
		}
	}
}


export class Annotation_argument_valueContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_annotation_argument_value;
	}
	public copyFrom(ctx: Annotation_argument_valueContext): void {
		super.copyFrom(ctx);
	}
}
export class AnnotationLiteralValueContext extends Annotation_argument_valueContext {
	public _exp!: Literal_expressionContext;
	constructor(parser: MParser, ctx: Annotation_argument_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAnnotationLiteralValue) {
	 		listener.enterAnnotationLiteralValue(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAnnotationLiteralValue) {
	 		listener.exitAnnotationLiteralValue(this);
		}
	}
}
export class AnnotationTypeValueContext extends Annotation_argument_valueContext {
	public _typ!: Primary_typeContext;
	constructor(parser: MParser, ctx: Annotation_argument_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primary_type(): Primary_typeContext {
		return this.getTypedRuleContext(Primary_typeContext, 0) as Primary_typeContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAnnotationTypeValue) {
	 		listener.enterAnnotationTypeValue(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAnnotationTypeValue) {
	 		listener.exitAnnotationTypeValue(this);
		}
	}
}


export class Resource_declarationContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public native_resource_declaration(): Native_resource_declarationContext {
		return this.getTypedRuleContext(Native_resource_declarationContext, 0) as Native_resource_declarationContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_resource_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterResource_declaration) {
	 		listener.enterResource_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitResource_declaration) {
	 		listener.exitResource_declaration(this);
		}
	}
}


export class Enum_declarationContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_enum_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterEnum_declaration) {
	 		listener.enterEnum_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitEnum_declaration) {
	 		listener.exitEnum_declaration(this);
		}
	}
}


export class Native_symbol_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_native_symbol_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_symbol_list) {
	 		listener.enterNative_symbol_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNative_symbol_list) {
	 		listener.exitNative_symbol_list(this);
		}
	}
}


export class Category_symbol_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_category_symbol_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCategory_symbol_list) {
	 		listener.enterCategory_symbol_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCategory_symbol_list) {
	 		listener.exitCategory_symbol_list(this);
		}
	}
}


export class Symbol_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_symbol_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSymbol_list) {
	 		listener.enterSymbol_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSymbol_list) {
	 		listener.exitSymbol_list(this);
		}
	}
}


export class Attribute_constraintContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_attribute_constraint;
	}
	public copyFrom(ctx: Attribute_constraintContext): void {
		super.copyFrom(ctx);
	}
}
export class MatchingSetContext extends Attribute_constraintContext {
	public _source!: Set_literalContext;
	constructor(parser: MParser, ctx: Attribute_constraintContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(MParser.IN, 0);
	}
	public set_literal(): Set_literalContext {
		return this.getTypedRuleContext(Set_literalContext, 0) as Set_literalContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMatchingSet) {
	 		listener.enterMatchingSet(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMatchingSet) {
	 		listener.exitMatchingSet(this);
		}
	}
}
export class MatchingPatternContext extends Attribute_constraintContext {
	public _text!: Token;
	constructor(parser: MParser, ctx: Attribute_constraintContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MATCHING(): TerminalNode {
		return this.getToken(MParser.MATCHING, 0);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(MParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMatchingPattern) {
	 		listener.enterMatchingPattern(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMatchingPattern) {
	 		listener.exitMatchingPattern(this);
		}
	}
}
export class MatchingListContext extends Attribute_constraintContext {
	public _source!: List_literalContext;
	constructor(parser: MParser, ctx: Attribute_constraintContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(MParser.IN, 0);
	}
	public list_literal(): List_literalContext {
		return this.getTypedRuleContext(List_literalContext, 0) as List_literalContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMatchingList) {
	 		listener.enterMatchingList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMatchingList) {
	 		listener.exitMatchingList(this);
		}
	}
}
export class MatchingRangeContext extends Attribute_constraintContext {
	public _source!: Range_literalContext;
	constructor(parser: MParser, ctx: Attribute_constraintContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(MParser.IN, 0);
	}
	public range_literal(): Range_literalContext {
		return this.getTypedRuleContext(Range_literalContext, 0) as Range_literalContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMatchingRange) {
	 		listener.enterMatchingRange(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMatchingRange) {
	 		listener.exitMatchingRange(this);
		}
	}
}
export class MatchingExpressionContext extends Attribute_constraintContext {
	public _exp!: ExpressionContext;
	constructor(parser: MParser, ctx: Attribute_constraintContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MATCHING(): TerminalNode {
		return this.getToken(MParser.MATCHING, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMatchingExpression) {
	 		listener.enterMatchingExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMatchingExpression) {
	 		listener.exitMatchingExpression(this);
		}
	}
}


export class List_literalContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
	public expression_list(): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_list_literal;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterList_literal) {
	 		listener.enterList_literal(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitList_literal) {
	 		listener.exitList_literal(this);
		}
	}
}


export class Set_literalContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
	public expression_list(): Expression_listContext {
		return this.getTypedRuleContext(Expression_listContext, 0) as Expression_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_set_literal;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSet_literal) {
	 		listener.enterSet_literal(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSet_literal) {
	 		listener.exitSet_literal(this);
		}
	}
}


export class Expression_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_expression_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterExpression_list) {
	 		listener.enterExpression_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitExpression_list) {
	 		listener.exitExpression_list(this);
		}
	}
}


export class Range_literalContext extends ParserRuleContext {
	public _low!: ExpressionContext;
	public _high!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(MParser.RANGE, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_range_literal;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterRange_literal) {
	 		listener.enterRange_literal(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitRange_literal) {
	 		listener.exitRange_literal(this);
		}
	}
}


export class TypedefContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_typedef;
	}
	public copyFrom(ctx: TypedefContext): void {
		super.copyFrom(ctx);
	}
}
export class IteratorTypeContext extends TypedefContext {
	public _i!: TypedefContext;
	constructor(parser: MParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ITERATOR(): TerminalNode {
		return this.getToken(MParser.ITERATOR, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIteratorType) {
	 		listener.enterIteratorType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIteratorType) {
	 		listener.exitIteratorType(this);
		}
	}
}
export class SetTypeContext extends TypedefContext {
	public _s!: TypedefContext;
	constructor(parser: MParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LTGT(): TerminalNode {
		return this.getToken(MParser.LTGT, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSetType) {
	 		listener.enterSetType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSetType) {
	 		listener.exitSetType(this);
		}
	}
}
export class ListTypeContext extends TypedefContext {
	public _l!: TypedefContext;
	constructor(parser: MParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterListType) {
	 		listener.enterListType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitListType) {
	 		listener.exitListType(this);
		}
	}
}
export class DictTypeContext extends TypedefContext {
	public _d!: TypedefContext;
	constructor(parser: MParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LTCOLONGT(): TerminalNode {
		return this.getToken(MParser.LTCOLONGT, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDictType) {
	 		listener.enterDictType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDictType) {
	 		listener.exitDictType(this);
		}
	}
}
export class CursorTypeContext extends TypedefContext {
	public _c!: TypedefContext;
	constructor(parser: MParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CURSOR(): TerminalNode {
		return this.getToken(MParser.CURSOR, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCursorType) {
	 		listener.enterCursorType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCursorType) {
	 		listener.exitCursorType(this);
		}
	}
}
export class TypeTypeContext extends TypedefContext {
	public _t!: TypedefContext;
	constructor(parser: MParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPE(): TerminalNode {
		return this.getToken(MParser.TYPE, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
	}
	public typedef(): TypedefContext {
		return this.getTypedRuleContext(TypedefContext, 0) as TypedefContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTypeType) {
	 		listener.enterTypeType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTypeType) {
	 		listener.exitTypeType(this);
		}
	}
}
export class PrimaryTypeContext extends TypedefContext {
	public _p!: Primary_typeContext;
	constructor(parser: MParser, ctx: TypedefContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primary_type(): Primary_typeContext {
		return this.getTypedRuleContext(Primary_typeContext, 0) as Primary_typeContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPrimaryType) {
	 		listener.enterPrimaryType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPrimaryType) {
	 		listener.exitPrimaryType(this);
		}
	}
}


export class Primary_typeContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_primary_type;
	}
	public copyFrom(ctx: Primary_typeContext): void {
		super.copyFrom(ctx);
	}
}
export class NativeTypeContext extends Primary_typeContext {
	public _n!: Native_typeContext;
	constructor(parser: MParser, ctx: Primary_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public native_type(): Native_typeContext {
		return this.getTypedRuleContext(Native_typeContext, 0) as Native_typeContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNativeType) {
	 		listener.enterNativeType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNativeType) {
	 		listener.exitNativeType(this);
		}
	}
}
export class CategoryTypeContext extends Primary_typeContext {
	public _c!: Category_typeContext;
	constructor(parser: MParser, ctx: Primary_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public category_type(): Category_typeContext {
		return this.getTypedRuleContext(Category_typeContext, 0) as Category_typeContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCategoryType) {
	 		listener.enterCategoryType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCategoryType) {
	 		listener.exitCategoryType(this);
		}
	}
}


export class Native_typeContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_native_type;
	}
	public copyFrom(ctx: Native_typeContext): void {
		super.copyFrom(ctx);
	}
}
export class PeriodTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PERIOD(): TerminalNode {
		return this.getToken(MParser.PERIOD, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPeriodType) {
	 		listener.enterPeriodType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPeriodType) {
	 		listener.exitPeriodType(this);
		}
	}
}
export class HtmlTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HTML(): TerminalNode {
		return this.getToken(MParser.HTML, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterHtmlType) {
	 		listener.enterHtmlType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitHtmlType) {
	 		listener.exitHtmlType(this);
		}
	}
}
export class CssTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CSS(): TerminalNode {
		return this.getToken(MParser.CSS, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCssType) {
	 		listener.enterCssType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCssType) {
	 		listener.exitCssType(this);
		}
	}
}
export class BooleanTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(MParser.BOOLEAN, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterBooleanType) {
	 		listener.enterBooleanType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitBooleanType) {
	 		listener.exitBooleanType(this);
		}
	}
}
export class DocumentTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOCUMENT(): TerminalNode {
		return this.getToken(MParser.DOCUMENT, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDocumentType) {
	 		listener.enterDocumentType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDocumentType) {
	 		listener.exitDocumentType(this);
		}
	}
}
export class CharacterTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHARACTER(): TerminalNode {
		return this.getToken(MParser.CHARACTER, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCharacterType) {
	 		listener.enterCharacterType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCharacterType) {
	 		listener.exitCharacterType(this);
		}
	}
}
export class VersionTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VERSION(): TerminalNode {
		return this.getToken(MParser.VERSION, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterVersionType) {
	 		listener.enterVersionType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitVersionType) {
	 		listener.exitVersionType(this);
		}
	}
}
export class TextTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT(): TerminalNode {
		return this.getToken(MParser.TEXT, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTextType) {
	 		listener.enterTextType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTextType) {
	 		listener.exitTextType(this);
		}
	}
}
export class ImageTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IMAGE(): TerminalNode {
		return this.getToken(MParser.IMAGE, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterImageType) {
	 		listener.enterImageType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitImageType) {
	 		listener.exitImageType(this);
		}
	}
}
export class TimeTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIME(): TerminalNode {
		return this.getToken(MParser.TIME, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTimeType) {
	 		listener.enterTimeType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTimeType) {
	 		listener.exitTimeType(this);
		}
	}
}
export class IntegerTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(MParser.INTEGER, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIntegerType) {
	 		listener.enterIntegerType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIntegerType) {
	 		listener.exitIntegerType(this);
		}
	}
}
export class DateTimeTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATETIME(): TerminalNode {
		return this.getToken(MParser.DATETIME, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDateTimeType) {
	 		listener.enterDateTimeType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDateTimeType) {
	 		listener.exitDateTimeType(this);
		}
	}
}
export class BlobTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BLOB(): TerminalNode {
		return this.getToken(MParser.BLOB, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterBlobType) {
	 		listener.enterBlobType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitBlobType) {
	 		listener.exitBlobType(this);
		}
	}
}
export class UUIDTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UUID(): TerminalNode {
		return this.getToken(MParser.UUID, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterUUIDType) {
	 		listener.enterUUIDType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitUUIDType) {
	 		listener.exitUUIDType(this);
		}
	}
}
export class DecimalTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MParser.DECIMAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDecimalType) {
	 		listener.enterDecimalType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDecimalType) {
	 		listener.exitDecimalType(this);
		}
	}
}
export class CodeTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CODE(): TerminalNode {
		return this.getToken(MParser.CODE, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCodeType) {
	 		listener.enterCodeType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCodeType) {
	 		listener.exitCodeType(this);
		}
	}
}
export class DateTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATE(): TerminalNode {
		return this.getToken(MParser.DATE, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDateType) {
	 		listener.enterDateType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDateType) {
	 		listener.exitDateType(this);
		}
	}
}
export class DbIdTypeContext extends Native_typeContext {
	constructor(parser: MParser, ctx: Native_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DBID(): TerminalNode {
		return this.getToken(MParser.DBID, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDbIdType) {
	 		listener.enterDbIdType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDbIdType) {
	 		listener.exitDbIdType(this);
		}
	}
}


export class Category_typeContext extends ParserRuleContext {
	public _t1!: Token;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.TYPE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_category_type;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCategory_type) {
	 		listener.enterCategory_type(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCategory_type) {
	 		listener.exitCategory_type(this);
		}
	}
}


export class Mutable_category_typeContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public category_type(): Category_typeContext {
		return this.getTypedRuleContext(Category_typeContext, 0) as Category_typeContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_mutable_category_type;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMutable_category_type) {
	 		listener.enterMutable_category_type(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMutable_category_type) {
	 		listener.exitMutable_category_type(this);
		}
	}
}


export class Code_typeContext extends ParserRuleContext {
	public _t1!: Token;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CODE(): TerminalNode {
		return this.getToken(MParser.CODE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_code_type;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCode_type) {
	 		listener.enterCode_type(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCode_type) {
	 		listener.exitCode_type(this);
		}
	}
}


export class Category_declarationContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_category_declaration;
	}
	public copyFrom(ctx: Category_declarationContext): void {
		super.copyFrom(ctx);
	}
}
export class ConcreteCategoryDeclarationContext extends Category_declarationContext {
	public _decl!: Concrete_category_declarationContext;
	constructor(parser: MParser, ctx: Category_declarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public concrete_category_declaration(): Concrete_category_declarationContext {
		return this.getTypedRuleContext(Concrete_category_declarationContext, 0) as Concrete_category_declarationContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterConcreteCategoryDeclaration) {
	 		listener.enterConcreteCategoryDeclaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitConcreteCategoryDeclaration) {
	 		listener.exitConcreteCategoryDeclaration(this);
		}
	}
}
export class NativeCategoryDeclarationContext extends Category_declarationContext {
	public _decl!: Native_category_declarationContext;
	constructor(parser: MParser, ctx: Category_declarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public native_category_declaration(): Native_category_declarationContext {
		return this.getTypedRuleContext(Native_category_declarationContext, 0) as Native_category_declarationContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNativeCategoryDeclaration) {
	 		listener.enterNativeCategoryDeclaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNativeCategoryDeclaration) {
	 		listener.exitNativeCategoryDeclaration(this);
		}
	}
}
export class SingletonCategoryDeclarationContext extends Category_declarationContext {
	public _decl!: Singleton_category_declarationContext;
	constructor(parser: MParser, ctx: Category_declarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleton_category_declaration(): Singleton_category_declarationContext {
		return this.getTypedRuleContext(Singleton_category_declarationContext, 0) as Singleton_category_declarationContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSingletonCategoryDeclaration) {
	 		listener.enterSingletonCategoryDeclaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSingletonCategoryDeclaration) {
	 		listener.exitSingletonCategoryDeclaration(this);
		}
	}
}


export class Widget_declarationContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_widget_declaration;
	}
	public copyFrom(ctx: Widget_declarationContext): void {
		super.copyFrom(ctx);
	}
}
export class ConcreteWidgetDeclarationContext extends Widget_declarationContext {
	public _decl!: Concrete_widget_declarationContext;
	constructor(parser: MParser, ctx: Widget_declarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public concrete_widget_declaration(): Concrete_widget_declarationContext {
		return this.getTypedRuleContext(Concrete_widget_declarationContext, 0) as Concrete_widget_declarationContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterConcreteWidgetDeclaration) {
	 		listener.enterConcreteWidgetDeclaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitConcreteWidgetDeclaration) {
	 		listener.exitConcreteWidgetDeclaration(this);
		}
	}
}
export class NativeWidgetDeclarationContext extends Widget_declarationContext {
	public _decl!: Native_widget_declarationContext;
	constructor(parser: MParser, ctx: Widget_declarationContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public native_widget_declaration(): Native_widget_declarationContext {
		return this.getTypedRuleContext(Native_widget_declarationContext, 0) as Native_widget_declarationContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNativeWidgetDeclaration) {
	 		listener.enterNativeWidgetDeclaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNativeWidgetDeclaration) {
	 		listener.exitNativeWidgetDeclaration(this);
		}
	}
}


export class Type_identifier_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_type_identifier_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterType_identifier_list) {
	 		listener.enterType_identifier_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitType_identifier_list) {
	 		listener.exitType_identifier_list(this);
		}
	}
}


export class Method_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_method_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMethod_identifier) {
	 		listener.enterMethod_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMethod_identifier) {
	 		listener.exitMethod_identifier(this);
		}
	}
}


export class Identifier_or_keywordContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_identifier_or_keyword;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIdentifier_or_keyword) {
	 		listener.enterIdentifier_or_keyword(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIdentifier_or_keyword) {
	 		listener.exitIdentifier_or_keyword(this);
		}
	}
}


export class Nospace_hyphen_identifier_or_keywordContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(MParser.MINUS, 0);
	}
	public nospace_identifier_or_keyword(): Nospace_identifier_or_keywordContext {
		return this.getTypedRuleContext(Nospace_identifier_or_keywordContext, 0) as Nospace_identifier_or_keywordContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_nospace_hyphen_identifier_or_keyword;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNospace_hyphen_identifier_or_keyword) {
	 		listener.enterNospace_hyphen_identifier_or_keyword(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNospace_hyphen_identifier_or_keyword) {
	 		listener.exitNospace_hyphen_identifier_or_keyword(this);
		}
	}
}


export class Nospace_identifier_or_keywordContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_or_keyword(): Identifier_or_keywordContext {
		return this.getTypedRuleContext(Identifier_or_keywordContext, 0) as Identifier_or_keywordContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_nospace_identifier_or_keyword;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNospace_identifier_or_keyword) {
	 		listener.enterNospace_identifier_or_keyword(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNospace_identifier_or_keyword) {
	 		listener.exitNospace_identifier_or_keyword(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_identifier;
	}
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeIdentifierContext extends IdentifierContext {
	constructor(parser: MParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_identifier(): Type_identifierContext {
		return this.getTypedRuleContext(Type_identifierContext, 0) as Type_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTypeIdentifier) {
	 		listener.enterTypeIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTypeIdentifier) {
	 		listener.exitTypeIdentifier(this);
		}
	}
}
export class SymbolIdentifierContext extends IdentifierContext {
	constructor(parser: MParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSymbolIdentifier) {
	 		listener.enterSymbolIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSymbolIdentifier) {
	 		listener.exitSymbolIdentifier(this);
		}
	}
}
export class VariableIdentifierContext extends IdentifierContext {
	constructor(parser: MParser, ctx: IdentifierContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterVariableIdentifier) {
	 		listener.enterVariableIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitVariableIdentifier) {
	 		listener.exitVariableIdentifier(this);
		}
	}
}


export class Member_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(MParser.CATEGORY, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
	public STORABLE(): TerminalNode {
		return this.getToken(MParser.STORABLE, 0);
	}
	public RESOURCE(): TerminalNode {
		return this.getToken(MParser.RESOURCE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_member_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMember_identifier) {
	 		listener.enterMember_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMember_identifier) {
	 		listener.exitMember_identifier(this);
		}
	}
}


export class Variable_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(MParser.CATEGORY, 0);
	}
	public RESOURCE(): TerminalNode {
		return this.getToken(MParser.RESOURCE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_variable_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterVariable_identifier) {
	 		listener.enterVariable_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitVariable_identifier) {
	 		listener.exitVariable_identifier(this);
		}
	}
}


export class Attribute_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
	public STORABLE(): TerminalNode {
		return this.getToken(MParser.STORABLE, 0);
	}
	public RESOURCE(): TerminalNode {
		return this.getToken(MParser.RESOURCE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_attribute_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAttribute_identifier) {
	 		listener.enterAttribute_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAttribute_identifier) {
	 		listener.exitAttribute_identifier(this);
		}
	}
}


export class Type_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.TYPE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_type_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterType_identifier) {
	 		listener.enterType_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitType_identifier) {
	 		listener.exitType_identifier(this);
		}
	}
}


export class Symbol_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYMBOL_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.SYMBOL_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_symbol_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSymbol_identifier) {
	 		listener.enterSymbol_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSymbol_identifier) {
	 		listener.exitSymbol_identifier(this);
		}
	}
}


export class Argument_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_argument_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterArgument_list) {
	 		listener.enterArgument_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitArgument_list) {
	 		listener.exitArgument_list(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_argument;
	}
	public copyFrom(ctx: ArgumentContext): void {
		super.copyFrom(ctx);
	}
}
export class OperatorArgumentContext extends ArgumentContext {
	public _arg!: Operator_argumentContext;
	constructor(parser: MParser, ctx: ArgumentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public operator_argument(): Operator_argumentContext {
		return this.getTypedRuleContext(Operator_argumentContext, 0) as Operator_argumentContext;
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOperatorArgument) {
	 		listener.enterOperatorArgument(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOperatorArgument) {
	 		listener.exitOperatorArgument(this);
		}
	}
}
export class CodeArgumentContext extends ArgumentContext {
	public _arg!: Code_argumentContext;
	constructor(parser: MParser, ctx: ArgumentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public code_argument(): Code_argumentContext {
		return this.getTypedRuleContext(Code_argumentContext, 0) as Code_argumentContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCodeArgument) {
	 		listener.enterCodeArgument(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCodeArgument) {
	 		listener.exitCodeArgument(this);
		}
	}
}


export class Operator_argumentContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_operator_argument;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOperator_argument) {
	 		listener.enterOperator_argument(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOperator_argument) {
	 		listener.exitOperator_argument(this);
		}
	}
}


export class Named_argumentContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public EQ(): TerminalNode {
		return this.getToken(MParser.EQ, 0);
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_named_argument;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNamed_argument) {
	 		listener.enterNamed_argument(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNamed_argument) {
	 		listener.exitNamed_argument(this);
		}
	}
}


export class Code_argumentContext extends ParserRuleContext {
	public _name!: Variable_identifierContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_code_argument;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCode_argument) {
	 		listener.enterCode_argument(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCode_argument) {
	 		listener.exitCode_argument(this);
		}
	}
}


export class Category_or_any_typeContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_category_or_any_type;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCategory_or_any_type) {
	 		listener.enterCategory_or_any_type(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCategory_or_any_type) {
	 		listener.exitCategory_or_any_type(this);
		}
	}
}


export class Any_typeContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_any_type;
	}
	public copyFrom(ctx: Any_typeContext): void {
		super.copyFrom(ctx);
	}
}
export class AnyListTypeContext extends Any_typeContext {
	constructor(parser: MParser, ctx: Any_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public any_type(): Any_typeContext {
		return this.getTypedRuleContext(Any_typeContext, 0) as Any_typeContext;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAnyListType) {
	 		listener.enterAnyListType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAnyListType) {
	 		listener.exitAnyListType(this);
		}
	}
}
export class AnyTypeContext extends Any_typeContext {
	constructor(parser: MParser, ctx: Any_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ANY(): TerminalNode {
		return this.getToken(MParser.ANY, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAnyType) {
	 		listener.enterAnyType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAnyType) {
	 		listener.exitAnyType(this);
		}
	}
}
export class AnyDictTypeContext extends Any_typeContext {
	constructor(parser: MParser, ctx: Any_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public any_type(): Any_typeContext {
		return this.getTypedRuleContext(Any_typeContext, 0) as Any_typeContext;
	}
	public LCURL(): TerminalNode {
		return this.getToken(MParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(MParser.RCURL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAnyDictType) {
	 		listener.enterAnyDictType(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAnyDictType) {
	 		listener.exitAnyDictType(this);
		}
	}
}


export class Member_method_declaration_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_member_method_declaration_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMember_method_declaration_list) {
	 		listener.enterMember_method_declaration_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMember_method_declaration_list) {
	 		listener.exitMember_method_declaration_list(this);
		}
	}
}


export class Member_method_declarationContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_member_method_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMember_method_declaration) {
	 		listener.enterMember_method_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMember_method_declaration) {
	 		listener.exitMember_method_declaration(this);
		}
	}
}


export class Native_member_method_declaration_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_native_member_method_declaration_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_member_method_declaration_list) {
	 		listener.enterNative_member_method_declaration_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNative_member_method_declaration_list) {
	 		listener.exitNative_member_method_declaration_list(this);
		}
	}
}


export class Native_member_method_declarationContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_native_member_method_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_member_method_declaration) {
	 		listener.enterNative_member_method_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNative_member_method_declaration) {
	 		listener.exitNative_member_method_declaration(this);
		}
	}
}


export class Native_category_bindingContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_native_category_binding;
	}
	public copyFrom(ctx: Native_category_bindingContext): void {
		super.copyFrom(ctx);
	}
}
export class Python2CategoryBindingContext extends Native_category_bindingContext {
	public _binding!: Python_category_bindingContext;
	constructor(parser: MParser, ctx: Native_category_bindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PYTHON2(): TerminalNode {
		return this.getToken(MParser.PYTHON2, 0);
	}
	public python_category_binding(): Python_category_bindingContext {
		return this.getTypedRuleContext(Python_category_bindingContext, 0) as Python_category_bindingContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPython2CategoryBinding) {
	 		listener.enterPython2CategoryBinding(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPython2CategoryBinding) {
	 		listener.exitPython2CategoryBinding(this);
		}
	}
}
export class Python3CategoryBindingContext extends Native_category_bindingContext {
	public _binding!: Python_category_bindingContext;
	constructor(parser: MParser, ctx: Native_category_bindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PYTHON3(): TerminalNode {
		return this.getToken(MParser.PYTHON3, 0);
	}
	public python_category_binding(): Python_category_bindingContext {
		return this.getTypedRuleContext(Python_category_bindingContext, 0) as Python_category_bindingContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPython3CategoryBinding) {
	 		listener.enterPython3CategoryBinding(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPython3CategoryBinding) {
	 		listener.exitPython3CategoryBinding(this);
		}
	}
}
export class JavaCategoryBindingContext extends Native_category_bindingContext {
	public _binding!: Java_class_identifier_expressionContext;
	constructor(parser: MParser, ctx: Native_category_bindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JAVA(): TerminalNode {
		return this.getToken(MParser.JAVA, 0);
	}
	public java_class_identifier_expression(): Java_class_identifier_expressionContext {
		return this.getTypedRuleContext(Java_class_identifier_expressionContext, 0) as Java_class_identifier_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaCategoryBinding) {
	 		listener.enterJavaCategoryBinding(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaCategoryBinding) {
	 		listener.exitJavaCategoryBinding(this);
		}
	}
}
export class CSharpCategoryBindingContext extends Native_category_bindingContext {
	public _binding!: Csharp_identifier_expressionContext;
	constructor(parser: MParser, ctx: Native_category_bindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CSHARP(): TerminalNode {
		return this.getToken(MParser.CSHARP, 0);
	}
	public csharp_identifier_expression(): Csharp_identifier_expressionContext {
		return this.getTypedRuleContext(Csharp_identifier_expressionContext, 0) as Csharp_identifier_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpCategoryBinding) {
	 		listener.enterCSharpCategoryBinding(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpCategoryBinding) {
	 		listener.exitCSharpCategoryBinding(this);
		}
	}
}
export class JavascriptCategoryBindingContext extends Native_category_bindingContext {
	public _binding!: Javascript_category_bindingContext;
	constructor(parser: MParser, ctx: Native_category_bindingContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JAVASCRIPT(): TerminalNode {
		return this.getToken(MParser.JAVASCRIPT, 0);
	}
	public javascript_category_binding(): Javascript_category_bindingContext {
		return this.getTypedRuleContext(Javascript_category_bindingContext, 0) as Javascript_category_bindingContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptCategoryBinding) {
	 		listener.enterJavascriptCategoryBinding(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptCategoryBinding) {
	 		listener.exitJavascriptCategoryBinding(this);
		}
	}
}


export class Python_category_bindingContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_python_category_binding;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPython_category_binding) {
	 		listener.enterPython_category_binding(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPython_category_binding) {
	 		listener.exitPython_category_binding(this);
		}
	}
}


export class Python_moduleContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(MParser.FROM, 0);
	}
	public module_token(): Module_tokenContext {
		return this.getTypedRuleContext(Module_tokenContext, 0) as Module_tokenContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public python_identifier_list(): Python_identifierContext[] {
		return this.getTypedRuleContexts(Python_identifierContext) as Python_identifierContext[];
	}
	public python_identifier(i: number): Python_identifierContext {
		return this.getTypedRuleContext(Python_identifierContext, i) as Python_identifierContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(MParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_module;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPython_module) {
	 		listener.enterPython_module(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPython_module) {
	 		listener.exitPython_module(this);
		}
	}
}


export class Javascript_category_bindingContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MParser.DOT, i);
	}
	public javascript_module(): Javascript_moduleContext {
		return this.getTypedRuleContext(Javascript_moduleContext, 0) as Javascript_moduleContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_category_binding;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascript_category_binding) {
	 		listener.enterJavascript_category_binding(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascript_category_binding) {
	 		listener.exitJavascript_category_binding(this);
		}
	}
}


export class Javascript_moduleContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(MParser.FROM, 0);
	}
	public module_token(): Module_tokenContext {
		return this.getTypedRuleContext(Module_tokenContext, 0) as Module_tokenContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public javascript_identifier_list(): Javascript_identifierContext[] {
		return this.getTypedRuleContexts(Javascript_identifierContext) as Javascript_identifierContext[];
	}
	public javascript_identifier(i: number): Javascript_identifierContext {
		return this.getTypedRuleContext(Javascript_identifierContext, i) as Javascript_identifierContext;
	}
	public SLASH_list(): TerminalNode[] {
	    	return this.getTokens(MParser.SLASH);
	}
	public SLASH(i: number): TerminalNode {
		return this.getToken(MParser.SLASH, i);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_module;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascript_module) {
	 		listener.enterJavascript_module(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascript_module) {
	 		listener.exitJavascript_module(this);
		}
	}
}


export class Variable_identifier_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_variable_identifier_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterVariable_identifier_list) {
	 		listener.enterVariable_identifier_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitVariable_identifier_list) {
	 		listener.exitVariable_identifier_list(this);
		}
	}
}


export class Attribute_identifier_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_attribute_identifier_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAttribute_identifier_list) {
	 		listener.enterAttribute_identifier_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAttribute_identifier_list) {
	 		listener.exitAttribute_identifier_list(this);
		}
	}
}


export class Method_declarationContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_method_declaration;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMethod_declaration) {
	 		listener.enterMethod_declaration(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMethod_declaration) {
	 		listener.exitMethod_declaration(this);
		}
	}
}


export class Native_statement_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_native_statement_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNative_statement_list) {
	 		listener.enterNative_statement_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNative_statement_list) {
	 		listener.exitNative_statement_list(this);
		}
	}
}


export class Native_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_native_statement;
	}
	public copyFrom(ctx: Native_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpNativeStatementContext extends Native_statementContext {
	constructor(parser: MParser, ctx: Native_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CSHARP(): TerminalNode {
		return this.getToken(MParser.CSHARP, 0);
	}
	public csharp_statement(): Csharp_statementContext {
		return this.getTypedRuleContext(Csharp_statementContext, 0) as Csharp_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpNativeStatement) {
	 		listener.enterCSharpNativeStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpNativeStatement) {
	 		listener.exitCSharpNativeStatement(this);
		}
	}
}
export class JavaNativeStatementContext extends Native_statementContext {
	constructor(parser: MParser, ctx: Native_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JAVA(): TerminalNode {
		return this.getToken(MParser.JAVA, 0);
	}
	public java_statement(): Java_statementContext {
		return this.getTypedRuleContext(Java_statementContext, 0) as Java_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaNativeStatement) {
	 		listener.enterJavaNativeStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaNativeStatement) {
	 		listener.exitJavaNativeStatement(this);
		}
	}
}
export class JavascriptNativeStatementContext extends Native_statementContext {
	constructor(parser: MParser, ctx: Native_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public JAVASCRIPT(): TerminalNode {
		return this.getToken(MParser.JAVASCRIPT, 0);
	}
	public javascript_native_statement(): Javascript_native_statementContext {
		return this.getTypedRuleContext(Javascript_native_statementContext, 0) as Javascript_native_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptNativeStatement) {
	 		listener.enterJavascriptNativeStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptNativeStatement) {
	 		listener.exitJavascriptNativeStatement(this);
		}
	}
}
export class Python2NativeStatementContext extends Native_statementContext {
	constructor(parser: MParser, ctx: Native_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PYTHON2(): TerminalNode {
		return this.getToken(MParser.PYTHON2, 0);
	}
	public python_native_statement(): Python_native_statementContext {
		return this.getTypedRuleContext(Python_native_statementContext, 0) as Python_native_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPython2NativeStatement) {
	 		listener.enterPython2NativeStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPython2NativeStatement) {
	 		listener.exitPython2NativeStatement(this);
		}
	}
}
export class Python3NativeStatementContext extends Native_statementContext {
	constructor(parser: MParser, ctx: Native_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PYTHON3(): TerminalNode {
		return this.getToken(MParser.PYTHON3, 0);
	}
	public python_native_statement(): Python_native_statementContext {
		return this.getTypedRuleContext(Python_native_statementContext, 0) as Python_native_statementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPython3NativeStatement) {
	 		listener.enterPython3NativeStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPython3NativeStatement) {
	 		listener.exitPython3NativeStatement(this);
		}
	}
}


export class Python_native_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public python_statement(): Python_statementContext {
		return this.getTypedRuleContext(Python_statementContext, 0) as Python_statementContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(MParser.SEMI, 0);
	}
	public python_module(): Python_moduleContext {
		return this.getTypedRuleContext(Python_moduleContext, 0) as Python_moduleContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_native_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPython_native_statement) {
	 		listener.enterPython_native_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPython_native_statement) {
	 		listener.exitPython_native_statement(this);
		}
	}
}


export class Javascript_native_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public javascript_statement(): Javascript_statementContext {
		return this.getTypedRuleContext(Javascript_statementContext, 0) as Javascript_statementContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(MParser.SEMI, 0);
	}
	public javascript_module(): Javascript_moduleContext {
		return this.getTypedRuleContext(Javascript_moduleContext, 0) as Javascript_moduleContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_native_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascript_native_statement) {
	 		listener.enterJavascript_native_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascript_native_statement) {
	 		listener.exitJavascript_native_statement(this);
		}
	}
}


export class Statement_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_statement_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterStatement_list) {
	 		listener.enterStatement_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitStatement_list) {
	 		listener.exitStatement_list(this);
		}
	}
}


export class Assertion_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_assertion_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAssertion_list) {
	 		listener.enterAssertion_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAssertion_list) {
	 		listener.exitAssertion_list(this);
		}
	}
}


export class Switch_case_statement_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_switch_case_statement_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSwitch_case_statement_list) {
	 		listener.enterSwitch_case_statement_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSwitch_case_statement_list) {
	 		listener.exitSwitch_case_statement_list(this);
		}
	}
}


export class Catch_statement_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_catch_statement_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCatch_statement_list) {
	 		listener.enterCatch_statement_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCatch_statement_list) {
	 		listener.exitCatch_statement_list(this);
		}
	}
}


export class Literal_collectionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_literal_collection;
	}
	public copyFrom(ctx: Literal_collectionContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralListLiteralContext extends Literal_collectionContext {
	constructor(parser: MParser, ctx: Literal_collectionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public literal_list_literal(): Literal_list_literalContext {
		return this.getTypedRuleContext(Literal_list_literalContext, 0) as Literal_list_literalContext;
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterLiteralListLiteral) {
	 		listener.enterLiteralListLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitLiteralListLiteral) {
	 		listener.exitLiteralListLiteral(this);
		}
	}
}
export class LiteralRangeLiteralContext extends Literal_collectionContext {
	public _low!: Atomic_literalContext;
	public _high!: Atomic_literalContext;
	constructor(parser: MParser, ctx: Literal_collectionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RANGE(): TerminalNode {
		return this.getToken(MParser.RANGE, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public atomic_literal_list(): Atomic_literalContext[] {
		return this.getTypedRuleContexts(Atomic_literalContext) as Atomic_literalContext[];
	}
	public atomic_literal(i: number): Atomic_literalContext {
		return this.getTypedRuleContext(Atomic_literalContext, i) as Atomic_literalContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterLiteralRangeLiteral) {
	 		listener.enterLiteralRangeLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitLiteralRangeLiteral) {
	 		listener.exitLiteralRangeLiteral(this);
		}
	}
}
export class LiteralSetLiteralContext extends Literal_collectionContext {
	constructor(parser: MParser, ctx: Literal_collectionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public literal_list_literal(): Literal_list_literalContext {
		return this.getTypedRuleContext(Literal_list_literalContext, 0) as Literal_list_literalContext;
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterLiteralSetLiteral) {
	 		listener.enterLiteralSetLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitLiteralSetLiteral) {
	 		listener.exitLiteralSetLiteral(this);
		}
	}
}


export class Atomic_literalContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_atomic_literal;
	}
	public copyFrom(ctx: Atomic_literalContext): void {
		super.copyFrom(ctx);
	}
}
export class MinIntegerLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MIN_INTEGER(): TerminalNode {
		return this.getToken(MParser.MIN_INTEGER, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMinIntegerLiteral) {
	 		listener.enterMinIntegerLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMinIntegerLiteral) {
	 		listener.exitMinIntegerLiteral(this);
		}
	}
}
export class DateLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATE_LITERAL(): TerminalNode {
		return this.getToken(MParser.DATE_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDateLiteral) {
	 		listener.enterDateLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDateLiteral) {
	 		listener.exitDateLiteral(this);
		}
	}
}
export class SymbolLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public symbol_identifier(): Symbol_identifierContext {
		return this.getTypedRuleContext(Symbol_identifierContext, 0) as Symbol_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSymbolLiteral) {
	 		listener.enterSymbolLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSymbolLiteral) {
	 		listener.exitSymbolLiteral(this);
		}
	}
}
export class BooleanLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(MParser.BOOLEAN_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
}
export class VersionLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VERSION_LITERAL(): TerminalNode {
		return this.getToken(MParser.VERSION_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterVersionLiteral) {
	 		listener.enterVersionLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitVersionLiteral) {
	 		listener.exitVersionLiteral(this);
		}
	}
}
export class HexadecimalLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HEXA_LITERAL(): TerminalNode {
		return this.getToken(MParser.HEXA_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterHexadecimalLiteral) {
	 		listener.enterHexadecimalLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitHexadecimalLiteral) {
	 		listener.exitHexadecimalLiteral(this);
		}
	}
}
export class UUIDLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public UUID_LITERAL(): TerminalNode {
		return this.getToken(MParser.UUID_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterUUIDLiteral) {
	 		listener.enterUUIDLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitUUIDLiteral) {
	 		listener.exitUUIDLiteral(this);
		}
	}
}
export class MaxIntegerLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MAX_INTEGER(): TerminalNode {
		return this.getToken(MParser.MAX_INTEGER, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMaxIntegerLiteral) {
	 		listener.enterMaxIntegerLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMaxIntegerLiteral) {
	 		listener.exitMaxIntegerLiteral(this);
		}
	}
}
export class TypeLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_literal(): Type_literalContext {
		return this.getTypedRuleContext(Type_literalContext, 0) as Type_literalContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTypeLiteral) {
	 		listener.enterTypeLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTypeLiteral) {
	 		listener.exitTypeLiteral(this);
		}
	}
}
export class DateTimeLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DATETIME_LITERAL(): TerminalNode {
		return this.getToken(MParser.DATETIME_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDateTimeLiteral) {
	 		listener.enterDateTimeLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDateTimeLiteral) {
	 		listener.exitDateTimeLiteral(this);
		}
	}
}
export class PeriodLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PERIOD_LITERAL(): TerminalNode {
		return this.getToken(MParser.PERIOD_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPeriodLiteral) {
	 		listener.enterPeriodLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPeriodLiteral) {
	 		listener.exitPeriodLiteral(this);
		}
	}
}
export class DecimalLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(MParser.DECIMAL_LITERAL, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MParser.MINUS, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDecimalLiteral) {
	 		listener.enterDecimalLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDecimalLiteral) {
	 		listener.exitDecimalLiteral(this);
		}
	}
}
export class TextLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(MParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTextLiteral) {
	 		listener.enterTextLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTextLiteral) {
	 		listener.exitTextLiteral(this);
		}
	}
}
export class NullLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public null_literal(): Null_literalContext {
		return this.getTypedRuleContext(Null_literalContext, 0) as Null_literalContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNullLiteral) {
	 		listener.enterNullLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNullLiteral) {
	 		listener.exitNullLiteral(this);
		}
	}
}
export class IntegerLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(MParser.INTEGER_LITERAL, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MParser.MINUS, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
}
export class TimeLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TIME_LITERAL(): TerminalNode {
		return this.getToken(MParser.TIME_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTimeLiteral) {
	 		listener.enterTimeLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTimeLiteral) {
	 		listener.exitTimeLiteral(this);
		}
	}
}
export class CharacterLiteralContext extends Atomic_literalContext {
	constructor(parser: MParser, ctx: Atomic_literalContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(MParser.CHAR_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCharacterLiteral) {
	 		listener.enterCharacterLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCharacterLiteral) {
	 		listener.exitCharacterLiteral(this);
		}
	}
}


export class Literal_list_literalContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_literal_list_literal;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterLiteral_list_literal) {
	 		listener.enterLiteral_list_literal(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitLiteral_list_literal) {
	 		listener.exitLiteral_list_literal(this);
		}
	}
}


export class This_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELF(): TerminalNode {
		return this.getToken(MParser.SELF, 0);
	}
	public THIS(): TerminalNode {
		return this.getToken(MParser.THIS, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_this_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterThis_expression) {
	 		listener.enterThis_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitThis_expression) {
	 		listener.exitThis_expression(this);
		}
	}
}


export class Super_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SUPER(): TerminalNode {
		return this.getToken(MParser.SUPER, 0);
	}
	public category_type(): Category_typeContext {
		return this.getTypedRuleContext(Category_typeContext, 0) as Category_typeContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_super_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSuper_expression) {
	 		listener.enterSuper_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSuper_expression) {
	 		listener.exitSuper_expression(this);
		}
	}
}


export class Parenthesis_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_parenthesis_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterParenthesis_expression) {
	 		listener.enterParenthesis_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitParenthesis_expression) {
	 		listener.exitParenthesis_expression(this);
		}
	}
}


export class Literal_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_literal_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterLiteral_expression) {
	 		listener.enterLiteral_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitLiteral_expression) {
	 		listener.exitLiteral_expression(this);
		}
	}
}


export class Collection_literalContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_collection_literal;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCollection_literal) {
	 		listener.enterCollection_literal(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCollection_literal) {
	 		listener.exitCollection_literal(this);
		}
	}
}


export class Tuple_literalContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
	public expression_tuple(): Expression_tupleContext {
		return this.getTypedRuleContext(Expression_tupleContext, 0) as Expression_tupleContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_tuple_literal;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterTuple_literal) {
	 		listener.enterTuple_literal(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitTuple_literal) {
	 		listener.exitTuple_literal(this);
		}
	}
}


export class Dict_literalContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LTCOLONGT(): TerminalNode {
		return this.getToken(MParser.LTCOLONGT, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public dict_entry_list(): Dict_entry_listContext {
		return this.getTypedRuleContext(Dict_entry_listContext, 0) as Dict_entry_listContext;
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_dict_literal;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDict_literal) {
	 		listener.enterDict_literal(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDict_literal) {
	 		listener.exitDict_literal(this);
		}
	}
}


export class Document_literalContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LCURL(): TerminalNode {
		return this.getToken(MParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(MParser.RCURL, 0);
	}
	public doc_entry_list(): Doc_entry_listContext {
		return this.getTypedRuleContext(Doc_entry_listContext, 0) as Doc_entry_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_document_literal;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDocument_literal) {
	 		listener.enterDocument_literal(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDocument_literal) {
	 		listener.exitDocument_literal(this);
		}
	}
}


export class Expression_tupleContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_expression_tuple;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterExpression_tuple) {
	 		listener.enterExpression_tuple(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitExpression_tuple) {
	 		listener.exitExpression_tuple(this);
		}
	}
}


export class Doc_entry_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_doc_entry_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDoc_entry_list) {
	 		listener.enterDoc_entry_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDoc_entry_list) {
	 		listener.exitDoc_entry_list(this);
		}
	}
}


export class Doc_entryContext extends ParserRuleContext {
	public _key!: Doc_keyContext;
	public _value!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public doc_key(): Doc_keyContext {
		return this.getTypedRuleContext(Doc_keyContext, 0) as Doc_keyContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_doc_entry;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDoc_entry) {
	 		listener.enterDoc_entry(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDoc_entry) {
	 		listener.exitDoc_entry(this);
		}
	}
}


export class Doc_keyContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_doc_key;
	}
	public copyFrom(ctx: Doc_keyContext): void {
		super.copyFrom(ctx);
	}
}
export class DocKeyIdentifierContext extends Doc_keyContext {
	public _name!: Identifier_or_keywordContext;
	constructor(parser: MParser, ctx: Doc_keyContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier_or_keyword(): Identifier_or_keywordContext {
		return this.getTypedRuleContext(Identifier_or_keywordContext, 0) as Identifier_or_keywordContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDocKeyIdentifier) {
	 		listener.enterDocKeyIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDocKeyIdentifier) {
	 		listener.exitDocKeyIdentifier(this);
		}
	}
}
export class DocKeyTextContext extends Doc_keyContext {
	public _name!: Token;
	constructor(parser: MParser, ctx: Doc_keyContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(MParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDocKeyText) {
	 		listener.enterDocKeyText(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDocKeyText) {
	 		listener.exitDocKeyText(this);
		}
	}
}


export class Dict_entry_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_dict_entry_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDict_entry_list) {
	 		listener.enterDict_entry_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDict_entry_list) {
	 		listener.exitDict_entry_list(this);
		}
	}
}


export class Dict_entryContext extends ParserRuleContext {
	public _key!: Dict_keyContext;
	public _value!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public dict_key(): Dict_keyContext {
		return this.getTypedRuleContext(Dict_keyContext, 0) as Dict_keyContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_dict_entry;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDict_entry) {
	 		listener.enterDict_entry(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDict_entry) {
	 		listener.exitDict_entry(this);
		}
	}
}


export class Dict_keyContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_dict_key;
	}
	public copyFrom(ctx: Dict_keyContext): void {
		super.copyFrom(ctx);
	}
}
export class DictKeyIdentifierContext extends Dict_keyContext {
	public _name!: Identifier_or_keywordContext;
	constructor(parser: MParser, ctx: Dict_keyContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier_or_keyword(): Identifier_or_keywordContext {
		return this.getTypedRuleContext(Identifier_or_keywordContext, 0) as Identifier_or_keywordContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDictKeyIdentifier) {
	 		listener.enterDictKeyIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDictKeyIdentifier) {
	 		listener.exitDictKeyIdentifier(this);
		}
	}
}
export class DictKeyTextContext extends Dict_keyContext {
	public _name!: Token;
	constructor(parser: MParser, ctx: Dict_keyContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(MParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDictKeyText) {
	 		listener.enterDictKeyText(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDictKeyText) {
	 		listener.exitDictKeyText(this);
		}
	}
}


export class Slice_argumentsContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_slice_arguments;
	}
	public copyFrom(ctx: Slice_argumentsContext): void {
		super.copyFrom(ctx);
	}
}
export class SliceFirstAndLastContext extends Slice_argumentsContext {
	public _first!: ExpressionContext;
	public _last!: ExpressionContext;
	constructor(parser: MParser, ctx: Slice_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSliceFirstAndLast) {
	 		listener.enterSliceFirstAndLast(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSliceFirstAndLast) {
	 		listener.exitSliceFirstAndLast(this);
		}
	}
}
export class SliceLastOnlyContext extends Slice_argumentsContext {
	public _last!: ExpressionContext;
	constructor(parser: MParser, ctx: Slice_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSliceLastOnly) {
	 		listener.enterSliceLastOnly(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSliceLastOnly) {
	 		listener.exitSliceLastOnly(this);
		}
	}
}
export class SliceFirstOnlyContext extends Slice_argumentsContext {
	public _first!: ExpressionContext;
	constructor(parser: MParser, ctx: Slice_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSliceFirstOnly) {
	 		listener.enterSliceFirstOnly(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSliceFirstOnly) {
	 		listener.exitSliceFirstOnly(this);
		}
	}
}


export class Assign_variable_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_assign_variable_statement;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAssign_variable_statement) {
	 		listener.enterAssign_variable_statement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAssign_variable_statement) {
	 		listener.exitAssign_variable_statement(this);
		}
	}
}


export class Assignable_instanceContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_assignable_instance;
	}
	public copyFrom(ctx: Assignable_instanceContext): void {
		super.copyFrom(ctx);
	}
}
export class ChildInstanceContext extends Assignable_instanceContext {
	constructor(parser: MParser, ctx: Assignable_instanceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public assignable_instance(): Assignable_instanceContext {
		return this.getTypedRuleContext(Assignable_instanceContext, 0) as Assignable_instanceContext;
	}
	public child_instance(): Child_instanceContext {
		return this.getTypedRuleContext(Child_instanceContext, 0) as Child_instanceContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterChildInstance) {
	 		listener.enterChildInstance(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitChildInstance) {
	 		listener.exitChildInstance(this);
		}
	}
}
export class RootInstanceContext extends Assignable_instanceContext {
	constructor(parser: MParser, ctx: Assignable_instanceContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterRootInstance) {
	 		listener.enterRootInstance(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitRootInstance) {
	 		listener.exitRootInstance(this);
		}
	}
}


export class Is_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_is_expression;
	}
	public copyFrom(ctx: Is_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IsATypeExpressionContext extends Is_expressionContext {
	constructor(parser: MParser, ctx: Is_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
	public category_or_any_type(): Category_or_any_typeContext {
		return this.getTypedRuleContext(Category_or_any_typeContext, 0) as Category_or_any_typeContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIsATypeExpression) {
	 		listener.enterIsATypeExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIsATypeExpression) {
	 		listener.exitIsATypeExpression(this);
		}
	}
}
export class IsOtherExpressionContext extends Is_expressionContext {
	constructor(parser: MParser, ctx: Is_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIsOtherExpression) {
	 		listener.enterIsOtherExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIsOtherExpression) {
	 		listener.exitIsOtherExpression(this);
		}
	}
}


export class MetadataContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_metadata;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMetadata) {
	 		listener.enterMetadata(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMetadata) {
	 		listener.exitMetadata(this);
		}
	}
}


export class Arrow_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_arrow_expression;
	}
	public copyFrom(ctx: Arrow_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrowExpressionBodyContext extends Arrow_expressionContext {
	constructor(parser: MParser, ctx: Arrow_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public arrow_prefix(): Arrow_prefixContext {
		return this.getTypedRuleContext(Arrow_prefixContext, 0) as Arrow_prefixContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterArrowExpressionBody) {
	 		listener.enterArrowExpressionBody(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitArrowExpressionBody) {
	 		listener.exitArrowExpressionBody(this);
		}
	}
}
export class ArrowStatementsBodyContext extends Arrow_expressionContext {
	constructor(parser: MParser, ctx: Arrow_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public arrow_prefix(): Arrow_prefixContext {
		return this.getTypedRuleContext(Arrow_prefixContext, 0) as Arrow_prefixContext;
	}
	public LCURL(): TerminalNode {
		return this.getToken(MParser.LCURL, 0);
	}
	public statement_list(): Statement_listContext {
		return this.getTypedRuleContext(Statement_listContext, 0) as Statement_listContext;
	}
	public RCURL(): TerminalNode {
		return this.getToken(MParser.RCURL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterArrowStatementsBody) {
	 		listener.enterArrowStatementsBody(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitArrowStatementsBody) {
	 		listener.exitArrowStatementsBody(this);
		}
	}
}


export class Arrow_prefixContext extends ParserRuleContext {
	public _s1!: Ws_plusContext;
	public _s2!: Ws_plusContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arrow_args(): Arrow_argsContext {
		return this.getTypedRuleContext(Arrow_argsContext, 0) as Arrow_argsContext;
	}
	public EGT(): TerminalNode {
		return this.getToken(MParser.EGT, 0);
	}
	public ws_plus_list(): Ws_plusContext[] {
		return this.getTypedRuleContexts(Ws_plusContext) as Ws_plusContext[];
	}
	public ws_plus(i: number): Ws_plusContext {
		return this.getTypedRuleContext(Ws_plusContext, i) as Ws_plusContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_arrow_prefix;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterArrow_prefix) {
	 		listener.enterArrow_prefix(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitArrow_prefix) {
	 		listener.exitArrow_prefix(this);
		}
	}
}


export class Arrow_argsContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_arrow_args;
	}
	public copyFrom(ctx: Arrow_argsContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrowListArgContext extends Arrow_argsContext {
	constructor(parser: MParser, ctx: Arrow_argsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public variable_identifier_list(): Variable_identifier_listContext {
		return this.getTypedRuleContext(Variable_identifier_listContext, 0) as Variable_identifier_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterArrowListArg) {
	 		listener.enterArrowListArg(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitArrowListArg) {
	 		listener.exitArrowListArg(this);
		}
	}
}
export class ArrowSingleArgContext extends Arrow_argsContext {
	constructor(parser: MParser, ctx: Arrow_argsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public variable_identifier(): Variable_identifierContext {
		return this.getTypedRuleContext(Variable_identifierContext, 0) as Variable_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterArrowSingleArg) {
	 		listener.enterArrowSingleArg(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitArrowSingleArg) {
	 		listener.exitArrowSingleArg(this);
		}
	}
}


export class Sorted_keyContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_sorted_key;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSorted_key) {
	 		listener.enterSorted_key(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSorted_key) {
	 		listener.exitSorted_key(this);
		}
	}
}


export class Read_blob_expressionContext extends ParserRuleContext {
	public _source!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public READ(): TerminalNode {
		return this.getToken(MParser.READ, 0);
	}
	public BLOB(): TerminalNode {
		return this.getToken(MParser.BLOB, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(MParser.FROM, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_read_blob_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterRead_blob_expression) {
	 		listener.enterRead_blob_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitRead_blob_expression) {
	 		listener.exitRead_blob_expression(this);
		}
	}
}


export class Read_all_expressionContext extends ParserRuleContext {
	public _source!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public READ(): TerminalNode {
		return this.getToken(MParser.READ, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(MParser.ALL, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(MParser.FROM, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_read_all_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterRead_all_expression) {
	 		listener.enterRead_all_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitRead_all_expression) {
	 		listener.exitRead_all_expression(this);
		}
	}
}


export class Read_one_expressionContext extends ParserRuleContext {
	public _source!: ExpressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public READ(): TerminalNode {
		return this.getToken(MParser.READ, 0);
	}
	public ONE(): TerminalNode {
		return this.getToken(MParser.ONE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(MParser.FROM, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_read_one_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterRead_one_expression) {
	 		listener.enterRead_one_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitRead_one_expression) {
	 		listener.exitRead_one_expression(this);
		}
	}
}


export class Order_by_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_order_by_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOrder_by_list) {
	 		listener.enterOrder_by_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOrder_by_list) {
	 		listener.exitOrder_by_list(this);
		}
	}
}


export class Order_byContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MParser.DOT, i);
	}
	public ASC(): TerminalNode {
		return this.getToken(MParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(MParser.DESC, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_order_by;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOrder_by) {
	 		listener.enterOrder_by(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOrder_by) {
	 		listener.exitOrder_by(this);
		}
	}
}


export class Include_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(MParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_include_list;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterInclude_list) {
	 		listener.enterInclude_list(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitInclude_list) {
	 		listener.exitInclude_list(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_operator;
	}
	public copyFrom(ctx: OperatorContext): void {
		super.copyFrom(ctx);
	}
}
export class OperatorPlusContext extends OperatorContext {
	constructor(parser: MParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PLUS(): TerminalNode {
		return this.getToken(MParser.PLUS, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOperatorPlus) {
	 		listener.enterOperatorPlus(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOperatorPlus) {
	 		listener.exitOperatorPlus(this);
		}
	}
}
export class OperatorDivideContext extends OperatorContext {
	constructor(parser: MParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public divide(): DivideContext {
		return this.getTypedRuleContext(DivideContext, 0) as DivideContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOperatorDivide) {
	 		listener.enterOperatorDivide(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOperatorDivide) {
	 		listener.exitOperatorDivide(this);
		}
	}
}
export class OperatorIDivideContext extends OperatorContext {
	constructor(parser: MParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public idivide(): IdivideContext {
		return this.getTypedRuleContext(IdivideContext, 0) as IdivideContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOperatorIDivide) {
	 		listener.enterOperatorIDivide(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOperatorIDivide) {
	 		listener.exitOperatorIDivide(this);
		}
	}
}
export class OperatorMultiplyContext extends OperatorContext {
	constructor(parser: MParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public multiply(): MultiplyContext {
		return this.getTypedRuleContext(MultiplyContext, 0) as MultiplyContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOperatorMultiply) {
	 		listener.enterOperatorMultiply(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOperatorMultiply) {
	 		listener.exitOperatorMultiply(this);
		}
	}
}
export class OperatorMinusContext extends OperatorContext {
	constructor(parser: MParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MINUS(): TerminalNode {
		return this.getToken(MParser.MINUS, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOperatorMinus) {
	 		listener.enterOperatorMinus(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOperatorMinus) {
	 		listener.exitOperatorMinus(this);
		}
	}
}
export class OperatorModuloContext extends OperatorContext {
	constructor(parser: MParser, ctx: OperatorContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public modulo(): ModuloContext {
		return this.getTypedRuleContext(ModuloContext, 0) as ModuloContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterOperatorModulo) {
	 		listener.enterOperatorModulo(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitOperatorModulo) {
	 		listener.exitOperatorModulo(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public JAVA(): TerminalNode {
		return this.getToken(MParser.JAVA, 0);
	}
	public CSHARP(): TerminalNode {
		return this.getToken(MParser.CSHARP, 0);
	}
	public PYTHON2(): TerminalNode {
		return this.getToken(MParser.PYTHON2, 0);
	}
	public PYTHON3(): TerminalNode {
		return this.getToken(MParser.PYTHON3, 0);
	}
	public JAVASCRIPT(): TerminalNode {
		return this.getToken(MParser.JAVASCRIPT, 0);
	}
	public SWIFT(): TerminalNode {
		return this.getToken(MParser.SWIFT, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(MParser.BOOLEAN, 0);
	}
	public CHARACTER(): TerminalNode {
		return this.getToken(MParser.CHARACTER, 0);
	}
	public TEXT(): TerminalNode {
		return this.getToken(MParser.TEXT, 0);
	}
	public INTEGER(): TerminalNode {
		return this.getToken(MParser.INTEGER, 0);
	}
	public DECIMAL(): TerminalNode {
		return this.getToken(MParser.DECIMAL, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(MParser.DATE, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(MParser.TIME, 0);
	}
	public DATETIME(): TerminalNode {
		return this.getToken(MParser.DATETIME, 0);
	}
	public PERIOD(): TerminalNode {
		return this.getToken(MParser.PERIOD, 0);
	}
	public VERSION(): TerminalNode {
		return this.getToken(MParser.VERSION, 0);
	}
	public CODE(): TerminalNode {
		return this.getToken(MParser.CODE, 0);
	}
	public DOCUMENT(): TerminalNode {
		return this.getToken(MParser.DOCUMENT, 0);
	}
	public BLOB(): TerminalNode {
		return this.getToken(MParser.BLOB, 0);
	}
	public IMAGE(): TerminalNode {
		return this.getToken(MParser.IMAGE, 0);
	}
	public DBID(): TerminalNode {
		return this.getToken(MParser.DBID, 0);
	}
	public UUID(): TerminalNode {
		return this.getToken(MParser.UUID, 0);
	}
	public ITERATOR(): TerminalNode {
		return this.getToken(MParser.ITERATOR, 0);
	}
	public CURSOR(): TerminalNode {
		return this.getToken(MParser.CURSOR, 0);
	}
	public HTML(): TerminalNode {
		return this.getToken(MParser.HTML, 0);
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(MParser.ABSTRACT, 0);
	}
	public ALL(): TerminalNode {
		return this.getToken(MParser.ALL, 0);
	}
	public ALWAYS(): TerminalNode {
		return this.getToken(MParser.ALWAYS, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(MParser.AND, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(MParser.ANY, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(MParser.AS, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(MParser.ASC, 0);
	}
	public ATTR(): TerminalNode {
		return this.getToken(MParser.ATTR, 0);
	}
	public ATTRIBUTE(): TerminalNode {
		return this.getToken(MParser.ATTRIBUTE, 0);
	}
	public ATTRIBUTES(): TerminalNode {
		return this.getToken(MParser.ATTRIBUTES, 0);
	}
	public BINDINGS(): TerminalNode {
		return this.getToken(MParser.BINDINGS, 0);
	}
	public BREAK(): TerminalNode {
		return this.getToken(MParser.BREAK, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(MParser.BY, 0);
	}
	public CASE(): TerminalNode {
		return this.getToken(MParser.CASE, 0);
	}
	public CATCH(): TerminalNode {
		return this.getToken(MParser.CATCH, 0);
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(MParser.CATEGORY, 0);
	}
	public CLASS(): TerminalNode {
		return this.getToken(MParser.CLASS, 0);
	}
	public CONTAINS(): TerminalNode {
		return this.getToken(MParser.CONTAINS, 0);
	}
	public DEF(): TerminalNode {
		return this.getToken(MParser.DEF, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(MParser.DEFAULT, 0);
	}
	public DEFINE(): TerminalNode {
		return this.getToken(MParser.DEFINE, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(MParser.DELETE, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(MParser.DESC, 0);
	}
	public DO(): TerminalNode {
		return this.getToken(MParser.DO, 0);
	}
	public DOING(): TerminalNode {
		return this.getToken(MParser.DOING, 0);
	}
	public EACH(): TerminalNode {
		return this.getToken(MParser.EACH, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(MParser.ELSE, 0);
	}
	public ENUM(): TerminalNode {
		return this.getToken(MParser.ENUM, 0);
	}
	public ENUMERATED(): TerminalNode {
		return this.getToken(MParser.ENUMERATED, 0);
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(MParser.EXCEPT, 0);
	}
	public EXECUTE(): TerminalNode {
		return this.getToken(MParser.EXECUTE, 0);
	}
	public EXPECTING(): TerminalNode {
		return this.getToken(MParser.EXPECTING, 0);
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(MParser.EXTENDS, 0);
	}
	public FETCH(): TerminalNode {
		return this.getToken(MParser.FETCH, 0);
	}
	public FILTERED(): TerminalNode {
		return this.getToken(MParser.FILTERED, 0);
	}
	public FINALLY(): TerminalNode {
		return this.getToken(MParser.FINALLY, 0);
	}
	public FLUSH(): TerminalNode {
		return this.getToken(MParser.FLUSH, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(MParser.FOR, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(MParser.FROM, 0);
	}
	public GETTER(): TerminalNode {
		return this.getToken(MParser.GETTER, 0);
	}
	public HAS(): TerminalNode {
		return this.getToken(MParser.HAS, 0);
	}
	public IF(): TerminalNode {
		return this.getToken(MParser.IF, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(MParser.IN, 0);
	}
	public INDEX(): TerminalNode {
		return this.getToken(MParser.INDEX, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(MParser.IS, 0);
	}
	public MATCHING(): TerminalNode {
		return this.getToken(MParser.MATCHING, 0);
	}
	public METHOD(): TerminalNode {
		return this.getToken(MParser.METHOD, 0);
	}
	public METHODS(): TerminalNode {
		return this.getToken(MParser.METHODS, 0);
	}
	public MODULO(): TerminalNode {
		return this.getToken(MParser.MODULO, 0);
	}
	public MUTABLE(): TerminalNode {
		return this.getToken(MParser.MUTABLE, 0);
	}
	public NATIVE(): TerminalNode {
		return this.getToken(MParser.NATIVE, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(MParser.NONE, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(MParser.NOT, 0);
	}
	public NOTHING(): TerminalNode {
		return this.getToken(MParser.NOTHING, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(MParser.NULL, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(MParser.ON, 0);
	}
	public ONE(): TerminalNode {
		return this.getToken(MParser.ONE, 0);
	}
	public OPERATOR(): TerminalNode {
		return this.getToken(MParser.OPERATOR, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(MParser.OR, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(MParser.ORDER, 0);
	}
	public OTHERWISE(): TerminalNode {
		return this.getToken(MParser.OTHERWISE, 0);
	}
	public PASS(): TerminalNode {
		return this.getToken(MParser.PASS, 0);
	}
	public RAISE(): TerminalNode {
		return this.getToken(MParser.RAISE, 0);
	}
	public READ(): TerminalNode {
		return this.getToken(MParser.READ, 0);
	}
	public RECEIVING(): TerminalNode {
		return this.getToken(MParser.RECEIVING, 0);
	}
	public RESOURCE(): TerminalNode {
		return this.getToken(MParser.RESOURCE, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(MParser.RETURN, 0);
	}
	public RETURNING(): TerminalNode {
		return this.getToken(MParser.RETURNING, 0);
	}
	public ROWS(): TerminalNode {
		return this.getToken(MParser.ROWS, 0);
	}
	public SELF(): TerminalNode {
		return this.getToken(MParser.SELF, 0);
	}
	public SETTER(): TerminalNode {
		return this.getToken(MParser.SETTER, 0);
	}
	public SINGLETON(): TerminalNode {
		return this.getToken(MParser.SINGLETON, 0);
	}
	public SORTED(): TerminalNode {
		return this.getToken(MParser.SORTED, 0);
	}
	public SUPER(): TerminalNode {
		return this.getToken(MParser.SUPER, 0);
	}
	public STORABLE(): TerminalNode {
		return this.getToken(MParser.STORABLE, 0);
	}
	public STORE(): TerminalNode {
		return this.getToken(MParser.STORE, 0);
	}
	public SWITCH(): TerminalNode {
		return this.getToken(MParser.SWITCH, 0);
	}
	public TEST(): TerminalNode {
		return this.getToken(MParser.TEST, 0);
	}
	public THIS(): TerminalNode {
		return this.getToken(MParser.THIS, 0);
	}
	public THROW(): TerminalNode {
		return this.getToken(MParser.THROW, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(MParser.TO, 0);
	}
	public TRY(): TerminalNode {
		return this.getToken(MParser.TRY, 0);
	}
	public VERIFYING(): TerminalNode {
		return this.getToken(MParser.VERIFYING, 0);
	}
	public WIDGET(): TerminalNode {
		return this.getToken(MParser.WIDGET, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(MParser.WITH, 0);
	}
	public WHEN(): TerminalNode {
		return this.getToken(MParser.WHEN, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(MParser.WHERE, 0);
	}
	public WHILE(): TerminalNode {
		return this.getToken(MParser.WHILE, 0);
	}
	public WRITE(): TerminalNode {
		return this.getToken(MParser.WRITE, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_keyword;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterKeyword) {
	 		listener.enterKeyword(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitKeyword) {
	 		listener.exitKeyword(this);
		}
	}
}


export class New_tokenContext extends ParserRuleContext {
	public _i1!: Token;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_new_token;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterNew_token) {
	 		listener.enterNew_token(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitNew_token) {
	 		listener.exitNew_token(this);
		}
	}
}


export class Key_tokenContext extends ParserRuleContext {
	public _i1!: Token;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_key_token;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterKey_token) {
	 		listener.enterKey_token(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitKey_token) {
	 		listener.exitKey_token(this);
		}
	}
}


export class Module_tokenContext extends ParserRuleContext {
	public _i1!: Token;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_module_token;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterModule_token) {
	 		listener.enterModule_token(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitModule_token) {
	 		listener.exitModule_token(this);
		}
	}
}


export class Value_tokenContext extends ParserRuleContext {
	public _i1!: Token;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_value_token;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterValue_token) {
	 		listener.enterValue_token(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitValue_token) {
	 		listener.exitValue_token(this);
		}
	}
}


export class Symbols_tokenContext extends ParserRuleContext {
	public _i1!: Token;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_symbols_token;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterSymbols_token) {
	 		listener.enterSymbols_token(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitSymbols_token) {
	 		listener.exitSymbols_token(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQ(): TerminalNode {
		return this.getToken(MParser.EQ, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_assign;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterAssign) {
	 		listener.enterAssign(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitAssign) {
	 		listener.exitAssign(this);
		}
	}
}


export class MultiplyContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(MParser.STAR, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_multiply;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterMultiply) {
	 		listener.enterMultiply(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitMultiply) {
	 		listener.exitMultiply(this);
		}
	}
}


export class DivideContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SLASH(): TerminalNode {
		return this.getToken(MParser.SLASH, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_divide;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterDivide) {
	 		listener.enterDivide(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitDivide) {
	 		listener.exitDivide(this);
		}
	}
}


export class IdivideContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BSLASH(): TerminalNode {
		return this.getToken(MParser.BSLASH, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_idivide;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterIdivide) {
	 		listener.enterIdivide(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitIdivide) {
	 		listener.exitIdivide(this);
		}
	}
}


export class ModuloContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PERCENT(): TerminalNode {
		return this.getToken(MParser.PERCENT, 0);
	}
	public MODULO(): TerminalNode {
		return this.getToken(MParser.MODULO, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_modulo;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterModulo) {
	 		listener.enterModulo(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitModulo) {
	 		listener.exitModulo(this);
		}
	}
}


export class Javascript_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_statement;
	}
	public copyFrom(ctx: Javascript_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class JavascriptStatementContext extends Javascript_statementContext {
	public _exp!: Javascript_expressionContext;
	constructor(parser: MParser, ctx: Javascript_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MParser.SEMI, 0);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptStatement) {
	 		listener.enterJavascriptStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptStatement) {
	 		listener.exitJavascriptStatement(this);
		}
	}
}
export class JavascriptReturnStatementContext extends Javascript_statementContext {
	public _exp!: Javascript_expressionContext;
	constructor(parser: MParser, ctx: Javascript_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RETURN(): TerminalNode {
		return this.getToken(MParser.RETURN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MParser.SEMI, 0);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptReturnStatement) {
	 		listener.enterJavascriptReturnStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptReturnStatement) {
	 		listener.exitJavascriptReturnStatement(this);
		}
	}
}


export class Javascript_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_expression;
	}
	public copyFrom(ctx: Javascript_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavascriptSelectorExpressionContext extends Javascript_expressionContext {
	public _parent!: Javascript_expressionContext;
	public _child!: Javascript_selector_expressionContext;
	constructor(parser: MParser, ctx: Javascript_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
	public javascript_selector_expression(): Javascript_selector_expressionContext {
		return this.getTypedRuleContext(Javascript_selector_expressionContext, 0) as Javascript_selector_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptSelectorExpression) {
	 		listener.enterJavascriptSelectorExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptSelectorExpression) {
	 		listener.exitJavascriptSelectorExpression(this);
		}
	}
}
export class JavascriptPrimaryExpressionContext extends Javascript_expressionContext {
	public _exp!: Javascript_primary_expressionContext;
	constructor(parser: MParser, ctx: Javascript_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public javascript_primary_expression(): Javascript_primary_expressionContext {
		return this.getTypedRuleContext(Javascript_primary_expressionContext, 0) as Javascript_primary_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptPrimaryExpression) {
	 		listener.enterJavascriptPrimaryExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptPrimaryExpression) {
	 		listener.exitJavascriptPrimaryExpression(this);
		}
	}
}


export class Javascript_primary_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_javascript_primary_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascript_primary_expression) {
	 		listener.enterJavascript_primary_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascript_primary_expression) {
	 		listener.exitJavascript_primary_expression(this);
		}
	}
}


export class Javascript_this_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public this_expression(): This_expressionContext {
		return this.getTypedRuleContext(This_expressionContext, 0) as This_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_this_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascript_this_expression) {
	 		listener.enterJavascript_this_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascript_this_expression) {
	 		listener.exitJavascript_this_expression(this);
		}
	}
}


export class Javascript_new_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_javascript_new_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascript_new_expression) {
	 		listener.enterJavascript_new_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascript_new_expression) {
	 		listener.exitJavascript_new_expression(this);
		}
	}
}


export class Javascript_selector_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_selector_expression;
	}
	public copyFrom(ctx: Javascript_selector_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavascriptMemberExpressionContext extends Javascript_selector_expressionContext {
	public _name!: Javascript_identifierContext;
	constructor(parser: MParser, ctx: Javascript_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public javascript_identifier(): Javascript_identifierContext {
		return this.getTypedRuleContext(Javascript_identifierContext, 0) as Javascript_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptMemberExpression) {
	 		listener.enterJavascriptMemberExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptMemberExpression) {
	 		listener.exitJavascriptMemberExpression(this);
		}
	}
}
export class JavascriptItemExpressionContext extends Javascript_selector_expressionContext {
	public _exp!: Javascript_item_expressionContext;
	constructor(parser: MParser, ctx: Javascript_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public javascript_item_expression(): Javascript_item_expressionContext {
		return this.getTypedRuleContext(Javascript_item_expressionContext, 0) as Javascript_item_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptItemExpression) {
	 		listener.enterJavascriptItemExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptItemExpression) {
	 		listener.exitJavascriptItemExpression(this);
		}
	}
}
export class JavascriptMethodExpressionContext extends Javascript_selector_expressionContext {
	public _method!: Javascript_method_expressionContext;
	constructor(parser: MParser, ctx: Javascript_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public javascript_method_expression(): Javascript_method_expressionContext {
		return this.getTypedRuleContext(Javascript_method_expressionContext, 0) as Javascript_method_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptMethodExpression) {
	 		listener.enterJavascriptMethodExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptMethodExpression) {
	 		listener.exitJavascriptMethodExpression(this);
		}
	}
}


export class Javascript_method_expressionContext extends ParserRuleContext {
	public _name!: Javascript_identifierContext;
	public _args!: Javascript_argumentsContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public javascript_identifier(): Javascript_identifierContext {
		return this.getTypedRuleContext(Javascript_identifierContext, 0) as Javascript_identifierContext;
	}
	public javascript_arguments(): Javascript_argumentsContext {
		return this.getTypedRuleContext(Javascript_argumentsContext, 0) as Javascript_argumentsContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_method_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascript_method_expression) {
	 		listener.enterJavascript_method_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascript_method_expression) {
	 		listener.exitJavascript_method_expression(this);
		}
	}
}


export class Javascript_argumentsContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_arguments;
	}
	public copyFrom(ctx: Javascript_argumentsContext): void {
		super.copyFrom(ctx);
	}
}
export class JavascriptArgumentListContext extends Javascript_argumentsContext {
	public _item!: Javascript_expressionContext;
	constructor(parser: MParser, ctx: Javascript_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptArgumentList) {
	 		listener.enterJavascriptArgumentList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptArgumentList) {
	 		listener.exitJavascriptArgumentList(this);
		}
	}
}
export class JavascriptArgumentListItemContext extends Javascript_argumentsContext {
	public _items!: Javascript_argumentsContext;
	public _item!: Javascript_expressionContext;
	constructor(parser: MParser, ctx: Javascript_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
	public javascript_arguments(): Javascript_argumentsContext {
		return this.getTypedRuleContext(Javascript_argumentsContext, 0) as Javascript_argumentsContext;
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptArgumentListItem) {
	 		listener.enterJavascriptArgumentListItem(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptArgumentListItem) {
	 		listener.exitJavascriptArgumentListItem(this);
		}
	}
}


export class Javascript_item_expressionContext extends ParserRuleContext {
	public _exp!: Javascript_expressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_item_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascript_item_expression) {
	 		listener.enterJavascript_item_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascript_item_expression) {
	 		listener.exitJavascript_item_expression(this);
		}
	}
}


export class Javascript_parenthesis_expressionContext extends ParserRuleContext {
	public _exp!: Javascript_expressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public javascript_expression(): Javascript_expressionContext {
		return this.getTypedRuleContext(Javascript_expressionContext, 0) as Javascript_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_parenthesis_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascript_parenthesis_expression) {
	 		listener.enterJavascript_parenthesis_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascript_parenthesis_expression) {
	 		listener.exitJavascript_parenthesis_expression(this);
		}
	}
}


export class Javascript_identifier_expressionContext extends ParserRuleContext {
	public _name!: Javascript_identifierContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public javascript_identifier(): Javascript_identifierContext {
		return this.getTypedRuleContext(Javascript_identifierContext, 0) as Javascript_identifierContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_identifier_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascript_identifier_expression) {
	 		listener.enterJavascript_identifier_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascript_identifier_expression) {
	 		listener.exitJavascript_identifier_expression(this);
		}
	}
}


export class Javascript_literal_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_literal_expression;
	}
	public copyFrom(ctx: Javascript_literal_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavascriptIntegerLiteralContext extends Javascript_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Javascript_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(MParser.INTEGER_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptIntegerLiteral) {
	 		listener.enterJavascriptIntegerLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptIntegerLiteral) {
	 		listener.exitJavascriptIntegerLiteral(this);
		}
	}
}
export class JavascriptBooleanLiteralContext extends Javascript_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Javascript_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(MParser.BOOLEAN_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptBooleanLiteral) {
	 		listener.enterJavascriptBooleanLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptBooleanLiteral) {
	 		listener.exitJavascriptBooleanLiteral(this);
		}
	}
}
export class JavascriptCharacterLiteralContext extends Javascript_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Javascript_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(MParser.CHAR_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptCharacterLiteral) {
	 		listener.enterJavascriptCharacterLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptCharacterLiteral) {
	 		listener.exitJavascriptCharacterLiteral(this);
		}
	}
}
export class JavascriptTextLiteralContext extends Javascript_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Javascript_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(MParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptTextLiteral) {
	 		listener.enterJavascriptTextLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptTextLiteral) {
	 		listener.exitJavascriptTextLiteral(this);
		}
	}
}
export class JavascriptDecimalLiteralContext extends Javascript_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Javascript_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(MParser.DECIMAL_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascriptDecimalLiteral) {
	 		listener.enterJavascriptDecimalLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascriptDecimalLiteral) {
	 		listener.exitJavascriptDecimalLiteral(this);
		}
	}
}


export class Javascript_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
	public SYMBOL_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.SYMBOL_IDENTIFIER, 0);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.DOLLAR_IDENTIFIER, 0);
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.TYPE_IDENTIFIER, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_javascript_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavascript_identifier) {
	 		listener.enterJavascript_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavascript_identifier) {
	 		listener.exitJavascript_identifier(this);
		}
	}
}


export class Python_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_statement;
	}
	public copyFrom(ctx: Python_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonStatementContext extends Python_statementContext {
	public _exp!: Python_expressionContext;
	constructor(parser: MParser, ctx: Python_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonStatement) {
	 		listener.enterPythonStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonStatement) {
	 		listener.exitPythonStatement(this);
		}
	}
}
export class PythonReturnStatementContext extends Python_statementContext {
	public _exp!: Python_expressionContext;
	constructor(parser: MParser, ctx: Python_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RETURN(): TerminalNode {
		return this.getToken(MParser.RETURN, 0);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonReturnStatement) {
	 		listener.enterPythonReturnStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonReturnStatement) {
	 		listener.exitPythonReturnStatement(this);
		}
	}
}


export class Python_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_expression;
	}
	public copyFrom(ctx: Python_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonSelectorExpressionContext extends Python_expressionContext {
	public _parent!: Python_expressionContext;
	public _child!: Python_selector_expressionContext;
	constructor(parser: MParser, ctx: Python_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public python_selector_expression(): Python_selector_expressionContext {
		return this.getTypedRuleContext(Python_selector_expressionContext, 0) as Python_selector_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonSelectorExpression) {
	 		listener.enterPythonSelectorExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonSelectorExpression) {
	 		listener.exitPythonSelectorExpression(this);
		}
	}
}
export class PythonPrimaryExpressionContext extends Python_expressionContext {
	public _exp!: Python_primary_expressionContext;
	constructor(parser: MParser, ctx: Python_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_primary_expression(): Python_primary_expressionContext {
		return this.getTypedRuleContext(Python_primary_expressionContext, 0) as Python_primary_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonPrimaryExpression) {
	 		listener.enterPythonPrimaryExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonPrimaryExpression) {
	 		listener.exitPythonPrimaryExpression(this);
		}
	}
}


export class Python_primary_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_primary_expression;
	}
	public copyFrom(ctx: Python_primary_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonParenthesisExpressionContext extends Python_primary_expressionContext {
	public _exp!: Python_parenthesis_expressionContext;
	constructor(parser: MParser, ctx: Python_primary_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_parenthesis_expression(): Python_parenthesis_expressionContext {
		return this.getTypedRuleContext(Python_parenthesis_expressionContext, 0) as Python_parenthesis_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonParenthesisExpression) {
	 		listener.enterPythonParenthesisExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonParenthesisExpression) {
	 		listener.exitPythonParenthesisExpression(this);
		}
	}
}
export class PythonIdentifierExpressionContext extends Python_primary_expressionContext {
	public _exp!: Python_identifier_expressionContext;
	constructor(parser: MParser, ctx: Python_primary_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_identifier_expression(): Python_identifier_expressionContext {
		return this.getTypedRuleContext(Python_identifier_expressionContext, 0) as Python_identifier_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonIdentifierExpression) {
	 		listener.enterPythonIdentifierExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonIdentifierExpression) {
	 		listener.exitPythonIdentifierExpression(this);
		}
	}
}
export class PythonSelfExpressionContext extends Python_primary_expressionContext {
	public _exp!: Python_self_expressionContext;
	constructor(parser: MParser, ctx: Python_primary_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_self_expression(): Python_self_expressionContext {
		return this.getTypedRuleContext(Python_self_expressionContext, 0) as Python_self_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonSelfExpression) {
	 		listener.enterPythonSelfExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonSelfExpression) {
	 		listener.exitPythonSelfExpression(this);
		}
	}
}
export class PythonLiteralExpressionContext extends Python_primary_expressionContext {
	public _exp!: Python_literal_expressionContext;
	constructor(parser: MParser, ctx: Python_primary_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_literal_expression(): Python_literal_expressionContext {
		return this.getTypedRuleContext(Python_literal_expressionContext, 0) as Python_literal_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonLiteralExpression) {
	 		listener.enterPythonLiteralExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonLiteralExpression) {
	 		listener.exitPythonLiteralExpression(this);
		}
	}
}
export class PythonGlobalMethodExpressionContext extends Python_primary_expressionContext {
	public _exp!: Python_method_expressionContext;
	constructor(parser: MParser, ctx: Python_primary_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_method_expression(): Python_method_expressionContext {
		return this.getTypedRuleContext(Python_method_expressionContext, 0) as Python_method_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonGlobalMethodExpression) {
	 		listener.enterPythonGlobalMethodExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonGlobalMethodExpression) {
	 		listener.exitPythonGlobalMethodExpression(this);
		}
	}
}


export class Python_self_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public this_expression(): This_expressionContext {
		return this.getTypedRuleContext(This_expressionContext, 0) as This_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_self_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPython_self_expression) {
	 		listener.enterPython_self_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPython_self_expression) {
	 		listener.exitPython_self_expression(this);
		}
	}
}


export class Python_selector_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_selector_expression;
	}
	public copyFrom(ctx: Python_selector_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonMethodExpressionContext extends Python_selector_expressionContext {
	public _exp!: Python_method_expressionContext;
	constructor(parser: MParser, ctx: Python_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public python_method_expression(): Python_method_expressionContext {
		return this.getTypedRuleContext(Python_method_expressionContext, 0) as Python_method_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonMethodExpression) {
	 		listener.enterPythonMethodExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonMethodExpression) {
	 		listener.exitPythonMethodExpression(this);
		}
	}
}
export class PythonItemExpressionContext extends Python_selector_expressionContext {
	public _exp!: Python_expressionContext;
	constructor(parser: MParser, ctx: Python_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonItemExpression) {
	 		listener.enterPythonItemExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonItemExpression) {
	 		listener.exitPythonItemExpression(this);
		}
	}
}


export class Python_method_expressionContext extends ParserRuleContext {
	public _name!: Python_identifierContext;
	public _args!: Python_argument_listContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public python_identifier(): Python_identifierContext {
		return this.getTypedRuleContext(Python_identifierContext, 0) as Python_identifierContext;
	}
	public python_argument_list(): Python_argument_listContext {
		return this.getTypedRuleContext(Python_argument_listContext, 0) as Python_argument_listContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_method_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPython_method_expression) {
	 		listener.enterPython_method_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPython_method_expression) {
	 		listener.exitPython_method_expression(this);
		}
	}
}


export class Python_argument_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_argument_list;
	}
	public copyFrom(ctx: Python_argument_listContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonOrdinalOnlyArgumentListContext extends Python_argument_listContext {
	public _ordinal!: Python_ordinal_argument_listContext;
	constructor(parser: MParser, ctx: Python_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_ordinal_argument_list(): Python_ordinal_argument_listContext {
		return this.getTypedRuleContext(Python_ordinal_argument_listContext, 0) as Python_ordinal_argument_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonOrdinalOnlyArgumentList) {
	 		listener.enterPythonOrdinalOnlyArgumentList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonOrdinalOnlyArgumentList) {
	 		listener.exitPythonOrdinalOnlyArgumentList(this);
		}
	}
}
export class PythonNamedOnlyArgumentListContext extends Python_argument_listContext {
	public _named!: Python_named_argument_listContext;
	constructor(parser: MParser, ctx: Python_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_named_argument_list(): Python_named_argument_listContext {
		return this.getTypedRuleContext(Python_named_argument_listContext, 0) as Python_named_argument_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonNamedOnlyArgumentList) {
	 		listener.enterPythonNamedOnlyArgumentList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonNamedOnlyArgumentList) {
	 		listener.exitPythonNamedOnlyArgumentList(this);
		}
	}
}
export class PythonArgumentListContext extends Python_argument_listContext {
	public _ordinal!: Python_ordinal_argument_listContext;
	public _named!: Python_named_argument_listContext;
	constructor(parser: MParser, ctx: Python_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
	public python_ordinal_argument_list(): Python_ordinal_argument_listContext {
		return this.getTypedRuleContext(Python_ordinal_argument_listContext, 0) as Python_ordinal_argument_listContext;
	}
	public python_named_argument_list(): Python_named_argument_listContext {
		return this.getTypedRuleContext(Python_named_argument_listContext, 0) as Python_named_argument_listContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonArgumentList) {
	 		listener.enterPythonArgumentList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonArgumentList) {
	 		listener.exitPythonArgumentList(this);
		}
	}
}


export class Python_ordinal_argument_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_ordinal_argument_list;
	}
	public copyFrom(ctx: Python_ordinal_argument_listContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonOrdinalArgumentListContext extends Python_ordinal_argument_listContext {
	public _item!: Python_expressionContext;
	constructor(parser: MParser, ctx: Python_ordinal_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonOrdinalArgumentList) {
	 		listener.enterPythonOrdinalArgumentList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonOrdinalArgumentList) {
	 		listener.exitPythonOrdinalArgumentList(this);
		}
	}
}
export class PythonOrdinalArgumentListItemContext extends Python_ordinal_argument_listContext {
	public _items!: Python_ordinal_argument_listContext;
	public _item!: Python_expressionContext;
	constructor(parser: MParser, ctx: Python_ordinal_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
	public python_ordinal_argument_list(): Python_ordinal_argument_listContext {
		return this.getTypedRuleContext(Python_ordinal_argument_listContext, 0) as Python_ordinal_argument_listContext;
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonOrdinalArgumentListItem) {
	 		listener.enterPythonOrdinalArgumentListItem(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonOrdinalArgumentListItem) {
	 		listener.exitPythonOrdinalArgumentListItem(this);
		}
	}
}


export class Python_named_argument_listContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_named_argument_list;
	}
	public copyFrom(ctx: Python_named_argument_listContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonNamedArgumentListContext extends Python_named_argument_listContext {
	public _name!: Python_identifierContext;
	public _exp!: Python_expressionContext;
	constructor(parser: MParser, ctx: Python_named_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public EQ(): TerminalNode {
		return this.getToken(MParser.EQ, 0);
	}
	public python_identifier(): Python_identifierContext {
		return this.getTypedRuleContext(Python_identifierContext, 0) as Python_identifierContext;
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonNamedArgumentList) {
	 		listener.enterPythonNamedArgumentList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonNamedArgumentList) {
	 		listener.exitPythonNamedArgumentList(this);
		}
	}
}
export class PythonNamedArgumentListItemContext extends Python_named_argument_listContext {
	public _items!: Python_named_argument_listContext;
	public _name!: Python_identifierContext;
	public _exp!: Python_expressionContext;
	constructor(parser: MParser, ctx: Python_named_argument_listContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(MParser.EQ, 0);
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
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonNamedArgumentListItem) {
	 		listener.enterPythonNamedArgumentListItem(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonNamedArgumentListItem) {
	 		listener.exitPythonNamedArgumentListItem(this);
		}
	}
}


export class Python_parenthesis_expressionContext extends ParserRuleContext {
	public _exp!: Python_expressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public python_expression(): Python_expressionContext {
		return this.getTypedRuleContext(Python_expressionContext, 0) as Python_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_parenthesis_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPython_parenthesis_expression) {
	 		listener.enterPython_parenthesis_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPython_parenthesis_expression) {
	 		listener.exitPython_parenthesis_expression(this);
		}
	}
}


export class Python_identifier_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_identifier_expression;
	}
	public copyFrom(ctx: Python_identifier_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonChildIdentifierContext extends Python_identifier_expressionContext {
	public _parent!: Python_identifier_expressionContext;
	public _name!: Python_identifierContext;
	constructor(parser: MParser, ctx: Python_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public python_identifier_expression(): Python_identifier_expressionContext {
		return this.getTypedRuleContext(Python_identifier_expressionContext, 0) as Python_identifier_expressionContext;
	}
	public python_identifier(): Python_identifierContext {
		return this.getTypedRuleContext(Python_identifierContext, 0) as Python_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonChildIdentifier) {
	 		listener.enterPythonChildIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonChildIdentifier) {
	 		listener.exitPythonChildIdentifier(this);
		}
	}
}
export class PythonPromptoIdentifierContext extends Python_identifier_expressionContext {
	constructor(parser: MParser, ctx: Python_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.DOLLAR_IDENTIFIER, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonPromptoIdentifier) {
	 		listener.enterPythonPromptoIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonPromptoIdentifier) {
	 		listener.exitPythonPromptoIdentifier(this);
		}
	}
}
export class PythonIdentifierContext extends Python_identifier_expressionContext {
	public _name!: Python_identifierContext;
	constructor(parser: MParser, ctx: Python_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public python_identifier(): Python_identifierContext {
		return this.getTypedRuleContext(Python_identifierContext, 0) as Python_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonIdentifier) {
	 		listener.enterPythonIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonIdentifier) {
	 		listener.exitPythonIdentifier(this);
		}
	}
}


export class Python_literal_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_literal_expression;
	}
	public copyFrom(ctx: Python_literal_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PythonIntegerLiteralContext extends Python_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Python_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(MParser.INTEGER_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonIntegerLiteral) {
	 		listener.enterPythonIntegerLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonIntegerLiteral) {
	 		listener.exitPythonIntegerLiteral(this);
		}
	}
}
export class PythonBooleanLiteralContext extends Python_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Python_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(MParser.BOOLEAN_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonBooleanLiteral) {
	 		listener.enterPythonBooleanLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonBooleanLiteral) {
	 		listener.exitPythonBooleanLiteral(this);
		}
	}
}
export class PythonCharacterLiteralContext extends Python_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Python_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(MParser.CHAR_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonCharacterLiteral) {
	 		listener.enterPythonCharacterLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonCharacterLiteral) {
	 		listener.exitPythonCharacterLiteral(this);
		}
	}
}
export class PythonTextLiteralContext extends Python_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Python_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(MParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonTextLiteral) {
	 		listener.enterPythonTextLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonTextLiteral) {
	 		listener.exitPythonTextLiteral(this);
		}
	}
}
export class PythonDecimalLiteralContext extends Python_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Python_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(MParser.DECIMAL_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPythonDecimalLiteral) {
	 		listener.enterPythonDecimalLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPythonDecimalLiteral) {
	 		listener.exitPythonDecimalLiteral(this);
		}
	}
}


export class Python_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
	public SYMBOL_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.SYMBOL_IDENTIFIER, 0);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.DOLLAR_IDENTIFIER, 0);
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.TYPE_IDENTIFIER, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_python_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterPython_identifier) {
	 		listener.enterPython_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitPython_identifier) {
	 		listener.exitPython_identifier(this);
		}
	}
}


export class Java_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_statement;
	}
	public copyFrom(ctx: Java_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaReturnStatementContext extends Java_statementContext {
	public _exp!: Java_expressionContext;
	constructor(parser: MParser, ctx: Java_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RETURN(): TerminalNode {
		return this.getToken(MParser.RETURN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MParser.SEMI, 0);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaReturnStatement) {
	 		listener.enterJavaReturnStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaReturnStatement) {
	 		listener.exitJavaReturnStatement(this);
		}
	}
}
export class JavaStatementContext extends Java_statementContext {
	public _exp!: Java_expressionContext;
	constructor(parser: MParser, ctx: Java_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MParser.SEMI, 0);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaStatement) {
	 		listener.enterJavaStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaStatement) {
	 		listener.exitJavaStatement(this);
		}
	}
}


export class Java_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_expression;
	}
	public copyFrom(ctx: Java_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaSelectorExpressionContext extends Java_expressionContext {
	public _parent!: Java_expressionContext;
	public _child!: Java_selector_expressionContext;
	constructor(parser: MParser, ctx: Java_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
	public java_selector_expression(): Java_selector_expressionContext {
		return this.getTypedRuleContext(Java_selector_expressionContext, 0) as Java_selector_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaSelectorExpression) {
	 		listener.enterJavaSelectorExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaSelectorExpression) {
	 		listener.exitJavaSelectorExpression(this);
		}
	}
}
export class JavaPrimaryExpressionContext extends Java_expressionContext {
	public _exp!: Java_primary_expressionContext;
	constructor(parser: MParser, ctx: Java_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_primary_expression(): Java_primary_expressionContext {
		return this.getTypedRuleContext(Java_primary_expressionContext, 0) as Java_primary_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaPrimaryExpression) {
	 		listener.enterJavaPrimaryExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaPrimaryExpression) {
	 		listener.exitJavaPrimaryExpression(this);
		}
	}
}


export class Java_primary_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_java_primary_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJava_primary_expression) {
	 		listener.enterJava_primary_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJava_primary_expression) {
	 		listener.exitJava_primary_expression(this);
		}
	}
}


export class Java_this_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public this_expression(): This_expressionContext {
		return this.getTypedRuleContext(This_expressionContext, 0) as This_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_this_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJava_this_expression) {
	 		listener.enterJava_this_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJava_this_expression) {
	 		listener.exitJava_this_expression(this);
		}
	}
}


export class Java_new_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_java_new_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJava_new_expression) {
	 		listener.enterJava_new_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJava_new_expression) {
	 		listener.exitJava_new_expression(this);
		}
	}
}


export class Java_selector_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_selector_expression;
	}
	public copyFrom(ctx: Java_selector_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaItemExpressionContext extends Java_selector_expressionContext {
	public _exp!: Java_item_expressionContext;
	constructor(parser: MParser, ctx: Java_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_item_expression(): Java_item_expressionContext {
		return this.getTypedRuleContext(Java_item_expressionContext, 0) as Java_item_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaItemExpression) {
	 		listener.enterJavaItemExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaItemExpression) {
	 		listener.exitJavaItemExpression(this);
		}
	}
}
export class JavaMethodExpressionContext extends Java_selector_expressionContext {
	public _exp!: Java_method_expressionContext;
	constructor(parser: MParser, ctx: Java_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public java_method_expression(): Java_method_expressionContext {
		return this.getTypedRuleContext(Java_method_expressionContext, 0) as Java_method_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaMethodExpression) {
	 		listener.enterJavaMethodExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaMethodExpression) {
	 		listener.exitJavaMethodExpression(this);
		}
	}
}


export class Java_method_expressionContext extends ParserRuleContext {
	public _name!: Java_identifierContext;
	public _args!: Java_argumentsContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public java_identifier(): Java_identifierContext {
		return this.getTypedRuleContext(Java_identifierContext, 0) as Java_identifierContext;
	}
	public java_arguments(): Java_argumentsContext {
		return this.getTypedRuleContext(Java_argumentsContext, 0) as Java_argumentsContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_method_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJava_method_expression) {
	 		listener.enterJava_method_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJava_method_expression) {
	 		listener.exitJava_method_expression(this);
		}
	}
}


export class Java_argumentsContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_arguments;
	}
	public copyFrom(ctx: Java_argumentsContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaArgumentListItemContext extends Java_argumentsContext {
	public _items!: Java_argumentsContext;
	public _item!: Java_expressionContext;
	constructor(parser: MParser, ctx: Java_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
	public java_arguments(): Java_argumentsContext {
		return this.getTypedRuleContext(Java_argumentsContext, 0) as Java_argumentsContext;
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaArgumentListItem) {
	 		listener.enterJavaArgumentListItem(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaArgumentListItem) {
	 		listener.exitJavaArgumentListItem(this);
		}
	}
}
export class JavaArgumentListContext extends Java_argumentsContext {
	public _item!: Java_expressionContext;
	constructor(parser: MParser, ctx: Java_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaArgumentList) {
	 		listener.enterJavaArgumentList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaArgumentList) {
	 		listener.exitJavaArgumentList(this);
		}
	}
}


export class Java_item_expressionContext extends ParserRuleContext {
	public _exp!: Java_expressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_item_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJava_item_expression) {
	 		listener.enterJava_item_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJava_item_expression) {
	 		listener.exitJava_item_expression(this);
		}
	}
}


export class Java_parenthesis_expressionContext extends ParserRuleContext {
	public _exp!: Java_expressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public java_expression(): Java_expressionContext {
		return this.getTypedRuleContext(Java_expressionContext, 0) as Java_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_parenthesis_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJava_parenthesis_expression) {
	 		listener.enterJava_parenthesis_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJava_parenthesis_expression) {
	 		listener.exitJava_parenthesis_expression(this);
		}
	}
}


export class Java_identifier_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_identifier_expression;
	}
	public copyFrom(ctx: Java_identifier_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaIdentifierContext extends Java_identifier_expressionContext {
	public _name!: Java_identifierContext;
	constructor(parser: MParser, ctx: Java_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_identifier(): Java_identifierContext {
		return this.getTypedRuleContext(Java_identifierContext, 0) as Java_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaIdentifier) {
	 		listener.enterJavaIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaIdentifier) {
	 		listener.exitJavaIdentifier(this);
		}
	}
}
export class JavaChildIdentifierContext extends Java_identifier_expressionContext {
	public _parent!: Java_identifier_expressionContext;
	public _name!: Java_identifierContext;
	constructor(parser: MParser, ctx: Java_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public java_identifier_expression(): Java_identifier_expressionContext {
		return this.getTypedRuleContext(Java_identifier_expressionContext, 0) as Java_identifier_expressionContext;
	}
	public java_identifier(): Java_identifierContext {
		return this.getTypedRuleContext(Java_identifierContext, 0) as Java_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaChildIdentifier) {
	 		listener.enterJavaChildIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaChildIdentifier) {
	 		listener.exitJavaChildIdentifier(this);
		}
	}
}


export class Java_class_identifier_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_class_identifier_expression;
	}
	public copyFrom(ctx: Java_class_identifier_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaClassIdentifierContext extends Java_class_identifier_expressionContext {
	public _klass!: Java_identifier_expressionContext;
	constructor(parser: MParser, ctx: Java_class_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_identifier_expression(): Java_identifier_expressionContext {
		return this.getTypedRuleContext(Java_identifier_expressionContext, 0) as Java_identifier_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaClassIdentifier) {
	 		listener.enterJavaClassIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaClassIdentifier) {
	 		listener.exitJavaClassIdentifier(this);
		}
	}
}
export class JavaChildClassIdentifierContext extends Java_class_identifier_expressionContext {
	public _parent!: Java_class_identifier_expressionContext;
	public _name!: Token;
	constructor(parser: MParser, ctx: Java_class_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public java_class_identifier_expression(): Java_class_identifier_expressionContext {
		return this.getTypedRuleContext(Java_class_identifier_expressionContext, 0) as Java_class_identifier_expressionContext;
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.DOLLAR_IDENTIFIER, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaChildClassIdentifier) {
	 		listener.enterJavaChildClassIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaChildClassIdentifier) {
	 		listener.exitJavaChildClassIdentifier(this);
		}
	}
}


export class Java_literal_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_literal_expression;
	}
	public copyFrom(ctx: Java_literal_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class JavaBooleanLiteralContext extends Java_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Java_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(MParser.BOOLEAN_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaBooleanLiteral) {
	 		listener.enterJavaBooleanLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaBooleanLiteral) {
	 		listener.exitJavaBooleanLiteral(this);
		}
	}
}
export class JavaCharacterLiteralContext extends Java_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Java_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(MParser.CHAR_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaCharacterLiteral) {
	 		listener.enterJavaCharacterLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaCharacterLiteral) {
	 		listener.exitJavaCharacterLiteral(this);
		}
	}
}
export class JavaIntegerLiteralContext extends Java_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Java_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(MParser.INTEGER_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaIntegerLiteral) {
	 		listener.enterJavaIntegerLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaIntegerLiteral) {
	 		listener.exitJavaIntegerLiteral(this);
		}
	}
}
export class JavaTextLiteralContext extends Java_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Java_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(MParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaTextLiteral) {
	 		listener.enterJavaTextLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaTextLiteral) {
	 		listener.exitJavaTextLiteral(this);
		}
	}
}
export class JavaDecimalLiteralContext extends Java_literal_expressionContext {
	public _t!: Token;
	constructor(parser: MParser, ctx: Java_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(MParser.DECIMAL_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJavaDecimalLiteral) {
	 		listener.enterJavaDecimalLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJavaDecimalLiteral) {
	 		listener.exitJavaDecimalLiteral(this);
		}
	}
}


export class Java_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
	public SYMBOL_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.SYMBOL_IDENTIFIER, 0);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.DOLLAR_IDENTIFIER, 0);
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.TYPE_IDENTIFIER, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_java_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJava_identifier) {
	 		listener.enterJava_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJava_identifier) {
	 		listener.exitJava_identifier(this);
		}
	}
}


export class Csharp_statementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_csharp_statement;
	}
	public copyFrom(ctx: Csharp_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpReturnStatementContext extends Csharp_statementContext {
	public _exp!: Csharp_expressionContext;
	constructor(parser: MParser, ctx: Csharp_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public RETURN(): TerminalNode {
		return this.getToken(MParser.RETURN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MParser.SEMI, 0);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpReturnStatement) {
	 		listener.enterCSharpReturnStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpReturnStatement) {
	 		listener.exitCSharpReturnStatement(this);
		}
	}
}
export class CSharpStatementContext extends Csharp_statementContext {
	public _exp!: Csharp_expressionContext;
	constructor(parser: MParser, ctx: Csharp_statementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MParser.SEMI, 0);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpStatement) {
	 		listener.enterCSharpStatement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpStatement) {
	 		listener.exitCSharpStatement(this);
		}
	}
}


export class Csharp_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_csharp_expression;
	}
	public copyFrom(ctx: Csharp_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpSelectorExpressionContext extends Csharp_expressionContext {
	public _parent!: Csharp_expressionContext;
	public _child!: Csharp_selector_expressionContext;
	constructor(parser: MParser, ctx: Csharp_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
	public csharp_selector_expression(): Csharp_selector_expressionContext {
		return this.getTypedRuleContext(Csharp_selector_expressionContext, 0) as Csharp_selector_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpSelectorExpression) {
	 		listener.enterCSharpSelectorExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpSelectorExpression) {
	 		listener.exitCSharpSelectorExpression(this);
		}
	}
}
export class CSharpPrimaryExpressionContext extends Csharp_expressionContext {
	public _exp!: Csharp_primary_expressionContext;
	constructor(parser: MParser, ctx: Csharp_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public csharp_primary_expression(): Csharp_primary_expressionContext {
		return this.getTypedRuleContext(Csharp_primary_expressionContext, 0) as Csharp_primary_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpPrimaryExpression) {
	 		listener.enterCSharpPrimaryExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpPrimaryExpression) {
	 		listener.exitCSharpPrimaryExpression(this);
		}
	}
}


export class Csharp_primary_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_csharp_primary_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCsharp_primary_expression) {
	 		listener.enterCsharp_primary_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCsharp_primary_expression) {
	 		listener.exitCsharp_primary_expression(this);
		}
	}
}


export class Csharp_this_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public this_expression(): This_expressionContext {
		return this.getTypedRuleContext(This_expressionContext, 0) as This_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_csharp_this_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCsharp_this_expression) {
	 		listener.enterCsharp_this_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCsharp_this_expression) {
	 		listener.exitCsharp_this_expression(this);
		}
	}
}


export class Csharp_new_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_csharp_new_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCsharp_new_expression) {
	 		listener.enterCsharp_new_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCsharp_new_expression) {
	 		listener.exitCsharp_new_expression(this);
		}
	}
}


export class Csharp_selector_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_csharp_selector_expression;
	}
	public copyFrom(ctx: Csharp_selector_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpMethodExpressionContext extends Csharp_selector_expressionContext {
	public _exp!: Csharp_method_expressionContext;
	constructor(parser: MParser, ctx: Csharp_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public csharp_method_expression(): Csharp_method_expressionContext {
		return this.getTypedRuleContext(Csharp_method_expressionContext, 0) as Csharp_method_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpMethodExpression) {
	 		listener.enterCSharpMethodExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpMethodExpression) {
	 		listener.exitCSharpMethodExpression(this);
		}
	}
}
export class CSharpItemExpressionContext extends Csharp_selector_expressionContext {
	public _exp!: Csharp_item_expressionContext;
	constructor(parser: MParser, ctx: Csharp_selector_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public csharp_item_expression(): Csharp_item_expressionContext {
		return this.getTypedRuleContext(Csharp_item_expressionContext, 0) as Csharp_item_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpItemExpression) {
	 		listener.enterCSharpItemExpression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpItemExpression) {
	 		listener.exitCSharpItemExpression(this);
		}
	}
}


export class Csharp_method_expressionContext extends ParserRuleContext {
	public _name!: Csharp_identifierContext;
	public _args!: Csharp_argumentsContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public csharp_identifier(): Csharp_identifierContext {
		return this.getTypedRuleContext(Csharp_identifierContext, 0) as Csharp_identifierContext;
	}
	public csharp_arguments(): Csharp_argumentsContext {
		return this.getTypedRuleContext(Csharp_argumentsContext, 0) as Csharp_argumentsContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_csharp_method_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCsharp_method_expression) {
	 		listener.enterCsharp_method_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCsharp_method_expression) {
	 		listener.exitCsharp_method_expression(this);
		}
	}
}


export class Csharp_argumentsContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_csharp_arguments;
	}
	public copyFrom(ctx: Csharp_argumentsContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpArgumentListContext extends Csharp_argumentsContext {
	public _item!: Csharp_expressionContext;
	constructor(parser: MParser, ctx: Csharp_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpArgumentList) {
	 		listener.enterCSharpArgumentList(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpArgumentList) {
	 		listener.exitCSharpArgumentList(this);
		}
	}
}
export class CSharpArgumentListItemContext extends Csharp_argumentsContext {
	public _items!: Csharp_argumentsContext;
	public _item!: Csharp_expressionContext;
	constructor(parser: MParser, ctx: Csharp_argumentsContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public COMMA(): TerminalNode {
		return this.getToken(MParser.COMMA, 0);
	}
	public csharp_arguments(): Csharp_argumentsContext {
		return this.getTypedRuleContext(Csharp_argumentsContext, 0) as Csharp_argumentsContext;
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpArgumentListItem) {
	 		listener.enterCSharpArgumentListItem(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpArgumentListItem) {
	 		listener.exitCSharpArgumentListItem(this);
		}
	}
}


export class Csharp_item_expressionContext extends ParserRuleContext {
	public _exp!: Csharp_expressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(MParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(MParser.RBRAK, 0);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_csharp_item_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCsharp_item_expression) {
	 		listener.enterCsharp_item_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCsharp_item_expression) {
	 		listener.exitCsharp_item_expression(this);
		}
	}
}


export class Csharp_parenthesis_expressionContext extends ParserRuleContext {
	public _exp!: Csharp_expressionContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(MParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(MParser.RPAR, 0);
	}
	public csharp_expression(): Csharp_expressionContext {
		return this.getTypedRuleContext(Csharp_expressionContext, 0) as Csharp_expressionContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_csharp_parenthesis_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCsharp_parenthesis_expression) {
	 		listener.enterCsharp_parenthesis_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCsharp_parenthesis_expression) {
	 		listener.exitCsharp_parenthesis_expression(this);
		}
	}
}


export class Csharp_identifier_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_csharp_identifier_expression;
	}
	public copyFrom(ctx: Csharp_identifier_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpIdentifierContext extends Csharp_identifier_expressionContext {
	public _name!: Csharp_identifierContext;
	constructor(parser: MParser, ctx: Csharp_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public csharp_identifier(): Csharp_identifierContext {
		return this.getTypedRuleContext(Csharp_identifierContext, 0) as Csharp_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpIdentifier) {
	 		listener.enterCSharpIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpIdentifier) {
	 		listener.exitCSharpIdentifier(this);
		}
	}
}
export class CSharpChildIdentifierContext extends Csharp_identifier_expressionContext {
	public _parent!: Csharp_identifier_expressionContext;
	public _name!: Csharp_identifierContext;
	constructor(parser: MParser, ctx: Csharp_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(MParser.DOT, 0);
	}
	public csharp_identifier_expression(): Csharp_identifier_expressionContext {
		return this.getTypedRuleContext(Csharp_identifier_expressionContext, 0) as Csharp_identifier_expressionContext;
	}
	public csharp_identifier(): Csharp_identifierContext {
		return this.getTypedRuleContext(Csharp_identifierContext, 0) as Csharp_identifierContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpChildIdentifier) {
	 		listener.enterCSharpChildIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpChildIdentifier) {
	 		listener.exitCSharpChildIdentifier(this);
		}
	}
}
export class CSharpPromptoIdentifierContext extends Csharp_identifier_expressionContext {
	constructor(parser: MParser, ctx: Csharp_identifier_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.DOLLAR_IDENTIFIER, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpPromptoIdentifier) {
	 		listener.enterCSharpPromptoIdentifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpPromptoIdentifier) {
	 		listener.exitCSharpPromptoIdentifier(this);
		}
	}
}


export class Csharp_literal_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_csharp_literal_expression;
	}
	public copyFrom(ctx: Csharp_literal_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CSharpBooleanLiteralContext extends Csharp_literal_expressionContext {
	constructor(parser: MParser, ctx: Csharp_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(MParser.BOOLEAN_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpBooleanLiteral) {
	 		listener.enterCSharpBooleanLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpBooleanLiteral) {
	 		listener.exitCSharpBooleanLiteral(this);
		}
	}
}
export class CSharpIntegerLiteralContext extends Csharp_literal_expressionContext {
	constructor(parser: MParser, ctx: Csharp_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(MParser.INTEGER_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpIntegerLiteral) {
	 		listener.enterCSharpIntegerLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpIntegerLiteral) {
	 		listener.exitCSharpIntegerLiteral(this);
		}
	}
}
export class CSharpDecimalLiteralContext extends Csharp_literal_expressionContext {
	constructor(parser: MParser, ctx: Csharp_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(MParser.DECIMAL_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpDecimalLiteral) {
	 		listener.enterCSharpDecimalLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpDecimalLiteral) {
	 		listener.exitCSharpDecimalLiteral(this);
		}
	}
}
export class CSharpCharacterLiteralContext extends Csharp_literal_expressionContext {
	constructor(parser: MParser, ctx: Csharp_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(MParser.CHAR_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpCharacterLiteral) {
	 		listener.enterCSharpCharacterLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpCharacterLiteral) {
	 		listener.exitCSharpCharacterLiteral(this);
		}
	}
}
export class CSharpTextLiteralContext extends Csharp_literal_expressionContext {
	constructor(parser: MParser, ctx: Csharp_literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(MParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCSharpTextLiteral) {
	 		listener.enterCSharpTextLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCSharpTextLiteral) {
	 		listener.exitCSharpTextLiteral(this);
		}
	}
}


export class Csharp_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIABLE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.VARIABLE_IDENTIFIER, 0);
	}
	public SYMBOL_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.SYMBOL_IDENTIFIER, 0);
	}
	public DOLLAR_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.DOLLAR_IDENTIFIER, 0);
	}
	public TYPE_IDENTIFIER(): TerminalNode {
		return this.getToken(MParser.TYPE_IDENTIFIER, 0);
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_csharp_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCsharp_identifier) {
	 		listener.enterCsharp_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCsharp_identifier) {
	 		listener.exitCsharp_identifier(this);
		}
	}
}


export class Jsx_expressionContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_jsx_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_expression) {
	 		listener.enterJsx_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_expression) {
	 		listener.exitJsx_expression(this);
		}
	}
}


export class Jsx_elementContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_jsx_element;
	}
	public copyFrom(ctx: Jsx_elementContext): void {
		super.copyFrom(ctx);
	}
}
export class JsxSelfClosingContext extends Jsx_elementContext {
	public _jsx!: Jsx_self_closingContext;
	constructor(parser: MParser, ctx: Jsx_elementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public jsx_self_closing(): Jsx_self_closingContext {
		return this.getTypedRuleContext(Jsx_self_closingContext, 0) as Jsx_self_closingContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsxSelfClosing) {
	 		listener.enterJsxSelfClosing(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsxSelfClosing) {
	 		listener.exitJsxSelfClosing(this);
		}
	}
}
export class JsxElementContext extends Jsx_elementContext {
	public _opening!: Jsx_openingContext;
	public _children_!: Jsx_childrenContext;
	public _closing!: Jsx_closingContext;
	constructor(parser: MParser, ctx: Jsx_elementContext) {
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
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsxElement) {
	 		listener.enterJsxElement(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsxElement) {
	 		listener.exitJsxElement(this);
		}
	}
}


export class Jsx_fragmentContext extends ParserRuleContext {
	public _children_!: Jsx_childrenContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_jsx_fragment;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_fragment) {
	 		listener.enterJsx_fragment(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_fragment) {
	 		listener.exitJsx_fragment(this);
		}
	}
}


export class Jsx_fragment_startContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
	}
	public LTGT(): TerminalNode {
		return this.getToken(MParser.LTGT, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_jsx_fragment_start;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_fragment_start) {
	 		listener.enterJsx_fragment_start(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_fragment_start) {
	 		listener.exitJsx_fragment_start(this);
		}
	}
}


export class Jsx_fragment_endContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(MParser.SLASH, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_jsx_fragment_end;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_fragment_end) {
	 		listener.enterJsx_fragment_end(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_fragment_end) {
	 		listener.exitJsx_fragment_end(this);
		}
	}
}


export class Jsx_self_closingContext extends ParserRuleContext {
	public _name!: Jsx_element_nameContext;
	public _attributes!: Jsx_attributeContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public ws_plus(): Ws_plusContext {
		return this.getTypedRuleContext(Ws_plusContext, 0) as Ws_plusContext;
	}
	public SLASH(): TerminalNode {
		return this.getToken(MParser.SLASH, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
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
    	return MParser.RULE_jsx_self_closing;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_self_closing) {
	 		listener.enterJsx_self_closing(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_self_closing) {
	 		listener.exitJsx_self_closing(this);
		}
	}
}


export class Jsx_openingContext extends ParserRuleContext {
	public _name!: Jsx_element_nameContext;
	public _attributes!: Jsx_attributeContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public ws_plus(): Ws_plusContext {
		return this.getTypedRuleContext(Ws_plusContext, 0) as Ws_plusContext;
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
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
    	return MParser.RULE_jsx_opening;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_opening) {
	 		listener.enterJsx_opening(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_opening) {
	 		listener.exitJsx_opening(this);
		}
	}
}


export class Jsx_closingContext extends ParserRuleContext {
	public _name!: Jsx_element_nameContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(MParser.SLASH, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
	}
	public jsx_element_name(): Jsx_element_nameContext {
		return this.getTypedRuleContext(Jsx_element_nameContext, 0) as Jsx_element_nameContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_jsx_closing;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_closing) {
	 		listener.enterJsx_closing(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_closing) {
	 		listener.exitJsx_closing(this);
		}
	}
}


export class Jsx_element_nameContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
	    	return this.getTokens(MParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(MParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_jsx_element_name;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_element_name) {
	 		listener.enterJsx_element_name(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_element_name) {
	 		listener.exitJsx_element_name(this);
		}
	}
}


export class Jsx_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_jsx_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_identifier) {
	 		listener.enterJsx_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_identifier) {
	 		listener.exitJsx_identifier(this);
		}
	}
}


export class Jsx_attributeContext extends ParserRuleContext {
	public _name!: Jsx_identifierContext;
	public _value!: Jsx_attribute_valueContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
		return this.getToken(MParser.EQ, 0);
	}
	public jsx_attribute_value(): Jsx_attribute_valueContext {
		return this.getTypedRuleContext(Jsx_attribute_valueContext, 0) as Jsx_attribute_valueContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_jsx_attribute;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_attribute) {
	 		listener.enterJsx_attribute(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_attribute) {
	 		listener.exitJsx_attribute(this);
		}
	}
}


export class Jsx_attribute_valueContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_jsx_attribute_value;
	}
	public copyFrom(ctx: Jsx_attribute_valueContext): void {
		super.copyFrom(ctx);
	}
}
export class JsxValueContext extends Jsx_attribute_valueContext {
	public _exp!: ExpressionContext;
	constructor(parser: MParser, ctx: Jsx_attribute_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURL(): TerminalNode {
		return this.getToken(MParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(MParser.RCURL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsxValue) {
	 		listener.enterJsxValue(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsxValue) {
	 		listener.exitJsxValue(this);
		}
	}
}
export class JsxLiteralContext extends Jsx_attribute_valueContext {
	constructor(parser: MParser, ctx: Jsx_attribute_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TEXT_LITERAL(): TerminalNode {
		return this.getToken(MParser.TEXT_LITERAL, 0);
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsxLiteral) {
	 		listener.enterJsxLiteral(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsxLiteral) {
	 		listener.exitJsxLiteral(this);
		}
	}
}


export class Jsx_childrenContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_jsx_children;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_children) {
	 		listener.enterJsx_children(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_children) {
	 		listener.exitJsx_children(this);
		}
	}
}


export class Jsx_childContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_jsx_child;
	}
	public copyFrom(ctx: Jsx_childContext): void {
		super.copyFrom(ctx);
	}
}
export class JsxTextContext extends Jsx_childContext {
	public _text!: Jsx_textContext;
	constructor(parser: MParser, ctx: Jsx_childContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public jsx_text(): Jsx_textContext {
		return this.getTypedRuleContext(Jsx_textContext, 0) as Jsx_textContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsxText) {
	 		listener.enterJsxText(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsxText) {
	 		listener.exitJsxText(this);
		}
	}
}
export class JsxChildContext extends Jsx_childContext {
	public _jsx!: Jsx_elementContext;
	constructor(parser: MParser, ctx: Jsx_childContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public jsx_element(): Jsx_elementContext {
		return this.getTypedRuleContext(Jsx_elementContext, 0) as Jsx_elementContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsxChild) {
	 		listener.enterJsxChild(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsxChild) {
	 		listener.exitJsxChild(this);
		}
	}
}
export class JsxCodeContext extends Jsx_childContext {
	public _exp!: ExpressionContext;
	constructor(parser: MParser, ctx: Jsx_childContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURL(): TerminalNode {
		return this.getToken(MParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(MParser.RCURL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsxCode) {
	 		listener.enterJsxCode(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsxCode) {
	 		listener.exitJsxCode(this);
		}
	}
}


export class Jsx_textContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
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
    	return MParser.RULE_jsx_text;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_text) {
	 		listener.enterJsx_text(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_text) {
	 		listener.exitJsx_text(this);
		}
	}
}


export class Jsx_charContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LCURL(): TerminalNode {
		return this.getToken(MParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(MParser.RCURL, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(MParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(MParser.GT, 0);
	}
	public JSX_TEXT(): TerminalNode {
		return this.getToken(MParser.JSX_TEXT, 0);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_jsx_char;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterJsx_char) {
	 		listener.enterJsx_char(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitJsx_char) {
	 		listener.exitJsx_char(this);
		}
	}
}


export class Css_expressionContext extends ParserRuleContext {
	public _field!: Css_fieldContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LCURL(): TerminalNode {
		return this.getToken(MParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(MParser.RCURL, 0);
	}
	public css_field_list(): Css_fieldContext[] {
		return this.getTypedRuleContexts(Css_fieldContext) as Css_fieldContext[];
	}
	public css_field(i: number): Css_fieldContext {
		return this.getTypedRuleContext(Css_fieldContext, i) as Css_fieldContext;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_css_expression;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCss_expression) {
	 		listener.enterCss_expression(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCss_expression) {
	 		listener.exitCss_expression(this);
		}
	}
}


export class Css_fieldContext extends ParserRuleContext {
	public _name!: Css_identifierContext;
	public _values!: Css_valueContext;
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(MParser.COLON, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(MParser.SEMI, 0);
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
    	return MParser.RULE_css_field;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCss_field) {
	 		listener.enterCss_field(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCss_field) {
	 		listener.exitCss_field(this);
		}
	}
}


export class Css_identifierContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_or_keyword(): Identifier_or_keywordContext {
		return this.getTypedRuleContext(Identifier_or_keywordContext, 0) as Identifier_or_keywordContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(MParser.MINUS, 0);
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
    	return MParser.RULE_css_identifier;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCss_identifier) {
	 		listener.enterCss_identifier(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCss_identifier) {
	 		listener.exitCss_identifier(this);
		}
	}
}


export class Css_valueContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MParser.RULE_css_value;
	}
	public copyFrom(ctx: Css_valueContext): void {
		super.copyFrom(ctx);
	}
}
export class CssTextContext extends Css_valueContext {
	public _text!: Css_textContext;
	constructor(parser: MParser, ctx: Css_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public css_text(): Css_textContext {
		return this.getTypedRuleContext(Css_textContext, 0) as Css_textContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCssText) {
	 		listener.enterCssText(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCssText) {
	 		listener.exitCssText(this);
		}
	}
}
export class CssValueContext extends Css_valueContext {
	public _exp!: ExpressionContext;
	constructor(parser: MParser, ctx: Css_valueContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LCURL(): TerminalNode {
		return this.getToken(MParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(MParser.RCURL, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCssValue) {
	 		listener.enterCssValue(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCssValue) {
	 		listener.exitCssValue(this);
		}
	}
}


export class Css_textContext extends ParserRuleContext {
	constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(MParser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(MParser.SEMI, i);
	}
	public LCURL_list(): TerminalNode[] {
	    	return this.getTokens(MParser.LCURL);
	}
	public LCURL(i: number): TerminalNode {
		return this.getToken(MParser.LCURL, i);
	}
	public RCURL_list(): TerminalNode[] {
	    	return this.getTokens(MParser.RCURL);
	}
	public RCURL(i: number): TerminalNode {
		return this.getToken(MParser.RCURL, i);
	}
    public get ruleIndex(): number {
    	return MParser.RULE_css_text;
	}
	public enterRule(listener: MParserListener): void {
	    if(listener.enterCss_text) {
	 		listener.enterCss_text(this);
		}
	}
	public exitRule(listener: MParserListener): void {
	    if(listener.exitCss_text) {
	 		listener.exitCss_text(this);
		}
	}
}
