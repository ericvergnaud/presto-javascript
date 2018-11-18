function $Root() {
    this.mutable = false;
    this.storable = this.storable || null;
    this.dbId = null;
    this.category = [];
    return this;
}

$Root.prototype.instanceOf = function(type) {
    return this.category.indexOf(type)>=0;
};

$Root.prototype.dbIdListener = function(dbId) {
    this.dbId = dbId;
};

$Root.prototype.getAttributeNames = function() {
    return Object.getOwnPropertyNames(this).filter(function(name) {
        return name!=="dbId" && name!=="mutable" && name!=="storable" && name!=="category" && typeof(this[name])!='function';
    }, this);
};

$Root.prototype.toString = function() {
    var names = this.getAttributeNames();
    var vals = names.map(function (name) {
        return name + ':' + this[name];
    }, this);
    return "{" + vals.join(", ") + "}";
};

$Root.prototype.getText = $Root.prototype.toString;


$Root.prototype.setMember = function(name, value, mutable, isEnum) {
    if(!this.mutable || (value && value.mutable && !mutable))
        throw new NotMutableError();
    this[name] = value;
    if(this.storable) {
        if(isEnum && value)
            value = value.name;
        this.storable.setData(name, value);
    }
};

$Root.prototype.fromStored = function(stored) {
    this.dbId = stored.dbId;
    var names = this.getAttributeNames();
    names.forEach( function(name) {
        var value = stored.getData(name);
        var method = this["load$" + name];
        this[name] = method ? method(value) : value;
    }, this);
};

$Root.prototype.collectStorables = function(storablesToAdd) {
    if(this.storable) {
        this.storable.getOrCreateDbId();
        storablesToAdd.add(this.storable);
    }
    var names = this.getAttributeNames();
    names.forEach(function(name) {
        var value = this[name];
        if(value && value.collectStorables)
            value.collectStorables(storablesToAdd);
    }, this);
};

$Root.prototype.collectDbIds = function(idsToDelete) {
    if(this.dbId)
        idsToDelete.add(this.dbId);
};

exports.$Root = $Root;