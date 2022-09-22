import StrictSet from './StrictSet.js';
import NotMutableError from '../error/NotMutableError.js';
import { equalObjects, convertToJson, convertToJsonNode } from '../../../main/prompto/utils/Utils.ts';

export default function List(mutable, items) {
    Array.call(this);
    if(items)
        this.addItems(items);
    this.mutable = mutable;
    return this;
}

List.prototype = Object.create(Array.prototype);
List.prototype.constructor = List;

List.prototype.toArray = function() {
    return Array.from(this);
};

List.prototype.addItems = function(items) {
    if(typeof(StrictSet) !== 'undefined' && items instanceof StrictSet)
        items = items.toArray();
    this.push.apply(this, items);
    return this; // enable fluid API
};

List.prototype.add = function(items) {
    if(typeof(StrictSet) !== 'undefined' && items instanceof StrictSet)
        items = items.toArray();
    var result = new List(this.mutable, this);
    result.addItems(items);
    return result;
};

List.prototype.remove = function(items) {
    var excluded = (typeof(StrictSet) !== 'undefined' && items instanceof StrictSet) ? items : new Set(items);
    var remaining = this.filter(function(item) { return !excluded.has(item); });
    return new List(this.mutable, remaining);
};

List.prototype.removeItem = function(item) {
    this.splice(item - 1, 1);
};

List.prototype.removeValue = function(value) {
    var idx = this.indexOf(value);
    if(idx > -1)
        this.splice(idx, 1);
};

List.prototype.addValue = function(value) {
    this.push(value);
};

List.prototype.insertValue = function(value, atIndex) {
    this.splice(atIndex - 1, 0, value);
};

List.prototype.indexOfValue = function(value) {
    var idx = this.indexOf(value);
    return idx < 0 ? null : idx + 1;
};

List.prototype.sorted = function(sortFunction) {
    var sorted = Array.from(this).sort(sortFunction);
    return new List(false, sorted);
};

List.prototype.filtered = function(filterFunction) {
    var filtered = this.filter(filterFunction);
    return new List(false, filtered);
};

List.prototype.getItem = function(idx) {
    if(idx==null)
        throw new ReferenceError();
    else if(idx<1 || idx>this.length)
        throw new RangeError();
    else
        return this[idx-1];
};

List.prototype.setItem = function (idx, value) {
    if(!this.mutable)
        throw new NotMutableError();
    else if(idx==null)
        throw new ReferenceError();
    else if(idx<1 || idx>this.length)
        throw new RangeError();
    else
        this[idx-1] = value;
};


List.prototype.has = function(item, noCheckEquals) {
    var set = new StrictSet(this);
    return set.has(item, noCheckEquals);
};


List.prototype.hasAll = function(items, noCheckEquals) {
    var set = new StrictSet(this);
    return set.hasAll(items, noCheckEquals);
};


List.prototype.hasAny = function(items, noCheckEquals) {
    var set = new StrictSet(this);
    return set.hasAny(items, noCheckEquals);
};


List.prototype.slice1Based = function(start, last) {
    if(start && start !== 0) {
        if (start < 1 || start > this.length)
            throw new RangeError();
        start = start - 1;
    } else
        start = 0;
    if(last >= 0) {
        if(last < start || last > this.length)
            throw new RangeError();
        return new List(false, this.slice(start, last));
    } else if(last < 0) {
        last = this.length + 1 + last;
        if(last < start || last > this.length)
            throw new RangeError();
        return new List(false, this.slice(start, last));
    } else
        return new List(false, this.slice(start));
};


List.prototype.iterate = function (fn, instance) {
    if(instance)
        fn = fn.bind(instance);
    var self = this;
    return {
        length: self.length,
        iterator: function() {
            var idx = 0;
            return {
                hasNext: function() { return idx < self.length; },
                next: function() { return fn(self[idx++]); }
            };
        },
        filtered: function(filterFunction) {
            var array = this.toArray().filter(filterFunction);
            return new List(false, array);
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
        toSet: function() {
            return new StrictSet(this.toArray());
        },
        getText: function() {
            return this.toArray().join(", ");
        },
        collectStorables:  function(storablesToAdd) {
            this.toList().collectStorables(storablesToAdd);
        }
    }
};


List.prototype.collectStorables = function(storablesToAdd) {
    this.forEach(function(item) {
        if(item && item.collectStorables)
            item.collectStorables(storablesToAdd);
    }, this);
};


List.prototype.collectDbIds = function(idsToDelete) {
    this.forEach(function(item) {
        item.collectDbIds(idsToDelete);
    }, this);
};


List.prototype.equals = function(o) {
    o = o || null;
    if(this===o) {
        return true;
    }
    if(!(o instanceof List) || this.length !== o.length) {
        return false;
    }
    for(var i=0;i<this.length;i++) {
        if(!equalObjects(this[i], o[i])) {
            return false;
        }
    }
    return true;
};

List.prototype.toString = function() {
    return "[" + this.join(", ") + "]";
};

List.prototype.getText = List.prototype.toString;

List.prototype.toJson = function() {
    return convertToJson(this);
};


List.prototype.toJsonNode = function() {
    return this.map(function(item) { return convertToJsonNode(item); });
};

List.prototype.toDocument = function() {
    var items = this.map(item => {
        if(item && item.toDocument)
            return item.toDocument();
        else
            return item;
    });
    return new List(false, items);
};

List.prototype.toSet = function() {
    return new StrictSet(this);
};

(function() {
    var $isArray = Array.isArray;
    Array.isArray = function(obj) {
        return $isArray(obj) || obj instanceof List;
    }
    var $concat = Array.prototype.concat;
    Array.prototype.concat = function() {
        for(var i=0; i<arguments.length; i++) {
            if(arguments[i] instanceof List)
                arguments[i] = Array.from(arguments[i]);
        }
        return $concat.apply(this, arguments);
    }
})();
