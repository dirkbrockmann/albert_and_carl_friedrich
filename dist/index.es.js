(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:border-1{border-style:var(--tw-border-style);border-width:1px}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:border-white{border-color:var(--tw-color-white)}.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}._displayPanel_1no3j_1,._controlPanel_1no3j_6{display:block}._insetaxis_1no3j_16{stroke:#000;stroke-width:1px}@media (prefers-color-scheme: dark){._insetaxis_1no3j_16{stroke:#fff;stroke-width:1px}}._pdf_lattice_1no3j_28{stroke:none;opacity:1}._pdf_ring_1no3j_33{fill:none;stroke-width:5px;opacity:1}._pdf_gaussian_1no3j_38{opacity:.7;stroke:none;fill:url(#gaussian_gradient)}@media (prefers-color-scheme: dark){._pdf_gaussian_1no3j_38{fill:url(#gaussian_gradient_dark)}}._pdf_triangular_1no3j_50{opacity:1;stroke:none}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const nl = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: "tw:border-1 tw-border-black tw:dark:border-white tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function ue(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function el(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function za(t) {
  let n, e, r;
  t.length !== 2 ? (n = ue, e = (s, l) => ue(t(s), l), r = (s, l) => t(s) - l) : (n = t === ue || t === el ? t : rl, e = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function rl() {
  return 0;
}
function il(t) {
  return t === null ? NaN : +t;
}
const ol = za(ue), al = ol.right;
za(il).center;
class Ui extends Map {
  constructor(n, e = ll) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(Gi(this, n));
  }
  has(n) {
    return super.has(Gi(this, n));
  }
  set(n, e) {
    return super.set(sl(this, n), e);
  }
  delete(n) {
    return super.delete(ul(this, n));
  }
}
function Gi({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function sl({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function ul({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function ll(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const cl = Math.sqrt(50), fl = Math.sqrt(10), hl = Math.sqrt(2);
function me(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= cl ? 10 : o >= fl ? 5 : o >= hl ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? me(t, n, e * 2) : [s, l, u];
}
function pl(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? me(n, t, e) : me(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function Mr(t, n, e) {
  return n = +n, t = +t, e = +e, me(t, n, e)[2];
}
function dl(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Mr(n, t, e) : Mr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var gl = { value: () => {
} };
function Ca() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new le(e);
}
function le(t) {
  this._ = t;
}
function _l(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
le.prototype = Ca.prototype = {
  constructor: le,
  on: function(t, n) {
    var e = this._, r = _l(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = yl(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = Yi(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Yi(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new le(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function yl(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Yi(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = gl, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var $r = "http://www.w3.org/1999/xhtml";
const Vi = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: $r,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function De(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Vi.hasOwnProperty(n) ? { space: Vi[n], local: t } : t;
}
function vl(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === $r && n.documentElement.namespaceURI === $r ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ml(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ia(t) {
  var n = De(t);
  return (n.local ? ml : vl)(n);
}
function wl() {
}
function si(t) {
  return t == null ? wl : function() {
    return this.querySelector(t);
  };
}
function bl(t) {
  typeof t != "function" && (t = si(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = o[c]) && (u = t.call(l, l.__data__, c, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new D(r, this._parents);
}
function xl(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ml() {
  return [];
}
function Ra(t) {
  return t == null ? Ml : function() {
    return this.querySelectorAll(t);
  };
}
function $l(t) {
  return function() {
    return xl(t.apply(this, arguments));
  };
}
function Al(t) {
  typeof t == "function" ? t = $l(t) : t = Ra(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new D(r, i);
}
function ja(t) {
  return function() {
    return this.matches(t);
  };
}
function La(t) {
  return function(n) {
    return n.matches(t);
  };
}
var kl = Array.prototype.find;
function Tl(t) {
  return function() {
    return kl.call(this.children, t);
  };
}
function Nl() {
  return this.firstElementChild;
}
function Sl(t) {
  return this.select(t == null ? Nl : Tl(typeof t == "function" ? t : La(t)));
}
var Pl = Array.prototype.filter;
function El() {
  return Array.from(this.children);
}
function Ol(t) {
  return function() {
    return Pl.call(this.children, t);
  };
}
function zl(t) {
  return this.selectAll(t == null ? El : Ol(typeof t == "function" ? t : La(t)));
}
function Cl(t) {
  typeof t != "function" && (t = ja(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new D(r, this._parents);
}
function Fa(t) {
  return new Array(t.length);
}
function Il() {
  return new D(this._enter || this._groups.map(Fa), this._parents);
}
function we(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
we.prototype = {
  constructor: we,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Rl(t) {
  return function() {
    return t;
  };
}
function jl(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new we(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function Ll(t, n, e, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = o.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = a.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = a.call(t, o[s], s, o) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = o[s], u.delete(p)) : e[s] = new we(t, o[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Fl(t) {
  return t.__data__;
}
function Dl(t, n) {
  if (!arguments.length) return Array.from(this, Fl);
  var e = n ? Ll : jl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Rl(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var c = r[u], h = i[u], f = h.length, p = ql(t.call(c, c && c.__data__, u, r)), d = p.length, _ = s[u] = new Array(d), w = a[u] = new Array(d), x = l[u] = new Array(f);
    e(c, h, _, w, x, p, n);
    for (var m = 0, M = 0, g, v; m < d; ++m)
      if (g = _[m]) {
        for (m >= M && (M = m + 1); !(v = w[M]) && ++M < d; ) ;
        g._next = v || null;
      }
  }
  return a = new D(a, r), a._enter = s, a._exit = l, a;
}
function ql(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Xl() {
  return new D(this._exit || this._groups.map(Fa), this._parents);
}
function Bl(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Hl(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new D(s, this._parents);
}
function Ul() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Gl(t) {
  t || (t = Yl);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(n);
  }
  return new D(i, this._parents).order();
}
function Yl(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Vl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Kl() {
  return Array.from(this);
}
function Wl() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Zl() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Jl() {
  return !this.node();
}
function Ql(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function tc(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function nc(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ec(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function rc(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function ic(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function oc(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function ac(t, n) {
  var e = De(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? nc : tc : typeof n == "function" ? e.local ? oc : ic : e.local ? rc : ec)(e, n));
}
function Da(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function sc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function uc(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function lc(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function cc(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? sc : typeof n == "function" ? lc : uc)(t, n, e ?? "")) : rn(this.node(), t);
}
function rn(t, n) {
  return t.style.getPropertyValue(n) || Da(t).getComputedStyle(t, null).getPropertyValue(n);
}
function fc(t) {
  return function() {
    delete this[t];
  };
}
function hc(t, n) {
  return function() {
    this[t] = n;
  };
}
function pc(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function dc(t, n) {
  return arguments.length > 1 ? this.each((n == null ? fc : typeof n == "function" ? pc : hc)(t, n)) : this.node()[t];
}
function qa(t) {
  return t.trim().split(/^|\s+/);
}
function ui(t) {
  return t.classList || new Xa(t);
}
function Xa(t) {
  this._node = t, this._names = qa(t.getAttribute("class") || "");
}
Xa.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Ba(t, n) {
  for (var e = ui(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Ha(t, n) {
  for (var e = ui(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function gc(t) {
  return function() {
    Ba(this, t);
  };
}
function _c(t) {
  return function() {
    Ha(this, t);
  };
}
function yc(t, n) {
  return function() {
    (n.apply(this, arguments) ? Ba : Ha)(this, t);
  };
}
function vc(t, n) {
  var e = qa(t + "");
  if (arguments.length < 2) {
    for (var r = ui(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? yc : n ? gc : _c)(e, n));
}
function mc() {
  this.textContent = "";
}
function wc(t) {
  return function() {
    this.textContent = t;
  };
}
function bc(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function xc(t) {
  return arguments.length ? this.each(t == null ? mc : (typeof t == "function" ? bc : wc)(t)) : this.node().textContent;
}
function Mc() {
  this.innerHTML = "";
}
function $c(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ac(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function kc(t) {
  return arguments.length ? this.each(t == null ? Mc : (typeof t == "function" ? Ac : $c)(t)) : this.node().innerHTML;
}
function Tc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Nc() {
  return this.each(Tc);
}
function Sc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Pc() {
  return this.each(Sc);
}
function Ec(t) {
  var n = typeof t == "function" ? t : Ia(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Oc() {
  return null;
}
function zc(t, n) {
  var e = typeof t == "function" ? t : Ia(t), r = n == null ? Oc : typeof n == "function" ? n : si(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Cc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ic() {
  return this.each(Cc);
}
function Rc() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function jc() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Lc(t) {
  return this.select(t ? jc : Rc);
}
function Fc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Dc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function qc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Xc(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Bc(t, n, e) {
  return function() {
    var r = this.__on, i, o = Dc(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Hc(t, n, e) {
  var r = qc(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Bc : Xc, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function Ua(t, n, e) {
  var r = Da(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Uc(t, n) {
  return function() {
    return Ua(this, t, n);
  };
}
function Gc(t, n) {
  return function() {
    return Ua(this, t, n.apply(this, arguments));
  };
}
function Yc(t, n) {
  return this.each((typeof n == "function" ? Gc : Uc)(t, n));
}
function* Vc() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Ga = [null];
function D(t, n) {
  this._groups = t, this._parents = n;
}
function Dn() {
  return new D([[document.documentElement]], Ga);
}
function Kc() {
  return this;
}
D.prototype = Dn.prototype = {
  constructor: D,
  select: bl,
  selectAll: Al,
  selectChild: Sl,
  selectChildren: zl,
  filter: Cl,
  data: Dl,
  enter: Il,
  exit: Xl,
  join: Bl,
  merge: Hl,
  selection: Kc,
  order: Ul,
  sort: Gl,
  call: Vl,
  nodes: Kl,
  node: Wl,
  size: Zl,
  empty: Jl,
  each: Ql,
  attr: ac,
  style: cc,
  property: dc,
  classed: vc,
  text: xc,
  html: kc,
  raise: Nc,
  lower: Pc,
  append: Ec,
  insert: zc,
  remove: Ic,
  clone: Lc,
  datum: Fc,
  on: Hc,
  dispatch: Yc,
  [Symbol.iterator]: Vc
};
function Wc(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], Ga);
}
function li(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Ya(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function qn() {
}
var Tn = 0.7, be = 1 / Tn, tn = "\\s*([+-]?\\d+)\\s*", Nn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zc = /^#([0-9a-f]{3,8})$/, Jc = new RegExp(`^rgb\\(${tn},${tn},${tn}\\)$`), Qc = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), tf = new RegExp(`^rgba\\(${tn},${tn},${tn},${Nn}\\)$`), nf = new RegExp(`^rgba\\(${rt},${rt},${rt},${Nn}\\)$`), ef = new RegExp(`^hsl\\(${Nn},${rt},${rt}\\)$`), rf = new RegExp(`^hsla\\(${Nn},${rt},${rt},${Nn}\\)$`), Ki = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
li(qn, jt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Wi,
  // Deprecated! Use color.formatHex.
  formatHex: Wi,
  formatHex8: of,
  formatHsl: af,
  formatRgb: Zi,
  toString: Zi
});
function Wi() {
  return this.rgb().formatHex();
}
function of() {
  return this.rgb().formatHex8();
}
function af() {
  return Va(this).formatHsl();
}
function Zi() {
  return this.rgb().formatRgb();
}
function jt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Zc.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ji(n) : e === 3 ? new R(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Kn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Kn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Jc.exec(t)) ? new R(n[1], n[2], n[3], 1) : (n = Qc.exec(t)) ? new R(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = tf.exec(t)) ? Kn(n[1], n[2], n[3], n[4]) : (n = nf.exec(t)) ? Kn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ef.exec(t)) ? no(n[1], n[2] / 100, n[3] / 100, 1) : (n = rf.exec(t)) ? no(n[1], n[2] / 100, n[3] / 100, n[4]) : Ki.hasOwnProperty(t) ? Ji(Ki[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function Ji(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Kn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new R(t, n, e, r);
}
function sf(t) {
  return t instanceof qn || (t = jt(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function Ar(t, n, e, r) {
  return arguments.length === 1 ? sf(t) : new R(t, n, e, r ?? 1);
}
function R(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
li(R, Ar, Ya(qn, {
  brighter(t) {
    return t = t == null ? be : Math.pow(be, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Tn : Math.pow(Tn, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new R(It(this.r), It(this.g), It(this.b), xe(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Qi,
  // Deprecated! Use color.formatHex.
  formatHex: Qi,
  formatHex8: uf,
  formatRgb: to,
  toString: to
}));
function Qi() {
  return `#${Ot(this.r)}${Ot(this.g)}${Ot(this.b)}`;
}
function uf() {
  return `#${Ot(this.r)}${Ot(this.g)}${Ot(this.b)}${Ot((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function to() {
  const t = xe(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${It(this.r)}, ${It(this.g)}, ${It(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function xe(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function It(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ot(t) {
  return t = It(t), (t < 16 ? "0" : "") + t.toString(16);
}
function no(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Z(t, n, e, r);
}
function Va(t) {
  if (t instanceof Z) return new Z(t.h, t.s, t.l, t.opacity);
  if (t instanceof qn || (t = jt(t)), !t) return new Z();
  if (t instanceof Z) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new Z(a, s, l, t.opacity);
}
function lf(t, n, e, r) {
  return arguments.length === 1 ? Va(t) : new Z(t, n, e, r ?? 1);
}
function Z(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
li(Z, lf, Ya(qn, {
  brighter(t) {
    return t = t == null ? be : Math.pow(be, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Tn : Math.pow(Tn, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new R(
      cr(t >= 240 ? t - 240 : t + 120, i, r),
      cr(t, i, r),
      cr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Z(eo(this.h), Wn(this.s), Wn(this.l), xe(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = xe(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${eo(this.h)}, ${Wn(this.s) * 100}%, ${Wn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function eo(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Wn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function cr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ci = (t) => () => t;
function cf(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function ff(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function hf(t) {
  return (t = +t) == 1 ? Ka : function(n, e) {
    return e - n ? ff(n, e, t) : ci(isNaN(n) ? e : n);
  };
}
function Ka(t, n) {
  var e = n - t;
  return e ? cf(t, e) : ci(isNaN(t) ? n : t);
}
const Me = function t(n) {
  var e = hf(n);
  function r(i, o) {
    var a = e((i = Ar(i)).r, (o = Ar(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), u = Ka(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function pf(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function df(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function gf(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = fi(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function _f(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function K(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function yf(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = fi(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var kr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, fr = new RegExp(kr.source, "g");
function vf(t) {
  return function() {
    return t;
  };
}
function mf(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Wa(t, n) {
  var e = kr.lastIndex = fr.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = kr.exec(t)) && (i = fr.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: K(r, i) })), e = fr.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? mf(l[0].x) : vf(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function fi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ci(n) : (e === "number" ? K : e === "string" ? (r = jt(n)) ? (n = r, Me) : Wa : n instanceof jt ? Me : n instanceof Date ? _f : df(n) ? pf : Array.isArray(n) ? gf : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? yf : K)(t, n);
}
function wf(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var ro = 180 / Math.PI, Tr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Za(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * ro,
    skewX: Math.atan(l) * ro,
    scaleX: a,
    scaleY: s
  };
}
var Zn;
function bf(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Tr : Za(n.a, n.b, n.c, n.d, n.e, n.f);
}
function xf(t) {
  return t == null || (Zn || (Zn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Zn.setAttribute("transform", t), !(t = Zn.transform.baseVal.consolidate())) ? Tr : (t = t.matrix, Za(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ja(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var _ = p.push("translate(", null, n, null, e);
      d.push({ i: _ - 4, x: K(u, h) }, { i: _ - 2, x: K(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function a(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: K(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: K(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: _ - 4, x: K(u, h) }, { i: _ - 2, x: K(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), o(u.translateX, u.translateY, c.translateX, c.translateY, h, f), a(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, _ = f.length, w; ++d < _; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var Mf = Ja(bf, "px, ", "px)", "deg)"), $f = Ja(xf, ", ", ")", ")"), on = 0, mn = 0, gn = 0, Qa = 1e3, $e, wn, Ae = 0, Lt = 0, qe = 0, Sn = typeof performance == "object" && performance.now ? performance : Date, ts = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Xe() {
  return Lt || (ts(Af), Lt = Sn.now() + qe);
}
function Af() {
  Lt = 0;
}
function Pn() {
  this._call = this._time = this._next = null;
}
Pn.prototype = ns.prototype = {
  constructor: Pn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Xe() : +e) + (n == null ? 0 : +n), !this._next && wn !== this && (wn ? wn._next = this : $e = this, wn = this), this._call = t, this._time = e, Nr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Nr());
  }
};
function ns(t, n, e) {
  var r = new Pn();
  return r.restart(t, n, e), r;
}
function kf() {
  Xe(), ++on;
  for (var t = $e, n; t; )
    (n = Lt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --on;
}
function io() {
  Lt = (Ae = Sn.now()) + qe, on = mn = 0;
  try {
    kf();
  } finally {
    on = 0, Nf(), Lt = 0;
  }
}
function Tf() {
  var t = Sn.now(), n = t - Ae;
  n > Qa && (qe -= n, Ae = t);
}
function Nf() {
  for (var t, n = $e, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : $e = e);
  wn = t, Nr(r);
}
function Nr(t) {
  if (!on) {
    mn && (mn = clearTimeout(mn));
    var n = t - Lt;
    n > 24 ? (t < 1 / 0 && (mn = setTimeout(io, t - Sn.now() - qe)), gn && (gn = clearInterval(gn))) : (gn || (Ae = Sn.now(), gn = setInterval(Tf, Qa)), on = 1, ts(io));
  }
}
function oo(t, n, e) {
  var r = new Pn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Sf(t, n, e) {
  var r = new Pn(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Xe() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += a, s), o(u);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var Pf = Ca("start", "end", "cancel", "interrupt"), Ef = [], es = 0, ao = 1, Sr = 2, ce = 3, so = 4, Pr = 5, fe = 6;
function Be(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Of(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Pf,
    tween: Ef,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: es
  });
}
function hi(t, n) {
  var e = tt(t, n);
  if (e.state > es) throw new Error("too late; already scheduled");
  return e;
}
function at(t, n) {
  var e = tt(t, n);
  if (e.state > ce) throw new Error("too late; already running");
  return e;
}
function tt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Of(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ns(o, 0, e.time);
  function o(u) {
    e.state = ao, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var c, h, f, p;
    if (e.state !== ao) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === ce) return oo(a);
        p.state === so ? (p.state = fe, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = fe, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (oo(function() {
      e.state === ce && (e.state = so, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Sr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Sr) {
      for (e.state = ce, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Pr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === Pr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = fe, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function zf(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Sr && r.state < Pr, r.state = fe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Cf(t) {
  return this.each(function() {
    zf(this, t);
  });
}
function If(t, n) {
  var e, r;
  return function() {
    var i = at(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Rf(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = at(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function jf(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = tt(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? If : Rf)(e, t, n));
}
function pi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = at(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return tt(i, r).value[n];
  };
}
function rs(t, n) {
  var e;
  return (typeof n == "number" ? K : n instanceof jt ? Me : (e = jt(n)) ? (n = e, Me) : Wa)(t, n);
}
function Lf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ff(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Df(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function qf(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Xf(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Bf(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Hf(t, n) {
  var e = De(t), r = e === "transform" ? $f : rs;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Bf : Xf)(e, r, pi(this, "attr." + t, n)) : n == null ? (e.local ? Ff : Lf)(e) : (e.local ? qf : Df)(e, r, n));
}
function Uf(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Gf(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Yf(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Gf(t, o)), e;
  }
  return i._value = n, i;
}
function Vf(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Uf(t, o)), e;
  }
  return i._value = n, i;
}
function Kf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = De(t);
  return this.tween(e, (r.local ? Yf : Vf)(r, n));
}
function Wf(t, n) {
  return function() {
    hi(this, t).delay = +n.apply(this, arguments);
  };
}
function Zf(t, n) {
  return n = +n, function() {
    hi(this, t).delay = n;
  };
}
function Jf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Wf : Zf)(n, t)) : tt(this.node(), n).delay;
}
function Qf(t, n) {
  return function() {
    at(this, t).duration = +n.apply(this, arguments);
  };
}
function th(t, n) {
  return n = +n, function() {
    at(this, t).duration = n;
  };
}
function nh(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Qf : th)(n, t)) : tt(this.node(), n).duration;
}
function eh(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    at(this, t).ease = n;
  };
}
function rh(t) {
  var n = this._id;
  return arguments.length ? this.each(eh(n, t)) : tt(this.node(), n).ease;
}
function ih(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    at(this, t).ease = e;
  };
}
function oh(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ih(this._id, t));
}
function ah(t) {
  typeof t != "function" && (t = ja(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new dt(r, this._parents, this._name, this._id);
}
function sh(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = a[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    a[s] = n[s];
  return new dt(a, this._parents, this._name, this._id);
}
function uh(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function lh(t, n, e) {
  var r, i, o = uh(n) ? hi : at;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function ch(t, n) {
  var e = this._id;
  return arguments.length < 2 ? tt(this.node(), e).on.on(t) : this.each(lh(e, t, n));
}
function fh(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function hh() {
  return this.on("end.remove", fh(this._id));
}
function ph(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = si(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Be(u[f], n, e, f, u, tt(c, e)));
  return new dt(o, this._parents, n, e);
}
function dh(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ra(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = tt(c, e), _ = 0, w = f.length; _ < w; ++_)
          (p = f[_]) && Be(p, n, e, _, f, d);
        o.push(f), a.push(c);
      }
  return new dt(o, a, n, e);
}
var gh = Dn.prototype.constructor;
function _h() {
  return new gh(this._groups, this._parents);
}
function yh(t, n) {
  var e, r, i;
  return function() {
    var o = rn(this, t), a = (this.style.removeProperty(t), rn(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function is(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function vh(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = rn(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function mh(t, n, e) {
  var r, i, o;
  return function() {
    var a = rn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), rn(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function wh(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = at(this, t), u = l.on, c = l.value[o] == null ? s || (s = is(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(a, i = c), l.on = r;
  };
}
function bh(t, n, e) {
  var r = (t += "") == "transform" ? Mf : rs;
  return n == null ? this.styleTween(t, yh(t, r)).on("end.style." + t, is(t)) : typeof n == "function" ? this.styleTween(t, mh(t, r, pi(this, "style." + t, n))).each(wh(this._id, t)) : this.styleTween(t, vh(t, r, n), e).on("end.style." + t, null);
}
function xh(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Mh(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && xh(t, a, e)), r;
  }
  return o._value = n, o;
}
function $h(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Mh(t, n, e ?? ""));
}
function Ah(t) {
  return function() {
    this.textContent = t;
  };
}
function kh(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Th(t) {
  return this.tween("text", typeof t == "function" ? kh(pi(this, "text", t)) : Ah(t == null ? "" : t + ""));
}
function Nh(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Sh(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Nh(i)), n;
  }
  return r._value = t, r;
}
function Ph(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Sh(t));
}
function Eh() {
  for (var t = this._name, n = this._id, e = os(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = tt(l, n);
        Be(l, t, e, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new dt(r, this._parents, t, e);
}
function Oh() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = at(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && o();
  });
}
var zh = 0;
function dt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function os() {
  return ++zh;
}
var ut = Dn.prototype;
dt.prototype = {
  constructor: dt,
  select: ph,
  selectAll: dh,
  selectChild: ut.selectChild,
  selectChildren: ut.selectChildren,
  filter: ah,
  merge: sh,
  selection: _h,
  transition: Eh,
  call: ut.call,
  nodes: ut.nodes,
  node: ut.node,
  size: ut.size,
  empty: ut.empty,
  each: ut.each,
  on: ch,
  attr: Hf,
  attrTween: Kf,
  style: bh,
  styleTween: $h,
  text: Th,
  textTween: Ph,
  remove: hh,
  tween: jf,
  delay: Jf,
  duration: nh,
  ease: rh,
  easeVarying: oh,
  end: Oh,
  [Symbol.iterator]: ut[Symbol.iterator]
};
function Ch(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ih = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ch
};
function Rh(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function jh(t) {
  var n, e;
  t instanceof dt ? (n = t._id, t = t._name) : (n = os(), (e = Ih).time = Xe(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Be(l, t, n, u, a, e || Rh(l, n));
  return new dt(r, this._parents, t, n);
}
Dn.prototype.interrupt = Cf;
Dn.prototype.transition = jh;
const Er = Math.PI, Or = 2 * Er, Pt = 1e-6, Lh = Or - Pt;
function as(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Fh(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return as;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Dh {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? as : Fh(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, l = r - n, u = i - e, c = a - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > Pt) if (!(Math.abs(h * l - u * c) > Pt) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, d = i - s, _ = l * l + u * u, w = p * p + d * d, x = Math.sqrt(_), m = Math.sqrt(f), M = o * Math.tan((Er - Math.acos((_ + f - w) / (2 * x * m))) / 2), g = M / m, v = M / x;
      Math.abs(g - 1) > Pt && this._append`L${n + g * c},${e + g * h}`, this._append`A${o},${o},0,0,${+(h * p > c * d)},${this._x1 = n + v * l},${this._y1 = e + v * u}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ a, f = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Pt || Math.abs(this._y1 - c) > Pt) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Or + Or), f > Lh ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Pt && this._append`A${r},${r},0,${+(f >= Er)},${h},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function qh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function ke(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function an(t) {
  return t = ke(Math.abs(t)), t ? t[1] : NaN;
}
function Xh(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Bh(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Hh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Te(t) {
  if (!(n = Hh.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new di({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Te.prototype = di.prototype;
function di(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
di.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Uh(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var ss;
function Gh(t, n) {
  var e = ke(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (ss = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + ke(t, Math.max(0, n + o - 1))[0];
}
function uo(t, n) {
  var e = ke(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const lo = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: qh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => uo(t * 100, n),
  r: uo,
  s: Gh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function co(t) {
  return t;
}
var fo = Array.prototype.map, ho = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Yh(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? co : Xh(fo.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? co : Bh(fo.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Te(h);
    var f = h.fill, p = h.align, d = h.sign, _ = h.symbol, w = h.zero, x = h.width, m = h.comma, M = h.precision, g = h.trim, v = h.type;
    v === "n" ? (m = !0, v = "g") : lo[v] || (M === void 0 && (M = 12), g = !0, v = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var S = _ === "$" ? e : _ === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = _ === "$" ? r : /[%p]/.test(v) ? a : "", z = lo[v], B = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(y) {
      var C = S, k = P, I, Nt, L;
      if (v === "c")
        k = z(y) + k, y = "";
      else {
        y = +y;
        var U = y < 0 || 1 / y < 0;
        if (y = isNaN(y) ? l : z(Math.abs(y), M), g && (y = Uh(y)), U && +y == 0 && d !== "+" && (U = !1), C = (U ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, k = (v === "s" ? ho[8 + ss / 3] : "") + k + (U && d === "(" ? ")" : ""), B) {
          for (I = -1, Nt = y.length; ++I < Nt; )
            if (L = y.charCodeAt(I), 48 > L || L > 57) {
              k = (L === 46 ? i + y.slice(I + 1) : y.slice(I)) + k, y = y.slice(0, I);
              break;
            }
        }
      }
      m && !w && (y = n(y, 1 / 0));
      var V = C.length + y.length + k.length, E = V < x ? new Array(x - V + 1).join(f) : "";
      switch (m && w && (y = n(E + y, E.length ? x - k.length : 1 / 0), E = ""), p) {
        case "<":
          y = C + y + k + E;
          break;
        case "=":
          y = C + E + y + k;
          break;
        case "^":
          y = E.slice(0, V = E.length >> 1) + C + y + k + E.slice(V);
          break;
        default:
          y = E + C + y + k;
          break;
      }
      return o(y);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function c(h, f) {
    var p = u((h = Te(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(an(f) / 3))) * 3, _ = Math.pow(10, -d), w = ho[8 + d / 3];
    return function(x) {
      return p(_ * x) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Jn, us, ls;
Vh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Vh(t) {
  return Jn = Yh(t), us = Jn.format, ls = Jn.formatPrefix, Jn;
}
function Kh(t) {
  return Math.max(0, -an(Math.abs(t)));
}
function Wh(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(an(n) / 3))) * 3 - an(Math.abs(t)));
}
function Zh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, an(n) - an(t)) + 1;
}
const Jh = Math.random, Qh = function t(n) {
  function e(r, i) {
    var o, a;
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, function() {
      var s;
      if (o != null) s = o, o = null;
      else do
        o = n() * 2 - 1, s = n() * 2 - 1, a = o * o + s * s;
      while (!a || a > 1);
      return r + i * s * Math.sqrt(-2 * Math.log(a) / a);
    };
  }
  return e.source = t, e;
}(Jh);
function cs(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
const po = Symbol("implicit");
function fs() {
  var t = new Ui(), n = [], e = [], r = po;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== po) return r;
      t.set(o, a = n.push(o) - 1);
    }
    return e[a % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return n.slice();
    n = [], t = new Ui();
    for (const a of o)
      t.has(a) || t.set(a, n.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return fs(n, e).unknown(r);
  }, cs.apply(i, arguments), i;
}
function tp(t) {
  return function() {
    return t;
  };
}
function np(t) {
  return +t;
}
var go = [0, 1];
function Zt(t) {
  return t;
}
function zr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : tp(isNaN(n) ? NaN : 0.5);
}
function ep(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function rp(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = zr(i, r), o = e(a, o)) : (r = zr(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function ip(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = zr(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var l = al(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function op(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ap() {
  var t = go, n = go, e = fi, r, i, o, a = Zt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return a !== Zt && (a = ep(t[0], t[f - 1])), s = f > 2 ? ip : rp, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (l || (l = s(t.map(r), n, e)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = s(n, t.map(r), K)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, np), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = wf, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Zt, c()) : a !== Zt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function sp() {
  return ap()(Zt, Zt);
}
function up(t, n, e, r) {
  var i = dl(t, n, e), o;
  switch (r = Te(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Wh(i, a)) && (r.precision = o), ls(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Zh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Kh(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return us(r);
}
function lp(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return pl(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return up(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, c = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); c-- > 0; ) {
      if (u = Mr(a, s, e), u === l)
        return r[i] = a, r[o] = s, n(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function Ut() {
  var t = sp();
  return t.copy = function() {
    return op(t, Ut());
  }, cs.apply(t, arguments), lp(t);
}
function Wt(t) {
  return function() {
    return t;
  };
}
function cp(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Dh(n);
}
function fp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function hs(t) {
  this._context = t;
}
hs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function hp(t) {
  return new hs(t);
}
function pp(t) {
  return t[0];
}
function dp(t) {
  return t[1];
}
function gp(t, n) {
  var e = Wt(!0), r = null, i = hp, o = null, a = cp(s);
  t = typeof t == "function" ? t : t === void 0 ? pp : Wt(t), n = typeof n == "function" ? n : n === void 0 ? dp : Wt(n);
  function s(l) {
    var u, c = (l = fp(l)).length, h, f = !1, p;
    for (r == null && (o = i(p = a())), u = 0; u <= c; ++u)
      !(u < c && e(h = l[u], u, l)) === f && ((f = !f) ? o.lineStart() : o.lineEnd()), f && o.point(+t(h, u, l), +n(h, u, l));
    if (p) return o = null, p + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Wt(+l), s) : t;
  }, s.y = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Wt(+l), s) : n;
  }, s.defined = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Wt(!!l), s) : e;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, r != null && (o = i(r)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? r = o = null : o = i(r = l), s) : r;
  }, s;
}
function bn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
bn.prototype = {
  constructor: bn,
  scale: function(t) {
    return t === 1 ? this : new bn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new bn(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
bn.prototype;
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff;--dw-font-size: 16px;--dw-line-height: 1.25;font-size:var(--dw-font-size);line-height:var(--dw-line-height);font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-weight:400}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_9wct0_49{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:1em}._widget_9wct0_49 ._title_9wct0_61{font-size:1.25em;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_9wct0_49 ._label_9wct0_69{fill:var(--color-text);stroke:none}._widget_9wct0_49 ._lit_9wct0_74{fill:var(--color-lit)}._button_9wct0_78>._symbol_9wct0_78,._radio_9wct0_79>._radiobutton_9wct0_79>._symbol_9wct0_78{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85,._toggle_9wct0_86._selected_9wct0_85,._widget_9wct0_49 ._symbol_9wct0_78._selected_9wct0_85._lit_9wct0_74{fill:var(--color-selected)}._widget_9wct0_49 ._symbol_9wct0_78._lit_9wct0_74{fill:var(--color-lit-symbol)}._slider_9wct0_95>._track_9wct0_95,._toggle_9wct0_86>._track_9wct0_95{pointer-events:none}._slider_9wct0_95>._track_overlay_9wct0_100,._toggle_9wct0_86>._track_overlay_9wct0_100{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_9wct0_95>._handle_9wct0_108,._toggle_9wct0_86>._handle_9wct0_108{fill:var(--color-handle)}")), document.head.appendChild(t);
    }
  } catch (n) {
    console.error("vite-plugin-css-injected-by-js", n);
  }
})();
function he(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function _p(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function ps(t) {
  let n, e, r;
  t.length !== 2 ? (n = he, e = (s, l) => he(t(s), l), r = (s, l) => t(s) - l) : (n = t === he || t === _p ? t : yp, e = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) < 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function yp() {
  return 0;
}
function vp(t) {
  return t === null ? NaN : +t;
}
const mp = ps(he), wp = mp.right;
ps(vp).center;
const bp = Math.sqrt(50), xp = Math.sqrt(10), Mp = Math.sqrt(2);
function Ne(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= bp ? 10 : o >= xp ? 5 : o >= Mp ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? Ne(t, n, e * 2) : [s, l, u];
}
function $p(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? Ne(n, t, e) : Ne(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function Cr(t, n, e) {
  return n = +n, t = +t, e = +e, Ne(t, n, e)[2];
}
function Ap(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Cr(n, t, e) : Cr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Qn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function kp(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var Tp = { value: () => {
} };
function gi() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new pe(e);
}
function pe(t) {
  this._ = t;
}
function Np(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
pe.prototype = gi.prototype = {
  constructor: pe,
  on: function(t, n) {
    var e = this._, r = Np(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Sp(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = _o(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = _o(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new pe(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function Sp(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function _o(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Tp, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Ir = "http://www.w3.org/1999/xhtml";
const yo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ir,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function He(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), yo.hasOwnProperty(n) ? { space: yo[n], local: t } : t;
}
function Pp(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Ir && n.documentElement.namespaceURI === Ir ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ep(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ds(t) {
  var n = He(t);
  return (n.local ? Ep : Pp)(n);
}
function Op() {
}
function _i(t) {
  return t == null ? Op : function() {
    return this.querySelector(t);
  };
}
function zp(t) {
  typeof t != "function" && (t = _i(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = o[c]) && (u = t.call(l, l.__data__, c, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new q(r, this._parents);
}
function Cp(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ip() {
  return [];
}
function gs(t) {
  return t == null ? Ip : function() {
    return this.querySelectorAll(t);
  };
}
function Rp(t) {
  return function() {
    return Cp(t.apply(this, arguments));
  };
}
function jp(t) {
  typeof t == "function" ? t = Rp(t) : t = gs(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new q(r, i);
}
function _s(t) {
  return function() {
    return this.matches(t);
  };
}
function ys(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Lp = Array.prototype.find;
function Fp(t) {
  return function() {
    return Lp.call(this.children, t);
  };
}
function Dp() {
  return this.firstElementChild;
}
function qp(t) {
  return this.select(t == null ? Dp : Fp(typeof t == "function" ? t : ys(t)));
}
var Xp = Array.prototype.filter;
function Bp() {
  return Array.from(this.children);
}
function Hp(t) {
  return function() {
    return Xp.call(this.children, t);
  };
}
function Up(t) {
  return this.selectAll(t == null ? Bp : Hp(typeof t == "function" ? t : ys(t)));
}
function Gp(t) {
  typeof t != "function" && (t = _s(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new q(r, this._parents);
}
function vs(t) {
  return new Array(t.length);
}
function Yp() {
  return new q(this._enter || this._groups.map(vs), this._parents);
}
function Se(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
Se.prototype = {
  constructor: Se,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Vp(t) {
  return function() {
    return t;
  };
}
function Kp(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new Se(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function Wp(t, n, e, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = o.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = a.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = a.call(t, o[s], s, o) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = o[s], u.delete(p)) : e[s] = new Se(t, o[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Zp(t) {
  return t.__data__;
}
function Jp(t, n) {
  if (!arguments.length) return Array.from(this, Zp);
  var e = n ? Wp : Kp, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Vp(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Qp(t.call(c, c && c.__data__, u, r)), d = p.length, _ = s[u] = new Array(d), w = a[u] = new Array(d), x = l[u] = new Array(f);
    e(c, h, _, w, x, p, n);
    for (var m = 0, M = 0, g, v; m < d; ++m)
      if (g = _[m]) {
        for (m >= M && (M = m + 1); !(v = w[M]) && ++M < d; ) ;
        g._next = v || null;
      }
  }
  return a = new q(a, r), a._enter = s, a._exit = l, a;
}
function Qp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function td() {
  return new q(this._exit || this._groups.map(vs), this._parents);
}
function nd(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function ed(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new q(s, this._parents);
}
function rd() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function id(t) {
  t || (t = od);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(n);
  }
  return new q(i, this._parents).order();
}
function od(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ad() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function sd() {
  return Array.from(this);
}
function ud() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function ld() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function cd() {
  return !this.node();
}
function fd(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function hd(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function pd(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function dd(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function gd(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function _d(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function yd(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function vd(t, n) {
  var e = He(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? pd : hd : typeof n == "function" ? e.local ? yd : _d : e.local ? gd : dd)(e, n));
}
function ms(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function md(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function wd(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function bd(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function xd(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? md : typeof n == "function" ? bd : wd)(t, n, e ?? "")) : sn(this.node(), t);
}
function sn(t, n) {
  return t.style.getPropertyValue(n) || ms(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Md(t) {
  return function() {
    delete this[t];
  };
}
function $d(t, n) {
  return function() {
    this[t] = n;
  };
}
function Ad(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function kd(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Md : typeof n == "function" ? Ad : $d)(t, n)) : this.node()[t];
}
function ws(t) {
  return t.trim().split(/^|\s+/);
}
function yi(t) {
  return t.classList || new bs(t);
}
function bs(t) {
  this._node = t, this._names = ws(t.getAttribute("class") || "");
}
bs.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function xs(t, n) {
  for (var e = yi(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Ms(t, n) {
  for (var e = yi(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Td(t) {
  return function() {
    xs(this, t);
  };
}
function Nd(t) {
  return function() {
    Ms(this, t);
  };
}
function Sd(t, n) {
  return function() {
    (n.apply(this, arguments) ? xs : Ms)(this, t);
  };
}
function Pd(t, n) {
  var e = ws(t + "");
  if (arguments.length < 2) {
    for (var r = yi(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Sd : n ? Td : Nd)(e, n));
}
function Ed() {
  this.textContent = "";
}
function Od(t) {
  return function() {
    this.textContent = t;
  };
}
function zd(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Cd(t) {
  return arguments.length ? this.each(t == null ? Ed : (typeof t == "function" ? zd : Od)(t)) : this.node().textContent;
}
function Id() {
  this.innerHTML = "";
}
function Rd(t) {
  return function() {
    this.innerHTML = t;
  };
}
function jd(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Ld(t) {
  return arguments.length ? this.each(t == null ? Id : (typeof t == "function" ? jd : Rd)(t)) : this.node().innerHTML;
}
function Fd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Dd() {
  return this.each(Fd);
}
function qd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xd() {
  return this.each(qd);
}
function Bd(t) {
  var n = typeof t == "function" ? t : ds(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Hd() {
  return null;
}
function Ud(t, n) {
  var e = typeof t == "function" ? t : ds(t), r = n == null ? Hd : typeof n == "function" ? n : _i(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Gd() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Yd() {
  return this.each(Gd);
}
function Vd() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Kd() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Wd(t) {
  return this.select(t ? Kd : Vd);
}
function Zd(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Jd(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Qd(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function t0(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function n0(t, n, e) {
  return function() {
    var r = this.__on, i, o = Jd(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function e0(t, n, e) {
  var r = Qd(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? n0 : t0, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function $s(t, n, e) {
  var r = ms(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function r0(t, n) {
  return function() {
    return $s(this, t, n);
  };
}
function i0(t, n) {
  return function() {
    return $s(this, t, n.apply(this, arguments));
  };
}
function o0(t, n) {
  return this.each((typeof n == "function" ? i0 : r0)(t, n));
}
function* a0() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var As = [null];
function q(t, n) {
  this._groups = t, this._parents = n;
}
function Xn() {
  return new q([[document.documentElement]], As);
}
function s0() {
  return this;
}
q.prototype = Xn.prototype = {
  constructor: q,
  select: zp,
  selectAll: jp,
  selectChild: qp,
  selectChildren: Up,
  filter: Gp,
  data: Jp,
  enter: Yp,
  exit: td,
  join: nd,
  merge: ed,
  selection: s0,
  order: rd,
  sort: id,
  call: ad,
  nodes: sd,
  node: ud,
  size: ld,
  empty: cd,
  each: fd,
  attr: vd,
  style: xd,
  property: kd,
  classed: Pd,
  text: Cd,
  html: Ld,
  raise: Dd,
  lower: Xd,
  append: Bd,
  insert: Ud,
  remove: Yd,
  clone: Wd,
  datum: Zd,
  on: e0,
  dispatch: o0,
  [Symbol.iterator]: a0
};
function O(t) {
  return typeof t == "string" ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], As);
}
function u0(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function vo(t, n) {
  if (t = u0(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const l0 = { passive: !1 }, En = { capture: !0, passive: !1 };
function hr(t) {
  t.stopImmediatePropagation();
}
function nn(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function c0(t) {
  var n = t.document.documentElement, e = O(t).on("dragstart.drag", nn, En);
  "onselectstart" in n ? e.on("selectstart.drag", nn, En) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function f0(t, n) {
  var e = t.document.documentElement, r = O(t).on("dragstart.drag", null);
  n && (r.on("click.drag", nn, En), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const te = (t) => () => t;
function Rr(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: l,
  dy: u,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Rr.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function h0(t) {
  return !t.ctrlKey && !t.button;
}
function p0() {
  return this.parentNode;
}
function d0(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function g0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _0() {
  var t = h0, n = p0, e = d0, r = g0, i = {}, o = gi("start", "drag", "end"), a = 0, s, l, u, c, h = 0;
  function f(g) {
    g.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", x, l0).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(g, v) {
    if (!(c || !t.call(this, g, v))) {
      var S = M(this, n.call(this, g, v), g, v, "mouse");
      S && (O(g.view).on("mousemove.drag", d, En).on("mouseup.drag", _, En), c0(g.view), hr(g), u = !1, s = g.clientX, l = g.clientY, S("start", g));
    }
  }
  function d(g) {
    if (nn(g), !u) {
      var v = g.clientX - s, S = g.clientY - l;
      u = v * v + S * S > h;
    }
    i.mouse("drag", g);
  }
  function _(g) {
    O(g.view).on("mousemove.drag mouseup.drag", null), f0(g.view, u), nn(g), i.mouse("end", g);
  }
  function w(g, v) {
    if (t.call(this, g, v)) {
      var S = g.changedTouches, P = n.call(this, g, v), z = S.length, B, H;
      for (B = 0; B < z; ++B)
        (H = M(this, P, g, v, S[B].identifier, S[B])) && (hr(g), H("start", g, S[B]));
    }
  }
  function x(g) {
    var v = g.changedTouches, S = v.length, P, z;
    for (P = 0; P < S; ++P)
      (z = i[v[P].identifier]) && (nn(g), z("drag", g, v[P]));
  }
  function m(g) {
    var v = g.changedTouches, S = v.length, P, z;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < S; ++P)
      (z = i[v[P].identifier]) && (hr(g), z("end", g, v[P]));
  }
  function M(g, v, S, P, z, B) {
    var H = o.copy(), y = vo(B || S, v), C, k, I;
    if ((I = e.call(g, new Rr("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: z,
      active: a,
      x: y[0],
      y: y[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), P)) != null)
      return C = I.x - y[0] || 0, k = I.y - y[1] || 0, function Nt(L, U, V) {
        var E = y, lr;
        switch (L) {
          case "start":
            i[z] = Nt, lr = a++;
            break;
          case "end":
            delete i[z], --a;
          // falls through
          case "drag":
            y = vo(V || U, v), lr = a;
            break;
        }
        H.call(
          L,
          g,
          new Rr(L, {
            sourceEvent: U,
            subject: I,
            target: f,
            identifier: z,
            active: lr,
            x: y[0] + C,
            y: y[1] + k,
            dx: y[0] - E[0],
            dy: y[1] - E[1],
            dispatch: H
          }),
          P
        );
      };
  }
  return f.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : te(!!g), f) : t;
  }, f.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : te(g), f) : n;
  }, f.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : te(g), f) : e;
  }, f.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : te(!!g), f) : r;
  }, f.on = function() {
    var g = o.on.apply(o, arguments);
    return g === o ? f : g;
  }, f.clickDistance = function(g) {
    return arguments.length ? (h = (g = +g) * g, f) : Math.sqrt(h);
  }, f;
}
function vi(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ks(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Bn() {
}
var On = 0.7, Pe = 1 / On, en = "\\s*([+-]?\\d+)\\s*", zn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", it = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", y0 = /^#([0-9a-f]{3,8})$/, v0 = new RegExp(`^rgb\\(${en},${en},${en}\\)$`), m0 = new RegExp(`^rgb\\(${it},${it},${it}\\)$`), w0 = new RegExp(`^rgba\\(${en},${en},${en},${zn}\\)$`), b0 = new RegExp(`^rgba\\(${it},${it},${it},${zn}\\)$`), x0 = new RegExp(`^hsl\\(${zn},${it},${it}\\)$`), M0 = new RegExp(`^hsla\\(${zn},${it},${it},${zn}\\)$`), mo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
vi(Bn, Ft, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: wo,
  // Deprecated! Use color.formatHex.
  formatHex: wo,
  formatHex8: $0,
  formatHsl: A0,
  formatRgb: bo,
  toString: bo
});
function wo() {
  return this.rgb().formatHex();
}
function $0() {
  return this.rgb().formatHex8();
}
function A0() {
  return Ts(this).formatHsl();
}
function bo() {
  return this.rgb().formatRgb();
}
function Ft(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = y0.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? xo(n) : e === 3 ? new j(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? ne(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? ne(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = v0.exec(t)) ? new j(n[1], n[2], n[3], 1) : (n = m0.exec(t)) ? new j(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = w0.exec(t)) ? ne(n[1], n[2], n[3], n[4]) : (n = b0.exec(t)) ? ne(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = x0.exec(t)) ? Ao(n[1], n[2] / 100, n[3] / 100, 1) : (n = M0.exec(t)) ? Ao(n[1], n[2] / 100, n[3] / 100, n[4]) : mo.hasOwnProperty(t) ? xo(mo[t]) : t === "transparent" ? new j(NaN, NaN, NaN, 0) : null;
}
function xo(t) {
  return new j(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ne(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new j(t, n, e, r);
}
function k0(t) {
  return t instanceof Bn || (t = Ft(t)), t ? (t = t.rgb(), new j(t.r, t.g, t.b, t.opacity)) : new j();
}
function jr(t, n, e, r) {
  return arguments.length === 1 ? k0(t) : new j(t, n, e, r ?? 1);
}
function j(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
vi(j, jr, ks(Bn, {
  brighter(t) {
    return t = t == null ? Pe : Math.pow(Pe, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? On : Math.pow(On, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new j(Rt(this.r), Rt(this.g), Rt(this.b), Ee(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Mo,
  // Deprecated! Use color.formatHex.
  formatHex: Mo,
  formatHex8: T0,
  formatRgb: $o,
  toString: $o
}));
function Mo() {
  return `#${zt(this.r)}${zt(this.g)}${zt(this.b)}`;
}
function T0() {
  return `#${zt(this.r)}${zt(this.g)}${zt(this.b)}${zt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function $o() {
  const t = Ee(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Rt(this.r)}, ${Rt(this.g)}, ${Rt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ee(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Rt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function zt(t) {
  return t = Rt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ao(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new J(t, n, e, r);
}
function Ts(t) {
  if (t instanceof J) return new J(t.h, t.s, t.l, t.opacity);
  if (t instanceof Bn || (t = Ft(t)), !t) return new J();
  if (t instanceof J) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new J(a, s, l, t.opacity);
}
function N0(t, n, e, r) {
  return arguments.length === 1 ? Ts(t) : new J(t, n, e, r ?? 1);
}
function J(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
vi(J, N0, ks(Bn, {
  brighter(t) {
    return t = t == null ? Pe : Math.pow(Pe, t), new J(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? On : Math.pow(On, t), new J(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new j(
      pr(t >= 240 ? t - 240 : t + 120, i, r),
      pr(t, i, r),
      pr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new J(ko(this.h), ee(this.s), ee(this.l), Ee(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Ee(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ko(this.h)}, ${ee(this.s) * 100}%, ${ee(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ko(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ee(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function pr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const mi = (t) => () => t;
function S0(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function P0(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function E0(t) {
  return (t = +t) == 1 ? Ns : function(n, e) {
    return e - n ? P0(n, e, t) : mi(isNaN(n) ? e : n);
  };
}
function Ns(t, n) {
  var e = n - t;
  return e ? S0(t, e) : mi(isNaN(t) ? n : t);
}
const Oe = function t(n) {
  var e = E0(n);
  function r(i, o) {
    var a = e((i = jr(i)).r, (o = jr(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), u = Ns(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function O0(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function z0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function C0(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = wi(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function I0(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function W(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function R0(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = wi(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Lr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, dr = new RegExp(Lr.source, "g");
function j0(t) {
  return function() {
    return t;
  };
}
function L0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Ss(t, n) {
  var e = Lr.lastIndex = dr.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Lr.exec(t)) && (i = dr.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: W(r, i) })), e = dr.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? L0(l[0].x) : j0(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function wi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? mi(n) : (e === "number" ? W : e === "string" ? (r = Ft(n)) ? (n = r, Oe) : Ss : n instanceof Ft ? Oe : n instanceof Date ? I0 : z0(n) ? O0 : Array.isArray(n) ? C0 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? R0 : W)(t, n);
}
function F0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var To = 180 / Math.PI, Ps = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Es(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * To,
    skewX: Math.atan(l) * To,
    scaleX: a,
    scaleY: s
  };
}
var re;
function D0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Ps : Es(n.a, n.b, n.c, n.d, n.e, n.f);
}
function q0(t) {
  return t == null || (re || (re = document.createElementNS("http://www.w3.org/2000/svg", "g")), re.setAttribute("transform", t), !(t = re.transform.baseVal.consolidate())) ? Ps : (t = t.matrix, Es(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Os(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var _ = p.push("translate(", null, n, null, e);
      d.push({ i: _ - 4, x: W(u, h) }, { i: _ - 2, x: W(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function a(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: W(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: W(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: _ - 4, x: W(u, h) }, { i: _ - 2, x: W(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), o(u.translateX, u.translateY, c.translateX, c.translateY, h, f), a(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, _ = f.length, w; ++d < _; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var X0 = Os(D0, "px, ", "px)", "deg)"), B0 = Os(q0, ", ", ")", ")"), un = 0, xn = 0, _n = 0, zs = 1e3, ze, Mn, Ce = 0, Dt = 0, Ue = 0, Cn = typeof performance == "object" && performance.now ? performance : Date, Cs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function bi() {
  return Dt || (Cs(H0), Dt = Cn.now() + Ue);
}
function H0() {
  Dt = 0;
}
function Ie() {
  this._call = this._time = this._next = null;
}
Ie.prototype = Is.prototype = {
  constructor: Ie,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? bi() : +e) + (n == null ? 0 : +n), !this._next && Mn !== this && (Mn ? Mn._next = this : ze = this, Mn = this), this._call = t, this._time = e, Fr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Fr());
  }
};
function Is(t, n, e) {
  var r = new Ie();
  return r.restart(t, n, e), r;
}
function U0() {
  bi(), ++un;
  for (var t = ze, n; t; )
    (n = Dt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --un;
}
function No() {
  Dt = (Ce = Cn.now()) + Ue, un = xn = 0;
  try {
    U0();
  } finally {
    un = 0, Y0(), Dt = 0;
  }
}
function G0() {
  var t = Cn.now(), n = t - Ce;
  n > zs && (Ue -= n, Ce = t);
}
function Y0() {
  for (var t, n = ze, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : ze = e);
  Mn = t, Fr(r);
}
function Fr(t) {
  if (!un) {
    xn && (xn = clearTimeout(xn));
    var n = t - Dt;
    n > 24 ? (t < 1 / 0 && (xn = setTimeout(No, t - Cn.now() - Ue)), _n && (_n = clearInterval(_n))) : (_n || (Ce = Cn.now(), _n = setInterval(G0, zs)), un = 1, Cs(No));
  }
}
function So(t, n, e) {
  var r = new Ie();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var V0 = gi("start", "end", "cancel", "interrupt"), K0 = [], Rs = 0, Po = 1, Dr = 2, de = 3, Eo = 4, qr = 5, ge = 6;
function Ge(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  W0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: V0,
    tween: K0,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Rs
  });
}
function xi(t, n) {
  var e = nt(t, n);
  if (e.state > Rs) throw new Error("too late; already scheduled");
  return e;
}
function st(t, n) {
  var e = nt(t, n);
  if (e.state > de) throw new Error("too late; already running");
  return e;
}
function nt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function W0(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Is(o, 0, e.time);
  function o(u) {
    e.state = Po, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var c, h, f, p;
    if (e.state !== Po) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === de) return So(a);
        p.state === Eo ? (p.state = ge, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = ge, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (So(function() {
      e.state === de && (e.state = Eo, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Dr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Dr) {
      for (e.state = de, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = qr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === qr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = ge, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Z0(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Dr && r.state < qr, r.state = ge, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function J0(t) {
  return this.each(function() {
    Z0(this, t);
  });
}
function Q0(t, n) {
  var e, r;
  return function() {
    var i = st(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function tg(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = st(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function ng(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = nt(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Q0 : tg)(e, t, n));
}
function Mi(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = st(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return nt(i, r).value[n];
  };
}
function js(t, n) {
  var e;
  return (typeof n == "number" ? W : n instanceof Ft ? Oe : (e = Ft(n)) ? (n = e, Oe) : Ss)(t, n);
}
function eg(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function rg(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ig(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function og(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function ag(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function sg(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function ug(t, n) {
  var e = He(t), r = e === "transform" ? B0 : js;
  return this.attrTween(t, typeof n == "function" ? (e.local ? sg : ag)(e, r, Mi(this, "attr." + t, n)) : n == null ? (e.local ? rg : eg)(e) : (e.local ? og : ig)(e, r, n));
}
function lg(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function cg(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function fg(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && cg(t, o)), e;
  }
  return i._value = n, i;
}
function hg(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && lg(t, o)), e;
  }
  return i._value = n, i;
}
function pg(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = He(t);
  return this.tween(e, (r.local ? fg : hg)(r, n));
}
function dg(t, n) {
  return function() {
    xi(this, t).delay = +n.apply(this, arguments);
  };
}
function gg(t, n) {
  return n = +n, function() {
    xi(this, t).delay = n;
  };
}
function _g(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? dg : gg)(n, t)) : nt(this.node(), n).delay;
}
function yg(t, n) {
  return function() {
    st(this, t).duration = +n.apply(this, arguments);
  };
}
function vg(t, n) {
  return n = +n, function() {
    st(this, t).duration = n;
  };
}
function mg(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? yg : vg)(n, t)) : nt(this.node(), n).duration;
}
function wg(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    st(this, t).ease = n;
  };
}
function bg(t) {
  var n = this._id;
  return arguments.length ? this.each(wg(n, t)) : nt(this.node(), n).ease;
}
function xg(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    st(this, t).ease = e;
  };
}
function Mg(t) {
  if (typeof t != "function") throw new Error();
  return this.each(xg(this._id, t));
}
function $g(t) {
  typeof t != "function" && (t = _s(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new gt(r, this._parents, this._name, this._id);
}
function Ag(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = a[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    a[s] = n[s];
  return new gt(a, this._parents, this._name, this._id);
}
function kg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Tg(t, n, e) {
  var r, i, o = kg(n) ? xi : st;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function Ng(t, n) {
  var e = this._id;
  return arguments.length < 2 ? nt(this.node(), e).on.on(t) : this.each(Tg(e, t, n));
}
function Sg(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Pg() {
  return this.on("end.remove", Sg(this._id));
}
function Eg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = _i(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Ge(u[f], n, e, f, u, nt(c, e)));
  return new gt(o, this._parents, n, e);
}
function Og(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = gs(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = nt(c, e), _ = 0, w = f.length; _ < w; ++_)
          (p = f[_]) && Ge(p, n, e, _, f, d);
        o.push(f), a.push(c);
      }
  return new gt(o, a, n, e);
}
var zg = Xn.prototype.constructor;
function Cg() {
  return new zg(this._groups, this._parents);
}
function Ig(t, n) {
  var e, r, i;
  return function() {
    var o = sn(this, t), a = (this.style.removeProperty(t), sn(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Ls(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Rg(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = sn(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function jg(t, n, e) {
  var r, i, o;
  return function() {
    var a = sn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), sn(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function Lg(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = st(this, t), u = l.on, c = l.value[o] == null ? s || (s = Ls(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(a, i = c), l.on = r;
  };
}
function Fg(t, n, e) {
  var r = (t += "") == "transform" ? X0 : js;
  return n == null ? this.styleTween(t, Ig(t, r)).on("end.style." + t, Ls(t)) : typeof n == "function" ? this.styleTween(t, jg(t, r, Mi(this, "style." + t, n))).each(Lg(this._id, t)) : this.styleTween(t, Rg(t, r, n), e).on("end.style." + t, null);
}
function Dg(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function qg(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Dg(t, a, e)), r;
  }
  return o._value = n, o;
}
function Xg(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, qg(t, n, e ?? ""));
}
function Bg(t) {
  return function() {
    this.textContent = t;
  };
}
function Hg(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Ug(t) {
  return this.tween("text", typeof t == "function" ? Hg(Mi(this, "text", t)) : Bg(t == null ? "" : t + ""));
}
function Gg(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Yg(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Gg(i)), n;
  }
  return r._value = t, r;
}
function Vg(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Yg(t));
}
function Kg() {
  for (var t = this._name, n = this._id, e = Fs(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = nt(l, n);
        Ge(l, t, e, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new gt(r, this._parents, t, e);
}
function Wg() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = st(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && o();
  });
}
var Zg = 0;
function gt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Fs() {
  return ++Zg;
}
var lt = Xn.prototype;
gt.prototype = {
  constructor: gt,
  select: Eg,
  selectAll: Og,
  selectChild: lt.selectChild,
  selectChildren: lt.selectChildren,
  filter: $g,
  merge: Ag,
  selection: Cg,
  transition: Kg,
  call: lt.call,
  nodes: lt.nodes,
  node: lt.node,
  size: lt.size,
  empty: lt.empty,
  each: lt.each,
  on: Ng,
  attr: ug,
  attrTween: pg,
  style: Fg,
  styleTween: Xg,
  text: Ug,
  textTween: Vg,
  remove: Pg,
  tween: ng,
  delay: _g,
  duration: mg,
  ease: bg,
  easeVarying: Mg,
  end: Wg,
  [Symbol.iterator]: lt[Symbol.iterator]
};
function Jg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Qg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Jg
};
function t_(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function n_(t) {
  var n, e;
  t instanceof gt ? (n = t._id, t = t._name) : (n = Fs(), (e = Qg).time = bi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Ge(l, t, n, u, a, e || t_(l, n));
  return new gt(r, this._parents, t, n);
}
Xn.prototype.interrupt = J0;
Xn.prototype.transition = n_;
const Xr = Math.PI, Br = 2 * Xr, Et = 1e-6, e_ = Br - Et;
function Ds(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function r_(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Ds;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class qs {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Ds : r_(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, l = r - n, u = i - e, c = a - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > Et) if (!(Math.abs(h * l - u * c) > Et) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, d = i - s, _ = l * l + u * u, w = p * p + d * d, x = Math.sqrt(_), m = Math.sqrt(f), M = o * Math.tan((Xr - Math.acos((_ + f - w) / (2 * x * m))) / 2), g = M / m, v = M / x;
      Math.abs(g - 1) > Et && this._append`L${n + g * c},${e + g * h}`, this._append`A${o},${o},0,0,${+(h * p > c * d)},${this._x1 = n + v * l},${this._y1 = e + v * u}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ a, f = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Et || Math.abs(this._y1 - c) > Et) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Br + Br), f > e_ ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Et && this._append`A${r},${r},0,${+(f >= Xr)},${h},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function et() {
  return new qs();
}
et.prototype = qs.prototype;
function i_(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Re(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function ln(t) {
  return t = Re(Math.abs(t)), t ? t[1] : NaN;
}
function o_(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function a_(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var s_ = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function je(t) {
  if (!(n = s_.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new $i({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
je.prototype = $i.prototype;
function $i(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
$i.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function u_(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Xs;
function l_(t, n) {
  var e = Re(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Xs = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Re(t, Math.max(0, n + o - 1))[0];
}
function Oo(t, n) {
  var e = Re(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const zo = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: i_,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Oo(t * 100, n),
  r: Oo,
  s: l_,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Co(t) {
  return t;
}
var Io = Array.prototype.map, Ro = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function c_(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Co : o_(Io.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Co : a_(Io.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = je(h);
    var f = h.fill, p = h.align, d = h.sign, _ = h.symbol, w = h.zero, x = h.width, m = h.comma, M = h.precision, g = h.trim, v = h.type;
    v === "n" ? (m = !0, v = "g") : zo[v] || (M === void 0 && (M = 12), g = !0, v = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var S = _ === "$" ? e : _ === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = _ === "$" ? r : /[%p]/.test(v) ? a : "", z = zo[v], B = /[defgprs%]/.test(v);
    M = M === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(y) {
      var C = S, k = P, I, Nt, L;
      if (v === "c")
        k = z(y) + k, y = "";
      else {
        y = +y;
        var U = y < 0 || 1 / y < 0;
        if (y = isNaN(y) ? l : z(Math.abs(y), M), g && (y = u_(y)), U && +y == 0 && d !== "+" && (U = !1), C = (U ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, k = (v === "s" ? Ro[8 + Xs / 3] : "") + k + (U && d === "(" ? ")" : ""), B) {
          for (I = -1, Nt = y.length; ++I < Nt; )
            if (L = y.charCodeAt(I), 48 > L || L > 57) {
              k = (L === 46 ? i + y.slice(I + 1) : y.slice(I)) + k, y = y.slice(0, I);
              break;
            }
        }
      }
      m && !w && (y = n(y, 1 / 0));
      var V = C.length + y.length + k.length, E = V < x ? new Array(x - V + 1).join(f) : "";
      switch (m && w && (y = n(E + y, E.length ? x - k.length : 1 / 0), E = ""), p) {
        case "<":
          y = C + y + k + E;
          break;
        case "=":
          y = C + E + y + k;
          break;
        case "^":
          y = E.slice(0, V = E.length >> 1) + C + y + k + E.slice(V);
          break;
        default:
          y = E + C + y + k;
          break;
      }
      return o(y);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function c(h, f) {
    var p = u((h = je(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(ln(f) / 3))) * 3, _ = Math.pow(10, -d), w = Ro[8 + d / 3];
    return function(x) {
      return p(_ * x) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var ie, Ai, Bs;
f_({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function f_(t) {
  return ie = c_(t), Ai = ie.format, Bs = ie.formatPrefix, ie;
}
function h_(t) {
  return Math.max(0, -ln(Math.abs(t)));
}
function p_(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ln(n) / 3))) * 3 - ln(Math.abs(t)));
}
function d_(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, ln(n) - ln(t)) + 1;
}
function g_(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function __(t) {
  return function() {
    return t;
  };
}
function y_(t) {
  return +t;
}
var jo = [0, 1];
function Jt(t) {
  return t;
}
function Hr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : __(isNaN(n) ? NaN : 0.5);
}
function v_(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function m_(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Hr(i, r), o = e(a, o)) : (r = Hr(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function w_(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Hr(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var l = wp(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function b_(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function x_() {
  var t = jo, n = jo, e = wi, r, i, o, a = Jt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return a !== Jt && (a = v_(t[0], t[f - 1])), s = f > 2 ? w_ : m_, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (l || (l = s(t.map(r), n, e)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = s(n, t.map(r), W)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, y_), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = F0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Jt, c()) : a !== Jt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function M_() {
  return x_()(Jt, Jt);
}
function $_(t, n, e, r) {
  var i = Ap(t, n, e), o;
  switch (r = je(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = p_(i, a)) && (r.precision = o), Bs(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = d_(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = h_(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Ai(r);
}
function A_(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return $p(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return $_(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, c = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); c-- > 0; ) {
      if (u = Cr(a, s, e), u === l)
        return r[i] = a, r[o] = s, n(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function In() {
  var t = M_();
  return t.copy = function() {
    return b_(t, In());
  }, g_.apply(t, arguments), A_(t);
}
function $n(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
$n.prototype = {
  constructor: $n,
  scale: function(t) {
    return t === 1 ? this : new $n(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new $n(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
$n.prototype;
var Hs = typeof global == "object" && global && global.Object === Object && global, k_ = typeof self == "object" && self && self.Object === Object && self, yt = Hs || k_ || Function("return this")(), ot = yt.Symbol, Us = Object.prototype, T_ = Us.hasOwnProperty, N_ = Us.toString, yn = ot ? ot.toStringTag : void 0;
function S_(t) {
  var n = T_.call(t, yn), e = t[yn];
  try {
    t[yn] = void 0;
    var r = !0;
  } catch {
  }
  var i = N_.call(t);
  return r && (n ? t[yn] = e : delete t[yn]), i;
}
var P_ = Object.prototype, E_ = P_.toString;
function O_(t) {
  return E_.call(t);
}
var z_ = "[object Null]", C_ = "[object Undefined]", Lo = ot ? ot.toStringTag : void 0;
function pn(t) {
  return t == null ? t === void 0 ? C_ : z_ : Lo && Lo in Object(t) ? S_(t) : O_(t);
}
function cn(t) {
  return t != null && typeof t == "object";
}
var I_ = "[object Symbol]";
function Ye(t) {
  return typeof t == "symbol" || cn(t) && pn(t) == I_;
}
function Gs(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var Q = Array.isArray, Fo = ot ? ot.prototype : void 0, Do = Fo ? Fo.toString : void 0;
function Ys(t) {
  if (typeof t == "string")
    return t;
  if (Q(t))
    return Gs(t, Ys) + "";
  if (Ye(t))
    return Do ? Do.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var R_ = /\s/;
function j_(t) {
  for (var n = t.length; n-- && R_.test(t.charAt(n)); )
    ;
  return n;
}
var L_ = /^\s+/;
function F_(t) {
  return t && t.slice(0, j_(t) + 1).replace(L_, "");
}
function fn(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var qo = NaN, D_ = /^[-+]0x[0-9a-f]+$/i, q_ = /^0b[01]+$/i, X_ = /^0o[0-7]+$/i, B_ = parseInt;
function H_(t) {
  if (typeof t == "number")
    return t;
  if (Ye(t))
    return qo;
  if (fn(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = fn(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = F_(t);
  var e = q_.test(t);
  return e || X_.test(t) ? B_(t.slice(2), e ? 2 : 8) : D_.test(t) ? qo : +t;
}
var U_ = 1 / 0, G_ = 17976931348623157e292;
function gr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = H_(t), t === U_ || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * G_;
  }
  return t === t ? t : 0;
}
function Y_(t) {
  return t;
}
var V_ = "[object AsyncFunction]", K_ = "[object Function]", W_ = "[object GeneratorFunction]", Z_ = "[object Proxy]";
function Vs(t) {
  if (!fn(t))
    return !1;
  var n = pn(t);
  return n == K_ || n == W_ || n == V_ || n == Z_;
}
var _r = yt["__core-js_shared__"], Xo = function() {
  var t = /[^.]+$/.exec(_r && _r.keys && _r.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function J_(t) {
  return !!Xo && Xo in t;
}
var Q_ = Function.prototype, ty = Q_.toString;
function Gt(t) {
  if (t != null) {
    try {
      return ty.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var ny = /[\\^$.*+?()[\]{}|]/g, ey = /^\[object .+?Constructor\]$/, ry = Function.prototype, iy = Object.prototype, oy = ry.toString, ay = iy.hasOwnProperty, sy = RegExp(
  "^" + oy.call(ay).replace(ny, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function uy(t) {
  if (!fn(t) || J_(t))
    return !1;
  var n = Vs(t) ? sy : ey;
  return n.test(Gt(t));
}
function ly(t, n) {
  return t == null ? void 0 : t[n];
}
function dn(t, n) {
  var e = ly(t, n);
  return uy(e) ? e : void 0;
}
var Ur = dn(yt, "WeakMap"), cy = 9007199254740991, fy = /^(?:0|[1-9]\d*)$/;
function ki(t, n) {
  var e = typeof t;
  return n = n ?? cy, !!n && (e == "number" || e != "symbol" && fy.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Ti(t, n) {
  return t === n || t !== t && n !== n;
}
var hy = 9007199254740991;
function Ni(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= hy;
}
function Ve(t) {
  return t != null && Ni(t.length) && !Vs(t);
}
function py(t, n, e) {
  if (!fn(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Ve(e) && ki(n, e.length) : r == "string" && n in e) ? Ti(e[n], t) : !1;
}
var dy = Object.prototype;
function gy(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || dy;
  return t === e;
}
function _y(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var yy = "[object Arguments]";
function Bo(t) {
  return cn(t) && pn(t) == yy;
}
var Ks = Object.prototype, vy = Ks.hasOwnProperty, my = Ks.propertyIsEnumerable, Si = Bo(/* @__PURE__ */ function() {
  return arguments;
}()) ? Bo : function(t) {
  return cn(t) && vy.call(t, "callee") && !my.call(t, "callee");
};
function wy() {
  return !1;
}
var Ws = typeof exports == "object" && exports && !exports.nodeType && exports, Ho = Ws && typeof module == "object" && module && !module.nodeType && module, by = Ho && Ho.exports === Ws, Uo = by ? yt.Buffer : void 0, xy = Uo ? Uo.isBuffer : void 0, Gr = xy || wy, My = "[object Arguments]", $y = "[object Array]", Ay = "[object Boolean]", ky = "[object Date]", Ty = "[object Error]", Ny = "[object Function]", Sy = "[object Map]", Py = "[object Number]", Ey = "[object Object]", Oy = "[object RegExp]", zy = "[object Set]", Cy = "[object String]", Iy = "[object WeakMap]", Ry = "[object ArrayBuffer]", jy = "[object DataView]", Ly = "[object Float32Array]", Fy = "[object Float64Array]", Dy = "[object Int8Array]", qy = "[object Int16Array]", Xy = "[object Int32Array]", By = "[object Uint8Array]", Hy = "[object Uint8ClampedArray]", Uy = "[object Uint16Array]", Gy = "[object Uint32Array]", T = {};
T[Ly] = T[Fy] = T[Dy] = T[qy] = T[Xy] = T[By] = T[Hy] = T[Uy] = T[Gy] = !0;
T[My] = T[$y] = T[Ry] = T[Ay] = T[jy] = T[ky] = T[Ty] = T[Ny] = T[Sy] = T[Py] = T[Ey] = T[Oy] = T[zy] = T[Cy] = T[Iy] = !1;
function Yy(t) {
  return cn(t) && Ni(t.length) && !!T[pn(t)];
}
function Vy(t) {
  return function(n) {
    return t(n);
  };
}
var Zs = typeof exports == "object" && exports && !exports.nodeType && exports, An = Zs && typeof module == "object" && module && !module.nodeType && module, Ky = An && An.exports === Zs, yr = Ky && Hs.process, Go = function() {
  try {
    var t = An && An.require && An.require("util").types;
    return t || yr && yr.binding && yr.binding("util");
  } catch {
  }
}(), Yo = Go && Go.isTypedArray, Js = Yo ? Vy(Yo) : Yy, Wy = Object.prototype, Zy = Wy.hasOwnProperty;
function Jy(t, n) {
  var e = Q(t), r = !e && Si(t), i = !e && !r && Gr(t), o = !e && !r && !i && Js(t), a = e || r || i || o, s = a ? _y(t.length, String) : [], l = s.length;
  for (var u in t)
    Zy.call(t, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ki(u, l))) && s.push(u);
  return s;
}
function Qy(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var tv = Qy(Object.keys, Object), nv = Object.prototype, ev = nv.hasOwnProperty;
function rv(t) {
  if (!gy(t))
    return tv(t);
  var n = [];
  for (var e in Object(t))
    ev.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Pi(t) {
  return Ve(t) ? Jy(t) : rv(t);
}
var iv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ov = /^\w*$/;
function Ei(t, n) {
  if (Q(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Ye(t) ? !0 : ov.test(t) || !iv.test(t) || n != null && t in Object(n);
}
var Rn = dn(Object, "create");
function av() {
  this.__data__ = Rn ? Rn(null) : {}, this.size = 0;
}
function sv(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var uv = "__lodash_hash_undefined__", lv = Object.prototype, cv = lv.hasOwnProperty;
function fv(t) {
  var n = this.__data__;
  if (Rn) {
    var e = n[t];
    return e === uv ? void 0 : e;
  }
  return cv.call(n, t) ? n[t] : void 0;
}
var hv = Object.prototype, pv = hv.hasOwnProperty;
function dv(t) {
  var n = this.__data__;
  return Rn ? n[t] !== void 0 : pv.call(n, t);
}
var gv = "__lodash_hash_undefined__";
function _v(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Rn && n === void 0 ? gv : n, this;
}
function qt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
qt.prototype.clear = av;
qt.prototype.delete = sv;
qt.prototype.get = fv;
qt.prototype.has = dv;
qt.prototype.set = _v;
function yv() {
  this.__data__ = [], this.size = 0;
}
function Ke(t, n) {
  for (var e = t.length; e--; )
    if (Ti(t[e][0], n))
      return e;
  return -1;
}
var vv = Array.prototype, mv = vv.splice;
function wv(t) {
  var n = this.__data__, e = Ke(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : mv.call(n, e, 1), --this.size, !0;
}
function bv(t) {
  var n = this.__data__, e = Ke(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function xv(t) {
  return Ke(this.__data__, t) > -1;
}
function Mv(t, n) {
  var e = this.__data__, r = Ke(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function vt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
vt.prototype.clear = yv;
vt.prototype.delete = wv;
vt.prototype.get = bv;
vt.prototype.has = xv;
vt.prototype.set = Mv;
var jn = dn(yt, "Map");
function $v() {
  this.size = 0, this.__data__ = {
    hash: new qt(),
    map: new (jn || vt)(),
    string: new qt()
  };
}
function Av(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function We(t, n) {
  var e = t.__data__;
  return Av(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function kv(t) {
  var n = We(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Tv(t) {
  return We(this, t).get(t);
}
function Nv(t) {
  return We(this, t).has(t);
}
function Sv(t, n) {
  var e = We(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function mt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = $v;
mt.prototype.delete = kv;
mt.prototype.get = Tv;
mt.prototype.has = Nv;
mt.prototype.set = Sv;
var Pv = "Expected a function";
function Oi(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Pv);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Oi.Cache || mt)(), e;
}
Oi.Cache = mt;
var Ev = 500;
function Ov(t) {
  var n = Oi(t, function(r) {
    return e.size === Ev && e.clear(), r;
  }), e = n.cache;
  return n;
}
var zv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Cv = /\\(\\)?/g, Iv = Ov(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(zv, function(e, r, i, o) {
    n.push(i ? o.replace(Cv, "$1") : r || e);
  }), n;
});
function Rv(t) {
  return t == null ? "" : Ys(t);
}
function Qs(t, n) {
  return Q(t) ? t : Ei(t, n) ? [t] : Iv(Rv(t));
}
function Ze(t) {
  if (typeof t == "string" || Ye(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function tu(t, n) {
  n = Qs(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Ze(n[e++])];
  return e && e == r ? t : void 0;
}
function jv(t, n, e) {
  var r = t == null ? void 0 : tu(t, n);
  return r === void 0 ? e : r;
}
function nu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Vo = ot ? ot.isConcatSpreadable : void 0;
function Lv(t) {
  return Q(t) || Si(t) || !!(Vo && t && t[Vo]);
}
function Fv(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Lv), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? nu(i, s) : i[i.length] = s;
  }
  return i;
}
function Dv(t) {
  var n = t == null ? 0 : t.length;
  return n ? Fv(t) : [];
}
function qv() {
  this.__data__ = new vt(), this.size = 0;
}
function Xv(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Bv(t) {
  return this.__data__.get(t);
}
function Hv(t) {
  return this.__data__.has(t);
}
var Uv = 200;
function Gv(t, n) {
  var e = this.__data__;
  if (e instanceof vt) {
    var r = e.__data__;
    if (!jn || r.length < Uv - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new mt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ht(t) {
  var n = this.__data__ = new vt(t);
  this.size = n.size;
}
ht.prototype.clear = qv;
ht.prototype.delete = Xv;
ht.prototype.get = Bv;
ht.prototype.has = Hv;
ht.prototype.set = Gv;
function Yv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Vv() {
  return [];
}
var Kv = Object.prototype, Wv = Kv.propertyIsEnumerable, Ko = Object.getOwnPropertySymbols, Zv = Ko ? function(t) {
  return t == null ? [] : (t = Object(t), Yv(Ko(t), function(n) {
    return Wv.call(t, n);
  }));
} : Vv;
function Jv(t, n, e) {
  var r = n(t);
  return Q(t) ? r : nu(r, e(t));
}
function Wo(t) {
  return Jv(t, Pi, Zv);
}
var Yr = dn(yt, "DataView"), Vr = dn(yt, "Promise"), Kr = dn(yt, "Set"), Zo = "[object Map]", Qv = "[object Object]", Jo = "[object Promise]", Qo = "[object Set]", ta = "[object WeakMap]", na = "[object DataView]", tm = Gt(Yr), nm = Gt(jn), em = Gt(Vr), rm = Gt(Kr), im = Gt(Ur), Mt = pn;
(Yr && Mt(new Yr(new ArrayBuffer(1))) != na || jn && Mt(new jn()) != Zo || Vr && Mt(Vr.resolve()) != Jo || Kr && Mt(new Kr()) != Qo || Ur && Mt(new Ur()) != ta) && (Mt = function(t) {
  var n = pn(t), e = n == Qv ? t.constructor : void 0, r = e ? Gt(e) : "";
  if (r)
    switch (r) {
      case tm:
        return na;
      case nm:
        return Zo;
      case em:
        return Jo;
      case rm:
        return Qo;
      case im:
        return ta;
    }
  return n;
});
var ea = yt.Uint8Array, om = "__lodash_hash_undefined__";
function am(t) {
  return this.__data__.set(t, om), this;
}
function sm(t) {
  return this.__data__.has(t);
}
function Le(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new mt(); ++n < e; )
    this.add(t[n]);
}
Le.prototype.add = Le.prototype.push = am;
Le.prototype.has = sm;
function um(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function lm(t, n) {
  return t.has(n);
}
var cm = 1, fm = 2;
function eu(t, n, e, r, i, o) {
  var a = e & cm, s = t.length, l = n.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), c = o.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & fm ? new Le() : void 0;
  for (o.set(t, n), o.set(n, t); ++h < s; ) {
    var d = t[h], _ = n[h];
    if (r)
      var w = a ? r(_, d, h, n, t, o) : r(d, _, h, t, n, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!um(n, function(x, m) {
        if (!lm(p, m) && (d === x || i(d, x, e, r, o)))
          return p.push(m);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, e, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), f;
}
function hm(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function pm(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var dm = 1, gm = 2, _m = "[object Boolean]", ym = "[object Date]", vm = "[object Error]", mm = "[object Map]", wm = "[object Number]", bm = "[object RegExp]", xm = "[object Set]", Mm = "[object String]", $m = "[object Symbol]", Am = "[object ArrayBuffer]", km = "[object DataView]", ra = ot ? ot.prototype : void 0, vr = ra ? ra.valueOf : void 0;
function Tm(t, n, e, r, i, o, a) {
  switch (e) {
    case km:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Am:
      return !(t.byteLength != n.byteLength || !o(new ea(t), new ea(n)));
    case _m:
    case ym:
    case wm:
      return Ti(+t, +n);
    case vm:
      return t.name == n.name && t.message == n.message;
    case bm:
    case Mm:
      return t == n + "";
    case mm:
      var s = hm;
    case xm:
      var l = r & dm;
      if (s || (s = pm), t.size != n.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == n;
      r |= gm, a.set(t, n);
      var c = eu(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case $m:
      if (vr)
        return vr.call(t) == vr.call(n);
  }
  return !1;
}
var Nm = 1, Sm = Object.prototype, Pm = Sm.hasOwnProperty;
function Em(t, n, e, r, i, o) {
  var a = e & Nm, s = Wo(t), l = s.length, u = Wo(n), c = u.length;
  if (l != c && !a)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(a ? f in n : Pm.call(n, f)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var _ = !0;
  o.set(t, n), o.set(n, t);
  for (var w = a; ++h < l; ) {
    f = s[h];
    var x = t[f], m = n[f];
    if (r)
      var M = a ? r(m, x, f, n, t, o) : r(x, m, f, t, n, o);
    if (!(M === void 0 ? x === m || i(x, m, e, r, o) : M)) {
      _ = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (_ && !w) {
    var g = t.constructor, v = n.constructor;
    g != v && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof v == "function" && v instanceof v) && (_ = !1);
  }
  return o.delete(t), o.delete(n), _;
}
var Om = 1, ia = "[object Arguments]", oa = "[object Array]", oe = "[object Object]", zm = Object.prototype, aa = zm.hasOwnProperty;
function Cm(t, n, e, r, i, o) {
  var a = Q(t), s = Q(n), l = a ? oa : Mt(t), u = s ? oa : Mt(n);
  l = l == ia ? oe : l, u = u == ia ? oe : u;
  var c = l == oe, h = u == oe, f = l == u;
  if (f && Gr(t)) {
    if (!Gr(n))
      return !1;
    a = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new ht()), a || Js(t) ? eu(t, n, e, r, i, o) : Tm(t, n, l, e, r, i, o);
  if (!(e & Om)) {
    var p = c && aa.call(t, "__wrapped__"), d = h && aa.call(n, "__wrapped__");
    if (p || d) {
      var _ = p ? t.value() : t, w = d ? n.value() : n;
      return o || (o = new ht()), i(_, w, e, r, o);
    }
  }
  return f ? (o || (o = new ht()), Em(t, n, e, r, i, o)) : !1;
}
function zi(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !cn(t) && !cn(n) ? t !== t && n !== n : Cm(t, n, e, r, zi, i);
}
var Im = 1, Rm = 2;
function jm(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], l = t[s], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new ht(), h;
      if (!(h === void 0 ? zi(u, l, Im | Rm, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function ru(t) {
  return t === t && !fn(t);
}
function Lm(t) {
  for (var n = Pi(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, ru(i)];
  }
  return n;
}
function iu(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function Fm(t) {
  var n = Lm(t);
  return n.length == 1 && n[0][2] ? iu(n[0][0], n[0][1]) : function(e) {
    return e === t || jm(e, t, n);
  };
}
function Dm(t, n) {
  return t != null && n in Object(t);
}
function qm(t, n, e) {
  n = Qs(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Ze(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Ni(i) && ki(a, i) && (Q(t) || Si(t)));
}
function Xm(t, n) {
  return t != null && qm(t, n, Dm);
}
var Bm = 1, Hm = 2;
function Um(t, n) {
  return Ei(t) && ru(n) ? iu(Ze(t), n) : function(e) {
    var r = jv(e, t);
    return r === void 0 && r === n ? Xm(e, t) : zi(n, r, Bm | Hm);
  };
}
function Gm(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function Ym(t) {
  return function(n) {
    return tu(n, t);
  };
}
function Vm(t) {
  return Ei(t) ? Gm(Ze(t)) : Ym(t);
}
function Km(t) {
  return typeof t == "function" ? t : t == null ? Y_ : typeof t == "object" ? Q(t) ? Um(t[0], t[1]) : Fm(t) : Vm(t);
}
function Wm(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var Zm = Wm();
function Jm(t, n) {
  return t && Zm(t, n, Pi);
}
function Qm(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Ve(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var t1 = Qm(Jm);
function n1(t, n) {
  var e = -1, r = Ve(t) ? Array(t.length) : [];
  return t1(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function sa(t, n) {
  var e = Q(t) ? Gs : n1;
  return e(t, Km(n));
}
var e1 = Math.ceil, r1 = Math.max;
function i1(t, n, e, r) {
  for (var i = -1, o = r1(e1((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function o1(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && py(n, e, r) && (e = r = void 0), n = gr(n), e === void 0 ? (e = n, n = 0) : e = gr(e), r = r === void 0 ? n < e ? 1 : -1 : gr(r), i1(n, e, r);
  };
}
var a1 = o1();
const s1 = (t, n, e = 12, r = 12) => {
  const i = In().domain([0, e]).range([0, t]), o = In().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return a1((e + 1) * (r + 1)).map(function(a) {
        return { m: a % (e + 1), n: Math.floor(a / (e + 1)), x: i(a % (e + 1)), y: o(Math.floor(a / (e + 1))) };
      });
    },
    position: function(a, s) {
      typeof a == "number" && (a = [a]), typeof s == "number" && (s = [s]);
      const l = Dv(sa(s, function(u) {
        return sa(
          a,
          function(c) {
            return { x: i(c), y: o(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, u1 = "_widget_9wct0_49", l1 = "_label_9wct0_69", c1 = "_lit_9wct0_74", f1 = "_button_9wct0_78", h1 = "_symbol_9wct0_78", p1 = "_radio_9wct0_79", d1 = "_radiobutton_9wct0_79", g1 = "_selected_9wct0_85", _1 = "_toggle_9wct0_86", y1 = "_slider_9wct0_95", v1 = "_track_9wct0_95", m1 = "_track_overlay_9wct0_100", w1 = "_handle_9wct0_108", b = {
  widget: u1,
  label: l1,
  lit: c1,
  button: f1,
  symbol: h1,
  radio: p1,
  radiobutton: d1,
  selected: g1,
  toggle: _1,
  slider: y1,
  track: v1,
  track_overlay: m1,
  handle: w1
}, Ci = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, Ii = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, b1 = (t = 1) => {
  const n = et();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, x1 = (t = 1) => {
  const n = et(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, M1 = (t = 1) => {
  const n = et();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, $1 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = et();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, A1 = (t = 1) => {
  const n = et(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, l = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, k1 = (t = 1) => {
  const n = et(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, T1 = (t = 1) => {
  const n = et(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var l = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, N1 = (t = 1) => {
  var n = et(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, S1 = (t = 1) => {
  const n = et(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Wr = (t) => {
  switch (t) {
    case "play":
      return b1;
    case "forward":
      return x1;
    case "back":
      return M1;
    case "pause":
      return $1;
    case "reload":
      return A1;
    case "capture":
      return k1;
    case "rewind":
      return T1;
    case "stop":
      return N1;
    case "push":
      return S1;
  }
}, ou = () => {
  const t = "button";
  var n = Ci(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", l = null, u = function(f) {
  }, c = ["play"], h = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    symbolsize: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    shape: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? o.x : (o.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? o.y : (o.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? s : (s = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? l : (l = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return u = f, this;
      u(f);
    },
    actions: function(f) {
      return typeof f > "u" ? c : (c = f, this);
    },
    value: function(f) {
      return typeof f > "u" ? h : (h = f, this);
    },
    click: function() {
      h = (h + 1) % c.length, u(), O(this.parentNode).select("." + b.symbol).attr("d", Wr(c[h])(r * e));
    },
    press: function(f) {
      h = (h + 1) % c.length, u(), f.select("#button_" + n).select("." + b.symbol).attr("d", Wr(c[h])(r * e));
    }
  };
}, au = () => {
  const t = "toggle";
  var n = Ci(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(u) {
  }, l = 0;
  return {
    type: t,
    id: function(u) {
      return typeof u > "u" ? n : (n = u, this);
    },
    size: function(u) {
      return typeof u > "u" ? e : (e = u, this);
    },
    position: function(u) {
      return typeof u > "u" ? r : (r = u, this);
    },
    x: function(u) {
      return typeof u > "u" ? r.x : (r.x = u, this);
    },
    y: function(u) {
      return typeof u > "u" ? r.y : (r.y = u, this);
    },
    label: function(u) {
      return typeof u > "u" ? i : (i = u, this);
    },
    labelposition: function(u) {
      return typeof u > "u" ? o : (o = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? a : (a = u, this);
    },
    update: function(u) {
      if (typeof u == "function")
        return s = u, this;
      s(u);
    },
    value: function(u) {
      return typeof u > "u" ? l : (l = u, this);
    },
    click: function() {
      l = !l;
      const u = O(this.parentNode);
      u.select("." + b.handle).transition().attr("cx", l ? 2 * e : 0), u.classed(b.selected, l), s();
    },
    reset: function(u, c) {
      l = c;
      const h = u.select("#toggle_" + n);
      h.selectAll("." + b.handle).transition().attr("cx", l ? 2 * e : 0), h.classed(b.selected, l), s();
    }
  };
}, P1 = () => {
  const t = "radio";
  var n = Ci(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, l = "right", u = null, c = function(p) {
  }, h = [], f = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    buttonsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    buttonpadding: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    orientation: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? s.x : (s.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? s.y : (s.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return c = p, this;
      c(p);
    },
    choices: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    click: function(p, d) {
      f = d, O(this.parentNode).selectAll("." + b.symbol).classed(b.selected, (_) => _ == f), c();
    },
    reset: function(p, d) {
      f = d, p.select("#radio_" + n).selectAll("." + b.symbol).classed(b.selected, (_) => _ == f), c();
    }
  };
}, E1 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = O(o).attr("class", b.widget + " " + b.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", b.background).on("click", t.click).on("mouseover", function() {
    O(this).classed(b.lit, !0), O(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    O(this).classed(b.lit, !1), O(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), a.append("path").attr("d", Wr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", b.symbol), r) {
    const l = Ii(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return o;
}, su = (t, n) => {
  const e = et();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, O1 = (t, n) => {
  const e = Ai(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = O(l).attr("class", b.widget + " " + b.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2, c = (x) => {
    const m = x && x.sourceEvent ? x.sourceEvent : x;
    return m ? m.clientX != null ? m.clientX : m.touches && m.touches.length ? m.touches[0].clientX : m.changedTouches && m.changedTouches.length ? m.changedTouches[0].clientX : null : null;
  }, h = (x, m) => {
    const M = c(x);
    if (M == null) return null;
    const g = m.getBoundingClientRect(), v = M - g.left, S = m.width && m.width.baseVal ? m.width.baseVal.value : g.width, P = g.width ? S / g.width : 1;
    return v * P - u;
  };
  s.append("path").attr("d", su(t.size(), t.girth())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", b.track_overlay).on("click", function(x) {
    const m = h(x, this);
    if (m == null) return;
    const M = Math.max(0, Math.min(t.size(), m));
    t.value(a.invert(M)), t.update(), t.update_end(), s.selectAll("." + b.handle).attr("cx", a(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
  }).call(
    _0().on("drag", function(x) {
      const m = h(x, this);
      if (m == null) return;
      const M = Math.max(0, Math.min(t.size(), m));
      t.value(a.invert(M)), t.update(), s.selectAll("." + b.handle).attr("cx", a(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(x) {
      t.update_end();
    })
  );
  var f, p, d, _ = "bottom";
  const w = (typeof t.labelpadding == "function" ? t.labelpadding() : 4) || 0;
  return t.fontsize ? p = t.labelposition().match(/bottom/i) != null ? Qn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 + w : -Qn([t.girth() / 2, t.knob()]) - t.fontsize() / 2 - w : p = t.labelposition().match(/bottom/i) != null ? Qn([t.girth() / 2, t.knob()]) + 7 + w : -Qn([t.girth() / 2, t.knob()]) - 7 - w, f = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, d = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", _ = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", b.label).style("text-anchor", d).style("alignment-baseline", _).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + f + "," + p + ")"), l;
}, z1 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = O(a).attr("class", b.widget + " " + b.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(b.selected, t.value() == 1);
  if (s.append("path").attr("d", su(2 * t.size(), 2 * t.size())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", b.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Ii(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return a;
}, C1 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = kp(a), l = In().domain([0, a - 1]).range([0, t.size()]), u = In().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = O(c).attr("class", b.widget + " " + b.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + b.radiobutton).data(s).enter().append("g").attr("class", b.radiobutton).attr("id", (_) => "b" + _).attr("transform", (_) => t.orientation() == "vertical" ? "translate(0," + u(_) + ")" : "translate(" + l(_) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", o / 2)), f.attr("class", b.background).on("mouseover", function() {
    O(this).classed(b.lit, !0), O(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    O(this).classed(b.lit, !1), O(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), p.attr("class", b.symbol), p.filter((_) => _ == t.value()).classed(b.selected, !0), h.on("click", t.click);
  const d = Ii(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", b.label).text(function(_, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), c;
}, ae = (t, n) => {
  switch (t.type) {
    case "button":
      return E1(t);
    case "slider":
      return O1(t);
    case "radio":
      return C1(t);
    case "toggle":
      return z1(t);
  }
}, I1 = "_displayPanel_1no3j_1", R1 = "_controlPanel_1no3j_6", j1 = "_inset_1no3j_12", L1 = "_insetaxis_1no3j_16", F1 = "_pdf_lattice_1no3j_28", D1 = "_pdf_ring_1no3j_33", q1 = "_pdf_gaussian_1no3j_38", X1 = "_pdf_triangular_1no3j_50", G = {
  displayPanel: I1,
  controlPanel: R1,
  inset: j1,
  insetaxis: L1,
  pdf_lattice: F1,
  pdf_ring: D1,
  pdf_gaussian: q1,
  pdf_triangular: X1
}, B1 = (t, n) => {
  const e = s1(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  );
  console.log(t);
  const r = Wc("#" + t).classed(t + " " + n.container_class, !0), i = t + "_display", o = t + "_controls", a = r.append("div").attr("id", i).attr("class", G.displayPanel).classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), s = r.append("div").attr("id", o).attr("class", "d3-widgets " + G.controlPanel).classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && s.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && a.style("border", n.display_border), n.debug && s.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (l) => "translate(" + l.x + "," + l.y + ")").style("fill", "black"), { display: a, controls: s, grid: e };
}, A = {
  widgets: {
    toggle_anchor: { x: 2, y: 7 },
    toggle_label_pos: "right",
    toggle_gap: 1.25,
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 3, y: 5 },
    radio_anchor: { x: 2, y: 10.5 },
    radio_size: 100,
    radio_orientation: "horizontal",
    radio_label_position: "top",
    radio_shape: "rect",
    rw_toggle_anchor: { x: 9, y: 1.5 },
    rw_toggle_label_pos: "right",
    rw_toggle_gap: 3,
    rw_toggle_size: 12
  },
  simulation: {
    delay: 10,
    path_width: 1.5,
    // path_color:[
    // 	"#1c4966", // dark blue
    // 	"#7c2855", // dark magenta
    // 	"#a43820", // rust red
    // 	"#7d5700"  // dark amber
    // ],
    path_color: [
      "#7d5700",
      "darkblue",
      "darkred",
      "#2e5a34"
      // dark forest green
    ],
    pos_size: 3
  },
  legend: {
    inset_height: 60,
    inset_width: 60,
    anchor: { x: 7, y: 1.5 },
    gap: 3
  }
};
var uu = typeof global == "object" && global && global.Object === Object && global, H1 = typeof self == "object" && self && self.Object === Object && self, wt = uu || H1 || Function("return this")(), Tt = wt.Symbol, lu = Object.prototype, U1 = lu.hasOwnProperty, G1 = lu.toString, vn = Tt ? Tt.toStringTag : void 0;
function Y1(t) {
  var n = U1.call(t, vn), e = t[vn];
  try {
    t[vn] = void 0;
    var r = !0;
  } catch {
  }
  var i = G1.call(t);
  return r && (n ? t[vn] = e : delete t[vn]), i;
}
var V1 = Object.prototype, K1 = V1.toString;
function W1(t) {
  return K1.call(t);
}
var Z1 = "[object Null]", J1 = "[object Undefined]", ua = Tt ? Tt.toStringTag : void 0;
function Yt(t) {
  return t == null ? t === void 0 ? J1 : Z1 : ua && ua in Object(t) ? Y1(t) : W1(t);
}
function Xt(t) {
  return t != null && typeof t == "object";
}
var Q1 = "[object Symbol]";
function Je(t) {
  return typeof t == "symbol" || Xt(t) && Yt(t) == Q1;
}
function Hn(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var X = Array.isArray, la = Tt ? Tt.prototype : void 0, ca = la ? la.toString : void 0;
function cu(t) {
  if (typeof t == "string")
    return t;
  if (X(t))
    return Hn(t, cu) + "";
  if (Je(t))
    return ca ? ca.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var tw = /\s/;
function nw(t) {
  for (var n = t.length; n-- && tw.test(t.charAt(n)); )
    ;
  return n;
}
var ew = /^\s+/;
function rw(t) {
  return t && t.slice(0, nw(t) + 1).replace(ew, "");
}
function _t(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var fa = NaN, iw = /^[-+]0x[0-9a-f]+$/i, ow = /^0b[01]+$/i, aw = /^0o[0-7]+$/i, sw = parseInt;
function uw(t) {
  if (typeof t == "number")
    return t;
  if (Je(t))
    return fa;
  if (_t(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = _t(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = rw(t);
  var e = ow.test(t);
  return e || aw.test(t) ? sw(t.slice(2), e ? 2 : 8) : iw.test(t) ? fa : +t;
}
var lw = 1 / 0, cw = 17976931348623157e292;
function mr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = uw(t), t === lw || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * cw;
  }
  return t === t ? t : 0;
}
function fu(t) {
  return t;
}
var fw = "[object AsyncFunction]", hw = "[object Function]", pw = "[object GeneratorFunction]", dw = "[object Proxy]";
function hu(t) {
  if (!_t(t))
    return !1;
  var n = Yt(t);
  return n == hw || n == pw || n == fw || n == dw;
}
var wr = wt["__core-js_shared__"], ha = function() {
  var t = /[^.]+$/.exec(wr && wr.keys && wr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function gw(t) {
  return !!ha && ha in t;
}
var _w = Function.prototype, yw = _w.toString;
function Vt(t) {
  if (t != null) {
    try {
      return yw.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var vw = /[\\^$.*+?()[\]{}|]/g, mw = /^\[object .+?Constructor\]$/, ww = Function.prototype, bw = Object.prototype, xw = ww.toString, Mw = bw.hasOwnProperty, $w = RegExp(
  "^" + xw.call(Mw).replace(vw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Aw(t) {
  if (!_t(t) || gw(t))
    return !1;
  var n = hu(t) ? $w : mw;
  return n.test(Vt(t));
}
function kw(t, n) {
  return t == null ? void 0 : t[n];
}
function Kt(t, n) {
  var e = kw(t, n);
  return Aw(e) ? e : void 0;
}
var Zr = Kt(wt, "WeakMap");
function Tw(t, n) {
  var e = -1, r = t.length;
  for (n || (n = Array(r)); ++e < r; )
    n[e] = t[e];
  return n;
}
var pa = function() {
  try {
    var t = Kt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function Nw(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var Sw = 9007199254740991, Pw = /^(?:0|[1-9]\d*)$/;
function Qe(t, n) {
  var e = typeof t;
  return n = n ?? Sw, !!n && (e == "number" || e != "symbol" && Pw.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Ew(t, n, e) {
  n == "__proto__" && pa ? pa(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function tr(t, n) {
  return t === n || t !== t && n !== n;
}
var Ow = Object.prototype, zw = Ow.hasOwnProperty;
function Cw(t, n, e) {
  var r = t[n];
  (!(zw.call(t, n) && tr(r, e)) || e === void 0 && !(n in t)) && Ew(t, n, e);
}
var Iw = 9007199254740991;
function Ri(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Iw;
}
function Un(t) {
  return t != null && Ri(t.length) && !hu(t);
}
function Rw(t, n, e) {
  if (!_t(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Un(e) && Qe(n, e.length) : r == "string" && n in e) ? tr(e[n], t) : !1;
}
var jw = Object.prototype;
function pu(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || jw;
  return t === e;
}
function Lw(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Fw = "[object Arguments]";
function da(t) {
  return Xt(t) && Yt(t) == Fw;
}
var du = Object.prototype, Dw = du.hasOwnProperty, qw = du.propertyIsEnumerable, gu = da(/* @__PURE__ */ function() {
  return arguments;
}()) ? da : function(t) {
  return Xt(t) && Dw.call(t, "callee") && !qw.call(t, "callee");
};
function Xw() {
  return !1;
}
var _u = typeof exports == "object" && exports && !exports.nodeType && exports, ga = _u && typeof module == "object" && module && !module.nodeType && module, Bw = ga && ga.exports === _u, _a = Bw ? wt.Buffer : void 0, Hw = _a ? _a.isBuffer : void 0, Jr = Hw || Xw, Uw = "[object Arguments]", Gw = "[object Array]", Yw = "[object Boolean]", Vw = "[object Date]", Kw = "[object Error]", Ww = "[object Function]", Zw = "[object Map]", Jw = "[object Number]", Qw = "[object Object]", tb = "[object RegExp]", nb = "[object Set]", eb = "[object String]", rb = "[object WeakMap]", ib = "[object ArrayBuffer]", ob = "[object DataView]", ab = "[object Float32Array]", sb = "[object Float64Array]", ub = "[object Int8Array]", lb = "[object Int16Array]", cb = "[object Int32Array]", fb = "[object Uint8Array]", hb = "[object Uint8ClampedArray]", pb = "[object Uint16Array]", db = "[object Uint32Array]", N = {};
N[ab] = N[sb] = N[ub] = N[lb] = N[cb] = N[fb] = N[hb] = N[pb] = N[db] = !0;
N[Uw] = N[Gw] = N[ib] = N[Yw] = N[ob] = N[Vw] = N[Kw] = N[Ww] = N[Zw] = N[Jw] = N[Qw] = N[tb] = N[nb] = N[eb] = N[rb] = !1;
function gb(t) {
  return Xt(t) && Ri(t.length) && !!N[Yt(t)];
}
function _b(t) {
  return function(n) {
    return t(n);
  };
}
var yu = typeof exports == "object" && exports && !exports.nodeType && exports, kn = yu && typeof module == "object" && module && !module.nodeType && module, yb = kn && kn.exports === yu, br = yb && uu.process, ya = function() {
  try {
    var t = kn && kn.require && kn.require("util").types;
    return t || br && br.binding && br.binding("util");
  } catch {
  }
}(), va = ya && ya.isTypedArray, vu = va ? _b(va) : gb, vb = Object.prototype, mb = vb.hasOwnProperty;
function mu(t, n) {
  var e = X(t), r = !e && gu(t), i = !e && !r && Jr(t), o = !e && !r && !i && vu(t), a = e || r || i || o, s = a ? Lw(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || mb.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Qe(u, l))) && s.push(u);
  return s;
}
function wu(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var wb = wu(Object.keys, Object), bb = Object.prototype, xb = bb.hasOwnProperty;
function Mb(t) {
  if (!pu(t))
    return wb(t);
  var n = [];
  for (var e in Object(t))
    xb.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Gn(t) {
  return Un(t) ? mu(t) : Mb(t);
}
function $b(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Ab = Object.prototype, kb = Ab.hasOwnProperty;
function Tb(t) {
  if (!_t(t))
    return $b(t);
  var n = pu(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !kb.call(t, r)) || e.push(r);
  return e;
}
function Nb(t) {
  return Un(t) ? mu(t, !0) : Tb(t);
}
var Sb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Pb = /^\w*$/;
function ji(t, n) {
  if (X(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Je(t) ? !0 : Pb.test(t) || !Sb.test(t) || n != null && t in Object(n);
}
var Ln = Kt(Object, "create");
function Eb() {
  this.__data__ = Ln ? Ln(null) : {}, this.size = 0;
}
function Ob(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var zb = "__lodash_hash_undefined__", Cb = Object.prototype, Ib = Cb.hasOwnProperty;
function Rb(t) {
  var n = this.__data__;
  if (Ln) {
    var e = n[t];
    return e === zb ? void 0 : e;
  }
  return Ib.call(n, t) ? n[t] : void 0;
}
var jb = Object.prototype, Lb = jb.hasOwnProperty;
function Fb(t) {
  var n = this.__data__;
  return Ln ? n[t] !== void 0 : Lb.call(n, t);
}
var Db = "__lodash_hash_undefined__";
function qb(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Ln && n === void 0 ? Db : n, this;
}
function Bt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Bt.prototype.clear = Eb;
Bt.prototype.delete = Ob;
Bt.prototype.get = Rb;
Bt.prototype.has = Fb;
Bt.prototype.set = qb;
function Xb() {
  this.__data__ = [], this.size = 0;
}
function nr(t, n) {
  for (var e = t.length; e--; )
    if (tr(t[e][0], n))
      return e;
  return -1;
}
var Bb = Array.prototype, Hb = Bb.splice;
function Ub(t) {
  var n = this.__data__, e = nr(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Hb.call(n, e, 1), --this.size, !0;
}
function Gb(t) {
  var n = this.__data__, e = nr(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Yb(t) {
  return nr(this.__data__, t) > -1;
}
function Vb(t, n) {
  var e = this.__data__, r = nr(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function bt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
bt.prototype.clear = Xb;
bt.prototype.delete = Ub;
bt.prototype.get = Gb;
bt.prototype.has = Yb;
bt.prototype.set = Vb;
var Fn = Kt(wt, "Map");
function Kb() {
  this.size = 0, this.__data__ = {
    hash: new Bt(),
    map: new (Fn || bt)(),
    string: new Bt()
  };
}
function Wb(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function er(t, n) {
  var e = t.__data__;
  return Wb(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Zb(t) {
  var n = er(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Jb(t) {
  return er(this, t).get(t);
}
function Qb(t) {
  return er(this, t).has(t);
}
function tx(t, n) {
  var e = er(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function xt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
xt.prototype.clear = Kb;
xt.prototype.delete = Zb;
xt.prototype.get = Jb;
xt.prototype.has = Qb;
xt.prototype.set = tx;
var nx = "Expected a function";
function Li(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(nx);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Li.Cache || xt)(), e;
}
Li.Cache = xt;
var ex = 500;
function rx(t) {
  var n = Li(t, function(r) {
    return e.size === ex && e.clear(), r;
  }), e = n.cache;
  return n;
}
var ix = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ox = /\\(\\)?/g, ax = rx(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(ix, function(e, r, i, o) {
    n.push(i ? o.replace(ox, "$1") : r || e);
  }), n;
});
function rr(t) {
  return t == null ? "" : cu(t);
}
function ir(t, n) {
  return X(t) ? t : ji(t, n) ? [t] : ax(rr(t));
}
function Yn(t) {
  if (typeof t == "string" || Je(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Fi(t, n) {
  n = ir(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Yn(n[e++])];
  return e && e == r ? t : void 0;
}
function sx(t, n, e) {
  var r = t == null ? void 0 : Fi(t, n);
  return r === void 0 ? e : r;
}
function bu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var ux = wu(Object.getPrototypeOf, Object);
function lx(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function cx(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, lx(t, n, e);
}
var fx = "\\ud800-\\udfff", hx = "\\u0300-\\u036f", px = "\\ufe20-\\ufe2f", dx = "\\u20d0-\\u20ff", gx = hx + px + dx, _x = "\\ufe0e\\ufe0f", yx = "\\u200d", vx = RegExp("[" + yx + fx + gx + _x + "]");
function xu(t) {
  return vx.test(t);
}
function mx(t) {
  return t.split("");
}
var Mu = "\\ud800-\\udfff", wx = "\\u0300-\\u036f", bx = "\\ufe20-\\ufe2f", xx = "\\u20d0-\\u20ff", Mx = wx + bx + xx, $x = "\\ufe0e\\ufe0f", Ax = "[" + Mu + "]", Qr = "[" + Mx + "]", ti = "\\ud83c[\\udffb-\\udfff]", kx = "(?:" + Qr + "|" + ti + ")", $u = "[^" + Mu + "]", Au = "(?:\\ud83c[\\udde6-\\uddff]){2}", ku = "[\\ud800-\\udbff][\\udc00-\\udfff]", Tx = "\\u200d", Tu = kx + "?", Nu = "[" + $x + "]?", Nx = "(?:" + Tx + "(?:" + [$u, Au, ku].join("|") + ")" + Nu + Tu + ")*", Sx = Nu + Tu + Nx, Px = "(?:" + [$u + Qr + "?", Qr, Au, ku, Ax].join("|") + ")", Ex = RegExp(ti + "(?=" + ti + ")|" + Px + Sx, "g");
function Ox(t) {
  return t.match(Ex) || [];
}
function zx(t) {
  return xu(t) ? Ox(t) : mx(t);
}
function Cx(t) {
  return function(n) {
    n = rr(n);
    var e = xu(n) ? zx(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? cx(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var Ix = Cx("toUpperCase");
function Rx(t) {
  return Ix(rr(t).toLowerCase());
}
function jx() {
  this.__data__ = new bt(), this.size = 0;
}
function Lx(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Fx(t) {
  return this.__data__.get(t);
}
function Dx(t) {
  return this.__data__.has(t);
}
var qx = 200;
function Xx(t, n) {
  var e = this.__data__;
  if (e instanceof bt) {
    var r = e.__data__;
    if (!Fn || r.length < qx - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new xt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function pt(t) {
  var n = this.__data__ = new bt(t);
  this.size = n.size;
}
pt.prototype.clear = jx;
pt.prototype.delete = Lx;
pt.prototype.get = Fx;
pt.prototype.has = Dx;
pt.prototype.set = Xx;
function Su(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Pu() {
  return [];
}
var Bx = Object.prototype, Hx = Bx.propertyIsEnumerable, ma = Object.getOwnPropertySymbols, Eu = ma ? function(t) {
  return t == null ? [] : (t = Object(t), Su(ma(t), function(n) {
    return Hx.call(t, n);
  }));
} : Pu, Ux = Object.getOwnPropertySymbols, Gx = Ux ? function(t) {
  for (var n = []; t; )
    bu(n, Eu(t)), t = ux(t);
  return n;
} : Pu;
function Ou(t, n, e) {
  var r = n(t);
  return X(t) ? r : bu(r, e(t));
}
function wa(t) {
  return Ou(t, Gn, Eu);
}
function Yx(t) {
  return Ou(t, Nb, Gx);
}
var ni = Kt(wt, "DataView"), ei = Kt(wt, "Promise"), ri = Kt(wt, "Set"), ba = "[object Map]", Vx = "[object Object]", xa = "[object Promise]", Ma = "[object Set]", $a = "[object WeakMap]", Aa = "[object DataView]", Kx = Vt(ni), Wx = Vt(Fn), Zx = Vt(ei), Jx = Vt(ri), Qx = Vt(Zr), ct = Yt;
(ni && ct(new ni(new ArrayBuffer(1))) != Aa || Fn && ct(new Fn()) != ba || ei && ct(ei.resolve()) != xa || ri && ct(new ri()) != Ma || Zr && ct(new Zr()) != $a) && (ct = function(t) {
  var n = Yt(t), e = n == Vx ? t.constructor : void 0, r = e ? Vt(e) : "";
  if (r)
    switch (r) {
      case Kx:
        return Aa;
      case Wx:
        return ba;
      case Zx:
        return xa;
      case Jx:
        return Ma;
      case Qx:
        return $a;
    }
  return n;
});
var ka = wt.Uint8Array, t2 = "__lodash_hash_undefined__";
function n2(t) {
  return this.__data__.set(t, t2), this;
}
function e2(t) {
  return this.__data__.has(t);
}
function Fe(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new xt(); ++n < e; )
    this.add(t[n]);
}
Fe.prototype.add = Fe.prototype.push = n2;
Fe.prototype.has = e2;
function r2(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function i2(t, n) {
  return t.has(n);
}
var o2 = 1, a2 = 2;
function zu(t, n, e, r, i, o) {
  var a = e & o2, s = t.length, l = n.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), c = o.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & a2 ? new Fe() : void 0;
  for (o.set(t, n), o.set(n, t); ++h < s; ) {
    var d = t[h], _ = n[h];
    if (r)
      var w = a ? r(_, d, h, n, t, o) : r(d, _, h, t, n, o);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!r2(n, function(x, m) {
        if (!i2(p, m) && (d === x || i(d, x, e, r, o)))
          return p.push(m);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, e, r, o))) {
      f = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), f;
}
function Cu(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function s2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var u2 = 1, l2 = 2, c2 = "[object Boolean]", f2 = "[object Date]", h2 = "[object Error]", p2 = "[object Map]", d2 = "[object Number]", g2 = "[object RegExp]", _2 = "[object Set]", y2 = "[object String]", v2 = "[object Symbol]", m2 = "[object ArrayBuffer]", w2 = "[object DataView]", Ta = Tt ? Tt.prototype : void 0, xr = Ta ? Ta.valueOf : void 0;
function b2(t, n, e, r, i, o, a) {
  switch (e) {
    case w2:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case m2:
      return !(t.byteLength != n.byteLength || !o(new ka(t), new ka(n)));
    case c2:
    case f2:
    case d2:
      return tr(+t, +n);
    case h2:
      return t.name == n.name && t.message == n.message;
    case g2:
    case y2:
      return t == n + "";
    case p2:
      var s = Cu;
    case _2:
      var l = r & u2;
      if (s || (s = s2), t.size != n.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == n;
      r |= l2, a.set(t, n);
      var c = zu(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case v2:
      if (xr)
        return xr.call(t) == xr.call(n);
  }
  return !1;
}
var x2 = 1, M2 = Object.prototype, $2 = M2.hasOwnProperty;
function A2(t, n, e, r, i, o) {
  var a = e & x2, s = wa(t), l = s.length, u = wa(n), c = u.length;
  if (l != c && !a)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(a ? f in n : $2.call(n, f)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var _ = !0;
  o.set(t, n), o.set(n, t);
  for (var w = a; ++h < l; ) {
    f = s[h];
    var x = t[f], m = n[f];
    if (r)
      var M = a ? r(m, x, f, n, t, o) : r(x, m, f, t, n, o);
    if (!(M === void 0 ? x === m || i(x, m, e, r, o) : M)) {
      _ = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (_ && !w) {
    var g = t.constructor, v = n.constructor;
    g != v && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof v == "function" && v instanceof v) && (_ = !1);
  }
  return o.delete(t), o.delete(n), _;
}
var k2 = 1, Na = "[object Arguments]", Sa = "[object Array]", se = "[object Object]", T2 = Object.prototype, Pa = T2.hasOwnProperty;
function N2(t, n, e, r, i, o) {
  var a = X(t), s = X(n), l = a ? Sa : ct(t), u = s ? Sa : ct(n);
  l = l == Na ? se : l, u = u == Na ? se : u;
  var c = l == se, h = u == se, f = l == u;
  if (f && Jr(t)) {
    if (!Jr(n))
      return !1;
    a = !0, c = !1;
  }
  if (f && !c)
    return o || (o = new pt()), a || vu(t) ? zu(t, n, e, r, i, o) : b2(t, n, l, e, r, i, o);
  if (!(e & k2)) {
    var p = c && Pa.call(t, "__wrapped__"), d = h && Pa.call(n, "__wrapped__");
    if (p || d) {
      var _ = p ? t.value() : t, w = d ? n.value() : n;
      return o || (o = new pt()), i(_, w, e, r, o);
    }
  }
  return f ? (o || (o = new pt()), A2(t, n, e, r, i, o)) : !1;
}
function Di(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !Xt(t) && !Xt(n) ? t !== t && n !== n : N2(t, n, e, r, Di, i);
}
var S2 = 1, P2 = 2;
function E2(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], l = t[s], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new pt(), h;
      if (!(h === void 0 ? Di(u, l, S2 | P2, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Iu(t) {
  return t === t && !_t(t);
}
function O2(t) {
  for (var n = Gn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Iu(i)];
  }
  return n;
}
function Ru(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function z2(t) {
  var n = O2(t);
  return n.length == 1 && n[0][2] ? Ru(n[0][0], n[0][1]) : function(e) {
    return e === t || E2(e, t, n);
  };
}
function C2(t, n) {
  return t != null && n in Object(t);
}
function ju(t, n, e) {
  n = ir(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Yn(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Ri(i) && Qe(a, i) && (X(t) || gu(t)));
}
function I2(t, n) {
  return t != null && ju(t, n, C2);
}
var R2 = 1, j2 = 2;
function L2(t, n) {
  return ji(t) && Iu(n) ? Ru(Yn(t), n) : function(e) {
    var r = sx(e, t);
    return r === void 0 && r === n ? I2(e, t) : Di(n, r, R2 | j2);
  };
}
function F2(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function D2(t) {
  return function(n) {
    return Fi(n, t);
  };
}
function q2(t) {
  return ji(t) ? F2(Yn(t)) : D2(t);
}
function qi(t) {
  return typeof t == "function" ? t : t == null ? fu : typeof t == "object" ? X(t) ? L2(t[0], t[1]) : z2(t) : q2(t);
}
function X2(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var B2 = X2();
function H2(t, n) {
  return t && B2(t, n, Gn);
}
function U2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Un(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Xi = U2(H2);
function G2(t) {
  return typeof t == "function" ? t : fu;
}
function hn(t, n) {
  var e = X(t) ? Nw : Xi;
  return e(t, G2(n));
}
function Y2(t, n) {
  return Hn(n, function(e) {
    return [e, t[e]];
  });
}
function V2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var K2 = "[object Map]", W2 = "[object Set]";
function Z2(t) {
  return function(n) {
    var e = ct(n);
    return e == K2 ? Cu(n) : e == W2 ? V2(n) : Y2(n, t(n));
  };
}
var Lu = Z2(Gn);
function J2(t, n) {
  var e = [];
  return Xi(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function Fu(t, n) {
  var e = X(t) ? Su : J2;
  return e(t, qi(n));
}
function Q2(t, n) {
  var e = -1, r = Un(t) ? Array(t.length) : [];
  return Xi(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function Vn(t, n) {
  var e = X(t) ? Hn : Q2;
  return e(t, qi(n));
}
var tM = Object.prototype, nM = tM.hasOwnProperty;
function eM(t, n) {
  return t != null && nM.call(t, n);
}
function rM(t, n) {
  return t != null && ju(t, n, eM);
}
function iM(t, n) {
  return Hn(n, function(e) {
    return t[e];
  });
}
function oM(t) {
  return t == null ? [] : iM(t, Gn(t));
}
var aM = "[object Boolean]";
function sM(t) {
  return t === !0 || t === !1 || Xt(t) && Yt(t) == aM;
}
function uM(t, n, e, r) {
  if (!_t(t))
    return t;
  n = ir(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var l = Yn(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var c = s[l];
      u = void 0, u === void 0 && (u = _t(c) ? c : Qe(n[i + 1]) ? [] : {});
    }
    Cw(s, l, u), s = s[l];
  }
  return t;
}
function lM(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Fi(t, a);
    e(s, a) && uM(o, ir(a, t), s);
  }
  return o;
}
function Du(t, n) {
  if (t == null)
    return {};
  var e = Hn(Yx(t), function(r) {
    return [r];
  });
  return n = qi(n), lM(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var cM = Math.floor, fM = Math.random;
function hM(t, n) {
  return t + cM(fM() * (n - t + 1));
}
var pM = Math.ceil, dM = Math.max;
function gM(t, n, e, r) {
  for (var i = -1, o = dM(pM((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function _M(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Rw(n, e, r) && (e = r = void 0), n = mr(n), e === void 0 ? (e = n, n = 0) : e = mr(e), r = r === void 0 ? n < e ? 1 : -1 : mr(r), gM(n, e, r);
  };
}
var Ht = _M();
function yM() {
  var t = arguments, n = rr(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function qu(t, n) {
  var e = -1, r = t.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++e < n; ) {
    var o = hM(e, i), a = t[o];
    t[o] = t[e], t[e] = a;
  }
  return t.length = n, t;
}
function vM(t) {
  return qu(Tw(t));
}
function mM(t) {
  return qu(oM(t));
}
function wM(t) {
  var n = X(t) ? vM : mM;
  return n(t);
}
const $ = {
  sigma: 1,
  x_range: [-18, 18],
  y_range: [-18, 18],
  L0: 1.8,
  R0: 10,
  T_max: 5e3,
  number_of_walkers: {
    choices: [1, 5, 25],
    default: 1
  },
  hide_path: {
    default: !1
  },
  hide_positions: {
    default: !1
  }
}, Qt = {
  n_w_s_o: {
    default: !0,
    label: "N-W-S-O"
  },
  ring: {
    default: !0
  },
  gaussian: {
    default: !0
  },
  triangular: {
    default: !0
  }
}, Bi = (t) => Vn(Lu(t), (n) => {
  n[1].id = n[0], n[1].label = n[1].label || yM(Rx(n[0]), /_/g, " ");
}), or = (t) => Vn(Lu(t), (n) => n[1]), Hi = (t, n) => hn(t, (e, r) => e.widget = n[r]), Xu = (t) => Du(t, (n) => sM(n.default)), bM = (t) => Du(t, (n) => rM(n, "choices"));
Ut().domain([0, 360]).range([0, 2 * Math.PI]);
Ut().range([0, 360]).domain([0, 2 * Math.PI]);
const Ea = Qh(0, 1), Bu = Xu($), Hu = bM($), Uu = Xu(Qt);
Bi(Bu);
Bi(Uu);
Bi(Hu);
const Gu = or(Bu), Yu = or(Uu), Vu = or(Hu), _e = Vn(
  Gu,
  (t) => au().id(t.id).label(t.label).value(t.default).labelposition(A.widgets.toggle_label_pos)
), kt = Vn(
  Yu,
  (t) => au().id(t.id).label(t.label).value(t.default).labelposition(A.widgets.rw_toggle_label_pos).size(A.widgets.rw_toggle_size)
), ii = Vn(
  Vu,
  (t) => P1().choices(t.choices).id(t.id).value(t.default).orientation(A.widgets.radio_orientation).labelposition(A.widgets.radio_label_position)
);
Hi(Gu, _e);
Hi(Yu, kt);
Hi(Vu, ii);
const ft = ou().actions(["play", "pause"]).id("play"), ar = ou().actions(["back"]).id("reset"), xM = [ft, ar], MM = (t, n) => {
  const e = n.position(A.widgets.toggle_anchor.x, Ht(_e.length).map((o) => A.widgets.toggle_anchor.y + A.widgets.toggle_gap * o)), r = n.position(A.widgets.rw_toggle_anchor.x, Ht(kt.length).map((o) => A.widgets.rw_toggle_anchor.y + A.widgets.rw_toggle_gap * o)), i = n.position(A.widgets.radio_anchor.x, A.widgets.radio_anchor.y);
  _e.forEach((o, a) => o.position(e[a])), kt.forEach((o, a) => o.position(r[a])), ii[0].position(i).size(A.widgets.radio_size).shape(A.widgets.radio_shape), ft.position(n.position(A.widgets.playbutton_anchor.x, A.widgets.playbutton_anchor.y)).size(A.widgets.playbutton_size), ar.position(n.position(A.widgets.backbutton_anchor.x, A.widgets.backbutton_anchor.y)), t.selectAll(null).data(kt).enter().append(ae), t.selectAll(null).data(_e).enter().append(ae), t.selectAll(null).data(xM).enter().append(ae), t.selectAll(null).data(ii).enter().append(ae);
}, $M = (t, n) => {
  let e, r, i;
  return Math.random() <= 0.5 ? (e = 0, r = 1) : (e = 1, r = 0), Math.random() <= 0.5 ? i = 1 : i = -1, {
    x: t.x + n * i * e,
    y: t.y + n * i * r
  };
}, AM = (t, n) => {
  const e = 2 * Math.random() * Math.PI;
  return {
    x: t.x + n * Math.cos(e),
    y: t.y + n * Math.sin(e)
  };
}, kM = (t, n) => ({
  x: t.x + n * Ea(),
  y: t.y + n * Ea()
}), TM = (t, n) => {
  const e = 2 * Math.PI / 3 * Math.round(Math.random() * 3);
  return {
    x: t.x + n * Math.cos(e),
    y: t.y + n * Math.sin(e)
  };
}, $t = $.L0, NM = A.legend.inset_width, SM = A.legend.inset_height;
var Y = Ut().domain([-$t, $t]).range([-60 / 2, NM / 2]), At = Ut().domain([-$t, $t]).range([SM / 2, -60 / 2]), oi, ai;
const PM = (t, n) => {
  const e = [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }];
  t.selectAll("." + G.pdf_lattice).data(e).enter().append("circle").attr("r", 3).attr("class", G.pdf_lattice).attr("cx", function(r) {
    return Y(r.x);
  }).attr("cy", function(r) {
    return At(r.y);
  }).style("fill", A.simulation.path_color[n]);
}, EM = (t, n) => {
  t.append("circle").attr("r", Y(1) - Y(0)).attr("cx", function(e) {
    return Y(0);
  }).attr("cy", function(e) {
    return At(0);
  }).attr("class", G.pdf_ring).style("stroke", A.simulation.path_color[n]);
}, OM = (t, n) => {
  oi.append("stop").attr("offset", "0%").attr("stop-color", A.simulation.path_color[n]), oi.append("stop").attr("offset", "100%").attr("stop-color", "white"), ai.append("stop").attr("offset", "0%").attr("stop-color", A.simulation.path_color[n]), ai.append("stop").attr("offset", "100%").attr("stop-color", "black"), t.append("circle").attr("r", 1.5 * (Y(1) - Y(0))).attr("cx", function(e) {
    return Y(0);
  }).attr("cy", function(e) {
    return At(0);
  }).attr("class", G.pdf_gaussian);
}, zM = (t, n) => {
  const e = [{ theta: 0 }, { theta: 0.6666666666666666 * Math.PI }, { theta: 1.3333333333333333 * Math.PI }];
  t.selectAll("." + G.pdf_triangular).data(e).enter().append("circle").attr("r", 3).attr("class", G.pdf_triangular).attr("cx", function(r) {
    return Y(Math.cos(r.theta));
  }).attr("cy", function(r) {
    return At(Math.sin(r.theta));
  }).style("fill", A.simulation.path_color[n]);
}, CM = (t, n) => {
  oi = t.append("defs").append("radialGradient").attr("id", "gaussian_gradient"), ai = t.append("defs").append("radialGradient").attr("id", "gaussian_gradient_dark");
  const e = n.position(A.legend.anchor.x, Ht(kt.length).map((i) => A.legend.anchor.y + A.legend.gap * i)), r = t.selectAll("." + G.inset).data(Ht(kt.length)).enter().append("g").attr("class", G.inset).attr("id", (i, o) => "inset_" + o).attr("transform", (i, o) => "translate(" + e[o].x + "," + e[o].y + ")");
  r.append("line").attr("class", G.insetaxis).attr("x1", Y(-$t)).attr("y1", At(0)).attr("x2", Y($t)).attr("y2", At(0)), r.append("line").attr("class", G.insetaxis).attr("x1", Y(0)).attr("y1", At(-$t)).attr("x2", Y(0)).attr("y2", At($t)), PM(t.select("#inset_0"), 0), EM(t.select("#inset_1"), 1), OM(t.select("#inset_2"), 2), zM(t.select("#inset_3"), 3);
};
var Ct;
const IM = $.number_of_walkers.choices[$.number_of_walkers.choices.length - 1], RM = or(Qt).length, jM = [
  $M,
  AM,
  kM,
  TM
], LM = () => {
  $.timer = {}, $.tick = 0, Ct = [], hn(Ht(RM), (t) => {
    hn(Ht(IM), (n) => {
      Ct.push({ ix: n, type: t, tr: [{ x: 0, y: 0 }] });
    });
  }), Ct = wM(Ct);
}, FM = () => (hn(Ct, (t) => {
  t.tr.push(jM[t.type](t.tr[$.tick], $.sigma));
}), $.tick++, $.tick > $.T_max), sr = Ut(), ur = Ut();
var Ku = gp().x((t) => sr(t.x)).y((t) => ur(t.y)), Wu = fs().domain(Ht(4)).range(A.simulation.path_color), F, ye, ve;
const Zu = (t) => {
  hn(t, (n) => {
    F.beginPath(), Ku(n.tr), F.lineWidth = A.simulation.path_width, F.strokeStyle = Wu(n.type), F.stroke(), F.closePath();
  });
}, Ju = (t) => {
  hn(t, (n) => {
    F.beginPath();
    let e = n.tr[n.tr.length - 1];
    F.arc(sr(e.x), ur(e.y), A.simulation.pos_size, 0, 2 * Math.PI), F.fillStyle = Wu(n.type), F.fill();
  });
}, DM = (t, n) => {
  ye = n.display_size.width, ve = n.display_size.height, sr.range([0, ye]).domain($.x_range), ur.range([0, ve]).domain($.y_range), F = t.node().getContext("2d"), Ku.context(F), F.clearRect(0, 0, ye, ve);
  const e = Fu(Ct, (r) => r.ix < $.number_of_walkers.choices[$.number_of_walkers.widget.value()] && kt[r.type].value());
  $.hide_path.widget.value() || Zu(e), $.hide_positions.widget.value() || Ju(e);
}, Qu = (t, n) => {
  F.clearRect(0, 0, ye, ve), $.tick > $.R0 * $.R0 && (sr.domain([-Math.sqrt($.tick) * $.L0, Math.sqrt($.tick) * $.L0]), ur.domain([-Math.sqrt($.tick) * $.L0, Math.sqrt($.tick) * $.L0]));
  const e = Fu(Ct, (r) => r.ix < $.number_of_walkers.choices[$.number_of_walkers.widget.value()] && kt[r.type].value());
  $.hide_path.widget.value() || Zu(e), $.hide_positions.widget.value() || Ju(e);
}, qM = Qu;
function XM(t, n, e) {
  let r = !1;
  r = FM(), Qu(), r && (n.select("#button_play").transition(1e3).style("opacity", 0).style("pointer-events", "none"), ft.press(n));
}
function tl(t, n) {
  LM(), DM(t, n);
}
function St(t, n) {
  qM();
}
var Oa = {};
const BM = (t, n, e) => {
  ft.value() == 1 ? Oa = Sf(() => XM(t, n), A.simulation.delay) : Oa.stop();
}, HM = (t, n, e) => {
  ft.update(() => BM(t, n)), ar.update(() => {
    tl(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  }), $.number_of_walkers.widget.update(() => St()), $.hide_path.widget.update(() => St()), $.hide_positions.widget.update(() => St()), Qt.gaussian.widget.update(() => St()), Qt.n_w_s_o.widget.update(() => St()), Qt.triangular.widget.update(() => St()), Qt.ring.widget.update(() => St());
}, UM = {
  name: "@explorables/albert_and_carl_friedrich",
  title: "Albert & Carl Friedrich",
  subtitle: "Random Walks & Diffusion - A geometric explanation of the central limit theorem.",
  description: "This explorable illustrates two dimensional random walks and the central limit theorem. Although random walks may differ on a small scale, as time progress and they all looks the same from a distance.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function GM(t, n = nl) {
  const e = B1(t, n), r = e.display, i = e.controls, o = e.grid;
  return MM(i, o), CM(i, o), HM(r, i, n), tl(r, n), {
    halt() {
      ft.value() === 1 && ft.press(i);
    },
    reset() {
      ft.value() === 1 && ft.press(i), ar.press(i);
    },
    config: n,
    meta: UM
  };
}
export {
  nl as config,
  GM as default,
  GM as load,
  UM as meta
};
