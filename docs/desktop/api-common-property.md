---
id: api-common-property
title: VN 属性
---

## 通用属性

通用属性名 | 类型 | 默认值 | 说明
--- | --- | --- | --- 
class | String | | 引用 vnss 中的样式类；多个样式可用空格分隔
id | String | | 用于 CSS 匹配和 getElementById()
width | [rpx pt dp px % auto] | auto | ---
height | [rpx pt dp px % auto] | auto | ---
aspect-ratio | Float | | 宽高比
background-stretch-param | [整数的组合] | |  ---
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
max-height | [rpx pt dp px %] | | ---
max-width | [rpx pt dp px %] | | ---
min-height | [rpx pt dp px %] | | ---
min-width | [rpx pt dp px %] | | ---
hidden | Boolean | false | 是否隐藏
enable | Boolean | true | 是否启用，为 false 时不接收点击事件
tooltip	| String |""| 鼠标hover提示，只有桌面端支持
~~overflow~~ | [visible hidden] | hidden | ~~当内容溢出元素框时发生的事情，visible 表示溢出的内容不会被裁剪，hidden 表示溢出的内容会被裁剪，visible 必须配合 flex-shrink=0 使用~~
~~border-color~~ | color | #00000000 | ~~设置四条边框的颜色。目前除了 View 标签能支持4个边框设置不同的值，其他标签只支持4个边框设置相同的值~~
~~border-width~~ | [rpx pt dp px] | 0rpx | ~~设置边框的宽度。目前除了 View 标签能支持4个边框设置不同的值，其他标签只支持4个边框设置相同的值~~
~~border-radius~~ | [rpx pt dp px] | 0rpx | ~~设置边框的圆角属性。目前除了 View 标签能支持4个角设置不同的值，其他标签只支持4个角设置相同的值~~


## Flexbox 布局属性
Flexbox 布局属性用于页面排版布局，它分为容器节点相关的属性和子节点相关的属性。容器属性和子节点属性相互影响，配合生效。
关于 Flexbox 属性的详细定义，请参见: [YogaLayout](https://yogalayout.com/docs)

### 代码示例如下：
```html
<!--Flexbox.vnml-->
    <view width="100%" height="auto" flex-direction="row" align-items="center">
    <image width="200rpx" aspect-ratio="1" src="/img/video-native.png" position="relative"/>
    <text height="200rpx" width="auto" flex-grow="1" font-size="30rpx" background-color="gray">
        FlexBox
    </text>
</view>
```

### Flex 容器节点的属性
这些属性只对容器节点有效(view/list/scroll-view/view-pager)

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | align-content | Enum | stretch | 多行下多根主轴线的对齐方式：flex-start / flex-end / center / space-between / space-around / stretch
Property | align-items | Enum | stretch | 项目在交叉轴上如何对齐：flex-start / flex-end / center / baseline / stretch
Property | flex-direction | Enum | row | 弹性布局主轴的方向：row / row-reverse / column / column-reverse
Property | flex-wrap | Enum | no-wrap | 折行属性，行排满，如何换行属性：nowrap / wrap / wrap-reverse
Property | justify-content | Enum | flex-start | 项目在主轴上的对齐方式：flex-start / flex-end / center / space-between / space-around

### Flex 子节点的属性
这些属性可配置于所有标签，但仅当其有父容器时才生效

类型 | 属性/事件/方法名 | 参数类型 | 参数默认值 | 说明
--- | --- | --- | --- | ---
Property | align-self | Enum | auto | 允许单个项目有与其他项目不一样的对齐方式：auto / flex-start / flex-end / center / baseline / stretch
Property | flex-basis | [Enum %] | auto | 在分配多余空间之前，项目占据的主轴空间
Property | flex-grow | Float | 0 | 拉伸因子，项目的放大比例
Property | flex-shrink | Float | 1 | 收缩规则，项目的缩小比例
Property | position | Enum | relative | relative/absolute
Property | left  | [rpx pt dp px %] | 0rpx | left属性影响元素的水平位置
Property | right  | [rpx pt dp px %] | 0rpx | right属性影响元素的水平位置
Property | top  | [rpx pt dp px %] | 0rpx | top属性影响元素的竖直位置
Property | bottom  | [rpx pt dp px %] | 0rpx | bottom属性影响元素的竖直位置

