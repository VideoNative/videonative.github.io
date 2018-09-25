# 开始一个新的工程（Android）

## 新建一个工程（[下载地址](https://share.weiyun.com/5z5MUnc)）

* 新建工程

## 添加aar包依赖

VideoNative依赖于以下aar包。
```java
implementation(ext: 'aar', name: 'IRecyclerview-release')
implementation(ext: 'aar', name: 'ImageLib-release')
implementation(ext: 'aar', name: 'InterUtils-release')
implementation(ext: 'aar', name: 'Utils-release')
implementation(ext: 'aar', name: 'injector-release')
implementation(ext: 'aar', name: 'input-release')
implementation(ext: 'aar', name: 'js_plugins-release')
implementation(ext: 'aar', name: 'videonative-release')
implementation(ext: 'aar', name: 'vncomponent-release')
implementation(ext: 'aar', name: 'vncore-release')
implementation(ext: 'aar', name: 'vncss-release')
implementation(ext: 'aar', name: 'vndata-release')
implementation(ext: 'aar', name: 'vnexpression-release')
implementation(ext: 'aar', name: 'vninjector-release')
implementation(ext: 'aar', name: 'vnjs_plugins-release')
implementation(ext: 'aar', name: 'vnutil-release')
implementation(ext: 'aar', name: 'vnv8-release')
implementation(ext: 'aar', name: 'vnyoga-release')
```

## 添加recyclerview依赖

VideoNative的list控件依赖于recyclerview。
```java
implementation 'com.android.support:recyclerview-v7:<Your_Version>'
```

## 添加zip离线包
![](https://puui.qpic.cn/vupload/0/20180925_1537873157196_w2fl6m036c.png/0)

## 在Application类中添加初始化代码

初始化代码应该在加载、启动VideoNative页面之前调用，建议放在自定义的Application的onCreate()中。
```java
VideoNative.getInstance()
        .setPageInfoBuilder(new VNJcePageInfoBuilder())
        .setAppUpgradeInfoBuilder(new VNJceAppUpgradeInfoBuilder())
        .setInjector(new DefaultInjector());
```

## 加载、启动VideoNative页面

在合适的时机调用以下代码加载和启动VideoNative页面：
```java
VideoNative.getInstance().loadApp("<packageId>", new VNLoadAppCallback() {
    @Override
    public void onLoadAppFinish(String s, int i, VNApp vnApp) {
        vnApp.openPage(<Your_Context>, "vn://<pagePathInZip>");
    }
});
```

> packageId位于zip包里的info.json中
> pagePathInZip是.page文件在zip包内的路径
> 比如 zip根目录/demo/info.json中packageId="demo"，则 zip根目录/demo/index/index.page的路径为index/index

- 运行工程，就可以看到Demo跑起来了。

    ![](https://puui.qpic.cn/vupload/0/20180925_1537873290113_so20phviuta.png/0)

## 添加JSAPI

在初始化代码中添加以下代码：
```java
VideoNative.getInstance()
        .setInjector(new DefaultInjector() {
            @Override
            public Map<String, V8JsPlugin> createJSObjectMap(IJsEngineProxy engineProxy) {
                Map<String, V8JsPlugin> map = new HashMap<>(4);
                map.put("<Your_JsApi_Name>", new JsInterfaces(engineProxy));
                return map;
            }
        });
    }
```

> JsInterfaces需要继承V8JsPlugin，提供带参的构造器
```java
public class JsInterfaces extends V8JsPlugin {
    public JsInterfaces(IJsEngineProxy engineProxy) {
        super(engineProxy);
    }
}
```

## Demo工程下载路径

[下载地址](https://share.weiyun.com/5mtAYuh)

