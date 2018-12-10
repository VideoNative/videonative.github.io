# Native Component 对外接口

## 注册一个Native Widget

```java
VideoNative.registerWidget("QNBVideo", QNBVideoWidget.class);
```

## 普通Widget的实现

仅需实现public View createView(Context context)接口，返回是Android的View。

```java
public class QNBVideoWidget extends VNBaseWidget {
    @NonNull
    @Override
    protected View onCreateView(Context context) {
        return new QNBVideoView(context);
    }

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

## Widget与JS的互操作

```java
public class QNBVideoWidget extends VNBaseWidget {
    //...省略2中必要的代码
    //提供JS调用的接口
    @android.webkit.JavascriptInterface
    public void setSRC(String src) {
        ((QNBVideoView)getView()).setSrc(String src);
    }

    //调用JS绑定的方法
    public void onClick(View view){
        JSONObject eventParams = new JSONObject();
        eventParams.add("data", "some data" );   //用户这里可以放置任意的参数
        eventParams.add("timestamp", System.currentTimeMillis());
        self.triggerEvent("click", eventParams);
    }
}
```

## 增加/应用新的Widget属性。

```java
public class QNBVideoWidget extends VNBaseWidget {
    //...省略3中必要的代码
    public void (@NonNull String propertyKey, @NonNull Object propertyValue) {
        if("foreground-color".equals(propertyKey)){
            ((QNBVideoView)getView()).setForegroundColor(value);
        }
    }
}
```
