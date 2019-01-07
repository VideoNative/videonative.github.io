---
id: getting-started-android
title: 开始一个新的工程（Android）
---

## 下载VNDemo模版工程 [下载地址](../file/android_demo.zip)

修改 app/build.gradle，确保将如下Maven仓库和VN依赖添加到工程中
注：目前VN仅发布在腾讯内部的 maven.oa.com 上

### 添加仓库地址

```groovy
repositories {
    maven {
        url "http://maven.oa.com/nexus/content/groups/androidbuild/"
    }
}
```

### 添加依赖

```groovy
dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    implementation "com.tencent.videonative:VideoNative:0.1.5"
    implementation "com.tencent.videonative:DefaultInjector:0.1.5"
    debugImplementation "com.tencent.videonative:Debugger:0.1.5"
}
```

还需要添加 wup.jar 到libs目录中

### 修改 abiFilters

VN默认的图片库只包含armeabi目录的so，所以需要配置一下过滤选项

```groovy
ndk {
	abiFilters "armeabi"
}
```

## 添加初始化代码

初始化代码应该在加载VideoNative页面之前调用，建议放在Application.onCreate()中。
```java
VideoNative.getInstance()
    .setPageInfoBuilder(new VNJcePageInfoBuilder())
    .setInjector(new DefaultInjector());
```

## 打开新的VideoNative页面

调用以下接口可以打开一个VN页面：
```java
VideoNative.getInstance().openPage(<Context>, <AppId>, <PageUrl>);
```

> 这里的<Context>建议采用ApplicationContext
> <AppId>为放置在assets/vnapp目录下的zip离线包的文件名，如: "97"
> <PageUrl>为zip包内的页面的路径，如: "vn://index/index"


## 添加JSAPI

在初始化代码中可以注入全局JS API：
```java
VideoNative.getInstance()
        .setInjector(new DefaultInjector() {
            @Override
            public Map<String, V8JsPlugin> createJSObjectMap(IJsEngineProxy engineProxy) {
                Map<String, V8JsPlugin> map = new HashMap<>(4);
                map.put(<Group_Name>, new JsInterfaces(engineProxy));
                return map;
            }
        });
    }
```

> JsInterfaces继承于V8JsPlugin，提供带参的构造器
```java
public class JsInterfaces extends V8JsPlugin {
    public JsInterfaces(IJsEngineProxy engineProxy) {
        super(engineProxy);
    }
}
```

### 混淆和发布

需要确保在混淆脚本中加入如下配置

```groovy
-ignorewarnings

-keepattributes *JavascriptInterface*

-keep class com.eclipsesource.v8.** {*;}
-keep class com.facebook.** {*;}
-keep class com.tencent.qqlive.imagelib.** {*;}

-keepclassmembers class * {
    @android.webkit.JavascriptInterface *;
}

```

### 其他

当前VideoNative使用zip离线包的方式管理vnapp。当以release方式发布apk时，只有正确签名的zip包才能运行。
目前zip签名需要申请服务器权限，请联系ashercai