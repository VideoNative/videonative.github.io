---
id: getting-started-windows
title: 开始一个新的工程（Windows）
---

### Git下完整demo示例工程：   
https://git.code.oa.com/VideoNative/VideoNativeDesktop/tree/master/VideoNativeDesktop/DemoForGF    
https://git.code.oa.com/VideoNative/VideoNativeDesktop/tree/master/VideoNativeDesktop/DemoForViews   

### 1.拉取代码

https://git.code.oa.com/VideoNative/VideoNativeDesktop   

### 2.工程编译和依赖

[Windows下编译VN](desktop/vn-build)

### 3.资源包打包

[Windows下VN打包](desktop/vn-package)

### 4.新建工程并配置工程环境

```groovy

接口目录： VideoNativeDesktop\Interface   
lib目录： VideoNativeDesktop\OutputGF\Lib   

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

《待补充》  
