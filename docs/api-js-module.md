---
id: api-js-module
title: JS模块
---

0.6版本开始原生支持JS模块。语法上同时支持 CommonJS 和 AMD 两种规范。

## CommonJS

**导入JS模块的方法**

通过调用 `require(module)` 导入，函数返回值为模块exports

参数说明：

+ module：字符串类型，代表需要获取的一个模块的名字。有效输入：模块名，绝对路径，相对路径


```javascript
// main.js
var m = require('./module.js')
//在这里添加模块加载之后的代码
```

**导出JS模块的方法**

```javascript
// module.js
//有两种导出方式，任选其一，如下：

//1. 直接通过exports对象导出
exports.add = function(a,b) {
	return a + b;
}
exports.demo = "module"

//2. 通过修改module.exports导出
module.exports = function() {
	return [1,2,3];
}
```

## AMD

**导入JS模块的方法**

通过调用 `require(modules, callback)` 导入，全部模块异步加载完毕之后，通过callback回调

参数说明：

+ modules：字符串数组，代表需要引入的JS模块。有效输入类型包含：绝对路径；相对路径；模块名字
+ callback：函数，当所有模块加载完之后会回调该函数。函数入参为加载的模块，模块顺序和modules中一致

```javascript
// main.js
require(['./module.js', '/module2.js'], function(m1, m2) {
	//在这里添加模块加载之后的代码
})
```

**导出JS模块的方法**

模块JS通过调用 `define(name?, dependencies?, factory)` 导出，一个JS里只可调用一次define

参数说明：

+ name：字符串，用于指定模块的名字，可缺省。当前该参数仅用于指定别名。
+ dependencies：字符串数组，代表依赖的其他模块，可缺省。数组元素的有效输入类型包含：绝对路径；相对路径；模块名
+ factory：JS对象或函数。用于返回模块加载的结果。类型为JS对象时，直接作为返回结果。如果为函数类型，则会被运行一次，函数的返回值被作为模块加载的结果；函数的入参，为依赖的模块对象


```javascript
// module.js
define('alias_name', ['lib1', './lib2.json'], function(lib1, lib2) {
    return {};
});
```

# 说明

+ JS模块对象加载之后在同一个vnapp内是共享的
+ 绝对路径以vnapp的路径作为根路径
+ 支持加载js或者json。如果加载的是js文件，可以省略js扩展名。如果加载的是json文件，不能省略扩展名
