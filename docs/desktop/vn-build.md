---
id: vn-build
title: VN 编译
---

### build
本文档介绍工程编译流程。 

VNDesktop目前接入的UI内核库包括ChromeViews内核和GF内核。  

### Platform list

| Operating System | Architectures    | UI Kernel   | Support System   |
| ---------------- | ---------------- | ----------- | ---------------- |
| Windows          | x86(x64后续支持) | GF          | > xp sp3         |
| Windows          | x86(x64后续支持) | Views       | > xp sp3         |
| macOS            | x64              | Views       | > macos 10.10    |

### Windows

#### Prerequisites
* VS2015

#### Windows下编译（GF内核）:

* 1.SwitchBuildToGF.bat
* 2.VS2015 open Build/VideoNativeForGF.sln
* * 3.build
* 4.VNResourcesPackage.bat
* 5.run

#### Windows下编译（Views内核）:

* 1.SwitchBuildToViews.bat
* 2.VS2015 open Build/VideoNativeForViews.sln
* 3.build
* 4.VNResourcesPackage.bat
* 5.run

### mac

#### mac下编译（Views内核）:

* 1.SwitchBuildToViewsMac.sh
* 2.open VN_Mac_Views.xcworkspace
* 3.build
* 4.VNResourcesPackage.sh
* 5.run

### VN资源和打包

* 1.打包脚本：VNResourcesPackage.sh
* 2.vn资源：Output\Resources\vnapp
* 3.vn打包后的资源包： 
 OutputGF\Resources\vnapp_output  
 OutputViews\Resources\vnapp_output  

 每次修改vn资源后，执行打包脚本，打包脚本会把打包后的资源包copy到对应输出目录的Resources\vnapp_output