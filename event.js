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
    console.log('����');
}

function teacher(){
    console.log('�Ͽ�');
}

var bell = new Bell();
//addListener on ����һ��
bell.addListener('ring',student);
bell.on('ring',teacher);

bell.ring();
