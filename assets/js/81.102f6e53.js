(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{585:function(v,_,t){"use strict";t.r(_);var a=t(21),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"重传机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重传机制"}},[v._v("#")]),v._v(" 重传机制")]),v._v(" "),t("p",[v._v("TCP 实现可靠传输的方式之一，是通过序列号与确认应答。")]),v._v(" "),t("p",[v._v("在 TCP 中，当发送端的数据到达接收主机时，接收端主机会返回一个确认应答消息，表示已收到消息。")]),v._v(" "),t("p",[v._v("常见的重传机制：")]),v._v(" "),t("ul",[t("li",[v._v("超时重传")]),v._v(" "),t("li",[v._v("快速重传")]),v._v(" "),t("li",[v._v("SACK\nD-SACK")])]),v._v(" "),t("h2",{attrs:{id:"超时重传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#超时重传"}},[v._v("#")]),v._v(" 超时重传")]),v._v(" "),t("p",[v._v("重传机制的其中一个方式，就是在发送数据时，设定一个定时器，当超过指定的时间后，没有收到对方的 ACK 确认应答报文，就会重发该数据，也就是我们常说的超时重传。")]),v._v(" "),t("p",[v._v("TCP 会在以下两种情况发生超时重传：")]),v._v(" "),t("ul",[t("li",[v._v("数据包丢失")]),v._v(" "),t("li",[v._v("确认应答丢失\n"),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h6lj8deslnj21420u0ab4.jpg",alt:""}})])]),v._v(" "),t("p",[t("strong",[v._v("超时时间应该设置为多少呢？")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h6lj8qe3dqj219c0teaak.jpg",alt:""}})]),v._v(" "),t("p",[t("code",[v._v("RTT")]),v._v(" 就是数据从网络一端传送到另一端所需的时间，也就是包的往返时间。")]),v._v(" "),t("p",[v._v("超时重传时间是以 "),t("code",[v._v("RTO （Retransmission Timeout 超时重传时间）")]),v._v("表示。")]),v._v(" "),t("p",[v._v("假设在重传的情况下，超时时间 "),t("code",[v._v("RTO")]),v._v(" 「较长或较短」时，会发生什么事情呢？")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h6lj984b1wj21ca0t40vg.jpg",alt:""}})]),v._v(" "),t("p",[v._v("上图中有两种超时时间不同的情况：")]),v._v(" "),t("ul",[t("li",[v._v("当超时时间 "),t("code",[v._v("RTO")]),v._v(" 较大时，重发就慢，丢了老半天才重发，没有效率，性能差；")]),v._v(" "),t("li",[v._v("当超时时间 "),t("code",[v._v("RTO")]),v._v(" 较小时，会导致可能并没有丢就重发，于是重发的就快，会增加网络拥塞，导致更多的超时，更多的超时导致更多的重发。")])]),v._v(" "),t("p",[v._v("根据上述的两种情况，我们可以得知，超时重传时间 "),t("strong",[v._v("RTO 的值应该略大于报文往返 RTT 的值")]),v._v("。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h6lj9ul0etj218i0sa3zu.jpg",alt:""}})]),v._v(" "),t("p",[v._v("好像就是在发送端发包时记下"),t("code",[v._v("t0")]),v._v(" ，然后接收端再把这个"),t("code",[v._v("ack")]),v._v(" 回来时再记一个"),t("code",[v._v("t1")]),v._v("，于是"),t("code",[v._v("RTT = t1 – t0")]),v._v("。没那么简单，这只是一个采样，不能代表普遍情况。")]),v._v(" "),t("p",[v._v("实际上「"),t("strong",[v._v("报文往返 RTT 的值")]),v._v("」是经常变化的，因为我们的网络也是时常变化的。也就因为「"),t("strong",[v._v("报文往返 RTT 的值")]),v._v("」 是经常波动变化的，所以「超时重传时间 RTO 的值」应该是一个动态变化的值。")]),v._v(" "),t("p",[v._v("估计往返时间，通常需要采样以下两个：")]),v._v(" "),t("ul",[t("li",[v._v("需要 TCP 通过采样 RTT 的时间，然后进行加权平均，算出一个平滑 RTT 的值，而且这个值还是要不断变化的，因为网络状况不断地变化。")]),v._v(" "),t("li",[v._v("除了采样 RTT，还要采样 RTT 的波动范围，这样就避免如果 RTT 有一个大的波动的话，很难被发现的情况。\nRFC6289 建议使用以下的公式计算 RTO：")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h6ljaz488sj21350u0q5f.jpg",alt:""}})]),v._v(" "),t("p",[v._v("其中 "),t("code",[v._v("SRTT")]),v._v(" 是计算平滑的RTT ，"),t("code",[v._v("DevRTR")]),v._v(" 是计算平滑的RTT 与 最新 RTT 的差距。")]),v._v(" "),t("p",[v._v("在 Linux 下，"),t("code",[v._v("α = 0.125，β = 0.25， μ = 1，∂ = 4")]),v._v("。别问怎么来的，问就是大量实验中调出来的。")]),v._v(" "),t("p",[v._v("如果超时重发的数据，再次超时的时候，又需要重传的时候，TCP 的策略是超时时间隔加倍。")]),v._v(" "),t("p",[v._v("也就是每当遇到一次超时重传的时候，都会将下一次超时时间间隔设为先前值的两倍。两次超时，就说明网络环境差，不宜频繁反复发送。")]),v._v(" "),t("p",[v._v("超时触发重传存在的问题是，超时周期可能相对较长。那是不是可以有更快的方式呢？")]),v._v(" "),t("p",[v._v("于是就可以用「快速重传」机制来解决超时重发的时间等待。")]),v._v(" "),t("h2",{attrs:{id:"快速重传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速重传"}},[v._v("#")]),v._v(" 快速重传")]),v._v(" "),t("p",[v._v("TCP 还有另外一种快速重传（Fast Retransmit）机制，它不以时间为驱动，而是以数据驱动重传。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h6ljc0v3v1j21370u0gnj.jpg",alt:""}})]),v._v(" "),t("p",[v._v("在上图，发送方发出了 1，2，3，4，5 份数据：")]),v._v(" "),t("ul",[t("li",[v._v("第一份 Seq1 先送到了，于是就 Ack 回 2；")]),v._v(" "),t("li",[v._v("结果 Seq2 因为某些原因没收到，Seq3 到达了，于是还是 Ack 回 2；")]),v._v(" "),t("li",[v._v("后面的 Seq4 和 Seq5 都到了，但还是 Ack 回 2，因为 Seq2 还是没有收到；")]),v._v(" "),t("li",[v._v("发送端收到了三个 Ack = 2 的确认，知道了 Seq2 还没有收到，就会在定时器过期之前，重传丢失的 Seq2。")]),v._v(" "),t("li",[v._v("最后，收到了 Seq2，此时因为 Seq3，Seq4，Seq5 都收到了，于是 Ack 回 6 。")])]),v._v(" "),t("p",[v._v("所以，快速重传的工作方式是当收到三个相同的 ACK 报文时，会在定时器过期之前，重传丢失的报文段。")]),v._v(" "),t("p",[v._v("快速重传机制只解决了一个问题，就是超时时间的问题，但是它依然面临着另外一个问题。就是重传的时候，是重传之前的一个，还是重传所有的问题。")]),v._v(" "),t("p",[v._v("比如对于上面的例子，是重传 Seq2 呢？还是重传 Seq2、Seq3、Seq4、Seq5 呢？因为发送端并不清楚这连续的三个 Ack 2 是谁传回来的。")]),v._v(" "),t("p",[v._v("为了解决不知道该重传哪些 TCP 报文，于是就有 SACK 方法。")]),v._v(" "),t("h2",{attrs:{id:"sack-方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sack-方法"}},[v._v("#")]),v._v(" SACK 方法")]),v._v(" "),t("p",[v._v("还有一种实现重传机制的方式叫：SACK（ Selective Acknowledgment 选择性确认）。")]),v._v(" "),t("p",[v._v("这种方式需要在 TCP 头部「选项」字段里加一个 SACK的东西，它可以将缓存的数据发送给发送方，这样发送方就可以知道哪些数据收到了，哪些数据没收到，知道了这些信息，就可以只重传丢失的数据。")]),v._v(" "),t("p",[v._v("如下图，发送方收到了三次同样的 ACK 确认报文，于是就会触发快速重发机制，通过 SACK 信息发现只有 200~299 这段数据丢失，则重发时，就只选择了这个 TCP 段进行重复。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h6ljcuptppj21c40scab9.jpg",alt:""}})]),v._v(" "),t("h2",{attrs:{id:"duplicate-sack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#duplicate-sack"}},[v._v("#")]),v._v(" Duplicate SACK")]),v._v(" "),t("p",[v._v("Duplicate SACK 又称 D-SACK，其主要使用了 SACK 来告诉「发送方」有哪些数据被重复接收了。")]),v._v(" "),t("p",[v._v("下面举例两个栗子，来说明 D-SACK 的作用。")]),v._v(" "),t("p",[v._v("栗子一号：ACK 丢包:")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h6ljd3gop2j21800u0ack.jpg",alt:""}})]),v._v(" "),t("p",[v._v("「接收方」发给「发送方」的两个 ACK 确认应答都丢失了，所以发送方超时后，重传第一个数据包（3000 ~ 3499）\n于是「接收方」发现数据是重复收到的，于是回了一个 SACK = 3000~3500，告诉「发送方」 3000~3500 的数据早已被接收了，因为 ACK 都到了 4000 了，已经意味着 4000 之前的所有数据都已收到，所以这个 SACK 就代表着 D-SACK。\n这样「发送方」就知道了，数据没有丢，是「接收方」的 ACK 确认报文丢了。\n栗子二号：网络延时:")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h6ljddv1qrj20qq0u2dh6.jpg",alt:""}})]),v._v(" "),t("ul",[t("li",[v._v("数据包（1000~1499） 被网络延迟了，导致「发送方」没有收到 Ack 1500 的确认报文。")]),v._v(" "),t("li",[v._v("而后面报文到达的三个相同的 ACK 确认报文，就触发了快速重传机制，但是在重传后，被延迟的数据包（1000~1499）又到了「接收方」；")]),v._v(" "),t("li",[v._v("所以「接收方」回了一个 SACK=1000~1500，因为 ACK 已经到了 3000，所以这个 SACK 是 D-SACK，表示收到了重复的包。")]),v._v(" "),t("li",[v._v("这样发送方就知道快速重传触发的原因不是发出去的包丢了，也不是因为回应的 ACK 包丢了，而是因为网络延迟了。")])]),v._v(" "),t("p",[v._v("可见，D-SACK 有这么几个好处：")]),v._v(" "),t("ol",[t("li",[v._v("可以让「发送方」知道，是发出去的包丢了，还是接收方回应的 ACK 包丢了;")]),v._v(" "),t("li",[v._v("可以知道是不是「发送方」的数据包被网络延迟了;")]),v._v(" "),t("li",[v._v("可以知道网络中是不是把「发送方」的数据包给复制了;")])]),v._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_43207025/article/details/110387212",target:"_blank",rel:"noopener noreferrer"}},[v._v("TCP滑动窗口和重传机制"),t("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=e.exports}}]);