(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{586:function(_,t,v){"use strict";v.r(t);var a=v(21),s=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[_._v("#")]),_._v(" 定义")]),_._v(" "),v("p",[_._v("1）序列化：把对象转化为可传输的字节序列过程称为序列化。")]),_._v(" "),v("p",[_._v("2）反序列化：把字节序列还原为对象的过程称为反序列化。")]),_._v(" "),v("h2",{attrs:{id:"_2-为什么要序列化-实现序列化的作用是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么要序列化-实现序列化的作用是什么"}},[_._v("#")]),_._v(" 2.为什么要序列化？实现序列化的作用是什么？")]),_._v(" "),v("p",[_._v("如果光看定义我想你很难一下子理解序列化的意义，那么我们可以从另一个角度来推导出什么是序列化, 那么究竟序列化的目的是什么？")]),_._v(" "),v("p",[_._v("其实序列化最终的目的是为了对象可以跨平台存储，和进行网络传输。而我们进行跨平台存储和网络传输的方式就是IO，而我们的IO支持的数据格式就是字节数组。")]),_._v(" "),v("p",[_._v("因为我们单方面的只把对象转成字节数组还不行，因为没有规则的字节数组我们是没办法把对象的本来面目还原回来的，所以我们必须在把对象转成字节数组的时候就制定一种规则（序列化），那么我们从IO流里面读出数据的时候再以这种规则把对象还原回来（反序列化）。")]),_._v(" "),v("p",[_._v("如果我们要把一栋房子从一个地方运输到另一个地方去，序列化就是我把房子拆成一个个的砖块放到车子里，然后留下一张房子原来结构的图纸，反序列化就是我们把房子运输到了目的地以后，根据图纸把一块块砖头还原成房子原来面目的过程")]),_._v(" "),v("h2",{attrs:{id:"_3-什么情况下需要序列化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么情况下需要序列化"}},[_._v("#")]),_._v(" 3.什么情况下需要序列化？")]),_._v(" "),v("p",[_._v("通过上面我想你已经知道了凡是需要进行“跨平台存储”和”网络传输”的数据，都需要进行序列化。")]),_._v(" "),v("p",[_._v("本质上存储和网络传输 都需要经过 把一个对象状态保存成一种跨平台识别的字节格式，然后其他的平台才可以通过字节信息解析还原对象信息。")]),_._v(" "),v("h2",{attrs:{id:"_4-序列化的方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-序列化的方式"}},[_._v("#")]),_._v(" 4.序列化的方式")]),_._v(" "),v("p",[_._v("序列化只是一种拆装组装对象的规则，那么这种规则肯定也可能有多种多样，比如现在常见的序列化方式有：")]),_._v(" "),v("p",[_._v("JDK（不支持跨语言）、JSON、XML、Hessian、Kryo（不支持跨语言）、Thrift、Protostuff、FST（不支持跨语言）")]),_._v(" "),v("h2",{attrs:{id:"_5-序列化技术选型的几个关键点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-序列化技术选型的几个关键点"}},[_._v("#")]),_._v(" 5.序列化技术选型的几个关键点")]),_._v(" "),v("p",[_._v("序列化协议各有千秋，不能简单的说一种序列化协议是最好的，只能从你的当时环境下去选择最适合你们的序列化协议，如果你要为你的公司项目进行序列化技术的选型，那么主要从以下几个因素。")]),_._v(" "),v("p",[_._v("协议是否支持跨平台")]),_._v(" "),v("p",[_._v("如果你们公司有好多种语言进行混合开发，那么就肯定不适合用有语言局限性的序列化协议，要不然你JDK序列化出来的格式，其他语言并没法支持。")]),_._v(" "),v("p",[_._v("序列化的速度")]),_._v(" "),v("p",[_._v("如果序列化的频率非常高，那么选择序列化速度快的协议会为你的系统性能提升不少。")]),_._v(" "),v("p",[_._v("序列化出来的大小")]),_._v(" "),v("p",[_._v("如果频繁的在网络中传输的数据那就需要数据越小越好，小的数据传输快，也不占带宽，也能整体提升系统的性能。")])])}),[],!1,null,null,null);t.default=s.exports}}]);