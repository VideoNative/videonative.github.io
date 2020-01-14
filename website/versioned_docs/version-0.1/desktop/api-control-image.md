---
id: version-0.1-api-control-image
title: VN image
original_id: api-control-image
---

## image
image用于显示图片。支持网络和本地图片。

+ 代码示例如下：

```html
<!--image.vnml-->
<image width="100%" aspect-ratio="1.78" src="/img/video-native.png" border-radius="30rpx" mode="center-crop"/>
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
~~hidden-Property~~ | ~~autosize~~ | --- | --- | ~~不支持根据image自动化宽高~~

---
* VNGF支持解码：png/jpeg/bmp/apng/svg

* VNViews支持解码：png/jpeg

---
* 其中 mode 的有效值为

模式 | 值 | 说明
--- | --- | ---
缩放 | fit-xy |不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
缩放 | fit-center | 保持纵横比缩放图片，使图片的长边能完全显示出来，居中显示。小图会放大，大图会缩小
缩放 | center | 不缩放图片，只显示图片的中间区域
缩放 | center-inside | 保持纵横比缩放图片，保证图片的长边能完全居中 显示出来。小图不放大，大图会缩小
裁剪 | center-crop | 保持纵横比缩放图片，只保证图片的短边能完全显示出来。图片通常只短边方向是完整的，另一个方向将会发生截取
裁剪 | focus-crop | 重心裁剪，具体裁剪位置由 focus-point-x 和 focus-point-y 决定

![](/img/image_mode.png)

注意，本标签不支持 padding 属性