---
id: doc-framework
title: 框架实现
---

### 简介
* VNDesktop是一款桌面端的小程序UI开发框架，同时具备超native级别性能，同时跨多端、跨多渲染内核的通用小程序渲染框架。

#### 详细介绍

* VideoNative是腾讯视频团队完全自研的一套高性能，跨平台的开发框架，让开发可以像写小程序一样写应用软件。

* VNDesktop是VideoNative的桌面端版本，基于VideoNative和跨平台UI内核库（ChromeViews或GF），能跨所有平台（包括所有桌面平台），目前业内首款且唯一一款做到windows端全面兼容的（支持XP和32位系统），让开发可以像写小程序一样写应用软件的（native级别小程序框架方案），一款的UI开发框架。

* VNDesktop还是一款可跨多端、跨多渲染内核的通用小程序渲染框架，支持接入任何端的任何UI引擎，可以与任何UI引擎无缝融合，并为之提供小程序框架支持能力。

---

### VNDesktop目前接入的UI内核库包括ChromeViews内核和GF内核。

#### GF内核
* GF内核：腾讯内部开源的Windows端UI渲染库，广泛用于腾讯大部分Windows端软件。  
* VNDesktopGF版本：基于VN和GF，是VN的一个Windows端跨平台实现，主要提供给腾讯内部以GF作为渲染内核的产品，框架又相当于GF的扩展层，可以做到所有基于GF项目的无缝融合和接入，支持Windows所有系统环境。

#### ChromeViews内核
* ChromeViews内核：谷歌浏览器的跨平台UI渲染库。  
* 基于VN和ChromeViews，能跨所有平台（目前只实现了桌面平台，windows和mac和linux，后续可接入Android和IOS端），目前业内首款且唯一一款做到windows端全面兼容的（支持XP和32位系统），一款的UI开发框架。

---

### 特性
* 跨平台：通用的桌面端跨平台能力的框架(window/mac/linux)，并做到最小平台差异
* 低成本：小程序框架，最大降低native开发成本
* 热更新：热更新和快速迭代
* 高性能：提供类本地化的高性能能力
* 设备兼容性：支持所有系统环境，具有很高的设备兼容性
* 低维护：项目跨端、跨渲染内核，能同时支持多内核渲染框架，通用胶水层接口对象做到快速衔接能力，VNDesktop几乎所有代码跨所有平台编译，做到多端多内核代码完美对齐，框架维护工作量小

---

### VNDesktop运行环境

项目工程	  |        运行环境	      |        逻辑层    |      渲染层        |      支持进度
---          |         ---          | ---             | ---        | ---
VNGF         |    windows	        |	V8              |            GF        |            已支持
VNViews      |    windows	        |	V8	        |           ChromeViews        |            已支持
VNViews      |    mac	            |	V8/JSC	        |            ChromeViews        |            已支持
VNViews      |    Linux	            |	V8	        |            ChromeViews        |            后续支持

---

### VNDesktop框架设计

![](https://videonative.io/img/framework_2.png)

---

### VNDesktop低维护优势：
* 项目虽然跨多端、跨多渲染内核，但通过【渲染通用内核胶水层】做到接入任何UI内核的快速衔接能力，框架维护工作量小（只需要维护10个胶水层接口对象的实现即可）。   
* VNDesktop框架下全部c++化，所有代码跨所有平台编译，做到多端多内核代码完美对齐，任何优化全内核生效。   
* 通过渲染通用内核胶水层，VN后续还会接入UIKit、AppKit、Flutter、AndroidNative   
* 跨多端、跨多渲染内核的通用小程序渲染框架设计：项目支持接入任何端的任何UI引擎，可以与任何UI引擎无缝融合，并提供小程序框架支持能力。   

---

### VNDesktop性能优势：

![](https://videonative.io/img/framework_0.png)
![](https://videonative.io/img/framework_1.png)

* VN致力于高性能，设计上规避了Weex/RN框架的性能瓶颈，将所有的实现尽可能的放在Native实现。包括：数据的解析和绑定、Dom的构建、表达式计算、CSS的解析和匹配、 Yoga布局、RenderTree构建、ViewTree构建等。
* 相同的计算量下，Native比JS执行效率更高。
* 大量数据改变的时候，因为VN的Dom树和数据都是在Native侧维护，避免了大量Js和Native的交互。
* GF内核和ChromeViews内核，都支持开启UI渲染硬件加速。
* VN的Native性能优化空间更大。
* jce二进制预打包，避免了xml，css等运行时解析耗时，加快了启动速度。

### VNDesktop现有业务性能测试：
* 硬件配置：CPU：i7-7700 3.60GHz，内存：16G
* 完整绘制：客户端皮肤浏览窗口在XXX*XXX下的所有可见元素全部重绘一次
* 最大帧率测试：开启1ms的高帧率定时器，重绘最外层窗口，每一帧做完整绘制，测试极限相应帧率（1000次平均）

![](https://videonative.io/img/framework_3.png)

* VNDesktop比Native在首次启动耗时快2倍左右，再次启动耗时快35%左右。说明VNDesktop的界面解析更加精简，内部Yoga排布、CSS的解析、控件重绘次数等优化，大大精简了原Native布局层次，减少了界面解析和各类冗余排布和冗余绘制耗时，加快了启动速度。
* VNDesktop启动耗时整体比页面快2-3倍左右。
* VNDesktop比Native在按钮点击耗时略高一点点，因为涉及JS交互。
* VNDesktop跟Native在绘制耗时和最大帧率上面，基本保持一致。

---

### [VNDesktop跟Native交互框架设计](doc-connection)

