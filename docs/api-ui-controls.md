---
id: api-ui-controls
title: 控件
---

## 总览
控件属性列表中的类型说明：
+ Property：控件的属性。可以直接写在标签中，也可以写在 vnss 规则集中
+ Method：控件DOM方法，供JS代码调用
+ EventHandler：控件的事件。通过将JS方法绑定到组件事件上，可以处理事件回调

## 页面生命周期事件
页面的生命周期事件通过定义相对应的JS方法来处理。这些方法需要定义在传递给page()方法的参数对象中。具体的页面事件和方法定义如下：

事件 Key | 事件类型 | 适用范围 | 备注 | 参数类型
--- | --- | --- | --- | ---
onPageResult(Object params) | 从前一个页面返回 | 页面 | 前一个页面传递过来的参数，一次生命周期可能会调用多次 | Object/String
onLoad(Object params) | 当前页面启动 | 页面 | 该页面被拉起时候传递过来的参数，一次生命周期只会调用一次，注意这个时候页面的 js 还没准备好，页面也没渲染好 | Object/String
onReady(Object params) | 当前页面渲染完成 | 页面 | 该页面被拉起时候传递过来的参数，一次生命周期只会调用一次 | Object/String
onReload(Object params) | 当前页面重新启动 | 页面 | 当再次打开一个 launchMode 为 singleTask 的页面时，该页面之上的其他页面会被销毁，该页面的 onReload 会被调用，一次生命周期只会调用一次 | Object/String
onShow() | 页面可见（进入前台或从其他页面跳转回来） | 页面 | 一次生命周期可能会调用多次 | -
onHide() | 页面不可见（退入后台或跳转到其他页面） | 页面 | 一次生命周期可能会调用多次 |  -
onUnload() | 当前页面即将销毁 | 页面 | 一次生命周期只会调用一次 | -
onOrientationChange(Object param) |  当前页面方向改变 | 页面 | param.orientation 返回当前页面方向的字符串。可选项：portrait， landscape， reverse-landscape | String

## 通用事件

通用事件是指所有组件都支持的事件

+ **事件监听：** `bind[Event]`

### 参数与种类

1. 公共参数：

参数名 | 备注 | 参数类型 | 取值范围 | 备注
--- | --- | --- | --- | --- 
type | 事件名称 | String | - | *since 0.4*：只返回事件名称，不包含事件阶段。如原先的bindTap，现在改为tap  
timestamp | 事件发生时间戳(毫秒) | Number | - | -  
target | 事件触发的DOM对象 | Object | - | -  
dataset | 事件触发的DOM对象数据集 | Object | - | -  
event | 事件对象 | Object | - | 存放事件的其它参数  

2. 事件种类：

名称 | 动作 | 适用场景 | 其它参数 | 捕获与冒泡 *(since 0.4)* | 备注
--- | --- | --- | --- | --- | ---
tap | 点击 | 除了滑动控件(scroll-view,list,view-pager等)之外的所有控件 | - | 支持 | -
longpress | 长按 | 除了滑动控件(scroll-view,list,view-pager等)之外的所有控件 | - | 支持 | -
touchstart | 触摸开始 | 除了滑动控件(scroll-view,list,view-pager等)之外的所有控件 | event.x: Number (触发事件时的横坐标)<br/>  event.y: Number (触发事件时的纵坐标) | 支持 | *since 0.4*：新增参数event.changedTouches 
touchmove | 触摸移动 | 除了滑动控件(scroll-view,list,view-pager等)之外的所有控件 | event.x: Number (触发事件时的横坐标)<br/>  event.y: Number (触发事件时的纵坐标) | 支持 | *since 0.4*：新增参数event.changedTouches 
touchend | 触摸结束 | 除了滑动控件(scroll-view,list,view-pager等)之外的所有控件 | event.x: Number (触发事件时的横坐标)<br/>  event.y: Number (触发事件时的纵坐标) | 支持 | *since 0.4*：新增参数event.changedTouches 
fullscreenchange | 全屏状态变化 | 当一个组件进入或退出全屏模式时，会收到该事件回调 | - | 不支持 | *since 0.4*
fullscreenerror | 进入全屏失败 | 当一个组件无法进入全屏模式时，会收到该事件回调 | - | 不支持 | *since 0.4*
resize | 控件尺寸变化 | 当一个组件的尺寸发生变化时，会发送该事件 | event.width: Number (组件宽度)<br/>  event.height: Number (组件高度) | 不支持 | *since 0.8*

3. 代码示例：

```html
<!--commonEvent.vnml-->
<view class="container">
    <text bindTap="onTextTap">可点击文本</text>
</view>
```

```css
/** commonEvent.vnss **/
.container
{
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
}
    
text 
{
    width: 100%;
    height: 100rpx;
    font-size: 50rpx;
    text-align:center;
    background-color: #DDDDDD;
}
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

### 捕获与冒泡 *(since 0.4)*

1. 事件阶段

+ **捕获阶段：**  
触发事件后，从页面根标签开始，逐层往下传递该事件（期间可以进行中断），一直到事件触发标签结束（假设期间都没中断的情况）

+ **冒泡阶段：**  
触发事件后，从事件触发标签开始，逐层往上传递该事件（期间可以进行中断），一直到页面根标签结束（假设期间都没中断的情况）

```text
注意：
1. 回调顺序：事件捕获 -> 事件监听 -> 事件冒泡。同时，各个阶段独立执行，如果当前阶段没声明监听则跳过，再进入下一阶段
2. 中断调用：事件监听调用中断方法无实际意义，事件捕获、冒泡调用中断方法只会影响当前阶段传递
3. 实际应用：事件监听可用于事件响应，事件捕获可用于事件拦截，事件冒泡可用于事件统计（子标签负责事件处理，父标签负责事件统计）
4. 传递界限：页面和自定义组件都支持事件捕获与冒泡，但事件不能跨越自定义组件
```

2. 注册监听

+ **监听捕获：** `capture:event`
+ **监听冒泡：** `on:event`
+ **支持种类：** `tap、longpress、touchstart、touchmove、touchend`

```html
<!--event-capture-bubble.vnml-->
<view id="d1"
    capture:tap="captureHandle" 
    bindtap="bindHandle" 
    on:tap="bubbleHandle" />
```

3. 中断传递

+ **调用方法：** `e.stopPropagation();`

```js
<!--event-capture-bubble.js-->
captureHandle: function (e) {
    if (e.currentTarget.getId() === 'd1') {
        //在d1标签时，中断捕获事件传递
        e.stopPropagation();
    }
},
bindHandle: function (e) {
    //监听事件方法会正常回调，不受捕获或者冒泡阶段的中断操作影响
    ...
},
bubbleHandle: function (e) {
    if (e.currentTarget.getId() === 'd1') {
        //在d1标签时，中断冒泡事件传递
        e.stopPropagation();
    }
}
```

4. 其它参数(基于公共参数)

参数名称 | 参数类型 | 参数说明 | 取值范围 | 备注
--- | --- | --- | --- | --- 
currentTarget | Object | 当前的DOM对象 | - | - 
phase | Number | 事件对象-事件阶段 | 0 ~ 3 |  0：事件处于响应阶段(bind)<br/>  1：事件处于捕获阶段(capture)<br/>  2：事件到达target结点(capture / on)<br/>  3：事件处于冒泡阶段(on)<br/>  
event.changedTouches | Array | 坐标值发生改变的触摸手指 | - | 该参数目前仅限于touchstart、touchmove、touchend事件才会返回，并且只返回单个触摸手指 

changedTouches 数组项对象

参数名称 | 参数类型 | 参数说明 | 取值范围 | 备注
--- | --- | --- | --- | --- 
identifier | Number | 触摸手指编号 | 0 | 目前只返回单个触摸手指 
currentX | Number | 触摸点相对于当前标签的横坐标 | - | - 
currentY | Number | 触摸点相对于当前标签的纵坐标 | - | - 
screenX | Number | 触摸点相对于屏幕的横坐标 | - | - 
screenY | Number | 触摸点相对于屏幕的纵坐标 | - | - 

5. 代码示例

```html
<!--event-capture-bubble.vnml-->
<view id="d1" class="d1"
    capture:tap="captureHandle" 
    bindtap="bindHandle" 
    on:tap="bubbleHandle">
    
    <view id="d2" class="d2"
        capture:tap="captureHandle" 
        bindtap="bindHandle" 
        on:tap="bubbleHandle">
        
        <view id="d3" class="d3"
            capture:tap="captureHandle" 
            bindtap="bindHandle" 
            on:tap="bubbleHandle"/>
        
    </view>
    
</view>
```

```css
<!--event-capture-bubble.css-->
.d1 {
   width: 300rpx;
   height: 300rpx;
   background-color: #7a1b9b;
   flex-direction:column;
   justify-content:flex-start;
   align-items:flex-start;
}

.d2 {
   width: 200rpx;
   height: 200rpx;
   background-color: #9b7a1b;
   flex-direction:column;
   justify-content:flex-start;
   align-items:flex-start;
}

.d3 {
   width: 100rpx;
   height: 100rpx;
   background-color: #7a9b1b;
   flex-direction:column;
   justify-content:flex-start;
   align-items:flex-start;
}
```

```js
<!--event-capture-bubble.js-->
captureHandle: function (e) {
    if (e.currentTarget.getId() === 'd2') {
        //在d2标签时，中断捕获事件传递
        e.stopPropagation();
    }
},
bindHandle: function (e) {
    //监听事件方法会正常回调，不受捕获或者冒泡阶段的中断操作影响
    ...
},
bubbleHandle: function (e) {
    if (e.currentTarget.getId() === 'd3') {
        //在d3标签时，中断冒泡事件传递
        e.stopPropagation();
    }
}
```

点击视图区域后的回调情况：

```
点击d1区域：  
捕获阶段：d1  
事件监听：d1  
冒泡阶段：d1

点击d2区域：  
捕获阶段：d1 -> d2  
事件监听：d2  
冒泡阶段：d2 -> d1

点击d3区域：  
捕获阶段：d1 -> d2  
事件监听：d3  
冒泡阶段：d3
```

## 通用属性
通用属性是指所有的组件都支持的属性。

+ 代码示例如下：

```html
<!--commonAttribute.vnml-->
<view id="mainContainer">
    <view width="100%" height="75rpx" margin="5rpx" background-color="#FFFFFFFF">
      <text width="75rpx" height="75px" padding="3rpx">
         通用属性
      </text>
    </view>
</view>
```

通用属性名 | 类型 | 默认值 | 说明
--- | --- | --- | --- 
class | String | | 引用 vnss 中的样式类；多个样式可用空格分隔
id | String | | 用于 CSS 匹配和 getElementById()
width | [rpx pt dp px % auto] | auto |
height | [rpx pt dp px % auto] | auto |
aspect-ratio | Float | | 宽高比
background-stretch-param | [整数的组合] | | 本属性需配合 background 属性一起使用才有效。输入格式有两种；第一种，对一个坐标点进行拉伸，格式为：top left，例：25 15 (对背景图片坐标点(15,25)进行拉伸)。第二种，对一个区域进行拉伸，格式：top lengthY left lengthX，例：25 10 22 15 (将对背景图片的纵坐标25位置到35位置进行拉伸，对横坐标22位置到37位置进行拉伸)。注：只能填写0和正整数，不带单位；含义是1倍图的像素坐标和长度。
background-color | color | #FFFFFFFF | 取值格式为#RGB，#RRGGBB #RRGGBBAA，RRGGBBAA，如果同时设置了background，background的优先级更高
background | String | | 1.不拉伸的图片如: ../image/btn_bg
alpha | Float | 1 | 0:透明 到 1:不透明
padding | [rpx pt dp px %] | 0rpx | 参见 CSS 标准写法
padding-left | [rpx pt dp px %] | | 共存时覆盖 padding 的值
padding-right | [rpx pt dp px %] | | 共存时覆盖 padding 的值
padding-top | [rpx pt dp px %] | | 共存时覆盖 padding 的值
padding-bottom | [rpx pt dp px %]] | | 共存时覆盖 padding 的值
margin | [rpx pt dp px %] | 0rpx | 参见 CSS 标准写法
margin-left | [rpx pt dp px %] | | 共存时覆盖 margin 的值
margin-right | [rpx pt dp px %] | | 共存时覆盖 margin 的值
margin-top | [rpx pt dp px %] | | 共存时覆盖 margin 的值
margin-bottom | [rpx pt dp px %] | |共存时覆盖 margin 的值
max-height | [rpx pt dp px %] | |
max-width | [rpx pt dp px %] | |
min-height | [rpx pt dp px %] | |
min-width | [rpx pt dp px %] | |
hidden | Boolean | false | 是否隐藏
enable | Boolean | true | 是否启用，为 false 时不接收点击事件
overflow | [visible hidden] | hidden | 当内容溢出元素框时发生的事情，visible 表示溢出的内容不会被裁剪，hidden 表示溢出的内容会被裁剪，visible 必须配合 flex-shrink=0 使用
border-color | color | #00000000 | 设置四条边框的颜色。目前除了 View 标签能支持4个边框设置不同的值，其他标签只支持4个边框设置相同的值
border-width | [rpx pt dp px] | 0rpx | 设置边框的宽度。目前除了 View 标签能支持4个边框设置不同的值，其他标签只支持4个边框设置相同的值
border-radius | [rpx pt dp px] | 0rpx | 设置边框的圆角属性。目前除了 View 标签能支持4个角设置不同的值，其他标签只支持4个角设置相同的值
report-page-id | String | | 页面的上报ID。只应该在页面根view设置这个属性。
report-page-params | Object, String | | 页面的上报参数。只应该在页面根view设置这个属性。值类型可以为对象；或者JSON字符串；或者URL查询字符串，如：report-page-params="key1=1&key2=2"
report-id | String | | 元素的上报ID
report-params | Object, String | | 元素的上报参数。值类型可以为对象；或者JSON字符串；或者URL查询字符串，如：report-params="key1=1&key2=2"

## Flexbox 布局属性
Flexbox 布局属性用于页面排版布局，它分为容器节点相关的属性和子节点相关的属性。容器属性和子节点属性相互影响，配合生效。
关于 Flexbox 属性的详细定义，请参见: [YogaLayout](https://yogalayout.com/docs)

+ 代码示例如下：
```html
<!--Flexbox.vnml-->
    <view width="100%" height="auto" flex-direction="row" align-items="center">
    <image width="200rpx" aspect-ratio="1" src="https://videonative.io/video-native.png" position="relative"/>
    <text height="200rpx" width="auto" flex-grow="1" font-size="30rpx" background-color="gray">
        FlexBox
    </text>
</view>
```

#### Flex 容器节点的属性
这些属性只对容器节点有效(view/list/scroll-view/view-pager)

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | align-content | Enum | stretch |
Property | align-items | Enum | stretch | 
Property | flex-direction | Enum | row | 弹性布局的方向
Property | flex-wrap | Enum | no-wrap | 折行属性
Property | justify-content | Enum | flex-start |

#### Flex 子节点的属性
这些属性可配置于所有标签，但仅当其有父容器时才生效

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | align-self | Enum | auto |
Property | flex-basis | [Enum %] | auto |
Property | flex-grow | Float | 0 | 拉伸因子
Property | flex-shrink | Float | 1 | 收缩规则
Property | position | Enum | relative | relative/absolute
Property | left  | [rpx pt dp px %] | 0rpx | left属性影响元素的水平位置
Property | right  | [rpx pt dp px %] | 0rpx | right属性影响元素的水平位置
Property | top  | [rpx pt dp px %] | 0rpx | top属性影响元素的竖直位置
Property | bottom  | [rpx pt dp px %] | 0rpx | bottom属性影响元素的竖直位置


## view
view是简单的容器类。它支持设置 border 和 shadow。

+ 代码示例如下：

```html
<!--view.vnml-->
<view width="100%" height="85.4rpx" align-items="center" justify-content="space-between" flex-direction="row">
    <text height="200rpx" width="auto" flex-grow="1" font-size="30rpx" background-color="gray">
        View Example
    </text>
</view>
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property |box-shadow | h-shadow v-shadow blur spread color inset | | 添加一个阴影。每个阴影由 2-4 个长度值、可选的颜色值以及可选的 inset 关键词来规定。省略的长度值为0。默认为 outset
Property |border-color | color | transparent（透明） | 设置四条边框的颜色。此属性可设置 1 到 4 种颜色。
Property |border-style | Enum | none | 用于设置元素所有边框的样式，或者单独地为各边设置边框样式。此属性可设置 1 到 4 个值。
Property |border-width | [rpx pt dp px] | 0rpx | 为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。可设置 1 到 4 个值
Property |border-radius | [rpx pt dp px] | 0rpx | 设置边框的圆角属性。可设置 1 到 4 个值（topLeft, topRight, bottomRight, bottomLeft）

### box-shadow 的详细说明
参照 [box-shadow 的 W3C标准](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

在 iOS 上，阴影和圆角不能并存。可改用多套一个 View 来实现阴影+圆角的效果

值	| 类型 | 描述 
--- | --- | --- 
h-shadow | [rpx pt dp px] | 必需。水平阴影的位置。允许负值
v-shadow | [rpx pt dp px] | 必需。垂直阴影的位置。允许负值
blur	| [rpx pt dp px] | 可选。模糊距离，不允许负值
spread | [rpx pt dp px]  | 可选。阴影的尺寸，允许负值
color	 | color | 可选。阴影的颜色。请参阅 CSS 颜色值，默认为黑色
inset	 | | 可选。将外部阴影 (outset) 改为内部阴影，默认为 outset

### border-color 的详细说明
color 的语法如下：

+ transparent：默认值，透明色
+ 颜色名：red、green
+ `#hex：#rgb  #rrggbb  #rrggbbaa`
+ inherit:  从父元素继承边框颜色

代码示例如下：

```css
border-color:red green blue pink;   // 上  右  下  左

border-color:red green blue;        // 上  右&左  下

border-color:red green;             // 上&下  右&左

border-color:red;                   // 四边
```

### border-style 的详细说明
值	| 描述 
--- | ---
none | 定义无边框
hidden | 与 "none" 相同
dotted | 定义点状边框
dashed | 定义虚线
solid | 定义实线

代码示例如下：

```css
border-style: hidden dotted dashed solid;   // 上无 右点 下虚 左实
```

### border-width & border-color & border-style 的说明
以下这些属性用于对具体方向的边框指定指定颜色、样式、宽度，只可设置1个值

```css
border-bottom-color
border-bottom-style
border-bottom-width
border-left-color
border-left-style
border-left-width
border-right-color
border-right-style
border-right-width
border-top-color
border-top-style
border-top-width
```

代码示例如下：
```html
<!--border.vnml-->
<view width="100%" height="100%">    
	<view margin="25rpx" width="700rpx" height="300rpx" background-color="white" box-shadow="0rpx 0rpx 5rpx 10rpx #0000FF" border-radius="10rpx" border-color="green" border-width="10rpx" border-style="solid">
	</view>
</view>
```

## text
text是基本的文本展示控件

+ 代码示例如下：

```html
<!--text.vnml-->
<view width="100%" height="auto" flex-direction="row">
    <text font-size="30rpx" color="#000000FF" font-style="bold">精彩瞬间</text>
    <text html-text="true">{{title}}</text>
</view>
```

```json
  {
	  "title":"<font color='#FF00FFFF'>我是</font>带颜色<font color='#00FFFFFF'>的文本</font>"
  }
```

> 注意 html 文本如果直接写在 \<text\> 标签里，会解析不出来，这里推荐使用胡子语法
    

推荐

```html
<text html-text="true">{{title}}</text>
```   
    
不推荐    

```html
 <text html-text="true"><font color='#FF00FFFF'>我是</font></text>
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | font-size | [rpx pt dp px] | 12dp | 字体尺寸
Property | font-style | Enum | normal | normal/bold/italic/bold_italic
Property | font-family | String | 系统默认 | 字体集
Property | color | color | #000000FF |
Property | text-align | Enum | left | left/right/center
Property | ellipsize | Enum | none | none;start;middle;end。注：max-lines属性的值会影响到本属性。
Property | max-lines | Integer | 0 | 0代表不限行数。注：1、当不限行数时，ellipsize无法生效；2、当max-lines大于1时，ellipsize在Android平台上只有end生效
Property | line-height | Float | 1.0 | 1.0代表一倍行间距，最小有效值为 1.0
Property | html-text | Boolean | false | 是否解析html标签。目前只支持如下标签和属性：&lt;font color="#A0A0A0"&gt;、&lt;b&gt;、&lt;i&gt;

## button
button是点击交互控件。button有默认的系统UI，以及点击时有系统默认的视觉效果。button的默认文本对齐方式为center。

+ 代码示例如下：

```html
<!--button.vnml-->
<view width="100%" height="auto" flex-direction="row">
    <button height="auto" width="auto" font-size="30rpx" color="#000000FF" font-style="bold">点击我</button>
</view>
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | font-size | [rpx pt dp px] | 12dp | 文本 size，只能是整型
Property | font-style | Enum | normal | normal/bold/italic/bold_italic
Property | font-family | String | 系统默认 | 字体集
Property | color | color | #000000FF |
Property | text-align | Enum | center | left/right/center
Property | ellipsize | Enum | none | none;start;middle;end。注：max-lines属性的值会影响到本属性。
Property | max-lines | Integer | 0 | 0代表不限行数。注：1、当不限行数时，ellipsize无法生效；2、当max-lines大于1时，ellipsize在Android平台上只有end生效


## image
image用于显示图片。支持网络和本地图片。

+ 代码示例如下：

```html
<!--image.vnml-->
<image width="100%" aspect-ratio="1.78" src="http://videonative.io/img/video-native.png" border-radius="30rpx" mode="center-crop"/>
```


类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | src | String | | 图片资源地址
Property | placeholder | String | | 默认占位图片资源地址
Property | mode | Enum | fit-xy | focus-crop/center-crop/center-inside/center/fit-center/fit-xy
Property | foucs-point-x | Float(0~1) | 0.5 | 重心裁剪功能，仅在 mode 为 focus-crop 时生效
Property | foucs-point-y | Float(0~1) | 0.5 | 重心裁剪功能，仅在 mode 为 focus-crop 时生效
Property | shape | Enum | normal | normal/circle
Property | filter | | | 滤镜参数，目前只支持: blur; 注：1、不支持动图模糊；2、超过25px会导致渲染性能下降可能导致卡顿。3、blur 的单位只能为 "px" 例子：filter="blur(1px)" *(since 0.5)*
EventHandler | bindload | function(Object params) | | 当src指定的图片被显示时触发这个事件。图片的宽、高通过事件参数返回：params.event = {width: 50.3, height:30.02 }，单位为rpx。
EventHandler | binderror | function(Object params) | | 当src指定的图片加载失败时触发这个事件。无event属性。

其中 mode 的有效值为

模式 | 值 | 说明
--- | --- | ---
缩放 | fit-xy |不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
缩放 | fit-center | 保持纵横比缩放图片，使图片的长边能完全显示出来，居中显示。小图会放大，大图会缩小
缩放 | center | 不缩放图片，只显示图片的中间区域
缩放 | center-inside | 保持纵横比缩放图片，保证图片的长边能完全居中 显示出来。小图不放大，大图会缩小
裁剪 | center-crop | 保持纵横比缩放图片，只保证图片的短边能完全显示出来。图片通常只短边方向是完整的，另一个方向将会发生截取
裁剪 | focus-crop | 重心裁剪，具体裁剪位置由 focus-point-x 和 focus-point-y 决定

注意，本标签不支持 padding 属性

## checkbox
这个控件可以显示两种状态，checked 和 unchecked，不同的状态显示不同的图片。本控件自身不存储状态，所以它的 checked 属性必须通过胡子语句绑定到一个boolean型的数据上才能正常工作。当通过点击改变了控件状态时，胡子语句绑定的数据也会发生改变。


+ 代码示例如下：

```html
<!--checkbox.vnml-->
<checkbox width="92rpx" aspect-ratio="1" checked="{{selected}}" checked-src="{{check}}" unchecked-src="{{uncheck}}" bindchange="onCheckChange"/>
```

```json
{
    "check": "http://videonative.io/img/checkbox_yes.png",
    "uncheck": "http://videonative.io/img/checkbox_no.png",
    "selected": true,
    "position": 10
}
```

```js
/**checkbox.js**/
page ({
    onCheckChange: function () {
        console.log("checkbox 发生状态切换");
    }
});
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | checked | 胡子语句 | | 必填项，绑定 data 里的一个布尔值
Property | checked-src | String | | 选中状态图片的url
Property | unchecked-src | String | | 未选中状态图片的url
EventHandler | bindChange | Function | | checkbox 状态切换事件回调

## input
这是一个单行文本输入控件。

+ 代码示例如下：

```html
<!--input.vnml-->
<view width="100%" height="100%" flex-direction="column">
	<text margin="10rpx" padding="5rpx" width="100%" height="auto" font-size="30rpx">你输入的是：{{inputValue}}</text>
	<text margin="10rpx" padding="5rpx" width="100%" height="auto" font-size="30rpx">状态：{{focusState}}</text>
	<text margin="10rpx" padding="5rpx" width="100%" height="auto" font-size="30rpx">确认次数：{{confirmCount}}</text>
	<input id="eventText" placeholder="响应事件" confirm-type="done" margin="10rpx" padding="5rpx" width="100%" height="auto" font-size="30rpx" bindInput="onInput" bindFocus="onFocus" bindBlur="onBlur" bindConfirm="onConfirm" border-width="1rpx" border-style="solid"></input>
</view>
```

```json
{
  "focusState": "未获取焦点",
  "textCount": 0,
  "confirmCount": 0,
  "inputValue": ""
}
```

```js
/**input.js**/
var eventinput;

page({
  onReady: function () {
    eventinput = vn.dom.getElementById('eventText');
  },
  onInput: function (params) {
    var text = params.event.value;
    vn.data.update('inputValue', text);
  },
  onFocus: function (params) {
    vn.data.update('focusState', '获取焦点');
  },
  onBlur: function (params) {
    vn.data.update('focusState', '未获取焦点');
  },
  onConfirm: function (params) {
    confirmCount = vn.data.query('confirmCount');
    confirmCount += 1;
    vn.data.update('confirmCount', confirmCount);
  }
});
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | font-size | [rpx pt dp px] | 12dp | 文本 size，只能是整型
Property | font-style | Enum | normal | normal/bold/italic/bold_italic
Property | font-family | String | 系统默认 | 字体集
Property | color | color | #000000FF | 取值格式为#RGBA
Property | text-align | Enum(可组合) | left | left/right/center
Property | input-type | Enum | text | text(文字)/number(整数)/digit(小数)
Property | confirm-type | Enum | done | send(发送)/search(搜索)/next(下一个)/go(去)/done(完成)
Property | password | Boolean | false | 是否为密码输入
Property | placeholder | String | | 当没有文字输入时的提示文案
Property | placeholder-color | color | #888888FF | 取值格式为#RGBA
EventHandler | bindinput | String function(Object params) | | 当键盘输入时，触发input事件，params.event = {value: "文本", cursor: 1}，处理函数可以直接 return 一个字符串，将替换输入框的内容。value 为事件发生时文本框的内容，cursor为光标所在的位置
EventHandler | bindconfirm | Boolean function(Object params) | | 点击完成按钮时触发，params.event.value 为事件发生时文本框的内容，返回 true 表示按下完成按钮时不收起键盘，返回 false 表示收起键盘，默认为 false。注，在安卓上可能受到其他特性的影响导致键盘不收起，比如当指定 confirmType 为 Next 时，会聚焦到下一个输入框，此时键盘没有收起。
EventHandler | bindfocus | function(Object params) | | 输入框得到输入焦点时触发，params.event.value 为事件发生时文本框的内容
EventHandler | bindblur | function(Object params) | | 输入框失去焦点时触发，params.event.value 为事件发生时文本框的内容
Method | Integer getCursorStart() |  |  | 当前输入框的光标开始位置
Method | Integer getCursorEnd() |  |  | 当前输入框的光标结束位置
Method | String getValue() |  |  | 当前输入框的文本
Method | void setValue(String value) |  |  | 设置当前输入框的文本
Method | Boolean hasFocus() |  |  | 当前输入框是否获取了焦点
Method | void setCursorRange(Integer start, Integer end) |  |  | 设置当前输入框光标起始和结束位置
Method | void setCursorStart(Integer start) |  |  | 设置当前输入框光标起始位置
Method | void setFocus(Boolean focus) |  |  | 设置当前输入框的焦点属性

## textarea
这是一个多行文本输入控件。

+ 代码示例如下：

```html
<!--textarea.vnml-->
<view width="100%" height="100%" flex-direction="column">	
	<text margin="10rpx" padding="5rpx" width="100%" height="auto" font-size="30rpx">你输入的是：{{inputValue}}</text>
	<text margin="10rpx" padding="5rpx" width="100%" height="auto" font-size="30rpx">状态：{{focusState}}</text>
	<text margin="10rpx" padding="5rpx" width="100%" height="auto" font-size="30rpx">确认次数：{{confirmCount}}</text>
	<textarea id="eventText" placeholder="响应事件" confirm-type="done" margin="10rpx" width="auto" height="auto" font-size="30rpx" bindInput="onInput" bindFocus="onFocus" bindBlur="onBlur" bindConfirm="onConfirm" max-lines="3" border-width="1rpx" border-style="solid"></textarea>
</view>
```

```json
{
  "focusState": "未获取焦点",
  "textCount": 0,
  "confirmCount": 0,
  "inputValue": ""
}
```

```js
/**textarea.js**/
var eventinput;

page({
  onReady: function () {
    eventinput = vn.dom.getElementById('eventText');
  },
  onInput: function (params) {
    var text = params.event.value;
    vn.data.update('inputValue', text);
  },
  onFocus: function (params) {
    vn.data.update('focusState', '获取焦点');
  },
  onBlur: function (params) {
    vn.data.update('focusState', '未获取焦点');
  },
  onConfirm: function (params) {
    confirmCount = vn.data.query('confirmCount');
    confirmCount += 1;
    vn.data.update('confirmCount', confirmCount);
  }
});
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | font-size | [rpx pt dp px] | 12dp | 文本 size，只能是整型
Property | font-style | Enum | normal | normal/bold/italic/bold_italic
Property | font-family | String | 系统默认 | 字体集
Property | color | color | #000000FF | 取值格式为#RGBA
Property | text-align | Enum(可组合) | left | left/right/center
Property | max-lines | Integer | 0 | 0代表不限行数
Property | input-type | Enum | text | text(文字)/number(整数)/digit(小数)
Property | placeholder | String | | 当没有文字输入时的提示文案
Property | placeholder-color | color | #888888FF |
EventHandler | bindinput | String function(Object params) | | 当键盘输入时，触发input事件，params.event = {value: "文本", cursor: 1}，处理函数可以直接 return 一个字符串，将替换输入框的内容。value 为事件发生时文本框的内容，cursor为光标所在的位置
EventHandler | bindconfirm | Boolean function(Object params) | | 点击完成按钮时触发，params.event.value 为事件发生时文本框的内容，返回 true 表示按下完成按钮时不收起键盘，返回 false 表示收起键盘，默认为 false。注，在安卓上可能受到其他特性的影响导致键盘不收起，比如当指定 confirmType 为 Next 时，会聚焦到下一个输入框，此时键盘没有收起。
EventHandler | bindfocus | function(Object params) | | 输入框得到输入焦点时触发，params.event.value 为事件发生时文本框的内容
EventHandler | bindblur | function(Object params) | | 输入框失去焦点时触发，params.event.value 为事件发生时文本框的内容
Method | Integer getCursorStart() |  |  | 当前输入框的光标开始位置
Method | Integer getCursorEnd() |  |  | 当前输入框的光标结束位置
Method | String getValue() |  |  | 当前输入框的文本
Method | Boolean hasFocus() |  |  | 当前输入框是否获取了焦点
Method | void setCursorRange(Integer start, Integer end) |  |  | 设置当前输入框光标起始和结束位置
Method | void setCursorStart(Integer start) |  |  | 设置当前输入框光标起始位置
Method | void setFocus(Boolean focus) |  |  | 设置当前输入框的焦点属性

## list
+ `<list>` 组件是提供列表功能的核心组件。非常适合用于长列表的展示
+ 使用方法:
    + `<list>` 标签使用 `vn:for` 属性和胡子语法绑定到数组类型的数据
    + 默认情况下，数组的当前项下标变量名为 index，可以通过 `vn:for-index` 属性修改该变量名，同样的 `vn:for-item` 可以修改指定数组当前元素的变量名，和 for 语句定义是一样的
    + 在 `<list>` 标签内使用若干个 `<cell>` 标签来定义UI模板。每个 `<cell>` 代表着一种UI模板。
    + `<list>` 标签的 `vn:switch` 属性，用于定义UI模板和数据之间的关联关系。定义数组元素中指明 CellType 的字段名，它的默认值为 "case"
    + `<cell>` 的 `fixedCellSize` 的属性，标识该类型的CELL的尺寸是否是固定不变的。如果是 true，则该类型的CELL的高度或宽度一旦计算完成后就不再随着内容的变化而变化，该值默认是 true。用于优化 iOS 的列表性能，在 Android 上被忽略
    + 每个 `<cell>` 标签内应都有 `vn:case` 属性值用于指明 CellType
    + `<cell>` 内的页面布局通过胡子语法，访问数组 item 里的属性作为数据填充
    + 可为其中一个 `<cell>` 标签设置 `vn:default` 属性，表示这个Cell是默认CellType，当数据中的ViewType找不到匹配的Cell时，会展示这种Cell。
    + `<list>` 标签可使用 `<header>` 子标签作为下拉刷新的头部显示的视图。这个标签不能使用当前的 item 访问数据。
    + `<list>` 标签可使用 `<footer>` or `<pull-footer>` 子标签作为上拉刷新的尾部显示的视图。这个标签不能使用当前的 item 访问数据。

__注意：如果同一个类型的 Cell，它们的宽度或高度不是始终固定的话，请添加 fixedCellSize="false"，否则 iOS 系统会表现异常__

__注意：list 的 padding 属性和 header/footer 目前会冲突，尽量避免一起使用__

+ 代码示例如下：

```html
<!--list.vnml-->
<list direction="column" width="100%" height="100%" vn:for="{{listData}}" vn:switch="cellType" bindItemTap="onItemClick">
    <cell vn:case="text">
        <text font-size="50rpx">{{index}}: {{item.text}}</text>
    </cell>
    <cell vn:case="image">
        <view flex-direction="row" justify-content="space-between">
            <image width="45%" aspect-ratio="1.5" src="{{item.url}}"/>
            <image width="45%" aspect-ratio="1.5" src="{{item.url}}"/>
        </view>
    </cell>
    <cell vn:case="default" vn:default>
        <text>Unknown Cell Type</text>
    </cell>
</list>
```

```json
{
  "listData": [
    {
      "cellType": "text",
      "text": "this is first text"
    },
    {
      "cellType": "image",
      "url": "http://puui.qpic.cn/tv/0/11536175_680382/0"
    },
    {
      "cellType": "text",
      "text": "this is second text"
    },
    {
      "cellType": "image",
      "url": "http://puui.qpic.cn/tv/0/11522707_330185/0"
    }
  ]
}
```

```js
/**list.js**/
page({
    onItemClick: function(params) {
        var position = params.event.position;
        var path = 'listData[' + position + '].cellType'; 
        var curType = vn.data.query(path);
        console.log("被点击Item的type为：" + curType);
    }
});
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | vn:for | 胡子语句 | | 数据源，必填项
Property | vn:for-index | String | "index" |
Property | vn:for-item | String | "item" |
Property | vn:switch | String | "case" |
Property | direction | Enum | column | column/row，滚动方向
EventHandler | bindItemTap | function(Object params) | | 列表 Item 点击，位置参数为 params.event.position
EventHandler | bindItemLoad | function(Object params) | | 列表 Item 与数据绑定时回调，在Item重用时还会回调。params.event = { position:位置, cell:cell节点 *(since 0.5)* } 注：此时cell节点还未上屏，对它的操作可能返回非预期的结果。
EventHandler | bindItemAttach | function(Object params) | | 列表 Item 上屏时回调。params.event = { position:位置, cell:cell节点 *(since 0.5)* }
EventHandler | bindItemDetach | function(Object params) | | 列表 Item 下屏时回调。params.event = { position:位置, cell:cell节点 *(since 0.5)* } 注：此时cell节点已经下屏，对它的操作可能返回非预期的结果。
EventHandler | bindHeaderRefreshing | function(Object params) | | 列表发生了下拉刷新
EventHandler | bindFooterRefreshing | function(Object params) | | 列表发生了上拉加载
EventHandler | bindScroll | function(Object params) | | 列表滚动，params.event = { deltaX : 0, deltaY : 0 }; deltaX 和 deltaY（正数为下滑，负数为上滑）
EventHandler | bindScrollStateChange | function(Object params) | | 列表滚动状态切换，新状态为 params.event.newState。取值说明： 0:空闲;1:拖拽;2:滑动;
Method | void scrollToPosition(Integer position, Integer mode) |  |  | list滚动到指定的位置，position 代表 cell 的下标，从0开始。mode取值为，0:默认，以最短距离滚动到可视区域；1：滚动到可视区域的中间；2：滚动到可视区域的顶部
Method | void smoothScrollToPosition(Integer position, Integer mode) |  |  | 有动画的滚动到指定的位置。mode取值为，0:默认，以最短距离滚动到可视区域；1：滚动到可视区域的中间；2：滚动到可视区域的顶部
Method | void setFooterRefreshingEnabled(Boolean enable) |  |  | 是否允许上拉加载更多
Method | void setHeaderRefreshingEnabled(Boolean enable) |  |  | 是否允许下拉刷新
Method | void setHeaderRefreshing(Boolean enable) |  |  | 下拉刷新是否开始，如果已经开始刷新可以靠这个值结束刷新，若果没有刷新也可以通过代码触发，前提是setHeaderRefreshingEnabled(true)
Method | void setFooterRefreshing(Boolean enable) |  |  | 上拉刷新是否开始，如果已经开始刷新可以靠这个值结束刷新，若果没有刷新也可以通过代码触发，前提是setFooterRefreshingEnabled(true)
Method | void invalidateLayout() |  |  | 使 List 布局失效， 会导致 list 重新刷新布局，计算每个 cell 的宽高，只对 iOS 平台生效
Method | Float getScrollOffset() | | | 获取当前的偏移，单位为rpx

## header & footer

### header
header 主要用于实现下拉刷新，目前只能作为 list 的子控件

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
EventHandler | bindHeaderStateChange | function(Object params) | | 当下拉刷新状态发生变化时回调。params.event = {state: 0, isAutomatic: true, maxOffset: 20}; <br> state 0:空闲;1:拖拽;2:松开;3:刷新中;4:刷新完成; <br> isAutomatic 是否是 js 调用 <br> maxOffset 达到下拉刷新的偏移量 
EventHandler | bindHeaderMove | function(Object params) | | 当下拉刷新视图发生移动时回调。params.event = {hasRefreshed: false, isAutomatic: false, offset: 0} <br> hasRefreshed 是否已经触发刷新 <br> isAutomatic 是否是 js 调用 <br> offset 当前下拉的偏移（正数，下拉越多，绝对值越大）

+ 代码示例如下：


```html
<!--listHeaderFooter.vnml-->
<list id="mainList" vn:for="{{listData}}" vn:switch="cellType" bindHeaderRefreshing="onHeaderRefreshing" >
    <header class="listHeader" bindHeaderStateChange="onHeaderStateChange" bindHeaderMove="onHeaderMove">
        <text id="headerText"></text>
    </header>
    <cell vn:case="text">
        <text>{{index}}: {{item.text}}</text>
    </cell>
</list>
```

```css
/** listHeaderFooter.vnss **/
#mainList {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    padding: 30rpx;
    direction: column;
}

text {
    font-size: 40rpx;
    width: 100%;
    height:120rpx;
}

#headerText, #footerText {
    text-align: center;
    background-color: gray;
}

.listHeader, .listFooter {
    width: 100%;
    height: 100rpx;
    flex-grow: 1;
    align-items: center;
}
```

```json
{
  "listData": [
    {
      "cellType": "text",
      "text": "this is a text"
    },
    {
      "cellType": "text",
      "text": "this is a text"
    },
    {
      "cellType": "text",
      "text": "this is a text"
    }
  ]
}
```

```js
/**listHeaderFooter.js**/
page({     
    onHeaderRefreshing: function (params) {
        console.log('onHeaderRefresh');
        var timerId = window.setInterval(function() {
            let mainList = params.target;
            mainList.setHeaderRefreshing(false);
            window.clearInterval(timerId);
        },
        1000);
    },

    onHeaderStateChange: function (params) {
        headerChildren = params.target.getChildElements();
        switch (params.event.state) {
            case 0:
            headerChildren[0].setProperty("content", "空闲");
            break;
            case 1:
            headerChildren[0].setProperty("content", "拖拽中");
            break;
            case 2:
            headerChildren[0].setProperty("content", "松手");
            break;
            case 3:
            headerChildren[0].setProperty("content", "刷新中");
            break;
            case 4:
            headerChildren[0].setProperty("content", "刷新完成");
            break;
        }
    },

    onHeaderMove: function (params) {
        console.log("offset " + params.event.offset);
    }
});
```

### footer

footer 主要用于实现上拉时自动加载更多，目前只能作为 list 的子控件

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
EventHandler | bindFooterStateChange | function(Object params) | | 当上拉刷新状态发生变化时 params.event.state 代表了状态。<br> state 0:空闲; 1:刷新中; 2:没有更多数据了

```html
<list id="mainList" vn:for="{{listData}}" vn:switch="cellType" bindFooterRefreshing="onFooterRefreshing" >
    <cell vn:case="text">
        <text>{{index}}: {{item.text}}</text>
    </cell>
    <footer class="listFooter" bindFooterStateChange="onFooterStateChange">
        <text id="footerText">空闲</text>
    </footer>
</list>
```

```css
#mainList {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    padding: 30rpx;
    direction: column;
}

text {
    font-size: 40rpx;
    width: 100%;
    height:120rpx;
}

#headerText, #footerText {
    text-align: center;
    background-color: gray;
}

.listHeader, .listFooter {
    width: 100%;
    height: 100rpx;
    flex-grow: 1;
    align-items: center;
}
```

```json
{
  "listData": [
    {
      "cellType": "text",
      "text": "this is a text"
    },
    {
      "cellType": "text",
      "text": "this is a text"
    },
    {
      "cellType": "text",
      "text": "this is a text"
    },
    {
      "cellType": "text",
      "text": "this is a text"
    }
  ]
}
```

```js
var moreData = true;
page({     
    onFooterRefreshing: function (params) {
        console.log('onFooterRefresh');
        var timerId = window.setInterval(function() {
            let mainList = params.target;
            if (moreData)
            {
                var datas = vn.data.query("listData");
                for (var i = 0; i < 10; i++) {
                    var newData = {
                      "cellType": "text",
                      "text": "this is a text"
                    };
                    datas.push(newData);
                }
                vn.data.update("listData", datas);
                
                mainList.setFooterRefreshing(false);
                moreData = false;
            }
            else
            {
                mainList.setFooterRefreshingEnabled(false);  
            }
            window.clearInterval(timerId);
        },
        1000);
    },

    onFooterStateChange: function (params) {
        footerChildren = params.target.getChildElements();
        switch (params.event.state) {
            case 0:
            footerChildren[0].setProperty("content", "空闲");
            break;
            case 1:
            footerChildren[0].setProperty("content", "刷新中");
            break;
            case 2:
            footerChildren[0].setProperty("content", "没有更多数据了");
            break;
            case 3:
        }
    }
});
```

### pull-footer

pull-footer 主要用于实现上拉刷新，目前只能作为 list 的子控件。**注意，其功能和接口与 header 完全对称。**

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
EventHandler | bindFooterStateChange | function(Object params) | | 当上拉刷新状态发生变化时回调。params.event = {state: 0, isAutomatic: true, maxOffset: 20}; <br> state 0:空闲;1:拖拽;2:松开;3:刷新中;4:刷新完成; <br> isAutomatic 是否是 js 调用 <br> maxOffset 达到下拉刷新的偏移量 
EventHandler | bindFooterMove | function(Object params) | | 当上拉刷新视图发生移动时回调。params.event = {hasRefreshed: false, isAutomatic: false, offset: 0} <br> hasRefreshed 是否已经触发刷新 <br> isAutomatic 是否是 js 调用 <br> offset 当前上拉的偏移（正数，下拉越多，绝对值越大）

```html
<list id="mainList" vn:for="{{listData}}" vn:switch="cellType" bindFooterRefreshing="onFooterRefreshing">
    <cell vn:case="text">
        <text>{{index}}: {{item.text}}</text>
    </cell>
    <pull-footer class="listFooter" bindFooterStateChange="onFooterStateChange" bindFooterMove="onFooterMove">
        <text id="footerText"></text>
    </pull-footer>
</list>
```

```css
#mainList {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    padding: 30rpx;
    direction: column;
}

text {
    font-size: 40rpx;
    width: 100%;
    height:120rpx;
}

#headerText, #footerText {
    text-align: center;
    background-color: gray;
}

.listHeader, .listFooter {
    width: 100%;
    height: 100rpx;
    flex-grow: 1;
    align-items: center;
}
```

```json
{
  "listData": [
    {
      "cellType": "text",
      "text": "this is a text"
    },
    {
      "cellType": "text",
      "text": "this is a text"
    },
    {
      "cellType": "text",
      "text": "this is a text"
    },
    {
      "cellType": "text",
      "text": "this is a text"
    }
  ]
}
```

```js
var moreData = true;
page({     
    onFooterRefreshing: function (params) {
        console.log('onFooterRefresh');
        var timerId = window.setInterval(function() {
            let mainList = params.target;
            if (moreData)
            {
                var datas = vn.data.query("listData");
                for (var i = 0; i < 10; i++) {
                    var newData = {
                      "cellType": "text",
                      "text": "this is a text"
                    };
                    datas.push(newData);
                }
                vn.data.update("listData", datas);
                moreData = false;
            }
            else
            {
                
            }
            mainList.setFooterRefreshing(false);
            window.clearInterval(timerId);
        },
        1000);
    },

    onFooterStateChange: function (params) {
        footerChildren = params.target.getChildElements();
        switch (params.event.state) {
            case 0:
            footerChildren[0].setProperty("content", "空闲");
            break;
            case 1:
            footerChildren[0].setProperty("content", "拖拽中");
            break;
            case 2:
            footerChildren[0].setProperty("content", "松开");
            break;
            case 3:
            footerChildren[0].setProperty("content", "刷新中");
            break;
            case 4:
            footerChildren[0].setProperty("content", "刷新完成");
            break;
        }
    },

    onFooterMove: function (params) {
        console.log("offset " + params.event.offset);
    }
});
```



## scroll-view
这是一个可滚动的容器类。支持横向或纵向滚动。

+ 代码示例如下：

```html
<!--scroll.vnml-->
<scroll-view class="container">
	<scroll-view class="scroll" flex-direction="column">
		<text background-color="{{item.background}}" class="column-item" color="{{item.color}}" vn:for="{{views}}">
			{{item.text}}
		</text>
	</scroll-view>
</scroll-view>
```

```css
/** scroll.vnss **/
text {
	font-size: 30rpx;
	color: grey;
}

.container {
	width: 100%;
	flex-grow: 1;
	flex-direction: column;
	align-items: center;
	background-color: #f8f8f8;
	padding: 18rpx;
}

.column-item {
	width: 500rpx;
    height: 280rpx;
	text-align: center;
}

.scroll {
	width: 500rpx;
	height: 300rpx;
	margin: 50rpx;
}
```

```json
{
	"views": [
		{
			"text": "A",
			"color": "white",
			"background": "#1AAD19"
		},

		{
			"text": "B",
			"color": "white",
			"background": "#2782D8"
		},

		{
			"text": "C",
			"color": "black",
			"background": "#F1F1F1"
		}
	]
}
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | direction | Enum | column | column/row
Method | scrollTo(Float delta, Boolean animation) | | | 滚动到指定位置，单位为rpx；参数 animation 指定是否带动画效果
Method | Float getScrollOffset() | | | 获取当前的偏移，单位为rpx
EventHandler | bindScroll | function(Object params) | | 滚动时触发，params.event = {deltaX: 0, deltaY: 20}. deltaX 和 deltaY 为滚动的偏移量，单位为px
EventHandler | bindScrollStateChange | function(Object params) | | 回调 scroll-view 的滚动状态改变。params.event.newState 为当前状态。取值说明： 0:空闲;1:拖拽;2:滑动;


## view-pager
这是一个显示多页面的容器类，通过滑动切换页面，支持自动播放和无限滑动。

```html
<!--viewPager.vnml-->
<view id="wrapper">
	<view-pager vn:for="{{views}}" bindPageChange="onPageChange" vn:switch="cellType">
		<cell vn:case="text">
			<view>
				<text background-color="{{item.background}}" class="page-item" color="{{item.color}}">
					{{item.text}}
				</text>
			</view>
		</cell>
	</view-pager>
</view>
```

```json
{
	"views": [
		{
			"cellType": "text",
			"text": "A",
			"color": "white",
			"background": "#1AAD19"
		},

		{
			"cellType": "text",
			"text": "B",
			"color": "white",
			"background": "#2782D8"
		},

		{
			"cellType": "text",
			"text": "C",
			"color": "black",
			"background": "#F1F1F1"
		}
	]
}
```

```css
/** viewPager.vnss **/
text {
	font-size: 30rpx;
	color: grey;
}

#wrapper {
	width: 100%;
	height: 380rpx;
}

.container {
	width: 100%;
	flex-grow: 1;
	flex-direction: column;
	align-items: center;
	background-color: #f8f8f8;
	padding: 18rpx;
}

.page-item {
	width: 100%;
    height: 100%;
	text-align: center;
}

view-pager {
	width: 100%;
	height: 100%;
}
```

```js
/**viewPager.js**/
page({     
	onPageChange: function(param) {
		console.log("curIndex: " + param.event.pageIndex);
    }
});
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | vn:for | 胡子语句 | | 数据源，必填项
Property | vn:for-index | String | "index" | 数组下标
Property | vn:for-item | String | "item" | 数组项
Property | vn:switch | String | "case" | 数组项类型
Property | page-gap | [rpx pt dp px] | 0rpx | 分页间距
Property | previous-margin | [rpx pt dp px] | 0rpx | 前边距，可用于露出前一页的一小部分
Property | next-margin | [rpx pt dp px] | 0rpx | 后边距，可用于露出下一页的一小部分
Property | circular | Boolean | false | 是否开启无限滚动
Property | autoplay | Boolean | false | 是否开启自动滚动
Property | interval | Number | 5000 | 自动滚动的间隔时间，单位：毫秒
EventHandler | bindScroll | function(Float delta, Float offset, Float offsetPercent, Integer scrollState, Integer pageIndex) | | 滚动时触发， delta, offset, offsetPercent, scrollState, pageIndex
EventHandler | bindScrollStateChange | function(int scrollState) | | 0:空闲;1:拖拽;2:滑动
EventHandler | bindPageChange | function(int pageIndex) | | 滑动停止时指向的分页，pageIndex
Method | void setPageIndex(Integer index) | Integer | | 设置当前的分页编号
Method | Integer getPageIndex() | | | 获取当前的分页编号

## video
video组件用于播放音视频资源。

+ 代码示例如下：

```html
<!--video.vnml-->
<video src="http://gslb.miaopai.com/stream/vzQz~nbsBvpafyxhQF2OCcQVZbv~hP3I.mp4" autoplay="true" poster="http://puui.qpic.cn/qqvideo_ori/0/n0529gbp74d_496_280/0" />
```


类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | src | String | | 视频资源地址
Property | poster | String | | 视频海报
Property | controls | Boolean | true | 是否显示自带控件
Property | show-fullscreen-btn | Boolean | true | 是否显示全屏按钮，controls为false时不生效
Property | show-progress | Boolean | true | 是否显示进度条，controls为false时不生效
Property | objectfit | Enum | contain | contain/fill/cover
Property | initial-time | Integer | 0 | 指定视频初始播放位置，时长单位为毫秒
Property | autoplay | Boolean | false | 是否自动播放
Property | loop | Boolean | false | 是否循环播放
Property | muted | Boolean | false | 是否无声播放 *(since 0.5)*
EventHandler | bindPlay | function() | | 当开始/继续播放时触发play事件
EventHandler | bindPause | function() | | 当暂停播放时触发 pause 事件
EventHandler | bindEnded | function() | | 当播放到末尾时触发 ended 事件
EventHandler | bindTimeUpdate | function(int currentTime, int duration) | | 播放进度变化时触发。触发频率250ms一次，时长单位为毫秒
EventHandler | bindWaiting | function() | | 视频出现缓冲时触发
EventHandler | bindError | function(int errorCode, String errorInfo) | | 视频播放出错时触发
Method | Integer getCurrentTime() | | | 获取当前播放位置，时长单位为毫秒
Method | void seekTo(Integer time) | Integer | | 从指定毫秒开始播放，时长单位为毫秒
Method | void preload() | | | 开始预加载视频，如果视频已经加载好则无效
Method | void start() | | | 从暂停位置继续播放
Method | void resume() | | | 重头开始播放
Method | void pause() | | | 暂停
Method | void stop() | | | 停止播放，并释放资源
Method | Boolean isPlaying() | | | 是否正在播放
Method | Integer getDuration() | | | 获取当前播放视频的总长度，时长单位为毫秒。收到play事件以后才能获取准确值。

其中 objectfit 的有效值为：

 值 | 说明
 --- | ---
 fill | 填充。不保持原始的尺寸比例，使视频的宽高完全拉伸至填满 video 元素。
 cover | 覆盖。保持原始的尺寸比例，保证内容区域被填满。视频可能不能完整展示。
 contain | 包含。保持原始的尺寸比例，保证视频完整展示。部分内容区域可能会空白。
 


## camera
camera 是系统相机控件，可实现拍照和录制视频，同一页面只能插入一个 camera 组件，`0.2.0` 版本开始支持

iOS 请务必在 Native 侧的 info.plist 中声明相机和麦克风的权限

+ 代码示例如下：

```html
<scroll-view id="mainContainer">
	<camera id="camera" device-position="back"
	flash="off" style="width: 100%; height: 600rpx"></camera>
	<view style="width:100%;height:auto;flex-wrap:wrap">
		<button bindtap="takePhoto">拍照</button>
		<button bindtap="switchCamera">切换摄像头</button>
		<button bindtap="startRecord">开始录制视频</button>
		<button bindtap="stopRecord">停止录制视频</button>
		<button bindtap="openFlash">闪光灯：打开</button>
		<button bindtap="autoFlash">闪光灯：自动</button>
		<button bindtap="closeFlash">闪光灯：关闭</button>
	</view>
	<image src="{{src}}" style="width: 100%; height: auto; background-color:gray" mode="center-inside"></image>
</scroll-view>
```

```js
var device_position = "back";

page({
    takePhoto:function() {
        var camera = vn.dom.getElementById('camera');
        camera.takePhoto({
            "complete": function (res) {
                vn.data.update("src", res.tempImagePath);
            }
        })
    },


    switchCamera:function() {
        var camera = vn.dom.getElementById('camera');
    	if (device_position == "back")
    	{
    		camera.setProperty("device-position", "front");
    		device_position = "front";
    	}
    	else
    	{
    		camera.setProperty("device-position", "back");
    		device_position = "back";
    	}
    },

    startRecord:function() {
        var camera = vn.dom.getElementById('camera');
        camera.startRecord({
            "onstart": function (res) {	
                console.log("onstart result: " + res.error);
            },

            "onerror": function (res) {
            	console.log("onerror result: " + res.error);
            }
        })
    },

    stopRecord:function() {
        var camera = vn.dom.getElementById('camera');
        camera.stopRecord({
            "complete": function (res) {
                vn.data.update("src", res.tempThumbPath);
                console.log("video src is: "+res.tempVideoPath);
                console.log("error is: "+res.error);
            }
        })
    },
	
	autoFlash:function() {
        var camera = vn.dom.getElementById('camera');
		camera.setProperty("flash", "auto");
    },

    openFlash:function() {
        var camera = vn.dom.getElementById('camera');
        camera.setProperty("flash", "on");
    },

    closeFlash:function() {
        var camera = vn.dom.getElementById('camera');
        camera.setProperty("flash", "off");
    }
});
```

```css
#mainContainer{
    width: 100%;
    height: 100%;
    flex-direction: column;
}

button {
	width: 220rpx;
	height: 50rpx;
	font-size: 26rpx;
	text-align: center;
	margin: 15rpx;
	padding: 18rpx;
}
```

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | device-position | Enum | back | 前置或后置，值为front, back
Property | flash | Enum | auto | 闪光灯，值为auto, on, off（切换到前置摄像头的时候会自动关闭闪光灯）
Method | void takePhoto(Object object) |  | 见下表 | 拍照
Method | void startRecord(Object object) | | 见下表 | 开始录像
Method | void stopRecord(Object object) | | 见下表 | 结束录像

+ takePhoto 的参数说明
    
    **object 内的参数说明:**

    参数 | 类型 | 必填 | 说明
    --- | --- | --- | ---
    complete | Function(Object res) | 是 | 接口调用结束的回调函数（调用成功、失败都会执行）
    
    **complete 回调函数接收一个 res 对象；它的成员属性如下:**
    
    参数 | 类型  | 说明
    --- | --- | ---
    tempImagePath | String | 照片的临时存储路径，失败时为空
    error | String | 错误信息

    
+ startRecord 的参数说明

    **object 内的参数说明:**

    参数 | 类型 | 必填 | 说明
    --- | --- | --- | ---
    onstart | Function | 否 | 视频开始录制的回调，没有参数
    onerror | Function(Object res) | 否 | 录制视频过程出错的回调
    
    > 注意，如果接口调用失败（比如没有权限），或者接口调用成功但是录制过程失败（比如空间不足），回调的是 onerror

    > 注意，如果已经开始录制，此时进行再次调用 startRecord 或者转换摄像头等异常操作，会回调 onerror 发生异常
    
    **onerror 回调函数接收一个 res 对象；它的成员属性如下:**
        
    参数 | 类型  | 说明
    --- | --- | ---
    error | String | 错误信息

+ stopRecord 的参数说明

    **object 内的参数说明:**

    参数 | 类型 | 必填 | 说明
    --- | --- | --- | ---
    complete | Function(Object res) | 是 | 接口调用结束的回调函数（调用成功、失败都会执行）
    
    **complete 回调函数接收一个 res 对象；它的成员属性如下:**
    
    参数 | 类型  | 说明
    --- | --- | ---
    tempThumbPath | String | 封面图片的临时路径，失败时为空
    tempVideoPath | String | 视频的临时路径，失败时为空
    error | String | 错误信息


+ error 的错误类型
    + `CAMERA_PERMISSION_DENIED`
    + `CAMERA_STORAGE_FULL`
    + `CAMERA_BUSY`
    + 其他系统抛出的错误
