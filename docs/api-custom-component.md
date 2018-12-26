---
id: api-custom-component
title: VN 组件
---

## 1. 如何开发一个组件？

&emsp;&emsp;开发组件和开发page一样，也是使用vnml、css、js、json这4个文件，区别是页面的js是调用page方法，而组件的js里是调用component方法。

&emsp;&emsp;component(obj) 参数obj对象可包含如下属性：

1. 暴露给外部的属性集 properties，定义每一个属性的名字，以及默认值（可缺省）
2. 暴露给外部的方法集 methods
3. 暴露给外部的事件集 events
4. 组件生命周期回调函数：created、attached、ready、detached

例子：

```javascript
component({
    //这里定义对外暴露的属性，包括属性名、类型、默认值
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        innerText: {
            value: 'default value'
        }
    },

    //这里是这个组件暴露给外面的dom接口
    methods : {
        getName : function() {
        },
        openPage : function() {
        }
    },

    //对外暴露的自定义事件
    events : {
        myevent : {
        }
    },

    ready : function(p) {
    }
});
```

&emsp;&emsp;说明：组件可以所支持的css选择器。但组件和外界是断层的，所以级联选择器可能出现非预期的效果。

## 2. 如何使用一个组件？

&emsp;&emsp;使用方需要在自己的页面js或者组件js中，调用 usingcomponents 方法来注册组件：定义组件名和路径。该函数可多次调用，可一次注册多个组件。后面设置的同名组件会覆盖前面设置的。也可在app的info.json中使用 usingcomponents {} 块注册，对该app下的所有页面生效。

   例子：在页面js中调用 usingcomponents 函数

```javascript
   usingcomponents({
       'custom-text' : 'path/to/cusotm/text',
       'custom-image' : 'path/to/cusotm/image'
   });
```

或者在info.json中定义

```json
   usingcomponents : {
       "custom-text" : "path/to/cusotm/text",
       "custom-image" : "path/to/cusotm/image"
   });
```

&emsp;&emsp;使用方在vnml中使用这些自定义的组件名

例子：

```html
   <custom-text myprop="12345">demo custom component</custom-text>
```

## 3. 容器类的自定义组件

&emsp;&emsp;这里我们引入一个新的节点类型&lt;slot&gt;。当自定义组件需要引入外部定义的节点时，用&lt;slot&gt;来占位。当需要用到多个slot时，可以用名字来区别。例子：

组件vnml：

```html
   <view>
      <slot name="header" />
      <text>11111</text>
      <text>22222</text>
      <slot name="footer" />
   </view>
```

使用方vnml:

```html
   <custom-view>
       <image slot="footer" />
       <button slot="header" />
   </custom-view>
```

&emsp;&emsp;说明：这里外部定义的view，它绑定的数据、回调接口等，使用是外部的资源，而非组件内的

## 4. 关于组件隔离和解耦

&emsp;&emsp;组件使用自己的JS、CSS、JSON、vn.data。组件和外部的交互通过注册组件时暴露的方法和事件来实现。
&emsp;&emsp;组件自定义的属性，绑定到内部数据源，组件的vnml可通过胡子语法访问这些值，如: {{demoprop}}
&emsp;&emsp;组件js通过 this.triggerEvent 来向外发送事件，如触发 bindmyevent 事件，调用 this.triggerEvent("myevent", o)，不需要加"bind"
&emsp;&emsp;组件js也可以通过 vn.data.query("demoprop") 来获取自定义属性的值。
