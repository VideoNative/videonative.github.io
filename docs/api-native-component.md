---
id: api-native-component
title: Native 组件
---

## Native Component 使用指南（iOS 篇）
### 注册一个 Native Widget

开发者需要创建一个类，继承自 QVNNativeWidget，比如 MyWidget，然后注册

```objc
[[QVNVideoNative sharedInstance] registerWidget:@"my-widget" widgetClassName:@"MyWidget"];
```

### Native Widget 生命周期的回调

```objc
/**
 初始化方法
*/
- (instancetype)initWithCustomWidget:(void *)customWidget;

/**
 创建的时候被调用
 */
- (void)onCreate;

/**
 析构的时候被调用
 */
- (void)onDestroy;

/**
 View 被添加
 */
- (void)onViewAttached:(UIView *)view;

/**
 View 被移除
 */
- (void)onViewDetached:(UIView *)view;
```

### 返回需要 VN 渲染的 View
开发者可以自定义返回的 View，用于 VN 进行渲染

```objc
/**
 返回自定义的视图
 */
- (UIView *)onCreateView;
```

### Widget 与 JS 的互操作
```objc
/**
 调用页面js对象的函数
 请务必在主线程调用该函数
 其中 id 可为基本数据类型、数组和字典
 */
- (JSValue *)callJsFunction:(NSString *)funName param:(id)param;

/**
 往页面 js 对象注册 native 接口，方法会被注入到 name 空间下，使用 vn.name 来访问，name 为用户自定义的值
 */
- (void)addJavascriptInterface:(NSString *)name fun:(JSValue *(^)(NSArray <JSValue *> *args, JSContext *context))fun;
```

### 自定义 Widget 属性
开发者可以自定义属性，VN 框架会在属性变化的时候通知到 Native 组件，Native 组件可以捕捉到这个事件做相应的处理

```objc
/**
 属性更新的回调，包括 VN 自带的属性和开发者自定义的属性。开发者可以在这里处理自定义属性的值变化
 */
- (void)onPropertyUpdate:(NSString *)propertyKey propertyValue:(NSString *)propertyValue;
```

## Native Component 使用指南（Android 篇）

### 注册一个Native Widget

```java
VideoNative.registerWidget("my-widget", MyWidget.class);
```

### Native Widget 生命周期的回调

```java
public class MyWidget extends VNCustomWidget {
    @NonNull

    //当widget创建时调用
    @Override
    protected void onCreate(){}

    //将视图add到父视图时调用
    @Override
    protected void onViewAttached(View view){}

    //将视图从父视图remove时调用
    @Override
    protected void onViewDetached(View view){}

    //当widget即将被销毁时调用
    @Override
    protected void onDestory(){}
}
```

### 返回需要 VN 渲染的 View
仅需实现public View createView(Context context)接口，返回是Android的View。

```java
@Override
protected View onCreateView(Context context) {
    mView = new MyView(context);
    mView.setGestureListener(new GestureListener());
    return mView;
}
```

### Widget 与 JS 的互操作

```java
@android.webkit.JavascriptInterface
public void callNative(String value) {
    System.out.println("js call native:" + value);
}

private class GestureListener extends GestureDetector.SimpleOnGestureListener {

    @Override
    public boolean onDown(MotionEvent e) {
        return true;
    }

    @Override
    public boolean onDoubleTap(MotionEvent e) {
        V8Object params = newV8Object();
        params.add("customKey", "customValue");
        triggerEvent("callJs", params);
        return true;
    }
}
```

### 自定义 Widget 属性

```java
@Override
protected void onPropertyUpdate(@NonNull String propertyKey, @NonNull Object propertyValue) {
    super.onPropertyUpdate(propertyKey, propertyValue);

    String propertyValueStr = String.valueOf(propertyValue);

    switch (propertyKey) {
        case "my-value":
            mMyValue = 0;
            try {
                mMyValue = Integer.parseInt(propertyValueStr);
            } catch (NumberFormatException e) {
            }
            break;
    }
}
```

### 处理混淆

因为Widget通过反射构造所以需要处理混淆

-keep class com.tencent.test.MyWidget{*;}

## 代码示例
这个例子实现了一个 NativeWidget，NativeWidget 返回了一个自定义的 View

该 View 在 Native 侧监听了双击事件，通过双击可以调用 Js 的接口，这个接口被声明在 vnml 里

声明方式是 `bind`+自定义方法名称，如下例中的 bindCallJs，则 Native 调用的方法名称是 callJs，支持自定义参数（__这个方法不区分大小写__）

Js 侧也可以调用 Native 的方法，如下例中的 callNative，这个方法被声明在 Native 侧，iOS 通过注册的方式声明，Android 通过重写的方式声明

开发者在 vnml 里面自定义了一个 myValue 的属性，这个属性不被 VN 框架所理解，但是这个值的更新会通知到 Native 侧进行处理（__这个自定义变量区分大小写__）

例子中的 Js 侧通过单击触发更新 myValue 的值，NativeWidget 在 myValue 更改时会收到相应的回调，并做相应的操作

### 脚本示例
```html
<my-widget bindCallJs="onNativeCallJs" bindTap="onClick" my-value="{{value}}" style="width:50%;height:150rpx;background-color: red">
</my-widget>
```

```js
page({
	onNativeCallJs: function(jsonObject) {
		console.log("onNativeCallJs :" + JSON.stringify(jsonObject.event))
		var success = jsonObject.target.callNative("Hello Native");
		console.log("Success " + success);
	},

	onClick: function(params) {
		console.log("onClick");
		vn.data.update("value", 99);
	}
});
```

```json
{
	"value":1
}
```

### iOS 示例
MyWidget.h 

```objc
#import "QVNNativeWidget.h"

@interface MyWidget : QVNNativeWidget
@end
```

MyWidget.m

```objc
#import "MyWidget.h"
#import <JavaScriptCore/JavaScriptCore.h>

#define DECLARE_WEAK_SELF __typeof(&*self) __weak weakSelf = self

@interface MyWidget ()
@property (nonatomic, assign) NSInteger myValue;
@property (nonatomic, strong) UIView *myView;
@end

@implementation MyWidget

#pragma mark - Life Cycle
- (instancetype)initWithCustomWidget:(void *)customWidget
{
    if (self = [super initWithCustomWidget:customWidget])
    {
        // 请用弱引用
        DECLARE_WEAK_SELF;
        [self addJavascriptInterface:@"callNative" fun:^JSValue *(NSArray<JSValue *> *args, JSContext *context) {
            NSLog(@"This is Native: %@, args: %@", args, weakSelf);
            return [JSValue valueWithBool:YES inContext:context];
        }];
    }
    return self;
}

- (void)onCreate
{
    [super onCreate];
    NSLog(@"QVNNativeWidget onCreate");
}

- (void)onDestroy
{
    [super onDestroy];
    NSLog(@"QVNNativeWidget onDestroy");
}

- (void)onViewAttached:(UIView *)view
{
    [super onViewAttached:view];
    NSLog(@"QVNNativeWidget onViewAttached");
}

- (void)onViewDetached:(UIView *)view
{
    [super onViewDetached:view];
    NSLog(@"QVNNativeWidget onViewDetached");
}

#pragma mark - 自定义属性
- (void)onPropertyUpdate:(NSString *)propertyKey propertyValue:(NSString *)propertyValue
{
    [super onPropertyUpdate:propertyKey propertyValue:propertyValue];
    if ([propertyKey isEqualToString:@"my-value"])
    {
        self.myValue = [propertyValue integerValue];
    }
}

#pragma mark - 需要 VN 渲染的 View
- (UIView *)onCreateView
{
    self.myView = [[UIView alloc] init];
    UITapGestureRecognizer *gesture = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(didDoubleTap)];
    gesture.numberOfTapsRequired = 2;
    [self.myView addGestureRecognizer:gesture];
    return self.myView;
}

#pragma mark - Call Js
- (void)didDoubleTap
{
    [self callJsFunction:@"callJs" param:@{@"CustomKey":@"CustomParams"}];
}

@end
```

### Java 示例
```java
public class MyWidget extends VNCustomWidget{
    private static final String TAG = "MyWidget";

    private int mMyValue;   //用户自定义的属性
    private MyView mView;   //用户自定义的视图

    public MyWidget(VNContext vnContext, VNForContext vnForContext, String type) {
        super(vnContext, vnForContext, type);
    }

    ///////////////////////////////////////////////////////////////////////////
    // Native组件生命周期
    ///////////////////////////////////////////////////////////////////////////

    @Override
    protected void onCreate() {
        super.onCreate();
        Log.d(TAG, "onCreate");
    }

    @Override
    protected void onViewAttached(View view) {
        super.onViewAttached(view);
        Log.d(TAG, "onViewAttached");
    }

    @Override
    protected void onViewDetached(View view) {
        super.onViewDetached(view);
        Log.d(TAG, "onViewDetached");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d(TAG, "onDestroy");
    }

    ///////////////////////////////////////////////////////////////////////////
    // Native组件JS Native互相调用
    ///////////////////////////////////////////////////////////////////////////


    @android.webkit.JavascriptInterface
    public void callNative(String value) {
        System.out.println("js call native:" + value);
    }

    private class GestureListener extends GestureDetector.SimpleOnGestureListener {

        @Override
        public boolean onDown(MotionEvent e) {
            return true;
        }

        @Override
        public boolean onDoubleTap(MotionEvent e) {
            V8Object params = newV8Object();
            params.add("customKey", "customValue");
            triggerEvent("callJs", params);
            return true;
        }

    }

    ///////////////////////////////////////////////////////////////////////////
    // Native组件自定义属性
    ///////////////////////////////////////////////////////////////////////////

    @Override
    protected void onPropertyUpdate(@NonNull String propertyKey, @NonNull Object propertyValue) {
        super.onPropertyUpdate(propertyKey, propertyValue);

        String propertyValueStr = String.valueOf(propertyValue);

        switch (propertyKey) {
            case "my-value":
                mMyValue = 0;
                try {
                    mMyValue = Integer.parseInt(propertyValueStr);
                } catch (NumberFormatException e) {
                }
                break;
        }
    }

    ///////////////////////////////////////////////////////////////////////////
    // Native组件自定义视图
    ///////////////////////////////////////////////////////////////////////////

    @NonNull
    @Override
    protected View onCreateView(Context context) {
        mView = new MyView(context);
        mView.setGestureListener(new GestureListener());
        return mView;
    }

    static class MyView extends View {

        private GestureDetector mGestureDetector;

        public MyView(Context context) {
            super(context);
        }

        public MyView(Context context, @Nullable AttributeSet attrs) {
            super(context, attrs);
        }

        public MyView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
            super(context, attrs, defStyleAttr);

        }

        public void setGestureListener(GestureListener gestureListener) {
            if (gestureListener != null) {
                mGestureDetector = new GestureDetector(this.getContext(), gestureListener);
            } else {
                mGestureDetector = null;
            }
        }

        @Override
        public boolean onTouchEvent(MotionEvent e) {
            if (mGestureDetector != null) {
                return mGestureDetector.onTouchEvent(e);
            } else {
                return super.onTouchEvent(e);
            }

        }
    }
}
```
