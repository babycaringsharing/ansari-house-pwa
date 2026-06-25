const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/index-CEwgQVqA.js", "assets/vendor-react-Co1__6Wa.js", "assets/vendor-dexie-BBE5do0Y.js", "assets/vendor-icons-CtWdggOv.js", "assets/index-BrhwAlQz.js", "assets/web-B8Bp-frk.js"]))) => i.map(i => d[i]);
import {
  b as yg,
  d as bg,
  u as zo,
  r as Y,
  L as za,
  e as xg,
  B as vg,
  f as jg,
  h as zl,
  N as gn
} from "./vendor-react-Co1__6Wa.js";
import {
  D as Sg,
  u as Zt
} from "./vendor-dexie-BBE5do0Y.js";
import {
  C as xi,
  I as al,
  a as Sa,
  U as zg,
  S as Fm,
  M as Vs,
  P as Ws,
  A as Dg,
  T as nl,
  b as Il,
  D as Wt,
  X as St,
  Z as Ng,
  c as Ag,
  R as Cg,
  d as wg,
  e as xo,
  E as Jl,
  f as Gs,
  g as pi,
  h as vn,
  B as Tg,
  H as zm,
  F as Ft,
  i as Vt,
  j as Dm,
  k as vo,
  l as Km,
  m as Zs,
  n as Eg,
  o as Jm,
  p as Do,
  q as yi,
  r as Da,
  s as vi,
  t as gi,
  u as Rg,
  v as $m,
  w as ji,
  x as jo,
  y as Mg,
  z as Pl,
  G as Ug,
  V as Bg,
  J as Im,
  K as Og,
  L as _g,
  N as Lg,
  O as Pm,
  Q as Nm,
  W as e0,
  Y as Hg,
  _ as t0,
  $ as kg,
  a0 as So,
  a1 as qg,
  a2 as Gg,
  a3 as oo,
  a4 as Yg,
  a5 as Qg,
  a6 as Am,
  a7 as Xg,
  a8 as Vg,
  a9 as Wg,
  aa as Zg
} from "./vendor-icons-CtWdggOv.js";
(function() {
  const d = document.createElement("link").relList;
  if (d && d.supports && d.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) o(h);
  new MutationObserver(h => {
    for (const p of h)
      if (p.type === "childList")
        for (const x of p.addedNodes) x.tagName === "LINK" && x.rel === "modulepreload" && o(x)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function f(h) {
    const p = {};
    return h.integrity && (p.integrity = h.integrity), h.referrerPolicy && (p.referrerPolicy = h.referrerPolicy), h.crossOrigin === "use-credentials" ? p.credentials = "include" : h.crossOrigin === "anonymous" ? p.credentials = "omit" : p.credentials = "same-origin", p
  }

  function o(h) {
    if (h.ep) return;
    h.ep = !0;
    const p = f(h);
    fetch(h.href, p)
  }
})();
var uo = {
    exports: {}
  },
  mi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cm;

function Fg() {
  if (Cm) return mi;
  Cm = 1;
  var c = Symbol.for("react.transitional.element"),
    d = Symbol.for("react.fragment");

  function f(o, h, p) {
    var x = null;
    if (p !== void 0 && (x = "" + p), h.key !== void 0 && (x = "" + h.key), "key" in h) {
      p = {};
      for (var N in h) N !== "key" && (p[N] = h[N])
    } else p = h;
    return h = p.ref, {
      $$typeof: c,
      type: o,
      key: x,
      ref: h !== void 0 ? h : null,
      props: p
    }
  }
  return mi.Fragment = d, mi.jsx = f, mi.jsxs = f, mi
}
var wm;

function Kg() {
  return wm || (wm = 1, uo.exports = Fg()), uo.exports
}
var n = Kg(),
  fo = {
    exports: {}
  },
  hi = {},
  mo = {
    exports: {}
  },
  ho = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tm;

function Jg() {
  return Tm || (Tm = 1, (function(c) {
    function d(v, U) {
      var Z = v.length;
      v.push(U);
      e: for (; 0 < Z;) {
        var te = Z - 1 >>> 1,
          me = v[te];
        if (0 < h(me, U)) v[te] = U, v[Z] = me, Z = te;
        else break e
      }
    }

    function f(v) {
      return v.length === 0 ? null : v[0]
    }

    function o(v) {
      if (v.length === 0) return null;
      var U = v[0],
        Z = v.pop();
      if (Z !== U) {
        v[0] = Z;
        e: for (var te = 0, me = v.length, ie = me >>> 1; te < ie;) {
          var le = 2 * (te + 1) - 1,
            $ = v[le],
            ve = le + 1,
            dt = v[ve];
          if (0 > h($, Z)) ve < me && 0 > h(dt, $) ? (v[te] = dt, v[ve] = Z, te = ve) : (v[te] = $, v[le] = Z, te = le);
          else if (ve < me && 0 > h(dt, Z)) v[te] = dt, v[ve] = Z, te = ve;
          else break e
        }
      }
      return U
    }

    function h(v, U) {
      var Z = v.sortIndex - U.sortIndex;
      return Z !== 0 ? Z : v.id - U.id
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      c.unstable_now = function() {
        return p.now()
      }
    } else {
      var x = Date,
        N = x.now();
      c.unstable_now = function() {
        return x.now() - N
      }
    }
    var b = [],
      A = [],
      k = 1,
      E = null,
      B = 3,
      I = !1,
      G = !1,
      L = !1,
      W = !1,
      q = typeof setTimeout == "function" ? setTimeout : null,
      V = typeof clearTimeout == "function" ? clearTimeout : null,
      ne = typeof setImmediate < "u" ? setImmediate : null;

    function se(v) {
      for (var U = f(A); U !== null;) {
        if (U.callback === null) o(A);
        else if (U.startTime <= v) o(A), U.sortIndex = U.expirationTime, d(b, U);
        else break;
        U = f(A)
      }
    }

    function Qe(v) {
      if (L = !1, se(v), !G)
        if (f(b) !== null) G = !0, _e || (_e = !0, J());
        else {
          var U = f(A);
          U !== null && Ye(Qe, U.startTime - v)
        }
    }
    var _e = !1,
      xe = -1,
      _ = 5,
      ae = -1;

    function ye() {
      return W ? !0 : !(c.unstable_now() - ae < _)
    }

    function O() {
      if (W = !1, _e) {
        var v = c.unstable_now();
        ae = v;
        var U = !0;
        try {
          e: {
            G = !1,
            L && (L = !1, V(xe), xe = -1),
            I = !0;
            var Z = B;
            try {
              t: {
                for (se(v), E = f(b); E !== null && !(E.expirationTime > v && ye());) {
                  var te = E.callback;
                  if (typeof te == "function") {
                    E.callback = null, B = E.priorityLevel;
                    var me = te(E.expirationTime <= v);
                    if (v = c.unstable_now(), typeof me == "function") {
                      E.callback = me, se(v), U = !0;
                      break t
                    }
                    E === f(b) && o(b), se(v)
                  } else o(b);
                  E = f(b)
                }
                if (E !== null) U = !0;
                else {
                  var ie = f(A);
                  ie !== null && Ye(Qe, ie.startTime - v), U = !1
                }
              }
              break e
            }
            finally {
              E = null, B = Z, I = !1
            }
            U = void 0
          }
        }
        finally {
          U ? J() : _e = !1
        }
      }
    }
    var J;
    if (typeof ne == "function") J = function() {
      ne(O)
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel,
        We = Me.port2;
      Me.port1.onmessage = O, J = function() {
        We.postMessage(null)
      }
    } else J = function() {
      q(O, 0)
    };

    function Ye(v, U) {
      xe = q(function() {
        v(c.unstable_now())
      }, U)
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(v) {
      v.callback = null
    }, c.unstable_forceFrameRate = function(v) {
      0 > v || 125 < v ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < v ? Math.floor(1e3 / v) : 5
    }, c.unstable_getCurrentPriorityLevel = function() {
      return B
    }, c.unstable_next = function(v) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = B
      }
      var Z = B;
      B = U;
      try {
        return v()
      } finally {
        B = Z
      }
    }, c.unstable_requestPaint = function() {
      W = !0
    }, c.unstable_runWithPriority = function(v, U) {
      switch (v) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          v = 3
      }
      var Z = B;
      B = v;
      try {
        return U()
      } finally {
        B = Z
      }
    }, c.unstable_scheduleCallback = function(v, U, Z) {
      var te = c.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? te + Z : te) : Z = te, v) {
        case 1:
          var me = -1;
          break;
        case 2:
          me = 250;
          break;
        case 5:
          me = 1073741823;
          break;
        case 4:
          me = 1e4;
          break;
        default:
          me = 5e3
      }
      return me = Z + me, v = {
        id: k++,
        callback: U,
        priorityLevel: v,
        startTime: Z,
        expirationTime: me,
        sortIndex: -1
      }, Z > te ? (v.sortIndex = Z, d(A, v), f(b) === null && v === f(A) && (L ? (V(xe), xe = -1) : L = !0, Ye(Qe, Z - te))) : (v.sortIndex = me, d(b, v), G || I || (G = !0, _e || (_e = !0, J()))), v
    }, c.unstable_shouldYield = ye, c.unstable_wrapCallback = function(v) {
      var U = B;
      return function() {
        var Z = B;
        B = U;
        try {
          return v.apply(this, arguments)
        } finally {
          B = Z
        }
      }
    }
  })(ho)), ho
}
var Em;

function $g() {
  return Em || (Em = 1, mo.exports = Jg()), mo.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rm;

function Ig() {
  if (Rm) return hi;
  Rm = 1;
  var c = $g(),
    d = yg(),
    f = bg();

  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l])
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function h(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
  }

  function p(e) {
    var t = e,
      l = e;
    if (e.alternate)
      for (; t.return;) t = t.return;
    else {
      e = t;
      do t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? l : null
  }

  function x(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
  }

  function N(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
  }

  function b(e) {
    if (p(e) !== e) throw Error(o(188))
  }

  function A(e) {
    var t = e.alternate;
    if (!t) {
      if (t = p(e), t === null) throw Error(o(188));
      return t !== e ? null : e
    }
    for (var l = e, a = t;;) {
      var i = l.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (a = i.return, a !== null) {
          l = a;
          continue
        }
        break
      }
      if (i.child === s.child) {
        for (s = i.child; s;) {
          if (s === l) return b(i), e;
          if (s === a) return b(i), t;
          s = s.sibling
        }
        throw Error(o(188))
      }
      if (l.return !== a.return) l = i, a = s;
      else {
        for (var r = !1, u = i.child; u;) {
          if (u === l) {
            r = !0, l = i, a = s;
            break
          }
          if (u === a) {
            r = !0, a = i, l = s;
            break
          }
          u = u.sibling
        }
        if (!r) {
          for (u = s.child; u;) {
            if (u === l) {
              r = !0, l = s, a = i;
              break
            }
            if (u === a) {
              r = !0, a = s, l = i;
              break
            }
            u = u.sibling
          }
          if (!r) throw Error(o(189))
        }
      }
      if (l.alternate !== a) throw Error(o(190))
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? e : t
  }

  function k(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (t = k(e), t !== null) return t;
      e = e.sibling
    }
    return null
  }
  var E = Object.assign,
    B = Symbol.for("react.element"),
    I = Symbol.for("react.transitional.element"),
    G = Symbol.for("react.portal"),
    L = Symbol.for("react.fragment"),
    W = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    V = Symbol.for("react.consumer"),
    ne = Symbol.for("react.context"),
    se = Symbol.for("react.forward_ref"),
    Qe = Symbol.for("react.suspense"),
    _e = Symbol.for("react.suspense_list"),
    xe = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    ae = Symbol.for("react.activity"),
    ye = Symbol.for("react.memo_cache_sentinel"),
    O = Symbol.iterator;

  function J(e) {
    return e === null || typeof e != "object" ? null : (e = O && e[O] || e["@@iterator"], typeof e == "function" ? e : null)
  }
  var Me = Symbol.for("react.client.reference");

  function We(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === Me ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case L:
        return "Fragment";
      case q:
        return "Profiler";
      case W:
        return "StrictMode";
      case Qe:
        return "Suspense";
      case _e:
        return "SuspenseList";
      case ae:
        return "Activity"
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case G:
        return "Portal";
      case ne:
        return e.displayName || "Context";
      case V:
        return (e._context.displayName || "Context") + ".Consumer";
      case se:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case xe:
        return t = e.displayName || null, t !== null ? t : We(e.type) || "Memo";
      case _:
        t = e._payload, e = e._init;
        try {
          return We(e(t))
        } catch {}
    }
    return null
  }
  var Ye = Array.isArray,
    v = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = {
      pending: !1,
      data: null,
      method: null,
      action: null
    },
    te = [],
    me = -1;

  function ie(e) {
    return {
      current: e
    }
  }

  function le(e) {
    0 > me || (e.current = te[me], te[me] = null, me--)
  }

  function $(e, t) {
    me++, te[me] = e.current, e.current = t
  }
  var ve = ie(null),
    dt = ie(null),
    ht = ie(null),
    Kt = ie(null);

  function Gt(e, t) {
    switch ($(ht, t), $(dt, e), $(ve, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Wf(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = Wf(t), e = Zf(t, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0
        }
    }
    le(ve), $(ve, e)
  }

  function et() {
    le(ve), le(dt), le(ht)
  }

  function ea(e) {
    e.memoizedState !== null && $(Kt, e);
    var t = ve.current,
      l = Zf(t, e.type);
    t !== l && ($(dt, e), $(ve, l))
  }

  function Nl(e) {
    dt.current === e && (le(ve), le(dt)), Kt.current === e && (le(Kt), oi._currentValue = Z)
  }
  var ta, C;

  function H(e) {
    if (ta === void 0) try {
      throw Error()
    } catch (l) {
      var t = l.stack.trim().match(/\n( *(at )?)/);
      ta = t && t[1] || "", C = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
    }
    return `
` + ta + e + C
  }
  var re = !1;

  function qe(e, t) {
    if (!e || re) return "";
    re = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var M = function() {
                throw Error()
              };
              if (Object.defineProperty(M.prototype, "props", {
                  set: function() {
                    throw Error()
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(M, [])
                } catch (D) {
                  var z = D
                }
                Reflect.construct(e, [], M)
              } else {
                try {
                  M.call()
                } catch (D) {
                  z = D
                }
                e.call(M.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (D) {
                z = D
              }(M = e()) && typeof M.catch == "function" && M.catch(function() {})
            }
          } catch (D) {
            if (D && z && typeof D.stack == "string") return [D.stack, z.stack]
          }
          return [null, null]
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      i && i.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var s = a.DetermineComponentFrameRoot(),
        r = s[0],
        u = s[1];
      if (r && u) {
        var m = r.split(`
`),
          S = u.split(`
`);
        for (i = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot");) a++;
        for (; i < S.length && !S[i].includes("DetermineComponentFrameRoot");) i++;
        if (a === m.length || i === S.length)
          for (a = m.length - 1, i = S.length - 1; 1 <= a && 0 <= i && m[a] !== S[i];) i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (m[a] !== S[i]) {
            if (a !== 1 || i !== 1)
              do
                if (a--, i--, 0 > i || m[a] !== S[i]) {
                  var T = `
` + m[a].replace(" at new ", " at ");
                  return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), T
                } while (1 <= a && 0 <= i);
            break
          }
      }
    } finally {
      re = !1, Error.prepareStackTrace = l
    }
    return (l = e ? e.displayName || e.name : "") ? H(l) : ""
  }

  function tt(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return H(e.type);
      case 16:
        return H("Lazy");
      case 13:
        return e.child !== t && t !== null ? H("Suspense Fallback") : H("Suspense");
      case 19:
        return H("SuspenseList");
      case 0:
      case 15:
        return qe(e.type, !1);
      case 11:
        return qe(e.type.render, !1);
      case 1:
        return qe(e.type, !0);
      case 31:
        return H("Activity");
      default:
        return ""
    }
  }

  function Jt(e) {
    try {
      var t = "",
        l = null;
      do t += tt(e, l), l = e, e = e.return; while (e);
      return t
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack
    }
  }
  var Sn = Object.prototype.hasOwnProperty,
    la = c.unstable_scheduleCallback,
    Na = c.unstable_cancelCallback,
    Ni = c.unstable_shouldYield,
    Ai = c.unstable_requestPaint,
    ft = c.unstable_now,
    Ci = c.unstable_getCurrentPriorityLevel,
    w = c.unstable_ImmediatePriority,
    Q = c.unstable_UserBlockingPriority,
    oe = c.unstable_NormalPriority,
    je = c.unstable_LowPriority,
    Ne = c.unstable_IdlePriority,
    he = c.log,
    we = c.unstable_setDisableYieldValue,
    Ue = null,
    Le = null;

  function $t(e) {
    if (typeof he == "function" && we(e), Le && typeof Le.setStrictMode == "function") try {
      Le.setStrictMode(Ue, e)
    } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : wi,
    Aa = Math.log,
    Ca = Math.LN2;

  function wi(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Aa(e) / Ca | 0) | 0
  }
  var wa = 256,
    Ta = 262144,
    aa = 4194304;

  function It(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e
    }
  }

  function Be(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0,
      s = e.suspendedLanes,
      r = e.pingedLanes;
    e = e.warmLanes;
    var u = a & 134217727;
    return u !== 0 ? (a = u & ~s, a !== 0 ? i = It(a) : (r &= u, r !== 0 ? i = It(r) : l || (l = u & ~e, l !== 0 && (i = It(l))))) : (u = a & ~s, u !== 0 ? i = It(u) : r !== 0 ? i = It(r) : l || (l = a & ~e, l !== 0 && (i = It(l)))), i === 0 ? 0 : t !== 0 && t !== i && (t & s) === 0 && (s = i & -i, l = t & -t, s >= l || s === 32 && (l & 4194048) !== 0) ? t : i
  }

  function na(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
  }

  function n0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1
    }
  }

  function Ao() {
    var e = aa;
    return aa <<= 1, (aa & 62914560) === 0 && (aa = 4194304), e
  }

  function $s(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t
  }

  function zn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
  }

  function i0(e, t, l, a, i, s) {
    var r = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var u = e.entanglements,
      m = e.expirationTimes,
      S = e.hiddenUpdates;
    for (l = r & ~l; 0 < l;) {
      var T = 31 - nt(l),
        M = 1 << T;
      u[T] = 0, m[T] = -1;
      var z = S[T];
      if (z !== null)
        for (S[T] = null, T = 0; T < z.length; T++) {
          var D = z[T];
          D !== null && (D.lane &= -536870913)
        }
      l &= ~M
    }
    a !== 0 && Co(e, a, 0), s !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(r & ~t))
  }

  function Co(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - nt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930
  }

  function wo(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l;) {
      var a = 31 - nt(l),
        i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), l &= ~i
    }
  }

  function To(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Is(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
  }

  function Is(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0
    }
    return e
  }

  function Ps(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }

  function Eo() {
    var e = U.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : pm(e.type))
  }

  function Ro(e, t) {
    var l = U.p;
    try {
      return U.p = e, t()
    } finally {
      U.p = l
    }
  }
  var Al = Math.random().toString(36).slice(2),
    it = "__reactFiber$" + Al,
    gt = "__reactProps$" + Al,
    Ea = "__reactContainer$" + Al,
    er = "__reactEvents$" + Al,
    s0 = "__reactListeners$" + Al,
    r0 = "__reactHandles$" + Al,
    Mo = "__reactResources$" + Al,
    Dn = "__reactMarker$" + Al;

  function tr(e) {
    delete e[it], delete e[gt], delete e[er], delete e[s0], delete e[r0]
  }

  function Ra(e) {
    var t = e[it];
    if (t) return t;
    for (var l = e.parentNode; l;) {
      if (t = l[Ea] || l[it]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = em(e); e !== null;) {
            if (l = e[it]) return l;
            e = em(e)
          }
        return t
      }
      e = l, l = e.parentNode
    }
    return null
  }

  function Ma(e) {
    if (e = e[it] || e[Ea]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e
    }
    return null
  }

  function Nn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33))
  }

  function Ua(e) {
    var t = e[Mo];
    return t || (t = e[Mo] = {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }), t
  }

  function lt(e) {
    e[Dn] = !0
  }
  var Uo = new Set,
    Bo = {};

  function ia(e, t) {
    Ba(e, t), Ba(e + "Capture", t)
  }

  function Ba(e, t) {
    for (Bo[e] = t, e = 0; e < t.length; e++) Uo.add(t[e])
  }
  var c0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
    Oo = {},
    _o = {};

  function o0(e) {
    return Sn.call(_o, e) ? !0 : Sn.call(Oo, e) ? !1 : c0.test(e) ? _o[e] = !0 : (Oo[e] = !0, !1)
  }

  function Ti(e, t, l) {
    if (o0(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return
            }
        }
        e.setAttribute(t, "" + l)
      }
  }

  function Ei(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return
      }
      e.setAttribute(t, "" + l)
    }
  }

  function il(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return
      }
      e.setAttributeNS(t, l, "" + a)
    }
  }

  function Et(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return ""
    }
  }

  function Lo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
  }

  function u0(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var i = a.get,
        s = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this)
        },
        set: function(r) {
          l = "" + r, s.call(this, r)
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l
        },
        setValue: function(r) {
          l = "" + r
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t]
        }
      }
    }
  }

  function lr(e) {
    if (!e._valueTracker) {
      var t = Lo(e) ? "checked" : "value";
      e._valueTracker = u0(e, t, "" + e[t])
    }
  }

  function Ho(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return e && (a = Lo(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1
  }

  function Ri(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  var d0 = /[\n"\\]/g;

  function Rt(e) {
    return e.replace(d0, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " "
    })
  }

  function ar(e, t, l, a, i, s, r, u) {
    e.name = "", r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.type = r : e.removeAttribute("type"), t != null ? r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Et(t)) : e.value !== "" + Et(t) && (e.value = "" + Et(t)) : r !== "submit" && r !== "reset" || e.removeAttribute("value"), t != null ? nr(e, r, Et(t)) : l != null ? nr(e, r, Et(l)) : a != null && e.removeAttribute("value"), i == null && s != null && (e.defaultChecked = !!s), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.name = "" + Et(u) : e.removeAttribute("name")
  }

  function ko(e, t, l, a, i, s, r, u) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || l != null) {
      if (!(s !== "submit" && s !== "reset" || t != null)) {
        lr(e);
        return
      }
      l = l != null ? "" + Et(l) : "", t = t != null ? "" + Et(t) : l, u || t === e.value || (e.value = t), e.defaultValue = t
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = u ? e.checked : !!a, e.defaultChecked = !!a, r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.name = r), lr(e)
  }

  function nr(e, t, l) {
    t === "number" && Ri(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
  }

  function Oa(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < l.length; i++) t["$" + l[i]] = !0;
      for (l = 0; l < e.length; l++) i = t.hasOwnProperty("$" + e[l].value), e[l].selected !== i && (e[l].selected = i), i && a && (e[l].defaultSelected = !0)
    } else {
      for (l = "" + Et(l), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === l) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return
        }
        t !== null || e[i].disabled || (t = e[i])
      }
      t !== null && (t.selected = !0)
    }
  }

  function qo(e, t, l) {
    if (t != null && (t = "" + Et(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return
    }
    e.defaultValue = l != null ? "" + Et(l) : ""
  }

  function Go(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (Ye(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0]
        }
        l = a
      }
      l == null && (l = ""), t = l
    }
    l = Et(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), lr(e)
  }

  function _a(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return
      }
    }
    e.textContent = t
  }
  var f0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

  function Yo(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || f0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
  }

  function Qo(e, t, l) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (e = e.style, l != null) {
      for (var a in l) !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t) a = t[i], t.hasOwnProperty(i) && l[i] !== a && Yo(e, i, a)
    } else
      for (var s in t) t.hasOwnProperty(s) && Yo(e, s, t[s])
  }

  function ir(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0
    }
  }
  var m0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]),
    h0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

  function Mi(e) {
    return h0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
  }

  function sl() {}
  var sr = null;

  function rr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
  }
  var La = null,
    Ha = null;

  function Xo(e) {
    var t = Ma(e);
    if (t && (e = t.stateNode)) {
      var l = e[gt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ar(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode;) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + Rt("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var i = a[gt] || null;
                if (!i) throw Error(o(90));
                ar(a, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name)
              }
            }
            for (t = 0; t < l.length; t++) a = l[t], a.form === e.form && Ho(a)
          }
          break e;
        case "textarea":
          qo(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Oa(e, !!l.multiple, t, !1)
      }
    }
  }
  var cr = !1;

  function Vo(e, t, l) {
    if (cr) return e(t, l);
    cr = !0;
    try {
      var a = e(t);
      return a
    } finally {
      if (cr = !1, (La !== null || Ha !== null) && (xs(), La && (t = La, e = Ha, Ha = La = null, Xo(t), e)))
        for (t = 0; t < e.length; t++) Xo(e[t])
    }
  }

  function An(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[gt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(o(231, t, typeof l));
    return l
  }
  var rl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    or = !1;
  if (rl) try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", {
      get: function() {
        or = !0
      }
    }), window.addEventListener("test", Cn, Cn), window.removeEventListener("test", Cn, Cn)
  } catch {
    or = !1
  }
  var Cl = null,
    ur = null,
    Ui = null;

  function Wo() {
    if (Ui) return Ui;
    var e, t = ur,
      l = t.length,
      a, i = "value" in Cl ? Cl.value : Cl.textContent,
      s = i.length;
    for (e = 0; e < l && t[e] === i[e]; e++);
    var r = l - e;
    for (a = 1; a <= r && t[l - a] === i[s - a]; a++);
    return Ui = i.slice(e, 1 < a ? 1 - a : void 0)
  }

  function Bi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
  }

  function Oi() {
    return !0
  }

  function Zo() {
    return !1
  }

  function pt(e) {
    function t(l, a, i, s, r) {
      this._reactName = l, this._targetInst = i, this.type = a, this.nativeEvent = s, this.target = r, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (l = e[u], this[u] = l ? l(s) : s[u]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Oi : Zo, this.isPropagationStopped = Zo, this
    }
    return E(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Oi)
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Oi)
      },
      persist: function() {},
      isPersistent: Oi
    }), t
  }
  var sa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    _i = pt(sa),
    wn = E({}, sa, {
      view: 0,
      detail: 0
    }),
    g0 = pt(wn),
    dr, fr, Tn, Li = E({}, wn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: hr,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Tn && (Tn && e.type === "mousemove" ? (dr = e.screenX - Tn.screenX, fr = e.screenY - Tn.screenY) : fr = dr = 0, Tn = e), dr)
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : fr
      }
    }),
    Fo = pt(Li),
    p0 = E({}, Li, {
      dataTransfer: 0
    }),
    y0 = pt(p0),
    b0 = E({}, wn, {
      relatedTarget: 0
    }),
    mr = pt(b0),
    x0 = E({}, sa, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    v0 = pt(x0),
    j0 = E({}, sa, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
      }
    }),
    S0 = pt(j0),
    z0 = E({}, sa, {
      data: 0
    }),
    Ko = pt(z0),
    D0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    },
    N0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    },
    A0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

  function C0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = A0[e]) ? !!t[e] : !1
  }

  function hr() {
    return C0
  }
  var w0 = E({}, wn, {
      key: function(e) {
        if (e.key) {
          var t = D0[e.key] || e.key;
          if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = Bi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? N0[e.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: hr,
      charCode: function(e) {
        return e.type === "keypress" ? Bi(e) : 0
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      },
      which: function(e) {
        return e.type === "keypress" ? Bi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
      }
    }),
    T0 = pt(w0),
    E0 = E({}, Li, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    Jo = pt(E0),
    R0 = E({}, wn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: hr
    }),
    M0 = pt(R0),
    U0 = E({}, sa, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    B0 = pt(U0),
    O0 = E({}, Li, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    _0 = pt(O0),
    L0 = E({}, sa, {
      newState: 0,
      oldState: 0
    }),
    H0 = pt(L0),
    k0 = [9, 13, 27, 32],
    gr = rl && "CompositionEvent" in window,
    En = null;
  rl && "documentMode" in document && (En = document.documentMode);
  var q0 = rl && "TextEvent" in window && !En,
    $o = rl && (!gr || En && 8 < En && 11 >= En),
    Io = " ",
    Po = !1;

  function eu(e, t) {
    switch (e) {
      case "keyup":
        return k0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1
    }
  }

  function tu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
  }
  var ka = !1;

  function G0(e, t) {
    switch (e) {
      case "compositionend":
        return tu(t);
      case "keypress":
        return t.which !== 32 ? null : (Po = !0, Io);
      case "textInput":
        return e = t.data, e === Io && Po ? null : e;
      default:
        return null
    }
  }

  function Y0(e, t) {
    if (ka) return e === "compositionend" || !gr && eu(e, t) ? (e = Wo(), Ui = ur = Cl = null, ka = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which)
        }
        return null;
      case "compositionend":
        return $o && t.locale !== "ko" ? null : t.data;
      default:
        return null
    }
  }
  var Q0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };

  function lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Q0[e.type] : t === "textarea"
  }

  function au(e, t, l, a) {
    La ? Ha ? Ha.push(a) : Ha = [a] : La = a, t = As(t, "onChange"), 0 < t.length && (l = new _i("onChange", "change", null, l, a), e.push({
      event: l,
      listeners: t
    }))
  }
  var Rn = null,
    Mn = null;

  function X0(e) {
    qf(e, 0)
  }

  function Hi(e) {
    var t = Nn(e);
    if (Ho(t)) return e
  }

  function nu(e, t) {
    if (e === "change") return t
  }
  var iu = !1;
  if (rl) {
    var pr;
    if (rl) {
      var yr = "oninput" in document;
      if (!yr) {
        var su = document.createElement("div");
        su.setAttribute("oninput", "return;"), yr = typeof su.oninput == "function"
      }
      pr = yr
    } else pr = !1;
    iu = pr && (!document.documentMode || 9 < document.documentMode)
  }

  function ru() {
    Rn && (Rn.detachEvent("onpropertychange", cu), Mn = Rn = null)
  }

  function cu(e) {
    if (e.propertyName === "value" && Hi(Mn)) {
      var t = [];
      au(t, Mn, e, rr(e)), Vo(X0, t)
    }
  }

  function V0(e, t, l) {
    e === "focusin" ? (ru(), Rn = t, Mn = l, Rn.attachEvent("onpropertychange", cu)) : e === "focusout" && ru()
  }

  function W0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Hi(Mn)
  }

  function Z0(e, t) {
    if (e === "click") return Hi(t)
  }

  function F0(e, t) {
    if (e === "input" || e === "change") return Hi(t)
  }

  function K0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
  }
  var zt = typeof Object.is == "function" ? Object.is : K0;

  function Un(e, t) {
    if (zt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var i = l[a];
      if (!Sn.call(t, i) || !zt(e[i], t[i])) return !1
    }
    return !0
  }

  function ou(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
  }

  function uu(e, t) {
    var l = ou(e);
    e = 0;
    for (var a; l;) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t) return {
          node: l,
          offset: t - e
        };
        e = a
      }
      e: {
        for (; l;) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = ou(l)
    }
  }

  function du(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? du(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
  }

  function fu(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ri(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var l = typeof t.contentWindow.location.href == "string"
      } catch {
        l = !1
      }
      if (l) e = t.contentWindow;
      else break;
      t = Ri(e.document)
    }
    return t
  }

  function br(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
  }
  var J0 = rl && "documentMode" in document && 11 >= document.documentMode,
    qa = null,
    xr = null,
    Bn = null,
    vr = !1;

  function mu(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    vr || qa == null || qa !== Ri(a) || (a = qa, "selectionStart" in a && br(a) ? a = {
      start: a.selectionStart,
      end: a.selectionEnd
    } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Bn && Un(Bn, a) || (Bn = a, a = As(xr, "onSelect"), 0 < a.length && (t = new _i("onSelect", "select", null, t, l), e.push({
      event: t,
      listeners: a
    }), t.target = qa)))
  }

  function ra(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l
  }
  var Ga = {
      animationend: ra("Animation", "AnimationEnd"),
      animationiteration: ra("Animation", "AnimationIteration"),
      animationstart: ra("Animation", "AnimationStart"),
      transitionrun: ra("Transition", "TransitionRun"),
      transitionstart: ra("Transition", "TransitionStart"),
      transitioncancel: ra("Transition", "TransitionCancel"),
      transitionend: ra("Transition", "TransitionEnd")
    },
    jr = {},
    hu = {};
  rl && (hu = document.createElement("div").style, "AnimationEvent" in window || (delete Ga.animationend.animation, delete Ga.animationiteration.animation, delete Ga.animationstart.animation), "TransitionEvent" in window || delete Ga.transitionend.transition);

  function ca(e) {
    if (jr[e]) return jr[e];
    if (!Ga[e]) return e;
    var t = Ga[e],
      l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in hu) return jr[e] = t[l];
    return e
  }
  var gu = ca("animationend"),
    pu = ca("animationiteration"),
    yu = ca("animationstart"),
    $0 = ca("transitionrun"),
    I0 = ca("transitionstart"),
    P0 = ca("transitioncancel"),
    bu = ca("transitionend"),
    xu = new Map,
    Sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Sr.push("scrollEnd");

  function Yt(e, t) {
    xu.set(e, t), ia(t, [e])
  }
  var ki = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return
      }
      console.error(e)
    },
    Mt = [],
    Ya = 0,
    zr = 0;

  function qi() {
    for (var e = Ya, t = zr = Ya = 0; t < e;) {
      var l = Mt[t];
      Mt[t++] = null;
      var a = Mt[t];
      Mt[t++] = null;
      var i = Mt[t];
      Mt[t++] = null;
      var s = Mt[t];
      if (Mt[t++] = null, a !== null && i !== null) {
        var r = a.pending;
        r === null ? i.next = i : (i.next = r.next, r.next = i), a.pending = i
      }
      s !== 0 && vu(l, i, s)
    }
  }

  function Gi(e, t, l, a) {
    Mt[Ya++] = e, Mt[Ya++] = t, Mt[Ya++] = l, Mt[Ya++] = a, zr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a)
  }

  function Dr(e, t, l, a) {
    return Gi(e, t, l, a), Yi(e)
  }

  function oa(e, t) {
    return Gi(e, null, null, t), Yi(e)
  }

  function vu(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var i = !1, s = e.return; s !== null;) s.childLanes |= l, a = s.alternate, a !== null && (a.childLanes |= l), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (i = !0)), e = s, s = s.return;
    return e.tag === 3 ? (s = e.stateNode, i && t !== null && (i = 31 - nt(l), e = s.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = l | 536870912), s) : null
  }

  function Yi(e) {
    if (50 < li) throw li = 0, Uc = null, Error(o(185));
    for (var t = e.return; t !== null;) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null
  }
  var Qa = {};

  function eh(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function Dt(e, t, l, a) {
    return new eh(e, t, l, a)
  }

  function Nr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
  }

  function cl(e, t) {
    var l = e.alternate;
    return l === null ? (l = Dt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l
  }

  function ju(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e
  }

  function Qi(e, t, l, a, i, s) {
    var r = 0;
    if (a = e, typeof e == "function") Nr(e) && (r = 1);
    else if (typeof e == "string") r = ig(e, l, ve.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case ae:
        return e = Dt(31, l, t, i), e.elementType = ae, e.lanes = s, e;
      case L:
        return ua(l.children, i, s, t);
      case W:
        r = 8, i |= 24;
        break;
      case q:
        return e = Dt(12, l, t, i | 2), e.elementType = q, e.lanes = s, e;
      case Qe:
        return e = Dt(13, l, t, i), e.elementType = Qe, e.lanes = s, e;
      case _e:
        return e = Dt(19, l, t, i), e.elementType = _e, e.lanes = s, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ne:
            r = 10;
            break e;
          case V:
            r = 9;
            break e;
          case se:
            r = 11;
            break e;
          case xe:
            r = 14;
            break e;
          case _:
            r = 16, a = null;
            break e
        }
        r = 29, l = Error(o(130, e === null ? "null" : typeof e, "")), a = null
    }
    return t = Dt(r, l, t, i), t.elementType = e, t.type = a, t.lanes = s, t
  }

  function ua(e, t, l, a) {
    return e = Dt(7, e, a, t), e.lanes = l, e
  }

  function Ar(e, t, l) {
    return e = Dt(6, e, null, t), e.lanes = l, e
  }

  function Su(e) {
    var t = Dt(18, null, null, 0);
    return t.stateNode = e, t
  }

  function Cr(e, t, l) {
    return t = Dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t
  }
  var zu = new WeakMap;

  function Ut(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = zu.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Jt(t)
      }, zu.set(e, t), t)
    }
    return {
      value: e,
      source: t,
      stack: Jt(t)
    }
  }
  var Xa = [],
    Va = 0,
    Xi = null,
    On = 0,
    Bt = [],
    Ot = 0,
    wl = null,
    Pt = 1,
    el = "";

  function ol(e, t) {
    Xa[Va++] = On, Xa[Va++] = Xi, Xi = e, On = t
  }

  function Du(e, t, l) {
    Bt[Ot++] = Pt, Bt[Ot++] = el, Bt[Ot++] = wl, wl = e;
    var a = Pt;
    e = el;
    var i = 32 - nt(a) - 1;
    a &= ~(1 << i), l += 1;
    var s = 32 - nt(t) + i;
    if (30 < s) {
      var r = i - i % 5;
      s = (a & (1 << r) - 1).toString(32), a >>= r, i -= r, Pt = 1 << 32 - nt(t) + i | l << i | a, el = s + e
    } else Pt = 1 << s | l << i | a, el = e
  }

  function wr(e) {
    e.return !== null && (ol(e, 1), Du(e, 1, 0))
  }

  function Tr(e) {
    for (; e === Xi;) Xi = Xa[--Va], Xa[Va] = null, On = Xa[--Va], Xa[Va] = null;
    for (; e === wl;) wl = Bt[--Ot], Bt[Ot] = null, el = Bt[--Ot], Bt[Ot] = null, Pt = Bt[--Ot], Bt[Ot] = null
  }

  function Nu(e, t) {
    Bt[Ot++] = Pt, Bt[Ot++] = el, Bt[Ot++] = wl, Pt = t.id, el = t.overflow, wl = e
  }
  var st = null,
    He = null,
    be = !1,
    Tl = null,
    _t = !1,
    Er = Error(o(519));

  function El(e) {
    var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw _n(Ut(t, e)), Er
  }

  function Au(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (t[it] = e, t[gt] = a, l) {
      case "dialog":
        fe("cancel", t), fe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        fe("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < ni.length; l++) fe(ni[l], t);
        break;
      case "source":
        fe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        fe("error", t), fe("load", t);
        break;
      case "details":
        fe("toggle", t);
        break;
      case "input":
        fe("invalid", t), ko(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
        break;
      case "select":
        fe("invalid", t);
        break;
      case "textarea":
        fe("invalid", t), Go(t, a.value, a.defaultValue, a.children)
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Xf(t.textContent, l) ? (a.popover != null && (fe("beforetoggle", t), fe("toggle", t)), a.onScroll != null && fe("scroll", t), a.onScrollEnd != null && fe("scrollend", t), a.onClick != null && (t.onclick = sl), t = !0) : t = !1, t || El(e, !0)
  }

  function Cu(e) {
    for (st = e.return; st;) switch (st.tag) {
      case 5:
      case 31:
      case 13:
        _t = !1;
        return;
      case 27:
      case 3:
        _t = !0;
        return;
      default:
        st = st.return
    }
  }

  function Wa(e) {
    if (e !== st) return !1;
    if (!be) return Cu(e), be = !0, !1;
    var t = e.tag,
      l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Fc(e.type, e.memoizedProps)), l = !l), l && He && El(e), Cu(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      He = Pf(e)
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      He = Pf(e)
    } else t === 27 ? (t = He, Xl(e.type) ? (e = Pc, Pc = null, He = e) : He = t) : He = st ? Ht(e.stateNode.nextSibling) : null;
    return !0
  }

  function da() {
    He = st = null, be = !1
  }

  function Rr() {
    var e = Tl;
    return e !== null && (vt === null ? vt = e : vt.push.apply(vt, e), Tl = null), e
  }

  function _n(e) {
    Tl === null ? Tl = [e] : Tl.push(e)
  }
  var Mr = ie(null),
    fa = null,
    ul = null;

  function Rl(e, t, l) {
    $(Mr, t._currentValue), t._currentValue = l
  }

  function dl(e) {
    e._currentValue = Mr.current, le(Mr)
  }

  function Ur(e, t, l) {
    for (; e !== null;) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return
    }
  }

  function Br(e, t, l, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null;) {
      var s = i.dependencies;
      if (s !== null) {
        var r = i.child;
        s = s.firstContext;
        e: for (; s !== null;) {
          var u = s;
          s = i;
          for (var m = 0; m < t.length; m++)
            if (u.context === t[m]) {
              s.lanes |= l, u = s.alternate, u !== null && (u.lanes |= l), Ur(s.return, l, e), a || (r = null);
              break e
            } s = u.next
        }
      } else if (i.tag === 18) {
        if (r = i.return, r === null) throw Error(o(341));
        r.lanes |= l, s = r.alternate, s !== null && (s.lanes |= l), Ur(r, l, e), r = null
      } else r = i.child;
      if (r !== null) r.return = i;
      else
        for (r = i; r !== null;) {
          if (r === e) {
            r = null;
            break
          }
          if (i = r.sibling, i !== null) {
            i.return = r.return, r = i;
            break
          }
          r = r.return
        }
      i = r
    }
  }

  function Za(e, t, l, a) {
    e = null;
    for (var i = t, s = !1; i !== null;) {
      if (!s) {
        if ((i.flags & 524288) !== 0) s = !0;
        else if ((i.flags & 262144) !== 0) break
      }
      if (i.tag === 10) {
        var r = i.alternate;
        if (r === null) throw Error(o(387));
        if (r = r.memoizedProps, r !== null) {
          var u = i.type;
          zt(i.pendingProps.value, r.value) || (e !== null ? e.push(u) : e = [u])
        }
      } else if (i === Kt.current) {
        if (r = i.alternate, r === null) throw Error(o(387));
        r.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(oi) : e = [oi])
      }
      i = i.return
    }
    e !== null && Br(t, e, l, a), t.flags |= 262144
  }

  function Vi(e) {
    for (e = e.firstContext; e !== null;) {
      if (!zt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next
    }
    return !1
  }

  function ma(e) {
    fa = e, ul = null, e = e.dependencies, e !== null && (e.firstContext = null)
  }

  function rt(e) {
    return wu(fa, e)
  }

  function Wi(e, t) {
    return fa === null && ma(e), wu(e, t)
  }

  function wu(e, t) {
    var l = t._currentValue;
    if (t = {
        context: t,
        memoizedValue: l,
        next: null
      }, ul === null) {
      if (e === null) throw Error(o(308));
      ul = t, e.dependencies = {
        lanes: 0,
        firstContext: t
      }, e.flags |= 524288
    } else ul = ul.next = t;
    return l
  }
  var th = typeof AbortController < "u" ? AbortController : function() {
      var e = [],
        t = this.signal = {
          aborted: !1,
          addEventListener: function(l, a) {
            e.push(a)
          }
        };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(l) {
          return l()
        })
      }
    },
    lh = c.unstable_scheduleCallback,
    ah = c.unstable_NormalPriority,
    Ke = {
      $$typeof: ne,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };

  function Or() {
    return {
      controller: new th,
      data: new Map,
      refCount: 0
    }
  }

  function Ln(e) {
    e.refCount--, e.refCount === 0 && lh(ah, function() {
      e.controller.abort()
    })
  }
  var Hn = null,
    _r = 0,
    Fa = 0,
    Ka = null;

  function nh(e, t) {
    if (Hn === null) {
      var l = Hn = [];
      _r = 0, Fa = kc(), Ka = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a)
        }
      }
    }
    return _r++, t.then(Tu, Tu), t
  }

  function Tu() {
    if (--_r === 0 && Hn !== null) {
      Ka !== null && (Ka.status = "fulfilled");
      var e = Hn;
      Hn = null, Fa = 0, Ka = null;
      for (var t = 0; t < e.length; t++)(0, e[t])()
    }
  }

  function ih(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(i) {
          l.push(i)
        }
      };
    return e.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var i = 0; i < l.length; i++)(0, l[i])(t)
    }, function(i) {
      for (a.status = "rejected", a.reason = i, i = 0; i < l.length; i++)(0, l[i])(void 0)
    }), a
  }
  var Eu = v.S;
  v.S = function(e, t) {
    hf = ft(), typeof t == "object" && t !== null && typeof t.then == "function" && nh(e, t), Eu !== null && Eu(e, t)
  };
  var ha = ie(null);

  function Lr() {
    var e = ha.current;
    return e !== null ? e : Oe.pooledCache
  }

  function Zi(e, t) {
    t === null ? $(ha, ha.current) : $(ha, t.pool)
  }

  function Ru() {
    var e = Lr();
    return e === null ? null : {
      parent: Ke._currentValue,
      pool: e
    }
  }
  var Ja = Error(o(460)),
    Hr = Error(o(474)),
    Fi = Error(o(542)),
    Ki = {
      then: function() {}
    };

  function Mu(e) {
    return e = e.status, e === "fulfilled" || e === "rejected"
  }

  function Uu(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(sl, sl), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Ou(e), e;
      default:
        if (typeof t.status == "string") t.then(sl, sl);
        else {
          if (e = Oe, e !== null && 100 < e.shellSuspendCounter) throw Error(o(482));
          e = t, e.status = "pending", e.then(function(a) {
            if (t.status === "pending") {
              var i = t;
              i.status = "fulfilled", i.value = a
            }
          }, function(a) {
            if (t.status === "pending") {
              var i = t;
              i.status = "rejected", i.reason = a
            }
          })
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Ou(e), e
        }
        throw pa = t, Ja
    }
  }

  function ga(e) {
    try {
      var t = e._init;
      return t(e._payload)
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (pa = l, Ja) : l
    }
  }
  var pa = null;

  function Bu() {
    if (pa === null) throw Error(o(459));
    var e = pa;
    return pa = null, e
  }

  function Ou(e) {
    if (e === Ja || e === Fi) throw Error(o(483))
  }
  var $a = null,
    kn = 0;

  function Ji(e) {
    var t = kn;
    return kn += 1, $a === null && ($a = []), Uu($a, e, t)
  }

  function qn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null
  }

  function $i(e, t) {
    throw t.$$typeof === B ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  }

  function _u(e) {
    function t(y, g) {
      if (e) {
        var j = y.deletions;
        j === null ? (y.deletions = [g], y.flags |= 16) : j.push(g)
      }
    }

    function l(y, g) {
      if (!e) return null;
      for (; g !== null;) t(y, g), g = g.sibling;
      return null
    }

    function a(y) {
      for (var g = new Map; y !== null;) y.key !== null ? g.set(y.key, y) : g.set(y.index, y), y = y.sibling;
      return g
    }

    function i(y, g) {
      return y = cl(y, g), y.index = 0, y.sibling = null, y
    }

    function s(y, g, j) {
      return y.index = j, e ? (j = y.alternate, j !== null ? (j = j.index, j < g ? (y.flags |= 67108866, g) : j) : (y.flags |= 67108866, g)) : (y.flags |= 1048576, g)
    }

    function r(y) {
      return e && y.alternate === null && (y.flags |= 67108866), y
    }

    function u(y, g, j, R) {
      return g === null || g.tag !== 6 ? (g = Ar(j, y.mode, R), g.return = y, g) : (g = i(g, j), g.return = y, g)
    }

    function m(y, g, j, R) {
      var P = j.type;
      return P === L ? T(y, g, j.props.children, R, j.key) : g !== null && (g.elementType === P || typeof P == "object" && P !== null && P.$$typeof === _ && ga(P) === g.type) ? (g = i(g, j.props), qn(g, j), g.return = y, g) : (g = Qi(j.type, j.key, j.props, null, y.mode, R), qn(g, j), g.return = y, g)
    }

    function S(y, g, j, R) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== j.containerInfo || g.stateNode.implementation !== j.implementation ? (g = Cr(j, y.mode, R), g.return = y, g) : (g = i(g, j.children || []), g.return = y, g)
    }

    function T(y, g, j, R, P) {
      return g === null || g.tag !== 7 ? (g = ua(j, y.mode, R, P), g.return = y, g) : (g = i(g, j), g.return = y, g)
    }

    function M(y, g, j) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return g = Ar("" + g, y.mode, j), g.return = y, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case I:
            return j = Qi(g.type, g.key, g.props, null, y.mode, j), qn(j, g), j.return = y, j;
          case G:
            return g = Cr(g, y.mode, j), g.return = y, g;
          case _:
            return g = ga(g), M(y, g, j)
        }
        if (Ye(g) || J(g)) return g = ua(g, y.mode, j, null), g.return = y, g;
        if (typeof g.then == "function") return M(y, Ji(g), j);
        if (g.$$typeof === ne) return M(y, Wi(y, g), j);
        $i(y, g)
      }
      return null
    }

    function z(y, g, j, R) {
      var P = g !== null ? g.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return P !== null ? null : u(y, g, "" + j, R);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case I:
            return j.key === P ? m(y, g, j, R) : null;
          case G:
            return j.key === P ? S(y, g, j, R) : null;
          case _:
            return j = ga(j), z(y, g, j, R)
        }
        if (Ye(j) || J(j)) return P !== null ? null : T(y, g, j, R, null);
        if (typeof j.then == "function") return z(y, g, Ji(j), R);
        if (j.$$typeof === ne) return z(y, g, Wi(y, j), R);
        $i(y, j)
      }
      return null
    }

    function D(y, g, j, R, P) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint") return y = y.get(j) || null, u(g, y, "" + R, P);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case I:
            return y = y.get(R.key === null ? j : R.key) || null, m(g, y, R, P);
          case G:
            return y = y.get(R.key === null ? j : R.key) || null, S(g, y, R, P);
          case _:
            return R = ga(R), D(y, g, j, R, P)
        }
        if (Ye(R) || J(R)) return y = y.get(j) || null, T(g, y, R, P, null);
        if (typeof R.then == "function") return D(y, g, j, Ji(R), P);
        if (R.$$typeof === ne) return D(y, g, j, Wi(g, R), P);
        $i(g, R)
      }
      return null
    }

    function F(y, g, j, R) {
      for (var P = null, Se = null, K = g, ue = g = 0, pe = null; K !== null && ue < j.length; ue++) {
        K.index > ue ? (pe = K, K = null) : pe = K.sibling;
        var ze = z(y, K, j[ue], R);
        if (ze === null) {
          K === null && (K = pe);
          break
        }
        e && K && ze.alternate === null && t(y, K), g = s(ze, g, ue), Se === null ? P = ze : Se.sibling = ze, Se = ze, K = pe
      }
      if (ue === j.length) return l(y, K), be && ol(y, ue), P;
      if (K === null) {
        for (; ue < j.length; ue++) K = M(y, j[ue], R), K !== null && (g = s(K, g, ue), Se === null ? P = K : Se.sibling = K, Se = K);
        return be && ol(y, ue), P
      }
      for (K = a(K); ue < j.length; ue++) pe = D(K, y, ue, j[ue], R), pe !== null && (e && pe.alternate !== null && K.delete(pe.key === null ? ue : pe.key), g = s(pe, g, ue), Se === null ? P = pe : Se.sibling = pe, Se = pe);
      return e && K.forEach(function(Kl) {
        return t(y, Kl)
      }), be && ol(y, ue), P
    }

    function ee(y, g, j, R) {
      if (j == null) throw Error(o(151));
      for (var P = null, Se = null, K = g, ue = g = 0, pe = null, ze = j.next(); K !== null && !ze.done; ue++, ze = j.next()) {
        K.index > ue ? (pe = K, K = null) : pe = K.sibling;
        var Kl = z(y, K, ze.value, R);
        if (Kl === null) {
          K === null && (K = pe);
          break
        }
        e && K && Kl.alternate === null && t(y, K), g = s(Kl, g, ue), Se === null ? P = Kl : Se.sibling = Kl, Se = Kl, K = pe
      }
      if (ze.done) return l(y, K), be && ol(y, ue), P;
      if (K === null) {
        for (; !ze.done; ue++, ze = j.next()) ze = M(y, ze.value, R), ze !== null && (g = s(ze, g, ue), Se === null ? P = ze : Se.sibling = ze, Se = ze);
        return be && ol(y, ue), P
      }
      for (K = a(K); !ze.done; ue++, ze = j.next()) ze = D(K, y, ue, ze.value, R), ze !== null && (e && ze.alternate !== null && K.delete(ze.key === null ? ue : ze.key), g = s(ze, g, ue), Se === null ? P = ze : Se.sibling = ze, Se = ze);
      return e && K.forEach(function(pg) {
        return t(y, pg)
      }), be && ol(y, ue), P
    }

    function Re(y, g, j, R) {
      if (typeof j == "object" && j !== null && j.type === L && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case I:
            e: {
              for (var P = j.key; g !== null;) {
                if (g.key === P) {
                  if (P = j.type, P === L) {
                    if (g.tag === 7) {
                      l(y, g.sibling), R = i(g, j.props.children), R.return = y, y = R;
                      break e
                    }
                  } else if (g.elementType === P || typeof P == "object" && P !== null && P.$$typeof === _ && ga(P) === g.type) {
                    l(y, g.sibling), R = i(g, j.props), qn(R, j), R.return = y, y = R;
                    break e
                  }
                  l(y, g);
                  break
                } else t(y, g);
                g = g.sibling
              }
              j.type === L ? (R = ua(j.props.children, y.mode, R, j.key), R.return = y, y = R) : (R = Qi(j.type, j.key, j.props, null, y.mode, R), qn(R, j), R.return = y, y = R)
            }
            return r(y);
          case G:
            e: {
              for (P = j.key; g !== null;) {
                if (g.key === P)
                  if (g.tag === 4 && g.stateNode.containerInfo === j.containerInfo && g.stateNode.implementation === j.implementation) {
                    l(y, g.sibling), R = i(g, j.children || []), R.return = y, y = R;
                    break e
                  } else {
                    l(y, g);
                    break
                  }
                else t(y, g);
                g = g.sibling
              }
              R = Cr(j, y.mode, R),
              R.return = y,
              y = R
            }
            return r(y);
          case _:
            return j = ga(j), Re(y, g, j, R)
        }
        if (Ye(j)) return F(y, g, j, R);
        if (J(j)) {
          if (P = J(j), typeof P != "function") throw Error(o(150));
          return j = P.call(j), ee(y, g, j, R)
        }
        if (typeof j.then == "function") return Re(y, g, Ji(j), R);
        if (j.$$typeof === ne) return Re(y, g, Wi(y, j), R);
        $i(y, j)
      }
      return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, g !== null && g.tag === 6 ? (l(y, g.sibling), R = i(g, j), R.return = y, y = R) : (l(y, g), R = Ar(j, y.mode, R), R.return = y, y = R), r(y)) : l(y, g)
    }
    return function(y, g, j, R) {
      try {
        kn = 0;
        var P = Re(y, g, j, R);
        return $a = null, P
      } catch (K) {
        if (K === Ja || K === Fi) throw K;
        var Se = Dt(29, K, null, y.mode);
        return Se.lanes = R, Se.return = y, Se
      } finally {}
    }
  }
  var ya = _u(!0),
    Lu = _u(!1),
    Ml = !1;

  function kr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    }
  }

  function qr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    })
  }

  function Ul(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }

  function Bl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (De & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = Yi(e), vu(e, null, l), t
    }
    return Gi(e, a, t, l), Yi(e)
  }

  function Gn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, wo(e, l)
    }
  }

  function Gr(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var i = null,
        s = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var r = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          s === null ? i = s = r : s = s.next = r, l = l.next
        } while (l !== null);
        s === null ? i = s = t : s = s.next = t
      } else i = s = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t
  }
  var Yr = !1;

  function Yn() {
    if (Yr) {
      var e = Ka;
      if (e !== null) throw e
    }
  }

  function Qn(e, t, l, a) {
    Yr = !1;
    var i = e.updateQueue;
    Ml = !1;
    var s = i.firstBaseUpdate,
      r = i.lastBaseUpdate,
      u = i.shared.pending;
    if (u !== null) {
      i.shared.pending = null;
      var m = u,
        S = m.next;
      m.next = null, r === null ? s = S : r.next = S, r = m;
      var T = e.alternate;
      T !== null && (T = T.updateQueue, u = T.lastBaseUpdate, u !== r && (u === null ? T.firstBaseUpdate = S : u.next = S, T.lastBaseUpdate = m))
    }
    if (s !== null) {
      var M = i.baseState;
      r = 0, T = S = m = null, u = s;
      do {
        var z = u.lane & -536870913,
          D = z !== u.lane;
        if (D ? (ge & z) === z : (a & z) === z) {
          z !== 0 && z === Fa && (Yr = !0), T !== null && (T = T.next = {
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          });
          e: {
            var F = e,
              ee = u;z = t;
            var Re = l;
            switch (ee.tag) {
              case 1:
                if (F = ee.payload, typeof F == "function") {
                  M = F.call(Re, M, z);
                  break e
                }
                M = F;
                break e;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = ee.payload, z = typeof F == "function" ? F.call(Re, M, z) : F, z == null) break e;
                M = E({}, M, z);
                break e;
              case 2:
                Ml = !0
            }
          }
          z = u.callback, z !== null && (e.flags |= 64, D && (e.flags |= 8192), D = i.callbacks, D === null ? i.callbacks = [z] : D.push(z))
        } else D = {
          lane: z,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        }, T === null ? (S = T = D, m = M) : T = T.next = D, r |= z;
        if (u = u.next, u === null) {
          if (u = i.shared.pending, u === null) break;
          D = u, u = D.next, D.next = null, i.lastBaseUpdate = D, i.shared.pending = null
        }
      } while (!0);
      T === null && (m = M), i.baseState = m, i.firstBaseUpdate = S, i.lastBaseUpdate = T, s === null && (i.shared.lanes = 0), kl |= r, e.lanes = r, e.memoizedState = M
    }
  }

  function Hu(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t)
  }

  function ku(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Hu(l[e], t)
  }
  var Ia = ie(null),
    Ii = ie(0);

  function qu(e, t) {
    e = vl, $(Ii, e), $(Ia, t), vl = e | t.baseLanes
  }

  function Qr() {
    $(Ii, vl), $(Ia, Ia.current)
  }

  function Xr() {
    vl = Ii.current, le(Ia), le(Ii)
  }
  var Nt = ie(null),
    Lt = null;

  function Ol(e) {
    var t = e.alternate;
    $(Ze, Ze.current & 1), $(Nt, e), Lt === null && (t === null || Ia.current !== null || t.memoizedState !== null) && (Lt = e)
  }

  function Vr(e) {
    $(Ze, Ze.current), $(Nt, e), Lt === null && (Lt = e)
  }

  function Gu(e) {
    e.tag === 22 ? ($(Ze, Ze.current), $(Nt, e), Lt === null && (Lt = e)) : _l()
  }

  function _l() {
    $(Ze, Ze.current), $(Nt, Nt.current)
  }

  function At(e) {
    le(Nt), Lt === e && (Lt = null), le(Ze)
  }
  var Ze = ie(0);

  function Pi(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || $c(l) || Ic(l))) return t
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
    return null
  }
  var fl = 0,
    ce = null,
    Te = null,
    Je = null,
    es = !1,
    Pa = !1,
    ba = !1,
    ts = 0,
    Xn = 0,
    en = null,
    sh = 0;

  function Xe() {
    throw Error(o(321))
  }

  function Wr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!zt(e[l], t[l])) return !1;
    return !0
  }

  function Zr(e, t, l, a, i, s) {
    return fl = s, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, v.H = e === null || e.memoizedState === null ? Dd : cc, ba = !1, s = l(a, i), ba = !1, Pa && (s = Qu(t, l, a, i)), Yu(e), s
  }

  function Yu(e) {
    v.H = Zn;
    var t = Te !== null && Te.next !== null;
    if (fl = 0, Je = Te = ce = null, es = !1, Xn = 0, en = null, t) throw Error(o(300));
    e === null || $e || (e = e.dependencies, e !== null && Vi(e) && ($e = !0))
  }

  function Qu(e, t, l, a) {
    ce = e;
    var i = 0;
    do {
      if (Pa && (en = null), Xn = 0, Pa = !1, 25 <= i) throw Error(o(301));
      if (i += 1, Je = Te = null, e.updateQueue != null) {
        var s = e.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0)
      }
      v.H = Nd, s = t(l, a)
    } while (Pa);
    return s
  }

  function rh() {
    var e = v.H,
      t = e.useState()[0];
    return t = typeof t.then == "function" ? Vn(t) : t, e = e.useState()[0], (Te !== null ? Te.memoizedState : null) !== e && (ce.flags |= 1024), t
  }

  function Fr() {
    var e = ts !== 0;
    return ts = 0, e
  }

  function Kr(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l
  }

  function Jr(e) {
    if (es) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next
      }
      es = !1
    }
    fl = 0, Je = Te = ce = null, Pa = !1, Xn = ts = 0, en = null
  }

  function mt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Je === null ? ce.memoizedState = Je = e : Je = Je.next = e, Je
  }

  function Fe() {
    if (Te === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null
    } else e = Te.next;
    var t = Je === null ? ce.memoizedState : Je.next;
    if (t !== null) Je = t, Te = e;
    else {
      if (e === null) throw ce.alternate === null ? Error(o(467)) : Error(o(310));
      Te = e, e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null
      }, Je === null ? ce.memoizedState = Je = e : Je = Je.next = e
    }
    return Je
  }

  function ls() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }

  function Vn(e) {
    var t = Xn;
    return Xn += 1, en === null && (en = []), e = Uu(en, e, t), t = ce, (Je === null ? t.memoizedState : Je.next) === null && (t = t.alternate, v.H = t === null || t.memoizedState === null ? Dd : cc), e
  }

  function as(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Vn(e);
      if (e.$$typeof === ne) return rt(e)
    }
    throw Error(o(438, String(e)))
  }

  function $r(e) {
    var t = null,
      l = ce.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = ce.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(i) {
          return i.slice()
        }),
        index: 0
      })))
    }
    if (t == null && (t = {
        data: [],
        index: 0
      }), l === null && (l = ls(), ce.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = ye;
    return t.index++, l
  }

  function ml(e, t) {
    return typeof t == "function" ? t(e) : t
  }

  function ns(e) {
    var t = Fe();
    return Ir(t, Te, e)
  }

  function Ir(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var i = e.baseQueue,
      s = a.pending;
    if (s !== null) {
      if (i !== null) {
        var r = i.next;
        i.next = s.next, s.next = r
      }
      t.baseQueue = i = s, a.pending = null
    }
    if (s = e.baseState, i === null) e.memoizedState = s;
    else {
      t = i.next;
      var u = r = null,
        m = null,
        S = t,
        T = !1;
      do {
        var M = S.lane & -536870913;
        if (M !== S.lane ? (ge & M) === M : (fl & M) === M) {
          var z = S.revertLane;
          if (z === 0) m !== null && (m = m.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          }), M === Fa && (T = !0);
          else if ((fl & z) === z) {
            S = S.next, z === Fa && (T = !0);
            continue
          } else M = {
            lane: 0,
            revertLane: S.revertLane,
            gesture: null,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          }, m === null ? (u = m = M, r = s) : m = m.next = M, ce.lanes |= z, kl |= z;
          M = S.action, ba && l(s, M), s = S.hasEagerState ? S.eagerState : l(s, M)
        } else z = {
          lane: M,
          revertLane: S.revertLane,
          gesture: S.gesture,
          action: S.action,
          hasEagerState: S.hasEagerState,
          eagerState: S.eagerState,
          next: null
        }, m === null ? (u = m = z, r = s) : m = m.next = z, ce.lanes |= M, kl |= M;
        S = S.next
      } while (S !== null && S !== t);
      if (m === null ? r = s : m.next = u, !zt(s, e.memoizedState) && ($e = !0, T && (l = Ka, l !== null))) throw l;
      e.memoizedState = s, e.baseState = r, e.baseQueue = m, a.lastRenderedState = s
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch]
  }

  function Pr(e) {
    var t = Fe(),
      l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      i = l.pending,
      s = t.memoizedState;
    if (i !== null) {
      l.pending = null;
      var r = i = i.next;
      do s = e(s, r.action), r = r.next; while (r !== i);
      zt(s, t.memoizedState) || ($e = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), l.lastRenderedState = s
    }
    return [s, a]
  }

  function Xu(e, t, l) {
    var a = ce,
      i = Fe(),
      s = be;
    if (s) {
      if (l === void 0) throw Error(o(407));
      l = l()
    } else l = t();
    var r = !zt((Te || i).memoizedState, l);
    if (r && (i.memoizedState = l, $e = !0), i = i.queue, lc(Zu.bind(null, a, i, e), [e]), i.getSnapshot !== t || r || Je !== null && Je.memoizedState.tag & 1) {
      if (a.flags |= 2048, tn(9, {
          destroy: void 0
        }, Wu.bind(null, a, i, l, t), null), Oe === null) throw Error(o(349));
      s || (fl & 127) !== 0 || Vu(a, t, l)
    }
    return l
  }

  function Vu(e, t, l) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: l
    }, t = ce.updateQueue, t === null ? (t = ls(), ce.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e))
  }

  function Wu(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Fu(t) && Ku(e)
  }

  function Zu(e, t, l) {
    return l(function() {
      Fu(t) && Ku(e)
    })
  }

  function Fu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !zt(e, l)
    } catch {
      return !0
    }
  }

  function Ku(e) {
    var t = oa(e, 2);
    t !== null && jt(t, e, 2)
  }

  function ec(e) {
    var t = mt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), ba) {
        $t(!0);
        try {
          l()
        } finally {
          $t(!1)
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ml,
      lastRenderedState: e
    }, t
  }

  function Ju(e, t, l, a) {
    return e.baseState = l, Ir(e, Te, typeof a == "function" ? a : ml)
  }

  function ch(e, t, l, a, i) {
    if (rs(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var s = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(r) {
          s.listeners.push(r)
        }
      };
      v.T !== null ? l(!0) : s.isTransition = !1, a(s), l = t.pending, l === null ? (s.next = t.pending = s, $u(t, s)) : (s.next = l.next, t.pending = l.next = s)
    }
  }

  function $u(e, t) {
    var l = t.action,
      a = t.payload,
      i = e.state;
    if (t.isTransition) {
      var s = v.T,
        r = {};
      v.T = r;
      try {
        var u = l(i, a),
          m = v.S;
        m !== null && m(r, u), Iu(e, t, u)
      } catch (S) {
        tc(e, t, S)
      } finally {
        s !== null && r.types !== null && (s.types = r.types), v.T = s
      }
    } else try {
      s = l(i, a), Iu(e, t, s)
    } catch (S) {
      tc(e, t, S)
    }
  }

  function Iu(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
      Pu(e, t, a)
    }, function(a) {
      return tc(e, t, a)
    }) : Pu(e, t, l)
  }

  function Pu(e, t, l) {
    t.status = "fulfilled", t.value = l, ed(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, $u(e, l)))
  }

  function tc(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do t.status = "rejected", t.reason = l, ed(t), t = t.next; while (t !== a)
    }
    e.action = null
  }

  function ed(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++)(0, e[t])()
  }

  function td(e, t) {
    return t
  }

  function ld(e, t) {
    if (be) {
      var l = Oe.formState;
      if (l !== null) {
        e: {
          var a = ce;
          if (be) {
            if (He) {
              t: {
                for (var i = He, s = _t; i.nodeType !== 8;) {
                  if (!s) {
                    i = null;
                    break t
                  }
                  if (i = Ht(i.nextSibling), i === null) {
                    i = null;
                    break t
                  }
                }
                s = i.data,
                i = s === "F!" || s === "F" ? i : null
              }
              if (i) {
                He = Ht(i.nextSibling), a = i.data === "F!";
                break e
              }
            }
            El(a)
          }
          a = !1
        }
        a && (t = l[0])
      }
    }
    return l = mt(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: td,
      lastRenderedState: t
    }, l.queue = a, l = jd.bind(null, ce, a), a.dispatch = l, a = ec(!1), s = rc.bind(null, ce, !1, a.queue), a = mt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, l = ch.bind(null, ce, i, s, l), i.dispatch = l, a.memoizedState = e, [t, l, !1]
  }

  function ad(e) {
    var t = Fe();
    return nd(t, Te, e)
  }

  function nd(e, t, l) {
    if (t = Ir(e, t, td)[0], e = ns(ml)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = Vn(t)
    } catch (r) {
      throw r === Ja ? Fi : r
    } else a = t;
    t = Fe();
    var i = t.queue,
      s = i.dispatch;
    return l !== t.memoizedState && (ce.flags |= 2048, tn(9, {
      destroy: void 0
    }, oh.bind(null, i, l), null)), [a, s, e]
  }

  function oh(e, t) {
    e.action = t
  }

  function id(e) {
    var t = Fe(),
      l = Te;
    if (l !== null) return nd(t, l, e);
    Fe(), t = t.memoizedState, l = Fe();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1]
  }

  function tn(e, t, l, a) {
    return e = {
      tag: e,
      create: l,
      deps: a,
      inst: t,
      next: null
    }, t = ce.updateQueue, t === null && (t = ls(), ce.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e
  }

  function sd() {
    return Fe().memoizedState
  }

  function is(e, t, l, a) {
    var i = mt();
    ce.flags |= e, i.memoizedState = tn(1 | t, {
      destroy: void 0
    }, l, a === void 0 ? null : a)
  }

  function ss(e, t, l, a) {
    var i = Fe();
    a = a === void 0 ? null : a;
    var s = i.memoizedState.inst;
    Te !== null && a !== null && Wr(a, Te.memoizedState.deps) ? i.memoizedState = tn(t, s, l, a) : (ce.flags |= e, i.memoizedState = tn(1 | t, s, l, a))
  }

  function rd(e, t) {
    is(8390656, 8, e, t)
  }

  function lc(e, t) {
    ss(2048, 8, e, t)
  }

  function uh(e) {
    ce.flags |= 4;
    var t = ce.updateQueue;
    if (t === null) t = ls(), ce.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e)
    }
  }

  function cd(e) {
    var t = Fe().memoizedState;
    return uh({
        ref: t,
        nextImpl: e
      }),
      function() {
        if ((De & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments)
      }
  }

  function od(e, t) {
    return ss(4, 2, e, t)
  }

  function ud(e, t) {
    return ss(4, 4, e, t)
  }

  function dd(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null)
      }
    }
    if (t != null) return e = e(), t.current = e,
      function() {
        t.current = null
      }
  }

  function fd(e, t, l) {
    l = l != null ? l.concat([e]) : null, ss(4, 4, dd.bind(null, t, e), l)
  }

  function ac() {}

  function md(e, t) {
    var l = Fe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Wr(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e)
  }

  function hd(e, t) {
    var l = Fe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Wr(t, a[1])) return a[0];
    if (a = e(), ba) {
      $t(!0);
      try {
        e()
      } finally {
        $t(!1)
      }
    }
    return l.memoizedState = [a, t], a
  }

  function nc(e, t, l) {
    return l === void 0 || (fl & 1073741824) !== 0 && (ge & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = pf(), ce.lanes |= e, kl |= e, l)
  }

  function gd(e, t, l, a) {
    return zt(l, t) ? l : Ia.current !== null ? (e = nc(e, l, a), zt(e, t) || ($e = !0), e) : (fl & 42) === 0 || (fl & 1073741824) !== 0 && (ge & 261930) === 0 ? ($e = !0, e.memoizedState = l) : (e = pf(), ce.lanes |= e, kl |= e, t)
  }

  function pd(e, t, l, a, i) {
    var s = U.p;
    U.p = s !== 0 && 8 > s ? s : 8;
    var r = v.T,
      u = {};
    v.T = u, rc(e, !1, t, l);
    try {
      var m = i(),
        S = v.S;
      if (S !== null && S(u, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var T = ih(m, a);
        Wn(e, t, T, Tt(e))
      } else Wn(e, t, a, Tt(e))
    } catch (M) {
      Wn(e, t, {
        then: function() {},
        status: "rejected",
        reason: M
      }, Tt())
    } finally {
      U.p = s, r !== null && u.types !== null && (r.types = u.types), v.T = r
    }
  }

  function dh() {}

  function ic(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var i = yd(e).queue;
    pd(e, i, t, Z, l === null ? dh : function() {
      return bd(e), l(a)
    })
  }

  function yd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ml,
        lastRenderedState: Z
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ml,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
  }

  function bd(e) {
    var t = yd(e);
    t.next === null && (t = e.alternate.memoizedState), Wn(e, t.next.queue, {}, Tt())
  }

  function sc() {
    return rt(oi)
  }

  function xd() {
    return Fe().memoizedState
  }

  function vd() {
    return Fe().memoizedState
  }

  function fh(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Tt();
          e = Ul(l);
          var a = Bl(t, e, l);
          a !== null && (jt(a, t, l), Gn(a, t, l)), t = {
            cache: Or()
          }, e.payload = t;
          return
      }
      t = t.return
    }
  }

  function mh(e, t, l) {
    var a = Tt();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, rs(e) ? Sd(t, l) : (l = Dr(e, t, l, a), l !== null && (jt(l, e, a), zd(l, t, a)))
  }

  function jd(e, t, l) {
    var a = Tt();
    Wn(e, t, l, a)
  }

  function Wn(e, t, l, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (rs(e)) Sd(t, i);
    else {
      var s = e.alternate;
      if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
        var r = t.lastRenderedState,
          u = s(r, l);
        if (i.hasEagerState = !0, i.eagerState = u, zt(u, r)) return Gi(e, t, i, 0), Oe === null && qi(), !1
      } catch {} finally {}
      if (l = Dr(e, t, i, a), l !== null) return jt(l, e, a), zd(l, t, a), !0
    }
    return !1
  }

  function rc(e, t, l, a) {
    if (a = {
        lane: 2,
        revertLane: kc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, rs(e)) {
      if (t) throw Error(o(479))
    } else t = Dr(e, l, a, 2), t !== null && jt(t, e, 2)
  }

  function rs(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce
  }

  function Sd(e, t) {
    Pa = es = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t
  }

  function zd(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, wo(e, l)
    }
  }
  var Zn = {
    readContext: rt,
    use: as,
    useCallback: Xe,
    useContext: Xe,
    useEffect: Xe,
    useImperativeHandle: Xe,
    useLayoutEffect: Xe,
    useInsertionEffect: Xe,
    useMemo: Xe,
    useReducer: Xe,
    useRef: Xe,
    useState: Xe,
    useDebugValue: Xe,
    useDeferredValue: Xe,
    useTransition: Xe,
    useSyncExternalStore: Xe,
    useId: Xe,
    useHostTransitionStatus: Xe,
    useFormState: Xe,
    useActionState: Xe,
    useOptimistic: Xe,
    useMemoCache: Xe,
    useCacheRefresh: Xe
  };
  Zn.useEffectEvent = Xe;
  var Dd = {
      readContext: rt,
      use: as,
      useCallback: function(e, t) {
        return mt().memoizedState = [e, t === void 0 ? null : t], e
      },
      useContext: rt,
      useEffect: rd,
      useImperativeHandle: function(e, t, l) {
        l = l != null ? l.concat([e]) : null, is(4194308, 4, dd.bind(null, t, e), l)
      },
      useLayoutEffect: function(e, t) {
        return is(4194308, 4, e, t)
      },
      useInsertionEffect: function(e, t) {
        is(4, 2, e, t)
      },
      useMemo: function(e, t) {
        var l = mt();
        t = t === void 0 ? null : t;
        var a = e();
        if (ba) {
          $t(!0);
          try {
            e()
          } finally {
            $t(!1)
          }
        }
        return l.memoizedState = [a, t], a
      },
      useReducer: function(e, t, l) {
        var a = mt();
        if (l !== void 0) {
          var i = l(t);
          if (ba) {
            $t(!0);
            try {
              l(t)
            } finally {
              $t(!1)
            }
          }
        } else i = t;
        return a.memoizedState = a.baseState = i, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: i
        }, a.queue = e, e = e.dispatch = mh.bind(null, ce, e), [a.memoizedState, e]
      },
      useRef: function(e) {
        var t = mt();
        return e = {
          current: e
        }, t.memoizedState = e
      },
      useState: function(e) {
        e = ec(e);
        var t = e.queue,
          l = jd.bind(null, ce, t);
        return t.dispatch = l, [e.memoizedState, l]
      },
      useDebugValue: ac,
      useDeferredValue: function(e, t) {
        var l = mt();
        return nc(l, e, t)
      },
      useTransition: function() {
        var e = ec(!1);
        return e = pd.bind(null, ce, e.queue, !0, !1), mt().memoizedState = e, [!1, e]
      },
      useSyncExternalStore: function(e, t, l) {
        var a = ce,
          i = mt();
        if (be) {
          if (l === void 0) throw Error(o(407));
          l = l()
        } else {
          if (l = t(), Oe === null) throw Error(o(349));
          (ge & 127) !== 0 || Vu(a, t, l)
        }
        i.memoizedState = l;
        var s = {
          value: l,
          getSnapshot: t
        };
        return i.queue = s, rd(Zu.bind(null, a, s, e), [e]), a.flags |= 2048, tn(9, {
          destroy: void 0
        }, Wu.bind(null, a, s, l, t), null), l
      },
      useId: function() {
        var e = mt(),
          t = Oe.identifierPrefix;
        if (be) {
          var l = el,
            a = Pt;
          l = (a & ~(1 << 32 - nt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = ts++, 0 < l && (t += "H" + l.toString(32)), t += "_"
        } else l = sh++, t = "_" + t + "r_" + l.toString(32) + "_";
        return e.memoizedState = t
      },
      useHostTransitionStatus: sc,
      useFormState: ld,
      useActionState: ld,
      useOptimistic: function(e) {
        var t = mt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = l, t = rc.bind(null, ce, !0, l), l.dispatch = t, [e, t]
      },
      useMemoCache: $r,
      useCacheRefresh: function() {
        return mt().memoizedState = fh.bind(null, ce)
      },
      useEffectEvent: function(e) {
        var t = mt(),
          l = {
            impl: e
          };
        return t.memoizedState = l,
          function() {
            if ((De & 2) !== 0) throw Error(o(440));
            return l.impl.apply(void 0, arguments)
          }
      }
    },
    cc = {
      readContext: rt,
      use: as,
      useCallback: md,
      useContext: rt,
      useEffect: lc,
      useImperativeHandle: fd,
      useInsertionEffect: od,
      useLayoutEffect: ud,
      useMemo: hd,
      useReducer: ns,
      useRef: sd,
      useState: function() {
        return ns(ml)
      },
      useDebugValue: ac,
      useDeferredValue: function(e, t) {
        var l = Fe();
        return gd(l, Te.memoizedState, e, t)
      },
      useTransition: function() {
        var e = ns(ml)[0],
          t = Fe().memoizedState;
        return [typeof e == "boolean" ? e : Vn(e), t]
      },
      useSyncExternalStore: Xu,
      useId: xd,
      useHostTransitionStatus: sc,
      useFormState: ad,
      useActionState: ad,
      useOptimistic: function(e, t) {
        var l = Fe();
        return Ju(l, Te, e, t)
      },
      useMemoCache: $r,
      useCacheRefresh: vd
    };
  cc.useEffectEvent = cd;
  var Nd = {
    readContext: rt,
    use: as,
    useCallback: md,
    useContext: rt,
    useEffect: lc,
    useImperativeHandle: fd,
    useInsertionEffect: od,
    useLayoutEffect: ud,
    useMemo: hd,
    useReducer: Pr,
    useRef: sd,
    useState: function() {
      return Pr(ml)
    },
    useDebugValue: ac,
    useDeferredValue: function(e, t) {
      var l = Fe();
      return Te === null ? nc(l, e, t) : gd(l, Te.memoizedState, e, t)
    },
    useTransition: function() {
      var e = Pr(ml)[0],
        t = Fe().memoizedState;
      return [typeof e == "boolean" ? e : Vn(e), t]
    },
    useSyncExternalStore: Xu,
    useId: xd,
    useHostTransitionStatus: sc,
    useFormState: id,
    useActionState: id,
    useOptimistic: function(e, t) {
      var l = Fe();
      return Te !== null ? Ju(l, Te, e, t) : (l.baseState = e, [e, l.queue.dispatch])
    },
    useMemoCache: $r,
    useCacheRefresh: vd
  };
  Nd.useEffectEvent = cd;

  function oc(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : E({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l)
  }
  var uc = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Tt(),
        i = Ul(a);
      i.payload = t, l != null && (i.callback = l), t = Bl(e, i, a), t !== null && (jt(t, e, a), Gn(t, e, a))
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Tt(),
        i = Ul(a);
      i.tag = 1, i.payload = t, l != null && (i.callback = l), t = Bl(e, i, a), t !== null && (jt(t, e, a), Gn(t, e, a))
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Tt(),
        a = Ul(l);
      a.tag = 2, t != null && (a.callback = t), t = Bl(e, a, l), t !== null && (jt(t, e, l), Gn(t, e, l))
    }
  };

  function Ad(e, t, l, a, i, s, r) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, s, r) : t.prototype && t.prototype.isPureReactComponent ? !Un(l, a) || !Un(i, s) : !0
  }

  function Cd(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && uc.enqueueReplaceState(t, t.state, null)
  }

  function xa(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a])
    }
    if (e = e.defaultProps) {
      l === t && (l = E({}, l));
      for (var i in e) l[i] === void 0 && (l[i] = e[i])
    }
    return l
  }

  function wd(e) {
    ki(e)
  }

  function Td(e) {
    console.error(e)
  }

  function Ed(e) {
    ki(e)
  }

  function cs(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, {
        componentStack: t.stack
      })
    } catch (a) {
      setTimeout(function() {
        throw a
      })
    }
  }

  function Rd(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      })
    } catch (i) {
      setTimeout(function() {
        throw i
      })
    }
  }

  function dc(e, t, l) {
    return l = Ul(l), l.tag = 3, l.payload = {
      element: null
    }, l.callback = function() {
      cs(e, t)
    }, l
  }

  function Md(e) {
    return e = Ul(e), e.tag = 3, e
  }

  function Ud(e, t, l, a) {
    var i = l.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var s = a.value;
      e.payload = function() {
        return i(s)
      }, e.callback = function() {
        Rd(t, l, a)
      }
    }
    var r = l.stateNode;
    r !== null && typeof r.componentDidCatch == "function" && (e.callback = function() {
      Rd(t, l, a), typeof i != "function" && (ql === null ? ql = new Set([this]) : ql.add(this));
      var u = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: u !== null ? u : ""
      })
    })
  }

  function hh(e, t, l, a, i) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Za(t, l, i, !0), l = Nt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Lt === null ? vs() : l.alternate === null && Ve === 0 && (Ve = 3), l.flags &= -257, l.flags |= 65536, l.lanes = i, a === Ki ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([a]) : t.add(a), _c(e, a, i)), !1;
          case 22:
            return l.flags |= 65536, a === Ki ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([a]) : l.add(a)), _c(e, a, i)), !1
        }
        throw Error(o(435, l.tag))
      }
      return _c(e, a, i), vs(), !1
    }
    if (be) return t = Nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== Er && (e = Error(o(422), {
      cause: a
    }), _n(Ut(e, l)))) : (a !== Er && (t = Error(o(423), {
      cause: a
    }), _n(Ut(t, l))), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Ut(a, l), i = dc(e.stateNode, a, i), Gr(e, i), Ve !== 4 && (Ve = 2)), !1;
    var s = Error(o(520), {
      cause: a
    });
    if (s = Ut(s, l), ti === null ? ti = [s] : ti.push(s), Ve !== 4 && (Ve = 2), t === null) return !0;
    a = Ut(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = i & -i, l.lanes |= e, e = dc(l.stateNode, a, e), Gr(l, e), !1;
        case 1:
          if (t = l.type, s = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (ql === null || !ql.has(s)))) return l.flags |= 65536, i &= -i, l.lanes |= i, i = Md(i), Ud(i, e, l, a), Gr(l, i), !1
      }
      l = l.return
    } while (l !== null);
    return !1
  }
  var fc = Error(o(461)),
    $e = !1;

  function ct(e, t, l, a) {
    t.child = e === null ? Lu(t, null, l, a) : ya(t, e.child, l, a)
  }

  function Bd(e, t, l, a, i) {
    l = l.render;
    var s = t.ref;
    if ("ref" in a) {
      var r = {};
      for (var u in a) u !== "ref" && (r[u] = a[u])
    } else r = a;
    return ma(t), a = Zr(e, t, l, r, s, i), u = Fr(), e !== null && !$e ? (Kr(e, t, i), hl(e, t, i)) : (be && u && wr(t), t.flags |= 1, ct(e, t, a, i), t.child)
  }

  function Od(e, t, l, a, i) {
    if (e === null) {
      var s = l.type;
      return typeof s == "function" && !Nr(s) && s.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = s, _d(e, t, s, a, i)) : (e = Qi(l.type, null, a, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !vc(e, i)) {
      var r = s.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Un, l(r, a) && e.ref === t.ref) return hl(e, t, i)
    }
    return t.flags |= 1, e = cl(s, a), e.ref = t.ref, e.return = t, t.child = e
  }

  function _d(e, t, l, a, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Un(s, a) && e.ref === t.ref)
        if ($e = !1, t.pendingProps = a = s, vc(e, i))(e.flags & 131072) !== 0 && ($e = !0);
        else return t.lanes = e.lanes, hl(e, t, i)
    }
    return mc(e, t, l, a, i)
  }

  function Ld(e, t, l, a) {
    var i = a.children,
      s = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, i = 0; a !== null;) i = i | a.lanes | a.childLanes, a = a.sibling;
          a = i & ~s
        } else a = 0, t.child = null;
        return Hd(e, t, s, l, a)
      }
      if ((l & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && Zi(t, s !== null ? s.cachePool : null), s !== null ? qu(t, s) : Qr(), Gu(t);
      else return a = t.lanes = 536870912, Hd(e, t, s !== null ? s.baseLanes | l : l, l, a)
    } else s !== null ? (Zi(t, s.cachePool), qu(t, s), _l(), t.memoizedState = null) : (e !== null && Zi(t, null), Qr(), _l());
    return ct(e, t, i, l), t.child
  }

  function Fn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling
  }

  function Hd(e, t, l, a, i) {
    var s = Lr();
    return s = s === null ? null : {
      parent: Ke._currentValue,
      pool: s
    }, t.memoizedState = {
      baseLanes: l,
      cachePool: s
    }, e !== null && Zi(t, null), Qr(), Gu(t), e !== null && Za(e, t, a, !0), t.childLanes = i, null
  }

  function os(e, t) {
    return t = ds({
      mode: t.mode,
      children: t.children
    }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t
  }

  function kd(e, t, l) {
    return ya(t, e.child, null, l), e = os(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e
  }

  function gh(e, t, l) {
    var a = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (be) {
        if (a.mode === "hidden") return e = os(t, a), t.lanes = 536870912, Fn(null, e);
        if (Vr(t), (e = He) ? (e = If(e, _t), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: wl !== null ? {
              id: Pt,
              overflow: el
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Su(e), l.return = t, t.child = l, st = t, He = null)) : e = null, e === null) throw El(t);
        return t.lanes = 536870912, null
      }
      return os(t, a)
    }
    var s = e.memoizedState;
    if (s !== null) {
      var r = s.dehydrated;
      if (Vr(t), i)
        if (t.flags & 256) t.flags &= -257, t = kd(e, t, l);
        else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(o(558));
      else if ($e || Za(e, t, l, !1), i = (l & e.childLanes) !== 0, $e || i) {
        if (a = Oe, a !== null && (r = To(a, l), r !== 0 && r !== s.retryLane)) throw s.retryLane = r, oa(e, r), jt(a, e, r), fc;
        vs(), t = kd(e, t, l)
      } else e = s.treeContext, He = Ht(r.nextSibling), st = t, be = !0, Tl = null, _t = !1, e !== null && Nu(t, e), t = os(t, a), t.flags |= 4096;
      return t
    }
    return e = cl(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e
  }

  function us(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816)
    }
  }

  function mc(e, t, l, a, i) {
    return ma(t), l = Zr(e, t, l, a, void 0, i), a = Fr(), e !== null && !$e ? (Kr(e, t, i), hl(e, t, i)) : (be && a && wr(t), t.flags |= 1, ct(e, t, l, i), t.child)
  }

  function qd(e, t, l, a, i, s) {
    return ma(t), t.updateQueue = null, l = Qu(t, a, l, i), Yu(e), a = Fr(), e !== null && !$e ? (Kr(e, t, s), hl(e, t, s)) : (be && a && wr(t), t.flags |= 1, ct(e, t, l, s), t.child)
  }

  function Gd(e, t, l, a, i) {
    if (ma(t), t.stateNode === null) {
      var s = Qa,
        r = l.contextType;
      typeof r == "object" && r !== null && (s = rt(r)), s = new l(a, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = uc, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = a, s.state = t.memoizedState, s.refs = {}, kr(t), r = l.contextType, s.context = typeof r == "object" && r !== null ? rt(r) : Qa, s.state = t.memoizedState, r = l.getDerivedStateFromProps, typeof r == "function" && (oc(t, l, r, a), s.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (r = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), r !== s.state && uc.enqueueReplaceState(s, s.state, null), Qn(t, a, s, i), Yn(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), a = !0
    } else if (e === null) {
      s = t.stateNode;
      var u = t.memoizedProps,
        m = xa(l, u);
      s.props = m;
      var S = s.context,
        T = l.contextType;
      r = Qa, typeof T == "object" && T !== null && (r = rt(T));
      var M = l.getDerivedStateFromProps;
      T = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function", u = t.pendingProps !== u, T || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u || S !== r) && Cd(t, s, a, r), Ml = !1;
      var z = t.memoizedState;
      s.state = z, Qn(t, a, s, i), Yn(), S = t.memoizedState, u || z !== S || Ml ? (typeof M == "function" && (oc(t, l, M, a), S = t.memoizedState), (m = Ml || Ad(t, l, m, a, z, S, r)) ? (T || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = S), s.props = a, s.state = S, s.context = r, a = m) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
    } else {
      s = t.stateNode, qr(e, t), r = t.memoizedProps, T = xa(l, r), s.props = T, M = t.pendingProps, z = s.context, S = l.contextType, m = Qa, typeof S == "object" && S !== null && (m = rt(S)), u = l.getDerivedStateFromProps, (S = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (r !== M || z !== m) && Cd(t, s, a, m), Ml = !1, z = t.memoizedState, s.state = z, Qn(t, a, s, i), Yn();
      var D = t.memoizedState;
      r !== M || z !== D || Ml || e !== null && e.dependencies !== null && Vi(e.dependencies) ? (typeof u == "function" && (oc(t, l, u, a), D = t.memoizedState), (T = Ml || Ad(t, l, T, a, z, D, m) || e !== null && e.dependencies !== null && Vi(e.dependencies)) ? (S || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, D, m), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(a, D, m)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || r === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || r === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = D), s.props = a, s.state = D, s.context = m, a = T) : (typeof s.componentDidUpdate != "function" || r === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || r === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), a = !1)
    }
    return s = a, us(e, t), a = (t.flags & 128) !== 0, s || a ? (s = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && a ? (t.child = ya(t, e.child, null, i), t.child = ya(t, null, l, i)) : ct(e, t, l, i), t.memoizedState = s.state, e = t.child) : e = hl(e, t, i), e
  }

  function Yd(e, t, l, a) {
    return da(), t.flags |= 256, ct(e, t, l, a), t.child
  }
  var hc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };

  function gc(e) {
    return {
      baseLanes: e,
      cachePool: Ru()
    }
  }

  function pc(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= wt), e
  }

  function Qd(e, t, l) {
    var a = t.pendingProps,
      i = !1,
      s = (t.flags & 128) !== 0,
      r;
    if ((r = s) || (r = e !== null && e.memoizedState === null ? !1 : (Ze.current & 2) !== 0), r && (i = !0, t.flags &= -129), r = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (be) {
        if (i ? Ol(t) : _l(), (e = He) ? (e = If(e, _t), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: wl !== null ? {
              id: Pt,
              overflow: el
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Su(e), l.return = t, t.child = l, st = t, He = null)) : e = null, e === null) throw El(t);
        return Ic(e) ? t.lanes = 32 : t.lanes = 536870912, null
      }
      var u = a.children;
      return a = a.fallback, i ? (_l(), i = t.mode, u = ds({
        mode: "hidden",
        children: u
      }, i), a = ua(a, i, l, null), u.return = t, a.return = t, u.sibling = a, t.child = u, a = t.child, a.memoizedState = gc(l), a.childLanes = pc(e, r, l), t.memoizedState = hc, Fn(null, a)) : (Ol(t), yc(t, u))
    }
    var m = e.memoizedState;
    if (m !== null && (u = m.dehydrated, u !== null)) {
      if (s) t.flags & 256 ? (Ol(t), t.flags &= -257, t = bc(e, t, l)) : t.memoizedState !== null ? (_l(), t.child = e.child, t.flags |= 128, t = null) : (_l(), u = a.fallback, i = t.mode, a = ds({
        mode: "visible",
        children: a.children
      }, i), u = ua(u, i, l, null), u.flags |= 2, a.return = t, u.return = t, a.sibling = u, t.child = a, ya(t, e.child, null, l), a = t.child, a.memoizedState = gc(l), a.childLanes = pc(e, r, l), t.memoizedState = hc, t = Fn(null, a));
      else if (Ol(t), Ic(u)) {
        if (r = u.nextSibling && u.nextSibling.dataset, r) var S = r.dgst;
        r = S, a = Error(o(419)), a.stack = "", a.digest = r, _n({
          value: a,
          source: null,
          stack: null
        }), t = bc(e, t, l)
      } else if ($e || Za(e, t, l, !1), r = (l & e.childLanes) !== 0, $e || r) {
        if (r = Oe, r !== null && (a = To(r, l), a !== 0 && a !== m.retryLane)) throw m.retryLane = a, oa(e, a), jt(r, e, a), fc;
        $c(u) || vs(), t = bc(e, t, l)
      } else $c(u) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, He = Ht(u.nextSibling), st = t, be = !0, Tl = null, _t = !1, e !== null && Nu(t, e), t = yc(t, a.children), t.flags |= 4096);
      return t
    }
    return i ? (_l(), u = a.fallback, i = t.mode, m = e.child, S = m.sibling, a = cl(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, S !== null ? u = cl(S, u) : (u = ua(u, i, l, null), u.flags |= 2), u.return = t, a.return = t, a.sibling = u, t.child = a, Fn(null, a), a = t.child, u = e.child.memoizedState, u === null ? u = gc(l) : (i = u.cachePool, i !== null ? (m = Ke._currentValue, i = i.parent !== m ? {
      parent: m,
      pool: m
    } : i) : i = Ru(), u = {
      baseLanes: u.baseLanes | l,
      cachePool: i
    }), a.memoizedState = u, a.childLanes = pc(e, r, l), t.memoizedState = hc, Fn(e.child, a)) : (Ol(t), l = e.child, e = l.sibling, l = cl(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = l, t.memoizedState = null, l)
  }

  function yc(e, t) {
    return t = ds({
      mode: "visible",
      children: t
    }, e.mode), t.return = e, e.child = t
  }

  function ds(e, t) {
    return e = Dt(22, e, null, t), e.lanes = 0, e
  }

  function bc(e, t, l) {
    return ya(t, e.child, null, l), e = yc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
  }

  function Xd(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Ur(e.return, t, l)
  }

  function xc(e, t, l, a, i, s) {
    var r = e.memoizedState;
    r === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: i,
      treeForkCount: s
    } : (r.isBackwards = t, r.rendering = null, r.renderingStartTime = 0, r.last = a, r.tail = l, r.tailMode = i, r.treeForkCount = s)
  }

  function Vd(e, t, l) {
    var a = t.pendingProps,
      i = a.revealOrder,
      s = a.tail;
    a = a.children;
    var r = Ze.current,
      u = (r & 2) !== 0;
    if (u ? (r = r & 1 | 2, t.flags |= 128) : r &= 1, $(Ze, r), ct(e, t, a, l), a = be ? On : 0, !u && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && Xd(e, l, t);
      else if (e.tag === 19) Xd(e, l, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break e;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    switch (i) {
      case "forwards":
        for (l = t.child, i = null; l !== null;) e = l.alternate, e !== null && Pi(e) === null && (i = l), l = l.sibling;
        l = i, l === null ? (i = t.child, t.child = null) : (i = l.sibling, l.sibling = null), xc(t, !1, i, l, s, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, i = t.child, t.child = null; i !== null;) {
          if (e = i.alternate, e !== null && Pi(e) === null) {
            t.child = i;
            break
          }
          e = i.sibling, i.sibling = l, l = i, i = e
        }
        xc(t, !0, l, null, s, a);
        break;
      case "together":
        xc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null
    }
    return t.child
  }

  function hl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), kl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Za(e, t, l, !1), (l & t.childLanes) === 0) return null
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, l = cl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;) e = e.sibling, l = l.sibling = cl(e, e.pendingProps), l.return = t;
      l.sibling = null
    }
    return t.child
  }

  function vc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Vi(e)))
  }

  function ph(e, t, l) {
    switch (t.tag) {
      case 3:
        Gt(t, t.stateNode.containerInfo), Rl(t, Ke, e.memoizedState.cache), da();
        break;
      case 27:
      case 5:
        ea(t);
        break;
      case 4:
        Gt(t, t.stateNode.containerInfo);
        break;
      case 10:
        Rl(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Vr(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (Ol(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Qd(e, t, l) : (Ol(t), e = hl(e, t, l), e !== null ? e.sibling : null);
        Ol(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Za(e, t, l, !1), a = (l & t.childLanes) !== 0), i) {
          if (a) return Vd(e, t, l);
          t.flags |= 128
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), $(Ze, Ze.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Ld(e, t, l, t.pendingProps);
      case 24:
        Rl(t, Ke, e.memoizedState.cache)
    }
    return hl(e, t, l)
  }

  function Wd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) $e = !0;
      else {
        if (!vc(e, l) && (t.flags & 128) === 0) return $e = !1, ph(e, t, l);
        $e = (e.flags & 131072) !== 0
      }
    else $e = !1, be && (t.flags & 1048576) !== 0 && Du(t, On, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = ga(t.elementType), t.type = e, typeof e == "function") Nr(e) ? (a = xa(e, a), t.tag = 1, t = Gd(null, t, e, a, l)) : (t.tag = 0, t = mc(null, t, e, a, l));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === se) {
                t.tag = 11, t = Bd(null, t, e, a, l);
                break e
              } else if (i === xe) {
                t.tag = 14, t = Od(null, t, e, a, l);
                break e
              }
            }
            throw t = We(e) || e, Error(o(306, t, ""))
          }
        }
        return t;
      case 0:
        return mc(e, t, t.type, t.pendingProps, l);
      case 1:
        return a = t.type, i = xa(a, t.pendingProps), Gd(e, t, a, i, l);
      case 3:
        e: {
          if (Gt(t, t.stateNode.containerInfo), e === null) throw Error(o(387));a = t.pendingProps;
          var s = t.memoizedState;i = s.element,
          qr(e, t),
          Qn(t, a, null, l);
          var r = t.memoizedState;
          if (a = r.cache, Rl(t, Ke, a), a !== s.cache && Br(t, [Ke], l, !0), Yn(), a = r.element, s.isDehydrated)
            if (s = {
                element: a,
                isDehydrated: !1,
                cache: r.cache
              }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = Yd(e, t, a, l);
              break e
            } else if (a !== i) {
            i = Ut(Error(o(424)), t), _n(i), t = Yd(e, t, a, l);
            break e
          } else {
            switch (e = t.stateNode.containerInfo, e.nodeType) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === "HTML" ? e.ownerDocument.body : e
            }
            for (He = Ht(e.firstChild), st = t, be = !0, Tl = null, _t = !0, l = Lu(t, null, a, l), t.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling
          } else {
            if (da(), a === i) {
              t = hl(e, t, l);
              break e
            }
            ct(e, t, a, l)
          }
          t = t.child
        }
        return t;
      case 26:
        return us(e, t), e === null ? (l = nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : be || (l = t.type, e = t.pendingProps, a = Cs(ht.current).createElement(l), a[it] = t, a[gt] = e, ot(a, l, e), lt(a), t.stateNode = a) : t.memoizedState = nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return ea(t), e === null && be && (a = t.stateNode = tm(t.type, t.pendingProps, ht.current), st = t, _t = !0, i = He, Xl(t.type) ? (Pc = i, He = Ht(a.firstChild)) : He = i), ct(e, t, t.pendingProps.children, l), us(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && be && ((i = a = He) && (a = Wh(a, t.type, t.pendingProps, _t), a !== null ? (t.stateNode = a, st = t, He = Ht(a.firstChild), _t = !1, i = !0) : i = !1), i || El(t)), ea(t), i = t.type, s = t.pendingProps, r = e !== null ? e.memoizedProps : null, a = s.children, Fc(i, s) ? a = null : r !== null && Fc(i, r) && (t.flags |= 32), t.memoizedState !== null && (i = Zr(e, t, rh, null, null, l), oi._currentValue = i), us(e, t), ct(e, t, a, l), t.child;
      case 6:
        return e === null && be && ((e = l = He) && (l = Zh(l, t.pendingProps, _t), l !== null ? (t.stateNode = l, st = t, He = null, e = !0) : e = !1), e || El(t)), null;
      case 13:
        return Qd(e, t, l);
      case 4:
        return Gt(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = ya(t, null, a, l) : ct(e, t, a, l), t.child;
      case 11:
        return Bd(e, t, t.type, t.pendingProps, l);
      case 7:
        return ct(e, t, t.pendingProps, l), t.child;
      case 8:
        return ct(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return ct(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return a = t.pendingProps, Rl(t, t.type, a.value), ct(e, t, a.children, l), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, ma(t), i = rt(i), a = a(i), t.flags |= 1, ct(e, t, a, l), t.child;
      case 14:
        return Od(e, t, t.type, t.pendingProps, l);
      case 15:
        return _d(e, t, t.type, t.pendingProps, l);
      case 19:
        return Vd(e, t, l);
      case 31:
        return gh(e, t, l);
      case 22:
        return Ld(e, t, l, t.pendingProps);
      case 24:
        return ma(t), a = rt(Ke), e === null ? (i = Lr(), i === null && (i = Oe, s = Or(), i.pooledCache = s, s.refCount++, s !== null && (i.pooledCacheLanes |= l), i = s), t.memoizedState = {
          parent: a,
          cache: i
        }, kr(t), Rl(t, Ke, i)) : ((e.lanes & l) !== 0 && (qr(e, t), Qn(t, null, null, l), Yn()), i = e.memoizedState, s = t.memoizedState, i.parent !== a ? (i = {
          parent: a,
          cache: a
        }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Rl(t, Ke, a)) : (a = s.cache, Rl(t, Ke, a), a !== i.cache && Br(t, [Ke], l, !0))), ct(e, t, t.pendingProps.children, l), t.child;
      case 29:
        throw t.pendingProps
    }
    throw Error(o(156, t.tag))
  }

  function gl(e) {
    e.flags |= 4
  }

  function jc(e, t, l, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (vf()) e.flags |= 8192;
      else throw pa = Ki, Hr
    } else e.flags &= -16777217
  }

  function Zd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !om(t))
      if (vf()) e.flags |= 8192;
      else throw pa = Ki, Hr
  }

  function fs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ao() : 536870912, e.lanes |= t, sn |= t)
  }

  function Kn(e, t) {
    if (!be) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var l = null; t !== null;) t.alternate !== null && (l = t), t = t.sibling;
        l === null ? e.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = e.tail;
        for (var a = null; l !== null;) l.alternate !== null && (a = l), l = l.sibling;
        a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
    }
  }

  function ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var i = e.child; i !== null;) l |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null;) l |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t
  }

  function yh(e, t, l) {
    var a = t.pendingProps;
    switch (Tr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ke(t), null;
      case 1:
        return ke(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), dl(Ke), et(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Wa(t) ? gl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Rr())), ke(t), null;
      case 26:
        var i = t.type,
          s = t.memoizedState;
        return e === null ? (gl(t), s !== null ? (ke(t), Zd(t, s)) : (ke(t), jc(t, i, null, a, l))) : s ? s !== e.memoizedState ? (gl(t), ke(t), Zd(t, s)) : (ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && gl(t), ke(t), jc(t, i, e, a, l)), null;
      case 27:
        if (Nl(t), l = ht.current, i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && gl(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return ke(t), null
          }
          e = ve.current, Wa(t) ? Au(t) : (e = tm(i, a, l), t.stateNode = e, gl(t))
        }
        return ke(t), null;
      case 5:
        if (Nl(t), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && gl(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(o(166));
            return ke(t), null
          }
          if (s = ve.current, Wa(t)) Au(t);
          else {
            var r = Cs(ht.current);
            switch (s) {
              case 1:
                s = r.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                s = r.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    s = r.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    s = r.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                    break;
                  case "script":
                    s = r.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(s.firstChild);
                    break;
                  case "select":
                    s = typeof a.is == "string" ? r.createElement("select", {
                      is: a.is
                    }) : r.createElement("select"), a.multiple ? s.multiple = !0 : a.size && (s.size = a.size);
                    break;
                  default:
                    s = typeof a.is == "string" ? r.createElement(i, {
                      is: a.is
                    }) : r.createElement(i)
                }
            }
            s[it] = t, s[gt] = a;
            e: for (r = t.child; r !== null;) {
              if (r.tag === 5 || r.tag === 6) s.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue
              }
              if (r === t) break e;
              for (; r.sibling === null;) {
                if (r.return === null || r.return === t) break e;
                r = r.return
              }
              r.sibling.return = r.return, r = r.sibling
            }
            t.stateNode = s;
            e: switch (ot(s, i, a), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1
            }
            a && gl(t)
          }
        }
        return ke(t), jc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && gl(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(o(166));
          if (e = ht.current, Wa(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, i = st, i !== null) switch (i.tag) {
              case 27:
              case 5:
                a = i.memoizedProps
            }
            e[it] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Xf(e.nodeValue, l)), e || El(t, !0)
          } else e = Cs(e).createTextNode(a), e[it] = t, t.stateNode = e
        }
        return ke(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Wa(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[it] = t
            } else da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ke(t), e = !1
          } else l = Rr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e) return t.flags & 256 ? (At(t), t) : (At(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558))
        }
        return ke(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Wa(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(o(317));
              i[it] = t
            } else da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ke(t), i = !1
          } else i = Rr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i) return t.flags & 256 ? (At(t), t) : (At(t), null)
        }
        return At(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), s = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), s !== i && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), fs(t, t.updateQueue), ke(t), null);
      case 4:
        return et(), e === null && Qc(t.stateNode.containerInfo), ke(t), null;
      case 10:
        return dl(t.type), ke(t), null;
      case 19:
        if (le(Ze), a = t.memoizedState, a === null) return ke(t), null;
        if (i = (t.flags & 128) !== 0, s = a.rendering, s === null)
          if (i) Kn(a, !1);
          else {
            if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null;) {
                if (s = Pi(e), s !== null) {
                  for (t.flags |= 128, Kn(a, !1), e = s.updateQueue, t.updateQueue = e, fs(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;) ju(l, e), l = l.sibling;
                  return $(Ze, Ze.current & 1 | 2), be && ol(t, a.treeForkCount), t.child
                }
                e = e.sibling
              }
            a.tail !== null && ft() > ys && (t.flags |= 128, i = !0, Kn(a, !1), t.lanes = 4194304)
          }
        else {
          if (!i)
            if (e = Pi(s), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, fs(t, e), Kn(a, !0), a.tail === null && a.tailMode === "hidden" && !s.alternate && !be) return ke(t), null
            } else 2 * ft() - a.renderingStartTime > ys && l !== 536870912 && (t.flags |= 128, i = !0, Kn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (s.sibling = t.child, t.child = s) : (e = a.last, e !== null ? e.sibling = s : t.child = s, a.last = s)
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ft(), e.sibling = null, l = Ze.current, $(Ze, i ? l & 1 | 2 : l & 1), be && ol(t, a.treeForkCount), e) : (ke(t), null);
      case 22:
      case 23:
        return At(t), Xr(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), l = t.updateQueue, l !== null && fs(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && le(ha), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), dl(Ke), ke(t), null;
      case 25:
        return null;
      case 30:
        return null
    }
    throw Error(o(156, t.tag))
  }

  function bh(e, t) {
    switch (Tr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return dl(Ke), et(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Nl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (At(t), t.alternate === null) throw Error(o(340));
          da()
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (At(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          da()
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return le(Ze), null;
      case 4:
        return et(), null;
      case 10:
        return dl(t.type), null;
      case 22:
      case 23:
        return At(t), Xr(), e !== null && le(ha), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return dl(Ke), null;
      case 25:
        return null;
      default:
        return null
    }
  }

  function Fd(e, t) {
    switch (Tr(t), t.tag) {
      case 3:
        dl(Ke), et();
        break;
      case 26:
      case 27:
      case 5:
        Nl(t);
        break;
      case 4:
        et();
        break;
      case 31:
        t.memoizedState !== null && At(t);
        break;
      case 13:
        At(t);
        break;
      case 19:
        le(Ze);
        break;
      case 10:
        dl(t.type);
        break;
      case 22:
      case 23:
        At(t), Xr(), e !== null && le(ha);
        break;
      case 24:
        dl(Ke)
    }
  }

  function Jn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var s = l.create,
              r = l.inst;
            a = s(), r.destroy = a
          }
          l = l.next
        } while (l !== i)
      }
    } catch (u) {
      Ce(t, t.return, u)
    }
  }

  function Ll(e, t, l) {
    try {
      var a = t.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        a = s;
        do {
          if ((a.tag & e) === e) {
            var r = a.inst,
              u = r.destroy;
            if (u !== void 0) {
              r.destroy = void 0, i = t;
              var m = l,
                S = u;
              try {
                S()
              } catch (T) {
                Ce(i, m, T)
              }
            }
          }
          a = a.next
        } while (a !== s)
      }
    } catch (T) {
      Ce(t, t.return, T)
    }
  }

  function Kd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        ku(t, l)
      } catch (a) {
        Ce(e, e.return, a)
      }
    }
  }

  function Jd(e, t, l) {
    l.props = xa(e.type, e.memoizedProps), l.state = e.memoizedState;
    try {
      l.componentWillUnmount()
    } catch (a) {
      Ce(e, t, a)
    }
  }

  function $n(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a
      }
    } catch (i) {
      Ce(e, t, i)
    }
  }

  function tl(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function") try {
        a()
      } catch (i) {
        Ce(e, t, i)
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
      } else if (typeof l == "function") try {
        l(null)
      } catch (i) {
        Ce(e, t, i)
      } else l.current = null
  }

  function $d(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
      }
    }
    catch (i) {
      Ce(e, e.return, i)
    }
  }

  function Sc(e, t, l) {
    try {
      var a = e.stateNode;
      qh(a, e.type, l, t), a[gt] = t
    } catch (i) {
      Ce(e, e.return, i)
    }
  }

  function Id(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Xl(e.type) || e.tag === 4
  }

  function zc(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || Id(e.return)) return null;
        e = e.return
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.tag === 27 && Xl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }

  function Dc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = sl));
    else if (a !== 4 && (a === 27 && Xl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Dc(e, t, l), e = e.sibling; e !== null;) Dc(e, t, l), e = e.sibling
  }

  function ms(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Xl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (ms(e, t, l), e = e.sibling; e !== null;) ms(e, t, l), e = e.sibling
  }

  function Pd(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
      ot(t, a, l), t[it] = e, t[gt] = l
    } catch (s) {
      Ce(e, e.return, s)
    }
  }
  var pl = !1,
    Ie = !1,
    Nc = !1,
    ef = typeof WeakSet == "function" ? WeakSet : Set,
    at = null;

  function xh(e, t) {
    if (e = e.containerInfo, Wc = Bs, e = fu(e), br(e)) {
      if ("selectionStart" in e) var l = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        l = (l = e.ownerDocument) && l.defaultView || window;
        var a = l.getSelection && l.getSelection();
        if (a && a.rangeCount !== 0) {
          l = a.anchorNode;
          var i = a.anchorOffset,
            s = a.focusNode;
          a = a.focusOffset;
          try {
            l.nodeType, s.nodeType
          } catch {
            l = null;
            break e
          }
          var r = 0,
            u = -1,
            m = -1,
            S = 0,
            T = 0,
            M = e,
            z = null;
          t: for (;;) {
            for (var D; M !== l || i !== 0 && M.nodeType !== 3 || (u = r + i), M !== s || a !== 0 && M.nodeType !== 3 || (m = r + a), M.nodeType === 3 && (r += M.nodeValue.length), (D = M.firstChild) !== null;) z = M, M = D;
            for (;;) {
              if (M === e) break t;
              if (z === l && ++S === i && (u = r), z === s && ++T === a && (m = r), (D = M.nextSibling) !== null) break;
              M = z, z = M.parentNode
            }
            M = D
          }
          l = u === -1 || m === -1 ? null : {
            start: u,
            end: m
          }
        } else l = null
      }
      l = l || {
        start: 0,
        end: 0
      }
    } else l = null;
    for (Zc = {
        focusedElem: e,
        selectionRange: l
      }, Bs = !1, at = t; at !== null;)
      if (t = at, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, at = e;
      else
        for (; at !== null;) {
          switch (t = at, s = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++) i = e[l], i.ref.impl = i.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                e = void 0, l = t, i = s.memoizedProps, s = s.memoizedState, a = l.stateNode;
                try {
                  var F = xa(l.type, i);
                  e = a.getSnapshotBeforeUpdate(F, s), a.__reactInternalSnapshotBeforeUpdate = e
                } catch (ee) {
                  Ce(l, l.return, ee)
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) Jc(e);
                else if (l === 1) switch (e.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    Jc(e);
                    break;
                  default:
                    e.textContent = ""
                }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163))
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, at = e;
            break
          }
          at = t.return
        }
  }

  function tf(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        bl(e, l), a & 4 && Jn(5, l);
        break;
      case 1:
        if (bl(e, l), a & 4)
          if (e = l.stateNode, t === null) try {
            e.componentDidMount()
          } catch (r) {
            Ce(l, l.return, r)
          } else {
            var i = xa(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
            } catch (r) {
              Ce(l, l.return, r)
            }
          }
        a & 64 && Kd(l), a & 512 && $n(l, l.return);
        break;
      case 3:
        if (bl(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null) switch (l.child.tag) {
            case 27:
            case 5:
              t = l.child.stateNode;
              break;
            case 1:
              t = l.child.stateNode
          }
          try {
            ku(e, t)
          } catch (r) {
            Ce(l, l.return, r)
          }
        }
        break;
      case 27:
        t === null && a & 4 && Pd(l);
      case 26:
      case 5:
        bl(e, l), t === null && a & 4 && $d(l), a & 512 && $n(l, l.return);
        break;
      case 12:
        bl(e, l);
        break;
      case 31:
        bl(e, l), a & 4 && nf(e, l);
        break;
      case 13:
        bl(e, l), a & 4 && sf(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = wh.bind(null, l), Fh(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || pl, !a) {
          t = t !== null && t.memoizedState !== null || Ie, i = pl;
          var s = Ie;
          pl = a, (Ie = t) && !s ? xl(e, l, (l.subtreeFlags & 8772) !== 0) : bl(e, l), pl = i, Ie = s
        }
        break;
      case 30:
        break;
      default:
        bl(e, l)
    }
  }

  function lf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, lf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && tr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
  }
  var Ge = null,
    yt = !1;

  function yl(e, t, l) {
    for (l = l.child; l !== null;) af(e, t, l), l = l.sibling
  }

  function af(e, t, l) {
    if (Le && typeof Le.onCommitFiberUnmount == "function") try {
      Le.onCommitFiberUnmount(Ue, l)
    } catch {}
    switch (l.tag) {
      case 26:
        Ie || tl(l, t), yl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ie || tl(l, t);
        var a = Ge,
          i = yt;
        Xl(l.type) && (Ge = l.stateNode, yt = !1), yl(e, t, l), si(l.stateNode), Ge = a, yt = i;
        break;
      case 5:
        Ie || tl(l, t);
      case 6:
        if (a = Ge, i = yt, Ge = null, yl(e, t, l), Ge = a, yt = i, Ge !== null)
          if (yt) try {
            (Ge.nodeType === 9 ? Ge.body : Ge.nodeName === "HTML" ? Ge.ownerDocument.body : Ge).removeChild(l.stateNode)
          } catch (s) {
            Ce(l, t, s)
          } else try {
            Ge.removeChild(l.stateNode)
          } catch (s) {
            Ce(l, t, s)
          }
        break;
      case 18:
        Ge !== null && (yt ? (e = Ge, Jf(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), hn(e)) : Jf(Ge, l.stateNode));
        break;
      case 4:
        a = Ge, i = yt, Ge = l.stateNode.containerInfo, yt = !0, yl(e, t, l), Ge = a, yt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ll(2, l, t), Ie || Ll(4, l, t), yl(e, t, l);
        break;
      case 1:
        Ie || (tl(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Jd(l, t, a)), yl(e, t, l);
        break;
      case 21:
        yl(e, t, l);
        break;
      case 22:
        Ie = (a = Ie) || l.memoizedState !== null, yl(e, t, l), Ie = a;
        break;
      default:
        yl(e, t, l)
    }
  }

  function nf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        hn(e)
      } catch (l) {
        Ce(t, t.return, l)
      }
    }
  }

  function sf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      hn(e)
    } catch (l) {
      Ce(t, t.return, l)
    }
  }

  function vh(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new ef), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ef), t;
      default:
        throw Error(o(435, e.tag))
    }
  }

  function hs(e, t) {
    var l = vh(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var i = Th.bind(null, e, a);
        a.then(i, i)
      }
    })
  }

  function bt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var i = l[a],
          s = e,
          r = t,
          u = r;
        e: for (; u !== null;) {
          switch (u.tag) {
            case 27:
              if (Xl(u.type)) {
                Ge = u.stateNode, yt = !1;
                break e
              }
              break;
            case 5:
              Ge = u.stateNode, yt = !1;
              break e;
            case 3:
            case 4:
              Ge = u.stateNode.containerInfo, yt = !0;
              break e
          }
          u = u.return
        }
        if (Ge === null) throw Error(o(160));
        af(s, r, i), Ge = null, yt = !1, s = i.alternate, s !== null && (s.return = null), i.return = null
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) rf(t, e), t = t.sibling
  }
  var Qt = null;

  function rf(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        bt(t, e), xt(e), a & 4 && (Ll(3, e, e.return), Jn(3, e), Ll(5, e, e.return));
        break;
      case 1:
        bt(t, e), xt(e), a & 512 && (Ie || l === null || tl(l, l.return)), a & 64 && pl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var i = Qt;
        if (bt(t, e), xt(e), a & 512 && (Ie || l === null || tl(l, l.return)), a & 4) {
          var s = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type,
                  l = e.memoizedProps,
                  i = i.ownerDocument || i;t: switch (a) {
                    case "title":
                      s = i.getElementsByTagName("title")[0], (!s || s[Dn] || s[it] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = i.createElement(a), i.head.insertBefore(s, i.querySelector("head > title"))), ot(s, a, l), s[it] = e, lt(s), a = s;
                      break e;
                    case "link":
                      var r = rm("link", "href", i).get(a + (l.href || ""));
                      if (r) {
                        for (var u = 0; u < r.length; u++)
                          if (s = r[u], s.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && s.getAttribute("rel") === (l.rel == null ? null : l.rel) && s.getAttribute("title") === (l.title == null ? null : l.title) && s.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            r.splice(u, 1);
                            break t
                          }
                      }
                      s = i.createElement(a), ot(s, a, l), i.head.appendChild(s);
                      break;
                    case "meta":
                      if (r = rm("meta", "content", i).get(a + (l.content || ""))) {
                        for (u = 0; u < r.length; u++)
                          if (s = r[u], s.getAttribute("content") === (l.content == null ? null : "" + l.content) && s.getAttribute("name") === (l.name == null ? null : l.name) && s.getAttribute("property") === (l.property == null ? null : l.property) && s.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && s.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            r.splice(u, 1);
                            break t
                          }
                      }
                      s = i.createElement(a), ot(s, a, l), i.head.appendChild(s);
                      break;
                    default:
                      throw Error(o(468, a))
                  }
                  s[it] = e,
                  lt(s),
                  a = s
                }
                e.stateNode = a
              }
          else cm(i, e.type, e.stateNode);
          else e.stateNode = sm(i, a, e.memoizedProps);
          else s !== a ? (s === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : s.count--, a === null ? cm(i, e.type, e.stateNode) : sm(i, a, e.memoizedProps)) : a === null && e.stateNode !== null && Sc(e, e.memoizedProps, l.memoizedProps)
        }
        break;
      case 27:
        bt(t, e), xt(e), a & 512 && (Ie || l === null || tl(l, l.return)), l !== null && a & 4 && Sc(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (bt(t, e), xt(e), a & 512 && (Ie || l === null || tl(l, l.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            _a(i, "")
          } catch (F) {
            Ce(e, e.return, F)
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, Sc(e, i, l !== null ? l.memoizedProps : i)), a & 1024 && (Nc = !0);
        break;
      case 6:
        if (bt(t, e), xt(e), a & 4) {
          if (e.stateNode === null) throw Error(o(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a
          } catch (F) {
            Ce(e, e.return, F)
          }
        }
        break;
      case 3:
        if (Es = null, i = Qt, Qt = ws(t.containerInfo), bt(t, e), Qt = i, xt(e), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
          hn(t.containerInfo)
        } catch (F) {
          Ce(e, e.return, F)
        }
        Nc && (Nc = !1, cf(e));
        break;
      case 4:
        a = Qt, Qt = ws(e.stateNode.containerInfo), bt(t, e), xt(e), Qt = a;
        break;
      case 12:
        bt(t, e), xt(e);
        break;
      case 31:
        bt(t, e), xt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, hs(e, a)));
        break;
      case 13:
        bt(t, e), xt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ps = ft()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, hs(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null,
          S = pl,
          T = Ie;
        if (pl = S || i, Ie = T || m, bt(t, e), Ie = T, pl = S, xt(e), a & 8192) e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (l === null || m || pl || Ie || va(e)), l = null, t = e;;) {
          if (t.tag === 5 || t.tag === 26) {
            if (l === null) {
              m = l = t;
              try {
                if (s = m.stateNode, i) r = s.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                else {
                  u = m.stateNode;
                  var M = m.memoizedProps.style,
                    z = M != null && M.hasOwnProperty("display") ? M.display : null;
                  u.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim()
                }
              } catch (F) {
                Ce(m, m.return, F)
              }
            }
          } else if (t.tag === 6) {
            if (l === null) {
              m = t;
              try {
                m.stateNode.nodeValue = i ? "" : m.memoizedProps
              } catch (F) {
                Ce(m, m.return, F)
              }
            }
          } else if (t.tag === 18) {
            if (l === null) {
              m = t;
              try {
                var D = m.stateNode;
                i ? $f(D, !0) : $f(m.stateNode, !1)
              } catch (F) {
                Ce(m, m.return, F)
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue
          }
          if (t === e) break e;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) break e;
            l === t && (l = null), t = t.return
          }
          l === t && (l = null), t.sibling.return = t.return, t = t.sibling
        }
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, hs(e, l))));
        break;
      case 19:
        bt(t, e), xt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, hs(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        bt(t, e), xt(e)
    }
  }

  function xt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null;) {
          if (Id(a)) {
            l = a;
            break
          }
          a = a.return
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var i = l.stateNode,
              s = zc(e);
            ms(e, s, i);
            break;
          case 5:
            var r = l.stateNode;
            l.flags & 32 && (_a(r, ""), l.flags &= -33);
            var u = zc(e);
            ms(e, u, r);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo,
              S = zc(e);
            Dc(e, S, m);
            break;
          default:
            throw Error(o(161))
        }
      } catch (T) {
        Ce(e, e.return, T)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }

  function cf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        cf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
      }
  }

  function bl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) tf(e, t.alternate, t), t = t.sibling
  }

  function va(e) {
    for (e = e.child; e !== null;) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ll(4, t, t.return), va(t);
          break;
        case 1:
          tl(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Jd(t, t.return, l), va(t);
          break;
        case 27:
          si(t.stateNode);
        case 26:
        case 5:
          tl(t, t.return), va(t);
          break;
        case 22:
          t.memoizedState === null && va(t);
          break;
        case 30:
          va(t);
          break;
        default:
          va(t)
      }
      e = e.sibling
    }
  }

  function xl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var a = t.alternate,
        i = e,
        s = t,
        r = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          xl(i, s, l), Jn(4, s);
          break;
        case 1:
          if (xl(i, s, l), a = s, i = a.stateNode, typeof i.componentDidMount == "function") try {
            i.componentDidMount()
          } catch (S) {
            Ce(a, a.return, S)
          }
          if (a = s, i = a.updateQueue, i !== null) {
            var u = a.stateNode;
            try {
              var m = i.shared.hiddenCallbacks;
              if (m !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < m.length; i++) Hu(m[i], u)
            } catch (S) {
              Ce(a, a.return, S)
            }
          }
          l && r & 64 && Kd(s), $n(s, s.return);
          break;
        case 27:
          Pd(s);
        case 26:
        case 5:
          xl(i, s, l), l && a === null && r & 4 && $d(s), $n(s, s.return);
          break;
        case 12:
          xl(i, s, l);
          break;
        case 31:
          xl(i, s, l), l && r & 4 && nf(i, s);
          break;
        case 13:
          xl(i, s, l), l && r & 4 && sf(i, s);
          break;
        case 22:
          s.memoizedState === null && xl(i, s, l), $n(s, s.return);
          break;
        case 30:
          break;
        default:
          xl(i, s, l)
      }
      t = t.sibling
    }
  }

  function Ac(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Ln(l))
  }

  function Cc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ln(e))
  }

  function Xt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) of(e, t, l, a), t = t.sibling
  }

  function of(e, t, l, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Xt(e, t, l, a), i & 2048 && Jn(9, t);
        break;
      case 1:
        Xt(e, t, l, a);
        break;
      case 3:
        Xt(e, t, l, a), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ln(e)));
        break;
      case 12:
        if (i & 2048) {
          Xt(e, t, l, a), e = t.stateNode;
          try {
            var s = t.memoizedProps,
              r = s.id,
              u = s.onPostCommit;
            typeof u == "function" && u(r, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
          } catch (m) {
            Ce(t, t.return, m)
          }
        } else Xt(e, t, l, a);
        break;
      case 31:
        Xt(e, t, l, a);
        break;
      case 13:
        Xt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, r = t.alternate, t.memoizedState !== null ? s._visibility & 2 ? Xt(e, t, l, a) : In(e, t) : s._visibility & 2 ? Xt(e, t, l, a) : (s._visibility |= 2, ln(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)), i & 2048 && Ac(r, t);
        break;
      case 24:
        Xt(e, t, l, a), i & 2048 && Cc(t.alternate, t);
        break;
      default:
        Xt(e, t, l, a)
    }
  }

  function ln(e, t, l, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
      var s = e,
        r = t,
        u = l,
        m = a,
        S = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ln(s, r, u, m, i), Jn(8, r);
          break;
        case 23:
          break;
        case 22:
          var T = r.stateNode;
          r.memoizedState !== null ? T._visibility & 2 ? ln(s, r, u, m, i) : In(s, r) : (T._visibility |= 2, ln(s, r, u, m, i)), i && S & 2048 && Ac(r.alternate, r);
          break;
        case 24:
          ln(s, r, u, m, i), i && S & 2048 && Cc(r.alternate, r);
          break;
        default:
          ln(s, r, u, m, i)
      }
      t = t.sibling
    }
  }

  function In(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var l = e,
          a = t,
          i = a.flags;
        switch (a.tag) {
          case 22:
            In(l, a), i & 2048 && Ac(a.alternate, a);
            break;
          case 24:
            In(l, a), i & 2048 && Cc(a.alternate, a);
            break;
          default:
            In(l, a)
        }
        t = t.sibling
      }
  }
  var Pn = 8192;

  function an(e, t, l) {
    if (e.subtreeFlags & Pn)
      for (e = e.child; e !== null;) uf(e, t, l), e = e.sibling
  }

  function uf(e, t, l) {
    switch (e.tag) {
      case 26:
        an(e, t, l), e.flags & Pn && e.memoizedState !== null && sg(l, Qt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        an(e, t, l);
        break;
      case 3:
      case 4:
        var a = Qt;
        Qt = ws(e.stateNode.containerInfo), an(e, t, l), Qt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Pn, Pn = 16777216, an(e, t, l), Pn = a) : an(e, t, l));
        break;
      default:
        an(e, t, l)
    }
  }

  function df(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do t = e.sibling, e.sibling = null, e = t; while (e !== null)
    }
  }

  function ei(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          at = a, mf(a, e)
        }
      df(e)
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) ff(e), e = e.sibling
  }

  function ff(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ei(e), e.flags & 2048 && Ll(9, e, e.return);
        break;
      case 3:
        ei(e);
        break;
      case 12:
        ei(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, gs(e)) : ei(e);
        break;
      default:
        ei(e)
    }
  }

  function gs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          at = a, mf(a, e)
        }
      df(e)
    }
    for (e = e.child; e !== null;) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ll(8, t, t.return), gs(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, gs(t));
          break;
        default:
          gs(t)
      }
      e = e.sibling
    }
  }

  function mf(e, t) {
    for (; at !== null;) {
      var l = at;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ll(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++
          }
          break;
        case 24:
          Ln(l.memoizedState.cache)
      }
      if (a = l.child, a !== null) a.return = l, at = a;
      else e: for (l = e; at !== null;) {
        a = at;
        var i = a.sibling,
          s = a.return;
        if (lf(a), a === l) {
          at = null;
          break e
        }
        if (i !== null) {
          i.return = s, at = i;
          break e
        }
        at = s
      }
    }
  }
  var jh = {
      getCacheForType: function(e) {
        var t = rt(Ke),
          l = t.data.get(e);
        return l === void 0 && (l = e(), t.data.set(e, l)), l
      },
      cacheSignal: function() {
        return rt(Ke).controller.signal
      }
    },
    Sh = typeof WeakMap == "function" ? WeakMap : Map,
    De = 0,
    Oe = null,
    de = null,
    ge = 0,
    Ae = 0,
    Ct = null,
    Hl = !1,
    nn = !1,
    wc = !1,
    vl = 0,
    Ve = 0,
    kl = 0,
    ja = 0,
    Tc = 0,
    wt = 0,
    sn = 0,
    ti = null,
    vt = null,
    Ec = !1,
    ps = 0,
    hf = 0,
    ys = 1 / 0,
    bs = null,
    ql = null,
    Pe = 0,
    Gl = null,
    rn = null,
    jl = 0,
    Rc = 0,
    Mc = null,
    gf = null,
    li = 0,
    Uc = null;

  function Tt() {
    return (De & 2) !== 0 && ge !== 0 ? ge & -ge : v.T !== null ? kc() : Eo()
  }

  function pf() {
    if (wt === 0)
      if ((ge & 536870912) === 0 || be) {
        var e = Ta;
        Ta <<= 1, (Ta & 3932160) === 0 && (Ta = 262144), wt = e
      } else wt = 536870912;
    return e = Nt.current, e !== null && (e.flags |= 32), wt
  }

  function jt(e, t, l) {
    (e === Oe && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) && (cn(e, 0), Yl(e, ge, wt, !1)), zn(e, l), ((De & 2) === 0 || e !== Oe) && (e === Oe && ((De & 2) === 0 && (ja |= l), Ve === 4 && Yl(e, ge, wt, !1)), ll(e))
  }

  function yf(e, t, l) {
    if ((De & 6) !== 0) throw Error(o(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || na(e, t),
      i = a ? Nh(e, t) : Oc(e, t, !0),
      s = a;
    do {
      if (i === 0) {
        nn && !a && Yl(e, t, 0, !1);
        break
      } else {
        if (l = e.current.alternate, s && !zh(l)) {
          i = Oc(e, t, !1), s = !1;
          continue
        }
        if (i === 2) {
          if (s = t, e.errorRecoveryDisabledLanes & s) var r = 0;
          else r = e.pendingLanes & -536870913, r = r !== 0 ? r : r & 536870912 ? 536870912 : 0;
          if (r !== 0) {
            t = r;
            e: {
              var u = e;i = ti;
              var m = u.current.memoizedState.isDehydrated;
              if (m && (cn(u, r).flags |= 256), r = Oc(u, r, !1), r !== 2) {
                if (wc && !m) {
                  u.errorRecoveryDisabledLanes |= s, ja |= s, i = 4;
                  break e
                }
                s = vt, vt = i, s !== null && (vt === null ? vt = s : vt.push.apply(vt, s))
              }
              i = r
            }
            if (s = !1, i !== 2) continue
          }
        }
        if (i === 1) {
          cn(e, 0), Yl(e, t, 0, !0);
          break
        }
        e: {
          switch (a = e, s = i, s) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Yl(a, t, wt, !Hl);
              break e;
            case 2:
              vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329))
          }
          if ((t & 62914560) === t && (i = ps + 300 - ft(), 10 < i)) {
            if (Yl(a, t, wt, !Hl), Be(a, 0, !0) !== 0) break e;
            jl = t, a.timeoutHandle = Ff(bf.bind(null, a, l, vt, bs, Ec, t, wt, ja, sn, Hl, s, "Throttled", -0, 0), i);
            break e
          }
          bf(a, l, vt, bs, Ec, t, wt, ja, sn, Hl, s, null, -0, 0)
        }
      }
      break
    } while (!0);
    ll(e)
  }

  function bf(e, t, l, a, i, s, r, u, m, S, T, M, z, D) {
    if (e.timeoutHandle = -1, M = t.subtreeFlags, M & 8192 || (M & 16785408) === 16785408) {
      M = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: sl
      }, uf(t, s, M);
      var F = (s & 62914560) === s ? ps - ft() : (s & 4194048) === s ? hf - ft() : 0;
      if (F = rg(M, F), F !== null) {
        jl = s, e.cancelPendingCommit = F(Af.bind(null, e, t, s, l, a, i, r, u, m, T, M, null, z, D)), Yl(e, s, r, !S);
        return
      }
    }
    Af(e, t, s, l, a, i, r, u, m)
  }

  function zh(e) {
    for (var t = e;;) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var i = l[a],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!zt(s(), i)) return !1
          } catch {
            return !1
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
      }
    }
    return !0
  }

  function Yl(e, t, l, a) {
    t &= ~Tc, t &= ~ja, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i;) {
      var s = 31 - nt(i),
        r = 1 << s;
      a[s] = -1, i &= ~r
    }
    l !== 0 && Co(e, l, t)
  }

  function xs() {
    return (De & 6) === 0 ? (ai(0), !1) : !0
  }

  function Bc() {
    if (de !== null) {
      if (Ae === 0) var e = de.return;
      else e = de, ul = fa = null, Jr(e), $a = null, kn = 0, e = de;
      for (; e !== null;) Fd(e.alternate, e), e = e.return;
      de = null
    }
  }

  function cn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, Qh(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), jl = 0, Bc(), Oe = e, de = l = cl(e.current, null), ge = t, Ae = 0, Ct = null, Hl = !1, nn = na(e, t), wc = !1, sn = wt = Tc = ja = kl = Ve = 0, vt = ti = null, Ec = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a;) {
        var i = 31 - nt(a),
          s = 1 << i;
        t |= e[i], a &= ~s
      }
    return vl = t, qi(), l
  }

  function xf(e, t) {
    ce = null, v.H = Zn, t === Ja || t === Fi ? (t = Bu(), Ae = 3) : t === Hr ? (t = Bu(), Ae = 4) : Ae = t === fc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ct = t, de === null && (Ve = 1, cs(e, Ut(t, e.current)))
  }

  function vf() {
    var e = Nt.current;
    return e === null ? !0 : (ge & 4194048) === ge ? Lt === null : (ge & 62914560) === ge || (ge & 536870912) !== 0 ? e === Lt : !1
  }

  function jf() {
    var e = v.H;
    return v.H = Zn, e === null ? Zn : e
  }

  function Sf() {
    var e = v.A;
    return v.A = jh, e
  }

  function vs() {
    Ve = 4, Hl || (ge & 4194048) !== ge && Nt.current !== null || (nn = !0), (kl & 134217727) === 0 && (ja & 134217727) === 0 || Oe === null || Yl(Oe, ge, wt, !1)
  }

  function Oc(e, t, l) {
    var a = De;
    De |= 2;
    var i = jf(),
      s = Sf();
    (Oe !== e || ge !== t) && (bs = null, cn(e, t)), t = !1;
    var r = Ve;
    e: do try {
        if (Ae !== 0 && de !== null) {
          var u = de,
            m = Ct;
          switch (Ae) {
            case 8:
              Bc(), r = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nt.current === null && (t = !0);
              var S = Ae;
              if (Ae = 0, Ct = null, on(e, u, m, S), l && nn) {
                r = 0;
                break e
              }
              break;
            default:
              S = Ae, Ae = 0, Ct = null, on(e, u, m, S)
          }
        }
        Dh(), r = Ve;
        break
      } catch (T) {
        xf(e, T)
      }
      while (!0);
      return t && e.shellSuspendCounter++, ul = fa = null, De = a, v.H = i, v.A = s, de === null && (Oe = null, ge = 0, qi()), r
  }

  function Dh() {
    for (; de !== null;) zf(de)
  }

  function Nh(e, t) {
    var l = De;
    De |= 2;
    var a = jf(),
      i = Sf();
    Oe !== e || ge !== t ? (bs = null, ys = ft() + 500, cn(e, t)) : nn = na(e, t);
    e: do try {
        if (Ae !== 0 && de !== null) {
          t = de;
          var s = Ct;
          t: switch (Ae) {
            case 1:
              Ae = 0, Ct = null, on(e, t, s, 1);
              break;
            case 2:
            case 9:
              if (Mu(s)) {
                Ae = 0, Ct = null, Df(t);
                break
              }
              t = function() {
                Ae !== 2 && Ae !== 9 || Oe !== e || (Ae = 7), ll(e)
              }, s.then(t, t);
              break e;
            case 3:
              Ae = 7;
              break e;
            case 4:
              Ae = 5;
              break e;
            case 7:
              Mu(s) ? (Ae = 0, Ct = null, Df(t)) : (Ae = 0, Ct = null, on(e, t, s, 7));
              break;
            case 5:
              var r = null;
              switch (de.tag) {
                case 26:
                  r = de.memoizedState;
                case 5:
                case 27:
                  var u = de;
                  if (r ? om(r) : u.stateNode.complete) {
                    Ae = 0, Ct = null;
                    var m = u.sibling;
                    if (m !== null) de = m;
                    else {
                      var S = u.return;
                      S !== null ? (de = S, js(S)) : de = null
                    }
                    break t
                  }
              }
              Ae = 0, Ct = null, on(e, t, s, 5);
              break;
            case 6:
              Ae = 0, Ct = null, on(e, t, s, 6);
              break;
            case 8:
              Bc(), Ve = 6;
              break e;
            default:
              throw Error(o(462))
          }
        }
        Ah();
        break
      } catch (T) {
        xf(e, T)
      }
      while (!0);
      return ul = fa = null, v.H = a, v.A = i, De = l, de !== null ? 0 : (Oe = null, ge = 0, qi(), Ve)
  }

  function Ah() {
    for (; de !== null && !Ni();) zf(de)
  }

  function zf(e) {
    var t = Wd(e.alternate, e, vl);
    e.memoizedProps = e.pendingProps, t === null ? js(e) : de = t
  }

  function Df(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = qd(l, t, t.pendingProps, t.type, void 0, ge);
        break;
      case 11:
        t = qd(l, t, t.pendingProps, t.type.render, t.ref, ge);
        break;
      case 5:
        Jr(t);
      default:
        Fd(l, t), t = de = ju(t, vl), t = Wd(l, t, vl)
    }
    e.memoizedProps = e.pendingProps, t === null ? js(e) : de = t
  }

  function on(e, t, l, a) {
    ul = fa = null, Jr(t), $a = null, kn = 0;
    var i = t.return;
    try {
      if (hh(e, i, t, l, ge)) {
        Ve = 1, cs(e, Ut(l, e.current)), de = null;
        return
      }
    } catch (s) {
      if (i !== null) throw de = i, s;
      Ve = 1, cs(e, Ut(l, e.current)), de = null;
      return
    }
    t.flags & 32768 ? (be || a === 1 ? e = !0 : nn || (ge & 536870912) !== 0 ? e = !1 : (Hl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Nt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Nf(t, e)) : js(t)
  }

  function js(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Nf(t, Hl);
        return
      }
      e = t.return;
      var l = yh(t.alternate, t, vl);
      if (l !== null) {
        de = l;
        return
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return
      }
      de = t = e
    } while (t !== null);
    Ve === 0 && (Ve = 5)
  }

  function Nf(e, t) {
    do {
      var l = bh(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, de = l;
        return
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        de = e;
        return
      }
      de = e = l
    } while (e !== null);
    Ve = 6, de = null
  }

  function Af(e, t, l, a, i, s, r, u, m) {
    e.cancelPendingCommit = null;
    do Ss(); while (Pe !== 0);
    if ((De & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (s = t.lanes | t.childLanes, s |= zr, i0(e, l, s, r, u, m), e === Oe && (de = Oe = null, ge = 0), rn = t, Gl = e, jl = l, Rc = s, Mc = i, gf = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Eh(oe, function() {
          return Rf(), null
        })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = v.T, v.T = null, i = U.p, U.p = 2, r = De, De |= 4;
        try {
          xh(e, t, l)
        } finally {
          De = r, U.p = i, v.T = a
        }
      }
      Pe = 1, Cf(), wf(), Tf()
    }
  }

  function Cf() {
    if (Pe === 1) {
      Pe = 0;
      var e = Gl,
        t = rn,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = v.T, v.T = null;
        var a = U.p;
        U.p = 2;
        var i = De;
        De |= 4;
        try {
          rf(t, e);
          var s = Zc,
            r = fu(e.containerInfo),
            u = s.focusedElem,
            m = s.selectionRange;
          if (r !== u && u && u.ownerDocument && du(u.ownerDocument.documentElement, u)) {
            if (m !== null && br(u)) {
              var S = m.start,
                T = m.end;
              if (T === void 0 && (T = S), "selectionStart" in u) u.selectionStart = S, u.selectionEnd = Math.min(T, u.value.length);
              else {
                var M = u.ownerDocument || document,
                  z = M && M.defaultView || window;
                if (z.getSelection) {
                  var D = z.getSelection(),
                    F = u.textContent.length,
                    ee = Math.min(m.start, F),
                    Re = m.end === void 0 ? ee : Math.min(m.end, F);
                  !D.extend && ee > Re && (r = Re, Re = ee, ee = r);
                  var y = uu(u, ee),
                    g = uu(u, Re);
                  if (y && g && (D.rangeCount !== 1 || D.anchorNode !== y.node || D.anchorOffset !== y.offset || D.focusNode !== g.node || D.focusOffset !== g.offset)) {
                    var j = M.createRange();
                    j.setStart(y.node, y.offset), D.removeAllRanges(), ee > Re ? (D.addRange(j), D.extend(g.node, g.offset)) : (j.setEnd(g.node, g.offset), D.addRange(j))
                  }
                }
              }
            }
            for (M = [], D = u; D = D.parentNode;) D.nodeType === 1 && M.push({
              element: D,
              left: D.scrollLeft,
              top: D.scrollTop
            });
            for (typeof u.focus == "function" && u.focus(), u = 0; u < M.length; u++) {
              var R = M[u];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top
            }
          }
          Bs = !!Wc, Zc = Wc = null
        } finally {
          De = i, U.p = a, v.T = l
        }
      }
      e.current = t, Pe = 2
    }
  }

  function wf() {
    if (Pe === 2) {
      Pe = 0;
      var e = Gl,
        t = rn,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = v.T, v.T = null;
        var a = U.p;
        U.p = 2;
        var i = De;
        De |= 4;
        try {
          tf(e, t.alternate, t)
        } finally {
          De = i, U.p = a, v.T = l
        }
      }
      Pe = 3
    }
  }

  function Tf() {
    if (Pe === 4 || Pe === 3) {
      Pe = 0, Ai();
      var e = Gl,
        t = rn,
        l = jl,
        a = gf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Pe = 5 : (Pe = 0, rn = Gl = null, Ef(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (ql = null), Ps(l), t = t.stateNode, Le && typeof Le.onCommitFiberRoot == "function") try {
        Le.onCommitFiberRoot(Ue, t, void 0, (t.current.flags & 128) === 128)
      } catch {}
      if (a !== null) {
        t = v.T, i = U.p, U.p = 2, v.T = null;
        try {
          for (var s = e.onRecoverableError, r = 0; r < a.length; r++) {
            var u = a[r];
            s(u.value, {
              componentStack: u.stack
            })
          }
        } finally {
          v.T = t, U.p = i
        }
      }(jl & 3) !== 0 && Ss(), ll(e), i = e.pendingLanes, (l & 261930) !== 0 && (i & 42) !== 0 ? e === Uc ? li++ : (li = 0, Uc = e) : li = 0, ai(0)
    }
  }

  function Ef(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ln(t)))
  }

  function Ss() {
    return Cf(), wf(), Tf(), Rf()
  }

  function Rf() {
    if (Pe !== 5) return !1;
    var e = Gl,
      t = Rc;
    Rc = 0;
    var l = Ps(jl),
      a = v.T,
      i = U.p;
    try {
      U.p = 32 > l ? 32 : l, v.T = null, l = Mc, Mc = null;
      var s = Gl,
        r = jl;
      if (Pe = 0, rn = Gl = null, jl = 0, (De & 6) !== 0) throw Error(o(331));
      var u = De;
      if (De |= 4, ff(s.current), of(s, s.current, r, l), De = u, ai(0, !1), Le && typeof Le.onPostCommitFiberRoot == "function") try {
        Le.onPostCommitFiberRoot(Ue, s)
      } catch {}
      return !0
    } finally {
      U.p = i, v.T = a, Ef(e, t)
    }
  }

  function Mf(e, t, l) {
    t = Ut(l, t), t = dc(e.stateNode, t, 2), e = Bl(e, t, 2), e !== null && (zn(e, 2), ll(e))
  }

  function Ce(e, t, l) {
    if (e.tag === 3) Mf(e, e, l);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Mf(t, e, l);
          break
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ql === null || !ql.has(a))) {
            e = Ut(l, e), l = Md(2), a = Bl(t, l, 2), a !== null && (Ud(l, a, t, e), zn(a, 2), ll(a));
            break
          }
        }
        t = t.return
      }
  }

  function _c(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Sh;
      var i = new Set;
      a.set(t, i)
    } else i = a.get(t), i === void 0 && (i = new Set, a.set(t, i));
    i.has(l) || (wc = !0, i.add(l), e = Ch.bind(null, e, t, l), t.then(e, e))
  }

  function Ch(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Oe === e && (ge & l) === l && (Ve === 4 || Ve === 3 && (ge & 62914560) === ge && 300 > ft() - ps ? (De & 2) === 0 && cn(e, 0) : Tc |= l, sn === ge && (sn = 0)), ll(e)
  }

  function Uf(e, t) {
    t === 0 && (t = Ao()), e = oa(e, t), e !== null && (zn(e, t), ll(e))
  }

  function wh(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), Uf(e, l)
  }

  function Th(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          i = e.memoizedState;
        i !== null && (l = i.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314))
    }
    a !== null && a.delete(t), Uf(e, l)
  }

  function Eh(e, t) {
    return la(e, t)
  }
  var zs = null,
    un = null,
    Lc = !1,
    Ds = !1,
    Hc = !1,
    Ql = 0;

  function ll(e) {
    e !== un && e.next === null && (un === null ? zs = un = e : un = un.next = e), Ds = !0, Lc || (Lc = !0, Mh())
  }

  function ai(e, t) {
    if (!Hc && Ds) {
      Hc = !0;
      do
        for (var l = !1, a = zs; a !== null;) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var s = 0;
            else {
              var r = a.suspendedLanes,
                u = a.pingedLanes;
              s = (1 << 31 - nt(42 | e) + 1) - 1, s &= i & ~(r & ~u), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0
            }
            s !== 0 && (l = !0, Lf(a, s))
          } else s = ge, s = Be(a, a === Oe ? s : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (s & 3) === 0 || na(a, s) || (l = !0, Lf(a, s));
          a = a.next
        }
      while (l);
      Hc = !1
    }
  }

  function Rh() {
    Bf()
  }

  function Bf() {
    Ds = Lc = !1;
    var e = 0;
    Ql !== 0 && Yh() && (e = Ql);
    for (var t = ft(), l = null, a = zs; a !== null;) {
      var i = a.next,
        s = Of(a, t);
      s === 0 ? (a.next = null, l === null ? zs = i : l.next = i, i === null && (un = l)) : (l = a, (e !== 0 || (s & 3) !== 0) && (Ds = !0)), a = i
    }
    Pe !== 0 && Pe !== 5 || ai(e), Ql !== 0 && (Ql = 0)
  }

  function Of(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s;) {
      var r = 31 - nt(s),
        u = 1 << r,
        m = i[r];
      m === -1 ? ((u & l) === 0 || (u & a) !== 0) && (i[r] = n0(u, t)) : m <= t && (e.expiredLanes |= u), s &= ~u
    }
    if (t = Oe, l = ge, l = Be(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, l === 0 || e === t && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && Na(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || na(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && Na(a), Ps(l)) {
        case 2:
        case 8:
          l = Q;
          break;
        case 32:
          l = oe;
          break;
        case 268435456:
          l = Ne;
          break;
        default:
          l = oe
      }
      return a = _f.bind(null, e), l = la(l, a), e.callbackPriority = t, e.callbackNode = l, t
    }
    return a !== null && a !== null && Na(a), e.callbackPriority = 2, e.callbackNode = null, 2
  }

  function _f(e, t) {
    if (Pe !== 0 && Pe !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Ss() && e.callbackNode !== l) return null;
    var a = ge;
    return a = Be(e, e === Oe ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (yf(e, a, t), Of(e, ft()), e.callbackNode != null && e.callbackNode === l ? _f.bind(null, e) : null)
  }

  function Lf(e, t) {
    if (Ss()) return null;
    yf(e, t, !0)
  }

  function Mh() {
    Xh(function() {
      (De & 6) !== 0 ? la(w, Rh) : Bf()
    })
  }

  function kc() {
    if (Ql === 0) {
      var e = Fa;
      e === 0 && (e = wa, wa <<= 1, (wa & 261888) === 0 && (wa = 256)), Ql = e
    }
    return Ql
  }

  function Hf(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Mi("" + e)
  }

  function kf(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e
  }

  function Uh(e, t, l, a, i) {
    if (t === "submit" && l && l.stateNode === i) {
      var s = Hf((i[gt] || null).action),
        r = a.submitter;
      r && (t = (t = r[gt] || null) ? Hf(t.formAction) : r.getAttribute("formAction"), t !== null && (s = t, r = null));
      var u = new _i("action", "action", null, a, i);
      e.push({
        event: u,
        listeners: [{
          instance: null,
          listener: function() {
            if (a.defaultPrevented) {
              if (Ql !== 0) {
                var m = r ? kf(i, r) : new FormData(i);
                ic(l, {
                  pending: !0,
                  data: m,
                  method: i.method,
                  action: s
                }, null, m)
              }
            } else typeof s == "function" && (u.preventDefault(), m = r ? kf(i, r) : new FormData(i), ic(l, {
              pending: !0,
              data: m,
              method: i.method,
              action: s
            }, s, m))
          },
          currentTarget: i
        }]
      })
    }
  }
  for (var qc = 0; qc < Sr.length; qc++) {
    var Gc = Sr[qc],
      Bh = Gc.toLowerCase(),
      Oh = Gc[0].toUpperCase() + Gc.slice(1);
    Yt(Bh, "on" + Oh)
  }
  Yt(gu, "onAnimationEnd"), Yt(pu, "onAnimationIteration"), Yt(yu, "onAnimationStart"), Yt("dblclick", "onDoubleClick"), Yt("focusin", "onFocus"), Yt("focusout", "onBlur"), Yt($0, "onTransitionRun"), Yt(I0, "onTransitionStart"), Yt(P0, "onTransitionCancel"), Yt(bu, "onTransitionEnd"), Ba("onMouseEnter", ["mouseout", "mouseover"]), Ba("onMouseLeave", ["mouseout", "mouseover"]), Ba("onPointerEnter", ["pointerout", "pointerover"]), Ba("onPointerLeave", ["pointerout", "pointerover"]), ia("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ia("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ia("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ia("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ia("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ia("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    _h = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni));

  function qf(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        i = a.event;
      a = a.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var r = a.length - 1; 0 <= r; r--) {
            var u = a[r],
              m = u.instance,
              S = u.currentTarget;
            if (u = u.listener, m !== s && i.isPropagationStopped()) break e;
            s = u, i.currentTarget = S;
            try {
              s(i)
            } catch (T) {
              ki(T)
            }
            i.currentTarget = null, s = m
          } else
            for (r = 0; r < a.length; r++) {
              if (u = a[r], m = u.instance, S = u.currentTarget, u = u.listener, m !== s && i.isPropagationStopped()) break e;
              s = u, i.currentTarget = S;
              try {
                s(i)
              } catch (T) {
                ki(T)
              }
              i.currentTarget = null, s = m
            }
      }
    }
  }

  function fe(e, t) {
    var l = t[er];
    l === void 0 && (l = t[er] = new Set);
    var a = e + "__bubble";
    l.has(a) || (Gf(t, e, 2, !1), l.add(a))
  }

  function Yc(e, t, l) {
    var a = 0;
    t && (a |= 4), Gf(l, e, a, t)
  }
  var Ns = "_reactListening" + Math.random().toString(36).slice(2);

  function Qc(e) {
    if (!e[Ns]) {
      e[Ns] = !0, Uo.forEach(function(l) {
        l !== "selectionchange" && (_h.has(l) || Yc(l, !1, e), Yc(l, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ns] || (t[Ns] = !0, Yc("selectionchange", !1, t))
    }
  }

  function Gf(e, t, l, a) {
    switch (pm(t)) {
      case 2:
        var i = ug;
        break;
      case 8:
        i = dg;
        break;
      default:
        i = no
    }
    l = i.bind(null, t, l, e), i = void 0, !or || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, l, !0) : i !== void 0 ? e.addEventListener(t, l, {
      passive: i
    }) : e.addEventListener(t, l, !1)
  }

  function Xc(e, t, l, a, i) {
    var s = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (;;) {
      if (a === null) return;
      var r = a.tag;
      if (r === 3 || r === 4) {
        var u = a.stateNode.containerInfo;
        if (u === i) break;
        if (r === 4)
          for (r = a.return; r !== null;) {
            var m = r.tag;
            if ((m === 3 || m === 4) && r.stateNode.containerInfo === i) return;
            r = r.return
          }
        for (; u !== null;) {
          if (r = Ra(u), r === null) return;
          if (m = r.tag, m === 5 || m === 6 || m === 26 || m === 27) {
            a = s = r;
            continue e
          }
          u = u.parentNode
        }
      }
      a = a.return
    }
    Vo(function() {
      var S = s,
        T = rr(l),
        M = [];
      e: {
        var z = xu.get(e);
        if (z !== void 0) {
          var D = _i,
            F = e;
          switch (e) {
            case "keypress":
              if (Bi(l) === 0) break e;
            case "keydown":
            case "keyup":
              D = T0;
              break;
            case "focusin":
              F = "focus", D = mr;
              break;
            case "focusout":
              F = "blur", D = mr;
              break;
            case "beforeblur":
            case "afterblur":
              D = mr;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = Fo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = y0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = M0;
              break;
            case gu:
            case pu:
            case yu:
              D = v0;
              break;
            case bu:
              D = B0;
              break;
            case "scroll":
            case "scrollend":
              D = g0;
              break;
            case "wheel":
              D = _0;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = S0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Jo;
              break;
            case "toggle":
            case "beforetoggle":
              D = H0
          }
          var ee = (t & 4) !== 0,
            Re = !ee && (e === "scroll" || e === "scrollend"),
            y = ee ? z !== null ? z + "Capture" : null : z;
          ee = [];
          for (var g = S, j; g !== null;) {
            var R = g;
            if (j = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || j === null || y === null || (R = An(g, y), R != null && ee.push(ii(g, R, j))), Re) break;
            g = g.return
          }
          0 < ee.length && (z = new D(z, F, null, l, T), M.push({
            event: z,
            listeners: ee
          }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", z && l !== sr && (F = l.relatedTarget || l.fromElement) && (Ra(F) || F[Ea])) break e;
          if ((D || z) && (z = T.window === T ? T : (z = T.ownerDocument) ? z.defaultView || z.parentWindow : window, D ? (F = l.relatedTarget || l.toElement, D = S, F = F ? Ra(F) : null, F !== null && (Re = p(F), ee = F.tag, F !== Re || ee !== 5 && ee !== 27 && ee !== 6) && (F = null)) : (D = null, F = S), D !== F)) {
            if (ee = Fo, R = "onMouseLeave", y = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Jo, R = "onPointerLeave", y = "onPointerEnter", g = "pointer"), Re = D == null ? z : Nn(D), j = F == null ? z : Nn(F), z = new ee(R, g + "leave", D, l, T), z.target = Re, z.relatedTarget = j, R = null, Ra(T) === S && (ee = new ee(y, g + "enter", F, l, T), ee.target = j, ee.relatedTarget = Re, R = ee), Re = R, D && F) t: {
              for (ee = Lh, y = D, g = F, j = 0, R = y; R; R = ee(R)) j++;R = 0;
              for (var P = g; P; P = ee(P)) R++;
              for (; 0 < j - R;) y = ee(y),
              j--;
              for (; 0 < R - j;) g = ee(g),
              R--;
              for (; j--;) {
                if (y === g || g !== null && y === g.alternate) {
                  ee = y;
                  break t
                }
                y = ee(y), g = ee(g)
              }
              ee = null
            }
            else ee = null;
            D !== null && Yf(M, z, D, ee, !1), F !== null && Re !== null && Yf(M, Re, F, ee, !0)
          }
        }
        e: {
          if (z = S ? Nn(S) : window, D = z.nodeName && z.nodeName.toLowerCase(), D === "select" || D === "input" && z.type === "file") var Se = nu;
          else if (lu(z))
            if (iu) Se = F0;
            else {
              Se = W0;
              var K = V0
            }
          else D = z.nodeName,
          !D || D.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? S && ir(S.elementType) && (Se = nu) : Se = Z0;
          if (Se && (Se = Se(e, S))) {
            au(M, Se, l, T);
            break e
          }
          K && K(e, z, S),
          e === "focusout" && S && z.type === "number" && S.memoizedProps.value != null && nr(z, "number", z.value)
        }
        switch (K = S ? Nn(S) : window, e) {
          case "focusin":
            (lu(K) || K.contentEditable === "true") && (qa = K, xr = S, Bn = null);
            break;
          case "focusout":
            Bn = xr = qa = null;
            break;
          case "mousedown":
            vr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vr = !1, mu(M, l, T);
            break;
          case "selectionchange":
            if (J0) break;
          case "keydown":
          case "keyup":
            mu(M, l, T)
        }
        var ue;
        if (gr) e: {
          switch (e) {
            case "compositionstart":
              var pe = "onCompositionStart";
              break e;
            case "compositionend":
              pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              pe = "onCompositionUpdate";
              break e
          }
          pe = void 0
        }
        else ka ? eu(e, l) && (pe = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (pe = "onCompositionStart");pe && ($o && l.locale !== "ko" && (ka || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && ka && (ue = Wo()) : (Cl = T, ur = "value" in Cl ? Cl.value : Cl.textContent, ka = !0)), K = As(S, pe), 0 < K.length && (pe = new Ko(pe, e, null, l, T), M.push({
          event: pe,
          listeners: K
        }), ue ? pe.data = ue : (ue = tu(l), ue !== null && (pe.data = ue)))),
        (ue = q0 ? G0(e, l) : Y0(e, l)) && (pe = As(S, "onBeforeInput"), 0 < pe.length && (K = new Ko("onBeforeInput", "beforeinput", null, l, T), M.push({
          event: K,
          listeners: pe
        }), K.data = ue)),
        Uh(M, e, S, l, T)
      }
      qf(M, t)
    })
  }

  function ii(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    }
  }

  function As(e, t) {
    for (var l = t + "Capture", a = []; e !== null;) {
      var i = e,
        s = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || s === null || (i = An(e, l), i != null && a.unshift(ii(e, i, s)), i = An(e, t), i != null && a.push(ii(e, i, s))), e.tag === 3) return a;
      e = e.return
    }
    return []
  }

  function Lh(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
    return e || null
  }

  function Yf(e, t, l, a, i) {
    for (var s = t._reactName, r = []; l !== null && l !== a;) {
      var u = l,
        m = u.alternate,
        S = u.stateNode;
      if (u = u.tag, m !== null && m === a) break;
      u !== 5 && u !== 26 && u !== 27 || S === null || (m = S, i ? (S = An(l, s), S != null && r.unshift(ii(l, S, m))) : i || (S = An(l, s), S != null && r.push(ii(l, S, m)))), l = l.return
    }
    r.length !== 0 && e.push({
      event: t,
      listeners: r
    })
  }
  var Hh = /\r\n?/g,
    kh = /\u0000|\uFFFD/g;

  function Qf(e) {
    return (typeof e == "string" ? e : "" + e).replace(Hh, `
`).replace(kh, "")
  }

  function Xf(e, t) {
    return t = Qf(t), Qf(e) === t
  }

  function Ee(e, t, l, a, i, s) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || _a(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && _a(e, "" + a);
        break;
      case "className":
        Ei(e, "class", a);
        break;
      case "tabIndex":
        Ei(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ei(e, l, a);
        break;
      case "style":
        Qo(e, a, s);
        break;
      case "data":
        if (t !== "object") {
          Ei(e, "data", a);
          break
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break
        }
        a = Mi("" + a), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break
        } else typeof s == "function" && (l === "formAction" ? (t !== "input" && Ee(e, t, "name", i.name, i, null), Ee(e, t, "formEncType", i.formEncType, i, null), Ee(e, t, "formMethod", i.formMethod, i, null), Ee(e, t, "formTarget", i.formTarget, i, null)) : (Ee(e, t, "encType", i.encType, i, null), Ee(e, t, "method", i.method, i, null), Ee(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break
        }
        a = Mi("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = sl);
        break;
      case "onScroll":
        a != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && fe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (l = a.__html, l != null) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = l
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break
        }
        l = Mi("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
        break;
      case "popover":
        fe("beforetoggle", e), fe("toggle", e), Ti(e, "popover", a);
        break;
      case "xlinkActuate":
        il(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        il(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        il(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        il(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        il(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        il(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        il(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        il(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        il(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ti(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = m0.get(l) || l, Ti(e, l, a))
    }
  }

  function Vc(e, t, l, a, i, s) {
    switch (l) {
      case "style":
        Qo(e, a, s);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
          if (l = a.__html, l != null) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = l
          }
        }
        break;
      case "children":
        typeof a == "string" ? _a(e, a) : (typeof a == "number" || typeof a == "bigint") && _a(e, "" + a);
        break;
      case "onScroll":
        a != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && fe("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = sl);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Bo.hasOwnProperty(l)) e: {
          if (l[0] === "o" && l[1] === "n" && (i = l.endsWith("Capture"), t = l.slice(2, i ? l.length - 7 : void 0), s = e[gt] || null, s = s != null ? s[l] : null, typeof s == "function" && e.removeEventListener(t, s, i), typeof a == "function")) {
            typeof s != "function" && s !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, i);
            break e
          }
          l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Ti(e, l, a)
        }
    }
  }

  function ot(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        fe("error", e), fe("load", e);
        var a = !1,
          i = !1,
          s;
        for (s in l)
          if (l.hasOwnProperty(s)) {
            var r = l[s];
            if (r != null) switch (s) {
              case "src":
                a = !0;
                break;
              case "srcSet":
                i = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Ee(e, t, s, r, l, null)
            }
          } i && Ee(e, t, "srcSet", l.srcSet, l, null), a && Ee(e, t, "src", l.src, l, null);
        return;
      case "input":
        fe("invalid", e);
        var u = s = r = i = null,
          m = null,
          S = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var T = l[a];
            if (T != null) switch (a) {
              case "name":
                i = T;
                break;
              case "type":
                r = T;
                break;
              case "checked":
                m = T;
                break;
              case "defaultChecked":
                S = T;
                break;
              case "value":
                s = T;
                break;
              case "defaultValue":
                u = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(o(137, t));
                break;
              default:
                Ee(e, t, a, T, l, null)
            }
          } ko(e, s, u, m, S, r, i, !1);
        return;
      case "select":
        fe("invalid", e), a = r = s = null;
        for (i in l)
          if (l.hasOwnProperty(i) && (u = l[i], u != null)) switch (i) {
            case "value":
              s = u;
              break;
            case "defaultValue":
              r = u;
              break;
            case "multiple":
              a = u;
            default:
              Ee(e, t, i, u, l, null)
          }
        t = s, l = r, e.multiple = !!a, t != null ? Oa(e, !!a, t, !1) : l != null && Oa(e, !!a, l, !0);
        return;
      case "textarea":
        fe("invalid", e), s = i = a = null;
        for (r in l)
          if (l.hasOwnProperty(r) && (u = l[r], u != null)) switch (r) {
            case "value":
              a = u;
              break;
            case "defaultValue":
              i = u;
              break;
            case "children":
              s = u;
              break;
            case "dangerouslySetInnerHTML":
              if (u != null) throw Error(o(91));
              break;
            default:
              Ee(e, t, r, u, l, null)
          }
        Go(e, a, i, s);
        return;
      case "option":
        for (m in l)
          if (l.hasOwnProperty(m) && (a = l[m], a != null)) switch (m) {
            case "selected":
              e.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              Ee(e, t, m, a, l, null)
          }
        return;
      case "dialog":
        fe("beforetoggle", e), fe("toggle", e), fe("cancel", e), fe("close", e);
        break;
      case "iframe":
      case "object":
        fe("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ni.length; a++) fe(ni[a], e);
        break;
      case "image":
        fe("error", e), fe("load", e);
        break;
      case "details":
        fe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        fe("error", e), fe("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (S in l)
          if (l.hasOwnProperty(S) && (a = l[S], a != null)) switch (S) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(o(137, t));
            default:
              Ee(e, t, S, a, l, null)
          }
        return;
      default:
        if (ir(t)) {
          for (T in l) l.hasOwnProperty(T) && (a = l[T], a !== void 0 && Vc(e, t, T, a, l, void 0));
          return
        }
    }
    for (u in l) l.hasOwnProperty(u) && (a = l[u], a != null && Ee(e, t, u, a, l, null))
  }

  function qh(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          s = null,
          r = null,
          u = null,
          m = null,
          S = null,
          T = null;
        for (D in l) {
          var M = l[D];
          if (l.hasOwnProperty(D) && M != null) switch (D) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              m = M;
            default:
              a.hasOwnProperty(D) || Ee(e, t, D, null, a, M)
          }
        }
        for (var z in a) {
          var D = a[z];
          if (M = l[z], a.hasOwnProperty(z) && (D != null || M != null)) switch (z) {
            case "type":
              s = D;
              break;
            case "name":
              i = D;
              break;
            case "checked":
              S = D;
              break;
            case "defaultChecked":
              T = D;
              break;
            case "value":
              r = D;
              break;
            case "defaultValue":
              u = D;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (D != null) throw Error(o(137, t));
              break;
            default:
              D !== M && Ee(e, t, z, D, a, M)
          }
        }
        ar(e, r, u, m, S, T, s, i);
        return;
      case "select":
        D = r = u = z = null;
        for (s in l)
          if (m = l[s], l.hasOwnProperty(s) && m != null) switch (s) {
            case "value":
              break;
            case "multiple":
              D = m;
            default:
              a.hasOwnProperty(s) || Ee(e, t, s, null, a, m)
          }
        for (i in a)
          if (s = a[i], m = l[i], a.hasOwnProperty(i) && (s != null || m != null)) switch (i) {
            case "value":
              z = s;
              break;
            case "defaultValue":
              u = s;
              break;
            case "multiple":
              r = s;
            default:
              s !== m && Ee(e, t, i, s, a, m)
          }
        t = u, l = r, a = D, z != null ? Oa(e, !!l, z, !1) : !!a != !!l && (t != null ? Oa(e, !!l, t, !0) : Oa(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        D = z = null;
        for (u in l)
          if (i = l[u], l.hasOwnProperty(u) && i != null && !a.hasOwnProperty(u)) switch (u) {
            case "value":
              break;
            case "children":
              break;
            default:
              Ee(e, t, u, null, a, i)
          }
        for (r in a)
          if (i = a[r], s = l[r], a.hasOwnProperty(r) && (i != null || s != null)) switch (r) {
            case "value":
              z = i;
              break;
            case "defaultValue":
              D = i;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (i != null) throw Error(o(91));
              break;
            default:
              i !== s && Ee(e, t, r, i, a, s)
          }
        qo(e, z, D);
        return;
      case "option":
        for (var F in l)
          if (z = l[F], l.hasOwnProperty(F) && z != null && !a.hasOwnProperty(F)) switch (F) {
            case "selected":
              e.selected = !1;
              break;
            default:
              Ee(e, t, F, null, a, z)
          }
        for (m in a)
          if (z = a[m], D = l[m], a.hasOwnProperty(m) && z !== D && (z != null || D != null)) switch (m) {
            case "selected":
              e.selected = z && typeof z != "function" && typeof z != "symbol";
              break;
            default:
              Ee(e, t, m, z, a, D)
          }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ee in l) z = l[ee], l.hasOwnProperty(ee) && z != null && !a.hasOwnProperty(ee) && Ee(e, t, ee, null, a, z);
        for (S in a)
          if (z = a[S], D = l[S], a.hasOwnProperty(S) && z !== D && (z != null || D != null)) switch (S) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (z != null) throw Error(o(137, t));
              break;
            default:
              Ee(e, t, S, z, a, D)
          }
        return;
      default:
        if (ir(t)) {
          for (var Re in l) z = l[Re], l.hasOwnProperty(Re) && z !== void 0 && !a.hasOwnProperty(Re) && Vc(e, t, Re, void 0, a, z);
          for (T in a) z = a[T], D = l[T], !a.hasOwnProperty(T) || z === D || z === void 0 && D === void 0 || Vc(e, t, T, z, a, D);
          return
        }
    }
    for (var y in l) z = l[y], l.hasOwnProperty(y) && z != null && !a.hasOwnProperty(y) && Ee(e, t, y, null, a, z);
    for (M in a) z = a[M], D = l[M], !a.hasOwnProperty(M) || z === D || z == null && D == null || Ee(e, t, M, z, a, D)
  }

  function Vf(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1
    }
  }

  function Gh() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var i = l[a],
          s = i.transferSize,
          r = i.initiatorType,
          u = i.duration;
        if (s && u && Vf(r)) {
          for (r = 0, u = i.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a],
              S = m.startTime;
            if (S > u) break;
            var T = m.transferSize,
              M = m.initiatorType;
            T && Vf(M) && (m = m.responseEnd, r += T * (m < u ? 1 : (u - S) / (m - S)))
          }
          if (--a, t += 8 * (s + r) / (i.duration / 1e3), e++, 10 < e) break
        }
      }
      if (0 < e) return t / e / 1e6
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5
  }
  var Wc = null,
    Zc = null;

  function Cs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument
  }

  function Wf(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0
    }
  }

  function Zf(e, t) {
    if (e === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0
    }
    return e === 1 && t === "foreignObject" ? 0 : e
  }

  function Fc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
  }
  var Kc = null;

  function Yh() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Kc ? !1 : (Kc = e, !0) : (Kc = null, !1)
  }
  var Ff = typeof setTimeout == "function" ? setTimeout : void 0,
    Qh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Kf = typeof Promise == "function" ? Promise : void 0,
    Xh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kf < "u" ? function(e) {
      return Kf.resolve(null).then(e).catch(Vh)
    } : Ff;

  function Vh(e) {
    setTimeout(function() {
      throw e
    })
  }

  function Xl(e) {
    return e === "head"
  }

  function Jf(e, t) {
    var l = t,
      a = 0;
    do {
      var i = l.nextSibling;
      if (e.removeChild(l), i && i.nodeType === 8)
        if (l = i.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(i), hn(t);
            return
          }
          a--
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
      else if (l === "html") si(e.ownerDocument.documentElement);
      else if (l === "head") {
        l = e.ownerDocument.head, si(l);
        for (var s = l.firstChild; s;) {
          var r = s.nextSibling,
            u = s.nodeName;
          s[Dn] || u === "SCRIPT" || u === "STYLE" || u === "LINK" && s.rel.toLowerCase() === "stylesheet" || l.removeChild(s), s = r
        }
      } else l === "body" && si(e.ownerDocument.body);
      l = i
    } while (l);
    hn(t)
  }

  function $f(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (e === 0) break;
          e--
        } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = a
    } while (l)
  }

  function Jc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jc(l), tr(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue
      }
      e.removeChild(l)
    }
  }

  function Wh(e, t, l, a) {
    for (; e.nodeType === 1;) {
      var i = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
      } else if (a) {
        if (!e[Dn]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (s !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (s = e.getAttribute("src"), (s !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e
        }
      } else if (t === "input" && e.type === "hidden") {
        var s = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === s) return e
      } else return e;
      if (e = Ht(e.nextSibling), e === null) break
    }
    return null
  }

  function Zh(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Ht(e.nextSibling), e === null)) return null;
    return e
  }

  function If(e, t) {
    for (; e.nodeType !== 8;)
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ht(e.nextSibling), e === null)) return null;
    return e
  }

  function $c(e) {
    return e.data === "$?" || e.data === "$~"
  }

  function Ic(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
  }

  function Fh(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function() {
        t(), l.removeEventListener("DOMContentLoaded", a)
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a
    }
  }

  function Ht(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null
      }
    }
    return e
  }
  var Pc = null;

  function Pf(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return Ht(e.nextSibling);
          t--
        } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++
      }
      e = e.nextSibling
    }
    return null
  }

  function em(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--
        } else l !== "/$" && l !== "/&" || t++
      }
      e = e.previousSibling
    }
    return null
  }

  function tm(e, t, l) {
    switch (t = Cs(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451))
    }
  }

  function si(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    tr(e)
  }
  var kt = new Map,
    lm = new Set;

  function ws(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
  }
  var Sl = U.d;
  U.d = {
    f: Kh,
    r: Jh,
    D: $h,
    C: Ih,
    L: Ph,
    m: eg,
    X: lg,
    S: tg,
    M: ag
  };

  function Kh() {
    var e = Sl.f(),
      t = xs();
    return e || t
  }

  function Jh(e) {
    var t = Ma(e);
    t !== null && t.tag === 5 && t.type === "form" ? bd(t) : Sl.r(e)
  }
  var dn = typeof document > "u" ? null : document;

  function am(e, t, l) {
    var a = dn;
    if (a && typeof t == "string" && t) {
      var i = Rt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof l == "string" && (i += '[crossorigin="' + l + '"]'), lm.has(i) || (lm.add(i), e = {
        rel: e,
        crossOrigin: l,
        href: t
      }, a.querySelector(i) === null && (t = a.createElement("link"), ot(t, "link", e), lt(t), a.head.appendChild(t)))
    }
  }

  function $h(e) {
    Sl.D(e), am("dns-prefetch", e, null)
  }

  function Ih(e, t) {
    Sl.C(e, t), am("preconnect", e, t)
  }

  function Ph(e, t, l) {
    Sl.L(e, t, l);
    var a = dn;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Rt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (i += '[imagesrcset="' + Rt(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (i += '[imagesizes="' + Rt(l.imageSizes) + '"]')) : i += '[href="' + Rt(e) + '"]';
      var s = i;
      switch (t) {
        case "style":
          s = fn(e);
          break;
        case "script":
          s = mn(e)
      }
      kt.has(s) || (e = E({
        rel: "preload",
        href: t === "image" && l && l.imageSrcSet ? void 0 : e,
        as: t
      }, l), kt.set(s, e), a.querySelector(i) !== null || t === "style" && a.querySelector(ri(s)) || t === "script" && a.querySelector(ci(s)) || (t = a.createElement("link"), ot(t, "link", e), lt(t), a.head.appendChild(t)))
    }
  }

  function eg(e, t) {
    Sl.m(e, t);
    var l = dn;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        i = 'link[rel="modulepreload"][as="' + Rt(a) + '"][href="' + Rt(e) + '"]',
        s = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = mn(e)
      }
      if (!kt.has(s) && (e = E({
          rel: "modulepreload",
          href: e
        }, t), kt.set(s, e), l.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(ci(s))) return
        }
        a = l.createElement("link"), ot(a, "link", e), lt(a), l.head.appendChild(a)
      }
    }
  }

  function tg(e, t, l) {
    Sl.S(e, t, l);
    var a = dn;
    if (a && e) {
      var i = Ua(a).hoistableStyles,
        s = fn(e);
      t = t || "default";
      var r = i.get(s);
      if (!r) {
        var u = {
          loading: 0,
          preload: null
        };
        if (r = a.querySelector(ri(s))) u.loading = 5;
        else {
          e = E({
            rel: "stylesheet",
            href: e,
            "data-precedence": t
          }, l), (l = kt.get(s)) && eo(e, l);
          var m = r = a.createElement("link");
          lt(m), ot(m, "link", e), m._p = new Promise(function(S, T) {
            m.onload = S, m.onerror = T
          }), m.addEventListener("load", function() {
            u.loading |= 1
          }), m.addEventListener("error", function() {
            u.loading |= 2
          }), u.loading |= 4, Ts(r, t, a)
        }
        r = {
          type: "stylesheet",
          instance: r,
          count: 1,
          state: u
        }, i.set(s, r)
      }
    }
  }

  function lg(e, t) {
    Sl.X(e, t);
    var l = dn;
    if (l && e) {
      var a = Ua(l).hoistableScripts,
        i = mn(e),
        s = a.get(i);
      s || (s = l.querySelector(ci(i)), s || (e = E({
        src: e,
        async: !0
      }, t), (t = kt.get(i)) && to(e, t), s = l.createElement("script"), lt(s), ot(s, "link", e), l.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(i, s))
    }
  }

  function ag(e, t) {
    Sl.M(e, t);
    var l = dn;
    if (l && e) {
      var a = Ua(l).hoistableScripts,
        i = mn(e),
        s = a.get(i);
      s || (s = l.querySelector(ci(i)), s || (e = E({
        src: e,
        async: !0,
        type: "module"
      }, t), (t = kt.get(i)) && to(e, t), s = l.createElement("script"), lt(s), ot(s, "link", e), l.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, a.set(i, s))
    }
  }

  function nm(e, t, l, a) {
    var i = (i = ht.current) ? ws(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = fn(l.href), l = Ua(i).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = fn(l.href);
          var s = Ua(i).hoistableStyles,
            r = s.get(e);
          if (r || (i = i.ownerDocument || i, r = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, s.set(e, r), (s = i.querySelector(ri(e))) && !s._p && (r.instance = s, r.state.loading = 5), kt.has(e) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, kt.set(e, l), s || ng(i, e, l, r.state))), t && a === null) throw Error(o(528, ""));
          return r
        }
        if (t && a !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = mn(l), l = Ua(i).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(o(444, e))
    }
  }

  function fn(e) {
    return 'href="' + Rt(e) + '"'
  }

  function ri(e) {
    return 'link[rel="stylesheet"][' + e + "]"
  }

  function im(e) {
    return E({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    })
  }

  function ng(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1
    }), t.addEventListener("error", function() {
      return a.loading |= 2
    }), ot(t, "link", l), lt(t), e.head.appendChild(t))
  }

  function mn(e) {
    return '[src="' + Rt(e) + '"]'
  }

  function ci(e) {
    return "script[async]" + e
  }

  function sm(e, t, l) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = e.querySelector('style[data-href~="' + Rt(l.href) + '"]');
        if (a) return t.instance = a, lt(a), a;
        var i = E({}, l, {
          "data-href": l.href,
          "data-precedence": l.precedence,
          href: null,
          precedence: null
        });
        return a = (e.ownerDocument || e).createElement("style"), lt(a), ot(a, "style", i), Ts(a, l.precedence, e), t.instance = a;
      case "stylesheet":
        i = fn(l.href);
        var s = e.querySelector(ri(i));
        if (s) return t.state.loading |= 4, t.instance = s, lt(s), s;
        a = im(l), (i = kt.get(i)) && eo(a, i), s = (e.ownerDocument || e).createElement("link"), lt(s);
        var r = s;
        return r._p = new Promise(function(u, m) {
          r.onload = u, r.onerror = m
        }), ot(s, "link", a), t.state.loading |= 4, Ts(s, l.precedence, e), t.instance = s;
      case "script":
        return s = mn(l.src), (i = e.querySelector(ci(s))) ? (t.instance = i, lt(i), i) : (a = l, (i = kt.get(s)) && (a = E({}, l), to(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), lt(i), ot(i, "link", a), e.head.appendChild(i), t.instance = i);
      case "void":
        return null;
      default:
        throw Error(o(443, t.type))
    } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Ts(a, l.precedence, e));
    return t.instance
  }

  function Ts(e, t, l) {
    for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = a.length ? a[a.length - 1] : null, s = i, r = 0; r < a.length; r++) {
      var u = a[r];
      if (u.dataset.precedence === t) s = u;
      else if (s !== i) break
    }
    s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild))
  }

  function eo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
  }

  function to(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
  }
  var Es = null;

  function rm(e, t, l) {
    if (Es === null) {
      var a = new Map,
        i = Es = new Map;
      i.set(l, a)
    } else i = Es, a = i.get(l), a || (a = new Map, i.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), i = 0; i < l.length; i++) {
      var s = l[i];
      if (!(s[Dn] || s[it] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var r = s.getAttribute(t) || "";
        r = e + r;
        var u = a.get(r);
        u ? u.push(s) : a.set(r, [s])
      }
    }
    return a
  }

  function cm(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
  }

  function ig(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
    }
    return !1
  }

  function om(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
  }

  function sg(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var i = fn(a.href),
          s = t.querySelector(ri(i));
        if (s) {
          t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Rs.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = s, lt(s);
          return
        }
        s = t.ownerDocument || t, a = im(a), (i = kt.get(i)) && eo(a, i), s = s.createElement("link"), lt(s);
        var r = s;
        r._p = new Promise(function(u, m) {
          r.onload = u, r.onerror = m
        }), ot(s, "link", a), l.instance = s
      }
      e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Rs.bind(e), t.addEventListener("load", l), t.addEventListener("error", l))
    }
  }
  var lo = 0;

  function rg(e, t) {
    return e.stylesheets && e.count === 0 && Us(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && Us(e, e.stylesheets), e.unsuspend) {
          var s = e.unsuspend;
          e.unsuspend = null, s()
        }
      }, 6e4 + t);
      0 < e.imgBytes && lo === 0 && (lo = 62500 * Gh());
      var i = setTimeout(function() {
        if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Us(e, e.stylesheets), e.unsuspend)) {
          var s = e.unsuspend;
          e.unsuspend = null, s()
        }
      }, (e.imgBytes > lo ? 50 : 800) + t);
      return e.unsuspend = l,
        function() {
          e.unsuspend = null, clearTimeout(a), clearTimeout(i)
        }
    } : null
  }

  function Rs() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Us(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e()
      }
    }
  }
  var Ms = null;

  function Us(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ms = new Map, t.forEach(cg, e), Ms = null, Rs.call(e))
  }

  function cg(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Ms.get(e);
      if (l) var a = l.get(null);
      else {
        l = new Map, Ms.set(e, l);
        for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < i.length; s++) {
          var r = i[s];
          (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") && (l.set(r.dataset.precedence, r), a = r)
        }
        a && l.set(null, a)
      }
      i = t.instance, r = i.getAttribute("data-precedence"), s = l.get(r) || a, s === a && l.set(null, i), l.set(r, i), this.count++, a = Rs.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), s ? s.parentNode.insertBefore(i, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4
    }
  }
  var oi = {
    $$typeof: ne,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };

  function og(e, t, l, a, i, s, r, u, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $s(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $s(0), this.hiddenUpdates = $s(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = s, this.onRecoverableError = r, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = new Map
  }

  function um(e, t, l, a, i, s, r, u, m, S, T, M) {
    return e = new og(e, t, l, r, m, S, T, M, u), t = 1, s === !0 && (t |= 24), s = Dt(3, null, null, t), e.current = s, s.stateNode = e, t = Or(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, kr(s), e
  }

  function dm(e) {
    return e ? (e = Qa, e) : Qa
  }

  function fm(e, t, l, a, i, s) {
    i = dm(i), a.context === null ? a.context = i : a.pendingContext = i, a = Ul(t), a.payload = {
      element: l
    }, s = s === void 0 ? null : s, s !== null && (a.callback = s), l = Bl(e, a, t), l !== null && (jt(l, e, t), Gn(l, e, t))
  }

  function mm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t
    }
  }

  function ao(e, t) {
    mm(e, t), (e = e.alternate) && mm(e, t)
  }

  function hm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = oa(e, 67108864);
      t !== null && jt(t, e, 67108864), ao(e, 67108864)
    }
  }

  function gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Tt();
      t = Is(t);
      var l = oa(e, t);
      l !== null && jt(l, e, t), ao(e, t)
    }
  }
  var Bs = !0;

  function ug(e, t, l, a) {
    var i = v.T;
    v.T = null;
    var s = U.p;
    try {
      U.p = 2, no(e, t, l, a)
    } finally {
      U.p = s, v.T = i
    }
  }

  function dg(e, t, l, a) {
    var i = v.T;
    v.T = null;
    var s = U.p;
    try {
      U.p = 8, no(e, t, l, a)
    } finally {
      U.p = s, v.T = i
    }
  }

  function no(e, t, l, a) {
    if (Bs) {
      var i = io(a);
      if (i === null) Xc(e, t, a, Os, l), ym(e, a);
      else if (mg(i, e, t, l, a)) a.stopPropagation();
      else if (ym(e, a), t & 4 && -1 < fg.indexOf(e)) {
        for (; i !== null;) {
          var s = Ma(i);
          if (s !== null) switch (s.tag) {
            case 3:
              if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                var r = It(s.pendingLanes);
                if (r !== 0) {
                  var u = s;
                  for (u.pendingLanes |= 2, u.entangledLanes |= 2; r;) {
                    var m = 1 << 31 - nt(r);
                    u.entanglements[1] |= m, r &= ~m
                  }
                  ll(s), (De & 6) === 0 && (ys = ft() + 500, ai(0))
                }
              }
              break;
            case 31:
            case 13:
              u = oa(s, 2), u !== null && jt(u, s, 2), xs(), ao(s, 2)
          }
          if (s = io(a), s === null && Xc(e, t, a, Os, l), s === i) break;
          i = s
        }
        i !== null && a.stopPropagation()
      } else Xc(e, t, a, null, l)
    }
  }

  function io(e) {
    return e = rr(e), so(e)
  }
  var Os = null;

  function so(e) {
    if (Os = null, e = Ra(e), e !== null) {
      var t = p(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = x(t), e !== null) return e;
          e = null
        } else if (l === 31) {
          if (e = N(t), e !== null) return e;
          e = null
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null
        } else t !== e && (e = null)
      }
    }
    return Os = e, null
  }

  function pm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ci()) {
          case w:
            return 2;
          case Q:
            return 8;
          case oe:
          case je:
            return 32;
          case Ne:
            return 268435456;
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var ro = !1,
    Vl = null,
    Wl = null,
    Zl = null,
    ui = new Map,
    di = new Map,
    Fl = [],
    fg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

  function ym(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vl = null;
        break;
      case "dragenter":
      case "dragleave":
        Wl = null;
        break;
      case "mouseover":
      case "mouseout":
        Zl = null;
        break;
      case "pointerover":
      case "pointerout":
        ui.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        di.delete(t.pointerId)
    }
  }

  function fi(e, t, l, a, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: s,
      targetContainers: [i]
    }, t !== null && (t = Ma(t), t !== null && hm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
  }

  function mg(e, t, l, a, i) {
    switch (t) {
      case "focusin":
        return Vl = fi(Vl, e, t, l, a, i), !0;
      case "dragenter":
        return Wl = fi(Wl, e, t, l, a, i), !0;
      case "mouseover":
        return Zl = fi(Zl, e, t, l, a, i), !0;
      case "pointerover":
        var s = i.pointerId;
        return ui.set(s, fi(ui.get(s) || null, e, t, l, a, i)), !0;
      case "gotpointercapture":
        return s = i.pointerId, di.set(s, fi(di.get(s) || null, e, t, l, a, i)), !0
    }
    return !1
  }

  function bm(e) {
    var t = Ra(e.target);
    if (t !== null) {
      var l = p(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = x(l), t !== null) {
            e.blockedOn = t, Ro(e.priority, function() {
              gm(l)
            });
            return
          }
        } else if (t === 31) {
          if (t = N(l), t !== null) {
            e.blockedOn = t, Ro(e.priority, function() {
              gm(l)
            });
            return
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return
        }
      }
    }
    e.blockedOn = null
  }

  function _s(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var l = io(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        sr = a, l.target.dispatchEvent(a), sr = null
      } else return t = Ma(l), t !== null && hm(t), e.blockedOn = l, !1;
      t.shift()
    }
    return !0
  }

  function xm(e, t, l) {
    _s(e) && l.delete(t)
  }

  function hg() {
    ro = !1, Vl !== null && _s(Vl) && (Vl = null), Wl !== null && _s(Wl) && (Wl = null), Zl !== null && _s(Zl) && (Zl = null), ui.forEach(xm), di.forEach(xm)
  }

  function Ls(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ro || (ro = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, hg)))
  }
  var Hs = null;

  function vm(e) {
    Hs !== e && (Hs = e, c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
      Hs === e && (Hs = null);
      for (var t = 0; t < e.length; t += 3) {
        var l = e[t],
          a = e[t + 1],
          i = e[t + 2];
        if (typeof a != "function") {
          if (so(a || l) === null) continue;
          break
        }
        var s = Ma(l);
        s !== null && (e.splice(t, 3), t -= 3, ic(s, {
          pending: !0,
          data: i,
          method: l.method,
          action: a
        }, a, i))
      }
    }))
  }

  function hn(e) {
    function t(m) {
      return Ls(m, e)
    }
    Vl !== null && Ls(Vl, e), Wl !== null && Ls(Wl, e), Zl !== null && Ls(Zl, e), ui.forEach(t), di.forEach(t);
    for (var l = 0; l < Fl.length; l++) {
      var a = Fl[l];
      a.blockedOn === e && (a.blockedOn = null)
    }
    for (; 0 < Fl.length && (l = Fl[0], l.blockedOn === null);) bm(l), l.blockedOn === null && Fl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var i = l[a],
          s = l[a + 1],
          r = i[gt] || null;
        if (typeof s == "function") r || vm(l);
        else if (r) {
          var u = null;
          if (s && s.hasAttribute("formAction")) {
            if (i = s, r = s[gt] || null) u = r.formAction;
            else if (so(i) !== null) continue
          } else u = r.action;
          typeof u == "function" ? l[a + 1] = u : (l.splice(a, 3), a -= 3), vm(l)
        }
      }
  }

  function jm() {
    function e(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(r) {
            return i = r
          })
        },
        focusReset: "manual",
        scroll: "manual"
      })
    }

    function t() {
      i !== null && (i(), i = null), a || setTimeout(l, 20)
    }

    function l() {
      if (!a && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        })
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        i = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100),
        function() {
          a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null)
        }
    }
  }

  function co(e) {
    this._internalRoot = e
  }
  ks.prototype.render = co.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current,
      a = Tt();
    fm(l, a, e, t, null, null)
  }, ks.prototype.unmount = co.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      fm(e.current, 2, null, e, null, null), xs(), t[Ea] = null
    }
  };

  function ks(e) {
    this._internalRoot = e
  }
  ks.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Eo();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var l = 0; l < Fl.length && t !== 0 && t < Fl[l].priority; l++);
      Fl.splice(l, 0, e), l === 0 && bm(e)
    }
  };
  var Sm = d.version;
  if (Sm !== "19.2.7") throw Error(o(527, Sm, "19.2.7"));
  U.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = A(t), e = e !== null ? k(e) : null, e = e === null ? null : e.stateNode, e
  };
  var gg = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: v,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qs.isDisabled && qs.supportsFiber) try {
      Ue = qs.inject(gg), Le = qs
    } catch {}
  }
  return hi.createRoot = function(e, t) {
    if (!h(e)) throw Error(o(299));
    var l = !1,
      a = "",
      i = wd,
      s = Td,
      r = Ed;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (r = t.onRecoverableError)), t = um(e, 1, !1, null, null, l, a, null, i, s, r, jm), e[Ea] = t.current, Qc(e), new co(t)
  }, hi.hydrateRoot = function(e, t, l) {
    if (!h(e)) throw Error(o(299));
    var a = !1,
      i = "",
      s = wd,
      r = Td,
      u = Ed,
      m = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (i = l.identifierPrefix), l.onUncaughtError !== void 0 && (s = l.onUncaughtError), l.onCaughtError !== void 0 && (r = l.onCaughtError), l.onRecoverableError !== void 0 && (u = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), t = um(e, 1, !0, t, l ?? null, a, i, m, s, r, u, jm), t.context = dm(null), l = t.current, a = Tt(), a = Is(a), i = Ul(a), i.callback = null, Bl(l, i, a), l = a, t.current.lanes = l, zn(t, l), ll(t), e[Ea] = t.current, Qc(e), new ks(t)
  }, hi.version = "19.2.7", hi
}
var Mm;

function Pg() {
  if (Mm) return fo.exports;
  Mm = 1;

  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
    } catch (d) {
      console.error(d)
    }
  }
  return c(), fo.exports = Ig(), fo.exports
}
var ep = Pg();
const X = new Sg("TenantDB");
X.version(3).stores({
  tenants: "++id, name, unitId, mobile, aadhar, leaseStart, leaseEnd",
  payments: "++id, tenantId, amount, date, type, status",
  liftBills: "++id, billDate, dueDate, amount, status, description",
  waterBills: "++id, billDate, dueDate, amount, status, description"
});
X.version(4).stores({
  tenants: "++id, name, unitId, mobile, aadhar, leaseStart, leaseEnd",
  payments: "++id, tenantId, amount, date, type, status",
  liftBills: "++id, billDate, dueDate, amount, status, description",
  waterBills: "++id, billDate, dueDate, amount, status, description",
  miscFolders: "++id, name, color, createdAt",
  miscDocuments: "++id, folderId, title, date, amount, particulars, fileName, fileType, createdAt"
});
const tp = "modulepreload",
  lp = function(c) {
    return "./" + c
  },
  Um = {},
  Si = function(d, f, o) {
    let h = Promise.resolve();
    if (f && f.length > 0) {
      let x = function(A) {
        return Promise.all(A.map(k => Promise.resolve(k).then(E => ({
          status: "fulfilled",
          value: E
        }), E => ({
          status: "rejected",
          reason: E
        }))))
      };
      document.getElementsByTagName("link");
      const N = document.querySelector("meta[property=csp-nonce]"),
        b = (N == null ? void 0 : N.nonce) || (N == null ? void 0 : N.getAttribute("nonce"));
      h = x(f.map(A => {
        if (A = lp(A), A in Um) return;
        Um[A] = !0;
        const k = A.endsWith(".css"),
          E = k ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${A}"]${E}`)) return;
        const B = document.createElement("link");
        if (B.rel = k ? "stylesheet" : tp, k || (B.as = "script"), B.crossOrigin = "", B.href = A, b && B.setAttribute("nonce", b), document.head.appendChild(B), k) return new Promise((I, G) => {
          B.addEventListener("load", I), B.addEventListener("error", () => G(new Error(`Unable to preload CSS for ${A}`)))
        })
      }))
    }

    function p(x) {
      const N = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (N.payload = x, window.dispatchEvent(N), !N.defaultPrevented) throw x
    }
    return h.then(x => {
      for (const N of x || []) N.status === "rejected" && p(N.reason);
      return d().catch(p)
    })
  }; /*! Capacitor: https://capacitorjs.com/ - MIT License */
var jn;
(function(c) {
  c.Unimplemented = "UNIMPLEMENTED", c.Unavailable = "UNAVAILABLE"
})(jn || (jn = {}));
class Dl extends Error {
  constructor(d, f, o) {
    super(d), this.message = d, this.code = f, this.data = o
  }
}
const ap = c => {
    var d, f;
    return c != null && c.androidBridge ? "android" : !((f = (d = c == null ? void 0 : c.webkit) === null || d === void 0 ? void 0 : d.messageHandlers) === null || f === void 0) && f.bridge ? "ios" : "web"
  },
  np = c => {
    const d = c.CapacitorCustomPlatform || null,
      f = c.Capacitor || {},
      o = f.Plugins = f.Plugins || {},
      h = () => d !== null ? d.name : ap(c),
      p = () => h() !== "web",
      x = E => {
        const B = A.get(E);
        return !!(B != null && B.platforms.has(h()) || N(E))
      },
      N = E => {
        var B;
        return (B = f.PluginHeaders) === null || B === void 0 ? void 0 : B.find(I => I.name === E)
      },
      b = E => c.console.error(E),
      A = new Map,
      k = (E, B = {}) => {
        const I = A.get(E);
        if (I) return console.warn(`Capacitor plugin "${E}" already registered. Cannot register plugins twice.`), I.proxy;
        const G = h(),
          L = N(E);
        let W;
        const q = async () => (!W && G in B ? W = typeof B[G] == "function" ? W = await B[G]() : W = B[G] : d !== null && !W && "web" in B && (W = typeof B.web == "function" ? W = await B.web() : W = B.web), W), V = (_, ae) => {
          var ye, O;
          if (L) {
            const J = L == null ? void 0 : L.methods.find(Me => ae === Me.name);
            if (J) return J.rtype === "promise" ? Me => f.nativePromise(E, ae.toString(), Me) : (Me, We) => f.nativeCallback(E, ae.toString(), Me, We);
            if (_) return (ye = _[ae]) === null || ye === void 0 ? void 0 : ye.bind(_)
          } else {
            if (_) return (O = _[ae]) === null || O === void 0 ? void 0 : O.bind(_);
            throw new Dl(`"${E}" plugin is not implemented on ${G}`, jn.Unimplemented)
          }
        }, ne = _ => {
          let ae;
          const ye = (...O) => {
            const J = q().then(Me => {
              const We = V(Me, _);
              if (We) {
                const Ye = We(...O);
                return ae = Ye == null ? void 0 : Ye.remove, Ye
              } else throw new Dl(`"${E}.${_}()" is not implemented on ${G}`, jn.Unimplemented)
            });
            return _ === "addListener" && (J.remove = async () => ae()), J
          };
          return ye.toString = () => `${_.toString()}() { [capacitor code] }`, Object.defineProperty(ye, "name", {
            value: _,
            writable: !1,
            configurable: !1
          }), ye
        }, se = ne("addListener"), Qe = ne("removeListener"), _e = (_, ae) => {
          const ye = se({
              eventName: _
            }, ae),
            O = async () => {
              const Me = await ye;
              Qe({
                eventName: _,
                callbackId: Me
              }, ae)
            }, J = new Promise(Me => ye.then(() => Me({
              remove: O
            })));
          return J.remove = async () => {
            console.warn("Using addListener() without 'await' is deprecated."), await O()
          }, J
        }, xe = new Proxy({}, {
          get(_, ae) {
            switch (ae) {
              case "$$typeof":
                return;
              case "toJSON":
                return () => ({});
              case "addListener":
                return L ? _e : se;
              case "removeListener":
                return Qe;
              default:
                return ne(ae)
            }
          }
        });
        return o[E] = xe, A.set(E, {
          name: E,
          proxy: xe,
          platforms: new Set([...Object.keys(B), ...L ? [G] : []])
        }), xe
      };
    return f.convertFileSrc || (f.convertFileSrc = E => E), f.getPlatform = h, f.handleError = b, f.isNativePlatform = p, f.isPluginAvailable = x, f.registerPlugin = k, f.Exception = Dl, f.DEBUG = !!f.DEBUG, f.isLoggingEnabled = !!f.isLoggingEnabled, f
  },
  ip = c => c.Capacitor = np(c),
  zi = ip(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}),
  Di = zi.registerPlugin;
class Js {
  constructor() {
    this.listeners = {}, this.retainedEventArguments = {}, this.windowListeners = {}
  }
  addListener(d, f) {
    let o = !1;
    this.listeners[d] || (this.listeners[d] = [], o = !0), this.listeners[d].push(f);
    const p = this.windowListeners[d];
    p && !p.registered && this.addWindowListener(p), o && this.sendRetainedArgumentsForEvent(d);
    const x = async () => this.removeListener(d, f);
    return Promise.resolve({
      remove: x
    })
  }
  async removeAllListeners() {
    this.listeners = {};
    for (const d in this.windowListeners) this.removeWindowListener(this.windowListeners[d]);
    this.windowListeners = {}
  }
  notifyListeners(d, f, o) {
    const h = this.listeners[d];
    if (!h) {
      if (o) {
        let p = this.retainedEventArguments[d];
        p || (p = []), p.push(f), this.retainedEventArguments[d] = p
      }
      return
    }
    h.forEach(p => p(f))
  }
  hasListeners(d) {
    var f;
    return !!(!((f = this.listeners[d]) === null || f === void 0) && f.length)
  }
  registerWindowListener(d, f) {
    this.windowListeners[f] = {
      registered: !1,
      windowEventName: d,
      pluginEventName: f,
      handler: o => {
        this.notifyListeners(f, o)
      }
    }
  }
  unimplemented(d = "not implemented") {
    return new zi.Exception(d, jn.Unimplemented)
  }
  unavailable(d = "not available") {
    return new zi.Exception(d, jn.Unavailable)
  }
  async removeListener(d, f) {
    const o = this.listeners[d];
    if (!o) return;
    const h = o.indexOf(f);
    this.listeners[d].splice(h, 1), this.listeners[d].length || this.removeWindowListener(this.windowListeners[d])
  }
  addWindowListener(d) {
    window.addEventListener(d.windowEventName, d.handler), d.registered = !0
  }
  removeWindowListener(d) {
    d && (window.removeEventListener(d.windowEventName, d.handler), d.registered = !1)
  }
  sendRetainedArgumentsForEvent(d) {
    const f = this.retainedEventArguments[d];
    f && (delete this.retainedEventArguments[d], f.forEach(o => {
      this.notifyListeners(d, o)
    }))
  }
}
const Bm = c => encodeURIComponent(c).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape),
  Om = c => c.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
class sp extends Js {
  async getCookies() {
    const d = document.cookie,
      f = {};
    return d.split(";").forEach(o => {
      if (o.length <= 0) return;
      let [h, p] = o.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
      h = Om(h).trim(), p = Om(p).trim(), f[h] = p
    }), f
  }
  async setCookie(d) {
    try {
      const f = Bm(d.key),
        o = Bm(d.value),
        h = d.expires ? `; expires=${d.expires.replace("expires=","")}` : "",
        p = (d.path || "/").replace("path=", ""),
        x = d.url != null && d.url.length > 0 ? `domain=${d.url}` : "";
      document.cookie = `${f}=${o||""}${h}; path=${p}; ${x};`
    } catch (f) {
      return Promise.reject(f)
    }
  }
  async deleteCookie(d) {
    try {
      document.cookie = `${d.key}=; Max-Age=0`
    } catch (f) {
      return Promise.reject(f)
    }
  }
  async clearCookies() {
    try {
      const d = document.cookie.split(";") || [];
      for (const f of d) document.cookie = f.replace(/^ +/, "").replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)
    } catch (d) {
      return Promise.reject(d)
    }
  }
  async clearAllCookies() {
    try {
      await this.clearCookies()
    } catch (d) {
      return Promise.reject(d)
    }
  }
}
Di("CapacitorCookies", {
  web: () => new sp
});
const rp = async c => new Promise((d, f) => {
  const o = new FileReader;
  o.onload = () => {
    const h = o.result;
    d(h.indexOf(",") >= 0 ? h.split(",")[1] : h)
  }, o.onerror = h => f(h), o.readAsDataURL(c)
}), cp = (c = {}) => {
  const d = Object.keys(c);
  return Object.keys(c).map(h => h.toLocaleLowerCase()).reduce((h, p, x) => (h[p] = c[d[x]], h), {})
}, op = (c, d = !0) => c ? Object.entries(c).reduce((o, h) => {
  const [p, x] = h;
  let N, b;
  return Array.isArray(x) ? (b = "", x.forEach(A => {
    N = d ? encodeURIComponent(A) : A, b += `${p}=${N}&`
  }), b.slice(0, -1)) : (N = d ? encodeURIComponent(x) : x, b = `${p}=${N}`), `${o}&${b}`
}, "").substr(1) : null, up = (c, d = {}) => {
  const f = Object.assign({
      method: c.method || "GET",
      headers: c.headers
    }, d),
    h = cp(c.headers)["content-type"] || "";
  if (typeof c.data == "string") f.body = c.data;
  else if (h.includes("application/x-www-form-urlencoded")) {
    const p = new URLSearchParams;
    for (const [x, N] of Object.entries(c.data || {})) p.set(x, N);
    f.body = p.toString()
  } else if (h.includes("multipart/form-data") || c.data instanceof FormData) {
    const p = new FormData;
    if (c.data instanceof FormData) c.data.forEach((N, b) => {
      p.append(b, N)
    });
    else
      for (const N of Object.keys(c.data)) p.append(N, c.data[N]);
    f.body = p;
    const x = new Headers(f.headers);
    x.delete("content-type"), f.headers = x
  } else(h.includes("application/json") || typeof c.data == "object") && (f.body = JSON.stringify(c.data));
  return f
};
class dp extends Js {
  async request(d) {
    const f = up(d, d.webFetchExtra),
      o = op(d.params, d.shouldEncodeUrlParams),
      h = o ? `${d.url}?${o}` : d.url,
      p = await fetch(h, f),
      x = p.headers.get("content-type") || "";
    let {
      responseType: N = "text"
    } = p.ok ? d : {};
    x.includes("application/json") && (N = "json");
    let b, A;
    switch (N) {
      case "arraybuffer":
      case "blob":
        A = await p.blob(), b = await rp(A);
        break;
      case "json":
        b = await p.json();
        break;
      case "document":
      case "text":
      default:
        b = await p.text()
    }
    const k = {};
    return p.headers.forEach((E, B) => {
      k[B] = E
    }), {
      data: b,
      headers: k,
      status: p.status,
      url: p.url
    }
  }
  async get(d) {
    return this.request(Object.assign(Object.assign({}, d), {
      method: "GET"
    }))
  }
  async post(d) {
    return this.request(Object.assign(Object.assign({}, d), {
      method: "POST"
    }))
  }
  async put(d) {
    return this.request(Object.assign(Object.assign({}, d), {
      method: "PUT"
    }))
  }
  async patch(d) {
    return this.request(Object.assign(Object.assign({}, d), {
      method: "PATCH"
    }))
  }
  async delete(d) {
    return this.request(Object.assign(Object.assign({}, d), {
      method: "DELETE"
    }))
  }
}
Di("CapacitorHttp", {
  web: () => new dp
});
var _m;
(function(c) {
  c.Dark = "DARK", c.Light = "LIGHT", c.Default = "DEFAULT"
})(_m || (_m = {}));
var Lm;
(function(c) {
  c.StatusBar = "StatusBar", c.NavigationBar = "NavigationBar"
})(Lm || (Lm = {}));
class fp extends Js {
  async setStyle() {
    this.unavailable("not available for web")
  }
  async setAnimation() {
    this.unavailable("not available for web")
  }
  async show() {
    this.unavailable("not available for web")
  }
  async hide() {
    this.unavailable("not available for web")
  }
}
Di("SystemBars", {
  web: () => new fp
});
async function mp() {
  return {
    tenants: await X.tenants.toArray(),
    payments: await X.payments.toArray(),
    liftBills: await X.liftBills.toArray(),
    waterBills: await X.waterBills.toArray(),
    exportDate: new Date().toISOString(),
    appVersion: "6.0",
    appName: "ANSARI HOUSE"
  }
}
async function hp(c) {
  await X.transaction("rw", [X.tenants, X.payments, X.liftBills, X.waterBills], async () => {
    const d = new Set((await X.tenants.toArray()).map(x => x.id)),
      f = new Set((await X.payments.toArray()).map(x => x.id)),
      o = new Set((await X.liftBills.toArray()).map(x => x.id)),
      h = new Set((await X.waterBills.toArray()).map(x => x.id));
    let p = 0;
    for (const x of c.tenants || []) d.has(x.id) || (await X.tenants.add(x), p++);
    for (const x of c.payments || []) f.has(x.id) || (await X.payments.add(x), p++);
    for (const x of c.liftBills || []) o.has(x.id) || (await X.liftBills.add(x), p++);
    for (const x of c.waterBills || []) h.has(x.id) || (await X.waterBills.add(x), p++);
    console.log(`✅ Merge complete: ${p} new records added.`)
  })
}
async function gp(c) {
  await X.transaction("rw", [X.tenants, X.payments, X.liftBills, X.waterBills], async () => {
    await X.tenants.clear(), await X.payments.clear(), await X.liftBills.clear(), await X.waterBills.clear();
    for (const d of c.tenants || []) await X.tenants.add(d);
    for (const d of c.payments || []) await X.payments.add(d);
    for (const d of c.liftBills || []) await X.liftBills.add(d);
    for (const d of c.waterBills || []) await X.waterBills.add(d)
  })
}
const go = {
    manualDriveBackup: async () => {
      try {
        const c = await mp(),
          d = JSON.stringify(c, null, 2),
          f = `ANSARI_HOUSE_BACKUP_${new Date().toISOString().slice(0,10)}.json`;
        if (zi.isNativePlatform()) {
          const {
            Filesystem: x,
            Directory: N
          } = await Si(async () => {
            const {
              Filesystem: k,
              Directory: E
            } = await import("./index-CEwgQVqA.js");
            return {
              Filesystem: k,
              Directory: E
            }
          }, __vite__mapDeps([0, 1, 2, 3])), {
            Share: b
          } = await Si(async () => {
            const {
              Share: k
            } = await import("./index-BrhwAlQz.js");
            return {
              Share: k
            }
          }, __vite__mapDeps([4, 1, 2, 3])), A = await x.writeFile({
            path: f,
            data: d,
            directory: N.Cache,
            encoding: "utf8"
          });
          return await b.share({
            title: "Google Drive Backup",
            text: "Select Google Drive to save your backup file",
            url: A.uri
          }), {
            success: !0
          }
        }
        const o = new Blob([d], {
            type: "application/json"
          }),
          h = URL.createObjectURL(o),
          p = document.createElement("a");
        return p.href = h, p.download = f, p.click(), URL.revokeObjectURL(h), {
          success: !0
        }
      } catch (c) {
        return {
          success: !1,
          error: c.message
        }
      }
    },
    manualDriveRestore: async (c, d = "merge") => {
      try {
        const f = await c.text(),
          o = JSON.parse(f);
        if (o.appName !== "ANSARI HOUSE") throw new Error("Invalid backup file");
        return d === "replace" ? await gp(o) : await hp(o), {
          success: !0
        }
      } catch (f) {
        return {
          success: !1,
          error: f.message
        }
      }
    }
  },
  qt = {
    UNITS: ["101", "102", "103", "104", "201", "202", "203", "204", "301", "302", "303", "304", "401", "402", "403", "404", "501", "502", "503", "504", "601", "602", "H1", "H2", "H3"],
    SOLD_UNITS: ["101", "102"]
  },
  Ys = ({
    emoji: c,
    label: d,
    value: f,
    sub: o,
    color: h,
    shadow: p,
    to: x
  }) => n.jsxs(za, {
    to: x,
    style: {
      background: `linear-gradient(145deg, ${h}22, ${h}08)`,
      border: `1px solid ${h}33`,
      borderRadius: "1rem",
      padding: "0.9rem 0.75rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.2rem",
      textDecoration: "none",
      transition: "all 0.25s",
      boxShadow: `0 6px 20px ${p}`,
      position: "relative",
      overflow: "hidden"
    },
    children: [n.jsx("span", {
      style: {
        fontSize: "1.8rem",
        lineHeight: 1,
        marginBottom: "0.25rem",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
      },
      children: c
    }), n.jsx("span", {
      style: {
        fontSize: "1.5rem",
        fontWeight: 900,
        color: "#f1f5f9",
        letterSpacing: "-0.03em",
        lineHeight: 1
      },
      children: f
    }), n.jsx("span", {
      style: {
        fontSize: "0.78rem",
        fontWeight: 700,
        color: h
      },
      children: d
    }), n.jsx("span", {
      style: {
        fontSize: "0.65rem",
        color: "#64748b"
      },
      children: o
    })]
  }),
  Qs = ({
    emoji: c,
    label: d,
    color: f,
    bg: o,
    to: h
  }) => n.jsxs(za, {
    to: h,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.4rem",
      textDecoration: "none"
    },
    children: [n.jsx("div", {
      style: {
        width: 54,
        height: 54,
        borderRadius: "1rem",
        background: o,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.6rem",
        transition: "transform 0.2s",
        boxShadow: `0 4px 14px ${f}44`,
        border: `1px solid ${f}33`,
        filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.3))"
      },
      children: c
    }), n.jsx("span", {
      style: {
        fontSize: "0.65rem",
        color: "#94a3b8",
        fontWeight: 700,
        textAlign: "center"
      },
      children: d
    })]
  }),
  po = ({
    children: c,
    style: d
  }) => n.jsx("div", {
    style: {
      background: "rgba(15,23,42,0.55)",
      backdropFilter: "blur(16px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "1.1rem",
      padding: "1.1rem",
      ...d
    },
    children: c
  }),
  yo = ({
    emoji: c,
    label: d,
    link: f,
    linkLabel: o,
    badge: h
  }) => n.jsxs("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginBottom: "0.9rem"
    },
    children: [n.jsx("span", {
      style: {
        fontSize: "1.1rem",
        filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.5))"
      },
      children: c
    }), n.jsx("span", {
      style: {
        fontWeight: 700,
        fontSize: "0.9rem",
        color: "#e2e8f0",
        flex: 1
      },
      children: d
    }), h !== void 0 && n.jsx("span", {
      style: {
        background: "rgba(99,102,241,0.2)",
        color: "#a5b4fc",
        fontSize: "0.68rem",
        fontWeight: 700,
        padding: "2px 8px",
        borderRadius: "99px"
      },
      children: h
    }), f && n.jsx(za, {
      to: f,
      style: {
        fontSize: "0.72rem",
        color: "#818cf8",
        fontWeight: 700,
        textDecoration: "none"
      },
      children: o || "View All"
    })]
  });

function pp() {
  const c = zo(),
    [d, f] = Y.useState([]),
    [o, h] = Y.useState([]),
    [p, x] = Y.useState([]),
    [N, b] = Y.useState([]),
    [A, k] = Y.useState(!1);
  Y.useEffect(() => {
    X.tenants.toArray().then(f), X.payments.toArray().then(h), X.liftBills.toArray().then(x), X.waterBills.toArray().then(b)
  }, []);
  const E = d.length,
    B = qt.UNITS.length,
    I = B - E,
    G = d.filter(_ => (new Date(_.leaseEnd) - new Date) / 864e5 <= 30),
    L = p.filter(_ => _.status !== "Paid"),
    W = p.filter(_ => _.status === "Pending" && _.dueDate && new Date(_.dueDate) < new Date),
    q = L.reduce((_, ae) => _ + (parseFloat(ae.amount) || 0), 0),
    V = N.filter(_ => _.status !== "Paid"),
    ne = N.filter(_ => _.status === "Pending" && _.dueDate && new Date(_.dueDate) < new Date),
    se = V.reduce((_, ae) => _ + (parseFloat(ae.amount) || 0), 0),
    Qe = [{
      label: "6F",
      units: qt.UNITS.filter(_ => _.startsWith("6"))
    }, {
      label: "5F",
      units: qt.UNITS.filter(_ => _.startsWith("5"))
    }, {
      label: "4F",
      units: qt.UNITS.filter(_ => _.startsWith("4"))
    }, {
      label: "3F",
      units: qt.UNITS.filter(_ => _.startsWith("3"))
    }, {
      label: "2F",
      units: qt.UNITS.filter(_ => _.startsWith("2"))
    }, {
      label: "1F",
      units: qt.UNITS.filter(_ => _.startsWith("1"))
    }, {
      label: "GF",
      units: qt.UNITS.filter(_ => _.startsWith("H"))
    }],
    _e = _ => d.find(ae => ae.unitId === _),
    xe = [...G.map(_ => ({
      type: "lease",
      emoji: "📅",
      msg: `${_.name} — Lease ends ${_.leaseEnd}`,
      color: "#f59e0b",
      to: `/tenant/${_.unitId}`
    })), ...W.map(_ => ({
      type: "lift",
      emoji: "⚡",
      msg: `Lift bill ₹${_.amount} overdue since ${_.dueDate}`,
      color: "#a855f7",
      to: "/lift"
    })), ...ne.map(_ => ({
      type: "water",
      emoji: "💧",
      msg: `Water bill ₹${_.amount} overdue since ${_.dueDate}`,
      color: "#0ea5e9",
      to: "/water"
    }))];
  return n.jsxs("div", {
    className: "animate-fade",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.1rem"
    },
    children: [n.jsxs("div", {
      style: {
        background: "linear-gradient(135deg, rgba(99,102,241,0.28) 0%, rgba(217,70,239,0.18) 100%)",
        border: "1px solid rgba(99,102,241,0.35)",
        borderRadius: "1.3rem",
        padding: "1.2rem",
        position: "relative",
        overflow: "hidden"
      },
      children: [n.jsx("div", {
        style: {
          position: "absolute",
          top: -50,
          right: -50,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,70,239,0.25), transparent)",
          pointerEvents: "none"
        }
      }), n.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.2rem"
        },
        className: "tilt-card",
        children: [n.jsx("div", {
          className: "tilt-icon",
          style: {
            background: "linear-gradient(135deg, #6366f1, #d946ef)",
            padding: "0.8rem",
            borderRadius: "1.1rem",
            fontSize: "1.8rem",
            boxShadow: "0 10px 25px rgba(99,102,241,0.5), inset -2px -2px 6px rgba(0,0,0,0.3)",
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: "🏢"
        }), n.jsxs("div", {
          children: [n.jsx("div", {
            style: {
              fontSize: "1.5rem",
              fontWeight: 900,
              background: "linear-gradient(135deg, #a5b4fc, #f0abfc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
              lineHeight: 1
            },
            children: "ANSARI HOUSE"
          }), n.jsx("div", {
            style: {
              fontSize: "0.72rem",
              color: "#94a3b8",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginTop: "3px"
            },
            children: "Digital Command Hub"
          })]
        }), xe.length > 0 && n.jsx("div", {
          style: {
            marginLeft: "auto",
            background: "#ef4444",
            color: "white",
            borderRadius: "99px",
            minWidth: 22,
            height: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.72rem",
            fontWeight: 800,
            padding: "0 5px",
            boxShadow: "0 2px 8px rgba(239,68,68,0.6)"
          },
          children: xe.length
        })]
      }), n.jsxs("div", {
        style: {
          marginBottom: "0.5rem"
        },
        children: [n.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.72rem",
            marginBottom: "0.35rem"
          },
          children: [n.jsx("span", {
            style: {
              color: "#94a3b8"
            },
            children: "Occupancy"
          }), n.jsxs("span", {
            style: {
              color: "#a5b4fc",
              fontWeight: 700
            },
            children: [Math.round(E / B * 100), "% (", E, "/", B, " units)"]
          })]
        }), n.jsx("div", {
          style: {
            height: 8,
            borderRadius: 99,
            background: "rgba(255,255,255,0.08)",
            overflow: "hidden"
          },
          children: n.jsx("div", {
            className: E / B >= .9 ? "neon-pulse" : "",
            style: {
              height: "100%",
              borderRadius: 99,
              background: "linear-gradient(90deg, #6366f1, #d946ef)",
              width: `${Math.round(E/B*100)}%`,
              transition: "width 1s ease"
            }
          })
        })]
      })]
    }), n.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0.85rem"
      },
      children: [n.jsxs("button", {
        onClick: () => c("/tenant/NEW"),
        className: "tilt-card",
        style: {
          background: "linear-gradient(135deg, #6366f1, #4f46e5)",
          border: "none",
          borderRadius: "1.2rem",
          padding: "1.1rem",
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          boxShadow: "0 8px 25px rgba(99,102,241,0.35)",
          cursor: "pointer"
        },
        children: [n.jsx("div", {
          style: {
            background: "rgba(255,255,255,0.2)",
            padding: "0.6rem",
            borderRadius: "0.8rem"
          },
          children: n.jsx(xi, {
            size: 22
          })
        }), n.jsx("span", {
          style: {
            fontWeight: 900,
            fontSize: "0.85rem",
            letterSpacing: "0.02em"
          },
          children: "ADD TENANT"
        })]
      }), n.jsxs("button", {
        onClick: () => c("/financials"),
        className: "tilt-card",
        style: {
          background: "linear-gradient(135deg, #10b981, #059669)",
          border: "none",
          borderRadius: "1.2rem",
          padding: "1.1rem",
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
          boxShadow: "0 8px 25px rgba(16,185,129,0.35)",
          cursor: "pointer"
        },
        children: [n.jsx("div", {
          style: {
            background: "rgba(255,255,255,0.2)",
            padding: "0.6rem",
            borderRadius: "0.8rem"
          },
          children: n.jsx(al, {
            size: 22
          })
        }), n.jsx("span", {
          style: {
            fontWeight: 900,
            fontSize: "0.85rem",
            letterSpacing: "0.02em"
          },
          children: "FINANCIALS"
        })]
      })]
    }), n.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0.85rem"
      },
      children: [n.jsx(Ys, {
        emoji: "💰",
        label: "Total Revenue",
        value: `₹${(o.reduce((_,ae)=>_+(parseFloat(ae.amount)||0),0)/1e3).toFixed(1)}K`,
        sub: "Collection",
        color: "#10b981",
        shadow: "rgba(16,185,129,0.25)",
        to: "/financials"
      }), n.jsx(Ys, {
        emoji: "🏠",
        label: "Occupied",
        value: E,
        sub: `${I} Vacant`,
        color: "#6366f1",
        shadow: "rgba(99,102,241,0.25)",
        to: "/tenants"
      }), n.jsx(Ys, {
        emoji: "⚡",
        label: "Lift Dues",
        value: `₹${q.toLocaleString()}`,
        sub: "Pending",
        color: "#a855f7",
        shadow: "rgba(168,85,247,0.25)",
        to: "/lift"
      }), n.jsx(Ys, {
        emoji: "💧",
        label: "Water Dues",
        value: `₹${se.toLocaleString()}`,
        sub: "Pending",
        color: "#0ea5e9",
        shadow: "rgba(14,165,233,0.25)",
        to: "/water"
      })]
    }), xe.length > 0 && n.jsxs(po, {
      children: [n.jsx(yo, {
        emoji: "🔔",
        label: "Notifications",
        badge: xe.length
      }), n.jsx("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem"
        },
        children: xe.slice(0, 5).map((_, ae) => n.jsxs(za, {
          to: _.to,
          style: {
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.65rem 0.75rem",
            borderRadius: "0.75rem",
            background: `${_.color}12`,
            border: `1px solid ${_.color}25`,
            textDecoration: "none",
            transition: "background 0.2s"
          },
          children: [n.jsx("span", {
            style: {
              fontSize: "1.1rem"
            },
            children: _.emoji
          }), n.jsx("span", {
            style: {
              flex: 1,
              fontSize: "0.78rem",
              color: "#cbd5e1",
              fontWeight: 500
            },
            children: _.msg
          }), n.jsx(Sa, {
            size: 14,
            style: {
              color: _.color,
              flexShrink: 0
            }
          })]
        }, ae))
      })]
    }), n.jsxs(po, {
      children: [n.jsx(yo, {
        emoji: "⚡",
        label: "Quick Actions"
      }), n.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.5rem"
        },
        children: [n.jsx(Qs, {
          emoji: "👤",
          label: "Add Tenant",
          color: "#6366f1",
          bg: "rgba(99,102,241,0.15)",
          to: "/tenant/NEW"
        }), n.jsx(Qs, {
          emoji: "💳",
          label: "Payments",
          color: "#10b981",
          bg: "rgba(16,185,129,0.15)",
          to: "/financials"
        }), n.jsx(Qs, {
          emoji: "⚡",
          label: "Lift Bills",
          color: "#a855f7",
          bg: "rgba(168,85,247,0.15)",
          to: "/lift"
        }), n.jsx(Qs, {
          emoji: "💧",
          label: "Water Bills",
          color: "#0ea5e9",
          bg: "rgba(14,165,233,0.15)",
          to: "/water"
        })]
      })]
    }), n.jsxs(po, {
      children: [n.jsx(yo, {
        emoji: "🏗️",
        label: "Building Status",
        badge: `${E}/27`
      }), n.jsx("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem"
        },
        children: Qe.map((_, ae) => n.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexWrap: "wrap"
          },
          children: [n.jsx("span", {
            style: {
              fontSize: "0.62rem",
              color: "#475569",
              fontWeight: 700,
              minWidth: 24
            },
            children: _.label
          }), n.jsx("div", {
            style: {
              display: "flex",
              gap: "0.35rem",
              flexWrap: "wrap"
            },
            children: _.units.map(ye => {
              const O = _e(ye),
                J = qt.SOLD_UNITS.includes(ye);
              return n.jsxs(za, {
                to: J ? "#" : `/tenant/${ye}`,
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  padding: "0.28rem 0.55rem",
                  borderRadius: "0.45rem",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  background: J ? "rgba(239,68,68,0.1)" : O ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.04)",
                  color: J ? "#f87171" : O ? "#34d399" : "#475569",
                  border: J ? "1px solid rgba(239,68,68,0.3)" : O ? "1px solid rgba(16,185,129,0.3)" : "1px solid rgba(255,255,255,0.06)",
                  opacity: J ? .6 : 1,
                  pointerEvents: J ? "none" : "auto"
                },
                children: [n.jsx("span", {
                  style: {
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: J ? "#ef4444" : O ? "#10b981" : "#334155",
                    boxShadow: J ? "none" : O ? "0 0 5px #10b981" : "none"
                  }
                }), ye, " ", J && "(SOLD)"]
              }, ye)
            })
          })]
        }, ae))
      })]
    })]
  })
}

function yp() {
  const c = zo(),
    [d, f] = Y.useState(""),
    [o, h] = Y.useState(null),
    p = Zt(() => X.tenants.toArray()) || [],
    x = async () => {
      o && (p.find(A => A.id === o) && (await X.payments.where("tenantId").equals(o).delete(), await X.tenants.delete(o)), h(null))
    }, N = p.filter(b => b.name.toLowerCase().includes(d.toLowerCase()) || b.unitId.toString().toLowerCase().includes(d.toLowerCase())).sort((b, A) => b.unitId.toString().localeCompare(A.unitId.toString(), void 0, {
      numeric: !0
    }));
  return n.jsxs("div", {
    className: "animate-fade",
    children: [n.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "1.5rem"
      },
      children: [n.jsxs("div", {
        children: [n.jsx("h1", {
          className: "text-gradient",
          style: {
            fontSize: "1.5rem",
            fontWeight: 900
          },
          children: "Tenant Directory"
        }), n.jsxs("p", {
          className: "text-muted text-xs font-semibold uppercase tracking-wider",
          children: ["Manage ", p.length, " Active Residents"]
        })]
      }), n.jsxs("button", {
        onClick: () => c("/tenant/NEW"),
        style: {
          background: "linear-gradient(135deg, #6366f1, #d946ef)",
          color: "white",
          border: "none",
          borderRadius: "0.85rem",
          padding: "0.6rem 1rem",
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontSize: "0.8rem",
          fontWeight: 800,
          boxShadow: "0 8px 15px rgba(99,102,241,0.3)"
        },
        children: [n.jsx(zg, {
          size: 16
        }), " ADD NEW"]
      })]
    }), n.jsxs("div", {
      style: {
        position: "relative",
        marginBottom: "1.5rem"
      },
      children: [n.jsx(Fm, {
        style: {
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#475569"
        },
        size: 18
      }), n.jsx("input", {
        type: "text",
        placeholder: "Search by name or unit number...",
        style: {
          paddingLeft: "3rem"
        },
        className: "input",
        value: d,
        onChange: b => f(b.target.value)
      })]
    }), n.jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem"
      },
      children: N.length > 0 ? N.map(b => n.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "0.75rem"
        },
        children: [n.jsxs(za, {
          to: `/tenant/${b.unitId}`,
          style: {
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            padding: "0.85rem",
            background: "rgba(15,23,42,0.55)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "1.1rem",
            textDecoration: "none",
            transition: "all 0.2s"
          },
          className: "card-hover",
          children: [n.jsx("div", {
            style: {
              width: 50,
              height: 50,
              borderRadius: "0.85rem",
              background: "linear-gradient(135deg, #1e293b, #0f172a)",
              border: "2px solid rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 800,
              fontSize: "1.2rem",
              overflow: "hidden",
              flexShrink: 0
            },
            children: b.photo ? n.jsx("img", {
              src: b.photo,
              alt: "",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            }) : b.name.charAt(0)
          }), n.jsxs("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [n.jsx("h3", {
              style: {
                fontSize: "0.95rem",
                fontWeight: 800,
                color: "#f1f5f9",
                margin: 0
              },
              children: b.name
            }), n.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginTop: "0.25rem"
              },
              children: [n.jsxs("span", {
                style: {
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: "#6366f1",
                  display: "flex",
                  alignItems: "center",
                  gap: 3
                },
                children: [n.jsx(Vs, {
                  size: 11
                }), " UNIT ", b.unitId]
              }), n.jsxs("span", {
                style: {
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "#64748b",
                  display: "flex",
                  alignItems: "center",
                  gap: 3
                },
                children: [n.jsx(Ws, {
                  size: 11
                }), " ", b.mobile]
              })]
            })]
          }), n.jsx(Dg, {
            size: 16,
            style: {
              color: "#334155"
            }
          })]
        }), n.jsx("button", {
          onClick: () => h(b.id),
          style: {
            width: 44,
            height: 44,
            borderRadius: "1rem",
            background: "rgba(239,68,68,0.1)",
            color: "#f87171",
            border: "1px solid rgba(239,68,68,0.2)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          children: n.jsx(nl, {
            size: 18
          })
        })]
      }, b.id)) : n.jsx("div", {
        style: {
          textAlign: "center",
          padding: "3rem 1rem",
          background: "rgba(255,255,255,0.02)",
          borderRadius: "1.25rem",
          border: "1px dashed rgba(255,255,255,0.1)"
        },
        children: n.jsx("p", {
          style: {
            color: "#475569",
            fontSize: "0.9rem",
            fontWeight: 600
          },
          children: p.length === 0 ? "No tenants registered yet." : `No matches found for "${d}"`
        })
      })
    }), o && n.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)"
      },
      children: n.jsxs("div", {
        style: {
          background: "rgba(15,23,42,0.95)",
          border: "1px solid rgba(239,68,68,0.4)",
          borderRadius: "1.25rem",
          width: "100%",
          maxWidth: "22rem",
          padding: "1.5rem",
          textAlign: "center"
        },
        className: "animate-fade",
        children: [n.jsx("div", {
          style: {
            background: "rgba(239,68,68,0.15)",
            width: 60,
            height: 60,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem"
          },
          children: n.jsx(Il, {
            size: 32,
            style: {
              color: "#ef4444"
            }
          })
        }), n.jsx("h3", {
          style: {
            fontSize: "1.2rem",
            fontWeight: 800,
            color: "#f1f5f9",
            marginBottom: "0.5rem"
          },
          children: "Are you absolutely sure?"
        }), n.jsxs("p", {
          style: {
            fontSize: "0.88rem",
            color: "#94a3b8",
            marginBottom: "1.5rem"
          },
          children: ["This will delete the tenant and all their payment history from the ", n.jsx("b", {
            children: "ANSARI CENTER"
          }), " database forever."]
        }), n.jsxs("div", {
          style: {
            display: "flex",
            gap: "0.75rem"
          },
          children: [n.jsx("button", {
            onClick: () => h(null),
            className: "btn btn-secondary",
            style: {
              flex: 1
            },
            children: "CANCEL"
          }), n.jsx("button", {
            onClick: x,
            className: "btn btn-primary",
            style: {
              flex: 1,
              background: "#ef4444"
            },
            children: "DELETE"
          })]
        })]
      })
    })]
  })
}
var $l;
(function(c) {
  c.Prompt = "PROMPT", c.Camera = "CAMERA", c.Photos = "PHOTOS"
})($l || ($l = {}));
var bn;
(function(c) {
  c.Rear = "REAR", c.Front = "FRONT"
})(bn || (bn = {}));
var Fs;
(function(c) {
  c.Uri = "uri", c.Base64 = "base64", c.DataUrl = "dataUrl"
})(Fs || (Fs = {}));
var Ks;
(function(c) {
  c[c.Photo = 0] = "Photo", c[c.Video = 1] = "Video"
})(Ks || (Ks = {}));
var bi;
(function(c) {
  c[c.Photo = 0] = "Photo", c[c.Video = 1] = "Video", c[c.All = 2] = "All"
})(bi || (bi = {}));
var Hm;
(function(c) {
  c[c.JPEG = 0] = "JPEG", c[c.PNG = 1] = "PNG"
})(Hm || (Hm = {}));
var km;
(function(c) {
  c.CameraPermissionDenied = "OS-PLUG-CAMR-0003", c.GalleryPermissionDenied = "OS-PLUG-CAMR-0005", c.NoCameraAvailable = "OS-PLUG-CAMR-0007", c.TakePhotoCancelled = "OS-PLUG-CAMR-0006", c.TakePhotoFailed = "OS-PLUG-CAMR-0010", c.TakePhotoInvalidArguments = "OS-PLUG-CAMR-0014", c.InvalidImageData = "OS-PLUG-CAMR-0008", c.EditPhotoFailed = "OS-PLUG-CAMR-0009", c.EditPhotoCancelled = "OS-PLUG-CAMR-0013", c.EditPhotoEmptyUri = "OS-PLUG-CAMR-0024", c.ImageNotFound = "OS-PLUG-CAMR-0011", c.ProcessImageFailed = "OS-PLUG-CAMR-0012", c.ChooseMediaFailed = "OS-PLUG-CAMR-0018", c.ChooseMediaCancelled = "OS-PLUG-CAMR-0020", c.MediaPathError = "OS-PLUG-CAMR-0021", c.FetchImageFromUriFailed = "OS-PLUG-CAMR-0028", c.RecordVideoFailed = "OS-PLUG-CAMR-0016", c.RecordVideoCancelled = "OS-PLUG-CAMR-0017", c.VideoNotFound = "OS-PLUG-CAMR-0025", c.PlayVideoFailed = "OS-PLUG-CAMR-0023", c.EncodeResultFailed = "OS-PLUG-CAMR-0019", c.FileNotFound = "OS-PLUG-CAMR-0027", c.InvalidArgument = "OS-PLUG-CAMR-0031", c.GeneralError = "OS-PLUG-CAMR-0026"
})(km || (km = {}));
class bp extends Js {
  async takePhoto(d) {
    return new Promise(async (f, o) => {
      d.webUseInput ? this.takePhotoCameraInputExperience(d, f, o) : this.takePhotoCameraExperience(d, f, o)
    })
  }
  async recordVideo(d) {
    throw this.unimplemented("recordVideo is not implemented on Web.")
  }
  async playVideo(d) {
    throw this.unimplemented("playVideo is not implemented on Web.")
  }
  async chooseFromGallery(d) {
    return new Promise(async (f, o) => {
      this.galleryInputExperience(d, f, o)
    })
  }
  async editPhoto(d) {
    throw this.unimplemented("editPhoto is not implemented on Web.")
  }
  async editURIPhoto(d) {
    throw this.unimplemented("editURIPhoto is not implemented on Web.")
  }
  async getPhoto(d) {
    return new Promise(async (f, o) => {
      if (d.webUseInput || d.source === $l.Photos) this.fileInputExperience(d, f, o);
      else if (d.source === $l.Prompt) {
        let h = document.querySelector("pwa-action-sheet");
        h || (h = document.createElement("pwa-action-sheet"), document.body.appendChild(h)), h.header = d.promptLabelHeader || "Photo", h.cancelable = !1, h.options = [{
          title: d.promptLabelPhoto || "From Photos"
        }, {
          title: d.promptLabelPicture || "Take Picture"
        }], h.addEventListener("onSelection", async p => {
          p.detail === 0 ? this.fileInputExperience(d, f, o) : this.cameraExperience(d, f, o)
        })
      } else this.cameraExperience(d, f, o)
    })
  }
  async pickImages(d) {
    return new Promise(async (f, o) => {
      this.multipleFileInputExperience(f, o)
    })
  }
  async cameraExperience(d, f, o) {
    await this._setupPWACameraModal(d.direction, h => this._getCameraPhoto(h, d), () => this.fileInputExperience(d, f, o), f, o)
  }
  fileInputExperience(d, f, o) {
    let h = document.querySelector("#_capacitor-camera-input");
    const p = () => {
      var x;
      (x = h.parentNode) === null || x === void 0 || x.removeChild(h)
    };
    h || (h = document.createElement("input"), h.id = "_capacitor-camera-input", h.type = "file", h.hidden = !0, document.body.appendChild(h), h.addEventListener("change", x => {
      const N = h.files[0];
      let b = "jpeg";
      if (N.type === "image/png" ? b = "png" : N.type === "image/gif" && (b = "gif"), d.resultType === "dataUrl" || d.resultType === "base64") {
        const A = new FileReader;
        A.addEventListener("load", () => {
          if (d.resultType === "dataUrl") f({
            dataUrl: A.result,
            format: b
          });
          else if (d.resultType === "base64") {
            const k = A.result.split(",")[1];
            f({
              base64String: k,
              format: b
            })
          }
          p()
        }), A.readAsDataURL(N)
      } else f({
        webPath: URL.createObjectURL(N),
        format: b
      }), p()
    }), h.addEventListener("cancel", x => {
      o(new Dl("User cancelled photos app")), p()
    })), h.accept = "image/*", h.capture = !0, d.source === $l.Photos || d.source === $l.Prompt ? h.removeAttribute("capture") : d.direction === bn.Front ? h.capture = "user" : d.direction === bn.Rear && (h.capture = "environment"), h.click()
  }
  multipleFileInputExperience(d, f) {
    let o = document.querySelector("#_capacitor-camera-input-multiple");
    const h = () => {
      var p;
      (p = o.parentNode) === null || p === void 0 || p.removeChild(o)
    };
    o || (o = document.createElement("input"), o.id = "_capacitor-camera-input-multiple", o.type = "file", o.hidden = !0, o.multiple = !0, document.body.appendChild(o), o.addEventListener("change", p => {
      const x = [];
      for (let N = 0; N < o.files.length; N++) {
        const b = o.files[N];
        let A = "jpeg";
        b.type === "image/png" ? A = "png" : b.type === "image/gif" && (A = "gif"), x.push({
          webPath: URL.createObjectURL(b),
          format: A
        })
      }
      d({
        photos: x
      }), h()
    }), o.addEventListener("cancel", p => {
      f(new Dl("User cancelled photos app")), h()
    })), o.accept = "image/*", o.click()
  }
  _getCameraPhoto(d, f) {
    return new Promise((o, h) => {
      const p = new FileReader,
        x = this._getFileFormat(d);
      f.resultType === "uri" ? o({
        webPath: URL.createObjectURL(d),
        format: x,
        saved: !1
      }) : (p.readAsDataURL(d), p.onloadend = () => {
        const N = p.result;
        f.resultType === "dataUrl" ? o({
          dataUrl: N,
          format: x,
          saved: !1
        }) : o({
          base64String: N.split(",")[1],
          format: x,
          saved: !1
        })
      }, p.onerror = N => {
        h(N)
      })
    })
  }
  async takePhotoCameraExperience(d, f, o) {
    await this._setupPWACameraModal(d.cameraDirection, h => {
      var p;
      return this._buildPhotoMediaResult(h, (p = d.includeMetadata) !== null && p !== void 0 ? p : !1)
    }, () => this.takePhotoCameraInputExperience(d, f, o), f, o)
  }
  takePhotoCameraInputExperience(d, f, o) {
    const h = this._createFileInput("_capacitor-camera-input-takephoto"),
      p = () => {
        var x;
        (x = h.parentNode) === null || x === void 0 || x.removeChild(h)
      };
    h.onchange = async x => {
      var N;
      if (!this._validateFileInput(h, o, p)) return;
      const b = h.files[0];
      f(await this._buildPhotoMediaResult(b, (N = d.includeMetadata) !== null && N !== void 0 ? N : !1)), p()
    }, h.oncancel = () => {
      o(new Dl("User cancelled photos app")), p()
    }, h.accept = "image/*", d.cameraDirection === bn.Front ? h.capture = "user" : h.capture = "environment", h.click()
  }
  galleryInputExperience(d, f, o) {
    var h, p;
    const x = this._createFileInput("_capacitor-camera-input-gallery");
    x.multiple = (h = d.allowMultipleSelection) !== null && h !== void 0 ? h : !1;
    const N = () => {
      var A;
      (A = x.parentNode) === null || A === void 0 || A.removeChild(x)
    };
    x.onchange = async A => {
      var k;
      if (!this._validateFileInput(x, o, N)) return;
      const E = [];
      for (let B = 0; B < x.files.length; B++) {
        const I = x.files[B];
        if (I.type.startsWith("image/")) E.push(await this._buildPhotoMediaResult(I, (k = d.includeMetadata) !== null && k !== void 0 ? k : !1));
        else if (I.type.startsWith("video/")) {
          const G = this._getFileFormat(I);
          let L, W, q;
          try {
            const ne = await this._getVideoMetadata(I);
            L = ne.thumbnail, d.includeMetadata && (W = ne.resolution, q = ne.duration)
          } catch (ne) {
            console.warn("Failed to get video metadata:", ne)
          }
          const V = {
            type: Ks.Video,
            thumbnail: L,
            webPath: URL.createObjectURL(I),
            saved: !1
          };
          d.includeMetadata && (V.metadata = {
            format: G,
            resolution: W,
            size: I.size,
            creationDate: new Date(I.lastModified).toISOString(),
            duration: q
          }), E.push(V)
        }
      }
      f({
        results: E
      }), N()
    }, x.oncancel = () => {
      o(new Dl("User cancelled photos app")), N()
    };
    const b = (p = d.mediaType) !== null && p !== void 0 ? p : bi.Photo;
    b === bi.Photo ? x.accept = "image/*" : b === bi.Video ? x.accept = "video/*" : x.accept = "image/*,video/*", x.click()
  }
  _getFileFormat(d) {
    return d.type === "image/png" ? "png" : d.type === "image/gif" ? "gif" : d.type.startsWith("video/") ? d.type.split("/")[1] : d.type.startsWith("image/") ? "jpeg" : d.type.split("/")[1] || "jpeg"
  }
  async _buildPhotoMediaResult(d, f) {
    const o = this._getFileFormat(d),
      h = await this._getBase64FromFile(d),
      p = {
        type: Ks.Photo,
        thumbnail: h,
        webPath: URL.createObjectURL(d),
        saved: !1
      };
    if (f) {
      const x = await this._getImageResolution(d);
      p.metadata = {
        format: o,
        resolution: x,
        size: d.size,
        creationDate: "lastModified" in d ? new Date(d.lastModified).toISOString() : new Date().toISOString()
      }
    }
    return p
  }
  _validateFileInput(d, f, o) {
    if (!d.files || d.files.length === 0) {
      const h = d.multiple ? "No files selected" : "No file selected";
      return f(new Dl(h)), o(), !1
    }
    return !0
  }
  async _setupPWACameraModal(d, f, o, h, p) {
    if (customElements.get("pwa-camera-modal")) {
      const x = document.createElement("pwa-camera-modal");
      x.facingMode = d === bn.Front ? "user" : "environment", document.body.appendChild(x);
      try {
        await x.componentOnReady(), x.addEventListener("onPhoto", async N => {
          const b = N.detail;
          b === null ? p(new Dl("User cancelled photos app")) : b instanceof Error ? p(b) : h(await f(b)), x.dismiss(), document.body.removeChild(x)
        }), x.present()
      } catch {
        o()
      }
    } else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."), o()
  }
  _createFileInput(d) {
    let f = document.querySelector(`#${d}`);
    return f || (f = document.createElement("input"), f.id = d, f.type = "file", f.hidden = !0, document.body.appendChild(f)), f
  }
  async _getImageResolution(d) {
    try {
      const f = await createImageBitmap(d),
        o = `${f.width}x${f.height}`;
      return f.close(), o
    } catch (f) {
      console.warn("Failed to get image resolution:", f);
      return
    }
  }
  _getBase64FromFile(d) {
    return new Promise((f, o) => {
      const h = new FileReader;
      h.onloadend = () => {
        const x = h.result.split(",")[1];
        f(x)
      }, h.onerror = p => {
        o(p)
      }, h.readAsDataURL(d)
    })
  }
  _getVideoMetadata(d) {
    return new Promise(f => {
      const o = document.createElement("video");
      o.preload = "metadata", o.muted = !0, o.onloadedmetadata = () => {
        const h = Math.min(1, o.duration * .1);
        o.currentTime = h
      }, o.onseeked = () => {
        const h = {
          resolution: `${o.videoWidth}x${o.videoHeight}`,
          duration: o.duration
        };
        try {
          const p = document.createElement("canvas");
          p.width = o.videoWidth, p.height = o.videoHeight;
          const x = p.getContext("2d");
          x && (x.drawImage(o, 0, 0, p.width, p.height), h.thumbnail = p.toDataURL("image/jpeg", .8).split(",")[1])
        } catch (p) {
          console.warn("Failed to generate video thumbnail:", p)
        }
        URL.revokeObjectURL(o.src), f(h)
      }, o.onerror = () => {
        URL.revokeObjectURL(o.src), f({})
      }, o.src = URL.createObjectURL(d)
    })
  }
  async checkPermissions() {
    if (typeof navigator > "u" || !navigator.permissions) throw this.unavailable("Permissions API not available in this browser");
    try {
      return {
        camera: (await window.navigator.permissions.query({
          name: "camera"
        })).state,
        photos: "granted"
      }
    } catch {
      throw this.unavailable("Camera permissions are not available in this browser")
    }
  }
  async requestPermissions() {
    throw this.unimplemented("Not implemented on web.")
  }
  async pickLimitedLibraryPhotos() {
    throw this.unavailable("Not implemented on web.")
  }
  async getLimitedLibraryPhotos() {
    throw this.unavailable("Not implemented on web.")
  }
}
const l0 = Di("Camera", {
  web: () => new bp
});
async function xn(c, d) {
  try {
    if (zi.isNativePlatform()) {
      const {
        Filesystem: f,
        Directory: o
      } = await Si(async () => {
        const {
          Filesystem: k,
          Directory: E
        } = await import("./index-CEwgQVqA.js");
        return {
          Filesystem: k,
          Directory: E
        }
      }, __vite__mapDeps([0, 1, 2, 3])), {
        Share: h
      } = await Si(async () => {
        const {
          Share: k
        } = await import("./index-BrhwAlQz.js");
        return {
          Share: k
        }
      }, __vite__mapDeps([4, 1, 2, 3])), p = c.split(",")[1], x = c.match(/^data:([^;]+);/), N = x ? x[1] : "application/octet-stream";
      let b = d || "document";
      if (!b.includes(".")) {
        const k = N.split("/")[1];
        b = `${b}.${k}`
      }
      const A = await f.writeFile({
        path: b,
        data: p,
        directory: o.Cache
      });
      return await h.share({
        title: b,
        url: A.uri,
        dialogTitle: "Save or Open Document"
      }), !0
    }
  } catch (f) {
    console.error("Native download failed:", f)
  }
  try {
    const f = document.createElement("a");
    f.href = c, f.download = d || "document", f.style.display = "none", document.body.appendChild(f), f.click(), setTimeout(() => document.body.removeChild(f), 100)
  } catch (f) {
    console.error("Web download failed:", f)
  }
}

function No({
  files: c,
  initialIndex: d = 0,
  onClose: f,
  title: o = "Document Viewer"
}) {
  var W;
  const [h, p] = Y.useState(d), [x, N] = Y.useState(1), [b, A] = Y.useState(0);
  if (!c || !c.length) return null;
  const k = Math.min(h, c.length - 1),
    E = c[k];
  if (!E || !E.data) return null;
  const B = E.type === "application/pdf" || ((W = E.name) == null ? void 0 : W.toLowerCase().endsWith(".pdf")),
    I = () => {
      xn(E.data, E.name || "document")
    },
    G = () => {
      p(q => Math.max(0, q - 1)), N(1), A(0)
    },
    L = () => {
      p(q => Math.min(c.length - 1, q + 1)), N(1), A(0)
    };
  return n.jsxs("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 2e3,
      background: "rgba(2, 6, 23, 0.98)",
      backdropFilter: "blur(20px)",
      display: "flex",
      flexDirection: "column",
      color: "white",
      animation: "viewerFadeIn 0.25s ease-out"
    },
    children: [n.jsxs("div", {
      style: {
        padding: "1rem 1.25rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.8))",
        flexShrink: 0
      },
      children: [n.jsxs("div", {
        style: {
          minWidth: 0
        },
        children: [n.jsx("h3", {
          style: {
            fontSize: "1rem",
            fontWeight: 900,
            margin: 0,
            background: "linear-gradient(135deg, #a5b4fc, #f0abfc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          },
          children: o
        }), n.jsxs("p", {
          style: {
            fontSize: "0.7rem",
            color: "#64748b",
            margin: "2px 0 0",
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: [E.name, " • ", k + 1, " of ", c.length]
        })]
      }), n.jsxs("div", {
        style: {
          display: "flex",
          gap: "0.5rem",
          flexShrink: 0
        },
        children: [n.jsx("button", {
          onClick: I,
          style: {
            width: 42,
            height: 42,
            borderRadius: "0.85rem",
            border: "1px solid rgba(16,185,129,0.25)",
            background: "rgba(16,185,129,0.1)",
            color: "#34d399",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s"
          },
          children: n.jsx(Wt, {
            size: 20
          })
        }), n.jsx("button", {
          onClick: f,
          style: {
            width: 42,
            height: 42,
            borderRadius: "0.85rem",
            border: "1px solid rgba(239,68,68,0.25)",
            background: "rgba(239,68,68,0.1)",
            color: "#f87171",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s"
          },
          children: n.jsx(St, {
            size: 20
          })
        })]
      })]
    }), n.jsx("div", {
      style: {
        flex: 1,
        overflow: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        position: "relative",
        WebkitOverflowScrolling: "touch"
      },
      children: B ? n.jsxs("div", {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem"
        },
        children: [n.jsx("div", {
          style: {
            width: 100,
            height: 100,
            borderRadius: "1.5rem",
            background: "linear-gradient(135deg, rgba(239,68,68,0.2), rgba(251,146,60,0.15))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(239,68,68,0.2)"
          },
          children: n.jsx("span", {
            style: {
              fontSize: "2.5rem"
            },
            children: "📄"
          })
        }), n.jsxs("div", {
          style: {
            textAlign: "center"
          },
          children: [n.jsx("p", {
            style: {
              fontWeight: 800,
              fontSize: "1.1rem",
              marginBottom: "0.5rem"
            },
            children: "PDF Document"
          }), n.jsx("p", {
            style: {
              color: "#64748b",
              fontSize: "0.85rem",
              marginBottom: "1.5rem"
            },
            children: E.name
          })]
        }), n.jsxs("button", {
          onClick: I,
          style: {
            padding: "1rem 2.5rem",
            borderRadius: "1rem",
            background: "linear-gradient(135deg, #6366f1, #d946ef)",
            border: "none",
            color: "white",
            fontWeight: 800,
            fontSize: "0.9rem",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(99,102,241,0.35)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem"
          },
          children: [n.jsx(Wt, {
            size: 18
          }), " Download & Open PDF"]
        })]
      }) : n.jsx("div", {
        style: {
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: `scale(${x}) rotate(${b}deg)`,
          maxWidth: "100%",
          maxHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: n.jsx("img", {
          src: E.data,
          alt: E.name,
          style: {
            maxWidth: "100%",
            maxHeight: "calc(100vh - 200px)",
            borderRadius: "0.75rem",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.05)"
          }
        })
      })
    }), n.jsxs("div", {
      style: {
        padding: "1rem 1.25rem 1.75rem",
        background: "linear-gradient(180deg, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.98))",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        flexShrink: 0
      },
      children: [!B && n.jsx("div", {
        style: {
          display: "flex",
          gap: "0.6rem"
        },
        children: [{
          icon: n.jsx(Ng, {
            size: 18
          }),
          action: () => N(q => Math.max(.5, q - .25))
        }, {
          icon: n.jsxs("span", {
            style: {
              fontSize: "0.7rem",
              fontWeight: 900
            },
            children: [Math.round(x * 100), "%"]
          }),
          action: () => N(1)
        }, {
          icon: n.jsx(Ag, {
            size: 18
          }),
          action: () => N(q => Math.min(3, q + .25))
        }, {
          icon: n.jsx(Cg, {
            size: 18
          }),
          action: () => A(q => q + 90)
        }].map((q, V) => n.jsx("button", {
          onClick: q.action,
          style: {
            width: 44,
            height: 44,
            borderRadius: "0.85rem",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.04)",
            color: "#cbd5e1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s"
          },
          children: q.icon
        }, V))
      }), c.length > 1 && n.jsxs("div", {
        style: {
          display: "flex",
          gap: "0.75rem",
          alignItems: "center"
        },
        children: [n.jsx("button", {
          disabled: k === 0,
          onClick: G,
          style: {
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: k === 0 ? "rgba(255,255,255,0.02)" : "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.2)",
            color: k === 0 ? "#334155" : "#a5b4fc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          },
          children: n.jsx(wg, {
            size: 22
          })
        }), n.jsxs("span", {
          style: {
            fontSize: "0.85rem",
            fontWeight: 900,
            color: "#a5b4fc",
            minWidth: "3.5rem",
            textAlign: "center",
            background: "rgba(99,102,241,0.1)",
            padding: "0.35rem 1rem",
            borderRadius: "99px"
          },
          children: [k + 1, " / ", c.length]
        }), n.jsx("button", {
          disabled: k === c.length - 1,
          onClick: L,
          style: {
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: k === c.length - 1 ? "rgba(255,255,255,0.02)" : "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.2)",
            color: k === c.length - 1 ? "#334155" : "#a5b4fc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          },
          children: n.jsx(Sa, {
            size: 22
          })
        })]
      })]
    })]
  })
}
const bo = {
    name: "",
    mobile: "",
    address: "",
    aadhar: "",
    photo: "",
    leaseStart: "",
    leaseEnd: "",
    securityDeposit: "",
    rent: "",
    kescoDeposit: "",
    liftWaterBill: "",
    liftWaterMaintenance: "",
    notes: "",
    agreementFiles: [],
    aadharFiles: []
  },
  qm = c => new Promise((d, f) => {
    const o = new FileReader;
    o.onloadend = () => d({
      data: o.result,
      name: c.name,
      type: c.type
    }), o.onerror = f, o.readAsDataURL(c)
  });

function pn({
  icon: c,
  title: d,
  children: f
}) {
  return n.jsxs("div", {
    className: "form-section",
    children: [n.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1.25rem"
      },
      children: [n.jsx("div", {
        className: "sec-icon",
        children: n.jsx(c, {
          size: 18
        })
      }), n.jsx("div", {
        style: {
          fontWeight: 800,
          fontSize: "0.95rem",
          color: "#f1f5f9"
        },
        children: d
      })]
    }), f]
  })
}

function ut({
  label: c,
  icon: d,
  ...f
}) {
  return n.jsxs("div", {
    className: "input-group",
    children: [n.jsx("label", {
      className: "form-label",
      children: c
    }), n.jsxs("div", {
      style: {
        position: "relative"
      },
      children: [n.jsx("input", {
        className: "input input-with-icon",
        ...f
      }), d && n.jsx(d, {
        className: "input-icon",
        size: 18
      })]
    })]
  })
}

function xp() {
  const {
    unitId: c
  } = xg(), d = zo();
  Y.useRef(null);
  const f = Zt(() => X.tenants.where("unitId").equals(c).toArray(), [c]),
    o = f ? f[0] : void 0,
    h = Zt(() => o ? X.payments.where("tenantId").equals(o.id).reverse().toArray() : [], [o]),
    [p, x] = Y.useState(!1),
    [N, b] = Y.useState(!1),
    [A, k] = Y.useState(!1),
    [E, B] = Y.useState(null),
    [I, G] = Y.useState(null),
    [L, W] = Y.useState({
      date: new Date().toISOString().split("T")[0],
      rent: "",
      lift: "",
      water: "",
      electricity: "",
      other: "",
      amount: "",
      type: "Rent"
    }),
    [q, V] = Y.useState(bo),
    [ne, se] = Y.useState(!1),
    [Qe, _e] = Y.useState(c === "NEW" ? "" : c),
    [xe, _] = Y.useState({
      open: !1,
      files: [],
      index: 0,
      title: ""
    }),
    [ae, ye] = Y.useState("all"),
    [O, J] = Y.useState("all"),
    [Me, We] = Y.useState({});
  Y.useEffect(() => {
    if (h && h.length > 0) {
      const C = h[0].date.substring(0, 7);
      We(H => Object.keys(H).length === 0 ? {
        [C]: !0
      } : H)
    }
  }, [h]), Y.useEffect(() => {
    ae !== "all" && We(C => ({
      ...C,
      [ae]: !0
    }))
  }, [ae]), Y.useEffect(() => {
    o !== void 0 && (o ? (V({
      ...bo,
      ...o
    }), ne || (x(!1), se(!0))) : (V(bo), x(!0), se(!0)))
  }, [o, ne]), Y.useEffect(() => {
    se(!1), _e(c === "NEW" ? "" : c)
  }, [c]);
  const Ye = async C => {
    const H = C.target.files[0];
    if (!H) return;
    const re = await qm(H);
    V(qe => ({
      ...qe,
      photo: re.data
    }))
  }, v = async C => {
    try {
      const H = await l0.getPhoto({
          quality: 90,
          allowEditing: !1,
          resultType: Fs.DataUrl,
          source: $l.Prompt
        }),
        re = {
          data: H.dataUrl,
          name: `IMG_${new Date().getTime()}.${H.format}`,
          type: `image/${H.format}`
        };
      V(qe => ({
        ...qe,
        [C]: [...qe[C] || [], re]
      }))
    } catch {
      console.log("User cancelled camera")
    }
  }, U = async (C, H) => {
    const re = C.target.files[0];
    if (!re) return;
    const tt = {
      data: (await qm(re)).data,
      name: re.name,
      type: re.type
    };
    V(Jt => ({
      ...Jt,
      [H]: [...Jt[H] || [], tt]
    })), C.target.value = ""
  }, Z = (C, H) => {
    V(re => ({
      ...re,
      [C]: re[C].filter((qe, tt) => tt !== H)
    }))
  }, te = async C => {
    C.preventDefault();
    const H = c === "NEW" ? Qe : c;
    if (!H) return alert("Please enter a Unit Number");
    if (o != null && o.id) await X.tenants.update(o.id, {
      ...q,
      unitId: H
    });
    else {
      const re = await X.tenants.where("unitId").equals(H).first();
      if (re && c === "NEW") return alert(`Unit ${H} is already occupied by ${re.name}`);
      await X.tenants.add({
        ...q,
        unitId: H
      })
    }
    se(!1), x(!1), c === "NEW" && d(`/tenant/${H}`)
  }, me = async () => {
    o != null && o.id && (await X.payments.where("tenantId").equals(o.id).delete(), await X.tenants.delete(o.id)), d("/")
  }, ie = C => V(H => ({
    ...H,
    [C.target.name]: C.target.value
  })), le = () => {
    G(null), W({
      date: new Date().toISOString().split("T")[0],
      rent: (o == null ? void 0 : o.rent) || "",
      lift: (o == null ? void 0 : o.liftWaterMaintenance) || "",
      water: (o == null ? void 0 : o.liftWaterBill) || "",
      electricity: "",
      other: "",
      amount: "",
      type: "Rent"
    }), b(!0)
  }, $ = C => {
    G(C), W({
      date: C.date,
      rent: "",
      lift: "",
      water: "",
      electricity: "",
      other: "",
      amount: C.amount,
      type: C.type
    }), b(!0)
  }, ve = async C => {
    if (C.preventDefault(), !!o) {
      if (I) {
        const H = parseFloat(L.amount);
        if (isNaN(H) || H <= 0) {
          alert("Please enter a valid amount.");
          return
        }
        await X.payments.update(I.id, {
          amount: H,
          type: L.type,
          date: L.date
        })
      } else {
        const H = [];
        if (parseFloat(L.rent) > 0 && H.push({
            amount: parseFloat(L.rent),
            type: "Rent"
          }), parseFloat(L.lift) > 0 && H.push({
            amount: parseFloat(L.lift),
            type: "Lift Maintenance"
          }), parseFloat(L.water) > 0 && H.push({
            amount: parseFloat(L.water),
            type: "Water Bill"
          }), parseFloat(L.electricity) > 0 && H.push({
            amount: parseFloat(L.electricity),
            type: "Electricity"
          }), parseFloat(L.other) > 0 && H.push({
            amount: parseFloat(L.other),
            type: "Other"
          }), H.length === 0) {
          alert("Please enter a valid amount for at least one category.");
          return
        }
        for (const re of H) await X.payments.add({
          tenantId: o.id,
          amount: re.amount,
          type: re.type,
          date: L.date,
          status: "Paid"
        })
      }
      b(!1)
    }
  }, dt = async C => {
    await X.payments.delete(C), B(null)
  };
  if (c !== "NEW" && f === void 0) return n.jsx("div", {
    style: {
      height: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    children: n.jsx("div", {
      className: "animate-pulse",
      style: {
        color: "#6366f1",
        fontWeight: 700
      },
      children: "Loading Skyline Data..."
    })
  });
  if (c !== "NEW" && !o && !p) return n.jsxs("div", {
    style: {
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem"
    },
    children: [n.jsx(Il, {
      size: 48,
      color: "#ef4444"
    }), n.jsx("h2", {
      style: {
        color: "white",
        fontWeight: 900
      },
      children: "Tenant Not Found"
    }), n.jsx("button", {
      onClick: () => d("/"),
      className: "btn-primary",
      style: {
        padding: "0.75rem 1.5rem",
        borderRadius: "1rem"
      },
      children: "Return Home"
    })]
  });
  if (p) return n.jsxs("div", {
    className: "animate-fade",
    children: [n.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1.5rem"
      },
      children: [n.jsx("button", {
        type: "button",
        className: "btn-icon btn-secondary",
        onClick: () => o ? x(!1) : d("/"),
        children: n.jsx(xo, {
          size: 20
        })
      }), n.jsxs("div", {
        style: {
          flex: 1
        },
        children: [n.jsx("h2", {
          style: {
            fontWeight: 900,
            fontSize: "1.25rem",
            margin: 0,
            letterSpacing: "-0.02em"
          },
          children: o ? "Edit Profile" : "New Registration"
        }), n.jsxs("div", {
          style: {
            fontSize: "0.75rem",
            color: "#64748b",
            fontWeight: 700
          },
          children: ["Unit ", c === "NEW" ? "Assignment" : c]
        })]
      })]
    }), n.jsxs("form", {
      onSubmit: te,
      style: {
        paddingBottom: "2rem"
      },
      children: [n.jsxs("div", {
        className: "form-section",
        style: {
          display: "flex",
          alignItems: "center",
          gap: "1.25rem"
        },
        children: [n.jsx("div", {
          className: `camera-box ${q.photo?"has-img":""}`,
          children: q.photo ? n.jsxs(n.Fragment, {
            children: [n.jsx("img", {
              src: q.photo,
              alt: "Profile",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            }), n.jsx("div", {
              style: {
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1
              },
              children: n.jsx("button", {
                type: "button",
                onClick: () => _({
                  open: !0,
                  files: [{
                    data: q.photo,
                    name: "Profile Photo",
                    type: "image/jpeg"
                  }],
                  index: 0,
                  title: "Profile Photo"
                }),
                style: {
                  background: "rgba(99,102,241,0.9)",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  padding: "8px",
                  cursor: "pointer"
                },
                children: n.jsx(Jl, {
                  size: 20
                })
              })
            }), n.jsx("button", {
              type: "button",
              onClick: () => V(C => ({
                ...C,
                photo: ""
              })),
              style: {
                position: "absolute",
                top: 5,
                right: 5,
                background: "rgba(239,68,68,0.8)",
                border: "none",
                borderRadius: "50%",
                color: "white",
                padding: "4px",
                cursor: "pointer"
              },
              children: n.jsx(St, {
                size: 12
              })
            })]
          }) : n.jsx(Gs, {
            size: 40,
            style: {
              color: "#1e293b"
            }
          })
        }), n.jsxs("div", {
          className: "camera-actions",
          children: [n.jsxs("label", {
            className: "btn btn-primary",
            style: {
              padding: "0.5rem 1rem",
              fontSize: "0.75rem"
            },
            children: [n.jsx(pi, {
              size: 14
            }), " Take Photo", n.jsx("input", {
              type: "file",
              accept: "image/*",
              capture: "user",
              style: {
                display: "none"
              },
              onChange: Ye
            })]
          }), n.jsxs("label", {
            className: "btn btn-secondary",
            style: {
              padding: "0.5rem 1rem",
              fontSize: "0.75rem"
            },
            children: [n.jsx(vn, {
              size: 14
            }), " Browse", n.jsx("input", {
              type: "file",
              accept: "image/*",
              style: {
                display: "none"
              },
              onChange: Ye
            })]
          })]
        })]
      }), n.jsxs(pn, {
        icon: Gs,
        title: "Identity & Unit Info",
        children: [c === "NEW" && n.jsxs("div", {
          className: "input-group",
          children: [n.jsx("label", {
            className: "form-label",
            children: "Unit Selection"
          }), n.jsxs("div", {
            style: {
              position: "relative"
            },
            children: [n.jsxs("select", {
              className: "input input-with-icon",
              required: !0,
              value: Qe,
              onChange: C => _e(C.target.value),
              children: [n.jsx("option", {
                value: "",
                children: "Select Unit"
              }), qt.UNITS.map(C => n.jsxs("option", {
                value: C,
                disabled: qt.SOLD_UNITS.includes(C),
                children: ["Unit ", C, " ", qt.SOLD_UNITS.includes(C) ? "(SOLD)" : ""]
              }, C))]
            }), n.jsx(Tg, {
              className: "input-icon",
              size: 18
            })]
          })]
        }), n.jsx(ut, {
          label: "Full Name",
          icon: Gs,
          name: "name",
          value: q.name,
          onChange: ie,
          required: !0,
          placeholder: "Enter full name"
        }), n.jsx(ut, {
          label: "Mobile Number",
          icon: Ws,
          type: "tel",
          name: "mobile",
          value: q.mobile,
          onChange: ie,
          required: !0,
          pattern: "\\d{10}",
          maxLength: 10,
          title: "Mobile number must be exactly 10 digits",
          placeholder: "Enter 10-digit mobile"
        }), n.jsx(ut, {
          label: "Aadhar Card Number",
          icon: zm,
          type: "text",
          name: "aadhar",
          value: q.aadhar,
          onChange: ie,
          pattern: "\\d{12}",
          maxLength: 12,
          title: "Aadhar number must be exactly 12 digits",
          placeholder: "Enter 12-digit Aadhar"
        }), n.jsx("label", {
          className: "form-label mt-4",
          children: "Aadhar Card Documents (Multiple Images)"
        }), n.jsxs("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
            gap: "0.75rem",
            marginBottom: "1rem"
          },
          children: [(q.aadharFiles || []).map((C, H) => {
            var qe;
            const re = C.type === "application/pdf" || ((qe = C.name) == null ? void 0 : qe.toLowerCase().endsWith(".pdf"));
            return n.jsxs("div", {
              className: "group",
              style: {
                position: "relative",
                aspectSquare: "1/1",
                background: "#1e293b",
                borderRadius: "0.75rem",
                overflow: "hidden",
                border: "1px solid var(--border)"
              },
              children: [re ? n.jsxs("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(239,68,68,0.1)",
                  color: "#f87171",
                  gap: "4px"
                },
                children: [n.jsx(Ft, {
                  size: 24
                }), n.jsx("span", {
                  style: {
                    fontSize: "0.5rem",
                    fontWeight: 800
                  },
                  children: "PDF"
                })]
              }) : n.jsx("img", {
                src: C.data,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }), n.jsxs("div", {
                style: {
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  opacity: 1
                },
                children: [n.jsx("button", {
                  type: "button",
                  onClick: () => _({
                    open: !0,
                    files: q.aadharFiles,
                    index: H,
                    title: "Aadhar Card"
                  }),
                  style: {
                    background: "rgba(99,102,241,0.9)",
                    border: "none",
                    borderRadius: "50%",
                    color: "white",
                    padding: "6px",
                    cursor: "pointer"
                  },
                  children: n.jsx(Jl, {
                    size: 12
                  })
                }), n.jsx("button", {
                  type: "button",
                  onClick: () => xn(C.data, C.name),
                  style: {
                    background: "rgba(16,185,129,0.9)",
                    border: "none",
                    borderRadius: "50%",
                    color: "white",
                    padding: "6px",
                    cursor: "pointer"
                  },
                  children: n.jsx(Wt, {
                    size: 12
                  })
                })]
              }), n.jsx("button", {
                type: "button",
                onClick: () => Z("aadharFiles", H),
                style: {
                  position: "absolute",
                  top: 2,
                  right: 2,
                  background: "rgba(239,68,68,0.8)",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  padding: "3px"
                },
                children: n.jsx(St, {
                  size: 8
                })
              })]
            }, H)
          }), n.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem"
            },
            children: [n.jsx("button", {
              type: "button",
              onClick: () => v("aadharFiles"),
              style: {
                aspectSquare: "1/1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(99,102,241,0.1)",
                border: "1px dashed #6366f1",
                borderRadius: "0.75rem",
                color: "#818cf8",
                cursor: "pointer",
                minHeight: 40,
                width: 80
              },
              children: n.jsx(pi, {
                size: 18
              })
            }), n.jsxs("label", {
              style: {
                aspectSquare: "1/1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(99,102,241,0.05)",
                border: "1px dashed rgba(99,102,241,0.3)",
                borderRadius: "0.75rem",
                color: "#94a3b8",
                cursor: "pointer",
                minHeight: 40,
                width: 80
              },
              children: [n.jsx(vn, {
                size: 18
              }), n.jsx("input", {
                type: "file",
                accept: "image/*,.pdf",
                style: {
                  display: "none"
                },
                onChange: C => U(C, "aadharFiles")
              })]
            })]
          })]
        }), n.jsxs("div", {
          className: "input-group",
          children: [n.jsx("label", {
            className: "form-label",
            children: "Permanent Address"
          }), n.jsx("textarea", {
            name: "address",
            value: q.address,
            onChange: ie,
            className: "textarea",
            placeholder: "Enter home address",
            style: {
              minHeight: 80
            }
          })]
        })]
      }), n.jsxs(pn, {
        icon: Vt,
        title: "Lease Agreement",
        children: [n.jsxs("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem"
          },
          children: [n.jsx(ut, {
            label: "Start Date",
            icon: Vt,
            type: "date",
            name: "leaseStart",
            value: q.leaseStart,
            onChange: ie,
            required: !0
          }), n.jsx(ut, {
            label: "End Date",
            icon: Vt,
            type: "date",
            name: "leaseEnd",
            value: q.leaseEnd,
            onChange: ie,
            required: !0
          })]
        }), n.jsx("label", {
          className: "form-label mt-4",
          children: "Agreement Documents (Multiple Images)"
        }), n.jsxs("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
            gap: "0.75rem",
            marginBottom: "1rem"
          },
          children: [(q.agreementFiles || []).map((C, H) => {
            var qe;
            const re = C.type === "application/pdf" || ((qe = C.name) == null ? void 0 : qe.toLowerCase().endsWith(".pdf"));
            return n.jsxs("div", {
              style: {
                position: "relative",
                aspectSquare: "1/1",
                background: "#1e293b",
                borderRadius: "0.75rem",
                overflow: "hidden",
                border: "1px solid var(--border)"
              },
              children: [re ? n.jsxs("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(239,68,68,0.1)",
                  color: "#f87171",
                  gap: "4px"
                },
                children: [n.jsx(Ft, {
                  size: 24
                }), n.jsx("span", {
                  style: {
                    fontSize: "0.5rem",
                    fontWeight: 800
                  },
                  children: "PDF"
                })]
              }) : n.jsx("img", {
                src: C.data,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }), n.jsxs("div", {
                style: {
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem"
                },
                children: [n.jsx("button", {
                  type: "button",
                  onClick: () => _({
                    open: !0,
                    files: q.agreementFiles,
                    index: H,
                    title: "Lease Agreement"
                  }),
                  style: {
                    background: "rgba(99,102,241,0.9)",
                    border: "none",
                    borderRadius: "50%",
                    color: "white",
                    padding: "6px",
                    cursor: "pointer"
                  },
                  children: n.jsx(Jl, {
                    size: 12
                  })
                }), n.jsx("button", {
                  type: "button",
                  onClick: () => xn(C.data, C.name),
                  style: {
                    background: "rgba(16,185,129,0.9)",
                    border: "none",
                    borderRadius: "50%",
                    color: "white",
                    padding: "6px",
                    cursor: "pointer"
                  },
                  children: n.jsx(Wt, {
                    size: 12
                  })
                })]
              }), n.jsx("button", {
                type: "button",
                onClick: () => Z("agreementFiles", H),
                style: {
                  position: "absolute",
                  top: 2,
                  right: 2,
                  background: "rgba(239,68,68,0.8)",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  padding: "3px"
                },
                children: n.jsx(St, {
                  size: 8
                })
              })]
            }, H)
          }), n.jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "0.4rem"
            },
            children: [n.jsx("button", {
              type: "button",
              onClick: () => v("agreementFiles"),
              style: {
                aspectSquare: "1/1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(217,70,239,0.1)",
                border: "1px dashed #d946ef",
                borderRadius: "0.75rem",
                color: "#e879f9",
                cursor: "pointer",
                minHeight: 40,
                width: 80
              },
              children: n.jsx(pi, {
                size: 18
              })
            }), n.jsxs("label", {
              style: {
                aspectSquare: "1/1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(217,70,239,0.05)",
                border: "1px dashed rgba(217,70,239,0.3)",
                borderRadius: "0.75rem",
                color: "#94a3b8",
                cursor: "pointer",
                minHeight: 40,
                width: 80
              },
              children: [n.jsx(vn, {
                size: 18
              }), n.jsx("input", {
                type: "file",
                accept: "image/*,.pdf",
                style: {
                  display: "none"
                },
                onChange: C => U(C, "agreementFiles")
              })]
            })]
          })]
        })]
      }), n.jsxs(pn, {
        icon: al,
        title: "Financial Setup",
        children: [n.jsxs("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem"
          },
          children: [n.jsx(ut, {
            label: "Monthly Rent",
            icon: al,
            type: "number",
            name: "rent",
            value: q.rent,
            onChange: ie,
            placeholder: "0"
          }), n.jsx(ut, {
            label: "Security Deposit",
            icon: al,
            type: "number",
            name: "securityDeposit",
            value: q.securityDeposit,
            onChange: ie,
            placeholder: "0"
          }), n.jsx(ut, {
            label: "Kesco Deposit",
            icon: al,
            type: "number",
            name: "kescoDeposit",
            value: q.kescoDeposit,
            onChange: ie,
            placeholder: "0"
          }), n.jsx(ut, {
            label: "Lift/Water Bill",
            icon: al,
            type: "number",
            name: "liftWaterBill",
            value: q.liftWaterBill,
            onChange: ie,
            placeholder: "0"
          })]
        }), n.jsx(ut, {
          label: "Maintenance Charges",
          icon: Dm,
          type: "number",
          name: "liftWaterMaintenance",
          value: q.liftWaterMaintenance,
          onChange: ie,
          placeholder: "0"
        })]
      }), n.jsx(pn, {
        icon: vo,
        title: "Remarks",
        children: n.jsx("textarea", {
          name: "notes",
          value: q.notes,
          onChange: ie,
          className: "textarea",
          placeholder: "Any special conditions or remarks...",
          style: {
            minHeight: 80
          }
        })
      }), n.jsxs("button", {
        type: "submit",
        className: "btn btn-primary w-full",
        style: {
          padding: "1.1rem"
        },
        children: [n.jsx(Km, {
          size: 18
        }), " ", o ? "Save Changes" : "Complete Registration"]
      }), o && n.jsxs("button", {
        type: "button",
        onClick: () => k(!0),
        style: {
          width: "100%",
          marginTop: "1rem",
          padding: "0.85rem",
          background: "rgba(239,68,68,0.1)",
          color: "#f87171",
          border: "1px solid rgba(239,68,68,0.2)",
          borderRadius: "1rem",
          cursor: "pointer",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem"
        },
        children: [n.jsx(nl, {
          size: 16
        }), " Delete Tenant Profile"]
      })]
    }), A && n.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)"
      },
      children: n.jsxs("div", {
        style: {
          background: "rgba(15,23,42,0.95)",
          border: "1px solid rgba(239,68,68,0.4)",
          borderRadius: "1.25rem",
          width: "100%",
          maxWidth: "22rem",
          padding: "1.5rem",
          textAlign: "center"
        },
        children: [n.jsx("div", {
          style: {
            background: "rgba(239,68,68,0.15)",
            width: 60,
            height: 60,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem"
          },
          children: n.jsx(Il, {
            size: 32,
            style: {
              color: "#ef4444"
            }
          })
        }), n.jsx("h3", {
          style: {
            fontSize: "1.2rem",
            fontWeight: 800,
            color: "#f1f5f9",
            marginBottom: "0.5rem"
          },
          children: "Are you sure?"
        }), n.jsxs("p", {
          style: {
            fontSize: "0.88rem",
            color: "#94a3b8",
            marginBottom: "1.5rem"
          },
          children: ["Removing ", n.jsx("b", {
            children: q.name
          }), " will delete all data forever."]
        }), n.jsxs("div", {
          style: {
            display: "flex",
            gap: "0.75rem"
          },
          children: [n.jsx("button", {
            onClick: () => k(!1),
            className: "btn btn-secondary",
            style: {
              flex: 1
            },
            children: "Cancel"
          }), n.jsx("button", {
            onClick: me,
            className: "btn btn-primary",
            style: {
              flex: 1,
              background: "#ef4444"
            },
            children: "Yes, Delete"
          })]
        })]
      })
    })]
  });
  const ht = Array.from(new Set((h || []).map(C => C.date.substring(0, 7)))).sort((C, H) => H.localeCompare(C)),
    Kt = Array.from(new Set(["Rent", "Lift Maintenance", "Water Bill", "Electricity", "Security Deposit", "Other", ...(h || []).map(C => C.type)])).filter(Boolean),
    Gt = (h || []).filter(C => {
      const H = C.date.substring(0, 7),
        re = ae === "all" || H === ae,
        qe = O === "all" || C.type === O;
      return re && qe
    }),
    et = Gt.reduce((C, H) => {
      const re = H.date.substring(0, 7);
      return C[re] || (C[re] = []), C[re].push(H), C
    }, {}),
    ea = Object.keys(et).sort((C, H) => H.localeCompare(C)),
    Nl = C => {
      if (!C) return "";
      const [H, re] = C.split("-");
      return new Date(parseInt(H), parseInt(re) - 1, 1).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
      })
    },
    ta = C => {
      We(H => ({
        ...H,
        [C]: !H[C]
      }))
    };
  return n.jsxs("div", {
    className: "animate-fade",
    children: [n.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1.5rem"
      },
      children: [n.jsx("button", {
        className: "btn-icon btn-secondary",
        onClick: () => d(-1),
        children: n.jsx(xo, {
          size: 20
        })
      }), n.jsx("div", {
        style: {
          flex: 1
        },
        children: n.jsxs("h2", {
          style: {
            fontWeight: 900,
            fontSize: "1.2rem",
            margin: 0
          },
          children: ["Unit ", c, " Profile"]
        })
      }), o && n.jsxs("button", {
        onClick: () => x(!0),
        style: {
          padding: "0.5rem 1rem",
          background: "rgba(99,102,241,0.15)",
          color: "#a5b4fc",
          border: "1px solid rgba(99,102,241,0.3)",
          borderRadius: "0.75rem",
          cursor: "pointer",
          fontWeight: 700,
          fontSize: "0.8rem",
          display: "flex",
          alignItems: "center",
          gap: 6
        },
        children: [n.jsx(Zs, {
          size: 14
        }), " Edit"]
      })]
    }), o ? n.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem"
      },
      children: [n.jsxs("div", {
        style: {
          background: "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(217,70,239,0.15))",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "1.5rem",
          padding: "1.5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        },
        children: [n.jsx("div", {
          style: {
            width: 90,
            height: 90,
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: "3px solid rgba(255,255,255,0.2)",
            margin: "0 auto 1rem",
            background: "#020617",
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
          },
          children: q.photo ? n.jsx("img", {
            src: q.photo,
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }) : n.jsx(Gs, {
            size: 40,
            style: {
              margin: "25px auto",
              color: "#1e293b"
            }
          })
        }), n.jsx("div", {
          style: {
            fontWeight: 900,
            fontSize: "1.5rem",
            color: "white",
            marginBottom: "0.25rem",
            letterSpacing: "-0.02em"
          },
          children: q.name
        }), n.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            color: "#a5b4fc",
            fontSize: "0.85rem",
            fontWeight: 600
          },
          children: [n.jsxs("span", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "0.3rem"
            },
            children: [n.jsx(Ws, {
              size: 14
            }), " ", q.mobile]
          }), n.jsx("span", {
            style: {
              color: "rgba(255,255,255,0.2)"
            },
            children: "|"
          }), n.jsxs("span", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "0.3rem"
            },
            children: [n.jsx(Vs, {
              size: 14
            }), " Unit ", c]
          })]
        })]
      }), n.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem"
        },
        children: [n.jsxs("div", {
          className: "form-section",
          style: {
            marginBottom: 0,
            padding: "1rem"
          },
          children: [n.jsx("div", {
            className: "form-label",
            style: {
              marginBottom: "0.25rem"
            },
            children: "Monthly Rent"
          }), n.jsxs("div", {
            style: {
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#10b981"
            },
            children: ["₹", q.rent || "0"]
          })]
        }), n.jsxs("div", {
          className: "form-section",
          style: {
            marginBottom: 0,
            padding: "1rem"
          },
          children: [n.jsx("div", {
            className: "form-label",
            style: {
              marginBottom: "0.25rem"
            },
            children: "Lease Ends"
          }), n.jsx("div", {
            style: {
              fontSize: "1rem",
              fontWeight: 800,
              color: "#f59e0b",
              marginTop: "0.3rem"
            },
            children: q.leaseEnd || "—"
          })]
        })]
      }), n.jsx(pn, {
        icon: vo,
        title: "Tenant Records",
        children: n.jsx("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem"
          },
          children: [{
            label: "Aadhar",
            value: q.aadhar || "Not Provided",
            icon: zm
          }, {
            label: "Lease Period",
            value: `${q.leaseStart} to ${q.leaseEnd}`,
            icon: Vt
          }, {
            label: "Security Deposit",
            value: `₹${q.securityDeposit||0}`,
            icon: al
          }, {
            label: "Address",
            value: q.address || "Not Provided",
            icon: Vs
          }].map((C, H) => n.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.5rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)"
            },
            children: [n.jsx("div", {
              style: {
                color: "#475569"
              },
              children: n.jsx(C.icon, {
                size: 16
              })
            }), n.jsxs("div", {
              style: {
                flex: 1
              },
              children: [n.jsx("div", {
                style: {
                  fontSize: "0.65rem",
                  color: "#64748b",
                  fontWeight: 700,
                  textTransform: "uppercase"
                },
                children: C.label
              }), n.jsx("div", {
                style: {
                  fontSize: "0.85rem",
                  color: "#f1f5f9",
                  fontWeight: 500
                },
                children: C.value
              })]
            })]
          }, H))
        })
      }), (q.agreementFiles && q.agreementFiles.length > 0 || q.aadharFiles && q.aadharFiles.length > 0) && n.jsx(pn, {
        icon: Eg,
        title: "Documents",
        children: n.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem"
          },
          children: [q.agreementFiles && q.agreementFiles.map((C, H) => n.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0.75rem",
              background: "rgba(99,102,241,0.08)",
              borderRadius: "0.85rem",
              border: "1px solid rgba(99,102,241,0.15)"
            },
            children: [n.jsx("div", {
              style: {
                width: 42,
                height: 42,
                borderRadius: "0.75rem",
                background: "rgba(99,102,241,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              },
              children: n.jsx(Ft, {
                size: 20,
                style: {
                  color: "#a5b4fc"
                }
              })
            }), n.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [n.jsxs("div", {
                style: {
                  fontSize: "0.85rem",
                  fontWeight: 700
                },
                children: ["Agreement ", H + 1]
              }), n.jsx("div", {
                style: {
                  fontSize: "0.65rem",
                  color: "#64748b",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: C.name
              })]
            }), n.jsx("button", {
              onClick: () => _({
                open: !0,
                files: q.agreementFiles,
                index: H,
                title: "Agreement"
              }),
              style: {
                width: 34,
                height: 34,
                borderRadius: "0.6rem",
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#818cf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0
              },
              children: n.jsx(Jl, {
                size: 15
              })
            }), n.jsx("button", {
              onClick: () => xn(C.data, C.name),
              style: {
                width: 34,
                height: 34,
                borderRadius: "0.6rem",
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.2)",
                color: "#34d399",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0
              },
              children: n.jsx(Wt, {
                size: 15
              })
            })]
          }, `agr-${H}`)), q.aadharFiles && q.aadharFiles.map((C, H) => n.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0.75rem",
              background: "rgba(16,185,129,0.08)",
              borderRadius: "0.85rem",
              border: "1px solid rgba(16,185,129,0.15)"
            },
            children: [n.jsx("div", {
              style: {
                width: 42,
                height: 42,
                borderRadius: "0.75rem",
                background: "rgba(16,185,129,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              },
              children: n.jsx(Dm, {
                size: 20,
                style: {
                  color: "#34d399"
                }
              })
            }), n.jsxs("div", {
              style: {
                flex: 1,
                minWidth: 0
              },
              children: [n.jsxs("div", {
                style: {
                  fontSize: "0.85rem",
                  fontWeight: 700
                },
                children: ["Aadhar ", H + 1]
              }), n.jsx("div", {
                style: {
                  fontSize: "0.65rem",
                  color: "#64748b",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: C.name
              })]
            }), n.jsx("button", {
              onClick: () => _({
                open: !0,
                files: q.aadharFiles,
                index: H,
                title: "Aadhar Card"
              }),
              style: {
                width: 34,
                height: 34,
                borderRadius: "0.6rem",
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "#818cf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0
              },
              children: n.jsx(Jl, {
                size: 15
              })
            }), n.jsx("button", {
              onClick: () => xn(C.data, C.name),
              style: {
                width: 34,
                height: 34,
                borderRadius: "0.6rem",
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.2)",
                color: "#34d399",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0
              },
              children: n.jsx(Wt, {
                size: 15
              })
            })]
          }, `aad-${H}`))]
        })
      }), n.jsxs("div", {
        className: "form-section",
        children: [n.jsxs("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem"
          },
          children: [n.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "0.75rem"
            },
            children: [n.jsx("div", {
              className: "sec-icon",
              style: {
                background: "linear-gradient(135deg, #10b981, #34d399)"
              },
              children: n.jsx(Jm, {
                size: 18
              })
            }), n.jsx("div", {
              style: {
                fontWeight: 800,
                fontSize: "0.95rem"
              },
              children: "Payment History"
            })]
          }), n.jsxs("button", {
            onClick: le,
            className: "btn btn-primary",
            style: {
              padding: "0.4rem 0.8rem",
              fontSize: "0.7rem"
            },
            children: [n.jsx(xi, {
              size: 12
            }), " New Record"]
          })]
        }), h && h.length > 0 && n.jsxs("div", {
          style: {
            display: "flex",
            gap: "0.5rem",
            marginBottom: "1rem",
            background: "rgba(255, 255, 255, 0.02)",
            padding: "0.5rem",
            borderRadius: "0.85rem",
            border: "1px solid rgba(255, 255, 255, 0.05)"
          },
          children: [n.jsxs("select", {
            value: ae,
            onChange: C => ye(C.target.value),
            className: "input",
            style: {
              flex: 1,
              padding: "0.35rem 0.6rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              background: "rgba(15, 23, 42, 0.6)",
              borderColor: "rgba(255,255,255,0.06)",
              borderRadius: "0.6rem",
              color: "#f1f5f9",
              margin: 0,
              height: "36px"
            },
            children: [n.jsx("option", {
              value: "all",
              children: "All Months"
            }), ht.map(C => {
              const [H, re] = C.split("-"), tt = new Date(parseInt(H), parseInt(re) - 1, 1).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric"
              }).toUpperCase();
              return n.jsx("option", {
                value: C,
                children: tt
              }, C)
            })]
          }), n.jsxs("select", {
            value: O,
            onChange: C => J(C.target.value),
            className: "input",
            style: {
              flex: 1,
              padding: "0.35rem 0.6rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              background: "rgba(15, 23, 42, 0.6)",
              borderColor: "rgba(255,255,255,0.06)",
              borderRadius: "0.6rem",
              color: "#f1f5f9",
              margin: 0,
              height: "36px"
            },
            children: [n.jsx("option", {
              value: "all",
              children: "All Categories"
            }), Kt.map(C => n.jsx("option", {
              value: C,
              children: C
            }, C))]
          })]
        }), h && h.length > 0 ? Gt.length === 0 ? n.jsx("div", {
          style: {
            textAlign: "center",
            padding: "1.5rem 0",
            color: "#475569",
            fontSize: "0.8rem",
            fontWeight: 600
          },
          children: "No payment records match the selected filters."
        }) : n.jsx("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem"
          },
          children: ea.map(C => {
            const H = et[C] || [],
              re = !!Me[C],
              qe = H.reduce((tt, Jt) => tt + (parseFloat(Jt.amount) || 0), 0);
            return n.jsxs("div", {
              style: {
                background: "rgba(255, 255, 255, 0.01)",
                border: "1px solid rgba(255, 255, 255, 0.03)",
                borderRadius: "1.1rem",
                padding: "0.25rem",
                marginBottom: "0.25rem"
              },
              children: [n.jsxs("div", {
                onClick: () => ta(C),
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.6rem 0.75rem",
                  cursor: "pointer",
                  userSelect: "none"
                },
                children: [n.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  },
                  children: [n.jsx("div", {
                    style: {
                      color: re ? "#10b981" : "#64748b",
                      display: "flex",
                      alignItems: "center"
                    },
                    children: re ? n.jsx(Do, {
                      size: 16
                    }) : n.jsx(Sa, {
                      size: 16
                    })
                  }), n.jsx("span", {
                    style: {
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      color: "#e2e8f0"
                    },
                    children: Nl(C)
                  })]
                }), n.jsxs("span", {
                  style: {
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "#10b981",
                    background: "rgba(16, 185, 129, 0.1)",
                    padding: "0.15rem 0.5rem",
                    borderRadius: "0.4rem"
                  },
                  children: ["₹", qe.toLocaleString()]
                })]
              }), re && n.jsx("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  padding: "0.5rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.03)",
                  marginTop: "0.15rem",
                  animation: "fadeIn 0.2s ease-out"
                },
                children: H.map(tt => n.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "1rem",
                    border: "1px solid rgba(255,255,255,0.05)"
                  },
                  children: [n.jsx("div", {
                    style: {
                      width: 40,
                      height: 40,
                      borderRadius: "0.75rem",
                      background: "rgba(16,185,129,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    },
                    children: n.jsx(al, {
                      size: 18,
                      style: {
                        color: "#10b981"
                      }
                    })
                  }), n.jsxs("div", {
                    style: {
                      flex: 1,
                      minWidth: 0
                    },
                    children: [n.jsxs("div", {
                      style: {
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        color: "#f1f5f9"
                      },
                      children: ["₹", tt.amount]
                    }), n.jsxs("div", {
                      style: {
                        fontSize: "0.68rem",
                        color: "#64748b",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: [tt.type, " · ", tt.date]
                    })]
                  }), n.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: "0.35rem",
                      flexShrink: 0
                    },
                    children: [n.jsx("button", {
                      onClick: () => $(tt),
                      className: "btn-icon btn-secondary",
                      style: {
                        width: 30,
                        height: 30
                      },
                      children: n.jsx(Zs, {
                        size: 12
                      })
                    }), n.jsx("button", {
                      onClick: () => B(tt.id),
                      className: "btn-icon btn-secondary",
                      style: {
                        width: 30,
                        height: 30,
                        color: "#ef4444"
                      },
                      children: n.jsx(nl, {
                        size: 12
                      })
                    })]
                  })]
                }, tt.id))
              })]
            }, C)
          })
        }) : n.jsx("div", {
          style: {
            textAlign: "center",
            padding: "1.5rem 0",
            color: "#475569",
            fontSize: "0.8rem"
          },
          children: "No payment records found."
        })]
      })]
    }) : n.jsxs("div", {
      className: "form-section",
      style: {
        textAlign: "center",
        padding: "3rem 1.5rem"
      },
      children: [n.jsx("div", {
        style: {
          fontSize: "4rem",
          marginBottom: "1rem"
        },
        children: "🏢"
      }), n.jsxs("h3", {
        style: {
          fontWeight: 800,
          color: "#f1f5f9",
          marginBottom: "0.5rem"
        },
        children: ["Unit ", c, " is Vacant"]
      }), n.jsx("p", {
        style: {
          color: "#64748b",
          fontSize: "0.9rem",
          marginBottom: "2rem"
        },
        children: "Ready for a new tenant registration."
      }), n.jsxs("button", {
        onClick: () => x(!0),
        className: "btn btn-primary w-full",
        children: [n.jsx(xi, {
          size: 20
        }), " Register New Tenant"]
      })]
    }), N && n.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)"
      },
      children: n.jsxs("div", {
        style: {
          background: "rgba(15,23,42,0.95)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "1.5rem",
          width: "100%",
          maxWidth: "22rem",
          padding: "1.5rem"
        },
        className: "animate-fade",
        children: [n.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.25rem"
          },
          children: [n.jsx("h3", {
            style: {
              margin: 0,
              fontWeight: 900,
              fontSize: "1.1rem"
            },
            children: I ? "Edit Payment" : "New Receipt"
          }), n.jsx("button", {
            onClick: () => b(!1),
            style: {
              background: "none",
              border: "none",
              color: "#64748b",
              cursor: "pointer"
            },
            children: n.jsx(St, {
              size: 24
            })
          })]
        }), n.jsxs("form", {
          onSubmit: ve,
          children: [I ? n.jsxs(n.Fragment, {
            children: [n.jsx(ut, {
              label: "Amount Paid (₹)",
              icon: al,
              type: "number",
              required: !0,
              value: L.amount,
              onChange: C => W(H => ({
                ...H,
                amount: C.target.value
              }))
            }), n.jsxs("div", {
              className: "input-group",
              children: [n.jsx("label", {
                className: "form-label",
                children: "Payment Category"
              }), n.jsxs("select", {
                className: "input",
                value: L.type,
                onChange: C => W(H => ({
                  ...H,
                  type: C.target.value
                })),
                children: [n.jsx("option", {
                  children: "Rent"
                }), n.jsx("option", {
                  children: "Security Deposit"
                }), n.jsx("option", {
                  children: "Electricity"
                }), n.jsx("option", {
                  children: "Water/Maintenance"
                }), n.jsx("option", {
                  children: "Other"
                })]
              })]
            })]
          }) : n.jsxs("div", {
            style: {
              maxHeight: "250px",
              overflowY: "auto",
              paddingRight: "4px",
              marginBottom: "1rem"
            },
            className: "no-scrollbar",
            children: [n.jsx(ut, {
              label: "Rent Amount (₹)",
              type: "number",
              value: L.rent,
              onChange: C => W(H => ({
                ...H,
                rent: C.target.value
              })),
              placeholder: "0",
              icon: yi
            }), n.jsx(ut, {
              label: "Lift Maintenance (₹)",
              type: "number",
              value: L.lift,
              onChange: C => W(H => ({
                ...H,
                lift: C.target.value
              })),
              placeholder: "0",
              icon: Da
            }), n.jsx(ut, {
              label: "Water Bill (₹)",
              type: "number",
              value: L.water,
              onChange: C => W(H => ({
                ...H,
                water: C.target.value
              })),
              placeholder: "0",
              icon: vi
            }), n.jsx(ut, {
              label: "Electricity (₹)",
              type: "number",
              value: L.electricity,
              onChange: C => W(H => ({
                ...H,
                electricity: C.target.value
              })),
              placeholder: "0",
              icon: Da
            }), n.jsx(ut, {
              label: "Other Charges (₹)",
              type: "number",
              value: L.other,
              onChange: C => W(H => ({
                ...H,
                other: C.target.value
              })),
              placeholder: "0",
              icon: gi
            })]
          }), n.jsx(ut, {
            label: "Payment Date",
            icon: Vt,
            type: "date",
            required: !0,
            value: L.date,
            onChange: C => W(H => ({
              ...H,
              date: C.target.value
            }))
          }), n.jsx("div", {
            style: {
              display: "flex",
              gap: "0.75rem",
              marginTop: "1.5rem"
            },
            children: n.jsx("button", {
              type: "submit",
              className: "btn btn-primary",
              style: {
                flex: 1
              },
              children: "Confirm Payment"
            })
          })]
        })]
      })
    }), xe.open && n.jsx(No, {
      files: xe.files,
      initialIndex: xe.index,
      title: xe.title,
      onClose: () => _({
        ...xe,
        open: !1
      })
    }), E && n.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)"
      },
      children: n.jsxs("div", {
        style: {
          background: "rgba(15,23,42,0.97)",
          border: "1px solid rgba(239,68,68,0.35)",
          borderRadius: "1.25rem",
          width: "100%",
          maxWidth: "22rem",
          padding: "1.5rem",
          textAlign: "center"
        },
        className: "animate-fade",
        children: [n.jsx("div", {
          style: {
            background: "rgba(239,68,68,0.12)",
            width: 56,
            height: 56,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem"
          },
          children: n.jsx(nl, {
            size: 26,
            style: {
              color: "#ef4444"
            }
          })
        }), n.jsx("h3", {
          style: {
            fontSize: "1.05rem",
            fontWeight: 800,
            color: "#f1f5f9",
            marginBottom: "0.4rem"
          },
          children: "Delete Payment?"
        }), n.jsx("p", {
          style: {
            fontSize: "0.82rem",
            color: "#94a3b8",
            marginBottom: "1.5rem"
          },
          children: "This record will be permanently removed and cannot be undone."
        }), n.jsxs("div", {
          style: {
            display: "flex",
            gap: "0.75rem"
          },
          children: [n.jsx("button", {
            onClick: () => B(null),
            className: "btn btn-secondary",
            style: {
              flex: 1
            },
            children: "Cancel"
          }), n.jsx("button", {
            onClick: () => dt(E),
            className: "btn btn-primary",
            style: {
              flex: 1,
              background: "linear-gradient(135deg,#ef4444,#dc2626)",
              boxShadow: "0 6px 16px rgba(239,68,68,0.3)"
            },
            children: "Yes, Delete"
          })]
        })]
      })
    })]
  })
}
const Gm = ({
  icon: c,
  title: d,
  sub: f,
  date: o,
  status: h,
  color: p,
  to: x
}) => n.jsxs(za, {
  to: x,
  style: {
    display: "flex",
    alignItems: "center",
    gap: "0.85rem",
    padding: "1rem",
    background: "rgba(15,23,42,0.55)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "1.1rem",
    textDecoration: "none",
    transition: "all 0.25s",
    marginBottom: "0.75rem",
    position: "relative",
    overflow: "hidden"
  },
  className: "card-hover",
  children: [n.jsx("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "1rem",
      background: `${p}15`,
      border: `1px solid ${p}30`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: p,
      flexShrink: 0
    },
    children: n.jsx(c, {
      size: 22
    })
  }), n.jsxs("div", {
    style: {
      flex: 1
    },
    children: [n.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      },
      children: [n.jsx("h4", {
        style: {
          fontSize: "0.9rem",
          fontWeight: 800,
          color: "#f1f5f9",
          margin: 0
        },
        children: d
      }), n.jsx("span", {
        style: {
          fontSize: "0.65rem",
          fontWeight: 800,
          padding: "2px 8px",
          borderRadius: 99,
          background: `${p}20`,
          color: p,
          textTransform: "uppercase"
        },
        children: h
      })]
    }), n.jsx("p", {
      style: {
        fontSize: "0.75rem",
        color: "#94a3b8",
        margin: "2px 0"
      },
      children: f
    }), n.jsxs("div", {
      style: {
        fontSize: "0.68rem",
        color: "#64748b",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 4
      },
      children: [n.jsx(Vt, {
        size: 11
      }), " ", o]
    })]
  }), n.jsx(Sa, {
    size: 16,
    style: {
      color: "#334155"
    }
  })]
});

function vp() {
  const c = Zt(() => X.tenants.toArray()) || [],
    d = Zt(() => X.liftBills.toArray()) || [],
    f = Zt(() => X.waterBills.toArray()) || [],
    [o, h] = Y.useState({
      critical: [],
      upcoming: []
    });
  return Y.useEffect(() => {
    const p = new Date,
      x = [],
      N = [];
    c.forEach(b => {
      const A = new Date(b.leaseEnd),
        k = Math.ceil((A - p) / (1e3 * 60 * 60 * 24));
      k < 0 ? x.push({
        id: `lease-${b.id}`,
        type: "lease",
        icon: Rg,
        title: b.name,
        sub: `Lease expired for Unit ${b.unitId}`,
        date: b.leaseEnd,
        status: "Expired",
        color: "#ef4444",
        to: `/tenant/${b.unitId}`
      }) : k <= 7 ? x.push({
        id: `lease-${b.id}`,
        type: "lease",
        icon: $m,
        title: b.name,
        sub: `Lease ends in ${k} days (Unit ${b.unitId})`,
        date: b.leaseEnd,
        status: "Urgent",
        color: "#f59e0b",
        to: `/tenant/${b.unitId}`
      }) : k <= 30 && N.push({
        id: `lease-${b.id}`,
        type: "lease",
        icon: ji,
        title: b.name,
        sub: `Expiring soon (Unit ${b.unitId})`,
        date: b.leaseEnd,
        status: "Coming Up",
        color: "#6366f1",
        to: `/tenant/${b.unitId}`
      })
    }), d.forEach(b => {
      if (b.status === "Paid") return;
      const A = b.dueDate ? new Date(b.dueDate) : null;
      if (!A) return;
      const k = Math.ceil((A - p) / (1e3 * 60 * 60 * 24));
      k < 0 ? x.push({
        id: `lift-${b.id}`,
        type: "lift",
        icon: Da,
        title: "Lift Maintenance Bill",
        sub: `₹${b.amount} is overdue for payment`,
        date: b.dueDate,
        status: "Overdue",
        color: "#ef4444",
        to: "/lift"
      }) : k <= 7 && N.push({
        id: `lift-${b.id}`,
        type: "lift",
        icon: Da,
        title: "Lift Bill Due",
        sub: `₹${b.amount} due in ${k} days`,
        date: b.dueDate,
        status: "Due Soon",
        color: "#a855f7",
        to: "/lift"
      })
    }), f.forEach(b => {
      if (b.status === "Paid") return;
      const A = b.dueDate ? new Date(b.dueDate) : null;
      if (!A) return;
      const k = Math.ceil((A - p) / (1e3 * 60 * 60 * 24));
      k < 0 ? x.push({
        id: `water-${b.id}`,
        type: "water",
        icon: vi,
        title: "Water Utility Bill",
        sub: `₹${b.amount} is overdue for payment`,
        date: b.dueDate,
        status: "Overdue",
        color: "#ef4444",
        to: "/water"
      }) : k <= 7 && N.push({
        id: `water-${b.id}`,
        type: "water",
        icon: vi,
        title: "Water Bill Due",
        sub: `₹${b.amount} due in ${k} days`,
        date: b.dueDate,
        status: "Due Soon",
        color: "#0ea5e9",
        to: "/water"
      })
    }), h({
      critical: x.sort((b, A) => new Date(b.date) - new Date(A.date)),
      upcoming: N.sort((b, A) => new Date(b.date) - new Date(A.date))
    })
  }, [c, d, f]), n.jsxs("div", {
    className: "animate-fade",
    children: [n.jsxs("div", {
      style: {
        marginBottom: "1.5rem"
      },
      children: [n.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "0.25rem"
        },
        children: [n.jsx("div", {
          style: {
            background: "linear-gradient(135deg, #ef4444, #f59e0b)",
            padding: "0.5rem",
            borderRadius: "0.75rem",
            color: "white"
          },
          children: n.jsx(jo, {
            size: 20
          })
        }), n.jsx("h1", {
          style: {
            fontSize: "1.5rem",
            fontWeight: 900,
            margin: 0
          },
          className: "text-gradient",
          children: "Alerts & Reminders"
        })]
      }), n.jsx("p", {
        style: {
          fontSize: "0.85rem",
          color: "#64748b",
          fontWeight: 500
        },
        children: "Management Timeline & Due Notifications"
      })]
    }), n.jsxs("div", {
      style: {
        marginBottom: "2rem"
      },
      children: [n.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "1rem"
        },
        children: [n.jsx(Mg, {
          size: 18,
          style: {
            color: "#ef4444"
          }
        }), n.jsx("span", {
          style: {
            fontWeight: 800,
            fontSize: "0.9rem",
            color: "#f1f5f9",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          },
          children: "Urgent Action Required"
        }), o.critical.length > 0 && n.jsx("span", {
          style: {
            background: "#ef4444",
            color: "white",
            fontSize: "0.7rem",
            fontWeight: 800,
            padding: "2px 8px",
            borderRadius: 99
          },
          children: o.critical.length
        })]
      }), o.critical.length === 0 ? n.jsxs("div", {
        style: {
          background: "rgba(16,185,129,0.05)",
          border: "1px dashed rgba(16,185,129,0.2)",
          borderRadius: "1.1rem",
          padding: "1.5rem",
          textAlign: "center"
        },
        children: [n.jsx(Pl, {
          size: 32,
          style: {
            color: "#10b981",
            marginBottom: "0.5rem"
          }
        }), n.jsx("div", {
          style: {
            fontWeight: 700,
            color: "#34d399",
            fontSize: "0.9rem"
          },
          children: "All Critical Tasks Clear"
        }), n.jsx("p", {
          style: {
            fontSize: "0.75rem",
            color: "#64748b",
            margin: 0
          },
          children: "No overdue bills or expired leases."
        })]
      }) : n.jsx("div", {
        children: o.critical.map(p => n.jsx(Gm, {
          ...p
        }, p.id))
      })]
    }), n.jsxs("div", {
      children: [n.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "1rem"
        },
        children: [n.jsx(yi, {
          size: 18,
          style: {
            color: "#6366f1"
          }
        }), n.jsx("span", {
          style: {
            fontWeight: 800,
            fontSize: "0.9rem",
            color: "#f1f5f9",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          },
          children: "Coming Up Next"
        }), o.upcoming.length > 0 && n.jsx("span", {
          style: {
            background: "#6366f1",
            color: "white",
            fontSize: "0.7rem",
            fontWeight: 800,
            padding: "2px 8px",
            borderRadius: 99
          },
          children: o.upcoming.length
        })]
      }), o.upcoming.length === 0 ? n.jsxs("div", {
        style: {
          background: "rgba(255,255,255,0.02)",
          border: "1px dashed rgba(255,255,255,0.08)",
          borderRadius: "1.1rem",
          padding: "1.5rem",
          textAlign: "center"
        },
        children: [n.jsx(vo, {
          size: 32,
          style: {
            color: "#334155",
            marginBottom: "0.5rem"
          }
        }), n.jsx("div", {
          style: {
            fontWeight: 700,
            color: "#94a3b8",
            fontSize: "0.9rem"
          },
          children: "Nothing Due Soon"
        }), n.jsx("p", {
          style: {
            fontSize: "0.75rem",
            color: "#64748b",
            margin: 0
          },
          children: "You're ahead of the schedule."
        })]
      }) : n.jsx("div", {
        children: o.upcoming.map(p => n.jsx(Gm, {
          ...p
        }, p.id))
      })]
    }), n.jsxs("div", {
      style: {
        marginTop: "2.5rem",
        background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(217,70,239,0.1))",
        padding: "1.25rem",
        borderRadius: "1.25rem",
        border: "1px solid rgba(255,255,255,0.05)"
      },
      children: [n.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "0.5rem"
        },
        children: [n.jsx(Jm, {
          size: 18,
          style: {
            color: "#a5b4fc"
          }
        }), n.jsx("span", {
          style: {
            fontWeight: 800,
            fontSize: "0.85rem",
            color: "#f1f5f9"
          },
          children: "Management Tip"
        })]
      }), n.jsx("p", {
        style: {
          fontSize: "0.78rem",
          color: "#94a3b8",
          lineHeight: 1.5,
          margin: 0
        },
        children: "Check this section daily to stay on top of building financials. Red alerts indicate immediate attention is needed to avoid revenue loss."
      })]
    })]
  })
}

function jp({
  status: c,
  onClose: d
}) {
  if (!c.message) return null;
  const f = c.type === "success";
  return n.jsxs("div", {
    style: {
      marginTop: "1rem",
      padding: "1rem",
      borderRadius: "1rem",
      background: f ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
      border: `1px solid ${f?"rgba(16,185,129,0.3)":"rgba(239,68,68,0.3)"}`,
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      color: f ? "#10b981" : "#ef4444",
      animation: "fadeIn 0.3s ease-out"
    },
    children: [f ? n.jsx(Pl, {
      size: 20
    }) : n.jsx(Il, {
      size: 20
    }), n.jsx("span", {
      style: {
        fontSize: "0.85rem",
        fontWeight: 600,
        flex: 1
      },
      children: c.message
    }), n.jsx("button", {
      onClick: d,
      style: {
        background: "none",
        border: "none",
        color: "inherit",
        cursor: "pointer",
        display: "flex",
        alignItems: "center"
      },
      children: n.jsx(St, {
        size: 16
      })
    })]
  })
}

function Sp() {
  const [c, d] = Y.useState({
    type: "",
    message: ""
  }), [f, o] = Y.useState(!1), [h, p] = Y.useState(localStorage.getItem("lock_screen_enabled") === "true"), [x, N] = Y.useState(localStorage.getItem("sound_enabled") !== "false"), [b, A] = Y.useState(localStorage.getItem("sandbox_mode") === "true"), [k, E] = Y.useState(localStorage.getItem("authorized_email") || "electroneum514@gmail.com"), [B, I] = Y.useState(!1), [G, L] = Y.useState(k), [W, q] = Y.useState(!1), V = Y.useRef(null), ne = Y.useRef(null), se = (v, U) => d({
    type: v,
    message: U
  }), Qe = v => {
    const U = v.target.checked;
    p(U), localStorage.setItem("lock_screen_enabled", U.toString()), se("success", `🔒 Lock Screen ${U?"Enabled":"Disabled"}`)
  }, _e = v => {
    const U = v.target.checked;
    N(U), localStorage.setItem("sound_enabled", U.toString()), se("success", `🔊 Sound Alerts ${U?"Enabled":"Disabled"}`)
  }, xe = v => {
    const U = v.target.checked;
    A(U), localStorage.setItem("sandbox_mode", U.toString()), se("success", `⚙️ Cloud Simulator ${U?"Enabled":"Disabled"}`)
  }, _ = () => {
    if (!G.trim()) return alert("Email cannot be empty");
    E(G), localStorage.setItem("authorized_email", G), I(!1), se("success", `📧 Authorized Email updated to ${G}`)
  }, ae = () => {
    try {
      const v = window.AudioContext || window.webkitAudioContext;
      if (!v) return;
      const U = new v,
        Z = (me, ie, le) => {
          const $ = U.createOscillator(),
            ve = U.createGain();
          $.type = "sine", $.frequency.setValueAtTime(me, ie), ve.gain.setValueAtTime(0, ie), ve.gain.linearRampToValueAtTime(.12, ie + .05), ve.gain.exponentialRampToValueAtTime(1e-4, ie + le), $.connect(ve), ve.connect(U.destination), $.start(ie), $.stop(ie + le)
        },
        te = U.currentTime;
      Z(523.25, te, .4), Z(783.99, te + .12, .6)
    } catch (v) {
      console.error("Audio synthesis failed", v)
    }
  }, ye = () => {
    x && ae(), q(!0), setTimeout(() => {
      q(!1)
    }, 4e3)
  }, O = async () => {
    try {
      const v = await X.tenants.toArray(),
        U = await X.payments.toArray(),
        Z = v.reduce((le, $) => ({
          ...le,
          [$.id]: $
        }), {}),
        te = window.open("", "_blank");
      if (!te) return alert("Please allow popups to export PDF.");
      const me = U.map(le => {
          const $ = Z[le.tenantId];
          return `
          <tr>
            <td>${le.date}</td>
            <td>${$?$.name:"Unknown Tenant"} (Unit ${$?$.unitId:"N/A"})</td>
            <td>${le.type||"Rent"}</td>
            <td>₹${le.amount}</td>
            <td style="color: #10b981; font-weight: bold;">${le.status||"Paid"}</td>
          </tr>
        `
        }).join(""),
        ie = U.reduce((le, $) => le + (parseFloat($.amount) || 0), 0);
      te.document.write(`
        <html>
          <head>
            <title>Ansari House - Collection Ledger Report</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; padding: 25px; color: #1e293b; background: #ffffff; }
              .header { display: flex; justify-content: space-between; border-bottom: 3px solid #6366f1; padding-bottom: 12px; margin-bottom: 25px; }
              .title { font-size: 26px; font-weight: 900; color: #0f172a; letter-spacing: -0.02em; }
              .meta { font-size: 13px; text-align: right; color: #64748b; font-weight: 500; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #e2e8f0; padding: 12px; text-align: left; }
              th { background-color: #f8fafc; color: #475569; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; }
              td { font-size: 14px; color: #334155; }
              .total { text-align: right; font-size: 18px; font-weight: 900; margin-top: 25px; color: #0f172a; border-top: 2px solid #e2e8f0; padding-top: 15px; }
            </style>
          </head>
          <body>
            <div class="header">
              <div>
                <div class="title">ANSARI HOUSE</div>
                <div style="font-size: 14px; color: #6366f1; font-weight: 700; text-transform: uppercase; margin-top: 4px;">Collection Ledger Report</div>
              </div>
              <div class="meta">
                <div>Generated: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</div>
                <div>Total Transactions: ${U.length}</div>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Tenant / Unit</th>
                  <th>Payment Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${me||'<tr><td colspan="5" style="text-align: center; color: #94a3b8; padding: 30px;">No payment records found.</td></tr>'}
              </tbody>
            </table>
            <div class="total">Total Collections: ₹${ie.toLocaleString("en-IN")}</div>
            <script>
              window.onload = function() {
                window.print();
              }
            <\/script>
          </body>
        </html>
      `), te.document.close(), se("success", "📄 Ledger PDF export requested")
    } catch (v) {
      console.error("Export PDF failed", v), se("error", `Failed to export PDF: ${v.message}`)
    }
  }, J = async () => {
    try {
      const v = await X.tenants.toArray(),
        U = await X.payments.toArray(),
        Z = v.reduce((le, $) => ({
          ...le,
          [$.id]: $
        }), {});
      let te = "data:text/csv;charset=utf-8,";
      te += `Payment ID,Date,Tenant Name,Unit ID,Type,Amount,Status
`, U.forEach(le => {
        const $ = Z[le.tenantId],
          ve = $ ? $.name.replace(/,/g, "") : "Unknown Tenant",
          dt = $ ? $.unitId : "N/A";
        te += `${le.id},${le.date},"${ve}",${dt},${le.type||"Rent"},${le.amount},${le.status||"Paid"}
`
      });
      const me = encodeURI(te),
        ie = document.createElement("a");
      ie.setAttribute("href", me), ie.setAttribute("download", `ansari_house_ledger_${new Date().toISOString().slice(0,10)}.csv`), document.body.appendChild(ie), ie.click(), document.body.removeChild(ie), se("success", "✅ Collection CSV downloaded successfully!")
    } catch (v) {
      console.error("Export CSV failed", v), se("error", `Failed to export CSV: ${v.message}`)
    }
  }, Me = async () => {
    o(!0);
    const v = await go.manualDriveBackup();
    o(!1), v.success ? se("success", "✅ Backup file shared/downloaded successfully!") : v.error !== "Backup cancelled" && se("error", v.error)
  }, We = v => {
    var Z;
    const U = (Z = v.target.files) == null ? void 0 : Z[0];
    U && window.confirm("This will ADD any new records from the selected backup to your current data. Continue?") && (o(!0), go.manualDriveRestore(U, "merge").then(te => {
      o(!1), te.success ? (se("success", "✅ Data merged successfully! New records added."), setTimeout(() => window.location.reload(), 1500)) : se("error", te.error)
    }), v.target.value = "")
  }, Ye = v => {
    var Z;
    const U = (Z = v.target.files) == null ? void 0 : Z[0];
    U && window.confirm("⚠️ WARNING: This will DELETE all current data and replace it with the selected backup file. Are you absolutely sure?") && (o(!0), go.manualDriveRestore(U, "replace").then(te => {
      o(!1), te.success ? (se("success", "✅ Data fully restored from backup! Reloading…"), setTimeout(() => window.location.reload(), 1500)) : se("error", te.error)
    }), v.target.value = "")
  };
  return n.jsxs("div", {
    className: "animate-fade",
    style: {
      paddingBottom: "3rem"
    },
    children: [W && n.jsxs("div", {
      className: "test-alert-banner",
      children: [n.jsx("div", {
        style: {
          color: "#a855f7",
          display: "flex",
          alignItems: "center"
        },
        children: n.jsx(jo, {
          size: 24,
          className: "animate-pulse"
        })
      }), n.jsxs("div", {
        children: [n.jsx("div", {
          style: {
            fontSize: "0.85rem",
            fontWeight: 800,
            color: "#f1f5f9"
          },
          children: "Test Notification Alert"
        }), n.jsx("div", {
          style: {
            fontSize: "0.72rem",
            color: "#94a3b8",
            marginTop: "2px",
            lineHeight: 1.2
          },
          children: "Triggered a warning banner popup with sound."
        })]
      })]
    }), n.jsxs("div", {
      className: "settings-title-container",
      children: [n.jsx("h1", {
        className: "settings-header-text",
        children: "Settings & Core Admin"
      }), n.jsx("p", {
        className: "settings-subheader-text",
        children: "App Preferences & Sync Control"
      })]
    }), n.jsx(jp, {
      status: c,
      onClose: () => d({
        type: "",
        message: ""
      })
    }), n.jsxs("div", {
      className: "settings-section",
      children: [n.jsx("h3", {
        className: "settings-section-title",
        children: "App Security"
      }), n.jsx("div", {
        className: "settings-group-card",
        children: n.jsxs("div", {
          className: "settings-item-row",
          style: {
            cursor: "default"
          },
          children: [n.jsx("div", {
            className: "settings-item-icon-wrap",
            style: {
              color: "#a855f7"
            },
            children: n.jsx(Ug, {
              size: 20
            })
          }), n.jsxs("div", {
            className: "settings-item-body",
            children: [n.jsx("div", {
              className: "settings-item-title",
              children: "Enable Lock Screen"
            }), n.jsx("div", {
              className: "settings-item-desc",
              children: "Locks app with PIN/Biometrics"
            })]
          }), n.jsx("div", {
            className: "settings-item-action",
            children: n.jsxs("label", {
              className: "switch",
              children: [n.jsx("input", {
                type: "checkbox",
                checked: h,
                onChange: Qe
              }), n.jsx("span", {
                className: "slider"
              })]
            })
          })]
        })
      })]
    }), n.jsxs("div", {
      className: "settings-section",
      children: [n.jsx("h3", {
        className: "settings-section-title",
        children: "Notification & Sound Alerts"
      }), n.jsxs("div", {
        className: "settings-group-card",
        children: [n.jsxs("div", {
          className: "settings-item-row",
          style: {
            cursor: "default"
          },
          children: [n.jsx("div", {
            className: "settings-item-icon-wrap",
            style: {
              color: "#0ea5e9"
            },
            children: n.jsx(Bg, {
              size: 20
            })
          }), n.jsxs("div", {
            className: "settings-item-body",
            children: [n.jsx("div", {
              className: "settings-item-title",
              children: "Notification Sounds"
            }), n.jsx("div", {
              className: "settings-item-desc",
              children: "Play sound chime for warnings and alerts"
            })]
          }), n.jsx("div", {
            className: "settings-item-action",
            children: n.jsxs("label", {
              className: "switch",
              children: [n.jsx("input", {
                type: "checkbox",
                checked: x,
                onChange: _e
              }), n.jsx("span", {
                className: "slider"
              })]
            })
          })]
        }), n.jsxs("div", {
          className: "settings-item-row",
          onClick: ye,
          children: [n.jsx("div", {
            className: "settings-item-icon-wrap",
            style: {
              color: "#a855f7"
            },
            children: n.jsx(jo, {
              size: 20
            })
          }), n.jsxs("div", {
            className: "settings-item-body",
            children: [n.jsx("div", {
              className: "settings-item-title",
              children: "Test Notification Alert"
            }), n.jsx("div", {
              className: "settings-item-desc",
              children: "Trigger a warning banner popup with sound"
            })]
          }), n.jsx("div", {
            className: "settings-item-action",
            style: {
              color: "#475569"
            },
            children: n.jsx(Sa, {
              size: 18
            })
          })]
        })]
      })]
    }), n.jsxs("div", {
      className: "settings-section",
      children: [n.jsxs("h3", {
        className: "settings-section-title",
        children: ["Export Reports (", new Date().toLocaleString("default", {
          month: "long"
        }), " ", new Date().getFullYear(), ")"]
      }), n.jsxs("div", {
        className: "settings-group-card",
        children: [n.jsxs("div", {
          className: "settings-item-row",
          onClick: O,
          children: [n.jsx("div", {
            className: "settings-item-icon-wrap",
            style: {
              color: "#ef4444"
            },
            children: n.jsx(Ft, {
              size: 20
            })
          }), n.jsxs("div", {
            className: "settings-item-body",
            children: [n.jsx("div", {
              className: "settings-item-title",
              children: "Export Collection Ledger PDF"
            }), n.jsx("div", {
              className: "settings-item-desc",
              children: "Format and print monthly payments list"
            })]
          }), n.jsx("div", {
            className: "settings-item-action",
            style: {
              color: "#475569"
            },
            children: n.jsx(Sa, {
              size: 18
            })
          })]
        }), n.jsxs("div", {
          className: "settings-item-row",
          onClick: J,
          children: [n.jsx("div", {
            className: "settings-item-icon-wrap",
            style: {
              color: "#06b6d4"
            },
            children: n.jsx(Im, {
              size: 20
            })
          }), n.jsxs("div", {
            className: "settings-item-body",
            children: [n.jsx("div", {
              className: "settings-item-title",
              children: "Export Excel CSV Sheet"
            }), n.jsx("div", {
              className: "settings-item-desc",
              children: "Download collection data spreadsheet"
            })]
          }), n.jsx("div", {
            className: "settings-item-action",
            style: {
              color: "#475569"
            },
            children: n.jsx(Sa, {
              size: 18
            })
          })]
        })]
      })]
    }), n.jsxs("div", {
      className: "settings-section",
      children: [n.jsx("h3", {
        className: "settings-section-title",
        children: "Google Drive Cloud Backup"
      }), n.jsxs("div", {
        className: "settings-group-card",
        children: [n.jsxs("div", {
          className: "settings-item-row",
          style: {
            cursor: "default"
          },
          children: [n.jsx("div", {
            className: "settings-item-icon-wrap",
            style: {
              color: "#3b82f6"
            },
            children: n.jsx(Og, {
              size: 20
            })
          }), n.jsxs("div", {
            className: "settings-item-body",
            children: [n.jsx("div", {
              className: "settings-item-title",
              children: "Google Drive Sync"
            }), n.jsx("div", {
              className: "settings-item-desc",
              children: "Sign in to sync your database secure backup"
            })]
          })]
        }), n.jsxs("div", {
          className: "settings-item-row",
          style: {
            cursor: "default"
          },
          children: [n.jsx("div", {
            className: "settings-item-icon-wrap",
            style: {
              color: "#3b82f6"
            },
            children: n.jsx(_g, {
              size: 20
            })
          }), n.jsxs("div", {
            className: "settings-item-body",
            children: [n.jsx("div", {
              className: "settings-item-title",
              children: "Authorized Sync Email"
            }), B ? n.jsxs("div", {
              style: {
                display: "flex",
                gap: "0.5rem",
                marginTop: "0.4rem",
                alignItems: "center"
              },
              children: [n.jsx("input", {
                type: "email",
                className: "email-edit-input",
                value: G,
                onChange: v => L(v.target.value),
                onKeyDown: v => v.key === "Enter" && _(),
                autoFocus: !0
              }), n.jsx("button", {
                onClick: _,
                style: {
                  background: "rgba(16,185,129,0.2)",
                  border: "none",
                  color: "#10b981",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.7rem",
                  fontWeight: 800
                },
                children: "SAVE"
              })]
            }) : n.jsx("div", {
              className: "settings-item-desc",
              children: k
            })]
          }), !B && n.jsx("div", {
            className: "settings-item-action",
            style: {
              color: "#64748b",
              cursor: "pointer"
            },
            onClick: () => I(!0),
            children: n.jsx(Zs, {
              size: 14
            })
          })]
        }), n.jsx("div", {
          className: "settings-info-text",
          children: "Securely backup your database records, documents, and invoices to your personal Google Drive account. Restores instantly on any clean device."
        }), n.jsxs("button", {
          className: "google-signin-btn",
          onClick: () => se("success", `🔑 Signed in successfully as ${k}!`),
          children: [n.jsx(Lg, {
            size: 16
          }), " Sign In with Google"]
        }), n.jsxs("div", {
          className: "settings-item-row",
          style: {
            borderTop: "1px solid rgba(255,255,255,0.06)",
            cursor: "default"
          },
          children: [n.jsx("div", {
            className: "settings-item-icon-wrap",
            style: {
              color: "#a855f7"
            },
            children: n.jsx(Pm, {
              size: 20
            })
          }), n.jsxs("div", {
            className: "settings-item-body",
            children: [n.jsx("div", {
              className: "settings-item-title",
              children: "Enable Sandbox Cloud Simulator"
            }), n.jsx("div", {
              className: "settings-item-desc",
              children: "Test cloud backup offline without Google API credentials"
            })]
          }), n.jsx("div", {
            className: "settings-item-action",
            children: n.jsxs("label", {
              className: "switch",
              children: [n.jsx("input", {
                type: "checkbox",
                checked: b,
                onChange: xe
              }), n.jsx("span", {
                className: "slider"
              })]
            })
          })]
        })]
      })]
    }), n.jsxs("div", {
      className: "settings-section",
      children: [n.jsx("h3", {
        className: "settings-section-title",
        children: "Direct Offline Import & Export"
      }), n.jsxs("div", {
        className: "settings-group-card",
        children: [n.jsxs("div", {
          className: "settings-item-row",
          style: {
            cursor: "default"
          },
          children: [n.jsx("div", {
            className: "settings-item-icon-wrap",
            style: {
              color: "#a855f7"
            },
            children: n.jsx(Nm, {
              size: 20
            })
          }), n.jsxs("div", {
            className: "settings-item-body",
            children: [n.jsx("div", {
              className: "settings-item-title",
              children: "Manual Backups Manager"
            }), n.jsx("div", {
              className: "settings-item-desc",
              children: "Directly share ZIP or import database backups offline"
            })]
          })]
        }), n.jsxs("button", {
          className: "offline-export-btn",
          onClick: Me,
          disabled: f,
          children: [n.jsx(Nm, {
            size: 16
          }), " ", f ? "Exporting..." : "Direct Share Backup Zip (Offline Export)"]
        }), n.jsxs("div", {
          className: "offline-import-row",
          children: [n.jsxs("button", {
            className: "import-btn-merge",
            onClick: () => {
              var v;
              return (v = V.current) == null ? void 0 : v.click()
            },
            disabled: f,
            children: [n.jsx(e0, {
              size: 18
            }), n.jsx("span", {
              className: "import-btn-text-main",
              children: "Import Backup"
            }), n.jsx("span", {
              className: "import-btn-text-sub",
              children: "(Merge)"
            })]
          }), n.jsx("input", {
            ref: V,
            type: "file",
            accept: ".json,application/json",
            style: {
              display: "none"
            },
            onChange: We
          }), n.jsxs("button", {
            className: "import-btn-replace",
            onClick: () => {
              var v;
              return (v = ne.current) == null ? void 0 : v.click()
            },
            disabled: f,
            children: [n.jsx(Hg, {
              size: 18
            }), n.jsx("span", {
              className: "import-btn-text-main",
              children: "Import Backup"
            }), n.jsx("span", {
              className: "import-btn-text-sub",
              children: "(Replace)"
            })]
          }), n.jsx("input", {
            ref: ne,
            type: "file",
            accept: ".json,application/json",
            style: {
              display: "none"
            },
            onChange: Ye
          })]
        })]
      })]
    }), n.jsxs("div", {
      className: "settings-section",
      children: [n.jsx("h3", {
        className: "settings-section-title",
        children: "System Info"
      }), n.jsx("div", {
        className: "settings-group-card",
        children: [{
          label: "Storage Engine",
          value: "Dexie.js (IndexedDB)",
          icon: "💾"
        }, {
          label: "App Version",
          value: "6.0 (Pro Cloud)",
          icon: "🚀"
        }, {
          label: "Data Location",
          value: "Local Phone Storage",
          icon: "📱"
        }].map(({
          label: v,
          value: U,
          icon: Z
        }) => n.jsxs("div", {
          className: "settings-item-row",
          style: {
            cursor: "default"
          },
          children: [n.jsx("div", {
            className: "settings-item-icon-wrap",
            style: {
              border: "none",
              background: "transparent",
              fontSize: "1.2rem",
              color: "#a855f7"
            },
            children: Z
          }), n.jsx("div", {
            className: "settings-item-body",
            children: n.jsx("div", {
              style: {
                fontSize: "0.82rem",
                color: "#94a3b8",
                fontWeight: 700
              },
              children: v
            })
          }), n.jsx("div", {
            style: {
              fontSize: "0.82rem",
              color: "#f1f5f9",
              fontWeight: 800
            },
            children: U
          })]
        }, v))
      })]
    })]
  })
}

function zp(c) {
  return new Promise((d, f) => {
    const o = new FileReader;
    o.onloadend = () => d({
      data: o.result,
      name: c.name,
      type: c.type
    }), o.onerror = f, o.readAsDataURL(c)
  })
}

function Dp({
  status: c
}) {
  const d = {
      Paid: {
        color: "#10b981",
        bg: "rgba(16,185,129,0.15)",
        icon: Pl
      },
      Pending: {
        color: "#f59e0b",
        bg: "rgba(245,158,11,0.15)",
        icon: ji
      },
      Overdue: {
        color: "#ef4444",
        bg: "rgba(239,68,68,0.15)",
        icon: $m
      }
    },
    f = d[c] || d.Pending,
    o = f.icon;
  return n.jsxs("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: f.bg,
      color: f.color,
      fontSize: "0.7rem",
      fontWeight: 700,
      padding: "3px 10px",
      borderRadius: 99,
      border: `1px solid ${f.color}40`
    },
    children: [n.jsx(o, {
      size: 11
    }), " ", c]
  })
}

function Ym({
  file: c,
  onRemove: d,
  onPreview: f
}) {
  var h;
  const o = c.type === "application/pdf" || ((h = c.name) == null ? void 0 : h.endsWith(".pdf"));
  return n.jsxs("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: "0.75rem",
      padding: "0.6rem 0.85rem",
      marginBottom: "0.4rem"
    },
    children: [n.jsx("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: "0.6rem",
        flexShrink: 0,
        background: o ? "rgba(239,68,68,0.1)" : "rgba(96,165,250,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: o ? n.jsx(Ft, {
        size: 18,
        style: {
          color: "#f87171"
        }
      }) : n.jsx(kg, {
        size: 18,
        style: {
          color: "#60a5fa"
        }
      })
    }), n.jsx("span", {
      style: {
        flex: 1,
        fontSize: "0.78rem",
        color: "#cbd5e1",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      children: c.name
    }), n.jsxs("div", {
      style: {
        display: "flex",
        gap: "0.4rem",
        flexShrink: 0
      },
      children: [f && n.jsx("button", {
        onClick: f,
        style: {
          width: 30,
          height: 30,
          borderRadius: "0.5rem",
          color: "#818cf8",
          background: "rgba(99,102,241,0.1)",
          border: "1px solid rgba(99,102,241,0.15)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: n.jsx(Jl, {
          size: 14
        })
      }), n.jsx("button", {
        onClick: () => xn(c.data, c.name),
        style: {
          width: 30,
          height: 30,
          borderRadius: "0.5rem",
          color: "#34d399",
          background: "rgba(16,185,129,0.1)",
          border: "1px solid rgba(16,185,129,0.15)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: n.jsx(Wt, {
          size: 14
        })
      }), d && n.jsx("button", {
        onClick: d,
        style: {
          width: 30,
          height: 30,
          borderRadius: "0.5rem",
          color: "#f87171",
          background: "rgba(239,68,68,0.1)",
          border: "1px solid rgba(239,68,68,0.15)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: n.jsx(St, {
          size: 14
        })
      })]
    })]
  })
}

function a0({
  initial: c = {},
  onSave: d,
  onCancel: f,
  saveLabel: o = "Save Bill"
}) {
  const [h, p] = Y.useState({
    billDate: c.billDate || new Date().toISOString().split("T")[0],
    dueDate: c.dueDate || "",
    amount: c.amount || "",
    description: c.description || "",
    status: c.status || "Pending",
    billFiles: c.billFiles || [],
    receiptFiles: c.receiptFiles || []
  }), [x, N] = Y.useState(!1), [b, A] = Y.useState({
    open: !1,
    files: [],
    index: 0,
    title: ""
  }), k = async G => {
    try {
      const L = await l0.getPhoto({
          quality: 90,
          allowEditing: !1,
          resultType: Fs.DataUrl,
          source: $l.Prompt
        }),
        W = {
          data: L.dataUrl,
          name: `IMG_${new Date().getTime()}.${L.format}`,
          type: `image/${L.format}`
        };
      p(q => ({
        ...q,
        [G]: [...q[G] || [], W]
      }))
    } catch {
      console.log("User cancelled camera")
    }
  }, E = async (G, L) => {
    const W = G.target.files[0];
    if (!W) return;
    const V = {
      data: (await zp(W)).data,
      name: W.name,
      type: W.type
    };
    p(ne => ({
      ...ne,
      [L]: [...ne[L] || [], V]
    })), G.target.value = ""
  }, B = (G, L) => {
    p(W => ({
      ...W,
      [G]: W[G].filter((q, V) => V !== L)
    }))
  }, I = async G => {
    G.preventDefault(), N(!0), await d(h), N(!1)
  };
  return n.jsxs("form", {
    onSubmit: I,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    },
    children: [n.jsxs("div", {
      className: "maint-field-row",
      children: [n.jsxs("div", {
        className: "maint-field",
        children: [n.jsx("label", {
          children: "Bill Date"
        }), n.jsx("input", {
          type: "date",
          className: "input",
          value: h.billDate,
          onChange: G => p(L => ({
            ...L,
            billDate: G.target.value
          })),
          required: !0
        })]
      }), n.jsxs("div", {
        className: "maint-field",
        children: [n.jsx("label", {
          children: "Due Date"
        }), n.jsx("input", {
          type: "date",
          className: "input",
          value: h.dueDate,
          onChange: G => p(L => ({
            ...L,
            dueDate: G.target.value
          }))
        })]
      })]
    }), n.jsxs("div", {
      className: "maint-field-row",
      children: [n.jsxs("div", {
        className: "maint-field",
        children: [n.jsx("label", {
          children: "Amount (₹)"
        }), n.jsx("input", {
          type: "number",
          className: "input",
          placeholder: "0",
          value: h.amount,
          onChange: G => p(L => ({
            ...L,
            amount: G.target.value
          })),
          required: !0
        })]
      }), n.jsxs("div", {
        className: "maint-field",
        children: [n.jsx("label", {
          children: "Status"
        }), n.jsxs("select", {
          className: "input",
          value: h.status,
          onChange: G => p(L => ({
            ...L,
            status: G.target.value
          })),
          children: [n.jsx("option", {
            children: "Pending"
          }), n.jsx("option", {
            children: "Paid"
          }), n.jsx("option", {
            children: "Overdue"
          })]
        })]
      })]
    }), n.jsxs("div", {
      className: "maint-field",
      children: [n.jsx("label", {
        children: "Description / Notes"
      }), n.jsx("input", {
        type: "text",
        className: "input",
        placeholder: "e.g. Monthly lift service charge",
        value: h.description,
        onChange: G => p(L => ({
          ...L,
          description: G.target.value
        }))
      })]
    }), n.jsxs("div", {
      className: "upload-section",
      children: [n.jsxs("div", {
        className: "upload-label",
        children: [n.jsx(Ft, {
          size: 14,
          style: {
            color: "#f87171"
          }
        }), " Bill Documents (Images)"]
      }), n.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
          gap: "0.5rem",
          marginBottom: "0.6rem"
        },
        children: [h.billFiles.map((G, L) => n.jsxs("div", {
          style: {
            position: "relative",
            aspectSquare: "1/1",
            background: "#1e293b",
            borderRadius: "0.5rem",
            overflow: "hidden",
            border: "1px solid var(--border)"
          },
          children: [n.jsx("img", {
            src: G.data,
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }), n.jsxs("div", {
            style: {
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem"
            },
            children: [n.jsx("button", {
              type: "button",
              onClick: () => A({
                open: !0,
                files: h.billFiles,
                index: L,
                title: "Bill Document"
              }),
              style: {
                background: "rgba(99,102,241,0.9)",
                border: "none",
                borderRadius: "50%",
                color: "white",
                padding: "4px"
              },
              children: n.jsx(Jl, {
                size: 10
              })
            }), n.jsx("button", {
              type: "button",
              onClick: () => {
                const W = document.createElement("a");
                W.href = G.data, W.download = G.name, W.click()
              },
              style: {
                background: "rgba(16,185,129,0.9)",
                border: "none",
                borderRadius: "50%",
                color: "white",
                padding: "4px"
              },
              children: n.jsx(Wt, {
                size: 10
              })
            })]
          }), n.jsx("button", {
            type: "button",
            onClick: () => B("billFiles", L),
            style: {
              position: "absolute",
              top: 2,
              right: 2,
              background: "rgba(239,68,68,0.8)",
              border: "none",
              borderRadius: "50%",
              color: "white",
              padding: "2px"
            },
            children: n.jsx(St, {
              size: 8
            })
          })]
        }, L)), n.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem"
          },
          children: [n.jsx("button", {
            type: "button",
            onClick: () => k("billFiles"),
            style: {
              aspectSquare: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(99,102,241,0.1)",
              border: "1px dashed #6366f1",
              borderRadius: "0.5rem",
              color: "#818cf8",
              cursor: "pointer",
              minHeight: 40,
              width: 60
            },
            children: n.jsx(pi, {
              size: 18
            })
          }), n.jsxs("label", {
            style: {
              aspectSquare: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(99,102,241,0.05)",
              border: "1px dashed rgba(99,102,241,0.3)",
              borderRadius: "0.5rem",
              color: "#94a3b8",
              cursor: "pointer",
              minHeight: 40,
              width: 60
            },
            children: [n.jsx(vn, {
              size: 18
            }), n.jsx("input", {
              type: "file",
              accept: "image/*,.pdf",
              style: {
                display: "none"
              },
              onChange: G => E(G, "billFiles")
            })]
          })]
        })]
      })]
    }), n.jsxs("div", {
      className: "upload-section",
      children: [n.jsxs("div", {
        className: "upload-label",
        children: [n.jsx(Pl, {
          size: 14,
          style: {
            color: "#34d399"
          }
        }), " Paid Receipts (Images)"]
      }), n.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
          gap: "0.5rem",
          marginBottom: "0.6rem"
        },
        children: [h.receiptFiles.map((G, L) => n.jsxs("div", {
          style: {
            position: "relative",
            aspectSquare: "1/1",
            background: "#1e293b",
            borderRadius: "0.5rem",
            overflow: "hidden",
            border: "1px solid var(--border)"
          },
          children: [n.jsx("img", {
            src: G.data,
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }), n.jsxs("div", {
            style: {
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem"
            },
            children: [n.jsx("button", {
              type: "button",
              onClick: () => A({
                open: !0,
                files: h.receiptFiles,
                index: L,
                title: "Receipt Document"
              }),
              style: {
                background: "rgba(99,102,241,0.9)",
                border: "none",
                borderRadius: "50%",
                color: "white",
                padding: "4px"
              },
              children: n.jsx(Jl, {
                size: 10
              })
            }), n.jsx("button", {
              type: "button",
              onClick: () => {
                const W = document.createElement("a");
                W.href = G.data, W.download = G.name, W.click()
              },
              style: {
                background: "rgba(16,185,129,0.9)",
                border: "none",
                borderRadius: "50%",
                color: "white",
                padding: "4px"
              },
              children: n.jsx(Wt, {
                size: 10
              })
            })]
          }), n.jsx("button", {
            type: "button",
            onClick: () => B("receiptFiles", L),
            style: {
              position: "absolute",
              top: 2,
              right: 2,
              background: "rgba(239,68,68,0.8)",
              border: "none",
              borderRadius: "50%",
              color: "white",
              padding: "2px"
            },
            children: n.jsx(St, {
              size: 8
            })
          })]
        }, L)), n.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem"
          },
          children: [n.jsx("button", {
            type: "button",
            onClick: () => k("receiptFiles"),
            style: {
              aspectSquare: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(16,185,129,0.1)",
              border: "1px dashed #10b981",
              borderRadius: "0.5rem",
              color: "#34d399",
              cursor: "pointer",
              minHeight: 40,
              width: 60
            },
            children: n.jsx(pi, {
              size: 18
            })
          }), n.jsxs("label", {
            style: {
              aspectSquare: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(16,185,129,0.05)",
              border: "1px dashed rgba(16,185,129,0.3)",
              borderRadius: "0.5rem",
              color: "#94a3b8",
              cursor: "pointer",
              minHeight: 40,
              width: 60
            },
            children: [n.jsx(vn, {
              size: 18
            }), n.jsx("input", {
              type: "file",
              accept: "image/*,.pdf",
              style: {
                display: "none"
              },
              onChange: G => E(G, "receiptFiles")
            })]
          })]
        })]
      })]
    }), n.jsxs("div", {
      style: {
        display: "flex",
        gap: "0.75rem",
        paddingTop: "0.25rem"
      },
      children: [n.jsx("button", {
        type: "button",
        className: "btn btn-secondary",
        style: {
          flex: 1
        },
        onClick: f,
        children: "Cancel"
      }), n.jsxs("button", {
        type: "submit",
        className: "btn btn-primary",
        style: {
          flex: 1
        },
        disabled: x,
        children: [n.jsx(Km, {
          size: 16
        }), " ", x ? "Saving…" : o]
      })]
    }), b.open && n.jsx(No, {
      files: b.files,
      initialIndex: b.index,
      title: b.title,
      onClose: () => A({
        ...b,
        open: !1
      })
    })]
  })
}

function Np({
  bill: c,
  onDelete: d,
  onMarkPaid: f,
  onEdit: o
}) {
  const [h, p] = Y.useState(!1), [x, N] = Y.useState(!1), [b, A] = Y.useState(!1), k = c.status === "Pending" && c.dueDate && new Date(c.dueDate) < new Date, E = k ? "Overdue" : c.status, B = async L => {
    await o(c.id, L), N(!1)
  }, I = L => {
    L.stopPropagation(), A(!0)
  }, G = L => {
    L.stopPropagation(), d(c.id)
  };
  return n.jsxs("div", {
    className: `bill-card ${E.toLowerCase()}`,
    children: [n.jsxs("div", {
      className: "bill-card-header",
      onClick: () => !x && p(L => !L),
      children: [n.jsxs("div", {
        className: "bill-top-row",
        children: [n.jsxs("div", {
          children: [n.jsxs("div", {
            className: "bill-amount",
            children: ["₹", parseFloat(c.amount || 0).toLocaleString("en-IN")]
          }), n.jsx("div", {
            className: "bill-desc",
            children: c.description || "No description"
          })]
        }), n.jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.4rem"
          },
          children: [n.jsx(Dp, {
            status: E
          }), h ? n.jsx(t0, {
            size: 16,
            style: {
              color: "#64748b"
            }
          }) : n.jsx(Do, {
            size: 16,
            style: {
              color: "#64748b"
            }
          })]
        })]
      }), n.jsxs("div", {
        className: "bill-dates",
        children: [n.jsxs("span", {
          children: [n.jsx(Vt, {
            size: 11
          }), " Bill: ", c.billDate]
        }), c.dueDate && n.jsxs("span", {
          style: {
            color: k ? "#ef4444" : "#94a3b8"
          },
          children: [n.jsx(ji, {
            size: 11
          }), " Due: ", c.dueDate]
        })]
      })]
    }), h && n.jsx("div", {
      className: "bill-details",
      children: x ? n.jsx(a0, {
        initial: c,
        onSave: B,
        onCancel: () => N(!1),
        saveLabel: "Update Bill"
      }) : b ? n.jsxs("div", {
        style: {
          background: "rgba(239,68,68,0.1)",
          padding: "1rem",
          borderRadius: "0.75rem",
          border: "1px solid rgba(239,68,68,0.3)",
          textAlign: "center"
        },
        className: "animate-fade",
        children: [n.jsx(Il, {
          size: 24,
          style: {
            color: "#ef4444",
            marginBottom: "0.5rem"
          }
        }), n.jsx("div", {
          style: {
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "#f87171",
            marginBottom: "1rem"
          },
          children: "Are you sure you want to delete?"
        }), n.jsxs("div", {
          style: {
            display: "flex",
            gap: "0.75rem"
          },
          children: [n.jsx("button", {
            onClick: () => A(!1),
            className: "btn btn-secondary",
            style: {
              flex: 1,
              padding: "0.5rem"
            },
            children: "No, Cancel"
          }), n.jsx("button", {
            onClick: G,
            className: "btn btn-primary",
            style: {
              flex: 1,
              padding: "0.5rem",
              background: "#ef4444"
            },
            children: "Yes, Delete"
          })]
        })]
      }) : n.jsxs(n.Fragment, {
        children: [(c.billFiles && c.billFiles.length > 0 || c.receiptFiles && c.receiptFiles.length > 0) && n.jsxs("div", {
          style: {
            marginBottom: "0.75rem"
          },
          children: [c.billFiles && c.billFiles.length > 0 && n.jsxs("div", {
            style: {
              marginBottom: "0.6rem"
            },
            children: [n.jsx("div", {
              style: {
                fontSize: "0.68rem",
                color: "#64748b",
                fontWeight: 700,
                marginBottom: 6
              },
              children: "📄 BILL DOCUMENTS"
            }), c.billFiles.map((L, W) => n.jsx(Ym, {
              file: L,
              onPreview: () => setViewer({
                open: !0,
                files: c.billFiles,
                index: W,
                title: "Bill Preview"
              })
            }, W))]
          }), c.receiptFiles && c.receiptFiles.length > 0 && n.jsxs("div", {
            children: [n.jsx("div", {
              style: {
                fontSize: "0.68rem",
                color: "#64748b",
                fontWeight: 700,
                marginBottom: 6
              },
              children: "✅ PAID RECEIPTS"
            }), c.receiptFiles.map((L, W) => n.jsx(Ym, {
              file: L,
              onPreview: () => setViewer({
                open: !0,
                files: c.receiptFiles,
                index: W,
                title: "Receipt Preview"
              })
            }, W))]
          })]
        }), n.jsxs("div", {
          style: {
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap"
          },
          children: [n.jsxs("button", {
            onClick: () => N(!0),
            style: {
              flex: 1,
              padding: "0.55rem",
              background: "rgba(99,102,241,0.15)",
              color: "#a5b4fc",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: "0.6rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              fontSize: "0.8rem",
              fontWeight: 600
            },
            children: [n.jsx(Zs, {
              size: 14
            }), " Edit"]
          }), c.status !== "Paid" && n.jsxs("button", {
            onClick: () => f(c.id),
            style: {
              flex: 1,
              padding: "0.55rem",
              background: "rgba(16,185,129,0.15)",
              color: "#34d399",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: "0.6rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              fontSize: "0.8rem",
              fontWeight: 600
            },
            children: [n.jsx(Pl, {
              size: 14
            }), " Mark Paid"]
          }), n.jsxs("button", {
            onClick: I,
            style: {
              flex: "0 0 auto",
              padding: "0.55rem 0.85rem",
              background: "rgba(239,68,68,0.12)",
              color: "#f87171",
              border: "1px solid rgba(239,68,68,0.25)",
              borderRadius: "0.6rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: "0.8rem",
              fontWeight: 600
            },
            children: [n.jsx(nl, {
              size: 14
            }), " Delete"]
          })]
        })]
      })
    })]
  })
}

function Qm({
  type: c = "lift"
}) {
  const d = c === "lift",
    f = d ? X.liftBills : X.waterBills,
    o = d ? "Lift Maintenance" : "Water Maintenance",
    h = d ? "#6366f1" : "#0ea5e9",
    p = d ? "#a855f7" : "#06b6d4",
    x = Zt(() => f.orderBy("billDate").reverse().toArray(), [c]) || [],
    [N, b] = Y.useState(!1),
    [A, k] = Y.useState({
      open: !1,
      files: [],
      index: 0,
      title: ""
    }),
    E = x.filter(V => V.status === "Paid").reduce((V, ne) => V + (parseFloat(ne.amount) || 0), 0),
    B = x.filter(V => V.status !== "Paid").reduce((V, ne) => V + (parseFloat(ne.amount) || 0), 0),
    I = x.filter(V => V.status === "Pending" && V.dueDate && new Date(V.dueDate) < new Date).length,
    G = async V => {
      await f.add(V), b(!1)
    }, L = async (V, ne) => {
      await f.update(V, ne)
    }, W = async V => {
      await f.delete(V)
    }, q = async V => {
      await f.update(V, {
        status: "Paid"
      })
    };
  return n.jsxs("div", {
    className: "animate-fade",
    children: [n.jsxs("div", {
      className: "maint-hero",
      style: {
        marginBottom: "1.25rem"
      },
      children: [n.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1rem"
        },
        children: [n.jsx("div", {
          className: "maint-hero-icon",
          style: {
            background: `linear-gradient(135deg, ${h}, ${p})`
          },
          children: n.jsx("span", {
            style: {
              fontSize: "1.5rem",
              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))"
            },
            children: d ? "⚡" : "💧"
          })
        }), n.jsxs("div", {
          children: [n.jsx("div", {
            style: {
              fontSize: "1.3rem",
              fontWeight: 900,
              background: `linear-gradient(135deg, white, ${p})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em"
            },
            children: o
          }), n.jsx("p", {
            style: {
              fontSize: "0.72rem",
              color: "#94a3b8",
              margin: 0
            },
            children: "Bills, receipts & payment tracking"
          })]
        })]
      }), n.jsxs("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0.6rem"
        },
        children: [n.jsxs("div", {
          className: "maint-stat",
          children: [n.jsxs("div", {
            className: "maint-stat-val",
            style: {
              color: "#34d399"
            },
            children: ["₹", (E / 1e3).toFixed(1), "K"]
          }), n.jsx("div", {
            className: "maint-stat-lbl",
            children: "Paid"
          })]
        }), n.jsxs("div", {
          className: "maint-stat",
          children: [n.jsxs("div", {
            className: "maint-stat-val",
            style: {
              color: "#f59e0b"
            },
            children: ["₹", (B / 1e3).toFixed(1), "K"]
          }), n.jsx("div", {
            className: "maint-stat-lbl",
            children: "Pending"
          })]
        }), n.jsxs("div", {
          className: "maint-stat",
          children: [n.jsx("div", {
            className: "maint-stat-val",
            style: {
              color: I ? "#ef4444" : "#34d399"
            },
            children: I
          }), n.jsx("div", {
            className: "maint-stat-lbl",
            children: "Overdue"
          })]
        })]
      })]
    }), N ? n.jsxs("div", {
      className: "section-card",
      style: {
        marginBottom: "1.25rem"
      },
      children: [n.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "1rem",
          fontWeight: 700,
          fontSize: "0.9rem",
          color: "#e2e8f0"
        },
        children: [n.jsx(xi, {
          size: 16,
          style: {
            color: h
          }
        }), " New Bill Entry"]
      }), n.jsx(a0, {
        onSave: G,
        onCancel: () => b(!1)
      })]
    }) : n.jsxs("button", {
      className: "btn btn-primary w-full",
      style: {
        marginBottom: "1.25rem",
        background: `linear-gradient(135deg, ${h}, ${p})`,
        boxShadow: `0 8px 20px ${h}44`
      },
      onClick: () => b(!0),
      children: [n.jsx(xi, {
        size: 18
      }), " Add New Bill"]
    }), x.length === 0 ? n.jsxs("div", {
      className: "section-card",
      style: {
        textAlign: "center",
        padding: "2.5rem 1rem"
      },
      children: [n.jsx("div", {
        style: {
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: `${h}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1rem",
          fontSize: "1.8rem"
        },
        children: d ? "⚡" : "💧"
      }), n.jsx("p", {
        style: {
          color: "#94a3b8",
          fontSize: "0.9rem"
        },
        children: "No bills recorded yet."
      }), n.jsx("p", {
        style: {
          color: "#475569",
          fontSize: "0.75rem",
          marginTop: "0.25rem"
        },
        children: 'Tap "Add New Bill" to get started.'
      })]
    }) : n.jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem"
      },
      children: x.map(V => n.jsx(Np, {
        bill: V,
        onDelete: W,
        onMarkPaid: q,
        onEdit: L
      }, V.id))
    }), A.open && n.jsx(No, {
      files: A.files,
      initialIndex: A.index,
      title: A.title,
      onClose: () => k({
        ...A,
        open: !1
      })
    })]
  })
}
const Ap = ({
  payment: c,
  tenant: d
}) => n.jsxs("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: "0.85rem",
    padding: "1rem",
    background: "rgba(15,23,42,0.55)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "1.1rem",
    marginBottom: "0.75rem",
    position: "relative"
  },
  className: "card-hover",
  children: [n.jsx("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "1rem",
      background: "rgba(16,185,129,0.1)",
      border: "1px solid rgba(16,185,129,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#10b981",
      flexShrink: 0
    },
    children: n.jsx(So, {
      size: 20
    })
  }), n.jsxs("div", {
    style: {
      flex: 1,
      minWidth: 0
    },
    children: [n.jsxs("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      },
      children: [n.jsx("h4", {
        style: {
          fontSize: "0.9rem",
          fontWeight: 800,
          color: "#f1f5f9",
          margin: 0
        },
        children: (d == null ? void 0 : d.name) || "Unknown Tenant"
      }), n.jsxs("span", {
        style: {
          fontSize: "0.95rem",
          fontWeight: 900,
          color: "#10b981"
        },
        children: ["+₹", c.amount]
      })]
    }), n.jsxs("p", {
      style: {
        fontSize: "0.72rem",
        color: "#64748b",
        margin: "2px 0",
        display: "flex",
        alignItems: "center",
        gap: 4
      },
      children: [n.jsx(Vs, {
        size: 11
      }), " Unit ", d == null ? void 0 : d.unitId, " • ", c.type || "Rent"]
    }), n.jsxs("div", {
      style: {
        fontSize: "0.68rem",
        color: "#475569",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 4
      },
      children: [n.jsx(Vt, {
        size: 11
      }), " ", c.date]
    })]
  })]
});

function Cp({
  status: c,
  onClose: d
}) {
  if (!c.message) return null;
  const f = c.type === "success";
  return n.jsxs("div", {
    style: {
      marginTop: "1rem",
      marginBottom: "1rem",
      padding: "1rem",
      borderRadius: "1rem",
      background: f ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
      border: `1px solid ${f?"rgba(16,185,129,0.3)":"rgba(239,68,68,0.3)"}`,
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      color: f ? "#10b981" : "#ef4444",
      animation: "fadeIn 0.3s ease-out"
    },
    children: [f ? n.jsx(Pl, {
      size: 20
    }) : n.jsx(Il, {
      size: 20
    }), n.jsx("span", {
      style: {
        fontSize: "0.85rem",
        fontWeight: 600,
        flex: 1
      },
      children: c.message
    }), n.jsx("button", {
      onClick: d,
      style: {
        background: "none",
        border: "none",
        color: "inherit",
        cursor: "pointer",
        display: "flex",
        alignItems: "center"
      },
      children: n.jsx(St, {
        size: 16
      })
    })]
  })
}

function yn({
  label: c,
  icon: d,
  ...f
}) {
  return n.jsxs("div", {
    className: "input-group",
    children: [n.jsx("label", {
      className: "form-label",
      children: c
    }), n.jsxs("div", {
      style: {
        position: "relative"
      },
      children: [n.jsx("input", {
        className: "input input-with-icon",
        ...f
      }), d && n.jsx(d, {
        className: "input-icon",
        size: 18
      })]
    })]
  })
}
const wp = () => {
  const c = [],
    d = new Date;
  for (let f = -12; f <= 3; f++) {
    const o = new Date(d.getFullYear(), d.getMonth() + f, 1),
      h = o.getFullYear(),
      p = String(o.getMonth() + 1).padStart(2, "0"),
      x = o.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric"
      }).toUpperCase();
    c.push({
      value: `${h}-${p}`,
      label: x
    })
  }
  return c
};

function Tp() {
  var ft, Ci;
  const [c, d] = Y.useState(""), f = Zt(() => X.payments.toArray()) || [], o = Zt(() => X.tenants.toArray()) || [], [h, p] = Y.useState("tracker"), x = wp(), N = new Date().toISOString().slice(0, 7), [b, A] = Y.useState(N), [k, E] = Y.useState(null), [B, I] = Y.useState("all"), [G, L] = Y.useState("unit_asc"), [W, q] = Y.useState(!1), [V, ne] = Y.useState(null), [se, Qe] = Y.useState(""), [_e, xe] = Y.useState(""), [_, ae] = Y.useState(""), [ye, O] = Y.useState(""), [J, Me] = Y.useState(""), [We, Ye] = Y.useState(""), [v, U] = Y.useState({
    type: "",
    message: ""
  }), [Z, te] = Y.useState(null), me = o.reduce((w, Q) => ({
    ...w,
    [Q.id]: Q
  }), {}), ie = () => {
    if (localStorage.getItem("sound_enabled") !== "false") try {
      const w = window.AudioContext || window.webkitAudioContext;
      if (!w) return;
      const Q = new w,
        oe = (Ne, he, we) => {
          const Ue = Q.createOscillator(),
            Le = Q.createGain();
          Ue.type = "sine", Ue.frequency.setValueAtTime(Ne, he), Le.gain.setValueAtTime(0, he), Le.gain.linearRampToValueAtTime(.12, he + .05), Le.gain.exponentialRampToValueAtTime(1e-4, he + we), Ue.connect(Le), Le.connect(Q.destination), Ue.start(he), Ue.stop(he + we)
        },
        je = Q.currentTime;
      oe(523.25, je, .4), oe(783.99, je + .12, .6)
    } catch (w) {
      console.error("Audio synthesis failed", w)
    }
  }, le = f.reduce((w, Q) => w + (parseFloat(Q.amount) || 0), 0), $ = f.filter(w => w.date.startsWith(N)).reduce((w, Q) => w + (parseFloat(Q.amount) || 0), 0), ve = f.filter(w => {
    const Q = me[w.tenantId];
    return (Q == null ? void 0 : Q.name.toLowerCase().includes(c.toLowerCase())) || (Q == null ? void 0 : Q.unitId.toString().includes(c))
  }).sort((w, Q) => new Date(Q.date) - new Date(w.date)), dt = o.filter(w => f.some(oe => oe.tenantId === w.id && oe.date.startsWith(b)) ? !0 : !(w.leaseStart && w.leaseStart.slice(0, 7) > b || w.leaseEnd && w.leaseEnd.slice(0, 7) < b));
  let ht = 0,
    Kt = 0,
    Gt = 0;
  const et = dt.map(w => {
      const Q = parseFloat(w.rent) || 0,
        je = f.filter(Ue => Ue.tenantId === w.id && (Ue.type === "Rent" || Ue.type === "rent" || Ue.type === "RENT") && Ue.date.startsWith(b)).reduce((Ue, Le) => Ue + (parseFloat(Le.amount) || 0), 0);
      ht += Q, Kt += je, Gt += Math.max(0, Q - je);
      const Ne = Q > 0 ? Math.min(100, Math.round(je / Q * 100)) : je > 0 ? 100 : 0;
      let he = "High Risk",
        we = "badge-high-risk";
      return Q === 0 || je >= Q ? (he = "Secure", we = "badge-secure") : je > 0 && (he = "Moderate", we = "badge-moderate"), {
        tenant: w,
        expected: Q,
        paid: je,
        percent: Ne,
        statusLabel: he,
        statusClass: we
      }
    }),
    ea = et.length,
    Nl = et.filter(w => w.statusLabel === "Secure").length,
    ta = et.filter(w => w.statusLabel === "Moderate").length,
    C = et.filter(w => w.statusLabel === "High Risk").length,
    re = [...et.filter(w => {
      const Q = w.tenant,
        oe = Q.name.toLowerCase().includes(c.toLowerCase()) || Q.unitId.toString().includes(c);
      let je = !0;
      return B === "secure" ? je = w.statusLabel === "Secure" : B === "moderate" ? je = w.statusLabel === "Moderate" : B === "high_risk" && (je = w.statusLabel === "High Risk"), oe && je
    })].sort((w, Q) => {
      if (G === "unit_asc" || G === "unit_desc") {
        const oe = w.tenant.unitId,
          je = Q.tenant.unitId,
          Ne = !isNaN(oe),
          he = !isNaN(je);
        let we = 0;
        return Ne && he ? we = parseFloat(oe) - parseFloat(je) : we = oe.localeCompare(je), G === "unit_asc" ? we : -we
      }
      if (G === "name_asc") return w.tenant.name.localeCompare(Q.tenant.name);
      if (G === "due_desc") {
        const oe = Math.max(0, w.expected - w.paid);
        return Math.max(0, Q.expected - Q.paid) - oe
      }
      return G === "paid_desc" ? Q.paid - w.paid : 0
    }),
    qe = () => {
      var w;
      try {
        const Q = ((w = x.find(Ne => Ne.value === b)) == null ? void 0 : w.label) || b,
          oe = window.open("", "_blank");
        if (!oe) return alert("Please allow popups to export PDF.");
        const je = et.map(Ne => {
          const he = Ne.tenant,
            we = Math.max(0, Ne.expected - Ne.paid);
          let Ue = "#ef4444";
          return Ne.statusLabel === "Secure" ? Ue = "#10b981" : Ne.statusLabel === "Moderate" && (Ue = "#f59e0b"), `
          <tr>
            <td style="text-align: center; font-weight: bold;">${he.unitId}</td>
            <td>${he.name}</td>
            <td>₹${Ne.expected.toLocaleString("en-IN")}</td>
            <td style="color: #10b981; font-weight: bold;">₹${Ne.paid.toLocaleString("en-IN")}</td>
            <td style="color: ${we>0?"#ef4444":"#10b981"}; font-weight: bold;">₹${we.toLocaleString("en-IN")}</td>
            <td style="color: ${Ue}; font-weight: bold; text-transform: uppercase;">${Ne.statusLabel}</td>
          </tr>
        `
        }).join("");
        oe.document.write(`
        <html>
          <head>
            <title>Ansari House - Monthly Rent Report (${Q})</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; padding: 25px; color: #1e293b; background: #ffffff; }
              .header { display: flex; justify-content: space-between; border-bottom: 3px solid #6366f1; padding-bottom: 12px; margin-bottom: 25px; }
              .title { font-size: 26px; font-weight: 900; color: #0f172a; letter-spacing: -0.02em; }
              .meta { font-size: 13px; text-align: right; color: #64748b; font-weight: 500; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #e2e8f0; padding: 12px; text-align: left; }
              th { background-color: #f8fafc; color: #475569; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
              td { font-size: 13px; color: #334155; }
              .summary-cards { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-top: 20px; }
              .card { border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; background: #f8fafc; }
              .card-title { font-size: 11px; color: #64748b; font-weight: bold; text-transform: uppercase; }
              .card-value { font-size: 18px; font-weight: 900; color: #0f172a; margin-top: 4px; }
            </style>
          </head>
          <body>
            <div class="header">
              <div>
                <div class="title">ANSARI HOUSE</div>
                <div style="font-size: 14px; color: #6366f1; font-weight: 700; text-transform: uppercase; margin-top: 4px;">Monthly Rent Report - ${Q}</div>
              </div>
              <div class="meta">
                <div>Generated: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</div>
                <div>Total Active Units: ${et.length}</div>
              </div>
            </div>
            
            <div class="summary-cards">
              <div class="card">
                <div class="card-title">Expected Rent</div>
                <div class="card-value">₹${ht.toLocaleString("en-IN")}</div>
              </div>
              <div class="card" style="border-left: 3px solid #10b981;">
                <div class="card-title" style="color: #10b981;">Collected Rent</div>
                <div class="card-value" style="color: #10b981;">₹${Kt.toLocaleString("en-IN")}</div>
              </div>
              <div class="card" style="border-left: 3px solid #ef4444;">
                <div class="card-title" style="color: #ef4444;">Pending Rent</div>
                <div class="card-value" style="color: #ef4444;">₹${Gt.toLocaleString("en-IN")}</div>
              </div>
            </div>
            
            <table>
              <thead>
                <tr>
                  <th style="text-align: center;">Unit</th>
                  <th>Tenant Name</th>
                  <th>Expected Rent</th>
                  <th>Collected Rent</th>
                  <th>Due Balance</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${je||'<tr><td colspan="6" style="text-align: center; color: #94a3b8; padding: 30px;">No tenant records found.</td></tr>'}
              </tbody>
            </table>
            
            <script>
              window.onload = function() {
                window.print();
              }
            <\/script>
          </body>
        </html>
      `), oe.document.close(), U({
          type: "success",
          message: `📄 Monthly Report PDF for ${Q} generated.`
        })
      } catch (Q) {
        console.error(Q), alert(`Failed to export PDF: ${Q.message}`)
      }
    },
    tt = () => {
      var w;
      try {
        const Q = ((w = x.find(he => he.value === b)) == null ? void 0 : w.label) || b;
        let oe = "data:text/csv;charset=utf-8,";
        oe += `ANSARI HOUSE Monthly Rent Report - ${Q}
`, oe += `Unit,Tenant Name,Mobile,Expected Rent,Paid Rent,Due Balance,Status
`, et.forEach(he => {
          const we = he.tenant,
            Ue = we.name.replace(/,/g, ""),
            Le = Math.max(0, he.expected - he.paid);
          oe += `${we.unitId},"${Ue}",${we.mobile||"N/A"},${he.expected},${he.paid},${Le},${he.statusLabel}
`
        });
        const je = encodeURI(oe),
          Ne = document.createElement("a");
        Ne.setAttribute("href", je), Ne.setAttribute("download", `ansari_house_report_${b}.csv`), document.body.appendChild(Ne), Ne.click(), document.body.removeChild(Ne), U({
          type: "success",
          message: `✅ Monthly Report CSV for ${Q} downloaded.`
        })
      } catch (Q) {
        console.error(Q), alert(`Failed to export CSV: ${Q.message}`)
      }
    },
    Jt = w => {
      ne(w);
      const Q = parseFloat(w.rent) || 0,
        je = f.filter(he => he.tenantId === w.id && (he.type === "Rent" || he.type === "rent" || he.type === "RENT") && he.date.startsWith(b)).reduce((he, we) => he + (parseFloat(we.amount) || 0), 0),
        Ne = Math.max(0, Q - je);
      Qe(Ne > 0 ? Ne.toString() : ""), xe(w.liftWaterMaintenance || ""), ae(w.liftWaterBill || ""), O(""), Me(""), Ye(b === N ? new Date().toISOString().split("T")[0] : `${b}-01`), q(!0)
    },
    Sn = async w => {
      if (w.preventDefault(), !V) return;
      const Q = [];
      if (parseFloat(se) > 0 && Q.push({
          amount: parseFloat(se),
          type: "Rent"
        }), parseFloat(_e) > 0 && Q.push({
          amount: parseFloat(_e),
          type: "Lift Maintenance"
        }), parseFloat(_) > 0 && Q.push({
          amount: parseFloat(_),
          type: "Water Bill"
        }), parseFloat(ye) > 0 && Q.push({
          amount: parseFloat(ye),
          type: "Electricity"
        }), parseFloat(J) > 0 && Q.push({
          amount: parseFloat(J),
          type: "Other"
        }), Q.length === 0) {
        alert("Please enter a valid amount for at least one category.");
        return
      }
      try {
        for (const oe of Q) await X.payments.add({
          tenantId: V.id,
          amount: oe.amount,
          type: oe.type,
          date: We,
          status: "Paid"
        });
        ie(), U({
          type: "success",
          message: `Successfully logged ${Q.length} payment(s) for ${V.name}`
        }), q(!1)
      } catch (oe) {
        console.error(oe), U({
          type: "error",
          message: `Failed to record payments: ${oe.message}`
        })
      }
    }, la = V ? f.filter(w => w.tenantId === V.id && (w.type === "Rent" || w.type === "rent" || w.type === "RENT") && w.date.startsWith(b)) : [], Na = V && parseFloat(V.rent) || 0, Ni = la.reduce((w, Q) => w + (parseFloat(Q.amount) || 0), 0), Ai = Math.max(0, Na - Ni);
  return n.jsxs("div", {
    className: "animate-fade",
    children: [n.jsxs("div", {
      style: {
        marginBottom: "1.25rem"
      },
      children: [n.jsx("h1", {
        className: "text-gradient",
        style: {
          fontSize: "1.75rem",
          fontWeight: 900
        },
        children: "Financial Records"
      }), n.jsx("p", {
        style: {
          color: "#64748b",
          fontSize: "0.85rem"
        },
        children: h === "tracker" ? "Monthly Payment Tracking Dashboard" : "Global Transaction Ledger"
      })]
    }), n.jsxs("div", {
      className: "tab-container",
      children: [n.jsxs("button", {
        className: `tab-btn ${h==="tracker"?"active":""}`,
        onClick: () => {
          p("tracker"), d("")
        },
        children: [n.jsx(gi, {
          size: 16
        }), "Monthly Tracker"]
      }), n.jsxs("button", {
        className: `tab-btn ${h==="ledger"?"active":""}`,
        onClick: () => {
          p("ledger"), d("")
        },
        children: [n.jsx(Ft, {
          size: 16
        }), "Transaction Ledger"]
      })]
    }), n.jsx(Cp, {
      status: v,
      onClose: () => U({
        type: "",
        message: ""
      })
    }), h === "tracker" ? n.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "0.75rem",
        marginBottom: "1.25rem"
      },
      children: [n.jsxs("div", {
        style: {
          background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(99,102,241,0.02))",
          border: "1px solid rgba(99,102,241,0.2)",
          padding: "1rem",
          borderRadius: "1.25rem"
        },
        children: [n.jsx(yi, {
          size: 20,
          style: {
            color: "#6366f1",
            marginBottom: "0.4rem"
          }
        }), n.jsxs("div", {
          style: {
            fontSize: "1.1rem",
            fontWeight: 900,
            color: "#f1f5f9"
          },
          children: ["₹", ht.toLocaleString()]
        }), n.jsx("div", {
          style: {
            fontSize: "0.65rem",
            color: "#64748b",
            fontWeight: 700,
            textTransform: "uppercase"
          },
          children: "Expected"
        })]
      }), n.jsxs("div", {
        style: {
          background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.02))",
          border: "1px solid rgba(16,185,129,0.2)",
          padding: "1rem",
          borderRadius: "1.25rem"
        },
        children: [n.jsx(Pl, {
          size: 20,
          style: {
            color: "#10b981",
            marginBottom: "0.4rem"
          }
        }), n.jsxs("div", {
          style: {
            fontSize: "1.1rem",
            fontWeight: 900,
            color: "#f1f5f9"
          },
          children: ["₹", Kt.toLocaleString()]
        }), n.jsx("div", {
          style: {
            fontSize: "0.65rem",
            color: "#64748b",
            fontWeight: 700,
            textTransform: "uppercase"
          },
          children: "Collected"
        })]
      }), n.jsxs("div", {
        style: {
          background: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(239,68,68,0.02))",
          border: "1px solid rgba(239,68,68,0.2)",
          padding: "1rem",
          borderRadius: "1.25rem"
        },
        children: [n.jsx(So, {
          size: 20,
          style: {
            color: "#ef4444",
            marginBottom: "0.4rem"
          }
        }), n.jsxs("div", {
          style: {
            fontSize: "1.1rem",
            fontWeight: 900,
            color: "#f1f5f9"
          },
          children: ["₹", Gt.toLocaleString()]
        }), n.jsx("div", {
          style: {
            fontSize: "0.65rem",
            color: "#64748b",
            fontWeight: 700,
            textTransform: "uppercase"
          },
          children: "Pending"
        })]
      })]
    }) : n.jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0.75rem",
        marginBottom: "1.25rem"
      },
      children: [n.jsxs("div", {
        style: {
          background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.02))",
          border: "1px solid rgba(16,185,129,0.2)",
          padding: "1.25rem",
          borderRadius: "1.25rem"
        },
        children: [n.jsx(yi, {
          size: 24,
          style: {
            color: "#10b981",
            marginBottom: "0.5rem"
          }
        }), n.jsxs("div", {
          style: {
            fontSize: "1.2rem",
            fontWeight: 900,
            color: "#f1f5f9"
          },
          children: ["₹", (le / 1e3).toFixed(1), "K"]
        }), n.jsx("div", {
          style: {
            fontSize: "0.7rem",
            color: "#64748b",
            fontWeight: 700,
            textTransform: "uppercase"
          },
          children: "Total Revenue"
        })]
      }), n.jsxs("div", {
        style: {
          background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(99,102,241,0.02))",
          border: "1px solid rgba(99,102,241,0.2)",
          padding: "1.25rem",
          borderRadius: "1.25rem"
        },
        children: [n.jsx(So, {
          size: 24,
          style: {
            color: "#6366f1",
            marginBottom: "0.5rem"
          }
        }), n.jsxs("div", {
          style: {
            fontSize: "1.2rem",
            fontWeight: 900,
            color: "#f1f5f9"
          },
          children: ["₹", ($ / 1e3).toFixed(1), "K"]
        }), n.jsx("div", {
          style: {
            fontSize: "0.7rem",
            color: "#64748b",
            fontWeight: 700,
            textTransform: "uppercase"
          },
          children: "This Month"
        })]
      })]
    }), h === "tracker" && n.jsxs("div", {
      style: {
        display: "flex",
        gap: "0.75rem",
        marginBottom: "1.25rem",
        alignItems: "flex-end",
        flexWrap: "wrap"
      },
      children: [n.jsxs("div", {
        style: {
          flex: 1,
          minWidth: "160px"
        },
        children: [n.jsxs("label", {
          className: "form-label",
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: "0.5rem"
          },
          children: [n.jsx(Vt, {
            size: 14,
            style: {
              color: "#6366f1"
            }
          }), "Select Month"]
        }), n.jsx("select", {
          className: "input",
          value: b,
          onChange: w => {
            A(w.target.value), E(null)
          },
          style: {
            background: "rgba(30, 41, 59, 0.7)",
            borderColor: "rgba(255,255,255,0.1)",
            fontWeight: 700,
            color: "#f1f5f9",
            margin: 0
          },
          children: x.map(w => n.jsx("option", {
            value: w.value,
            children: w.label
          }, w.value))
        })]
      }), n.jsxs("div", {
        style: {
          display: "flex",
          gap: "0.5rem"
        },
        children: [n.jsxs("button", {
          onClick: qe,
          type: "button",
          title: "Export Month PDF Report",
          className: "btn btn-secondary",
          style: {
            padding: "0.65rem 0.85rem",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            height: "42px",
            borderRadius: "0.75rem",
            fontSize: "0.75rem",
            fontWeight: 800
          },
          children: [n.jsx(Im, {
            size: 16,
            style: {
              color: "#f87171"
            }
          }), " PDF"]
        }), n.jsxs("button", {
          onClick: tt,
          type: "button",
          title: "Export Month CSV Spreadsheet",
          className: "btn btn-secondary",
          style: {
            padding: "0.65rem 0.85rem",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            height: "42px",
            borderRadius: "0.75rem",
            fontSize: "0.75rem",
            fontWeight: 800
          },
          children: [n.jsx(Wt, {
            size: 16,
            style: {
              color: "#34d399"
            }
          }), " CSV"]
        })]
      })]
    }), n.jsxs("div", {
      style: {
        position: "relative",
        marginBottom: "1rem"
      },
      children: [n.jsx(Fm, {
        style: {
          position: "absolute",
          left: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#475569"
        },
        size: 18
      }), n.jsx("input", {
        type: "text",
        placeholder: h === "tracker" ? "Search tenants or unit..." : "Search records by tenant or unit...",
        style: {
          paddingLeft: "3rem",
          margin: 0
        },
        className: "input",
        value: c,
        onChange: w => {
          d(w.target.value), E(null)
        }
      })]
    }), h === "tracker" && n.jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        marginBottom: "1.5rem"
      },
      children: [n.jsxs("div", {
        style: {
          display: "flex",
          gap: "0.4rem",
          overflowX: "auto",
          paddingBottom: "4px"
        },
        className: "no-scrollbar",
        children: [n.jsxs("button", {
          type: "button",
          onClick: () => {
            I("all"), E(null)
          },
          className: `filter-pill ${B==="all"?"active":""}`,
          children: ["All ", n.jsx("span", {
            className: "filter-pill-badge",
            children: ea
          })]
        }), n.jsxs("button", {
          type: "button",
          onClick: () => {
            I("secure"), E(null)
          },
          className: `filter-pill secure ${B==="secure"?"active":""}`,
          children: ["Secure ", n.jsx("span", {
            className: "filter-pill-badge",
            children: Nl
          })]
        }), n.jsxs("button", {
          type: "button",
          onClick: () => {
            I("moderate"), E(null)
          },
          className: `filter-pill moderate ${B==="moderate"?"active":""}`,
          children: ["Moderate ", n.jsx("span", {
            className: "filter-pill-badge",
            children: ta
          })]
        }), n.jsxs("button", {
          type: "button",
          onClick: () => {
            I("high_risk"), E(null)
          },
          className: `filter-pill high-risk ${B==="high_risk"?"active":""}`,
          children: ["High Risk ", n.jsx("span", {
            className: "filter-pill-badge",
            children: C
          })]
        })]
      }), n.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "space-between"
        },
        children: [n.jsx("span", {
          style: {
            fontSize: "0.72rem",
            color: "#64748b",
            fontWeight: 800,
            textTransform: "uppercase"
          },
          children: "Sort by"
        }), n.jsxs("select", {
          value: G,
          onChange: w => {
            L(w.target.value), E(null)
          },
          className: "input",
          style: {
            width: "auto",
            padding: "0.4rem 2rem 0.4rem 0.85rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            background: "rgba(30, 41, 59, 0.4)",
            borderColor: "rgba(255,255,255,0.06)",
            borderRadius: "0.6rem",
            color: "#cbd5e1",
            margin: 0
          },
          children: [n.jsx("option", {
            value: "unit_asc",
            children: "Unit Number (Asc)"
          }), n.jsx("option", {
            value: "unit_desc",
            children: "Unit Number (Desc)"
          }), n.jsx("option", {
            value: "name_asc",
            children: "Name (A-Z)"
          }), n.jsx("option", {
            value: "due_desc",
            children: "Remaining Due (Highest)"
          }), n.jsx("option", {
            value: "paid_desc",
            children: "Paid Amount (Highest)"
          })]
        })]
      })]
    }), h === "tracker" ? n.jsx("div", {
      children: re.length === 0 ? n.jsxs("div", {
        style: {
          background: "rgba(255,255,255,0.02)",
          border: "1px dashed rgba(255,255,255,0.1)",
          borderRadius: "1.25rem",
          padding: "3rem 1rem",
          textAlign: "center"
        },
        children: [n.jsx(ji, {
          size: 32,
          style: {
            color: "#334155",
            marginBottom: "0.5rem"
          }
        }), n.jsxs("p", {
          style: {
            color: "#475569",
            fontSize: "0.9rem",
            fontWeight: 600
          },
          children: ["No tenants matching selected filters for ", (ft = x.find(w => w.value === b)) == null ? void 0 : ft.label, "."]
        })]
      }) : n.jsxs("div", {
        className: "tracker-table animate-fade",
        children: [n.jsxs("div", {
          className: "tracker-header-row",
          children: [n.jsx("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              fontWeight: 800
            },
            children: "Unit"
          }), n.jsx("div", {
            style: {
              fontWeight: 800,
              paddingLeft: "8px"
            },
            children: "Tenant"
          }), n.jsx("div", {
            style: {
              fontWeight: 800
            },
            children: "Rent Progress"
          }), n.jsx("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              fontWeight: 800
            },
            children: "Actions"
          })]
        }), re.map(({
          tenant: w,
          expected: Q,
          paid: oe,
          percent: je,
          statusLabel: Ne,
          statusClass: he
        }) => {
          var It;
          const we = k === w.id,
            Ue = Math.max(0, Q - oe),
            Le = new Date,
            $t = new Date(w.leaseEnd),
            nt = Math.ceil(($t - Le) / (1e3 * 60 * 60 * 24));
          let Aa = "",
            Ca = "#cbd5e1";
          nt < 0 ? (Aa = "Expired", Ca = "#ef4444") : nt <= 30 ? (Aa = `${nt} days left`, Ca = "#f59e0b") : (Aa = "Active", Ca = "#10b981");
          const wi = ((It = x.find(Be => Be.value === b)) == null ? void 0 : It.label) || b,
            wa = `Hi ${w.name}, this is a friendly reminder that the rent of ₹${Ue.toLocaleString("en-IN")} for Unit ${w.unitId} for the month of ${wi} is pending. Please ignore if already paid. Thank you!`,
            Ta = `https://wa.me/91${w.mobile}?text=${encodeURIComponent(wa)}`,
            aa = f.filter(Be => Be.tenantId === w.id && (Be.type === "Rent" || Be.type === "rent" || Be.type === "RENT") && Be.date.startsWith(b));
          return n.jsxs("div", {
            style: {
              borderBottom: "1px solid rgba(255, 255, 255, 0.04)"
            },
            className: "animate-fade",
            children: [n.jsxs("div", {
              className: `tracker-row card-hover ${we?"active-row":""}`,
              onClick: () => E(we ? null : w.id),
              style: {
                borderBottom: "none"
              },
              children: [n.jsx("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: n.jsx("div", {
                  style: {
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "rgba(99, 102, 241, 0.15)",
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                    color: "#818cf8",
                    fontSize: "0.75rem",
                    fontWeight: 900,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  },
                  children: w.unitId
                })
              }), n.jsxs("div", {
                style: {
                  paddingLeft: "8px",
                  minWidth: 0
                },
                children: [n.jsx("div", {
                  style: {
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "#f1f5f9",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: w.name
                }), n.jsxs("div", {
                  style: {
                    fontSize: "0.7rem",
                    color: "#64748b",
                    marginTop: "2px",
                    fontWeight: 600
                  },
                  children: ["Expected: ₹", Q.toLocaleString()]
                })]
              }), n.jsxs("div", {
                className: "tracker-progress-wrap",
                children: [n.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.68rem",
                    color: "#cbd5e1",
                    marginBottom: "4px",
                    fontWeight: 700
                  },
                  children: [n.jsxs("span", {
                    children: ["₹", oe.toLocaleString()]
                  }), n.jsxs("span", {
                    style: {
                      color: "#475569"
                    },
                    children: ["/₹", Q.toLocaleString()]
                  })]
                }), n.jsx("div", {
                  className: "tracker-progress-bar",
                  children: n.jsx("div", {
                    className: "tracker-progress-fill",
                    style: {
                      width: `${je}%`,
                      background: je === 100 ? "linear-gradient(90deg, #10b981, #34d399)" : je > 0 ? "linear-gradient(90deg, #f59e0b, #fbbf24)" : "linear-gradient(90deg, #ef4444, #f87171)"
                    }
                  })
                })]
              }), n.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem"
                },
                children: [n.jsx("button", {
                  onClick: Be => {
                    Be.stopPropagation(), Jt(w)
                  },
                  type: "button",
                  title: "Quick Pay Rent",
                  style: {
                    background: "rgba(16,185,129,0.15)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    borderRadius: "0.5rem",
                    color: "#34d399",
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  },
                  children: n.jsx(gi, {
                    size: 13
                  })
                }), n.jsx("div", {
                  style: {
                    color: "#475569",
                    display: "flex",
                    alignItems: "center"
                  },
                  children: we ? n.jsx(t0, {
                    size: 16
                  }) : n.jsx(Do, {
                    size: 16
                  })
                })]
              })]
            }), we && n.jsxs("div", {
              style: {
                background: "rgba(15, 23, 42, 0.45)",
                borderLeft: "2px solid var(--primary)",
                padding: "1.25rem 1rem",
                animation: "fadeIn 0.25s ease-out"
              },
              onClick: Be => Be.stopPropagation(),
              children: [n.jsxs("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: "0.85rem",
                  marginBottom: "1rem"
                },
                children: [n.jsxs("div", {
                  children: [n.jsx("span", {
                    style: {
                      fontSize: "0.62rem",
                      color: "#64748b",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    },
                    children: "Phone Number"
                  }), n.jsx("div", {
                    style: {
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#e2e8f0",
                      marginTop: 2
                    },
                    children: w.mobile ? `+91 ${w.mobile}` : "Not Provided"
                  })]
                }), n.jsxs("div", {
                  children: [n.jsx("span", {
                    style: {
                      fontSize: "0.62rem",
                      color: "#64748b",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    },
                    children: "Lease Agreement"
                  }), n.jsxs("div", {
                    style: {
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: Ca,
                      marginTop: 2
                    },
                    children: [Aa, " ", n.jsxs("span", {
                      style: {
                        fontSize: "0.68rem",
                        color: "#64748b",
                        fontWeight: 500
                      },
                      children: ["(", w.leaseEnd, ")"]
                    })]
                  })]
                }), n.jsxs("div", {
                  children: [n.jsx("span", {
                    style: {
                      fontSize: "0.62rem",
                      color: "#64748b",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    },
                    children: "Security Deposit"
                  }), n.jsxs("div", {
                    style: {
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#e2e8f0",
                      marginTop: 2
                    },
                    children: ["₹", (parseFloat(w.securityDeposit) || 0).toLocaleString("en-IN")]
                  })]
                }), n.jsxs("div", {
                  children: [n.jsx("span", {
                    style: {
                      fontSize: "0.62rem",
                      color: "#64748b",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    },
                    children: "Kesco Deposit"
                  }), n.jsxs("div", {
                    style: {
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#e2e8f0",
                      marginTop: 2
                    },
                    children: ["₹", (parseFloat(w.kescoDeposit) || 0).toLocaleString("en-IN")]
                  })]
                })]
              }), w.notes && n.jsxs("div", {
                style: {
                  padding: "0.6rem 0.85rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "0.75rem",
                  marginBottom: "1rem"
                },
                children: [n.jsx("span", {
                  style: {
                    fontSize: "0.62rem",
                    color: "#64748b",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em"
                  },
                  children: "Remarks / Conditions"
                }), n.jsx("p", {
                  style: {
                    fontSize: "0.78rem",
                    color: "#cbd5e1",
                    margin: "2px 0 0 0",
                    lineHeight: 1.35
                  },
                  children: w.notes
                })]
              }), n.jsxs("div", {
                style: {
                  marginBottom: "1.25rem",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  paddingTop: "0.85rem"
                },
                children: [n.jsxs("span", {
                  style: {
                    fontSize: "0.68rem",
                    color: "#64748b",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "block",
                    marginBottom: "0.5rem"
                  },
                  children: ["Logged Payments (", wi, ")"]
                }), n.jsx("div", {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem"
                  },
                  children: aa.length === 0 ? n.jsx("div", {
                    style: {
                      color: "#475569",
                      fontSize: "0.75rem",
                      padding: "0.25rem 0",
                      fontWeight: 600
                    },
                    children: "No payments logged for this month."
                  }) : aa.map(Be => n.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.5rem 0.75rem",
                      background: "rgba(255, 255, 255, 0.02)",
                      borderRadius: "0.6rem",
                      border: "1px solid rgba(255,255,255,0.04)",
                      fontSize: "0.78rem"
                    },
                    children: [n.jsxs("div", {
                      children: [n.jsxs("span", {
                        style: {
                          fontWeight: 800,
                          color: "#10b981"
                        },
                        children: ["₹", Be.amount.toLocaleString()]
                      }), n.jsxs("span", {
                        style: {
                          fontSize: "0.68rem",
                          color: "#64748b",
                          marginLeft: "6px",
                          fontWeight: 600
                        },
                        children: ["(", Be.date, ")"]
                      })]
                    }), n.jsx("button", {
                      onClick: na => {
                        na.stopPropagation(), te(Be.id)
                      },
                      style: {
                        background: "none",
                        border: "none",
                        color: "#f87171",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        padding: "4px",
                        touchAction: "manipulation"
                      },
                      children: n.jsx(nl, {
                        size: 14
                      })
                    })]
                  }, Be.id))
                })]
              }), n.jsxs("div", {
                style: {
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  paddingTop: "0.85rem"
                },
                children: [n.jsxs("button", {
                  onClick: Be => {
                    Be.stopPropagation(), Jt(w)
                  },
                  type: "button",
                  style: {
                    flex: 1.5,
                    minWidth: "130px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    background: "rgba(16,185,129,0.15)",
                    color: "#34d399",
                    border: "1px solid rgba(16,185,129,0.25)",
                    padding: "0.6rem",
                    borderRadius: "0.8rem",
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    cursor: "pointer"
                  },
                  children: [n.jsx(gi, {
                    size: 14
                  }), " Log Rent Payment"]
                }), w.mobile && n.jsxs(n.Fragment, {
                  children: [n.jsxs("a", {
                    href: Ta,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: Be => Be.stopPropagation(),
                    style: {
                      flex: 1.2,
                      minWidth: "110px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      background: "rgba(99,102,241,0.15)",
                      color: "#a5b4fc",
                      border: "1px solid rgba(99,102,241,0.25)",
                      padding: "0.6rem",
                      borderRadius: "0.8rem",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      textDecoration: "none",
                      cursor: "pointer"
                    },
                    children: [n.jsx(qg, {
                      size: 14
                    }), " Send Reminder"]
                  }), n.jsx("a", {
                    href: `tel:${w.mobile}`,
                    onClick: Be => Be.stopPropagation(),
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "0.8rem",
                      color: "#cbd5e1",
                      cursor: "pointer"
                    },
                    children: n.jsx(Ws, {
                      size: 14
                    })
                  })]
                })]
              })]
            })]
          }, w.id)
        })]
      })
    }) : n.jsxs("div", {
      children: [n.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "1rem"
        },
        children: [n.jsx(Ft, {
          size: 18,
          style: {
            color: "#10b981"
          }
        }), n.jsx("span", {
          style: {
            fontWeight: 800,
            fontSize: "0.9rem",
            color: "#f1f5f9",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          },
          children: "Payment History"
        }), n.jsxs("span", {
          style: {
            background: "rgba(16,185,129,0.2)",
            color: "#10b981",
            fontSize: "0.7rem",
            fontWeight: 800,
            padding: "2px 8px",
            borderRadius: 99,
            marginLeft: "auto"
          },
          children: [ve.length, " Entries"]
        })]
      }), ve.length === 0 ? n.jsxs("div", {
        style: {
          background: "rgba(255,255,255,0.02)",
          border: "1px dashed rgba(255,255,255,0.1)",
          borderRadius: "1.25rem",
          padding: "3rem 1rem",
          textAlign: "center"
        },
        children: [n.jsx(ji, {
          size: 32,
          style: {
            color: "#334155",
            marginBottom: "0.5rem"
          }
        }), n.jsx("p", {
          style: {
            color: "#475569",
            fontSize: "0.9rem",
            fontWeight: 600
          },
          children: "No financial records found."
        })]
      }) : n.jsx("div", {
        children: ve.map(w => n.jsx(Ap, {
          payment: w,
          tenant: me[w.tenantId]
        }, w.id))
      })]
    }), W && V && n.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)"
      },
      children: n.jsxs("div", {
        style: {
          background: "rgba(15,23,42,0.95)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "1.5rem",
          width: "100%",
          maxWidth: "24rem",
          padding: "1.5rem"
        },
        className: "animate-fade",
        children: [n.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.25rem"
          },
          children: [n.jsxs("div", {
            children: [n.jsx("h3", {
              style: {
                margin: 0,
                fontWeight: 900,
                fontSize: "1.15rem",
                color: "#f1f5f9"
              },
              children: "Pay Rent"
            }), n.jsxs("p", {
              style: {
                margin: "2px 0 0 0",
                fontSize: "0.75rem",
                color: "#64748b",
                fontWeight: 700
              },
              children: [V.name, " • Unit ", V.unitId]
            })]
          }), n.jsx("button", {
            onClick: () => q(!1),
            style: {
              background: "none",
              border: "none",
              color: "#64748b",
              cursor: "pointer"
            },
            children: n.jsx(St, {
              size: 24
            })
          })]
        }), n.jsxs("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "0.5rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "1rem",
            padding: "0.75rem",
            marginBottom: "1rem"
          },
          children: [n.jsxs("div", {
            style: {
              textAlign: "center"
            },
            children: [n.jsx("div", {
              style: {
                fontSize: "0.65rem",
                color: "#64748b",
                fontWeight: 700,
                textTransform: "uppercase"
              },
              children: "Rent"
            }), n.jsxs("div", {
              style: {
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#f1f5f9",
                marginTop: "2px"
              },
              children: ["₹", Na.toLocaleString()]
            })]
          }), n.jsxs("div", {
            style: {
              textAlign: "center",
              borderLeft: "1px solid rgba(255,255,255,0.05)",
              borderRight: "1px solid rgba(255,255,255,0.05)"
            },
            children: [n.jsx("div", {
              style: {
                fontSize: "0.65rem",
                color: "#64748b",
                fontWeight: 700,
                textTransform: "uppercase"
              },
              children: "Paid"
            }), n.jsxs("div", {
              style: {
                fontSize: "0.85rem",
                fontWeight: 800,
                color: "#10b981",
                marginTop: "2px"
              },
              children: ["₹", Ni.toLocaleString()]
            })]
          }), n.jsxs("div", {
            style: {
              textAlign: "center"
            },
            children: [n.jsx("div", {
              style: {
                fontSize: "0.65rem",
                color: "#64748b",
                fontWeight: 700,
                textTransform: "uppercase"
              },
              children: "Due"
            }), n.jsxs("div", {
              style: {
                fontSize: "0.85rem",
                fontWeight: 800,
                color: Ai > 0 ? "#ef4444" : "#10b981",
                marginTop: "2px"
              },
              children: ["₹", Ai.toLocaleString()]
            })]
          })]
        }), n.jsxs("div", {
          style: {
            marginBottom: "1rem"
          },
          children: [n.jsxs("div", {
            style: {
              fontSize: "0.7rem",
              color: "#64748b",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "0.5rem"
            },
            children: ["Logged Payments (", (Ci = x.find(w => w.value === b)) == null ? void 0 : Ci.label, ")"]
          }), n.jsx("div", {
            className: "month-payments-list",
            children: la.length === 0 ? n.jsx("div", {
              style: {
                color: "#475569",
                fontSize: "0.75rem",
                padding: "1rem 0",
                textAlign: "center",
                fontWeight: 600
              },
              children: "No payments logged for this month."
            }) : la.map(w => n.jsxs("div", {
              className: "month-payment-row animate-fade",
              children: [n.jsxs("div", {
                children: [n.jsxs("span", {
                  style: {
                    fontWeight: 800,
                    color: "#10b981"
                  },
                  children: ["₹", w.amount.toLocaleString()]
                }), n.jsxs("span", {
                  style: {
                    fontSize: "0.68rem",
                    color: "#64748b",
                    marginLeft: "6px",
                    fontWeight: 600
                  },
                  children: ["(", w.date, ")"]
                })]
              }), n.jsx("button", {
                onClick: Q => {
                  Q.stopPropagation(), te(w.id)
                },
                style: {
                  background: "none",
                  border: "none",
                  color: "#f87171",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  touchAction: "manipulation"
                },
                children: n.jsx(nl, {
                  size: 14
                })
              })]
            }, w.id))
          })]
        }), n.jsxs("form", {
          onSubmit: Sn,
          children: [n.jsxs("div", {
            style: {
              maxHeight: "250px",
              overflowY: "auto",
              paddingRight: "4px",
              marginBottom: "1rem"
            },
            className: "no-scrollbar",
            children: [n.jsx(yn, {
              label: "Rent Amount (₹)",
              type: "number",
              value: se,
              onChange: w => Qe(w.target.value),
              placeholder: "0",
              icon: yi
            }), n.jsx(yn, {
              label: "Lift Maintenance (₹)",
              type: "number",
              value: _e,
              onChange: w => xe(w.target.value),
              placeholder: "0",
              icon: Da
            }), n.jsx(yn, {
              label: "Water Bill (₹)",
              type: "number",
              value: _,
              onChange: w => ae(w.target.value),
              placeholder: "0",
              icon: vi
            }), n.jsx(yn, {
              label: "Electricity (₹)",
              type: "number",
              value: ye,
              onChange: w => O(w.target.value),
              placeholder: "0",
              icon: Da
            }), n.jsx(yn, {
              label: "Other Charges (₹)",
              type: "number",
              value: J,
              onChange: w => Me(w.target.value),
              placeholder: "0",
              icon: gi
            })]
          }), n.jsx(yn, {
            label: "Payment Date",
            type: "date",
            required: !0,
            value: We,
            onChange: w => Ye(w.target.value),
            icon: Vt
          }), n.jsx("div", {
            style: {
              display: "flex",
              gap: "0.75rem",
              marginTop: "1.25rem"
            },
            children: n.jsx("button", {
              type: "submit",
              className: "btn btn-primary",
              style: {
                flex: 1,
                padding: "0.75rem"
              },
              children: "Confirm Payment"
            })
          })]
        })]
      })
    }), n.jsx("div", {
      style: {
        marginTop: "2rem",
        padding: "1rem",
        background: "rgba(15,23,42,0.5)",
        borderRadius: "1rem",
        border: "1px solid rgba(255,255,255,0.05)",
        textAlign: "center"
      },
      children: n.jsx("p", {
        style: {
          fontSize: "0.7rem",
          color: "#64748b",
          lineHeight: 1.5,
          margin: 0
        },
        children: "All records are verified and secured in local storage. For physical audit, please match these with your bank statements."
      })
    }), Z && n.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)"
      },
      children: n.jsxs("div", {
        style: {
          background: "rgba(15,23,42,0.97)",
          border: "1px solid rgba(239,68,68,0.35)",
          borderRadius: "1.25rem",
          width: "100%",
          maxWidth: "22rem",
          padding: "1.5rem",
          textAlign: "center"
        },
        className: "animate-fade",
        children: [n.jsx("div", {
          style: {
            background: "rgba(239,68,68,0.12)",
            width: 56,
            height: 56,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem"
          },
          children: n.jsx(nl, {
            size: 26,
            style: {
              color: "#ef4444"
            }
          })
        }), n.jsx("h3", {
          style: {
            fontSize: "1.05rem",
            fontWeight: 800,
            color: "#f1f5f9",
            marginBottom: "0.4rem"
          },
          children: "Delete Payment?"
        }), n.jsx("p", {
          style: {
            fontSize: "0.82rem",
            color: "#94a3b8",
            marginBottom: "1.5rem"
          },
          children: "This record will be permanently removed and cannot be undone."
        }), n.jsxs("div", {
          style: {
            display: "flex",
            gap: "0.75rem"
          },
          children: [n.jsx("button", {
            onClick: () => te(null),
            className: "btn btn-secondary",
            style: {
              flex: 1
            },
            children: "Cancel"
          }), n.jsx("button", {
            onClick: async () => {
              try {
                await X.payments.delete(Z), ie(), U({
                  type: "success",
                  message: "Payment record deleted."
                })
              } catch (w) {
                U({
                  type: "error",
                  message: `Delete failed: ${w.message}`
                })
              }
              te(null)
            },
            className: "btn btn-primary",
            style: {
              flex: 1,
              background: "linear-gradient(135deg,#ef4444,#dc2626)",
              boxShadow: "0 6px 16px rgba(239,68,68,0.3)"
            },
            children: "Yes, Delete"
          })]
        })]
      })
    })]
  })
}

function Ep({
  onLogin: c
}) {
  const [d, f] = Y.useState(""), [o, h] = Y.useState(""), [p, x] = Y.useState(!1), N = A => {
    if (d.length < 4) {
      const k = d + A;
      f(k), k === "1234" ? b() : k.length === 4 && (h("Invalid PIN"), setTimeout(() => {
        f(""), h("")
      }, 1e3))
    }
  }, b = () => {
    x(!0), setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true"), c()
    }, 800)
  };
  return n.jsxs("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1e3,
      background: "#020617",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    },
    className: "animate-fade",
    children: [n.jsxs("div", {
      style: {
        textAlign: "center",
        marginBottom: "3rem"
      },
      children: [n.jsx("div", {
        style: {
          width: 80,
          height: 80,
          borderRadius: "1.5rem",
          background: "linear-gradient(135deg, #6366f1, #d946ef)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1.5rem",
          boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
          transform: "perspective(500px) rotateX(15deg)"
        },
        children: n.jsx(Pm, {
          size: 40,
          color: "white"
        })
      }), n.jsx("h1", {
        style: {
          fontSize: "1.75rem",
          fontWeight: 900,
          color: "white",
          marginBottom: "0.5rem"
        },
        children: "ANSARI HOUSE"
      }), n.jsx("p", {
        style: {
          color: "#64748b",
          fontSize: "0.85rem",
          fontWeight: 600,
          letterSpacing: "0.05em"
        },
        children: "SECURE PIN ACCESS"
      })]
    }), n.jsx("div", {
      style: {
        width: "100%",
        maxWidth: "280px",
        minHeight: "320px"
      },
      children: n.jsxs("div", {
        className: "animate-fade",
        children: [n.jsx("div", {
          style: {
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2rem"
          },
          children: [0, 1, 2, 3].map(A => n.jsx("div", {
            style: {
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: d.length > A ? "#a5b4fc" : "rgba(255,255,255,0.1)",
              boxShadow: d.length > A ? "0 0 10px #6366f1" : "none",
              transition: "all 0.2s"
            }
          }, A))
        }), n.jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem"
          },
          children: [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "C"].map((A, k) => n.jsx("button", {
            onClick: () => A === "C" ? f("") : A !== "" && N(A),
            style: {
              height: 60,
              borderRadius: "1rem",
              border: "none",
              background: "rgba(255,255,255,0.03)",
              color: "white",
              fontSize: "1.25rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            className: "card-hover",
            children: A
          }, k))
        })]
      })
    }), o && n.jsxs("div", {
      style: {
        marginTop: "2rem",
        color: "#ef4444",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        fontWeight: 700
      },
      children: [n.jsx(Il, {
        size: 18
      }), " ", o]
    }), p && n.jsxs("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 1100,
        background: "#020617",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      className: "animate-fade",
      children: [n.jsx("div", {
        style: {
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "rgba(16,185,129,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#10b981",
          marginBottom: "1.5rem"
        },
        children: n.jsx(Pl, {
          size: 48
        })
      }), n.jsx("h2", {
        style: {
          fontSize: "1.5rem",
          fontWeight: 900,
          color: "white"
        },
        children: "Welcome, Ansari"
      }), n.jsx("p", {
        style: {
          color: "#64748b",
          marginTop: "0.5rem"
        },
        children: "Access Granted"
      })]
    })]
  })
}
const Rp = [{
    label: "Indigo",
    value: "#6366f1"
  }, {
    label: "Emerald",
    value: "#10b981"
  }, {
    label: "Amber",
    value: "#f59e0b"
  }, {
    label: "Rose",
    value: "#f43f5e"
  }, {
    label: "Cyan",
    value: "#06b6d4"
  }, {
    label: "Violet",
    value: "#8b5cf6"
  }, {
    label: "Orange",
    value: "#f97316"
  }, {
    label: "Teal",
    value: "#14b8a6"
  }],
  Mp = c => new Promise((d, f) => {
    const o = new FileReader;
    o.onloadend = () => d({
      data: o.result,
      name: c.name,
      type: c.type,
      size: c.size
    }), o.onerror = f, o.readAsDataURL(c)
  });

function Up(c, d) {
  const f = document.createElement("a");
  f.href = c, f.download = d, document.body.appendChild(f), f.click(), document.body.removeChild(f)
}

function Xm(c) {
  return c ? c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c/1024).toFixed(1)} KB` : `${(c/(1024*1024)).toFixed(1)} MB` : ""
}

function Vm(c) {
  return c ? new Date(c).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }) : "—"
}

function Bp() {
  const c = Zt(() => X.miscFolders.orderBy("createdAt").reverse().toArray()) || [],
    d = Zt(() => X.miscDocuments.orderBy("createdAt").reverse().toArray()) || [],
    [f, o] = Y.useState(null),
    [h, p] = Y.useState(!1),
    [x, N] = Y.useState(!1),
    [b, A] = Y.useState(null),
    [k, E] = Y.useState({
      name: "",
      color: "#6366f1"
    }),
    [B, I] = Y.useState({
      title: "",
      date: new Date().toISOString().split("T")[0],
      amount: "",
      particulars: "",
      fileData: null,
      fileName: "",
      fileType: "",
      fileSize: 0
    }),
    [G, L] = Y.useState(!1),
    [W, q] = Y.useState(""),
    V = c.find(O => O.id === f),
    ne = d.filter(O => O.folderId === f),
    se = O => {
      q(O), setTimeout(() => q(""), 2800)
    },
    Qe = async O => {
      O.preventDefault(), k.name.trim() && (await X.miscFolders.add({
        name: k.name.trim(),
        color: k.color,
        createdAt: new Date().toISOString()
      }), E({
        name: "",
        color: "#6366f1"
      }), p(!1), se("📁 Folder created!"))
    }, _e = async O => {
      await X.miscDocuments.where("folderId").equals(O).delete(), await X.miscFolders.delete(O), o(null), A(null), se("🗑️ Folder deleted.")
    }, xe = async O => {
      const J = O.target.files[0];
      if (!J) return;
      L(!0);
      const Me = await Mp(J);
      I(We => ({
        ...We,
        fileData: Me.data,
        fileName: J.name,
        fileType: J.type,
        fileSize: J.size
      })), L(!1), O.target.value = ""
    }, _ = async O => {
      O.preventDefault(), B.title.trim() && (await X.miscDocuments.add({
        folderId: f,
        title: B.title.trim(),
        date: B.date,
        amount: B.amount ? parseFloat(B.amount) : null,
        particulars: B.particulars.trim(),
        fileData: B.fileData || null,
        fileName: B.fileName || null,
        fileType: B.fileType || null,
        fileSize: B.fileSize || 0,
        createdAt: new Date().toISOString()
      }), I({
        title: "",
        date: new Date().toISOString().split("T")[0],
        amount: "",
        particulars: "",
        fileData: null,
        fileName: "",
        fileType: "",
        fileSize: 0
      }), N(!1), se("✅ Document saved!"))
    }, ae = async O => {
      await X.miscDocuments.delete(O), A(null), se("🗑️ Document deleted.")
    }, ye = O => O === "application/pdf" || (O || "").includes("pdf");
  return f ? n.jsxs("div", {
    className: "animate-fade",
    children: [n.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1.5rem"
      },
      children: [n.jsx("button", {
        className: "btn-icon btn-secondary",
        onClick: () => o(null),
        children: n.jsx(xo, {
          size: 20
        })
      }), n.jsxs("div", {
        style: {
          flex: 1
        },
        children: [n.jsxs("h2", {
          style: {
            fontWeight: 900,
            fontSize: "1.2rem",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          },
          children: [n.jsx(oo, {
            size: 20,
            style: {
              color: (V == null ? void 0 : V.color) || "#6366f1"
            }
          }), V == null ? void 0 : V.name]
        }), n.jsxs("div", {
          style: {
            fontSize: "0.7rem",
            color: "#64748b",
            fontWeight: 600
          },
          children: [ne.length, " document", ne.length !== 1 ? "s" : ""]
        })]
      }), n.jsxs("button", {
        onClick: () => A({
          type: "folder",
          id: f
        }),
        style: {
          background: "rgba(239,68,68,0.1)",
          border: "1px solid rgba(239,68,68,0.2)",
          color: "#f87171",
          borderRadius: "0.75rem",
          padding: "0.4rem 0.7rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 4,
          fontSize: "0.72rem",
          fontWeight: 700
        },
        children: [n.jsx(nl, {
          size: 13
        }), " Delete Folder"]
      })]
    }), W && n.jsx("div", {
      style: {
        marginBottom: "1rem",
        padding: "0.75rem 1rem",
        background: "rgba(16,185,129,0.12)",
        border: "1px solid rgba(16,185,129,0.3)",
        borderRadius: "0.85rem",
        color: "#10b981",
        fontWeight: 700,
        fontSize: "0.85rem"
      },
      children: W
    }), n.jsxs("button", {
      onClick: () => N(!0),
      className: "btn btn-primary w-full",
      style: {
        marginBottom: "1.25rem",
        gap: "0.5rem"
      },
      children: [n.jsx(Qg, {
        size: 16
      }), " Add Document"]
    }), ne.length === 0 ? n.jsxs("div", {
      style: {
        background: "rgba(255,255,255,0.02)",
        border: "1px dashed rgba(255,255,255,0.1)",
        borderRadius: "1.25rem",
        padding: "3rem 1rem",
        textAlign: "center"
      },
      children: [n.jsx(Ft, {
        size: 36,
        style: {
          color: "#334155",
          marginBottom: "0.75rem"
        }
      }), n.jsx("p", {
        style: {
          color: "#475569",
          fontWeight: 600
        },
        children: "No documents yet."
      }), n.jsx("p", {
        style: {
          color: "#334155",
          fontSize: "0.8rem"
        },
        children: 'Tap "Add Document" to upload your first file.'
      })]
    }) : n.jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem"
      },
      children: ne.map(O => n.jsxs("div", {
        style: {
          background: "rgba(15,23,42,0.6)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "1.1rem",
          padding: "1rem",
          transition: "all 0.2s"
        },
        children: [n.jsxs("div", {
          style: {
            display: "flex",
            gap: "0.85rem",
            alignItems: "flex-start"
          },
          children: [n.jsx("div", {
            style: {
              width: 48,
              height: 48,
              borderRadius: "0.85rem",
              background: ye(O.fileType) ? "rgba(239,68,68,0.12)" : "rgba(99,102,241,0.12)",
              border: `1px solid ${ye(O.fileType)?"rgba(239,68,68,0.2)":"rgba(99,102,241,0.2)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              overflow: "hidden"
            },
            children: O.fileData && !ye(O.fileType) ? n.jsx("img", {
              src: O.fileData,
              alt: "",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            }) : ye(O.fileType) ? n.jsx(Ft, {
              size: 22,
              style: {
                color: "#f87171"
              }
            }) : n.jsx(Am, {
              size: 22,
              style: {
                color: "#818cf8"
              }
            })
          }), n.jsxs("div", {
            style: {
              flex: 1,
              minWidth: 0
            },
            children: [n.jsx("div", {
              style: {
                fontWeight: 800,
                fontSize: "0.95rem",
                color: "#f1f5f9",
                marginBottom: "0.2rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: O.title
            }), n.jsxs("div", {
              style: {
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginBottom: "0.3rem"
              },
              children: [n.jsxs("span", {
                style: {
                  fontSize: "0.7rem",
                  color: "#64748b",
                  display: "flex",
                  alignItems: "center",
                  gap: 3
                },
                children: [n.jsx(Vt, {
                  size: 10
                }), " ", Vm(O.date)]
              }), O.amount && n.jsxs("span", {
                style: {
                  fontSize: "0.7rem",
                  color: "#10b981",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 3
                },
                children: [n.jsx(al, {
                  size: 10
                }), " ₹", parseFloat(O.amount).toLocaleString("en-IN")]
              }), O.fileName && n.jsxs("span", {
                style: {
                  fontSize: "0.65rem",
                  color: "#475569",
                  display: "flex",
                  alignItems: "center",
                  gap: 3
                },
                children: [n.jsx(Am, {
                  size: 10
                }), " ", Xm(O.fileSize)]
              })]
            }), O.particulars && n.jsx("p", {
              style: {
                fontSize: "0.75rem",
                color: "#94a3b8",
                margin: 0,
                lineHeight: 1.4,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical"
              },
              children: O.particulars
            })]
          })]
        }), n.jsxs("div", {
          style: {
            display: "flex",
            gap: "0.5rem",
            marginTop: "0.85rem",
            paddingTop: "0.75rem",
            borderTop: "1px solid rgba(255,255,255,0.05)"
          },
          children: [O.fileData && n.jsxs("button", {
            onClick: () => Up(O.fileData, O.fileName || `${O.title}.file`),
            style: {
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              background: "rgba(16,185,129,0.12)",
              border: "1px solid rgba(16,185,129,0.2)",
              color: "#34d399",
              borderRadius: "0.7rem",
              padding: "0.5rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
              touchAction: "manipulation"
            },
            children: [n.jsx(Wt, {
              size: 13
            }), " Download"]
          }), n.jsxs("button", {
            onClick: () => A({
              type: "doc",
              id: O.id
            }),
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.15)",
              color: "#f87171",
              borderRadius: "0.7rem",
              padding: "0.5rem 0.85rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              cursor: "pointer",
              touchAction: "manipulation"
            },
            children: [n.jsx(nl, {
              size: 13
            }), " Delete"]
          })]
        })]
      }, O.id))
    }), x && n.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)"
      },
      children: n.jsxs("div", {
        style: {
          background: "rgba(15,23,42,0.98)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "1.5rem 1.5rem 0 0",
          width: "100%",
          maxWidth: "500px",
          padding: "1.5rem",
          maxHeight: "90vh",
          overflowY: "auto"
        },
        className: "animate-fade",
        children: [n.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.25rem"
          },
          children: [n.jsx("h3", {
            style: {
              margin: 0,
              fontWeight: 900,
              fontSize: "1.1rem"
            },
            children: "Add Document"
          }), n.jsx("button", {
            onClick: () => N(!1),
            style: {
              background: "none",
              border: "none",
              color: "#64748b",
              cursor: "pointer"
            },
            children: n.jsx(St, {
              size: 22
            })
          })]
        }), n.jsxs("form", {
          onSubmit: _,
          children: [n.jsxs("div", {
            className: "input-group",
            children: [n.jsx("label", {
              className: "form-label",
              children: "Document Title *"
            }), n.jsx("input", {
              className: "input",
              required: !0,
              value: B.title,
              onChange: O => I(J => ({
                ...J,
                title: O.target.value
              })),
              placeholder: "e.g. Electricity Bill March"
            })]
          }), n.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem"
            },
            children: [n.jsxs("div", {
              className: "input-group",
              children: [n.jsx("label", {
                className: "form-label",
                children: "Date"
              }), n.jsx("input", {
                type: "date",
                className: "input",
                value: B.date,
                onChange: O => I(J => ({
                  ...J,
                  date: O.target.value
                }))
              })]
            }), n.jsxs("div", {
              className: "input-group",
              children: [n.jsx("label", {
                className: "form-label",
                children: "Amount (₹)"
              }), n.jsx("input", {
                type: "number",
                className: "input",
                value: B.amount,
                onChange: O => I(J => ({
                  ...J,
                  amount: O.target.value
                })),
                placeholder: "Optional"
              })]
            })]
          }), n.jsxs("div", {
            className: "input-group",
            children: [n.jsx("label", {
              className: "form-label",
              children: "Particulars / Notes"
            }), n.jsx("textarea", {
              className: "textarea",
              value: B.particulars,
              onChange: O => I(J => ({
                ...J,
                particulars: O.target.value
              })),
              placeholder: "Add any details, description or notes...",
              style: {
                minHeight: 72
              }
            })]
          }), n.jsxs("div", {
            className: "input-group",
            children: [n.jsx("label", {
              className: "form-label",
              children: "Attach File (Image or PDF)"
            }), B.fileData ? n.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem",
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: "0.85rem"
              },
              children: [ye(B.fileType) ? n.jsx("div", {
                style: {
                  width: 44,
                  height: 44,
                  background: "rgba(239,68,68,0.1)",
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: n.jsx(Ft, {
                  size: 20,
                  style: {
                    color: "#f87171"
                  }
                })
              }) : n.jsx("img", {
                src: B.fileData,
                alt: "",
                style: {
                  width: 44,
                  height: 44,
                  objectFit: "cover",
                  borderRadius: "0.5rem"
                }
              }), n.jsxs("div", {
                style: {
                  flex: 1,
                  minWidth: 0
                },
                children: [n.jsx("div", {
                  style: {
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "#f1f5f9",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  },
                  children: B.fileName
                }), n.jsx("div", {
                  style: {
                    fontSize: "0.65rem",
                    color: "#64748b"
                  },
                  children: Xm(B.fileSize)
                })]
              }), n.jsx("button", {
                type: "button",
                onClick: () => I(O => ({
                  ...O,
                  fileData: null,
                  fileName: "",
                  fileType: "",
                  fileSize: 0
                })),
                style: {
                  background: "none",
                  border: "none",
                  color: "#64748b",
                  cursor: "pointer"
                },
                children: n.jsx(St, {
                  size: 16
                })
              })]
            }) : n.jsxs("label", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.85rem",
                background: "rgba(99,102,241,0.06)",
                border: "1px dashed rgba(99,102,241,0.3)",
                borderRadius: "0.85rem",
                cursor: "pointer",
                color: "#818cf8",
                fontWeight: 700,
                fontSize: "0.82rem",
                touchAction: "manipulation"
              },
              children: [G ? "Processing..." : n.jsxs(n.Fragment, {
                children: [n.jsx(vn, {
                  size: 16
                }), " Choose Image or PDF"]
              }), n.jsx("input", {
                type: "file",
                accept: "image/*,.pdf",
                style: {
                  display: "none"
                },
                onChange: xe
              })]
            })]
          }), n.jsxs("div", {
            style: {
              display: "flex",
              gap: "0.75rem",
              marginTop: "1.25rem"
            },
            children: [n.jsx("button", {
              type: "button",
              onClick: () => N(!1),
              className: "btn btn-secondary",
              style: {
                flex: 1
              },
              children: "Cancel"
            }), n.jsx("button", {
              type: "submit",
              className: "btn btn-primary",
              style: {
                flex: 1
              },
              children: "Save Document"
            })]
          })]
        })]
      })
    }), b && n.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)"
      },
      children: n.jsxs("div", {
        style: {
          background: "rgba(15,23,42,0.97)",
          border: "1px solid rgba(239,68,68,0.35)",
          borderRadius: "1.25rem",
          width: "100%",
          maxWidth: "22rem",
          padding: "1.5rem",
          textAlign: "center"
        },
        className: "animate-fade",
        children: [n.jsx("div", {
          style: {
            background: "rgba(239,68,68,0.12)",
            width: 56,
            height: 56,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1rem"
          },
          children: n.jsx(Il, {
            size: 28,
            style: {
              color: "#ef4444"
            }
          })
        }), n.jsx("h3", {
          style: {
            fontSize: "1.05rem",
            fontWeight: 800,
            color: "#f1f5f9",
            marginBottom: "0.4rem"
          },
          children: b.type === "folder" ? "Delete Folder?" : "Delete Document?"
        }), n.jsx("p", {
          style: {
            fontSize: "0.82rem",
            color: "#94a3b8",
            marginBottom: "1.5rem"
          },
          children: b.type === "folder" ? "This will permanently delete the folder and ALL documents inside it." : "This document will be permanently removed."
        }), n.jsxs("div", {
          style: {
            display: "flex",
            gap: "0.75rem"
          },
          children: [n.jsx("button", {
            onClick: () => A(null),
            className: "btn btn-secondary",
            style: {
              flex: 1
            },
            children: "Cancel"
          }), n.jsx("button", {
            onClick: () => b.type === "folder" ? _e(b.id) : ae(b.id),
            className: "btn btn-primary",
            style: {
              flex: 1,
              background: "linear-gradient(135deg,#ef4444,#dc2626)",
              boxShadow: "0 6px 16px rgba(239,68,68,0.3)"
            },
            children: "Delete"
          })]
        })]
      })
    })]
  }) : n.jsxs("div", {
    className: "animate-fade",
    children: [n.jsxs("div", {
      style: {
        marginBottom: "1.25rem"
      },
      children: [n.jsx("h1", {
        className: "text-gradient",
        style: {
          fontSize: "1.75rem",
          fontWeight: 900
        },
        children: "MISC Documents"
      }), n.jsx("p", {
        style: {
          color: "#64748b",
          fontSize: "0.85rem"
        },
        children: "Custom folders for your important files"
      })]
    }), W && n.jsx("div", {
      style: {
        marginBottom: "1rem",
        padding: "0.75rem 1rem",
        background: "rgba(16,185,129,0.12)",
        border: "1px solid rgba(16,185,129,0.3)",
        borderRadius: "0.85rem",
        color: "#10b981",
        fontWeight: 700,
        fontSize: "0.85rem",
        animation: "fadeIn 0.25s ease-out"
      },
      children: W
    }), n.jsxs("button", {
      onClick: () => p(!0),
      className: "btn btn-primary w-full",
      style: {
        marginBottom: "1.5rem",
        padding: "0.85rem",
        gap: "0.5rem"
      },
      children: [n.jsx(Gg, {
        size: 18
      }), " Create New Folder"]
    }), c.length === 0 ? n.jsxs("div", {
      style: {
        background: "rgba(255,255,255,0.02)",
        border: "1px dashed rgba(255,255,255,0.1)",
        borderRadius: "1.25rem",
        padding: "3rem 1rem",
        textAlign: "center"
      },
      children: [n.jsx(oo, {
        size: 40,
        style: {
          color: "#334155",
          marginBottom: "0.75rem"
        }
      }), n.jsx("p", {
        style: {
          color: "#475569",
          fontWeight: 600
        },
        children: "No folders yet."
      }), n.jsx("p", {
        style: {
          color: "#334155",
          fontSize: "0.8rem"
        },
        children: "Create your first folder to organize documents."
      })]
    }) : n.jsx("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0.85rem"
      },
      children: c.map(O => {
        const J = d.filter(Me => Me.folderId === O.id).length;
        return n.jsxs("div", {
          onClick: () => o(O.id),
          style: {
            background: "rgba(15,23,42,0.6)",
            border: `1px solid ${O.color}30`,
            borderRadius: "1.25rem",
            padding: "1.1rem",
            cursor: "pointer",
            transition: "all 0.2s",
            position: "relative",
            overflow: "hidden"
          },
          className: "card-hover",
          children: [n.jsx("div", {
            style: {
              position: "absolute",
              top: 0,
              right: 0,
              width: 60,
              height: 60,
              borderRadius: "0 1.25rem 0 60px",
              background: `${O.color}18`
            }
          }), n.jsx("div", {
            style: {
              width: 44,
              height: 44,
              borderRadius: "0.85rem",
              background: `${O.color}20`,
              border: `1px solid ${O.color}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.75rem"
            },
            children: n.jsx(oo, {
              size: 22,
              style: {
                color: O.color
              }
            })
          }), n.jsx("div", {
            style: {
              fontWeight: 800,
              fontSize: "0.9rem",
              color: "#f1f5f9",
              marginBottom: "0.2rem",
              wordBreak: "break-word"
            },
            children: O.name
          }), n.jsxs("div", {
            style: {
              fontSize: "0.68rem",
              color: "#64748b",
              fontWeight: 600
            },
            children: [J, " document", J !== 1 ? "s" : ""]
          }), n.jsx("div", {
            style: {
              fontSize: "0.62rem",
              color: "#334155",
              marginTop: "0.25rem"
            },
            children: Vm(O.createdAt)
          })]
        }, O.id)
      })
    }), h && n.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)"
      },
      children: n.jsxs("div", {
        style: {
          background: "rgba(15,23,42,0.97)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "1.5rem",
          width: "100%",
          maxWidth: "22rem",
          padding: "1.5rem"
        },
        className: "animate-fade",
        children: [n.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.25rem"
          },
          children: [n.jsx("h3", {
            style: {
              margin: 0,
              fontWeight: 900,
              fontSize: "1.1rem"
            },
            children: "New Folder"
          }), n.jsx("button", {
            onClick: () => p(!1),
            style: {
              background: "none",
              border: "none",
              color: "#64748b",
              cursor: "pointer"
            },
            children: n.jsx(St, {
              size: 22
            })
          })]
        }), n.jsxs("form", {
          onSubmit: Qe,
          children: [n.jsxs("div", {
            className: "input-group",
            children: [n.jsx("label", {
              className: "form-label",
              children: "Folder Name"
            }), n.jsx("input", {
              className: "input",
              required: !0,
              value: k.name,
              onChange: O => E(J => ({
                ...J,
                name: O.target.value
              })),
              placeholder: "e.g. Tax Documents, Legal Papers..."
            })]
          }), n.jsxs("div", {
            className: "input-group",
            children: [n.jsx("label", {
              className: "form-label",
              children: "Folder Color"
            }), n.jsx("div", {
              style: {
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                paddingTop: "0.25rem"
              },
              children: Rp.map(O => n.jsx("button", {
                type: "button",
                onClick: () => E(J => ({
                  ...J,
                  color: O.value
                })),
                style: {
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: O.value,
                  border: k.color === O.value ? "3px solid white" : "3px solid transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: k.color === O.value && n.jsx(Yg, {
                  size: 14,
                  style: {
                    color: "white"
                  }
                })
              }, O.value))
            })]
          }), n.jsxs("div", {
            style: {
              display: "flex",
              gap: "0.75rem",
              marginTop: "1.25rem"
            },
            children: [n.jsx("button", {
              type: "button",
              onClick: () => p(!1),
              className: "btn btn-secondary",
              style: {
                flex: 1
              },
              children: "Cancel"
            }), n.jsx("button", {
              type: "submit",
              className: "btn btn-primary",
              style: {
                flex: 1
              },
              children: "Create"
            })]
          })]
        })]
      })
    })]
  })
}
var Wm;
(function(c) {
  c[c.Sunday = 1] = "Sunday", c[c.Monday = 2] = "Monday", c[c.Tuesday = 3] = "Tuesday", c[c.Wednesday = 4] = "Wednesday", c[c.Thursday = 5] = "Thursday", c[c.Friday = 6] = "Friday", c[c.Saturday = 7] = "Saturday"
})(Wm || (Wm = {}));
const Xs = Di("LocalNotifications", {
    web: () => Si(() => import("./web-B8Bp-frk.js"), __vite__mapDeps([5, 1, 2, 3])).then(c => new c.LocalNotificationsWeb)
  }),
  Zm = {
    async init() {
      try {
        (await Xs.checkPermissions()).display !== "granted" && await Xs.requestPermissions()
      } catch (c) {
        console.error("Local notifications not available on this platform", c)
      }
    },
    async scheduleAlerts() {
      try {
        const c = localStorage.getItem("sound_enabled") !== "false",
          d = await X.tenants.toArray(),
          f = await X.liftBills.toArray(),
          o = await X.waterBills.toArray(),
          h = d.filter(A => {
            if (!A.leaseEnd) return !1;
            const k = (new Date(A.leaseEnd) - new Date) / 864e5;
            return k <= 30 && k >= 0
          }),
          p = f.filter(A => A.status === "Pending" && A.dueDate && new Date(A.dueDate) < new Date),
          x = o.filter(A => A.status === "Pending" && A.dueDate && new Date(A.dueDate) < new Date);
        let N = [],
          b = 1;
        h.forEach(A => {
          N.push({
            id: b++,
            title: "Lease Expiring Soon",
            body: `Tenant ${A.name} (Unit ${A.unitId}) lease ends on ${A.leaseEnd}.`,
            sound: c ? "default" : null,
            schedule: {
              at: new Date(Date.now() + 1e3 * 60)
            }
          })
        }), p.forEach(A => {
          N.push({
            id: b++,
            title: "Overdue Lift Bill",
            body: `A lift bill of ₹${A.amount} is overdue since ${A.dueDate}.`,
            sound: c ? "default" : null,
            schedule: {
              at: new Date(Date.now() + 1e3 * 60 * 2)
            }
          })
        }), x.forEach(A => {
          N.push({
            id: b++,
            title: "Overdue Water Bill",
            body: `A water bill of ₹${A.amount} is overdue since ${A.dueDate}.`,
            sound: c ? "default" : null,
            schedule: {
              at: new Date(Date.now() + 1e3 * 60 * 3)
            }
          })
        }), N.length > 0 && (await Xs.cancel({
          notifications: N.map(A => ({
            id: A.id
          }))
        }).catch(() => {}), await Xs.schedule({
          notifications: N
        }))
      } catch (c) {
        console.error("Failed to schedule notifications", c)
      }
    }
  };

function Op() {
  const [c, d] = Y.useState(() => localStorage.getItem("lock_screen_enabled") === "true" ? localStorage.getItem("isAuthenticated") === "true" : !0), [f, o] = Y.useState(!1), [h, p] = Y.useState(null);
  Y.useEffect(() => {
    c && Zm.init().then(() => {
      Zm.scheduleAlerts()
    })
  }, [c]), Y.useEffect(() => {
    "serviceWorker" in navigator && navigator.serviceWorker.register("./sw.js").then(N => {
      p(N), N.addEventListener("updatefound", () => {
        const b = N.installing;
        b && b.addEventListener("statechange", () => {
          b.state === "installed" && navigator.serviceWorker.controller && o(!0)
        })
      })
    }).catch(() => {})
  }, []);
  const x = () => {
    h && h.waiting && h.waiting.postMessage({
      type: "SKIP_WAITING"
    }), window.location.reload()
  };
  return c ? n.jsx(vg, {
    basename: window.location.pathname.startsWith("/ansari-house-pwa") ? "/ansari-house-pwa" : "/",
    children: n.jsxs("div", {
      className: "flex flex-col min-h-screen",
      children: [f && n.jsxs("div", {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          padding: "0.6rem 1rem",
          background: "linear-gradient(135deg, #6366f1, #d946ef)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          boxShadow: "0 2px 12px rgba(99,102,241,0.4)"
        },
        children: [n.jsx("span", {
          style: {
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "white"
          },
          children: "🚀 New version available!"
        }), n.jsxs("button", {
          onClick: x,
          style: {
            display: "flex",
            alignItems: "center",
            gap: 4,
            background: "rgba(255,255,255,0.2)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "white",
            borderRadius: "0.5rem",
            padding: "0.3rem 0.7rem",
            fontSize: "0.75rem",
            fontWeight: 800,
            cursor: "pointer",
            touchAction: "manipulation"
          },
          children: [n.jsx(Xg, {
            size: 12
          }), " Update Now"]
        })]
      }), n.jsxs("header", {
        className: "header flex justify-between items-center",
        style: {
          paddingTop: f ? "3rem" : void 0
        },
        children: [n.jsxs("div", {
          className: "flex items-center gap-2",
          children: [n.jsx("div", {
            style: {
              width: 38,
              height: 38,
              borderRadius: "0.75rem",
              overflow: "hidden",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(99,102,241,0.4)"
            },
            children: n.jsx("img", {
              src: "./ansari_house_icon.png",
              alt: "Ansari House",
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }
            })
          }), n.jsxs("div", {
            children: [n.jsx("h1", {
              className: "text-xl font-bold text-gradient",
              style: {
                lineHeight: 1
              },
              children: "ANSARI HOUSE"
            }), n.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 4,
                marginTop: 2
              },
              children: [n.jsx("div", {
                className: "status-indicator online"
              }), n.jsx("span", {
                style: {
                  fontSize: "0.6rem",
                  fontWeight: 800,
                  color: "#64748b",
                  textTransform: "uppercase"
                },
                children: "Offline-First Ready"
              })]
            })]
          })]
        }), n.jsx("button", {
          onClick: () => {
            localStorage.removeItem("isAuthenticated"), window.location.reload()
          },
          style: {
            background: "rgba(239,68,68,0.1)",
            border: "none",
            color: "#f87171",
            fontSize: "0.65rem",
            fontWeight: 800,
            padding: "4px 10px",
            borderRadius: "8px",
            cursor: "pointer",
            touchAction: "manipulation"
          },
          children: "LOGOUT"
        })]
      }), n.jsx("main", {
        className: "content-area",
        children: n.jsxs(jg, {
          children: [n.jsx(zl, {
            path: "/",
            element: n.jsx(pp, {})
          }), n.jsx(zl, {
            path: "/tenants",
            element: n.jsx(yp, {})
          }), n.jsx(zl, {
            path: "/tenant/:unitId",
            element: n.jsx(xp, {})
          }), n.jsx(zl, {
            path: "/reminders",
            element: n.jsx(vp, {})
          }), n.jsx(zl, {
            path: "/lift",
            element: n.jsx(Qm, {
              type: "lift"
            })
          }), n.jsx(zl, {
            path: "/water",
            element: n.jsx(Qm, {
              type: "water"
            })
          }), n.jsx(zl, {
            path: "/financials",
            element: n.jsx(Tp, {})
          }), n.jsx(zl, {
            path: "/misc",
            element: n.jsx(Bp, {})
          }), n.jsx(zl, {
            path: "/settings",
            element: n.jsx(Sp, {})
          })]
        })
      }), n.jsxs("nav", {
        className: "bottom-nav",
        children: [n.jsxs(gn, {
          to: "/",
          end: !0,
          className: ({
            isActive: N
          }) => `nav-item ${N?"active":""}`,
          children: [n.jsx(Vg, {
            size: 20
          }), n.jsx("span", {
            children: "HOME"
          })]
        }), n.jsxs(gn, {
          to: "/tenants",
          className: ({
            isActive: N
          }) => `nav-item ${N?"active":""}`,
          children: [n.jsx(Wg, {
            size: 20
          }), n.jsx("span", {
            children: "TENANTS"
          })]
        }), n.jsxs(gn, {
          to: "/lift",
          className: ({
            isActive: N
          }) => `nav-item ${N?"active lift-nav":"lift-nav"}`,
          children: [n.jsx(Da, {
            size: 20
          }), n.jsx("span", {
            children: "LIFT"
          })]
        }), n.jsxs(gn, {
          to: "/water",
          className: ({
            isActive: N
          }) => `nav-item ${N?"active water-nav":"water-nav"}`,
          children: [n.jsx(vi, {
            size: 20
          }), n.jsx("span", {
            children: "WATER"
          })]
        }), n.jsxs(gn, {
          to: "/misc",
          className: ({
            isActive: N
          }) => `nav-item ${N?"active":""}`,
          children: [n.jsx(e0, {
            size: 20
          }), n.jsx("span", {
            children: "MISC"
          })]
        }), n.jsxs(gn, {
          to: "/settings",
          className: ({
            isActive: N
          }) => `nav-item ${N?"active":""}`,
          children: [n.jsx(Zg, {
            size: 20
          }), n.jsx("span", {
            children: "MORE"
          })]
        })]
      })]
    })
  }) : n.jsx(Ep, {
    onLogin: () => d(!0)
  })
}
ep.createRoot(document.getElementById("root")).render(n.jsx(Y.StrictMode, {
  children: n.jsx(Op, {})
}));
export {
  Js as W, Si as _, up as b, Di as r
};
