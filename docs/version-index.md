---
id: version-index
title: 版本发布信息
---

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
>+ 优化属性设置的性能 
>+ 完善camera的角度旋转算法
>+ 修复text某些场景下折行不符合预期的问题
>+ 优化了权限申请提示框

> iOS
>+ 修复某些动画场景导致的crash
>+ 修复html文本的颜色没有生效的问题
>+ NativeWidget增加路径转换接口


业务场景：


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
>+ 修复footer在Anroid、iOS上的表现不一致的问题
>+ 修复了list滑动cell复用时过多数据通知的问题
>+ 完善胡子语法内表达式的类型转换
>+ 修复了KeyPath中包含字符 '-' 时解析错误的问题

> Android
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
>+ 现在不能通过 list.setFooterRefreshingEnabled(true) 使 footer 进入空闲状态，而必须通过 list.setFooterRefreshing(false) 才能使 footer 进入空闲状态
>+ 现在vn.data.update() 不能往数组中不存在的索引更新数据
>+ 现在dom.getChildElements()只会返回绑定到系统View树上的孩子节点

已知问题：
+ view-pager未根据cellType进行复用，当vn:for数据发生变更后会导致显示不正确

业务场景：


## 0.1
发布日期： 2018-12-17

新增功能：
+ list：支持横向模式下的header和footer。增加pull-footer标签支持拉动刷新模式。scrollToPosition和smoothScrollToPosition增加mode参数。
+ image：宽、高支持auto模式。增加bindload事件。

版本变更：

已知问题：

业务场景：腾讯视频v6.5.0；腾讯视频国际版v1.1.0
