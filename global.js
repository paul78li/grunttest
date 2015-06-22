//不写 var，就是全局的。成为 global 的属性
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

//5秒后中断
setTimeout(function(){
    inte.unref();
},5000);

//6秒后启动
setTimeout(function(){
    inte.ref();
},6000);
