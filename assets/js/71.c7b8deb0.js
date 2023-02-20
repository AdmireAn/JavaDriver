(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{572:function(t,v,_){"use strict";_.r(v);var P=_(21),r=Object(P.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"tcp-与-udp-的区别-重要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-与-udp-的区别-重要"}},[t._v("#")]),t._v(" TCP 与 UDP 的区别（重要）")]),t._v(" "),_("ol",[_("li",[t._v("是否面向连接 ：UDP 在传送数据之前不需要先建立连接。而 TCP 提供面向连接的服务，在传送数据之前必须先建立连接，数据传送结束后要释放连接。")]),t._v(" "),_("li",[t._v("是否是可靠传输：远地主机在收到 UDP 报文后，不需要给出任何确认，并且不保证数据不丢失，不保证是否顺序到达。TCP 提供可靠的传输服务，TCP 在传递数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制。通过 TCP 连接传输的数据，无差错、不丢失、不重复、并且按序到达。")]),t._v(" "),_("li",[t._v("是否有状态 ：这个和上面的“是否可靠传输”相对应。TCP 传输是有状态的，这个有状态说的是 TCP 会去记录自己发送消息的状态比如消息是否发送了、是否被接收了等等。为此 ，TCP 需要维持复杂的连接状态表。而 UDP 是无状态服务，简单来说就是不管发出去之后的事情了（这很渣男！）。")]),t._v(" "),_("li",[t._v("传输效率 ：由于使用 TCP 进行传输的时候多了连接、确认、重传等机制，所以 TCP 的传输效率要比 UDP 低很多。")]),t._v(" "),_("li",[t._v("传输形式 ： TCP 是面向字节流的，UDP 是面向报文的。")]),t._v(" "),_("li",[t._v("首部开销 ：TCP 首部开销（20 ～ 60 字节）比 UDP 首部开销（8 字节）要大。")]),t._v(" "),_("li",[t._v("是否提供广播或多播服务 ：TCP 只支持点对点通信，UDP 支持一对一、一对多、多对一、多对多；\n......\n我把上面总结的内容通过表格形式展示出来了！")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[t._v("TCP")]),t._v(" "),_("th",[t._v("UDP")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("是否面向连接")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("是否可靠")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("是否有状态")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("传输效率")]),t._v(" "),_("td",[t._v("较慢")]),t._v(" "),_("td",[t._v("较快")])]),t._v(" "),_("tr",[_("td",[t._v("传输形式")]),t._v(" "),_("td",[t._v("字节流")]),t._v(" "),_("td",[t._v("数据报文段")])]),t._v(" "),_("tr",[_("td",[t._v("首部开销")]),t._v(" "),_("td",[t._v("20 ～ 60 bytes")]),t._v(" "),_("td",[t._v("8 bytes")])]),t._v(" "),_("tr",[_("td",[t._v("是否提供广播或多播服务")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("h2",{attrs:{id:"什么时候选择-tcp-什么时候选-udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么时候选择-tcp-什么时候选-udp"}},[t._v("#")]),t._v(" 什么时候选择 TCP,什么时候选 UDP?")]),t._v(" "),_("ul",[_("li",[t._v("UDP 一般用于即时通信，比如： 语音、 视频 、直播等等。这些场景对传输数据的准确性要求不是特别高，比如你看视频即使少个一两帧，实际给人的感觉区别也不大。")]),t._v(" "),_("li",[t._v("TCP 用于对传输准确性要求特别高的场景，比如文件传输、发送和接收邮件、远程登录等等。")])]),t._v(" "),_("h2",{attrs:{id:"http-基于-tcp-还是-udp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-基于-tcp-还是-udp"}},[t._v("#")]),t._v(" HTTP 基于 TCP 还是 UDP？")]),t._v(" "),_("p",[t._v("HTTP 协议是基于 TCP 协议的，所以发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。")]),t._v(" "),_("h2",{attrs:{id:"使用-tcp-的协议有哪些-使用-udp-的协议有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-tcp-的协议有哪些-使用-udp-的协议有哪些"}},[t._v("#")]),t._v(" 使用 TCP 的协议有哪些?使用 UDP 的协议有哪些?")]),t._v(" "),_("p",[t._v("运行于 TCP 协议之上的协议 ：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("HTTP 协议 ：超文本传输协议（HTTP，HyperText Transfer Protocol)主要是为 Web 浏览器与 Web 服务器之间的通信而设计的。当我们使用浏览器浏览网页的时候，我们网页就是通过 HTTP 请求进行加载的。")])]),t._v(" "),_("li",[_("p",[t._v("HTTPS 协议 ：更安全的超文本传输协议(HTTPS,Hypertext Transfer Protocol Secure)，身披 SSL 外衣的 HTTP 协议")])]),t._v(" "),_("li",[_("p",[t._v("FTP 协议：文件传输协议 FTP（File Transfer Protocol），提供文件传输服务，基于 TCP 实现可靠的传输。使用 FTP 传输文件的好处是可以屏蔽操作系统和文件存储方式。")])]),t._v(" "),_("li",[_("p",[t._v("SMTP 协议：简单邮件传输协议（SMTP，Simple Mail Transfer Protocol）的缩写，基于 TCP 协议，用来发送电子邮件。注意 ⚠️：接受邮件的协议不是 SMTP 而是 POP3 协议。")])]),t._v(" "),_("li",[_("p",[t._v("POP3/IMAP 协议： POP3 和 IMAP 两者都是负责邮件接收的协议。")])]),t._v(" "),_("li",[_("p",[t._v("Telent 协议：远程登陆协议，通过一个终端登陆到其他服务器。被一种称为 SSH 的非常安全的协议所取代。")])]),t._v(" "),_("li",[_("p",[t._v("SSH 协议 : SSH（ Secure Shell）是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。利用 SSH 协议可以有效防止远程管理过程中的信息泄露问题。SSH 建立在可靠的传输协议 TCP 之上。\n......\n运行于 UDP 协议之上的协议 ：")])]),t._v(" "),_("li",[_("p",[t._v("DHCP 协议：动态主机配置协议，动态配置 IP 地址")])]),t._v(" "),_("li",[_("p",[t._v("DNS ： 域名系统（DNS，Domain Name System）将人类可读的域名 (例如，www.baidu.com) 转换为机器可读的 IP 地址 (例如，220.181.38.148)。 我们可以将其理解为专为互联网设计的电话薄。实际上 DNS 同时支持 UDP 和 TCP 协议。")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);