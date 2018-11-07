# 开始一个新的工程（iOS）

## 使用 Cocoapods

如果你的工程项目支持 Cocoapods, 可以直接采用如下的方式添加 VideoNative.

```Ruby
platform :ios, '9.0'
source 'http://git.code.oa.com/VideoNative/VNSpec.git'
target 'DemoProject' do
  pod 'VideoNative'
end
```

## 手动配置
### 新建一个工程（[下载地址](https://share.weiyun.com/5z5MUnc)）

* 新建Xcode工程，例如VNDemo工程。
![](https://puui.qpic.cn/vupload/0/20180920_1537454612925_lbyprdz27fr.png/0)


### 添加VideoNative.Framwork静态库

0. VideoNative工程Framework包含 `VideoNative.Framework`
0. VideoNative库运行的环境需要一些静态文件包含 `libDecodeWebP.a`,`libGifSupport.a`,`libQLJCEData.a`,`libSerializationJCE.a`,`libWebP.a`。

### 添加TVKPlayer.Framwork静态库（可选）
>本Demo播放器实现使用了腾讯视频播放器，具体可以通过注入播放器方式修改播放器实现。
    
   - 添加TVKPlayer.Framework

        0. VideoNative工程中使用了腾讯视频统一播放器TVKPlayer,需要添加 `TVKPlayer.Framework`
        0. VideoNative库运行的环境需要一些静态文件包含 `libcrypto.a`。

   - 添加系统Framework与tdb

        0. 需要添加的Framework有 `VideoToolBox.Framework`, tdb有`libiconv.2.4.0.tbd`,`libsqlite3.0.tbd`。
        0. 并在info.plist中添加App Transport Security Settings并设置Allow Arbitrary Loads为YES。

        ![](https://puui.qpic.cn/vupload/0/20180920_1537455031397_cpf99chs69.png/0)


   - 在Other Linker Flags中添加`-ObjC`

        ![](https://puui.qpic.cn/vupload/0/20180920_1537455111827_mxn4ci95e4.png/0)

>这时，你就可以运行这个app并且通过编译了

### 运行一个VNDemo App

- 在Demo工程中我们添加了VN的一个小Demo

    ![](https://puui.qpic.cn/vupload/0/20180920_1537455240447_6prz932nv1.png/0)

- 接下来在ViewController中添加下面的代码


    ```ObjC
    - (void)openApp:(NSString *)appId pageUrl:(NSString *)pageUrl
    {
        self.navigationController.navigationBarHidden = YES;
        
        NSString *rootUrl = [[[[NSBundle mainBundle] bundlePath] stringByAppendingPathComponent:@"vnapp"] stringByAppendingPathComponent:appId];
        
        QVNApp *app = [[QVNVideoNative sharedInstance] getVNApp:appId rootUrl:rootUrl];
        [app startApp:self pageUrl:pageUrl animation:YES];
    }

    ```
    
    ```ObjC
    [[QVNVideoNative sharedInstance] getVNApp:appId rootUrl:rootUrl];
    ```
    
    >这行代码是通过rootUrl去获取VNAPP的，你可以在你的工程里使用自己的离线包管理逻辑，只要最终传递这个参数即可。


- 构建运行工程，就可以看到Demo跑起来了。

    ![](https://puui.qpic.cn/vupload/0/20180920_1537454564898_hvtnisfjn8k.jpeg/0)

### 添加JSAPI

```ObjC
//Injector.h
#import <Foundation/Foundation.h>
#import <VideoNativeFramework/IVNInjector.h>

@interface VideoNatvieDemoInjector : NSObject <IVNInjector> {
    JSContext *mJsContext;
}
@end

#import "VideoNatvieDemoInjector.h"
#import "VideoNativeDemoPlayer.h"

//Injector.m
@implementation VideoNatvieDemoInjector
- (void)injectJsContext:(JSContext *)jsContext {
    mJsContext = jsContext;
    /**
     * 在这里注入App侧支持的JSApi
     * 例如：jsContext[@"testInterName"] = [commonJSInterface new];
     */
}
@end

//Interface.h
#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>
@protocol commonJSInterfaceProtocol <JSExport>
-(void)examplefunction;
@end

@interface commonJSInterface : VNJSInterface <commonJSInterfaceProtocol>
@end

//Interface.m
@implementation VNCommonInterface
-(void)examplefunction{
    //TODO
}
@end

```

### 注入播放器（可选为系统播放器实现）

```ObjC
#import "VideoNatvieDemoInjector.h"
#import "VideoNativeDemoPlayer.h"

@implementation VideoNatvieDemoInjector

- (void *)createVNPlayer {
    return (__bridge_retained void *) [[VideoNativeDemoPlayer alloc] init];
}

@end
```

### Demo工程下载路径

[下载地址](https://share.weiyun.com/5z5MUnc)

