(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{575:function(t,a,s){"use strict";s.r(a);var e=s(21),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前提"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提：")]),t._v(" "),s("p",[t._v("HTTP/1.0默认使用短连接，HTTP/1.1开始默认使用长连接；")]),t._v(" "),s("p",[t._v("HTTP协议的长连接和短连接，实质就是TCP协议的长连接和短连接；")]),t._v(" "),s("p",[t._v("TCP协议建立连接需要3次握手，断开连接需要4次握手，这个过程会消耗网络资源和时间；")]),t._v(" "),s("h2",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义：")]),t._v(" "),s("ul",[s("li",[t._v("长连接：在一个TCP连接上可以发送多个数据包，但是如果没有数据包发送时，也要双方发检测包以维持这个长连接；三次握手后连接，不断开连接，保持客户端和服务端通信，直到服务器超时自动断开连接，或者客户端主动断开连接。")]),t._v(" "),s("li",[t._v("短连接：当双方需要数据交互的时候，就建立一个TCP连接，本次交互完之后就断开这个连接；三次握手后建立连接，发送数据包并得到服务器返回的结果后，通过客户端和服务器的四次握手后断开连接。")])]),t._v(" "),s("h3",{attrs:{id:"优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点：")]),t._v(" "),s("p",[t._v("长连接可以省去较多建立连接和断开连接的操作，所以比较节省资源和时间，但是长连接如果一直存在的话，需要很多探测包的发送来维持这个连接，这对服务器将是很大的负担；\n相对而言，短连接不需要服务器承担太大负担，只要存在的连接就是有用的连接，但如果客户端请求频繁，就会在TCP的建立连接和断开连接上浪费较大的资源和时间。")]),t._v(" "),s("h3",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景：")]),t._v(" "),s("p",[t._v("短连接：适用于网页浏览等数据刷新频度较低的场景。一般而言像及京东，淘宝这些大型网站，随时都会有成千上万的用户请求，一般使用短连接，用户量太大，服务器扛不住那么多长连接；\n长连接：适用于客户端和服务端通信频繁的场景，例如：聊天室，实时游戏等场景。即时通讯（QQ）般使用的都是长连接，但并不是永久连接（比如20分钟，半个小时），因为即时通讯是频繁的发送请求，使用长连接只需要建立一次连接，同时再根据业务设置保持时间，超过这个时间就会断开连接，一定程度上保证了服务器的压力不会过大。")]),t._v(" "),s("p",[t._v("##Socket心跳包机制：\n像心跳一样，每隔固定时间向服务器发送一个包，以此来告诉服务器，这个客户端还活着。为了保持长连接，一般都是很小的包（节约流量）或者只有包头的空包。\n1.客户端每隔一段时间间隔就发送一个探测包给服务器；\n2.客户端发包时启动一个超时定时器；\n3.服务端接收到探测包后会回应一个包；\n4.如果客户端收到服务器的应答包，则说明服务器正常，删除超时定时器；如果没有收到则服务器异常。\n————————————————\n版权声明：本文为CSDN博主「测试小明」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\n原文链接：https://blog.csdn.net/Dave0002/article/details/125973214")])])}),[],!1,null,null,null);a.default=r.exports}}]);