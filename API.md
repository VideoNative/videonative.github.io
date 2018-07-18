> **注意，以下 Js 方法都需要确保在主线程调用，否则可能发生不可预见的错误**

## vn.dom

+ **Object getElementById(String id)**

获取Dom对象

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
id | String | 是 | Dom对象的id，注意id属性必须唯一

**返回参数说明:**

类型 | 说明
--- |  ---
Object |  Dom对象

## dom对象

+ **Object getParentElement()**

获取父Dom对象

**返回参数说明:**

类型 | 说明
--- |  ---
Object |  父Dom对象

+ **Array getChildElements()**

获取子DOM对象数组

**返回参数说明:**

类型 | 说明
--- |  ---
Array |  子DOM对象数组

+ **Array getVisibleChildElements()**

获取可见的子DOM对象数组

**返回参数说明:**

类型 | 说明
--- |  ---
Array |  子DOM对象数组

+ **String getId()**

获取Dom对象的Id属性

**返回参数说明:**

类型 | 说明
--- |  ---
String |  Id属性

+ **String getClasses()**

获取Dom对象的类属性列表

**返回参数说明:**

类型 | 说明
--- |  ---
Array |  类属性列表

+ **String getType()**

获取Dom对象类型

**返回参数说明:**

类型 | 说明
--- |  ---
String | 类型名称如:"text"

+ **Array getPropertyKeyList()**

获取Dom对象的属性名称列表

**返回参数说明:**

类型 | 说明
--- |  ---
Array | 属性名称列表如：["margin-left","margin-top","background-color"]

+ **setEnabled(boolean enable)**

设置节点是否可用

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
enable | boolean | 是 | Dom节点是否可用


+ **boolean isEnabled()**

返回Dom节点是否可用

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | Dom节点是否可用

+ **Object getElementById(String id)**

获取子孙Dom对象

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
id | String | 是 | Dom对象的id，注意id属性必须唯一

**返回参数说明:**

类型 | 说明
--- |  ---
Object |  Dom对象

+ **setProperty(String propertyKey, String propertyValue)**

获取Dom对象

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
propertyKey | String | 是 | CSS的属性名称如："margin-left"
propertyValue | String | 是 | CSS的属性值如："15rpx"

+ **String getProperty(String propertyKey)**


**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
propertyKey | String | 是 | CSS的属性名称如："margin-left"

**返回参数说明:**

类型 | 说明
--- |  ---
String | Dom对象的属性值如："15rpx"

+ **Object getDataSet()**

获取Dom节点的所有data-属性

**返回参数说明:**

类型 | 说明
--- |  ---
Object | 所有data-属性都会在返回的对象的属性中如：有个一属性是data-index=3,则返回为json {"index":3}

+ **Array getPositionRect()**

获取节点相对于父节点的位置属性

**返回参数说明:**

类型 | 说明
--- |  ---
Array |  Dom对象位置属性如：[0,0,50.2,50.2] //4个值的顺序是上，右，下，左，单位是 rpx

+ **startAnimation(obj)**

对当前dom对象开启动画。传入参数obj对象包含了动画的属性，如动画操作的view属性、动画时长、时间函数、回调函数等属性。具体的属性定义如下

参数 | 说明
--- |  ---
alpha |  取值范围 0.0 ~ 1.0。  0=完全透明; 1=完全不透明
background_color | 取值范围和通用属性background-color相同
rotate_x | 在x轴上的旋转角度
rotate_y | 在y轴上的旋转角度
rotation | 表示旋转。和rotate_x、rotate_y不同的是，rotation是围绕pivot点做旋转，而rotate_x是x轴围绕pivot_x旋转，rotate_y围绕pivot_y旋转。
scale_x | 在x轴上的缩放比例。取值范围 0.0 ~ 任意正浮点数
scale_y | 在y轴上的缩放比例。取值范围 0.0 ~ 任意正浮点数
translate_x | 在x轴上的偏移。取值范围：负无穷 ~ 正无穷。类型：rpx,px,%
translate_y | 在y轴上的偏移。取值范围：负无穷 ~ 正无穷。类型：rpx,px,%
delay | 动画延迟开始的时间，毫秒，正整数
duration | 动画的时长，毫秒，正整数
pivot_x | 旋转和缩放的中心点x坐标。取值范围：负无穷 ~ 正无穷。类型：rpx,px,%
pivot_y | 旋转和缩放的中心点y坐标。取值范围：负无穷 ~ 正无穷。类型：rpx,px,%
repeat_count| 表示动画的重复执行次数，整数类型。默认值为0，表示不重复。-1表示无限循环。
complete | 回调函数。当动画结束时会回调该方法，没有参数
timingFunction | 动画的时间函数。支持下面几种取值：

timingFunction 的取值如下

参数 | 说明
--- |  ---
linear | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）
ease | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）
ease-in | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）
ease-out | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）
ease-in-out | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）
cubic-bezier(x1, y1, x2, y2) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值


+ **stopAnimation()**

停止该dom对象上的所有动画

>
说明：当开始新动画时，未完成的动画自动停止。
>
注意：对于list、viewpager，由于其cell会被复用，针对cell或者其子view做的动画，会在cell被复用时复位，不会保留最终状态。

+ **float getTranslationX()**

当前位置的 x 偏移，单位 rpx

+ **float getTranslationY()**

当前位置的 y 偏移，单位 rpx

+ **setTranslationX()**

设置 x 偏移，单位 rpx

+ **setTranslationY()**

设置 y 的偏移，单位 rpx

+ **float getScaleX()**

获取 x 轴上的缩放，单位 rpx

+ **float getScaleY()**

获取 y 轴上的缩放，单位 rpx

+ **setScaleX()**

设置 x 轴上的缩放，单位 rpx

+ **setScaleY()**

设置 y 轴上的缩放，单位 rpx

+ **float getAlpha()**

获取当前透明度

+ **setAlpha()**

设置透明度，范围 0.0~1.0

+ **float getRotation()**

获取当前旋转角度

+ **setRotation()**

设置旋转的角度

+ **float getRotationX()**

获取当前x轴旋转角度

+ **setRotationX()**

设置x轴旋转的角度

+ **float getRotationY()**

获取当前y轴旋转角度

+ **setRotationY()**

设置y轴旋转的角度


## vn.window

+ **Float getScreenWidth()**

获取屏幕的宽度

**返回参数说明:**

类型 | 说明
--- |  ---
Float | 屏幕的宽度，单位是 rpx

+ **Float getScreenHeight()**

获取屏幕的高度

**返回参数说明:**

类型 | 说明
--- |  ---
Float | 屏幕的高度，单位是 rpx

+ **String getOrientationSetting()**

获取屏幕方向设置

**返回参数说明:**

类型 | 说明
--- |  ---
String | 获取屏幕方向"portrait":竖向，"landscape":横向，"reverse-landscape":逆横向，"auto":根据屏幕位置自动旋转

+ **String getCurOrientation()**

获取当前屏幕方向

**返回参数说明:**

类型 | 说明
--- |  ---
String | 获取屏幕方向"portrait":竖向，"landscape":横向，"reverse-landscape":逆横向

+ **setOrientation(String orientation)**

设置屏幕方向，默认为竖屏

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
orientation | String | 是 | 屏幕方向"portrait":竖向，"landscape":横向，"reverse-landscape":逆横向，"auto":根据屏幕位置自动旋转，

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

+ **Object query(String kayPath)**

查询数据

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
kayPath | String | 是 | 内存中数据存储的路径

**返回参数说明:**

类型 | 说明
--- |  ---
Object | 查询获取的数据

+ **Boolean insert(String kayPath, Object data)**

插入新数据

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
kayPath | String | 是 | 内存中数据存储的路径
data | Object | 是 | 新数据

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | 插入是否成功

+ **Boolean delete(String kayPath)**

删除数据

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
kayPath | String | 是 | 内存中数据存储的路径

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | 删除是否成功

+ **Boolean update(String kayPath, Object data)**

更新数据

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
kayPath | String | 是 | 内存中数据存储的路径
data | Object | 是 | 新数据

**返回参数说明:**

类型 | 说明
--- |  ---
boolean | 更新是否成功

## vn.request

+ **int request(Object requestOrigin)**

请求数据

**Object内的参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
url | String | 是 | 开发者服务器接口地址
data | Object/String | 否 | 请求的参数
header | Object | 否 | 设置请求的 header，header 中不能设置 Referer。
method | String | 否 | （需大写）有效值：OPTIONS, GET(默认), HEAD, POST, PUT, DELETE, TRACE, CONNECT
dataType | String | 否 | 如果设为json(默认)，会尝试对返回的数据做一次 JSON.parse，有效值：json，text
requestType | String | 否 | application/json或text/plain
success | Function | 否 | 收到开发者服务成功返回的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行），没有参数

**success返回参数说明:**

参数 | 类型 | 说明
--- | --- |  ---
data| Object/String | 开发者服务器返回的数据

**fail返回参数说明:**
    
类型 | 说明
--- |  ---
int | errorCode(0表示成功)


+ **cancel(int requstId)**

取消请求

**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
requstId | int | 是 | 要取消的请求id

## vn.storage

+ **setStorage(Object object)**

将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
    
**object内的参数说明:**
    
参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | String | 是 | 本地缓存中的指定的key
data | Object/String | 是 | 需要存储的内容
success | Function | 否 | 接口调用成功的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行），没有参数
expires | Long | 否 | 存储过期事件，时长单位为毫秒

+ **int setStorageSync(Object object)**

将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
    
**object内的参数说明:**
    
参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | String | 是 | 本地缓存中的指定的 key
data | Object/String | 是 | 需要存储的内容
expires | Long | 否 | 存储过期事件，时长单位为毫秒
    
**返回参数说明:**
   
类型 | 说明
--- |  ---
int | errorCode(0表示成功)

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
int | errorCode(0表示成功)

+ **Object getStorageSync(String key)**

从本地缓存中同步获取指定 key 对应的内容。
**参数说明:**
    
参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | String | 是 | 本地缓存中的指定的key
    
**返回参数说明:**
    
类型 | 说明
--- |  ---
Object/String | key对应的内容

+ **removeStorage(Object obect)**

从本地缓存中异步移除指定 key 。
**object内的参数说明:**
    
参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | String | 是 | 本地缓存中的指定的 key
success | Function | 是 | 接口调用的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行），没有参数
    
**返回参数说明:**
    
类型 | 说明
--- |  ---
Object/String | key对应的内容

+ **int removeStorageSync(String key)**

从本地缓存中同步移除指定 key 。
**参数说明:**
    
参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | String | 是 | 本地缓存中的指定的 key
    
**返回参数说明:**
   
类型 | 说明
--- |  ---
int | errorCode(0表示成功)
    
+ **clearStorage()**
    
清理本地数据缓存。

+ **int clearStorageSync()**

同步清理本地数据缓存。
    
**返回参数说明:**
   
类型 | 说明
--- |  ---
int | errorCode(0表示成功)

## vn.navigate

+ **navigateTo(Object obj)**

新页面打开对应的Url。
**obj的内部参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
pageUrl | String | 是 | 页面Url
params | String/Object | 否 | 页面传递的参数

+ **redirectTo(Object obj)**

当前页面刷新URL。
**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
pageUrl | String | 是 | 页面Url
params | String/Object | 否 | 页面传递的参数

+ **navigateBack(Object obj)**

回退URL。
**obj的内部参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
deltaLevel | Integer | 否 | 回退的页面个数，默认为1
params | String/Object | 否 | 页面传递的参数

+ **relaunch(Object obj)**

关闭当前APP所有页面，再打开一个新页面。
**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
pageUrl | String | 是 | 页面Url，只能为绝对路径
params | String/Object | 否 | 页面传递的参数

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

获取App版本号。
**返回参数说明:**

类型 | 说明
--- |  ---
Integer | App版本号，从1开始不断增加。如:1

+ **void setShareData(String key, Object value)**

设置App内共享的数据。
**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | String | 是 | sessionKey
value | Object | 否 | sessionValue,为null的时候相当于清除sessionValue

+ **Object getShareData(String key)**

过去App内共享的数据。
**参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
key | Object/String | 是 | sessionKey

**返回参数说明:**

类型 | 说明
--- |  ---
Object | 返回Session数据。

## vn

+ **void scanCode(Object object)**

开启扫描。
**object内的参数说明:**

参数 | 类型 | 必填 | 说明
--- | --- | --- | ---
success | Function | 是 | 接口调用的回调函数
fail | Function | 否 | 接口调用失败的回调函数
complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行），没有参数

**success返回参数说明:**
    
参数 | 类型 | 说明
--- | --- |  ---
result | String | 扫描结果
    
**fail返回参数说明:**
    
类型 | 说明
--- |  ---
int | errorCode(0表示成功)
