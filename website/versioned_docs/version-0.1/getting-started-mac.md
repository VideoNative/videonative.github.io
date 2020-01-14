---
id: version-0.1-getting-started-mac
title: 开始一个新的工程（Mac）
original_id: getting-started-mac
---

### Git下完整demo示例工程：   
全部demo示例：   
https://git.code.oa.com/VideoNative/VideoNativeDesktop/tree/master/VideoNativeDesktop/DemoForViews   
动态链接示例demo：   
https://git.code.oa.com/VideoNative/VideoNativeDesktop/tree/master/VideoNativeDesktop/DemoForViewsMac   
macapp包的测试demo：   
https://git.code.oa.com/VideoNative/VideoNativeDesktop/tree/master/VideoNativeDesktop/demo_macapp    

### 1.拉取代码

https://git.code.oa.com/VideoNative/VideoNativeDesktop   

### 2.工程编译和依赖

[Mac下编译VN](desktop/vn-build)   

### 3.资源包打包

[Mac下VN打包](desktop/vn-package)

### 4.新建工程并配置工程环境

```groovy
* 头文件目录：   
VideoNativeDesktop\Interface   

* 依赖文件：   
libVideoNative.dylib;   
natives_blob.bin;   
snapshot_blob.bin;   
icudtl.dat;   
ui_test.pak;   
content_resources.pak;   

* Header Search Paths   
"$(SRCROOT)/../Interface"   
"$(SRCROOT)/../Interface/cross_platform"   
"$(SRCROOT)/../Interface/VideoNative"   
"$(SRCROOT)/../Interface/VideoNative/Input"   

* Library Search Paths   
"$(SRCROOT)/../Output/Release"   

* Preprocessor Macros   
VN_USE_VIEWS    

* Link Binary With Libraries   
libVideoNative.dylib   
```

### 5.添加初始化代码

```groovy
#include "LoadVideoNativeDll.h"
#pragma comment(lib, "VideoNative.lib")

CComPtr<IQVNVideoNative> vn;
VN_GetQVNVideoNative(&vn);
```

### 6.打开一个页面

```groovy
CComPtr<IQVNApp>  g_app;
vn->getVNApp("97", "{apppath}/Resources/vnapp_output/97", &g_app);
g_app->startApp(nullptr, "vn://index/index");
```

### 7.其他接口文档和示例

[VNDesktop 接口文档](desktop/vn-interface)