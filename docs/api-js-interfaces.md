---
id: api-js-interfaces
title: JS API
---
> **注意，以下 JS 方法都需要确保在主线程调用，否则可能发生不可预见的错误**

## vn

+ **void scanCode(Object object)**

开启二维码扫描

iOS 请务必在 Native 侧的 info.plist 中声明相机的权限


**object内的参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
success | Function | 是 | 接口调用的回调函数
fail | Function | 否 | 接口调用失败的回调函数，没有参数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行），没有参数

**success回调函数接收一个Object参数；它的成员属性如下:**

属性 | 类型 | 说明
--- | --- |  ---
result | String | 扫描得到的结果


+ **Float toRpx(String value)**

将输入字符串转换为数字型的rpx值。例如："10pt"、"10px"、"10rpx"

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
value | String | 是 | 形如："10pt","10px","10rpx"的字符串

**返回参数说明:**

类型 | 说明
--- | ---
Float | 数字类型的rpx值

+ **void getSystemInfo(Object object)**

获取系统信息

**object内的参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
success | Function | 是 | 接口调用的回调函数
fail | Function | 否 | 接口调用失败的回调函数

**success回调函数接收一个Object参数；它的成员属性如下:**

属性 | 类型 | 说明
--- | --- |  ---
language | String | 系统语言，如：zh_CN
platform | String | 系统平台，如：ios
system | String | 操作系统和版本号，如：iOS 12.1.2
brand | String | 设备品牌，如：iPhone
model | String | 设备型号，如：iPhone 8

**fail回调函数接收一个Object参数；它的成员属性如下:**

属性 | 类型 | 说明
--- | --- |  ---
error | String | 错误信息

## vn.dom

+ **Object getElementById(String id)**

在DOM树中逐级查找并返回第一个id相符的DOM对象。如果找不到则返回null

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
id | String | 是 | DOM对象的id

**返回参数说明:**

类型 | 说明
--- | ---
Object | DOM对象，或者null

+ **fullscreenElement** *(since 0.4)*

属性。用于获取当前处于全屏模式的DOM节点。如果没有全屏元素，则为null

+ **exitFullscreen()** *(since 0.4)*

调用该方法来退出全屏模式

## DOM对象

+ **Object getParentElement()**

获取父DOM对象；如果没有父DOM对象，则返回null

**返回参数说明:**

类型 | 说明
--- | ---
Object | 父DOM对象；或者null

+ **Array getChildElements()**

获取包含子DOM对象的数组

**返回参数说明:**

类型 | 说明
--- | ---
Array | 包含子DOM对象的数组

+ **Array getVisibleChildElements()**

获取屏幕可见的子DOM对象的数组

**返回参数说明:**

类型 | 说明
--- |  ---
Array | 子DOM对象的数组

+ **String getId()**

获取DOM对象的Id属性

**返回参数说明:**

类型 | 说明
--- | ---
String | Id属性

+ **Array getClasses()**

获取DOM对象的class属性中定义的类选择器的字符串数组

**返回参数说明:**

类型 | 说明
--- | ---
Array | class属性的字符串数组

+ **String getType()**

获取DOM对象的标签类型

**返回参数说明:**

类型 | 说明
--- |  ---
String | DOM的标签类型，例如:"text"

+ **Array getPropertyKeyList()**

获取DOM对象的标签中定义的所有属性的名称的字符粗数组

**返回参数说明:**

类型 | 说明
--- |  ---
Array | 属性名称列表如：["margin-left","margin-top","background-color"]

+ **setEnabled(boolean enable)**

设置DOM对象是否可用

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
enable | boolean | 是 | DOM节点对象是否可用

+ **boolean isEnabled()**

返回DOM节点对象是否可用

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | DOM节点是否可用

+ **Object getElementById(String id)**

从该DOM节点开始逐级查找子节点，并返回第一个id相符的DOM节点。如果未找到，则返回null

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
id | String | 是 | DOM对象的id

**返回参数说明:**

类型 | 说明
--- | ---
Object | DOM对象；或者null

+ **setProperty(String propertyKey, var propertyValue)**

设置DOM对象的属性

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
propertyKey | String | 是 | CSS的属性名称如："margin-left"
propertyValue | var | 是 | 新的属性值，可为基本数据类型，或者JSON数组、JSON对象

+ **String getProperty(String propertyKey)**

获取DOM对象的属性；如果该DOM没有设置该属性，则返回null

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
propertyKey | String | 是 | CSS的属性名称如："margin-left"

**返回参数说明:**

类型 | 说明
--- | ---
String | DOM对象的属性值如："15rpx"

+ **Object getDataSet()**

获取DOM节点的所有名为 data- 开头的属性，例如：data-name="test"

**返回参数说明:**

类型 | 说明
--- | ---
Object | 所有名为 data- 开头的属性都会在返回的对象的属性中。如：属性是data-index="3"，则返回的对象为：{ index : "3" }

+ **Array getPositionRect()**

获取DOM节点相对于父节点的位置信息，类型为rpx数值。位置顺序如下：[top, right, bottom, left]

请配合 isAttachedToWindow  使用

**返回参数说明:**

类型 | 说明
--- |  ---
Array | 返回值格式如：[0, 0, 50.2, 50.2] //4个值的顺序是上，右，下，左，单位是 rpx

+ **Object getBoundingClientRect()**

获取DOM节点相对于屏幕的位置属性

请配合 isAttachedToWindow  使用

**返回参数说明:**

类型 | 说明
--- | ---
Object | 参照 W3C 的 [nsIDOMClientRect](https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMClientRect)

+ **boolean isAttachedToWindow()**

返回DOM节点对象是否在屏幕上（比如 Cell 滚出屏幕、或者 View不在视图层级上，都会返回 false）

如果该方法返回 false，则 getPositionRect 和 getBoundingClientRect 的位置信息是不准的

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | DOM节点对象是否在屏幕上

+ **startAnimation(Object obj)**

对当前DOM对象开启动画。传入参数obj对象包含了动画的属性，如动画操作的属性、动画时长、时间函数、回调函数等。具体的属性定义如下

参数 | 说明
--- | ---
alpha | 数字。取值范围 0.0 ~ 1.0。  0=完全透明; 1=完全不透明
background_color | 字符串。取值和通用属性background-color相同
rotate_x | 数字。表示在x轴上的旋转角度
rotate_y | 数字。表示在y轴上的旋转角度
rotation | 数字。表示旋转的角度。和rotate_x、rotate_y不同的是，rotation是围绕pivot点做旋转，而rotate_x是x轴围绕pivot_x旋转，rotate_y围绕pivot_y旋转。
scale_x | 数字。在x轴上的缩放比例。取值范围 0.0 ~ 任意正浮点数
scale_y | 数字。在y轴上的缩放比例。取值范围 0.0 ~ 任意正浮点数
translate_x | 字符串。在x轴上的偏移。支持的单位：rpx,pt,px,%
translate_y | 字符串。在y轴上的偏移。支持的单位：rpx,pt,px,%
delay | 动画延迟开始的时间，毫秒，正整数
duration | 动画的时长，毫秒，正整数
pivot_x | 字符串。旋转和缩放的中心点x坐标。支持的单位：rpx,pt,px,%
pivot_y | 字符串。旋转和缩放的中心点y坐标。支持的单位：rpx,pt,px,%
repeat_count| 表示动画的重复执行次数，整数类型。默认值为0，表示不重复。-1表示无限循环。
complete | 回调函数。当动画结束时会回调该方法，没有参数
timingFunction | 字符串。动画的时间函数。支持下面几种取值：

timingFunction 的取值如下

参数 | 说明
--- |  ---
linear | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）
ease | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）
ease-in | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）
ease-out | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）
ease-in-out | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）
cubic-bezier(x1, y1, x2, y2) | 在 cubic-bezier 函数中定义自己的值。值为 0 至 1 之间的数值


+ **stopAnimation()**

停止该DOM对象上的动画

> **说明：当开始新动画时，未完成的动画自动停止。**

> **注意：对于list、viewpager，由于其cell会被复用，针对cell或者其子view做的动画，会在cell被复用时复位，不会保留最终状态。**

+ **Float getTranslationX()**

当前位置的 x 偏移，单位 rpx

+ **Float getTranslationY()**

当前位置的 y 偏移，单位 rpx

+ **setTranslationX(String)**

设置 x 偏移

+ **setTranslationY(String)**

设置 y 的偏移

+ **Float getScaleX()**

获取 x 轴上的缩放，单位 rpx

+ **Float getScaleY()**

获取 y 轴上的缩放，单位 rpx

+ **setScaleX(String)**

设置 x 轴上的缩放

+ **setScaleY(String)**

设置 y 轴上的缩放

+ **Float getAlpha()**

获取当前透明度

+ **setAlpha(Float)**

设置透明度，范围: 0 ~ 1

+ **Float getRotation()**

获取当前旋转角度

+ **setRotation(Float)**

设置旋转的角度

+ **Float getRotationX()**

获取当前x轴旋转角度

+ **setRotationX(Float)**

设置x轴旋转的角度

+ **Float getRotationY()**

获取当前y轴旋转角度

+ **setRotationY(Float)**

设置y轴旋转的角度

+ **requestFullscreen()** *(since 0.4)*

将其他正处于全屏模式的节点恢复，并将当前DOM元素设置为全屏模式。如果进入全屏失败，当前节点会收到 fullscreenerror 回调。

## vn.window

+ **Float getScreenWidth()**

获取屏幕的宽度，单位rpx

**返回参数说明:**

类型 | 说明
--- |  ---
Float | 屏幕的物理宽度，单位是 rpx

+ **Float getScreenHeight()**

获取屏幕的高度，单位rpx

**返回参数说明:**

类型 | 说明
--- |  ---
Float | 屏幕的物理高度，单位是 rpx

+ **String getOrientationSetting()**

获取屏幕方向设置

**返回参数说明:**

类型 | 说明
--- |  ---
String | 获取屏幕方向，可能的值："portrait":竖向，"landscape":横向，"reverse-landscape":逆横向，"auto":根据屏幕位置自动旋转

+ **String getCurOrientation()**

获取当前屏幕方向

**返回参数说明:**

类型 | 说明
--- |  ---
String | 获取屏幕方向。可能的值为："portrait":竖向， "landscape":横向， "reverse-landscape":逆横向

+ **setOrientation(String orientation)**

设置屏幕方向。可用的值："portrait":竖向，"landscape":横向，"reverse-landscape":逆横向，"auto":根据屏幕位置自动旋转

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
orientation | String | 是 | 屏幕方向

+ **Boolean isDialog()**

当前页面是否为弹框样式

**返回参数说明:**

类型 | 说明
--- |  ---
Boolean | 当前页面是否为弹框样式

## console

+ **log(Object message)**

打印日志

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
message | Object | 是 | 日志的内容

## vn.data

+ **Object query(String keyPath)**

查询数据

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
keyPath | String | 是 | 内存中数据存储的路径

**返回参数说明:**

类型 | 说明
--- |  ---
Object | 查询获取的数据

+ **Boolean insert(String keyPath, Object data)**

插入新数据

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
keyPath | String | 是 | 内存中数据存储的路径
data | Object | 是 | 新数据

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | 插入是否成功

+ **Boolean delete(String keyPath)**

删除数据

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
keyPath | String | 是 | 内存中数据存储的路径

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | 删除是否成功

+ **Boolean update(String keyPath, Object data)**

更新数据

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
keyPath | String | 是 | 内存中数据存储的路径
data | Object | 是 | 新数据

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | 更新是否成功

+ **Boolean append(String keyPath, Object dataA, Object dataB, ...)**

往数组尾部批量添加数据，keyPath需指向到一个Array，如果该数组不存在，会自动创建。如果keyPath指向的对象已经存在并且不是数组类型，则失败并返回false。

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
keyPath | String | 是 | 数据路径指向到一个Array
dataA | Object | 是 | 新数据
dataB | Object | 是 | 新数据

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | 更新是否成功

+ **Boolean remove(String keyPath, Number index, Number count)**

批量移除数组中的数据。keyPath需指向到一个Array。如果该对象不存在，则返回false。

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
keyPath | String | 是 | 数据路径指向到一个Array
index | Number | 是 | 待删除数据的起始位置，取值范围为 0 ~ array.length-1
count | Number | 是 | 待删除数据的数量，正整数

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | 更新是否成功

+ **void watch(String keyPath, Function callback)**

注册对keyPath的监听，当指定路径的数据发生变化时，回调指定的callback函数。callback会接收到一个对象，包含通知的keypath和更新类型。

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
keyPath | String | 是 | 内存中数据存储的路径
callback | Function | 是 | 回调处理函数


+ **Boolean unwatch(String keyPath, Function callback)**

反注册之前通过watch注册的监听。参数callback必须为上次调用watch时传入的函数。

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
keyPath | String | 是 | 内存中数据存储的路径
callback | Function | 是 | 回调处理函数

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | 更新是否成功

## vn.request

+ **Integer request(Object requestOrigin)**

请求网络数据

**Object内的参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
url | String | 是 | 请求url
data | Object/String | 否 | 请求的参数
header | Object | 否 | 设置请求的 header
method | String | 否 | （需大写）有效值：OPTIONS, GET(默认), HEAD, POST, PUT, DELETE, TRACE, CONNECT
dataType | String | 否 | 如果设为json(默认)，会尝试对返回的数据做一次 JSON.parse，有效值：json，text
requestType | String | 否 | application/json或text/plain
success | Function | 否 | 收到开发者服务成功返回的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行），没有参数

**返回参数说明:**

类型 | 说明
--- |  ---
Integer | requestId，可用于取消请求


**success返回参数说明:**

参数 | 类型 | 说明
--- | --- |  ---
data| Object/String | 开发者服务器返回的数据

**fail返回参数说明:**
    
类型 | 说明
--- |  ---
Integer | 错误码


+ **cancel(Integer requstId)**

取消之前的request，传入参数requestId为request调用时的返回值

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
requstId | Integer | 是 | 要取消的请求id

## vn.storage

+ **setStorage(Object object)**

将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
    
**object内的参数说明:**
    
参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | String | 是 | 本地缓存中的指定的key
data | Object/String | 是 | 需要存储的内容
success | Function | 否 | 接口调用成功的回调函数，没有参数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行），没有参数
expires | Long | 否 | 存储过期时间，单位为毫秒

**fail返回参数说明:**
    
类型 | 说明
--- |  ---
Integer | 错误码

+ **getStorage(Object object)**

从本地缓存中异步获取指定 key 对应的内容。

**object内的参数说明:**
    
参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | String | 是 | 本地缓存中的指定的key
success | Function | 否 | 接口调用成功的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行），没有参数
    
**success返回参数说明:**
    
参数 | 类型 | 说明
--- | --- |  ---
data| Object/String | key对应的内容
    
**fail返回参数说明:**
    
类型 | 说明
--- |  ---
Integer | 错误码

+ **removeStorage(Object obect)**

从本地缓存中异步移除指定 key 。

**object内的参数说明:**
    
参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | String | 是 | 本地缓存中的指定的 key
success | Function | 是 | 接口调用的回调函数，没有参数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行），没有参数
    
**fail返回参数说明:**
    
类型 | 说明
--- |  ---
Integer | 错误码
    
+ **clearStorage(Object obect)**
    
清理本地数据缓存。参数非必填。

**object内的参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
success | Function | 否 | 接口调用成功的回调函数，没有参数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行），没有参数

**fail返回参数说明:**
    
类型 | 说明
--- |  ---
Integer | 错误码

## vn.navigate

+ **navigateTo(Object obj)**

新页面打开对应的Url。

**obj的内部参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
pageUrl | String | 是 | 页面Url
params | Object | 否 | 页面传递的参数
animate | boolean | 是 | 页面跳转动画（0.2.0 版本开始支持）

+ **redirectTo(Object obj)**

当前页面刷新URL。

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
pageUrl | String | 是 | 页面Url
params | Object | 否 | 页面传递的参数

+ **navigateBack(Object obj)**

回退URL。

**obj的内部参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
deltaLevel | Integer | 否 | 回退的页面个数，默认为1
params | Object | 否 | 页面传递的参数
animate | boolean | 是 | 页面跳转动画（0.2.0 版本开始支持）

+ **relaunch(Object obj)**

关闭当前APP所有页面，再打开一个新页面。

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
pageUrl | String | 是 | 页面Url，只能为绝对路径
params | Object | 否 | 页面传递的参数

## vn.app

+ **String getSDKVersionName()**

获取SDK版本名称。

**返回参数说明:**

类型 | 说明
--- |  ---
String | SDK版本名称如:"1.0.0"

+ **Integer getSDKVersionCode()**

获取SDK版本号。

**返回参数说明:**

类型 | 说明
--- |  ---
Integer | SDK版本号，从1开始不断增加。如:1

+ **Integer getAppVersion()**

获取app版本号。如果当前页面不是以app方式接入，则返回0

**返回参数说明:**

类型 | 说明
--- |  ---
Integer | app版本号

+ **void setShareData(String key, Object value)**

设置app内共享的内存数据

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | String | 是 | key
value | Object | 否 | value，为null的时候相当于清除数据

+ **Object getShareData(String key)**

获取之前调用setShareData设置的内存数据。

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | Object/String | 是 | sessionKey

**返回参数说明:**

类型 | 说明
--- |  ---
Object | 数据对象，或者null
