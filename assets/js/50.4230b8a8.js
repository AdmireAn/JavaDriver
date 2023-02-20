(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{552:function(a,t,s){"use strict";s.r(t);var r=s(21),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"查看进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看进程"}},[a._v("#")]),a._v(" 查看进程")]),a._v(" "),s("p",[a._v("由于JVM大多数命令都是需要用到进程id的，所以我们需要先查看一下我们系统的进程id，通过使用jps -l，输出所有java相关进程。")]),a._v(" "),s("p",[a._v("这里我们可以根据类名，大致确认出我们的系统进程是什么")]),a._v(" "),s("p",[a._v("注：-l代表的是输出应用程序main class的完整package名或者应用程序的jar文件完整路径名")]),a._v(" "),s("h2",{attrs:{id:"查看jvm参数-jinfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看jvm参数-jinfo"}},[a._v("#")]),a._v(" 查看JVM参数 jinfo")]),a._v(" "),s("p",[a._v("通过运行jinfo -flags <端口号>查看jvm的参数。")]),a._v(" "),s("p",[a._v("通过运行jinfo -sysprops <端口号>查看java系统参数。")]),a._v(" "),s("h2",{attrs:{id:"查看各项指标数据-jstat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看各项指标数据-jstat"}},[a._v("#")]),a._v(" 查看各项指标数据 jstat")]),a._v(" "),s("p",[a._v("通过运行 -class <端口号>完成类加载统计\n通过运行jstat -gc <端口号>完成垃圾回收统计\n通过运行jstat -gccapacity <端口号>完成堆内存统计\n通过运行jstat -gcnew <端口号>完成新生代垃圾回收统计\n通过运行jstat -gcnewcapacity <端口号>完成新生代内存统计\n通过运行jstat -gcold <端口号>完成老年代垃圾回收统计\n通过运行jstat -gcoldcapacity <端口号>完成老年代内存统计\n通过运行jstat -gcmetacapacity <端口号>完成老年代内存统计\n通过运行jstat -gcutil <端口号>数据总览\n查看对象及内存使用情况\n通过运行jmap -histo <端口号> > ./log.txt类及其对象所占内存数据。")]),a._v(" "),s("h2",{attrs:{id:"jmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmap"}},[a._v("#")]),a._v(" jmap")]),a._v(" "),s("p",[a._v("通过运行jmap -heap <端口号>堆信息。")]),a._v(" "),s("p",[a._v("参考：\n"),s("a",{attrs:{href:"https://baijiahao.baidu.com/s?id=1708710107377134976&wfr=spider&for=pc",target:"_blank",rel:"noopener noreferrer"}},[a._v("深度好文：JVM调优"),s("OutboundLink")],1),a._v(" "),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/445492854",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java核心篇-故事里的JVM性能调优"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);