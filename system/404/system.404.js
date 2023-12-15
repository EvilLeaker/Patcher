//! ©SEGA
!function(e) {
    var n = {};
    function r(t) {
        if (n[t])
            return n[t].exports;
        var o = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, r),
        o.l = !0,
        o.exports
    }
    r.m = e,
    r.c = n,
    r.d = function(e, n, t) {
        r.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, n) {
        if (1 & n && (e = r(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (r.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var o in e)
                r.d(t, o, function(n) {
                    return e[n]
                }
                .bind(null, o));
        return t
    }
    ,
    r.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(n, "a", n),
        n
    }
    ,
    r.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    r.p = "",
    r(r.s = 1)
}([function(e, n) {
    e.exports = "<chuniMainBg> <chuniPageTitleBar page=404 text=404エラー en=ERROR /> <chuniCommonBox class=errorPage> <div class=errorPage-main> <h2 class=title404>404エラーです</h2><br> ページがありません。<br> お探しのページは別の場所に移動、<br> もしくは削除された可能性があります。<br> <chuniBtn color=green url=/ >TOPページへ戻る</chuniBtn> <el-img storage src=404/icon1.png class=icon1 /> <el-img storage src=404/icon2.png class=icon2 /> </div> </chuniCommonBox> </chuniMainBg>"
}
, function(e, n, r) {
    "use strict";
    r.r(n);
    var t = {
        data: {},
        computed: {},
        methods: {},
        created: function() {}
    };
    t.template = r(0),
    z.page(t)
}
]);
