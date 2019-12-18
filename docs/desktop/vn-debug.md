---
id: vn-debug
title: VN 调试
---

## 技术实现文档：
http://km.oa.com/articles/show/408853 

## 主要功能：
支持js断点调试

## 使用方式：

### 1.启动客户端，调用EnableDebugger接口，打开vn页面，客户端会卡住

### 2.浏览器打开chrome://inspect/#devices

### 3.增加localhost:7777端口
![image.png](/uploads/BFD35731272F4DFE9D9A8DF7EC30F8E6/image.png)

### 4.增加^internal_script_pagejsobject$
![image.png](/uploads/F8BC67022DAF4FE0B9EC210E2AFABBC7/image.png)

### 5.开始调试
![image.png](/uploads/8EFFF0E7BCD84E159986D0581547A00B/image.png)

