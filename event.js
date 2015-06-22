var events = require('events');
var util = require('util');
var EventEmitter = events.EventEmitter;

function Bell(){

    EventEmitter.call(this);
}
//�̳� EventEmitter
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

var bell = new Bell();
//addListener on ����һ��
bell.addListener('ring',student);
bell.on('ring',teacher);

bell.ring();
