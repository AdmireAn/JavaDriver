(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{619:function(s,a,t){"use strict";t.r(a);var n=t(21),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("当我们向固定大小的线程池中请求一个线程时，如果线程池中没有空闲资源了，这个时候线程池如何处理这个请求？是拒绝请求还是排队请求？各种处理策略又是怎么实现的呢？")])]),s._v(" "),t("h3",{attrs:{id:"如何理解-队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-队列"}},[s._v("#")]),s._v(" 如何理解“队列”")]),s._v(" "),t("p",[s._v("可以把它想象成排队买票，先来的先买，后来的人只能站在末尾，不允许插队。"),t("strong",[s._v("先进者先出，这就是典型的“队列”")]),s._v("。")]),s._v(" "),t("p",[s._v("我们知道栈只支持两个基本操作："),t("strong",[s._v("入栈push()和出栈pop()")]),s._v("。队列跟栈非常相似，支持的操作也很有限，最基本的操作也是两个："),t("strong",[s._v("入队enqueue()")]),s._v("，放一个数据到队列尾部；"),t("strong",[s._v("出队dequeue()")]),s._v("，从队列头部取一个元素。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/9eca53f9b557b1213c5d94b94e9dce3e.jpg",alt:"dlhz"}})]),s._v(" "),t("p",[s._v("所以队列和栈一样，也是一种"),t("strong",[s._v("操作受限的线性表数据结构")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"顺序队列和链式队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#顺序队列和链式队列"}},[s._v("#")]),s._v(" 顺序队列和链式队列")]),s._v(" "),t("p",[s._v("跟栈一样，队列可以用数组来实现，也可以用链表来实现。用数组实现的栈叫顺序栈，用链表实现的栈叫链式栈。同样，用数组实现的队列叫作"),t("strong",[s._v("顺序队列")]),s._v("，用链表实现的队列叫作"),t("strong",[s._v("链式队列")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用数组实现的队列")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayQueue")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数组：items，数组大小：n")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// head 表示队头下标，tail 表示队尾下标")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" head "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" tail "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 申请一个大小为 capacity 的数组")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayQueue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    items "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 入队")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("enqueue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果 tail == n 表示队列已经满了")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tail "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("tail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 出队")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dequeue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果 head == tail 表示队列为空")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" tail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为了让其他语言的同学看的更加明确，把 -- 操作放到单独一行来写了")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" ret "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ret"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])]),t("p",[s._v("对于栈来说，我们只需要一个"),t("strong",[s._v("栈顶指针")]),s._v("就可以了。但是队列需要两个指针：一个是head指针，指向队头；一个是tail指针，指向队尾。")]),s._v(" "),t("p",[s._v("可以结合下图来理解。当a、b、c、d依次入队之后，队列中的head指针指向下标为0的位置，tail指针指向下标为4的位置。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/5c0ec42eb797e8a7d48c9dbe89dc93cb.jpg",alt:"rd"}})]),s._v(" "),t("p",[s._v("当我们调用两次出队操作之后，队列中head指针指向下标为2的位置，tail指针仍然指向下标为4的位置。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/dea27f2c505dd8d0b6b86e262d03430d.jpg",alt:"cd"}})]),s._v(" "),t("p",[s._v("随着不停地进行入队、出队操作，head和tail都会持续往后移动。当tail移动到最右边，即使数组中还有空闲空间，也无法继续往队列中添加数据了。如何解决这个问题呢？")]),s._v(" "),t("p",[s._v("用"),t("strong",[s._v("数据搬移")]),s._v("是一种解决方式，但是每次进行出队操作都相当于删除数组下标为0的数据，要搬移整个队列中的数据，这样出队操作的时间复杂度就会由原来的O(1)变为O(n)。")]),s._v(" "),t("p",[s._v("但是我们可以优化一下，在出队时我们不用搬移数据。如果没有空闲空间了，我们只需要在入队时，再集中触发一次数据的搬移操作。借助这个思想，出队函数dequeue()保持不变，我们稍微改造下入队函数enqueue()的实现就可以了。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 入队操作，将 item 放入队尾")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("enqueue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// tail == n 表示队列末尾没有空间了")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tail "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// tail ==n && head==0，表示整个队列都占满了")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数据搬移")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" tail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 搬移完之后重新更新 head 和 tail")]),s._v("\n      tail "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      head "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" item"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("tail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("从代码中得知，当队列的tail指针移动到数组的最右边，如果有新的数据入队，我们可以将head到tail之间的数据，整体搬移到数组中0到tail-head的位置。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/094ba7722eeec46ead58b40c097353c7.jpg",alt:"sjby"}})]),s._v(" "),t("p",[s._v("这种实现思路，出队操作的时间复杂度仍然是O(1)，但入队操作的时间复杂度还是O(1)吗？")]),s._v(" "),t("blockquote",[t("p",[s._v("用均摊时间复杂度分析下，最好情况下入队操作时间复杂度是O(1)，最坏情况下时间复杂度是O(n)，由于大部分入栈操作时间复杂度都是O(1)，所以均摊下来入队操作时间复杂度仍然是O(1)。")])]),s._v(" "),t("p",[t("strong",[s._v("基于链表的队列实现方法")])]),s._v(" "),t("p",[s._v("基于链表的实现，我们仍然需要两个指针：head和tail。它们分别指向链表的第一个结点和最后一个结点。如图所示，入队时，tail->next=new_node，tail = tail->next；出队时，head=head->next。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/c916fe2212f8f543ddf539296444d393.jpg",alt:"lbdl"}})]),s._v(" "),t("h3",{attrs:{id:"循环队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环队列"}},[s._v("#")]),s._v(" 循环队列")]),s._v(" "),t("p",[s._v("当用数组来实现队列的时候，当tail==n时，会有数据搬移操作，这样入队操作性能就会受到影响。我们可以用循环队列来解决这个问题。")]),s._v(" "),t("p",[s._v("循环队列，它长得像一个环。原本数组是有头有尾的，是一条直线，现在我们把首尾相连，扳成了一个环。如图所示")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/58ba37bb4102b87d66dffe7148b0f990.jpg",alt:"xhdl"}})]),s._v(" "),t("p",[s._v("如图所示，这个队列的大小为8，当前head=4，tail=7。当有一个新的元素a入队时，我们放入下标为7的位置。但这个时候，我们并不把tail更新为8，而是将其在环中后移一位，到下标为0到位置。当再有一个元素b入队时，我们将b放入下标为0的位置，然后tail加1更新为1。所以，在a、b依次入队之后，循环队列中的元素就变成了下面这个样子")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/71a41effb54ccea9dd463bde1b6abe80.jpg",alt:"xhdlrd"}})]),s._v(" "),t("p",[s._v("通过这样的方法，我们成功避免了数据搬移操作。但要想写出没有bug的循环队列的实现代码。最关键的是，"),t("strong",[s._v("确定好队空和队满的判定条件")]),s._v("。")]),s._v(" "),t("p",[s._v("在用数组实现的非循环队列中，队满的判定条件是tail == n，队空的判定条件是head == tail。那针对循环队列，如何判断队空和队满呢？")]),s._v(" "),t("p",[s._v("队列为空的判定条件仍然是head == tail。但是队满的判定条件比较复杂了，如下图所示，总结一下规律")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/3d81a44f8c42b3ceee55605f9aeedcec.jpg",alt:"xhdldmpd"}})]),s._v(" "),t("p",[s._v("如图所示，tail=3，head=4，n=8，总结规律就是：(3+1)%8 = 4。多画几张图就会发现，当队满时，"),t("strong",[s._v("(tail+1)%n = head")]),s._v("。")]),s._v(" "),t("p",[s._v("但是当队满时，图中的tail指向的位置实际上是没有存储数据的。所以，循环队列会浪费一格数组的存储空间。")]),s._v(" "),t("p",[s._v("没理解？看代码")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("public class CircularQueue {\n  // 数组：items，数组大小：n\n  private String[] items;\n  private int n = 0;\n  // head 表示队头下标，tail 表示队尾下标\n  private int head = 0;\n  private int tail = 0;\n\n  // 申请一个大小为 capacity 的数组\n  public CircularQueue(int capacity) {\n    items = new String[capacity];\n    n = capacity;\n  }\n\n  // 入队\n  public boolean enqueue(String item) {\n    // 队列满了\n    if ((tail + 1) % n == head) return false;\n    items[tail] = item;\n    tail = (tail + 1) % n;\n    return true;\n  }\n\n  // 出队\n  public String dequeue() {\n    // 如果 head == tail 表示队列为空\n    if (head == tail) return null;\n    String ret = items[head];\n    head = (head + 1) % n;\n    return ret;\n  }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("h3",{attrs:{id:"阻塞队列和并发队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#阻塞队列和并发队列"}},[s._v("#")]),s._v(" 阻塞队列和并发队列")]),s._v(" "),t("p",[t("strong",[s._v("阻塞队列")]),s._v("其实就是在队列基础上增加了阻塞操作。简单讲就是队列为空的时候，从队头取数据会被阻塞。因为此时还没有数据可取，知道队列中有了数据才能返回；如果队列已经满了，那么插入数据的操作就会被阻塞，直到队列中有空闲位置后再插入数据，然后再返回。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/5ef3326181907dea0964f612890185eb.jpg",alt:"zsdl"}})]),s._v(" "),t("p",[s._v("上述的定义就是一个“生产者 - 消费者模型”。")]),s._v(" "),t("blockquote",[t("p",[s._v("这种基于阻塞队列实现的“生产者 - 消费者模型”，可以有效地协调生产和消费的速度。当“生产者”生产数据的速度过快，“消费者”来不及消费时，存储数据的队列很快就会满了。这个时候，生产者就阻塞等待，直到“消费者”消费了数据，“生产者”才会被唤醒继续“生产”。")])]),s._v(" "),t("p",[s._v("基于阻塞队列，我们还可以通过协调“生产者”和“消费者”的个数，来提高数据的处理效率。比如多配置几个“消费者”，来对应一个生产过快的“生产者”。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/9f539cc0f1edc20e7fa6559193898067.jpg",alt:"zedlxt"}})]),s._v(" "),t("p",[s._v("在多线程情况下，会有多个线程同时操作队列，这个时候会存在线程安全问题。该如何实现线程安全的队列呢？")]),s._v(" "),t("p",[s._v("线程安全的队列我们叫作"),t("strong",[s._v("并发队列")]),s._v("。最简单直接的实现方式是直接在enqueue()、dequeue()方法上加锁，但是锁粒度大并发度就会比较低，同一时刻仅允许一个存或者取操作。实际上，基于数组的循环队列，利用CAS原子操作，可以实现非常高效的并发队列。这也是循环队列比链式队列应用更加广泛的原因。")]),s._v(" "),t("h3",{attrs:{id:"解答开篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解答开篇"}},[s._v("#")]),s._v(" 解答开篇")]),s._v(" "),t("p",[s._v("线程池没有空闲线程时，新的任务请求线程资源时，线程池该如何处理？各种处理策略又是如何实现的呢？")]),s._v(" "),t("p",[s._v("有两种处理策略。第一种是非阻塞的处理方式，直接拒绝任务请求；另一种是阻塞的处理方式，将请求排队，等到有空闲线程时，取出排队的请求继续处理。那如何存储排队的请求呢？")]),s._v(" "),t("p",[s._v("我们希望公平地处理每个排队的请求，先进者先服务，所以队列这种数据结构很适合来存储排队请求。队列有基于链表和基于数组这两种实现方式。这两种实现方式对于排队请求又有什么区别呢？")]),s._v(" "),t("p",[s._v("基于链表的实现方式，可以实现一个支持无限排队的无界队列（unbounded queue），但是可能会导致过多的请求排队等待，请求处理的响应时间过长。所以，针对响应时间比较敏感的系统，基于链表实现的无限排队的线程池是不合适的。")]),s._v(" "),t("p",[s._v("而基于数组实现的有界队列（bounded queue），队列的大小有限，所以线程池中排队的请求超过队列大小时，接下来的请求就会被拒绝，这种方式对响应时间敏感的系统来说，就相对更加合理。不过，设置一个合理的队列大小，也是非常有讲究的。队列太大导致等待的请求太多，队列太小会导致无法充分利用系统资源、发挥最大性能。")]),s._v(" "),t("p",[s._v("队列可以应用在任何有限资源池中，用于排队请求，比如数据库连接池等。"),t("strong",[s._v("实际上，对于大部分资源有限的场景，当没有空闲资源时，基本上都可以通过“队列”这种数据结构来实现请求排队")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"内容小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容小结"}},[s._v("#")]),s._v(" 内容小结")]),s._v(" "),t("p",[s._v("队列最大的特点就是先进先出，主要的两个操作是入队和出队。跟栈一样，它既可以用数组来实现，也可以用链表来实现。用数组实现的叫顺序队列，用链表实现的叫链式队列。特别是长得像一个环的循环队列。在数组实现队列的时候，会有数据搬移操作，要想解决数据搬移的问题，我们就需要像环一样的循环队列。")]),s._v(" "),t("p",[s._v("循环队列是重点。要想写出没有 bug 的循环队列实现代码，关键要确定好队空和队满的判定条件，具体的代码你要能写出来。")]),s._v(" "),t("p",[s._v("除此之外，几种高级的队列结构，阻塞队列、并发队列，底层都还是队列这种数据结构，只不过在之上附加了很多其他功能。阻塞队列就是入队、出队操作可以阻塞，并发队列就是队列的操作多线程安全。")]),s._v(" "),t("h3",{attrs:{id:"思考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[s._v("#")]),s._v(" 思考")]),s._v(" "),t("ol",[t("li",[s._v("除了线程池这种池结构会用到队列排队请求，你还知道有哪些类似的池结构或者场景中会用到队列的排队请求呢？")]),s._v(" "),t("li",[s._v("关于如何实现无锁并发队列，网上有非常多的讨论。对这个问题，你怎么看呢？")])]),s._v(" "),t("h3",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://aleej.com/2019/09/29/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E4%B9%8B%E7%BE%8E%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/",target:"_blank",rel:"noopener noreferrer"}},[s._v("数据结构与算法之美-队列"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);