//! ©SEGA
!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var a = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(a.exports, a, a.exports, n),
        a.l = !0,
        a.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
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
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var a in t)
                n.d(i, a, function(e) {
                    return t[e]
                }
                .bind(null, a));
        return i
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
    n(n.s = 4)
}([function(t, e) {
    t.exports = "<tag name=banners> <div class=topButtons> <template v-if=$pc> <div class=topButtons-left> <el-link class=topButtons-profileMaker to=/profile-maker/ v-text=\"'SUN稼働記念！ CHUNITHMプロフィールカードmini'\"/> <el-link class=topButtons-aime to=/play/ v-text=\"'新規Aimeで初回プレイ無料'\"/> <el-link class=topButtons-ssl to=https://chunithm.sega.jp/irodorimidori/club_ssl/ v-text=\"'CLUB SSL'\"/> </div> <div class=topButtons-right> <el-link class=topButtons-play to=/play/luminous/ v-text=\"'CHUNITHM LUMINOUSの新要素'\"/> <el-link class=topButtons-contest5th to=https://chunithm-special.sega.jp/ target=_blank v-text=\"'第五回 オリジナル楽曲コンテスト 開催!!'\"/> <el-link class=topButtons-kop to=https://maimai.sega.jp/kop5th/ target=_blank v-text=\"'KING OF PERFORMAI THE 5TH セガ音ゲー公式全国大会'\"/> <chuniNewMusicList class=topButtons-music /> </div> </template> <template v-if=$sp> <el-link class=topButtons-contest5th to=https://chunithm-special.sega.jp/ target=_blank v-text=\"'第五回 オリジナル楽曲コンテスト 開催!!'\"/> <el-link class=topButtons-kop to=https://maimai.sega.jp/kop5th/ target=_blank v-text=\"'KING OF PERFORMAI THE 5TH セガ音ゲー公式全国大会'\"/> <div class=topButtons-row> <chuniNewMusicList class=topButtons-music /> <el-link class=topButtons-profileMaker to=/profile-maker/ v-text=\"'SUN稼働記念！ CHUNITHMプロフィールカードmini'\"/> </div> <el-link class=topButtons-aime to=/play/ v-text=\"'新規Aimeで初回プレイ無料'\"/> <el-link class=topButtons-ssl to=https://chunithm.sega.jp/irodorimidori/club_ssl/ v-text=\"'CLUB SSL'\"/> <el-link class=topButtons-play to=/play/luminous/ v-text=\"'CHUNITHM LUMINOUSの新要素'\"/> </template> </div> </tag> "
}
, function(t, e) {
    t.exports = '<tag name=otherSiteBanners props=links> <div class=otherSiteBanners> <ul> <li v-for="banner in links" :class=banner.class> <el-link :to=banner.href target=_blank v-text=banner.text /> </li> </ul> </div> </tag>'
}
, function(t, e) {
    t.exports = "<tag name=carousel props=list,type> <div class=carouselListWrapper> <div class=carouselList> <el-carousel :bind=type :data=list skin=my-carousel :design=\"{\r\n                prev: '‹',\r\n                next: '›',\r\n        \r\n                duration: 1000,\r\n                distance: 110,\r\n                fade: 0.9,\r\n                zoom: 0,\r\n                auto: 5000,\r\n              }\"/> </div> </div> </tag>"
}
, function(t, e) {
    t.exports = '<chuniMainBg> <section class=topCharacter> <template v-if=$env.pc> <img class=topCharacter-img src=/storage/top/pc/top_main_chara.png alt=""/> <h1 class=topCharacter-logo> <img src=/storage/top/pc/top_main_logo.png alt="CHUNITHM Luminous チュウニズム ルミナス"/> </h1> </template> <template v-else> <img class=topCharacter-img src=/storage/top/sp/top_main_chara.png alt=""/> <h1 class=topCharacter-logo> <img src=/storage/top/sp/top_main_logo.png alt="CHUNITHM Luminous チュウニズム ルミナス"/> </h1> </template> <div class=bannerWrapper> <banners/> </div> </section> <chuniSearchStore2/> <div class=infoBanner> <el-link class=infoBanner-net to=https://new.chunithm-net.com/ v-text="\'CHUNITHM-NET\'"/> <el-link class=infoBanner-line to="https://page.line.me/kcg7138o?openQrModal=true" v-text="\'CHUNITHM 公式LINE\'"/> </div> <template v-if=filteredBanners> <carousel :type=carousel2 :list=filteredBanners /> </template> <div class=PageTitleBar-bg> <chuniPageTitleBar text=ニュース en=NEWS hideBreadcrumb topPage/> </div> <div v-if="NewsList.length > 0" class=topNewsLatestWrapper> <div class=topNewsLatestWrapper-inner> <a :href=item.permalink class=topNewsLink v-for="(item,index) in NewsList" :key=index> <chuniCommonBox type=topNewsLatest :date=newsIcon(item.date) :title=item.title> <div class=topNewsLatest-thumbnail> <el-img :src=item.thumbnail alt=item.title /> </div> </chuniCommonBox> </a> </div> </div> <div class=topContentsLink> <chuniBtn color=red class=""> <el-link to=https://info-chunithm.sega.jp/ >ニュースをもっと見る</el-link> </chuniBtn> </div> <div class=PageTitleBar-bg> <chuniPageTitleBar text=キャラクター en=CHARACTER hideBreadcrumb topPage/> </div> <div class=topCharaListWrapper> <div class=topCharaListInner> <ul class="" :style=topCharaWidth> <li v-for="(item, i) in newCharaList" class=topCharaListInner-list :key=i> <a :href="`/character/#/${item.page}/${item.name2}`" class=event-top-character> <chuniCharaListBg :chara=item /> </a> </li> </ul> </div> <template v-if="$env.pc && newCharaList.length > 3"> <button @click=moveCharaceter(1) class="topCharaButton next" :class=disabledNext> <i class=arrow-right /> </button> <button @click=moveCharaceter(-1) class="topCharaButton prev" :class=disabledPrev> <i class=arrow-left /> </button> </template> </div> <div class=topContentsLink> <chuniBtn color=red class=""> <el-link to=/character/ >キャラクターをもっと見る</el-link> </chuniBtn> </div> <div class=PageTitleBar-bg> <chuniPageTitleBar text="X (Twitter)" en="OFFICIAL SNS" hideBreadcrumb topPage/> </div> <div class=topTwitterWrapper> <div class=topContentsLink> <chuniBtn color=twitter class=""> <el-link to=https://twitter.com/chunithm>CHUNITHM<br v-if=$env.sp />公式X (Twitter)</el-link> </chuniBtn> <chuniBtn color=twitter class=""> <el-link to=https://twitter.com/performai>ゲキチュウマイ<br v-if=$env.sp />公式X (Twitter)</el-link> </chuniBtn> </div> </div> <otherSiteBanners :links=otherSiteLinks /> </chuniMainBg> '
}
, function(t, e, n) {
    "use strict";
    function i(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)))
                return;
            var n = []
              , i = !0
              , a = !1
              , r = void 0;
            try {
                for (var s, o = t[Symbol.iterator](); !(i = (s = o.next()).done) && (n.push(s.value),
                !e || n.length !== e); i = !0)
                    ;
            } catch (t) {
                a = !0,
                r = t
            } finally {
                try {
                    i || null == o.return || o.return()
                } finally {
                    if (a)
                        throw r
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    n.r(e);
    var a = {
        components: [n(0), n(1), n(2)],
        data: {
            NewsList: [],
            carousel2: new z.Carousel,
            newCharaList: [],
            charaBoxSize: 0,
            imageIndex: 1,
            position: 0,
            MaxPageIndex: 0,
            otherSiteLinks: [],
            latitude: "?",
            longitude: "?",
            restapi: [],
            currentDate: new Date
        },
        computed: {
            topCharaWidth: function() {
                if (0 !== this.newCharaList.length) {
                    var t = this.newCharaList.length
                      , e = this.$env.pc ? 50 : 10;
                    return (this.$env.pc && t <= 3 || this.$env.sp && t <= 1) && (e = 0),
                    this.charaBoxSize = this.$env.pc ? 264 : 210,
                    {
                        width: this.charaBoxSize * t + e + "px",
                        transition: "500ms",
                        transform: "translate3d(".concat(-1 * this.charaBoxSize * this.position, "px, 0, 0) "),
                        margin: "0 auto",
                        paddingLeft: "".concat(e, "px")
                    }
                }
            },
            disabledNext: function() {
                if (this.imageIndex === this.MaxPageIndex - 2)
                    return "disabled"
            },
            disabledPrev: function() {
                if (this.imageIndex <= 1)
                    return "disabled"
            },
            filteredBanners: function() {
                var t = this;
                if (0 === !this.restapi.length)
                    return !1;
                return this.restapi.filter((function(e) {
                    if (e.banner_deadline[0]) {
                        var n = i(e.banner_deadline[0].split(/-|\s|:/), 5)
                          , a = n[0]
                          , r = n[1]
                          , s = n[2]
                          , o = n[3]
                          , l = n[4]
                          , c = new Date(a,r - 1,s,o,l);
                        if (t.currentDate < c)
                            return e
                    }
                }
                )).map((function(t) {
                    return {
                        image: t.image,
                        url: t.banner_link[0],
                        text: t.title
                    }
                }
                ))
            }
        },
        methods: {
            moveCharaceter: function(t) {
                this.imageIndex = this.imageIndex + t;
                var e = this.MaxPageIndex
                  , n = this.MaxPageIndex - 1;
                if (0 !== this.imageIndex && this.imageIndex < n)
                    return this.position = (this.imageIndex - 1) % e
            },
            newsIcon: function(t) {
                var e = String(t)
                  , n = e.substr(0, 4)
                  , i = e.match(/年(.*)月/)
                  , a = e.match(/月(.*)日/)
                  , r = ("00" + i[1]).slice(-2)
                  , s = ("00" + a[1]).slice(-2);
                return "".concat(n, ".").concat(r, ".").concat(s, "up")
            }
        },
        mounted: function() {
            var t = this;
            fetch("https://chunithm.evilleaker.com/wp-json/thistheme/v1/articlesRest").then((function(t) {
                return t.json()
            }
            )).then((function(e) {
                return t.NewsList = e.filter((function(t, e) {
                    return e < 3
                }
                ))
            }
            )),
            fetch("storage/json/chara.json").then((function(t) {
                return t.json()
            }
            )).then((function(e) {
                return t.newCharaList = e.filter((function(t, e) {
                    return t.new
                }
                )),
                t.newCharaList.forEach((function(t) {
                    t.name2 = t.name.replace(/\s+/g, "")
                }
                )),
                t.MaxPageIndex = t.newCharaList.length,
                t.topCharaWidth
            }
            )),
            fetch("$site/data/otherSiteBanner.json").then((function(t) {
                return t.json()
            }
            )).then((function(e) {
                return t.otherSiteLinks = e
            }
            )),
            fetch("https://chunithm.evilleaker.com/wp-json/thistheme/v2/chunithm_banner01").then((function(t) {
                return t.json()
            }
            )).then((function(e) {
                return void 0,
                t.restapi = e
            }
            ))
        }
    };
    a.template = n(3),
    z.page(a)
}
]);
