---
id: getting-started-mac
title: 开始一个新的工程（Mac）
---

### 1.拉取代码

https://git.code.oa.com/VideoNative/VideoNativeDesktop   

### 2.[Mac下编译VN](desktop/vn-build)

### 3.[Mac下VN打包](desktop/vn-package)

### 4.配置工程

```groovy

接口目录： VideoNativeDesktop\Interface   
dylib:   
其他资源文件：《待补充》

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