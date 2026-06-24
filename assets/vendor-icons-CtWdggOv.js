import {
  r as n
} from "./vendor-react-Co1__6Wa.js";
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p = (...t) => t.filter((a, o, c) => !!a && a.trim() !== "" && c.indexOf(a) === o).join(" ").trim();
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $ = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N = t => t.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, o, c) => c ? c.toUpperCase() : o.toLowerCase());
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i = t => {
  const a = N(t);
  return a.charAt(0).toUpperCase() + a.slice(1)
};
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var d = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w = t => {
    for (const a in t)
      if (a.startsWith("aria-") || a === "role" || a === "title") return !0;
    return !1
  },
  f = n.createContext({}),
  C = () => n.useContext(f),
  z = n.forwardRef(({
    color: t,
    size: a,
    strokeWidth: o,
    absoluteStrokeWidth: c,
    className: h = "",
    children: s,
    iconNode: l,
    ...r
  }, _) => {
    const {
      size: y = 24,
      strokeWidth: k = 2,
      absoluteStrokeWidth: M = !1,
      color: x = "currentColor",
      className: v = ""
    } = C() ?? {}, u = c ?? M ? Number(o ?? k) * 24 / Number(a ?? y) : o ?? k;
    return n.createElement("svg", {
      ref: _,
      ...d,
      width: a ?? y ?? d.width,
      height: a ?? y ?? d.height,
      stroke: t ?? x,
      strokeWidth: u,
      className: p("lucide", v, h),
      ...!s && !w(r) && {
        "aria-hidden": "true"
      },
      ...r
    }, [...l.map(([m, g]) => n.createElement(m, g)), ...Array.isArray(s) ? s : [s]])
  });
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e = (t, a) => {
  const o = n.forwardRef(({
    className: c,
    ...h
  }, s) => n.createElement(z, {
    ref: s,
    iconNode: a,
    className: p(`lucide-${$(i(t))}`, `lucide-${t}`, c),
    ...h
  }));
  return o.displayName = i(t), o
};
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A = [
    ["path", {
      d: "M17 7 7 17",
      key: "15tmo1"
    }],
    ["path", {
      d: "M17 17H7V7",
      key: "1org7z"
    }]
  ],
  Z1 = e("arrow-down-left", A);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b = [
    ["path", {
      d: "m12 19-7-7 7-7",
      key: "1l729n"
    }],
    ["path", {
      d: "M19 12H5",
      key: "x3x0zl"
    }]
  ],
  I1 = e("arrow-left", b);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H = [
    ["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }],
    ["path", {
      d: "m12 5 7 7-7 7",
      key: "xquz4c"
    }]
  ],
  W1 = e("arrow-right", H);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j = [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "4",
      key: "4exip2"
    }],
    ["path", {
      d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",
      key: "7n84p3"
    }]
  ],
  E1 = e("at-sign", j);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q = [
    ["path", {
      d: "M10.268 21a2 2 0 0 0 3.464 0",
      key: "vwvbt9"
    }],
    ["path", {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }]
  ],
  B1 = e("bell", q);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L = [
    ["path", {
      d: "M12 10h.01",
      key: "1nrarc"
    }],
    ["path", {
      d: "M12 14h.01",
      key: "1etili"
    }],
    ["path", {
      d: "M12 6h.01",
      key: "1vi96p"
    }],
    ["path", {
      d: "M16 10h.01",
      key: "1m94wz"
    }],
    ["path", {
      d: "M16 14h.01",
      key: "1gbofw"
    }],
    ["path", {
      d: "M16 6h.01",
      key: "1x0f13"
    }],
    ["path", {
      d: "M8 10h.01",
      key: "19clt8"
    }],
    ["path", {
      d: "M8 14h.01",
      key: "6423bh"
    }],
    ["path", {
      d: "M8 6h.01",
      key: "1dz90k"
    }],
    ["path", {
      d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",
      key: "cabbwy"
    }],
    ["rect", {
      x: "4",
      y: "2",
      width: "16",
      height: "20",
      rx: "2",
      key: "1uxh74"
    }]
  ],
  D1 = e("building", L);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V = [
    ["path", {
      d: "M8 2v4",
      key: "1cmpym"
    }],
    ["path", {
      d: "M16 2v4",
      key: "4m81vk"
    }],
    ["rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      key: "1hopcy"
    }],
    ["path", {
      d: "M3 10h18",
      key: "8toen8"
    }]
  ],
  T1 = e("calendar", V);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S = [
    ["path", {
      d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
      key: "18u6gg"
    }],
    ["circle", {
      cx: "12",
      cy: "13",
      r: "3",
      key: "1vg3eu"
    }]
  ],
  O1 = e("camera", S);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P = [
    ["path", {
      d: "M20 6 9 17l-5-5",
      key: "1gmf2c"
    }]
  ],
  K1 = e("check", P);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = [
    ["path", {
      d: "m6 9 6 6 6-6",
      key: "qrunsl"
    }]
  ],
  G1 = e("chevron-down", U);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F = [
    ["path", {
      d: "m15 18-6-6 6-6",
      key: "1wnfg3"
    }]
  ],
  J1 = e("chevron-left", F);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R = [
    ["path", {
      d: "m9 18 6-6-6-6",
      key: "mthhwq"
    }]
  ],
  Q1 = e("chevron-right", R);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z = [
    ["path", {
      d: "m18 15-6-6-6 6",
      key: "153udz"
    }]
  ],
  X1 = e("chevron-up", Z);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I = [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["line", {
      x1: "12",
      x2: "12",
      y1: "8",
      y2: "12",
      key: "1pkeuh"
    }],
    ["line", {
      x1: "12",
      x2: "12.01",
      y1: "16",
      y2: "16",
      key: "4dfq90"
    }]
  ],
  Y1 = e("circle-alert", I);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W = [
    ["path", {
      d: "M21.801 10A10 10 0 1 1 17 3.335",
      key: "yps3ct"
    }],
    ["path", {
      d: "m9 11 3 3L22 4",
      key: "1pflzl"
    }]
  ],
  e2 = e("circle-check-big", W);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E = [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["path", {
      d: "M8 12h8",
      key: "1wcyev"
    }],
    ["path", {
      d: "M12 8v8",
      key: "napkw2"
    }]
  ],
  a2 = e("circle-plus", E);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B = [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["path", {
      d: "M12 6v6l4 2",
      key: "mmk7yg"
    }]
  ],
  t2 = e("clock", B);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D = [
    ["path", {
      d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
      key: "p7xjir"
    }]
  ],
  o2 = e("cloud", D);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T = [
    ["rect", {
      width: "20",
      height: "14",
      x: "2",
      y: "5",
      rx: "2",
      key: "ynyp8z"
    }],
    ["line", {
      x1: "2",
      x2: "22",
      y1: "10",
      y2: "10",
      key: "1b3vmo"
    }]
  ],
  c2 = e("credit-card", T);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O = [
    ["path", {
      d: "M12 15V3",
      key: "m9g1x1"
    }],
    ["path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
      key: "ih7n3h"
    }],
    ["path", {
      d: "m7 10 5 5 5-5",
      key: "brsn70"
    }]
  ],
  n2 = e("download", O);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K = [
    ["path", {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }],
    ["path", {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }]
  ],
  s2 = e("droplets", K);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G = [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "1",
      key: "41hilf"
    }],
    ["circle", {
      cx: "19",
      cy: "12",
      r: "1",
      key: "1wjl8i"
    }],
    ["circle", {
      cx: "5",
      cy: "12",
      r: "1",
      key: "1pcz8c"
    }]
  ],
  h2 = e("ellipsis", G);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J = [
    ["path", {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }],
    ["circle", {
      cx: "12",
      cy: "12",
      r: "3",
      key: "1v7zrd"
    }]
  ],
  y2 = e("eye", J);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q = [
    ["path", {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }],
    ["path", {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz"
    }],
    ["path", {
      d: "m9 15 2 2 4-4",
      key: "1grp1n"
    }]
  ],
  d2 = e("file-check", Q);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = [
    ["path", {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }],
    ["path", {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz"
    }],
    ["path", {
      d: "M8 13h2",
      key: "yr2amv"
    }],
    ["path", {
      d: "M14 13h2",
      key: "un5t4a"
    }],
    ["path", {
      d: "M8 17h2",
      key: "2yhykz"
    }],
    ["path", {
      d: "M14 17h2",
      key: "10kma7"
    }]
  ],
  r2 = e("file-spreadsheet", X);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y = [
    ["path", {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }],
    ["path", {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz"
    }],
    ["path", {
      d: "M10 9H8",
      key: "b1mrlr"
    }],
    ["path", {
      d: "M16 13H8",
      key: "t4e002"
    }],
    ["path", {
      d: "M16 17H8",
      key: "z1uh3a"
    }]
  ],
  k2 = e("file-text", Y);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e1 = [
    ["path", {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }],
    ["path", {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz"
    }]
  ],
  i2 = e("file", e1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a1 = [
    ["path", {
      d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
      key: "1nerag"
    }],
    ["path", {
      d: "M14 13.12c0 2.38 0 6.38-1 8.88",
      key: "o46ks0"
    }],
    ["path", {
      d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
      key: "ptglia"
    }],
    ["path", {
      d: "M2 12a10 10 0 0 1 18-6",
      key: "ydlgp0"
    }],
    ["path", {
      d: "M2 16h.01",
      key: "1gqxmh"
    }],
    ["path", {
      d: "M21.8 16c.2-2 .131-5.354 0-6",
      key: "drycrb"
    }],
    ["path", {
      d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
      key: "1tidbn"
    }],
    ["path", {
      d: "M8.65 22c.21-.66.45-1.32.57-2",
      key: "13wd9y"
    }],
    ["path", {
      d: "M9 6.8a6 6 0 0 1 9 5.2v2",
      key: "1fr1j5"
    }]
  ],
  p2 = e("fingerprint-pattern", a1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t1 = [
    ["path", {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }]
  ],
  l2 = e("folder-open", t1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o1 = [
    ["path", {
      d: "M12 10v6",
      key: "1bos4e"
    }],
    ["path", {
      d: "M9 13h6",
      key: "1uhe8q"
    }],
    ["path", {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }]
  ],
  _2 = e("folder-plus", o1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = [
    ["path", {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }]
  ],
  M2 = e("folder", c1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n1 = [
    ["line", {
      x1: "4",
      x2: "20",
      y1: "9",
      y2: "9",
      key: "4lhtct"
    }],
    ["line", {
      x1: "4",
      x2: "20",
      y1: "15",
      y2: "15",
      key: "vyu0kd"
    }],
    ["line", {
      x1: "10",
      x2: "8",
      y1: "3",
      y2: "21",
      key: "1ggp8o"
    }],
    ["line", {
      x1: "16",
      x2: "14",
      y1: "3",
      y2: "21",
      key: "weycgp"
    }]
  ],
  x2 = e("hash", n1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = [
    ["path", {
      d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
      key: "1357e3"
    }],
    ["path", {
      d: "M3 3v5h5",
      key: "1xhq8a"
    }],
    ["path", {
      d: "M12 7v5l4 2",
      key: "1fdv2h"
    }]
  ],
  v2 = e("history", s1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = [
    ["path", {
      d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
      key: "5wwlr5"
    }],
    ["path", {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }]
  ],
  u2 = e("house", h1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = [
    ["rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }],
    ["circle", {
      cx: "9",
      cy: "9",
      r: "2",
      key: "af1f0g"
    }],
    ["path", {
      d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
      key: "1xmnt7"
    }]
  ],
  m2 = e("image", y1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = [
    ["path", {
      d: "M6 3h12",
      key: "ggurg9"
    }],
    ["path", {
      d: "M6 8h12",
      key: "6g4wlu"
    }],
    ["path", {
      d: "m6 13 8.5 8",
      key: "u1kupk"
    }],
    ["path", {
      d: "M6 13h3",
      key: "wdp6ag"
    }],
    ["path", {
      d: "M9 13c6.667 0 6.667-10 0-10",
      key: "1nkvk2"
    }]
  ],
  g2 = e("indian-rupee", d1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "10",
      key: "1mglay"
    }],
    ["path", {
      d: "M12 16v-4",
      key: "1dtifu"
    }],
    ["path", {
      d: "M12 8h.01",
      key: "e9boi3"
    }]
  ],
  $2 = e("info", r1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = [
    ["path", {
      d: "m10 17 5-5-5-5",
      key: "1bsop3"
    }],
    ["path", {
      d: "M15 12H3",
      key: "6jk70r"
    }],
    ["path", {
      d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
      key: "u53s6r"
    }]
  ],
  N2 = e("log-in", k1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = [
    ["path", {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }],
    ["circle", {
      cx: "12",
      cy: "10",
      r: "3",
      key: "ilqhr7"
    }]
  ],
  w2 = e("map-pin", i1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = [
    ["path", {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }]
  ],
  f2 = e("message-square", p1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = [
    ["path", {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }],
    ["path", {
      d: "m15 5 4 4",
      key: "1mk7zo"
    }]
  ],
  C2 = e("pencil", l1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _1 = [
    ["path", {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }]
  ],
  z2 = e("phone", _1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M1 = [
    ["path", {
      d: "M5 12h14",
      key: "1ays0h"
    }],
    ["path", {
      d: "M12 5v14",
      key: "s699le"
    }]
  ],
  A2 = e("plus", M1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = [
    ["path", {
      d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
      key: "v9h5vc"
    }],
    ["path", {
      d: "M21 3v5h-5",
      key: "1q7to0"
    }],
    ["path", {
      d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
      key: "3uifl3"
    }],
    ["path", {
      d: "M8 16H3v5",
      key: "1cv678"
    }]
  ],
  b2 = e("refresh-cw", x1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = [
    ["path", {
      d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
      key: "1357e3"
    }],
    ["path", {
      d: "M3 3v5h5",
      key: "1xhq8a"
    }]
  ],
  H2 = e("rotate-ccw", v1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = [
    ["path", {
      d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
      key: "1p45f6"
    }],
    ["path", {
      d: "M21 3v5h-5",
      key: "1q7to0"
    }]
  ],
  j2 = e("rotate-cw", u1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = [
    ["path", {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }],
    ["path", {
      d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
      key: "1ydtos"
    }],
    ["path", {
      d: "M7 3v4a1 1 0 0 0 1 1h7",
      key: "t51u73"
    }]
  ],
  q2 = e("save", m1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = [
    ["path", {
      d: "m21 21-4.34-4.34",
      key: "14j7rj"
    }],
    ["circle", {
      cx: "11",
      cy: "11",
      r: "8",
      key: "4ej97u"
    }]
  ],
  L2 = e("search", g1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $1 = [
    ["circle", {
      cx: "18",
      cy: "5",
      r: "3",
      key: "gq8acd"
    }],
    ["circle", {
      cx: "6",
      cy: "12",
      r: "3",
      key: "w7nqdw"
    }],
    ["circle", {
      cx: "18",
      cy: "19",
      r: "3",
      key: "1xt0gg"
    }],
    ["line", {
      x1: "8.59",
      x2: "15.42",
      y1: "13.51",
      y2: "17.49",
      key: "47mynk"
    }],
    ["line", {
      x1: "15.41",
      x2: "8.59",
      y1: "6.51",
      y2: "10.49",
      key: "1n3mei"
    }]
  ],
  V2 = e("share-2", $1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = [
    ["path", {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }],
    ["path", {
      d: "M12 8v4",
      key: "1got3b"
    }],
    ["path", {
      d: "M12 16h.01",
      key: "1drbdi"
    }]
  ],
  S2 = e("shield-alert", N1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w1 = [
    ["path", {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }],
    ["path", {
      d: "m9 12 2 2 4-4",
      key: "dzmm74"
    }]
  ],
  P2 = e("shield-check", w1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = [
    ["path", {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }],
    ["path", {
      d: "M20 2v4",
      key: "1rf3ol"
    }],
    ["path", {
      d: "M22 4h-4",
      key: "gwowj6"
    }],
    ["circle", {
      cx: "4",
      cy: "20",
      r: "2",
      key: "6kqj1y"
    }]
  ],
  U2 = e("sparkles", f1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = [
    ["path", {
      d: "M10 11v6",
      key: "nco0om"
    }],
    ["path", {
      d: "M14 11v6",
      key: "outv1u"
    }],
    ["path", {
      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
      key: "miytrc"
    }],
    ["path", {
      d: "M3 6h18",
      key: "d0wm0j"
    }],
    ["path", {
      d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
      key: "e791ji"
    }]
  ],
  F2 = e("trash-2", C1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z1 = [
    ["path", {
      d: "M16 7h6v6",
      key: "box55l"
    }],
    ["path", {
      d: "m22 7-8.5 8.5-5-5L2 17",
      key: "1t1m79"
    }]
  ],
  R2 = e("trending-up", z1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = [
    ["path", {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }],
    ["path", {
      d: "M12 9v4",
      key: "juzpu7"
    }],
    ["path", {
      d: "M12 17h.01",
      key: "p32p05"
    }]
  ],
  Z2 = e("triangle-alert", A1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = [
    ["path", {
      d: "M12 3v12",
      key: "1x0j5s"
    }],
    ["path", {
      d: "m17 8-5-5-5 5",
      key: "7q97r8"
    }],
    ["path", {
      d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
      key: "ih7n3h"
    }]
  ],
  I2 = e("upload", b1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H1 = [
    ["path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq"
    }],
    ["circle", {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8"
    }],
    ["line", {
      x1: "22",
      x2: "16",
      y1: "11",
      y2: "11",
      key: "1shjgl"
    }]
  ],
  W2 = e("user-minus", H1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = [
    ["path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq"
    }],
    ["circle", {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8"
    }],
    ["line", {
      x1: "19",
      x2: "19",
      y1: "8",
      y2: "14",
      key: "1bvyxn"
    }],
    ["line", {
      x1: "22",
      x2: "16",
      y1: "11",
      y2: "11",
      key: "1shjgl"
    }]
  ],
  E2 = e("user-plus", j1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q1 = [
    ["path", {
      d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
      key: "975kel"
    }],
    ["circle", {
      cx: "12",
      cy: "7",
      r: "4",
      key: "17ys0d"
    }]
  ],
  B2 = e("user", q1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L1 = [
    ["path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq"
    }],
    ["path", {
      d: "M16 3.128a4 4 0 0 1 0 7.744",
      key: "16gr8j"
    }],
    ["path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87",
      key: "kshegd"
    }],
    ["circle", {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8"
    }]
  ],
  D2 = e("users", L1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V1 = [
    ["path", {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }],
    ["path", {
      d: "M16 9a5 5 0 0 1 0 6",
      key: "1q6k2b"
    }],
    ["path", {
      d: "M19.364 18.364a9 9 0 0 0 0-12.728",
      key: "ijwkga"
    }]
  ],
  T2 = e("volume-2", V1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = [
    ["path", {
      d: "M18 6 6 18",
      key: "1bl5f8"
    }],
    ["path", {
      d: "m6 6 12 12",
      key: "d8bk6v"
    }]
  ],
  O2 = e("x", S1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P1 = [
    ["path", {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }]
  ],
  K2 = e("zap", P1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U1 = [
    ["circle", {
      cx: "11",
      cy: "11",
      r: "8",
      key: "4ej97u"
    }],
    ["line", {
      x1: "21",
      x2: "16.65",
      y1: "21",
      y2: "16.65",
      key: "13gj7c"
    }],
    ["line", {
      x1: "11",
      x2: "11",
      y1: "8",
      y2: "14",
      key: "1vmskp"
    }],
    ["line", {
      x1: "8",
      x2: "14",
      y1: "11",
      y2: "11",
      key: "durymu"
    }]
  ],
  G2 = e("zoom-in", U1);
/**
 * @license lucide-react v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F1 = [
    ["circle", {
      cx: "11",
      cy: "11",
      r: "8",
      key: "4ej97u"
    }],
    ["line", {
      x1: "21",
      x2: "16.65",
      y1: "21",
      y2: "16.65",
      key: "13gj7c"
    }],
    ["line", {
      x1: "8",
      x2: "14",
      y1: "11",
      y2: "11",
      key: "durymu"
    }]
  ],
  J2 = e("zoom-out", F1);
export {
  m2 as $, W1 as A, D1 as B, a2 as C, n2 as D, y2 as E, k2 as F, p2 as G, x2 as H, g2 as I, r2 as J, o2 as K, E1 as L, w2 as M, N2 as N, P2 as O, z2 as P, V2 as Q, j2 as R, L2 as S, F2 as T, E2 as U, T2 as V, l2 as W, O2 as X, H2 as Y, J2 as Z, X1 as _, Q1 as a, Z1 as a0, f2 as a1, _2 as a2, M2 as a3, K1 as a4, A2 as a5, i2 as a6, b2 as a7, u2 as a8, D2 as a9, h2 as aa, Y1 as b, G2 as c, J1 as d, I1 as e, B2 as f, O1 as g, I2 as h, T1 as i, c2 as j, $2 as k, q2 as l, C2 as m, d2 as n, v2 as o, G1 as p, R2 as q, K2 as r, s2 as s, U2 as t, W2 as u, Z2 as v, t2 as w, B1 as x, S2 as y, e2 as z
};
