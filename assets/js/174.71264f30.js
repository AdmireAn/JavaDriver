(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{676:function(t,a,e){"use strict";e.r(a);var _=e(21),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_4-1-tcp粘包-拆包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-tcp粘包-拆包"}},[t._v("#")]),t._v(" 4.1 TCP粘包/拆包")]),t._v(" "),e("h3",{attrs:{id:"_4-1-1-tcp粘包-拆包问题说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-tcp粘包-拆包问题说明"}},[t._v("#")]),t._v(" 4.1.1 TCP粘包/拆包问题说明")]),t._v(" "),e("p",[t._v("TCP协议是”流“协议，流是没有间隔的。tcp会根据缓存大小将业务上的大包划分成多个小包发送出去、也可能多个小包合成一个大包发送出去。")]),t._v(" "),e("h3",{attrs:{id:"_4-1-2-tcp粘包-拆包发生的原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-tcp粘包-拆包发生的原因"}},[t._v("#")]),t._v(" 4.1.2 TCP粘包/拆包发生的原因")]),t._v(" "),e("ul",[e("li",[t._v("应用层：大于套接字接口缓冲区大小")]),t._v(" "),e("li",[t._v("TCP层：MSS")]),t._v(" "),e("li",[t._v("IP层：MTU")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL3d3Mi5zaW5haW1nLmNuL2xhcmdlLzAwNnROYzc5bHkxZzNpbHB2NDhtMmozMTBrMHB3ZG84LmpwZw",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_4-1-3-tcp粘包-拆包问题的解决策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-tcp粘包-拆包问题的解决策略"}},[t._v("#")]),t._v(" 4.1.3 TCP粘包/拆包问题的解决策略")]),t._v(" "),e("ul",[e("li",[t._v("消息定长len，例如每个报文固定200字节。那么读取到定长len后就重置计数器开始读取下一个包。")]),t._v(" "),e("li",[t._v("包尾加换行符分割，如ftp。")]),t._v(" "),e("li",[t._v("消息头+消息体。消息头包含消息长度信息。")]),t._v(" "),e("li",[t._v("更复杂的应用协议，如netty.")])]),t._v(" "),e("h2",{attrs:{id:"_4-3-netty解决tcp粘包问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-netty解决tcp粘包问题"}},[t._v("#")]),t._v(" 4.3 Netty解决tcp粘包问题")]),t._v(" "),e("ul",[e("li",[t._v("LineBasedFrameDecoder：原理是遍历ByteBuf中字节，以换行符分割")]),t._v(" "),e("li",[t._v("StringDecoder:将接收的byte对象转换为字符串，然后调用后面的handler\n如果发送的消息不是以换行符结束的，netty也有其他解码器支持。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);