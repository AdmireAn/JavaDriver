(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{624:function(t,v,A){"use strict";A.r(v);var s=A(21),r=Object(s.a)({},(function(){var t=this,v=t.$createElement,A=t._self._c||v;return A("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[A("h2",{attrs:{id:"什么是堆"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#什么是堆"}},[t._v("#")]),t._v(" 什么是堆")]),t._v(" "),A("p",[t._v("堆是一种满足以下条件的树：")]),t._v(" "),A("p",[t._v("堆中的每一个节点值都大于等于（或小于等于）子树中所有节点的值。或者说，任意一个节点的值都大于等于（或小于等于）所有子节点的值。")]),t._v(" "),A("blockquote",[A("p",[t._v("大家可以把堆(最大堆)理解为一个公司,这个公司很公平,谁能力强谁就当老大,不存在弱的人当老大,老大手底下的人一定不会比他强。这样有助于理解后续堆的操作。")])]),t._v(" "),A("p",[A("strong",[t._v("!!!特别提示：")])]),t._v(" "),A("ul",[A("li",[t._v("很多博客说堆是完全二叉树，其实并非如此，"),A("strong",[t._v("堆不一定是完全二叉树")]),t._v("，只是为了方便存储和索引，我们通常用完全二叉树的形式来表示堆，事实上，广为人知的斐波那契堆和二项堆就不是完全二叉树,它们甚至都不是二叉树。")]),t._v(" "),A("li",[t._v("（"),A("strong",[t._v("二叉")]),t._v("）堆是一个数组，它可以被看成是一个 "),A("strong",[t._v("近似的完全二叉树")]),t._v("。——《算法导论》第三版")])]),t._v(" "),A("p",[t._v("大家可以尝试判断下面给出的图是否是堆？")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%A0%861.1da7c32c.png",alt:"img"}})]),t._v(" "),A("p",[t._v("第1个和第2个是堆。第1个是最大堆，每个节点都比子树中所有节点大。第2个是最小堆，每个节点都比子树中所有节点小。")]),t._v(" "),A("p",[t._v("第3个不是，第三个中，根结点1比2和15小，而15却比3大，19比5大，不满足堆的性质。")]),t._v(" "),A("h2",{attrs:{id:"堆的用途"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#堆的用途"}},[t._v("#")]),t._v(" 堆的用途")]),t._v(" "),A("p",[t._v("当我们只关心所有数据中的最大值或者最小值，存在多次获取最大值或者最小值，多次插入或删除数据时，就可以使用堆。")]),t._v(" "),A("p",[t._v("有小伙伴可能会想到用有序数组，初始化一个有序数组时间复杂度是 "),A("code",[t._v("O(nlog(n))")]),t._v("，查找最大值或者最小值时间复杂度都是 "),A("code",[t._v("O(1)")]),t._v("，但是，涉及到更新（插入或删除）数据时，时间复杂度为 "),A("code",[t._v("O(n)")]),t._v("，即使是使用复杂度为 "),A("code",[t._v("O(log(n))")]),t._v(" 的二分法找到要插入或者删除的数据，在移动数据时也需要 "),A("code",[t._v("O(n)")]),t._v(" 的时间复杂度。")]),t._v(" "),A("p",[A("strong",[t._v("相对于有序数组而言，堆的主要优势在于更新数据效率较高。")]),t._v(" 堆的初始化时间复杂度为 "),A("code",[t._v("O(nlog(n))")]),t._v("，堆可以做到"),A("code",[t._v("O(1)")]),t._v("时间复杂度取出最大值或者最小值，"),A("code",[t._v("O(log(n))")]),t._v("时间复杂度插入或者删除数据，具体操作在后续章节详细介绍。")]),t._v(" "),A("h2",{attrs:{id:"堆的分类"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#堆的分类"}},[t._v("#")]),t._v(" 堆的分类")]),t._v(" "),A("p",[t._v("堆分为 "),A("strong",[t._v("最大堆")]),t._v(" 和 "),A("strong",[t._v("最小堆")]),t._v("。二者的区别在于节点的排序方式。")]),t._v(" "),A("ul",[A("li",[A("strong",[t._v("最大堆")]),t._v(" ：堆中的每一个节点的值都大于等于子树中所有节点的值")]),t._v(" "),A("li",[A("strong",[t._v("最小堆")]),t._v(" ：堆中的每一个节点的值都小于等于子树中所有节点的值")])]),t._v(" "),A("p",[t._v("如下图所示，图1是最大堆，图2是最小堆")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%A0%862.66dd01d8.png",alt:"img"}})]),t._v(" "),A("h2",{attrs:{id:"堆的存储"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#堆的存储"}},[t._v("#")]),t._v(" 堆的存储")]),t._v(" "),A("p",[t._v("之前介绍树的时候说过，由于完全二叉树的优秀性质，利用数组存储二叉树即节省空间，又方便索引（若根结点的序号为1，那么对于树中任意节点i，其左子节点序号为 "),A("code",[t._v("2*i")]),t._v("，右子节点序号为 "),A("code",[t._v("2*i+1")]),t._v("）。")]),t._v(" "),A("p",[t._v("为了方便存储和索引，（二叉）堆可以用完全二叉树的形式进行存储。存储的方式如下图所示：")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%A0%86%E7%9A%84%E5%AD%98%E5%82%A8.03237dbe.png",alt:"堆的存储"}})]),t._v(" "),A("h2",{attrs:{id:"堆的操作"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#堆的操作"}},[t._v("#")]),t._v(" 堆的操作")]),t._v(" "),A("p",[t._v("堆的更新操作主要包括两种 : "),A("strong",[t._v("插入元素")]),t._v(" 和 "),A("strong",[t._v("删除堆顶元素")]),t._v("。操作过程需要着重掌握和理解。")]),t._v(" "),A("blockquote",[A("p",[t._v("在进入正题之前，再重申一遍，堆是一个公平的公司，有能力的人自然会走到与他能力所匹配的位置")])]),t._v(" "),A("h3",{attrs:{id:"插入元素"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#插入元素"}},[t._v("#")]),t._v(" 插入元素")]),t._v(" "),A("blockquote",[A("p",[t._v("插入元素，作为一个新入职的员工，初来乍到，这个员工需要从基层做起")])]),t._v(" "),A("p",[A("strong",[t._v("1.将要插入的元素放到最后")])]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%A0%86-%E6%8F%92%E5%85%A5%E5%85%83%E7%B4%A01.9a9e88c3.png",alt:"堆-插入元素-1"}})]),t._v(" "),A("blockquote",[A("p",[t._v("有能力的人会逐渐升职加薪，是金子总会发光的！！！")])]),t._v(" "),A("p",[A("strong",[t._v("2.从底向上，如果父结点比该元素大，则该节点和父结点交换，直到无法交换")])]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%A0%86-%E6%8F%92%E5%85%A5%E5%85%83%E7%B4%A02.7e937b5e.png",alt:"堆-插入元素2"}})]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%A0%86-%E6%8F%92%E5%85%A5%E5%85%83%E7%B4%A03.8e0739cc.png",alt:"堆-插入元素3"}})]),t._v(" "),A("h3",{attrs:{id:"删除堆顶元素"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#删除堆顶元素"}},[t._v("#")]),t._v(" 删除堆顶元素")]),t._v(" "),A("p",[t._v("根据堆的性质可知，最大堆的堆顶元素为所有元素中最大的，最小堆的堆顶元素是所有元素中最小的。当我们需要多次查找最大元素或者最小元素的时候，可以利用堆来实现。")]),t._v(" "),A("p",[t._v('删除堆顶元素后，为了保持堆的性质，需要对堆的结构进行调整，我们将这个过程称之为"'),A("strong",[t._v("堆化")]),t._v('"，堆化的方法分为两种：')]),t._v(" "),A("ul",[A("li",[t._v("一种是自底向上的堆化，上述的插入元素所使用的就是自底向上的堆化，元素从最底部向上移动。")]),t._v(" "),A("li",[t._v("另一种是自顶向下堆化，元素由最顶部向下移动。在讲解删除堆顶元素的方法时，我将阐述这两种操作的过程，大家可以体会一下二者的不同。")])]),t._v(" "),A("h3",{attrs:{id:"自底向上堆化"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#自底向上堆化"}},[t._v("#")]),t._v(" 自底向上堆化")]),t._v(" "),A("blockquote",[A("p",[t._v("在堆这个公司中，会出现老大离职的现象，老大离职之后，他的位置就空出来了")])]),t._v(" "),A("p",[t._v("首先删除堆顶元素，使得数组中下标为1的位置空出。")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%88%A0%E9%99%A4%E5%A0%86%E9%A1%B6%E5%85%83%E7%B4%A01.cd68b7ff.png",alt:"删除堆顶元素1"}})]),t._v(" "),A("blockquote",[A("p",[t._v("那么他的位置由谁来接替呢，当然是他的直接下属了，谁能力强就让谁上呗")])]),t._v(" "),A("p",[t._v("比较根结点的左子节点和右子节点，也就是下标为2,3的数组元素，将较大的元素填充到根结点(下标为1)的位置。")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%88%A0%E9%99%A4%E5%A0%86%E9%A1%B6%E5%85%83%E7%B4%A02.59fc6629.png",alt:"删除堆顶元素2"}})]),t._v(" "),A("blockquote",[A("p",[t._v("这个时候又空出一个位置了，老规矩，谁有能力谁上")])]),t._v(" "),A("p",[t._v("一直循环比较空出位置的左右子节点，并将较大者移至空位，直到堆的最底部")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%88%A0%E9%99%A4%E5%A0%86%E9%A1%B6%E5%85%83%E7%B4%A03.b5c78c7d.png",alt:"删除堆顶元素3"}})]),t._v(" "),A("p",[t._v("这个时候已经完成了自底向上的堆化，没有元素可以填补空缺了，但是，我们可以看到数组中出现了“气泡”，这会导致存储空间的浪费。接下来我们试试自顶向下堆化。")]),t._v(" "),A("h3",{attrs:{id:"自顶向下堆化"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#自顶向下堆化"}},[t._v("#")]),t._v(" 自顶向下堆化")]),t._v(" "),A("p",[t._v("自顶向下的堆化用一个词形容就是“石沉大海”，那么第一件事情，就是把石头抬起来，从海面扔下去。这个石头就是堆的最后一个元素，我们将最后一个元素移动到堆顶。")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%88%A0%E9%99%A4%E5%A0%86%E9%A1%B6%E5%85%83%E7%B4%A04.90633757.png",alt:"删除堆顶元素4"}})]),t._v(" "),A("p",[t._v("然后开始将这个石头沉入海底，不停与左右子节点的值进行比较，和较大的子节点交换位置，直到无法交换位置。")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%88%A0%E9%99%A4%E5%A0%86%E9%A1%B6%E5%85%83%E7%B4%A05.ca1fc0c4.png",alt:"删除堆顶元素5"}})]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%88%A0%E9%99%A4%E5%A0%86%E9%A1%B6%E5%85%83%E7%B4%A06.9549fe90.png",alt:"删除堆顶元素6"}})]),t._v(" "),A("h3",{attrs:{id:"堆的操作总结"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#堆的操作总结"}},[t._v("#")]),t._v(" 堆的操作总结")]),t._v(" "),A("ul",[A("li",[A("strong",[t._v("插入元素")]),t._v(" ：先将元素放至数组末尾，再自底向上堆化，将末尾元素上浮")]),t._v(" "),A("li",[A("strong",[t._v("删除堆顶元素")]),t._v(" ：删除堆顶元素，将末尾元素放至堆顶，再自顶向下堆化，将堆顶元素下沉。也可以自底向上堆化，只是会产生“气泡”，浪费存储空间。最好采用自顶向下堆化的方式。")])]),t._v(" "),A("h2",{attrs:{id:"堆排序"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#堆排序"}},[t._v("#")]),t._v(" 堆排序")]),t._v(" "),A("p",[t._v("堆排序的过程分为两步：")]),t._v(" "),A("ul",[A("li",[t._v("第一步是建堆，将一个无序的数组建立为一个堆")]),t._v(" "),A("li",[t._v("第二步是排序，将堆顶元素取出，然后对剩下的元素进行堆化，反复迭代，直到所有元素被取出为止。")])]),t._v(" "),A("h3",{attrs:{id:"建堆"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#建堆"}},[t._v("#")]),t._v(" 建堆")]),t._v(" "),A("p",[t._v("如果你已经足够了解堆化的过程，那么建堆的过程掌握起来就比较容易了。建堆的过程就是一个对所有非叶节点的自顶向下堆化过程。")]),t._v(" "),A("p",[t._v("首先要了解哪些是非叶节点，最后一个节点的父结点及它之前的元素，都是非叶节点。也就是说，如果节点个数为n，那么我们需要对n/2到1的节点进行自顶向下（沉底）堆化。")]),t._v(" "),A("p",[t._v("具体过程如下图：")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%BB%BA%E5%A0%861.87738933.png",alt:"建堆1"}})]),t._v(" "),A("p",[t._v("将初始的无序数组抽象为一棵树，图中的节点个数为6，所以4,5,6节点为叶节点，1,2,3节点为非叶节点，所以要对1-3号节点进行自顶向下（沉底）堆化，注意，顺序是从后往前堆化，从3号节点开始，一直到1号节点。 3号节点堆化结果：")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%BB%BA%E5%A0%862.f6cd7436.png",alt:"建堆1"}})]),t._v(" "),A("p",[t._v("2号节点堆化结果：")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%BB%BA%E5%A0%863.476a908d.png",alt:"建堆1"}})]),t._v(" "),A("p",[t._v("1号节点堆化结果：")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%BB%BA%E5%A0%864.c306ac75.png",alt:"建堆1"}})]),t._v(" "),A("p",[t._v("至此，数组所对应的树已经成为了一个最大堆，建堆完成！")]),t._v(" "),A("h3",{attrs:{id:"排序"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[t._v("#")]),t._v(" 排序")]),t._v(" "),A("p",[t._v("由于堆顶元素是所有元素中最大的，所以我们重复取出堆顶元素，将这个最大的堆顶元素放至数组末尾，并对剩下的元素进行堆化即可。")]),t._v(" "),A("p",[t._v("现在思考两个问题：")]),t._v(" "),A("ul",[A("li",[t._v("删除堆顶元素后需要执行自顶向下（沉底）堆化还是自底向上（上浮）堆化？")]),t._v(" "),A("li",[t._v("取出的堆顶元素存在哪，新建一个数组存？")])]),t._v(" "),A("p",[t._v("先回答第一个问题，我们需要执行自顶向下（沉底）堆化，这个堆化一开始要将末尾元素移动至堆顶，这个时候末尾的位置就空出来了，由于堆中元素已经减小，这个位置不会再被使用，所以我们可以将取出的元素放在末尾。")]),t._v(" "),A("p",[t._v("机智的小伙伴已经发现了，这其实是做了一次交换操作，将堆顶和末尾元素调换位置，从而将取出堆顶元素和堆化的第一步(将末尾元素放至根结点位置)进行合并。")]),t._v(" "),A("p",[t._v("详细过程如下图所示：")]),t._v(" "),A("p",[t._v("取出第一个元素并堆化：")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%A0%86%E6%8E%92%E5%BA%8F1.4a22573f.png",alt:"堆排序1"}})]),t._v(" "),A("p",[t._v("取出第二个元素并堆化：")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%A0%86%E6%8E%92%E5%BA%8F2.26994f33.png",alt:"堆排序2"}})]),t._v(" "),A("p",[t._v("取出第三个元素并堆化：")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%A0%86%E6%8E%92%E5%BA%8F3.e411601b.png",alt:"堆排序3"}})]),t._v(" "),A("p",[t._v("取出第四个元素并堆化：")]),t._v(" "),A("p",[A("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AdmireAn/blobImage@main/img/%E5%A0%86%E6%8E%92%E5%BA%8F4.2b2472be.png",alt:"堆排序4"}})]),t._v(" "),A("p",[t._v("取出第五个元素并堆化：")]),t._v(" "),A("p",[A("img",{attrs:{src:"data:image/png;base64,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",alt:"堆排序5"}})]),t._v(" "),A("p",[t._v("取出第六个元素并堆化：")]),t._v(" "),A("p",[A("img",{attrs:{src:"data:image/png;base64,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",alt:"堆排序6"}})]),t._v(" "),A("p",[t._v("堆排序完成！")])])}),[],!1,null,null,null);v.default=r.exports}}]);