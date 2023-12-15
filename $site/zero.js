//! ©SEGA
!function(t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                n.d(r, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return r
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 41)
}([function(t, e, n) {
    "use strict";
    var r = n(18)();
    t.exports = function(t) {
        return t !== r && null !== t
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return null != t
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e),
    e.default = {
        site_name: "CHUNITHM LUMINOUS",
        title: "CHUNITHM LUMINOUS",
        title_sep: "｜",
        description: "CHUNITHM LUMINOUS",
        site_url: "https://chunithm.evilleaker.com/",
        dist_path: "",
        keywords: [],
        base64_image_kb: 5,
        viewport: {
            width: 400
        },
        indexing: !0,
        theme_color: "#fff",
        manifest: !1,
        stylesheets: ["https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;900&display=swap"],
        scripts: [],
        links: [],
        google_tag_manager_id: "GTM-5PWDSV",
        google_site_verification: null,
        og: {
            image: "../$site/images/ogimage.jpg",
            locale: "ja_JP",
            url: "https://chunithm.sega.jp/",
            title: "CHUNITHM LUMINOUS",
            description: "CHUNITHM LUMINOUS",
            site_name: "CHUNITHM LUMINOUS"
        },
        ogimage: null,
        twitter: {
            card: "summary_large_image",
            screen_name: "#",
            url: "https://chunithm.sega.jp/",
            title: "CHUNITHM LUMINOUS",
            site_name: "CHUNITHM LUMINOUS",
            creator: "#"
        },
        icon: {
            default: "../$site/images/icon.png",
            apple_touch_icon: "../$site/images/touchicon.jpg",
            icon: "../$site/images/icon.png"
        }
    }
}
, function(t, e, n) {
    var r = function(t) {
        "use strict";
        var e = Object.prototype
          , n = e.hasOwnProperty
          , r = "function" == typeof Symbol ? Symbol : {}
          , o = r.iterator || "@@iterator"
          , i = r.asyncIterator || "@@asyncIterator"
          , a = r.toStringTag || "@@toStringTag";
        function c(t, e, n, r) {
            var o = e && e.prototype instanceof l ? e : l
              , i = Object.create(o.prototype)
              , a = new S(r || []);
            return i._invoke = function(t, e, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r)
                        throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o)
                            throw i;
                        return j()
                    }
                    for (n.method = o,
                    n.arg = i; ; ) {
                        var a = n.delegate;
                        if (a) {
                            var c = b(a, n);
                            if (c) {
                                if (c === s)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r)
                                throw r = "completed",
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var l = u(t, e, n);
                        if ("normal" === l.type) {
                            if (r = n.done ? "completed" : "suspendedYield",
                            l.arg === s)
                                continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (r = "completed",
                        n.method = "throw",
                        n.arg = l.arg)
                    }
                }
            }(t, n, a),
            i
        }
        function u(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = c;
        var s = {};
        function l() {}
        function f() {}
        function p() {}
        var h = {};
        h[o] = function() {
            return this
        }
        ;
        var m = Object.getPrototypeOf
          , d = m && m(m(x([])));
        d && d !== e && n.call(d, o) && (h = d);
        var y = p.prototype = l.prototype = Object.create(h);
        function v(t) {
            ["next", "throw", "return"].forEach((function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            }
            ))
        }
        function g(t) {
            var e;
            this._invoke = function(r, o) {
                function i() {
                    return new Promise((function(e, i) {
                        !function e(r, o, i, a) {
                            var c = u(t[r], t, o);
                            if ("throw" !== c.type) {
                                var s = c.arg
                                  , l = s.value;
                                return l && "object" == typeof l && n.call(l, "__await") ? Promise.resolve(l.__await).then((function(t) {
                                    e("next", t, i, a)
                                }
                                ), (function(t) {
                                    e("throw", t, i, a)
                                }
                                )) : Promise.resolve(l).then((function(t) {
                                    s.value = t,
                                    i(s)
                                }
                                ), (function(t) {
                                    return e("throw", t, i, a)
                                }
                                ))
                            }
                            a(c.arg)
                        }(r, o, e, i)
                    }
                    ))
                }
                return e = e ? e.then(i, i) : i()
            }
        }
        function b(t, e) {
            var n = t.iterator[e.method];
            if (void 0 === n) {
                if (e.delegate = null,
                "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return",
                    e.arg = void 0,
                    b(t, e),
                    "throw" === e.method))
                        return s;
                    e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return s
            }
            var r = u(n, t.iterator, e.arg);
            if ("throw" === r.type)
                return e.method = "throw",
                e.arg = r.arg,
                e.delegate = null,
                s;
            var o = r.arg;
            return o ? o.done ? (e[t.resultName] = o.value,
            e.next = t.nextLoc,
            "return" !== e.method && (e.method = "next",
            e.arg = void 0),
            e.delegate = null,
            s) : o : (e.method = "throw",
            e.arg = new TypeError("iterator result is not an object"),
            e.delegate = null,
            s)
        }
        function w(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]),
            2 in t && (e.finallyLoc = t[2],
            e.afterLoc = t[3]),
            this.tryEntries.push(e)
        }
        function _(t) {
            var e = t.completion || {};
            e.type = "normal",
            delete e.arg,
            t.completion = e
        }
        function S(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(w, this),
            this.reset(!0)
        }
        function x(t) {
            if (t) {
                var e = t[o];
                if (e)
                    return e.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var r = -1
                      , i = function e() {
                        for (; ++r < t.length; )
                            if (n.call(t, r))
                                return e.value = t[r],
                                e.done = !1,
                                e;
                        return e.value = void 0,
                        e.done = !0,
                        e
                    };
                    return i.next = i
                }
            }
            return {
                next: j
            }
        }
        function j() {
            return {
                value: void 0,
                done: !0
            }
        }
        return f.prototype = y.constructor = p,
        p.constructor = f,
        p[a] = f.displayName = "GeneratorFunction",
        t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
        }
        ,
        t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
            a in t || (t[a] = "GeneratorFunction")),
            t.prototype = Object.create(y),
            t
        }
        ,
        t.awrap = function(t) {
            return {
                __await: t
            }
        }
        ,
        v(g.prototype),
        g.prototype[i] = function() {
            return this
        }
        ,
        t.AsyncIterator = g,
        t.async = function(e, n, r, o) {
            var i = new g(c(e, n, r, o));
            return t.isGeneratorFunction(n) ? i : i.next().then((function(t) {
                return t.done ? t.value : i.next()
            }
            ))
        }
        ,
        v(y),
        y[a] = "Generator",
        y[o] = function() {
            return this
        }
        ,
        y.toString = function() {
            return "[object Generator]"
        }
        ,
        t.keys = function(t) {
            var e = [];
            for (var n in t)
                e.push(n);
            return e.reverse(),
            function n() {
                for (; e.length; ) {
                    var r = e.pop();
                    if (r in t)
                        return n.value = r,
                        n.done = !1,
                        n
                }
                return n.done = !0,
                n
            }
        }
        ,
        t.values = x,
        S.prototype = {
            constructor: S,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(_),
                !t)
                    for (var e in this)
                        "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type)
                    throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done)
                    throw t;
                var e = this;
                function r(n, r) {
                    return a.type = "throw",
                    a.arg = t,
                    e.next = n,
                    r && (e.method = "next",
                    e.arg = void 0),
                    !!r
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o]
                      , a = i.completion;
                    if ("root" === i.tryLoc)
                        return r("end");
                    if (i.tryLoc <= this.prev) {
                        var c = n.call(i, "catchLoc")
                          , u = n.call(i, "finallyLoc");
                        if (c && u) {
                            if (this.prev < i.catchLoc)
                                return r(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc)
                                return r(i.finallyLoc)
                        } else if (c) {
                            if (this.prev < i.catchLoc)
                                return r(i.catchLoc, !0)
                        } else {
                            if (!u)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc)
                                return r(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t,
                a.arg = e,
                i ? (this.method = "next",
                this.next = i.finallyLoc,
                s) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type)
                    throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                this.method = "return",
                this.next = "end") : "normal" === t.type && e && (this.next = e),
                s
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t)
                        return this.complete(n.completion, n.afterLoc),
                        _(n),
                        s
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            _(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, n) {
                return this.delegate = {
                    iterator: x(t),
                    resultName: e,
                    nextLoc: n
                },
                "next" === this.method && (this.arg = void 0),
                s
            }
        },
        t
    }(t.exports);
    try {
        regeneratorRuntime = r
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = n(5)() ? Symbol : n(6)
}
, function(t, e, n) {
    "use strict";
    var r = {
        object: !0,
        symbol: !0
    };
    t.exports = function() {
        var t;
        if ("function" != typeof Symbol)
            return !1;
        t = Symbol("test symbol");
        try {
            String(t)
        } catch (t) {
            return !1
        }
        return !!r[typeof Symbol.iterator] && (!!r[typeof Symbol.toPrimitive] && !!r[typeof Symbol.toStringTag])
    }
}
, function(t, e, n) {
    "use strict";
    var r, o, i, a, c = n(7), u = n(24), s = Object.create, l = Object.defineProperties, f = Object.defineProperty, p = Object.prototype, h = s(null);
    if ("function" == typeof Symbol) {
        r = Symbol;
        try {
            String(r()),
            a = !0
        } catch (t) {}
    }
    var m, d = (m = s(null),
    function(t) {
        for (var e, n, r = 0; m[t + (r || "")]; )
            ++r;
        return m[t += r || ""] = !0,
        f(p, e = "@@" + t, c.gs(null, (function(t) {
            n || (n = !0,
            f(this, e, c(t)),
            n = !1)
        }
        ))),
        e
    }
    );
    i = function(t) {
        if (this instanceof i)
            throw new TypeError("Symbol is not a constructor");
        return o(t)
    }
    ,
    t.exports = o = function t(e) {
        var n;
        if (this instanceof t)
            throw new TypeError("Symbol is not a constructor");
        return a ? r(e) : (n = s(i.prototype),
        e = void 0 === e ? "" : String(e),
        l(n, {
            __description__: c("", e),
            __name__: c("", d(e))
        }))
    }
    ,
    l(o, {
        for: c((function(t) {
            return h[t] ? h[t] : h[t] = o(String(t))
        }
        )),
        keyFor: c((function(t) {
            var e;
            for (e in u(t),
            h)
                if (h[e] === t)
                    return e
        }
        )),
        hasInstance: c("", r && r.hasInstance || o("hasInstance")),
        isConcatSpreadable: c("", r && r.isConcatSpreadable || o("isConcatSpreadable")),
        iterator: c("", r && r.iterator || o("iterator")),
        match: c("", r && r.match || o("match")),
        replace: c("", r && r.replace || o("replace")),
        search: c("", r && r.search || o("search")),
        species: c("", r && r.species || o("species")),
        split: c("", r && r.split || o("split")),
        toPrimitive: c("", r && r.toPrimitive || o("toPrimitive")),
        toStringTag: c("", r && r.toStringTag || o("toStringTag")),
        unscopables: c("", r && r.unscopables || o("unscopables"))
    }),
    l(i.prototype, {
        constructor: c(o),
        toString: c("", (function() {
            return this.__name__
        }
        ))
    }),
    l(o.prototype, {
        toString: c((function() {
            return "Symbol (" + u(this).__description__ + ")"
        }
        )),
        valueOf: c((function() {
            return u(this)
        }
        ))
    }),
    f(o.prototype, o.toPrimitive, c("", (function() {
        var t = u(this);
        return "symbol" == typeof t ? t : t.toString()
    }
    ))),
    f(o.prototype, o.toStringTag, c("c", "Symbol")),
    f(i.prototype, o.toStringTag, c("c", o.prototype[o.toStringTag])),
    f(i.prototype, o.toPrimitive, c("c", o.prototype[o.toPrimitive]))
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = n(8)
      , i = n(12)
      , a = n(20)
      , c = n(21);
    (t.exports = function(t, e) {
        var n, o, u, s, l;
        return arguments.length < 2 || "string" != typeof t ? (s = e,
        e = t,
        t = null) : s = arguments[2],
        r(t) ? (n = c.call(t, "c"),
        o = c.call(t, "e"),
        u = c.call(t, "w")) : (n = u = !0,
        o = !1),
        l = {
            value: e,
            configurable: n,
            enumerable: o,
            writable: u
        },
        s ? i(a(s), l) : l
    }
    ).gs = function(t, e, n) {
        var u, s, l, f;
        return "string" != typeof t ? (l = n,
        n = e,
        e = t,
        t = null) : l = arguments[3],
        r(e) ? o(e) ? r(n) ? o(n) || (l = n,
        n = void 0) : n = void 0 : (l = e,
        e = n = void 0) : e = void 0,
        r(t) ? (u = c.call(t, "c"),
        s = c.call(t, "e")) : (u = !0,
        s = !1),
        f = {
            get: e,
            set: n,
            configurable: u,
            enumerable: s
        },
        l ? i(a(l), f) : f
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(9)
      , o = /^\s*class[\s{/}]/
      , i = Function.prototype.toString;
    t.exports = function(t) {
        return !!r(t) && !o.test(i.call(t))
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(10);
    t.exports = function(t) {
        if ("function" != typeof t)
            return !1;
        if (!hasOwnProperty.call(t, "length"))
            return !1;
        try {
            if ("number" != typeof t.length)
                return !1;
            if ("function" != typeof t.call)
                return !1;
            if ("function" != typeof t.apply)
                return !1
        } catch (t) {
            return !1
        }
        return !r(t)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(11);
    t.exports = function(t) {
        if (!r(t))
            return !1;
        try {
            return !!t.constructor && t.constructor.prototype === t
        } catch (t) {
            return !1
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , o = {
        object: !0,
        function: !0,
        undefined: !0
    };
    t.exports = function(t) {
        return !!r(t) && hasOwnProperty.call(o, typeof t)
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = n(13)() ? Object.assign : n(14)
}
, function(t, e, n) {
    "use strict";
    t.exports = function() {
        var t, e = Object.assign;
        return "function" == typeof e && (e(t = {
            foo: "raz"
        }, {
            bar: "dwa"
        }, {
            trzy: "trzy"
        }),
        t.foo + t.bar + t.trzy === "razdwatrzy")
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(15)
      , o = n(19)
      , i = Math.max;
    t.exports = function(t, e) {
        var n, a, c, u = i(arguments.length, 2);
        for (t = Object(o(t)),
        c = function(r) {
            try {
                t[r] = e[r]
            } catch (t) {
                n || (n = t)
            }
        }
        ,
        a = 1; a < u; ++a)
            e = arguments[a],
            r(e).forEach(c);
        if (void 0 !== n)
            throw n;
        return t
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = n(16)() ? Object.keys : n(17)
}
, function(t, e, n) {
    "use strict";
    t.exports = function() {
        try {
            return Object.keys("primitive"),
            !0
        } catch (t) {
            return !1
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , o = Object.keys;
    t.exports = function(t) {
        return o(r(t) ? Object(t) : t)
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function() {}
}
, function(t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function(t) {
        if (!r(t))
            throw new TypeError("Cannot use null or undefined");
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(0)
      , o = Array.prototype.forEach
      , i = Object.create
      , a = function(t, e) {
        var n;
        for (n in t)
            e[n] = t[n]
    };
    t.exports = function(t) {
        var e = i(null);
        return o.call(arguments, (function(t) {
            r(t) && a(Object(t), e)
        }
        )),
        e
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = n(22)() ? String.prototype.contains : n(23)
}
, function(t, e, n) {
    "use strict";
    var r = "razdwatrzy";
    t.exports = function() {
        return "function" == typeof r.contains && (!0 === r.contains("dwa") && !1 === r.contains("foo"))
    }
}
, function(t, e, n) {
    "use strict";
    var r = String.prototype.indexOf;
    t.exports = function(t) {
        return r.call(this, t, arguments[1]) > -1
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(25);
    t.exports = function(t) {
        if (!r(t))
            throw new TypeError(t + " is not a symbol");
        return t
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return !!t && ("symbol" == typeof t || !!t.constructor && ("Symbol" === t.constructor.name && "Symbol" === t[t.constructor.toStringTag]))
    }
}
, function(t, e) {
    var n, r, o, i;
    Array.from || (Array.from = (n = Object.prototype.toString,
    r = function(t) {
        return "function" == typeof t || "[object Function]" === n.call(t)
    }
    ,
    o = Math.pow(2, 53) - 1,
    i = function(t) {
        var e = function(t) {
            var e = Number(t);
            return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e
        }(t);
        return Math.min(Math.max(e, 0), o)
    }
    ,
    function(t) {
        var e = this
          , n = Object(t);
        if (null == t)
            throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var o, a = arguments.length > 1 ? arguments[1] : void 0;
        if (void 0 !== a) {
            if (!r(a))
                throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (o = arguments[2])
        }
        for (var c, u = i(n.length), s = r(e) ? Object(new e(u)) : new Array(u), l = 0; l < u; )
            c = n[l],
            s[l] = a ? void 0 === o ? a(c, l) : a.call(o, c, l) : c,
            l += 1;
        return s.length = u,
        s
    }
    ))
}
, function(t, e) {
    Array.prototype.flat || (Array.prototype.flat = function(t) {
        var e = [];
        return function t(n, r) {
            var o = !0
              , i = !1
              , a = void 0;
            try {
                for (var c, u = n[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
                    var s = c.value;
                    Array.isArray(s) && r > 0 ? t(s, r - 1) : e.push(s)
                }
            } catch (t) {
                i = !0,
                a = t
            } finally {
                try {
                    o || null == u.return || u.return()
                } finally {
                    if (i)
                        throw a
                }
            }
        }(this, Math.floor(t) || 1),
        e
    }
    )
}
, function(t, e) {
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(t, e) {
            if (null == this)
                throw new TypeError('"this" is null or not defined');
            var n = Object(this)
              , r = n.length >>> 0;
            if (0 === r)
                return !1;
            for (var o = 0 | e, i = Math.max(o >= 0 ? o : r - Math.abs(o), 0); i < r; ) {
                if (n[i] === t)
                    return !0;
                i++
            }
            return !1
        }
    })
}
, function(t, e) {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
        "use strict";
        if (null == this)
            throw new TypeError;
        var e = Object(this)
          , n = e.length >>> 0;
        if (0 === n)
            return -1;
        var r = 0;
        if (arguments.length > 0 && ((r = Number(arguments[1])) != r ? r = 0 : 0 != r && r != 1 / 0 && r != -1 / 0 && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))),
        r >= n)
            return -1;
        for (var o = r >= 0 ? r : Math.max(n - Math.abs(r), 0); o < n; o++)
            if (o in e && e[o] === t)
                return o;
        return -1
    }
    )
}
, function(t, e) {
    var n = document.createElement("div").classList;
    n.toggle("a", !1),
    n.contains("a") && (DOMTokenList.prototype.toggle = function(t, e) {
        !0 === e ? this.add(t) : !1 === e || this.contains(t) ? this.remove(t) : this.add(t)
    }
    )
}
, function(t, e) {
    Element.prototype.remove || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }
    )
}
, function(t, e) {
    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(t, e) {
            "use strict";
            if (null == t)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), r = 1; r < arguments.length; r++) {
                var o = arguments[r];
                if (null != o)
                    for (var i in o)
                        Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
            }
            return n
        },
        writable: !0,
        configurable: !0
    })
}
, function(t, e) {
    Object.entries || (Object.entries = function(t) {
        for (var e = Object.keys(t), n = e.length, r = new Array(n); n--; )
            r[n] = [e[n], t[e[n]]];
        return r
    }
    )
}
, function(t, e) {
    String.prototype.includes || (String.prototype.includes = function(t, e) {
        "use strict";
        return "number" != typeof e && (e = 0),
        !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
    }
    )
}
, function(t, e) {
    String.prototype.padEnd || (String.prototype.padEnd = function(t, e) {
        return t >>= 0,
        e = String(void 0 !== e ? e : " "),
        this.length > t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)),
        String(this) + e.slice(0, t))
    }
    )
}
, function(t, e) {
    String.prototype.padStart || (String.prototype.padStart = function(t, e) {
        return t >>= 0,
        e = String(e || " "),
        this.length > t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)),
        e.slice(0, t) + String(this))
    }
    )
}
, function(t, e) {
    String.prototype.repeat || (String.prototype.repeat = function(t) {
        "use strict";
        if (null == this)
            throw new TypeError("can't convert " + this + " to object");
        var e = "" + this;
        if ((t = +t) != t && (t = 0),
        t < 0)
            throw new RangeError("repeat count must be non-negative");
        if (t == 1 / 0)
            throw new RangeError("repeat count must be less than infinity");
        if (t = Math.floor(t),
        0 == e.length || 0 == t)
            return "";
        if (e.length * t >= 1 << 28)
            throw new RangeError("repeat count must not overflow maximum string size");
        for (var n = ""; 1 == (1 & t) && (n += e),
        0 != (t >>>= 1); )
            e += e;
        return n
    }
    )
}
, function(t, e) {
    String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    )
}
, function(t, e) {
    String.prototype.trimEnd || (String.prototype.trimEnd = function() {
        return this.replace(/[\s\uFEFF\xA0]+$/g, "")
    }
    )
}
, function(t, e) {
    var n = window;
    "scrollY"in n || Object.defineProperty(n, "scrollY", {
        get: function() {
            return n.pageYOffset
        }
    }),
    "scrollX"in n || Object.defineProperty(n, "scrollX", {
        get: function() {
            return n.pageXOffset
        }
    })
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    n(3),
    n(26),
    n(27),
    n(28),
    n(29),
    n(30),
    n(31),
    n(32),
    n(33),
    n(34),
    n(35),
    n(36),
    n(37),
    n(38),
    n(39),
    n(40);
    function r(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function i(t, e, n) {
        return e && o(t.prototype, e),
        n && o(t, n),
        t
    }
    window.Symbol || (window.Symbol = n(4));
    var a = /^([^/]+?:)?(?:\/\/([^:\/]*))?(:[^/]+)?([^?#]*?)?(\?[^#]*)?(#.+)?$/
      , c = /^(.*\/)?([^/]+?)?(\.[^\/]+)?$/;
    function u(t) {
        for (var e = t.split("/"), n = 0; n < e.length; ) {
            var r = !("." === e[n] || ".." === e[n] || null === e[n] || "" === e[n]);
            if ("." === e[n])
                e[n] = null;
            else if (r && ".." === e[n + 1]) {
                e[n] = null,
                e[n + 1] = null,
                e = e.filter((function(t) {
                    return null !== t
                }
                )),
                n = 0;
                continue
            }
            ++n
        }
        return (e = e.filter((function(t) {
            return null !== t
        }
        ))).some((function(t) {
            return ".." === t
        }
        )) ? null : e.join("/")
    }
    var s = function() {
        function t(e) {
            r(this, t);
            var n = String(e).match(a) || []
              , o = u(n[4] || "");
            if (this.invalid = null === o,
            !this.invalid) {
                var i = o.match(c);
                this.protocol = n[1] || "",
                this.hostname = n[2] || "",
                this.port = n[3] || "",
                this.dirname = i[1] || "",
                this.basename = i[2] || "",
                this.extname = i[3] || "",
                this.search = n[5] || "",
                this.hash = n[6] || "",
                this.isWebp = !1
            }
        }
        return i(t, [{
            key: "webp",
            value: function() {
                return this.matchForWebp && (this.extname += ".webp",
                this.isWebp = !0),
                this.isWebp
            }
        }, {
            key: "format",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , e = t.webp
                  , n = void 0 !== e && e;
                if (this.invalid)
                    return null;
                var r = !this.isWebp && n && this.matchForWebp ? ".webp" : "";
                return this.protocol + (this.protocol || this.hostname ? "//" : "") + this.hostname + this.port + this.dirname + this.basename + this.extname + r + this.search + this.hash
            }
        }, {
            key: "matchForWebp",
            get: function() {
                return !(document.documentMode || this.isExternal || ".png" !== this.extname && ".jpg" !== this.extname)
            }
        }, {
            key: "isExternal",
            get: function() {
                return "" !== this.protocol || "" !== this.hostname || "" !== this.port
            }
        }]),
        t
    }();
    function l() {
        return delete n.c[2],
        n(2).default
    }
    var f = l().dist_path;
    function p(t) {
        var e = "root" === t
          , n = e ? "" : t.replace(/\./g, "/").replace(/_{2,}/g, ".");
        return {
            name: t,
            dir: n,
            dist: e ? "root" : n,
            distPath: f
        }
    }
    function h(t, e) {
        return y(t) || d(t, e) || m()
    }
    function m() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
    function d(t, e) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
            var n = []
              , r = !0
              , o = !1
              , i = void 0;
            try {
                for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                !e || n.length !== e); r = !0)
                    ;
            } catch (t) {
                o = !0,
                i = t
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw i
                }
            }
            return n
        }
    }
    function y(t) {
        if (Array.isArray(t))
            return t
    }
    function v() {
        var t = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "property"
              , r = document.querySelector("meta[".concat(n, "='").concat(t, "']"));
            return r ? r.getAttribute("content") : ""
        }
          , e = function(t, e, n) {
            var r = document.querySelector("meta[".concat(n, "='").concat(t, "']"));
            r && r.setAttribute("content", e)
        }
          , n = document.querySelector("#zero")
          , r = n.dataset
          , o = t("og:title")
          , i = t("og:description")
          , a = t("keywords", "name").split(",")
          , c = t("og:site_name")
          , u = t("og:image")
          , s = "" !== r.noindexing
          , l = r.titleSep
          , f = r.page
          , m = r.buildId
          , d = r.distPath
          , y = p(f)
          , v = function(t) {
            var e = h(t.split("."), 2)
              , n = e[0]
              , r = e[1];
            return n.replace(/(....)(..)(..)/, "$1/$2/$3") + " " + r.padStart(6, "0").replace(/(..)(..)(..)/, "$1:$2:$3")
        }(m)
          , g = d
          , b = d + "/" + y.dist
          , w = r.modules ? r.modules.split(",") : null;
        return {
            get el() {
                return n
            },
            get name() {
                return y.name
            },
            get dir() {
                return y.dir
            },
            get siteRoot() {
                return g
            },
            get pageRoot() {
                return b
            },
            get buildId() {
                return m
            },
            get modules() {
                return w
            },
            get indexing() {
                return s
            },
            get distPath() {
                return d
            },
            get siteData() {
                return d + "/$site/data"
            },
            get timestamp() {
                return v
            },
            get siteName() {
                return c
            },
            get assetRoot() {
                return b
            },
            get image() {
                return u
            },
            get keywords() {
                return a
            },
            get description() {
                return i
            },
            get title() {
                return o
            },
            set keywords(t) {
                e("keywords", "", "name")
            },
            set description(t) {
                i = t,
                e("description", t, "name"),
                e("og:description", t, "property"),
                e("twitter:description", t, "name")
            },
            set title(t) {
                var n = "" === (o = "" + t) ? c : "root" === f ? o : o + l + c;
                document.title = n,
                e("og:title", n, "property"),
                e("twitter:title", n, "name")
            }
        }
    }
    var g = v()
      , b = 600
      , w = function(t) {
        return "/storage/"
    }
      , _ = ["png", "jpg", "gif", "webp", "svg", "svgz", "bmp"]
      , S = {
        api: !0,
        boot: !1,
        component: !1,
        directive: !1,
        lifecycle: !0,
        preserve: !0
    };
    function x(t, e) {
        t instanceof Array ? t.forEach((function(t) {
            return window.addEventListener(t, e)
        }
        )) : window.addEventListener(t, e)
    }
    var j = void 0
      , O = new Vue({})
      , E = Vue.observable({
        type: null,
        get pc() {
            return "pc" === this.type
        },
        get sp() {
            return "sp" === this.type
        },
        portrait: !0,
        landscape: !1,
        width: 0,
        height: 0,
        device: {
            width: 0,
            height: 0,
            ratio: 0
        },
        on: function(t) {
            O.$on("change", t)
        },
        off: function(t) {
            O.$off("change", t)
        }
    })
      , P = window
      , T = P.screen
      , N = []
      , A = function() {
        var t = P.innerWidth
          , e = E.type
          , n = t >= b ? "pc" : "sp";
        E.type = n,
        E.width = t,
        E.height = P.innerHeight;
        var r = E.device;
        r.width = T.availWidth,
        r.height = T.availHeight,
        r.ratio = P.devicePixelRatio,
        N.forEach((function(t) {
            return t()
        }
        )),
        e !== n && O.$emit("change", n)
    };
    x(["resize"], A),
    A(),
    x("orientationchange", (function(t) {
        var e = T.orientation.angle;
        j.portrait = 0 === e || 180 === e,
        j.landscape = 90 === e || 270 === e
    }
    ));
    var M = E
      , C = {
        api: !1,
        boot: !1,
        component: !1,
        directive: !1,
        lifecycle: !1,
        preserve: !1,
        colors: {
            component: "#b20",
            directive: "#804",
            boot: "#04c",
            lifecycle: "#680",
            preserve: "#206",
            api: "#b06"
        }
    }
      , L = Object.assign(C, S)
      , I = {
        storage: w(location.hostname),
        components: {},
        directives: {},
        exts: {
            image: _
        },
        log: L
    };
    function V(t) {
        location.href = U(new s("/").format())
    }
    function $(t) {
        return new s(t).isExternal
    }
    function k(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = new s(t);
        if (n.isExternal)
            return n;
        if (void 0 !== e.youtube) {
            var r = ["mq", "hq", "sd", "maxres"]
              , o = r.includes(e.youtube) ? e.youtube : "mq";
            return new s("https://img.youtube.com/vi/".concat(n.format(), "/").concat(o, "default.jpg"))
        }
        var i = g.siteRoot
          , a = function() {
            return e.adap && (n.basename += M.pc ? "@pc" : "@sp"),
            n
        };
        return e.storage ? (n = new s(I.storage + t),
        a()) : "@" === t[0] ? (n.dirname = "".concat(i, "/$site/components/").concat(n.dirname.substr(1)),
        a()) : e.component ? (n.dirname = "".concat(i, "/$site/components/").concat(e.component, "/") + n.dirname,
        a()) : e.site ? (n.dirname = "".concat(i, "/$site/images/") + n.dirname,
        a()) : e.storage ? (n.dirname = I.storage,
        a()) : "/" === t[0] ? (n.dirname = i + n.dirname,
        a()) : (n.dirname = g.assetRoot + "/assets/" + n.dirname,
        a())
    }
    function U(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return k(t, e).format()
    }
    var D = {
        goto: V,
        resolve: U,
        resolveRaw: k,
        Url: s,
        isExternal: $
    };
    function R() {
        return Math.random().toString(36).substr(2).padStart(11, "0")
    }
    function H(t) {
        return 'url("' + t.replace(/"/g, "\\22") + '")'
    }
    function F(t) {
        return {
            "background-image": H(new s("assets/" + t).format({
                webp: !0
            }))
        }
    }
    var W = {
        randomId: R,
        cssUrl: H,
        backgroundImage: F
    }
      , q = {
        get: function(t) {
            return new Promise((function(e, n) {
                navigator.geolocation.getCurrentPosition((function(n) {
                    var r = {
                        lat: n.coords.latitude,
                        lng: n.coords.longitude
                    };
                    t(r),
                    e(r)
                }
                ), n)
            }
            ))
        }
    };
    function G() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
        console.warn.apply(console, e)
    }
    function Y(t, e) {
        Vue.component(t, e)
    }
    function B(t, e) {
        return Z(t) || J(t, e) || X()
    }
    function X() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
    function J(t, e) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
            var n = []
              , r = !0
              , o = !1
              , i = void 0;
            try {
                for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                !e || n.length !== e); r = !0)
                    ;
            } catch (t) {
                o = !0,
                i = t
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw i
                }
            }
            return n
        }
    }
    function Z(t) {
        if (Array.isArray(t))
            return t
    }
    function K(t) {
        return (K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    var Q = function(t, e) {
        if ("object" === K(t))
            for (var n = 0, r = Object.entries(t); n < r.length; n++) {
                var o = B(r[n], 2)
                  , i = o[0];
                e(o[1], i)
            }
    }
      , tt = function(t, e) {
        return "object" !== K(t) ? t : Object.keys(t).map((function(n) {
            return e(t[n], n)
        }
        ))
    }
      , et = function(t) {
        var e = K(t);
        return t instanceof Array ? 0 === e.length : "string" !== e || 0 === e.length
    };
    function nt(t) {
        return (nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function rt(t, e, n, r) {
        var o = "page" === r;
        return Object.assign(t, ot(e, o)),
        it(t, n, o)
    }
    function ot(t, e) {
        if (!t)
            return {};
        var n = {}
          , r = function(t) {
            return G("Invalid component argument", t)
        };
        return t instanceof Array ? t.map((function(t) {
            switch (nt(t)) {
            case "string":
                it(n, t, e);
                break;
            case "object":
                t.name ? n[t.name] = t : Object.assign(n, t);
                break;
            default:
                r(t)
            }
        }
        )) : "object" === nt(t) ? t.created || t.mounted || t.data || t.components ? r(t) : Object.assign(n, t) : r(t),
        n
    }
    function it(t, e, n) {
        return (e || "").replace(/\r\n/g, "\n").replace(/\s*<tag((?:.|\n)*?)>((?:.|\n)+?)<\/tag>\s*/g, (function(e, r, o) {
            false && (o.match(/<a /i) && void 0,
            o.match(/<img /i) && void 0);
            var i = document.createElement("div");
            i.innerHTML = "<div ".concat(r, "></div>");
            var a = i.querySelector("div")
              , c = function(t) {
                return a.getAttribute(t) || ""
            }
              , u = c("name")
              , s = ct(c("props"))
              , l = ut(c("methods"), n);
            if (!false || u) {
                var f = null !== a.getAttribute("global");
                return t[u] = {
                    name: u,
                    data: function() {
                        return at(c("data"))
                    },
                    props: s,
                    methods: l,
                    global: f,
                    template: o
                },
                null !== f && Y(u, t[u]),
                ""
            }
            void 0
        }
        ))
    }
    function at(t) {
        var e = {};
        return Q(ct(t), (function(t, n) {
            e[n] = void 0 === t.default ? 0 : t.default
        }
        )),
        e
    }
    function ct(t) {
        var e = {};
        return t.replace(/([-\w]+)\s*:?\s*(?:(Number|String|Object|Array|Boolean)|(\d+\.?\d*)|(\d*\.\d+)|'(.+?)'|({})|([])|(true|false)|(null)){0,1}/g, (function(t, n, r, o, i, a, c, u, s, l) {
            var f = "Number" === r ? [Number, 0] : "String" === r ? [String, ""] : "Object" === r ? [Object, {}] : "Array" === r ? [Array, []] : "Boolean" === r ? [Boolean, !1] : et(o) && et(i) ? a ? [String, a] : c ? [Object, {}] : u ? [Array, []] : s ? [Boolean, "true" === s] : l ? [null, null] : [null, void 0] : [Number, parseFloat(o || i)];
            f && (e[n] = {
                type: f[0],
                default: f[1]
            })
        }
        )),
        e
    }
    function ut(t, e) {
        var n = {};
        return t.replace(/\s+/g, "").split(/,/).map((function(t) {
            "" !== t && (n[t] = function() {
                var e = this.$root
                  , n = this.$parent
                  , r = t in n ? n : e;
                if (!false || t in r) {
                    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
                        i[a] = arguments[a];
                    return r[t].apply(this.$root, i)
                }
                void 0
            }
            )
        }
        )),
        n
    }
    function st(t, e, n) {
        var r = ["%c[".concat(t, "] ").concat(e), "color:".concat(I.log.colors[t])];
        n && r.push(n),
        console.log.apply(null, r)
    }
    var lt = I.log;
    function ft(t, e) {
        return pt(t, e, e.template, "module")
    }
    function pt(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "component";
        if (e) {
            var o = {};
            e.mixins || (e.mixins = []);
            var i = et(e.props) ? [] : e.props instanceof Array ? e.props : Object.keys(e.props);
            e.mixins.push({
                computed: {
                    $component: function() {
                        return {
                            name: t,
                            props: i,
                            global: !0
                        }
                    }
                }
            }),
            e.template = rt(o, e.components, n, r),
            e.components = o,
            Y(t, e),
            I.components[t] = e,
            false && lt.component && st("component", "<".concat(t, ">"))
        } else
            void 0
    }
    function ht(t, e) {
        Vue.directive(t, e),
        I.directives[t] = e,
        false && lt.directive && st("directive", "v-".concat(t))
    }
    var mt = {
        component: pt,
        directive: ht,
        module: ft,
        stores: {}
    }
      , dt = Vue.observable({
        list: {}
    });
    function yt(t, e) {
        Vue.set(dt.list, t, e)
    }
    function vt(t, e) {
        return dt.list[t] || dt.list[e] || function() {
            if ("/" === t || "root" === e)
                return z.vm.$page.siteName
        }() || e
    }
    function gt(t) {
        Q(t, (function(t, e) {
            return yt(e, t)
        }
        ))
    }
    var bt = {
        apply: gt,
        set: yt,
        get: vt,
        get list() {
            return dt.list
        }
    }
      , wt = {
        "/": "TOP",
        "/news": "NEWS",
        "/music": "楽曲リスト",
        "/play": "基本の遊び方",
        "/play/play": "みんなであそぼう",
        "/play/luminous": "LUMINOUSの新要素",
        "/play/option": "オプション設定",
        "/play/system": "システム",
        "/play/national": "全国対戦",
        "/play/class": "クラス認定",
        "/play/function": "CHUNITHM-NET",
        "/play/taisen": "カードメイカーとチュウニズム大戦",
        "/play/rule": "プレイ規約",
        "/cd": "オリジナルCD",
        "/character": "キャラクター",
        "/character/chunithm-luminous": "CHUNITHM LUMINOUS",
        "/character/chunithm-sun": "CHUNITHM SUN",
        "/character/chunithm-new": "CHUNITHM NEW",
        "/character/chunithm": "CHUNITHM～CHUNITHM PARADISE",
        "/character/irodori-midori": "イロドリミドリ",
        "/character/cardmaker": "カードメイカー",
        "/ranking": "ランキング"
    }
      , _t = function() {
        z.api.setResolveUrl((function(t) {
            return true ? "/api/".concat(t) : z.vm.$page.siteData + "/" + t
        }
        ))
    }
      , St = {
        beforeVue: function() {
            z.rosetta.apply(wt),
            _t()
        },
        afterVue: function(t) {}
    }
      , xt = I.log.boot
      , jt = function(t) {
        return st("boot", t)
    }
      , Ot = function(t) {
        var e, n;
        false && xt && jt("start"),
        Pt(t),
        null === (e = St.beforeVue) || void 0 === e || e.call(St);
        var r = At(Tt(t), t);
        return null === (n = St.afterVue) || void 0 === n || n.call(St),
        Mt(r),
        document.body.dataset.page = r.$page.name,
        false && xt && jt("end"),
        r
    };
    function Et(t, e) {
        ["data", "computed", "methods", "watch", "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "activated", "deactivated", "beforeDestroy", "destroyed", "errorCaptured"].forEach((function(n) {
            n in e && (t[n] = e[n])
        }
        ))
    }
    function Pt(t) {
        Q(t.rosetta, (function(t, e) {
            return bt.set(e, t)
        }
        ))
    }
    function Tt(t) {
        var e = {}
          , n = {
            template: rt(e, t.components, t.template),
            mixins: t.mixins || [],
            components: e
        };
        if (Et(n, t),
        Nt(n, t),
        false && I.log.lifecycle) {
            var r = function(t) {
                return st("lifecycle", t)
            };
            n.mixins.unshift({
                beforeCreate: function() {
                    r("*beforeCreate*")
                },
                created: function() {
                    r("*created*")
                },
                beforeMount: function() {
                    r("*beforeMount*")
                },
                mounted: function() {
                    r("*mounted*")
                }
            })
        }
        return n
    }
    function Nt(t, e) {
        false && xt && jt("Vuex");
        var n = {
            router: {
                namespaced: !0,
                state: {
                    router: null
                },
                mutations: {
                    change: function(t, e) {
                        t.router = e
                    }
                },
                getters: {
                    router: function(t) {
                        return t.router
                    }
                }
            }
        };
        Object.assign(n, mt.stores),
        e.store && (n.page = e.store),
        z.store = t.store = new Vuex.Store({
            modules: n
        })
    }
    function At(t, e) {
        (e.router || e.routes) && (false && xt && jt("Vue Router"),
        t.router = Ct(e, t.store)),
        false && xt && jt("new Vue()");
        var n = new Vue(t);
        return false && (window.vm = n),
        z.vm = n,
        n.$mount(g.el),
        n
    }
    function Mt(t) {
        z.on("beforeunload", (function() {
            false && xt && jt("destroy"),
            t.$root.$destroy()
        }
        ))
    }
    function Ct(t, e) {
        var n = {
            base: g.pageRoot
        };
        return t.router && Object.assign(n, t.router),
        n.routes || (n.routes = []),
        t.routes && (n.routes = n.routes.concat(t.routes)),
        new VueRouter(n)
    }
    function Lt(t) {
        var e = /Android/.test(t)
          , n = /iPhone/.test(t) || /iPod touch/.test(t)
          , r = /iPad/.test(t)
          , o = n || r
          , i = /Windows/.test(t)
          , a = /Mac OS X/.test(t) && !o
          , c = /Mobile/.test(t)
          , u = /Trident/.test(t)
          , s = /Trident\/7/.test(t)
          , l = /Edge/.test(t)
          , f = /Safari/.test(t)
          , p = /Chrome/.test(t)
          , h = /Gecko/.test(t) && /Firefox/.test(t) && !u
          , m = p && !h && !u && !l
          , d = f && !p
          , y = n || e && c
          , v = !y
          , g = /Touch/.test(t) || y || r || e && !c
          , b = m || h
          , w = {
            pc: v,
            sp: y,
            win: i,
            mac: a,
            ios: o,
            andr: e,
            ie: u,
            ie11: s,
            msedge: l,
            gecko: h,
            chrome: m,
            safari: d,
            touch: g,
            mouse: !g,
            webp: b,
            "no-webp": !b
        }
          , _ = {
            iosVer: NaN,
            andrVer: NaN,
            edgeVer: NaN
        }
          , S = function(e, n, r) {
            if (e) {
                var o = t.match(n);
                o && (w[r + (0 | o[1])] = !0,
                _[r + "Ver"] = parseFloat(o[1]))
            }
        };
        return S(o, /OS ([.\d]+)/, "ios"),
        S(e, /Android ([.\d]+)/, "andr"),
        S(l, /Edge ([.\d]+)/, "edge"),
        {
            env: w,
            extra: _
        }
    }
    var It = Lt(window.navigator.userAgent)
      , Vt = It.env
      , $t = It.extra
      , kt = Vt
      , Ut = Object.assign({}, Vt, $t)
      , Dt = {
        apply: function() {
            var t = document.querySelector("html").classList;
            return Object.keys(kt).map((function(e) {
                Vt[e] && t.add(e)
            }
            )),
            Ut
        }
    };
    function Rt(t) {
        return (Rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function Ht(t) {
        var e = {};
        return Q(t, (function(t, n) {
            return function t(e, n, r) {
                if (1 === n.length)
                    e[n[0]] = r;
                else {
                    var o = n[0];
                    e[o] = e[o] || {},
                    n.shift(),
                    t(e[o], n, r)
                }
            }(e, ((r = n).includes("-") ? r.split(/-/) : r.split(/([A-Z][^A-Z]*)/)).filter((function(t) {
                return void 0 !== t && t.length > 0
            }
            )).map((function(t) {
                return t.toLowerCase()
            }
            )), t);
            var r
        }
        )),
        e
    }
    var zt = {
        camel: function(t) {
            return t[0].toUpperCase() + t.substr(1).toLowerCase()
        },
        kebab: function(t) {
            return "-" + t.toLowerCase()
        }
    };
    function Ft(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "camel"
          , n = function(t, n) {
            return "" === t ? n.toLowerCase() : t + zt[e](n)
        }
          , r = {}
          , o = function t(e, o) {
            Q(e, (function(e, i) {
                "object" !== Rt(e) || e instanceof Array ? r[n(o, i)] = e : t(e, n(o, i))
            }
            ))
        };
        return o(t, ""),
        r
    }
    var Wt = {
        structured: Ht,
        flatten: Ft
    };
    function qt(t, e) {
        return Bt(t) || Yt(t, e) || Gt()
    }
    function Gt() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
    function Yt(t, e) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
            var n = []
              , r = !0
              , o = !1
              , i = void 0;
            try {
                for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                !e || n.length !== e); r = !0)
                    ;
            } catch (t) {
                o = !0,
                i = t
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw i
                }
            }
            return n
        }
    }
    function Bt(t) {
        if (Array.isArray(t))
            return t
    }
    var Xt = {
        hashcare: !0,
        duration: 500,
        diff: {
            pc: 0,
            sp: 0
        }
    }
      , Jt = Vue.observable({
        x: 0,
        y: 0,
        xRate: 0,
        yRate: 0
    })
      , Zt = document.querySelector("html")
      , Kt = function() {
        Jt.x = window.scrollX,
        Jt.y = window.scrollY;
        var t = Zt.scrollWidth - window.innerWidth
          , e = Zt.scrollHeight - window.innerHeight;
        Jt.xRate = Math.min(0 === t ? 0 : Jt.x / t, 1),
        Jt.yRate = Math.min(0 === e ? 0 : Jt.y / e, 1)
    };
    function Qt(t) {
        var e = Xt.diff
          , n = M.pc ? e.pc : e.sp
          , r = window.scrollY;
        if ("number" == typeof t)
            return [t + n];
        if ("string" == typeof t) {
            var o = t.trim()
              , i = document.querySelector(o);
            if (!i)
                return false && void 0,
                [0];
            var a = i.getBoundingClientRect();
            return a ? [a.top + r + n, "#" === o[0]] : [0]
        }
        if (t instanceof HTMLElement) {
            var c = t.getBoundingClientRect();
            return c ? [c.top + r + n] : [0]
        }
        throw void 0,
        new Error("getY(any)")
    }
    x(["scroll", "DOMContentLoaded"], Kt);
    var te = !1;
    function ee(t) {
        if (te)
            return Promise.resolve();
        var e = window.scrollY
          , n = qt(Qt(t), 2)
          , r = n[0]
          , o = n[1]
          , i = Xt.duration / 10;
        return te = !0,
        new Promise((function(t) {
            var n = 0
              , a = setInterval((function() {
                ++n;
                var c = .5 - .5 * Math.cos(n / i * Math.PI)
                  , u = 1 - (1 - c) * (1 - c);
                window.scrollTo(window.scrollX, r * u + e * (1 - u)),
                n >= i && (te = !1,
                clearInterval(a),
                t(o))
            }
            ), 10)
        }
        ))
    }
    var ne = {
        vm: Jt,
        options: Xt,
        smooth: function(t) {
            return ee(t).then((function(e) {
                Xt.hashcare && e && history.replaceState(null, null, t)
            }
            ))
        },
        to: function(t) {
            var e = qt(Qt(t), 2)
              , n = e[0]
              , r = e[1];
            window.scrollTo(0, n),
            Xt.hashcare && r && history.replaceState(null, null, t)
        },
        getY: Qt
    };
    function re(t) {
        var e = t.type
          , n = (t.hash || location.hash.substr(1)).replace(/\/+$/, "")
          , r = document.getElementById(n);
        return !!r && ("smooth" === e ? ne.smooth(r) : (setTimeout((function() {
            return ne.to(r)
        }
        ), 50),
        setTimeout((function() {
            return ne.to(r)
        }
        ), 100),
        setTimeout((function() {
            return ne.to(r)
        }
        ), 150),
        setTimeout((function() {
            return ne.to(r)
        }
        ), 200)),
        !0)
    }
    function oe() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , e = t.type
          , n = t.hash
          , r = 0
          , o = function t() {
            re({
                type: e,
                hash: n
            }) || ((r += 1) < 50 ? setTimeout(t, 50) : void 0)
        };
        o()
    }
    var ie = oe
      , ae = I.log.preserve
      , ce = function(t) {
        return st("preserve", t)
    }
      , ue = localStorage || sessionStorage
      , se = Vue.observable({});
    function le(t, e) {
        e || (e = t,
        t = "local");
        var n = "zp_" + ("global" === t || "component-global" === t ? "global" : btoa(g.name))
          , r = Object.keys(e)
          , o = function() {
            return JSON.parse(ue.getItem(n)) || {}
        };
        return {
            beforeCreate: function() {
                if (n in ue) {
                    var t = o();
                    r.forEach((function(e) {
                        Vue.set(se, e, t[e]),
                        false && ae && ce("loaded <".concat(e, ">"))
                    }
                    ))
                }
            },
            beforeDestroy: function() {
                var t = o();
                r.forEach((function(e) {
                    t[e] = se[e],
                    false && ae && ce("saved <".concat(e, ">"))
                }
                )),
                ue.setItem(n, JSON.stringify(t))
            }
        }
    }
    Vue.mixin({
        computed: {
            $preserved: function() {
                return se
            }
        }
    });
    var fe = function() {
        var t = this
          , e = []
          , n = ""
          , r = "/";
        if ((g.indexing ? g.name.split(".").map((function(t) {
            return t.replace(/__/g, ".")
        }
        )) : location.pathname.replace(new RegExp("^" + g.siteRoot), "").split("/").filter((function(t) {
            return t.length > 0
        }
        ))).forEach((function(t) {
            n += "/" + t,
            r += t + "/",
            e.push({
                type: "directory",
                name: t,
                path: n,
                realPath: r,
                spaPath: null
            })
        }
        )),
        e.length > 0) {
            e.unshift({
                type: "directory",
                name: "root",
                path: "/",
                realPath: "/",
                spaPath: null
            })
        }
        return this.$route && pe(this.$router, e, n, r),
        e[e.length - 1].type = "active",
        e.forEach((function(n, r) {
            n.depth = r + 1,
            n.shallowness = e.length - r;
            var o = bt.get(n.path) || bt.get(n.name);
            "/" === n.path && (o = o || t.$page.siteName),
            n.title = o || n.name
        }
        )),
        e
    };
    function pe(t, e, n, r) {
        var o = new RegExp("^" + g.distPath)
          , i = new RegExp("^/" + g.name.replace(/\./g, "/"))
          , a = e[e.length - 1];
        a.type = "routing",
        a.spaPath = "/";
        var c = location.pathname;
        "hash" === t.mode && (c += decodeURIComponent(t.history.current.path));
        var u = "/";
        c.replace(o, "").replace(i, "").split("/").filter((function(t) {
            return t.length > 0
        }
        )).map((function(t) {
            return decodeURIComponent(t)
        }
        )).forEach((function(t) {
            n += "/" + t,
            r += t + "/",
            u += t + "/",
            e.push({
                type: "routing",
                name: t,
                path: n,
                realPath: r,
                spaPath: u
            })
        }
        ))
    }
    var he = function() {
        if (!Vt.sp) {
            x(["resize", "DOMContentLoaded", "load"], (function() {
                var n = t.clientWidth;
                e.style.zoom = n < b ? n / e.clientWidth : ""
            }
            ));
            var t = document.querySelector("html")
              , e = document.body
        }
    };
    function me(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function de(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a)
              , u = c.value
        } catch (t) {
            return void n(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o)
    }
    function ye(t) {
        return function() {
            var e = this
              , n = arguments;
            return new Promise((function(r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    de(i, r, o, a, c, "next", t)
                }
                function c(t) {
                    de(i, r, o, a, c, "throw", t)
                }
                a(void 0)
            }
            ))
        }
    }
    function ve(t) {
        return (ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    var ge = {}
      , be = function(t) {
        return t
    }
      , we = I.log.api
      , _e = function(t, e) {
        return st("api", t, e)
    };
    function Se(t) {
        false && we && _e("call ".concat(Object.keys(t).join(", ")));
        I.api;
        var e = tt(t, (function(t, e) {
            var n = ge[e];
            if (!false || n)
                return "function" == typeof n ? xe(e, n(t)) : "object" === ve(n) ? xe(e, n) : "string" == typeof n ? Oe(e, n, t) : void void 0;
            void 0
        }
        ));
        return Promise.all(e).then((function() {
            return z.vm.$api
        }
        ))
    }
    function xe(t, e) {
        var n = z.store;
        return new Promise((function(r) {
            n.commit("beginApiCall", t),
            setTimeout(ye(regeneratorRuntime.mark((function o() {
                return regeneratorRuntime.wrap((function(o) {
                    for (; ; )
                        switch (o.prev = o.next) {
                        case 0:
                            return o.next = 2,
                            e;
                        case 2:
                            e = o.sent,
                            n.commit("endApiCall", {
                                name: t,
                                value: e
                            }),
                            r(e);
                        case 5:
                        case "end":
                            return o.stop()
                        }
                }
                ), o)
            }
            ))), 50)
        }
        ))
    }
    function je(t, e) {
        return be(t.replace(/{(.+?)}/g, (function(t, n) {
            return n in e ? e[n] : (void 0,
            "*invalid-param-name*")
        }
        )))
    }
    function Oe(t, e, n) {
        var r = je(e, n)
          , o = {};
        "$" === t[0] && (o.method = "POST",
        o.body = JSON.stringify(n));
        var i = z.store;
        return i.commit("beginApiCall", t),
        new Promise((function(e) {
            var n = function(n) {
                i.commit("endApiCall", {
                    name: t,
                    value: n
                }),
                e(n)
            };
            fetch(r, o).then((function(t) {
                return t.json()
            }
            )).then((function(t) {
                return n(t)
            }
            )).catch((function(t) {
                return void 0
            }
            ), n({}))
        }
        ))
    }
    function Ee(t) {
        if ("string" == typeof t)
            return Se(me({}, t, {}));
        if (t instanceof Array) {
            var e = {};
            return t.forEach((function(t) {
                return e[t] = {}
            }
            )),
            Se(e)
        }
        if ("object" === ve(t))
            return Se(t);
        throw new Error("invalid api.call")
    }
    var Pe = {
        name: "api",
        computed: {
            $api: function() {
                return z.store.getters.api
            },
            $apiCalling: function() {
                return z.store.getters.apiCalling
            },
            $apiCount: function() {
                return z.store.getters.apiCalling.length
            }
        },
        methods: {
            list: ge,
            call: Ee,
            setResolveUrl: function(t) {
                be = t
            },
            defineApis: function(t) {
                Object.assign(ge, t)
            },
            asyncData: function(t, e) {
                return new Promise((function(n) {
                    setTimeout((function() {
                        return n(e())
                    }
                    ), t)
                }
                ))
            }
        },
        store: {
            state: {
                _reactive: 0,
                api: {},
                apiCalling: {}
            },
            getters: {
                api: function(t) {
                    return t._reactive,
                    t.api
                },
                apiCalling: function(t) {
                    return t._reactive,
                    Object.keys(t.apiCalling).map((function(e) {
                        return t.apiCalling[e] ? e : null
                    }
                    )).filter((function(t) {
                        return null !== t
                    }
                    ))
                }
            },
            mutations: {
                beginApiCall: function(t, e) {
                    false && we && _e("begin ".concat(e)),
                    t.apiCalling[e] = !0,
                    t._reactive++
                },
                endApiCall: function(t, e) {
                    var n = e.name
                      , r = e.value;
                    false && we && _e("end ".concat(n), r),
                    t.api[n] = r,
                    t.apiCalling[n] = !1,
                    t._reactive++
                }
            }
        }
    }
      , Te = {
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        w: "week",
        mon: "month",
        y: "year"
    }
      , Ne = {
        second: 1,
        minute: 60,
        hour: 3600,
        day: 86400,
        week: 604800,
        month: 2592e3,
        year: 31536e3
    };
    function Ae(t) {
        if ("number" == typeof t)
            return t;
        var e = (t || "").match(/^(\d+)\s*(\D+?)s?$/);
        if (e) {
            var n = parseFloat(e[1]);
            if (isNaN(n))
                return 0;
            var r = Te[e[2]] || e[2];
            return n * (Ne[r] || Ne.second)
        }
        return parseInt(t) || 0
    }
    false;
    var Me = Ae
      , Ce = arguments;
    function Le() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , e = t.url
          , n = t.cb
          , r = t.error
          , o = t.cache
          , i = void 0 === o || o
          , a = t.type
          , c = void 0 === a ? "json" : a
          , u = t.body
          , s = void 0 === u ? void 0 : u;
        e = D.resolve(e);
        var l = {};
        if (void 0 !== s) {
            var f = "application/json";
            l.method = "post",
            l.body = s,
            l.headers = {
                Accept: f,
                "Content-Type": f
            }
        } else
            l.method = "get",
            e = Ie(e, i);
        return fetch(e, l).then((function(t) {
            return "json" === c || "text" === c || "blob" === c ? t[c]() : t.text()
        }
        )).then((function(t) {
            return n && n(t),
            t
        }
        )).catch(r)
    }
    function Ie(t, e) {
        if (!0 === e || void 0 === e)
            return t;
        var n = t.match("?") ? "&" : "?";
        if (!1 === e || null === e) {
            var r = +new Date;
            return t + n + "_=".concat(r)
        }
        if ("string" == typeof e || "number" == typeof e) {
            var o = 1e3 * Me(e)
              , i = Math.floor(+new Date / o) * o;
            return t + n + "?_=".concat(i)
        }
        return void 0,
        t
    }
    var Ve = function(t, e) {
        var n = t.url
          , r = t.cb
          , o = t.error
          , i = t.cache
          , a = t._args;
        if (n)
            return Le({
                url: n,
                cb: r,
                error: o,
                cache: i,
                type: e
            });
        var c = a || Ce;
        return Le({
            url: c[0],
            cb: c[1],
            cache: c[2],
            error: c[3],
            type: e
        })
    }
      , $e = {
        name: "fetch",
        methods: {
            json: function() {
                return Ve({
                    _args: arguments
                }, "json")
            },
            text: function() {
                return Ve({
                    _args: arguments
                }, "text")
            },
            blob: function() {
                return Ve({
                    _args: arguments
                }, "blog")
            },
            post: function(t) {
                var e = t.url
                  , n = t.body
                  , r = t.cb
                  , o = t.error;
                if (e)
                    return Le({
                        url: e,
                        cb: r,
                        error: o,
                        body: n || null,
                        type: "json"
                    });
                var i = arguments;
                return Le({
                    url: i[0],
                    body: i[1] || null,
                    cb: i[2],
                    error: i[3],
                    type: "json"
                })
            }
        }
    };
    function ke(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function Ue(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a)
              , u = c.value
        } catch (t) {
            return void n(t)
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o)
    }
    function De(t) {
        return function() {
            var e = this
              , n = arguments;
            return new Promise((function(r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    Ue(i, r, o, a, c, "next", t)
                }
                function c(t) {
                    Ue(i, r, o, a, c, "throw", t)
                }
                a(void 0)
            }
            ))
        }
    }
    var Re = Dt.apply();
    function He(t) {
        return ze.apply(this, arguments)
    }
    function ze() {
        return (ze = De(regeneratorRuntime.mark((function t(e) {
            return regeneratorRuntime.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.abrupt("return", new Promise((function(t) {
                            return setTimeout(t, e)
                        }
                        )));
                    case 1:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        )))).apply(this, arguments)
    }
    Re.pc && window.innerWidth < b && (void 0,
    document.querySelector("meta[name=viewport]").setAttribute("content", "width=".concat(1e3))),
    false && (Vue.config.productionTip = !1),
    he();
    var Fe = {
        _intl: mt,
        compile: rt,
        env: Re,
        geo: q,
        hashjump: ie,
        object: Wt,
        on: x,
        options: I,
        page: Ot,
        path: D,
        preserve: le,
        rosetta: bt,
        screen: M,
        scroll: ne,
        store: null,
        u: W,
        version: "0.13.11",
        wait: He,
        use: function(t) {
            var e = t.name;
            t.methods && Object.assign(Fe, ke({}, e, t.methods)),
            t.computed && Vue.mixin({
                computed: t.computed
            }),
            t.store && (mt.stores[e] = t.store)
        }
    };
    Vue.mixin({
        computed: {
            $env: function() {
                return Re
            },
            $page: function() {
                return g
            },
            $rosetta: function() {
                return bt.list
            },
            $scroll: function() {
                return ne.vm
            },
            $breadcrumb: fe,
            z: function() {
                return Fe
            },
            $pc: function() {
                return M.pc
            },
            $sp: function() {
                return M.sp
            },
            $screen: function() {
                return M
            }
        }
    }),
    Fe.use(Pe),
    Fe.use($e),
    window.z = Fe
}
]);
