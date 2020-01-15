---
id: version-index
title: 版本发布信息
---

## 0.10
发布日期：开发中<br/>

新增功能：

+ 开发工具：脚手架、VS Code插件
+ 页面热更新


## 0.9
发布日期：2020-1-10<br/>

新增功能：

+ CSS: 支持常量。新增函数 var() 和 calc()
+ 组件: 新增流式布局容器 flow-list
+ JSAPI: 新增 vn.updateMediaQuery()
+ 数据: 支持通过 vn.data 查询和监听媒体查询条件
+ 数据: KeyPath支持在方括号中填字符串，如: list['one key']

业务场景：腾讯视频v7.8.8

## 0.8
发布日期：2019-11-21<br/>

新增功能：

+ 组件属性现在支持数据双向穿透，支持子组件内对属性的修改可同步到父容器
+ 增加通用属性 aria-label 以支持无障碍访问
+ 增加通用事件 resize，当元素实际尺寸发生变化时回调该事件
+ 增加通用属性和API以支持接入外部上报框架，如腾讯视频VideoReporter
+ CSS增加 @media 媒体查询
+ CSS现在支持书写顺序覆盖
+ JSAPI: 增加 vn.toUnit() 函数用于长度单位转换; 增加 vn.reportEvent() 用于上报自定义事件
+ DOM: 增加 track() 用于组件上报自定义事件
+ 0.8.5版本开始支持Android的V8 so离线下载

调整：
>
>+ 启用新的离线包文件结构和管理后台
>+ 启用新的打包工具Assembler2

业务场景：腾讯视频v7.7.1


## 0.7
发布日期：2019-9-17<br/>

新增功能：

+ 新增长度单位：dp（等同于Android上的dp和iOS上的point)

调整：
>
>+ rpx长度单位调整：从之前版本的 (1rpx = 屏幕短边宽度 / 750) 修改为 (1rpx = 页面宽度 / 750)。rpx变为页面宽度(1/750)的比例单位。当横竖屏翻转或者页面分屏时，rpx会根据新宽度重新计算和布局。

问题修复：
> Android
>
>+ 修复循环view-pager的setPageIndex在边界时时候的显示异常问题
>+ 修复在Android 8.0上会抛"only fullscreen opaque activities can request orientation portrait"异常的问题


## 0.6
发布日期：2019-8-29 <br/>

新增功能：

+ 加入JS模块化的原生支持：同时支持 CommonJS 和 AMD 两种语法
+ 优化了list滚动和vn:for节点复用的性能
+ 增加Native接口用于预加载.page文件和.js文件以提高页面加载性能

业务场景：腾讯视频v7.5.0


## 0.5
发布日期：2019-7-23 <br/>

新增功能：

+ 单页面现在也会应用 info.json 里的组件相关设置
+ video：增加muted属性；增加userinfo自定义属性
+ image：增加filter属性以支持blur高斯模糊
+ text：支持baseline对齐方式
+ list：滚动导致cell上下屏时，增加了cell的dom对象参数；增加对padding的支持
+ console.log支持打印object和error

> Android
> 
>+ 增加对arm64, x86, x86_64的支持
>+ text的html格式支持color带透明度
>+ 对list的下拉和上拉加入阻尼效果

> iOS
> 
>+ text的html格式增加`<u>`、`<s>`，以及color属性支持RGBA颜色


问题修复：
>+ 修复组件内部的vn:if节点没有更新的问题
>+ 修复图片有时候边缘被裁剪的问题
>+ 修复video的体验问题
>+ 修复view-pager循环模式时更新数据导致当前页面索引值不对的问题
>+ 表达式 == 和 !=，增加了数据类型的强转逻辑
>+ 优化了vn:for语法在list的cell里时的性能问题
>+ 优化了部分代码逻辑的性能

> Android
> 
>+ 修复页面退出时调用gc()导致的ANR问题
>+ 修复多倍图缩放系数计算错误的问题
>+ 修复CSS多选择器不支持多行的问题
>+ 修复在某些手机上无法调试的问题
>+ 修复同方向嵌套view-pager时内部那个无法滑动的问题

> iOS
> 
>+ 修复textarea当max-lines=0时没有自动高度的问题
>+ 修复vn.window.isDialog()返回值错误的问题
>+ 修复了由于新发布iPad设备导致的PPI无法识别从而导致的PT单位的显示问题
>+ 修复text的html标签不能嵌套的问题
>+ 修复更新数据的时候，新增的节点被数据更新两次的问题
>+ 修复scroll-view和list停止滚动后，再次滚动时 deltaX 和 deltaY 变得很大的问题


调整：
> Android
> 
>+ list、scroll-view、view-pager：取消滑动到头之后的动画效果

业务场景：腾讯视频v7.3.0


## 0.4
发布日期：2019-4-9 <br/>

新增功能：

+ 增加Fullscreen API：组件增加 requestFullscreen() 接口；新增 vn.dom.exitFullscreen()、vn.dom.fullscreenElement
+ 增加touch、tap、longpress事件的冒泡和捕获的能力
+ 优化了自定义组件数据传递的性能

问题修复：
> Android
> 
>+ 修复快速转屏导致安全区高度错乱的问题
>+ 修复footer和pull-footer的高度计算不正确的问题
>+ 修复5.0系统上偶现view未渲染的问题

> iOS
> 
>+ 修复text文本行数和实际高度不对应的问题
>+ 修复list动态切换滚动方向时cell显示错乱的问题
>+ 修复增删数据时list显示异常的问题
>+ 修复slot没有指定名字时不展示的问题
>+ 修复list.setFooterRefreshingEnabled(false)之后无法再设置为true的问题

已知问题：

+ 安全区尺寸在转屏后可能不正确 (iOS)


## 0.3
发布日期：2019-3-4 <br/>
Android版本：0.3.0 <br/>
iOS版本：0.3.0

新增功能：

+ 表达式：数组运算符内允许子表达式和字符串。如：array[idx1 + idx2]、array['name']
+ 组件: 增加 touch_move 事件的支持
+ vn: 增加 vn.getSystemInfo() 接口
+ 增强了vnapp的js引擎销毁机制

问题修复：
> Android
> 
>+ 优化属性设置的性能 
>+ 完善camera的角度旋转算法
>+ 修复text某些场景下折行不符合预期的问题
>+ 优化了权限申请提示框

> iOS
> 
>+ 修复某些动画场景导致的crash
>+ 修复html文本的颜色没有生效的问题
>+ NativeWidget增加路径转换接口



## 0.2
发布日期：2019-1-16 <br/>
Android版本：0.2.5 <br/>
iOS版本：0.2.2

新增功能：

+ image：增加binderror事件
+ camera: 新增camera组件和拍照、录视频API
+ DOM: 增加 isAttachedToWindow() 方法用于判断DOM对象是否绑定到了系统View树上
+ vn.data: 现在允许 insert() 方法往数组中间插入数据
+ vn.navigate: navigateTo() 和 navigateBack() 支持animate参数，允许禁用页面切换的动画效果

问题修复：
> 双平台
> 
>+ 修复footer在Anroid、iOS上的表现不一致的问题
>+ 修复了list滑动cell复用时过多数据通知的问题
>+ 完善胡子语法内表达式的类型转换
>+ 修复了KeyPath中包含字符 '-' 时解析错误的问题

> Android
> 
>+ 修复大部分UnsatisfiedLinkException异常
>+ 修复页面隐藏时自动暂停视频的问题
>+ 修复vn.data.query()有时无法返回对象的问题
>+ 修复沉浸式页面状态栏颜色错误的问题
>+ 修复设置任一边的border会被应用到四边的问题
>+ 修复了vn:for指向的数组内子元素不是object时的crash问题
>+ 修复页面原始JSON数据中包含的null值无法查询的问题
>+ 修复了navigateBack()不返回非字符串型的数据的问题
>+ 修复了Native组件为ViewGroup时，其子View没有被正确布局的问题
>+ 修复屏幕不断旋转之后会导致不再响应的问题
>+ 修复 vn.window.getScreenHeight() 返回值不精确的问题

> iOS
> 
>+ 修复某些动画场景导致的crash
>+ 修复某些场景下 text 的 line-height、max-lines 等属性渲染错误的问题
>+ 修复 ViewPager 偶现尺寸为0的问题
>+ 修复表达式处理的一些缺陷
>+ 修复 footer/header 被禁用之后还能继续刷新的问题
>+ 修复 list 的 cell 复用问题
>+ 修复用户设置超大圆角的时候，图片不能正常展示的问题
>+ 修复 scroll-view 在析构之后仍会回调 scroll 事件导致 crash 的问题
>+ 修复 background-stretch-param 参数没有生效的问题


版本变更：

+ 现在不能通过 list.setFooterRefreshingEnabled(true) 使 footer 进入空闲状态，而必须通过 list.setFooterRefreshing(false) 才能使 footer 进入空闲状态
+ 现在vn.data.update() 不能往数组中不存在的索引更新数据
+ 现在dom.getChildElements()只会返回绑定到系统View树上的孩子节点

已知问题：

+ view-pager未根据cellType进行复用，当vn:for数据发生变更后会导致显示不正确



## 0.1
发布日期： 2018-12-17

新增功能：

+ list：支持横向模式下的header和footer。增加pull-footer标签支持拉动刷新模式。scrollToPosition和smoothScrollToPosition增加mode参数。
+ image：宽、高支持auto模式。增加bindload事件。


业务场景：腾讯视频v6.5.0；腾讯视频国际版v1.1.0
