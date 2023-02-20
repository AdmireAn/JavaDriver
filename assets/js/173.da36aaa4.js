(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{675:function(t,a,n){"use strict";n.r(a);var v=n(21),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_1-1-i-o基础入门"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-i-o基础入门"}},[t._v("#")]),t._v(" 1.1 I/O基础入门")]),t._v(" "),n("p",[t._v("Java1.4之前对I/O的支持并不完善，给开发带来的问题有：")]),t._v(" "),n("ul",[n("li",[t._v("没有数据缓冲区，I/O性能存在问题")]),t._v(" "),n("li",[t._v("没有C/C++中channel的概念，只有输入输出流")]),t._v(" "),n("li",[t._v("BIO会导致通信被长时间阻塞")]),t._v(" "),n("li",[t._v("支持的字符集优先，硬件移植性不好")])]),t._v(" "),n("h3",{attrs:{id:"_1-1-1-linux网络i-o模型简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-linux网络i-o模型简介"}},[t._v("#")]),t._v(" 1.1.1 linux网络I/O模型简介")]),t._v(" "),n("p",[t._v("linux中所有的外部设备都是一个文件，socket也是一个文件，有文件描述符（fd）指向它。\nUNIX提供5中I/O模型：")]),t._v(" "),n("ul",[n("li",[t._v("BIO模型：在进程空间调用recvfrom,直到有数据才返回。\n"),n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL3d3MS5zaW5haW1nLmNuL2xhcmdlLzAwNnROYzc5bHkxZzNnOWRvYnpmcWozMHc0MGhzd2k5LmpwZw",alt:""}})]),t._v(" "),n("li",[t._v("NIO模型：轮训调用recvfrom。\n"),n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL3d3NC5zaW5haW1nLmNuL2xhcmdlLzAwNnROYzc5bHkxZzNnOWY0MW5sb2ozMTE0MGw4cWEyLmpwZw",alt:""}})]),t._v(" "),n("li",[t._v("I/O复用：linux提供select/poll，其支持多个fd的NIO，但是select/poll本身是阻塞的。epoll采用事件驱动的方式代替顺序扫描，其性能更高。\n"),n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL3d3NC5zaW5haW1nLmNuL2xhcmdlLzAwNnROYzc5bHkxZzNnOWlweW5sMWozMTNtMG84N2F2LmpwZw",alt:""}})]),t._v(" "),n("li",[t._v("信号驱动I/O模型：\n"),n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL3d3NC5zaW5haW1nLmNuL2xhcmdlLzAwNnROYzc5bHkxZzNnOWtmbHR3dWozMTF1MG1xNDR5LmpwZw",alt:""}})]),t._v(" "),n("li",[t._v("异步I/O:通知内核某个操作，并整个操作完成的时候通知我们。\n"),n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL3d3MS5zaW5haW1nLmNuL2xhcmdlLzAwNnROYzc5bHkxZzNnOW0xb3U3N2ozMHkwMGphanZ4LmpwZw",alt:""}})])]),t._v(" "),n("h3",{attrs:{id:"i-o多路复用技术"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#i-o多路复用技术"}},[t._v("#")]),t._v(" I/O多路复用技术")]),t._v(" "),n("p",[t._v("epoll优点：")]),t._v(" "),n("ul",[n("li",[t._v("支持一个进程打开的fd不受限制")]),t._v(" "),n("li",[t._v("IO效率不会随着fd数量增加而下降")]),t._v(" "),n("li",[t._v("使用mmap加速内核和用户空间的消息传递")]),t._v(" "),n("li",[t._v("epoll API更加简单")])]),t._v(" "),n("h2",{attrs:{id:"_1-2-java的io演进"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-java的io演进"}},[t._v("#")]),t._v(" 1.2 Java的IO演进")]),t._v(" "),n("p",[t._v("2011年JDK7发布：")]),t._v(" "),n("ul",[n("li",[t._v("提供了能批量获取文件属性的API")]),t._v(" "),n("li",[t._v("提供AIO功能")])]),t._v(" "),n("h2",{attrs:{id:"_2-1-传统的bio编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-传统的bio编程"}},[t._v("#")]),t._v(" 2.1 传统的BIO编程")]),t._v(" "),n("p",[t._v("CLient/Server模型中，Server负责绑定IP,启动监听端口；Client发起链接请求，经过三次握手建立连接，通过输入输出流进行同步阻塞式通信。")]),t._v(" "),n("h3",{attrs:{id:"_2-1-1-bio通信模型图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-bio通信模型图"}},[t._v("#")]),t._v(" 2.1.1 BIO通信模型图")]),t._v(" "),n("p",[t._v("通过Acceptor处理多个client连接请求，处理完成后销毁线程。\n"),n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL3d3NC5zaW5haW1nLmNuL2xhcmdlLzAwNnROYzc5bHkxZzNnYTF6d3M4ZGozMTkyMGU0cWhnLmpwZw",alt:""}}),t._v("\n该模型的问题就是支持的线程数量有限。")]),t._v(" "),n("h2",{attrs:{id:"_2-2-伪异步io模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-伪异步io模型"}},[t._v("#")]),t._v(" 2.2 伪异步IO模型")]),t._v(" "),n("p",[t._v("伪异步是为了解决BIO一个链路需要一个线程的问题。\n通过一个线程池处理多个客户端的请求接入\n"),n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL3d3NC5zaW5haW1nLmNuL2xhcmdlLzAwNnROYzc5bHkxZzNnYWF5aXhzZWozMWFpMGd1ZHZ0LmpwZw",alt:""}})]),t._v(" "),n("ul",[n("li",[t._v("线程的数量不会大量膨胀导致资源耗尽")]),t._v(" "),n("li",[t._v("问题是：没有解决同步IO导致的线程阻塞问题")])]),t._v(" "),n("h2",{attrs:{id:"_2-3-nio模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-nio模型"}},[t._v("#")]),t._v(" 2.3 NIO模型")]),t._v(" "),n("h2",{attrs:{id:"_2-3-1-nio简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-nio简介"}},[t._v("#")]),t._v(" 2.3.1 NIO简介")]),t._v(" "),n("p",[n("strong",[t._v("缓冲区buf")]),t._v("\n本质是一个字节数组（ByteBuff），同时提供数据的结构化访问以及维护读写位置。")]),t._v(" "),n("p",[n("strong",[t._v("通道 channel")]),t._v("\nchannel是全双工的。\n流是单向的。\n"),n("strong",[t._v("多路复用 selector")]),t._v("\nselector简单来说就是轮训注册在其上的channel,")]),t._v(" "),n("h2",{attrs:{id:"_2-3-2-nio服务序列图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-nio服务序列图"}},[t._v("#")]),t._v(" 2.3.2 NIO服务序列图")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL3d3My5zaW5haW1nLmNuL2xhcmdlLzAwNnROYzc5bHkxZzNnYjlwZDZnc2ozMTdhMHR5azJkLmpwZw",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"_2-4-aio"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-aio"}},[t._v("#")]),t._v(" 2.4 AIO")])])}),[],!1,null,null,null);a.default=_.exports}}]);