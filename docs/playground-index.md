---
id: playground-index
title: Video Native Playground
---

Playground是一个让前端用户不用安装Android或iOS编译环境就可以体验VN开发的快速实验性项目。

## 1.准备工作

### 1.1)安装Node.js

[Node.js官方网站](https://nodejs.org/en/)

### 1.2)安装Python与WatchDog组件(可选)

如果想使用自动打包工具，选装Python和WatchDog组件。  

#### 安装Python

[Python官方网站(Mac OS自带Python无需安装)](https://www.python.org/)

#### 安装WatchDog组件（需要先安装pip）

```shell
$ pip install watchdog
```

### 1.3)安装VN Playground.apk

在Android手机上面安装[VN Playground.apk](https://share.weiyun.com/5ORk34g),并将Android手机设置为允许USB调试，然后通过USB连接电脑，在看到是否同意该电脑调试时请选择是。  

打开VN Playground App。

### 1.4)下载Playground源码

Playground代码URL：https://github.com/lj8215946/VNPlayground.git
打开项目Playground代码工程中的VNAPP目录，该目录是编写VN Playground代码的工程根目录，其中源码都放在VNAPP/source目录下其他目录和文件是都用于打包的工具或者临时目录。  
下载完成源码后请在VNAPP目录下运行:
```shell
$ npm install
```

## 2.Get Started(With Python WatchDog)

2.1) 如果安装了上述python环境,在VNAPP目录下运行如下代码
```shell
$ python monitor.py
```

2.2) 在VNAPP/source文件夹下开始VN的编码工作，每当文件添加，删除或保存时，角标会自动打包上传至手机APP上。如果修改了代码请退出页面，并在看到terminal提示打包完成后重新进入即可看到报错后的页面。

## 2.Get Started(Without Python WatchDog)

如果系统手动部署，Windows请在编码完成后运行npm run build_windows,Mac OS请在编码完成后运行npm run build_mac
