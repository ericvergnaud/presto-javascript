import Expression from "./Expression"
import { DocumentType } from "../type/index"
import { DocumentValue, BlobValue, ConcreteInstance } from "../value/index"
import { Blob, Document } from "../intrinsic/index"
import { ReadWriteError } from "../error/index"

export default class DocumentExpression extends Expression {
 
    constructor(source) {
        super();
        this.source = source;
    }

    check(context) {
        return DocumentType.instance;
    }

    toString(context) {
        return "new Document()";
    }

    interpret(context) {
        if(!this.source)
            return new DocumentValue();
        else {
            const value = this.source.interpret(context);
            return this.documentFromValue(context, value);
        }
    }

    declare(transpiler) {
        transpiler.require(Document);
    }

    transpile(transpiler) {
        if(this.source) {
            this.source.transpile(transpiler);
            transpiler.append(".toDocument()");
        } else
            transpiler.append("new Document()");
    }

    documentFromValue(context, value) {
        if (value instanceof BlobValue)
            return this.documentFromBlob(context, value);
        else if (value instanceof ConcreteInstance)
            return value.toDocumentValue(context);
        else
            throw new Error("documentFromValue not supported for " + typeof(value));
    }

    documentFromBlob(context, blob) {
        if("application/zip"!=blob.mimeType)
            throw new Error("documentFromBlob not supported for " + blob.mimeType);
        try {
            const parts = Blob.readParts(blob.data);
            const value = Blob.readValue(parts);
            let field = value["type"] || null;
            if (field == null)
                throw new Error("Expecting a 'type' field!");
            const ECleverParser = require("../parser/ECleverParser").ECleverParser;
            const itype = new ECleverParser(field).parse_standalone_type();
            if (itype != DocumentType.instance)
                throw new Error("Expecting a DocumentValue type!");
            field = value["value"] || null;
            if (field == null)
                throw new Error("Expecting a 'value' field!");
            return itype.readJSONValue(context, field, parts);
        } catch (e) {
            throw new ReadWriteError(e.message);
        }
    }

    toDialect(writer) {
        writer.toDialect(this);
    }

    toEDialect(writer) {
        writer.append("Document");
        if (this.source) {
            writer.append(" from ");
            this.source.toDialect(writer);
        }
    }

    toMDialect(writer) {
        writer.append("Document(");
        if (this.source) {
            writer.append(" from = ");
            this.source.toDialect(writer);
        }
        writer.append(")");
    }

    toODialect(writer) {
        writer.append("Document(");
        if (this.source) {
            writer.append(" from = ");
            this.source.toDialect(writer);
        }
        writer.append(")");
    }
}
