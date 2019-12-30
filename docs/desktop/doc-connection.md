---
id: doc-connection
title: VNDesktop跟Native交互框架设计
---

## 

### 概述

#### 提供四种交互能力    
| connection           | Use Scene                                       |
| -------------------- | ----------------------------------------------- |
| native代码接口注入    | 单业务注入的一些定制接口                          |
| ES6 export js module | 注入的一些通用业务接口（登录、统计）               |
| requireJsModule      | 类似ES6 export js module的实现                   |
| requireXPComModule   | 给windows端业务做的com组件自注册接口               |
| requireNodejsModule  | 提供所有Nodejs接口的更强大的本地化库支持能力        |

#### * native代码接口注入方案   
使用示例  （待补充）   
技术方案 （待补充）       

#### * ES6 export js module 注入通用全局接口方案   
（待补充）   

#### * CommonJS设计   
包括下面三个方案按优先级加载   

框架设计图：   

#### * CommonJS requireJsModule   
（待补充）   

#### * CommonJS requireXPComModule   
（待补充）   

#### * CommonJS requireNodejsModule   
（待补充）   
