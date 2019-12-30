---
id: vn-interface
title: VNDesktop 接入接口文档
---

## LoadVideoNativeDll.h
### 代码接口：
https://git.code.oa.com/VideoNative/VideoNativeDesktop/blob/master/VideoNativeDesktop/Interface/LoadVideoNativeDll.h   

### 主要接口和示例：
#### void VN_InitViewsContentClient(int argc, const char** argv, void (*pMain)(), void *app_delegate);   

#### void VN_InitHybridViewsContentClient(int argc, const char** argv, void (*pMain)());   


#### bool VN_GetQVNVideoNative(IQVNVideoNative **pQVNVideoNative);   
This function should be called on the main application thread when the application start.    
It will initialize and return a global IQVNVideoNative instance object,    
and use this global instance to load and close VideoNative page or app.   

```groovy
#include "LoadVideoNativeDll.h"
#pragma comment(lib, "VideoNative.lib")
CComPtr<IQVNVideoNative> vn;
VN_GetQVNVideoNative(&vn);
```

#### void VN_InitPictureDataManager(LPCWSTR sqliteDBPath, LPCWSTR tableName);   

#### void VN_SetCookieFilePath(const char *cookieFilePath); // utf8 coding   

#### void VN_InitVNStorage(const char *sqliteDBPath, const char* storageTable); // utf8 coding   

#### bool VN_CreateDataBuffer(IDataBuffer** ppBuffer);   
 
#### void VN_SetExternalDataFetcher(const char* key, ExternalDataCallback callback); // utf8 coding   

#### BOOL VN_GetExternalManager(IVNExternalManager** pExternalManager);   

---

## IQVNVideoNative.h
### 代码接口：
https://git.code.oa.com/VideoNative/VideoNativeDesktop/blob/master/VideoNativeDesktop/Interface/VideoNative/IQVNVideoNative.h   

```groovy 
    /**
    * IQVNVideoNative is a global instance object, created by VN_GetQVNVideoNative, use to load and close VideoNative page or app.
    * IQVNVideoNative 是一个单例类，主要提供获取 VNApp 和 VNPage 的接口，以及提供全局 JSApi 、以及 Native 组件的注册
    **/
```

```groovy
    /**
    * 根据 AppID 从指定的目录获取 App
    * @param appId app对应id
    * @param rootUrl 根目录，图片资源、跳转链接等路径会以此路径做转换
    * @param[out] pVNApp对应的VNApp
    **/
    virtual void STDMETHODCALLTYPE getVNApp(const std::string &appId, const std::string &rootUrl, IQVNApp **pVNApp) = 0;

    /**
    * 销毁app
    **/
    virtual void STDMETHODCALLTYPE closeApp(const std::string& appId) = 0;

    /**
    * 销毁所有app
    **/
    virtual void STDMETHODCALLTYPE closeApps() = 0;

    /**
    * 加载App单页面，该页面具有 vn.navigate、vn.app 等能力
    * @param appId AppId
    * @param rootUrl 根目录，图片资源、跳转链接等路径会以此路径做转换
    * @param pageUrl 页面相对于 RootUrl 的路径
    * @param callback 异步回调
    **/
    virtual void STDMETHODCALLTYPE loadAppPage(const std::string & appId, const std::string &rootUrl, const std::string &pageUrl, void* parentCtl, IVNLoadPageCallback *callback) = 0;

    /**
    * 加载单页面。不同于通过 VNApp 加载页面，本方法不需要 AppId，而是直接通过路径来加载页面
    * vn.navigate、vn.app是无法运作的。请强持有回调中的 IQVNPage 对象
    * @param rootUrl 根目录，图片资源、跳转链接等路径会以此路径做转换
    * @param pageUrl 页面相对于 RootUrl 的路径
    * @param callback 异步回调
    **/
    virtual void STDMETHODCALLTYPE loadSinglePage(const std::string &rootUrl, const std::string &pageUrl, void* parentCtl, IVNLoadPageCallback *callback) = 0;

    /**
    * 注册 Native 组件
    * @param widgetName 组件名称
    * @param widgetClass 组件类名
    **/
    virtual void STDMETHODCALLTYPE registerWidget(const std::string &widgetName, const std::string &widgetClass) = 0;

    /**
    * 获取当前 Native 组件映射表
    **/
    virtual std::unordered_map<std::string, std::string>* STDMETHODCALLTYPE getNativeWidgetMap() = 0;

    /**
    * 设置基础组件拦截器
    **/
    virtual void STDMETHODCALLTYPE setInjector(IVNInjector *injector) = 0;

    /**
    * 获取拦截器
    **/
    virtual BOOL STDMETHODCALLTYPE getInjector(IVNInjector** pInjector) = 0;

    /**
    * 开启V8调试
    **/
    virtual void STDMETHODCALLTYPE enableDebugger(bool enable) = 0;
```

---

## IQVNApp.h
### 代码接口：
https://git.code.oa.com/VideoNative/VideoNativeDesktop/blob/master/VideoNativeDesktop/Interface/VideoNative/IQVNApp.h   

```groovy 
    /**
    * IQVNApp 是一组 VideoNative 页面构成的集合，拥有 AppId 等属性，
    * 每个 IQVNApp 的存储空间是相互隔离的（可以类比下小程序），
    * IQVNApp 提供直接进入指定 VideoNative 页面，以及获取指定某个单页面的能力。
    * IQVNApp 的特点是可以做到业务隔离，同时相比 IQVNApp，可以更方便地实现多个页面之间共享数据，简化页面之间的跳转逻辑
    **/
```

```groovy
    /**
    * 初始化一个app
    * @param appid 当前app的id
    * @param dir app相对路径
    **/
    virtual void STDMETHODCALLTYPE initWithAppId(const std::string &appid, const std::string &dir) = 0;

    /**
    * 外部调用关闭 App，用于 VN 内部进行资源清理
    * 比如外部强制访问 NavigationController 然后清理其堆栈
    * 此时 VN 是不知晓的，需要调用该接口进行通知 VN
    **/
    virtual void STDMETHODCALLTYPE closeApp() = 0;

    /**
    * 启动一个app的页面
    * @param parentCtl NativeController，作为跳转App的起点，GF实现上，就是IGFFrame *
    * @param pageUrl 页面 URL
    * @param animation 是否需要 Push 动画，默认需要
    **/
    virtual void STDMETHODCALLTYPE startApp(void * parentCtl, const std::string &pageUrl, BOOL animation = TRUE) = 0;

    /**
    * 请求一个 App 页面
    * 请强持有回调中的 QVNPage 对象，否则会被释放
    * @param parentCtl NativeController，作为跳转App的起点，其生命周期必须长于callback回调
    * @param pageUrl 页面 URL
    * @param callback 调用acquirePage后的回调函数
    **/
    virtual void STDMETHODCALLTYPE acquirePage(void* parentCtl, const std::string& pageUrl, IVNAcquirePageCallback* callback) = 0;

    /**
    * 设置当前app的IQVNAppDelegate访问器
    **/
    virtual void STDMETHODCALLTYPE setDelegate(IQVNAppDelegate* delegate) = 0;

    /**
    * 获取当前app的IQVNAppDelegate访问器
    **/
    virtual void STDMETHODCALLTYPE getDelegate(IQVNAppDelegate** pDelegate) = 0;

    /**
    * 获取当前appinfo
    **/
    virtual void STDMETHODCALLTYPE getAppInfo(IVNAppInfo **appInfo) = 0;
```

---

## IQVNPage.h
### 代码接口：
https://git.code.oa.com/VideoNative/VideoNativeDesktop/blob/master/VideoNativeDesktop/Interface/VideoNative/IQVNPage.h   
   
```groovy 
    /**
    * IQVNPage 是业务开发的基本单位，每个 Page 由 vnml/vnss/js/json 来描述
    * IQVNPage 暴露接口可以让 Native 开发者直接获取框架渲染成功后的 View；注册该页面特有的 JSApi，设置该页面的安全区等等。
    **/
```

```groovy
	/** 
	 * 获取Page的Native View
	 * @return [Windows GF Implement] 返回的IGFFrame的Reference，外部需要用CComptr进行管理
	 **/
	virtual void* STDMETHODCALLTYPE getView() = 0;

	/**
	 * 获取当前page是否正在显示
	 * @return true表示正在显示；false表示隐藏
	 **/
	virtual bool STDMETHODCALLTYPE isPageShowing() = 0;

	/**
	 * 调用页面js对象的函数
	 *
	 * @param functionName 全局空间函数名
	 * @param params 函数调用参数，params内参数需要调用者手动释放
	 * @return 调用结果需要调用者手动释放
	 **/
	virtual IQVNJsValue* STDMETHODCALLTYPE callJsFunction(const char* functionName, const std::vector<IQVNJsValue *> &params) = 0;

	/**
	 * 向页面注入局部可用的JS API接口，注入到 name 指定的空间下。name 可以为 "a.b.c" 的形式。
	 * 这里的对象会屏蔽掉全局的同名对象，需避免和全局对象同名
	 * 这个方法应当在得到VNPage对象后的第一时间调用，否则可能无法成功注入。是否注入成功，请通过返回值判断 !!!
	 *
	 * @param name 不能为空字符串
	 * @return true表示注入成功；false表示注入失败
	*/
	virtual bool STDMETHODCALLTYPE addJavascriptInterface(QVNJSHandlerProtocol * handler, const char* name) = 0;

	/**
	 * 获取当前Page的Context, 外部不可释放
	 * @ret Page对象对应Context的VN包装
	 **/
	virtual IQVNJsContext * STDMETHODCALLTYPE GetJsContext() = 0;

	/**
	 * 设置page本地代码回调
	 * @param callback IVNPageNativeCallback回调
	 **/
	virtual void STDMETHODCALLTYPE setVNPageNativeCallback(IVNPageloadInfoCallback * callback) = 0;

	/**
	 * 关闭页面，关闭时会同步回调OnVNPageUnload
	 * OnVNPageUnload回调时，Page拥有者可以异步清理Page对象，不可以同步清理，会导致消息队列异常
	 **/
	virtual void STDMETHODCALLTYPE close() = 0;

	/**
	 * 获取page路径
	 **/
	virtual std::string STDMETHODCALLTYPE GetPageUrl() = 0;

	/**
	 * 获取page对应vnapp路径
	 **/
	virtual std::string STDMETHODCALLTYPE GetVNAppUrl() = 0;
```

---
