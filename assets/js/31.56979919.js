(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{537:function(a,s,t){"use strict";t.r(s);var v=t(21),e=Object(v.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("在多线程编程中 "),t("code",[a._v("Synchronized")]),a._v("，"),t("code",[a._v("Volatile")]),a._v(" 都扮演着重要角色, 都已用来实现原子操作。 "),t("code",[a._v("Volatile")]),a._v(" 是轻量级的 "),t("code",[a._v("Synchronized")]),a._v(" ，保证了共享变量的可见性。"),t("br")]),a._v(" "),t("p",[a._v("可见性的意思是：当线程A修改共享变量的值后，线程B能立刻读到这个修改后的值。"),t("br")]),a._v(" "),t("p",[t("code",[a._v("Volatile")]),a._v(" 不会引起线程上下文的切换和调度，如果使用的恰当，会比 "),t("code",[a._v("Synchronized")]),a._v(" 执行成本更低。")]),a._v(" "),t("h2",{attrs:{id:"java中的内存可见性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java中的内存可见性"}},[a._v("#")]),a._v(" Java中的内存可见性")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("可见性：一个线程对共享变量值的修改，能够及时被其他线程看到。")])]),a._v(" "),t("li",[t("p",[a._v("共享变量：如果一个变量在多个线程的工作内存中都存在副本，那这个变量就是这几个线程的共享变量。")])]),a._v(" "),t("li",[t("p",[a._v("Java内存的规定：")])])]),a._v(" "),t("p",[a._v("-线程对共享变量的所有操作都必须在自己的工作内存中进行，不可直接从主内存中读写； -不同线程之间无法直接访问其他线程工作内存中的变量，线程间的变量值的传递需要通过主内存。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0y4fiko6yj20z50u040e.jpg",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"volatile-的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volatile-的实现原理"}},[a._v("#")]),a._v(" "),t("code",[a._v("Volatile")]),a._v(" 的实现原理")]),a._v(" "),t("p",[a._v("如果对用 "),t("code",[a._v("Volatile")]),a._v(" 修饰的变量写操作，"),t("code",[a._v("JVM")]),a._v(" 会向处理器发出一条 "),t("code",[a._v("Lock")]),a._v(" 前缀的指令，"),t("code",[a._v("Lock")]),a._v(" 前缀的指令在多核处理器下会引发两件事情：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("将当前处理器缓存行的数据写会到系统内存")])]),a._v(" "),t("li",[t("p",[a._v("这个写会内存的操作会使其他缓存中的该内存地址的数据无效")])])]),a._v(" "),t("h2",{attrs:{id:"synchronized-的用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-的用法"}},[a._v("#")]),a._v(" "),t("code",[a._v("Synchronized")]),a._v(" 的用法")]),a._v(" "),t("ol",[t("li",[a._v("普通同步方法：锁当前实例对象")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("静态同步方法：锁当前类的Class对象")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("同步代码块：锁括号里对象")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("h2",{attrs:{id:"synchronized-的锁存储在哪里"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-的锁存储在哪里"}},[a._v("#")]),a._v(" "),t("code",[a._v("Synchronized")]),a._v(" 的锁存储在哪里？")]),a._v(" "),t("p",[t("code",[a._v("Synchronized")]),a._v("的锁存储在Java的对象头里。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0ymc3x6eqj21ey07uta8.jpg",alt:""}})]),a._v(" "),t("p",[a._v("Java 对象头里的 Mark Word 用于存储对象的 HashCode 、分代年龄和锁标记位。"),t("br")]),a._v(" "),t("p",[a._v("32位虚拟机中， Mark Word 的存储结构如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0ymef2onqj21eu04k752.jpg",alt:""}})]),a._v(" "),t("p",[a._v("在运行期， Mark Word 有四种状态：轻量级锁、重量级锁、GC 标记、偏向锁，各状态下的存储结构如下图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0ymhc1sg6j21eq0aymyy.jpg",alt:""}})]),a._v(" "),t("p",[a._v("在64位虚拟机下，Mark Word 的存储结构如下图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0ymiiptghj21eq076t9y.jpg",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"为什么java中每个对象都可以作为锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么java中每个对象都可以作为锁"}},[a._v("#")]),a._v(" 为什么Java中每个对象都可以作为锁？")]),a._v(" "),t("p",[a._v("任何对象都有一个 "),t("code",[a._v("monitor")]),a._v(" 与之关联，当一个 "),t("code",[a._v("monitor")]),a._v(" 被持有后，他将处于锁定状态。"),t("code",[a._v("monitor")]),a._v(" 是用 C++ 实现的。")]),a._v(" "),t("p",[a._v("同步语句块的实现使用的是 "),t("code",[a._v("monitorenter")]),a._v(" 和 "),t("code",[a._v("monitorexit")]),a._v(" 指令，其中 "),t("code",[a._v("monitorenter")]),a._v(" 指令指向同步代码块的开始位置，"),t("code",[a._v("monitorexit")]),a._v(" 指令则指明同步代码块的结束位置。")]),a._v(" "),t("p",[t("code",[a._v("monitorenter")]),a._v(" 指令是在编译后插入到同步代码块的开始位置，而 "),t("code",[a._v("monitorexit")]),a._v(" 是插入到同步块的结束处和异常处，JVM 要保证每个 "),t("code",[a._v("monitorenter")]),a._v(" 都有 "),t("code",[a._v("monitorexit")]),a._v(" 与之配对。")]),a._v(" "),t("h2",{attrs:{id:"synchronized-锁升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-锁升级"}},[a._v("#")]),a._v(" "),t("code",[a._v("Synchronized")]),a._v(" 锁升级")]),a._v(" "),t("p",[t("code",[a._v("Synchronized")]),a._v(" 一直被称为重量级锁。但是在JDK 1.6之后它已经变得不那么重了。JDK 1.6 对"),t("code",[a._v("Synchronized")]),a._v(" 的优化点在于：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("引入了偏向锁")])]),a._v(" "),t("li",[t("p",[a._v("引入了轻量级锁")])])]),a._v(" "),t("p",[a._v("在JDK 1.6 中，"),t("code",[a._v("Synchronized")]),a._v(" 锁有四种状态，级别从低到高依次是：无锁、偏向锁、轻量级锁、重量级锁。"),t("br")]),a._v(" "),t("p",[a._v("这几个状态会随着锁竞争升级，但是不可以降级。")]),a._v(" "),t("h3",{attrs:{id:"偏向锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#偏向锁"}},[a._v("#")]),a._v(" 偏向锁")]),a._v(" "),t("p",[t("strong",[a._v("为什么引入偏向锁?")]),a._v(" "),t("br")]),a._v(" "),t("p",[a._v("不存锁竞争，或者总是由同一线程多次获得锁的场景，偏向锁的代价更低。")]),a._v(" "),t("p",[a._v("当一个线程访问同步块并获取到锁时，在锁对象头记录该线程的id，以后该线程进入和退出该同步块时不需要CAS来加锁和解锁。")]),a._v(" "),t("p",[t("strong",[a._v("偏向锁何时释放？")]),a._v(" "),t("br")]),a._v(" "),t("p",[a._v("偏向锁只有遇到其他线程尝试竞争偏向锁时，持有偏向锁的线程才会释放锁，线程是不会主动释放偏向锁的。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0yn1bt6ncj20u00xm0v2.jpg",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("偏向锁一定起到正面作用吗？")]),a._v(" "),t("br")]),a._v(" "),t("p",[a._v("不是的。"),t("br")]),a._v(" "),t("p",[a._v("偏向锁的适用场景是：不存锁竞争，或者总是由同一线程多次获得锁的场景。")]),a._v(" "),t("p",[a._v("如果你确定你的程序中 锁通常处于竞争状态，可以通过JVM参数关闭偏向锁。关闭后，程序回魔人进入轻量级锁状态。")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("\n-XX:UseBiasedLocking"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"轻量级锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#轻量级锁"}},[a._v("#")]),a._v(" 轻量级锁")]),a._v(" "),t("p",[a._v("轻量级锁是指当锁是偏向锁的时候，却被另外的线程所访问，此时偏向锁就会升级为轻量级锁，其他线程会通过自旋（关于自旋的介绍见文末）的形式尝试获取锁，线程不会阻塞，从而提高性能。")]),a._v(" "),t("p",[a._v("轻量级锁的获取主要由两种情况：① 当关闭偏向锁功能时；② 由于多个线程竞争偏向锁导致偏向锁升级为轻量级锁。")]),a._v(" "),t("p",[t("strong",[a._v("轻量级锁何时升级为重量级锁?")]),a._v(" "),t("br")]),a._v(" "),t("p",[a._v("若当前只有一个等待线程，则该线程将通过自旋进行等待。但是当自旋超过一定的次数时，轻量级锁便会升级为重量级锁（锁膨胀）。")]),a._v(" "),t("p",[a._v("另外，当一个线程已持有锁，另一个线程在自旋，而此时又有第三个线程来访时，轻量级锁也会升级为重量级锁（锁膨胀）。")]),a._v(" "),t("h3",{attrs:{id:"重量级锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重量级锁"}},[a._v("#")]),a._v(" 重量级锁")]),a._v(" "),t("p",[a._v("重量级锁是指当有一个线程获取锁之后，其余所有等待获取该锁的线程都会处于阻塞状态。")]),a._v(" "),t("p",[a._v("重量级锁的获取是释放一般会有线程上下文切换，代价是比较大的，所以说是重量级锁。")]),a._v(" "),t("h3",{attrs:{id:"锁升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁升级"}},[a._v("#")]),a._v(" 锁升级")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0ynbl2j8nj20sg0fy764.jpg",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"锁的优缺点对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁的优缺点对比"}},[a._v("#")]),a._v(" 锁的优缺点对比")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0ynmv8nwtj21eo0bmjug.jpg",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"java如何实现原子操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java如何实现原子操作"}},[a._v("#")]),a._v(" Java如何实现原子操作")]),a._v(" "),t("p",[a._v("原子操作：不可被中断的一个或一系列操作。"),t("br")]),a._v(" "),t("p",[a._v("Java 有两种实现原子操作的方式："),t("code",[a._v("CAS（compare and swap）")]),a._v("、锁。")]),a._v(" "),t("h3",{attrs:{id:"cas实现原子操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cas实现原子操作"}},[a._v("#")]),a._v(" CAS实现原子操作")]),a._v(" "),t("p",[a._v("CAS理论是 juc 包实现的基石，在intel的CPU中，CAS 通过调用本地方法（JNI）使用cmpxchg指令来实现的非阻塞算法。对比于synchronized阻塞算法，基于 CAS 实现的 juc 在性能上有了很大的提升。")]),a._v(" "),t("p",[a._v("CAS 操作包含三个操作数 —— 内存位置（V）、预期原值（A）和新值(B)。 如果内存位置的值与预期原值相匹配，那么处理器会自动将该位置值更新为新值 。否则，处理器不做任何操作。")]),a._v(" "),t("h3",{attrs:{id:"cas-存在的三个问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cas-存在的三个问题"}},[a._v("#")]),a._v(" CAS 存在的三个问题")]),a._v(" "),t("ol",[t("li",[a._v("ABA问题")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("因为CAS需要在操作值的时候检查下值有没有发生变化，如果没有发生变化则更新，但是如果一个值原来是A，变成了B，又变成了A，那么使用CAS进行检查时会发现它的值没有发生变化，但是实际上却变化了。")])]),a._v(" "),t("li",[t("p",[a._v("ABA问题的解决思路就是使用版本号。在变量前面追加上版本号，每次变量更新的时候把版本号加一，那么A－B－A 就会变成1A-2B－3A。")])]),a._v(" "),t("li",[t("p",[a._v("从Java1.5开始JDK的atomic包里提供了一个类AtomicStampedReference来解决ABA问题。这个类的compareAndSet方法作用是首先检查当前引用是否等于预期引用，并且当前标志是否等于预期标志，如果全部相等，则以原子方式将该引用和该标志的值设置为给定的更新值。")])])]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[a._v("循环时间长开销大")])]),a._v(" "),t("li",[t("p",[a._v("只能保证一个共享变量的原子操作")])])]),a._v(" "),t("p",[a._v("从Java1.5开始JDK提供了AtomicReference类来保证引用对象之间的原子性，你可以把多个变量放在一个对象里来进行CAS操作。")]),a._v(" "),t("h3",{attrs:{id:"锁机制实现原子操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁机制实现原子操作"}},[a._v("#")]),a._v(" 锁机制实现原子操作")]),a._v(" "),t("p",[a._v("锁机制保证了只有获得锁的线程才能操作指定的内存区域。除了偏向锁，JVM实现锁的方式都使用了循环CAS。")])])}),[],!1,null,null,null);s.default=e.exports}}]);