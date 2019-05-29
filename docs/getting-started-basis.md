---
id: getting-started-basis
title: Video Native开发基本概念
---

## 页面和文件

1. VideoNative 的每一个页面由1~4个同名但扩展名不同的文件组成，其中:
    + vnml 文件是必需的，用于描述页面节点结构，基于 XML 文件格式
    + json 文件为可选，用于存储页面初始化数据，基于 JSON 文件格式
    + vnss 文件为可选，用于存储页面CSS规则，基于 CSS 文件格式
    + js 文件为可选，用于存储页面相关的JS脚本，基于 JS 文件格式

2. 页面文件可以放在任意层次的目录里，但每个页面的4个文件需要处于相同的目录。最终通过编译打包后，通过与目录相对应的 pageUrl 作为来访问
    > 举例说明，页面文件路径是: `/vn_demo/index/index.*`，则最终对应的 pageUrl 就是: `vn://vn_demo/index/index`

## 脚本示例

1. 先来看一个简单的Demo示例

    ```html
    <!--Demo.vnml-->
    <view class="container">
        <text width="100%" height="auto" bindTap="onTextTap">{{userInfo.content}}</text>
    </view>
    ```

    ```json
    {
        "userInfo":
        {
        	   "content": "Hello World!"
        }
    }
    ```

    ```css
    /** Demo.vnss **/
    .container
    {
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: center;
    }
    
    text 
    {
        font-size: 50rpx;
        text-align:center;
        background-color: #DDDDDD;
    }
    ```

    ```js
    /** Demo.js **/
    page ({
        onTextTap: function (params) {
            var clickStr = "文本被点击";
            console.log(clickStr);
        }
    });
    ```
2. 简单说明如下：
    
    + `vnml`文件中的view节点通过属性`class`声明使用了`vnss`文件中`container`规则
    + `vnml`文件中的text节点通过`{{userInfo.nickName}}`的胡子语法访问`json`文件中的文本`Video`
    + `vnml`文件中的text节点通过属性`bindTap`绑定点击事件监听，关联到`js`文件中的`onTextTap`函数

## vnml 页面脚本

1. vnml 用于定义标签节点，定义相关的属性，以及事件绑定。当前支持的组件标签可参见[控件](https://videonative.github.io/VideoNative/#/Controls):

## json 数据脚本

1. json 存放了页面的初始化数据:

    + 数据基于 JSON 文本格式
    + 数据中的 KEY 只能是字母、数字、下划线组成，且只能以字母开头
    + 页面组件可以通过胡子语句访问数据

2. 胡子语句简介：
    + 胡子语句是为了使界面与数据分离而产生的
    + 胡子语句的基本格式是`{{***}}`
    + 胡子语句主要有两个功能：UI与数据绑定，表达式计算
    + 举例说明：

    ```html
    <!-- MustacheDemo.vnml -->
    <!-- showIndex从json中查询得到的值为0，则当前文本颜色为选中态："#FF8D33FF" -->
    <!-- showIndex如果被js代码修改为1时，则当前文本颜色变为正常态："#979797FF"，产生动态效果 -->
    <text color="{{showIndex == 0 ? selectedColor : normalColor}}">
        颜色变化
    </text>
    ```
    
    ```css
    /** MustacheDemo.vnss **/
    text 
    {
        width: 100%;
        height: 100rpx;
        font-size: 50rpx;
        text-align:center;
        background-color: #DDDDDD;
    }
    ```

    ```json
    {
        "showIndex": 0,
        "selectedColor": "#FF8D33FF",
        "normalColor": "#979797FF"
    }
    ```

### 控制语句

#### vn:for语句

+ 在组件标签上使用 `vn:for` 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件
+ 默认情况下，数组的当前项下标变量名为 `index`，数组当前项的变量名为 `item`
+ 使用 `vn:for-index` 可以指定数组当前下标的变量名
+ 使用 `vn:for-item` 可以指定数组当前元素的变量名
+ 脚本示例:

```html
<!--ForDemo.vnml-->
<text vn:for="{{array}}">
    {{index}}: {{item.message}} 
</text>
<text vn:for="{{array}}" vn:for-index="idx" vn:for-item="itemName">
    {{idx}}: {{itemName.message}} 
</text>
```

```css
/** ForDemo.vnss **/
text 
{
    width: 100%;
    height: 100rpx;
    font-size: 50rpx;
    text-align:center;
    background-color: #DDDDDD;
}
```

```json
{
    "array": [ 
        {"message": "foo" },
        {"message": "bar"}
    ]
}
```

#### vn:if语句

+ `vn:if` 条件语句用于判断当前组件标签是否需要渲染
+ 也可以用 `vn:elif` 或 `vn:else` 来添加 else 块
+ 脚本示例:

```html
<!--IfDemo.vnml-->
<text vn:if="{{length > 5}}"> 1 </text> 
<text vn:elif="{{length > 2}}"> 2 </text> 
<text vn:else> 3 </text>
```

```css
/** IfDemo.vnss **/
text 
{
    width: 100%;
    height: 100rpx;
    font-size: 50rpx;
    text-align:center;
    background-color: #DDDDDD;
}
```

```json
{"length": 4}
```

#### vn:for 与 vn:if

+ 当 `vn:if` 和 `vn:for` 同时存在于一个标签内时，`vn:if` 会被优先处理


## vnss 样式

1. vnss文件可定义若干个规则集，用于定义页面布局和组件属性，页面组件有多种方式匹配定义好的规则集
2. 各组件的属性会各不相同。详情请参见控件页
3. 样式表的匹配方式有：标签选择器，类选择器，ID选择器，后代选择器，伪类选择器，通配符选择器。详细说明如下：
    + 类选择器示例：

    ```css
    /** ClassSelector.vnss **/
    /* 匹配class="title"的标签 */
    .title {
        font-size:35rpx;
        color:#222222FF;
    }
    ```
    
    ```html
    <!--ClassSelector.vnml-->
    <text class="title" width="100%" height="auto">匹配文本</text>
    ```

    + 标签选择器示例：

    ```css
    /** TypeSelector.vnss **/
    /* 匹配布局中所有的text标签 */
    text {
        font-size:35rpx;
        color:#222222FF;
    }
    ```

    ```html
    <!--TypeSelector.vnml-->
    <text width="100%" height="auto">匹配文本1</text>
    <text width="100%" height="auto">匹配文本2</text>
    ```

    + ID选择器示例：

    ```css
    /** IDSelector.vnss **/
    /* 匹配id="container"的标签 */
    #container {
        width:100%;
        height:100%;
        flex-direction:column;
        background-color:#FFFFFFFF;
    }
    ```

    ```html
    <!--IDSelector.vnml-->
    <view id="mainContainer">
        <image class="posterImg" src="{{imageUrl}}"></image>
    </view>
    ```

    + 后代选择器示例：
 
    ```css
    /** DescendantSelector.vnss **/
    /* 匹配id="container"的标签下的文本标签 */
    #container text {
        width:100%;
        height:auto;
        font-size:20rpx;
        color:#FFFFFFFF;
    }
    ```

    + 伪类选择器示例：

    ```css
    /** PseudoSelector.vnss **/
    /* 匹配id="container"的标签下的被用户点击的文本标签 */
    #container text:active {
        width:100%;
        height:auto;
        font-size:20rpx;
        color:#FFFFFFFF;
    }
    ```

    + 通配符选择器示例：

    ```css
    /** UniversalSelector.vnss **/
    /* 匹配所有标签 */
        * {
            width:100%;
            height:200rpx;
            font-size:50rpx;
            background-color:green;
        }
    ```
    
    ```html
    <!--UniversalSelector.vnml-->
    <view id="mainContainer">
        <text>匹配文本</text>
    </view>
    <text>不匹配文本</text>
    ```

4. 尺寸单位：rpx(responsive pixel)。根据屏幕宽度进行自适应。默认规定屏幕宽为 750rpx

    > 如在 iPhone6 上，屏幕宽度为 375px，共有 750 个物理像素，则 750rpx = 375px = 750 物理像素，1rpx = 0.5px = 1 物理像素

设备 | rpx 换算 px（屏幕宽度/750） | px 换算 rpx（750/屏幕宽度）
--- | --- | ---
iPhone5 | 1rpx=0.42px | 1px=2.34rpx
iPhone6 | 1rpx=0.5px | 1px=2rpx
iPhone6 Plus | 1rpx=0.552px | 1px=1.81rpx

**注：**关于css更加详细的说明参看[CSS](https://videonative.github.io/VideoNative/#/CSS)

## js 文件脚本

JS文件用于定义页面业务相关的处理逻辑和数据，也用于定义页面生命周期回调函数。在JS脚本中，可以调用VN框架提供的API，具体参见[API](https://videonative.github.io/VideoNative/#/API)

JS脚本文件通过调用page函数来传入对象，用于处理页面事件。具体页面事件参见[API](https://videonative.github.io/VideoNative/#/Controls?id=%E9%80%9A%E7%94%A8%E4%BA%8B%E4%BB%B6)

