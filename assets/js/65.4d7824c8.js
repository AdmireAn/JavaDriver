(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{567:function(t,a,s){"use strict";s.r(a);var r=s(21),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("从我们输入一个网址到页面展现的过程到底发生了什么呢？")]),t._v(" "),s("h2",{attrs:{id:"总体来说分为以下几个过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总体来说分为以下几个过程"}},[t._v("#")]),t._v(" 总体来说分为以下几个过程：")]),t._v(" "),s("ul",[s("li",[t._v("输入网址")]),t._v(" "),s("li",[t._v("DNS解析")]),t._v(" "),s("li",[t._v("建立TCP/IP链接")]),t._v(" "),s("li",[t._v("发送HTTP请求")]),t._v(" "),s("li",[t._v("服务器处理请求")]),t._v(" "),s("li",[t._v("服务器返回HTTP响应")]),t._v(" "),s("li",[t._v("浏览器渲染页面并展现")]),t._v(" "),s("li",[t._v("断开连接")])]),t._v(" "),s("h2",{attrs:{id:"输入网址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入网址"}},[t._v("#")]),t._v(" 输入网址")]),t._v(" "),s("p",[t._v("当我们想要打开一个页面时，很简单的会想到去输入一个网址\n我们以本网址为例，解释一下它各部分的组成：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("https://www.baidu.com\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("https ：https是协议（Protocol），它表明了浏览器使用何种协议，有http、https、ftp、mailto等，其中https是加密认证版的http（详见《图解HTTP》）")])]),t._v(" "),s("li",[s("p",[t._v("www.baidu.com ：这是域名（Domain name），它表明正在请求哪个Web服务器，其中www是主机名（host）")])])]),t._v(" "),s("h2",{attrs:{id:"dns解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns解析"}},[t._v("#")]),t._v(" DNS解析")]),t._v(" "),s("p",[t._v("输入网址（URL）这一步我们很好理解，但是接下来所谓的域名解析是什么呢？又是为什么要进行域名解析呢？")]),t._v(" "),s("h3",{attrs:{id:"什么是ip地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是ip地址"}},[t._v("#")]),t._v(" 什么是IP地址")]),t._v(" "),s("p",[t._v("IP 地址（Internet Protocol Address）是互联网协议特有的一种地址，它是 IP 协议提供的一种统一的地址格式。IP 地址为互联网上的每一个网络和每一台主机分配一个逻辑地址，以此来屏蔽物理地址的差异。\n像192.168.59.0就是一个主机IP地址")]),t._v(" "),s("h3",{attrs:{id:"什么是dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是dns"}},[t._v("#")]),t._v(" 什么是DNS")]),t._v(" "),s("p",[t._v("DNS服务器上存储着映射<域名-IP>，DNS解析就是去DNS服务器查询IP地址。")]),t._v(" "),s("h3",{attrs:{id:"dns解析-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns解析-2"}},[t._v("#")]),t._v(" DNS解析")]),t._v(" "),s("p",[t._v("DNS解析按照下面顺序逐个查找。")]),t._v(" "),s("ul",[s("li",[t._v("本地（hosts文件）")]),t._v(" "),s("li",[t._v("DNS服务器（本地DNS | 根DNS）")]),t._v(" "),s("li",[t._v("域服务器")]),t._v(" "),s("li",[t._v("解析服务器的地址")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h3jr49albxj20sl0jt40n.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"dns查询的两种方式-递归查询和迭代查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns查询的两种方式-递归查询和迭代查询"}},[t._v("#")]),t._v(" DNS查询的两种方式：递归查询和迭代查询")]),t._v(" "),s("p",[t._v("递归解析\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h3jrcpsp8tj20fn02r3yh.jpg",alt:""}}),t._v("\n迭代解析\n"),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h3jrd9k881j20bx0983yo.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"dns域名称空间的组织方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns域名称空间的组织方式"}},[t._v("#")]),t._v(" DNS域名称空间的组织方式")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h3jrafkgijj20fi06ogm7.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"dns负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns负载均衡"}},[t._v("#")]),t._v(" DNS负载均衡")]),t._v(" "),s("p",[t._v("当一个网站有足够多的用户的时候，假如每次请求的资源都位于同一台机器上面，那么这台机器随时可能会蹦掉。")]),t._v(" "),s("p",[t._v("处理办法就是用DNS负载均衡技术，它的原理是在DNS服务器中为同一个主机名配置多个IP地址\n在应答DNS查询时,DNS服务器对每个查询将以DNS文件中主机记录的IP地址按顺序返回不同的解析结果,将客户端的访问引导到不同的机器上去,使得不同的客户端访问不同的服务器,从而达到负载均衡的目的｡")]),t._v(" "),s("h2",{attrs:{id:"建立tcp-ip链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立tcp-ip链接"}},[t._v("#")]),t._v(" 建立TCP/IP链接")]),t._v(" "),s("h3",{attrs:{id:"三次握手-的详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三次握手-的详解"}},[t._v("#")]),t._v(" ”三次握手”的详解")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h3jrlodi0dj20ei09daaf.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"为什么要三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要三次握手"}},[t._v("#")]),t._v(" 为什么要三次握手")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("clien端\n防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误。\nclient发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致连接释放以后的某个时间才到达server。\n本来这是一个早已失效的报文段。但server收到此失效的连接请求报文段后，就误认为是client再次发出的一个新的连接请求。\n于是就向client发出确认报文段，同意建立连接。")])]),t._v(" "),s("li",[s("p",[t._v("server端\n假设不采用“三次握手”。\n如果只要server发出确认，新的连接就建立了。并一直等待client发来数据。\n事实是client并没有发出建立连接的请求，因此不会理睬server的确认，也不会向server发送数据。\n但server端就会有许多这样的等待，server的很多资源就白白浪费掉了。")])])]),t._v(" "),s("p",[t._v("采用“三次握手”的办法可以防止上述现象发生。主要目的防止server端一直等待，浪费资源。")])])}),[],!1,null,null,null);a.default=v.exports}}]);