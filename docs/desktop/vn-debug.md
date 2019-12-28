---
id: vn-debug
title: VNDesktop 调试
---

## 主要功能：   
VNDesktop的V8脚本引擎支持chrome开发者工具做js断点调试   

## 实现的核心流程：     
1.v8Inspector接口实现嵌入式v8内核和websocket交互。   
2.websocket联通v8Inspector和chrome开发者工具，并实现所有交互协议。   

## 使用方式：

### 1.启动客户端，调用EnableDebugger接口，打开vn页面，客户端会卡住

### 2.浏览器打开chrome://inspect/#devices

### 3.增加localhost:7777端口

![](https://videonative.io/img/vn_debug_1.png)

### 4.增加^internal_script_pagejsobject$

![](https://videonative.io/img/vn_debug_2.png)

### 5.开始调试

![](https://videonative.io/img/vn_debug_3.png)
