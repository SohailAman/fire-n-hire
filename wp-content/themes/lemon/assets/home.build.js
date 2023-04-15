! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/wp-content/themes/lemon/assets/", n(n.s = 87)
}({
    0: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        var o = function(e) {
            var t = e.element,
                n = e.marginValue,
                o = void 0 === n ? 400 : n,
                r = e.thresholdValue,
                c = void 0 === r ? 0 : r,
                a = e.callback,
                i = void 0 === a ? function() {} : a;
            if (t && "string" == typeof t) {
                var l = document.querySelectorAll(t),
                    u = {
                        rootMargin: "".concat(o, "px 0px ").concat(o, "px 0px"),
                        threshold: c
                    },
                    s = new IntersectionObserver((function(e, t) {
                        e.forEach((function(e) {
                            e.isIntersecting && (t.unobserve(e.target), i(e.target))
                        }))
                    }), u);
                l && [].slice.call(l).forEach((function(e) {
                    s.observe(e)
                }))
            }
        }
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        var o = window.deployHash && "string" == typeof window.deployHash && "" !== window.deployHash ? window.deployHash : "",
            r = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.getElementsByTagName("body")[0],
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return new Promise((function(c, a) {
                    if (e && "string" == typeof e) {
                        var i = o ? "?v=".concat(o) : "",
                            l = e + i;
                        if (document.querySelector('script[src="'.concat(l, '"]'))) c();
                        else {
                            var u = document.createElement("script");
                            u.async = n, u.defer = r;
                            var s = function(e, t) {
                                (t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = null, u.onreadystatechange = null, u = void 0, t ? a() : c())
                            };
                            u.onload = s, u.onreadystatechange = s, u.src = l, t.appendChild(u)
                        }
                    }
                }))
            }
    },
    87: function(e, t, n) {
        "use strict";
        n.r(t);
        n(88);
        var o = n(0),
            r = n(3);

        function c(e) {
            var t = document.querySelector(e);
            t && t.addEventListener("click", (function(e) {
                dataLayer.push({
                    event: e.target.innerText.trim().split(" ").join("_")
                })
            }))
        }
        Object(o.a)({
            element: ".home-features",
            callback: function() {
                $(".slider-mobile").slick({
                    infinite: !0,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1,
                    dots: !0
                })
            }
        }), Object(o.a)({
            element: ".video-slider",
            callback: function() {
                $(".video-slider").slick({
                    infinite: !0,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: !1,
                    dots: !1,
                    responsive: [{
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            dots: !0
                        }
                    }]
                })
            }
        }), Object(o.a)({
            element: ".home-restore",
            callback: function() {
                return Object(r.a)("/wp-content/themes/lemon/assets/pop-up.build.js")
            }
        }), Object(o.a)({
            element: ".faq-main-page",
            callback: function() {
                document.querySelectorAll(".faq-main-page .faq-item .faq-title").forEach((function(e) {
                    e.addEventListener("click", (function(e) {
                        var t = e.target.classList;
                        t.contains("open") ? t.remove("open") : t.add("open")
                    }))
                }))
            }
        }), Object(o.a)({
            element: "#home-resume-cta",
            callback: function() {
                return c("#home-resume-cta")
            }
        }), Object(o.a)({
            element: "#home-startup-cta",
            callback: function() {
                return c("#home-startup-cta")
            }
        }), Object(o.a)({
            element: "#home-suit-cta",
            callback: function() {
                return c("#home-suit-cta")
            }
        })
    },
    88: function(e, t, n) {}
});