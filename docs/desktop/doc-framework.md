---
id: doc-framework
title: 框架实现
---

### 简介：
* VNDesktop是VideoNative的桌面端版本，基于VideoNative和跨平台UI内核库（ChromeViews或GF），能跨所有平台（包括所有桌面平台），目前业内首款且唯一一款做到windows端全面兼容的（支持XP和32位系统），让开发可以像写小程序一样写应用软件的（native级别小程序框架方案），一款的UI开发框架。

---

### VNDesktop目前接入的UI内核库包括ChromeViews内核和GF内核。

#### GF内核
基于VN和GF，是VN的一个Windows端跨平台实现，主要提供给腾讯内部以GF作为渲染内核的产品，框架又相当于GF的扩展层，可以做到所有基于GF项目的无缝融合和接入，支持Windows所有系统环境。

#### ChromeViews内核
基于VN和ChromeViews，能跨所有平台（目前只实现了桌面平台，windows和mac和linux，后续可接入Android和IOS端），目前业内首款且唯一一款做到windows端全面兼容的（支持XP和32位系统），一款的UI开发框架。

#### 后续还会接入：mac端的Appkit内核渲染。

---

### 特性：
* 跨平台：通用的桌面端跨平台能力的框架(window/mac/linux)，并做到最小平台差异
* 低成本：小程序框架，最大降低native开发成本
* 热更新：热更新和快速迭代
* 高性能：提供类本地化的高性能能力
* 设备兼容性：支持所有系统环境，具有很高的设备兼容性

---

### 多内核渲染框架简介：
* 所有代码跨平台编译。
* 代码多端完美对齐，框架维护工作量小。


