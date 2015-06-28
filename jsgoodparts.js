//定义自己的唯一全局变量标识
var myApp = {};
myApp.test = {
    first_name:'paul',
    last_name:'li'
};
myApp.test.age=10;
console.log(myApp.test);
delete myApp.test.age;
for(var prop in myApp.test){
    console.log(prop)
}

//调用模式 四种模式：方法调用模式；函数调用模式；构造器调用模式；apply调用模式 p42
