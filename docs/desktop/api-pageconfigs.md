---
id: api-pageconfigs
title: VN pageconfigs配置
---

### VNPackage目录结构示例
.  
└─ app  
&emsp;├─ info.json  
&emsp;├─ index  
&emsp;&emsp;├─ index.js  
&emsp;&emsp;├─ index.json  
&emsp;&emsp;├─ index.vnml  
&emsp;&emsp;├─ index.vnss  

#### 每个app可以包含多个page，每个app有一个info.json
#### 每个应用，可以创建多个app，区分多个分离的业务场景；如果应用是全VN实现的，也可以只创建一个app

## App预配置
在 `info.json` 文件中可以对 App 页面预设一些配置，配置项为 pageConfigs，示例如下：

```json
{
  "packageId" : "39",
  "version" : "17120519",
  "pageConfigs": [
    {
      "pageUrl": "vn://jsapi/jsapi",
      "style": "dialog"
    }
  ]
}
```
pageConfigs 是一个数组，每个配置项对应一个页面配置，包括

属性	| 取值	|默认值	|取值类型	|说明
---     | ---   | ---   | ---	| ---		
pageUrl	        |"vn://index/index"	|""	|STR	
style	        |"dialog"或其他	|""	|STR	|窗口/子视图，如果为 "dialog"，则页面以对话框形式弹出；否则是普通页面。默认为空
backgroundColor	|"#FFFFFF"	|#FFFFFF|STR	|页面的背景颜色
layered	        |1/0	        |0	|BOOL	|层窗口
title	        |""	        |"vn_window" |STR	|title
icon	        |"vn://index/icon.png"	|""	|STR	|icon文件路径
minSize	        |"100,100"	|"100,100" |STR+SIZE	|minSize
maxSize	        |"1000,1000"	|"2000,2000"	|STR+SIZE	|maxSize
size	        |"500,300"	|"700,700"	|STR+SIZE	|窗口大小
fixSize	        |1/0	        |0	|BOOL	|是否可以固定大小，默认不固定
fixPosition	|1/0	        |0	|BOOL	|是否可以固定位置，默认可以拖拽
topmost	        |1/0	        |0	|BOOL	|置顶
centerWindow	|1/0	        |1	|BOOL	|居中
toolWindow	|1/0	        |0	|BOOL	|toolWindow
alpha	        |[0,255]	|255	|INT	|alpha
modal	        |1/0	        |0	|BOOL	|模态窗口
~~fullscreen~~      | ---   | ---   | ---	| ~~桌面端不支持~~	
~~orientation~~     | ---   | ---   | ---	| ~~桌面端不支持~~	
~~launchMode~~      | ---   | ---   | ---	| ~~桌面端不支持~~	
~~softInputMode~~   | ---   | ---   | ---	| ~~桌面端不支持~~	
~~mode~~            | ---   | ---   | ---	| ~~桌面端不支持~~	
~~statusBarContentStyle~~| ---   | ---   | ---	| ~~桌面端不支持~~	

