---
id: vn-build
title: VN 编译
---

### build
本文档介绍工程编译流程。 

VNDesktop目前接入的UI内核库包括ChromeViews内核和GF内核。  

---

### Platform list

| Operating System | Architectures    | UI Kernel                       | Support System   |
| ---------------- | ---------------- | ------------------------------- | ---------------- |
| Windows          | x86(x64后续支持) | GF                              | >= xp sp3         |
| Windows          | x86(x64后续支持) | Views(Chromium Version 49)      | >= win7(xp后续支持) |
| macOS            | x64              | Views(Chromium Version 49)      | >= macos 10.10    |

---

### Windows
#### Prerequisites
* Visual Studio 2015 update 3 or newer
* git

#### Windows下编译（GF内核）:

* 1.更新子模块：HummerSDK   
git submodule update --remote HummerSDK  

* 2.run SwitchBuildToGF.bat  

* 3.open Build/VideoNativeForGF.sln and build  

* 4.VN资源打包：VNResourcesPackage.bat  
#### [VN资源和打包](vn-package)  

* 5.run

#### Windows下编译（Views内核）:

* 1.更新子模块：ChromiumViewsWin  
git submodule update --remote ChromiumViewsWin   

* 2.run SwitchBuildToViews.bat

* 3.open Build/VideoNativeForViews.sln and build

* 5.VN资源和打包：VNResourcesPackage.bat  
#### [VN资源和打包](vn-package)

* 6.run

---

### mac

#### Prerequisites  
* Xcode >= 9, 64-bit  
* Python 3  


#### mac下编译（Views内核）:

* 1.更新子模块：ChromiumViewsMac  
git submodule update --remote ChromiumViewsMac

* 2.SwitchBuildToViewsMac.sh

* 3.open VN_Mac_Views.xcworkspace and build  

* 4.VN资源和打包：VNResourcesPackage.sh  
#### [VN资源和打包](vn-package)

* 5.run

---
