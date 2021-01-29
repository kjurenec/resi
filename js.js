<script>
      // shaka-player-2.4.6.compiled.js
      (function () {
        var innerGlobal = typeof window != "undefined" ? window : global;
        var exportTo = {};
        (function (window, global) {
          var n, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, c, d) {
                    b != Array.prototype && b != Object.prototype && (b[c] = d.value)
                  },
                  ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

          function ca() {
            ca = function () {
            };
            ba.Symbol || (ba.Symbol = da)
          }

          var da = function () {
            var b = 0;
            return function (c) {
              return "jscomp_symbol_" + (c || "") + b++
            }
          }();

          function ea() {
            ca();
            var b = ba.Symbol.iterator;
            b || (b = ba.Symbol.iterator = ba.Symbol("iterator"));
            "function" != typeof Array.prototype[b] && aa(Array.prototype, b, {
              configurable: !0,
              writable: !0,
              value: function () {
                return fa(this)
              }
            });
            ea = function () {
            }
          }

          function fa(b) {
            var c = 0;
            return ha(function () {
              return c < b.length ? {done: !1, value: b[c++]} : {done: !0}
            })
          }

          function ha(b) {
            ea();
            b = {next: b};
            b[ba.Symbol.iterator] = function () {
              return this
            };
            return b
          }

          function p(b) {
            ea();
            var c = b[Symbol.iterator];
            return c ? c.call(b) : fa(b)
          }

          function ia(b, c) {
            if (c) {
              for (var d = ba, e = b.split("."), f = 0; f < e.length - 1; f++) {
                var g = e[f];
                g in d || (d[g] = {});
                d = d[g]
              }
              e = e[e.length - 1];
              f = d[e];
              g = c(f);
              g != f && null != g && aa(d, e, {configurable: !0, writable: !0, value: g})
            }
          }

          ia("Promise", function (b) {
            function c(b) {
              this.b = 0;
              this.g = void 0;
              this.a = [];
              var c = this.c();
              try {
                b(c.resolve, c.reject)
              } catch (l) {
                c.reject(l)
              }
            }

            function d() {
              this.a = null
            }

            function e(b) {
              return b instanceof c ? b : new c(function (c) {
                c(b)
              })
            }

            if (b) return b;
            d.prototype.b = function (b) {
              null == this.a && (this.a = [], this.f());
              this.a.push(b)
            };
            d.prototype.f = function () {
              var b = this;
              this.c(function () {
                b.h()
              })
            };
            var f = ba.setTimeout;
            d.prototype.c = function (b) {
              f(b, 0)
            };
            d.prototype.h = function () {
              for (; this.a && this.a.length;) {
                var b = this.a;
                this.a =
                        [];
                for (var c = 0; c < b.length; ++c) {
                  var d = b[c];
                  b[c] = null;
                  try {
                    d()
                  } catch (m) {
                    this.g(m)
                  }
                }
              }
              this.a = null
            };
            d.prototype.g = function (b) {
              this.c(function () {
                throw b;
              })
            };
            c.prototype.c = function () {
              function b(b) {
                return function (e) {
                  d || (d = !0, b.call(c, e))
                }
              }

              var c = this, d = !1;
              return {resolve: b(this.m), reject: b(this.f)}
            };
            c.prototype.m = function (b) {
              if (b === this) this.f(new TypeError("A Promise cannot resolve to itself")); else if (b instanceof c) this.o(b); else {
                a:switch (typeof b) {
                  case "object":
                    var d = null != b;
                    break a;
                  case "function":
                    d = !0;
                    break a;
                  default:
                    d = !1
                }
                d ? this.l(b) : this.h(b)
              }
            };
            c.prototype.l = function (b) {
              var c = void 0;
              try {
                c = b.then
              } catch (l) {
                this.f(l);
                return
              }
              "function" == typeof c ? this.s(c, b) : this.h(b)
            };
            c.prototype.f = function (b) {
              this.i(2, b)
            };
            c.prototype.h = function (b) {
              this.i(1, b)
            };
            c.prototype.i = function (b, c) {
              if (0 != this.b) throw Error("Cannot settle(" + b + ", " + c + "): Promise already settled in state" + this.b);
              this.b = b;
              this.g = c;
              this.j()
            };
            c.prototype.j = function () {
              if (null != this.a) {
                for (var b = 0; b < this.a.length; ++b) g.b(this.a[b]);
                this.a = null
              }
            };
            var g = new d;
            c.prototype.o = function (b) {
              var c = this.c();
              b.sb(c.resolve, c.reject)
            };
            c.prototype.s = function (b, c) {
              var d = this.c();
              try {
                b.call(c, d.resolve, d.reject)
              } catch (m) {
                d.reject(m)
              }
            };
            c.prototype.then = function (b, d) {
              function e(b, c) {
                return "function" == typeof b ? function (c) {
                  try {
                    f(b(c))
                  } catch (pa) {
                    g(pa)
                  }
                } : c
              }

              var f, g, h = new c(function (b, c) {
                f = b;
                g = c
              });
              this.sb(e(b, f), e(d, g));
              return h
            };
            c.prototype["catch"] = function (b) {
              return this.then(void 0, b)
            };
            c.prototype.sb = function (b, c) {
              function d() {
                switch (e.b) {
                  case 1:
                    b(e.g);
                    break;
                  case 2:
                    c(e.g);
                    break;
                  default:
                    throw Error("Unexpected state: " + e.b);
                }
              }

              var e = this;
              null == this.a ? g.b(d) : this.a.push(d)
            };
            c.resolve = e;
            c.reject = function (b) {
              return new c(function (c, d) {
                d(b)
              })
            };
            c.race = function (b) {
              return new c(function (c, d) {
                for (var f = p(b), g = f.next(); !g.done; g = f.next()) e(g.value).sb(c, d)
              })
            };
            c.all = function (b) {
              var d = p(b), f = d.next();
              return f.done ? e([]) : new c(function (b, c) {
                function g(c) {
                  return function (d) {
                    h[c] = d;
                    k--;
                    0 == k && b(h)
                  }
                }

                var h = [], k = 0;
                do h.push(void 0), k++, e(f.value).sb(g(h.length - 1), c), f = d.next();
                while (!f.done)
              })
            };
            return c
          });
          ia("Promise.prototype.finally", function (b) {
            return b ? b : function (b) {
              return this.then(function (c) {
                return Promise.resolve(b()).then(function () {
                  return c
                })
              }, function (c) {
                return Promise.resolve(b()).then(function () {
                  throw c;
                })
              })
            }
          });

          function ja(b) {
            function c(c) {
              return b.next(c)
            }

            function d(c) {
              return b["throw"](c)
            }

            return new Promise(function (e, f) {
              function g(b) {
                b.done ? e(b.value) : Promise.resolve(b.value).then(c, d).then(g, f)
              }

              g(b.next())
            })
          }

          function q(b) {
            return ja(b())
          }

          function ka() {
            this.g = !1;
            this.c = null;
            this.J = void 0;
            this.u = 1;
            this.b = this.f = 0;
            this.i = this.a = null
          }

          function la(b) {
            if (b.g) throw new TypeError("Generator is already running");
            b.g = !0
          }

          ka.prototype.h = function (b) {
            this.J = b
          };

          function ma(b, c) {
            b.a = {rc: c, yc: !0};
            b.u = b.f || b.b
          }

          ka.prototype["return"] = function (b) {
            this.a = {"return": b};
            this.u = this.b
          };

          function v(b, c, d) {
            b.u = d;
            return {value: c}
          }

          ka.prototype.N = function (b) {
            this.u = b
          };

          function na(b, c, d) {
            b.f = c;
            void 0 != d && (b.b = d)
          }

          function oa(b) {
            b.f = 0;
            b.b = 2
          }

          function qa(b, c) {
            b.u = c;
            b.f = 0
          }

          function ra(b) {
            b.f = 0;
            var c = b.a.rc;
            b.a = null;
            return c
          }

          function sa(b) {
            b.i = [b.a];
            b.f = 0;
            b.b = 0
          }

          function ta(b, c) {
            var d = b.i.splice(0)[0];
            (d = b.a = b.a || d) ? d.yc ? b.u = b.f || b.b : void 0 != d.N && b.b < d.N ? (b.u = d.N, b.a = null) : b.u = b.b : b.u = c
          }

          function ua(b) {
            this.a = new ka;
            this.b = b
          }

          function va(b, c) {
            la(b.a);
            var d = b.a.c;
            if (d) return wa(b, "return" in d ? d["return"] : function (b) {
              return {value: b, done: !0}
            }, c, b.a["return"]);
            b.a["return"](c);
            return xa(b)
          }

          function wa(b, c, d, e) {
            try {
              var f = c.call(b.a.c, d);
              if (!(f instanceof Object)) throw new TypeError("Iterator result " + f + " is not an object");
              if (!f.done) return b.a.g = !1, f;
              var g = f.value
            } catch (h) {
              return b.a.c = null, ma(b.a, h), xa(b)
            }
            b.a.c = null;
            e.call(b.a, g);
            return xa(b)
          }

          function xa(b) {
            for (; b.a.u;) try {
              var c = b.b(b.a);
              if (c) return b.a.g = !1, {value: c.value, done: !1}
            } catch (d) {
              b.a.J = void 0, ma(b.a, d)
            }
            b.a.g = !1;
            if (b.a.a) {
              c = b.a.a;
              b.a.a = null;
              if (c.yc) throw c.rc;
              return {value: c["return"], done: !0}
            }
            return {value: void 0, done: !0}
          }

          function ya(b) {
            this.next = function (c) {
              la(b.a);
              b.a.c ? c = wa(b, b.a.c.next, c, b.a.h) : (b.a.h(c), c = xa(b));
              return c
            };
            this["throw"] = function (c) {
              la(b.a);
              b.a.c ? c = wa(b, b.a.c["throw"], c, b.a.h) : (ma(b.a, c), c = xa(b));
              return c
            };
            this["return"] = function (c) {
              return va(b, c)
            };
            ea();
            this[Symbol.iterator] = function () {
              return this
            }
          }

          function x(b, c) {
            ya.prototype = b.prototype;
            return new ya(new ua(c))
          }

          function za(b, c) {
            return Object.prototype.hasOwnProperty.call(b, c)
          }

          ia("WeakMap", function (b) {
            function c(b) {
              this.a = (g += Math.random() + 1).toString();
              if (b) {
                ca();
                ea();
                b = p(b);
                for (var c; !(c = b.next()).done;) c = c.value, this.set(c[0], c[1])
              }
            }

            function d(b) {
              za(b, f) || aa(b, f, {value: {}})
            }

            function e(b) {
              var c = Object[b];
              c && (Object[b] = function (b) {
                d(b);
                return c(b)
              })
            }

            if (function () {
              if (!b || !Object.seal) return !1;
              try {
                var c = Object.seal({}), d = Object.seal({}), e = new b([[c, 2], [d, 3]]);
                if (2 != e.get(c) || 3 != e.get(d)) return !1;
                e["delete"](c);
                e.set(d, 4);
                return !e.has(c) && 4 == e.get(d)
              } catch (m) {
                return !1
              }
            }()) return b;
            var f = "$jscomp_hidden_" + Math.random();
            e("freeze");
            e("preventExtensions");
            e("seal");
            var g = 0;
            c.prototype.set = function (b, c) {
              d(b);
              if (!za(b, f)) throw Error("WeakMap key fail: " + b);
              b[f][this.a] = c;
              return this
            };
            c.prototype.get = function (b) {
              return za(b, f) ? b[f][this.a] : void 0
            };
            c.prototype.has = function (b) {
              return za(b, f) && za(b[f], this.a)
            };
            c.prototype["delete"] = function (b) {
              return za(b, f) && za(b[f], this.a) ? delete b[f][this.a] : !1
            };
            return c
          });
          ia("Map", function (b) {
            function c() {
              var b = {};
              return b.pa = b.next = b.head = b
            }

            function d(b, c) {
              var d = b.a;
              return ha(function () {
                if (d) {
                  for (; d.head != b.a;) d = d.pa;
                  for (; d.next != d.head;) return d = d.next, {done: !1, value: c(d)};
                  d = null
                }
                return {done: !0, value: void 0}
              })
            }

            function e(b, c) {
              var d = c && typeof c;
              "object" == d || "function" == d ? g.has(c) ? d = g.get(c) : (d = "" + ++h, g.set(c, d)) : d = "p_" + c;
              var e = b.b[d];
              if (e && za(b.b, d)) for (var f = 0; f < e.length; f++) {
                var k = e[f];
                if (c !== c && k.key !== k.key || c === k.key) return {id: d, list: e, index: f, P: k}
              }
              return {
                id: d,
                list: e, index: -1, P: void 0
              }
            }

            function f(b) {
              this.b = {};
              this.a = c();
              this.size = 0;
              if (b) {
                b = p(b);
                for (var d; !(d = b.next()).done;) d = d.value, this.set(d[0], d[1])
              }
            }

            if (function () {
              if (!b || "function" != typeof b || !b.prototype.entries || "function" != typeof Object.seal) return !1;
              try {
                var c = Object.seal({x: 4}), d = new b(p([[c, "s"]]));
                if ("s" != d.get(c) || 1 != d.size || d.get({x: 4}) || d.set({x: 4}, "t") != d || 2 != d.size) return !1;
                var e = d.entries(), f = e.next();
                if (f.done || f.value[0] != c || "s" != f.value[1]) return !1;
                f = e.next();
                return f.done || 4 != f.value[0].x ||
                "t" != f.value[1] || !e.next().done ? !1 : !0
              } catch (t) {
                return !1
              }
            }()) return b;
            ca();
            ea();
            var g = new WeakMap;
            f.prototype.set = function (b, c) {
              var d = e(this, b);
              d.list || (d.list = this.b[d.id] = []);
              d.P ? d.P.value = c : (d.P = {
                next: this.a,
                pa: this.a.pa,
                head: this.a,
                key: b,
                value: c
              }, d.list.push(d.P), this.a.pa.next = d.P, this.a.pa = d.P, this.size++);
              return this
            };
            f.prototype["delete"] = function (b) {
              b = e(this, b);
              return b.P && b.list ? (b.list.splice(b.index, 1), b.list.length || delete this.b[b.id], b.P.pa.next = b.P.next, b.P.next.pa = b.P.pa, b.P.head =
                      null, this.size--, !0) : !1
            };
            f.prototype.clear = function () {
              this.b = {};
              this.a = this.a.pa = c();
              this.size = 0
            };
            f.prototype.has = function (b) {
              return !!e(this, b).P
            };
            f.prototype.get = function (b) {
              return (b = e(this, b).P) && b.value
            };
            f.prototype.entries = function () {
              return d(this, function (b) {
                return [b.key, b.value]
              })
            };
            f.prototype.keys = function () {
              return d(this, function (b) {
                return b.key
              })
            };
            f.prototype.values = function () {
              return d(this, function (b) {
                return b.value
              })
            };
            f.prototype.forEach = function (b, c) {
              for (var d = this.entries(), e; !(e = d.next()).done;) e =
                      e.value, b.call(c, e[1], e[0], this)
            };
            f.prototype[Symbol.iterator] = f.prototype.entries;
            var h = 0;
            return f
          });
          ia("Array.from", function (b) {
            return b ? b : function (b, d, e) {
              ea();
              d = null != d ? d : function (b) {
                return b
              };
              var c = [], g = b[Symbol.iterator];
              if ("function" == typeof g) for (b = g.call(b); !(g = b.next()).done;) c.push(d.call(e, g.value)); else {
                g = b.length;
                for (var h = 0; h < g; h++) c.push(d.call(e, b[h]))
              }
              return c
            }
          });
          ia("Array.prototype.find", function (b) {
            return b ? b : function (b, d) {
              a:{
                var c = this;
                c instanceof String && (c = String(c));
                for (var f = c.length, g = 0; g < f; g++) {
                  var h = c[g];
                  if (b.call(d, h, g, c)) {
                    c = h;
                    break a
                  }
                }
                c = void 0
              }
              return c
            }
          });
          ia("Object.is", function (b) {
            return b ? b : function (b, d) {
              return b === d ? 0 !== b || 1 / b === 1 / d : b !== b && d !== d
            }
          });
          ia("Array.prototype.includes", function (b) {
            return b ? b : function (b, d) {
              var c = this;
              c instanceof String && (c = String(c));
              var f = c.length, g = d || 0;
              for (0 > g && (g = Math.max(g + f, 0)); g < f; g++) {
                var h = c[g];
                if (h === b || Object.is(h, b)) return !0
              }
              return !1
            }
          });
          ia("String.prototype.includes", function (b) {
            return b ? b : function (b, d) {
              if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
              if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
              return -1 !== this.indexOf(b, d || 0)
            }
          });
          ia("Set", function (b) {
            function c(b) {
              this.a = new Map;
              if (b) {
                b = p(b);
                for (var c; !(c = b.next()).done;) this.add(c.value)
              }
              this.size = this.a.size
            }

            if (function () {
              if (!b || "function" != typeof b || !b.prototype.entries || "function" != typeof Object.seal) return !1;
              try {
                var c = Object.seal({x: 4}), e = new b(p([c]));
                if (!e.has(c) || 1 != e.size || e.add(c) != e || 1 != e.size || e.add({x: 4}) != e || 2 != e.size) return !1;
                var f = e.entries(), g = f.next();
                if (g.done || g.value[0] != c || g.value[1] != c) return !1;
                g = f.next();
                return g.done || g.value[0] == c || 4 != g.value[0].x ||
                g.value[1] != g.value[0] ? !1 : f.next().done
              } catch (h) {
                return !1
              }
            }()) return b;
            ca();
            ea();
            c.prototype.add = function (b) {
              this.a.set(b, b);
              this.size = this.a.size;
              return this
            };
            c.prototype["delete"] = function (b) {
              b = this.a["delete"](b);
              this.size = this.a.size;
              return b
            };
            c.prototype.clear = function () {
              this.a.clear();
              this.size = 0
            };
            c.prototype.has = function (b) {
              return this.a.has(b)
            };
            c.prototype.entries = function () {
              return this.a.entries()
            };
            c.prototype.values = function () {
              return this.a.values()
            };
            c.prototype.keys = c.prototype.values;
            c.prototype[Symbol.iterator] = c.prototype.values;
            c.prototype.forEach = function (b, c) {
              var d = this;
              this.a.forEach(function (e) {
                return b.call(c, e, e, d)
              })
            };
            return c
          });
          ia("Object.values", function (b) {
            return b ? b : function (b) {
              var c = [], e;
              for (e in b) za(b, e) && c.push(b[e]);
              return c
            }
          });
          var Aa = this;
          Aa.a = !0;

          function z(b, c) {
            var d = b.split("."), e = Aa;
            d[0] in e || !e.execScript || e.execScript("var " + d[0]);
            for (var f; d.length && (f = d.shift());) d.length || void 0 === c ? e[f] ? e = e[f] : e = e[f] = {} : e[f] = c
          }

          function Ba(b, c) {
            function d() {
            }

            d.prototype = c.prototype;
            b.jf = c.prototype;
            b.prototype = new d;
            b.prototype.constructor = b;
            b.gf = function (b, d, g) {
              return c.prototype[d].apply(b, Array.prototype.slice.call(arguments, 2))
            }
          };/*

 Copyright 2016 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
          function Ca(b) {
            this.c = Math.exp(Math.log(.5) / b);
            this.b = this.a = 0
          }

          function Da(b, c, d) {
            var e = Math.pow(b.c, c);
            d = d * (1 - e) + e * b.a;
            isNaN(d) || (b.a = d, b.b += c)
          }

          function Ea(b) {
            return b.a / (1 - Math.pow(b.c, b.b))
          };

          function Fa() {
            this.b = new Ca(2);
            this.c = new Ca(5);
            this.a = 0
          }

          Fa.prototype.getBandwidthEstimate = function (b) {
            return 128E3 > this.a ? b : Math.min(Ea(this.b), Ea(this.c))
          };

          function Ga() {
          }

          function Ha() {
          }

          window.console && window.console.log.bind && (Ga = console.warn.bind(console));
          var Ia = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

          function Ja(b) {
            var c;
            b instanceof Ja ? (Ka(this, b.ja), this.Fa = b.Fa, this.ma = b.ma, La(this, b.Qa), this.$ = b.$, Ma(this, Na(b.a)), this.za = b.za) : b && (c = String(b).match(Ia)) ? (Ka(this, c[1] || "", !0), this.Fa = Oa(c[2] || ""), this.ma = Oa(c[3] || "", !0), La(this, c[4]), this.$ = Oa(c[5] || "", !0), Ma(this, c[6] || "", !0), this.za = Oa(c[7] || "")) : this.a = new Pa(null)
          }

          n = Ja.prototype;
          n.ja = "";
          n.Fa = "";
          n.ma = "";
          n.Qa = null;
          n.$ = "";
          n.za = "";
          n.toString = function () {
            var b = [], c = this.ja;
            c && b.push(Qa(c, Ra, !0), ":");
            if (c = this.ma) {
              b.push("//");
              var d = this.Fa;
              d && b.push(Qa(d, Ra, !0), "@");
              b.push(encodeURIComponent(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
              c = this.Qa;
              null != c && b.push(":", String(c))
            }
            if (c = this.$) this.ma && "/" != c.charAt(0) && b.push("/"), b.push(Qa(c, "/" == c.charAt(0) ? Sa : Ta, !0));
            (c = this.a.toString()) && b.push("?", c);
            (c = this.za) && b.push("#", Qa(c, Ua));
            return b.join("")
          };
          n.resolve = function (b) {
            var c = new Ja(this);
            "data" === c.ja && (c = new Ja);
            var d = !!b.ja;
            d ? Ka(c, b.ja) : d = !!b.Fa;
            d ? c.Fa = b.Fa : d = !!b.ma;
            d ? c.ma = b.ma : d = null != b.Qa;
            var e = b.$;
            if (d) La(c, b.Qa); else if (d = !!b.$) {
              if ("/" != e.charAt(0)) if (this.ma && !this.$) e = "/" + e; else {
                var f = c.$.lastIndexOf("/");
                -1 != f && (e = c.$.substr(0, f + 1) + e)
              }
              if (".." == e || "." == e) e = ""; else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                f = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var g = [], h = 0; h < e.length;) {
                  var k = e[h++];
                  "." == k ? f && h == e.length && g.push("") : ".." == k ?
                          ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(), f && h == e.length && g.push("")) : (g.push(k), f = !0)
                }
                e = g.join("/")
              }
            }
            d ? c.$ = e : d = "" !== b.a.toString();
            d ? Ma(c, Na(b.a)) : d = !!b.za;
            d && (c.za = b.za);
            return c
          };

          function Ka(b, c, d) {
            b.ja = d ? Oa(c, !0) : c;
            b.ja && (b.ja = b.ja.replace(/:$/, ""))
          }

          function La(b, c) {
            if (c) {
              c = Number(c);
              if (isNaN(c) || 0 > c) throw Error("Bad port number " + c);
              b.Qa = c
            } else b.Qa = null
          }

          function Ma(b, c, d) {
            c instanceof Pa ? b.a = c : (d || (c = Qa(c, Va)), b.a = new Pa(c))
          }

          function Oa(b, c) {
            return b ? c ? decodeURI(b) : decodeURIComponent(b) : ""
          }

          function Qa(b, c, d) {
            return "string" == typeof b ? (b = encodeURI(b).replace(c, Wa), d && (b = b.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), b) : null
          }

          function Wa(b) {
            b = b.charCodeAt(0);
            return "%" + (b >> 4 & 15).toString(16) + (b & 15).toString(16)
          }

          var Ra = /[#\/\?@]/g, Ta = /[#\?:]/g, Sa = /[#\?]/g, Va = /[#\?@]/g, Ua = /#/g;

          function Pa(b) {
            this.b = b || null
          }

          Pa.prototype.a = null;
          Pa.prototype.c = null;
          Pa.prototype.add = function (b, c) {
            if (!this.a && (this.a = {}, this.c = 0, this.b)) for (var d = this.b.split("&"), e = 0; e < d.length; e++) {
              var f = d[e].indexOf("="), g = null;
              if (0 <= f) {
                var h = d[e].substring(0, f);
                g = d[e].substring(f + 1)
              } else h = d[e];
              h = decodeURIComponent(h.replace(/\+/g, " "));
              g = g || "";
              this.add(h, decodeURIComponent(g.replace(/\+/g, " ")))
            }
            this.b = null;
            (d = this.a.hasOwnProperty(b) && this.a[b]) || (this.a[b] = d = []);
            d.push(c);
            this.c++;
            return this
          };
          Pa.prototype.toString = function () {
            if (this.b) return this.b;
            if (!this.a) return "";
            var b = [], c;
            for (c in this.a) for (var d = encodeURIComponent(c), e = this.a[c], f = 0; f < e.length; f++) {
              var g = d;
              "" !== e[f] && (g += "=" + encodeURIComponent(e[f]));
              b.push(g)
            }
            return this.b = b.join("&")
          };

          function Na(b) {
            var c = new Pa;
            c.b = b.b;
            if (b.a) {
              var d = {}, e;
              for (e in b.a) d[e] = b.a[e].concat();
              c.a = d;
              c.c = b.c
            }
            return c
          };

          function A() {
            var b, c, d = new Promise(function (d, f) {
              b = d;
              c = f
            });
            d.resolve = b;
            d.reject = c;
            return d
          }

          A.prototype.resolve = function () {
          };
          A.prototype.reject = function () {
          };

          function Xa(b, c) {
            var d = Ya();
            this.i = null == b.maxAttempts ? d.maxAttempts : b.maxAttempts;
            this.f = null == b.baseDelay ? d.baseDelay : b.baseDelay;
            this.h = null == b.fuzzFactor ? d.fuzzFactor : b.fuzzFactor;
            this.g = null == b.backoffFactor ? d.backoffFactor : b.backoffFactor;
            this.a = 0;
            this.b = this.f;
            if (this.c = c || !1) this.a = 1
          }

          function Za(b) {
            if (b.a >= b.i) if (b.c) b.a = 1, b.b = b.f; else return Promise.reject();
            var c = new A;
            b.a ? (window.setTimeout(c.resolve, b.b * (1 + (2 * Math.random() - 1) * b.h)), b.b *= b.g) : c.resolve();
            b.a++;
            return c
          }

          function Ya() {
            return {maxAttempts: 2, baseDelay: 1E3, backoffFactor: 2, fuzzFactor: .5, timeout: 0}
          };

          function B(b, c, d, e) {
            this.severity = b;
            this.category = c;
            this.code = d;
            this.data = Array.prototype.slice.call(arguments, 3);
            this.handled = !1
          }

          z("shaka.util.Error", B);
          B.prototype.toString = function () {
            return "shaka.util.Error " + JSON.stringify(this, null, "  ")
          };
          B.Severity = {RECOVERABLE: 1, CRITICAL: 2};
          B.Category = {NETWORK: 1, TEXT: 2, MEDIA: 3, MANIFEST: 4, STREAMING: 5, DRM: 6, PLAYER: 7, CAST: 8, STORAGE: 9};
          B.Code = {
            UNSUPPORTED_SCHEME: 1E3,
            BAD_HTTP_STATUS: 1001,
            HTTP_ERROR: 1002,
            TIMEOUT: 1003,
            MALFORMED_DATA_URI: 1004,
            UNKNOWN_DATA_URI_ENCODING: 1005,
            REQUEST_FILTER_ERROR: 1006,
            RESPONSE_FILTER_ERROR: 1007,
            MALFORMED_TEST_URI: 1008,
            UNEXPECTED_TEST_REQUEST: 1009,
            INVALID_TEXT_HEADER: 2E3,
            INVALID_TEXT_CUE: 2001,
            UNABLE_TO_DETECT_ENCODING: 2003,
            BAD_ENCODING: 2004,
            INVALID_XML: 2005,
            INVALID_MP4_TTML: 2007,
            INVALID_MP4_VTT: 2008,
            UNABLE_TO_EXTRACT_CUE_START_TIME: 2009,
            BUFFER_READ_OUT_OF_BOUNDS: 3E3,
            JS_INTEGER_OVERFLOW: 3001,
            EBML_OVERFLOW: 3002,
            EBML_BAD_FLOATING_POINT_SIZE: 3003,
            MP4_SIDX_WRONG_BOX_TYPE: 3004,
            MP4_SIDX_INVALID_TIMESCALE: 3005,
            MP4_SIDX_TYPE_NOT_SUPPORTED: 3006,
            WEBM_CUES_ELEMENT_MISSING: 3007,
            WEBM_EBML_HEADER_ELEMENT_MISSING: 3008,
            WEBM_SEGMENT_ELEMENT_MISSING: 3009,
            WEBM_INFO_ELEMENT_MISSING: 3010,
            WEBM_DURATION_ELEMENT_MISSING: 3011,
            WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING: 3012,
            WEBM_CUE_TIME_ELEMENT_MISSING: 3013,
            MEDIA_SOURCE_OPERATION_FAILED: 3014,
            MEDIA_SOURCE_OPERATION_THREW: 3015,
            VIDEO_ERROR: 3016,
            QUOTA_EXCEEDED_ERROR: 3017,
            TRANSMUXING_FAILED: 3018,
            UNABLE_TO_GUESS_MANIFEST_TYPE: 4E3,
            DASH_INVALID_XML: 4001,
            DASH_NO_SEGMENT_INFO: 4002,
            DASH_EMPTY_ADAPTATION_SET: 4003,
            DASH_EMPTY_PERIOD: 4004,
            DASH_WEBM_MISSING_INIT: 4005,
            DASH_UNSUPPORTED_CONTAINER: 4006,
            DASH_PSSH_BAD_ENCODING: 4007,
            DASH_NO_COMMON_KEY_SYSTEM: 4008,
            DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED: 4009,
            DASH_CONFLICTING_KEY_IDS: 4010,
            UNPLAYABLE_PERIOD: 4011,
            RESTRICTIONS_CANNOT_BE_MET: 4012,
            NO_PERIODS: 4014,
            HLS_PLAYLIST_HEADER_MISSING: 4015,
            INVALID_HLS_TAG: 4016,
            HLS_INVALID_PLAYLIST_HIERARCHY: 4017,
            DASH_DUPLICATE_REPRESENTATION_ID: 4018,
            HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND: 4020,
            HLS_COULD_NOT_GUESS_MIME_TYPE: 4021,
            HLS_MASTER_PLAYLIST_NOT_PROVIDED: 4022,
            HLS_REQUIRED_ATTRIBUTE_MISSING: 4023,
            HLS_REQUIRED_TAG_MISSING: 4024,
            HLS_COULD_NOT_GUESS_CODECS: 4025,
            HLS_KEYFORMATS_NOT_SUPPORTED: 4026,
            DASH_UNSUPPORTED_XLINK_ACTUATE: 4027,
            DASH_XLINK_DEPTH_LIMIT: 4028,
            HLS_COULD_NOT_PARSE_SEGMENT_START_TIME: 4030,
            CONTENT_UNSUPPORTED_BY_BROWSER: 4032,
            CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM: 4033,
            INVALID_STREAMS_CHOSEN: 5005,
            NO_RECOGNIZED_KEY_SYSTEMS: 6E3,
            REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE: 6001,
            FAILED_TO_CREATE_CDM: 6002,
            FAILED_TO_ATTACH_TO_VIDEO: 6003,
            INVALID_SERVER_CERTIFICATE: 6004,
            FAILED_TO_CREATE_SESSION: 6005,
            FAILED_TO_GENERATE_LICENSE_REQUEST: 6006,
            LICENSE_REQUEST_FAILED: 6007,
            LICENSE_RESPONSE_REJECTED: 6008,
            ENCRYPTED_CONTENT_WITHOUT_DRM_INFO: 6010,
            NO_LICENSE_SERVER_GIVEN: 6012,
            OFFLINE_SESSION_REMOVED: 6013,
            EXPIRED: 6014,
            LOAD_INTERRUPTED: 7E3,
            OPERATION_ABORTED: 7001,
            NO_VIDEO_ELEMENT: 7002,
            CAST_API_UNAVAILABLE: 8E3,
            NO_CAST_RECEIVERS: 8001,
            ALREADY_CASTING: 8002,
            UNEXPECTED_CAST_ERROR: 8003,
            CAST_CANCELED_BY_USER: 8004,
            CAST_CONNECTION_TIMED_OUT: 8005,
            CAST_RECEIVER_APP_UNAVAILABLE: 8006,
            STORAGE_NOT_SUPPORTED: 9E3,
            INDEXED_DB_ERROR: 9001,
            DEPRECATED_OPERATION_ABORTED: 9002,
            REQUESTED_ITEM_NOT_FOUND: 9003,
            MALFORMED_OFFLINE_URI: 9004,
            CANNOT_STORE_LIVE_OFFLINE: 9005,
            STORE_ALREADY_IN_PROGRESS: 9006,
            NO_INIT_DATA_FOR_OFFLINE: 9007,
            LOCAL_PLAYER_INSTANCE_REQUIRED: 9008,
            NEW_KEY_OPERATION_NOT_SUPPORTED: 9011,
            KEY_NOT_FOUND: 9012,
            MISSING_STORAGE_CELL: 9013
          };

          function C(b, c) {
            this.promise = b;
            this.b = c;
            this.a = !1
          }

          z("shaka.util.AbortableOperation", C);

          function $a(b) {
            return new C(Promise.reject(b), function () {
              return Promise.resolve()
            })
          }

          C.failed = $a;

          function ab() {
            var b = Promise.reject(new B(2, 7, 7001));
            b["catch"](function () {
            });
            return new C(b, function () {
              return Promise.resolve()
            })
          }

          C.aborted = ab;

          function bb(b) {
            return new C(Promise.resolve(b), function () {
              return Promise.resolve()
            })
          }

          C.completed = bb;

          function cb(b) {
            return new C(b, function () {
              return b["catch"](function () {
              })
            })
          }

          C.notAbortable = cb;
          C.prototype.abort = function () {
            this.a = !0;
            return this.b()
          };
          C.prototype.abort = C.prototype.abort;

          function db(b) {
            return new C(Promise.all(b.map(function (b) {
              return b.promise
            })), function () {
              return Promise.all(b.map(function (b) {
                return b.abort()
              }))
            })
          }

          C.all = db;
          C.prototype["finally"] = function (b) {
            this.promise.then(function () {
              return b(!0)
            }, function () {
              return b(!1)
            });
            return this
          };
          C.prototype["finally"] = C.prototype["finally"];
          C.prototype.X = function (b, c) {
            function d() {
              f.reject(new B(2, 7, 7001));
              return e.abort()
            }

            var e = this, f = new A;
            this.promise.then(function (c) {
              e.a ? f.reject(new B(2, 7, 7001)) : b ? d = eb(b, c, f) : f.resolve(c)
            }, function (b) {
              c ? d = eb(c, b, f) : f.reject(b)
            });
            return new C(f, function () {
              return d()
            })
          };
          C.prototype.chain = C.prototype.X;

          function eb(b, c, d) {
            try {
              var e = b(c);
              if (e && e.promise && e.abort) return d.resolve(e.promise), function () {
                return e.abort()
              };
              d.resolve(e);
              return function () {
                return Promise.resolve(e).then(function () {
                })["catch"](function () {
                })
              }
            } catch (f) {
              return d.reject(f), function () {
                return Promise.resolve()
              }
            }
          };

          function fb(b, c) {
            return "number" === typeof b && "number" === typeof c && isNaN(b) && isNaN(c) ? !0 : b === c
          }

          function gb(b, c) {
            c || (c = fb);
            for (var d = [], e = p(b), f = e.next(); !f.done; f = e.next()) f = f.value, -1 == hb(d, f, c) && d.push(f);
            return d
          }

          function hb(b, c, d) {
            for (var e = 0; e < b.length; ++e) if (d(b[e], c)) return e;
            return -1
          }

          function ib(b, c) {
            var d = b.indexOf(c);
            -1 < d && b.splice(d, 1)
          }

          function jb(b, c) {
            var d = 0;
            b.forEach(function (b) {
              d += c(b) ? 1 : 0
            });
            return d
          };

          function kb(b, c, d, e, f) {
            var g = f in e, h = !0, k;
            for (k in c) {
              var l = f + "." + k, m = g ? e[f] : d[k];
              g || k in b ? void 0 === c[k] ? void 0 === m || g ? delete b[k] : b[k] = lb(m) : m.constructor == Object && c[k] && c[k].constructor == Object ? (b[k] || (b[k] = lb(m)), l = kb(b[k], c[k], m, e, l), h = h && l) : typeof c[k] != typeof m || null == c[k] || c[k].constructor != m.constructor ? h = !1 : b[k] = c[k] : h = !1
            }
            return h
          }

          function lb(b) {
            function c(b) {
              switch (typeof b) {
                case "undefined":
                case "boolean":
                case "number":
                case "string":
                case "symbol":
                case "function":
                  return b;
                default:
                  if (!b || b.buffer && b.buffer.constructor == ArrayBuffer) return b;
                  if (0 <= d.indexOf(b)) return null;
                  var e = b.constructor == Array;
                  if (b.constructor != Object && !e) return null;
                  d.push(b);
                  var g = e ? [] : {}, h;
                  for (h in b) g[h] = c(b[h]);
                  e && (g.length = b.length);
                  return g
              }
            }

            var d = [];
            return c(b)
          };

          function mb(b, c) {
            function d() {
              return Promise.all(b.map(function (b) {
                return b.destroy()
              }))
            }

            return Promise.resolve(c()).then(function (b) {
              return d().then(function () {
                return b
              })
            }, function (b) {
              return d().then(function () {
                throw b;
              })
            })
          };

          function nb() {
            this.a = []
          }

          function ob(b, c) {
            b.a.push(c["finally"](function () {
              ib(b.a, c)
            }))
          }

          nb.prototype.destroy = function () {
            var b = [];
            this.a.forEach(function (c) {
              c.promise["catch"](function () {
              });
              b.push(c.abort())
            });
            this.a = [];
            return Promise.all(b)
          };

          function D(b) {
            this.c = !1;
            this.g = new nb;
            this.a = [];
            this.b = [];
            this.f = b || null
          }

          z("shaka.net.NetworkingEngine", D);
          D.RequestType = {MANIFEST: 0, SEGMENT: 1, LICENSE: 2, APP: 3};
          D.PluginPriority = {FALLBACK: 1, PREFERRED: 2, APPLICATION: 3};
          var pb = {};

          function qb(b, c, d) {
            d = d || 3;
            var e = pb[b];
            if (!e || d >= e.priority) pb[b] = {priority: d, ne: c}
          }

          D.registerScheme = qb;
          D.unregisterScheme = function (b) {
            delete pb[b]
          };
          D.prototype.qe = function (b) {
            this.a.push(b)
          };
          D.prototype.registerRequestFilter = D.prototype.qe;
          D.prototype.Ve = function (b) {
            ib(this.a, b)
          };
          D.prototype.unregisterRequestFilter = D.prototype.Ve;
          D.prototype.jd = function () {
            this.a = []
          };
          D.prototype.clearAllRequestFilters = D.prototype.jd;
          D.prototype.re = function (b) {
            this.b.push(b)
          };
          D.prototype.registerResponseFilter = D.prototype.re;
          D.prototype.We = function (b) {
            ib(this.b, b)
          };
          D.prototype.unregisterResponseFilter = D.prototype.We;
          D.prototype.kd = function () {
            this.b = []
          };
          D.prototype.clearAllResponseFilters = D.prototype.kd;

          function rb(b, c) {
            return {uris: b, method: "GET", body: null, headers: {}, allowCrossSiteCredentials: !1, retryParameters: c}
          }

          D.prototype.destroy = function () {
            this.c = !0;
            this.a = [];
            this.b = [];
            return this.g.destroy()
          };
          D.prototype.destroy = D.prototype.destroy;

          function sb(b) {
            b.then = function (c, d) {
              Ga("The network request interface has changed!  Please update your application to the new interface, which allows operations to be aborted.  Support for the old API will be removed in v2.5.");
              return b.promise.then(c, d)
            };
            b["catch"] = function (c) {
              Ga("The network request interface has changed!  Please update your application to the new interface, which allows operations to be aborted.  Support for the old API will be removed in v2.5.");
              return b.promise["catch"](c)
            };
            return b
          }

          D.prototype.request = function (b, c) {
            var d = this;
            if (this.c) return sb(ab());
            c.method = c.method || "GET";
            c.headers = c.headers || {};
            c.retryParameters = c.retryParameters ? lb(c.retryParameters) : Ya();
            c.uris = lb(c.uris);
            var e = tb(this, b, c), f = e.X(function () {
              return ub(d, b, c, new Xa(c.retryParameters, !1), 0, null)
            }), g = f.X(function (c) {
              return vb(d, b, c)
            }), h = Date.now(), k = 0;
            e.promise.then(function () {
              k = Date.now() - h
            }, function () {
            });
            var l = 0;
            f.promise.then(function () {
              l = Date.now()
            }, function () {
            });
            e = g.X(function (c) {
              var e = Date.now() - l;
              c.timeMs += k;
              c.timeMs += e;
              d.f && !c.fromCache && 1 == b && d.f(c.timeMs, c.data.byteLength);
              return c
            }, function (b) {
              b && (b.severity = 2);
              throw b;
            });
            ob(this.g, e);
            return sb(e)
          };
          D.prototype.request = D.prototype.request;

          function tb(b, c, d) {
            var e = bb(void 0);
            b.a.forEach(function (b) {
              e = e.X(function () {
                return b(c, d)
              })
            });
            return e.X(void 0, function (b) {
              if (b && 7001 == b.code) throw b;
              throw new B(2, 1, 1006, b);
            })
          }

          function ub(b, c, d, e, f, g) {
            var h = new Ja(d.uris[f]), k = h.ja;
            k || (k = location.protocol, k = k.slice(0, -1), Ka(h, k), d.uris[f] = h.toString());
            var l = (k = pb[k]) ? k.ne : null;
            if (!l) return $a(new B(2, 1, 1E3, h));
            var m;
            return cb(Za(e)).X(function () {
              if (b.c) return ab();
              m = Date.now();
              var e = l(d.uris[f], d, c);
              void 0 == e.promise && (Ga("The scheme plugin interface has changed!  Please update your scheme plugins to the new interface to add support for abort().  Support for the old plugin interface will be removed in v2.5."), e = cb(e));
              return e
            }).X(function (b) {
              void 0 == b.timeMs && (b.timeMs = Date.now() - m);
              return b
            }, function (h) {
              if (h && 7001 == h.code) throw h;
              if (b.c) return ab();
              if (h && 1 == h.severity) return f = (f + 1) % d.uris.length, ub(b, c, d, e, f, h);
              throw h || g;
            })
          }

          function vb(b, c, d) {
            var e = bb(void 0);
            b.b.forEach(function (b) {
              e = e.X(function () {
                return b(c, d)
              })
            });
            return e.X(function () {
              return d
            }, function (b) {
              if (b && 7001 == b.code) throw b;
              var c = 2;
              b instanceof B && (c = b.severity);
              throw new B(c, 1, 1007, b);
            })
          };

          function wb() {
            this.a = {}
          }

          wb.prototype.push = function (b, c) {
            this.a.hasOwnProperty(b) ? this.a[b].push(c) : this.a[b] = [c]
          };
          wb.prototype.get = function (b) {
            return (b = this.a[b]) ? b.slice() : null
          };
          wb.prototype.remove = function (b, c) {
            var d = this.a[b];
            if (d) for (var e = 0; e < d.length; ++e) d[e] == c && (d.splice(e, 1), --e)
          };

          function xb() {
            this.a = new wb
          }

          xb.prototype.destroy = function () {
            yb(this);
            this.a = null;
            return Promise.resolve()
          };

          function E(b, c, d, e) {
            b.a && (c = new zb(c, d, e), b.a.push(d, c))
          }

          function Ab(b, c, d, e) {
            E(b, c, d, function (b) {
              this.qa(c, d);
              e(b)
            }.bind(b))
          }

          xb.prototype.qa = function (b, c) {
            if (this.a) for (var d = this.a.get(c) || [], e = 0; e < d.length; ++e) {
              var f = d[e];
              f.target == b && (f.qa(), this.a.remove(c, f))
            }
          };

          function yb(b) {
            if (b.a) {
              var c = b.a, d = [], e;
              for (e in c.a) d.push.apply(d, c.a[e]);
              for (c = 0; c < d.length; ++c) d[c].qa();
              b.a.a = {}
            }
          }

          function zb(b, c, d) {
            this.target = b;
            this.type = c;
            this.a = d;
            this.target.addEventListener(c, d, !1)
          }

          zb.prototype.qa = function () {
            this.target.removeEventListener(this.type, this.a, !1);
            this.a = this.target = null
          };

          function F(b, c) {
            var d = c || {}, e;
            for (e in d) this[e] = d[e];
            this.defaultPrevented = this.cancelable = this.bubbles = !1;
            this.timeStamp = window.performance && window.performance.now ? window.performance.now() : Date.now();
            this.type = b;
            this.isTrusted = !1;
            this.target = this.currentTarget = null;
            this.a = !1
          }

          F.prototype.preventDefault = function () {
            this.cancelable && (this.defaultPrevented = !0)
          };
          F.prototype.stopImmediatePropagation = function () {
            this.a = !0
          };
          F.prototype.stopPropagation = function () {
          };

          function Bb(b, c) {
            return b.reduce(function (b, c, f) {
              return c["catch"](b.bind(null, f))
            }.bind(null, c), Promise.reject())
          }

          function Cb(b, c) {
            return b.concat(c)
          }

          function Db() {
          }

          function Eb(b) {
            return null != b
          }

          function Fb(b, c, d) {
            return d.indexOf(b) == c
          };

          function G(b, c) {
            if (0 == c.length) return b;
            var d = c.map(function (b) {
              return new Ja(b)
            });
            return b.map(function (b) {
              return new Ja(b)
            }).map(function (b) {
              return d.map(b.resolve.bind(b))
            }).reduce(Cb, []).map(function (b) {
              return b.toString()
            })
          }

          function Gb(b, c) {
            return {
              keySystem: b,
              licenseServerUri: "",
              distinctiveIdentifierRequired: !1,
              persistentStateRequired: !1,
              audioRobustness: "",
              videoRobustness: "",
              serverCertificate: null,
              initData: c || [],
              keyIds: []
            }
          }

          var Hb = 1 / 15;
          var H = {
            empty: function (b) {
              return !b || 0 == Object.keys(b).length
            }, values: function (b) {
              return Object.keys(b).map(function (c) {
                return b[c]
              })
            }, map: function (b, c) {
              return Object.keys(b).reduce(function (d, e) {
                d[e] = c(b[e], e);
                return d
              }, {})
            }, every: function (b, c) {
              return Object.keys(b).every(function (d) {
                return c(d, b[d])
              })
            }, forEach: function (b, c) {
              Object.keys(b).forEach(function (d) {
                c(d, b[d])
              })
            }, ef: function (b) {
              var c = new Map;
              Object.keys(b).forEach(function (d) {
                c.set(d, b[d])
              });
              return c
            }, ff: function (b) {
              var c = {};
              b.forEach(function (b,
                                  e) {
                c[e] = b
              });
              return c
            }
          };

          function Ib(b, c) {
            var d = b;
            c && (d += '; codecs="' + c + '"');
            return d
          }

          var Jb = {
            codecs: "codecs",
            frameRate: "framerate",
            bandwidth: "bitrate",
            width: "width",
            height: "height",
            channelsCount: "channels"
          };

          function Kb(b) {
            if (!b) return "";
            b = new Uint8Array(b);
            239 == b[0] && 187 == b[1] && 191 == b[2] && (b = b.subarray(3));
            b = escape(Lb(b));
            try {
              return decodeURIComponent(b)
            } catch (c) {
              throw new B(2, 2, 2004);
            }
          }

          z("shaka.util.StringUtils.fromUTF8", Kb);

          function Mb(b, c, d) {
            if (!b) return "";
            if (!d && 0 != b.byteLength % 2) throw new B(2, 2, 2004);
            if (b instanceof ArrayBuffer) var e = b; else d = new Uint8Array(b.byteLength), d.set(new Uint8Array(b)), e = d.buffer;
            b = Math.floor(b.byteLength / 2);
            d = new Uint16Array(b);
            e = new DataView(e);
            for (var f = 0; f < b; f++) d[f] = e.getUint16(2 * f, c);
            return Lb(d)
          }

          z("shaka.util.StringUtils.fromUTF16", Mb);

          function Nb(b) {
            var c = new Uint8Array(b);
            if (239 == c[0] && 187 == c[1] && 191 == c[2]) return Kb(c);
            if (254 == c[0] && 255 == c[1]) return Mb(c.subarray(2), !1);
            if (255 == c[0] && 254 == c[1]) return Mb(c.subarray(2), !0);
            var d = function (b, c) {
              return b.byteLength <= c || 32 <= b[c] && 126 >= b[c]
            }.bind(null, c);
            if (0 == c[0] && 0 == c[2]) return Mb(b, !1);
            if (0 == c[1] && 0 == c[3]) return Mb(b, !0);
            if (d(0) && d(1) && d(2) && d(3)) return Kb(b);
            throw new B(2, 2, 2003);
          }

          z("shaka.util.StringUtils.fromBytesAutoDetect", Nb);

          function Ob(b) {
            b = encodeURIComponent(b);
            b = unescape(b);
            for (var c = new Uint8Array(b.length), d = 0; d < b.length; ++d) c[d] = b.charCodeAt(d);
            return c.buffer
          }

          z("shaka.util.StringUtils.toUTF8", Ob);

          function Lb(b) {
            for (var c = "", d = 0; d < b.length; d += 16E3) c += String.fromCharCode.apply(null, b.subarray(d, d + 16E3));
            return c
          };

          function Pb(b) {
            this.a = null;
            this.b = function () {
              this.a = null;
              b()
            }.bind(this)
          }

          Pb.prototype.cancel = function () {
            null != this.a && (clearTimeout(this.a), this.a = null)
          };

          function Rb(b) {
            var c = Sb;
            b.cancel();
            b.a = setTimeout(b.b, 1E3 * c)
          }

          function Tb(b, c) {
            b.cancel();
            var d = function () {
              this.b();
              this.a = setTimeout(d, 1E3 * c)
            }.bind(b);
            b.a = setTimeout(d, 1E3 * c)
          };

          function Ub(b, c) {
            var d = void 0 == c ? !0 : c, e = window.btoa(Lb(b)).replace(/\+/g, "-").replace(/\//g, "_");
            return d ? e : e.replace(/=*$/, "")
          }

          z("shaka.util.Uint8ArrayUtils.toBase64", Ub);

          function Vb(b) {
            b = window.atob(b.replace(/-/g, "+").replace(/_/g, "/"));
            for (var c = new Uint8Array(b.length), d = 0; d < b.length; ++d) c[d] = b.charCodeAt(d);
            return c
          }

          z("shaka.util.Uint8ArrayUtils.fromBase64", Vb);

          function Wb(b) {
            for (var c = new Uint8Array(b.length / 2), d = 0; d < b.length; d += 2) c[d / 2] = window.parseInt(b.substr(d, 2), 16);
            return c
          }

          z("shaka.util.Uint8ArrayUtils.fromHex", Wb);

          function Xb(b) {
            for (var c = "", d = 0; d < b.length; ++d) {
              var e = b[d].toString(16);
              1 == e.length && (e = "0" + e);
              c += e
            }
            return c
          }

          z("shaka.util.Uint8ArrayUtils.toHex", Xb);

          function Yb(b, c) {
            if (!b && !c) return !0;
            if (!b || !c || b.length != c.length) return !1;
            for (var d = 0; d < b.length; ++d) if (b[d] != c[d]) return !1;
            return !0
          }

          z("shaka.util.Uint8ArrayUtils.equal", Yb);

          function Zb(b) {
            for (var c = 0, d = 0; d < arguments.length; ++d) c += arguments[d].length;
            c = new Uint8Array(c);
            for (var e = d = 0; e < arguments.length; ++e) c.set(arguments[e], d), d += arguments[e].length;
            return c
          }

          z("shaka.util.Uint8ArrayUtils.concat", Zb);

          function $b(b) {
            this.s = b;
            this.l = this.j = this.v = null;
            this.G = !1;
            this.b = null;
            this.h = new xb;
            this.a = [];
            this.o = [];
            this.i = new A;
            this.f = null;
            this.g = function (c) {
              this.i.reject(c);
              b.onError(c)
            }.bind(this);
            this.M = {};
            this.m = {};
            this.T = new Pb(this.pe.bind(this));
            this.c = !1;
            this.fa = new A;
            this.ha = !1;
            this.A = [];
            this.ga = !1;
            this.K = new Pb(this.oe.bind(this));
            Tb(this.K, 1);
            this.i["catch"](function () {
            })
          }

          n = $b.prototype;
          n.destroy = function () {
            var b = this;
            return q(function d() {
              return x(d, function (d) {
                switch (d.u) {
                  case 1:
                    if (b.c) return v(d, b.fa, 0);
                    b.c = !0;
                    return v(d, ac(b), 4);
                  case 4:
                    b.fa.resolve(), d.N(0)
                }
              })
            })
          };

          function ac(b) {
            return q(function d() {
              var e;
              return x(d, function (d) {
                switch (d.u) {
                  case 1:
                    return v(d, b.h.destroy(), 2);
                  case 2:
                    return b.h = null, b.i.reject(), b.K.cancel(), b.K = null, b.T.cancel(), b.T = null, e = b.a, b.a = [], v(d, Promise.all(e.map(function (b) {
                      return Promise.resolve().then(function () {
                        return q(function k() {
                          return x(k, function (d) {
                            switch (d.u) {
                              case 1:
                                return na(d, 2), v(d, bc(b.ka), 4);
                              case 4:
                                qa(d, 0);
                                break;
                              case 2:
                                ra(d), d.u = 0
                            }
                          })
                        })
                      })
                    })), 3);
                  case 3:
                    if (!b.l) {
                      d.N(4);
                      break
                    }
                    na(d, 5);
                    return v(d, b.l.setMediaKeys(null), 7);
                  case 7:
                    qa(d, 6);
                    break;
                  case 5:
                    ra(d);
                  case 6:
                    b.l = null;
                  case 4:
                    b.b = null, b.v = null, b.j = null, b.o = [], b.f = null, b.g = null, b.s = null, d.u = 0
                }
              })
            })
          }

          n.configure = function (b) {
            this.f = b
          };
          n.init = function (b, c) {
            var d = {}, e = [], f = b.periods.some(function (b) {
              return b.variants.some(function (b) {
                return b.drmInfos.length
              })
            });
            this.ha = c;
            this.o = b.offlineSessionIds;
            cc(this, b, c || 0 < b.offlineSessionIds.length, d, e);
            return e.length ? dc(this, d, e, f) : (this.G = !0, Promise.resolve())
          };
          n.rb = function (b) {
            var c = this;
            if (!this.j) return Ab(this.h, b, "encrypted", function () {
              this.g(new B(2, 6, 6010))
            }.bind(this)), Promise.resolve();
            this.l = b;
            Ab(this.h, this.l, "play", this.Ud.bind(this));
            b = this.l.setMediaKeys(this.j);
            b = b["catch"](function (b) {
              return Promise.reject(new B(2, 6, 6003, b.message))
            });
            var d = null;
            this.b.serverCertificate && this.b.serverCertificate.length && (d = this.j.setServerCertificate(this.b.serverCertificate).then(function () {
            })["catch"](function (b) {
              return Promise.reject(new B(2, 6, 6004, b.message))
            }));
            return Promise.all([b, d]).then(function () {
              if (c.c) return Promise.reject();
              ec(c);
              c.b.initData.length || c.o.length || E(c.h, c.l, "encrypted", function (b) {
                return fc(c, b.initDataType, new Uint8Array(b.initData))
              })
            })["catch"](function (b) {
              if (!c.c) return Promise.reject(b)
            })
          };

          function gc(b, c) {
            return Promise.all(c.map(function (b) {
              return hc(this, b).then(function (b) {
                if (b) {
                  for (var c = new A, d = 0; d < this.a.length; d++) if (this.a[d].ka == b) {
                    this.a[d].ra = c;
                    break
                  }
                  return Promise.all([b.remove(), c])
                }
              }.bind(this))
            }.bind(b)))
          }

          function ec(b) {
            var c = b.b ? b.b.initData : [];
            c.forEach(function (b) {
              ic(this, b.initDataType, b.initData)
            }.bind(b));
            b.o.forEach(function (b) {
              hc(this, b)
            }.bind(b));
            c.length || b.o.length || b.i.resolve();
            return b.i
          }

          function fc(b, c, d) {
            for (var e = p(b.a), f = e.next(); !f.done; f = e.next()) if (Yb(d, f.value.initData)) return;
            ic(b, c, d)
          }

          n.keySystem = function () {
            return this.b ? this.b.keySystem : ""
          };

          function jc(b) {
            return b.a.map(function (b) {
              return b.ka.sessionId
            })
          }

          n.vb = function () {
            var b = this.a.map(function (b) {
              b = b.ka.expiration;
              return isNaN(b) ? Infinity : b
            });
            return Math.min.apply(Math, b)
          };

          function cc(b, c, d, e, f) {
            var g = kc(b), h = lc(b, c);
            c.periods.forEach(function (b) {
              b.variants.forEach(function (b) {
                g && (b.drmInfos = [g]);
                h && (b.drmInfos = h);
                b.drmInfos.forEach(function (c) {
                  mc(this, c);
                  window.cast && window.cast.__platform__ && "com.microsoft.playready" == c.keySystem && (c.keySystem = "com.chromecast.playready");
                  var g = e[c.keySystem];
                  g || (g = {
                    audioCapabilities: [],
                    videoCapabilities: [],
                    distinctiveIdentifier: "optional",
                    persistentState: d ? "required" : "optional",
                    sessionTypes: [d ? "persistent-license" : "temporary"],
                    label: c.keySystem,
                    drmInfos: []
                  }, e[c.keySystem] = g, f.push(c.keySystem));
                  g.drmInfos.push(c);
                  c.distinctiveIdentifierRequired && (g.distinctiveIdentifier = "required");
                  c.persistentStateRequired && (g.persistentState = "required");
                  var h = [];
                  b.video && h.push(b.video);
                  b.audio && h.push(b.audio);
                  h.forEach(function (b) {
                    ("video" == b.type ? g.videoCapabilities : g.audioCapabilities).push({
                      robustness: ("video" == b.type ? c.videoRobustness : c.audioRobustness) || "",
                      contentType: Ib(b.mimeType, b.codecs)
                    })
                  }.bind(this))
                }.bind(this))
              }.bind(this))
            }.bind(b))
          }

          function dc(b, c, d, e) {
            if (1 == d.length && "" == d[0]) return Promise.reject(new B(2, 6, 6E3));
            var f = new A, g = f;
            [!0, !1].forEach(function (b) {
              d.forEach(function (d) {
                var e = c[d];
                e.drmInfos.some(function (b) {
                  return !!b.licenseServerUri
                }) == b && (0 == e.audioCapabilities.length && delete e.audioCapabilities, 0 == e.videoCapabilities.length && delete e.videoCapabilities, g = g["catch"](function () {
                  if (!this.c) return navigator.requestMediaKeySystemAccess(d, [e])
                }.bind(this)))
              }.bind(this))
            }.bind(b));
            g = g["catch"](function () {
              return Promise.reject(new B(2,
                      6, 6001))
            });
            g = g.then(function (b) {
              if (this.c) return Promise.reject();
              var d = 0 <= navigator.userAgent.indexOf("Edge/"), e = b.getConfiguration();
              this.v = (e.audioCapabilities || []).concat(e.videoCapabilities || []).map(function (b) {
                return b.contentType
              });
              d && (this.v = null);
              d = c[b.keySystem];
              nc(this, b.keySystem, d, d.drmInfos);
              return this.b.licenseServerUri ? b.createMediaKeys() : Promise.reject(new B(2, 6, 6012))
            }.bind(b)).then(function (b) {
              if (this.c) return Promise.reject();
              this.j = b;
              this.G = !0
            }.bind(b))["catch"](function (b) {
              if (!this.c) return this.v =
                      this.b = null, b instanceof B ? Promise.reject(b) : Promise.reject(new B(2, 6, 6002, b.message))
            }.bind(b));
            e || (g = g["catch"](function () {
            }));
            f.reject();
            return g
          }

          function mc(b, c) {
            var d = c.keySystem;
            if (d) {
              if (!c.licenseServerUri) {
                var e = b.f.servers[d];
                e && (c.licenseServerUri = e)
              }
              c.keyIds || (c.keyIds = []);
              if (d = b.f.advanced[d]) c.distinctiveIdentifierRequired || (c.distinctiveIdentifierRequired = d.distinctiveIdentifierRequired), c.persistentStateRequired || (c.persistentStateRequired = d.persistentStateRequired), c.videoRobustness || (c.videoRobustness = d.videoRobustness), c.audioRobustness || (c.audioRobustness = d.audioRobustness), c.serverCertificate || (c.serverCertificate = d.serverCertificate)
            }
          }

          function kc(b) {
            if (H.empty(b.f.clearKeys)) return null;
            var c = [], d = [], e;
            for (e in b.f.clearKeys) {
              var f = b.f.clearKeys[e], g = Wb(e);
              f = Wb(f);
              g = {kty: "oct", kid: Ub(g, !1), k: Ub(f, !1)};
              c.push(g);
              d.push(g.kid)
            }
            b = JSON.stringify({keys: c});
            d = JSON.stringify({kids: d});
            d = [{initData: new Uint8Array(Ob(d)), initDataType: "keyids"}];
            return {
              keySystem: "org.w3.clearkey",
              licenseServerUri: "data:application/json;base64," + window.btoa(b),
              distinctiveIdentifierRequired: !1,
              persistentStateRequired: !1,
              audioRobustness: "",
              videoRobustness: "",
              serverCertificate: null,
              initData: d,
              keyIds: []
            }
          }

          function lc(b, c) {
            var d = b.f, e = Object.keys(d.servers);
            return !e.length || c.periods.some(function (b) {
              return b.variants.some(function (b) {
                return b.drmInfos.length
              })
            }) ? null : e.map(function (b) {
              return {
                keySystem: b,
                licenseServerUri: d.servers[b],
                distinctiveIdentifierRequired: !1,
                persistentStateRequired: !1,
                audioRobustness: "",
                videoRobustness: "",
                serverCertificate: null,
                initData: [],
                keyIds: []
              }
            })
          }

          function nc(b, c, d, e) {
            var f = [], g = [], h = [], k = [];
            oc(e, f, g, h, k);
            b.b = {
              keySystem: c,
              licenseServerUri: f[0],
              distinctiveIdentifierRequired: "required" == d.distinctiveIdentifier,
              persistentStateRequired: "required" == d.persistentState,
              audioRobustness: d.audioCapabilities ? d.audioCapabilities[0].robustness : "",
              videoRobustness: d.videoCapabilities ? d.videoCapabilities[0].robustness : "",
              serverCertificate: g[0],
              initData: h,
              keyIds: k
            }
          }

          function oc(b, c, d, e, f) {
            function g(b, c) {
              return b.keyId && b.keyId == c.keyId ? !0 : b.initDataType == c.initDataType && Yb(b.initData, c.initData)
            }

            b.forEach(function (b) {
              -1 == c.indexOf(b.licenseServerUri) && c.push(b.licenseServerUri);
              b.serverCertificate && -1 == hb(d, b.serverCertificate, Yb) && d.push(b.serverCertificate);
              b.initData && b.initData.forEach(function (b) {
                -1 == hb(e, b, g) && e.push(b)
              });
              if (b.keyIds) for (var h = 0; h < b.keyIds.length; ++h) -1 == f.indexOf(b.keyIds[h]) && f.push(b.keyIds[h])
            })
          }

          function hc(b, c) {
            try {
              var d = b.j.createSession("persistent-license")
            } catch (g) {
              var e = new B(2, 6, 6005, g.message);
              b.g(e);
              return Promise.reject(e)
            }
            E(b.h, d, "message", b.Ic.bind(b));
            E(b.h, d, "keystatuseschange", b.Ec.bind(b));
            var f = {initData: null, ka: d, loaded: !1, Ub: Infinity, ra: null};
            b.a.push(f);
            return d.load(c).then(function (b) {
                      if (this.c) return Promise.reject();
                      if (b) return f.loaded = !0, this.a.every(function (b) {
                        return b.loaded
                      }) && this.i.resolve(), d;
                      this.a.splice(this.a.indexOf(f), 1);
                      this.g(new B(2, 6, 6013))
                    }.bind(b),
                    function (b) {
                      this.c || (this.a.splice(this.a.indexOf(f), 1), this.g(new B(2, 6, 6005, b.message)))
                    }.bind(b))
          }

          function ic(b, c, d) {
            try {
              var e = b.ha ? b.j.createSession("persistent-license") : b.j.createSession()
            } catch (f) {
              b.g(new B(2, 6, 6005, f.message));
              return
            }
            E(b.h, e, "message", b.Ic.bind(b));
            E(b.h, e, "keystatuseschange", b.Ec.bind(b));
            b.a.push({initData: d, ka: e, loaded: !1, Ub: Infinity, ra: null});
            e.generateRequest(c, d.buffer)["catch"](function (c) {
              if (!b.c) {
                for (var d = 0; d < b.a.length; ++d) if (b.a[d].ka == e) {
                  b.a.splice(d, 1);
                  break
                }
                if (c.errorCode && c.errorCode.systemCode) {
                  var f = c.errorCode.systemCode;
                  0 > f && (f += Math.pow(2, 32));
                  f = "0x" +
                          f.toString(16)
                }
                b.g(new B(2, 6, 6006, c.message, c, f))
              }
            })
          }

          n.Ic = function (b) {
            this.f.delayLicenseRequestUntilPlayed && this.l.paused && !this.ga ? this.A.push(b) : pc(this, b)
          };

          function pc(b, c) {
            for (var d = c.target, e, f = 0; f < b.a.length; f++) if (b.a[f].ka == d) {
              e = b.a[f];
              break
            }
            f = rb([b.b.licenseServerUri], b.f.retryParameters);
            f.body = c.message;
            f.method = "POST";
            "com.microsoft.playready" != b.b.keySystem && "com.chromecast.playready" != b.b.keySystem || qc(f);
            b.s.$a.request(2, f).promise.then(function (b) {
              return this.c ? Promise.reject() : d.update(b.data).then(function () {
                this.s.onEvent(new F("drmsessionupdate"));
                e && (e.ra && e.ra.resolve(), setTimeout(function () {
                  e.loaded = !0;
                  this.a.every(function (b) {
                    return b.loaded
                  }) &&
                  this.i.resolve()
                }.bind(this), 1E3 * rc))
              }.bind(this))
            }.bind(b), function (b) {
              this.c || (b = new B(2, 6, 6007, b), this.g(b), e && e.ra && e.ra.reject(b))
            }.bind(b))["catch"](function (b) {
              this.c || (b = new B(2, 6, 6008, b.message), this.g(b), e && e.ra && e.ra.reject(b))
            }.bind(b))
          }

          function qc(b) {
            var c = Mb(b.body, !0, !0);
            if (-1 == c.indexOf("PlayReadyKeyMessage")) b.headers["Content-Type"] = "text/xml; charset=utf-8"; else {
              c = (new DOMParser).parseFromString(c, "application/xml");
              for (var d = c.getElementsByTagName("HttpHeader"), e = 0; e < d.length; ++e) b.headers[d[e].querySelector("name").textContent] = d[e].querySelector("value").textContent;
              b.body = Vb(c.querySelector("Challenge").textContent).buffer
            }
          }

          n.Ec = function (b) {
            b = b.target;
            var c;
            for (c = 0; c < this.a.length && this.a[c].ka != b; ++c) ;
            var d = c < this.a.length, e = !1;
            b.keyStatuses.forEach(function (b, d) {
              if ("string" == typeof d) {
                var f = d;
                d = b;
                b = f
              }
              if ("com.microsoft.playready" == this.b.keySystem && 16 == d.byteLength && !/Tizen/.exec(navigator.userAgent)) {
                f = new DataView(d);
                var g = f.getUint32(0, !0), h = f.getUint16(4, !0), r = f.getUint16(6, !0);
                f.setUint32(0, g, !1);
                f.setUint16(4, h, !1);
                f.setUint16(6, r, !1)
              }
              "com.microsoft.playready" == this.b.keySystem && "status-pending" == b && (b = "usable");
              "status-pending" != b && (this.a[c].loaded = !0);
              "expired" == b && (e = !0);
              f = Xb(new Uint8Array(d));
              this.M[f] = b
            }.bind(this));
            var f = b.expiration - Date.now();
            (0 > f || e && 1E3 > f) && d && !this.a[c].ra && (this.a.splice(c, 1), b.close()["catch"](function () {
            }));
            this.a.every(function (b) {
              return b.loaded
            }) && (this.i.resolve(), Rb(this.T))
          };
          n.pe = function () {
            function b(b, c) {
              return "expired" == c
            }

            this.m = {};
            for (var c in this.M) this.m[c] = this.M[c];
            !H.empty(this.m) && H.every(this.m, b) && this.g(new B(2, 6, 6014));
            this.s.Vb(this.m)
          };

          function sc() {
            var b = [],
                    c = [{contentType: 'video/mp4; codecs="avc1.42E01E"'}, {contentType: 'video/webm; codecs="vp8"'}],
                    d = [{
                      videoCapabilities: c,
                      persistentState: "required",
                      sessionTypes: ["persistent-license"]
                    }, {videoCapabilities: c}], e = {};
            "org.w3.clearkey com.widevine.alpha com.microsoft.playready com.apple.fps.2_0 com.apple.fps.1_0 com.apple.fps com.adobe.primetime".split(" ").forEach(function (c) {
              var f = navigator.requestMediaKeySystemAccess(c, d).then(function (b) {
                var d = b.getConfiguration().sessionTypes;
                d =
                        d ? 0 <= d.indexOf("persistent-license") : !1;
                0 <= navigator.userAgent.indexOf("Tizen 3") && (d = !1);
                e[c] = {persistentState: d};
                return b.createMediaKeys()
              })["catch"](function () {
                e[c] = null
              });
              b.push(f)
            });
            return Promise.all(b).then(function () {
              return e
            })
          }

          n.Ud = function () {
            for (var b = 0; b < this.A.length; b++) pc(this, this.A[b]);
            this.ga = !0;
            this.A = []
          };

          function tc(b, c) {
            var d = b.keySystem();
            return 0 == c.drmInfos.length || c.drmInfos.some(function (b) {
              return b.keySystem == d
            })
          }

          function uc(b, c) {
            if (!b.length) return c;
            if (!c.length) return b;
            for (var d = [], e = 0; e < b.length; e++) for (var f = 0; f < c.length; f++) if (b[e].keySystem == c[f].keySystem) {
              var g = b[e];
              f = c[f];
              var h = [];
              h = h.concat(g.initData || []);
              h = h.concat(f.initData || []);
              var k = [];
              k = k.concat(g.keyIds);
              k = k.concat(f.keyIds);
              d.push({
                keySystem: g.keySystem,
                licenseServerUri: g.licenseServerUri || f.licenseServerUri,
                distinctiveIdentifierRequired: g.distinctiveIdentifierRequired || f.distinctiveIdentifierRequired,
                persistentStateRequired: g.persistentStateRequired ||
                        f.persistentStateRequired,
                videoRobustness: g.videoRobustness || f.videoRobustness,
                audioRobustness: g.audioRobustness || f.audioRobustness,
                serverCertificate: g.serverCertificate || f.serverCertificate,
                initData: h,
                keyIds: k
              });
              break
            }
            return d
          }

          n.oe = function () {
            this.a.forEach(function (b) {
              var c = b.Ub, d = b.ka.expiration;
              isNaN(d) && (d = Infinity);
              d != c && (this.s.onExpirationUpdated(b.ka.sessionId, d), b.Ub = d)
            }.bind(this))
          };

          function bc(b) {
            return q(function d() {
              var e, f;
              return x(d, function (d) {
                switch (d.u) {
                  case 1:
                    return e = b.close().then(function () {
                      return !0
                    }), f = new Promise(function (b) {
                      setTimeout(function () {
                        b(!1)
                      }, 1E3 * vc)
                    }), v(d, Promise.race([e, f]), 2);
                  case 2:
                    d.u = 0
                }
              })
            })
          }

          var vc = 1, rc = 5, Sb = .5;

          function wc(b) {
            return !b || 1 == b.length && 1E-6 > b.end(0) - b.start(0) ? null : b.length ? b.end(b.length - 1) : null
          }

          function xc(b, c, d) {
            d = void 0 === d ? 0 : d;
            return !b || !b.length || 1 == b.length && 1E-6 > b.end(0) - b.start(0) || c > b.end(b.length - 1) ? !1 : c + d >= b.start(0)
          }

          function yc(b, c) {
            if (!b || !b.length || 1 == b.length && 1E-6 > b.end(0) - b.start(0)) return 0;
            for (var d = 0, e = b.length - 1; 0 <= e && b.end(e) > c; --e) d += b.end(e) - Math.max(b.start(e), c);
            return d
          }

          function zc(b) {
            if (!b) return [];
            for (var c = [], d = 0; d < b.length; d++) c.push({start: b.start(d), end: b.end(d)});
            return c
          };

          function I(b, c, d) {
            this.startTime = b;
            this.endTime = c;
            this.payload = d;
            this.region = new Ac;
            this.position = null;
            this.positionAlign = Bc;
            this.size = 100;
            this.textAlign = Dc;
            this.writingDirection = Ec;
            this.lineInterpretation = Fc;
            this.line = null;
            this.lineHeight = "";
            this.lineAlign = Gc;
            this.displayAlign = Hc;
            this.fontSize = this.backgroundColor = this.color = "";
            this.fontWeight = Ic;
            this.fontStyle = Jc;
            this.fontFamily = "";
            this.textDecoration = [];
            this.wrapLine = !0;
            this.id = ""
          }

          z("shaka.text.Cue", I);
          var Bc = "auto";
          I.positionAlign = {LEFT: "line-left", RIGHT: "line-right", CENTER: "center", AUTO: Bc};
          var Dc = "center", Kc = {LEFT: "left", RIGHT: "right", CENTER: Dc, START: "start", END: "end"};
          I.textAlign = Kc;
          var Hc = "before", Lc = {BEFORE: Hc, CENTER: "center", AFTER: "after"};
          I.displayAlign = Lc;
          var Ec = 0;
          I.writingDirection = {
            HORIZONTAL_LEFT_TO_RIGHT: Ec,
            HORIZONTAL_RIGHT_TO_LEFT: 1,
            VERTICAL_LEFT_TO_RIGHT: 2,
            VERTICAL_RIGHT_TO_LEFT: 3
          };
          var Fc = 0;
          I.lineInterpretation = {LINE_NUMBER: Fc, PERCENTAGE: 1};
          var Gc = "center", Mc = {CENTER: Gc, START: "start", END: "end"};
          I.lineAlign = Mc;
          var Ic = 400;
          I.fontWeight = {NORMAL: Ic, BOLD: 700};
          var Jc = "normal", Nc = {NORMAL: Jc, ITALIC: "italic", OBLIQUE: "oblique"};
          I.fontStyle = Nc;
          I.textDecoration = {UNDERLINE: "underline", LINE_THROUGH: "lineThrough", OVERLINE: "overline"};

          function Ac() {
            this.id = "";
            this.regionAnchorY = this.regionAnchorX = this.viewportAnchorY = this.viewportAnchorX = 0;
            this.height = this.width = 100;
            this.viewportAnchorUnits = this.widthUnits = this.heightUnits = Oc;
            this.scroll = Pc
          }

          z("shaka.text.CueRegion", Ac);
          var Oc = 1;
          Ac.units = {PX: 0, PERCENTAGE: Oc, LINES: 2};
          var Pc = "";
          Ac.scrollMode = {NONE: Pc, UP: "up"};

          function Qc() {
            this.a = new muxjs.mp4.Transmuxer({keepOriginalTimestamps: !0});
            this.b = null;
            this.g = [];
            this.c = [];
            this.f = !1;
            this.a.on("data", this.i.bind(this));
            this.a.on("done", this.h.bind(this))
          }

          Qc.prototype.destroy = function () {
            this.a.dispose();
            this.a = null;
            return Promise.resolve()
          };

          function Rc(b, c) {
            return window.muxjs && "mp2t" == b.split(";")[0].split("/")[1] ? c ? MediaSource.isTypeSupported(Sc(c, b)) : MediaSource.isTypeSupported(Sc("audio", b)) || MediaSource.isTypeSupported(Sc("video", b)) : !1
          }

          function Sc(b, c) {
            var d = c.replace("mp2t", "mp4");
            "audio" == b && (d = d.replace("video", "audio"));
            var e = /avc1\.(66|77|100)\.(\d+)/.exec(d);
            if (e) {
              var f = "avc1.", g = e[1], h = Number(e[2]);
              f = ("66" == g ? f + "4200" : "77" == g ? f + "4d00" : f + "6400") + (h >> 4).toString(16);
              f += (h & 15).toString(16);
              d = d.replace(e[0], f)
            }
            return d
          }

          function Tc(b, c) {
            b.f = !0;
            b.b = new A;
            b.g = [];
            b.c = [];
            var d = new Uint8Array(c);
            b.a.push(d);
            b.a.flush();
            b.f && b.b.reject(new B(2, 3, 3018));
            return b.b
          }

          Qc.prototype.i = function (b) {
            for (var c = 0; c < b.captions.length; c++) {
              var d = b.captions[c];
              this.c.push(new I(d.startTime, d.endTime, d.text))
            }
            c = new Uint8Array(b.data.byteLength + b.initSegment.byteLength);
            c.set(b.initSegment, 0);
            c.set(b.data, b.initSegment.byteLength);
            this.g.push(c)
          };
          Qc.prototype.h = function () {
            var b = {data: Zb.apply(null, this.g), cues: this.c};
            this.b.resolve(b);
            this.f = !1
          };

          function Uc(b) {
            this.f = null;
            this.c = b;
            this.h = this.i = 0;
            this.g = Infinity;
            this.b = this.a = null
          }

          var J = {};
          z("shaka.text.TextEngine.registerParser", function (b, c) {
            J[b] = c
          });
          z("shaka.text.TextEngine.unregisterParser", function (b) {
            delete J[b]
          });
          Uc.prototype.destroy = function () {
            this.c = this.f = null;
            return Promise.resolve()
          };
          Uc.prototype.Fe = function (b) {
            this.c = b
          };
          Uc.prototype.setDisplayer = Uc.prototype.Fe;
          Uc.prototype.Lb = function (b) {
            var c = {periodStart: 0, segmentStart: null, segmentEnd: 0};
            try {
              return this.f.parseMedia(new Uint8Array(b), c)[0].startTime
            } catch (d) {
              throw new B(2, 2, 2009, d);
            }
          };

          function Vc(b, c, d, e) {
            return Promise.resolve().then(function () {
              if (this.f && this.c) if (null == d || null == e) this.f.parseInit(new Uint8Array(c)); else {
                var b = {periodStart: this.i, segmentStart: d, segmentEnd: e};
                b = this.f.parseMedia(new Uint8Array(c), b).filter(function (b) {
                  return b.startTime >= this.h && b.startTime < this.g
                }.bind(this));
                this.c.append(b);
                null == this.a && (this.a = Math.max(d, this.h));
                this.b = Math.min(e, this.g)
              }
            }.bind(b))
          }

          Uc.prototype.remove = function (b, c) {
            return Promise.resolve().then(function () {
              !this.c || !this.c.remove(b, c) || null == this.a || c <= this.a || b >= this.b || (b <= this.a && c >= this.b ? this.a = this.b = null : b <= this.a && c < this.b ? this.a = c : b > this.a && c >= this.b && (this.b = b))
            }.bind(this))
          };
          Uc.prototype.lc = function (b) {
            this.c.append(b)
          };
          Uc.prototype.appendCues = Uc.prototype.lc;

          function Wc(b) {
            this.f = b;
            this.o = null;
            this.b = {};
            this.a = null;
            this.c = {};
            this.h = new xb;
            this.m = !1;
            this.i = {};
            this.l = !1;
            b = this.j = new A;
            var c = new MediaSource;
            Ab(this.h, c, "sourceopen", b.resolve);
            this.f.src = window.URL.createObjectURL(c);
            this.g = c
          }

          function Xc() {
            var b = {};
            'video/mp4; codecs="avc1.42E01E",video/mp4; codecs="avc3.42E01E",video/mp4; codecs="hev1.1.6.L93.90",video/mp4; codecs="hvc1.1.6.L93.90",video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084",video/mp4; codecs="vp9",video/mp4; codecs="vp09.00.10.08",audio/mp4; codecs="mp4a.40.2",audio/mp4; codecs="ac-3",audio/mp4; codecs="ec-3",audio/mp4; codecs="opus",audio/mp4; codecs="flac",video/webm; codecs="vp8",video/webm; codecs="vp9",video/webm; codecs="vp09.00.10.08",audio/webm; codecs="vorbis",audio/webm; codecs="opus",video/mp2t; codecs="avc1.42E01E",video/mp2t; codecs="avc3.42E01E",video/mp2t; codecs="hvc1.1.6.L93.90",video/mp2t; codecs="mp4a.40.2",video/mp2t; codecs="ac-3",video/mp2t; codecs="ec-3",text/vtt,application/mp4; codecs="wvtt",application/ttml+xml,application/mp4; codecs="stpp"'.split(",").forEach(function (c) {
              b[c] = !!J[c] ||
                      MediaSource.isTypeSupported(c) || Rc(c);
              var d = c.split(";")[0];
              b[d] = b[d] || b[c]
            });
            return b
          }

          n = Wc.prototype;
          n.destroy = function () {
            this.m = !0;
            var b = [], c;
            for (c in this.c) {
              var d = this.c[c], e = d[0];
              this.c[c] = d.slice(0, 1);
              e && b.push(e.p["catch"](Db));
              for (e = 1; e < d.length; ++e) d[e].p["catch"](Db), d[e].p.reject()
            }
            this.a && b.push(this.a.destroy());
            for (var f in this.i) b.push(this.i[f].destroy());
            return Promise.all(b).then(function () {
              var b = this.h ? this.h.destroy() : null;
              this.f && (this.f.removeAttribute("src"), this.f.load());
              this.o = this.a = this.g = this.f = this.h = null;
              this.b = {};
              this.i = {};
              this.c = {};
              return b
            }.bind(this))
          };
          n.init = function (b, c) {
            var d = this;
            return this.j.then(function () {
              for (var e in b) {
                var f = b[e];
                f = Ib(f.mimeType, f.codecs);
                "text" == e ? Yc(d, f) : (!c && MediaSource.isTypeSupported(f) || !Rc(f, e) || (d.i[e] = new Qc, f = Sc(e, f)), f = d.g.addSourceBuffer(f), E(d.h, f, "error", d.Re.bind(d, e)), E(d.h, f, "updateend", d.Oa.bind(d, e)), d.b[e] = f, d.c[e] = [])
              }
            })
          };

          function Yc(b, c) {
            b.a || (b.a = new Uc(b.o));
            b.a.f = new J[c]
          }

          function Zc(b, c) {
            if ("text" == c) var d = b.a.a; else d = $c(b, c), d = !d || 1 == d.length && 1E-6 > d.end(0) - d.start(0) ? null : 1 == d.length && 0 > d.start(0) ? 0 : d.length ? d.start(0) : null;
            return d
          }

          function ad(b, c) {
            return "text" == c ? b.a.b : wc($c(b, c))
          }

          function bd(b, c, d) {
            if ("text" == c) return b = b.a, null == b.b || b.b < d ? 0 : b.b - Math.max(d, b.a);
            b = $c(b, c);
            return yc(b, d)
          }

          n.Hb = function () {
            var b = this.a && null != this.a.a ? [{start: this.a.a, end: this.a.b}] : [];
            return {total: zc(this.f.buffered), audio: zc($c(this, "audio")), video: zc($c(this, "video")), text: b}
          };

          function $c(b, c) {
            try {
              return b.b[c].buffered
            } catch (d) {
              return null
            }
          }

          function cd(b, c, d, e, f) {
            return "text" == c ? Vc(b.a, d, e, f) : b.i[c] ? Tc(b.i[c], d).then(function (b) {
              this.a || Yc(this, "text/vtt");
              this.l && this.a.lc(b.cues);
              return dd(this, c, this.Vc.bind(this, c, b.data.buffer))
            }.bind(b)) : dd(b, c, b.Vc.bind(b, c, d))
          }

          n.remove = function (b, c, d) {
            return "text" == b ? this.a.remove(c, d) : dd(this, b, this.Wc.bind(this, b, c, d))
          };

          function ed(b, c) {
            return "text" == c ? b.a ? b.a.remove(0, Infinity) : Promise.resolve() : dd(b, c, b.Wc.bind(b, c, 0, b.g.duration))
          }

          n.flush = function (b) {
            return "text" == b ? Promise.resolve() : dd(this, b, this.nd.bind(this, b))
          };

          function fd(b, c, d, e, f) {
            return "text" == c ? (b.a.i = d, b = b.a, b.h = e, b.g = f, Promise.resolve()) : Promise.all([dd(b, c, b.cd.bind(b, c)), dd(b, c, b.He.bind(b, c, d)), dd(b, c, b.Ee.bind(b, c, e, f))])
          }

          n.endOfStream = function (b) {
            return gd(this, function () {
              b ? this.g.endOfStream(b) : this.g.endOfStream()
            }.bind(this))
          };
          n.la = function (b) {
            return gd(this, function () {
              this.g.duration = b
            }.bind(this))
          };
          n.U = function () {
            return this.g.duration
          };
          n.Vc = function (b, c) {
            this.b[b].appendBuffer(c)
          };
          n.Wc = function (b, c, d) {
            d <= c ? this.Oa(b) : this.b[b].remove(c, d)
          };
          n.cd = function (b) {
            var c = this.b[b].appendWindowStart, d = this.b[b].appendWindowEnd;
            this.b[b].abort();
            this.b[b].appendWindowStart = c;
            this.b[b].appendWindowEnd = d;
            this.Oa(b)
          };
          n.nd = function (b) {
            this.f.currentTime -= .001;
            this.Oa(b)
          };
          n.He = function (b, c) {
            0 > c && (c += .001);
            this.b[b].timestampOffset = c;
            this.Oa(b)
          };
          n.Ee = function (b, c, d) {
            this.b[b].appendWindowStart = 0;
            this.b[b].appendWindowEnd = d;
            this.b[b].appendWindowStart = c;
            this.Oa(b)
          };
          n.Re = function (b) {
            this.c[b][0].p.reject(new B(2, 3, 3014, this.f.error ? this.f.error.code : 0))
          };
          n.Oa = function (b) {
            var c = this.c[b][0];
            c && (c.p.resolve(), hd(this, b))
          };

          function dd(b, c, d) {
            if (b.m) return Promise.reject();
            d = {start: d, p: new A};
            b.c[c].push(d);
            if (1 == b.c[c].length) try {
              d.start()
            } catch (e) {
              "QuotaExceededError" == e.name ? d.p.reject(new B(2, 3, 3017, c)) : d.p.reject(new B(2, 3, 3015, e)), hd(b, c)
            }
            return d.p
          }

          function gd(b, c) {
            if (b.m) return Promise.reject();
            var d = [], e;
            for (e in b.b) {
              var f = new A, g = {
                start: function (b) {
                  b.resolve()
                }.bind(null, f), p: f
              };
              b.c[e].push(g);
              d.push(f);
              1 == b.c[e].length && g.start()
            }
            return Promise.all(d).then(function () {
              try {
                c()
              } catch (l) {
                var b = Promise.reject(new B(2, 3, 3015, l))
              }
              for (var d in this.b) hd(this, d);
              return b
            }.bind(b), function () {
              return Promise.reject()
            }.bind(b))
          }

          function hd(b, c) {
            b.c[c].shift();
            var d = b.c[c][0];
            if (d) try {
              d.start()
            } catch (e) {
              d.p.reject(new B(2, 3, 3015, e)), hd(b, c)
            }
          };

          function id(b, c, d) {
            return d == c || b >= jd && d == c.split("-")[0] || b >= kd && d.split("-")[0] == c.split("-")[0] ? !0 : !1
          }

          var jd = 1, kd = 2;

          function ld(b) {
            b = b.toLowerCase().split("-");
            var c = md[b[0]];
            c && (b[0] = c);
            return b.join("-")
          }

          var md = {
            aar: "aa",
            abk: "ab",
            afr: "af",
            aka: "ak",
            alb: "sq",
            amh: "am",
            ara: "ar",
            arg: "an",
            arm: "hy",
            asm: "as",
            ava: "av",
            ave: "ae",
            aym: "ay",
            aze: "az",
            bak: "ba",
            bam: "bm",
            baq: "eu",
            bel: "be",
            ben: "bn",
            bih: "bh",
            bis: "bi",
            bod: "bo",
            bos: "bs",
            bre: "br",
            bul: "bg",
            bur: "my",
            cat: "ca",
            ces: "cs",
            cha: "ch",
            che: "ce",
            chi: "zh",
            chu: "cu",
            chv: "cv",
            cor: "kw",
            cos: "co",
            cre: "cr",
            cym: "cy",
            cze: "cs",
            dan: "da",
            deu: "de",
            div: "dv",
            dut: "nl",
            dzo: "dz",
            ell: "el",
            eng: "en",
            epo: "eo",
            est: "et",
            eus: "eu",
            ewe: "ee",
            fao: "fo",
            fas: "fa",
            fij: "fj",
            fin: "fi",
            fra: "fr",
            fre: "fr",
            fry: "fy",
            ful: "ff",
            geo: "ka",
            ger: "de",
            gla: "gd",
            gle: "ga",
            glg: "gl",
            glv: "gv",
            gre: "el",
            grn: "gn",
            guj: "gu",
            hat: "ht",
            hau: "ha",
            heb: "he",
            her: "hz",
            hin: "hi",
            hmo: "ho",
            hrv: "hr",
            hun: "hu",
            hye: "hy",
            ibo: "ig",
            ice: "is",
            ido: "io",
            iii: "ii",
            iku: "iu",
            ile: "ie",
            ina: "ia",
            ind: "id",
            ipk: "ik",
            isl: "is",
            ita: "it",
            jav: "jv",
            jpn: "ja",
            kal: "kl",
            kan: "kn",
            kas: "ks",
            kat: "ka",
            kau: "kr",
            kaz: "kk",
            khm: "km",
            kik: "ki",
            kin: "rw",
            kir: "ky",
            kom: "kv",
            kon: "kg",
            kor: "ko",
            kua: "kj",
            kur: "ku",
            lao: "lo",
            lat: "la",
            lav: "lv",
            lim: "li",
            lin: "ln",
            lit: "lt",
            ltz: "lb",
            lub: "lu",
            lug: "lg",
            mac: "mk",
            mah: "mh",
            mal: "ml",
            mao: "mi",
            mar: "mr",
            may: "ms",
            mkd: "mk",
            mlg: "mg",
            mlt: "mt",
            mon: "mn",
            mri: "mi",
            msa: "ms",
            mya: "my",
            nau: "na",
            nav: "nv",
            nbl: "nr",
            nde: "nd",
            ndo: "ng",
            nep: "ne",
            nld: "nl",
            nno: "nn",
            nob: "nb",
            nor: "no",
            nya: "ny",
            oci: "oc",
            oji: "oj",
            ori: "or",
            orm: "om",
            oss: "os",
            pan: "pa",
            per: "fa",
            pli: "pi",
            pol: "pl",
            por: "pt",
            pus: "ps",
            que: "qu",
            roh: "rm",
            ron: "ro",
            rum: "ro",
            run: "rn",
            rus: "ru",
            sag: "sg",
            san: "sa",
            sin: "si",
            slk: "sk",
            slo: "sk",
            slv: "sl",
            sme: "se",
            smo: "sm",
            sna: "sn",
            snd: "sd",
            som: "so",
            sot: "st",
            spa: "es",
            sqi: "sq",
            srd: "sc",
            srp: "sr",
            ssw: "ss",
            sun: "su",
            swa: "sw",
            swe: "sv",
            tah: "ty",
            tam: "ta",
            tat: "tt",
            tel: "te",
            tgk: "tg",
            tgl: "tl",
            tha: "th",
            tib: "bo",
            tir: "ti",
            ton: "to",
            tsn: "tn",
            tso: "ts",
            tuk: "tk",
            tur: "tr",
            twi: "tw",
            uig: "ug",
            ukr: "uk",
            urd: "ur",
            uzb: "uz",
            ven: "ve",
            vie: "vi",
            vol: "vo",
            wel: "cy",
            wln: "wa",
            wol: "wo",
            xho: "xh",
            yid: "yi",
            yor: "yo",
            zha: "za",
            zho: "zh",
            zul: "zu"
          };

          function nd(b, c, d) {
            var e = b.video;
            return e && (e.width < c.minWidth || e.width > c.maxWidth || e.width > d.width || e.height < c.minHeight || e.height > c.maxHeight || e.height > d.height || e.width * e.height < c.minPixels || e.width * e.height > c.maxPixels) || b.bandwidth < c.minBandwidth || b.bandwidth > c.maxBandwidth ? !1 : !0
          }

          function od(b, c, d) {
            var e = !1;
            b.variants.forEach(function (b) {
              var f = b.allowedByApplication;
              b.allowedByApplication = nd(b, c, d);
              f != b.allowedByApplication && (e = !0)
            });
            return e
          }

          function pd(b, c, d, e) {
            e.variants = e.variants.filter(function (e) {
              return b && b.G && !tc(b, e) ? !1 : qd(e.audio, b, c) && qd(e.video, b, d)
            });
            e.textStreams = e.textStreams.filter(function (b) {
              return !!J[Ib(b.mimeType, b.codecs)]
            })
          }

          function qd(b, c, d) {
            if (!b) return !0;
            var e = null;
            c && c.G && (e = c.v);
            c = Ib(b.mimeType, b.codecs);
            var f = Ib(b.mimeType, b.codecs), g = b.mimeType, h;
            for (h in Jb) {
              var k = b[h], l = Jb[h];
              k && (g += "; " + l + '="' + k + '"')
            }
            return !(J[f] || MediaSource.isTypeSupported(g) || Rc(f, b.type)) || e && b.encrypted && 0 > e.indexOf(c) || d && (b.mimeType != d.mimeType || b.codecs.split(".")[0] != d.codecs.split(".")[0]) ? !1 : !0
          }

          function rd(b) {
            var c = b.audio, d = b.video, e = c ? c.codecs : null, f = d ? d.codecs : null, g = [];
            f && g.push(f);
            e && g.push(e);
            var h = [];
            d && h.push(d.mimeType);
            c && h.push(c.mimeType);
            h = h[0] || null;
            var k = [];
            c && k.push(c.kind);
            d && k.push(d.kind);
            k = k[0] || null;
            var l = [];
            c && l.push.apply(l, c.roles);
            d && l.push.apply(l, d.roles);
            l = gb(l);
            b = {
              id: b.id,
              active: !1,
              type: "variant",
              bandwidth: b.bandwidth,
              language: b.language,
              label: null,
              kind: k,
              width: null,
              height: null,
              frameRate: null,
              mimeType: h,
              codecs: g.join(", "),
              audioCodec: e,
              videoCodec: f,
              primary: b.primary,
              roles: l,
              videoId: null,
              audioId: null,
              channelsCount: null,
              audioBandwidth: null,
              videoBandwidth: null
            };
            d && (b.videoId = d.id, b.width = d.width || null, b.height = d.height || null, b.frameRate = d.frameRate || null, b.videoBandwidth = d.bandwidth || null);
            c && (b.audioId = c.id, b.channelsCount = c.channelsCount, b.audioBandwidth = c.bandwidth || null, b.label = c.label);
            return b
          }

          function sd(b) {
            return {
              id: b.id,
              active: !1,
              type: "text",
              bandwidth: 0,
              language: b.language,
              label: b.label,
              kind: b.kind || null,
              width: null,
              height: null,
              frameRate: null,
              mimeType: b.mimeType,
              codecs: b.codecs || null,
              audioCodec: null,
              videoCodec: null,
              primary: b.primary,
              roles: b.roles,
              videoId: null,
              audioId: null,
              channelsCount: null,
              audioBandwidth: null,
              videoBandwidth: null
            }
          }

          function td(b) {
            var c = [], d = ud(b.variants);
            b = b.textStreams;
            d.forEach(function (b) {
              c.push(rd(b))
            });
            b.forEach(function (b) {
              c.push(sd(b))
            });
            return c
          }

          function vd(b, c, d) {
            return ud(b.variants).map(function (b) {
              var e = rd(b);
              b.video && b.audio ? e.active = d == b.video.id && c == b.audio.id : b.video ? e.active = d == b.video.id : b.audio && (e.active = c == b.audio.id);
              return e
            })
          }

          function wd(b, c) {
            return b.textStreams.map(function (b) {
              var d = sd(b);
              d.active = c == b.id;
              return d
            })
          }

          function xd(b, c) {
            for (var d = 0; d < b.variants.length; d++) if (b.variants[d].id == c.id) return b.variants[d];
            return null
          }

          function yd(b) {
            return b.allowedByApplication && b.allowedByKeySystem
          }

          function ud(b) {
            return b.filter(function (b) {
              return yd(b)
            })
          }

          function zd(b, c, d, e, f) {
            b = Ad(b, c, d, f);
            return Bd(b, e)
          }

          function Ad(b, c, d, e) {
            var f = ud(b), g = f;
            b = f.filter(function (b) {
              return b.primary
            });
            b.length && (g = b);
            var h = g.length ? g[0].language : "";
            g = g.filter(function (b) {
              return b.language == h
            });
            if (c) {
              var k = ld(c);
              [kd, jd, 0].forEach(function (b) {
                var c = !1;
                f.forEach(function (d) {
                  k = ld(k);
                  var f = ld(d.language);
                  id(b, k, f) && (c ? g.push(d) : (g = [d], c = !0), e && (e.audio = !0))
                })
              })
            }
            if (d && (c = Cd(g, d), c.length)) return c;
            c = g.map(function (b) {
              return (b.audio ? b.audio.roles : []).concat(b.video ? b.video.roles : [])
            }).reduce(Cb, []);
            return c.length ? Cd(g, c[0]) :
                    g
          }

          function Bd(b, c) {
            var d = b.filter(function (b) {
              return b.audio && b.audio.channelsCount
            }).reduce(function (b, c) {
              var d = c.audio.channelsCount;
              b[d] ? b[d].push(c) : b[d] = [c];
              return b
            }, {}), e = Object.keys(d);
            if (0 == e.length) return b;
            var f = e.filter(function (b) {
              return b <= c
            });
            return f.length ? d[Math.max.apply(null, f)] : d[Math.min.apply(null, e)]
          }

          function Dd(b, c, d, e) {
            var f = b, g = b.filter(function (b) {
              return b.primary
            });
            g.length && (f = g);
            var h = f.length ? f[0].language : "";
            f = f.filter(function (b) {
              return b.language == h
            });
            if (c) {
              var k = ld(c);
              [kd, jd, 0].forEach(function (c) {
                var d = !1;
                b.forEach(function (b) {
                  var g = ld(b.language);
                  id(c, k, g) && (d ? f.push(b) : (f = [b], d = !0), e && (e.text = !0))
                })
              })
            }
            if (d) {
              if (c = Ed(f, d), c.length) return c
            } else if (c = f.filter(function (b) {
              return 0 == b.roles.length
            }), c.length) return c;
            c = f.map(function (b) {
              return b.roles
            }).reduce(Cb, []);
            return c.length ?
                    Ed(f, c[0]) : f
          }

          function Cd(b, c) {
            return b.filter(function (b) {
              return b.audio && 0 <= b.audio.roles.indexOf(c) || b.video && 0 <= b.video.roles.indexOf(c)
            })
          }

          function Ed(b, c) {
            return b.filter(function (b) {
              return 0 <= b.roles.indexOf(c)
            })
          }

          function Fd(b, c, d) {
            for (var e = 0; e < d.length; e++) if (d[e].audio == b && d[e].video == c) return d[e];
            return null
          }

          function Gd(b, c, d) {
            function e(b, c) {
              return null == b ? null == c : c.id == b
            }

            for (var f = 0; f < d.length; f++) if (e(b, d[f].audio) && e(c, d[f].video)) return d[f];
            return null
          }

          function Hd(b, c) {
            for (var d = b.periods.length - 1; 0 < d; --d) if (c + Hb >= b.periods[d].startTime) return d;
            return 0
          }

          function Id(b, c) {
            for (var d = 0; d < b.periods.length; ++d) {
              var e = b.periods[d];
              if ("text" == c.type) for (var f = 0; f < e.textStreams.length; ++f) {
                if (e.textStreams[f] == c) return d
              } else for (f = 0; f < e.variants.length; ++f) {
                var g = e.variants[f];
                if (g.audio == c || g.video == c || g.video && g.video.trickModeVideo == c) return d
              }
            }
            return -1
          };

          function K() {
            this.h = null;
            this.f = !1;
            this.b = new Fa;
            this.c = [];
            this.i = !1;
            this.a = this.g = null
          }

          z("shaka.abr.SimpleAbrManager", K);
          K.prototype.stop = function () {
            this.h = null;
            this.f = !1;
            this.c = [];
            this.g = null
          };
          K.prototype.stop = K.prototype.stop;
          K.prototype.init = function (b) {
            this.h = b
          };
          K.prototype.init = K.prototype.init;
          K.prototype.chooseVariant = function () {
            var b = Jd(this.a.restrictions, this.c), c = this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);
            this.c.length && !b.length && (b = Jd(null, this.c), b = [b[0]]);
            for (var d = b[0] || null, e = 0; e < b.length; ++e) {
              var f = b[e], g = (b[e + 1] || {bandwidth: Infinity}).bandwidth / this.a.bandwidthUpgradeTarget;
              c >= f.bandwidth / this.a.bandwidthDowngradeTarget && c <= g && (d = f)
            }
            this.g = Date.now();
            return d
          };
          K.prototype.chooseVariant = K.prototype.chooseVariant;
          K.prototype.enable = function () {
            this.f = !0
          };
          K.prototype.enable = K.prototype.enable;
          K.prototype.disable = function () {
            this.f = !1
          };
          K.prototype.disable = K.prototype.disable;
          K.prototype.segmentDownloaded = function (b, c) {
            var d = this.b;
            if (!(16E3 > c)) {
              var e = 8E3 * c / b, f = b / 1E3;
              d.a += c;
              Da(d.b, f, e);
              Da(d.c, f, e)
            }
            if (null != this.g && this.f) a:{
              if (!this.i) {
                if (!(128E3 <= this.b.a)) break a;
                this.i = !0
              } else if (Date.now() - this.g < 1E3 * this.a.switchInterval) break a;
              d = this.chooseVariant();
              this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate);
              this.h(d)
            }
          };
          K.prototype.segmentDownloaded = K.prototype.segmentDownloaded;
          K.prototype.getBandwidthEstimate = function () {
            return this.b.getBandwidthEstimate(this.a.defaultBandwidthEstimate)
          };
          K.prototype.getBandwidthEstimate = K.prototype.getBandwidthEstimate;
          K.prototype.setVariants = function (b) {
            this.c = b
          };
          K.prototype.setVariants = K.prototype.setVariants;
          K.prototype.configure = function (b) {
            this.a = b
          };
          K.prototype.configure = K.prototype.configure;

          function Jd(b, c) {
            b && (c = c.filter(function (c) {
              return nd(c, b, {width: Infinity, height: Infinity})
            }));
            return c.sort(function (b, c) {
              return b.bandwidth - c.bandwidth
            })
          };var Kd = "ended play playing pause pausing ratechange seeked seeking timeupdate volumechange".split(" "),
                  Ld = "buffered currentTime duration ended loop muted paused playbackRate seeking videoHeight videoWidth volume".split(" "),
                  Md = ["loop", "playbackRate"], Nd = ["pause", "play"],
                  Od = "adaptation buffering emsg error loading streaming texttrackvisibility timelineregionadded timelineregionenter timelineregionexit trackschanged unloading".split(" "),
                  Pd = {
                    getAudioLanguages: 2,
                    getAudioLanguagesAndRoles: 2,
                    getBufferedInfo: 2,
                    getConfiguration: 2,
                    getExpiration: 2,
                    getManifestUri: 2,
                    getPlaybackRate: 2,
                    getTextLanguages: 2,
                    getTextLanguagesAndRoles: 2,
                    getTextTracks: 2,
                    getStats: 5,
                    usingEmbeddedTextTrack: 2,
                    getVariantTracks: 2,
                    isAudioOnly: 10,
                    isBuffering: 1,
                    isInProgress: 1,
                    isLive: 10,
                    isTextTrackVisible: 1,
                    keySystem: 10,
                    seekRange: 1
                  }, Qd = {getPlayheadTimeAsDate: 1, getPresentationStartTimeAsDate: 20},
                  Ud = [["getConfiguration", "configure"]], Vd = [["isTextTrackVisible", "setTextTrackVisibility"]],
                  Wd = "addTextTrack cancelTrickPlay configure resetConfiguration retryStreaming selectAudioLanguage selectEmbeddedTextTrack selectTextLanguage selectTextTrack selectVariantTrack setTextTrackVisibility trickPlay".split(" "),
                  Xd = ["attach", "detach", "load", "unload"];

          function Yd(b) {
            return JSON.stringify(b, function (b, d) {
              if ("function" != typeof d) {
                if (d instanceof Event || d instanceof F) {
                  var c = {}, f;
                  for (f in d) {
                    var g = d[f];
                    g && "object" == typeof g ? "detail" == f && (c[f] = g) : f in Event || (c[f] = g)
                  }
                  return c
                }
                if (d instanceof TimeRanges) for (c = {
                  __type__: "TimeRanges",
                  length: d.length,
                  start: [],
                  end: []
                }, f = 0; f < d.length; ++f) c.start.push(d.start(f)), c.end.push(d.end(f)); else c = d instanceof Uint8Array ? {
                  __type__: "Uint8Array",
                  entries: Array.from(d)
                } : "number" == typeof d ? isNaN(d) ? "NaN" : isFinite(d) ?
                        d : 0 > d ? "-Infinity" : "Infinity" : d;
                return c
              }
            })
          }

          function Zd(b) {
            return JSON.parse(b, function (b, d) {
              return "NaN" == d ? NaN : "-Infinity" == d ? -Infinity : "Infinity" == d ? Infinity : d && "object" == typeof d && "TimeRanges" == d.__type__ ? $d(d) : d && "object" == typeof d && "Uint8Array" == d.__type__ ? new Uint8Array(d.entries) : d
            })
          }

          function $d(b) {
            return {
              length: b.length, start: function (c) {
                return b.start[c]
              }, end: function (c) {
                return b.end[c]
              }
            }
          };

          function ae(b, c, d, e, f, g) {
            this.K = b;
            this.g = c;
            this.M = d;
            this.j = !1;
            this.A = e;
            this.G = f;
            this.s = g;
            this.b = this.h = !1;
            this.v = "";
            this.i = null;
            this.l = this.Cc.bind(this);
            this.m = this.Qd.bind(this);
            this.a = {video: {}, player: {}};
            this.o = 0;
            this.c = {};
            this.f = null
          }

          var be = !1, ce = null;
          n = ae.prototype;
          n.destroy = function () {
            de(this);
            ce && ee(this);
            this.G = this.A = this.g = null;
            this.b = this.h = !1;
            this.m = this.l = this.f = this.c = this.a = this.i = null;
            return Promise.resolve()
          };
          n.Z = function () {
            return this.b
          };
          n.Zb = function () {
            return this.v
          };
          n.init = function () {
            if (window.chrome && chrome.cast && chrome.cast.isAvailable) {
              delete window.__onGCastApiAvailable;
              this.h = !0;
              this.g();
              var b = new chrome.cast.SessionRequest(this.K);
              b = new chrome.cast.ApiConfig(b, this.Dc.bind(this), this.Xd.bind(this), "origin_scoped");
              chrome.cast.initialize(b, function () {
              }, function () {
              });
              be && setTimeout(this.g.bind(this), 20);
              (b = ce) && b.status != chrome.cast.SessionStatus.STOPPED ? this.Dc(b) : ce = null
            } else window.__onGCastApiAvailable = function (b) {
              b && this.init()
            }.bind(this)
          };
          n.bc = function (b) {
            this.i = b;
            this.b && fe({type: "appData", appData: this.i})
          };
          n.cast = function (b) {
            if (!this.h) return Promise.reject(new B(1, 8, 8E3));
            if (!be) return Promise.reject(new B(1, 8, 8001));
            if (this.b) return Promise.reject(new B(1, 8, 8002));
            this.f = new A;
            chrome.cast.requestSession(this.Wb.bind(this, b), this.Bc.bind(this));
            return this.f
          };
          n.ub = function () {
            this.b && (de(this), ce && (ee(this), ce.stop(function () {
            }, function () {
            }), ce = null))
          };
          n.get = function (b, c) {
            if ("video" == b) {
              if (0 <= Nd.indexOf(c)) return this.Mc.bind(this, b, c)
            } else if ("player" == b) {
              if (Qd[c] && !this.get("player", "isLive")()) return function () {
              };
              if (0 <= Wd.indexOf(c)) return this.Mc.bind(this, b, c);
              if (0 <= Xd.indexOf(c)) return this.te.bind(this, b, c);
              if (Pd[c]) return this.Jc.bind(this, b, c)
            }
            return this.Jc(b, c)
          };
          n.set = function (b, c, d) {
            this.a[b][c] = d;
            fe({type: "set", targetName: b, property: c, value: d})
          };
          n.Wb = function (b, c) {
            ce = c;
            c.addUpdateListener(this.l);
            c.addMessageListener("urn:x-cast:com.google.shaka.v2", this.m);
            this.Cc();
            fe({type: "init", initState: b, appData: this.i});
            this.f.resolve()
          };
          n.Bc = function (b) {
            var c = 8003;
            switch (b.code) {
              case "cancel":
                c = 8004;
                break;
              case "timeout":
                c = 8005;
                break;
              case "receiver_unavailable":
                c = 8006
            }
            this.f.reject(new B(2, 8, c, b))
          };
          n.Jc = function (b, c) {
            return this.a[b][c]
          };
          n.Mc = function (b, c) {
            fe({type: "call", targetName: b, methodName: c, args: Array.prototype.slice.call(arguments, 2)})
          };
          n.te = function (b, c) {
            var d = Array.prototype.slice.call(arguments, 2), e = new A, f = this.o.toString();
            this.o++;
            this.c[f] = e;
            fe({type: "asyncCall", targetName: b, methodName: c, args: d, id: f});
            return e
          };
          n.Dc = function (b) {
            var c = this.s();
            this.f = new A;
            this.j = !0;
            this.Wb(c, b)
          };
          n.Xd = function (b) {
            be = "available" == b;
            this.g()
          };

          function ee(b) {
            var c = ce;
            c.removeUpdateListener(b.l);
            c.removeMessageListener("urn:x-cast:com.google.shaka.v2", b.m)
          }

          n.Cc = function () {
            var b = ce ? "connected" == ce.status : !1;
            if (this.b && !b) {
              this.G();
              for (var c in this.a) this.a[c] = {};
              de(this)
            }
            this.v = (this.b = b) ? ce.receiver.friendlyName : "";
            this.g()
          };

          function de(b) {
            for (var c in b.c) {
              var d = b.c[c];
              delete b.c[c];
              d.reject(new B(1, 7, 7E3))
            }
          }

          n.Qd = function (b, c) {
            var d = Zd(c);
            switch (d.type) {
              case "event":
                var e = d.event;
                this.A(d.targetName, new F(e.type, e));
                break;
              case "update":
                e = d.update;
                for (var f in e) {
                  d = this.a[f] || {};
                  for (var g in e[f]) d[g] = e[f][g]
                }
                this.j && (this.M(), this.j = !1);
                break;
              case "asyncComplete":
                if (f = d.id, d = d.error, g = this.c[f], delete this.c[f], g) if (d) {
                  f = new B(d.severity, d.category, d.code);
                  for (e in d) f[e] = d[e];
                  g.reject(f)
                } else g.resolve()
            }
          };

          function fe(b) {
            b = Yd(b);
            ce.sendMessage("urn:x-cast:com.google.shaka.v2", b, function () {
            }, Ha)
          };

          function L() {
            this.Cb = new wb;
            this.jb = this
          }

          L.prototype.addEventListener = function (b, c) {
            this.Cb.push(b, c)
          };
          L.prototype.removeEventListener = function (b, c) {
            this.Cb.remove(b, c)
          };
          L.prototype.dispatchEvent = function (b) {
            for (var c = this.Cb.get(b.type) || [], d = 0; d < c.length; ++d) {
              b.target = this.jb;
              b.currentTarget = this.jb;
              var e = c[d];
              try {
                e.handleEvent ? e.handleEvent(b) : e.call(this, b)
              } catch (f) {
              }
              if (b.a) break
            }
            return b.defaultPrevented
          };

          function M(b, c, d) {
            L.call(this);
            this.c = b;
            this.b = c;
            this.i = this.g = this.f = this.j = this.h = null;
            this.a = new ae(d, this.Me.bind(this), this.Ne.bind(this), this.Oe.bind(this), this.Pe.bind(this), this.tc.bind(this));
            ge(this)
          }

          Ba(M, L);
          z("shaka.cast.CastProxy", M);
          M.prototype.destroy = function (b) {
            b && this.a && this.a.ub();
            b = [this.i ? this.i.destroy() : null, this.b ? this.b.destroy() : null, this.a ? this.a.destroy() : null];
            this.a = this.i = this.j = this.h = this.b = this.c = null;
            return Promise.all(b)
          };
          M.prototype.destroy = M.prototype.destroy;
          M.prototype.Cd = function () {
            return this.h
          };
          M.prototype.getVideo = M.prototype.Cd;
          M.prototype.ud = function () {
            return this.j
          };
          M.prototype.getPlayer = M.prototype.ud;
          M.prototype.fd = function () {
            return this.a ? this.a.h && be : !1
          };
          M.prototype.canCast = M.prototype.fd;
          M.prototype.Z = function () {
            return this.a ? this.a.Z() : !1
          };
          M.prototype.isCasting = M.prototype.Z;
          M.prototype.Zb = function () {
            return this.a ? this.a.Zb() : ""
          };
          M.prototype.receiverName = M.prototype.Zb;
          M.prototype.cast = function () {
            var b = this.tc();
            return this.a.cast(b).then(function () {
              if (this.b) return this.b.hb()
            }.bind(this))
          };
          M.prototype.cast = M.prototype.cast;
          M.prototype.bc = function (b) {
            this.a.bc(b)
          };
          M.prototype.setAppData = M.prototype.bc;
          M.prototype.Te = function () {
            var b = this.a;
            if (b.b) {
              var c = b.s();
              chrome.cast.requestSession(b.Wb.bind(b, c), b.Bc.bind(b))
            }
          };
          M.prototype.suggestDisconnect = M.prototype.Te;
          M.prototype.ub = function () {
            this.a.ub()
          };
          M.prototype.forceDisconnect = M.prototype.ub;

          function ge(b) {
            b.a.init();
            b.i = new xb;
            Kd.forEach(function (b) {
              E(this.i, this.c, b, this.af.bind(this))
            }.bind(b));
            Od.forEach(function (b) {
              E(this.i, this.b, b, this.me.bind(this))
            }.bind(b));
            b.h = {};
            for (var c in b.c) Object.defineProperty(b.h, c, {
              configurable: !1,
              enumerable: !0,
              get: b.$e.bind(b, c),
              set: b.bf.bind(b, c)
            });
            b.j = {};
            for (var d in b.b) Object.defineProperty(b.j, d, {configurable: !1, enumerable: !0, get: b.le.bind(b, d)});
            b.f = new L;
            b.f.jb = b.h;
            b.g = new L;
            b.g.jb = b.j
          }

          n = M.prototype;
          n.tc = function () {
            var b = {video: {}, player: {}, playerAfterLoad: {}, manifest: this.b.Jb(), startTime: null};
            this.c.pause();
            Md.forEach(function (c) {
              b.video[c] = this.c[c]
            }.bind(this));
            this.c.ended || (b.startTime = this.c.currentTime);
            Ud.forEach(function (c) {
              var d = c[1];
              c = this.b[c[0]]();
              b.player[d] = c
            }.bind(this));
            Vd.forEach(function (c) {
              var d = c[1];
              c = this.b[c[0]]();
              b.playerAfterLoad[d] = c
            }.bind(this));
            return b
          };
          n.Me = function () {
            this.dispatchEvent(new F("caststatuschanged"))
          };
          n.Ne = function () {
            this.f.dispatchEvent(new F(this.h.paused ? "pause" : "play"))
          };
          n.Pe = function () {
            var b = this;
            Ud.forEach(function (b) {
              var c = b[1];
              b = this.a.get("player", b[0])();
              this.b[c](b)
            }.bind(this));
            var c = this.a.get("player", "getManifestUri")(), d = this.a.get("video", "ended"), e = Promise.resolve(),
                    f = this.c.autoplay, g = null;
            d || (g = this.a.get("video", "currentTime"));
            c && (this.c.autoplay = !1, e = this.b.load(c, g));
            var h = {};
            Md.forEach(function (b) {
              h[b] = this.a.get("video", b)
            }.bind(this));
            e.then(function () {
              b.c && (Md.forEach(function (b) {
                this.c[b] = h[b]
              }.bind(b)), Vd.forEach(function (b) {
                var c = b[1];
                b =
                        this.a.get("player", b[0])();
                this.b[c](b)
              }.bind(b)), b.c.autoplay = f, c && b.c.play())
            }, function (c) {
              b.b.dispatchEvent(new F("error", {detail: c}))
            })
          };
          n.$e = function (b) {
            if ("addEventListener" == b) return this.f.addEventListener.bind(this.f);
            if ("removeEventListener" == b) return this.f.removeEventListener.bind(this.f);
            if (this.a.Z() && 0 == Object.keys(this.a.a.video).length) {
              var c = this.c[b];
              if ("function" != typeof c) return c
            }
            return this.a.Z() ? this.a.get("video", b) : (b = this.c[b], "function" == typeof b && (b = b.bind(this.c)), b)
          };
          n.bf = function (b, c) {
            this.a.Z() ? this.a.set("video", b, c) : this.c[b] = c
          };
          n.af = function (b) {
            this.a.Z() || this.f.dispatchEvent(new F(b.type, b))
          };
          n.le = function (b) {
            if ("addEventListener" == b) return this.g.addEventListener.bind(this.g);
            if ("removeEventListener" == b) return this.g.removeEventListener.bind(this.g);
            if ("getMediaElement" == b) return function () {
              return this.h
            }.bind(this);
            if ("getNetworkingEngine" == b) return this.b.uc.bind(this.b);
            if (this.a.Z()) {
              if ("getManifest" == b || "drmInfo" == b) return function () {
                Ga(b + "() does not work while casting!");
                return null
              };
              if ("attach" == b || "detach" == b) return function () {
                Ga(b + "() does not work while casting!");
                return Promise.resolve()
              }
            }
            return this.a.Z() &&
            0 == Object.keys(this.a.a.video).length && Pd[b] || !this.a.Z() ? this.b[b].bind(this.b) : this.a.get("player", b)
          };
          n.me = function (b) {
            this.a.Z() || this.g.dispatchEvent(b)
          };
          n.Oe = function (b, c) {
            this.a.Z() && ("video" == b ? this.f.dispatchEvent(c) : "player" == b && this.g.dispatchEvent(c))
          };

          function he(b, c, d, e) {
            L.call(this);
            this.a = b;
            this.b = c;
            this.c = new xb;
            this.s = {video: b, player: c};
            this.v = d || function () {
            };
            this.A = e || function (b) {
              return b
            };
            this.o = !1;
            this.h = !0;
            this.g = 0;
            this.m = !1;
            this.j = !0;
            this.l = this.i = this.f = null;
            ie(this)
          }

          Ba(he, L);
          z("shaka.cast.CastReceiver", he);
          he.prototype.isConnected = function () {
            return this.o
          };
          he.prototype.isConnected = he.prototype.isConnected;
          he.prototype.Fd = function () {
            return this.h
          };
          he.prototype.isIdle = he.prototype.Fd;
          he.prototype.destroy = function () {
            var b = [this.c ? this.c.destroy() : null, this.b ? this.b.destroy() : null];
            null != this.l && window.clearTimeout(this.l);
            this.v = this.s = this.c = this.b = this.a = null;
            this.o = !1;
            this.h = !0;
            this.l = this.i = this.f = null;
            return Promise.all(b).then(function () {
              cast.receiver.CastReceiverManager.getInstance().stop()
            })
          };
          he.prototype.destroy = he.prototype.destroy;

          function ie(b) {
            var c = cast.receiver.CastReceiverManager.getInstance();
            c.onSenderConnected = b.Hc.bind(b);
            c.onSenderDisconnected = b.Hc.bind(b);
            c.onSystemVolumeChanged = b.md.bind(b);
            b.i = c.getCastMessageBus("urn:x-cast:com.google.cast.media");
            b.i.onMessage = b.Ld.bind(b);
            b.f = c.getCastMessageBus("urn:x-cast:com.google.shaka.v2");
            b.f.onMessage = b.$d.bind(b);
            c.start();
            Kd.forEach(function (b) {
              E(this.c, this.a, b, this.Kc.bind(this, "video"))
            }.bind(b));
            Od.forEach(function (b) {
              E(this.c, this.b, b, this.Kc.bind(this, "player"))
            }.bind(b));
            cast.__platform__ && cast.__platform__.canDisplayType('video/mp4; codecs="avc1.640028"; width=3840; height=2160') ? b.b.cc(3840, 2160) : b.b.cc(1920, 1080);
            E(b.c, b.a, "loadeddata", function () {
              this.m = !0
            }.bind(b));
            E(b.c, b.b, "loading", function () {
              this.h = !1;
              je(this)
            }.bind(b));
            E(b.c, b.a, "playing", function () {
              this.h = !1;
              je(this)
            }.bind(b));
            E(b.c, b.a, "pause", function () {
              je(this)
            }.bind(b));
            E(b.c, b.b, "unloading", function () {
              this.h = !0;
              je(this)
            }.bind(b));
            E(b.c, b.a, "ended", function () {
              window.setTimeout(function () {
                this.a && this.a.ended &&
                (this.h = !0, je(this))
              }.bind(this), 5E3)
            }.bind(b))
          }

          n = he.prototype;
          n.Hc = function () {
            this.g = 0;
            this.j = !0;
            this.o = 0 != cast.receiver.CastReceiverManager.getInstance().getSenders().length;
            je(this)
          };

          function je(b) {
            Promise.resolve().then(function () {
              this.b && (this.dispatchEvent(new F("caststatuschanged")), ke(this) || le(this, 0))
            }.bind(b))
          }

          function me(b, c, d) {
            for (var e in c.player) b.b[e](c.player[e]);
            b.v(d);
            d = Promise.resolve();
            var f = b.a.autoplay;
            c.manifest && (b.a.autoplay = !1, d = b.b.load(c.manifest, c.startTime));
            d.then(function () {
              if (b.b) {
                for (var d in c.video) b.a[d] = c.video[d];
                for (var e in c.playerAfterLoad) b.b[e](c.playerAfterLoad[e]);
                b.a.autoplay = f;
                c.manifest && (b.a.play(), le(b, 0))
              }
            }, function (c) {
              b.b.dispatchEvent(new F("error", {detail: c}))
            })
          }

          n.Kc = function (b, c) {
            this.b && (this.Xb(), ne(this, {type: "event", targetName: b, event: c}, this.f))
          };
          n.Xb = function () {
            null != this.l && window.clearTimeout(this.l);
            this.l = window.setTimeout(this.Xb.bind(this), 500);
            var b = {video: {}, player: {}};
            Ld.forEach(function (c) {
              b.video[c] = this.a[c]
            }.bind(this));
            if (this.b.R()) for (var c in Qd) 0 == this.g % Qd[c] && (b.player[c] = this.b[c]());
            for (var d in Pd) 0 == this.g % Pd[d] && (b.player[d] = this.b[d]());
            if (c = cast.receiver.CastReceiverManager.getInstance().getSystemVolume()) b.video.volume = c.level, b.video.muted = c.muted;
            this.m && (this.g += 1);
            ne(this, {type: "update", update: b}, this.f);
            ke(this)
          };

          function ke(b) {
            return b.j && (b.a.duration || b.b.R()) ? (oe(b), b.j = !1, !0) : !1
          }

          function oe(b) {
            var c = {
              contentId: b.b.Jb(),
              streamType: b.b.R() ? "LIVE" : "BUFFERED",
              duration: b.a.duration,
              contentType: ""
            };
            le(b, 0, c)
          }

          n.md = function () {
            var b = cast.receiver.CastReceiverManager.getInstance().getSystemVolume();
            b && ne(this, {type: "update", update: {video: {volume: b.level, muted: b.muted}}}, this.f);
            ne(this, {type: "event", targetName: "video", event: {type: "volumechange"}}, this.f)
          };
          n.$d = function (b) {
            var c = Zd(b.data);
            switch (c.type) {
              case "init":
                this.g = 0;
                this.m = !1;
                this.j = !0;
                me(this, c.initState, c.appData);
                this.Xb();
                break;
              case "appData":
                this.v(c.appData);
                break;
              case "set":
                var d = c.targetName, e = c.property;
                c = c.value;
                if ("video" == d) {
                  var f = cast.receiver.CastReceiverManager.getInstance();
                  if ("volume" == e) {
                    f.setSystemVolumeLevel(c);
                    break
                  } else if ("muted" == e) {
                    f.setSystemVolumeMuted(c);
                    break
                  }
                }
                this.s[d][e] = c;
                break;
              case "call":
                d = this.s[c.targetName];
                d[c.methodName].apply(d, c.args);
                break;
              case "asyncCall":
                d =
                        c.targetName;
                e = c.methodName;
                "player" == d && "load" == e && (this.g = 0, this.m = !1);
                f = c.id;
                b = b.senderId;
                var g = this.s[d];
                c = g[e].apply(g, c.args);
                "player" == d && "load" == e && (c = c.then(function () {
                  this.j = !0
                }.bind(this)));
                c.then(this.Qc.bind(this, b, f, null), this.Qc.bind(this, b, f))
            }
          };
          n.Ld = function (b) {
            var c = Zd(b.data);
            switch (c.type) {
              case "PLAY":
                this.a.play();
                le(this, 0);
                break;
              case "PAUSE":
                this.a.pause();
                le(this, 0);
                break;
              case "SEEK":
                b = c.currentTime;
                var d = c.resumeState;
                null != b && (this.a.currentTime = Number(b));
                d && "PLAYBACK_START" == d ? (this.a.play(), le(this, 0)) : d && "PLAYBACK_PAUSE" == d && (this.a.pause(), le(this, 0));
                break;
              case "STOP":
                this.b.hb().then(function () {
                  this.b && le(this, 0)
                }.bind(this));
                break;
              case "GET_STATUS":
                le(this, Number(c.requestId));
                break;
              case "VOLUME":
                d = c.volume;
                b = d.level;
                d =
                        d.muted;
                var e = this.a.volume, f = this.a.muted;
                null != b && (this.a.volume = Number(b));
                null != d && (this.a.muted = d);
                e == this.a.volume && f == this.a.muted || le(this, 0);
                break;
              case "LOAD":
                this.g = 0;
                this.j = this.m = !1;
                b = c.currentTime;
                d = this.A(c.media.contentId);
                this.a.autoplay = !0;
                this.b.load(d, b).then(function () {
                  this.b && oe(this)
                }.bind(this))["catch"](function (b) {
                  var d = "LOAD_FAILED";
                  7 == b.category && 7E3 == b.code && (d = "LOAD_CANCELLED");
                  ne(this, {requestId: Number(c.requestId), type: d}, this.i)
                }.bind(this));
                break;
              default:
                ne(this, {
                  requestId: Number(c.requestId),
                  type: "INVALID_REQUEST", reason: "INVALID_COMMAND"
                }, this.i)
            }
          };
          n.Qc = function (b, c, d) {
            this.b && ne(this, {type: "asyncComplete", id: c, error: d}, this.f, b)
          };

          function ne(b, c, d, e) {
            b.o && (b = Yd(c), e ? d.getCastChannel(e).send(b) : d.broadcast(b))
          }

          function le(b, c, d) {
            var e = b.a.playbackRate;
            var f = pe;
            f = b.h ? f.IDLE : b.b.xc() ? f.Yc : b.a.paused ? f.$c : f.ad;
            e = {
              mediaSessionId: 0,
              playbackRate: e,
              playerState: f,
              currentTime: b.a.currentTime,
              supportedMediaCommands: 15,
              volume: {level: b.a.volume, muted: b.a.muted}
            };
            d && (e.media = d);
            ne(b, {requestId: c, type: "MEDIA_STATUS", status: [e]}, b.i)
          }

          var pe = {IDLE: "IDLE", ad: "PLAYING", Yc: "BUFFERING", $c: "PAUSED"};

          function qe(b, c) {
            var d = N(b, c);
            return 1 != d.length ? null : d[0]
          }

          function N(b, c) {
            return Array.prototype.filter.call(b.childNodes, function (b) {
              return b instanceof Element && b.tagName == c
            })
          }

          function re(b) {
            return Array.prototype.filter.call(b.childNodes, function (b) {
              return b instanceof Element && "pssh" == b.localName && "urn:mpeg:cenc:2013" == b.namespaceURI
            })
          }

          function se(b, c, d) {
            return b.hasAttributeNS(c, d) ? b.getAttributeNS(c, d) : null
          }

          function te(b) {
            return Array.prototype.every.call(b.childNodes, function (b) {
              return b.nodeType == Node.TEXT_NODE || b.nodeType == Node.CDATA_SECTION_NODE
            }) ? b.textContent.trim() : null
          }

          function O(b, c, d, e) {
            var f = null;
            b = b.getAttribute(c);
            null != b && (f = d(b));
            return null == f ? void 0 != e ? e : null : f
          }

          function ue(b) {
            if (!b) return null;
            /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(b) && (b += "Z");
            b = Date.parse(b);
            return isNaN(b) ? null : Math.floor(b / 1E3)
          }

          function ve(b) {
            if (!b) return null;
            b = /^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(b);
            if (!b) return null;
            b = 31536E3 * Number(b[1] || null) + 2592E3 * Number(b[2] || null) + 86400 * Number(b[3] || null) + 3600 * Number(b[4] || null) + 60 * Number(b[5] || null) + Number(b[6] || null);
            return isFinite(b) ? b : null
          }

          function we(b) {
            var c = /([0-9]+)-([0-9]+)/.exec(b);
            if (!c) return null;
            b = Number(c[1]);
            if (!isFinite(b)) return null;
            c = Number(c[2]);
            return isFinite(c) ? {start: b, end: c} : null
          }

          function xe(b) {
            b = Number(b);
            return 0 === b % 1 ? b : null
          }

          function ye(b) {
            b = Number(b);
            return 0 === b % 1 && 0 < b ? b : null
          }

          function ze(b) {
            b = Number(b);
            return 0 === b % 1 && 0 <= b ? b : null
          }

          function Ae(b) {
            var c;
            b = (c = b.match(/^(\d+)\/(\d+)$/)) ? Number(c[1] / c[2]) : Number(b);
            return isNaN(b) ? null : b
          };var Be = {
            "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
            "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
            "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
          };

          function Ce(b, c, d) {
            b = De(b);
            var e = null, f = [], g = [], h = b.map(function (b) {
              return b.keyId
            }).filter(Eb);
            if (h.length && 1 < h.filter(Fb).length) throw new B(2, 4, 4010);
            d || (g = b.filter(function (b) {
              return "urn:mpeg:dash:mp4protection:2011" == b.Pc ? (e = b.init || e, !1) : !0
            }), g.length && (f = Ee(e, c, g), 0 == f.length && (f = [Gb("", e)])));
            !b.length || !d && g.length || (f = H.values(Be).filter(function (b) {
              return "org.w3.clearkey" != b
            }).map(function (b) {
              return Gb(b, e)
            }));
            var k = h[0] || null;
            k && f.forEach(function (b) {
              b.initData.forEach(function (b) {
                b.keyId =
                        k
              })
            });
            return {nc: k, hf: e, drmInfos: f, sc: !0}
          }

          function Fe(b, c, d, e) {
            var f = Ce(b, c, e);
            if (d.sc) {
              b = 1 == d.drmInfos.length && !d.drmInfos[0].keySystem;
              c = 0 == f.drmInfos.length;
              if (0 == d.drmInfos.length || b && !c) d.drmInfos = f.drmInfos;
              d.sc = !1
            } else if (0 < f.drmInfos.length && (d.drmInfos = d.drmInfos.filter(function (b) {
              return f.drmInfos.some(function (c) {
                return c.keySystem == b.keySystem
              })
            }), 0 == d.drmInfos.length)) throw new B(2, 4, 4008);
            return f.nc || d.nc
          }

          function Ee(b, c, d) {
            return d.map(function (d) {
              var e = Be[d.Pc];
              return e ? [Gb(e, d.init || b)] : c(d.node) || []
            }).reduce(Cb, [])
          }

          function De(b) {
            return b.map(function (b) {
              var c = b.getAttribute("schemeIdUri"), e = se(b, "urn:mpeg:cenc:2013", "default_KID"),
                      f = re(b).map(te);
              if (!c) return null;
              c = c.toLowerCase();
              if (e && (e = e.replace(/-/g, "").toLowerCase(), 0 <= e.indexOf(" "))) throw new B(2, 4, 4009);
              var g = [];
              try {
                g = f.map(function (b) {
                  return {initDataType: "cenc", initData: Vb(b), keyId: null}
                })
              } catch (h) {
                throw new B(2, 4, 4007);
              }
              return {node: b, Pc: c, keyId: e, init: 0 < g.length ? g : null}
            }).filter(Eb)
          };

          function Ge(b, c, d, e, f) {
            var g = {RepresentationID: c, Number: d, Bandwidth: e, Time: f};
            return b.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g, function (b, c, d, e) {
              if ("$$" == b) return "$";
              var f = g[c];
              if (null == f) return b;
              "RepresentationID" == c && d && (d = void 0);
              "Time" == c && (f = Math.round(f));
              switch (e) {
                case void 0:
                case "d":
                case "i":
                case "u":
                  b = f.toString();
                  break;
                case "o":
                  b = f.toString(8);
                  break;
                case "x":
                  b = f.toString(16);
                  break;
                case "X":
                  b = f.toString(16).toUpperCase();
                  break;
                default:
                  b = f.toString()
              }
              d =
                      window.parseInt(d, 10) || 1;
              return Array(Math.max(0, d - b.length) + 1).join("0") + b
            })
          }

          function He(b, c) {
            var d = Ie(b, c, "timescale"), e = 1;
            d && (e = ye(d) || 1);
            d = Ie(b, c, "duration");
            (d = ye(d || "")) && (d /= e);
            var f = Ie(b, c, "startNumber"), g = Number(Ie(b, c, "presentationTimeOffset")) || 0, h = ze(f || "");
            if (null == f || null == h) h = 1;
            var k = Je(b, c, "SegmentTimeline");
            f = null;
            if (k) {
              f = e;
              var l = b.L.duration || Infinity;
              k = N(k, "S");
              for (var m = [], r = 0, t = 0; t < k.length; ++t) {
                var u = k[t], y = O(u, "t", ze), w = O(u, "d", ze);
                u = O(u, "r", xe);
                null != y && (y -= g);
                if (!w) break;
                y = null != y ? y : r;
                u = u || 0;
                if (0 > u) if (t + 1 < k.length) {
                  u = O(k[t + 1], "t", ze);
                  if (null == u) break;
                  else if (y >= u) break;
                  u = Math.ceil((u - y) / w) - 1
                } else {
                  if (Infinity == l) break; else if (y / f >= l) break;
                  u = Math.ceil((l * f - y) / w) - 1
                }
                0 < m.length && y != r && (m[m.length - 1].end = y / f);
                for (var pa = 0; pa <= u; ++pa) r = y + w, m.push({start: y / f, end: r / f, Xe: y}), y = r
              }
              f = m
            }
            return {timescale: e, S: d, Ea: h, ca: g / e || 0, ic: g, H: f}
          }

          function Ie(b, c, d) {
            return [c(b.w), c(b.W), c(b.aa)].filter(Eb).map(function (b) {
              return b.getAttribute(d)
            }).reduce(function (b, c) {
              return b || c
            })
          }

          function Je(b, c, d) {
            return [c(b.w), c(b.W), c(b.aa)].filter(Eb).map(function (b) {
              return qe(b, d)
            }).reduce(function (b, c) {
              return b || c
            })
          }

          function Ke(b, c) {
            var d = new DOMParser;
            try {
              var e = Kb(b);
              var f = d.parseFromString(e, "text/xml")
            } catch (h) {
            }
            if (f && f.documentElement.tagName == c) var g = f.documentElement;
            return g && 0 < g.getElementsByTagName("parsererror").length ? null : g
          }

          function Le(b, c, d, e, f, g) {
            for (var h = se(b, "http://www.w3.org/1999/xlink", "href"), k = se(b, "http://www.w3.org/1999/xlink", "actuate") || "onRequest", l = 0; l < b.attributes.length; l++) {
              var m = b.attributes[l];
              "http://www.w3.org/1999/xlink" == m.namespaceURI && (b.removeAttributeNS(m.namespaceURI, m.localName), --l)
            }
            if (5 <= g) return $a(new B(2, 4, 4028));
            if ("onLoad" != k) return $a(new B(2, 4, 4027));
            var r = G([e], [h]);
            return f.request(0, rb(r, c)).X(function (e) {
              e = Ke(e.data, b.tagName);
              if (!e) return $a(new B(2, 4, 4001, h));
              for (; b.childNodes.length;) b.removeChild(b.childNodes[0]);
              for (; e.childNodes.length;) {
                var k = e.childNodes[0];
                e.removeChild(k);
                b.appendChild(k)
              }
              for (k = 0; k < e.attributes.length; k++) {
                var l = e.attributes[k].nodeName, m = e.getAttribute(l);
                b.setAttribute(l, m)
              }
              return Me(b, c, d, r[0], f, g + 1)
            })
          }

          function Me(b, c, d, e, f, g) {
            g = g || 0;
            if (se(b, "http://www.w3.org/1999/xlink", "href")) {
              var h = Le(b, c, d, e, f, g);
              d && (h = h.X(void 0, function () {
                return Me(b, c, d, e, f, g)
              }));
              return h
            }
            h = [];
            for (var k = 0; k < b.childNodes.length; k++) {
              var l = b.childNodes[k];
              l instanceof Element && ("urn:mpeg:dash:resolve-to-zero:2013" == se(l, "http://www.w3.org/1999/xlink", "href") ? (b.removeChild(l), --k) : "SegmentTimeline" != l.tagName && h.push(Me(l, c, d, e, f, g)))
            }
            return db(h).X(function () {
              return b
            })
          };

          function Ne(b, c, d) {
            this.c = b;
            this.b = c;
            this.a = d
          }

          z("shaka.media.InitSegmentReference", Ne);
          Ne.prototype.Eb = function () {
            return this.c()
          };
          Ne.prototype.createUris = Ne.prototype.Eb;
          Ne.prototype.Kb = function () {
            return this.b
          };
          Ne.prototype.getStartByte = Ne.prototype.Kb;
          Ne.prototype.Ib = function () {
            return this.a
          };
          Ne.prototype.getEndByte = Ne.prototype.Ib;

          function P(b, c, d, e, f, g) {
            this.position = b;
            this.startTime = c;
            this.endTime = d;
            this.c = e;
            this.b = f;
            this.a = g
          }

          z("shaka.media.SegmentReference", P);
          P.prototype.V = function () {
            return this.position
          };
          P.prototype.getPosition = P.prototype.V;
          P.prototype.Lb = function () {
            return this.startTime
          };
          P.prototype.getStartTime = P.prototype.Lb;
          P.prototype.qd = function () {
            return this.endTime
          };
          P.prototype.getEndTime = P.prototype.qd;
          P.prototype.Eb = function () {
            return this.c()
          };
          P.prototype.createUris = P.prototype.Eb;
          P.prototype.Kb = function () {
            return this.b
          };
          P.prototype.getStartByte = P.prototype.Kb;
          P.prototype.Ib = function () {
            return this.a
          };
          P.prototype.getEndByte = P.prototype.Ib;

          function Q(b, c) {
            this.D = b;
            this.b = c == Oe;
            this.a = 0
          }

          z("shaka.util.DataViewReader", Q);
          var Oe = 1;
          Q.Endianness = {cf: 0, df: Oe};
          Q.prototype.ia = function () {
            return this.a < this.D.byteLength
          };
          Q.prototype.hasMoreData = Q.prototype.ia;
          Q.prototype.V = function () {
            return this.a
          };
          Q.prototype.getPosition = Q.prototype.V;
          Q.prototype.rd = function () {
            return this.D.byteLength
          };
          Q.prototype.getLength = Q.prototype.rd;
          Q.prototype.ba = function () {
            try {
              var b = this.D.getUint8(this.a);
              this.a += 1;
              return b
            } catch (c) {
              Pe()
            }
          };
          Q.prototype.readUint8 = Q.prototype.ba;
          Q.prototype.bb = function () {
            try {
              var b = this.D.getUint16(this.a, this.b);
              this.a += 2;
              return b
            } catch (c) {
              Pe()
            }
          };
          Q.prototype.readUint16 = Q.prototype.bb;
          Q.prototype.B = function () {
            try {
              var b = this.D.getUint32(this.a, this.b);
              this.a += 4;
              return b
            } catch (c) {
              Pe()
            }
          };
          Q.prototype.readUint32 = Q.prototype.B;
          Q.prototype.Lc = function () {
            try {
              var b = this.D.getInt32(this.a, this.b);
              this.a += 4;
              return b
            } catch (c) {
              Pe()
            }
          };
          Q.prototype.readInt32 = Q.prototype.Lc;
          Q.prototype.Ra = function () {
            try {
              if (this.b) {
                var b = this.D.getUint32(this.a, !0);
                var c = this.D.getUint32(this.a + 4, !0)
              } else c = this.D.getUint32(this.a, !1), b = this.D.getUint32(this.a + 4, !1)
            } catch (d) {
              Pe()
            }
            if (2097151 < c) throw new B(2, 3, 3001);
            this.a += 8;
            return c * Math.pow(2, 32) + b
          };
          Q.prototype.readUint64 = Q.prototype.Ra;
          Q.prototype.Da = function (b) {
            this.a + b > this.D.byteLength && Pe();
            var c = new Uint8Array(this.D.buffer, this.D.byteOffset + this.a, b);
            this.a += b;
            return new Uint8Array(c)
          };
          Q.prototype.readBytes = Q.prototype.Da;
          Q.prototype.F = function (b) {
            this.a + b > this.D.byteLength && Pe();
            this.a += b
          };
          Q.prototype.skip = Q.prototype.F;
          Q.prototype.Oc = function (b) {
            this.a < b && Pe();
            this.a -= b
          };
          Q.prototype.rewind = Q.prototype.Oc;
          Q.prototype.seek = function (b) {
            (0 > b || b > this.D.byteLength) && Pe();
            this.a = b
          };
          Q.prototype.seek = Q.prototype.seek;
          Q.prototype.Yb = function () {
            for (var b = this.a; this.ia() && 0 != this.D.getUint8(this.a);) this.a += 1;
            b = new Uint8Array(this.D.buffer, this.D.byteOffset + b, this.a - b);
            this.a += 1;
            return Kb(b)
          };
          Q.prototype.readTerminatedString = Q.prototype.Yb;

          function Pe() {
            throw new B(2, 3, 3E3);
          };

          function R() {
            this.c = [];
            this.b = [];
            this.a = !1
          }

          z("shaka.util.Mp4Parser", R);
          R.prototype.C = function (b, c) {
            var d = Qe(b);
            this.c[d] = 0;
            this.b[d] = c;
            return this
          };
          R.prototype.box = R.prototype.C;
          R.prototype.Y = function (b, c) {
            var d = Qe(b);
            this.c[d] = 1;
            this.b[d] = c;
            return this
          };
          R.prototype.fullBox = R.prototype.Y;
          R.prototype.stop = function () {
            this.a = !0
          };
          R.prototype.stop = R.prototype.stop;
          R.prototype.parse = function (b, c) {
            var d = new Uint8Array(b);
            d = new Q(new DataView(d.buffer, d.byteOffset, d.byteLength), 0);
            for (this.a = !1; d.ia() && !this.a;) this.xb(0, d, c)
          };
          R.prototype.parse = R.prototype.parse;
          R.prototype.xb = function (b, c, d) {
            var e = c.V(), f = c.B(), g = c.B();
            switch (f) {
              case 0:
                f = c.D.byteLength - e;
                break;
              case 1:
                f = c.Ra()
            }
            var h = this.b[g];
            if (h) {
              var k = null, l = null;
              1 == this.c[g] && (l = c.B(), k = l >>> 24, l &= 16777215);
              g = e + f;
              d && g > c.D.byteLength && (g = c.D.byteLength);
              g -= c.V();
              c = 0 < g ? c.Da(g) : new Uint8Array(0);
              c = new Q(new DataView(c.buffer, c.byteOffset, c.byteLength), 0);
              h({parser: this, partialOkay: d || !1, version: k, flags: l, reader: c, size: f, start: e + b})
            } else c.F(Math.min(e + f - c.V(), c.D.byteLength - c.V()))
          };
          R.prototype.parseNext = R.prototype.xb;

          function S(b) {
            for (; b.reader.ia() && !b.parser.a;) b.parser.xb(b.start, b.reader, b.partialOkay)
          }

          R.children = S;

          function Re(b) {
            for (var c = b.reader.B(); 0 < c && !b.parser.a; --c) b.parser.xb(b.start, b.reader, b.partialOkay)
          }

          R.sampleDescription = Re;

          function Se(b) {
            return function (c) {
              b(c.reader.Da(c.reader.D.byteLength - c.reader.V()))
            }
          }

          R.allData = Se;

          function Qe(b) {
            for (var c = 0, d = 0; d < b.length; d++) c = c << 8 | b.charCodeAt(d);
            return c
          }

          function Te(b) {
            return String.fromCharCode(b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, b & 255)
          }

          R.typeToString = Te;

          function Ue(b, c, d, e) {
            var f, g = (new R).Y("sidx", function (b) {
              f = Ve(c, e, d, b)
            });
            b && g.parse(b);
            if (f) return f;
            throw new B(2, 3, 3004);
          }

          function Ve(b, c, d, e) {
            var f = [];
            e.reader.F(4);
            var g = e.reader.B();
            if (0 == g) throw new B(2, 3, 3005);
            if (0 == e.version) {
              var h = e.reader.B();
              var k = e.reader.B()
            } else h = e.reader.Ra(), k = e.reader.Ra();
            e.reader.F(2);
            var l = e.reader.bb();
            b = b + e.size + k;
            for (k = 0; k < l; k++) {
              var m = e.reader.B(), r = (m & 2147483648) >>> 31;
              m &= 2147483647;
              var t = e.reader.B();
              e.reader.F(4);
              if (1 == r) throw new B(2, 3, 3006);
              f.push(new P(f.length, h / g - c, (h + t) / g - c, function () {
                return d
              }, b, b + m - 1));
              h += t;
              b += m
            }
            e.parser.stop();
            return f
          };

          function T(b) {
            this.a = b
          }

          z("shaka.media.SegmentIndex", T);
          T.prototype.destroy = function () {
            this.a = null;
            return Promise.resolve()
          };
          T.prototype.destroy = T.prototype.destroy;
          T.prototype.find = function (b) {
            for (var c = this.a.length - 1; 0 <= c; --c) {
              var d = this.a[c];
              if (b >= d.startTime && b < d.endTime) return d.position
            }
            return this.a.length && b < this.a[0].startTime ? this.a[0].position : null
          };
          T.prototype.find = T.prototype.find;
          T.prototype.get = function (b) {
            if (0 == this.a.length) return null;
            b -= this.a[0].position;
            return 0 > b || b >= this.a.length ? null : this.a[b]
          };
          T.prototype.get = T.prototype.get;
          T.prototype.offset = function (b) {
            for (var c = 0; c < this.a.length; ++c) this.a[c].startTime += b, this.a[c].endTime += b
          };
          T.prototype.offset = T.prototype.offset;
          T.prototype.Qb = function (b) {
            for (var c = [], d = 0, e = 0; d < this.a.length && e < b.length;) {
              var f = this.a[d], g = b[e];
              f.startTime < g.startTime ? (c.push(f), d++) : (f.startTime > g.startTime ? 0 == d && c.push(g) : (.1 < Math.abs(f.endTime - g.endTime) ? c.push(new P(f.position, g.startTime, g.endTime, g.c, g.b, g.a)) : c.push(f), d++), e++)
            }
            for (; d < this.a.length;) c.push(this.a[d++]);
            if (c.length) for (d = c[c.length - 1].position + 1; e < b.length;) f = b[e++], f = new P(d++, f.startTime, f.endTime, f.c, f.b, f.a), c.push(f); else c = b;
            this.a = c
          };
          T.prototype.merge = T.prototype.Qb;
          T.prototype.Gb = function (b) {
            for (var c = 0; c < this.a.length; ++c) if (this.a[c].endTime > b) {
              this.a.splice(0, c);
              return
            }
            this.a = []
          };
          T.prototype.evict = T.prototype.Gb;

          function We(b, c) {
            for (; b.a.length;) if (b.a[b.a.length - 1].startTime >= c) b.a.pop(); else break;
            for (; b.a.length;) if (0 >= b.a[0].endTime) b.a.shift(); else break;
            if (0 != b.a.length) {
              var d = b.a[b.a.length - 1];
              b.a[b.a.length - 1] = new P(d.position, d.startTime, c, d.c, d.b, d.a)
            }
          };

          function Xe(b) {
            this.b = b;
            this.a = new Q(b, 0);
            Ye || (Ye = [new Uint8Array([255]), new Uint8Array([127, 255]), new Uint8Array([63, 255, 255]), new Uint8Array([31, 255, 255, 255]), new Uint8Array([15, 255, 255, 255, 255]), new Uint8Array([7, 255, 255, 255, 255, 255]), new Uint8Array([3, 255, 255, 255, 255, 255, 255]), new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255])])
          }

          var Ye;
          Xe.prototype.ia = function () {
            return this.a.ia()
          };

          function Ze(b) {
            var c = $e(b);
            if (7 < c.length) throw new B(2, 3, 3002);
            for (var d = 0, e = 0; e < c.length; e++) d = 256 * d + c[e];
            c = d;
            d = $e(b);
            a:{
              for (e = 0; e < Ye.length; e++) if (Yb(d, Ye[e])) {
                e = !0;
                break a
              }
              e = !1
            }
            if (e) d = b.b.byteLength - b.a.V(); else {
              if (8 == d.length && d[1] & 224) throw new B(2, 3, 3001);
              e = d[0] & (1 << 8 - d.length) - 1;
              for (var f = 1; f < d.length; f++) e = 256 * e + d[f];
              d = e
            }
            d = b.a.V() + d <= b.b.byteLength ? d : b.b.byteLength - b.a.V();
            e = new DataView(b.b.buffer, b.b.byteOffset + b.a.V(), d);
            b.a.F(d);
            return new af(c, e)
          }

          function $e(b) {
            var c = b.a.ba(), d;
            for (d = 1; 8 >= d && !(c & 1 << 8 - d); d++) ;
            if (8 < d) throw new B(2, 3, 3002);
            var e = new Uint8Array(d);
            e[0] = c;
            for (c = 1; c < d; c++) e[c] = b.a.ba();
            return e
          }

          function af(b, c) {
            this.id = b;
            this.a = c
          }

          function bf(b) {
            if (8 < b.a.byteLength) throw new B(2, 3, 3002);
            if (8 == b.a.byteLength && b.a.getUint8(0) & 224) throw new B(2, 3, 3001);
            for (var c = 0, d = 0; d < b.a.byteLength; d++) {
              var e = b.a.getUint8(d);
              c = 256 * c + e
            }
            return c
          };

          function cf() {
          }

          cf.prototype.parse = function (b, c, d, e) {
            var f;
            c = new Xe(new DataView(c));
            if (440786851 != Ze(c).id) throw new B(2, 3, 3008);
            var g = Ze(c);
            if (408125543 != g.id) throw new B(2, 3, 3009);
            c = g.a.byteOffset;
            g = new Xe(g.a);
            for (f = null; g.ia();) {
              var h = Ze(g);
              if (357149030 == h.id) {
                f = h;
                break
              }
            }
            if (!f) throw new B(2, 3, 3010);
            g = new Xe(f.a);
            f = 1E6;
            for (h = null; g.ia();) {
              var k = Ze(g);
              if (2807729 == k.id) f = bf(k); else if (17545 == k.id) if (h = k, 4 == h.a.byteLength) h = h.a.getFloat32(0); else if (8 == h.a.byteLength) h = h.a.getFloat64(0); else throw new B(2, 3, 3003);
            }
            if (null == h) throw new B(2, 3, 3011);
            g = f / 1E9;
            f = h * g;
            b = Ze(new Xe(new DataView(b)));
            if (475249515 != b.id) throw new B(2, 3, 3007);
            return df(b, c, g, f, d, e)
          };

          function df(b, c, d, e, f, g) {
            function h() {
              return f
            }

            var k = [];
            b = new Xe(b.a);
            for (var l = null, m = null; b.ia();) {
              var r = Ze(b);
              if (187 == r.id) {
                var t = ef(r);
                t && (r = d * t.Ye, t = c + t.se, null != l && k.push(new P(k.length, l - g, r - g, h, m, t - 1)), l = r, m = t)
              }
            }
            null != l && k.push(new P(k.length, l - g, e - g, h, m, null));
            return k
          }

          function ef(b) {
            var c = new Xe(b.a);
            b = Ze(c);
            if (179 != b.id) throw new B(2, 3, 3013);
            b = bf(b);
            c = Ze(c);
            if (183 != c.id) throw new B(2, 3, 3012);
            c = new Xe(c.a);
            for (var d = 0; c.ia();) {
              var e = Ze(c);
              if (241 == e.id) {
                d = bf(e);
                break
              }
            }
            return {Ye: b, se: d}
          };

          function ff(b, c) {
            var d = Je(b, c, "Initialization");
            if (!d) return null;
            var e = b.w.da, f = d.getAttribute("sourceURL");
            f && (e = G(b.w.da, [f]));
            f = 0;
            var g = null;
            if (d = O(d, "range", we)) f = d.start, g = d.end;
            return new Ne(function () {
              return e
            }, f, g)
          }

          function gf(b, c) {
            var d = Number(Ie(b, hf, "presentationTimeOffset")) || 0, e = Ie(b, hf, "timescale"), f = 1;
            e && (f = ye(e) || 1);
            d = d / f || 0;
            e = ff(b, hf);
            var g = b.w.contentType;
            f = b.w.mimeType.split("/")[1];
            if ("text" != g && "mp4" != f && "webm" != f) throw new B(2, 4, 4006);
            if ("webm" == f && !e) throw new B(2, 4, 4005);
            g = Je(b, hf, "RepresentationIndex");
            var h = Ie(b, hf, "indexRange"), k = b.w.da;
            h = we(h || "");
            if (g) {
              var l = g.getAttribute("sourceURL");
              l && (k = G(b.w.da, [l]));
              h = O(g, "range", we, h)
            }
            if (!h) throw new B(2, 4, 4002);
            f = jf(b, c, e, k, h.start, h.end, f, d);
            return {
              createSegmentIndex: f.createSegmentIndex,
              findSegmentPosition: f.findSegmentPosition,
              getSegmentReference: f.getSegmentReference,
              initSegmentReference: e,
              ca: d
            }
          }

          function jf(b, c, d, e, f, g, h, k) {
            var l = b.presentationTimeline, m = !b.Ia || !b.L.Mb, r = b.L.index, t = b.L.duration, u = c, y = null;
            return {
              createSegmentIndex: function () {
                var b = [u(e, f, g), "webm" == h ? u(d.c(), d.b, d.a) : null];
                u = null;
                return Promise.all(b).then(function (b) {
                  var c = b[0];
                  b = b[1] || null;
                  c = "mp4" == h ? Ue(c, f, e, k) : (new cf).parse(c, b, e, k);
                  l.Na(c, 0 == r);
                  y = new T(c);
                  m && We(y, t)
                })
              }, findSegmentPosition: function (b) {
                return y.find(b)
              }, getSegmentReference: function (b) {
                return y.get(b)
              }
            }
          }

          function hf(b) {
            return b.cb
          };

          function kf(b, c) {
            var d = ff(b, lf);
            var e = mf(b);
            var f = He(b, lf), g = f.Ea;
            0 == g && (g = 1);
            var h = 0;
            f.S ? h = f.S * (g - 1) : f.H && 0 < f.H.length && (h = f.H[0].start);
            e = {S: f.S, startTime: h, Ea: g, ca: f.ca, H: f.H, Ma: e};
            if (!e.S && !e.H && 1 < e.Ma.length) throw new B(2, 4, 4002);
            if (!e.S && !b.L.duration && !e.H && 1 == e.Ma.length) throw new B(2, 4, 4002);
            if (e.H && 0 == e.H.length) throw new B(2, 4, 4002);
            g = f = null;
            b.aa.id && b.w.id && (g = b.aa.id + "," + b.w.id, f = c[g]);
            h = nf(b.L.duration, e.Ea, b.w.da, e);
            f ? (f.Qb(h), g = b.presentationTimeline.Xa(), f.Gb(g - b.L.start)) : (b.presentationTimeline.Na(h,
                    0 == b.L.index), f = new T(h), g && b.Ia && (c[g] = f));
            b.Ia && b.L.Mb || We(f, b.L.duration);
            return {
              createSegmentIndex: Promise.resolve.bind(Promise),
              findSegmentPosition: f.find.bind(f),
              getSegmentReference: f.get.bind(f),
              initSegmentReference: d,
              ca: e.ca
            }
          }

          function lf(b) {
            return b.ua
          }

          function nf(b, c, d, e) {
            var f = e.Ma.length;
            e.H && e.H.length != e.Ma.length && (f = Math.min(e.H.length, e.Ma.length));
            for (var g = [], h = e.startTime, k = 0; k < f; k++) {
              var l = e.Ma[k], m = G(d, [l.Hd]), r = void 0;
              r = null != e.S ? h + e.S : e.H ? e.H[k].end : h + b;
              g.push(new P(k + c, h, r, function (b) {
                return b
              }.bind(null, m), l.start, l.end));
              h = r
            }
            return g
          }

          function mf(b) {
            return [b.w.ua, b.W.ua, b.aa.ua].filter(Eb).map(function (b) {
              return N(b, "SegmentURL")
            }).reduce(function (b, d) {
              return 0 < b.length ? b : d
            }).map(function (c) {
              c.getAttribute("indexRange") && !b.wc && (b.wc = !0);
              var d = c.getAttribute("media");
              c = O(c, "mediaRange", we, {start: 0, end: null});
              return {Hd: d, start: c.start, end: c.end}
            })
          };

          function of(b, c, d, e) {
            var f = pf(b);
            var g = He(b, qf);
            var h = Ie(b, qf, "media"), k = Ie(b, qf, "index");
            g = {S: g.S, timescale: g.timescale, Ea: g.Ea, ca: g.ca, ic: g.ic, H: g.H, Pb: h, Za: k};
            h = g.Za ? 1 : 0;
            h += g.H ? 1 : 0;
            h += g.S ? 1 : 0;
            if (0 == h) throw new B(2, 4, 4002);
            1 != h && (g.Za && (g.H = null), g.S = null);
            if (!g.Za && !g.Pb) throw new B(2, 4, 4002);
            if (g.Za) {
              d = b.w.mimeType.split("/")[1];
              if ("mp4" != d && "webm" != d) throw new B(2, 4, 4006);
              if ("webm" == d && !f) throw new B(2, 4, 4005);
              e = Ge(g.Za, b.w.id, null, b.bandwidth || null, null);
              e = G(b.w.da, [e]);
              b = jf(b, c, f, e, 0, null,
                      d, g.ca)
            } else g.S ? (e || b.presentationTimeline.Sb(g.S), b = rf(b, g)) : (h = c = null, b.aa.id && b.w.id && (h = b.aa.id + "," + b.w.id, c = d[h]), k = sf(b, g), e = !b.Ia || !b.L.Mb, c ? (e && We(new T(k), b.L.duration), c.Qb(k), d = b.presentationTimeline.Xa(), c.Gb(d - b.L.start)) : (b.presentationTimeline.Na(k, 0 == b.L.index), c = new T(k), h && b.Ia && (d[h] = c)), e && We(c, b.L.duration), b = {
              createSegmentIndex: Promise.resolve.bind(Promise),
              findSegmentPosition: c.find.bind(c),
              getSegmentReference: c.get.bind(c)
            });
            return {
              createSegmentIndex: b.createSegmentIndex,
              findSegmentPosition: b.findSegmentPosition,
              getSegmentReference: b.getSegmentReference,
              initSegmentReference: f,
              ca: g.ca
            }
          }

          function qf(b) {
            return b.fb
          }

          function rf(b, c) {
            var d = b.L.duration, e = c.S, f = c.Ea, g = c.timescale, h = c.Pb, k = b.bandwidth || null, l = b.w.id,
                    m = b.w.da;
            return {
              createSegmentIndex: Promise.resolve.bind(Promise), findSegmentPosition: function (b) {
                return 0 > b || d && b >= d ? null : Math.floor(b / e)
              }, getSegmentReference: function (b) {
                var c = b * e, r = c + e;
                d && (r = Math.min(r, d));
                return 0 > r || d && c >= d ? null : new P(b, c, r, function () {
                  var d = Ge(h, l, b + f, k, c * g);
                  return G(m, [d])
                }, 0, null)
              }
            }
          }

          function sf(b, c) {
            for (var d = [], e = 0; e < c.H.length; e++) {
              var f = e + c.Ea;
              d.push(new P(f, c.H[e].start, c.H[e].end, function (b, c, d, e, f, r) {
                b = Ge(b, c, f, d, r);
                return G(e, [b]).map(function (b) {
                  return b.toString()
                })
              }.bind(null, c.Pb, b.w.id, b.bandwidth || null, b.w.da, f, c.H[e].Xe + c.ic), 0, null))
            }
            return d
          }

          function pf(b) {
            var c = Ie(b, qf, "initialization");
            if (!c) return null;
            var d = b.w.id, e = b.bandwidth || null, f = b.w.da;
            return new Ne(function () {
              var b = Ge(c, d, null, e, null);
              return G(f, [b])
            }, 0, null)
          };var tf = {}, uf = {};
          z("shaka.media.ManifestParser.registerParserByExtension", function (b, c) {
            uf[b] = c
          });
          z("shaka.media.ManifestParser.registerParserByMime", function (b, c) {
            tf[b] = c
          });

          function vf() {
            var b = {}, c;
            for (c in tf) b[c] = !0;
            for (var d in uf) b[d] = !0;
            ["application/dash+xml", "application/x-mpegurl", "application/vnd.apple.mpegurl", "application/vnd.ms-sstr+xml"].forEach(function (c) {
              b[c] = !!tf[c]
            });
            ["mpd", "m3u8", "ism"].forEach(function (c) {
              b[c] = !!uf[c]
            });
            return b
          }

          function wf(b, c, d, e) {
            var f = e;
            f || (e = (new Ja(b)).$.split("/").pop().split("."), 1 < e.length && (e = e.pop().toLowerCase(), f = uf[e]));
            if (f) return Promise.resolve(f);
            d = rb([b], d);
            d.method = "HEAD";
            return c.request(0, d).promise.then(function (c) {
              (c = c.headers["content-type"]) && (c = c.toLowerCase());
              return (f = tf[c]) ? f : Promise.reject(new B(2, 4, 4E3, b))
            }, function (b) {
              b.severity = 2;
              return Promise.reject(b)
            })
          };

          function U(b, c) {
            this.f = b;
            this.l = c;
            this.c = this.b = Infinity;
            this.a = 1;
            this.j = this.h = 0;
            this.i = !0;
            this.g = 0
          }

          z("shaka.media.PresentationTimeline", U);
          U.prototype.U = function () {
            return this.b
          };
          U.prototype.getDuration = U.prototype.U;
          U.prototype.la = function (b) {
            this.b = b
          };
          U.prototype.setDuration = U.prototype.la;
          U.prototype.wd = function () {
            return this.f
          };
          U.prototype.getPresentationStartTime = U.prototype.wd;
          U.prototype.Rc = function (b) {
            this.j = b
          };
          U.prototype.setClockOffset = U.prototype.Rc;
          U.prototype.yb = function (b) {
            this.i = b
          };
          U.prototype.setStatic = U.prototype.yb;
          U.prototype.dc = function (b) {
            this.c = b
          };
          U.prototype.setSegmentAvailabilityDuration = U.prototype.dc;
          U.prototype.Sc = function (b) {
            this.l = b
          };
          U.prototype.setDelay = U.prototype.Sc;
          U.prototype.Na = function (b, c) {
            0 != b.length && (c && (this.h = Math.max(this.h, b[0].startTime)), this.a = b.reduce(function (b, c) {
              return Math.max(b, c.endTime - c.startTime)
            }, this.a))
          };
          U.prototype.notifySegments = U.prototype.Na;
          U.prototype.Sb = function (b) {
            this.a = Math.max(this.a, b)
          };
          U.prototype.notifyMaxSegmentDuration = U.prototype.Sb;
          U.prototype.R = function () {
            return Infinity == this.b && !this.i
          };
          U.prototype.isLive = U.prototype.R;
          U.prototype.Aa = function () {
            return Infinity != this.b && !this.i
          };
          U.prototype.isInProgress = U.prototype.Aa;
          U.prototype.Xa = function () {
            if (Infinity == this.c) return this.g;
            var b = this.Ka() - this.c;
            return Math.max(this.g, b)
          };
          U.prototype.getSegmentAvailabilityStart = U.prototype.Xa;
          U.prototype.Tc = function (b) {
            this.g = b
          };
          U.prototype.setUserSeekStart = U.prototype.Tc;
          U.prototype.Ka = function () {
            return this.R() || this.Aa() ? Math.min(Math.max(0, (Date.now() + this.j) / 1E3 - this.a - this.f), this.b) : this.b
          };
          U.prototype.getSegmentAvailabilityEnd = U.prototype.Ka;
          U.prototype.Wa = function (b) {
            var c = Math.max(this.h, this.g);
            if (Infinity == this.c) return c;
            var d = this.Ka() - this.c;
            b = Math.min(d + b, this.na());
            return Math.max(c, b)
          };
          U.prototype.getSafeSeekRangeStart = U.prototype.Wa;
          U.prototype.Ja = function () {
            return this.Wa(0)
          };
          U.prototype.getSeekRangeStart = U.prototype.Ja;
          U.prototype.na = function () {
            var b = this.R() || this.Aa() ? this.l : 0;
            return Math.max(0, this.Ka() - b)
          };
          U.prototype.getSeekRangeEnd = U.prototype.na;

          function xf() {
            this.a = this.b = null;
            this.h = [];
            this.c = null;
            this.j = [];
            this.i = 1;
            this.l = {};
            this.m = 0;
            this.o = new Ca(5);
            this.g = null;
            this.f = new nb
          }

          z("shaka.dash.DashParser", xf);
          n = xf.prototype;
          n.configure = function (b) {
            this.b = b
          };
          n.start = function (b, c) {
            this.h = [b];
            this.a = c;
            return yf(this).then(function (b) {
              this.a && zf(this, b);
              return this.c
            }.bind(this))
          };
          n.stop = function () {
            this.b = this.a = null;
            this.h = [];
            this.c = null;
            this.j = [];
            this.l = {};
            null != this.g && (window.clearTimeout(this.g), this.g = null);
            return this.f.destroy()
          };
          n.update = function () {
            yf(this)["catch"](function (b) {
              if (this.a) this.a.onError(b)
            }.bind(this))
          };
          n.onExpirationUpdated = function () {
          };

          function yf(b) {
            var c = Date.now(), d = b.a.networkingEngine.request(0, rb(b.h, b.b.retryParameters));
            ob(b.f, d);
            return d.promise.then(function (c) {
              if (b.a) return Af(b, c.data, c.uri)
            }).then(function () {
              var d = (Date.now() - c) / 1E3;
              Da(b.o, 1, d);
              return d
            })
          }

          function Af(b, c, d) {
            c = Ke(c, "MPD");
            if (!c) throw new B(2, 4, 4001, d);
            c = Me(c, b.b.retryParameters, b.b.dash.xlinkFailGracefully, d, b.a.networkingEngine);
            ob(b.f, c);
            return c.promise.then(function (c) {
              return Bf(b, c, d)
            })
          }

          function Bf(b, c, d) {
            d = [d];
            var e = N(c, "Location").map(te).filter(Eb);
            0 < e.length && (d = G(d, e), b.h = d);
            e = N(c, "BaseURL").map(te);
            d = G(d, e);
            var f = O(c, "minBufferTime", ve);
            b.m = O(c, "minimumUpdatePeriod", ve, -1);
            var g = O(c, "availabilityStartTime", ue);
            e = O(c, "timeShiftBufferDepth", ve);
            var h = O(c, "suggestedPresentationDelay", ve), k = O(c, "maxSegmentDuration", ve),
                    l = c.getAttribute("type") || "static";
            if (b.c) var m = b.c.presentationTimeline; else {
              var r = Math.max(b.b.dash.defaultPresentationDelay, 1.5 * f);
              m = new U(g, null != h ? h : r)
            }
            g = Cf(b,
                    {
                      Ia: "static" != l,
                      presentationTimeline: m,
                      aa: null,
                      L: null,
                      W: null,
                      w: null,
                      bandwidth: 0,
                      wc: !1
                    }, d, c);
            h = g.duration;
            var t = g.periods;
            m.yb("static" == l);
            "static" != l && g.oc || m.la(h || Infinity);
            (l = m.R()) && !isNaN(b.b.availabilityWindowOverride) && (e = b.b.availabilityWindowOverride);
            null == e && (e = Infinity);
            m.dc(e);
            m.Sb(k || 1);
            if (b.c) return Promise.resolve();
            c = N(c, "UTCTiming");
            return Df(b, d, c, l).then(function (b) {
              this.a && (m.Rc(b), this.c = {
                presentationTimeline: m,
                periods: t,
                offlineSessionIds: [],
                minBufferTime: f || 0
              })
            }.bind(b))
          }

          function Cf(b, c, d, e) {
            var f = O(e, "mediaPresentationDuration", ve), g = [], h = 0;
            e = N(e, "Period");
            for (var k = 0; k < e.length; k++) {
              var l = e[k];
              h = O(l, "start", ve, h);
              var m = O(l, "duration", ve), r = null;
              if (k != e.length - 1) {
                var t = O(e[k + 1], "start", ve);
                null != t && (r = t - h)
              } else null != f && (r = f - h);
              null == r && (r = m);
              l = Ef(b, c, d, {start: h, duration: r, node: l, index: k, Mb: null == r || k == e.length - 1});
              g.push(l);
              m = c.aa.id;
              -1 == b.j.indexOf(m) && (b.j.push(m), b.c && (b.a.filterNewPeriod(l), b.c.periods.push(l)));
              if (null == r) {
                h = null;
                break
              }
              h += r
            }
            null == b.c && b.a.filterAllPeriods(g);
            return null != f ? {periods: g, duration: f, oc: !1} : {periods: g, duration: h, oc: !0}
          }

          function Ef(b, c, d, e) {
            c.aa = Ff(e.node, null, d);
            c.L = e;
            c.aa.id || (c.aa.id = "__shaka_period_" + e.start);
            N(e.node, "EventStream").forEach(b.je.bind(b, e.start, e.duration));
            d = N(e.node, "AdaptationSet").map(b.he.bind(b, c)).filter(Eb);
            var f = d.map(function (b) {
              return b.ue
            }).reduce(Cb, []), g = f.filter(Fb);
            if (c.Ia && f.length != g.length) throw new B(2, 4, 4018);
            var h = d.filter(function (b) {
              return !b.hc
            });
            d.filter(function (b) {
              return b.hc
            }).forEach(function (b) {
              var c = b.streams[0], d = b.hc;
              h.forEach(function (b) {
                b.id == d && b.streams.forEach(function (b) {
                  b.trickModeVideo =
                          c
                })
              })
            });
            d = Gf(h, "video");
            f = Gf(h, "audio");
            if (!d.length && !f.length) throw new B(2, 4, 4004);
            f.length || (f = [null]);
            d.length || (d = [null]);
            c = [];
            for (g = 0; g < f.length; g++) for (var k = 0; k < d.length; k++) Hf(b, f[g], d[k], c);
            b = Gf(h, "text");
            d = [];
            for (f = 0; f < b.length; f++) d.push.apply(d, b[f].streams);
            return {startTime: e.start, textStreams: d, variants: c}
          }

          function Gf(b, c) {
            return b.filter(function (b) {
              return b.contentType == c
            })
          }

          function Hf(b, c, d, e) {
            if (c || d) if (c && d) {
              var f = c.drmInfos;
              var g = d.drmInfos;
              if (f.length && g.length ? 0 < uc(f, g).length : 1) {
                g = uc(c.drmInfos, d.drmInfos);
                for (var h = 0; h < c.streams.length; h++) for (var k = 0; k < d.streams.length; k++) f = (d.streams[k].bandwidth || 0) + (c.streams[h].bandwidth || 0), f = {
                  id: b.i++,
                  language: c.language,
                  primary: c.Ob || d.Ob,
                  audio: c.streams[h],
                  video: d.streams[k],
                  bandwidth: f,
                  drmInfos: g,
                  allowedByApplication: !0,
                  allowedByKeySystem: !0
                }, e.push(f)
              }
            } else for (g = c || d, h = 0; h < g.streams.length; h++) f = g.streams[h].bandwidth ||
                    0, f = {
              id: b.i++,
              language: g.language || "und",
              primary: g.Ob,
              audio: c ? g.streams[h] : null,
              video: d ? g.streams[h] : null,
              bandwidth: f,
              drmInfos: g.drmInfos,
              allowedByApplication: !0,
              allowedByKeySystem: !0
            }, e.push(f)
          }

          n.he = function (b, c) {
            b.W = Ff(c, b.aa, null);
            var d = !1, e = N(c, "Role"), f = e.map(function (b) {
              return b.getAttribute("value")
            }).filter(Eb), g = void 0, h = "text" == b.W.contentType;
            h && (g = "subtitle");
            for (var k = 0; k < e.length; k++) {
              var l = e[k].getAttribute("schemeIdUri");
              if (null == l || "urn:mpeg:dash:role:2011" == l) switch (l = e[k].getAttribute("value"), l) {
                case "main":
                  d = !0;
                  break;
                case "caption":
                case "subtitle":
                  g = l
              }
            }
            var m = null, r = !1;
            N(c, "EssentialProperty").forEach(function (b) {
              "http://dashif.org/guidelines/trickmode" == b.getAttribute("schemeIdUri") ?
                      m = b.getAttribute("value") : r = !0
            });
            if (r) return null;
            e = N(c, "ContentProtection");
            var t = Ce(e, this.b.dash.customScheme, this.b.dash.ignoreDrmInfo);
            e = ld(c.getAttribute("lang") || "und");
            l = c.getAttribute("label");
            k = N(c, "Representation");
            f = k.map(this.ke.bind(this, b, t, g, e, l, d, f)).filter(function (b) {
              return !!b
            });
            if (0 == f.length) {
              if (h) return null;
              throw new B(2, 4, 4003);
            }
            b.W.contentType && "application" != b.W.contentType || (b.W.contentType = If(f[0].mimeType, f[0].codecs), f.forEach(function (c) {
              c.type = b.W.contentType
            }));
            f.forEach(function (b) {
              t.drmInfos.forEach(function (c) {
                b.keyId &&
                c.keyIds.push(b.keyId)
              })
            });
            h = k.map(function (b) {
              return b.getAttribute("id")
            }).filter(Eb);
            return {
              id: b.W.id || "__fake__" + this.i++,
              contentType: b.W.contentType,
              language: e,
              Ob: d,
              streams: f,
              drmInfos: t.drmInfos,
              hc: m,
              ue: h
            }
          };
          n.ke = function (b, c, d, e, f, g, h, k) {
            b.w = Ff(k, b.W, null);
            if (!Jf(b.w)) return null;
            b.bandwidth = O(k, "bandwidth", ye) || 0;
            var l = b.w.contentType;
            l = "text" == l || "application" == l;
            try {
              var m = this.ve.bind(this);
              if (b.w.cb) var r = gf(b, m); else if (b.w.ua) r = kf(b, this.l); else if (b.w.fb) r = of(b, m, this.l, !!this.c); else {
                var t = b.w.da, u = b.L.duration || 0;
                r = {
                  createSegmentIndex: Promise.resolve.bind(Promise), findSegmentPosition: function (b) {
                    return 0 <= b && b < u ? 1 : null
                  }, getSegmentReference: function (b) {
                    return 1 != b ? null : new P(1, 0, u, function () {
                              return t
                            },
                            0, null)
                  }, initSegmentReference: null, ca: 0
                }
              }
            } catch (y) {
              if (l && 4002 == y.code) return null;
              throw y;
            }
            k = N(k, "ContentProtection");
            k = Fe(k, this.b.dash.customScheme, c, this.b.dash.ignoreDrmInfo);
            return {
              id: this.i++,
              createSegmentIndex: r.createSegmentIndex,
              findSegmentPosition: r.findSegmentPosition,
              getSegmentReference: r.getSegmentReference,
              initSegmentReference: r.initSegmentReference,
              presentationTimeOffset: r.ca,
              mimeType: b.w.mimeType,
              codecs: b.w.codecs,
              frameRate: b.w.frameRate,
              bandwidth: b.bandwidth,
              width: b.w.width,
              height: b.w.height,
              kind: d,
              encrypted: 0 < c.drmInfos.length,
              keyId: k,
              language: e,
              label: f,
              type: b.W.contentType,
              primary: g,
              trickModeVideo: null,
              containsEmsgBoxes: b.w.containsEmsgBoxes,
              roles: h,
              channelsCount: b.w.Tb
            }
          };
          n.Qe = function () {
            this.g = null;
            yf(this).then(function (b) {
              this.a && zf(this, b)
            }.bind(this))["catch"](function (b) {
              this.a && (b.severity = 1, this.a.onError(b), zf(this, 0))
            }.bind(this))
          };

          function zf(b, c) {
            0 > b.m || (b.g = window.setTimeout(b.Qe.bind(b), 1E3 * Math.max(3, b.m - c, Ea(b.o))))
          }

          function Ff(b, c, d) {
            c = c || {contentType: "", mimeType: "", codecs: "", containsEmsgBoxes: !1, frameRate: void 0, Tb: null};
            d = d || c.da;
            var e = N(b, "BaseURL").map(te), f = b.getAttribute("contentType") || c.contentType,
                    g = b.getAttribute("mimeType") || c.mimeType, h = b.getAttribute("codecs") || c.codecs,
                    k = O(b, "frameRate", Ae) || c.frameRate, l = !!N(b, "InbandEventStream").length,
                    m = N(b, "AudioChannelConfiguration");
            m = Kf(m) || c.Tb;
            f || (f = If(g, h));
            return {
              da: G(d, e),
              cb: qe(b, "SegmentBase") || c.cb,
              ua: qe(b, "SegmentList") || c.ua,
              fb: qe(b, "SegmentTemplate") ||
                      c.fb,
              width: O(b, "width", ze) || c.width,
              height: O(b, "height", ze) || c.height,
              contentType: f,
              mimeType: g,
              codecs: h,
              frameRate: k,
              containsEmsgBoxes: l || c.containsEmsgBoxes,
              id: b.getAttribute("id"),
              Tb: m
            }
          }

          function Kf(b) {
            for (var c = 0; c < b.length; ++c) {
              var d = b[c], e = d.getAttribute("schemeIdUri");
              if (e && (d = d.getAttribute("value"))) switch (e) {
                case "urn:mpeg:dash:outputChannelPositionList:2012":
                  return d.trim().split(/ +/).length;
                case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":
                case "urn:dts:dash:audio_channel_configuration:2012":
                  e = parseInt(d, 10);
                  if (!e) continue;
                  return e;
                case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":
                case "urn:dolby:dash:audio_channel_configuration:2011":
                  if (e = parseInt(d,
                          16)) {
                    for (b = 0; e;) e & 1 && ++b, e >>= 1;
                    return b
                  }
              }
            }
            return null
          }

          function Jf(b) {
            var c = b.cb ? 1 : 0;
            c += b.ua ? 1 : 0;
            c += b.fb ? 1 : 0;
            if (0 == c) return "text" == b.contentType || "application" == b.contentType ? !0 : !1;
            1 != c && (b.cb && (b.ua = null), b.fb = null);
            return !0
          }

          function Lf(b, c, d, e) {
            c = G(c, [d]);
            c = rb(c, b.b.retryParameters);
            c.method = e;
            c = b.a.networkingEngine.request(0, c);
            ob(b.f, c);
            return c.promise.then(function (b) {
              if ("HEAD" == e) {
                if (!b.headers || !b.headers.date) return 0;
                b = b.headers.date
              } else b = Kb(b.data);
              b = Date.parse(b);
              return isNaN(b) ? 0 : b - Date.now()
            })
          }

          function Df(b, c, d, e) {
            d = d.map(function (b) {
              return {scheme: b.getAttribute("schemeIdUri"), value: b.getAttribute("value")}
            });
            var f = b.b.dash.clockSyncUri;
            e && !d.length && f && d.push({scheme: "urn:mpeg:dash:utc:http-head:2014", value: f});
            return Bb(d, function (b) {
              var d = b.value;
              switch (b.scheme) {
                case "urn:mpeg:dash:utc:http-head:2014":
                case "urn:mpeg:dash:utc:http-head:2012":
                  return Lf(this, c, d, "HEAD");
                case "urn:mpeg:dash:utc:http-xsdate:2014":
                case "urn:mpeg:dash:utc:http-iso:2014":
                case "urn:mpeg:dash:utc:http-xsdate:2012":
                case "urn:mpeg:dash:utc:http-iso:2012":
                  return Lf(this,
                          c, d, "GET");
                case "urn:mpeg:dash:utc:direct:2014":
                case "urn:mpeg:dash:utc:direct:2012":
                  return b = Date.parse(d), isNaN(b) ? 0 : b - Date.now();
                case "urn:mpeg:dash:utc:http-ntp:2014":
                case "urn:mpeg:dash:utc:ntp:2014":
                case "urn:mpeg:dash:utc:sntp:2014":
                  return Promise.reject();
                default:
                  return Promise.reject()
              }
            }.bind(b))["catch"](function () {
              return 0
            })
          }

          n.je = function (b, c, d) {
            var e = d.getAttribute("schemeIdUri") || "", f = d.getAttribute("value") || "",
                    g = O(d, "timescale", ze) || 1;
            N(d, "Event").forEach(function (d) {
              var h = O(d, "presentationTime", ze) || 0, l = O(d, "duration", ze) || 0;
              h = h / g + b;
              l = h + l / g;
              null != c && (h = Math.min(h, b + c), l = Math.min(l, b + c));
              d = {
                schemeIdUri: e,
                value: f,
                startTime: h,
                endTime: l,
                id: d.getAttribute("id") || "",
                eventElement: d
              };
              this.a.onTimelineRegionAdded(d)
            }.bind(this))
          };
          n.ve = function (b, c, d) {
            b = rb(b, this.b.retryParameters);
            null != c && (b.headers.Range = "bytes=" + c + "-" + (null != d ? d : ""));
            c = this.a.networkingEngine.request(1, b);
            ob(this.f, c);
            return c.promise.then(function (b) {
              return b.data
            })
          };

          function If(b, c) {
            return J[Ib(b, c)] ? "text" : b.split("/")[0]
          }

          uf.mpd = xf;
          tf["application/dash+xml"] = xf;

          function Mf(b, c, d, e) {
            this.b = b;
            this.type = c;
            this.a = d;
            this.segments = e || null
          }

          function Nf(b, c, d, e) {
            this.id = b;
            this.name = c;
            this.a = d;
            this.value = e || null
          }

          Nf.prototype.toString = function () {
            function b(b) {
              return b.name + '="' + b.value + '"'
            }

            return this.value ? "#" + this.name + ":" + this.value : 0 < this.a.length ? "#" + this.name + ":" + this.a.map(b).join(",") : "#" + this.name
          };

          function Of(b, c) {
            this.name = b;
            this.value = c
          }

          Nf.prototype.getAttribute = function (b) {
            var c = this.a.filter(function (c) {
              return c.name == b
            });
            return c.length ? c[0] : null
          };

          function Pf(b, c, d) {
            d = d || null;
            return (b = b.getAttribute(c)) ? b.value : d
          }

          function Qf(b, c) {
            this.b = c;
            this.a = b
          };

          function Rf(b, c) {
            return b.filter(function (b) {
              return b.name == c
            })
          }

          function Sf(b, c) {
            var d = Rf(b, c);
            return d.length ? d[0] : null
          }

          function Tf(b, c, d) {
            return b.filter(function (b) {
              var e = b.getAttribute("TYPE");
              b = b.getAttribute("GROUP-ID");
              return e.value == c && b.value == d
            })
          };

          function Uf(b) {
            this.b = b;
            this.a = 0
          }

          function Vf(b) {
            Wf(b, /[ \t]+/gm)
          }

          function Wf(b, c) {
            c.lastIndex = b.a;
            var d = c.exec(b.b);
            d = null == d ? null : {position: d.index, length: d[0].length, xe: d};
            if (b.a == b.b.length || null == d || d.position != b.a) return null;
            b.a += d.length;
            return d.xe
          }

          function Xf(b) {
            return b.a == b.b.length ? null : (b = Wf(b, /[^ \t\n]*/gm)) ? b[0] : null
          };

          function Yf() {
            this.a = 0
          }

          function Zf(b, c, d) {
            c = Kb(c);
            c = c.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n").trim();
            var e = c.split(/\n+/m);
            if (!/^#EXTM3U($|[ \t\n])/m.test(e[0])) throw new B(2, 4, 4015);
            c = 0;
            for (var f = 1; f < e.length; f++) if (!/^#(?!EXT)/m.test(e[f])) {
              var g = $f(b, e[f]);
              --b.a;
              if (0 <= ag.indexOf(g.name)) {
                c = 1;
                break
              } else "EXT-X-STREAM-INF" == g.name && (f += 1)
            }
            f = [];
            for (g = 1; g < e.length;) if (/^#(?!EXT)/m.test(e[g])) g += 1; else {
              var h = $f(b, e[g]);
              if (bg.includes(h.name)) {
                if (1 != c) throw new B(2, 4, 4017);
                e = e.splice(g, e.length - g);
                b = cg(b, d, e, f);
                return new Mf(d,
                        c, f, b)
              }
              f.push(h);
              g += 1;
              "EXT-X-STREAM-INF" == h.name && (h.a.push(new Of("URI", e[g])), g += 1)
            }
            return new Mf(d, c, f)
          }

          function cg(b, c, d, e) {
            var f = [], g = [];
            d.forEach(function (d) {
              if (/^(#EXT)/.test(d)) d = $f(b, d), 0 <= ag.indexOf(d.name) ? e.push(d) : g.push(d); else {
                if (/^#(?!EXT)/m.test(d)) return [];
                d = G([c], [d.trim()])[0];
                f.push(new Qf(d, g));
                g = []
              }
            });
            return f
          }

          function $f(b, c) {
            a:{
              var d = b.a++;
              var e = c.match(/^#(EXT[^:]*)(?::(.*))?$/);
              if (!e) throw new B(2, 4, 4016, c);
              var f = e[1], g = e[2];
              e = [];
              if (g && 0 <= g.indexOf("=")) {
                g = new Uf(g);
                for (var h, k = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g; h = Wf(g, k);) e.push(new Of(h[1], h[2] || h[3]))
              } else if (g) {
                d = new Nf(d, f, e, g);
                break a
              }
              d = new Nf(d, f, e)
            }
            return d
          }

          var ag = "EXT-X-TARGETDURATION EXT-X-MEDIA-SEQUENCE EXT-X-DISCONTINUITY-SEQUENCE EXT-X-PLAYLIST-TYPE EXT-X-MAP EXT-X-I-FRAMES-ONLY EXT-X-ENDLIST".split(" "),
                  bg = "EXTINF EXT-X-BYTERANGE EXT-X-DISCONTINUITY EXT-X-PROGRAM-DATE-TIME EXT-X-KEY EXT-X-DATERANGE".split(" ");

          function dg(b) {
            try {
              var c = dg.parse(b);
              return bb({uri: b, data: c.data, headers: {"content-type": c.contentType}})
            } catch (d) {
              return $a(d)
            }
          }

          z("shaka.net.DataUriPlugin", dg);
          dg.parse = function (b) {
            var c = b.split(":");
            if (2 > c.length || "data" != c[0]) throw new B(2, 1, 1004, b);
            c = c.slice(1).join(":").split(",");
            if (2 > c.length) throw new B(2, 1, 1004, b);
            var d = c[0];
            c = window.decodeURIComponent(c.slice(1).join(","));
            d = d.split(";");
            var e = null;
            1 < d.length && (e = d[1]);
            if ("base64" == e) b = Vb(c).buffer; else {
              if (e) throw new B(2, 1, 1005, b);
              b = Ob(c)
            }
            return {data: b, contentType: d[0]}
          };
          qb("data", dg);

          function eg() {
            this.g = this.c = null;
            this.M = 1;
            this.v = new Map;
            this.K = new Set;
            this.a = new Map;
            this.b = null;
            this.s = "";
            this.o = new Yf;
            this.j = this.i = null;
            this.f = fg;
            this.m = null;
            this.l = 0;
            this.A = Infinity;
            this.h = new nb;
            this.G = []
          }

          z("shaka.hls.HlsParser", eg);
          n = eg.prototype;
          n.configure = function (b) {
            this.g = b
          };
          n.start = function (b, c) {
            this.c = c;
            return gg(this, b).then(function (b) {
              this.s = b.uri;
              return hg(this, b.data).then(function () {
                ig(this, this.i);
                return this.m
              }.bind(this))
            }.bind(this))
          };
          n.stop = function () {
            this.g = this.c = null;
            this.v.clear();
            this.K.clear();
            this.a.clear();
            this.m = null;
            return this.h.destroy()
          };
          n.update = function () {
            if (this.f != kg.sa) {
              for (var b = [], c = p(this.a.values()), d = c.next(); !d.done; d = c.next()) b.push(lg(this, d.value));
              return Promise.all(b)
            }
          };

          function lg(b, c) {
            gg(b, c.dd).then(function (b) {
              var d = kg, f = Zf(this.o, b.data, b.uri);
              if (1 != f.type) throw new B(2, 4, 4017);
              b = Sf(f.a, "EXT-X-MEDIA-SEQUENCE");
              var g = c.stream;
              mg(this, c.zb, f, b ? Number(b.value) : 0, g.mimeType, g.codecs).then(function (b) {
                c.eb.a = b;
                b = b[b.length - 1];
                Sf(f.a, "EXT-X-ENDLIST") && (ng(this, d.sa), this.b.la(b.endTime))
              }.bind(this))
            }.bind(b))
          }

          n.onExpirationUpdated = function () {
          };

          function hg(b, c) {
            var d = Zf(b.o, c, b.s);
            if (0 != d.type) throw new B(2, 4, 4022);
            return og(b, d).then(function (b) {
              this.c.filterAllPeriods([b]);
              for (var c = Infinity, d = 0, e = 0, k = Infinity, l = p(this.a.values()), m = l.next(); !m.done; m = l.next()) m = m.value, c = Math.min(c, m.Rb), d = Math.max(d, m.Rb), e = Math.max(e, m.Gd), "text" != m.stream.type && (k = Math.min(k, m.duration));
              m = null;
              l = 0;
              this.f != kg.sa && (m = Date.now() / 1E3 - e, l = 3 * this.l);
              this.b = new U(m, l);
              this.b.yb(this.f == kg.sa);
              pg(this);
              if (this.f != kg.sa) {
                c = 3 * this.l;
                this.b.Sc(c);
                this.i = this.A;
                this.f == kg.jc && (isNaN(this.g.availabilityWindowOverride) || (c = this.g.availabilityWindowOverride), this.b.dc(c));
                for (c = 0; 95443.7176888889 <= d;) c += 95443.7176888889, d -= 95443.7176888889;
                if (c) for (d = p(this.a.values()), m = d.next(); !m.done; m = d.next()) k = m.value, 95443.7176888889 > k.Rb && (k.stream.presentationTimeOffset = -c, k.eb.offset(c))
              } else for (this.b.la(k), d = p(this.a.values()), m = d.next(); !m.done; m = d.next()) e = m.value, e.stream.presentationTimeOffset = c, e.eb.offset(-c), We(e.eb, k);
              this.m = {
                presentationTimeline: this.b,
                periods: [b], offlineSessionIds: [], minBufferTime: 0
              }
            }.bind(b))
          }

          function og(b, c) {
            var d = c.a, e = Rf(c.a, "EXT-X-MEDIA").filter(function (b) {
              return "SUBTITLES" == qg(b, "TYPE")
            }.bind(b)).map(function (b) {
              return rg(this, b)
            }.bind(b));
            return Promise.all(e).then(function (b) {
              var e = Rf(d, "EXT-X-STREAM-INF").map(function (b) {
                return sg(this, b, c)
              }.bind(this));
              return Promise.all(e).then(function (c) {
                return {startTime: 0, variants: c.reduce(Cb, []), textStreams: b}
              }.bind(this))
            }.bind(b))
          }

          function sg(b, c, d) {
            var e = Pf(c, "CODECS", "avc1.42E01E,mp4a.40.2").split(/\s*,\s*/), f = c.getAttribute("RESOLUTION"),
                    g = null, h = null, k = Pf(c, "FRAME-RATE"), l = Number(qg(c, "BANDWIDTH"));
            if (f) {
              var m = f.value.split("x");
              g = m[0];
              h = m[1]
            }
            d = Rf(d.a, "EXT-X-MEDIA");
            d = d.filter(function (b) {
              return "CLOSED-CAPTIONS" != qg(b, "TYPE")
            });
            d = d.filter(function (b) {
              var c = Pf(b, "URI") || "";
              return "SUBTITLES" == (Pf(b, "TYPE") || "") || "" != c
            });
            var r = Pf(c, "AUDIO"), t = Pf(c, "VIDEO");
            r ? d = Tf(d, "AUDIO", r) : t && (d = Tf(d, "VIDEO", t));
            if (m = tg("text", e)) {
              var u =
                      Pf(c, "SUBTITLES");
              u && (u = Tf(d, "SUBTITLES", u), u.length && (b.v.get(u[0].id).stream.codecs = m));
              e.splice(e.indexOf(m), 1)
            }
            d = d.map(function (b) {
              return ug(this, b, e)
            }.bind(b));
            var y = [], w = [];
            return Promise.all(d).then(function (b) {
              r ? y = b : t && (w = b);
              b = !1;
              if (y.length || w.length) if (y.length) if (qg(c, "URI") == y[0].zb) {
                var d = "audio";
                b = !0
              } else d = "video"; else d = "audio"; else 1 == e.length ? (d = tg("video", e), d = f || k || d ? "video" : "audio") : (d = "video", e = [e.join(",")]);
              return b ? Promise.resolve() : vg(this, c, e, d)
            }.bind(b)).then(function (b) {
              b &&
              ("audio" == b.stream.type ? y = [b] : w = [b]);
              w && wg(w);
              y && wg(y);
              return xg(this, y, w, l, g, h, k)
            }.bind(b))
          }

          function wg(b) {
            b.forEach(function (b) {
              var c = b.stream.codecs.split(",");
              c = c.filter(function (b) {
                return "mp4a.40.34" != b
              });
              b.stream.codecs = c.join(",")
            })
          }

          function xg(b, c, d, e, f, g, h) {
            d.forEach(function (b) {
              if (b = b.stream) b.width = Number(f) || void 0, b.height = Number(g) || void 0, b.frameRate = Number(h) || void 0
            }.bind(b));
            c.length || (c = [null]);
            d.length || (d = [null]);
            for (var k = [], l = 0; l < c.length; l++) for (var m = 0; m < d.length; m++) {
              var r = c[l] ? c[l].stream : null, t = d[m] ? d[m].stream : null, u = c[l] ? c[l].drmInfos : null,
                      y = d[m] ? d[m].drmInfos : null, w = void 0;
              if (r && t) if (u.length && y.length ? 0 < uc(u, y).length : 1) w = uc(u, y); else continue; else r ? w = u : t && (w = y);
              u = (d[l] ? d[l].zb : "") + " - " + (c[l] ? c[l].zb :
                      "");
              b.K.has(u) || (r = yg(b, r, t, e, w), k.push(r), b.K.add(u))
            }
            return k
          }

          function yg(b, c, d, e, f) {
            return {
              id: b.M++,
              language: c ? c.language : "und",
              primary: !!c && c.primary || !!d && d.primary,
              audio: c,
              video: d,
              bandwidth: e,
              drmInfos: f,
              allowedByApplication: !0,
              allowedByKeySystem: !0
            }
          }

          function rg(b, c) {
            qg(c, "TYPE");
            return ug(b, c, []).then(function (b) {
              return b.stream
            })
          }

          function ug(b, c, d) {
            var e = qg(c, "URI");
            if (b.a.has(e)) return Promise.resolve(b.a.get(e));
            var f = qg(c, "TYPE").toLowerCase();
            "subtitles" == f && (f = "text");
            var g = ld(Pf(c, "LANGUAGE", "und")), h = Pf(c, "NAME"), k = c.getAttribute("DEFAULT"),
                    l = c.getAttribute("AUTOSELECT"), m = Pf(c, "CHANNELS");
            return zg(b, e, d, f, g, !!k || !!l, h, "audio" == f ? Ag(m) : null).then(function (b) {
              if (this.a.has(e)) return this.a.get(e);
              this.v.set(c.id, b);
              this.a.set(e, b);
              return b
            }.bind(b))
          }

          function Ag(b) {
            if (!b) return null;
            b = b.split("/")[0];
            return parseInt(b, 10)
          }

          function vg(b, c, d, e) {
            var f = qg(c, "URI");
            return b.a.has(f) ? Promise.resolve(b.a.get(f)) : zg(b, f, d, e, "und", !1, null, null).then(function (b) {
              if (this.a.has(f)) return this.a.get(f);
              this.a.set(f, b);
              return b
            }.bind(b))
          }

          function zg(b, c, d, e, f, g, h, k) {
            var l = G([b.s], [c])[0], m, r = "", t;
            return gg(b, l).then(function (c) {
              l = c.uri;
              m = Zf(b.o, c.data, l);
              if (1 != m.type) throw new B(2, 4, 4017);
              c = m;
              var f = kg, g = Sf(c.a, "EXT-X-PLAYLIST-TYPE"), h = Sf(c.a, "EXT-X-ENDLIST");
              h = g && "VOD" == g.value || h;
              g = g && "EVENT" == g.value && !h;
              g = !h && !g;
              h ? ng(b, f.sa) : (g ? ng(b, f.jc) : ng(b, f.Zc), c = Bg(c.a, "EXT-X-TARGETDURATION"), c = Number(c.value), b.l = Math.max(c, b.l), b.A = Math.min(c, b.A));
              if (1 == d.length) r = d[0]; else if (c = tg(e, d), null != c) r = c; else throw new B(2, 4, 4025, d);
              return Cg(b,
                      e, r, m)
            }).then(function (d) {
              t = d;
              d = Sf(m.a, "EXT-X-MEDIA-SEQUENCE");
              return mg(b, c, m, d ? Number(d.value) : 0, t, r)
            }).then(function (d) {
              var u = d[0].startTime, w = d[d.length - 1].endTime, pa = w - u;
              d = new T(d);
              var Cc = Dg(m), jg = void 0;
              "text" == e && (jg = "subtitle");
              var Rd = [];
              m.segments.forEach(function (b) {
                b = Rf(b.b, "EXT-X-KEY");
                Rd.push.apply(Rd, b)
              });
              var Sd = !1, Td = [], Qb = null;
              Rd.forEach(function (b) {
                if ("NONE" != qg(b, "METHOD")) {
                  Sd = !0;
                  var c = qg(b, "KEYFORMAT");
                  if (b = (c = Eg[c]) ? c(b) : null) b.keyIds.length && (Qb = b.keyIds[0]), Td.push(b)
                }
              });
              if (Sd &&
                      !Td.length) throw new B(2, 4, 4026);
              return {
                stream: {
                  id: b.M++,
                  createSegmentIndex: Promise.resolve.bind(Promise),
                  findSegmentPosition: d.find.bind(d),
                  getSegmentReference: d.get.bind(d),
                  initSegmentReference: Cc,
                  presentationTimeOffset: 0,
                  mimeType: t,
                  codecs: r,
                  kind: jg,
                  encrypted: Sd,
                  keyId: Qb,
                  language: f,
                  label: h || null,
                  type: e,
                  primary: g,
                  trickModeVideo: null,
                  containsEmsgBoxes: !1,
                  frameRate: void 0,
                  width: void 0,
                  height: void 0,
                  bandwidth: void 0,
                  roles: [],
                  channelsCount: k
                }, eb: d, drmInfos: Td, zb: c, dd: l, Rb: u, Gd: w, duration: pa
              }
            })
          }

          function Dg(b) {
            var c = Rf(b.a, "EXT-X-MAP");
            if (!c.length) return null;
            if (1 < c.length) throw new B(2, 4, 4020);
            c = c[0];
            var d = qg(c, "URI"), e = G([b.b], [d])[0];
            b = 0;
            d = null;
            if (c = Pf(c, "BYTERANGE")) b = c.split("@"), c = Number(b[0]), b = Number(b[1]), d = b + c - 1;
            return new Ne(function () {
              return [e]
            }, b, d)
          }

          function Fg(b, c, d, e) {
            var f = c.b, g = c.a;
            c = Bg(f, "EXTINF").value.split(",");
            c = e + Number(c[0]);
            var h = 0, k = null;
            if (f = Sf(f, "EXT-X-BYTERANGE")) h = f.value.split("@"), f = Number(h[0]), h = h[1] ? Number(h[1]) : b.a + 1, k = h + f - 1;
            return new P(d, e, c, function () {
              return [g]
            }, h, k)
          }

          function pg(b) {
            b.b && (b.G.forEach(function (c) {
              b.b.Na(c, !0)
            }), b.G = [])
          }

          function mg(b, c, d, e, f, g) {
            var h = d.segments, k = [], l = h[0].a, m = Fg(null, h[0], e, 0);
            d = Dg(d);
            return Gg(b, c, d, m, f, g).then(function (b) {
              l.split("/").pop();
              for (var c = 0; c < h.length; ++c) {
                var d = k[k.length - 1];
                d = Fg(d, h[c], e + c, 0 == c ? b : d.endTime);
                k.push(d)
              }
              this.G.push(k);
              pg(this);
              return k
            }.bind(b))
          }

          function Hg(b, c) {
            var d = b.c.networkingEngine, e = rb(c.c(), b.g.retryParameters), f = {}, g = c.b;
            f.Range = "bytes=" + g + "-" + (g + 2048 - 1);
            var h = {};
            if (0 != g || null != c.a) g = "bytes=" + g + "-", null != c.a && (g += c.a), h.Range = g;
            e.headers = f;
            f = d.request(1, e);
            ob(b.h, f);
            return f.promise["catch"](function () {
              Ga("Unable to fetch a partial HLS segment! Falling back to a full segment request, which is expensive!  Your server should support Range requests and CORS preflights.", e.uris[0]);
              e.headers = h;
              var c = d.request(1, e);
              ob(b.h, c);
              return c.promise
            })
          }

          function Gg(b, c, d, e, f, g) {
            if (b.m && (c = b.a.get(c).eb.get(e.position))) return Promise.resolve(c.startTime);
            e = [Hg(b, e)];
            if ("video/mp4" == f || "audio/mp4" == f) d ? e.push(Hg(b, d)) : e.push(e[0]);
            return Promise.all(e).then(function (b) {
              if ("video/mp4" == f || "audio/mp4" == f) return Ig(b[0].data, b[1].data);
              if ("audio/mpeg" == f) return 0;
              if ("video/mp2t" == f) return Jg(b[0].data);
              if ("application/mp4" == f || 0 == f.indexOf("text/")) {
                b = b[0].data;
                var c = Ib(f, g);
                if (J[c]) {
                  var d = new Uc(null);
                  d.f = new J[c];
                  b = d.Lb(b)
                } else b = 0;
                return b
              }
              throw new B(2,
                      4, 4030);
            }.bind(b))
          }

          function Ig(b, c) {
            var d = 0;
            (new R).C("moov", S).C("trak", S).C("mdia", S).Y("mdhd", function (b) {
              b.reader.F(0 == b.version ? 8 : 16);
              d = b.reader.B();
              b.parser.stop()
            }).parse(c, !0);
            if (!d) throw new B(2, 4, 4030);
            var e = 0, f = !1;
            (new R).C("moof", S).C("traf", S).Y("tfdt", function (b) {
              e = (0 == b.version ? b.reader.B() : b.reader.Ra()) / d;
              f = !0;
              b.parser.stop()
            }).parse(b, !0);
            if (!f) throw new B(2, 4, 4030);
            return e
          }

          function Jg(b) {
            function c() {
              throw new B(2, 4, 4030);
            }

            b = new Q(new DataView(b), 0);
            for (var d = 0, e = 0; ;) if (d = b.V(), e = b.ba(), 71 != e && c(), b.bb() & 16384 || c(), e = (b.ba() & 48) >> 4, 0 != e && 2 != e || c(), 3 == e && (e = b.ba(), b.F(e)), 1 != b.B() >> 8) b.seek(d + 188), e = b.ba(), 71 != e && (b.seek(d + 192), e = b.ba()), 71 != e && (b.seek(d + 204), e = b.ba()), 71 != e && c(), b.Oc(1); else return b.F(3), d = b.ba() >> 6, 0 != d && 1 != d || c(), 0 == b.ba() && c(), d = b.ba(), e = b.bb(), b = b.bb(), (1073741824 * ((d & 14) >> 1) + ((e & 65534) << 14 | (b & 65534) >> 1)) / 9E4
          }

          function tg(b, c) {
            for (var d = Kg[b], e = 0; e < d.length; e++) for (var f = 0; f < c.length; f++) if (d[e].test(c[f].trim())) return c[f].trim();
            return "text" == b ? "" : null
          }

          function Cg(b, c, d, e) {
            e = e.segments[0].a;
            var f = (new Ja(e)).$.split(".").pop(), g = Lg[c][f];
            if (g) return Promise.resolve(g);
            if ("text" == c) return d && "vtt" != d ? Promise.resolve("application/mp4") : Promise.resolve("text/vtt");
            c = rb([e], b.g.retryParameters);
            c.method = "HEAD";
            c = b.c.networkingEngine.request(1, c);
            ob(b.h, c);
            return c.promise.then(function (b) {
              b = b.headers["content-type"];
              if (!b) throw new B(2, 4, 4021, f);
              return b.split(";")[0]
            })
          }

          function qg(b, c) {
            var d = b.getAttribute(c);
            if (!d) throw new B(2, 4, 4023, c);
            return d.value
          }

          function Bg(b, c) {
            var d = Sf(b, c);
            if (!d) throw new B(2, 4, 4024, c);
            return d
          }

          function gg(b, c) {
            var d = b.c.networkingEngine.request(0, rb([c], b.g.retryParameters));
            ob(b.h, d);
            return d.promise
          }

          var Kg = {
            audio: [/^vorbis$/, /^opus$/, /^flac$/, /^mp4a/, /^[ae]c-3$/],
            video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av1$/],
            text: [/^vtt$/, /^wvtt/, /^stpp/]
          }, Lg = {
            audio: {mp4: "audio/mp4", m4s: "audio/mp4", m4i: "audio/mp4", m4a: "audio/mp4", ts: "video/mp2t"},
            video: {mp4: "video/mp4", m4s: "video/mp4", m4i: "video/mp4", m4v: "video/mp4", ts: "video/mp2t"},
            text: {
              mp4: "application/mp4",
              m4s: "application/mp4",
              m4i: "application/mp4",
              vtt: "text/vtt",
              ttml: "application/ttml+xml"
            }
          };
          eg.prototype.T = function () {
            this.c && (this.j = null, this.update().then(function () {
              ig(this, this.i)
            }.bind(this))["catch"](function (b) {
              this.c && (b.severity = 1, this.c.onError(b), ig(this, 0))
            }.bind(this)))
          };

          function ig(b, c) {
            null != b.i && null != c && (b.j = window.setTimeout(b.T.bind(b), 1E3 * c))
          }

          function ng(b, c) {
            b.f = c;
            b.b && b.b.yb(b.f == kg.sa);
            b.f == kg.sa && null != b.j && (window.clearTimeout(b.j), b.j = null, b.i = null)
          }

          var Eg = {
            "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": function (b) {
              var c = qg(b, "METHOD");
              if ("SAMPLE-AES-CENC" != c && "SAMPLE-AES-CTR" != c) return null;
              c = qg(b, "URI");
              c = dg.parse(c);
              c = new Uint8Array(c.data);
              c = Gb("com.widevine.alpha", [{initDataType: "cenc", initData: c}]);
              if (b = Pf(b, "KEYID")) c.keyIds = [b.substr(2).toLowerCase()];
              return c
            }
          }, fg = "VOD", kg = {sa: fg, Zc: "EVENT", jc: "LIVE"};
          uf.m3u8 = eg;
          tf["application/x-mpegurl"] = eg;
          tf["application/vnd.apple.mpegurl"] = eg;

          function Mg(b, c, d, e) {
            this.a = b;
            this.s = c;
            this.o = d;
            this.v = e;
            this.h = new xb;
            this.b = null;
            this.g = !1;
            this.m = b.readyState;
            this.c = !1;
            this.j = this.A = -1;
            this.f = this.i = !1;
            c = this.l.bind(this);
            E(this.h, b, "waiting", c);
            this.b = new Pb(c);
            Tb(this.b, .25)
          }

          Mg.prototype.destroy = function () {
            var b = this.h.destroy();
            this.v = this.s = this.a = this.h = null;
            null != this.b && (this.b.cancel(), this.b = null);
            return b
          };
          Mg.prototype.ab = function () {
            this.f = !0;
            this.l()
          };
          Mg.prototype.l = function () {
            if (0 != this.a.readyState) {
              if (this.a.seeking) {
                if (!this.g) return
              } else this.g = !1;
              if (!this.a.paused) {
                this.a.readyState != this.m && (this.c = !1, this.m = this.a.readyState);
                var b = this.o.smallGapLimit, c = this.a.currentTime, d = this.a.buffered;
                a:{
                  if (d && d.length && !(1 == d.length && 1E-6 > d.end(0) - d.start(0))) {
                    var e = .1;
                    /(Edge\/|Trident\/|Tizen|CrKey)/.test(navigator.userAgent) && (e = .5);
                    for (var f = 0; f < d.length; f++) if (d.start(f) > c && (0 == f || d.end(f - 1) - c <= e)) {
                      e = f;
                      break a
                    }
                  }
                  e = null
                }
                if (null == e) {
                  if (d = this.a.currentTime,
                          c = this.a.buffered, !this.a.paused && 0 < this.a.playbackRate) if (this.j != d) this.j = d, this.A = Date.now(), this.i = !1; else if (!this.i && this.A < Date.now() - 1E3) for (e = 0; e < c.length; e++) if (d >= c.start(e) && d < c.end(e) - .5) {
                    this.a.currentTime += .1;
                    this.j = this.a.currentTime;
                    this.i = !0;
                    break
                  }
                } else if (0 != e || this.f) {
                  f = d.start(e);
                  var g = this.s.presentationTimeline.na();
                  if (!(f >= g)) {
                    g = f - c;
                    b = g <= b;
                    var h = !1;
                    .001 > g || (b || this.c || (this.c = !0, c = new F("largegap", {
                      currentTime: c,
                      gapSize: g
                    }), c.cancelable = !0, this.v(c), this.o.jumpLargeGaps && !c.defaultPrevented &&
                    (h = !0)), !b && !h) || (0 != e && d.end(e - 1), this.a.currentTime = f)
                  }
                }
              }
            }
          };

          function Ng(b, c, d) {
            this.a = b;
            this.i = c;
            this.h = d;
            this.c = new xb;
            this.f = 1;
            this.g = !1;
            this.b = null;
            0 < b.readyState ? this.Fc() : Ab(this.c, b, "loadedmetadata", this.Fc.bind(this));
            E(this.c, b, "ratechange", this.Wd.bind(this))
          }

          n = Ng.prototype;
          n.destroy = function () {
            var b = this.c.destroy();
            this.c = null;
            null != this.b && (this.b.cancel(), this.b = null);
            this.i = this.a = null;
            return b
          };

          function Og(b) {
            return 0 < b.a.readyState ? b.a.currentTime : b.h
          }

          function Pg(b, c) {
            0 < b.a.readyState ? Qg(b, b.a.currentTime, c) : (b.h = c, setTimeout(b.i, 0))
          }

          n.Va = function () {
            return this.f
          };

          function Rg(b, c) {
            null != b.b && (b.b.cancel(), b.b = null);
            b.f = c;
            b.a.playbackRate = b.g || 0 > c ? 0 : c;
            !b.g && 0 > c && (b.b = new Pb(function () {
              b.a.currentTime += c / 4
            }), Tb(b.b, .25))
          }

          n.Wd = function () {
            var b = this.g || 0 > this.f ? 0 : this.f;
            this.a.playbackRate && this.a.playbackRate != b && Rg(this, this.a.playbackRate)
          };
          n.Fc = function () {
            .001 > Math.abs(this.a.currentTime - this.h) ? this.Gc() : (Ab(this.c, this.a, "seeking", this.Gc.bind(this)), this.a.currentTime = 0 == this.a.currentTime ? this.h : this.a.currentTime)
          };
          n.Gc = function () {
            var b = this;
            E(this.c, this.a, "seeking", function () {
              return b.i()
            })
          };

          function Qg(b, c, d) {
            function e() {
              !b.a || 10 <= f++ || b.a.currentTime != c || (b.a.currentTime = d, setTimeout(e, 100))
            }

            b.a.currentTime = d;
            var f = 0;
            setTimeout(e, 100)
          };

          function Sg(b, c, d, e, f, g) {
            this.c = b;
            this.b = c;
            this.h = d;
            this.j = f;
            this.f = null;
            this.g = new Mg(b, c, d, g);
            c = this.Yd.bind(this);
            d = this.b.presentationTimeline;
            null == e ? e = Infinity > d.U() ? d.Ja() : d.na() : 0 > e && (e = d.na() + e);
            e = Tg(this, Ug(this, e));
            this.a = new Ng(b, c, e);
            this.f = new Pb(this.Vd.bind(this));
            Tb(this.f, .25)
          }

          n = Sg.prototype;
          n.destroy = function () {
            var b = Promise.all([this.a.destroy(), this.g.destroy()]);
            this.g = this.a = null;
            null != this.f && (this.f.cancel(), this.f = null);
            this.j = this.h = this.b = this.c = null;
            return b
          };

          function Vg(b) {
            var c = Og(b.a);
            0 < b.c.readyState && (b.c.paused || (c = Ug(b, c)));
            return c
          }

          n.Va = function () {
            return this.a.Va()
          };
          n.ab = function () {
            this.g.ab()
          };
          n.Vd = function () {
            if (0 != this.c.readyState && !this.c.paused) {
              var b = this.c.currentTime, c = this.b.presentationTimeline, d = c.Ja();
              c = c.na();
              3 > c - d && (d = c - 3);
              b < d && (b = Wg(this, b), this.c.currentTime = b)
            }
          };
          n.Yd = function () {
            var b = this.g;
            b.g = !0;
            b.f = !1;
            b.c = !1;
            var c = Og(this.a);
            b = Wg(this, c);
            if (.001 < Math.abs(b - c) && (c = (new Date).getTime() / 1E3, !this.i || this.i < c - 1)) {
              this.i = c;
              Pg(this.a, b);
              return
            }
            this.j()
          };

          function Tg(b, c) {
            var d = b.b.presentationTimeline.U();
            return c >= d ? d - b.h.durationBackoff : c
          }

          function Wg(b, c) {
            var d = xc.bind(null, b.c.buffered), e = Math.max(b.b.minBufferTime || 0, b.h.rebufferingGoal),
                    f = b.b.presentationTimeline, g = f.Ja(), h = f.na(), k = f.U();
            3 > h - g && (g = h - 3);
            var l = f.Wa(e), m = f.Wa(5);
            e = f.Wa(e + 5);
            return c >= k ? Tg(b, c) : c > h ? h : c < g ? d(m) ? m : e : c >= l || d(c) ? c : e
          }

          function Ug(b, c) {
            var d = b.b.presentationTimeline.Ja();
            if (c < d) return d;
            d = b.b.presentationTimeline.na();
            return c > d ? d : c
          };

          function Xg(b, c, d, e, f, g, h) {
            this.a = b;
            this.v = c;
            this.g = d;
            this.s = e;
            this.l = f;
            this.h = g;
            this.A = h;
            this.c = [];
            this.j = new xb;
            this.b = !1;
            this.i = -1;
            this.f = null;
            Yg(this)
          }

          Xg.prototype.destroy = function () {
            var b = this.j ? this.j.destroy() : Promise.resolve();
            this.j = null;
            Zg(this);
            this.A = this.h = this.l = this.s = this.g = this.v = this.a = null;
            this.c = [];
            return b
          };
          Xg.prototype.o = function (b) {
            if (!this.c.some(function (c) {
              return c.info.schemeIdUri == b.schemeIdUri && c.info.startTime == b.startTime && c.info.endTime == b.endTime
            })) {
              var c = {info: b, status: 1};
              this.c.push(c);
              var d = new F("timelineregionadded", {detail: $g(b)});
              this.h(d);
              this.m(!0, c)
            }
          };

          function $g(b) {
            var c = lb(b);
            c.eventElement = b.eventElement;
            return c
          }

          Xg.prototype.m = function (b, c) {
            var d = c.info.startTime > this.a.currentTime ? 1 : c.info.endTime < this.a.currentTime ? 3 : 2,
                    e = 2 == c.status, f = 2 == d;
            if (d != c.status) {
              if (!b || e || f) e || this.h(new F("timelineregionenter", {detail: $g(c.info)})), f || this.h(new F("timelineregionexit", {detail: $g(c.info)}));
              c.status = d
            }
          };

          function Yg(b) {
            Zg(b);
            b.f = window.setTimeout(b.G.bind(b), 250)
          }

          function Zg(b) {
            b.f && (window.clearTimeout(b.f), b.f = null)
          }

          Xg.prototype.G = function () {
            this.f = null;
            Yg(this);
            var b = Hd(this.g, this.a.currentTime);
            b != this.i && (-1 != this.i && this.A(), this.i = b);
            b = yc(this.a.buffered, this.a.currentTime);
            var c = wc(this.a.buffered), d = this.g.presentationTimeline, e = d.Ka();
            c = d.R() && c >= e;
            d = this.v;
            d = d.g ? "ended" == d.g.readyState : !0;
            c = c || this.a.ended || d;
            this.b ? (d = Math.max(this.g.minBufferTime || 0, this.s.rebufferingGoal), (c || b >= d) && 0 != this.b && (this.b = !1, this.l(!1))) : !c && .5 > b && 1 != this.b && (this.b = !0, this.l(!0));
            this.c.forEach(this.m.bind(this, !1))
          };

          function ah(b, c) {
            this.a = c;
            this.b = b;
            this.g = null;
            this.j = 1;
            this.m = Promise.resolve();
            this.h = [];
            this.i = {};
            this.c = {};
            this.o = !1;
            this.A = null;
            this.v = this.f = this.l = !1;
            this.s = 0
          }

          n = ah.prototype;
          n.destroy = function () {
            for (var b in this.c) bh(this.c[b]);
            this.g = this.c = this.i = this.h = this.m = this.b = this.a = null;
            this.f = !0;
            return Promise.resolve()
          };
          n.configure = function (b) {
            this.g = b;
            this.A = new Xa({
              maxAttempts: Math.max(b.retryParameters.maxAttempts, 2),
              baseDelay: b.retryParameters.baseDelay,
              backoffFactor: b.retryParameters.backoffFactor,
              fuzzFactor: b.retryParameters.fuzzFactor,
              timeout: 0
            }, !0)
          };
          n.init = function () {
            var b = Vg(this.a.Pa);
            b = this.a.Ac(this.b.periods[Hd(this.b, b)]);
            return b.variant || b.text ? ch(this, b).then(function () {
              !this.f && this.a && this.a.Md && this.a.Md()
            }.bind(this)) : Promise.reject(new B(2, 5, 5005))
          };

          function V(b) {
            var c = Vg(b.a.Pa);
            return b.b.periods[Hd(b.b, c)]
          }

          function dh(b) {
            var c = b.c.video || b.c.audio;
            return c ? b.b.periods[c.Ba] : null
          }

          function eh(b) {
            return fh(b, "audio")
          }

          function gh(b) {
            return fh(b, "video")
          }

          function fh(b, c) {
            var d = b.c[c];
            return d ? d.ta || d.stream : null
          }

          function hh(b, c) {
            ed(b.a.I, "text");
            b.s++;
            b.v = !1;
            var d = b.s;
            return b.a.I.init({text: c}, !1).then(function () {
              return ih(b, [c])
            }).then(function () {
              if (!b.f && b.s == d && !b.c.text && !b.v) {
                var e = Vg(b.a.Pa);
                b.c.text = jh(c, Hd(b.b, e));
                kh(b, b.c.text, 0)
              }
            })
          }

          function lh(b) {
            b.v = !0;
            b.c.text && (bh(b.c.text), delete b.c.text)
          }

          function mh(b, c) {
            var d = b.c.video;
            if (d) {
              var e = d.stream;
              if (e) if (c) {
                var f = e.trickModeVideo;
                f && !d.ta && (nh(b, f, !1), d.ta = e)
              } else if (e = d.ta) d.ta = null, nh(b, e, !0)
            }
          }

          function oh(b, c, d) {
            c.video && nh(b, c.video, d);
            c.audio && nh(b, c.audio, d)
          }

          function nh(b, c, d) {
            var e = b.c[c.type];
            if (!e && "text" == c.type && b.g.ignoreTextStreamFailures) hh(b, c); else if (e) {
              var f = Id(b.b, c);
              d && f != e.Ba ? ph(b) : (e.ta && (c.trickModeVideo ? (e.ta = c, c = c.trickModeVideo) : e.ta = null), (f = b.h[f]) && f.Sa && (f = b.i[c.id]) && f.Sa && e.stream != c && ("text" == c.type && Yc(b.a.I, Ib(c.mimeType, c.codecs)), e.stream = c, e.wb = !0, d && (e.ya ? e.Ab = !0 : e.Ca ? (e.wa = !0, e.Ab = !0) : (bh(e), qh(b, e, !0)))))
            }
          }

          function rh(b) {
            var c = Vg(b.a.Pa), d = b.g.smallGapLimit;
            Object.keys(b.c).every(function (b) {
              var e = this.a.I;
              "text" == b ? (b = e.a, b = c >= b.a && c < b.b) : (b = $c(e, b), b = xc(b, c, d));
              return b
            }.bind(b)) || ph(b)
          }

          function ph(b) {
            for (var c in b.c) {
              var d = b.c[c];
              d.ya || d.wa || (d.Ca ? d.wa = !0 : null == Zc(b.a.I, c) ? null == d.va && kh(b, d, 0) : (bh(d), qh(b, d, !1)))
            }
          }

          function ch(b, c, d) {
            var e = Vg(b.a.Pa), f = Hd(b.b, e), g = {}, h = [];
            c.variant && c.variant.audio && (g.audio = c.variant.audio, h.push(c.variant.audio));
            c.variant && c.variant.video && (g.video = c.variant.video, h.push(c.variant.video));
            c.text && (g.text = c.text, h.push(c.text));
            return b.a.I.init(g, b.g.forceTransmuxTS).then(function () {
              if (!b.f) {
                var c = b.b.presentationTimeline.U();
                Infinity > c ? b.a.I.la(c) : b.a.I.la(Math.pow(2, 32));
                return ih(b, h)
              }
            }).then(function () {
              if (!b.f) for (var c in g) {
                var e = g[c];
                b.c[c] || (b.c[c] = jh(e, f, d), kh(b,
                        b.c[c], 0))
              }
            })
          }

          function jh(b, c, d) {
            return {
              stream: b,
              type: b.type,
              La: null,
              oa: null,
              ta: null,
              wb: !0,
              Ba: c,
              endOfStream: !1,
              Ca: !1,
              va: null,
              wa: !1,
              Ab: !1,
              ya: !1,
              $b: !1,
              Ya: !1,
              Nc: d || 0
            }
          }

          function sh(b, c) {
            var d = b.h[c];
            if (d) return d.promise;
            d = {promise: new A, Sa: !1};
            b.h[c] = d;
            var e = b.b.periods[c].variants.map(function (b) {
              var c = [];
              b.audio && c.push(b.audio);
              b.video && c.push(b.video);
              b.video && b.video.trickModeVideo && c.push(b.video.trickModeVideo);
              return c
            }).reduce(Cb, []).filter(Fb);
            e.push.apply(e, b.b.periods[c].textStreams);
            b.m = b.m.then(function () {
              if (!this.f) return ih(this, e)
            }.bind(b)).then(function () {
              this.f || (this.h[c].promise.resolve(), this.h[c].Sa = !0)
            }.bind(b))["catch"](function (b) {
              this.f ||
              (this.h[c].promise["catch"](function () {
              }), this.h[c].promise.reject(), delete this.h[c], this.a.onError(b))
            }.bind(b));
            return d.promise
          }

          function ih(b, c) {
            c.map(function (b) {
              return b.id
            }).filter(Fb);
            for (var d = [], e = 0; e < c.length; ++e) {
              var f = c[e], g = b.i[f.id];
              g ? d.push(g.promise) : (b.i[f.id] = {promise: new A, Sa: !1}, d.push(f.createSegmentIndex()))
            }
            return Promise.all(d).then(function () {
              if (!this.f) for (var b = 0; b < c.length; ++b) {
                var d = this.i[c[b].id];
                d.Sa || (d.promise.resolve(), d.Sa = !0)
              }
            }.bind(b))["catch"](function (b) {
              if (!this.f) {
                for (var d = 0; d < c.length; d++) this.i[c[d].id].promise["catch"](function () {
                }), this.i[c[d].id].promise.reject(), delete this.i[c[d].id];
                return Promise.reject(b)
              }
            }.bind(b))
          }

          n.Se = function (b) {
            if (!this.f && !b.Ca && null != b.va && !b.ya) if (b.va = null, b.wa) qh(this, b, b.Ab); else {
              try {
                var c = th(this, b);
                null != c && (kh(this, b, c), b.Ya = !1)
              } catch (d) {
                uh(this, d);
                return
              }
              c = H.values(this.c);
              vh(this, b);
              c.every(function (b) {
                return b.endOfStream
              }) && this.a.I.endOfStream().then(function () {
                if (!this.f) {
                  var b = this.a.I.U();
                  b < this.b.presentationTimeline.U() && this.b.presentationTimeline.la(b)
                }
              }.bind(this))
            }
          };

          function th(b, c) {
            var d = Vg(b.a.Pa), e = wh(b, c, d), f = Id(b.b, c.stream), g = Hd(b.b, e), h = bd(b.a.I, c.type, d),
                    k = Math.max(b.j * Math.max(b.b.minBufferTime || 0, b.g.rebufferingGoal), b.j * b.g.bufferingGoal);
            if (e >= b.b.presentationTimeline.U()) return c.endOfStream = !0, null;
            c.endOfStream = !1;
            c.Ba = g;
            if (g != f) return null;
            if (h >= k) return .5;
            g = ad(b.a.I, c.type);
            g = xh(b, c, d, g, f);
            if (!g) return 1;
            var l = Infinity;
            H.values(b.c).forEach(function (c) {
              l = Math.min(l, wh(b, c, d))
            });
            if (e >= l + b.b.presentationTimeline.a) return 1;
            c.Nc = 0;
            yh(b, c, d, f, g);
            return null
          }

          function wh(b, c, d) {
            return c.La && c.oa ? b.b.periods[Id(b.b, c.La)].startTime + c.oa.endTime : Math.max(d, c.Nc)
          }

          function xh(b, c, d, e, f) {
            if (c.oa && c.stream == c.La) return zh(b, c, f, c.oa.position + 1);
            d = c.oa ? c.stream.findSegmentPosition(Math.max(0, b.b.periods[Id(b.b, c.La)].startTime + c.oa.endTime - b.b.periods[f].startTime)) : c.stream.findSegmentPosition(Math.max(0, (e || d) - b.b.periods[f].startTime));
            if (null == d) return null;
            var g = null;
            null == e && (g = zh(b, c, f, Math.max(0, d - 1)));
            return g || zh(b, c, f, d)
          }

          function zh(b, c, d, e) {
            d = b.b.periods[d];
            c = c.stream.getSegmentReference(e);
            if (!c) return null;
            e = b.b.presentationTimeline;
            b = e.Xa();
            e = e.Ka();
            return d.startTime + c.endTime < b || d.startTime + c.startTime > e ? null : c
          }

          function yh(b, c, d, e, f) {
            var g = b.b.periods[e], h = c.stream, k = b.b.presentationTimeline.U(), l = b.b.periods[e + 1];
            e = Ah(b, c, e, Math.max(0, g.startTime - .1), l ? l.startTime + .01 : k);
            c.Ca = !0;
            c.wb = !1;
            k = Bh(b, f);
            Promise.all([e, k]).then(function (b) {
              if (!this.f && !this.l) return Ch(this, c, d, g, h, f, b[1])
            }.bind(b)).then(function () {
              this.f || this.l || (c.Ca = !1, c.$b = !1, c.wa || this.a.ab(), kh(this, c, 0), Dh(this, h))
            }.bind(b))["catch"](function (b) {
              this.f || this.l || (c.Ca = !1, "text" == c.type && this.g.ignoreTextStreamFailures ? delete this.c.text :
                      3017 == b.code ? Eh(this, c, b) : (c.Ya = !0, b.severity = 2, uh(this, b)))
            }.bind(b))
          }

          function Eh(b, c, d) {
            if (!H.values(b.c).some(function (b) {
              return b != c && b.$b
            })) {
              var e = Math.round(100 * b.j);
              if (20 < e) b.j -= .2; else if (4 < e) b.j -= .04; else {
                c.Ya = !0;
                b.l = !0;
                b.a.onError(d);
                return
              }
              c.$b = !0
            }
            kh(b, c, 4)
          }

          function Ah(b, c, d, e, f) {
            if (!c.wb) return Promise.resolve();
            d = fd(b.a.I, c.type, b.b.periods[d].startTime - c.stream.presentationTimeOffset, e, f);
            if (!c.stream.initSegmentReference) return d;
            b = Bh(b, c.stream.initSegmentReference).then(function (b) {
              if (!this.f) return cd(this.a.I, c.type, b, null, null)
            }.bind(b))["catch"](function (b) {
              c.wb = !0;
              return Promise.reject(b)
            });
            return Promise.all([d, b])
          }

          function Ch(b, c, d, e, f, g, h) {
            f.containsEmsgBoxes && (new R).Y("emsg", b.ie.bind(b, e, g)).parse(h);
            return Fh(b, c, d).then(function () {
              if (!this.f) return cd(this.a.I, c.type, h, g.startTime + e.startTime, g.endTime + e.startTime)
            }.bind(b)).then(function () {
              if (!this.f) return c.La = f, c.oa = g, Promise.resolve()
            }.bind(b))
          }

          n.ie = function (b, c, d) {
            var e = d.reader.Yb(), f = d.reader.Yb(), g = d.reader.B(), h = d.reader.B(), k = d.reader.B(),
                    l = d.reader.B();
            d = d.reader.Da(d.reader.D.byteLength - d.reader.V());
            b = b.startTime + c.startTime + h / g;
            if ("urn:mpeg:dash:event:2012" == e) this.a.Od(); else this.a.onEvent(new F("emsg", {
              detail: {
                startTime: b,
                endTime: b + k / g,
                schemeIdUri: e,
                value: f,
                timescale: g,
                presentationTimeDelta: h,
                eventDuration: k,
                id: l,
                messageData: d
              }
            }))
          };

          function Fh(b, c, d) {
            var e = Math.max(b.g.bufferBehind, b.b.presentationTimeline.a), f = Zc(b.a.I, c.type);
            if (null == f) return Promise.resolve();
            d = d - f - e;
            return 0 >= d ? Promise.resolve() : b.a.I.remove(c.type, f, f + d).then(function () {
            }.bind(b))
          }

          function Dh(b, c) {
            if (!b.o && (b.o = H.values(b.c).every(function (b) {
              return "text" == b.type ? !0 : !b.wa && !b.ya && b.oa
            }), b.o)) {
              var d = Id(b.b, c);
              b.h[d] || sh(b, d).then(function () {
                this.f || this.a.zc()
              }.bind(b))["catch"](Db);
              for (d = 0; d < b.b.periods.length; ++d) sh(b, d)["catch"](Db);
              b.a.ae && b.a.ae()
            }
          }

          function vh(b, c) {
            if (c.Ba != Id(b.b, c.stream)) {
              var d = c.Ba, e = H.values(b.c);
              e.every(function (b) {
                return b.Ba == d
              }) && e.every(Gh) && sh(b, d).then(function () {
                if (!this.f && e.every(function (b) {
                  var c = Id(this.b, b.stream);
                  return Gh(b) && b.Ba == d && c != d
                }.bind(this))) {
                  var b = this.b.periods[d], c = this.a.Ac(b), h = {};
                  c.variant && c.variant.video && (h.video = c.variant.video);
                  c.variant && c.variant.audio && (h.audio = c.variant.audio);
                  c.text && (h.text = c.text);
                  for (var k in this.c) if (!h[k] && "text" != k) {
                    this.a.onError(new B(2, 5, 5005));
                    return
                  }
                  for (var l in h) if (!this.c[l]) if ("text" ==
                          l) ch(this, {text: h.text}, b.startTime), delete h[l]; else {
                    this.a.onError(new B(2, 5, 5005));
                    return
                  }
                  for (var m in this.c) (b = h[m]) ? (nh(this, b, !1), kh(this, this.c[m], 0)) : delete this.c[m];
                  this.a.zc()
                }
              }.bind(b))["catch"](Db)
            }
          }

          function Gh(b) {
            return !b.Ca && null == b.va && !b.wa && !b.ya
          }

          function Bh(b, c) {
            var d = rb(c.c(), b.g.retryParameters);
            if (0 != c.b || null != c.a) {
              var e = "bytes=" + c.b + "-";
              null != c.a && (e += c.a);
              d.headers.Range = e
            }
            return b.a.$a.request(1, d).promise.then(function (b) {
              return b.data
            })
          }

          function qh(b, c, d) {
            c.wa = !1;
            c.Ab = !1;
            c.ya = !0;
            ed(b.a.I, c.type).then(function () {
              if (!this.f && d) return this.a.I.flush(c.type)
            }.bind(b)).then(function () {
              this.f || (c.La = null, c.oa = null, c.ya = !1, c.endOfStream = !1, kh(this, c, 0))
            }.bind(b))
          }

          function kh(b, c, d) {
            c.va = window.setTimeout(b.Se.bind(b, c), 1E3 * d)
          }

          function bh(b) {
            null != b.va && (window.clearTimeout(b.va), b.va = null)
          }

          function uh(b, c) {
            Za(b.A).then(function () {
              this.f || (this.a.onError(c), c.handled || this.g.failureCallback(c))
            }.bind(b))
          };

          function Hh(b, c, d, e, f, g) {
            if (200 <= d && 299 >= d && 202 != d) return f && (e = f), {
              uri: e,
              data: c,
              headers: b,
              fromCache: !!b["x-shaka-from-cache"]
            };
            f = null;
            try {
              f = Nb(c)
            } catch (h) {
            }
            throw new B(401 == d || 403 == d ? 2 : 1, 1, 1001, e, d, f, b, g);
          };

          function W(b, c, d) {
            var e = new W.b;
            H.forEach(c.headers, function (b, c) {
              e.append(b, c)
            });
            var f = new W.a, g = {
              body: c.body || void 0,
              headers: e,
              method: c.method,
              signal: f.signal,
              credentials: c.allowCrossSiteCredentials ? "include" : void 0
            }, h = {mc: !1, Xc: !1}, k;
            c.retryParameters.timeout && (k = setTimeout(function () {
              h.Xc = !0;
              f.abort()
            }, c.retryParameters.timeout));
            b = W.f(b, d, g, h, k);
            return new C(b, function () {
              h.mc = !0;
              f.abort();
              return Promise.resolve()
            })
          }

          z("shaka.net.HttpFetchPlugin", W);
          W.f = function (b, c, d, e, f) {
            return q(function h() {
              var k, l, m, r, t, u;
              return x(h, function (h) {
                switch (h.u) {
                  case 1:
                    return k = W.c, na(h, 2, 3), v(h, k(b, d), 5);
                  case 5:
                    return l = h.J, v(h, l.arrayBuffer(), 6);
                  case 6:
                    m = h.J;
                  case 3:
                    sa(h);
                    clearTimeout(f);
                    ta(h, 4);
                    break;
                  case 2:
                    r = ra(h);
                    if (e.mc) throw new B(1, 1, 7001, b, c);
                    if (e.Xc) throw new B(1, 1, 1003, b, c);
                    throw new B(1, 1, 1002, b, r, c);
                  case 4:
                    return t = {}, u = l.headers, u.forEach(function (b, c) {
                      t[c.trim()] = b
                    }), h["return"](Hh(t, m, l.status, b, l.url, c))
                }
              })
            })
          };
          W.isSupported = function () {
            return !(!window.fetch || !window.AbortController)
          };
          W.isSupported = W.isSupported;
          W.c = window.fetch;
          W.a = window.AbortController;
          W.b = window.Headers;
          W.isSupported() && (qb("http", W, 2), qb("https", W, 2));

          function Ih(b, c, d) {
            var e = new Ih.g, f = new Promise(function (f, h) {
              e.open(c.method, b, !0);
              e.responseType = "arraybuffer";
              e.timeout = c.retryParameters.timeout;
              e.withCredentials = c.allowCrossSiteCredentials;
              e.onabort = function () {
                h(new B(1, 1, 7001, b, d))
              };
              e.onload = function (c) {
                c = c.target;
                var e = c.getAllResponseHeaders().trim().split("\r\n").reduce(function (b, c) {
                  var d = c.split(": ");
                  b[d[0].toLowerCase()] = d.slice(1).join(": ");
                  return b
                }, {});
                try {
                  var g = Hh(e, c.response, c.status, b, c.responseURL, d);
                  f(g)
                } catch (t) {
                  h(t)
                }
              };
              e.onerror =
                      function (c) {
                        h(new B(1, 1, 1002, b, c, d))
                      };
              e.ontimeout = function () {
                h(new B(1, 1, 1003, b, d))
              };
              for (var g in c.headers) e.setRequestHeader(g.toLowerCase(), c.headers[g]);
              e.send(c.body)
            });
            return new C(f, function () {
              e.abort();
              return Promise.resolve()
            })
          }

          z("shaka.net.HttpXHRPlugin", Ih);
          Ih.g = window.XMLHttpRequest;
          qb("http", Ih, 1);
          qb("https", Ih, 1);

          function Jh(b) {
            this.a = {};
            this.c = Promise.resolve();
            this.h = !1;
            this.i = b;
            this.f = this.b = this.g = 0
          }

          Jh.prototype.destroy = function () {
            this.h = !0;
            var b = this.c["catch"](function () {
            });
            this.c = Promise.resolve();
            return b
          };

          function Kh(b, c, d, e, f) {
            b.a[c] = b.a[c] || [];
            b.a[c].push({request: d, pc: e, Jd: f})
          }

          function Lh(b, c) {
            var d = H.values(b.a);
            b.a = {};
            d.forEach(function (c) {
              c.forEach(function (c) {
                b.b += c.pc
              })
            });
            var e = Promise.resolve().then(function () {
              Mh(b);
              return Promise.all(d.map(function (d) {
                return Nh(b, c, d)
              }))
            });
            b.c = b.c.then(function () {
              return e
            });
            return e
          }

          function Nh(b, c, d) {
            var e = Promise.resolve();
            d.forEach(function (d) {
              e = e.then(function () {
                Mh(b);
                return Oh(b, c, d)
              })
            });
            return e
          }

          function Oh(b, c, d) {
            return Promise.resolve().then(function () {
              Mh(b);
              return c.request(1, d.request).promise
            }).then(function (c) {
              Mh(b);
              b.g += d.pc;
              b.f += c.data.byteLength;
              b.i(b.b ? b.g / b.b : 0, b.f);
              return d.Jd(c.data)
            })
          }

          function Mh(b) {
            if (b.h) throw new B(2, 9, 7001);
          };

          function Ph(b, c) {
            var d = this;
            this.c = b;
            this.b = b.objectStore(c);
            this.a = new A;
            b.onabort = function (b) {
              b.preventDefault();
              d.a.reject()
            };
            b.onerror = function (b) {
              b.preventDefault();
              d.a.reject()
            };
            b.oncomplete = function () {
              d.a.resolve()
            }
          }

          Ph.prototype.abort = function () {
            try {
              this.c.abort()
            } catch (b) {
            }
            return this.a["catch"](function () {
            })
          };
          Ph.prototype.store = function () {
            return this.b
          };
          Ph.prototype.promise = function () {
            return this.a
          };

          function Qh(b) {
            this.b = b;
            this.a = []
          }

          Qh.prototype.destroy = function () {
            return Promise.all(this.a.map(function (b) {
              return b.abort()
            }))
          };

          function Rh(b, c) {
            return Sh(b, c, "readwrite")
          }

          function Sh(b, c, d) {
            d = b.b.transaction([c], d);
            var e = new Ph(d, c);
            b.a.push(e);
            e.promise().then(function () {
              ib(b.a, e)
            }, function () {
              ib(b.a, e)
            });
            return e
          };

          function Th() {
            this.a = {}
          }

          Th.prototype.destroy = function () {
            var b = H.values(this.a).map(function (b) {
              return b.destroy()
            });
            this.a = {};
            return Promise.all(b)
          };
          Th.prototype.init = function () {
            var b = this;
            H.forEach(Uh, function (c, e) {
              var d = e();
              d && (b.a[c] = d)
            });
            var c = H.values(this.a).map(function (b) {
              return b.init()
            });
            return Promise.all(c)
          };

          function Vh(b) {
            var c = null;
            H.forEach(b.a, function (b, e) {
              H.forEach(e.getCells(), function (d, e) {
                e.hasFixedKeySpace() || c || (c = {path: {ea: b, O: d}, O: e})
              })
            });
            if (c) return c;
            throw new B(2, 9, 9013, "Could not find a cell that supports add-operations");
          }

          function Wh(b, c) {
            H.forEach(b.a, function (b, e) {
              H.forEach(e.getCells(), function (d, e) {
                c({ea: b, O: d}, e)
              })
            })
          }

          function Xh(b, c, d) {
            b = b.a[c];
            if (!b) throw new B(2, 9, 9013, "Could not find mechanism with name " + c);
            c = b.getCells()[d];
            if (!c) throw new B(2, 9, 9013, "Could not find cell with name " + d);
            return c
          }

          function Yh(b) {
            return q(function d() {
              var e, f, g, h;
              return x(d, function (d) {
                switch (d.u) {
                  case 1:
                    return e = H, f = Object.values(b.a), g = 0 < f.length, g || (h = Uh, e.forEach(h, function (b, d) {
                      var e = d();
                      e && f.push(e)
                    })), v(d, Promise.all(f.map(function (b) {
                      return b.erase()
                    })), 2);
                  case 2:
                    if (g) d.N(0); else return v(d, Promise.all(f.map(function (b) {
                      return b.destroy()
                    })), 0)
                }
              })
            })
          }

          z("shaka.offline.StorageMuxer.register", function (b, c) {
            Uh[b] = c
          });
          z("shaka.offline.StorageMuxer.unregister", function (b) {
            delete Uh[b]
          });

          function Zh() {
            return H.values(Uh).some(function (b) {
              return (b = b()) ? (b.destroy(), !0) : !1
            })
          }

          var Uh = {};

          function $h(b) {
            this.a = new Qh(b)
          }

          n = $h.prototype;
          n.destroy = function () {
            return this.a.destroy()
          };
          n.hasFixedKeySpace = function () {
            return !0
          };
          n.addSegments = function () {
            return ai("segment")
          };
          n.removeSegments = function (b, c) {
            return bi(this, "segment", b, c)
          };
          n.getSegments = function (b) {
            return ci(this, "segment", b).then(function (b) {
              return b.map(di)
            })
          };
          n.addManifests = function () {
            return ai("manifest")
          };
          n.updateManifestExpiration = function (b, c) {
            var d = Rh(this.a, "manifest"), e = d.store(), f = new A;
            e.get(b).onsuccess = function (d) {
              (d = d.target.result) ? (d.expiration = c, e.put(d), f.resolve()) : f.reject(new B(2, 9, 9012, "Could not find values for " + b))
            };
            return d.promise().then(function () {
              return f
            })
          };
          n.removeManifests = function (b, c) {
            return bi(this, "manifest", b, c)
          };
          n.getManifests = function (b) {
            return ci(this, "manifest", b).then(function (b) {
              return b.map(ei)
            })
          };
          n.getAllManifests = function () {
            var b = Sh(this.a, "manifest", "readonly"), c = {};
            b.store().openCursor().onsuccess = function (b) {
              if (b = b.target.result) c[b.key] = ei(b.value), b["continue"]()
            };
            return b.promise().then(function () {
              return c
            })
          };

          function ai(b) {
            return Promise.reject(new B(2, 9, 9011, "Cannot add new value to " + b))
          }

          function bi(b, c, d, e) {
            b = Rh(b.a, c);
            var f = b.store();
            d.forEach(function (b) {
              f["delete"](b).onsuccess = function () {
                return e(b)
              }
            });
            return b.promise()
          }

          function ci(b, c, d) {
            b = Sh(b.a, c, "readonly");
            var e = b.store(), f = {}, g = [];
            d.forEach(function (b) {
              e.get(b).onsuccess = function (c) {
                c = c.target.result;
                void 0 == c && g.push(b);
                f[b] = c
              }
            });
            return b.promise().then(function () {
              return g.length ? Promise.reject(new B(2, 9, 9012, "Could not find values for " + g)) : d.map(function (b) {
                return f[b]
              })
            })
          }

          function ei(b) {
            return {
              originalManifestUri: b.originalManifestUri,
              duration: b.duration,
              size: b.size,
              expiration: null == b.expiration ? Infinity : b.expiration,
              periods: b.periods.map(fi),
              sessionIds: b.sessionIds,
              drmInfo: b.drmInfo,
              appMetadata: b.appMetadata
            }
          }

          function fi(b) {
            gi(b);
            b.streams.forEach(function () {
            });
            return {startTime: b.startTime, streams: b.streams.map(hi)}
          }

          function hi(b) {
            var c = b.Dd ? ii(b.Dd) : null;
            return {
              id: b.id,
              primary: b.primary,
              presentationTimeOffset: b.presentationTimeOffset,
              contentType: b.contentType,
              mimeType: b.mimeType,
              codecs: b.codecs,
              frameRate: b.frameRate,
              kind: b.kind,
              language: b.language,
              label: b.label,
              width: b.width,
              height: b.height,
              initSegmentKey: c,
              encrypted: b.encrypted,
              keyId: b.keyId,
              segments: b.segments.map(ji),
              variantIds: b.variantIds
            }
          }

          function ji(b) {
            var c = ii(b.uri);
            return {startTime: b.startTime, endTime: b.endTime, dataKey: c}
          }

          function di(b) {
            return {data: b.data}
          }

          function ii(b) {
            var c;
            if ((c = /^offline:[0-9]+\/[0-9]+\/([0-9]+)$/.exec(b)) || (c = /^offline:segment\/([0-9]+)$/.exec(b))) return Number(c[1]);
            throw new B(2, 9, 9004, "Could not parse uri " + b);
          }

          function gi(b) {
            var c = b.streams.filter(function (b) {
              return "audio" == b.contentType
            }), d = b.streams.filter(function (b) {
              return "video" == b.contentType
            });
            if (!c.every(function (b) {
              return b.variantIds
            }) || !d.every(function (b) {
              return b.variantIds
            })) {
              c.forEach(function (b) {
                b.variantIds = []
              });
              d.forEach(function (b) {
                b.variantIds = []
              });
              var e = 0;
              if (d.length && !c.length) {
                var f = e++;
                d.forEach(function (b) {
                  b.variantIds.push(f)
                })
              }
              if (!d.length && c.length) {
                var g = e++;
                c.forEach(function (b) {
                  b.variantIds.push(g)
                })
              }
              d.length && c.length && c.forEach(function (b) {
                d.forEach(function (c) {
                  var d =
                          e++;
                  b.variantIds.push(d);
                  c.variantIds.push(d)
                })
              })
            }
          };

          function ki(b, c, d, e) {
            this.a = new Qh(b);
            this.c = c;
            this.b = d;
            this.f = e
          }

          n = ki.prototype;
          n.destroy = function () {
            return this.a.destroy()
          };
          n.hasFixedKeySpace = function () {
            return this.f
          };
          n.addSegments = function (b) {
            return li(this, this.c, b)
          };
          n.removeSegments = function (b, c) {
            return mi(this, this.c, b, c)
          };
          n.getSegments = function (b) {
            return ni(this, this.c, b)
          };
          n.addManifests = function (b) {
            return li(this, this.b, b)
          };
          n.updateManifestExpiration = function (b, c) {
            var d = Rh(this.a, this.b), e = d.store();
            e.get(b).onsuccess = function (d) {
              if (d = d.target.result) d.expiration = c, e.put(d, b)
            };
            return d.promise()
          };
          n.removeManifests = function (b, c) {
            return mi(this, this.b, b, c)
          };
          n.getManifests = function (b) {
            return ni(this, this.b, b)
          };
          n.getAllManifests = function () {
            var b = Sh(this.a, this.b, "readonly"), c = {};
            b.store().openCursor().onsuccess = function (b) {
              if (b = b.target.result) c[b.key] = b.value, b["continue"]()
            };
            return b.promise().then(function () {
              return c
            })
          };

          function li(b, c, d) {
            if (b.f) return Promise.reject(new B(1, 9, 9011, "Cannot add new value to " + c));
            b = Rh(b.a, c);
            var e = b.store(), f = [];
            d.forEach(function (b) {
              e.add(b).onsuccess = function (b) {
                f.push(b.target.result)
              }
            });
            return b.promise().then(function () {
              return f
            })
          }

          function mi(b, c, d, e) {
            b = Rh(b.a, c);
            var f = b.store();
            d.forEach(function (b) {
              f["delete"](b).onsuccess = function () {
                return e(b)
              }
            });
            return b.promise()
          }

          function ni(b, c, d) {
            b = Sh(b.a, c, "readonly");
            var e = b.store(), f = {}, g = [];
            d.forEach(function (b) {
              var c = e.get(b);
              c.onsuccess = function () {
                void 0 == c.result && g.push(b);
                f[b] = c.result
              }
            });
            return b.promise().then(function () {
              return g.length ? Promise.reject(new B(1, 9, 9012, "Could not find values for " + g)) : d.map(function (b) {
                return f[b]
              })
            })
          };

          function oi() {
            this.c = this.b = this.a = this.f = null
          }

          oi.prototype.init = function () {
            var b = this, c = new A, d = window.indexedDB.open("shaka_offline_db", 3);
            d.onsuccess = function (d) {
              d = d.target.result;
              b.f = d;
              var e = d.objectStoreNames;
              e = e.contains("manifest") && e.contains("segment") ? new $h(d) : null;
              b.a = e;
              e = d.objectStoreNames;
              e = e.contains("manifest-v2") && e.contains("segment-v2") ? new ki(d, "segment-v2", "manifest-v2", !0) : null;
              b.b = e;
              e = d.objectStoreNames;
              d = e.contains("manifest-v3") && e.contains("segment-v3") ? new ki(d, "segment-v3", "manifest-v3", !1) : null;
              b.c = d;
              c.resolve()
            };
            d.onupgradeneeded = function (b) {
              b = b.target.result;
              var c = {autoIncrement: !0};
              b.createObjectStore("manifest-v3", c);
              b.createObjectStore("segment-v3", c)
            };
            d.onerror = function (b) {
              c.reject(new B(2, 9, 9001, d.error));
              b.preventDefault()
            };
            return c
          };
          oi.prototype.destroy = function () {
            var b = this;
            return q(function d() {
              return x(d, function (d) {
                switch (d.u) {
                  case 1:
                    if (!b.a) {
                      d.N(2);
                      break
                    }
                    return v(d, b.a.destroy(), 2);
                  case 2:
                    if (!b.b) {
                      d.N(4);
                      break
                    }
                    return v(d, b.b.destroy(), 4);
                  case 4:
                    if (!b.c) {
                      d.N(6);
                      break
                    }
                    return v(d, b.c.destroy(), 6);
                  case 6:
                    b.f && b.f.close(), d.u = 0
                }
              })
            })
          };
          oi.prototype.getCells = function () {
            var b = {};
            this.a && (b.v1 = this.a);
            this.b && (b.v2 = this.b);
            this.c && (b.v3 = this.c);
            return b
          };
          oi.prototype.erase = function () {
            var b = this;
            return q(function d() {
              return x(d, function (d) {
                switch (d.u) {
                  case 1:
                    if (!b.a) {
                      d.N(2);
                      break
                    }
                    return v(d, b.a.destroy(), 2);
                  case 2:
                    if (!b.b) {
                      d.N(4);
                      break
                    }
                    return v(d, b.b.destroy(), 4);
                  case 4:
                    if (!b.c) {
                      d.N(6);
                      break
                    }
                    return v(d, b.c.destroy(), 6);
                  case 6:
                    return b.f && b.f.close(), v(d, pi(), 8);
                  case 8:
                    return b.f = null, b.a = null, b.b = null, b.c = null, v(d, b.init(), 0)
                }
              })
            })
          };

          function pi() {
            var b = new A, c = window.indexedDB.deleteDatabase("shaka_offline_db");
            c.onblocked = function () {
            };
            c.onsuccess = function () {
              b.resolve()
            };
            c.onerror = function (d) {
              b.reject(new B(2, 9, 9001, c.error));
              d.preventDefault()
            };
            return b
          }

          Uh.idb = function () {
            return window.indexedDB ? new oi : null
          };

          function qi(b, c, d, e) {
            this.a = b;
            this.g = c;
            this.f = d;
            this.c = e;
            this.b = ["offline:", b, "/", c, "/", d, "/", e].join("")
          }

          qi.prototype.ea = function () {
            return this.g
          };
          qi.prototype.O = function () {
            return this.f
          };
          qi.prototype.key = function () {
            return this.c
          };
          qi.prototype.toString = function () {
            return this.b
          };

          function ri(b) {
            b = /^offline:([a-z]+)\/([^/]+)\/([^/]+)\/([0-9]+)$/.exec(b);
            if (null == b) return null;
            var c = b[1];
            if ("manifest" != c && "segment" != c) return null;
            var d = b[2];
            if (!d) return null;
            var e = b[3];
            return e && null != c ? new qi(c, d, e, Number(b[4])) : null
          };

          function si(b, c) {
            this.b = b;
            this.a = c
          }

          function ti(b, c) {
            var d = new U(null, 0);
            d.la(c.duration);
            var e = c.periods.map(function (c) {
              return ui(b, c, d)
            }), f = c.drmInfo ? [c.drmInfo] : [];
            c.drmInfo && e.forEach(function (b) {
              b.variants.forEach(function (b) {
                b.drmInfos = f
              })
            });
            return {presentationTimeline: d, minBufferTime: 2, offlineSessionIds: c.sessionIds, periods: e}
          }

          function ui(b, c, d) {
            var e = c.streams.filter(function (b) {
              return "audio" == b.contentType
            }), f = c.streams.filter(function (b) {
              return "video" == b.contentType
            });
            e = vi(b, e, f);
            f = c.streams.filter(function (b) {
              return "text" == b.contentType
            }).map(function (c) {
              return wi(b, c)
            });
            c.streams.forEach(function (c, e) {
              var f = c.segments.map(function (c, d) {
                return xi(b, d, c)
              });
              d.Na(f, 0 == e)
            });
            return {startTime: c.startTime, variants: e, textStreams: f}
          }

          function vi(b, c, d) {
            var e = {}, f = [];
            f.push.apply(f, c);
            f.push.apply(f, d);
            f.forEach(function (b) {
              b.variantIds.forEach(function (b) {
                e[b] = e[b] || {
                  id: b,
                  language: "",
                  primary: !1,
                  audio: null,
                  video: null,
                  bandwidth: 0,
                  drmInfos: [],
                  allowedByApplication: !0,
                  allowedByKeySystem: !0
                }
              })
            });
            c.forEach(function (c) {
              var d = wi(b, c);
              c.variantIds.forEach(function (b) {
                b = e[b];
                b.language = d.language;
                b.primary = b.primary || d.primary;
                b.audio = d
              })
            });
            d.forEach(function (c) {
              var d = wi(b, c);
              c.variantIds.forEach(function (b) {
                b = e[b];
                b.primary = b.primary ||
                        d.primary;
                b.video = d
              })
            });
            return H.values(e)
          }

          function wi(b, c) {
            var d = c.segments.map(function (c, d) {
              return xi(b, d, c)
            }), e = new T(d);
            d = {
              id: c.id,
              createSegmentIndex: function () {
                return Promise.resolve()
              },
              findSegmentPosition: function (b) {
                return e.find(b)
              },
              getSegmentReference: function (b) {
                return e.get(b)
              },
              initSegmentReference: null,
              presentationTimeOffset: c.presentationTimeOffset,
              mimeType: c.mimeType,
              codecs: c.codecs,
              width: c.width || void 0,
              height: c.height || void 0,
              frameRate: c.frameRate || void 0,
              kind: c.kind,
              encrypted: c.encrypted,
              keyId: c.keyId,
              language: c.language,
              label: c.label || null,
              type: c.contentType,
              primary: c.primary,
              trickModeVideo: null,
              containsEmsgBoxes: !1,
              roles: [],
              channelsCount: null
            };
            null != c.initSegmentKey && (d.initSegmentReference = yi(b, c.initSegmentKey));
            return d
          }

          function xi(b, c, d) {
            var e = new qi("segment", b.b, b.a, d.dataKey);
            return new P(c, d.startTime, d.endTime, function () {
              return [e.toString()]
            }, 0, null)
          }

          function yi(b, c) {
            var d = new qi("segment", b.b, b.a, c);
            return new Ne(function () {
              return [d.toString()]
            }, 0, null)
          };

          function zi() {
            this.a = null
          }

          n = zi.prototype;
          n.configure = function () {
          };
          n.start = function (b) {
            var c = ri(b);
            this.a = c;
            if (null == c || "manifest" != c.a) return Promise.reject(new B(2, 1, 9004, c));
            var d = new Th;
            return mb([d], function () {
              return q(function f() {
                var b, h, k, l;
                return x(f, function (f) {
                  switch (f.u) {
                    case 1:
                      return v(f, d.init(), 2);
                    case 2:
                      return v(f, Xh(d, c.ea(), c.O()), 3);
                    case 3:
                      return b = f.J, v(f, b.getManifests([c.key()]), 4);
                    case 4:
                      return h = f.J, k = h[0], l = new si(c.ea(), c.O()), f["return"](ti(l, k))
                  }
                })
              })
            })
          };
          n.stop = function () {
            return Promise.resolve()
          };
          n.update = function () {
          };
          n.onExpirationUpdated = function (b, c) {
            var d = this.a, e = new Th;
            return mb([e], function () {
              return q(function g() {
                var h, k, l, m, r;
                return x(g, function (g) {
                  switch (g.u) {
                    case 1:
                      return v(g, e.init(), 2);
                    case 2:
                      return v(g, Xh(e, d.ea(), d.O()), 3);
                    case 3:
                      return h = g.J, v(g, h.getManifests([d.key()]), 4);
                    case 4:
                      k = g.J;
                      l = k[0];
                      m = 0 <= l.sessionIds.indexOf(b);
                      r = void 0 == l.expiration || l.expiration > c;
                      if (m && r) return v(g, h.updateManifestExpiration(d.key(), c), 0);
                      g.N(0)
                  }
                })
              })
            })["catch"](function () {
            })
          };
          tf["application/x-offline-manifest"] = zi;

          function Ai(b) {
            var c = ri(b);
            return c && "manifest" == c.a ? Ai.a(b) : c && "segment" == c.a ? Ai.b(c.key(), c) : $a(new B(2, 1, 9004, b))
          }

          z("shaka.offline.OfflineScheme", Ai);
          Ai.a = function (b) {
            b = {uri: b, data: new ArrayBuffer(0), headers: {"content-type": "application/x-offline-manifest"}};
            return bb(b)
          };
          Ai.b = function (b, c) {
            var d = new Th, e = mb([d], function () {
              return q(function g() {
                var b, e, l;
                return x(g, function (g) {
                  switch (g.u) {
                    case 1:
                      return v(g, d.init(), 2);
                    case 2:
                      return v(g, Xh(d, c.ea(), c.O()), 3);
                    case 3:
                      return b = g.J, v(g, b.getSegments([c.key()]), 4);
                    case 4:
                      return e = g.J, l = e[0], g["return"]({uri: c, data: l.data, headers: {}})
                  }
                })
              })
            });
            return cb(e)
          };
          qb("offline", Ai);

          function X(b) {
            this.a = null;
            for (var c = 0; c < b.textTracks.length; ++c) {
              var d = b.textTracks[c];
              d.mode = "disabled";
              "Shaka Player TextTrack" == d.label && (this.a = d)
            }
            this.a || (this.a = b.addTextTrack("subtitles", "Shaka Player TextTrack"));
            this.a.mode = "hidden"
          }

          z("shaka.text.SimpleTextDisplayer", X);
          X.prototype.remove = function (b, c) {
            if (!this.a) return !1;
            Bi(this.a, function (d) {
              return !(d.startTime >= c || d.endTime <= b)
            });
            return !0
          };
          X.prototype.remove = X.prototype.remove;
          X.prototype.append = function (b) {
            for (var c = Ci, d = [], e = 0; e < b.length; e++) {
              var f = c(b[e]);
              f && d.push(f)
            }
            d.slice().sort(function (b, c) {
              return b.startTime != c.startTime ? b.startTime - c.startTime : b.endTime != c.endTime ? b.endTime - c.startTime : d.indexOf(c) - d.indexOf(b)
            }).forEach(function (b) {
              this.a.addCue(b)
            }.bind(this))
          };
          X.prototype.append = X.prototype.append;
          X.prototype.destroy = function () {
            this.a && Bi(this.a, function () {
              return !0
            });
            this.a = null;
            return Promise.resolve()
          };
          X.prototype.destroy = X.prototype.destroy;
          X.prototype.isTextVisible = function () {
            return "showing" == this.a.mode
          };
          X.prototype.isTextVisible = X.prototype.isTextVisible;
          X.prototype.setTextVisibility = function (b) {
            this.a.mode = b ? "showing" : "hidden"
          };
          X.prototype.setTextVisibility = X.prototype.setTextVisibility;

          function Ci(b) {
            if (b.startTime >= b.endTime) return null;
            var c = new VTTCue(b.startTime, b.endTime, b.payload);
            c.lineAlign = b.lineAlign;
            c.positionAlign = b.positionAlign;
            c.size = b.size;
            try {
              c.align = b.textAlign
            } catch (d) {
            }
            "center" == b.textAlign && "center" != c.align && (c.align = "middle");
            2 == b.writingDirection ? c.vertical = "lr" : 3 == b.writingDirection && (c.vertical = "rl");
            1 == b.lineInterpretation && (c.snapToLines = !1);
            null != b.line && (c.line = b.line);
            null != b.position && (c.position = b.position);
            return c
          }

          function Bi(b, c) {
            var d = b.mode;
            b.mode = "showing" == d ? "showing" : "hidden";
            for (var e = b.cues, f = e.length - 1; 0 <= f; f--) {
              var g = e[f];
              g && c(g) && b.removeCue(g)
            }
            b.mode = d
          };

          function Y(b, c) {
            var d = this;
            L.call(this);
            this.ha = !1;
            this.f = null;
            this.pb = !1;
            this.v = null;
            this.o = new xb;
            this.Bb = this.h = this.Db = this.b = this.m = this.a = this.A = this.g = this.j = this.i = this.s = null;
            this.bd = 1E9;
            this.lb = [];
            this.ob = !1;
            this.xa = !0;
            this.T = this.qb = this.Ha = null;
            this.kc = !1;
            this.G = null;
            this.nb = [];
            this.K = {};
            this.c = Di(this);
            this.mb = {width: Infinity, height: Infinity};
            this.l = Ei();
            this.kb = 0;
            this.M = this.c.preferredAudioLanguage;
            this.ga = this.c.preferredTextLanguage;
            this.Ga = this.c.preferredVariantRole;
            this.Ua = this.c.preferredTextRole;
            this.fa = this.c.preferredAudioChannelCount;
            c && c(this);
            this.s = new D(this.Ke.bind(this));
            b && this.rb(b, !0);
            E(this.o, window, "online", function () {
              d.ac()
            })
          }

          Ba(Y, L);
          z("shaka.Player", Y);

          function Fi(b) {
            if (!b.Ha) return Promise.resolve();
            var c = Promise.resolve();
            b.m && (c = b.m.stop(), b.m = null);
            return Promise.all([c, b.Ha()])
          }

          Y.prototype.destroy = function () {
            var b = this;
            return q(function d() {
              var e;
              return x(d, function (d) {
                switch (d.u) {
                  case 1:
                    return v(d, b.detach(), 2);
                  case 2:
                    return b.ha = !0, e = Promise.all([b.o ? b.o.destroy() : null, b.s ? b.s.destroy() : null]), b.pb = !1, b.o = null, b.h = null, b.Bb = null, b.s = null, b.c = null, v(d, e, 0)
                }
              })
            })
          };
          Y.prototype.destroy = Y.prototype.destroy;
          Y.version = "v2.4.6";
          var Gi = {};
          Y.registerSupportPlugin = function (b, c) {
            Gi[b] = c
          };
          Y.isBrowserSupported = function () {
            return !!window.Promise && !!window.Uint8Array && !!Array.prototype.forEach && !!window.MediaSource && !!MediaSource.isTypeSupported && !!window.MediaKeys && !!window.navigator && !!window.navigator.requestMediaKeySystemAccess && !!window.MediaKeySystemAccess && !!window.MediaKeySystemAccess.prototype.getConfiguration
          };
          Y.probeSupport = function () {
            return sc().then(function (b) {
              var c = vf(), d = Xc();
              b = {manifest: c, media: d, drm: b};
              for (var e in Gi) b[e] = Gi[e]();
              return b
            })
          };
          Y.prototype.rb = function (b, c) {
            var d = this;
            return q(function f() {
              return x(f, function (f) {
                switch (f.u) {
                  case 1:
                    void 0 === c && (c = !0);
                    if (!d.f) {
                      f.N(2);
                      break
                    }
                    return v(f, d.detach(), 2);
                  case 2:
                    d.f = b;
                    E(d.o, d.f, "error", d.ce.bind(d));
                    if (c) return d.j = new Wc(d.f), v(f, d.j.j, 0);
                    f.N(0)
                }
              })
            })
          };
          Y.prototype.attach = Y.prototype.rb;
          Y.prototype.detach = function () {
            var b = this;
            return q(function d() {
              return x(d, function (d) {
                switch (d.u) {
                  case 1:
                    return b.f ? v(d, b.hb(!1), 2) : d["return"]();
                  case 2:
                    b.o.qa(b.f, "error"), b.f = null, d.u = 0
                }
              })
            })
          };
          Y.prototype.detach = Y.prototype.detach;

          function Hi(b, c, d) {
            return q(function f() {
              var g, h;
              return x(f, function (f) {
                switch (f.u) {
                  case 1:
                    return v(f, wf(c, b.s, b.c.manifest.retryParameters, d), 2);
                  case 2:
                    return g = f.J, b.m = new g, b.m.configure(b.c.manifest), h = {
                      networkingEngine: b.s,
                      filterNewPeriod: b.tb.bind(b),
                      filterAllPeriods: b.ec.bind(b),
                      onTimelineRegionAdded: b.be.bind(b),
                      onEvent: b.gb.bind(b),
                      onError: b.Ta.bind(b)
                    }, f["return"](b.m.start(c, h))
                }
              })
            })
          }

          function Ii(b) {
            function c(b) {
              return b.video && b.audio || b.video && b.video.codecs.includes(",")
            }

            b.b.periods.some(function (b) {
              return b.variants.some(c)
            }) && b.b.periods.forEach(function (b) {
              b.variants = b.variants.filter(c)
            });
            if (0 == b.b.periods.length) throw new B(2, 4, 4014);
          }

          function Ji(b) {
            var c = b.b.presentationTimeline.U(), d = b.c.playRangeEnd, e = b.c.playRangeStart;
            0 < e && (b.R() || b.b.presentationTimeline.Tc(e));
            d < c && (b.R() || b.b.presentationTimeline.la(d))
          }

          Y.prototype.load = function (b, c, d) {
            var e = this;
            return q(function g() {
              var h, k, l, m, r, t, u, y, w, pa, Cc;
              return x(g, function (g) {
                switch (g.u) {
                  case 1:
                    if (!e.f) throw new B(2, 7, 7002);
                    k = new A;
                    l = function () {
                      h = new B(2, 7, 7E3);
                      return k
                    };
                    e.dispatchEvent(new F("loading"));
                    m = Date.now();
                    na(g, 2);
                    r = e.hb();
                    e.Ha = l;
                    return v(g, r, 4);
                  case 4:
                    e.l = Ei();
                    E(e.o, e.f, "playing", e.ib.bind(e));
                    E(e.o, e.f, "pause", e.ib.bind(e));
                    E(e.o, e.f, "ended", e.ib.bind(e));
                    t = e.c.abrFactory;
                    e.h && e.Bb == t || (e.Bb = t, e.h = new t, e.h.configure(e.c.abr));
                    e.v = new e.c.textDisplayFactory;
                    e.v.setTextVisibility(e.pb);
                    if (h) throw h;
                    u = e;
                    return v(g, Hi(e, b, d), 5);
                  case 5:
                    u.b = g.J;
                    e.Db = b;
                    if (h) throw h;
                    Ii(e);
                    e.i = new $b({
                      $a: e.s,
                      onError: e.Ta.bind(e),
                      Vb: e.Nd.bind(e),
                      onExpirationUpdated: e.Kd.bind(e),
                      onEvent: e.gb.bind(e)
                    });
                    e.i.configure(e.c.drm);
                    return v(g, e.i.init(e.b, !1), 6);
                  case 6:
                    if (h) throw h;
                    e.ec(e.b.periods);
                    e.kb = Date.now() / 1E3;
                    e.M = e.c.preferredAudioLanguage;
                    e.ga = e.c.preferredTextLanguage;
                    e.fa = e.c.preferredAudioChannelCount;
                    Ji(e);
                    return v(g, e.i.rb(e.f), 7);
                  case 7:
                    if (h) throw h;
                    e.h.init(e.Le.bind(e));
                    e.j || (e.j = new Wc(e.f));
                    e.j.o = e.v;
                    e.g = new Sg(e.f, e.b, e.c.streaming, void 0 == c ? null : c, e.Je.bind(e), e.gb.bind(e));
                    e.A = new Xg(e.f, e.j, e.b, e.c.streaming, e.Uc.bind(e), e.gb.bind(e), e.Ie.bind(e));
                    e.a = new ah(e.b, {
                      Pa: e.g,
                      I: e.j,
                      $a: e.s,
                      Ac: e.Id.bind(e),
                      zc: e.gd.bind(e),
                      onError: e.Ta.bind(e),
                      onEvent: e.gb.bind(e),
                      Od: e.Pd.bind(e),
                      ab: e.Zd.bind(e),
                      filterNewPeriod: e.tb.bind(e),
                      filterAllPeriods: e.ec.bind(e)
                    });
                    e.a.configure(e.c.streaming);
                    Ki(e);
                    e.dispatchEvent(new F("streaming"));
                    return v(g, e.a.init(), 8);
                  case 8:
                    if (h) throw h;
                    e.c.streaming.startAtSegmentBoundary && (y = Li(e, Vg(e.g)), Pg(e.g.a, y));
                    e.b.periods.forEach(e.tb.bind(e));
                    Mi(e);
                    Ni(e);
                    w = V(e.a);
                    pa = zd(w.variants, e.M, e.Ga, e.fa);
                    e.h.setVariants(pa);
                    w.variants.some(function (b) {
                      return b.primary
                    });
                    e.nb.forEach(e.A.o.bind(e.A));
                    e.nb = [];
                    Ab(e.o, e.f, "loadeddata", function () {
                      this.l.loadLatency = (Date.now() - m) / 1E3
                    }.bind(e));
                    if (h) throw h;
                    e.Ha = null;
                    qa(g, 0);
                    break;
                  case 2:
                    return Cc = ra(g), k.resolve(), e.Ha == l && (e.Ha = null, e.dispatchEvent(new F("unloading"))), h ? g["return"](Promise.reject(h)) :
                            g["return"](Promise.reject(Cc))
                }
              })
            })
          };
          Y.prototype.load = Y.prototype.load;

          function Ki(b) {
            function c(b) {
              return (b.video ? b.video.codecs.split(".")[0] : "") + "-" + (b.audio ? b.audio.codecs.split(".")[0] : "")
            }

            var d = b.b.periods.reduce(function (b, c) {
              return b.concat(c.variants)
            }, []);
            d = Bd(d, b.c.preferredAudioChannelCount);
            var e = {};
            d.forEach(function (b) {
              var d = c(b);
              d in e || (e[d] = []);
              e[d].push(b)
            });
            var f = null, g = Infinity;
            H.forEach(e, function (b, c) {
              var d = 0, e = 0;
              c.forEach(function (b) {
                d += b.bandwidth || 0;
                ++e
              });
              var h = d / e;
              h < g && (f = b, g = h)
            });
            b.b.periods.forEach(function (b) {
              b.variants = b.variants.filter(function (b) {
                return c(b) ==
                f ? !0 : !1
              })
            })
          }

          Y.prototype.configure = function (b, c) {
            if (2 == arguments.length && "string" == typeof b) {
              for (var d = b, e = {}, f = e, g = 0, h = 0; ;) {
                g = d.indexOf(".", g);
                if (0 > g) break;
                if (0 == g || "\\" != d[g - 1]) h = d.substring(h, g).replace(/\\\./g, "."), f[h] = {}, f = f[h], h = g + 1;
                g += 1
              }
              f[d.substring(h).replace(/\\\./g, ".")] = c;
              b = e
            }
            d = kb(this.c, b, Di(this), Oi(), "");
            Pi(this);
            return d
          };
          Y.prototype.configure = Y.prototype.configure;

          function Pi(b) {
            b.m && b.m.configure(b.c.manifest);
            b.i && b.i.configure(b.c.drm);
            if (b.a) {
              b.a.configure(b.c.streaming);
              try {
                b.b.periods.forEach(b.tb.bind(b))
              } catch (f) {
                b.Ta(f)
              }
              var c = eh(b.a), d = gh(b.a), e = V(b.a);
              (c = Fd(c, d, e.variants)) && c.allowedByApplication && c.allowedByKeySystem || Qi(b, e)
            }
            b.h && (b.h.configure(b.c.abr), b.c.abr.enabled && !b.xa ? b.h.enable() : b.h.disable())
          }

          Y.prototype.getConfiguration = function () {
            var b = Di(this);
            kb(b, this.c, Di(this), Oi(), "");
            return b
          };
          Y.prototype.getConfiguration = Y.prototype.getConfiguration;
          Y.prototype.we = function () {
            this.c = Di(this);
            Pi(this)
          };
          Y.prototype.resetConfiguration = Y.prototype.we;
          Y.prototype.td = function () {
            return this.f
          };
          Y.prototype.getMediaElement = Y.prototype.td;
          Y.prototype.uc = function () {
            return this.s
          };
          Y.prototype.getNetworkingEngine = Y.prototype.uc;
          Y.prototype.Jb = function () {
            return this.Db
          };
          Y.prototype.getManifestUri = Y.prototype.Jb;
          Y.prototype.R = function () {
            return this.b ? this.b.presentationTimeline.R() : !1
          };
          Y.prototype.isLive = Y.prototype.R;
          Y.prototype.Aa = function () {
            return this.b ? this.b.presentationTimeline.Aa() : !1
          };
          Y.prototype.isInProgress = Y.prototype.Aa;
          Y.prototype.Ed = function () {
            if (!this.b || !this.b.periods.length) return !1;
            var b = this.b.periods[0].variants;
            return b.length ? !b[0].video : !1
          };
          Y.prototype.isAudioOnly = Y.prototype.Ed;
          Y.prototype.ye = function () {
            var b = 0, c = 0;
            this.b && (c = this.b.presentationTimeline, b = c.Ja(), c = c.na());
            return {start: b, end: c}
          };
          Y.prototype.seekRange = Y.prototype.ye;
          Y.prototype.keySystem = function () {
            return this.i ? this.i.keySystem() : ""
          };
          Y.prototype.keySystem = Y.prototype.keySystem;
          Y.prototype.drmInfo = function () {
            return this.i ? this.i.b : null
          };
          Y.prototype.drmInfo = Y.prototype.drmInfo;
          Y.prototype.vb = function () {
            return this.i ? this.i.vb() : Infinity
          };
          Y.prototype.getExpiration = Y.prototype.vb;
          Y.prototype.xc = function () {
            return this.ob
          };
          Y.prototype.isBuffering = Y.prototype.xc;
          Y.prototype.hb = function (b) {
            var c = this;
            return q(function e() {
              return x(e, function (e) {
                switch (e.u) {
                  case 1:
                    if (c.ha) return e["return"]();
                    void 0 === b && (b = !0);
                    c.dispatchEvent(new F("unloading"));
                    return v(e, Fi(c), 2);
                  case 2:
                    return c.qb || (c.qb = Ri(c).then(function () {
                      c.Uc(!1);
                      c.qb = null
                    })), v(e, c.qb, 3);
                  case 3:
                    if (b) return c.j = new Wc(c.f), v(e, c.j.j, 0);
                    e.N(0)
                }
              })
            })
          };
          Y.prototype.unload = Y.prototype.hb;
          Y.prototype.Va = function () {
            return this.g ? this.g.Va() : 0
          };
          Y.prototype.getPlaybackRate = Y.prototype.Va;
          Y.prototype.Ue = function (b) {
            this.g && Rg(this.g.a, b);
            this.a && mh(this.a, 1 != b)
          };
          Y.prototype.trickPlay = Y.prototype.Ue;
          Y.prototype.hd = function () {
            this.g && Rg(this.g.a, 1);
            this.a && mh(this.a, !1)
          };
          Y.prototype.cancelTrickPlay = Y.prototype.hd;
          Y.prototype.Bd = function () {
            if (!this.b || !this.g) return [];
            var b = Hd(this.b, Vg(this.g)), c = this.K[b] || {};
            return vd(this.b.periods[b], c.audio, c.video)
          };
          Y.prototype.getVariantTracks = Y.prototype.Bd;
          Y.prototype.Ad = function () {
            if (!this.b || !this.g) return [];
            var b = Hd(this.b, Vg(this.g)), c = this.K[b] || {};
            if (!c.text) {
              var d = Dd(this.b.periods[b].textStreams, this.ga, this.Ua);
              d.length && (c.text = d[0].id)
            }
            return wd(this.b.periods[b], c.text).filter(function (b) {
              return 0 > this.lb.indexOf(b.id)
            }.bind(this))
          };
          Y.prototype.getTextTracks = Y.prototype.Ad;
          Y.prototype.Ce = function (b) {
            if (this.a) {
              var c = V(this.a);
              a:{
                for (var d = 0; d < c.textStreams.length; d++) if (c.textStreams[d].id == b.id) {
                  b = c.textStreams[d];
                  break a
                }
                b = null
              }
              b && (this.j.l = !1, Si(this, b, !1), c = b, this.xa ? this.G = c : nh(this.a, c, !0), this.ga = b.language)
            }
          };
          Y.prototype.selectTextTrack = Y.prototype.Ce;
          Y.prototype.Ae = function () {
            this.j.l = !0;
            lh(this.a)
          };
          Y.prototype.selectEmbeddedTextTrack = Y.prototype.Ae;
          Y.prototype.Ze = function () {
            return this.j ? this.j.l : !1
          };
          Y.prototype.usingEmbeddedTextTrack = Y.prototype.Ze;
          Y.prototype.De = function (b, c) {
            if (this.a) {
              this.c.abr.enabled && Ga("Changing tracks while abr manager is enabled will likely result in the selected track being overriden. Consider disabling abr before calling selectVariantTrack().");
              var d = V(this.a), e = xd(d, b);
              e && yd(e) && (Ti(this, e, !1), Ui(this, e, c), this.M = e.language, e.audio && e.audio.channelsCount && (this.fa = e.audio.channelsCount), d = zd(d.variants, this.M, this.Ga, this.fa), this.h.setVariants(d))
            }
          };
          Y.prototype.selectVariantTrack = Y.prototype.De;
          Y.prototype.pd = function () {
            if (!this.a) return [];
            var b = V(this.a);
            b = ud(b.variants).map(function (b) {
              return b.audio
            }).filter(Fb);
            return Vi(b)
          };
          Y.prototype.getAudioLanguagesAndRoles = Y.prototype.pd;
          Y.prototype.zd = function () {
            if (!this.a) return [];
            var b = V(this.a);
            return Vi(b.textStreams)
          };
          Y.prototype.getTextLanguagesAndRoles = Y.prototype.zd;
          Y.prototype.od = function () {
            if (!this.a) return [];
            var b = V(this.a);
            return ud(b.variants).map(function (b) {
              return b.language
            }).filter(Fb)
          };
          Y.prototype.getAudioLanguages = Y.prototype.od;
          Y.prototype.yd = function () {
            return this.a ? V(this.a).textStreams.map(function (b) {
              return b.language
            }).filter(Fb) : []
          };
          Y.prototype.getTextLanguages = Y.prototype.yd;

          function Vi(b) {
            var c = [];
            b.forEach(function (b) {
              if (b) {
                var d = b.language;
                b.roles.length ? b.roles.forEach(function (b) {
                  c.push({language: d, role: b})
                }) : c.push({language: d, role: ""})
              } else c.push({language: "und", role: ""})
            });
            return gb(c, function (b, c) {
              return b.language == c.language && b.role == c.role
            })
          }

          Y.prototype.ze = function (b, c) {
            if (this.a) {
              var d = V(this.a);
              this.M = b;
              this.Ga = c || "";
              Qi(this, d)
            }
          };
          Y.prototype.selectAudioLanguage = Y.prototype.ze;
          Y.prototype.Be = function (b, c) {
            if (this.a) {
              var d = V(this.a);
              this.ga = b;
              this.Ua = c || "";
              Qi(this, d)
            }
          };
          Y.prototype.selectTextLanguage = Y.prototype.Be;
          Y.prototype.Nb = function () {
            return this.v ? this.v.isTextVisible() : this.pb
          };
          Y.prototype.isTextTrackVisible = Y.prototype.Nb;
          Y.prototype.Ge = function (b) {
            this.v && this.v.setTextVisibility(b);
            this.pb = b;
            Wi(this);
            !this.c.streaming.alwaysStreamText && this.a && (b ? (b = V(this.a), (b = Dd(b.textStreams, this.ga, this.Ua)[0]) && hh(this.a, b)) : lh(this.a))
          };
          Y.prototype.setTextTrackVisibility = Y.prototype.Ge;
          Y.prototype.vd = function () {
            return this.b ? new Date(1E3 * this.b.presentationTimeline.f + 1E3 * this.f.currentTime) : null
          };
          Y.prototype.getPlayheadTimeAsDate = Y.prototype.vd;
          Y.prototype.xd = function () {
            return this.b ? new Date(1E3 * this.b.presentationTimeline.f) : null
          };
          Y.prototype.getPresentationStartTimeAsDate = Y.prototype.xd;
          Y.prototype.Hb = function () {
            return this.j ? this.j.Hb() : {total: [], audio: [], video: [], text: []}
          };
          Y.prototype.getBufferedInfo = Y.prototype.Hb;
          Y.prototype.getStats = function () {
            Xi(this);
            this.ib();
            var b = null, c = null, d = this.f;
            d = d && d.getVideoPlaybackQuality ? d.getVideoPlaybackQuality() : {};
            if (this.g && this.b) {
              var e = Hd(this.b, Vg(this.g)), f = this.b.periods[e];
              if (e = this.K[e]) b = (c = Gd(e.audio, e.video, f.variants)) ? c.video : null
            }
            b || (b = {});
            c || (c = {});
            return {
              width: b.width || 0,
              height: b.height || 0,
              streamBandwidth: c.bandwidth || 0,
              decodedFrames: Number(d.totalVideoFrames),
              droppedFrames: Number(d.droppedVideoFrames),
              estimatedBandwidth: this.h ? this.h.getBandwidthEstimate() :
                      NaN,
              loadLatency: this.l.loadLatency,
              playTime: this.l.playTime,
              bufferingTime: this.l.bufferingTime,
              switchHistory: lb(this.l.switchHistory),
              stateHistory: lb(this.l.stateHistory)
            }
          };
          Y.prototype.getStats = Y.prototype.getStats;
          Y.prototype.addTextTrack = function (b, c, d, e, f, g) {
            if (!this.a) return Promise.reject();
            var h = V(this.a), k = this.b.periods.indexOf(h) + 1,
                    l = (k >= this.b.periods.length ? this.b.presentationTimeline.U() : this.b.periods[k].startTime) - h.startTime;
            if (Infinity == l) return Promise.reject(new B(1, 4, 4033));
            var m = {
              id: this.bd++,
              createSegmentIndex: Promise.resolve.bind(Promise),
              findSegmentPosition: function () {
                return 1
              },
              getSegmentReference: function (c) {
                return 1 != c ? null : new P(1, 0, l, function () {
                  return [b]
                }, 0, null)
              },
              initSegmentReference: null,
              presentationTimeOffset: 0,
              mimeType: e,
              codecs: f || "",
              kind: d,
              encrypted: !1,
              keyId: null,
              language: c,
              label: g || null,
              type: "text",
              primary: !1,
              trickModeVideo: null,
              containsEmsgBoxes: !1,
              roles: [],
              channelsCount: null
            };
            this.lb.push(m.id);
            h.textStreams.push(m);
            return hh(this.a, m).then(function () {
              if (!this.ha) {
                var b = this.b.periods.indexOf(h), e = fh(this.a, "text");
                e && (this.K[b].text = e.id);
                this.lb.splice(this.lb.indexOf(m.id), 1);
                Qi(this, h);
                Mi(this);
                return {
                  id: m.id, active: !1, type: "text", bandwidth: 0, language: c, label: g || null, kind: d,
                  width: null, height: null
                }
              }
            }.bind(this))
          };
          Y.prototype.addTextTrack = Y.prototype.addTextTrack;
          Y.prototype.cc = function (b, c) {
            this.mb.width = b;
            this.mb.height = c
          };
          Y.prototype.setMaxHardwareResolution = Y.prototype.cc;
          Y.prototype.ac = function () {
            if (this.a) {
              var b = this.a;
              if (b.f) b = !1; else if (b.l) b = !1; else {
                for (var c in b.c) {
                  var d = b.c[c];
                  d.Ya && (d.Ya = !1, kh(b, d, .1))
                }
                b = !0
              }
            } else b = !1;
            return b
          };
          Y.prototype.retryStreaming = Y.prototype.ac;
          Y.prototype.sd = function () {
            return this.b
          };
          Y.prototype.getManifest = Y.prototype.sd;

          function Ti(b, c, d) {
            c.video && Yi(b, c.video);
            c.audio && Yi(b, c.audio);
            var e = dh(b.a);
            c != Fd(eh(b.a), gh(b.a), e ? e.variants : []) && b.l.switchHistory.push({
              timestamp: Date.now() / 1E3,
              id: c.id,
              type: "variant",
              fromAdaptation: d,
              bandwidth: c.bandwidth
            })
          }

          function Si(b, c, d) {
            Yi(b, c);
            b.l.switchHistory.push({
              timestamp: Date.now() / 1E3,
              id: c.id,
              type: "text",
              fromAdaptation: d,
              bandwidth: null
            })
          }

          function Yi(b, c) {
            var d = Id(b.b, c);
            b.K[d] || (b.K[d] = {});
            b.K[d][c.type] = c.id
          }

          function Ri(b) {
            b.o && (b.o.qa(b.f, "loadeddata"), b.o.qa(b.f, "playing"), b.o.qa(b.f, "pause"), b.o.qa(b.f, "ended"));
            var c = b.i,
                    d = Promise.all([b.h ? b.h.stop() : null, b.j ? b.j.destroy() : null, b.g ? b.g.destroy() : null, b.A ? b.A.destroy() : null, b.a ? b.a.destroy() : null, b.m ? b.m.stop() : null, b.v ? b.v.destroy() : null]).then(function () {
                      return c ? c.destroy() : null
                    });
            b.xa = !0;
            b.i = null;
            b.j = null;
            b.g = null;
            b.A = null;
            b.a = null;
            b.m = null;
            b.v = null;
            b.b = null;
            b.Db = null;
            b.nb = [];
            b.K = {};
            b.l = Ei();
            return d
          }

          function Oi() {
            return {
              ".drm.servers": "",
              ".drm.clearKeys": "",
              ".drm.advanced": {
                distinctiveIdentifierRequired: !1,
                persistentStateRequired: !1,
                videoRobustness: "",
                audioRobustness: "",
                serverCertificate: new Uint8Array(0)
              }
            }
          }

          function Di(b) {
            var c = 5E5, d = Infinity;
            navigator.connection && navigator.connection.type && (c = 1E6 * navigator.connection.downlink, navigator.connection.saveData && (d = 360));
            return {
              drm: {
                retryParameters: Ya(),
                servers: {},
                clearKeys: {},
                advanced: {},
                delayLicenseRequestUntilPlayed: !1
              },
              manifest: {
                retryParameters: Ya(), availabilityWindowOverride: NaN, dash: {
                  customScheme: function (b) {
                    if (b) return null
                  }, clockSyncUri: "", ignoreDrmInfo: !1, xlinkFailGracefully: !1, defaultPresentationDelay: 10
                }
              },
              streaming: {
                retryParameters: Ya(),
                failureCallback: b.ld.bind(b),
                rebufferingGoal: 2,
                bufferingGoal: 10,
                bufferBehind: 30,
                ignoreTextStreamFailures: !1,
                alwaysStreamText: !1,
                startAtSegmentBoundary: !1,
                smallGapLimit: .5,
                jumpLargeGaps: !1,
                durationBackoff: 1,
                forceTransmuxTS: !1
              },
              abrFactory: K,
              textDisplayFactory: function () {
                return new X(b.f)
              },
              abr: {
                enabled: !0,
                defaultBandwidthEstimate: c,
                switchInterval: 8,
                bandwidthUpgradeTarget: .85,
                bandwidthDowngradeTarget: .95,
                restrictions: {
                  minWidth: 0,
                  maxWidth: Infinity,
                  minHeight: 0,
                  maxHeight: d,
                  minPixels: 0,
                  maxPixels: Infinity,
                  minBandwidth: 0,
                  maxBandwidth: Infinity
                }
              },
              preferredAudioLanguage: "",
              preferredTextLanguage: "",
              preferredVariantRole: "",
              preferredTextRole: "",
              preferredAudioChannelCount: 2,
              restrictions: {
                minWidth: 0,
                maxWidth: Infinity,
                minHeight: 0,
                maxHeight: Infinity,
                minPixels: 0,
                maxPixels: Infinity,
                minBandwidth: 0,
                maxBandwidth: Infinity
              },
              playRangeStart: 0,
              playRangeEnd: Infinity
            }
          }

          n = Y.prototype;
          n.ld = function (b) {
            var c = [1001, 1002, 1003];
            this.R() && 0 <= c.indexOf(b.code) && (b.severity = 1, this.ac())
          };

          function Ei() {
            return {
              width: NaN,
              height: NaN,
              streamBandwidth: NaN,
              decodedFrames: NaN,
              droppedFrames: NaN,
              estimatedBandwidth: NaN,
              loadLatency: NaN,
              playTime: 0,
              bufferingTime: 0,
              switchHistory: [],
              stateHistory: []
            }
          }

          n.ec = function (b) {
            b.forEach(pd.bind(null, this.i, this.a ? eh(this.a) : null, this.a ? gh(this.a) : null));
            var c = jb(b, function (b) {
              return b.variants.some(yd)
            });
            if (0 == c) throw new B(2, 4, 4032);
            if (c < b.length) throw new B(2, 4, 4011);
            b.forEach(function (b) {
              od(b, this.c.restrictions, this.mb) && this.a && V(this.a) == b && Mi(this);
              if (!b.variants.some(yd)) throw new B(2, 4, 4012);
            }.bind(this))
          };
          n.tb = function (b) {
            pd(this.i, this.a ? eh(this.a) : null, this.a ? gh(this.a) : null, b);
            var c = b.variants, d = c.some(yd);
            od(b, this.c.restrictions, this.mb) && this.a && V(this.a) == b && Mi(this);
            b = c.some(yd);
            if (!d) throw new B(2, 4, 4011);
            if (!b) throw new B(2, 4, 4012);
            if (d = this.i ? this.i.b : null) for (c = p(c), b = c.next(); !b.done; b = c.next()) {
              b = p(b.value.drmInfos);
              for (var e = b.next(); !e.done; e = b.next()) if (e = e.value, e.keySystem == d.keySystem) {
                e = p(e.initData || []);
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, fc(this.i, f.initDataType,
                        f.initData)
              }
            }
          };

          function Ui(b, c, d) {
            b.xa ? (b.T = c, b.kc = d || !1) : oh(b.a, c, d || !1)
          }

          function Xi(b) {
            if (b.b) {
              var c = Date.now() / 1E3;
              b.ob ? b.l.bufferingTime += c - b.kb : b.l.playTime += c - b.kb;
              b.kb = c
            }
          }

          function Li(b, c) {
            function d(b, c) {
              if (!b) return null;
              var d = b.findSegmentPosition(c - g.startTime);
              return null == d ? null : (d = b.getSegmentReference(d)) ? d.startTime + g.startTime : null
            }

            var e = eh(b.a), f = gh(b.a), g = V(b.a);
            e = d(e, c);
            f = d(f, c);
            return null != f && null != e ? Math.max(f, e) : null != f ? f : null != e ? e : c
          }

          n.Ke = function (b, c) {
            this.h && this.h.segmentDownloaded(b, c)
          };
          n.Uc = function (b) {
            Xi(this);
            this.ob = b;
            this.ib();
            if (this.g) {
              var c = this.g.a;
              b != c.g && (c.g = b, Rg(c, c.f))
            }
            this.dispatchEvent(new F("buffering", {buffering: b}))
          };
          n.Ie = function () {
            Mi(this)
          };
          n.ib = function () {
            if (!this.ha) {
              var b = this.ob ? "buffering" : this.f.ended ? "ended" : this.f.paused ? "paused" : "playing";
              var c = Date.now() / 1E3;
              if (this.l.stateHistory.length) {
                var d = this.l.stateHistory[this.l.stateHistory.length - 1];
                d.duration = c - d.timestamp;
                if (b == d.state) return
              }
              this.l.stateHistory.push({timestamp: c, state: b, duration: 0})
            }
          };
          n.Je = function () {
            if (this.A) {
              var b = this.A;
              b.c.forEach(b.m.bind(b, !0))
            }
            this.a && rh(this.a)
          };

          function Zi(b, c) {
            if (!c || !c.length) return b.Ta(new B(2, 4, 4012)), null;
            b.h.setVariants(c);
            return b.h.chooseVariant()
          }

          function Qi(b, c) {
            var d = zd(c.variants, b.M, b.Ga, b.fa), e = Dd(c.textStreams, b.ga, b.Ua);
            if (d = Zi(b, d)) Ti(b, d, !0), Ui(b, d, !0);
            (e = e[0]) && (b.c.streaming.alwaysStreamText || b.Nb()) && (Si(b, e, !0), b.xa ? b.G = e : nh(b.a, e, !0));
            Ni(b)
          }

          n.Id = function (b) {
            this.xa = !0;
            this.h.disable();
            var c = {audio: !1, text: !1}, d = zd(b.variants, this.M, this.Ga, this.fa, c),
                    e = Dd(b.textStreams, this.ga, this.Ua, c);
            d = Zi(this, d);
            e = e[0] || null;
            if (this.T) {
              a:{
                var f = this.b;
                for (var g = 0; g < f.periods.length; ++g) for (var h = f.periods[g], k = 0; k < h.variants.length; ++k) if (h.variants[k] == this.T) {
                  f = g;
                  break a
                }
                f = -1
              }
              this.b.periods[f] == b && (d = this.T);
              this.T = null
            }
            this.G && (this.b.periods[Id(this.b, this.G)] == b && (e = this.G), this.G = null);
            d && Ti(this, d, !0);
            e && (Si(this, e, !0), !dh(this.a) && d && d.audio &&
            c.text && e.language != d.audio.language && (this.v.setTextVisibility(!0), Wi(this)));
            return this.c.streaming.alwaysStreamText || this.Nb() ? {variant: d, text: e} : {variant: d, text: null}
          };
          n.gd = function () {
            this.xa = !1;
            this.c.abr.enabled && this.h.enable();
            this.T && (oh(this.a, this.T, this.kc), this.T = null);
            this.G && (nh(this.a, this.G, !0), this.G = null)
          };
          n.Pd = function () {
            this.m && this.m.update && this.m.update()
          };
          n.Zd = function () {
            this.g && this.g.ab()
          };
          n.Le = function (b, c) {
            Ti(this, b, !0);
            this.a && (oh(this.a, b, c || !1), Ni(this))
          };

          function Ni(b) {
            Promise.resolve().then(function () {
              this.ha || this.dispatchEvent(new F("adaptation"))
            }.bind(b))
          }

          function Mi(b) {
            Promise.resolve().then(function () {
              this.ha || this.dispatchEvent(new F("trackschanged"))
            }.bind(b))
          }

          function Wi(b) {
            b.dispatchEvent(new F("texttrackvisibility"))
          }

          n.Ta = function (b) {
            if (!this.ha) {
              var c = new F("error", {detail: b});
              this.dispatchEvent(c);
              c.defaultPrevented && (b.handled = !0)
            }
          };
          n.be = function (b) {
            this.A ? this.A.o(b) : this.nb.push(b)
          };
          n.gb = function (b) {
            this.dispatchEvent(b)
          };
          n.ce = function () {
            if (this.f.error) {
              var b = this.f.error.code;
              if (1 != b) {
                var c = this.f.error.msExtendedCode;
                c && (0 > c && (c += Math.pow(2, 32)), c = c.toString(16));
                this.Ta(new B(2, 3, 3016, b, c, this.f.error.message))
              }
            }
          };
          n.Nd = function (b) {
            var c = ["output-restricted", "internal-error"], d = V(this.a), e = !1, f = Object.keys(b),
                    g = 1 == f.length && "00" == f[0];
            f.length && d.variants.forEach(function (d) {
              var f = [];
              d.audio && f.push(d.audio);
              d.video && f.push(d.video);
              f.forEach(function (f) {
                var h = d.allowedByKeySystem;
                f.keyId && (f = b[g ? "00" : f.keyId], d.allowedByKeySystem = !!f && 0 > c.indexOf(f));
                h != d.allowedByKeySystem && (e = !0)
              })
            });
            (f = Fd(eh(this.a), gh(this.a), d.variants)) && !f.allowedByKeySystem && Qi(this, d);
            e && (Mi(this), d = zd(d.variants, this.M, this.Ga, this.fa),
                    this.h.setVariants(d))
          };
          n.Kd = function (b, c) {
            if (this.m && this.m.onExpirationUpdated) this.m.onExpirationUpdated(b, c);
            this.dispatchEvent(new F("expirationupdated"))
          };

          function $i(b, c, d) {
            var e = void 0 == c.expiration ? Infinity : c.expiration, f = c.presentationTimeline.U();
            c = td(c.periods[0]);
            return {
              offlineUri: null,
              originalManifestUri: b,
              duration: f,
              size: 0,
              expiration: e,
              tracks: c,
              appMetadata: d
            }
          }

          function aj(b, c) {
            var d = ui(new si(b.ea(), b.O()), c.periods[0], new U(null, 0)), e = c.appMetadata || {};
            d = td(d);
            return {
              offlineUri: b.toString(),
              originalManifestUri: c.originalManifestUri,
              duration: c.duration,
              size: c.size,
              expiration: c.expiration,
              tracks: d,
              appMetadata: e
            }
          };

          function bj() {
            this.a = {}
          }

          function cj(b, c, d) {
            d = d.endTime - d.startTime;
            return dj(b, c) * d
          }

          function dj(b, c) {
            var d = b.a[c];
            null == d && (d = 0);
            return d
          };

          function Z(b) {
            if (!b || b.constructor != Y) throw new B(2, 9, 9008);
            this.a = b;
            this.b = ej(this);
            this.g = !1;
            this.c = null;
            this.f = []
          }

          z("shaka.offline.Storage", Z);

          function fj() {
            return Zh()
          }

          Z.support = fj;
          Z.prototype.destroy = function () {
            this.a = this.b = null;
            return Promise.resolve()
          };
          Z.prototype.destroy = Z.prototype.destroy;
          Z.prototype.configure = function (b) {
            kb(this.b, b, ej(this), {}, "")
          };
          Z.prototype.configure = Z.prototype.configure;
          Z.prototype.store = function (b, c, d) {
            var e = this;
            return q(function g() {
              var h, k, l, m, r, t;
              return x(g, function (g) {
                switch (g.u) {
                  case 1:
                    gj();
                    if (e.g) return g["return"](Promise.reject(new B(2, 9, 9006)));
                    e.g = !0;
                    h = c || {};
                    k = null;
                    l = function (b) {
                      k = k || b
                    };
                    return v(g, hj(e, b, l, d), 2);
                  case 2:
                    m = g.J;
                    r = !m.manifest.presentationTimeline.R() && !m.manifest.presentationTimeline.Aa();
                    if (!r) throw new B(2, 9, 9005, b);
                    ij(e);
                    if (k) throw k;
                    t = new Th;
                    return g["return"](mb([t, m.Fb], function () {
                      return q(function w() {
                        var c, d, g, l, r, u, Qb;
                        return x(w,
                                function (w) {
                                  switch (w.u) {
                                    case 1:
                                      return oa(w), v(w, t.init(), 4);
                                    case 4:
                                      return ij(e), jj(e, m.Fb, m.manifest.periods), v(w, Vh(t), 5);
                                    case 5:
                                      return c = w.J, ij(e), na(w, 6), v(w, kj(e, c.O, m.Fb, m.manifest, b, h || {}), 8);
                                    case 8:
                                      return d = w.J, ij(e), v(w, c.O.addManifests([d]), 9);
                                    case 9:
                                      return g = w.J, ij(e), l = new qi("manifest", c.path.ea, c.path.O, g[0]), w["return"](aj(l, d));
                                    case 6:
                                      return r = ra(w), u = e.f, Qb = function () {
                                      }, v(w, c.O.removeSegments(u, Qb), 10);
                                    case 10:
                                      throw k || r;
                                    case 2:
                                      sa(w), e.g = !1, e.c = null, e.f = [], ta(w, 0)
                                  }
                                })
                      })
                    }))
                }
              })
            })
          };
          Z.prototype.store = Z.prototype.store;

          function kj(b, c, d, e, f, g) {
            var h = $i(f, e, g), k = new Jh(function (c, d) {
              h.size = d;
              b.b.progressCallback(h, c)
            }), l;
            return mb([k], function () {
              l = lj(b, k, c, d, e, f, g);
              return Lh(k, b.a.s)
            }).then(function () {
              l.size = h.size;
              return l
            })
          }

          Z.prototype.remove = function (b) {
            var c = this;
            gj();
            var d = ri(b);
            if (null == d || "manifest" != d.a) return Promise.reject(new B(2, 9, 9004, b));
            var e = new Th;
            return mb([e], function () {
              return q(function g() {
                var b, k, l;
                return x(g, function (g) {
                  switch (g.u) {
                    case 1:
                      return v(g, e.init(), 2);
                    case 2:
                      return v(g, Xh(e, d.ea(), d.O()), 3);
                    case 3:
                      return b = g.J, v(g, b.getManifests([d.key()]), 4);
                    case 4:
                      return k = g.J, l = k[0], v(g, Promise.all([mj(c, d, l), nj(c, b, d, l)]), 0)
                  }
                })
              })
            })
          };
          Z.prototype.remove = Z.prototype.remove;

          function mj(b, c, d) {
            var e, f = new $b({
              $a: b.a.s, onError: function (b) {
                6013 != b.code && (e = b)
              }, Vb: function () {
              }, onExpirationUpdated: function () {
              }, onEvent: function () {
              }
            });
            f.configure(b.a.getConfiguration().drm);
            var g = ti(new si(c.ea(), c.O()), d);
            return mb([f], function () {
              return q(function k() {
                return x(k, function (c) {
                  switch (c.u) {
                    case 1:
                      return v(c, f.init(g, b.b.usePersistentLicense), 2);
                    case 2:
                      return v(c, gc(f, d.sessionIds), 0)
                  }
                })
              })
            }).then(function () {
              if (e) throw e;
            })
          }

          function nj(b, c, d, e) {
            function f() {
              k += 1;
              b.b.progressCallback(l, k / h)
            }

            var g = oj(e), h = g.length + 1, k = 0, l = aj(d, e);
            return Promise.all([c.removeSegments(g, f), c.removeManifests([d.key()], f)])
          }

          Z.prototype.list = function () {
            function b(b, d) {
              return q(function h() {
                var e;
                return x(h, function (f) {
                  switch (f.u) {
                    case 1:
                      return v(f, d.getAllManifests(), 2);
                    case 2:
                      e = f.J, H.forEach(e, function (d, e) {
                        var f = aj(new qi("manifest", b.ea, b.O, d), e);
                        c.push(f)
                      }), f.u = 0
                  }
                })
              })
            }

            gj();
            var c = [], d = new Th;
            return mb([d], function () {
              return q(function f() {
                var c;
                return x(f, function (f) {
                  switch (f.u) {
                    case 1:
                      return v(f, d.init(), 2);
                    case 2:
                      return c = Promise.resolve(), Wh(d, function (d, f) {
                        c = c.then(function () {
                          return b(d, f)
                        })
                      }), v(f, c, 0)
                  }
                })
              })
            }).then(function () {
              return c
            })
          };
          Z.prototype.list = Z.prototype.list;

          function hj(b, c, d, e) {
            function f() {
            }

            var g = b.a.s, h = b.a.getConfiguration(), k, l, m;
            return wf(c, g, h.manifest.retryParameters, e).then(function (b) {
              var e = this;
              ij(this);
              l = new $b({
                $a: g, onError: d, Vb: f, onExpirationUpdated: function () {
                }, onEvent: function () {
                }
              });
              l.configure(h.drm);
              var k = {
                networkingEngine: g, filterAllPeriods: function (b) {
                  jj(e, l, b)
                }, filterNewPeriod: function (b) {
                  pj(e, l, b)
                }, onTimelineRegionAdded: function () {
                }, onEvent: function () {
                }, onError: d
              };
              m = new b;
              m.configure(h.manifest);
              return m.start(c, k)
            }.bind(b)).then(function (b) {
              ij(this);
              k = b;
              return l.init(k, this.b.usePersistentLicense)
            }.bind(b)).then(function () {
              ij(this);
              return qj(k)
            }.bind(b)).then(function () {
              ij(this);
              return ec(l)
            }.bind(b)).then(function () {
              ij(this);
              return m.stop()
            }.bind(b)).then(function () {
              ij(this);
              return {manifest: k, Fb: l}
            }.bind(b))["catch"](function (b) {
              if (m) return m.stop().then(function () {
                throw b;
              });
              throw b;
            })
          }

          function rj(b, c) {
            var d = [], e = ld(b), f = [0, jd, kd], g = c.filter(function (b) {
              return "variant" == b.type
            });
            f = f.map(function (b) {
              return g.filter(function (c) {
                c = ld(c.language);
                return id(b, e, c)
              })
            });
            for (var h, k = 0; k < f.length; k++) if (f[k].length) {
              h = f[k];
              break
            }
            h || (f = g.filter(function (b) {
              return b.primary
            }), f.length && (h = f));
            h || (h = g, g.map(function (b) {
              return b.language
            }).filter(Fb));
            var l = h.filter(function (b) {
              return b.height && 480 >= b.height
            });
            l.length && (l.sort(function (b, c) {
              return c.height - b.height
            }), h = l.filter(function (b) {
              return b.height ==
                      l[0].height
            }));
            h.sort(function (b, c) {
              return b.bandwidth - c.bandwidth
            });
            h.length && d.push(h[Math.floor(h.length / 2)]);
            d.push.apply(d, c.filter(function (b) {
              return "text" == b.type
            }));
            return d
          }

          function ej(b) {
            return {
              trackSelectionCallback: function (c) {
                var d = b.a.getConfiguration();
                return rj(d.preferredAudioLanguage, c)
              }, progressCallback: function (b, d) {
                if (b || d) return null
              }, usePersistentLicense: !0
            }
          }

          function jj(b, c, d) {
            d.forEach(function (d) {
              return pj(b, c, d)
            })
          }

          function pj(b, c, d) {
            var e = null;
            if (b.c) {
              var f = b.c.filter(function (b) {
                return "variant" == b.type
              })[0];
              f && (e = xd(d, f))
            }
            var g = f = null;
            e && (e.audio && (f = e.audio), e.video && (g = e.video));
            pd(c, f, g, d);
            od(d, b.a.getConfiguration().restrictions, {width: Infinity, height: Infinity})
          }

          function qj(b) {
            var c = b.periods.map(function (b) {
              return b.variants
            }).reduce(Cb, []).map(function (b) {
              var c = [];
              b.audio && c.push(b.audio);
              b.video && c.push(b.video);
              return c
            }).reduce(Cb, []).filter(Fb);
            b = b.periods.map(function (b) {
              return b.textStreams
            }).reduce(Cb, []);
            c.push.apply(c, b);
            return Promise.all(c.map(function (b) {
              return b.createSegmentIndex()
            }))
          }

          function lj(b, c, d, e, f, g, h) {
            var k = new bj, l = f.periods.map(function (g) {
              return sj(b, c, d, k, e, f, g)
            }), m = e.b, r = jc(e);
            if (m && b.b.usePersistentLicense) {
              if (!r.length) throw new B(2, 9, 9007, g);
              m.initData = []
            }
            return {
              originalManifestUri: g,
              duration: f.presentationTimeline.U(),
              size: 0,
              expiration: e.vb(),
              periods: l,
              sessionIds: b.b.usePersistentLicense ? r : [],
              drmInfo: m,
              appMetadata: h
            }
          }

          function sj(b, c, d, e, f, g, h) {
            var k = vd(h, null, null), l = wd(h, null);
            k = b.b.trackSelectionCallback(k.concat(l));
            null == b.c && (b.c = k, jj(b, f, g.periods));
            tj(k);
            g.periods.forEach(function (b) {
              b.variants.forEach(function (b) {
                var c = b.audio, d = b.video;
                c && !d && (e.a[c.id] = c.bandwidth || b.bandwidth);
                !c && d && (e.a[d.id] = d.bandwidth || b.bandwidth);
                if (c && d) {
                  var f = c.bandwidth || 393216, g = d.bandwidth || b.bandwidth - f;
                  0 >= g && (g = b.bandwidth);
                  e.a[c.id] = f;
                  e.a[d.id] = g
                }
              });
              b.textStreams.forEach(function (b) {
                e.a[b.id] = 52
              })
            });
            var m = {};
            k.forEach(function (b) {
              "variant" ==
              b.type && null != b.audioId && (m[b.audioId] = !0);
              "variant" == b.type && null != b.videoId && (m[b.videoId] = !0);
              "text" == b.type && (m[b.id] = !0)
            });
            var r = {};
            uj(g).filter(function (b) {
              return !!m[b.id]
            }).forEach(function (f) {
              r[f.id] = vj(b, c, d, e, g, f)
            });
            k.forEach(function (b) {
              "variant" == b.type && null != b.audioId && r[b.audioId].variantIds.push(b.id);
              "variant" == b.type && null != b.videoId && r[b.videoId].variantIds.push(b.id)
            });
            return {startTime: h.startTime, streams: H.values(r)}
          }

          function vj(b, c, d, e, f, g) {
            var h = {
              id: g.id,
              primary: g.primary,
              presentationTimeOffset: g.presentationTimeOffset || 0,
              contentType: g.type,
              mimeType: g.mimeType,
              codecs: g.codecs,
              frameRate: g.frameRate,
              kind: g.kind,
              language: g.language,
              label: g.label,
              width: g.width || null,
              height: g.height || null,
              initSegmentKey: null,
              encrypted: g.encrypted,
              keyId: g.keyId,
              segments: [],
              variantIds: []
            };
            f = f.presentationTimeline.Xa();
            var k = g.id;
            wj(g, f, function (f) {
              Kh(c, k, xj(b, f), cj(e, g.id, f), function (c) {
                return d.addSegments([{data: c}]).then(function (c) {
                  b.f.push(c[0]);
                  h.segments.push({startTime: f.startTime, endTime: f.endTime, dataKey: c[0]})
                })
              })
            });
            (f = g.initSegmentReference) && Kh(c, k, xj(b, f), .5 * dj(e, g.id), function (c) {
              return d.addSegments([{data: c}]).then(function (c) {
                b.f.push(c[0]);
                h.initSegmentKey = c[0]
              })
            });
            return h
          }

          function wj(b, c, d) {
            c = b.findSegmentPosition(c);
            for (var e = null == c ? null : b.getSegmentReference(c); e;) d(e), e = b.getSegmentReference(++c)
          }

          function ij(b) {
            if (!b.a) throw new B(2, 9, 7001);
          }

          function gj() {
            if (!Zh()) throw new B(2, 9, 9E3);
          }

          function xj(b, c) {
            var d = b.a.getConfiguration().streaming.retryParameters;
            d = rb(c.c(), d);
            if (0 != c.b || null != c.a) d.headers.Range = "bytes=" + c.b + "-" + (null == c.a ? "" : c.a);
            return d
          }

          function oj(b) {
            var c = [];
            b.periods.forEach(function (b) {
              b.streams.forEach(function (b) {
                null != b.initSegmentKey && c.push(b.initSegmentKey);
                b.segments.forEach(function (b) {
                  c.push(b.dataKey)
                })
              })
            });
            return c
          }

          Z.deleteAll = function () {
            return q(function c() {
              var d;
              return x(c, function (c) {
                switch (c.u) {
                  case 1:
                    return d = new Th, oa(c), v(c, Yh(d), 2);
                  case 2:
                    return sa(c), v(c, d.destroy(), 5);
                  case 5:
                    ta(c, 0)
                }
              })
            })
          };

          function tj(b) {
            b.some(function (c) {
              return b.some(function (b) {
                return c != b && c.type == b.type && c.kind == b.kind && c.language == b.language
              })
            })
          }

          function uj(b) {
            var c = {};
            b.periods.forEach(function (b) {
              b.textStreams.forEach(function (b) {
                c[b.id] = b
              });
              b.variants.forEach(function (b) {
                b.audio && (c[b.audio.id] = b.audio);
                b.video && (c[b.video.id] = b.video)
              })
            });
            return H.values(c)
          }

          Gi.offline = fj;
          z("shaka.polyfill.installAll", function () {
            for (var b = 0; b < yj.length; ++b) yj[b].ed()
          });
          var yj = [];

          function zj(b, c) {
            c = c || 0;
            for (var d = {priority: c, ed: b}, e = 0; e < yj.length; e++) if (yj[e].priority < c) {
              yj.splice(e, 0, d);
              return
            }
            yj.push(d)
          }

          z("shaka.polyfill.register", zj);

          function Aj(b) {
            var c = b.type.replace(/^(webkit|moz|MS)/, "").toLowerCase();
            if ("function" === typeof Event) var d = new Event(c, b); else d = document.createEvent("Event"), d.initEvent(c, b.bubbles, b.cancelable);
            b.target.dispatchEvent(d)
          }

          zj(function () {
            if (window.Document) {
              var b = Element.prototype;
              b.requestFullscreen = b.requestFullscreen || b.mozRequestFullScreen || b.msRequestFullscreen || b.webkitRequestFullscreen;
              b = Document.prototype;
              b.exitFullscreen = b.exitFullscreen || b.mozCancelFullScreen || b.msExitFullscreen || b.webkitExitFullscreen;
              "fullscreenElement" in document || (Object.defineProperty(document, "fullscreenElement", {
                get: function () {
                  return document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement
                }
              }), Object.defineProperty(document,
                      "fullscreenEnabled", {
                        get: function () {
                          return document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitFullscreenEnabled
                        }
                      }));
              document.addEventListener("webkitfullscreenchange", Aj);
              document.addEventListener("webkitfullscreenerror", Aj);
              document.addEventListener("mozfullscreenchange", Aj);
              document.addEventListener("mozfullscreenerror", Aj);
              document.addEventListener("MSFullscreenChange", Aj);
              document.addEventListener("MSFullscreenError", Aj)
            }
          });
          zj(function () {
            var b = navigator.userAgent;
            b && 0 <= b.indexOf("CrKey") && delete window.indexedDB
          });
          var Bj;

          function Cj(b, c, d) {
            if ("input" == b) switch (this.type) {
              case "range":
                b = "change"
            }
            Bj.call(this, b, c, d)
          }

          zj(function () {
            0 > navigator.userAgent.indexOf("Trident/") || HTMLInputElement.prototype.addEventListener == Cj || (Bj = HTMLInputElement.prototype.addEventListener, HTMLInputElement.prototype.addEventListener = Cj)
          });
          zj(function () {
          });

          function Dj() {
            var b = MediaSource.prototype.addSourceBuffer;
            MediaSource.prototype.addSourceBuffer = function () {
              var c = b.apply(this, arguments);
              c.abort = function () {
              };
              return c
            }
          }

          function Ej() {
            var b = SourceBuffer.prototype.remove;
            SourceBuffer.prototype.remove = function (c, d) {
              return b.call(this, c, d - .001)
            }
          }

          function Fj() {
            var b = MediaSource.prototype.endOfStream;
            MediaSource.prototype.endOfStream = function () {
              for (var c = 0, d = 0; d < this.sourceBuffers.length; ++d) {
                var g = this.sourceBuffers[d];
                g = g.buffered.end(g.buffered.length - 1);
                c = Math.max(c, g)
              }
              if (!isNaN(this.duration) && c < this.duration) for (this.vc = !0, c = 0; c < this.sourceBuffers.length; ++c) this.sourceBuffers[c].qc = !1;
              return b.apply(this, arguments)
            };
            var c = !1, d = MediaSource.prototype.addSourceBuffer;
            MediaSource.prototype.addSourceBuffer = function () {
              var b = d.apply(this, arguments);
              b.mediaSource_ = this;
              b.addEventListener("updateend", Gj, !1);
              c || (this.addEventListener("sourceclose", Hj, !1), c = !0);
              return b
            }
          }

          function Gj(b) {
            var c = b.target, d = c.mediaSource_;
            if (d.vc) {
              b.preventDefault();
              b.stopPropagation();
              b.stopImmediatePropagation();
              c.qc = !0;
              for (b = 0; b < d.sourceBuffers.length; ++b) if (0 == d.sourceBuffers[b].qc) return;
              d.vc = !1
            }
          }

          function Hj(b) {
            b = b.target;
            for (var c = 0; c < b.sourceBuffers.length; ++c) b.sourceBuffers[c].removeEventListener("updateend", Gj, !1);
            b.removeEventListener("sourceclose", Hj, !1)
          }

          function Ij() {
            var b = MediaSource.isTypeSupported;
            MediaSource.isTypeSupported = function (c) {
              return "mp2t" == c.split(/ *; */)[0].split("/")[1] ? !1 : b(c)
            }
          }

          function Jj() {
            var b = MediaSource.isTypeSupported, c = /^dv(?:he|av)\./;
            MediaSource.isTypeSupported = function (d) {
              for (var e = d.split(/ *; */), f = e[0], g = {}, h = 1; h < e.length; ++h) {
                var k = e[h].split("="), l = k[0];
                k = k[1].replace(/"(.*)"/, "$1");
                g[l] = k
              }
              e = g.codecs;
              if (!e) return b(d);
              var m = !1, r = !1;
              d = e.split(",").filter(function (b) {
                if (c.test(b)) return r = !0, !1;
                /^(hev|hvc)1\.2/.test(b) && (m = !0);
                return !0
              });
              r && (m = !1);
              g.codecs = d.join(",");
              m && (g.eotf = "smpte2084");
              for (var t in g) f += "; " + t + '="' + g[t] + '"';
              return cast.__platform__.canDisplayType(f)
            }
          }

          zj(function () {
            if (window.MediaSource) if (window.cast && cast.__platform__ && cast.__platform__.canDisplayType) Jj(); else if (navigator.vendor && 0 <= navigator.vendor.indexOf("Apple")) {
              var b = navigator.appVersion;
              Ij();
              if (0 <= b.indexOf("Version/8")) window.MediaSource = null; else if (0 <= b.indexOf("Version/9")) Dj(); else if (0 <= b.indexOf("Version/10")) Dj(), Fj(); else if (b.includes("Version/11") || b.includes("Version/12")) Dj(), Ej()
            }
          });

          function Kj(b) {
            this.f = [];
            this.b = [];
            this.a = [];
            (new R).Y("pssh", this.c.bind(this)).parse(b.buffer)
          }

          Kj.prototype.c = function (b) {
            if (!(1 < b.version)) {
              var c = Xb(b.reader.Da(16)), d = [];
              if (0 < b.version) for (var e = b.reader.B(), f = 0; f < e; ++f) {
                var g = Xb(b.reader.Da(16));
                d.push(g)
              }
              e = b.reader.B();
              b.reader.F(e);
              this.b.push.apply(this.b, d);
              this.f.push(c);
              this.a.push({start: b.start, end: b.start + b.size - 1})
            }
          };

          function Lj(b, c) {
            try {
              var d = new Mj(b, c);
              return Promise.resolve(d)
            } catch (e) {
              return Promise.reject(e)
            }
          }

          function Mj(b, c) {
            this.keySystem = b;
            for (var d = !1, e = 0; e < c.length; ++e) {
              var f = c[e], g = {
                audioCapabilities: [],
                videoCapabilities: [],
                persistentState: "optional",
                distinctiveIdentifier: "optional",
                initDataTypes: f.initDataTypes,
                sessionTypes: ["temporary"],
                label: f.label
              }, h = !1;
              if (f.audioCapabilities) for (var k = 0; k < f.audioCapabilities.length; ++k) {
                var l = f.audioCapabilities[k];
                if (l.contentType) {
                  h = !0;
                  var m = l.contentType.split(";")[0];
                  MSMediaKeys.isTypeSupported(this.keySystem, m) && (g.audioCapabilities.push(l), d = !0)
                }
              }
              if (f.videoCapabilities) for (k =
                                                    0; k < f.videoCapabilities.length; ++k) l = f.videoCapabilities[k], l.contentType && (h = !0, m = l.contentType.split(";")[0], MSMediaKeys.isTypeSupported(this.keySystem, m) && (g.videoCapabilities.push(l), d = !0));
              h || (d = MSMediaKeys.isTypeSupported(this.keySystem, "video/mp4"));
              "required" == f.persistentState && (d = !1);
              if (d) {
                this.a = g;
                return
              }
            }
            d = Error("Unsupported keySystem");
            d.name = "NotSupportedError";
            d.code = DOMException.NOT_SUPPORTED_ERR;
            throw d;
          }

          Mj.prototype.createMediaKeys = function () {
            var b = new Nj(this.keySystem);
            return Promise.resolve(b)
          };
          Mj.prototype.getConfiguration = function () {
            return this.a
          };

          function Oj(b) {
            var c = this.mediaKeys;
            c && c != b && Pj(c, null);
            delete this.mediaKeys;
            return (this.mediaKeys = b) ? Pj(b, this) : Promise.resolve()
          }

          function Nj(b) {
            this.a = new MSMediaKeys(b);
            this.b = new xb
          }

          Nj.prototype.createSession = function (b) {
            var c = b || "temporary";
            if ("temporary" != c) throw new TypeError("Session type " + b + " is unsupported on this platform.");
            return new Qj(this.a, c)
          };
          Nj.prototype.setServerCertificate = function () {
            return Promise.resolve(!1)
          };

          function Pj(b, c) {
            function d() {
              c.msSetMediaKeys(e.a);
              c.removeEventListener("loadedmetadata", d)
            }

            yb(b.b);
            if (!c) return Promise.resolve();
            E(b.b, c, "msneedkey", Rj);
            var e = b;
            try {
              return 1 <= c.readyState ? c.msSetMediaKeys(b.a) : c.addEventListener("loadedmetadata", d), Promise.resolve()
            } catch (f) {
              return Promise.reject(f)
            }
          }

          function Qj(b) {
            L.call(this);
            this.c = null;
            this.g = b;
            this.b = this.a = null;
            this.f = new xb;
            this.sessionId = "";
            this.expiration = NaN;
            this.closed = new A;
            this.keyStatuses = new Sj
          }

          Ba(Qj, L);
          n = Qj.prototype;
          n.generateRequest = function (b, c) {
            this.a = new A;
            try {
              this.c = this.g.createSession("video/mp4", new Uint8Array(c), null), E(this.f, this.c, "mskeymessage", this.Td.bind(this)), E(this.f, this.c, "mskeyadded", this.Rd.bind(this)), E(this.f, this.c, "mskeyerror", this.Sd.bind(this)), Tj(this, "status-pending")
            } catch (d) {
              this.a.reject(d)
            }
            return this.a
          };
          n.load = function () {
            return Promise.reject(Error("MediaKeySession.load not yet supported"))
          };
          n.update = function (b) {
            this.b = new A;
            try {
              this.c.update(new Uint8Array(b))
            } catch (c) {
              this.b.reject(c)
            }
            return this.b
          };
          n.close = function () {
            try {
              this.c.close(), this.closed.resolve(), yb(this.f)
            } catch (b) {
              this.closed.reject(b)
            }
            return this.closed
          };
          n.remove = function () {
            return Promise.reject(Error("MediaKeySession.remove is only applicable for persistent licenses, which are not supported on this platform"))
          };

          function Rj(b) {
            if (b.initData) {
              var c = document.createEvent("CustomEvent");
              c.initCustomEvent("encrypted", !1, !1, null);
              c.initDataType = "cenc";
              if (b = b.initData) {
                var d = new Kj(b);
                if (!(1 >= d.a.length)) {
                  for (var e = [], f = 0; f < d.a.length; f++) e.push(b.subarray(d.a[f].start, d.a[f].end + 1));
                  b = gb(e, Uj);
                  for (e = d = 0; e < b.length; e++) d += b[e].length;
                  d = new Uint8Array(d);
                  for (f = e = 0; f < b.length; f++) d.set(b[f], e), e += b[f].length;
                  b = d
                }
              }
              c.initData = b;
              this.dispatchEvent(c)
            }
          }

          function Uj(b, c) {
            return Yb(b, c)
          }

          n.Td = function (b) {
            this.a && (this.a.resolve(), this.a = null);
            this.dispatchEvent(new F("message", {
              messageType: void 0 == this.keyStatuses.a ? "license-request" : "license-renewal",
              message: b.message.buffer
            }))
          };
          n.Rd = function () {
            this.a ? (Tj(this, "usable"), this.a.resolve(), this.a = null) : this.b && (Tj(this, "usable"), this.b.resolve(), this.b = null)
          };
          n.Sd = function () {
            var b = Error("EME PatchedMediaKeysMs key error");
            b.errorCode = this.c.error;
            if (null != this.a) this.a.reject(b), this.a = null; else if (null != this.b) this.b.reject(b), this.b = null; else switch (this.c.error.code) {
              case MSMediaKeyError.MS_MEDIA_KEYERR_OUTPUT:
              case MSMediaKeyError.MS_MEDIA_KEYERR_HARDWARECHANGE:
                Tj(this, "output-not-allowed");
                break;
              default:
                Tj(this, "internal-error")
            }
          };

          function Tj(b, c) {
            var d = b.keyStatuses;
            d.size = void 0 == c ? 0 : 1;
            d.a = c;
            b.dispatchEvent(new F("keystatuseschange"))
          }

          function Sj() {
            this.size = 0;
            this.a = void 0
          }

          var Vj;
          n = Sj.prototype;
          n.forEach = function (b) {
            this.a && b(this.a, Vj)
          };
          n.get = function (b) {
            if (this.has(b)) return this.a
          };
          n.has = function (b) {
            var c = Vj;
            return this.a && Yb(new Uint8Array(b), new Uint8Array(c)) ? !0 : !1
          };
          n.entries = function () {
          };
          n.keys = function () {
          };
          n.values = function () {
          };
          zj(function () {
            !window.HTMLVideoElement || !window.MSMediaKeys || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (Vj = (new Uint8Array([0])).buffer, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Oj, window.MediaKeys = Nj, window.MediaKeySystemAccess = Mj, navigator.requestMediaKeySystemAccess = Lj)
          });

          function Wj() {
            return Promise.reject(Error("The key system specified is not supported."))
          }

          function Xj(b) {
            return null == b ? Promise.resolve() : Promise.reject(Error("MediaKeys not supported."))
          }

          function Yj() {
            throw new TypeError("Illegal constructor.");
          }

          Yj.prototype.createSession = function () {
          };
          Yj.prototype.setServerCertificate = function () {
          };

          function Zj() {
            throw new TypeError("Illegal constructor.");
          }

          Zj.prototype.getConfiguration = function () {
          };
          Zj.prototype.createMediaKeys = function () {
          };
          zj(function () {
            !window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || (navigator.requestMediaKeySystemAccess = Wj, delete HTMLMediaElement.prototype.mediaKeys, HTMLMediaElement.prototype.mediaKeys = null, HTMLMediaElement.prototype.setMediaKeys = Xj, window.MediaKeys = Yj, window.MediaKeySystemAccess = Zj)
          }, -10);
          var ak = "";

          function bk(b) {
            var c = ak;
            return c ? c + b.charAt(0).toUpperCase() + b.slice(1) : b
          }

          function ck(b, c) {
            try {
              var d = new dk(b, c);
              return Promise.resolve(d)
            } catch (e) {
              return Promise.reject(e)
            }
          }

          function ek(b) {
            var c = this.mediaKeys;
            c && c != b && fk(c, null);
            delete this.mediaKeys;
            (this.mediaKeys = b) && fk(b, this);
            return Promise.resolve()
          }

          function dk(b, c) {
            this.a = this.keySystem = b;
            var d = !1;
            "org.w3.clearkey" == b && (this.a = "webkit-org.w3.clearkey", d = !1);
            var e = !1;
            var f = document.getElementsByTagName("video");
            f = f.length ? f[0] : document.createElement("video");
            for (var g = 0; g < c.length; ++g) {
              var h = c[g], k = {
                audioCapabilities: [],
                videoCapabilities: [],
                persistentState: "optional",
                distinctiveIdentifier: "optional",
                initDataTypes: h.initDataTypes,
                sessionTypes: ["temporary"],
                label: h.label
              }, l = !1;
              if (h.audioCapabilities) for (var m = 0; m < h.audioCapabilities.length; ++m) {
                var r =
                        h.audioCapabilities[m];
                if (r.contentType) {
                  l = !0;
                  var t = r.contentType.split(";")[0];
                  f.canPlayType(t, this.a) && (k.audioCapabilities.push(r), e = !0)
                }
              }
              if (h.videoCapabilities) for (m = 0; m < h.videoCapabilities.length; ++m) r = h.videoCapabilities[m], r.contentType && (l = !0, f.canPlayType(r.contentType, this.a) && (k.videoCapabilities.push(r), e = !0));
              l || (e = f.canPlayType("video/mp4", this.a) || f.canPlayType("video/webm", this.a));
              "required" == h.persistentState && (d ? (k.persistentState = "required", k.sessionTypes = ["persistent-license"]) :
                      e = !1);
              if (e) {
                this.b = k;
                return
              }
            }
            d = "Unsupported keySystem";
            if ("org.w3.clearkey" == b || "com.widevine.alpha" == b) d = "None of the requested configurations were supported.";
            d = Error(d);
            d.name = "NotSupportedError";
            d.code = DOMException.NOT_SUPPORTED_ERR;
            throw d;
          }

          dk.prototype.createMediaKeys = function () {
            var b = new gk(this.a);
            return Promise.resolve(b)
          };
          dk.prototype.getConfiguration = function () {
            return this.b
          };

          function gk(b) {
            this.g = b;
            this.b = null;
            this.a = new xb;
            this.c = [];
            this.f = {}
          }

          function fk(b, c) {
            b.b = c;
            yb(b.a);
            var d = ak;
            c && (E(b.a, c, d + "needkey", b.ge.bind(b)), E(b.a, c, d + "keymessage", b.fe.bind(b)), E(b.a, c, d + "keyadded", b.de.bind(b)), E(b.a, c, d + "keyerror", b.ee.bind(b)))
          }

          n = gk.prototype;
          n.createSession = function (b) {
            var c = b || "temporary";
            if ("temporary" != c && "persistent-license" != c) throw new TypeError("Session type " + b + " is unsupported on this platform.");
            b = this.b || document.createElement("video");
            b.src || (b.src = "about:blank");
            c = new hk(b, this.g, c);
            this.c.push(c);
            return c
          };
          n.setServerCertificate = function () {
            return Promise.resolve(!1)
          };
          n.ge = function (b) {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent("encrypted", !1, !1, null);
            c.initDataType = "webm";
            c.initData = b.initData;
            this.b.dispatchEvent(c)
          };
          n.fe = function (b) {
            var c = ik(this, b.sessionId);
            c && (b = new F("message", {
              messageType: void 0 == c.keyStatuses.a ? "licenserequest" : "licenserenewal",
              message: b.message
            }), c.b && (c.b.resolve(), c.b = null), c.dispatchEvent(b))
          };
          n.de = function (b) {
            if (b = ik(this, b.sessionId)) jk(b, "usable"), b.a && b.a.resolve(), b.a = null
          };
          n.ee = function (b) {
            var c = ik(this, b.sessionId);
            if (c) {
              var d = Error("EME v0.1b key error");
              d.errorCode = b.errorCode;
              d.errorCode.systemCode = b.systemCode;
              !b.sessionId && c.b ? (d.method = "generateRequest", 45 == b.systemCode && (d.message = "Unsupported session type."), c.b.reject(d), c.b = null) : b.sessionId && c.a ? (d.method = "update", c.a.reject(d), c.a = null) : (d = b.systemCode, b.errorCode.code == MediaKeyError.MEDIA_KEYERR_OUTPUT ? jk(c, "output-restricted") : 1 == d ? jk(c, "expired") : jk(c, "internal-error"))
            }
          };

          function ik(b, c) {
            var d = b.f[c];
            return d ? d : (d = b.c.shift()) ? (d.sessionId = c, b.f[c] = d) : null
          }

          function hk(b, c, d) {
            L.call(this);
            this.f = b;
            this.h = !1;
            this.a = this.b = null;
            this.c = c;
            this.g = d;
            this.sessionId = "";
            this.expiration = NaN;
            this.closed = new A;
            this.keyStatuses = new kk
          }

          Ba(hk, L);

          function lk(b, c, d) {
            if (b.h) return Promise.reject(Error("The session is already initialized."));
            b.h = !0;
            try {
              if ("persistent-license" == b.g) if (d) var e = new Uint8Array(Ob("LOAD_SESSION|" + d)); else {
                var f = Ob("PERSISTENT|"), g = new Uint8Array(f.byteLength + c.byteLength);
                g.set(new Uint8Array(f), 0);
                g.set(new Uint8Array(c), f.byteLength);
                e = g
              } else e = new Uint8Array(c)
            } catch (k) {
              return Promise.reject(k)
            }
            b.b = new A;
            var h = bk("generateKeyRequest");
            try {
              b.f[h](b.c, e)
            } catch (k) {
              if ("InvalidStateError" != k.name) return b.b = null, Promise.reject(k);
              setTimeout(function () {
                try {
                  this.f[h](this.c, e)
                } catch (l) {
                  this.b.reject(l), this.b = null
                }
              }.bind(b), 10)
            }
            return b.b
          }

          n = hk.prototype;
          n.fc = function (b, c) {
            if (this.a) this.a.then(this.fc.bind(this, b, c))["catch"](this.fc.bind(this, b, c)); else {
              this.a = b;
              if ("webkit-org.w3.clearkey" == this.c) {
                var d = Kb(c);
                var e = JSON.parse(d);
                "oct" != e.keys[0].kty && (this.a.reject(Error("Response is not a valid JSON Web Key Set.")), this.a = null);
                d = Vb(e.keys[0].k);
                e = Vb(e.keys[0].kid)
              } else d = new Uint8Array(c), e = null;
              var f = bk("addKey");
              try {
                this.f[f](this.c, d, e, this.sessionId)
              } catch (g) {
                this.a.reject(g), this.a = null
              }
            }
          };

          function jk(b, c) {
            var d = b.keyStatuses;
            d.size = void 0 == c ? 0 : 1;
            d.a = c;
            b.dispatchEvent(new F("keystatuseschange"))
          }

          n.generateRequest = function (b, c) {
            return lk(this, c, null)
          };
          n.load = function (b) {
            return "persistent-license" == this.g ? lk(this, null, b) : Promise.reject(Error("Not a persistent session."))
          };
          n.update = function (b) {
            var c = new A;
            this.fc(c, b);
            return c
          };
          n.close = function () {
            if ("persistent-license" != this.g) {
              if (!this.sessionId) return this.closed.reject(Error("The session is not callable.")), this.closed;
              var b = bk("cancelKeyRequest");
              try {
                this.f[b](this.c, this.sessionId)
              } catch (c) {
              }
            }
            this.closed.resolve();
            return this.closed
          };
          n.remove = function () {
            return "persistent-license" != this.g ? Promise.reject(Error("Not a persistent session.")) : this.close()
          };

          function kk() {
            this.size = 0;
            this.a = void 0
          }

          var mk;
          n = kk.prototype;
          n.forEach = function (b) {
            this.a && b(this.a, mk)
          };
          n.get = function (b) {
            if (this.has(b)) return this.a
          };
          n.has = function (b) {
            var c = mk;
            return this.a && Yb(new Uint8Array(b), new Uint8Array(c)) ? !0 : !1
          };
          n.entries = function () {
          };
          n.keys = function () {
          };
          n.values = function () {
          };
          zj(function () {
            if (!(!window.HTMLVideoElement || navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration)) {
              if (HTMLMediaElement.prototype.webkitGenerateKeyRequest) ak = "webkit"; else if (!HTMLMediaElement.prototype.generateKeyRequest) return;
              mk = (new Uint8Array([0])).buffer;
              navigator.requestMediaKeySystemAccess = ck;
              delete HTMLMediaElement.prototype.mediaKeys;
              HTMLMediaElement.prototype.mediaKeys = null;
              HTMLMediaElement.prototype.setMediaKeys = ek;
              window.MediaKeys = gk;
              window.MediaKeySystemAccess =
                      dk
            }
          });
          zj(function () {
            if (window.HTMLMediaElement) {
              var b = HTMLMediaElement.prototype.play;
              HTMLMediaElement.prototype.play = function () {
                var c = b.apply(this, arguments);
                c && c["catch"](function () {
                });
                return c
              }
            }
          });

          function nk() {
            return {
              droppedVideoFrames: this.webkitDroppedFrameCount,
              totalVideoFrames: this.webkitDecodedFrameCount,
              corruptedVideoFrames: 0,
              creationTime: NaN,
              totalFrameDelay: 0
            }
          }

          zj(function () {
            if (window.HTMLVideoElement) {
              var b = HTMLVideoElement.prototype;
              !b.getVideoPlaybackQuality && "webkitDroppedFrameCount" in b && (b.getVideoPlaybackQuality = nk)
            }
          });

          function ok(b, c, d) {
            return new window.TextTrackCue(b, c, d)
          }

          function pk(b, c, d) {
            return new window.TextTrackCue(b + "-" + c + "-" + d, b, c, d)
          }

          zj(function () {
            if (!window.VTTCue && window.TextTrackCue) {
              var b = TextTrackCue.length;
              if (3 == b) window.VTTCue = ok; else if (6 == b) window.VTTCue = pk; else {
                try {
                  var c = !!ok(1, 2, "")
                } catch (d) {
                  c = !1
                }
                c && (window.VTTCue = ok)
              }
            }
          });

          function qk() {
          }

          qk.prototype.parseInit = function () {
          };
          qk.prototype.parseMedia = function (b, c) {
            var d = Kb(b), e = [], f = new DOMParser, g = null;
            try {
              g = f.parseFromString(d, "text/xml")
            } catch (pa) {
              throw new B(2, 2, 2005);
            }
            if (g) {
              if (f = g.getElementsByTagName("tt")[0]) {
                g = se(f, "http://www.w3.org/ns/ttml#parameter", "frameRate");
                var h = se(f, "http://www.w3.org/ns/ttml#parameter", "subFrameRate");
                var k = se(f, "http://www.w3.org/ns/ttml#parameter", "frameRateMultiplier");
                var l = se(f, "http://www.w3.org/ns/ttml#parameter", "tickRate");
                d = f.getAttribute("xml:space") || "default"
              } else throw new B(2,
                      2, 2005);
              if ("default" != d && "preserve" != d) throw new B(2, 2, 2005);
              d = "default" == d;
              g = new rk(g, h, k, l);
              h = sk(f.getElementsByTagName("styling")[0]);
              k = sk(f.getElementsByTagName("layout")[0]);
              l = [];
              for (var m = 0; m < k.length; m++) {
                var r = k[m], t = h;
                var u = new Ac;
                var y = r.getAttribute("xml:id");
                if (y) {
                  u.id = y;
                  var w;
                  if (w = tk(r, t, "extent")) w = (y = uk.exec(w)) || vk.exec(w), null != w && (u.width = Number(w[1]), u.height = Number(w[2]), u.widthUnits = y ? Oc : 0, u.heightUnits = y ? Oc : 0);
                  if (r = tk(r, t, "origin")) w = (y = uk.exec(r)) || vk.exec(r), null != w && (u.viewportAnchorX =
                          Number(w[1]), u.viewportAnchorY = Number(w[2]), u.viewportAnchorUnits = y ? Oc : 0)
                } else u = null;
                u && l.push(u)
              }
              f = sk(f.getElementsByTagName("body")[0]);
              for (m = 0; m < f.length; m++) (u = wk(f[m], c.periodStart, g, h, k, l, d)) && e.push(u)
            }
            return e
          };
          var uk = /^(\d{1,2}|100)% (\d{1,2}|100)%$/, xk = /^(\d+px|\d+em)$/, vk = /^(\d+)px (\d+)px$/,
                  yk = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, zk = /^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,
                  Ak = /^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d{2,})$/, Bk = /^(\d*(?:\.\d*)?)f$/, Ck = /^(\d*(?:\.\d*)?)t$/,
                  Dk = /^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,
                  Ek = {left: "start", center: Gc, right: "end", start: "start", end: "end"},
                  Fk = {left: "line-left", center: "center", right: "line-right"};

          function sk(b) {
            var c = [];
            if (!b) return c;
            for (var d = b.childNodes, e = 0; e < d.length; e++) {
              var f = "span" == d[e].nodeName && "p" == b.nodeName;
              d[e].nodeType != Node.ELEMENT_NODE || "br" == d[e].nodeName || f || (f = sk(d[e]), c = c.concat(f))
            }
            c.length || c.push(b);
            return c
          }

          function Gk(b, c) {
            for (var d = b.childNodes, e = 0; e < d.length; e++) if ("br" == d[e].nodeName && 0 < e) d[e - 1].textContent += "\n"; else if (0 < d[e].childNodes.length) Gk(d[e], c); else if (c) {
              var f = d[e].textContent.trim();
              f = f.replace(/\s+/g, " ");
              d[e].textContent = f
            }
          }

          function wk(b, c, d, e, f, g, h) {
            if (!b.hasAttribute("begin") && !b.hasAttribute("end") && /^\s*$/.test(b.textContent)) return null;
            Gk(b, h);
            h = Hk(b.getAttribute("begin"), d);
            var k = Hk(b.getAttribute("end"), d);
            d = Hk(b.getAttribute("dur"), d);
            var l = b.textContent;
            null == k && null != d && (k = h + d);
            if (null == h || null == k) throw new B(2, 2, 2001);
            c = new I(h + c, k + c, l);
            if ((f = Ik(b, "region", f)) && f.getAttribute("xml:id")) {
              var m = f.getAttribute("xml:id");
              g = g.filter(function (b) {
                return b.id == m
              });
              c.region = g[0]
            }
            Jk(c, b, f, e);
            return c
          }

          function Jk(b, c, d, e) {
            "rtl" == Kk(c, d, e, "direction") && (b.writingDirection = 1);
            var f = Kk(c, d, e, "writingMode");
            "tb" == f || "tblr" == f ? b.writingDirection = 2 : "tbrl" == f ? b.writingDirection = 3 : "rltb" == f || "rl" == f ? b.writingDirection = 1 : f && (b.writingDirection = Ec);
            if (f = Kk(c, d, e, "textAlign")) b.positionAlign = Fk[f], b.lineAlign = Ek[f], b.textAlign = Kc[f.toUpperCase()];
            if (f = Kk(c, d, e, "displayAlign")) b.displayAlign = Lc[f.toUpperCase()];
            if (f = Kk(c, d, e, "color")) b.color = f;
            if (f = Kk(c, d, e, "backgroundColor")) b.backgroundColor = f;
            if (f = Kk(c,
                    d, e, "fontFamily")) b.fontFamily = f;
            (f = Kk(c, d, e, "fontWeight")) && "bold" == f && (b.fontWeight = 700);
            (f = Kk(c, d, e, "wrapOption")) && "noWrap" == f && (b.wrapLine = !1);
            (f = Kk(c, d, e, "lineHeight")) && f.match(xk) && (b.lineHeight = f);
            (f = Kk(c, d, e, "fontSize")) && f.match(xk) && (b.fontSize = f);
            if (f = Kk(c, d, e, "fontStyle")) b.fontStyle = Nc[f.toUpperCase()];
            (d = tk(d, e, "textDecoration")) && Lk(b, d);
            (c = Mk(c, e, "textDecoration")) && Lk(b, c)
          }

          function Lk(b, c) {
            for (var d = c.split(" "), e = 0; e < d.length; e++) switch (d[e]) {
              case "underline":
                0 > b.textDecoration.indexOf("underline") && b.textDecoration.push("underline");
                break;
              case "noUnderline":
                0 <= b.textDecoration.indexOf("underline") && ib(b.textDecoration, "underline");
                break;
              case "lineThrough":
                0 > b.textDecoration.indexOf("lineThrough") && b.textDecoration.push("lineThrough");
                break;
              case "noLineThrough":
                0 <= b.textDecoration.indexOf("lineThrough") && ib(b.textDecoration, "lineThrough");
                break;
              case "overline":
                0 > b.textDecoration.indexOf("overline") &&
                b.textDecoration.push("overline");
                break;
              case "noOverline":
                0 <= b.textDecoration.indexOf("overline") && ib(b.textDecoration, "overline")
            }
          }

          function Kk(b, c, d, e) {
            return (b = Mk(b, d, e)) ? b : tk(c, d, e)
          }

          function tk(b, c, d) {
            for (var e = sk(b), f = 0; f < e.length; f++) {
              var g = se(e[f], "http://www.w3.org/ns/ttml#styling", d);
              if (g) return g
            }
            return (b = Ik(b, "style", c)) ? se(b, "http://www.w3.org/ns/ttml#styling", d) : null
          }

          function Mk(b, c, d) {
            return (b = Ik(b, "style", c)) ? se(b, "http://www.w3.org/ns/ttml#styling", d) : null
          }

          function Ik(b, c, d) {
            if (!b || 1 > d.length) return null;
            var e = null, f = b;
            for (b = null; f && !(b = f.getAttribute(c)) && (f = f.parentNode, f instanceof Element);) ;
            if (c = b) for (b = 0; b < d.length; b++) if (d[b].getAttribute("xml:id") == c) {
              e = d[b];
              break
            }
            return e
          }

          function Hk(b, c) {
            var d = null;
            if (yk.test(b)) {
              d = yk.exec(b);
              var e = Number(d[1]), f = Number(d[2]), g = Number(d[3]), h = Number(d[4]);
              h += (Number(d[5]) || 0) / c.b;
              g += h / c.frameRate;
              d = g + 60 * f + 3600 * e
            } else zk.test(b) ? d = Nk(zk, b) : Ak.test(b) ? d = Nk(Ak, b) : Bk.test(b) ? (d = Bk.exec(b), d = Number(d[1]) / c.frameRate) : Ck.test(b) ? (d = Ck.exec(b), d = Number(d[1]) / c.a) : Dk.test(b) && (d = Nk(Dk, b));
            return d
          }

          function Nk(b, c) {
            var d = b.exec(c);
            return null == d || "" == d[0] ? null : (Number(d[4]) || 0) / 1E3 + (Number(d[3]) || 0) + 60 * (Number(d[2]) || 0) + 3600 * (Number(d[1]) || 0)
          }

          function rk(b, c, d, e) {
            this.frameRate = Number(b) || 30;
            this.b = Number(c) || 1;
            this.a = Number(e);
            0 == this.a && (this.a = b ? this.frameRate * this.b : 1);
            d && (b = /^(\d+) (\d+)$/g.exec(d)) && (this.frameRate *= b[1] / b[2])
          }

          J["application/ttml+xml"] = qk;

          function Ok() {
            this.a = new qk
          }

          Ok.prototype.parseInit = function (b) {
            var c = !1;
            (new R).C("moov", S).C("trak", S).C("mdia", S).C("minf", S).C("stbl", S).Y("stsd", Re).C("stpp", function (b) {
              c = !0;
              b.parser.stop()
            }).parse(b);
            if (!c) throw new B(2, 2, 2007);
          };
          Ok.prototype.parseMedia = function (b, c) {
            var d = !1, e = [];
            (new R).C("mdat", Se(function (b) {
              d = !0;
              e = e.concat(this.a.parseMedia(b, c))
            }.bind(this))).parse(b);
            if (!d) throw new B(2, 2, 2007);
            return e
          };
          J['application/mp4; codecs="stpp"'] = Ok;
          J['application/mp4; codecs="stpp.TTML.im1t"'] = Ok;

          function Pk() {
          }

          Pk.prototype.parseInit = function () {
          };
          Pk.prototype.parseMedia = function (b, c) {
            var d = Kb(b);
            d = d.replace(/\r\n|\r(?=[^\n]|$)/gm, "\n");
            d = d.split(/\n{2,}/m);
            if (!/^WEBVTT($|[ \t\n])/m.test(d[0])) throw new B(2, 2, 2E3);
            var e = c.segmentStart;
            if (null == e && (e = 0, 0 <= d[0].indexOf("X-TIMESTAMP-MAP"))) {
              var f = d[0].match(/LOCAL:((?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3}))/m), g = d[0].match(/MPEGTS:(\d+)/m);
              f && g && (e = Qk(new Uf(f[1])), e = c.periodStart + (Number(g[1]) / 9E4 - e))
            }
            g = [];
            var h = d[0].split("\n");
            for (f = 1; f < h.length; f++) if (/^Region:/.test(h[f])) {
              var k = new Uf(h[f]),
                      l = new Ac;
              Xf(k);
              Vf(k);
              for (var m = Xf(k); m;) {
                var r = l, t = m;
                (m = /^id=(.*)$/.exec(t)) ? r.id = m[1] : (m = /^width=(\d{1,2}|100)%$/.exec(t)) ? r.width = Number(m[1]) : (m = /^lines=(\d+)$/.exec(t)) ? (r.height = Number(m[1]), r.heightUnits = 2) : (m = /^regionanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(t)) ? (r.regionAnchorX = Number(m[1]), r.regionAnchorY = Number(m[2])) : (m = /^viewportanchor=(\d{1,2}|100)%,(\d{1,2}|100)%$/.exec(t)) ? (r.viewportAnchorX = Number(m[1]), r.viewportAnchorY = Number(m[2])) : /^scroll=up$/.exec(t) && (r.scroll = "up");
                Vf(k);
                m = Xf(k)
              }
              g.push(l)
            }
            f = [];
            for (k = 1; k < d.length; k++) {
              h = d[k].split("\n");
              m = h;
              t = e;
              h = g;
              if (1 == m.length && !m[0] || /^NOTE($|[ \t])/.test(m[0]) || "STYLE" == m[0]) h = null; else {
                l = null;
                0 > m[0].indexOf("--\x3e") && (l = m[0], m.splice(0, 1));
                r = new Uf(m[0]);
                var u = Qk(r), y = Wf(r, /[ \t]+--\x3e[ \t]+/g), w = Qk(r);
                if (null == u || null == y || null == w) throw new B(2, 2, 2001);
                m = new I(u + t, w + t, m.slice(1).join("\n").trim());
                Vf(r);
                for (t = Xf(r); t;) Rk(m, t, h), Vf(r), t = Xf(r);
                null != l && (m.id = l);
                h = m
              }
              h && f.push(h)
            }
            return f
          };

          function Rk(b, c, d) {
            var e;
            if (e = /^align:(start|middle|center|end|left|right)$/.exec(c)) c = e[1], "middle" == c ? b.textAlign = Dc : b.textAlign = Kc[c.toUpperCase()]; else if (e = /^vertical:(lr|rl)$/.exec(c)) b.writingDirection = "lr" == e[1] ? 2 : 3; else if (e = /^size:([\d.]+)%$/.exec(c)) b.size = Number(e[1]); else if (e = /^position:([\d.]+)%(?:,(line-left|line-right|center|start|end))?$/.exec(c)) b.position = Number(e[1]), e[2] && (c = e[2], b.positionAlign = "line-left" == c || "start" == c ? "line-left" : "line-right" == c || "end" == c ? "line-right" : "center");
            else if (e = /^region:(.*)$/.exec(c)) {
              if (c = Sk(d, e[1])) b.region = c
            } else if (d = /^line:([\d.]+)%(?:,(start|end|center))?$/.exec(c)) b.lineInterpretation = 1, b.line = Number(d[1]), d[2] && (b.lineAlign = Mc[d[2].toUpperCase()]); else if (d = /^line:(-?\d+)(?:,(start|end|center))?$/.exec(c)) b.lineInterpretation = Fc, b.line = Number(d[1]), d[2] && (b.lineAlign = Mc[d[2].toUpperCase()])
          }

          function Sk(b, c) {
            var d = b.filter(function (b) {
              return b.id == c
            });
            return d.length ? d[0] : null
          }

          function Qk(b) {
            b = Wf(b, /(?:(\d{1,}):)?(\d{2}):(\d{2})\.(\d{3})/g);
            if (null == b) return null;
            var c = Number(b[2]), d = Number(b[3]);
            return 59 < c || 59 < d ? null : Number(b[4]) / 1E3 + d + 60 * c + 3600 * (Number(b[1]) || 0)
          }

          J["text/vtt"] = Pk;
          J['text/vtt; codecs="vtt"'] = Pk;

          function Tk() {
            this.a = null
          }

          Tk.prototype.parseInit = function (b) {
            var c = !1;
            (new R).C("moov", S).C("trak", S).C("mdia", S).Y("mdhd", function (b) {
              0 == b.version ? (b.reader.F(4), b.reader.F(4), this.a = b.reader.B(), b.reader.F(4)) : (b.reader.F(8), b.reader.F(8), this.a = b.reader.B(), b.reader.F(8));
              b.reader.F(4)
            }.bind(this)).C("minf", S).C("stbl", S).Y("stsd", Re).C("wvtt", function () {
              c = !0
            }).parse(b);
            if (!this.a) throw new B(2, 2, 2008);
            if (!c) throw new B(2, 2, 2008);
          };
          Tk.prototype.parseMedia = function (b, c) {
            var d = this;
            if (!this.a) throw new B(2, 2, 2008);
            var e = 0, f = [], g, h = [], k = !1, l = !1, m = !1, r = null;
            (new R).C("moof", S).C("traf", S).Y("tfdt", function (b) {
              k = !0;
              e = 0 == b.version ? b.reader.B() : b.reader.Ra()
            }).Y("tfhd", function (b) {
              var c = b.flags;
              b = b.reader;
              b.F(4);
              c & 1 && b.F(8);
              c & 2 && b.F(4);
              r = c & 8 ? b.B() : null
            }).Y("trun", function (b) {
              l = !0;
              var c = b.version, d = b.flags;
              b = b.reader;
              var e = b.B();
              d & 1 && b.F(4);
              d & 4 && b.F(4);
              for (var g = [], h = 0; h < e; h++) {
                var k = {duration: null, sampleSize: null, gc: null};
                d & 256 && (k.duration =
                        b.B());
                d & 512 && (k.sampleSize = b.B());
                d & 1024 && b.F(4);
                d & 2048 && (k.gc = 0 == c ? b.B() : b.Lc());
                g.push(k)
              }
              f = g
            }).C("mdat", Se(function (b) {
              m = !0;
              g = b
            })).parse(b);
            if (!m && !k && !l) throw new B(2, 2, 2008);
            var t = e, u = new DataView(g.buffer, g.byteOffset, g.byteLength), y = new Q(u, 0);
            f.forEach(function (b) {
              var f = b.duration || r, g = b.gc ? e + b.gc : t;
              t = g + (f || 0);
              var k = 0;
              do {
                var l = y.B();
                k += l;
                var m = y.B(), u = null;
                "vttc" == Te(m) ? 8 < l && (u = y.Da(l - 8)) : y.F(l - 8);
                f && u && h.push(Uk(u, c.periodStart + g / d.a, c.periodStart + t / d.a))
              } while (b.sampleSize && k < b.sampleSize)
            });
            return h.filter(Eb)
          };

          function Uk(b, c, d) {
            var e, f, g;
            (new R).C("payl", Se(function (b) {
              e = Kb(b)
            })).C("iden", Se(function (b) {
              f = Kb(b)
            })).C("sttg", Se(function (b) {
              g = Kb(b)
            })).parse(b);
            return e ? Vk(e, f, g, c, d) : null
          }

          function Vk(b, c, d, e, f) {
            b = new I(e, f, b);
            c && (b.id = c);
            if (d) for (c = new Uf(d), d = Xf(c); d;) Rk(b, d, []), Vf(c), d = Xf(c);
            return b
          }

          J['application/mp4; codecs="wvtt"'] = Tk;
        }).call(exportTo, innerGlobal, innerGlobal);
        if (typeof exports != "undefined") for (var k in exportTo.shaka) exports[k] = exportTo.shaka[k]; else if (typeof define != "undefined" && define.amd) define(function () {
          return exportTo.shaka
        }); else innerGlobal.shaka = exportTo.shaka
      })();

      // https://www.gstatic.com/cv/js/sender/v1/cast_sender.js
      (function () {
        var e = function (a) {
                  return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
                }, f = e("loadGamesSDK") ? "/cast_game_sender.js" : "/cast_sender.js",
                g = e("loadCastFramework") || e("loadCastApplicationFramework"), h = function () {
                  return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
                }, k = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"], m = function (a) {
                  a.length ? l(a.shift(), function () {
                    m(a)
                  }) : n()
                },
                p = function (a) {
                  return "chrome-extension://" + a + f
                }, l = function (a, c, b) {
                  var d = document.createElement("script");
                  d.onerror = c;
                  b && (d.onload = b);
                  d.src = a;
                  (document.head || document.documentElement).appendChild(d)
                }, n = function () {
                  var a = h();
                  a && a(!1, "No cast extension found")
                }, q = function () {
                  if (g) {
                    var a = 2, c = h(), b = function () {
                      a--;
                      0 == a && c && c(!0)
                    };
                    window.__onGCastApiAvailable = b;
                    l("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", n, b)
                  }
                };
        if (0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation) {
          q();
          var r = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
          m(["//www.gstatic.com/eureka/clank/" + (r ? parseInt(r[1], 10) : 0) + f, "//www.gstatic.com/eureka/clank" + f])
        } else !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? n() : (q(), m(k.map(p)));
      })();

      // New Relic: Browser App - Pro Instrumentation
      window.NREUM || (NREUM = {});
      NREUM.init = {privacy: {cookies_enabled: true}};
      window.NREUM || (NREUM = {}), __nr_require = function (t, n, e) {
        function r(e) {
          if (!n[e]) {
            var o = n[e] = {exports: {}};
            t[e][0].call(o.exports, function (n) {
              var o = t[e][1][n];
              return r(o || n)
            }, o, o.exports)
          }
          return n[e].exports
        }

        if ("function" == typeof __nr_require) return __nr_require;
        for (var o = 0; o < e.length; o++) r(e[o]);
        return r
      }({
        1: [function (t, n, e) {
          function r(t) {
            try {
              s.console && console.log(t)
            } catch (n) {
            }
          }

          var o, i = t("ee"), a = t(21), s = {};
          try {
            o = localStorage.getItem("__nr_flags").split(","), console && "function" == typeof console.log && (s.console = !0, o.indexOf("dev") !== -1 && (s.dev = !0), o.indexOf("nr_dev") !== -1 && (s.nrDev = !0))
          } catch (c) {
          }
          s.nrDev && i.on("internal-error", function (t) {
            r(t.stack)
          }), s.dev && i.on("fn-err", function (t, n, e) {
            r(e.stack)
          }), s.dev && (r("NR AGENT IN DEVELOPMENT MODE"), r("flags: " + a(s, function (t, n) {
            return t
          }).join(", ")))
        }, {}], 2: [function (t, n, e) {
          function r(t, n, e, r, s) {
            try {
              p ? p -= 1 : o(s || new UncaughtException(t, n, e), !0)
            } catch (f) {
              try {
                i("ierr", [f, c.now(), !0])
              } catch (d) {
              }
            }
            return "function" == typeof u && u.apply(this, a(arguments))
          }

          function UncaughtException(t, n, e) {
            this.message = t || "Uncaught error with no additional information", this.sourceURL = n, this.line = e
          }

          function o(t, n) {
            var e = n ? null : c.now();
            i("err", [t, e])
          }

          var i = t("handle"), a = t(22), s = t("ee"), c = t("loader"), f = t("gos"), u = window.onerror, d = !1,
                  l = "nr@seenError", p = 0;
          c.features.err = !0, t(1), window.onerror = r;
          try {
            throw new Error
          } catch (h) {
            "stack" in h && (t(9), t(8), "addEventListener" in window && t(5), c.xhrWrappable && t(10), d = !0)
          }
          s.on("fn-start", function (t, n, e) {
            d && (p += 1)
          }), s.on("fn-err", function (t, n, e) {
            d && !e[l] && (f(e, l, function () {
              return !0
            }), this.thrown = !0, o(e))
          }), s.on("fn-end", function () {
            d && !this.thrown && p > 0 && (p -= 1)
          }), s.on("internal-error", function (t) {
            i("ierr", [t, c.now(), !0])
          })
        }, {}], 3: [function (t, n, e) {
          t("loader").features.ins = !0
        }, {}], 4: [function (t, n, e) {
          function r(t) {
          }

          if (window.performance && window.performance.timing && window.performance.getEntriesByType) {
            var o = t("ee"), i = t("handle"), a = t(9), s = t(8), c = "learResourceTimings", f = "addEventListener",
                    u = "resourcetimingbufferfull", d = "bstResource", l = "resource", p = "-start", h = "-end",
                    m = "fn" + p, w = "fn" + h, v = "bstTimer", g = "pushState", y = t("loader");
            y.features.stn = !0, t(7), "addEventListener" in window && t(5);
            var x = NREUM.o.EV;
            o.on(m, function (t, n) {
              var e = t[0];
              e instanceof x && (this.bstStart = y.now())
            }), o.on(w, function (t, n) {
              var e = t[0];
              e instanceof x && i("bst", [e, n, this.bstStart, y.now()])
            }), a.on(m, function (t, n, e) {
              this.bstStart = y.now(), this.bstType = e
            }), a.on(w, function (t, n) {
              i(v, [n, this.bstStart, y.now(), this.bstType])
            }), s.on(m, function () {
              this.bstStart = y.now()
            }), s.on(w, function (t, n) {
              i(v, [n, this.bstStart, y.now(), "requestAnimationFrame"])
            }), o.on(g + p, function (t) {
              this.time = y.now(), this.startPath = location.pathname + location.hash
            }), o.on(g + h, function (t) {
              i("bstHist", [location.pathname + location.hash, this.startPath, this.time])
            }), f in window.performance && (window.performance["c" + c] ? window.performance[f](u, function (t) {
              i(d, [window.performance.getEntriesByType(l)]), window.performance["c" + c]()
            }, !1) : window.performance[f]("webkit" + u, function (t) {
              i(d, [window.performance.getEntriesByType(l)]), window.performance["webkitC" + c]()
            }, !1)), document[f]("scroll", r, {passive: !0}), document[f]("keypress", r, !1), document[f]("click", r, !1)
          }
        }, {}], 5: [function (t, n, e) {
          function r(t) {
            for (var n = t; n && !n.hasOwnProperty(u);) n = Object.getPrototypeOf(n);
            n && o(n)
          }

          function o(t) {
            s.inPlace(t, [u, d], "-", i)
          }

          function i(t, n) {
            return t[1]
          }

          var a = t("ee").get("events"), s = t("wrap-function")(a, !0), c = t("gos"), f = XMLHttpRequest,
                  u = "addEventListener", d = "removeEventListener";
          n.exports = a, "getPrototypeOf" in Object ? (r(document), r(window), r(f.prototype)) : f.prototype.hasOwnProperty(u) && (o(window), o(f.prototype)), a.on(u + "-start", function (t, n) {
            var e = t[1], r = c(e, "nr@wrapped", function () {
              function t() {
                if ("function" == typeof e.handleEvent) return e.handleEvent.apply(e, arguments)
              }

              var n = {object: t, "function": e}[typeof e];
              return n ? s(n, "fn-", null, n.name || "anonymous") : e
            });
            this.wrapped = t[1] = r
          }), a.on(d + "-start", function (t) {
            t[1] = this.wrapped || t[1]
          })
        }, {}], 6: [function (t, n, e) {
          function r(t, n, e) {
            var r = t[n];
            "function" == typeof r && (t[n] = function () {
              var t = i(arguments), n = {};
              o.emit(e + "before-start", [t], n);
              var a;
              n[m] && n[m].dt && (a = n[m].dt);
              var s = r.apply(this, t);
              return o.emit(e + "start", [t, a], s), s.then(function (t) {
                return o.emit(e + "end", [null, t], s), t
              }, function (t) {
                throw o.emit(e + "end", [t], s), t
              })
            })
          }

          var o = t("ee").get("fetch"), i = t(22), a = t(21);
          n.exports = o;
          var s = window, c = "fetch-", f = c + "body-", u = ["arrayBuffer", "blob", "json", "text", "formData"],
                  d = s.Request, l = s.Response, p = s.fetch, h = "prototype", m = "nr@context";
          d && l && p && (a(u, function (t, n) {
            r(d[h], n, f), r(l[h], n, f)
          }), r(s, "fetch", c), o.on(c + "end", function (t, n) {
            var e = this;
            if (n) {
              var r = n.headers.get("content-length");
              null !== r && (e.rxSize = r), o.emit(c + "done", [null, n], e)
            } else o.emit(c + "done", [t], e)
          }))
        }, {}], 7: [function (t, n, e) {
          var r = t("ee").get("history"), o = t("wrap-function")(r);
          n.exports = r;
          var i = window.history && window.history.constructor && window.history.constructor.prototype,
                  a = window.history;
          i && i.pushState && i.replaceState && (a = i), o.inPlace(a, ["pushState", "replaceState"], "-")
        }, {}], 8: [function (t, n, e) {
          var r = t("ee").get("raf"), o = t("wrap-function")(r), i = "equestAnimationFrame";
          n.exports = r, o.inPlace(window, ["r" + i, "mozR" + i, "webkitR" + i, "msR" + i], "raf-"), r.on("raf-start", function (t) {
            t[0] = o(t[0], "fn-")
          })
        }, {}], 9: [function (t, n, e) {
          function r(t, n, e) {
            t[0] = a(t[0], "fn-", null, e)
          }

          function o(t, n, e) {
            this.method = e, this.timerDuration = isNaN(t[1]) ? 0 : +t[1], t[0] = a(t[0], "fn-", this, e)
          }

          var i = t("ee").get("timer"), a = t("wrap-function")(i), s = "setTimeout", c = "setInterval",
                  f = "clearTimeout", u = "-start", d = "-";
          n.exports = i, a.inPlace(window, [s, "setImmediate"], s + d), a.inPlace(window, [c], c + d), a.inPlace(window, [f, "clearImmediate"], f + d), i.on(c + u, r), i.on(s + u, o)
        }, {}], 10: [function (t, n, e) {
          function r(t, n) {
            d.inPlace(n, ["onreadystatechange"], "fn-", s)
          }

          function o() {
            var t = this, n = u.context(t);
            t.readyState > 3 && !n.resolved && (n.resolved = !0, u.emit("xhr-resolved", [], t)), d.inPlace(t, g, "fn-", s)
          }

          function i(t) {
            y.push(t), h && (b ? b.then(a) : w ? w(a) : (E = -E, O.data = E))
          }

          function a() {
            for (var t = 0; t < y.length; t++) r([], y[t]);
            y.length && (y = [])
          }

          function s(t, n) {
            return n
          }

          function c(t, n) {
            for (var e in t) n[e] = t[e];
            return n
          }

          t(5);
          var f = t("ee"), u = f.get("xhr"), d = t("wrap-function")(u), l = NREUM.o, p = l.XHR, h = l.MO, m = l.PR,
                  w = l.SI, v = "readystatechange",
                  g = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"], y = [];
          n.exports = u;
          var x = window.XMLHttpRequest = function (t) {
            var n = new p(t);
            try {
              u.emit("new-xhr", [n], n), n.addEventListener(v, o, !1)
            } catch (e) {
              try {
                u.emit("internal-error", [e])
              } catch (r) {
              }
            }
            return n
          };
          if (c(p, x), x.prototype = p.prototype, d.inPlace(x.prototype, ["open", "send"], "-xhr-", s), u.on("send-xhr-start", function (t, n) {
            r(t, n), i(n)
          }), u.on("open-xhr-start", r), h) {
            var b = m && m.resolve();
            if (!w && !m) {
              var E = 1, O = document.createTextNode(E);
              new h(a).observe(O, {characterData: !0})
            }
          } else f.on("fn-end", function (t) {
            t[0] && t[0].type === v || a()
          })
        }, {}], 11: [function (t, n, e) {
          function r(t) {
            if (!i(t)) return null;
            var n = window.NREUM;
            if (!n.loader_config) return null;
            var e = (n.loader_config.accountID || "").toString() || null,
                    r = (n.loader_config.agentID || "").toString() || null,
                    s = (n.loader_config.trustKey || "").toString() || null;
            if (!e || !r) return null;
            var c = a.generateCatId(), f = a.generateCatId(), u = Date.now(), d = o(c, f, u, e, r, s);
            return {header: d, guid: c, traceId: f, timestamp: u}
          }

          function o(t, n, e, r, o, i) {
            var a = "btoa" in window && "function" == typeof window.btoa;
            if (!a) return null;
            var s = {v: [0, 1], d: {ty: "Browser", ac: r, ap: o, id: t, tr: n, ti: e}};
            return i && r !== i && (s.d.tk = i), btoa(JSON.stringify(s))
          }

          function i(t) {
            var n = !1, e = !1, r = {};
            if ("init" in NREUM && "distributed_tracing" in NREUM.init && (r = NREUM.init.distributed_tracing, e = !!r.enabled), e) if (t.sameOrigin) n = !0; else if (r.allowed_origins instanceof Array) for (var o = 0; o < r.allowed_origins.length; o++) {
              var i = s(r.allowed_origins[o]);
              if (t.hostname === i.hostname && t.protocol === i.protocol && t.port === i.port) {
                n = !0;
                break
              }
            }
            return e && n
          }

          var a = t(19), s = t(13);
          n.exports = {generateTracePayload: r, shouldGenerateTrace: i}
        }, {}], 12: [function (t, n, e) {
          function r(t) {
            var n = this.params, e = this.metrics;
            if (!this.ended) {
              this.ended = !0;
              for (var r = 0; r < l; r++) t.removeEventListener(d[r], this.listener, !1);
              n.aborted || (e.duration = a.now() - this.startTime, this.loadCaptureCalled || 4 !== t.readyState ? null == n.status && (n.status = 0) : i(this, t), e.cbTime = this.cbTime, u.emit("xhr-done", [t], t), s("xhr", [n, e, this.startTime]))
            }
          }

          function o(t, n) {
            var e = c(n), r = t.params;
            r.host = e.hostname + ":" + e.port, r.pathname = e.pathname, t.parsedOrigin = c(n), t.sameOrigin = t.parsedOrigin.sameOrigin
          }

          function i(t, n) {
            t.params.status = n.status;
            var e = w(n, t.lastSize);
            if (e && (t.metrics.rxSize = e), t.sameOrigin) {
              var r = n.getResponseHeader("X-NewRelic-App-Data");
              r && (t.params.cat = r.split(", ").pop())
            }
            t.loadCaptureCalled = !0
          }

          var a = t("loader");
          if (a.xhrWrappable) {
            var s = t("handle"), c = t(13), f = t(11).generateTracePayload, u = t("ee"),
                    d = ["load", "error", "abort", "timeout"], l = d.length, p = t("id"), h = t(17), m = t(16), w = t(14),
                    v = window.XMLHttpRequest;
            a.features.xhr = !0, t(10), t(6), u.on("new-xhr", function (t) {
              var n = this;
              n.totalCbs = 0, n.called = 0, n.cbTime = 0, n.end = r, n.ended = !1, n.xhrGuids = {}, n.lastSize = null, n.loadCaptureCalled = !1, t.addEventListener("load", function (e) {
                i(n, t)
              }, !1), h && (h > 34 || h < 10) || window.opera || t.addEventListener("progress", function (t) {
                n.lastSize = t.loaded
              }, !1)
            }), u.on("open-xhr-start", function (t) {
              this.params = {method: t[0]}, o(this, t[1]), this.metrics = {}
            }), u.on("open-xhr-end", function (t, n) {
              "loader_config" in NREUM && "xpid" in NREUM.loader_config && this.sameOrigin && n.setRequestHeader("X-NewRelic-ID", NREUM.loader_config.xpid);
              var e = f(this.parsedOrigin);
              e && e.header && (n.setRequestHeader("newrelic", e.header), this.dt = e)
            }), u.on("send-xhr-start", function (t, n) {
              var e = this.metrics, r = t[0], o = this;
              if (e && r) {
                var i = m(r);
                i && (e.txSize = i)
              }
              this.startTime = a.now(), this.listener = function (t) {
                try {
                  "abort" !== t.type || o.loadCaptureCalled || (o.params.aborted = !0), ("load" !== t.type || o.called === o.totalCbs && (o.onloadCalled || "function" != typeof n.onload)) && o.end(n)
                } catch (e) {
                  try {
                    u.emit("internal-error", [e])
                  } catch (r) {
                  }
                }
              };
              for (var s = 0; s < l; s++) n.addEventListener(d[s], this.listener, !1)
            }), u.on("xhr-cb-time", function (t, n, e) {
              this.cbTime += t, n ? this.onloadCalled = !0 : this.called += 1, this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof e.onload || this.end(e)
            }), u.on("xhr-load-added", function (t, n) {
              var e = "" + p(t) + !!n;
              this.xhrGuids && !this.xhrGuids[e] && (this.xhrGuids[e] = !0, this.totalCbs += 1)
            }), u.on("xhr-load-removed", function (t, n) {
              var e = "" + p(t) + !!n;
              this.xhrGuids && this.xhrGuids[e] && (delete this.xhrGuids[e], this.totalCbs -= 1)
            }), u.on("addEventListener-end", function (t, n) {
              n instanceof v && "load" === t[0] && u.emit("xhr-load-added", [t[1], t[2]], n)
            }), u.on("removeEventListener-end", function (t, n) {
              n instanceof v && "load" === t[0] && u.emit("xhr-load-removed", [t[1], t[2]], n)
            }), u.on("fn-start", function (t, n, e) {
              n instanceof v && ("onload" === e && (this.onload = !0), ("load" === (t[0] && t[0].type) || this.onload) && (this.xhrCbStart = a.now()))
            }), u.on("fn-end", function (t, n) {
              this.xhrCbStart && u.emit("xhr-cb-time", [a.now() - this.xhrCbStart, this.onload, n], n)
            }), u.on("fetch-before-start", function (t) {
              var n, e = t[1] || {};
              "string" == typeof t[0] ? n = t[0] : t[0] && t[0].url && (n = t[0].url), n && (this.parsedOrigin = c(n), this.sameOrigin = this.parsedOrigin.sameOrigin);
              var r = f(this.parsedOrigin);
              if (r && r.header) {
                var o = r.header;
                if ("string" == typeof t[0]) {
                  var i = {};
                  for (var a in e) i[a] = e[a];
                  i.headers = new Headers(e.headers || {}), i.headers.set("newrelic", o), this.dt = r, t.length > 1 ? t[1] = i : t.push(i)
                } else t[0] && t[0].headers && (t[0].headers.append("newrelic", o), this.dt = r)
              }
            })
          }
        }, {}], 13: [function (t, n, e) {
          var r = {};
          n.exports = function (t) {
            if (t in r) return r[t];
            var n = document.createElement("a"), e = window.location, o = {};
            n.href = t, o.port = n.port;
            var i = n.href.split("://");
            !o.port && i[1] && (o.port = i[1].split("/")[0].split("@").pop().split(":")[1]), o.port && "0" !== o.port || (o.port = "https" === i[0] ? "443" : "80"), o.hostname = n.hostname || e.hostname, o.pathname = n.pathname, o.protocol = i[0], "/" !== o.pathname.charAt(0) && (o.pathname = "/" + o.pathname);
            var a = !n.protocol || ":" === n.protocol || n.protocol === e.protocol,
                    s = n.hostname === document.domain && n.port === e.port;
            return o.sameOrigin = a && (!n.hostname || s), "/" === o.pathname && (r[t] = o), o
          }
        }, {}], 14: [function (t, n, e) {
          function r(t, n) {
            var e = t.responseType;
            return "json" === e && null !== n ? n : "arraybuffer" === e || "blob" === e || "json" === e ? o(t.response) : "text" === e || "" === e || void 0 === e ? o(t.responseText) : void 0
          }

          var o = t(16);
          n.exports = r
        }, {}], 15: [function (t, n, e) {
          function r() {
          }

          function o(t, n, e) {
            return function () {
              return i(t, [f.now()].concat(s(arguments)), n ? null : this, e), n ? void 0 : this
            }
          }

          var i = t("handle"), a = t(21), s = t(22), c = t("ee").get("tracer"), f = t("loader"), u = NREUM;
          "undefined" == typeof window.newrelic && (newrelic = u);
          var d = ["setPageViewName", "setCustomAttribute", "setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"],
                  l = "api-", p = l + "ixn-";
          a(d, function (t, n) {
            u[n] = o(l + n, !0, "api")
          }), u.addPageAction = o(l + "addPageAction", !0), u.setCurrentRouteName = o(l + "routeName", !0), n.exports = newrelic, u.interaction = function () {
            return (new r).get()
          };
          var h = r.prototype = {
            createTracer: function (t, n) {
              var e = {}, r = this, o = "function" == typeof n;
              return i(p + "tracer", [f.now(), t, e], r), function () {
                if (c.emit((o ? "" : "no-") + "fn-start", [f.now(), r, o], e), o) try {
                  return n.apply(this, arguments)
                } catch (t) {
                  throw c.emit("fn-err", [arguments, this, t], e), t
                } finally {
                  c.emit("fn-end", [f.now()], e)
                }
              }
            }
          };
          a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","), function (t, n) {
            h[n] = o(p + n)
          }), newrelic.noticeError = function (t, n) {
            "string" == typeof t && (t = new Error(t)), i("err", [t, f.now(), !1, n])
          }
        }, {}], 16: [function (t, n, e) {
          n.exports = function (t) {
            if ("string" == typeof t && t.length) return t.length;
            if ("object" == typeof t) {
              if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer && t.byteLength) return t.byteLength;
              if ("undefined" != typeof Blob && t instanceof Blob && t.size) return t.size;
              if (!("undefined" != typeof FormData && t instanceof FormData)) try {
                return JSON.stringify(t).length
              } catch (n) {
                return
              }
            }
          }
        }, {}], 17: [function (t, n, e) {
          var r = 0, o = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
          o && (r = +o[1]), n.exports = r
        }, {}], 18: [function (t, n, e) {
          function r(t, n) {
            var e = t.getEntries();
            e.forEach(function (t) {
              "first-paint" === t.name ? c("timing", ["fp", Math.floor(t.startTime)]) : "first-contentful-paint" === t.name && c("timing", ["fcp", Math.floor(t.startTime)])
            })
          }

          function o(t, n) {
            var e = t.getEntries();
            e.length > 0 && c("lcp", [e[e.length - 1]])
          }

          function i(t) {
            if (t instanceof u && !l) {
              var n, e = Math.round(t.timeStamp);
              n = e > 1e12 ? Date.now() - e : f.now() - e, l = !0, c("timing", ["fi", e, {type: t.type, fid: n}])
            }
          }

          if (!("init" in NREUM && "page_view_timing" in NREUM.init && "enabled" in NREUM.init.page_view_timing && NREUM.init.page_view_timing.enabled === !1)) {
            var a, s, c = t("handle"), f = t("loader"), u = NREUM.o.EV;
            if ("PerformanceObserver" in window && "function" == typeof window.PerformanceObserver) {
              a = new PerformanceObserver(r), s = new PerformanceObserver(o);
              try {
                a.observe({entryTypes: ["paint"]}), s.observe({entryTypes: ["largest-contentful-paint"]})
              } catch (d) {
              }
            }
            if ("addEventListener" in document) {
              var l = !1, p = ["click", "keydown", "mousedown", "pointerdown", "touchstart"];
              p.forEach(function (t) {
                document.addEventListener(t, i, !1)
              })
            }
          }
        }, {}], 19: [function (t, n, e) {
          function r() {
            function t() {
              return n ? 15 & n[e++] : 16 * Math.random() | 0
            }

            var n = null, e = 0, r = window.crypto || window.msCrypto;
            r && r.getRandomValues && (n = r.getRandomValues(new Uint8Array(31)));
            for (var o, i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", a = "", s = 0; s < i.length; s++) o = i[s], "x" === o ? a += t().toString(16) : "y" === o ? (o = 3 & t() | 8, a += o.toString(16)) : a += o;
            return a
          }

          function o() {
            function t() {
              return n ? 15 & n[e++] : 16 * Math.random() | 0
            }

            var n = null, e = 0, r = window.crypto || window.msCrypto;
            r && r.getRandomValues && Uint8Array && (n = r.getRandomValues(new Uint8Array(31)));
            for (var o = [], i = 0; i < 16; i++) o.push(t().toString(16));
            return o.join("")
          }

          n.exports = {generateUuid: r, generateCatId: o}
        }, {}], 20: [function (t, n, e) {
          function r(t, n) {
            if (!o) return !1;
            if (t !== o) return !1;
            if (!n) return !0;
            if (!i) return !1;
            for (var e = i.split("."), r = n.split("."), a = 0; a < r.length; a++) if (r[a] !== e[a]) return !1;
            return !0
          }

          var o = null, i = null, a = /Version\/(\S+)\s+Safari/;
          if (navigator.userAgent) {
            var s = navigator.userAgent, c = s.match(a);
            c && s.indexOf("Chrome") === -1 && s.indexOf("Chromium") === -1 && (o = "Safari", i = c[1])
          }
          n.exports = {agent: o, version: i, match: r}
        }, {}], 21: [function (t, n, e) {
          function r(t, n) {
            var e = [], r = "", i = 0;
            for (r in t) o.call(t, r) && (e[i] = n(r, t[r]), i += 1);
            return e
          }

          var o = Object.prototype.hasOwnProperty;
          n.exports = r
        }, {}], 22: [function (t, n, e) {
          function r(t, n, e) {
            n || (n = 0), "undefined" == typeof e && (e = t ? t.length : 0);
            for (var r = -1, o = e - n || 0, i = Array(o < 0 ? 0 : o); ++r < o;) i[r] = t[n + r];
            return i
          }

          n.exports = r
        }, {}], 23: [function (t, n, e) {
          n.exports = {exists: "undefined" != typeof window.performance && window.performance.timing && "undefined" != typeof window.performance.timing.navigationStart}
        }, {}], ee: [function (t, n, e) {
          function r() {
          }

          function o(t) {
            function n(t) {
              return t && t instanceof r ? t : t ? c(t, s, i) : i()
            }

            function e(e, r, o, i) {
              if (!l.aborted || i) {
                t && t(e, r, o);
                for (var a = n(o), s = m(e), c = s.length, f = 0; f < c; f++) s[f].apply(a, r);
                var d = u[y[e]];
                return d && d.push([x, e, r, a]), a
              }
            }

            function p(t, n) {
              g[t] = m(t).concat(n)
            }

            function h(t, n) {
              var e = g[t];
              if (e) for (var r = 0; r < e.length; r++) e[r] === n && e.splice(r, 1)
            }

            function m(t) {
              return g[t] || []
            }

            function w(t) {
              return d[t] = d[t] || o(e)
            }

            function v(t, n) {
              f(t, function (t, e) {
                n = n || "feature", y[e] = n, n in u || (u[n] = [])
              })
            }

            var g = {}, y = {}, x = {
              on: p,
              addEventListener: p,
              removeEventListener: h,
              emit: e,
              get: w,
              listeners: m,
              context: n,
              buffer: v,
              abort: a,
              aborted: !1
            };
            return x
          }

          function i() {
            return new r
          }

          function a() {
            (u.api || u.feature) && (l.aborted = !0, u = l.backlog = {})
          }

          var s = "nr@context", c = t("gos"), f = t(21), u = {}, d = {}, l = n.exports = o();
          l.backlog = u
        }, {}], gos: [function (t, n, e) {
          function r(t, n, e) {
            if (o.call(t, n)) return t[n];
            var r = e();
            if (Object.defineProperty && Object.keys) try {
              return Object.defineProperty(t, n, {value: r, writable: !0, enumerable: !1}), r
            } catch (i) {
            }
            return t[n] = r, r
          }

          var o = Object.prototype.hasOwnProperty;
          n.exports = r
        }, {}], handle: [function (t, n, e) {
          function r(t, n, e, r) {
            o.buffer([t], r), o.emit(t, n, e)
          }

          var o = t("ee").get("handle");
          n.exports = r, r.ee = o
        }, {}], id: [function (t, n, e) {
          function r(t) {
            var n = typeof t;
            return !t || "object" !== n && "function" !== n ? -1 : t === window ? 0 : a(t, i, function () {
              return o++
            })
          }

          var o = 1, i = "nr@id", a = t("gos");
          n.exports = r
        }, {}], loader: [function (t, n, e) {
          function r() {
            if (!E++) {
              var t = b.info = NREUM.info, n = p.getElementsByTagName("script")[0];
              if (setTimeout(u.abort, 3e4), !(t && t.licenseKey && t.applicationID && n)) return u.abort();
              f(y, function (n, e) {
                t[n] || (t[n] = e)
              }), c("mark", ["onload", a() + b.offset], null, "api");
              var e = p.createElement("script");
              e.src = "https://" + t.agent, n.parentNode.insertBefore(e, n)
            }
          }

          function o() {
            "complete" === p.readyState && i()
          }

          function i() {
            c("mark", ["domContent", a() + b.offset], null, "api")
          }

          function a() {
            return O.exists && performance.now ? Math.round(performance.now()) : (s = Math.max((new Date).getTime(), s)) - b.offset
          }

          var s = (new Date).getTime(), c = t("handle"), f = t(21), u = t("ee"), d = t(20), l = window, p = l.document,
                  h = "addEventListener", m = "attachEvent", w = l.XMLHttpRequest, v = w && w.prototype;
          NREUM.o = {
            ST: setTimeout,
            SI: l.setImmediate,
            CT: clearTimeout,
            XHR: w,
            REQ: l.Request,
            EV: l.Event,
            PR: l.Promise,
            MO: l.MutationObserver
          };
          var g = "" + location, y = {
                    beacon: "bam.nr-data.net",
                    errorBeacon: "bam.nr-data.net",
                    agent: "js-agent.newrelic.com/nr-1169.min.js"
                  }, x = w && v && v[h] && !/CriOS/.test(navigator.userAgent),
                  b = n.exports = {offset: s, now: a, origin: g, features: {}, xhrWrappable: x, userAgent: d};
          t(15), t(18), p[h] ? (p[h]("DOMContentLoaded", i, !1), l[h]("load", r, !1)) : (p[m]("onreadystatechange", o), l[m]("onload", r)), c("mark", ["firstbyte", s], null, "api");
          var E = 0, O = t(23)
        }, {}], "wrap-function": [function (t, n, e) {
          function r(t) {
            return !(t && t instanceof Function && t.apply && !t[a])
          }

          var o = t("ee"), i = t(22), a = "nr@original", s = Object.prototype.hasOwnProperty, c = !1;
          n.exports = function (t, n) {
            function e(t, n, e, o) {
              function nrWrapper() {
                var r, a, s, c;
                try {
                  a = this, r = i(arguments), s = "function" == typeof e ? e(r, a) : e || {}
                } catch (f) {
                  l([f, "", [r, a, o], s])
                }
                u(n + "start", [r, a, o], s);
                try {
                  return c = t.apply(a, r)
                } catch (d) {
                  throw u(n + "err", [r, a, d], s), d
                } finally {
                  u(n + "end", [r, a, c], s)
                }
              }

              return r(t) ? t : (n || (n = ""), nrWrapper[a] = t, d(t, nrWrapper), nrWrapper)
            }

            function f(t, n, o, i) {
              o || (o = "");
              var a, s, c, f = "-" === o.charAt(0);
              for (c = 0; c < n.length; c++) s = n[c], a = t[s], r(a) || (t[s] = e(a, f ? s + o : o, i, s))
            }

            function u(e, r, o) {
              if (!c || n) {
                var i = c;
                c = !0;
                try {
                  t.emit(e, r, o, n)
                } catch (a) {
                  l([a, e, r, o])
                }
                c = i
              }
            }

            function d(t, n) {
              if (Object.defineProperty && Object.keys) try {
                var e = Object.keys(t);
                return e.forEach(function (e) {
                  Object.defineProperty(n, e, {
                    get: function () {
                      return t[e]
                    }, set: function (n) {
                      return t[e] = n, n
                    }
                  })
                }), n
              } catch (r) {
                l([r])
              }
              for (var o in t) s.call(t, o) && (n[o] = t[o]);
              return n
            }

            function l(n) {
              try {
                t.emit("internal-error", n)
              } catch (e) {
              }
            }

            return t || (t = o), e.inPlace = f, e.flag = a, e
          }
        }, {}]
      }, {}, ["loader", 2, 12, 4, 3]);
      ;NREUM.loader_config = {
        accountID: "2485195",
        trustKey: "2485195",
        agentID: "435201891",
        licenseKey: "3c6e2799b2",
        applicationID: "435201891"
      }
      ;NREUM.info = {
        beacon: "bam.nr-data.net",
        errorBeacon: "bam.nr-data.net",
        licenseKey: "3c6e2799b2",
        applicationID: "435201891",
        sa: 1
      };

      // web-player-1.50.min.js
      (function () {
        function e(a) {
          console.log(a)
        }

        function sb(a) {
          1001 == a.code || 1002 == a.code || 1003 == a.code ? ra("A problem with the video was encountered.<br /><br />Please try refreshing your browser window.") : ra("A problem with the video was encountered. (Category = " + a.category + " Code = " + a.code + ")");
          var b = "Shaka.onLoadError Category " + a.category + " Code " + a.code + " Severity " + a.severity;
          b += Ra(a);
          D(b)
        }

        function ra(a) {
          V.style.display = "none";
          I.style.display = "none";
          Sa.style.display = "none";
          E.style.display = "none";
          J.style.display = "none";
          sa.style.display = "block";
          sa.innerHTML = a
        }

        function tb(a) {
          V.style.display = a.buffering ? "inherit" : "none"
        }

        function Ta(a) {
          a = p.canCast() && ta;
          var b = p.isCasting();
          a ? (v.style.display = "inherit", b ? (F.style.display = "inherit", F.textContent = "Casting to " + p.receiverName(), K.classList.add("la1-casting")) : (F.style.display = "none", F.textContent = "", K.classList.remove("la1-casting")), ua()) : (v.style.display = "none", F.style.display = "none", F.textContent = "");
          (null == ca && b || null != ca && ca != b) && window.setTimeout(W,
                  1E3);
          ca = b
        }

        function ub(a) {
          p.isCasting() ? p.suggestDisconnect() : (v.disabled = !0, p.cast().then(function () {
            v.disabled = !1;
            va();
            n.value = c.volume;
            da.style.display = "block";
            ea.style.display = "none";
            var b = ["to right"];
            b.push("#ccc " + 100 * n.value + "%");
            b.push("#000 " + 100 * n.value + "%");
            b.push("#000 100%");
            n.style.background = "linear-gradient(" + b.join(",") + ")"
          }.bind(this), function (b) {
            v.disabled = !1;
            b.code != shaka.util.Error.Code.CAST_CANCELED_BY_USER && (e("Cast Error:"), e(b))
          }.bind(this)))
        }

        function vb(a) {
          c && c.duration &&
          (1 == K.style.opacity ? w = Date.now() : q(a))
        }

        function Ua(a) {
          c && c.duration && (c.paused ? c.play() : c.pause())
        }

        function wa() {
          c.paused && !L ? (xa.style.display = "none", ya.style.display = "block", J.style.display = "block") : (xa.style.display = "block", ya.style.display = "none", J.style.display = "none");
          q({type: "mousemove"})
        }

        function Va() {
          Wa = !c.paused;
          L = !0;
          c.pause()
        }

        function wb() {
          c.duration && Xa()
        }

        function Ya() {
          c.currentTime = parseFloat(m.value);
          L = !1;
          Wa && c.play()
        }

        function M(a, b) {
          var d = Math.floor(a / 3600), g = Math.floor(a / 60 % 60), f =
                  Math.floor(a % 60);
          10 > f && (f = "0" + f);
          f = g + ":" + f;
          b && (10 > g && (f = "0" + f), f = d + ":" + f);
          return f
        }

        function Xa() {
          var a = L ? m.value : c.currentTime;
          if (h.isLive()) {
            var b = h.seekRange(), d = b.end - b.start;
            a = Math.max(0, Math.floor(b.end - a));
            za.textContent = 1 <= a || L ? "- " + M(a, 3600 <= d) : "LIVE"
          } else b = 3600 <= c.duration, za.textContent = M(a, b);
          b = h.seekRange();
          m.min = b.start;
          m.max = b.end;
          L || (m.value = c.currentTime);
          d = b.end - b.start;
          a = (c.currentTime - b.start) / d || 0;
          b = (m.value - b.start) / d || 0;
          a = Math.max(a, b);
          d = ["to right"];
          d.push("#ccc");
          d.push("#ccc " +
                  100 * b + "%");
          d.push("#444 " + 100 * b + "%");
          d.push("#444 " + 100 * a + "%");
          d.push("#000 " + 100 * a + "%");
          m.style.background = "linear-gradient(" + d.join(",") + ")"
        }

        function ua() {
          c.muted ? (n.value = 0, da.style.display = "none", ea.style.display = "block") : (n.value = c.volume, da.style.display = "block", ea.style.display = "none", va());
          var a = ["to right"];
          a.push("#ccc " + 100 * n.value + "%");
          a.push("#000 " + 100 * n.value + "%");
          a.push("#000 100%");
          n.style.background = "linear-gradient(" + a.join(",") + ")"
        }

        function xb(a) {
          c && c.duration && (c.muted = !c.muted)
        }

        function yb(a) {
          va();
          c.muted = !1
        }

        function va() {
          N && (N.style.display = "none")
        }

        function zb() {
          c.volume = parseFloat(n.value);
          c.muted = !1
        }

        function fa() {
          if (null != p && p.isCasting()) return !0;
          var a = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
          return !a || "la1-videoContainer" != a.id && "la1-video" != a.id ? !1 : !0
        }

        function Ab() {
          fa() ? (Aa.style.display = "none", Ba.style.display = "block") : (Aa.style.display = "block", Ba.style.display = "none");
          W()
        }

        function Bb(a) {
          fa() ?
                  document.exitFullscreen() : x.requestFullscreen()
        }

        function q(a) {
          "touchstart" == a.type || "touchmove" == a.type || "touchend" == a.type ? w = Date.now() : w + 1E3 < Date.now() && (w = null);
          w && "mousemove" == a.type || (x.style.cursor = "", E.style.cursor = "", J.style.cursor = "", K.style.opacity = 1, y && (window.clearTimeout(y), y = null), "touchend" != a.type && w || (y = window.setTimeout(Za.bind(this), 2E3)))
        }

        function Cb(a) {
          E.contains(a.toElement) || w || (y && (window.clearTimeout(y), y = null), Za())
        }

        function Za() {
          y = null;
          c.paused || (x.style.cursor = "none", E.style.cursor =
                  "none", J.style.cursor = "none", K.style.opacity = w ? "0" : "")
        }

        function Db() {
          X.style.display = "none" == X.style.display ? "block" : "none"
        }

        function W() {
          if (null != h && "auto" == z) {
            var a = $a.abr.restrictions, b = Infinity;
            I && (b = 1, "devicePixelRatio" in window && 1 < window.devicePixelRatio && (b = window.devicePixelRatio), b = Math.ceil(I.clientHeight * b * 1.1), 490 > b && (b = 490));
            a.maxHeight = b;
            h.configure($a)
          }
        }

        function ab() {
          for (var a = "", b = 0; b < O.length; b++) {
            var d = O[b], g = "onclick=\"la1SelectBitrate('" + d + "');\"", f = "0.0";
            d == z && (f = "1.0");
            a += "<li " +
                    g + '><svg style="vertical-align:bottom;opacity:' + (f + '" fill="#FFFFFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> ') + d + "p</li>"
          }
          f = "0.0";
          "auto" == z && (f = "1.0");
          X.innerHTML = a + ('<li onclick="la1SelectBitrate(\'auto\');"><svg style="vertical-align:bottom;opacity:' + (f + '" fill="#FFFFFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Auto</li>'))
        }

        function Eb() {
          O = [];
          for (var a = h.getVariantTracks(), b = 0; b < a.length; b++) {
            var d = a[b];
            -1 == O.indexOf(d.height) && O.push(d.height)
          }
          O.sort(function (g, f) {
            return f - g
          })
        }

        function Ca(a) {
          return isFinite(a) ? isNaN(a) ? null : !1 : !0
        }

        function bb() {
          try {
            var a = c.currentTime;
            if (a === G) e("Skipping analytics report because player position hasn't changed. videoCurrentTime=" + a + " previousPosition=" + G); else {
              G = a;
              var b = M(a, !0), d = Ca(c.duration), g = "";
              a = "";
              if (null != d && d) {
                var f = c.currentTime, k = c.duration;
                g = isFinite(k) ? k - f : null;
                a = M(g, !0)
              }
              var A =
                      fa();
              e("===== PLAYER STATE (HLS) =====");
              e({
                State: c.paused ? "Paused" : "Playing",
                "Bitrate Setting": "unknown",
                "Video Height": c.videoHeight,
                "Video Width": c.videoWidth,
                "Video Bandwidth": "unknown",
                "Audio Bandwidth": "unknown",
                "Video/Audio Bandwidth": "unknown",
                "Current Position": b,
                "Current Time": c.currentTime,
                "Is Content Live": null !== d ? d ? "Yes" : "No" : "unknown",
                "Dist Behind Live": g,
                "Dist Behind Live (formatted)": a,
                Domain: document.domain,
                "User Agent": window.navigator.userAgent,
                "Stream Duration": Number.isFinite(c.duration) ?
                        c.duration : "Infinity",
                "Is Fullscreen": A ? "Yes" : "No"
              });
              f = 0;
              e("----- WATCHED (" + c.played.length + ") -----");
              if (0 < c.played.length) {
                for (k = 0; k < c.played.length; k++) {
                  var P = c.played.start(k), Y = c.played.end(k);
                  f += Y - P;
                  e("[" + P + " to " + Y + "]")
                }
                e("Total Time Watched: " + f)
              }
              null != H && cb({
                state: c.paused ? "Paused" : "Playing",
                videoHeight: c.videoHeight,
                videoWidth: c.videoWidth,
                currentPosition: b,
                live: d,
                distBehindLive: d ? a : null,
                totalTimeWatched: f,
                bitrateSetting: null,
                videoBandwidth: null,
                audioBandwidth: null,
                bufferingTime: null,
                droppedFrames: null,
                estimatedBandwidth: null,
                bitrateSwitchCount: null,
                fullScreen: A
              })
            }
          } catch (t) {
            D(ha(t))
          }
        }

        function db() {
          try {
            var a = c.currentTime;
            if (a === G) e("Skipping analytics report because player position hasn't changed. videoCurrentTime=" + a + " previousPosition=" + G); else {
              G = a;
              var b = M(a, !0), d = h.isLive(), g = "n/a";
              if (d) {
                var f = h.seekRange();
                displayTime = Math.max(0, Math.floor(f.end - a));
                g = M(displayTime, !0)
              }
              var k = fa(), A = f = a = null, P = null, Y = null;
              a:{
                for (var t = h.getVariantTracks(), Da = 0; Da < t.length; Da++) {
                  var eb = t[Da];
                  if (eb.active) {
                    var r =
                            eb;
                    break a
                  }
                }
                r = null
              }
              null != r && (a = r.height, f = r.width, A = r.videoBandwidth, P = r.audioBandwidth, Y = r.bandwidth);
              e("===== PLAYER STATE (DASH) =====");
              e({
                State: c.paused ? "Paused" : "Playing",
                "Bitrate Setting": z,
                "Video Height": a,
                "Video Width": f,
                "Video Bandwidth": A,
                "Audio Bandwidth": P,
                "Video/Audio Bandwidth": Y,
                "Current Position": b,
                "Current Time": c.currentTime,
                "Is Content Live": d ? "Yes" : "No",
                "Dist Behind Live": g,
                Domain: document.domain,
                "User Agent": window.navigator.userAgent,
                "Stream Duration": Number.isFinite(c.duration) ?
                        c.duration : "Infinity",
                "Is Fullscreen": k ? "Yes" : "No"
              });
              r = 0;
              if (c.played) {
                if (e("----- WATCHED (" + c.played.length + ") -----"), 0 < c.played.length) {
                  for (t = 0; t < c.played.length; t++) {
                    var fb = c.played.start(t), gb = c.played.end(t);
                    r += gb - fb;
                    e("[" + fb + " to " + gb + "]")
                  }
                  e("Total Time Watched: " + r)
                }
              } else r = null, e("Video Watched Not Available");
              e("***** SHAKA STATS *****");
              e(h.getStats());
              if (null != H) {
                var ia = h.getStats();
                cb({
                  state: c.paused ? "Paused" : "Playing",
                  videoHeight: a,
                  videoWidth: f,
                  currentPosition: b,
                  live: d,
                  distBehindLive: d ?
                          g : null,
                  totalTimeWatched: r,
                  bitrateSetting: z,
                  videoBandwidth: A,
                  audioBandwidth: P,
                  bufferingTime: ia.bufferingTime,
                  droppedFrames: ia.droppedFrames,
                  estimatedBandwidth: ia.estimatedBandwidth,
                  bitrateSwitchCount: ia.switchHistory.length,
                  fullScreen: k
                })
              }
            }
          } catch (Fb) {
            D(ha(Fb))
          }
        }

        function ha(a) {
          var b = [];
          null != a && (a.name && b.push("NAME: " + a.name), a.message && b.push("MESSAGE: " + a.message), a.stack && b.push("STACK: " + a.stack));
          return b.join(" ")
        }

        function cb(a) {
          var b = new XMLHttpRequest;
          b.open("PUT", H, !0);
          b.setRequestHeader("Content-type",
                  "application/json; charset=utf-8");
          b.onreadystatechange = function () {
            b.readyState === XMLHttpRequest.DONE && (200 === b.status ? e("Stats update was sent successfully") : e("Unable to send stats update. Status: " + b.status))
          };
          b.send(JSON.stringify(a))
        }

        function D(a) {
          if (null != H) {
            e("Reporting Error: " + a);
            a = {state: "Error - " + a};
            var b = new XMLHttpRequest;
            b.open("PUT", H, !0);
            b.setRequestHeader("Content-type", "application/json; charset=utf-8");
            b.onreadystatechange = function () {
              b.readyState === XMLHttpRequest.DONE && (200 ===
              b.status ? e("Error report was sent successfully") : e("Unable to send error report. Status: " + b.status))
            };
            b.send(JSON.stringify(a))
          }
        }

        function Ra(a) {
          message = "";
          try {
            switch (a.code) {
              case 1001:
                message += " Additional: BAD_HTTP_STATUS Status Code=" + a.data[1] + " URI=" + a.data[0];
                break;
              case 1002:
                message += " Additional: HTTP_ERROR URI=" + a.data[0];
                break;
              case 3014:
                message += " Additional: MEDIA_SOURCE_OPERATION_FAILED Media Error Code=" + a.data[0];
                break;
              case 3015:
                message += " Additional: MEDIA_SOURCE_OPERATION_THREW Exception=" +
                        a.data[0];
                break;
              case 3016:
                message += " Additional: VIDEO_ERROR Media Error Code=" + a.data[0] + " MSExtErrorCode=" + a.data[1] + " Chrome Details=" + a.data[2]
            }
          } catch (b) {
            message += " Additional: error formatting extra info. Ex=" + b.toString()
          }
          return message
        }

        function Ea() {
          Z = null;
          var a = new XMLHttpRequest;
          a.open("GET", hb, !0);
          a.onreadystatechange = function () {
            if (a.readyState === XMLHttpRequest.DONE) if (200 === a.status) {
              var b = JSON.parse(a.responseText);
              b.cloud[Q] !== l.cloud[Q] ? (e("New event found. Player will reload."), l = b,
                      R = null, G = "", "dashUrl" === Q ? S() : "hlsUrl" === Q ? ib() : e("Unable to load new event. Unknown event type=" + Q)) : Z = setTimeout(Ea, ja)
            } else e("Unable to check if live event is available. Status: " + a.status), 500 <= a.status && (Z = setTimeout(Ea, ja))
          };
          a.send()
        }

        function jb(a, b) {
          var d = l.hasOwnProperty("newEventCheckSeconds") && null !== l.newEventCheckSeconds,
                  g = l.hasOwnProperty("newEventCheckUrl") && null !== l.newEventCheckUrl;
          !a && d && g && (e("Event is on-demand. Setting timer to check for live event."), clearTimeout(Z), hb = l.newEventCheckUrl,
                  ja = 1E3 * l.newEventCheckSeconds, Q = b, Z = setTimeout(Ea, ja))
        }

        function kb(a) {
          H = a.hasOwnProperty("statsUrl") ? a.statsUrl : null;
          B = a.hasOwnProperty("statsUpdateFreq") ? 1E3 * parseInt(a.statsUpdateFreq) : 6E4;
          3E4 > B && (B = 6E4);
          e("Analytics initialized. statsUpdateFreq=[" + B + "] statsUrl=[" + H + "]")
        }

        function Fa(a) {
          aa = Math.floor(a);
          null !== h && (e("[BW] defaultBandwidthEstimate = " + aa), h.configure({abr: {defaultBandwidthEstimate: aa}}))
        }

        function Ga() {
          null === u || C || (u.abort(), u = null, C = !0)
        }

        function Gb() {
          !C && T && (e("[BW] aborting bandwidth test (taking too long)"),
                  Ga(), S())
        }

        function Hb() {
          Ha = (new Date).getTime();
          u = new XMLHttpRequest;
          u.onreadystatechange = function () {
            if (u.readyState === XMLHttpRequest.DONE) {
              e("[BW] bandwidth test done");
              C = !0;
              if (200 === u.status) {
                var a = (new Date).getTime() - Ha;
                e("[BW] Elapsed Time = " + a);
                Fa(8 * lb.sizeInBytes / a * 1E3)
              }
              T && S()
            }
          };
          u.open("GET", lb.url, !0);
          setTimeout(Gb, 250);
          u.send()
        }

        function Ia() {
          window.la1IsiOSDevice ? C = !0 : navigator.connection && navigator.connection.downlink && 0 < navigator.connection.downlink ? (e("[BW] navigator.connection.downlink = " +
                  navigator.connection.downlink), C = !0, Fa(1E6 * navigator.connection.downlink), T && S()) : Hb()
        }

        function S() {
          null !== Ja && Ja === l.cloud.dashUrl ? e("Requested manifest is already loaded.") : (Ja = l.cloud.dashUrl, kb(l), W(), h.load(l.cloud.dashUrl, R).then(function () {
            jb(h.isLive(), "dashUrl");
            V.style.display = "none";
            wa();
            ua();
            z = "auto";
            Eb();
            ab();
            mb || (mb = !0, window.addEventListener("resize", function () {
              clearTimeout(nb);
              nb = setTimeout(W, 750)
            }));
            var a = c.play();
            void 0 !== a && a.then(function () {
              console.log("DASH Player Loaded (Autoplay Started). IsLive=" +
                      h.isLive())
            })["catch"](function () {
              c.muted = !0;
              var b = c.play();
              void 0 !== b && b.then(function () {
                console.log("DASH Player Loaded (Autoplay Started but Muted). IsLive=" + h.isLive());
                N && (N.style.display = "block")
              })
            });
            null !== U && clearInterval(U);
            U = window.setInterval(db, B);
            e("Analytics interval has been set using " + B);
            window.setTimeout(db, 1E3)
          })["catch"](sb))
        }

        function Ib(a) {
          V.style.display = "inherit";
          a = new shaka.Player(I);
          p = new shaka.cast.CastProxy(I, a, ka);
          e("CASTPROXY created using " + ka);
          c = p.getVideo();
          h = p.getPlayer();
          h.addEventListener("error", function (d) {
            var g = "Shaka video player reported an error.";
            null != d && d.detail && (g += " Category " + d.detail.category + " Code " + d.detail.code + " Severity " + d.detail.severity, g += Ra(d.detail));
            e(g);
            e(d);
            D(g)
          });
          h.addEventListener("buffering", tb.bind(this));
          c.addEventListener("play", wa.bind(this));
          c.addEventListener("pause", wa.bind(this));
          c.addEventListener("volumechange", ua.bind(this));
          p.addEventListener("caststatuschanged", Ta.bind(this));
          v.addEventListener("click", ub);
          m.addEventListener("mousedown",
                  Va.bind(this));
          m.addEventListener("touchstart", Va.bind(this));
          m.addEventListener("input", wb.bind(this));
          m.addEventListener("touchend", Ya.bind(this));
          m.addEventListener("mouseup", Ya.bind(this));
          n.addEventListener("input", zb.bind(this));
          E.addEventListener("touchstart", vb);
          E.addEventListener("click", Ua);
          Ka.addEventListener("click", Ua);
          La.addEventListener("click", xb);
          N.addEventListener("click", yb);
          x.addEventListener("mousemove", q.bind(this));
          x.addEventListener("touchmove", q.bind(this));
          x.addEventListener("touchend",
                  q.bind(this));
          x.addEventListener("mouseout", Cb.bind(this));
          a = document.getElementById("la1-fullscreenButton");
          a.addEventListener("click", Bb);
          document.addEventListener("fullscreenchange", Ab);
          X.style.display = "none";
          var b = document.getElementById("la1-bitrateButton");
          b.addEventListener("click", Db);
          Ka.addEventListener("focus", q.bind(this));
          m.addEventListener("focus", q.bind(this));
          La.addEventListener("focus", q.bind(this));
          n.addEventListener("focus", q.bind(this));
          v.addEventListener("focus", q.bind(this));
          b.addEventListener("focus", q.bind(this));
          a.addEventListener("focus", q.bind(this));
          window.setInterval(Xa.bind(this), 125);
          h.addEventListener("adaptation", function (d) {
            d = h.getStats();
            ob != d.height && (e("ABR change: " + d.height), ob = d.height)
          });
          h.configure({
            manifest: {retryParameters: {timeout: 15E3, maxAttempts: 3}},
            streaming: {retryParameters: {timeout: 15E3, maxAttempts: 3}}
          });
          null !== aa && Fa(aa)
        }

        function ib() {
          kb(l);
          var a = l.cloud.hlsUrl;
          null !== R && (a += "#t=" + R, e("Adding media fragment to manifest URL: " + a), R = null);
          c.addEventListener("loadeddata",
                  pb);
          c.src = a;
          c.load();
          null !== Ma && clearInterval(Ma);
          Ma = window.setInterval(Jb, 5E3)
        }

        function Kb(a, b) {
          b.innerHTML = '<video id="la1-video" width="100%" autoplay playsinline>    <source src="" type="application/x-mpegURL">Your browser or operating system version is not supported. Please ensure you are using iOS 10 or later and your browser is up-to-date.</video>';
          c = document.getElementById("la1-video");
          c.addEventListener("error", Lb);
          c.addEventListener("loadedmetadata", function () {
            jb(Ca(c.duration),
                    "hlsUrl")
          })
        }

        function Jb() {
          if (!c.paused) {
            var a = c.currentTime, b = (new Date).getTime();
            a:{
              if (null != c) {
                var d = c.currentTime;
                if (0 < c.buffered.length) for (var g = 0; g < c.buffered.length; g++) {
                  var f = c.buffered.start(g), k = c.buffered.end(g);
                  if (d >= f && d <= k) {
                    d = k - d;
                    break a
                  }
                }
              }
              d = 0
            }
            null == la ? 0 < a && a != ma && (la = a) : Na ? na == a ? b - oa > Mb && (g = null == pa ? 0 : b - pa, d > qa || g < Nb || (la = null, Na = !1, na = oa = null, qa = 0, pa = null, ma = a, c.addEventListener("loadeddata", qb), Oa = !1, window.setTimeout(Ob, 12E3), c.load())) : (oa = b, na = a) : a != la && (Na = !0, oa = b, na = a);
            d != qa &&
            (qa = d, pa = b)
          }
        }

        function Ob() {
          Oa || c.load()
        }

        function qb() {
          Oa = !0;
          c.removeEventListener("loadeddata", qb);
          null != c && null != ma && (c.currentTime = ma, c.play())
        }

        function Lb() {
          D("video.onError Code = " + c.error.code + " Message: " + c.error.message);
          e("The following error was encountered. Code: " + c.error.code + " Message: " + c.error.message)
        }

        function pb() {
          c.removeEventListener("loadeddata", pb);
          var a = c.currentTime;
          Ca(c.duration) ? a > ba ? (c.currentTime = a - ba, e("Using presentation delay of " + ba + " seconds")) : (c.currentTime = 0, e("Close to beginning, so only using presentation delay of " +
                  a + " seconds")) : e("Stream is on-demand, not using presentation delay.");
          null !== U && clearInterval(U);
          U = window.setInterval(bb, B);
          e("Analytics interval has been set using " + B);
          window.setTimeout(bb, 1E3)
        }

        function Pa(a, b) {
          window.la1IsiOSDevice ? (e("iOS detected."), a.hasOwnProperty("presentationDelay") && (ba = parseFloat(a.presentationDelay), e("hlsPresentationDelay: " + ba)), Kb(a, b), ib()) : (shaka.polyfill.installAll(), a.hasOwnProperty("chromeCastAppId") && null != a.chromeCastAppId && (ka = a.chromeCastAppId, ta = !0, e("Enabling Chromecast")),
                  b.innerHTML = '        <div id="la1-videoContainer" class="la1-overlay-parent">          <div class="la1-aspect-ratio"></div>          <video id="la1-video" class="la1-overlay"></video>          <button id="la1-giantPlayButtonContainer" class="la1-overlay" type="button" tabindex="-1" aria-label="Toggle Play Pause">            <div id="la1-giantPlayButton">              <div class="la1-giantPlayButtonInner">                <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>              </div>            </div>          </button>          <button id="la1-autoplay-muted-msg-container" class="la1-overlay" type="button" aria-label="Tap to Unmute">            <div id="la1-autoplay-muted-msg" class="la1-overlay">              <span class="la1-muted-msg-icon"><svg fill="#FFFFFF" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg></span>              <span class="la1-muted-msg-text">TAP TO UNMUTE</span>            </div>          </button>          <div id="la1-bufferingSpinner" class="la1-overlay">            <svg class="la1-spinnerSvg" viewBox="25 25 50 50">              <circle class="la1-spinnerPath" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />            </svg>          </div>          <div id="la1-castReceiverName"></div>          <div id="la1-errorMessage" class="la1-errorMessage la1-overlay"></div>          <div id="la1-controlsContainer" class="la1-overlay">            <div id="la1-controls">              <button id="la1-playPauseButton" type="button" aria-label="Toggle Play Pause">                <svg id="la1-playBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                <svg id="la1-pauseBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>              </button>              <div class="la1-inputRangeWrapper la1-seekBarWrapper">                <input id="la1-seekBar" type="range" step="any" min="0" max="1" value="0" aria-label="Seek Bar">              </div>              <div id="la1-currentTime">0:00</div>              <button id="la1-muteButton" type="button" aria-label="Toggle Mute">                <svg id="la1-unmuteBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>                <svg id="la1-muteBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>              </button>              <div class="la1-inputRangeWrapper la1-volumeWrapper">                <input id="la1-volumeBar" type="range" step="any" min="0" max="1" value="0" aria-label="Volume">              </div>              <div class="la1-bitrate-menu">                <button id="la1-bitrateButton" type="button" aria-label="Resolution Options">                  <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>                </button>                <ul id="la1-bitrate-menu-content">                </ul>              </div>              <button id="la1-castButton" type="button" aria-label="Toggle Chromecast">                <svg id="la1-castBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" opacity=".1"/><path d="M0 0h24v24H0z" fill="none"/><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"/></svg>                <svg id="la1-stopCastingBtnIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" opacity=".1"/><path d="M0 0h24v24H0z" fill="none"/><path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>              </button>              <button id="la1-fullscreenButton" type="button" aria-label="Toggle Fullscreen">                <svg id="la1-fullscreenIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>                <svg id="la1-fullscreenExitIcon" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>              </button>              <img id="la1-logo" alt="Living As One" />            </div>          </div>        </div>',
                  I = document.getElementById("la1-video"), Sa = document.getElementById("la1-controlsContainer"), K = document.getElementById("la1-controls"), V = document.getElementById("la1-bufferingSpinner"), F = document.getElementById("la1-castReceiverName"), sa = document.getElementById("la1-errorMessage"), N = document.getElementById("la1-autoplay-muted-msg-container"), Ka = document.getElementById("la1-playPauseButton"), ya = document.getElementById("la1-playBtnIcon"), xa = document.getElementById("la1-pauseBtnIcon"), La = document.getElementById("la1-muteButton"),
                  da = document.getElementById("la1-muteBtnIcon"), ea = document.getElementById("la1-unmuteBtnIcon"), za = document.getElementById("la1-currentTime"), m = document.getElementById("la1-seekBar"), v = document.getElementById("la1-castButton"), Aa = document.getElementById("la1-fullscreenIcon"), Ba = document.getElementById("la1-fullscreenExitIcon"), n = document.getElementById("la1-volumeBar"), E = document.getElementById("la1-giantPlayButtonContainer"), J = document.getElementById("la1-giantPlayButton"), x = document.getElementById("la1-videoContainer"),
                  X = document.getElementById("la1-bitrate-menu-content"), Qa = document.getElementById("la1-logo"), a.hasOwnProperty("logoUrl") && null != a.logoUrl && (Qa.src = a.logoUrl, Qa.style.display = "block"), shaka.Player.isBrowserSupported() ? (e("Your browser is supported."), Ib(a)) : (e("Your browser is NOT supported."), ra("Your browser is not supported.<br /><br />Please ensure that you are using the most up-to-date version of your browser."), D("browser not supported")))
        }

        function Pb(a) {
          var b = a.split(":"), d = b.length - 1;
          return 0 ==
          d ? parseFloat(a) : 1 == d ? (a = parseInt(b[0]), b = parseFloat(b[1]), 60 * a + b) : 2 == d ? (d = parseInt(b[0]), a = parseInt(b[1]), b = parseFloat(b[2]), 3600 * d + 60 * a + b) : NaN
        }

        function Qb() {
          var a = document.getElementById("resi-video-player");
          a || (a = document.getElementById("la1-video-player"));
          return a
        }

        function rb(a) {
          var b = Qb();
          if (b) if (a) l = {
            statsUrl: null,
            statsUpdateFreq: 6E4,
            cloud: {hlsUrl: a, dashUrl: a}
          }, Pa(l, b), T = !0, Ia(); else {
            if (a = b.getAttribute("data-start-pos")) {
              var d = Pb(a);
              isNaN(d) ? e("Unable to parse the following start position into seconds: " +
                      a) : R = d
            }
            if (a = b.getAttribute("data-embed-id")) {
              var g = new XMLHttpRequest;
              g.onreadystatechange = function () {
                if (g.readyState === XMLHttpRequest.DONE) if (e("[BW] embed code API done"), T = !0, 200 === g.status) {
                  l = JSON.parse(g.responseText);
                  Pa(l, b);
                  var k = l;
                  try {
                    null != k && k.hasOwnProperty("clientId") && null != k.clientId && window.localStorage && window.localStorage.setItem("clientId", k.clientId)
                  } catch (A) {
                    D(ha(A))
                  }
                  k = l;
                  "undefined" !== typeof la1WebPlayerOptions && null != la1WebPlayerOptions && la1WebPlayerOptions.hasOwnProperty("changePageTitle") &&
                  null != k && k.hasOwnProperty("name") && (document.title = la1WebPlayerOptions.changePageTitle.replace("[[event-name]]", k.name));
                  C ? S() : 250 < (new Date).getTime() - Ha && (Ga(), S())
                } else C || Ga(), 0 == g.status ? b.innerHTML = "There was a problem loading the event. (Status: " + g.status + ")<br /><br />Please try refreshing your browser window." : 404 == g.status ? "event" === b.getAttribute("data-type") ? b.innerHTML = "This event is no longer available." : b.innerHTML = "Event is not currently available. (Status: " + g.status + ")" : b.innerHTML =
                        "Event is not currently available. (Status: " + g.status + ")"
              };
              d = "event" === b.getAttribute("data-type") ? "https://webevents.livingasone.com/api/v1/events/" : "https://webevents.livingasone.com/api/v1/eventprofiles/latest/";
              a:{
                try {
                  if (window.localStorage) {
                    var f = window.localStorage.getItem("clientId");
                    break a
                  }
                } catch (k) {
                  e("Local Storage Error: " + ha(k))
                }
                f = null
              }
              f = null != f ? "?clientId=" + f : "";
              Ia();
              g.open("GET", d + a + f, !0);
              g.send()
            } else (f = b.getAttribute("data-manifest")) ? (l = {
              statsUrl: null, statsUpdateFreq: 6E4, cloud: {
                hlsUrl: f,
                dashUrl: f
              }
            }, e("Loading webplayer using embed code manifest attribute."), Pa(l, b), T = !0, Ia()) : e("Event cannot be loaded because no embed code ID or manifest URL was found.")
          } else e("video player DIV not found.")
        }

        var ka = "7AF33776", $a = {abr: {restrictions: {maxHeight: Infinity, minHeight: 0}}}, H = null, B = 6E4, l = null,
                c = null, h = null, p = null, ta = !1, I = null, x = null, Sa = null, K = null, V = null, F = null, sa = null,
                N = null, Ka = null, ya = null, xa = null, La = null, da = null, ea = null, za = null, m = null, n = null,
                Aa = null, Ba = null, v = null, E = null, J = null, X = null,
                Qa = null, O = [], z = "auto", ba = 60, w = null, y = null, L = !1, Wa = !1, U = null, G = "", nb = null,
                hb = null, ja = 6E4, Q = "dashUrl", Z = null, Ma = null, mb = !1, R = null, ob = 0,
                lb = {url: "https://control.resi.io/webplayer/bandwidth-test/test-180.jpg", sizeInBytes: 40225}, u = null,
                Ha = 0, T = !1, C = !1, aa = null, Ja = null;
        window.la1AllowCast = function (a) {
          ta = a;
          Ta(null);
          a && e("CC_APP_ID = " + ka)
        };
        var ca = null;
        window.la1SelectBitrate = function (a) {
          var b = document.getElementById("la1-bitrate-menu-content");
          z == a ? b.style.display = "none" : (z = a, "auto" == a ? (e("ABR on auto"), W()) :
                  (e("ABR restricted to " + a + "p"), a = {
                    abr: {
                      restrictions: {
                        maxHeight: parseInt(a) + 1,
                        minHeight: a - 1
                      }
                    }
                  }, h.configure(a)), b.style.display = "none", ab())
        };
        Number.isFinite = Number.isFinite || function (a) {
          return "number" === typeof a && isFinite(a)
        };
        var qa = 0, pa = null, la = null, Na = !1, oa = null, na = null, Oa = !1, ma = null, Mb = 15E3, Nb = 1E4;
        "undefined" == typeof shaka && "undefined" != typeof exports && (console.log("Shaka was not defined (will use exports)"), shaka = exports);
        window.la1InitWebPlayer = rb;
        rb()
      })();

    </script>