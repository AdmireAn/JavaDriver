(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{525:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简述-java-中-final-关键字的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述-java-中-final-关键字的作用"}},[s._v("#")]),s._v(" 简述 Java 中 final 关键字的作用 "),a("br")]),s._v(" "),a("p",[s._v("final 关键字主要用在三个地方：变量、方法、类。"),a("br")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("修饰对象")]),s._v(" "),a("th",[s._v("限制")]),s._v(" "),a("th",[s._v("使用场景")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("类")]),s._v(" "),a("td",[s._v("被final修饰的类，是不可以被继承的，这样做的目的可以保证该类不被修改")]),s._v(" "),a("td",[s._v("Java的一些核心的API都是final类，例如String、Integer、Math等")])]),s._v(" "),a("tr",[a("td",[s._v("方法")]),s._v(" "),a("td",[s._v("子类不可以重写父类中被final修饰的方法")]),s._v(" "),a("td",[s._v("比如 模板方法，可以用来固定算法")])]),s._v(" "),a("tr",[a("td",[s._v("成员变量")]),s._v(" "),a("td",[s._v("被修饰的成员变量必须在定义时或者构造器中进行初始化赋值，且不可再修改")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("局部变量")]),s._v(" "),a("td",[s._v("final修饰局部变量时只能初始化(赋值)一次，但也可以不初始化")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("方法参数")]),s._v(" "),a("td",[s._v("final修饰方法参数时，是在调用方法传递参数时候初始化的")]),s._v(" "),a("td")])])]),s._v(" "),a("blockquote",[a("p",[s._v("final修饰变量要说明几点："),a("br"),s._v("\n1.修饰基本类型数据，final会将值变为一个常数（创建后不能被修改）；"),a("br"),s._v("\n2.修饰的是引用类型，引用的指向 是不可变，但对象里面的属性可以改变 。这一限制也适用于数组，数组也属于对象，数组本身也是可以修改的。"),a("br"),s._v("\n3.方法参数中的final句柄，意味着在该方法内部，我们不能改变参数句柄指向的实际东西，也就是说在方法内部不能给形参句柄再另外赋值。"),a("br")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//这段代码可以正常编译运行 因为final修饰的是引用类型，引用的指向 是不可变，但对象里面的属性可以改变")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" myClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("myClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);