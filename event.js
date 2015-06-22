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
    console.log('student');
}

function teacher(){
    console.log('teacher');
}

function master(){
    console.log('master');
}

var bell = new Bell();
//Ĭ�ϰ�10���¼�
bell.setMaxListeners(5);

bell.on('newListener',function(e,func){
    console.log('newListener'+e+func);
});
bell.on('removeListener',function(e,func){
    console.log('removeListener'+e+func);
});

//addListener on ����һ��
bell.addListener('ring',student);
bell.on('ring',teacher);
bell.once('ring',master);



console.log(EventEmitter.listenerCount(bell,'ring'));
console.log(bell.listeners('ring'));
bell.ring();
console.log(bell.listeners('ring'));
bell.ring();
console.log(bell.listeners('ring'));

bell.removeListener('ring',teacher);
bell.ring();

bell.removeAllListeners();
console.log('after remove all')
bell.ring();
