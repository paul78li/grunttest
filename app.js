var area = require('./area');
console.log(area.cal(3,3));
console.log(area.name);

var Person = require('./person')
var person = new Person('TEST1');
console.log(person.getName());
person.setName('test');
console.log(person.getName());