---
id: vn-package
title: VN 打包
---

#### VN打包基本流程：

1.webpack对多js包含进行打包合并  
2.把vnml、css、js、json通过jce二进制编码成page文件（可提高运行时解析速度）  
3.压缩app包到zip  

---

#### VNPackage目录结构示例：
.  
└─ app  
&emsp;├─ info.json  
&emsp;├─ index  
&emsp;&emsp;├─ index.js  
&emsp;&emsp;├─ index.json  
&emsp;&emsp;├─ index.vnml  
&emsp;&emsp;├─ index.vnss  

---

### VN资源和打包

#### Prerequisites

* Java:https://www.oracle.com/technetwork/java/javase/downloads/index.html  

* Nodejs:https://nodejs.org/en/  

* webpack和webpack-cli（可以自己安装，也可以直接使用我们打包好的node_modules.zip）  
如果想自己安装命令：  
npm install webpack  
npm install webpack-cli  

---

#### 打包相关目录
* 1.外部打包脚本：  
VideoNativeDesktop\VNResourcesPackage.sh  

* 2.vn资源原始码：  
VideoNativeDesktop\Output\Resources\vnapp  
手动打包脚本：  
deploy.bat  
deploy_mac.sh  

* 3.vn打包后的资源包：   
 mac：Output\Resources\vnapp_output  
 windows GF：OutputGF\Resources\vnapp_output  
 windows Views：OutputViews\Resources\vnapp_output  

* 4.vn打包后的压缩包 ：   
 VideoNativeDesktop\Output\Resources\vnapp_zips  

* 5.每次修改vn资源后，执行打包脚本，打包脚本会把打包后的资源包copy到对应输出目录的Resources\vnapp_output  