---
id: version-0.1-doc-connection
title: VNDesktop Js跟Native交互框架设计
original_id: doc-connection
---

## 

### 概述

#### 提供四种交互能力    
| Js跟Native交互       | Use Scene                                       |
| -------------------- | ----------------------------------------------- |
| native代码接口注入    | 单业务注入的一些定制接口                          |
| ES6 export js module | 注入的一些通用业务接口（登录、统计）               |
| requireJsModule      | 类似ES6 export js module的实现                   |
| requireXPComModule   | 给windows端业务做的com组件自注册接口               |
| requireNodejsModule  | 提供所有Nodejs接口的更强大的本地化库支持能力        |

#### * native代码接口注入方案   
##### 使用示例   
（待补充）         

#### * ES6 export js module 注入通用全局接口方案   
（待补充）   

#### * CommonJS设计   
包括下面三个方案按优先级加载   

##### 框架设计图   
![](https://videonative.github.io/img/framework_commonjs.png)   

#### * CommonJS requireJsModule   

##### 框架设计图   
同上 

#### * CommonJS requireXPComModule   

![](https://videonative.github.io/img/framework_requireNative.png)   

#### * CommonJS requireNodejsModule   

一个比较简单外挂nodejs API的方案，跑两个js运行时环境，nodejs的运行时环境只干接口提供   
![](https://videonative.github.io/img/framework_requirenodejs.png)   
![](https://videonative.github.io/img/framework_requirenodejs2.png)   
