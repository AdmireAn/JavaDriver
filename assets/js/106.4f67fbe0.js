(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{607:function(a,_,v){"use strict";v.r(_);var t=v(21),r=Object(t.a)({},(function(){var a=this,_=a.$createElement,v=a._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("p",[a._v("一言以蔽之：虚拟地址空间的切换是很慢的。")]),a._v(" "),v("h2",{attrs:{id:"进程切换与线程切换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程切换与线程切换"}},[a._v("#")]),a._v(" 进程切换与线程切换")]),a._v(" "),v("p",[a._v("进程切换与线程切换的一个最主要区别就在于进程切换涉及到虚拟地址空间的切换而线程切换则不会。因为每个进程都有自己的虚拟地址空间，而线程是共享所在进程的虚拟地址空间的，因此同一个进程中的线程进行线程切换时不涉及虚拟地址空间的转换。")]),a._v(" "),v("p",[a._v("举一个不太恰当的例子，线程切换就好比你从主卧走到次卧，反正主卧和次卧都在同一个房子中(虚拟地址空间)，因此你无需换鞋子、换衣服等等。但是进程切换就不一样了，进程切换就好比从你家到别人家，这是两个不同的房子(不同的虚拟地址空间)，出发时要换好衣服、鞋子等等，到别人家后还要再换鞋子等等。")]),a._v(" "),v("p",[a._v("因此我们可以形象的认为线程是处在同一个屋檐下的，这里的屋檐就是虚拟地址空间，因此线程间切换无需虚拟地址空间的切换；而进程则不同，两个不同进程位于不同的屋檐下，即进程位于不同的虚拟地址空间，因此进程切换涉及到虚拟地址空间的切换，这也是为什么进程切换要比线程切换慢的原因。")]),a._v(" "),v("p",[a._v("有的同学可能还是不太明白，为什么虚拟地址空间切换会比较耗时呢？")]),a._v(" "),v("h2",{attrs:{id:"为什么虚拟地址切换很慢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么虚拟地址切换很慢"}},[a._v("#")]),a._v(" 为什么虚拟地址切换很慢")]),a._v(" "),v("p",[a._v("现在我们已经知道了进程都有自己的虚拟地址空间，把虚拟地址转换为物理地址需要查找页表，页表查找是一个很慢的过程，因此通常使用Cache来缓存常用的地址映射，这样可以加速页表查找，这个cache就是TLB，Translation Lookaside Buffer，我们不需要关心这个名字只需要知道TLB本质上就是一个cache，是用来加速页表查找的。")]),a._v(" "),v("p",[a._v("由于每个进程都有自己的虚拟地址空间，那么显然每个进程都有自己的页表，那么当进程切换后页表也要进行切换，页表切换后TLB就失效了，cache失效导致命中率降低，那么虚拟地址转换为物理地址就会变慢，表现出来的就是程序运行会变慢，而线程切换则不会导致TLB失效，因为线程线程无需切换地址空间，因此我们通常说线程切换要比较进程切换块，原因就在这里。")]),a._v(" "),v("h2",{attrs:{id:"什么是虚拟内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟内存"}},[a._v("#")]),a._v(" 什么是虚拟内存")]),a._v(" "),v("p",[a._v("虚拟内存是操作系统为每个进程提供的一种抽象，每个进程都有属于自己的、私有的、地址连续的虚拟内存，当然我们知道最终进程的数据及代码必然要放到物理内存上，那么必须有某种机制能记住虚拟地址空间中的某个数据被放到了哪个物理内存地址上，这就是所谓的地址空间映射，也就是虚拟内存地址与物理内存地址的映射关系。")]),a._v(" "),v("p",[a._v("那么操作系统是如何记住这种映射关系的呢，答案就是页表，页表中记录了虚拟内存地址到物理内存地址的映射关系。有了页表就可以将虚拟地址转换为物理内存地址了，这种机制就是虚拟内存。")]),a._v(" "),v("p",[a._v("每个进程都有自己的虚拟地址空间，进程内的所有线程共享进程的虚拟地址空间。")]),a._v(" "),v("h2",{attrs:{id:"为什么需要虚拟内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要虚拟内存"}},[a._v("#")]),a._v(" 为什么需要虚拟内存")]),a._v(" "),v("p",[a._v("对于程序员来说，我们在编程时实际上是不怎么操心内存问题的，对于使用Java、Python、JavaScript等动态类型语言的程序员来说更是如此，自动内存回收机制的引入使得使用这类语言的程序员几乎完全不用关心内存问题；即使对于编译型语言C/C++来说，程序员需要关心的也仅仅是内存的申请和释放。")]),a._v(" "),v("p",[a._v("总的来说，作为程序员(无论使用什么类型的语言)我们根本就不关心数据以及程序被放在了物理内存的哪个位置上(设计实现操作系统的程序员除外)，我们可以简单的认为我们的程序独占内存，比如在32位系统下我们的进程占用的内存空间为4G；并且我们可以申请超过物理内存大小的空间，比如在只有256MB的系统上程序员可以申请1G大小的内存空间，这种假设极大的解放了程序员的生产力。")]),a._v(" "),v("p",[a._v("而这种假设实现的背后功臣就是虚拟内存。")]),a._v(" "),v("h3",{attrs:{id:"为什么内存不够用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么内存不够用"}},[a._v("#")]),a._v(" 为什么内存不够用？")]),a._v(" "),v("p",[a._v("要理解一个技术，就必须理解它为何而存在。总体来说，"),v("strong",[a._v("虚拟化技术是为了解决内存不够用的问题")]),a._v("，那么内存为何不够用呢？")]),a._v(" "),v("p",[a._v("主要是因为程序越来越复杂。比如说我现在给你录音的机器上就有 200 个进程，目前内存的消耗是 21G，我的内存是 64G 的，但是多开一些程序还是会被占满。 另外，如果一个程序需要使用大的内存，比如 1T，是不是应该报错？如果报错，那么程序就会不好写，程序员必须小心翼翼地处理内存的使用，避免超过允许的内存使用阈值。以上提到的这些都是需要解决的问题，也是虚拟化技术存在的价值和意义。")]),a._v(" "),v("p",[a._v("那么如何来解决这些问题呢？ 历史上有过不少的解决方案，但最终沉淀下的是虚拟化技术。接下来我为你介绍一种历史上存在过的 Swap 技术以及虚拟化技术。")]),a._v(" "),v("h3",{attrs:{id:"交换-swap-技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交换-swap-技术"}},[a._v("#")]),a._v(" 交换（SWAP）技术")]),a._v(" "),v("p",[a._v("Swap 技术允许一部分进程使用内存，不使用内存的进程数据先保存在磁盘上。注意，这里提到的数据，是完整的进程数据，包括正文段（程序指令）、数据段、堆栈段等。轮到某个进程执行的时候，尝试为这个进程在内存中找到一块空闲的区域。如果空间不足，就考虑把没有在执行的进程交换（Swap）到磁盘上，把空间腾挪出来给需要的进程。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E9%87%8D%E5%AD%A6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F-%E5%AE%8C/assets/Ciqc1F_Hb-GAermKAACje6hFwj4571.png",alt:"Lark20201202-184240.png"}})]),a._v(" "),v("p",[a._v("上图中，内存被拆分成多个区域。 内核作为一个程序也需要自己的内存。另外每个进程独立得到一个空间——我们称为地址空间（"),v("strong",[a._v("Address Space）")]),a._v("。你可以认为地址空间是一块连续分配的内存块。每个进程在不同地址空间中工作，构成了一个原始的虚拟化技术。")]),a._v(" "),v("p",[a._v("比如：当进程 A 想访问地址 100 的时候，实际上访问的地址是基于地址空间本身位置（首字节地址）计算出来的。另外，当进程 A 执行时，CPU 中会保存它地址空间的开始位置和结束位置，当它想访问超过地址空间容量的地址时，CPU 会检查然后报错。")]),a._v(" "),v("p",[a._v("上图描述的这种方法，是一种比较原始的虚拟化技术，进程使用的是基于地址空间的虚拟地址。但是这种方案有很多明显的缺陷，比如：")]),a._v(" "),v("ol",[v("li",[v("strong",[a._v("碎片问题")]),a._v("：上图中我们看到进程来回分配、回收交换，内存之间会产生很多缝隙。经过反反复复使用，内存的情况会变得十分复杂，导致整体性能下降。")]),a._v(" "),v("li",[v("strong",[a._v("频繁切换问题")]),a._v("：如果进程过多，内存较小，会频繁触发交换。")])]),a._v(" "),v("p",[a._v("你可以先思考这两个问题的解决方案，接下来我会带你进行一些更深入地思考——首先重新 Review 下我们的设计目标。")]),a._v(" "),v("ol",[v("li",[a._v("隔离：每个应用有自己的地址空间，互不影响。")]),a._v(" "),v("li",[a._v("性能：高频使用的数据保留在内存中、低频使用的数据持久化到磁盘上。")]),a._v(" "),v("li",[a._v("程序好写（降低程序员心智负担）：让程序员不用关心底层设施。")])]),a._v(" "),v("p",[a._v("现阶段，Swap 技术已经初步解决了问题 1。关于问题 2，Swap 技术在性能上存在着碎片、频繁切换等明显劣势。关于问题 3，使用 Swap 技术，程序员需要清楚地知道自己的应用用多少内存，并且小心翼翼地使用内存，避免需要重新申请，或者研发不断扩容的算法——这让程序心智负担较大。")]),a._v(" "),v("p",[a._v("经过以上分析，需要更好的解决方案，就是我们接下来要学习的虚拟化技术。")]),a._v(" "),v("h3",{attrs:{id:"虚拟内存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟内存"}},[a._v("#")]),a._v(" 虚拟内存")]),a._v(" "),v("p",[a._v("虚拟化技术中，操作系统设计了虚拟内存（理论上可以无限大的空间），受限于 CPU 的处理能力，通常 64bit CPU，就是 264 个地址。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E9%87%8D%E5%AD%A6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F-%E5%AE%8C/assets/Ciqc1F_Hb_aALLF_AABvGKciFvQ002.png",alt:"Lark20201202-184243.png"}}),a._v("虚拟化技术中，应用使用的是虚拟内存，操作系统管理虚拟内存和真实内存之间的映射。操作系统将虚拟内存分成整齐小块，每个小块称为一个"),v("strong",[a._v("页（Page）")]),a._v("。之所以这样做，原因主要有以下两个方面。")]),a._v(" "),v("ul",[v("li",[a._v("一方面应用使用内存是以页为单位，整齐的页能够避免内存碎片问题。")]),a._v(" "),v("li",[a._v("另一方面，每个应用都有高频使用的数据和低频使用的数据。这样做，操作系统就不必从应用角度去思考哪个进程是高频的，仅需思考哪些页被高频使用、哪些页被低频使用。如果是低频使用，就将它们保存到硬盘上；如果是高频使用，就让它们保留在真实内存中。")])]),a._v(" "),v("p",[a._v("如果一个应用需要非常大的内存，应用申请的是虚拟内存中的很多个页，真实内存不一定需要够用。")]),a._v(" "),v("h2",{attrs:{id:"进程-线程-在操作系统中切换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程-线程-在操作系统中切换"}},[a._v("#")]),a._v(" 进程（线程）在操作系统中切换")]),a._v(" "),v("p",[a._v("进程（线程）在操作系统中是不断切换的，现代操作系统中只有线程的切换。")]),a._v(" "),v("p",[a._v("每次切换需要先保存当前寄存器的值的内存，注意 PC 指针也是一种寄存器。当恢复执行的时候，就需要从内存中读出所有的寄存器，恢复之前的状态，然后执行。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E9%87%8D%E5%AD%A6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F-%E5%AE%8C/assets/CgqCHl-iUY-AEqrUAAKnDhPzBcQ340.png",alt:"Lark20201104-145523.png"}})]),a._v(" "),v("p",[a._v("上面讲到的内容，我们可以概括为以下 5 个步骤：")]),a._v(" "),v("ol",[v("li",[a._v("当操作系统发现一个进程（线程）需要被切换的时候，直接控制 PC 指针跳转是非常危险的事情，所以操作系统需要发送一个“中断”信号给 CPU，停下正在执行的进程（线程）。")]),a._v(" "),v("li",[a._v("当 CPU 收到中断信号后，正在执行的进程（线程）会立即停止。注意，因为进程（线程）马上被停止，它还来不及保存自己的状态，所以后续操作系统必须完成这件事情。")]),a._v(" "),v("li",[a._v("操作系统接管中断后，趁寄存器数据还没有被破坏，必须马上执行一小段非常底层的程序（通常是汇编编写），帮助寄存器保存之前进程（线程）的状态。")]),a._v(" "),v("li",[a._v("操作系统保存好进程状态后，执行调度程序，决定下一个要被执行的进程（线程）。")]),a._v(" "),v("li",[a._v("最后，操作系统执行下一个进程（线程）。")])]),a._v(" "),v("p",[v("img",{attrs:{src:"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E9%87%8D%E5%AD%A6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F-%E5%AE%8C/assets/Ciqc1F-iUZ-Af-t9AAC3WjDjEM4772.png",alt:"Lark20201104-145556.png"}})]),a._v(" "),v("p",[a._v("当然，一个进程（线程）被选择执行后，它会继续完成之前被中断时的任务，这需要操作系统来执行一小段底层的程序帮助进程（线程）恢复状态。")]),a._v(" "),v("p",[v("img",{attrs:{src:"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E9%87%8D%E5%AD%A6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F-%E5%AE%8C/assets/Ciqc1F-iUa-AdqG9AACMOQKJe2Q431.png",alt:"Lark20201104-145530.png"}})]),a._v(" "),v("p",[a._v("一种可能的算法就是通过栈这种数据结构。进程（线程）中断后，操作系统负责压栈关键数据（比如寄存器）。恢复执行时，操作系统负责出栈和恢复寄存器的值。")]),a._v(" "),v("h2",{attrs:{id:"为什么创建进程开销比线程大"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么创建进程开销比线程大"}},[a._v("#")]),a._v(" 为什么创建进程开销比线程大？")]),a._v(" "),v("p",[a._v("Linux 中创建一个进程自然会创建一个线程，也就是主线程。创建进程需要为进程划分出一块完整的内存空间，有大量的初始化操作，比如要把内存分段（堆栈、正文区等）。")]),a._v(" "),v("p",[a._v("创建线程则简单得多，只需要确定 PC 指针和寄存器的值，并且给线程分配一个栈用于执行程序，同一个进程的多个线程间可以复用堆栈。")]),a._v(" "),v("p",[a._v("因此，创建进程比创建线程慢，而且进程的内存开销更大。")]),a._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),v("p",[v("a",{attrs:{href:"https://learn.lianglianglee.com/%E4%B8%93%E6%A0%8F/%E9%87%8D%E5%AD%A6%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F-%E5%AE%8C/17%20%20%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B%EF%BC%9A%E8%BF%9B%E7%A8%8B%E7%9A%84%E5%BC%80%E9%94%80%E6%AF%94%E7%BA%BF%E7%A8%8B%E5%A4%A7%E5%9C%A8%E4%BA%86%E5%93%AA%E9%87%8C%EF%BC%9F.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("17 进程和线程：进程的开销比线程大在了哪里？"),v("OutboundLink")],1)]),a._v(" "),v("p",[v("a",{attrs:{href:"https://segmentfault.com/a/1190000019750164",target:"_blank",rel:"noopener noreferrer"}},[a._v("进程切换与线程切换的区别？"),v("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=r.exports}}]);