var InternalError = require("../error/InternalError").InternalError;
var Store = require("../store/Store").Store;
var MemQueryBuilder = require("./MemQueryBuilder").MemQueryBuilder;
var StorableDocument = null;

// a utility class for running unit tests only
function MemStore() {
    Store.call(this);
    this.documents = {};
    this.nextDbId = 1;
    return this;
}

MemStore.prototype = Object.create(Store.prototype);
MemStore.prototype.constructor = MemStore;


MemStore.prototype.flush = function() {
    // nothing to do
};

MemStore.prototype.isDbIdType = function(type) {
    return type==typeof(this.nextDbId);
};


MemStore.prototype.store = function(todel, toadd) {
    if(todel) {
        todel.forEach(function(dbId) {
            delete this.documents[dbId];
        }, this);
    }
    if(toadd) {
        toadd.forEach(function(doc) {
            var data = doc.document;
            if(data.dbId)
                this.documents[data.dbId] = data;
        }, this);
    }
};

MemStore.prototype.fetchUnique = function(dbId) {
    return this.documents[dbId] || null;
};


MemStore.prototype.fetchOne = function(query) {
    for (dbId in this.documents) {
        doc = this.documents[dbId];
        if(doc.matches(query.predicate))
            return doc;
    }
    return null;
};


MemStore.prototype.fetchMany = function(query) {
    docs = this.fetchMatching(query);
    docs = this.sort(query, docs);
    docs = this.slice(query, docs);
    return new StoredIterator(docs);
};

MemStore.prototype.slice = function(query, docs) {
    if(docs.length==0 || (query.first==null && query.last==null))
        return docs;
    var firstValue = query.first;
    if(firstValue==null || firstValue<1)
        firstValue = 1;
    var lastValue = query.last;
    if(lastValue==null || lastValue>docs.length)
        lastValue = docs.length;
    if(firstValue>docs.length || firstValue > lastValue)
        return [];
    return docs.slice(firstValue - 1, lastValue);
};

MemStore.prototype.sort = function(query, docs) {
    if(!query.orderBys || docs.length<2)
        return docs;
    var self = this;
    docs.sort( function(doc1, doc2) {
        var tuple1 = self.readTuple(doc1, query.orderBys);
        var tuple2 = self.readTuple(doc2, query.orderBys);
        return self.compareTuples(tuple1, tuple2, query.orderBys);
    });
    return docs;
};

MemStore.prototype.compareTuples = function(tuple1, tuple2, orderBys) {
    for(var i=0;i<tuple1.length;i++) {
        var descending = i<orderBys.length ? orderBys[i].descending : false;
        if(i>=tuple2.length)
            return descending ? -1 : 1;
        var val1 = tuple1[i];
        var val2 = tuple2[i];
        if(val1==null && val2==null)
            continue;
        else if(val1==null)
            return descending ? 1 : -1;
        else if(val2==null)
            return descending ? -1 : 1;
        var res = val1 < val2 ? -1 : val2 < val1 ? 1 : 0;
        if(res)
            return descending ? -res : res;
    }
    return 0;
};

MemStore.prototype.readTuple = function(doc, orderBys) {
    return orderBys.map(function(ob) {
        return this.readValue(doc, ob);
    }, this);
};

MemStore.prototype.readValue = function(doc, orderBy) {
    // TODO drill-down
    return doc[orderBy.info.name];
};

MemStore.prototype.fetchMatching = function(query) {
    var docs = [];
    for (dbId in this.documents) {
        doc = this.documents[dbId];
        if(doc.matches(query.predicate))
            docs.push(doc);
    }
    return docs;
};


MemStore.prototype.newQueryBuilder = function() {
    return new MemQueryBuilder();
};

MemStore.prototype.newStorableDocument = function(categories) {
    if(!StorableDocument)
        StorableDocument = require("./StorableDocument").StorableDocument;
    return new StorableDocument(categories);
};

function StoredIterator(docs) {
    this.index = 0;
    this.length = function() { return docs.length; };
    this.hasNext = function() { return this.index < docs.length; };
    this.next = function() { return docs[this.index++]; };
    return this;
}




exports.MemStore = MemStore;