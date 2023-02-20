(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{672:function(n,s,e){"use strict";e.r(s);var t=e(21),a=Object(t.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"sentinel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sentinel"}},[n._v("#")]),n._v(" sentinel")]),n._v(" "),e("blockquote",[e("p",[n._v("负责redis高可用，检测主服务器下线，然后选举一个从服务器成为新的主服务器。")])]),n._v(" "),e("ol",[e("li",[n._v("源码")])]),n._v(" "),e("div",{staticClass:"language-c++ line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("// Sentinel 会为每个被监视的 Redis 实例创建相应的 sentinelRedisInstance 实例\n// （被监视的实例可以是主服务器、从服务器、或者其他 Sentinel ）\ntypedef struct sentinelRedisInstance {\n    \n    // 标识值，记录了实例的类型，以及该实例的当前状态\n    int flags;      /* See SRI_... defines */\n    \n    // 实例的名字\n    // 主服务器的名字由用户在配置文件中设置\n    // 从服务器以及 Sentinel 的名字由 Sentinel 自动设置\n    // 格式为 ip:port ，例如 \"127.0.0.1:26379\"\n    char *name;     /* Master name from the point of view of this sentinel. */\n\n    // 实例的运行 ID\n    char *runid;    /* run ID of this instance. */\n\n    // 配置纪元，用于实现故障转移\n    uint64_t config_epoch;  /* Configuration epoch. */\n\n    // 实例的地址\n    sentinelAddr *addr; /* Master host. */\n\n    // 用于发送命令的异步连接\n    redisAsyncContext *cc; /* Hiredis context for commands. */\n\n    // 用于执行 SUBSCRIBE 命令、接收频道信息的异步连接\n    // 仅在实例为主服务器时使用\n    redisAsyncContext *pc; /* Hiredis context for Pub / Sub. */\n\n    // 已发送但尚未回复的命令数量\n    int pending_commands;   /* Number of commands sent waiting for a reply. */\n\n    // cc 连接的创建时间\n    mstime_t cc_conn_time; /* cc connection time. */\n    \n    // pc 连接的创建时间\n    mstime_t pc_conn_time; /* pc connection time. */\n\n    // 最后一次从这个实例接收信息的时间\n    mstime_t pc_last_activity; /* Last time we received any message. */\n\n    // 实例最后一次返回正确的 PING 命令回复的时间\n    mstime_t last_avail_time; /* Last time the instance replied to ping with\n                                 a reply we consider valid. */\n    // 实例最后一次发送 PING 命令的时间\n    mstime_t last_ping_time;  /* Last time a pending ping was sent in the\n                                 context of the current command connection\n                                 with the instance. 0 if still not sent or\n                                 if pong already received. */\n    // 实例最后一次返回 PING 命令的时间，无论内容正确与否\n    mstime_t last_pong_time;  /* Last time the instance replied to ping,\n                                 whatever the reply was. That's used to check\n                                 if the link is idle and must be reconnected. */\n\n    // 最后一次向频道发送问候信息的时间\n    // 只在当前实例为 sentinel 时使用\n    mstime_t last_pub_time;   /* Last time we sent hello via Pub/Sub. */\n\n    // 最后一次接收到这个 sentinel 发来的问候信息的时间\n    // 只在当前实例为 sentinel 时使用\n    mstime_t last_hello_time; /* Only used if SRI_SENTINEL is set. Last time\n                                 we received a hello from this Sentinel\n                                 via Pub/Sub. */\n\n    // 最后一次回复 SENTINEL is-master-down-by-addr 命令的时间\n    // 只在当前实例为 sentinel 时使用\n    mstime_t last_master_down_reply_time; /* Time of last reply to\n                                             SENTINEL is-master-down command. */\n\n    // 实例被判断为 SDOWN 状态的时间\n    mstime_t s_down_since_time; /* Subjectively down since time. */\n\n    // 实例被判断为 ODOWN 状态的时间\n    mstime_t o_down_since_time; /* Objectively down since time. */\n\n    // SENTINEL down-after-milliseconds 选项所设定的值\n    // 实例无响应多少毫秒之后才会被判断为主观下线（subjectively down）\n    mstime_t down_after_period; /* Consider it down after that period. */\n\n    // 从实例获取 INFO 命令的回复的时间\n    mstime_t info_refresh;  /* Time at which we received INFO output from it. */\n\n    /* Role and the first time we observed it.\n     * This is useful in order to delay replacing what the instance reports\n     * with our own configuration. We need to always wait some time in order\n     * to give a chance to the leader to report the new configuration before\n     * we do silly things. */\n    // 实例的角色\n    int role_reported;\n    // 角色的更新时间\n    mstime_t role_reported_time;\n\n    // 最后一次从服务器的主服务器地址变更的时间\n    mstime_t slave_conf_change_time; /* Last time slave master addr changed. */\n\n    /* Master specific. */\n    /* 主服务器实例特有的属性 -------------------------------------------------------------*/\n\n    // 其他同样监控这个主服务器的所有 sentinel\n    dict *sentinels;    /* Other sentinels monitoring the same master. */\n\n    // 如果这个实例代表的是一个主服务器\n    // 那么这个字典保存着主服务器属下的从服务器\n    // 字典的键是从服务器的名字，字典的值是从服务器对应的 sentinelRedisInstance 结构\n    dict *slaves;       /* Slaves for this master instance. */\n\n    // SENTINEL monitor <master-name> <IP> <port> <quorum> 选项中的 quorum 参数\n    // 判断这个实例为客观下线（objectively down）所需的支持投票数量\n    int quorum;         /* Number of sentinels that need to agree on failure. */\n\n    // SENTINEL parallel-syncs <master-name> <number> 选项的值\n    // 在执行故障转移操作时，可以同时对新的主服务器进行同步的从服务器数量\n    int parallel_syncs; /* How many slaves to reconfigure at same time. */\n\n    // 连接主服务器和从服务器所需的密码\n    char *auth_pass;    /* Password to use for AUTH against master & slaves. */\n\n    /* Slave specific. */\n    /* 从服务器实例特有的属性 -------------------------------------------------------------*/\n\n    // 主从服务器连接断开的时间\n    mstime_t master_link_down_time; /* Slave replication link down time. */\n\n    // 从服务器优先级\n    int slave_priority; /* Slave priority according to its INFO output. */\n\n    // 执行故障转移操作时，从服务器发送 SLAVEOF <new-master> 命令的时间\n    mstime_t slave_reconf_sent_time; /* Time at which we sent SLAVE OF <new> */\n\n    // 主服务器的实例（在本实例为从服务器时使用）\n    struct sentinelRedisInstance *master; /* Master instance if it's slave. */\n\n    // INFO 命令的回复中记录的主服务器 IP\n    char *slave_master_host;    /* Master host as reported by INFO */\n    \n    // INFO 命令的回复中记录的主服务器端口号\n    int slave_master_port;      /* Master port as reported by INFO */\n\n    // INFO 命令的回复中记录的主从服务器连接状态\n    int slave_master_link_status; /* Master link status as reported by INFO */\n\n    // 从服务器的复制偏移量\n    unsigned long long slave_repl_offset; /* Slave replication offset. */\n\n    /* Failover */\n    /* 故障转移相关属性 -------------------------------------------------------------------*/\n\n\n    // 如果这是一个主服务器实例，那么 leader 将是负责进行故障转移的 Sentinel 的运行 ID 。\n    // 如果这是一个 Sentinel 实例，那么 leader 就是被选举出来的领头 Sentinel 。\n    // 这个域只在 Sentinel 实例的 flags 属性的 SRI_MASTER_DOWN 标志处于打开状态时才有效。\n    char *leader;       /* If this is a master instance, this is the runid of\n                           the Sentinel that should perform the failover. If\n                           this is a Sentinel, this is the runid of the Sentinel\n                           that this Sentinel voted as leader. */\n    // 领头的纪元\n    uint64_t leader_epoch; /* Epoch of the 'leader' field. */\n    // 当前执行中的故障转移的纪元\n    uint64_t failover_epoch; /* Epoch of the currently started failover. */\n    // 故障转移操作的当前状态\n    int failover_state; /* See SENTINEL_FAILOVER_STATE_* defines. */\n\n    // 状态改变的时间\n    mstime_t failover_state_change_time;\n\n    // 最后一次进行故障迁移的时间\n    mstime_t failover_start_time;   /* Last failover attempt start time. */\n\n    // SENTINEL failover-timeout <master-name> <ms> 选项的值\n    // 刷新故障迁移状态的最大时限\n    mstime_t failover_timeout;      /* Max time to refresh failover state. */\n\n    mstime_t failover_delay_logged; /* For what failover_start_time value we\n                                       logged the failover delay. */\n    // 指向被提升为新主服务器的从服务器的指针\n    struct sentinelRedisInstance *promoted_slave; /* Promoted slave instance. */\n\n    /* Scripts executed to notify admin or reconfigure clients: when they\n     * are set to NULL no script is executed. */\n    // 一个文件路径，保存着 WARNING 级别的事件发生时执行的，\n    // 用于通知管理员的脚本的地址\n    char *notification_script;\n\n    // 一个文件路径，保存着故障转移执行之前、之后、或者被中止时，\n    // 需要执行的脚本的地址\n    char *client_reconfig_script;\n\n} sentinelRedisInstance;\n\n/* Main state. */\n/* Sentinel 的状态结构 */\nstruct sentinelState {\n\n    // 当前纪元\n    uint64_t current_epoch;     /* Current epoch. */\n\n    // 保存了所有被这个 sentinel 监视的主服务器\n    // 字典的键是主服务器的名字\n    // 字典的值则是一个指向 sentinelRedisInstance 结构的指针\n    dict *masters;      /* Dictionary of master sentinelRedisInstances.\n                           Key is the instance name, value is the\n                           sentinelRedisInstance structure pointer. */\n\n    // 是否进入了 TILT 模式？\n    int tilt;           /* Are we in TILT mode? */\n\n    // 目前正在执行的脚本的数量\n    int running_scripts;    /* Number of scripts in execution right now. */\n\n    // 进入 TILT 模式的时间\n    mstime_t tilt_start_time;   /* When TITL started. */\n\n    // 最后一次执行时间处理器的时间\n    mstime_t previous_time;     /* Last time we ran the time handler. */\n\n    // 一个 FIFO 队列，包含了所有需要执行的用户脚本\n    list *scripts_queue;    /* Queue of user scripts to execute. */\n\n} sentinel;\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br"),e("span",{staticClass:"line-number"},[n._v("42")]),e("br"),e("span",{staticClass:"line-number"},[n._v("43")]),e("br"),e("span",{staticClass:"line-number"},[n._v("44")]),e("br"),e("span",{staticClass:"line-number"},[n._v("45")]),e("br"),e("span",{staticClass:"line-number"},[n._v("46")]),e("br"),e("span",{staticClass:"line-number"},[n._v("47")]),e("br"),e("span",{staticClass:"line-number"},[n._v("48")]),e("br"),e("span",{staticClass:"line-number"},[n._v("49")]),e("br"),e("span",{staticClass:"line-number"},[n._v("50")]),e("br"),e("span",{staticClass:"line-number"},[n._v("51")]),e("br"),e("span",{staticClass:"line-number"},[n._v("52")]),e("br"),e("span",{staticClass:"line-number"},[n._v("53")]),e("br"),e("span",{staticClass:"line-number"},[n._v("54")]),e("br"),e("span",{staticClass:"line-number"},[n._v("55")]),e("br"),e("span",{staticClass:"line-number"},[n._v("56")]),e("br"),e("span",{staticClass:"line-number"},[n._v("57")]),e("br"),e("span",{staticClass:"line-number"},[n._v("58")]),e("br"),e("span",{staticClass:"line-number"},[n._v("59")]),e("br"),e("span",{staticClass:"line-number"},[n._v("60")]),e("br"),e("span",{staticClass:"line-number"},[n._v("61")]),e("br"),e("span",{staticClass:"line-number"},[n._v("62")]),e("br"),e("span",{staticClass:"line-number"},[n._v("63")]),e("br"),e("span",{staticClass:"line-number"},[n._v("64")]),e("br"),e("span",{staticClass:"line-number"},[n._v("65")]),e("br"),e("span",{staticClass:"line-number"},[n._v("66")]),e("br"),e("span",{staticClass:"line-number"},[n._v("67")]),e("br"),e("span",{staticClass:"line-number"},[n._v("68")]),e("br"),e("span",{staticClass:"line-number"},[n._v("69")]),e("br"),e("span",{staticClass:"line-number"},[n._v("70")]),e("br"),e("span",{staticClass:"line-number"},[n._v("71")]),e("br"),e("span",{staticClass:"line-number"},[n._v("72")]),e("br"),e("span",{staticClass:"line-number"},[n._v("73")]),e("br"),e("span",{staticClass:"line-number"},[n._v("74")]),e("br"),e("span",{staticClass:"line-number"},[n._v("75")]),e("br"),e("span",{staticClass:"line-number"},[n._v("76")]),e("br"),e("span",{staticClass:"line-number"},[n._v("77")]),e("br"),e("span",{staticClass:"line-number"},[n._v("78")]),e("br"),e("span",{staticClass:"line-number"},[n._v("79")]),e("br"),e("span",{staticClass:"line-number"},[n._v("80")]),e("br"),e("span",{staticClass:"line-number"},[n._v("81")]),e("br"),e("span",{staticClass:"line-number"},[n._v("82")]),e("br"),e("span",{staticClass:"line-number"},[n._v("83")]),e("br"),e("span",{staticClass:"line-number"},[n._v("84")]),e("br"),e("span",{staticClass:"line-number"},[n._v("85")]),e("br"),e("span",{staticClass:"line-number"},[n._v("86")]),e("br"),e("span",{staticClass:"line-number"},[n._v("87")]),e("br"),e("span",{staticClass:"line-number"},[n._v("88")]),e("br"),e("span",{staticClass:"line-number"},[n._v("89")]),e("br"),e("span",{staticClass:"line-number"},[n._v("90")]),e("br"),e("span",{staticClass:"line-number"},[n._v("91")]),e("br"),e("span",{staticClass:"line-number"},[n._v("92")]),e("br"),e("span",{staticClass:"line-number"},[n._v("93")]),e("br"),e("span",{staticClass:"line-number"},[n._v("94")]),e("br"),e("span",{staticClass:"line-number"},[n._v("95")]),e("br"),e("span",{staticClass:"line-number"},[n._v("96")]),e("br"),e("span",{staticClass:"line-number"},[n._v("97")]),e("br"),e("span",{staticClass:"line-number"},[n._v("98")]),e("br"),e("span",{staticClass:"line-number"},[n._v("99")]),e("br"),e("span",{staticClass:"line-number"},[n._v("100")]),e("br"),e("span",{staticClass:"line-number"},[n._v("101")]),e("br"),e("span",{staticClass:"line-number"},[n._v("102")]),e("br"),e("span",{staticClass:"line-number"},[n._v("103")]),e("br"),e("span",{staticClass:"line-number"},[n._v("104")]),e("br"),e("span",{staticClass:"line-number"},[n._v("105")]),e("br"),e("span",{staticClass:"line-number"},[n._v("106")]),e("br"),e("span",{staticClass:"line-number"},[n._v("107")]),e("br"),e("span",{staticClass:"line-number"},[n._v("108")]),e("br"),e("span",{staticClass:"line-number"},[n._v("109")]),e("br"),e("span",{staticClass:"line-number"},[n._v("110")]),e("br"),e("span",{staticClass:"line-number"},[n._v("111")]),e("br"),e("span",{staticClass:"line-number"},[n._v("112")]),e("br"),e("span",{staticClass:"line-number"},[n._v("113")]),e("br"),e("span",{staticClass:"line-number"},[n._v("114")]),e("br"),e("span",{staticClass:"line-number"},[n._v("115")]),e("br"),e("span",{staticClass:"line-number"},[n._v("116")]),e("br"),e("span",{staticClass:"line-number"},[n._v("117")]),e("br"),e("span",{staticClass:"line-number"},[n._v("118")]),e("br"),e("span",{staticClass:"line-number"},[n._v("119")]),e("br"),e("span",{staticClass:"line-number"},[n._v("120")]),e("br"),e("span",{staticClass:"line-number"},[n._v("121")]),e("br"),e("span",{staticClass:"line-number"},[n._v("122")]),e("br"),e("span",{staticClass:"line-number"},[n._v("123")]),e("br"),e("span",{staticClass:"line-number"},[n._v("124")]),e("br"),e("span",{staticClass:"line-number"},[n._v("125")]),e("br"),e("span",{staticClass:"line-number"},[n._v("126")]),e("br"),e("span",{staticClass:"line-number"},[n._v("127")]),e("br"),e("span",{staticClass:"line-number"},[n._v("128")]),e("br"),e("span",{staticClass:"line-number"},[n._v("129")]),e("br"),e("span",{staticClass:"line-number"},[n._v("130")]),e("br"),e("span",{staticClass:"line-number"},[n._v("131")]),e("br"),e("span",{staticClass:"line-number"},[n._v("132")]),e("br"),e("span",{staticClass:"line-number"},[n._v("133")]),e("br"),e("span",{staticClass:"line-number"},[n._v("134")]),e("br"),e("span",{staticClass:"line-number"},[n._v("135")]),e("br"),e("span",{staticClass:"line-number"},[n._v("136")]),e("br"),e("span",{staticClass:"line-number"},[n._v("137")]),e("br"),e("span",{staticClass:"line-number"},[n._v("138")]),e("br"),e("span",{staticClass:"line-number"},[n._v("139")]),e("br"),e("span",{staticClass:"line-number"},[n._v("140")]),e("br"),e("span",{staticClass:"line-number"},[n._v("141")]),e("br"),e("span",{staticClass:"line-number"},[n._v("142")]),e("br"),e("span",{staticClass:"line-number"},[n._v("143")]),e("br"),e("span",{staticClass:"line-number"},[n._v("144")]),e("br"),e("span",{staticClass:"line-number"},[n._v("145")]),e("br"),e("span",{staticClass:"line-number"},[n._v("146")]),e("br"),e("span",{staticClass:"line-number"},[n._v("147")]),e("br"),e("span",{staticClass:"line-number"},[n._v("148")]),e("br"),e("span",{staticClass:"line-number"},[n._v("149")]),e("br"),e("span",{staticClass:"line-number"},[n._v("150")]),e("br"),e("span",{staticClass:"line-number"},[n._v("151")]),e("br"),e("span",{staticClass:"line-number"},[n._v("152")]),e("br"),e("span",{staticClass:"line-number"},[n._v("153")]),e("br"),e("span",{staticClass:"line-number"},[n._v("154")]),e("br"),e("span",{staticClass:"line-number"},[n._v("155")]),e("br"),e("span",{staticClass:"line-number"},[n._v("156")]),e("br"),e("span",{staticClass:"line-number"},[n._v("157")]),e("br"),e("span",{staticClass:"line-number"},[n._v("158")]),e("br"),e("span",{staticClass:"line-number"},[n._v("159")]),e("br"),e("span",{staticClass:"line-number"},[n._v("160")]),e("br"),e("span",{staticClass:"line-number"},[n._v("161")]),e("br"),e("span",{staticClass:"line-number"},[n._v("162")]),e("br"),e("span",{staticClass:"line-number"},[n._v("163")]),e("br"),e("span",{staticClass:"line-number"},[n._v("164")]),e("br"),e("span",{staticClass:"line-number"},[n._v("165")]),e("br"),e("span",{staticClass:"line-number"},[n._v("166")]),e("br"),e("span",{staticClass:"line-number"},[n._v("167")]),e("br"),e("span",{staticClass:"line-number"},[n._v("168")]),e("br"),e("span",{staticClass:"line-number"},[n._v("169")]),e("br"),e("span",{staticClass:"line-number"},[n._v("170")]),e("br"),e("span",{staticClass:"line-number"},[n._v("171")]),e("br"),e("span",{staticClass:"line-number"},[n._v("172")]),e("br"),e("span",{staticClass:"line-number"},[n._v("173")]),e("br"),e("span",{staticClass:"line-number"},[n._v("174")]),e("br"),e("span",{staticClass:"line-number"},[n._v("175")]),e("br"),e("span",{staticClass:"line-number"},[n._v("176")]),e("br"),e("span",{staticClass:"line-number"},[n._v("177")]),e("br"),e("span",{staticClass:"line-number"},[n._v("178")]),e("br"),e("span",{staticClass:"line-number"},[n._v("179")]),e("br"),e("span",{staticClass:"line-number"},[n._v("180")]),e("br"),e("span",{staticClass:"line-number"},[n._v("181")]),e("br"),e("span",{staticClass:"line-number"},[n._v("182")]),e("br"),e("span",{staticClass:"line-number"},[n._v("183")]),e("br"),e("span",{staticClass:"line-number"},[n._v("184")]),e("br"),e("span",{staticClass:"line-number"},[n._v("185")]),e("br"),e("span",{staticClass:"line-number"},[n._v("186")]),e("br"),e("span",{staticClass:"line-number"},[n._v("187")]),e("br"),e("span",{staticClass:"line-number"},[n._v("188")]),e("br"),e("span",{staticClass:"line-number"},[n._v("189")]),e("br"),e("span",{staticClass:"line-number"},[n._v("190")]),e("br"),e("span",{staticClass:"line-number"},[n._v("191")]),e("br"),e("span",{staticClass:"line-number"},[n._v("192")]),e("br"),e("span",{staticClass:"line-number"},[n._v("193")]),e("br"),e("span",{staticClass:"line-number"},[n._v("194")]),e("br"),e("span",{staticClass:"line-number"},[n._v("195")]),e("br"),e("span",{staticClass:"line-number"},[n._v("196")]),e("br"),e("span",{staticClass:"line-number"},[n._v("197")]),e("br"),e("span",{staticClass:"line-number"},[n._v("198")]),e("br"),e("span",{staticClass:"line-number"},[n._v("199")]),e("br"),e("span",{staticClass:"line-number"},[n._v("200")]),e("br"),e("span",{staticClass:"line-number"},[n._v("201")]),e("br"),e("span",{staticClass:"line-number"},[n._v("202")]),e("br"),e("span",{staticClass:"line-number"},[n._v("203")]),e("br"),e("span",{staticClass:"line-number"},[n._v("204")]),e("br"),e("span",{staticClass:"line-number"},[n._v("205")]),e("br"),e("span",{staticClass:"line-number"},[n._v("206")]),e("br"),e("span",{staticClass:"line-number"},[n._v("207")]),e("br"),e("span",{staticClass:"line-number"},[n._v("208")]),e("br"),e("span",{staticClass:"line-number"},[n._v("209")]),e("br"),e("span",{staticClass:"line-number"},[n._v("210")]),e("br"),e("span",{staticClass:"line-number"},[n._v("211")]),e("br"),e("span",{staticClass:"line-number"},[n._v("212")]),e("br"),e("span",{staticClass:"line-number"},[n._v("213")]),e("br"),e("span",{staticClass:"line-number"},[n._v("214")]),e("br"),e("span",{staticClass:"line-number"},[n._v("215")]),e("br"),e("span",{staticClass:"line-number"},[n._v("216")]),e("br"),e("span",{staticClass:"line-number"},[n._v("217")]),e("br"),e("span",{staticClass:"line-number"},[n._v("218")]),e("br"),e("span",{staticClass:"line-number"},[n._v("219")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("启动并初始化sentinel")])]),n._v(" "),e("ul",[e("li",[n._v("启动命令：Redis-sentinel /path/sentinel.conf")]),n._v(" "),e("li",[n._v("初始化服务器")]),n._v(" "),e("li",[n._v("使用sentinel专用代码")]),n._v(" "),e("li",[n._v("初始化sentinel状态。sentinelState{}")]),n._v(" "),e("li",[n._v("初始化masters属性。根据配置文件来生成。\n[外链图片转存中...(img-gEx8X9Le-1653145947298)]")]),n._v(" "),e("li",[n._v("创建两个链接主服务器的异步网络：一个命令链接；一个订阅链接。")]),n._v(" "),e("li",[n._v("获取服务器信息。10s/次向主服务器发送info命令。获取主从信息。更新主从信息。从信息的保存结构如下：\n[外链图片转存中...(img-aBn6piJg-1653145947298)]")]),n._v(" "),e("li",[n._v("获取从服务器信息。获取从服务器信息。sentinel发现主服务器有从服务器时，保存从服务器并创建两个异步链接：命令链接和订阅链接。10s/次向从服务器发送命令获取信息更新本地存储。")]),n._v(" "),e("li",[n._v("向主从发送信息。2s/次通过命令连接发送信息。发送频道_sentinel_:hello")]),n._v(" "),e("li",[n._v("接收信息。接收频道 "),e("em",[n._v("sentinel")]),n._v(":hello（用于发现新的sentinel）")]),n._v(" "),e("li",[n._v("更新sentinel字典。sentinelResidInstance结构中的sentinels保存这个主服务器的所有sentinel。接收到_sentinel_:hello频道的消息时，更新sentinel.")]),n._v(" "),e("li",[n._v("创建sentinel之间的连接。(不创建订阅链接)")])]),n._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[n._v("检测主观下线状态")])]),n._v(" "),e("blockquote",[e("p",[n._v("sentinel每秒向它连接的实例发送ping命令。返回+pong、-loading、-masterdown是有效回复。其他回复或者指定时间没回复则认为无效。配置项down-after-milliseconds指定了sentinel判断主观下线时间长度。如果一个实例在down-after-milliseconds时间内连续向sentinel返回无效，则认为主观下线。")])]),n._v(" "),e("ul",[e("li",[n._v("sentinelRedisInstance中的master属性有主观下线标识。")]),n._v(" "),e("li",[n._v("down-after-milliseconds是master下线的标准，也是master下slaves下线的标准，也是其他sentinel判断master下线的标准。")]),n._v(" "),e("li",[n._v("多个sentinel设置同一个msater的down-after-milliseconds可能不同")])]),n._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[n._v("客观下线")])]),n._v(" "),e("blockquote",[e("p",[n._v("sentinel判断一个master已经主观下线，会询问其他sentinel，如果一定数量 的都认为这个master已经主观下线，则判定这个master客观下线。然后做故障转移。")])]),n._v(" "),e("ul",[e("li",[n._v("发送sentinel is-master-down-by-addr命令询问其他sentinel")]),n._v(" "),e("li",[n._v("sentinel配置中的quorum参数决定有几个sentinel判断下线才能算是下线")]),n._v(" "),e("li",[n._v("当一个msater被判定为客观下线时，监视这个master的各个sentinel之间会选举一个为领头sentinel，做故障转移。")]),n._v(" "),e("li",[n._v("故障转移：选一个先master、slaves同步新的master、旧的master成为新master的slave")])]),n._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[n._v("选举领头sentinel")])]),n._v(" "),e("blockquote",[e("p",[n._v("当一个主服务器下线后，在监管这个主服务器的sentinel中选举一个领头sentinel。用于故障转移")])]),n._v(" "),e("p",[n._v("[外链图片转存中...(img-5XFvVtzH-1653145947298)]\n6. 故障转移\n领头sentinel完成故障转移需要三个步骤：")]),n._v(" "),e("ul",[e("li",[n._v("在从服务器中选一个成为新的主服务器。sentinel在从服务器中选举一个，向其发送命令slaveof no one,使之成为主服务器。发送slaveof no one明后后每秒发送info命令观察role是不是变成了master。")]),n._v(" "),e("li",[n._v("让从服务器同步新的主服务器.\n[外链图片转存中...(img-jz4GYou9-1653145947299)]")]),n._v(" "),e("li",[n._v("让旧的主服务器成为新的主服务器的从服务器，当其上线时，成为从服务器。")])])])}),[],!1,null,null,null);s.default=a.exports}}]);