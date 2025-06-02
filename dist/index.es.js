(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:border-1{border-style:var(--tw-border-style);border-width:1px}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:border-white{border-color:var(--tw-color-white)}.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}._insetaxis_uz2cl_5{stroke:#000;stroke-width:1px}@media (prefers-color-scheme: dark){._insetaxis_uz2cl_5{stroke:#fff;stroke-width:1px}}._pdf_lattice_uz2cl_17{stroke:none;opacity:1}._pdf_ring_uz2cl_22{fill:none;stroke-width:5px;opacity:1}._pdf_gaussian_uz2cl_27{opacity:.7;stroke:none;fill:url(#gaussian_gradient)}@media (prefers-color-scheme: dark){._pdf_gaussian_uz2cl_27{fill:url(#gaussian_gradient_dark)}}._pdf_triangular_uz2cl_38{opacity:1;stroke:none}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
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
function Oo(t) {
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
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
}
function rl() {
  return 0;
}
function il(t) {
  return t === null ? NaN : +t;
}
const al = Oo(ue), ol = al.right;
Oo(il).center;
class Gi extends Map {
  constructor(n, e = ll) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null) for (const [r, i] of n) this.set(r, i);
  }
  get(n) {
    return super.get(Yi(this, n));
  }
  has(n) {
    return super.has(Yi(this, n));
  }
  set(n, e) {
    return super.set(sl(this, n), e);
  }
  delete(n) {
    return super.delete(ul(this, n));
  }
}
function Yi({ _intern: t, _key: n }, e) {
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
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= cl ? 10 : a >= fl ? 5 : a >= hl ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? me(t, n, e * 2) : [s, l, u];
}
function pl(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? me(n, t, e) : me(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
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
function Co() {
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
le.prototype = Co.prototype = {
  constructor: le,
  on: function(t, n) {
    var e = this._, r = _l(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = yl(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = Vi(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Vi(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new le(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function yl(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Vi(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = gl, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var $r = "http://www.w3.org/1999/xhtml";
const Ki = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: $r,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Fe(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ki.hasOwnProperty(n) ? { space: Ki[n], local: t } : t;
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
function Io(t) {
  var n = Fe(t);
  return (n.local ? ml : vl)(n);
}
function wl() {
}
function ui(t) {
  return t == null ? wl : function() {
    return this.querySelector(t);
  };
}
function bl(t) {
  typeof t != "function" && (t = ui(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new F(r, this._parents);
}
function xl(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ml() {
  return [];
}
function Ro(t) {
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
  typeof t == "function" ? t = $l(t) : t = Ro(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new F(r, i);
}
function qo(t) {
  return function() {
    return this.matches(t);
  };
}
function jo(t) {
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
  return this.select(t == null ? Nl : Tl(typeof t == "function" ? t : jo(t)));
}
var Pl = Array.prototype.filter;
function El() {
  return Array.from(this.children);
}
function zl(t) {
  return function() {
    return Pl.call(this.children, t);
  };
}
function Ol(t) {
  return this.selectAll(t == null ? El : zl(typeof t == "function" ? t : jo(t)));
}
function Cl(t) {
  typeof t != "function" && (t = qo(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new F(r, this._parents);
}
function Lo(t) {
  return new Array(t.length);
}
function Il() {
  return new F(this._enter || this._groups.map(Lo), this._parents);
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
function ql(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new we(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function jl(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new we(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function Ll(t) {
  return t.__data__;
}
function Fl(t, n) {
  if (!arguments.length) return Array.from(this, Ll);
  var e = n ? jl : ql, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Rl(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Dl(t.call(c, c && c.__data__, u, r)), d = p.length, _ = s[u] = new Array(d), m = o[u] = new Array(d), M = l[u] = new Array(f);
    e(c, h, _, m, M, p, n);
    for (var b = 0, x = 0, g, v; b < d; ++b)
      if (g = _[b]) {
        for (b >= x && (x = b + 1); !(v = m[x]) && ++x < d; ) ;
        g._next = v || null;
      }
  }
  return o = new F(o, r), o._enter = s, o._exit = l, o;
}
function Dl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Hl() {
  return new F(this._exit || this._groups.map(Lo), this._parents);
}
function Xl(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function Bl(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new F(s, this._parents);
}
function Ul() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Gl(t) {
  t || (t = Yl);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(n);
  }
  return new F(i, this._parents).order();
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
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
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
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
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
function ac(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function oc(t, n) {
  var e = Fe(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? nc : tc : typeof n == "function" ? e.local ? ac : ic : e.local ? rc : ec)(e, n));
}
function Fo(t) {
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
  return t.style.getPropertyValue(n) || Fo(t).getComputedStyle(t, null).getPropertyValue(n);
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
function Do(t) {
  return t.trim().split(/^|\s+/);
}
function li(t) {
  return t.classList || new Ho(t);
}
function Ho(t) {
  this._node = t, this._names = Do(t.getAttribute("class") || "");
}
Ho.prototype = {
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
function Xo(t, n) {
  for (var e = li(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Bo(t, n) {
  for (var e = li(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function gc(t) {
  return function() {
    Xo(this, t);
  };
}
function _c(t) {
  return function() {
    Bo(this, t);
  };
}
function yc(t, n) {
  return function() {
    (n.apply(this, arguments) ? Xo : Bo)(this, t);
  };
}
function vc(t, n) {
  var e = Do(t + "");
  if (arguments.length < 2) {
    for (var r = li(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
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
  var n = typeof t == "function" ? t : Io(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function zc() {
  return null;
}
function Oc(t, n) {
  var e = typeof t == "function" ? t : Io(t), r = n == null ? zc : typeof n == "function" ? n : ui(n);
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
function qc() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function jc(t) {
  return this.select(t ? qc : Rc);
}
function Lc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Fc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Dc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Hc(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Xc(t, n, e) {
  return function() {
    var r = this.__on, i, a = Fc(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Bc(t, n, e) {
  var r = Dc(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? Xc : Hc, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Uo(t, n, e) {
  var r = Fo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Uc(t, n) {
  return function() {
    return Uo(this, t, n);
  };
}
function Gc(t, n) {
  return function() {
    return Uo(this, t, n.apply(this, arguments));
  };
}
function Yc(t, n) {
  return this.each((typeof n == "function" ? Gc : Uc)(t, n));
}
function* Vc() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var Go = [null];
function F(t, n) {
  this._groups = t, this._parents = n;
}
function Fn() {
  return new F([[document.documentElement]], Go);
}
function Kc() {
  return this;
}
F.prototype = Fn.prototype = {
  constructor: F,
  select: bl,
  selectAll: Al,
  selectChild: Sl,
  selectChildren: Ol,
  filter: Cl,
  data: Fl,
  enter: Il,
  exit: Hl,
  join: Xl,
  merge: Bl,
  selection: Kc,
  order: Ul,
  sort: Gl,
  call: Vl,
  nodes: Kl,
  node: Wl,
  size: Zl,
  empty: Jl,
  each: Ql,
  attr: oc,
  style: cc,
  property: dc,
  classed: vc,
  text: xc,
  html: kc,
  raise: Nc,
  lower: Pc,
  append: Ec,
  insert: Oc,
  remove: Ic,
  clone: jc,
  datum: Lc,
  on: Bc,
  dispatch: Yc,
  [Symbol.iterator]: Vc
};
function Wc(t) {
  return typeof t == "string" ? new F([[document.querySelector(t)]], [document.documentElement]) : new F([[t]], Go);
}
function ci(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Yo(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Dn() {
}
var Tn = 0.7, be = 1 / Tn, tn = "\\s*([+-]?\\d+)\\s*", Nn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zc = /^#([0-9a-f]{3,8})$/, Jc = new RegExp(`^rgb\\(${tn},${tn},${tn}\\)$`), Qc = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), tf = new RegExp(`^rgba\\(${tn},${tn},${tn},${Nn}\\)$`), nf = new RegExp(`^rgba\\(${rt},${rt},${rt},${Nn}\\)$`), ef = new RegExp(`^hsl\\(${Nn},${rt},${rt}\\)$`), rf = new RegExp(`^hsla\\(${Nn},${rt},${rt},${Nn}\\)$`), Wi = {
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
ci(Dn, qt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Zi,
  // Deprecated! Use color.formatHex.
  formatHex: Zi,
  formatHex8: af,
  formatHsl: of,
  formatRgb: Ji,
  toString: Ji
});
function Zi() {
  return this.rgb().formatHex();
}
function af() {
  return this.rgb().formatHex8();
}
function of() {
  return Vo(this).formatHsl();
}
function Ji() {
  return this.rgb().formatRgb();
}
function qt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Zc.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Qi(n) : e === 3 ? new R(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Kn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Kn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Jc.exec(t)) ? new R(n[1], n[2], n[3], 1) : (n = Qc.exec(t)) ? new R(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = tf.exec(t)) ? Kn(n[1], n[2], n[3], n[4]) : (n = nf.exec(t)) ? Kn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ef.exec(t)) ? ea(n[1], n[2] / 100, n[3] / 100, 1) : (n = rf.exec(t)) ? ea(n[1], n[2] / 100, n[3] / 100, n[4]) : Wi.hasOwnProperty(t) ? Qi(Wi[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function Qi(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Kn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new R(t, n, e, r);
}
function sf(t) {
  return t instanceof Dn || (t = qt(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function Ar(t, n, e, r) {
  return arguments.length === 1 ? sf(t) : new R(t, n, e, r ?? 1);
}
function R(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ci(R, Ar, Yo(Dn, {
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
  hex: ta,
  // Deprecated! Use color.formatHex.
  formatHex: ta,
  formatHex8: uf,
  formatRgb: na,
  toString: na
}));
function ta() {
  return `#${zt(this.r)}${zt(this.g)}${zt(this.b)}`;
}
function uf() {
  return `#${zt(this.r)}${zt(this.g)}${zt(this.b)}${zt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function na() {
  const t = xe(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${It(this.r)}, ${It(this.g)}, ${It(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function xe(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function It(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function zt(t) {
  return t = It(t), (t < 16 ? "0" : "") + t.toString(16);
}
function ea(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new W(t, n, e, r);
}
function Vo(t) {
  if (t instanceof W) return new W(t.h, t.s, t.l, t.opacity);
  if (t instanceof Dn || (t = qt(t)), !t) return new W();
  if (t instanceof W) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new W(o, s, l, t.opacity);
}
function lf(t, n, e, r) {
  return arguments.length === 1 ? Vo(t) : new W(t, n, e, r ?? 1);
}
function W(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ci(W, lf, Yo(Dn, {
  brighter(t) {
    return t = t == null ? be : Math.pow(be, t), new W(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Tn : Math.pow(Tn, t), new W(this.h, this.s, this.l * t, this.opacity);
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
    return new W(ra(this.h), Wn(this.s), Wn(this.l), xe(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = xe(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ra(this.h)}, ${Wn(this.s) * 100}%, ${Wn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ra(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Wn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function cr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const fi = (t) => () => t;
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
  return (t = +t) == 1 ? Ko : function(n, e) {
    return e - n ? ff(n, e, t) : fi(isNaN(n) ? e : n);
  };
}
function Ko(t, n) {
  var e = n - t;
  return e ? cf(t, e) : fi(isNaN(t) ? n : t);
}
const Me = function t(n) {
  var e = hf(n);
  function r(i, a) {
    var o = e((i = Ar(i)).r, (a = Ar(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = Ko(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function pf(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function df(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function gf(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = hi(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function _f(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function V(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function yf(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = hi(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
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
function Wo(t, n) {
  var e = kr.lastIndex = fr.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = kr.exec(t)) && (i = fr.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: V(r, i) })), e = fr.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? mf(l[0].x) : vf(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function hi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? fi(n) : (e === "number" ? V : e === "string" ? (r = qt(n)) ? (n = r, Me) : Wo : n instanceof qt ? Me : n instanceof Date ? _f : df(n) ? pf : Array.isArray(n) ? gf : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? yf : V)(t, n);
}
function wf(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var ia = 180 / Math.PI, Tr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Zo(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * ia,
    skewX: Math.atan(l) * ia,
    scaleX: o,
    scaleY: s
  };
}
var Zn;
function bf(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Tr : Zo(n.a, n.b, n.c, n.d, n.e, n.f);
}
function xf(t) {
  return t == null || (Zn || (Zn = document.createElementNS("http://www.w3.org/2000/svg", "g")), Zn.setAttribute("transform", t), !(t = Zn.transform.baseVal.consolidate())) ? Tr : (t = t.matrix, Zo(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Jo(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var _ = p.push("translate(", null, n, null, e);
      d.push({ i: _ - 4, x: V(u, h) }, { i: _ - 2, x: V(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: V(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: V(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: _ - 4, x: V(u, h) }, { i: _ - 2, x: V(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, _ = f.length, m; ++d < _; ) h[(m = f[d]).i] = m.x(p);
      return h.join("");
    };
  };
}
var Mf = Jo(bf, "px, ", "px)", "deg)"), $f = Jo(xf, ", ", ")", ")"), an = 0, mn = 0, gn = 0, Qo = 1e3, $e, wn, Ae = 0, jt = 0, De = 0, Sn = typeof performance == "object" && performance.now ? performance : Date, ts = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function He() {
  return jt || (ts(Af), jt = Sn.now() + De);
}
function Af() {
  jt = 0;
}
function Pn() {
  this._call = this._time = this._next = null;
}
Pn.prototype = ns.prototype = {
  constructor: Pn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? He() : +e) + (n == null ? 0 : +n), !this._next && wn !== this && (wn ? wn._next = this : $e = this, wn = this), this._call = t, this._time = e, Nr();
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
  He(), ++an;
  for (var t = $e, n; t; )
    (n = jt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --an;
}
function aa() {
  jt = (Ae = Sn.now()) + De, an = mn = 0;
  try {
    kf();
  } finally {
    an = 0, Nf(), jt = 0;
  }
}
function Tf() {
  var t = Sn.now(), n = t - Ae;
  n > Qo && (De -= n, Ae = t);
}
function Nf() {
  for (var t, n = $e, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : $e = e);
  wn = t, Nr(r);
}
function Nr(t) {
  if (!an) {
    mn && (mn = clearTimeout(mn));
    var n = t - jt;
    n > 24 ? (t < 1 / 0 && (mn = setTimeout(aa, t - Sn.now() - De)), gn && (gn = clearInterval(gn))) : (gn || (Ae = Sn.now(), gn = setInterval(Tf, Qo)), an = 1, ts(aa));
  }
}
function oa(t, n, e) {
  var r = new Pn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Sf(t, n, e) {
  var r = new Pn(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? He() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var Pf = Co("start", "end", "cancel", "interrupt"), Ef = [], es = 0, sa = 1, Sr = 2, ce = 3, ua = 4, Pr = 5, fe = 6;
function Xe(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  zf(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Pf,
    tween: Ef,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: es
  });
}
function pi(t, n) {
  var e = Q(t, n);
  if (e.state > es) throw new Error("too late; already scheduled");
  return e;
}
function ot(t, n) {
  var e = Q(t, n);
  if (e.state > ce) throw new Error("too late; already running");
  return e;
}
function Q(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function zf(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ns(a, 0, e.time);
  function a(u) {
    e.state = sa, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== sa) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === ce) return oa(o);
        p.state === ua ? (p.state = fe, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = fe, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (oa(function() {
      e.state === ce && (e.state = ua, e.timer.restart(s, e.delay, e.time), s(u));
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
function Of(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Sr && r.state < Pr, r.state = fe, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function Cf(t) {
  return this.each(function() {
    Of(this, t);
  });
}
function If(t, n) {
  var e, r;
  return function() {
    var i = ot(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
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
    var a = ot(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function qf(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Q(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? If : Rf)(e, t, n));
}
function di(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = ot(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return Q(i, r).value[n];
  };
}
function rs(t, n) {
  var e;
  return (typeof n == "number" ? V : n instanceof qt ? Me : (e = qt(n)) ? (n = e, Me) : Wo)(t, n);
}
function jf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Lf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ff(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Df(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Hf(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Xf(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function Bf(t, n) {
  var e = Fe(t), r = e === "transform" ? $f : rs;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Xf : Hf)(e, r, di(this, "attr." + t, n)) : n == null ? (e.local ? Lf : jf)(e) : (e.local ? Df : Ff)(e, r, n));
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
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Gf(t, a)), e;
  }
  return i._value = n, i;
}
function Vf(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && Uf(t, a)), e;
  }
  return i._value = n, i;
}
function Kf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Fe(t);
  return this.tween(e, (r.local ? Yf : Vf)(r, n));
}
function Wf(t, n) {
  return function() {
    pi(this, t).delay = +n.apply(this, arguments);
  };
}
function Zf(t, n) {
  return n = +n, function() {
    pi(this, t).delay = n;
  };
}
function Jf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Wf : Zf)(n, t)) : Q(this.node(), n).delay;
}
function Qf(t, n) {
  return function() {
    ot(this, t).duration = +n.apply(this, arguments);
  };
}
function th(t, n) {
  return n = +n, function() {
    ot(this, t).duration = n;
  };
}
function nh(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Qf : th)(n, t)) : Q(this.node(), n).duration;
}
function eh(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    ot(this, t).ease = n;
  };
}
function rh(t) {
  var n = this._id;
  return arguments.length ? this.each(eh(n, t)) : Q(this.node(), n).ease;
}
function ih(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    ot(this, t).ease = e;
  };
}
function ah(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ih(this._id, t));
}
function oh(t) {
  typeof t != "function" && (t = qo(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new dt(r, this._parents, this._name, this._id);
}
function sh(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new dt(o, this._parents, this._name, this._id);
}
function uh(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function lh(t, n, e) {
  var r, i, a = uh(n) ? pi : ot;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function ch(t, n) {
  var e = this._id;
  return arguments.length < 2 ? Q(this.node(), e).on.on(t) : this.each(lh(e, t, n));
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
  typeof t != "function" && (t = ui(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Xe(u[f], n, e, f, u, Q(c, e)));
  return new dt(a, this._parents, n, e);
}
function dh(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ro(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = Q(c, e), _ = 0, m = f.length; _ < m; ++_)
          (p = f[_]) && Xe(p, n, e, _, f, d);
        a.push(f), o.push(c);
      }
  return new dt(a, o, n, e);
}
var gh = Fn.prototype.constructor;
function _h() {
  return new gh(this._groups, this._parents);
}
function yh(t, n) {
  var e, r, i;
  return function() {
    var a = rn(this, t), o = (this.style.removeProperty(t), rn(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function is(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function vh(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = rn(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function mh(t, n, e) {
  var r, i, a;
  return function() {
    var o = rn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), rn(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function wh(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = ot(this, t), u = l.on, c = l.value[a] == null ? s || (s = is(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function bh(t, n, e) {
  var r = (t += "") == "transform" ? Mf : rs;
  return n == null ? this.styleTween(t, yh(t, r)).on("end.style." + t, is(t)) : typeof n == "function" ? this.styleTween(t, mh(t, r, di(this, "style." + t, n))).each(wh(this._id, t)) : this.styleTween(t, vh(t, r, n), e).on("end.style." + t, null);
}
function xh(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Mh(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && xh(t, o, e)), r;
  }
  return a._value = n, a;
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
  return this.tween("text", typeof t == "function" ? kh(di(this, "text", t)) : Ah(t == null ? "" : t + ""));
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
  for (var t = this._name, n = this._id, e = as(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = Q(l, n);
        Xe(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new dt(r, this._parents, t, e);
}
function zh() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = ot(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var Oh = 0;
function dt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function as() {
  return ++Oh;
}
var ut = Fn.prototype;
dt.prototype = {
  constructor: dt,
  select: ph,
  selectAll: dh,
  selectChild: ut.selectChild,
  selectChildren: ut.selectChildren,
  filter: oh,
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
  attr: Bf,
  attrTween: Kf,
  style: bh,
  styleTween: $h,
  text: Th,
  textTween: Ph,
  remove: hh,
  tween: qf,
  delay: Jf,
  duration: nh,
  ease: rh,
  easeVarying: ah,
  end: zh,
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
function qh(t) {
  var n, e;
  t instanceof dt ? (n = t._id, t = t._name) : (n = as(), (e = Ih).time = He(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Xe(l, t, n, u, o, e || Rh(l, n));
  return new dt(r, this._parents, t, n);
}
Fn.prototype.interrupt = Cf;
Fn.prototype.transition = qh;
const Er = Math.PI, zr = 2 * Er, Pt = 1e-6, jh = zr - Pt;
function os(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Lh(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return os;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Fh {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? os : Lh(n);
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
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - n, u = i - e, c = o - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > Pt) if (!(Math.abs(h * l - u * c) > Pt) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, _ = l * l + u * u, m = p * p + d * d, M = Math.sqrt(_), b = Math.sqrt(f), x = a * Math.tan((Er - Math.acos((_ + f - m) / (2 * M * b))) / 2), g = x / b, v = x / M;
      Math.abs(g - 1) > Pt && this._append`L${n + g * c},${e + g * h}`, this._append`A${a},${a},0,0,${+(h * p > c * d)},${this._x1 = n + v * l},${this._y1 = e + v * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Pt || Math.abs(this._y1 - c) > Pt) && this._append`L${u},${c}`, r && (f < 0 && (f = f % zr + zr), f > jh ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Pt && this._append`A${r},${r},0,${+(f >= Er)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Dh(t) {
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
function on(t) {
  return t = ke(Math.abs(t)), t ? t[1] : NaN;
}
function Hh(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Xh(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Bh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Te(t) {
  if (!(n = Bh.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new gi({
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
Te.prototype = gi.prototype;
function gi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
gi.prototype.toString = function() {
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
  var r = e[0], i = e[1], a = i - (ss = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + ke(t, Math.max(0, n + a - 1))[0];
}
function la(t, n) {
  var e = ke(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ca = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Dh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => la(t * 100, n),
  r: la,
  s: Gh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function fa(t) {
  return t;
}
var ha = Array.prototype.map, pa = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Yh(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? fa : Hh(ha.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? fa : Xh(ha.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = Te(h);
    var f = h.fill, p = h.align, d = h.sign, _ = h.symbol, m = h.zero, M = h.width, b = h.comma, x = h.precision, g = h.trim, v = h.type;
    v === "n" ? (b = !0, v = "g") : ca[v] || (x === void 0 && (x = 12), g = !0, v = "g"), (m || f === "0" && p === "=") && (m = !0, f = "0", p = "=");
    var P = _ === "$" ? e : _ === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", E = _ === "$" ? r : /[%p]/.test(v) ? o : "", O = ca[v], X = /[defgprs%]/.test(v);
    x = x === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function B(y) {
      var C = P, k = E, I, Nt, j;
      if (v === "c")
        k = O(y) + k, y = "";
      else {
        y = +y;
        var U = y < 0 || 1 / y < 0;
        if (y = isNaN(y) ? l : O(Math.abs(y), x), g && (y = Uh(y)), U && +y == 0 && d !== "+" && (U = !1), C = (U ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, k = (v === "s" ? pa[8 + ss / 3] : "") + k + (U && d === "(" ? ")" : ""), X) {
          for (I = -1, Nt = y.length; ++I < Nt; )
            if (j = y.charCodeAt(I), 48 > j || j > 57) {
              k = (j === 46 ? i + y.slice(I + 1) : y.slice(I)) + k, y = y.slice(0, I);
              break;
            }
        }
      }
      b && !m && (y = n(y, 1 / 0));
      var Y = C.length + y.length + k.length, S = Y < M ? new Array(M - Y + 1).join(f) : "";
      switch (b && m && (y = n(S + y, S.length ? M - k.length : 1 / 0), S = ""), p) {
        case "<":
          y = C + y + k + S;
          break;
        case "=":
          y = C + S + y + k;
          break;
        case "^":
          y = S.slice(0, Y = S.length >> 1) + C + y + k + S.slice(Y);
          break;
        default:
          y = S + C + y + k;
          break;
      }
      return a(y);
    }
    return B.toString = function() {
      return h + "";
    }, B;
  }
  function c(h, f) {
    var p = u((h = Te(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(on(f) / 3))) * 3, _ = Math.pow(10, -d), m = pa[8 + d / 3];
    return function(M) {
      return p(_ * M) + m;
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
  return Math.max(0, -on(Math.abs(t)));
}
function Wh(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(on(n) / 3))) * 3 - on(Math.abs(t)));
}
function Zh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, on(n) - on(t)) + 1;
}
const Jh = Math.random, Qh = function t(n) {
  function e(r, i) {
    var a, o;
    return r = r == null ? 0 : +r, i = i == null ? 1 : +i, function() {
      var s;
      if (a != null) s = a, a = null;
      else do
        a = n() * 2 - 1, s = n() * 2 - 1, o = a * a + s * s;
      while (!o || o > 1);
      return r + i * s * Math.sqrt(-2 * Math.log(o) / o);
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
const da = Symbol("implicit");
function fs() {
  var t = new Gi(), n = [], e = [], r = da;
  function i(a) {
    let o = t.get(a);
    if (o === void 0) {
      if (r !== da) return r;
      t.set(a, o = n.push(a) - 1);
    }
    return e[o % e.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return n.slice();
    n = [], t = new Gi();
    for (const o of a)
      t.has(o) || t.set(o, n.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (e = Array.from(a), i) : e.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
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
var ga = [0, 1];
function Zt(t) {
  return t;
}
function Or(t, n) {
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
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Or(i, r), a = e(o, a)) : (r = Or(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function ip(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Or(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = ol(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function ap(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function op() {
  var t = ga, n = ga, e = hi, r, i, a, o = Zt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Zt && (o = ep(t[0], t[f - 1])), s = f > 2 ? ip : rp, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), V)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, np), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = wf, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Zt, c()) : o !== Zt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function sp() {
  return op()(Zt, Zt);
}
function up(t, n, e, r) {
  var i = dl(t, n, e), a;
  switch (r = Te(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Wh(i, o)) && (r.precision = a), ls(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Zh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Kh(i)) && (r.precision = a - (r.type === "%") * 2);
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
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = Mr(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
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
    return ap(t, Ut());
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
  }, () => new Fh(n);
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
  var e = Wt(!0), r = null, i = hp, a = null, o = cp(s);
  t = typeof t == "function" ? t : t === void 0 ? pp : Wt(t), n = typeof n == "function" ? n : n === void 0 ? dp : Wt(n);
  function s(l) {
    var u, c = (l = fp(l)).length, h, f = !1, p;
    for (r == null && (a = i(p = o())), u = 0; u <= c; ++u)
      !(u < c && e(h = l[u], u, l)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+t(h, u, l), +n(h, u, l));
    if (p) return a = null, p + "" || null;
  }
  return s.x = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Wt(+l), s) : t;
  }, s.y = function(l) {
    return arguments.length ? (n = typeof l == "function" ? l : Wt(+l), s) : n;
  }, s.defined = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Wt(!!l), s) : e;
  }, s.curve = function(l) {
    return arguments.length ? (i = l, r != null && (a = i(r)), s) : i;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? r = a = null : a = i(r = l), s) : r;
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
      t.appendChild(document.createTextNode(".d3-widgets{--color-border: rgb(150, 150, 150);--color-background: #ccc;--color-text: #000;--color-symbol: #fff;--color-lit: #eee;--color-lit-symbol: #bbb;--color-selected: #000;--color-handle: #fff}@media (prefers-color-scheme: dark){.d3-widgets{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}}.d3-widgets.dark-mode{--color-border: rgb(105, 105, 105);--color-background: #333;--color-text: #bcbcbc;--color-symbol: #000;--color-lit: #111;--color-lit-symbol: #444;--color-selected: #dbdbdb;--color-handle: #9f9f9f}._widget_1aazq_40{stroke:var(--color-border);stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:var(--color-background);font-size:16px}._widget_1aazq_40 ._title_1aazq_51{font-size:20px;fill:var(--color-text);stroke:none;text-anchor:middle}._widget_1aazq_40 ._label_1aazq_58{fill:var(--color-text);stroke:none}._widget_1aazq_40 ._lit_1aazq_63{fill:var(--color-lit)}._button_1aazq_67>._symbol_1aazq_67,._radio_1aazq_68>._radiobutton_1aazq_68>._symbol_1aazq_67{fill:var(--color-symbol);fill-rule:nonzero;pointer-events:none}._widget_1aazq_40 ._symbol_1aazq_67._selected_1aazq_74,._toggle_1aazq_75._selected_1aazq_74,._widget_1aazq_40 ._symbol_1aazq_67._selected_1aazq_74._lit_1aazq_63{fill:var(--color-selected)}._widget_1aazq_40 ._symbol_1aazq_67._lit_1aazq_63{fill:var(--color-lit-symbol)}._slider_1aazq_84>._track_1aazq_84,._toggle_1aazq_75>._track_1aazq_84{pointer-events:none}._slider_1aazq_84>._track_overlay_1aazq_89,._toggle_1aazq_75>._track_overlay_1aazq_89{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_1aazq_84>._handle_1aazq_97,._toggle_1aazq_75>._handle_1aazq_97{fill:var(--color-handle)}")), document.head.appendChild(t);
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
  function a(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const h = u + c >>> 1;
        e(s[h], l) <= 0 ? u = h + 1 : c = h;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    const h = i(s, l, u, c - 1);
    return h > u && r(s[h - 1], l) > -r(s[h], l) ? h - 1 : h;
  }
  return { left: i, center: o, right: a };
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
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= bp ? 10 : a >= xp ? 5 : a >= Mp ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? Ne(t, n, e * 2) : [s, l, u];
}
function $p(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? Ne(n, t, e) : Ne(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
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
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
var Tp = { value: () => {
} };
function _i() {
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
pe.prototype = _i.prototype = {
  constructor: pe,
  on: function(t, n) {
    var e = this._, r = Np(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = Sp(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = _a(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = _a(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new pe(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, a; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(n, e);
  }
};
function Sp(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function _a(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Tp, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Ir = "http://www.w3.org/1999/xhtml";
const ya = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ir,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Be(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), ya.hasOwnProperty(n) ? { space: ya[n], local: t } : t;
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
  var n = Be(t);
  return (n.local ? Ep : Pp)(n);
}
function zp() {
}
function yi(t) {
  return t == null ? zp : function() {
    return this.querySelector(t);
  };
}
function Op(t) {
  typeof t != "function" && (t = yi(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new D(r, this._parents);
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
function qp(t) {
  typeof t == "function" ? t = Rp(t) : t = gs(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new D(r, i);
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
var jp = Array.prototype.find;
function Lp(t) {
  return function() {
    return jp.call(this.children, t);
  };
}
function Fp() {
  return this.firstElementChild;
}
function Dp(t) {
  return this.select(t == null ? Fp : Lp(typeof t == "function" ? t : ys(t)));
}
var Hp = Array.prototype.filter;
function Xp() {
  return Array.from(this.children);
}
function Bp(t) {
  return function() {
    return Hp.call(this.children, t);
  };
}
function Up(t) {
  return this.selectAll(t == null ? Xp : Bp(typeof t == "function" ? t : ys(t)));
}
function Gp(t) {
  typeof t != "function" && (t = _s(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new D(r, this._parents);
}
function vs(t) {
  return new Array(t.length);
}
function Yp() {
  return new D(this._enter || this._groups.map(vs), this._parents);
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
function Kp(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new Se(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function Wp(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new Se(t, a[s]);
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
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = Qp(t.call(c, c && c.__data__, u, r)), d = p.length, _ = s[u] = new Array(d), m = o[u] = new Array(d), M = l[u] = new Array(f);
    e(c, h, _, m, M, p, n);
    for (var b = 0, x = 0, g, v; b < d; ++b)
      if (g = _[b]) {
        for (b >= x && (x = b + 1); !(v = m[x]) && ++x < d; ) ;
        g._next = v || null;
      }
  }
  return o = new D(o, r), o._enter = s, o._exit = l, o;
}
function Qp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function td() {
  return new D(this._exit || this._groups.map(vs), this._parents);
}
function nd(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function ed(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new D(s, this._parents);
}
function rd() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function id(t) {
  t || (t = ad);
  function n(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = e[a], s = o.length, l = i[a] = new Array(s), u, c = 0; c < s; ++c)
      (u = o[c]) && (l[c] = u);
    l.sort(n);
  }
  return new D(i, this._parents).order();
}
function ad(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function od() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function sd() {
  return Array.from(this);
}
function ud() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
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
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
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
  var e = Be(t);
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
function vi(t) {
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
  for (var e = vi(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Ms(t, n) {
  for (var e = vi(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
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
    for (var r = vi(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Sd : n ? Td : Nd)(e, n));
}
function Ed() {
  this.textContent = "";
}
function zd(t) {
  return function() {
    this.textContent = t;
  };
}
function Od(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Cd(t) {
  return arguments.length ? this.each(t == null ? Ed : (typeof t == "function" ? Od : zd)(t)) : this.node().textContent;
}
function Id() {
  this.innerHTML = "";
}
function Rd(t) {
  return function() {
    this.innerHTML = t;
  };
}
function qd(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function jd(t) {
  return arguments.length ? this.each(t == null ? Id : (typeof t == "function" ? qd : Rd)(t)) : this.node().innerHTML;
}
function Ld() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Fd() {
  return this.each(Ld);
}
function Dd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Hd() {
  return this.each(Dd);
}
function Xd(t) {
  var n = typeof t == "function" ? t : ds(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Bd() {
  return null;
}
function Ud(t, n) {
  var e = typeof t == "function" ? t : ds(t), r = n == null ? Bd : typeof n == "function" ? n : yi(n);
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
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function n0(t, n, e) {
  return function() {
    var r = this.__on, i, a = Jd(n);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, a, e), i = { type: t.type, name: t.name, value: n, listener: a, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function e0(t, n, e) {
  var r = Qd(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? n0 : t0, i = 0; i < a; ++i) this.each(s(r[i], n, e));
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
function a0(t, n) {
  return this.each((typeof n == "function" ? i0 : r0)(t, n));
}
function* o0() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var As = [null];
function D(t, n) {
  this._groups = t, this._parents = n;
}
function Hn() {
  return new D([[document.documentElement]], As);
}
function s0() {
  return this;
}
D.prototype = Hn.prototype = {
  constructor: D,
  select: Op,
  selectAll: qp,
  selectChild: Dp,
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
  call: od,
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
  html: jd,
  raise: Fd,
  lower: Hd,
  append: Xd,
  insert: Ud,
  remove: Yd,
  clone: Wd,
  datum: Zd,
  on: e0,
  dispatch: a0,
  [Symbol.iterator]: o0
};
function z(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], As);
}
function u0(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Rr(t, n) {
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
  var n = t.document.documentElement, e = z(t).on("dragstart.drag", nn, En);
  "onselectstart" in n ? e.on("selectstart.drag", nn, En) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function f0(t, n) {
  var e = t.document.documentElement, r = z(t).on("dragstart.drag", null);
  n && (r.on("click.drag", nn, En), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const te = (t) => () => t;
function qr(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: a,
  x: o,
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
    active: { value: a, enumerable: !0, configurable: !0 },
    x: { value: o, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
qr.prototype.on = function() {
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
  var t = h0, n = p0, e = d0, r = g0, i = {}, a = _i("start", "drag", "end"), o = 0, s, l, u, c, h = 0;
  function f(g) {
    g.on("mousedown.drag", p).filter(r).on("touchstart.drag", m).on("touchmove.drag", M, l0).on("touchend.drag touchcancel.drag", b).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(g, v) {
    if (!(c || !t.call(this, g, v))) {
      var P = x(this, n.call(this, g, v), g, v, "mouse");
      P && (z(g.view).on("mousemove.drag", d, En).on("mouseup.drag", _, En), c0(g.view), hr(g), u = !1, s = g.clientX, l = g.clientY, P("start", g));
    }
  }
  function d(g) {
    if (nn(g), !u) {
      var v = g.clientX - s, P = g.clientY - l;
      u = v * v + P * P > h;
    }
    i.mouse("drag", g);
  }
  function _(g) {
    z(g.view).on("mousemove.drag mouseup.drag", null), f0(g.view, u), nn(g), i.mouse("end", g);
  }
  function m(g, v) {
    if (t.call(this, g, v)) {
      var P = g.changedTouches, E = n.call(this, g, v), O = P.length, X, B;
      for (X = 0; X < O; ++X)
        (B = x(this, E, g, v, P[X].identifier, P[X])) && (hr(g), B("start", g, P[X]));
    }
  }
  function M(g) {
    var v = g.changedTouches, P = v.length, E, O;
    for (E = 0; E < P; ++E)
      (O = i[v[E].identifier]) && (nn(g), O("drag", g, v[E]));
  }
  function b(g) {
    var v = g.changedTouches, P = v.length, E, O;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < P; ++E)
      (O = i[v[E].identifier]) && (hr(g), O("end", g, v[E]));
  }
  function x(g, v, P, E, O, X) {
    var B = a.copy(), y = Rr(X || P, v), C, k, I;
    if ((I = e.call(g, new qr("beforestart", {
      sourceEvent: P,
      target: f,
      identifier: O,
      active: o,
      x: y[0],
      y: y[1],
      dx: 0,
      dy: 0,
      dispatch: B
    }), E)) != null)
      return C = I.x - y[0] || 0, k = I.y - y[1] || 0, function Nt(j, U, Y) {
        var S = y, lr;
        switch (j) {
          case "start":
            i[O] = Nt, lr = o++;
            break;
          case "end":
            delete i[O], --o;
          // falls through
          case "drag":
            y = Rr(Y || U, v), lr = o;
            break;
        }
        B.call(
          j,
          g,
          new qr(j, {
            sourceEvent: U,
            subject: I,
            target: f,
            identifier: O,
            active: lr,
            x: y[0] + C,
            y: y[1] + k,
            dx: y[0] - S[0],
            dy: y[1] - S[1],
            dispatch: B
          }),
          E
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
    var g = a.on.apply(a, arguments);
    return g === a ? f : g;
  }, f.clickDistance = function(g) {
    return arguments.length ? (h = (g = +g) * g, f) : Math.sqrt(h);
  }, f;
}
function mi(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ks(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Xn() {
}
var zn = 0.7, Pe = 1 / zn, en = "\\s*([+-]?\\d+)\\s*", On = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", it = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", y0 = /^#([0-9a-f]{3,8})$/, v0 = new RegExp(`^rgb\\(${en},${en},${en}\\)$`), m0 = new RegExp(`^rgb\\(${it},${it},${it}\\)$`), w0 = new RegExp(`^rgba\\(${en},${en},${en},${On}\\)$`), b0 = new RegExp(`^rgba\\(${it},${it},${it},${On}\\)$`), x0 = new RegExp(`^hsl\\(${On},${it},${it}\\)$`), M0 = new RegExp(`^hsla\\(${On},${it},${it},${On}\\)$`), va = {
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
mi(Xn, Lt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ma,
  // Deprecated! Use color.formatHex.
  formatHex: ma,
  formatHex8: $0,
  formatHsl: A0,
  formatRgb: wa,
  toString: wa
});
function ma() {
  return this.rgb().formatHex();
}
function $0() {
  return this.rgb().formatHex8();
}
function A0() {
  return Ts(this).formatHsl();
}
function wa() {
  return this.rgb().formatRgb();
}
function Lt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = y0.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? ba(n) : e === 3 ? new q(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? ne(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? ne(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = v0.exec(t)) ? new q(n[1], n[2], n[3], 1) : (n = m0.exec(t)) ? new q(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = w0.exec(t)) ? ne(n[1], n[2], n[3], n[4]) : (n = b0.exec(t)) ? ne(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = x0.exec(t)) ? $a(n[1], n[2] / 100, n[3] / 100, 1) : (n = M0.exec(t)) ? $a(n[1], n[2] / 100, n[3] / 100, n[4]) : va.hasOwnProperty(t) ? ba(va[t]) : t === "transparent" ? new q(NaN, NaN, NaN, 0) : null;
}
function ba(t) {
  return new q(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ne(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new q(t, n, e, r);
}
function k0(t) {
  return t instanceof Xn || (t = Lt(t)), t ? (t = t.rgb(), new q(t.r, t.g, t.b, t.opacity)) : new q();
}
function jr(t, n, e, r) {
  return arguments.length === 1 ? k0(t) : new q(t, n, e, r ?? 1);
}
function q(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
mi(q, jr, ks(Xn, {
  brighter(t) {
    return t = t == null ? Pe : Math.pow(Pe, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? zn : Math.pow(zn, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new q(Rt(this.r), Rt(this.g), Rt(this.b), Ee(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: xa,
  // Deprecated! Use color.formatHex.
  formatHex: xa,
  formatHex8: T0,
  formatRgb: Ma,
  toString: Ma
}));
function xa() {
  return `#${Ot(this.r)}${Ot(this.g)}${Ot(this.b)}`;
}
function T0() {
  return `#${Ot(this.r)}${Ot(this.g)}${Ot(this.b)}${Ot((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ma() {
  const t = Ee(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Rt(this.r)}, ${Rt(this.g)}, ${Rt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ee(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Rt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Ot(t) {
  return t = Rt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function $a(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Z(t, n, e, r);
}
function Ts(t) {
  if (t instanceof Z) return new Z(t.h, t.s, t.l, t.opacity);
  if (t instanceof Xn || (t = Lt(t)), !t) return new Z();
  if (t instanceof Z) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new Z(o, s, l, t.opacity);
}
function N0(t, n, e, r) {
  return arguments.length === 1 ? Ts(t) : new Z(t, n, e, r ?? 1);
}
function Z(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
mi(Z, N0, ks(Xn, {
  brighter(t) {
    return t = t == null ? Pe : Math.pow(Pe, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? zn : Math.pow(zn, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new q(
      pr(t >= 240 ? t - 240 : t + 120, i, r),
      pr(t, i, r),
      pr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Z(Aa(this.h), ee(this.s), ee(this.l), Ee(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Ee(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Aa(this.h)}, ${ee(this.s) * 100}%, ${ee(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Aa(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ee(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function pr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const wi = (t) => () => t;
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
    return e - n ? P0(n, e, t) : wi(isNaN(n) ? e : n);
  };
}
function Ns(t, n) {
  var e = n - t;
  return e ? S0(t, e) : wi(isNaN(t) ? n : t);
}
const ze = function t(n) {
  var e = E0(n);
  function r(i, a) {
    var o = e((i = jr(i)).r, (a = jr(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = Ns(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function z0(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function O0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function C0(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = bi(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function I0(t, n) {
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
function R0(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = bi(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var Lr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, dr = new RegExp(Lr.source, "g");
function q0(t) {
  return function() {
    return t;
  };
}
function j0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Ss(t, n) {
  var e = Lr.lastIndex = dr.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Lr.exec(t)) && (i = dr.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: K(r, i) })), e = dr.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? j0(l[0].x) : q0(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function bi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? wi(n) : (e === "number" ? K : e === "string" ? (r = Lt(n)) ? (n = r, ze) : Ss : n instanceof Lt ? ze : n instanceof Date ? I0 : O0(n) ? z0 : Array.isArray(n) ? C0 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? R0 : K)(t, n);
}
function L0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var ka = 180 / Math.PI, Ps = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Es(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * ka,
    skewX: Math.atan(l) * ka,
    scaleX: o,
    scaleY: s
  };
}
var re;
function F0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Ps : Es(n.a, n.b, n.c, n.d, n.e, n.f);
}
function D0(t) {
  return t == null || (re || (re = document.createElementNS("http://www.w3.org/2000/svg", "g")), re.setAttribute("transform", t), !(t = re.transform.baseVal.consolidate())) ? Ps : (t = t.matrix, Es(t.a, t.b, t.c, t.d, t.e, t.f));
}
function zs(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var _ = p.push("translate(", null, n, null, e);
      d.push({ i: _ - 4, x: K(u, h) }, { i: _ - 2, x: K(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
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
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, _ = f.length, m; ++d < _; ) h[(m = f[d]).i] = m.x(p);
      return h.join("");
    };
  };
}
var H0 = zs(F0, "px, ", "px)", "deg)"), X0 = zs(D0, ", ", ")", ")"), un = 0, xn = 0, _n = 0, Os = 1e3, Oe, Mn, Ce = 0, Ft = 0, Ue = 0, Cn = typeof performance == "object" && performance.now ? performance : Date, Cs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function xi() {
  return Ft || (Cs(B0), Ft = Cn.now() + Ue);
}
function B0() {
  Ft = 0;
}
function Ie() {
  this._call = this._time = this._next = null;
}
Ie.prototype = Is.prototype = {
  constructor: Ie,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? xi() : +e) + (n == null ? 0 : +n), !this._next && Mn !== this && (Mn ? Mn._next = this : Oe = this, Mn = this), this._call = t, this._time = e, Fr();
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
  xi(), ++un;
  for (var t = Oe, n; t; )
    (n = Ft - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --un;
}
function Ta() {
  Ft = (Ce = Cn.now()) + Ue, un = xn = 0;
  try {
    U0();
  } finally {
    un = 0, Y0(), Ft = 0;
  }
}
function G0() {
  var t = Cn.now(), n = t - Ce;
  n > Os && (Ue -= n, Ce = t);
}
function Y0() {
  for (var t, n = Oe, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Oe = e);
  Mn = t, Fr(r);
}
function Fr(t) {
  if (!un) {
    xn && (xn = clearTimeout(xn));
    var n = t - Ft;
    n > 24 ? (t < 1 / 0 && (xn = setTimeout(Ta, t - Cn.now() - Ue)), _n && (_n = clearInterval(_n))) : (_n || (Ce = Cn.now(), _n = setInterval(G0, Os)), un = 1, Cs(Ta));
  }
}
function Na(t, n, e) {
  var r = new Ie();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var V0 = _i("start", "end", "cancel", "interrupt"), K0 = [], Rs = 0, Sa = 1, Dr = 2, de = 3, Pa = 4, Hr = 5, ge = 6;
function Ge(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  W0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: V0,
    tween: K0,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Rs
  });
}
function Mi(t, n) {
  var e = tt(t, n);
  if (e.state > Rs) throw new Error("too late; already scheduled");
  return e;
}
function st(t, n) {
  var e = tt(t, n);
  if (e.state > de) throw new Error("too late; already running");
  return e;
}
function tt(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function W0(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Is(a, 0, e.time);
  function a(u) {
    e.state = Sa, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== Sa) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === de) return Na(o);
        p.state === Pa ? (p.state = ge, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = ge, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Na(function() {
      e.state === de && (e.state = Pa, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Dr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Dr) {
      for (e.state = de, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Hr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === Hr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = ge, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function Z0(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Dr && r.state < Hr, r.state = ge, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
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
    var i = st(this, t), a = i.tween;
    if (a !== e) {
      r = e = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === n) {
          r = r.slice(), r.splice(o, 1);
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
    var a = st(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    a.tween = i;
  };
}
function ng(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = tt(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? Q0 : tg)(e, t, n));
}
function $i(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = st(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return tt(i, r).value[n];
  };
}
function qs(t, n) {
  var e;
  return (typeof n == "number" ? K : n instanceof Lt ? ze : (e = Lt(n)) ? (n = e, ze) : Ss)(t, n);
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
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function ag(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function og(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function sg(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function ug(t, n) {
  var e = Be(t), r = e === "transform" ? X0 : qs;
  return this.attrTween(t, typeof n == "function" ? (e.local ? sg : og)(e, r, $i(this, "attr." + t, n)) : n == null ? (e.local ? rg : eg)(e) : (e.local ? ag : ig)(e, r, n));
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
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && cg(t, a)), e;
  }
  return i._value = n, i;
}
function hg(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && lg(t, a)), e;
  }
  return i._value = n, i;
}
function pg(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Be(t);
  return this.tween(e, (r.local ? fg : hg)(r, n));
}
function dg(t, n) {
  return function() {
    Mi(this, t).delay = +n.apply(this, arguments);
  };
}
function gg(t, n) {
  return n = +n, function() {
    Mi(this, t).delay = n;
  };
}
function _g(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? dg : gg)(n, t)) : tt(this.node(), n).delay;
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
  return arguments.length ? this.each((typeof t == "function" ? yg : vg)(n, t)) : tt(this.node(), n).duration;
}
function wg(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    st(this, t).ease = n;
  };
}
function bg(t) {
  var n = this._id;
  return arguments.length ? this.each(wg(n, t)) : tt(this.node(), n).ease;
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
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new gt(r, this._parents, this._name, this._id);
}
function Ag(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new gt(o, this._parents, this._name, this._id);
}
function kg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Tg(t, n, e) {
  var r, i, a = kg(n) ? Mi : st;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function Ng(t, n) {
  var e = this._id;
  return arguments.length < 2 ? tt(this.node(), e).on.on(t) : this.each(Tg(e, t, n));
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
  typeof t != "function" && (t = yi(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Ge(u[f], n, e, f, u, tt(c, e)));
  return new gt(a, this._parents, n, e);
}
function zg(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = gs(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = tt(c, e), _ = 0, m = f.length; _ < m; ++_)
          (p = f[_]) && Ge(p, n, e, _, f, d);
        a.push(f), o.push(c);
      }
  return new gt(a, o, n, e);
}
var Og = Hn.prototype.constructor;
function Cg() {
  return new Og(this._groups, this._parents);
}
function Ig(t, n) {
  var e, r, i;
  return function() {
    var a = sn(this, t), o = (this.style.removeProperty(t), sn(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function js(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Rg(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = sn(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function qg(t, n, e) {
  var r, i, a;
  return function() {
    var o = sn(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), sn(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function jg(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = st(this, t), u = l.on, c = l.value[a] == null ? s || (s = js(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function Lg(t, n, e) {
  var r = (t += "") == "transform" ? H0 : qs;
  return n == null ? this.styleTween(t, Ig(t, r)).on("end.style." + t, js(t)) : typeof n == "function" ? this.styleTween(t, qg(t, r, $i(this, "style." + t, n))).each(jg(this._id, t)) : this.styleTween(t, Rg(t, r, n), e).on("end.style." + t, null);
}
function Fg(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Dg(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && Fg(t, o, e)), r;
  }
  return a._value = n, a;
}
function Hg(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Dg(t, n, e ?? ""));
}
function Xg(t) {
  return function() {
    this.textContent = t;
  };
}
function Bg(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Ug(t) {
  return this.tween("text", typeof t == "function" ? Bg($i(this, "text", t)) : Xg(t == null ? "" : t + ""));
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
  for (var t = this._name, n = this._id, e = Ls(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = tt(l, n);
        Ge(l, t, e, u, o, {
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
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = st(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var Zg = 0;
function gt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Ls() {
  return ++Zg;
}
var lt = Hn.prototype;
gt.prototype = {
  constructor: gt,
  select: Eg,
  selectAll: zg,
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
  style: Lg,
  styleTween: Hg,
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
  t instanceof gt ? (n = t._id, t = t._name) : (n = Ls(), (e = Qg).time = xi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Ge(l, t, n, u, o, e || t_(l, n));
  return new gt(r, this._parents, t, n);
}
Hn.prototype.interrupt = J0;
Hn.prototype.transition = n_;
const Xr = Math.PI, Br = 2 * Xr, Et = 1e-6, e_ = Br - Et;
function Fs(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function r_(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Fs;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Ds {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Fs : r_(n);
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
  bezierCurveTo(n, e, r, i, a, o) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(n, e, r, i, a) {
    if (n = +n, e = +e, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, l = r - n, u = i - e, c = o - n, h = s - e, f = c * c + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (f > Et) if (!(Math.abs(h * l - u * c) > Et) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, _ = l * l + u * u, m = p * p + d * d, M = Math.sqrt(_), b = Math.sqrt(f), x = a * Math.tan((Xr - Math.acos((_ + f - m) / (2 * M * b))) / 2), g = x / b, v = x / M;
      Math.abs(g - 1) > Et && this._append`L${n + g * c},${e + g * h}`, this._append`A${a},${a},0,0,${+(h * p > c * d)},${this._x1 = n + v * l},${this._y1 = e + v * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > Et || Math.abs(this._y1 - c) > Et) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Br + Br), f > e_ ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > Et && this._append`A${r},${r},0,${+(f >= Xr)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function nt() {
  return new Ds();
}
nt.prototype = Ds.prototype;
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
function a_(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function o_(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var s_ = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function qe(t) {
  if (!(n = s_.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ai({
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
qe.prototype = Ai.prototype;
function Ai(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ai.prototype.toString = function() {
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
var Hs;
function l_(t, n) {
  var e = Re(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (Hs = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Re(t, Math.max(0, n + a - 1))[0];
}
function Ea(t, n) {
  var e = Re(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const za = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: i_,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Ea(t * 100, n),
  r: Ea,
  s: l_,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Oa(t) {
  return t;
}
var Ca = Array.prototype.map, Ia = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function c_(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Oa : a_(Ca.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Oa : o_(Ca.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = qe(h);
    var f = h.fill, p = h.align, d = h.sign, _ = h.symbol, m = h.zero, M = h.width, b = h.comma, x = h.precision, g = h.trim, v = h.type;
    v === "n" ? (b = !0, v = "g") : za[v] || (x === void 0 && (x = 12), g = !0, v = "g"), (m || f === "0" && p === "=") && (m = !0, f = "0", p = "=");
    var P = _ === "$" ? e : _ === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", E = _ === "$" ? r : /[%p]/.test(v) ? o : "", O = za[v], X = /[defgprs%]/.test(v);
    x = x === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function B(y) {
      var C = P, k = E, I, Nt, j;
      if (v === "c")
        k = O(y) + k, y = "";
      else {
        y = +y;
        var U = y < 0 || 1 / y < 0;
        if (y = isNaN(y) ? l : O(Math.abs(y), x), g && (y = u_(y)), U && +y == 0 && d !== "+" && (U = !1), C = (U ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, k = (v === "s" ? Ia[8 + Hs / 3] : "") + k + (U && d === "(" ? ")" : ""), X) {
          for (I = -1, Nt = y.length; ++I < Nt; )
            if (j = y.charCodeAt(I), 48 > j || j > 57) {
              k = (j === 46 ? i + y.slice(I + 1) : y.slice(I)) + k, y = y.slice(0, I);
              break;
            }
        }
      }
      b && !m && (y = n(y, 1 / 0));
      var Y = C.length + y.length + k.length, S = Y < M ? new Array(M - Y + 1).join(f) : "";
      switch (b && m && (y = n(S + y, S.length ? M - k.length : 1 / 0), S = ""), p) {
        case "<":
          y = C + y + k + S;
          break;
        case "=":
          y = C + S + y + k;
          break;
        case "^":
          y = S.slice(0, Y = S.length >> 1) + C + y + k + S.slice(Y);
          break;
        default:
          y = S + C + y + k;
          break;
      }
      return a(y);
    }
    return B.toString = function() {
      return h + "";
    }, B;
  }
  function c(h, f) {
    var p = u((h = qe(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(ln(f) / 3))) * 3, _ = Math.pow(10, -d), m = Ia[8 + d / 3];
    return function(M) {
      return p(_ * M) + m;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var ie, ki, Xs;
f_({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function f_(t) {
  return ie = c_(t), ki = ie.format, Xs = ie.formatPrefix, ie;
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
var Ra = [0, 1];
function Jt(t) {
  return t;
}
function Ur(t, n) {
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
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Ur(i, r), a = e(o, a)) : (r = Ur(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function w_(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Ur(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = wp(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function b_(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function x_() {
  var t = Ra, n = Ra, e = bi, r, i, a, o = Jt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Jt && (o = v_(t[0], t[f - 1])), s = f > 2 ? w_ : m_, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), K)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, y_), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = L0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Jt, c()) : o !== Jt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function M_() {
  return x_()(Jt, Jt);
}
function $_(t, n, e, r) {
  var i = Ap(t, n, e), a;
  switch (r = qe(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = p_(i, o)) && (r.precision = a), Xs(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = d_(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = h_(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return ki(r);
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
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = Cr(o, s, e), u === l)
        return r[i] = o, r[a] = s, n(r);
      if (u > 0)
        o = Math.floor(o / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        o = Math.ceil(o * u) / u, s = Math.floor(s * u) / u;
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
var Bs = typeof global == "object" && global && global.Object === Object && global, k_ = typeof self == "object" && self && self.Object === Object && self, yt = Bs || k_ || Function("return this")(), at = yt.Symbol, Us = Object.prototype, T_ = Us.hasOwnProperty, N_ = Us.toString, yn = at ? at.toStringTag : void 0;
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
function z_(t) {
  return E_.call(t);
}
var O_ = "[object Null]", C_ = "[object Undefined]", qa = at ? at.toStringTag : void 0;
function pn(t) {
  return t == null ? t === void 0 ? C_ : O_ : qa && qa in Object(t) ? S_(t) : z_(t);
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
var J = Array.isArray, ja = at ? at.prototype : void 0, La = ja ? ja.toString : void 0;
function Ys(t) {
  if (typeof t == "string")
    return t;
  if (J(t))
    return Gs(t, Ys) + "";
  if (Ye(t))
    return La ? La.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var R_ = /\s/;
function q_(t) {
  for (var n = t.length; n-- && R_.test(t.charAt(n)); )
    ;
  return n;
}
var j_ = /^\s+/;
function L_(t) {
  return t && t.slice(0, q_(t) + 1).replace(j_, "");
}
function fn(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Fa = NaN, F_ = /^[-+]0x[0-9a-f]+$/i, D_ = /^0b[01]+$/i, H_ = /^0o[0-7]+$/i, X_ = parseInt;
function B_(t) {
  if (typeof t == "number")
    return t;
  if (Ye(t))
    return Fa;
  if (fn(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = fn(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = L_(t);
  var e = D_.test(t);
  return e || H_.test(t) ? X_(t.slice(2), e ? 2 : 8) : F_.test(t) ? Fa : +t;
}
var U_ = 1 / 0, G_ = 17976931348623157e292;
function gr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = B_(t), t === U_ || t === -1 / 0) {
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
var _r = yt["__core-js_shared__"], Da = function() {
  var t = /[^.]+$/.exec(_r && _r.keys && _r.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function J_(t) {
  return !!Da && Da in t;
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
var ny = /[\\^$.*+?()[\]{}|]/g, ey = /^\[object .+?Constructor\]$/, ry = Function.prototype, iy = Object.prototype, ay = ry.toString, oy = iy.hasOwnProperty, sy = RegExp(
  "^" + ay.call(oy).replace(ny, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
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
var Gr = dn(yt, "WeakMap"), cy = 9007199254740991, fy = /^(?:0|[1-9]\d*)$/;
function Ti(t, n) {
  var e = typeof t;
  return n = n ?? cy, !!n && (e == "number" || e != "symbol" && fy.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Ni(t, n) {
  return t === n || t !== t && n !== n;
}
var hy = 9007199254740991;
function Si(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= hy;
}
function Ve(t) {
  return t != null && Si(t.length) && !Vs(t);
}
function py(t, n, e) {
  if (!fn(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Ve(e) && Ti(n, e.length) : r == "string" && n in e) ? Ni(e[n], t) : !1;
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
function Ha(t) {
  return cn(t) && pn(t) == yy;
}
var Ks = Object.prototype, vy = Ks.hasOwnProperty, my = Ks.propertyIsEnumerable, Pi = Ha(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ha : function(t) {
  return cn(t) && vy.call(t, "callee") && !my.call(t, "callee");
};
function wy() {
  return !1;
}
var Ws = typeof exports == "object" && exports && !exports.nodeType && exports, Xa = Ws && typeof module == "object" && module && !module.nodeType && module, by = Xa && Xa.exports === Ws, Ba = by ? yt.Buffer : void 0, xy = Ba ? Ba.isBuffer : void 0, Yr = xy || wy, My = "[object Arguments]", $y = "[object Array]", Ay = "[object Boolean]", ky = "[object Date]", Ty = "[object Error]", Ny = "[object Function]", Sy = "[object Map]", Py = "[object Number]", Ey = "[object Object]", zy = "[object RegExp]", Oy = "[object Set]", Cy = "[object String]", Iy = "[object WeakMap]", Ry = "[object ArrayBuffer]", qy = "[object DataView]", jy = "[object Float32Array]", Ly = "[object Float64Array]", Fy = "[object Int8Array]", Dy = "[object Int16Array]", Hy = "[object Int32Array]", Xy = "[object Uint8Array]", By = "[object Uint8ClampedArray]", Uy = "[object Uint16Array]", Gy = "[object Uint32Array]", T = {};
T[jy] = T[Ly] = T[Fy] = T[Dy] = T[Hy] = T[Xy] = T[By] = T[Uy] = T[Gy] = !0;
T[My] = T[$y] = T[Ry] = T[Ay] = T[qy] = T[ky] = T[Ty] = T[Ny] = T[Sy] = T[Py] = T[Ey] = T[zy] = T[Oy] = T[Cy] = T[Iy] = !1;
function Yy(t) {
  return cn(t) && Si(t.length) && !!T[pn(t)];
}
function Vy(t) {
  return function(n) {
    return t(n);
  };
}
var Zs = typeof exports == "object" && exports && !exports.nodeType && exports, An = Zs && typeof module == "object" && module && !module.nodeType && module, Ky = An && An.exports === Zs, yr = Ky && Bs.process, Ua = function() {
  try {
    var t = An && An.require && An.require("util").types;
    return t || yr && yr.binding && yr.binding("util");
  } catch {
  }
}(), Ga = Ua && Ua.isTypedArray, Js = Ga ? Vy(Ga) : Yy, Wy = Object.prototype, Zy = Wy.hasOwnProperty;
function Jy(t, n) {
  var e = J(t), r = !e && Pi(t), i = !e && !r && Yr(t), a = !e && !r && !i && Js(t), o = e || r || i || a, s = o ? _y(t.length, String) : [], l = s.length;
  for (var u in t)
    Zy.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ti(u, l))) && s.push(u);
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
function Ei(t) {
  return Ve(t) ? Jy(t) : rv(t);
}
var iv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, av = /^\w*$/;
function zi(t, n) {
  if (J(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Ye(t) ? !0 : av.test(t) || !iv.test(t) || n != null && t in Object(n);
}
var Rn = dn(Object, "create");
function ov() {
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
function Dt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Dt.prototype.clear = ov;
Dt.prototype.delete = sv;
Dt.prototype.get = fv;
Dt.prototype.has = dv;
Dt.prototype.set = _v;
function yv() {
  this.__data__ = [], this.size = 0;
}
function Ke(t, n) {
  for (var e = t.length; e--; )
    if (Ni(t[e][0], n))
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
var qn = dn(yt, "Map");
function $v() {
  this.size = 0, this.__data__ = {
    hash: new Dt(),
    map: new (qn || vt)(),
    string: new Dt()
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
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Oi.Cache || mt)(), e;
}
Oi.Cache = mt;
var Ev = 500;
function zv(t) {
  var n = Oi(t, function(r) {
    return e.size === Ev && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Ov = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Cv = /\\(\\)?/g, Iv = zv(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Ov, function(e, r, i, a) {
    n.push(i ? a.replace(Cv, "$1") : r || e);
  }), n;
});
function Rv(t) {
  return t == null ? "" : Ys(t);
}
function Qs(t, n) {
  return J(t) ? t : zi(t, n) ? [t] : Iv(Rv(t));
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
function qv(t, n, e) {
  var r = t == null ? void 0 : tu(t, n);
  return r === void 0 ? e : r;
}
function nu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Ya = at ? at.isConcatSpreadable : void 0;
function jv(t) {
  return J(t) || Pi(t) || !!(Ya && t && t[Ya]);
}
function Lv(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = jv), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? nu(i, s) : i[i.length] = s;
  }
  return i;
}
function Fv(t) {
  var n = t == null ? 0 : t.length;
  return n ? Lv(t) : [];
}
function Dv() {
  this.__data__ = new vt(), this.size = 0;
}
function Hv(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Xv(t) {
  return this.__data__.get(t);
}
function Bv(t) {
  return this.__data__.has(t);
}
var Uv = 200;
function Gv(t, n) {
  var e = this.__data__;
  if (e instanceof vt) {
    var r = e.__data__;
    if (!qn || r.length < Uv - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new mt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ht(t) {
  var n = this.__data__ = new vt(t);
  this.size = n.size;
}
ht.prototype.clear = Dv;
ht.prototype.delete = Hv;
ht.prototype.get = Xv;
ht.prototype.has = Bv;
ht.prototype.set = Gv;
function Yv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Vv() {
  return [];
}
var Kv = Object.prototype, Wv = Kv.propertyIsEnumerable, Va = Object.getOwnPropertySymbols, Zv = Va ? function(t) {
  return t == null ? [] : (t = Object(t), Yv(Va(t), function(n) {
    return Wv.call(t, n);
  }));
} : Vv;
function Jv(t, n, e) {
  var r = n(t);
  return J(t) ? r : nu(r, e(t));
}
function Ka(t) {
  return Jv(t, Ei, Zv);
}
var Vr = dn(yt, "DataView"), Kr = dn(yt, "Promise"), Wr = dn(yt, "Set"), Wa = "[object Map]", Qv = "[object Object]", Za = "[object Promise]", Ja = "[object Set]", Qa = "[object WeakMap]", to = "[object DataView]", tm = Gt(Vr), nm = Gt(qn), em = Gt(Kr), rm = Gt(Wr), im = Gt(Gr), Mt = pn;
(Vr && Mt(new Vr(new ArrayBuffer(1))) != to || qn && Mt(new qn()) != Wa || Kr && Mt(Kr.resolve()) != Za || Wr && Mt(new Wr()) != Ja || Gr && Mt(new Gr()) != Qa) && (Mt = function(t) {
  var n = pn(t), e = n == Qv ? t.constructor : void 0, r = e ? Gt(e) : "";
  if (r)
    switch (r) {
      case tm:
        return to;
      case nm:
        return Wa;
      case em:
        return Za;
      case rm:
        return Ja;
      case im:
        return Qa;
    }
  return n;
});
var no = yt.Uint8Array, am = "__lodash_hash_undefined__";
function om(t) {
  return this.__data__.set(t, am), this;
}
function sm(t) {
  return this.__data__.has(t);
}
function je(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new mt(); ++n < e; )
    this.add(t[n]);
}
je.prototype.add = je.prototype.push = om;
je.prototype.has = sm;
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
function eu(t, n, e, r, i, a) {
  var o = e & cm, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & fm ? new je() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], _ = n[h];
    if (r)
      var m = o ? r(_, d, h, n, t, a) : r(d, _, h, t, n, a);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!um(n, function(M, b) {
        if (!lm(p, b) && (d === M || i(d, M, e, r, a)))
          return p.push(b);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
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
var dm = 1, gm = 2, _m = "[object Boolean]", ym = "[object Date]", vm = "[object Error]", mm = "[object Map]", wm = "[object Number]", bm = "[object RegExp]", xm = "[object Set]", Mm = "[object String]", $m = "[object Symbol]", Am = "[object ArrayBuffer]", km = "[object DataView]", eo = at ? at.prototype : void 0, vr = eo ? eo.valueOf : void 0;
function Tm(t, n, e, r, i, a, o) {
  switch (e) {
    case km:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Am:
      return !(t.byteLength != n.byteLength || !a(new no(t), new no(n)));
    case _m:
    case ym:
    case wm:
      return Ni(+t, +n);
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
      var u = o.get(t);
      if (u)
        return u == n;
      r |= gm, o.set(t, n);
      var c = eu(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case $m:
      if (vr)
        return vr.call(t) == vr.call(n);
  }
  return !1;
}
var Nm = 1, Sm = Object.prototype, Pm = Sm.hasOwnProperty;
function Em(t, n, e, r, i, a) {
  var o = e & Nm, s = Ka(t), l = s.length, u = Ka(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : Pm.call(n, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var _ = !0;
  a.set(t, n), a.set(n, t);
  for (var m = o; ++h < l; ) {
    f = s[h];
    var M = t[f], b = n[f];
    if (r)
      var x = o ? r(b, M, f, n, t, a) : r(M, b, f, t, n, a);
    if (!(x === void 0 ? M === b || i(M, b, e, r, a) : x)) {
      _ = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (_ && !m) {
    var g = t.constructor, v = n.constructor;
    g != v && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof v == "function" && v instanceof v) && (_ = !1);
  }
  return a.delete(t), a.delete(n), _;
}
var zm = 1, ro = "[object Arguments]", io = "[object Array]", ae = "[object Object]", Om = Object.prototype, ao = Om.hasOwnProperty;
function Cm(t, n, e, r, i, a) {
  var o = J(t), s = J(n), l = o ? io : Mt(t), u = s ? io : Mt(n);
  l = l == ro ? ae : l, u = u == ro ? ae : u;
  var c = l == ae, h = u == ae, f = l == u;
  if (f && Yr(t)) {
    if (!Yr(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new ht()), o || Js(t) ? eu(t, n, e, r, i, a) : Tm(t, n, l, e, r, i, a);
  if (!(e & zm)) {
    var p = c && ao.call(t, "__wrapped__"), d = h && ao.call(n, "__wrapped__");
    if (p || d) {
      var _ = p ? t.value() : t, m = d ? n.value() : n;
      return a || (a = new ht()), i(_, m, e, r, a);
    }
  }
  return f ? (a || (a = new ht()), Em(t, n, e, r, i, a)) : !1;
}
function Ci(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !cn(t) && !cn(n) ? t !== t && n !== n : Cm(t, n, e, r, Ci, i);
}
var Im = 1, Rm = 2;
function qm(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new ht(), h;
      if (!(h === void 0 ? Ci(u, l, Im | Rm, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function ru(t) {
  return t === t && !fn(t);
}
function jm(t) {
  for (var n = Ei(t), e = n.length; e--; ) {
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
function Lm(t) {
  var n = jm(t);
  return n.length == 1 && n[0][2] ? iu(n[0][0], n[0][1]) : function(e) {
    return e === t || qm(e, t, n);
  };
}
function Fm(t, n) {
  return t != null && n in Object(t);
}
function Dm(t, n, e) {
  n = Qs(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Ze(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Si(i) && Ti(o, i) && (J(t) || Pi(t)));
}
function Hm(t, n) {
  return t != null && Dm(t, n, Fm);
}
var Xm = 1, Bm = 2;
function Um(t, n) {
  return zi(t) && ru(n) ? iu(Ze(t), n) : function(e) {
    var r = qv(e, t);
    return r === void 0 && r === n ? Hm(e, t) : Ci(n, r, Xm | Bm);
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
  return zi(t) ? Gm(Ze(t)) : Ym(t);
}
function Km(t) {
  return typeof t == "function" ? t : t == null ? Y_ : typeof t == "object" ? J(t) ? Um(t[0], t[1]) : Lm(t) : Vm(t);
}
function Wm(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var Zm = Wm();
function Jm(t, n) {
  return t && Zm(t, n, Ei);
}
function Qm(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Ve(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var t1 = Qm(Jm);
function n1(t, n) {
  var e = -1, r = Ve(t) ? Array(t.length) : [];
  return t1(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function oo(t, n) {
  var e = J(t) ? Gs : n1;
  return e(t, Km(n));
}
var e1 = Math.ceil, r1 = Math.max;
function i1(t, n, e, r) {
  for (var i = -1, a = r1(e1((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function a1(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && py(n, e, r) && (e = r = void 0), n = gr(n), e === void 0 ? (e = n, n = 0) : e = gr(e), r = r === void 0 ? n < e ? 1 : -1 : gr(r), i1(n, e, r);
  };
}
var o1 = a1();
const s1 = (t, n, e = 12, r = 12) => {
  const i = In().domain([0, e]).range([0, t]), a = In().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return o1((e + 1) * (r + 1)).map(function(o) {
        return { m: o % (e + 1), n: Math.floor(o / (e + 1)), x: i(o % (e + 1)), y: a(Math.floor(o / (e + 1))) };
      });
    },
    position: function(o, s) {
      typeof o == "number" && (o = [o]), typeof s == "number" && (s = [s]);
      const l = Fv(oo(s, function(u) {
        return oo(
          o,
          function(c) {
            return { x: i(c), y: a(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, u1 = "_widget_1aazq_40", l1 = "_label_1aazq_58", c1 = "_lit_1aazq_63", f1 = "_button_1aazq_67", h1 = "_symbol_1aazq_67", p1 = "_radio_1aazq_68", d1 = "_radiobutton_1aazq_68", g1 = "_selected_1aazq_74", _1 = "_toggle_1aazq_75", y1 = "_slider_1aazq_84", v1 = "_track_1aazq_84", m1 = "_track_overlay_1aazq_89", w1 = "_handle_1aazq_97", w = {
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
}, Ii = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, Ri = (t, n, e) => {
  var r, i, a, o;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, a = "middle", o = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, a = "end", o = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, a = "start", o = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, a = "middle", o = "hanging";
  }
  return { x: r, y: i, anchor: a, valign: o };
}, b1 = (t = 1) => {
  const n = nt();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, x1 = (t = 1) => {
  const n = nt(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, M1 = (t = 1) => {
  const n = nt();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, $1 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = nt();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, A1 = (t = 1) => {
  const n = nt(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, l = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, k1 = (t = 1) => {
  const n = nt(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, T1 = (t = 1) => {
  const n = nt(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var l = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, N1 = (t = 1) => {
  var n = nt(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, S1 = (t = 1) => {
  const n = nt(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Zr = (t) => {
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
}, au = () => {
  const t = "button";
  var n = Ii(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", l = null, u = function(f) {
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
      return typeof f > "u" ? a : (a = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? a.x : (a.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? a.y : (a.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? o : (o = f, this);
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
      h = (h + 1) % c.length, u(), z(this.parentNode).select("." + w.symbol).attr("d", Zr(c[h])(r * e));
    },
    press: function(f) {
      h = (h + 1) % c.length, u(), f.select("#button_" + n).select("." + w.symbol).attr("d", Zr(c[h])(r * e));
    }
  };
}, ou = () => {
  const t = "toggle";
  var n = Ii(), e = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(u) {
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
      return typeof u > "u" ? a : (a = u, this);
    },
    fontsize: function(u) {
      return typeof u > "u" ? o : (o = u, this);
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
      const u = z(this.parentNode);
      u.select("." + w.handle).transition().attr("cx", l ? 2 * e : 0), u.classed(w.selected, l), s();
    },
    reset: function(u, c) {
      l = c;
      const h = u.select("#toggle_" + n);
      h.selectAll("." + w.handle).transition().attr("cx", l ? 2 * e : 0), h.classed(w.selected, l), s();
    }
  };
}, P1 = () => {
  const t = "radio";
  var n = Ii(), e = 100, r = 20, i = 0.3, a = "round", o = "vertical", s = { x: 0, y: 0 }, l = "right", u = null, c = function(p) {
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
      return typeof p > "u" ? o : (o = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? a : (a = p, this);
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
      f = d, z(this.parentNode).selectAll("." + w.symbol).classed(w.selected, (_) => _ == f), c();
    },
    reset: function(p, d) {
      f = d, p.select("#radio_" + n).selectAll("." + w.symbol).classed(w.selected, (_) => _ == f), c();
    }
  };
}, E1 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = z(a).attr("class", w.widget + " " + w.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", w.background).on("click", t.click).on("mouseover", function() {
    z(this).classed(w.lit, !0), z(this.parentNode).select("." + w.symbol).classed(w.lit, !0);
  }).on("mouseout", function() {
    z(this).classed(w.lit, !1), z(this.parentNode).select("." + w.symbol).classed(w.lit, !1);
  }), o.append("path").attr("d", Zr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", w.symbol), r) {
    const l = Ri(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", w.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return a;
}, su = (t, n) => {
  const e = nt();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, z1 = (t, n) => {
  const e = ki(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = z(l).attr("class", w.widget + " " + w.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", su(t.size(), t.girth())).attr("class", w.track), s.append("circle").attr("class", w.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", w.track_overlay).on("click", function(d) {
    const _ = Rr(d, this)[0];
    t.value(o.invert(_)), t.update(), t.update_end(), s.selectAll("." + w.handle).attr("cx", o(t.value())), t.show() && s.select("." + w.label).text(t.label() + " = " + e(t.value()));
  }).call(
    _0().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + w.handle).attr("cx", o(t.value())), t.show() && s.select("." + w.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, h, f, p = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? Qn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Qn([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? Qn([t.girth() / 2, t.knob()]) + 7 : -Qn([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, f = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", w.label).style("text-anchor", f).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + h + ")"), l;
}, O1 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = z(o).attr("class", w.widget + " " + w.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(w.selected, t.value() == 1);
  if (s.append("path").attr("d", su(2 * t.size(), 2 * t.size())).attr("class", w.track), s.append("circle").attr("class", w.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", w.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Ri(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", w.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return o;
}, C1 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = kp(o), l = In().domain([0, o - 1]).range([0, t.size()]), u = In().domain([0, o - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = z(c).attr("class", w.widget + " " + w.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + w.radiobutton).data(s).enter().append("g").attr("class", w.radiobutton).attr("id", (_) => "b" + _).attr("transform", (_) => t.orientation() == "vertical" ? "translate(0," + u(_) + ")" : "translate(" + l(_) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", a / 2)), f.attr("class", w.background).on("mouseover", function() {
    z(this).classed(w.lit, !0), z(this.parentNode).select("." + w.symbol).classed(w.lit, !0);
  }).on("mouseout", function() {
    z(this).classed(w.lit, !1), z(this.parentNode).select("." + w.symbol).classed(w.lit, !1);
  }), p.attr("class", w.symbol), p.filter((_) => _ == t.value()).classed(w.selected, !0), h.on("click", t.click);
  const d = Ri(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", w.label).text(function(_, m) {
    return t.choices()[m];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), c;
}, oe = (t, n) => {
  switch (t.type) {
    case "button":
      return E1(t);
    case "slider":
      return z1(t);
    case "radio":
      return C1(t);
    case "toggle":
      return O1(t);
  }
}, I1 = (t, n) => {
  const e = s1(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = Wc("#" + t).classed(t + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "d3-widgets control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return n.debug && a.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: e };
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
var uu = typeof global == "object" && global && global.Object === Object && global, R1 = typeof self == "object" && self && self.Object === Object && self, wt = uu || R1 || Function("return this")(), Tt = wt.Symbol, lu = Object.prototype, q1 = lu.hasOwnProperty, j1 = lu.toString, vn = Tt ? Tt.toStringTag : void 0;
function L1(t) {
  var n = q1.call(t, vn), e = t[vn];
  try {
    t[vn] = void 0;
    var r = !0;
  } catch {
  }
  var i = j1.call(t);
  return r && (n ? t[vn] = e : delete t[vn]), i;
}
var F1 = Object.prototype, D1 = F1.toString;
function H1(t) {
  return D1.call(t);
}
var X1 = "[object Null]", B1 = "[object Undefined]", so = Tt ? Tt.toStringTag : void 0;
function Yt(t) {
  return t == null ? t === void 0 ? B1 : X1 : so && so in Object(t) ? L1(t) : H1(t);
}
function Ht(t) {
  return t != null && typeof t == "object";
}
var U1 = "[object Symbol]";
function Je(t) {
  return typeof t == "symbol" || Ht(t) && Yt(t) == U1;
}
function Bn(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var H = Array.isArray, uo = Tt ? Tt.prototype : void 0, lo = uo ? uo.toString : void 0;
function cu(t) {
  if (typeof t == "string")
    return t;
  if (H(t))
    return Bn(t, cu) + "";
  if (Je(t))
    return lo ? lo.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var G1 = /\s/;
function Y1(t) {
  for (var n = t.length; n-- && G1.test(t.charAt(n)); )
    ;
  return n;
}
var V1 = /^\s+/;
function K1(t) {
  return t && t.slice(0, Y1(t) + 1).replace(V1, "");
}
function _t(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var co = NaN, W1 = /^[-+]0x[0-9a-f]+$/i, Z1 = /^0b[01]+$/i, J1 = /^0o[0-7]+$/i, Q1 = parseInt;
function tw(t) {
  if (typeof t == "number")
    return t;
  if (Je(t))
    return co;
  if (_t(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = _t(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = K1(t);
  var e = Z1.test(t);
  return e || J1.test(t) ? Q1(t.slice(2), e ? 2 : 8) : W1.test(t) ? co : +t;
}
var nw = 1 / 0, ew = 17976931348623157e292;
function mr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = tw(t), t === nw || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * ew;
  }
  return t === t ? t : 0;
}
function fu(t) {
  return t;
}
var rw = "[object AsyncFunction]", iw = "[object Function]", aw = "[object GeneratorFunction]", ow = "[object Proxy]";
function hu(t) {
  if (!_t(t))
    return !1;
  var n = Yt(t);
  return n == iw || n == aw || n == rw || n == ow;
}
var wr = wt["__core-js_shared__"], fo = function() {
  var t = /[^.]+$/.exec(wr && wr.keys && wr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function sw(t) {
  return !!fo && fo in t;
}
var uw = Function.prototype, lw = uw.toString;
function Vt(t) {
  if (t != null) {
    try {
      return lw.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var cw = /[\\^$.*+?()[\]{}|]/g, fw = /^\[object .+?Constructor\]$/, hw = Function.prototype, pw = Object.prototype, dw = hw.toString, gw = pw.hasOwnProperty, _w = RegExp(
  "^" + dw.call(gw).replace(cw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yw(t) {
  if (!_t(t) || sw(t))
    return !1;
  var n = hu(t) ? _w : fw;
  return n.test(Vt(t));
}
function vw(t, n) {
  return t == null ? void 0 : t[n];
}
function Kt(t, n) {
  var e = vw(t, n);
  return yw(e) ? e : void 0;
}
var Jr = Kt(wt, "WeakMap");
function mw(t, n) {
  var e = -1, r = t.length;
  for (n || (n = Array(r)); ++e < r; )
    n[e] = t[e];
  return n;
}
var ho = function() {
  try {
    var t = Kt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function ww(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var bw = 9007199254740991, xw = /^(?:0|[1-9]\d*)$/;
function Qe(t, n) {
  var e = typeof t;
  return n = n ?? bw, !!n && (e == "number" || e != "symbol" && xw.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Mw(t, n, e) {
  n == "__proto__" && ho ? ho(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function tr(t, n) {
  return t === n || t !== t && n !== n;
}
var $w = Object.prototype, Aw = $w.hasOwnProperty;
function kw(t, n, e) {
  var r = t[n];
  (!(Aw.call(t, n) && tr(r, e)) || e === void 0 && !(n in t)) && Mw(t, n, e);
}
var Tw = 9007199254740991;
function qi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Tw;
}
function Un(t) {
  return t != null && qi(t.length) && !hu(t);
}
function Nw(t, n, e) {
  if (!_t(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Un(e) && Qe(n, e.length) : r == "string" && n in e) ? tr(e[n], t) : !1;
}
var Sw = Object.prototype;
function pu(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Sw;
  return t === e;
}
function Pw(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Ew = "[object Arguments]";
function po(t) {
  return Ht(t) && Yt(t) == Ew;
}
var du = Object.prototype, zw = du.hasOwnProperty, Ow = du.propertyIsEnumerable, gu = po(/* @__PURE__ */ function() {
  return arguments;
}()) ? po : function(t) {
  return Ht(t) && zw.call(t, "callee") && !Ow.call(t, "callee");
};
function Cw() {
  return !1;
}
var _u = typeof exports == "object" && exports && !exports.nodeType && exports, go = _u && typeof module == "object" && module && !module.nodeType && module, Iw = go && go.exports === _u, _o = Iw ? wt.Buffer : void 0, Rw = _o ? _o.isBuffer : void 0, Qr = Rw || Cw, qw = "[object Arguments]", jw = "[object Array]", Lw = "[object Boolean]", Fw = "[object Date]", Dw = "[object Error]", Hw = "[object Function]", Xw = "[object Map]", Bw = "[object Number]", Uw = "[object Object]", Gw = "[object RegExp]", Yw = "[object Set]", Vw = "[object String]", Kw = "[object WeakMap]", Ww = "[object ArrayBuffer]", Zw = "[object DataView]", Jw = "[object Float32Array]", Qw = "[object Float64Array]", tb = "[object Int8Array]", nb = "[object Int16Array]", eb = "[object Int32Array]", rb = "[object Uint8Array]", ib = "[object Uint8ClampedArray]", ab = "[object Uint16Array]", ob = "[object Uint32Array]", N = {};
N[Jw] = N[Qw] = N[tb] = N[nb] = N[eb] = N[rb] = N[ib] = N[ab] = N[ob] = !0;
N[qw] = N[jw] = N[Ww] = N[Lw] = N[Zw] = N[Fw] = N[Dw] = N[Hw] = N[Xw] = N[Bw] = N[Uw] = N[Gw] = N[Yw] = N[Vw] = N[Kw] = !1;
function sb(t) {
  return Ht(t) && qi(t.length) && !!N[Yt(t)];
}
function ub(t) {
  return function(n) {
    return t(n);
  };
}
var yu = typeof exports == "object" && exports && !exports.nodeType && exports, kn = yu && typeof module == "object" && module && !module.nodeType && module, lb = kn && kn.exports === yu, br = lb && uu.process, yo = function() {
  try {
    var t = kn && kn.require && kn.require("util").types;
    return t || br && br.binding && br.binding("util");
  } catch {
  }
}(), vo = yo && yo.isTypedArray, vu = vo ? ub(vo) : sb, cb = Object.prototype, fb = cb.hasOwnProperty;
function mu(t, n) {
  var e = H(t), r = !e && gu(t), i = !e && !r && Qr(t), a = !e && !r && !i && vu(t), o = e || r || i || a, s = o ? Pw(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || fb.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Qe(u, l))) && s.push(u);
  return s;
}
function wu(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var hb = wu(Object.keys, Object), pb = Object.prototype, db = pb.hasOwnProperty;
function gb(t) {
  if (!pu(t))
    return hb(t);
  var n = [];
  for (var e in Object(t))
    db.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Gn(t) {
  return Un(t) ? mu(t) : gb(t);
}
function _b(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var yb = Object.prototype, vb = yb.hasOwnProperty;
function mb(t) {
  if (!_t(t))
    return _b(t);
  var n = pu(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !vb.call(t, r)) || e.push(r);
  return e;
}
function wb(t) {
  return Un(t) ? mu(t, !0) : mb(t);
}
var bb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xb = /^\w*$/;
function ji(t, n) {
  if (H(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Je(t) ? !0 : xb.test(t) || !bb.test(t) || n != null && t in Object(n);
}
var jn = Kt(Object, "create");
function Mb() {
  this.__data__ = jn ? jn(null) : {}, this.size = 0;
}
function $b(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Ab = "__lodash_hash_undefined__", kb = Object.prototype, Tb = kb.hasOwnProperty;
function Nb(t) {
  var n = this.__data__;
  if (jn) {
    var e = n[t];
    return e === Ab ? void 0 : e;
  }
  return Tb.call(n, t) ? n[t] : void 0;
}
var Sb = Object.prototype, Pb = Sb.hasOwnProperty;
function Eb(t) {
  var n = this.__data__;
  return jn ? n[t] !== void 0 : Pb.call(n, t);
}
var zb = "__lodash_hash_undefined__";
function Ob(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = jn && n === void 0 ? zb : n, this;
}
function Xt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Xt.prototype.clear = Mb;
Xt.prototype.delete = $b;
Xt.prototype.get = Nb;
Xt.prototype.has = Eb;
Xt.prototype.set = Ob;
function Cb() {
  this.__data__ = [], this.size = 0;
}
function nr(t, n) {
  for (var e = t.length; e--; )
    if (tr(t[e][0], n))
      return e;
  return -1;
}
var Ib = Array.prototype, Rb = Ib.splice;
function qb(t) {
  var n = this.__data__, e = nr(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Rb.call(n, e, 1), --this.size, !0;
}
function jb(t) {
  var n = this.__data__, e = nr(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Lb(t) {
  return nr(this.__data__, t) > -1;
}
function Fb(t, n) {
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
bt.prototype.clear = Cb;
bt.prototype.delete = qb;
bt.prototype.get = jb;
bt.prototype.has = Lb;
bt.prototype.set = Fb;
var Ln = Kt(wt, "Map");
function Db() {
  this.size = 0, this.__data__ = {
    hash: new Xt(),
    map: new (Ln || bt)(),
    string: new Xt()
  };
}
function Hb(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function er(t, n) {
  var e = t.__data__;
  return Hb(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Xb(t) {
  var n = er(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Bb(t) {
  return er(this, t).get(t);
}
function Ub(t) {
  return er(this, t).has(t);
}
function Gb(t, n) {
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
xt.prototype.clear = Db;
xt.prototype.delete = Xb;
xt.prototype.get = Bb;
xt.prototype.has = Ub;
xt.prototype.set = Gb;
var Yb = "Expected a function";
function Li(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Yb);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (Li.Cache || xt)(), e;
}
Li.Cache = xt;
var Vb = 500;
function Kb(t) {
  var n = Li(t, function(r) {
    return e.size === Vb && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Wb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zb = /\\(\\)?/g, Jb = Kb(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Wb, function(e, r, i, a) {
    n.push(i ? a.replace(Zb, "$1") : r || e);
  }), n;
});
function rr(t) {
  return t == null ? "" : cu(t);
}
function ir(t, n) {
  return H(t) ? t : ji(t, n) ? [t] : Jb(rr(t));
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
function Qb(t, n, e) {
  var r = t == null ? void 0 : Fi(t, n);
  return r === void 0 ? e : r;
}
function bu(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var tx = wu(Object.getPrototypeOf, Object);
function nx(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function ex(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, nx(t, n, e);
}
var rx = "\\ud800-\\udfff", ix = "\\u0300-\\u036f", ax = "\\ufe20-\\ufe2f", ox = "\\u20d0-\\u20ff", sx = ix + ax + ox, ux = "\\ufe0e\\ufe0f", lx = "\\u200d", cx = RegExp("[" + lx + rx + sx + ux + "]");
function xu(t) {
  return cx.test(t);
}
function fx(t) {
  return t.split("");
}
var Mu = "\\ud800-\\udfff", hx = "\\u0300-\\u036f", px = "\\ufe20-\\ufe2f", dx = "\\u20d0-\\u20ff", gx = hx + px + dx, _x = "\\ufe0e\\ufe0f", yx = "[" + Mu + "]", ti = "[" + gx + "]", ni = "\\ud83c[\\udffb-\\udfff]", vx = "(?:" + ti + "|" + ni + ")", $u = "[^" + Mu + "]", Au = "(?:\\ud83c[\\udde6-\\uddff]){2}", ku = "[\\ud800-\\udbff][\\udc00-\\udfff]", mx = "\\u200d", Tu = vx + "?", Nu = "[" + _x + "]?", wx = "(?:" + mx + "(?:" + [$u, Au, ku].join("|") + ")" + Nu + Tu + ")*", bx = Nu + Tu + wx, xx = "(?:" + [$u + ti + "?", ti, Au, ku, yx].join("|") + ")", Mx = RegExp(ni + "(?=" + ni + ")|" + xx + bx, "g");
function $x(t) {
  return t.match(Mx) || [];
}
function Ax(t) {
  return xu(t) ? $x(t) : fx(t);
}
function kx(t) {
  return function(n) {
    n = rr(n);
    var e = xu(n) ? Ax(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? ex(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var Tx = kx("toUpperCase");
function Nx(t) {
  return Tx(rr(t).toLowerCase());
}
function Sx() {
  this.__data__ = new bt(), this.size = 0;
}
function Px(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Ex(t) {
  return this.__data__.get(t);
}
function zx(t) {
  return this.__data__.has(t);
}
var Ox = 200;
function Cx(t, n) {
  var e = this.__data__;
  if (e instanceof bt) {
    var r = e.__data__;
    if (!Ln || r.length < Ox - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new xt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function pt(t) {
  var n = this.__data__ = new bt(t);
  this.size = n.size;
}
pt.prototype.clear = Sx;
pt.prototype.delete = Px;
pt.prototype.get = Ex;
pt.prototype.has = zx;
pt.prototype.set = Cx;
function Su(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function Pu() {
  return [];
}
var Ix = Object.prototype, Rx = Ix.propertyIsEnumerable, mo = Object.getOwnPropertySymbols, Eu = mo ? function(t) {
  return t == null ? [] : (t = Object(t), Su(mo(t), function(n) {
    return Rx.call(t, n);
  }));
} : Pu, qx = Object.getOwnPropertySymbols, jx = qx ? function(t) {
  for (var n = []; t; )
    bu(n, Eu(t)), t = tx(t);
  return n;
} : Pu;
function zu(t, n, e) {
  var r = n(t);
  return H(t) ? r : bu(r, e(t));
}
function wo(t) {
  return zu(t, Gn, Eu);
}
function Lx(t) {
  return zu(t, wb, jx);
}
var ei = Kt(wt, "DataView"), ri = Kt(wt, "Promise"), ii = Kt(wt, "Set"), bo = "[object Map]", Fx = "[object Object]", xo = "[object Promise]", Mo = "[object Set]", $o = "[object WeakMap]", Ao = "[object DataView]", Dx = Vt(ei), Hx = Vt(Ln), Xx = Vt(ri), Bx = Vt(ii), Ux = Vt(Jr), ct = Yt;
(ei && ct(new ei(new ArrayBuffer(1))) != Ao || Ln && ct(new Ln()) != bo || ri && ct(ri.resolve()) != xo || ii && ct(new ii()) != Mo || Jr && ct(new Jr()) != $o) && (ct = function(t) {
  var n = Yt(t), e = n == Fx ? t.constructor : void 0, r = e ? Vt(e) : "";
  if (r)
    switch (r) {
      case Dx:
        return Ao;
      case Hx:
        return bo;
      case Xx:
        return xo;
      case Bx:
        return Mo;
      case Ux:
        return $o;
    }
  return n;
});
var ko = wt.Uint8Array, Gx = "__lodash_hash_undefined__";
function Yx(t) {
  return this.__data__.set(t, Gx), this;
}
function Vx(t) {
  return this.__data__.has(t);
}
function Le(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new xt(); ++n < e; )
    this.add(t[n]);
}
Le.prototype.add = Le.prototype.push = Yx;
Le.prototype.has = Vx;
function Kx(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Wx(t, n) {
  return t.has(n);
}
var Zx = 1, Jx = 2;
function Ou(t, n, e, r, i, a) {
  var o = e & Zx, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & Jx ? new Le() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], _ = n[h];
    if (r)
      var m = o ? r(_, d, h, n, t, a) : r(d, _, h, t, n, a);
    if (m !== void 0) {
      if (m)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Kx(n, function(M, b) {
        if (!Wx(p, b) && (d === M || i(d, M, e, r, a)))
          return p.push(b);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === _ || i(d, _, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function Cu(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Qx(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var t2 = 1, n2 = 2, e2 = "[object Boolean]", r2 = "[object Date]", i2 = "[object Error]", a2 = "[object Map]", o2 = "[object Number]", s2 = "[object RegExp]", u2 = "[object Set]", l2 = "[object String]", c2 = "[object Symbol]", f2 = "[object ArrayBuffer]", h2 = "[object DataView]", To = Tt ? Tt.prototype : void 0, xr = To ? To.valueOf : void 0;
function p2(t, n, e, r, i, a, o) {
  switch (e) {
    case h2:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case f2:
      return !(t.byteLength != n.byteLength || !a(new ko(t), new ko(n)));
    case e2:
    case r2:
    case o2:
      return tr(+t, +n);
    case i2:
      return t.name == n.name && t.message == n.message;
    case s2:
    case l2:
      return t == n + "";
    case a2:
      var s = Cu;
    case u2:
      var l = r & t2;
      if (s || (s = Qx), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= n2, o.set(t, n);
      var c = Ou(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case c2:
      if (xr)
        return xr.call(t) == xr.call(n);
  }
  return !1;
}
var d2 = 1, g2 = Object.prototype, _2 = g2.hasOwnProperty;
function y2(t, n, e, r, i, a) {
  var o = e & d2, s = wo(t), l = s.length, u = wo(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : _2.call(n, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var _ = !0;
  a.set(t, n), a.set(n, t);
  for (var m = o; ++h < l; ) {
    f = s[h];
    var M = t[f], b = n[f];
    if (r)
      var x = o ? r(b, M, f, n, t, a) : r(M, b, f, t, n, a);
    if (!(x === void 0 ? M === b || i(M, b, e, r, a) : x)) {
      _ = !1;
      break;
    }
    m || (m = f == "constructor");
  }
  if (_ && !m) {
    var g = t.constructor, v = n.constructor;
    g != v && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof v == "function" && v instanceof v) && (_ = !1);
  }
  return a.delete(t), a.delete(n), _;
}
var v2 = 1, No = "[object Arguments]", So = "[object Array]", se = "[object Object]", m2 = Object.prototype, Po = m2.hasOwnProperty;
function w2(t, n, e, r, i, a) {
  var o = H(t), s = H(n), l = o ? So : ct(t), u = s ? So : ct(n);
  l = l == No ? se : l, u = u == No ? se : u;
  var c = l == se, h = u == se, f = l == u;
  if (f && Qr(t)) {
    if (!Qr(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new pt()), o || vu(t) ? Ou(t, n, e, r, i, a) : p2(t, n, l, e, r, i, a);
  if (!(e & v2)) {
    var p = c && Po.call(t, "__wrapped__"), d = h && Po.call(n, "__wrapped__");
    if (p || d) {
      var _ = p ? t.value() : t, m = d ? n.value() : n;
      return a || (a = new pt()), i(_, m, e, r, a);
    }
  }
  return f ? (a || (a = new pt()), y2(t, n, e, r, i, a)) : !1;
}
function Di(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !Ht(t) && !Ht(n) ? t !== t && n !== n : w2(t, n, e, r, Di, i);
}
var b2 = 1, x2 = 2;
function M2(t, n, e, r) {
  var i = e.length, a = i;
  if (t == null)
    return !a;
  for (t = Object(t); i--; ) {
    var o = e[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < a; ) {
    o = e[i];
    var s = o[0], l = t[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new pt(), h;
      if (!(h === void 0 ? Di(u, l, b2 | x2, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Iu(t) {
  return t === t && !_t(t);
}
function $2(t) {
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
function A2(t) {
  var n = $2(t);
  return n.length == 1 && n[0][2] ? Ru(n[0][0], n[0][1]) : function(e) {
    return e === t || M2(e, t, n);
  };
}
function k2(t, n) {
  return t != null && n in Object(t);
}
function qu(t, n, e) {
  n = ir(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Yn(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && qi(i) && Qe(o, i) && (H(t) || gu(t)));
}
function T2(t, n) {
  return t != null && qu(t, n, k2);
}
var N2 = 1, S2 = 2;
function P2(t, n) {
  return ji(t) && Iu(n) ? Ru(Yn(t), n) : function(e) {
    var r = Qb(e, t);
    return r === void 0 && r === n ? T2(e, t) : Di(n, r, N2 | S2);
  };
}
function E2(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function z2(t) {
  return function(n) {
    return Fi(n, t);
  };
}
function O2(t) {
  return ji(t) ? E2(Yn(t)) : z2(t);
}
function Hi(t) {
  return typeof t == "function" ? t : t == null ? fu : typeof t == "object" ? H(t) ? P2(t[0], t[1]) : A2(t) : O2(t);
}
function C2(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var I2 = C2();
function R2(t, n) {
  return t && I2(t, n, Gn);
}
function q2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Un(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var Xi = q2(R2);
function j2(t) {
  return typeof t == "function" ? t : fu;
}
function hn(t, n) {
  var e = H(t) ? ww : Xi;
  return e(t, j2(n));
}
function L2(t, n) {
  return Bn(n, function(e) {
    return [e, t[e]];
  });
}
function F2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var D2 = "[object Map]", H2 = "[object Set]";
function X2(t) {
  return function(n) {
    var e = ct(n);
    return e == D2 ? Cu(n) : e == H2 ? F2(n) : L2(n, t(n));
  };
}
var ju = X2(Gn);
function B2(t, n) {
  var e = [];
  return Xi(t, function(r, i, a) {
    n(r, i, a) && e.push(r);
  }), e;
}
function Lu(t, n) {
  var e = H(t) ? Su : B2;
  return e(t, Hi(n));
}
function U2(t, n) {
  var e = -1, r = Un(t) ? Array(t.length) : [];
  return Xi(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Vn(t, n) {
  var e = H(t) ? Bn : U2;
  return e(t, Hi(n));
}
var G2 = Object.prototype, Y2 = G2.hasOwnProperty;
function V2(t, n) {
  return t != null && Y2.call(t, n);
}
function K2(t, n) {
  return t != null && qu(t, n, V2);
}
function W2(t, n) {
  return Bn(n, function(e) {
    return t[e];
  });
}
function Z2(t) {
  return t == null ? [] : W2(t, Gn(t));
}
var J2 = "[object Boolean]";
function Q2(t) {
  return t === !0 || t === !1 || Ht(t) && Yt(t) == J2;
}
function tM(t, n, e, r) {
  if (!_t(t))
    return t;
  n = ir(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var l = Yn(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != o) {
      var c = s[l];
      u = void 0, u === void 0 && (u = _t(c) ? c : Qe(n[i + 1]) ? [] : {});
    }
    kw(s, l, u), s = s[l];
  }
  return t;
}
function nM(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = Fi(t, o);
    e(s, o) && tM(a, ir(o, t), s);
  }
  return a;
}
function Fu(t, n) {
  if (t == null)
    return {};
  var e = Bn(Lx(t), function(r) {
    return [r];
  });
  return n = Hi(n), nM(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var eM = Math.floor, rM = Math.random;
function iM(t, n) {
  return t + eM(rM() * (n - t + 1));
}
var aM = Math.ceil, oM = Math.max;
function sM(t, n, e, r) {
  for (var i = -1, a = oM(aM((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function uM(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Nw(n, e, r) && (e = r = void 0), n = mr(n), e === void 0 ? (e = n, n = 0) : e = mr(e), r = r === void 0 ? n < e ? 1 : -1 : mr(r), sM(n, e, r);
  };
}
var Bt = uM();
function lM() {
  var t = arguments, n = rr(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Du(t, n) {
  var e = -1, r = t.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++e < n; ) {
    var a = iM(e, i), o = t[a];
    t[a] = t[e], t[e] = o;
  }
  return t.length = n, t;
}
function cM(t) {
  return Du(mw(t));
}
function fM(t) {
  return Du(Z2(t));
}
function hM(t) {
  var n = H(t) ? cM : fM;
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
  gaussian: {
    default: !0
  },
  ring: {
    default: !0
  },
  n_w_s_o: {
    default: !0,
    label: "N-W-S-O"
  },
  triangular: {
    default: !0
  }
}, Bi = (t) => Vn(ju(t), (n) => {
  n[1].id = n[0], n[1].label = n[1].label || lM(Nx(n[0]), /_/g, " ");
}), ar = (t) => Vn(ju(t), (n) => n[1]), Ui = (t, n) => hn(t, (e, r) => e.widget = n[r]), Hu = (t) => Fu(t, (n) => Q2(n.default)), pM = (t) => Fu(t, (n) => K2(n, "choices"));
Ut().domain([0, 360]).range([0, 2 * Math.PI]);
Ut().range([0, 360]).domain([0, 2 * Math.PI]);
const Eo = Qh(0, 1), Xu = Hu($), Bu = pM($), Uu = Hu(Qt);
Bi(Xu);
Bi(Uu);
Bi(Bu);
const Gu = ar(Xu), Yu = ar(Uu), Vu = ar(Bu), _e = Vn(
  Gu,
  (t) => ou().id(t.id).label(t.label).value(t.default).labelposition(A.widgets.toggle_label_pos)
), kt = Vn(
  Yu,
  (t) => ou().id(t.id).label(t.label).value(t.default).labelposition(A.widgets.rw_toggle_label_pos).size(A.widgets.rw_toggle_size)
), ai = Vn(
  Vu,
  (t) => P1().choices(t.choices).id(t.id).value(t.default).orientation(A.widgets.radio_orientation).labelposition(A.widgets.radio_label_position)
);
Ui(Gu, _e);
Ui(Yu, kt);
Ui(Vu, ai);
const ft = au().actions(["play", "pause"]).id("play"), or = au().actions(["back"]).id("reset"), dM = [ft, or], gM = (t, n) => {
  const e = n.position(A.widgets.toggle_anchor.x, Bt(_e.length).map((a) => A.widgets.toggle_anchor.y + A.widgets.toggle_gap * a)), r = n.position(A.widgets.rw_toggle_anchor.x, Bt(kt.length).map((a) => A.widgets.rw_toggle_anchor.y + A.widgets.rw_toggle_gap * a)), i = n.position(A.widgets.radio_anchor.x, A.widgets.radio_anchor.y);
  _e.forEach((a, o) => a.position(e[o])), kt.forEach((a, o) => a.position(r[o])), ai[0].position(i).size(A.widgets.radio_size).shape(A.widgets.radio_shape), ft.position(n.position(A.widgets.playbutton_anchor.x, A.widgets.playbutton_anchor.y)).size(A.widgets.playbutton_size), or.position(n.position(A.widgets.backbutton_anchor.x, A.widgets.backbutton_anchor.y)), t.selectAll(null).data(kt).enter().append(oe), t.selectAll(null).data(_e).enter().append(oe), t.selectAll(null).data(dM).enter().append(oe), t.selectAll(null).data(ai).enter().append(oe);
}, _M = "_inset_uz2cl_1", yM = "_insetaxis_uz2cl_5", vM = "_pdf_lattice_uz2cl_17", mM = "_pdf_ring_uz2cl_22", wM = "_pdf_gaussian_uz2cl_27", bM = "_pdf_triangular_uz2cl_38", et = {
  inset: _M,
  insetaxis: yM,
  pdf_lattice: vM,
  pdf_ring: mM,
  pdf_gaussian: wM,
  pdf_triangular: bM
}, xM = (t, n) => {
  let e, r, i;
  return Math.random() <= 0.5 ? (e = 0, r = 1) : (e = 1, r = 0), Math.random() <= 0.5 ? i = 1 : i = -1, {
    x: t.x + n * i * e,
    y: t.y + n * i * r
  };
}, MM = (t, n) => {
  const e = 2 * Math.random() * Math.PI;
  return {
    x: t.x + n * Math.cos(e),
    y: t.y + n * Math.sin(e)
  };
}, $M = (t, n) => ({
  x: t.x + n * Eo(),
  y: t.y + n * Eo()
}), AM = (t, n) => {
  const e = 2 * Math.PI / 3 * Math.round(Math.random() * 3);
  return {
    x: t.x + n * Math.cos(e),
    y: t.y + n * Math.sin(e)
  };
}, $t = $.L0, kM = A.legend.inset_width, TM = A.legend.inset_height;
var G = Ut().domain([-$t, $t]).range([-60 / 2, kM / 2]), At = Ut().domain([-$t, $t]).range([TM / 2, -60 / 2]), oi, si;
const NM = (t, n) => {
  const e = [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }];
  t.selectAll("." + et.pdf_lattice).data(e).enter().append("circle").attr("r", 3).attr("class", et.pdf_lattice).attr("cx", function(r) {
    return G(r.x);
  }).attr("cy", function(r) {
    return At(r.y);
  }).style("fill", A.simulation.path_color[n]);
}, SM = (t, n) => {
  t.append("circle").attr("r", G(1) - G(0)).attr("cx", function(e) {
    return G(0);
  }).attr("cy", function(e) {
    return At(0);
  }).attr("class", et.pdf_ring).style("stroke", A.simulation.path_color[n]);
}, PM = (t, n) => {
  oi.append("stop").attr("offset", "0%").attr("stop-color", A.simulation.path_color[n]), oi.append("stop").attr("offset", "100%").attr("stop-color", "white"), si.append("stop").attr("offset", "0%").attr("stop-color", A.simulation.path_color[n]), si.append("stop").attr("offset", "100%").attr("stop-color", "black"), t.append("circle").attr("r", 1.5 * (G(1) - G(0))).attr("cx", function(e) {
    return G(0);
  }).attr("cy", function(e) {
    return At(0);
  }).attr("class", et.pdf_gaussian);
}, EM = (t, n) => {
  const e = [{ theta: 0 }, { theta: 0.6666666666666666 * Math.PI }, { theta: 1.3333333333333333 * Math.PI }];
  t.selectAll("." + et.pdf_triangular).data(e).enter().append("circle").attr("r", 3).attr("class", et.pdf_triangular).attr("cx", function(r) {
    return G(Math.cos(r.theta));
  }).attr("cy", function(r) {
    return At(Math.sin(r.theta));
  }).style("fill", A.simulation.path_color[n]);
}, zM = (t, n) => {
  oi = t.append("defs").append("radialGradient").attr("id", "gaussian_gradient"), si = t.append("defs").append("radialGradient").attr("id", "gaussian_gradient_dark");
  const e = n.position(A.legend.anchor.x, Bt(kt.length).map((i) => A.legend.anchor.y + A.legend.gap * i)), r = t.selectAll("." + et.inset).data(Bt(kt.length)).enter().append("g").attr("class", et.inset).attr("id", (i, a) => "inset_" + a).attr("transform", (i, a) => "translate(" + e[a].x + "," + e[a].y + ")");
  r.append("line").attr("class", et.insetaxis).attr("x1", G(-$t)).attr("y1", At(0)).attr("x2", G($t)).attr("y2", At(0)), r.append("line").attr("class", et.insetaxis).attr("x1", G(0)).attr("y1", At(-$t)).attr("x2", G(0)).attr("y2", At($t)), NM(t.select("#inset_0"), 0), SM(t.select("#inset_1"), 1), PM(t.select("#inset_2"), 2), EM(t.select("#inset_3"), 3);
};
var Ct;
const OM = $.number_of_walkers.choices[$.number_of_walkers.choices.length - 1], CM = ar(Qt).length, IM = [
  xM,
  MM,
  $M,
  AM
], RM = () => {
  $.timer = {}, $.tick = 0, Ct = [], hn(Bt(CM), (t) => {
    hn(Bt(OM), (n) => {
      Ct.push({ ix: n, type: t, tr: [{ x: 0, y: 0 }] });
    });
  }), Ct = hM(Ct);
}, qM = () => (hn(Ct, (t) => {
  t.tr.push(IM[t.type](t.tr[$.tick], $.sigma));
}), $.tick++, $.tick > $.T_max), sr = Ut(), ur = Ut();
var Ku = gp().x((t) => sr(t.x)).y((t) => ur(t.y)), Wu = fs().domain(Bt(4)).range(A.simulation.path_color), L, ye, ve;
const Zu = (t) => {
  hn(t, (n) => {
    L.beginPath(), Ku(n.tr), L.lineWidth = A.simulation.path_width, L.strokeStyle = Wu(n.type), L.stroke(), L.closePath();
  });
}, Ju = (t) => {
  hn(t, (n) => {
    L.beginPath();
    let e = n.tr[n.tr.length - 1];
    L.arc(sr(e.x), ur(e.y), A.simulation.pos_size, 0, 2 * Math.PI), L.fillStyle = Wu(n.type), L.fill();
  });
}, jM = (t, n) => {
  ye = n.display_size.width, ve = n.display_size.height, sr.range([0, ye]).domain($.x_range), ur.range([0, ve]).domain($.y_range), L = t.node().getContext("2d"), Ku.context(L), L.clearRect(0, 0, ye, ve);
  const e = Lu(Ct, (r) => r.ix < $.number_of_walkers.choices[$.number_of_walkers.widget.value()] && kt[r.type].value());
  $.hide_path.widget.value() || Zu(e), $.hide_positions.widget.value() || Ju(e);
}, Qu = (t, n) => {
  L.clearRect(0, 0, ye, ve), $.tick > $.R0 * $.R0 && (sr.domain([-Math.sqrt($.tick) * $.L0, Math.sqrt($.tick) * $.L0]), ur.domain([-Math.sqrt($.tick) * $.L0, Math.sqrt($.tick) * $.L0]));
  const e = Lu(Ct, (r) => r.ix < $.number_of_walkers.choices[$.number_of_walkers.widget.value()] && kt[r.type].value());
  $.hide_path.widget.value() || Zu(e), $.hide_positions.widget.value() || Ju(e);
}, LM = Qu;
function FM(t, n, e) {
  let r = !1;
  r = qM(), Qu(), r && (n.select("#button_play").transition(1e3).style("opacity", 0).style("pointer-events", "none"), ft.press(n));
}
function tl(t, n) {
  RM(), jM(t, n);
}
function St(t, n) {
  LM();
}
var zo = {};
const DM = (t, n, e) => {
  ft.value() == 1 ? zo = Sf(() => FM(t, n), A.simulation.delay) : zo.stop();
}, HM = (t, n, e) => {
  ft.update(() => DM(t, n)), or.update(() => {
    tl(t, e), n.select("#button_play").transition(1e3).style("opacity", null), n.select("#button_play").style("pointer-events", null);
  }), $.number_of_walkers.widget.update(() => St()), $.hide_path.widget.update(() => St()), $.hide_positions.widget.update(() => St()), Qt.gaussian.widget.update(() => St()), Qt.n_w_s_o.widget.update(() => St()), Qt.triangular.widget.update(() => St()), Qt.ring.widget.update(() => St());
}, XM = {
  name: "@explorables/albert_and_carl_friedrich",
  title: "Albert & Carl Friedrich",
  subtitle: "Random Walks & Diffusion - A geometric explanation of the central limit theorem.",
  description: "This explorable illustrates two dimensional random walks and the central limit theorem. Although random walks may differ on a small scale, as time progress and they all looks the same from a distance.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function BM(t, n = nl) {
  const e = I1(t, n), r = e.display, i = e.controls, a = e.grid;
  return gM(i, a), zM(i, a), HM(r, i, n), tl(r, n), {
    halt() {
      ft.value() === 1 && ft.press(i);
    },
    reset() {
      ft.value() === 1 && ft.press(i), or.press(i);
    },
    config: n,
    meta: XM
  };
}
export {
  nl as config,
  BM as default,
  BM as load,
  XM as meta
};
