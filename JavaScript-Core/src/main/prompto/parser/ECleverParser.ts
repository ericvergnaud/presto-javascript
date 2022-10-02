import antlr4 from 'antlr4';
import { CharStream, BufferedTokenStream, Lexer } from 'antlr4';
import EParser from './EParser';
import EIndentingLexer from './EIndentingLexer';
import EPromptoBuilder from '../parser/EPromptoBuilder';
import { IDeclaration, DeclarationList } from "../declaration";
import { IStatement } from "../statement";
import {IType} from "../type";
import {createParserInput} from "./ParserUtils";

type ReplLine = IStatement | IDeclaration;

export default class ECleverParser extends EParser {

	constructor(data?: string, stream?: CharStream, lexer?: Lexer, debug?: boolean) {
		super(createParserInput(data, stream, lexer, (stream: CharStream) => new EIndentingLexer(stream)));
		if(debug)
			this._interp.debug = true;
	}

	equalToken(): number {
		return EParser.EQ2;
	}

	wsToken(): number {
		return EParser.WS;
	}

	parse(): DeclarationList | null {
		return this.parse_declaration_list();
	}

	parse_declaration_list(): DeclarationList | null {
		return this.doParse<DeclarationList>(() => this.declaration_list(), true);
	}

	parse_repl_input(): ReplLine | null {
		return this.doParse<ReplLine>(() => this.repl(), true);
	}

	parse_standalone_type(): IType | null {
		return this.doParse<IType>(() => this.category_or_any_type(), false);
	}

	doParse<T>(rule: () => antlr4.tree.ParseTree, addLF: boolean) {
		const stream = this.getTokenStream() as BufferedTokenStream;
		const lexer = stream.tokenSource as EIndentingLexer;
		lexer.addLF = addLF;
		const tree = (rule.bind(this) as () => antlr4.context.ParserRuleContext)();
		const builder = new EPromptoBuilder(this);
		const walker = new antlr4.tree.ParseTreeWalker();
		walker.walk(builder, tree);
		return builder.getNodeValue<T>(tree);
	}

}
