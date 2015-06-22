var http = require('http');
//只会引用一次，输出一次  init
var from = require('./require_from');
//多次引用并不会多次输出 require_from中 的 init
var from1 = require('./require_from');
console.log(from.name);
from.say();
from.say();

//输入文件相对路径，得到绝对路径
var path = require.resolve('./require_from');
console.log(path);

//查看缓存了多少模块
console.log(require.cache);

//从缓存删除模块
delete require.cache[path];
console.log(require.cache);

console.log(__dirname);
console.log(__filename);