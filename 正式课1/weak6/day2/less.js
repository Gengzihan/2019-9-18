/**
 * Less - Leaner CSS v3.10.0-beta
 * http://lesscss.org
 * 
 * Copyright (c) 2009-2019, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache-2.0 License.
 *
 * @license Apache-2.0
 */
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).less = t()
}(this, function () {
    "use strict";

    function e(e) {
        return e.replace(/^[a-z-]+:\/+?[^\/]+/, "").replace(/[\?\&]livereload=\w+/, "").replace(/^\//, "").replace(/\.[a-zA-Z]+$/, "").replace(/[^\.\w-]+/g, "-").replace(/\./g, ":")
    }

    function t(e, t) {
        for (var n in t.dataset)
            if (t.dataset.hasOwnProperty(n))
                if ("env" === n || "dumpLineNumbers" === n || "rootpath" === n || "errorReporting" === n) e[n] = t.dataset[n];
                else try {
                    e[n] = JSON.parse(t.dataset[n])
                } catch (e) {}
    }
    var n = {
        createCSS: function (t, n, i) {
            var r = i.href || "",
                a = "less:".concat(i.title || e(r)),
                s = t.getElementById(a),
                o = !1,
                l = t.createElement("style");
            l.setAttribute("type", "text/css"), i.media && l.setAttribute("media", i.media), l.id = a, l.styleSheet || (l.appendChild(t.createTextNode(n)), o = null !== s && s.childNodes.length > 0 && l.childNodes.length > 0 && s.firstChild.nodeValue === l.firstChild.nodeValue);
            var u = t.getElementsByTagName("head")[0];
            if (null === s || !1 === o) {
                var c = i && i.nextSibling || null;
                c ? c.parentNode.insertBefore(l, c) : u.appendChild(l)
            }
            if (s && !1 === o && s.parentNode.removeChild(s), l.styleSheet) try {
                l.styleSheet.cssText = n
            } catch (e) {
                throw new Error("Couldn't reassign styleSheet.cssText.")
            }
        },
        currentScript: function (e) {
            var t, n = e.document;
            return n.currentScript || (t = n.getElementsByTagName("script"))[t.length - 1]
        }
    };

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function s(e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e
    }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && u(e, t)
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function u(e, t) {
        return (u = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function c(e, t, n) {
        return (c = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }() ? Reflect.construct : function (e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            var r = new(Function.bind.apply(e, i));
            return n && u(r, n.prototype), r
        }).apply(null, arguments)
    }

    function h(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? h(e) : t
    }

    function p(e) {
        return function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var v = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgrey: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            grey: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        },
        d = {
            length: {
                m: 1,
                cm: .01,
                mm: .001,
                in: .0254,
                px: .0254 / 96,
                pt: .0254 / 72,
                pc: .0254 / 72 * 12
            },
            duration: {
                s: 1,
                ms: .001
            },
            angle: {
                rad: 1 / (2 * Math.PI),
                deg: 1 / 360,
                grad: .0025,
                turn: 1
            }
        },
        m = {
            colors: v,
            unitConversions: d
        },
        g = function () {
            function e() {
                r(this, e), this.parent = null, this.visibilityBlocks = void 0, this.nodeVisible = void 0, this.rootNode = null, this.parsed = null;
                var t = this;
                Object.defineProperty(this, "currentFileInfo", {
                    get: function () {
                        return t.fileInfo()
                    }
                }), Object.defineProperty(this, "index", {
                    get: function () {
                        return t.getIndex()
                    }
                })
            }
            return s(e, [{
                key: "setParent",
                value: function (t, n) {
                    function i(t) {
                        t && t instanceof e && (t.parent = n)
                    }
                    Array.isArray(t) ? t.forEach(i) : i(t)
                }
            }, {
                key: "getIndex",
                value: function () {
                    return this._index || this.parent && this.parent.getIndex() || 0
                }
            }, {
                key: "fileInfo",
                value: function () {
                    return this._fileInfo || this.parent && this.parent.fileInfo() || {}
                }
            }, {
                key: "isRulesetLike",
                value: function () {
                    return !1
                }
            }, {
                key: "toCSS",
                value: function (e) {
                    var t = [];
                    return this.genCSS(e, {
                        add: function (e, n, i) {
                            t.push(e)
                        },
                        isEmpty: function () {
                            return 0 === t.length
                        }
                    }), t.join("")
                }
            }, {
                key: "genCSS",
                value: function (e, t) {
                    t.add(this.value)
                }
            }, {
                key: "accept",
                value: function (e) {
                    this.value = e.visit(this.value)
                }
            }, {
                key: "eval",
                value: function () {
                    return this
                }
            }, {
                key: "_operate",
                value: function (e, t, n, i) {
                    switch (t) {
                        case "+":
                            return n + i;
                        case "-":
                            return n - i;
                        case "*":
                            return n * i;
                        case "/":
                            return n / i
                    }
                }
            }, {
                key: "fround",
                value: function (e, t) {
                    var n = e && e.numPrecision;
                    return n ? Number((t + 2e-16).toFixed(n)) : t
                }
            }, {
                key: "blocksVisibility",
                value: function () {
                    return null == this.visibilityBlocks && (this.visibilityBlocks = 0), 0 !== this.visibilityBlocks
                }
            }, {
                key: "addVisibilityBlock",
                value: function () {
                    null == this.visibilityBlocks && (this.visibilityBlocks = 0), this.visibilityBlocks = this.visibilityBlocks + 1
                }
            }, {
                key: "removeVisibilityBlock",
                value: function () {
                    null == this.visibilityBlocks && (this.visibilityBlocks = 0), this.visibilityBlocks = this.visibilityBlocks - 1
                }
            }, {
                key: "ensureVisibility",
                value: function () {
                    this.nodeVisible = !0
                }
            }, {
                key: "ensureInvisibility",
                value: function () {
                    this.nodeVisible = !1
                }
            }, {
                key: "isVisible",
                value: function () {
                    return this.nodeVisible
                }
            }, {
                key: "visibilityInfo",
                value: function () {
                    return {
                        visibilityBlocks: this.visibilityBlocks,
                        nodeVisible: this.nodeVisible
                    }
                }
            }, {
                key: "copyVisibilityInfo",
                value: function (e) {
                    e && (this.visibilityBlocks = e.visibilityBlocks, this.nodeVisible = e.nodeVisible)
                }
            }]), e
        }();
    g.compare = function (e, t) {
        if (e.compare && "Quoted" !== t.type && "Anonymous" !== t.type) return e.compare(t);
        if (t.compare) return -t.compare(e);
        if (e.type === t.type) {
            if (e = e.value, t = t.value, !Array.isArray(e)) return e === t ? 0 : void 0;
            if (e.length === t.length) {
                for (var n = 0; n < e.length; n++)
                    if (0 !== g.compare(e[n], t[n])) return;
                return 0
            }
        }
    }, g.numericCompare = function (e, t) {
        return e < t ? -1 : e === t ? 0 : e > t ? 1 : void 0
    };
    var y = function (e) {
        function t(e, n, i) {
            var a;
            r(this, t);
            var s = h(a = f(this, l(t).call(this)));
            return Array.isArray(e) ? a.rgb = e : e.length >= 6 ? (a.rgb = [], e.match(/.{2}/g).map(function (e, t) {
                t < 3 ? s.rgb.push(parseInt(e, 16)) : s.alpha = parseInt(e, 16) / 255
            })) : (a.rgb = [], e.split("").map(function (e, t) {
                t < 3 ? s.rgb.push(parseInt(e + e, 16)) : s.alpha = parseInt(e + e, 16) / 255
            })), a.alpha = a.alpha || ("number" == typeof n ? n : 1), void 0 !== i && (a.value = i), a
        }
        return o(t, g), s(t, [{
            key: "luma",
            value: function () {
                var e = this.rgb[0] / 255,
                    t = this.rgb[1] / 255,
                    n = this.rgb[2] / 255;
                return .2126 * (e = e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (t = t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .0722 * (n = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4))
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                t.add(this.toCSS(e))
            }
        }, {
            key: "toCSS",
            value: function (e, t) {
                var n, i, r, a = e && e.compress && !t,
                    s = [];
                if (i = this.fround(e, this.alpha), this.value)
                    if (0 === this.value.indexOf("rgb")) i < 1 && (r = "rgba");
                    else {
                        if (0 !== this.value.indexOf("hsl")) return this.value;
                        r = i < 1 ? "hsla" : "hsl"
                    }
                else i < 1 && (r = "rgba");
                switch (r) {
                    case "rgba":
                        s = this.rgb.map(function (e) {
                            return b(Math.round(e), 255)
                        }).concat(b(i, 1));
                        break;
                    case "hsla":
                        s.push(b(i, 1));
                    case "hsl":
                        n = this.toHSL(), s = [this.fround(e, n.h), "".concat(this.fround(e, 100 * n.s), "%"), "".concat(this.fround(e, 100 * n.l), "%")].concat(s)
                }
                if (r) return "".concat(r, "(").concat(s.join(",".concat(a ? "" : " ")), ")");
                if (n = this.toRGB(), a) {
                    var o = n.split("");
                    o[1] === o[2] && o[3] === o[4] && o[5] === o[6] && (n = "#".concat(o[1]).concat(o[3]).concat(o[5]))
                }
                return n
            }
        }, {
            key: "operate",
            value: function (e, n, i) {
                for (var r = new Array(3), a = this.alpha * (1 - i.alpha) + i.alpha, s = 0; s < 3; s++) r[s] = this._operate(e, n, this.rgb[s], i.rgb[s]);
                return new t(r, a)
            }
        }, {
            key: "toRGB",
            value: function () {
                return w(this.rgb)
            }
        }, {
            key: "toHSL",
            value: function () {
                var e, t, n = this.rgb[0] / 255,
                    i = this.rgb[1] / 255,
                    r = this.rgb[2] / 255,
                    a = this.alpha,
                    s = Math.max(n, i, r),
                    o = Math.min(n, i, r),
                    l = (s + o) / 2,
                    u = s - o;
                if (s === o) e = t = 0;
                else {
                    switch (t = l > .5 ? u / (2 - s - o) : u / (s + o), s) {
                        case n:
                            e = (i - r) / u + (i < r ? 6 : 0);
                            break;
                        case i:
                            e = (r - n) / u + 2;
                            break;
                        case r:
                            e = (n - i) / u + 4
                    }
                    e /= 6
                }
                return {
                    h: 360 * e,
                    s: t,
                    l: l,
                    a: a
                }
            }
        }, {
            key: "toHSV",
            value: function () {
                var e, t, n = this.rgb[0] / 255,
                    i = this.rgb[1] / 255,
                    r = this.rgb[2] / 255,
                    a = this.alpha,
                    s = Math.max(n, i, r),
                    o = Math.min(n, i, r),
                    l = s,
                    u = s - o;
                if (t = 0 === s ? 0 : u / s, s === o) e = 0;
                else {
                    switch (s) {
                        case n:
                            e = (i - r) / u + (i < r ? 6 : 0);
                            break;
                        case i:
                            e = (r - n) / u + 2;
                            break;
                        case r:
                            e = (n - i) / u + 4
                    }
                    e /= 6
                }
                return {
                    h: 360 * e,
                    s: t,
                    v: l,
                    a: a
                }
            }
        }, {
            key: "toARGB",
            value: function () {
                return w([255 * this.alpha].concat(this.rgb))
            }
        }, {
            key: "compare",
            value: function (e) {
                return e.rgb && e.rgb[0] === this.rgb[0] && e.rgb[1] === this.rgb[1] && e.rgb[2] === this.rgb[2] && e.alpha === this.alpha ? 0 : void 0
            }
        }]), t
    }();

    function b(e, t) {
        return Math.min(Math.max(e, 0), t)
    }

    function w(e) {
        return "#".concat(e.map(function (e) {
            return ((e = b(Math.round(e), 255)) < 16 ? "0" : "") + e.toString(16)
        }).join(""))
    }
    y.prototype.type = "Color", y.fromKeyword = function (e) {
        var t, n = e.toLowerCase();
        if (v.hasOwnProperty(n) ? t = new y(v[n].slice(1)) : "transparent" === n && (t = new y([0, 0, 0], 0)), t) return t.value = e, t
    };
    var k = function (e) {
        function t(e) {
            var n;
            return r(this, t), (n = f(this, l(t).call(this))).value = e, n
        }
        return o(t, g), s(t, [{
            key: "genCSS",
            value: function (e, t) {
                t.add("("), this.value.genCSS(e, t), t.add(")")
            }
        }, {
            key: "eval",
            value: function (e) {
                return new t(this.value.eval(e))
            }
        }]), t
    }();
    k.prototype.type = "Paren";
    var x = {
            "": !0,
            " ": !0,
            "|": !0
        },
        S = function (e) {
            function t(e) {
                var n;
                return r(this, t), n = f(this, l(t).call(this)), " " === e ? (n.value = " ", n.emptyOrWhitespace = !0) : (n.value = e ? e.trim() : "", n.emptyOrWhitespace = "" === n.value), n
            }
            return o(t, g), s(t, [{
                key: "genCSS",
                value: function (e, t) {
                    var n = e.compress || x[this.value] ? "" : " ";
                    t.add(n + this.value + n)
                }
            }]), t
        }();
    S.prototype.type = "Combinator";
    var I = function (e) {
        function t(e, n, i, a, s, o) {
            var u;
            return r(this, t), (u = f(this, l(t).call(this))).combinator = e instanceof S ? e : new S(e), u.value = "string" == typeof n ? n.trim() : n || "", u.isVariable = i, u._index = a, u._fileInfo = s, u.copyVisibilityInfo(o), u.setParent(u.combinator, h(u)), u
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                var t = this.value;
                this.combinator = e.visit(this.combinator), "object" === i(t) && (this.value = e.visit(t))
            }
        }, {
            key: "eval",
            value: function (e) {
                return new t(this.combinator, this.value.eval ? this.value.eval(e) : this.value, this.isVariable, this.getIndex(), this.fileInfo(), this.visibilityInfo())
            }
        }, {
            key: "clone",
            value: function () {
                return new t(this.combinator, this.value, this.isVariable, this.getIndex(), this.fileInfo(), this.visibilityInfo())
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                t.add(this.toCSS(e), this.fileInfo(), this.getIndex())
            }
        }, {
            key: "toCSS",
            value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = this.value,
                    n = e.firstSelector;
                return t instanceof k && (e.firstSelector = !0), t = t.toCSS ? t.toCSS(e) : t, e.firstSelector = n, "" === t && "&" === this.combinator.value.charAt(0) ? "" : this.combinator.toCSS(e) + t
            }
        }]), t
    }();
    I.prototype.type = "Element";
    var C = {
            ALWAYS: 0,
            PARENS_DIVISION: 1,
            PARENS: 2,
            STRICT_LEGACY: 3
        },
        _ = {
            OFF: 0,
            LOCAL: 1,
            ALL: 2
        };
    var A = function (e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }(function (e) {
        var t = function () {
            function e(e, t) {
                return null != t && e instanceof t
            }
            var t, n, i;
            try {
                t = Map
            } catch (e) {
                t = function () {}
            }
            try {
                n = Set
            } catch (e) {
                n = function () {}
            }
            try {
                i = Promise
            } catch (e) {
                i = function () {}
            }

            function r(a, o, l, u, c) {
                "object" == typeof o && (l = o.depth, u = o.prototype, c = o.includeNonEnumerable, o = o.circular);
                var h = [],
                    f = [],
                    p = "undefined" != typeof Buffer;
                return void 0 === o && (o = !0), void 0 === l && (l = 1 / 0),
                    function a(l, v) {
                        if (null === l) return null;
                        if (0 === v) return l;
                        var d, m;
                        if ("object" != typeof l) return l;
                        if (e(l, t)) d = new t;
                        else if (e(l, n)) d = new n;
                        else if (e(l, i)) d = new i(function (e, t) {
                            l.then(function (t) {
                                e(a(t, v - 1))
                            }, function (e) {
                                t(a(e, v - 1))
                            })
                        });
                        else if (r.__isArray(l)) d = [];
                        else if (r.__isRegExp(l)) d = new RegExp(l.source, s(l)), l.lastIndex && (d.lastIndex = l.lastIndex);
                        else if (r.__isDate(l)) d = new Date(l.getTime());
                        else {
                            if (p && Buffer.isBuffer(l)) return d = Buffer.allocUnsafe ? Buffer.allocUnsafe(l.length) : new Buffer(l.length), l.copy(d), d;
                            e(l, Error) ? d = Object.create(l) : void 0 === u ? (m = Object.getPrototypeOf(l), d = Object.create(m)) : (d = Object.create(u), m = u)
                        }
                        if (o) {
                            var g = h.indexOf(l);
                            if (-1 != g) return f[g];
                            h.push(l), f.push(d)
                        }
                        for (var y in e(l, t) && l.forEach(function (e, t) {
                                var n = a(t, v - 1),
                                    i = a(e, v - 1);
                                d.set(n, i)
                            }), e(l, n) && l.forEach(function (e) {
                                var t = a(e, v - 1);
                                d.add(t)
                            }), l) {
                            var b;
                            m && (b = Object.getOwnPropertyDescriptor(m, y)), b && null == b.set || (d[y] = a(l[y], v - 1))
                        }
                        if (Object.getOwnPropertySymbols) {
                            var w = Object.getOwnPropertySymbols(l);
                            for (y = 0; y < w.length; y++) {
                                var k = w[y];
                                (!(S = Object.getOwnPropertyDescriptor(l, k)) || S.enumerable || c) && (d[k] = a(l[k], v - 1), S.enumerable || Object.defineProperty(d, k, {
                                    enumerable: !1
                                }))
                            }
                        }
                        if (c) {
                            var x = Object.getOwnPropertyNames(l);
                            for (y = 0; y < x.length; y++) {
                                var S, I = x[y];
                                (S = Object.getOwnPropertyDescriptor(l, I)) && S.enumerable || (d[I] = a(l[I], v - 1), Object.defineProperty(d, I, {
                                    enumerable: !1
                                }))
                            }
                        }
                        return d
                    }(a, l)
            }

            function a(e) {
                return Object.prototype.toString.call(e)
            }

            function s(e) {
                var t = "";
                return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), t
            }
            return r.clonePrototype = function (e) {
                if (null === e) return null;
                var t = function () {};
                return t.prototype = e, new t
            }, r.__objToStr = a, r.__isDate = function (e) {
                return "object" == typeof e && "[object Date]" === a(e)
            }, r.__isArray = function (e) {
                return "object" == typeof e && "[object Array]" === a(e)
            }, r.__isRegExp = function (e) {
                return "object" == typeof e && "[object RegExp]" === a(e)
            }, r.__getRegExpFlags = s, r
        }();
        e.exports && (e.exports = t)
    });

    function M(e, t) {
        for (var n = e + 1, i = null, r = -1; --n >= 0 && "\n" !== t.charAt(n);) r++;
        return "number" == typeof e && (i = (t.slice(0, e).match(/\n/g) || "").length), {
            line: i,
            column: r
        }
    }

    function P(e) {
        var t, n = e.length,
            i = new Array(n);
        for (t = 0; t < n; t++) i[t] = e[t];
        return i
    }

    function E(e) {
        var t = {};
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }

    function R(e, t) {
        var n = t || {};
        if (!t._defaults) {
            n = {};
            var i = A(e);
            n._defaults = i;
            var r = t ? A(t) : {};
            Object.assign(n, i, r)
        }
        return n
    }

    function O(e, t) {
        if (t && t._defaults) return t;
        var n = R(e, t);
        if (n.strictMath && (n.math = C.STRICT_LEGACY), n.relativeUrls && (n.rewriteUrls = _.ALL), "string" == typeof n.math) switch (n.math.toLowerCase()) {
            case "always":
                n.math = C.ALWAYS;
                break;
            case "parens-division":
                n.math = C.PARENS_DIVISION;
                break;
            case "strict":
            case "parens":
                n.math = C.PARENS;
                break;
            case "strict-legacy":
                n.math = C.STRICT_LEGACY
        }
        if ("string" == typeof n.rewriteUrls) switch (n.rewriteUrls.toLowerCase()) {
            case "off":
                n.rewriteUrls = _.OFF;
                break;
            case "local":
                n.rewriteUrls = _.LOCAL;
                break;
            case "all":
                n.rewriteUrls = _.ALL
        }
        return n
    }

    function F(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = 0, i = e.length; n < i; n++) {
            var r = e[n];
            Array.isArray(r) ? F(r, t) : void 0 !== r && t.push(r)
        }
        return t
    }
    var V = Object.freeze({
            getLocation: M,
            copyArray: P,
            clone: E,
            defaults: R,
            copyOptions: O,
            merge: function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            },
            flattenArray: F
        }),
        $ = function (e, t, n) {
            Error.call(this);
            var i = e.filename || n;
            if (this.message = e.message, this.stack = e.stack, t && i) {
                var r = t.contents[i],
                    a = M(e.index, r),
                    s = a.line,
                    o = a.column,
                    l = e.call && M(e.call, r).line,
                    u = r ? r.split("\n") : "";
                if (this.type = e.type || "Syntax", this.filename = i, this.index = e.index, this.line = "number" == typeof s ? s + 1 : null, this.column = o, !this.line && this.stack) {
                    var c = this.stack.match(/(<anonymous>|Function):(\d+):(\d+)/);
                    c && (c[2] && (this.line = parseInt(c[2]) - 2), c[3] && (this.column = parseInt(c[3])))
                }
                this.callLine = l + 1, this.callExtract = u[l], this.extract = [u[this.line - 2], u[this.line - 1], u[this.line]]
            }
        };
    if (void 0 === Object.create) {
        var L = function () {};
        L.prototype = Error.prototype, $.prototype = new L
    } else $.prototype = Object.create(Error.prototype);
    $.prototype.constructor = $, $.prototype.toString = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = "",
            n = this.extract || [],
            r = [],
            a = function (e) {
                return e
            };
        if (e.stylize) {
            var s = i(e.stylize);
            if ("function" !== s) throw Error("options.stylize should be a function, got a ".concat(s, "!"));
            a = e.stylize
        }
        if (null !== this.line) {
            if ("string" == typeof n[0] && r.push(a("".concat(this.line - 1, " ").concat(n[0]), "grey")), "string" == typeof n[1]) {
                var o = "".concat(this.line, " ");
                n[1] && (o += n[1].slice(0, this.column) + a(a(a(n[1].substr(this.column, 1), "bold") + n[1].slice(this.column + 1), "red"), "inverse")), r.push(o)
            }
            "string" == typeof n[2] && r.push(a("".concat(this.line + 1, " ").concat(n[2]), "grey")), r = "".concat(r.join("\n") + a("", "reset"), "\n")
        }
        return t += a("".concat(this.type, "Error: ").concat(this.message), "red"), this.filename && (t += a(" in ", "red") + this.filename), this.line && (t += a(" on line ".concat(this.line, ", column ").concat(this.column + 1, ":"), "grey")), t += "\n".concat(r), this.callLine && (t += "".concat(a("from ", "red") + (this.filename || ""), "/n"), t += "".concat(a(this.callLine, "grey"), " ").concat(this.callExtract, "/n")), t
    };
    var D = function (e) {
        function t(e, n, i, a, s, o) {
            var u;
            return r(this, t), (u = f(this, l(t).call(this))).extendList = n, u.condition = i, u.evaldCondition = !i, u._index = a, u._fileInfo = s, u.elements = u.getElements(e), u.mixinElements_ = void 0, u.copyVisibilityInfo(o), u.setParent(u.elements, h(u)), u
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                this.elements && (this.elements = e.visitArray(this.elements)), this.extendList && (this.extendList = e.visitArray(this.extendList)), this.condition && (this.condition = e.visit(this.condition))
            }
        }, {
            key: "createDerived",
            value: function (e, n, i) {
                var r = new t(e = this.getElements(e), n || this.extendList, null, this.getIndex(), this.fileInfo(), this.visibilityInfo());
                return r.evaldCondition = null != i ? i : this.evaldCondition, r.mediaEmpty = this.mediaEmpty, r
            }
        }, {
            key: "getElements",
            value: function (e) {
                return e ? ("string" == typeof e && this.parse.parseNode(e, ["selector"], this._index, this._fileInfo, function (t, n) {
                    if (t) throw new $({
                        index: t.index,
                        message: t.message
                    }, this.parse.imports, this._fileInfo.filename);
                    e = n[0].elements
                }), e) : [new I("", "&", !1, this._index, this._fileInfo)]
            }
        }, {
            key: "createEmptySelectors",
            value: function () {
                var e = [new t([new I("", "&", !1, this._index, this._fileInfo)], null, null, this._index, this._fileInfo)];
                return e[0].mediaEmpty = !0, e
            }
        }, {
            key: "match",
            value: function (e) {
                var t, n, i = this.elements,
                    r = i.length;
                if (0 === (t = (e = e.mixinElements()).length) || r < t) return 0;
                for (n = 0; n < t; n++)
                    if (i[n].value !== e[n]) return 0;
                return t
            }
        }, {
            key: "mixinElements",
            value: function () {
                if (this.mixinElements_) return this.mixinElements_;
                var e = this.elements.map(function (e) {
                    return e.combinator.value + (e.value.value || e.value)
                }).join("").match(/[,&#\*\.\w-]([\w-]|(\\.))*/g);
                return e ? "&" === e[0] && e.shift() : e = [], this.mixinElements_ = e
            }
        }, {
            key: "isJustParentSelector",
            value: function () {
                return !this.mediaEmpty && 1 === this.elements.length && "&" === this.elements[0].value && (" " === this.elements[0].combinator.value || "" === this.elements[0].combinator.value)
            }
        }, {
            key: "eval",
            value: function (e) {
                var t = this.condition && this.condition.eval(e),
                    n = this.elements,
                    i = this.extendList;
                return n = n && n.map(function (t) {
                    return t.eval(e)
                }), i = i && i.map(function (t) {
                    return t.eval(e)
                }), this.createDerived(n, i, t)
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                var n;
                for (e && e.firstSelector || "" !== this.elements[0].combinator.value || t.add(" ", this.fileInfo(), this.getIndex()), n = 0; n < this.elements.length; n++) this.elements[n].genCSS(e, t)
            }
        }, {
            key: "getIsOutput",
            value: function () {
                return this.evaldCondition
            }
        }]), t
    }();
    D.prototype.type = "Selector";
    var N = function (e) {
        function t(e) {
            var n;
            if (r(this, t), n = f(this, l(t).call(this)), !e) throw new Error("Value requires an array argument");
            return Array.isArray(e) ? n.value = e : n.value = [e], n
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                this.value && (this.value = e.visitArray(this.value))
            }
        }, {
            key: "eval",
            value: function (e) {
                return 1 === this.value.length ? this.value[0].eval(e) : new t(this.value.map(function (t) {
                    return t.eval(e)
                }))
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                var n;
                for (n = 0; n < this.value.length; n++) this.value[n].genCSS(e, t), n + 1 < this.value.length && t.add(e && e.compress ? "," : ", ")
            }
        }]), t
    }();
    N.prototype.type = "Value";
    var j = function (e) {
        function t(e) {
            var n;
            return r(this, t), (n = f(this, l(t).call(this))).value = e, n
        }
        return o(t, g), s(t, [{
            key: "genCSS",
            value: function (e, t) {
                if ("%" === this.value) throw {
                    type: "Syntax",
                    message: "Invalid % without number"
                };
                t.add(this.value)
            }
        }]), t
    }();
    j.prototype.type = "Keyword", j.True = new j("true"), j.False = new j("false");
    var B = function (e) {
        function t(e, n, i, a, s, o) {
            var u;
            return r(this, t), (u = f(this, l(t).call(this))).value = e, u._index = n, u._fileInfo = i, u.mapLines = a, u.rulesetLike = void 0 !== s && s, u.allowRoot = !0, u.copyVisibilityInfo(o), u
        }
        return o(t, g), s(t, [{
            key: "eval",
            value: function () {
                return new t(this.value, this._index, this._fileInfo, this.mapLines, this.rulesetLike, this.visibilityInfo())
            }
        }, {
            key: "compare",
            value: function (e) {
                return e.toCSS && this.toCSS() === e.toCSS() ? 0 : void 0
            }
        }, {
            key: "isRulesetLike",
            value: function () {
                return this.rulesetLike
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                this.nodeVisible = Boolean(this.value), this.nodeVisible && t.add(this.value, this._fileInfo, this._index, this.mapLines)
            }
        }]), t
    }();
    B.prototype.type = "Anonymous";
    var U = C,
        q = function (e) {
            function t(e, n, i, a, s, o, u, c) {
                var p;
                return r(this, t), (p = f(this, l(t).call(this))).name = e, p.value = n instanceof g ? n : new N([n ? new B(n) : null]), p.important = i ? " ".concat(i.trim()) : "", p.merge = a, p._index = s, p._fileInfo = o, p.inline = u || !1, p.variable = void 0 !== c ? c : e.charAt && "@" === e.charAt(0), p.allowRoot = !0, p.setParent(p.value, h(p)), p
            }
            return o(t, g), s(t, [{
                key: "genCSS",
                value: function (e, t) {
                    t.add(this.name + (e.compress ? ":" : ": "), this.fileInfo(), this.getIndex());
                    try {
                        this.value.genCSS(e, t)
                    } catch (e) {
                        throw e.index = this._index, e.filename = this._fileInfo.filename, e
                    }
                    t.add(this.important + (this.inline || e.lastRule && e.compress ? "" : ";"), this._fileInfo, this._index)
                }
            }, {
                key: "eval",
                value: function (e) {
                    var n, i, r = !1,
                        a = this.name,
                        s = this.variable;
                    "string" != typeof a && (a = 1 === a.length && a[0] instanceof j ? a[0].value : function (e, t) {
                        var n, i = "",
                            r = t.length,
                            a = {
                                add: function (e) {
                                    i += e
                                }
                            };
                        for (n = 0; n < r; n++) t[n].eval(e).genCSS(e, a);
                        return i
                    }(e, a), s = !1), "font" === a && e.math === U.ALWAYS && (r = !0, n = e.math, e.math = U.PARENS_DIVISION);
                    try {
                        if (e.importantScope.push({}), i = this.value.eval(e), !this.variable && "DetachedRuleset" === i.type) throw {
                            message: "Rulesets cannot be evaluated on a property.",
                            index: this.getIndex(),
                            filename: this.fileInfo().filename
                        };
                        var o = this.important,
                            l = e.importantScope.pop();
                        return !o && l.important && (o = l.important), new t(a, i, o, this.merge, this.getIndex(), this.fileInfo(), this.inline, s)
                    } catch (e) {
                        throw "number" != typeof e.index && (e.index = this.getIndex(), e.filename = this.fileInfo().filename), e
                    } finally {
                        r && (e.math = n)
                    }
                }
            }, {
                key: "makeImportant",
                value: function () {
                    return new t(this.name, this.value, "!important", this.merge, this.getIndex(), this.fileInfo(), this.inline)
                }
            }]), t
        }();
    q.prototype.type = "Declaration";
    var T = function e(t, n, i) {
        var r = "";
        if (t.dumpLineNumbers && !t.compress) switch (t.dumpLineNumbers) {
            case "comments":
                r = e.asComment(n);
                break;
            case "mediaquery":
                r = e.asMediaQuery(n);
                break;
            case "all":
                r = e.asComment(n) + (i || "") + e.asMediaQuery(n)
        }
        return r
    };
    T.asComment = function (e) {
        return "/* line ".concat(e.debugInfo.lineNumber, ", ").concat(e.debugInfo.fileName, " */\n")
    }, T.asMediaQuery = function (e) {
        var t = e.debugInfo.fileName;
        return /^[a-z]+:\/\//i.test(t) || (t = "file://".concat(t)), "@media -sass-debug-info{filename{font-family:".concat(t.replace(/([.:\/\\])/g, function (e) {
            return "\\" == e && (e = "/"), "\\".concat(e)
        }), "}line{font-family:\\00003").concat(e.debugInfo.lineNumber, "}}\n")
    };
    var z = function (e) {
        function t(e, n, i, a) {
            var s;
            return r(this, t), (s = f(this, l(t).call(this))).value = e, s.isLineComment = n, s._index = i, s._fileInfo = a, s.allowRoot = !0, s
        }
        return o(t, g), s(t, [{
            key: "genCSS",
            value: function (e, t) {
                this.debugInfo && t.add(T(e, this), this.fileInfo(), this.getIndex()), t.add(this.value)
            }
        }, {
            key: "isSilent",
            value: function (e) {
                var t = e.compress && "!" !== this.value[2];
                return this.isLineComment || t
            }
        }]), t
    }();
    z.prototype.type = "Comment";
    var G = {},
        W = function (e, t, n) {
            if (e)
                for (var i = 0; i < n.length; i++) e.hasOwnProperty(n[i]) && (t[n[i]] = e[n[i]])
        },
        J = ["paths", "rewriteUrls", "rootpath", "strictImports", "insecure", "dumpLineNumbers", "compress", "syncImport", "chunkInput", "mime", "useFileCache", "processImports", "pluginManager"];
    G.Parse = function (e) {
        W(e, this, J), "string" == typeof this.paths && (this.paths = [this.paths])
    };
    var H = ["paths", "compress", "math", "strictUnits", "sourceMap", "importMultiple", "urlArgs", "javascriptEnabled", "pluginManager", "importantScope", "rewriteUrls"];

    function Q(e) {
        return !/^(?:[a-z-]+:|\/|#)/i.test(e)
    }

    function K(e) {
        return "." === e.charAt(0)
    }
    G.Eval = function () {
        function e(t, n) {
            r(this, e), W(t, this, H), "string" == typeof this.paths && (this.paths = [this.paths]), this.frames = n || [], this.importantScope = this.importantScope || [], this.inCalc = !1, this.mathOn = !0
        }
        return s(e, [{
            key: "enterCalc",
            value: function () {
                this.calcStack || (this.calcStack = []), this.calcStack.push(!0), this.inCalc = !0
            }
        }, {
            key: "exitCalc",
            value: function () {
                this.calcStack.pop(), this.calcStack || (this.inCalc = !1)
            }
        }, {
            key: "inParenthesis",
            value: function () {
                this.parensStack || (this.parensStack = []), this.parensStack.push(!0)
            }
        }, {
            key: "outOfParenthesis",
            value: function () {
                this.parensStack.pop()
            }
        }, {
            key: "isMathOn",
            value: function (e) {
                return !!this.mathOn && (!!("/" !== e || this.math === C.ALWAYS || this.parensStack && this.parensStack.length) && (!(this.math > C.PARENS_DIVISION) || this.parensStack && this.parensStack.length))
            }
        }, {
            key: "pathRequiresRewrite",
            value: function (e) {
                return (this.rewriteUrls === _.LOCAL ? K : Q)(e)
            }
        }, {
            key: "rewritePath",
            value: function (e, t) {
                var n;
                return t = t || "", n = this.normalizePath(t + e), K(e) && Q(t) && !1 === K(n) && (n = "./".concat(n)), n
            }
        }, {
            key: "normalizePath",
            value: function (e) {
                var t, n = e.split("/").reverse();
                for (e = []; 0 !== n.length;) switch (t = n.pop()) {
                    case ".":
                        break;
                    case "..":
                        0 === e.length || ".." === e[e.length - 1] ? e.push(t) : e.pop();
                        break;
                    default:
                        e.push(t)
                }
                return e.join("/")
            }
        }]), e
    }();
    var Z = function e(t) {
            return {
                _data: {},
                add: function (e, t) {
                    e = e.toLowerCase(), this._data.hasOwnProperty(e), this._data[e] = t
                },
                addMultiple: function (e) {
                    var t = this;
                    Object.keys(e).forEach(function (n) {
                        t.add(n, e[n])
                    })
                },
                get: function (e) {
                    return this._data[e] || t && t.get(e)
                },
                getLocalFunctions: function () {
                    return this._data
                },
                inherit: function () {
                    return e(this)
                },
                create: function (t) {
                    return e(t)
                }
            }
        }(null),
        Y = {
            eval: function () {
                var e = this.value_,
                    t = this.error_;
                if (t) throw t;
                if (null != e) return e ? j.True : j.False
            },
            value: function (e) {
                this.value_ = e
            },
            error: function (e) {
                this.error_ = e
            },
            reset: function () {
                this.value_ = this.error_ = null
            }
        },
        X = function (e) {
            function t(e, n, i, a) {
                var s;
                return r(this, t), (s = f(this, l(t).call(this))).selectors = e, s.rules = n, s._lookups = {}, s._variables = null, s._properties = null, s.strictImports = i, s.copyVisibilityInfo(a), s.allowRoot = !0, s.setParent(s.selectors, h(s)), s.setParent(s.rules, h(s)), s
            }
            return o(t, g), s(t, [{
                key: "isRulesetLike",
                value: function () {
                    return !0
                }
            }, {
                key: "accept",
                value: function (e) {
                    this.paths ? this.paths = e.visitArray(this.paths, !0) : this.selectors && (this.selectors = e.visitArray(this.selectors)), this.rules && this.rules.length && (this.rules = e.visitArray(this.rules))
                }
            }, {
                key: "eval",
                value: function (e) {
                    var n, i, r, a, s, o = !1;
                    if (this.selectors && (i = this.selectors.length)) {
                        for (n = new Array(i), Y.error({
                                type: "Syntax",
                                message: "it is currently only allowed in parametric mixin guards,"
                            }), a = 0; a < i; a++) {
                            r = this.selectors[a].eval(e);
                            for (var l = 0; l < r.elements.length; l++)
                                if (r.elements[l].isVariable) {
                                    s = !0;
                                    break
                                } n[a] = r, r.evaldCondition && (o = !0)
                        }
                        if (s) {
                            var u = new Array(i);
                            for (a = 0; a < i; a++) r = n[a], u[a] = r.toCSS(e);
                            this.parse.parseNode(u.join(","), ["selectors"], n[0].getIndex(), n[0].fileInfo(), function (e, t) {
                                t && (n = F(t))
                            })
                        }
                        Y.reset()
                    } else o = !0;
                    var c, h, f = this.rules ? P(this.rules) : null,
                        v = new t(n, f, this.strictImports, this.visibilityInfo());
                    v.originalRuleset = this, v.root = this.root, v.firstRoot = this.firstRoot, v.allowImports = this.allowImports, this.debugInfo && (v.debugInfo = this.debugInfo), o || (f.length = 0), v.functionRegistry = function (e) {
                        for (var t, n = 0, i = e.length; n !== i; ++n)
                            if (t = e[n].functionRegistry) return t;
                        return Z
                    }(e.frames).inherit();
                    var d = e.frames;
                    d.unshift(v);
                    var m = e.selectors;
                    m || (e.selectors = m = []), m.unshift(this.selectors), (v.root || v.allowImports || !v.strictImports) && v.evalImports(e);
                    var y = v.rules;
                    for (a = 0; c = y[a]; a++) c.evalFirst && (y[a] = c.eval(e));
                    var b = e.mediaBlocks && e.mediaBlocks.length || 0;
                    for (a = 0; c = y[a]; a++) "MixinCall" === c.type ? (f = c.eval(e).filter(function (e) {
                        return !(e instanceof q && e.variable) || !v.variable(e.name)
                    }), y.splice.apply(y, p([a, 1].concat(f))), a += f.length - 1, v.resetCache()) : "VariableCall" === c.type && (f = c.eval(e).rules.filter(function (e) {
                        return !(e instanceof q && e.variable)
                    }), y.splice.apply(y, p([a, 1].concat(f))), a += f.length - 1, v.resetCache());
                    for (a = 0; c = y[a]; a++) c.evalFirst || (y[a] = c = c.eval ? c.eval(e) : c);
                    for (a = 0; c = y[a]; a++)
                        if (c instanceof t && c.selectors && 1 === c.selectors.length && c.selectors[0] && c.selectors[0].isJustParentSelector()) {
                            y.splice(a--, 1);
                            for (l = 0; h = c.rules[l]; l++) h instanceof g && (h.copyVisibilityInfo(c.visibilityInfo()), h instanceof q && h.variable || y.splice(++a, 0, h))
                        } if (d.shift(), m.shift(), e.mediaBlocks)
                        for (a = b; a < e.mediaBlocks.length; a++) e.mediaBlocks[a].bubbleSelectors(n);
                    return v
                }
            }, {
                key: "evalImports",
                value: function (e) {
                    var t, n, i = this.rules;
                    if (i)
                        for (t = 0; t < i.length; t++) "Import" === i[t].type && ((n = i[t].eval(e)) && (n.length || 0 === n.length) ? (i.splice.apply(i, p([t, 1].concat(n))), t += n.length - 1) : i.splice(t, 1, n), this.resetCache())
                }
            }, {
                key: "makeImportant",
                value: function () {
                    return new t(this.selectors, this.rules.map(function (e) {
                        return e.makeImportant ? e.makeImportant() : e
                    }), this.strictImports, this.visibilityInfo())
                }
            }, {
                key: "matchArgs",
                value: function (e) {
                    return !e || 0 === e.length
                }
            }, {
                key: "matchCondition",
                value: function (e, t) {
                    var n = this.selectors[this.selectors.length - 1];
                    return !!n.evaldCondition && !(n.condition && !n.condition.eval(new G.Eval(t, t.frames)))
                }
            }, {
                key: "resetCache",
                value: function () {
                    this._rulesets = null, this._variables = null, this._properties = null, this._lookups = {}
                }
            }, {
                key: "variables",
                value: function () {
                    return this._variables || (this._variables = this.rules ? this.rules.reduce(function (e, t) {
                        if (t instanceof q && !0 === t.variable && (e[t.name] = t), "Import" === t.type && t.root && t.root.variables) {
                            var n = t.root.variables();
                            for (var i in n) n.hasOwnProperty(i) && (e[i] = t.root.variable(i))
                        }
                        return e
                    }, {}) : {}), this._variables
                }
            }, {
                key: "properties",
                value: function () {
                    return this._properties || (this._properties = this.rules ? this.rules.reduce(function (e, t) {
                        if (t instanceof q && !0 !== t.variable) {
                            var n = 1 === t.name.length && t.name[0] instanceof j ? t.name[0].value : t.name;
                            e["$".concat(n)] ? e["$".concat(n)].push(t) : e["$".concat(n)] = [t]
                        }
                        return e
                    }, {}) : {}), this._properties
                }
            }, {
                key: "variable",
                value: function (e) {
                    var t = this.variables()[e];
                    if (t) return this.parseValue(t)
                }
            }, {
                key: "property",
                value: function (e) {
                    var t = this.properties()[e];
                    if (t) return this.parseValue(t)
                }
            }, {
                key: "lastDeclaration",
                value: function () {
                    for (var e = this.rules.length; e > 0; e--) {
                        var t = this.rules[e - 1];
                        if (t instanceof q) return this.parseValue(t)
                    }
                }
            }, {
                key: "parseValue",
                value: function (e) {
                    var t = this;

                    function n(e) {
                        return e.value instanceof B && !e.parsed ? ("string" == typeof e.value.value ? this.parse.parseNode(e.value.value, ["value", "important"], e.value.getIndex(), e.fileInfo(), function (t, n) {
                            t && (e.parsed = !0), n && (e.value = n[0], e.important = n[1] || "", e.parsed = !0)
                        }) : e.parsed = !0, e) : e
                    }
                    if (Array.isArray(e)) {
                        var i = [];
                        return e.forEach(function (e) {
                            i.push(n.call(t, e))
                        }), i
                    }
                    return n.call(t, e)
                }
            }, {
                key: "rulesets",
                value: function () {
                    if (!this.rules) return [];
                    var e, t, n = [],
                        i = this.rules;
                    for (e = 0; t = i[e]; e++) t.isRuleset && n.push(t);
                    return n
                }
            }, {
                key: "prependRule",
                value: function (e) {
                    var t = this.rules;
                    t ? t.unshift(e) : this.rules = [e], this.setParent(e, this)
                }
            }, {
                key: "find",
                value: function (e) {
                    var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        a = [],
                        s = e.toCSS();
                    return s in this._lookups ? this._lookups[s] : (this.rulesets().forEach(function (s) {
                        if (s !== i)
                            for (var o = 0; o < s.selectors.length; o++)
                                if (t = e.match(s.selectors[o])) {
                                    if (e.elements.length > t) {
                                        if (!r || r(s)) {
                                            n = s.find(new D(e.elements.slice(t)), i, r);
                                            for (var l = 0; l < n.length; ++l) n[l].path.push(s);
                                            Array.prototype.push.apply(a, n)
                                        }
                                    } else a.push({
                                        rule: s,
                                        path: []
                                    });
                                    break
                                }
                    }), this._lookups[s] = a, a)
                }
            }, {
                key: "genCSS",
                value: function (e, t) {
                    var n, i, r, a, s, o = [];
                    e.tabLevel = e.tabLevel || 0, this.root || e.tabLevel++;
                    var l, u = e.compress ? "" : Array(e.tabLevel + 1).join("  "),
                        c = e.compress ? "" : Array(e.tabLevel).join("  "),
                        h = 0,
                        f = 0;
                    for (n = 0; a = this.rules[n]; n++) a instanceof z ? (f === n && f++, o.push(a)) : a.isCharset && a.isCharset() ? (o.splice(h, 0, a), h++, f++) : "Import" === a.type ? (o.splice(f, 0, a), f++) : o.push(a);
                    if (o = [].concat(o), !this.root) {
                        (r = T(e, this, c)) && (t.add(r), t.add(c));
                        var p, v = this.paths,
                            d = v.length;
                        for (l = e.compress ? "," : ",\n".concat(c), n = 0; n < d; n++)
                            if (p = (s = v[n]).length)
                                for (n > 0 && t.add(l), e.firstSelector = !0, s[0].genCSS(e, t), e.firstSelector = !1, i = 1; i < p; i++) s[i].genCSS(e, t);
                        t.add((e.compress ? "{" : " {\n") + u)
                    }
                    for (n = 0; a = o[n]; n++) {
                        n + 1 === o.length && (e.lastRule = !0);
                        var m = e.lastRule;
                        a.isRulesetLike(a) && (e.lastRule = !1), a.genCSS ? a.genCSS(e, t) : a.value && t.add(a.value.toString()), e.lastRule = m, !e.lastRule && a.isVisible() ? t.add(e.compress ? "" : "\n".concat(u)) : e.lastRule = !1
                    }
                    this.root || (t.add(e.compress ? "}" : "\n".concat(c, "}")), e.tabLevel--), t.isEmpty() || e.compress || !this.firstRoot || t.add("\n")
                }
            }, {
                key: "joinSelectors",
                value: function (e, t, n) {
                    for (var i = 0; i < n.length; i++) this.joinSelector(e, t, n[i])
                }
            }, {
                key: "joinSelector",
                value: function (e, t, n) {
                    function i(e, t) {
                        var n, i;
                        if (0 === e.length) n = new k(e[0]);
                        else {
                            var r = new Array(e.length);
                            for (i = 0; i < e.length; i++) r[i] = new I(null, e[i], t.isVariable, t._index, t._fileInfo);
                            n = new k(new D(r))
                        }
                        return n
                    }

                    function r(e, t) {
                        var n;
                        return n = new I(null, e, t.isVariable, t._index, t._fileInfo), new D([n])
                    }

                    function a(e, t, n, i) {
                        var r, a, s;
                        if (r = [], e.length > 0 ? (a = (r = P(e)).pop(), s = i.createDerived(P(a.elements))) : s = i.createDerived([]), t.length > 0) {
                            var o = n.combinator,
                                l = t[0].elements[0];
                            o.emptyOrWhitespace && !l.combinator.emptyOrWhitespace && (o = l.combinator), s.elements.push(new I(o, l.value, n.isVariable, n._index, n._fileInfo)), s.elements = s.elements.concat(t[0].elements.slice(1))
                        }
                        if (0 !== s.elements.length && r.push(s), t.length > 1) {
                            var u = t.slice(1);
                            u = u.map(function (e) {
                                return e.createDerived(e.elements, [])
                            }), r = r.concat(u)
                        }
                        return r
                    }

                    function s(e, t, n, i, r) {
                        var s;
                        for (s = 0; s < e.length; s++) {
                            var o = a(e[s], t, n, i);
                            r.push(o)
                        }
                        return r
                    }

                    function o(e, t) {
                        var n, i;
                        if (0 !== e.length)
                            if (0 !== t.length)
                                for (n = 0; i = t[n]; n++) i.length > 0 ? i[i.length - 1] = i[i.length - 1].createDerived(i[i.length - 1].elements.concat(e)) : i.push(new D(e));
                            else t.push([new D(e)])
                    }

                    function l(e, t) {
                        var n = t.createDerived(t.elements, t.extendList, t.evaldCondition);
                        return n.copyVisibilityInfo(e), n
                    }
                    var u, c;
                    if (! function e(t, n, l) {
                            var u, c, h, f, p, v, d, m, g, y, b, w, x = !1;
                            for (f = [], p = [
                                    []
                                ], u = 0; m = l.elements[u]; u++)
                                if ("&" !== m.value) {
                                    var S = (w = void 0, (b = m).value instanceof k && (w = b.value.value) instanceof D ? w : null);
                                    if (null != S) {
                                        o(f, p);
                                        var C, _ = [],
                                            A = [];
                                        for (C = e(_, n, S), x = x || C, h = 0; h < _.length; h++) s(p, [r(i(_[h], m), m)], m, l, A);
                                        p = A, f = []
                                    } else f.push(m)
                                } else {
                                    for (x = !0, v = [], o(f, p), c = 0; c < p.length; c++)
                                        if (d = p[c], 0 === n.length) d.length > 0 && d[0].elements.push(new I(m.combinator, "", m.isVariable, m._index, m._fileInfo)), v.push(d);
                                        else
                                            for (h = 0; h < n.length; h++) {
                                                var M = a(d, n[h], m, l);
                                                v.push(M)
                                            }
                                    p = v, f = []
                                } for (o(f, p), u = 0; u < p.length; u++)(g = p[u].length) > 0 && (t.push(p[u]), y = p[u][g - 1], p[u][g - 1] = y.createDerived(y.elements, l.extendList));
                            return x
                        }(c = [], t, n))
                        if (t.length > 0)
                            for (c = [], u = 0; u < t.length; u++) {
                                var h = t[u].map(l.bind(this, n.visibilityInfo()));
                                h.push(n), c.push(h)
                            } else c = [
                                [n]
                            ];
                    for (u = 0; u < c.length; u++) e.push(c[u])
                }
            }]), t
        }();
    X.prototype.type = "Ruleset", X.prototype.isRuleset = !0;
    var ee = function (e) {
        function t(e, n, i, a, s, o, u, c) {
            var p, v;
            if (r(this, t), (p = f(this, l(t).call(this))).name = e, p.value = n instanceof g ? n : n ? new B(n) : n, i) {
                for (Array.isArray(i) ? p.rules = i : (p.rules = [i], p.rules[0].selectors = new D([], null, null, a, s).createEmptySelectors()), v = 0; v < p.rules.length; v++) p.rules[v].allowImports = !0;
                p.setParent(p.rules, h(p))
            }
            return p._index = a, p._fileInfo = s, p.debugInfo = o, p.isRooted = u || !1, p.copyVisibilityInfo(c), p.allowRoot = !0, p
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                var t = this.value,
                    n = this.rules;
                n && (this.rules = e.visitArray(n)), t && (this.value = e.visit(t))
            }
        }, {
            key: "isRulesetLike",
            value: function () {
                return this.rules || !this.isCharset()
            }
        }, {
            key: "isCharset",
            value: function () {
                return "@charset" === this.name
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                var n = this.value,
                    i = this.rules;
                t.add(this.name, this.fileInfo(), this.getIndex()), n && (t.add(" "), n.genCSS(e, t)), i ? this.outputRuleset(e, t, i) : t.add(";")
            }
        }, {
            key: "eval",
            value: function (e) {
                var n, i, r = this.value,
                    a = this.rules;
                return n = e.mediaPath, i = e.mediaBlocks, e.mediaPath = [], e.mediaBlocks = [], r && (r = r.eval(e)), a && ((a = [a[0].eval(e)])[0].root = !0), e.mediaPath = n, e.mediaBlocks = i, new t(this.name, r, a, this.getIndex(), this.fileInfo(), this.debugInfo, this.isRooted, this.visibilityInfo())
            }
        }, {
            key: "variable",
            value: function (e) {
                if (this.rules) return X.prototype.variable.call(this.rules[0], e)
            }
        }, {
            key: "find",
            value: function () {
                if (this.rules) {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return X.prototype.find.apply(this.rules[0], t)
                }
            }
        }, {
            key: "rulesets",
            value: function () {
                if (this.rules) return X.prototype.rulesets.apply(this.rules[0])
            }
        }, {
            key: "outputRuleset",
            value: function (e, t, n) {
                var i, r = n.length;
                if (e.tabLevel = 1 + (0 | e.tabLevel), e.compress) {
                    for (t.add("{"), i = 0; i < r; i++) n[i].genCSS(e, t);
                    return t.add("}"), void e.tabLevel--
                }
                var a = "\n".concat(Array(e.tabLevel).join("  ")),
                    s = "".concat(a, "  ");
                if (r) {
                    for (t.add(" {".concat(s)), n[0].genCSS(e, t), i = 1; i < r; i++) t.add(s), n[i].genCSS(e, t);
                    t.add("".concat(a, "}"))
                } else t.add(" {".concat(a, "}"));
                e.tabLevel--
            }
        }]), t
    }();
    ee.prototype.type = "AtRule";
    var te = function (e) {
        function t(e, n) {
            var i;
            return r(this, t), (i = f(this, l(t).call(this))).ruleset = e, i.frames = n, i.setParent(i.ruleset, h(i)), i
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                this.ruleset = e.visit(this.ruleset)
            }
        }, {
            key: "eval",
            value: function (e) {
                var n = this.frames || P(e.frames);
                return new t(this.ruleset, n)
            }
        }, {
            key: "callEval",
            value: function (e) {
                return this.ruleset.eval(this.frames ? new G.Eval(e, this.frames.concat(e.frames)) : e)
            }
        }]), t
    }();
    te.prototype.type = "DetachedRuleset", te.prototype.evalFirst = !0;
    var ne = function (e) {
        function t(e, n, i) {
            var a;
            return r(this, t), (a = f(this, l(t).call(this))).numerator = e ? P(e).sort() : [], a.denominator = n ? P(n).sort() : [], i ? a.backupUnit = i : e && e.length && (a.backupUnit = e[0]), a
        }
        return o(t, g), s(t, [{
            key: "clone",
            value: function () {
                return new t(P(this.numerator), P(this.denominator), this.backupUnit)
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                var n = e && e.strictUnits;
                1 === this.numerator.length ? t.add(this.numerator[0]) : !n && this.backupUnit ? t.add(this.backupUnit) : !n && this.denominator.length && t.add(this.denominator[0])
            }
        }, {
            key: "toString",
            value: function () {
                var e, t = this.numerator.join("*");
                for (e = 0; e < this.denominator.length; e++) t += "/".concat(this.denominator[e]);
                return t
            }
        }, {
            key: "compare",
            value: function (e) {
                return this.is(e.toString()) ? 0 : void 0
            }
        }, {
            key: "is",
            value: function (e) {
                return this.toString().toUpperCase() === e.toUpperCase()
            }
        }, {
            key: "isLength",
            value: function () {
                return RegExp("^(px|em|ex|ch|rem|in|cm|mm|pc|pt|ex|vw|vh|vmin|vmax)$", "gi").test(this.toCSS())
            }
        }, {
            key: "isEmpty",
            value: function () {
                return 0 === this.numerator.length && 0 === this.denominator.length
            }
        }, {
            key: "isSingular",
            value: function () {
                return this.numerator.length <= 1 && 0 === this.denominator.length
            }
        }, {
            key: "map",
            value: function (e) {
                var t;
                for (t = 0; t < this.numerator.length; t++) this.numerator[t] = e(this.numerator[t], !1);
                for (t = 0; t < this.denominator.length; t++) this.denominator[t] = e(this.denominator[t], !0)
            }
        }, {
            key: "usedUnits",
            value: function () {
                var e, t, n, i = {};
                for (n in t = function (t) {
                        return e.hasOwnProperty(t) && !i[n] && (i[n] = t), t
                    }, d) d.hasOwnProperty(n) && (e = d[n], this.map(t));
                return i
            }
        }, {
            key: "cancel",
            value: function () {
                var e, t, n = {};
                for (t = 0; t < this.numerator.length; t++) n[e = this.numerator[t]] = (n[e] || 0) + 1;
                for (t = 0; t < this.denominator.length; t++) n[e = this.denominator[t]] = (n[e] || 0) - 1;
                for (e in this.numerator = [], this.denominator = [], n)
                    if (n.hasOwnProperty(e)) {
                        var i = n[e];
                        if (i > 0)
                            for (t = 0; t < i; t++) this.numerator.push(e);
                        else if (i < 0)
                            for (t = 0; t < -i; t++) this.denominator.push(e)
                    } this.numerator.sort(), this.denominator.sort()
            }
        }]), t
    }();
    ne.prototype.type = "Unit";
    var ie = function (e) {
        function t(e, n) {
            var i;
            if (r(this, t), (i = f(this, l(t).call(this))).value = parseFloat(e), isNaN(i.value)) throw new Error("Dimension is not a number.");
            return i.unit = n && n instanceof ne ? n : new ne(n ? [n] : void 0), i.setParent(i.unit, h(i)), i
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                this.unit = e.visit(this.unit)
            }
        }, {
            key: "eval",
            value: function (e) {
                return this
            }
        }, {
            key: "toColor",
            value: function () {
                return new y([this.value, this.value, this.value])
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                if (e && e.strictUnits && !this.unit.isSingular()) throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: ".concat(this.unit.toString()));
                var n = this.fround(e, this.value),
                    i = String(n);
                if (0 !== n && n < 1e-6 && n > -1e-6 && (i = n.toFixed(20).replace(/0+$/, "")), e && e.compress) {
                    if (0 === n && this.unit.isLength()) return void t.add(i);
                    n > 0 && n < 1 && (i = i.substr(1))
                }
                t.add(i), this.unit.genCSS(e, t)
            }
        }, {
            key: "operate",
            value: function (e, n, i) {
                var r = this._operate(e, n, this.value, i.value),
                    a = this.unit.clone();
                if ("+" === n || "-" === n)
                    if (0 === a.numerator.length && 0 === a.denominator.length) a = i.unit.clone(), this.unit.backupUnit && (a.backupUnit = this.unit.backupUnit);
                    else if (0 === i.unit.numerator.length && 0 === a.denominator.length);
                else {
                    if (i = i.convertTo(this.unit.usedUnits()), e.strictUnits && i.unit.toString() !== a.toString()) throw new Error("Incompatible units. Change the units or use the unit function. " + "Bad units: '".concat(a.toString(), "' and '").concat(i.unit.toString(), "'."));
                    r = this._operate(e, n, this.value, i.value)
                } else "*" === n ? (a.numerator = a.numerator.concat(i.unit.numerator).sort(), a.denominator = a.denominator.concat(i.unit.denominator).sort(), a.cancel()) : "/" === n && (a.numerator = a.numerator.concat(i.unit.denominator).sort(), a.denominator = a.denominator.concat(i.unit.numerator).sort(), a.cancel());
                return new t(r, a)
            }
        }, {
            key: "compare",
            value: function (e) {
                var n, i;
                if (e instanceof t) {
                    if (this.unit.isEmpty() || e.unit.isEmpty()) n = this, i = e;
                    else if (n = this.unify(), i = e.unify(), 0 !== n.unit.compare(i.unit)) return;
                    return g.numericCompare(n.value, i.value)
                }
            }
        }, {
            key: "unify",
            value: function () {
                return this.convertTo({
                    length: "px",
                    duration: "s",
                    angle: "rad"
                })
            }
        }, {
            key: "convertTo",
            value: function (e) {
                var n, i, r, a, s, o = this.value,
                    l = this.unit.clone(),
                    u = {};
                if ("string" == typeof e) {
                    for (n in d) d[n].hasOwnProperty(e) && ((u = {})[n] = e);
                    e = u
                }
                for (i in s = function (e, t) {
                        return r.hasOwnProperty(e) ? (t ? o /= r[e] / r[a] : o *= r[e] / r[a], a) : e
                    }, e) e.hasOwnProperty(i) && (a = e[i], r = d[i], l.map(s));
                return l.cancel(), new t(o, l)
            }
        }]), t
    }();
    ie.prototype.type = "Dimension";
    var re = C,
        ae = function (e) {
            function t(e, n, i) {
                var a;
                return r(this, t), (a = f(this, l(t).call(this))).op = e.trim(), a.operands = n, a.isSpaced = i, a
            }
            return o(t, g), s(t, [{
                key: "accept",
                value: function (e) {
                    this.operands = e.visitArray(this.operands)
                }
            }, {
                key: "eval",
                value: function (e) {
                    var n, i = this.operands[0].eval(e),
                        r = this.operands[1].eval(e);
                    if (e.isMathOn(this.op)) {
                        if (n = "./" === this.op ? "/" : this.op, i instanceof ie && r instanceof y && (i = i.toColor()), r instanceof ie && i instanceof y && (r = r.toColor()), !i.operate) {
                            if (i instanceof t && "/" === i.op && e.math === re.PARENS_DIVISION) return new t(this.op, [i, r], this.isSpaced);
                            throw {
                                type: "Operation",
                                message: "Operation on an invalid type"
                            }
                        }
                        return i.operate(e, n, r)
                    }
                    return new t(this.op, [i, r], this.isSpaced)
                }
            }, {
                key: "genCSS",
                value: function (e, t) {
                    this.operands[0].genCSS(e, t), this.isSpaced && t.add(" "), t.add(this.op), this.isSpaced && t.add(" "), this.operands[1].genCSS(e, t)
                }
            }]), t
        }();
    ae.prototype.type = "Operation";
    var se = C,
        oe = function (e) {
            function t(e, n) {
                var i;
                if (r(this, t), (i = f(this, l(t).call(this))).value = e, i.noSpacing = n, !e) throw new Error("Expression requires an array parameter");
                return i
            }
            return o(t, g), s(t, [{
                key: "accept",
                value: function (e) {
                    this.value = e.visitArray(this.value)
                }
            }, {
                key: "eval",
                value: function (e) {
                    var n, i = e.isMathOn(),
                        r = this.parens && (e.math !== se.STRICT_LEGACY || !this.parensInOp),
                        a = !1;
                    return r && e.inParenthesis(), this.value.length > 1 ? n = new t(this.value.map(function (t) {
                        return t.eval ? t.eval(e) : t
                    }), this.noSpacing) : 1 === this.value.length ? (!this.value[0].parens || this.value[0].parensInOp || e.inCalc || (a = !0), n = this.value[0].eval(e)) : n = this, r && e.outOfParenthesis(), !this.parens || !this.parensInOp || i || a || n instanceof ie || (n = new k(n)), n
                }
            }, {
                key: "genCSS",
                value: function (e, t) {
                    for (var n = 0; n < this.value.length; n++) this.value[n].genCSS(e, t), !this.noSpacing && n + 1 < this.value.length && t.add(" ")
                }
            }, {
                key: "throwAwayComments",
                value: function () {
                    this.value = this.value.filter(function (e) {
                        return !(e instanceof z)
                    })
                }
            }]), t
        }();
    oe.prototype.type = "Expression";
    var le = function () {
            function e(t, n, i, a) {
                r(this, e), this.name = t.toLowerCase(), this.index = i, this.context = n, this.currentFileInfo = a, this.func = n.frames[0].functionRegistry.get(this.name)
            }
            return s(e, [{
                key: "isValid",
                value: function () {
                    return Boolean(this.func)
                }
            }, {
                key: "call",
                value: function (e) {
                    return Array.isArray(e) && (e = e.filter(function (e) {
                        return "Comment" !== e.type
                    }).map(function (e) {
                        if ("Expression" === e.type) {
                            var t = e.value.filter(function (e) {
                                return "Comment" !== e.type
                            });
                            return 1 === t.length ? t[0] : new oe(t)
                        }
                        return e
                    })), this.func.apply(this, p(e))
                }
            }]), e
        }(),
        ue = function (e) {
            function t(e, n, i, a) {
                var s;
                return r(this, t), (s = f(this, l(t).call(this))).name = e, s.args = n, s.calc = "calc" === e, s._index = i, s._fileInfo = a, s
            }
            return o(t, g), s(t, [{
                key: "accept",
                value: function (e) {
                    this.args && (this.args = e.visitArray(this.args))
                }
            }, {
                key: "eval",
                value: function (e) {
                    var n = e.mathOn;
                    e.mathOn = !this.calc, (this.calc || e.inCalc) && e.enterCalc();
                    var i, r = this.args.map(function (t) {
                        return t.eval(e)
                    });
                    (this.calc || e.inCalc) && e.exitCalc(), e.mathOn = n;
                    var a = new le(this.name, e, this.getIndex(), this.fileInfo());
                    if (a.isValid()) {
                        try {
                            i = a.call(r)
                        } catch (e) {
                            throw {
                                type: e.type || "Runtime",
                                message: "error evaluating function `".concat(this.name, "`").concat(e.message ? ": ".concat(e.message) : ""),
                                index: this.getIndex(),
                                filename: this.fileInfo().filename,
                                line: e.lineNumber,
                                column: e.columnNumber
                            }
                        }
                        if (null != i) return i instanceof g || (i = new B(i && !0 !== i ? i.toString() : null)), i._index = this._index, i._fileInfo = this._fileInfo, i
                    }
                    return new t(this.name, r, this.getIndex(), this.fileInfo())
                }
            }, {
                key: "genCSS",
                value: function (e, t) {
                    t.add("".concat(this.name, "("), this.fileInfo(), this.getIndex());
                    for (var n = 0; n < this.args.length; n++) this.args[n].genCSS(e, t), n + 1 < this.args.length && t.add(", ");
                    t.add(")")
                }
            }]), t
        }();
    ue.prototype.type = "Call";
    var ce = function (e) {
        function t(e, n, i) {
            var a;
            return r(this, t), (a = f(this, l(t).call(this))).name = e, a._index = n, a._fileInfo = i, a
        }
        return o(t, g), s(t, [{
            key: "eval",
            value: function (e) {
                var n, i = this.name;
                if (0 === i.indexOf("@@") && (i = "@".concat(new t(i.slice(1), this.getIndex(), this.fileInfo()).eval(e).value)), this.evaluating) throw {
                    type: "Name",
                    message: "Recursive variable definition for ".concat(i),
                    filename: this.fileInfo().filename,
                    index: this.getIndex()
                };
                if (this.evaluating = !0, n = this.find(e.frames, function (t) {
                        var n = t.variable(i);
                        if (n) {
                            if (n.important) e.importantScope[e.importantScope.length - 1].important = n.important;
                            return e.inCalc ? new ue("_SELF", [n.value]).eval(e) : n.value.eval(e)
                        }
                    })) return this.evaluating = !1, n;
                throw {
                    type: "Name",
                    message: "variable ".concat(i, " is undefined"),
                    filename: this.fileInfo().filename,
                    index: this.getIndex()
                }
            }
        }, {
            key: "find",
            value: function (e, t) {
                for (var n, i = 0; i < e.length; i++)
                    if (n = t.call(e, e[i])) return n;
                return null
            }
        }]), t
    }();
    ce.prototype.type = "Variable";
    var he = function (e) {
        function t(e, n, i) {
            var a;
            return r(this, t), (a = f(this, l(t).call(this))).name = e, a._index = n, a._fileInfo = i, a
        }
        return o(t, g), s(t, [{
            key: "eval",
            value: function (e) {
                var t, n = this.name,
                    i = e.pluginManager.less.visitors.ToCSSVisitor.prototype._mergeRules;
                if (this.evaluating) throw {
                    type: "Name",
                    message: "Recursive property reference for ".concat(n),
                    filename: this.fileInfo().filename,
                    index: this.getIndex()
                };
                if (this.evaluating = !0, t = this.find(e.frames, function (t) {
                        var r, a = t.property(n);
                        if (a) {
                            for (var s = 0; s < a.length; s++) r = a[s], a[s] = new q(r.name, r.value, r.important, r.merge, r.index, r.currentFileInfo, r.inline, r.variable);
                            if (i(a), (r = a[a.length - 1]).important) e.importantScope[e.importantScope.length - 1].important = r.important;
                            return r = r.value.eval(e)
                        }
                    })) return this.evaluating = !1, t;
                throw {
                    type: "Name",
                    message: "Property '".concat(n, "' is undefined"),
                    filename: this.currentFileInfo.filename,
                    index: this.index
                }
            }
        }, {
            key: "find",
            value: function (e, t) {
                for (var n, i = 0; i < e.length; i++)
                    if (n = t.call(e, e[i])) return n;
                return null
            }
        }]), t
    }();
    he.prototype.type = "Property";
    var fe = function (e) {
        function t(e, n, i) {
            var a;
            return r(this, t), (a = f(this, l(t).call(this))).key = e, a.op = n, a.value = i, a
        }
        return o(t, g), s(t, [{
            key: "eval",
            value: function (e) {
                return new t(this.key.eval ? this.key.eval(e) : this.key, this.op, this.value && this.value.eval ? this.value.eval(e) : this.value)
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                t.add(this.toCSS(e))
            }
        }, {
            key: "toCSS",
            value: function (e) {
                var t = this.key.toCSS ? this.key.toCSS(e) : this.key;
                return this.op && (t += this.op, t += this.value.toCSS ? this.value.toCSS(e) : this.value), "[".concat(t, "]")
            }
        }]), t
    }();
    fe.prototype.type = "Attribute";
    var pe = function (e) {
        function t(e, n, i, a, s) {
            var o;
            return r(this, t), (o = f(this, l(t).call(this))).escaped = null == i || i, o.value = n || "", o.quote = e.charAt(0), o._index = a, o._fileInfo = s, o.variableRegex = /@\{([\w-]+)\}/g, o.propRegex = /\$\{([\w-]+)\}/g, o
        }
        return o(t, g), s(t, [{
            key: "genCSS",
            value: function (e, t) {
                this.escaped || t.add(this.quote, this.fileInfo(), this.getIndex()), t.add(this.value), this.escaped || t.add(this.quote)
            }
        }, {
            key: "containsVariables",
            value: function () {
                return this.value.match(this.variableRegex)
            }
        }, {
            key: "eval",
            value: function (e) {
                var n = this,
                    i = this.value;

                function r(e, t, n) {
                    var i = e;
                    do {
                        e = i.toString(), i = e.replace(t, n)
                    } while (e !== i);
                    return i
                }
                return i = r(i, this.variableRegex, function (i, r) {
                    var a = new ce("@".concat(r), n.getIndex(), n.fileInfo()).eval(e, !0);
                    return a instanceof t ? a.value : a.toCSS()
                }), i = r(i, this.propRegex, function (i, r) {
                    var a = new he("$".concat(r), n.getIndex(), n.fileInfo()).eval(e, !0);
                    return a instanceof t ? a.value : a.toCSS()
                }), new t(this.quote + i + this.quote, i, this.escaped, this.getIndex(), this.fileInfo())
            }
        }, {
            key: "compare",
            value: function (e) {
                return "Quoted" !== e.type || this.escaped || e.escaped ? e.toCSS && this.toCSS() === e.toCSS() ? 0 : void 0 : g.numericCompare(this.value, e.value)
            }
        }]), t
    }();
    pe.prototype.type = "Quoted";
    var ve = function (e) {
        function t(e, n, i, a) {
            var s;
            return r(this, t), (s = f(this, l(t).call(this))).value = e, s._index = n, s._fileInfo = i, s.isEvald = a, s
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                this.value = e.visit(this.value)
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                t.add("url("), this.value.genCSS(e, t), t.add(")")
            }
        }, {
            key: "eval",
            value: function (e) {
                var n, i = this.value.eval(e);
                if (!this.isEvald && ("string" == typeof (n = this.fileInfo() && this.fileInfo().rootpath) && "string" == typeof i.value && e.pathRequiresRewrite(i.value) ? (i.quote || (n = n.replace(/[\(\)'"\s]/g, function (e) {
                        return "\\".concat(e)
                    })), i.value = e.rewritePath(i.value, n)) : i.value = e.normalizePath(i.value), e.urlArgs && !i.value.match(/^\s*data:/))) {
                    var r = (-1 === i.value.indexOf("?") ? "?" : "&") + e.urlArgs; - 1 !== i.value.indexOf("#") ? i.value = i.value.replace("#", "".concat(r, "#")) : i.value += r
                }
                return new t(i, this.getIndex(), this.fileInfo(), !0)
            }
        }]), t
    }();
    ve.prototype.type = "Url";
    var de = function (e) {
        function t(e, n, i, a, s) {
            var o;
            r(this, t), (o = f(this, l(t).call(this)))._index = i, o._fileInfo = a;
            var u = new D([], null, null, o._index, o._fileInfo).createEmptySelectors();
            return o.features = new N(n), o.rules = [new X(u, e)], o.rules[0].allowImports = !0, o.copyVisibilityInfo(s), o.allowRoot = !0, o.setParent(u, h(o)), o.setParent(o.features, h(o)), o.setParent(o.rules, h(o)), o
        }
        return o(t, ee), s(t, [{
            key: "isRulesetLike",
            value: function () {
                return !0
            }
        }, {
            key: "accept",
            value: function (e) {
                this.features && (this.features = e.visit(this.features)), this.rules && (this.rules = e.visitArray(this.rules))
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                t.add("@media ", this._fileInfo, this._index), this.features.genCSS(e, t), this.outputRuleset(e, t, this.rules)
            }
        }, {
            key: "eval",
            value: function (e) {
                e.mediaBlocks || (e.mediaBlocks = [], e.mediaPath = []);
                var n = new t(null, [], this._index, this._fileInfo, this.visibilityInfo());
                return this.debugInfo && (this.rules[0].debugInfo = this.debugInfo, n.debugInfo = this.debugInfo), n.features = this.features.eval(e), e.mediaPath.push(n), e.mediaBlocks.push(n), this.rules[0].functionRegistry = e.frames[0].functionRegistry.inherit(), e.frames.unshift(this.rules[0]), n.rules = [this.rules[0].eval(e)], e.frames.shift(), e.mediaPath.pop(), 0 === e.mediaPath.length ? n.evalTop(e) : n.evalNested(e)
            }
        }, {
            key: "evalTop",
            value: function (e) {
                var t = this;
                if (e.mediaBlocks.length > 1) {
                    var n = new D([], null, null, this.getIndex(), this.fileInfo()).createEmptySelectors();
                    (t = new X(n, e.mediaBlocks)).multiMedia = !0, t.copyVisibilityInfo(this.visibilityInfo()), this.setParent(t, this)
                }
                return delete e.mediaBlocks, delete e.mediaPath, t
            }
        }, {
            key: "evalNested",
            value: function (e) {
                var t, n, i = e.mediaPath.concat([this]);
                for (t = 0; t < i.length; t++) n = i[t].features instanceof N ? i[t].features.value : i[t].features, i[t] = Array.isArray(n) ? n : [n];
                return this.features = new N(this.permute(i).map(function (e) {
                    for (e = e.map(function (e) {
                            return e.toCSS ? e : new B(e)
                        }), t = e.length - 1; t > 0; t--) e.splice(t, 0, new B("and"));
                    return new oe(e)
                })), this.setParent(this.features, this), new X([], [])
            }
        }, {
            key: "permute",
            value: function (e) {
                if (0 === e.length) return [];
                if (1 === e.length) return e[0];
                for (var t = [], n = this.permute(e.slice(1)), i = 0; i < n.length; i++)
                    for (var r = 0; r < e[0].length; r++) t.push([e[0][r]].concat(n[i]));
                return t
            }
        }, {
            key: "bubbleSelectors",
            value: function (e) {
                e && (this.rules = [new X(P(e), [this.rules[0]])], this.setParent(this.rules, this))
            }
        }]), t
    }();
    de.prototype.type = "Media";
    var me = function (e) {
        function t(e, n, i, a, s, o) {
            var u;
            if (r(this, t), (u = f(this, l(t).call(this))).options = i, u._index = a, u._fileInfo = s, u.path = e, u.features = n, u.allowRoot = !0, void 0 !== u.options.less || u.options.inline) u.css = !u.options.less || u.options.inline;
            else {
                var c = u.getPath();
                c && /[#\.\&\?]css([\?;].*)?$/.test(c) && (u.css = !0)
            }
            return u.copyVisibilityInfo(o), u.setParent(u.features, h(u)), u.setParent(u.path, h(u)), u
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                this.features && (this.features = e.visit(this.features)), this.path = e.visit(this.path), this.options.isPlugin || this.options.inline || !this.root || (this.root = e.visit(this.root))
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                this.css && void 0 === this.path._fileInfo.reference && (t.add("@import ", this._fileInfo, this._index), this.path.genCSS(e, t), this.features && (t.add(" "), this.features.genCSS(e, t)), t.add(";"))
            }
        }, {
            key: "getPath",
            value: function () {
                return this.path instanceof ve ? this.path.value.value : this.path.value
            }
        }, {
            key: "isVariableImport",
            value: function () {
                var e = this.path;
                return e instanceof ve && (e = e.value), !(e instanceof pe) || e.containsVariables()
            }
        }, {
            key: "evalForImport",
            value: function (e) {
                var n = this.path;
                return n instanceof ve && (n = n.value), new t(n.eval(e), this.features, this.options, this._index, this._fileInfo, this.visibilityInfo())
            }
        }, {
            key: "evalPath",
            value: function (e) {
                var t = this.path.eval(e),
                    n = this._fileInfo;
                if (!(t instanceof ve)) {
                    var i = t.value;
                    n && i && e.pathRequiresRewrite(i) ? t.value = e.rewritePath(i, n.rootpath) : t.value = e.normalizePath(t.value)
                }
                return t
            }
        }, {
            key: "eval",
            value: function (e) {
                var t = this.doEval(e);
                return (this.options.reference || this.blocksVisibility()) && (t.length || 0 === t.length ? t.forEach(function (e) {
                    e.addVisibilityBlock()
                }) : t.addVisibilityBlock()), t
            }
        }, {
            key: "doEval",
            value: function (e) {
                var n, i, r = this.features && this.features.eval(e);
                if (this.options.isPlugin) {
                    if (this.root && this.root.eval) try {
                        this.root.eval(e)
                    } catch (e) {
                        throw e.message = "Plugin error during evaluation", new $(e, this.root.imports, this.root.filename)
                    }
                    return (i = e.frames[0] && e.frames[0].functionRegistry) && this.root && this.root.functions && i.addMultiple(this.root.functions), []
                }
                if (this.skip && ("function" == typeof this.skip && (this.skip = this.skip()), this.skip)) return [];
                if (this.options.inline) {
                    var a = new B(this.root, 0, {
                        filename: this.importedFilename,
                        reference: this.path._fileInfo && this.path._fileInfo.reference
                    }, !0, !0);
                    return this.features ? new de([a], this.features.value) : [a]
                }
                if (this.css) {
                    var s = new t(this.evalPath(e), r, this.options, this._index);
                    if (!s.css && this.error) throw this.error;
                    return s
                }
                return (n = new X(null, P(this.root.rules))).evalImports(e), this.features ? new de(n.rules, this.features.value) : n.rules
            }
        }]), t
    }();
    me.prototype.type = "Import";
    var ge = function (e) {
            function t() {
                return r(this, t), f(this, l(t).apply(this, arguments))
            }
            return o(t, g), s(t, [{
                key: "evaluateJavaScript",
                value: function (e, t) {
                    var n, i = this,
                        r = {};
                    if (!t.javascriptEnabled) throw {
                        message: "Inline JavaScript is not enabled. Is it set in your options?",
                        filename: this.fileInfo().filename,
                        index: this.getIndex()
                    };
                    e = e.replace(/@\{([\w-]+)\}/g, function (e, n) {
                        return i.jsify(new ce("@".concat(n), i.getIndex(), i.fileInfo()).eval(t))
                    });
                    try {
                        e = new Function("return (".concat(e, ")"))
                    } catch (t) {
                        throw {
                            message: "JavaScript evaluation error: ".concat(t.message, " from `").concat(e, "`"),
                            filename: this.fileInfo().filename,
                            index: this.getIndex()
                        }
                    }
                    var a = t.frames[0].variables();
                    for (var s in a) a.hasOwnProperty(s) && (r[s.slice(1)] = {
                        value: a[s].value,
                        toJS: function () {
                            return this.value.eval(t).toCSS()
                        }
                    });
                    try {
                        n = e.call(r)
                    } catch (e) {
                        throw {
                            message: "JavaScript evaluation error: '".concat(e.name, ": ").concat(e.message.replace(/["]/g, "'"), "'"),
                            filename: this.fileInfo().filename,
                            index: this.getIndex()
                        }
                    }
                    return n
                }
            }, {
                key: "jsify",
                value: function (e) {
                    return Array.isArray(e.value) && e.value.length > 1 ? "[".concat(e.value.map(function (e) {
                        return e.toCSS()
                    }).join(", "), "]") : e.toCSS()
                }
            }]), t
        }(),
        ye = function (e) {
            function t(e, n, i, a) {
                var s;
                return r(this, t), (s = f(this, l(t).call(this))).escaped = n, s.expression = e, s._index = i, s._fileInfo = a, s
            }
            return o(t, ge), s(t, [{
                key: "eval",
                value: function (e) {
                    var t = this.evaluateJavaScript(this.expression, e),
                        n = i(t);
                    return "number" !== n || isNaN(t) ? "string" === n ? new pe('"'.concat(t, '"'), t, this.escaped, this._index) : Array.isArray(t) ? new B(t.join(", ")) : new B(t) : new ie(t)
                }
            }]), t
        }();
    ye.prototype.type = "JavaScript";
    var be = function (e) {
        function t(e, n) {
            var i;
            return r(this, t), (i = f(this, l(t).call(this))).key = e, i.value = n, i
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                this.value = e.visit(this.value)
            }
        }, {
            key: "eval",
            value: function (e) {
                return this.value.eval ? new t(this.key, this.value.eval(e)) : this
            }
        }, {
            key: "genCSS",
            value: function (e, t) {
                t.add("".concat(this.key, "=")), this.value.genCSS ? this.value.genCSS(e, t) : t.add(this.value)
            }
        }]), t
    }();
    be.prototype.type = "Assignment";
    var we = function (e) {
        function t(e, n, i, a, s) {
            var o;
            return r(this, t), (o = f(this, l(t).call(this))).op = e.trim(), o.lvalue = n, o.rvalue = i, o._index = a, o.negate = s, o
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                this.lvalue = e.visit(this.lvalue), this.rvalue = e.visit(this.rvalue)
            }
        }, {
            key: "eval",
            value: function (e) {
                var t = function (e, t, n) {
                    switch (e) {
                        case "and":
                            return t && n;
                        case "or":
                            return t || n;
                        default:
                            switch (g.compare(t, n)) {
                                case -1:
                                    return "<" === e || "=<" === e || "<=" === e;
                                case 0:
                                    return "=" === e || ">=" === e || "=<" === e || "<=" === e;
                                case 1:
                                    return ">" === e || ">=" === e;
                                default:
                                    return !1
                            }
                    }
                }(this.op, this.lvalue.eval(e), this.rvalue.eval(e));
                return this.negate ? !t : t
            }
        }]), t
    }();
    we.prototype.type = "Condition";
    var ke = function (e) {
        function t(e) {
            var n;
            return r(this, t), (n = f(this, l(t).call(this))).value = e, n
        }
        return o(t, g), t
    }();
    ke.prototype.type = "UnicodeDescriptor";
    var xe = function (e) {
        function t(e) {
            var n;
            return r(this, t), (n = f(this, l(t).call(this))).value = e, n
        }
        return o(t, g), s(t, [{
            key: "genCSS",
            value: function (e, t) {
                t.add("-"), this.value.genCSS(e, t)
            }
        }, {
            key: "eval",
            value: function (e) {
                return e.isMathOn() ? new ae("*", [new ie(-1), this.value]).eval(e) : new t(this.value.eval(e))
            }
        }]), t
    }();
    xe.prototype.type = "Negative";
    var Se = function (e) {
        function t(e, n, i, a, s) {
            var o;
            switch (r(this, t), (o = f(this, l(t).call(this))).selector = e, o.option = n, o.object_id = t.next_id++, o.parent_ids = [o.object_id], o._index = i, o._fileInfo = a, o.copyVisibilityInfo(s), o.allowRoot = !0, n) {
                case "all":
                    o.allowBefore = !0, o.allowAfter = !0;
                    break;
                default:
                    o.allowBefore = !1, o.allowAfter = !1
            }
            return o.setParent(o.selector, h(o)), o
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                this.selector = e.visit(this.selector)
            }
        }, {
            key: "eval",
            value: function (e) {
                return new t(this.selector.eval(e), this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo())
            }
        }, {
            key: "clone",
            value: function (e) {
                return new t(this.selector, this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo())
            }
        }, {
            key: "findSelfSelectors",
            value: function (e) {
                var t, n, i = [];
                for (t = 0; t < e.length; t++) n = e[t].elements, t > 0 && n.length && "" === n[0].combinator.value && (n[0].combinator.value = " "), i = i.concat(e[t].elements);
                this.selfSelectors = [new D(i)], this.selfSelectors[0].copyVisibilityInfo(this.visibilityInfo())
            }
        }]), t
    }();
    Se.next_id = 0, Se.prototype.type = "Extend";
    var Ie = function (e) {
        function t(e, n, i) {
            var a;
            return r(this, t), (a = f(this, l(t).call(this))).variable = e, a._index = n, a._fileInfo = i, a.allowRoot = !0, a
        }
        return o(t, g), s(t, [{
            key: "eval",
            value: function (e) {
                var t, n = new ce(this.variable, this.getIndex(), this.fileInfo()).eval(e),
                    i = new $({
                        message: "Could not evaluate variable call ".concat(this.variable)
                    });
                if (!n.ruleset) {
                    if (n.rules) t = n;
                    else if (Array.isArray(n)) t = new X("", n);
                    else {
                        if (!Array.isArray(n.value)) throw i;
                        t = new X("", n.value)
                    }
                    n = new te(t)
                }
                if (n.ruleset) return n.callEval(e);
                throw i
            }
        }]), t
    }();
    Ie.prototype.type = "VariableCall";
    var Ce = function (e) {
        function t(e, n, i, a, s) {
            var o;
            return r(this, t), (o = f(this, l(t).call(this))).value = e, o.lookups = n, o.important = i, o._index = a, o._fileInfo = s, o
        }
        return o(t, g), s(t, [{
            key: "eval",
            value: function (e) {
                var t, n, i = this.value.eval(e);
                for (t = 0; t < this.lookups.length; t++) {
                    if (n = this.lookups[t], Array.isArray(i) && (i = new X([new D], i)), "" === n) i = i.lastDeclaration();
                    else if ("@" === n.charAt(0)) {
                        if ("@" === n.charAt(1) && (n = "@".concat(new ce(n.substr(1)).eval(e).value)), i.variables && (i = i.variable(n)), !i) throw {
                            type: "Name",
                            message: "variable ".concat(n, " not found"),
                            filename: this.fileInfo().filename,
                            index: this.getIndex()
                        }
                    } else {
                        if (n = "$@" === n.substring(0, 2) ? "$".concat(new ce(n.substr(1)).eval(e).value) : "$" === n.charAt(0) ? n : "$".concat(n), i.properties && (i = i.property(n)), !i) throw {
                            type: "Name",
                            message: 'property "'.concat(n.substr(1), '" not found'),
                            filename: this.fileInfo().filename,
                            index: this.getIndex()
                        };
                        i = i[i.length - 1]
                    }
                    i.value && (i = i.eval(e).value), i.ruleset && (i = i.ruleset.eval(e))
                }
                return i
            }
        }]), t
    }();
    Ce.prototype.type = "NamespaceValue";
    var _e = function (e) {
        function t(e, n, i, a, s, o, u) {
            var c;
            r(this, t), (c = f(this, l(t).call(this))).name = e || "anonymous mixin", c.selectors = [new D([new I(null, e, !1, c._index, c._fileInfo)])], c.params = n, c.condition = a, c.variadic = s, c.arity = n.length, c.rules = i, c._lookups = {};
            var h = [];
            return c.required = n.reduce(function (e, t) {
                return !t.name || t.name && !t.value ? e + 1 : (h.push(t.name), e)
            }, 0), c.optionalParameters = h, c.frames = o, c.copyVisibilityInfo(u), c.allowRoot = !0, c
        }
        return o(t, X), s(t, [{
            key: "accept",
            value: function (e) {
                this.params && this.params.length && (this.params = e.visitArray(this.params)), this.rules = e.visitArray(this.rules), this.condition && (this.condition = e.visit(this.condition))
            }
        }, {
            key: "evalParams",
            value: function (e, t, n, i) {
                var r, a, s, o, l, u, c, h, f = new X(null, null),
                    p = P(this.params),
                    v = 0;
                if (t.frames && t.frames[0] && t.frames[0].functionRegistry && (f.functionRegistry = t.frames[0].functionRegistry.inherit()), t = new G.Eval(t, [f].concat(t.frames)), n)
                    for (v = (n = P(n)).length, s = 0; s < v; s++)
                        if (u = (a = n[s]) && a.name) {
                            for (c = !1, o = 0; o < p.length; o++)
                                if (!i[o] && u === p[o].name) {
                                    i[o] = a.value.eval(e), f.prependRule(new q(u, a.value.eval(e))), c = !0;
                                    break
                                } if (c) {
                                n.splice(s, 1), s--;
                                continue
                            }
                            throw {
                                type: "Runtime",
                                message: "Named argument for ".concat(this.name, " ").concat(n[s].name, " not found")
                            }
                        } for (h = 0, s = 0; s < p.length; s++)
                    if (!i[s]) {
                        if (a = n && n[h], u = p[s].name)
                            if (p[s].variadic) {
                                for (r = [], o = h; o < v; o++) r.push(n[o].value.eval(e));
                                f.prependRule(new q(u, new oe(r).eval(e)))
                            } else {
                                if (l = a && a.value) l = Array.isArray(l) ? new te(new X("", l)) : l.eval(e);
                                else {
                                    if (!p[s].value) throw {
                                        type: "Runtime",
                                        message: "wrong number of arguments for ".concat(this.name, " (").concat(v, " for ").concat(this.arity, ")")
                                    };
                                    l = p[s].value.eval(t), f.resetCache()
                                }
                                f.prependRule(new q(u, l)), i[s] = l
                            } if (p[s].variadic && n)
                            for (o = h; o < v; o++) i[o] = n[o].value.eval(e);
                        h++
                    } return f
            }
        }, {
            key: "makeImportant",
            value: function () {
                var e = this.rules ? this.rules.map(function (e) {
                    return e.makeImportant ? e.makeImportant(!0) : e
                }) : this.rules;
                return new t(this.name, this.params, e, this.condition, this.variadic, this.frames)
            }
        }, {
            key: "eval",
            value: function (e) {
                return new t(this.name, this.params, this.rules, this.condition, this.variadic, this.frames || P(e.frames))
            }
        }, {
            key: "evalCall",
            value: function (e, t, n) {
                var i, r, a = [],
                    s = this.frames ? this.frames.concat(e.frames) : e.frames,
                    o = this.evalParams(e, new G.Eval(e, s), t, a);
                return o.prependRule(new q("@arguments", new oe(a).eval(e))), i = P(this.rules), (r = new X(null, i)).originalRuleset = this, r = r.eval(new G.Eval(e, [this, o].concat(s))), n && (r = r.makeImportant()), r
            }
        }, {
            key: "matchCondition",
            value: function (e, t) {
                return !(this.condition && !this.condition.eval(new G.Eval(t, [this.evalParams(t, new G.Eval(t, this.frames ? this.frames.concat(t.frames) : t.frames), e, [])].concat(this.frames || []).concat(t.frames))))
            }
        }, {
            key: "matchArgs",
            value: function (e, t) {
                var n, i = e && e.length || 0,
                    r = this.optionalParameters,
                    a = e ? e.reduce(function (e, t) {
                        return r.indexOf(t.name) < 0 ? e + 1 : e
                    }, 0) : 0;
                if (this.variadic) {
                    if (a < this.required - 1) return !1
                } else {
                    if (a < this.required) return !1;
                    if (i > this.params.length) return !1
                }
                n = Math.min(a, this.arity);
                for (var s = 0; s < n; s++)
                    if (!this.params[s].name && !this.params[s].variadic && e[s].value.eval(t).toCSS() != this.params[s].value.eval(t).toCSS()) return !1;
                return !0
            }
        }]), t
    }();
    _e.prototype.type = "MixinDefinition", _e.prototype.evalFirst = !0;
    var Ae = function (e) {
        function t(e, n, i, a, s) {
            var o;
            return r(this, t), (o = f(this, l(t).call(this))).selector = new D(e), o.arguments = n || [], o._index = i, o._fileInfo = a, o.important = s, o.allowRoot = !0, o.setParent(o.selector, h(o)), o
        }
        return o(t, g), s(t, [{
            key: "accept",
            value: function (e) {
                this.selector && (this.selector = e.visit(this.selector)), this.arguments.length && (this.arguments = e.visitArray(this.arguments))
            }
        }, {
            key: "eval",
            value: function (e) {
                var t, n, i, r, a, s, o, l, u, c, h, f, p, v, d, m = [],
                    g = [],
                    y = !1,
                    b = [],
                    w = [],
                    k = -1,
                    x = 0,
                    S = 1,
                    I = 2;

                function C(t, n) {
                    var i, r, a;
                    for (i = 0; i < 2; i++) {
                        for (w[i] = !0, Y.value(i), r = 0; r < n.length && w[i]; r++)(a = n[r]).matchCondition && (w[i] = w[i] && a.matchCondition(null, e));
                        t.matchCondition && (w[i] = w[i] && t.matchCondition(m, e))
                    }
                    return w[0] || w[1] ? w[0] != w[1] ? w[1] ? S : I : x : k
                }
                for (this.selector = this.selector.eval(e), s = 0; s < this.arguments.length; s++)
                    if (a = (r = this.arguments[s]).value.eval(e), r.expand && Array.isArray(a.value))
                        for (a = a.value, o = 0; o < a.length; o++) m.push({
                            value: a[o]
                        });
                    else m.push({
                        name: r.name,
                        value: a
                    });
                for (d = function (t) {
                        return t.matchArgs(null, e)
                    }, s = 0; s < e.frames.length; s++)
                    if ((t = e.frames[s].find(this.selector, null, d)).length > 0) {
                        for (c = !0, o = 0; o < t.length; o++) {
                            for (n = t[o].rule, i = t[o].path, u = !1, l = 0; l < e.frames.length; l++)
                                if (!(n instanceof _e) && n === (e.frames[l].originalRuleset || e.frames[l])) {
                                    u = !0;
                                    break
                                } u || n.matchArgs(m, e) && ((h = {
                                mixin: n,
                                group: C(n, i)
                            }).group !== k && b.push(h), y = !0)
                        }
                        for (Y.reset(), p = [0, 0, 0], o = 0; o < b.length; o++) p[b[o].group]++;
                        if (p[x] > 0) f = I;
                        else if (f = S, p[S] + p[I] > 1) throw {
                            type: "Runtime",
                            message: "Ambiguous use of `default()` found when matching for `".concat(this.format(m), "`"),
                            index: this.getIndex(),
                            filename: this.fileInfo().filename
                        };
                        for (o = 0; o < b.length; o++)
                            if ((h = b[o].group) === x || h === f) try {
                                (n = b[o].mixin) instanceof _e || (v = n.originalRuleset || n, (n = new _e("", [], n.rules, null, !1, null, v.visibilityInfo())).originalRuleset = v);
                                var _ = n.evalCall(e, m, this.important).rules;
                                this._setVisibilityToReplacement(_), Array.prototype.push.apply(g, _)
                            } catch (e) {
                                throw {
                                    message: e.message,
                                    index: this.getIndex(),
                                    filename: this.fileInfo().filename,
                                    stack: e.stack
                                }
                            }
                        if (y) return g
                    } throw c ? {
                    type: "Runtime",
                    message: "No matching definition was found for `".concat(this.format(m), "`"),
                    index: this.getIndex(),
                    filename: this.fileInfo().filename
                } : {
                    type: "Name",
                    message: "".concat(this.selector.toCSS().trim(), " is undefined"),
                    index: this.getIndex(),
                    filename: this.fileInfo().filename
                }
            }
        }, {
            key: "_setVisibilityToReplacement",
            value: function (e) {
                var t;
                if (this.blocksVisibility())
                    for (t = 0; t < e.length; t++) e[t].addVisibilityBlock()
            }
        }, {
            key: "format",
            value: function (e) {
                return "".concat(this.selector.toCSS().trim(), "(").concat(e ? e.map(function (e) {
                    var t = "";
                    return e.name && (t += "".concat(e.name, ":")), e.value.toCSS ? t += e.value.toCSS() : t += "???", t
                }).join(", ") : "", ")")
            }
        }]), t
    }();
    Ae.prototype.type = "MixinCall";
    var Me = {
            Node: g,
            Color: y,
            AtRule: ee,
            DetachedRuleset: te,
            Operation: ae,
            Dimension: ie,
            Unit: ne,
            Keyword: j,
            Variable: ce,
            Property: he,
            Ruleset: X,
            Element: I,
            Attribute: fe,
            Combinator: S,
            Selector: D,
            Quoted: pe,
            Expression: oe,
            Declaration: q,
            Call: ue,
            URL: ve,
            Import: me,
            Comment: z,
            Anonymous: B,
            Value: N,
            JavaScript: ye,
            Assignment: be,
            Condition: we,
            Paren: k,
            Media: de,
            UnicodeDescriptor: ke,
            Negative: xe,
            Extend: Se,
            VariableCall: Ie,
            NamespaceValue: Ce,
            mixin: {
                Call: Ae,
                Definition: _e
            }
        },
        Pe = {
            error: function (e) {
                this._fireEvent("error", e)
            },
            warn: function (e) {
                this._fireEvent("warn", e)
            },
            info: function (e) {
                this._fireEvent("info", e)
            },
            debug: function (e) {
                this._fireEvent("debug", e)
            },
            addListener: function (e) {
                this._listeners.push(e)
            },
            removeListener: function (e) {
                for (var t = 0; t < this._listeners.length; t++)
                    if (this._listeners[t] === e) return void this._listeners.splice(t, 1)
            },
            _fireEvent: function (e, t) {
                for (var n = 0; n < this._listeners.length; n++) {
                    var i = this._listeners[n][e];
                    i && i(t)
                }
            },
            _listeners: []
        },
        Ee = function () {
            function e(t, n) {
                r(this, e), this.fileManagers = n || [], t = t || {};
                for (var i = [], a = i.concat(["encodeBase64", "mimeLookup", "charsetLookup", "getSourceMapGenerator"]), s = 0; s < a.length; s++) {
                    var o = a[s],
                        l = t[o];
                    l ? this[o] = l.bind(t) : s < i.length && this.warn("missing required function in environment - ".concat(o))
                }
            }
            return s(e, [{
                key: "getFileManager",
                value: function (e, t, n, i, r) {
                    e || Pe.warn("getFileManager called with no filename.. Please report this issue. continuing."), null == t && Pe.warn("getFileManager called with null directory.. Please report this issue. continuing.");
                    var a = this.fileManagers;
                    n.pluginManager && (a = [].concat(a).concat(n.pluginManager.getFileManagers()));
                    for (var s = a.length - 1; s >= 0; s--) {
                        var o = a[s];
                        if (o[r ? "supportsSync" : "supports"](e, t, n, i)) return o
                    }
                    return null
                }
            }, {
                key: "addFileManager",
                value: function (e) {
                    this.fileManagers.push(e)
                }
            }, {
                key: "clearFileManagers",
                value: function () {
                    this.fileManagers = []
                }
            }]), e
        }(),
        Re = function () {
            function e() {
                r(this, e)
            }
            return s(e, [{
                key: "getPath",
                value: function (e) {
                    var t = e.lastIndexOf("?");
                    return t > 0 && (e = e.slice(0, t)), (t = e.lastIndexOf("/")) < 0 && (t = e.lastIndexOf("\\")), t < 0 ? "" : e.slice(0, t + 1)
                }
            }, {
                key: "tryAppendExtension",
                value: function (e, t) {
                    return /(\.[a-z]*$)|([\?;].*)$/.test(e) ? e : e + t
                }
            }, {
                key: "tryAppendLessExtension",
                value: function (e) {
                    return this.tryAppendExtension(e, ".less")
                }
            }, {
                key: "supportsSync",
                value: function () {
                    return !1
                }
            }, {
                key: "alwaysMakePathsAbsolute",
                value: function () {
                    return !1
                }
            }, {
                key: "isPathAbsolute",
                value: function (e) {
                    return /^(?:[a-z-]+:|\/|\\|#)/i.test(e)
                }
            }, {
                key: "join",
                value: function (e, t) {
                    return e ? e + t : t
                }
            }, {
                key: "pathDiff",
                value: function (e, t) {
                    var n, i, r, a, s = this.extractUrlParts(e),
                        o = this.extractUrlParts(t),
                        l = "";
                    if (s.hostPart !== o.hostPart) return "";
                    for (i = Math.max(o.directories.length, s.directories.length), n = 0; n < i && o.directories[n] === s.directories[n]; n++);
                    for (a = o.directories.slice(n), r = s.directories.slice(n), n = 0; n < a.length - 1; n++) l += "../";
                    for (n = 0; n < r.length - 1; n++) l += "".concat(r[n], "/");
                    return l
                }
            }, {
                key: "extractUrlParts",
                value: function (e, t) {
                    var n, i, r = /^((?:[a-z-]+:)?\/{2}(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,
                        a = e.match(r),
                        s = {},
                        o = [],
                        l = [];
                    if (!a) throw new Error("Could not parse sheet href - '".concat(e, "'"));
                    if (t && (!a[1] || a[2])) {
                        if (!(i = t.match(r))) throw new Error("Could not parse page url - '".concat(t, "'"));
                        a[1] = a[1] || i[1] || "", a[2] || (a[3] = i[3] + a[3])
                    }
                    if (a[3])
                        for (o = a[3].replace(/\\/g, "/").split("/"), n = 0; n < o.length; n++) ".." === o[n] ? l.pop() : "." !== o[n] && l.push(o[n]);
                    return s.hostPart = a[1], s.directories = l, s.rawPath = (a[1] || "") + o.join("/"), s.path = (a[1] || "") + l.join("/"), s.filename = a[4], s.fileUrl = s.path + (a[4] || ""), s.url = s.fileUrl + (a[5] || ""), s
                }
            }]), e
        }(),
        Oe = function () {
            function e() {
                r(this, e), this.require = function () {
                    return null
                }
            }
            return s(e, [{
                key: "evalPlugin",
                value: function (e, t, n, i, r) {
                    var a, s, o, l, u, c;
                    l = t.pluginManager, r && (u = "string" == typeof r ? r : r.filename);
                    var h = (new this.less.FileManager).extractUrlParts(u).filename;
                    if (u && (s = l.get(u))) {
                        if (c = this.trySetOptions(s, u, h, i)) return c;
                        try {
                            s.use && s.use.call(this.context, s)
                        } catch (e) {
                            return e.message = e.message || "Error during @plugin call", new $(e, n, u)
                        }
                        return s
                    }
                    o = {
                        exports: {},
                        pluginManager: l,
                        fileInfo: r
                    }, a = Z.create();
                    try {
                        new Function("module", "require", "registerPlugin", "functions", "tree", "less", "fileInfo", e)(o, this.require(u), function (e) {
                            s = e
                        }, a, this.less.tree, this.less, r)
                    } catch (e) {
                        return new $(e, n, u)
                    }
                    if (s || (s = o.exports), (s = this.validatePlugin(s, u, h)) instanceof $) return s;
                    if (!s) return new $({
                        message: "Not a valid plugin"
                    }, n, u);
                    if (s.imports = n, s.filename = u, (!s.minVersion || this.compareVersion("3.0.0", s.minVersion) < 0) && (c = this.trySetOptions(s, u, h, i))) return c;
                    if (l.addPlugin(s, r.filename, a), s.functions = a.getLocalFunctions(), c = this.trySetOptions(s, u, h, i)) return c;
                    try {
                        s.use && s.use.call(this.context, s)
                    } catch (e) {
                        return e.message = e.message || "Error during @plugin call", new $(e, n, u)
                    }
                    return s
                }
            }, {
                key: "trySetOptions",
                value: function (e, t, n, i) {
                    if (i && !e.setOptions) return new $({
                        message: "Options have been provided but the plugin ".concat(n, " does not support any options.")
                    });
                    try {
                        e.setOptions && e.setOptions(i)
                    } catch (e) {
                        return new $(e)
                    }
                }
            }, {
                key: "validatePlugin",
                value: function (e, t, n) {
                    return e ? ("function" == typeof e && (e = new e), e.minVersion && this.compareVersion(e.minVersion, this.less.version) < 0 ? new $({
                        message: "Plugin ".concat(n, " requires version ").concat(this.versionToString(e.minVersion))
                    }) : e) : null
                }
            }, {
                key: "compareVersion",
                value: function (e, t) {
                    "string" == typeof e && (e = e.match(/^(\d+)\.?(\d+)?\.?(\d+)?/)).shift();
                    for (var n = 0; n < e.length; n++)
                        if (e[n] !== t[n]) return parseInt(e[n]) > parseInt(t[n]) ? -1 : 1;
                    return 0
                }
            }, {
                key: "versionToString",
                value: function (e) {
                    for (var t = "", n = 0; n < e.length; n++) t += (t ? "." : "") + e[n];
                    return t
                }
            }, {
                key: "printUsage",
                value: function (e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        n.printUsage && n.printUsage()
                    }
                }
            }]), e
        }(),
        Fe = {
            visitDeeper: !0
        },
        Ve = !1;

    function $e(e) {
        return e
    }
    var Le = function () {
            function e(t) {
                r(this, e), this._implementation = t, this._visitInCache = {}, this._visitOutCache = {}, Ve || (! function e(t, n) {
                    var r, a;
                    for (r in t) switch (i(a = t[r])) {
                        case "function":
                            a.prototype && a.prototype.type && (a.prototype.typeIndex = n++);
                            break;
                        case "object":
                            n = e(a, n)
                    }
                    return n
                }(Me, 1), Ve = !0)
            }
            return s(e, [{
                key: "visit",
                value: function (e) {
                    if (!e) return e;
                    var t = e.typeIndex;
                    if (!t) return e.value && e.value.typeIndex && this.visit(e.value), e;
                    var n, i = this._implementation,
                        r = this._visitInCache[t],
                        a = this._visitOutCache[t],
                        s = Fe;
                    if (s.visitDeeper = !0, r || (r = i[n = "visit".concat(e.type)] || $e, a = i["".concat(n, "Out")] || $e, this._visitInCache[t] = r, this._visitOutCache[t] = a), r !== $e) {
                        var o = r.call(i, e, s);
                        e && i.isReplacing && (e = o)
                    }
                    return s.visitDeeper && e && e.accept && e.accept(this), a != $e && a.call(i, e), e
                }
            }, {
                key: "visitArray",
                value: function (e, t) {
                    if (!e) return e;
                    var n, i = e.length;
                    if (t || !this._implementation.isReplacing) {
                        for (n = 0; n < i; n++) this.visit(e[n]);
                        return e
                    }
                    var r = [];
                    for (n = 0; n < i; n++) {
                        var a = this.visit(e[n]);
                        void 0 !== a && (a.splice ? a.length && this.flatten(a, r) : r.push(a))
                    }
                    return r
                }
            }, {
                key: "flatten",
                value: function (e, t) {
                    var n, i, r, a, s, o;
                    for (t || (t = []), i = 0, n = e.length; i < n; i++)
                        if (void 0 !== (r = e[i]))
                            if (r.splice)
                                for (s = 0, a = r.length; s < a; s++) void 0 !== (o = r[s]) && (o.splice ? o.length && this.flatten(o, t) : t.push(o));
                            else t.push(r);
                    return t
                }
            }]), e
        }(),
        De = function () {
            function e(t) {
                r(this, e), this.imports = [], this.variableImports = [], this._onSequencerEmpty = t, this._currentDepth = 0
            }
            return s(e, [{
                key: "addImport",
                value: function (e) {
                    var t = this,
                        n = {
                            callback: e,
                            args: null,
                            isReady: !1
                        };
                    return this.imports.push(n),
                        function () {
                            for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                            n.args = Array.prototype.slice.call(i, 0), n.isReady = !0, t.tryRun()
                        }
                }
            }, {
                key: "addVariableImport",
                value: function (e) {
                    this.variableImports.push(e)
                }
            }, {
                key: "tryRun",
                value: function () {
                    this._currentDepth++;
                    try {
                        for (;;) {
                            for (; this.imports.length > 0;) {
                                var e = this.imports[0];
                                if (!e.isReady) return;
                                this.imports = this.imports.slice(1), e.callback.apply(null, e.args)
                            }
                            if (0 === this.variableImports.length) break;
                            var t = this.variableImports[0];
                            this.variableImports = this.variableImports.slice(1), t()
                        }
                    } finally {
                        this._currentDepth--
                    }
                    0 === this._currentDepth && this._onSequencerEmpty && this._onSequencerEmpty()
                }
            }]), e
        }(),
        Ne = function (e, t) {
            this._visitor = new Le(this), this._importer = e, this._finish = t, this.context = new G.Eval, this.importCount = 0, this.onceFileDetectionMap = {}, this.recursionDetector = {}, this._sequencer = new De(this._onSequencerEmpty.bind(this))
        };
    Ne.prototype = {
        isReplacing: !1,
        run: function (e) {
            try {
                this._visitor.visit(e)
            } catch (e) {
                this.error = e
            }
            this.isFinished = !0, this._sequencer.tryRun()
        },
        _onSequencerEmpty: function () {
            this.isFinished && this._finish(this.error)
        },
        visitImport: function (e, t) {
            var n = e.options.inline;
            if (!e.css || n) {
                var i = new G.Eval(this.context, P(this.context.frames)),
                    r = i.frames[0];
                this.importCount++, e.isVariableImport() ? this._sequencer.addVariableImport(this.processImportNode.bind(this, e, i, r)) : this.processImportNode(e, i, r)
            }
            t.visitDeeper = !1
        },
        processImportNode: function (e, t, n) {
            var i, r = e.options.inline;
            try {
                i = e.evalForImport(t)
            } catch (t) {
                t.filename || (t.index = e.getIndex(), t.filename = e.fileInfo().filename), e.css = !0, e.error = t
            }
            if (!i || i.css && !r) this.importCount--, this.isFinished && this._sequencer.tryRun();
            else {
                i.options.multiple && (t.importMultiple = !0);
                for (var a = void 0 === i.css, s = 0; s < n.rules.length; s++)
                    if (n.rules[s] === e) {
                        n.rules[s] = i;
                        break
                    } var o = this.onImported.bind(this, i, t),
                    l = this._sequencer.addImport(o);
                this._importer.push(i.getPath(), a, i.fileInfo(), i.options, l)
            }
        },
        onImported: function (e, t, n, i, r, a) {
            n && (n.filename || (n.index = e.getIndex(), n.filename = e.fileInfo().filename), this.error = n);
            var s = this,
                o = e.options.inline,
                l = e.options.isPlugin,
                u = e.options.optional,
                c = r || a in s.recursionDetector;
            if (t.importMultiple || (e.skip = !!c || function () {
                    return a in s.onceFileDetectionMap || (s.onceFileDetectionMap[a] = !0, !1)
                }), !a && u && (e.skip = !0), i && (e.root = i, e.importedFilename = a, !o && !l && (t.importMultiple || !c))) {
                s.recursionDetector[a] = !0;
                var h = this.context;
                this.context = t;
                try {
                    this._visitor.visit(i)
                } catch (n) {
                    this.error = n
                }
                this.context = h
            }
            s.importCount--, s.isFinished && s._sequencer.tryRun()
        },
        visitDeclaration: function (e, t) {
            "DetachedRuleset" === e.value.type ? this.context.frames.unshift(e) : t.visitDeeper = !1
        },
        visitDeclarationOut: function (e) {
            "DetachedRuleset" === e.value.type && this.context.frames.shift()
        },
        visitAtRule: function (e, t) {
            this.context.frames.unshift(e)
        },
        visitAtRuleOut: function (e) {
            this.context.frames.shift()
        },
        visitMixinDefinition: function (e, t) {
            this.context.frames.unshift(e)
        },
        visitMixinDefinitionOut: function (e) {
            this.context.frames.shift()
        },
        visitRuleset: function (e, t) {
            this.context.frames.unshift(e)
        },
        visitRulesetOut: function (e) {
            this.context.frames.shift()
        },
        visitMedia: function (e, t) {
            this.context.frames.unshift(e.rules[0])
        },
        visitMediaOut: function (e) {
            this.context.frames.shift()
        }
    };
    var je = function () {
            function e(t) {
                r(this, e), this.visible = t
            }
            return s(e, [{
                key: "run",
                value: function (e) {
                    this.visit(e)
                }
            }, {
                key: "visitArray",
                value: function (e) {
                    if (!e) return e;
                    var t, n = e.length;
                    for (t = 0; t < n; t++) this.visit(e[t]);
                    return e
                }
            }, {
                key: "visit",
                value: function (e) {
                    return e ? e.constructor === Array ? this.visitArray(e) : !e.blocksVisibility || e.blocksVisibility() ? e : (this.visible ? e.ensureVisibility() : e.ensureInvisibility(), e.accept(this), e) : e
                }
            }]), e
        }(),
        Be = function () {
            function e() {
                r(this, e), this._visitor = new Le(this), this.contexts = [], this.allExtendsStack = [
                    []
                ]
            }
            return s(e, [{
                key: "run",
                value: function (e) {
                    return (e = this._visitor.visit(e)).allExtends = this.allExtendsStack[0], e
                }
            }, {
                key: "visitDeclaration",
                value: function (e, t) {
                    t.visitDeeper = !1
                }
            }, {
                key: "visitMixinDefinition",
                value: function (e, t) {
                    t.visitDeeper = !1
                }
            }, {
                key: "visitRuleset",
                value: function (e, t) {
                    if (!e.root) {
                        var n, i, r, a, s = [],
                            o = e.rules,
                            l = o ? o.length : 0;
                        for (n = 0; n < l; n++) e.rules[n] instanceof Me.Extend && (s.push(o[n]), e.extendOnEveryPath = !0);
                        var u = e.paths;
                        for (n = 0; n < u.length; n++) {
                            var c = u[n],
                                h = c[c.length - 1].extendList;
                            for ((a = h ? P(h).concat(s) : s) && (a = a.map(function (e) {
                                    return e.clone()
                                })), i = 0; i < a.length; i++) this.foundExtends = !0, (r = a[i]).findSelfSelectors(c), r.ruleset = e, 0 === i && (r.firstExtendOnThisSelectorPath = !0), this.allExtendsStack[this.allExtendsStack.length - 1].push(r)
                        }
                        this.contexts.push(e.selectors)
                    }
                }
            }, {
                key: "visitRulesetOut",
                value: function (e) {
                    e.root || (this.contexts.length = this.contexts.length - 1)
                }
            }, {
                key: "visitMedia",
                value: function (e, t) {
                    e.allExtends = [], this.allExtendsStack.push(e.allExtends)
                }
            }, {
                key: "visitMediaOut",
                value: function (e) {
                    this.allExtendsStack.length = this.allExtendsStack.length - 1
                }
            }, {
                key: "visitAtRule",
                value: function (e, t) {
                    e.allExtends = [], this.allExtendsStack.push(e.allExtends)
                }
            }, {
                key: "visitAtRuleOut",
                value: function (e) {
                    this.allExtendsStack.length = this.allExtendsStack.length - 1
                }
            }]), e
        }(),
        Ue = function () {
            function e() {
                r(this, e), this._visitor = new Le(this)
            }
            return s(e, [{
                key: "run",
                value: function (e) {
                    var t = new Be;
                    if (this.extendIndices = {}, t.run(e), !t.foundExtends) return e;
                    e.allExtends = e.allExtends.concat(this.doExtendChaining(e.allExtends, e.allExtends)), this.allExtendsStack = [e.allExtends];
                    var n = this._visitor.visit(e);
                    return this.checkExtendsForNonMatched(e.allExtends), n
                }
            }, {
                key: "checkExtendsForNonMatched",
                value: function (e) {
                    var t = this.extendIndices;
                    e.filter(function (e) {
                        return !e.hasFoundMatches && 1 == e.parent_ids.length
                    }).forEach(function (e) {
                        var n = "_unknown_";
                        try {
                            n = e.selector.toCSS({})
                        } catch (e) {}
                        t["".concat(e.index, " ").concat(n)] || (t["".concat(e.index, " ").concat(n)] = !0, Pe.warn("extend '".concat(n, "' has no matches")))
                    })
                }
            }, {
                key: "doExtendChaining",
                value: function (e, t, n) {
                    var i, r, a, s, o, l, u, c, h = [],
                        f = this;
                    for (n = n || 0, i = 0; i < e.length; i++)
                        for (r = 0; r < t.length; r++) l = e[i], u = t[r], l.parent_ids.indexOf(u.object_id) >= 0 || (o = [u.selfSelectors[0]], (a = f.findMatch(l, o)).length && (l.hasFoundMatches = !0, l.selfSelectors.forEach(function (e) {
                            var t = u.visibilityInfo();
                            s = f.extendSelector(a, o, e, l.isVisible()), (c = new Me.Extend(u.selector, u.option, 0, u.fileInfo(), t)).selfSelectors = s, s[s.length - 1].extendList = [c], h.push(c), c.ruleset = u.ruleset, c.parent_ids = c.parent_ids.concat(u.parent_ids, l.parent_ids), u.firstExtendOnThisSelectorPath && (c.firstExtendOnThisSelectorPath = !0, u.ruleset.paths.push(s))
                        })));
                    if (h.length) {
                        if (this.extendChainCount++, n > 100) {
                            var p = "{unable to calculate}",
                                v = "{unable to calculate}";
                            try {
                                p = h[0].selfSelectors[0].toCSS(), v = h[0].selector.toCSS()
                            } catch (e) {}
                            throw {
                                message: "extend circular reference detected. One of the circular extends is currently:".concat(p, ":extend(").concat(v, ")")
                            }
                        }
                        return h.concat(f.doExtendChaining(h, t, n + 1))
                    }
                    return h
                }
            }, {
                key: "visitDeclaration",
                value: function (e, t) {
                    t.visitDeeper = !1
                }
            }, {
                key: "visitMixinDefinition",
                value: function (e, t) {
                    t.visitDeeper = !1
                }
            }, {
                key: "visitSelector",
                value: function (e, t) {
                    t.visitDeeper = !1
                }
            }, {
                key: "visitRuleset",
                value: function (e, t) {
                    if (!e.root) {
                        var n, i, r, a, s = this.allExtendsStack[this.allExtendsStack.length - 1],
                            o = [],
                            l = this;
                        for (r = 0; r < s.length; r++)
                            for (i = 0; i < e.paths.length; i++)
                                if (a = e.paths[i], !e.extendOnEveryPath) {
                                    var u = a[a.length - 1].extendList;
                                    u && u.length || (n = this.findMatch(s[r], a)).length && (s[r].hasFoundMatches = !0, s[r].selfSelectors.forEach(function (e) {
                                        var t;
                                        t = l.extendSelector(n, a, e, s[r].isVisible()), o.push(t)
                                    }))
                                } e.paths = e.paths.concat(o)
                    }
                }
            }, {
                key: "findMatch",
                value: function (e, t) {
                    var n, i, r, a, s, o, l, u = e.selector.elements,
                        c = [],
                        h = [];
                    for (n = 0; n < t.length; n++)
                        for (i = t[n], r = 0; r < i.elements.length; r++)
                            for (a = i.elements[r], (e.allowBefore || 0 === n && 0 === r) && c.push({
                                    pathIndex: n,
                                    index: r,
                                    matched: 0,
                                    initialCombinator: a.combinator
                                }), o = 0; o < c.length; o++) l = c[o], "" === (s = a.combinator.value) && 0 === r && (s = " "), !this.isElementValuesEqual(u[l.matched].value, a.value) || l.matched > 0 && u[l.matched].combinator.value !== s ? l = null : l.matched++, l && (l.finished = l.matched === u.length, l.finished && !e.allowAfter && (r + 1 < i.elements.length || n + 1 < t.length) && (l = null)), l ? l.finished && (l.length = u.length, l.endPathIndex = n, l.endPathElementIndex = r + 1, c.length = 0, h.push(l)) : (c.splice(o, 1), o--);
                    return h
                }
            }, {
                key: "isElementValuesEqual",
                value: function (e, t) {
                    if ("string" == typeof e || "string" == typeof t) return e === t;
                    if (e instanceof Me.Attribute) return e.op === t.op && e.key === t.key && (e.value && t.value ? (e = e.value.value || e.value) === (t = t.value.value || t.value) : !e.value && !t.value);
                    if (e = e.value, t = t.value, e instanceof Me.Selector) {
                        if (!(t instanceof Me.Selector) || e.elements.length !== t.elements.length) return !1;
                        for (var n = 0; n < e.elements.length; n++) {
                            if (e.elements[n].combinator.value !== t.elements[n].combinator.value && (0 !== n || (e.elements[n].combinator.value || " ") !== (t.elements[n].combinator.value || " "))) return !1;
                            if (!this.isElementValuesEqual(e.elements[n].value, t.elements[n].value)) return !1
                        }
                        return !0
                    }
                    return !1
                }
            }, {
                key: "extendSelector",
                value: function (e, t, n, i) {
                    var r, a, s, o, l, u = 0,
                        c = 0,
                        h = [];
                    for (r = 0; r < e.length; r++) a = t[(o = e[r]).pathIndex], s = new Me.Element(o.initialCombinator, n.elements[0].value, n.elements[0].isVariable, n.elements[0].getIndex(), n.elements[0].fileInfo()), o.pathIndex > u && c > 0 && (h[h.length - 1].elements = h[h.length - 1].elements.concat(t[u].elements.slice(c)), c = 0, u++), l = a.elements.slice(c, o.index).concat([s]).concat(n.elements.slice(1)), u === o.pathIndex && r > 0 ? h[h.length - 1].elements = h[h.length - 1].elements.concat(l) : (h = h.concat(t.slice(u, o.pathIndex))).push(new Me.Selector(l)), u = o.endPathIndex, (c = o.endPathElementIndex) >= t[u].elements.length && (c = 0, u++);
                    return u < t.length && c > 0 && (h[h.length - 1].elements = h[h.length - 1].elements.concat(t[u].elements.slice(c)), u++), h = (h = h.concat(t.slice(u, t.length))).map(function (e) {
                        var t = e.createDerived(e.elements);
                        return i ? t.ensureVisibility() : t.ensureInvisibility(), t
                    })
                }
            }, {
                key: "visitMedia",
                value: function (e, t) {
                    var n = e.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
                    n = n.concat(this.doExtendChaining(n, e.allExtends)), this.allExtendsStack.push(n)
                }
            }, {
                key: "visitMediaOut",
                value: function (e) {
                    var t = this.allExtendsStack.length - 1;
                    this.allExtendsStack.length = t
                }
            }, {
                key: "visitAtRule",
                value: function (e, t) {
                    var n = e.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
                    n = n.concat(this.doExtendChaining(n, e.allExtends)), this.allExtendsStack.push(n)
                }
            }, {
                key: "visitAtRuleOut",
                value: function (e) {
                    var t = this.allExtendsStack.length - 1;
                    this.allExtendsStack.length = t
                }
            }]), e
        }(),
        qe = function () {
            function e() {
                r(this, e), this.contexts = [
                    []
                ], this._visitor = new Le(this)
            }
            return s(e, [{
                key: "run",
                value: function (e) {
                    return this._visitor.visit(e)
                }
            }, {
                key: "visitDeclaration",
                value: function (e, t) {
                    t.visitDeeper = !1
                }
            }, {
                key: "visitMixinDefinition",
                value: function (e, t) {
                    t.visitDeeper = !1
                }
            }, {
                key: "visitRuleset",
                value: function (e, t) {
                    var n, i = this.contexts[this.contexts.length - 1],
                        r = [];
                    this.contexts.push(r), e.root || ((n = e.selectors) && (n = n.filter(function (e) {
                        return e.getIsOutput()
                    }), e.selectors = n.length ? n : n = null, n && e.joinSelectors(r, i, n)), n || (e.rules = null), e.paths = r)
                }
            }, {
                key: "visitRulesetOut",
                value: function (e) {
                    this.contexts.length = this.contexts.length - 1
                }
            }, {
                key: "visitMedia",
                value: function (e, t) {
                    var n = this.contexts[this.contexts.length - 1];
                    e.rules[0].root = 0 === n.length || n[0].multiMedia
                }
            }, {
                key: "visitAtRule",
                value: function (e, t) {
                    var n = this.contexts[this.contexts.length - 1];
                    e.rules && e.rules.length && (e.rules[0].root = e.isRooted || 0 === n.length || null)
                }
            }]), e
        }(),
        Te = function () {
            function e(t) {
                r(this, e), this._visitor = new Le(this), this._context = t
            }
            return s(e, [{
                key: "containsSilentNonBlockedChild",
                value: function (e) {
                    var t;
                    if (!e) return !1;
                    for (var n = 0; n < e.length; n++)
                        if ((t = e[n]).isSilent && t.isSilent(this._context) && !t.blocksVisibility()) return !0;
                    return !1
                }
            }, {
                key: "keepOnlyVisibleChilds",
                value: function (e) {
                    e && e.rules && (e.rules = e.rules.filter(function (e) {
                        return e.isVisible()
                    }))
                }
            }, {
                key: "isEmpty",
                value: function (e) {
                    return !e || !e.rules || 0 === e.rules.length
                }
            }, {
                key: "hasVisibleSelector",
                value: function (e) {
                    return !(!e || !e.paths) && e.paths.length > 0
                }
            }, {
                key: "resolveVisibility",
                value: function (e, t) {
                    if (!e.blocksVisibility()) {
                        if (this.isEmpty(e) && !this.containsSilentNonBlockedChild(t)) return;
                        return e
                    }
                    var n = e.rules[0];
                    if (this.keepOnlyVisibleChilds(n), !this.isEmpty(n)) return e.ensureVisibility(), e.removeVisibilityBlock(), e
                }
            }, {
                key: "isVisibleRuleset",
                value: function (e) {
                    return !!e.firstRoot || !this.isEmpty(e) && !(!e.root && !this.hasVisibleSelector(e))
                }
            }]), e
        }(),
        ze = function (e) {
            this._visitor = new Le(this), this._context = e, this.utils = new Te(e)
        };
    ze.prototype = {
        isReplacing: !0,
        run: function (e) {
            return this._visitor.visit(e)
        },
        visitDeclaration: function (e, t) {
            if (!e.blocksVisibility() && !e.variable) return e
        },
        visitMixinDefinition: function (e, t) {
            e.frames = []
        },
        visitExtend: function (e, t) {},
        visitComment: function (e, t) {
            if (!e.blocksVisibility() && !e.isSilent(this._context)) return e
        },
        visitMedia: function (e, t) {
            var n = e.rules[0].rules;
            return e.accept(this._visitor), t.visitDeeper = !1, this.utils.resolveVisibility(e, n)
        },
        visitImport: function (e, t) {
            if (!e.blocksVisibility()) return e
        },
        visitAtRule: function (e, t) {
            return e.rules && e.rules.length ? this.visitAtRuleWithBody(e, t) : this.visitAtRuleWithoutBody(e, t)
        },
        visitAnonymous: function (e, t) {
            if (!e.blocksVisibility()) return e.accept(this._visitor), e
        },
        visitAtRuleWithBody: function (e, t) {
            var n = function (e) {
                var t = e.rules;
                return function (e) {
                    var t = e.rules;
                    return 1 === t.length && (!t[0].paths || 0 === t[0].paths.length)
                }(e) ? t[0].rules : t
            }(e);
            return e.accept(this._visitor), t.visitDeeper = !1, this.utils.isEmpty(e) || this._mergeRules(e.rules[0].rules), this.utils.resolveVisibility(e, n)
        },
        visitAtRuleWithoutBody: function (e, t) {
            if (!e.blocksVisibility()) {
                if ("@charset" === e.name) {
                    if (this.charset) {
                        if (e.debugInfo) {
                            var n = new Me.Comment("/* ".concat(e.toCSS(this._context).replace(/\n/g, ""), " */\n"));
                            return n.debugInfo = e.debugInfo, this._visitor.visit(n)
                        }
                        return
                    }
                    this.charset = !0
                }
                return e
            }
        },
        checkValidNodes: function (e, t) {
            if (e)
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    if (t && i instanceof Me.Declaration && !i.variable) throw {
                        message: "Properties must be inside selector blocks. They cannot be in the root",
                        index: i.getIndex(),
                        filename: i.fileInfo() && i.fileInfo().filename
                    };
                    if (i instanceof Me.Call) throw {
                        message: "Function '".concat(i.name, "' is undefined"),
                        index: i.getIndex(),
                        filename: i.fileInfo() && i.fileInfo().filename
                    };
                    if (i.type && !i.allowRoot) throw {
                        message: "".concat(i.type, " node returned by a function is not valid here"),
                        index: i.getIndex(),
                        filename: i.fileInfo() && i.fileInfo().filename
                    }
                }
        },
        visitRuleset: function (e, t) {
            var n, i = [];
            if (this.checkValidNodes(e.rules, e.firstRoot), e.root) e.accept(this._visitor), t.visitDeeper = !1;
            else {
                this._compileRulesetPaths(e);
                for (var r = e.rules, a = r ? r.length : 0, s = 0; s < a;)(n = r[s]) && n.rules ? (i.push(this._visitor.visit(n)), r.splice(s, 1), a--) : s++;
                a > 0 ? e.accept(this._visitor) : e.rules = null, t.visitDeeper = !1
            }
            return e.rules && (this._mergeRules(e.rules), this._removeDuplicateRules(e.rules)), this.utils.isVisibleRuleset(e) && (e.ensureVisibility(), i.splice(0, 0, e)), 1 === i.length ? i[0] : i
        },
        _compileRulesetPaths: function (e) {
            e.paths && (e.paths = e.paths.filter(function (e) {
                var t;
                for (" " === e[0].elements[0].combinator.value && (e[0].elements[0].combinator = new Me.Combinator("")), t = 0; t < e.length; t++)
                    if (e[t].isVisible() && e[t].getIsOutput()) return !0;
                return !1
            }))
        },
        _removeDuplicateRules: function (e) {
            if (e) {
                var t, n, i, r = {};
                for (i = e.length - 1; i >= 0; i--)
                    if ((n = e[i]) instanceof Me.Declaration)
                        if (r[n.name]) {
                            (t = r[n.name]) instanceof Me.Declaration && (t = r[n.name] = [r[n.name].toCSS(this._context)]);
                            var a = n.toCSS(this._context); - 1 !== t.indexOf(a) ? e.splice(i, 1) : t.push(a)
                        } else r[n.name] = n
            }
        },
        _mergeRules: function (e) {
            if (e) {
                for (var t = {}, n = [], i = 0; i < e.length; i++) {
                    var r = e[i];
                    if (r.merge) {
                        var a = r.name;
                        t[a] ? e.splice(i--, 1) : n.push(t[a] = []), t[a].push(r)
                    }
                }
                n.forEach(function (e) {
                    if (e.length > 0) {
                        var t = e[0],
                            n = [],
                            i = [new Me.Expression(n)];
                        e.forEach(function (e) {
                            "+" === e.merge && n.length > 0 && i.push(new Me.Expression(n = [])), n.push(e.value), t.important = t.important || e.important
                        }), t.value = new Me.Value(i)
                    }
                })
            }
        }
    };
    var Ge = {
            Visitor: Le,
            ImportVisitor: Ne,
            MarkVisibleSelectorsVisitor: je,
            ExtendVisitor: Ue,
            JoinSelectorVisitor: qe,
            ToCSSVisitor: ze
        },
        We = function () {
            var e, t, n, i, r, a, s, o = [],
                l = {},
                u = 32,
                c = 9,
                h = 10,
                f = 13,
                p = 47;

            function v(n) {
                for (var i, o, d, m = l.i, g = t, y = l.i - s, b = l.i + a.length - y, w = l.i += n, k = e; l.i < b; l.i++) {
                    if (i = k.charCodeAt(l.i), l.autoCommentAbsorb && i === p) {
                        if ("/" === (o = k.charAt(l.i + 1))) {
                            d = {
                                index: l.i,
                                isLineComment: !0
                            };
                            var x = k.indexOf("\n", l.i + 2);
                            x < 0 && (x = b), l.i = x, d.text = k.substr(d.index, l.i - d.index), l.commentStore.push(d);
                            continue
                        }
                        if ("*" === o) {
                            var S = k.indexOf("*/", l.i + 2);
                            if (S >= 0) {
                                d = {
                                    index: l.i,
                                    text: k.substr(l.i, S + 2 - l.i),
                                    isLineComment: !1
                                }, l.i += d.text.length - 1, l.commentStore.push(d);
                                continue
                            }
                        }
                        break
                    }
                    if (i !== u && i !== h && i !== c && i !== f) break
                }
                if (a = a.slice(n + l.i - w + y), s = l.i, !a.length) {
                    if (t < r.length - 1) return a = r[++t], v(0), !0;
                    l.finished = !0
                }
                return m !== l.i || g !== t
            }
            return l.save = function () {
                s = l.i, o.push({
                    current: a,
                    i: l.i,
                    j: t
                })
            }, l.restore = function (e) {
                (l.i > n || l.i === n && e && !i) && (n = l.i, i = e);
                var r = o.pop();
                a = r.current, s = l.i = r.i, t = r.j
            }, l.forget = function () {
                o.pop()
            }, l.isWhitespace = function (t) {
                var n = l.i + (t || 0),
                    i = e.charCodeAt(n);
                return i === u || i === f || i === c || i === h
            }, l.$re = function (e) {
                l.i > s && (a = a.slice(l.i - s), s = l.i);
                var t = e.exec(a);
                return t ? (v(t[0].length), "string" == typeof t ? t : 1 === t.length ? t[0] : t) : null
            }, l.$char = function (t) {
                return e.charAt(l.i) !== t ? null : (v(1), t)
            }, l.$str = function (t) {
                for (var n = t.length, i = 0; i < n; i++)
                    if (e.charAt(l.i + i) !== t.charAt(i)) return null;
                return v(n), t
            }, l.$quoted = function (t) {
                var n = t || l.i,
                    i = e.charAt(n);
                if ("'" === i || '"' === i) {
                    for (var r = e.length, a = n, s = 1; s + a < r; s++) {
                        switch (e.charAt(s + a)) {
                            case "\\":
                                s++;
                                continue;
                            case "\r":
                            case "\n":
                                break;
                            case i:
                                var o = e.substr(a, s + 1);
                                return t || 0 === t ? [i, o] : (v(s + 1), o)
                        }
                    }
                    return null
                }
            }, l.$parseUntil = function (t) {
                var n, i = "",
                    r = null,
                    a = !1,
                    s = 0,
                    o = [],
                    u = [],
                    c = e.length,
                    h = l.i,
                    f = l.i,
                    p = l.i,
                    d = !0;
                n = "string" == typeof t ? function (e) {
                    return e === t
                } : function (e) {
                    return t.test(e)
                };
                do {
                    var m = e.charAt(p);
                    if (0 === s && n(m))(r = e.substr(f, p - f)) ? u.push(r) : u.push(" "), r = u, v(p - h), d = !1;
                    else {
                        if (a) {
                            "*" === m && "/" === e.charAt(p + 1) && (p++, s--, a = !1), p++;
                            continue
                        }
                        switch (m) {
                            case "\\":
                                p++, m = e.charAt(p), u.push(e.substr(f, p - f + 1)), f = p + 1;
                                break;
                            case "/":
                                "*" === e.charAt(p + 1) && (p++, a = !0, s++);
                                break;
                            case "'":
                            case '"':
                                (i = l.$quoted(p)) ? (u.push(e.substr(f, p - f), i), f = (p += i[1].length - 1) + 1) : (v(p - h), r = m, d = !1);
                                break;
                            case "{":
                                o.push("}"), s++;
                                break;
                            case "(":
                                o.push(")"), s++;
                                break;
                            case "[":
                                o.push("]"), s++;
                                break;
                            case "}":
                            case ")":
                            case "]":
                                var g = o.pop();
                                m === g ? s-- : (v(p - h), r = g, d = !1)
                        }++p > c && (d = !1)
                    }
                } while (d);
                return r || null
            }, l.autoCommentAbsorb = !0, l.commentStore = [], l.finished = !1, l.peek = function (t) {
                if ("string" == typeof t) {
                    for (var n = 0; n < t.length; n++)
                        if (e.charAt(l.i + n) !== t.charAt(n)) return !1;
                    return !0
                }
                return t.test(a)
            }, l.peekChar = function (t) {
                return e.charAt(l.i) === t
            }, l.currentChar = function () {
                return e.charAt(l.i)
            }, l.prevChar = function () {
                return e.charAt(l.i - 1)
            }, l.getInput = function () {
                return e
            }, l.peekNotNumeric = function () {
                var t = e.charCodeAt(l.i);
                return t > 57 || t < 43 || t === p || 44 === t
            }, l.start = function (i, o, u) {
                e = i, l.i = t = s = n = 0, r = o ? function (e, t) {
                    var n, i, r, a, s, o, l, u, c, h = e.length,
                        f = 0,
                        p = 0,
                        v = [],
                        d = 0;

                    function m(t) {
                        var n = s - d;
                        n < 512 && !t || !n || (v.push(e.slice(d, s + 1)), d = s + 1)
                    }
                    for (s = 0; s < h; s++)
                        if (!((l = e.charCodeAt(s)) >= 97 && l <= 122 || l < 34)) switch (l) {
                            case 40:
                                p++, i = s;
                                continue;
                            case 41:
                                if (--p < 0) return t("missing opening `(`", s);
                                continue;
                            case 59:
                                p || m();
                                continue;
                            case 123:
                                f++, n = s;
                                continue;
                            case 125:
                                if (--f < 0) return t("missing opening `{`", s);
                                f || p || m();
                                continue;
                            case 92:
                                if (s < h - 1) {
                                    s++;
                                    continue
                                }
                                return t("unescaped `\\`", s);
                            case 34:
                            case 39:
                            case 96:
                                for (c = 0, o = s, s += 1; s < h; s++)
                                    if (!((u = e.charCodeAt(s)) > 96)) {
                                        if (u == l) {
                                            c = 1;
                                            break
                                        }
                                        if (92 == u) {
                                            if (s == h - 1) return t("unescaped `\\`", s);
                                            s++
                                        }
                                    } if (c) continue;
                                return t("unmatched `".concat(String.fromCharCode(l), "`"), o);
                            case 47:
                                if (p || s == h - 1) continue;
                                if (47 == (u = e.charCodeAt(s + 1)))
                                    for (s += 2; s < h && (!((u = e.charCodeAt(s)) <= 13) || 10 != u && 13 != u); s++);
                                else if (42 == u) {
                                    for (r = o = s, s += 2; s < h - 1 && (125 == (u = e.charCodeAt(s)) && (a = s), 42 != u || 47 != e.charCodeAt(s + 1)); s++);
                                    if (s == h - 1) return t("missing closing `*/`", o);
                                    s++
                                }
                                continue;
                            case 42:
                                if (s < h - 1 && 47 == e.charCodeAt(s + 1)) return t("unmatched `/*`", s);
                                continue
                        }
                    return 0 !== f ? t(r > n && a > r ? "missing closing `}` or `*/`" : "missing closing `}`", n) : 0 !== p ? t("missing closing `)`", i) : (m(!0), v)
                }(i, u) : [i], a = r[0], v(0)
            }, l.end = function () {
                var t, r = l.i >= e.length;
                return l.i < n && (t = i, l.i = n), {
                    isFinished: r,
                    furthest: l.i,
                    furthestPossibleErrorMessage: t,
                    furthestReachedEnd: l.i >= e.length - 1,
                    furthestChar: e[l.i]
                }
            }, l
        },
        Je = function e(t, n, i) {
            var r, a = We();

            function s(e, t) {
                throw new $({
                    index: a.i,
                    filename: i.filename,
                    type: t || "Syntax",
                    message: e
                }, n)
            }

            function o(e, t) {
                var n = e instanceof Function ? e.call(r) : a.$re(e);
                if (n) return n;
                s(t || ("string" == typeof e ? "expected '".concat(e, "' got '").concat(a.currentChar(), "'") : "unexpected token"))
            }

            function l(e, t) {
                if (a.$char(e)) return e;
                s(t || "expected '".concat(e, "' got '").concat(a.currentChar(), "'"))
            }

            function u(e) {
                var t = i.filename;
                return {
                    lineNumber: M(e, a.getInput()).line + 1,
                    fileName: t
                }
            }
            return {
                parserInput: a,
                imports: n,
                fileInfo: i,
                parseNode: function (e, t, i, s, o) {
                    var l, u = [],
                        c = a;
                    try {
                        c.start(e, !1, function (e, t) {
                            o({
                                message: e,
                                index: t + i
                            })
                        });
                        for (var h, f, p = 0; h = t[p]; p++) f = c.i, (l = r[h]()) ? (l._index = f + i, l._fileInfo = s, u.push(l)) : u.push(null);
                        c.end().isFinished ? o(null, u) : o(!0, null)
                    } catch (e) {
                        throw new $({
                            index: e.index + i,
                            message: e.message
                        }, n, s.filename)
                    }
                },
                parse: function (r, s, o) {
                    var l, u, c, h, f = null,
                        p = "";
                    if (u = o && o.globalVars ? "".concat(e.serializeVars(o.globalVars), "\n") : "", c = o && o.modifyVars ? "\n".concat(e.serializeVars(o.modifyVars)) : "", t.pluginManager)
                        for (var v = t.pluginManager.getPreProcessors(), d = 0; d < v.length; d++) r = v[d].process(r, {
                            context: t,
                            imports: n,
                            fileInfo: i
                        });
                    (u || o && o.banner) && (p = (o && o.banner ? o.banner : "") + u, (h = n.contentsIgnoredChars)[i.filename] = h[i.filename] || 0, h[i.filename] += p.length), r = p + (r = r.replace(/\r\n?/g, "\n")).replace(/^\uFEFF/, "") + c, n.contents[i.filename] = r;
                    try {
                        a.start(r, t.chunkInput, function (e, t) {
                            throw new $({
                                index: t,
                                type: "Parse",
                                message: e,
                                filename: i.filename
                            }, n)
                        }), Me.Node.prototype.parse = this, l = new Me.Ruleset(null, this.parsers.primary()), Me.Node.prototype.rootNode = l, l.root = !0, l.firstRoot = !0, l.functionRegistry = Z.inherit()
                    } catch (e) {
                        return s(new $(e, n, i.filename))
                    }
                    var m = a.end();
                    if (!m.isFinished) {
                        var g = m.furthestPossibleErrorMessage;
                        g || (g = "Unrecognised input", "}" === m.furthestChar ? g += ". Possibly missing opening '{'" : ")" === m.furthestChar ? g += ". Possibly missing opening '('" : m.furthestReachedEnd && (g += ". Possibly missing something")), f = new $({
                            type: "Parse",
                            message: g,
                            index: m.furthest,
                            filename: i.filename
                        }, n)
                    }
                    var y = function (e) {
                        return (e = f || e || n.error) ? (e instanceof $ || (e = new $(e, n, i.filename)), s(e)) : s(null, l)
                    };
                    if (!1 === t.processImports) return y();
                    new Ge.ImportVisitor(n, y).run(l)
                },
                parsers: r = {
                    primary: function () {
                        for (var e, t = this.mixin, n = [];;) {
                            for (; e = this.comment();) n.push(e);
                            if (a.finished) break;
                            if (a.peek("}")) break;
                            if (e = this.extendRule()) n = n.concat(e);
                            else if (e = t.definition() || this.declaration() || this.ruleset() || t.call(!1, !1) || this.variableCall() || this.entities.call() || this.atrule()) n.push(e);
                            else {
                                for (var i = !1; a.$char(";");) i = !0;
                                if (!i) break
                            }
                        }
                        return n
                    },
                    comment: function () {
                        if (a.commentStore.length) {
                            var e = a.commentStore.shift();
                            return new Me.Comment(e.text, e.isLineComment, e.index, i)
                        }
                    },
                    entities: {
                        mixinLookup: function () {
                            return r.mixin.call(!0, !0)
                        },
                        quoted: function (e) {
                            var t, n = a.i,
                                r = !1;
                            if (a.save(), a.$char("~")) r = !0;
                            else if (e) return void a.restore();
                            if (t = a.$quoted()) return a.forget(), new Me.Quoted(t.charAt(0), t.substr(1, t.length - 2), r, n, i);
                            a.restore()
                        },
                        keyword: function () {
                            var e = a.$char("%") || a.$re(/^\[?(?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+\]?/);
                            if (e) return Me.Color.fromKeyword(e) || new Me.Keyword(e)
                        },
                        call: function () {
                            var e, t, n, r = a.i;
                            if (!a.peek(/^url\(/i))
                                if (a.save(), e = a.$re(/^([\w-]+|%|progid:[\w\.]+)\(/)) {
                                    if (e = e[1], (n = this.customFuncCall(e)) && (t = n.parse()) && n.stop) return a.forget(), t;
                                    if (t = this.arguments(t), a.$char(")")) return a.forget(), new Me.Call(e, t, r, i);
                                    a.restore("Could not parse call arguments or missing ')'")
                                } else a.forget()
                        },
                        customFuncCall: function (e) {
                            return {
                                alpha: t(r.ieAlpha, !0),
                                boolean: t(n),
                                if: t(n)
                            } [e.toLowerCase()];

                            function t(e, t) {
                                return {
                                    parse: e,
                                    stop: t
                                }
                            }

                            function n() {
                                return [o(r.condition, "expected condition")]
                            }
                        },
                        arguments: function (e) {
                            var t, n, i = e || [],
                                s = [];
                            for (a.save();;) {
                                if (e) e = !1;
                                else {
                                    if (!(n = r.detachedRuleset() || this.assignment() || r.expression())) break;
                                    n.value && 1 == n.value.length && (n = n.value[0]), i.push(n)
                                }
                                a.$char(",") || (a.$char(";") || t) && (t = !0, n = i.length < 1 ? i[0] : new Me.Value(i), s.push(n), i = [])
                            }
                            return a.forget(), t ? s : i
                        },
                        literal: function () {
                            return this.dimension() || this.color() || this.quoted() || this.unicodeDescriptor()
                        },
                        assignment: function () {
                            var e, t;
                            if (a.save(), e = a.$re(/^\w+(?=\s?=)/i))
                                if (a.$char("=")) {
                                    if (t = r.entity()) return a.forget(), new Me.Assignment(e, t);
                                    a.restore()
                                } else a.restore();
                            else a.restore()
                        },
                        url: function () {
                            var e, t = a.i;
                            if (a.autoCommentAbsorb = !1, a.$str("url(")) return e = this.quoted() || this.variable() || this.property() || a.$re(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/) || "", a.autoCommentAbsorb = !0, l(")"), new Me.URL(null != e.value || e instanceof Me.Variable || e instanceof Me.Property ? e : new Me.Anonymous(e, t), t, i);
                            a.autoCommentAbsorb = !0
                        },
                        variable: function () {
                            var e, t, n = a.i;
                            if (a.save(), "@" === a.currentChar() && (t = a.$re(/^@@?[\w-]+/))) {
                                if ("(" === (e = a.currentChar()) || "[" === e && !a.prevChar().match(/^\s/)) {
                                    var s = r.variableCall(t);
                                    if (s) return a.forget(), s
                                }
                                return a.forget(), new Me.Variable(t, n, i)
                            }
                            a.restore()
                        },
                        variableCurly: function () {
                            var e, t = a.i;
                            if ("@" === a.currentChar() && (e = a.$re(/^@\{([\w-]+)\}/))) return new Me.Variable("@".concat(e[1]), t, i)
                        },
                        property: function () {
                            var e, t = a.i;
                            if ("$" === a.currentChar() && (e = a.$re(/^\$[\w-]+/))) return new Me.Property(e, t, i)
                        },
                        propertyCurly: function () {
                            var e, t = a.i;
                            if ("$" === a.currentChar() && (e = a.$re(/^\$\{([\w-]+)\}/))) return new Me.Property("$".concat(e[1]), t, i)
                        },
                        color: function () {
                            var e;
                            if (a.save(), "#" === a.currentChar() && (e = a.$re(/^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})([\w.#\[])?/)) && !e[2]) return a.forget(), new Me.Color(e[1], void 0, e[0]);
                            a.restore()
                        },
                        colorKeyword: function () {
                            a.save();
                            var e = a.autoCommentAbsorb;
                            a.autoCommentAbsorb = !1;
                            var t = a.$re(/^[_A-Za-z-][_A-Za-z0-9-]+/);
                            if (a.autoCommentAbsorb = e, t) {
                                a.restore();
                                var n = Me.Color.fromKeyword(t);
                                return n ? (a.$str(t), n) : void 0
                            }
                            a.forget()
                        },
                        dimension: function () {
                            if (!a.peekNotNumeric()) {
                                var e = a.$re(/^([+-]?\d*\.?\d+)(%|[a-z_]+)?/i);
                                return e ? new Me.Dimension(e[1], e[2]) : void 0
                            }
                        },
                        unicodeDescriptor: function () {
                            var e;
                            if (e = a.$re(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/)) return new Me.UnicodeDescriptor(e[0])
                        },
                        javascript: function () {
                            var e, t = a.i;
                            a.save();
                            var n = a.$char("~");
                            if (a.$char("`")) {
                                if (e = a.$re(/^[^`]*`/)) return a.forget(), new Me.JavaScript(e.substr(0, e.length - 1), Boolean(n), t, i);
                                a.restore("invalid javascript definition")
                            } else a.restore()
                        }
                    },
                    variable: function () {
                        var e;
                        if ("@" === a.currentChar() && (e = a.$re(/^(@[\w-]+)\s*:/))) return e[1]
                    },
                    variableCall: function (e) {
                        var t, n, s = a.i,
                            o = !!e,
                            l = e;
                        if (a.save(), l || "@" === a.currentChar() && (l = a.$re(/^(@[\w-]+)(\(\s*\))?/))) {
                            if (!(t = this.mixin.ruleLookups()) && (o && "()" !== a.$str("()") || "()" !== l[2])) return void a.restore("Missing '[...]' lookup in variable call");
                            o || (l = l[1]), t && r.important() && (n = !0);
                            var u = new Me.VariableCall(l, s, i);
                            return !o && r.end() ? (a.forget(), u) : (a.forget(), new Me.NamespaceValue(u, t, n, s, i))
                        }
                        a.restore()
                    },
                    extend: function (e) {
                        var t, n, r, l, u, c = a.i;
                        if (a.$str(e ? "&:extend(" : ":extend(")) {
                            do {
                                for (r = null, t = null; !(r = a.$re(/^(all)(?=\s*(\)|,))/)) && (n = this.element());) t ? t.push(n) : t = [n];
                                r = r && r[1], t || s("Missing target selector for :extend()."), u = new Me.Extend(new Me.Selector(t), r, c, i), l ? l.push(u) : l = [u]
                            } while (a.$char(","));
                            return o(/^\)/), e && o(/^;/), l
                        }
                    },
                    extendRule: function () {
                        return this.extend(!0)
                    },
                    mixin: {
                        call: function (e, t) {
                            var n, s, o, u, c = a.currentChar(),
                                h = !1,
                                f = a.i;
                            if ("." === c || "#" === c) {
                                if (a.save(), s = this.elements()) {
                                    if (a.$char("(") && (o = this.args(!0).args, l(")"), u = !0), !1 !== t && (n = this.ruleLookups()), !0 === t && !n) return void a.restore();
                                    if (e && !n && !u) return void a.restore();
                                    if (!e && r.important() && (h = !0), e || r.end()) {
                                        a.forget();
                                        var p = new Me.mixin.Call(s, o, f, i, !n && h);
                                        return n ? new Me.NamespaceValue(p, n, h) : p
                                    }
                                }
                                a.restore()
                            }
                        },
                        elements: function () {
                            for (var e, t, n, r, s, o = /^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/; s = a.i, t = a.$re(o);) r = new Me.Element(n, t, !1, s, i), e ? e.push(r) : e = [r], n = a.$char(">");
                            return e
                        },
                        args: function (e) {
                            var t, n, i, o, l, u, c, h = r.entities,
                                f = {
                                    args: null,
                                    variadic: !1
                                },
                                p = [],
                                v = [],
                                d = [],
                                m = !0;
                            for (a.save();;) {
                                if (e) u = r.detachedRuleset() || r.expression();
                                else {
                                    if (a.commentStore.length = 0, a.$str("...")) {
                                        f.variadic = !0, a.$char(";") && !t && (t = !0), (t ? v : d).push({
                                            variadic: !0
                                        });
                                        break
                                    }
                                    u = h.variable() || h.property() || h.literal() || h.keyword() || this.call(!0)
                                }
                                if (!u || !m) break;
                                o = null, u.throwAwayComments && u.throwAwayComments(), l = u;
                                var g = null;
                                if (e ? u.value && 1 == u.value.length && (g = u.value[0]) : g = u, g && (g instanceof Me.Variable || g instanceof Me.Property))
                                    if (a.$char(":")) {
                                        if (p.length > 0 && (t && s("Cannot mix ; and , as delimiter types"), n = !0), !(l = r.detachedRuleset() || r.expression())) {
                                            if (!e) return a.restore(), f.args = [], f;
                                            s("could not understand value for named argument")
                                        }
                                        o = i = g.name
                                    } else if (a.$str("...")) {
                                    if (!e) {
                                        f.variadic = !0, a.$char(";") && !t && (t = !0), (t ? v : d).push({
                                            name: u.name,
                                            variadic: !0
                                        });
                                        break
                                    }
                                    c = !0
                                } else e || (i = o = g.name, l = null);
                                l && p.push(l), d.push({
                                    name: o,
                                    value: l,
                                    expand: c
                                }), a.$char(",") ? m = !0 : ((m = ";" === a.$char(";")) || t) && (n && s("Cannot mix ; and , as delimiter types"), t = !0, p.length > 1 && (l = new Me.Value(p)), v.push({
                                    name: i,
                                    value: l,
                                    expand: c
                                }), i = null, p = [], n = !1)
                            }
                            return a.forget(), f.args = t ? v : d, f
                        },
                        definition: function () {
                            var e, t, n, i, s = [],
                                l = !1;
                            if (!("." !== a.currentChar() && "#" !== a.currentChar() || a.peek(/^[^{]*\}/)))
                                if (a.save(), t = a.$re(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/)) {
                                    e = t[1];
                                    var u = this.args(!1);
                                    if (s = u.args, l = u.variadic, !a.$char(")")) return void a.restore("Missing closing ')'");
                                    if (a.commentStore.length = 0, a.$str("when") && (i = o(r.conditions, "expected condition")), n = r.block()) return a.forget(), new Me.mixin.Definition(e, s, n, i, l);
                                    a.restore()
                                } else a.forget()
                        },
                        ruleLookups: function () {
                            var e, t = [];
                            if ("[" === a.currentChar()) {
                                for (;;) {
                                    if (a.save(), !(e = this.lookupValue()) && "" !== e) {
                                        a.restore();
                                        break
                                    }
                                    t.push(e), a.forget()
                                }
                                return t.length > 0 ? t : void 0
                            }
                        },
                        lookupValue: function () {
                            if (a.save(), a.$char("[")) {
                                var e = a.$re(/^(?:[@$]{0,2})[_a-zA-Z0-9-]*/);
                                if (a.$char("]")) return e || "" === e ? (a.forget(), e) : void a.restore();
                                a.restore()
                            } else a.restore()
                        }
                    },
                    entity: function () {
                        var e = this.entities;
                        return this.comment() || e.literal() || e.variable() || e.url() || e.property() || e.call() || e.keyword() || this.mixin.call(!0) || e.javascript()
                    },
                    end: function () {
                        return a.$char(";") || a.peek("}")
                    },
                    ieAlpha: function () {
                        var e;
                        if (a.$re(/^opacity=/i)) return (e = a.$re(/^\d+/)) || (e = o(r.entities.variable, "Could not parse alpha"), e = "@{".concat(e.name.slice(1), "}")), l(")"), new Me.Quoted("", "alpha(opacity=".concat(e, ")"))
                    },
                    element: function () {
                        var e, t, n, r = a.i;
                        if (t = this.combinator(), (e = a.$re(/^(?:\d+\.\d+|\d+)%/) || a.$re(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/) || a.$char("*") || a.$char("&") || this.attribute() || a.$re(/^\([^&()@]+\)/) || a.$re(/^[\.#:](?=@)/) || this.entities.variableCurly()) || (a.save(), a.$char("(") ? (n = this.selector(!1)) && a.$char(")") ? (e = new Me.Paren(n), a.forget()) : a.restore("Missing closing ')'") : a.forget()), e) return new Me.Element(t, e, e instanceof Me.Variable, r, i)
                    },
                    combinator: function () {
                        var e = a.currentChar();
                        if ("/" === e) {
                            a.save();
                            var t = a.$re(/^\/[a-z]+\//i);
                            if (t) return a.forget(), new Me.Combinator(t);
                            a.restore()
                        }
                        if (">" === e || "+" === e || "~" === e || "|" === e || "^" === e) {
                            for (a.i++, "^" === e && "^" === a.currentChar() && (e = "^^", a.i++); a.isWhitespace();) a.i++;
                            return new Me.Combinator(e)
                        }
                        return a.isWhitespace(-1) ? new Me.Combinator(" ") : new Me.Combinator(null)
                    },
                    selector: function (e) {
                        var t, n, r, l, u, c, h, f = a.i;
                        for (e = !1 !== e;
                            (e && (n = this.extend()) || e && (c = a.$str("when")) || (l = this.element())) && (c ? h = o(this.conditions, "expected condition") : h ? s("CSS guard can only be used at the end of selector") : n ? u = u ? u.concat(n) : n : (u && s("Extend can only be used at the end of selector"), r = a.currentChar(), t ? t.push(l) : t = [l], l = null), "{" !== r && "}" !== r && ";" !== r && "," !== r && ")" !== r););
                        if (t) return new Me.Selector(t, u, h, f, i);
                        u && s("Extend must be used to extend a selector, it cannot be used on its own")
                    },
                    selectors: function () {
                        for (var e, t;
                            (e = this.selector()) && (t ? t.push(e) : t = [e], a.commentStore.length = 0, e.condition && t.length > 1 && s("Guards are only currently allowed on a single selector."), a.$char(","));) e.condition && s("Guards are only currently allowed on a single selector."), a.commentStore.length = 0;
                        return t
                    },
                    attribute: function () {
                        if (a.$char("[")) {
                            var e, t, n, i = this.entities;
                            return (e = i.variableCurly()) || (e = o(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/)), (n = a.$re(/^[|~*$^]?=/)) && (t = i.quoted() || a.$re(/^[0-9]+%/) || a.$re(/^[\w-]+/) || i.variableCurly()), l("]"), new Me.Attribute(e, n, t)
                        }
                    },
                    block: function () {
                        var e;
                        if (a.$char("{") && (e = this.primary()) && a.$char("}")) return e
                    },
                    blockRuleset: function () {
                        var e = this.block();
                        return e && (e = new Me.Ruleset(null, e)), e
                    },
                    detachedRuleset: function () {
                        var e, t, n;
                        if (a.save(), !a.$re(/^[.#]\(/) || (t = (e = this.mixin.args(!1)).args, n = e.variadic, a.$char(")"))) {
                            var i = this.blockRuleset();
                            if (i) return a.forget(), t ? new Me.mixin.Definition(null, t, i, null, n) : new Me.DetachedRuleset(i);
                            a.restore()
                        } else a.restore()
                    },
                    ruleset: function () {
                        var e, n, i;
                        if (a.save(), t.dumpLineNumbers && (i = u(a.i)), (e = this.selectors()) && (n = this.block())) {
                            a.forget();
                            var r = new Me.Ruleset(e, n, t.strictImports);
                            return t.dumpLineNumbers && (r.debugInfo = i), r
                        }
                        a.restore()
                    },
                    declaration: function () {
                        var e, t, n, r, s, o, l = a.i,
                            u = a.currentChar();
                        if ("." !== u && "#" !== u && "&" !== u && ":" !== u)
                            if (a.save(), e = this.variable() || this.ruleProperty()) {
                                if ((o = "string" == typeof e) && (t = this.detachedRuleset()) && (n = !0), a.commentStore.length = 0, !t) {
                                    if (s = !o && e.length > 1 && e.pop().value, t = e[0].value && "--" === e[0].value.slice(0, 2) ? this.permissiveValue() : this.anonymousValue()) return a.forget(), new Me.Declaration(e, t, !1, s, l, i);
                                    t || (t = this.value()), t ? r = this.important() : o && (t = this.permissiveValue())
                                }
                                if (t && (this.end() || n)) return a.forget(), new Me.Declaration(e, t, r, s, l, i);
                                a.restore()
                            } else a.restore()
                    },
                    anonymousValue: function () {
                        var e = a.i,
                            t = a.$re(/^([^.#@\$+\/'"*`(;{}-]*);/);
                        if (t) return new Me.Anonymous(t[1], e)
                    },
                    permissiveValue: function (e) {
                        var t, n, r, o, l = e || ";",
                            u = a.i,
                            c = [];

                        function h() {
                            var e = a.currentChar();
                            return "string" == typeof l ? e === l : l.test(e)
                        }
                        if (!h()) {
                            o = [];
                            do {
                                (n = this.comment()) ? o.push(n): (n = this.entity()) && o.push(n)
                            } while (n);
                            if (r = h(), o.length > 0) {
                                if (o = new Me.Expression(o), r) return o;
                                c.push(o), " " === a.prevChar() && c.push(new Me.Anonymous(" ", u))
                            }
                            if (a.save(), o = a.$parseUntil(l)) {
                                if ("string" == typeof o && s("Expected '".concat(o, "'"), "Parse"), 1 === o.length && " " === o[0]) return a.forget(), new Me.Anonymous("", u);
                                var f;
                                for (t = 0; t < o.length; t++)
                                    if (f = o[t], Array.isArray(f)) c.push(new Me.Quoted(f[0], f[1], !0, u, i));
                                    else {
                                        t === o.length - 1 && (f = f.trim());
                                        var p = new Me.Quoted("'", f, !0, u, i);
                                        p.variableRegex = /@([\w-]+)/g, p.propRegex = /\$([\w-]+)/g, c.push(p)
                                    } return a.forget(), new Me.Expression(c, !0)
                            }
                            a.restore()
                        }
                    },
                    import: function () {
                        var e, t, n = a.i,
                            r = a.$re(/^@import?\s+/);
                        if (r) {
                            var o = (r ? this.importOptions() : null) || {};
                            if (e = this.entities.quoted() || this.entities.url()) return t = this.mediaFeatures(), a.$char(";") || (a.i = n, s("missing semi-colon or unrecognised media features on import")), t = t && new Me.Value(t), new Me.Import(e, t, o, n, i);
                            a.i = n, s("malformed import statement")
                        }
                    },
                    importOptions: function () {
                        var e, t, n, i = {};
                        if (!a.$char("(")) return null;
                        do {
                            if (e = this.importOption()) {
                                switch (n = !0, t = e) {
                                    case "css":
                                        t = "less", n = !1;
                                        break;
                                    case "once":
                                        t = "multiple", n = !1
                                }
                                if (i[t] = n, !a.$char(",")) break
                            }
                        } while (e);
                        return l(")"), i
                    },
                    importOption: function () {
                        var e = a.$re(/^(less|css|multiple|once|inline|reference|optional)/);
                        if (e) return e[1]
                    },
                    mediaFeature: function () {
                        var e, t, n = this.entities,
                            r = [];
                        a.save();
                        do {
                            (e = n.keyword() || n.variable() || n.mixinLookup()) ? r.push(e): a.$char("(") && (t = this.property(), e = this.value(), a.$char(")") ? t && e ? r.push(new Me.Paren(new Me.Declaration(t, e, null, null, a.i, i, !0))) : e ? r.push(new Me.Paren(e)) : s("badly formed media feature definition") : s("Missing closing ')'", "Parse"))
                        } while (e);
                        if (a.forget(), r.length > 0) return new Me.Expression(r)
                    },
                    mediaFeatures: function () {
                        var e, t = this.entities,
                            n = [];
                        do {
                            if (e = this.mediaFeature()) {
                                if (n.push(e), !a.$char(",")) break
                            } else if ((e = t.variable() || t.mixinLookup()) && (n.push(e), !a.$char(","))) break
                        } while (e);
                        return n.length > 0 ? n : null
                    },
                    media: function () {
                        var e, n, r, o, l = a.i;
                        if (t.dumpLineNumbers && (o = u(l)), a.save(), a.$str("@media")) return e = this.mediaFeatures(), (n = this.block()) || s("media definitions require block statements after any features"), a.forget(), r = new Me.Media(n, e, l, i), t.dumpLineNumbers && (r.debugInfo = o), r;
                        a.restore()
                    },
                    plugin: function () {
                        var e, t, n, r = a.i;
                        if (a.$re(/^@plugin?\s+/)) {
                            if (n = (t = this.pluginArgs()) ? {
                                    pluginArgs: t,
                                    isPlugin: !0
                                } : {
                                    isPlugin: !0
                                }, e = this.entities.quoted() || this.entities.url()) return a.$char(";") || (a.i = r, s("missing semi-colon on @plugin")), new Me.Import(e, null, n, r, i);
                            a.i = r, s("malformed @plugin statement")
                        }
                    },
                    pluginArgs: function () {
                        if (a.save(), !a.$char("(")) return a.restore(), null;
                        var e = a.$re(/^\s*([^\);]+)\)\s*/);
                        return e[1] ? (a.forget(), e[1].trim()) : (a.restore(), null)
                    },
                    atrule: function () {
                        var e, n, r, o, l, c, h, f = a.i,
                            p = !0,
                            v = !0;
                        if ("@" === a.currentChar()) {
                            if (n = this.import() || this.plugin() || this.media()) return n;
                            if (a.save(), e = a.$re(/^@[a-z-]+/)) {
                                switch (o = e, "-" == e.charAt(1) && e.indexOf("-", 2) > 0 && (o = "@".concat(e.slice(e.indexOf("-", 2) + 1))), o) {
                                    case "@charset":
                                        l = !0, p = !1;
                                        break;
                                    case "@namespace":
                                        c = !0, p = !1;
                                        break;
                                    case "@keyframes":
                                    case "@counter-style":
                                        l = !0;
                                        break;
                                    case "@document":
                                    case "@supports":
                                        h = !0, v = !1;
                                        break;
                                    default:
                                        h = !0
                                }
                                if (a.commentStore.length = 0, l ? (n = this.entity()) || s("expected ".concat(e, " identifier")) : c ? (n = this.expression()) || s("expected ".concat(e, " expression")) : h && (n = this.permissiveValue(/^[{;]/), p = "{" === a.currentChar(), n ? n.value || (n = null) : p || ";" === a.currentChar() || s("".concat(e, " rule is missing block or ending semi-colon"))), p && (r = this.blockRuleset()), r || !p && n && a.$char(";")) return a.forget(), new Me.AtRule(e, n, r, f, i, t.dumpLineNumbers ? u(f) : null, v);
                                a.restore("at-rule options not recognised")
                            }
                        }
                    },
                    value: function () {
                        var e, t = [],
                            n = a.i;
                        do {
                            if ((e = this.expression()) && (t.push(e), !a.$char(","))) break
                        } while (e);
                        if (t.length > 0) return new Me.Value(t, n)
                    },
                    important: function () {
                        if ("!" === a.currentChar()) return a.$re(/^! *important/)
                    },
                    sub: function () {
                        var e, t;
                        if (a.save(), a.$char("(")) return (e = this.addition()) && a.$char(")") ? (a.forget(), (t = new Me.Expression([e])).parens = !0, t) : void a.restore("Expected ')'");
                        a.restore()
                    },
                    multiplication: function () {
                        var e, t, n, i, r;
                        if (e = this.operand()) {
                            for (r = a.isWhitespace(-1); !a.peek(/^\/[*\/]/);) {
                                if (a.save(), !(n = a.$char("/") || a.$char("*") || a.$str("./"))) {
                                    a.forget();
                                    break
                                }
                                if (!(t = this.operand())) {
                                    a.restore();
                                    break
                                }
                                a.forget(), e.parensInOp = !0, t.parensInOp = !0, i = new Me.Operation(n, [i || e, t], r), r = a.isWhitespace(-1)
                            }
                            return i || e
                        }
                    },
                    addition: function () {
                        var e, t, n, i, r;
                        if (e = this.multiplication()) {
                            for (r = a.isWhitespace(-1);
                                (n = a.$re(/^[-+]\s+/) || !r && (a.$char("+") || a.$char("-"))) && (t = this.multiplication());) e.parensInOp = !0, t.parensInOp = !0, i = new Me.Operation(n, [i || e, t], r), r = a.isWhitespace(-1);
                            return i || e
                        }
                    },
                    conditions: function () {
                        var e, t, n, i = a.i;
                        if (e = this.condition(!0)) {
                            for (; a.peek(/^,\s*(not\s*)?\(/) && a.$char(",") && (t = this.condition(!0));) n = new Me.Condition("or", n || e, t, i);
                            return n || e
                        }
                    },
                    condition: function (e) {
                        var t, n, i;
                        if (t = this.conditionAnd(e)) {
                            if (n = a.$str("or")) {
                                if (!(i = this.condition(e))) return;
                                t = new Me.Condition(n, t, i)
                            }
                            return t
                        }
                    },
                    conditionAnd: function (e) {
                        var t, n, i, r, s = this;
                        if (t = (r = s.negatedCondition(e) || s.parenthesisCondition(e)) || e ? r : s.atomicCondition(e)) {
                            if (n = a.$str("and")) {
                                if (!(i = this.conditionAnd(e))) return;
                                t = new Me.Condition(n, t, i)
                            }
                            return t
                        }
                    },
                    negatedCondition: function (e) {
                        if (a.$str("not")) {
                            var t = this.parenthesisCondition(e);
                            return t && (t.negate = !t.negate), t
                        }
                    },
                    parenthesisCondition: function (e) {
                        var t;
                        if (a.save(), a.$str("(")) {
                            if (t = function (t) {
                                    var n;
                                    if (a.save(), n = t.condition(e)) {
                                        if (a.$char(")")) return a.forget(), n;
                                        a.restore()
                                    } else a.restore()
                                }(this)) return a.forget(), t;
                            if (t = this.atomicCondition(e)) {
                                if (a.$char(")")) return a.forget(), t;
                                a.restore("expected ')' got '".concat(a.currentChar(), "'"))
                            } else a.restore()
                        } else a.restore()
                    },
                    atomicCondition: function (e) {
                        var t, n, i, r, o = this.entities,
                            l = a.i;

                        function u() {
                            return this.addition() || o.keyword() || o.quoted() || o.mixinLookup()
                        }
                        if (t = (u = u.bind(this))()) return a.$char(">") ? r = a.$char("=") ? ">=" : ">" : a.$char("<") ? r = a.$char("=") ? "<=" : "<" : a.$char("=") && (r = a.$char(">") ? "=>" : a.$char("<") ? "=<" : "="), r ? (n = u()) ? i = new Me.Condition(r, t, n, l, !1) : s("expected expression") : i = new Me.Condition("=", t, new Me.Keyword("true"), l, !1), i
                    },
                    operand: function () {
                        var e, t = this.entities;
                        a.peek(/^-[@\$\(]/) && (e = a.$char("-"));
                        var n = this.sub() || t.dimension() || t.color() || t.variable() || t.property() || t.call() || t.quoted(!0) || t.colorKeyword() || t.mixinLookup();
                        return e && (n.parensInOp = !0, n = new Me.Negative(n)), n
                    },
                    expression: function () {
                        var e, t, n = [],
                            i = a.i;
                        do {
                            (e = this.comment()) ? n.push(e): (e = this.addition() || this.entity()) && (n.push(e), a.peek(/^\/[\/*]/) || (t = a.$char("/")) && n.push(new Me.Anonymous(t, i)))
                        } while (e);
                        if (n.length > 0) return new Me.Expression(n)
                    },
                    property: function () {
                        var e = a.$re(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/);
                        if (e) return e[1]
                    },
                    ruleProperty: function () {
                        var e, t, n = [],
                            r = [];
                        a.save();
                        var s = a.$re(/^([_a-zA-Z0-9-]+)\s*:/);
                        if (s) return n = [new Me.Keyword(s[1])], a.forget(), n;

                        function o(e) {
                            var t = a.i,
                                i = a.$re(e);
                            if (i) return r.push(t), n.push(i[1])
                        }
                        for (o(/^(\*?)/); o(/^((?:[\w-]+)|(?:[@\$]\{[\w-]+\}))/););
                        if (n.length > 1 && o(/^((?:\+_|\+)?)\s*:/)) {
                            for (a.forget(), "" === n[0] && (n.shift(), r.shift()), t = 0; t < n.length; t++) e = n[t], n[t] = "@" !== e.charAt(0) && "$" !== e.charAt(0) ? new Me.Keyword(e) : "@" === e.charAt(0) ? new Me.Variable("@".concat(e.slice(2, -1)), r[t], i) : new Me.Property("$".concat(e.slice(2, -1)), r[t], i);
                            return n
                        }
                        a.restore()
                    }
                }
            }
        };
    Je.serializeVars = function (e) {
        var t = "";
        for (var n in e)
            if (Object.hasOwnProperty.call(e, n)) {
                var i = e[n];
                t += "".concat(("@" === n[0] ? "" : "@") + n, ": ").concat(i).concat(";" === String(i).slice(-1) ? "" : ";")
            } return t
    };
    var He, Qe = {
        boolean: function (e) {
            return e ? j.True : j.False
        },
        if: function (e, t, n) {
            return e ? t : n || new B
        }
    };

    function Ke(e) {
        return Math.min(1, Math.max(0, e))
    }

    function Ze(e, t) {
        var n = He.hsla(t.h, t.s, t.l, t.a);
        if (n) return e.value && /^(rgb|hsl)/.test(e.value) ? n.value = e.value : n.value = "rgb", n
    }

    function Ye(e) {
        if (e.toHSL) return e.toHSL();
        throw new Error("Argument cannot be evaluated to a color")
    }

    function Xe(e) {
        if (e.toHSV) return e.toHSV();
        throw new Error("Argument cannot be evaluated to a color")
    }

    function et(e) {
        if (e instanceof ie) return parseFloat(e.unit.is("%") ? e.value / 100 : e.value);
        if ("number" == typeof e) return e;
        throw {
            type: "Argument",
            message: "color functions take numbers as parameters"
        }
    }
    var tt = He = {
        rgb: function (e, t, n) {
            var i = He.rgba(e, t, n, 1);
            if (i) return i.value = "rgb", i
        },
        rgba: function (e, t, n, i) {
            try {
                if (e instanceof y) return i = t ? et(t) : e.alpha, new y(e.rgb, i, "rgba");
                var r = [e, t, n].map(function (e) {
                    return n = 255, (t = e) instanceof ie && t.unit.is("%") ? parseFloat(t.value * n / 100) : et(t);
                    var t, n
                });
                return i = et(i), new y(r, i, "rgba")
            } catch (e) {}
        },
        hsl: function (e, t, n) {
            var i = He.hsla(e, t, n, 1);
            if (i) return i.value = "hsl", i
        },
        hsla: function (e, t, n, i) {
            try {
                var r, a, s = function (e) {
                    return 6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1 ? r + (a - r) * e * 6 : 2 * e < 1 ? a : 3 * e < 2 ? r + (a - r) * (2 / 3 - e) * 6 : r
                };
                if (e instanceof y) return i = t ? et(t) : e.alpha, new y(e.rgb, i, "hsla");
                e = et(e) % 360 / 360, t = Ke(et(t)), n = Ke(et(n)), i = Ke(et(i)), r = 2 * n - (a = n <= .5 ? n * (t + 1) : n + t - n * t);
                var o = [255 * s(e + 1 / 3), 255 * s(e), 255 * s(e - 1 / 3)];
                return i = et(i), new y(o, i, "hsla")
            } catch (e) {}
        },
        hsv: function (e, t, n) {
            return He.hsva(e, t, n, 1)
        },
        hsva: function (e, t, n, i) {
            var r, a;
            e = et(e) % 360 / 360 * 360, t = et(t), n = et(n), i = et(i);
            var s = [n, n * (1 - t), n * (1 - (a = e / 60 - (r = Math.floor(e / 60 % 6))) * t), n * (1 - (1 - a) * t)],
                o = [
                    [0, 3, 1],
                    [2, 0, 1],
                    [1, 0, 3],
                    [1, 2, 0],
                    [3, 1, 0],
                    [0, 1, 2]
                ];
            return He.rgba(255 * s[o[r][0]], 255 * s[o[r][1]], 255 * s[o[r][2]], i)
        },
        hue: function (e) {
            return new ie(Ye(e).h)
        },
        saturation: function (e) {
            return new ie(100 * Ye(e).s, "%")
        },
        lightness: function (e) {
            return new ie(100 * Ye(e).l, "%")
        },
        hsvhue: function (e) {
            return new ie(Xe(e).h)
        },
        hsvsaturation: function (e) {
            return new ie(100 * Xe(e).s, "%")
        },
        hsvvalue: function (e) {
            return new ie(100 * Xe(e).v, "%")
        },
        red: function (e) {
            return new ie(e.rgb[0])
        },
        green: function (e) {
            return new ie(e.rgb[1])
        },
        blue: function (e) {
            return new ie(e.rgb[2])
        },
        alpha: function (e) {
            return new ie(Ye(e).a)
        },
        luma: function (e) {
            return new ie(e.luma() * e.alpha * 100, "%")
        },
        luminance: function (e) {
            var t = .2126 * e.rgb[0] / 255 + .7152 * e.rgb[1] / 255 + .0722 * e.rgb[2] / 255;
            return new ie(t * e.alpha * 100, "%")
        },
        saturate: function (e, t, n) {
            if (!e.rgb) return null;
            var i = Ye(e);
            return void 0 !== n && "relative" === n.value ? i.s += i.s * t.value / 100 : i.s += t.value / 100, i.s = Ke(i.s), Ze(e, i)
        },
        desaturate: function (e, t, n) {
            var i = Ye(e);
            return void 0 !== n && "relative" === n.value ? i.s -= i.s * t.value / 100 : i.s -= t.value / 100, i.s = Ke(i.s), Ze(e, i)
        },
        lighten: function (e, t, n) {
            var i = Ye(e);
            return void 0 !== n && "relative" === n.value ? i.l += i.l * t.value / 100 : i.l += t.value / 100, i.l = Ke(i.l), Ze(e, i)
        },
        darken: function (e, t, n) {
            var i = Ye(e);
            return void 0 !== n && "relative" === n.value ? i.l -= i.l * t.value / 100 : i.l -= t.value / 100, i.l = Ke(i.l), Ze(e, i)
        },
        fadein: function (e, t, n) {
            var i = Ye(e);
            return void 0 !== n && "relative" === n.value ? i.a += i.a * t.value / 100 : i.a += t.value / 100, i.a = Ke(i.a), Ze(e, i)
        },
        fadeout: function (e, t, n) {
            var i = Ye(e);
            return void 0 !== n && "relative" === n.value ? i.a -= i.a * t.value / 100 : i.a -= t.value / 100, i.a = Ke(i.a), Ze(e, i)
        },
        fade: function (e, t) {
            var n = Ye(e);
            return n.a = t.value / 100, n.a = Ke(n.a), Ze(e, n)
        },
        spin: function (e, t) {
            var n = Ye(e),
                i = (n.h + t.value) % 360;
            return n.h = i < 0 ? 360 + i : i, Ze(e, n)
        },
        mix: function (e, t, n) {
            n || (n = new ie(50));
            var i = n.value / 100,
                r = 2 * i - 1,
                a = Ye(e).a - Ye(t).a,
                s = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2,
                o = 1 - s,
                l = [e.rgb[0] * s + t.rgb[0] * o, e.rgb[1] * s + t.rgb[1] * o, e.rgb[2] * s + t.rgb[2] * o],
                u = e.alpha * i + t.alpha * (1 - i);
            return new y(l, u)
        },
        greyscale: function (e) {
            return He.desaturate(e, new ie(100))
        },
        contrast: function (e, t, n, i) {
            if (!e.rgb) return null;
            if (void 0 === n && (n = He.rgba(255, 255, 255, 1)), void 0 === t && (t = He.rgba(0, 0, 0, 1)), t.luma() > n.luma()) {
                var r = n;
                n = t, t = r
            }
            return i = void 0 === i ? .43 : et(i), e.luma() < i ? n : t
        },
        argb: function (e) {
            return new B(e.toARGB())
        },
        color: function (e) {
            if (e instanceof pe && /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})$/i.test(e.value)) {
                var t = e.value.slice(1);
                return new y(t, void 0, "#".concat(t))
            }
            if (e instanceof y || (e = y.fromKeyword(e.value))) return e.value = void 0, e;
            throw {
                type: "Argument",
                message: "argument must be a color keyword or 3|4|6|8 digit hex e.g. #FFF"
            }
        },
        tint: function (e, t) {
            return He.mix(He.rgb(255, 255, 255), e, t)
        },
        shade: function (e, t) {
            return He.mix(He.rgb(0, 0, 0), e, t)
        }
    };

    function nt(e, t, n) {
        var i, r, a, s, o = t.alpha,
            l = n.alpha,
            u = [];
        a = l + o * (1 - l);
        for (var c = 0; c < 3; c++) s = e(i = t.rgb[c] / 255, r = n.rgb[c] / 255), a && (s = (l * r + o * (i - l * (i + r - s))) / a), u[c] = 255 * s;
        return new y(u, a)
    }
    var it = {
        multiply: function (e, t) {
            return e * t
        },
        screen: function (e, t) {
            return e + t - e * t
        },
        overlay: function (e, t) {
            return (e *= 2) <= 1 ? it.multiply(e, t) : it.screen(e - 1, t)
        },
        softlight: function (e, t) {
            var n = 1,
                i = e;
            return t > .5 && (i = 1, n = e > .25 ? Math.sqrt(e) : ((16 * e - 12) * e + 4) * e), e - (1 - 2 * t) * i * (n - e)
        },
        hardlight: function (e, t) {
            return it.overlay(t, e)
        },
        difference: function (e, t) {
            return Math.abs(e - t)
        },
        exclusion: function (e, t) {
            return e + t - 2 * e * t
        },
        average: function (e, t) {
            return (e + t) / 2
        },
        negation: function (e, t) {
            return 1 - Math.abs(e + t - 1)
        }
    };
    for (var rt in it) it.hasOwnProperty(rt) && (nt[rt] = nt.bind(null, it[rt]));
    var at = function (e) {
            return Array.isArray(e.value) ? e.value : Array(e)
        },
        st = {
            _SELF: function (e) {
                return e
            },
            extract: function (e, t) {
                return t = t.value - 1, at(e)[t]
            },
            length: function (e) {
                return new ie(at(e).length)
            },
            range: function (e, t, n) {
                var i, r, a = 1,
                    s = [];
                t ? (r = t, i = e.value, n && (a = n.value)) : (i = 1, r = e);
                for (var o = i; o <= r.value; o += a) s.push(new ie(o, r.unit));
                return new oe(s)
            },
            each: function (e, t) {
                var n, i, r = [];
                i = !e.value || e instanceof pe ? e.ruleset ? e.ruleset.rules : e.rules ? e.rules : Array.isArray(e) ? e : [e] : Array.isArray(e.value) ? e.value : [e.value];
                var a = "@value",
                    s = "@key",
                    o = "@index";
                t.params ? (a = t.params[0] && t.params[0].name, s = t.params[1] && t.params[1].name, o = t.params[2] && t.params[2].name, t = t.rules) : t = t.ruleset;
                for (var l = 0; l < i.length; l++) {
                    var u = void 0,
                        c = void 0,
                        h = i[l];
                    h instanceof q ? (u = "string" == typeof h.name ? h.name : h.name[0].value, c = h.value) : (u = new ie(l + 1), c = h), h instanceof z || (n = t.rules.slice(0), a && n.push(new q(a, c, !1, !1, this.index, this.currentFileInfo)), o && n.push(new q(o, new ie(l + 1), !1, !1, this.index, this.currentFileInfo)), s && n.push(new q(s, u, !1, !1, this.index, this.currentFileInfo)), r.push(new X([new D([new I("", "&")])], n, t.strictImports, t.visibilityInfo())))
                }
                return new X([new D([new I("", "&")])], r, t.strictImports, t.visibilityInfo()).eval(this.context)
            }
        },
        ot = function (e, t, n) {
            if (!(n instanceof ie)) throw {
                type: "Argument",
                message: "argument must be a number"
            };
            return null == t ? t = n.unit : n = n.unify(), new ie(e(parseFloat(n.value)), t)
        },
        lt = {
            ceil: null,
            floor: null,
            sqrt: null,
            abs: null,
            tan: "",
            sin: "",
            cos: "",
            atan: "rad",
            asin: "rad",
            acos: "rad"
        };
    for (var ut in lt) lt.hasOwnProperty(ut) && (lt[ut] = ot.bind(null, Math[ut], lt[ut]));
    lt.round = function (e, t) {
        var n = void 0 === t ? 0 : t.value;
        return ot(function (e) {
            return e.toFixed(n)
        }, null, e)
    };
    var ct, ht = function (e, t) {
            switch ((t = Array.prototype.slice.call(t)).length) {
                case 0:
                    throw {
                        type: "Argument", message: "one or more arguments required"
                    }
            }
            var n, i, r, a, s, o, l, u, c = [],
                h = {};
            for (n = 0; n < t.length; n++)
                if ((r = t[n]) instanceof ie)
                    if (l = "" !== (o = "" === (a = "" === r.unit.toString() && void 0 !== u ? new ie(r.value, u).unify() : r.unify()).unit.toString() && void 0 !== l ? l : a.unit.toString()) && void 0 === l || "" !== o && "" === c[0].unify().unit.toString() ? o : l, u = "" !== o && void 0 === u ? r.unit.toString() : u, void 0 !== (i = void 0 !== h[""] && "" !== o && o === l ? h[""] : h[o])) s = "" === c[i].unit.toString() && void 0 !== u ? new ie(c[i].value, u).unify() : c[i].unify(), (e && a.value < s.value || !e && a.value > s.value) && (c[i] = r);
                    else {
                        if (void 0 !== l && o !== l) throw {
                            type: "Argument",
                            message: "incompatible types"
                        };
                        h[o] = c.length, c.push(r)
                    }
            else Array.isArray(t[n].value) && Array.prototype.push.apply(t, Array.prototype.slice.call(t[n].value));
            return 1 == c.length ? c[0] : (t = c.map(function (e) {
                return e.toCSS(this.context)
            }).join(this.context.compress ? "," : ", "), new B("".concat(e ? "min" : "max", "(").concat(t, ")")))
        },
        ft = {
            min: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return ht(!0, t)
            },
            max: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return ht(!1, t)
            },
            convert: function (e, t) {
                return e.convertTo(t.value)
            },
            pi: function () {
                return new ie(Math.PI)
            },
            mod: function (e, t) {
                return new ie(e.value % t.value, e.unit)
            },
            pow: function (e, t) {
                if ("number" == typeof e && "number" == typeof t) e = new ie(e), t = new ie(t);
                else if (!(e instanceof ie && t instanceof ie)) throw {
                    type: "Argument",
                    message: "arguments must be numbers"
                };
                return new ie(Math.pow(e.value, t.value), e.unit)
            },
            percentage: function (e) {
                return ot(function (e) {
                    return 100 * e
                }, "%", e)
            }
        },
        pt = {
            e: function (e) {
                return new pe('"', e instanceof ye ? e.evaluated : e.value, !0)
            },
            escape: function (e) {
                return new B(encodeURI(e.value).replace(/=/g, "%3D").replace(/:/g, "%3A").replace(/#/g, "%23").replace(/;/g, "%3B").replace(/\(/g, "%28").replace(/\)/g, "%29"))
            },
            replace: function (e, t, n, i) {
                var r = e.value;
                return n = "Quoted" === n.type ? n.value : n.toCSS(), r = r.replace(new RegExp(t.value, i ? i.value : ""), n), new pe(e.quote || "", r, e.escaped)
            },
            "%": function (e) {
                for (var t = Array.prototype.slice.call(arguments, 1), n = e.value, i = function (e) {
                        n = n.replace(/%[sda]/i, function (n) {
                            var i = "Quoted" === t[e].type && n.match(/s/i) ? t[e].value : t[e].toCSS();
                            return n.match(/[A-Z]$/) ? encodeURIComponent(i) : i
                        })
                    }, r = 0; r < t.length; r++) i(r);
                return n = n.replace(/%%/g, "%"), new pe(e.quote || "", n, e.escaped)
            }
        },
        vt = function (e, t) {
            return e instanceof t ? j.True : j.False
        },
        dt = function (e, t) {
            if (void 0 === t) throw {
                type: "Argument",
                message: "missing the required second argument to isunit."
            };
            if ("string" != typeof (t = "string" == typeof t.value ? t.value : t)) throw {
                type: "Argument",
                message: "Second argument to isunit should be a unit or a string."
            };
            return e instanceof ie && e.unit.is(t) ? j.True : j.False
        },
        mt = {
            isruleset: function (e) {
                return vt(e, te)
            },
            iscolor: function (e) {
                return vt(e, y)
            },
            isnumber: function (e) {
                return vt(e, ie)
            },
            isstring: function (e) {
                return vt(e, pe)
            },
            iskeyword: function (e) {
                return vt(e, j)
            },
            isurl: function (e) {
                return vt(e, ve)
            },
            ispixel: function (e) {
                return dt(e, "px")
            },
            ispercentage: function (e) {
                return dt(e, "%")
            },
            isem: function (e) {
                return dt(e, "em")
            },
            isunit: dt,
            unit: function (e, t) {
                if (!(e instanceof ie)) throw {
                    type: "Argument",
                    message: "the first argument to unit must be a number".concat(e instanceof ae ? ". Have you forgotten parenthesis?" : "")
                };
                return t = t ? t instanceof j ? t.value : t.toCSS() : "", new ie(e.value, t)
            },
            "get-unit": function (e) {
                return new B(e.unit)
            }
        },
        gt = function (e) {
            var t = {
                functionRegistry: Z,
                functionCaller: le
            };
            return Z.addMultiple(Qe), Z.add("default", Y.eval.bind(Y)), Z.addMultiple(tt), Z.addMultiple(nt), Z.addMultiple(function (e) {
                var t = function (e, t) {
                    return new ve(t, e.index, e.currentFileInfo).eval(e.context)
                };
                return {
                    "data-uri": function (n, i) {
                        i || (i = n, n = null);
                        var r = n && n.value,
                            a = i.value,
                            s = this.currentFileInfo,
                            o = s.rewriteUrls ? s.currentDirectory : s.entryPath,
                            l = a.indexOf("#"),
                            u = ""; - 1 !== l && (u = a.slice(l), a = a.slice(0, l));
                        var c = E(this.context);
                        c.rawBuffer = !0;
                        var h = e.getFileManager(a, o, c, e, !0);
                        if (!h) return t(this, i);
                        var f = !1;
                        if (n) f = /;base64$/.test(r);
                        else {
                            if ("image/svg+xml" === (r = e.mimeLookup(a))) f = !1;
                            else {
                                var p = e.charsetLookup(r);
                                f = ["US-ASCII", "UTF-8"].indexOf(p) < 0
                            }
                            f && (r += ";base64")
                        }
                        var v = h.loadFileSync(a, o, c, e);
                        if (!v.contents) return Pe.warn("Skipped data-uri embedding of ".concat(a, " because file not found")), t(this, i || n);
                        var d = v.contents;
                        if (f && !e.encodeBase64) return t(this, i);
                        d = f ? e.encodeBase64(d) : encodeURIComponent(d);
                        var m = "data:".concat(r, ",").concat(d).concat(u);
                        return new ve(new pe('"'.concat(m, '"'), m, !1, this.index, this.currentFileInfo), this.index, this.currentFileInfo)
                    }
                }
            }(e)), Z.addMultiple(st), Z.addMultiple(lt), Z.addMultiple(ft), Z.addMultiple(pt), Z.addMultiple({
                "svg-gradient": function (e) {
                    var t, n, i, r, a, s, o, l, u = "linear",
                        c = 'x="0" y="0" width="1" height="1"',
                        h = {
                            compress: !1
                        },
                        f = e.toCSS(h);

                    function p() {
                        throw {
                            type: "Argument",
                            message: "svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position] or direction, color list"
                        }
                    }
                    switch (2 == arguments.length ? (arguments[1].value.length < 2 && p(), t = arguments[1].value) : arguments.length < 3 ? p() : t = Array.prototype.slice.call(arguments, 1), f) {
                        case "to bottom":
                            n = 'x1="0%" y1="0%" x2="0%" y2="100%"';
                            break;
                        case "to right":
                            n = 'x1="0%" y1="0%" x2="100%" y2="0%"';
                            break;
                        case "to bottom right":
                            n = 'x1="0%" y1="0%" x2="100%" y2="100%"';
                            break;
                        case "to top right":
                            n = 'x1="0%" y1="100%" x2="100%" y2="0%"';
                            break;
                        case "ellipse":
                        case "ellipse at center":
                            u = "radial", n = 'cx="50%" cy="50%" r="75%"', c = 'x="-50" y="-50" width="101" height="101"';
                            break;
                        default:
                            throw {
                                type: "Argument", message: "svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'"
                            }
                    }
                    for (i = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><'.concat(u, 'Gradient id="g" ').concat(n, ">"), r = 0; r < t.length; r += 1) t[r] instanceof oe ? (a = t[r].value[0], s = t[r].value[1]) : (a = t[r], s = void 0), a instanceof y && ((0 === r || r + 1 === t.length) && void 0 === s || s instanceof ie) || p(), o = s ? s.toCSS(h) : 0 === r ? "0%" : "100%", l = a.alpha, i += '<stop offset="'.concat(o, '" stop-color="').concat(a.toRGB(), '"').concat(l < 1 ? ' stop-opacity="'.concat(l, '"') : "", "/>");
                    return i += "</".concat(u, "Gradient><rect ").concat(c, ' fill="url(#g)" /></svg>'), i = encodeURIComponent(i), i = "data:image/svg+xml,".concat(i), new ve(new pe("'".concat(i, "'"), i, !1, this.index, this.currentFileInfo), this.index, this.currentFileInfo)
                }
            }), Z.addMultiple(mt), t
        },
        yt = function (e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = n.variables,
                a = new G.Eval(n);
            "object" !== i(r) || Array.isArray(r) || (r = Object.keys(r).map(function (e) {
                var t = r[e];
                return t instanceof Me.Value || (t instanceof Me.Expression || (t = new Me.Expression([t])), t = new Me.Value([t])), new Me.Declaration("@".concat(e), t, !1, null, 0)
            }), a.frames = [new Me.Ruleset(null, r)]);
            var s, o, l = [new Ge.JoinSelectorVisitor, new Ge.MarkVisibleSelectorsVisitor(!0), new Ge.ExtendVisitor, new Ge.ToCSSVisitor({
                    compress: Boolean(n.compress)
                })],
                u = [];
            if (n.pluginManager) {
                o = n.pluginManager.visitor();
                for (var c = 0; c < 2; c++)
                    for (o.first(); s = o.get();) s.isPreEvalVisitor ? 0 !== c && -1 !== u.indexOf(s) || (u.push(s), s.run(e)) : 0 !== c && -1 !== l.indexOf(s) || (s.isPreVisitor ? l.unshift(s) : l.push(s))
            }
            t = e.eval(a);
            for (c = 0; c < l.length; c++) l[c].run(t);
            if (n.pluginManager)
                for (o.first(); s = o.get();) - 1 === l.indexOf(s) && -1 === u.indexOf(s) && s.run(t);
            return t
        },
        bt = function () {
            function e(t) {
                r(this, e), this.less = t, this.visitors = [], this.preProcessors = [], this.postProcessors = [], this.installedPlugins = [], this.fileManagers = [], this.iterator = -1, this.pluginCache = {}, this.Loader = new t.PluginLoader(t)
            }
            return s(e, [{
                key: "addPlugins",
                value: function (e) {
                    if (e)
                        for (var t = 0; t < e.length; t++) this.addPlugin(e[t])
                }
            }, {
                key: "addPlugin",
                value: function (e, t, n) {
                    this.installedPlugins.push(e), t && (this.pluginCache[t] = e), e.install && e.install(this.less, this, n || this.less.functions.functionRegistry)
                }
            }, {
                key: "get",
                value: function (e) {
                    return this.pluginCache[e]
                }
            }, {
                key: "addVisitor",
                value: function (e) {
                    this.visitors.push(e)
                }
            }, {
                key: "addPreProcessor",
                value: function (e, t) {
                    var n;
                    for (n = 0; n < this.preProcessors.length && !(this.preProcessors[n].priority >= t); n++);
                    this.preProcessors.splice(n, 0, {
                        preProcessor: e,
                        priority: t
                    })
                }
            }, {
                key: "addPostProcessor",
                value: function (e, t) {
                    var n;
                    for (n = 0; n < this.postProcessors.length && !(this.postProcessors[n].priority >= t); n++);
                    this.postProcessors.splice(n, 0, {
                        postProcessor: e,
                        priority: t
                    })
                }
            }, {
                key: "addFileManager",
                value: function (e) {
                    this.fileManagers.push(e)
                }
            }, {
                key: "getPreProcessors",
                value: function () {
                    for (var e = [], t = 0; t < this.preProcessors.length; t++) e.push(this.preProcessors[t].preProcessor);
                    return e
                }
            }, {
                key: "getPostProcessors",
                value: function () {
                    for (var e = [], t = 0; t < this.postProcessors.length; t++) e.push(this.postProcessors[t].postProcessor);
                    return e
                }
            }, {
                key: "getVisitors",
                value: function () {
                    return this.visitors
                }
            }, {
                key: "visitor",
                value: function () {
                    var e = this;
                    return {
                        first: function () {
                            return e.iterator = -1, e.visitors[e.iterator]
                        },
                        get: function () {
                            return e.iterator += 1, e.visitors[e.iterator]
                        }
                    }
                }
            }, {
                key: "getFileManagers",
                value: function () {
                    return this.fileManagers
                }
            }]), e
        }();

    function wt(e, t) {
        return !t && ct || (ct = new bt(e)), ct
    }
    var kt, xt, St = function (e, t) {
            var n, i = function (e) {
                    return function () {
                        function t(n) {
                            r(this, t), this._css = [], this._rootNode = n.rootNode, this._contentsMap = n.contentsMap, this._contentsIgnoredCharsMap = n.contentsIgnoredCharsMap, n.sourceMapFilename && (this._sourceMapFilename = n.sourceMapFilename.replace(/\\/g, "/")), this._outputFilename = n.outputFilename, this.sourceMapURL = n.sourceMapURL, n.sourceMapBasepath && (this._sourceMapBasepath = n.sourceMapBasepath.replace(/\\/g, "/")), n.sourceMapRootpath ? (this._sourceMapRootpath = n.sourceMapRootpath.replace(/\\/g, "/"), "/" !== this._sourceMapRootpath.charAt(this._sourceMapRootpath.length - 1) && (this._sourceMapRootpath += "/")) : this._sourceMapRootpath = "", this._outputSourceFiles = n.outputSourceFiles, this._sourceMapGeneratorConstructor = e.getSourceMapGenerator(), this._lineNumber = 0, this._column = 0
                        }
                        return s(t, [{
                            key: "removeBasepath",
                            value: function (e) {
                                return this._sourceMapBasepath && 0 === e.indexOf(this._sourceMapBasepath) && ("\\" !== (e = e.substring(this._sourceMapBasepath.length)).charAt(0) && "/" !== e.charAt(0) || (e = e.substring(1))), e
                            }
                        }, {
                            key: "normalizeFilename",
                            value: function (e) {
                                return e = e.replace(/\\/g, "/"), e = this.removeBasepath(e), (this._sourceMapRootpath || "") + e
                            }
                        }, {
                            key: "add",
                            value: function (e, t, n, i) {
                                if (e) {
                                    var r, a, s, o, l;
                                    if (t && t.filename) {
                                        var u = this._contentsMap[t.filename];
                                        if (this._contentsIgnoredCharsMap[t.filename] && ((n -= this._contentsIgnoredCharsMap[t.filename]) < 0 && (n = 0), u = u.slice(this._contentsIgnoredCharsMap[t.filename])), void 0 === u) return;
                                        o = (a = (u = u.substring(0, n)).split("\n"))[a.length - 1]
                                    }
                                    if (s = (r = e.split("\n"))[r.length - 1], t && t.filename)
                                        if (i)
                                            for (l = 0; l < r.length; l++) this._sourceMapGenerator.addMapping({
                                                generated: {
                                                    line: this._lineNumber + l + 1,
                                                    column: 0 === l ? this._column : 0
                                                },
                                                original: {
                                                    line: a.length + l,
                                                    column: 0 === l ? o.length : 0
                                                },
                                                source: this.normalizeFilename(t.filename)
                                            });
                                        else this._sourceMapGenerator.addMapping({
                                            generated: {
                                                line: this._lineNumber + 1,
                                                column: this._column
                                            },
                                            original: {
                                                line: a.length,
                                                column: o.length
                                            },
                                            source: this.normalizeFilename(t.filename)
                                        });
                                    1 === r.length ? this._column += s.length : (this._lineNumber += r.length - 1, this._column = s.length), this._css.push(e)
                                }
                            }
                        }, {
                            key: "isEmpty",
                            value: function () {
                                return 0 === this._css.length
                            }
                        }, {
                            key: "toCSS",
                            value: function (e) {
                                if (this._sourceMapGenerator = new this._sourceMapGeneratorConstructor({
                                        file: this._outputFilename,
                                        sourceRoot: null
                                    }), this._outputSourceFiles)
                                    for (var t in this._contentsMap)
                                        if (this._contentsMap.hasOwnProperty(t)) {
                                            var n = this._contentsMap[t];
                                            this._contentsIgnoredCharsMap[t] && (n = n.slice(this._contentsIgnoredCharsMap[t])), this._sourceMapGenerator.setSourceContent(this.normalizeFilename(t), n)
                                        } if (this._rootNode.genCSS(e, this), this._css.length > 0) {
                                    var i, r = JSON.stringify(this._sourceMapGenerator.toJSON());
                                    this.sourceMapURL ? i = this.sourceMapURL : this._sourceMapFilename && (i = this._sourceMapFilename), this.sourceMapURL = i, this.sourceMap = r
                                }
                                return this._css.join("")
                            }
                        }]), t
                    }()
                }(e = new Ee(e, t)),
                a = function (e, t) {
                    return function () {
                        function n(e) {
                            r(this, n), this.options = e
                        }
                        return s(n, [{
                            key: "toCSS",
                            value: function (t, n, i) {
                                var r = new e({
                                        contentsIgnoredCharsMap: i.contentsIgnoredChars,
                                        rootNode: t,
                                        contentsMap: i.contents,
                                        sourceMapFilename: this.options.sourceMapFilename,
                                        sourceMapURL: this.options.sourceMapURL,
                                        outputFilename: this.options.sourceMapOutputFilename,
                                        sourceMapBasepath: this.options.sourceMapBasepath,
                                        sourceMapRootpath: this.options.sourceMapRootpath,
                                        outputSourceFiles: this.options.outputSourceFiles,
                                        sourceMapGenerator: this.options.sourceMapGenerator,
                                        sourceMapFileInline: this.options.sourceMapFileInline
                                    }),
                                    a = r.toCSS(n);
                                return this.sourceMap = r.sourceMap, this.sourceMapURL = r.sourceMapURL, this.options.sourceMapInputFilename && (this.sourceMapInputFilename = r.normalizeFilename(this.options.sourceMapInputFilename)), void 0 !== this.options.sourceMapBasepath && void 0 !== this.sourceMapURL && (this.sourceMapURL = r.removeBasepath(this.sourceMapURL)), a + this.getCSSAppendage()
                            }
                        }, {
                            key: "getCSSAppendage",
                            value: function () {
                                var e = this.sourceMapURL;
                                if (this.options.sourceMapFileInline) {
                                    if (void 0 === this.sourceMap) return "";
                                    e = "data:application/json;base64,".concat(t.encodeBase64(this.sourceMap))
                                }
                                return e ? "/*# sourceMappingURL=".concat(e, " */") : ""
                            }
                        }, {
                            key: "getExternalSourceMap",
                            value: function () {
                                return this.sourceMap
                            }
                        }, {
                            key: "setExternalSourceMap",
                            value: function (e) {
                                this.sourceMap = e
                            }
                        }, {
                            key: "isInline",
                            value: function () {
                                return this.options.sourceMapFileInline
                            }
                        }, {
                            key: "getSourceMapURL",
                            value: function () {
                                return this.sourceMapURL
                            }
                        }, {
                            key: "getOutputFilename",
                            value: function () {
                                return this.options.sourceMapOutputFilename
                            }
                        }, {
                            key: "getInputFilename",
                            value: function () {
                                return this.sourceMapInputFilename
                            }
                        }]), n
                    }()
                }(i, e),
                o = function (e) {
                    return function () {
                        function t(e, n) {
                            r(this, t), this.root = e, this.imports = n
                        }
                        return s(t, [{
                            key: "toCSS",
                            value: function (t) {
                                var n, i, r = {};
                                try {
                                    n = yt(this.root, t)
                                } catch (e) {
                                    throw new $(e, this.imports)
                                }
                                try {
                                    var a = Boolean(t.compress);
                                    a && Pe.warn("The compress option has been deprecated. We recommend you use a dedicated css minifier, for instance see less-plugin-clean-css.");
                                    var s = {
                                        compress: a,
                                        dumpLineNumbers: t.dumpLineNumbers,
                                        strictUnits: Boolean(t.strictUnits),
                                        numPrecision: 8
                                    };
                                    t.sourceMap ? (i = new e(t.sourceMap), r.css = i.toCSS(n, s, this.imports)) : r.css = n.toCSS(s)
                                } catch (e) {
                                    throw new $(e, this.imports)
                                }
                                if (t.pluginManager)
                                    for (var o = t.pluginManager.getPostProcessors(), l = 0; l < o.length; l++) r.css = o[l].process(r.css, {
                                        sourceMap: i,
                                        options: t,
                                        imports: this.imports
                                    });
                                for (var u in t.sourceMap && (r.map = i.getExternalSourceMap()), r.imports = [], this.imports.files) this.imports.files.hasOwnProperty(u) && u !== this.imports.rootFilename && r.imports.push(u);
                                return r
                            }
                        }]), t
                    }()
                }(a),
                l = function (e) {
                    return function () {
                        function t(e, n, i) {
                            r(this, t), this.less = e, this.rootFilename = i.filename, this.paths = n.paths || [], this.contents = {}, this.contentsIgnoredChars = {}, this.mime = n.mime, this.error = null, this.context = n, this.queue = [], this.files = {}
                        }
                        return s(t, [{
                            key: "push",
                            value: function (t, n, i, r, a) {
                                var s = this,
                                    o = this.context.pluginManager.Loader;
                                this.queue.push(t);
                                var l = function (e, n, i) {
                                        s.queue.splice(s.queue.indexOf(t), 1);
                                        var o = i === s.rootFilename;
                                        r.optional && e ? (a(null, {
                                            rules: []
                                        }, !1, null), Pe.info("The file ".concat(i, " was skipped because it was not found and the import was marked optional."))) : (s.files[i] || r.inline || (s.files[i] = {
                                            root: n,
                                            options: r
                                        }), e && !s.error && (s.error = e), a(e, n, o, i))
                                    },
                                    u = {
                                        rewriteUrls: this.context.rewriteUrls,
                                        entryPath: i.entryPath,
                                        rootpath: i.rootpath,
                                        rootFilename: i.rootFilename
                                    },
                                    c = e.getFileManager(t, i.currentDirectory, this.context, e);
                                if (c) {
                                    var h, f = function (e) {
                                            var t, n = e.filename,
                                                a = e.contents.replace(/^\uFEFF/, "");
                                            u.currentDirectory = c.getPath(n), u.rewriteUrls && (u.rootpath = c.join(s.context.rootpath || "", c.pathDiff(u.currentDirectory, u.entryPath)), !c.isPathAbsolute(u.rootpath) && c.alwaysMakePathsAbsolute() && (u.rootpath = c.join(u.entryPath, u.rootpath))), u.filename = n;
                                            var h = new G.Parse(s.context);
                                            h.processImports = !1, s.contents[n] = a, (i.reference || r.reference) && (u.reference = !0), r.isPlugin ? (t = o.evalPlugin(a, h, s, r.pluginArgs, u)) instanceof $ ? l(t, null, n) : l(null, t, n) : r.inline ? l(null, a, n) : !s.files[n] || s.files[n].options.multiple || r.multiple ? new Je(h, s, u).parse(a, function (e, t) {
                                                l(e, t, n)
                                            }) : l(null, s.files[n].root, n)
                                        },
                                        p = E(this.context);
                                    n && (p.ext = r.isPlugin ? ".js" : ".less"), r.isPlugin ? (p.mime = "application/javascript", h = o.loadPlugin(t, i.currentDirectory, p, e, c)) : h = c.loadFile(t, i.currentDirectory, p, e, function (e, t) {
                                        e ? l(e) : f(t)
                                    }), h && h.then(f, l)
                                } else l({
                                    message: "Could not find a file-manager for ".concat(t)
                                })
                            }
                        }]), t
                    }()
                }(e),
                u = function (e, t, n) {
                    return function e(n, i, r) {
                        if ("function" == typeof i ? (r = i, i = O(this.options, {})) : i = O(this.options, i || {}), !r) {
                            var a = this;
                            return new Promise(function (t, r) {
                                e.call(a, n, i, function (e, n) {
                                    e ? r(e) : t(n)
                                })
                            })
                        }
                        this.parse(n, i, function (e, n, i, a) {
                            if (e) return r(e);
                            var s;
                            try {
                                s = new t(n, i).toCSS(a)
                            } catch (e) {
                                return r(e)
                            }
                            r(null, s)
                        })
                    }
                }(0, o),
                h = function (e, t, n) {
                    return function e(t, i, r) {
                        if ("function" == typeof i ? (r = i, i = O(this.options, {})) : i = O(this.options, i || {}), !r) {
                            var a = this;
                            return new Promise(function (n, r) {
                                e.call(a, t, i, function (e, t) {
                                    e ? r(e) : n(t)
                                })
                            })
                        }
                        var s, o, l = new wt(this, !i.reUsePluginManager);
                        if (i.pluginManager = l, s = new G.Parse(i), i.rootFileInfo) o = i.rootFileInfo;
                        else {
                            var u = i.filename || "input",
                                c = u.replace(/[^\/\\]*$/, "");
                            (o = {
                                filename: u,
                                rewriteUrls: s.rewriteUrls,
                                rootpath: s.rootpath || "",
                                currentDirectory: c,
                                entryPath: c,
                                rootFilename: u
                            }).rootpath && "/" !== o.rootpath.slice(-1) && (o.rootpath += "/")
                        }
                        var h = new n(this, s, o);
                        this.importManager = h, i.plugins && i.plugins.forEach(function (e) {
                            var t, n;
                            if (e.fileContent) {
                                if (n = e.fileContent.replace(/^\uFEFF/, ""), (t = l.Loader.evalPlugin(n, s, h, e.options, e.filename)) instanceof $) return r(t)
                            } else l.addPlugin(e)
                        }), new Je(s, h, o).parse(t, function (e, t) {
                            if (e) return r(e);
                            r(null, t, h, i)
                        }, i)
                    }
                }(0, 0, l),
                f = gt(e),
                p = {
                    version: [3, 10, 0],
                    data: m,
                    tree: Me,
                    Environment: Ee,
                    AbstractFileManager: Re,
                    AbstractPluginLoader: Oe,
                    environment: e,
                    visitors: Ge,
                    Parser: Je,
                    functions: f,
                    contexts: G,
                    SourceMapOutput: i,
                    SourceMapBuilder: a,
                    ParseTree: o,
                    ImportManager: l,
                    render: u,
                    parse: h,
                    LessError: $,
                    transformTree: yt,
                    utils: V,
                    PluginManager: wt,
                    logger: Pe
                },
                v = function (e) {
                    return function () {
                        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                        return c(e, n)
                    }
                },
                d = Object.create(p);
            for (var g in p.tree)
                if ("function" == typeof (n = p.tree[g])) d[g.toLowerCase()] = v(n);
                else
                    for (var y in d[g] = Object.create(null), n) d[g][y.toLowerCase()] = v(n[y]);
            return d
        },
        It = {},
        Ct = function (e) {
            function t() {
                return r(this, t), f(this, l(t).apply(this, arguments))
            }
            return o(t, Re), s(t, [{
                key: "alwaysMakePathsAbsolute",
                value: function () {
                    return !0
                }
            }, {
                key: "join",
                value: function (e, t) {
                    return e ? this.extractUrlParts(t, e).path : t
                }
            }, {
                key: "doXHR",
                value: function (e, t, n, i) {
                    var r = new XMLHttpRequest,
                        a = !kt.isFileProtocol || kt.fileAsync;

                    function s(t, n, i) {
                        t.status >= 200 && t.status < 300 ? n(t.responseText, t.getResponseHeader("Last-Modified")) : "function" == typeof i && i(t.status, e)
                    }
                    "function" == typeof r.overrideMimeType && r.overrideMimeType("text/css"), xt.debug("XHR: Getting '".concat(e, "'")), r.open("GET", e, a), r.setRequestHeader("Accept", t || "text/x-less, text/css; q=0.9, */*; q=0.5"), r.send(null), kt.isFileProtocol && !kt.fileAsync ? 0 === r.status || r.status >= 200 && r.status < 300 ? n(r.responseText) : i(r.status, e) : a ? r.onreadystatechange = function () {
                        4 == r.readyState && s(r, n, i)
                    } : s(r, n, i)
                }
            }, {
                key: "supports",
                value: function () {
                    return !0
                }
            }, {
                key: "clearFileCache",
                value: function () {
                    It = {}
                }
            }, {
                key: "loadFile",
                value: function (e, t, n, i) {
                    t && !this.isPathAbsolute(e) && (e = t + e), e = n.ext ? this.tryAppendExtension(e, n.ext) : e, n = n || {};
                    var r = this.extractUrlParts(e, window.location.href).url,
                        a = this;
                    return new Promise(function (e, t) {
                        if (n.useFileCache && It[r]) try {
                            var i = It[r];
                            return e({
                                contents: i,
                                filename: r,
                                webInfo: {
                                    lastModified: new Date
                                }
                            })
                        } catch (e) {
                            return t({
                                filename: r,
                                message: "Error loading file ".concat(r, " error was ").concat(e.message)
                            })
                        }
                        a.doXHR(r, n.mime, function (t, n) {
                            It[r] = t, e({
                                contents: t,
                                filename: r,
                                webInfo: {
                                    lastModified: n
                                }
                            })
                        }, function (e, n) {
                            t({
                                type: "File",
                                message: "'".concat(n, "' wasn't found (").concat(e, ")"),
                                href: r
                            })
                        })
                    })
                }
            }]), t
        }(),
        _t = function (e, t) {
            return kt = e, xt = t, Ct
        },
        At = function (e) {
            function t(e) {
                var n;
                return r(this, t), (n = f(this, l(t).call(this))).less = e, n
            }
            return o(t, Oe), s(t, [{
                key: "loadPlugin",
                value: function (e, t, n, i, r) {
                    return new Promise(function (a, s) {
                        r.loadFile(e, t, n, i).then(a).catch(s)
                    })
                }
            }]), t
        }(),
        Mt = function (t, i, r) {
            return {
                add: function (a, s) {
                    r.errorReporting && "html" !== r.errorReporting ? "console" === r.errorReporting ? function (e, t) {
                        var n = e.filename || t,
                            a = [],
                            s = "".concat(e.type || "Syntax", "Error: ").concat(e.message || "There is an error in your .less file", " in ").concat(n),
                            o = function (e, t, n) {
                                void 0 !== e.extract[t] && a.push("{line} {content}".replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (t - 1)).replace(/\{class\}/, n).replace(/\{content\}/, e.extract[t]))
                            };
                        e.line && (o(e, 0, ""), o(e, 1, "line"), o(e, 2, ""), s += " on line ".concat(e.line, ", column ").concat(e.column + 1, ":\n").concat(a.join("\n"))), e.stack && (e.extract || r.logLevel >= 4) && (s += "\nStack Trace\n".concat(e.stack)), i.logger.error(s)
                    }(a, s) : "function" == typeof r.errorReporting && r.errorReporting("add", a, s) : function (i, a) {
                        var s, o, l = "less-error-message:".concat(e(a || "")),
                            u = t.document.createElement("div"),
                            c = [],
                            h = i.filename || a,
                            f = h.match(/([^\/]+(\?.*)?)$/)[1];
                        u.id = l, u.className = "less-error-message", o = "<h3>".concat(i.type || "Syntax", "Error: ").concat(i.message || "There is an error in your .less file") + '</h3><p>in <a href="'.concat(h, '">').concat(f, "</a> ");
                        var p = function (e, t, n) {
                            void 0 !== e.extract[t] && c.push('<li><label>{line}</label><pre class="{class}">{content}</pre></li>'.replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (t - 1)).replace(/\{class\}/, n).replace(/\{content\}/, e.extract[t]))
                        };
                        i.line && (p(i, 0, ""), p(i, 1, "line"), p(i, 2, ""), o += "on line ".concat(i.line, ", column ").concat(i.column + 1, ":</p><ul>").concat(c.join(""), "</ul>")), i.stack && (i.extract || r.logLevel >= 4) && (o += "<br/>Stack Trace</br />".concat(i.stack.split("\n").slice(1).join("<br/>"))), u.innerHTML = o, n.createCSS(t.document, [".less-error-message ul, .less-error-message li {", "list-style-type: none;", "margin-right: 15px;", "padding: 4px 0;", "margin: 0;", "}", ".less-error-message label {", "font-size: 12px;", "margin-right: 15px;", "padding: 4px 0;", "color: #cc7777;", "}", ".less-error-message pre {", "color: #dd6666;", "padding: 4px 0;", "margin: 0;", "display: inline-block;", "}", ".less-error-message pre.line {", "color: #ff0000;", "}", ".less-error-message h3 {", "font-size: 20px;", "font-weight: bold;", "padding: 15px 0 5px 0;", "margin: 0;", "}", ".less-error-message a {", "color: #10a", "}", ".less-error-message .error {", "color: red;", "font-weight: bold;", "padding-bottom: 2px;", "border-bottom: 1px dashed red;", "}"].join("\n"), {
                            title: "error-message"
                        }), u.style.cssText = ["font-family: Arial, sans-serif", "border: 1px solid #e00", "background-color: #eee", "border-radius: 5px", "-webkit-border-radius: 5px", "-moz-border-radius: 5px", "color: #e00", "padding: 15px", "margin-bottom: 15px"].join(";"), "development" === r.env && (s = setInterval(function () {
                            var e = t.document,
                                n = e.body;
                            n && (e.getElementById(l) ? n.replaceChild(u, e.getElementById(l)) : n.insertBefore(u, n.firstChild), clearInterval(s))
                        }, 10))
                    }(a, s)
                },
                remove: function (n) {
                    r.errorReporting && "html" !== r.errorReporting ? "console" === r.errorReporting || "function" == typeof r.errorReporting && r.errorReporting("remove", n) : function (n) {
                        var i = t.document.getElementById("less-error-message:".concat(e(n)));
                        i && i.parentNode.removeChild(i)
                    }(n)
                }
            }
        },
        Pt = {
            javascriptEnabled: !1,
            depends: !1,
            compress: !1,
            lint: !1,
            paths: [],
            color: !0,
            strictImports: !1,
            insecure: !1,
            rootpath: "",
            rewriteUrls: !1,
            math: 0,
            strictUnits: !1,
            globalVars: null,
            modifyVars: null,
            urlArgs: ""
        };
    if (window.less)
        for (var Et in window.less) window.less.hasOwnProperty(Et) && (Pt[Et] = window.less[Et]);
    ! function (e, i) {
        t(i, n.currentScript(e)), void 0 === i.isFileProtocol && (i.isFileProtocol = /^(file|(chrome|safari)(-extension)?|resource|qrc|app):/.test(e.location.protocol)), i.async = i.async || !1, i.fileAsync = i.fileAsync || !1, i.poll = i.poll || (i.isFileProtocol ? 1e3 : 1500), i.env = i.env || ("127.0.0.1" == e.location.hostname || "0.0.0.0" == e.location.hostname || "localhost" == e.location.hostname || e.location.port && e.location.port.length > 0 || i.isFileProtocol ? "development" : "production");
        var r = /!dumpLineNumbers:(comments|mediaquery|all)/.exec(e.location.hash);
        r && (i.dumpLineNumbers = r[1]), void 0 === i.useFileCache && (i.useFileCache = !0), void 0 === i.onReady && (i.onReady = !0), i.relativeUrls && (i.rewriteUrls = "all")
    }(window, Pt), Pt.plugins = Pt.plugins || [], window.LESS_PLUGINS && (Pt.plugins = Pt.plugins.concat(window.LESS_PLUGINS));
    var Rt, Ot, Ft, Vt = function (e, i) {
        var r = e.document,
            a = St();
        a.options = i;
        var s = a.environment,
            o = _t(i, a.logger),
            l = new o;
        s.addFileManager(l), a.FileManager = o, a.PluginLoader = At,
            function (e, t) {
                t.logLevel = void 0 !== t.logLevel ? t.logLevel : "development" === t.env ? 3 : 1, t.loggers || (t.loggers = [{
                    debug: function (e) {
                        t.logLevel >= 4 && console.log(e)
                    },
                    info: function (e) {
                        t.logLevel >= 3 && console.log(e)
                    },
                    warn: function (e) {
                        t.logLevel >= 2 && console.warn(e)
                    },
                    error: function (e) {
                        t.logLevel >= 1 && console.error(e)
                    }
                }]);
                for (var n = 0; n < t.loggers.length; n++) e.logger.addListener(t.loggers[n])
            }(a, i);
        var u = Mt(e, a, i),
            c = a.cache = i.cache || function (e, t, n) {
                var i = null;
                if ("development" !== t.env) try {
                    i = void 0 === e.localStorage ? null : e.localStorage
                } catch (e) {}
                return {
                    setCSS: function (e, t, r, a) {
                        if (i) {
                            n.info("saving ".concat(e, " to cache."));
                            try {
                                i.setItem(e, a), i.setItem("".concat(e, ":timestamp"), t), r && i.setItem("".concat(e, ":vars"), JSON.stringify(r))
                            } catch (t) {
                                n.error('failed to save "'.concat(e, '" to local storage for caching.'))
                            }
                        }
                    },
                    getCSS: function (e, t, n) {
                        var r = i && i.getItem(e),
                            a = i && i.getItem("".concat(e, ":timestamp")),
                            s = i && i.getItem("".concat(e, ":vars"));
                        if (n = n || {}, s = s || "{}", a && t.lastModified && new Date(t.lastModified).valueOf() === new Date(a).valueOf() && JSON.stringify(n) === s) return r
                    }
                }
            }(e, i, a.logger);
        ! function () {
            function e() {
                throw {
                    type: "Runtime",
                    message: "Image size functions are not supported in browser version of less"
                }
            }
            var t = {
                "image-size": function (t) {
                    return e(), -1
                },
                "image-width": function (t) {
                    return e(), -1
                },
                "image-height": function (t) {
                    return e(), -1
                }
            };
            Z.addMultiple(t)
        }(a.environment), i.functions && a.functions.functionRegistry.addMultiple(i.functions);
        var h = /^text\/(x-)?less$/;

        function f(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        function p(e, t) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function () {
                var i = n.concat(Array.prototype.slice.call(arguments, 0));
                return e.apply(t, i)
            }
        }

        function v(e) {
            for (var t, n = r.getElementsByTagName("style"), s = 0; s < n.length; s++)
                if ((t = n[s]).type.match(h)) {
                    var o = f(i);
                    o.modifyVars = e;
                    var l = t.innerHTML || "";
                    o.filename = r.location.href.replace(/#.*$/, ""), a.render(l, o, p(function (e, t, n) {
                        t ? u.add(t, "inline") : (e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = n.css : e.innerHTML = n.css)
                    }, null, t))
                }
        }

        function d(e, n, r, o, h) {
            var p = f(i);
            t(p, e), p.mime = e.type, h && (p.modifyVars = h), l.loadFile(e.href, null, p, s).then(function (t) {
                ! function (t) {
                    var i = t.contents,
                        s = t.filename,
                        h = t.webInfo,
                        f = {
                            currentDirectory: l.getPath(s),
                            filename: s,
                            rootFilename: s,
                            rewriteUrls: p.rewriteUrls
                        };
                    if (f.entryPath = f.currentDirectory, f.rootpath = p.rootpath || f.currentDirectory, h) {
                        h.remaining = o;
                        var v = c.getCSS(s, h, p.modifyVars);
                        if (!r && v) return h.local = !0, void n(null, v, i, e, h, s)
                    }
                    u.remove(s), p.rootFileInfo = f, a.render(i, p, function (t, r) {
                        t ? (t.href = s, n(t)) : (c.setCSS(e.href, h.lastModified, p.modifyVars, r.css), n(null, r.css, i, e, h, s))
                    })
                }(t)
            }).catch(function (e) {
                console.log(e), n(e)
            })
        }

        function m(e, t, n) {
            for (var i = 0; i < a.sheets.length; i++) d(a.sheets[i], e, t, a.sheets.length - (i + 1), n)
        }
        return a.watch = function () {
            return a.watchMode || (a.env = "development", "development" === a.env && (a.watchTimer = setInterval(function () {
                a.watchMode && (l.clearFileCache(), m(function (t, i, r, a, s) {
                    t ? u.add(t, t.href || a.href) : i && n.createCSS(e.document, i, a)
                }))
            }, i.poll))), this.watchMode = !0, !0
        }, a.unwatch = function () {
            return clearInterval(a.watchTimer), this.watchMode = !1, !1
        }, a.registerStylesheetsImmediately = function () {
            var e = r.getElementsByTagName("link");
            a.sheets = [];
            for (var t = 0; t < e.length; t++)("stylesheet/less" === e[t].rel || e[t].rel.match(/stylesheet/) && e[t].type.match(h)) && a.sheets.push(e[t])
        }, a.registerStylesheets = function () {
            return new Promise(function (e, t) {
                a.registerStylesheetsImmediately(), e()
            })
        }, a.modifyVars = function (e) {
            return a.refresh(!0, e, !1)
        }, a.refresh = function (t, i, r) {
            return (t || r) && !1 !== r && l.clearFileCache(), new Promise(function (r, s) {
                var o, l, c, h;
                o = l = new Date, 0 === (h = a.sheets.length) ? (l = new Date, c = l - o, a.logger.info("Less has finished and no sheets were loaded."), r({
                    startTime: o,
                    endTime: l,
                    totalMilliseconds: c,
                    sheets: a.sheets.length
                })) : m(function (t, i, f, p, v) {
                    if (t) return u.add(t, t.href || p.href), void s(t);
                    v.local ? a.logger.info("Loading ".concat(p.href, " from cache.")) : a.logger.info("Rendered ".concat(p.href, " successfully.")), n.createCSS(e.document, i, p), a.logger.info("CSS for ".concat(p.href, " generated in ").concat(new Date - l, "ms")), 0 == --h && (c = new Date - o, a.logger.info("Less has finished. CSS generated in ".concat(c, "ms")), r({
                        startTime: o,
                        endTime: l,
                        totalMilliseconds: c,
                        sheets: a.sheets.length
                    })), l = new Date
                }, t, i), v(i)
            })
        }, a.refreshStyles = v, a
    }(window, Pt);

    function $t(e) {
        e.filename && console.warn(e), Pt.async || Ot.removeChild(Ft)
    }
    return window.less = Vt, Pt.onReady && (/!watch/.test(window.location.hash) && Vt.watch(), Pt.async || (Rt = "body { display: none !important }", Ot = document.head || document.getElementsByTagName("head")[0], (Ft = document.createElement("style")).type = "text/css", Ft.styleSheet ? Ft.styleSheet.cssText = Rt : Ft.appendChild(document.createTextNode(Rt)), Ot.appendChild(Ft)), Vt.registerStylesheetsImmediately(), Vt.pageLoadFinished = Vt.refresh("development" === Vt.env).then($t, $t)), Vt
});
//# sourceMappingURL=less.min.js.map