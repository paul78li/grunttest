var http = require('http');
//ֻ������һ�Σ����һ��  init
var from = require('./require_from');
//������ò���������� require_from�� �� init
var from1 = require('./require_from');
console.log(from.name);
from.say();
from.say();

//�����ļ����·�����õ�����·��
var path = require.resolve('./require_from');
console.log(path);

//�鿴�����˶���ģ��
console.log(require.cache);

//�ӻ���ɾ��ģ��
delete require.cache[path];
console.log(require.cache);

console.log(__dirname);
console.log(__filename);