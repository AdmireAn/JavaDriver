(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{687:function(t,r,e){"use strict";e.r(r);var v=e(21),_=Object(v.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"可靠性保证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可靠性保证"}},[t._v("#")]),t._v(" 可靠性保证")]),t._v(" "),e("p",[e("strong",[t._v("kafka在哪些方面做出保证呢？")])]),t._v(" "),e("ul",[e("li",[t._v("单生产者，kafka可以保证顺序消费")]),t._v(" "),e("li",[t._v("只有当写入的消息被写入所有的副本时，才认为是“已提交”的")]),t._v(" "),e("li",[t._v("只要有一个活跃的分区副本，那么，已提交的数据就不会丢失。")]),t._v(" "),e("li",[t._v("消费者只能读取已经提交的消息")])]),t._v(" "),e("p",[e("strong",[t._v("如何保证topic元数据信息安全")]),t._v("\nreplication.factor配置topic的复制系数")]),t._v(" "),e("p",[e("strong",[t._v("所有的分区副本都没有正常同步，分区首领又挂掉了，如何做选举？")]),t._v("\n方案有两个")]),t._v(" "),e("ul",[e("li",[t._v("在未正常同步的副中选举一个作为首领，缺点是存在丢失数据的风险。")]),t._v(" "),e("li",[t._v("等待旧的首领恢复。缺点是可用性低。")])]),t._v(" "),e("p",[t._v("配置unclean.leader.election.enable=true表示允许不同步的副本称为首领，这也将面临丢失消息的风险。")]),t._v(" "),e("h1",{attrs:{id:"producer如何做可靠性保证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#producer如何做可靠性保证"}},[t._v("#")]),t._v(" producer如何做可靠性保证")]),t._v(" "),e("p",[e("strong",[t._v("如何保证可靠投递消息？")])]),t._v(" "),e("ol",[e("li",[t._v("ack=all表示broker要等待所有分区副本同步完消息才返回给producer response，是最可靠的投递。")]),t._v(" "),e("li",[t._v("设置重试次数，注意要做业务幂等。")]),t._v(" "),e("li",[t._v("有些小时不可重试错误，比如消息太大、认证错误等。根据业务来特殊处理这类消息。")])]),t._v(" "),e("h1",{attrs:{id:"consumer如何做可靠性保证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consumer如何做可靠性保证"}},[t._v("#")]),t._v(" consumer如何做可靠性保证")]),t._v(" "),e("p",[e("strong",[t._v("consumer请求的offset在broker上不存在时怎么处理？")]),t._v("\n配置auto.offset.reset指定了两种策略：")]),t._v(" "),e("ul",[e("li",[t._v("earliest:从分区的开始读取")]),t._v(" "),e("li",[t._v("latest：从分区的末尾读取")])])])}),[],!1,null,null,null);r.default=_.exports}}]);