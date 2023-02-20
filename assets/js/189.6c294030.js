(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{692:function(e,r,c){"use strict";c.r(r);var n=c(21),a=Object(n.a)({},(function(){var e=this,r=e.$createElement,c=e._self._c||r;return c("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[c("p",[e._v("TCC/Try Confirm Cancel模式TCC模式只有在所有的服务的第一阶段（try）都成功的时候才进行第二阶段确认（Confirm）操作，否则进行补偿(Cancel)操作，而在try阶段是不会进行真正的业务处理的。\n"),c("br")]),e._v(" "),c("p",[e._v("TCC模式TCC模式的具体流程为两个阶段：Try，业务服务完成所有的业务检查，预留必需的业务资源如果Try在所有服务中都成功，那么执行Confirm操作，Confirm操作不做任何的业务检查（因为try中已经做过），只是用Try阶段预留的业务资源进行业务处理；否则进行Cancel操作，Cancel操作释放Try阶段预留的业务资源。\n"),c("br")]),e._v(" "),c("p",[c("img",{attrs:{src:"https://tva1.sinaimg.cn/large/e6c9d24egy1h2f83z6zd5j218g0u0gow.jpg",alt:""}}),e._v("\n这么说可能比较模糊，下面我举一个具体的例子，小明在线从招商银行转账100元到广发银行。\n"),c("br")]),e._v(" "),c("p",[e._v("这个操作可看作两个服务，服务a从小明的招行账户转出100元，服务b从小明的广发银行帐户汇入100元。\n"),c("br")]),e._v(" "),c("p",[e._v("服务a（小明从招行转出100元）:try: update cmb_account set balance=balance-100, freeze=freeze+100 where"),c("br"),e._v("\nacc_id=1 and balance>100;")]),e._v(" "),c("p",[e._v("confirm: update cmb_account set freeze=freeze-100 where acc_id=1;")]),e._v(" "),c("p",[e._v("cancel: update cmb_account set balance=balance+100, freeze=freeze-100 where"),c("br"),e._v("\nacc_id=1;\n"),c("br")]),e._v(" "),c("p",[e._v("服务b（小明往广发银行汇入100元）:try: update cgb_account set freeze=freeze+100 where acc_id=1;")]),e._v(" "),c("p",[e._v("confirm: update cgb_account set balance=balance+100, freeze=freeze-100 where  acc_id=1;")]),e._v(" "),c("p",[e._v("cancel: update cgb_account set freeze=freeze-100 where acc_id=1;")]),e._v(" "),c("br"),e._v("\n具体说明：a的try阶段，服务做了两件事，1：业务检查，这里是检查小明的帐户里的钱是否多余100元；2:预留资源，将100元从余额中划入冻结资金。\n"),c("br"),e._v("\na的confirm阶段，这里不再进行业务检查，因为try阶段已经做过了，同时由于转账已经成功，将冻结资金扣除。a的cancel阶段，释放预留资源，既100元冻结资金，并恢复到余额。\n"),c("br"),e._v(" "),c("p",[e._v("b的try阶段进行，预留资源，将100元冻结。b的confirm阶段，使用try阶段预留的资源，将100元冻结资金划入余额。\n"),c("br"),e._v("\nb的cancel阶段，释放try阶段的预留资源，将100元从冻结资金中减去。从上面的简单例子可以看出，TCC模式比纯业务补偿模式更加复杂，所以在实现上每个服务都需要实现Cofirm和Cancel两个接口。")])])}),[],!1,null,null,null);r.default=a.exports}}]);