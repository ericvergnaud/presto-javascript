import { ATN, DFA, FailedPredicateException, RuleContext, ParserRuleContext, TerminalNode, Token, TokenStream } from 'antlr4';
import MParserListener from "./MParserListener.js";
import AbstractParser from './AbstractParser';
export default class MParser extends AbstractParser {
    static readonly INDENT = 1;
    static readonly DEDENT = 2;
    static readonly LF_TAB = 3;
    static readonly LF_MORE = 4;
    static readonly LF = 5;
    static readonly TAB = 6;
    static readonly WS = 7;
    static readonly CSS_DATA = 8;
    static readonly COMMENT = 9;
    static readonly JAVA = 10;
    static readonly CSHARP = 11;
    static readonly PYTHON2 = 12;
    static readonly PYTHON3 = 13;
    static readonly JAVASCRIPT = 14;
    static readonly SWIFT = 15;
    static readonly COLON = 16;
    static readonly SEMI = 17;
    static readonly COMMA = 18;
    static readonly RANGE = 19;
    static readonly DOT = 20;
    static readonly LPAR = 21;
    static readonly RPAR = 22;
    static readonly LBRAK = 23;
    static readonly RBRAK = 24;
    static readonly LCURL = 25;
    static readonly RCURL = 26;
    static readonly QMARK = 27;
    static readonly XMARK = 28;
    static readonly AMP = 29;
    static readonly AMP2 = 30;
    static readonly PIPE = 31;
    static readonly PIPE2 = 32;
    static readonly PLUS = 33;
    static readonly MINUS = 34;
    static readonly STAR = 35;
    static readonly SLASH = 36;
    static readonly BSLASH = 37;
    static readonly PERCENT = 38;
    static readonly SHARP = 39;
    static readonly GT = 40;
    static readonly GTE = 41;
    static readonly LT = 42;
    static readonly LTE = 43;
    static readonly LTGT = 44;
    static readonly LTCOLONGT = 45;
    static readonly EQ = 46;
    static readonly XEQ = 47;
    static readonly EQ2 = 48;
    static readonly TEQ = 49;
    static readonly TILDE = 50;
    static readonly LARROW = 51;
    static readonly RARROW = 52;
    static readonly EGT = 53;
    static readonly BOOLEAN = 54;
    static readonly CSS = 55;
    static readonly CHARACTER = 56;
    static readonly TEXT = 57;
    static readonly INTEGER = 58;
    static readonly DECIMAL = 59;
    static readonly DATE = 60;
    static readonly TIME = 61;
    static readonly DATETIME = 62;
    static readonly PERIOD = 63;
    static readonly VERSION = 64;
    static readonly METHOD_COLON = 65;
    static readonly CODE = 66;
    static readonly DOCUMENT = 67;
    static readonly BLOB = 68;
    static readonly IMAGE = 69;
    static readonly UUID = 70;
    static readonly DBID = 71;
    static readonly ITERATOR = 72;
    static readonly CURSOR = 73;
    static readonly HTML = 74;
    static readonly TYPE = 75;
    static readonly ABSTRACT = 76;
    static readonly ALL = 77;
    static readonly ALWAYS = 78;
    static readonly AND = 79;
    static readonly ANY = 80;
    static readonly AS = 81;
    static readonly ASC = 82;
    static readonly ATTR = 83;
    static readonly ATTRIBUTE = 84;
    static readonly ATTRIBUTES = 85;
    static readonly BINDINGS = 86;
    static readonly BREAK = 87;
    static readonly BY = 88;
    static readonly CASE = 89;
    static readonly CATCH = 90;
    static readonly CATEGORY = 91;
    static readonly CLASS = 92;
    static readonly CONTAINS = 93;
    static readonly DEF = 94;
    static readonly DEFAULT = 95;
    static readonly DEFINE = 96;
    static readonly DELETE = 97;
    static readonly DESC = 98;
    static readonly DO = 99;
    static readonly DOING = 100;
    static readonly EACH = 101;
    static readonly ELSE = 102;
    static readonly ENUM = 103;
    static readonly ENUMERATED = 104;
    static readonly EXCEPT = 105;
    static readonly EXECUTE = 106;
    static readonly EXPECTING = 107;
    static readonly EXTENDS = 108;
    static readonly FETCH = 109;
    static readonly FILTERED = 110;
    static readonly FINALLY = 111;
    static readonly FLUSH = 112;
    static readonly FOR = 113;
    static readonly FROM = 114;
    static readonly GETTER = 115;
    static readonly HAS = 116;
    static readonly IF = 117;
    static readonly IN = 118;
    static readonly INCLUDE = 119;
    static readonly INDEX = 120;
    static readonly INVOKE_COLON = 121;
    static readonly IS = 122;
    static readonly MATCHING = 123;
    static readonly METHOD = 124;
    static readonly METHODS = 125;
    static readonly MODULO = 126;
    static readonly MUTABLE = 127;
    static readonly NATIVE = 128;
    static readonly NONE = 129;
    static readonly NOT = 130;
    static readonly NOTHING = 131;
    static readonly NULL = 132;
    static readonly ON = 133;
    static readonly ONE = 134;
    static readonly OPERATOR = 135;
    static readonly OR = 136;
    static readonly ORDER = 137;
    static readonly OTHERWISE = 138;
    static readonly PASS = 139;
    static readonly RAISE = 140;
    static readonly READ = 141;
    static readonly RECEIVING = 142;
    static readonly RESOURCE = 143;
    static readonly RETURN = 144;
    static readonly RETURNING = 145;
    static readonly ROWS = 146;
    static readonly SELF = 147;
    static readonly SETTER = 148;
    static readonly SINGLETON = 149;
    static readonly SORTED = 150;
    static readonly STORABLE = 151;
    static readonly STORE = 152;
    static readonly SUPER = 153;
    static readonly SWITCH = 154;
    static readonly TEST = 155;
    static readonly THEN = 156;
    static readonly THIS = 157;
    static readonly THROW = 158;
    static readonly TO = 159;
    static readonly TRY = 160;
    static readonly VERIFYING = 161;
    static readonly WIDGET = 162;
    static readonly WITH = 163;
    static readonly WHEN = 164;
    static readonly WHERE = 165;
    static readonly WHILE = 166;
    static readonly WRITE = 167;
    static readonly BOOLEAN_LITERAL = 168;
    static readonly CHAR_LITERAL = 169;
    static readonly MIN_INTEGER = 170;
    static readonly MAX_INTEGER = 171;
    static readonly SYMBOL_IDENTIFIER = 172;
    static readonly TYPE_IDENTIFIER = 173;
    static readonly VARIABLE_IDENTIFIER = 174;
    static readonly NATIVE_IDENTIFIER = 175;
    static readonly DOLLAR_IDENTIFIER = 176;
    static readonly ARONDBASE_IDENTIFIER = 177;
    static readonly TEXT_LITERAL = 178;
    static readonly UUID_LITERAL = 179;
    static readonly VERSION_LITERAL = 180;
    static readonly INTEGER_LITERAL = 181;
    static readonly HEXA_LITERAL = 182;
    static readonly DECIMAL_LITERAL = 183;
    static readonly DATETIME_LITERAL = 184;
    static readonly TIME_LITERAL = 185;
    static readonly DATE_LITERAL = 186;
    static readonly PERIOD_LITERAL = 187;
    static readonly JSX_TEXT = 188;
    static readonly EOF: number;
    static readonly RULE_enum_category_declaration = 0;
    static readonly RULE_enum_native_declaration = 1;
    static readonly RULE_native_symbol = 2;
    static readonly RULE_category_symbol = 3;
    static readonly RULE_attribute_declaration = 4;
    static readonly RULE_index_clause = 5;
    static readonly RULE_concrete_widget_declaration = 6;
    static readonly RULE_native_widget_declaration = 7;
    static readonly RULE_concrete_category_declaration = 8;
    static readonly RULE_singleton_category_declaration = 9;
    static readonly RULE_derived_list = 10;
    static readonly RULE_operator_method_declaration = 11;
    static readonly RULE_setter_method_declaration = 12;
    static readonly RULE_native_setter_declaration = 13;
    static readonly RULE_getter_method_declaration = 14;
    static readonly RULE_native_getter_declaration = 15;
    static readonly RULE_native_category_declaration = 16;
    static readonly RULE_native_resource_declaration = 17;
    static readonly RULE_native_category_bindings = 18;
    static readonly RULE_native_category_binding_list = 19;
    static readonly RULE_abstract_global_method_declaration = 20;
    static readonly RULE_abstract_member_method_declaration = 21;
    static readonly RULE_concrete_method_declaration = 22;
    static readonly RULE_native_method_declaration = 23;
    static readonly RULE_test_method_declaration = 24;
    static readonly RULE_assertion = 25;
    static readonly RULE_typed_argument = 26;
    static readonly RULE_statement = 27;
    static readonly RULE_flush_statement = 28;
    static readonly RULE_store_statement = 29;
    static readonly RULE_method_call_expression = 30;
    static readonly RULE_method_call_statement = 31;
    static readonly RULE_with_resource_statement = 32;
    static readonly RULE_with_singleton_statement = 33;
    static readonly RULE_switch_statement = 34;
    static readonly RULE_switch_case_statement = 35;
    static readonly RULE_for_each_statement = 36;
    static readonly RULE_do_while_statement = 37;
    static readonly RULE_while_statement = 38;
    static readonly RULE_if_statement = 39;
    static readonly RULE_else_if_statement_list = 40;
    static readonly RULE_raise_statement = 41;
    static readonly RULE_try_statement = 42;
    static readonly RULE_catch_statement = 43;
    static readonly RULE_break_statement = 44;
    static readonly RULE_return_statement = 45;
    static readonly RULE_expression = 46;
    static readonly RULE_filter_expression = 47;
    static readonly RULE_type_expression = 48;
    static readonly RULE_selectable_expression = 49;
    static readonly RULE_instance_expression = 50;
    static readonly RULE_mutable_instance_expression = 51;
    static readonly RULE_method_expression = 52;
    static readonly RULE_instance_selector = 53;
    static readonly RULE_blob_expression = 54;
    static readonly RULE_document_expression = 55;
    static readonly RULE_constructor_expression = 56;
    static readonly RULE_copy_from = 57;
    static readonly RULE_argument_assignment_list = 58;
    static readonly RULE_argument_assignment = 59;
    static readonly RULE_write_statement = 60;
    static readonly RULE_filtered_list_suffix = 61;
    static readonly RULE_fetch_expression = 62;
    static readonly RULE_fetch_statement = 63;
    static readonly RULE_then = 64;
    static readonly RULE_read_statement = 65;
    static readonly RULE_sorted_expression = 66;
    static readonly RULE_assign_instance_statement = 67;
    static readonly RULE_child_instance = 68;
    static readonly RULE_assign_tuple_statement = 69;
    static readonly RULE_lfs = 70;
    static readonly RULE_lfp = 71;
    static readonly RULE_ws_plus = 72;
    static readonly RULE_indent = 73;
    static readonly RULE_dedent = 74;
    static readonly RULE_type_literal = 75;
    static readonly RULE_null_literal = 76;
    static readonly RULE_comment_statement = 77;
    static readonly RULE_repl = 78;
    static readonly RULE_declaration_list = 79;
    static readonly RULE_declarations = 80;
    static readonly RULE_declaration = 81;
    static readonly RULE_annotation_constructor = 82;
    static readonly RULE_annotation_identifier = 83;
    static readonly RULE_annotation_argument = 84;
    static readonly RULE_annotation_argument_name = 85;
    static readonly RULE_annotation_argument_value = 86;
    static readonly RULE_resource_declaration = 87;
    static readonly RULE_enum_declaration = 88;
    static readonly RULE_native_symbol_list = 89;
    static readonly RULE_category_symbol_list = 90;
    static readonly RULE_symbol_list = 91;
    static readonly RULE_attribute_constraint = 92;
    static readonly RULE_list_literal = 93;
    static readonly RULE_set_literal = 94;
    static readonly RULE_expression_list = 95;
    static readonly RULE_range_literal = 96;
    static readonly RULE_typedef = 97;
    static readonly RULE_primary_type = 98;
    static readonly RULE_native_type = 99;
    static readonly RULE_category_type = 100;
    static readonly RULE_mutable_category_type = 101;
    static readonly RULE_code_type = 102;
    static readonly RULE_category_declaration = 103;
    static readonly RULE_widget_declaration = 104;
    static readonly RULE_type_identifier_list = 105;
    static readonly RULE_method_identifier = 106;
    static readonly RULE_identifier_or_keyword = 107;
    static readonly RULE_nospace_hyphen_identifier_or_keyword = 108;
    static readonly RULE_nospace_identifier_or_keyword = 109;
    static readonly RULE_identifier = 110;
    static readonly RULE_member_identifier = 111;
    static readonly RULE_variable_identifier = 112;
    static readonly RULE_attribute_identifier = 113;
    static readonly RULE_type_identifier = 114;
    static readonly RULE_symbol_identifier = 115;
    static readonly RULE_argument_list = 116;
    static readonly RULE_argument = 117;
    static readonly RULE_operator_argument = 118;
    static readonly RULE_named_argument = 119;
    static readonly RULE_code_argument = 120;
    static readonly RULE_category_or_any_type = 121;
    static readonly RULE_any_type = 122;
    static readonly RULE_member_method_declaration_list = 123;
    static readonly RULE_member_method_declaration = 124;
    static readonly RULE_native_member_method_declaration_list = 125;
    static readonly RULE_native_member_method_declaration = 126;
    static readonly RULE_native_category_binding = 127;
    static readonly RULE_python_category_binding = 128;
    static readonly RULE_python_module = 129;
    static readonly RULE_javascript_category_binding = 130;
    static readonly RULE_javascript_module = 131;
    static readonly RULE_variable_identifier_list = 132;
    static readonly RULE_attribute_identifier_list = 133;
    static readonly RULE_method_declaration = 134;
    static readonly RULE_native_statement_list = 135;
    static readonly RULE_native_statement = 136;
    static readonly RULE_python_native_statement = 137;
    static readonly RULE_javascript_native_statement = 138;
    static readonly RULE_statement_list = 139;
    static readonly RULE_assertion_list = 140;
    static readonly RULE_switch_case_statement_list = 141;
    static readonly RULE_catch_statement_list = 142;
    static readonly RULE_literal_collection = 143;
    static readonly RULE_atomic_literal = 144;
    static readonly RULE_literal_list_literal = 145;
    static readonly RULE_this_expression = 146;
    static readonly RULE_super_expression = 147;
    static readonly RULE_parenthesis_expression = 148;
    static readonly RULE_literal_expression = 149;
    static readonly RULE_collection_literal = 150;
    static readonly RULE_tuple_literal = 151;
    static readonly RULE_dict_literal = 152;
    static readonly RULE_document_literal = 153;
    static readonly RULE_expression_tuple = 154;
    static readonly RULE_doc_entry_list = 155;
    static readonly RULE_doc_entry = 156;
    static readonly RULE_doc_key = 157;
    static readonly RULE_dict_entry_list = 158;
    static readonly RULE_dict_entry = 159;
    static readonly RULE_dict_key = 160;
    static readonly RULE_slice_arguments = 161;
    static readonly RULE_assign_variable_statement = 162;
    static readonly RULE_assignable_instance = 163;
    static readonly RULE_is_expression = 164;
    static readonly RULE_metadata = 165;
    static readonly RULE_arrow_expression = 166;
    static readonly RULE_arrow_prefix = 167;
    static readonly RULE_arrow_args = 168;
    static readonly RULE_sorted_key = 169;
    static readonly RULE_read_blob_expression = 170;
    static readonly RULE_read_all_expression = 171;
    static readonly RULE_read_one_expression = 172;
    static readonly RULE_order_by_list = 173;
    static readonly RULE_order_by = 174;
    static readonly RULE_include_list = 175;
    static readonly RULE_operator = 176;
    static readonly RULE_keyword = 177;
    static readonly RULE_new_token = 178;
    static readonly RULE_key_token = 179;
    static readonly RULE_module_token = 180;
    static readonly RULE_value_token = 181;
    static readonly RULE_symbols_token = 182;
    static readonly RULE_assign = 183;
    static readonly RULE_multiply = 184;
    static readonly RULE_divide = 185;
    static readonly RULE_idivide = 186;
    static readonly RULE_modulo = 187;
    static readonly RULE_javascript_statement = 188;
    static readonly RULE_javascript_expression = 189;
    static readonly RULE_javascript_primary_expression = 190;
    static readonly RULE_javascript_this_expression = 191;
    static readonly RULE_javascript_new_expression = 192;
    static readonly RULE_javascript_selector_expression = 193;
    static readonly RULE_javascript_method_expression = 194;
    static readonly RULE_javascript_arguments = 195;
    static readonly RULE_javascript_item_expression = 196;
    static readonly RULE_javascript_parenthesis_expression = 197;
    static readonly RULE_javascript_identifier_expression = 198;
    static readonly RULE_javascript_literal_expression = 199;
    static readonly RULE_javascript_identifier = 200;
    static readonly RULE_python_statement = 201;
    static readonly RULE_python_expression = 202;
    static readonly RULE_python_primary_expression = 203;
    static readonly RULE_python_self_expression = 204;
    static readonly RULE_python_selector_expression = 205;
    static readonly RULE_python_method_expression = 206;
    static readonly RULE_python_argument_list = 207;
    static readonly RULE_python_ordinal_argument_list = 208;
    static readonly RULE_python_named_argument_list = 209;
    static readonly RULE_python_parenthesis_expression = 210;
    static readonly RULE_python_identifier_expression = 211;
    static readonly RULE_python_literal_expression = 212;
    static readonly RULE_python_identifier = 213;
    static readonly RULE_java_statement = 214;
    static readonly RULE_java_expression = 215;
    static readonly RULE_java_primary_expression = 216;
    static readonly RULE_java_this_expression = 217;
    static readonly RULE_java_new_expression = 218;
    static readonly RULE_java_selector_expression = 219;
    static readonly RULE_java_method_expression = 220;
    static readonly RULE_java_arguments = 221;
    static readonly RULE_java_item_expression = 222;
    static readonly RULE_java_parenthesis_expression = 223;
    static readonly RULE_java_identifier_expression = 224;
    static readonly RULE_java_class_identifier_expression = 225;
    static readonly RULE_java_literal_expression = 226;
    static readonly RULE_java_identifier = 227;
    static readonly RULE_csharp_statement = 228;
    static readonly RULE_csharp_expression = 229;
    static readonly RULE_csharp_primary_expression = 230;
    static readonly RULE_csharp_this_expression = 231;
    static readonly RULE_csharp_new_expression = 232;
    static readonly RULE_csharp_selector_expression = 233;
    static readonly RULE_csharp_method_expression = 234;
    static readonly RULE_csharp_arguments = 235;
    static readonly RULE_csharp_item_expression = 236;
    static readonly RULE_csharp_parenthesis_expression = 237;
    static readonly RULE_csharp_identifier_expression = 238;
    static readonly RULE_csharp_literal_expression = 239;
    static readonly RULE_csharp_identifier = 240;
    static readonly RULE_jsx_expression = 241;
    static readonly RULE_jsx_element = 242;
    static readonly RULE_jsx_fragment = 243;
    static readonly RULE_jsx_fragment_start = 244;
    static readonly RULE_jsx_fragment_end = 245;
    static readonly RULE_jsx_self_closing = 246;
    static readonly RULE_jsx_opening = 247;
    static readonly RULE_jsx_closing = 248;
    static readonly RULE_jsx_element_name = 249;
    static readonly RULE_jsx_identifier = 250;
    static readonly RULE_jsx_attribute = 251;
    static readonly RULE_jsx_attribute_value = 252;
    static readonly RULE_jsx_children = 253;
    static readonly RULE_jsx_child = 254;
    static readonly RULE_jsx_text = 255;
    static readonly RULE_jsx_char = 256;
    static readonly RULE_css_expression = 257;
    static readonly RULE_css_field = 258;
    static readonly RULE_css_identifier = 259;
    static readonly RULE_css_value = 260;
    static readonly RULE_css_text = 261;
    static readonly literalNames: string[];
    static readonly symbolicNames: string[];
    static readonly ruleNames: string[];
    get grammarFileName(): string;
    get literalNames(): (string | null)[];
    get symbolicNames(): (string | null)[];
    get ruleNames(): string[];
    get serializedATN(): number[];
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    enum_category_declaration(): Enum_category_declarationContext;
    enum_native_declaration(): Enum_native_declarationContext;
    native_symbol(): Native_symbolContext;
    category_symbol(): Category_symbolContext;
    attribute_declaration(): Attribute_declarationContext;
    index_clause(): Index_clauseContext;
    concrete_widget_declaration(): Concrete_widget_declarationContext;
    native_widget_declaration(): Native_widget_declarationContext;
    concrete_category_declaration(): Concrete_category_declarationContext;
    singleton_category_declaration(): Singleton_category_declarationContext;
    derived_list(): Derived_listContext;
    operator_method_declaration(): Operator_method_declarationContext;
    setter_method_declaration(): Setter_method_declarationContext;
    native_setter_declaration(): Native_setter_declarationContext;
    getter_method_declaration(): Getter_method_declarationContext;
    native_getter_declaration(): Native_getter_declarationContext;
    native_category_declaration(): Native_category_declarationContext;
    native_resource_declaration(): Native_resource_declarationContext;
    native_category_bindings(): Native_category_bindingsContext;
    native_category_binding_list(): Native_category_binding_listContext;
    native_category_binding_list(_p: number): Native_category_binding_listContext;
    abstract_global_method_declaration(): Abstract_global_method_declarationContext;
    abstract_member_method_declaration(): Abstract_member_method_declarationContext;
    concrete_method_declaration(): Concrete_method_declarationContext;
    native_method_declaration(): Native_method_declarationContext;
    test_method_declaration(): Test_method_declarationContext;
    assertion(): AssertionContext;
    typed_argument(): Typed_argumentContext;
    statement(): StatementContext;
    flush_statement(): Flush_statementContext;
    store_statement(): Store_statementContext;
    method_call_expression(): Method_call_expressionContext;
    method_call_statement(): Method_call_statementContext;
    with_resource_statement(): With_resource_statementContext;
    with_singleton_statement(): With_singleton_statementContext;
    switch_statement(): Switch_statementContext;
    switch_case_statement(): Switch_case_statementContext;
    for_each_statement(): For_each_statementContext;
    do_while_statement(): Do_while_statementContext;
    while_statement(): While_statementContext;
    if_statement(): If_statementContext;
    else_if_statement_list(): Else_if_statement_listContext;
    else_if_statement_list(_p: number): Else_if_statement_listContext;
    raise_statement(): Raise_statementContext;
    try_statement(): Try_statementContext;
    catch_statement(): Catch_statementContext;
    break_statement(): Break_statementContext;
    return_statement(): Return_statementContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    filter_expression(): Filter_expressionContext;
    type_expression(): Type_expressionContext;
    selectable_expression(): Selectable_expressionContext;
    instance_expression(): Instance_expressionContext;
    instance_expression(_p: number): Instance_expressionContext;
    mutable_instance_expression(): Mutable_instance_expressionContext;
    mutable_instance_expression(_p: number): Mutable_instance_expressionContext;
    method_expression(): Method_expressionContext;
    instance_selector(): Instance_selectorContext;
    blob_expression(): Blob_expressionContext;
    document_expression(): Document_expressionContext;
    constructor_expression(): Constructor_expressionContext;
    copy_from(): Copy_fromContext;
    argument_assignment_list(): Argument_assignment_listContext;
    argument_assignment_list(_p: number): Argument_assignment_listContext;
    argument_assignment(): Argument_assignmentContext;
    write_statement(): Write_statementContext;
    filtered_list_suffix(): Filtered_list_suffixContext;
    fetch_expression(): Fetch_expressionContext;
    fetch_statement(): Fetch_statementContext;
    then(): ThenContext;
    read_statement(): Read_statementContext;
    sorted_expression(): Sorted_expressionContext;
    assign_instance_statement(): Assign_instance_statementContext;
    child_instance(): Child_instanceContext;
    assign_tuple_statement(): Assign_tuple_statementContext;
    lfs(): LfsContext;
    lfp(): LfpContext;
    ws_plus(): Ws_plusContext;
    indent(): IndentContext;
    dedent(): DedentContext;
    type_literal(): Type_literalContext;
    null_literal(): Null_literalContext;
    comment_statement(): Comment_statementContext;
    repl(): ReplContext;
    declaration_list(): Declaration_listContext;
    declarations(): DeclarationsContext;
    declaration(): DeclarationContext;
    annotation_constructor(): Annotation_constructorContext;
    annotation_identifier(): Annotation_identifierContext;
    annotation_argument(): Annotation_argumentContext;
    annotation_argument_name(): Annotation_argument_nameContext;
    annotation_argument_value(): Annotation_argument_valueContext;
    resource_declaration(): Resource_declarationContext;
    enum_declaration(): Enum_declarationContext;
    native_symbol_list(): Native_symbol_listContext;
    category_symbol_list(): Category_symbol_listContext;
    symbol_list(): Symbol_listContext;
    attribute_constraint(): Attribute_constraintContext;
    list_literal(): List_literalContext;
    set_literal(): Set_literalContext;
    expression_list(): Expression_listContext;
    range_literal(): Range_literalContext;
    typedef(): TypedefContext;
    typedef(_p: number): TypedefContext;
    primary_type(): Primary_typeContext;
    native_type(): Native_typeContext;
    category_type(): Category_typeContext;
    mutable_category_type(): Mutable_category_typeContext;
    code_type(): Code_typeContext;
    category_declaration(): Category_declarationContext;
    widget_declaration(): Widget_declarationContext;
    type_identifier_list(): Type_identifier_listContext;
    method_identifier(): Method_identifierContext;
    identifier_or_keyword(): Identifier_or_keywordContext;
    nospace_hyphen_identifier_or_keyword(): Nospace_hyphen_identifier_or_keywordContext;
    nospace_identifier_or_keyword(): Nospace_identifier_or_keywordContext;
    identifier(): IdentifierContext;
    member_identifier(): Member_identifierContext;
    variable_identifier(): Variable_identifierContext;
    attribute_identifier(): Attribute_identifierContext;
    type_identifier(): Type_identifierContext;
    symbol_identifier(): Symbol_identifierContext;
    argument_list(): Argument_listContext;
    argument(): ArgumentContext;
    operator_argument(): Operator_argumentContext;
    named_argument(): Named_argumentContext;
    code_argument(): Code_argumentContext;
    category_or_any_type(): Category_or_any_typeContext;
    any_type(): Any_typeContext;
    any_type(_p: number): Any_typeContext;
    member_method_declaration_list(): Member_method_declaration_listContext;
    member_method_declaration(): Member_method_declarationContext;
    native_member_method_declaration_list(): Native_member_method_declaration_listContext;
    native_member_method_declaration(): Native_member_method_declarationContext;
    native_category_binding(): Native_category_bindingContext;
    python_category_binding(): Python_category_bindingContext;
    python_module(): Python_moduleContext;
    javascript_category_binding(): Javascript_category_bindingContext;
    javascript_module(): Javascript_moduleContext;
    variable_identifier_list(): Variable_identifier_listContext;
    attribute_identifier_list(): Attribute_identifier_listContext;
    method_declaration(): Method_declarationContext;
    native_statement_list(): Native_statement_listContext;
    native_statement(): Native_statementContext;
    python_native_statement(): Python_native_statementContext;
    javascript_native_statement(): Javascript_native_statementContext;
    statement_list(): Statement_listContext;
    assertion_list(): Assertion_listContext;
    switch_case_statement_list(): Switch_case_statement_listContext;
    catch_statement_list(): Catch_statement_listContext;
    literal_collection(): Literal_collectionContext;
    atomic_literal(): Atomic_literalContext;
    literal_list_literal(): Literal_list_literalContext;
    this_expression(): This_expressionContext;
    super_expression(): Super_expressionContext;
    parenthesis_expression(): Parenthesis_expressionContext;
    literal_expression(): Literal_expressionContext;
    collection_literal(): Collection_literalContext;
    tuple_literal(): Tuple_literalContext;
    dict_literal(): Dict_literalContext;
    document_literal(): Document_literalContext;
    expression_tuple(): Expression_tupleContext;
    doc_entry_list(): Doc_entry_listContext;
    doc_entry(): Doc_entryContext;
    doc_key(): Doc_keyContext;
    dict_entry_list(): Dict_entry_listContext;
    dict_entry(): Dict_entryContext;
    dict_key(): Dict_keyContext;
    slice_arguments(): Slice_argumentsContext;
    assign_variable_statement(): Assign_variable_statementContext;
    assignable_instance(): Assignable_instanceContext;
    assignable_instance(_p: number): Assignable_instanceContext;
    is_expression(): Is_expressionContext;
    metadata(): MetadataContext;
    arrow_expression(): Arrow_expressionContext;
    arrow_prefix(): Arrow_prefixContext;
    arrow_args(): Arrow_argsContext;
    sorted_key(): Sorted_keyContext;
    read_blob_expression(): Read_blob_expressionContext;
    read_all_expression(): Read_all_expressionContext;
    read_one_expression(): Read_one_expressionContext;
    order_by_list(): Order_by_listContext;
    order_by(): Order_byContext;
    include_list(): Include_listContext;
    operator(): OperatorContext;
    keyword(): KeywordContext;
    new_token(): New_tokenContext;
    key_token(): Key_tokenContext;
    module_token(): Module_tokenContext;
    value_token(): Value_tokenContext;
    symbols_token(): Symbols_tokenContext;
    assign(): AssignContext;
    multiply(): MultiplyContext;
    divide(): DivideContext;
    idivide(): IdivideContext;
    modulo(): ModuloContext;
    javascript_statement(): Javascript_statementContext;
    javascript_expression(): Javascript_expressionContext;
    javascript_expression(_p: number): Javascript_expressionContext;
    javascript_primary_expression(): Javascript_primary_expressionContext;
    javascript_this_expression(): Javascript_this_expressionContext;
    javascript_new_expression(): Javascript_new_expressionContext;
    javascript_selector_expression(): Javascript_selector_expressionContext;
    javascript_method_expression(): Javascript_method_expressionContext;
    javascript_arguments(): Javascript_argumentsContext;
    javascript_arguments(_p: number): Javascript_argumentsContext;
    javascript_item_expression(): Javascript_item_expressionContext;
    javascript_parenthesis_expression(): Javascript_parenthesis_expressionContext;
    javascript_identifier_expression(): Javascript_identifier_expressionContext;
    javascript_literal_expression(): Javascript_literal_expressionContext;
    javascript_identifier(): Javascript_identifierContext;
    python_statement(): Python_statementContext;
    python_expression(): Python_expressionContext;
    python_expression(_p: number): Python_expressionContext;
    python_primary_expression(): Python_primary_expressionContext;
    python_self_expression(): Python_self_expressionContext;
    python_selector_expression(): Python_selector_expressionContext;
    python_method_expression(): Python_method_expressionContext;
    python_argument_list(): Python_argument_listContext;
    python_ordinal_argument_list(): Python_ordinal_argument_listContext;
    python_ordinal_argument_list(_p: number): Python_ordinal_argument_listContext;
    python_named_argument_list(): Python_named_argument_listContext;
    python_named_argument_list(_p: number): Python_named_argument_listContext;
    python_parenthesis_expression(): Python_parenthesis_expressionContext;
    python_identifier_expression(): Python_identifier_expressionContext;
    python_identifier_expression(_p: number): Python_identifier_expressionContext;
    python_literal_expression(): Python_literal_expressionContext;
    python_identifier(): Python_identifierContext;
    java_statement(): Java_statementContext;
    java_expression(): Java_expressionContext;
    java_expression(_p: number): Java_expressionContext;
    java_primary_expression(): Java_primary_expressionContext;
    java_this_expression(): Java_this_expressionContext;
    java_new_expression(): Java_new_expressionContext;
    java_selector_expression(): Java_selector_expressionContext;
    java_method_expression(): Java_method_expressionContext;
    java_arguments(): Java_argumentsContext;
    java_arguments(_p: number): Java_argumentsContext;
    java_item_expression(): Java_item_expressionContext;
    java_parenthesis_expression(): Java_parenthesis_expressionContext;
    java_identifier_expression(): Java_identifier_expressionContext;
    java_identifier_expression(_p: number): Java_identifier_expressionContext;
    java_class_identifier_expression(): Java_class_identifier_expressionContext;
    java_class_identifier_expression(_p: number): Java_class_identifier_expressionContext;
    java_literal_expression(): Java_literal_expressionContext;
    java_identifier(): Java_identifierContext;
    csharp_statement(): Csharp_statementContext;
    csharp_expression(): Csharp_expressionContext;
    csharp_expression(_p: number): Csharp_expressionContext;
    csharp_primary_expression(): Csharp_primary_expressionContext;
    csharp_this_expression(): Csharp_this_expressionContext;
    csharp_new_expression(): Csharp_new_expressionContext;
    csharp_selector_expression(): Csharp_selector_expressionContext;
    csharp_method_expression(): Csharp_method_expressionContext;
    csharp_arguments(): Csharp_argumentsContext;
    csharp_arguments(_p: number): Csharp_argumentsContext;
    csharp_item_expression(): Csharp_item_expressionContext;
    csharp_parenthesis_expression(): Csharp_parenthesis_expressionContext;
    csharp_identifier_expression(): Csharp_identifier_expressionContext;
    csharp_identifier_expression(_p: number): Csharp_identifier_expressionContext;
    csharp_literal_expression(): Csharp_literal_expressionContext;
    csharp_identifier(): Csharp_identifierContext;
    jsx_expression(): Jsx_expressionContext;
    jsx_element(): Jsx_elementContext;
    jsx_fragment(): Jsx_fragmentContext;
    jsx_fragment_start(): Jsx_fragment_startContext;
    jsx_fragment_end(): Jsx_fragment_endContext;
    jsx_self_closing(): Jsx_self_closingContext;
    jsx_opening(): Jsx_openingContext;
    jsx_closing(): Jsx_closingContext;
    jsx_element_name(): Jsx_element_nameContext;
    jsx_identifier(): Jsx_identifierContext;
    jsx_attribute(): Jsx_attributeContext;
    jsx_attribute_value(): Jsx_attribute_valueContext;
    jsx_children(): Jsx_childrenContext;
    jsx_child(): Jsx_childContext;
    jsx_text(): Jsx_textContext;
    jsx_char(): Jsx_charContext;
    css_expression(): Css_expressionContext;
    css_field(): Css_fieldContext;
    css_identifier(): Css_identifierContext;
    css_identifier(_p: number): Css_identifierContext;
    css_value(): Css_valueContext;
    css_text(): Css_textContext;
    sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private native_category_binding_list_sempred;
    private else_if_statement_list_sempred;
    private expression_sempred;
    private instance_expression_sempred;
    private mutable_instance_expression_sempred;
    private copy_from_sempred;
    private argument_assignment_list_sempred;
    private child_instance_sempred;
    private typedef_sempred;
    private nospace_hyphen_identifier_or_keyword_sempred;
    private nospace_identifier_or_keyword_sempred;
    private any_type_sempred;
    private assignable_instance_sempred;
    private is_expression_sempred;
    private metadata_sempred;
    private new_token_sempred;
    private key_token_sempred;
    private module_token_sempred;
    private value_token_sempred;
    private symbols_token_sempred;
    private javascript_expression_sempred;
    private javascript_arguments_sempred;
    private python_expression_sempred;
    private python_ordinal_argument_list_sempred;
    private python_named_argument_list_sempred;
    private python_identifier_expression_sempred;
    private java_expression_sempred;
    private java_arguments_sempred;
    private java_identifier_expression_sempred;
    private java_class_identifier_expression_sempred;
    private csharp_expression_sempred;
    private csharp_arguments_sempred;
    private csharp_identifier_expression_sempred;
    private css_identifier_sempred;
    static readonly _serializedATN: number[];
    private static __ATN;
    static get _ATN(): ATN;
    static DecisionsToDFA: DFA[];
}
export declare class Enum_category_declarationContext extends ParserRuleContext {
    _name: Type_identifierContext;
    _derived: Type_identifierContext;
    _attrs: Attribute_identifier_listContext;
    _symbols: Category_symbol_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    ENUM(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    type_identifier_list(): Type_identifierContext[];
    type_identifier(i: number): Type_identifierContext;
    category_symbol_list(): Category_symbol_listContext;
    attribute_identifier_list(): Attribute_identifier_listContext;
    COMMA(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Enum_native_declarationContext extends ParserRuleContext {
    _name: Type_identifierContext;
    _typ: Native_typeContext;
    _symbols: Native_symbol_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    ENUM(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    type_identifier(): Type_identifierContext;
    native_type(): Native_typeContext;
    native_symbol_list(): Native_symbol_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_symbolContext extends ParserRuleContext {
    _name: Symbol_identifierContext;
    _exp: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    EQ(): TerminalNode;
    symbol_identifier(): Symbol_identifierContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Category_symbolContext extends ParserRuleContext {
    _name: Symbol_identifierContext;
    _args: Argument_assignment_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    symbol_identifier(): Symbol_identifierContext;
    argument_assignment_list(): Argument_assignment_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Attribute_declarationContext extends ParserRuleContext {
    _name: Attribute_identifierContext;
    _typ: TypedefContext;
    _match: Attribute_constraintContext;
    _indices: Index_clauseContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    ATTR(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    attribute_identifier(): Attribute_identifierContext;
    typedef(): TypedefContext;
    STORABLE(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    PASS(): TerminalNode;
    attribute_constraint(): Attribute_constraintContext;
    index_clause(): Index_clauseContext;
    lfp(): LfpContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Index_clauseContext extends ParserRuleContext {
    _indices: Variable_identifier_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    INDEX(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    variable_identifier_list(): Variable_identifier_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Concrete_widget_declarationContext extends ParserRuleContext {
    _name: Type_identifierContext;
    _derived: Type_identifierContext;
    _methods: Member_method_declaration_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    WIDGET(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    type_identifier_list(): Type_identifierContext[];
    type_identifier(i: number): Type_identifierContext;
    PASS(): TerminalNode;
    member_method_declaration_list(): Member_method_declaration_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_widget_declarationContext extends ParserRuleContext {
    _name: Type_identifierContext;
    _bindings: Native_category_bindingsContext;
    _methods: Native_member_method_declaration_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    NATIVE(): TerminalNode;
    WIDGET(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    lfp(): LfpContext;
    dedent(): DedentContext;
    type_identifier(): Type_identifierContext;
    native_category_bindings(): Native_category_bindingsContext;
    native_member_method_declaration_list(): Native_member_method_declaration_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Concrete_category_declarationContext extends ParserRuleContext {
    _name: Type_identifierContext;
    _derived: Derived_listContext;
    _attrs: Attribute_identifier_listContext;
    _methods: Member_method_declaration_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    CLASS(): TerminalNode;
    CATEGORY(): TerminalNode;
    type_identifier(): Type_identifierContext;
    STORABLE(): TerminalNode;
    COMMA(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    derived_list(): Derived_listContext;
    attribute_identifier_list(): Attribute_identifier_listContext;
    PASS(): TerminalNode;
    member_method_declaration_list(): Member_method_declaration_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Singleton_category_declarationContext extends ParserRuleContext {
    _name: Type_identifierContext;
    _attrs: Attribute_identifier_listContext;
    _methods: Member_method_declaration_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    SINGLETON(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    type_identifier(): Type_identifierContext;
    attribute_identifier_list(): Attribute_identifier_listContext;
    PASS(): TerminalNode;
    member_method_declaration_list(): Member_method_declaration_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Derived_listContext extends ParserRuleContext {
    _items: Type_identifier_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    type_identifier_list(): Type_identifier_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Operator_method_declarationContext extends ParserRuleContext {
    _op: OperatorContext;
    _arg: Operator_argumentContext;
    _typ: TypedefContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DEF(): TerminalNode;
    OPERATOR(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    operator(): OperatorContext;
    operator_argument(): Operator_argumentContext;
    statement_list(): Statement_listContext;
    RARROW(): TerminalNode;
    typedef(): TypedefContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Setter_method_declarationContext extends ParserRuleContext {
    _name: Variable_identifierContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DEF(): TerminalNode;
    SETTER(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    variable_identifier(): Variable_identifierContext;
    statement_list(): Statement_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_setter_declarationContext extends ParserRuleContext {
    _name: Variable_identifierContext;
    _stmts: Native_statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DEF(): TerminalNode;
    SETTER(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    variable_identifier(): Variable_identifierContext;
    native_statement_list(): Native_statement_listContext;
    NATIVE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Getter_method_declarationContext extends ParserRuleContext {
    _name: Variable_identifierContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DEF(): TerminalNode;
    GETTER(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    variable_identifier(): Variable_identifierContext;
    statement_list(): Statement_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_getter_declarationContext extends ParserRuleContext {
    _name: Variable_identifierContext;
    _stmts: Native_statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DEF(): TerminalNode;
    GETTER(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    variable_identifier(): Variable_identifierContext;
    native_statement_list(): Native_statement_listContext;
    NATIVE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_category_declarationContext extends ParserRuleContext {
    _name: Type_identifierContext;
    _attrs: Attribute_identifier_listContext;
    _bindings: Native_category_bindingsContext;
    _methods: Native_member_method_declaration_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    NATIVE(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    CLASS(): TerminalNode;
    CATEGORY(): TerminalNode;
    type_identifier(): Type_identifierContext;
    native_category_bindings(): Native_category_bindingsContext;
    STORABLE(): TerminalNode;
    lfp(): LfpContext;
    attribute_identifier_list(): Attribute_identifier_listContext;
    native_member_method_declaration_list(): Native_member_method_declaration_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_resource_declarationContext extends ParserRuleContext {
    _name: Type_identifierContext;
    _attrs: Attribute_identifier_listContext;
    _bindings: Native_category_bindingsContext;
    _methods: Native_member_method_declaration_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    NATIVE(): TerminalNode;
    RESOURCE(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    type_identifier(): Type_identifierContext;
    native_category_bindings(): Native_category_bindingsContext;
    STORABLE(): TerminalNode;
    lfp(): LfpContext;
    attribute_identifier_list(): Attribute_identifier_listContext;
    native_member_method_declaration_list(): Native_member_method_declaration_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_category_bindingsContext extends ParserRuleContext {
    _items: Native_category_binding_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DEF(): TerminalNode;
    BINDINGS(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    CLASS(): TerminalNode;
    CATEGORY(): TerminalNode;
    native_category_binding_list(): Native_category_binding_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_category_binding_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Native_category_binding_listContext): void;
}
export declare class NativeCategoryBindingListItemContext extends Native_category_binding_listContext {
    _items: Native_category_binding_listContext;
    _item: Native_category_bindingContext;
    constructor(parser: MParser, ctx: Native_category_binding_listContext);
    lfp(): LfpContext;
    native_category_binding_list(): Native_category_binding_listContext;
    native_category_binding(): Native_category_bindingContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class NativeCategoryBindingListContext extends Native_category_binding_listContext {
    _item: Native_category_bindingContext;
    constructor(parser: MParser, ctx: Native_category_binding_listContext);
    native_category_binding(): Native_category_bindingContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Abstract_global_method_declarationContext extends ParserRuleContext {
    _name: Type_identifierContext;
    _args: Argument_listContext;
    _typ: TypedefContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    ABSTRACT(): TerminalNode;
    DEF(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    type_identifier(): Type_identifierContext;
    RARROW(): TerminalNode;
    argument_list(): Argument_listContext;
    typedef(): TypedefContext;
    MUTABLE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Abstract_member_method_declarationContext extends ParserRuleContext {
    _name: Method_identifierContext;
    _args: Argument_listContext;
    _typ: TypedefContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    ABSTRACT(): TerminalNode;
    DEF(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    method_identifier(): Method_identifierContext;
    RARROW(): TerminalNode;
    argument_list(): Argument_listContext;
    typedef(): TypedefContext;
    MUTABLE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Concrete_method_declarationContext extends ParserRuleContext {
    _name: Method_identifierContext;
    _args: Argument_listContext;
    _typ: TypedefContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DEF(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    method_identifier(): Method_identifierContext;
    PASS(): TerminalNode;
    RARROW(): TerminalNode;
    statement_list(): Statement_listContext;
    argument_list(): Argument_listContext;
    typedef(): TypedefContext;
    MUTABLE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_method_declarationContext extends ParserRuleContext {
    _name: Method_identifierContext;
    _args: Argument_listContext;
    _typ: Category_or_any_typeContext;
    _stmts: Native_statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DEF(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    method_identifier(): Method_identifierContext;
    native_statement_list(): Native_statement_listContext;
    NATIVE(): TerminalNode;
    RARROW(): TerminalNode;
    argument_list(): Argument_listContext;
    category_or_any_type(): Category_or_any_typeContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Test_method_declarationContext extends ParserRuleContext {
    _name: Token;
    _stmts: Statement_listContext;
    _exps: Assertion_listContext;
    _error: Symbol_identifierContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DEF(): TerminalNode;
    TEST(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    COLON_list(): TerminalNode[];
    COLON(i: number): TerminalNode;
    indent_list(): IndentContext[];
    indent(i: number): IndentContext;
    dedent_list(): DedentContext[];
    dedent(i: number): DedentContext;
    lfp(): LfpContext;
    VERIFYING(): TerminalNode;
    TEXT_LITERAL(): TerminalNode;
    statement_list(): Statement_listContext;
    assertion_list(): Assertion_listContext;
    symbol_identifier(): Symbol_identifierContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class AssertionContext extends ParserRuleContext {
    _exp: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Typed_argumentContext extends ParserRuleContext {
    _name: Variable_identifierContext;
    _typ: Category_or_any_typeContext;
    _attrs: Attribute_identifier_listContext;
    _value: Literal_expressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    COLON(): TerminalNode;
    variable_identifier(): Variable_identifierContext;
    category_or_any_type(): Category_or_any_typeContext;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    EQ(): TerminalNode;
    attribute_identifier_list(): Attribute_identifier_listContext;
    literal_expression(): Literal_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class StatementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: StatementContext): void;
}
export declare class CommentStatementContext extends StatementContext {
    _decl: Comment_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    comment_statement(): Comment_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class StoreStatementContext extends StatementContext {
    _stmt: Store_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    store_statement(): Store_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class WithSingletonStatementContext extends StatementContext {
    _stmt: With_singleton_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    with_singleton_statement(): With_singleton_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class WriteStatementContext extends StatementContext {
    _stmt: Write_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    write_statement(): Write_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class WhileStatementContext extends StatementContext {
    _stmt: While_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    while_statement(): While_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class WithResourceStatementContext extends StatementContext {
    _stmt: With_resource_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    with_resource_statement(): With_resource_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class RaiseStatementContext extends StatementContext {
    _stmt: Raise_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    raise_statement(): Raise_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class FetchStatementContext extends StatementContext {
    _stmt: Fetch_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    fetch_statement(): Fetch_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class BreakStatementContext extends StatementContext {
    _stmt: Break_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    break_statement(): Break_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class AssignInstanceStatementContext extends StatementContext {
    _stmt: Assign_instance_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    assign_instance_statement(): Assign_instance_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class IfStatementContext extends StatementContext {
    _stmt: If_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    if_statement(): If_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class SwitchStatementContext extends StatementContext {
    _stmt: Switch_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    switch_statement(): Switch_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class TryStatementContext extends StatementContext {
    _stmt: Try_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    try_statement(): Try_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ReadStatementContext extends StatementContext {
    _stmt: Read_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    read_statement(): Read_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MethodCallStatementContext extends StatementContext {
    _stmt: Method_call_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    method_call_statement(): Method_call_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ReturnStatementContext extends StatementContext {
    _stmt: Return_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    return_statement(): Return_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class AssignTupleStatementContext extends StatementContext {
    _stmt: Assign_tuple_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    assign_tuple_statement(): Assign_tuple_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ClosureStatementContext extends StatementContext {
    _decl: Concrete_method_declarationContext;
    constructor(parser: MParser, ctx: StatementContext);
    concrete_method_declaration(): Concrete_method_declarationContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class FlushStatementContext extends StatementContext {
    _stmt: Flush_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    flush_statement(): Flush_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DoWhileStatementContext extends StatementContext {
    _stmt: Do_while_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    do_while_statement(): Do_while_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ForEachStatementContext extends StatementContext {
    _stmt: For_each_statementContext;
    constructor(parser: MParser, ctx: StatementContext);
    for_each_statement(): For_each_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Flush_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    FLUSH(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Store_statementContext extends ParserRuleContext {
    _to_del: Expression_listContext;
    _to_add: Expression_listContext;
    _with_meta: ExpressionContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DELETE(): TerminalNode;
    LPAR_list(): TerminalNode[];
    LPAR(i: number): TerminalNode;
    RPAR_list(): TerminalNode[];
    RPAR(i: number): TerminalNode;
    STORE(): TerminalNode;
    expression_list_list(): Expression_listContext[];
    expression_list(i: number): Expression_listContext;
    WITH(): TerminalNode;
    metadata(): MetadataContext;
    THEN(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    expression(): ExpressionContext;
    statement_list(): Statement_listContext;
    AND(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Method_call_expressionContext extends ParserRuleContext {
    _name: Method_identifierContext;
    _args: Argument_assignment_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    method_identifier(): Method_identifierContext;
    argument_assignment_list(): Argument_assignment_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Method_call_statementContext extends ParserRuleContext {
    _parent: Instance_expressionContext;
    _method: Method_call_expressionContext;
    _name: Variable_identifierContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    method_call_expression(): Method_call_expressionContext;
    DOT(): TerminalNode;
    THEN(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    instance_expression(): Instance_expressionContext;
    statement_list(): Statement_listContext;
    WITH(): TerminalNode;
    variable_identifier(): Variable_identifierContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class With_resource_statementContext extends ParserRuleContext {
    _stmt: Assign_variable_statementContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    WITH(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    assign_variable_statement(): Assign_variable_statementContext;
    statement_list(): Statement_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class With_singleton_statementContext extends ParserRuleContext {
    _typ: Type_identifierContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    WITH(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    type_identifier(): Type_identifierContext;
    statement_list(): Statement_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Switch_statementContext extends ParserRuleContext {
    _exp: ExpressionContext;
    _cases: Switch_case_statement_listContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    SWITCH(): TerminalNode;
    ON(): TerminalNode;
    COLON_list(): TerminalNode[];
    COLON(i: number): TerminalNode;
    indent_list(): IndentContext[];
    indent(i: number): IndentContext;
    dedent_list(): DedentContext[];
    dedent(i: number): DedentContext;
    expression(): ExpressionContext;
    switch_case_statement_list(): Switch_case_statement_listContext;
    lfp(): LfpContext;
    OTHERWISE(): TerminalNode;
    statement_list(): Statement_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Switch_case_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Switch_case_statementContext): void;
}
export declare class AtomicSwitchCaseContext extends Switch_case_statementContext {
    _exp: Atomic_literalContext;
    _stmts: Statement_listContext;
    constructor(parser: MParser, ctx: Switch_case_statementContext);
    WHEN(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    atomic_literal(): Atomic_literalContext;
    statement_list(): Statement_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CollectionSwitchCaseContext extends Switch_case_statementContext {
    _exp: Literal_collectionContext;
    _stmts: Statement_listContext;
    constructor(parser: MParser, ctx: Switch_case_statementContext);
    WHEN(): TerminalNode;
    IN(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    literal_collection(): Literal_collectionContext;
    statement_list(): Statement_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class For_each_statementContext extends ParserRuleContext {
    _name1: Variable_identifierContext;
    _name2: Variable_identifierContext;
    _source: ExpressionContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    FOR(): TerminalNode;
    IN(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    variable_identifier_list(): Variable_identifierContext[];
    variable_identifier(i: number): Variable_identifierContext;
    expression(): ExpressionContext;
    statement_list(): Statement_listContext;
    COMMA(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Do_while_statementContext extends ParserRuleContext {
    _stmts: Statement_listContext;
    _exp: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DO(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    lfp(): LfpContext;
    WHILE(): TerminalNode;
    statement_list(): Statement_listContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class While_statementContext extends ParserRuleContext {
    _exp: ExpressionContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    WHILE(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    expression(): ExpressionContext;
    statement_list(): Statement_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class If_statementContext extends ParserRuleContext {
    _exp: ExpressionContext;
    _stmts: Statement_listContext;
    _elseIfs: Else_if_statement_listContext;
    _elseStmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    IF(): TerminalNode;
    COLON_list(): TerminalNode[];
    COLON(i: number): TerminalNode;
    indent_list(): IndentContext[];
    indent(i: number): IndentContext;
    dedent_list(): DedentContext[];
    dedent(i: number): DedentContext;
    expression(): ExpressionContext;
    statement_list_list(): Statement_listContext[];
    statement_list(i: number): Statement_listContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    ELSE(): TerminalNode;
    else_if_statement_list(): Else_if_statement_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Else_if_statement_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Else_if_statement_listContext): void;
}
export declare class ElseIfStatementListContext extends Else_if_statement_listContext {
    _exp: ExpressionContext;
    _stmts: Statement_listContext;
    constructor(parser: MParser, ctx: Else_if_statement_listContext);
    ELSE(): TerminalNode;
    IF(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    expression(): ExpressionContext;
    statement_list(): Statement_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ElseIfStatementListItemContext extends Else_if_statement_listContext {
    _items: Else_if_statement_listContext;
    _exp: ExpressionContext;
    _stmts: Statement_listContext;
    constructor(parser: MParser, ctx: Else_if_statement_listContext);
    lfp(): LfpContext;
    ELSE(): TerminalNode;
    IF(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    else_if_statement_list(): Else_if_statement_listContext;
    expression(): ExpressionContext;
    statement_list(): Statement_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Raise_statementContext extends ParserRuleContext {
    _exp: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    RAISE(): TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Try_statementContext extends ParserRuleContext {
    _name: Variable_identifierContext;
    _stmts: Statement_listContext;
    _handlers: Catch_statement_listContext;
    _anyStmts: Statement_listContext;
    _finalStmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    TRY(): TerminalNode;
    COLON_list(): TerminalNode[];
    COLON(i: number): TerminalNode;
    indent_list(): IndentContext[];
    indent(i: number): IndentContext;
    dedent_list(): DedentContext[];
    dedent(i: number): DedentContext;
    lfs_list(): LfsContext[];
    lfs(i: number): LfsContext;
    variable_identifier(): Variable_identifierContext;
    statement_list_list(): Statement_listContext[];
    statement_list(i: number): Statement_listContext;
    EXCEPT(): TerminalNode;
    FINALLY(): TerminalNode;
    catch_statement_list(): Catch_statement_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Catch_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Catch_statementContext): void;
}
export declare class CatchAtomicStatementContext extends Catch_statementContext {
    _name: Symbol_identifierContext;
    _stmts: Statement_listContext;
    constructor(parser: MParser, ctx: Catch_statementContext);
    EXCEPT(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    lfs(): LfsContext;
    symbol_identifier(): Symbol_identifierContext;
    statement_list(): Statement_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CatchCollectionStatementContext extends Catch_statementContext {
    _exp: Symbol_listContext;
    _stmts: Statement_listContext;
    constructor(parser: MParser, ctx: Catch_statementContext);
    EXCEPT(): TerminalNode;
    IN(): TerminalNode;
    LBRAK(): TerminalNode;
    RBRAK(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    lfs(): LfsContext;
    symbol_list(): Symbol_listContext;
    statement_list(): Statement_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Break_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    BREAK(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Return_statementContext extends ParserRuleContext {
    _exp: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    RETURN(): TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ExpressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionContext): void;
}
export declare class IntDivideExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    idivide(): IdivideContext;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class HasAnyExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: Filter_expressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    HAS(): TerminalNode;
    ANY(): TerminalNode;
    expression(): ExpressionContext;
    filter_expression(): Filter_expressionContext;
    NOT(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class HasExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    HAS(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    NOT(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class TernaryExpressionContext extends ExpressionContext {
    _ifTrue: ExpressionContext;
    _test: ExpressionContext;
    _ifFalse: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    IF(): TerminalNode;
    ELSE(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class InExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    IN(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    NOT(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JsxExpressionContext extends ExpressionContext {
    _exp: Jsx_expressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    jsx_expression(): Jsx_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class NotExpressionContext extends ExpressionContext {
    _exp: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    NOT(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CompareExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _op: Token;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    LT(): TerminalNode;
    LTE(): TerminalNode;
    GT(): TerminalNode;
    GTE(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class OrExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    OR(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CodeExpressionContext extends ExpressionContext {
    _exp: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    CODE(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class AndExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    AND(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ArrowExpressionContext extends ExpressionContext {
    _exp: Arrow_expressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    arrow_expression(): Arrow_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ContainsExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    CONTAINS(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    NOT(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class FilteredListExpressionContext extends ExpressionContext {
    _src: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    filtered_list_suffix(): Filtered_list_suffixContext;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class TypeExpressionContext extends ExpressionContext {
    _exp: Type_expressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    type_expression(): Type_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MultiplyExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    multiply(): MultiplyContext;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ExecuteExpressionContext extends ExpressionContext {
    _name: Variable_identifierContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    EXECUTE(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    variable_identifier(): Variable_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class IteratorExpressionContext extends ExpressionContext {
    _exp: ExpressionContext;
    _name: Variable_identifierContext;
    _source: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    FOR(): TerminalNode;
    EACH(): TerminalNode;
    IN(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    variable_identifier(): Variable_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DivideExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    divide(): DivideContext;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class IsExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: Is_expressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    IS(): TerminalNode;
    expression(): ExpressionContext;
    is_expression(): Is_expressionContext;
    NOT(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MinusExpressionContext extends ExpressionContext {
    _exp: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    MINUS(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class AddExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _op: Token;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    PLUS(): TerminalNode;
    MINUS(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class HasAllExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: Filter_expressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    HAS(): TerminalNode;
    ALL(): TerminalNode;
    expression(): ExpressionContext;
    filter_expression(): Filter_expressionContext;
    NOT(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class InstanceExpressionContext extends ExpressionContext {
    _exp: Instance_expressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    instance_expression(): Instance_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MutableInstanceExpressionContext extends ExpressionContext {
    _exp: Mutable_instance_expressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    mutable_instance_expression(): Mutable_instance_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CssExpressionContext extends ExpressionContext {
    _exp: Css_expressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    css_expression(): Css_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CastExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: Category_or_any_typeContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    AS(): TerminalNode;
    expression(): ExpressionContext;
    category_or_any_type(): Category_or_any_typeContext;
    MUTABLE(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ModuloExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    modulo(): ModuloContext;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class EqualsExpressionContext extends ExpressionContext {
    _left: ExpressionContext;
    _op: Token;
    _right: ExpressionContext;
    constructor(parser: MParser, ctx: ExpressionContext);
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    EQ2(): TerminalNode;
    XEQ(): TerminalNode;
    TEQ(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Filter_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Filter_expressionContext): void;
}
export declare class ExplicitFilterExpressionContext extends Filter_expressionContext {
    constructor(parser: MParser, ctx: Filter_expressionContext);
    variable_identifier(): Variable_identifierContext;
    WHERE(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class OtherFilterExpressionContext extends Filter_expressionContext {
    constructor(parser: MParser, ctx: Filter_expressionContext);
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ArrowFilterExpressionContext extends Filter_expressionContext {
    constructor(parser: MParser, ctx: Filter_expressionContext);
    WHERE(): TerminalNode;
    arrow_expression(): Arrow_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Type_expressionContext extends ParserRuleContext {
    _name: Type_identifierContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    type_identifier(): Type_identifierContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Selectable_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Selectable_expressionContext): void;
}
export declare class ThisExpressionContext extends Selectable_expressionContext {
    _exp: This_expressionContext;
    constructor(parser: MParser, ctx: Selectable_expressionContext);
    this_expression(): This_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ParenthesisExpressionContext extends Selectable_expressionContext {
    _exp: Parenthesis_expressionContext;
    constructor(parser: MParser, ctx: Selectable_expressionContext);
    parenthesis_expression(): Parenthesis_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class LiteralExpressionContext extends Selectable_expressionContext {
    _exp: Literal_expressionContext;
    constructor(parser: MParser, ctx: Selectable_expressionContext);
    literal_expression(): Literal_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MethodExpressionContext extends Selectable_expressionContext {
    _exp: Method_expressionContext;
    constructor(parser: MParser, ctx: Selectable_expressionContext);
    method_expression(): Method_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class SuperExpressionContext extends Selectable_expressionContext {
    _exp: Super_expressionContext;
    constructor(parser: MParser, ctx: Selectable_expressionContext);
    super_expression(): Super_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class IdentifierExpressionContext extends Selectable_expressionContext {
    _exp: IdentifierContext;
    constructor(parser: MParser, ctx: Selectable_expressionContext);
    identifier(): IdentifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Instance_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Instance_expressionContext): void;
}
export declare class SelectorExpressionContext extends Instance_expressionContext {
    _parent: Instance_expressionContext;
    _selector: Instance_selectorContext;
    constructor(parser: MParser, ctx: Instance_expressionContext);
    instance_expression(): Instance_expressionContext;
    instance_selector(): Instance_selectorContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class SelectableExpressionContext extends Instance_expressionContext {
    _parent: Selectable_expressionContext;
    constructor(parser: MParser, ctx: Instance_expressionContext);
    selectable_expression(): Selectable_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Mutable_instance_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Mutable_instance_expressionContext): void;
}
export declare class MutableSelectableExpressionContext extends Mutable_instance_expressionContext {
    _exp: IdentifierContext;
    constructor(parser: MParser, ctx: Mutable_instance_expressionContext);
    MUTABLE(): TerminalNode;
    identifier(): IdentifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MutableSelectorExpressionContext extends Mutable_instance_expressionContext {
    _parent: Mutable_instance_expressionContext;
    _selector: Instance_selectorContext;
    constructor(parser: MParser, ctx: Mutable_instance_expressionContext);
    mutable_instance_expression(): Mutable_instance_expressionContext;
    instance_selector(): Instance_selectorContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Method_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    blob_expression(): Blob_expressionContext;
    document_expression(): Document_expressionContext;
    fetch_expression(): Fetch_expressionContext;
    read_blob_expression(): Read_blob_expressionContext;
    read_all_expression(): Read_all_expressionContext;
    read_one_expression(): Read_one_expressionContext;
    sorted_expression(): Sorted_expressionContext;
    method_call_expression(): Method_call_expressionContext;
    constructor_expression(): Constructor_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Instance_selectorContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Instance_selectorContext): void;
}
export declare class SliceSelectorContext extends Instance_selectorContext {
    _xslice: Slice_argumentsContext;
    constructor(parser: MParser, ctx: Instance_selectorContext);
    LBRAK(): TerminalNode;
    RBRAK(): TerminalNode;
    slice_arguments(): Slice_argumentsContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MethodSelectorContext extends Instance_selectorContext {
    _method: Method_call_expressionContext;
    constructor(parser: MParser, ctx: Instance_selectorContext);
    DOT(): TerminalNode;
    method_call_expression(): Method_call_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MemberSelectorContext extends Instance_selectorContext {
    _name: Member_identifierContext;
    constructor(parser: MParser, ctx: Instance_selectorContext);
    DOT(): TerminalNode;
    member_identifier(): Member_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ItemSelectorContext extends Instance_selectorContext {
    _exp: ExpressionContext;
    constructor(parser: MParser, ctx: Instance_selectorContext);
    LBRAK(): TerminalNode;
    RBRAK(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Blob_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    BLOB(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Document_expressionContext extends ParserRuleContext {
    _exp: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DOCUMENT(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    FROM(): TerminalNode;
    EQ(): TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Constructor_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Constructor_expressionContext): void;
}
export declare class ConstructorFromContext extends Constructor_expressionContext {
    _typ: Mutable_category_typeContext;
    _copyExp: Copy_fromContext;
    _args: Argument_assignment_listContext;
    constructor(parser: MParser, ctx: Constructor_expressionContext);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    mutable_category_type(): Mutable_category_typeContext;
    copy_from(): Copy_fromContext;
    COMMA(): TerminalNode;
    argument_assignment_list(): Argument_assignment_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ConstructorNoFromContext extends Constructor_expressionContext {
    _typ: Mutable_category_typeContext;
    _args: Argument_assignment_listContext;
    constructor(parser: MParser, ctx: Constructor_expressionContext);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    mutable_category_type(): Mutable_category_typeContext;
    argument_assignment_list(): Argument_assignment_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Copy_fromContext extends ParserRuleContext {
    _exp: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    FROM(): TerminalNode;
    assign(): AssignContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Argument_assignment_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Argument_assignment_listContext): void;
}
export declare class ExpressionAssignmentListContext extends Argument_assignment_listContext {
    _exp: ExpressionContext;
    constructor(parser: MParser, ctx: Argument_assignment_listContext);
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ArgumentAssignmentListContext extends Argument_assignment_listContext {
    _item: Argument_assignmentContext;
    constructor(parser: MParser, ctx: Argument_assignment_listContext);
    argument_assignment(): Argument_assignmentContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ArgumentAssignmentListItemContext extends Argument_assignment_listContext {
    _items: Argument_assignment_listContext;
    _item: Argument_assignmentContext;
    constructor(parser: MParser, ctx: Argument_assignment_listContext);
    COMMA(): TerminalNode;
    argument_assignment_list(): Argument_assignment_listContext;
    argument_assignment(): Argument_assignmentContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Argument_assignmentContext extends ParserRuleContext {
    _name: Variable_identifierContext;
    _exp: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    variable_identifier(): Variable_identifierContext;
    assign(): AssignContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Write_statementContext extends ParserRuleContext {
    _what: ExpressionContext;
    _target: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    WRITE(): TerminalNode;
    TO(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    then(): ThenContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Filtered_list_suffixContext extends ParserRuleContext {
    _name: Variable_identifierContext;
    _predicate: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    FILTERED(): TerminalNode;
    WHERE(): TerminalNode;
    expression(): ExpressionContext;
    WITH(): TerminalNode;
    variable_identifier(): Variable_identifierContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Fetch_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Fetch_expressionContext): void;
}
export declare class FetchOneContext extends Fetch_expressionContext {
    _typ: Mutable_category_typeContext;
    _predicate: ExpressionContext;
    _include: Include_listContext;
    constructor(parser: MParser, ctx: Fetch_expressionContext);
    FETCH(): TerminalNode;
    ONE(): TerminalNode;
    WHERE(): TerminalNode;
    expression(): ExpressionContext;
    INCLUDE(): TerminalNode;
    mutable_category_type(): Mutable_category_typeContext;
    include_list(): Include_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class FetchManyContext extends Fetch_expressionContext {
    _xstart: ExpressionContext;
    _xstop: ExpressionContext;
    _typ: Mutable_category_typeContext;
    _predicate: ExpressionContext;
    _include: Include_listContext;
    _orderby: Order_by_listContext;
    constructor(parser: MParser, ctx: Fetch_expressionContext);
    FETCH(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    ALL(): TerminalNode;
    ROWS(): TerminalNode;
    TO(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    WHERE(): TerminalNode;
    INCLUDE(): TerminalNode;
    ORDER(): TerminalNode;
    BY(): TerminalNode;
    mutable_category_type(): Mutable_category_typeContext;
    include_list(): Include_listContext;
    order_by_list(): Order_by_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Fetch_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Fetch_statementContext): void;
}
export declare class FetchManyAsyncContext extends Fetch_statementContext {
    _xstart: ExpressionContext;
    _xstop: ExpressionContext;
    _typ: Mutable_category_typeContext;
    _predicate: ExpressionContext;
    _include: Include_listContext;
    _orderby: Order_by_listContext;
    constructor(parser: MParser, ctx: Fetch_statementContext);
    FETCH(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    then(): ThenContext;
    ALL(): TerminalNode;
    ROWS(): TerminalNode;
    TO(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    WHERE(): TerminalNode;
    INCLUDE(): TerminalNode;
    ORDER(): TerminalNode;
    BY(): TerminalNode;
    mutable_category_type(): Mutable_category_typeContext;
    include_list(): Include_listContext;
    order_by_list(): Order_by_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class FetchOneAsyncContext extends Fetch_statementContext {
    _typ: Mutable_category_typeContext;
    _predicate: ExpressionContext;
    _include: Include_listContext;
    constructor(parser: MParser, ctx: Fetch_statementContext);
    FETCH(): TerminalNode;
    ONE(): TerminalNode;
    WHERE(): TerminalNode;
    then(): ThenContext;
    expression(): ExpressionContext;
    INCLUDE(): TerminalNode;
    mutable_category_type(): Mutable_category_typeContext;
    include_list(): Include_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ThenContext extends ParserRuleContext {
    _name: Variable_identifierContext;
    _stmts: Statement_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    THEN(): TerminalNode;
    WITH(): TerminalNode;
    COLON(): TerminalNode;
    indent(): IndentContext;
    dedent(): DedentContext;
    variable_identifier(): Variable_identifierContext;
    statement_list(): Statement_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Read_statementContext extends ParserRuleContext {
    _source: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    READ(): TerminalNode;
    ALL(): TerminalNode;
    FROM(): TerminalNode;
    then(): ThenContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Sorted_expressionContext extends ParserRuleContext {
    _source: Instance_expressionContext;
    _key: Sorted_keyContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    SORTED(): TerminalNode;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    instance_expression(): Instance_expressionContext;
    DESC(): TerminalNode;
    COMMA(): TerminalNode;
    key_token(): Key_tokenContext;
    EQ(): TerminalNode;
    sorted_key(): Sorted_keyContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Assign_instance_statementContext extends ParserRuleContext {
    _inst: Assignable_instanceContext;
    _exp: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    assign(): AssignContext;
    assignable_instance(): Assignable_instanceContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Child_instanceContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Child_instanceContext): void;
}
export declare class MemberInstanceContext extends Child_instanceContext {
    _name: Variable_identifierContext;
    constructor(parser: MParser, ctx: Child_instanceContext);
    DOT(): TerminalNode;
    variable_identifier(): Variable_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ItemInstanceContext extends Child_instanceContext {
    _exp: ExpressionContext;
    constructor(parser: MParser, ctx: Child_instanceContext);
    LBRAK(): TerminalNode;
    RBRAK(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Assign_tuple_statementContext extends ParserRuleContext {
    _items: Variable_identifier_listContext;
    _exp: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    assign(): AssignContext;
    variable_identifier_list(): Variable_identifier_listContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class LfsContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LF_list(): TerminalNode[];
    LF(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class LfpContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LF_list(): TerminalNode[];
    LF(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Ws_plusContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LF_list(): TerminalNode[];
    LF(i: number): TerminalNode;
    TAB_list(): TerminalNode[];
    TAB(i: number): TerminalNode;
    WS_list(): TerminalNode[];
    WS(i: number): TerminalNode;
    INDENT_list(): TerminalNode[];
    INDENT(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class IndentContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    INDENT(): TerminalNode;
    LF_list(): TerminalNode[];
    LF(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DedentContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    DEDENT(): TerminalNode;
    LF_list(): TerminalNode[];
    LF(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Type_literalContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    category_or_any_type(): Category_or_any_typeContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Null_literalContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    NONE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Comment_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    COMMENT(): TerminalNode;
    CSS_DATA(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ReplContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    declaration(): DeclarationContext;
    statement(): StatementContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Declaration_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Declaration_listContext): void;
}
export declare class FullDeclarationListContext extends Declaration_listContext {
    constructor(parser: MParser, ctx: Declaration_listContext);
    lfs_list(): LfsContext[];
    lfs(i: number): LfsContext;
    EOF(): TerminalNode;
    declarations(): DeclarationsContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DeclarationsContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    declaration_list(): DeclarationContext[];
    declaration(i: number): DeclarationContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DeclarationContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    attribute_declaration(): Attribute_declarationContext;
    category_declaration(): Category_declarationContext;
    resource_declaration(): Resource_declarationContext;
    enum_declaration(): Enum_declarationContext;
    widget_declaration(): Widget_declarationContext;
    method_declaration(): Method_declarationContext;
    comment_statement_list(): Comment_statementContext[];
    comment_statement(i: number): Comment_statementContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    annotation_constructor_list(): Annotation_constructorContext[];
    annotation_constructor(i: number): Annotation_constructorContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Annotation_constructorContext extends ParserRuleContext {
    _name: Annotation_identifierContext;
    _exp: Annotation_argument_valueContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    annotation_identifier(): Annotation_identifierContext;
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    annotation_argument_value(): Annotation_argument_valueContext;
    annotation_argument_list(): Annotation_argumentContext[];
    annotation_argument(i: number): Annotation_argumentContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Annotation_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    ARONDBASE_IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Annotation_argumentContext extends ParserRuleContext {
    _name: Annotation_argument_nameContext;
    _exp: Annotation_argument_valueContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    EQ(): TerminalNode;
    annotation_argument_name(): Annotation_argument_nameContext;
    annotation_argument_value(): Annotation_argument_valueContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Annotation_argument_nameContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    GETTER(): TerminalNode;
    SETTER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Annotation_argument_valueContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Annotation_argument_valueContext): void;
}
export declare class AnnotationLiteralValueContext extends Annotation_argument_valueContext {
    _exp: Literal_expressionContext;
    constructor(parser: MParser, ctx: Annotation_argument_valueContext);
    literal_expression(): Literal_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class AnnotationTypeValueContext extends Annotation_argument_valueContext {
    _typ: Primary_typeContext;
    constructor(parser: MParser, ctx: Annotation_argument_valueContext);
    primary_type(): Primary_typeContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Resource_declarationContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    native_resource_declaration(): Native_resource_declarationContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Enum_declarationContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    enum_category_declaration(): Enum_category_declarationContext;
    enum_native_declaration(): Enum_native_declarationContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_symbol_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    native_symbol_list(): Native_symbolContext[];
    native_symbol(i: number): Native_symbolContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Category_symbol_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    category_symbol_list(): Category_symbolContext[];
    category_symbol(i: number): Category_symbolContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Symbol_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    symbol_identifier_list(): Symbol_identifierContext[];
    symbol_identifier(i: number): Symbol_identifierContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Attribute_constraintContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Attribute_constraintContext): void;
}
export declare class MatchingSetContext extends Attribute_constraintContext {
    _source: Set_literalContext;
    constructor(parser: MParser, ctx: Attribute_constraintContext);
    IN(): TerminalNode;
    set_literal(): Set_literalContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MatchingPatternContext extends Attribute_constraintContext {
    _text: Token;
    constructor(parser: MParser, ctx: Attribute_constraintContext);
    MATCHING(): TerminalNode;
    TEXT_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MatchingListContext extends Attribute_constraintContext {
    _source: List_literalContext;
    constructor(parser: MParser, ctx: Attribute_constraintContext);
    IN(): TerminalNode;
    list_literal(): List_literalContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MatchingRangeContext extends Attribute_constraintContext {
    _source: Range_literalContext;
    constructor(parser: MParser, ctx: Attribute_constraintContext);
    IN(): TerminalNode;
    range_literal(): Range_literalContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MatchingExpressionContext extends Attribute_constraintContext {
    _exp: ExpressionContext;
    constructor(parser: MParser, ctx: Attribute_constraintContext);
    MATCHING(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class List_literalContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LBRAK(): TerminalNode;
    RBRAK(): TerminalNode;
    MUTABLE(): TerminalNode;
    expression_list(): Expression_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Set_literalContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LT(): TerminalNode;
    GT(): TerminalNode;
    MUTABLE(): TerminalNode;
    expression_list(): Expression_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Expression_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Range_literalContext extends ParserRuleContext {
    _low: ExpressionContext;
    _high: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LBRAK(): TerminalNode;
    RANGE(): TerminalNode;
    RBRAK(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class TypedefContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: TypedefContext): void;
}
export declare class IteratorTypeContext extends TypedefContext {
    _i: TypedefContext;
    constructor(parser: MParser, ctx: TypedefContext);
    ITERATOR(): TerminalNode;
    LT(): TerminalNode;
    GT(): TerminalNode;
    typedef(): TypedefContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class SetTypeContext extends TypedefContext {
    _s: TypedefContext;
    constructor(parser: MParser, ctx: TypedefContext);
    LTGT(): TerminalNode;
    typedef(): TypedefContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ListTypeContext extends TypedefContext {
    _l: TypedefContext;
    constructor(parser: MParser, ctx: TypedefContext);
    LBRAK(): TerminalNode;
    RBRAK(): TerminalNode;
    typedef(): TypedefContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DictTypeContext extends TypedefContext {
    _d: TypedefContext;
    constructor(parser: MParser, ctx: TypedefContext);
    LTCOLONGT(): TerminalNode;
    typedef(): TypedefContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CursorTypeContext extends TypedefContext {
    _c: TypedefContext;
    constructor(parser: MParser, ctx: TypedefContext);
    CURSOR(): TerminalNode;
    LT(): TerminalNode;
    GT(): TerminalNode;
    typedef(): TypedefContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class TypeTypeContext extends TypedefContext {
    _t: TypedefContext;
    constructor(parser: MParser, ctx: TypedefContext);
    TYPE(): TerminalNode;
    LT(): TerminalNode;
    GT(): TerminalNode;
    typedef(): TypedefContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PrimaryTypeContext extends TypedefContext {
    _p: Primary_typeContext;
    constructor(parser: MParser, ctx: TypedefContext);
    primary_type(): Primary_typeContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Primary_typeContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Primary_typeContext): void;
}
export declare class NativeTypeContext extends Primary_typeContext {
    _n: Native_typeContext;
    constructor(parser: MParser, ctx: Primary_typeContext);
    native_type(): Native_typeContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CategoryTypeContext extends Primary_typeContext {
    _c: Category_typeContext;
    constructor(parser: MParser, ctx: Primary_typeContext);
    category_type(): Category_typeContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_typeContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Native_typeContext): void;
}
export declare class PeriodTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    PERIOD(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class HtmlTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    HTML(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CssTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    CSS(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class BooleanTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    BOOLEAN(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DocumentTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    DOCUMENT(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CharacterTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    CHARACTER(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class VersionTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    VERSION(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class TextTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    TEXT(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ImageTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    IMAGE(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class TimeTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    TIME(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class IntegerTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    INTEGER(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DateTimeTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    DATETIME(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class BlobTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    BLOB(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class UUIDTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    UUID(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DecimalTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    DECIMAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CodeTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    CODE(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DateTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    DATE(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DbIdTypeContext extends Native_typeContext {
    constructor(parser: MParser, ctx: Native_typeContext);
    DBID(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Category_typeContext extends ParserRuleContext {
    _t1: Token;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    TYPE_IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Mutable_category_typeContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    category_type(): Category_typeContext;
    MUTABLE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Code_typeContext extends ParserRuleContext {
    _t1: Token;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    CODE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Category_declarationContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Category_declarationContext): void;
}
export declare class ConcreteCategoryDeclarationContext extends Category_declarationContext {
    _decl: Concrete_category_declarationContext;
    constructor(parser: MParser, ctx: Category_declarationContext);
    concrete_category_declaration(): Concrete_category_declarationContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class NativeCategoryDeclarationContext extends Category_declarationContext {
    _decl: Native_category_declarationContext;
    constructor(parser: MParser, ctx: Category_declarationContext);
    native_category_declaration(): Native_category_declarationContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class SingletonCategoryDeclarationContext extends Category_declarationContext {
    _decl: Singleton_category_declarationContext;
    constructor(parser: MParser, ctx: Category_declarationContext);
    singleton_category_declaration(): Singleton_category_declarationContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Widget_declarationContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Widget_declarationContext): void;
}
export declare class ConcreteWidgetDeclarationContext extends Widget_declarationContext {
    _decl: Concrete_widget_declarationContext;
    constructor(parser: MParser, ctx: Widget_declarationContext);
    concrete_widget_declaration(): Concrete_widget_declarationContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class NativeWidgetDeclarationContext extends Widget_declarationContext {
    _decl: Native_widget_declarationContext;
    constructor(parser: MParser, ctx: Widget_declarationContext);
    native_widget_declaration(): Native_widget_declarationContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Type_identifier_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    type_identifier_list(): Type_identifierContext[];
    type_identifier(i: number): Type_identifierContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Method_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    variable_identifier(): Variable_identifierContext;
    type_identifier(): Type_identifierContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Identifier_or_keywordContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    identifier(): IdentifierContext;
    keyword(): KeywordContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Nospace_hyphen_identifier_or_keywordContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    MINUS(): TerminalNode;
    nospace_identifier_or_keyword(): Nospace_identifier_or_keywordContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Nospace_identifier_or_keywordContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    identifier_or_keyword(): Identifier_or_keywordContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class IdentifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: IdentifierContext): void;
}
export declare class TypeIdentifierContext extends IdentifierContext {
    constructor(parser: MParser, ctx: IdentifierContext);
    type_identifier(): Type_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class SymbolIdentifierContext extends IdentifierContext {
    constructor(parser: MParser, ctx: IdentifierContext);
    symbol_identifier(): Symbol_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class VariableIdentifierContext extends IdentifierContext {
    constructor(parser: MParser, ctx: IdentifierContext);
    variable_identifier(): Variable_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Member_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    CATEGORY(): TerminalNode;
    MUTABLE(): TerminalNode;
    STORABLE(): TerminalNode;
    RESOURCE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Variable_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    CATEGORY(): TerminalNode;
    RESOURCE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Attribute_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    STORABLE(): TerminalNode;
    RESOURCE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Type_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    TYPE_IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Symbol_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    SYMBOL_IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Argument_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    argument_list(): ArgumentContext[];
    argument(i: number): ArgumentContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ArgumentContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: ArgumentContext): void;
}
export declare class OperatorArgumentContext extends ArgumentContext {
    _arg: Operator_argumentContext;
    constructor(parser: MParser, ctx: ArgumentContext);
    operator_argument(): Operator_argumentContext;
    MUTABLE(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CodeArgumentContext extends ArgumentContext {
    _arg: Code_argumentContext;
    constructor(parser: MParser, ctx: ArgumentContext);
    code_argument(): Code_argumentContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Operator_argumentContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    named_argument(): Named_argumentContext;
    typed_argument(): Typed_argumentContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Named_argumentContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    variable_identifier(): Variable_identifierContext;
    EQ(): TerminalNode;
    literal_expression(): Literal_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Code_argumentContext extends ParserRuleContext {
    _name: Variable_identifierContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    code_type(): Code_typeContext;
    variable_identifier(): Variable_identifierContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Category_or_any_typeContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    typedef(): TypedefContext;
    any_type(): Any_typeContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Any_typeContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Any_typeContext): void;
}
export declare class AnyListTypeContext extends Any_typeContext {
    constructor(parser: MParser, ctx: Any_typeContext);
    any_type(): Any_typeContext;
    LBRAK(): TerminalNode;
    RBRAK(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class AnyTypeContext extends Any_typeContext {
    constructor(parser: MParser, ctx: Any_typeContext);
    ANY(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class AnyDictTypeContext extends Any_typeContext {
    constructor(parser: MParser, ctx: Any_typeContext);
    any_type(): Any_typeContext;
    LCURL(): TerminalNode;
    RCURL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Member_method_declaration_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    member_method_declaration_list(): Member_method_declarationContext[];
    member_method_declaration(i: number): Member_method_declarationContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Member_method_declarationContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    setter_method_declaration(): Setter_method_declarationContext;
    getter_method_declaration(): Getter_method_declarationContext;
    concrete_method_declaration(): Concrete_method_declarationContext;
    abstract_member_method_declaration(): Abstract_member_method_declarationContext;
    operator_method_declaration(): Operator_method_declarationContext;
    comment_statement_list(): Comment_statementContext[];
    comment_statement(i: number): Comment_statementContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    annotation_constructor_list(): Annotation_constructorContext[];
    annotation_constructor(i: number): Annotation_constructorContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_member_method_declaration_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    native_member_method_declaration_list(): Native_member_method_declarationContext[];
    native_member_method_declaration(i: number): Native_member_method_declarationContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_member_method_declarationContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    native_getter_declaration(): Native_getter_declarationContext;
    native_setter_declaration(): Native_setter_declarationContext;
    native_method_declaration(): Native_method_declarationContext;
    comment_statement_list(): Comment_statementContext[];
    comment_statement(i: number): Comment_statementContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    annotation_constructor_list(): Annotation_constructorContext[];
    annotation_constructor(i: number): Annotation_constructorContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_category_bindingContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Native_category_bindingContext): void;
}
export declare class Python2CategoryBindingContext extends Native_category_bindingContext {
    _binding: Python_category_bindingContext;
    constructor(parser: MParser, ctx: Native_category_bindingContext);
    PYTHON2(): TerminalNode;
    python_category_binding(): Python_category_bindingContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python3CategoryBindingContext extends Native_category_bindingContext {
    _binding: Python_category_bindingContext;
    constructor(parser: MParser, ctx: Native_category_bindingContext);
    PYTHON3(): TerminalNode;
    python_category_binding(): Python_category_bindingContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaCategoryBindingContext extends Native_category_bindingContext {
    _binding: Java_class_identifier_expressionContext;
    constructor(parser: MParser, ctx: Native_category_bindingContext);
    JAVA(): TerminalNode;
    java_class_identifier_expression(): Java_class_identifier_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CSharpCategoryBindingContext extends Native_category_bindingContext {
    _binding: Csharp_identifier_expressionContext;
    constructor(parser: MParser, ctx: Native_category_bindingContext);
    CSHARP(): TerminalNode;
    csharp_identifier_expression(): Csharp_identifier_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavascriptCategoryBindingContext extends Native_category_bindingContext {
    _binding: Javascript_category_bindingContext;
    constructor(parser: MParser, ctx: Native_category_bindingContext);
    JAVASCRIPT(): TerminalNode;
    javascript_category_binding(): Javascript_category_bindingContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_category_bindingContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    identifier(): IdentifierContext;
    python_module(): Python_moduleContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_moduleContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    FROM(): TerminalNode;
    module_token(): Module_tokenContext;
    COLON(): TerminalNode;
    python_identifier_list(): Python_identifierContext[];
    python_identifier(i: number): Python_identifierContext;
    DOT_list(): TerminalNode[];
    DOT(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_category_bindingContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    javascript_identifier_list(): Javascript_identifierContext[];
    javascript_identifier(i: number): Javascript_identifierContext;
    DOT_list(): TerminalNode[];
    DOT(i: number): TerminalNode;
    javascript_module(): Javascript_moduleContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_moduleContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    FROM(): TerminalNode;
    module_token(): Module_tokenContext;
    COLON(): TerminalNode;
    javascript_identifier_list(): Javascript_identifierContext[];
    javascript_identifier(i: number): Javascript_identifierContext;
    SLASH_list(): TerminalNode[];
    SLASH(i: number): TerminalNode;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Variable_identifier_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    variable_identifier_list(): Variable_identifierContext[];
    variable_identifier(i: number): Variable_identifierContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Attribute_identifier_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    attribute_identifier_list(): Attribute_identifierContext[];
    attribute_identifier(i: number): Attribute_identifierContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Method_declarationContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    abstract_global_method_declaration(): Abstract_global_method_declarationContext;
    concrete_method_declaration(): Concrete_method_declarationContext;
    native_method_declaration(): Native_method_declarationContext;
    test_method_declaration(): Test_method_declarationContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_statement_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    native_statement_list(): Native_statementContext[];
    native_statement(i: number): Native_statementContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Native_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Native_statementContext): void;
}
export declare class CSharpNativeStatementContext extends Native_statementContext {
    constructor(parser: MParser, ctx: Native_statementContext);
    CSHARP(): TerminalNode;
    csharp_statement(): Csharp_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaNativeStatementContext extends Native_statementContext {
    constructor(parser: MParser, ctx: Native_statementContext);
    JAVA(): TerminalNode;
    java_statement(): Java_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavascriptNativeStatementContext extends Native_statementContext {
    constructor(parser: MParser, ctx: Native_statementContext);
    JAVASCRIPT(): TerminalNode;
    javascript_native_statement(): Javascript_native_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python2NativeStatementContext extends Native_statementContext {
    constructor(parser: MParser, ctx: Native_statementContext);
    PYTHON2(): TerminalNode;
    python_native_statement(): Python_native_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python3NativeStatementContext extends Native_statementContext {
    constructor(parser: MParser, ctx: Native_statementContext);
    PYTHON3(): TerminalNode;
    python_native_statement(): Python_native_statementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_native_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    python_statement(): Python_statementContext;
    SEMI(): TerminalNode;
    python_module(): Python_moduleContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_native_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    javascript_statement(): Javascript_statementContext;
    SEMI(): TerminalNode;
    javascript_module(): Javascript_moduleContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Statement_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    statement_list(): StatementContext[];
    statement(i: number): StatementContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Assertion_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    assertion_list(): AssertionContext[];
    assertion(i: number): AssertionContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Switch_case_statement_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    switch_case_statement_list(): Switch_case_statementContext[];
    switch_case_statement(i: number): Switch_case_statementContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Catch_statement_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    catch_statement_list(): Catch_statementContext[];
    catch_statement(i: number): Catch_statementContext;
    lfp_list(): LfpContext[];
    lfp(i: number): LfpContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Literal_collectionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Literal_collectionContext): void;
}
export declare class LiteralListLiteralContext extends Literal_collectionContext {
    constructor(parser: MParser, ctx: Literal_collectionContext);
    LBRAK(): TerminalNode;
    literal_list_literal(): Literal_list_literalContext;
    RBRAK(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class LiteralRangeLiteralContext extends Literal_collectionContext {
    _low: Atomic_literalContext;
    _high: Atomic_literalContext;
    constructor(parser: MParser, ctx: Literal_collectionContext);
    LBRAK(): TerminalNode;
    RANGE(): TerminalNode;
    RBRAK(): TerminalNode;
    atomic_literal_list(): Atomic_literalContext[];
    atomic_literal(i: number): Atomic_literalContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class LiteralSetLiteralContext extends Literal_collectionContext {
    constructor(parser: MParser, ctx: Literal_collectionContext);
    LT(): TerminalNode;
    literal_list_literal(): Literal_list_literalContext;
    GT(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Atomic_literalContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Atomic_literalContext): void;
}
export declare class MinIntegerLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    MIN_INTEGER(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DateLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    DATE_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class SymbolLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    symbol_identifier(): Symbol_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class BooleanLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    BOOLEAN_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class VersionLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    VERSION_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class HexadecimalLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    HEXA_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class UUIDLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    UUID_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MaxIntegerLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    MAX_INTEGER(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class TypeLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    type_literal(): Type_literalContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DateTimeLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    DATETIME_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PeriodLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    PERIOD_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DecimalLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    DECIMAL_LITERAL(): TerminalNode;
    MINUS(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class TextLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    TEXT_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class NullLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    null_literal(): Null_literalContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class IntegerLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    INTEGER_LITERAL(): TerminalNode;
    MINUS(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class TimeLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    TIME_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CharacterLiteralContext extends Atomic_literalContext {
    constructor(parser: MParser, ctx: Atomic_literalContext);
    CHAR_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Literal_list_literalContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    atomic_literal_list(): Atomic_literalContext[];
    atomic_literal(i: number): Atomic_literalContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class This_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    SELF(): TerminalNode;
    THIS(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Super_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    SUPER(): TerminalNode;
    category_type(): Category_typeContext;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Parenthesis_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    expression(): ExpressionContext;
    RPAR(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Literal_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    atomic_literal(): Atomic_literalContext;
    collection_literal(): Collection_literalContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Collection_literalContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    range_literal(): Range_literalContext;
    list_literal(): List_literalContext;
    set_literal(): Set_literalContext;
    dict_literal(): Dict_literalContext;
    document_literal(): Document_literalContext;
    tuple_literal(): Tuple_literalContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Tuple_literalContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    MUTABLE(): TerminalNode;
    expression_tuple(): Expression_tupleContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Dict_literalContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LTCOLONGT(): TerminalNode;
    MUTABLE(): TerminalNode;
    LT(): TerminalNode;
    dict_entry_list(): Dict_entry_listContext;
    GT(): TerminalNode;
    COLON(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Document_literalContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LCURL(): TerminalNode;
    RCURL(): TerminalNode;
    doc_entry_list(): Doc_entry_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Expression_tupleContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Doc_entry_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    doc_entry_list(): Doc_entryContext[];
    doc_entry(i: number): Doc_entryContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Doc_entryContext extends ParserRuleContext {
    _key: Doc_keyContext;
    _value: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    COLON(): TerminalNode;
    doc_key(): Doc_keyContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Doc_keyContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Doc_keyContext): void;
}
export declare class DocKeyIdentifierContext extends Doc_keyContext {
    _name: Identifier_or_keywordContext;
    constructor(parser: MParser, ctx: Doc_keyContext);
    identifier_or_keyword(): Identifier_or_keywordContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DocKeyTextContext extends Doc_keyContext {
    _name: Token;
    constructor(parser: MParser, ctx: Doc_keyContext);
    TEXT_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Dict_entry_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    dict_entry_list(): Dict_entryContext[];
    dict_entry(i: number): Dict_entryContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Dict_entryContext extends ParserRuleContext {
    _key: Dict_keyContext;
    _value: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    COLON(): TerminalNode;
    dict_key(): Dict_keyContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Dict_keyContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Dict_keyContext): void;
}
export declare class DictKeyIdentifierContext extends Dict_keyContext {
    _name: Identifier_or_keywordContext;
    constructor(parser: MParser, ctx: Dict_keyContext);
    identifier_or_keyword(): Identifier_or_keywordContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DictKeyTextContext extends Dict_keyContext {
    _name: Token;
    constructor(parser: MParser, ctx: Dict_keyContext);
    TEXT_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Slice_argumentsContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Slice_argumentsContext): void;
}
export declare class SliceFirstAndLastContext extends Slice_argumentsContext {
    _first: ExpressionContext;
    _last: ExpressionContext;
    constructor(parser: MParser, ctx: Slice_argumentsContext);
    COLON(): TerminalNode;
    expression_list(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class SliceLastOnlyContext extends Slice_argumentsContext {
    _last: ExpressionContext;
    constructor(parser: MParser, ctx: Slice_argumentsContext);
    COLON(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class SliceFirstOnlyContext extends Slice_argumentsContext {
    _first: ExpressionContext;
    constructor(parser: MParser, ctx: Slice_argumentsContext);
    COLON(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Assign_variable_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    variable_identifier(): Variable_identifierContext;
    assign(): AssignContext;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Assignable_instanceContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Assignable_instanceContext): void;
}
export declare class ChildInstanceContext extends Assignable_instanceContext {
    constructor(parser: MParser, ctx: Assignable_instanceContext);
    assignable_instance(): Assignable_instanceContext;
    child_instance(): Child_instanceContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class RootInstanceContext extends Assignable_instanceContext {
    constructor(parser: MParser, ctx: Assignable_instanceContext);
    variable_identifier(): Variable_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Is_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Is_expressionContext): void;
}
export declare class IsATypeExpressionContext extends Is_expressionContext {
    constructor(parser: MParser, ctx: Is_expressionContext);
    VARIABLE_IDENTIFIER(): TerminalNode;
    category_or_any_type(): Category_or_any_typeContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class IsOtherExpressionContext extends Is_expressionContext {
    constructor(parser: MParser, ctx: Is_expressionContext);
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MetadataContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Arrow_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Arrow_expressionContext): void;
}
export declare class ArrowExpressionBodyContext extends Arrow_expressionContext {
    constructor(parser: MParser, ctx: Arrow_expressionContext);
    arrow_prefix(): Arrow_prefixContext;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ArrowStatementsBodyContext extends Arrow_expressionContext {
    constructor(parser: MParser, ctx: Arrow_expressionContext);
    arrow_prefix(): Arrow_prefixContext;
    LCURL(): TerminalNode;
    statement_list(): Statement_listContext;
    RCURL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Arrow_prefixContext extends ParserRuleContext {
    _s1: Ws_plusContext;
    _s2: Ws_plusContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    arrow_args(): Arrow_argsContext;
    EGT(): TerminalNode;
    ws_plus_list(): Ws_plusContext[];
    ws_plus(i: number): Ws_plusContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Arrow_argsContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Arrow_argsContext): void;
}
export declare class ArrowListArgContext extends Arrow_argsContext {
    constructor(parser: MParser, ctx: Arrow_argsContext);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    variable_identifier_list(): Variable_identifier_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ArrowSingleArgContext extends Arrow_argsContext {
    constructor(parser: MParser, ctx: Arrow_argsContext);
    variable_identifier(): Variable_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Sorted_keyContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    instance_expression(): Instance_expressionContext;
    arrow_expression(): Arrow_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Read_blob_expressionContext extends ParserRuleContext {
    _source: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    READ(): TerminalNode;
    BLOB(): TerminalNode;
    FROM(): TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Read_all_expressionContext extends ParserRuleContext {
    _source: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    READ(): TerminalNode;
    ALL(): TerminalNode;
    FROM(): TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Read_one_expressionContext extends ParserRuleContext {
    _source: ExpressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    READ(): TerminalNode;
    ONE(): TerminalNode;
    FROM(): TerminalNode;
    expression(): ExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Order_by_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    order_by_list(): Order_byContext[];
    order_by(i: number): Order_byContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Order_byContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    variable_identifier_list(): Variable_identifierContext[];
    variable_identifier(i: number): Variable_identifierContext;
    DOT_list(): TerminalNode[];
    DOT(i: number): TerminalNode;
    ASC(): TerminalNode;
    DESC(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Include_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    variable_identifier_list(): Variable_identifierContext[];
    variable_identifier(i: number): Variable_identifierContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class OperatorContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: OperatorContext): void;
}
export declare class OperatorPlusContext extends OperatorContext {
    constructor(parser: MParser, ctx: OperatorContext);
    PLUS(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class OperatorDivideContext extends OperatorContext {
    constructor(parser: MParser, ctx: OperatorContext);
    divide(): DivideContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class OperatorIDivideContext extends OperatorContext {
    constructor(parser: MParser, ctx: OperatorContext);
    idivide(): IdivideContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class OperatorMultiplyContext extends OperatorContext {
    constructor(parser: MParser, ctx: OperatorContext);
    multiply(): MultiplyContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class OperatorMinusContext extends OperatorContext {
    constructor(parser: MParser, ctx: OperatorContext);
    MINUS(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class OperatorModuloContext extends OperatorContext {
    constructor(parser: MParser, ctx: OperatorContext);
    modulo(): ModuloContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class KeywordContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    JAVA(): TerminalNode;
    CSHARP(): TerminalNode;
    PYTHON2(): TerminalNode;
    PYTHON3(): TerminalNode;
    JAVASCRIPT(): TerminalNode;
    SWIFT(): TerminalNode;
    BOOLEAN(): TerminalNode;
    CHARACTER(): TerminalNode;
    TEXT(): TerminalNode;
    INTEGER(): TerminalNode;
    DECIMAL(): TerminalNode;
    DATE(): TerminalNode;
    TIME(): TerminalNode;
    DATETIME(): TerminalNode;
    PERIOD(): TerminalNode;
    VERSION(): TerminalNode;
    CODE(): TerminalNode;
    DOCUMENT(): TerminalNode;
    BLOB(): TerminalNode;
    IMAGE(): TerminalNode;
    DBID(): TerminalNode;
    UUID(): TerminalNode;
    ITERATOR(): TerminalNode;
    CURSOR(): TerminalNode;
    HTML(): TerminalNode;
    ABSTRACT(): TerminalNode;
    ALL(): TerminalNode;
    ALWAYS(): TerminalNode;
    AND(): TerminalNode;
    ANY(): TerminalNode;
    AS(): TerminalNode;
    ASC(): TerminalNode;
    ATTR(): TerminalNode;
    ATTRIBUTE(): TerminalNode;
    ATTRIBUTES(): TerminalNode;
    BINDINGS(): TerminalNode;
    BREAK(): TerminalNode;
    BY(): TerminalNode;
    CASE(): TerminalNode;
    CATCH(): TerminalNode;
    CATEGORY(): TerminalNode;
    CLASS(): TerminalNode;
    CONTAINS(): TerminalNode;
    DEF(): TerminalNode;
    DEFAULT(): TerminalNode;
    DEFINE(): TerminalNode;
    DELETE(): TerminalNode;
    DESC(): TerminalNode;
    DO(): TerminalNode;
    DOING(): TerminalNode;
    EACH(): TerminalNode;
    ELSE(): TerminalNode;
    ENUM(): TerminalNode;
    ENUMERATED(): TerminalNode;
    EXCEPT(): TerminalNode;
    EXECUTE(): TerminalNode;
    EXPECTING(): TerminalNode;
    EXTENDS(): TerminalNode;
    FETCH(): TerminalNode;
    FILTERED(): TerminalNode;
    FINALLY(): TerminalNode;
    FLUSH(): TerminalNode;
    FOR(): TerminalNode;
    FROM(): TerminalNode;
    GETTER(): TerminalNode;
    HAS(): TerminalNode;
    IF(): TerminalNode;
    IN(): TerminalNode;
    INDEX(): TerminalNode;
    IS(): TerminalNode;
    MATCHING(): TerminalNode;
    METHOD(): TerminalNode;
    METHODS(): TerminalNode;
    MODULO(): TerminalNode;
    MUTABLE(): TerminalNode;
    NATIVE(): TerminalNode;
    NONE(): TerminalNode;
    NOT(): TerminalNode;
    NOTHING(): TerminalNode;
    NULL(): TerminalNode;
    ON(): TerminalNode;
    ONE(): TerminalNode;
    OPERATOR(): TerminalNode;
    OR(): TerminalNode;
    ORDER(): TerminalNode;
    OTHERWISE(): TerminalNode;
    PASS(): TerminalNode;
    RAISE(): TerminalNode;
    READ(): TerminalNode;
    RECEIVING(): TerminalNode;
    RESOURCE(): TerminalNode;
    RETURN(): TerminalNode;
    RETURNING(): TerminalNode;
    ROWS(): TerminalNode;
    SELF(): TerminalNode;
    SETTER(): TerminalNode;
    SINGLETON(): TerminalNode;
    SORTED(): TerminalNode;
    SUPER(): TerminalNode;
    STORABLE(): TerminalNode;
    STORE(): TerminalNode;
    SWITCH(): TerminalNode;
    TEST(): TerminalNode;
    THIS(): TerminalNode;
    THROW(): TerminalNode;
    TO(): TerminalNode;
    TRY(): TerminalNode;
    VERIFYING(): TerminalNode;
    WIDGET(): TerminalNode;
    WITH(): TerminalNode;
    WHEN(): TerminalNode;
    WHERE(): TerminalNode;
    WHILE(): TerminalNode;
    WRITE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class New_tokenContext extends ParserRuleContext {
    _i1: Token;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Key_tokenContext extends ParserRuleContext {
    _i1: Token;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Module_tokenContext extends ParserRuleContext {
    _i1: Token;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Value_tokenContext extends ParserRuleContext {
    _i1: Token;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Symbols_tokenContext extends ParserRuleContext {
    _i1: Token;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class AssignContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    EQ(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class MultiplyContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    STAR(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class DivideContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    SLASH(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class IdivideContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    BSLASH(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class ModuloContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    PERCENT(): TerminalNode;
    MODULO(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Javascript_statementContext): void;
}
export declare class JavascriptStatementContext extends Javascript_statementContext {
    _exp: Javascript_expressionContext;
    constructor(parser: MParser, ctx: Javascript_statementContext);
    SEMI(): TerminalNode;
    javascript_expression(): Javascript_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavascriptReturnStatementContext extends Javascript_statementContext {
    _exp: Javascript_expressionContext;
    constructor(parser: MParser, ctx: Javascript_statementContext);
    RETURN(): TerminalNode;
    SEMI(): TerminalNode;
    javascript_expression(): Javascript_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Javascript_expressionContext): void;
}
export declare class JavascriptSelectorExpressionContext extends Javascript_expressionContext {
    _parent: Javascript_expressionContext;
    _child: Javascript_selector_expressionContext;
    constructor(parser: MParser, ctx: Javascript_expressionContext);
    javascript_expression(): Javascript_expressionContext;
    javascript_selector_expression(): Javascript_selector_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavascriptPrimaryExpressionContext extends Javascript_expressionContext {
    _exp: Javascript_primary_expressionContext;
    constructor(parser: MParser, ctx: Javascript_expressionContext);
    javascript_primary_expression(): Javascript_primary_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_primary_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    javascript_this_expression(): Javascript_this_expressionContext;
    javascript_new_expression(): Javascript_new_expressionContext;
    javascript_parenthesis_expression(): Javascript_parenthesis_expressionContext;
    javascript_identifier_expression(): Javascript_identifier_expressionContext;
    javascript_literal_expression(): Javascript_literal_expressionContext;
    javascript_method_expression(): Javascript_method_expressionContext;
    javascript_item_expression(): Javascript_item_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_this_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    this_expression(): This_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_new_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    new_token(): New_tokenContext;
    javascript_method_expression(): Javascript_method_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_selector_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Javascript_selector_expressionContext): void;
}
export declare class JavascriptMemberExpressionContext extends Javascript_selector_expressionContext {
    _name: Javascript_identifierContext;
    constructor(parser: MParser, ctx: Javascript_selector_expressionContext);
    DOT(): TerminalNode;
    javascript_identifier(): Javascript_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavascriptItemExpressionContext extends Javascript_selector_expressionContext {
    _exp: Javascript_item_expressionContext;
    constructor(parser: MParser, ctx: Javascript_selector_expressionContext);
    javascript_item_expression(): Javascript_item_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavascriptMethodExpressionContext extends Javascript_selector_expressionContext {
    _method: Javascript_method_expressionContext;
    constructor(parser: MParser, ctx: Javascript_selector_expressionContext);
    DOT(): TerminalNode;
    javascript_method_expression(): Javascript_method_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_method_expressionContext extends ParserRuleContext {
    _name: Javascript_identifierContext;
    _args: Javascript_argumentsContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    javascript_identifier(): Javascript_identifierContext;
    javascript_arguments(): Javascript_argumentsContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_argumentsContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Javascript_argumentsContext): void;
}
export declare class JavascriptArgumentListContext extends Javascript_argumentsContext {
    _item: Javascript_expressionContext;
    constructor(parser: MParser, ctx: Javascript_argumentsContext);
    javascript_expression(): Javascript_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavascriptArgumentListItemContext extends Javascript_argumentsContext {
    _items: Javascript_argumentsContext;
    _item: Javascript_expressionContext;
    constructor(parser: MParser, ctx: Javascript_argumentsContext);
    COMMA(): TerminalNode;
    javascript_arguments(): Javascript_argumentsContext;
    javascript_expression(): Javascript_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_item_expressionContext extends ParserRuleContext {
    _exp: Javascript_expressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LBRAK(): TerminalNode;
    RBRAK(): TerminalNode;
    javascript_expression(): Javascript_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_parenthesis_expressionContext extends ParserRuleContext {
    _exp: Javascript_expressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    javascript_expression(): Javascript_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_identifier_expressionContext extends ParserRuleContext {
    _name: Javascript_identifierContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    javascript_identifier(): Javascript_identifierContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_literal_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Javascript_literal_expressionContext): void;
}
export declare class JavascriptIntegerLiteralContext extends Javascript_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Javascript_literal_expressionContext);
    INTEGER_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavascriptBooleanLiteralContext extends Javascript_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Javascript_literal_expressionContext);
    BOOLEAN_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavascriptCharacterLiteralContext extends Javascript_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Javascript_literal_expressionContext);
    CHAR_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavascriptTextLiteralContext extends Javascript_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Javascript_literal_expressionContext);
    TEXT_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavascriptDecimalLiteralContext extends Javascript_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Javascript_literal_expressionContext);
    DECIMAL_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Javascript_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    SYMBOL_IDENTIFIER(): TerminalNode;
    DOLLAR_IDENTIFIER(): TerminalNode;
    TYPE_IDENTIFIER(): TerminalNode;
    keyword(): KeywordContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Python_statementContext): void;
}
export declare class PythonStatementContext extends Python_statementContext {
    _exp: Python_expressionContext;
    constructor(parser: MParser, ctx: Python_statementContext);
    python_expression(): Python_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonReturnStatementContext extends Python_statementContext {
    _exp: Python_expressionContext;
    constructor(parser: MParser, ctx: Python_statementContext);
    RETURN(): TerminalNode;
    python_expression(): Python_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Python_expressionContext): void;
}
export declare class PythonSelectorExpressionContext extends Python_expressionContext {
    _parent: Python_expressionContext;
    _child: Python_selector_expressionContext;
    constructor(parser: MParser, ctx: Python_expressionContext);
    python_expression(): Python_expressionContext;
    python_selector_expression(): Python_selector_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonPrimaryExpressionContext extends Python_expressionContext {
    _exp: Python_primary_expressionContext;
    constructor(parser: MParser, ctx: Python_expressionContext);
    python_primary_expression(): Python_primary_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_primary_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Python_primary_expressionContext): void;
}
export declare class PythonParenthesisExpressionContext extends Python_primary_expressionContext {
    _exp: Python_parenthesis_expressionContext;
    constructor(parser: MParser, ctx: Python_primary_expressionContext);
    python_parenthesis_expression(): Python_parenthesis_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonIdentifierExpressionContext extends Python_primary_expressionContext {
    _exp: Python_identifier_expressionContext;
    constructor(parser: MParser, ctx: Python_primary_expressionContext);
    python_identifier_expression(): Python_identifier_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonSelfExpressionContext extends Python_primary_expressionContext {
    _exp: Python_self_expressionContext;
    constructor(parser: MParser, ctx: Python_primary_expressionContext);
    python_self_expression(): Python_self_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonLiteralExpressionContext extends Python_primary_expressionContext {
    _exp: Python_literal_expressionContext;
    constructor(parser: MParser, ctx: Python_primary_expressionContext);
    python_literal_expression(): Python_literal_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonGlobalMethodExpressionContext extends Python_primary_expressionContext {
    _exp: Python_method_expressionContext;
    constructor(parser: MParser, ctx: Python_primary_expressionContext);
    python_method_expression(): Python_method_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_self_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    this_expression(): This_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_selector_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Python_selector_expressionContext): void;
}
export declare class PythonMethodExpressionContext extends Python_selector_expressionContext {
    _exp: Python_method_expressionContext;
    constructor(parser: MParser, ctx: Python_selector_expressionContext);
    DOT(): TerminalNode;
    python_method_expression(): Python_method_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonItemExpressionContext extends Python_selector_expressionContext {
    _exp: Python_expressionContext;
    constructor(parser: MParser, ctx: Python_selector_expressionContext);
    LBRAK(): TerminalNode;
    RBRAK(): TerminalNode;
    python_expression(): Python_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_method_expressionContext extends ParserRuleContext {
    _name: Python_identifierContext;
    _args: Python_argument_listContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    python_identifier(): Python_identifierContext;
    python_argument_list(): Python_argument_listContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_argument_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Python_argument_listContext): void;
}
export declare class PythonOrdinalOnlyArgumentListContext extends Python_argument_listContext {
    _ordinal: Python_ordinal_argument_listContext;
    constructor(parser: MParser, ctx: Python_argument_listContext);
    python_ordinal_argument_list(): Python_ordinal_argument_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonNamedOnlyArgumentListContext extends Python_argument_listContext {
    _named: Python_named_argument_listContext;
    constructor(parser: MParser, ctx: Python_argument_listContext);
    python_named_argument_list(): Python_named_argument_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonArgumentListContext extends Python_argument_listContext {
    _ordinal: Python_ordinal_argument_listContext;
    _named: Python_named_argument_listContext;
    constructor(parser: MParser, ctx: Python_argument_listContext);
    COMMA(): TerminalNode;
    python_ordinal_argument_list(): Python_ordinal_argument_listContext;
    python_named_argument_list(): Python_named_argument_listContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_ordinal_argument_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Python_ordinal_argument_listContext): void;
}
export declare class PythonOrdinalArgumentListContext extends Python_ordinal_argument_listContext {
    _item: Python_expressionContext;
    constructor(parser: MParser, ctx: Python_ordinal_argument_listContext);
    python_expression(): Python_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonOrdinalArgumentListItemContext extends Python_ordinal_argument_listContext {
    _items: Python_ordinal_argument_listContext;
    _item: Python_expressionContext;
    constructor(parser: MParser, ctx: Python_ordinal_argument_listContext);
    COMMA(): TerminalNode;
    python_ordinal_argument_list(): Python_ordinal_argument_listContext;
    python_expression(): Python_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_named_argument_listContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Python_named_argument_listContext): void;
}
export declare class PythonNamedArgumentListContext extends Python_named_argument_listContext {
    _name: Python_identifierContext;
    _exp: Python_expressionContext;
    constructor(parser: MParser, ctx: Python_named_argument_listContext);
    EQ(): TerminalNode;
    python_identifier(): Python_identifierContext;
    python_expression(): Python_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonNamedArgumentListItemContext extends Python_named_argument_listContext {
    _items: Python_named_argument_listContext;
    _name: Python_identifierContext;
    _exp: Python_expressionContext;
    constructor(parser: MParser, ctx: Python_named_argument_listContext);
    COMMA(): TerminalNode;
    EQ(): TerminalNode;
    python_named_argument_list(): Python_named_argument_listContext;
    python_identifier(): Python_identifierContext;
    python_expression(): Python_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_parenthesis_expressionContext extends ParserRuleContext {
    _exp: Python_expressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    python_expression(): Python_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_identifier_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Python_identifier_expressionContext): void;
}
export declare class PythonChildIdentifierContext extends Python_identifier_expressionContext {
    _parent: Python_identifier_expressionContext;
    _name: Python_identifierContext;
    constructor(parser: MParser, ctx: Python_identifier_expressionContext);
    DOT(): TerminalNode;
    python_identifier_expression(): Python_identifier_expressionContext;
    python_identifier(): Python_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonPromptoIdentifierContext extends Python_identifier_expressionContext {
    constructor(parser: MParser, ctx: Python_identifier_expressionContext);
    DOLLAR_IDENTIFIER(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonIdentifierContext extends Python_identifier_expressionContext {
    _name: Python_identifierContext;
    constructor(parser: MParser, ctx: Python_identifier_expressionContext);
    python_identifier(): Python_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_literal_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Python_literal_expressionContext): void;
}
export declare class PythonIntegerLiteralContext extends Python_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Python_literal_expressionContext);
    INTEGER_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonBooleanLiteralContext extends Python_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Python_literal_expressionContext);
    BOOLEAN_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonCharacterLiteralContext extends Python_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Python_literal_expressionContext);
    CHAR_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonTextLiteralContext extends Python_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Python_literal_expressionContext);
    TEXT_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class PythonDecimalLiteralContext extends Python_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Python_literal_expressionContext);
    DECIMAL_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Python_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    SYMBOL_IDENTIFIER(): TerminalNode;
    DOLLAR_IDENTIFIER(): TerminalNode;
    TYPE_IDENTIFIER(): TerminalNode;
    keyword(): KeywordContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Java_statementContext): void;
}
export declare class JavaReturnStatementContext extends Java_statementContext {
    _exp: Java_expressionContext;
    constructor(parser: MParser, ctx: Java_statementContext);
    RETURN(): TerminalNode;
    SEMI(): TerminalNode;
    java_expression(): Java_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaStatementContext extends Java_statementContext {
    _exp: Java_expressionContext;
    constructor(parser: MParser, ctx: Java_statementContext);
    SEMI(): TerminalNode;
    java_expression(): Java_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Java_expressionContext): void;
}
export declare class JavaSelectorExpressionContext extends Java_expressionContext {
    _parent: Java_expressionContext;
    _child: Java_selector_expressionContext;
    constructor(parser: MParser, ctx: Java_expressionContext);
    java_expression(): Java_expressionContext;
    java_selector_expression(): Java_selector_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaPrimaryExpressionContext extends Java_expressionContext {
    _exp: Java_primary_expressionContext;
    constructor(parser: MParser, ctx: Java_expressionContext);
    java_primary_expression(): Java_primary_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_primary_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    java_this_expression(): Java_this_expressionContext;
    java_new_expression(): Java_new_expressionContext;
    java_parenthesis_expression(): Java_parenthesis_expressionContext;
    java_identifier_expression(): Java_identifier_expressionContext;
    java_literal_expression(): Java_literal_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_this_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    this_expression(): This_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_new_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    new_token(): New_tokenContext;
    java_method_expression(): Java_method_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_selector_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Java_selector_expressionContext): void;
}
export declare class JavaItemExpressionContext extends Java_selector_expressionContext {
    _exp: Java_item_expressionContext;
    constructor(parser: MParser, ctx: Java_selector_expressionContext);
    java_item_expression(): Java_item_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaMethodExpressionContext extends Java_selector_expressionContext {
    _exp: Java_method_expressionContext;
    constructor(parser: MParser, ctx: Java_selector_expressionContext);
    DOT(): TerminalNode;
    java_method_expression(): Java_method_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_method_expressionContext extends ParserRuleContext {
    _name: Java_identifierContext;
    _args: Java_argumentsContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    java_identifier(): Java_identifierContext;
    java_arguments(): Java_argumentsContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_argumentsContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Java_argumentsContext): void;
}
export declare class JavaArgumentListItemContext extends Java_argumentsContext {
    _items: Java_argumentsContext;
    _item: Java_expressionContext;
    constructor(parser: MParser, ctx: Java_argumentsContext);
    COMMA(): TerminalNode;
    java_arguments(): Java_argumentsContext;
    java_expression(): Java_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaArgumentListContext extends Java_argumentsContext {
    _item: Java_expressionContext;
    constructor(parser: MParser, ctx: Java_argumentsContext);
    java_expression(): Java_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_item_expressionContext extends ParserRuleContext {
    _exp: Java_expressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LBRAK(): TerminalNode;
    RBRAK(): TerminalNode;
    java_expression(): Java_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_parenthesis_expressionContext extends ParserRuleContext {
    _exp: Java_expressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    java_expression(): Java_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_identifier_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Java_identifier_expressionContext): void;
}
export declare class JavaIdentifierContext extends Java_identifier_expressionContext {
    _name: Java_identifierContext;
    constructor(parser: MParser, ctx: Java_identifier_expressionContext);
    java_identifier(): Java_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaChildIdentifierContext extends Java_identifier_expressionContext {
    _parent: Java_identifier_expressionContext;
    _name: Java_identifierContext;
    constructor(parser: MParser, ctx: Java_identifier_expressionContext);
    DOT(): TerminalNode;
    java_identifier_expression(): Java_identifier_expressionContext;
    java_identifier(): Java_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_class_identifier_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Java_class_identifier_expressionContext): void;
}
export declare class JavaClassIdentifierContext extends Java_class_identifier_expressionContext {
    _klass: Java_identifier_expressionContext;
    constructor(parser: MParser, ctx: Java_class_identifier_expressionContext);
    java_identifier_expression(): Java_identifier_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaChildClassIdentifierContext extends Java_class_identifier_expressionContext {
    _parent: Java_class_identifier_expressionContext;
    _name: Token;
    constructor(parser: MParser, ctx: Java_class_identifier_expressionContext);
    java_class_identifier_expression(): Java_class_identifier_expressionContext;
    DOLLAR_IDENTIFIER(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_literal_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Java_literal_expressionContext): void;
}
export declare class JavaBooleanLiteralContext extends Java_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Java_literal_expressionContext);
    BOOLEAN_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaCharacterLiteralContext extends Java_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Java_literal_expressionContext);
    CHAR_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaIntegerLiteralContext extends Java_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Java_literal_expressionContext);
    INTEGER_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaTextLiteralContext extends Java_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Java_literal_expressionContext);
    TEXT_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JavaDecimalLiteralContext extends Java_literal_expressionContext {
    _t: Token;
    constructor(parser: MParser, ctx: Java_literal_expressionContext);
    DECIMAL_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Java_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    SYMBOL_IDENTIFIER(): TerminalNode;
    DOLLAR_IDENTIFIER(): TerminalNode;
    TYPE_IDENTIFIER(): TerminalNode;
    keyword(): KeywordContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_statementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Csharp_statementContext): void;
}
export declare class CSharpReturnStatementContext extends Csharp_statementContext {
    _exp: Csharp_expressionContext;
    constructor(parser: MParser, ctx: Csharp_statementContext);
    RETURN(): TerminalNode;
    SEMI(): TerminalNode;
    csharp_expression(): Csharp_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CSharpStatementContext extends Csharp_statementContext {
    _exp: Csharp_expressionContext;
    constructor(parser: MParser, ctx: Csharp_statementContext);
    SEMI(): TerminalNode;
    csharp_expression(): Csharp_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Csharp_expressionContext): void;
}
export declare class CSharpSelectorExpressionContext extends Csharp_expressionContext {
    _parent: Csharp_expressionContext;
    _child: Csharp_selector_expressionContext;
    constructor(parser: MParser, ctx: Csharp_expressionContext);
    csharp_expression(): Csharp_expressionContext;
    csharp_selector_expression(): Csharp_selector_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CSharpPrimaryExpressionContext extends Csharp_expressionContext {
    _exp: Csharp_primary_expressionContext;
    constructor(parser: MParser, ctx: Csharp_expressionContext);
    csharp_primary_expression(): Csharp_primary_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_primary_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    csharp_this_expression(): Csharp_this_expressionContext;
    csharp_new_expression(): Csharp_new_expressionContext;
    csharp_parenthesis_expression(): Csharp_parenthesis_expressionContext;
    csharp_identifier_expression(): Csharp_identifier_expressionContext;
    csharp_literal_expression(): Csharp_literal_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_this_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    this_expression(): This_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_new_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    new_token(): New_tokenContext;
    csharp_method_expression(): Csharp_method_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_selector_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Csharp_selector_expressionContext): void;
}
export declare class CSharpMethodExpressionContext extends Csharp_selector_expressionContext {
    _exp: Csharp_method_expressionContext;
    constructor(parser: MParser, ctx: Csharp_selector_expressionContext);
    DOT(): TerminalNode;
    csharp_method_expression(): Csharp_method_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CSharpItemExpressionContext extends Csharp_selector_expressionContext {
    _exp: Csharp_item_expressionContext;
    constructor(parser: MParser, ctx: Csharp_selector_expressionContext);
    csharp_item_expression(): Csharp_item_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_method_expressionContext extends ParserRuleContext {
    _name: Csharp_identifierContext;
    _args: Csharp_argumentsContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    csharp_identifier(): Csharp_identifierContext;
    csharp_arguments(): Csharp_argumentsContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_argumentsContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Csharp_argumentsContext): void;
}
export declare class CSharpArgumentListContext extends Csharp_argumentsContext {
    _item: Csharp_expressionContext;
    constructor(parser: MParser, ctx: Csharp_argumentsContext);
    csharp_expression(): Csharp_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CSharpArgumentListItemContext extends Csharp_argumentsContext {
    _items: Csharp_argumentsContext;
    _item: Csharp_expressionContext;
    constructor(parser: MParser, ctx: Csharp_argumentsContext);
    COMMA(): TerminalNode;
    csharp_arguments(): Csharp_argumentsContext;
    csharp_expression(): Csharp_expressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_item_expressionContext extends ParserRuleContext {
    _exp: Csharp_expressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LBRAK(): TerminalNode;
    RBRAK(): TerminalNode;
    csharp_expression(): Csharp_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_parenthesis_expressionContext extends ParserRuleContext {
    _exp: Csharp_expressionContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LPAR(): TerminalNode;
    RPAR(): TerminalNode;
    csharp_expression(): Csharp_expressionContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_identifier_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Csharp_identifier_expressionContext): void;
}
export declare class CSharpIdentifierContext extends Csharp_identifier_expressionContext {
    _name: Csharp_identifierContext;
    constructor(parser: MParser, ctx: Csharp_identifier_expressionContext);
    csharp_identifier(): Csharp_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CSharpChildIdentifierContext extends Csharp_identifier_expressionContext {
    _parent: Csharp_identifier_expressionContext;
    _name: Csharp_identifierContext;
    constructor(parser: MParser, ctx: Csharp_identifier_expressionContext);
    DOT(): TerminalNode;
    csharp_identifier_expression(): Csharp_identifier_expressionContext;
    csharp_identifier(): Csharp_identifierContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CSharpPromptoIdentifierContext extends Csharp_identifier_expressionContext {
    constructor(parser: MParser, ctx: Csharp_identifier_expressionContext);
    DOLLAR_IDENTIFIER(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_literal_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Csharp_literal_expressionContext): void;
}
export declare class CSharpBooleanLiteralContext extends Csharp_literal_expressionContext {
    constructor(parser: MParser, ctx: Csharp_literal_expressionContext);
    BOOLEAN_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CSharpIntegerLiteralContext extends Csharp_literal_expressionContext {
    constructor(parser: MParser, ctx: Csharp_literal_expressionContext);
    INTEGER_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CSharpDecimalLiteralContext extends Csharp_literal_expressionContext {
    constructor(parser: MParser, ctx: Csharp_literal_expressionContext);
    DECIMAL_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CSharpCharacterLiteralContext extends Csharp_literal_expressionContext {
    constructor(parser: MParser, ctx: Csharp_literal_expressionContext);
    CHAR_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CSharpTextLiteralContext extends Csharp_literal_expressionContext {
    constructor(parser: MParser, ctx: Csharp_literal_expressionContext);
    TEXT_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Csharp_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    VARIABLE_IDENTIFIER(): TerminalNode;
    SYMBOL_IDENTIFIER(): TerminalNode;
    DOLLAR_IDENTIFIER(): TerminalNode;
    TYPE_IDENTIFIER(): TerminalNode;
    keyword(): KeywordContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_expressionContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    jsx_element(): Jsx_elementContext;
    jsx_fragment(): Jsx_fragmentContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_elementContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Jsx_elementContext): void;
}
export declare class JsxSelfClosingContext extends Jsx_elementContext {
    _jsx: Jsx_self_closingContext;
    constructor(parser: MParser, ctx: Jsx_elementContext);
    jsx_self_closing(): Jsx_self_closingContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JsxElementContext extends Jsx_elementContext {
    _opening: Jsx_openingContext;
    _children_: Jsx_childrenContext;
    _closing: Jsx_closingContext;
    constructor(parser: MParser, ctx: Jsx_elementContext);
    jsx_opening(): Jsx_openingContext;
    jsx_closing(): Jsx_closingContext;
    jsx_children(): Jsx_childrenContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_fragmentContext extends ParserRuleContext {
    _children_: Jsx_childrenContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    jsx_fragment_start(): Jsx_fragment_startContext;
    ws_plus_list(): Ws_plusContext[];
    ws_plus(i: number): Ws_plusContext;
    jsx_fragment_end(): Jsx_fragment_endContext;
    jsx_children(): Jsx_childrenContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_fragment_startContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LT(): TerminalNode;
    GT(): TerminalNode;
    LTGT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_fragment_endContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LT(): TerminalNode;
    SLASH(): TerminalNode;
    GT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_self_closingContext extends ParserRuleContext {
    _name: Jsx_element_nameContext;
    _attributes: Jsx_attributeContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LT(): TerminalNode;
    ws_plus(): Ws_plusContext;
    SLASH(): TerminalNode;
    GT(): TerminalNode;
    jsx_element_name(): Jsx_element_nameContext;
    jsx_attribute_list(): Jsx_attributeContext[];
    jsx_attribute(i: number): Jsx_attributeContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_openingContext extends ParserRuleContext {
    _name: Jsx_element_nameContext;
    _attributes: Jsx_attributeContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LT(): TerminalNode;
    ws_plus(): Ws_plusContext;
    GT(): TerminalNode;
    jsx_element_name(): Jsx_element_nameContext;
    jsx_attribute_list(): Jsx_attributeContext[];
    jsx_attribute(i: number): Jsx_attributeContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_closingContext extends ParserRuleContext {
    _name: Jsx_element_nameContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LT(): TerminalNode;
    SLASH(): TerminalNode;
    GT(): TerminalNode;
    jsx_element_name(): Jsx_element_nameContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_element_nameContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    jsx_identifier_list(): Jsx_identifierContext[];
    jsx_identifier(i: number): Jsx_identifierContext;
    DOT_list(): TerminalNode[];
    DOT(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    identifier_or_keyword(): Identifier_or_keywordContext;
    nospace_hyphen_identifier_or_keyword_list(): Nospace_hyphen_identifier_or_keywordContext[];
    nospace_hyphen_identifier_or_keyword(i: number): Nospace_hyphen_identifier_or_keywordContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_attributeContext extends ParserRuleContext {
    _name: Jsx_identifierContext;
    _value: Jsx_attribute_valueContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    ws_plus(): Ws_plusContext;
    jsx_identifier(): Jsx_identifierContext;
    EQ(): TerminalNode;
    jsx_attribute_value(): Jsx_attribute_valueContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_attribute_valueContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Jsx_attribute_valueContext): void;
}
export declare class JsxValueContext extends Jsx_attribute_valueContext {
    _exp: ExpressionContext;
    constructor(parser: MParser, ctx: Jsx_attribute_valueContext);
    LCURL(): TerminalNode;
    RCURL(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JsxLiteralContext extends Jsx_attribute_valueContext {
    constructor(parser: MParser, ctx: Jsx_attribute_valueContext);
    TEXT_LITERAL(): TerminalNode;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_childrenContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    jsx_child_list(): Jsx_childContext[];
    jsx_child(i: number): Jsx_childContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_childContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Jsx_childContext): void;
}
export declare class JsxTextContext extends Jsx_childContext {
    _text: Jsx_textContext;
    constructor(parser: MParser, ctx: Jsx_childContext);
    jsx_text(): Jsx_textContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JsxChildContext extends Jsx_childContext {
    _jsx: Jsx_elementContext;
    constructor(parser: MParser, ctx: Jsx_childContext);
    jsx_element(): Jsx_elementContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class JsxCodeContext extends Jsx_childContext {
    _exp: ExpressionContext;
    constructor(parser: MParser, ctx: Jsx_childContext);
    LCURL(): TerminalNode;
    RCURL(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_textContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    jsx_char_list(): Jsx_charContext[];
    jsx_char(i: number): Jsx_charContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Jsx_charContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LCURL(): TerminalNode;
    RCURL(): TerminalNode;
    LT(): TerminalNode;
    GT(): TerminalNode;
    JSX_TEXT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Css_expressionContext extends ParserRuleContext {
    _field: Css_fieldContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    LCURL(): TerminalNode;
    RCURL(): TerminalNode;
    css_field_list(): Css_fieldContext[];
    css_field(i: number): Css_fieldContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Css_fieldContext extends ParserRuleContext {
    _name: Css_identifierContext;
    _values: Css_valueContext;
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    COLON(): TerminalNode;
    SEMI(): TerminalNode;
    css_identifier(): Css_identifierContext;
    css_value_list(): Css_valueContext[];
    css_value(i: number): Css_valueContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Css_identifierContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    identifier_or_keyword(): Identifier_or_keywordContext;
    MINUS(): TerminalNode;
    nospace_identifier_or_keyword(): Nospace_identifier_or_keywordContext;
    css_identifier(): Css_identifierContext;
    nospace_hyphen_identifier_or_keyword_list(): Nospace_hyphen_identifier_or_keywordContext[];
    nospace_hyphen_identifier_or_keyword(i: number): Nospace_hyphen_identifier_or_keywordContext;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Css_valueContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: Css_valueContext): void;
}
export declare class CssTextContext extends Css_valueContext {
    _text: Css_textContext;
    constructor(parser: MParser, ctx: Css_valueContext);
    css_text(): Css_textContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class CssValueContext extends Css_valueContext {
    _exp: ExpressionContext;
    constructor(parser: MParser, ctx: Css_valueContext);
    LCURL(): TerminalNode;
    RCURL(): TerminalNode;
    expression(): ExpressionContext;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
export declare class Css_textContext extends ParserRuleContext {
    constructor(parser?: MParser, parent?: ParserRuleContext, invokingState?: number);
    SEMI_list(): TerminalNode[];
    SEMI(i: number): TerminalNode;
    LCURL_list(): TerminalNode[];
    LCURL(i: number): TerminalNode;
    RCURL_list(): TerminalNode[];
    RCURL(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: MParserListener): void;
    exitRule(listener: MParserListener): void;
}
