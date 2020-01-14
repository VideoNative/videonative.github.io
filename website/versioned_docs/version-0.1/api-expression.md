---
id: version-0.1-api-expression
title: VN 表达式
original_id: api-expression
---

VN与其他跨终端框架的一个区别是VN框架在JS侧没有FrameWork。Dom树展开，Css匹配，数据绑定，表达式计算等等操作都在Native侧执行。所以，我们的表达式并不像大多数开源框架那样支持JS的表达式语法。下面介绍一下VN表达式目前支持的能力。

## 数据表示

数据类型 | 样例 | 说明
--- | --- | ---
Boolean | true,false |
Integer | 1,5 |
Long | 1L,5l |
Double | 1d,5D |
String | 'Hello',"World" |
ID     | dataArray[5],dataObj.name | 这些标识符会在表达式运算的时候从页面提供的json数据中获取实际的取值。

## 运算符

运算类型 | 样例 | 说明
--- | --- | ---
+,-,*,/,% | 1+2 | 算数运算符支持数字类型的数据运算
(,) | (1+2)*3 | 用于提高运算优先级
&lt;,&lt;=,&gt;,&gt;=,==,!=,&vert;&vert;,&& | 2&lt;5 | 逻辑运算符,运算结果是Boolean类型
&vert;,&,~,^| 2&5 |  位运算符
: ?| 2>3 ? 2:3 |  三元运算符

## 函数

函数类型 | 样例 | 入参 | 返回值
--- | --- | --- | ---
max| max(1,2) | 数值类型 | 返回其中最大的一个
min | min(1,2) | 数值类型 | 返回其中最小的一个
trim | trim("&nbsp;&nbsp;&nbsp;Hello World&nbsp;&nbsp;&nbsp;") | 一个字符串 | 返回去掉两端空格后的字符串
toRpx | toRpx("15pt") | 单位字符串 | 返回转化为RPX单位的float值