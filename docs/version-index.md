---
id: version-index
title: 版本发布信息
---

## 0.2
发布日期：开发中

新增功能：
+ image：增加binderror事件
+ 性能优化：优化了自定义组件的属性传值方式（从copy变成 copy-on-write）
+ 问题修复：修复部分UnsatisfiedLinkException异常

版本变更：

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
