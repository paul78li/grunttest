var events = require('events');
var util = require('util');
var EventEmitter = events.EventEmitter;

function Bell(){
    EventEmitter.call(this);
}
//继承 EventEmitter
util.inherits(Bell,EventEmitter);

Bell.prototype.ring = function(){
    this.emit('ring');
}

function student(){
    console.log('Listen');
}

function teacher(){
    console.log('go');
}

function master(){
    console.log('go master');
}

var bell = new Bell();
//addListener on 作用一样
bell.addListener('ring',student);
bell.on('ring',teacher);
bell.once('ring',master);
console.log(bell.listeners('ring'));
bell.ring();
console.log(bell.listeners('ring'));
bell.ring();
console.log(bell.listeners('ring'));
