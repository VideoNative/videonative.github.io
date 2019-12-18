---
id: api-common-event
title: VN 事件
---

## 页面生命周期事件
页面的生命周期事件通过定义相对应的JS方法来处理。这些方法需要定义在传递给page()方法的参数对象中。具体的页面事件和方法定义如下：

事件 Key | 事件类型 | 系统支持 | 备注 | 参数类型
--- | --- | --- | --- | ---
onPageResult(Object params) | 从前一个页面返回 | VNGF/VNViews | 前一个页面传递过来的参数，一次生命周期可能会调用多次 | Object/String
onLoad(Object params) | 当前页面启动 | VNGF/VNViews | 该页面被拉起时候传递过来的参数，一次生命周期只会调用一次，注意这个时候页面的 js 还没准备好，页面也没渲染好 | Object/String
onReady(Object params) | 当前页面渲染完成 | VNGF/VNViews | 该页面被拉起时候传递过来的参数，一次生命周期只会调用一次 | Object/String
onReload(Object params) | 当前页面重新启动 | VNGF/VNViews | 当再次打开一个 launchMode 为 singleTask 的页面时，该页面之上的其他页面会被销毁，该页面的 onReload 会被调用，一次生命周期只会调用一次 | Object/String
onShow() | 页面可见（进入前台或从其他页面跳转回来） | VNGF/VNViews | 一次生命周期可能会调用多次 | -
onHide() | 页面不可见（退入后台或跳转到其他页面） | VNGF/VNViews | 一次生命周期可能会调用多次 |  -
onUnload() | 当前页面即将销毁 | VNGF/VNViews | 一次生命周期只会调用一次 | -
onSize() |  页面方向改变 | VNGF/VNViews |  | String
onMove() |  页面位置改变 | VNGF/VNViews |   | String
onActivate() |  页面Activate改变 | VNGF/VNViews |   | String
~~onOrientationChange(Object param)~~ |  ~~当前页面方向改变~~ |  ~~桌面端不支持~~ | ~~param.orientation 返回当前页面方向的字符串。可选项：portrait， landscape， reverse-landscape~~ | ~~String~~

## 通用事件

通用事件是指所有组件都支持的事件

+ **事件监听：** `bind[Event]`

### 参数与种类

* 1. 公共参数：

参数名 | 备注 | 参数类型 | 取值范围 | 备注
--- | --- | --- | --- | --- 
type | 事件名称 | String | - | *since 0.4*：只返回事件名称，不包含事件阶段。如原先的bindTap，现在改为tap  
timestamp | 事件发生时间戳(毫秒) | Number | - | -  
target | 事件触发的DOM对象 | Object | - | -  
dataset | 事件触发的DOM对象数据集 | Object | - | -  
event | 事件对象 | Object | - | 存放事件的其它参数  

* 2. 事件种类：

名称 | 动作 | 适用场景 | 其它参数 | 捕获与冒泡
--- | --- | --- | --- | --- | ---
tap | 点击 | 除了滑动控件(scroll-view,list,view-pager等)之外的所有控件 | --- | 支持
touchstart | 触摸开始 | 除了滑动控件(scroll-view,list,view-pager等)之外的所有控件 |event.x: Number (触发事件时的横坐标)<br/>event.y: Number (触发事件时的纵坐标) | 支持
touchend | 触摸结束 | 除了滑动控件(scroll-view,list,view-pager等)之外的所有控件 |event.x: Number (触发事件时的横坐标)<br/>event.y: Number (触发事件时的纵坐标) | 支持
MouseOver    | 鼠标移入 | 除了滑动控件(scroll-view,list,view-pager等)之外的所有控件 |event.x: Number (触发事件时的横坐标)<br/>event.y: Number (触发事件时的纵坐标) | 支持
MouseOut    | 鼠标移开 | 除了滑动控件(scroll-view,list,view-pager等)之外的所有控件 |event.x: Number (触发事件时的横坐标)<br/>event.y: Number (触发事件时的纵坐标) | 支持
MouseMove    | 鼠标移动 | 除了滑动控件(scroll-view,list,view-pager等)之外的所有控件 |event.x: Number (触发事件时的横坐标)<br/>event.y: Number (触发事件时的纵坐标) | 支持
~~longpress~~ | ~~长按~~ | --- | --- | ---
~~resize~~ | ~~控件尺寸变化~~ | ~~当一个组件的尺寸发生变化时，会发送该事件~~ | ~~event.width: Number (组件宽度)<br/>  event.height: Number (组件高度)~~ | 不支持
~~DoubleTap~~    | ~~双击~~ | --- | --- | ---
~~touchmove~~ | ~~触摸移动~~ | --- | --- | ---
~~fullscreenchange~~ | ~~全屏状态变化~~ | --- | --- | ---
~~fullscreenerror~~ | ~~进入全屏失败~~ | --- | --- | ---

* 3. 代码示例：

```html
<!--commonEvent.vnml-->
<view>
    <text bindTap="onTextTap">可点击文本</text>
</view>
```

```js
/**commonEvent.js**/
page ({
    onTextTap: function (params) {
        var clickStr = "文本被点击";
        console.log(clickStr);
    },
    
    onReady: function () {
        console.log('页面加载完成')
    }
});
```
