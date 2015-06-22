var name,_name
var Person = function(pname){
    _name = pname;
}

Person.prototype.getName = function(){
    return _name;
}

Person.prototype.setName = function (pname) {
    _name = pname;
}

Person.prototype.name = name;
module.exports = Person;