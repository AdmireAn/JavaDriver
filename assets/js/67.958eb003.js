(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{569:function(t,n,E){"use strict";E.r(n);var r=E(21),s=Object(r.a)({},(function(){var t=this,n=t.$createElement,E=t._self._c||n;return E("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[E("p",[t._v("TCP 使用超时重传来实现可靠传输：如果一个已经发送的报文段在超时时间内没有收到确认，那么就重传这个报文段。")]),t._v(" "),E("p",[t._v("一个报文段从发送再到接收到确认所经过的时间称为往返时间 RTT，加权平均往返时间 RTTs 计算如下：")]),t._v(" "),E("p",[E("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1h6y8szdk43j308700jt8i.jpg",alt:""}})]),t._v(" "),E("p",[t._v("其中，0 ≤ a ＜ 1，RTTs 随着 a 的增加更容易受到 RTT 的影响。\n超时时间 RTO 应该略大于 RTTs，TCP 使用的超时时间计算如下：")]),t._v(" "),E("p",[E("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6ly1h6y8vd1lo5j305p00g0si.jpg",alt:""}})]),t._v(" "),E("p",[t._v("其中 RTTd 为偏差的加权平均值。")]),t._v(" "),E("p",[t._v("参考：\n"),E("a",{attrs:{href:"http://www.cyc2018.xyz/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%20-%20%E4%BC%A0%E8%BE%93%E5%B1%82.html#tcp-%E5%8F%AF%E9%9D%A0%E4%BC%A0%E8%BE%93",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP 可靠传输"),E("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=s.exports}}]);