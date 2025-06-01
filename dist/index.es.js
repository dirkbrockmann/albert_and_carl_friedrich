(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-black:#000;--tw-color-white:#fff;--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:border-1{border-style:var(--tw-border-style);border-width:1px}.tw\\:bg-white{background-color:var(--tw-color-white)}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-black{color:var(--tw-color-black)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}@media (prefers-color-scheme:dark){.tw\\:dark\\:border-white{border-color:var(--tw-color-white)}.tw\\:dark\\:bg-black{background-color:var(--tw-color-black)}.tw\\:dark\\:text-white{color:var(--tw-color-white)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}._agent_b27yc_1{fill:#000}@media (prefers-color-scheme: dark){._agent_b27yc_1{fill:#fff}}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Eu = {
  display_type: "svg",
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
function Wn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ou(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Ao(t) {
  let n, e, r;
  t.length !== 2 ? (n = Wn, e = (s, l) => Wn(t(s), l), r = (s, l) => t(s) - l) : (n = t === Wn || t === Ou ? t : Cu, e = t, r = t);
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
function Cu() {
  return 0;
}
function Iu(t) {
  return t === null ? NaN : +t;
}
const Ru = Ao(Wn), qu = Ru.right;
Ao(Iu).center;
const ju = Math.sqrt(50), Fu = Math.sqrt(10), Du = Math.sqrt(2);
function oe(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= ju ? 10 : a >= Fu ? 5 : a >= Du ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? oe(t, n, e * 2) : [s, l, u];
}
function Lu(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? oe(n, t, e) : oe(t, n, e);
  if (!(a >= i)) return [];
  const s = a - i + 1, l = new Array(s);
  if (r)
    if (o < 0) for (let u = 0; u < s; ++u) l[u] = (a - u) / -o;
    else for (let u = 0; u < s; ++u) l[u] = (a - u) * o;
  else if (o < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -o;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * o;
  return l;
}
function gr(t, n, e) {
  return n = +n, t = +t, e = +e, oe(t, n, e)[2];
}
function Hu(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? gr(n, t, e) : gr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
var Bu = { value: () => {
} };
function $o() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new Zn(e);
}
function Zn(t) {
  this._ = t;
}
function Xu(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
Zn.prototype = $o.prototype = {
  constructor: Zn,
  on: function(t, n) {
    var e = this._, r = Xu(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = Uu(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = Fi(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = Fi(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new Zn(t);
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
function Uu(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Fi(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Bu, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var yr = "http://www.w3.org/1999/xhtml";
const Di = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: yr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ke(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Di.hasOwnProperty(n) ? { space: Di[n], local: t } : t;
}
function Yu(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === yr && n.documentElement.namespaceURI === yr ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Gu(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function No(t) {
  var n = ke(t);
  return (n.local ? Gu : Yu)(n);
}
function Vu() {
}
function Jr(t) {
  return t == null ? Vu : function() {
    return this.querySelector(t);
  };
}
function Ku(t) {
  typeof t != "function" && (t = Jr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new F(r, this._parents);
}
function Wu(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Zu() {
  return [];
}
function To(t) {
  return t == null ? Zu : function() {
    return this.querySelectorAll(t);
  };
}
function Ju(t) {
  return function() {
    return Wu(t.apply(this, arguments));
  };
}
function Qu(t) {
  typeof t == "function" ? t = Ju(t) : t = To(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new F(r, i);
}
function So(t) {
  return function() {
    return this.matches(t);
  };
}
function ko(t) {
  return function(n) {
    return n.matches(t);
  };
}
var tl = Array.prototype.find;
function nl(t) {
  return function() {
    return tl.call(this.children, t);
  };
}
function el() {
  return this.firstElementChild;
}
function rl(t) {
  return this.select(t == null ? el : nl(typeof t == "function" ? t : ko(t)));
}
var il = Array.prototype.filter;
function al() {
  return Array.from(this.children);
}
function ol(t) {
  return function() {
    return il.call(this.children, t);
  };
}
function sl(t) {
  return this.selectAll(t == null ? al : ol(typeof t == "function" ? t : ko(t)));
}
function ul(t) {
  typeof t != "function" && (t = So(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new F(r, this._parents);
}
function Po(t) {
  return new Array(t.length);
}
function ll() {
  return new F(this._enter || this._groups.map(Po), this._parents);
}
function se(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
se.prototype = {
  constructor: se,
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
function cl(t) {
  return function() {
    return t;
  };
}
function fl(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new se(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function hl(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new se(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function pl(t) {
  return t.__data__;
}
function dl(t, n) {
  if (!arguments.length) return Array.from(this, pl);
  var e = n ? hl : fl, r = this._parents, i = this._groups;
  typeof t != "function" && (t = cl(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = gl(t.call(c, c && c.__data__, u, r)), d = p.length, y = s[u] = new Array(d), w = o[u] = new Array(d), _ = l[u] = new Array(f);
    e(c, h, y, w, _, p, n);
    for (var x = 0, M = 0, g, m; x < d; ++x)
      if (g = y[x]) {
        for (x >= M && (M = x + 1); !(m = w[M]) && ++M < d; ) ;
        g._next = m || null;
      }
  }
  return o = new F(o, r), o._enter = s, o._exit = l, o;
}
function gl(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function yl() {
  return new F(this._exit || this._groups.map(Po), this._parents);
}
function _l(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function vl(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new F(s, this._parents);
}
function ml() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function wl(t) {
  t || (t = bl);
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
function bl(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function xl() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ml() {
  return Array.from(this);
}
function Al() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function $l() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Nl() {
  return !this.node();
}
function Tl(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Sl(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function kl(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Pl(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function zl(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function El(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Ol(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Cl(t, n) {
  var e = ke(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? kl : Sl : typeof n == "function" ? e.local ? Ol : El : e.local ? zl : Pl)(e, n));
}
function zo(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Il(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Rl(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ql(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function jl(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Il : typeof n == "function" ? ql : Rl)(t, n, e ?? "")) : Yt(this.node(), t);
}
function Yt(t, n) {
  return t.style.getPropertyValue(n) || zo(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Fl(t) {
  return function() {
    delete this[t];
  };
}
function Dl(t, n) {
  return function() {
    this[t] = n;
  };
}
function Ll(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Hl(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Fl : typeof n == "function" ? Ll : Dl)(t, n)) : this.node()[t];
}
function Eo(t) {
  return t.trim().split(/^|\s+/);
}
function Qr(t) {
  return t.classList || new Oo(t);
}
function Oo(t) {
  this._node = t, this._names = Eo(t.getAttribute("class") || "");
}
Oo.prototype = {
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
function Co(t, n) {
  for (var e = Qr(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Io(t, n) {
  for (var e = Qr(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Bl(t) {
  return function() {
    Co(this, t);
  };
}
function Xl(t) {
  return function() {
    Io(this, t);
  };
}
function Ul(t, n) {
  return function() {
    (n.apply(this, arguments) ? Co : Io)(this, t);
  };
}
function Yl(t, n) {
  var e = Eo(t + "");
  if (arguments.length < 2) {
    for (var r = Qr(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Ul : n ? Bl : Xl)(e, n));
}
function Gl() {
  this.textContent = "";
}
function Vl(t) {
  return function() {
    this.textContent = t;
  };
}
function Kl(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Wl(t) {
  return arguments.length ? this.each(t == null ? Gl : (typeof t == "function" ? Kl : Vl)(t)) : this.node().textContent;
}
function Zl() {
  this.innerHTML = "";
}
function Jl(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ql(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function tc(t) {
  return arguments.length ? this.each(t == null ? Zl : (typeof t == "function" ? Ql : Jl)(t)) : this.node().innerHTML;
}
function nc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ec() {
  return this.each(nc);
}
function rc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ic() {
  return this.each(rc);
}
function ac(t) {
  var n = typeof t == "function" ? t : No(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function oc() {
  return null;
}
function sc(t, n) {
  var e = typeof t == "function" ? t : No(t), r = n == null ? oc : typeof n == "function" ? n : Jr(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function uc() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function lc() {
  return this.each(uc);
}
function cc() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function fc() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function hc(t) {
  return this.select(t ? fc : cc);
}
function pc(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function dc(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function gc(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function yc(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function _c(t, n, e) {
  return function() {
    var r = this.__on, i, a = dc(n);
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
function vc(t, n, e) {
  var r = gc(t + ""), i, a = r.length, o;
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
  for (s = n ? _c : yc, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function Ro(t, n, e) {
  var r = zo(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function mc(t, n) {
  return function() {
    return Ro(this, t, n);
  };
}
function wc(t, n) {
  return function() {
    return Ro(this, t, n.apply(this, arguments));
  };
}
function bc(t, n) {
  return this.each((typeof n == "function" ? wc : mc)(t, n));
}
function* xc() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var qo = [null];
function F(t, n) {
  this._groups = t, this._parents = n;
}
function kn() {
  return new F([[document.documentElement]], qo);
}
function Mc() {
  return this;
}
F.prototype = kn.prototype = {
  constructor: F,
  select: Ku,
  selectAll: Qu,
  selectChild: rl,
  selectChildren: sl,
  filter: ul,
  data: dl,
  enter: ll,
  exit: yl,
  join: _l,
  merge: vl,
  selection: Mc,
  order: ml,
  sort: wl,
  call: xl,
  nodes: Ml,
  node: Al,
  size: $l,
  empty: Nl,
  each: Tl,
  attr: Cl,
  style: jl,
  property: Hl,
  classed: Yl,
  text: Wl,
  html: tc,
  raise: ec,
  lower: ic,
  append: ac,
  insert: sc,
  remove: lc,
  clone: hc,
  datum: pc,
  on: vc,
  dispatch: bc,
  [Symbol.iterator]: xc
};
function Ac(t) {
  return typeof t == "string" ? new F([[document.querySelector(t)]], [document.documentElement]) : new F([[t]], qo);
}
function ti(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function jo(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Pn() {
}
var _n = 0.7, ue = 1 / _n, Bt = "\\s*([+-]?\\d+)\\s*", vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $c = /^#([0-9a-f]{3,8})$/, Nc = new RegExp(`^rgb\\(${Bt},${Bt},${Bt}\\)$`), Tc = new RegExp(`^rgb\\(${tt},${tt},${tt}\\)$`), Sc = new RegExp(`^rgba\\(${Bt},${Bt},${Bt},${vn}\\)$`), kc = new RegExp(`^rgba\\(${tt},${tt},${tt},${vn}\\)$`), Pc = new RegExp(`^hsl\\(${vn},${tt},${tt}\\)$`), zc = new RegExp(`^hsla\\(${vn},${tt},${tt},${vn}\\)$`), Li = {
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
ti(Pn, Pt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Hi,
  // Deprecated! Use color.formatHex.
  formatHex: Hi,
  formatHex8: Ec,
  formatHsl: Oc,
  formatRgb: Bi,
  toString: Bi
});
function Hi() {
  return this.rgb().formatHex();
}
function Ec() {
  return this.rgb().formatHex8();
}
function Oc() {
  return Fo(this).formatHsl();
}
function Bi() {
  return this.rgb().formatRgb();
}
function Pt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = $c.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Xi(n) : e === 3 ? new R(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Rn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Rn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Nc.exec(t)) ? new R(n[1], n[2], n[3], 1) : (n = Tc.exec(t)) ? new R(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Sc.exec(t)) ? Rn(n[1], n[2], n[3], n[4]) : (n = kc.exec(t)) ? Rn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Pc.exec(t)) ? Gi(n[1], n[2] / 100, n[3] / 100, 1) : (n = zc.exec(t)) ? Gi(n[1], n[2] / 100, n[3] / 100, n[4]) : Li.hasOwnProperty(t) ? Xi(Li[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function Xi(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Rn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new R(t, n, e, r);
}
function Cc(t) {
  return t instanceof Pn || (t = Pt(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function le(t, n, e, r) {
  return arguments.length === 1 ? Cc(t) : new R(t, n, e, r ?? 1);
}
function R(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ti(R, le, jo(Pn, {
  brighter(t) {
    return t = t == null ? ue : Math.pow(ue, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? _n : Math.pow(_n, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new R(St(this.r), St(this.g), St(this.b), ce(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ui,
  // Deprecated! Use color.formatHex.
  formatHex: Ui,
  formatHex8: Ic,
  formatRgb: Yi,
  toString: Yi
}));
function Ui() {
  return `#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}`;
}
function Ic() {
  return `#${Nt(this.r)}${Nt(this.g)}${Nt(this.b)}${Nt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Yi() {
  const t = ce(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${St(this.r)}, ${St(this.g)}, ${St(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ce(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function St(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Nt(t) {
  return t = St(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Gi(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new G(t, n, e, r);
}
function Fo(t) {
  if (t instanceof G) return new G(t.h, t.s, t.l, t.opacity);
  if (t instanceof Pn || (t = Pt(t)), !t) return new G();
  if (t instanceof G) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new G(o, s, l, t.opacity);
}
function Rc(t, n, e, r) {
  return arguments.length === 1 ? Fo(t) : new G(t, n, e, r ?? 1);
}
function G(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ti(G, Rc, jo(Pn, {
  brighter(t) {
    return t = t == null ? ue : Math.pow(ue, t), new G(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? _n : Math.pow(_n, t), new G(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new R(
      nr(t >= 240 ? t - 240 : t + 120, i, r),
      nr(t, i, r),
      nr(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new G(Vi(this.h), qn(this.s), qn(this.l), ce(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ce(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Vi(this.h)}, ${qn(this.s) * 100}%, ${qn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Vi(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function qn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function nr(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ni = (t) => () => t;
function qc(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function jc(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Fc(t) {
  return (t = +t) == 1 ? Do : function(n, e) {
    return e - n ? jc(n, e, t) : ni(isNaN(n) ? e : n);
  };
}
function Do(t, n) {
  var e = n - t;
  return e ? qc(t, e) : ni(isNaN(t) ? n : t);
}
const fe = function t(n) {
  var e = Fc(n);
  function r(i, a) {
    var o = e((i = le(i)).r, (a = le(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = Do(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Dc(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function Lc(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Hc(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = ei(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function Bc(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function U(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Xc(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ei(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var _r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, er = new RegExp(_r.source, "g");
function Uc(t) {
  return function() {
    return t;
  };
}
function Yc(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Lo(t, n) {
  var e = _r.lastIndex = er.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = _r.exec(t)) && (i = er.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: U(r, i) })), e = er.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? Yc(l[0].x) : Uc(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function ei(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ni(n) : (e === "number" ? U : e === "string" ? (r = Pt(n)) ? (n = r, fe) : Lo : n instanceof Pt ? fe : n instanceof Date ? Bc : Lc(n) ? Dc : Array.isArray(n) ? Hc : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Xc : U)(t, n);
}
function Gc(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ki = 180 / Math.PI, vr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ho(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * Ki,
    skewX: Math.atan(l) * Ki,
    scaleX: o,
    scaleY: s
  };
}
var jn;
function Vc(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? vr : Ho(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Kc(t) {
  return t == null || (jn || (jn = document.createElementNS("http://www.w3.org/2000/svg", "g")), jn.setAttribute("transform", t), !(t = jn.transform.baseVal.consolidate())) ? vr : (t = t.matrix, Ho(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Bo(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var y = p.push("translate(", null, n, null, e);
      d.push({ i: y - 4, x: U(u, h) }, { i: y - 2, x: U(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: U(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: U(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: y - 4, x: U(u, h) }, { i: y - 2, x: U(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, y = f.length, w; ++d < y; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var Wc = Bo(Vc, "px, ", "px)", "deg)"), Zc = Bo(Kc, ", ", ")", ")"), Gt = 0, un = 0, rn = 0, Xo = 1e3, he, ln, pe = 0, zt = 0, Pe = 0, mn = typeof performance == "object" && performance.now ? performance : Date, Uo = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ze() {
  return zt || (Uo(Jc), zt = mn.now() + Pe);
}
function Jc() {
  zt = 0;
}
function wn() {
  this._call = this._time = this._next = null;
}
wn.prototype = Yo.prototype = {
  constructor: wn,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? ze() : +e) + (n == null ? 0 : +n), !this._next && ln !== this && (ln ? ln._next = this : he = this, ln = this), this._call = t, this._time = e, mr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, mr());
  }
};
function Yo(t, n, e) {
  var r = new wn();
  return r.restart(t, n, e), r;
}
function Qc() {
  ze(), ++Gt;
  for (var t = he, n; t; )
    (n = zt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Gt;
}
function Wi() {
  zt = (pe = mn.now()) + Pe, Gt = un = 0;
  try {
    Qc();
  } finally {
    Gt = 0, nf(), zt = 0;
  }
}
function tf() {
  var t = mn.now(), n = t - pe;
  n > Xo && (Pe -= n, pe = t);
}
function nf() {
  for (var t, n = he, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : he = e);
  ln = t, mr(r);
}
function mr(t) {
  if (!Gt) {
    un && (un = clearTimeout(un));
    var n = t - zt;
    n > 24 ? (t < 1 / 0 && (un = setTimeout(Wi, t - mn.now() - Pe)), rn && (rn = clearInterval(rn))) : (rn || (pe = mn.now(), rn = setInterval(tf, Xo)), Gt = 1, Uo(Wi));
  }
}
function Zi(t, n, e) {
  var r = new wn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function ef(t, n, e) {
  var r = new wn(), i = n;
  return r._restart = r.restart, r.restart = function(a, o, s) {
    o = +o, s = s == null ? ze() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += o, s), a(u);
    }, o, s);
  }, r.restart(t, n, e), r;
}
var rf = $o("start", "end", "cancel", "interrupt"), af = [], Go = 0, Ji = 1, wr = 2, Jn = 3, Qi = 4, br = 5, Qn = 6;
function Ee(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  of(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: rf,
    tween: af,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Go
  });
}
function ri(t, n) {
  var e = Z(t, n);
  if (e.state > Go) throw new Error("too late; already scheduled");
  return e;
}
function rt(t, n) {
  var e = Z(t, n);
  if (e.state > Jn) throw new Error("too late; already running");
  return e;
}
function Z(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function of(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Yo(a, 0, e.time);
  function a(u) {
    e.state = Ji, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== Ji) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === Jn) return Zi(o);
        p.state === Qi ? (p.state = Qn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = Qn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Zi(function() {
      e.state === Jn && (e.state = Qi, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = wr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === wr) {
      for (e.state = Jn, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = br, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === br && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = Qn, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function sf(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > wr && r.state < br, r.state = Qn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function uf(t) {
  return this.each(function() {
    sf(this, t);
  });
}
function lf(t, n) {
  var e, r;
  return function() {
    var i = rt(this, t), a = i.tween;
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
function cf(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = rt(this, t), o = a.tween;
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
function ff(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Z(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? lf : cf)(e, t, n));
}
function ii(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = rt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return Z(i, r).value[n];
  };
}
function Vo(t, n) {
  var e;
  return (typeof n == "number" ? U : n instanceof Pt ? fe : (e = Pt(n)) ? (n = e, fe) : Lo)(t, n);
}
function hf(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function pf(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function df(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function gf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function yf(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function _f(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function vf(t, n) {
  var e = ke(t), r = e === "transform" ? Zc : Vo;
  return this.attrTween(t, typeof n == "function" ? (e.local ? _f : yf)(e, r, ii(this, "attr." + t, n)) : n == null ? (e.local ? pf : hf)(e) : (e.local ? gf : df)(e, r, n));
}
function mf(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function wf(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function bf(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && wf(t, a)), e;
  }
  return i._value = n, i;
}
function xf(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && mf(t, a)), e;
  }
  return i._value = n, i;
}
function Mf(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = ke(t);
  return this.tween(e, (r.local ? bf : xf)(r, n));
}
function Af(t, n) {
  return function() {
    ri(this, t).delay = +n.apply(this, arguments);
  };
}
function $f(t, n) {
  return n = +n, function() {
    ri(this, t).delay = n;
  };
}
function Nf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Af : $f)(n, t)) : Z(this.node(), n).delay;
}
function Tf(t, n) {
  return function() {
    rt(this, t).duration = +n.apply(this, arguments);
  };
}
function Sf(t, n) {
  return n = +n, function() {
    rt(this, t).duration = n;
  };
}
function kf(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Tf : Sf)(n, t)) : Z(this.node(), n).duration;
}
function Pf(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    rt(this, t).ease = n;
  };
}
function zf(t) {
  var n = this._id;
  return arguments.length ? this.each(Pf(n, t)) : Z(this.node(), n).ease;
}
function Ef(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    rt(this, t).ease = e;
  };
}
function Of(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Ef(this._id, t));
}
function Cf(t) {
  typeof t != "function" && (t = So(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new ct(r, this._parents, this._name, this._id);
}
function If(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new ct(o, this._parents, this._name, this._id);
}
function Rf(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function qf(t, n, e) {
  var r, i, a = Rf(n) ? ri : rt;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function jf(t, n) {
  var e = this._id;
  return arguments.length < 2 ? Z(this.node(), e).on.on(t) : this.each(qf(e, t, n));
}
function Ff(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Df() {
  return this.on("end.remove", Ff(this._id));
}
function Lf(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Jr(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Ee(u[f], n, e, f, u, Z(c, e)));
  return new ct(a, this._parents, n, e);
}
function Hf(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = To(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = Z(c, e), y = 0, w = f.length; y < w; ++y)
          (p = f[y]) && Ee(p, n, e, y, f, d);
        a.push(f), o.push(c);
      }
  return new ct(a, o, n, e);
}
var Bf = kn.prototype.constructor;
function Xf() {
  return new Bf(this._groups, this._parents);
}
function Uf(t, n) {
  var e, r, i;
  return function() {
    var a = Yt(this, t), o = (this.style.removeProperty(t), Yt(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function Ko(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Yf(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = Yt(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function Gf(t, n, e) {
  var r, i, a;
  return function() {
    var o = Yt(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Yt(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function Vf(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = rt(this, t), u = l.on, c = l.value[a] == null ? s || (s = Ko(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function Kf(t, n, e) {
  var r = (t += "") == "transform" ? Wc : Vo;
  return n == null ? this.styleTween(t, Uf(t, r)).on("end.style." + t, Ko(t)) : typeof n == "function" ? this.styleTween(t, Gf(t, r, ii(this, "style." + t, n))).each(Vf(this._id, t)) : this.styleTween(t, Yf(t, r, n), e).on("end.style." + t, null);
}
function Wf(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Zf(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && Wf(t, o, e)), r;
  }
  return a._value = n, a;
}
function Jf(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Zf(t, n, e ?? ""));
}
function Qf(t) {
  return function() {
    this.textContent = t;
  };
}
function th(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function nh(t) {
  return this.tween("text", typeof t == "function" ? th(ii(this, "text", t)) : Qf(t == null ? "" : t + ""));
}
function eh(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function rh(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && eh(i)), n;
  }
  return r._value = t, r;
}
function ih(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, rh(t));
}
function ah() {
  for (var t = this._name, n = this._id, e = Wo(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = Z(l, n);
        Ee(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new ct(r, this._parents, t, e);
}
function oh() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = rt(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var sh = 0;
function ct(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Wo() {
  return ++sh;
}
var at = kn.prototype;
ct.prototype = {
  constructor: ct,
  select: Lf,
  selectAll: Hf,
  selectChild: at.selectChild,
  selectChildren: at.selectChildren,
  filter: Cf,
  merge: If,
  selection: Xf,
  transition: ah,
  call: at.call,
  nodes: at.nodes,
  node: at.node,
  size: at.size,
  empty: at.empty,
  each: at.each,
  on: jf,
  attr: vf,
  attrTween: Mf,
  style: Kf,
  styleTween: Jf,
  text: nh,
  textTween: ih,
  remove: Df,
  tween: ff,
  delay: Nf,
  duration: kf,
  ease: zf,
  easeVarying: Of,
  end: oh,
  [Symbol.iterator]: at[Symbol.iterator]
};
function uh(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var lh = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: uh
};
function ch(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function fh(t) {
  var n, e;
  t instanceof ct ? (n = t._id, t = t._name) : (n = Wo(), (e = lh).time = ze(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Ee(l, t, n, u, o, e || ch(l, n));
  return new ct(r, this._parents, t, n);
}
kn.prototype.interrupt = uf;
kn.prototype.transition = fh;
function hh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function de(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Vt(t) {
  return t = de(Math.abs(t)), t ? t[1] : NaN;
}
function ph(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function dh(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var gh = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ge(t) {
  if (!(n = gh.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new ai({
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
ge.prototype = ai.prototype;
function ai(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ai.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function yh(t) {
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
var Zo;
function _h(t, n) {
  var e = de(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (Zo = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + de(t, Math.max(0, n + a - 1))[0];
}
function ta(t, n) {
  var e = de(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const na = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: hh,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => ta(t * 100, n),
  r: ta,
  s: _h,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ea(t) {
  return t;
}
var ra = Array.prototype.map, ia = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function vh(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? ea : ph(ra.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? ea : dh(ra.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = ge(h);
    var f = h.fill, p = h.align, d = h.sign, y = h.symbol, w = h.zero, _ = h.width, x = h.comma, M = h.precision, g = h.trim, m = h.type;
    m === "n" ? (x = !0, m = "g") : na[m] || (M === void 0 && (M = 12), g = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var S = y === "$" ? e : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", P = y === "$" ? r : /[%p]/.test(m) ? o : "", O = na[m], L = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(v) {
      var C = S, A = P, I, At, j;
      if (m === "c")
        A = O(v) + A, v = "";
      else {
        v = +v;
        var B = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : O(Math.abs(v), M), g && (v = yh(v)), B && +v == 0 && d !== "+" && (B = !1), C = (B ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, A = (m === "s" ? ia[8 + Zo / 3] : "") + A + (B && d === "(" ? ")" : ""), L) {
          for (I = -1, At = v.length; ++I < At; )
            if (j = v.charCodeAt(I), 48 > j || j > 57) {
              A = (j === 46 ? i + v.slice(I + 1) : v.slice(I)) + A, v = v.slice(0, I);
              break;
            }
        }
      }
      x && !w && (v = n(v, 1 / 0));
      var X = C.length + v.length + A.length, T = X < _ ? new Array(_ - X + 1).join(f) : "";
      switch (x && w && (v = n(T + v, T.length ? _ - A.length : 1 / 0), T = ""), p) {
        case "<":
          v = C + v + A + T;
          break;
        case "=":
          v = C + T + v + A;
          break;
        case "^":
          v = T.slice(0, X = T.length >> 1) + C + v + A + T.slice(X);
          break;
        default:
          v = T + C + v + A;
          break;
      }
      return a(v);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function c(h, f) {
    var p = u((h = ge(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(Vt(f) / 3))) * 3, y = Math.pow(10, -d), w = ia[8 + d / 3];
    return function(_) {
      return p(y * _) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Fn, Jo, Qo;
mh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function mh(t) {
  return Fn = vh(t), Jo = Fn.format, Qo = Fn.formatPrefix, Fn;
}
function wh(t) {
  return Math.max(0, -Vt(Math.abs(t)));
}
function bh(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Vt(n) / 3))) * 3 - Vt(Math.abs(t)));
}
function xh(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Vt(n) - Vt(t)) + 1;
}
function Mh(t, n) {
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
function Ah(t) {
  return function() {
    return t;
  };
}
function $h(t) {
  return +t;
}
var aa = [0, 1];
function Lt(t) {
  return t;
}
function xr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Ah(isNaN(n) ? NaN : 0.5);
}
function Nh(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Th(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = xr(i, r), a = e(o, a)) : (r = xr(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function Sh(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = xr(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = qu(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function kh(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Ph() {
  var t = aa, n = aa, e = ei, r, i, a, o = Lt, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Lt && (o = Nh(t[0], t[f - 1])), s = f > 2 ? Sh : Th, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), U)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, $h), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = Gc, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Lt, c()) : o !== Lt;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function zh() {
  return Ph()(Lt, Lt);
}
function Eh(t, n, e, r) {
  var i = Hu(t, n, e), a;
  switch (r = ge(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = bh(i, o)) && (r.precision = a), Qo(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = xh(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = wh(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Jo(r);
}
function Oh(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Lu(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Eh(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, a = r.length - 1, o = r[i], s = r[a], l, u, c = 10;
    for (s < o && (u = o, o = s, s = u, u = i, i = a, a = u); c-- > 0; ) {
      if (u = gr(o, s, e), u === l)
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
function zn() {
  var t = zh();
  return t.copy = function() {
    return kh(t, zn());
  }, Mh.apply(t, arguments), Oh(t);
}
var Dn = le(), Ch = Math.PI / 3, Ih = Math.PI * 2 / 3;
function ts(t) {
  var n;
  return t = (0.5 - t) * Math.PI, Dn.r = 255 * (n = Math.sin(t)) * n, Dn.g = 255 * (n = Math.sin(t + Ch)) * n, Dn.b = 255 * (n = Math.sin(t + Ih)) * n, Dn + "";
}
function cn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
cn.prototype = {
  constructor: cn,
  scale: function(t) {
    return t === 1 ? this : new cn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new cn(this.k, this.x + this.k * t, this.y + this.k * n);
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
cn.prototype;
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
function te(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Rh(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function ns(t) {
  let n, e, r;
  t.length !== 2 ? (n = te, e = (s, l) => te(t(s), l), r = (s, l) => t(s) - l) : (n = t === te || t === Rh ? t : qh, e = t, r = t);
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
function qh() {
  return 0;
}
function jh(t) {
  return t === null ? NaN : +t;
}
const Fh = ns(te), Dh = Fh.right;
ns(jh).center;
const Lh = Math.sqrt(50), Hh = Math.sqrt(10), Bh = Math.sqrt(2);
function ye(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Lh ? 10 : a >= Hh ? 5 : a >= Bh ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / o, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * o, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? ye(t, n, e * 2) : [s, l, u];
}
function Xh(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, a, o] = r ? ye(n, t, e) : ye(t, n, e);
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
  return n = +n, t = +t, e = +e, ye(t, n, e)[2];
}
function Uh(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Mr(n, t, e) : Mr(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ln(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Yh(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * e;
  return a;
}
var Gh = { value: () => {
} };
function oi() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new ne(e);
}
function ne(t) {
  this._ = t;
}
function Vh(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
ne.prototype = oi.prototype = {
  constructor: ne,
  on: function(t, n) {
    var e = this._, r = Vh(t + "", e), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = Kh(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++a < o; )
      if (i = (t = r[a]).type) e[i] = oa(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = oa(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new ne(t);
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
function Kh(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function oa(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Gh, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Ar = "http://www.w3.org/1999/xhtml";
const sa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ar,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Oe(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), sa.hasOwnProperty(n) ? { space: sa[n], local: t } : t;
}
function Wh(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Ar && n.documentElement.namespaceURI === Ar ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Zh(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function es(t) {
  var n = Oe(t);
  return (n.local ? Zh : Wh)(n);
}
function Jh() {
}
function si(t) {
  return t == null ? Jh : function() {
    return this.querySelector(t);
  };
}
function Qh(t) {
  typeof t != "function" && (t = si(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = new Array(o), l, u, c = 0; c < o; ++c)
      (l = a[c]) && (u = t.call(l, l.__data__, c, a)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new D(r, this._parents);
}
function tp(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function np() {
  return [];
}
function rs(t) {
  return t == null ? np : function() {
    return this.querySelectorAll(t);
  };
}
function ep(t) {
  return function() {
    return tp(t.apply(this, arguments));
  };
}
function rp(t) {
  typeof t == "function" ? t = ep(t) : t = rs(t);
  for (var n = this._groups, e = n.length, r = [], i = [], a = 0; a < e; ++a)
    for (var o = n[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && (r.push(t.call(l, l.__data__, u, o)), i.push(l));
  return new D(r, i);
}
function is(t) {
  return function() {
    return this.matches(t);
  };
}
function as(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ip = Array.prototype.find;
function ap(t) {
  return function() {
    return ip.call(this.children, t);
  };
}
function op() {
  return this.firstElementChild;
}
function sp(t) {
  return this.select(t == null ? op : ap(typeof t == "function" ? t : as(t)));
}
var up = Array.prototype.filter;
function lp() {
  return Array.from(this.children);
}
function cp(t) {
  return function() {
    return up.call(this.children, t);
  };
}
function fp(t) {
  return this.selectAll(t == null ? lp : cp(typeof t == "function" ? t : as(t)));
}
function hp(t) {
  typeof t != "function" && (t = is(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new D(r, this._parents);
}
function os(t) {
  return new Array(t.length);
}
function pp() {
  return new D(this._enter || this._groups.map(os), this._parents);
}
function _e(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
_e.prototype = {
  constructor: _e,
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
function dp(t) {
  return function() {
    return t;
  };
}
function gp(t, n, e, r, i, a) {
  for (var o = 0, s, l = n.length, u = a.length; o < u; ++o)
    (s = n[o]) ? (s.__data__ = a[o], r[o] = s) : e[o] = new _e(t, a[o]);
  for (; o < l; ++o)
    (s = n[o]) && (i[o] = s);
}
function yp(t, n, e, r, i, a, o) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, h = a.length, f = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (f[s] = p = o.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < h; ++s)
    p = o.call(t, a[s], s, a) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = a[s], u.delete(p)) : e[s] = new _e(t, a[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(f[s]) === l && (i[s] = l);
}
function _p(t) {
  return t.__data__;
}
function vp(t, n) {
  if (!arguments.length) return Array.from(this, _p);
  var e = n ? yp : gp, r = this._parents, i = this._groups;
  typeof t != "function" && (t = dp(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), l = new Array(a), u = 0; u < a; ++u) {
    var c = r[u], h = i[u], f = h.length, p = mp(t.call(c, c && c.__data__, u, r)), d = p.length, y = s[u] = new Array(d), w = o[u] = new Array(d), _ = l[u] = new Array(f);
    e(c, h, y, w, _, p, n);
    for (var x = 0, M = 0, g, m; x < d; ++x)
      if (g = y[x]) {
        for (x >= M && (M = x + 1); !(m = w[M]) && ++M < d; ) ;
        g._next = m || null;
      }
  }
  return o = new D(o, r), o._enter = s, o._exit = l, o;
}
function mp(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function wp() {
  return new D(this._exit || this._groups.map(os), this._parents);
}
function bp(t, n, e) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? a.remove() : e(a), r && i ? r.merge(i).order() : i;
}
function xp(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, a = r.length, o = Math.min(i, a), s = new Array(i), l = 0; l < o; ++l)
    for (var u = e[l], c = r[l], h = u.length, f = s[l] = new Array(h), p, d = 0; d < h; ++d)
      (p = u[d] || c[d]) && (f[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new D(s, this._parents);
}
function Mp() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Ap(t) {
  t || (t = $p);
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
function $p(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Np() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Tp() {
  return Array.from(this);
}
function Sp() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function kp() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Pp() {
  return !this.node();
}
function zp(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Ep(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Op(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Cp(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ip(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Rp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function qp(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function jp(t, n) {
  var e = Oe(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Op : Ep : typeof n == "function" ? e.local ? qp : Rp : e.local ? Ip : Cp)(e, n));
}
function ss(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Fp(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Dp(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Lp(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Hp(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Fp : typeof n == "function" ? Lp : Dp)(t, n, e ?? "")) : Kt(this.node(), t);
}
function Kt(t, n) {
  return t.style.getPropertyValue(n) || ss(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Bp(t) {
  return function() {
    delete this[t];
  };
}
function Xp(t, n) {
  return function() {
    this[t] = n;
  };
}
function Up(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Yp(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Bp : typeof n == "function" ? Up : Xp)(t, n)) : this.node()[t];
}
function us(t) {
  return t.trim().split(/^|\s+/);
}
function ui(t) {
  return t.classList || new ls(t);
}
function ls(t) {
  this._node = t, this._names = us(t.getAttribute("class") || "");
}
ls.prototype = {
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
function cs(t, n) {
  for (var e = ui(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function fs(t, n) {
  for (var e = ui(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Gp(t) {
  return function() {
    cs(this, t);
  };
}
function Vp(t) {
  return function() {
    fs(this, t);
  };
}
function Kp(t, n) {
  return function() {
    (n.apply(this, arguments) ? cs : fs)(this, t);
  };
}
function Wp(t, n) {
  var e = us(t + "");
  if (arguments.length < 2) {
    for (var r = ui(this.node()), i = -1, a = e.length; ++i < a; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Kp : n ? Gp : Vp)(e, n));
}
function Zp() {
  this.textContent = "";
}
function Jp(t) {
  return function() {
    this.textContent = t;
  };
}
function Qp(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function td(t) {
  return arguments.length ? this.each(t == null ? Zp : (typeof t == "function" ? Qp : Jp)(t)) : this.node().textContent;
}
function nd() {
  this.innerHTML = "";
}
function ed(t) {
  return function() {
    this.innerHTML = t;
  };
}
function rd(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function id(t) {
  return arguments.length ? this.each(t == null ? nd : (typeof t == "function" ? rd : ed)(t)) : this.node().innerHTML;
}
function ad() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function od() {
  return this.each(ad);
}
function sd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ud() {
  return this.each(sd);
}
function ld(t) {
  var n = typeof t == "function" ? t : es(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function cd() {
  return null;
}
function fd(t, n) {
  var e = typeof t == "function" ? t : es(t), r = n == null ? cd : typeof n == "function" ? n : si(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function hd() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function pd() {
  return this.each(hd);
}
function dd() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function gd() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function yd(t) {
  return this.select(t ? gd : dd);
}
function _d(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function vd(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function md(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function wd(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, a; e < i; ++e)
        a = n[e], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : n[++r] = a;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function bd(t, n, e) {
  return function() {
    var r = this.__on, i, a = vd(n);
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
function xd(t, n, e) {
  var r = md(t + ""), i, a = r.length, o;
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
  for (s = n ? bd : wd, i = 0; i < a; ++i) this.each(s(r[i], n, e));
  return this;
}
function hs(t, n, e) {
  var r = ss(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Md(t, n) {
  return function() {
    return hs(this, t, n);
  };
}
function Ad(t, n) {
  return function() {
    return hs(this, t, n.apply(this, arguments));
  };
}
function $d(t, n) {
  return this.each((typeof n == "function" ? Ad : Md)(t, n));
}
function* Nd() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var ps = [null];
function D(t, n) {
  this._groups = t, this._parents = n;
}
function En() {
  return new D([[document.documentElement]], ps);
}
function Td() {
  return this;
}
D.prototype = En.prototype = {
  constructor: D,
  select: Qh,
  selectAll: rp,
  selectChild: sp,
  selectChildren: fp,
  filter: hp,
  data: vp,
  enter: pp,
  exit: wp,
  join: bp,
  merge: xp,
  selection: Td,
  order: Mp,
  sort: Ap,
  call: Np,
  nodes: Tp,
  node: Sp,
  size: kp,
  empty: Pp,
  each: zp,
  attr: jp,
  style: Hp,
  property: Yp,
  classed: Wp,
  text: td,
  html: id,
  raise: od,
  lower: ud,
  append: ld,
  insert: fd,
  remove: pd,
  clone: yd,
  datum: _d,
  on: xd,
  dispatch: $d,
  [Symbol.iterator]: Nd
};
function E(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], ps);
}
function Sd(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function $r(t, n) {
  if (t = Sd(t), n === void 0 && (n = t.currentTarget), n) {
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
const kd = { passive: !1 }, bn = { capture: !0, passive: !1 };
function rr(t) {
  t.stopImmediatePropagation();
}
function Xt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Pd(t) {
  var n = t.document.documentElement, e = E(t).on("dragstart.drag", Xt, bn);
  "onselectstart" in n ? e.on("selectstart.drag", Xt, bn) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function zd(t, n) {
  var e = t.document.documentElement, r = E(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Xt, bn), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const Hn = (t) => () => t;
function Nr(t, {
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
Nr.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ed(t) {
  return !t.ctrlKey && !t.button;
}
function Od() {
  return this.parentNode;
}
function Cd(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Id() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Rd() {
  var t = Ed, n = Od, e = Cd, r = Id, i = {}, a = oi("start", "drag", "end"), o = 0, s, l, u, c, h = 0;
  function f(g) {
    g.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", _, kd).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(g, m) {
    if (!(c || !t.call(this, g, m))) {
      var S = M(this, n.call(this, g, m), g, m, "mouse");
      S && (E(g.view).on("mousemove.drag", d, bn).on("mouseup.drag", y, bn), Pd(g.view), rr(g), u = !1, s = g.clientX, l = g.clientY, S("start", g));
    }
  }
  function d(g) {
    if (Xt(g), !u) {
      var m = g.clientX - s, S = g.clientY - l;
      u = m * m + S * S > h;
    }
    i.mouse("drag", g);
  }
  function y(g) {
    E(g.view).on("mousemove.drag mouseup.drag", null), zd(g.view, u), Xt(g), i.mouse("end", g);
  }
  function w(g, m) {
    if (t.call(this, g, m)) {
      var S = g.changedTouches, P = n.call(this, g, m), O = S.length, L, H;
      for (L = 0; L < O; ++L)
        (H = M(this, P, g, m, S[L].identifier, S[L])) && (rr(g), H("start", g, S[L]));
    }
  }
  function _(g) {
    var m = g.changedTouches, S = m.length, P, O;
    for (P = 0; P < S; ++P)
      (O = i[m[P].identifier]) && (Xt(g), O("drag", g, m[P]));
  }
  function x(g) {
    var m = g.changedTouches, S = m.length, P, O;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < S; ++P)
      (O = i[m[P].identifier]) && (rr(g), O("end", g, m[P]));
  }
  function M(g, m, S, P, O, L) {
    var H = a.copy(), v = $r(L || S, m), C, A, I;
    if ((I = e.call(g, new Nr("beforestart", {
      sourceEvent: S,
      target: f,
      identifier: O,
      active: o,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: H
    }), P)) != null)
      return C = I.x - v[0] || 0, A = I.y - v[1] || 0, function At(j, B, X) {
        var T = v, tr;
        switch (j) {
          case "start":
            i[O] = At, tr = o++;
            break;
          case "end":
            delete i[O], --o;
          // falls through
          case "drag":
            v = $r(X || B, m), tr = o;
            break;
        }
        H.call(
          j,
          g,
          new Nr(j, {
            sourceEvent: B,
            subject: I,
            target: f,
            identifier: O,
            active: tr,
            x: v[0] + C,
            y: v[1] + A,
            dx: v[0] - T[0],
            dy: v[1] - T[1],
            dispatch: H
          }),
          P
        );
      };
  }
  return f.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : Hn(!!g), f) : t;
  }, f.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : Hn(g), f) : n;
  }, f.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Hn(g), f) : e;
  }, f.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Hn(!!g), f) : r;
  }, f.on = function() {
    var g = a.on.apply(a, arguments);
    return g === a ? f : g;
  }, f.clickDistance = function(g) {
    return arguments.length ? (h = (g = +g) * g, f) : Math.sqrt(h);
  }, f;
}
function li(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ds(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function On() {
}
var xn = 0.7, ve = 1 / xn, Ut = "\\s*([+-]?\\d+)\\s*", Mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", qd = /^#([0-9a-f]{3,8})$/, jd = new RegExp(`^rgb\\(${Ut},${Ut},${Ut}\\)$`), Fd = new RegExp(`^rgb\\(${nt},${nt},${nt}\\)$`), Dd = new RegExp(`^rgba\\(${Ut},${Ut},${Ut},${Mn}\\)$`), Ld = new RegExp(`^rgba\\(${nt},${nt},${nt},${Mn}\\)$`), Hd = new RegExp(`^hsl\\(${Mn},${nt},${nt}\\)$`), Bd = new RegExp(`^hsla\\(${Mn},${nt},${nt},${Mn}\\)$`), ua = {
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
li(On, Et, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: la,
  // Deprecated! Use color.formatHex.
  formatHex: la,
  formatHex8: Xd,
  formatHsl: Ud,
  formatRgb: ca,
  toString: ca
});
function la() {
  return this.rgb().formatHex();
}
function Xd() {
  return this.rgb().formatHex8();
}
function Ud() {
  return gs(this).formatHsl();
}
function ca() {
  return this.rgb().formatRgb();
}
function Et(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = qd.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? fa(n) : e === 3 ? new q(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Bn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Bn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = jd.exec(t)) ? new q(n[1], n[2], n[3], 1) : (n = Fd.exec(t)) ? new q(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Dd.exec(t)) ? Bn(n[1], n[2], n[3], n[4]) : (n = Ld.exec(t)) ? Bn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Hd.exec(t)) ? da(n[1], n[2] / 100, n[3] / 100, 1) : (n = Bd.exec(t)) ? da(n[1], n[2] / 100, n[3] / 100, n[4]) : ua.hasOwnProperty(t) ? fa(ua[t]) : t === "transparent" ? new q(NaN, NaN, NaN, 0) : null;
}
function fa(t) {
  return new q(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Bn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new q(t, n, e, r);
}
function Yd(t) {
  return t instanceof On || (t = Et(t)), t ? (t = t.rgb(), new q(t.r, t.g, t.b, t.opacity)) : new q();
}
function Tr(t, n, e, r) {
  return arguments.length === 1 ? Yd(t) : new q(t, n, e, r ?? 1);
}
function q(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
li(q, Tr, ds(On, {
  brighter(t) {
    return t = t == null ? ve : Math.pow(ve, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? xn : Math.pow(xn, t), new q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new q(kt(this.r), kt(this.g), kt(this.b), me(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ha,
  // Deprecated! Use color.formatHex.
  formatHex: ha,
  formatHex8: Gd,
  formatRgb: pa,
  toString: pa
}));
function ha() {
  return `#${Tt(this.r)}${Tt(this.g)}${Tt(this.b)}`;
}
function Gd() {
  return `#${Tt(this.r)}${Tt(this.g)}${Tt(this.b)}${Tt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function pa() {
  const t = me(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${kt(this.r)}, ${kt(this.g)}, ${kt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function me(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function kt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Tt(t) {
  return t = kt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function da(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new V(t, n, e, r);
}
function gs(t) {
  if (t instanceof V) return new V(t.h, t.s, t.l, t.opacity);
  if (t instanceof On || (t = Et(t)), !t) return new V();
  if (t instanceof V) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, s = a - i, l = (a + i) / 2;
  return s ? (n === a ? o = (e - r) / s + (e < r) * 6 : e === a ? o = (r - n) / s + 2 : o = (n - e) / s + 4, s /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : s = l > 0 && l < 1 ? 0 : o, new V(o, s, l, t.opacity);
}
function Vd(t, n, e, r) {
  return arguments.length === 1 ? gs(t) : new V(t, n, e, r ?? 1);
}
function V(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
li(V, Vd, ds(On, {
  brighter(t) {
    return t = t == null ? ve : Math.pow(ve, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? xn : Math.pow(xn, t), new V(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new q(
      ir(t >= 240 ? t - 240 : t + 120, i, r),
      ir(t, i, r),
      ir(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new V(ga(this.h), Xn(this.s), Xn(this.l), me(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = me(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ga(this.h)}, ${Xn(this.s) * 100}%, ${Xn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ga(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Xn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ir(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const ci = (t) => () => t;
function Kd(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Wd(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Zd(t) {
  return (t = +t) == 1 ? ys : function(n, e) {
    return e - n ? Wd(n, e, t) : ci(isNaN(n) ? e : n);
  };
}
function ys(t, n) {
  var e = n - t;
  return e ? Kd(t, e) : ci(isNaN(t) ? n : t);
}
const we = function t(n) {
  var e = Zd(n);
  function r(i, a) {
    var o = e((i = Tr(i)).r, (a = Tr(a)).r), s = e(i.g, a.g), l = e(i.b, a.b), u = ys(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Jd(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(a) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - a) + n[i] * a;
    return r;
  };
}
function Qd(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function t0(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), a = new Array(e), o;
  for (o = 0; o < r; ++o) i[o] = fi(t[o], n[o]);
  for (; o < e; ++o) a[o] = n[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function n0(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function Y(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function e0(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = fi(t[i], n[i]) : r[i] = n[i];
  return function(a) {
    for (i in e) r[i] = e[i](a);
    return r;
  };
}
var Sr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ar = new RegExp(Sr.source, "g");
function r0(t) {
  return function() {
    return t;
  };
}
function i0(t) {
  return function(n) {
    return t(n) + "";
  };
}
function _s(t, n) {
  var e = Sr.lastIndex = ar.lastIndex = 0, r, i, a, o = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Sr.exec(t)) && (i = ar.exec(n)); )
    (a = i.index) > e && (a = n.slice(e, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, l.push({ i: o, x: Y(r, i) })), e = ar.lastIndex;
  return e < n.length && (a = n.slice(e), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? l[0] ? i0(l[0].x) : r0(n) : (n = l.length, function(u) {
    for (var c = 0, h; c < n; ++c) s[(h = l[c]).i] = h.x(u);
    return s.join("");
  });
}
function fi(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? ci(n) : (e === "number" ? Y : e === "string" ? (r = Et(n)) ? (n = r, we) : _s : n instanceof Et ? we : n instanceof Date ? n0 : Qd(n) ? Jd : Array.isArray(n) ? t0 : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? e0 : Y)(t, n);
}
function a0(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var ya = 180 / Math.PI, vs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ms(t, n, e, r, i, a) {
  var o, s, l;
  return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(n, t) * ya,
    skewX: Math.atan(l) * ya,
    scaleX: o,
    scaleY: s
  };
}
var Un;
function o0(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? vs : ms(n.a, n.b, n.c, n.d, n.e, n.f);
}
function s0(t) {
  return t == null || (Un || (Un = document.createElementNS("http://www.w3.org/2000/svg", "g")), Un.setAttribute("transform", t), !(t = Un.transform.baseVal.consolidate())) ? vs : (t = t.matrix, ms(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ws(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function a(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var y = p.push("translate(", null, n, null, e);
      d.push({ i: y - 4, x: Y(u, h) }, { i: y - 2, x: Y(c, f) });
    } else (h || f) && p.push("translate(" + h + n + f + e);
  }
  function o(u, c, h, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: Y(u, c) })) : c && h.push(i(h) + "rotate(" + c + r);
  }
  function s(u, c, h, f) {
    u !== c ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: Y(u, c) }) : c && h.push(i(h) + "skewX(" + c + r);
  }
  function l(u, c, h, f, p, d) {
    if (u !== h || c !== f) {
      var y = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: y - 4, x: Y(u, h) }, { i: y - 2, x: Y(c, f) });
    } else (h !== 1 || f !== 1) && p.push(i(p) + "scale(" + h + "," + f + ")");
  }
  return function(u, c) {
    var h = [], f = [];
    return u = t(u), c = t(c), a(u.translateX, u.translateY, c.translateX, c.translateY, h, f), o(u.rotate, c.rotate, h, f), s(u.skewX, c.skewX, h, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, h, f), u = c = null, function(p) {
      for (var d = -1, y = f.length, w; ++d < y; ) h[(w = f[d]).i] = w.x(p);
      return h.join("");
    };
  };
}
var u0 = ws(o0, "px, ", "px)", "deg)"), l0 = ws(s0, ", ", ")", ")"), Wt = 0, fn = 0, an = 0, bs = 1e3, be, hn, xe = 0, Ot = 0, Ce = 0, An = typeof performance == "object" && performance.now ? performance : Date, xs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function hi() {
  return Ot || (xs(c0), Ot = An.now() + Ce);
}
function c0() {
  Ot = 0;
}
function Me() {
  this._call = this._time = this._next = null;
}
Me.prototype = Ms.prototype = {
  constructor: Me,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? hi() : +e) + (n == null ? 0 : +n), !this._next && hn !== this && (hn ? hn._next = this : be = this, hn = this), this._call = t, this._time = e, kr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, kr());
  }
};
function Ms(t, n, e) {
  var r = new Me();
  return r.restart(t, n, e), r;
}
function f0() {
  hi(), ++Wt;
  for (var t = be, n; t; )
    (n = Ot - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Wt;
}
function _a() {
  Ot = (xe = An.now()) + Ce, Wt = fn = 0;
  try {
    f0();
  } finally {
    Wt = 0, p0(), Ot = 0;
  }
}
function h0() {
  var t = An.now(), n = t - xe;
  n > bs && (Ce -= n, xe = t);
}
function p0() {
  for (var t, n = be, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : be = e);
  hn = t, kr(r);
}
function kr(t) {
  if (!Wt) {
    fn && (fn = clearTimeout(fn));
    var n = t - Ot;
    n > 24 ? (t < 1 / 0 && (fn = setTimeout(_a, t - An.now() - Ce)), an && (an = clearInterval(an))) : (an || (xe = An.now(), an = setInterval(h0, bs)), Wt = 1, xs(_a));
  }
}
function va(t, n, e) {
  var r = new Me();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var d0 = oi("start", "end", "cancel", "interrupt"), g0 = [], As = 0, ma = 1, Pr = 2, ee = 3, wa = 4, zr = 5, re = 6;
function Ie(t, n, e, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (e in o) return;
  y0(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: d0,
    tween: g0,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: As
  });
}
function pi(t, n) {
  var e = J(t, n);
  if (e.state > As) throw new Error("too late; already scheduled");
  return e;
}
function it(t, n) {
  var e = J(t, n);
  if (e.state > ee) throw new Error("too late; already running");
  return e;
}
function J(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function y0(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Ms(a, 0, e.time);
  function a(u) {
    e.state = ma, e.timer.restart(o, e.delay, e.time), e.delay <= u && o(u - e.delay);
  }
  function o(u) {
    var c, h, f, p;
    if (e.state !== ma) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === ee) return va(o);
        p.state === wa ? (p.state = re, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = re, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (va(function() {
      e.state === ee && (e.state = wa, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Pr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Pr) {
      for (e.state = ee, i = new Array(f = e.tween.length), c = 0, h = -1; c < f; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = p);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = zr, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, c);
    e.state === zr && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = re, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function _0(t, n) {
  var e = t.__transition, r, i, a = !0, o;
  if (e) {
    n = n == null ? null : n + "";
    for (o in e) {
      if ((r = e[o]).name !== n) {
        a = !1;
        continue;
      }
      i = r.state > Pr && r.state < zr, r.state = re, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[o];
    }
    a && delete t.__transition;
  }
}
function v0(t) {
  return this.each(function() {
    _0(this, t);
  });
}
function m0(t, n) {
  var e, r;
  return function() {
    var i = it(this, t), a = i.tween;
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
function w0(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var a = it(this, t), o = a.tween;
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
function b0(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = J(this.node(), e).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((n == null ? m0 : w0)(e, t, n));
}
function di(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = it(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return J(i, r).value[n];
  };
}
function $s(t, n) {
  var e;
  return (typeof n == "number" ? Y : n instanceof Et ? we : (e = Et(n)) ? (n = e, we) : _s)(t, n);
}
function x0(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function M0(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function A0(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function $0(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function N0(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function T0(t, n, e) {
  var r, i, a;
  return function() {
    var o, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), l = s + "", o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s)));
  };
}
function S0(t, n) {
  var e = Oe(t), r = e === "transform" ? l0 : $s;
  return this.attrTween(t, typeof n == "function" ? (e.local ? T0 : N0)(e, r, di(this, "attr." + t, n)) : n == null ? (e.local ? M0 : x0)(e) : (e.local ? $0 : A0)(e, r, n));
}
function k0(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function P0(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function z0(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && P0(t, a)), e;
  }
  return i._value = n, i;
}
function E0(t, n) {
  var e, r;
  function i() {
    var a = n.apply(this, arguments);
    return a !== r && (e = (r = a) && k0(t, a)), e;
  }
  return i._value = n, i;
}
function O0(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Oe(t);
  return this.tween(e, (r.local ? z0 : E0)(r, n));
}
function C0(t, n) {
  return function() {
    pi(this, t).delay = +n.apply(this, arguments);
  };
}
function I0(t, n) {
  return n = +n, function() {
    pi(this, t).delay = n;
  };
}
function R0(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? C0 : I0)(n, t)) : J(this.node(), n).delay;
}
function q0(t, n) {
  return function() {
    it(this, t).duration = +n.apply(this, arguments);
  };
}
function j0(t, n) {
  return n = +n, function() {
    it(this, t).duration = n;
  };
}
function F0(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? q0 : j0)(n, t)) : J(this.node(), n).duration;
}
function D0(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    it(this, t).ease = n;
  };
}
function L0(t) {
  var n = this._id;
  return arguments.length ? this.each(D0(n, t)) : J(this.node(), n).ease;
}
function H0(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    it(this, t).ease = e;
  };
}
function B0(t) {
  if (typeof t != "function") throw new Error();
  return this.each(H0(this._id, t));
}
function X0(t) {
  typeof t != "function" && (t = is(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var a = n[i], o = a.length, s = r[i] = [], l, u = 0; u < o; ++u)
      (l = a[u]) && t.call(l, l.__data__, u, a) && s.push(l);
  return new ft(r, this._parents, this._name, this._id);
}
function U0(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var l = n[s], u = e[s], c = l.length, h = o[s] = new Array(c), f, p = 0; p < c; ++p)
      (f = l[p] || u[p]) && (h[p] = f);
  for (; s < r; ++s)
    o[s] = n[s];
  return new ft(o, this._parents, this._name, this._id);
}
function Y0(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function G0(t, n, e) {
  var r, i, a = Y0(n) ? pi : it;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(n, e), o.on = i;
  };
}
function V0(t, n) {
  var e = this._id;
  return arguments.length < 2 ? J(this.node(), e).on.on(t) : this.each(G0(e, t, n));
}
function K0(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function W0() {
  return this.on("end.remove", K0(this._id));
}
function Z0(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = si(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], l = s.length, u = a[o] = new Array(l), c, h, f = 0; f < l; ++f)
      (c = s[f]) && (h = t.call(c, c.__data__, f, s)) && ("__data__" in c && (h.__data__ = c.__data__), u[f] = h, Ie(u[f], n, e, f, u, J(c, e)));
  return new ft(a, this._parents, n, e);
}
function J0(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = rs(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, h = 0; h < u; ++h)
      if (c = l[h]) {
        for (var f = t.call(c, c.__data__, h, l), p, d = J(c, e), y = 0, w = f.length; y < w; ++y)
          (p = f[y]) && Ie(p, n, e, y, f, d);
        a.push(f), o.push(c);
      }
  return new ft(a, o, n, e);
}
var Q0 = En.prototype.constructor;
function tg() {
  return new Q0(this._groups, this._parents);
}
function ng(t, n) {
  var e, r, i;
  return function() {
    var a = Kt(this, t), o = (this.style.removeProperty(t), Kt(this, t));
    return a === o ? null : a === e && o === r ? i : i = n(e = a, r = o);
  };
}
function Ns(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function eg(t, n, e) {
  var r, i = e + "", a;
  return function() {
    var o = Kt(this, t);
    return o === i ? null : o === r ? a : a = n(r = o, e);
  };
}
function rg(t, n, e) {
  var r, i, a;
  return function() {
    var o = Kt(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Kt(this, t))), o === l ? null : o === r && l === i ? a : (i = l, a = n(r = o, s));
  };
}
function ig(t, n) {
  var e, r, i, a = "style." + n, o = "end." + a, s;
  return function() {
    var l = it(this, t), u = l.on, c = l.value[a] == null ? s || (s = Ns(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(o, i = c), l.on = r;
  };
}
function ag(t, n, e) {
  var r = (t += "") == "transform" ? u0 : $s;
  return n == null ? this.styleTween(t, ng(t, r)).on("end.style." + t, Ns(t)) : typeof n == "function" ? this.styleTween(t, rg(t, r, di(this, "style." + t, n))).each(ig(this._id, t)) : this.styleTween(t, eg(t, r, n), e).on("end.style." + t, null);
}
function og(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function sg(t, n, e) {
  var r, i;
  function a() {
    var o = n.apply(this, arguments);
    return o !== i && (r = (i = o) && og(t, o, e)), r;
  }
  return a._value = n, a;
}
function ug(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, sg(t, n, e ?? ""));
}
function lg(t) {
  return function() {
    this.textContent = t;
  };
}
function cg(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function fg(t) {
  return this.tween("text", typeof t == "function" ? cg(di(this, "text", t)) : lg(t == null ? "" : t + ""));
}
function hg(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function pg(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && hg(i)), n;
  }
  return r._value = t, r;
}
function dg(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, pg(t));
}
function gg() {
  for (var t = this._name, n = this._id, e = Ts(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      if (l = o[u]) {
        var c = J(l, n);
        Ie(l, t, e, u, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new ft(r, this._parents, t, e);
}
function yg() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(a, o) {
    var s = { value: o }, l = { value: function() {
      --i === 0 && a();
    } };
    e.each(function() {
      var u = it(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && a();
  });
}
var _g = 0;
function ft(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Ts() {
  return ++_g;
}
var ot = En.prototype;
ft.prototype = {
  constructor: ft,
  select: Z0,
  selectAll: J0,
  selectChild: ot.selectChild,
  selectChildren: ot.selectChildren,
  filter: X0,
  merge: U0,
  selection: tg,
  transition: gg,
  call: ot.call,
  nodes: ot.nodes,
  node: ot.node,
  size: ot.size,
  empty: ot.empty,
  each: ot.each,
  on: V0,
  attr: S0,
  attrTween: O0,
  style: ag,
  styleTween: ug,
  text: fg,
  textTween: dg,
  remove: W0,
  tween: b0,
  delay: R0,
  duration: F0,
  ease: L0,
  easeVarying: B0,
  end: yg,
  [Symbol.iterator]: ot[Symbol.iterator]
};
function vg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var mg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: vg
};
function wg(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function bg(t) {
  var n, e;
  t instanceof ft ? (n = t._id, t = t._name) : (n = Ts(), (e = mg).time = hi(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, l, u = 0; u < s; ++u)
      (l = o[u]) && Ie(l, t, n, u, o, e || wg(l, n));
  return new ft(r, this._parents, t, n);
}
En.prototype.interrupt = v0;
En.prototype.transition = bg;
const Er = Math.PI, Or = 2 * Er, $t = 1e-6, xg = Or - $t;
function Ss(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Mg(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Ss;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class ks {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Ss : Mg(n);
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
    else if (f > $t) if (!(Math.abs(h * l - u * c) > $t) || !a)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - o, d = i - s, y = l * l + u * u, w = p * p + d * d, _ = Math.sqrt(y), x = Math.sqrt(f), M = a * Math.tan((Er - Math.acos((y + f - w) / (2 * _ * x))) / 2), g = M / x, m = M / _;
      Math.abs(g - 1) > $t && this._append`L${n + g * c},${e + g * h}`, this._append`A${a},${a},0,0,${+(h * p > c * d)},${this._x1 = n + m * l},${this._y1 = e + m * u}`;
    }
  }
  arc(n, e, r, i, a, o) {
    if (n = +n, e = +e, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, h = 1 ^ o, f = o ? i - a : a - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > $t || Math.abs(this._y1 - c) > $t) && this._append`L${u},${c}`, r && (f < 0 && (f = f % Or + Or), f > xg ? this._append`A${r},${r},0,1,${h},${n - s},${e - l}A${r},${r},0,1,${h},${this._x1 = u},${this._y1 = c}` : f > $t && this._append`A${r},${r},0,${+(f >= Er)},${h},${this._x1 = n + r * Math.cos(a)},${this._y1 = e + r * Math.sin(a)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Q() {
  return new ks();
}
Q.prototype = ks.prototype;
function Ag(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Ae(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Zt(t) {
  return t = Ae(Math.abs(t)), t ? t[1] : NaN;
}
function $g(t, n) {
  return function(e, r) {
    for (var i = e.length, a = [], o = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), a.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(n);
  };
}
function Ng(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Tg = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $e(t) {
  if (!(n = Tg.exec(t))) throw new Error("invalid format: " + t);
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
$e.prototype = gi.prototype;
function gi(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
gi.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Sg(t) {
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
var Ps;
function kg(t, n) {
  var e = Ae(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], a = i - (Ps = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Ae(t, Math.max(0, n + a - 1))[0];
}
function ba(t, n) {
  var e = Ae(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const xa = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Ag,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => ba(t * 100, n),
  r: ba,
  s: kg,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Ma(t) {
  return t;
}
var Aa = Array.prototype.map, $a = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Pg(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Ma : $g(Aa.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Ma : Ng(Aa.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = $e(h);
    var f = h.fill, p = h.align, d = h.sign, y = h.symbol, w = h.zero, _ = h.width, x = h.comma, M = h.precision, g = h.trim, m = h.type;
    m === "n" ? (x = !0, m = "g") : xa[m] || (M === void 0 && (M = 12), g = !0, m = "g"), (w || f === "0" && p === "=") && (w = !0, f = "0", p = "=");
    var S = y === "$" ? e : y === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", P = y === "$" ? r : /[%p]/.test(m) ? o : "", O = xa[m], L = /[defgprs%]/.test(m);
    M = M === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function H(v) {
      var C = S, A = P, I, At, j;
      if (m === "c")
        A = O(v) + A, v = "";
      else {
        v = +v;
        var B = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? l : O(Math.abs(v), M), g && (v = Sg(v)), B && +v == 0 && d !== "+" && (B = !1), C = (B ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + C, A = (m === "s" ? $a[8 + Ps / 3] : "") + A + (B && d === "(" ? ")" : ""), L) {
          for (I = -1, At = v.length; ++I < At; )
            if (j = v.charCodeAt(I), 48 > j || j > 57) {
              A = (j === 46 ? i + v.slice(I + 1) : v.slice(I)) + A, v = v.slice(0, I);
              break;
            }
        }
      }
      x && !w && (v = n(v, 1 / 0));
      var X = C.length + v.length + A.length, T = X < _ ? new Array(_ - X + 1).join(f) : "";
      switch (x && w && (v = n(T + v, T.length ? _ - A.length : 1 / 0), T = ""), p) {
        case "<":
          v = C + v + A + T;
          break;
        case "=":
          v = C + T + v + A;
          break;
        case "^":
          v = T.slice(0, X = T.length >> 1) + C + v + A + T.slice(X);
          break;
        default:
          v = T + C + v + A;
          break;
      }
      return a(v);
    }
    return H.toString = function() {
      return h + "";
    }, H;
  }
  function c(h, f) {
    var p = u((h = $e(h), h.type = "f", h)), d = Math.max(-8, Math.min(8, Math.floor(Zt(f) / 3))) * 3, y = Math.pow(10, -d), w = $a[8 + d / 3];
    return function(_) {
      return p(y * _) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var Yn, Re, zs;
zg({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function zg(t) {
  return Yn = Pg(t), Re = Yn.format, zs = Yn.formatPrefix, Yn;
}
function Eg(t) {
  return Math.max(0, -Zt(Math.abs(t)));
}
function Og(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Zt(n) / 3))) * 3 - Zt(Math.abs(t)));
}
function Cg(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Zt(n) - Zt(t)) + 1;
}
function Ig(t, n) {
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
function Rg(t) {
  return function() {
    return t;
  };
}
function qg(t) {
  return +t;
}
var Na = [0, 1];
function Ht(t) {
  return t;
}
function Cr(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Rg(isNaN(n) ? NaN : 0.5);
}
function jg(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Fg(t, n, e) {
  var r = t[0], i = t[1], a = n[0], o = n[1];
  return i < r ? (r = Cr(i, r), a = e(o, a)) : (r = Cr(r, i), a = e(a, o)), function(s) {
    return a(r(s));
  };
}
function Dg(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++o < r; )
    i[o] = Cr(t[o], t[o + 1]), a[o] = e(n[o], n[o + 1]);
  return function(s) {
    var l = Dh(t, s, 1, r) - 1;
    return a[l](i[l](s));
  };
}
function Lg(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Hg() {
  var t = Na, n = Na, e = fi, r, i, a, o = Ht, s, l, u;
  function c() {
    var f = Math.min(t.length, n.length);
    return o !== Ht && (o = jg(t[0], t[f - 1])), s = f > 2 ? Dg : Fg, l = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? a : (l || (l = s(t.map(r), n, e)))(r(o(f)));
  }
  return h.invert = function(f) {
    return o(i((u || (u = s(n, t.map(r), Y)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, qg), c()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (n = Array.from(f), c()) : n.slice();
  }, h.rangeRound = function(f) {
    return n = Array.from(f), e = a0, c();
  }, h.clamp = function(f) {
    return arguments.length ? (o = f ? !0 : Ht, c()) : o !== Ht;
  }, h.interpolate = function(f) {
    return arguments.length ? (e = f, c()) : e;
  }, h.unknown = function(f) {
    return arguments.length ? (a = f, h) : a;
  }, function(f, p) {
    return r = f, i = p, c();
  };
}
function Bg() {
  return Hg()(Ht, Ht);
}
function Xg(t, n, e, r) {
  var i = Uh(t, n, e), a;
  switch (r = $e(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(a = Og(i, o)) && (r.precision = a), zs(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Cg(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Eg(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Re(r);
}
function Ug(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Xh(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Xg(i[0], i[i.length - 1], e ?? 10, r);
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
function Jt() {
  var t = Bg();
  return t.copy = function() {
    return Lg(t, Jt());
  }, Ig.apply(t, arguments), Ug(t);
}
function pn(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
pn.prototype = {
  constructor: pn,
  scale: function(t) {
    return t === 1 ? this : new pn(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new pn(this.k, this.x + this.k * t, this.y + this.k * n);
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
pn.prototype;
var Es = typeof global == "object" && global && global.Object === Object && global, Yg = typeof self == "object" && self && self.Object === Object && self, pt = Es || Yg || Function("return this")(), et = pt.Symbol, Os = Object.prototype, Gg = Os.hasOwnProperty, Vg = Os.toString, on = et ? et.toStringTag : void 0;
function Kg(t) {
  var n = Gg.call(t, on), e = t[on];
  try {
    t[on] = void 0;
    var r = !0;
  } catch {
  }
  var i = Vg.call(t);
  return r && (n ? t[on] = e : delete t[on]), i;
}
var Wg = Object.prototype, Zg = Wg.toString;
function Jg(t) {
  return Zg.call(t);
}
var Qg = "[object Null]", ty = "[object Undefined]", Ta = et ? et.toStringTag : void 0;
function nn(t) {
  return t == null ? t === void 0 ? ty : Qg : Ta && Ta in Object(t) ? Kg(t) : Jg(t);
}
function Qt(t) {
  return t != null && typeof t == "object";
}
var ny = "[object Symbol]";
function qe(t) {
  return typeof t == "symbol" || Qt(t) && nn(t) == ny;
}
function Cs(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var K = Array.isArray, Sa = et ? et.prototype : void 0, ka = Sa ? Sa.toString : void 0;
function Is(t) {
  if (typeof t == "string")
    return t;
  if (K(t))
    return Cs(t, Is) + "";
  if (qe(t))
    return ka ? ka.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var ey = /\s/;
function ry(t) {
  for (var n = t.length; n-- && ey.test(t.charAt(n)); )
    ;
  return n;
}
var iy = /^\s+/;
function ay(t) {
  return t && t.slice(0, ry(t) + 1).replace(iy, "");
}
function tn(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Pa = NaN, oy = /^[-+]0x[0-9a-f]+$/i, sy = /^0b[01]+$/i, uy = /^0o[0-7]+$/i, ly = parseInt;
function cy(t) {
  if (typeof t == "number")
    return t;
  if (qe(t))
    return Pa;
  if (tn(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = tn(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = ay(t);
  var e = sy.test(t);
  return e || uy.test(t) ? ly(t.slice(2), e ? 2 : 8) : oy.test(t) ? Pa : +t;
}
var fy = 1 / 0, hy = 17976931348623157e292;
function or(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = cy(t), t === fy || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * hy;
  }
  return t === t ? t : 0;
}
function py(t) {
  return t;
}
var dy = "[object AsyncFunction]", gy = "[object Function]", yy = "[object GeneratorFunction]", _y = "[object Proxy]";
function Rs(t) {
  if (!tn(t))
    return !1;
  var n = nn(t);
  return n == gy || n == yy || n == dy || n == _y;
}
var sr = pt["__core-js_shared__"], za = function() {
  var t = /[^.]+$/.exec(sr && sr.keys && sr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function vy(t) {
  return !!za && za in t;
}
var my = Function.prototype, wy = my.toString;
function qt(t) {
  if (t != null) {
    try {
      return wy.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var by = /[\\^$.*+?()[\]{}|]/g, xy = /^\[object .+?Constructor\]$/, My = Function.prototype, Ay = Object.prototype, $y = My.toString, Ny = Ay.hasOwnProperty, Ty = RegExp(
  "^" + $y.call(Ny).replace(by, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Sy(t) {
  if (!tn(t) || vy(t))
    return !1;
  var n = Rs(t) ? Ty : xy;
  return n.test(qt(t));
}
function ky(t, n) {
  return t == null ? void 0 : t[n];
}
function en(t, n) {
  var e = ky(t, n);
  return Sy(e) ? e : void 0;
}
var Ir = en(pt, "WeakMap"), Py = 9007199254740991, zy = /^(?:0|[1-9]\d*)$/;
function yi(t, n) {
  var e = typeof t;
  return n = n ?? Py, !!n && (e == "number" || e != "symbol" && zy.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function _i(t, n) {
  return t === n || t !== t && n !== n;
}
var Ey = 9007199254740991;
function vi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ey;
}
function je(t) {
  return t != null && vi(t.length) && !Rs(t);
}
function Oy(t, n, e) {
  if (!tn(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? je(e) && yi(n, e.length) : r == "string" && n in e) ? _i(e[n], t) : !1;
}
var Cy = Object.prototype;
function Iy(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Cy;
  return t === e;
}
function Ry(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var qy = "[object Arguments]";
function Ea(t) {
  return Qt(t) && nn(t) == qy;
}
var qs = Object.prototype, jy = qs.hasOwnProperty, Fy = qs.propertyIsEnumerable, mi = Ea(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ea : function(t) {
  return Qt(t) && jy.call(t, "callee") && !Fy.call(t, "callee");
};
function Dy() {
  return !1;
}
var js = typeof exports == "object" && exports && !exports.nodeType && exports, Oa = js && typeof module == "object" && module && !module.nodeType && module, Ly = Oa && Oa.exports === js, Ca = Ly ? pt.Buffer : void 0, Hy = Ca ? Ca.isBuffer : void 0, Rr = Hy || Dy, By = "[object Arguments]", Xy = "[object Array]", Uy = "[object Boolean]", Yy = "[object Date]", Gy = "[object Error]", Vy = "[object Function]", Ky = "[object Map]", Wy = "[object Number]", Zy = "[object Object]", Jy = "[object RegExp]", Qy = "[object Set]", t_ = "[object String]", n_ = "[object WeakMap]", e_ = "[object ArrayBuffer]", r_ = "[object DataView]", i_ = "[object Float32Array]", a_ = "[object Float64Array]", o_ = "[object Int8Array]", s_ = "[object Int16Array]", u_ = "[object Int32Array]", l_ = "[object Uint8Array]", c_ = "[object Uint8ClampedArray]", f_ = "[object Uint16Array]", h_ = "[object Uint32Array]", $ = {};
$[i_] = $[a_] = $[o_] = $[s_] = $[u_] = $[l_] = $[c_] = $[f_] = $[h_] = !0;
$[By] = $[Xy] = $[e_] = $[Uy] = $[r_] = $[Yy] = $[Gy] = $[Vy] = $[Ky] = $[Wy] = $[Zy] = $[Jy] = $[Qy] = $[t_] = $[n_] = !1;
function p_(t) {
  return Qt(t) && vi(t.length) && !!$[nn(t)];
}
function d_(t) {
  return function(n) {
    return t(n);
  };
}
var Fs = typeof exports == "object" && exports && !exports.nodeType && exports, dn = Fs && typeof module == "object" && module && !module.nodeType && module, g_ = dn && dn.exports === Fs, ur = g_ && Es.process, Ia = function() {
  try {
    var t = dn && dn.require && dn.require("util").types;
    return t || ur && ur.binding && ur.binding("util");
  } catch {
  }
}(), Ra = Ia && Ia.isTypedArray, Ds = Ra ? d_(Ra) : p_, y_ = Object.prototype, __ = y_.hasOwnProperty;
function v_(t, n) {
  var e = K(t), r = !e && mi(t), i = !e && !r && Rr(t), a = !e && !r && !i && Ds(t), o = e || r || i || a, s = o ? Ry(t.length, String) : [], l = s.length;
  for (var u in t)
    __.call(t, u) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    yi(u, l))) && s.push(u);
  return s;
}
function m_(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var w_ = m_(Object.keys, Object), b_ = Object.prototype, x_ = b_.hasOwnProperty;
function M_(t) {
  if (!Iy(t))
    return w_(t);
  var n = [];
  for (var e in Object(t))
    x_.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function wi(t) {
  return je(t) ? v_(t) : M_(t);
}
var A_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $_ = /^\w*$/;
function bi(t, n) {
  if (K(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || qe(t) ? !0 : $_.test(t) || !A_.test(t) || n != null && t in Object(n);
}
var $n = en(Object, "create");
function N_() {
  this.__data__ = $n ? $n(null) : {}, this.size = 0;
}
function T_(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var S_ = "__lodash_hash_undefined__", k_ = Object.prototype, P_ = k_.hasOwnProperty;
function z_(t) {
  var n = this.__data__;
  if ($n) {
    var e = n[t];
    return e === S_ ? void 0 : e;
  }
  return P_.call(n, t) ? n[t] : void 0;
}
var E_ = Object.prototype, O_ = E_.hasOwnProperty;
function C_(t) {
  var n = this.__data__;
  return $n ? n[t] !== void 0 : O_.call(n, t);
}
var I_ = "__lodash_hash_undefined__";
function R_(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = $n && n === void 0 ? I_ : n, this;
}
function Ct(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Ct.prototype.clear = N_;
Ct.prototype.delete = T_;
Ct.prototype.get = z_;
Ct.prototype.has = C_;
Ct.prototype.set = R_;
function q_() {
  this.__data__ = [], this.size = 0;
}
function Fe(t, n) {
  for (var e = t.length; e--; )
    if (_i(t[e][0], n))
      return e;
  return -1;
}
var j_ = Array.prototype, F_ = j_.splice;
function D_(t) {
  var n = this.__data__, e = Fe(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : F_.call(n, e, 1), --this.size, !0;
}
function L_(t) {
  var n = this.__data__, e = Fe(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function H_(t) {
  return Fe(this.__data__, t) > -1;
}
function B_(t, n) {
  var e = this.__data__, r = Fe(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function dt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
dt.prototype.clear = q_;
dt.prototype.delete = D_;
dt.prototype.get = L_;
dt.prototype.has = H_;
dt.prototype.set = B_;
var Nn = en(pt, "Map");
function X_() {
  this.size = 0, this.__data__ = {
    hash: new Ct(),
    map: new (Nn || dt)(),
    string: new Ct()
  };
}
function U_(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function De(t, n) {
  var e = t.__data__;
  return U_(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Y_(t) {
  var n = De(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function G_(t) {
  return De(this, t).get(t);
}
function V_(t) {
  return De(this, t).has(t);
}
function K_(t, n) {
  var e = De(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function gt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
gt.prototype.clear = X_;
gt.prototype.delete = Y_;
gt.prototype.get = G_;
gt.prototype.has = V_;
gt.prototype.set = K_;
var W_ = "Expected a function";
function xi(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(W_);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (xi.Cache || gt)(), e;
}
xi.Cache = gt;
var Z_ = 500;
function J_(t) {
  var n = xi(t, function(r) {
    return e.size === Z_ && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Q_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, tv = /\\(\\)?/g, nv = J_(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Q_, function(e, r, i, a) {
    n.push(i ? a.replace(tv, "$1") : r || e);
  }), n;
});
function ev(t) {
  return t == null ? "" : Is(t);
}
function Ls(t, n) {
  return K(t) ? t : bi(t, n) ? [t] : nv(ev(t));
}
function Le(t) {
  if (typeof t == "string" || qe(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Hs(t, n) {
  n = Ls(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Le(n[e++])];
  return e && e == r ? t : void 0;
}
function rv(t, n, e) {
  var r = t == null ? void 0 : Hs(t, n);
  return r === void 0 ? e : r;
}
function Bs(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var qa = et ? et.isConcatSpreadable : void 0;
function iv(t) {
  return K(t) || mi(t) || !!(qa && t && t[qa]);
}
function av(t, n, e, r, i) {
  var a = -1, o = t.length;
  for (e || (e = iv), i || (i = []); ++a < o; ) {
    var s = t[a];
    e(s) ? Bs(i, s) : i[i.length] = s;
  }
  return i;
}
function ov(t) {
  var n = t == null ? 0 : t.length;
  return n ? av(t) : [];
}
function sv() {
  this.__data__ = new dt(), this.size = 0;
}
function uv(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function lv(t) {
  return this.__data__.get(t);
}
function cv(t) {
  return this.__data__.has(t);
}
var fv = 200;
function hv(t, n) {
  var e = this.__data__;
  if (e instanceof dt) {
    var r = e.__data__;
    if (!Nn || r.length < fv - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new gt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function ut(t) {
  var n = this.__data__ = new dt(t);
  this.size = n.size;
}
ut.prototype.clear = sv;
ut.prototype.delete = uv;
ut.prototype.get = lv;
ut.prototype.has = cv;
ut.prototype.set = hv;
function pv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function dv() {
  return [];
}
var gv = Object.prototype, yv = gv.propertyIsEnumerable, ja = Object.getOwnPropertySymbols, _v = ja ? function(t) {
  return t == null ? [] : (t = Object(t), pv(ja(t), function(n) {
    return yv.call(t, n);
  }));
} : dv;
function vv(t, n, e) {
  var r = n(t);
  return K(t) ? r : Bs(r, e(t));
}
function Fa(t) {
  return vv(t, wi, _v);
}
var qr = en(pt, "DataView"), jr = en(pt, "Promise"), Fr = en(pt, "Set"), Da = "[object Map]", mv = "[object Object]", La = "[object Promise]", Ha = "[object Set]", Ba = "[object WeakMap]", Xa = "[object DataView]", wv = qt(qr), bv = qt(Nn), xv = qt(jr), Mv = qt(Fr), Av = qt(Ir), mt = nn;
(qr && mt(new qr(new ArrayBuffer(1))) != Xa || Nn && mt(new Nn()) != Da || jr && mt(jr.resolve()) != La || Fr && mt(new Fr()) != Ha || Ir && mt(new Ir()) != Ba) && (mt = function(t) {
  var n = nn(t), e = n == mv ? t.constructor : void 0, r = e ? qt(e) : "";
  if (r)
    switch (r) {
      case wv:
        return Xa;
      case bv:
        return Da;
      case xv:
        return La;
      case Mv:
        return Ha;
      case Av:
        return Ba;
    }
  return n;
});
var Ua = pt.Uint8Array, $v = "__lodash_hash_undefined__";
function Nv(t) {
  return this.__data__.set(t, $v), this;
}
function Tv(t) {
  return this.__data__.has(t);
}
function Ne(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new gt(); ++n < e; )
    this.add(t[n]);
}
Ne.prototype.add = Ne.prototype.push = Nv;
Ne.prototype.has = Tv;
function Sv(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function kv(t, n) {
  return t.has(n);
}
var Pv = 1, zv = 2;
function Xs(t, n, e, r, i, a) {
  var o = e & Pv, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & zv ? new Ne() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], y = n[h];
    if (r)
      var w = o ? r(y, d, h, n, t, a) : r(d, y, h, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Sv(n, function(_, x) {
        if (!kv(p, x) && (d === _ || i(d, _, e, r, a)))
          return p.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === y || i(d, y, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function Ev(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Ov(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Cv = 1, Iv = 2, Rv = "[object Boolean]", qv = "[object Date]", jv = "[object Error]", Fv = "[object Map]", Dv = "[object Number]", Lv = "[object RegExp]", Hv = "[object Set]", Bv = "[object String]", Xv = "[object Symbol]", Uv = "[object ArrayBuffer]", Yv = "[object DataView]", Ya = et ? et.prototype : void 0, lr = Ya ? Ya.valueOf : void 0;
function Gv(t, n, e, r, i, a, o) {
  switch (e) {
    case Yv:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Uv:
      return !(t.byteLength != n.byteLength || !a(new Ua(t), new Ua(n)));
    case Rv:
    case qv:
    case Dv:
      return _i(+t, +n);
    case jv:
      return t.name == n.name && t.message == n.message;
    case Lv:
    case Bv:
      return t == n + "";
    case Fv:
      var s = Ev;
    case Hv:
      var l = r & Cv;
      if (s || (s = Ov), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= Iv, o.set(t, n);
      var c = Xs(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case Xv:
      if (lr)
        return lr.call(t) == lr.call(n);
  }
  return !1;
}
var Vv = 1, Kv = Object.prototype, Wv = Kv.hasOwnProperty;
function Zv(t, n, e, r, i, a) {
  var o = e & Vv, s = Fa(t), l = s.length, u = Fa(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : Wv.call(n, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var y = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var _ = t[f], x = n[f];
    if (r)
      var M = o ? r(x, _, f, n, t, a) : r(_, x, f, t, n, a);
    if (!(M === void 0 ? _ === x || i(_, x, e, r, a) : M)) {
      y = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (y && !w) {
    var g = t.constructor, m = n.constructor;
    g != m && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof m == "function" && m instanceof m) && (y = !1);
  }
  return a.delete(t), a.delete(n), y;
}
var Jv = 1, Ga = "[object Arguments]", Va = "[object Array]", Gn = "[object Object]", Qv = Object.prototype, Ka = Qv.hasOwnProperty;
function tm(t, n, e, r, i, a) {
  var o = K(t), s = K(n), l = o ? Va : mt(t), u = s ? Va : mt(n);
  l = l == Ga ? Gn : l, u = u == Ga ? Gn : u;
  var c = l == Gn, h = u == Gn, f = l == u;
  if (f && Rr(t)) {
    if (!Rr(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new ut()), o || Ds(t) ? Xs(t, n, e, r, i, a) : Gv(t, n, l, e, r, i, a);
  if (!(e & Jv)) {
    var p = c && Ka.call(t, "__wrapped__"), d = h && Ka.call(n, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, w = d ? n.value() : n;
      return a || (a = new ut()), i(y, w, e, r, a);
    }
  }
  return f ? (a || (a = new ut()), Zv(t, n, e, r, i, a)) : !1;
}
function Mi(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !Qt(t) && !Qt(n) ? t !== t && n !== n : tm(t, n, e, r, Mi, i);
}
var nm = 1, em = 2;
function rm(t, n, e, r) {
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
      var c = new ut(), h;
      if (!(h === void 0 ? Mi(u, l, nm | em, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Us(t) {
  return t === t && !tn(t);
}
function im(t) {
  for (var n = wi(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Us(i)];
  }
  return n;
}
function Ys(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function am(t) {
  var n = im(t);
  return n.length == 1 && n[0][2] ? Ys(n[0][0], n[0][1]) : function(e) {
    return e === t || rm(e, t, n);
  };
}
function om(t, n) {
  return t != null && n in Object(t);
}
function sm(t, n, e) {
  n = Ls(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = Le(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && vi(i) && yi(o, i) && (K(t) || mi(t)));
}
function um(t, n) {
  return t != null && sm(t, n, om);
}
var lm = 1, cm = 2;
function fm(t, n) {
  return bi(t) && Us(n) ? Ys(Le(t), n) : function(e) {
    var r = rv(e, t);
    return r === void 0 && r === n ? um(e, t) : Mi(n, r, lm | cm);
  };
}
function hm(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function pm(t) {
  return function(n) {
    return Hs(n, t);
  };
}
function dm(t) {
  return bi(t) ? hm(Le(t)) : pm(t);
}
function gm(t) {
  return typeof t == "function" ? t : t == null ? py : typeof t == "object" ? K(t) ? fm(t[0], t[1]) : am(t) : dm(t);
}
function ym(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var _m = ym();
function vm(t, n) {
  return t && _m(t, n, wi);
}
function mm(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!je(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var wm = mm(vm);
function bm(t, n) {
  var e = -1, r = je(t) ? Array(t.length) : [];
  return wm(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Wa(t, n) {
  var e = K(t) ? Cs : bm;
  return e(t, gm(n));
}
var xm = Math.ceil, Mm = Math.max;
function Am(t, n, e, r) {
  for (var i = -1, a = Mm(xm((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function $m(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && Oy(n, e, r) && (e = r = void 0), n = or(n), e === void 0 ? (e = n, n = 0) : e = or(e), r = r === void 0 ? n < e ? 1 : -1 : or(r), Am(n, e, r);
  };
}
var Nm = $m();
const Tm = (t, n, e = 12, r = 12) => {
  const i = Jt().domain([0, e]).range([0, t]), a = Jt().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Nm((e + 1) * (r + 1)).map(function(o) {
        return { m: o % (e + 1), n: Math.floor(o / (e + 1)), x: i(o % (e + 1)), y: a(Math.floor(o / (e + 1))) };
      });
    },
    position: function(o, s) {
      typeof o == "number" && (o = [o]), typeof s == "number" && (s = [s]);
      const l = ov(Wa(s, function(u) {
        return Wa(
          o,
          function(c) {
            return { x: i(c), y: a(u) };
          }
        );
      }));
      return l.length == 1 ? l[0] : l;
    }
  };
}, Sm = "_widget_1aazq_40", km = "_label_1aazq_58", Pm = "_lit_1aazq_63", zm = "_button_1aazq_67", Em = "_symbol_1aazq_67", Om = "_radio_1aazq_68", Cm = "_radiobutton_1aazq_68", Im = "_selected_1aazq_74", Rm = "_toggle_1aazq_75", qm = "_slider_1aazq_84", jm = "_track_1aazq_84", Fm = "_track_overlay_1aazq_89", Dm = "_handle_1aazq_97", b = {
  widget: Sm,
  label: km,
  lit: Pm,
  button: zm,
  symbol: Em,
  radio: Om,
  radiobutton: Cm,
  selected: Im,
  toggle: Rm,
  slider: qm,
  track: jm,
  track_overlay: Fm,
  handle: Dm
}, He = () => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = t.length;
  let e = "";
  for (let r = 0; r < 10; ++r)
    e += t[Math.floor(Math.random() * n)];
  return e;
}, Ai = (t, n, e) => {
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
}, Lm = (t = 1) => {
  const n = Q();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Hm = (t = 1) => {
  const n = Q(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Bm = (t = 1) => {
  const n = Q();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, Xm = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = Q();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, Um = (t = 1) => {
  const n = Q(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, a = 0.5, o = 0.6, s = 0.6, l = [t * (1 - a / 2) * Math.cos(i), t * (1 - a / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - a) * Math.cos(r), t * (1 - a) * Math.sin(r)), n.arc(0, 0, t * (1 - a), r, i, !1), n.lineTo(t * (1 - o - a / 2) * Math.cos(i), t * (1 - o - a / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(i), t * (1 + o - a / 2) * Math.sin(i)), n.closePath(), n.toString();
}, Ym = (t = 1) => {
  const n = Q(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, a = e, o = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, o), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, a, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, Gm = (t = 1) => {
  const n = Q(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, a = 0.5, o = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - a) * Math.cos(i), t * (1 - a) * Math.sin(i)), n.arc(0, 0, t * (1 - a), i, r, !0), n.lineTo(t * (1 - o - a / 2) * Math.cos(r), t * (1 - o - a / 2) * Math.sin(r));
  var l = [t * (1 - a / 2) * Math.cos(r), t * (1 - a / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + o - a / 2) * Math.cos(r), t * (1 + o - a / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Vm = (t = 1) => {
  var n = Q(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, Km = (t = 1) => {
  const n = Q(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Dr = (t) => {
  switch (t) {
    case "play":
      return Lm;
    case "forward":
      return Hm;
    case "back":
      return Bm;
    case "pause":
      return Xm;
    case "reload":
      return Um;
    case "capture":
      return Ym;
    case "rewind":
      return Gm;
    case "stop":
      return Vm;
    case "push":
      return Km;
  }
}, $i = () => {
  const t = "button";
  var n = He(), e = 50, r = 0.3, i = "round", a = { x: 0, y: 0 }, o = null, s = "bottom", l = null, u = function(f) {
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
      h = (h + 1) % c.length, u(), E(this.parentNode).select("." + b.symbol).attr("d", Dr(c[h])(r * e));
    },
    press: function(f) {
      h = (h + 1) % c.length, u(), f.select("#button_" + n).select("." + b.symbol).attr("d", Dr(c[h])(r * e));
    }
  };
}, Wm = () => {
  const t = "slider", n = Re(".3f");
  var e = He(), r = 100, i = 8, a = 10, o = !1, s = { x: 0, y: 0 }, l = "top-left", u = null, c = function(_) {
  }, h = function(_) {
  }, f = [0, 1], p = 0, d = null, y = Jt().domain(f).range([0, r]).clamp(!0);
  const w = function(_, x, M = f) {
    const g = _.select("#slider_" + e);
    y.domain(M), p = x, g.selectAll("." + b.handle).transition().attr("cx", y(x)), o && g.select("." + b.label).text(d + " = " + n(p)), c(), h();
  };
  return {
    type: t,
    scale: y,
    id: function(_) {
      return typeof _ > "u" ? e : (e = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return c = _, this;
      c(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return h = _, this;
      h(_);
    },
    range: function(_) {
      return typeof _ > "u" ? f : (f = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? p : (p = _, this);
    },
    reset: w,
    click: w
  };
}, Zm = () => {
  const t = "toggle";
  var n = He(), e = 10, r = { x: 0, y: 0 }, i = null, a = "top", o = null, s = function(u) {
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
      const u = E(this.parentNode);
      u.select("." + b.handle).transition().attr("cx", l ? 2 * e : 0), u.classed(b.selected, l), s();
    },
    reset: function(u, c) {
      l = c;
      const h = u.select("#toggle_" + n);
      h.selectAll("." + b.handle).transition().attr("cx", l ? 2 * e : 0), h.classed(b.selected, l), s();
    }
  };
}, Jm = () => {
  const t = "radio";
  var n = He(), e = 100, r = 20, i = 0.3, a = "round", o = "vertical", s = { x: 0, y: 0 }, l = "right", u = null, c = function(p) {
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
      f = d, E(this.parentNode).selectAll("." + b.symbol).classed(b.selected, (y) => y == f), c();
    },
    reset: function(p, d) {
      f = d, p.select("#radio_" + n).selectAll("." + b.symbol).classed(b.selected, (y) => y == f), c();
    }
  };
}, Qm = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), o = E(a).attr("class", b.widget + " " + b.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = o.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = o.append("circle").attr("r", t.size() / 2), s.attr("class", b.background).on("click", t.click).on("mouseover", function() {
    E(this).classed(b.lit, !0), E(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(b.lit, !1), E(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), o.append("path").attr("d", Dr(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", b.symbol), r) {
    const l = Ai(t.size(), t.size(), i);
    o.append("text").text(r).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return a;
}, Gs = (t, n) => {
  const e = Q();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, t1 = (t, n) => {
  const e = Re(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, a = t.size();
  t.label();
  const o = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = E(l).attr("class", b.widget + " " + b.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), o.domain(i()).range([0, a]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Gs(t.size(), t.girth())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", t.knob()).attr("cx", o(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", b.track_overlay).on("click", function(d) {
    const y = $r(d, this)[0];
    t.value(o.invert(y)), t.update(), t.update_end(), s.selectAll("." + b.handle).attr("cx", o(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Rd().on("drag", function(d) {
      t.value(o.invert(d.x)), t.update(), s.selectAll("." + b.handle).attr("cx", o(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, h, f, p = "bottom";
  return t.fontsize && (h = t.labelposition().match(/bottom/i) != null ? Ln([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Ln([t.girth() / 2, t.knob()]) - t.fontsize() / 2), h = t.labelposition().match(/bottom/i) != null ? Ln([t.girth() / 2, t.knob()]) + 7 : -Ln([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, f = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", b.label).style("text-anchor", f).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + h + ")"), l;
}, n1 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), a = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = E(o).attr("class", b.widget + " " + b.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(b.selected, t.value() == 1);
  if (s.append("path").attr("d", Gs(2 * t.size(), 2 * t.size())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", b.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = Ai(4 * t.size(), 2 * t.size(), a);
    s.append("text").text(i).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return o;
}, e1 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), a = t.buttonsize() * (1 - t.buttonpadding()), o = t.choices().length, s = Yh(o), l = Jt().domain([0, o - 1]).range([0, t.size()]), u = Jt().domain([0, o - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = E(c).attr("class", b.widget + " " + b.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + b.radiobutton).data(s).enter().append("g").attr("class", b.radiobutton).attr("id", (y) => "b" + y).attr("transform", (y) => t.orientation() == "vertical" ? "translate(0," + u(y) + ")" : "translate(" + l(y) + ",0)");
  var f, p;
  t.shape() == "rect" ? (f = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = h.append("rect").attr("width", a).attr("height", a).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -a / 2 + "," + -a / 2 + ")")) : (f = h.append("circle").attr("r", i / 2), p = h.append("circle").attr("r", a / 2)), f.attr("class", b.background).on("mouseover", function() {
    E(this).classed(b.lit, !0), E(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    E(this).classed(b.lit, !1), E(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), p.attr("class", b.symbol), p.filter((y) => y == t.value()).classed(b.selected, !0), h.on("click", t.click);
  const d = Ai(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", b.label).text(function(y, w) {
    return t.choices()[w];
  }).attr("alignment-baseline", d.valign).attr("transform", "translate(" + d.x + "," + d.y + ")").style("font-size", t.fontsize()).attr("text-anchor", d.anchor), c;
}, Vn = (t, n) => {
  switch (t.type) {
    case "button":
      return Qm(t);
    case "slider":
      return t1(t);
    case "radio":
      return e1(t);
    case "toggle":
      return n1(t);
  }
}, r1 = (t, n) => {
  const e = Tm(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = Ac("#" + t).classed(t + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), a = r.append("div").attr("id", "controls").attr("class", "d3-widgets control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return n.debug && a.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (o) => "translate(" + o.x + "," + o.y + ")").style("fill", "black"), { display: i, controls: a, grid: e };
};
var Vs = typeof global == "object" && global && global.Object === Object && global, i1 = typeof self == "object" && self && self.Object === Object && self, yt = Vs || i1 || Function("return this")(), xt = yt.Symbol, Ks = Object.prototype, a1 = Ks.hasOwnProperty, o1 = Ks.toString, sn = xt ? xt.toStringTag : void 0;
function s1(t) {
  var n = a1.call(t, sn), e = t[sn];
  try {
    t[sn] = void 0;
    var r = !0;
  } catch {
  }
  var i = o1.call(t);
  return r && (n ? t[sn] = e : delete t[sn]), i;
}
var u1 = Object.prototype, l1 = u1.toString;
function c1(t) {
  return l1.call(t);
}
var f1 = "[object Null]", h1 = "[object Undefined]", Za = xt ? xt.toStringTag : void 0;
function jt(t) {
  return t == null ? t === void 0 ? h1 : f1 : Za && Za in Object(t) ? s1(t) : c1(t);
}
function It(t) {
  return t != null && typeof t == "object";
}
var p1 = "[object Symbol]";
function Be(t) {
  return typeof t == "symbol" || It(t) && jt(t) == p1;
}
function Xe(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var W = Array.isArray, Ja = xt ? xt.prototype : void 0, Qa = Ja ? Ja.toString : void 0;
function Ws(t) {
  if (typeof t == "string")
    return t;
  if (W(t))
    return Xe(t, Ws) + "";
  if (Be(t))
    return Qa ? Qa.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var d1 = /\s/;
function g1(t) {
  for (var n = t.length; n-- && d1.test(t.charAt(n)); )
    ;
  return n;
}
var y1 = /^\s+/;
function _1(t) {
  return t && t.slice(0, g1(t) + 1).replace(y1, "");
}
function ht(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var to = NaN, v1 = /^[-+]0x[0-9a-f]+$/i, m1 = /^0b[01]+$/i, w1 = /^0o[0-7]+$/i, b1 = parseInt;
function x1(t) {
  if (typeof t == "number")
    return t;
  if (Be(t))
    return to;
  if (ht(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ht(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = _1(t);
  var e = m1.test(t);
  return e || w1.test(t) ? b1(t.slice(2), e ? 2 : 8) : v1.test(t) ? to : +t;
}
var M1 = 1 / 0, A1 = 17976931348623157e292;
function cr(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = x1(t), t === M1 || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * A1;
  }
  return t === t ? t : 0;
}
function Ni(t) {
  return t;
}
var $1 = "[object AsyncFunction]", N1 = "[object Function]", T1 = "[object GeneratorFunction]", S1 = "[object Proxy]";
function Zs(t) {
  if (!ht(t))
    return !1;
  var n = jt(t);
  return n == N1 || n == T1 || n == $1 || n == S1;
}
var fr = yt["__core-js_shared__"], no = function() {
  var t = /[^.]+$/.exec(fr && fr.keys && fr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function k1(t) {
  return !!no && no in t;
}
var P1 = Function.prototype, z1 = P1.toString;
function Ft(t) {
  if (t != null) {
    try {
      return z1.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var E1 = /[\\^$.*+?()[\]{}|]/g, O1 = /^\[object .+?Constructor\]$/, C1 = Function.prototype, I1 = Object.prototype, R1 = C1.toString, q1 = I1.hasOwnProperty, j1 = RegExp(
  "^" + R1.call(q1).replace(E1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function F1(t) {
  if (!ht(t) || k1(t))
    return !1;
  var n = Zs(t) ? j1 : O1;
  return n.test(Ft(t));
}
function D1(t, n) {
  return t == null ? void 0 : t[n];
}
function Dt(t, n) {
  var e = D1(t, n);
  return F1(e) ? e : void 0;
}
var Lr = Dt(yt, "WeakMap"), eo = function() {
  try {
    var t = Dt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
function L1(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var H1 = 9007199254740991, B1 = /^(?:0|[1-9]\d*)$/;
function Ue(t, n) {
  var e = typeof t;
  return n = n ?? H1, !!n && (e == "number" || e != "symbol" && B1.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function X1(t, n, e) {
  n == "__proto__" && eo ? eo(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Ye(t, n) {
  return t === n || t !== t && n !== n;
}
var U1 = Object.prototype, Y1 = U1.hasOwnProperty;
function G1(t, n, e) {
  var r = t[n];
  (!(Y1.call(t, n) && Ye(r, e)) || e === void 0 && !(n in t)) && X1(t, n, e);
}
var V1 = 9007199254740991;
function Ti(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= V1;
}
function Cn(t) {
  return t != null && Ti(t.length) && !Zs(t);
}
function K1(t, n, e) {
  if (!ht(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Cn(e) && Ue(n, e.length) : r == "string" && n in e) ? Ye(e[n], t) : !1;
}
var W1 = Object.prototype;
function Js(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || W1;
  return t === e;
}
function Z1(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var J1 = "[object Arguments]";
function ro(t) {
  return It(t) && jt(t) == J1;
}
var Qs = Object.prototype, Q1 = Qs.hasOwnProperty, tw = Qs.propertyIsEnumerable, tu = ro(/* @__PURE__ */ function() {
  return arguments;
}()) ? ro : function(t) {
  return It(t) && Q1.call(t, "callee") && !tw.call(t, "callee");
};
function nw() {
  return !1;
}
var nu = typeof exports == "object" && exports && !exports.nodeType && exports, io = nu && typeof module == "object" && module && !module.nodeType && module, ew = io && io.exports === nu, ao = ew ? yt.Buffer : void 0, rw = ao ? ao.isBuffer : void 0, Hr = rw || nw, iw = "[object Arguments]", aw = "[object Array]", ow = "[object Boolean]", sw = "[object Date]", uw = "[object Error]", lw = "[object Function]", cw = "[object Map]", fw = "[object Number]", hw = "[object Object]", pw = "[object RegExp]", dw = "[object Set]", gw = "[object String]", yw = "[object WeakMap]", _w = "[object ArrayBuffer]", vw = "[object DataView]", mw = "[object Float32Array]", ww = "[object Float64Array]", bw = "[object Int8Array]", xw = "[object Int16Array]", Mw = "[object Int32Array]", Aw = "[object Uint8Array]", $w = "[object Uint8ClampedArray]", Nw = "[object Uint16Array]", Tw = "[object Uint32Array]", N = {};
N[mw] = N[ww] = N[bw] = N[xw] = N[Mw] = N[Aw] = N[$w] = N[Nw] = N[Tw] = !0;
N[iw] = N[aw] = N[_w] = N[ow] = N[vw] = N[sw] = N[uw] = N[lw] = N[cw] = N[fw] = N[hw] = N[pw] = N[dw] = N[gw] = N[yw] = !1;
function Sw(t) {
  return It(t) && Ti(t.length) && !!N[jt(t)];
}
function kw(t) {
  return function(n) {
    return t(n);
  };
}
var eu = typeof exports == "object" && exports && !exports.nodeType && exports, gn = eu && typeof module == "object" && module && !module.nodeType && module, Pw = gn && gn.exports === eu, hr = Pw && Vs.process, oo = function() {
  try {
    var t = gn && gn.require && gn.require("util").types;
    return t || hr && hr.binding && hr.binding("util");
  } catch {
  }
}(), so = oo && oo.isTypedArray, ru = so ? kw(so) : Sw, zw = Object.prototype, Ew = zw.hasOwnProperty;
function iu(t, n) {
  var e = W(t), r = !e && tu(t), i = !e && !r && Hr(t), a = !e && !r && !i && ru(t), o = e || r || i || a, s = o ? Z1(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || Ew.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ue(u, l))) && s.push(u);
  return s;
}
function au(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Ow = au(Object.keys, Object), Cw = Object.prototype, Iw = Cw.hasOwnProperty;
function Rw(t) {
  if (!Js(t))
    return Ow(t);
  var n = [];
  for (var e in Object(t))
    Iw.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Ge(t) {
  return Cn(t) ? iu(t) : Rw(t);
}
function qw(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var jw = Object.prototype, Fw = jw.hasOwnProperty;
function Dw(t) {
  if (!ht(t))
    return qw(t);
  var n = Js(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Fw.call(t, r)) || e.push(r);
  return e;
}
function Lw(t) {
  return Cn(t) ? iu(t, !0) : Dw(t);
}
var Hw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bw = /^\w*$/;
function Si(t, n) {
  if (W(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Be(t) ? !0 : Bw.test(t) || !Hw.test(t) || n != null && t in Object(n);
}
var Tn = Dt(Object, "create");
function Xw() {
  this.__data__ = Tn ? Tn(null) : {}, this.size = 0;
}
function Uw(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Yw = "__lodash_hash_undefined__", Gw = Object.prototype, Vw = Gw.hasOwnProperty;
function Kw(t) {
  var n = this.__data__;
  if (Tn) {
    var e = n[t];
    return e === Yw ? void 0 : e;
  }
  return Vw.call(n, t) ? n[t] : void 0;
}
var Ww = Object.prototype, Zw = Ww.hasOwnProperty;
function Jw(t) {
  var n = this.__data__;
  return Tn ? n[t] !== void 0 : Zw.call(n, t);
}
var Qw = "__lodash_hash_undefined__";
function tb(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Tn && n === void 0 ? Qw : n, this;
}
function Rt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
Rt.prototype.clear = Xw;
Rt.prototype.delete = Uw;
Rt.prototype.get = Kw;
Rt.prototype.has = Jw;
Rt.prototype.set = tb;
function nb() {
  this.__data__ = [], this.size = 0;
}
function Ve(t, n) {
  for (var e = t.length; e--; )
    if (Ye(t[e][0], n))
      return e;
  return -1;
}
var eb = Array.prototype, rb = eb.splice;
function ib(t) {
  var n = this.__data__, e = Ve(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : rb.call(n, e, 1), --this.size, !0;
}
function ab(t) {
  var n = this.__data__, e = Ve(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function ob(t) {
  return Ve(this.__data__, t) > -1;
}
function sb(t, n) {
  var e = this.__data__, r = Ve(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function _t(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = nb;
_t.prototype.delete = ib;
_t.prototype.get = ab;
_t.prototype.has = ob;
_t.prototype.set = sb;
var Sn = Dt(yt, "Map");
function ub() {
  this.size = 0, this.__data__ = {
    hash: new Rt(),
    map: new (Sn || _t)(),
    string: new Rt()
  };
}
function lb(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Ke(t, n) {
  var e = t.__data__;
  return lb(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function cb(t) {
  var n = Ke(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function fb(t) {
  return Ke(this, t).get(t);
}
function hb(t) {
  return Ke(this, t).has(t);
}
function pb(t, n) {
  var e = Ke(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function vt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
vt.prototype.clear = ub;
vt.prototype.delete = cb;
vt.prototype.get = fb;
vt.prototype.has = hb;
vt.prototype.set = pb;
var db = "Expected a function";
function ki(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(db);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], a = e.cache;
    if (a.has(i))
      return a.get(i);
    var o = t.apply(this, r);
    return e.cache = a.set(i, o) || a, o;
  };
  return e.cache = new (ki.Cache || vt)(), e;
}
ki.Cache = vt;
var gb = 500;
function yb(t) {
  var n = ki(t, function(r) {
    return e.size === gb && e.clear(), r;
  }), e = n.cache;
  return n;
}
var _b = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vb = /\\(\\)?/g, mb = yb(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(_b, function(e, r, i, a) {
    n.push(i ? a.replace(vb, "$1") : r || e);
  }), n;
});
function We(t) {
  return t == null ? "" : Ws(t);
}
function Ze(t, n) {
  return W(t) ? t : Si(t, n) ? [t] : mb(We(t));
}
function In(t) {
  if (typeof t == "string" || Be(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Pi(t, n) {
  n = Ze(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[In(n[e++])];
  return e && e == r ? t : void 0;
}
function wb(t, n, e) {
  var r = t == null ? void 0 : Pi(t, n);
  return r === void 0 ? e : r;
}
function ou(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var bb = au(Object.getPrototypeOf, Object);
function xb(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++r < i; )
    a[r] = t[r + n];
  return a;
}
function Mb(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, xb(t, n, e);
}
var Ab = "\\ud800-\\udfff", $b = "\\u0300-\\u036f", Nb = "\\ufe20-\\ufe2f", Tb = "\\u20d0-\\u20ff", Sb = $b + Nb + Tb, kb = "\\ufe0e\\ufe0f", Pb = "\\u200d", zb = RegExp("[" + Pb + Ab + Sb + kb + "]");
function su(t) {
  return zb.test(t);
}
function Eb(t) {
  return t.split("");
}
var uu = "\\ud800-\\udfff", Ob = "\\u0300-\\u036f", Cb = "\\ufe20-\\ufe2f", Ib = "\\u20d0-\\u20ff", Rb = Ob + Cb + Ib, qb = "\\ufe0e\\ufe0f", jb = "[" + uu + "]", Br = "[" + Rb + "]", Xr = "\\ud83c[\\udffb-\\udfff]", Fb = "(?:" + Br + "|" + Xr + ")", lu = "[^" + uu + "]", cu = "(?:\\ud83c[\\udde6-\\uddff]){2}", fu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Db = "\\u200d", hu = Fb + "?", pu = "[" + qb + "]?", Lb = "(?:" + Db + "(?:" + [lu, cu, fu].join("|") + ")" + pu + hu + ")*", Hb = pu + hu + Lb, Bb = "(?:" + [lu + Br + "?", Br, cu, fu, jb].join("|") + ")", Xb = RegExp(Xr + "(?=" + Xr + ")|" + Bb + Hb, "g");
function Ub(t) {
  return t.match(Xb) || [];
}
function Yb(t) {
  return su(t) ? Ub(t) : Eb(t);
}
function Gb(t) {
  return function(n) {
    n = We(n);
    var e = su(n) ? Yb(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Mb(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var Vb = Gb("toUpperCase");
function Kb(t) {
  return Vb(We(t).toLowerCase());
}
function Wb() {
  this.__data__ = new _t(), this.size = 0;
}
function Zb(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function Jb(t) {
  return this.__data__.get(t);
}
function Qb(t) {
  return this.__data__.has(t);
}
var tx = 200;
function nx(t, n) {
  var e = this.__data__;
  if (e instanceof _t) {
    var r = e.__data__;
    if (!Sn || r.length < tx - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new vt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function lt(t) {
  var n = this.__data__ = new _t(t);
  this.size = n.size;
}
lt.prototype.clear = Wb;
lt.prototype.delete = Zb;
lt.prototype.get = Jb;
lt.prototype.has = Qb;
lt.prototype.set = nx;
function ex(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, a = []; ++e < r; ) {
    var o = t[e];
    n(o, e, t) && (a[i++] = o);
  }
  return a;
}
function du() {
  return [];
}
var rx = Object.prototype, ix = rx.propertyIsEnumerable, uo = Object.getOwnPropertySymbols, gu = uo ? function(t) {
  return t == null ? [] : (t = Object(t), ex(uo(t), function(n) {
    return ix.call(t, n);
  }));
} : du, ax = Object.getOwnPropertySymbols, ox = ax ? function(t) {
  for (var n = []; t; )
    ou(n, gu(t)), t = bb(t);
  return n;
} : du;
function yu(t, n, e) {
  var r = n(t);
  return W(t) ? r : ou(r, e(t));
}
function lo(t) {
  return yu(t, Ge, gu);
}
function sx(t) {
  return yu(t, Lw, ox);
}
var Ur = Dt(yt, "DataView"), Yr = Dt(yt, "Promise"), Gr = Dt(yt, "Set"), co = "[object Map]", ux = "[object Object]", fo = "[object Promise]", ho = "[object Set]", po = "[object WeakMap]", go = "[object DataView]", lx = Ft(Ur), cx = Ft(Sn), fx = Ft(Yr), hx = Ft(Gr), px = Ft(Lr), st = jt;
(Ur && st(new Ur(new ArrayBuffer(1))) != go || Sn && st(new Sn()) != co || Yr && st(Yr.resolve()) != fo || Gr && st(new Gr()) != ho || Lr && st(new Lr()) != po) && (st = function(t) {
  var n = jt(t), e = n == ux ? t.constructor : void 0, r = e ? Ft(e) : "";
  if (r)
    switch (r) {
      case lx:
        return go;
      case cx:
        return co;
      case fx:
        return fo;
      case hx:
        return ho;
      case px:
        return po;
    }
  return n;
});
var yo = yt.Uint8Array, dx = "__lodash_hash_undefined__";
function gx(t) {
  return this.__data__.set(t, dx), this;
}
function yx(t) {
  return this.__data__.has(t);
}
function Te(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new vt(); ++n < e; )
    this.add(t[n]);
}
Te.prototype.add = Te.prototype.push = gx;
Te.prototype.has = yx;
function _x(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function vx(t, n) {
  return t.has(n);
}
var mx = 1, wx = 2;
function _u(t, n, e, r, i, a) {
  var o = e & mx, s = t.length, l = n.length;
  if (s != l && !(o && l > s))
    return !1;
  var u = a.get(t), c = a.get(n);
  if (u && c)
    return u == n && c == t;
  var h = -1, f = !0, p = e & wx ? new Te() : void 0;
  for (a.set(t, n), a.set(n, t); ++h < s; ) {
    var d = t[h], y = n[h];
    if (r)
      var w = o ? r(y, d, h, n, t, a) : r(d, y, h, t, n, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!_x(n, function(_, x) {
        if (!vx(p, x) && (d === _ || i(d, _, e, r, a)))
          return p.push(x);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === y || i(d, y, e, r, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(t), a.delete(n), f;
}
function vu(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function bx(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var xx = 1, Mx = 2, Ax = "[object Boolean]", $x = "[object Date]", Nx = "[object Error]", Tx = "[object Map]", Sx = "[object Number]", kx = "[object RegExp]", Px = "[object Set]", zx = "[object String]", Ex = "[object Symbol]", Ox = "[object ArrayBuffer]", Cx = "[object DataView]", _o = xt ? xt.prototype : void 0, pr = _o ? _o.valueOf : void 0;
function Ix(t, n, e, r, i, a, o) {
  switch (e) {
    case Cx:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Ox:
      return !(t.byteLength != n.byteLength || !a(new yo(t), new yo(n)));
    case Ax:
    case $x:
    case Sx:
      return Ye(+t, +n);
    case Nx:
      return t.name == n.name && t.message == n.message;
    case kx:
    case zx:
      return t == n + "";
    case Tx:
      var s = vu;
    case Px:
      var l = r & xx;
      if (s || (s = bx), t.size != n.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == n;
      r |= Mx, o.set(t, n);
      var c = _u(s(t), s(n), r, i, a, o);
      return o.delete(t), c;
    case Ex:
      if (pr)
        return pr.call(t) == pr.call(n);
  }
  return !1;
}
var Rx = 1, qx = Object.prototype, jx = qx.hasOwnProperty;
function Fx(t, n, e, r, i, a) {
  var o = e & Rx, s = lo(t), l = s.length, u = lo(n), c = u.length;
  if (l != c && !o)
    return !1;
  for (var h = l; h--; ) {
    var f = s[h];
    if (!(o ? f in n : jx.call(n, f)))
      return !1;
  }
  var p = a.get(t), d = a.get(n);
  if (p && d)
    return p == n && d == t;
  var y = !0;
  a.set(t, n), a.set(n, t);
  for (var w = o; ++h < l; ) {
    f = s[h];
    var _ = t[f], x = n[f];
    if (r)
      var M = o ? r(x, _, f, n, t, a) : r(_, x, f, t, n, a);
    if (!(M === void 0 ? _ === x || i(_, x, e, r, a) : M)) {
      y = !1;
      break;
    }
    w || (w = f == "constructor");
  }
  if (y && !w) {
    var g = t.constructor, m = n.constructor;
    g != m && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof m == "function" && m instanceof m) && (y = !1);
  }
  return a.delete(t), a.delete(n), y;
}
var Dx = 1, vo = "[object Arguments]", mo = "[object Array]", Kn = "[object Object]", Lx = Object.prototype, wo = Lx.hasOwnProperty;
function Hx(t, n, e, r, i, a) {
  var o = W(t), s = W(n), l = o ? mo : st(t), u = s ? mo : st(n);
  l = l == vo ? Kn : l, u = u == vo ? Kn : u;
  var c = l == Kn, h = u == Kn, f = l == u;
  if (f && Hr(t)) {
    if (!Hr(n))
      return !1;
    o = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new lt()), o || ru(t) ? _u(t, n, e, r, i, a) : Ix(t, n, l, e, r, i, a);
  if (!(e & Dx)) {
    var p = c && wo.call(t, "__wrapped__"), d = h && wo.call(n, "__wrapped__");
    if (p || d) {
      var y = p ? t.value() : t, w = d ? n.value() : n;
      return a || (a = new lt()), i(y, w, e, r, a);
    }
  }
  return f ? (a || (a = new lt()), Fx(t, n, e, r, i, a)) : !1;
}
function zi(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !It(t) && !It(n) ? t !== t && n !== n : Hx(t, n, e, r, zi, i);
}
var Bx = 1, Xx = 2;
function Ux(t, n, e, r) {
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
      var c = new lt(), h;
      if (!(h === void 0 ? zi(u, l, Bx | Xx, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function mu(t) {
  return t === t && !ht(t);
}
function Yx(t) {
  for (var n = Ge(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, mu(i)];
  }
  return n;
}
function wu(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function Gx(t) {
  var n = Yx(t);
  return n.length == 1 && n[0][2] ? wu(n[0][0], n[0][1]) : function(e) {
    return e === t || Ux(e, t, n);
  };
}
function Vx(t, n) {
  return t != null && n in Object(t);
}
function bu(t, n, e) {
  n = Ze(n, t);
  for (var r = -1, i = n.length, a = !1; ++r < i; ) {
    var o = In(n[r]);
    if (!(a = t != null && e(t, o)))
      break;
    t = t[o];
  }
  return a || ++r != i ? a : (i = t == null ? 0 : t.length, !!i && Ti(i) && Ue(o, i) && (W(t) || tu(t)));
}
function Kx(t, n) {
  return t != null && bu(t, n, Vx);
}
var Wx = 1, Zx = 2;
function Jx(t, n) {
  return Si(t) && mu(n) ? wu(In(t), n) : function(e) {
    var r = wb(e, t);
    return r === void 0 && r === n ? Kx(e, t) : zi(n, r, Wx | Zx);
  };
}
function Qx(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function t2(t) {
  return function(n) {
    return Pi(n, t);
  };
}
function n2(t) {
  return Si(t) ? Qx(In(t)) : t2(t);
}
function xu(t) {
  return typeof t == "function" ? t : t == null ? Ni : typeof t == "object" ? W(t) ? Jx(t[0], t[1]) : Gx(t) : n2(t);
}
function e2(t) {
  return function(n, e, r) {
    for (var i = -1, a = Object(n), o = r(n), s = o.length; s--; ) {
      var l = o[++i];
      if (e(a[l], l, a) === !1)
        break;
    }
    return n;
  };
}
var r2 = e2();
function i2(t, n) {
  return t && r2(t, n, Ge);
}
function a2(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Cn(e))
      return t(e, r);
    for (var i = e.length, a = -1, o = Object(e); ++a < i && r(o[a], a, o) !== !1; )
      ;
    return e;
  };
}
var Mu = a2(i2);
function o2(t) {
  return typeof t == "function" ? t : Ni;
}
function yn(t, n) {
  var e = W(t) ? L1 : Mu;
  return e(t, o2(n));
}
function s2(t, n) {
  return Xe(n, function(e) {
    return [e, t[e]];
  });
}
function u2(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var l2 = "[object Map]", c2 = "[object Set]";
function f2(t) {
  return function(n) {
    var e = st(n);
    return e == l2 ? vu(n) : e == c2 ? u2(n) : s2(n, t(n));
  };
}
var Au = f2(Ge);
function h2(t, n) {
  var e = -1, r = Cn(t) ? Array(t.length) : [];
  return Mu(t, function(i, a, o) {
    r[++e] = n(i, a, o);
  }), r;
}
function Mt(t, n) {
  var e = W(t) ? Xe : h2;
  return e(t, xu(n));
}
var p2 = Object.prototype, d2 = p2.hasOwnProperty;
function g2(t, n) {
  return t != null && d2.call(t, n);
}
function $u(t, n) {
  return t != null && bu(t, n, g2);
}
var y2 = "[object Boolean]";
function _2(t) {
  return t === !0 || t === !1 || It(t) && jt(t) == y2;
}
function v2(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var a = n(t[r]);
    a !== void 0 && (e = e === void 0 ? a : e + a);
  }
  return e;
}
var m2 = NaN;
function w2(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? v2(t, n) / e : m2;
}
function bo(t) {
  return w2(t, Ni);
}
function b2(t, n, e, r) {
  if (!ht(t))
    return t;
  n = Ze(n, t);
  for (var i = -1, a = n.length, o = a - 1, s = t; s != null && ++i < a; ) {
    var l = In(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != o) {
      var c = s[l];
      u = void 0, u === void 0 && (u = ht(c) ? c : Ue(n[i + 1]) ? [] : {});
    }
    G1(s, l, u), s = s[l];
  }
  return t;
}
function x2(t, n, e) {
  for (var r = -1, i = n.length, a = {}; ++r < i; ) {
    var o = n[r], s = Pi(t, o);
    e(s, o) && b2(a, Ze(o, t), s);
  }
  return a;
}
function Ei(t, n) {
  if (t == null)
    return {};
  var e = Xe(sx(t), function(r) {
    return [r];
  });
  return n = xu(n), x2(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var M2 = Math.ceil, A2 = Math.max;
function $2(t, n, e, r) {
  for (var i = -1, a = A2(M2((n - t) / (e || 1)), 0), o = Array(a); a--; )
    o[++i] = t, t += e;
  return o;
}
function N2(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && K1(n, e, r) && (e = r = void 0), n = cr(n), e === void 0 ? (e = n, n = 0) : e = cr(e), r = r === void 0 ? n < e ? 1 : -1 : cr(r), $2(n, e, r);
  };
}
var Nu = N2();
function T2() {
  var t = arguments, n = We(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
const k = {
  widgets: {
    slider_size: 400,
    slider_gap: 1.5,
    slider_anchor: { x: 1, y: 8 },
    toggle_anchor: { x: 7, y: 4 },
    toggle_label_pos: "right",
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 },
    radio_anchor: { x: 7, y: 2 },
    radio_size: 150,
    radio_orientation: "horizontal",
    radio_label_position: "top",
    radio_shape: "rect"
  },
  simulation: {
    delay: 10
  }
}, z = {
  dt: 1,
  L: 100,
  agentsize: 1,
  speed: {
    range: [0, 1],
    default: 0.2
  },
  wiggle: {
    range: [0, 180],
    default: 50
  },
  interaction_radius: {
    range: [0, 5],
    default: 3
  },
  number_of_particles: {
    choices: [50, 100, 200, 400],
    default: 2
  },
  color_by_heading: {
    default: !0
  }
}, Oi = (t) => Mt(Au(t), (n) => {
  n[1].id = n[0], n[1].label = T2(Kb(n[0]), /_/g, " ");
}), Ci = (t) => Mt(Au(t), (n) => n[1]), Ii = (t, n) => yn(t, (e, r) => e.widget = n[r]), S2 = (t) => Ei(t, (n) => $u(n, "range")), k2 = (t) => Ei(t, (n) => _2(n.default)), P2 = (t) => Ei(t, (n) => $u(n, "choices")), dr = zn().domain([0, 360]).range([0, 2 * Math.PI]), z2 = zn().range([0, 360]).domain([0, 2 * Math.PI]), Ri = S2(z), qi = k2(z), ji = P2(z);
Oi(Ri);
Oi(qi);
Oi(ji);
const Tu = Ci(Ri), Su = Ci(qi), ku = Ci(ji), ie = Mt(
  Tu,
  (t) => Wm().id(t.id).label(t.label).range(t.range).value(t.default).size(k.widgets.slider_size)
), Vr = Mt(
  Su,
  (t) => Zm().id(t.id).label(t.label).value(t.default)
), Kr = Mt(
  ku,
  (t) => Jm().choices(t.choices).id(t.id).value(t.default).orientation(k.widgets.radio_orientation).labelposition(k.widgets.radio_label_position)
);
Ii(Su, Vr);
Ii(Tu, ie);
Ii(ku, Kr);
const bt = $i().actions(["play", "pause"]), Je = $i().actions(["back"]), Qe = $i().actions(["rewind"]), E2 = [bt, Je, Qe], O2 = (t, n) => {
  const e = n.position(k.widgets.slider_anchor.x, Nu(ie.length).map((a) => k.widgets.slider_anchor.y + k.widgets.slider_gap * a)), r = n.position(k.widgets.toggle_anchor.x, k.widgets.toggle_anchor.y), i = n.position(k.widgets.radio_anchor.x, k.widgets.radio_anchor.y);
  ie.forEach((a, o) => a.position(e[o])), Vr[0].position(r).labelposition(k.widgets.toggle_label_pos), Kr[0].position(i).size(k.widgets.radio_size).shape(k.widgets.radio_shape), bt.position(n.position(k.widgets.playbutton_anchor.x, k.widgets.playbutton_anchor.y)).size(k.widgets.playbutton_size), Qe.position(n.position(k.widgets.backbutton_anchor.x, k.widgets.backbutton_anchor.y)), Je.position(n.position(k.widgets.resetbutton_anchor.x, k.widgets.resetbutton_anchor.y)), t.selectAll(null).data(ie).enter().append(Vn), t.selectAll(null).data(Vr).enter().append(Vn), t.selectAll(null).data(E2).enter().append(Vn), t.selectAll(null).data(Kr).enter().append(Vn);
}, C2 = (t) => {
  yn(Ri, (n) => n.widget.reset(t, n.default)), yn(qi, (n) => n.widget.reset(t, n.default)), yn(ji, (n) => n.widget.reset(t, n.default)), z.number_of_particles.widget.update();
}, wt = z.L, xo = z.dt;
var Se = [];
const I2 = () => {
  z.timer = {}, z.tick = 0;
  const t = z.number_of_particles.choices[z.number_of_particles.widget.value()];
  Se = Mt(Nu(t), (n) => ({
    index: n,
    x: wt * Math.random(),
    y: wt * Math.random(),
    theta: 2 * Math.PI * Math.random()
  }));
}, R2 = () => {
  z.tick++, yn(Se, (t) => {
    var n = xo * z.speed.widget.value() * Math.cos(t.theta), e = xo * z.speed.widget.value() * Math.sin(t.theta);
    const r = t.x + n, i = t.y + e;
    r < 0 && (n += wt), i < 0 && (e += wt), r > wt && (n -= wt), i > wt && (e -= wt), t.x += n, t.y += e;
    var a = Se.filter((l) => (l.x - t.x) ** 2 + (l.y - t.y) ** 2 <= z.interaction_radius.widget.value() ** 2), o = bo(Mt(a, (l) => Math.cos(dr(l.theta)))), s = bo(Mt(a, (l) => Math.sin(dr(l.theta))));
    t.theta = z2(Math.atan2(s, o)), t.theta += dr(z.wiggle.widget.value()) * (Math.random() - 0.5);
  });
}, q2 = "_agent_b27yc_1", Pu = {
  agent: q2
}, zu = z.L, ae = zn().domain([0, zu]), Wr = zn().domain([0, zu]), j2 = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  ae.range([0, e]), Wr.range([0, r]), t.selectAll("#origin").remove(), t.append("g").attr("id", "origin").selectAll(null).data(Se).enter().append("circle").attr("class", Pu.agent).attr("cx", (a) => ae(a.x)).attr("cy", (a) => Wr(a.y)).attr("r", ae(z.agentsize / 2)).style("fill", (a) => z.color_by_heading.widget.value() ? ts(a.theta / 2 / Math.PI) : null);
}, F2 = (t, n) => {
  t.selectAll("." + Pu.agent).attr("cx", (e) => ae(e.x)).attr("cy", (e) => Wr(e.y)).style("fill", (e) => z.color_by_heading.widget.value() ? ts(e.theta / 2 / Math.PI) : null);
};
function D2(t, n) {
  R2(), F2(t);
}
function Zr(t, n) {
  I2(), j2(t, n);
}
var Mo = {};
const L2 = (t, n) => {
  bt.value() == 1 ? Mo = ef(() => D2(t), k.simulation.delay) : Mo.stop();
}, H2 = (t, n, e) => {
  Qe.update(() => C2(n)), bt.update(() => L2(t)), Je.update(() => Zr(t, e)), z.number_of_particles.widget.update(() => Zr(t, e));
}, B2 = {
  name: "@explorables/explorable_template",
  title: "Explorable Title",
  subtitle: "Explorable Subtitle",
  description: "This is a template for making a complexity explorable. The template can be used to create a new complexity explorable. This template implements the Vicsek Model.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function X2(t, n = Eu) {
  const e = r1(t, n), r = e.display, i = e.controls, a = e.grid;
  return O2(i, a), H2(r, i, n), Zr(r, n), {
    halt() {
      bt.value() === 1 && bt.press(i);
    },
    reset() {
      bt.value() === 1 && bt.press(i), Qe.press(i), Je.press(i);
    },
    config: n,
    meta: B2
  };
}
export {
  Eu as config,
  X2 as default,
  X2 as load,
  B2 as meta
};
