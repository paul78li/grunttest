var area = require('./area');
console.log(area.cal(3,3));
console.log(area.name);

var Person = require('./person');
var person = new Person('TEST1');
var person2 = new Person('DDD');
console.log(person.getName());
person.setName('test');
person.name = 'hijk';
console.log(person.getName());

console.log('--------------');
//定义在原型上，对.name直接修改值，并不能修改原型上的值
console.log(person2.getName())
console.log(person.getName())