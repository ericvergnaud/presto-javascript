var List = require("./List").List;

function Cursor(mutable, iterable) {
    this.mutable = mutable || false;
    this.iterable = iterable;
    return this;
}

Object.defineProperty(Cursor.prototype, "count", {
    get: function() { return this.iterable.count(); }
});

Object.defineProperty(Cursor.prototype, "totalCount", {
    get: function() { return this.iterable.totalCount(); }
});


Cursor.prototype.iterate = function (fn, instance) {
    if(instance)
        fn = fn.bind(instance);
    var self = this;
    return {
        length: self.count,
        iterator: function() {
            var iterator = self.iterator();
            return {
                hasNext: function() { return iterator.hasNext(); },
                next: function() { return fn(iterator.next()); }
            };
        },
        toArray: function() {
            var array = [];
            var iterator = this.iterator();
            while(iterator.hasNext())
                array.push(iterator.next());
            return array;
        },
        toList: function() {
            return new List(false, this.toArray());
        },
        getText: function() {
            return this.toArray().join(", ");
        }
    };
};

Cursor.prototype.toList = function() {
    var list = new List(false);
    var iterator = this.iterator();
    while(iterator.hasNext())
        list.push(iterator.next());
    return list;
};

Cursor.prototype.collectDbIds = function(idsToDelete) {
	this.toList().collectDbIds(idsToDelete);
};

Cursor.prototype.iterator = function() {
    var Iterator = function(cursor) {
        var iterator = cursor.iterable.iterator();
        this.hasNext = function() { return iterator.hasNext(); };
        this.next = function() {
            var stored = iterator.next();
            if(!stored)
                return null;
            var name = stored.getData('category').slice(-1)[0];
            var type = eval(name);
            var result = new type(null, {}, cursor.mutable);
            result.fromStored(stored); // call loaders
            return result;
        };
        return this;
    };
    return new Iterator(this);
};

Cursor.prototype.filtered = function(fn) {
    var Iterator = function(cursor) {
        this.iterator = cursor.iterator();
        this.current = null;
        this.hasNext = function () {
            if (this.current)
                return true;
            while (this.iterator.hasNext()) {
                var current = this.iterator.next();
                if (fn(current)) {
                    this.current = current;
                    return true;
                }
            }
            return false;
        };
        this.next = function () {
            var current = this.current;
            this.current = null;
            return current;
        };
        return this;
    };
    var self = this;
    var cursor = new Cursor(this.mutable);
    cursor.iterator = function() { return new Iterator(self); };
    return cursor;
};

Cursor.prototype.toString = function () {
    var list = [];
    var iterator = this.iterator();
    while (iterator.hasNext())
        list.push(iterator.next().toString());
    return '[' + list.join(", ") + ']';
};

exports.Cursor = Cursor;
