//��д var������ȫ�ֵġ���Ϊ global ������
name='paul ';
var age = 10;
console.log(global.name);

var say = function say(msg){
    console.log(msg);
}

//setInterval(say,100,'hi');

var timer = setTimeout(say,999,'hi');

//setTimeout(function(){
//    clearTimeout(timer);
//},1000);

var inte = setInterval(say,1000,'hi hi');

//5����ж�
setTimeout(function(){
    inte.unref();
},5000);

//6�������
setTimeout(function(){
    inte.ref();
},6000);
