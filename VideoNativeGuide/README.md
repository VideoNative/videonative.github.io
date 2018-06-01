# 开始一个新的工程（iOS）

## 新建一个工程

* 新建Xcode工程，例如VNDemo工程。
![](/media/15277825216637/15277842979504.jpg)


## 添加静态库

0. VideoNative工程Framework包含 `VideoNative.Framework`, `TVKPlayer.Framework`,可以通过下面的链接下载：[下载地址](https://share.weiyun.com/5f0LZFa)
0. VideoNative包含的静态文件包含`libcrypto.a` ,   `libDecodeWebP.a`,`libGifSupport.a`,`libminizip.a`,`libQLJCEData.a`,`libQuickRSA.a`,`libSerializationJCE.a`,`libssl.a`,`libWebP.a`。可以通过下面的链接下载：[下载地址](https://share.weiyun.com/5b1J5Ab)

## 添加系统Framework与tdb
0. 需要添加的Framework有 `VideoToolBox.Framework`, tdb有`libiconv.2.4.0.tbd`,`libsqlite3.0.tbd`。
0. 并在info.plist中添加App Transport Security Settings并设置Allow Arbitrary Loads为YES。
![](/media/15277825216637/15277841143448.jpg)
0. 在Other Linker Flags中添加`-ObjC`![](/media/15277825216637/15277842027766.jpg)

## 运行一个VNDemo App
下载demo.zip文件，并放入工程目录下的vnapp中![](/media/15277825216637/15277844735419.jpg)

构建运行工程，就可以看到Demo跑起来了。

![](/media/15277825216637/15277845701398.jpg)




